console.log(3 + 4);
console.log(3 - 4);
console.log(3 * 4);
console.log(12 / 4);
console.log(12 % 5);
// par vs impar "Número impar"
console.log(12 % 2); // par "0"
console.log(11 % 2); // impar "Nos sobra 1"

let a = 10;
a = a + 1;

// Representan lo mismo de forma abreviada
a += 1;

// Otra manera mas simple
a++;

console.log(a);

// Podemos hacer exactamente lo mismo con el valor de -1

a = a - 1;
// Debes de tener cuidado de poner el simbolo menos despues del igual "=-"
a -= 5;
a--;

console.log(a);

// Diferencias entre: (Añadimos el valor de 1) y (despues quitamos el valor en la resta)
// Estas dos operaciones funcionan pero tienen una pequeña diferencia.

// console.log(a++);

// console.log(++a);

// Aqui debemos de imprimir "a"
// console.log(a);

// Funciona de igual manera con el menos

// console.log(a--);

// console.log(--a);
// console.log(a);

// Aqui tenemos la explicación mas extensa:

// Las diferencias entre los operadores de incremento (++) y decremento (--) en JavaScript se relacionan con su uso
// en la forma prefija y posfija.Aquí te explico las diferencias:

// Postfijo (a++ o a--):

// En el caso del postfijo (a++), el valor de a se utiliza en la expresión antes de incrementar el valor.
// Por ejemplo, si tienes console.log(a++), primero se imprime el valor actual de a y luego se incrementa el valor de a.
// Lo mismo aplica para el decremento postfijo (a--), donde primero se imprime el valor actual y luego se decrementa.

// Prefijo (++a o --a):

// En el caso del prefijo (++a), el valor de a se incrementa antes de usarlo en la expresión.
// Por ejemplo, si tienes console.log(++a), primero se incrementa el valor de a y luego se imprime el nuevo valor de a.
// Lo mismo aplica para el decremento prefijo (--a), donde primero se decrementa el valor y luego se imprime.

// let z = 5;

// Postfijo
// console.log(z++); // Imprime 5, luego a se convierte en 6
// console.log(z);   // Imprime 6

// // Prefijo
// console.log(++z); // a se convierte en 7, luego imprime 7
// console.log(z);   // Imprime 7

// // Decremento Postfijo
// console.log(z--); // Imprime 7, luego a se convierte en 6
// console.log(z);   // Imprime 6

// // Decremento Prefijo
// console.log(--z); // a se convierte en 5, luego imprime 5
// console.log(z);  //  Imprime 5
