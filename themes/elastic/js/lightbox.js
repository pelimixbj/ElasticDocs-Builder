document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("article img");

  if (!images.length) return;

  const overlay = document.createElement("div");
  overlay.className = "elastic-lightbox";

  overlay.innerHTML = `
        <img>
    `;

  document.body.appendChild(overlay);

  const viewer = overlay.querySelector("img");

  images.forEach((img) => {
    img.style.cursor = "zoom-in";

    img.addEventListener("click", () => {
      viewer.src = img.src;

      viewer.alt = img.alt;

      overlay.classList.add("open");
    });
  });

  overlay.addEventListener("click", () => {
    overlay.classList.remove("open");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      overlay.classList.remove("open");
    }
  });
});
