'use strict';

//Día 1:

//Quitar la classe .collapsed al menú de hamburguesa.
//const menuDropdown = document.querySelector('.menudropdown');
//menuDropdown.classList.remove('collapsed');

//Quitar la classe .hidden al formulario.
//const addItemForm = document.querySelector('.data-actions__add');
//menuDropdown.classList.remove('collapsed');

//Agregar los enlaces desde JS
//const link = document.querySelector('.js-details');

// const itemList1 = `<li class="data__listitem "><article class="data__item"> <p class="item__url"> <a href="https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion" target="_blank" rel="noopener noreferrer">
//     books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion
//     </a>
// </p>
// <p class="item__seen">
//   <input type="checkbox" checked name="item_imp_2"
//     id="item_imp_2">
// </p>
// <p class="item__desc">JS en los materiales de Adalab</p>
// <ul class="item__tags">
//   <li class="item__tag">javascript</li>
//   <li class="item__tag">HTML</li>
// </ul>
// </article>
// </li>
// </li>`;
// const itemList2 = `<li class="data__listitem"> <article class="data__item">
//   <p class="item__url">
//     <a href="https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/"
//       target="_blank">thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/</a></a>
//   </p>
//   <p class="item__seen">
//     <input type="checkbox" checked name="item_imp_1"
//       id="item_imp_1">
//   </p>
//   <p class="item__desc">Ideas de proyectos JS</p>
//   <ul class="item__tags">
//     <li class="item__tag">javascript</li>
//     <li class="item__tag">portfolio</li>
//   </ul>
// </article>
// </li>`;
// const itemList3 = `<li class="data__listitem">
// <article class="data__item">
//   <p class="item__url">
//     <a href="https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web"
//       target="_blank"
//       rel="noopener noreferrer">books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web</a>
//   </p>
//   <p class="item__seen">
//     <input type="checkbox" name="item_imp_2" id="item_imp_2">
//   </p>
//   <p class="item__desc">HTML en los materiales de Adalab</p>
//   <ul class="item__tags">
//     <li class="item__tag">HTML</li>
//     <li class="item__tag">CSS</li>
//   </ul>
// </article>
// </li>`;

// link.innerHTML = itemList1 + itemList2 + itemList3;

//Día 2:

//Vamos a usar variables que luego interpolaremos en el string con el HTML de cada bookmark.
//Usar .toLowerCase() para pasar a minúsculas el nombre de las etiquetas.
//Usar .replace() para quitar el 'https://' del principio de la dirección.

const link = document.querySelector('.js-details');

const bmk_1_url_ =
  'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion';
const bmk_1_desc = 'JS en los materiales de Adalab';
const bmk_1_seen = false;
const bmk_1_tags_1 = 'javascript'.toLowerCase();
const bmk_1_tags_2 = 'html'.toLowerCase();
//const bmk_1_tags_1 = '';
//const bmk_1_tags_2 = '';

const itemList1 = `<li class="data__listitem"><article class="data__item article-1"> <p class="item__url"> <a href="${bmk_1_url_}" target="_blank" rel="noopener noreferrer">${bmk_1_url_.replace(
  'https://',
  ''
)}</a>
</p>
<p class="item__seen">
  
</p>
<p class="item__desc">${bmk_1_desc}</p>
</article>
</li>`;

const bmk_2_url_ =
  'https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/';
const bmk_2_desc = 'Ideas de proyectos JS';
const bmk_2_seen = 'checked';
const bmk_2_tags_1 = 'javascript'.toLowerCase();
const bmk_2_tags_2 = 'portfolio'.toLowerCase();

const itemList2 = `<li class="data__listitem"> <article class="data__item article-2">
  <p class="item__url">
    <a href="${bmk_2_url_}"
      target="_blank">${bmk_2_url_.replace('https://', '')}</a>
  </p>
  <p class="item__seen">
    <input type="checkbox" ${bmk_2_seen} name="item_imp_1"
      id="item_imp_1">
  </p>
  <p class="item__desc">${bmk_2_desc}</p>
</article>
</li>`;

const bmk_3_url_ =
  'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web';
const bmk_3_desc = 'HTML en los materiales de Adalab';
const bmk_3_seen = '';
const bmk_3_tags_1 = 'HTML'.toLowerCase();
const bmk_3_tags_2 = 'CSS'.toLowerCase();

const itemList3 = `<li class="data__listitem">
<article class="data__item article-3">
  <p class="item__url">
    <a href="${bmk_3_url_}"
      target="_blank"
      rel="noopener noreferrer">${bmk_3_url_.replace('https://', '')}</a>
  </p>
  <p class="item__seen">
    <input type="checkbox" ${bmk_3_seen} name="item_imp_2" id="item_imp_2">
  </p>
  <p class="item__desc">${bmk_3_desc}</p>
  
</article>
</li>`;

//link.innerHTML = itemList1 + itemList2 + itemList3;

//Día 3:

//Buscar la clase .data y si tiene ademas la case .tableview la cambiamos por .listview (y viceversa). Utiliza condicionales y el classList.contains.

//Mostrar el menú hamburguesa y dejarlo siempre visible.
//-->Seleccionamos el input con el document.querySelector.
//-->Simulamos que escribe la usuaria en el input de búsqueda.
//-->Recoger el valor del input en una variable.
//-->Utilizar un condicional con la función includes antes de añadir cada enlace para solo mostrar aquellos enlaces que contengan la palabra introducida por la usuaria.

//Validar la columna de las categorías de los enlaces: Si el enlace no tiene categoría mostraremos el mensaje No tiene categorías.

//Cambia el valor de la variable bmk_1_seen a true o false. En dependencia de este valor muestra seleccionado o no el input de tipo checkbox.

//Parte 1 (Día 3)
const dataSection = document.querySelector('.data');

if (dataSection.classList.contains('tableview')) {
  dataSection.classList.remove('tableview');
  dataSection.classList.add('listview');
} else if (dataSection.classList.contains('listview')) {
  dataSection.classList.remove('listview');
  dataSection.classList.add('tableview');
}

//Parte 2.a (Día 3)
const menuDropdown = document.querySelector('.menudropdown');
menuDropdown.classList.remove('collapsed');

// Parte 2.b (Día 3)
const input_search_desc = document.querySelector('.js_in_search_desc');

// Parte 2.c (Día 3)
input_search_desc.value = 'de';

//Parte 2.d (Día 3)
const descrSearchText = input_search_desc.value;

//Parte 2.e (Día 3)
if (bmk_1_desc.includes(descrSearchText)) {
  link.innerHTML += itemList1;
}
if (bmk_2_desc.includes(descrSearchText)) {
  link.innerHTML += itemList2;
}
if (bmk_3_desc.includes(descrSearchText)) {
  link.innerHTML += itemList3;
}

//Parte 3 (BONUS) (Día 3)

const dataItem1 = document.querySelector('.data__item.article-1');
if (bmk_1_tags_1 === '' && bmk_1_tags_2 === '') {
  dataItem1.innerHTML += `<p class='item__tags'>No tiene categorias</p>`;
} else {
  dataItem1.innerHTML += `<ul class="item__tags">
  <li class="item__tag">${bmk_1_tags_1}</li>
  <li class="item__tag">${bmk_1_tags_2}</li>
</ul>`;
}

const dataItem2 = document.querySelector('.data__item.article-2');
if (bmk_2_tags_1 === '' && bmk_2_tags_2 === '') {
  dataItem2.innerHTML += `<p class='item__tags'>No tiene categorias</p>`;
} else {
  dataItem2.innerHTML += `<ul class="item__tags">
  <li class="item__tag">${bmk_2_tags_1}</li>
  <li class="item__tag">${bmk_2_tags_2}</li>
</ul>`;
}

const dataItem3 = document.querySelector('.data__item.article-3');
if (bmk_3_tags_1 === '' && bmk_3_tags_2 === '') {
  dataItem3.innerHTML += `<p class='item__tags'>No tiene categorias</p>`;
} else {
  dataItem3.innerHTML += `<ul class="item__tags">
  <li class="item__tag">${bmk_3_tags_1}</li>
  <li class="item__tag">${bmk_3_tags_2}</li>
</ul>`;
}

//4 (BONUS) (Día 3)
const bmk_1_seen_p = document.querySelector('.item__seen');

if (bmk_1_seen) {
  bmk_1_seen_p.innerHTML += `
  <input type="checkbox" checked name="item_imp_2" id="item_imp_2">`;
} else {
  bmk_1_seen_p.innerHTML += `
  <input type="checkbox" name="item_imp_2" id="item_imp_2">`;
}
