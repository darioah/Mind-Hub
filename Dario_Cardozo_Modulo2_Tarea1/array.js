// Ejercicio 1:  crea una matriz con todos los nombres de tu clase (incluidos los mentores).
//  Ordene la matriz alfabéticamente. Imprime el primer elemento de la matriz en la consola.
//   Imprime el último elemento de la matriz en la consola. Imprime todos los elementos de la 
//   matriz en la consola. Utilice un bucle "for".

    console.log("Ejercicio 1:  crea una matriz con todos los nombres de tu clase (incluidos los mentores).");
//  ------------------------------------
  const matriz1 = [ 'Nicolas', 'Luciano', 'Cecilia', 'Rosario', 'Oswaldo', 'Leaonardo', 'Keila', 'Sofia', 'Dario', 'Lilian', 'Paola' ]

  console.log("---Ordene la matriz alfabéticamente.----")
  console.log(matriz1.sort());
   console.log("--- Imprime el primer elemento de la matriz en la consola.---")
   console.log(matriz1.shift());
   console.log("---Imprime el último elemento de la matriz en la consola.---")
   console.log(matriz1.pop());

   console.log("---imprime todos los elementos de la  matriz en la consola.----");
    for (let i = 0; i < matriz1.length; i++) {
        console.log(matriz1[i]);
     }
// ---------------------------------------------------------------------------------------------
    // Ejercicio 2:  Crea una matriz con todas las edades de los estudiantes de tu clase.
    //  Itere la matriz usando un bucle while y luego imprima cada edad en la consola. 
    //  Agregue un condicional dentro del ciclo while para imprimir solo números pares.
    //   Cambie el bucle para usar un bucle "for" en lugar de un bucle "while".
    console.log( "Ejercicio 2:  Crea una matriz con todas las edades de los estudiantes de tu clase.");
    let matriz = [ '25', '22', '21', '23', '26', '29', '23', '20', '27', '28', '23' ]
    let i = 0;
    console.log(matriz)
    console.log("---Itere la matriz usando un bucle while y luego imprima cada edad en la consola.----")
        console.log("*-*---Ejercicio resuelto en  la linea 32(comentado), sucede que cree otro while en la linea 38---")
    //  while (i < matriz.length) {
        
    //      console.log(matriz[i]);
    //      i++;
    //  }
    console.log("---  Agregue un condicional dentro del ciclo while para imprimir solo números pares.---")
    while (i < matriz.length) {
        if (matriz[i] % 2 == 0) {
            
            console.log(matriz[i]);
        }
            i++;                   
       
    }
     console.log("---    Cambie el bucle para usar un bucle for en lugar de un bucle while.---")

     for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i]);
     }
//  -----------------------------------------------------------------------
    //  Ejercicio 3:  escriba una función que reciba una matriz 
    //  como parámetro e imprima el número más bajo de la matriz en la consola.
    console.log( " Ejercicio 3:  escriba una función que reciba una matriz como parámetro e imprima el número más bajo de la matriz en la consola. ")  
    var matriz3 = [ '25', '22', '21', '23', '26', '29', '23', '20', '27', '28', '23' ]
    
    function numeroMasBajo(matriz3) {
         let numeroMasBajo = Math.min(...matriz3) ;
         return numeroMasBajo;
 } 
    console.log(matriz3);
    console.log( "el numero mas bajo es: " + numeroMasBajo(matriz3));
  

    //  -----------------------------------------------------------------------
    // Ejercicio 4:  Escriba una función que reciba una matriz como parámetro e imprima 
    // el número más grande de la matriz en la consola.

    console.log(" Ejercicio 4:  Escriba una función que reciba una matriz como parámetro e imprima el número más grande de la matriz en la consola. ")
    var matriz4 = [ '25', '22', '21', '23', '26', '29', '23', '15', '27', '28', '13' ]
    function numeroMasGrande(matriz4) {
        let numeroMasGrande = Math.max(...matriz4) ;
        return numeroMasGrande;
    }
    console.log(matriz4);
    console.log("El numero mas grande es:" + numeroMasGrande(matriz4));

    // Ejercicio 5:  Escribe una función que reciba dos parámetros,
    //  una matriz y un índice. La función imprimirá el valor del 
    //  elemento en la posición dada (basado en uno) en la consola.

    // Por ejemplo, dada la siguiente matriz e índice, la función imprimirá '6'
    console.log(" Ejercicio 5:  Escribe una función que reciba dos parámetros, una matriz y un índice. La función imprimirá el valor del  elemento en la posición dada (basado en uno) en la consola. ")

    var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
    var index = 1;

    function print_item(array, index) {
        console.log(array[index]);
    }
     console.log(array)
     console.log( "La posicion 1 tiene el valor de : " );
    print_item(array, index);

    // Ejercicio 6:  Escriba una función que reciba una matriz y solo imprima los valores que se repiten. 
// Por ejemplo, dada la siguiente matriz, la función imprimirá '6,23,33,100'.
    console.log(" Ejercicio 6:  Escriba una función que reciba una matriz y solo imprima los valores que se repiten. ")
    var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 
    
    
        
    function repetidos(array) {
        let repetidos = [];
        for (let i = 0; i < array.length; i++) {
            for (let j = i+1 ; j < array.length; j++) {
                if (array[i] == array[j]) {
                    repetidos.push(array[i]);
                }
            }
        }
        return repetidos;

    }
    console.log(array)
    console.log( "Los repetidos son: "+ repetidos(array));


    // Ejercicio 7:  escriba una función de JavaScript simple para unir todos
    //  los elementos de la siguiente matriz en una cadena.
    console.log(("Ejercicio 7:  escriba una función de JavaScript simple para unir todolos elementos de la siguiente matriz en una cadena. "));


var myColor = ["Red", "Green", "White", "Black"];
console.log(myColor);
//DUDA ACA COMO PONgo LAS COMILLAS " " ????
function join(myColor) {
    let cadena = myColor.join(" ");
    return cadena;
}
console.log(join(myColor));

