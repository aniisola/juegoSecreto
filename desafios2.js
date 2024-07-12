// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(altura, peso){
    let imc = peso / (altura * altura);
    return imc;
}

// Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero){
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactural(numero-1);
    }
}

let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolaresAReales(dolares){
    let cotizacionDolar = 4.80;
    let reales = dolares * cotizacionDolar;
    return reales;
}

let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares es R$ ${valorEnReales}`);

// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularAreaYPerimetroRectangular(altura, anchura) {
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }

let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreaYPerimetroRectangular(altura, anchura);

// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calcularAreaYPerimetroCircular(radio) {
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }

let radio = 4; // en metros
calcularAreaYPerimetroCircular(radio);

// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function mostrarTablaDeMultiplicar(numero2) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero2 * i;
      console.log(numero2 + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
let numero2 = 7;
mostrarTablaDeMultiplicar(numero);