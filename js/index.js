import { PRODUCTS } from "./class.js";
import { PRODUCTSDATA } from "./data.js";
import { PRODACTSJSON } from "./const.js";

const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".products__add-products");
const modalClose = document.querySelector(".box");
const form = document.querySelector(".form");
const productsCards = document.querySelector(".products__cards");
const modalBtnClose = document.querySelector(".modal__btn-close");

const inputName = document.querySelector("#name");
const inputQuantity = document.querySelector("#quantity");
const inputImg = document.querySelector("#img");
const inputPrice = document.querySelector("#price");
const inputUnit = document.querySelector("#unit");
const inputColor = document.querySelector("#color");

function cratProducts(data) {
  let card = "";

  data.forEach((element) => {
    card += `
      <div class="products__card">
        <div class="products__img-part">
          <img src="${element.img}" alt="${element.name}">
        </div>

        <div class="products__info-part">
          <h3 class="products__info-title">Name: ${element.name}</h3>
          <p class="products__info-text">Quantity: ${element.quantity}  ${element.unit}</p>
          <p class="products__info-text">Price: ${element.price} so'm</p>
          <p class="products__info-text">Color: ${element.color}</p>
        </div>
        <div class="products__btn-wrapper">
          <button name="delete" data-id="${element.id}" class="products__delet__btn">Delete</button>
        </div>
      </div>
    `;
    productsCards.innerHTML = card;
  });
}
cratProducts(PRODUCTSDATA);

closeBtn.addEventListener("click", () => {
  modal.style.display = "block";
  modalClose.style.display = "block";
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
  modalClose.style.display = "none";
});

modalBtnClose.addEventListener("click", () => {
  modal.style.display = "none";
  modalClose.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let newProdacts = new PRODUCTS(
    inputName.value,
    inputQuantity.value,
    inputImg.value,
    inputUnit.value,
    inputColor.value,
    inputPrice.value
  );
  PRODUCTSDATA.push(newProdacts);
  console.log(PRODUCTSDATA);
  localStorage.setItem(PRODACTSJSON, JSON.stringify(PRODUCTSDATA));
  cratProducts(PRODUCTSDATA);

  inputName.value = "";
  inputQuantity.value = "";
  inputImg.value = "";
  inputUnit.value = "";
  inputColor.value = "";
  inputPrice.value = "";

  modal.style.display = "none";
});

const deletProdact = (id) => {
  if (!confirm("Deletga rozimisis")) return
  let index = PRODUCTSDATA.findIndex((u) => u.id === id);
  PRODUCTSDATA.splice(index, 1);
  localStorage.setItem(PRODACTSJSON,JSON.stringify(PRODUCTSDATA))
  cratProducts(PRODUCTSDATA);
};

productsCards.addEventListener("click", (e) => {
  deletProdact(e.target.dataset.id);
});

