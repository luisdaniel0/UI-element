
let URL = "https://api.thecatapi.com/v1/images/search";


// next slide button
const nextSlide = document.querySelector(".btn");
console.log(nextSlide)

//prev slide button
const prevSlide = document.querySelector(".btn-prev");



nextSlide.addEventListener("click", (event) => {
  event.preventDefault();
  fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      let currentImg = document.querySelector('img')
      if (currentImg) {
        currentImg.remove();
      }

      let body = document.querySelector(".slide")
      let image = document.createElement('img')
      image.src = `${res[0].url}`
      body.appendChild(image)


      
      
    });
});

/*
function fetchPokemon(id) {
  fetch(`https://api.thecatapi.com/v1/images/search`)
    .then(res => res.json())
    .then(data => {
      console.log(data[0]);
    })
    

}
  


function fetchPokemons(number) {
  for (let i = 1; i <= number; i++) {
    fetchPokemon(i);
  }
}
fetchPokemons(4)
*/

/* nextSlide.addEventListener('click', function () {
  fetch(url)
    .then(res => res.json())
    .then(result => {
      console.log(result[0].url)
      return result[0].url
      
    })
}) 
*/


/*
function pokemon(){
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(function(allpokemon){
  allpokemon.results.forEach(function(pokemon){
    fetchPokemonData(pokemon); 
  })
 })
}
pokemon()

function fetchPokemonData(pokemon){
  let url = pokemon.url 
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
    console.log(pokeData)
    })
}

function createPokeImage(pokeID, containerDiv) {
  let pokeImgContainer = document.createElement('div')
  pokeImgContainer.classList.add('image')

  let PokeImage = document.createElement('img')
  pokeImgContainer.srcset = `https://archives.bulbagarden.net/media/upload/7/7c/001Bulbasaur_OS_Anime_3.png`
  
  pokeImgContainer.append(pokeImage);
  containerDiv.append(pokeImgContainer);
}

  */
  



/*

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
      console.log(data.sprites.front_default);
    })

}
  


function fetchPokemons(number) {
  for (let i = 1; i <= number; i++) {
    fetchPokemon(i);
  }
}
fetchPokemons(4)
*/


/*function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
      document.querySelector(".slide").innerHTML=`
        <div>
          <img src="data.sprites.front_default"></img>
        </div>`
    })
}

*/

/*
 nextSlide.addEventListener('click', function () {
  fetch(url)
    .then(res => res.json())
    .then(result => {
      console.log(result)
      image.src=result.sprites.front_default
    })
}) 

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
      console.log(data.sprites.front_default);
    })

}

function fetchPokemons(number) {
  for (let i = 1; i <= number; i++) {
    fetchPokemon(i);
  }
}

fetchPokemons(4);



//catlab for ref img src// */