/**
 * CV Online - Nguyễn Nông Thu
 * Script: Theme Toggle, Mobile Navigation, Scrollspy, Animations & Form Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. THEME TOGGLE (DARK / LIGHT MODE)
     -------------------------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const rootElement = document.documentElement;

  // Lấy theme đã lưu trong localStorage hoặc ưu tiên hệ điều hành của người dùng
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Áp dụng theme vào thẻ <html>
  function applyTheme(theme) {
    if (theme === 'dark') {
      rootElement.setAttribute('data-theme', 'dark');
    } else {
      rootElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }

  // Khởi tạo theme ban đầu
  applyTheme(getPreferredTheme());

  // Lắng nghe sự kiện click nút đổi giao diện
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = rootElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  // Cập nhật theme tự động nếu người dùng thay đổi chế độ hệ thống trong khi đang xem web
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  /* --------------------------------------------------------------------------
     2. MOBILE NAVIGATION MENU
     -------------------------------------------------------------------------- */
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    // Mở / Đóng menu di động
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('is-open');
      menuToggle.classList.toggle('is-active', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Tự động đóng menu khi người dùng chọn bất kỳ mục liên kết nào
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('is-open')) {
          navMenu.classList.remove('is-open');
          menuToggle.classList.remove('is-active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Đóng menu khi click ra ngoài vùng menu trên màn hình nhỏ
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('is-open') && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('is-open');
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --------------------------------------------------------------------------
     3. SCROLLSPY (ĐÁNH DẤU ACTIVE MENU KHI CUỘN TRANG)
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120; // Độ bù header offset

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  /* --------------------------------------------------------------------------
     4. BACK TO TOP FLOATING BUTTON
     -------------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    function toggleBackToTop() {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', toggleBackToTop, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     5. SCROLL ANIMATION (REVEAL KHI CUỘN VÀO KHUNG NHÌN)
     -------------------------------------------------------------------------- */
  const animatedElements = document.querySelectorAll(
    '.about-text-card, .highlight-box, .education-card, .skill-category-card, .timeline-content, .project-card, .contact-info-card, .contact-form-card'
  );

  // Thêm class reveal ban đầu
  animatedElements.forEach((el) => {
    el.classList.add('reveal');
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Chỉ cần kích hoạt một lần duy nhất
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    animatedElements.forEach((el) => {
      revealObserver.observe(el);
    });
  } else {
    // Dự phòng cho các trình duyệt cũ không hỗ trợ IntersectionObserver
    animatedElements.forEach((el) => {
      el.classList.add('revealed');
    });
  }

  /* --------------------------------------------------------------------------
     6. CONTACT FORM VALIDATION & INTERACTION (CLIENT-SIDE)
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const feedbackBox = document.getElementById('form-feedback');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function clearErrors() {
    if (nameError) nameError.textContent = '';
    if (emailError) emailError.textContent = '';
    if (messageError) messageError.textContent = '';
    if (nameInput) nameInput.classList.remove('is-invalid');
    if (emailInput) emailInput.classList.remove('is-invalid');
    if (messageInput) messageInput.classList.remove('is-invalid');
    if (feedbackBox) {
      feedbackBox.className = 'form-feedback';
      feedbackBox.textContent = '';
    }
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();

      let isValid = true;

      // Kiểm tra tên
      const nameVal = nameInput ? nameInput.value.trim() : '';
      if (!nameVal) {
        if (nameError) nameError.textContent = 'Vui lòng nhập họ và tên của bạn.';
        if (nameInput) nameInput.classList.add('is-invalid');
        isValid = false;
      }

      // Kiểm tra email
      const emailVal = emailInput ? emailInput.value.trim() : '';
      if (!emailVal) {
        if (emailError) emailError.textContent = 'Vui lòng nhập địa chỉ email.';
        if (emailInput) emailInput.classList.add('is-invalid');
        isValid = false;
      } else if (!validateEmail(emailVal)) {
        if (emailError) emailError.textContent = 'Địa chỉ email không đúng định dạng.';
        if (emailInput) emailInput.classList.add('is-invalid');
        isValid = false;
      }

      // Kiểm tra nội dung
      const messageVal = messageInput ? messageInput.value.trim() : '';
      if (!messageVal) {
        if (messageError) messageError.textContent = 'Vui lòng nhập nội dung tin nhắn.';
        if (messageInput) messageInput.classList.add('is-invalid');
        isValid = false;
      } else if (messageVal.length < 5) {
        if (messageError) messageError.textContent = 'Nội dung tin nhắn cần tối thiểu 5 ký tự.';
        if (messageInput) messageInput.classList.add('is-invalid');
        isValid = false;
      }

      if (isValid) {
        if (feedbackBox) {
          feedbackBox.classList.add('show-success');
          feedbackBox.textContent = '✓ Cảm ơn bạn đã gửi tin nhắn! Thông tin đã được ghi nhận.';
        }
        contactForm.reset();

        // Tự động ẩn thông báo sau 6 giây
        setTimeout(() => {
          if (feedbackBox) {
            feedbackBox.className = 'form-feedback';
            feedbackBox.textContent = '';
          }
        }, 6000);
      }
    });
  }
});

