document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temperature = 28;
const windSpeed = 12;

const calculateWindChill = (temp, speed) => 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);

const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
} else {
  windChillElement.textContent = "N/A";
}