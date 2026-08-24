var users = JSON.parse(localStorage.getItem("users")) || []
var formR = document.getElementById("formRegister");
formR.addEventListener("submit", (e) => {
    e.preventDefault(); //impede de atualizar a tela

    let name = document.getElementById("iName").value;
    let email = document.getElementById("iEmail").value;
    let pass = document.getElementById("iPass").value;
    let birth = document.getElementById("iBirth").value;

    const user = {//objeto anônimo, estrutura, json
        nome: name,
        email: email,
        senha: pass,
        nascimento: birth
    }

    users.push(user)

    localStorage.setItem("users", JSON.stringify(users))
    

})

var formL = document.getElementById("formLogin")
formL.addEventListener("submit", (e) => {
    e.preventDefault(); //impede de atualizar a tela


    let email = document.getElementById("iEmaillogin").value;
    let pass = document.getElementById("iPasslogin").value;

    let user = users.find(u => {
        return u.email == email
    })

    if (!user) {// not usuario
        console.log("usuario não encontrado")
        return

    }

    if (user.senha == pass) {
        console.log("usuario logado")
        window.location.href = "painel.html"
    } else {
        console.log("senha inválida")
    }
})
