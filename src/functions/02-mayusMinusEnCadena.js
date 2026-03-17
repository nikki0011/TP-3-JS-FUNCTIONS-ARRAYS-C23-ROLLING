// * 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

const pantalla = document.getElementById("pantalla");
const cadena = prompt("ingrese cadena de texto");

const mayusMinusEnCadena = (cadena) => {
  let mayus = 0;
  let min = 0;
  let espacios = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === cadena[i].toLowerCase() && cadena[i] !== " ") {
      min++;
    } else if (cadena[i] === " ") {
      espacios++;
    } else {
      mayus++;
    }
    console.log(mayus, min);
    if (mayus > 0 && min === 0) {
      pantalla.innerHTML =
        "<span class='text-secundary'>La cadena de texto ingresada esta formada solo por MAYÚSCULAS</span>";
    } else if (min > 0 && mayus === 0) {
      pantalla.innerHTML =
        "<span class='text-secundary'>La cadena de texto ingresada esta formada solo por Minúsculas</span>";
    } else {
      pantalla.innerHTML =
        "<span class='text-secundary'>La cadena de texto ingresada esta formada por MAYÚSCULAS y Minúsculas</span>";
    }
  }
};

mayusMinusEnCadena(cadena);
