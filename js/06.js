//Objeto Math
/*
    Con escribir window en la consola y precionar enter, podemos acceder a 
    todas las funciones que tiene JavaScript, en este caso podemos ver las
    funciones disponibles para MATH.

    -window.Math.random();
*/ 
let resultado;

resultado  = Math.PI;
resultado = Math.round(2.5);
resultado = Math.ceil(2.5); //ceil siempre redondea hacia arriba.
resultado = Math.floor(2.5); //floor siempre redondea hacia abajo.
resultado = Math.sqrt(144); //Raiz cuadrada
resultado = Math.abs(-200); //NUmero negativo lo convierte en positivo.
resultado = Math.min(3, 5, 1, 8, 2, 10); //El numero mas pequeno.
resultado = Math.max(3, 5, 1, 8, 2, 10); //El numero mas pequeno.
resultado = Math.random();
resultado = Math.floor(Math.random() * 30); //Numero aleatorio entre 1 y 30


console.log(resultado);
