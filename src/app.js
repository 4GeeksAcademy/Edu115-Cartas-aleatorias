import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let numero = document.getElementById("numero")
  let centro = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
  let escogeCentro = Math.floor(Math.random() * centro.length)
  let centroEscogido = centro[escogeCentro]
  numero.textContent = centroEscogido

  let palosConColor = [
    { palo: "♠️", color: "black" },
    { palo: "♣️", color: "black" },
    { palo: "♥️", color: "red" },
    { palo: "♦️", color: "red" },
  ]

  let escogePaloConColor = Math.floor(Math.random() * palosConColor.length)
  let paloConColorEscogido = palosConColor[escogePaloConColor]
  let palo1 = document.getElementById("palo1")
  let palo2 = document.getElementById("palo2")

  palo1.innerText = paloConColorEscogido.palo
  palo1.style.color = paloConColorEscogido.color
  palo2.innerText = paloConColorEscogido.palo
  palo2.style.color = paloConColorEscogido.color
  numero.style.color = paloConColorEscogido.color
};
