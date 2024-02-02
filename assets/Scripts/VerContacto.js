function obtenerParametroURL(nombre) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
}


var nombre = obtenerParametroURL('nombre');
var apellido = obtenerParametroURL('apellido');
var numero = obtenerParametroURL('numero');
var correo = obtenerParametroURL('correo');


var detallesContacto = document.getElementById('detallesContacto');
if (detallesContacto) {
    detallesContacto.innerHTML = `
        <p><strong>Nombres:</strong> ${nombre}</p>
        <p><strong>Apellidos:</strong> ${apellido}</p>
        <p><strong>Numero:</strong> ${numero}</p>
        <p><strong>Correo:</strong> ${correo}</p>
    `;
}