const hamburger = document.querySelector(".res-bar");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// for the fequently asked question

// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// frequently asked question
const accordions = document.querySelectorAll('.accordion');
  
      accordions.forEach((accordion) => {
          accordion.addEventListener('click', function() {
              this.classList.toggle('active');
              const panel = this.nextElementSibling;
              if (panel.style.display === 'block') {
                  panel.style.display = 'none';
              } else {
                  panel.style.display = 'block';
              }
          });
      });