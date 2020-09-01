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


const Alumno ={
    fecha_de_nacimiento:'26/12/1997',
    Año_escolar: 10 //contando de 1 a 12, 1 siendo primero basico, 12 siendo cuarto medio.
}

console.log('La edad del alumno pedro es:',Alumno.fecha_de_nacimiento);

//Arrays/Arreglos
const arrayvacio=[]
const array = [1,2,'mundo', Alumno]

//console.log(arrayvacio,array);

//agregar elementos al array

array.push(5)//.push agrega elementos al final del array 

arrayvacio.push(Alumno.Año_escolar)//llenamos un array vacio
arrayvacio.push(Alumno.fecha_de_nacimiento)

console.log(array, arrayvacio);//desplegamos ambos arrays
