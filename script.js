document.addEventListener("DOMContentLoaded", () => {
  // --- PHOTOS ---
  if (document.body.classList.contains("photo-page")) {
    const imageNames = [
      "photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg",
      "photo5.jpg", "photo6.jpg", "photo7.jpg", "image.jpg"
    ];
    const gallery = document.getElementById("photo-gallery");

    const comments = [
      "La vie à la faculté des sciences de l'université de Bertoua",
      "La vie à la faculté des sciences de l'université de Bertoua",
      "La vie à la faculté des sciences de l'université de Bertoua",
      "La vie à la faculté des sciences de l'université de Bertoua",
      "La vie à la faculté des sciences de l'université de Bertoua",
      "La vie à la faculté des sciences de l'université de Bertoua",
      "La vie à la faculté des sciences de l'université de Bertoua",
      "La remise des prix lors de la compétition Hackathon orange digital center 2025"
    ];

    imageNames.forEach((name, index) => {
      const card = document.createElement("div");
      card.className = "photo-card";
      card.style.setProperty('--i', index);

      const img = document.createElement("img");
      img.src = `image/${name}`;
      img.alt = comments[index];
      img.loading = "lazy";
      img.style.cursor = "pointer";
      img.style.objectFit = "cover";
      img.style.width = "100%";
      img.style.height = "220px";

      img.addEventListener("click", () => {
        showModal({ type: "image", src: img.src, download: name });
      });

      const commentEl = document.createElement("p");
      commentEl.textContent = comments[index];
      commentEl.className = "photo-comment";

      card.appendChild(img);
      card.appendChild(commentEl);
      gallery.appendChild(card);
    });
  }

  // --- VIDEOS ---
  if (document.body.classList.contains("video-page")) {
    const videoNames = ["video.mp4"];
    const gallery = document.getElementById("video-gallery");

    videoNames.forEach((name, index) => {
      const card = document.createElement("div");
      card.className = "photo-card";
      card.style.setProperty('--i', index);

      // Aperçu vidéo dans la galerie (sans rotation)
      const preview = document.createElement("video");
      preview.src = `video/${name}`;
      preview.controls = false;
      preview.muted = true;
      preview.loop = true;
      preview.autoplay = true;
      preview.style.width = "100%";
      preview.style.height = "220px";
      preview.style.objectFit = "cover";
      preview.style.cursor = "pointer";
      // NE PAS ajouter la classe video-rotate

      // Commentaire sous la vidéo
      const commentEl = document.createElement("p");
      commentEl.textContent = "Une partie de la prestation";
      commentEl.className = "video-comment";

      preview.addEventListener("click", () => {
        showModal({ type: "video", src: `video/${name}`, download: name });
      });

      card.appendChild(preview);
      card.appendChild(commentEl);
      gallery.appendChild(card);
    });
  }

  // --- MODALE GÉNÉRIQUE ---
  function showModal({ type, src, download }) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalVideo = document.getElementById("modal-video");
    const modalVideoSrc = document.getElementById("modal-video-src");
    const modalDownload = document.getElementById("modal-download");

    modal.classList.add("modal-open");

    if (type === "image") {
      modalImg.src = src;
      modalImg.style.display = "block";
      modalVideo.style.display = "none";
      modalDownload.href = src;
      modalDownload.download = download;
      // NE PAS retirer ou ajouter la classe video-rotate
    } else if (type === "video") {
      modalImg.style.display = "none";
      modalVideo.style.display = "block";
      modalVideoSrc.src = src;
      modalVideo.load();
      modalDownload.href = src;
      modalDownload.download = download;
      // NE PAS ajouter la classe video-rotate

      // Rotation en plein écran : rien à faire, on ne veut pas de rotation
    }
    modal.style.display = "flex";
  }

  // Fermer la modale
  document.getElementById("modal-close").onclick = function() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    modal.classList.remove("modal-open");
    document.getElementById("modal-video").pause();
  };
  document.getElementById("modal").onclick = function(e) {
    if (e.target === this) {
      this.style.display = "none";
      this.classList.remove("modal-open");
      document.getElementById("modal-video").pause();
    }
  };
});