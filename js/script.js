// Datos para filtrar//

// Primer filtro: Adopciones //

const dwjean = [

//Adopciones//

{id: 1, name:"Pepe", image: "img/karsten-winegeart-BJaqPaH6AGQ-unsplash.jpg", genero: "Adopciones", description: "Cachorrito dulce y jugueton con una personalidad encantadora. Está buscando una familia amorosa que le ofrezca un hogar cálido y lleno de diversión." },
{id: 2, name:"Lolito", image: "img/victor-g-N04FIfHhv_k-unsplash.jpg", genero: "Adopciones", description: "Perrito noble y juguetón, con un corazón enorme y mucho amor por dar. Busca un hogar seguro y acogedor donde pueda crecer rodeado de cariño y convertirse en tu mejor amigo." },
{id: 3, name:"Juanita", image: "img/alvan-nee-8g0D8ZfFXyA-unsplash.jpg", genero: "Adopciones", description: "Cachorrita tierna y amigable, disfruta pasar tiempo con las personas y llenar cada momento de alegría. Sueña con encontrar una familia que la cuide y la haga sentir especial." },
{id: 4, name:" Ted", image: "img/david-lezcano-m-Doa-GTrUw-unsplash.jpg", genero: "Adopciones", description: "Perrito cariñoso y lleno de energía, le encanta jugar y recibir mimos. Está buscando una familia que le dé mucho amor, cuidado y un hogar donde pueda ser feliz." },

//Donaciones//

{id: 1, name:"Croquetas para nuestros peluditos", image: "img/jametlene-reskp-fliwkBbS7oM-unsplash.jpg", genero: "Donaciones", description: "Dona aqui para la compra de croquetas para animales en situacion de calle." },
{id: 1, name:"Operaciones y cirugias para los animalitos", image: "img/t-r-photography-TzjMd7i5WQI-unsplash.jpg", genero: "Donaciones", description: "Dona aqui para poder sustentar las peraciones y cirugias de nuestros amiguitos." },
{id: 1, name:"Medicinas y vacunas para estos animalitos", image: "img/milli-2l0CWTpcChI-unsplash.jpg", genero: "Donaciones", description: "Dona aqui para las medicinas y vacunas para estos animales que no tienen un dueño que se las den." },
{id: 1, name:"Construccion de casitas para los mejores amigos del hombre", image: "img/alvan-nee-eoqnr8ikwFE-unsplash.jpg", genero: "Donaciones", description: "Dona aqui para la construccion de casitas para que estos pequeños tengan donde dormir en lo que encuentran un hogar." },

];

// Obtener los contenedores y botones del DOM
const dwjeanContainer = document.getElementById("adopcion-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    let dwjeanToRender = [];
    if (genero === "all") {
        dwjeanToRender = dwjean;
    } else {
        dwjeanToRender = dwjean.filter(dwjean => dwjean.genero === genero);
    }

}