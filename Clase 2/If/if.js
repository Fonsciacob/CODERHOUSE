var verdadero=true;

if(verdadero){
    console.log('Es verdadero');
}

var solicitarNombreDeUsuario=true;

if(solicitarNombreDeUsuario){
    var nombreUsuario=prompt('Ingrese su nombre:');
    alert(`Ingreso el nombre: ${nombreUsuario}`);
}else{
    alert('No es necesario ingresar tu nombre');
}

var a=1;
var b=1;

var aIgualb=a !=b;


var nameUser=prompt('Ingrese su nombre:');

if(nameUser !=''){
    alert(`Bienvenido ${nameUser}`);
}else{
    alert('Ingrese su nombre');
}