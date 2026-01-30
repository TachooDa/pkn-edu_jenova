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

// Diversity Modal & Carousel Functionality
// ============================================
// DIVERSITY SECTION - OPTIMIZED JAVASCRIPT
// ============================================

class DiversitySection {
  constructor() {
    this.init();
  }

  init() {
    // Initialize on DOM ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    this.initCarousels();
    this.initModals();
    this.initScrollAnimations();
    this.initAccessibility();
  }

  // ============================================
  // CAROUSEL FUNCTIONALITY
  // ============================================

  // initCarousels() {
  //   const cards = document.querySelectorAll(".diversity-card");

  //   cards.forEach((card) => {
  //     const track = card.querySelector(".carousel-track");
  //     const slides = card.querySelectorAll(".carousel-slide");
  //     const prevBtn = card.querySelector(".prev-btn");
  //     const nextBtn = card.querySelector(".next-btn");
  //     const indicators = card.querySelectorAll(".indicator");

  //     if (!track || slides.length === 0) return;

  //     let currentSlide = 0;
  //     const totalSlides = slides.length;
  //     let autoPlayInterval;

  //     // Update carousel display
  //     const updateCarousel = (index) => {
  //       // Remove active class from all
  //       slides.forEach((slide) => slide.classList.remove("active"));
  //       indicators.forEach((indicator) => indicator.classList.remove("active"));

  //       // Add active class to current
  //       slides[index].classList.add("active");
  //       indicators[index].classList.add("active");

  //       // Announce to screen readers
  //       const slideContent =
  //         slides[index].querySelector(".slide-content h4").textContent;
  //       this.announceToScreenReader(
  //         `Slide ${index + 1} of ${totalSlides}: ${slideContent}`,
  //       );
  //     };

  //     // Go to specific slide
  //     const goToSlide = (index) => {
  //       currentSlide = (index + totalSlides) % totalSlides;
  //       updateCarousel(currentSlide);
  //       resetAutoPlay();
  //     };

  //     // Next slide
  //     const nextSlide = () => {
  //       goToSlide(currentSlide + 1);
  //     };

  //     // Previous slide
  //     const prevSlide = () => {
  //       goToSlide(currentSlide - 1);
  //     };

  //     // Auto play
  //     const startAutoPlay = () => {
  //       autoPlayInterval = setInterval(nextSlide, 5000); // 5 seconds
  //     };

  //     const stopAutoPlay = () => {
  //       if (autoPlayInterval) {
  //         clearInterval(autoPlayInterval);
  //       }
  //     };

  //     const resetAutoPlay = () => {
  //       stopAutoPlay();
  //       startAutoPlay();
  //     };

  //     // Event listeners
  //     if (prevBtn) {
  //       prevBtn.addEventListener("click", prevSlide);
  //     }

  //     if (nextBtn) {
  //       nextBtn.addEventListener("click", nextSlide);
  //     }

  //     // Indicator clicks
  //     indicators.forEach((indicator, index) => {
  //       indicator.addEventListener("click", () => goToSlide(index));
  //     });

  //     // Touch/swipe support
  //     let touchStartX = 0;
  //     let touchEndX = 0;

  //     track.addEventListener(
  //       "touchstart",
  //       (e) => {
  //         touchStartX = e.changedTouches[0].screenX;
  //         stopAutoPlay();
  //       },
  //       { passive: true },
  //     );

  //     track.addEventListener(
  //       "touchend",
  //       (e) => {
  //         touchEndX = e.changedTouches[0].screenX;
  //         handleSwipe();
  //         startAutoPlay();
  //       },
  //       { passive: true },
  //     );

  //     const handleSwipe = () => {
  //       const swipeThreshold = 50;
  //       const diff = touchStartX - touchEndX;

  //       if (Math.abs(diff) > swipeThreshold) {
  //         if (diff > 0) {
  //           nextSlide(); // Swipe left
  //         } else {
  //           prevSlide(); // Swipe right
  //         }
  //       }
  //     };

  //     // Keyboard navigation
  //     card.addEventListener("keydown", (e) => {
  //       if (e.target.closest(".carousel-container")) {
  //         if (e.key === "ArrowLeft") {
  //           e.preventDefault();
  //           prevSlide();
  //         } else if (e.key === "ArrowRight") {
  //           e.preventDefault();
  //           nextSlide();
  //         }
  //       }
  //     });

  //     // Pause on hover
  //     card.addEventListener("mouseenter", stopAutoPlay);
  //     card.addEventListener("mouseleave", startAutoPlay);

  //     // Start autoplay
  //     startAutoPlay();

  //     // Initialize first slide
  //     updateCarousel(0);
  //   });
  // }
  initCarousels() {
    const cards = document.querySelectorAll(".diversity-card");

    cards.forEach((card) => {
      const track = card.querySelector(".carousel-track");
      const slides = card.querySelectorAll(".carousel-slide");
      const prevBtn = card.querySelector(".prev-btn");
      const nextBtn = card.querySelector(".next-btn");
      const indicators = card.querySelectorAll(".indicator");

      if (!track || slides.length === 0) return;

      let currentSlide = 0;
      const totalSlides = slides.length;
      let autoPlayInterval;

      // Update carousel display
      const updateCarousel = (index) => {
        // Safety check: ensure index is valid
        if (index < 0 || index >= totalSlides) {
          console.warn(`Invalid slide index: ${index}`);
          return;
        }

        // Remove active class from all
        slides.forEach((slide) => slide.classList.remove("active"));
        indicators.forEach((indicator) => indicator.classList.remove("active"));

        // Add active class to current
        slides[index].classList.add("active");

        // Only update indicator if it exists
        if (indicators[index]) {
          indicators[index].classList.add("active");
        }

        // Announce to screen readers
        const slideContentElement =
          slides[index].querySelector(".slide-content h4");
        if (slideContentElement) {
          this.announceToScreenReader(
            `Slide ${index + 1} of ${totalSlides}: ${slideContentElement.textContent}`,
          );
        }
      };

      // Go to specific slide
      const goToSlide = (index) => {
        currentSlide = ((index % totalSlides) + totalSlides) % totalSlides;
        updateCarousel(currentSlide);
        resetAutoPlay();
      };

      // Next slide
      const nextSlide = () => {
        goToSlide(currentSlide + 1);
      };

      // Previous slide
      const prevSlide = () => {
        goToSlide(currentSlide - 1);
      };

      // Auto play
      const startAutoPlay = () => {
        autoPlayInterval = setInterval(nextSlide, 5000); // 5 seconds
      };

      const stopAutoPlay = () => {
        if (autoPlayInterval) {
          clearInterval(autoPlayInterval);
        }
      };

      const resetAutoPlay = () => {
        stopAutoPlay();
        startAutoPlay();
      };

      // Event listeners
      if (prevBtn) {
        prevBtn.addEventListener("click", prevSlide);
      }

      if (nextBtn) {
        nextBtn.addEventListener("click", nextSlide);
      }

      // Indicator clicks
      indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => goToSlide(index));
      });

      // Touch/swipe support
      let touchStartX = 0;
      let touchEndX = 0;

      track.addEventListener(
        "touchstart",
        (e) => {
          touchStartX = e.changedTouches[0].screenX;
          stopAutoPlay();
        },
        { passive: true },
      );

      track.addEventListener(
        "touchend",
        (e) => {
          touchEndX = e.changedTouches[0].screenX;
          handleSwipe();
          startAutoPlay();
        },
        { passive: true },
      );

      const handleSwipe = () => {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
          if (diff > 0) {
            nextSlide(); // Swipe left
          } else {
            prevSlide(); // Swipe right
          }
        }
      };

      // Keyboard navigation
      card.addEventListener("keydown", (e) => {
        if (e.target.closest(".carousel-container")) {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            prevSlide();
          } else if (e.key === "ArrowRight") {
            e.preventDefault();
            nextSlide();
          }
        }
      });

      // Pause on hover
      card.addEventListener("mouseenter", stopAutoPlay);
      card.addEventListener("mouseleave", startAutoPlay);

      // Start autoplay
      startAutoPlay();

      // Initialize first slide
      updateCarousel(0);
    });
  }

  // ============================================
  // MODAL FUNCTIONALITY
  // ============================================

  initModals() {
    const cards = document.querySelectorAll(".diversity-card");
    const modals = document.querySelectorAll(".modal-overlay");
    const closeBtns = document.querySelectorAll(".modal-close");

    // Open modal
    cards.forEach((card) => {
      const viewBtn = card.querySelector(".view-details-btn");
      const modalId = card.dataset.modal;

      if (viewBtn && modalId) {
        viewBtn.addEventListener("click", () => {
          this.openModal(modalId);
        });
      }
    });

    // Close modal buttons
    closeBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const modal = e.target.closest(".modal-overlay");
        if (modal) {
          this.closeModal(modal);
        }
      });
    });

    // Close on overlay click
    modals.forEach((modal) => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          this.closeModal(modal);
        }
      });
    });

    // Close on ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const activeModal = document.querySelector(".modal-overlay.active");
        if (activeModal) {
          this.closeModal(activeModal);
        }
      }
    });
  }

  openModal(modalId) {
    const modal = document.getElementById(`modal-${modalId}`);
    if (!modal) return;

    // Prevent body scroll
    document.body.style.overflow = "hidden";

    // Show modal
    modal.classList.add("active");

    // Focus on close button for accessibility
    setTimeout(() => {
      const closeBtn = modal.querySelector(".modal-close");
      if (closeBtn) closeBtn.focus();
    }, 300);

    // Announce to screen readers
    const title = modal.querySelector(".modal-header h3").textContent;
    this.announceToScreenReader(`Dialog opened: ${title}`);
  }

  closeModal(modal) {
    if (!modal) return;

    // Hide modal
    modal.classList.remove("active");

    // Restore body scroll
    document.body.style.overflow = "";

    // Return focus to trigger button
    const modalId = modal.id.replace("modal-", "");
    const triggerCard = document.querySelector(`[data-modal="${modalId}"]`);
    if (triggerCard) {
      const viewBtn = triggerCard.querySelector(".view-details-btn");
      if (viewBtn) viewBtn.focus();
    }

    // Announce to screen readers
    this.announceToScreenReader("Dialog closed");
  }

  // ============================================
  // SCROLL ANIMATIONS
  // ============================================

  initScrollAnimations() {
    const cards = document.querySelectorAll(".diversity-card");

    if (!("IntersectionObserver" in window)) {
      // Fallback: show all cards immediately
      cards.forEach((card) => (card.style.opacity = "1"));
      return;
    }

    // Set initial state
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger animation
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }, index * 100);

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    cards.forEach((card) => observer.observe(card));
  }

  // ============================================
  // ACCESSIBILITY
  // ============================================

  initAccessibility() {
    // Make carousel buttons keyboard accessible
    const carouselBtns = document.querySelectorAll(".carousel-btn");
    carouselBtns.forEach((btn) => {
      if (!btn.hasAttribute("tabindex")) {
        btn.setAttribute("tabindex", "0");
      }
    });

    // Make indicators keyboard accessible
    const indicators = document.querySelectorAll(".indicator");
    indicators.forEach((indicator, index) => {
      if (!indicator.hasAttribute("tabindex")) {
        indicator.setAttribute("tabindex", "0");
      }
      if (!indicator.hasAttribute("role")) {
        indicator.setAttribute("role", "button");
      }
      if (!indicator.hasAttribute("aria-label")) {
        indicator.setAttribute("aria-label", `Go to slide ${index + 1}`);
      }

      // Add keyboard support
      indicator.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          indicator.click();
        }
      });
    });

    // Improve modal accessibility
    const modals = document.querySelectorAll(".modal-overlay");
    modals.forEach((modal) => {
      if (!modal.hasAttribute("role")) {
        modal.setAttribute("role", "dialog");
      }
      if (!modal.hasAttribute("aria-modal")) {
        modal.setAttribute("aria-modal", "true");
      }
    });
  }

  // ============================================
  // SCREEN READER ANNOUNCEMENTS
  // ============================================

  announceToScreenReader(message) {
    // Create or get announcement element
    let announcer = document.getElementById("diversity-announcer");

    if (!announcer) {
      announcer = document.createElement("div");
      announcer.id = "diversity-announcer";
      announcer.setAttribute("role", "status");
      announcer.setAttribute("aria-live", "polite");
      announcer.setAttribute("aria-atomic", "true");
      announcer.style.cssText = `
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
      `;
      document.body.appendChild(announcer);
    }

    // Clear and announce
    announcer.textContent = "";
    setTimeout(() => {
      announcer.textContent = message;
    }, 100);
  }

  // ============================================
  // UTILITY: LAZY LOAD IMAGES
  // ============================================

  initLazyLoading() {
    const images = document.querySelectorAll(".diversity-card img");

    if (!("IntersectionObserver" in window)) {
      return; // Images will load normally
    }

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
          }
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => {
      // Only lazy load if data-src is set
      if (img.dataset.src) {
        imageObserver.observe(img);
      }
    });
  }
}

// ============================================
// INITIALIZE
// ============================================

// Auto-initialize when script loads
new DiversitySection();

// Also expose for manual initialization if needed
window.DiversitySection = DiversitySection;
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
// Back to Top Button Functionality
const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
