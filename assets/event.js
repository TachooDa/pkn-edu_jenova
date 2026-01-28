// Typewriter Effect Function
function typeWriter(element, text, speed = 80, callback = null) {
  element.textContent = ""; // Clear existing text
  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }

  type();
}

// Initialize typewriter effect when page loads
window.addEventListener("load", () => {
  const typingElement = document.getElementById("typingText");
  if (typingElement) {
    typeWriter(typingElement, "Kewarganegaraan", 100);
  }
});

// Navbar Scroll Effect - Transparent when scrolled
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Carousel Functionality - DISABLED (using grid layout now)
// let currentSlide = 0;
// const totalSlides = 4;
//
// function updateCarousel() {
//   const carousel = document.getElementById("memberCarousel");
//   const items = document.querySelectorAll(".carousel-item");
//   const indicators = document.querySelectorAll(".indicator");
//
//   // Update carousel position
//   carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
//
//   // Update active indicators
//   items.forEach((item) => item.classList.remove("active"));
//   indicators.forEach((ind) => ind.classList.remove("active"));
//
//   items[currentSlide].classList.add("active");
//   indicators[currentSlide].classList.add("active");
// }
//
// function moveCarousel(direction) {
//   currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
//   updateCarousel();
// }
//
// function goToSlide(slideIndex) {
//   currentSlide = slideIndex;
//   updateCarousel();
// }

// FAQ Toggle Function
function toggleFAQ(element) {
  const faqItem = element.parentElement;
  const isActive = faqItem.classList.contains("active");

  // Close all FAQ items
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("active");
  });

  // Open clicked FAQ item if it was not active
  if (!isActive) {
    faqItem.classList.add("active");
  }
}

// Initialize carousel on load - DISABLED (using grid layout now)
// window.addEventListener("load", () => {
//   updateCarousel();
// });

// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
const dropdowns = document.querySelectorAll(".dropdown");

// Toggle hamburger menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Dropdown toggle functionality
dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    const dropdown = toggle.closest(".dropdown");

    // For mobile only
    if (window.innerWidth <= 768) {
      e.preventDefault();

      // Close other dropdowns
      dropdowns.forEach((d) => {
        if (d !== dropdown) {
          d.classList.remove("active");
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle("active");
    }
  });
});

// Close menu when window is resized
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
  }
});

// Close dropdown when clicking on a dropdown link
document.querySelectorAll(".dropdown-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
  });
});

// ===== MATERI MODAL FUNCTIONALITY =====
const matériModalData = {
  pancasila: {
    title: "🇮🇩 Pancasila",
    description:
      "Pancasila adalah fondasi ideologi negara Indonesia yang terdiri dari lima sila fundamental.",
    details: `
      <h3>Lima Sila Pancasila:</h3>
      <ul>
        <li><strong>Sila Pertama:</strong> Ketuhanan Yang Maha Esa - Kepercayaan kepada Tuhan</li>
        <li><strong>Sila Kedua:</strong> Kemanusiaan yang Adil dan Beradab - Nilai kemanusiaan universal</li>
        <li><strong>Sila Ketiga:</strong> Persatuan Indonesia - Semangat persatuan nasional</li>
        <li><strong>Sila Keempat:</strong> Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan - Demokrasi</li>
        <li><strong>Sila Kelima:</strong> Keadilan Sosial bagi Seluruh Rakyat Indonesia - Kesejahteraan bersama</li>
      </ul>
    `,
  },
  konstitusi: {
    title: "⚖️ Konstitusi",
    description:
      "Konstitusi adalah undang-undang dasar yang mengatur sistem pemerintahan dan hak-hak rakyat.",
    details: `
      <h3>Fungsi Konstitusi:</h3>
      <ul>
        <li>Menetapkan struktur dan kekuatan pemerintah</li>
        <li>Melindungi hak-hak fundamental rakyat</li>
        <li>Memberikan panduan untuk pembentukan hukum</li>
        <li>Menjadi sumber tertinggi dari semua hukum di negara</li>
      </ul>
      <h3>Konstitusi Indonesia:</h3>
      <p>UUD 1945 merupakan konstitusi tertinggi Negara Kesatuan Republik Indonesia.</p>
    `,
  },
  hakwajib: {
    title: "👤 Hak & Kewajiban",
    description:
      "Setiap warga negara memiliki hak dan kewajiban yang harus dijalankan dengan seimbang.",
    details: `
      <h3>Hak-Hak Warga Negara:</h3>
      <ul>
        <li>Hak hidup dan keselamatan</li>
        <li>Hak kebebasan berekspresi dan berpendapat</li>
        <li>Hak mendapatkan pendidikan</li>
        <li>Hak berpartisipasi dalam pemerintahan</li>
      </ul>
      <h3>Kewajiban Warga Negara:</h3>
      <ul>
        <li>Kewajiban membela negara</li>
        <li>Kewajiban mentaati hukum</li>
        <li>Kewajiban membayar pajak</li>
        <li>Kewajiban menjaga kelestarian lingkungan</li>
      </ul>
    `,
  },
  demokrasi: {
    title: "🗳️ Demokrasi",
    description:
      "Demokrasi adalah sistem pemerintahan yang melibatkan partisipasi penuh dari rakyat.",
    details: `
      <h3>Prinsip-Prinsip Demokrasi:</h3>
      <ul>
        <li>Kedaulatan rakyat - kekuasaan berada di tangan rakyat</li>
        <li>Persamaan hak - semua orang memiliki hak yang sama</li>
        <li>Kebebasan - kebebasan berbicara, berpendapat, dan berkumpul</li>
        <li>Keadilan - perlakuan adil untuk semua warga</li>
        <li>Pemilihan umum yang bebas dan jujur</li>
      </ul>
      <h3>Tipe Demokrasi:</h3>
      <ul>
        <li>Demokrasi Langsung - rakyat langsung mengambil keputusan</li>
        <li>Demokrasi Perwakilan - rakyat memilih wakil mereka</li>
      </ul>
    `,
  },
  nilai: {
    title: "💎 Nilai-Nilai Luhur",
    description:
      "Nilai-nilai luhur adalah prinsip-prinsip moral dan etika dalam kehidupan bermasyarakat.",
    details: `
      <h3>Nilai-Nilai Luhur Bangsa Indonesia:</h3>
      <ul>
        <li><strong>Kejujuran:</strong> Integritas dan transparansi dalam setiap tindakan</li>
        <li><strong>Kerja Keras:</strong> Dedikasi dan komitmen untuk mencapai tujuan</li>
        <li><strong>Gotong Royong:</strong> Semangat kebersamaan dan saling membantu</li>
        <li><strong>Sopan Santun:</strong> Menghormati dan menghargai orang lain</li>
        <li><strong>Tanggung Jawab:</strong> Akuntabilitas atas setiap tindakan</li>
      </ul>
    `,
  },
  toleransi: {
    title: "🤝 Toleransi",
    description:
      "Toleransi adalah sikap saling menghormati dalam kehidupan yang plural dan beragam.",
    details: `
      <h3>Pentingnya Toleransi:</h3>
      <ul>
        <li>Membangun harmoni dalam masyarakat yang beragam</li>
        <li>Menghindari konflik dan pertentangan</li>
        <li>Memperkuat persatuan dan kesatuan bangsa</li>
        <li>Menciptakan lingkungan yang aman dan sejahtera</li>
      </ul>
      <h3>Bentuk-Bentuk Toleransi:</h3>
      <ul>
        <li>Toleransi Agama - menghormati keyakinan berbeda</li>
        <li>Toleransi Budaya - menghargai tradisi dan kebiasaan berbeda</li>
        <li>Toleransi Sosial - penerimaan terhadap perbedaan pandangan</li>
      </ul>
    `,
  },
};

function openMateriModal(type) {
  const modal = document.getElementById("matériModal");
  const data = matériModalData[type];

  if (data) {
    document.getElementById("modalTitle").textContent = data.title;
    document.getElementById("modalDescription").textContent = data.description;
    document.getElementById("modalDetails").innerHTML = data.details;
    modal.classList.add("show");
  }
}

function closeMateriModal() {
  const modal = document.getElementById("matériModal");
  modal.classList.remove("show");
}

// Close modal when clicking outside the modal content
document.getElementById("matériModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeMateriModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeMateriModal();
  }
});
