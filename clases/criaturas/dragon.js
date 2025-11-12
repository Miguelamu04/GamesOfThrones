import { Personaje } from "../personajes/personaje.js";

export class Dragon {

    // === Array estático para almacenar dragones ===
    static listaDragones = [];

    #nombre;
    #vida;
    #fuego;
    #vivo;
    #casa;
    #jinete;

    constructor(nombre = "", vida = 200, fuego = 50, vivo = true, casa = "Targaryen") {
        this.#nombre = nombre;
        this.#vida = vida;
        this.#fuego = fuego;
        this.#vivo = vivo;
        this.#casa = casa;
        this.#jinete = null;
    }


    // =====================
    //       GETTERS
    // =====================

    get nombre() {
        return this.#nombre;
    }

    get vida() {
        return this.#vida;
    }

    get fuego() {
        return this.#fuego;
    }

    get vivo() {
        return this.#vivo;
    }

    get casa() {
        return this.#casa;
    }

    get jinete() {
        return this.#jinete;
    }

    // =====================
    //       SETTERS
    // =====================

    set nombre(valor) {
        this.#nombre = valor;
    }

    set vida(valor) {
        this.#vida = valor;
    }

    set fuego(valor) {
        this.#fuego = valor;
    }

    // =====================
    //     MÉTODOS EXTRA
    // =====================

    asignarJinete(personaje) {
        if (!(personaje instanceof Personaje)) {
            console.log("Solo un personaje puede montar al dragón.");
            return;
        }

        if (!personaje.vivo) {
            console.log("El jinete debe estar vivo.");
            return;
        }

        if (personaje.casa !== this.#casa) {
            console.log("El jinete debe pertenecer a la misma casa que el dragón.");
            return;
        }

        this.#jinete = personaje;
        console.log(`${personaje.nombre} ahora es el jinete de ${this.#nombre}.`);
    }

    removerJinete() {
        if (this.#jinete) {
            console.log(`${this.#jinete.nombre} deja de montar a ${this.#nombre}.`);
            this.#jinete = null;
        }
    }

    atacar() {
        console.log(`${this.#nombre} ruge imponente, pero no realiza ningún ataque.`);
    }

    morir() {
        this.#vivo = false;
        console.log(`${this.#nombre} ha caído en combate.`);
    }

    recibirDaño(puntos) {
        this.#vida -= puntos;

        console.log(`${this.#nombre} recibe ${puntos} puntos de daño.`);

        if (this.#vida <= 0) {
            this.#vida = 0;
            this.morir();
        }
    }

    //    FUNCIÓN PARA AÑADIR DRAGONES

    static añadirDragon(dragon) {
        if (dragon instanceof Dragon) {
            Dragon.listaDragones.push(dragon);
            console.log(`🔥 Dragón añadido: ${dragon.nombre}`);
        } else {
            console.log("Solo se pueden añadir instancias de Dragon.");
        }
    }
}
