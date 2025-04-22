---
sidebar_position: 11
---
# 📊 Análisis de Rendimiento y Red en DevTools

Las pestañas **Performance** y **Network** de las herramientas del desarrollador de Chrome son esenciales para identificar cuellos de botella en el rendimiento, analizar tiempos de carga, solicitudes de red y comportamiento del frontend.

## 🚦 Pestaña Network: Análisis de tráfico de red

### 📌 ¿Para qué sirve?
Permite observar todas las solicitudes HTTP realizadas por la página: archivos HTML, CSS, JS, imágenes, fuentes, llamadas API, etc.

### 🛠️ Pasos básicos de uso:

1. Abre DevTools (`F12` o `Ctrl+Shift+I`)
2. Ve a la pestaña **Network**
3. Recarga la página para capturar desde cero
4. Filtra por tipo de recurso: `XHR`, `JS`, `Doc`, `Img`, etc.
5. Haz clic sobre una solicitud para ver detalles como:
   - Headers
   - Payload (datos enviados)
   - Response (respuesta del servidor)
   - Timing (duraciones)

### 📉 Métricas clave

- **Status Code**: código de respuesta HTTP (200, 404, 500...)
- **Time**: duración de la solicitud
- **Size**: tamaño de los recursos
- **Waterfall**: diagrama visual de tiempos de carga secuenciales

### 🧪 Casos prácticos

- Verificar si una API responde correctamente
- Detectar recursos que bloquean la carga
- Analizar cuellos de botella en el primer render

## ⚡ Pestaña Performance: Medición de tiempos y FPS

### 📌 ¿Para qué sirve?
Graba y analiza todo el ciclo de vida del renderizado de la página: ejecución de scripts, repaints, layout, interacciones, etc.

### 🛠️ Cómo usar:

1. Abre la pestaña **Performance**
2. Haz clic en el botón **Record** (círculo rojo)
3. Realiza las acciones a analizar (scroll, clics, carga...)
4. Detén la grabación
5. Inspecciona los resultados

### 🔍 ¿Qué puedes ver?

- **Frames por segundo (FPS)**
- **CPU Usage**: carga de procesamiento
- **Call Stack**: qué funciones se ejecutaron y cuándo
- **Paint/Layout**: operaciones gráficas costosas
- **Idle**: tiempos en que no ocurre actividad

### 🧠 Consejos de análisis

- Busca zonas con picos de CPU: ¿algún JS pesado?
- Revisa **long tasks** (>50ms): ralentizan la interacción
- Evalúa si hay múltiples repaints o layouts innecesarios

## 📸 Imágenes sugeridas

![Event Listeners](/img/enable-3g.png)   - Vista general del panel Network
![Event Listeners](/img/enable-3g.png) - Detalles de una solicitud
![Event Listeners](/img/enable-3g.png) - Resultado de grabación de rendimiento

## 📚 Recursos recomendados

- [Chrome DevTools - Network](https://developer.chrome.com/docs/devtools/network/)
- [Chrome DevTools - Performance](https://developer.chrome.com/docs/devtools/evaluate-performance/)
- [MDN - Monitorizando el rendimiento de red](https://developer.mozilla.org/es/docs/Tools/Network_Monitor)