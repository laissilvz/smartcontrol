// ==========================================
// VOLTAR PARA O DASHBOARD
// ==========================================

function voltarDashboard() {

    window.location.href = "dashboard.html";

}


// ==========================================
// CADASTRAR DISPOSITIVO
// ==========================================

const formCadastro = document.getElementById("formCadastro");

if (formCadastro) {

    formCadastro.addEventListener("submit", function(event) {

        // Impede o navegador de recarregar a página
        event.preventDefault();


        // Pega os valores digitados
        const nome = document.getElementById("nome").value;
        const comodo = document.getElementById("comodo").value;


        // Verifica se os campos foram preenchidos
        if (nome.trim() === "" || comodo.trim() === "") {

            alert("Preencha todos os campos.");

            return;
        }


        // Aqui futuramente você pode enviar
        // os dados para um banco de dados.


        alert("Dispositivo cadastrado com sucesso!");


        // Volta para a tela de gerenciamento
        window.location.href = "gerenciar.html";

    });

}


// ==========================================
// REMOVER DISPOSITIVO
// ==========================================

const formRemover = document.getElementById("formRemover");

if (formRemover) {

    formRemover.addEventListener("submit", function(event) {

        event.preventDefault();


        const nome = document.getElementById("nome").value;
        const comodo = document.getElementById("comodo").value;


        if (nome.trim() === "" || comodo.trim() === "") {

            alert("Preencha todos os campos.");

            return;
        }


        // Aqui futuramente você pode fazer
        // a remoção no banco de dados.


        alert("Dispositivo removido com sucesso!");


        // Volta para a tela de gerenciamento
        window.location.href = "gerenciar.html";

    });

}
