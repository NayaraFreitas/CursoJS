import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

//função auto executavel
(function(){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();