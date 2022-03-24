const boton = document.getElementsByClassName("boton");
var rgb = [];

for (let index = 0; index < boton.length; index++) {
  const element = boton[index];
  element.addEventListener("click", cambiarFondo);
}

function cambiarFondo() {
  for (var i = 0; i < 2; i++) {
    rgb.push("#" + Math.floor(Math.random() * 19777215).toString(16));
  }

  const contenedor = this.parentNode;
  const color = rgb.shift();
  contenedor.style.backgroundColor = color;
  const texto = this.parentNode.childNodes[1];
  texto.innerHTML = color;
}

// function color() {
//   for (var i = 0; i < 2; i++) {
//     rgb.push("#" + Math.floor(Math.random() * 19777215).toString(16));
//   }
//   const color = rgb.shift();
//   return color;
// }

window.onload = function () {
  for (var i = 0; i < 4; i++) {
    rgb.push("#" + Math.floor(Math.random() * 19777215).toString(16));
  }
  let color1 = rgb.shift();
  let color2 = rgb.shift();
  let color3 = rgb.shift();
  let color4 = rgb.shift();

  const section1 = (document.getElementById("section1").style.backgroundColor =
    color1);
  const text1 = (document.getElementById("text1").innerHTML = color1);

  const section2 = (document.getElementById("section2").style.backgroundColor =
    color2);
  const text2 = (document.getElementById("text2").innerHTML = color2);

  const section3 = (document.getElementById("section3").style.backgroundColor =
    color3);
  const text3 = (document.getElementById("text3").innerHTML = color3);

  const section4 = (document.getElementById("section4").style.backgroundColor =
    color4);
  const text4 = (document.getElementById("text4").innerHTML = color4);
};
