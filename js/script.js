"use strict";

const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", mobileMenu);

function mobileMenu() {
  burger.classList.toggle("menu__burger_active");
  menu.classList.toggle("menu__list_active");
}

function mobileMenuItem() {
  menu.classList.remove("menu__list_active");
  burger.classList.remove("menu__burger_active");
}

const menuItems = document.querySelectorAll(".menu__item");

for (let item of menuItems) {
  item.addEventListener("click", mobileMenuItem);
}

