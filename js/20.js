
const reproductor = {
    reproducir: function(id) { //Esto es un metodo creado por nosotros, es un metodo de propiedad
        // console.log('Reproduciendo Cancion con el ID: ${id}')
        console.log('Reproduciendo Cancion con el ID:'+ id)
    },
    pausar: function() { //Otro metodo de propiedad
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre) {
        console.log('Creando la playlist: '+nombre)
    },
    reproducirPlaylist: function(nombre) {
        console.log('Reproduciendo la playlist: '+nombre)
    }
}

reproductor.borrarCancion = function(id){  //Agregando propiedades por fuera del Objeto
    console.log('Eliminando la cancion: '+id)
}
// console.log(reproductor);
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');