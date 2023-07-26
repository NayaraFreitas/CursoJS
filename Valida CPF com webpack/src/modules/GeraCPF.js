import ValidaCPF from './ValidaCPF';

export default class GeraCPF {

    rand(min = 100000000 , max = 999999999) {                 // rand para gera numeros aleatorios
        return String(Math.floor(Math.random() * (max - min) + min));  // usando string para comerça com 0 pq qualquer lingaugem so aceita o 0 como string
    }

    formatado(cpf){
        return (
            cpf.slice(0 , 3) + '.' +
            cpf.slice(3 , 6) + '.' +
            cpf.slice(6 , 9) + '-' +
            cpf.slice(9 , 11)
        );
    }

    geraNovoCpf() {
        const cpfSemDigito = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
        const novoCPF = cpfSemDigito + digito1 + digito2;
        return this.formatado(novoCPF);
    }

}