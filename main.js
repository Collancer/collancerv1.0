import {storeQuery} from './JS/browse.js';

const signup = document.querySelector('#show_signup');
const exit = document.querySelectorAll('.close-btn');
const continueButton = document.querySelector('#continue-signup');
// input field for main search bar
const input = document.querySelector('.search-bar input');

// show signup form
signup.addEventListener('click', () => {
    document.getElementsByClassName("container-login")[1].style.display = "block";
});

// show login form
document.getElementById("show_login").onclick = function() {
    document.getElementsByClassName("container-login")[0].style.display = "block";
}

// exit login or signup form
exit.forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.style.display = "none";
    });
});

continueButton.addEventListener('click', () => {
    const url = './html/signup.html';
    retrieveHTML(url);
});

// search query entered by user
input.addEventListener('keyup', e => {
    let url = './html/browse.html';
    let userInput = input.value;
    if (e.key === 'Enter' ) {
        retrieveHTML(url);
        storeQuery(userInput);
    }
});

/**
 * Retrieve the html of a file
 * @param {String} url 
 */
async function retrieveHTML(url) {
    await fetch(url)
        .then(window.location.assign(url))
        .catch(err => console.log(err));
}