const modeButton = document.getElementById("modeButton");
const board = document.querySelectorAll(".board");
const editDeleteBtn = document.querySelectorAll(".edit-delete-btn");

modeButton.addEventListener("click", changeMode);

function changeMode() {
  if (modeButton.classList.contains("btn-light")) {
    modeButton.classList.remove("btn-light");
    modeButton.classList.add("btn-dark");
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#1e1e1e";
    modeButton.textContent = "Dark 🌚";
    board.forEach((boards) => {
      boards.style.color = "#1e1e1e";
      boards.style.backgroundColor = "#bbbbbb";
    });
    editDeleteBtn.forEach((button) => {
      button.classList.remove("btn-outline-light");
      button.classList.add("btn-outline-dark");
    });
  } else {
    modeButton.classList.remove("btn-dark");
    modeButton.classList.add("btn-light");
    document.body.style.backgroundColor = "#1e1e1e";
    document.body.style.color = "#ffffff";
    modeButton.textContent = "Light 🌞";
    board.forEach((boards) => {
      boards.style.color = "#ffffff";
      boards.style.backgroundColor = "#3e3e3e";
    });
    editDeleteBtn.forEach((button) => {
      button.classList.remove("btn-outline-dark");
      button.classList.add("btn-outline-light");
    });
  }
}

const pendingList = document.getElementById("pendingList");
const progressList = document.getElementById("progressList");
const completedList = document.getElementById("completedList");
