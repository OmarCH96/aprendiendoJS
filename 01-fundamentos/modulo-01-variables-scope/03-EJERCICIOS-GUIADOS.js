/*
╔══════════════════════════════════════════════════════════════════╗
║  MÓDULO 1: EJERCICIOS GUIADOS - Variables, Scope y Hoisting     ║
╚══════════════════════════════════════════════════════════════════╝

INSTRUCCIONES:
1. Lee cada ejercicio completamente
2. Sigue las pistas proporcionadas
3. Completa el código donde indica // TU CÓDIGO AQUÍ
4. Ejecuta el archivo para verificar tus respuestas
5. Si te atascas, pide ayuda antes de ver la solución
*/

// ════════════════════════════════════════════════════════════════
// EJERCICIO GUIADO 1: Elegir entre const y let
// ════════════════════════════════════════════════════════════════

console.log("=== EJERCICIO GUIADO 1 ===\n");

/*
OBJETIVO: Declarar variables usando const o let apropiadamente

PISTAS:
- Usa const si el valor NO va a cambiar
- Usa let si el valor SÍ va a cambiar
- Piensa: ¿este dato va a reasignarse más adelante?
*/

// Declara una variable para el nombre de una persona (no cambiará)
// TU CÓDIGO AQUÍ
const nombrePersona = "Juan";

// Declara una variable para la edad que aumentará cada año
// TU CÓDIGO AQUÍ
let edadPersona = 25;

// Declara una variable para el país de nacimiento (no cambiará)
// TU CÓDIGO AQUÍ
const paisNacimiento = "México";

// Ahora intenta cambiar la edad (simula que pasó un año)
// TU CÓDIGO AQUÍ
edadPersona = 26;

console.log(`${nombrePersona} tiene ${edadPersona} años y nació en ${paisNacimiento}`);
// Esperado: "Juan tiene 26 años y nació en México"

console.log("\n");

// ════════════════════════════════════════════════════════════════
// EJERCICIO GUIADO 2: Entender el Scope
// ════════════════════════════════════════════════════════════════

console.log("=== EJERCICIO GUIADO 2 ===\n");

/*
OBJETIVO: Identificar qué variables son accesibles en cada parte del código

PISTAS:
- Las funciones crean su propio scope
- Las variables de afuera son visibles adentro
- Las variables de adentro NO son visibles afuera
*/

const mensaje = "Soy global";

function funcionPrincipal() {
  const mensajeLocal = "Soy local de funcionPrincipal";
  
  console.log(mensaje);       // ¿Esto funciona? SÍ - puede ver variables globales
  console.log(mensajeLocal);  // ¿Esto funciona? SÍ - está en su propio scope
  
  function funcionInterna() {
    const mensajeInterno = "Soy local de funcionInterna";
    
    // Completa estos console.log
    // PISTA: Piensa qué variables puede ver esta función
    console.log(mensaje); // TU CÓDIGO: ¿puede ver mensaje? SÍ
    console.log(mensajeLocal); // TU CÓDIGO: ¿puede ver mensajeLocal? SÍ
    console.log(mensajeInterno); // TU CÓDIGO: ¿puede ver mensajeInterno? SÍ
  }
  
  funcionInterna();
  
  // ¿Puedes acceder a mensajeInterno aquí?
  // Intenta descomentar la siguiente línea:
  // console.log(mensajeInterno); // ❌ Esto debería dar ERROR
}

funcionPrincipal();

console.log("\n");

// ════════════════════════════════════════════════════════════════
// EJERCICIO GUIADO 3: Block Scope con if
// ════════════════════════════════════════════════════════════════

console.log("=== EJERCICIO GUIADO 3 ===\n");

/*
OBJETIVO: Practicar el block scope con bloques if

PISTAS:
- let y const respetan el block scope { }
- Variables dentro del bloque no existen fuera
*/

let puntaje = 85;

if (puntaje >= 60) {
  // Declara una variable que solo exista dentro de este if
  // Usa const para el mensaje de aprobación
  // TU CÓDIGO AQUÍ
  const resultado = "Aprobado";
  console.log(`Tu calificación: ${resultado}`);
}

// Intenta acceder a 'resultado' aquí
// ¿Qué esperas que pase?
// Descomenta para probar:
// console.log(resultado); // ❌ Debería dar ERROR

// Ahora declara 'resultado' en el scope correcto
// para poder usarlo fuera del if
let resultadoFinal; // Declara aquí

if (puntaje >= 60) {
  resultadoFinal = "Aprobado"; // Asigna aquí
} else {
  resultadoFinal = "Reprobado";
}

console.log(`Resultado final: ${resultadoFinal}`); // Ahora funciona

console.log("\n");

// ════════════════════════════════════════════════════════════════
// EJERCICIO GUIADO 4: Trabajar con Objects y const
// ════════════════════════════════════════════════════════════════

console.log("=== EJERCICIO GUIADO 4 ===\n");

/*
OBJETIVO: Entender que const permite modificar propiedades de objetos

PISTAS:
- const evita REASIGNAR la variable
- Pero SÍ puedes modificar las propiedades del objeto
*/

// Declara un objeto `producto` usando const
// Debe tener: nombre, precio, stock
// TU CÓDIGO AQUÍ
const producto = {
  nombre: "Laptop",
  precio: 800,
  stock: 5
};

console.log("Producto inicial:", producto);

// Ahora modifica el stock (vendiste una unidad)
// TU CÓDIGO AQUÍ
producto.stock = producto.stock - 1;
// O de forma más corta:
// producto.stock--;

// Intenta agregar una nueva propiedad
// TU CÓDIGO AQUÍ
producto.categoria = "Electrónica";

console.log("Producto modificado:", producto);

// Intenta reasignar el objeto completo
// ¿Qué esperas que pase?
// Descomenta para probar:
// producto = { nombre: "Mouse" }; // ❌ Debería dar ERROR

console.log("\n");

// ════════════════════════════════════════════════════════════════
// EJERCICIO GUIADO 5: Loop con let
// ════════════════════════════════════════════════════════════════

console.log("=== EJERCICIO GUIADO 5 ===\n");

/*
OBJETIVO: Usar let correctamente en un loop

PISTAS:
- Usa let para la variable de iteración
- Cada iteración tiene su propia copia de la variable
*/

// Crea un array de números
const numeros = [10, 20, 30, 40, 50];

// Crea un loop que imprima cada número multiplicado por 2
// Usa let para el índice
// TU CÓDIGO AQUÍ
for (let i = 0; i < numeros.length; i++) {
  const resultado = numeros[i] * 2;
  console.log(`${numeros[i]} x 2 = ${resultado}`);
}

console.log("\n");

// ════════════════════════════════════════════════════════════════
// EJERCICIO GUIADO 6: Caso Práctico - Gestión de Usuario
// ════════════════════════════════════════════════════════════════

console.log("=== EJERCICIO GUIADO 6 ===\n");

/*
OBJETIVO: Aplicar todo lo aprendido en una situación real

ESCENARIO:
Estás construyendo un sistema de usuarios. Debes:
1. Crear un objeto usuario con const
2. Modificar propiedades según acciones
3. Usar let para contadores
4. Respetar el scope
*/

// 1. Crea un objeto usuario con const
// Propiedades: nombre, email, sesionesActivas (empieza en 0)
// TU CÓDIGO AQUÍ
const usuario = {
  nombre: "Ana García",
  email: "ana@example.com",
  sesionesActivas: 0
};

// 2. Crea una función para iniciar sesión
function iniciarSesion() {
  // Incrementa las sesiones activas
  // TU CÓDIGO AQUÍ
  usuario.sesionesActivas++;
  
  // Variable local con el timestamp
  // TU CÓDIGO AQUÍ
  const horaInicio = new Date().toLocaleTimeString();
  
  console.log(`✅ Sesión iniciada a las ${horaInicio}`);
  console.log(`Sesiones activas: ${usuario.sesionesActivas}`);
}

// 3. Crea una función para cerrar sesión
function cerrarSesion() {
  // Verifica que hay sesiones activas antes de decrementar
  // TU CÓDIGO AQUÍ
  if (usuario.sesionesActivas > 0) {
    usuario.sesionesActivas--;
    console.log(`❌ Sesión cerrada`);
    console.log(`Sesiones activas: ${usuario.sesionesActivas}`);
  } else {
    console.log("⚠️ No hay sesiones activas");
  }
}

// 4. Prueba las funciones
console.log("Usuario:", usuario);
iniciarSesion();
iniciarSesion();
cerrarSesion();
console.log("\nUsuario final:", usuario);

console.log("\n");

// ════════════════════════════════════════════════════════════════
// ✅ VERIFICACIÓN
// ════════════════════════════════════════════════════════════════

console.log("=== ✅ VERIFICACIÓN ===\n");

/*
Si completaste todos los ejercicios, deberías poder responder:

1. ¿Cuándo usas const y cuándo let?
2. ¿Qué es el scope y por qué importa?
3. ¿Por qué let es mejor que var en loops?
4. ¿Se puede modificar un objeto declarado con const?
5. ¿Las funciones internas pueden ver variables externas?

Si tienes dudas en alguna, pregunta antes de continuar.
*/

console.log("🎉 ¡Ejercicios guiados completados!");
console.log("📝 Próximo paso: 04-EJERCICIOS-INDEPENDIENTES.js");
console.log("💡 Estos ejercicios no tienen tantas pistas. ¡Confía en lo que aprendiste!");
