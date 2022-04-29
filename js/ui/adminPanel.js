import { getUsername } from "../tools/storage.js";

const welcome = document.querySelector(".welcome__message");
const logout = document.querySelector(".logout__button");

const username = getUsername();
console.log(username);

welcome.innerHTML = "Hello " + username + ". Feel free to edit the content.";

logout.addEventListener("click", () => {
  localStorage.removeItem("user");
  location.href = "login.html";
});
