let input;

while (!(input = prompt("Escriba su nombre, por favor."))) {
  alert("No recibimos la información.");
}

alert("¡Gracias! Su nombre es: " + input + ".");
