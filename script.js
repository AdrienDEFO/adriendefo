document.addEventListener("DOMContentLoaded", () => {
  const photoPage = document.body.classList.contains("photo-page");

  if (photoPage) {
    const imageNames = [
      "photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg",
      "photo5.jpg", "photo6.jpg", "photo7.jpg","image.jpg","photo8"
    ];

    const gallery = document.getElementById("photo-gallery");

    imageNames.forEach((name, index) => {
      const card = document.createElement("div");
      card.className = "photo-card";
      card.style.setProperty('--i', index); // Pour animation avec délai

      const img = document.createElement("img");
      img.src = `image/${name}`;
      img.alt = `Photo ${index + 1}`;
      img.loading = "lazy";

      card.appendChild(img);
      gallery.appendChild(card);
    });
  }
});
