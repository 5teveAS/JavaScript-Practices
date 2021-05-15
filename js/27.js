// POO → Programacion orientada a objetos, eSTA ES LA FOMRA ANTERIOR A LA REVOLUCION DE 2015 PARA CREAR CLASES EN JS

// Object Literal →
const producto = { //Este es el mas utilizado pero no es muy dinamico que digamos
    nombre: 'Tablet',
    precio: 500
}


// Object Constructor
// En otros lenguajes es como crear una clase → que empieza con: class
function Producto(nombre, precio) /*parametros*/{ //Una clase es una forma en la que va a poder almacenar la forma, como los datos que va a tener un objeto en especifico 
    this.nombre = nombre; //recomendable poner el mismo nombre
    this.precio = precio
}


//El prototype nos va a permitir crear funciones que solo se utilizan en un objeto en espesifico

Producto.prototype.formatearProducto = function() { //funciones que solo se pueden utilizar en Producto
    return `El Producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 49', 800); //Aqui es donde irian los argumentos
const producto3 = new Producto('Laptop', 300);


function formatearProducto(producto) {
    return `El Producto ${producto.nombre} tiene un precio de: ${producto.precio}`;
}

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

// console.log(formatearProducto(producto2));


// IMPORTANTE HACER ESTO PARA UNA POSIBLE PREGUNTA DE TRABAJO