//Los arrow functions son otra forma de declarar funciones



// Expresion de la funcion. eSTO JAVAsCRIPT LO detecta mas como una variable
const sumar2 = (n1, n2) => { //Y esto ya es un Arrow Function, es mas corto que el anterior
   console.log(n1 + n2);
} 

const sumar3 = (n1, n2) => console.log(n1 + n2); //Cuando es una sola linea se pueden quitar las llaves y sigue haciendo lo mismo.

sumar2(5, 10);
sumar3(5, 10);

const aprendiendo = tecnologia => console.log("Aprendiendo "+tecnologia)
//NOTA cuando solo hay un parametro se le pueden quitar los parentesis en arrow functions
aprendiendo('JavaScript')







//PROGRAMACION DE ARCHIVO 15.JS, PARA CONVERTIR EN ARROW FUNCTIONS

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

//VAMOS A CONVERIR ESTE METODO EN ARROW FUNCTION
meses.forEach( mes => {
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

let resultado;
//VAMOS A CONVERIR ESTE METODO EN ARROW FUNCTION
resultado = carrito.some( producto => producto.nombre === 'Celular PRO'); //NOTA IMPORTANTE → EL RETURN QUE ESTABA, SE DA POR IMPLICITO ES UN ARROW FUNCTION

// console.log(resultado);



//Reduce

//VAMOS A CONVERIR ESTE METODO EN ARROW FUNCTION
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

// console.log(resultado);


// Filter
//VAMOS A CONVERIR ESTE METODO EN ARROW FUNCTION
resultado = carrito.filter(producto => producto.nombre !== 'Celular');

console.log(resultado);

