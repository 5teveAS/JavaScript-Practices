// This


// Es importante que no sirve hacerlo de la misma manera pero con arrow function, porque 
// se necesita declarar variable a la ventana global, con window.nombre = 'Un Nombre', En cambio con function el hace referencia al mismo objeto
//window.nombre = 'Un Nombre';
const reservacion = {
    nombre: 'Juan',
    apellido: 'De la Torre',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${reservacion.nombre} y su cantidad a apagar es de ${reservacion.total}`);
    }
}
// Con arrow function →, RECORDAR QUE AQUI THIS HACE REFERENCIA A LA VANTANA GLOBAL, SI NO HAY NADA AHI NO SIRVE
// const reservacion = {
//     nombre: 'Juan',
//     apellido: 'De la Torre',
//     total: 5000,
//     pagado: false,
//     informacion: ()=> {
//         console.log(`El Cliente ${reservacion.nombre} y su cantidad a apagar es de ${reservacion.total}`);
//     }
// }

const reservacion2 = {
    nombre: 'Pedro',
    apellido: 'De la Torre',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} y su cantidad a apagar es de ${this.total}`);
    }
}
/*This hace referencia al mismo objeto, los mismos valores
del objeto que se esta llamando en la funcion*/

reservacion.informacion()
reservacion2.informacion()