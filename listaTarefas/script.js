let tarefas = [];

function adicionarTarefa() {
  const addTarefa = document.getElementById("addTarefa");
  const visualizarTarefa = document.getElementById("visualizarTarefa");

  const valorTarefa = addTarefa.value.trim();

  if (valorTarefa === "") {
    visualizarTarefa.textContent = "Sem sucesso ao tentar entrar";
  } else {
    visualizarTarefa.textContent = "Tarefa adicionada com sucesso!";
    tarefas.push(valorTarefa);
    renderizarTarefas();
  }

  addTarefa.value = "";
}

function renderizarTarefas() {
  const listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = "";

  for (let i = 0; i < tarefas.length; i++) {
    let criacaoLi = document.createElement("li");
    criacaoLi.textContent = tarefas[i];

    // Botão Remover
    let botaoRemover = document.createElement("button");
    botaoRemover.className = "remover";
    botaoRemover.textContent = "Remover tarefa";
    botaoRemover.onclick = () => removerTarefa(i);

    // Botão Editar
    let botaoEditar = document.createElement("button");
    botaoEditar.className = "editar";
    botaoEditar.textContent = "Editar";
    botaoEditar.onclick = () => editarTarefa(i);

    // Adiciona os botões dentro da <li>
    criacaoLi.appendChild(botaoRemover);
    criacaoLi.appendChild(botaoEditar);

    // Adiciona <li> dentro da <ul>
    listaTarefas.appendChild(criacaoLi);
  }
}

function removerTarefa(i) {
  tarefas.splice(i, 1);
  renderizarTarefas();
}

function editarTarefa(i) {
  let tarefaEditada = prompt("Edite a tarefa:", tarefas[i]);
  if (tarefaEditada && tarefaEditada.trim() !== "") {
    tarefas[i] = tarefaEditada.trim();
    renderizarTarefas();
  }
}

function limparLista() {
  tarefas.length = 0;
  renderizarTarefas();

  const mensagem = document.getElementById("mensagem");
  if (mensagem) {
    mensagem.textContent = "Lista de tarefas limpa com sucesso!";
  }
}
