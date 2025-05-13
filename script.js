let display = document.getElementById("display");
let buttons = document.getElementsByTagName("button");

let arrbutton = Array.from(buttons);
let result = '';

let birat = (e) => {
  if (e.target.innerHTML == "AC") {
    result = '';
    display.value = result;
  }
  else if (e.target.innerHTML == "DEL") {
    result = result.slice(0, -1);
    display.value = result;
  }
  else if (e.target.innerHTML == "=") {
    result = eval(result);
    display.value = result;
  }
  else {
    result += e.target.innerHTML;
    display.value = result;
  }
}

arrbutton.forEach((element) => {
  element.addEventListener('click', birat);
})