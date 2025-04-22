
---
sidebar_position: 5
---

# 🧪 Añadir / Eliminar Atributos desde el Inspector de Google Chrome

Esta guía muestra cómo añadir o eliminar atributos HTML directamente desde las herramientas de desarrollo de Google Chrome.

---

## ✅ Añadir un Atributo

1. Abre la página web en Google Chrome.  
2. Haz clic derecho sobre el elemento al que deseas añadir un atributo y selecciona **"Inspeccionar"**.  
3. En el panel del inspector, ubica la línea HTML del elemento.  
4. Haz doble clic dentro de la etiqueta de apertura (`<etiqueta>`), justo después del nombre del elemento.  
5. Escribe el nuevo atributo. Ejemplo:

```html
<div class="card" data-id="123">
```

💡 **Nota:** Este cambio es temporal y solo existe mientras la página esté abierta. Al recargar, se perderá.

---

## ❌ Eliminar un Atributo

1. Abre la página web en Google Chrome.  
2. Haz clic derecho sobre el elemento con el atributo que deseas eliminar y selecciona **"Inspeccionar"**.  
3. En el panel del inspector, ubica el atributo dentro de la etiqueta HTML.  
4. Haz clic derecho sobre el atributo → selecciona **"Eliminar atributo"**, o:  
   - Haz doble clic sobre el atributo.  
   - Borra el texto manualmente.  
   - Presiona **Enter** para confirmar.

---

## 🛠️ Consejos

- Usa el atributo `style` si deseas aplicar cambios visuales rápidos. Ejemplo:

```html
<p style="color: red;">Texto</p>
```

- Puedes usar `data-*` para añadir datos personalizados:

```html
<div data-user="admin" data-status="activo"></div>
```

- Para cambios permanentes, edita el código fuente del HTML/CSS o JS del proyecto.

---

## 🚫 Limitaciones

- Cambios realizados en el inspector **no afectan el archivo original**.  
- Son útiles solo para pruebas rápidas, depuración o demostraciones visuales.

---
