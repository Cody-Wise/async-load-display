// import functions and grab DOM elements

import { getCandies, getDogs, getPresidents, getBasketballPlayers } from './fetch-utils.js';
import { renderCandies, renderDogs, renderPresidents, renderBasketballPlayers } from './render-utils.js';

// let state

const candyListEl = document.querySelector('.candies-list');
const dogsListEl = document.querySelector('.dogs-list');
const presidentsListEL = document.querySelector('.presidents-list');
const basketballPlayersEL = document.querySelector('.basketball-players-list');


window.addEventListener('load', async () => {

    fetchAndDisplayCandies();
    fetchAndDisplayDogs();
    fetchAndDisplayPresidents();
    fetchAndBasketBallPlayers();
  
});






async function fetchAndDisplayCandies(){

    const candies = await getCandies();

    for (let candy of candies){

        const candiesEl = renderCandies(candy);

        candyListEl.append(candiesEl);


    }



}

async function fetchAndDisplayDogs(){

    const dogs = await getDogs();

    for (let dog of dogs){

        const dogsEl = renderDogs(dog);

        dogsListEl.append(dogsEl);


    }



}

async function fetchAndDisplayPresidents(){

    const presidents = await getPresidents();

    for (let president of presidents){

        const presidentsEl = renderPresidents(president);

        presidentsListEL.append(presidentsEl);


    }

}

async function fetchAndBasketBallPlayers(){

    const players = await getBasketballPlayers();

    for (let player of players){

        const playersEl = renderBasketballPlayers(player);

        basketballPlayersEL.append(playersEl);


    }



}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
