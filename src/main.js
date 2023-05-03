//import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
//import data from './data/pokemon/pokemon.js'



//cree una constante con los pokemon de la data y con el for recorro los pokemones
console.log(data)
const pokemon = data.pokemon;
const root = document.getElementById("root");

for (let i = 0; i < pokemon.length; i++) {
  console.log("name: " + pokemon[i].name + "imagen: " + pokemon[i].img);
  const imagenPokemon = document.createElement ("img");
  imagenPokemon.src = pokemon[i].img;
  const nombrePokemon = document.createTextNode ("name");
  //nombrePokemon.name = pokemon[i].name;
  //root.appendChild(nombrePokemon);

  root.appendChild(imagenPokemon);
  }





















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