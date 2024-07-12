// Crear una función que muestre "¡Hola, mundo!" en la consola.
function mensaje() {
    console.log("Hola Mundo");
}
mensaje();


// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function mensajeConNombre(nombre){
    console.log(`¡Hola, ${nombre}!`);
}
mensajeConNombre('Ana Lucía')


// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleNumero(numero){
    return (numero*2);
}

let resultadoDoble = dobleNumero(5);
console.log(resultadoDoble);

// Crear una función que reciba tres números como parámetros y devuelva su promedio.
function calcularPromedio(num1, num2, num3){
    return (num1 + num2 + num3)/3;
}

let promedio = calcularPromedio(4,7,10);
console.log(promedio);

// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function encontrarMayor(a, b){
    return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15,9);
console.log(numeroMayor);

// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function cuadrado(numero){
    return numero*numero;
}

let resultado = cuadrado(2);
console.log(resultado);
