# 📘 MÓDULO 1: Variables, Scope y Hoisting

## 🎯 OBJETIVOS DE APRENDIZAJE

Al finalizar este módulo podrás:
- Declarar variables con `var`, `let` y `const` sabiendo cuándo usar cada una
- Entender qué es el scope (alcance) y cómo afecta tu código
- Explicar qué es hoisting y evitar errores comunes
- Escribir código más predecible y sin bugs relacionados con variables

---

## 📖 1. VARIABLES: var, let, const

### ¿Qué es una variable?

Una variable es como una **caja con etiqueta** donde guardas información. La etiqueta es el nombre de la variable, y lo que guardas dentro es el valor.

```javascript
let edad = 25; // Una caja llamada "edad" que contiene el número 25
```

### Las tres formas de declarar variables

JavaScript moderno te da tres herramientas: `var`, `let` y `const`.

#### 🔴 var (la forma antigua - EVITAR en código moderno)

```javascript
var nombre = "Ana";
var nombre = "Luis"; // ¡Se puede redeclarar! (Esto causa bugs)
nombre = "María";    // Se puede reasignar
```

**Problemas de var:**
- Puede redeclararse (error propenso)
- Tiene "function scope" (lo veremos pronto)
- Es elevada (hoisting) de forma confusa

#### 🟢 let (la forma moderna para variables que CAMBIAN)

```javascript
let edad = 25;
edad = 26;           // ✅ Se puede reasignar
// let edad = 30;    // ❌ ERROR: No se puede redeclarar
```

**Cuándo usar let:**
- Cuando el valor va a cambiar
- Contadores, acumuladores, variables temporales
- En loops

#### 🔵 const (la forma moderna para valores CONSTANTES)

```javascript
const PI = 3.1416;
// PI = 3.14;        // ❌ ERROR: No se puede reasignar

const persona = { nombre: "Ana" };
persona.nombre = "Luis";  // ✅ PERMITIDO: modificar propiedades
// persona = {};     // ❌ ERROR: No se puede reasignar el objeto
```

**Cuándo usar const:**
- Cuando el valor NO va a cambiar
- Para funciones, objetos y arrays (la referencia no cambia)
- Por defecto, usa `const` a menos que SEPAS que necesitas `let`

### 📋 REGLA DE ORO

```
1. Por defecto, usa CONST
2. Si necesitas cambiar el valor, usa LET
3. NUNCA uses VAR
```

---

## 📖 2. SCOPE (ALCANCE)

El **scope** es el "área de visibilidad" de una variable. ¿Dónde puede ser usada?

### 🌍 Global Scope

Variables declaradas fuera de cualquier función o bloque.

```javascript
const nombre = "Global"; // Visible en TODAS partes

function saludar() {
  console.log(nombre);   // ✅ Puede acceder
}

saludar(); // "Global"
```

### 🏢 Function Scope

Variables declaradas dentro de una función solo existen ahí.

```javascript
function ejemplo() {
  const mensaje = "Solo aquí";
  console.log(mensaje); // ✅ Funciona
}

ejemplo();
// console.log(mensaje); // ❌ ERROR: mensaje no está definido
```

### 🧱 Block Scope (con let y const)

Variables declaradas en un bloque `{ }` solo existen ahí.

```javascript
if (true) {
  let dentroBloque = "Hola";
  console.log(dentroBloque); // ✅ Funciona
}

// console.log(dentroBloque); // ❌ ERROR: no existe fuera del bloque
```

**⚠️ IMPORTANTE:** `var` NO respeta block scope:

```javascript
if (true) {
  var problema = "Visible afuera"; // var ignora el bloque
}

console.log(problema); // ✅ "Visible afuera" (¡No deseado!)
```

### 🔄 Scope Anidado (Nested Scope)

Las funciones internas pueden acceder a variables externas, pero NO al revés.

```javascript
function exterior() {
  const x = 10;
  
  function interior() {
    const y = 20;
    console.log(x); // ✅ Puede acceder a x
    console.log(y); // ✅ Puede acceder a y
  }
  
  interior();
  // console.log(y); // ❌ ERROR: y no existe aquí
}

exterior();
```

**Analogía:** Es como cajas rusas. La caja pequeña (interior) puede ver lo que hay en la caja grande (exterior), pero la grande no puede ver dentro de la pequeña.

---

## 📖 3. HOISTING (ELEVACIÓN)

**Hoisting** significa que JavaScript "mueve" las declaraciones al inicio de su scope.

### Hoisting con var

```javascript
console.log(nombre); // undefined (no error, pero extraño)
var nombre = "Ana";
```

**Lo que JavaScript hace internamente:**

```javascript
var nombre;          // Declara al inicio
console.log(nombre); // undefined
nombre = "Ana";      // Asigna después
```

### Hoisting con let y const

```javascript
// console.log(edad); // ❌ ERROR: Cannot access before initialization
let edad = 25;
```

**let y const SÍ se elevan, pero entran en "Temporal Dead Zone"**: No se pueden usar antes de declararlas.

### Hoisting de Funciones

```javascript
saludar(); // ✅ Funciona! (las funciones declaradas se elevan completamente)

function saludar() {
  console.log("Hola");
}
```

**PERO** las funciones expresión NO:

```javascript
// despedir(); // ❌ ERROR: Cannot access before initialization

const despedir = function() {
  console.log("Adiós");
};
```

---

## 💡 ANALOGÍAS PARA RECORDAR

| Concepto | Analogía |
|----------|----------|
| **const** | Una caja fuerte: guardas algo y no lo cambias |
| **let** | Una caja normal: puedes cambiar lo que hay dentro |
| **var** | Una bolsa rota: las cosas se salen y causan problemas |
| **Scope** | Habitaciones de una casa: cada habitación tiene sus propias cosas |
| **Hoisting** | Organizar antes de la fiesta: JavaScript ordena primero, ejecuta después |

---

## ❌ ERRORES COMUNES

### Error 1: Usar var en lugar de let/const

```javascript
// ❌ MAL
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Imprime: 3, 3, 3

// ✅ BIEN
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Imprime: 0, 1, 2
```

### Error 2: Intentar reasignar const

```javascript
// ❌ MAL
const total = 100;
total = 200; // ERROR

// ✅ BIEN
let total = 100;
total = 200;
```

### Error 3: Usar variables antes de declararlas

```javascript
// ❌ MAL
console.log(nombre);
let nombre = "Ana"; // ERROR

// ✅ BIEN
let nombre = "Ana";
console.log(nombre);
```

---

## 🎓 CUÁNDO USAR CADA UNA (GUÍA PRÁCTICA)

```javascript
// CONST - Para valores que no cambiarán
const API_KEY = "abc123";
const MAX_USERS = 100;
const calcularImpuesto = (precio) => precio * 0.16;

// CONST - Para objetos y arrays (la referencia no cambia)
const usuario = { nombre: "Ana" };
const numeros = [1, 2, 3];

// LET - Para contadores y valores que cambian
let contador = 0;
let inputUsuario = "";

// LET - En loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// VAR - ¡NUNCA! (solo en código legacy)
```

---

## 🔍 PARA REFLEXIONAR

Antes de continuar, piensa en estas preguntas:

1. ¿Por qué usar `const` por defecto es una buena práctica?
2. ¿Qué problemas puede causar no entender el scope?
3. ¿Por qué `let` y `const` son mejores que `var`?

---

## ✅ CONCEPTOS CLAVE PARA RECORDAR

- **const**: para valores constantes (usa por defecto)
- **let**: para valores que cambiarán
- **var**: NO usar (obsoleto)
- **Scope**: el área donde una variable es visible
- **Hoisting**: JavaScript mueve declaraciones al inicio
- Las funciones crean su propio scope
- Los bloques `{ }` crean scope con let/const

---

## 🚀 PRÓXIMO PASO

Ahora que entiendes la teoría, es hora de practicar. Continúa con:
- `02-EJEMPLO-RESUELTO.js` - Ver código en acción
- `03-EJERCICIOS-GUIADOS.js` - Práctica asistida
- `04-EJERCICIOS-INDEPENDIENTES.js` - Practica por tu cuenta

**Recuerda**: No avances hasta que estos conceptos estén claros. La base es todo.
