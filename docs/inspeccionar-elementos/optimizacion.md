---
sidebar_position: 12
---

# 🚀 Optimización: Identificar Cuellos de Botella en DevTools

Optimizar una web implica detectar procesos costosos que afectan la carga, el renderizado y la experiencia del usuario. Chrome DevTools proporciona herramientas para localizar estos puntos críticos llamados **cuellos de botella**.

## 🔍 ¿Qué es un cuello de botella?

Un cuello de botella es un proceso lento que limita el rendimiento general. Ejemplos comunes:

- Scripts que bloquean el render
- Imágenes no optimizadas
- Solicitudes lentas o excesivas
- Animaciones pesadas
- Carga excesiva en el main thread

## 🧪 Herramientas para detectar cuellos de botella

### 1. 🧭 Pestaña **Performance**
Graba la actividad de la página y analiza:

- **FPS** bajos (menos de 60fps)
- **Long tasks** (>50ms en el hilo principal)
- **Scripting excesivo**
- **Layout thrashing** (reflujo frecuente)

📌 Consejo: Usa el panel de resumen para ver qué actividad ocupa más CPU.

---

### 2. 📡 Pestaña **Network**
Evalúa:

- Tiempos de carga lentos (Time y Waterfall)
- Recursos pesados
- Cantidad excesiva de peticiones
- Bloqueos por scripts sincrónicos

📌 Consejo: Usa el filtro **JS** y **Doc** para ver archivos críticos.

---

### 3. 📦 Pestaña **Coverage**
Evalúa qué CSS y JS están **sin utilizar**:

1. Abre DevTools > `Ctrl+Shift+P` → **Coverage**
2. Haz clic en "Start Instrumenting Coverage"
3. Navega por tu sitio
4. Verás líneas rojas (código no usado)

---

### 4. 🧱 Lighthouse
Auditoría automática de rendimiento, accesibilidad y más:

1. Abre la pestaña **Lighthouse**
2. Selecciona "Performance"
3. Genera un informe

🔍 Muestra métricas como:
- **First Contentful Paint (FCP)**
- **Largest Contentful Paint (LCP)**
- **Total Blocking Time (TBT)**
- **Cumulative Layout Shift (CLS)**

---

## 🧠 Recomendaciones de Optimización

- Minifica y comprime JS/CSS
- Usa `async`/`defer` en scripts
- Implementa imágenes responsivas (`<picture>`, `srcset`)
- Usa cache y CDN
- Divide código con lazy loading

---

## 📸 Recursos gráficos sugeridos


![Event Listeners](/img/insp.png)
![Event Listeners](/img/waterfall.png)
![Event Listeners](/img/coverage.png)
![Event Listeners](/img/report.png)

## 📚 Enlaces recomendados

- [Web.dev: Performance Fundamentals](https://web.dev/fast/)
- [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/)
- [MDN: Browser performance tools](https://developer.mozilla.org/en-US/docs/Tools#performance)

