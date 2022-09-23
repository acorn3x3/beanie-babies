/* Imports */
// > Part A: Import `getBeanieBabies` from fetch-utils.js
// > Part B: Import `getastroSign` from fetch-utils.js

import { getBeanieBabies, getAstrosigns } from './fetch-utils.js';
import { renderBeanieBaby, renderAstrosignOption } from './render-utils.js';

/* Get DOM Elements */
const notificationDisplay = document.getElementById('notification-display');
const searchForm = document.getElementById('search-form');
const astroSignSelect = document.getElementById('astrosign-select');
const beanieBabyList = document.getElementById('beanie-list');

/* State */
let error = null;
//let count = 0;
let astroSigns = [];
let beanieBabies = [];

/* Events */
window.addEventListener('load', async () => {
    // > Part A: call findBeanieBabies (with no arguments)
    findBeanieBabies();

    const response = await getAstrosigns();

    error = response.error;
    astroSigns = response.data;
    // > Part B: await the call to get astrosign to get the response

    // > Part B: Assign to state the:
    //      - error,
    //      - data (to the astrosign variable)

    if (!error) {
        displayAstroSignOptions();
    }
});

async function findBeanieBabies(name, astroSign) {
    const response = await getBeanieBabies(name, astroSign);
    // > Part A: Call the service function that gets the BeanieBabies

    // > Part C: Add the title and astrosign arguments to getBeanieBabies

    // > Part A: Assign to state the :
    //      - error,
    //      - data (to the BeanieBabies variable)
    // console.log(response.data);
    error = response.error;
    beanieBabies = response.data;
    count = response.count;

    // > Part D: Assign to state the:
    //      - count (of db records)

    displayNotifications();
    if (!error) {
        displayBeanieBabies();
    }
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //const formData = new FormData(searchForm);

    // > Part C: Call findBeanieBabies with name and astrosign from formData
});

/* Display Functions */
function displayBeanieBabies() {
    beanieBabyList.innerHTML = '';

    for (const beanieBaby of beanieBabies) {
        // > Part A: render and append to list
        const beanieBabyEl = renderBeanieBaby(beanieBaby);
        beanieBabyList.append(beanieBabyEl);
    }
}

function displayNotifications() {
    if (error) {
        notificationDisplay.classList.add('error');
        notificationDisplay.textContent = error.message;
    } else {
        notificationDisplay.classList.remove('error');
        // > Part D: Display a message with
        //      - how many items were returned in BeanieBabies array
        //      - how many total matching BeanieBabies were in the db
    }
}

function displayAstroSignOptions() {
    for (const astroSign of astroSigns) {
        const option = renderAstrosignOption(astroSign);
        astroSignSelect.append(option);
        // > Part B: render and append options to select
    }
}
