const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container"),
  titleInput: document.getElementById("input-title"),
  imageInput: document.getElementById("input-img"),
  descInput: document.getElementById("input-desc"),
};
console.log(DOMSelectors.description);

DOMSelectors.button.addEventListener("click", function () {
  let title = DOMSelectors.titleInput.value;
  let image = DOMSelectors.imageInput.value;
  let description = DOMSelectors.descInput.value;

  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div class="card"> 
        <h3>${title}</h3>
        <img src="${image}" alt="Card Image" class="card-img">
        <p>${description}</p>
      </div>
      `
  );
  DOMSelectors.titleInput.value = "";
  DOMSelectors.imageInput.value = "";
  DOMSelectors.descInput.value = "";
});
