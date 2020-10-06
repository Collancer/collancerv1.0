window.addEventListener('load', function () {
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

    // leads to signup page on continue--THIS NEEDS WORK!!
    continueButton.addEventListener('click', () => {
       window.location.href = "./html/signup.html";
    });

    // search query entered by user
    input.addEventListener('keyup', e => {
        const url = './html/browse.html';
        if (e.key === 'Enter') {
            retrieveHTML(url);
        }
    })
});

/**
 * Retrieve the html of a file
 * @param {String} url 
 */
async function retrieveHTML(url) {
    await fetch(url)
        .then(response => response.text())
        .then(html => {
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, 'text/html');
            window.location.assign(url);
        })
        .catch(err => console.log(err));
}