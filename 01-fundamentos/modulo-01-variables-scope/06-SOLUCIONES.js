/*
╔══════════════════════════════════════════════════════════════════╗
║  ⚠️  SOLUCIONES - EJERCICIOS INDEPENDIENTES                     ║
║  MÓDULO 1: Variables, Scope y Hoisting                          ║
╚══════════════════════════════════════════════════════════════════╝

⚠️ ⚠️ ⚠️ ADVERTENCIA ⚠️ ⚠️ ⚠️

NO ABRAS ESTE ARCHIVO HASTA QUE:
1. Hayas intentado TODOS los ejercicios seriamente
2. Hayas pedido pistas si te bloqueaste
3. Estés genuinamente atascado O quieras comparar tu solución

El aprendizaje real viene de la lucha, no de leer soluciones.

Si abres este archivo sin intentar, te estás saboteando.

════════════════════════════════════════════════════════════════════

¿SEGURO QUE QUIERES CONTINUAR?

Piensa: ¿Ya intentaste cada ejercicio al menos 15 minutos?

Si la respuesta es NO, cierra este archivo y vuelve a intentar.

════════════════════════════════════════════════════════════════════
*/

// ════════════════════════════════════════════════════════════════
// SOLUCIÓN 1: Sistema de Inventario
// ════════════════════════════════════════════════════════════════

console.log("=== SOLUCIÓN 1: Sistema de Inventario ===\n");

// Constante para capacidad máxima
const CAPACIDAD_MAXIMA = 100;

// Array para almacenar productos (const porque no reasignaremos el array)
const inventario = [];

// Función para agregar productos
function agregarAlInventario(nombre, cantidad) {
  // Calcular total actual de items
  let totalActual = 0;
  for (let i = 0; i < inventario.length; i++) {
    totalActual += inventario[i].cantidad;
  }
  
  // Verificar si cabe el nuevo producto
  if (totalActual + cantidad > CAPACIDAD_MAXIMA) {
    console.log(`❌ No se puede agregar ${nombre}. Excede capacidad (${totalActual + cantidad}/${CAPACIDAD_MAXIMA})`);
    return false;
  }
  
  // Agregar producto
  const producto = {
    id: inventario.length + 1,
    nombre: nombre,
    cantidad: cantidad
  };
  
  inventario.push(producto);
  console.log(`✅ Agregado: ${nombre} (x${cantidad})`);
  return true;
}

// Función para mostrar inventario
function mostrarInventario() {
  console.log("\n--- INVENTARIO ACTUAL ---");
  
  let totalItems = 0;
  for (let i = 0; i < inventario.length; i++) {
    const prod = inventario[i];
    console.log(`${prod.id}. ${prod.nombre}: ${prod.cantidad} unidades`);
    totalItems += prod.cantidad;
  }
  
  console.log(`\nTotal items: ${totalItems}/${CAPACIDAD_MAXIMA}`);
  console.log(`Espacio disponible: ${CAPACIDAD_MAXIMA - totalItems}`);
}

// Pruebas
agregarAlInventario("Laptop", 5);
agregarAlInventario("Mouse", 10);
agregarAlInventario("Teclado", 3);
mostrarInventario();

console.log("\n");

// ════════════════════════════════════════════════════════════════
// SOLUCIÓN 2: Calculadora de Descuentos
// ════════════════════════════════════════════════════════════════

console.log("=== SOLUCIÓN 2: Calculadora de Descuentos ===\n");

function calcularPrecioFinal(precioOriginal) {
  // Constante para impuestos
  const TASA_IMPUESTO = 0.16;
  
  // Variable para el porcentaje de descuento (cambia según el precio)
  let porcentajeDescuento = 0;
  
  // Determinar descuento según reglas
  if (precioOriginal >= 1000) {
    porcentajeDescuento = 0.20; // 20%
  } else if (precioOriginal >= 500) {
    porcentajeDescuento = 0.10; // 10%
  }
  // Si es menor a 500, porcentajeDescuento sigue siendo 0
  
  // Calcular montos
  const montoDescuento = precioOriginal * porcentajeDescuento;
  const precioConDescuento = precioOriginal - montoDescuento;
  const montoImpuestos = precioConDescuento * TASA_IMPUESTO;
  const precioFinal = precioConDescuento + montoImpuestos;
  
  // Retornar objeto con desglose
  const resultado = {
    original: precioOriginal,
    descuento: montoDescuento,
    impuestos: montoImpuestos,
    final: precioFinal
  };
  
  return resultado;
}

// Pruebas
console.log("Precio $1200:", calcularPrecioFinal(1200));
console.log("Precio $600:", calcularPrecioFinal(600));
console.log("Precio $300:", calcularPrecioFinal(300));

console.log("\n");

// ════════════════════════════════════════════════════════════════
// SOLUCIÓN 3: Contador con Scope Anidado
// ════════════════════════════════════════════════════════════════

console.log("=== SOLUCIÓN 3: Contador con Scope Anidado ===\n");

function crearContador() {
  // Variable privada (solo accesible dentro de esta función)
  let cuenta = 0;
  
  // Retornar objeto con métodos que acceden a 'cuenta'
  const contador = {
    incrementar: function() {
      cuenta++;
      console.log("Incrementado a:", cuenta);
    },
    
    decrementar: function() {
      cuenta--;
      console.log("Decrementado a:", cuenta);
    },
    
    obtenerValor: function() {
      return cuenta;
    }
  };
  
  return contador;
}

// Pruebas
const miContador = crearContador();
miContador.incrementar(); // 1
miContador.incrementar(); // 2
miContador.incrementar(); // 3
console.log("Valor actual:", miContador.obtenerValor()); // 3
miContador.decrementar(); // 2
console.log("Valor final:", miContador.obtenerValor()); // 2
console.log("¿Acceso directo a cuenta?", miContador.cuenta); // undefined

console.log("\n");

// ════════════════════════════════════════════════════════════════
// SOLUCIÓN 4: Sistema de Tareas (TODO List)
// ════════════════════════════════════════════════════════════════

console.log("=== SOLUCIÓN 4: Sistema de Tareas ===\n");

const tareas = [];
let contadorID = 1; // Para generar IDs únicos

function agregarTarea(texto) {
  const tarea = {
    id: contadorID++,
    texto: texto,
    completada: false
  };
  
  tareas.push(tarea);
  console.log(`✅ Tarea agregada: "${texto}" (ID: ${tarea.id})`);
}

function completarTarea(id) {
  // Buscar la tarea por ID
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].id === id) {
      tareas[i].completada = true;
      console.log(`✓ Tarea ${id} completada`);
      return;
    }
  }
  
  console.log(`❌ No se encontró tarea con ID ${id}`);
}

function mostrarTareas() {
  console.log("\n--- LISTA DE TAREAS ---");
  
  if (tareas.length === 0) {
    console.log("No hay tareas");
    return;
  }
  
  for (let i = 0; i < tareas.length; i++) {
    const tarea = tareas[i];
    const estado = tarea.completada ? "✓" : " ";
    console.log(`[${estado}] ${tarea.id}. ${tarea.texto}`);
  }
}

function contarPendientes() {
  let pendientes = 0;
  
  for (let i = 0; i < tareas.length; i++) {
    if (!tareas[i].completada) {
      pendientes++;
    }
  }
  
  return pendientes;
}

// Pruebas
agregarTarea("Estudiar JavaScript");
agregarTarea("Hacer ejercicio");
agregarTarea("Leer documentación");
mostrarTareas();
completarTarea(1);
mostrarTareas();
console.log("\nTareas pendientes:", contarPendientes());

console.log("\n");

// ════════════════════════════════════════════════════════════════
// SOLUCIÓN 5: Analizador de Texto
// ════════════════════════════════════════════════════════════════

console.log("=== SOLUCIÓN 5: Analizador de Texto ===\n");

function analizarTexto(texto) {
  // Separar en palabras
  const palabras = texto.split(" ");
  const cantidadPalabras = palabras.length;
  
  // Contar caracteres sin espacios
  const textoSinEspacios = texto.replace(/\s/g, "");
  const cantidadCaracteres = textoSinEspacios.length;
  
  // Encontrar palabra más larga
  let palabraMasLarga = "";
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > palabraMasLarga.length) {
      palabraMasLarga = palabras[i];
    }
  }
  
  // Calcular promedio
  const promedioPorPalabra = cantidadCaracteres / cantidadPalabras;
  
  // Retornar objeto con resultados
  const analisis = {
    cantidadPalabras: cantidadPalabras,
    cantidadCaracteres: cantidadCaracteres,
    palabraMasLarga: palabraMasLarga,
    promedioPorPalabra: parseFloat(promedioPorPalabra.toFixed(2))
  };
  
  return analisis;
}

// Pruebas
const resultado = analizarTexto("JavaScript es un lenguaje de programación increíble");
console.log(resultado);

console.log("\n");

// ════════════════════════════════════════════════════════════════
// SOLUCIÓN 6: RETO - Sistema de Carrito con Cupones
// ════════════════════════════════════════════════════════════════

console.log("=== RETO: Carrito con Cupones ===\n");

// Configuración constante
const CUPONES = {
  "VERANO2024": 0.15,
  "CLIENTE100": 0.20,
  "WELCOME": 0.10
};

const TASA_IMPUESTO = 0.16;

// Estado del carrito
const carrito = [];
let cuponAplicado = null;

function agregarProducto(nombre, precio, cantidad) {
  const producto = {
    nombre: nombre,
    precio: precio,
    cantidad: cantidad,
    subtotal: precio * cantidad
  };
  
  carrito.push(producto);
  console.log(`✅ Agregado: ${nombre} (${cantidad}x) = $${producto.subtotal}`);
}

function aplicarCupon(codigo) {
  const codigoUpper = codigo.toUpperCase();
  
  if (CUPONES[codigoUpper]) {
    cuponAplicado = {
      codigo: codigoUpper,
      descuento: CUPONES[codigoUpper]
    };
    console.log(`🎟️ Cupón "${codigoUpper}" aplicado (${cuponAplicado.descuento * 100}% descuento)`);
  } else {
    console.log(`❌ Cupón "${codigo}" no válido`);
  }
}

function calcularTotal() {
  // Calcular subtotal de productos
  let subtotal = 0;
  for (let i = 0; i < carrito.length; i++) {
    subtotal += carrito[i].subtotal;
  }
  
  // Aplicar descuento por cupón
  let descuentoCupon = 0;
  if (cuponAplicado) {
    descuentoCupon = subtotal * cuponAplicado.descuento;
  }
  
  const subtotalConCupon = subtotal - descuentoCupon;
  
  // Aplicar descuento progresivo por cantidad
  let descuentoProgresivo = 0;
  if (subtotalConCupon > 2000) {
    descuentoProgresivo = subtotalConCupon * 0.10;
  } else if (subtotalConCupon > 1000) {
    descuentoProgresivo = subtotalConCupon * 0.05;
  }
  
  const subtotalConDescuentos = subtotalConCupon - descuentoProgresivo;
  
  // Calcular impuestos
  const impuestos = subtotalConDescuentos * TASA_IMPUESTO;
  
  // Total final
  const total = subtotalConDescuentos + impuestos;
  
  return {
    subtotal: subtotal,
    descuentoCupon: descuentoCupon,
    descuentoProgresivo: descuentoProgresivo,
    impuestos: impuestos,
    total: total
  };
}

function mostrarResumen() {
  console.log("\n╔════════════════════════════════════╗");
  console.log("║     RESUMEN DEL CARRITO            ║");
  console.log("╚════════════════════════════════════╝\n");
  
  // Mostrar productos
  console.log("PRODUCTOS:");
  for (let i = 0; i < carrito.length; i++) {
    const prod = carrito[i];
    console.log(`  ${prod.nombre} (${prod.cantidad}x) - $${prod.subtotal.toFixed(2)}`);
  }
  
  // Calcular y mostrar totales
  const totales = calcularTotal();
  
  console.log("\n-----------------------------------");
  console.log(`Subtotal:              $${totales.subtotal.toFixed(2)}`);
  
  if (totales.descuentoCupon > 0) {
    console.log(`Descuento cupón:      -$${totales.descuentoCupon.toFixed(2)}`);
  }
  
  if (totales.descuentoProgresivo > 0) {
    console.log(`Descuento cantidad:   -$${totales.descuentoProgresivo.toFixed(2)}`);
  }
  
  console.log(`Impuestos (16%):      +$${totales.impuestos.toFixed(2)}`);
  console.log("===================================");
  console.log(`TOTAL A PAGAR:        $${totales.total.toFixed(2)}`);
  console.log("===================================\n");
}

// Pruebas
agregarProducto("Laptop", 1000, 1);
agregarProducto("Mouse", 50, 2);
agregarProducto("Teclado", 100, 1);
aplicarCupon("VERANO2024");
mostrarResumen();

console.log("\n");

// ════════════════════════════════════════════════════════════════
// 💡 NOTAS SOBRE LAS SOLUCIONES
// ════════════════════════════════════════════════════════════════

console.log("=== 💡 LECCIONES DE ESTAS SOLUCIONES ===\n");

console.log(`
PATRONES IMPORTANTES QUE SE USARON:

1. CONST POR DEFECTO
   - Todos los objetos y arrays se declaran con const
   - Solo usamos let cuando el valor cambia (contadores, acumuladores)

2. SCOPE APROPIADO
   - Variables declaradas dentro de funciones no son accesibles fuera
   - El scope anidado en crearContador() crea privacidad

3. FUNCIONES CLARAS
   - Cada función tiene una responsabilidad específica
   - Nombres descriptivos que dicen qué hace la función

4. VALIDACIONES
   - Siempre verificar datos antes de usarlos
   - Manejar casos de error con mensajes claros

5. OBJETOS COMO RETORNO
   - Retornar objetos con múltiples valores es un patrón común
   - Hace el código más legible y fácil de usar

ERRORES QUE SE EVITARON:

❌ NO usar var en ningún lugar
❌ NO acceder a variables fuera de su scope
❌ NO modificar parámetros directamente
❌ NO tener funciones que hacen demasiadas cosas

RELACIÓN CON REACT Y NODE.JS:

🔹 El patrón de crearContador() es similar a los hooks de React
🔹 Los arrays de objetos son como se manejan listas en React
🔹 La estructura de funciones es la base para componentes y APIs
🔹 La validación de datos es crítica en backend (Node.js)
`);

// ════════════════════════════════════════════════════════════════
// 🚀 PRÓXIMOS PASOS
// ════════════════════════════════════════════════════════════════

console.log("\n=== 🚀 SI LLEGASTE HASTA AQUÍ ===\n");

console.log(`
SI COMPARASTE TU SOLUCIÓN:
- ¿Qué hiciste diferente?
- ¿Tu solución también funciona?
- ¿Hay algo que puedas mejorar?

SI COPIASTE SIN INTENTAR:
- Has perdido la oportunidad de aprender
- Estas soluciones no te ayudarán en un proyecto real
- Vuelve e intenta de verdad

PRÓXIMO PASO:
- Completa la VERIFICACIÓN (05-VERIFICACION.md)
- Asegúrate de entender TODOS los conceptos
- Solo entonces estarás listo para el siguiente módulo

¡El esfuerzo vale la pena!
`);
