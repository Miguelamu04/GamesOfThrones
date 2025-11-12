// Importamos la clase Personaje para validar que los miembros añadidos sean personajes válidos
import { Personaje } from "./personajes/personaje.js";

// Importamos Guerrero para filtrar qué personajes pueden combatir en una batalla
import { Guerrero } from "./personajes/especiales/guerrero.js";

export class Casa {
    #nombre;
    #lema;
    #miembros;

    constructor (nombre = "", lema = "", miembros = []){  
        this.#nombre = nombre;    
        this.#lema = lema;         
        this.#miembros = miembros; 
    }

    // ======= SETTERS =======

    set nombre(valor){
        this.#nombre = valor;      
    }

    set lema(valor){
        this.#lema = valor;        
    }

    // ======= GETTERS =======

    get nombre(){
        return this.#nombre;      
    }

    get lema(){
        return this.#lema;         
    }

    get miembros(){
        return this.#miembros;     
    }

    // MÉTODO PARA AGREGAR MIEMBROS A LA CASA
    agregarMiembro(personaje){
        // Solo permite añadir objetos que sean instancia de Personaje
        if(personaje instanceof Personaje){

            // Verifica si ya existe un personaje con el mismo nombre dentro de la casa
            const existePersonaje = this.#miembros.some(miembro => miembro.nombre === personaje.nombre);
            
            if(existePersonaje){
                console.log("El personaje ya está registrado");  // Evita duplicados

            // Verifica que el personaje realmente pertenezca a esta casa
            } else if(personaje.casa != this.#nombre){
                console.log("La casa del personaje no coincide con la casa registrada");

            } else {
                // Si pasa todas las validaciones, se agrega el personaje al arreglo
                this.#miembros.push(personaje);
                console.log("Personaje registrado");
            }
        }
    }

    // MÉTODO PARA MOSTRAR INFORMACIÓN DE LA CASA Y SUS MIEMBROS
    visualizarMiembros(){
        console.log("Casa: " + this.#nombre + ", Lema: " + this.#lema);

        // Si no tiene miembros registrados, se indica
        if(this.#miembros.length === 0){
            console.log("Casa sin miembros");  
        } else {

            // Se crea un arreglo independiente para recorrerlo
            const arrayMiembros = Array.from(this.#miembros);

            // Recorre y muestra información detallada de cada personaje
            arrayMiembros.forEach(elemento => {
                console.log(`${elemento.nombre} (${elemento.age} años, ${elemento.vivo ? 'Vivo' : 'Muerto'}) - ${elemento.casa}`);
            });
        }
    }

    // OBTENER SOLO GUERREROS VIVOS (LISTOS PARA LA BATALLA)

    guerrerosDisponibles(){
        // Filtra los miembros que:
        // - Sean instancia de Guerrero
        // - Estén vivos
        let guerreros = this.#miembros.filter(
            miembro => miembro instanceof Guerrero && miembro.vivo
        );
        return guerreros;  
    }
}
