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
            opcionesMenu = `<li><a href="ordenes.html" class="card-link">Lista de Ordenes</a></li>`;
        else if (userJS.type=='ADM')
            opcionesMenu = `<li><a href="usuarios.html" class="card-link">Lista de Usuarios</a></li>
                            <li><a href="productos.html" class="card-link">Lista de Accesorios</a></li>`;
        else if (userJS.type=='COORD')
            opcionesMenu = `<li><a href="estadordenes.html" class="card-link">Aprobar Ordenes</a></li>`;

        $("#opciones").html(opcionesMenu);
    }
    
}