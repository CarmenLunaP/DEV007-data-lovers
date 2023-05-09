// estas funciones son de ejemplo
//import data from './data/pokemon/pokemon.js'
//export const data = () => {
// return 'data';
//};

//import pokemon from "./data/pokemon/pokemon";


/*export const selecType = (data,condition) => {
  const showTypes = data.filter (data => data, condition.type);
  return showTypes;
}*/
//en donde data, será la data de pokemon y condition, el valor de la selección del usuario en nuestra lista despegable de tipos
export const selecType = (data, condition) => {
  const showTypes = data.filter((type) => item.type === condition);
  return showTypes;
};


//export const anotherExample = () => {
//return 'OMG';
//};

