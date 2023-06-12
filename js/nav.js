const menuBtn = document.querySelector('.menu-btn');
const navContainer = document.querySelector('.nav-container');
const navLinks = document.querySelectorAll('.nav-list li');

let menuActive = false;

menuBtn.addEventListener('click', () => {
  if (!menuActive) {
    navContainer.classList.toggle('active');
    navContainer.setAttribute('aria-expanded', 'true');
    menuBtn.classList.toggle('active');
    menuActive = true;
  } else {
    navContainer.classList.toggle('active');
    navContainer.setAttribute('aria-expanded', 'false');
    menuBtn.classList.toggle('active');
    menuActive = false;
  }

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.removeAttribute('style');
    } else {
      link.style.animation = `navLinkFade 500ms ease forwards ${
        index / 5 + 0.3
      }s`;
      console.log('test');
    }
  });
});
