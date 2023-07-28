const colorThemes = document.querySelectorAll('[name="theme"]');
const rootElement = document.documentElement;

//store theme
const storeTheme = function (theme) {
    localStorage.setItem("theme", theme)
}

const applyStoredTheme = function () {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
        setTheme(storedTheme);
    }
};

colorThemes.forEach((themeOption) => {
    themeOption.addEventListener('click', () => {
        const selectedTheme = themeOption.id;
        storeTheme(selectedTheme);
        setTheme(selectedTheme);
    });
});

//apply theme
const setTheme = function (theme) {
    document.documentElement.className = theme;
};

applyStoredTheme();

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
