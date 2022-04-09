'use strict';

//Declaro constantes
const input = document.querySelector('.js_input');
const reset = document.querySelector('.js_reset');
const search = document.querySelector('.js_search');
const ListCocktails = document.querySelector('.js_list_cocktails');

const paintList = document.querySelector('.js_list')

//lista de cocoteles
let cocktail = [];
let favorites = [];

//Necesito seleccionar un coctel
function selectCocktails() {
    const selectorCocktail = document.querySelectorAll(".js_selectorCocktails");
    for (const itemList of selectorCocktail) {
        itemList.addEventListener('click', handleClick)
    }
}

//Necesito pintar la Li en el html
function paintListCocktail() {
    let html = '';
    for (const drink of cocktail) {
        html += `<li class=js_list_cocktails id=${drink.idDrink}>`
        html += `<h2>${drink.strDrink}</h2>`
        html += `img src=${drink.strDrinkThumb}/>`
        html += `</li>`
    }
    ListCocktails.innerHTML = html;

    //Necesito escoger la imagen si está vacía o no
    function img() {
        for (const drink of cocktail) {
            if (drink.strDrinkThumb === null) {
                drink.strDrinkThumb = `https://via.placeholder.com/210x295/ffffff/666666/?text=TV
                `;
            } else {
                drink.strDrinkThumb;
            }
        }
    }
}

}
//Necesito los datos de los cócteles con fetch 

function fetch()
const searchValue = searchInput.value;
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
        cocktail = data.drinks;
        for (const infoCocktail of infoWeb) {
            let ulContent = infoCocktail;
            paintList.innerHTML += `<li>
                        <div>
                        <h2>${ulContent.strDrink}</h2>
                        <img
                        src="${ulContent.strDrinkThumb}"/>
                        </div>
                    </li>`;
            console.log(paintList);
        }
        ;
        paintListCocktail();
    })

//Necesito escuchar el evento de teclear en el input

//2-Llamo a la función
function handleKEyUpInput(event) {
    //el elemento en el se que produjo el evento(target)
    let toWrite = event.target.value;

}

//1-Declaro el evento
input.addEventListener("keyup", handleKEyUpInput);

//Escuchar el evento clic del botón de buscar
//2-Llamo a la función
handleBtnSearch(event) {
    event.preventDefault();
    paintListCocktail();
    fetch();
}
//1-Declaro el evento
search.addEventListener("click", handleBtnSearch);

