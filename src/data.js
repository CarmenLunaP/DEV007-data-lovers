//import pokemon from "./data/pokemon/pokemon";

//filtro de tipos de Pokemon
export const selecType = (data, condition) => {
  const showTypes = data.filter(pokemon => {
    return pokemon.type[0].toLowerCase() === condition.toLowerCase(); //TolowerCase pasa toda la data a minuscula
  });
  return showTypes;
};

//filtrado por resistant (resistencia)
export const resistantSelect = (data, condition) => {
  const showTypes = data.filter(pokemon => {
    return pokemon.resistant[0].toLowerCase() === condition.toLowerCase(); //TolowerCase pasa toda la data a minuscula
  });
  return showTypes;
};

//filtrado por weaknesses (debilidad)
export const weaknessesSelect = (data, condition) => {
  const showTypes = data.filter(pokemon => {
    return pokemon.weaknesses[0].toLowerCase() === condition.toLowerCase(); //TolowerCase pasa toda la data a minuscula
  });
  return showTypes;
};

// Funcion para comparar y luego ordenar AZ y reversar Par ZA
const selectname1 = (data) => data.sort((a,z)=> { 
  if (a.name > z.name) {
    return 1;
  }
  if (a.name < z.name) {
    return -1;
  }
  return 0;
});
export const sortAZ = (data) => selectname1(data).slice(0,251);
export const sortZA = (data) => selectname1(data).slice(0,251).reverse();



