"use strict";

/* ---- Quick config (edit these) ---- */
var CONFIG = {
  modelSrc: "/assets/buds.glb",
  // path to your .glb file
  title: "Samsung Buds Pro",
  tagline: "Minimalist design, immersive sound, and effortless switching—your everyday premium true wireless earbuds.",
  price: "₹7,999",
  whatsappLink: "https://wa.me/919999999999?text=Hi!%20I%27d%20like%20to%20order%20Samsung%20Buds%20Pro",
  instagramLink: "https://instagram.com/yourshop",
  colorNames: {
    graphite: "Graphite",
    silver: "Silver",
    violet: "Violet",
    black: "Phantom Black"
  }
};
/* ----------------------------------- */

var $ = function $(q) {
  return document.querySelector(q);
};

window.addEventListener("DOMContentLoaded", function () {
  // Apply config text
  $("#heroTitle").textContent = CONFIG.title;
  $("#heroTag").textContent = CONFIG.tagline;
  $("#priceTag").textContent = CONFIG.price;
  $("#ctaPrimary").href = CONFIG.whatsappLink;
  $("#ctaSecondary").href = CONFIG.instagramLink; // Ensure model path

  var viewer = document.getElementById("budsViewer");
  viewer.src = CONFIG.modelSrc; // Actions

  $("#btnReset").addEventListener("click", function () {
    viewer.resetTurntableRotation();
    viewer.cameraOrbit = "0deg 75deg 105%";
  });
  $("#btnAR").addEventListener("click", function () {
    return viewer.activateAR();
  }); // Color chips (just update label, hook to swap model/variants if you have per-color .glb)

  document.querySelectorAll(".color-chip").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var c = btn.dataset.color;
      $("#colorName").textContent = CONFIG.colorNames[c] || c; // If you have different .glb per color, do it here:
      // viewer.src = `/assets/buds_${c}.glb`;
    });
  }); // Subtle parallax on mouse

  var card = viewer.closest("div.relative");
  card.addEventListener("mousemove", function (e) {
    var r = card.getBoundingClientRect();
    var x = (e.clientX - r.left) / r.width - 0.5;
    var y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = "perspective(1200px) rotateX(".concat(y * -2, "deg) rotateY(").concat(x * 3, "deg)");
  });
  card.addEventListener("mouseleave", function () {
    card.style.transform = "perspective(1200px) rotateX(0) rotateY(0)";
  });
});

function setDesign(theme) {
  var body = document.body;
  body.className = ""; // clear classes

  switch (theme) {
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

document.getElementById("designDark").addEventListener("click", function () {
  return setDesign("dark");
});
document.getElementById("designGradient").addEventListener("click", function () {
  return setDesign("gradient");
});
document.getElementById("designWhite").addEventListener("click", function () {
  return setDesign("white");
});
document.getElementById("designCyber").addEventListener("click", function () {
  return setDesign("cyber");
});
//# sourceMappingURL=app.dev.js.map
