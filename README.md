# Data Lovers

## Índice

* [1. Resumen general](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Recursos](#3-objetivos-de-aprendizaje)
* [4. Descripción del Proyecto](#4-consideraciones-generales)
* [5. Check list a considerar Project Feedback](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. El equipo de trabajo](#6-hacker-edition)

***

## 1. Resumen general
En el presente corresponde al segundo proyecto del DEV007 del BootCamp Laboratoria, dónde se requiere construir una _página web_ para visualizar un conjunto (set) de datos que se adecúe a lo que descubras que tu usuario necesita.

El entregable final es una página web que permite **visualizar la data,
filtrarla, ordenarla y hacer algún cálculo agregado**. Con cálculo agregado
nos referimos a distintos cálculos que puedes hacer con la data para mostrar
información aún más relevante para los usuarios (promedio, el valor máximo
o mínimo, etc).


## 2. Resumen del proyecto

Laboratoria ha propuesto una serie de datos de diferentes _temáticas_ para que
el equipo decidas con qué temática le interesa trabajar. 

Hemos seleccionado la siguiente temática:

* [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 251 Pokémon de la región de Kanto
  y Johto, junto con sus respectivas estadísticas usadas en el juego
  [Pokémon GO](http://pokemongolive.com).
  - [Investigación con jugadores de Pokémon Go](src/data/pokemon/README.md)

El objetivo principal de este proyecto es aprender a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita. Para lo cual se diseña una web que permita el filtrado de los Pokemon por tipos, resistencias y debilidades, tambien, que se pueda ordenar alfabeticamente de forma ascendente y descendente. Adicionalmente, se incluye el cálculo de porcentaje para cada filtro.
* Este proyecto se debe resolver en duplas.
* El rango de tiempo estimado para completar el proyecto es de 3 a 4 Sprints.

## 3. Recursos
* Software y aplicaciones web: Visual Studio Code (para generar el código), Figma (para realizar prototipo de alta fidelidad), GitHub(repositorio del proyecto), zoom (para comunicación con coachs y compañeras), Trello (para organizar las tareas de cada sprint del proyecto). Internet(para búsqueda de información y acceso a aplicaciones web)
* Hardware: PC del desarrollador.
* Tiempo: 40 horas cada intengrante del equipo aproximadamente incluyendo horas de OH e intercambio con compañeras. Estas horas incluye el tiempo de estudio e investigación.
* Humano: 2 desarollador. Colaboración adicional de acuerdo a las necesidades (coach, compañeras).

## 4. Descripción del Proyecto

El presente proyecto enmarca el desarrollo de una web que ofrece una galeria de pokemon de la región de Kanto
  y Johto, junto con sus respectivas estadísticas usadas en el juego, dónde el usuario podrá filtrar la data y organizarla visualizando cartas con la imagen de cada pokemon, su numero, nombre y tipo.

**Organizacion de las Tareas del Proyecto**

![](./Img/Trello.png)
https://trello.com/b/1hpIUFBp/dupla-9-dev007-data-lovers

**Historias de Usuario y Prototipos:**

Previo a la realización de las historias de usuario, se definió el perfil de usuario para la web:

![](./Img/PerfelDeUsuario.png)

*Prototipos de Baja Fidelidad:*
* Historia 1:
![](./Img/ProtBaja1.png)

* Historia 2: 
![](./Img/ProtBaja2.png)


**Previo a la realizacion del prototipo de alta fidelidad, se definió la Guía de Diseño:**

![](./Img/GuiaDeDiseño.png)

*Prototipos de Alta Fidelidad:*

https://www.figma.com/file/L5H2xxkQ8AJhgdHxxaMwAe/Data-Lovers---Pokemon?type=design&node-id=0-1&t=I0UPeNvysXjmgiJX-0

* Historia 1:

![](./Img/ProtAlta1.png)



* Historia 2:


![](./Img/ProtAlta2.png)

*Test de Usabilidad:*
Para el diseño del prototipo de alta fidelidad, he incluso para el diseño final de la página, entrevistamos a dos usuarios y fans de pokemon entre los 7 y 11 años, además, de un adulto que es conocedor y ha jugado judado PokemonGo. Entre sus impresiones con la idea inicial, ofrecieron recomendaciones de ser los filtros en la pagina y su nivel de prioridad de acuerdo a sus necesidades o deseos como usuario. Para lo cual se decidió incluir tres filtros y e ordenado básico. 
Durante el desarrollo de la pagina web comentaron que la foto de los pokemon ademas de llevar el nombre, incluyeramos en numero y el tipo de pokemon ya que les era util.
Todo esto fue considerado y junto al tiempo disponible para ja ejecucion del proyecto se prodedió a desarrollar el mismo.
Otro aspecto importante, es la imagen de fondo, inicialmente habiamos seleccionado una imagen de una pokebola cargada de colores, sin embargo, los niños nos mencionaron que para hacerla mas agradable colocaramos un fondo de ambiente similar a donde se encuentran los pokemon, ya que el fondo colocado sobrecargaba de colores la imagen de la web y no era amigable a la vista. Incluso, propusieron el fondo que actualmente tiene la web, el cual seleccionaron entre 3 alternativas dadas, alegando que dicha imagen tenia una apariencia retro que se adaptaba al diseño de las cartas de pokemon que se tenian.
![](./Img/FondosDePantalla.png)

**Desarrollo Web**

![](./Img/Web.png)

*Filtros:*
La web cuenta con tres tipos de filtrado:
* Filtrado por tipo: permite al usuario filtrar las cartas por el tipo de pokemon. Por ejemplo: agua, fuego, hielo, entre otros.
* Filtrado por Resistencia: permite al usuario filtrar las cartas por la resistencia de cada pokemon. Por ejemplo: veneno, fuego, electricidad, entre otros.
* Filtrado por Debilidad: permite al usuario filtrar las cartas por la debilidad de cada pokemon. Por ejemplo: roca, veneno, acero, entre otros.

![](./Img/Filtro.png)


*Ordenado:*
En esta seccion el usuario puede ordenar las cartas alfabeticamente de la "A" a la "Z" y de las "Z" a la "A".

![](./Img/Ordenar.png)

*Cálculos:*
La web cuenta con tres cálculos:
* Cálculo de porcentaje (%) para cada Filtrado: se realiza un cálculo que muestra el porcentaje (%) de cada filtro elegido con respecto a el total de pokemon de la data.

![](./Img/Porcentaje.png)

*Responsive*
La web es diseñada *Responsive* para que pueda ser visualizada en Ipad, celulares y desktop de acuerdo a los siguientes parametos:

Celulares:
@media (min-width: 320px) and (max-width: 767px)


![](./Img/CellularHorizontal.png)



![](./Img/CellularVertical.png)



Ipad:
@media (min-width: 768px) and (max-width: 1024px).



![](./Img/IPad.png)



*Test*:
se diseñaron tres pruebas unitarias:
1. Test para el filtro.
2. Test para el ordenado.
3. Test para el cálculo.
Las _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).

a continuación se muestra el resultado de los test:

![](./Img/Test.png)

*Descripción de Código:*

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data (según con qué data trabajes)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  ├── lol.json
|  |  |  └── README.md
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  ├── pokemon.json
|  |  |  └── README.md
|  |  └── rickandmorty
|  |  |  ├── rickandmorty.js
|  |  |  ├── rickandmorty.json
|  |  |  └── README.md
|  |  └── athletes
|  |  |  ├── athletes.js
|  |  |  ├── athletes.json
|  |  |  └── README.md
|  |  └── ghibli
|  |  |  ├── ghibli.js
|  |  |  ├── ghibli.json
|  |  |  └── README.md
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

directory: 7 file: 20
```

### `src/index.html`

En esta sección se define la página que se muestra al usuario. También indica
los scripts que se usan para unir todas las demas secciones.

### `src/main.js`

Contine todo el código relacionado con mostrar los datos en la pantalla, básicamente a la
interacción con el DOM. 

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.

Como recomendacion inicial se tiene que este archivo contiene toda la funcionalidad que corresponde
a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estos nombres de funciones y de parámetros son solamente referenciales, en la web desarrollada se usaron otros nombres.

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. 

### `test/data.spec.js`

En esta seccion se presentan las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

*GitHub:*
 El proyecto es entregado subiendo el código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).

## 5. Check list a considerar Project Feedback

* [x] Usa VanillaJS.
* [x] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [x] Incluye link a Zeplin en `README.md`.
* [x] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.


## 6. El equipo de trabajo
El presente proyecto fue desarrollado por:

* Analía Klein.
* Carmen Luna.

