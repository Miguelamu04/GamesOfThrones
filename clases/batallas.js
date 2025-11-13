export class Batalla {
    #guerrerosMuertos = [];

    iniciarBatalla(casaA, casaB) {
        let guerrerosCasaA = casaA.guerrerosDisponibles();
        let guerrerosCasaB = casaB.guerrerosDisponibles();

        while(guerrerosCasaA.length > 0 && guerrerosCasaB.length > 0){
            
            const guerreroA = guerrerosCasaA[0];
            const guerreroB = guerrerosCasaB[0];

            guerreroA.ataca(guerreroB);
            
            if (guerreroB.vida <= 0) {
                this.#guerrerosMuertos.push(guerreroB);
                guerrerosCasaB.shift();
                continue;
            } else {
                guerreroB.ataca(guerreroA);
                if (guerreroA.vida <= 0) {
                    this.#guerrerosMuertos.push(guerreroA);
                    guerrerosCasaA.shift();
                }
            }
        }

        if (guerrerosCasaA.length > 0) return casaB;
        if (guerrerosCasaB.length > 0) return casaA;
        return null;
    }

    mostrarGuerrerosMuertosEnCombate(){
        console.log("\n💀 Guerreros caídos en combate:");
        this.#guerrerosMuertos.forEach(guerrero => console.log(`- ${guerrero.nombre}`));
    }

    get muertos() {
        return this.#guerrerosMuertos;
    }
}
