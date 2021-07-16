let options = prompt("Que operacion desea utilizar? \nOpciones: 1->Multipilcar 2->Sumar \nNota: Por favor ingrese la opcion con un número.");

var multipilcar = (a,b) => { return a*b }
var sumar = (a,b) => { return a+b }

if (options == 1){
    let param1 = parseInt(prompt("Ingrese el primer numero"));
    let param2 = parseInt(prompt("Ingrese el segundo numero"));

    alert(`El resultado de la multiplicacion es: ${multipilcar(param1,param2)}`);
}else if(options == 2){
    let param1 = parseInt(prompt("Ingrese el primer numero"));
    let param2 = parseInt(prompt("Ingrese el segundo numero"));

    alert(`El resultado de la suma es: ${sumar(param1,param2)}`);
}
else if(typeof options != Number){
    alert("La opcion ingresada no es un número!");
}else{
    alert("No hay una opcion con el número ingresado");
}

