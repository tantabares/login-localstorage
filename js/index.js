const USR= "User";
const PSW= "acamica"
function logIn(param) {
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    if((user===USR)&&(pass===PSW)){
        const infoUser = {
            user,
            pass,
        }
        localStorage.setItem("Info",JSON.stringify(infoUser));
        window.location.href= "/login-localstorage/home.html";
    }else {
        alert("La combinación de usuario y contraseña no son válidos");
    }

    console.log(user + ' ' + pass);
}