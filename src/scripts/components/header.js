document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  const langSelectors = document.querySelectorAll(".lang-selector");
  const navLinks = document.querySelectorAll(".nav__list a");

  const languages = {
    en: { code: "en", label: "EN", full: "English" },
    ua: { code: "ua", label: "UA", full: "Українська" },
    pl: { code: "pl", label: "PL", full: "Polski" },
  };

  function closeBurgerMenu() {
    nav.classList.remove("nav--open");
    burger.classList.remove("burger--active");
  }

  langSelectors.forEach((langSelector) => {
    const langBtn = langSelector.querySelector(".lang-btn");
    const langDropdown = langSelector.querySelector(".lang-dropdown");

    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langSelector.classList.toggle("active");
    });

    langDropdown.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        const selectedLang = e.target.dataset.lang;
        document.querySelectorAll(".lang-text").forEach((text) => {
          text.textContent = languages[selectedLang].label;
        });
        document.documentElement.lang = selectedLang;
        langSelector.classList.remove("active");
      }
    });
  });

  document.addEventListener("click", (e) => {
    langSelectors.forEach((selector) => {
      if (!selector.contains(e.target)) {
        selector.classList.remove("active");
      }
    });
  });

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav--open");
    burger.classList.toggle("burger--active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeBurgerMenu();
    });
  });

  const mobileSignInBtn = document.querySelector(".signin-btn--mobile");
  if (mobileSignInBtn) {
    mobileSignInBtn.addEventListener("click", () => {
      closeBurgerMenu();
    });
  }

  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      closeBurgerMenu();
    }
  });
});
