const start = process.hrtime();


// const array = [ 20, 78, 45, 30,, 87, 15, 13 ,51, 51, 54, 81, 64, 34, 321, 51, 2, 38, 12, 321,15 , 10,54, 61, 10, 30, 54, 21, 1,5,6,4,3,2  ]
const array = [ 6,4,3,2  ]
const requiredNum = 5

let busca = ( array, numero ) => {

    for( let a=0 ; a<array.length-1 ; a++ ){

        for( let b=a+1 ; b<array.length ; b++ ){

            if( (array[a] + array[b]) === numero ){
                return true                      
            }
            // console.log(array[b]);
        }

    }
    return false
}
console.log(array.length);

//  funcion buscar ( array, buscado )
//      para (indice A) desde (0) hasta (largo de arrary - 1)
//          para (indice B) desde (0) hasta (largo de array)
//              si num[A] + num[B] === a buscado
//                  retornar true
//      retornar false


//  funcion buscar2 ( array, numero )                               |       
//      nuevoArray = array filtrado (nums <= a numero)              |   
//      iniciar arrayUsados vacio                                   |
//      
//      para num en nuevoArray (for of)
//          resto = buscado - num
//          si ( resto esta en arrayUsados )
//              retornar true
//          agregar resto a arrayUsados    
//                  
//      retornar false





// console.log( array2 );
// array2.sort(function(a, b){return a - b})
// let filtrado = array2.filter(nums => nums <= requiredNum )

// console.log( array2 );
// console.log( filtrado );


let busca2 = ( array, numero ) => {

   
    let filtrado = array.filter(nums => nums <= numero )
    // console.log(filtrado);
    
    for( let a=0 ; a<filtrado.length-1 ; a++ ){

        for( let b=a+1 ; b<filtrado.length ; b++ ){

            if( (filtrado[a] + filtrado[b]) === numero ){
                // console.log(filtrado[a] + filtrado[b])
                
                return true                
            }
            
        }

    }
    return false
}




let busca3 = ( array, numero ) => {

    let filtrado = array.filter(nums => nums <= numero )

    for( let a=0 ; a<filtrado.length-1 ; a++ ){

        let x = numero - filtrado[a]
  
        if(filtrado.includes(x, filtrado[a+1])){
            return true
        }
    }
    return false
}

let busca4 = ( array, numero ) => {

    let filtrado = array.filter(nums => nums <= numero )

    for( let a=0 ; a<filtrado.length-1 ; a++ ){
  
        if(filtrado.includes((numero - filtrado[a]), filtrado[a+1])){
            return true
        }
    }
    return false
}



console.log(busca4(array, requiredNum))


const end = process.hrtime(start);
console.info(`Tiempo de ejecución ${end[1]/1000000} ms`);