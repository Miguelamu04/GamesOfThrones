import { Personaje } from "../personaje.js";
import { NoMuerto } from "../../criaturas/noMuerto.js";

export class ReyDeLaNoche extends Personaje {
    #ejercito;

    constructor(nombre = "Rey de la Noche", age = 1000, vivo = true, casa = "") {
        super(nombre, age, vivo, casa);
        this.#ejercito = [];
    }

    // GETTERS
    get ejercito() {
        return this.#ejercito;
    }

    // SETTERS
    set ejercito(valor) {
        if (Array.isArray(valor)) {
            this.#ejercito = valor;
        }
    }

    // El Rey de la Noche NO ataca
    atacar() {
        console.log(`${this.nombre} no realiza ataques directos.`);
    }

    // Reanimar muertos (NO atan, solo se registran)
    revivirMuerto(cadaver) {
        if (!cadaver || cadaver.vivo === undefined) {
            console.log("No es posible revivir esto.");
            return null;
        }

        if (cadaver.vivo === true) {
            console.log(`${cadaver.nombre} aún vive.`);
            return null;
        }

        const noMuerto = new NoMuerto(cadaver.nombre, true);

        this.#ejercito.push(noMuerto);

        console.log(`❄️ ${cadaver.nombre} ha sido invocado como NoMuerto.`);

        return noMuerto;
    }

    mostrarEjercito() {
        console.log("=== NoMuertos Invocados por el Rey de la Noche ===");

        if (this.#ejercito.length === 0) {
            console.log("No hay NoMuertos por el momento.");
            return;
        }

        this.#ejercito.forEach(nm => console.log(`- ${nm.nombre}`));
    }
}
