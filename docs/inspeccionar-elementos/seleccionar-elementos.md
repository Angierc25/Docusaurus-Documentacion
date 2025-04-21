---
sidebar_position: 3
---
# 🧭 Cómo seleccionar elementos en el DOM

Seleccionar elementos del DOM (Document Object Model) es uno de los primeros pasos para manipular páginas web dinámicamente con JavaScript. El DOM representa la estructura del HTML como un árbol de nodos, donde cada elemento puede ser accedido y modificado con código.

## 🎯 ¿Por qué es importante?

Seleccionar elementos correctamente permite:

- Cambiar su contenido (`textContent`, `innerHTML`).
- Aplicar estilos dinámicamente.
- Agregar o quitar clases.
- Escuchar eventos (clic, teclado, etc.).
- Manipular atributos y estructuras.

## 🛠️ Métodos principales para seleccionar elementos

### 1. `document.getElementById(id)`

Selecciona un único elemento por su atributo `id`.

```js
const titulo = document.getElementById("main-title");
```

✅ **Ventaja**: Muy rápido.  
⚠️ **Limitación**: Solo sirve para elementos con `id` único.

### 2. `document.getElementsByClassName(className)`

Devuelve una colección de elementos que tienen una clase específica.

```js
const botones = document.getElementsByClassName("btn");
```

✅ Devuelve una colección en vivo (HTMLCollection).  
⚠️ No es un array real; necesitas convertirlo si quieres usar métodos como `.forEach()`.

### 3. `document.getElementsByTagName(tagName)`

Selecciona todos los elementos con un nombre de etiqueta (como `"div"`, `"p"`, `"a"`).

```js
const parrafos = document.getElementsByTagName("p");
```

### 4. `document.querySelector(selector)`

Devuelve el **primer elemento** que coincida con un selector CSS.

```js
const primerBoton = document.querySelector(".btn");
const nav = document.querySelector("nav > ul li:first-child");
```

✅ Muy flexible: acepta cualquier selector CSS.  
⚠️ Solo devuelve el **primer** resultado.

### 5. `document.querySelectorAll(selector)`

Devuelve **todos los elementos** que coincidan con un selector CSS.

```js
const todosLosBotones = document.querySelectorAll(".btn");
```

✅ Devuelve un `NodeList`, que **sí** soporta `.forEach()`.  
✅ Ideal para seleccionar por atributos, pseudoclases, jerarquías, etc.

## 🧪 Ejemplo práctico

Supongamos este HTML:

```html
<button class="btn">Guardar</button>
<button class="btn">Cancelar</button>
```

Y este JS:

```js
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    console.log("Botón presionado:", boton.textContent);
  });
});
```

## 🧠 Buenas prácticas

- Prefiere `querySelector` y `querySelectorAll` por su flexibilidad.
- Asegúrate de que el DOM esté cargado antes de seleccionar (`DOMContentLoaded` o `<script defer>`).
- Usa nombres de clase e ID significativos para facilitar la selección.
- Evita usar selectores demasiado genéricos si no quieres afectar múltiples elementos.

## 📚 Recursos complementarios

- [MDN Web Docs – Document.querySelector](https://developer.mozilla.org/es/docs/Web/API/Document/querySelector)
- [JavaScript.info – DOM Element Selection](https://javascript.info/searching-elements-dom)
