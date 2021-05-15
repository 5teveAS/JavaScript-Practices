// Objetos


const producto = { //Esto es un objeto.
    nombreProducto: "Monitor 20 pulgadas",
    precio : 300,
    disponible: true
}

// Forma anterior de hacerlo
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

// Destructuring
const {precio, nombreProducto} = producto; //esto hace lo de arriba pero en un solo paso.Tiene que ser el mismo nombre del dato del objeto.
// const {nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);