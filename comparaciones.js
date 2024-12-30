let diez = 10;
let once = 10;
once = '10'
// once = '11';

// Si aqui cambio el numero de 10 a un texto de 10 estoy cambiando el tipo
// osea ya no es un numero, ahora es un texto.
// Si los comparo me dara true o false.

// JS es un lenguaje debilmente tipado, si quiero reasignar en forma de texto:
// (podemos correr este codigo y no va a ver ningun problema)
// En otros lenguajes de programación esto no es posible porque son lenguajes tipados.
// Esto quiere decir que cuando asignas inicialmente el valor a una variable
// tiene que ser el mismo tipo todo el tiempo.

console.log(diez == once);

// Si quieres asegurart que sean el mismo tipo puedes poner otro igual ahi: =
// console.log(diez === once);
// Son true