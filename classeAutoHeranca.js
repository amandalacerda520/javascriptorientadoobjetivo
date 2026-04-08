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
    constructor(marca, modelo, ano, cilindrada){
        super(marca, modelo, ano);
         this.cilindrada = cilindrada;
    }
    exibirDetalhes(){
        return ` ${super.exibirDetalhes()}, cinlindrada: ${this.cilindrada};`
    } 
}
let moto1 = new Moto("Honda","CBX 250 - TWISTER", 2007, 249);
console.log(moto1.exibirDetalhes());
let carro1 = new Carro("voyage", "Volkswagen 1.6", 2013, 5);
console.log(carro1.exibirDetalhes());