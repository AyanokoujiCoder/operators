// Asi estan representados

// Y &&
// O ||

let a = 'java';
let b = 'javascript';
let c = 'c#';

// Quiere decir cuando este es verdadero "a" y este es verdadero "b" el resultado va a ser true.
console.log(a === 'java' && b === 'javascript');

// Aqui nos dara false.
// console.log(a === 'java' && b === 'go');

// console.log(true && true, true && false, false && true, false && false);
// console.log(true || true, true || false, false || true, false || false);

console.log(c === 'java' || b === 'go');

// Aqui son devaluados los simbolos de &&, eso quiere decir es que si esto es verdadero
// "c = c#" y esto es verdadero "b = javascript" vamos a tener verdadero.

// Esto es un punto de confucion para diferentes desarrolladores entonces hay que ser
// muy claros en lo que tratamos de hacer entonces deberiamos poner esto
// entre parentecis:

console.log((c === 'c#' || b === 'go') && b === 'javascript'); // true
console.log(c === 'c#' || (b === 'go' && b === 'javascript')); // true

// Este simbolo de exclamación hace todo negativo, es decodeURI, si toda esta operación es verdadero esto va a ser falso:
console.log(!(c === 'c#' || a === 'javascript')); // false

// Ahora tambien tenemos que asegurarnos que este simbolo && este de acuerdo con los nuevos valores.

console.log(c !== 'c#' && a !== 'javascript'); // false