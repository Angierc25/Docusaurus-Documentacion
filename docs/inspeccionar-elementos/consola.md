---
sidebar_position: 9
---


# 💻 Consola de Desarrollo

## 📜 Métodos Básicos

### 1. `console.log()`
Registra mensajes o variables:
```javascript
console.log('Mensaje simple'); 
console.log('Usuario:', {nombre: 'Ana', edad: 28});
```
**Recomendación de imagen:**  
`console-log-output.png` - Muestra salida con diferentes tipos de datos.

### 2. `console.warn()` y `console.error()`
```javascript
console.warn('Advertencia: API lenta');
console.error('Error: Credenciales inválidas');
```
**Niveles de log:**  
*Diferencia visual entre mensajes (amarillo/rojo)*

## 🔍 Métodos Avanzados

### 1. `console.table()`
Visualiza datos tabulares:
```javascript
const usuarios = [
  { id: 1, nombre: 'Carlos' },
  { id: 2, nombre: 'María' }
];
console.table(usuarios);
```
**Recomendación de imagen:**  
`console-table.png` - Muestra datos en formato de tabla.

### 2. `console.group()`
Agrupa mensajes relacionados:
```javascript
console.group('Proceso de login');
console.log('Iniciando...');
console.log('Validando credenciales');
console.groupEnd();
```

## 🐛 Depuración con `debugger`
Inserta la palabra clave en tu código:
```javascript
function calcularTotal() {
  debugger; 
  return precio * cantidad;
}
```
Abre DevTools (F12) antes de ejecutar

**Recomendación de imagen:**  
`debugger-in-action.gif` - GIF mostrando el flujo de pausa e inspección.

## 📊 Rendimiento con `console.time()`
Mide duración de operaciones:
```javascript
console.time('API Call');
await fetch('https://api.example.com/data');
console.timeEnd('API Call');
```

## 🛠 Caso Práctico: Debuggear un Evento
```javascript
document.getElementById('btn').addEventListener('click', (e) => {
  console.log('Evento:', e);
  debugger;
 
});
```

## 📌 Buenas Prácticas
- Filtra logs usando los niveles (Verbose, Info, Warnings, Errors)
- Limpia la consola con `console.clear()` o Ctrl+L

### Sintaxis ES6:
```javascript
console.log(`Usuario ${nombre} conectado a las ${new Date()}`);
```

## 🖼️ Galería Recomendada
- `console-panel-overview.webp` - Vista general del panel  
- `console-filtering.webp` - Filtrado por tipo de mensaje  
- `debugger-breakpoint.gif` - Uso del debugger paso a paso
