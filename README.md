# 📊 Tip Calculator

> A simple and responsive tip calculator built with **HTML, SCSS (Sass), and JavaScript**, featuring percentage-based tip calculation, reusable SCSS partials, responsive navigation, and interactive button effects.

<div align="center">

### 🌐 Live Demo

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-View_Project-2ea44f?style=for-the-badge)](https://godsonvo-git.github.io/tip-calculator-sass/)

</div>

---

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CF649A?style=for-the-badge&logo=sass&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Overview

**Tip Calculator** is a beginner-friendly web project created to practice **JavaScript DOM manipulation** and learn the fundamentals of **Sass/SCSS**.

The application allows users to enter a bill amount, select a tip percentage, and calculate the final amount including the tip.

The project also uses **SCSS partials, mixins, variables, and `@extend`** to create more organized and reusable styles.

---

## 🚀 Features

- 💰 Enter a bill amount
- 💸 Select a tip percentage
- 🧮 Automatically calculate the tip amount
- 🧾 Calculate the final bill amount
- 🖱️ Interactive Calculate button
- ✨ Button hover and active effects
- 📱 Responsive mobile navigation
- 📐 Flexbox-based layout
- 🎨 Reusable SCSS styles
- 🧩 SCSS partials and mixins
- ⚡ Lightweight and fast
- 🌐 Responsive viewport configuration


## 💵 Tip Calculation

The calculator uses the following formula:

```text
Tip Amount = Bill Amount × (Tip Percentage / 100)

Total Amount = Bill Amount + Tip Amount
````

### Example

```text
Bill Amount: ₹1000
Tip: 10%

Tip Amount = ₹1000 × (10 / 100)
           = ₹100

Total Amount = ₹1000 + ₹100
             = ₹1100
```

---

## 📊 Available Tip Percentages

| Tip | Value |
| --- | ----- |
| 10% | `10`  |
| 15% | `15`  |
| 20% | `20`  |

---

## 🛠️ Technologies Used

| Technology      | Purpose                                                   |
| --------------- | --------------------------------------------------------- |
| **HTML5**       | Structure of the application                              |
| **SCSS / Sass** | Styling, variables, mixins, partials, and reusable styles |
| **JavaScript**  | Tip calculation and DOM manipulation                      |
| **CSS3**        | Compiled output generated from SCSS                       |

---

## 🎨 SCSS / Sass Concepts Practiced

### 📁 SCSS Partials

The styling is separated into reusable partial files:

```text
scss/
├── _button.scss
├── _font.scss
├── _mobile.scss
├── _shadows.scss
└── main.scss
```

### 🔹 Mixins

Reusable styles are created using Sass mixins:

```scss
@mixin flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

The mixin can then be reused:

```scss
section {
    @include flexCenter;
}
```

### 🔹 `@extend`

The button styling is defined separately and reused with `@extend`:

```scss
button {
    @extend %btn-style;
}
```

### 🔹 Responsive Mixins

Mobile-specific styles are organized inside `_mobile.scss`:

```scss
@mixin hide-on-mobile {
    @media (max-width: 768px) {
        display: none;
    }
}
```

This is used to hide the navigation links on smaller screens.

### 🔹 Variables

Sass variables are used to store reusable values such as shadows and font weights.

---

## 📱 Responsive Design

The navigation adapts to smaller screens.

### Desktop

```text
Tip Calculator              Home   About US   Contact
```

### Mobile

```text
          Tip Calculator
```

The navigation links are hidden on screens below `768px`, while the heading is centered.

---

## 🧠 JavaScript Concepts Practiced

This project helped me practice several JavaScript fundamentals:

* DOM element selection
* `getElementById()`
* Variables
* `.value`
* `.textContent`
* Button click events
* `onclick`
* Arithmetic operations
* Type conversion using `Number()`
* Template literals
* Basic user input handling
* Dynamic DOM updates

---

## 🔢 JavaScript Calculation Logic

The main calculation is performed using:

```javascript
let tipamt = billamt * (tipv / 100);

let totalamt = Number(billamt) + Number(tipamt);
```

The calculated result is then displayed dynamically:

```javascript
document.getElementById("tamt").textContent = `Total Amt:${totalamt}`;
```

---

## 🎨 UI & Styling

The project uses:

* CSS Flexbox
* Responsive media queries
* Box shadows
* Rounded corners
* Button hover effects
* Button active animations
* Responsive navigation
* Reusable Sass mixins
* Sass partials
* Sass variables
* `@extend`

---

## 📂 Project Structure

```text
sass-project/
│
├── index.html
├── index.js
├── package.json
│
├── scss/
│   ├── _button.scss
│   ├── _font.scss
│   ├── _mobile.scss
│   ├── _shadows.scss
│   └── main.scss
│
├── css/
│   ├── main.css
│   └── main.css.map
│
└── README.md
```

---

## ⚙️ Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/godsonvo-git/sass-project.git
```

### 2. Navigate into the project

```bash
cd sass-project
```

### 3. Install Sass

If Sass is not already installed:

```bash
npm install -g sass
```

### 4. Compile SCSS

```bash
sass scss/main.scss css/main.css
```

### 5. Watch for SCSS changes

This project includes an npm script for automatically compiling SCSS:

```bash
npm run watch
```

The script runs:

```bash
sass scss/main.scss css/main.css -w
```

---

## 📸 Preview

<div align="center">

![Tip Calculator Preview]
<img width="1920" height="1020" alt="Screenshot 2026-10-04 131810" src="https://github.com/user-attachments/assets/d9b3c84c-e856-4c35-a29d-0eeb8698f511" />


</div>

---

## 🎯 Learning Goals

The main goals of this project were to practice:

* Building a small project from scratch
* DOM manipulation with JavaScript
* Handling user input
* Performing calculations with JavaScript
* Understanding Sass fundamentals
* Creating SCSS partials
* Using Sass mixins
* Using Sass variables
* Understanding `@extend`
* Creating responsive layouts
* Organizing CSS using Sass

---

## 👨‍💻 Author

**Godson V O**

* 🌐 [Portfolio](https://godsonvo-portfolio.vercel.app/)
* 💻 [GitHub](https://github.com/godsonvo-git)
* 🔗 [LinkedIn](https://www.linkedin.com/in/godsonvo/)

---

<div align="center">

### ⭐ If you found this project useful, consider giving the repository a star!

</div>
```
