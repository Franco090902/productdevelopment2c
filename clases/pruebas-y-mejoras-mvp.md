# Clase 8 · Pruebas y mejoras del MVP

- **Equipo, fecha, usuario y problema:** 
  - **Equipo:** Franco Dell'Orso Mengon, Lucio, Lucas (productdevelopment2c)
  - **Fecha:** Octubre 2026
  - **Usuario:** Organizador de partidos de pádel amateur con cancha reservada al que se le baja un jugador a último momento.
  - **Problema:** En el pádel (2v2) la ausencia de un solo jugador impide jugar el partido. Conseguir un reemplazo confiable y de nivel parejo mediante grupos de WhatsApp es desgastante, informal e incierto.
- **MVP: acceso y versiones:**
  - **Acceso:** Abrir `mvp/index.html` en el navegador (local). Panel interno de métricas para el equipo en `admin/index.html`. Backend en Supabase.
  - **Versión Inicial (v1.0 — Clase 7):** Flujo de publicación de faltante, visualización de candidatos con perfil básico, selección con pregunta cualitativa (`decision_factor`) y pantalla final de confirmación con métricas agregadas (tiempo hasta 1er candidato y candidatos recibidos).
  - **Versión Mejorada (v1.1 — Clase 8):** Incorporación del número de WhatsApp en la configuración del perfil (`profiles.phone`), botón directo de acción "💬 Contactar por WhatsApp" (`wa.me/${phone}`) en la pantalla de "Partido resuelto", instrumentación del evento `matches.whatsapp_click = true` en base de datos, y panel interno (`admin/`) para auditar en tiempo real partidos resueltos, medianas de tiempo, liquidez, factores de decisión y tasa de contacto por WhatsApp.
- **Tarea, inicio, finalización y condición de cierre:**
  - **Tarea entregada al usuario:** *"Tenés una cancha reservada para este sábado, se te bajó un jugador y necesitás conseguir un reemplazo de nivel compatible para no suspender el partido. Usá A Jugar para resolver el faltante."* (Sin guiar ni indicar dónde hacer clic).
  - **Inicio:** Pantalla principal de la aplicación (`mvp/index.html`), sesión iniciada.
  - **Finalización (criterio observable):** El organizador revisa las postulaciones de su partido, elige al candidato adecuado, responde la pregunta cualitativa sobre su criterio de decisión y activa el contacto con el jugador elegido desde la pantalla final.
  - **Condición de cierre o abandono:** Éxito (pantalla final con contacto iniciado), abandono expreso del participante, o estancamiento de más de 3 minutos sin saber cómo continuar.
- **Qué cuenta como ayuda:** Cualquier indicación verbal o gestual sobre qué botón presionar, explicación de los pasos de la interfaz o asistencia para interpretar la pantalla final. Si el facilitador debe responder *"qué tenés que hacer ahora"*, el intento no cuenta como autónomo.
- **Funcional / manual / simulado:**
  - **Funcional:** Autenticación con Supabase, creación de partidos, registro de postulaciones, guardado de marcas temporales (`published_at`, `created_at`, `selected_at`, `resolved_at`), registro de `decision_factor`, guardado de `whatsapp_click`, y panel administrativo con funciones SQL `SECURITY DEFINER` protegidas por RLS.
  - **Simulado:** Usuarios postulantes precargados (`03_seed_demo.sql`) con estadísticas simuladas de rating y partidos jugados para permitir la prueba inmediata en el aula/taller.
  - **Manual:** Conversación posterior entre organizador y reemplazo en la app externa de WhatsApp una vez abierto el chat.

---

## Plan de medición

| Métrica | Fórmula/unidad | Fuente y momento | Criterio exploratorio | Decisión |
| --- | --- | --- | --- | --- |
| **Éxito de la tarea** | Participantes que completan / Participantes que intentan (%) | Observación en vivo y verificación del registro en Supabase (`matches.status = 'resolved'`) al finalizar la sesión. | Al menos 4 de 5 (≥ 80%) logran resolver el partido en la interfaz. | Si cae por debajo del 80%, rediseñar el flujo principal de navegación y selección. |
| **Autonomía** | Participantes que completan sin ayuda / Participantes que intentan (%) | Registro de facilitación durante el intento (primer intento por participante). | Al menos 3 de 4 (≥ 75%) completan sin requerir ninguna intervención del equipo. | Si se necesita ayuda reiterada, clarificar textos, botones de acción y feedback visual. |
| **Valor (Traspaso y resolución efectiva)** | Participantes que contactan al reemplazo / Participantes que completan la tarea (%) | Clic registrado en BD (`matches.whatsapp_click = true`) y apertura de conversación por WhatsApp al terminar. | Al menos 3 de 4 (≥ 75%) activan el contacto inmediato para cerrar la coordinación del partido. | Si no contactan o no pueden, la app no resuelve el problema en el mundo real; requiere puente directo o chat interno. |

---

## Registro de pruebas

### Ronda 1: Versión Inicial (v1.0 — sin campo ni botón de WhatsApp)

| ID | Perfil/segmento | Versión | Intentó | Completó | Sin ayuda | Valor/unidad o no medido | Dificultad y ayuda |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **U1** | Organizador habitual (juega 2 veces/semana) | v1.0 | Sí | Sí | Sí | No logrado (0 clicks) | Completó el flujo rápido. Al ver la pantalla final de "Partido resuelto" se quedó esperando y preguntó: *"¿Y ahora cómo le aviso que venga? ¿Le llega una notificación o le escribo yo?"*. |
| **U2** | Organizador regular de grupo fijo | v1.0 | Sí | Sí | No | No logrado (0 clicks) | Intentó hacer clic repetidamente sobre el nombre del reemplazo elegido esperando que se abriera un chat o número. El facilitador tuvo que aclararle que la pantalla final terminaba ahí. |
| **U3** | Jugador amateur que suele armar partidos | v1.0 | Sí | Sí | Sí | No logrado (0 clicks) | Escogió candidato por nivel y zona (marcó factor: Nivel). Expresó: *"Está bueno, pero si no tengo el teléfono para coordinar a qué cancha vamos o la seña, tengo que buscarlo por afuera"*. |
| **U4** | Compañero de curso (fuera del segmento de pádel) | v1.0 | Sí | Sí | Sí | No medido (fuera de segmento) | Navegó fluidamente, pero remarcó que la interfaz daba por concluido el proceso sin dar ningún dato de contacto del jugador seleccionado. |

### Ronda 2: Versión Mejorada (v1.1 — con teléfono obligatorio y botón WhatsApp instrumentado)

| ID | Perfil/segmento | Versión | Intentó | Completó | Sin ayuda | Valor/unidad o no medido | Dificultad y ayuda |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **U5** | Organizador semanal con cancha fija | v1.1 | Sí | Sí | Sí | Logrado (1 click WhatsApp registrado) | Al ingresar configuró su teléfono sin dudas. Publicó, evaluó candidatos, eligió y al ver el botón verde *"💬 Contactar por WhatsApp"* lo apretó de inmediato: *"Ah perfecto, ya me abre el chat con el mensaje listo"*. |
| **U6** | Jugador regular que reemplaza organizadores | v1.1 | Sí | Sí | Sí | Logrado (1 click WhatsApp registrado) | Completó en menos de 2 minutos. Clickeó el botón de WhatsApp inmediatamente para verificar la comunicación. Comentó que tener el mensaje precargado ahorra fricción. |
| **U7** | Organizador eventual ante bajas | v1.1 | Sí | Sí | Sí | Logrado (1 click WhatsApp registrado) | Seleccionó por cercanía y nivel. Al finalizar presionó el botón de WhatsApp y confirmó que la derivación al chat cierra el círculo de la coordinación. |
| **U8** | Compañero de curso (fuera del segmento) | v1.1 | Sí | Sí | Sí | Logrado (1 click WhatsApp registrado) | Realizó el camino completo sin trabas; comprobó que la pantalla final orienta la acción final de contacto. |

---

## Aprendizaje e iteración

- **Hechos observados y posibles causas:**
  - *Hecho:* En la versión 1.0, 4 de 4 completaron la selección, pero el 100% de los usuarios del segmento quedaron desconcertados en la pantalla de "Partido resuelto" porque no tenían cómo contactar a la persona elegida.
  - *Posible causa:* Habíamos definido "partido resuelto" desde la lógica de la base de datos (cambio de estado del registro a `resolved`), ignorando la realidad del usuario: un partido de pádel solo se resuelve cuando los dos jugadores quedan comunicados para coordinar club, horario exacto y confirmación de asistencia. Además, el perfil inicial ni siquiera recopilaba el teléfono del usuario.
- **Prioridad elegida y justificación:**
  - *Prioridad:* Resolver la "última milla" de la coordinación: recopilar el número de WhatsApp en el perfil de cada jugador y colocar un llamado a la acción directo de contacto vía WhatsApp en la pantalla de resolución, instrumentando el evento.
  - *Justificación:* Sin este puente, el valor prometido no se entrega en el mundo real. Dejar al usuario varado en una pantalla informativa forzaba al organizador a recurrir nuevamente a métodos informales, anulando la utilidad del producto.
- **Pedido a la IA y decisión del equipo:**
  - *Pedido a la IA:*
    > *"Nuestro usuario es un organizador de pádel amateur que busca resolver un faltante de jugador. Probamos la versión v1.0 con 4 personas y observamos que aunque completan la selección, se quedan trabados en la pantalla final porque no pueden comunicarse con el reemplazo elegido y no tenemos su teléfono. Elegimos resolver la última milla de contacto porque bloquea la entrega de valor real.  
    > Implementá: 1) Requerir obligatoriamente el teléfono de WhatsApp en el setup de perfil (`profiles.phone`) y validarlo al loguear. 2) En la pantalla de 'Partido resuelto', agregar un botón destacado verde '💬 Contactar por WhatsApp' que abra `https://wa.me/{phone}?text=...`. 3) Guardar en Supabase `matches.whatsapp_click = true` al hacer clic. 4) Crear un panel administrativo interno (`admin/`) para consultar estas métricas. Conservá todo el flujo de autenticación, publicación y selección existente."*
  - *Decisión del equipo:* Se decidió no construir un chat interno propietario dentro de la app (sería un sobre-alcance innecesario y costoso para un primer MVP) y en cambio apalancarse en la herramienta que los jugadores ya utilizan cotidianamente (WhatsApp), usándola como canal de ejecución mientras A Jugar resuelve el filtrado y la elección por perfil.
- **Cambio realizado y verificación técnica:**
  - **Frontend (`mvp/app.js` y `mvp/index.html`):**
    - Se agregó el input `setup-phone` en el modal de configuración de perfil.
    - Se incorporó la validación obligatoria en `saveProfileSetup()` y `onUserLoggedIn()` para asegurar que ningún usuario opere sin registrar su número de contacto.
    - Se añadió el botón verde dinámico de WhatsApp en la vista de `showResolvedView()` llamando a la función `contactarPorWhatsapp(matchId, phone)`.
    - La función `contactarPorWhatsapp` actualiza silenciosamente `sb.from('matches').update({ whatsapp_click: true }).eq('id', matchId)` antes de abrir la ventana de `wa.me`.
  - **Base de datos y Panel de Métricas (`mvp/sql/` y `admin/`):**
    - Se crearon las migraciones SQL `04_account_type.sql`, `05_metrics_columns.sql` y `06_get_pitch_metrics.sql`.
    - Se construyó el panel administrativo interno (`admin/index.html`, `admin/admin.js`, `admin/admin.css`) protegido con roles `team`, permitiendo auditar partidos resueltos (North Star), tiempos medianos de resolución, liquidez, retención y clicks de traspaso a WhatsApp con filtro por fechas y exclusión de cuentas demo.
  - **Verificación técnica:** Se comprobó que el flujo no permite avanzar con teléfono en blanco, que la selección actualiza el estado a `resolved` con su `decision_factor`, y que al pulsar el botón de WhatsApp se produce tanto la apertura de la API de WhatsApp como el guardado de `whatsapp_click = true` visible en el panel.

---

## Comparación

| Métrica | Antes: v1.0 (n = 4) | Después: v1.1 (n = 4) | Interpretación y límites |
| --- | --- | --- | --- |
| **Éxito de la tarea** | 4 de 4 (100%) | 4 de 4 (100%) | Ambos recorridos son comprensibles y técnicamente sólidos para completar la selección del candidato. |
| **Autonomía** | 3 de 4 (75%) | 4 de 4 (100%) | En v1.0, 1 participante se desorientó al final por no saber cómo continuar. En v1.1, la presencia del botón de WhatsApp dio un cierre intuitivo y unívoco sin requerir asistencia. |
| **Valor (Traspaso y contacto efectivo)** | 0 de 4 (0%) | 4 de 4 (100% de clics registrados) | El cambio resolvió de forma inmediata el corte del recorrido, permitiendo que el organizador concrete el contacto en menos de 10 segundos tras elegir. *Límite:* El clic en WhatsApp es una fuerte señal de intención y traspaso, pero no garantiza por sí mismo que el jugador asista a la cancha (verificación de valor en cancha pendiente). |

---

## Próximo paso

- **Incertidumbre pendiente:** 
  ¿Cuál es la tasa de presentismo real (*Show-up rate*) de los jugadores confirmados a través de A Jugar? ¿Aparecen ausencias de último momento (*no-shows*) una vez establecido el contacto por WhatsApp?
- **Acción más barata, responsable y momento:**
  - **Acción:** Ejecutar una prueba piloto en contexto real con 5 partidos de fin de semana durante los próximos 7 días. El equipo enviará un mensaje automatizado/manual al organizador 2 horas después del partido preguntando si el reemplazo asistió, registrando el resultado en la columna `matches.outcome` ('played', 'no_show', 'cancelled') ya prevista en la base de datos.
  - **Responsable:** Franco y equipo.
  - **Momento:** Próximo fin de semana (17 y 18 de octubre de 2026).
- **Qué observar y qué decisión tomar según el resultado:**
  - Si el show-up rate es ≥ 80% (al menos 4 de 5 partidos se juegan efectivamente con el reemplazo): Se valida la efectividad del traspaso a WhatsApp y el MVP queda listo para abrirse a más clubes.
  - Si el show-up rate es < 80% (más de 1 jugador no se presenta): Se priorizará para la siguiente iteración una funcionalidad de compromiso previo (ej. confirmación obligatoria 2 horas antes o penalización en el perfil por ausentismo).
