/**
 * Este evento de JQuery se ejecuta cuando se termina de cargar la libreria
 */
 $(document).ready(function () {
    estadoInicial();
});


/**
 * Estado inicial de la pagina, valida si el usuario se encuentra autenticado en la aplicaciòn
 */
 function estadoInicial() {

    let user = sessionStorage.getItem("user");

    if (user== null)
        location.href="index.html";
    else{
        let userJS = JSON.parse(user);
        let typeUser;
        let opcionesMenu="";

        $("#titulo").html("Bienvenido(a): " +  userJS.name);

        //Valida accesos segun perfil
        
       

        if (userJS.type=='ASE')
            opcionesMenu = `<button onclick="window.location.href='ordenes.html';"class="btn btn-dark">Creación Ordenes</button><br><br>
            <button onclick="window.location.href='ordenasesor.html';"class="btn btn-dark">Lista Ordenes</button>`;
        else if (userJS.type=='ADM')
            opcionesMenu =  `<button onclick="window.location.href='usuarios.html';"class="btn btn-dark">Usuarios</button><br><br>
            <button onclick="window.location.href='productos.html';"class="btn btn-dark">Productos</button>`;
        else if (userJS.type=='COORD')
            opcionesMenu = `<button onclick="window.location.href='ordenaprobar.html';"class="btn btn-dark">Revisar ordenes</button>`;

        $("#opciones").html(opcionesMenu);
    }
    
}