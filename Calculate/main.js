const displayBox = document.querySelector(".display");
function showDisplay(event) {
  var x = event.target.innerText;

  if (displayBox.innerHTML == 0) {
    if (x == "%" || x == "/" || x == "*" || x == "+" || x == "-") {
      return;
    }
    return (displayBox.innerHTML = x);
  }

  let operators = [...document.querySelectorAll(".operator")].map(
    (el) => el.textContent
  );
  let currentResult = displayBox.innerHTML;
  console.log(currentResult.charAt(currentResult.length - 1));

  if (
    operators.includes(x) &&
    operators.includes(currentResult.charAt(currentResult.length - 1))
  ) {
    displayBox.innerHTML =
      currentResult.substring(0, currentResult.length - 1) + x;
  } else {
    return (displayBox.innerHTML += x);
  }
}

function calculate() {
  let result = displayBox.innerText;
  displayBox.innerText = eval(result);
}

function allClear() {
  displayBox.innerText = 0;
}

function clear() {
  let text = displayBox.innerText;
  if (text.length === 1) {
    displayBox.innerText = 0;
  } else {
    displayBox.innerText = text.substring(0, text.length - 1);
    // displayBox.innerText = ""
    // for (let i = 0 ; i <= text.length-2; i++) {
    //   displayBox.innerText += text[i]
    // }
  }
}

document.querySelector(".clear-last").addEventListener("click", clear);
document.querySelector(".all-clear").addEventListener("click", allClear);
document.querySelector(".calculate").addEventListener("click", calculate);
let list = document.querySelectorAll(".show-display");

list.forEach((item) => {
  item.addEventListener("click", showDisplay);
});
