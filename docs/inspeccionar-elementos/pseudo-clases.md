---
sidebar_position: 7
---

# 🎯 Depuración de Pseudo-clases CSS

## 🌈 Estados Disponibles
El Inspector de Elementos permite simular estos estados interactivos:

| Pseudo-clase     | Uso típico                  | Icono representativo |
|------------------|-----------------------------|----------------------|
| `:hover`         | Efectos al pasar el ratón   | 🖱️                   |
| `:active`        | Elemento siendo clickeado   | ✋                   |
| `:focus`         | Campos de formulario        | ⌨️                   |
| `:focus-within`  | Contenedor con foco         | 🧿                   |
| `:visited`       | Enlaces visitados           | 🔗                   |

## 🛠️ Método de Forzado
1. Abre el Inspector (`F12`/`Ctrl+Shift+I`)
2. Selecciona el elemento objetivo
3. Haz clic derecho → **Force state**
4. Elige el estado a simular

![Forzar estados](/img/force-states-menu.webp)  
*Menú contextual en Chrome DevTools*

## 🔍 Casos Prácticos

### 1. Depurando un botón hover
```css
.btn {
  background: #3498db;
  transition: all 0.3s;
}

.btn:hover {
  background: #2980b9; /* Solo visible al pasar el ratón */
  transform: scale(1.05);
}
```
**Pasos:**
- Forzar estado `:hover`
- Inspeccionar cambios en el panel Styles
- Ajustar valores en tiempo real

### 2. Validando estados de formulario
```css
input:focus {
  border-color: #2ecc71;
  box-shadow: 0 0 0 2px rgba(46, 204, 113, 0.2);
}
```
**Debugging:**
- Forzar `:focus` para probar estilos sin interactuar físicamente

## ⚠️ Limitaciones

**Estados dinámicos:**  
`:checked` (checkboxes) requiere cambio manual en el DOM

**Pseudoelementos:**  
`::before` / `::after` necesitan edición directa en el panel Styles

**Especificidad CSS:**  
Los estilos forzados no modifican la jerarquía original

## 📸 Galería de Referencia
- `hover-debug.gif` - Transición hover en acción  
- `focus-states.webp` - Comparación `:focus` vs normal  
- `active-state.webp` - Efecto de click preservado
