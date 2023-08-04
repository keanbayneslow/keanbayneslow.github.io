const colorThemes = document.querySelectorAll('[name="theme"]');
const rootElement = document.documentElement;


//user greeting
const greetings = [
    "Hello,",
    "Welcome,",
    "Marhabaan,",
    "Greetings,",
    "Kamusta,",
    "Bonjour,",
    "G'day,",
    "Dobryj Den,",
    "Hallå,",
    "Sata Srī Akāla,",
    "Xin Chào,",
    "Aloha,",
    "S’mae,",
    "Dia Duit,",
    "Guten Tag,",
    "Kia Ora,",
    "01001000 01000101 01001100 01001100 01001111,"
];

function greetUser() {
    const userName = prompt("What is your name?");
    if (userName) {
        const greetingElement = document.getElementById("greeting");
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        greetingElement.textContent = `${randomGreeting} ${userName}!`;

        greetingElement.classList.add("greeting-show");

        const button = document.querySelector("button");
        button.style.display = "none";
    }
};
