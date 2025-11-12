

const fetchButton = document.getElementById('getRandomGifButton');
const SearchButton = document.getElementById('getSearchGifButton');
const gifName = document.getElementById('gif-input');
const gifContainer = document.getElementById('gifContainer');
const errorContainer = document.getElementById('errorContainer');

const API_KEY ='l8t9EivkrWkL61e3YVgC2MslC6FITWAh'; //Klucz kolegi, ponieważ na moim koncie nie działa
const API_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=g`;
const SEARCH_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${gifName}&limit=1`;

async function fetchRandomGif() {
    
    gifContainer.innerHTML = '';
    errorContainer.textContent = '';
    
    gifContainer.textContent = 'Ładowanie...';

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Błąd API: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const gifUrl = data.data.images.original.url;

        if (!gifUrl) {
             throw new Error('Nie znaleziono adresu URL GIF-a w odpowiedzi API.');
        }

        displayGif(gifUrl);

    } catch (error) {
        console.error('Wystąpił błąd:', error);
        displayError(`Nie udało się załadować GIF-a. (${error.message})`);
    }
}

async function fetchSearchGif() {

    const query = gifName.value;

    if (!query) {
        displayError('Musisz wpisać frazę do wyszukania.');
        return;
    }

    const SEARCH_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=1`;

    gifContainer.innerHTML = '';
    errorContainer.textContent = '';
    gifContainer.textContent = 'Ładowanie...';

    try {
        const response = await fetch(SEARCH_URL);

        if (!response.ok) {
            throw new Error(`Błąd API: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (data.data.length === 0) {
            throw new Error('Nie znaleziono GIF-ów dla tej frazy.');
        }

        const gifUrl = data.data[0].images.original.url;

        if (!gifUrl) {
             throw new Error('Nie znaleziono adresu URL GIF-a w odpowiedzi API.');
        }

        displayGif(gifUrl);

    } catch (error) {
        console.error('Wystąpił błąd:', error);
        displayError(`Nie udało się załadować GIF-a. (${error.message})`);
    }
}

function displayGif(url) {
    gifContainer.innerHTML = '';
    
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Losowy GIF z GIPHY';
    
    gifContainer.appendChild(img);
}

function displayError(message) {
    gifContainer.innerHTML = '';
    errorContainer.textContent = message;
}

fetchButton.addEventListener('click', fetchRandomGif);
SearchButton.addEventListener('click', fetchSearchGif);