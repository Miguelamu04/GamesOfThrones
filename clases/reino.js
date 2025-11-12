// Importamos la clase Rey para validar que el líder del reino sea realmente un rey
import { Rey } from "./personaje/Especiales/rey.js";

export class Reino {
    #nombre;
    #rey;
    #casas;

    // Constructor del reino: recibe un nombre, un rey opcional y una lista inicial de casas
    constructor(nombre = "", rey = null, casas = []){
        this.#nombre = nombre;

        // Si el rey pasado es una instancia válida de Rey, se asigna
        if(rey instanceof Rey) {
            this.#rey = rey;
        }   

        // Se guardan las casas que pertenecen al reino
        this.#casas = casas;
    }

    // ========= SETTERS =========

    set nombre(valor){
        this.#nombre = valor; 
    }

    set rey(rey){
        if(rey instanceof Rey){
            this.#rey = rey;
        }
    }

    // ========= GETTERS =========

    get nombre(){
        return this.#nombre;   
    }

    get rey(){
        return this.#rey;      
    }

    get casas(){
        return this.#casas;    
    }

    // MÉTODO PARA AÑADIR UNA CASA AL REINO
    agregarCasa(casa){
        // Busca si ya existe una casa con ese nombre dentro del reino
        const existeCasa = this.#casas.some(apellido => apellido.nombre === casa);

        if(existeCasa){
            console.log("La casa ya está añadida");
        } else {
            // Si no existe, se agrega al arreglo
            this.#casas.push(casa);
            console.log(`La ${casa} ha sido añadida a ${this.#nombre}`);
        }
    }

    // MOSTRAR INFORMACIÓN DEL REY DEL REINO

    visualizarRey() {
        console.log(`${this.#rey.nombre} ha sido proclamado rey de ${this.#nombre}`);
    }

    // MOSTRAR INFORMACIÓN DE TODAS LAS CASAS DEL REINO
    visualizarCasas(){
        console.table(this.#casas);
    }
}
