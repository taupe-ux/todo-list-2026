const logInForm = document.querySelector(".log-in");
const logInInput = logInForm.querySelector("input");
const logInPainting = document.querySelector(".painting");

const USERNAME = "username";

const CLASSHIDDEN = "hidden";

function paintingLogIn(userName) {
  logInPainting.innerText = `안녕하세요 ${userName}님`;
  logInForm.classList.add(CLASSHIDDEN);
  logInPainting.classList.remove(CLASSHIDDEN);
  localStorage.setItem(USERNAME, userName);
}

function handleLogIn(event) {
  event.preventDefault();
  const userName = logInInput.value;
  paintingLogIn(userName);
}

logInForm.addEventListener("submit", handleLogIn);

const SAVEDUSERNAME = localStorage.getItem(USERNAME);

if (SAVEDUSERNAME !== null) {
  paintingLogIn(SAVEDUSERNAME);
}
