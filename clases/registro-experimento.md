# Registro del experimento — A Jugar (Pádel Amateur)

> Corresponde a la Fase 1 del experimento mínimo definido en la Caja 8 del Lean Product Canvas. La Fase 2 (uso real, Comportamiento) todavía no se ejecutó.

## 1. Punto de partida

- **Hipótesis priorizada (Caja 7 — Comportamiento):** Creemos que los organizadores publicarán su partido y revisarán postulaciones en la app en vez de recurrir directo a WhatsApp cuando les falte un jugador, y que jugadores sin grupo armado (como Valentina) se postularán a partidos publicados por otros. Lo sabremos si, en uso real (Fase 2), una proporción relevante de organizadores publica más de un partido —uso repetido, no solo una prueba— y aparecen postulaciones reales de jugadores que no fueron invitados directamente.
  - *Nota:* esta Fase 1 no prueba todavía Comportamiento. Prueba **Valor**, como paso previo necesario: hace falta un prototipo validado antes de poder correr la Fase 2.
- **Pregunta de aprendizaje (Caja 7):** ¿Los organizadores publicarán partidos y revisarán postulaciones dentro de la app —y los jugadores sin grupo se postularán realmente— en vez de seguir resolviéndolo todo por WhatsApp, dado que ese proceso gratuito ya les funciona en varios casos relevados?
- **Experimento mínimo (Fase 1, Caja 8):** prototipo navegable + tarea guiada (publicar un partido al que le falta gente / buscar y postularse a uno ajeno), con los 4 entrevistados de la Clase 2 y contactos nuevos.
  - *Desvío respecto al diseño original:* se ejecutó de forma autoadministrada por formulario (la persona prueba el link sola y después completa un form), no como sesión facilitada y observada en vivo.
- **Métrica:** % que completa el flujo sin ayuda; fricciones detectadas; menciones de confianza al ver el perfil.
- **Criterio de éxito:** mayoría completa sin ayuda y valora ver el perfil, sin sugerírselo.
- **Criterio de fracaso:** se traban, o dicen que preferirían seguir por WhatsApp.

## 2. Posición inicial en la curva de la verdad

- **Evidencia disponible:** 4 entrevistas reales de la Clase 2 + research secundario + Canvas con hipótesis explícitas.
- **Incertidumbre pendiente:** si el perfil (nivel, historial, calificaciones) genera más confianza y ayuda a decidir mejor que preguntar por WhatsApp.
- **Inversión autorizada:** prototipo navegable descartable, sin backend real, sin video real, sin pagos ni notificaciones; sesiones/pruebas cortas con participantes reales.

## 3. Instrumento construido

- **Tipo de instrumento:** prototipo web navegable ("A Jugar") con datos simulados, alojado en Netlify.
- **Enlace o archivo:**
  - v1 (usada para recolectar las respuestas de este registro): `https://sparkly-puppy-303aaf.netlify.app`
  - v2 (ajustada con los aprendizajes de esta ronda, todavía sin publicar): `index-v2.html`
- **Qué incluye:** publicar partido, ver partidos disponibles con filtros por zona/nivel/estado, postularse, aceptar o rechazar postulantes, ver el perfil de otro jugador (nivel, historial, calificaciones), editar el propio perfil.
- **Qué quedó fuera (deliberadamente, por ser prematuro):** video real (queda como placeholder), backend real, cuentas, pagos, notificaciones, matching algorítmico.

## 4. Ejecución

- **Fecha y contexto:** respuestas recibidas entre el 08/09/2026 y el 12/09/2026, después de que cada persona probara el prototipo v1 por su cuenta y completara un formulario.
- **Participantes:**

| Participante | ¿Juega regular? | ¿Ya entrevistado en Clase 2? | Tarea probada | ¿Completó sin ayuda? | Estado |
|---|---|---|---|---|---|
| Nazareno | Sí | No (nuevo) | Ambas | Sí | Incluido |
| Lautaro Ferrero Verdier | No | No (nuevo) | Publicar | Sí | **Excluido** — no encaja con el perfil buscado y su respuesta sobre el problema fue una broma no relacionada |
| Mateo | No | Sí (según él) | Postularse | Sí, con matiz | Incluido — **inconsistencia registrada**: dice haber sido entrevistado en Clase 2 pero declara no jugar regular |
| Franco Laporta | Sí | Sí | Publicar | Sí | Incluido — confirmado como contacto externo, no integrante del equipo |

- **Tarea realizada:** cada participante eligió una consigna (publicar partido o buscar/postularse); Nazareno hizo ambas.
- **Resultados obtenidos (sin interpretar, tal como los escribieron):**
  - Nazareno: "Está fácil de usar." Sobre el perfil: "Está bueno que figure el nombre, nivel de habilidad y cantidad de partidos jugados. El dato de % de asistencia me parece que no hace falta mostrarlo." Sobre qué miraría para decidir: "Que coincida con mi nivel de habilidad. Sacaría la opción de tener que aceptar a alguien que se postule, si el partido está público en una app está abierto al primero que se meta."
  - Mateo: "Cuando no encontré no sabía qué hacer, pero supongo que cuando haya es fácil." "Todo muy fácil y sencillo, no hay opciones de más y está bueno, es muy lógico." Confianza: "Partidos jugados." Qué miraría: "Buena onda y si es crack."
  - Franco Laporta: "Me resultó fácil el matcheo con otras personas." Confianza: "Creo que lo que más confianza podría dar sería una foto de la persona. En cuanto al nivel decir nivel alto/bajo me parece relativo, podría pasar que llegues a un partido de nivel medio y que en realidad para vos sea nivel bajo." Qué miraría: "La foto de la persona, el lugar, el precio de la cancha." Diferencia con hoy: "Se diferencia bastante, hoy por hoy hacemos todo por WhatsApp con conocidos."
- **Anomalías observadas:**
  - Una respuesta (Lautaro) excluida por no cumplir el perfil buscado y no aportar datos serios — se documenta que se recibió, no se descarta en silencio.
  - Una inconsistencia de perfil no resuelta (Mateo) — se mantiene la respuesta, marcada.
  - El método terminó siendo autoadministrado por formulario en vez de sesión observada en vivo: la "confianza" quedó elicitada por una pregunta directa del formulario, no observada espontáneamente durante la tarea como pedía el diseño original.

## 5. Evidencia

**A favor:**
- Los 3 participantes válidos completaron la tarea sin ayuda.
- Los 3 mencionan espontáneamente elementos del perfil como generadores de confianza (nivel + partidos jugados, partidos jugados, posibilidad de "matchear").
- Contraste explícito con la alternativa actual: Franco marca que se diferencia bastante de resolver todo por WhatsApp; Nazareno lo valora como buena alternativa a un problema frecuente.
- Ninguno activó el criterio de fracaso (nadie se trabó del todo, nadie dijo preferir seguir por WhatsApp).

**En contra o que matiza:**
- El % de asistencia no convence como señal de confianza (Nazareno lo marca explícitamente como innecesario).
- El nivel autodeclarado sigue generando dudas de subjetividad (Franco).
- Piden señales que la app no tenía: foto de la persona (Franco) y una noción de "buena onda"/actitud (Mateo).
- Fricción real: Mateo no supo qué hacer ante un resultado vacío (sin partidos disponibles).

**Interpretación del equipo** *(borrador a partir de la conversación — revisar antes de entregar):*
> Parece validarse la idea general de que "ver un perfil ayuda a decidir" más que los campos puntuales elegidos originalmente: el nivel autodeclarado y el % de asistencia generan dudas, mientras que la foto y una señal de actitud son lo que la gente pide en su lugar.

**Limitaciones:**
- Muestra muy chica (n=3 válidas, de las 8-10 que se apuntaba a recolectar).
- La confianza fue preguntada directamente en el formulario, no observada espontáneamente durante la tarea, como pedía el criterio original ("sin sugerírselo").
- Al ser autoadministrado, "dónde te trabaste" depende de que la persona lo recuerde y lo cuente bien, no de observación directa.
- Mateo queda con una inconsistencia de perfil sin resolver.

## 6. Aprendizajes

- **Qué aprendimos:** ver un perfil ayuda a decidir, pero no cualquier dato del perfil genera confianza por igual — el % de asistencia y el nivel autodeclarado generan dudas; una foto y alguna señal de actitud son lo que se pide en su lugar. También apareció una fricción concreta de usabilidad en el estado vacío.
- **Qué continúa siendo un supuesto:** si esto se traduce en dejar de usar WhatsApp en la práctica (Comportamiento, Fase 2 — todavía no se probó); si una señal de "actitud" puede mostrarse de forma no subjetiva.
- **Cambios realizados o propuestos:** se construyó una v2 del instrumento con foto de perfil (placeholder), % de asistencia con menor visibilidad (pasa a dato secundario, no eliminado) y un estado vacío con una salida clara ("Quitar filtros"), antes de seguir recolectando respuestas.

## 7. Estado de la evidencia y próxima iteración

- **Clasificación:** **Inconclusa, con señal favorable.**
- **Comparación con el criterio:** no se activó el criterio de fracaso. El criterio de éxito se cumplió de forma literal (3/3 completaron sin ayuda y valoraron el perfil), pero la muestra es muy chica y el método de recolección se desvió del diseño original (confianza elicitada, no espontánea) — no alcanza para una clasificación de "Respaldada" con solidez.
- **Decisión de iteración:** sumar más respuestas usando el instrumento ajustado (v2), antes de decidir si se avanza hacia la Fase 2.
- **Justificación:** la señal es positiva y nada la contradice fuertemente, pero el tamaño de muestra y el método no permiten una conclusión firme. Avanzar directo a la Fase 2 (uso real, 3-4 semanas, mucha mayor inversión) sería prematuro con esta evidencia.
- **Próxima incertidumbre por reducir:** si el valor percibido del perfil (ahora con foto y sin el ruido del % de asistencia) se sostiene con una muestra más grande y variada, antes de invertir en probar el comportamiento real en la Fase 2.

## 8. Nueva posición en la curva de la verdad

- **Evidencia incorporada:** 3 respuestas reales adicionales a las 4 entrevistas de la Clase 2, con señal favorable pero no concluyente sobre el Valor del perfil, y con hallazgos específicos sobre qué campos generan o no confianza.
- **Inversión que se justifica ahora:** seguir en Fase 1 con el instrumento ajustado (v2), sumando más respuestas por el mismo canal (formulario + prototipo) — costo bajo, mismo instrumento.
- **Qué todavía no se justifica construir:** la Fase 2 (uso real, 3-4 semanas), video real, un sistema de calificación de actitud/"buena onda", un rediseño del sistema de niveles, o cualquier backend real.
