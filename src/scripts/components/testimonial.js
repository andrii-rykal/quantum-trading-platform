import { testimonials } from "../../assets/testimonials.js";

let currentIndex = 0;

const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const role = document.getElementById("role");
const quote = document.getElementById("quote");
const counter = document.getElementById("counter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function formatNumber(n) {
  return n.toString().padStart(2, "0");
}

export function updateTestimonial(index) {
  const t = testimonials[index];
  avatar.src = t.avatar;
  name.textContent = t.name;
  role.textContent = t.role;
  quote.textContent = t.quote;
  counter.textContent = `${formatNumber(index + 1)} / ${formatNumber(testimonials.length)}`;

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === testimonials.length - 1;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateTestimonial(currentIndex);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < testimonials.length - 1) {
    currentIndex++;
    updateTestimonial(currentIndex);
  }
});

updateTestimonial(currentIndex);
