// * 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

const pantalla = document.getElementById("pantalla");
const entero = parseInt(prompt("ingrese numero entero"));

const parEimpar = (num) =>
  !(num % 2)
    ? (pantalla.innerHTML =
        "<span class='text-secundary'>El Número ingresado " +
        entero +
        " es: </span>" +
        "<span class=' text-warning'>Par</span>")
    : (pantalla.innerHTML =
        "<span class='text-secundary'>El Número ingresado " +
        entero +
        " es: </span>" +
        "<span class='text-warning'>Impar</span>");

parEimpar(entero);
