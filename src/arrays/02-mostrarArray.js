// * 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

const pantalla = document.getElementById("pantalla");
let salida = true;
const promptInicial = prompt("Ingrese ciudad a almacenar");
const arrayCities = [];
arrayCities.push(promptInicial);
while (salida === true) {
  if (confirm("Desea agregar otra ciudad")) {
    const promptLocal = prompt("Ingrese siguiente  ciudad");
    arrayCities.push(promptLocal);

    salida = true;
  } else {
    pantalla.innerHTML = `<span class='text-light fs-5'>Array: </span><span text-secundary>${arrayCities}</span><br/>`;
    pantalla.innerHTML += `<span class='text-light fs-5'>Longitud del arreglo: </span><span text-secundary>${arrayCities.length - 1}</span><br/>`;
    pantalla.innerHTML += `<span class='text-light fs-5'>Primera, tercera y última ciudad del Array respectivamente : </span><span text-secundary>${arrayCities[0]},${arrayCities[2]}, ${arrayCities[arrayCities.length - 1]}</span><br/>`;
    arrayCities.push("Paris");
    pantalla.innerHTML += `<span class='text-light fs-5'>Array con ciudad 'Paris' agregada: </span><span text-secundary>${arrayCities}</span><br/>`;
    pantalla.innerHTML += `<span class='text-light fs-5'>Ciudad que ocupa la segunda posición en Array : </span><span text-secundary>${arrayCities[1]}</span><br/>`;
    arrayCities[1] = "Barcelona";
    pantalla.innerHTML += `<span class='text-light fs-5'>Array con posición 2 sustituida por 'Barcelona': </span><span text-secundary>${arrayCities}</span><br/>`;

    salida = false;
  }
}
