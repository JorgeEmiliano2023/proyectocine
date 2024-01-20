let enviarDatos = document.getElementById('botonEnviar');
let misDatos = [];
let eliminarCV = document.getElementById('botonEliminar');

enviarDatos.addEventListener('click', (e) =>{

    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let genero = document.getElementById('genero').value;
    let email = document.getElementById('correo').value;
    let dni = document.getElementById('dni').value;
    let fechaNacimiento = document.getElementById('nacimiento').value;
    let telefono = document.getElementById('telefono').value;
    let cursos = document.getElementById('cursos').value;
    let referencia1 = document.getElementById('referenciasLaborales').value;
    let referencia2 = document.getElementById('referenciasPersonales').value;

    if(nombre == "" || apellido =="" || genero == "" || email =="" || dni =="" || fechaNacimiento == "" || telefono == "" || cursos == "" || referencia1 == "" || referencia2 == ""){
        swal('Problema!!!!!' , 'Se observan campos vacios, debe llenar todos los campos', 'error');
        return;
    }  if (telefono.length != 10) {
        swal('Problema!!!!!' , 'Campo telefono mal ingresado', 'error');
        return;
    } if (cursos.length > 100 || referencia1.length>100 || referencia2.length>100) {
        swal('Problema!!!!!' , 'Supero el numero de caracteres que puede ingresar en la consulta', 'error');
        return;
    }  else {
    cargarDatos(nombre, apellido, genero, email, dni, fechaNacimiento, telefono, cursos, referencia1, referencia2);
        swal('¡¡¡Felicitaciones!!!' , 'Su consulta fue enviada con exito' , 'success');
}

borrarDatosForm();

})



const cargarDatos = (nombre, apellido, genero, email, dni, fechaNacimiento, telefono, cursos, referencia1, referencia2) => {

    let datos = {

        nombre : nombre,
        apellido : apellido,
        genero : genero,
        email : email,
        dni : dni,
        fechaNacimiento : fechaNacimiento,
        telefono : telefono,
        cursos : cursos,
        referencia1 : referencia1,
        referencia2 : referencia2,
    }

    misDatos.push(datos);
    localStorage.setItem('Datos', JSON.stringify(misDatos));

}

const borrarDatosForm = () => {
    let miFormulario = document.getElementById('miFormulario');
    miFormulario.reset();
}
