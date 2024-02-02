function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var unitSelect = document.getElementById("unit");
    var selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
    var resultElement = document.getElementById("result");

    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    var convertedTemperature = (selectedUnit === "celsius") ? convertToFahrenheit(temperatureInput) : convertToCelsius(temperatureInput);

    resultElement.innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2) + " " + selectedUnit.toUpperCase();
}

function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}