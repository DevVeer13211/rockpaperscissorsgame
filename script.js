const selectOptions = document.querySelector(".select-options");
let userChoice;
let compChoices = ["rock", "paper", "scissors"];
let resultDiv = document.querySelector(".result");
let userCh = document.querySelector(".userCh");
let compCh = document.querySelector(".compCh");
let resetBtn = document.querySelector(".reset");
let scDiv = document.querySelector(".score");
let cScore = 0,
  uScore = 0;

const gameData = [
  { id: "rock", img: "Rock.png", text: "Rock" },
  { id: "paper", img: "paper.png", text: "paper" },
  { id: "scissors", img: "Scissors.png", text: "scissors" },
];

for (const data of gameData) {
  selectOptions.innerHTML += `<div role="button"
  class="button h-88 w-88 flex flex-col items-center gap-5 cursor-pointer "
  id=${data.id}
  >
  <img
  id=${data.id}
  src=${data.img}
  class="w-72 h-72 object-cover rounded-full"
  alt=""
  />
  <h2 id=${data.id} class="text-neutral-950 font-Helv font-extrabold uppercase text-xl py-[.4em] px-8 rounded-full bg-neutral-200">${data.text}</h2>
  </div>`;
}
let buttons = document.querySelectorAll(".button");

const clickByUser = () => {
  for (button of buttons) {
    button.addEventListener("click", (btn) => {
      userChoice = btn.target.id;
      let compChoice =
        compChoices[Math.floor(Math.random() * compChoices.length)];
      console.log(userChoice);
      if (uScore + cScore < 7) {
        scDiv.innerHTML = "";
      }
      gameLogic(userChoice, compChoice);
    });
  }
};

const gameLogic = (userChoic, compChoic) => {
  if (uScore + cScore < 7) {
    if (userChoic === compChoic) {
      userCh.innerHTML += `<h2>Your Choice <span class='uppercase text-[1.1rem] font-extrabold'>${userChoic}</span></h2>`;
      compCh.innerHTML += `<h2>Your Choice <span class='uppercase text-[1.1rem] font-extrabold'>${compChoic}</span></h2>`;

      resetBtn.addEventListener("click", () => {
        resetGame();
      });

      scDiv.innerHTML += `<h2 class="uSc text-3xl text-white font-Helv uppercase font-bold">
            Your Score : ${uScore}
          </h2>
          <h2 class="cSc text-3xl text-white font-Helv uppercase font-bold">
            Computer's Score : ${cScore}
          </h2>`;
    } else if (userChoic === "scissors" && compChoic === "rock") {
      userCh.innerHTML += `<h2>Your Choice <span class='uppercase text-[1.1rem] font-extrabold'>${userChoic}</span></h2>`;
      compCh.innerHTML += `<h2>Your Choice <span class='uppercase text-[1.1rem] font-extrabold'>${compChoic}</span></h2>`;

      resetBtn.addEventListener("click", () => {
        resetGame();
      });
      cScore += 1;
      scDiv.innerHTML += `<h2 class="uSc text-3xl text-white font-Helv uppercase font-bold">
            Your Score : ${uScore}
          </h2>
          <h2 class="cSc text-3xl text-white font-Helv uppercase font-bold">
            Computer's Score : ${cScore}
          </h2>`;
    } else if (userChoic === "rock" && compChoic === "scissors") {
      userCh.innerHTML += `<h2>Your Choice <span class='uppercase text-[1.1rem] font-extrabold'>${userChoic}</span></h2>`;
      compCh.innerHTML += `<h2>Your Choice <span class='uppercase text-[1.1rem] font-extrabold'>${compChoic}</span></h2>`;

      resetBtn.addEventListener("click", () => {
        resetGame();
      });
      uScore += 1;
      scDiv.innerHTML += `<h2 class="uSc text-3xl text-white font-Helv uppercase font-bold">
            Your Score : ${uScore}
          </h2>
          <h2 class="cSc text-3xl text-white font-Helv uppercase font-bold">
            Computer's Score : ${cScore}
          </h2>`;
    } else if (userChoic === "rock" && compChoic === "paper") {
      userCh.innerHTML += `<h2>Your Choice <span class='uppercase text-[1.1rem] font-extrabold'>${userChoic}</span></h2>`;
      compCh.innerHTML += `<h2>Your Choice <span class='uppercase text-[1.1rem] font-extrabold'>${compChoic}</span></h2>`;

      resetBtn.addEventListener("click", () => {
        resetGame();
      });
      cScore += 1;
      scDiv.innerHTML += `<h2 class="uSc text-3xl text-white font-Helv uppercase font-bold">
            Your Score : ${uScore}
          </h2>
          <h2 class="cSc text-3xl text-white font-Helv uppercase font-bold">
            Computer's Score : ${cScore}
          </h2>`;
    } else if (userChoic === "paper" && compChoic === "rock") {
      userCh.innerHTML += `<h2>Your Choice <span class='uppercase text-[1.1rem] font-extrabold'>${userChoic}</span></h2>`;
      compCh.innerHTML += `<h2>Your Choice <span class='uppercase text-[1.1rem] font-extrabold'>${compChoic}</span></h2>`;

      resetBtn.addEventListener("click", () => {
        resetGame();
      });
      uScore += 1;
      scDiv.innerHTML += `<h2 class="uSc text-3xl text-white font-Helv uppercase font-bold">
            Your Score : ${uScore}
          </h2>
          <h2 class="cSc text-3xl text-white font-Helv uppercase font-bold">
            Computer's Score : ${cScore}
          </h2>`;
    } else if (userChoic === "scissors" && compChoic === "paper") {
      userCh.innerHTML += `<h2>Your Choice <span class='uppercase text-[1.1rem] font-extrabold'>${userChoic}</span></h2>`;
      compCh.innerHTML += `<h2>Your Choice <span class='uppercase text-[1.1rem] font-extrabold'>${compChoic}</span></h2>`;

      resetBtn.addEventListener("click", () => {
        resetGame();
      });
      uScore += 1;
      scDiv.innerHTML += `<h2 class="uSc text-3xl text-white font-Helv uppercase font-bold">
            Your Score : ${uScore}
          </h2>
          <h2 class="cSc text-3xl text-white font-Helv uppercase font-bold">
            Computer's Score : ${cScore}
          </h2>`;
    } else if (userChoic === "paper" && compChoic === "scissors") {
      userCh.innerHTML += `<h2>Your Choice <span class='uppercase text-[1.1rem] font-extrabold'>${userChoic}</span></h2>`;
      compCh.innerHTML += `<h2>Your Choice <span class='uppercase text-[1.1rem] font-extrabold'>${compChoic}</span></h2>`;

      resetBtn.addEventListener("click", () => {
        resetGame();
      });
      cScore += 1;
      scDiv.innerHTML += `<h2 class="uSc text-3xl text-white font-Helv uppercase font-bold">
            Your Score : ${uScore}
          </h2>
          <h2 class="cSc text-3xl text-white font-Helv uppercase font-bold">
            Computer's Score : ${cScore}
          </h2>`;
    }
  }
};

const resetGame = () => {
  userCh.innerHTML = `<h2></h2>`;
  compCh.innerHTML = `<h2></h2>`;
  uScore = 0;
  cScore = 0;
  scDiv.innerHTML = `<h2 class="uSc text-3xl text-white font-Helv uppercase font-bold">
            Your Score : ${uScore}
          </h2>
          <h2 class="cSc text-3xl text-white font-Helv uppercase font-bold">
            Computer's Score : ${cScore}
          </h2>`;
};

clickByUser();
