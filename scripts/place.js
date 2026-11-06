const year =
document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();
const lastModified =
document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;
function calculateWindChill(temperature,windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) 
    + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}
const temperature = 8;
const windSpeed = 10;

const windChillElement = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature,windSpeed).toFixed(1)} ℃`;
} else {
    windChillElement.textContent = "N/A";
}