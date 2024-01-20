let usuario = 'administrador1@cineatlas.com';
let contraseña = 'gtr234T';

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