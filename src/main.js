import data from './data/pokemon/pokemon.js';
import {selecType} from './data.js';

function showOnCards(data) {
  document.getElementById("pokemon-cards").innerHTML = data.map((item) =>
    ` <div class="content-card">
         <div class="card">
            <div><img class="pokemon-img" src="${item.img}" alt="Imagen de pokemon"></div>
            <div class="pokemon-name">${item.name}</div>
            <div class="pokemon-num">${item.num}</div>
            <div class="pokemon-type">${item.type}</div>
          </div>
       </div>
  `
  )
    .join("");
}
showOnCards(data.pokemon);

/*const typeselect=document.getElementById("type");
typeselect.addEventListener("change",()=>{
  const selectvalue= typeselect.value;
  function selecType (selectvalue) {
  //selecType(data, selectvalue);
  //console.log(selectvalue);
  return selectvalue (selectvalue);
  }
})
selecType (selectvalue);*/
const typeselect = document.getElementById("type");
typeselect.addEventListener("change", () => {
  const selectvalue = typeselect.value;
  const dataFiltered = selecType(data, selectvalue);
  console.log(dataFiltered);
});
























//cree una constante con los pokemon de la data y con el for recorro los pokemones
//console.log(data)

/*const pokemon = data.pokemon;
const root = document.getElementById("root");

for (let i = 0; i < pokemon.length; i++) {
  //console.log("name: " + pokemon[i].name + "imagen: " + pokemon[i].img);
  const imagenPokemon = document.createElement ("img"); //muestro las imagenes
  imagenPokemon.src = pokemon[i].img;
  imagenPokemon.classList.add("galeria-img");
  root.appendChild(imagenPokemon);

  const nombrePokemon = document.createTextNode ("name"); //muestro los nombres
  nombrePokemon.nodeValue = pokemon[i].name;
  root.appendChild(nombrePokemon);

//const numPokemon = document.createTextNode ("num"); //muestro el numero
//numPokemon.nodeValue = pokemon[i].num;
//root.appendChild(numPokemon);
 
}*/

//console.log(data);

//const mostrarPokemon= document.getElementById(pokemon.map(function mostrar (data){
//return `${data.name}`;
//}))
//console.log(mostrarPokemon);
//let pokemon= "";
//function showCards(data) {
// document.getElementById('data').innerHTML = data.map((pokemon)` 
// <div class = "ficha">
//        <div class = "image">
//           <img id = "imagem-card" src="${pokemon.img}">       </img>
//            <div class="name">${pokemon.name}</div>
                 
//</div>
//   ` )
//    .join("")
//}
//showCards(pokemon.resultado)}