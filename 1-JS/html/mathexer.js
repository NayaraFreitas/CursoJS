const numero = Number(prompt('Digite um Número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
    
    numeroTitulo.innerHTML = numero;
    texto.innerHTML += `<p>A raiz quadrada é: ${numero ** 0.5}</p>`;
    texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)} </p>`;
    texto.innerHTML += `<p>É Nan: ${Number.isNaN(numero)} </p>`;
    texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)} </p>`;
    texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
    texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;






















       
        /*document.body.innerHTML += `Raiz quadrada do seu número ${number ** 0.5} </br>`
        document.body.innerHTML += `${number} é inteiro: ${!!(number)} </br>`

        document.body.innerHTML += `É NaN: ${isNaN(number)} </br>`

        document.body.innerHTML += `Arredondado para baixo: ${Math.floor(number)} </br>`
        document.body.innerHTML += `Arredondado para cima:${Math.ceil(number)} </br>`

        document.body.innerHTML += `Com duas casas decimais: ${number.toFixed(2)} </br>`

        console.log(number)*/