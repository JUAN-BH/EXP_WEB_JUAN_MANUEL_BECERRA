//*Se linkea el js en el head cuando sea una libreria y en el body cuando sea solo metodos y haci sea el ultimo codigo que carge

console.log("hola mundo");
//Cuando se quiere usar una variable sin inicializar se debe de usar let, y no con const por que no deja
let role;
console.log(role);
role = "student";
console.log(role);
console.log("Hola soy el rol " + role + " de la uao");
console.log(`hola soy el rol ${role} de la uao`);

console.group("comparacion y operaciones con valores");
const v1 = prompt("ingresa el valor 1");
const v2 = prompt("ingres el segundo 2");
if (v1 > v2) {
  console.log("valor 1 es mayor que valor 2");
} else if (v1 == v2) {
  console.log("los valores son iguales");
} else if (v1 < v2) {
  console.log("valor 2 es mayor que valor 1");
} else {
  console.log("no se ingresaron valores");
}

function divicion(v1, v2) {
  return console.log(Math.round(v1 / v2));
}
console.groupEnd();
