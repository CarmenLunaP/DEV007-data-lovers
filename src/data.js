//import pokemon from "./data/pokemon/pokemon";

//filtro de tipos de Pokemon
export const selecType = (data, condition) => {
  const showTypes = data.filter(pokemon => {
    return pokemon.type[0].toLowerCase() === condition.toLowerCase(); //TolowerCase pasa toda la data a minuscula
  });
  return showTypes;
};

//Ordenado de la A-Z

/*export const selectname1 = (data, condition) => {
  const showOrder = data.sort(pokemon => {
    return pokemon.name[0].toLowerCase() === condition.toLowerCase();
  });
  return showOrder;
};
*/
/*export const selectname1 => data.sort(function(a, z) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameZ = z.name.toUpperCase(); // ignore upper and lowercase
  if (nameA > nameZ) {
    return -1;
  }
  if (nameA < nameZ) {
    return 1;
  }
  // names must be equal
  return 0;
 // return selectname1;
});*/

export const selectname1 = (data) => data.sort((a,z)=> { 
  if (a.name > z.name) {
    return -1;
  }
  if (a.name < z.name) {
    return 1;
  }
  return 0;
});
export const sortAZ = (data) => selectname1(data).slice(0,251);
export const sortZA = (data) => sortAZ(data).reverse();



