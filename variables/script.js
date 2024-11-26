//Declaración de Variables
let nombre='Juan';//------>Cambiable
const estudiante='Saul'; //---->constante

let $_saludo="Chau"; //string  
let años=21; //number
let Saludo ;//undefined
let esVerdadero=false; //boolean
let _esnulo=null; //null

//Nombres de Variables
let apellido = "Beisaga";  // Válido
let _edad = 30;       // Válido
let $salario = 1000;  // Válido

//Ámbito (Scope)
//Global: Variables definidas fuera de funciones o bloques están disponibles en todo el código.
//Función: Variables definidas dentro de una función solo están disponibles dentro de esa función.
//Bloque: Variables declaradas con let o const dentro de {} solo existen dentro del bloque.

//Inicializacion y tipos
/*
String: Cadenas de texto ("Hola", 'Mundo').
Number: Números (42, 3.14).
Boolean: Verdadero o falso (true, false).
Undefined: Variable declarada pero no inicializada.
Null: Intencionadamente vacía.
Object: Arreglos, funciones, fechas, etc.
Symbol: Valores únicos.
BigInt: Para números muy grandes.

*/



document.write(saludo,`<br>`);

document.write(años,`<br>`);
document.write(_estatura,`<br>`);
document.write(esVerdadero,`<br>`);
document.write(esNulo,`<br>`);
document.write(persona.nombre,`<br>` ,persona.edad,`<br>`);

document.write(Nombre,`<br>`);//Escribe directamente en el documento HTML de la página web.
console.log(estudiante);//Imprime mensajes o datos en la consola del navegador. 
alert(_saludo);//Muestra un cuadro de diálogo emergente con un mensaje.



{
    document.write(saludo,`<br>`);
}


  //FALSO
//false
//0
//"" (cadena vacía)
//null
//undefined
//NaN