let input, firstLetter, secondLetter, newStr, noX, removeY, result, letter, index;
let addOneString, indexOne, addOneL, finalResultString, final;

function fixCoords() {
  input = prompt("Enter the coordinates exactly how you copy them from CF(X: .. Y: .. Z: ..");

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
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(final)
      .then(() => {
        alert('Copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy: ', error);
      });
  });

  document.body.appendChild(copyButton);
}

