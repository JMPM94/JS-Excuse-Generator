/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = excusegenerator();
};

let excusegenerator = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  // let quien = Math.floor(Math.random() * who.length);
  let quien = ObtenerElementoAleatorio(who);
  let accion = ObtenerElementoAleatorio(action);
  let que = ObtenerElementoAleatorio(what);
  let cuando = ObtenerElementoAleatorio(when);

  return (
    who[quien] + " " + action[accion] + " " + what[que] + " " + when[cuando]
  );
};

let refresh = document.getElementById("refresh");
refresh.addEventListener("click", _ => {
  location.reload();
});

function ObtenerElementoAleatorio(ArrayCalcular) {
  console.log("ObtenerElementoAleatorio");

  return Math.floor(Math.random() * ArrayCalcular.length);
}
