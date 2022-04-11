'use strict';
const searchInput = document.querySelector('#input');
const searchButton = document.getElementById('js_search');
const cocktailList = document.querySelector('#js_list_cocktails');
const favCocktailListHeader = document.querySelector('#favourites-header');
const favCocktailList = document.querySelector('#js_fav_cocktails');
const notMatchingFeedback = document.querySelector('#notmatching');

// info array fav drinks
let favorites = [];


function removeElement(clickedElement, favoriteFoundIndex, clickedCocktailName) {
    favorites.splice(favoriteFoundIndex, 1);
    clickedElement.classList.remove('fav');
    let element = favCocktailList.querySelector(`[data-name=${clickedCocktailName}]`).parentElement;
    element.remove();
    console.log("remove from favoritos: " + clickedCocktailName);
    console.log(favorites);
}

function AddElementToList(clickedElement, clickedCocktailName) {
    favorites.push(clickedCocktailName);
    clickedElement.classList.add('fav');
    console.log("añadido a favoritos: " + clickedCocktailName);
    console.log(favorites);
    favCocktailList.innerHTML += `<li><div data-name="${clickedCocktailName}">${clickedElement.innerHTML}</div></li>`;
}

function SwitchFavouritesHeader() {
    if (favorites.length === 0) {
        favCocktailListHeader.classList.add("hidden");
        favCocktailListHeader.classList.remove("show");
        favCocktailList.innerHTML = '';
    }
    else {
        favCocktailListHeader.classList.add("shown");
        favCocktailListHeader.classList.remove("hidden");
    }
}

function AddToFavorites(event) {

    const clickedCocktailName = event.currentTarget.getAttribute('data-name');

    const favoriteFoundIndex = favorites.findIndex(fav => {
        return fav === clickedCocktailName;
    });


    if (favoriteFoundIndex === -1) { //No lo encontró
        AddElementToList(event.currentTarget, clickedCocktailName);

    } else {
        removeElement(event.currentTarget, favoriteFoundIndex, clickedCocktailName);
    }
    SwitchFavouritesHeader();

    listenersFavDrinks();
}

function listenersFavDrinks() {
    const drinks = document.querySelectorAll(".cocktail");

    for (const item of drinks) {
        item.addEventListener("click", AddToFavorites);
    }
}

function fetchDataOnSearchClicked(evt) {
    evt.preventDefault();
    console.log('searched value:' + searchInput.value);
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput.value}`;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.drinks === null) {
                notMatchingFeedback.classList.remove('hidden');
                notMatchingFeedback.classList.add('show');
                return;
            }
            else {
                notMatchingFeedback.classList.remove('show');
                notMatchingFeedback.classList.add('hidden');
                for (const drink of data.drinks) {
                    cocktailList.innerHTML += `<li><div class="cocktail" data-name="${drink.strDrink}"><h2>${drink.strDrink}</h2><img class="img" src="${drink.strDrinkThumb}"/></div></li>`;
                }
                listenersFavDrinks();
            }
        });
}

searchButton.addEventListener("click", fetchDataOnSearchClicked);
