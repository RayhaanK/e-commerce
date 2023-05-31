// Products Page
let products = [
  {
    id: 1,
    name: "Xbox Series X",
    image: "https://i.postimg.cc/hGHhjvr9/billy-freeman-Zjn4d-T993-g-unsplash.jpg",
    subtitle: "Power your dreams:",
    description:
      "Introducing Xbox Series X—our fastest, most powerful console ever, designed for a console generation that has you, the player, at its center.",
    price: "12,999ZAR",
  },
  {
    id: 2,
    name: "Playstation 5",
    image: "https://i.postimg.cc/c6qsc00y/kerde-severin-NVD-32-BBZFE-unsplash.jpg",
    subtitle: "Play Has No Limits™",
    description:
      "The PS5™ console unleashes new gaming possibilities that you never anticipated.",
    price: "12,999ZAR",
  },
  {
    id: 3,
    name: "Nintendo Switch",
    image: "https://i.postimg.cc/LX0gtTR1/tobiah-ens-b-Hnbq-JBTw-Ls-unsplash.jpg",
    subtitle: "Switch and Play",
    description:
      "Enjoy the home console gaming experience, without access to a TV. Nintendo Switch can transform to suit your situation, so you can play the games you want, no matter how busy life may be.",
    price: "8,999ZAR",
  },
  {
    id: 4,
    name: "Nintendo Switch",
    image: "https://i.postimg.cc/LX0gtTR1/tobiah-ens-b-Hnbq-JBTw-Ls-unsplash.jpg",
    subtitle: "Switch and Play",
    description:
      "Enjoy the home console gaming experience, without access to a TV. Nintendo Switch can transform to suit your situation, so you can play the games you want, no matter how busy life may be.",
    price: "8,999ZAR",
  },
  {
    id: 5,
    name: "Nintendo Switch",
    image: "https://i.postimg.cc/LX0gtTR1/tobiah-ens-b-Hnbq-JBTw-Ls-unsplash.jpg",
    subtitle: "Switch and Play",
    description:
      "Enjoy the home console gaming experience, without access to a TV. Nintendo Switch can transform to suit your situation, so you can play the games you want, no matter how busy life may be.",
    price: "8,999ZAR",
  },
  {
    id: 6,
    name: "Nintendo Switch",
    image: "https://i.postimg.cc/LX0gtTR1/tobiah-ens-b-Hnbq-JBTw-Ls-unsplash.jpg",
    subtitle: "Switch and Play",
    description:
      "Enjoy the home console gaming experience, without access to a TV. Nintendo Switch can transform to suit your situation, so you can play the games you want, no matter how busy life may be.",
    price: "8,999ZAR",
  },
];

let divProduct = document.querySelector(".items");
products.forEach((data) => {
  divProduct.innerHTML += `
  <div class="col ms-sm-0 mt-4">
  <div class="card">
  <h4 class="display-5 text-light text-center titleC">${data.name}</h4>
  <img
  src="${data.image}"
  class="card-img-top img-fluid cpic"
  alt="..."
/>
  <div class="card-body">
        <p class="card-text text-white descC">
        ${data.subtitle} <br>
        "${data.description}"
            </p>
            <p class= "price">
            ${data.price} 
            </p>
            </div>
            </div>  
            </div>
    `;
});
