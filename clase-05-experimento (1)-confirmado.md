# Clase 5 — Experimento funcional: Ronda 2 — A Jugar (Pádel Amateur)

> **Estado:** ronda cerrada. Datos finales: 9 respuestas (17/09 a 21/09/2026, 19:22), verificadas contra `Prototipo_de_padel_Bueno.csv`.
> **Clasificación del resultado:** confirmada por el equipo en la sección 9, con ajuste: la dimensión de valor del perfil queda **inconclusa por esta prueba**, no "no respaldada".
> Este archivo no reemplaza a `registro-experimento.md` (Clase 4, Ronda 1), que se conserva sin cambios. La Ronda 2 es la **Iteración 2 de la Fase 1** del experimento mínimo del Canvas (hipótesis de Valor).
> Convención: lo marcado como **Propuesta de la IA** no fue decidido por el equipo.
> Privacidad: los participantes se identifican como R1–R9 (orden del CSV) y no se transcriben teléfonos. El CSV original (`Prototipo_de_padel.csv`) contiene datos personales: guardarlo como evidencia complementaria sin publicarlo.

---

## 1. Punto de partida (Paso 1 — síntesis confirmada por el equipo)

| Elemento | Estado |
|---|---|
| Problema | Dificultad para completar el cuarteto cuando no se resuelve dentro del círculo directo (A+C+D fusionados). Validado con 4 entrevistas reales + research secundario. ICE ≈ 5 (Confidence 7). |
| Usuarios | Organizador de grupo fijo (Matías) y jugador/a sin grupo consolidado (Valentina). |
| Solución en exploración | Alternativa A: publicar partido → postularse → aceptar/rechazar, con perfil (nivel, historial, calificaciones, foto). |
| Ronda 1 (Clase 4) | Prototipo v1, n=3 válidas. Clasificación: **inconclusa, con señal favorable**. Hallazgos: el % de asistencia y el nivel autodeclarado generan dudas; piden foto y señal de actitud. Debilidades: muestra chica, formulario autoadministrado, confianza preguntada de forma directa. |
| Instrumento ajustado | `index-v2.html`: avatar/foto placeholder, asistencia como dato secundario, estado vacío con "Quitar filtros". |
| Hipótesis sin probar | Comportamiento (prioridad máxima en la Caja 7). |
| Decisión previa | Reforzar Valor con más muestra antes de invertir en la Fase 2 (uso real). |

## 2. Pregunta de aprendizaje (Paso 2)

**Alternativas consideradas**

| Opción | Pregunta | Resultado |
|---|---|---|
| A — Reforzar Valor | ¿El valor percibido del perfil se sostiene con una muestra más grande y variada? | **Elegida por el equipo** |
| B — Saltar a Comportamiento | ¿Usan la app en lugar de WhatsApp ante una necesidad real? | Descartada por ahora: requiere una Fase 2 de 3–4 semanas y depende de confirmar antes el Valor |

**Pregunta de aprendizaje:** ¿el valor percibido del perfil (con foto y con la asistencia como dato secundario) se sostiene con una muestra más grande y diversa, y la gente lo menciona **espontáneamente** antes de que se le pregunte de forma directa?

## 3. Experimentos comparados (Paso 3)

| | A — Repetir v2, ampliar difusión | B — Sesiones moderadas en vivo | C — Híbrido |
|---|---|---|---|
| Funcionamiento | Mismo formulario v2 + reenvío en cadena y grupos de pádel ajenos al equipo | 4–6 videollamadas con observación en vivo | Formulario reordenado (pregunta abierta antes de la de confianza) + difusión ampliada |
| Dato producido | Más respuestas, mismo formato | Fricciones y menciones observadas en el momento | Separa lo espontáneo de lo inducido |
| Costo | Bajo | Alto | Bajo |
| Limitación principal | Sigue autoadministrado | n chico, difícil conseguir participantes | La separación espontáneo/inducido es más débil que en observación directa |

**Decisión del equipo:** C + difusión ampliada de A, **sin B** (las sesiones en vivo serían difíciles de conseguir). El formulario de la Ronda 1 no se borra ni se edita: la Ronda 2 se registra como nueva iteración.

**Comportamiento (señal complementaria):** se descartó el concierge manual por WhatsApp (depende de que alguien tenga una necesidad real en la semana y de una capacidad operativa que el equipo no tiene). Se adoptó una **lista de espera** al final del formulario como fake door de compromiso a futuro. El equipo agregó además una interpretación propia (no confirmada): el freno podría ser la falta de hábito de usar apps para resolver esto, no un rechazo.

## 4. Contrato experimental (Paso 4)

| Campo | Definición |
|---|---|
| Hipótesis | (sin cambios) Ver un perfil con nivel, historial y foto ayuda al organizador a elegir un reemplazo más confiable y de nivel compatible que preguntando por WhatsApp. |
| Aprendizaje | Si el valor del perfil se sostiene con más muestra y si se menciona espontáneamente. |
| Participantes | Jugadores de pádel fuera del círculo directo del equipo (reenvío en cadena + grupos ajenos). |
| Acción observable | Completar la tarea en `index-v2.html` (publicar o postularse) y responder el formulario reordenado. |
| Métrica | % que completa sin ayuda · menciones espontáneas de confianza vs. inducidas · fricciones nuevas. |
| Criterio de éxito | La mayoría completa sin ayuda **y** menciona espontáneamente algún elemento del perfil como generador de confianza, sin que se le sugiera. |
| Criterio de fracaso | La mayoría se traba, dice preferir WhatsApp, o solo menciona confianza cuando se le pregunta directo (nunca espontáneo). |
| Duración | Ajustada por el equipo: **1 semana**. |
| Meta de muestra | Ajustada por el equipo: **~8 respuestas válidas** (el equipo anticipó que sería difícil llegar). |
| Limitaciones | Autoadministrado; el snowball puede seguir sesgado al círculo del equipo. |

El criterio no fue modificado después de ver los resultados.

## 5. Alcance mínimo (Paso 5)

| Categoría | Contenido |
|---|---|
| Imprescindible | `index-v2.html` sin cambios; formulario con preguntas reordenadas; mensaje de difusión con pedido de reenvío. |
| Simulado | Partidos, jugadores, historial, calificaciones y % de asistencia (generados por el prototipo). Foto = avatar generado. Video = placeholder. Sin backend, cuentas, pagos ni notificaciones. |
| Fuera de alcance | Landing separada, incentivos, segmentación demográfica, mejoras al prototipo. |

## 6. Instrumento (Paso 6) y piloto (Paso 7)

- **Prototipo:** `index-v2.html` (datos simulados; quien lo prueba actúa como "Valentina").
- **Formulario efectivamente desplegado** (según las columnas del CSV):
  1. Nombre y apellido
  2. ¿Jugás pádel de forma regular actualmente? *(filtro)*
  3. Elegí una consigna (publicar / postularte)
  4. Pregunta abierta: qué te resultó fácil, si te trabaste, qué pensaste al ver la info de los otros jugadores
  5. Qué mirarías primero para aceptar o postularte con alguien que no conocés
  6. Qué del perfil te generó más confianza *(pregunta directa)*
  7. Si se diferencia de cómo organizás partidos hoy
  8. Lista de espera (nombre y WhatsApp)
- **Desvíos respecto al diseño:**
  - La pregunta de reenvío ("¿conocés a 1 o 2 personas que jueguen pádel?") **no figura** en el formulario desplegado.
  - No hay pregunta sobre cómo llegó cada persona al formulario: no se puede verificar cuántas respuestas vienen del círculo del equipo y cuántas del reenvío.
  - La pregunta abierta menciona "la info de los otros jugadores", lo que orienta la atención hacia el perfil: la medición de lo espontáneo es, si algo, generosa.
- **Piloto (Paso 7):** omitido por decisión del equipo; el prototipo fue probado por un integrante y un amigo.

## 7. Ejecución y registro (Paso 8)

**Contexto:** respuestas entre el 17/09/2026 (18:54) y el 21/09/2026 (19:22). Autoadministrado. Ventana de una semana cerrada el 24/09 (ver 7.4).

### 7.1 Participantes

| # | Marca temporal | ¿Juega regular? | Consigna | Estado |
|---|---|---|---|---|
| R1 | 17/09 18:54 | Sí | Publicar | Válida (sin nombre) |
| R2 | 20/09 19:39 | Sí | Postularse | Válida, **con reserva de calidad** (respuestas vagas; misma respuesta a dos preguntas distintas) |
| R3 | 20/09 20:36 | **No** | Postularse | **Fuera del perfil objetivo** (registrada, no cuenta en las métricas) |
| R4 | 21/09 14:37 | Sí | Publicar | Válida (posible vínculo con R9: mismo apellido, a verificar) |
| R5 | 21/09 15:47 | Sí | Publicar | Válida |
| R6 | 21/09 18:20 | Sí | Postularse | Válida |
| R7 | 21/09 18:25 | Sí | Postularse | Válida |
| R8 | 21/09 18:31 | **No** | Publicar | **Fuera del perfil objetivo** (registrada, no cuenta en las métricas) |
| R9 | 21/09 19:22 | Sí | Postularse | Válida (posible vínculo con R4) |

**Muestra válida: n = 7** (meta ~8). Fuera de perfil: 2.

### 7.2 Respuestas textuales (sin interpretar)

| # | Abierta: fácil / trabas / info de otros | Qué mirarías primero | Qué generó más confianza | ¿Se diferencia de hoy? | Lista de espera |
|---|---|---|---|---|---|
| R1 | "Es muy intuitiva y fácil de usar." | "Su categoría, y el lugar y horario de partido." | "Su asistencia, cantidad de partidos y foto de perfil" | "Si, se diferencia porque en caso de no encontrar a alguien mi partido se suspende. Con esta app, la probabilidad de jugar el partido de todos modos es más alta. Además, elimina el hecho de tener que estar pendiente de mandar mensajes." | En blanco |
| R2 | "Todo muy bueno 😃" | "Las canchas" | "Las canchas" | "No" | "No" |
| R3 *(fuera de perfil)* | "E n lavarte q dice proba esto. Aparecieron nombres. No entendía q era..ahi me trabé" | "No la conozco pero la vi en algu momento o nunca me la presentaron ni tampoco nunca ala vi. No se entiende bien" | "Foto" | "No tengo idea no uso aplicaciones de paddlel" | Sí, con nombre, sin teléfono |
| R4 | "No" | "El nivel" | "Foto de perfil" | "Eficiencia" | "Si" (sin dato de contacto) |
| R5 | "No, muy claro todo" | "si están cerca" | "lo que más confianza me genera son las calificaciones" | "se diferencia en que siempre juego con las mismas personas y no suelo buscar gente de otros lugarws" | Sí, con nombre y teléfono |
| R6 | "Si muy facil postularme al partido. No me trabe en ningun momento, muy facil de acceder. Pense en que nivel de jugadores habia en el partido para ver si eran de mi nivel y postularme." | "Su Nivel de juego y ubicacion para ver si me queda comodo el lugar del partido" | "Calificaciones, ya que si es puntual y buena onda tiene buen puntaje y eso esta bueno saber." | "Si, conoces gente nueva a travez de un deporte divertido." | "No" |
| R7 | "No la verdad que es intuitiva la pagina, cambiaria los colores de la interfaz para que sean claros. Con todo oscuro cuesta leer a veces." | "Primero que sea una persona que juegue bien asi puedo aprender nuevas tecnicas, no llego a un nivel profesional pero me lo tomo mas amateur." | "La foto. Me hace ver rapido quien va a jugar conmigo, es mejor ver una foto que solo texto en whatsapp genera mas confianza." | "Si porque estoy en un grupo de jugadores pero no nos conocemos todos, hay gente que nunca habla." | "Dale" (sin dato de contacto) |
| R8 *(fuera de perfil)* | "Es sencillo e intuitivo el funcionamiento. Estaría bueno que haya algún comprobante sobre el nivel de la persona." | "El lugar y el nivel. Edad puede ser también" | "El historial y video futuro estarían buenos." | "No organizo yo pero puede ser una buena alternativa." | Sí, con nombre y teléfono |
| R9 | "No entendí bien cómo se forma el tema de la asistencia, me dice que yo tengo 85?" | "Nivel, que sea mínimamente conocido por 1 y que no viva muy lejos." | "La asistencia, buenas calificaciones y ganas de jugar." | "Siempre espero jugar con alguien conocido, en esta plataforma cambia esa dinámica porque la gente quiere jugar al pádel aunque implique conocer gente nueva." | "Dale", con nombre y teléfono |

### 7.3 Anomalías conservadas

- R3 y R8 no cumplen el filtro de perfil: se registran y se excluyen de las métricas (mismo tratamiento que Lautaro en la Ronda 1). R3 reporta una traba real de comprensión ("aparecieron nombres, no entendía qué era").
- R2: respuestas de baja información ("Las canchas" repetido en dos preguntas distintas; "No" a la diferencia con hoy).
- R4 y R9 comparten apellido: verificar independencia.
- R9 dice "me dice que yo tengo 85": el prototipo asigna al tester el perfil simulado de Valentina (85% de asistencia). Posible defecto del instrumento, no de la hipótesis.
- Falta la pregunta de reenvío y no se registra el origen de cada respuesta.

### 7.4 Cierre de la recolección y verificación del CSV final

- `Prototipo_de_padel_Bueno.csv` contiene **9 respuestas, las mismas R1–R9** de la sección 7.2. Se compararon marcas de tiempo, filtro de perfil, consigna y textos: no hay diferencias ni respuestas nuevas.
- La última respuesta es del 21/09 19:22. Pasaron los 7 días desde la primera respuesta (17/09) sin más datos, así que **la ventana se considera cerrada** con **n = 7 válidas** (meta ~8, no alcanzada) y 2 fuera de perfil.
- El CSV contiene datos personales (nombres y teléfonos). No se transcriben acá; guardarlo como evidencia complementaria sin publicarlo.
- Este cierre no modifica el contrato ni las métricas.

## 8. Evidencia (Paso 9)

### 8.1 Resultados por métrica (muestra válida, n = 7)

| Métrica | Resultado |
|---|---|
| Completa sin ayuda | 7/7 sin bloqueo. Dos fricciones no bloqueantes: legibilidad del tema oscuro (R7) y comprensión del % de asistencia / perfil simulado (R9). |
| Mención espontánea (pregunta abierta) de un elemento del perfil como ayuda para decidir | **1/7** (R6: "pensé en qué nivel de jugadores había"). R9 menciona la asistencia, pero como duda, no como confianza: 2/7 nombran algún elemento del perfil sin que se les pregunte. |
| Confianza nombrada al preguntar directo | 6/7 nombran algo: foto 3 (R1, R4, R7), calificaciones 3 (R5, R6, R9), asistencia 2 (R1, R9), cantidad de partidos 1 (R1), "ganas de jugar" 1 (R9). R2 no responde sobre el perfil. |
| Dice que se diferencia de su forma actual (declarado) | 6/7 sí, 1/7 no (R2) |
| Dice preferir WhatsApp de forma explícita | 0/7 |
| Lista de espera | 2 con contacto (R5, R9) · 2 "sí" sin contacto (R4, R7) · 2 no (R2, R6) · 1 en blanco (R1) |

### 8.2 A favor de la hipótesis

- El flujo publicar/postularse se completa sin ayuda en 7/7 (10/10 sumando la Ronda 1).
- Al preguntar directo, 6/7 nombran un elemento del perfil que les da confianza; la foto se repite (3/7) y R7 la compara explícitamente con el texto de WhatsApp.
- 6/7 perciben una diferencia con su forma actual (declarado). R1 destaca dejar de estar pendiente de mensajes; R5 y R9 dicen que hoy juegan siempre con las mismas personas.
- 4/7 expresan algún interés en la lista de espera (2 con contacto real).

### 8.3 En contra o que matiza

- Solo 1/7 menciona espontáneamente un elemento del perfil como ayuda para decidir.
- Sin sugerencia previa, los criterios que aparecen primero son el **nivel** (5/7: R1, R4, R6, R7, R9) y el **lugar/cercanía** (4/7 claros: R1, R5, R6, R9; R2 ambiguo): datos que hoy ya se consultan por WhatsApp. Foto, calificaciones y asistencia aparecen 0/7 en esa pregunta.
- La asistencia divide opiniones: R1 y R9 la nombran como generador de confianza (R9 sin entender cómo se calcula); en la Ronda 1 un participante la consideró innecesaria.
- Interés declarado alto pero compromiso bajo: 4/7 dicen "sí" a la lista de espera, solo 2 dejan contacto.
- R2 no percibe diferencia con hoy y rechaza la lista.

### 8.4 Lectura complementaria no prevista en el contrato

El análisis de la pregunta "qué mirarías primero" (nivel y cercanía) se agregó después de ver los resultados. **No modifica el criterio de éxito ni de fracaso**; se usa solo como información adicional.

### 8.5 Ronda 1 vs. Ronda 2

| Aspecto | Ronda 1 (v1, n=3) | Ronda 2 (v2, n=7) |
|---|---|---|
| Completa sin ayuda | 3/3 | 7/7 |
| Foto | 1/3 la pidió (v1 no la tenía) | 3/7 la nombran (v2 ya la incluye) |
| Asistencia | 1 dijo que no hace falta | 2/7 la nombran como confianza; 1 no entiende cómo se calcula |
| Calificaciones | No destacadas | 3/7 |
| Espontáneo vs. inducido | No se separaba | Separado: 1/7 espontáneo |

### 8.6 Interpretación — **Confirmada por el equipo**

1. La usabilidad del flujo se sostiene en dos rondas.
2. El valor del perfil aparece cuando se pregunta directo, pero no emerge solo. La ventaja del perfil sobre WhatsApp (foto, calificaciones, asistencia) no quedó demostrada como algo que la gente busque por iniciativa propia. La lectura de "señal favorable" de la Ronda 1 parece haber sido más optimista porque no se separaba lo espontáneo de lo inducido.
3. Hay señales, todavía hipótesis, de que el reemplazo se evalúa a través de un contacto en común: R9 ("mínimamente conocido por 1"), R7 ("grupo de jugadores pero no nos conocemos todos"), R5 ("siempre juego con las mismas personas"). Es coherente con la Entrevista 1 de la Clase 2 y con el caso TuCancha del Canvas; no está confirmado.
4. Interés y compromiso no coinciden: hay curiosidad declarada, pero pocos dejan contacto.

### 8.7 Supuestos que siguen abiertos

- Que la falta de hábito (y no el rechazo a un marketplace de desconocidos) explica la baja adopción de apps (supuesto del equipo).
- Que la asistencia sirve como señal de confianza si se explica bien.
- Qué proporción de las respuestas viene de fuera del círculo del equipo.
- Si el interés en la lista de espera se traduce en uso real (Comportamiento, no probado).

### 8.8 Limitaciones

- n = 7, por debajo de la meta (~8); ventana de 1 semana cerrada sin respuestas nuevas.
- Autoadministrado: no se observa dónde se traban ni qué miran.
- La pregunta abierta orienta hacia la info de los otros jugadores.
- Origen de las respuestas desconocido; posible no independencia (R4/R9).
- Perfil de prueba simulado y asignado (Valentina).
- Respuestas de baja información (R2, R4).
- El interés en la lista de espera es un compromiso bajo.

## 9. Comparación con el contrato y estado de la evidencia

| Criterio del contrato | Resultado |
|---|---|
| Éxito: la mayoría completa sin ayuda | **Se cumple** (7/7) |
| Éxito: la mayoría menciona espontáneamente confianza | **No se cumple** (1/7) |
| Fracaso: la mayoría se traba | No se cumple |
| Fracaso: prefiere WhatsApp | No se cumple (0/7) |
| Fracaso: solo menciona confianza cuando se le pregunta directo | **Se cumple para la mayoría** (6/7 solo al preguntar; 1/7 espontáneo) |

### Clasificación — **Confirmada por el equipo, con ajuste**

| Dimensión | Estado | Por qué |
|---|---|---|
| Usabilidad del flujo publicar/postularse | **Respaldada por esta prueba** | 7/7 sin bloqueo en esta ronda (10/10 sumando la Ronda 1). |
| Valor del perfil para decidir (hipótesis de Valor) | **Inconclusa por esta prueba** | El criterio específico de mención espontánea no se cumple (1/7), pero el equipo considera que esa señal no representa adecuadamente el valor que quiere medir en una app nueva. La evidencia positiva aparece cuando se pregunta por el perfil, y esta ronda no observó una elección real entre alternativas. Por eso no permite concluir que el perfil carezca de valor. |
| Comportamiento (uso real en lugar de WhatsApp) | **Sin evidencia todavía** | La lista de espera es una señal débil: 4 dicen sí, 2 dejan contacto. |

**Decisión del equipo sobre la clasificación:** aunque la cláusula de mención espontánea no se cumple, el equipo **no la interpreta como evidencia suficiente para clasificar el valor del perfil como "no respaldado"**. La razón es metodológica: los participantes estaban descubriendo una app nueva y la tarea los llevaba a entender el funcionamiento general; mirar primero lo que llama la atención no equivale a evaluar espontáneamente qué dato genera confianza. Además, cuando se preguntó directamente por el perfil, aparecieron valoraciones positivas. Por eso, el estado se deja como **inconcluso para la hipótesis de valor**, y la siguiente prueba debe observar una elección concreta.

La ventana cerró, n = 7 quedó cerca de la meta (~8), y los datos son válidos para esta lectura. Lo que no puede demostrar esta ronda es el efecto causal del perfil sobre la decisión de un reemplazo.

**Lectura útil para la próxima prueba:** el nivel forma parte del perfil y 5/7 lo nombran primero al responder "qué mirarías primero". Esto muestra que los usuarios sí usan información del contexto del partido para decidir. No se toma como prueba de que el perfil completo genere confianza, porque el nivel también aparece en la tarjeta del partido y hoy ya se consulta por WhatsApp. La próxima prueba debe aislar el aporte de foto, calificaciones y asistencia sobre una **elección observada**, sin depender de la mención espontánea.

**Alcance:** un resultado no respaldado no autoriza a descartar el problema ni la solución. Dice que, con este método autoadministrado y estas preguntas, el valor del perfil no emergió por iniciativa propia. Nada indica que el perfil no sirva: solo que este método no lo demuestra.

## 10. Registro de iteración

```markdown
## Iteración 2

- Experimento anterior: Fase 1, Ronda 1 (prototipo v1, n=3) — ver registro-experimento.md.
- Resultado: **inconcluso para el valor del perfil; usabilidad respaldada. Confirmado por el equipo.** La ronda muestra que la mención espontánea no fue una buena medida principal del valor que se quiere validar.
- Evidencia producida: secciones 7 y 8 de este archivo (n=7 válidas, 2 fuera de perfil).
- Por qué no sirve seguir insistiendo de la misma manera: repetir un formulario autoadministrado centrado en mención espontánea no produciría la evidencia que falta. La nueva prueba debe observar qué candidato elige una persona cuando dispone de información tipo WhatsApp versus un perfil más completo.
- Supuesto que quedó cuestionado: que el usuario reconoce por sí mismo el valor de foto/calificaciones/asistencia al decidir.
- Qué conservamos: el problema (A+C+D fusionado), la hipótesis de Valor, la Alternativa A, el segmento (jugadores de pádel fuera del círculo directo), la usabilidad del flujo y las señales nombradas (foto, calificaciones).
- Qué modificamos: (a) instrumento: v3 con tema claro, aviso de que el perfil de prueba es simulado y explicación de la asistencia; (b) método: pasar de preguntar por confianza a observar una elección entre candidatos.
- Tipo de cambio: corrección (instrumento) + iteración (método). No es pivot: la evidencia no contradice válidamente la hipótesis, solo no la demuestra con este método.
- Próximo experimento: ver Iteración 3 (prueba de elección con dos condiciones).
- Qué evidencia diferente esperamos obtener: una elección real entre candidatos y las razones citadas, comparando con texto tipo WhatsApp frente a perfil.
- Nuevo contrato experimental: ver abajo.
```

### Alternativas para la próxima prueba

| | 1. Corregir y cerrar | 2. Prueba de elección: texto vs. perfil (**✅ elegida y confirmada por el equipo**) | 3. Pivotar a evaluación por contacto en común (Alternativa B) |
|---|---|---|---|
| Supuesto que prueba | Que las fricciones de interfaz distorsionaron esta ronda | Que ver perfil cambia la decisión frente a solo texto | Que el reemplazo se evalúa por un conocido en común |
| Qué cambia | Solo el instrumento | Método: elección observada con dos condiciones | Mecanismo de la solución |
| Evidencia nueva | Poca: repite lo mismo | Comportamiento (a quién elige) y razones | Cualitativa, sobre el mecanismo |
| Costo | Muy bajo | Bajo (Google Forms con imágenes, sin código) | Medio (prototipo nuevo o Wizard of Oz) |
| Qué obligaría a revisar la hipótesis | Nada nuevo | Si nadie cita señales del perfil o la condición texto rinde igual | Si nadie menciona el contacto en común al elegir |

**Decisión del equipo:** se elige la **alternativa 2** porque produce evidencia diferente con poca inversión. Los indicios de la alternativa 3 (R9, R7, R5) se mantienen como hipótesis secundaria y se pueden observar mediante una pregunta abierta sobre el contacto en común, sin convertirlos todavía en el mecanismo principal.

### Iteración 3: contrato experimental — **confirmado por el equipo, con foco ajustado**

| Campo | Definición propuesta |
|---|---|
| Hipótesis | Ver un perfil (foto, calificaciones, asistencia) puede cambiar la elección del reemplazo y/o aumentar la confianza frente a una representación tipo WhatsApp cuando la persona debe resolver una necesidad concreta. |
| Aprendizaje | Si la información adicional del perfil cambia la elección, la confianza o el tiempo para decidir, y qué señales aparecen en la explicación de la elección. **La mención espontánea deja de ser el indicador principal.** |
| Participantes | Jugadores de pádel fuera del círculo directo (mismo perfil); meta ~10 válidos (5 por condición, asignación alternada por orden de llegada). |
| Tarea | Se presentan los **mismos 3 candidatos y la misma necesidad de completar un cuarteto**. **Condición A:** representación tipo WhatsApp con la información básica disponible hoy (por ejemplo: nivel, distancia y conocido en común). **Condición B:** la misma información básica más foto, calificaciones y asistencia en formato de perfil. La persona elige a un candidato, se registra el **tiempo hasta decidir**, puntúa su confianza (1–5) y explica con sus propias palabras por qué lo eligió. No se pregunta previamente qué le genera confianza. |
| Métrica | (1) distribución de elecciones entre condiciones; (2) confianza media B vs. A; (3) tiempo medio de decisión B vs. A; (4) proporción de personas en B que incorpora en su explicación alguna señal adicional del perfil (foto, calificaciones o asistencia); (5) mención de conocido en común como señal secundaria. |
| Criterio de éxito | Se mantiene como umbral exploratorio confirmado por el equipo: en la condición B, al menos **3 de 5** incorporan alguna señal adicional del perfil (foto, calificaciones o asistencia) en su explicación **y** la confianza media de B supera a la de A en **1 punto o más**. Además, se registra el tiempo de decisión para ver si la información mejora la resolución o introduce fricción. |
| Criterio de fracaso | En B, menos de 3 de 5 citan esos elementos, o la confianza media de A es igual o superior. |
| Duración | 1 semana o llegar a 10 válidos, lo que ocurra primero. |
| Limitaciones | n muy chico (indicativo, no estadístico); sigue autoadministrado; candidatos simulados; se mide elección hipotética, no uso real (Comportamiento sigue sin probarse). |

Los umbrales (3 de 5, 1 punto) quedan **confirmados por el equipo** y deben mantenerse sin cambios durante la ejecución.

## 11. Decisiones humanas registradas

| Punto de control | Decisión |
|---|---|
| Síntesis inicial | Confirmada por el equipo |
| Pregunta de aprendizaje | Opción A: reforzar Valor con más muestra |
| Tipo de experimento | C + difusión ampliada de A, sin sesiones en vivo |
| Contrato | Confirmado, con duración de 1 semana y meta ~8 respuestas |
| Alcance | Prototipo v2 sin cambios + formulario reordenado |
| Piloto (Paso 7) | Omitido; probado por un integrante y un amigo |
| Comportamiento | Lista de espera como señal complementaria; concierge por WhatsApp descartado por inviable |
| Investigación secundaria | Agregada al Canvas (Alquila tu Cancha, TuCancha) como explicación alternativa a vigilar |
| Cierre de la ronda | **Confirmado**: ventana cerrada con n = 7 válidas. |
| Clasificación del resultado | **Confirmado por el equipo:** usabilidad respaldada / valor del perfil **inconcluso por esta prueba**. La mención espontánea no se toma como criterio principal para invalidar el valor. |
| Próxima iteración | **Confirmado por el equipo:** alternativa 2 (prueba de elección texto vs. perfil). |

## 12. Cierre de la Clase 5

1. **Qué aprendimos:** el flujo se entiende y se completa solo. Los participantes valoran positivamente distintos elementos del perfil cuando se les pregunta, especialmente foto y calificaciones. La mención espontánea de esos elementos fue baja, pero el equipo considera que eso no es una medida suficiente para concluir que el perfil no aporta valor en una app nueva.
2. **Por qué corresponde dejar de insistir con este formato:** más respuestas del mismo formulario no resolverían la incertidumbre principal. El método actual pide opiniones sobre confianza después de que la persona ya exploró una app nueva, pero no observa si la información del perfil cambia una decisión.
3. **Qué supuesto conservamos:** el problema y que un perfil con más señales puede ayudar a decidir; todavía falta observar si esas señales cambian una elección frente a la alternativa tipo WhatsApp.
4. **Qué supuesto modificamos:** que el usuario reconoce por sí mismo el valor del perfil; y la lectura optimista de la Ronda 1.
5. **Próxima prueba más barata:** prueba de elección texto vs. perfil (Iteración 3), con registro de elección, confianza y tiempo de decisión.

6. **Hipótesis adicional del equipo:** si la app demuestra resolver el problema de completar el partido de forma más rápida y eficiente que el circuito actual, WhatsApp podría pasar a un segundo plano. Esto queda abierto y deberá contrastarse en una prueba de comportamiento real; no se presenta como conclusión de la Ronda 2.

**Anotado para la Clase 6:** posible evaluación por contacto en común (R9, R7, R5), lista de espera con 2 contactos reales, y la ambigüedad del criterio sobre qué cuenta como "elemento del perfil".

## 13. Pendientes

1. ✅ **Confirmado:** clasificación ajustada e Iteración 3 con alternativa 2 (sección 11).
2. ✅ **Confirmado:** se mantienen los umbrales exploratorios de 3/5 y +1 punto antes de difundir.
3. Verificar si R4 y R9 son independientes (mismo apellido).
4. Construir v3: tema claro, aviso de perfil simulado y explicación de la asistencia.
5. Armar el formulario de la prueba de elección con las dos condiciones.
6. **Decisión confirmada:** actualizar el Canvas conservando el historial, incorporando que la prueba de valor queda inconclusa y que la próxima validación será por elección observada. **Acción pendiente:** realizar la edición del Canvas.
7. Guardar el CSV original como evidencia complementaria, sin publicarlo.

### Cambios propuestos al Canvas (a confirmar)

- **Caja 6 (Valor):** agregar nota: en la Ronda 2 la mención espontánea de señales de confianza fue baja (1/7), pero el equipo no la toma como criterio suficiente para clasificar el valor como no respaldado. El criterio se refina a una prueba de elección observada.
- **Caja 8 (Fase 1):** registrar la Iteración 3 como nueva ronda; no borrar las rondas 1 y 2.
- **Pre-mortem, fila "Falta de valor real":** anotar que la señal temprana se observó parcialmente (mención espontánea baja).
- **Cajas 2, 3, 5 y 7:** sin cambios.

> No borramos ni reescribimos el resultado anterior. Cada vuelta se conserva para mostrar cómo evolucionó el razonamiento.

> **Confirmación del equipo:** la interpretación de la sección 8.6 queda aprobada. La clasificación de valor se ajusta a **inconclusa** por la limitación del indicador de espontaneidad. La alternativa 2 queda elegida para la próxima ronda. La hipótesis de que WhatsApp pasaría a un segundo plano si la app demuestra mayor rapidez y eficiencia queda registrada como hipótesis de comportamiento pendiente de prueba.
