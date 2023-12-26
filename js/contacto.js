let contacto = document.getElementById('botonEnviar')
let misConsultas = [];

contacto.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);

    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;
    let motivo = document.getElementById('motivo').value;
    let consulta = document.getElementById('consulta').value;

    if (nombre == "" || correo == "" || telefono == "" || motivo=="" || consulta == "") {
        alert('Debe llenar todos los campos');
        return;
    } if (telefono.length != 10) {
            alert('Campo telefono mal ingresado');
            return;
    } if (consulta.length > 100) {
        alert('Supero el numero de caracteres que puede ingresar en la consulta');
        return;
    } else {
        cargarDatos(nombre, correo ,telefono, motivo, consulta);
        alert('Su consulta fue enviada con exito');
    }

    borrarDatosForm();

})

const cargarDatos = (nombre, correo, telefono, motivo, consulta) => {

    console.log(`El producto guardado en la DB es: ${nombre} ${correo} ${telefono} ${motivo} ${consulta}`);

    let consultas = {
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        motivo: motivo,
        consulta: consulta
    }

    misConsultas.push(consultas);
    localStorage.setItem('Consultas', JSON.stringify(misConsultas));
    console.log(misConsultas);
}

const borrarDatosForm = () => {
    let miFormulario = document.getElementById('miFormulario');
    miFormulario.reset();
}