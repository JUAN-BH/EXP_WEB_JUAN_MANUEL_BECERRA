const imagen = document.getElementById("img");
const oeP = document.getElementsByClassName("oe");
const otroP = document.getElementsByTagName("p");

function cambioIMG() {
  imagen.src =
    "https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
}

function cambiotext() {
  otroP[0].innerHTML = "Esta clase es una chimba";
}
