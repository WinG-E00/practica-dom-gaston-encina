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

//boton para subir personaje
const btnSubirPersonae = document.querySelector("#btnSubirPersonaje");

//Formulario para subir personajes
const formularioPersonajes = document.querySelector("#formularioPersonajes");


console.log(rowHeroContainer)



// Feature para ver los personajes
btnCharacterView.addEventListener('click', () => {

  if (rowHeroContainer.children.length > 0) {
    console.log("Este elemento ya tiene algo");
    return;
  }

  personajes.forEach(heroe => {

    rowHeroContainer.insertAdjacentHTML(
      'beforeend',
      `<div class="col">
        <div class="card" style="width: 18rem;" data-id="${heroe.id}">
          <img src="${heroe.imagen}" class="card-img-top" alt="${heroe.nombre}">
          <div class="card-body">
            <h5 class="card-title">${heroe.nombre}</h5>
          </div>
          <button class="btn btn-danger" id="btnEliminarPersonaje">
            Eliminar Personaje
          </button>
        </div>
      </div>`
    );

  });

});




//Feature agregar personaje

function renderPersonajes() {
    rowHeroContainer.innerHTML = ""; // limpia todo

    personajes.forEach(heroe => {
        rowHeroContainer.insertAdjacentHTML(
            "beforeend",
            `<div class="col">
                <div class="card" style="width: 18rem;" data-id="${heroe.id}">
                    <img src="${heroe.imagen}" class="card-img-top" alt="${heroe.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${heroe.nombre}</h5>
                    </div>
                    <button class="btn btn-danger" id="btnEliminarPersonaje">
                        Eliminar
                    </button>
                </div>
            </div>`
        );
    });
}


formularioPersonajes.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombreForm = document.querySelector("#nombre");
    const imagenForm = document.querySelector("#imagen");

    personajes.push({
        id: personajes.length + 1 ,
        nombre: nombreForm.value,
        imagen: imagenForm.value
    });

    renderPersonajes()
    console.log(personajes);
});



//FEATURE para eliminar a los personajes
rowHeroContainer.addEventListener('click', (event) => {

  console.log(event.target.id)

  if (event.target.id == "btnEliminarPersonaje") {

    console.log(event.target.parentElement.dataset.id)
    const idDataset = event.target.parentElement.dataset.id;


    const dataSetIdtoNumber = Number(idDataset) - 1;

    console.log(dataSetIdtoNumber)

    const index = personajes.findIndex(p => p.id == Number(idDataset));

    if (index !== -1) {
      personajes.splice(index, 1);
    }

    console.log(personajes);
    renderPersonajes();
  }
});







