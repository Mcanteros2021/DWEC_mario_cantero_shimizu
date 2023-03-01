let TOTAL_PREGUNTAS = 0;
const PUNTOS_ACIERTO = 1;
const PUNTOS_ERROR = -2; // el doble de lo que suma una acertada
const PUNTOS_SIN_CONTESTAR = -0.5; // la mitad de lo que vale una acertada

const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const numAcertadas = parseInt(formulario.acertadas.value);
  const numIncorrectas = parseInt(formulario.incorrectas.value);
  const numSinContestar = parseInt(formulario.sinContestar.value);

  TOTAL_PREGUNTAS = numAcertadas + numIncorrectas + numSinContestar;

  const notaFinal = (numAcertadas * PUNTOS_ACIERTO) + (numIncorrectas * PUNTOS_ERROR) + (numSinContestar * PUNTOS_SIN_CONTESTAR);
  const notaSobre10 = notaFinal / (TOTAL_PREGUNTAS / 10);

  resultado.innerHTML = `<p>Has puesto: <strong>${TOTAL_PREGUNTAS} de preguntas </strong></p>
                         <p>Tu nota final es: <strong>${notaSobre10.toFixed(2)}</strong></p>`

});