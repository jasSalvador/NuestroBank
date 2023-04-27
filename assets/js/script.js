/* Cuando el usuario completa el formulario, y hace clic en el botón enviar, debe aparecer una alerta la cual 
será interpolada completamente usando la nueva forma de ECMAScript 6 para interpolar cadenas: */

//evento click boton
document.getElementById("btnSubmit").addEventListener("click", (event) => {  
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let motivo = document.getElementById("motivo").value;
    let mensaje = document.getElementById("mensaje").value;

    if(validar(nombre, apellido, correo, motivo, mensaje)){ //llamada funcion validar

    alert(`DE: ${nombre} ${apellido} (${correo}) \n ASUNTO: ${motivo} \n MENSAJE: \n ${mensaje}`)
    }
});

//validacion
const validar = (nombre, apellido, correo, motivo, mensaje) => {
    //valida q no hayan datos vacios
    if (nombre == '' || apellido == '' || correo == '' || motivo == '' || mensaje == '') {
        alert("Debes ingresar todos los datos");
        return false;
    }
    return true;
};


