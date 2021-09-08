const hamburer_menu = document.getElementById("hamburger-menu");
const mobile_navigation = document.getElementsByClassName("mobile-navigation");

hamburer_menu.addEventListener("click", () => {
  if (mobile_navigation[0].style.display === "block") {
    return (mobile_navigation[0].style.display = "none");
  }
  mobile_navigation[0].style.display = "block";
});
