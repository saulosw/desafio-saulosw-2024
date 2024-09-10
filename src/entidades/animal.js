export default class Animal {
    constructor(nome, tamanho, biomas, carnivoro) {
        this.nome = nome;
        this.tamanho = tamanho;
        this.biomas = biomas;
        this.carnivoro = carnivoro;
    }

    ehCompativelComBioma(biomasRecinto) {
        return this.biomas.some(bioma => biomasRecinto.includes(bioma));
    }

    ehRegraInvalida(recinto, existeOutraEspecie, quantidade) {
        return false;
    }
}