const url = "http://localhost:1337";
//import { displayMessage } from "./components/displayMessage.js";

const container = document.querySelector(".container");

async function products() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

products();
