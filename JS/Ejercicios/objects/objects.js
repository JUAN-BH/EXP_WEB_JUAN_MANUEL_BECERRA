/*//*Primer forma
const carro1 = {};
//*2Da forma
const carro2 = new Object();
//*3CERa forma
const carro3 = object.create();*/
function carro(marca, modelo, color) {
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
}
const micarro = new carro("chevrolet", "evolution", "rojo");
micarro.marca;
micarro.modelo;
micarro.color;
console.log(
  "Mi carro es de marca: " +
    micarro.marca +
    " y modelo " +
    micarro.modelo +
    " y de color " +
    micarro.color
);
//*
const vehiculo = {
  tipo: ["carro", "moto", "avion"],
  marca: {
    nombre: "bmw",
  },
  motor: "nose de motores",
};
console.log(vehiculo.tipo[2]);
console.log(vehiculo.marca.nombre);
console.log(vehiculo.motor);
//*
const car = {
  brand: "susuki",
  model: "swift",
  start: function () {
    console.log(
      `The car of brand ${this.brand} and model ${this.model} has started`
    );
  },
};
car.start();
