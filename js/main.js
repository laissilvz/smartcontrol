const usuario = prompt("Digite seu nome e sobrenome");

const bemVindo = document.querySelector("#saudacao");

setInterval(() => {
    bemVindo.innerHTML = `Olá, ${usuario}! Hoje é ${new Date().toLocaleString("pt-BR")}`;
}, 1000);

const saudacao = document.getElementById("saudacao");

const hora = new Date().getHours();

if (hora < 12) {
    saudacao.textContent = "Bom dia!";
} else if (hora < 18) {
    saudacao.textContent = "Boa tarde!";
} else {
    saudacao.textContent = "Boa noite!";
}


const campoBusca = document.getElementById("campoBusca");
const itens = document.querySelectorAll("#listaComodos li");
const resultadoBusca = document.getElementById("resultadoBusca");

campoBusca.addEventListener("input", function () {

    const texto = campoBusca.value.toLowerCase().trim();
    let encontrados = 0;

    itens.forEach(function (item) {

        const nomeComodo = item.querySelector("h2").textContent.toLowerCase();

        if (nomeComodo.includes(texto)) {
            item.classList.remove("oculto");
            encontrados++;
        } else {
            item.classList.add("oculto");
        }

    });

    if (texto === "") {
        resultadoBusca.textContent = "";
    } else if (encontrados === 0) {
        resultadoBusca.textContent = "Nenhum cômodo encontrado.";
    } else {
        resultadoBusca.textContent = encontrados + " cômodo(s) encontrado(s).";
    }

});


const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        temaBtn.textContent = "☀️ Light Mode";
    } else {
        temaBtn.textContent = "🌙 Dark Mode";
    }

});


const menuBtn = document.getElementById("menuBtn");
const menuLateral = document.getElementById("menuLateral");
const fecharMenu = document.getElementById("fecharMenu");

menuBtn.addEventListener("click", function () {

    menuLateral.classList.toggle("aberto");

});

fecharMenu.addEventListener("click", function () {

    menuLateral.classList.remove("aberto");

});