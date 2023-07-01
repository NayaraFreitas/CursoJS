// Para fazer o Ajax
// o nome da variavel xrh(xmlhttprequest) nome padrão que os desenvolvedores usam para fazer o ajax
const request = obj => {
    return new Promise((resolve, reject) => { // usando o promise não precisa de callback
        const xhr  = new XMLHttpRequest();
            xhr.open(obj.method, obj.url , true)      // o metodo (get) , 'u'(url) e se é assincrono coloca true      
            xhr.send();    // se fosse POST     
            
            xhr.addEventListener('load', () => {
                if(xhr.status >= 200 && xhr.status < 300) { // o código do https estiver entre 200 e 300 retornará um callback de sucesso
                    resolve(xhr.responseText);   //obj.success (no lugar de resolve ficar com um calaback)
                }else {
                    reject(xhr.statusText);     // obj.error (no lugar do reject ficar como um callback) /*code: xhr.status,msg: xhr.statusText*/
                };
            }); 
    })
    
}; //função request que vai buscar as página

//pega os cliques nos links

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault(); //previnindo o link
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href
    };

    try{
        const response = await request(objConfig);
        carregaResultado(response);
    } catch(e) {
        console.log(e);
    }
    
}   

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}


    // ^^ - (isso abaixo usaria se não tivese o async e o await) dentro da função carregaPagina
    /*.then  (response => { // usando o .then pois é uma promise
       /* method: 'GET',         ---------
        url: href,*/                    
        /*success(response) {               --
            carregaResultado(response);         --------- mudando de lugar pois na promise não precisa aqui so se for callback
        },                                   --
        error(errorText){                   --
            console.log(errorText);        --
        }                         ----

       carregaResultado(response);
    }).catch(error => console.log(error))*/





