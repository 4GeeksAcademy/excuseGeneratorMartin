/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let a = who[Math.floor(Math.random() * who.length)];
  let b = action[Math.floor(Math.random() * action.length)];
  let c = what[Math.floor(Math.random() * what.length)];
  let d = when[Math.floor(Math.random() * when.length)];

  document.getElementById(
    "excuse"
  ).innerHTML = `OMG you will not believe me but... 
  <p> ${a} ${b} ${c} ${d}.</p>`;
  const button = document.getElementById("refresfhPage");
  button.addEventListener("click", function() {
    location.reload();
  });
};
