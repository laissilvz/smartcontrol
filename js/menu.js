document.addEventListener("DOMContentLoaded", function () {

    const sideMenu = document.getElementById("sideMenu");
    const menuOverlay = document.getElementById("menuOverlay");

    const closeMenu = document.getElementById("closeMenu");

    const escolherComodo = document.getElementById("escolherComodo");

    const roomMenu = document.getElementById("roomMenu");
    const closeRoomMenu = document.getElementById("closeRoomMenu");


    // FECHAR MENU

    function fecharMenu() {

        sideMenu.classList.remove("active");

        menuOverlay.classList.remove("active");

        roomMenu.classList.remove("active");

    }


    // BOTÃO X DO MENU PRINCIPAL

    closeMenu.addEventListener("click", fecharMenu);


    // BOTÃO X DO MENU DE CÔMODOS

    closeRoomMenu.addEventListener("click", fecharMenu);


    // CLICAR FORA

    menuOverlay.addEventListener("click", fecharMenu);


    // ESCOLHER CÔMODO

    escolherComodo.addEventListener("click", function () {

        sideMenu.classList.remove("active");

        roomMenu.classList.add("active");

    });

});


// ABRIR MENU

function abrirMenu() {

    document.getElementById("sideMenu").classList.add("active");

    document.getElementById("menuOverlay").classList.add("active");

}