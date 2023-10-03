let usuario = prompt("Piedra, papel o tijera").toLocaleLowerCase();
let resultado = "";

function contador() {
  return resultado++;
}

function empate(maquina) {
  alert(`Empate la maquina tambien eligio ${maquina}`);
}

function ganaste(maquina) {
  alert(`Ganaste la maquina eligio ${maquina}`);
}

function perdiste(maquina) {
  alert(`Perdiste la maquina eligio ${maquina}`);
}

while (usuario != "esc") {
  /* 
  1 = piedra
  2 = papel
  3 = tijera
  */

  let maquina = Math.floor(Math.random() * 3 + 1);

  function maquinaEleccion() {
    if (maquina == 1) {
      maquina = "piedra";
    } else if (maquina == 2) {
      maquina = "papel";
    } else if (maquina == 3) {
      maquina = "tijera";
    }
  }

  switch (usuario + maquina) {
    //Empates
    case "piedra" + 1:
      maquinaEleccion();
      empate(maquina);
      break;
    case "papel" + 2:
      maquinaEleccion();
      empate(maquina);
      break;
    case "tijera" + 3:
      maquinaEleccion();
      empate(maquina);
      break;
    //Ganador
    case "piedra" + 3:
      maquinaEleccion();
      ganaste(maquina);
      contador();
      break;
    case "papel" + 1:
      maquinaEleccion();
      ganaste(maquina);
      contador();
      break;
    case "tijera" + 2:
      maquinaEleccion();
      ganaste(maquina);
      contador();
      break;
    //Perdedor
    case "piedra" + 2:
      maquinaEleccion();
      perdiste(maquina);
      break;
    case "papel" + 3:
      maquinaEleccion();
      perdiste(maquina);
      break;
    case "tijera" + 1:
      maquinaEleccion();
      perdiste(maquina);
      break;
    default:
      break;
  }
  usuario = prompt("Piedra, papel o tijera").toLocaleLowerCase();
}

alert(`Haz ganado ${resultado} veces`);
