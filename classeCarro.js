class Carro {
    constructor(marca, modelo, ano, velocidadeAtual = 0) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidadeAtual = velocidadeAtual;
    }

    exibirDados() {
        console.log(`Este é um ${this.marca} ${this.modelo} do ano ${this.ano}.`);
    }

    acelerar(km) {
        this.velocidadeAtual += km;
        console.log(`O ${this.modelo} acelerou! Velocidade atual: ${this.velocidadeAtual} km/h.`);
    }
}

const meuCarro = new Carro("Toyota", "Corolla", 2024);

meuCarro.exibirDados();    
meuCarro.acelerar(20);     
meuCarro.acelerar(30);     