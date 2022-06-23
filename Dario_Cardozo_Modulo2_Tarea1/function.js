console.log("----------Funcition------------")

// Ejercicio 1:  escriba una función de JavaScript que invierta un número. Por ejemplo, si x = 32443, la salida debería ser 34423.
console.log(" Ejercicio 1:  escriba una función de JavaScript que invierta un número. Por ejemplo, si x = 32443, la salida debería ser 34423. ")
function invertir(numero) {
  let numeroInvertido = numero.toString().split("").reverse().join("");
  return numeroInvertido;
}
console.log(invertir("32443"));

// Ejercicio 2:  escriba una función de JavaScript que devuelva una cadena en orden alfabético.
//  Por ejemplo, si x = 'webmaster',
// el resultado debería ser 'abeemrstw'. La puntuación y los números no se pasan en la cadena.
console.log(
  " Ejercicio 2:  escriba una función de JavaScript que devuelva una cadena en orden alfabético. "
);
console.log("webmaster");
function ordenar(cadena) {
  let cadenaOrdenada = cadena.split("").sort().join("");
  return cadenaOrdenada;
}
console.log(ordenar("webmaster"));
// ------------------------------------------------------------------------------
// Ejercicio 3:  escriba una función de JavaScript que convierta la primera letra de cada palabra en mayúsculas.
//  Por ejemplo, si x = "príncipe de Persia", la salida debería ser "Príncipe de Persia".
console.log(
  " Ejercicio 3:  escriba una función de JavaScript que convierta la primera letra de cada palabra en mayúsculas. "
);
console.log("príncipe de Persia");
function convertir_a_mayusculas(cadena) {
  let cadenaMayusculas = cadena
    .split(" ")
    .map(function (palabra) {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    })
    .join(" ");
  return cadenaMayusculas;
}
console.log(convertir_a_mayusculas("príncipe de Persia"));

//    -----------------------------------
//  Ejercicio 4: escriba una función de JavaScript que encuentre la palabra más larga en una frase.

console.log(
  " Ejercicio 4: escriba una función de JavaScript que encuentre la palabra más larga en una frase. "
);

function palabra_mas_larga(str) {
  let frase = str.split(" ");
  let palabra = "";
  for (let p of frase) {
    if (p.length > palabra.length) {
      palabra = p;
    }
  }
  return palabra;
}
console.log(palabra_mas_larga("Tutorial de desarrollo web"));
