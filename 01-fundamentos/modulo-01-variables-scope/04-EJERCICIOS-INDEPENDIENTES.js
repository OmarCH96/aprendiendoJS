/*
╔══════════════════════════════════════════════════════════════════╗
║  MÓDULO 1: EJERCICIOS INDEPENDIENTES                            ║
║  Variables, Scope y Hoisting                                     ║
╚══════════════════════════════════════════════════════════════════╝

INSTRUCCIONES:
1. Resuelve cada ejercicio por tu cuenta
2. NO mires las soluciones inmediatamente
3. Si te bloqueas, revisa la teoría o pide una pista
4. Ejecuta el código para verificar que funciona
5. Cuando termines, solicita retroalimentación

⚠️ REGLA: Intenta resolver cada uno al menos 10 minutos antes de pedir ayuda
*/

// ════════════════════════════════════════════════════════════════
// EJERCICIO 1: Sistema de Inventario
// ════════════════════════════════════════════════════════════════

console.log("=== EJERCICIO 1: Sistema de Inventario ===\n");

/*
REQUISITOS:
Crea un sistema básico de inventario que:
1. Tenga una capacidad máxima (constante) de 100 items
2. Un array de productos (usa const)
3. Una función para agregar productos que:
   - Verifique que no exceda la capacidad
   - Agregue el producto al inventario
   - Muestre un mensaje de confirmación o error
4. Una función para contar el total de items

USA: const para el array y capacidad, let si necesitas contadores
*/

// TU CÓDIGO AQUÍ






// Pruebas (descomenta después de implementar):
// agregarAlInventario("Laptop", 5);
// agregarAlInventario("Mouse", 10);
// agregarAlInventario("Teclado", 3);
// mostrarInventario();

console.log("\n");

// ════════════════════════════════════════════════════════════════
// EJERCICIO 2: Calculadora de Descuentos
// ════════════════════════════════════════════════════════════════

console.log("=== EJERCICIO 2: Calculadora de Descuentos ===\n");

/*
REQUISITOS:
Crea una función calcularPrecioFinal que:
1. Reciba un precio original
2. Aplique un descuento según estas reglas:
   - Si el precio >= 1000: 20% descuento
   - Si el precio >= 500: 10% descuento
   - Si el precio < 500: sin descuento
3. Calcule el precio con impuestos (16%)
4. Retorne un objeto con: original, descuento, impuestos, final

USA: const para el objeto de retorno y tasas, let para cálculos intermedios
APLICA: Block scope correctamente en los if
*/

// TU CÓDIGO AQUÍ






// Pruebas (descomenta después de implementar):
// console.log(calcularPrecioFinal(1200));
// console.log(calcularPrecioFinal(600));
// console.log(calcularPrecioFinal(300));

console.log("\n");

// ════════════════════════════════════════════════════════════════
// EJERCICIO 3: Contador con Scope Anidado
// ════════════════════════════════════════════════════════════════

console.log("=== EJERCICIO 3: Contador con Scope Anidado ===\n");

/*
REQUISITOS:
Crea una función crearContador que:
1. Tenga una variable interna 'cuenta' iniciada en 0
2. Retorne un objeto con tres métodos:
   - incrementar(): suma 1 a cuenta
   - decrementar(): resta 1 a cuenta
   - obtenerValor(): retorna el valor actual
3. La variable 'cuenta' NO debe ser accesible directamente desde fuera

OBJETIVO: Practicar scope anidado y encapsulación básica
*/

// TU CÓDIGO AQUÍ






// Pruebas (descomenta después de implementar):
// const miContador = crearContador();
// miContador.incrementar();
// miContador.incrementar();
// miContador.incrementar();
// console.log(miContador.obtenerValor()); // Debería ser 3
// miContador.decrementar();
// console.log(miContador.obtenerValor()); // Debería ser 2
// console.log(miContador.cuenta); // undefined (no accesible)

console.log("\n");

// ════════════════════════════════════════════════════════════════
// EJERCICIO 4: Sistema de Tareas (TODO List)
// ════════════════════════════════════════════════════════════════

console.log("=== EJERCICIO 4: Sistema de Tareas ===\n");

/*
REQUISITOS:
Crea un sistema de tareas con:
1. Un array de tareas (cada tarea es un objeto: {id, texto, completada})
2. Función agregarTarea(texto): agrega nueva tarea
3. Función completarTarea(id): marca tarea como completada
4. Función mostrarTareas(): muestra todas las tareas con su estado
5. Función contarPendientes(): cuenta tareas no completadas

USA: const para el array, let en loops, scope apropiado en funciones
*/

// TU CÓDIGO AQUÍ






// Pruebas (descomenta después de implementar):
// agregarTarea("Estudiar JavaScript");
// agregarTarea("Hacer ejercicio");
// agregarTarea("Leer documentación");
// mostrarTareas();
// completarTarea(1);
// mostrarTareas();
// console.log("Pendientes:", contarPendientes());

console.log("\n");

// ════════════════════════════════════════════════════════════════
// EJERCICIO 5: Analizador de Texto
// ════════════════════════════════════════════════════════════════

console.log("=== EJERCICIO 5: Analizador de Texto ===\n");

/*
REQUISITOS:
Crea una función analizarTexto que:
1. Reciba un string de texto
2. Retorne un objeto con:
   - cantidadPalabras: número de palabras
   - cantidadCaracteres: total de caracteres (sin espacios)
   - palabraMasLarga: la palabra más larga
   - promedioPorPalabra: promedio de caracteres por palabra

PISTAS:
- Usa .split(" ") para separar palabras
- Usa .replace(/\s/g, "") para quitar espacios
- Necesitarás un loop para encontrar la palabra más larga
*/

// TU CÓDIGO AQUÍ






// Pruebas (descomenta después de implementar):
// const resultado = analizarTexto("JavaScript es un lenguaje de programación increíble");
// console.log(resultado);
// Esperado: {
//   cantidadPalabras: 7,
//   cantidadCaracteres: 44,
//   palabraMasLarga: "programación",
//   promedioPorPalabra: 6.29
// }

console.log("\n");

// ════════════════════════════════════════════════════════════════
// RETO AVANZADO: Sistema de Carrito con Cupones
// ════════════════════════════════════════════════════════════════

console.log("=== RETO AVANZADO: Carrito con Cupones ===\n");

/*
REQUISITOS:
Crea un sistema de carrito que:
1. Permita agregar productos (nombre, precio, cantidad)
2. Tenga cupones de descuento predefinidos (objeto constante)
3. Calcule el total aplicando:
   - Descuento por cupón si existe
   - Descuento progresivo por cantidad (5% si total > 1000, 10% si > 2000)
   - Impuestos (16%)
4. Muestre un resumen detallado

CUPONES:
- "VERANO2024": 15% descuento
- "CLIENTE100": 20% descuento
- "WELCOME": 10% descuento

FUNCIONES NECESARIAS:
- agregarProducto(nombre, precio, cantidad)
- aplicarCupon(codigo)
- calcularTotal()
- mostrarResumen()
*/

// TU CÓDIGO AQUÍ






// Pruebas (descomenta después de implementar):
// agregarProducto("Laptop", 1000, 1);
// agregarProducto("Mouse", 50, 2);
// agregarProducto("Teclado", 100, 1);
// aplicarCupon("VERANO2024");
// mostrarResumen();

console.log("\n");

// ════════════════════════════════════════════════════════════════
// 📊 AUTOEVALUACIÓN
// ════════════════════════════════════════════════════════════════

console.log("=== 📊 AUTOEVALUACIÓN ===\n");

/*
Antes de solicitar retroalimentación, responde honestamente:

□ ¿Completaste al menos 3 ejercicios regulares?
□ ¿Usaste const por defecto y let solo cuando era necesario?
□ ¿Evitaste usar var completamente?
□ ¿Respetaste el scope apropiado en cada función?
□ ¿Pusiste esfuerzo real antes de buscar ayuda?

Si respondiste SÍ a todo, estás listo para continuar.
Si alguna es NO, identifica qué necesitas reforzar.
*/

console.log("🎯 ¿Terminaste? Solicita retroalimentación con tus soluciones.");
console.log("💡 Recuerda: Los errores son parte del aprendizaje.");
console.log("🚀 Próximo módulo: Tipos de Datos y Operadores");

// ════════════════════════════════════════════════════════════════
// NOTAS FINALES
// ════════════════════════════════════════════════════════════════

/*
CONSEJOS PARA ESTOS EJERCICIOS:

1. Lee el problema completo antes de empezar
2. Piensa en la estructura antes de escribir código
3. Empieza con lo básico y ve agregando funcionalidad
4. Prueba cada función antes de pasar a la siguiente
5. Si algo no funciona, usa console.log para debug

ERRORES COMUNES A EVITAR:

❌ Usar var en lugar de let/const
❌ Intentar acceder a variables fuera de su scope
❌ No verificar valores antes de usarlos
❌ Olvidar que const no permite reasignación
❌ No usar nombres descriptivos para variables

CUANDO PIDAS AYUDA, INCLUYE:

1. Qué intentaste hacer
2. Qué esperabas que pasara
3. Qué pasó en realidad
4. El código que escribiste

¡Mucho éxito! 💪
*/
