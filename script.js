/* Vamos a crear en un contenedor flex, una grilla de cuadrados 
en la que su cantidad se ajusta a la ventana del ordenador */


//tomamos las dimensiones de la ventana del usuario
const ancho = window.innerWidth / 100;
const alto = window.innerHeight / 100;
const resolucion = alto * ancho;
console.log(alto);



// creamos el contenedor de los cuadrados
let container = document.createElement('container');
container.classList.add('container'); /* nombre de la clase */


// creamos los cuadrados en un loop con la restricción de la variable resolucion
for (let step = 0; step < resolucion; step++) {

    let div = document.createElement('div');
        div.classList.add('div'); /* nombre de la clase */
    
    container.appendChild(div); /* ponemos a div como hijo de container */
    document.body.appendChild(container);
}

