//função de login, para encaminhar até a pagina home
function login(){
    var login = document.getElementById('ilogin').value;
    var senha = document.getElementById('isenha').value;

    if(login == "admin@gatonauta" && senha == "123"){
        location.href = "home.html";
        //alert('Por enquanto é só, aguarde as novas atualizações.')
    } else{
        alert('Usuário ou senha incorretos')
    }
};

// ativa ou desativa a classe ao clique no hamburguer
const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event){
    if(event.type === 'touchstart')event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    const active= nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'fechar menu')
    } else{
        event.currentTarget.setAttribute('aria-label', 'abrir menu')
    }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)
