let usuario = 'administrador1@cineatlas.com';
let contraseña = 'gtr234T';

// En pagina Login se deben colocar este usuario y contraseña para poder ingresar a pagina Administrador. En la misma se podra encontrar una tabla que contiene la cantidad de personas que se van registrando para ser socios del cine y una api basica de peliculas

const login = () =>{

    let email = document.getElementById('email').value;
    let password = document.getElementById('contraseña').value;
    let form = document.getElementById('formularioLogin');


    if(usuario == '' || password == ''){
        swal('Problema!!!!!' , 'Se observan campos vacios, debe llenar todos los campos', 'error');
        return;
    } if(usuario == email && password == contraseña){
        localStorage.setItem('Admin', JSON.stringify(usuario));
        location.href = '../pages/administrador.html';
    }
    else{
        swal('Problema!!!!!' , 'usuario y/o contraseña incorrectos', 'error');
        return;
    }

    email = '';
    password = '';
    form.reset();
};