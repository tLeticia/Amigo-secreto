
let amigos = [];

function adicionarAmigo() {
  let nome = document.getElementById("amigo").value.trim();
  if (nome && !amigos.includes(nome)) {
    amigos.push(nome);
    document.getElementById("listaAmigos").innerHTML += `<li>${nome}</li>`;
    document.getElementById("amigo").value = ""; // Limpa o campo
  } else {
    alert("Nome inválido ou já existente.");
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Número insuficiente de amigos para o sorteio.");
    return;
  }

  let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
  let resultadoLista = document.getElementById("resultado");
  resultadoLista.innerHTML = `<li>🎁 Seu amigo secreto é: <strong>${sorteado}</strong> 🎉</li>`;
}

function iniciarNovoSorteio() {
  amigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("amigo").value = "";
  alert("Novo sorteio iniciado!");
}

