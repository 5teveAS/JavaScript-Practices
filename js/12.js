//"use strict"; //ejecuta el codigo de js de forma estricta para las buenas practicas a huevo y si no mande un error a la consola.
// Objetos


const producto = { //Esto es un objeto.
    nombreProducto: "Monitor 20 pulgadas",
    precio : 300,
    disponible: true
}

//Object.freeze(producto); //freexe no te va a permitir agregar nuevas propiedades ni eliminarlas. Y tampoco permite que el objeto sea modificado.
Object.seal(producto); //freexe no te va a permitir agregar ni eliminar nuevas propiedades. Pero si permite que el objeto sea modificado.

producto.imagen = 'imagen.jpg'; //como se podria observar ya no apareceria este cambio en el console.log

producto.precio = "NUEVO PRECIO";

delete producto.precio;

//console.log(Object.isFrozen(producto)); //verificar si un objeto esta congelado
console.log(Object.isSealed(producto)); //verificar si un objeto esta congelado

console.log(producto);