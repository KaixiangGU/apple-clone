const mobileNav = document.querySelector(".list-wrapper");
const hamburger = document.querySelector(".menu-icon");
const menuIcon = document.querySelector(".list-item-menu");
const iconListItem = document.querySelectorAll(".icon-list-item");
const textListItem = document.querySelectorAll(".text-list");

menuIcon.addEventListener("click", () => {
  hamburger.classList.toggle("transform");
  mobileNav.classList.toggle("show-mobile-menu");
  iconListItem.forEach((item) => {
    item.classList.toggle("show-mobile-menu");
  });
  textListItem.forEach((item) => {
    item.classList.toggle("show-mobile-menu");
  });
});

function deleteMobile(match) {
  if (match.matches) {
    mobileNav.classList.remove("show-mobile-menu");
    iconListItem.forEach((item) => {
      item.classList.remove("show-mobile-menu");
    });
    textListItem.forEach((item) => {
      item.classList.remove("show-mobile-menu");
    });
    hamburger.classList.remove("transform");
  }
}

let match = window.matchMedia("(min-width: 833px)");

match.addEventListener("change", () => {
  deleteMobile(match);
});
