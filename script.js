// Traemos DateTime de Luxon para trabajar con fechas
const DateTime = luxon.DateTime;

// Convertimos el campo de texto en un calendario
flatpickr("#fecha", {
  dateFormat: "d/m/Y",
  minDate: "01/01/1900",
  maxDate: "today"
});

// Guardamos los elementos del HTML en variables
const formulario = document.getElementById("formulario");
const campoFecha = document.getElementById("fecha");
const resultado = document.getElementById("resultado");

// Cuando se presiona "Calcular"
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  // Convertimos el texto del campo en una fecha de Luxon
  const nacimiento = DateTime.fromFormat(campoFecha.value, "dd/MM/yyyy");

  // Si la fecha no es válida, mostramos un error y paramos
  if (nacimiento.isValid === false) {
    resultado.textContent = "Por favor elige una fecha válida.";
    return;
  }

  // Calculamos la diferencia entre hoy y el nacimiento
  const edad = DateTime.now().diff(nacimiento, ["years", "months", "days"]);

  // Quitamos los decimales
  const anios = Math.floor(edad.years);
  const meses = Math.floor(edad.months);
  const dias = Math.floor(edad.days);

  // Mostramos el resultado
  resultado.innerHTML =
    "Tienes <strong>" + anios + " años, " + meses + " meses y " + dias + " días</strong>";
});
