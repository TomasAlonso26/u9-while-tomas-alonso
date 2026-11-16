let victoriasUsuario = 0;
let victoriasMaquina = 0;

// CORRECCIÓN 1: con && el bucle se corta apenas uno de los dos llega a 3 victorias
while (victoriasUsuario < 3 && victoriasMaquina < 3) {
  // CORRECCIÓN 2: normalizamos el texto para que no importen mayúsculas, minúsculas ni espacios
  let jugada = prompt("Elige: Piedra, Papel o Tijera").trim().toLowerCase();

  if (jugada !== "piedra" && jugada !== "papel" && jugada !== "tijera") {
    alert(`"${jugada}" no es una opción válida. Probá de nuevo.`);
    continue;
  }

  let azar = Math.random();
  let jugadaMaquina = "";

  if (azar < 0.33) {
    jugadaMaquina = "piedra";
  } else if (azar < 0.66) {
    jugadaMaquina = "papel";
  } else {
    jugadaMaquina = "tijera";
  }

  // CORRECCIÓN 3: Template Literal en lugar de concatenación
  console.log(`La máquina eligió: ${jugadaMaquina}`);

  // Lógica de victoria
  if (jugada === jugadaMaquina) {
    alert(`Empate: los dos eligieron ${jugada}.`);
  } else if (
    (jugada === "piedra" && jugadaMaquina === "tijera") ||
    (jugada === "papel" && jugadaMaquina === "piedra") ||
    (jugada === "tijera" && jugadaMaquina === "papel")
  ) {
    // CORRECCIÓN 4: acumuladores
    victoriasUsuario++;
    alert(`Ganaste la ronda. Marcador: Vos ${victoriasUsuario} - Máquina ${victoriasMaquina}`);
  } else {
    victoriasMaquina++;
    alert(`La máquina ganó la ronda. Marcador: Vos ${victoriasUsuario} - Máquina ${victoriasMaquina}`);
  }
}

// CORRECCIÓN 5: operador ternario para anunciar al campeón
let campeon = victoriasUsuario === 3 ? "¡Vos!" : "La máquina";
alert(`🏆 Campeón del torneo: ${campeon} (${victoriasUsuario} a ${victoriasMaquina})`);
