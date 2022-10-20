// write your code here
function main() {
  fetch("http://localhost:3000/ramens")
    .then((data) => data.json())
    .then((ramenArray) => {
      loadRamen(ramenArray);
      //findRamen(ramenArray);
      //   displayRamen(findRamen);
    });
}

function loadRamen(ramenArray) {
  let ramenMenu = document.querySelector("#ramen-menu");
  let featuredRamenImage = document.querySelector("img.detail-image");
  let featuredRamenName = document.querySelector("h2.name");
  let featuredRamenRestaurant = document.querySelector("h3.restaurant");
  let featuredRamenRating = document.querySelector("span#rating-display");
  let featuredRamenComment = document.querySelector("p#comment-display");
  let ramenForm = document.querySelector("form#new-ramen");
  let formNameValue = ramenForm[0].value;

  //populate all ramen content based on first object in the json array
  featuredRamenImage.src = ramenArray[0].image;
  featuredRamenName.textContent = ramenArray[0].name;
  featuredRamenRestaurant.textContent = ramenArray[0].restaurant;
  featuredRamenRating.textContent = ramenArray[0].rating;
  featuredRamenComment.textContent = ramenArray[0].comment;

  ramenForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // let formNameValue = ramenForm[0].value;
    // let formResValue = ramenForm[1].value;
    // let formImageURLValue = ramenForm[2].value;
    // let formRatingValue = ramenForm[3].value;
    // let formCommentValue = ramenForm[4].value;
    // const ramenNameSubmitted = document.createElement("div");
    // const ramenResSubmitted = document.createElement("div");
     const ramenImageSubmitted = document.createElement("img");
    // const ramenRatingSubmitted = document.createElement("div");
    // const ramenCommentSubmitted = document.createElement("div");
    // ramenNameSubmitted.setAttribute("class", "submitted-ramen");
    // ramenResSubmitted.setAttribute("class", "submitted-ramen");
    // ramenImageSubmitted.setAttribute("class", "submitted-ramen");
    // ramenRatingSubmitted.setAttribute("class", "submitted-ramen");
    // ramenCommentSubmitted.setAttribute("class", "submitted-ramen");
    // ramenNameSubmitted.textContent = ramenForm[0].value;
    // ramenResSubmitted.textContent = ramenForm[1].value;
     ramenImageSubmitted.src = ramenForm[2].value;
    // ramenRatingSubmitted.textContent = parseInt(ramenForm[3].value);
    // ramenCommentSubmitted.textContent = ramenForm[4].value;
    const newRamenObject = {
        id: ramenArray.length,
        name: ramenForm[0].value,
        restaurant: ramenForm[1].value,
        image: ramenForm[2].value,
        rating: parseInt(ramenForm[3].value),
        comment: ramenForm[4].value,
      };

    fetch("http://localhost:3000/ramens", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(newRamenObject),
    })
    .then(newRamenList => loadRamen(newRamenList))
    
    ramenMenu.appendChild(ramenImageSubmitted);
    
  });

  ramenArray.forEach((ramenObject) => {
    const ramenImage = document.createElement("img");
    ramenImage.src = ramenObject.image;
    ramenImage.setAttribute("data-id", ramenObject.id);
    ramenMenu.appendChild(ramenImage);

    ramenImage.addEventListener("click", (e) => {
      //   console.log(e.target.getAttribute('data-id'));
      //   console.log(ramenArray);
      //   for (const ramenItem of ramenArray) {
      //     // returns a ramen object from the array in the json
      //     if (parseInt(e.target.getAttribute("data-id")) === ramenItem.id) {
      //       featuredRamenImage.src = ramenItem.image;
      //       featuredRamenName.textContent = ramenItem.name;
      //       featuredRamenRestaurant.textContent = ramenItem.restaurant;
      //       featuredRamenRating.textContent = ramenItem.rating;
      //       featuredRamenComment.textContent = ramenItem.comment;
      //     }
      //   }
      featuredRamenImage.src = ramenObject.image;
      featuredRamenName.textContent = ramenObject.name;
      featuredRamenRestaurant.textContent = ramenObject.restaurant;
      featuredRamenRating.textContent = ramenObject.rating;
      featuredRamenComment.textContent = ramenObject.comment;
    });
  }); //ramenArray.forEach parameters
}

main();
