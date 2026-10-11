# Clase 8 — Probar, medir y mejorar el MVP con IA

**Desarrollo de Productos · AI-Native Product Development**

## Objetivo de la clase

Observar si una persona puede usar nuestro MVP y obtener el valor que prometemos. Usar evidencia para elegir una mejora, dirigir a la IA para implementarla y volver a medir.

**Pregunta central: ¿el usuario logra resolver la tarea principal con nuestro MVP?**

Venimos de construir una primera versión en la clase 7. Ahora seguimos este ciclo:

**Definir tarea y métricas → probar → registrar → priorizar → mejorar con IA → volver a medir.**

## Qué necesitan para empezar

- El MVP accesible y su archivo `mvp.md` de la clase 7.
- El usuario, problema y valor que buscan ofrecer; pueden recuperar `aprendizaje-y-mvp.md` si necesitan contexto.
- La herramienta de IA con la que ya están trabajando.
- Compañeros de otros equipos o usuarios que puedan probar.
- Un registro simple: una tabla en Markdown o una planilla alcanza.

Si aún no tienen un recorrido funcional, recorten el alcance hasta lograr **una tarea que alguien pueda completar**. La IA los ayuda a destrabarla. No necesitan reiniciar el canvas ni completar todas las funciones imaginadas.

## 1. Reconstruir el recorrido

Completen brevemente:

1. **Nuestro usuario tiene el problema de… cuando…**
   El organizador de partidos de pádel amateur tiene el problema de que se le baja un jugador a último momento cuando ya tiene la cancha reservada y necesita conseguir un reemplazo de nivel parejo para no suspender el partido (en pádel se requieren 4 jugadores sí o sí).
2. **La hipótesis más riesgosa era…**
   Que un organizador preferirá publicar un partido y elegir postulantes con información de perfil en una app antes que resolverlo por su grupo habitual de WhatsApp, y que el perfil aportará confianza suficiente para decidir.
3. **Para probarla hicimos…**
   Construimos un MVP funcional en la Clase 7 con Supabase (`mvp/index.html`) que permite publicar el faltante, recibir postulaciones con perfil visible (nivel, zona, rating, asistencia), seleccionar un reemplazo y registrar qué miró para decidir (`decision_factor`).
4. **Observamos que…**
   Los organizadores completan el flujo con éxito y eligen rápido a partir del perfil (principalmente nivel y zona), pero al llegar a la pantalla final de "Partido resuelto" se quedaban desorientados porque no tenían forma de contactar al jugador seleccionado (no había teléfono ni botón de contacto directo).
5. **Por eso decidimos…**
   Resolver la "última milla" de la coordinación: solicitar el teléfono celular de WhatsApp en el perfil de usuario de forma obligatoria, agregar un botón directo "💬 Contactar por WhatsApp" con mensaje prearmado en la pantalla de resolución, instrumentar el registro de `whatsapp_click = true` en base de datos y construir el panel interno de métricas (`admin/`).
6. **Nuestro MVP permite… y todavía necesitamos comprobar…**
   Permite publicar un faltante, recibir postulaciones, elegir reemplazo con información de perfil y abrir inmediatamente el chat de WhatsApp con el jugador elegido; todavía necesitamos comprobar la tasa de presentismo real (*show-up rate* en cancha) para verificar que el partido efectivamente se juega en la vida real.

## 2. Elegir una tarea principal

Definan una tarea concreta y el resultado que permite considerarla completada.

> Ejemplo ilustrativo: “Llegás a la universidad y querés consultar una zona donde buscar estacionamiento”.

La consigna debe describir el objetivo, sin explicar dónde hacer clic. Antes de probar, acuerden:

- Dónde empieza y cuál es el resultado observable de la tarea.
- Qué información es real, manual o simulada.
- Qué cuenta como ayuda del equipo.
- Cuándo termina el intento: éxito, abandono o un límite acordado.

**Consultar una recomendación y encontrar estacionamiento son resultados diferentes.** La interfaz puede funcionar sin que todavía hayamos probado el valor en el mundo real.

## 3. Definir tres métricas antes de probar

| Métrica | Cómo medirla | Qué decisión informa |
| --- | --- | --- |
| Éxito de la tarea | Participantes que completan / participantes que intentan. | Qué impide completar el recorrido principal. |
| Autonomía | Participantes que completan sin ayuda / participantes que intentan. | Qué instrucciones o interacciones necesitan mejorar. |
| Valor | Una medida vinculada con el problema elegido. | Si el MVP empieza a producir el resultado útil esperado. |

Para cada una definan la fuente, el momento de medición, un criterio exploratorio de éxito y qué harían según el resultado. La IA puede proponer opciones; el equipo debe elegir y justificar.

Ejemplo de criterio, no regla universal: “Esperamos que al menos 4 de 5 personas completen la tarea sin ayuda”. Con muestras pequeñas, informen **4 de 5**, sin generalizar a todos los usuarios.

Cuenten el primer intento por persona y versión; registren reintentos aparte. Incluyan los abandonos y fallas. Si nadie intentó, escriban “no medido”; si falta información, indiquen el dato faltante.

### Elegir una métrica de valor

| Problema | Posible métrica de valor | Qué requiere |
| --- | --- | --- |
| Demora al estacionar | Minutos desde que empieza la búsqueda hasta estacionar. | Prueba en contexto real. Para afirmar ahorro, una referencia comparable. |
| Dificultad para estudiar a tiempo | Sesiones de estudio planificadas que se completan en una semana. | Seguimiento durante esa semana, con criterio de finalización definido. |
| Errores en una tarea administrativa | Cantidad de errores por tarea realizada. | Definición de error y revisión del resultado. |

Si no pueden medir valor en el aula, escriban **“no medido”** y definan una prueba posterior: con quién, dónde, cuándo y cómo recogerán el dato. Un clic puede ser una señal de interés; no demuestra que resolvieron el problema.

Si miden tiempos, definan inicio y fin. Registren por separado los intentos fallidos: que quienes terminaron lo hagan más rápido no alcanza para afirmar mejora si más personas abandonaron.

## 4. Probar sin enseñar el recorrido

Busquen, como orientación práctica, **3 a 5 participantes por ronda**. Si consiguen menos, registren cuántos y reconozcan la limitación.

Distribuyan los roles: una persona facilita, otra observa y otra registra. Pueden combinar roles si el equipo es pequeño.

1. Expliquen el contexto y la tarea.
2. Dejen que la persona intente completarla sin indicaciones paso a paso.
3. Observen dónde duda, se equivoca o abandona.
4. Si la ayudan, anótenlo: ya no cuenta como finalización autónoma.
5. Al terminar, pregunten qué esperaba y qué le resultó confuso.

Identifiquen a las personas como U1, U2, etc. No necesitan registrar nombres u otros datos personales.

**Los compañeros fuera del segmento sirven para detectar dificultades de uso. Esa prueba no demuestra demanda, disposición a pagar o valor para los usuarios reales.**

La IA puede revisar fallas técnicas o simular escenarios, pero esas pruebas no se cuentan como participantes humanos.

### Registro mínimo

| ID | ¿Pertenece al segmento? | Versión | ¿Intentó? | ¿Completó? | ¿Sin ayuda? | Valor y unidad / no medido | Dificultad y ayuda recibida |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **U1** | Sí (Organizador habitual) | Inicial (v1.0) | Sí | Sí | Sí | No logrado (0 clicks) | Al llegar a "Partido resuelto" preguntó: "¿Y ahora cómo le aviso que venga? ¿Le llega una notificación o le escribo yo?". |
| **U2** | Sí (Organizador regular) | Inicial (v1.0) | Sí | Sí | No | No logrado (0 clicks) | Intentó hacer clic en el nombre del reemplazo para abrir un chat; el facilitador tuvo que aclararle que la pantalla final terminaba ahí. |
| **U3** | Sí (Jugador/Organizador) | Inicial (v1.0) | Sí | Sí | Sí | No logrado (0 clicks) | Eligió por nivel y zona (decision_factor: Nivel), pero comentó que faltaba el teléfono para coordinar el club y la seña. |
| **U4** | No (Compañero de clase) | Inicial (v1.0) | Sí | Sí | Sí | No medido (fuera de segmento) | Navegó bien, pero remarcó que la app terminaba sin brindar ningún dato de contacto del jugador seleccionado. |
| **U5** | Sí (Organizador semanal) | Mejorada (v1.1) | Sí | Sí | Sí | Logrado (1 click WhatsApp) | Completó el flujo y al ver el botón verde "💬 Contactar por WhatsApp" lo apretó enseguida: "Ah perfecto, ya me abre el chat con el mensaje listo". |
| **U6** | Sí (Jugador regular) | Mejorada (v1.1) | Sí | Sí | Sí | Logrado (1 click WhatsApp) | Tardó menos de 2 minutos. Presionó WhatsApp inmediatamente para confirmar el contacto. Destacó el mensaje armado. |
| **U7** | Sí (Organizador eventual) | Mejorada (v1.1) | Sí | Sí | Sí | Logrado (1 click WhatsApp) | Seleccionó por cercanía y nivel; clickeó el botón de WhatsApp confirmando el enlace al chat. |
| **U8** | No (Compañero de clase) | Mejorada (v1.1) | Sí | Sí | Sí | Logrado (1 click WhatsApp) | Realizó todo el recorrido sin trabas; comprobó el enlace funcional a WhatsApp. |

## 5. Elegir una mejora con evidencia

Revisen los registros y separen:

- **Hecho:** lo que observaron.
- **Posible causa:** su interpretación, todavía a comprobar.
- **Mejora:** el cambio que proponen.

Prioricen **una dificultad** según cuánto bloquea la tarea o el valor, cuántas veces apareció y el esfuerzo para corregirla. No agreguen funciones sin relación con lo observado.

Si no aparecieron dificultades relevantes, justifiquen mantener la versión y definan una prueba más exigente o en contexto real. No hay que cambiar por cambiar.

## 6. Dirigir la mejora con IA

Usen un pedido como este, completándolo con sus datos reales:

> Nuestro usuario es [usuario] y busca [resultado]. Probamos la versión [versión] con [cantidad y perfil]. Observamos [hechos]. Elegimos trabajar sobre [dificultad] porque [motivo]. Ayudanos a analizar posibles causas y proponé hasta tres cambios pequeños. Antes de modificar, discutamos las alternativas.

Después de elegir:

> Implementá [cambio elegido]. Conservá [lo que ya funciona]. El criterio de aceptación es [resultado observable]. Probá el recorrido principal y un caso de error. Indicá qué verificaste y qué sigue pendiente de prueba con personas.

Conserven la versión inicial o un punto de recuperación. Identifiquen la nueva versión. Si la IA sólo les entrega un prompt o un diseño, todavía deben implementarlo en su herramienta de construcción.

## 7. Volver a probar y comparar

Repitan la misma tarea y las mismas definiciones de métricas, preferentemente con personas nuevas del mismo perfil. Si participan las mismas, aclaren que ya conocen el recorrido y eso puede influir.

| Métrica | Antes: cantidad y resultado | Después: cantidad y resultado | Qué aprendimos y qué limita la comparación |
| --- | --- | --- | --- |
| **Éxito** | 4 de 4 (100%) | 4 de 4 (100%) | El recorrido de selección funciona de manera consistente en ambas versiones. |
| **Autonomía** | 3 de 4 (75%) | 4 de 4 (100%) | En v1.0 hubo dudas al final sobre cómo seguir; en v1.1 el botón de WhatsApp dio un llamado a la acción claro sin ayuda. |
| **Valor** | 0 de 4 (0%) lograron contactar | 4 de 4 (100%) abrieron WhatsApp | El botón de WhatsApp resolvió la última milla de coordinación. *Límite:* El clic en WhatsApp prueba intención y contacto, pero el presentismo en cancha (*show-up rate*) requiere validación post-partido. |

Registren cambios de contexto, perfil, dispositivo o instrucciones. Esta comparación es exploratoria: no demuestra por sí sola que el cambio causó el resultado.

Si no mejoró, vuelvan a revisar las observaciones y elijan otra modificación pequeña. Un resultado negativo no descarta automáticamente el problema ni la solución: buscamos aprender con evidencia barata.

Si no alcanzaron a repetir la prueba, déjenla pendiente. No reemplacen resultados reales por lo que esperan que ocurra.

## Entregable

Guarden en su segundo cerebro **`pruebas-y-mejoras-mvp.md`**, junto con el MVP actualizado. Actualicen `mvp.md` si cambió el acceso o la versión.

El documento debe incluir:

1. Equipo, fecha, usuario, problema y acceso al MVP.
2. Tarea, criterio de finalización y definición de ayuda.
3. Las tres métricas, fuentes, criterios y decisiones que informan.
4. Registro de participantes y observaciones por versión.
5. Dificultad priorizada, justificación y pedido realizado a la IA.
6. Cambio implementado y verificación técnica.
7. Comparación antes/después y sus limitaciones.
8. Próxima incertidumbre, acción más barata para resolverla, responsable y momento.

No hace falta entregar toda la conversación con la IA. Sí debe quedar claro qué decidió el equipo y sobre qué evidencia.

## Para comenzar con la skill

Activen **medir-y-mejorar-mvp** y compartan:

> Vamos con la clase 8. Este es nuestro MVP y nuestro mvp.md. Acompañanos paso a paso para elegir la tarea, definir las tres métricas, probar con personas y mejorar con IA. Ayudanos a tomar las decisiones sin inventar evidencias ni resolver todo de una vez.

## Cierre

Cada equipo debería poder explicar: **“Medimos esto, observamos esto, decidimos este cambio y al volver a probar ocurrió esto”**.

Si falta una prueba o todavía no pueden medir valor, declárenlo y acuerden el siguiente paso. El objetivo es mejorar la calidad de las decisiones, no conseguir números lindos.
