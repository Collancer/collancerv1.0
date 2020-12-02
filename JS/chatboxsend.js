window.addEventListener('load', e => {
    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }
    
    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }
    
    function emailSend() {
        Email.send({
                SecureToken:"48d68496-bfee-43bd-acbb-5563ce01eb74",
                To : 'collancertsu@gmail.com',
                From : "collancertsu@gmail.com",
                Subject : "Support Service",
                Body : "And this is the body"
            }).then(
        );
    }
});