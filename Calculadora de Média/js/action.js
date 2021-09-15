function media(){
  let nome = document.querySelector('#nome').value;
  let primeiraNota = Number(document.querySelector('#primeiraNota').value);
  let segundaNota =  Number(document.querySelector('#segundaNota').value);
  let terceiraNota = Number(document.querySelector('#terceiraNota').value);
  let quartaNota =   Number(document.querySelector('#quartaNota').value);
  
  let notaFinal = (primeiraNota+segundaNota+terceiraNota+quartaNota)/4;
  let nota = notaFinal.toFixed(1);
  
  if (nota < 6) {
   var reprovado = "Reprovado"
   
    document.querySelector('.result').innerHTML = `Olá, ${nome}. Sua média é: ${nota}. Infelizmente você não atingiu a média mínima, portanto você foi ${reprovado.fontcolor("red")}. Mas não desista! <p>Estude mais clicando <a href="https://www.alura.com.br/">aqui</a> </p>`
  } else {
    var aprovado = "Aprovado"
    document.querySelector('.result').innerHTML = `Olá, ${nome}. Sua média é: ${nota}. Parabéns, você foi ${aprovado.fontcolor("blue")} `
  }
}
