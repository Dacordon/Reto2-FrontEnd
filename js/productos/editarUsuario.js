function activaEditar() {
    $("#nuevo").hide(500);
    $("#idEdit").focus();
    $("#editar").show(500);
    $("#nuevoRegistro").hide(500)
    $("#listado").hide(500);
}

function editarRegistro (correo,pass){
    activaEditar();
	$.ajax({    
        url: "http://localhost:80/api/user/"+correo+"/"+pass,
	//data: "{}",
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8", 
    success : function(respuesta) {
        console.log(respuesta.id);
        $("#idEdit").val(respuesta.id);
        $("#identificationEdit").val(respuesta.identification);
        $("#nameEdit").val(respuesta.name);
        //$("#availabilityEdit").val(respuesta.availability);
        $("#addressEdit").val(respuesta.address);
        $("#cellPhoneEdit").val(respuesta.cellPhone);
        $("#emailEdit").val(respuesta.email);
        $("#passwordEdit").val(respuesta.password);
        $("#zoneEdit").val(respuesta.zone);
        $("#typeEdit").val(respuesta.type);
	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status + json);
    }
});
}

function actualizar() {

    //crea un objeto javascript
    let datos = {
        id: $("#idEdit").val(),
        identification: $("#identificationEdit").val(),
        name: $("#nameEdit").val(),
        address: $("#addressEdit").val(),
        cellPhone: $("#cellPhoneEdit").val(),
        email: $("#emailEdit").val(),
        password: $("#passwordEdit").val(),
        zone: $("#zoneEdit").val(),
        type: $("#typeEdit").val()
    }

    

        //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
        let datosPeticion = JSON.stringify(datos);

        $.ajax({
            // la URL para la petición (url: "url al recurso o endpoint")
            url: "http://localhost:80/api/user/update",
            // la información a enviar
            // (también es posible utilizar una cadena de datos)
            //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
            data: datosPeticion,

            // especifica el tipo de petición http: POST, GET, PUT, DELETE
            type: 'PUT',

            contentType: "application/JSON",

            // el tipo de información que se espera de respuesta
            //dataType: 'json',

            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success: function (respuesta) {
                //escribe en la consola del desarrollador para efectos de depuración
                console.table(respuesta);
                $("#mensajes").show(1000);
                $("#mensajes").html("Registro actualizado...");
                $("#mensajes").hide(1000);
                listar();
                estadoInicial();
            },

            // código a ejecutar si la petición falla;
            // son pasados como argumentos a la función
            // el objeto de la petición en crudo y código de estatus de la petición
            error: function (xhr, status) {
                $("#mensajes").show(1000);
                $("#mensajes").html("Error peticion PUT..." + status);
            }
        });
    
}