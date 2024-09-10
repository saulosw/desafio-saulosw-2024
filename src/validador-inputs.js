import { Erros } from "./constantes";

export default class ValidadorInputs {
    static validarAnimalEQuantidade(animais, animal, quantidade) {
        if (!animais[animal] || typeof animal !== 'string') return { erro: Erros.ErroAnimal, recintosViaveis: false };
        if (quantidade <= 0 || !Number.isInteger(quantidade)) return { erro: Erros.ErroQuantidade, recintosViaveis: false };
        return { erro: null };
    }
}