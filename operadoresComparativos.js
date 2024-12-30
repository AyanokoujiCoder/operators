let a = 'a';
let b = 'b';

// console.log(a > b);
// console.log(a < b);

let A = 'A';

// console.log(A < a);
// console.log(A > a);

// Esto sucede porque el alfabeto esta guardado en Javasript
// comienzan con todas las mayusculas y despues va con todas las minusculas.

// console.log('z' > 'A');

// Por eso si quieres asegurarte de que hagas una buena comparación entre letras
// es una buena idea transformar tus valores de texto en mayusculas.

console.log('z'.toUpperCase() > 'A'.toUpperCase());