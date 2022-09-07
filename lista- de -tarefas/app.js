const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li
}

inputTarefa.addEventListener('keypress', function(e){  /// função pra tarefa ir com a tecla enter
    if(e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

function limpaInput(){
    inputTarefa.value = '';    //função de limpar input
    inputTarefa.focus();
}

function criaBotaoApagar(li){  // função do butao criada
    li.innerText += ' ';
    const botaoApagar = document.createElement('button'); // constante com a variavel , junto com create element para criar um button
    botaoApagar.innerText = 'Apagar';      // adicionei o butao
    botaoApagar.setAttribute('class', 'apagar');  // adicionei uma classe ao butao
    botaoApagar.setAttribute('title', 'Apagar está tarefa.');  // adicionei um title ao butao
    li.appendChild(botaoApagar)  // appenChild para falar quue o butão sera filho do li 
}

function criaTarefa(textoInput) {
    const li = criaLi();              // criando a lista de tarefa apos digita no input
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();          // função criada para limpar o input após adicionar , colocado na função cria tarefa
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(){

    if (!inputTarefa.value) return;                 //evento de click, dar valor ao input
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
    const el = e.target;
    
    if(el.classList.contains('apagar')) {     // irá mostrar assi que clicar no button , assim não mostra da onde vem no html
        el.parentElement.remove() ;    // removendo o pai do elemento 
        salvarTarefas();
    }
});
 
function salvarTarefas() {   // função pra salvar as tarefas ,assim que a pagina atualizar elas não sumirem
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);  // tranformando os array em string no formato JSON
    localStorage.setItem('tarefas', tarefasJSON);  /// um mini bancos de dados , global do navegador
}

function adicionarTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');  // tirando do formato JSON e voltando para o array normal
    const listaDeTarefas = JSON.parse(tarefas);          
    
    for (let tarefa  of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionarTarefasSalvas();;