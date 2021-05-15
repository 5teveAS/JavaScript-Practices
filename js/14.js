// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];

//console.log(numeros);
console.table(numeros); //mas sensillo de ver arreglos

//const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');// es mas utilizada la de arriba que esta.

//console.log(meses);

// const arreglo = ["Hola", 18, true, "si", null, {nombre: "Juan", trabajo: "Programador"}, [1, 2, 3]]; //Un arreglo puede tener todo tipo de valores.

// console.log(arreglo);


//Acceder a los valores de un arreglo
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);

// Conocer la extension de un arreglo
// console.log(meses.length);

// numeros.forEach( function(numero) {
//     console.log(numero)
// })

//numeros[5] = 60; //como no existe en el arreglo original lo va a agregar. Este no es muy utilizado para agregar, mas bien se utiliza el push
numeros.push(60, 70, 80); //siempre se agrega al final del arreglo
numeros.unshift(-10,-20,-30); // siempre lo agrega al inicio del arreglo

console.log(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];// es mas utilizada la de arriba que esta.

// meses.pop(); //Elimina el ultimo elemento del arreglo.
// meses.shift(); //Elimina el primer elemento del arreglo.

meses.splice(2, 1); //Para elmentos del medio de un arreglo, recibe dos valores en este caso elimina Marzo, primero el indice y luego la cantidad a eliminar de ahi en adelante.
console.table(meses);

//Antes que modificar el arreglo original, se recomienda hacer un nuevo arreglo con los cambios.
//Rest operator o Spread Operator

const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo);