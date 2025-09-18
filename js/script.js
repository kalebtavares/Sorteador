function generateNumber() {
const min = Math.ceil (document.querySelector('.input-min').value)
const max = Math.floor (document.querySelector('.input-max').value)

const result = Math.floor(Math.random() * (max - min + 1)) + min;
mostrarAlerta(result);
adicionarAoHistorico(result);
}

function mostrarAlerta(result) {
  const mensagem = `🎉 Número sorteado: ${result} 🎉`;
  document.getElementById("mensagemAlerta").innerText = mensagem;
  document.getElementById("alertaDivertido").style.display = "block";
}

function adicionarAoHistorico(result) {
  const lista = document.getElementById("listaHistorico");
  const item = document.createElement("li");
  item.textContent = `🎲 ${result}`;
  lista.appendChild(item);
}

function fecharAlerta() {
  document.getElementById("alertaDivertido").style.display = "none";
}

