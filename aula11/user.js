var users = JSON.parse(localStorage.getItem("users")) || [];

var logado = JSON.parse(localStorage.getItem("logado")) || {};

var acessou = document.getElementById("acessou")
if (acessou && logado) {
    acessou.innerHTML = "Olá " + logado.nome
}

/*function name(parametro)
return
*/

function createButton(text, classes, i){
    let bt = document.createElement("a");
    bt.innerHTML = text;

    classes.forEach(c => {
        bt.classList.add(c);
    })

    bt.classList.add("cursor-pointer");
    bt.classList.add("px-3");
    bt.classList.add("mx-4");
    bt.classList.add("hover:shadow");
    bt.classList.add("shadow-md");
    bt.classList.add("text-white");
    bt.classList.add("rounded-full");
    // aqui vai vir todas as classes estaticas para estilizar o botão
    bt.dataset.id = i;
    return bt;
}

var list = document.getElementById("list");
if (list) {
    let i = 0;

    users.forEach((u) => {
        let tdName = document.createElement("td");
        tdName.innerHTML = u.nome;

        let tdEmail = document.createElement("td");
        tdEmail.innerHTML = u.email;

        let tdAction = document.createElement("td");
        tdAction.appendChild(
            createButton("V", "show", i)
        );

        let span = document.createElement("span");
        span.innerHTML = " - ";
        tdAction.appendChild(span);
        tdAction.appendChild(
            createButton("X", "remove", i)
        );

        let tr = document.createElement("tr");
        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdAction);

        list.appendChild(tr);

        i++;
    });
}

var shows = document.querySelectorAll("show");
shows.forEach((s) => {
    s.addEventListener("click", () => {
        let i = s.id;
        s.innerHTML = users[i].nascimento;
    });
});


var botoesR = document.querySelectorAll(".remove");
botoesR.forEach((b) => {
    b.addEventListener("click", () => {
        const id = b.dataset.id;
        users.splice(id, 1)
        localStorage.setItem("users", JSON.stringify(users))
        window.location.href = "painel.html"
    });
});


var formR = document.getElementById("formRegister");
formR?.addEventListener("click", (e) => {
    e.preventDefault();

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

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    const modalRegister = document.getElementById("modalRegister");
    modalRegister.classList.remove("flex");
    modalRegister.classList.add("hidden");
    window.location.href = "painel.html"
})

var btL = document.getElementById("btLogin");
if (btL) btL.addEventListener("click", (e) => {
    e.preventDefault();

    let email = document.getElementById("iEmailLogin").value;
    let pass = document.getElementById("iPassLogin").value;

    let user = users.find(u => {
        return u.email == email
    })

    if (!user) {//not usuario
        console.log("usuário não encontrado")
        return
    }

    if (user.senha == pass) {
        console.log("usuário logado")
        localStorage.setItem("logado", JSON.stringify(user))
        window.location.href = "painel.html"
    } else {
        console.log("senha invalida")
    }
})








var users = JSON.parse( localStorage.getItem("users") ) || [];

var loggeded = JSON.parse( localStorage.getItem("loggeded") ) || {};
var hello = document.getElementById("hello");
if(hello && loggeded) hello.innerHTML = "Olá " + loggeded.nome

/*function name(parametro1, p2){
    return
}*/



function createButton(text, classes, i){
    let bt = document.createElement("a");
    bt.innerHTML = text;

    classes.forEach(c => {
        bt.classList.add(c);
    })

    bt.classList.add("cursor-pointer");
    bt.classList.add("px-3");
    bt.classList.add("mx-4");
    bt.classList.add("hover:shadow");
    bt.classList.add("shadow-md");
    bt.classList.add("text-white");
    bt.classList.add("rounded-full");
    // aqui vai vir todas as classes estaticas para estilizar o botão
    bt.dataset.id = i;
    return bt;
}

var listUsers = document.getElementById("listUsers")
if(listUsers){
    let i = 0;
    users.forEach( (u) => {
        let tdName = document.createElement("td");
        tdName.innerHTML = u.nome;

        let tdEmail = document.createElement("td");
        tdEmail.innerHTML = u.email;

        let tdAction = document.createElement("td");
        tdAction.appendChild( createButton("V", ["show","bg-primary"], i) );
        tdAction.appendChild( createButton("X", ["remove","bg-red"], i) );

        let tr = document.createElement("tr");
        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdAction);

        listUsers.appendChild(tr);
        //i = i + 1;
        //i += 1;
        i++;
    });
}

var botoesV = document.querySelectorAll(".show");
botoesV.forEach((b) => {
    b.addEventListener("click",  ()=>{
        const id = b.dataset.id;
        b.innerHTML = users[id].nascimento;
    })
})

var botoesR = document.querySelectorAll(".remove");
botoesR.forEach((b)=>{
    b.addEventListener("click", ()=>{
        const id = b.dataset.id;
        users.splice(id, 1);
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "painel.html"
    })
})


var formR = document.getElementById("formRegister");
formR?.addEventListener("click", (e) => {
    e.preventDefault();

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

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    const modalRegister = document.getElementById("modalRegister");
    modalRegister.classList.remove("flex");
    modalRegister.classList.add("hidden");
    window.location.href = "painel.html"
})

var btL = document.getElementById("btLogin");
if(btL) btL.addEventListener("click", (e) => {
    e.preventDefault();

    let email = document.getElementById("iEmailLogin").value;
    let pass = document.getElementById("iPassLogin").value;

    let user = users.find(u => {
        return u.email == email
    })

    if(!user){//not usuario
        console.log("usuário não encontrado")
        return
    }

    if(user.senha == pass){
        console.log("usuário logado")
        localStorage.setItem("loggeded", JSON.stringify(user))
        window.location.href = "painel.html"
    }else{
        console.log("senha invalida")
    }
})