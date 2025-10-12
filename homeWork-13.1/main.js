'use strict'

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

   
    document.getElementById("nameError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("emailError").textContent = "";

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    }

    if (message.length < 5) {
        document.getElementById("messageError").textContent = "Message must be at least 5 characters.";
        valid = false;
    }

    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone must start with +380 and be 13 digits.";
        valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        valid = false;
    }

    if (valid) {
        console.log("Form submitted:");
        console.log("Name:", name);
        console.log("Message:", message);
        console.log("Phone:", phone);
        console.log("Email:", email);
        alert("Message sent successfully!");
    }
});