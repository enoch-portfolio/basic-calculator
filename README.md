# Basic Calculator

A clean, responsive web-based **Calculator** built using HTML, CSS Grid, and vanilla JavaScript. Beyond standard arithmetic, it supports parentheses, square roots, powers, backspace deletion, and error handling.

## Features

* **Core Arithmetic:** Supports addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`), and decimal calculations.
* **Advanced Math Operations:** Includes support for grouped expressions with parentheses `( )`, square roots (`√`), and squaring numbers (`^2`).
* **Input Controls:** Features a Clear button (`C`) to reset the screen and a Delete button (`DEL`) to remove the last entered character.
* **Error Handling:** Gracefully catches invalid mathematical expressions and displays `"Error"` on the screen instead of crashing.
* **Responsive CSS Grid Layout:** Color-coded buttons arranged in a clean 4-column grid with subtle shadows and hover transitions.

## Built With

* **HTML5** – Semantic structure for the calculator display screen and button pad.
* **CSS3** – CSS Grid layout, custom button color coding, inset display shadow, and hover effects.
* **JavaScript (ES6)** – Event listeners, string manipulation, regular expressions (`RegExp`) for parsing math symbols, and expression evaluation.

## Project Structure

```text
basic-calculator/
├── index.html      # Main HTML structure
├── style.css       # Grid layout and button styling
└── script.js       # Calculator logic and expression parser
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com
   ```
2. **Navigate to the project folder**
   ```bash
   cd basic-calculator
   ```
3. **Run the project**
   Open `index.html` directly in any web browser. No installations or build tools are required.

## Future Improvements

* Add keyboard support so users can type numbers and operators directly from their keyboard.
* Replace `eval()` with a custom math parser for improved security and expression control.
* Remove the duplicate `calculateResult()` function definition in `script.js` to keep the codebase clean.
