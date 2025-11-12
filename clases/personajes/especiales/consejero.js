// Importamos la clase base Personaje, ya que Consejero hereda de ella
import { Personaje } from "../personaje.js";

// Importamos Rey para verificar que el método "aconsejar" reciba un rey válido
import { Rey } from "./rey.js";

export class Consejero extends Personaje {
    #especialidad;
    // CONSTRUCTOR DEL CONSEJERO
    constructor(nombre = "", age = 0, vivo = true, casa = "", especialidad = "") {
        super(nombre, age, vivo, casa);
        this.#especialidad = especialidad;
    }

    // MÉTODO: atacar()
    atacar() {
        console.log(`${this.nombre} no lucha con armas, sino con palabras e inteligencia.`);
    }

    // MÉTODO: aconsejar(rey)
    aconsejar(rey) {

        if (rey instanceof Rey) {
            console.log(`${this.nombre} aconseja a ${rey.nombre} sobre diplomacia y estrategias de guerra.`);
        }
    }
}
