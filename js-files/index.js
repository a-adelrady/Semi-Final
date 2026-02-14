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