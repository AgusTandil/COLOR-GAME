let numbersOfSquares = 6
let colors = [ "rgb(184, 134, 11)" , "rgb(139, 0, 139)" , "rgb(165, 42, 42)", "rgb(222, 184, 135)" , "rgb(100, 149, 237)" , "rgb(85, 107, 47)"]
colors = generateRandomColors(numbersOfSquares)
console.log(colors)
let squares = document.querySelectorAll(".square");
for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
}

let pickedColor = colors[4]
let colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.innerText = pickedColor;

let titulo = document.querySelector("#titulo");
let mensaje = document.getElementById("message");

for (let i = 0; i < squares.length; i++) {
  squares[i].backgroundColor = colors[i];
  squares[i].addEventListener("click", function () {
    let clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
console.log("se hizo click")
      mensaje.innerText = "GANASTE!!";
      boton.innerText= "JUGAR DE NUEVO"
      titulo.style.backgroundColor = pickedColor;
      changeColors(pickedColor);
      
    } else {
      mensaje.innerText = "INTENTALO DE NUEVO";
      this.style.backgroundColor = "black";
    }
  });
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {

    squares[i].style.backgroundColor = color;
} 
}

function pickColor() {
  let random = Math.floor(Math.random() *numbersOfSquares);

  return colors[random];
}
pickedColor = pickColor();
colorDisplay.innerText = pickedColor;

function randomColor() {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  return "rgb(" + a + ", " + b + ", " + c + ")";
} 

function generateRandomColors(numbersOfSquares) {
  let nuevoArreglo = [];
  for (let i = 0; i < numbersOfSquares; i++) {
    nuevoArreglo.push(randomColor());

}
  return nuevoArreglo;
}

let boton = document.getElementById("reset");

boton.addEventListener("click", function() {
 reset()
  
});

function reset() {
  colors = generateRandomColors(numbersOfSquares);
  pickedColor = pickColor();
  colorDisplay.innerText = pickedColor;
  for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
    boton.innerText = "NUEVOS COLORES"
    mensaje.innerText = ""
    titulo.style.backgroundColor = "teal";
  } 
}

let botones = document.querySelectorAll(".btn")
for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function () {
    botones[0].classList.remove("selected")
    botones[1].classList.remove("selected")
    this.classList.add("selected")
    numbersOfSquares = (this.textContent==="Easy") ? 3 : 6
    reset()
    loopColors(numbersOfSquares)
    loopHard()
})
}

function loopColors(color) {

  for (let i = 0; i < squares.length; i++) {
    
    if (colors[i]) {
      squares[i].style.backgroundColor = color;
    }else{
      squares[i].style.display = "none"
    }
} 
}

function loopHard() {
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
     squares[i].style.display = "Block"
}  
} 
}