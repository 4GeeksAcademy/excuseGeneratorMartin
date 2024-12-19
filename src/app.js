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

  function randomExcuse(arr) {
    let randomElement = arr[Math.floor(Math.random() * arr.length)];
    return randomElement;
  }
  function updateExcuse() {
    document.getElementById("excuse").innerHTML =
      "OMG you will not believe me but..." +
      "<p> " +
      randomExcuse(who) +
      " " +
      randomExcuse(action) +
      " " +
      randomExcuse(what) +
      " " +
      randomExcuse(when) +
      "</p>.";
  }
  const button = document.getElementById("refreshContent");
  button.addEventListener("click", updateExcuse);
};
