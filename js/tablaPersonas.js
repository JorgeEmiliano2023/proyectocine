console.log('Hola soy la tabla productos');

let mostrarPersonas = document.getElementById('mostrarDatos');

let registroPersona = localStorage.getItem('PersonasRegistradas');

console.log(registroPersona);

console.log(registroPersona.length);

registroPersona = JSON.parse(registroPersona);

console.log(registroPersona);

console.log(registroPersona);



mostrarPersonas.addEventListener('click', (e) => {
    e.preventDefault();

    let tabla = document.getElementById('miTabla');

    for (let i = 0; i < registroPersona.length; i++) {
        
        let fila = document.createElement('tr');

        let celdaNombre = document.createElement('td');
        let celdaApellido = document.createElement('td');
        let celdaEmail = document.createElement('td');

        celdaNombre.textContent = registroPersona[i].nombre;
        celdaApellido.textContent = registroPersona[i].apellido;
        celdaEmail.textContent = registroPersona[i].email;

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaApellido);
        fila.appendChild(celdaEmail);

        tabla.appendChild(fila);
    }
})