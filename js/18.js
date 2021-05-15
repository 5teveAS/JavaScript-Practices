


function sumar(numero1=0, numero2=0) { //numero1 2, son parametros. Tambien tiene los parametros por default, para evitar que no de error si al llamar la funcion no cuenta con los argumentos.
   console.log(numero1 + numero2);
}

sumar(10, 5);  //Estos de aqui serian los argumentos o los valores reales
sumar(3, 3);  //Estos de aqui serian los argumentos o los valores reales
sumar(10, 10);  //Estos de aqui serian los argumentos o los valores reales


// Expresion de la funcion. eSTO JAVAsCRIPT LO detecta mas como una variable
const sumar2 = function(n1, n2) {
  console.log(n1 + n2);
} 

sumar2(5,10);