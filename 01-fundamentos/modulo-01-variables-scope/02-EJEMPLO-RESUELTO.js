/*
╔══════════════════════════════════════════════════════════════════╗
║  MÓDULO 1: EJEMPLO RESUELTO - Variables, Scope y Hoisting       ║
╚══════════════════════════════════════════════════════════════════╝

Este archivo contiene ejemplos completos y comentados línea por línea.
Lee cada comentario cuidadosamente para entender QUÉ hace y POR QUÉ.
*/

// ════════════════════════════════════════════════════════════════
// EJEMPLO 1: Diferencia entre var, let y const
// ════════════════════════════════════════════════════════════════

console.log("=== EJEMPLO 1: var vs let vs const ===\n");

// Usando VAR (forma antigua - NO recomendado)
var usuario1 = "Ana";           // Declara con var
console.log(usuario1);          // "Ana"
var usuario1 = "Luis";          // Redeclara (¡problemático!)
console.log(usuario1);          // "Luis"

// Usando LET (forma moderna para valores cambiantes)
let usuario2 = "María";         // Declara con let
console.log(usuario2);          // "María"
usuario2 = "Carlos";            // Reasigna (permitido)
console.log(usuario2);          // "Carlos"
// let usuario2 = "Pedro";      // ❌ Esto daría ERROR (no se puede redeclarar)

// Usando CONST (forma moderna para valores constantes)
const usuario3 = "Sofia";       // Declara con const
console.log(usuario3);          // "Sofia"
// usuario3 = "Diego";          // ❌ Esto daría ERROR (no se puede reasignar)

// CONST con objetos (caso especial)
const persona = {               // La referencia es constante
  nombre: "Laura",
  edad: 28
};
persona.edad = 29;              // ✅ PERMITIDO: modificar propiedades
console.log(persona);           // { nombre: "Laura", edad: 29 }
// persona = {};                // ❌ ERROR: no se puede reasignar el objeto completo

console.log("\n");

// ════════════════════════════════════════════════════════════════
// EJEMPLO 2: Scope Global vs Function Scope
// ════════════════════════════════════════════════════════════════

console.log("=== EJEMPLO 2: Scope Global y Function ===\n");

// Variable global (accesible en todas partes)
const colorFavorito = "azul";   // Scope global

function mostrarColor() {
  // Puede acceder a variables globales
  console.log("Mi color favorito es:", colorFavorito);
  
  // Variable local (solo existe dentro de esta función)
  const animal = "gato";        // Scope de función
  console.log("Mi animal es:", animal);
}

mostrarColor();                 // Llama la función
// console.log(animal);         // ❌ ERROR: animal no existe aquí

console.log("\n");

// ════════════════════════════════════════════════════════════════
// EJEMPLO 3: Block Scope (con let y const)
// ════════════════════════════════════════════════════════════════

console.log("=== EJEMPLO 3: Block Scope ===\n");

// Declaramos una variable fuera del bloque
let edad = 25;
console.log("Edad inicial:", edad);    // 25

if (true) {
  // Esta variable solo existe dentro del bloque if
  let edad = 30;                       // ¡Diferente variable!
  console.log("Edad dentro del if:", edad);  // 30
}

console.log("Edad fuera del if:", edad);     // 25 (la original)

// Ahora con VAR (mal comportamiento)
if (true) {
  var problema = "Esto se filtra";     // var NO respeta el bloque
}
console.log(problema);                 // "Esto se filtra" (¡visible fuera!)

console.log("\n");

// ════════════════════════════════════════════════════════════════
// EJEMPLO 4: Scope Anidado (Nested Scope)
// ════════════════════════════════════════════════════════════════

console.log("=== EJEMPLO 4: Scope Anidado ===\n");

function funcionExterna() {
  const mensaje = "Hola desde afuera";  // Scope de funcionExterna
  
  function funcionInterna() {
    const saludo = "Hola desde adentro"; // Scope de funcionInterna
    
    // Puede acceder a variables externas
    console.log(mensaje);               // ✅ "Hola desde afuera"
    console.log(saludo);                // ✅ "Hola desde adentro"
  }
  
  funcionInterna();                     // Llama la función interna
  // console.log(saludo);               // ❌ ERROR: saludo no existe aquí
}

funcionExterna();

console.log("\n");

// ════════════════════════════════════════════════════════════════
// EJEMPLO 5: Hoisting en Acción
// ════════════════════════════════════════════════════════════════

console.log("=== EJEMPLO 5: Hoisting ===\n");

// Funciones declaradas se pueden llamar antes de definirlas
saludar();                              // ✅ Funciona!

function saludar() {
  console.log("¡Hola! (función declarada)");
}

// Pero las funciones expresión NO
// despedir();                          // ❌ ERROR: Cannot access before initialization

const despedir = function() {
  console.log("¡Adiós! (función expresión)");
};

despedir();                             // Ahora sí funciona

console.log("\n");

// ════════════════════════════════════════════════════════════════
// EJEMPLO 6: Caso Real - Sistema de Carrito de Compras
// ════════════════════════════════════════════════════════════════

console.log("=== EJEMPLO 6: Caso Real - Carrito de Compras ===\n");

// Configuración (no cambia, usa const)
const IMPUESTO = 0.16;                  // 16% de impuesto
const ENVIO_GRATIS_MINIMO = 500;        // Envío gratis sobre $500

// Carrito (array que modificaremos, pero la referencia es constante)
const carrito = [];

// Función para agregar producto
function agregarProducto(nombre, precio) {
  // Creamos objeto producto (const porque no lo reasignaremos)
  const producto = {
    id: Date.now(),                     // ID único usando timestamp
    nombre: nombre,
    precio: precio
  };
  
  carrito.push(producto);               // Modificamos el array (permitido)
  console.log(`✅ Agregado: ${nombre} - $${precio}`);
}

// Función para calcular total
function calcularTotal() {
  let subtotal = 0;                     // let porque va a cambiar
  
  // Iteramos el carrito sumando precios
  for (let i = 0; i < carrito.length; i++) {
    subtotal += carrito[i].precio;      // Acumulamos
  }
  
  const impuestos = subtotal * IMPUESTO; // Calculamos impuestos
  const costoEnvio = subtotal >= ENVIO_GRATIS_MINIMO ? 0 : 50;
  const total = subtotal + impuestos + costoEnvio;
  
  // Mostramos desglose
  console.log("\n--- RESUMEN DEL CARRITO ---");
  console.log(`Subtotal: $${subtotal.toFixed(2)}`);
  console.log(`Impuestos (${IMPUESTO * 100}%): $${impuestos.toFixed(2)}`);
  console.log(`Envío: $${costoEnvio.toFixed(2)}`);
  console.log(`TOTAL: $${total.toFixed(2)}`);
  
  return total;
}

// Simulamos compras
agregarProducto("Laptop", 800);
agregarProducto("Mouse", 25);
agregarProducto("Teclado", 45);

calcularTotal();

console.log("\n");

// ════════════════════════════════════════════════════════════════
// EJEMPLO 7: Error Común - var en Loops
// ════════════════════════════════════════════════════════════════

console.log("=== EJEMPLO 7: var vs let en Loops ===\n");

// Problema con VAR
console.log("Usando VAR:");
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log("VAR:", i);             // Siempre imprime 3
  }, 100);
}
// ¿Por qué? Porque var no tiene block scope, todos los timeouts
// ven la misma variable 'i' que terminó siendo 3

// Solución con LET
setTimeout(function() {
  console.log("\nUsando LET:");
  for (let i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log("LET:", i);           // Imprime 0, 1, 2 correctamente
    }, 100);
  }
  // ¿Por qué funciona? Porque let crea una nueva 'i' en cada iteración
}, 500);

// ════════════════════════════════════════════════════════════════
// 💡 LECCIONES CLAVE DE ESTOS EJEMPLOS
// ════════════════════════════════════════════════════════════════

/*
1. USA CONST POR DEFECTO
   - Para valores que no cambiarán
   - Para objetos/arrays (la referencia no cambia)
   - Hace tu código más predecible

2. USA LET SOLO CUANDO EL VALOR CAMBIARÁ
   - Contadores, acumuladores
   - Variables que se reasignan
   - En loops

3. NUNCA USES VAR
   - Puede causar bugs difíciles de encontrar
   - No respeta block scope
   - Es de JavaScript antiguo

4. EL SCOPE ES COMO CAJAS ANIDADAS
   - Las internas pueden ver las externas
   - Las externas NO pueden ver las internas

5. LAS FUNCIONES DECLARADAS SE ELEVAN COMPLETAMENTE
   - Puedes llamarlas antes de definirlas
   - Pero las funciones expresión no
*/

// ════════════════════════════════════════════════════════════════
// 🚀 PRÓXIMO PASO
// ════════════════════════════════════════════════════════════════

console.log("\n");
console.log("✅ Has completado el ejemplo resuelto.");
console.log("📝 Ahora ve a: 03-EJERCICIOS-GUIADOS.js");
console.log("💪 Y luego a: 04-EJERCICIOS-INDEPENDIENTES.js");
