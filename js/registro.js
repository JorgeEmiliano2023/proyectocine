let registro = document.getElementById('botonEnviar');
registroPersona = [];

registro.addEventListener('click' , (e) =>{

    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('correo').value;
    let password = document.getElementById('contraseña').value;
    let password2 = document.getElementById('contraseña2').value;

    if(nombre == "" || apellido =="" || email =="" || password =="" || password2 == ""){
        swal('Problema!!!!!' , 'Se observan campos vacios, debe llenar todos los campos', 'error');
        return;
    } if (password.length < 6) {
        swal('Problema!!!!!' , 'La contraseña no cumple con los requisitos', 'error');
        return;
    }  if (password != password2) {
        swal('Problema!!!!!' , 'Contraseña mal escrita', 'error');
        return;
    } else {
    cargarDatos(nombre, apellido, email, password, password2);
        swal('¡¡¡Felicitaciones!!!' , 'Usted ya fue registrado' , 'success');
}

borrarDatosForm();

})

const cargarDatos = (nombre, apellido, email, password, password2) => {

    let registro = {

        nombre : nombre,
        apellido : apellido,
        email : email,
        password : password,
        password2 : password2,
    }

    registroPersona.push(registro);
    localStorage.setItem('PersonasRegistradas', JSON.stringify(registroPersona));

}

const borrarDatosForm = () => {
    let miFormulario = document.getElementById('miFormulario');
    miFormulario.reset();
}