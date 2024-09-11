import Recinto from '../entidades/recinto';
import Animal from '../entidades/animal';
import { Biomas, Especies } from '../enums/definicoes';

describe('Recinto', () => {
    let recinto;
    let leao;
    let macaco;
    let gazela;

    beforeEach(() => {
        leao = new Animal(Especies.LEAO, 3, [Biomas.SAVANA], true);
        macaco = new Animal(Especies.MACACO, 1, [Biomas.SAVANA, Biomas.FLORESTA], false);
        gazela = new Animal(Especies.GAZELA, 2, [Biomas.SAVANA], false);
        recinto = new Recinto(1, [Biomas.SAVANA], 10, [{ especie: Especies.MACACO, quantidade: 3 }]);
    });

    test('deve retornar viável se o recinto tem espaço suficiente e compatível com o bioma', () => {
        const resultado = recinto.verificarCompatibilidade(macaco, 2, { MACACO: macaco, GAZELA: gazela });
        expect(resultado.viavel).toBe(true);
        expect(resultado.espacoRestante).toBe(5);
    });

    test('deve retornar inviável se o recinto não comporta a quantidade de animais solicitada', () => {
        const resultado = recinto.verificarCompatibilidade(macaco, 10, { MACACO: macaco });
        expect(resultado.viavel).toBe(false);
    });

    test('deve retornar inviável se o recinto não é compatível com o bioma do animal', () => {
        const recintoFloresta = new Recinto(2, [Biomas.FLORESTA], 10, []);
        const resultado = recintoFloresta.verificarCompatibilidade(leao, 1, { LEAO: leao });
        expect(resultado.viavel).toBe(false);
    });

    test('deve retornar inviável se há incompatibilidade com outro animal carnívoro presente no recinto', () => {
        const recintoComLeao = new Recinto(3, [Biomas.SAVANA], 10, [{ especie: Especies.LEAO, quantidade: 1 }]);
        const resultado = recintoComLeao.verificarCompatibilidade(macaco, 1, { LEAO: leao, MACACO: macaco });
        expect(resultado.viavel).toBe(false);
    });

});