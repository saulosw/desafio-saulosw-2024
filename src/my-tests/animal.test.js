import Animal from '../entidades/animal';
import { Biomas } from '../enums/definicoes';

describe('Animal', () => {
    test('deve retornar verdadeiro para bioma compatível', () => {
        const leão = new Animal('Leão', 3, [Biomas.SAVANA], true);
        expect(leão.ehCompativelComBioma([Biomas.SAVANA])).toBe(true);
    });

    test('deve retornar falso para bioma incompatível', () => {
        const leão = new Animal('Leão', 3, [Biomas.SAVANA], true);
        expect(leão.ehCompativelComBioma([Biomas.RIO])).toBe(false);
    });

    test('deve retornar falso para incompatibilidade com o recinto', () => {
        const leão = new Animal('Leão', 3, [Biomas.SAVANA], true);
        expect(leão.incompatibilidadeComRecinto({}, false, 1)).toBe(false);
    });
});