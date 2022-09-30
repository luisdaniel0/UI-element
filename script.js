let slides = document.getElementsByClassName("slider__slide");

let navlinks = document.getElementsByClassName("slider__navlink");

let currentSlide = 0;


document.getElementById("nav-button--next").addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});

document.getElementById("nav-button--prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1)
});







function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
      console.log(data.sprites.front_default);
    })
  
}

function fetchPokemons(number) {
  for (let i = 1; i <= number; i++){
    fetchPokemon(i);
  }
}
  
fetchPokemons(4);


  /* make sure API is working
  html text and grid stuff
  event listeners*/