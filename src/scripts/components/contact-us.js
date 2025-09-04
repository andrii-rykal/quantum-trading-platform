const form = document.getElementById("form");
const nameInput = document.getElementById("form-name");
const emailInput = document.getElementById("form-email");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const submitBtn = document.getElementById("submit-btn");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateLive() {
  const nameValid = nameInput.value.trim();
  const emailValid = emailInput.value.trim();

  submitBtn.disabled = !(nameValid && emailValid);
}

function clearForm() {
  nameInput.value = "";
  emailInput.value = "";

  nameInput.classList.remove("error", "valid");
  emailInput.classList.remove("error", "valid");

  nameError.textContent = "";
  emailError.textContent = "";

  submitBtn.disabled = true;
}

function showSuccessMessage() {
  const existingSuccess = form.querySelector(".success-message");
  if (existingSuccess) {
    existingSuccess.remove();
  }

  const successMessage = document.createElement("div");
  successMessage.className = "success-message";
  successMessage.textContent = "Form sent successfully!";
  successMessage.style.cssText = `
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    z-index: 10;
    background: #d4edda;
    color: #155724;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #c3e6cb;
    animation: slideDown 0.3s ease;
  `;

  form.insertBefore(successMessage, form.firstChild);

  setTimeout(() => {
    if (successMessage.parentNode) {
      successMessage.parentNode.removeChild(successMessage);
    }
  }, 5000);
}

nameInput.addEventListener("focus", () => {
  nameError.textContent = "";
  nameInput.classList.remove("error");
});

emailInput.addEventListener("focus", () => {
  emailError.textContent = "";
  emailInput.classList.remove("error");
});

nameInput.addEventListener("input", validateLive);
emailInput.addEventListener("input", validateLive);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  if (nameInput.value.trim().length < 3) {
    nameInput.classList.add("error");
    nameInput.classList.remove("valid");
    nameError.textContent = "Name must be at least 3 characters";
    isValid = false;
  } else {
    nameInput.classList.remove("error");
    nameInput.classList.add("valid");
    nameError.textContent = "";
  }

  if (!emailPattern.test(emailInput.value.trim())) {
    emailInput.classList.add("error");
    emailInput.classList.remove("valid");
    emailError.textContent = "Incorrect email type";
    isValid = false;
  } else {
    emailInput.classList.remove("error");
    emailInput.classList.add("valid");
    emailError.textContent = "";
  }

  if (isValid) {
    showSuccessMessage();

    setTimeout(() => {
      clearForm();
    }, 1000);
  }
});
