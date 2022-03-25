const imgInput = document.getElementById("imgInput");
const canvas = document.getElementById("meme");
const topTxtInput = document.getElementById("topTxtInput");
const bottomTxtInput = document.getElementById("bottomTxtInput");
const btnGenerator = document.getElementById("generator");
const codGen = document.getElementById("codOutput");
const codigoU = document.getElementById("codInput");
const btnVerificador = document.getElementById("btnVerificador");
const btnNewMeme = document.getElementById("btnNewMeme");
const btnDownload = document.getElementById("btnDownload");
const labelOutput = document.getElementById("labelOutput");
let image;
var cod;

// labelOutput.style.display = "none";
// btnVerificador.style.display = "none";

btnGenerator.addEventListener("click", () => {
  const imageDataUrl = URL.createObjectURL(imgInput.files[0]);

  image = new Image();
  image.src = imageDataUrl;

  image.addEventListener("load", () => {
    updateMemeCanvas(canvas, image, topTxtInput.value, bottomTxtInput.value);
  });

  topTxtInput.addEventListener("change", (e) => {
    updateMemeCanvas(canvas, image, topTxtInput.value, bottomTxtInput.value);
  });

  bottomTxtInput.addEventListener("change", () => {
    updateMemeCanvas(canvas, image, topTxtInput.value, bottomTxtInput.value);
  });

  canvas.style.backgroundImage = "none";

  topTxtInput.disabled = true;
  bottomTxtInput.disabled = true;
  imgInput.disabled = true;

  labelOutput.hidden = false;
  btnVerificador.hidden = false;

  // labelOutput.classList.toggle("cod-activo");
  // codGen.classList.toggle("cod-activo-tittle");
  // codigoU.classList.toggle("cod-activo-input");
  // btnVerificador.classList.toggle("cod-activo-btn");
  cod = Math.floor(100000 + Math.random() * 900000);
  codGen.innerHTML = `Ingresa el siguente codigo si deseas editar el meme que acabas de
  crear: ${cod}`;
});

btnVerificador.addEventListener("click", (e) => {
  if (cod === parseInt(codigoU.value)) {
    topTxtInput.disabled = false;
    bottomTxtInput.disabled = false;
    imgInput.disabled = false;
  } else {
    alert("Codigo incorrecto vuelve a intentar");
  }
});

btnDownload.addEventListener("click", function () {
  var img = canvas.toDataURL("image/png");
  var link = document.createElement("a");
  link.download = "meme ";
  link.href = img;
  link.click();
});

btnNewMeme.addEventListener("click", (e) => {
  document.location.reload(true);
});

function updateMemeCanvas(canvas, image, topText, bottomText) {
  const ctx = canvas.getContext("2d");
  const width = image.width;
  const height = image.height;
  const fontSize = Math.floor(width / 10);
  const yOffset = height / 25;

  // Update canvas background
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);

  // Prepare text
  ctx.strokeStyle = "black";
  ctx.lineWidth = Math.floor(fontSize / 4);
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.lineJoin = "round";
  ctx.font = `${fontSize}px sans-serif`;

  // Add top text
  ctx.textBaseline = "top";
  ctx.strokeText(topText, width / 2, yOffset);
  ctx.fillText(topText, width / 2, yOffset);

  // Add bottom text
  ctx.textBaseline = "bottom";
  ctx.strokeText(bottomText, width / 2, height - yOffset);
  ctx.fillText(bottomText, width / 2, height - yOffset);
}
