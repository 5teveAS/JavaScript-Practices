 // Declaracion de funcion

//  function sumar() {
//      console.log(10 * 10);
//  }

//  sumar();

//  // Expresion de la funcion. eSTO JAVAsCRIPT LO detecta mas como una variable
// const sumar2 = function() {
//     console.log(3 + 3);
// } 

// sumar2();

// IIFE, Estas funciones se mandan a llamar ellas mismas.
// (function(){
//     console.log('Esto es una funcion');
// })();

// console.log(cliente); //Este console mando a llamar el const cliente ubicado en el .js otro. Pero si se colocara dentro de un IIFE no tendria acceso a esa variable del otro archivo.








 // Declaracion de funcion al reves, primero el llamado
/*PORQUE LA PRIMERA FUNCION SIGUIENTE SI SE EJECUTA Y LA OTRA NO?
POR QUE RECUERDA QUE JAVASCRIPT SE EJECUTA EN DOS ETAPAS, 
LA PRIMERA ES LA DE REGISTRO O LA DE CREACION, EN ELLA SE REGISTRAN LAS FUNCIONES.
Y LA SEGUNDA ES LA DE EJECUCION, EN ESA SE EJECUTA EL CODIGO. LA SEGUNDA NO ES CONSIDERADA UNA
FUNCION COMO TAL Y POR ESO NO SE EJECUTA*/ 
 sumar();

 function sumar() {
    console.log(10 * 10);
}

sumar2();
// Expresion de la funcion. eSTO JAVAsCRIPT LO detecta mas como una variable
const sumar2 = function() {
   console.log(3 + 3);
} 



// IIFE, Estas funciones se mandan a llamar ellas mismas.
// (function(){
//     console.log('Esto es una funcion');
// })();

// console.log(cliente); //Este console mando a llamar el const cliente ubicado en el .js otro. Pero si se colocara dentro de un IIFE no tendria acceso a esa variable del otro archivo.

