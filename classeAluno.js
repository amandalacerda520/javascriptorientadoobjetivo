class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }

    calculaMedia() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }

    obterStatus() {
        const media = this.calculaMedia();
        if (media >= 7) {
            return "Aprovado";
        } else if (media >= 5) {
            return "Recuperação";
        } else {
            return "Reprovado";
        }
    }

    exibirRelatorio() {
        console.log(`Relatório do aluno: ${this.nome}`);
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Média final: ${this.calculaMedia().toFixed(2)}`);
        console.log(`Status: ${this.obterStatus()}`);
    }
}

// Testando os objetos
let aluno1 = new Aluno("Ana", 5050, [8.0, 7.3, 9.0]);
aluno1.exibirRelatorio();

let aluno2 = new Aluno("Luiz", 850650, [7.2, 6.5, 3.3]);
aluno2.exibirRelatorio();


