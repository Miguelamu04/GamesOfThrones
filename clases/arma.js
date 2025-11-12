// La clase Arma representa cualquier tipo de arma que un personaje puede usar.
export class Arma {

    // Atributos privados: solo accesibles desde dentro de la clase
    #nombre;
    #daño;
    #tipo;

    // Constructor que inicializa una nueva arma con nombre, tipo y daño
    constructor(nombre = "", tipo = "", daño = 0){
        this.#nombre = nombre;  
        this.#tipo = tipo;      
        this.#daño = daño;      
    }

    // ====== SETTERS ======

    set nombre(valor){
        this.#nombre = valor;   
    }

    set tipo(valor){
        this.#tipo = valor;    
    }

    set daño(valor){
        this.#daño = valor;     
    }

    // ====== GETTERS ======

    get nombre(){
        return this.#nombre;    
    }

    get daño(){
        return this.#daño;      
    }

    get tipo(){
        return this.#tipo;      
    }

    // Método que devuelve una descripción completa del arma
    descripcion() {
        return `${this.#nombre} (${this.#tipo || "sin tipo"}) causa ${this.#daño} de daño.`;
        // Ejemplo: "Garra (Espada) causa 90 de daño."
    }

}
