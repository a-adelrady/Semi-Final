const header = document.querySelector(".heroHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const btn = document.querySelector(".scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
});

btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//! =====Scroll (lenis) =====
const lenis = new Lenis({
  duration: 0.7,
  easing: (t) => 1 - Math.pow(1 - t, 2),
  smoothWheel: true,
  wheelMultiplier: 1.1,
  touchMultiplier: 1,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



lenis.on('scroll', (e) => {
  const parallaxElements = document.querySelectorAll('.scroll-move');
  
  parallaxElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (rect.top < windowHeight && rect.bottom > 0) {
      const distanceFromCenter = (rect.top + rect.height / 2) - windowHeight / 2;
      
      el.style.setProperty('--offset', distanceFromCenter + 'px');
    }
  });
});
lenis.on('scroll', (e) => {
  const parallaxElementsX = document.querySelectorAll('.scroll-move-x');
  
  parallaxElementsX.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (rect.top < windowHeight && rect.bottom > 0) {
      const distanceFromCenter = (rect.top + rect.height / 2) - windowHeight / 2;
      
      el.style.setProperty('--offset', distanceFromCenter + 'px');
    }
  });
});
lenis.on('scroll', (e) => {
  const parallaxElementsBottom = document.querySelectorAll('.scroll-move-bottom');
  
  parallaxElementsBottom.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (rect.top < windowHeight && rect.bottom > 0) {
      const distanceFromCenter = (rect.top + rect.height / 2) - windowHeight / 2;
      
      el.style.setProperty('--offset', distanceFromCenter + 'px');
    }
  });
});
lenis.on('scroll', (e) => {
  const parallaxElementsTop = document.querySelectorAll('.scroll-move-top');
  
  parallaxElementsTop.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (rect.top < windowHeight && rect.bottom > 0) {
      const distanceFromCenter = (rect.top + rect.height / 2) - windowHeight / 2;
      
      el.style.setProperty('--offset', distanceFromCenter + 'px');
    }
  });
});