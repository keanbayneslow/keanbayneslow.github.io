function greetUser() {
    const userName = prompt("What is your name?");
    if (userName) {
        const greetingElement = document.getElementById("greeting");
        greetingElement.textContent = `Welcome, ${userName}!`;

        const navbar = document.querySelector(".navbar");
        navbar.appendChild(greetingElement);

        const button = document.querySelector("button");
        button.style.display = "none";

    }
}