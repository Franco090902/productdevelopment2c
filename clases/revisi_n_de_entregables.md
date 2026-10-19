# Revisión de Entregables y Recorrido del Proyecto

Este documento reúne la revisión del recorrido completo del equipo, el estado de los entregables, las observaciones de privacidad a resolver, los próximos pasos y la reflexión sobre el aprendizaje asistido por IA.

---

## 1. Tabla de revisión de entregables

| Entregable | Estado | Dónde está | Acción pendiente |
| :--- | :--- | :--- | :--- |
| **1. Descubrimiento y entrevistas** | Disponible | `clases/clase-02-descubrimiento.md`: territorio, research, fichas, ICE, problema priorizado, personas, guion y 4 entrevistas | Ninguna obligatoria. |
| **2. Lean Product Canvas** | Disponible | `clases/lean-product-canvas.md`: 8 cajas, pre-mortem y experimento en 2 fases | Registrar los cambios propuestos tras la Ronda 2 (cajas 6 y 8) si ya los confirmaron. La línea base de la Caja 2 sigue “pendiente de medir”. |
| **3. Diseño y registro del experimento** | Disponible | `clases/diseno-experimento.md`, `registro-experimento.md` (Ronda 1), `clase-05-experimento (1)-confirmado.md` (Ronda 2), `formulario-iteracion-3.md`. Instrumento: `experimentominimo/` y `clases/index-v2.html` | Hay un archivo `(1)` y otro `(1)-confirmado`. Dejar indicado cuál es el vigente. |
| **4. Aprendizaje y decisión** | Disponible | `clases/aprendizaje-y-mvp.md`: resultado, aprendizaje, decisión “probar otro camino” y punto de partida del MVP | Su encabezado dice “Borrador”: confirmarlo como versión final. |
| **5. MVP y su descripción** | Disponible | `mvp/mvp.md` más `mvp/` (app, estilos, sql/01–06) y `admin/`. Acceso documentado; funcionamiento no probado | El acceso es solo local. Publicar el MVP con un enlace (como hicieron con la v1 en Netlify) lo haría más fácil de revisar. |
| **6. Pruebas y mejoras del MVP** | Disponible | `clases/pruebas-y-mejoras-mvp.md`: tarea, 3 métricas, 8 participantes (U1–U8) en 2 versiones, cambio v1.0$\rightarrow$v1.1, comparación y próximo paso | La prueba piloto de los días 17 y 18/10 está planteada, pero falta registrar su resultado definitivo. |

* **Avance documental aproximado:** 100 %. Son 6 de 6 puntos.
* **Cobertura:** 6 de los seis bloques revisables, sobre el repositorio completo. (Indica cuánto del recorrido está registrado; no es una nota ni mide la calidad o validación del producto).
* **Qué está documentado:** El recorrido completo, desde el problema, las entrevistas y el canvas hasta dos rondas de experimento, la decisión, un MVP con base de datos, panel interno y una ronda de pruebas con mejora medida. Además hay material extra en `docs/metricas.md`, con las definiciones del panel.

---

## 2. Observaciones de privacidad

Dado que el repositorio es público, se recomienda resolver los siguientes puntos antes de la entrega:
* **Nombres completos de participantes:** En `clases/registro-experimento.md` y en los dos archivos `clase-05-experimento (1)...md`. Reemplazarlos por `R1–R9` o `Participante 1`, `2`, etc.
* **Emails y contraseña de cuentas demo:** En `mvp/mvp.md`, `mvp/index.html` (pista visible en el login) y `mvp/sql/03_seed_demo.sql`. Cambiar la contraseña o deshabilitar esas cuentas en Supabase. Borrarla del archivo actual no elimina la exposición previa.
* **Emails de cuentas del equipo (team):** En `mvp/sql/04_account_type.sql` y `admin/index.html`. Considerar si es adecuado que sean públicos, ya que habilitan el acceso al panel.
* **Números tipo WhatsApp:** En `mvp/app.js`, `mvp/index.html` y los `index-v2.html`. Verificar que ninguno sea real.
* **Clave de Supabase:** En `supabase-client.js` y `admin/admin.js`. Es la clave `anon`, que es pública por diseño; solo es segura si las políticas RLS (`02_rls.sql`) están activas. No se encontraron claves `service_role`, pero se aconseja verificar la seguridad general.

---

## 3. Acciones prioritarias para el ensayo y la entrega

1. Anonimizar los nombres de participantes y cambiar o desactivar las credenciales demo.
2. Registrar el resultado de la prueba piloto del 17–18/10 en `pruebas-y-mejoras-mvp.md`. Si no se realizó, indicar la nueva fecha programada.
3. Publicar el MVP con un enlace accesible y marcar formalmente cuál es el archivo vigente de la Ronda 2.

---

## 4. Cómo aprendimos con IA (Reflexión del equipo)

* **¿En qué nos ayudó la IA a avanzar más rápido?**
  Aceleró significativamente la agrupación y síntesis de los problemas identificados ($A+C+D$), la comparación estructurada entre experimentos, la construcción rápida del prototipo y el MVP, y el diseño del panel de métricas inicial.
* **¿Qué tuvimos que cuestionar, corregir o decidir nosotros?**
  Tuvimos que frenar una lectura excesivamente optimista de los resultados de la Ronda 1, decidir descartar la construcción de un chat interno complejo para priorizar WhatsApp como canal directo, y redefinir con precisión qué cuenta realmente como un partido “resuelto”.
* **¿Qué aprendimos al probar lo que construimos?**
  Aprendimos que un partido marcado como “resuelto” en la base de datos no sirve de nada si el usuario final no cuenta con una vía directa y fluida para contactar al reemplazo. En la versión `v1.0` ningún usuario contactó al reemplazo de forma autónoma, mientras que en la `v1.1`, al incorporar el botón directo de WhatsApp, el 100 % ($4$ de $4$ participantes) lo hizo con éxito.

---
*Documento preparado para el seguimiento interno y la preparación del cierre del proyecto.*