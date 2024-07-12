// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarListaLenguajes() {
    console.log(lenguajesDeProgramacion);
}

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function listaInversa(){
    console.log(lenguajesDeProgramacion.reverse());
}

// Crea una función que calcule el promedio de los elementos en una lista de números.
let listaNumeros = [8,6,10];

function calcularPromedio(listaNumeros) {
    let cantidadElementos = listaNumeros.length();
    let suma = 0;

    for (let i = 0; i < cantidadElementos; i++) {
        suma += listaNumeros[i];
    }

    let resultado = suma/cantidadElementos;
    return resultado;
}

let promedio = calcularPromedio(listaNumeros);
console.log('Promedio', promedio)

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mostrarMayorYMenor(lista) {
    let mayor = Math.max(...lista);
    let menor = Math.min(...lista);
    console.log(`Número más grande: ${mayor}, Número más pequeño: ${menor}`);
}

let numeros = [8, 6, 10, 3, 15];
mostrarMayorYMenor(numeros);


// Crea una función que devuelva la suma de todos los elementos en una lista.
function sumarElementos(lista) {
    let suma = lista.reduce((acc, num) => acc + num, 0);
    return suma;
}

let suma = sumarElementos(numeros);
console.log(`Suma de los elementos: ${suma}`);


// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function buscarElemento(lista, elemento) {
    return lista.indexOf(elemento);
}

let posicion = buscarElemento(numeros, 10);
console.log(`Posición del elemento: ${posicion}`);


// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        throw new Error("Las listas deben tener el mismo tamaño");
    }

    let listaSuma = [];
    for (let i = 0; i < lista1.length; i++) {
        listaSuma.push(lista1[i] + lista2[i]);
    }
    return listaSuma;
}

let lista1 = [1, 2, 3];
let lista2 = [4, 5, 6];
let listaResultado = sumarListas(lista1, lista2);
console.log(`Lista resultante: ${listaResultado}`);


// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadrados(lista) {
    return lista.map(num => num * num);
}

let listaCuadrados = cuadrados(numeros);
console.log(`Lista de cuadrados: ${listaCuadrados}`);
