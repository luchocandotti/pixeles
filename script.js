/* Vamos a crear en un contenedor flex, una grilla de cuadrados 
en la que su cantidad se ajusta a la ventana del ordenador */


//tomamos las dimensiones de la ventana del usuario
const divwidth = Math.round(window.innerWidth / 10);
const filas = window.innerHeight / divwidth;
// const ancho = window.innerWidth / 100;
// const alto = window.innerHeight / 100;
const resolucion = 10 * filas;
console.log(divwidth,resolucion);




// creamos el contenedor de los cuadrados
let container = document.createElement('container');
container.classList.add('container'); /* nombre de la clase */


// creamos los cuadrados en un loop con la restricción de la variable resolucion
for (let step = 0; step < resolucion; step++) {

    let div = document.createElement('div');
        div.classList.add('div'); /* nombre de la clase */
    
    container.appendChild(div); /* ponemos a div como hijo de container */
    document.body.appendChild(container);

    div.style.width = divwidth + "px"; /* esto es repetitivo, debo buscar la forma de que se haga solo una vez, cuando se termine de loopear, porque fuera del loop no me reconoce el div */
    div.style.height = divwidth + "px";
    div.style.opacity = Math.random(100);

}







