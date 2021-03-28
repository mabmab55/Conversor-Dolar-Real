var valorDolar = document.getElementById("valorDolar")
function converter() {
  var valorReais = valorDolar.value * 5.5
  var valorReais = valorReais.toFixed(2)
  document.getElementById("valorReais").innerHTML = valorReais + " Reais";
}
