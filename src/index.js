// write your code here
const ramenMenu = document.querySelector("#ramen-menu");
const featuredRamenImage = document.querySelector("img.detail-image");
const featuredRamenName = document.querySelector("h2.name");
const featuredRamenRestaurant = document.querySelector("h3.restaurant");
const featuredRamenRating = document.querySelector("span#rating-display");
const featuredRamenComment = document.querySelector("p#comment-display");

function main() {
  fetch("http://localhost:3000/ramens")
    .then((data) => data.json())
    .then((ramenArray) => {
      initializeFeaturedRamen(ramenArray); //populates everything on the dom with the first ramen in the JSON array of objects.
      ramenArray.forEach((ramenObject) => displayRamen(ramenObject)); //fetches the objects in the JSON array, finds the image URLS, and posts them to the DOM
      loadRamen(ramenArray);

      //findRamen(ramenArray);
      //   displayRamen(findRamen);
    });
}

function initializeFeaturedRamen(ramenArray) {
  //populate all ramen content based on first object in the json array
  featuredRamenImage.src = ramenArray[0].image;
  featuredRamenName.textContent = ramenArray[0].name;
  featuredRamenRestaurant.textContent = ramenArray[0].restaurant;
  featuredRamenRating.textContent = ramenArray[0].rating;
  featuredRamenComment.textContent = ramenArray[0].comment;
}

function displayRamen(ramenObject) {
  const ramenImage = document.createElement("img");
  ramenImage.src = ramenObject.image;
  ramenImage.setAttribute("data-id", ramenObject.id);
  ramenImage.setAttribute("class", "ramenImages");
  ramenMenu.appendChild(ramenImage);

  ramenImage.addEventListener("click", (e) => {
    featuredRamenImage.src = ramenObject.image;
    featuredRamenName.textContent = ramenObject.name;
    featuredRamenRestaurant.textContent = ramenObject.restaurant;
    featuredRamenRating.textContent = ramenObject.rating;
    featuredRamenComment.textContent = ramenObject.comment;
  });
}

function loadRamen(ramenArray) {
  let ramenForm = document.querySelector("form#new-ramen");
  let formNameValue = ramenForm[0].value;

  ramenForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newRamenObject = {
      //never need to add id as an element in a JSON object -- json adds one for you. trying to add it will spit an error.
      name: ramenForm[0].value,
      restaurant: ramenForm[1].value,
      image: ramenForm[2].value,
      rating: parseInt(ramenForm[3].value),
      comment: ramenForm[4].value,
    };
    fetch("http://localhost:3000/ramens", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRamenObject),
    })
      .then((res) => res.json())
      .then((newRamenObject) => {
        // if you follow a fetch statement with a POST request, the returned data from .then will be the BODY, not the entire array of objects.

        displayRamen(newRamenObject);
      });
  });
} //loadRamen end curlybrace

main();
//https://img.freepik.com/premium-vector/vector-illustration-siddhartha-gautama-enlightened-bodhi-tree-enlightenment-buddha-bodhi-tree_24381-1502.jpg?w=2000
