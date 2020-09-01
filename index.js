//Para correr el archivo js se debe escribir en la terminal "node (nombre del archivo).js
console.log('Hola Mundo, este es mi primer console.log') // imprime lo que se encuentre dentro de ('') 

//TIPOS DE DATOS EN JS
//string: cadena de "caracteres".
//boolean: true/false.
//null: nulo.
//number: como un int.
//undefinied.
//object: objeto.

//DEFINICION DE VARIABLES
//var
//let
//const

// var miPrimeraVariable = 'var'

let miPrimeraVariable = 'primera variable'
console.log(miPrimeraVariable);
// mutabilidad
miPrimeraVariable = 'he reasignado el valor'
console.log(miPrimeraVariable);

//boolean
let miBoolean = true
let miotroBoolean = false

let minumero = 0
let minumero2 = 12
let minumero3 = -123

console.log(minumero, minumero2, miBoolean, miPrimeraVariable);

let undef //varibale indefinida
console.log(undef);

let nulo = null //variable null
console.log(nulo);

//Objeto vacio
const miPrimerObjeto = {}

//Objeto
const miObjeto = {
    numero: 12,
    string: 'cadena de caracteres',
    condicion: true,
}

console.log(miObjeto);

const Alumno ={
    fecha_de_nacimiento:'26/12/1997',
    Año_escolar:10 //contando de 1 a 12, 1 siendo primero basico, 12 siendo cuarto medio.
}

console.log('La edad del alumno pedro es:',Alumno.fecha_de_nacimiento);