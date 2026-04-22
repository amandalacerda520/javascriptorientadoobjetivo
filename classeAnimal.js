class Animal {
    fazerSom() {
        console.log("som genérico de animal...");
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log("Au Au Au Au 🐶🐶🐶");
    }
}

class Gato extends Animal {
    fazerSom() {
        console.log("miau miau miau 🐱🐱🐱🐱");
    }
}

class Galinha extends Animal {
    fazerSom() {
        console.log("PO PO PO PO 🐔🐔🐔🐔");
    }
}

const meusObjetos = [new Cachorro(), new Gato(), new Galinha()];

for (let i = 0; i < meusObjetos.length; i++) {
    meusObjetos[i].fazerSom();
}