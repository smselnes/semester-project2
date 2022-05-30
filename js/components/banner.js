import { displayMessage } from "./displayMessage.js";

const bannerUrl = "http://localhost:1337/home";
const banner = document.querySelector(".banner");
const loader = document.querySelector(".loader");

async function getBanner() {
  try {
    const response = await fetch(bannerUrl);
    const json = await response.json();

    banner.innerHTML = `
    <img src=http://localhost:1337${json.hero_banner.url} alt ="${json.hero_banner.alternativeText}" width="100%">`;

    loader.style.display = "none";
  } catch (error) {
    displayMessage("error", "Could not find introduction image", ".banner");
    console.log(error);
    loader.style.display = "none";
  }
}

getBanner();
