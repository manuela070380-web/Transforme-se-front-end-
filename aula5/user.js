//Transformar texto para objeto
var users = JSON.parse(localStorage.getItem("users")) || [];

var logado = JSON.parse(localStorage.getItem("logado")) || {};

var acessou = document.getElementById("acessou")
if(acessou && logado){
    acessou.innerHTML = "Olá " + logado.name
}
var list  = document.getElementById("list")
if(list){
    list.innerHTML = JSON.stringify(users)
}
var formR = document.getElementById("formRegister");
// get = pegar, elemento = elemento do html

if (formR)
    formR.addEventListener("submit", (e) => {
        e.preventDefault();



        // document é a pagína toda

        let name = document.getElementById("iName").value;
        let email = document.getElementById("iEmail").value;
        let pass = document.getElementById("iPass").value;
        let birth = document.getElementById("iBirth").value;

        const user = {
            nome: name,
            email: email,
            senha: pass,
            nascimento: birth
        }
        users.push(user)

        //Trnasforma objeto para texto
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
    })

var formL = document.getElementById("formLogin");
// get = pegar, elemento = elemento do html

formL?.addEventListener("submit", (e) => {
    e.preventDefault();

    // document é a pagína toda
    let email = document.getElementById("iEmaillogin").value;
    let pass = document.getElementById("iPasslogin").value;

    let user = users.find(u => {
        return u.email == email
    })
    //not usuario
    if (!user) {
        console.log("Usuário não encontrado")
        return
    }

    if (user.senha == pass) {
        console.log("Usuario Logado")
        localStorage.setItem("logado", JSON.stringify(user));
        window.location.href = "painel.html"

    } else {
        console.log("Senha inválida")
    }
})