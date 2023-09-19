
//objectos
let paises = [
  {nombre: "Argentina", precio: 0.40},
  {nombre: "Mexico", precio: 0.019},
  {nombre: "Peru", precio: 238},
  {nombre: "Estados Unidos", precio: 887},
];

let pregunta = prompt("¿Desea convertir CLP a algún país?")

while(pregunta != "si" && pregunta != "no"){
  alert("por favor introducta una de las repuesta SI o NO");
  pregunta = prompt("¿desea convertir dinero de CLP a un pais?");
}


if(pregunta == "si"){
  alert("esta es la lista de paises a convertir");
  //funcion de orden superior
  let todosLosPaises = paises.map(
    (pais) => pais.nombre + " " + "$" + pais.precio);
  //array
    alert(todosLosPaises.join(" - "))
}else if (pregunta == "no"){
  alert("gracias");
}

let pregunta2 = prompt("¿que pais desea seleccionar?");

function conversion() { //funcion
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
        console.log("La conversión es $" + numero);
      } while (numero == parseInt(Number));
    }
  };

conversion();









