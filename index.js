const input = document.getElementById("email");
const form = document.querySelector("form");
const submitInput = document.querySelector(".submit-input");
const invalidMessage = document.querySelector(".invalid-email-message");
const thanksMessage = document.querySelector(".thanks-message");
const submissionPage = document.querySelector(".submission-page");
const thanksPage = document.querySelector(".thanks-page");
const dismissButton = document.querySelector(".dismiss");

function emailValidation(email) {
  if (email === "" || !email.includes("@")) {
    return false;
  } else {
    return true;
  }
}

function switchPage() {
  submissionPage.classList.toggle("invisible");
  thanksPage.classList.toggle("visible");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = input.value;

  if (!emailValidation(email)) {
    submitInput.classList.add("invalid-input");
    invalidMessage.classList.add("active");

    return;
  } else {
    submitInput.classList.remove("invalid-input");
    invalidMessage.classList.remove("active");

    switchPage();

    thanksMessage.textContent = `A confirmation email has been sent to ${email}. Please open
        it and click the button inside to confirm your subscription.`;
  }
});

dismissButton.addEventListener("click", () => {
  switchPage();
});
