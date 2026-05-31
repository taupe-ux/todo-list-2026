const logInForm = document.querySelector(".log-in");
const logInInput = logInForm.querySelector("input");
const logInPainting = document.querySelector(".painting");
const logInHidden = document.querySelector(".main__log-in_greetings");

const paintToDoDiv = document.querySelector(".main__todo");

const USERNAME = "username";

const CLASSHIDDEN = "hidden";

function paintingLogIn(userName) {
  logInPainting.innerText = `안녕하세요 ${userName}님`;
  logInForm.classList.add(CLASSHIDDEN);
  logInPainting.classList.remove(CLASSHIDDEN);
  localStorage.setItem(USERNAME, userName);
  paintToDoDiv.classList.remove(CLASSHIDDEN);
}

function handleLogIn(event) {
  event.preventDefault();
  const userName = logInInput.value;
  paintingLogIn(userName);
  logInHidden.classList.add(CLASSHIDDEN);
}

logInForm.addEventListener("submit", handleLogIn);

const SAVEDUSERNAME = localStorage.getItem(USERNAME);

if (SAVEDUSERNAME !== null) {
  paintToDoDiv.classList.remove(CLASSHIDDEN);
  paintingLogIn(SAVEDUSERNAME);
} else {
  logInHidden.classList.remove(CLASSHIDDEN);
}
