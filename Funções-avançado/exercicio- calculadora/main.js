function criaCalculadora(){
    return {
        display:document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        btnDel: document.querySelector('.btn-del'),

        inicia(){
            //alert('Oi iniciei');
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('Keyup', e => {
                if (e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm() { 
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta(){  //eval e pirigoso para o sistema
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta){
                    alert('Conta Inválida')
                    return;
                }
                this.display.value = String(conta);

            }catch(e){
                alert('Conta Inválida');
                return;
            }
        },


        cliqueBotoes(){
            // this -> calculadora
            document.addEventListener('click', function(e){  // se usar o arrow function (=>) não precisarei do .bind(this)
                const el = e.target;


                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }

                this.display.focus();

            }.bind(this)); 
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }








    };
}

const calculadora = criaCalculadora();
calculadora.inicia();