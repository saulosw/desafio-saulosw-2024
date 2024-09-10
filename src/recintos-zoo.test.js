import { RecintosZoo } from "./recintos-zoo.js";

describe('Recintos do Zoologico', () => {

    test('Deve rejeitar animal inválido', () => {
        const resultado = new RecintosZoo().analisaRecintos('UNICORNIO', 1);

        expect(resultado.erro).toBe("Animal inválido");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve rejeitar quantidade inválida', () => {
            const resultado = new RecintosZoo().analisaRecintos('MACACO', 0);

        expect(resultado.erro).toBe("Quantidade inválida");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve rejeitar recinto quando o espaço é insuficiente', () => {
        const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 5);

        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 10 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 10);

        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Deve encontrar recinto para 1 crocodilo', () => {
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 1);

        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 4 (espaço livre: 5 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Deve encontrar recintos para 2 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 2);

        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 5 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 2 (espaço livre: 3 total: 5)');
        expect(resultado.recintosViaveis[2]).toBe('Recinto 3 (espaço livre: 2 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(3);
    });
});

describe('Testando Inputs Inválidos', () => {

    test('Deve invalidar animais que não são STRING', () =>{
        const resultado = new RecintosZoo().analisaRecintos(1234, 3)

        expect(resultado.erro).toBe("Animal inválido");
        expect(resultado.recintosViaveis).toBeFalsy();
    })

    test('Deve invalidar animais que não são STRING', () =>{
        const resultado = new RecintosZoo().analisaRecintos(['HIPOPOTAMO'], 3)

        expect(resultado.erro).toBe("Animal inválido");
        expect(resultado.recintosViaveis).toBeFalsy();
    })

    test('Deve invalidar animais que não existem', () =>{
        const resultado = new RecintosZoo().analisaRecintos('UNICORNIO', 7)

        expect(resultado.erro).toBe("Animal inválido");
        expect(resultado.recintosViaveis).toBeFalsy();
    })

    test('Deve invalidar quantidades que não são inteiros', () =>{
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 3.1)

        expect(resultado.erro).toBe("Quantidade inválida");
        expect(resultado.recintosViaveis).toBeFalsy();
    })

    test('Deve invalidar quantidades que não são inteiros', () =>{
        const resultado = new RecintosZoo().analisaRecintos('GAZELA', 'NENHUMA')

        expect(resultado.erro).toBe("Quantidade inválida");
        expect(resultado.recintosViaveis).toBeFalsy();
    })
});

describe('Testando LEAO', () => {

    const leao = 'LEAO'

    test('Deve encontrar recintos para 2 LEÕES', () => {
        const resultado = new RecintosZoo().analisaRecintos(leao, 2);

        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 5 (espaço livre: 0 total: 9)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Deve encontrar recintos para 1 LEÃO', () => {
        const resultado = new RecintosZoo().analisaRecintos(leao, 1);

        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 5 (espaço livre: 3 total: 9)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Não deve encontrar recintos para 5 LEÕES', () => {
        const resultado = new RecintosZoo().analisaRecintos(leao, 5);

        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 10 LEÕES', () => {
        const resultado = new RecintosZoo().analisaRecintos(leao, 10);

        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });
});

describe('Testando LEOPARDO', () => {

    const leopardo = 'LEOPARDO'

    test('Não deve encontrar recintos para 2 LEOPARDOS', () => {
        const resultado = new RecintosZoo().analisaRecintos(leopardo, 2);

        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });
    
    test('Não deve encontrar recintos para 1 LEOPARDO', () => {
        const resultado = new RecintosZoo().analisaRecintos(leopardo, 1);

        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 5 LEOPARDOS', () => {
        const resultado = new RecintosZoo().analisaRecintos(leopardo, 5);

        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 10 LEOPARDOS', () => {
        const resultado = new RecintosZoo().analisaRecintos(leopardo, 10);

        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });
});

describe('Testando CROCODILO', () => {

    const crocodilo = 'CROCODILO'

    test('Deve encontrar recintos para 2 CROCODILOS', () => {
        const resultado = new RecintosZoo().analisaRecintos(crocodilo, 2);

        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 4 (espaço livre: 2 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Deve encontrar recinto para 1 CROCODILO', () => {
        const resultado = new RecintosZoo().analisaRecintos(crocodilo, 1);

        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 4 (espaço livre: 5 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Não deve encontrar recintos para 5 CROCODILOS', () => {
        const resultado = new RecintosZoo().analisaRecintos(crocodilo, 5);

        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 10 CROCODILOS', () => {
        const resultado = new RecintosZoo().analisaRecintos(crocodilo, 10);

        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });
});

describe('Testando MACACO', () => {

    const macaco = 'MACACO'

    test('Deve encontrar recintos para 2 MACACOS', () => {
        const resultado = new RecintosZoo().analisaRecintos(macaco, 2);

        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 5 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 2 (espaço livre: 3 total: 5)');
        expect(resultado.recintosViaveis[2]).toBe('Recinto 3 (espaço livre: 2 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(3);
    });

    test('Deve encontrar recintos para 1 MACACO', () => {
        const resultado = new RecintosZoo().analisaRecintos(macaco, 1);

        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 6 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 3 (espaço livre: 3 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    test('Deve encontrar recintos para 5 MACACOS', () => {
        const resultado = new RecintosZoo().analisaRecintos(macaco, 5);

        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 2 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 2 (espaço livre: 0 total: 5)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    test('Não deve encontrar recintos para 10 MACACOS', () => {
        const resultado = new RecintosZoo().analisaRecintos(macaco, 10);

        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });
});

describe('Testando GAZELA', () => {

    const gazela = 'GAZELA'

    test('Deve encontrar recintos para 2 GAZELAS', () => {
        const resultado = new RecintosZoo().analisaRecintos(gazela, 2);

        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 2 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 3 (espaço livre: 1 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    test('Deve encontrar recintos para 1 GAZELA', () => {
        const resultado = new RecintosZoo().analisaRecintos(gazela, 1);

        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 4 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 3 (espaço livre: 3 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    test('Não deve encontrar recintos para 5 GAZELAS', () => {
        const resultado = new RecintosZoo().analisaRecintos(gazela, 5);

        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 10 GAZELAS', () => {
        const resultado = new RecintosZoo().analisaRecintos(gazela, 10);

        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });
});

describe('Testando HIPOPOTAMO', () => {

    const hipopotamo = 'HIPOPOTAMO'

    test('Deve encontrar recintos para 2 HIPOPÓTAMOS', () => {
        const resultado = new RecintosZoo().analisaRecintos(hipopotamo, 2);

        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 4 (espaço livre: 0 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    test('Deve encontrar recintos para 1 HIPOPÓTAMO', () => {
        const resultado = new RecintosZoo().analisaRecintos(hipopotamo, 1);

        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 3 (espaço livre: 0 total: 7)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 4 (espaço livre: 4 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(2);
    });

    test('Não deve encontrar recintos para 5 HIPOPÓTAMOS', () => {
        const resultado = new RecintosZoo().analisaRecintos(hipopotamo, 5);

        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });

    test('Não deve encontrar recintos para 10 HIPOPÓTAMOS', () => {
        const resultado = new RecintosZoo().analisaRecintos(hipopotamo, 10);

        expect(resultado.erro).toBe("Não há recinto viável");
        expect(resultado.recintosViaveis).toBeFalsy();
    });
});