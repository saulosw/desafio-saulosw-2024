class RecintosZoo {
    constructor() {
        this.animais = {
            LEAO: { tamanho: 3, bioma: ['savana'], carnivoro: true },
            LEOPARDO: { tamanho: 2, bioma: ['savana'], carnivoro: true },
            CROCODILO: { tamanho: 3, bioma: ['rio'], carnivoro: true },
            MACACO: { tamanho: 1, bioma: ['savana', 'floresta'], carnivoro: false },
            GAZELA: { tamanho: 2, bioma: ['savana'], carnivoro: false },
            HIPOPOTAMO: { tamanho: 4, bioma: ['savana', 'rio'], carnivoro: false }
        };

        this.recintos = [
            { numero: 1, bioma: ['savana'], tamanhoTotal: 10, animaisExistentes: [{ especie: 'MACACO', quantidade: 3 }] },
            { numero: 2, bioma: ['floresta'], tamanhoTotal: 5, animaisExistentes: [] },
            { numero: 3, bioma: ['savana', 'rio'], tamanhoTotal: 7, animaisExistentes: [{ especie: 'GAZELA', quantidade: 1 }] },
            { numero: 4, bioma: ['rio'], tamanhoTotal: 8, animaisExistentes: [] },
            { numero: 5, bioma: ['savana'], tamanhoTotal: 9, animaisExistentes: [{ especie: 'LEAO', quantidade: 1 }] }
        ];
    }

    validaAnimalEQuantidade(animal, quantidade) {
        if (!this.animais[animal]) return { erro: "Animal inválido", recintosViaveis: false };
        if (quantidade <= 0) return { erro: "Quantidade inválida", recintosViaveis: false };
        return { erro: null };
    }

    calculaEspacoEVerificaCarnivoros(recinto, animal) {
        let espacoOcupadoNoRecinto = 0;
        let especieCarnivoraDiferente = false;
        let existeOutraEspecie = false;
    
        for (const animalNoRecinto of recinto.animaisExistentes) {
            const infoAnimalNoRecinto = this.animais[animalNoRecinto.especie];
            espacoOcupadoNoRecinto += animalNoRecinto.quantidade * infoAnimalNoRecinto.tamanho;
    
            if (infoAnimalNoRecinto.carnivoro && animalNoRecinto.especie !== animal) {
                especieCarnivoraDiferente = true;
            }
    
            if (animalNoRecinto.especie !== animal) {
                existeOutraEspecie = true;
            }
        }
    
        return { espacoOcupadoNoRecinto, especieCarnivoraDiferente, existeOutraEspecie };
    }
    

    biomaEhCompativel(animal, recinto) {
        const infoAnimal = this.animais[animal];
        return infoAnimal.bioma.some(bioma => recinto.bioma.includes(bioma));
    }

    analisaRecintos(animal, quantidade) {
        const validacao = this.validaAnimalEQuantidade(animal, quantidade);
        if (validacao.erro) return validacao;

        const infoAnimal = this.animais[animal];
        const recintosViaveis = [];

        for (const recinto of this.recintos) {
            const { espacoOcupadoNoRecinto, especieCarnivoraDiferente, existeOutraEspecie } = this.calculaEspacoEVerificaCarnivoros(recinto, animal);

            const espacoDisponivelNoRecinto = recinto.tamanhoTotal - espacoOcupadoNoRecinto;
            let espacoNecessarioParaAnimal = quantidade * infoAnimal.tamanho;

            if (existeOutraEspecie) {
                espacoNecessarioParaAnimal += 1;
            }

            if (especieCarnivoraDiferente || (infoAnimal.carnivoro && existeOutraEspecie)) continue;

            if (animal === 'HIPOPOTAMO') {
                if (existeOutraEspecie && !(recinto.bioma.includes('savana') && recinto.bioma.includes('rio'))) {
                    continue;
                }
            }

            if (this.biomaEhCompativel(animal, recinto) && espacoDisponivelNoRecinto >= espacoNecessarioParaAnimal) {
                const espacoRestante = espacoDisponivelNoRecinto - espacoNecessarioParaAnimal;
                recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoRestante} total: ${recinto.tamanhoTotal})`);
            }
        }

        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável", recintosViaveis: false };
        }

        return { recintosViaveis };
    }
}

export { RecintosZoo as RecintosZoo };