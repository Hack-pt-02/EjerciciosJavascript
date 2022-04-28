// Ejercicio 2

let welcome = "¡Empezemos con javascript!"

console.log (welcome);

// Ejercicio 3

let estudiante = "Hola, soy un estudiante Hackademy."

console.log (estudiante)

// Ejercicio 4

let animales = "perro"

animales = "gato"

console.log (animales);

// Ejercicio 5

let firstv = "España"

let secv = "Europa"

console.log (`Vivimos en ${firstv}, que forma parte de ${secv}`);

// Ejercicio 6

// BOOLEAN

let primerNum = 1;

let secondNum = 2;

let suma = primerNum + secondNum;

console.log ( suma == 2 ) // esta operación dará como resultado un false.

console.log (suma  == 3) // esta operación dará ocmo resultado un true

// NUMBER

let firstnumber = 1;

console.log (firstnumber)

// STRING

const firsttring = "Primer Stirng"

console.log (firsttring);

// NULL

let pruebaNull = null;

console.log (pruebaNull);

// UNDEFINED

let underwater;

console.log (underwater);

// SYMBOL

let logo = Symbol ("2");
let otrologo = Symbol ("5");

console.log (typeof logo)

// Ejercicio 7

const num = 5;

console.log (num + 5);

// Ejercicio 8

let nombre = "Jose Antonio";
let apellido = "Montoya";

const datos = (nombre + " " + apellido);

console.log (`Tu nombre y apellido son ${datos}`);

// Ejercicio 9

let numer = 5;

numer = "5"; // Aquí transformo el número en cadena

console.log (typeof numer); // Aquí muestro en Cadena
console.log (typeof Number(numer)); // Aquí lo muestro en numero

// Ejercicio 10

let decimales = 3.123456;

console.log (decimales.toFixed(3))

// Ejercicio 11

let primeracadena = "Primera cadena"
let segundacadena = "Segunda cadena"

let sumacadenas = (primeracadena + " y " + segundacadena)

console.log (sumacadenas.length);

// Ejercicio 12

console.log (`La suma de las cadenas es ${sumacadenas}`)

/* // todo esto lo he hecho de más, me da penita borrarlo

const tunombre = "Antonio"
const tuedad = 10;

console.log (`Muy buenas ${tunombre}, ahora mismo tienes ${tuedad}, pero (en teoría) dentro de 10 años tendrás ${tuedad + 10}`)
*/

// Ejercicio 13

let primeracoercion = 10 + "1";

console.log (primeracoercion); // La suma nos ofrece el resulta de "101", porque convierte todo en String, y simplemente los une

let segundacoercion = 10 - "1";

console.log (segundacoercion); // La resta, por el contrario, nos realiza la operación matemática conviertiendo todo en Number (como nos dijo Nico), por lo que nos arroja el resultado de 9.

// Ejercicio 14

let var1 = "Hey Tú, cómo te llamas. ¡Hey, estoy hablando contigo!";

console.log (var1);
console.log (var1.replace("contigo", "yo"));