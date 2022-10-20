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
  const ramenMenu = document.querySelector("#ramen-menu");
  const featuredRamenImage = document.querySelector("img.detail-image");
  const featuredRamenName = document.querySelector('h2.name');
  const featuredRamenRestaurant = document.querySelector('h3.restaurant');
  const featuredRamenRating = document.querySelector('span#rating-display');
  const featuredRamenComment = document.querySelector('p#comment-display');
  const ramenForm = document.querySelector('form#new-ramen');
  const formNameValue = ramenForm[0].value;

  ramenForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    let formNameValue = ramenForm[0].value;
    let formResValue = ramenForm[1].value;
    let formImageURLValue = ramenForm[2].value;
    let formRatingValue = ramenForm[3].value;
    let formCommentValue = ramenForm[4].value;
    const ramenNameSubmitted = document.createElement('div');
    const ramenResSubmitted = document.createElement('div');
    const ramenImageSubmitted = document.createElement("img");
    const ramenRatingSubmitted = document.createElement('div');
    const ramenCommentSubmitted = document.createElement('div');
    ramenNameSubmitted.setAttribute('class','submitted-ramen');
    ramenResSubmitted.setAttribute('class','submitted-ramen');
    ramenImageSubmitted.setAttribute('class','submitted-ramen');
    ramenRatingSubmitted.setAttribute('class','submitted-ramen');
    ramenCommentSubmitted.setAttribute('class','submitted-ramen');
    ramenNameSubmitted.textContent = formNameValue;
    ramenResSubmitted.textContent = formResValue;
    ramenImageSubmitted.src = formImageURLValue;
    ramenRatingSubmitted.textContent = parseInt(formRatingValue);
    ramenCommentSubmitted.textContent = formCommentValue;
    ramenMenu.appendChild(ramenImageSubmitted);
    

});

  ramenArray.forEach((ramenObject) => {
    const ramenImage = document.createElement("img");
    ramenImage.src = ramenObject.image;
    ramenImage.setAttribute("data-id", ramenObject.id);
    ramenMenu.appendChild(ramenImage);
    

    ramenImage.addEventListener("click", (e) => {
      console.log(e.target.getAttribute('data-id'));
      console.log(ramenArray);
      for (const ramenItem of ramenArray) {
        if(parseInt(e.target.getAttribute('data-id')) === ramenItem.id) {
        featuredRamenImage.src = ramenItem.image;
        featuredRamenName.textContent = ramenItem.name;
        featuredRamenRestaurant.textContent = ramenItem.restaurant;
        featuredRamenRating.textContent = ramenItem.rating;
        featuredRamenComment.textContent = ramenItem.comment;
      }

    }
});

    

}) //ramenArray.forEach parameters
  };

main();
