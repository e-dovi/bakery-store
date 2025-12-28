# 🎂 Sweet Layers Bakery
A responsive React (Create React App) application that showcases a pastel‑themed bakery storefront with a full cake menu, a build‑your‑own cake customizer, and a Redux‑powered shopping cart. The UI is styled using Styled Components with smooth animations from Framer Motion, optimized for both desktop and smaller screens.

👉 Live Demo: https://sweet-layers-bakery.netlify.app

## 📦 Features

### 🎂 Cake Menu
A scrollable list of cakes, each including:

Product image

Name

Description

Price

Add‑to‑cart button

### 🍰 Build‑Your‑Own Cake (BYO)
A fully interactive customization flow:

Select cake base, frosting, fillings, and toppings

Dynamic price updates

Custom cake name input

Responsive layout for mobile and desktop

### 🛒 Cart Integration
Cart functionality powered by Redux Toolkit:

Add/remove items

Quantity tracking

Global cart state via cartSlice.js

Floating cart badge with item count

### 🧩 Key Components
HomePage
Handles tab navigation (Menu, BYO, Cart)

Displays floating action buttons for quick access

Wraps content in animated transitions using Framer Motion

Menu
Renders the full cake catalog

Displays product cards with images and pricing

Integrates add‑to‑cart actions

Byo
Manages all customization options

Updates price based on user selections

Uses styled UI controls for toppings, inputs, and selectors

Cart
Shows all selected items

Scrollable layout for long orders

Allows item removal and quantity adjustments

### 🚀 Running the App
Install dependencies:
npm install

Start development server:
npm start

Build for production:
npm run build

### 🛠️ Technologies Used
React (CRA)

Redux Toolkit

Styled Components

Framer Motion

Lucide React for icons

### 📜 License
Copyright (c) 2025
elvis dovi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.