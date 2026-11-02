const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");
const strengthFillEl = document.querySelector(".strength-fill");
const strengthTextEl = document.querySelector(".strength-text");

const lengthEl = document.getElementById("length");
const lengthValueEl = document.getElementById("length-value");
const lowerEl = document.getElementById("lower");
const upperEl = document.getElementById("upper");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

let alertTimeout;

lengthEl.addEventListener("input", () => {
  lengthValueEl.innerText = lengthEl.value;
});

btnEl.addEventListener("click", () => {
  createPassword();
});

copyIconEl.addEventListener("click", () => {
  copyPassword();
  if (inputEl.value) {
    alertContainerEl.classList.remove("active");
    clearTimeout(alertTimeout);
    alertTimeout = setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 1000);
  }
});

function createPassword() {
  let chars = "";
  if (lowerEl.checked) chars += "abcdefghijklmnopqrstuvwxyz";
  if (upperEl.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbersEl.checked) chars += "0123456789";
  if (symbolsEl.checked) chars += "!@#$%^&*()_+?:{}[]";

  if (!chars) {
    inputEl.value = "";
    updateStrength("");
    alert("Select at least one character type");
    return;
  }

  const passwordLength = Number(lengthEl.value);
  const randomValues = new Uint32Array(passwordLength);
  crypto.getRandomValues(randomValues);

  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    password += chars[randomValues[index] % chars.length];
  }

  inputEl.value = password;
  alertContainerEl.innerText = password + " copied!";
  updateStrength(password);
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
}

function getStrength(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (password.length >= 16) score++;

  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  if (password.length < 8 || score <= 3) return "weak";
  if (score <= 5) return "medium";
  return "strong";
}

function updateStrength(password) {
  if (!password) {
    strengthFillEl.className = "strength-fill";
    strengthTextEl.innerText = "";
    return;
  }

  const level = getStrength(password);
  strengthFillEl.className = `strength-fill ${level}`;
  strengthTextEl.innerText = level.charAt(0).toUpperCase() + level.slice(1);
}