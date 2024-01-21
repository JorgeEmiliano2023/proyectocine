const URL = 'https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies'

fetch(URL)
    .then(res=>res.json())
    .then(json=>console.log(json))



console.log('==================================================');
console.log('==================================================');

let contenedorTarjetas = document.getElementById('contenedorTarjetas');


fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
    .then( response => response.json() )
    .then( data => {

        const misPeliculas = data;

        misPeliculas.forEach(pelicula => {

            let card = document.createElement('div');
            card.classList.add("card");
            card.style.width = "20rem"
            card.style.marginBottom = "50px"

            let imagen = document.createElement('img');
            imagen.classList.add("card-img-top");
            imagen.src = pelicula.Poster;
            imagen.alt = ''

            card.appendChild(imagen);

            let cardBody = document.createElement('div');
            cardBody.classList.add("card-body");
            
            let nombrePelicula = document.createElement('h4');
            nombrePelicula.classList.add("card-title");
            nombrePelicula.innerText = pelicula.Title;

            cardBody.appendChild(nombrePelicula);

            let añoPelicula = document.createElement('h5');
            añoPelicula.classList.add("card-year");
            añoPelicula.innerText = pelicula.Year;

            cardBody.appendChild(añoPelicula);

            let tiempoPelicula = document.createElement('h6');
            tiempoPelicula.classList.add("card-time");
            tiempoPelicula.innerText = pelicula.Runtime;

            cardBody.appendChild(tiempoPelicula);
            
            card.appendChild(cardBody);

            contenedorTarjetas.appendChild(card);

        });
    })