---
sidebar_position: 8
---

# 📦 Modelo de Caja (Box Model) en el Inspector

El **modelo de caja** es un concepto fundamental en CSS. Cada elemento HTML se representa como una caja rectangular compuesta por varias capas: **contenido**, **padding**, **borde** y **margen**.

## 🧱 Estructura del Box Model

```text
+---------------------------+
|        margin             |
|  +---------------------+  |
|  |     border          |  |
|  |  +---------------+  |  |
|  |  |   padding      |  |  |
|  |  | +-----------+  |  |  |
|  |  | | content   |  |  |  |
|  |  | +-----------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

## 🛠️ Visualización en el Inspector (Chrome DevTools)

### Pasos para inspeccionar el Box Model:

1. Abre las herramientas de desarrollador (`F12` o `Ctrl+Shift+I`)
2. Selecciona un elemento en la pestaña **Elements**
3. En la parte derecha, busca el panel **Styles** y luego **Box Model**

El panel del modelo de caja muestra un diagrama con los siguientes colores:

- **Naranja (margin)** – Espacio externo del elemento
- **Verde (border)** – Borde que rodea el elemento
- **Amarillo (padding)** – Espacio interno antes del contenido
- **Azul (content)** – Área del contenido real

### Ejemplo visual del panel:
 ![Panel de Box Model](/img/DevToolsTabs.webp)  

## 🔍 Uso práctico

- **Detectar espacios no deseados** (márgenes automáticos, padding heredado)
- **Editar valores en tiempo real** (haz clic en cada parte del diagrama y modifica)
- **Visualizar dimensiones exactas** sin necesidad de cálculos manuales

## 💡 Tips útiles

- Puedes hacer hover en cada sección del modelo para ver su efecto en el DOM.
- Útil para solucionar problemas de alineación o desbordamientos (`overflow`).

## 📚 Recursos

- [Documentación oficial de Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Box Model en MDN Web Docs](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model)

