export default class Recinto {
    constructor(numero, bioma, tamanhoTotal, animaisExistentes = []) {
        this.numero = numero;
        this.bioma = bioma;
        this.tamanhoTotal = tamanhoTotal;
        this.animaisExistentes = animaisExistentes;
    }

    calcularEspacoOcupado(animais) {
        return this.animaisExistentes.reduce((espaco, animalNoRecinto) => {
            const infoAnimal = animais[animalNoRecinto.especie];
            return espaco + (animalNoRecinto.quantidade * infoAnimal.tamanho);
        }, 0);
    }

    calcularEspacoNecessario(animal, quantidade, existeOutraEspecie) {
        let espacoNecessario = quantidade * animal.tamanho;
        if (existeOutraEspecie) espacoNecessario += 1;
        return espacoNecessario;
    }

    verificarCarnivoros(animais, especie) {
        let especieCarnivoraDiferente = false;
        let existeOutraEspecie = false;

        for (const animalNoRecinto of this.animaisExistentes) {
            const infoAnimal = animais[animalNoRecinto.especie];
            
            if (infoAnimal.carnivoro && animalNoRecinto.especie !== especie) especieCarnivoraDiferente = true;
            if (animalNoRecinto.especie !== especie) existeOutraEspecie = true;
        }

        return { especieCarnivoraDiferente, existeOutraEspecie };
    }

    existeCarnivoroIncompativel(animal, especieCarnivoraDiferente, existeOutraEspecie) {
        return especieCarnivoraDiferente || (animal.carnivoro && existeOutraEspecie);
    }

    regraEspecificaInvalida(animal, existeOutraEspecie, quantidade) {
        return animal.ehRegraInvalida(this, existeOutraEspecie, quantidade);
    }

    temEspacoDisponivel(animal, espacoDisponivelNoRecinto, espacoNecessarioParaAnimal) {
        return animal.ehCompativelComBioma(this.bioma) && espacoDisponivelNoRecinto >= espacoNecessarioParaAnimal;
    }

    verificarCompatibilidade(animal, quantidade, animais) {
        const espacoOcupadoNoRecinto = this.calcularEspacoOcupado(animais);
        const { especieCarnivoraDiferente, existeOutraEspecie } = this.verificarCarnivoros(animais, animal.nome);

        const espacoDisponivelNoRecinto = this.tamanhoTotal - espacoOcupadoNoRecinto;
        let espacoNecessarioParaAnimal = this.calcularEspacoNecessario(animal, quantidade, existeOutraEspecie);

        if (this.existeCarnivoroIncompativel(animal, especieCarnivoraDiferente, existeOutraEspecie)) return { viavel: false };
        if (this.regraEspecificaInvalida(animal, existeOutraEspecie, quantidade)) return { viavel: false };

        if (this.temEspacoDisponivel(animal, espacoDisponivelNoRecinto, espacoNecessarioParaAnimal)) {
            const espacoRestante = espacoDisponivelNoRecinto - espacoNecessarioParaAnimal;
            return { viavel: true, espacoRestante };
        }

        return { viavel: false };
    }

}