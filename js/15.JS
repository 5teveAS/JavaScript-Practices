//Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];// es mas utilizada la de arriba que esta.

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

// forEach, se ejecuta al menos una ves por cada elemento que hay en el arreglo.
// meses.forEach(function(mes) {
//     console.log(mes);
// });

meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//Includes 
let resultado = meses.includes('Diciembre'); //PARA ARREGLO PLANO
// const resultado2 = carrito.includes('celular'); //da false aun si si esta, es porque es un arrreglo de objetos, en lugar de utilizar includes se utiliza Some
resultado = carrito.some(function(producto){
    return producto.nombre === 'Celular';
}) 
//MANERA CORTA →
//resultado = carrito.some(producto => producto.nombre === 'Celular');

//Reduce
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);//que inicie desde la posicion 0
//MANERA CORTA →
//resultado = carrito.reduce((total, producto) => total + producto.precio, 0);//que inicie desde la posicion 0



// Filter
resultado = carrito.filter(function(producto){
   // return producto.precio < 400
   return producto.nombre !== 'Celular' //Se trae todos a excepcion del celular.
})




console.log(resultado);