# 🔐 Random Password Generator

A simple, responsive password generator built with HTML, CSS and vanilla JavaScript. Choose the length and character types, generate a password, check its strength and copy it with one click.

## Live Demo: [your-vercel-link-here](https://your-vercel-link-here)

![Screenshot](screenshot.png)

## Features

- Adjustable password length (4 to 32 characters) with a slider
- Choose character types: lowercase, uppercase, numbers, symbols
- Strength indicator (Weak / Medium / Strong) based on length and character variety
- Secure randomness using `crypto.getRandomValues()` instead of `Math.random()`
- One-click copy to clipboard with a confirmation alert
- Responsive layout for mobile and desktop

##  Built With

- HTML5
- CSS3 (Flexbox, Grid, transitions)
- JavaScript (ES6)

## JavaScript Concepts Practiced

- DOM selection (`querySelector`, `getElementById`)
- Event handling (`click`, `input`)
- Arrow functions and modular functions
- Regular expressions for strength checking
- Clipboard API
- Web Crypto API
- `setTimeout` / `clearTimeout`
- Dynamic class names to update the UI

## Run Locally

bash
git clone https://github.com/letscodewithfaisal/random-password-generator.git
cd random-password-generator


Then open `index.html` in your browser, or use the Live Server extension in VS Code.

##  Project Structure
├── index.html
├── style.css
├── index.js
└── README.md


## Future Improvements

- Show/hide password toggle
- Password history
- Dark mode
- Exclude look-alike characters (O, 0, l, 1)

##  Author
[LinkedIn] - www.linkedin.com/in/faisal-siddiqui-b42980228 
[GitHub] - https://github.com/letscodewithfaisal/random-password-generator
