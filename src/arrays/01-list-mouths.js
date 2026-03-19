// * 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

const pantalla = document.getElementById("pantalla");

const mounths = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

pantalla.innerHTML = `<ul class='text-light text-start text-decoration-underline fs-4 mb-3'>LISTA DE MESES`;

for (let i = 0; i < mounths.length; i++) {
  pantalla.innerHTML += `<li class='text-secundary list-style-position-inside'>${mounths[i]}</li>`;
}

pantalla.innerHTML += `</ul>`;
