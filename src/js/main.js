'use strict';

//Me traigo el html que necesito
const input = document.querySelector('.js_input');
const reset = document.querySelector('.js_reset');
const search = document.querySelector('.js_search');


//Guardo la url en una constante
const urlCocktail =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

//lista de cocoteles
let cocktail = [];
let favorites = [];

//Necesito los datos de los cócteles con fetch (tengo que crear una lista)
let infoWeb = [];

fetch(urlCocktail)
    .then((response) => response.json())
    .then((data) => {
        infoWeb = data.drinks;
        for (const infoCocktail of infoWeb) {
            let ulContent = infoCocktail; paintList.innerHTML += `<li>
        <div>
        <h2>${ulContent.strDrink}</h2>
        <img
        src="${ulContent.strDrinkThumb}"/>
        </div>
    </li>`;
        }
    });

//Necesito escuchar el evento de teclear en el input

//2-Llamo a la función
function handleKEyUpInput() {

}
//1-Declaro el evento
input.addEventListener("keyup", handleKEyUpInput);
