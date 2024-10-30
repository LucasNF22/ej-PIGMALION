const array = [ 6, 4, 20, 78, 45, 30, 87, 15, 13 ,51, 51, 54, 81, 64, 3, 2  ]
const requiredNum = 5


/*
El primer ejercicio se resuelve iterando sobre todos los elementos sin tener en cuenta iteraciones 
repetidas y asumiendo que la suma tiene que ser sobre dos elementos distintos
*/

/*  

funcion buscar ( array, buscado )
   para (indice A) desde (0) hasta (largo de arrary)
      para (indice B) desde (0) hasta (largo de array)
         si ( a distinto de b ) y (num[A] + num[B] === a buscado)
            retornar true
   sino retornar false

*/


let busca = ( array, buscado ) => {

    for( let a=0 ; a<array.length ; a++ ){

        for( let b=0 ; b<array.length ; b++ ){

            if ( (a != b) && ((array[a] + array[b]) === buscado) ) {
               
               return true                      
            }    
        }
    }
    return false
}

/*
En el segundo ejercicio suponemos que los numeros son enteros y positivos.
Se crea un nuevo array filtrando elementos que sea

*/

//  funcion buscar2 ( array, buscado )                                     
//      filtrados = array filtrado (nums <= a numero)                
//      iniciar arrayUsados vacio                                   
//                                                                   
//      para num en nuevoArray (for of)
//          resto = buscado - num
//          si ( resto esta en arrayUsados )
//              retornar true
//          agregar resto a arrayUsados    
//                  
//      retornar false

let busca4 = ( array, buscado ) => {

   let filtrados = array.filter(nums => nums <= buscado )
   console.log(filtrados);
   
   let arrayUsados = []
   
   for( num of filtrados ){
      let resto = buscado - num

      if( arrayUsados.includes(resto) ){
         return true
      }

      arrayUsados.push(num)
      
   }
   console.log(arrayUsados);
   
   return false
       
}
   






let letras = ["a","b","c","d"]
let busca6 = ( letras, numero ) => {

   for( let a=0 ; a<letras.length ; a++ ){

       for( let b=0 ; b<letras.length   ; b++ ){

           if (a!=b){

              console.log(`${letras[a]} + ${letras[b]}`);
           } 

           
           
       }

   }
   return false
}


// console.log(busca6(letras, requiredNum))
console.log(busca(array, requiredNum))