# Clase 2 — Descubrimiento de problemas asistido por IA

## Guía paso a paso para alumnos

## Propósito de la clase

Utilizar inteligencia artificial para explorar un dominio, encontrar señales de problemas, priorizar qué problema investigar primero y preparar entrevistas con usuarios reales.

En esta clase **no vamos a diseñar productos ni funcionalidades**. El objetivo es terminar con una hipótesis de problema respaldada por evidencia inicial y un plan para validarla.

> **La IA amplía, organiza y cuestiona. El equipo verifica, interpreta y decide.**

---

## Resultados esperados

Al finalizar la clase, cada equipo tendrá:

- Un dominio, un usuario inicial y un contexto definidos.
- Entre 5 y 10 problemas potenciales con sus fuentes.
- Una ficha completa para cada problema finalista.
- Una priorización mediante el método ICE.
- Un problema priorizado y redactado sin incluir soluciones.
- Dos personas sintéticas construidas a partir de evidencia.
- Un guion para realizar entrevistas reales.
- Un archivo de trabajo guardado en el repositorio del equipo.

---

## Contrato de uso de IA

Durante esta actividad pueden usar IA para:

- Entender o reformular una consigna.
- Explorar fuentes públicas.
- Organizar y comparar información.
- Detectar duplicados, contradicciones y vacíos.
- Cuestionar sus decisiones.
- Revisar la claridad de sus entregables.

No deben usarla para:

- Inventar evidencia, fuentes, entrevistas o testimonios.
- Decidir automáticamente por el equipo.
- Presentar una inferencia como un hecho.
- Reemplazar el contacto con usuarios reales.
- Proponer soluciones antes de comprender el problema.

Cada vez que la IA produzca una afirmación relevante, pregúntense:

1. ¿Cuál es la fuente original?
2. ¿Podemos verificarla?
3. ¿Es un hecho, una interpretación o un supuesto?
4. ¿Qué parte podría haber completado o inferido la IA?

> **Una respuesta convincente no es necesariamente una respuesta verdadera.**

---

## Antes de empezar

Creen en el repositorio del equipo un archivo llamado:

```text
clase-02-descubrimiento.md
```

Usen ese archivo como bitácora de trabajo. En cada paso encontrarán una sección titulada **Guardar en el repositorio**. Copien allí las decisiones, evidencias y aprendizajes del equipo.

También creen una sección llamada:

```text
## Estacionamiento de soluciones
```

Si aparece una idea de aplicación, chatbot, plataforma o funcionalidad, anótenla allí y vuelvan a investigar el problema. No es necesario perder la idea; simplemente no es el momento de desarrollarla.

---

## Agenda de trabajo

| Paso | Actividad                           | Duración sugerida |
| ---: | ----------------------------------- | ----------------: |
|    1 | Definir el territorio               |            15 min |
|    2 | Realizar research secundario con IA |            25 min |
|    3 | Construir las fichas de problemas   |            10 min |
|    4 | Limpiar y agrupar problemas con IA  |             5 min |
|    5 | Comprender ICE                      |             5 min |
|    6 | Evaluar individualmente             |             5 min |
|    7 | Evaluar con IA                      |             7 min |
|    8 | Comparar y discutir                 |             5 min |
|    9 | Atacar al problema finalista        |             5 min |
|   10 | Tomar la decisión                   |             3 min |
|   11 | Redactar el problema                |             5 min |
|   12 | Crear personas sintéticas           |            20 min |
|   13 | Entrevistar una persona sintética   |            15 min |
|   14 | Preparar entrevistas reales         |            15 min |
|   15 | Revisar y entregar                  |            10 min |
|      | **Total estimado**                  |       **150 min** |

Los docentes podrán ajustar los tiempos según la dinámica de la clase.

---

# Paso 1 — Definir el territorio de investigación

**Duración:** 15 minutos  
**Modalidad:** equipo

Antes de investigar, definan dónde van a mirar y qué dejarán fuera.

## Completar

| Elemento | Pregunta | Respuesta del equipo |
|---|---|---|
| Dominio | ¿Qué espacio queremos investigar? | |
| Usuario inicial | ¿Quién podría experimentar problemas allí? | |
| Contexto | ¿En qué situación queremos observarlo? | |
| Supuestos iniciales | ¿Qué creemos sin haberlo comprobado? | |
| Límites | ¿Qué queda fuera de esta investigación? | |

## Ejemplo

| Elemento | Ejemplo |
|---|---|
| Dominio | Organización académica |
| Usuario inicial | Estudiantes universitarios que trabajan |
| Contexto | Cursado simultáneo de varias materias |
| Supuesto inicial | La información se encuentra demasiado distribuida |
| Fuera de alcance | La calidad pedagógica del contenido de las materias |

## Control del equipo

- ¿El dominio es suficientemente concreto para investigar?
- ¿Podemos reconocer al usuario que describimos?
- ¿El contexto representa una situación real?
- ¿Marcamos nuestros supuestos como supuestos?
- ¿Definimos qué no investigaremos?

## Guardar en el repositorio

```markdown
## 1. Territorio de investigación

- Dominio:
- Usuario inicial:
- Contexto:
- Supuestos iniciales:
- Fuera de alcance:
```

---

## 1. Territorio de investigación


- **Dominio:** Organización de partidos de pádel amateur.
- **Usuario inicial:** Jugadores adultos que juegan pádel recreativo de forma regular con un grupo fijo o semi-fijo.
- **Contexto:** El momento en que a un grupo le falta gente para completar el equipo (el cuarteto necesario para el 2v2) y/o necesita conseguir cancha.
- **Supuestos iniciales:** Que conseguir gente confiable y *del mismo nivel* es más doloroso que conseguir cancha; que los grupos de WhatsApp son la alternativa dominante hoy para suplencias; que la confianza/seguridad es una barrera real para sumar desconocidos; que la falta de un jugador frustra el partido entero (no se puede jugar 3 personas); las personas buscan conocer gente nueva a través del deporte (ejemplo: Running).
- **Fuera de alcance:** Ligas federadas, clases o escuelas de pádel, pádel infantil, torneos profesionales, otros deportes.



# Paso 2 — Realizar research secundario asistido por IA

**Duración:** 25 minutos  
**Modalidad:** equipo con IA

Busquen señales de problemas en fuentes públicas, por ejemplo:

- Estudios e informes.
- Reseñas de productos existentes.
- Foros y comunidades.
- Preguntas frecuentes y reclamos.
- Artículos especializados.
- Alternativas utilizadas actualmente.
- Cambios tecnológicos, sociales o regulatorios.

## Prompt sugerido

```text
Actuá como investigador de producto.

Estamos investigando el dominio [DOMINIO] y queremos comprender
los problemas que experimentan [TIPO DE USUARIO] cuando [CONTEXTO].

Buscá señales de problemas en fuentes públicas: estudios, reseñas,
foros, comunidades, artículos y productos existentes.

Para cada problema indicá:

1. Descripción del problema.
2. Usuario afectado.
3. Contexto en el que ocurre.
4. Consecuencia aparente.
5. Evidencia encontrada.
6. Fuente original y verificable.
7. Nivel de confianza.
8. Preguntas que todavía debemos responder.

No propongas productos ni funcionalidades.
Separá hechos, interpretaciones y supuestos.
No inventes fuentes.
Si no podés verificar una afirmación, indicalo explícitamente.
```

## Verificar cada señal

No copien automáticamente el resultado. Abran las fuentes y respondan:

1. ¿La fuente existe y es accesible?
2. ¿Qué dice realmente?
3. ¿Representa al usuario y al contexto investigados?
4. ¿La señal aparece en más de una fuente?
5. ¿La consecuencia está observada o fue inferida?

## Tabla de problemas potenciales

| Problema potencial | Usuario | Contexto | Evidencia | Fuente | Hecho, interpretación o supuesto | Preguntas pendientes |
| ------------------ | ------- | -------- | --------- | ------ | -------------------------------- | -------------------- |
|                    |         |          |           |        |                                  |                      |
|                    |         |          |           |        |                                  |                      |
|                    |         |          |           |        |                                  |                      |

## Resultado esperado

Una lista de entre 5 y 10 problemas potenciales con sus fuentes originales.

## Guardar en el repositorio

```markdown
## 2. Research secundario

### Problemas potenciales

[PEGAR TABLA]

### Fuentes consultadas

- [Nombre de la fuente](URL): señal encontrada.

### Dudas y contradicciones

- 
```

## 2. Research secundario

### Problemas potenciales

| Problema potencial | Usuario | Contexto | Evidencia | Fuente | Hecho, interpretación o supuesto | Preguntas pendientes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Nivel de juego dispar al sumar desconocidos** | Organizador / Jugador que se suma | Al faltar 1 o 2 jugadores para completar el 2v2 | Las principales apps del mercado basan su propuesta de valor en esto. Playtomic usa un algoritmo dinámico de nivel tras cada partido competitivo; iPadel y PlayMix destacan sus filtros por nivel. Sin embargo, Playtomic y iPadel no ofrece servicios realmente en Buenos Aires y se basa más en la reserva de canchas. Franco Tibaldi, creador de la app argentina GetMatch, señala que al armar partidos por WhatsApp en Argentina hay "diferencias de nivel muy grandes entre jugadores", lo que arruina la experiencia. Apps locales como Playmatch nacieron justamente para buscar jugadores parejos. | Playtomic, iPadel, PlayMix<br><br>https://bacap.com.ar/2026/03/27/getmatch-la-app-marplatense-que-conecta-jugadores-partidos-y-torneos-de-padel/<br><br>https://playmatch.app/<br><br>Experiencia Personal. | **Hecho** (la industria identifica este feature como indispensable para que el partido no sea frustrante). Los desarrolladores y los clubes argentinos reconocen que el nivel parejo es fundamental y hoy se gestiona de forma muy manual. | ¿Los jugadores argentinos confían en el nivel que un desconocido dice tener en un grupo de WhatsApp, o necesitan un sistema de ranking verificado? |
| **El mercado de reservas local tiene fricciones no resueltas** | Organizador del partido | Búsqueda de turno en clubes locales | Aunque existen apps locales como "Alquila Tu Cancha" (ATC) que prometen "olvidarse de las llamadas", muchos de los clubes más grandes de CABA (como World Padel Center o Complejo Urquiza) aún obligan a los usuarios a reservar exclusivamente enviando mensajes por WhatsApp y transfiriendo una seña, lo que demuestra que la digitalización de las canchas no es total. Se podría integrar todo en una aplicación. | La Nación (2023), Pádel Speed, Web de Flobi<br><br>Alquila Tu Cancha<br><br>World Padel Center Capital | **Hecho / Interpretación** (A pesar de que hay apps de reserva, muchos clubes en Buenos Aires siguen anclados al proceso manual y lento de WhatsApp). | ¿Por qué los clubes de Buenos Aires prefieren seguir usando WhatsApp y cobrar seña manual en lugar de usar apps de reserva automática? |
| **Alta vulnerabilidad al ausentismo (No-show)** | Organizador del grupo | Horas previas a que comience el turno de cancha | A diferencia del fútbol 5 (donde se puede jugar 4v5), en el pádel la ausencia de 1 jugador impide jugar o fuerza a jugar modalidades raras (1v2). El equipo desarrollador de GetMatch identifica que los grupos de WhatsApp argentinos "se llenan de mensajes intentando resolver siempre el mismo problema: conseguir con quién jugar a último momento". En el pádel, a diferencia del fútbol, la baja de un solo jugador impide que se juegue el partido. | Lógica estructural del deporte.<br><br>https://bacap.com.ar/2026/03/27/getmatch-la-app-marplatense-que-conecta-jugadores-partidos-y-torneos-de-padel/ | **Supuesto** (Inferimos que el dolor de que "se baje uno" es mucho mayor y más estresante que en otros deportes). Además es lo que un emprendedor similar tiene en mente como problema. | ¿Qué porcentaje de partidos armados por WhatsApp se cancelan definitivamente a último momento por la baja de una sola persona? |
| **Preocupación de seguridad/confianza** | Jugador amateur | Antes del encuentro con jugadores que no conoce | La desconfianza al jugar con desconocidos en Argentina pasa más por la confianza deportiva (que asista y juegue bien) que por la seguridad física. El objetivo de las nuevas plataformas locales es permitir al jugador "seguir jugando sin depender de conocer gente previamente", eliminando la barrera social del circuito cerrado. | https://bacap.com.ar/2026/03/27/getmatch-la-app-marplatense-que-conecta-jugadores-partidos-y-torneos-de-padel/<br><br>Experiencia personal. | **Hecho/Interpretación** (funcionalidad de mitigación de riesgo existente en competidores). Basado en la experiencia de usuarios que adoptan apps para evitar interactuar a ciegas. | ¿La principal barrera para sumar un jugador nuevo es el miedo a que sea problemático, a que falte, o a que juegue muy mal? |
| **Conocer gente nueva a través del deporte** | Jugador / Organizador | Las personas buscan nuevas formas de relacionarse con gente distinta como ya ha pasado con el Running. | Artículos periodísticos recientes reportan el surgimiento de eventos descritos como "Tinder de pádel" o "Tinder deportivos". En estos espacios, se combina el deporte con dinámicas explícitas de socialización (música, pulseras de colores) para facilitar el conocer gente nueva. | https://tn.com.ar/sociedad/2026/05/30/pulseras-musica-y-atraccion-como-es-el-tinder-padel-el-torneo-donde-se-puede-ganar-mas-que-un-partido/<br><br>https://www.clarin.com/relaciones/funcionan-nuevos-tinder-deportivos-tendencia-une-running-padel-bicicleta-conocer-gente_0_tcjbYFRc5e.html | **Hecho.** Ya hay lugares como en la noticia que se dedican a hacer esto y es una oportunidad a aprovechar. | ¿El jugador que arma un partido de los miércoles busca hacer amigos o solo quiere alguien que le devuelva la pelota? ¿Esta necesidad de socializar es para eventos especiales de fin de semana o aplica al partido de rutina? |

### Fuentes consultadas

* https://tn.com.ar/sociedad/2026/05/30/pulseras-musica-y-atraccion-como-es-el-tinder-padel-el-torneo-donde-se-puede-ganar-mas-que-un-partido/ 
* https://www.clarin.com/relaciones/funcionan-nuevos-tinder-deportivos-tendencia-une-running-padel-bicicleta-conocer-gente_0_tcjbYFRc5e.html
* https://bacap.com.ar/2026/03/27/getmatch-la-app-marplatense-que-conecta-jugadores-partidos-y-torneos-de-padel/ 
* https://playmatch.app/ 

### Dudas y contradicciones

* **Sesgo comercial de las fuentes sobre el dolor de "falta uno":** Gran parte de la evidencia sobre la saturación de los grupos de WhatsApp y las dificultades para completar partidos proviene de creadores de aplicaciones locales (como GetMatch o Flobi) que venden esa solución. No existen estudios independientes o estadísticas cuantitativas neutrales que midan con exactitud qué porcentaje de partidos se cancelan semanalmente por ausentismo.
* **Paradoja de digitalización en las canchas:** A pesar de la existencia de plataformas de reserva directa en el país (como Alquila Tu Cancha), muchos de los principales complejos de pádel en Buenos Aires siguen obligando a gestionar turnos y señas de forma manual vía WhatsApp. Queda la duda de si esto ocurre por resistencia cultural de los dueños, comisiones altas de las plataformas o conveniencia operativa.
* **Subjetividad en la categorización de nivel:** Aunque los clubes y plataformas intentan ordenar los partidos por categorías (7ma, 6ta, 5ta, etc.), la autopercepción del nivel en el pádel amateur suele ser inconsistente. Falta comprobar si un filtro declarado por el usuario realmente previene la frustración de un partido desparejo.
* **Tensión entre motivación social vs. deportiva:** Mientras que las notas periodísticas destacan el pádel como un espacio de socialización y citas ("Tinder deportivo"), los testimonios de jugadores y desarrolladores se centran en la frustración de jugar partidos de nivel dispar. No queda claro si la motivación principal del usuario diario es conectar con gente o competir en igualdad de condiciones.





---

# Paso 3 — Construir la ficha de cada problema

**Duración:** 10 minutos  
**Modalidad:** equipo

Seleccionen entre tres y cinco problemas potenciales. Completen la misma ficha para todos antes de priorizarlos.

## Plantilla de ficha

| Campo                     | Pregunta                                                 | Respuesta |
| ------------------------- | -------------------------------------------------------- | --------- |
| Problema observado        | ¿Qué dificultad parece experimentar el usuario?          |           |
| Usuario                   | ¿Quién parece experimentar el problema?                  |           |
| Contexto                  | ¿En qué situación concreta sucede?                       |           |
| Progreso buscado          | ¿Qué intenta lograr el usuario?                          |           |
| Fricción observada        | ¿Qué obstáculo aparece?                                  |           |
| Consecuencia              | ¿Qué sucede como resultado?                              |           |
| Evidencia                 | ¿Qué señales respaldan el problema?                      |           |
| Fuentes                   | ¿De dónde proviene la evidencia?                         |           |
| Frecuencia aparente       | ¿Cuántas veces o en cuántas fuentes aparece?             |           |
| Comportamiento observable | ¿Qué hace el usuario cuando ocurre?                      |           |
| Alternativas actuales     | ¿Qué herramientas, procesos o atajos utiliza?            |           |
| Acceso a usuarios         | ¿Podemos contactar personas que vivieron esta situación? |           |
| Supuestos                 | ¿Qué creemos, pero todavía no comprobamos?               |           |
| Evidencia faltante        | ¿Qué necesitamos investigar con personas reales?         |           |

## Ejemplo abreviado

| Campo | Contenido |
|---|---|
| Problema observado | Dificultad para mantener actualizadas fechas y entregas |
| Usuario | Estudiantes que trabajan y cursan tres o más materias |
| Contexto | Semanas con entregas, exámenes y cambios simultáneos |
| Progreso buscado | Organizar sus obligaciones académicas |
| Fricción observada | La información aparece en diferentes canales |
| Consecuencia | Tiempo de búsqueda, reorganización y posibles olvidos |
| Evidencia | Comentarios en comunidades, reseñas y calendarios manuales |
| Supuesto | La dispersión de información causa entregas tardías |
| Evidencia faltante | Frecuencia, situaciones reales e impacto concreto |

## Control del equipo

- ¿Describe una dificultad y no una solución?
- ¿El usuario está definido?
- ¿El contexto es concreto?
- ¿La consecuencia está observada o señalada como inferencia?
- ¿La evidencia tiene fuentes verificables?
- ¿Los supuestos están identificados?

## Guardar en el repositorio

```markdown
## 3. Fichas de problemas

### Problema A

[PEGAR FICHA]

### Problema B

[PEGAR FICHA]

### Problema C

[PEGAR FICHA]
```

---

# Paso 4 — Limpiar y agrupar problemas con IA

**Duración:** 5 minutos  
**Modalidad:** equipo con IA

La IA ayudará a detectar problemas duplicados, síntomas, posibles causas, consecuencias y soluciones disfrazadas.

## Prompt sugerido

```text
Actuá como investigador de producto.

Te voy a proporcionar fichas de problemas obtenidas durante
un research secundario.

Tu tarea es:

1. Detectar problemas duplicados o relacionados.
2. Diferenciar problemas, síntomas, posibles causas, consecuencias
   y soluciones disfrazadas.
3. Agrupar las señales que podrían pertenecer al mismo problema.
4. Indicar qué evidencia respalda cada agrupación.
5. Identificar contradicciones entre las fuentes.
6. Señalar interpretaciones no comprobadas.
7. Identificar información faltante.

No inventes evidencia.
No propongas productos ni funcionalidades.
Conservá las fuentes originales.
Separá hechos, interpretaciones y supuestos.

Fichas de problemas:

[PEGAR FICHAS]
```

## Decisión del equipo

La IA puede sugerir. El equipo debe decidir:

- Qué problemas se combinan.
- Cuáles permanecen separados.
- Qué afirmaciones se reformulan.
- Cuáles no tienen evidencia suficiente para continuar.

## Guardar en el repositorio

```markdown
## 4. Limpieza y agrupación

- Agrupaciones sugeridas por la IA:
- Decisiones tomadas por el equipo:
- Problemas reformulados o descartados:
- Contradicciones y datos faltantes:
```

---

# Paso 5 — Comprender ICE para priorizar problemas

**Duración:** 5 minutos  
**Modalidad:** explicación y equipo

ICE suele utilizarse para priorizar ideas. En esta actividad lo adaptamos para decidir **qué problema conviene investigar primero**.

| Criterio | Significado en esta actividad |
|---|---|
| **Impact** | Importancia de las consecuencias del problema para el usuario |
| **Confidence** | Confianza en que el problema existe y es relevante, según la evidencia disponible |
| **Ease** | Facilidad para acceder a usuarios y obtener evidencia real para validarlo o refutarlo |

## Fórmula

```text
ICE = (Impact × Confidence × Ease) / 100
```

Cada criterio se puntúa de 1 a 10. La división por 100 deja el resultado en una escala de 0 a 10.

> **Ease no es facilidad para construir una solución. Es facilidad para investigar el problema.**

## Rúbrica de Impact

| Puntaje | Interpretación |
|---:|---|
| 1–2 | Molestia menor, sin consecuencias visibles |
| 3–4 | Fricción ocasional o pequeña pérdida de tiempo |
| 5–6 | Afecta claramente el progreso del usuario |
| 7–8 | Genera consecuencias importantes o repetidas |
| 9–10 | Impide un objetivo crítico o produce pérdidas graves |

## Rúbrica de Confidence

| Puntaje | Interpretación |
|---:|---|
| 1–2 | Supuesto del equipo sin evidencia |
| 3–4 | Una fuente o señales indirectas |
| 5–6 | Varias señales coincidentes |
| 7–8 | Evidencia diversa, verificable y consistente |
| 9–10 | Evidencia directa y reiterada de comportamientos reales |

En esta clase será poco habitual alcanzar 9 o 10 porque todavía no se realizaron las entrevistas reales.

## Rúbrica de Ease

| Puntaje | Interpretación |
|---:|---|
| 1–2 | Usuarios muy difíciles de identificar o contactar |
| 3–4 | Acceso limitado; investigación costosa o lenta |
| 5–6 | El equipo puede conseguir algunos participantes |
| 7–8 | Existe acceso directo al perfil buscado |
| 9–10 | Se puede entrevistar u observar inmediatamente a varios usuarios |

> **ICE ayuda a decidir qué problema investigar primero; no demuestra que el problema exista.**

---

# Paso 6 — Realizar la evaluación ICE individual

**Duración:** 5 minutos  
**Modalidad:** individual

Antes de conversar, cada integrante asigna sus puntajes y escribe una justificación breve.

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| Problema A | | | | | |
| Problema B | | | | | |
| Problema C | | | | | |

No promedien inmediatamente. Primero observen las diferencias. Una diferencia puede revelar evidencia interpretada de distintas maneras o un supuesto escondido.

## Guardar en el repositorio

```markdown
## 5. Evaluaciones ICE individuales

### Integrante 1

[PEGAR TABLA]

### Integrante 2

[PEGAR TABLA]
```

---

# Paso 7 — Realizar una evaluación ICE con IA

**Duración:** 7 minutos  
**Modalidad:** equipo con IA

La IA será un evaluador adicional. Debe utilizar exclusivamente la evidencia proporcionada.

## Prompt sugerido

```text
Actuá como investigador de producto y evaluá los siguientes
problemas mediante el método ICE.

Estamos priorizando problemas para investigar, no soluciones para construir.

Definiciones:

- Impact: importancia de las consecuencias del problema para el usuario.
- Confidence: confianza basada exclusivamente en la evidencia disponible.
- Ease: facilidad para acceder a usuarios y obtener evidencia real
  que permita validar o refutar el problema.

Asigná un puntaje del 1 al 10 para cada criterio.

Para cada puntaje:

1. Explicá la justificación.
2. Indicá qué evidencia utilizaste.
3. Marcá qué parte es una inferencia.
4. Señalá qué información falta.
5. Indicá qué hallazgo podría aumentar o reducir el puntaje.

Calculá:

ICE = (Impact × Confidence × Ease) / 100

Presentá una tabla comparativa.

No elijas automáticamente el problema ganador.
No propongas soluciones.
No inventes evidencia.
Si no hay información suficiente, indicá la incertidumbre.

Fichas de problemas:

[PEGAR FICHAS]
```

## Guardar en el repositorio

Copien la tabla de la IA, sus justificaciones y las advertencias sobre información faltante.

---

# Paso 8 — Comparar la evaluación humana con la IA

**Duración:** 5 minutos  
**Modalidad:** equipo

Comparen los puntajes individuales, sus justificaciones y la evaluación de la IA.

| Pregunta | Propósito |
|---|---|
| ¿Dónde coincidimos? | Detectar evaluaciones consistentes |
| ¿Dónde aparecen diferencias? | Hacer visibles interpretaciones distintas |
| ¿Qué puntaje está débilmente justificado? | Evitar una falsa precisión |
| ¿Qué criterio depende de supuestos? | Identificar incertidumbre |
| ¿La IA utilizó evidencia o completó vacíos? | Detectar posibles invenciones |
| ¿Ease está influyendo demasiado? | Evitar elegir solo lo más accesible |

## Guardar en el repositorio

```markdown
## 6. Comparación de evaluaciones

- Principales coincidencias:
- Principales diferencias:
- Puntajes modificados y motivo:
- Inferencias o errores detectados en la IA:
- Incertidumbres que permanecen:
```

> **La IA es un segundo evaluador, no un árbitro.**

---

# Paso 9 — Atacar al problema finalista

**Duración:** 5 minutos  
**Modalidad:** equipo con IA

El problema con mayor puntaje ICE debe ser cuestionado antes de seleccionarlo.

## Prompt sugerido

```text
Actuá como un investigador escéptico.

El problema con mayor puntaje ICE es:

[PROBLEMA]

Su ficha, evidencia y puntajes son:

[PEGAR INFORMACIÓN]

Intentá cuestionar esta priorización:

1. ¿El impacto está demostrado o inferido?
2. ¿Confundimos frecuencia con importancia?
3. ¿La evidencia proviene de fuentes suficientemente diversas?
4. ¿Podría ser un síntoma de otro problema?
5. ¿Existe una solución escondida en su redacción?
6. ¿Lo elegimos principalmente porque tenemos fácil acceso a usuarios?
7. ¿Qué explicaciones alternativas podrían existir?
8. ¿Qué evidencia contradice nuestra interpretación?
9. ¿Qué hallazgo reduciría su puntaje?
10. ¿Qué deberíamos encontrar para descartarlo?

No propongas soluciones.
No tomes la decisión final.
Tu objetivo es encontrar debilidades en nuestro razonamiento.
```

## Pregunta central

> **¿Seguimos eligiendo este problema después de intentar refutarlo?**

## Guardar en el repositorio

```markdown
## 7. Crítica del problema finalista

- Debilidades encontradas:
- Explicaciones alternativas:
- Evidencia que podría refutarlo:
- Respuesta del equipo:
```

---

# Paso 10 — Tomar la decisión humana

**Duración:** 3 minutos  
**Modalidad:** equipo

El equipo puede:

- Elegir el problema con mayor ICE.
- Elegir otro y justificar por qué el puntaje no representa bien la situación.
- Mantener dos finalistas si necesita evidencia real antes de decidir.

## Completar

```text
Priorizamos este problema porque:

El criterio ICE más sólido es:

El criterio ICE más incierto es:

La evidencia más fuerte que tenemos es:

La principal debilidad de nuestra elección es:

Podríamos estar equivocados si:

La próxima evidencia que necesitamos obtener es:
```

> **El puntaje ordena la conversación; el razonamiento justifica la decisión.**

---

# Paso 11 — Redactar el problema con ayuda de IA

**Duración:** 5 minutos  
**Modalidad:** equipo con IA

Una vez priorizado, redacten el problema sin introducir una solución.

## Prompt sugerido

```text
Ayudanos a redactar el problema priorizado sin incluir soluciones.

Usuario:
[USUARIO]

Contexto:
[CONTEXTO]

Progreso buscado:
[PROGRESO]

Fricción observada:
[FRICCIÓN]

Consecuencias:
[CONSECUENCIAS]

Evidencia disponible:
[EVIDENCIA Y FUENTES]

Supuestos pendientes:
[SUPUESTOS]

Puntajes ICE:
- Impact:
- Confidence:
- Ease:
- Resultado ICE:

Generá tres versiones:

1. Una versión breve.
2. Una versión centrada en el comportamiento del usuario.
3. Una versión completa que incluya evidencia e incertidumbre.

Reglas:

- No incluir productos ni funcionalidades.
- No decir que el usuario “necesita una app” o una herramienta.
- No inventar necesidades, comportamientos ni consecuencias.
- Separar hechos, interpretaciones y supuestos.
- Evitar palabras vagas como “mejor”, “fácil” o “eficiente”.
- No presentar la hipótesis como una verdad comprobada.
```

## Plantilla final

> **[Tipo de usuario]** tiene dificultades para **[progreso buscado]** cuando **[contexto]**, debido a **[fricción observada]**. Esto genera **[consecuencia]**. Encontramos señales en **[evidencia y fuentes]**. Sin embargo, todavía necesitamos comprobar **[supuestos pendientes]**.

## Ejemplo

> Los estudiantes universitarios que trabajan y cursan tres o más materias tienen dificultades para mantener actualizadas sus fechas y entregas cuando la información cambia y se comunica por distintos canales. Esto les genera tiempo de búsqueda, reorganización y posibles olvidos. Encontramos señales en comunidades estudiantiles, reseñas de plataformas y prácticas alternativas como calendarios propios y grupos de WhatsApp. Sin embargo, todavía necesitamos comprobar con qué frecuencia sucede y qué consecuencias produce en situaciones reales.

## Revisión final de la redacción

- ¿Describe un usuario concreto?
- ¿Incluye una situación observable?
- ¿Explica qué intenta lograr el usuario?
- ¿Muestra una fricción sin afirmar una causa no demostrada?
- ¿Distingue evidencia de supuestos?
- ¿Evita mencionar una solución?
- ¿Puede investigarse mediante entrevistas reales?
- ¿Podría demostrarse que estamos equivocados?

## Guardar en el repositorio

```markdown
## 8. Problema priorizado

### Puntaje ICE

- Impact:
- Confidence:
- Ease:
- ICE:

### Redacción final

[PEGAR PROBLEMA]

### Justificación

[PEGAR DECISIÓN DEL EQUIPO]
```

---

# Paso 12 — Construir personas sintéticas

**Duración:** 20 minutos  
**Modalidad:** equipo con IA

Construyan dos personas sintéticas deliberadamente diferentes utilizando únicamente la evidencia recopilada.

Posibles contrastes:

- Usuario intensivo y ocasional.
- Experto y principiante.
- Usuario muy afectado y moderadamente afectado.
- Usuario con recursos y usuario con restricciones.

## Prompt sugerido

```text
Construí dos personas sintéticas diferentes a partir exclusivamente
de la evidencia que te proporciono.

Problema investigado:
[PROBLEMA]

Evidencia disponible:
[EVIDENCIA]

Para cada persona describí:

1. Contexto.
2. Objetivos.
3. Comportamientos.
4. Frustraciones.
5. Restricciones.
6. Alternativas que utiliza actualmente.
7. Relación con el problema.
8. Supuestos que estamos haciendo sobre ella.
9. Preguntas que solamente una persona real podría responder.

No inventes datos demográficos innecesarios.
Marcá qué elementos provienen de evidencia y cuáles son hipótesis.
```

## Ficha de persona sintética

| Campo | Contenido |
|---|---|
| Nombre descriptivo | |
| Contexto | |
| Objetivo o progreso buscado | |
| Comportamientos | |
| Frustraciones | |
| Restricciones | |
| Alternativas actuales | |
| Evidencia que la respalda | |
| Supuestos incorporados | |
| Preguntas para personas reales | |

> **Una persona sintética genera hipótesis; una persona real genera evidencia.**

---

# Paso 13 — Entrevistar a una persona sintética

**Duración:** 15 minutos  
**Modalidad:** role-play

Un integrante entrevista a la persona sintética y otro observa y registra. La IA debe declarar cuándo una respuesta no está respaldada por la evidencia.

## Prompt de inicio

```text
Representá a la persona sintética que construimos.

Respondé únicamente con la información disponible en su ficha y en
la evidencia proporcionada. Si una respuesta requiere inventar una
experiencia, un comportamiento o una motivación, decí:
“Esto todavía debe validarse con una persona real”.

Respondé una pregunta por vez y no intentes agradar al entrevistador.
```

## Preguntas posibles

- Contame la última vez que te ocurrió.
- ¿Qué intentabas lograr?
- ¿Qué hiciste para resolverlo?
- ¿Qué fue lo más difícil?
- ¿Qué consecuencia tuvo?
- ¿Con qué frecuencia sucede?
- ¿Qué alternativa utilizás actualmente?
- ¿Por qué esa alternativa no alcanza?

## Registro del observador

- Nuevas hipótesis.
- Contradicciones detectadas.
- Preguntas que conviene mejorar.
- Afirmaciones sin respaldo.
- Respuestas que deben validarse con personas reales.

---

# Paso 14 — Preparar las entrevistas reales

**Duración:** 15 minutos  
**Modalidad:** equipo

Transformen lo aprendido en un guion de entre 8 y 10 preguntas.

## Reglas del guion

- Preguntar por experiencias pasadas y concretas.
- Pedir ejemplos y reconstruir situaciones reales.
- No presentar una solución imaginada.
- No preguntar “¿usarías...?”.
- No buscar aprobación.
- Evitar preguntas que sugieran la respuesta.
- Profundizar en comportamientos, alternativas y consecuencias.

## Plan de investigación primaria

| Decisión | Definición del equipo |
|---|---|
| Perfil de entrevistados | |
| Cantidad mínima | 3 personas |
| Forma de contacto | |
| Responsable de entrevistar | |
| Responsable de registrar | |
| Evidencia que se recopilará | |
| Fecha límite | Antes de la Clase 3 |

## Control de calidad del guion con IA

```text
Actuá como revisor de entrevistas de descubrimiento.

Revisá nuestro guion y señalá:

1. Preguntas que sugieren una respuesta.
2. Preguntas sobre opiniones futuras o intenciones hipotéticas.
3. Preguntas que presentan una solución.
4. Preguntas demasiado amplias o abstractas.
5. Oportunidades para pedir experiencias pasadas y ejemplos concretos.
6. Supuestos que el guion intenta confirmar en lugar de investigar.

No respondas las preguntas ni simules resultados.
Proponé una versión corregida y explicá cada cambio.

Problema investigado:
[PROBLEMA]

Guion:
[PEGAR GUION]
```

## Guardar en el repositorio

```markdown
## 9. Personas sintéticas y entrevistas

### Persona sintética 1

[PEGAR FICHA]

### Persona sintética 2

[PEGAR FICHA]

### Aprendizajes del role-play

- 

### Guion de entrevista real

1. 
2. 

### Plan de entrevistas

[PEGAR TABLA]
```

---

# Paso 15 — Revisar y entregar

**Duración:** 10 minutos  
**Modalidad:** equipo

## Lista de verificación

Antes de finalizar, comprueben que el archivo incluya:

- [ ] Territorio: dominio, usuario, contexto, supuestos y límites.
- [ ] Entre 5 y 10 problemas potenciales.
- [ ] Fuentes originales y verificables.
- [ ] Fichas completas de los problemas finalistas.
- [ ] Agrupaciones sugeridas por la IA y decisiones del equipo.
- [ ] Evaluaciones ICE individuales.
- [ ] Evaluación ICE de la IA con justificaciones.
- [ ] Comparación entre evaluaciones.
- [ ] Crítica escéptica del problema finalista.
- [ ] Decisión humana justificada.
- [ ] Redacción final del problema.
- [ ] Dos personas sintéticas.
- [ ] Aprendizajes del role-play.
- [ ] Guion y plan para entrevistar al menos a tres personas reales.
- [ ] Supuestos pendientes y evidencia que podría refutarlos.

## Cierre del equipo

Completen estas cuatro frases:

```text
El problema que decidimos investigar es:

La evidencia más fuerte que encontramos es:

El supuesto más riesgoso es:

La pregunta más importante para los usuarios reales es:
```

---

# Entregable para la Clase 3

Cada equipo deberá subir a su segundo cerebro:

1. El archivo `clase-02-descubrimiento.md` completo.
2. El registro de al menos tres entrevistas reales.
3. Los hallazgos, contradicciones y cambios realizados al problema inicial.

## Formato sugerido para registrar cada entrevista

```markdown
## Entrevista [NÚMERO]

- Fecha:
- Entrevistador/a:
- Perfil de la persona:
- Contexto de la conversación:

### Situaciones reales relatadas

- 

### Comportamientos y alternativas actuales

- 

### Consecuencias observadas

- 

### Frases relevantes

- 

### Contradicciones con nuestra hipótesis

- 

### Nuevos aprendizajes

- 

### Cambios que haríamos a la redacción del problema

- 
```

> **No alcanza con preguntar si alguien tiene el problema. Necesitamos reconstruir situaciones reales en las que haya ocurrido.**

---

# Criterios de evaluación

| Criterio | Evidencia esperada |
|---|---|
| Claridad del territorio | Dominio, usuario, contexto y límites definidos |
| Calidad de las fuentes | Fuentes identificables, relevantes y verificadas |
| Separación entre evidencia y supuesto | Clasificación explícita y honesta |
| Calidad de las fichas | Problemas comparables y descritos con la misma estructura |
| Uso de ICE | Puntajes justificados con evidencia, no solo números |
| Formulación del problema | Usuario, progreso, contexto, fricción, impacto e incertidumbre |
| Uso crítico de IA | Verificación, cuestionamiento y detección de vacíos |
| Personas sintéticas | Basadas en evidencia y con hipótesis señaladas |
| Investigación primaria | Experiencias reales, no opiniones futuras |
| Aprendizaje | Cambios y contradicciones documentados |

---

# Principios de la clase

1. **No comenzar por la solución.**
2. **No confundir respuestas de la IA con evidencia.**
3. **Verificar las fuentes originales.**
4. **Separar hechos, interpretaciones y supuestos.**
5. **Usar ICE para ordenar la conversación, no para fabricar certeza.**
6. **Usar personas sintéticas para mejorar preguntas, no para validar el mercado.**
7. **Buscar experiencias reales y comportamientos pasados.**
8. **Documentar contradicciones y cambios de opinión.**

> **Priorizar un problema no significa haberlo validado. Significa elegir qué incertidumbre investigar primero.**

> **La evidencia alimenta el puntaje. El puntaje ordena la conversación. El equipo toma la decisión.**

## 3. Fichas de problemas

### Problema A — Nivel de juego dispar al sumar desconocidos

| Campo | Contenido |
|---|---|
| Problema observado | Al necesitar sumar un jugador para completar el 2v2, resulta difícil saber si su nivel es compatible con el del grupo, lo que puede generar un partido desparejo. |
| Usuario | Organizador del partido / jugador que se suma como desconocido. |
| Contexto | Al grupo le falta 1 jugador y recurre a alguien fuera del círculo habitual (contacto de un contacto, WhatsApp, etc.). |
| Progreso buscado | Jugar un partido parejo y disfrutable. |
| Fricción observada | No hay forma confiable de verificar el nivel autodeclarado de un desconocido antes de aceptarlo. |
| Consecuencia | Partidos desparejos que frustran la experiencia (señalado por el fundador de GetMatch sobre diferencias "muy grandes" de nivel en partidos armados por WhatsApp). |
| Evidencia | Playtomic, iPadel y PlayMix construyen su propuesta de valor alrededor de matchmaking por nivel; Playmatch nació en Argentina específicamente para resolver esto. |
| Fuentes | bacap.com.ar (nota GetMatch); playmatch.app; comparación de features Playtomic/iPadel/PlayMix. |
| Frecuencia aparente | No cuantificada; aparece como problema estructural en al menos 4 fuentes/productos independientes. |
| Comportamiento observable | Hipótesis, no confirmado: el organizador preguntaría el nivel antes de aceptar, o directamente evitaría sumar a un desconocido. |
| Alternativas actuales | Preguntar por WhatsApp / pedir referencias de un conocido en común; categorías autodeclaradas de clubes (7ma, 6ta, 5ta). |
| Acceso a usuarios | Alto — el equipo y su círculo cercano juegan pádel de forma regular. |
| Supuestos | Que los jugadores no confían en el nivel que dice tener un desconocido, y que esa desconfianza realmente impide sumar gente nueva. |
| Evidencia faltante | Confirmar con jugadores reales si alguna vez evitaron sumar a alguien por dudas de nivel, y con qué frecuencia. |

### Problema B — Fricciones no resueltas en la reserva de canchas

| Campo | Contenido |
|---|---|
| Problema observado | Pese a existir apps de reserva, varios de los clubes grandes de CABA siguen exigiendo reservar y pagar seña por WhatsApp de forma manual. |
| Usuario | Organizador del partido. |
| Contexto | Al momento de buscar y confirmar un turno de cancha. |
| Progreso buscado | Conseguir cancha rápido, sin depender de la respuesta de alguien por chat. |
| Fricción observada | Proceso manual (mensaje + transferencia) en vez de reserva automática, incluso en clubes grandes. |
| Consecuencia | Pérdida de tiempo y dependencia de terceros para confirmar el turno. |
| Evidencia | World Padel Center y Complejo Urquiza siguen usando WhatsApp pese a existir Alquila Tu Cancha (ATC). |
| Fuentes | La Nación (2023); Pádel Speed; web de Flobi; Alquila Tu Cancha; World Padel Center Capital. |
| Frecuencia aparente | Presente en varios clubes grandes de CABA; no se cuantificó qué proporción del total. |
| Comportamiento observable | Hipótesis: usuarios enviando mensajes y esperando respuesta para confirmar turno. |
| Alternativas actuales | WhatsApp + transferencia manual; en algunos casos, ATC. |
| Acceso a usuarios | Alto. |
| Supuestos | El equipo ya marcó en el Paso 1 que este dolor sería *menor* que el de conseguir gente — este problema podría tener menor Impact relativo. |
| Evidencia faltante | Por qué los clubes prefieren WhatsApp (¿comisiones de las plataformas? ¿resistencia cultural? ¿conveniencia operativa?); si esto realmente frena a los jugadores o es solo una molestia menor. |

### Problema C — Alta vulnerabilidad al ausentismo (no-show)

| Campo | Contenido |
|---|---|
| Problema observado | La baja de un solo jugador a último momento impide jugar el partido completo, a diferencia de deportes como el fútbol 5. |
| Usuario | Organizador del grupo. |
| Contexto | Horas previas al turno de cancha ya reservado. |
| Progreso buscado | Asegurar que el partido planeado efectivamente se juegue. |
| Fricción observada | No existe una forma rápida y confiable de conseguir un reemplazo de último momento. |
| Consecuencia | Cancelación del partido o modalidades forzadas (1v2); según GetMatch, los grupos de WhatsApp "se llenan de mensajes" tratando de resolver esto último momento. |
| Evidencia | Lógica estructural del deporte (se necesitan exactamente 4) + testimonio del equipo de GetMatch. |
| Fuentes | bacap.com.ar (nota GetMatch); razonamiento estructural propio del equipo. |
| Frecuencia aparente | No cuantificada — marcado explícitamente como **supuesto**, no como hecho verificado. |
| Comportamiento observable | Hipótesis: mensajes repetidos en el grupo buscando reemplazo de urgencia. |
| Alternativas actuales | Preguntar en el grupo de WhatsApp fijo; a veces jugar modalidades reducidas (1v2). |
| Acceso a usuarios | Alto. |
| Supuestos | Que el dolor de "que se baje uno" es mayor que en otros deportes — es un supuesto explícito del equipo, no un hecho comprobado. |
| Evidencia faltante | Qué % de partidos armados por WhatsApp se cancelan definitivamente por esta razón; con qué frecuencia pasa realmente. |

### Problema D — Preocupación de seguridad/confianza al sumar desconocidos

| Campo | Contenido |
|---|---|
| Problema observado | Existe reticencia a sumar jugadores desconocidos, más ligada a la confianza deportiva (que asista, que juegue bien) que a la seguridad física. |
| Usuario | Jugador amateur. |
| Contexto | Antes de un encuentro con alguien fuera del círculo conocido. |
| Progreso buscado | Jugar con tranquilidad, sin sorpresas negativas. |
| Fricción observada | Falta de mecanismos que generen confianza sobre un desconocido antes de jugar con él. |
| Consecuencia | El grupo evita sumar gente nueva y se mantiene dentro del círculo cerrado habitual. |
| Evidencia | GetMatch se posiciona explícitamente para permitir "seguir jugando sin depender de conocer gente previamente". |
| Fuentes | bacap.com.ar (nota GetMatch); experiencia personal del equipo. |
| Frecuencia aparente | No cuantificada. |
| Comportamiento observable | Hipótesis: los jugadores prefieren cancelar el partido antes que sumar a un desconocido. |
| Alternativas actuales | Recurrir solo a contactos de conocidos en común; evitar sumar extraños directamente. |
| Acceso a usuarios | Alto. |
| Supuestos | Que el problema principal es la confianza deportiva y no la seguridad física — es una **interpretación** del equipo, todavía no confirmada con entrevistas. |
| Evidencia faltante | Si el miedo real es a que falte, a que juegue mal, o a que sea "problemático" en otro sentido. |

### Problema E — Buscar conocer gente nueva a través del deporte

| Campo | Contenido |
|---|---|
| Problema observado | Existe una motivación de conocer gente nueva a través del pádel (similar a lo ocurrido con el running) que no está resuelta dentro de la dinámica habitual de un grupo fijo. |
| Usuario | Jugador / organizador. |
| Contexto | Búsqueda de nuevas formas de socializar combinadas con la práctica deportiva. |
| Progreso buscado | Ampliar el círculo social a través del pádel. |
| Fricción observada | La dinámica actual (grupo fijo + WhatsApp) no está pensada para conocer gente nueva; las soluciones existentes ("Tinder de pádel") son eventos puntuales, no parte de la rutina semanal. |
| Consecuencia | No está claro todavía — es la señal menos desarrollada del research. |
| Evidencia | Notas periodísticas sobre eventos tipo "Tinder de pádel" / "Tinder deportivo" que combinan deporte y socialización explícita. |
| Fuentes | TN; Clarín. |
| Frecuencia aparente | Baja / anecdótica — son eventos puntuales, no un patrón de uso cotidiano documentado. |
| Comportamiento observable | Hipótesis: asistencia a eventos temáticos de socialización deportiva. |
| Alternativas actuales | Eventos puntuales tipo "Tinder deportivo"; círculos sociales ya existentes. |
| Acceso a usuarios | Medio — más difícil aislar esta motivación de la de simplemente "completar el partido". |
| Supuestos | Que esta motivación aplica también al partido de rutina semanal y no solo a eventos especiales — no confirmado, es justamente una de las preguntas pendientes del Paso 2. |
| Evidencia faltante | Si el jugador que arma el partido de los miércoles busca hacer amigos o solo alguien que le devuelva la pelota. |

---

## 4. Limpieza y agrupación

### Análisis de agrupación (IA)

**1. Relación detectada entre A, C y D — probable mismo problema con distintas facetas**

Los tres comparten disparador y evidencia: C (ausentismo) describe el disparador — se cae un jugador a último momento; A (nivel dispar) y D (confianza) describen la fricción que aparece cuando el grupo intenta resolver esa baja sumando a un desconocido. Las tres citan la misma fuente central (GetMatch / bacap.com.ar).

**Lectura posible:** no son tres problemas distintos, sino tres capas de uno solo — *"Cuando el grupo pierde un jugador, no existe una forma rápida de conseguir un reemplazo que además sea confiable (D) y de nivel adecuado (A)."* C sería la causa/gatillo; A y D, las dos dimensiones de la misma fricción.

**Riesgo de la agrupación:** podría estar mezclando dos cosas distintas si el reemplazo casi siempre sale del mismo círculo semi-conocido (no de un desconocido total), en cuyo caso D pesaría menos que A.

**2. Problema B — independiente, no relacionado con A/C/D**

No comparte usuario-en-el-momento-crítico ni fuente con los otros. El equipo ya anotó en el Paso 1 que sospecha que este dolor es menor que el de conseguir gente. **Recomendación: mantener separado.**

**3. Problema E — posible problema distinto, no una faceta de A/C/D**

Comparte el "sumar desconocidos" con A/D, pero la motivación es inversa: A/D describen una fricción que el usuario quiere evitar; E describe un deseo que el usuario busca activamente (socializar). **Recomendación: mantener separado, marcado como el más débil de los cinco.**

**4. Solución disfrazada detectada**

Ninguna ficha tiene una solución explícita colada. Sí hay un matiz a vigilar en B: dar por sentado que la alternativa deseable es la automatización — no es una solución propuesta por el equipo, pero condiciona cómo se lee el problema.

**5. Contradicciones entre fuentes**

- Concentración de fuente: A, C y D dependen fuertemente de una sola fuente comercial (GetMatch/bacap.com.ar).
- Paradoja de digitalización (B): conviven clubes con reserva 100% manual y plataformas como ATC que ya resuelven esto.
- Subjetividad del nivel (A): las categorías de clubes existen pero son autopercibidas.

**6. Interpretaciones no comprobadas**

- Que la desconfianza en el nivel autodeclarado efectivamente impide sumar gente (A).
- Que el dolor de "que se baje uno" es mayor que en otros deportes (C).
- Que el problema con desconocidos es de confianza deportiva y no de seguridad física (D).
- Que la motivación social (E) aplica al partido de rutina y no solo a eventos puntuales.

**7. Información faltante**

- Frecuencia real de cancelaciones por ausentismo.
- Si el reemplazo típico sale de un círculo semi-conocido o de un desconocido total.
- Por qué los clubes grandes resisten la reserva automática.
- Si la motivación social es parte de la rutina semanal o solo de eventos especiales.

### Decisión del equipo

Fusionamos los problemas A, C y D en uno solo ya que son capas del mismo problema y dejamos por separado B para un futuro. El problema E es un plus de la resolución del problema principal A, C y D. Sería una función a implementar a futuro pero el problema principal radica en A, C y D en conjunto.

### Problema Principal — Conseguir un reemplazo confiable y de nivel cuando falta un jugador

| Campo | Contenido |
|---|---|
| Problema observado | Cuando al grupo le falta un jugador —ya sea por una baja de último momento o por necesidad de completar el cuarteto— conseguir un reemplazo que sea a la vez confiable (que efectivamente asista, con buena predisposición) y de nivel de juego compatible resulta difícil, lo que arruina la experiencia del partido. |
| Usuario | Organizador del grupo que necesita completar el 2v2. |
| Contexto | Dos momentos conectados: (1) horas previas al turno ya reservado, cuando se cae un jugador fijo (antes Problema C); (2) el momento en que el organizador evalúa sumar a alguien fuera del círculo habitual, enfrentando dudas de nivel (antes A) y de confiabilidad/confianza (antes D). |
| Progreso buscado | Asegurar que el partido planeado se juegue, con un reemplazo que mantenga el nivel y la dinámica del grupo. |
| Fricción observada | No existe una forma rápida de conseguir, en poco tiempo, un reemplazo que sea simultáneamente de nivel compatible y confiable. El circuito actual (WhatsApp) no resuelve ninguna de las dos dimensiones. |
| Consecuencia | Cancelación del partido, modalidades forzadas (1v2), o partidos desparejos cuando sí se consigue reemplazo pero de nivel distinto. |
| Evidencia | Lógica estructural del deporte (se necesitan exactamente 4); testimonio de GetMatch; múltiples apps (Playtomic, iPadel, PlayMix, Playmatch) construyen su propuesta de valor en torno al nivel; GetMatch se posiciona explícitamente para "seguir jugando sin depender de conocer gente previamente". |
| Fuentes | bacap.com.ar (nota GetMatch); playmatch.app; comparación de features Playtomic/iPadel/PlayMix; razonamiento estructural del deporte; experiencia personal del equipo. |
| Frecuencia aparente | No cuantificada; señal estructural repetida en múltiples fuentes/productos independientes. |
| Comportamiento observable | Hipótesis: mensajes urgentes en el grupo buscando reemplazo; preguntas sobre nivel antes de aceptar a alguien; tendencia a evitar sumar a un desconocido total aun necesitándolo. |
| Alternativas actuales | Preguntar en el grupo de WhatsApp fijo; pedir referencias de un conocido en común; categorías autodeclaradas de clubes; a veces jugar modalidades reducidas (1v2). |
| Acceso a usuarios | Alto — el equipo y su círculo cercano juegan pádel de forma regular y vivieron esta situación. |
| Supuestos | (1) Que la desconfianza en el nivel autodeclarado de un desconocido efectivamente impide sumarlo. (2) Que el dolor de "se baja uno" es mayor que en otros deportes. (3) Que la dimensión dominante es la confianza deportiva, no la seguridad física. (4) Que nivel y confiabilidad pesan de forma similar en la decisión. |
| Evidencia faltante (actualizada tras entrevistas) | Qué proporción de jugadores prioriza confiabilidad por sobre nivel (o viceversa) — parece depender de la persona. Qué tan extendido está el ritual manual de doble confirmación (llamada + WhatsApp) detectado en la Entrevista 4. Si la variación en el impacto de la disparidad de nivel se explica por perfil competitivo vs. recreativo, o por otra variable. |
| Nota sobre Problema E | Conocer gente nueva queda documentado como un beneficio/función potencial derivada de resolver este problema, no como problema a investigar por separado en esta iteración. |

### Resumen de la limpieza y agrupación

- **Agrupaciones sugeridas por la IA:** A + C + D como capas de un mismo problema (nivel, ausentismo y confianza, todas ligadas a "conseguir reemplazo cuando falta un jugador").
- **Decisiones tomadas por el equipo:** Se fusionan A + C + D en el Problema Principal. Se mantiene B por separado para una futura iteración. E se reclasifica como beneficio/función derivada del Problema Principal.
- **Problemas reformulados o descartados:** A, C y D quedan reemplazados por la ficha consolidada del Problema Principal.
- **Contradicciones y datos faltantes:** fuerte dependencia de una sola fuente comercial (GetMatch); no hay evidencia de si el reemplazo típico es un desconocido total o alguien semi-conocido; no está claro cuál de las dos dimensiones (nivel o confiabilidad) pesa más.

---

## 5. Evaluaciones ICE individuales

### Franco

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| Principal (A+C+D) | 10 | 6 | 9 | 5,4 | Es el problema principal que vimos y que claramente afecta al usuario. Si pierde una persona a la hora de jugar se arruina el partido. También facilidad para encontrarlo más allá del grupo cercano. |
| B | 8 | 5 | 8 | 3,2 | Es un problema secundario atado al primero ya que cada local se maneja manualmente. Sería más eficiente para todos los complejos tenerlos todos juntos en una app que maneje las reservas directamente. |

### Lucio

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| Principal (A+C+D) | 8 | 6 | 8 | 3,84 | Es el principal problema ya que el pádel es un deporte donde varía mucho el nivel. Es crucial poder encontrar algún reemplazo de forma rápida y confiable ya que este deporte puede jugarse únicamente de a 4 personas. |
| B | 7 | 5 | 10 | 3,5 | Complica la organización del partido en gran medida ya que hay que esperar una contestación para saber si hay lugar, en lugar de reservar directamente a través de una app. |

### Lucas (corregido)

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| Principal (A+C+D) | 8 | 6 | 9 | 4,32 | Es el mayor problema ya que si una persona que se había comprometido a jugar se baja justo antes, no sabés el nivel de la persona que lo puede reemplazar y es difícil encontrar alguien confiable para jugar. |
| B | 7 | 6 | 7 | 2,94 | Es un problema para la organización ya que no hay una app que centralice la organización de canchas en distintos establecimientos. |

> Nota: los valores de ICE de Lucas fueron recalculados (8×6×9/100 = 4,32 y 7×6×7/100 = 2,94) para corregir un error de cálculo del borrador original.

### Evaluación de la IA

**Problema Principal (A+C+D fusionado)**

- **Impact: 8.** El pádel requiere exactamente 4 jugadores; la ausencia de uno impide jugar en su formato normal. Falta dato de frecuencia real.
- **Confidence: 6 (evaluación inicial, previa a entrevistas).** Hay señales coincidentes de varios actores del mercado, pero la parte de confianza/ausentismo depende casi enteramente de una fuente comercial (GetMatch).
- **Ease: 9.** La ficha declara acceso "Alto" — el equipo y su círculo cercano juegan pádel regularmente.
- **ICE = (8 × 6 × 9) / 100 = 4,32**

**Problema B (reservas)**

- **Impact: 5.** Genera pérdida de tiempo, pero el usuario igual termina consiguiendo la cancha — no hay bloqueo total. Los puntajes humanos (7-8) parecen asumir que "reserva automática" es obviamente mejor, un posible sesgo de solución.
- **Confidence: 5.** Hay observación fáctica y nombrada, pero es de 2023 y sin dato de qué porcentaje de clubes se comporta así.
- **Ease: 8.** Acceso alto declarado.
- **ICE = (5 × 5 × 8) / 100 = 2,0**

**Tabla comparativa (evaluación inicial)**

| Evaluador | Problema Principal | Problema B |
|---|---:|---:|
| Franco | 5,4 | 3,2 |
| Lucio | 3,84 | 3,5 |
| Lucas (corregido) | 4,32 | 2,94 |
| **IA** | **4,32** | **2,0** |

**Advertencias sobre información faltante:** no hay dato cuantitativo de frecuencia de cancelación por ausentismo; la evidencia de confianza y ausentismo depende casi enteramente de una fuente con interés comercial; no hay testimonio directo de jugadores sobre el dolor de reservar por WhatsApp.

---

## 6. Comparación de evaluaciones

- **Principales coincidencias:** La IA, como nosotros, piensa que el Problema Principal (A+C+D) es el mayor problema. Coincide con nosotros en los puntajes de Impact, Confidence y Ease.
- **Principales diferencias:** Al problema B le puso una inferencia de casi 1 punto menos en Impact que nosotros, sugiriendo que no causa un impacto que llegue a bloquear del todo la actividad en comparación al Problema Principal.
- **Puntajes modificados y motivo:** La IA modificó el puntaje de Impact en el problema B y tiene razón, ya que la búsqueda de cancha no es algo que se repita siempre, sino algo que ocurre alguna vez y finalmente se consigue. Esto lo diferencia de algo que afecta gravemente el progreso del usuario.
- **Inferencias o errores detectados en la IA:** Se basa mucho en las evidencias comerciales encontradas en lugar de pensar por sí sola. Es cierto que nosotros contamos con experiencia personal o de conocidos que la IA no conoce, y en internet no se encuentra demasiada información al respecto.
- **Incertidumbres que permanecen:** ¿Realmente tenemos la evidencia necesaria del problema? Sabemos que existe, pero falta ver si es lo suficientemente grande como para desarrollarlo.

---

## 7. Crítica del problema finalista

El problema con mayor ICE es el **Problema Principal (A+C+D fusionado)** — 4,32 según la IA, entre 3,84 y 5,4 según el equipo.

1. **¿El impacto está demostrado o inferido?** Mayormente inferido. Lo demostrado como hecho es la lógica estructural del deporte (4 jugadores exactos); el impacto emocional/de frustración está inferido a partir del testimonio de un solo actor comercial (GetMatch).
2. **¿Confundimos frecuencia con importancia?** Pregunta sin resolver — la frecuencia no está cuantificada.
3. **¿La evidencia proviene de fuentes suficientemente diversas?** No. A, C y D dependen en gran medida de una única fuente con incentivo comercial directo.
4. **¿Podría ser un síntoma de otro problema?** Posible: el problema de fondo podría ser que el grupo de jugadores habituales es demasiado chico.
5. **¿Existe una solución escondida en su redacción?** No — la ficha se mantiene en términos de dificultad, sin nombrar features.
6. **¿Lo elegimos principalmente porque tenemos fácil acceso a usuarios?** Vale la pena la autocrítica: el Ease alto (8-9) es el criterio donde menos se divergió, y podría estar inflando la confianza general en el problema.
7. **¿Qué explicaciones alternativas podrían existir?** Que el problema real sea de coordinación de horarios; que el dolor esté concentrado en grupos nuevos o poco consolidados; que nivel y confianza no pesen igual.
8. **¿Qué evidencia contradice nuestra interpretación?** Ninguna hasta este punto — pero eso es una señal de alerta (nadie buscó activamente evidencia en contra), no de fortaleza.
9. **¿Qué hallazgo reduciría su puntaje?** Que en las entrevistas la mayoría consiga reemplazo sin drama; que el reemplazo salga casi siempre de un círculo semi-conocido; que GetMatch tenga poca adopción real.
10. **¿Qué deberíamos encontrar para descartarlo?** Que en 3+ entrevistas reales aparezca que rara vez falta un jugador, que el reemplazo se consigue fácil, y que el nivel dispar se toma con humor.

**Pregunta central — ¿Seguimos eligiendo este problema después de intentar refutarlo?**

Con lo que había hasta ese momento, el problema se sostenía como hipótesis a investigar, no como hecho comprobado: la lógica estructural del deporte es un hecho sólido e independiente de cualquier fuente comercial. Pero la severidad real, la frecuencia y qué fricción pesa más seguían dependiendo casi enteramente de una fuente con interés en vender la respuesta — exactamente la incertidumbre que las entrevistas reales del Paso 14 tenían que resolver.

---

## 8. Problema priorizado

### Decisión del equipo (Paso 10)

**Priorizamos este problema porque:** es el más común que observamos y de mayor alcance para investigar y desarrollar una solución. Además, es el de mayor impacto en las personas ya que a nadie le agrada que se le suspenda un partido por falta de gente o jugar con alguien que consiguió que no es del nivel del resto.

**El criterio ICE más sólido es:** el Ease, ya que es fácil acceder a respuestas de usuarios porque se les pregunta directamente.

**El criterio ICE más incierto es:** el Confidence, ya que no se sabía si la evidencia era suficiente para certificar el problema.

**La evidencia más fuerte que tenemos es:** experiencia personal de personas del ámbito, a confirmar con entrevistas.

**La principal debilidad de nuestra elección es:** que en ese momento faltaba esa evidencia, aunque el problema elegido era claramente más factible de investigar que el otro.

**Podríamos estar equivocados si:** el ausentismo de los jugadores no es tan frecuente y la disparidad de nivel no frustra al resto del grupo.

**La próxima evidencia que necesitamos obtener es:** entrevistas a jugadores regulares sobre cómo viven el problema y cómo hacen para solucionarlo o para que les pase menos.

No se evaluó el Problema B con este mismo nivel de detalle porque afecta a otro tipo de usuario (intermediario entre canchas y jugadores, no el jugador directo).

### Puntaje ICE final

| Criterio | Promedio equipo (Paso 6) | IA — evaluación inicial (Paso 7) | IA — actualizado tras 4 entrevistas | Referencia |
|---|---:|---:|---:|---|
| Impact | 8,7 | 8 | 8 | Alto — bloqueo estructural del partido, confirmado mas no universal en las entrevistas |
| Confidence | 6 | 6 | **7** | Sube por evidencia real, independiente y diversa (4 entrevistas), aunque con matices y variación entre personas |
| Ease | 8,7 | 9 | 9 | Alto — se consiguieron 4 respuestas sin fricción |
| **ICE** | **~4,5** | **4,32** | **5,04** | (8 × 7 × 9) / 100 |

### Redacción final (v4, actualizada con 4 entrevistas reales)

El organizador —o cualquier jugador de pádel amateur que quiere jugar— tiene dificultades para completar el cuarteto necesario cuando no puede resolverlo dentro de su círculo de conocidos directo. Esto ocurre en tres contextos conectados: (1) al armar el partido desde cero con el grupo habitual y faltar uno o dos jugadores; (2) cuando un jugador fijo se baja a último momento —a veces por motivos ajenos a su voluntad y a veces por simple bajada de compromiso, lo cual genera un malestar marcado en el grupo—; y (3) cuando el jugador quiere jugar ese día pero no tiene grupo armado, llevándolo en algunos casos a sustituir el pádel por otra actividad o a reprogramar.

Cuando el reemplazo debe salir de fuera del cuarteto fijo, casi nunca es un desconocido total: suele venir avalado por alguien del círculo extendido (un compañero en común, un grupo grande de WhatsApp) que ya tiene una noción aproximada de su nivel. Aun así, persiste una doble incertidumbre al aceptarlo: (a) si va a presentarse de forma confiable —algunos grupos ya mitigan esto con rituales manuales como llamar por teléfono para confirmar asistencia y reconfirmar por WhatsApp hora y lugar—, y (b) si su forma de jugar (posicionamiento, estilo, previsibilidad en la cancha) va a ser compatible con la del resto, más allá de compartir una categoría de nivel similar.

El impacto de esta segunda incertidumbre no es uniforme: para algunos jugadores, sumar a alguien de nivel distinto no afecta la experiencia; para otros, arruina la dinámica competitiva del partido. Lo que sí aparece de forma más consistente entre los entrevistados es el malestar ante la bajada de último momento en sí misma, más allá de si se consigue o no un reemplazo.

Encontramos señales en la lógica estructural del deporte (requiere exactamente 4 jugadores), en cuatro entrevistas reales a jugadores regulares que relataron partidos cancelados, reprogramados o complicados por esta razón, y en múltiples productos del mercado (Playtomic, iPadel, PlayMix, Playmatch, GetMatch) que construyen su propuesta de valor alrededor de conectar jugadores por nivel y confiabilidad. Sin embargo, todavía necesitamos comprobar: con qué frecuencia ocurre cada uno de los tres contextos y cuál pesa más para la mayoría de los jugadores; si la variación en el impacto de la disparidad de nivel depende del perfil del grupo (competitivo vs. recreativo); y qué proporción de grupos ya usa rituales manuales de confirmación como el detectado en la Entrevista 4.

### Revisión final ✓

| Control | ¿Cumple? |
|---|---|
| ¿Describe un usuario concreto? | ✅ Jugador/organizador de grupo de pádel amateur |
| ¿Incluye situaciones observables? | ✅ Tres contextos concretos documentados |
| ¿Explica qué intenta lograr? | ✅ Completar el cuarteto y que el partido se juegue |
| ¿Muestra fricción sin afirmar causa no demostrada? | ✅ "no existe una forma de verificar..." |
| ¿Distingue evidencia de supuestos? | ✅ Sección "todavía necesitamos comprobar" |
| ¿Evita mencionar una solución? | ✅ No se menciona app ni funcionalidad |
| ¿Puede investigarse con entrevistas reales? | ✅ Acceso alto — el equipo juega pádel regularmente |
| ¿Podría demostrarse que estamos equivocados? | ✅ Sí — si el círculo conocido siempre alcanza para resolver, o si la Entrevista 3 resulta representativa de la mayoría |

---

## 9. Personas sintéticas y entrevistas

### Persona sintética 1 — Matías (el organizador del grupo fijo)

| Campo | Contenido |
|---|---|
| Nombre descriptivo | El organizador del grupo fijo que queda colgado cuando falta uno |
| Contexto | Juega pádel amateur de forma regular —una o dos veces por semana— con el mismo cuarteto desde hace años. Él es el que siempre reserva la cancha, arma el grupo de WhatsApp y coordina el horario. |
| Objetivo / progreso buscado | Que el partido del miércoles a las 20hs se juegue, tal como estaba planeado, sin dramas. |
| Comportamientos | Cuando falta uno, empieza a mandar mensajes en el grupo de WhatsApp. Si nadie puede, sale a buscar por fuera: pregunta a conocidos de conocidos, pide referencias. Antes de aceptar a alguien nuevo, le pregunta "¿qué nivel jugás?" por chat. Si no consigue nadie a tiempo, cancela o van a jugar "de cualquier manera" (1v2 o mirando). |
| Frustraciones | No saber si el nivel que declara el candidato es real. No tener certeza de si la persona va a aparecer. El tiempo que consume resolver esto por WhatsApp cuando ya debería estar yendo a la cancha. La culpa de cancelar un partido que todos esperaban. |
| Restricciones | Su círculo de conocidos que juegan pádel es limitado. Fuera de ese círculo, no tiene forma de filtrar candidatos por nivel ni por confiabilidad. |
| Alternativas actuales | Grupo de WhatsApp fijo. Pedir referencias a un conocido en común. A veces jugar 1v2. A veces cancelar. Categorías autodeclaradas de clubes (7ma, 6ta, 5ta) como proxy de nivel. |
| Evidencia que la respalda | Testimonio de GetMatch. Lógica estructural del deporte. Experiencia personal del equipo. Apps del mercado que construyen su propuesta alrededor de este dolor. |
| Supuestos incorporados | Que Matías es el que carga con la gestión del grupo. Que la búsqueda del reemplazo la hace él solo y no el grupo en conjunto. Que la categoría de nivel autodeclarada no le genera suficiente confianza. |
| Preguntas para personas reales | ¿Con qué frecuencia les pasa que falta uno? ¿Cuántas veces terminaron cancelando vs. jugando de todas formas? ¿Alguna vez aceptaron a alguien que resultó de nivel muy distinto? ¿Qué dato les daría suficiente confianza para aceptar a un desconocido sin preguntarle nada? |

### Persona sintética 2 — Valentina (la jugadora sin grupo fijo)

| Campo | Contenido |
|---|---|
| Nombre descriptivo | La jugadora sin grupo fijo que quiere jugar pero no tiene con quién |
| Contexto | Juega pádel de forma más esporádica o retomó hace poco. No tiene un cuarteto consolidado. Cada vez que quiere organizar algo tiene que empezar desde cero. |
| Objetivo / progreso buscado | Jugar pádel ese día o ese fin de semana, contra gente de su nivel, sin depender de que coincidan cuatro personas conocidas al mismo tiempo. |
| Comportamientos | Revisa si algún conocido tiene lugar en su partido. Manda mensajes a varios contactos. Si no arma nada, no juega. A veces asiste a eventos tipo "Tinder de pádel", pero son eventos puntuales, no su rutina. |
| Frustraciones | La dependencia de que cuatro agendas coincidan al mismo tiempo. No poder jugar de forma más autónoma. La incomodidad de sumarse a un partido de desconocidos sin saber cómo van a recibirla. |
| Restricciones | Red social de pádel pequeña o poco activa. Sin un grupo fijo, cada partido requiere organización desde cero. |
| Alternativas actuales | Mensajes por WhatsApp a conocidos. Asistencia a eventos puntuales de socialización deportiva. Esperar a que alguien la invite. No jugar ese día. |
| Evidencia que la respalda | Notas TN y Clarín sobre "Tinder de pádel". GetMatch posicionado para "jugar sin depender de conocer gente previamente". Lógica estructural del deporte. |
| Supuestos incorporados | Que la motivación social y deportiva coexisten en ella. Que la incomodidad con desconocidos es una barrera real. |
| Preguntas para personas reales | ¿Cuántas veces por mes querés jugar pero no llegás a organizar nada? ¿Alguna vez fuiste a jugar con gente que no conocías? ¿Qué te frena más: el nivel o no saber si son buena onda? |

### Persona sintética 3 — Rodrigo (el jugador que quiere rivales de nivel)

| Campo | Contenido |
|---|---|
| Nombre descriptivo | El jugador frecuente que tiene grupo pero quiere jugar contra rivales de nivel similar |
| Contexto | Juega regularmente con su cuarteto fijo, que suele estar completo. El problema no es el ausentismo, sino encontrar rivales externos de nivel compatible o manejar el desbalance de nivel dentro del grupo. |
| Objetivo / progreso buscado | Jugar partidos parejos, ya sea encontrando rivales externos o reorganizando el grupo cuando el nivel interno se desbalancea. |
| Comportamientos | Juega el partido semanal habitual. Cuando quiere algo más competitivo, busca en grupos de WhatsApp, pregunta en el club o participa en torneos informales. |
| Frustraciones | Monotonía de jugar siempre contra los mismos. Partidos desparejos cuando logra armar algo con gente de afuera. Falta de un mecanismo para verificar el nivel del rival. |
| Restricciones | Búsqueda de rivales externos depende de la red del club o del azar. Categorías autodeclaradas no garantizan partidos parejos. |
| Alternativas actuales | Torneos informales del club. Preguntar en el club por grupos disponibles. Categorías del club como proxy de nivel. |
| Evidencia que la respalda | Apps del mercado con propuesta de matchmaking por nivel. Testimonio de GetMatch sobre diferencias de nivel "muy grandes". |
| Supuestos incorporados | Que el deseo de jugar contra rivales externos es frecuente, no ocasional. Que las categorías del club no son suficientes. |
| Preguntas para personas reales | ¿Alguna vez buscaron jugar contra otro grupo desconocido? ¿El nivel autodeclarado del rival resultó lo esperado? |

> ⚠️ **Nota metodológica:** las tres personas son hipótesis construidas desde evidencia secundaria y estructural. Ningún comportamiento, frecuencia ni motivación fue confirmado con usuarios reales antes de las entrevistas.

### Aprendizajes del role-play

No se realizó esta instancia (paso omitido por decisión del equipo). Sin embargo, las entrevistas reales cumplieron una función equivalente: la Entrevista 1 confirmó parte de la hipótesis de "Matías" (aval del círculo extendido), mientras que la Entrevista 4 mostró que la persona sintética subestimaba el peso de la dimensión de confiabilidad/asistencia frente al nivel.

### Guion de entrevista real — 10 preguntas

**Apertura y contexto**
1. Contame cómo es tu rutina de pádel hoy: ¿con quién jugás, con qué frecuencia, y cómo organizan los partidos normalmente?
2. Pensando en los últimos dos o tres meses, ¿hubo algún partido que no se jugó o que se complicó para armarlo? Contame qué pasó.

**El momento de la fricción**
3. Cuando les faltó alguien, ¿qué hicieron para intentar resolverlo? Contame el proceso paso a paso.
4. En ese momento, ¿tuvieron que sumar a alguien que no conocían o con quien no habían jugado antes? ¿Cómo fue eso?
5. Cuando apareció un candidato que no conocían bien, ¿qué cosas evaluaron antes de decirle que sí?

**Consecuencias reales**
6. ¿Cómo terminó esa situación? ¿Jugaron, cancelaron, o jugaron de otra forma?
7. En los casos en que sí jugaron con alguien nuevo o de nivel incierto, ¿cómo fue el partido?

**Explorar el otro contexto**
8. ¿Alguna vez quisiste jugar pádel pero no tenías con quién armar el partido? ¿Qué hiciste en esos casos?

**Alternativas y workarounds actuales**
9. ¿Qué tan seguido usás alguna app, plataforma o recurso (más allá de WhatsApp) para organizar partidos o encontrar con quién jugar?

**Cierre**
10. Si pudieras cambiar una sola cosa de cómo organizás o conseguís partidos hoy, ¿qué sería?

### Plan de entrevistas

| Decisión | Definición del equipo |
|---|---|
| Perfil de entrevistados | Jugadores de pádel amateur que juegan de forma regular (mínimo 1 vez por semana) con grupo fijo o semi-fijo en CABA |
| Cantidad mínima | 3 personas (idealmente 1 por cada perfil sintético) |
| Forma de contacto | Círculo cercano del equipo + conocidos de conocidos que jueguen pádel |
| Responsable de entrevistar | Rotar — cada integrante hace al menos 1 entrevista |
| Responsable de registrar | Un integrante observa y toma notas mientras el otro entrevista |
| Evidencia que se recopilará | Situaciones reales de cancelación o búsqueda de reemplazo; comportamientos concretos de resolución; qué dimensión pesa más (nivel vs. confiabilidad) |
| Fecha límite | Antes de la Clase 3 |

### Registro de entrevistas reales

#### Entrevista 1

- **Fecha:** 28/08/2026
- **Entrevistador/a:** [Pendiente — no registrado]
- **Perfil de la persona:** Juega 1-2 veces/semana con un grupo grande (~10 personas) de colegio, facultad y familia.
- **Contexto de la conversación:** Respuesta recibida por formulario escrito, no en modalidad de conversación en vivo.

**Situaciones reales relatadas:** Complicaciones "cada tanto" por falta de un jugador con poco tiempo de anticipación, o por falta de canchas a 15 min. Quiso jugar pádel un par de veces sin lograr armar cuarteto y terminó yéndose a jugar al tenis con un amigo.

**Comportamientos y alternativas actuales:** Escribe al grupo grande de WhatsApp (~10 personas); siempre alguien se suma. Nunca usó ninguna app.

**Consecuencias observadas:** El partido se jugó sin drama cuando sumaron a alguien del grupo grande. Cuando no consiguió armar pádel, cambió de deporte en vez de insistir.

**Frases relevantes (parafraseado):** Indicó que sumar a alguien nuevo del grupo es divertido y no representa un problema; siempre hay alguien del trío original que ya conoce al cuarto jugador y sabe de antemano si juega bien.

**Contradicciones con nuestra hipótesis:** El "desconocido" nunca es un desconocido total — siempre hay alguien del trío original que ya conoce al cuarto jugador. La fricción de "no poder verificar nivel" no aparece acá porque el filtro ya existe en la red extendida.

**Nuevos aprendizajes:** El círculo real no es el cuarteto fijo, es una red extendida que actúa como verificación informal. Cuando el pádel no se arma, el usuario puede sustituirlo por otra actividad.

**Cambios que haríamos a la redacción del problema:** Matizar que el candidato externo suele venir avalado por alguien del círculo extendido, no de la nada.

#### Entrevista 2

- **Fecha:** 28/08/2026
- **Entrevistador/a:** [Pendiente — no registrado]
- **Perfil de la persona:** Juega con gente del barrio/facultad, 1 vez por semana.
- **Contexto de la conversación:** Respuesta recibida por formulario escrito.

**Situaciones reales relatadas:** Un jugador se enfermó y no consiguieron reemplazo a tiempo → no se jugó. Otra vez alguien se quedó sin auto → tampoco se jugó. Sumaron a un desconocido en dos ocasiones: una salió bien (mismo nivel); otra el nivel era más bajo y "dificultaba el juego fluido".

**Comportamientos y alternativas actuales:** Escribió por WhatsApp o habló con gente en la facultad. Antes de aceptar evaluaba: que tenga ropa y pala, que sepa jugar "más o menos bien", que esté cerca. Nunca usó apps "porque no conoce ninguna".

**Consecuencias observadas:** Con nivel dispar, "el que jugaba con él perdía el partido" y no generó la competencia divertida que tiene el pádel a nivel parejo.

**Frases relevantes (parafraseado):** Remarcó que jugar con alguien de nivel mucho más bajo le quita la gracia competitiva al pádel.

**Contradicciones con nuestra hipótesis:** Ninguna — es el caso que más sostiene la hipótesis original tal cual está redactada.

**Nuevos aprendizajes:** El filtro real antes de sumar a alguien es básico (ropa, pala, cercanía, nivel aproximado) — no aparece un chequeo de "confiabilidad/seguridad" como dimensión propia.

**Cambios que haríamos a la redacción del problema:** Sostiene la fricción de nivel con fuerza; la de confianza/seguridad casi no aparece en este caso.

#### Entrevista 3

- **Fecha:** 28/08/2026
- **Entrevistador/a:** [Pendiente — no registrado]
- **Perfil de la persona:** Juega con amigos de la facultad cada 2 semanas.
- **Contexto de la conversación:** Respuesta recibida por formulario escrito.

**Situaciones reales relatadas:** La complicación reciente fue el clima (cancha no disponible), no ausentismo de jugador. Cuando falta alguien, escriben a amigos con interés en el deporte — en este caso no tuvieron que sumar a un desconocido. Quiso jugar sin cuarteto y directamente no jugó.

**Consecuencias observadas:** "Cuando no conozco el nivel de la otra persona se juega a la intensidad que se suele jugar. No afecta a la experiencia."

**Frases relevantes (parafraseado):** Señaló que jugar sin saber el nivel del otro no cambia su experiencia del partido.

**Contradicciones con nuestra hipótesis:** Contradice directamente el Impact esperado de la disparidad de nivel — para este jugador no representa un problema. La complicación real relatada fue de disponibilidad de cancha, más cercana al Problema B.

**Nuevos aprendizajes:** No todos los jugadores viven la disparidad de nivel como un problema — podría depender del perfil competitivo vs. recreativo. La disponibilidad real de canchas (clima) es otra causa de complicaciones, distinta a la documentada en B.

**Cambios que haríamos a la redacción del problema:** El impacto de la disparidad de nivel no debería presentarse como universal.

#### Entrevista 4

- **Fecha:** 29/08/2026
- **Entrevistador/a:** [Pendiente — no registrado]
- **Perfil de la persona:** Juega con amigos del barrio los fines de semana, ~1 vez cada 3 semanas. Reserva cancha del barrio sin costo de reserva.
- **Contexto de la conversación:** Respuesta recibida por formulario escrito.

**Situaciones reales relatadas:** Complicaciones por jugadores en período de exámenes o con otros planes — más un choque de agenda que un ausentismo repentino puro.

**Comportamientos y alternativas actuales:** Busca primero un jugador cercano geográficamente. Prioriza explícitamente que el jugador asista por sobre juzgar su nivel. Lo llama por teléfono para confirmar asistencia, y después reconfirma por WhatsApp hora y lugar — un ritual manual de doble confirmación.

**Consecuencias observadas:** Jugaron y la pasaron bien, aun sumando jugadores de menor experiencia relativa.

**Frases relevantes (parafraseado):** Describió que lo desafiante no es tanto el nivel general sino no poder anticipar el estilo de juego de alguien nuevo — dónde se va a parar, si es agresivo en la red, si va a buscar las pelotas que pican en el vidrio. También expresó rechazo fuerte a que alguien se baje del partido con poca anticipación.

**Contradicciones con nuestra hipótesis (y con nuestra lectura tras 3 entrevistas):** Con solo 3 entrevistas parecía que la dimensión de confianza/confiabilidad casi no aparecía. Acá aparece con mucha fuerza, incluso por encima del nivel en el orden de prioridades de este jugador.

**Nuevos aprendizajes:** La "confianza" tiene dos capas distintas: (1) confianza en que la persona va a asistir (ausentismo), y (2) confianza en cómo va a jugar / su estilo (predictibilidad en la cancha). Existe un workaround manual ya en uso (llamada + reconfirmación por WhatsApp). Refuerza con fuerza el dolor de la bajada de último momento en sí misma.

**Cambios que haríamos a la redacción del problema:** Reincorporar con fuerza la dimensión de confiabilidad, matizada en dos sub-capas, y sumar el hallazgo del ritual manual de doble confirmación como alternativa actual ya en uso.

### Síntesis comparativa de las 4 entrevistas

| | E1 | E2 | E3 | E4 |
|---|---|---|---|---|
| Nivel dispar afecta la experiencia | No | Sí, fuerte | No, contradice | Sí, reformulado como "estilo/predictibilidad" |
| Confiabilidad/asistencia es un criterio fuerte | No mencionado | Parcial | No aplica | Sí, priorizado por sobre el nivel |
| Candidato viene avalado por red extendida | Sí | Parcial | No aplica | Sí |
| Quiere jugar sin grupo → sustituye o reprograma | Sí (cambia de deporte) | Sí (no jugó) | Sí (no jugó) | Sí (cambia de fecha) |
| Usa apps | Nunca | Nunca | Nunca | Nunca |

### Hallazgos, contradicciones y cambios realizados al problema inicial

- El problema estructural (deporte de 4 exactos) se confirma con evidencia real e independiente en 4 de 4 entrevistas.
- La dimensión de confianza/confiabilidad, que con 3 entrevistas parecía débil, se revalidó con fuerza en la 4ª — se corrige la lectura anterior del equipo.
- Se descubrió que "confianza" tiene dos capas distintas (asistencia vs. estilo de juego), que antes se trataban como una sola.
- El impacto de la disparidad de nivel no es universal: 2 de 4 lo confirman como fuente de mala experiencia, 2 de 4 dicen que no les afecta.
- Se descubrió un workaround manual ya en uso (llamada + doble confirmación por WhatsApp) no documentado en el research secundario.
- Cambio de redacción: se incorporó la doble capa de confianza y se suavizó la afirmación de que la disparidad de nivel siempre arruina la experiencia.

---

## Estacionamiento de soluciones

*Ideas de producto que surgieron durante la investigación. Se registran para no perderlas, pero no se desarrollan todavía — el foco sigue en validar el problema.*

- "Se podría integrar todo en una aplicación" (mención colada en la evidencia original del Problema B, Paso 2 — se corrigió del research y se movió acá).
- Supuesto implícito de que "reserva automática" es la alternativa deseable frente al proceso manual de los clubes (detectado como posible sesgo de solución en el Paso 4).
- Entrevistado 1: "una app para conseguir personas de mi nivel o mejores que quieran jugar."
- Entrevistado 2: "Probaría alguna app donde puedas conseguir cancha como también gente de un nivel parecido para jugar."
- Entrevistado 3: "Capaz armaría un grupo de WhatsApp así la comunicación es más fluida."

---

## Paso 15 — Checklist antes de subir (a completar por el equipo)

- [x] Entre 5 y 10 problemas potenciales.
- [x] Fuentes originales y verificables.
- [x] Fichas completas de los problemas finalistas.
- [x] Agrupaciones sugeridas por la IA y decisiones del equipo.
- [x] Evaluaciones ICE individuales.
- [x] Evaluación ICE de la IA con justificaciones.
- [x] Comparación entre evaluaciones.
- [x] Crítica escéptica del problema finalista.
- [x] Decisión humana justificada.
- [x] Redacción final del problema.
- [x] Dos (tres) personas sintéticas.
- [ ] Aprendizajes del role-play — *paso omitido por decisión del equipo, documentado como tal.*
- [x] Guion y registro de entrevistas a personas reales (4 de 3 mínimas).
- [x] Supuestos pendientes y evidencia que podría refutarlos.

### Cierre del equipo (completar antes de subir)

```text
El problema que decidimos investigar es:

La evidencia más fuerte que encontramos es:

El supuesto más riesgoso es:

La pregunta más importante para los usuarios reales es:
```