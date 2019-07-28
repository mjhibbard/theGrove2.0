function initNav() {
  // Make the NavToggler
  function makeNavToggler(wrap) {
    //Nav Toggling classes and checking
    function toggleNav(wrap) {
      if (wrap.classList.contains("nav-menu__screen--show")) {
        wrap.classList.remove("nav-menu__screen--show");
        document.body.classList.remove("body__no-scroll");
      } else {
        wrap.classList.add("nav-menu__screen--show");
        document.body.classList.add("body__no-scroll");
      }
    }

    return function() {
      toggleNav(wrap);
    };
  }

  var wrap = document.getElementById("nav__wrap");
  var toggles = makeNavToggler(wrap);

  var button = document.getElementById("nav-menu__toggle");
  button.addEventListener("click", toggles);

  var links = wrap.getElementsByClassName("nav__link");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", toggles);
  }
}
initNav();