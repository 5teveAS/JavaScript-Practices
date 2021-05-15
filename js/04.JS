// String o Cadenas de Texto

//const producto = "Monitor de 20 pulgadas\""; //La que mas se utiliza es esta sintaxis
//const producto2 = String('Monitor 30 pulgadas');
//const producto3 = new String('Monitor 50 pulgadas');

//console.log(producto);
//console.log(producto2);
//console.log(producto3);
//console.log(typeof produto2); // Con el typeof podemos saber que tipo de dato tiene una variable ya sea numero, boleano, string.
//console.log(typeof produto3);

const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo"';
const producto2 = 'Monitor HD';


console.log(tweet.length); //cuantos caracteres tiene la cadena de texto
console.log(producto2);

// IndexOf
console.log(tweet.indexOf('JavaScript'));//Para comprobar que una palabra existe en una cadena de texto. Cuando es -1 siginifica que no lo pudo encontrar.

//Includes (retorna true o false si una palabra existe)
console.log(tweet.includes('JavaScript'));




