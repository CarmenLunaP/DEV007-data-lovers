
//filtro de tipos de Pokemon
export const selecType = (data, condition) => {
  const showTypes = data.filter(pokemon => {
    return pokemon.type[0].toLowerCase() === condition.toLowerCase(); //TolowerCase pasa toda la data a minuscula
  });
  return showTypes ;
};







