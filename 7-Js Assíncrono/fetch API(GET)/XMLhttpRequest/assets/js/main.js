// FECTH API (GET)

// Código abaixo não precisará usaremos o fetch
/*const request = obj => {
    return new Promise((resolve, reject) => { // usando o promise não precisa de callback
        const xhr  = new XMLHttpRequest();
            xhr.open(obj.method, obj.url , true)      // o metodo (get) , 'u'(url) e se é assincrono coloca true      
            xhr.send();    // se fosse POST     
            
            xhr.addEventListener('load', () => {
                if(xhr.status >= 200 && xhr.status < 300) { // o código do https estiver entre 200 e 300 retornará um callback de sucesso
                    resolve(xhr.responseText);   //obj.success (no lugar de resolve ficar com um calaback)
                }else {
                    reject(xhr.statusText);     // obj.error (no lugar do reject ficar como um callback) //code: xhr.status,msg: xhr.statusText//
                }
            }) 
    })
    
}função request que vai buscar as página*/

//pega os cliques nos links
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault(); //previnindo o link
        carregaPagina(el);
    }
});

// sem o try e catch não irá tratar o erro com o async e await
async function carregaPagina(el) {
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);
        if(response.status !== 200) throw new Error('ERRO 404!');
        const html = await response.text();
        carregaResultado(html);
        fetch(href);
    } catch(e){
        console.warn(e)
    }
    

    // sem async e await
   /* fetch(href) // carregando o link
     .then(response => {
        if(response.status !== 200) throw new Error('ERRO 404!');
          return response.text()
     }) // carregando a resposta  e retornando a outra promise que é pre conferte a resposta em texto
     .then(html =>  carregaResultado(html)) // chamndo de html pois o response é o html
     .catch(e => console.warn(e)) // catch para pega o erro se houver*/
    
}   

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

   
// Parte do Fetch
/*fetch('pagina4.html') // ja consome uma promise sem precisa chamar ela
.then(resposta  => {
    if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
    return resposta.text(); // essa funçaõ tbm retorna uma promise então precisa de outro then
})
.then( html => console.log(html))     // retorna o html
.catch( e  => console.error(e));*/

