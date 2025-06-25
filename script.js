const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const galleryItems = document.querySelectorAll(".gallery-item img");

let currentIndex = 0;
let images = [];

galleryItems.forEach((img, index) => {
  images.push(img.src);
  img.addEventListener("click", () => {
    openLightbox(index);
  });
});

function openLightbox(index) {
  currentIndex = index;
  lightboxImage.src = images[currentIndex];
  lightbox.style.display = "block";
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImage.src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImage.src = images[currentIndex];
}

// Filtering
const filterButtons = document.querySelectorAll(".filter-buttons button");
const galleryItemsContainer = document.querySelectorAll(".gallery-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    galleryItemsContainer.forEach(item => {
      const category = item.getAttribute("data-category");
      if (filter === "all" || filter === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
