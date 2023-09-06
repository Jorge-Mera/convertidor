/*
function conversion (){
    let dolar = 854;
    let numero = prompt("introduce un numero a convertir de dolares a CLP");
        do{
            numero = prompt("introduce un numero a convertir de dolares a CLP");
            alert("el valor es " + numero*dolar);
        }while(numero = parseInt(numero)){
            prompt("introduce un numero a convertir de dolares a CLP");
            numero++;
        };
}


function conversion (){
    let dolar = 854;
    let numero = prompt("introduce un numero a convertir de dolares a CLP");
    if(!isNaN (numero) && numero>0){
        alert("el valor es 0");
    }
    else(numero!=NaN){
        alert("error en el ingreso");
    }
}*/



/*

function resultadoConversion(){
    let veces = parseInt(prompt("cuantas veces convertiremos?"));
    let numeroConvertir = parseInt(prompt("cuanto quieres convertir?"));
    let dolar = 850;

    for (let i = 0; i<=veces; i++){
        let total = numeroConvertir*i;
        console.log("el valor total es: " + numeroConvertir*dolar);
        if(numeroConvertir=NaN){
            console.log("hay un error");
        }else if(numeroConvertir=0){
            console.log("el resultado es obvio es: 0")
        }else{
            console.log("el total es: " + total);
        }
    }
}

resultadoConversion();

*/


/*
let dolar = 850;
  
while(numero = parseInt(numero));
        console.log(numero*dolar);
       // if(numero=prompt(""))
    //if(numero = 0){


              switch (numero){
            case Number:
                console.log(numero*dolar);
             break;
            case 0:
                console.log("es un resultado logico ¿no? es 0");
             break;
            case "":
                console.log("debe introducir un numero");
             break;
            default:
                console.log("se a encontrado un error");
             break;
        }
        numero = prompt("introduce un numero a convertir de dolares a CLP");

        */
   // }

/*
function conversion() {
    
  
const dolar = 854;
do{
   let numero = prompt("introduce un numero a convertir de dolares a CLP");
    console.log(numero*dolar);
}while (parseInt(numero));

if(numero = prompt("")){
    alert("debe introducir un numero");
if(numero == 0){
    console.log("es un resultado logico ¿no? es 0")
}};
};

conversion();

*/




function conversion() { //funcion
    const dolar = 854;
    let numero = prompt("introduce un numero a convertir de dolares a CLP");

    //condicionales
    if (numero == 0) {
      console.log("es un resultado logico ¿no?");
    }
    if (numero == "") {
        alert("introduce un dato");
      }
    else {

    //ciclo
      do {
        console.log("La conversión es $" + numero*dolar);
      } while (numero == parseInt(Number));
    }
  };

conversion();






