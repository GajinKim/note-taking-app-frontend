import './style.css'

let count = 0;
let countElement = document.getElementById('count')!;

countElement.innerText = count.toString();
// let acountrButton = document.querySelector('#counter-button')!;
let counterButton = document.getElementById('counter-button')!; // ! at the end says, "don't worry about it being null"
counterButton.onclick = () => updateCount();

// -- ? syntax

// let x = {
//   y: 3,
// }

// let z = x?.y; // if x is null, instead of trying to get y (null.y) just return null

// let x = null;
// let y = x ?? 3; // equivalent to let y = (x == null) ? 3 : x;

// let y = x || 3; // checks if the left hand side (x) is "truthy" in which case y will resolve to x, if "falsey", resolve to right hand expresion (3)

// let y = x && 3 // if left hand side (x) is "truthy", return right side, if left hand side is falsey, return left hand side
/////////////////

function updateCount() {
  count++;
  countElement.innerText = count.toString();
}

async function callApiDefault() {
  console.log(await (await fetch('http://localhost:3000')).json());
}

function helloWorld() {
  console.log('hello world called');
}

async function pushInputToArrayApi(textInput : String) {
  try {
    const response = await fetch("http://localhost:3000/add-to-list", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({value: textInput}),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

// element can be HTMLButtonElement or null
let helloWorldButton = document.getElementById('hello-world-button');
helloWorldButton!.onclick = () => helloWorld(); // !. lets the code know that it's NOT null
// onclick is a property (variable) of element
// effectively just: element.onclick();

let defaultApiButton = document.getElementById('call-default-api');
defaultApiButton!.onclick = () => callApiDefault();

let pushInputToArrayButton = document.getElementById('push-input-to-array-api-button');
pushInputToArrayButton!.onclick = () => pushInputToArrayApi((document.getElementById('input-field') as HTMLInputElement)!.value);

// -- ARROW FUNCTIONS 101 ---

// let x = console.log('asdf'); // assigns the return value of "console.log('asdf');" (which is 'undefined') to variable x
// let y = () => console.log('asdf'); // assigns the function "console.log('asdf');" to variable y

// console.log(x);
// y(); 
