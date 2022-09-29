const button = document.querySelector(".button");
const pokemon = document.querySelector('.pokemon');
const pokemonName = document.querySelector('.h1');
const pokemonImg = document.querySelector(".pokemon-img");
const pokemonStatus= document.querySelector(".status")


const url = "https://pokeapi.co/api/v2/pokemon/"


  fetch(url)
    .then((res) => res.json())
    .then(result => {
      console.log(result)
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    });



  /* make sure API is working
  html text and grid stuff
  event listeners*/