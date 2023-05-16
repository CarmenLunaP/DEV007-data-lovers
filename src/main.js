import data from './data/pokemon/pokemon.js';
import {selecType, resistantSelect, weaknessesSelect, sortAZ, sortZA} from './data.js';

//Mostramos las tarjetas de pokemon en pantalla
function showOnCards(data) {
  document.getElementById("pokemon-cards").innerHTML = data.map((item) =>
    ` <div class="content-card">
         <div class="card">
            <div><img class="pokemon-img" src="${item.img}" alt="Imagen de pokemon"></div>
            <div class="pokemon-name">${item.name}</div>
            <div class="pokemon-num"> # ${item.num}</div>
            <div class="pokemon-type">${item.type}</div>
          </div>
       </div>
  `
  )
    .join("");
}
showOnCards(data.pokemon);

//filtrado por typo de pokemon
const typeselect = document.getElementById("type");
typeselect.addEventListener("change", () => {
  const selectvalue = typeselect.value;
  const dataFiltered = selecType(data.pokemon, selectvalue);
  //console.log(dataFiltered);
  showOnCards(dataFiltered);
});

//filtrado por resistant (resistencia)
const selectResistant = document.getElementById("resistant");
selectResistant.addEventListener("change", () => {
  const resistantvalue = selectResistant.value;
  const dataFiltered2 = resistantSelect(data.pokemon, resistantvalue);
  //console.log(dataFiltered2);
  showOnCards(dataFiltered2);
});

//filtrado por  weaknesses (debilidad)
const selectweaknesses = document.getElementById("weaknesses");
selectweaknesses.addEventListener("change", () => {
  const selectweaknessesvalue = selectweaknesses.value;
  const dataFiltered3 = weaknessesSelect(data.pokemon, selectweaknessesvalue);
  //console.log(dataFiltered3);
  showOnCards(dataFiltered3);
});

//Ordenar de la A-Z y de la Z-A
const orderselectaz = document.getElementById("name");
orderselectaz.addEventListener("change", (e) => 
{
  //console.log(e.target.value)
  if (e.target.value==="A-Z") {
    
    const dataOrderedaz = sortAZ(data.pokemon);
    console.log(dataOrderedaz);
    showOnCards(dataOrderedaz);
  }
  else {
    
    const dataOrderedza = sortZA(data.pokemon);
    //console.log(dataOrderedza);
    showOnCards(dataOrderedza);
  }
});



