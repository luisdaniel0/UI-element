
let url = "https://api.thecatapi.com/v1/images/search";


// next slide button
const nextSlide = document.querySelector(".btn");
console.log(nextSlide)

//prev slide button
const prevSlide = document.querySelector(".btn-prev");

let pictures = []

let currentIndex = 0

let getPicture = (event) => {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      pictures.push(res[0].url)
      console.log(pictures);
      if (pictures.length === 1) {
        currentIndex = 0;
      } else {
        currentIndex++
      }
      document.querySelector('img').src = pictures[currentIndex];

      // let currentImg = document.querySelector('img')
      // if (currentImg) {
      //   currentImg.remove();
      // }

      // let body = document.querySelector(".slide")
      // let image = document.createElement('img')
      // image.src = `${res[0].url}`
      // body.appendChild(image)
      
    })
}

nextSlide.addEventListener("click", getPicture);

  getPicture();

