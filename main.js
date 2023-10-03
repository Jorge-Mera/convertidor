

function calcular()
{

let moneda = document.getElementById("moneda").value;
let monto = document.getElementById("monto").value;
let argentina = 0.40;
let mexico = 0.019;
let peru = 238;
let estadosUnidos = 887;
let resultado = 0;


  if(moneda=="a")
  {
      resultado = monto * argentina;
  }else if(moneda =="b")
  {
      resultado = monto * mexico;
  }else if(moneda=="c")
  {
      resultado=monto*peru;
  }else if(moneda=="d")
  {
      resultado=monto*estadosUnidos;
  };


  document.getElementById("resultado").innerHTML="Resultado: $"+resultado.toFixed(2);
};