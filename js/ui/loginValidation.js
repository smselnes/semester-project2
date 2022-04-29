import { displayMessage } from "../components/displayMessage.js";
import { saveToken, saveUser } from "../tools/storage.js";
const newUrl = "http://localhost:1337";
const emailInput = document.querySelector(".emailInput");
const emailError = document.querySelector(".emailError");
const passwordInput = document.querySelector(".passwordInput");
const passwordError = document.querySelector(".passwordError");
const submitLogin = document.querySelector(".login__submit");
const form = document.querySelector(".login");

form.addEventListener("submit", submitLoginForm);

function submitLoginForm() {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (validateEmail(emailValue.value) === true) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }

  if (passwordValue.length < 8) {
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }

  /* if (emailValue.length === 0 || passwordValue.length === 0) {
    return displayMessage("warning", "Invalid Input", ".submitError");
  }  */

  loginToAdmin(emailValue, passwordValue);

  async function loginToAdmin(username, password) {
    const loginUrl = newUrl + "/auth/local";

    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(loginUrl, options);
      const json = await response.json();
      console.log(json);

      if (json.user) {
        console.log("Success");

        saveToken(json.jwt);
        saveUser(json.user);

        location.href = "admin.html";
      }

      if (json.error) {
        //displayMessage("warning", "${json.data[0]}", ".submitError");
        console.log("We can fix this error code later.");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(emailValue) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(emailValue);
  return patternMatches;
}
