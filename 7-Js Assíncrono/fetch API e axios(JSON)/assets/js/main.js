// FECTH API (Json)

/*fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregaElementosNaPagina(json));


function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
    for(let pessoa of json) {
        const tr  = document.createElement('tr')
        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.empresa;
        tr.appendChild(td3);

        table.appendChild(tr);

        console.log(pessoa.nome);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);

}*/


// AXIOS  - uma linha de código para fazer um get

axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
    for(let pessoa of json) {
        const tr  = document.createElement('tr')
        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.empresa;
        tr.appendChild(td3);

        let td4 = document.createElement('td');
        td4.innerHTML = pessoa.estado
        tr.appendChild(td4);

        table.appendChild(tr);

        console.log(pessoa.nome);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}