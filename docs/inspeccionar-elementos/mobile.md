---
sidebar_position: 14
---

# 📱 Modo Dispositivo Móvil (Responsive) en Google Chrome DevTools

El **Modo Dispositivo Móvil**, también conocido como *Device Mode*, permite simular cómo se ve y se comporta un sitio web en distintos dispositivos móviles y tamaños de pantalla directamente desde las Herramientas de Desarrollador de Google Chrome.

---

## 🎯 Objetivo

Este modo permite:

- Previsualizar sitios web como si estuvieran en un teléfono o tableta.
- Probar media queries CSS.
- Simular la red móvil (3G/4G) y la latencia.
- Emular eventos táctiles y sensores de hardware.
- Ajustar el comportamiento del viewport y el user-agent.

---

## 🧭 Cómo Activarlo

### Atajo de Teclado:

- **Windows/Linux:** `Ctrl + Shift + M`
- **macOS:** `Cmd + Shift + M`

### Manualmente:

1. Abre DevTools (`F12` o `Ctrl + Shift + I` / `Cmd + Option + I`).
2. Haz clic en el ícono del **dispositivo móvil** (📱) en la esquina superior izquierda de DevTools.
3. Se activará el Modo Dispositivo.

---

## ⚙️ Funciones del Modo Dispositivo

### 1. 📏 Tamaños de Pantalla

Puedes elegir entre una lista predefinida de dispositivos (iPhone, Galaxy, Pixel, iPad, etc.) o ingresar dimensiones personalizadas.

### 2. 🔍 Zoom y Resolución

- Simulación del pixel ratio (`devicePixelRatio`) del dispositivo.
- Opción para escalar la vista para pantallas grandes.

### 3. 🌐 Agente de Usuario (User-Agent)

Cambia automáticamente para coincidir con el dispositivo seleccionado, pero también puede personalizarse desde las pestañas de *Network conditions* o *Sensors*.

### 4. 🌍 Red y Latencia

Desde la pestaña **Network**, puedes:

- Emular redes lentas como 3G.
- Introducir condiciones de latencia personalizada.

### 5. ✋ Eventos Táctiles

Se simulan los eventos de `touchstart`, `touchmove`, etc., para probar interfaces móviles.

### 6. 🎛 Sensor de Dispositivos

En la pestaña **Sensors**, puedes:

- Simular geolocalización.
- Cambiar orientación (portrait/landscape).
- Emular acelerómetro y giroscopio.

---

## 📌 Casos de Uso Comunes

- Verificar diseño adaptable en distintos breakpoints.
- Probar accesibilidad y escalabilidad de UI móvil.
- Validar comportamiento de formularios táctiles.
- Depurar errores que solo ocurren en móviles.

---

## 🛠 Recomendaciones

- Usa `Ctrl + Shift + M` frecuentemente al diseñar UI responsiva.
- Combinado con Lighthouse (`Audits`), puedes evaluar performance móvil.
- Prueba con distintos agentes de usuario para detectar errores de compatibilidad.

---

## 🔗 Recursos Oficiales

- [Modo dispositivo en Chrome DevTools (documentación oficial)](https://developer.chrome.com/docs/devtools/device-mode/)
- [Simulación de dispositivos móviles en DevTools (video)](https://www.youtube.com/watch?v=TP4Y4rYz9n4)
