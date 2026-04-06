class contaBancaria {
    #saldo = 0;
    constructor(titular) {
        this.titular = titular;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito de R$ ${valor} feito.`);
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} feito.`);
        } else {
            console.log(`Saldo insuficiente ou valor indisponível para o saque de R$ ${valor}`);
        }
    }

    exibirSaldo() {
        return `Olá, seu saldo é R$ ${this.#saldo}`;
    }
}

const conta1 = new contaBancaria("Átila o huno");


conta1.depositar(1000); 
conta1.depositar(500);  
conta1.depositar(200);  
conta1.depositar(100);  
conta1.depositar(50);  


conta1.sacar(300);     
conta1.sacar(150);     
conta1.sacar(50);      

console.log(conta1.exibirSaldo());