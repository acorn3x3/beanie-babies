/* Imports */
// > Part A: Import `getBeanieBabies` from fetch-utils.js
// > Part B: Import `getastrosign` from fetch-utils.js
//import { renderContinentOption, renderCountry } from './render-utils.js';

/* Get DOM Elements */
const notificationDisplay = document.getElementById('notification-display');
const searchForm = document.getElementById('search-form');
const astrosignSelect = document.getElementById('astroSign-select');
const beanieBabyList = document.getElementById('beanie-list');

/* State */
let error = null;
let count = 0;
let astrosign = [];
let beanieBabies = [];

/* Events */
window.addEventListener('load', async () => {
    // > Part A: call findBeanieBabies (with no arguments)
    findBeanieBabies();

    // > Part B: await the call to get astrosign to get the response

    // > Part B: Assign to state the:
    //      - error,
    //      - data (to the astrosign variable)

    if (!error) {
        displayContinentOptions();
    }
});

async function findBeanieBabies(title, astrosign) {
    // > Part A: Call the service function that gets the BeanieBabies

    // > Part C: Add the title and astrosign arguments to getBeanieBabies

    // > Part A: Assign to state the :
    //      - error,
    //      - data (to the BeanieBabies variable)

    // > Part D: Assign to state the:
    //      - count (of db records)

    displayNotifications();
    if (!error) {
        displayBeanieBabies();
    }
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    // > Part C: Call findBeanieBabies with name and continent from formData
});

/* Display Functions */
function displayBeanieBabies() {
    countryList.innerHTML = '';

    for (const beanieBaby of beanieBabies) {
        // > Part A: render and append to list
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

function displayContinentOptions() {
    for (const astrosign of astrosigns) {
        // > Part B: render and append options to select
    }
}
