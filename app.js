//La forma de comunicarnos con nuestro HTML es a través de Document, document es un objeto, que tiene algunos métodos y comportamientos.
//Funciona como un puente que permite trabajar con diversos métodos, como por ejemplo el query selector. Pertenecen al DOM
// DOM = DOCUMENT OBJECT MODEL

// let titulo = document.querySelector('h1'); //establece el título la página que tiene h1
// titulo.innerHTML = 'Juego del Número Secreto';

// let parrafo = document.querySelector('p'); //establece los párrafos de la página, en este caos sólo hay un párrafo por eso no genera otras modificaciones.
// parrafo.innerHTML = 'Escoge un número del 1 al 10.';

//let numeroSecreto = generarNumeroSecreto(); //guardamos el numero en una variable para poder utilizarlo luego

// function intentoDeUsuario() { //declaración de la función - encapsulamiento de una acción que queremos realizar. Lo llamamos desde HTML
//     alert('Click desde el botón.');
//     return; //permite que la función retorne valores
// }

// los inputs no retornan usualmente numeros, si strings.
// function verificarIntento(){ //vamos a capturar lo que el usuario colocó
//     //let numeroUsuario = document.querySelector('input');
//     let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); //buscamos el elemento por el valor específico del input osea, el id.
//     console.log(typeof(numeroUsuario)); //pedimos el tipo de valor que se está ingresando para saber si es número, string, etc.
//     console.log(numeroSecreto);
//     console.log(numeroSecreto);
//     console.log(numeroUsuario);
//     //console.log(numeroUsuario == numeroSecreto); //comapra los numeros, y retorna un booleano True or False
//     console.log(numeroUsuario === numeroSecreto); //el triple igual significa que tiene que ser igual en el valor y en el tipo de dato.
//     return;
// }

let numeroSecreto = 0; //valores iniciales le va a dar el numero correcto cuando lo llame en su función
let intentos = 0; //valoresiniciales le va a dar el número correcto
let listaNumeroSorteados = []; //esta lista almacena los números, y si ya fue sorteado no volverlo a jugar
let numeroMaximo = 10;

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //permite habilitar el botón de reiniciar el juego luego de que el jugador haya ganado
    } else {
        //el usuario no acertó
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor.');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor.');
        }
    }
    intentos++;
    limpiarCaja(); 
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; //se utiliza #para seleccionar el id del input
}


//La nueva función elimina la declaración de las variables de let titulo y let párrafo y permite hacer lsa modificaciones desde el llamado de la función.
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// function generarNumeroSecreto() {
//     let numeroSecreto = Math.floor(Math.random()*10)+1;
// }

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //se almacena el número en otra variable

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    // la función funciona como una función de salida dando el break al juego.
    if (listaNumeroSorteados == numeroMaximo) { //el validador se coloca porque tuvimos problemas con la recursividad y es un error que no debe aparecer.
        asignarTextoElemento('p', 'Ya has desbloqueado todos los números posibles.')
    } else {

        if (listaNumeroSorteados.includes(numeroGenerado)) { //el includes verifica si el valor ya existe en la lista
            return generarNumeroSecreto(); //la función puede ser llamada dentro de su misma función
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', `Escoge un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto(); //nueva llamada e invocación de la llamada sin borrar ni declarar otra variable.
    intentos + 1;  
}


function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio de intérvalos de números
    condicionesIniciales();
    //generar el número aleatorio
    //desabilitar el botón de nuevo juego
    //visibilizar el numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true'); //vuelve a deshabilitar el botón cuando se reinicia el juego.
}

condicionesIniciales();

//La función se puede llamar así, o dentro de HTML como evento.
// asignarTextoElemento('h1', 'Juego del Número Secreto');
// asignarTextoElemento('p', 'Escoge un número del 1 al 10:')


// Para añadir un elemento a una lista se utiliza el método push, para eliminar un elemento de la lista (el último), se utiliza el método pop.
