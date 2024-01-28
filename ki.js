const btn = document.getElementById('form-input');

btn.addEventListener("submit", function (){
    const username = document.getElementById('email_input').value;
    const password = document.getElementById('password_input').value;

    alert("Tai khoan cua ban: " + username + "Mat khau cua ban " + password);
})