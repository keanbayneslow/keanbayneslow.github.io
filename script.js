const colorThemes = document.querySelectorAll('[name="theme"]');

//store theme
const storeTheme = function (theme) {
    localStorage.setItem("theme", theme)
}

colorThemes.forEach((themeOption) => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id);
    });
});

//apply theme
const setTheme = function (theme) {
    document.documentElement.className = theme;
};



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
    "Kia Ora, ",
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