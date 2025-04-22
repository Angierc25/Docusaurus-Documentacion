---
sidebar_position: 6
---

# 🎨 Modificar CSS en Tiempo Real con el Inspector de Elementos

## Introducción

El panel de estilos del Inspector de Elementos permite editar reglas CSS directamente en el navegador y ver los cambios al instante, sin necesidad de recargar la página. Esta es una de las funcionalidades más útiles para diseñadores y desarrolladores frontend.

---

## 📌 Cómo acceder al editor de CSS

1. Abre el **Inspector de Elementos** (F12 o Ctrl+Shift+I).
2. Selecciona el elemento que deseas modificar.
3. Dirígete al panel **"Styles"** (normalmente en la parte derecha).

---

## 🛠 Funcionalidades principales

### 1. Edición directa de propiedades

```css
/* Ejemplo de edición en vivo */
.selector {
  color: #ff0000; /* Haz clic para cambiar el valor */
  font-size: 16px; /* Doble clic para modificar */
}
```

**Recomendación de imagen:**

![Edición CSS directa](/img/edicion-css-directa.png)  
Captura mostrando el panel de estilos con propiedades resaltadas.

### 2. Activar/desactivar reglas

Haz clic en la casilla de verificación junto a cada propiedad para activarla o desactivarla temporalmente.

**Recomendación de imagen:**

![Toggle propiedades CSS](/img/toggle-css.png)  
Mostrando propiedades CSS con checkboxes.

### 3. Añadir nuevas reglas

- Haz clic en el símbolo **+** para añadir un nuevo selector.
- Escribe tus propiedades CSS.
- Los cambios se aplicarán inmediatamente.

### 4. Visualización del Box Model

El inspector muestra gráficamente:

- Margen (`margin`)
- Borde (`border`)
- Relleno (`padding`)
- Contenido

**Recomendación de imagen:**

![Box Model visual](/img/box-model.png)  
Diagrama interactivo del box model en Chrome DevTools.

---

## 🎓 Técnicas avanzadas

### 1. Depurar pseudo-clases

```css
button:hover {
  background-color: #4CAF50; /* Inspecciona estados :hover, :active, etc. */
}
```

**Cómo usarlo:**

1. Haz clic derecho en el elemento.
2. Selecciona **"Force state"**.
3. Elige la pseudo-clase a depurar.

**Recomendación de imagen:**

![Pseudo-clases](/img/pseudo-clases.png)  
Menú de estados forzados en Chrome DevTools.

### 2. Experimentar con animaciones

Edita propiedades de animación y transición en tiempo real:

```css
.animated {
  transition: all 0.3s ease-in-out;
}
```

---

## 💡 Consejos profesionales

- **Usa atajos de teclado**:
  - `Tab` para navegar entre propiedades.
  - `Shift + Tab` para retroceder.
  - `Enter` para confirmar cambios.
  
- **Copia estilos**:  
  Haz clic derecho en cualquier regla para copiarla como texto.

- **Historial de cambios**:  
  Chrome guarda un historial de modificaciones durante la sesión.
