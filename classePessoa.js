class Pessoa {
     constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
    
    saudar() {
        console.log(`Olá! Meu nome é ${this.nome}!`);
    }

    fazerAniversario() {
        this.idade += 1;
        console.log(`Feliz Aniversário, agora o(a) ${this.nome} tem ${this.idade} anos.`);
    }
}


const pessoa1 = new Pessoa("Amanda", 15, "Estudante");

pessoa1.saudar();           !
pessoa1.fazerAniversario(); 