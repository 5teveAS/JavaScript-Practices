//Async  /  await, es la base de todo desarrollo moderno hoy en dia → react, angular, typeScript etc.

function descargarNuevosClientes() {
    return new Promise( resolve => { //Forzar a que se cumpla, con ningun escenario en el que no se pueda.
        console.log('Descargando clientes... espere...');

        setTimeout(() => {
            resolve('Los Clientes fueron descargados.')
        }, 5000);
    })
}


function descargarUltimosPedidos() {
    return new Promise( resolve => { //Forzar a que se cumpla, con ningun escenario en el que no se pueda.
        console.log('Descargando pedidos... espere...');

        setTimeout(() => {
            resolve('Los Pedidos fueron descargados.')
        }, 3000);
    })
}

//queremos que aqui se ejecuten dos al mismo tiempo, el de pedidos tambien, pero recordar que si lo ponemos simplemente debajo del const de clientes, esa linea se bloqueara hasta que se complete lo de arriba.
async function app() {
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]); // Como estamos haciendo async tenemos que poner el await, con Promise.all hacemos un arreglo el cual ejecutara las dos funciones al mismo tiempo 
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        
    console.log(error);
    }
}

app();

// console.log('Este codigo no se bloquea');

// setInterval(() => {
//     console.log('set timeout...');
// }, 3000);

// setTimeout(() => {
//     console.log('set timeout...');
// }, 1000);

// setInterval(() => { //va a esperar 2 segundos y va ejecutar siempre en intervalos.
    
// }, 2000);