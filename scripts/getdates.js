const year =
document.querySelector("#currentyear");

year.textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
document.lastModified;