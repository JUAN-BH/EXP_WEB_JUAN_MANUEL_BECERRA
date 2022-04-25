const corillo = document.getElementById("corillo");

class Persona {
  nombre;
}

const cesar = new Persona();
cesar.nombre = "Cesar";
console.log(cesar.nombre);

class Persona1 {
  saludo() {
    console.log(`que lo que e corillo amigo ${cesar.nombre}`);
  }
}

const alberto = new Persona1();
alberto.saludo();

class Persona2 {
  constructor(nombre, edad, estatura) {
    this.nombre = nombre;
    this.edad = edad;
    this.estatura = estatura;
  }
  saludo() {
    return `Que lo que e corillo amigo ${this.nombre}, tengo ${this.edad} anos y mido ${this.estatura}`;
  }
}

const JH = new Persona2("Nico", "23", "1.75");
corillo.innerText = JH.saludo();

class Dueno {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

class Mascota extends Dueno {}
