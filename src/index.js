import "./assets/styles/style.css";

// WEATHER API - https://www.visualcrossing.com/
// const weatherInfo = [];

// fetch(
//   "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=JX7LY9RYQCLWENELFC8FNQFWN"
// )
//   .then((data) => data.json())
//   .then((data) => {
//     weatherInfo.push({ conditions: data.currentConditions.conditions });
//     weatherInfo.push({
//       temp: ((data.currentConditions.temp - 32) * (5 / 9)).toFixed(1),
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(weatherInfo);
// ------------------------------------------------------------------------------

const input = document.querySelector("#input");
const button = document.querySelector("#button");
const img = document.querySelector("#img");
const errorMessage = document.querySelector("#error-message");

button.addEventListener("click", fetchGif);
window.addEventListener("keydown", (event) => {
  if (event.code == "Enter") {
    fetchGif();
  }
});

function fetchGif() {
  const searchItem = input.value;
  const url =
    "https://api.giphy.com/v1/gifs/translate?api_key=hdnMHDSnCZzfPRcoMMlVx3Av33ROAJvz&s=";

  fetch(url + searchItem, {
    mode: "cors",
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      displayGif(response);
      handleError("");
    })
    .catch((error) => {
      console.log(error);
      handleError(error);
    });
}

function displayGif(gifObject) {
  img.src = gifObject.data.images.original.url;
}

function handleError(error) {
  errorMessage.textContent = error;
}

// ------------------------------------------------------------------------------
