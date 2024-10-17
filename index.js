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

function addCard(num, obj) {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="c${num}"> 
        <h2>${obj.title}</h2>
        <img src="${obj.image}" alt="" class="card-img">
        <p>${obj.desc}</p>
        <button type"button" id="b${num}">delete</button>
      </div>
      `
  );
  document
    .getElementById(`b${num}`)
    .addEventListener("click", function (event) {
      event.preventDefault();
      removeCard(num);
    });
}

function removeCard(num) {
  const card = document.getElementById(`c${num}`);
  if (card) {
    card.remove();
  }
}

function run() {
  let n = 0;

  DOMSelectors.button.addEventListener("click", function (event) {
    event.preventDefault();

    const infoRecieved = {
      title: DOMSelectors.titleInput.value,
      image: DOMSelectors.imageInput.value,
      desc: DOMSelectors.descInput.value,
    };

    addCard(n, infoRecieved);
    clearInput();
    n += 1;
  });
}

run();
