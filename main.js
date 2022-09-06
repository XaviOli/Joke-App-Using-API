"use strict";

// Variables

const API_URL = "https://icanhazdadjoke.com/";
const btnAcudit = document.getElementById("btn-next");
const jokeScript = document.getElementById("text");
const scorePuntuaction = document.getElementById("score");
const forecastInfo = document.getElementById("forecast");

const reportJokes = [];

const d = new Date();
let date = d.toISOString = "none";

const weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=Barcelona&exclude=hourly,daily&units=metric&lang=sp&appid=f033bc883319078da9dd983162b7cb55";

// Exercise 1: Pressing the button will fetch the jokes API
// Using Promises //

const dadJokes = () => {
  fetch(`${API_URL}`, {
    headers: {
      Accept: "application/json",
    },
  })
  .then((response) => response.json())
  .then((data) => {
    jokeScript.innerHTML = data.joke;
    console.log(data);
    scorePuntuaction.style.display = "block";
  });
}

const weather = () => {
  fetch(weatherApi)
    .then((response) => response.json())
    .then((data) => {
      const icon = data.weather[0].icon;
      forecast.innerHTML = `<img src="forecast/${icon}.png" style="width:50px; border-right: 2px solid gray; margin-right: 10px"> 
      ${data.main.temp.toFixed(1)} °C ${data.name}`;
      console.log(data);
      
    });
};

weather();

function getScore(id) {
  reportJokes.push({
    joke: jokeScript.innerHTML,
    score: id,
    date: date,
  });
  console.log(reportJokes);
}

// Exercise 5: Chuck Norris' jokes using another API

const chuckNorrisJokes = async() => {
  const joke = await fetch('https://api.chucknorris.io/jokes/random');
  const response = await joke.json()
  jokeScript.innerHTML = response.value
  console.log(response)
}

let toggle = true;

function toggleFunction(){
   toggle ? dadJokes() : chuckNorrisJokes();
   toggle = !toggle;
}

btnAcudit.addEventListener("click", toggleFunction);

// Exercise 6: Layout the jokes and weather website according to the mock-up
