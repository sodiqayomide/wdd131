const menuButton =
document.querySelector("#menu-button");
const navigation =
document.querySelector("nav");

menuButton.addEventListener("click", () => {navigation.classList.toggle("open");
    if (menuButton.textContent === "☰") {
        menuButton.textContent = "x";
    } else {
        menuButton.textContent = "☰";
    }
});
// Display current year
document. querySelector("#currentyear").textContent =
new Date().getFullYear();

//Display last modified date
document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;