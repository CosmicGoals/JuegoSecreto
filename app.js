let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;


function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroSecreto === numeroDeUsuario) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "Veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    /*El usuario no acertó*/
    if (numeroSecreto > numeroDeUsuario) {
      asignarTextoElemento("p", "El número  secreto es Mayor");
    } else {
      asignarTextoElemento("p", "El número secreto es menor");
    }
    intentos++;

    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function asignarTextoElemento(elemento, texto) {
  let titulo = document.querySelector(elemento);
  titulo.innerHTML = texto;
}

function activarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

  console.log(numeroGenerado);  
  console.log(listaDeNumerosSorteados);
  if(listaDeNumerosSorteados.length==numeroMaximo){
    asignarTextoElemento('p','Ya se han sorteado todos los números posibles')

  }else{
    
    if (listaDeNumerosSorteados.includes(numeroGenerado)){
        numeroGenerado();
        
    }else{
        listaDeNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }}
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Bienvenido al juego del número secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = activarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //Para hacer esta función tendramos que :

  //limpiar caja
  limpiarCaja();
  //indicar mensajes de intervalo de números
  // generar el número aeleatorio
  // Deshabiliar el botón de 'nuevo juego'
  //inicializar el número de intentos
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", "True");
}

condicionesIniciales();
