import { createDetails } from "./productdetails/createDetails.js";


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "http://localhost:1337/products/" + id;

async function details() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        createDetails(json);
    } catch(error) {
        console.log(error);
    }
}
details();


 
