const jokeBtn = document
  .getElementById("joker")
  .addEventListener("click", getJoke);
const outPut = document.getElementById("output");

async function getJoke() {
  await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      outPut.textContent = data.joke;
    })
    .catch(error => {
      console.log(error);
    });
}

const pokimon = document
  .getElementById("pokimon")
  .addEventListener("click", getRandomPokimon);
// const apiData = {
//   apiUrl: "https://pokeapi.co/api/v2/",
//   endpoint: "pokemon/",
// };

async function getRandomPokimon() {
  const url = "https://pokeapi.co/api/v2/pokemon/" + generateRandomPoki();
  await fetch(url)
    .then(data =>  data.json())
    .then(pokimon => {
     displayPoki(pokimon.name, pokimon.sprites.front_default);
    })
    .catch(error => {
      console.log("Something bad ocurred here!");
    });
}

async function displayPoki(name, img) {
  const html = `
    <h2>${name}</h2>
    <img src='${img}'alt='${name}'>
    `;
  outPut.innerHTML = html;
  console.log(name, img);
}

const generateRandomPoki = () => Math.floor(Math.random()*200 + 1)

const getDtTweet = document.getElementById('getDtTweet').addEventListener('click', getDonaldTweet);

async function getDonaldTweet(){
    const url = 'https://api.tronalddump.io/random/quote';
    await fetch(url)
    .then(res => res.json())
    .then(tweet => {
        outPut.textContent= tweet.value
    })
    .catch(error =>{
        console.log('something went wrong')
    })
    
    

}

