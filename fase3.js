// ===================================================
// IMPORTACIÓN DE CLASES
// ===================================================
import { Arma } from "./clases/arma.js";
import { Casa } from "./clases/casa.js";
import { Guerrero } from "./especiales/guerrero.js";
import { Batalla } from "./clases/batalla.js";
import { NoMuerto } from "./especiales/no_muertos.js";
import { Dragon } from "./especiales/dragon.js";
import { Personaje } from "./clases/personaje.js";


// ===================================================
// CREACIÓN DE CASAS
// ===================================================
console.log("\n🏰 Creando casas...");
const casaStark = new Casa("Stark", "El invierno se acerca");
const casaLannister = new Casa("Lannister", "Un Lannister siempre paga sus deudas");
const casaCaminantesBlancos = new Casa("Caminantes_Blancos", "La larga noche");
const casaTargaryen = new Casa("Targaryen", "Fuego y Sangre");


// ===================================================
// CREACIÓN DE ARMAS
// ===================================================
console.log("\n⚒️ Preparando armas...");
const garra = new Arma("Garra", 90);
const aguja = new Arma("Aguja", 70);
const hacha = new Arma("Hacha del norte", 80);
const espadaLarga = new Arma("Espada Larga", 85);
const ballesta = new Arma("Ballesta", 75);
const filoRojo = new Arma("Filo Rojo", 88);
const lanzaDeCaza = new Arma("Lanza de Caza", 60);


// ===================================================
// GUERREROS DE LA CASA STARK
// ===================================================
console.log("\n🛡️ Reclutando guerreros Stark...");
const jon = new Guerrero("Jon Snow", 25, true, "Stark", garra);
const arya = new Guerrero("Arya Stark", 18, true, "Stark", aguja);
const robb = new Guerrero("Robb Stark", 22, true, "Stark", espadaLarga);
const brienne = new Guerrero("Brienne de Tarth", 30, true, "Stark", hacha);


// ===================================================
// GUERREROS DE LA CASA LANNISTER
// ===================================================
console.log("\n🛡️ Reclutando guerreros Lannister...");
const jaime = new Guerrero("Jaime Lannister", 32, true, "Lannister", filoRojo);
const cersei = new Guerrero("Cersei Lannister", 34, true, "Lannister", lanzaDeCaza);
const tyrion = new Guerrero("Tyrion Lannister", 30, true, "Lannister", ballesta);
const gregor = new Guerrero("Gregor Clegane", 38, true, "Lannister", hacha);


// ===================================================
// CAMINANTES BLANCOS (ya existentes)
// ===================================================
const muerto1 = new NoMuerto("Viento Helado");

// Agregarlo a su casa
casaCaminantesBlancos.agregarMiembro(muerto1);


// ===================================================
// CASA TARGARYEN Y DRAGONES
// ===================================================
console.log("\n🔥 Reuniendo a la Casa Targaryen...");
const daenerys = new Personaje("Daenerys Targaryen", 22, true, "Targaryen");
casaTargaryen.agregarMiembro(daenerys);

// Dragones
const drogon = new Dragon("Drogon", 15, 120, daenerys);
const rhaegal = new Dragon("Rhaegal", 15, 110, daenerys);
const viserion = new Dragon("Viserion", 15, 105, daenerys);

// Añadirlos a la casa Targaryen
casaTargaryen.agregarDragon(drogon);
casaTargaryen.agregarDragon(rhaegal);
casaTargaryen.agregarDragon(viserion);

console.log("\n🐉 Dragones de la Casa Targaryen:");
casaTargaryen.visualizarDragones();


// ===================================================
// REGISTRAR MIEMBROS EN SUS CASAS
// ===================================================
console.log("\n📜 Registrando personajes en sus casas...");

casaStark.agregarMiembro(jon);
casaStark.agregarMiembro(arya);
casaStark.agregarMiembro(robb);
casaStark.agregarMiembro(brienne);

casaLannister.agregarMiembro(jaime);
casaLannister.agregarMiembro(cersei);
casaLannister.agregarMiembro(tyrion);
casaLannister.agregarMiembro(gregor);


// ===================================================
// MOSTRAR ESTADO INICIAL
// ===================================================
console.log("\n🏁 Estado inicial de las casas:");
casaStark.visualizarMiembros();
casaLannister.visualizarMiembros();


// ===================================================
// INICIO DE LA BATALLA
// ===================================================
console.log("\n⚔️ ¡COMIENZA LA BATALLA DE LOS BASTARDOS! ⚔️\n");

const batallaBastardos = new Batalla();
const casaDerrotada = batallaBastardos.iniciarBatalla(casaStark, casaLannister);


// ===================================================
// MOSTRAR CAÍDOS EN BATALLA
// ===================================================
batallaBastardos.mostrarGuerrerosMuertosEnCombate();

// ===================================================
// LOS CAÍDOS RENACEN COMO NO MUERTOS
// ===================================================
console.log("\n❄️ Los caídos se levantan como NoMuertos...\n");

// Convertimos los muertos en NoMuertos
NoMuerto.invocarMuertos(batallaBastardos.muertos);
// Añadir todos los NoMuertos a la casa Caminantes Blancos
NoMuerto.ejercito.forEach(zombie => {
    casaCaminantesBlancos.miembros.push(zombie);
});


// Se añaden a la casa Caminantes Blancos
NoMuerto.ejercito.forEach(zombie => {
    casaCaminantesBlancos.agregarMiembro(zombie);
});


// ===================================================
// EJÉRCITO DE LOS CAMINANTES BLANCOS
// ===================================================
console.log("\n🧊 Ejército de la Larga Noche:");
casaCaminantesBlancos.visualizarMiembros();


// ===================================================
// FIN DEL PROGRAMA
// ===================================================
console.log("\n🏁 FIN DEL PROGRAMA 🏁\n");
