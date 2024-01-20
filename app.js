// La premisa del desafio: El sistema generará un número
// del 1 al 10 y tendremos x intentos para adivinarlo
let numeroSecreto = 20;
let numeroIntentos = 5;
let contadorIntentos = 0;
let numeroUsuario;
let textoCondicional = "intento";
while (contadorIntentos < numeroIntentos) {
  console.log(`Esta es la iteración número ${contadorIntentos}`);
  numeroUsuario = prompt("¿Cuál crees que es el número secreto?");
  if (numeroUsuario == numeroSecreto) {
    alert(
      `¡Has ganado!, lograste adivinar el número secreto en ${
        contadorIntentos + 1
      } ${textoCondicional}`
    );
    break;
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("Intenta con un número menor");
    } else if (numeroUsuario < numeroSecreto) {
      alert("Intenta con un número mayor");
    }
    textoCondicional = "intentos";
  }
  contadorIntentos++;
}
if (numeroIntentos == contadorIntentos) {
  alert("Has perdido! :(");
}
