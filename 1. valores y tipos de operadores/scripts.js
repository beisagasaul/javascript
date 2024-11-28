// Modulo
console.log(12%5);//0

// Formas de salto de linea
console.log("La vaca \n toma agua");
console.log("segunda forma");
// concatenar
console.log("con"+"cate"+"nar");
console.log("con"+"cate"+"nar",`<br>`)
console.log(`la suma de es ${3+2}`);

// operadores unarios
console.log(typeof 3);
console.log(typeof "letra");
console.log(typeof 5);




// operadores Relacionales
/*
==	Igual a
===	Igual y del mismo tipo que
!=	Diferente de
!==	Diferente o de otro tipo que
>	Mayor a
<	Menor a
>=	Mayor o igual a
<=	Menor o igual a
*/

// operadores logicos
/*
AND 
true & true =true
true & false =false
false & true =false
false & false =false

OR 
false || false= false
false || true=true
true  || false=true
true  || true=true
*/
// Valores Booleanos

// numeros y numeros
console.log(3<1);//false
console.log(1<3);//true

//cadena que tiene numeros
console.log("50.34">5.554);// la cadena lo convierte en numero
console.log(5.554<"50.34")//lo mismo que la primera

//Falsy
console.log(Boolean(""));//false
console.log(Boolean(-0)); // false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
let x;
console.log(Boolean(x)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

//truthy
console.log(Boolean(42));    // true
console.log(Boolean(-42));   // true
console.log(Boolean(3.14));  // true
console.log(Boolean("Hola"));      // true
console.log(Boolean("false"));     // true
console.log(Boolean("0"));         // true
console.log(Boolean(" "));         // true (espacio)
console.log(Boolean({}));          // true (objeto vacío)
console.log(Boolean({ nombre: "Saul" })); // true (objeto con propiedades)
console.log(Boolean([]));          // true (arreglo vacío)
console.log(Boolean([1, 2, 3]));   // true (arreglo con elementos)
console.log(Boolean(function(){})); // true (función)
console.log(Boolean(Infinity));    // true
console.log(Boolean(-Infinity));   // true
class Persona {}
const persona = new Persona();
console.log(Boolean(persona)); // true
console.log(Boolean(Symbol("id"))); // true (un símbolo)
console.log(Boolean(new Date()));   // true (instancia de Date)
console.log(Boolean(Promise.resolve())); // true (promesa)





// ejmplo
console.log("Arco"<"corazon");//La mayuscula siempre sera menor a minuscula

// operador ternario

// condición ? valor_si_verdadero : valor_si_falso;
let num1=4;
(num1%2==0)?console.log("es par"): console.log("es impar");
