//importando html desde su respectivo archivo
import {menuItem,formsItem} from './generate/htmlElements.js';
//importando metodo el cual detecta la posicion de objeto en pantalla
import {calculator} from './generate/scroll.js';
//rescatando divs de menu y form
const menu = document.getElementById('menu-item')
const form = document.getElementById('content-item'); 
//recibe una funcion que calcula si un div dentro form se encuentra o no en pantalla.
//esta funcion se utiliza para darle los estilos selected al menu cuando se usa scroll
form.addEventListener('scroll',calculator.bind(null,form));

//generar datos de la empresa
const generate_data = (menuItem,formsItem)=>{   
  menu.innerHTML=menuItem;
  form.innerHTML=formsItem;
  console.log('se agregaron los elementos')
}
//ejecutar funcion
generate_data(menuItem,formsItem);

//cargando respectivo js a los inputs
const textFields = document.querySelectorAll(".mdc-text-field");
for (let tf of textFields) {
  mdc.textField.MDCTextField.attachTo(tf);
}
//cargando js de MDCList
const list_item= document.querySelector('.mdc-deprecated-list');
const MDCList = mdc.list.MDCList;
new MDCList(list_item);

//dandole los estilos al li con la clase selected por defecto
const selected = document.querySelector('.selected');
selected.parentNode.style.background= 'rgba(0, 153, 204, 0.1)';




