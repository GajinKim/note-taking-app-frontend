let count = 0;
let countButton = document.getElementById('count')!;

countButton.innerText = count.toString();
// let acountrButton = document.querySelector('#counter-button')!;
let counterButton = document.getElementById('counter-button')!; // ! at the end, "don't worry about it being null"
counterButton.onclick = () => updateCount();

function updateCount() {
  count++;
  countButton.innerText = count.toString();
}
