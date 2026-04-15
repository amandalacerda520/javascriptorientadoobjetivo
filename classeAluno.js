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
        console.log(`===========================`);
        console.log(`Relatório do aluno: ${this.nome}`);
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Média final: ${this.calculaMedia().toFixed(2)}`);
        console.log(`Status: ${this.obterStatus()}`);
        console.log(`=================================`)
    }
}

let turma = [
    new Aluno("Luiz", "CGM5050", [7.2, 6.5, 7.2]),
    new Aluno("Mariana", "CGM5050", [7.8, 7.1, 9.2]),
    new Aluno("Maria Luiza", "CGM5050", [3.9, 7.5, 9.2]),
    new Aluno("Gabriel", "CGM5050", [7.2, 7.8, 8.2]),
]

console.log(turma[1]);
for (let i = 0; i < turma.length; i++){
    turma[i].exibirRelatorio();
}