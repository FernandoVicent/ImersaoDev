var carta1 = {
  nome: "aang",
  imagem:"https://i.pinimg.com/474x/6e/7c/d5/6e7cd5b4583e8f72249986eb97c8659b.jpg",
  atributos: {
    ataque: 8,
    defesa: 9,
    magia: 7
  }
};
var carta2 = {
  nome: "Katara",
  imagem: "https://i.pinimg.com/originals/3f/2f/f3/3f2ff3fe7433119f1215fc8f1f6a25ac.png",
  atributos: {
    ataque: 6,
    defesa: 8,
    magia: 7
  }
};
var carta3 = {
  nome: "toph",
  imagem:"https://img.quizur.com/f/img5f3ffa0fce09a2.47161613.jpg?lastEdited=1598028308",
  atributos: {
    ataque: 8,
    defesa: 2,
    magia: 4
  }
};
var carta4 = {
  nome: "soka",
  imagem:"https://pbs.twimg.com/profile_images/1259900211985596417/EndhtW1q_400x400.jpg",
  atributos: {
    ataque: 7,
    defesa: 5,
    magia: 0
  }
};
var carta5 = {
  nome: "zuko",
  imagem:"https://i.pinimg.com/originals/c3/03/ab/c303abbaa8022cde6cf2522bef197501.jpg",
  atributos: {
    ataque: 8,
    defesa: 6,
    magia: 4
  }
};
var carta6 = {
  nome: "Tio Iroh",
  imagem:"https://i.pinimg.com/474x/50/aa/d9/50aad93162ab7d2c2f0e6b3f48963e82.jpg",
  atributos: {
    ataque: 8,
    defesa: 5,
    magia: 4
  }
};
var carta7 = {
  nome: "appa",
  imagem:"https://i.pinimg.com/564x/82/18/38/8218388c87290c8376fca75f45f18f0f.jpg",
  atributos: {
    ataque: 7,
    defesa: 10,
    magia: 2
  }
};
var carta8 = {
  nome: "momo",
  imagem:"https://64.media.tumblr.com/3a673eaf49031ad35dbe0cda22e7d7e2/8c0531c29ea3293b-3b/s500x750/e023c8f26738427261b1dcfbf69b64aeb8bcbd0d.png",
  atributos: {
    ataque: 3,
    defesa: 4,
    magia: 6
  }
};
var carta9 = {
  nome: "Azula",
  imagem:"https://i.pinimg.com/564x/49/71/7c/49717c1a32e2e4d3b86a3e778c68f2d6.jpg",
  atributos: {
    ataque: 7,
    defesa: 6,
    magia: 4
  }
};
var carta10 = {
  nome: "Suki",
  imagem:"https://64.media.tumblr.com/6e8116dcc0c604a17a310fd89af75deb/c9b0ce29b8b610c7-c9/s400x600/d3fe64347a9bed6ec186e9d77ace2fed0f27fd65.png",
  atributos: {
    ataque: 7,
    defesa: 5,
    magia: 3
  }
};
var carta11 = {
  nome: "Mai",
  imagem:"https://static.wikia.nocookie.net/avatar/images/4/40/Mai.png/revision/latest?cb=20200913172821&path-prefix=pt-br",
  atributos: {
    ataque: 7,
    defesa: 5,
    magia: 6
  }
};
var carta12 = {
  nome: "Mai",
  imagem:"https://static.wikia.nocookie.net/avatar/images/6/6d/Ty_Lee.png/revision/latest?cb=20140905083814",
  atributos: {
    ataque: 5,
    defesa: 7,
    magia: 3
  }
};
var carta13 = {
  nome: "Yue",
  imagem:"https://i.pinimg.com/474x/db/7b/fc/db7bfccaf4020e879c7999e69510d3a1.jpg",
  atributos: {
    ataque: 4,
    defesa: 5,
    magia: 10
  }
};
//cartas
var cartas = [carta1, carta2, carta3,carta4,carta5,carta6,carta7,carta8,carta9,carta10,carta11,carta12,carta13];
var cartaMaquina;
var cartaJogador;

//--------------------------------//-------------------------//
//Sorteando Cartas
function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 13);

  cartaMaquina = cartas[numeroCartaMaquina];

  //Carta Players;
  var numeroCartaJogador = parseInt(Math.random() * 13);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() *13);
  }
  console.log(numeroCartaJogador)
  cartaJogador = cartas[numeroCartaJogador];
  //Botões--------------------
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}
function exibirCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  //divCartaJogador.style.backgroundSize = "400px";
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo +"'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div'
}
//-------------Escolha de Atributos------------------//
function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");

  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  document.getElementById("btnJogar").disabled = true;
  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "<p class='resultado-final'>Venceu</p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "<p class='resultado-final'>Perdeu</p>"
  } else {
    elementoResultado.innerHTML = "<p class='resultado-final'>Empatou</p>"
  }
  exibirCartaMaquina();
}
function exibirCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  //divCartaJogador.style.backgroundSize = "400px";
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p type='text' name='atributo' value='"+ atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div'
}
