// Ejercicio 2

/* let welcome = "¡Empezemos con javascript!"

console.log (welcome); */

// Ejercicio 3

/* let estudiante = "Hola, soy un estudiante Hackademy."

console.log (estudiante) */

// Ejercicio 4

/* let animales = "perro"

animales = "gato"

console.log (animales); */

// Ejercicio 5

/* let firstv = "España"

let secv = "Europa"

console.log (`Vivimos en ${firstv}, que forma parte de ${secv}`); */

// Ejercicio 6

// BOOLEAN

/* let primerNum = 1;

let secondNum = 2;

let suma = primerNum + secondNum; */

/* console.log ( suma == 2 ) */ // esta operación dará como resultado un false.

/* console.log (suma  == 3) */ // esta operación dará ocmo resultado un true

// NUMBER

/* let firstnumber = 1;

console.log (firstnumber) */

// STRING

/* const firsttring = "Primer Stirng"

console.log (firsttring); */

// NULL

/* let pruebaNull = null;

console.log (pruebaNull); */

// UNDEFINED

/* let underwater;

console.log (underwater); */

// SYMBOL

/* let logo = Symbol ("2");
let otrologo = Symbol ("5");

console.log (typeof logo) */

// Ejercicio 7

/* const num = 5;

console.log (num + 5); */

// Ejercicio 8

/* let nombre = "Jose Antonio";
let apellido = "Montoya";

const datos = (nombre + " " + apellido);

console.log (`Tu nombre y apellido son ${datos}`); */

// Ejercicio 9

/* let numer = 5; */

/* numer = "5"; */ // Aquí transformo el número en cadena

/* console.log (typeof numer); */ // Aquí muestro en Cadena
/* console.log (typeof Number(numer)); */ // Aquí lo muestro en numero

// Ejercicio 10

/* let decimales = 3.123456;

console.log (decimales.toFixed(3)) */

// Ejercicio 11

/* let primeracadena = "Primera cadena"
let segundacadena = "Segunda cadena"

let sumacadenas = (primeracadena + " y " + segundacadena)

console.log (sumacadenas.length); */

// Ejercicio 12

/* console.log (`La suma de las cadenas es ${sumacadenas}`) */

/* // todo esto lo he hecho de más, me da penita borrarlo

const tunombre = "Antonio"
const tuedad = 10;

console.log (`Muy buenas ${tunombre}, ahora mismo tienes ${tuedad}, pero (en teoría) dentro de 10 años tendrás ${tuedad + 10}`)
*/

// Ejercicio 13

/* let primeracoercion = 10 + "1";

console.log (primeracoercion); */ // La suma nos ofrece el resulta de "101", porque convierte todo en String, y simplemente los une

/* let segundacoercion = 10 - "1";

console.log (segundacoercion); */ // La resta, por el contrario, nos realiza la operación matemática conviertiendo todo en Number (como nos dijo Nico), por lo que nos arroja el resultado de 9.

// Ejercicio 14

/* let var1 = "Hey Tú, cómo te llamas. ¡Hey, estoy hablando contigo!";

console.log (var1);
console.log (var1.replace("contigo", "yo")); */

/* Ejercicio de clase: escribir un programa que pida un numero al usuario y devuelva "java" si el numero es multiplo de 3, devuelva "script" si es multiplo de 5, devuelva "javascript" si es multiplo de 7, en caso contrario devuelva "W bootstrap 4?" */

/* let multiplos = prompt ("introduce el número para saber si es múltiplo");

if (multiplos % 3 == 0) {
    console.log  ("es múltiplo de 3")
}
else if (multiplos % 5 == 0) {
    console.log ("script")
}
else if (multiplos % 7 == 0) {
    console.log ("javascript")
}
else{
    console.log ("W bootstrap 4 🚀")
} */

// 15 Crear un programa que dada una variable number nos diga si es mayor que 100.

/* let numberr = 101;

if (numberr >= 100) {
    console.log ("la variable es mayor que 100")
} else{
    console.log ("la variable es menor que 100")
} */

// 16 Crear un programa que dada una variable number nos diga si es positivo o negativo.

/* const numerito = 1;

if (numerito > 0) {
    console.log ("positivo")
} else {
    console.log ("negativo")
} */

// 17 Crear un programa que dadas 2 variables tipo number, las sume. Si la suma es mayor que 50 multiplique por 2, si no, por 3.

/* let variable1 = 30;
let variable2 = 20;

const sumavar = (variable1 + variable2)

if (sumavar > 50) {
    console.log (sumavar * 2)
} else {
    console.log (sumavar * 3)
} */

// 18 Crear un programa que dada una variable number, nos diga si es un múltiplo de 3. Si no lo es, nos diga si es múltiplo de 8 y, si no, imprima un mensaje de error.

/* const diezyocho = 17;

if (diezyocho % 3 == 0) {
    console.log (`${diezyocho} es múltiplo de 3`)
}
else if (diezyocho % 8 == 0) {
    console.log (`${diezyocho} es múltiplo de 8`)
}
else {
    console.log ("Fatal error 404 not found")
} */

// 19 Crear un programa que dadas 2 variables booleanas, “buen_tiempo” y “trabajo”, nos diga si puedo ir a la playa. Si trabajo, no puedo ir, si no trabajo verifico que haga buen tiempo. En los casos negativos imprimir un mensaje adecuado.

/* const buen_tiempo = false;
const trabajo = false;

if (trabajo) {
    console.log ("no puedes ir porque trabajas, cara pan")
} else if (!trabajo && buen_tiempo) {
/* o quizás poner (trabajo == false) */
/*     console.log ("Puedes ir a la plallita, ya que no trabajas y hace un tiempo maravilloso")
}
else {
    console.log ("no puedes ir, parece que hará mal tiempo, sorry")
} */

// 20 Crear un programa que reste 5 a los primeros 20 números (1,2,3,4...20).

/* for (i = 1; i <= 20; i++) {
    console.log (`En la posición ${i} el numero vale ${i - 5}`)
} */

// 21 Crear un programa que calcule la suma de los primeros 20 números.

/* let suma = 0;

for (i = 0; i <= 20; i++) {
    suma += i
    console.log (suma)
} */

// 22 Crear un programa que calcule la suma de los primeros “n” números, donde el valor de n, se recibe desde el “prompt”

/* let solicitud = (prompt("introduce los números a sumar"));
suma = 0;

for (i = 0; i<= solicitud; i++) {
    suma += i;
}
console.log (`La suma de los números anteriores a ${solicitud} da como resultado ${suma}`) */

// 23 Crear un programa que calcule el factorial de un número n, donde el valor de n se recibe desde el “prompt” y además se verifique si el valor es de tipo number. Si no lo es, se sale del programa con un mensaje de error.

/* let factorial = Number(prompt("introduce el número y te diré el factorial"));
let valFactorial = 1;

if (typeof factorial == "number" && !Number.isNaN(factorial)) {
    for (i = 1; i <= factorial; i++) {
        valFactorial *= i
        console.log (valFactorial)
    }
} else {
    console.log ("todo mal amigo")
} */

// 24 Escribir una función que, dados un mínimo y un máximos, cree un número aleatorio entre un número y un máximo.

/* function aleatory (max,min) {
    // otra manera --> return Math.floor(Math.random() * (max - min) + min);
    return Math.floor((Math.random() * (max - min) + min));
}

console.log (aleatory(10,5)); */

//console.log ((Math.random() * (5 - 0) + 0).toFixed(0)) // el .Tofixed para quitar un poquito de decimal

// 25 Crear una función, tipCalculator(), que tenga dos parámetros: una cadena que represente la calidad del servicio recibido y un número que represente el coste total. Devuelve la propina, como un número, basado en lo siguiente:

/* function tipCalculator (quality, cost) {
    if (quality == "fatal") {
        return `el servicio ha sido ${quality} y la propina es de ${cost * 0.05}€`;
    } else if (quality == "ok") {
        return `el servicio ha sido ${quality} y la propina es de ${cost * 0.15}€`;
    } else if (quality == "bueno") {
        return `el servicio ha sido ${quality} y la propina es de ${cost * 0.2}€`;
    } else if (quality == "excelente") {
        return `el servicio ha sido ${quality} y la propina es de ${cost * 0.3}€`;
    } else {
        return `el servicio ha sido ${quality} y la propina es de ${cost * 0.18}€`;
    }
}
console.log (tipCalculator("bueno",10)) */

// 27 Escribir una función que nos diga si un número es par o impar.

/* function paring(n) {
    return n % 2 == 0 ? `par` : `impar`
}
console.log(paring(18)) */

// 28 Escribir una función que imprima un intervalo de números entre 0 y 10, excluyendo los pares.

/* function intervalImpar() {
    
    let variable = 0;

    for (variable = 0; variable <= 10; variable++) {

        if ((variable % 2) !== 0) {
            console.log (variable)
        }

    }
    return variable;
}

console.log (intervalImpar()) */

// 29 Te dan el length y el width de un polígono de 4 lados. El polígono puede ser un rectángulo o un cuadrado. Si es un cuadrado, devuelve su área. Si es un rectángulo, devuelve su perímetro.

/* function poligons (width,length) { */

// este es en ternario

/* return width === length ? `el area de este cuadrado es ${width * length}` : `el area de este rectángulo es ${(width*2) + (length*2)}` */

// esto es normalillo

/* if (width === length) {
    return `El area de este cuadrado es ${width * length}`;
}
else {
    return `El area de este rectángulo es ${(width*2)+(length*2)}`
} */
/* }
console.log (poligons(10,10)); */

// 30 Escribir una función que calcule el área del radio del 1 al 10.

/* function radio() {
    
    for (r = 0; r <= 10; r++) {

    let area = Math.PI * Math.pow(r,2);

    console.log (area)
}

}

radio() */



// 31 Encuentra la forma más rápido de convertir la primera letra de una cadena en mayúscula a través de una función.

/* function capital (name) {
    let first = (name.charAt(0).toUpperCase());
    let second = (name.slice(1))
    
    let unionCapital = (first + second)

    return unionCapital

}

console.log(capital("Maria José")); */

//32 Calcular la serie de fibonacci que devuelve hasta n números bajo forma de array.

/* let fibonaccii = [];
fibonaccii [0] = 0;
fibonaccii [1] = 1;

for (i = 2; i < 50; i++) {
    fibonaccii[i] =fibonaccii[i - 2] + fibonaccii [i - 1]
}
console.log (fibonaccii) */

// 33 A partir de este array de números, devolver un array con solo números pares:

/* const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];*/
// desarrollada

/* let pares = numeros.filter(function(num) {
    return num % 2 == 0;
}); */

// función flecha

/* let pares = numeros.filter ((num) => num % 2 == 0) */

/* console.log (pares) */

// 34 A partir de estos días filtrar por días que empiezan por "m":

/* const dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado" , "domingo"]

for (i = 0; i <= dias.length; i++) {
    if (dias[i].charAt(0) == "m") {
        console.log (dias[i])
    }
} */

// 35 A partir de este array de números, ordena la secuencia en forma creciente y luego filtra números menor de 10.

/* let num = [100,2,20,35,4,44];

num.sort ((a,b) => a - b)

console.log (num) */

// 36 Devuelve las dos edades más altas dado una matriz de números que representen edades.

function dosEdadesMasAltas() {
    for (i = 0; i <= dosEdadesMasAltas; i++) {
        console.log (Math.max(dosEdadesMasAltas))
    }
}
console.log (dosEdadesMasAltas)
dosEdadesMasAltas([1, 2, 10, 8, 22, 3, 6, 12, 80, 4, 55, 19]);