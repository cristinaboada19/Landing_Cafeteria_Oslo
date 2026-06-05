document.addEventListener("DOMContentLoaded", function () {
    var lanzador = "#lanzador-menu";
    var desplegable = ".navegacion";
    var despliegaClase = "menu-desplegado";

    function nav() {
        var lanz = document.querySelector(lanzador);

        if (!lanz) {
            console.error("No se encontró el elemento:", lanzador);
            return;
        }

        lanz.addEventListener("click", despliegaMenu, false);
    }

    function despliegaMenu(e) {
        e.preventDefault();
        var despl = document.querySelector(desplegable);

        if (!despl) {
            console.error("No se encontró el menú:", desplegable);
            return;
        }

        despl.classList.toggle(despliegaClase);
    }

    document.querySelector("html").classList.add("js");
    nav();
});