import Animal from "./animal";
import { Especies, Biomas } from "../enum-const/constantes";

class Leao extends Animal {
    constructor() {
        super(Especies.LEAO, 3, [Biomas.SAVANA], true);
    }
}

class Leopardo extends Animal {
    constructor() {
        super(Especies.LEOPARDO, 2, [Biomas.SAVANA], true);
    }
}

class Crocodilo extends Animal {
    constructor() {
        super(Especies.CROCODILO, 3, [Biomas.RIO], true);
    }
}

class Macaco extends Animal {
    constructor() {
        super(Especies.MACACO, 1, [Biomas.SAVANA, Biomas.FLORESTA], false);
    }

    ehRegraInvalida(recinto, existeOutraEspecie, quantidade) {
        return recinto.animaisExistentes.length === 0 && quantidade === 1;
    }
}

class Gazela extends Animal {
    constructor() {
        super(Especies.GAZELA, 2, [Biomas.SAVANA], false);
    }
}

class Hipopotamo extends Animal {
    constructor() {
        super(Especies.HIPOPOTAMO, 4, [Biomas.SAVANA, Biomas.RIO], false);
    }

    ehRegraInvalida(recinto, existeOutraEspecie, quantidade) {
        return existeOutraEspecie && !recinto.bioma.includes(Biomas.SAVANA) || !recinto.bioma.includes(Biomas.RIO);
    }
}

export { Leao, Leopardo, Crocodilo, Macaco, Gazela, Hipopotamo };