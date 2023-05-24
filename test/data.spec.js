/*import { example, anotherExample } from '../src/data.js';*/
//import data from '../src/data/pokemon/pokemon.js';
import {selecType, calculoType, sortAZ} from '../src/data.js';
import pokemon from '../src/data/pokemon/pokemon.js';


//Test Filtro por especie:
describe('selecType', () => {
  const pokemonDark = selecType(pokemon.pokemon,"dark");

  it('is a function para filtrar', () => {
    expect(typeof selecType).toBe('function');
  });

  it('returns selecType Dark', () => {
    expect(selecType(pokemon.pokemon,"dark")).toStrictEqual(filterbyDark);
  });

  it('returns count selecType Dark ', () => {
    expect(selecType(pokemon.pokemon,"dark")).toHaveLength(5);
  });

  it('returns countDataFiltered Dark', () => {
    expect(calculoType(pokemonDark.length)).toBe(2.00);
  });
});

//Los datos para el test filtra Dark y % Dark
const filterbyDark= [
  {
    "num": "197",
    "name": "umbreon",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    },
    "about": "Umbreon evolved as a result of exposure to the moon's waves. It hides silently in darkness and waits for its foes to make a move. The rings on its body glow when it leaps to attack.",
    "img": "https://www.serebii.net/pokemongo/pokemon/197.png",
    "size": {
      "height": "0.99 m",
      "weight": "27.0 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "dark"
    ],
    "encounter": {
      "base-flee-rate": "0.05",
      "base-capture-rate": "0.125"
    },
    "spawn-chance": null,
    "stats": {
      "base-attack": "126",
      "base-defense": "240",
      "base-stamina": "216",
      "max-cp": "2137",
      "max-hp": "182"
    },
    "resistant": [
      "psychic",
      "ghost",
      "dark"
    ],
    "weaknesses": [
      "fighting",
      "bug",
      "fairy"
    ],
    "quick-move": [
      {
        "name": "feint attack",
        "type": "dark",
        "base-damage": "10",
        "energy": "9",
        "move-duration-seg": "0.9"
      },
      {
        "name": "snarl",
        "type": "dark",
        "base-damage": "12",
        "energy": "12",
        "move-duration-seg": "1.1"
      }
    ],
    "special-attack": [
      {
        "name": "dark pulse",
        "type": "dark",
        "base-damage": "80",
        "energy": "-50",
        "move-duration-seg": "3"
      },
      {
        "name": "foul play",
        "type": "dark",
        "base-damage": "70",
        "energy": "-50",
        "move-duration-seg": "2"
      }
    ],
    "egg": "not in eggs",
    "buddy-distance-km": "5",
    "evolution": {
      "candy": "eevee candy",
      "prev-evolution": [{
        "num": "133",
        "name": "eevee",
        "candy-cost": "25"
      }]
    }
  },
  {
    "num": "198",
    "name": "murkrow",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    },
    "about": "Murkrow was feared and loathed as the alleged bearer of ill fortune. This Pokémon shows strong interest in anything that sparkles or glitters. It will even try to steal rings from women.",
    "img": "https://www.serebii.net/pokemongo/pokemon/198.png",
    "size": {
      "height": "0.51 m",
      "weight": "2.1 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "dark",
      "flying"
    ],
    "encounter": {
      "base-flee-rate": "0.1",
      "base-capture-rate": "0.2"
    },
    "spawn-chance": null,
    "stats": {
      "base-attack": "175",
      "base-defense": "87",
      "base-stamina": "155",
      "max-cp": "1562",
      "max-hp": "134"
    },
    "resistant": [
      "grass",
      "ground",
      "psychic",
      "ghost",
      "dark"
    ],
    "weaknesses": [
      "electric",
      "ice",
      "rock",
      "fairy"
    ],
    "quick-move": [
      {
        "name": "peck",
        "type": "flying",
        "base-damage": "10",
        "energy": "10",
        "move-duration-seg": "1"
      },
      {
        "name": "feint attack",
        "type": "dark",
        "base-damage": "10",
        "energy": "9",
        "move-duration-seg": "0.9"
      }
    ],
    "special-attack": [
      {
        "name": "drill peck",
        "type": "flying",
        "base-damage": "60",
        "energy": "-33",
        "move-duration-seg": "2.3"
      },
      {
        "name": "foul play",
        "type": "dark",
        "base-damage": "70",
        "energy": "-50",
        "move-duration-seg": "2"
      },
      {
        "name": "dark pulse",
        "type": "dark",
        "base-damage": "80",
        "energy": "-50",
        "move-duration-seg": "3"
      }
    ],
    "egg": "not in eggs",
    "buddy-distance-km": "3",
    "evolution": {
      "candy": "murkrow candy",
      "next-evolution": [{
        "num": "430",
        "name": "honchkrow",
        "candy-cost": "100",
        "evolution-item": {
          "name": "sinnoh stone",
          "img": "https://pokemon.gameinfo.io/images/item/thumbs/200/sinnoh-stone.png"
        }
      }]
    }
  },
  {
    "num": "215",
    "name": "sneasel",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    },
    "about": "Sneasel scales trees by punching its hooked claws into the bark. This Pokémon seeks out unguarded nests and steals eggs for food while the parents are away.",
    "img": "https://www.serebii.net/pokemongo/pokemon/215.png",
    "size": {
      "height": "0.89 m",
      "weight": "28.0 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "dark",
      "ice"
    ],
    "encounter": {
      "base-flee-rate": "0.07",
      "base-capture-rate": "0.2"
    },
    "spawn-chance": null,
    "stats": {
      "base-attack": "189",
      "base-defense": "146",
      "base-stamina": "146",
      "max-cp": "2051",
      "max-hp": "127"
    },
    "resistant": [
      "ice",
      "psychic",
      "ghost",
      "dark"
    ],
    "weaknesses": [
      "fire",
      "fighting",
      "bug",
      "rock"
    ],
    "quick-move": [
      {
        "name": "ice shard",
        "type": "ice",
        "base-damage": "12",
        "energy": "12",
        "move-duration-seg": "1.2"
      },
      {
        "name": "feint attack",
        "type": "dark",
        "base-damage": "10",
        "energy": "9",
        "move-duration-seg": "0.9"
      }
    ],
    "special-attack": [
      {
        "name": "avalanche",
        "type": "ice",
        "base-damage": "90",
        "energy": "-50",
        "move-duration-seg": "2.7"
      },
      {
        "name": "ice punch",
        "type": "ice",
        "base-damage": "50",
        "energy": "-33",
        "move-duration-seg": "1.9"
      },
      {
        "name": "foul play",
        "type": "dark",
        "base-damage": "70",
        "energy": "-50",
        "move-duration-seg": "2"
      }
    ],
    "egg": "5 km",
    "buddy-distance-km": "3",
    "evolution": {
      "candy": "sneasel candy",
      "next-evolution": [{
        "num": "461",
        "name": "weavile",
        "candy-cost": "100",
        "evolution-item": {
          "name": "sinnoh stone",
          "img": "https://pokemon.gameinfo.io/images/item/thumbs/200/sinnoh-stone.png"
        }
      }]
    }
  },

  {
    "num": "228",
    "name": "houndour",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    },
    "about": "Houndour hunt as a coordinated pack. They communicate with each other using a variety of cries to corner their prey. This Pokémon's remarkable teamwork is unparalleled.",
    "img": "https://www.serebii.net/pokemongo/pokemon/228.png",
    "size": {
      "height": "0.61 m",
      "weight": "10.8 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "dark",
      "fire"
    ],
    "encounter": {
      "base-flee-rate": "0.1",
      "base-capture-rate": "0.4"
    },
    "spawn-chance": null,
    "stats": {
      "base-attack": "152",
      "base-defense": "83",
      "base-stamina": "128",
      "max-cp": "1234",
      "max-hp": "113"
    },
    "resistant": [
      "fire",
      "grass",
      "ice",
      "psychic",
      "ghost"
    ],
    "weaknesses": [
      "water",
      "fighting",
      "ground",
      "rock"
    ],
    "quick-move": [
      {
        "name": "feint attack",
        "type": "dark",
        "base-damage": "10",
        "energy": "9",
        "move-duration-seg": "0.9"
      },
      {
        "name": "ember",
        "type": "fire",
        "base-damage": "10",
        "energy": "10",
        "move-duration-seg": "1"
      }
    ],
    "special-attack": [
      {
        "name": "crunch",
        "type": "dark",
        "base-damage": "70",
        "energy": "-33",
        "move-duration-seg": "3.2"
      },
      {
        "name": "flamethrower",
        "type": "fire",
        "base-damage": "70",
        "energy": "-50",
        "move-duration-seg": "2.2"
      },
      {
        "name": "dark pulse",
        "type": "dark",
        "base-damage": "80",
        "energy": "-50",
        "move-duration-seg": "3"
      }
    ],
    "egg": "5 km",
    "buddy-distance-km": "3",
    "evolution": {
      "candy": "houndour candy",
      "next-evolution": [{
        "num": "229",
        "name": "houndoom",
        "candy-cost": "50"
      }]
    }
  },
  {
    "num": "229",
    "name": "houndoom",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    },
    "about": "In a Houndoom pack, the one with its horns raked sharply toward the back serves a leadership role. These Pokémon choose their leader by fighting among themselves.",
    "img": "https://www.serebii.net/pokemongo/pokemon/229.png",
    "size": {
      "height": "1.40 m",
      "weight": "35.0 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "dark",
      "fire"
    ],
    "encounter": {
      "base-flee-rate": "0.06",
      "base-capture-rate": "0.15"
    },
    "spawn-chance": null,
    "stats": {
      "base-attack": "224",
      "base-defense": "144",
      "base-stamina": "181",
      "max-cp": "2635",
      "max-hp": "154"
    },
    "resistant": [
      "fire",
      "grass",
      "ice",
      "psychic",
      "ghost"
    ],
    "weaknesses": [
      "water",
      "fighting",
      "ground",
      "rock"
    ],
    "quick-move": [
      {
        "name": "snarl",
        "type": "dark",
        "base-damage": "12",
        "energy": "12",
        "move-duration-seg": "1.1"
      },
      {
        "name": "fire fang",
        "type": "fire",
        "base-damage": "11",
        "energy": "8",
        "move-duration-seg": "0.9"
      }
    ],
    "special-attack": [
      {
        "name": "crunch",
        "type": "dark",
        "base-damage": "70",
        "energy": "-33",
        "move-duration-seg": "3.2"
      },
      {
        "name": "fire blast",
        "type": "fire",
        "base-damage": "140",
        "energy": "-100",
        "move-duration-seg": "4.2"
      },
      {
        "name": "foul play",
        "type": "dark",
        "base-damage": "70",
        "energy": "-50",
        "move-duration-seg": "2"
      }
    ],
    "egg": "not in eggs",
    "buddy-distance-km": "3",
    "evolution": {
      "candy": "houndour candy",
      "prev-evolution": [{
        "num": "228",
        "name": "houndour",
        "candy-cost": "50"
      }]
    }
  },
]


//Test de ordenar A-Z
describe('sortAZ', () => {
  it('is a function para ordenarAZ', () => {
    expect(typeof sortAZ).toBe('function');
  });

  it('returns sortAZ el pokemon 1 es Abra', () => {
    expect(sortAZ(pokemon.pokemon.slice(),"name", "ascendente")[0]).toEqual(
      {
        "num": "063",
        "name": "abra",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "about": "Abra sleeps for eighteen hours a day. However, it can sense the presence of foes even while it is sleeping. In such a situation, this Pokémon immediately teleports to safety.",
        "img": "https://www.serebii.net/pokemongo/pokemon/063.png",
        "size": {
          "height": "0.89 m",
          "weight": "19.5 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "psychic"
        ],
        "encounter": {
          "base-flee-rate": "0.99",
          "base-capture-rate": "0.5"
        },
        "spawn-chance": "0.42",
        "stats": {
          "base-attack": "195",
          "base-defense": "82",
          "base-stamina": "93",
          "max-cp": "1342",
          "max-hp": "85"
        },
        "resistant": [
          "fighting",
          "psychic"
        ],
        "weaknesses": [
          "bug",
          "ghost",
          "dark"
        ],
        "quick-move": [
          {
            "name": "zen headbutt",
            "type": "psychic",
            "base-damage": "12",
            "energy": "10",
            "move-duration-seg": "1.1"
          },
          {
            "name": "charge beam",
            "type": "electric",
            "base-damage": "8",
            "energy": "15",
            "move-duration-seg": "1.1"
          }
        ],
        "special-attack": [
          {
            "name": "psyshock",
            "type": "psychic",
            "base-damage": "65",
            "energy": "-33",
            "move-duration-seg": "2.7"
          },
          {
            "name": "signal beam",
            "type": "bug",
            "base-damage": "75",
            "energy": "-50",
            "move-duration-seg": "2.9"
          },
          {
            "name": "shadow ball",
            "type": "ghost",
            "base-damage": "100",
            "energy": "-50",
            "move-duration-seg": "3"
          }
        ],
        "egg": "5 km",
        "buddy-distance-km": "3",
        "evolution": {
          "candy": "abra candy",
          "next-evolution": [{
            "num": "064",
            "name": "kadabra",
            "candy-cost": "25",
            "next-evolution": [{
              "num": "065",
              "name": "alakazam",
              "candy-cost": "100"
            }]
          }]
        }
      },
    );
  });
  it('returns sortAZ el pokemon 10 es Bayleef', () => {
    expect(sortAZ(pokemon.pokemon.slice(),"name", "ascendente")[10]).toEqual(
      {
        "num": "153",
        "name": "bayleef",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "about": "Bayleef's neck is ringed by curled-up leaves. Inside each tubular leaf is a small shoot of a tree. The fragrance of this shoot makes people peppy.",
        "img": "https://www.serebii.net/pokemongo/pokemon/153.png",
        "size": {
          "height": "1.19 m",
          "weight": "15.8 kg"
        },
        "pokemon-rarity": "normal",
        "type": [
          "grass"
        ],
        "encounter": {
          "base-flee-rate": "0.07",
          "base-capture-rate": "0.125"
        },
        "spawn-chance": null,
        "stats": {
          "base-attack": "122",
          "base-defense": "155",
          "base-stamina": "155",
          "max-cp": "1454",
          "max-hp": "134"
        },
        "resistant": [
          "water",
          "electric",
          "grass",
          "ground"
        ],
        "weaknesses": [
          "fire",
          "ice",
          "poison",
          "flying"
        ],
        "quick-move": [
          {
            "name": "razor leaf",
            "type": "grass",
            "base-damage": "13",
            "energy": "7",
            "move-duration-seg": "1"
          },
          {
            "name": "tackle",
            "type": "normal",
            "base-damage": "5",
            "energy": "5",
            "move-duration-seg": "0.5"
          }
        ],
        "special-attack": [
          {
            "name": "energy ball",
            "type": "grass",
            "base-damage": "90",
            "energy": "-50",
            "move-duration-seg": "3.9"
          },
          {
            "name": "grass knot",
            "type": "grass",
            "base-damage": "90",
            "energy": "-50",
            "move-duration-seg": "2.6"
          },
          {
            "name": "ancient power",
            "type": "rock",
            "base-damage": "70",
            "energy": "-33",
            "move-duration-seg": "3.5"
          }
        ],
        "egg": "not in eggs",
        "buddy-distance-km": "3",
        "evolution": {
          "candy": "chikorita candy",
          "next-evolution": [{
            "num": "154",
            "name": "meganium",
            "candy-cost": "100"
          }],
          "prev-evolution": [{
            "num": "152",
            "name": "chikorita",
            "candy-cost": "25"
          }]
        }
      },
    );
  });
});


