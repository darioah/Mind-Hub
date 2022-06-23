// /yo utilice NODE para ver la consola y hacer los ejercicios

//Ejercicio 1:  en su archivo JavaScript, cree una variable llamada myName  con su nombre como valor. Ponga su nombre entre comillas de cadena, por ejemplo, "mi nombre". Luego agregue una línea de código para imprimir el nombre de la variable en la consola después del mensaje anterior. 
//Guarde su archivo JavaScript en su editor. Vuelva a cargar la página HTML en su navegador. Deberías ver tu nombre impreso. Si no, investiga y corrige.
console.log( " Ejercicio 1:  en su archivo JavaScript, cree una variable llamada myName  con su nombre como valor. Ponga su nombre entre comillas de cadena, por ejemplo, \"mi nombre\". Luego agregue una línea de código para imprimir el nombre de la variable en la consola después del mensaje anterior. ")
var myName = 'Dario';
console.log(myName);

// Ejercicio 2:  Crea una variable llamada edad  con un número que sea tu edad.
//  No utilice comillas de cadena para los números.
console.log( " Ejercicio 2:  Crea una variable llamada edad  con un número que sea tu edad. ")
let edad = 27;
console.log(edad);

// Ejercicio 3:  Cree una variable llamada ignasiEdad  con un valor de 32.
//  Cree otra variable llamada edadDiff  y configúrela en una expresión que 
//  calcule su edad menos la edad de Ignasi. Imprime el valor de ageDiff .

console.log( " Ejercicio 3:  Cree una variable llamada ignasiEdad  con un valor de 32. ")
let ignasiEdad = 32;
let edadDiff = edad - ignasiEdad;
console.log(  edadDiff);


// Ejercicio 4:  Escribe un condicional que compare la variable con tu edad con el número 21.
// Debe imprimir "Tienes más de 21 años" o "No tienes más de 21 años", según corresponda, dependiendo de tu edad.

console.log( " Ejercicio 4:  Escribe un condicional que compare la variable con tu edad con el número 21. ")
  if (edad > 21) {
    console.log('Tienes más de 21 años');
  }else{
    console.log("no tienes mas de 21 años")
  }
    

// Ejercicio 5 :  Escribe un condicional que compare tu edad con la edad de Ignasi.
//  Este condicional deberá probar si eres mayor, 
//  menor o de la misma edad, e imprimir, apropiadamente, "Ignasi es mayor que tú", Ignasi es más 
//  joven que tú" o "Tienes la misma edad que Ignasi". 

console.log( " Ejercicio 5:  Escribe un condicional que compare tu edad con la edad de Ignasi. ")
   if (edad > ignasiEdad) {
    console.log('Ignasi es mayor que tú');
   }
    else if (edad < ignasiEdad) {
    console.log('Ignasi es más joven que tú');
  } 
  else {
    console.log('Tienes la misma edad que Ignasi');
  }
  
  
  


