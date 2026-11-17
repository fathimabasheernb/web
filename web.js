const menuToggle = document.getElementById("menuToggle");

const mainNav = document.getElementById("mainNav");


menuToggle.addEventListener("click", function () {

    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

});

mainNav.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        mainNav.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});

document.getElementById("contactForm").addEventListener("submit", function (event) {

    event.preventDefault();

    document.getElementById("formNote").textContent =
        "Thank you! Your message is ready.";

    this.reset();

});

const emailInput = document.getElementById("email");

const emailError = document.getElementById("emailError");

emailInput.addEventListener("input", function () {

    const email = emailInput.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.style.display = "none";

        emailInput.classList.remove("invalid", "valid");

    }

    else if (!emailPattern.test(email)) {

        emailError.textContent = "Enter a valid email address";

        emailError.style.display = "block";

        emailInput.classList.add("invalid");

        emailInput.classList.remove("valid");

    }

    else {

        emailError.style.display = "none";

        emailInput.classList.remove("invalid");

        emailInput.classList.add("valid");

    }

});