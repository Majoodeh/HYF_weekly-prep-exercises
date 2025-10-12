"use strict";

const GOOD_URL = "https://pokeapi.co/api/v2/pokemon/?limit=5";
const BAD_URL = "https://pokeapi.co/api/v2/pokemons/?limit=5";

async function getData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Something went wrong! Status: " + response.status);
  }

  const jsonData = await response.json();
  return jsonData;
}

function showData(data) {
  const errorBox = document.querySelector("#error");
  errorBox.innerText = "";
  const jsonBox = document.querySelector("#json");
  jsonBox.innerText = JSON.stringify(data, null, 2);
}

function showError(error) {
  const jsonBox = document.querySelector("#json");
  jsonBox.innerText = "";

  const errorBox = document.querySelector("#error");
  errorBox.innerText = error.message;
}

function startApp() {
  const button = document.querySelector("#button");
  button.addEventListener("click", async () => {
    const checkbox = document.querySelector("#option");
    const chosenUrl = checkbox.checked ? BAD_URL : GOOD_URL;

    try {
      const result = await getData(chosenUrl);
      showData(result);
    } catch (error) {
      showError(error);
    }
  });
}

window.addEventListener("load", startApp);
