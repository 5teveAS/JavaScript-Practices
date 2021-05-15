// Se utiliza el boton que fue creado en el index. /* El proposito
/* de esto es simular las notificacion por ejemplo de un canal de youtube que acaba de subir
un video. Lo vamos a realizar con JavaScript*/

//Siempre para seleccionar algo del hhtml se inicia con document
const boton = document.querySelector('#boton'); //nos selecciona el boton
//primero tenemos que seleccionar un elemento para despues aplicarle el evento →
boton.addEventListener( 'click', function() {// Se le pasa dos valores, el primero es el evento que vamos a escuchar. Es este caso es cuando el usuario de click, entonces vamos a ejecutar una funcion
// todo lo que este aqui adentro se ejecutara al hacer clic en el boton
// Notification es una api que existe en JavaScript, reject y resolve no los tenemos que meter nosotros ya lo tienen.    
    Notification.requestPermission()//se puede utilizar then porque es un promise incluido, todas las apis modernas de javaScript las utlizan.
    .then(resultado => console.log(`El resultado es ${resultado}`));
});


if(Notification.permission == 'granted') {
        new Notification('Esta es una notificacion', {
        icon: 'img/Hogwarts-Logo.png',
        body: 'Codigo con Juan, los mejores tutoriales'
    })//El primero es el titulo de la notificacion, y el segundo es un objeto con algunas opciones
}