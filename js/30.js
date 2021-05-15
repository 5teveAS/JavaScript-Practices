//Promises, como para conectar con apis


// const usuarioAutenticado = new Promise( function(){
// })
//Arrow funtion →→
const usuarioAutenticado =  new  Promise( (resolve, reject) => { // Tanto resolve como reject son funciones 
    const auth = false; //Con un true obtenemos un Fulfilled.

    if(auth) { //Cuando el Promise se cumple
        resolve('Usuario Auntenticado');
    } else {
        reject('No se pudo iniciar sesion');  //El promise no se cumple
    }
});

usuarioAutenticado
    .then( (resultado) => console.log(resultado))
    .catch( error => console.log(error)) //Como solo hay un valor de primero se puede elimiar el parentesis.


// En los promises existen 3 valores posibles
// Pending: No se ha cumplido pero tampoco se ha rechazado
// Fulfilled: Ya se cumplio.
// Reject: Se ha rechazado o no se pudo cumplir.