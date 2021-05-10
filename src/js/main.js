const aside = document.querySelector(".aside");
const asideContainer = document.querySelector(".aside-container");
const toggleControl = document.querySelector('.toggle');

const asideNav = document.querySelectorAll("nav li");

toggleControl.onclick = function () {
  this.classList.toggle("active");
  aside.classList.toggle("active");
  asideContainer.classList.toggle("active");
};

asideNav.forEach(function (nav) {
  nav.onclick = function () {
    toggleControl.classList.add("active");
    aside.classList.add("active");
    asideContainer.classList.add("active");
  };
});
