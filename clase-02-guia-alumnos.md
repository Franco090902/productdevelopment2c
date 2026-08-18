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

