// Traemos DateTime de Luxon para trabajar con fechas
const DateTime = luxon.DateTime;

// Convertimos el campo de texto en un calendario
flatpickr("#fecha", {
  dateFormat: "d/m/Y",  // día/mes/año
  maxDate: "today"      // no deja elegir fechas futuras
});

// Guardamos los elementos del HTML en variables
const formulario = document.getElementById("formulario");
const campoFecha = document.getElementById("fecha");
const resultado = document.getElementById("resultado");

// Cuando se presiona "Calculate"
formulario.addEventListener("submit", function (evento) {

  // Evita que la página se recargue
  evento.preventDefault();

  // Convertimos el texto del campo en una fecha de Luxon
  // dd = día, MM = mes, yyyy = año
  const nacimiento = DateTime.fromFormat(campoFecha.value, "dd/MM/yyyy");

  // Si la fecha no es válida, mostramos un error y paramos
  if (nacimiento.isValid = false) {
    resultado.textContent = "Por favor elige una fecha válida.";
    return;
  }

  // Fecha de hoy
  const hoy = DateTime.now();

  // Calculamos la diferencia entre hoy y el nacimiento
  const edad = hoy.diff(nacimiento, ["years", "months", "days"]);

  // Quitamos los decimales
  const anios = Math.floor(edad.years);
  const meses = Math.floor(edad.months);
  const dias = Math.floor(edad.days);

  // Mostramos el resultado en la página
  resultado.innerHTML =
    "You are <strong>" + anios + " years " + meses + " months " + dias + " days</strong> old";
});