const link_1 = document.getElementById("link-1");
const link_2 = document.getElementById("link-2");
const link_3 = document.getElementById("link-3");
const link_4 = document.getElementById("link-4");
const link_5 = document.getElementById("link-5");
const mobileMenu = document.getElementById("menu-mobile");
const openButton = document.getElementById("burger");
const closeButton = document.getElementById("close");

link_1.addEventListener("click", function handleClick() {
  mobileMenu.style.display = "none";
});
link_2.addEventListener("click", function handleClick() {
  mobileMenu.style.display = "none";
});
link_3.addEventListener("click", function handleClick() {
  mobileMenu.style.display = "none";
});
link_4.addEventListener("click", function handleClick() {
  mobileMenu.style.display = "none";
});
link_5.addEventListener("click", function handleClick() {
  mobileMenu.style.display = "none";
});

openButton.addEventListener("click", function handleClick() {
  mobileMenu.style.display = "flex";
});

closeButton.addEventListener("click", function handleClick() {
  mobileMenu.style.display = "none";
});
