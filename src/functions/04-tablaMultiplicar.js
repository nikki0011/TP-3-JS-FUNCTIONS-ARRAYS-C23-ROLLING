// * 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

const pantalla = document.getElementById("pantalla");

const tablaMultiplicar = (num) =>{
    pantalla.innerHTML = "<h6 class='text-light text-start mb-2'>TABLA DEL "+num+"</h6>"
    for(let i=1; i<=10;i++){
        pantalla.innerHTML+=`<span class='text-secundary'>${num} X ${i} = ${num*i}</span><br/>`
    }
}

const multiplicador = parseInt(prompt('Ingrese numero de tablar a realizar'))
tablaMultiplicar(multiplicador)