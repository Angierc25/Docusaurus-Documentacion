---
sidebar_position: 10
---
# 🧩 Depuración de Event Listeners

En desarrollo web, los **eventos** como clics, envíos de formularios o teclas presionadas son esenciales. Depurar sus listeners (escuchadores) en el navegador te permite detectar errores y comprender la interacción en tiempo real.

## 🕵️‍♂️ Inspeccionar Event Listeners en Chrome DevTools

### 📌 Pasos para acceder a los listeners

1. Abre las herramientas de desarrollador (`F12` o `Ctrl+Shift+I`)
2. Ve a la pestaña **Elements**
3. Selecciona un elemento del DOM con un evento asociado
4. En el panel derecho, expande la sección **Event Listeners**
5. Verás una lista de eventos agrupados por tipo (`click`, `input`, `submit`, etc.)

### 🔍 ¿Qué puedes hacer desde allí?

- Ver qué funciones están asociadas a cada evento
- Hacer clic en el nombre del archivo para ir al código fuente
- Quitar temporalmente un listener (ícono de remover)
- Filtrar por tipo de evento (búsqueda)

## 🛠️ Ejemplo de Event Listener en JavaScript

```javascript
document.getElementById('boton').addEventListener('click', function (e) {
  console.log('Botón clickeado');
});
```

En el inspector, este `click` aparecerá bajo el nodo del botón.

## 🐞 Depuración con `debugger` y puntos de interrupción

Puedes pausar la ejecución al disparar un evento:

1. Ve a la pestaña **Sources**
2. Abre el archivo con el listener
3. Coloca un **breakpoint** haciendo clic en el número de línea
4. Interactúa con el elemento (por ejemplo, haz clic)
5. El depurador se detendrá y podrás inspeccionar variables y el call stack

### Alternativa rápida: Breakpoints automáticos

1. En **Sources > Event Listener Breakpoints**
2. Marca, por ejemplo, `Mouse > click`
3. El código se detendrá cuando ocurra un clic en cualquier parte del documento

## 📸 Imágenes útiles

![Event Listeners](/img/snap-events.png)   - Vista del panel Event Listeners
![Event Listeners](/img/breakpoint-context-menu.png) - Uso de breakpoints en el código fuente
![Event Listeners](/img/event-in-worker.png)  - Breakpoints por tipo de evento

## 📚 Recursos recomendados

- [Chrome DevTools - Inspect Event Listeners](https://developer.chrome.com/docs/devtools/dom/event-listeners/)
- [MDN Web Docs - EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
