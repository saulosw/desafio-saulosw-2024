import { Leao, Leopardo, Crocodilo, Macaco, Gazela, Hipopotamo } from "./entidades/especies";
import { Especies, Biomas, Erros } from "./enums/definicoes";
import Validador from "./entidades/validador";
import Recinto from "./entidades/recinto";

class RecintosZoo {
    constructor() {
        this.animais = {
            LEAO: new Leao(),
            LEOPARDO: new Leopardo(),
            CROCODILO: new Crocodilo(),
            MACACO: new Macaco(),
            GAZELA: new Gazela(),
            HIPOPOTAMO: new Hipopotamo()
        };

        this.recintos = [
            new Recinto(1, [Biomas.SAVANA], 10, [{ especie: Especies.MACACO, quantidade: 3 }]),
            new Recinto(2, [Biomas.FLORESTA], 5, []),
            new Recinto(3, [Biomas.SAVANA, Biomas.RIO], 7, [{ especie: Especies.GAZELA, quantidade: 1 }]),
            new Recinto(4, [Biomas.RIO], 8, []),
            new Recinto(5, [Biomas.SAVANA], 9, [{ especie: Especies.LEAO, quantidade: 1 }])
        ];
    }

    analisaRecintos(animal, quantidade) {
        const validacao = Validador.validaAnimalEQuantidade(this.animais, animal, quantidade);
        if (validacao.erro) return validacao;

        const infoAnimal = this.animais[animal];
        const recintosViaveis = [];

        for (const recinto of this.recintos) {
            const compatibilidade = recinto.verificarCompatibilidade(infoAnimal, quantidade, this.animais);
            
            if (compatibilidade.viavel) {
                recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${compatibilidade.espacoRestante} total: ${recinto.tamanhoTotal})`);
            }
        }

        if (recintosViaveis.length === 0) return { erro: Erros.ErroRecinto, recintosViaveis: false };
        
        return { recintosViaveis };
    }
}

export { RecintosZoo as RecintosZoo };