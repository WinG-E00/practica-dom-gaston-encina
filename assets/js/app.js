const personajes = [
  {
    id: 1,
    nombre: "A-Bomb",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg"
  },
  {
    id: 2,
    nombre: "Abe Sapien",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg"
  },
  {
    id: 3,
    nombre: "Abin Sur",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg"
  },
  {
    id: 4,
    nombre: "Abomination",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg"
  },
  {
    id: 5,
    nombre: "Abraxas",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg"
  }
];

//Botones
const btnCharacterView = document.querySelector("#ver_personajes");

//Contedor grid donde van los personajes
const rowHeroContainer = document.querySelector("#row_hero_container");



// Feature para ver los personajes
btnCharacterView.addEventListener('click', () => {
  
  if (rowHeroContainer.textContent != ""){
    return console.log("Este elemento ya tiene algo")
  } else { 
    personajes.forEach(heroe => {

    rowHeroContainer.insertAdjacentHTML(
      'beforeend',
      `<div class="col">
        <div class="card" style="width: 18rem;" data-id"${heroe.id}">
          <img src="${heroe.imagen}" class="card-img-top" alt="${heroe.nombre}">
          <div class="card-body">
            <h5 class="card-title">${heroe.nombre}</h5>
          </div>
          <div class="btn btn-danger" id="btnEliminarPersonaje">Eliminar Personaje</div>
        </div>
      </div>`
    );

  });
  }



  
});



//FEATURE para eliminar a los personajes
rowHeroContainer.addEventListener('click', (event) => {
  console.log(event.target.parentElement)
  console.log(event.target)
  console.log(typeof event.target.id)

  const btnEliminarPersonaje = document.querySelector('#btnEliminarPersonaje');

 //if (event.target.id == "btnEliminarPersonaje" ){
 //   event.target.parentElement.dataset
 // }



})


//Feature para eliminar los personajes intento #1
btnEliminarPersonaje.addEventListener(click, () => {



} );









