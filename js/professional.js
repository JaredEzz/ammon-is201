/* professional.js — light enhancements for the Bootstrap professional pages. */
(function () {
  "use strict";

  // Collapse the mobile navbar after a nav link is tapped.
  document.querySelectorAll(".navbar-collapse .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      var open = document.querySelector(".navbar-collapse.show");
      if (open && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(open).hide();
      }
    });
  });

  // Smooth-scroll for same-page anchor links (e.g. #projects).
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id.length > 1) {
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
})();
