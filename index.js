function myFunction() {
  var element = document.body;
  var elements = document.querySelectorAll(".containerll");

  element.classList.toggle("dark-mode");

  elements.forEach(function (el) {
    el.classList.toggle("dark-cont");
  });
}
