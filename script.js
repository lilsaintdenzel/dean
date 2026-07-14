// The Deaton Academy — interactions

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
      ".testimonial, .book-intro, .book-form, .community-content"
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

  // Booking form -> compose an email to Dean.
  // Static site: opens the visitor's mail client pre-filled. To collect
  // submissions automatically instead, point this form at a service such
  // as Formspree (set the form's action/method) and remove this handler.
  var form = document.getElementById("booking-form");
  var note = document.getElementById("form-note");
  var RECIPIENT = "lilsaintdenny@gmail.com";

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var service = form.service.value;
      var date = form.date.value;
      var message = form.message.value.trim();

      var subject = "Booking enquiry — " + service + " — " + name;
      var bodyLines = [
        "Name: " + name,
        "Email: " + email,
        "Service: " + service,
        "Date of event / lesson: " + (date || "Not specified"),
        "",
        "Message:",
        message || "(none)",
        "",
        "— Sent from The Deaton Academy website"
      ];
      var body = bodyLines.join("\n");

      var mailto =
        "mailto:" +
        RECIPIENT +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);

      window.location.href = mailto;

      if (note) {
        note.textContent =
          "Opening your email app to send the enquiry. If nothing happens, email " +
          RECIPIENT +
          " directly.";
        note.className = "form-note ok";
      }
    });
  }
})();
