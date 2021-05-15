async function obtenerEmpleados() {
    
    const archivo = 'empleados.json';
     
    // Se comento todo lo siguiente por async funcion →
    // fetch(archivo) //Es una funcion que ya existe en javaScript 
    //     // .then( resultado => {
    //     //     return resultado.json(); //se pone el .json porque hay que especificar de que tipo es, si de texto o json.
    //     // }) //manera mas corta, es una sola linea de codigo y el return es implicito →
    //     .then( resultado => resultado.json()) //se pone el .json porque hay que especificar de que tipo es, si de texto o json.
    //     .then( datos => { //como se utiliza un return en la arriba, es necesario hacer otro then.
    //          //console.log(datos);
    //          //console.log(datos.empleados);

    //         //Aplicar destructuring, que extraemos ese valor de empleados  y lo guardamos en una variable que es una mejor forma de hacerlo →
    //         const  { empleados } = datos;
    //         console.log(empleados);

            //recordar que podemos iterar el arreglos con forEach, o tambiem map, pero map es usado mas bien para crear un nuevo arreglo, pero nosotros en este caso queremos trabajar en el mismo arreglo.
            // empleados.forEach(empleado => { //obtenes en consola cada uno de los objetos de manera individual.
            //     // console.log(empleado);
            //     console.log(empleado.id);
            //     console.log(empleado.nombre);
            //     console.log(empleado.puesto);

                //mostrarlo en el html →
                //document.querySelector('.contenido').textContent += empleado.nombre
            // });

    // pordemos ver que de esta manera es mas corta con await que usar las promises de arriba, en esta se utiliza async await            
      const resultado = await fetch(archivo);
      const datos = await resultado.json();
      console.log(datos);
}
obtenerEmpleados(); //en el status aparece 200, quiere decir que la peticion fue correcta.