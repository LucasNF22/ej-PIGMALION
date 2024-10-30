
let array = [ 6, 4, 20, 78, 45, 30, 87, 15, 13 ,51, 51, 54, 81, 64, 3, 2  ]
let requiredNum = 5
let requiredNum2 = 20


/*
El primer ejercicio se resuelve iterando sobre todos los elementos sin tener en cuenta iteraciones 
repetidas y asumiendo que la suma tiene que ser sobre dos elementos distintos
 
   funcion buscar ( array, buscado )

      para (indice A) desde (0) hasta (largo de arrary)

         para (indice B) desde (0) hasta (largo de array)
         
            si ( a distinto de b ) y (num[A] + num[B] === a buscado)
               retornar true

      sino retornar false


*/


let buscar = ( array, buscado ) => {

   for( let a=0 ; a<array.length ; a++ ){

      for( let b=0 ; b<array.length ; b++ ){

         if ( (a != b) && ((array[a] + array[b]) === buscado) ) {      
            return true                      
         }    
      }
   }   
   return false
}

// -------------------------------------------------------------------------------------
/*
En el segundo ejercicio suponemos que los números son enteros y positivos.
Se crea un nuevo array filtrando elementos que sean mayores al número buscado para descartar cálculos innecesarios.
Luego se mediante un for of se itera el array, comparando si el valor que resta para llegar al numero buscado está dentro 
de un array creado para almacenar los elementos que ya se iteraron, evitando así iteraciones duplicadas.
En el caso que el número esté en el array se retorna true y sino se almacena ese número en el array para compararlo en 
la próxima iteración del ciclo.

   funcion buscar2 ( array, buscado )     
      filtrados = array filtrado (nums <= a numero)                
      iniciar arrayUsados vacio                                   
                                                                   
      para num en nuevoArray (for of)
         resto = buscado - num

         si ( resto esta en arrayUsados )
            retornar true
         agregar resto a arrayUsados    
                  
      retornar false

*/

let buscar2 = ( array, buscado ) => {
   let filtrados = array.filter(nums => nums <= buscado ) 
   let arrayUsados = []
   
   for( num of filtrados ){
      let resto = buscado - num

      if( arrayUsados.includes(resto) ){
         return true
      }
      arrayUsados.push(num)
      
   }   
   return false      
}
//------------------------------------------------------------  

console.log(buscar(array, requiredNum))
console.log(buscar2(array, requiredNum))
console.log(buscar(array, requiredNum2))
console.log(buscar2(array, requiredNum2))