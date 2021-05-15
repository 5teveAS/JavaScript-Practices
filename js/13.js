// Objetos


const producto = { //Esto es un objeto.
    nombreProducto: "Monitor 20 pulgadas",
    precio : 300,
    disponible: true
}

const medidas = {

    peso: '1kg',
    medida: '1m'

}

const nuevoProducto = { ...producto, ...medida };//se le suman las propiedades de los 2 objetos.

console.log(producto);
console.log(nuevoProducto);