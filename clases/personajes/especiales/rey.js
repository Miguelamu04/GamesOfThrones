// Importamos la clase base Personaje para que Rey pueda heredar sus propiedades y métodos
import { Personaje } from "../personaje.js";

export class Rey extends Personaje {
    #añosReinado;
    // CONSTRUCTOR DEL REY
    constructor(nombre = "", age = 0, vivo = true, casa = "", añosReinado = 0) {
        super(nombre, age, vivo, casa);
        this.#añosReinado = añosReinado;
    }
    // SETTER: 
    set añosReinado(valor) {
        if (valor > 0) {
            this.#añosReinado = valor;
        } else {
            console.log("Debes de añadir un numero positivo");
        }
    }
    // GETTER: Obtener los años de reinado
    get añosReinado() {
        return this.#añosReinado;
    }
    // MÉTODO: Atacar
    atacar() {
        console.log(`${this.nombre} lidera la batalla y anima a sus guerreros.`);
    }
    // MÉTODO: Gobernar
    gobernar() {
        console.log(`${this.nombre} gobierna con sabiduria desde hace ${this.añosReinado}`);
    }
}
