// com function constructor

function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = () => { // arrow function
                this.capturaCliques();
                this.capturaEnter();
            }

        

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if( e.keyCode === 13){
                this.realizaConta();
            }
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target   // ao botão que esta sendo pressionado ao target do evento
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.realizaConta = () => {
            try {
                const conta = eval(this.display.value);

                if(!conta){
                    alert('Conta Inválida')
                    return
                }

                this.display.value = conta;

            } catch(e) {
                    alert('Conta inválida');
                    return;
                }
            
        };15
        

    this.clear = () => this.display.value = '';
    this.del = () => this.display.value.slice(0, -1);

}

const calculadora = new Calculadora(); 
calculadora.inicia();