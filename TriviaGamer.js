// Declaración de preguntas (array de objetos)
const preguntas = [
  {
    pregunta: "¿Cuál fue la primera consola de videojuegos doméstica?",
    opciones: ["Atari 2600", "NES", "Magnavox Odyssey", "PlayStation 1"],
    respuesta: 3
  },
  {
    pregunta: "¿Quién es el personaje principal de la saga 'The Legend of Zelda'?",
    opciones: ["Zelda", "Link", "Ganondorf", "Epona"],
    respuesta: 2
  },
  {
    pregunta: "¿Qué empresa desarrolló el juego 'Minecraft'?",
    opciones: ["Epic Games", "Mojang", "Valve", "Ubisoft"],
    respuesta: 2
  },
  {
    pregunta: "¿En qué año se lanzó el primer juego de Pokémon?",
    opciones: ["1995", "1996", "1997", "1998"],
    respuesta: 2
  },
  {
    pregunta: "¿Cuál es el nombre del plomero más famoso de los videojuegos?",
    opciones: ["Luigi", "Mario", "Wario", "Toad"],
    respuesta: 2
  }
];

// Variables de estado
let puntaje = 0;
let nombreJugador = "";

// Función principal del juego
function jugarTrivia() {
  nombreJugador = prompt("¡Bienvenido! ¿Cuál es tu nombre?");
  if (!nombreJugador) {
    alert("Debes ingresar un nombre para jugar.");
    return;
  }

  alert("Hola, " + nombreJugador + ". ¡Comienza la trivia gamer!");
  console.log("Jugador:", nombreJugador);

  for (let i = 0; i < preguntas.length; i++) {
    const p = preguntas[i];
    let mensaje = `Pregunta ${i + 1}:\n${p.pregunta}\n`;
    for (let j = 0; j < p.opciones.length; j++) {
      mensaje += `${j + 1}. ${p.opciones[j]}\n`;
    }

    let respuestaUsuario = parseInt(prompt(mensaje));
    if (respuestaUsuario === p.respuesta) {
      alert("¡Correcto!");
      puntaje++;
    } else {
      alert(`Incorrecto. La respuesta correcta era: ${p.opciones[p.respuesta - 1]}`);
    }

    console.log(`Pregunta ${i + 1}: Respuesta del jugador: ${respuestaUsuario}`);
  }

  alert(`${nombreJugador}, tu puntaje final fue: ${puntaje} de ${preguntas.length}`);
  console.log("Puntaje final:", puntaje);

  const jugarDeNuevo = confirm("¿Querés jugar de nuevo?");
  if (jugarDeNuevo) {
    puntaje = 0;
    jugarTrivia(); // Recursivo
  } else {
    alert("¡Gracias por jugar!");
  }
}