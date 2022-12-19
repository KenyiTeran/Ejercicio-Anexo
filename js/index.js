

let pokemons = [
  {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
  {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
  {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
  {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
  {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
  {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
  {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
  {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
  {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
  {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]

/* Ordernar los pokemons por base_damage de menor a mayor. */

/* pokemons.sort((pokemon1, pokemon2) => {
  return pokemon1.base_damage - pokemon2.base_damage;
});

console.log(pokemons); */

//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.

/* function sortPokemons(pokemons, sortKey) {
  pokemons.sort((pokemon1, pokemon2) => {
    return pokemon1[sortKey] - pokemon2[sortKey];
  });
}

sortPokemons(pokemons, "base_hp");
console.log(pokemons); */


//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.

/* function filterPokemons(pokemons, filterType) {
  return pokemons.filter(pokemon => pokemon.type === filterType);
}

let filteredPokemons = filterPokemons(pokemons, "leaf");
console.log(filteredPokemons); */


//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.

/* let pokemonMaster = {
  id: 1,
  name: "Ash Ketchum",
  created_date: "2022-12-19",
  pokemon: [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
  ]
}

console.log(pokemonMaster); */


//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.

/* function addRandomPokemon(pokemonMaster, pokemons) {
  let randomIndex = Math.floor(Math.random() * pokemons.length);
  let randomPokemon = pokemons[randomIndex];
  pokemonMaster.pokemon.push(randomPokemon);
}

let pokemonMaster = {
  id: 1,
  name: "Kenyi Wilson",
  pokemon: [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
  ]
}

addRandomPokemon(pokemonMaster, pokemons);
console.log(pokemonMaster); */


//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente: min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5

function addRandomDamage(pokemons) {
  for (let i = 0; i < pokemons.length; i++) {
    let minDamage = Math.floor(Math.random() * 2) + 1;
    let maxDamage = Math.floor(Math.random() * 3) + 3;

    pokemons[i].min_damage = minDamage;
    pokemons[i].max_damage = maxDamage;
  }
  console.log(pokemons);
}

addRandomDamage(pokemons);

//7. Crea una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage.



//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. Colocar tres pokemons con la funcion del ejercicio 5.
// El quiere que sus pokemons se ordenen de manera que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.

//9. Crear una lista desordenada de Pokemons en nuestro documento HTML

//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed


//11. Utilizando javascript modifica el codigo creado en el ejecicio anterior y agrega un evento que permita ordenar los pokemons haciendo click en sus encabezados.

//12. Corrige la function sortPokemons para que acepte ordenarlos segun id y name.
