window.addEventListener('load', function () {
    const signup = document.querySelector('#show_signup');
    const exit = document.querySelectorAll('.close-btn');

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
        })
    })
});