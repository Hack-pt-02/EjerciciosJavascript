let comenzar = "¡Empezamos con javascript!"

console.log (comenzar);

let saludo;

const exit = "se acaba aquí"

console.log (exit);

saludo = "Hola";

saludo = "el otro";

saludo = " el otro más";

console.log (saludo);

// dos variables que al imprimirlas formen una frase

let uno = "Buenos días";
let dos = " ¿qué desea tomar?";
console.log (uno + dos);

// tipo de datos primitivos

// son los que no poseen métodos ni propiedades (todavía no se que significa eso). Son inmutables. los tipos son

let variablesPrimitivas = {
    String : "Hola!",
    Number : "42",
    Boolean : "true",
    Object : "null",
    Undefined : "undefined",
    Symbol : "symbol",
    Bigint : "n",
}

console.log (`El primitivo String, por ejemplo ${variablesPrimitivas.String},
El primitivo Number, como ${variablesPrimitivas.Number},
El primitivo Boolean, como ${variablesPrimitivas.Boolean},
El primitivo Object, como ${variablesPrimitivas.Object},
El primitivo Undefined, como ${variablesPrimitivas.Undefined},
El primtivo Symbol, como ${variablesPrimitivas.Symbol},
y por ultimo el primitivo Bigint, como por ejemplo ${variablesPrimitivas.Bigint}`)

console.log (variablesPrimitivas);

// practica de la introdución de varios objetos en la variable

let datos = {
    nombre : "Emilio",
    apellidos : "Vargas Millán",
    edad : "26"
}

console.log (`Hola ${datos.nombre} ${datos.apellidos}, tienes ${datos.edad} años, por lo que puedes acceder al curso`);

// Prueba variable num = 5 y sumarle 5

let n = 5;

console.log ( n+ 5 );

// funciona perfecto, vamos a complicarlo un poco más

let x = 45;
let y = 30;

console.log ( x * 2 + y )

// wooooow, y funciona!

// Ejercicio 8, declarar 2 variables e imprimir solo 1 con las dos.

const variableuno = "soy la primera variable, y me sumo a ..."
const variabledos = "la segunda variable!"

console.log ( variableuno + variabledos)

// Comparación de datos en javascript

let a = "5";
let b = "10";

a = b ? console.log("iguales"): console.log("diferentes");

// En este ejemplo aparece Equal, voy a probar otra.

a==b ? console.log("iguales"): console.log("diferentes");

// Aquí aparece diferentes, voy a probar la última.

a===b ? console.log("iguales"): console.log("diferentes");

// también aparece diferentes.

// Creo que lo anterior es un if-else, pero abreviado con el ? y los :

/* Ejercicio 9, Inicializar una variable num de valor 5 y transforma num en cadena. Imprime en console.log los dos tipos de datos.

.toString()
String()

*/

let number = 35;

toString (number);

console.log (number);
