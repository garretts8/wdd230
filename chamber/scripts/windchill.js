const currentTemp = document.querySelector("#temperatureF");
const weather_Icon = document.querySelector("#weather_Icon");
const currentCond = document.querySelector("#currentCond");
const captionDesc = document.querySelector("#capDescript");
const windSpeed = document.querySelector("#windspeed");
const windChill = document.querySelector("#windchill");

const imageIcon = document.createElement('img');
const imagesrc = document.createElement('src');
const imageAlt = document.createElement('Alt');


const url = "https://api.openweathermap.org/data/2.5/weather?lat=41.089&lon=-112.065&units=imperial&appid=dc73736434f97a683e7d8dfe5d65348e"

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const syracuseData = await response.json();
      console.log(syracuseData); //this is for testng the call displayResults(data);
      displayResults(syracuseData);
    } else {
      throw Error(await response.text());
    }
  } catch(error) {
    console.log(error.message);
  }
}

function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

apiFetch();

function displayResults(weatherData) {
  currentTemp.innerHTML = `${weatherData.main.temp.toFixed()} °F`;
  currentCond.innerHTML = capitalize(weatherData.weather[0].description);
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const altDesc = capitalize(weatherData.weather[0].description);
  windSpeed.innerHTML = `${weatherData.wind.speed}`;
  windChill.innerHTML = chillF(temperatureF, windSpeed);

  imageIcon.setAttribute('id', 'weatherIcon');
  imageIcon.setAttribute('src', iconsrc);
  imageIcon.setAttribute('alt', altDesc);
  // append src and alt as children of img
   weather_Icon.appendChild(imageIcon);
   imageIcon.appendChild(imagesrc);
  imageIcon.appendChild(imageAlt);
}

function chillF(temperature, windSpeed) {
  const tempF = document.getElementById("temperatureF").textContent;
  const temp = parseInt(tempF);
  console.log(temp);
  const windS = document.getElementById("windspeed").textContent;
  const wind = parseInt(windS);
  if (temp <= 50 && wind > 3) {
    const chilly = (35.74 + (0.6215 * temp) - (35.75 * wind**0.16) + (0.4275 * temp * wind ** 0.16)).toFixed(1);
    return `${chilly} °F`;
  } else{
    return "N/A"
  }
}





// function doInputOutput() {
  
//   let tempF = parseFloat(document.getElementById("temperatureF").value);
//   let speed = parseFloat(document.getElementById("windSpeedInput").value);
//   finalTemp = windChill(tempF, speed);
//   document.getElementById("outputDiv").innerHTML = finalTemp;
// }

//   function windchill(tempF, speed) {
//     let windChill = 35.74 + (0.6215 * tempF) - (35.75 * speed**0.16) + (0.4275 * tempF * speed ** 0.16);
//     return windChill;
//   }

