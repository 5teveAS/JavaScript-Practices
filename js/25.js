const carrito = [ //Arreglo de Objetos
    { nombre: 'Monitor 20 Pulgadas', precio:500 },
    { nombre: 'Television 50 Pulgadas', precio:700 },
    { nombre: 'Tablet', precio:300 },
    { nombre: 'Audifonos', precio:200 },
    { nombre: 'Teclado', precio:50 },
    { nombre: 'Celular', precio:500 },
    { nombre: 'Bocinas', precio:300 },
    { nombre: 'Laptop', precio:800 },
];

//ForEach y map solamente se pueden ejecutar en arreglos

// ForEach

// carrito.forEach(function(producto) {
//     // console.log(producto);
//     console.log(producto.nombre);
// });

//De manera resumida → Arrow function
//Cuando solo tenemos una linea de codigo las llaves son opcionales
// carrito.forEach(producto => console.log(producto.nombre));

//otra manera dando por implicito el return
 const arreglo1 = carrito.forEach(producto => producto.nombre);


// map
const arreglo2 = carrito.map(producto => producto.nombre);
 
// NO SIRVE PORQUE?? //const arreglo2 = carrito.map(producto => '${producto.nombre} - #{producto.precio}');

/*Aunque hacen los mismo haciendo de la primera forma, de esta, en la consola solo uno
tendra informacion. Cuando quieras mostrar algo en consola o imprimir algo en el html 
utiliza el forEach, que esta disenado para iterar y mostrar los resultados.
El map se utiliza para hacer nuevos arreglos*/


console.log(arreglo1);
console.log(arreglo2);