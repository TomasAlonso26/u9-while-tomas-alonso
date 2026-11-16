let seguirJugando = true;

while (seguirJugando) {
  let usuario = prompt('Elegí: "Piedra", "Papel" o "Tijera"').toLowerCase();

  // Validamos que el usuario escriba una opción válida
  while (usuario !== "piedra" && usuario !== "papel" && usuario !== "tijera") {
    usuario = prompt('Opción inválida. Escribí "Piedra", "Papel" o "Tijera"').toLowerCase();
  }

  // La computadora elige al azar con Math.random()
  let azar = Math.random();
  let computadora;
  if (azar < 0.33) {
    computadora = "piedra";
  } else if (azar < 0.66) {
    computadora = "papel";
  } else {
    computadora = "tijera";
  }

  // Reglas: la tijera corta al papel, el papel envuelve a la piedra, la piedra rompe la tijera
  if (usuario === computadora) {
    alert(`Empate: los dos eligieron ${computadora}.`);
  } else if (
    (usuario === "tijera" && computadora === "papel") ||
    (usuario === "papel" && computadora === "piedra") ||
    (usuario === "piedra" && computadora === "tijera")
  ) {
    alert(`¡Ganaste! La computadora eligió ${computadora}.`);
  } else {
    alert(`Perdiste. La computadora eligió ${computadora}.`);
  }

  seguirJugando = confirm("¿Te gustaría volver a jugar?");
}

alert("¡Gracias por jugar!");
