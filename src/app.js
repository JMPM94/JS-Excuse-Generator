/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let excuseGenerator = () => {
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
  let whoRandom = getRandomElement(who);
  let actionRandom = getRandomElement(action);
  let whatRandom = getRandomElement(what);
  let whenRandom = getRandomElement(when);
  return (
    who[whoRandom] +
    " " +
    action[actionRandom] +
    " " +
    what[whatRandom] +
    " " +
    when[whenRandom]
  );
};
let refresh = document.getElementById("refresh");
refresh.addEventListener("click", _ => {
  location.reload();
});
function getRandomElement(ArrayCalcular) {
  return Math.floor(Math.random() * ArrayCalcular.length);
}
document.querySelector("#excuse").innerHTML = excuseGenerator();
