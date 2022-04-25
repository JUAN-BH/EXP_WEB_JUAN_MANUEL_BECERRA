const button = document.querySelector("#button");
const score = document.querySelector("#title");

/*
setItem('clave', 'valor')
*/

if (typeof localStorage === "undefined") {
  console.log("no lo tienes");
}

if (localStorage.getItem("score")) {
  score.innerHTML = localStorage.getItem("score");
} else {
  localStorage.setItem("score", "0");
}

button.addEventListener("click", () => {
  const currentScore = localStorage.getItem("score");
  localStorage.setItem("score", parseInt(currentScore) + 1);
  score.innerHTML = localStorage.getItem("score");
});

function guardarPersona() {
  const persona = {
    nombre: "wos",
    edad: "23",
  };
  localStorage.setItem("persona", JSON.stringify(persona));
}

function obtener_localStorage() {
  if (localStorage.getItem("persona")) {
    const persona = JSON.parse(localStorage.getItem("persona"));
    console.log(persona);
  }
}
