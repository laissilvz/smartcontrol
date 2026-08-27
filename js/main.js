const usuario = prompt("Digite seu nome e sobrenome");

const bemVindo = document.querySelector("#saudacao");

setInterval(() => {
    bemVindo.innerHTML = `Olá, ${usuario}! Hoje é ${new Date().toLocaleString("pt-BR")}`;
}, 1000);