# 📌 GUÍA RÁPIDA: Módulo 1 - Variables, Scope y Hoisting

## 🚦 REGLAS DE ORO

```javascript
// ✅ HACER
const CONSTANTE = "valor fijo";
let variable = "valor que cambia";

// ❌ EVITAR
var antigua = "no usar";
```

---

## 📊 TABLA DE DECISIÓN: ¿Qué usar?

| Situación | Usar | Ejemplo |
|-----------|------|---------|
| Valor que NO cambia | `const` | `const PI = 3.1416;` |
| Función | `const` | `const sumar = (a, b) => a + b;` |
| Objeto/Array | `const` | `const user = { name: "Ana" };` |
| Valor que SÍ cambia | `let` | `let contador = 0;` |
| Variable de loop | `let` | `for (let i = 0; i < 5; i++)` |
| Acumulador | `let` | `let suma = 0;` |
| Código antiguo (legacy) | `var` | ❌ Migrar a let/const |

---

## 🔍 SCOPE: ¿Dónde vive cada variable?

### Scope Global
```javascript
const global = "Visible en TODOS lados";

function miFuncion() {
  console.log(global); // ✅ Accesible
}
```

### Function Scope
```javascript
function miFuncion() {
  const local = "Solo aquí";
}
// console.log(local); // ❌ Error
```

### Block Scope
```javascript
if (true) {
  const bloque = "Solo en este if";
}
// console.log(bloque); // ❌ Error
```

### Scope Anidado
```javascript
function exterior() {
  const x = 1;
  
  function interior() {
    const y = 2;
    console.log(x); // ✅ Ve exterior
    console.log(y); // ✅ Ve propio
  }
  
  // console.log(y); // ❌ No ve interior
}
```

**Regla**: Las funciones internas ven afuera, las externas NO ven adentro.

---

## ⚡ HOISTING: ¿Qué se eleva?

### Funciones Declaradas (se elevan completamente)
```javascript
saludar(); // ✅ Funciona

function saludar() {
  console.log("Hola");
}
```

### Funciones Expresión (NO se elevan)
```javascript
// despedir(); // ❌ Error

const despedir = function() {
  console.log("Adiós");
};
```

### Variables
```javascript
// Con var (se eleva, pero sin valor)
console.log(x); // undefined (no error, pero raro)
var x = 5;

// Con let/const (Temporal Dead Zone)
// console.log(y); // ❌ Error
let y = 10;
```

---

## 🎯 PATRONES COMUNES

### Contador
```javascript
let contador = 0;
contador++;
contador--;
contador += 5;
```

### Acumulador
```javascript
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
```

### Configuración
```javascript
const CONFIG = {
  API_URL: "https://api.example.com",
  TIMEOUT: 5000,
  MAX_RETRIES: 3
};
```

### Objeto Mutable
```javascript
const usuario = { nombre: "Ana" };
usuario.edad = 25;           // ✅ Modificar propiedad
usuario.nombre = "Luis";     // ✅ Modificar propiedad
// usuario = {};             // ❌ No reasignar objeto
```

---

## ❌ ERRORES COMUNES Y SOLUCIONES

### Error 1: Reasignar const
```javascript
// ❌ MAL
const precio = 100;
precio = 200; // Error

// ✅ BIEN
let precio = 100;
precio = 200;
```

### Error 2: Variable fuera de scope
```javascript
// ❌ MAL
if (true) {
  const mensaje = "Hola";
}
console.log(mensaje); // Error

// ✅ BIEN
let mensaje;
if (true) {
  mensaje = "Hola";
}
console.log(mensaje);
```

### Error 3: var en loop + async
```javascript
// ❌ MAL
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Imprime 3, 3, 3
}

// ✅ BIEN
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Imprime 0, 1, 2
}
```

### Error 4: No declarar variable
```javascript
// ❌ MAL
nombre = "Ana"; // Variable global accidental

// ✅ BIEN
const nombre = "Ana";
```

### Error 5: Redeclarar con let/const
```javascript
// ❌ MAL
let edad = 25;
let edad = 30; // Error

// ✅ BIEN
let edad = 25;
edad = 30; // Reasignación
```

---

## 🧠 CHECKLIST MENTAL

Antes de declarar una variable, pregúntate:

```
1. ¿El valor va a cambiar?
   ├─ NO  → usar const
   └─ SÍ  → usar let

2. ¿Es un loop?
   └─ usar let en la variable de iteración

3. ¿Es una configuración/constante?
   └─ usar const en MAYÚSCULAS

4. ¿Es un objeto que se modifica?
   └─ usar const (la referencia no cambia)

5. ¿Estoy tentado a usar var?
   └─ ¡NO! Usar let o const
```

---

## 💡 TIPS PROFESIONALES

1. **Usa `const` por defecto**, cambia a `let` si necesitas reasignar
2. **Nunca uses `var`** en código nuevo
3. **Declara variables en el scope más pequeño posible**
4. **Usa nombres descriptivos**: `userAge` > `x`
5. **Agrupa declaraciones relacionadas**

```javascript
// ✅ BIEN: declaraciones agrupadas
const nombre = "Ana";
const apellido = "García";
const edad = 25;

// ✅ MEJOR: objeto cuando están relacionadas
const usuario = {
  nombre: "Ana",
  apellido: "García",
  edad: 25
};
```

---

## 🔗 RELACIÓN CON REACT Y NODE.JS

### En React:
```javascript
// Estado (cambia)
let [count, setCount] = useState(0);

// Props (no cambia)
const { nombre, edad } = props;

// Handlers (funciones constantes)
const handleClick = () => {...};
```

### En Node.js:
```javascript
// Configuración
const express = require('express');
const PORT = 3000;

// Variables que cambian
let conexionesActivas = 0;
```

---

## 📚 RECURSOS PARA REPASAR

- `01-TEORIA.md` - Explicación completa
- `02-EJEMPLO-RESUELTO.js` - Código comentado
- `03-EJERCICIOS-GUIADOS.js` - Práctica con ayuda
- `04-EJERCICIOS-INDEPENDIENTES.js` - Práctica autónoma
- `05-VERIFICACION.md` - Test de conocimiento

---

## 🎯 PRÓXIMO PASO

Una vez domines este módulo:
→ **Módulo 2: Tipos de Datos y Operadores**

---

_Guarda esta referencia para consultarla cuando tengas dudas._
