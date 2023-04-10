// Get data from Weather API using fetch
fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/aberdeen?unitGroup=metric&key=8SQAPD3Z3W2WE2WPEVW9Q7A6F&contentType=json", {
  "method": "GET",
  "headers": {
  }
  })
.then(response => response.json())
.then (data => {
    console.log(data)
    const theOutput = document.getElementById('outputBox');
    function appendOutput() {
      // Creating new items for individual weather elements
        const tempItem = document.createElement('ion-item');
        const visibilityItem = document.createElement('ion-item');
        const precipItem = document.createElement('ion-item');
        const windItem = document.createElement('ion-item');
        const sunsetItem = document.createElement('ion-item');
        // Taking the data from API and storing in relevant variable
        tempItem.textContent = `Temperature is ${data.currentConditions.temp}°C`;
        visibilityItem.textContent = `Visibility is ${data.currentConditions.visibility} miles`;
        precipItem.textContent = `Precipitation is ${data.currentConditions.precip}mm`;
        windItem.textContent = `Wind Speed is ${data.currentConditions.windspeed}mph`;
        sunsetItem.textContent = `Sun sets at ${data.currentConditions.sunset}pm`;
        // Ammending the text boxes with new data
        tempBox.appendChild(tempItem);
        visBox.appendChild(visibilityItem);
        precipBox.appendChild(precipItem);
        windBox.appendChild(windItem);
        sunsetBox.appendChild(sunsetItem);
    }
    appendOutput();
})
.catch(err => {
  console.error(err);
});
