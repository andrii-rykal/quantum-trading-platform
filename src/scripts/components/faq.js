document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".faq__toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const card = toggle.closest(".faq__card");
      const answer = card.querySelector(".faq__answer");
      const svg = toggle.querySelector("svg");
      const allCards = document.querySelectorAll(".faq__card");

      allCards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.remove("active");
          const otherAnswer = otherCard.querySelector(".faq__answer");
          const otherSvg = otherCard.querySelector(".faq__toggle svg");

          otherAnswer.style.maxHeight = "0";
          otherAnswer.style.paddingTop = "0";
          otherSvg.style.transform = "rotate(0deg)";
        }
      });

      if (card.classList.contains("active")) {
        card.classList.remove("active");
        answer.style.maxHeight = "0";
        answer.style.paddingTop = "0";
        svg.style.transform = "rotate(0deg)";
      } else {
        card.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.paddingTop = "24px";
        svg.style.transform = "rotate(45deg)";
      }
    });
  });
});
