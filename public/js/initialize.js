//importando metodo el cual detecta la posicion de objeto en pantalla
import { calculator } from "./generate/scroll.js";
import {
  validateDataCompany,
  validateDataAgent,
} from "./generate/validateData.js";
//rescatando divs de menu y form

const form = document.getElementById("content-item");

//recibe una funcion que calcula si un div dentro form se encuentra o no en pantalla.
//esta funcion se utiliza para darle los estilos selected al menu cuando se usa scroll
form.addEventListener("scroll", calculator.bind(null, form));

const dataCompanyButton = document.querySelector("#dataCompanyButton");
const agentCompanyButton = document.querySelector("#dataAgentButton");

dataCompanyButton.addEventListener("click", (e) => {
  validateDataCompany();
});

agentCompanyButton.addEventListener("click", (e) => {
  validateDataAgent();
});
//este evento permite que cada vez que se haga click en un input se valide si se ingreso bien la data
document.addEventListener("click", (e) => {
  if (e.target.matches("input")) {
    validateDataCompany();
    validateDataAgent();
  }
});

//cargando js de MDCList
const list_item = document.querySelector(".mdc-deprecated-list");
const MDCList = mdc.list.MDCList;
new MDCList(list_item);

//dandole los estilos al li con la clase selected por defecto
const selected = document.querySelector(".selected");
selected.parentNode.style.background = "rgba(0, 153, 204, 0.1)";

//cargando respectivo js a los inputs
const textFields = document.querySelectorAll(".mdc-text-field");
for (let tf of textFields) {
  mdc.textField.MDCTextField.attachTo(tf);
}
