function login(){
    var login = document.getElementById('ilogin').value;
    var senha = document.getElementById('isenha').value;

    if(login == "admin@gatonauta" && senha == "123"){
        location.href = "home.html";
        //alert('Por enquanto é só, aguarde as novas atualizações.')
    } else{
        alert('Usuário ou senha incorretos')
    }
}