export class NoMuerto {

    // === Ejército global de NoMuertos ===
    static ejercito = [];

    // === Propiedad privada de cada NoMuerto ===
    #nombre;

    // ============================
    //        CONSTRUCTOR
    // ============================
    constructor(nombre = "") {
        this.#nombre = nombre;
    }

    // ============================
    //        GETTERS
    // ============================
    get nombre() {
        return this.#nombre;
    }

    // ============================
    //        SETTERS
    // ============================
    set nombre(valor) {
        if (typeof valor === "string" && valor.trim() !== "") {
            this.#nombre = valor;
        } else {
            console.log("El nombre del NoMuerto no es válido.");
        }
    }

    // ============================
    //   MÉTODO ESTÁTICO: INVOCAR
    // ============================
    static invocarMuertos(listaDeMuertos) {

        listaDeMuertos.forEach(m => {
            const zombie = new NoMuerto(m.nombre);

            NoMuerto.ejercito.push(zombie);

            console.log(`❄️ ${m.nombre} ha sido invocado como NoMuerto.`);
        });
    }

    // ============================
    //   MÉTODO ESTÁTICO: MOSTRAR
    // ============================
    static mostrarEjercito() {
        console.log("=== Ejército de NoMuertos ===");

        if (NoMuerto.ejercito.length === 0) {
            console.log("El ejército está vacío.");
            return;
        }

        NoMuerto.ejercito.forEach(z => {
            console.log(`- ${z.nombre}`);
        });
    }
}
