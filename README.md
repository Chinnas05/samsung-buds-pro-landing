# Samsung Buds Pro Landing Page 🎧

An interactive **3D product landing page** for the Samsung Buds Pro, built with **Tailwind CSS**, **JavaScript**, and a lightweight **Flask** backend.  
Includes a live `.glb` 3D model viewer, AR mode support, and multiple design themes.

![Samsung Buds Pro Screenshot](static/assets/preview.jpg)

---

## ✨ Features
- **3D Model Viewer** using `<model-viewer>` with rotation, zoom, and AR support.
- **Theme Switcher** – Choose between Dark Glow, Gradient Pop, Minimal White, and Cyber Neon designs.
- **Responsive Layout** – Optimized for mobile, tablet, and desktop.
- **Configurable Text & Links** – Easily update price, title, and DM/CTA links in one place (`app.js`).
- **Flask Backend** – Simple Python server for local development or deployment.
- **Tailwind CSS** – Modern utility-first styling.

---

## 📂 Project Structure
samsung-buds-pro-landing/
├── app.py # Flask server
├── templates/
│ └── index.html # Main HTML template
├── static/
│ ├── app.js # Main JavaScript (config + interactivity)
│ └── assets/ # Models, images, backgrounds
│ ├── buds.glb # 3D model file
│ ├── bg-dark.jpg # Background for Dark Glow theme
│ ├── bg-white.jpg # Background for Minimal White theme
│ ├── bg-cyber.jpg # Background for Cyber Neon theme
│ └── preview.jpg # Optional preview image for README
└── README.md 


---

## 🚀 Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/<your-username>/samsung-buds-pro-landing.git
cd samsung-buds-pro-landing
