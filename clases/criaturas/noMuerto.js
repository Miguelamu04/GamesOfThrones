export class NoMuerto {
    #nombre;
    #vivo;

    constructor(nombre = "", vivo = true) {
        this.#nombre = nombre;
        this.#vivo = vivo;
    }

    // GETTERS
    get nombre() { 
        return this.#nombre; 
    }

    get vivo() { 
        return this.#vivo; 
    }

    // SETTERS
    set nombre(valor) {
        this.#nombre = valor;
    }

    set vivo(valor) {
        this.#vivo = Boolean(valor);
    }

    // El NoMuerto NO ataca
    atacar() {
        console.log(`${this.#nombre} no puede atacar.`);
    }

    recibirDaño() {
        console.log(`${this.#nombre} no puede recibir daño.`);
    }

    mostrarInfo() {
        console.log(`${this.#nombre} (NoMuerto) - Vivo: ${this.#vivo}`);
    }
}
