/* ---- Quick config (edit these) ---- */
const CONFIG = {
  modelSrc: "/assets/buds.glb",     // path to your .glb file
  title: "Samsung Buds Pro",
  tagline: "Minimalist design, immersive sound, and effortless switching—your everyday premium true wireless earbuds.",
  price: "₹7,999",
  whatsappLink: "https://wa.me/919999999999?text=Hi!%20I%27d%20like%20to%20order%20Samsung%20Buds%20Pro",
  instagramLink: "https://instagram.com/yourshop",
  colorNames: { graphite: "Graphite", silver: "Silver", violet: "Violet", black: "Phantom Black" }
};
/* ----------------------------------- */

const $ = (q) => document.querySelector(q);

window.addEventListener("DOMContentLoaded", () => {
  // Apply config text
  $("#heroTitle").textContent = CONFIG.title;
  $("#heroTag").textContent = CONFIG.tagline;
  $("#priceTag").textContent = CONFIG.price;
  $("#ctaPrimary").href = CONFIG.whatsappLink;
  $("#ctaSecondary").href = CONFIG.instagramLink;

  // Ensure model path
  const viewer = document.getElementById("budsViewer");
  viewer.src = CONFIG.modelSrc;

  // Actions
  $("#btnReset").addEventListener("click", () => {
    viewer.resetTurntableRotation();
    viewer.cameraOrbit = "0deg 75deg 105%";
  });
  $("#btnAR").addEventListener("click", () => viewer.activateAR());

  // Color chips (just update label, hook to swap model/variants if you have per-color .glb)
  document.querySelectorAll(".color-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      const c = btn.dataset.color;
      $("#colorName").textContent = CONFIG.colorNames[c] || c;
      // If you have different .glb per color, do it here:
      // viewer.src = `/assets/buds_${c}.glb`;
    });
  });

  // Subtle parallax on mouse
  const card = viewer.closest("div.relative");
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(1200px) rotateX(${y * -2}deg) rotateY(${x * 3}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1200px) rotateX(0) rotateY(0)";
  });
});

function setDesign(theme) {
  const body = document.body;
  body.className = ""; // clear classes

  switch(theme) {
    case "dark":
      body.classList.add("bg-neutral-950", "text-white");
      document.querySelector(".hero-bg").style.backgroundImage = "url('/assets/bg-dark.jpg')";
      break;
    case "gradient":
      body.classList.add("bg-gradient-to-br", "from-pink-500", "via-purple-500", "to-indigo-500", "text-white");
      document.querySelector(".hero-bg").style.backgroundImage = "none";
      break;
    case "white":
      body.classList.add("bg-white", "text-black");
      document.querySelector(".hero-bg").style.backgroundImage = "url('/assets/bg-white.jpg')";
      break;
    case "cyber":
      body.classList.add("bg-neutral-900", "text-cyan-300");
      document.querySelector(".hero-bg").style.backgroundImage = "url('/assets/bg-cyber.jpg')";
      break;
  }
}

document.getElementById("designDark").addEventListener("click", () => setDesign("dark"));
document.getElementById("designGradient").addEventListener("click", () => setDesign("gradient"));
document.getElementById("designWhite").addEventListener("click", () => setDesign("white"));
document.getElementById("designCyber").addEventListener("click", () => setDesign("cyber"));
