// Importamos la clase Personaje ya que Guerrero hereda de ella
import { Personaje } from "../personaje.js";

// Importamos Arma para validar que el guerrero use armas válidas
import { Arma } from "../../arma.js";

export class Guerrero extends Personaje {
    #arma;
    #vida = 100;

    // CONSTRUCTOR DEL GUERRERO

    constructor(nombre = "", age = 0, vivo = true, casa = "", arma = null) {

        super(nombre, age, vivo, casa);

        if (arma instanceof Arma) {
            this.#arma = arma;
        }
    }

    // SETTER: Cambiar o asignar un arma
    set arma(weapon) {
        // Solo permite asignar armas correctas
        if (weapon instanceof Arma) {
            this.#arma = weapon;
            console.log(`${this.nombre} se ha equipado ${weapon.nombre}`);
        } else {
            console.log("Error");
        }
    }

    // GETTERS: Obtener información del guerrero

    get arma() {
        return this.#arma;      
    }

    get vida() {
        return this.#vida;      
    }
    // MÉTODO: Entrenar
    entrenar() {
        console.log(`${this.nombre} se entrena sin descanso para la proxima batalla.`);
    }

    // MÉTODO: Morir
    morir() {
        this.vivo = false;
    }

    // MÉTODO: Recibir daño
    recibirDaño(puntos) {
        this.#vida -= puntos;

        if (this.#vida <= 0) {
            this.#vida = 0; 
            this.morir();   
        }
    }

    // MÉTODO: Atacar a otro guerrero
    atacar(objetivo) {
        const daño = Math.floor(this.#arma.daño * (0.7 + Math.random() * 0.6));
        console.log(`${this.nombre} ataca a ${objetivo.nombre} causando ${daño} puntos de vida.`);
        objetivo.recibirDaño(daño);
    }
}
