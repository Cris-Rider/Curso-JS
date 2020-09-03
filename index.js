//FUNCIONES

function iterar(arg1){
    for (let i=0;i<arg1.length;i++){
        //console.log(arg1[i]);
    }
} 

function suma(a,b){
    return a+b;
}

const resultadosuma1=suma(1,2)
const resultadosuma2=suma(5,7)
const resultadosuma3=suma(resultadosuma1,resultadosuma2)
//console.log('resultado:', resultadosuma3);

//CALLBACKS

function sumar(a,b,cb){
    const r=a+b
    cb(r)
}

function callback(result){
    console.log('resultado', result);
}

//sumar(2,3,callback)

//FAT ARROW FUNCTIONS

const miFatArrowFunction = (a,b) => a + b 
const otrafaf = (a,b) => {
    return a+b
}
console.log(miFatArrowFunction(1,2));
console.log(otrafaf(2,4));
const x = otrafaf(1,2)

sumar(2,3,function(x){
    console.log('soy una funcion anonima y mi resultado es:', x)
})
