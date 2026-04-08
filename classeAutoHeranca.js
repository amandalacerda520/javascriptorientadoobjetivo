class Automovel{
    constructor(marca, modelo , ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirDetalhes(){
        return `${this.marca}, ${this.modelo}, ${ano}`;

    }
}
 class Carro extends Automovel{
    constructor(marca, modelo, ano, portas){
        super(marca, modelo, ano);
         this.portas = portas;
    }
    exibirDetalhes(){
        return ` ${super.exibirDetalhes()}, Portas: ${this.portas};`
    } 
}