window.addEventListener('load', function () {

    document.getElementById("show_login").onclick = function()
    {
        document.getElementsByClassName("container-login")[0].style.display = "block";
    }

    document.getElementById("hide_login").onclick = function()
    {
        document.getElementsByClassName("container-login")[0].style.display = "none";
    }
});

const signup = document.querySelector('.popup');

signup.addEventListener('click', () => {
    
});