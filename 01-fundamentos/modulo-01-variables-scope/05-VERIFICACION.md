# ✅ MÓDULO 1: Verificación de Comprensión

## 🎯 PROPÓSITO

Este cuestionario evalúa tu comprensión real del Módulo 1. No es memorización, es aplicación práctica.

---

## 📝 INSTRUCCIONES

1. Responde cada pregunta sin mirar los materiales
2. Escribe tus respuestas aquí mismo (edita este archivo)
3. Sé honesto contigo mismo
4. Solicita revisión cuando termines

---

## PARTE 1: PREGUNTAS CONCEPTUALES

### Pregunta 1
**¿Cuál es la diferencia principal entre `const` y `let`?**

TU RESPUESTA:




---

### Pregunta 2
**¿Por qué se recomienda NO usar `var` en JavaScript moderno?**

TU RESPUESTA:




---

### Pregunta 3
**¿Qué es el "scope" y por qué es importante?**

TU RESPUESTA:




---

### Pregunta 4
**¿Puedes modificar las propiedades de un objeto declarado con `const`? ¿Por qué?**

TU RESPUESTA:




---

### Pregunta 5
**¿Qué es hoisting y cómo afecta a las variables declaradas con `let` y `const`?**

TU RESPUESTA:




---

## PARTE 2: ANÁLISIS DE CÓDIGO

### Código 1
```javascript
const nombre = "Ana";
nombre = "Luis";
console.log(nombre);
```

**¿Qué pasa al ejecutar este código? ¿Por qué?**

TU RESPUESTA:




---

### Código 2
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

**¿Qué imprime este código? ¿Por qué?**

TU RESPUESTA:




---

### Código 3
```javascript
function ejemplo() {
  if (true) {
    let x = 10;
  }
  console.log(x);
}
ejemplo();
```

**¿Qué pasa al ejecutar este código? ¿Por qué?**

TU RESPUESTA:




---

### Código 4
```javascript
console.log(saludar());

function saludar() {
  return "Hola";
}
```

**¿Este código funciona? ¿Por qué?**

TU RESPUESTA:




---

### Código 5
```javascript
const persona = { nombre: "Carlos" };
persona.edad = 30;
persona = { nombre: "Ana" };
```

**¿Qué línea(s) causan error? ¿Por qué?**

TU RESPUESTA:




---

## PARTE 3: CORRECCIÓN DE ERRORES

### Ejercicio 1
**El siguiente código tiene un error. Identifícalo y corrígelo:**

```javascript
const total = 100;
if (total > 50) {
  const descuento = 0.1;
}
console.log("Descuento:", descuento);
```

**¿Cuál es el error?**

TU RESPUESTA:


**Código correcto:**

```javascript
// TU CÓDIGO AQUÍ
```

---

### Ejercicio 2
**Este código no produce el resultado esperado. ¿Por qué?**

```javascript
var numeros = [1, 2, 3];
for (var i = 0; i < numeros.length; i++) {
  setTimeout(function() {
    console.log(numeros[i]);
  }, 100);
}
// Esperado: 1, 2, 3
// Real: undefined, undefined, undefined
```

**¿Cuál es el problema?**

TU RESPUESTA:


**Código correcto:**

```javascript
// TU CÓDIGO AQUÍ
```

---

## PARTE 4: APLICACIÓN PRÁCTICA

### Ejercicio Práctico
**Escribe una función que gestione el saldo de una cuenta bancaria:**

REQUISITOS:
- Debe tener un saldo inicial de 1000
- El saldo NO debe ser accesible directamente desde fuera
- Debe tener métodos para: depositar, retirar, consultarSaldo
- Al retirar, debe verificar que hay fondos suficientes

```javascript
// TU CÓDIGO AQUÍ








```

---

## 📊 AUTOEVALUACIÓN

Califica tu comprensión (1-5):

- [ ] **Entiendo cuándo usar const vs let**: ___/5
- [ ] **Comprendo el scope y sus reglas**: ___/5
- [ ] **Puedo identificar errores de scope**: ___/5
- [ ] **Entiendo el hoisting**: ___/5
- [ ] **Puedo aplicar estos conceptos en código real**: ___/5

**TOTAL**: ___/25

---

## 🎯 RESULTADOS

**20-25 puntos**: ¡Excelente! Listo para el siguiente módulo
**15-19 puntos**: Bien, pero repasa algunos conceptos
**10-14 puntos**: Necesitas más práctica antes de avanzar
**0-9 puntos**: Revisa la teoría y ejemplos nuevamente

---

## 📝 NOTAS PERSONALES

Escribe aquí lo que más te costó entender o lo que quieres recordar:








---

**Cuando termines, solicita revisión de tus respuestas.**
