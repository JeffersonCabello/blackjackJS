/* 
    *2C = Two of Clubs (Treboles)
    *2D = Two of Diamonds (Diamantes)
    *2H = Two of Hearts (Corazones)
    *2S = Two of Spades (Espadas)
*/

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let cartasJugador = [];
let cartasComputadoras = [];

// Esta funcion crea un nuevo deck
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }

    //console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}


crearDeck();

// Esta funcion me permite tomar una carta

const pedirCarta = () => {
    console.log("Largo del Deck: ", deck.length);
    if (deck.length === 0) {
        throw "No hay cartas en el deck";
    }
    const carta = deck.pop();
    console.log(carta); // carta debe de ser de la baraja;
    return carta;
}

//deck = [];
//pedirCarta();

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ? (valor === "A") ? 11 : 10
        : valor * 1;
}

const valor = valorCarta("KD");

console.log(valor);

//console.log(deck);