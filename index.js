const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container"),
  titleInput: document.getElementById("input-title"),
  imageInput: document.getElementById("input-img"),
  descInput: document.getElementById("input-desc"),
};

function clearInput() {
  DOMSelectors.titleInput.value = "";
  DOMSelectors.imageInput.value = "";
  DOMSelectors.descInput.value = "";
}

function addCard(num) {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="c${num}"> 
        <h2>${DOMSelectors.titleInput.value}</h2>
        <img src="${DOMSelectors.imageInput.value}" alt="" class="card-img">
        <p>${DOMSelectors.descInput.value}</p>
        <button type"button" id="b${num}">delete</button>
      </div>
      `
  );
  document
    .querySelector(`#b${num}`)
    .addEventListener("click", function (event) {
      event.preventDefault();
    });
}

function removeCard(num) {
  document
    .querySelector(`#b${num}`)
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(`#c${num}`).remove();
    });
}

function run() {
  let n = 0;
  DOMSelectors.button.addEventListener("click", function (event) {
    if (
      !(
        DOMSelectors.titleInput.value === "" ||
        DOMSelectors.descInput.value === "" ||
        DOMSelectors.imageInput.value === ""
      )
    ) {
      event.preventDefault();
      addCard(n);
      clearInput();
      removeCard(n);
      n += 1;
    }
  });
}

run();
