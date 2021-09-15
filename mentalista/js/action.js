var numeroSecreto = parseInt(Math.random() * 11);
var resultado = document.getElementById("resultado");
var tentativas = 7;

function Chutar() {
  if (tentativas > 0) {
    var chute = parseInt(document.getElementById("valor").value);

    //Usar dois == para comparar valores, apenas um = para atribuir valores

    if (chute == numeroSecreto) {
      resultado.innerHTML = "Você acertou!";
      numeroSecreto = parseInt(Math.random() * 11);
    } else if (chute > 10 || chute < 0) {
      resultado.innerHTML = "Você deve escrever um número entre 0 e 10";
    } else if (chute < numeroSecreto) {
      resultado.innerHTML = "Você errou! O meu número é maior!";
      tentativas--;
    } else {
      resultado.innerHTML = "Você errou! O meu número é menor!";
      tentativas--;
    }
  } else {
    resultado.innerHTML = "Você esgotou todas as tentativas!";
  }
}

function Dificuldade() {
  var Tentativas = document.getElementById("Dificuldade");
  tentativas = parseInt(Tentativas.value);
  resultado.innerHTML = "";
}
