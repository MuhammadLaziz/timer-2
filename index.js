const counter = document.querySelector(".counter"),
  startBtn = document.querySelector(".start"),
  addBtn = document.querySelector(".add"),
  resetBtn = document.querySelector(".reset"),
  pauseBtn = document.querySelector(".pause"),
  text = document.querySelector(".text"),
  delet = document.querySelector(".delete"),
  note = document.querySelector(".note");

let second = 0, minute = 0, interval;

function start() {
  interval = setInterval(() => {
    second++;
    if (second == 60) {
      minute += 1;
      second = 0;
      if (minute < 10) {
        minute = "0" + minute;
      }
    }
    if (second < 10) {
      second = "0" + second;
    }
    counter.innerHTML = `${minute}: ${second}`;
  }, 1000);
  startBtn.classList.add("hide");
  pauseBtn.classList.remove("hide");

}

function pauseCount() {
  clearInterval(interval);
  pauseBtn.classList.add("hide");
  startBtn.classList.remove("hide");
  localStorage.setItem("min", minute);
  localStorage.setItem("sec", second);
}
const resetStore = () => {
  clearInterval(interval);
  localStorage.removeItem("min");
  localStorage.removeItem("sec");
  second = 0;
  minute = 0;
  counter.innerHTML = "00:00";
};

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pauseCount);
window.addEventListener("load", () => {
  minute = localStorage.getItem("min");
  second = localStorage.getItem("sec");
  counter.innerHTML = `${minute}: ${second}`;
});

resetBtn.addEventListener("click", resetStore);

delet.addEventListener("click", () => {
  if (delet.parentElement.classList.contains('span')) {
    console.log(delet.parentElement);
  }
});
const addNote = () => {
  let noteMin = minute;
  let noteSec = second;
  const span = document.createElement("span");
  span.classList.add('span')
  span.innerHTML = `
  <p class="text">${noteMin}: ${noteSec}</p>
  <button class="delete">X</button>  
  `;
  note.append(span)
};
    
addBtn.addEventListener("click", addNote);