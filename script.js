// X: 12123.35, Y: 12644.46, Z: 161.15
// X: 12123.35, Y: 12644.46
// 12123.35, Y: 12644.46
// 12123.35, 12644.46
input = prompt("Enter the coordinates exactly how you copy them from CF(X: .. Y: .. Z: ..");
let str = input;
const firstLetter = str.indexOf(",");
const secondLetter = str.indexOf(",", firstLetter + 1);
const newStr = str.slice(0, secondLetter);

function fixCoords(input) {
  console.log(newStr);
  removeXAxis();
  addOne();
  finalResult();
  showResult();
  return newStr;
}

const noX = newStr.slice(3);

function removeXAxis(ainput) {
  console.log(noX);
  return noX;
}

let removeY = noX;
let result;
let letter = "Y";
let index = removeY.indexOf(letter);

if (index !== -1) {
  result = removeY.slice(0, index - 1) + removeY.slice(index + 2);
}
console.log(result);

const addOneString = result;
const indexOne = addOneString.indexOf(",");
const addOneL = addOneString.slice(0, indexOne + 1) + "1," + addOneString.slice(indexOne + 1);

function addOne(cinput) {
  console.log(addOneL);
}

const finalResultString = addOneL;
const final = finalResultString.replace(/\s/g, "");

function finalResult(dinput) {
  console.log(final);
}

function showResult(einput) {
  alert("Coords: " + final);
}

fixCoords();
showResult();
