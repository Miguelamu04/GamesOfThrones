export class Personaje {
    #nombre;
    #age;
    #vivo;
    #casa;
    static reinoActual = null;

    // CONSTRUCTOR DEL PERSONAJE
    constructor(nombre = "", age = 0, vivo = true, casa = "") {
        this.#nombre = nombre;  
        this.#age = age;        
        this.#vivo = vivo;      
        
        // VALIDACIÓN DE LA CASA SEGÚN EL REINO
        if(Personaje.reinoActual) {

            // Busca si dentro del reino existe alguna casa con ese nombre
            const casaExiste = Personaje.reinoActual.casas.some(c => c.nombre === casa);

            if(casaExiste) {
                // Si la casa existe dentro del reino, la asigna
                this.#casa = casa;
            } else {
                // Si la casa NO existe, se muestra un error
                console.log(`Error: "${casa}" no existe en ${Personaje.reinoActual.nombre}`);
                this.#casa = "";  // La asigna como vacía para evitar inconsistencias
            }

        } else {
            // Si no hay reinoActual definido, asigna la casa tal cual
            this.#casa = casa;
        }
    }

    // SETTERS (modificadores)

    set nombre(valor) {
        this.#nombre = valor;    
    }

    set age(valor) {
        // Solo permite edades positivas
        if(valor > 0){
            this.#age = valor;
        } else {
            console.log("La edad no puede ser un valor negativo");
        }
    }

    set vivo(valor) {
        this.#vivo = Boolean(valor);
    }

    set casa(valor){
        this.#casa = valor;      
    }

    // GETTERS (accesores)

    get nombre(){
        return this.#nombre;
    }

    get age(){
        return this.#age;
    }

    get vivo(){
        return this.#vivo;
    }

    get casa(){
        return this.#casa;
    }

    // MÉTODO DE PRESENTACIÓN
    saludo() {
        console.log(`Soy ${this.#nombre} de la casa ${this.#casa}`);
    }
}
