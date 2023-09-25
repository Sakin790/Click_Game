const stat = document.querySelector(".stats");
const btnStart = document.querySelector(".start");
const btnClick = document.querySelector(".click");
const btnDec = document.querySelector(".decrease");
const btnClear = document.querySelector(".clear");

const winScore = 10;
let count = 0;

btnStart.addEventListener("click", () => {
  start();
});

btnClick.addEventListener("click", () => {
  count++;
  stat.textContent = count;
});

btnDec.addEventListener("click", () => {
  count--;
  stat.textContent = count;
});
btnClear.addEventListener("click", () => {
  count = 0;
  stat.textContent = count;
  document.body.style = "default";
});

const start = () => {
  count = 0;
  stat.textContent = count;
  btnClick.removeAttribute("disabled");
  startCounting();
};

const startCounting = () => {
  setTimeout(() => {
    if (count > winScore) {
      document.body.style.backgroundColor = "cyan";
      stat.textContent = "You Won!";
    } else {
      document.body.style.backgroundColor = "red";
      stat.textContent = "You Lost!";
    }
    btnClick.setAttribute("disabled", true);
  }, 5000);
};
