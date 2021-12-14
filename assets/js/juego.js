/**
 * 2C = Two of Clubs / Treboles
 * 2D = Two of Diamonds /Diamantes
 * 2H = Two of Hearts / Corazones
 * 2S = Two of Spades / Espadas
 */

//ELEMENTOS DEL DOM
const botonPedirCarta = document.querySelector('#boton-pedir-carta');
console.log(botonPedirCarta)
const puntajeJugador = document.querySelector(".puntaje-jugador")
console.log(puntajeJugador)
const divCartasJugador = document.querySelector('#jugador-cartas');
console.log(divCartasJugador)
const divCartasComputadora = document.querySelector('#computadora-cartas');
console.log(divCartasComputadora)

//CARTAS
let deck = []
const tipos = ["C","D","H","S"]
const especiales = ["A","J","Q","K"]

let puntosJugador = 0
    puntosComputadora = 0

//ESTA FUNCION CREA UNA NUEVA VARAJA
const crearDeck = () =>{
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo)    
        }
    }
    for (let tipo of tipos){
        for(let esp of especiales) {
            deck.push(esp + tipo)
        }
    }
    //console.log(deck)
    deck = _.shuffle(deck)
    console.log(deck)
    return deck
}
crearDeck()

//ESTA FUNCION ME PERMITE PEDIR UNA CARTA
const pedirCarta = () => {
    if(deck.length === 0){throw "no hay cartas en el Deck"}
    const carta = deck.pop()
    return carta
}

//ESTA FUNCION ME DICE CUANTOS PUNTOS VALE LA CARTA
const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length -1)
    return ( isNaN (valor) ) ?
            ( valor === "A") ? 11 : 10
            : valor * 1
}

//JUGADA DE LA COMPUTADORA
const turnoDeLaComputadora = (puntosMinimos) => {

}


//EVENTOS
botonPedirCarta.addEventListener("click", () => {
    const carta = pedirCarta()
    console.log(carta)
    puntosJugador = puntosJugador + valorCarta(carta)
    console.log(puntosJugador)
    puntajeJugador.innerHTML = puntosJugador
    console.log(puntajeJugador)
    //<img  class="carta" src="assets/cartas/10C.png" alt="">
    const imgCarta = document.createElement("img")
    imgCarta.src = `assets/cartas/${carta}.png`
    imgCarta.classList.add("carta")
    divCartasJugador.append(imgCarta)
    if (puntosJugador > 21) {
        console.log("perdiste :(")
        botonPedirCarta.disabled = true
    } else if (puntosJugador === 21) {
        console.log("21,suerte!!")
        botonPedirCarta.disabled = true
    }
})
