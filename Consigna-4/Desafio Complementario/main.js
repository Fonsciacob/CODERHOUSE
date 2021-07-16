function ingresarDatos(){

    alert("PROMEDIO GENERAL DEL SALON A DEL CURSO DE QUIMICA");
    let num = parseInt(prompt("Ingrese cantidad de alumnos"));
    let notes = [];
    let suma = 0;

    const allnotes = ()=>{
        for(i=0;i<num;i++){
            notes.push(parseInt(prompt("Ingrese nota:")));
        }
    }

    allnotes();

    notes.forEach(function(numero){
        suma += numero;
    });

    const promedio = (a,b) =>{
        return a/b;
    }

    alert(`El promedio general del salon es: ${promedio(suma,num)}`);
}

ingresarDatos();