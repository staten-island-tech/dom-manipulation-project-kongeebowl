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
    `<div class="card" id="c${n}"> 
        <h2>${title}</h2>
        <img src="${image}" alt="" class="card-img">
        <p>${description}</p>
        <button type="button" id="b${n}></button>
      </div>
      `
  );
  document.querySelector(`#b${n}`).addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(`#p${n}`).remove();
  });

  DOMSelectors.titleInput.value = "";
  DOMSelectors.imageInput.value = "";
  DOMSelectors.descInput.value = "";
});

function run() {
  let n = 0;
  DOMSelectors.button.addEventListener("click", function (event) {
    if (
      !(
        DOMSelectors.titleInput.value === "" ||
        DOMSelectors.descInput.value === ""
      )
    ) {
      event.preventDefault();
      box(n);
      clearInput();
      n += 1;
    }
  });
}

run();
