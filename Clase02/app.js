// 1.  Reforzamiento de Javascript modero

/* Variables
    var 
        let
            const */

var global = "var es una variable global y no se recomienda usarla"

let bloque = "let es una variable que se utiliza en bloque y es la mas recomenda"

const constante = "const es una variable usada para contantes"

// STRING

console.log("Metodo .concat".concat(" sirve para concatenar"))

// Desestructuración de Objetos

const persona = {
    nombre: "Francary",
    apellido: "Molina",
    din: 12345678,
    edad: 37,
}

const {nombre, apellido, din, edad} = persona

console.log(`Hola me llamo ${nombre} ${apellido}, tengo ${edad} años y mi dni es ${din} `)

// Arrays 

const days = [ "Lunes" , "Martes" , "Miercoles" , "Jueves", "Viernes", "Sabado", "Domingo"]

    // El REST OPERATOR  se llama con tres puntos y un nombre de variable que le demos para terminar de agrupar el resto del array 

const [lu, ma , mi , ju, vi, ...resto] = days

console.log(`Dias de Cursada ${ma} ${ju} ${vi} Dias libres ${lu} ${mi} Dias Finde ${resto}`)


// Manipulacion de Arrays

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const pares = []
const imprares = []

    // Metodo push
for (let i = 0 ; i< numeros.length; i++){
    if (numeros[i] % 2) {
        imprares.push(numeros[i])
    }
    else{
        pares.push(numeros[i])
    }
}
console.log("---Metodo push---")
console.log(imprares)
console.log(pares)

    // Metodo filter

const pares2 = numeros.filter( e => !(e % 2))
const imprares2 = numeros.filter( e => e % 2)
console.log("---Metodo filter---")
console.log(imprares2)
console.log(pares2)

    // Metodo map 

const doble = numeros.map( e => e *2)
console.log("---Metodo map---")
console.log(doble)

    // Metodo forEach()
    const miNumero = 5 
    console.log("---Metodo forEach---")
    numeros.forEach((e , i) => {
       if ( e === miNumero){
           console.log("Encontrado", i)   
       }
       else{
        console.log("Buscando", i) 
       }
    })  

    // Metodo find
 numeros.find(e => {
    if ( e === miNumero){
        console.log("---Metodo find---")
        return console.log("Encontrado" , e)
    }
 })
