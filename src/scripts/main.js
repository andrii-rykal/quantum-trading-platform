import "../styles/main.scss";
import "./components/header.js";
import "./components/steps.js";
import "./components/testimonial.js";
import "./components/faq.js";
import "./components/contact-us.js";
import { testimonials } from "../assets/testimonials.js";
import { updateTestimonial } from "./components/testimonial.js";

export function preloadAvatars(testimonials) {
  testimonials.forEach((t) => {
    const img = new Image();
    img.src = t.avatar;
  });
}

preloadAvatars(testimonials);
updateTestimonial(0);
