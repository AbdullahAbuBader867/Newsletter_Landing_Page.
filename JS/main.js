const dismissMessage = document.getElementById('dismissMessage');
const nextStep = document.getElementById('next-step');
const showError = document.getElementById('error');
const emailInput = document.getElementById('email');
const emailUser = document.getElementById("email-user");
const steps = document.querySelectorAll(".step");

nextStep.addEventListener("click", (e) => {

    e.preventDefault();

    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email) || email === "") {
        showError.textContent = "Valid email required";
        emailInput.classList.add("input-error");
        return;
    }

    emailUser.textContent = email;

    steps[0].classList.remove("active");
    steps[1].classList.add("active");
});

// Remove Error While Typing
emailInput.addEventListener("input", () => {
    showError.textContent = "";
    emailInput.classList.remove("input-error");
});
// Back to Home
dismissMessage.addEventListener("click", () => {
    steps[1].classList.remove("active");
    steps[0].classList.add("active");
})