const DOMSelectors = {
  header: document.querySelector("h1"),
  description: document.querySelector(".card-desc"),
  items: document.querySelectorAll("li"),
};
console.log(DOMSelectors.description);

function formThing() {
  //defines the function
  let form = document.querySelector("form");
  //listen for a click event
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    //logging the click event
    console.log(event.target);
    //get infomation from the form
  });
}
//calls the function
formThing();
