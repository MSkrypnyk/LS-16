function navToggle() {
  const iconClose = document.getElementById("iconClose");
  const headerUL = document.getElementById("headerUl");

  headerUL.classList.toggle("_active");
  iconClose.classList.toggle("_active");
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    items: 1,
  });
});
