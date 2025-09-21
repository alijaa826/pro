function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
  }
const planetData = {
  merkurius: {
    title: "Merkurius",
    description:
      "Merkurius adalah planet terkecil di tata surya dan yang terdekat dengan Matahari. Planet ini tidak memiliki satelit alami dan kondisi permukaannya ditandai dengan kawah-kawah akibat tabrakan meteor.",
    distance: "57.9 juta km",
    diameter: "4.879 km",
    orbit: "88 hari",
    rotation: "59 hari",
    image: "gambarPlanet/merkurius.jpg", // Ganti dengan gambar Anda
    icon: "fas fa-globe-americas",
    additional:
      "<p>Merkurius memiliki perbedaan suhu yang ekstrem antara siang (427°C) dan malam (-173°C). Planet ini dinamai menurut nama dewa kurir Romawi, Merkurius.</p>",
  },
  venus: {
    title: "Venus",
    description:
      "Venus adalah planet terdekat kedua dari Matahari. Planet ini memiliki ukuran dan massa yang mirip dengan Bumi, tetapi memiliki atmosfer yang sangat tebal yang terdiri terutama dari karbon dioksida.",
    distance: "108.2 juta km",
    diameter: "12.104 km",
    orbit: "225 hari",
    rotation: "243 hari",
    image: "gambarPlanet/venus.jpg", // Ganti dengan gambar Anda
    icon: "fas fa-circle",
    additional:
      "<p>Venus adalah planet terpanas di tata surya dengan suhu permukaan mencapai 462°C. Arah rotasi Venus berlawanan dengan kebanyakan planet lain.</p>",
  },
  bumi: {
    title: "Bumi",
    description:
      "Bumi adalah planet ketiga dari Matahari dan satu-satunya planet yang diketahui memiliki kehidupan. Planet ini memiliki satu satelit alami, Bulan, dan merupakan planet terestrial terbesar.",
    distance: "149.6 juta km",
    diameter: "12.742 km",
    orbit: "365.25 hari",
    rotation: "24 jam",
    image: "gambarPlanet/bumi.jpg", // Ganti dengan gambar Anda
    icon: "fas fa-globe-asia",
    additional:
      "<p>Bumi adalah satu-satunya planet yang tidak dinamai dari dewa mitologi. Sekitar 71% permukaan Bumi ditutupi oleh air, menjadikannya planet 'biru'.</p>",
  },
  mars: {
    title: "Mars",
    description:
      "Mars adalah planet keempat dari Matahari dan sering disebut sebagai 'Planet Merah' karena penampakannya yang kemerah-merahan akibat keberadaan besi oksida di permukaannya.",
    distance: "227.9 juta km",
    diameter: "6.779 km",
    orbit: "687 hari",
    rotation: "24.6 jam",
    image: "gambarPlanet/mars.jpg", // Ganti dengan gambar Anda
    icon: "fas fa-globe-africa",
    additional:
      "<p>Mars memiliki dua satelit alami, Phobos dan Deimos. Planet ini menjadi tujuan utama eksplorasi antariksa untuk mencari tanda-tanda kehidupan masa lalu.</p>",
  },
  jupiter: {
    title: "Jupiter",
    description:
      "Jupiter adalah planet terbesar di tata surya, dengan massa dua setengah kali massa semua planet lain digabungkan. Planet ini terutama terdiri dari hidrogen dan helium.",
    distance: "778.5 juta km",
    diameter: "139.820 km",
    orbit: "12 tahun",
    rotation: "9.9 jam",
    image: "gambarPlanet/jupiter.jpg", // Ganti dengan gambar Anda
    icon: "fas fa-circle-notch",
    additional:
      "<p>Jupiter memiliki 79 satelit yang diketahui, termasuk Ganymede, satelit terbesar di tata surya. Bintik Merah Besar di Jupiter adalah badai raksasa yang telah berlangsung selama ratusan tahun.</p>",
  },
  saturnus: {
    title: "Saturnus",
    description:
      "Saturnus adalah planet keenam dari Matahari dan terkenal dengan sistem cincinnya yang menakjubkan. Planet ini adalah raksasa gas seperti Jupiter, terutama terdiri dari hidrogen dan helium.",
    distance: "1.43 miliar km",
    diameter: "116.460 km",
    orbit: "29.5 tahun",
    rotation: "10.7 jam",
    image: "gambarPlanet/saturnus.jpg", // Ganti dengan gambar Anda
    icon: "fas fa-ring",
    additional:
      "<p>Cincin Saturnus terutama terbuat dari partikel es dengan sedikit puing batuan dan debu. Planet ini memiliki 82 satelit yang dikonfirmasi, dengan Titan sebagai yang terbesar.</p>",
  },
  uranus: {
    title: "Uranus",
    description:
      "Uranus adalah planet ketujuh dari Matahari. Planet ini memiliki kemiringan sumbu yang unik, hampir sejajar dengan orbitnya, menyebabkan musim yang ekstrem.",
    distance: "2.87 miliar km",
    diameter: "50.724 km",
    orbit: "84 tahun",
    rotation: "17.2 jam",
    image: "gambarPlanet/uranus.jpg", // Ganti dengan gambar Anda
    icon: "fas fa-circle",
    additional:
      "<p>Uranus adalah planet terdingin di tata surya dengan suhu atmosfer minimum mencapai -224°C. Planet ini memiliki 27 satelit yang diketahui dan sistem cincin yang samar.</p>",
  },
  neptunus: {
    title: "Neptunus",
    description:
      "Neptunus adalah planet kedelapan dan terjauh dari Matahari. Planet ini memiliki warna biru yang khas akibat kandungan metana dalam atmosfernya.",
    distance: "4.5 miliar km",
    diameter: "49.244 km",
    orbit: "165 tahun",
    rotation: "16.1 jam",
    image: "gambarPlanet/neptunus.jpg", // Ganti dengan gambar Anda
    icon: "fas fa-globe",
    additional:
      "<p>Neptunus adalah planet pertama yang ditemukan melalui perhitungan matematika而不是 pengamatan langsung. Planet ini memiliki 14 satelit yang diketahui, dengan Triton sebagai yang terbesar.</p>",
  },
};

const themeToggle = document.getElementById("theme-toggle");
const soundToggle = document.getElementById("sound-toggle");
const scrollToTopBtn = document.getElementById("scroll-to-top");
const modal = document.getElementById("planet-modal");
const closeModal = document.querySelector(".close-modal");
const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".carousel-arrow.prev");
const nextBtn = document.querySelector(".carousel-arrow.next");
const carouselNav = document.querySelector(".carousel-nav");
const carouselBtns = document.querySelectorAll(".carousel-btn");

let currentIndex = 0;
let soundEnabled = false;

// Fungsi untuk memuat gambar planet
function loadPlanetImages() {
  for (const planet in planetData) {
    const imageElement = document.getElementById(`${planet}-image`);
    if (imageElement && planetData[planet].image) {
      // Coba muat gambar
      const img = new Image();
      img.onload = function () {
        // Jika gambar berhasil dimuat, ganti icon dengan gambar
        imageElement.innerHTML = "";
        imageElement.appendChild(img);
      };
      img.onerror = function () {
        // Jika gambar gagal dimuat, tetap gunakan icon
        imageElement.innerHTML = `<i class="${planetData[planet].icon}"></i>`;
      };
      img.src = planetData[planet].image;
      img.alt = planetData[planet].title;
    }
  }
}

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  document.querySelectorAll(".carousel-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function createDots() {
  carouselItems.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("carousel-dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateCarousel();
    });
    carouselNav.appendChild(dot);
  });
}

// Panggil fungsi untuk memuat gambar
loadPlanetImages();
createDots();

prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : carouselItems.length - 1;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = currentIndex < carouselItems.length - 1 ? currentIndex + 1 : 0;
  updateCarousel();
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

soundToggle.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    soundToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
  } else {
    soundToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
  }
});

carouselBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const planetName = btn.getAttribute("data-planet");
    const data = planetData[planetName];

    if (data) {
      document.getElementById("modal-title").textContent = data.title;
      document.getElementById("modal-description").textContent =
        data.description;
      document.getElementById("modal-distance").textContent = data.distance;
      document.getElementById("modal-diameter").textContent = data.diameter;
      document.getElementById("modal-orbit").textContent = data.orbit;
      document.getElementById("modal-rotation").textContent = data.rotation;

      // Set gambar atau icon untuk modal
      const modalPlanetImg = document.getElementById("modal-planet-img");
      modalPlanetImg.innerHTML = "";

      if (data.image) {
        const img = new Image();
        img.onload = function () {
          modalPlanetImg.appendChild(img);
        };
        img.onerror = function () {
          modalPlanetImg.innerHTML = `<i class="${data.icon}"></i>`;
        };
        img.src = data.image;
        img.alt = data.title;
      } else {
        modalPlanetImg.innerHTML = `<i class="${data.icon}"></i>`;
      }

      document.getElementById("modal-additional-info").innerHTML =
        data.additional;

      modal.classList.add("show");
      document.body.style.overflow = "hidden";
    }
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  }
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElement = document.querySelector(".parallax-header");
  const rate = scrolled * -0.5;
  parallaxElement.style.backgroundPosition = `0px ${rate}px`;
});

setInterval(() => {
  currentIndex = currentIndex < carouselItems.length - 1 ? currentIndex + 1 : 0;
  updateCarousel();
}, 5000);
