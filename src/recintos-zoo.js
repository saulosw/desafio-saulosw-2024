class RecintosZoo {

    constructor() {
        this.animais = {
            LEAO: { tamanho: 3, bioma: ['savana'] },
            LEOPARDO: { tamanho: 2, bioma: ['savana'] },
            CROCODILO: { tamanho: 3, bioma: ['rio'] },
            MACACO: { tamanho: 1, bioma: ['savana', 'floresta'] },
            GAZELA: { tamanho: 2, bioma: ['savana'] },
            HIPOPOTAMO: { tamanho: 4, bioma: ['savana', 'rio'] }
        }

        this.recintos = [
            { numero: 1, bioma: ['savana'], tamanhoTotal: 10, animaisExistentes: [{ especie: 'MACACO', quantidade: 3 }] },
            { numero: 2, bioma: ['floresta'], tamanhoTotal: 5, animaisExistentes: [] },
            { numero: 3, bioma: ['savana', 'rio'], tamanhoTotal: 7, animaisExistentes: [{ especie: 'GAZELA', quantidade: 1 }] },
            { numero: 4, bioma: ['rio'], tamanhoTotal: 8, animaisExistentes: [] },
            { numero: 5, bioma: ['savana'], tamanhoTotal: 9, animaisExistentes: [{ especie: 'LEAO', quantidade: 1 }] }
        ]
    }
 
    analisaRecintos(animal, quantidade) {
        if (!this.animais[animal]) return { erro: "Animal inválido", recintosViaveis: false }
        if (quantidade <= 0) return { erro: "Quantidade inválida", recintosViaveis: false }

        const infoAnimal = this.animais[animal]
        const recintosViaveis = []

        for (const recinto of this.recintos) {
            let espacoOcupadoNoRecinto = 0
            let temAnimaisCarnivoros = false
            let existeOutraEspecie = false

            for (const animalNoRecinto of recinto.animaisExistentes) {
                const infoAnimalNoRecinto = this.animais[animalNoRecinto.especie]
                espacoOcupadoNoRecinto += animalNoRecinto.quantidade * infoAnimalNoRecinto.tamanho

                if (['LEAO', 'LEOPARDO'].includes(animalNoRecinto.especie)) {
                    temAnimaisCarnivoros = true
                }

                if (animalNoRecinto.especie !== animal) {
                    existeOutraEspecie = true
                }
            }

            const espacoDisponivelNoRecinto = recinto.tamanhoTotal - espacoOcupadoNoRecinto
            let espacoNecessarioParaAnimal = quantidade * infoAnimal.tamanho

            if (existeOutraEspecie) {
                espacoNecessarioParaAnimal += 1
            }

            const biomaEhCompativel = () => {
                if (infoAnimal.bioma.length === 1 && recinto.bioma.length === 1) {
                    return infoAnimal.bioma[0] === recinto.bioma[0]
                } else if (infoAnimal.bioma.length > 1) {
                    return infoAnimal.bioma.some(bioma => recinto.bioma.includes(bioma))
                }
                return false
            }

            if (biomaEhCompativel() && espacoDisponivelNoRecinto >= espacoNecessarioParaAnimal && !temAnimaisCarnivoros) {
                const espacoRestante = espacoDisponivelNoRecinto - espacoNecessarioParaAnimal
                recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoRestante} total: ${recinto.tamanhoTotal})`)
            }
        }

        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável", recintosViaveis: false }
        }

        return { recintosViaveis }
    }
}

export { RecintosZoo as RecintosZoo }