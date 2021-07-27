var nombre = document.getElementById('campo1');
var apellidos = document.getElementById('campo2');
var email = document.getElementById('correo');
var city = document.getElementById('ciudad');

var password = document.getElementById('contraseña');


var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario() {
    var mensajesError = [];
    if (nombre.value === null || nombre.value === '') {
        mensajesError.push('Ingresa tu nombre');

    }



    if (apellidos.value === null || apellidos.value === '') {
        mensajesError.push('Ingresa tus apellidos');
    }


    if (email.value == null || email.value === '') {
        mensajesError.push('Ingrese su correo');
    }


    if (city.value === null || city.value === '') {
        mensajesError.push('Ingrese su ciudad');
    }



    error.innerHTML = mensajesError.join('<br> <br>');

    return false;
}