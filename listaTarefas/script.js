//criando uma funcao para realizar a ação de add itens na lista de tarefas

function adicionarTarefa (){
    //mensagem exibida após adicionarmos uma tarefa
     const visualizarTarefa = "Tarefa Adicionada com Sucesso!";
    
    //criando uma varivavel para alocar o valor do ID add tarefa (INPUT)
    let addTarefa = document.getElementById('addTarefa');
    //Criando uma variavel para alocar o valor que é digitado sobre nosso INPUT
    let tarefa = addTarefa.value;
    //Aqui chamamos nosso P que esta sem valor, e adicionando a mensagem de tarefa add com sucesso
    document.getElementById('visualizarTarefa').textContent = visualizarTarefa;
    // Criando uma varivel para acessar o UL do HTML através do ID
    let listaTarefa = document.getElementById('listaTarefas');
    //Criando uma nova variavel, essa variavel ela acessa nosso documento HTMl e dentro do mesmo cria um elemento LI
    let novaTarefa = document.createElement('li');
    //Aqui estamos alocando o valor do LI dentro da variavel TAREFA, dentro dessa variavel, esta alocado o input
    novaTarefa.textContent = tarefa
    //Aqui estamos chamando a variavel que contém UL, falando que atraves do append.Child podemos criar LI dentro da UL
    listaTarefa.appendChild(novaTarefa)

    //Deixando o input sem valor, após adicionarmos uma tarefa
    addTarefa.value = " "
}
