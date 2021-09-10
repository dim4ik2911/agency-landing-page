const hamburer_menu = document.getElementById("hamburger-menu");
const mobile_navigation = document.getElementsByClassName("mobile-navigation");

hamburer_menu.addEventListener("click", () => {
  if (mobile_navigation[0].style.display === "block") {
    mobile_navigation[0].style.display = "none";
    hamburer_menu.style.opacity = "1";
  } else {
    mobile_navigation[0].style.display = "block";
    hamburer_menu.style.opacity = ".5";
  }
});
