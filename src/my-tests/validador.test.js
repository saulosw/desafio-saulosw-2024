import Validador from '../entidades/validador';
import { Erros } from '../enums/definicoes';

describe('Validador', () => {
    test('deve retornar erro para animal inválido', () => {
        const resultado = Validador.validaAnimalEQuantidade({}, 'LEAO', 1);
        expect(resultado.erro).toBe(Erros.ErroAnimal);
    });

    test('deve retornar erro para quantidade inválida', () => {
        const resultado = Validador.validaAnimalEQuantidade({ LEAO: {} }, 'LEAO', -1);
        expect(resultado.erro).toBe(Erros.ErroQuantidade);
    });

    test('deve retornar sucesso para dados válidos', () => {
        const resultado = Validador.validaAnimalEQuantidade({ LEAO: {} }, 'LEAO', 1);
        expect(resultado.erro).toBeNull();
    });
});
