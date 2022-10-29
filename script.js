"use strict";

// Add, Substract, Multiply, Divide function
/*
const numberBtns = document.querySelectorAll(".btn.btn--number");
const operand = document.querySelector(".operand");
const resetBtn = document.querySelector(".btn.btn--reset");
const signBtns = document.querySelectorAll(".btn.btn--sign");
const commaBtn = document.querySelector(".btn.btn--comma");
const squareRootBtn = document.querySelector(".btn.btn--square-root");

console.log(commaBtn);

let equation = "";

[...numberBtns, commaBtn, squareRootBtn].forEach((btn) =>
  btn.addEventListener("click", function () {
    equation += btn.textContent;
    operand.textContent = equation;
  })
);

signBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    equation += ` ${btn.textContent} `;
    operand.textContent = equation;
  })
);

resetBtn.addEventListener("click", function () {
  equation = "";
  operand.textContent = 0;
});
*/
const operand = document.querySelector(".operand");
const btns = document.querySelectorAll("button");
const result = document.querySelector(".result");

let answer = "";

btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    try {
      switch (e.target.innerHTML) {
        case "DEL":
          if (operand.innerHTML.length > 0) {
            operand.innerHTML = operand.innerHTML.slice(0, -1);
          }
          break;
        case "AC":
          operand.innerHTML = "";
          result.textContent = "";
          break;
        case "=":
          result.innerHTML = eval(operand.innerHTML.replaceAll("x", "*"));

          answer = result.innerHTML;
          break;
        case "ANS":
          console.log(answer);
          operand.innerHTML = parseInt(answer);
          result.textContent = "";
          break;
        default:
          operand.innerHTML += e.target.innerHTML;
      }
    } catch (err) {
      console.log(err);
      result.innerHTML = "Syntax Error";
    }
  })
);
console.log(eval("Math.sqrt(9)+3"));
