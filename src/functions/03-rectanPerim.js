// * 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

const pantalla = document.getElementById('pantalla')

function perimetroRectangulo(){
    let lado1= Number(prompt('ingrese lado uno del rectangulo'))
    console.log(lado1)
    let lado2= Number(prompt('ingrese lado uno del rectangulo'))
    console.log(lado2)
    const perimetro= (lado1+lado2)*2
    pantalla.innerHTML=`<span class="text-secundary">Perimetro del rectangulo: </span><span class="text-warning">${perimetro}</span>`
}

perimetroRectangulo()