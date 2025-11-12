// Importamos la clase Casa (para validar que los objetos recibidos sean casas)
import { Casa } from "./casa.js";

// Importamos Guerrero para validar tipos y comparar instancias
import { Guerrero } from "./personajes/especiales/guerrero.js";

export class Batalla {

    // Lista privada que almacenará los guerreros que mueren durante la batalla
    #guerrerosMuertos = [];

    get muertos() {
    return this.#guerrerosMuertos;
}

    // MÉTODO PRINCIPAL: iniciarBatalla
    iniciarBatalla (casaA, casaB){

        // Se obtiene una lista de guerreros vivos disponibles de cada casa
        let guerrerosCasaA = casaA.guerrerosDisponibles();
        let guerrerosCasaB = casaB.guerrerosDisponibles();

        // Mientras ambas casas tengan al menos un guerrero vivo, se sigue peleando
        while(guerrerosCasaA.length > 0 && guerrerosCasaB.length > 0){
            
            // El primer guerrero disponible de cada casa pelea contra el otro
            const guerreroA = guerrerosCasaA[0];
            const guerreroB = guerrerosCasaB[0];

            // TURNO DEL GUERRERO A
            guerreroA.atacar(guerreroB);   // A ataca primero

            // Si el guerrero B muere por el ataque...
            if (guerreroB.vida <= 0) {
                this.#guerrerosMuertos.push(guerreroB);  // Se agrega a la lista de muertos
                console.log(`${guerreroB.nombre} ha muerto`);
                guerrerosCasaB.shift(); // Se elimina de los guerreros disponibles de su casa
                continue;               // Importante: evitar que B contraataque si ya murió
            } else {

                // TURNO DEL GUERRERO B (si sigue vivo)
                guerreroB.atacar(guerreroA);

                // Verificamos si A murió por el contraataque
                if (guerreroA.vida <= 0) {
                    this.#guerrerosMuertos.push(guerreroA);
                    console.log(`${guerreroA.nombre} ha muerto`);
                    guerrerosCasaA.shift(); // A es eliminado de su lista
                }
            }
        }

        // RESULTADO FINAL DE LA BATALLA

        if (guerrerosCasaA.length > 0) {
            // Si A aún tiene guerreros vivos
            console.log(`La casa ${casaA.nombre} gana la batalla.`);
        } else if (guerrerosCasaB.length > 0) {
            // Si B aún tiene guerreros vivos
            console.log(`La casa ${casaB.nombre} gana la batalla.`);
        } else {
            // Si ambos quedaron con 0 guerreros (empate mortal)
            console.log("¡Ambas casas han caído en combate!");
        }
    }

    // MÉTODO PARA MOSTRAR MUERTOS
    mostrarGuerrerosMuertosEnCombate(){
        console.log("Guerreros que han muerto en combate:");

        // Se recorre la lista privada y se muestra cada nombre
        this.#guerrerosMuertos.forEach(guerrero => 
            console.log(`- ${guerrero.nombre}`)
        );
    }
}
