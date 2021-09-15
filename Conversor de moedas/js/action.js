let dolar = 5.23;
let euro = 6.18;
let bitcoin = 244.597;

function calcInDolar() {
  let inptValue = parseFloat(document.getElementById("valor").value || 0);
  let calcDolar = inptValue * dolar;
  let entrance = document.getElementById("entrace-value");
  entrance.innerHTML =
    "Sua conversão de U$:" +
    inptValue +
    " em dólar deu: R$:" +
    calcDolar.toFixed(2);
  console.log(entrance);
}

function calcInEuro() {
  let inptValue = parseFloat(document.getElementById("valor").value || 0);
  let calcEuro = inptValue * euro;
  let entrance = document.getElementById("entrace-value");
  entrance.innerHTML =
    "Sua conversão de €:" +
    inptValue +
    " em real deu: R$:" +
    calcEuro.toFixed(2);
  console.log(entrance);
}

function calcInBtc() {
  let inptValue = parseFloat(document.getElementById("valor").value || 0);
  let calcBit = inptValue * bitcoin;
  let entrance = document.getElementById("entrace-value");
  entrance.innerHTML =
    "Sua conversão de B:" +
    inptValue +
    " em dólar deu: R$:" +
    calcBit.toFixed(2);
  console.log(entrance);
}
