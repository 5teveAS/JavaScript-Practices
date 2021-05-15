//Clases

//Siempre las clases empiezan con mayusculas

class Producto {

    constructor(nombre, precio)/*Parametros*/{
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() { //Esto es lo mismo que el prototype de la version anterior, pero esto de fijo es mejor.
        return `El Producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }

    obtenerPrecio() {
        console.log(this.precio);
    }

}

const producto2 = new Producto('Monitor Curvo de 49', 800); //Aqui es donde irian los argumentos
const producto3 = new Producto('Laptop', 300);

// Herencia

class Libro extends Producto { //esta heredando el constructor y las funciones de Producto, se utiliza para no estar duplicando codigo y tenerlo mas facil de mantener.
     constructor(nombre, precio, isbn) {
        super(nombre, precio); //busca los valores en el constructor padre, el heredado
        this.isbn =  isbn;
   }

   formatearProducto() { //Esto es lo mismo que el prototype de la version anterior, pero esto de fijo es mejor.
    return `${super.formatearProducto() } y su ISBN es ${this.isbn}`;
    }

    obtenerPrecio() {
        super.obtenerPrecio();
        console.log('Y si hay en existencia');
    }
}

const libro = new Libro('JavaScript la Revolucion', 120, '9121512121215321')
console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());

console.log(producto2.formatearProducto());
