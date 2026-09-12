document.addEventListener("DOMContentLoaded", function () {

    const sideMenu = document.getElementById("sideMenu");
    const menuOverlay = document.getElementById("menuOverlay");

    const closeMenu = document.getElementById("closeMenu");

    const escolherComodo = document.getElementById("escolherComodo");

    const roomMenu = document.getElementById("roomMenu");
    const closeRoomMenu = document.getElementById("closeRoomMenu");


    function fecharMenu() {

        if (sideMenu) {
            sideMenu.classList.remove("active");
        }

        if (menuOverlay) {
            menuOverlay.classList.remove("active");
        }

        if (roomMenu) {
            roomMenu.classList.remove("active");
        }

    }


    if (closeMenu) {
        closeMenu.addEventListener("click", fecharMenu);
    }


    if (closeRoomMenu) {
        closeRoomMenu.addEventListener("click", fecharMenu);
    }


    if (menuOverlay) {
        menuOverlay.addEventListener("click", fecharMenu);
    }


    if (escolherComodo) {

        escolherComodo.addEventListener("click", function () {

            if (sideMenu) {
                sideMenu.classList.remove("active");
            }

            if (roomMenu) {
                roomMenu.classList.add("active");
            }

        });

    }


    const desconectar = document.getElementById("desconectar");

    if (desconectar) {

        desconectar.addEventListener("click", function () {

            window.location.href = "index.html";

        });

    }

});


function abrirMenu() {

    const sideMenu = document.getElementById("sideMenu");
    const menuOverlay = document.getElementById("menuOverlay");

    if (sideMenu) {
        sideMenu.classList.add("active");
    }

    if (menuOverlay) {
        menuOverlay.classList.add("active");
    }

}