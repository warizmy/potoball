const hideNavbarAfterClick = () => {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
      const navbarCollapse = document.getElementById('navbarNav');

      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
};

const goToTopBtn = () => {
  const goToTopBtn = document.getElementById('on-top-btn');
  let prevScrollHeight = window.scrollY;

  window.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY;
    const scrollThreshold = 1200;

    if (scrollHeight > scrollThreshold) {
      goToTopBtn.classList.add('scrolled');
    } else {
      goToTopBtn.classList.remove('scrolled');
    }

    if (scrollHeight < prevScrollHeight) {
      goToTopBtn.classList.remove('scrolled');
    }

    prevScrollHeight = scrollHeight;
  });

  goToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  hideNavbarAfterClick();
  goToTopBtn();
});
