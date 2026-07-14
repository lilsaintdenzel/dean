// The Deaton Academy interactions

(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close menu when a link is clicked
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Reveal-on-scroll
  var revealTargets = document.querySelectorAll(
    ".about-text, .about-media, .events-text, .events-media, " +
      ".coaching-text, .coaching-media, .section-head, .media-card, " +
      ".testimonial, .book-intro, .book-form, .community-content, .event-card"
  );
  revealTargets.forEach(function (el) {
    el.classList.add("reveal");
  });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealTargets.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add("in");
    });
  }

  // Booking form.
  // No contact destination is configured yet. Until one is set, either a
  // recipient email (compose a mailto) or a form service such as Formspree
  // (set the form's action/method and remove this handler), the form
  // validates input but cannot deliver the enquiry.
  var form = document.getElementById("booking-form");
  var note = document.getElementById("form-note");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      if (note) {
        note.textContent =
          "Thanks! Online booking isn't connected yet. Please check back soon.";
        note.className = "form-note ok";
      }
    });
  }
})();
