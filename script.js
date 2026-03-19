document.documentElement.classList.add("js");

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isExpanded));
    if (!answer) return;

    if (isExpanded) {
      answer.style.maxHeight = "0px";
    } else {
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }
  });
});

const contactForm = document.querySelector(".contact-form");
const status = document.querySelector(".form-status");

if (contactForm && status) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      status.textContent = "Please complete the required fields before submitting.";
      return;
    }

    status.textContent = "Thanks. Your request has been captured for internal review.";
    contactForm.reset();
  });
}

const yearTarget = document.querySelector("#year");
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear().toString();
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in-view"));
}
