console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(
    "http://api.weatherstack.com/current?access_key=9493670eab2987265927ec51357e61a8&query=" +
      location +
      "&units=f"
  ).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.current.temperature;
        messageTwo.textContent = data.current.weather_descriptions;
        console.log(data);
      }
    });
  });
});
