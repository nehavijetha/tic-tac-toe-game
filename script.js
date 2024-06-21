let btnRef = document.querySelectorAll(".choice");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
//winning pattern array

let winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
//player 'x' playes first
let xTurn = true;
let count = 0;

//disable all buttons
const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  //enable popup
  popupRef.classList.remove("hide");
};

//Enable all buttons (for new game and restart)
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  //disable popup
  popupRef.classList.add("hide");
};

//executed when playser wins
const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
};

//function for draw
const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E <br> Its a Draw";
};

//new game
newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

//winning

const winChecker = () => {
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    //check empty elements are filled or not
    //if 3 empty elements are same then it would give a win
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        winFunction(element1);
      }
    }
  }
};

//display x/o each time
btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      //display x
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      //display o
      element.innerText = "O";
      element.disabled = true;
    }
    count += 1;
    if (count === 9) {
      drawFunction();
    }
    winChecker();
  });
});
//enable buttons and disable popup on page load
window.onload = enableButtons;
