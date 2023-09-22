/*const themePicker = document.querySelector('.theme-picker');
const darkRadio = document.querySelector('#dark');
const lightRadio = document.querySelector('#light');

function handleThemeChange() {
    if (darkRadio.checked) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else if (lightRadio.checked) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        localStorage.setItem('theme', 'light');
    }
}


darkRadio.addEventListener('change', handleThemeChange);
lightRadio.addEventListener('change', handleThemeChange);


const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
    darkRadio.checked = true;
    handleThemeChange();
} else if (storedTheme === 'light') {
    lightRadio.checked = true;
    handleThemeChange();
}

*/

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
