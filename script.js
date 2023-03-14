// X: 12123.35, Y: 12644.46, Z: 161.15
// X: 12123.35, Y: 12644.46
// 12123.35, Y: 12644.46
// 12123.35, 12644.46
// 12123.35,1,12644.46
let counter = 0;

function fixCoords() {
  let input, firstLetter, secondLetter, newStr, noX, removeY, result, letter, index;
  let addOneString, indexOne, addOneL, finalResultString, final;

  input = document.getElementById("coordinates").value;
  document.getElementById("coordinates").value = "";

  firstLetter = input.indexOf(",");
  secondLetter = input.indexOf(",", firstLetter + 1);
  newStr = input.slice(0, secondLetter);

  noX = newStr.slice(3);

  removeY = noX;
  letter = "Y";
  index = removeY.indexOf(letter);

  if (index !== -1) {
    result = removeY.slice(0, index - 1) + removeY.slice(index + 2);
  }

  addOneString = result;
  indexOne = addOneString.indexOf(",");
  addOneL = addOneString.slice(0, indexOne + 1) + "1," + addOneString.slice(indexOne + 1);

  finalResultString = addOneL;
  final = finalResultString.replace(/\s/g, "");

  const outputElement = document.createElement('p');
  outputElement.innerText = `Coords: ${final}`;
  document.body.appendChild(outputElement);

  const copyButton = document.createElement('button');
  copyButton.innerText = 'Copy to clipboard';
  copyButton.classList.add("copybutton");

  const varName = `final${counter}`;
  window[varName] = final;
  counter++;

  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(window[varName])
      .then(() => {
        console.log("copied");
      })
      .catch((error) => {
        console.error('Failed to copy: ', error);
      });
  });

  document.body.appendChild(copyButton);
}

