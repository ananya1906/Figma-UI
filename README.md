# Figma User - Interface

This repository contains the source code for a self-designed Figma home-page. The goal is to create a pixel-perfect webpage based on the provided Figma mockups using only HTML, CSS, and JavaScript.

---

## Live Demo

You can view the deployed frontend website here:  
[Live Site on Render](https://figma-ui.onrender.com)


## Overview

This assignment involves implementing a static webpage comprising multiple sections with precise layout and styling. The page should match the design exactly and work seamlessly across major browsers (Chrome, Firefox, Safari).

---

## Features & Requirements

- **Pixel-perfect design:** Use the PerfectPixel Chrome extension or similar for exact matching with Figma designs.
- **Browser compatibility:** Fully functional and consistent on Chrome, Firefox, and Safari.
- **Clean semantic markup:** Use modern HTML5 tags such as `<section>`, `<header>`, `<footer>`, `<article>`, `<nav>`.
- **Layout structure:** Use `<div>` elements for layout, avoid `<table>`, `<tr>`, `<td>` tags.
- **Fonts:** Use Open Sans font family from Google Fonts as specified.
- **Carousel/Slider:** Implement a working image slider/carousel with basic navigation controls.
- **No UI Frameworks:** Avoid using Bootstrap, Material UI, React, Angular, or any CSS/JS frameworks except for the slider.
- **Best practices:** Write clean, optimized, maintainable code following industry standards.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Plain, jQuery allowed for slider)
- Google Fonts - Open Sans

---

## How to Run Locally

1. Clone the repository:
   git clone <https://github.com/ananya1906/Figma-UI>
   cd <repo-folder>

   
2. Open `index.html` in any modern web browser (Chrome, Firefox, Safari).

3. No server or build tools are required.

---

## Folder Structure


Figma-UI/
│
├── index.html                # Main HTML file
│
├── css/
│   └── style.css             # CSS styles for the entire website
│
├── js/
│   └── main.js               # JavaScript for interactivity (including slider/carousel)
│
├── assets/
│   ├── icons/                # Social/media/other icons (PNG extracted from Figma)
│   │    ├── email.png
│   │    ├── facebook.png
│   │    ├── linkedin.png
│   │    ├── location.png
│   │    ├── phone.png
│   │    └── twitter.png
│   ├── images/               # Other images used in the design
│   └── videos/               # Any video assets, if the design uses them
│
└── README.md                 # Project description, instructions, tech stack



## Known Issues or Limitations

- Mobile responsiveness is basic and may need improvements.
- No automated testing included.
- Slider uses jQuery plugin, other interactive features are minimal.







