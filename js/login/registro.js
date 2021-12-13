/**
 * Cargar la libreria de Jquery y ubicar el cursor en el campo de registrar
 */
 $(document).ready(function () {
    estadoInicial()
});

/**
 * Intenta autenticar al usuario en la aplicaciòn
 */
// function registrar2(){
//     //capturar los datos que ingreso el usuario en la pagina
//     let name = $("#username").val()
//     let email = $("#useremail").val()
//     let password = $("#password").val()
//     let repeatpassword = $("#passwordrepeat").val()

//     let datos={
//         email : $("#useremail").val(),
//         password : $("#password").val(),
//         name : $("#username").val()
//     }

//     let datosPeticion = JSON.stringify(datos)

//     //utilizo la funcion de JQuery $.ajax para hacer un llamado asincrono
//     //a un ws
//     $.ajax({
//         //url del servicio
//         url: "http://localhost:80/api/user/new",
        
//         //envio datos capturados por el usuario a la peticion
//         data: datosPeticion,

//         //tipo de peticion
//         type: 'POST',

//         contentType: "application/JSON",

//         //tipo de contenido
//         dataType: 'json',

//         //success: funcion con acciones si todo sale ok
//         success: function (respuesta) {
//             //escribe en la consola del desarrollador para efectos de depuración
//             console.log(respuesta);
//             resultado(respuesta)	
//         },

//         //error: funcion con acciones si hay error
//         // código a ejecutar si la petición falla;
//         // son pasados como argumentos a la función
//         // el objeto de la petición en crudo y código de estatus de la petición
//         error: function (xhr, status) {
//             //$("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);		
//             console.log("algo fallo");	
//         },
//         //complete: funcion con al final de la petición
//         // código a ejecutar sin importar si la petición falló o no
//         complete: function (xhr, status) {
//             console.log("Todo super bien"  + status);
//         }
//     });
// }

// /**
//  * valida si en el id viene un dato nulo, o viene el codigo del usuario
//  * 
//  * Configura mensaje de bienvenida o de error según el caso
//  */
// function resultado(respuesta){
//     let id = respuesta.id
//     let nombre= respuesta.name

//     if (id==null)
//         alert("Usuario no registrado : " + nombre)
//     else
//         alert("Bienvenido : " + id + " "+ nombre)

// }

function estadoInicial(){
    $("#name").focus()
}

// Validar usuario
$('#usercheck').hide();   
let usernameError = true;
$('#name').keyup(function () {
    validateUsername();
});
 
function validateUsername() {
  let usernameValue = $('#name').val();
  if (usernameValue.length == '') {
  $('#usercheck').show();
      usernameError = false;
      return false;
  }
  else if((usernameValue.length < 5)||
          (usernameValue.length > 10)) {
      $('#usercheck').show();
      $('#usercheck').html
("**Usuario debe contener de 5 a 10 caractéres");
      usernameError = false;
      return false;
  }
  else {
      $('#usercheck').hide();
  }
}

// // Validar Email
// const email =
// document.getElementById('email');
// email.addEventListener('blur', ()=>{
// let regex =
// /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
// let s = email.value;
// if(regex.test(s)){
//   email.classList.remove(
//         'is-invalid');
//   emailError = true;
// }
// else{
//     email.classList.add(
//           'is-invalid');
//     emailError = false;
// }
// })

// // Validar Password
// $('#passcheck').hide();
// let passwordError = true;
// $('#password').keyup(function () {
//     validatePassword();
// });
// function validatePassword() {
//     let passwrdValue =
//         $('#password').val();
//     if (passwrdValue.length == '') {
//         $('#passcheck').show();
//         passwordError = false;
//         return false;
//     }
//     if ((passwrdValue.length < 5)||
//         (passwrdValue.length > 12)) {
//         $('#passcheck').show();
//         $('#passcheck').html
// ("**La longitud de su contraseña debe estar entre 5 y 12 carácteres");
//         $('#passcheck').css("color", "red");
//         passwordError = false;
//         return false;
//     } else {
//         $('#passcheck').hide();
//     }
// }

// // Validar confirmación de Password
// $('#conpasscheck').hide();
// let confirmPasswordError = true;
// $('#passwordrepeat').keyup(function () {
//     validateConfirmPasswrd();
// });
// function validateConfirmPasswrd() {
//     let confirmPasswordValue =
//         $('#passwordrepeat').val();
//     let passwrdValue =
//         $('#password').val();
//     if (passwrdValue != confirmPasswordValue) {
//         $('#conpasscheck').show();
//         $('#conpasscheck').html(
//             "**No coinciden las contraseñas");
//         $('#conpasscheck').css(
//             "color", "red");
//         confirmPasswordError = false;
//         return false;
//     } else {
//         $('#conpasscheck').hide();
//     }
// }

// // Submit button
// $('#submitbtn').click(function () {
//     validateUsername();
//     validatePassword();
//     validateConfirmPasswrd();
//     //validateEmail();
//     if ((usernameError == true) &&
//         (passwordError == true) &&
//         (confirmPasswordError == true) &&
//         (emailError == true)) {
//         return true;
//     } else {
//         return false;
//     }
// });

// // Mostrar contraseña
// function mostrar() {
//     var x = document.getElementById("password");
//     if (x.type === "password") {
//       x.type = "text";
//     } else {
//       x.type = "password";
//     }
//   }

function registrar() {

    //crea un objeto javascript
    let datos = {
        id: $("#id").val(),
        identification: $("#identification").val(),
        name: $("#name").val(),
        address: $("#address").val(),
        cellPhone: $("#cellPhone").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        zone: $("#zone").val(),
        type: $("#type").val()
    }

    

        //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
        let datosPeticion = JSON.stringify(datos);

        $.ajax({
            // la URL para la petición (url: "url al recurso o endpoint")
            url: "http://localhost:80/api/user/new",
            // la información a enviar
            // (también es posible utilizar una cadena de datos)
            //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
            data: datosPeticion,

            // especifica el tipo de petición http: POST, GET, PUT, DELETE
            type: 'POST',

            contentType: "application/JSON",

            // el tipo de información que se espera de respuesta
            //dataType: 'json',

            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success: function (respuesta) {
                //escribe en la consola del desarrollador para efectos de depuración
                console.table(respuesta);
                //limpia el contenido de los campos del formulario nuevo
                $("#id").val(""),
                $("#identification").val(""),
                $("#name").val(""),
                $("#address").val(""),
                $("#cellPhone").val(""),
                $("#email").val(""),
                $("#password").val(""),
                $("#zone").val(""),
                $("#type").val(""),
                alert("Usuario creado")
            },

            // código a ejecutar si la petición falla;
            // son pasados como argumentos a la función
            // el objeto de la petición en crudo y código de estatus de la petición
            error: function (xhr, status) {
                $("#mensajes").show(1000);
                $("#mensajes").html("Error peticion POST..." + status);
            }
        });
    
}