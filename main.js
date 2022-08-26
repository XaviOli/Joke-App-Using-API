const API_URL = "https://icanhazdadjoke.com/";

async function getAnotherJoke() {
  const dadJokes = await fetch(API_URL, {
    headers: {
      Accept: "application/json",
    },
  }).then((response) => response.json());
  console.log(dadJokes.joke);
}

