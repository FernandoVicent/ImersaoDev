function sortearCarta(){

var numeroCartaMaquina = parseInt(Math.random() * 3 );
cartaMaquina = cartas[numeroCartaMaquina]


var numeroCartaJogador = parseInt(Math.random() * 3 );

while (numeroCartaMaquina == numeroCartaJogador) {
  numeroCartaJogador = parseInt(Math.random() * 3 );

}

cartaJogador = cartas[numeroCartaJogador]
console.log(cartaJogador)

document.getElementById("btnSortear").disabled = true;
document.getElementById("btnJogar").disabled = true;

exibirOpcoes()
}
