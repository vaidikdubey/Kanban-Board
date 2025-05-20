const modeButton = document.getElementById("modeButton");
const board = document.getElementsByClassName('.board');

modeButton.addEventListener("click", changeMode);

function changeMode() {
  if (modeButton.classList.contains("btn-light")) {
    modeButton.classList.remove("btn-light");
    modeButton.classList.add("btn-dark");
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#1e1e1e";
    modeButton.textContent = "Dark 🌚";
}
else {
    modeButton.classList.remove("btn-dark");
    modeButton.classList.add("btn-light");
    document.body.style.backgroundColor = "#1e1e1e";
    document.body.style.color = "#ffffff";
    modeButton.textContent = "Light 🌞";
  }
}
