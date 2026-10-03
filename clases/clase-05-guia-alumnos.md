# Clase 5 – Experimentos funcionales: construir para medir

## Propósito

En la Clase 4 reunimos evidencia sobre el cliente y el problema. En esta clase vamos a transformar una incertidumbre abierta en un experimento funcional, rápido, barato y medible.

> **No construimos para lanzar. Construimos para aprender.**

La inteligencia artificial permitirá investigar alternativas, sintetizar información, construir instrumentos y organizar resultados. El equipo deberá interpretar, elegir, controlar y decidir.

> **La IA opera y propone. El equipo piensa y decide.**

---

## Del modelo tradicional al modelo AI-Native

### Modelo tradicional

```text
Cliente
↓
Problema
↓
Idea
↓
MVP
↓
Medir
↓
Aprender
```

Este modelo sigue siendo válido. La IA no lo reemplaza: reduce el tiempo y el costo entre sus etapas.

### Ciclo AI-Native

```text
Cliente
↓
IA ayuda a investigar
↓
Equipo interpreta
↓
IA sintetiza
↓
Equipo decide
↓
IA construye
↓
Usuarios prueban
↓
IA analiza el feedback
↓
Equipo aprende
↓
Nuevo experimento
```

La IA acelera el ciclo. El equipo conserva el criterio, la dirección y la responsabilidad.

---

## Objetivos

Al finalizar, cada equipo podrá:

- identificar una incertidumbre relevante a partir de la evidencia;
- formular una pregunta de aprendizaje observable;
- comparar diferentes tipos de experimentos;
- definir métrica y criterio antes de construir;
- construir con IA un instrumento digital funcional;
- realizar una prueba piloto;
- registrar mediciones, errores y evidencia sin alterarlos;
- reconocer cuándo un experimento dejó de producir aprendizaje;
- iterar o pivotar sin reiniciar el proceso completo;
- dejar preparada la información para aprender y decidir en la Clase 6.

---

## Experimento funcional y MVP

| Experimento funcional | MVP |
|---|---|
| Responde una pregunta | Entrega valor de manera sostenida |
| Puede simular partes | Requiere una experiencia mínimamente completa |
| Debe ser barato y descartable | Supone mayor compromiso e inversión |
| Mide una incertidumbre | Evalúa uso y valor en condiciones más reales |
| Puede vivir pocas horas o días | Debe mantenerse durante un período |

En esta clase no construiremos el MVP. Construiremos un instrumento para producir evidencia.

---

## Entradas

Cada equipo deberá tener disponibles:

- `lean-product-canvas.md`;
- entregable de validación de la Clase 4;
- evidencias originales: notas, entrevistas, observaciones, datos o registros;
- hipótesis e incertidumbres que continúan abiertas.

La Clase 5 no vuelve a investigar el problema desde cero. Parte de lo aprendido y pregunta:

> **¿Qué necesitamos comprobar ahora para reducir la siguiente incertidumbre?**

---

## Uso de la skill

Iniciar una conversación nueva con la skill `ejecutar-experimento-producto` y adjuntar los archivos de entrada.

```text
Quiero diseñar el experimento funcional de la Clase 5.
Leé el Lean Product Canvas y el entregable de validación de la Clase 4.
Guiame paso a paso y hacé una sola pregunta por vez.
Si un experimento deja de producir aprendizaje, no me envíes al inicio
del proceso ni descartes automáticamente el problema. Ayudame a identificar
qué supuesto quedó cuestionado, qué debemos conservar y cuál es el siguiente
experimento más barato para el mismo problema.
```

La skill debe detenerse en las decisiones importantes. No permitan que la IA recorra todo el proceso sin intervención del equipo.

---

## Actividad paso a paso

### Paso 1 – Reconstruir el aprendizaje anterior

La IA extraerá cliente, problema, evidencia, hipótesis, contradicciones e incertidumbres abiertas. El equipo comprobará que la síntesis sea fiel a las fuentes.

**Decisión humana:** confirmar o corregir la síntesis.

### Paso 2 – Elegir una pregunta de aprendizaje

Seleccionar una sola incertidumbre. Debe poder responderse mediante una acción, observación o medición.

Evitar: “¿Nuestra idea funcionará?”.

Preferir:

- “¿Los estudiantes consultan la disponibilidad antes de iniciar el viaje?”
- “¿El modelo clasifica correctamente al menos 8 de 10 escenarios definidos previamente?”

**Decisión humana:** elegir qué necesita aprender el equipo ahora.

### Paso 3 – Comparar experimentos

La IA propondrá dos o tres alternativas diferentes. Para cada una deberá indicar:

- funcionamiento;
- acción del usuario o resultado técnico;
- dato producido;
- parte real y simulada;
- tiempo, costo y dificultad;
- calidad y limitaciones de la evidencia.

Pueden utilizarse landing, *fake door*, prototipo navegable, aplicación sencilla, chatbot, concierge digital, *Wizard of Oz*, automatización parcial o modelo con datos simulados.

**Decisión humana:** elegir el experimento que produzca evidencia suficiente con menor inversión.

### Paso 4 – Definir el contrato experimental

Antes de construir, completar:

| Campo | Pregunta |
|---|---|
| Hipótesis | ¿Qué creemos? |
| Aprendizaje | ¿Qué necesitamos saber? |
| Participantes o escenarios | ¿Con quién o con qué probaremos? |
| Acción o resultado | ¿Qué observaremos? |
| Métrica | ¿Qué registraremos? |
| Criterio | ¿Qué resultado consideraremos suficiente? |
| Duración | ¿Cuándo termina la prueba? |
| Limitación | ¿Qué no puede demostrarnos? |

No modificar el criterio después de ver los resultados para hacer que la prueba parezca exitosa.

**Decisión humana:** confirmar el contrato antes de construir.

### Paso 5 – Reducir el alcance

| Categoría | Significado |
|---|---|
| Imprescindible | Sin esto no se puede ejecutar o medir |
| Simulable | Puede resolverse manualmente o con datos ficticios |
| Fuera de alcance | No contribuye al aprendizaje actual |

> **Si una función no genera evidencia, no entra en el experimento.**

**Decisión humana:** aprobar el alcance mínimo.

### Paso 6 – Construir con IA

La IA puede crear código, notebooks, interfaces, formularios, textos, automatizaciones, datos simulados y mecanismos de registro.

El equipo debe verificar:

- ejecución de principio a fin;
- funcionamiento de la medición;
- identificación de partes simuladas;
- ausencia de funciones innecesarias;
- cuidado de datos personales;
- comprensión de lo construido.

### Paso 7 – Realizar el piloto

Probar internamente o con uno o dos usuarios para detectar errores técnicos, instrucciones confusas, mediciones faltantes o tareas imposibles.

El piloto permite reparar el instrumento. No habilita a modificar la hipótesis o el criterio para acomodarlos a los resultados.

### Paso 8 – Ejecutar y registrar

Durante la prueba:

- presentar una tarea concreta;
- no explicar cómo resolverla;
- observar antes de preguntar;
- registrar acciones, tiempos, errores y abandonos;
- pedir autorización antes de grabar;
- no recolectar información personal innecesaria;
- conservar anomalías y resultados negativos.

Las personas sintéticas sirven para preparar la prueba, pero no reemplazan evidencia real cuando la hipótesis se refiere al comportamiento de usuarios.

### Paso 9 – Activar el loop de iteración o pivot

Un experimento no debe repetirse solamente porque el resultado no fue favorable. Antes de insistir, el equipo debe identificar **qué dejó de funcionar como supuesto** y si otra prueba puede producir evidencia diferente.

> **No volvemos al comienzo. Volvemos al supuesto que la evidencia puso en duda.**

La IA debe comparar los resultados con el contrato experimental y clasificar el estado:

- **Respaldada por esta prueba:** alcanzó el criterio definido.
- **No respaldada por esta prueba:** produjo evidencia válida, pero no alcanzó el criterio.
- **Inconclusa:** la ejecución o los datos no permiten comparar el resultado con el criterio.

Esta clasificación no autoriza a descartar automáticamente el problema ni toda la solución.

#### Diagnosticar antes de cambiar

La IA debe hacer estas preguntas de a una y esperar la respuesta del equipo:

1. ¿El experimento produjo evidencia válida?
2. ¿Falló el instrumento o quedó cuestionada la hipótesis?
3. ¿La métrica representaba realmente el comportamiento buscado?
4. ¿La muestra, el canal y el contexto fueron adecuados?
5. ¿Repetir exactamente la misma prueba produciría información nueva?
6. ¿Existe otro experimento más barato o directo para el mismo problema?

#### Si nadie realiza la acción

Un resultado como **cero clics, cero aperturas o cero respuestas** no explica por sí solo por qué falló la prueba. Únicamente permite afirmar que, con ese mensaje, canal, contexto y mecanismo, no se observó el comportamiento esperado.

Antes de cambiar el problema, la IA debe ayudar al equipo a distinguir estas barreras, una por vez y sin inventar motivaciones:

| Barrera posible | Evidencia necesaria | Próxima prueba posible |
|---|---|---|
| Exposición | ¿Las personas realmente recibieron o vieron el estímulo? | Verificar alcance o probar otro canal |
| Comprensión | ¿Entendieron qué se les proponía y qué podían hacer? | Prueba moderada de comprensión |
| Confianza | ¿El mensaje y el actor resultaron creíbles? | Wizard of Oz conversacional o prueba de credibilidad |
| Interés | ¿Comprendieron y confiaron, pero decidieron no actuar? | Probar otro mecanismo de valor para el mismo problema |

No repetir el mismo *fake door* hasta identificar qué evidencia nueva produciría la repetición.

#### Elegir el nivel correcto de cambio

| Situación encontrada | Qué se conserva | Qué se cambia | Decisión |
|---|---|---|---|
| Error técnico, tarea confusa o medición defectuosa | Problema, hipótesis y criterio | Instrumento | **Corregir y repetir** |
| Evidencia insuficiente o contexto poco representativo | Problema e hipótesis | Método, muestra, canal o contexto | **Iterar el experimento** |
| Evidencia válida contradice la hipótesis probada | Problema respaldado | Hipótesis de valor, comportamiento, solución o mecanismo | **Pivotar** |
| Evidencia respalda la hipótesis | Aprendizaje acumulado | Incertidumbre prioritaria | **Avanzar al siguiente experimento** |
| Varias pruebas contradicen la existencia o relevancia del problema | Evidencia y trazabilidad | Segmento o formulación del problema | **Actualizar el Canvas** |

> **Cambiar solamente el instrumento es iterar. Cambiar una hipótesis, solución, mecanismo o segmento es pivotar.**

El comportamiento por defecto será conservar el problema validado y buscar otra forma de reducir la incertidumbre. No se vuelve a la Clase 1: el Lean Product Canvas se actualiza en el mismo punto del recorrido y conserva el historial.

#### Control de resolubilidad

Un problema puede existir y ser relevante, pero no resultar abordable por el equipo dentro del alcance del laboratorio. Antes de forzar una solución, responder:

1. ¿Podemos intervenir sobre alguna causa o consecuencia concreta?
2. ¿Tenemos acceso a los usuarios, actores, datos y permisos necesarios?
3. ¿Existe una intervención digital compatible con las restricciones del curso?
4. ¿Podemos probarla con el tiempo, capacidades y recursos disponibles?

Si las respuestas son negativas, registrar:

> **El problema continúa respaldado, pero no es resoluble por este equipo dentro del alcance actual.**

La IA debe proponer estas salidas y esperar la decisión humana:

| Salida | Qué se conserva | Qué cambia |
|---|---|---|
| Cambiar el mecanismo | Problema y segmento | Forma de intervención |
| Reducir el alcance | Problema general | Parte abordada |
| Cambiar usuario o actor | Problema general | Persona capaz de actuar o decidir |
| Pivotar el problema | Dominio y aprendizajes | Oportunidad seleccionada |
| Cerrar el proyecto | Evidencia y trazabilidad | No continúa la construcción |

Si se pivota el problema, volver a las oportunidades de la Clase 2 mediante una **ruta rápida**: seleccionar la nueva oportunidad, actualizar la hipótesis y revisar sólo las partes afectadas del Canvas. No repetir mecánicamente todo el curso.

#### Cuándo dejar de insistir

Detengan el experimento actual cuando:

- alcanzó la cantidad de participantes, escenarios o ejecuciones acordada;
- repite resultados sin agregar información nueva;
- la métrica no representa el comportamiento buscado;
- depende de condiciones que el equipo no puede obtener;
- el costo de repetir supera el aprendizaje esperado;
- otra prueba puede responder la pregunta de forma más directa o barata.

> **Repetir sin producir información nueva no es perseverar: es dejar de aprender.**

#### Diseñar la siguiente prueba

La IA debe proponer entre dos y tres próximos experimentos para el mismo problema. Para cada uno indicará:

- qué supuesto específico pone a prueba;
- qué cambia respecto del experimento anterior;
- qué evidencia nueva podría producir;
- tiempo, costo y dificultad;
- qué resultado obligaría a revisar nuevamente la hipótesis.

Después recomendará la alternativa más barata que pueda generar aprendizaje diferente y se detendrá para que el equipo decida.

**Decisión humana:** continuar, corregir, iterar, pivotar o actualizar el problema.

#### Registro obligatorio del loop

```markdown
## Iteración [NÚMERO]

- Experimento anterior:
- Resultado: respaldada, no respaldada o inconclusa:
- Evidencia producida:
- Por qué no sirve seguir insistiendo de la misma manera:
- Supuesto que quedó cuestionado:
- Qué conservamos:
- Qué modificamos:
- Tipo de cambio: corrección, iteración o pivot:
- Próximo experimento:
- Qué evidencia diferente esperamos obtener:
- Nuevo contrato experimental:
```

No borren ni reescriban el resultado anterior. Cada vuelta debe conservarse para mostrar cómo evolucionó el razonamiento.

### Paso 10 – Limitar el loop

El loop no significa experimentar indefinidamente durante la clase.

- Ejecuten una primera prueba completa.
- Si todavía hay tiempo y la siguiente prueba es pequeña, realicen una segunda vuelta.
- Si requiere nuevos participantes, datos o preparación, déjenla diseñada y lista para ejecutar.
- No agreguen funcionalidades para intentar salvar una solución que no produjo evidencia.
- No cambien simultáneamente hipótesis, segmento, canal, métrica e instrumento: después no podrán saber qué generó el nuevo resultado.

La Clase 5 termina cuando el equipo puede explicar:

1. qué aprendió del experimento;
2. por qué corresponde continuar o dejar de insistir;
3. qué supuesto conserva;
4. qué supuesto modifica;
5. cuál es la siguiente prueba más barata.

---

## Ejemplo: estacionamiento universitario

Una incertidumbre posible es si la información anticipada modifica la decisión antes de llegar.

La IA podría proponer:

1. Landing con horarios y solicitud de alerta.
2. Aplicación sencilla con disponibilidad simulada.
3. Chatbot que recomienda un horario o acceso.

Si el equipo elige la aplicación, podría construir solamente:

- selección del horario de llegada;
- disponibilidad simulada;
- una recomendación;
- registro de consulta o acción.

No necesita login, perfil, pagos, reservas reales, sensores ni predicciones avanzadas si no son indispensables para la hipótesis.

Otra hipótesis podría probarse con un modelo sencillo en Google Colab, diez escenarios definidos previamente y un criterio de ocho resultados coherentes sobre diez. Ese experimento produce evidencia técnica, no evidencia de adopción.

---

## Entregables

### 1. Instrumento funcional

Enlace, archivo o instrucciones para ejecutar el experimento.

### 2. `diseno-experimento.md`

Debe documentar evidencia de partida, contrato experimental, experimento elegido, partes reales y simuladas, alcance mínimo, protocolo y decisiones humanas.

### 3. `registro-experimento.md`

Debe conservar resultados iniciales, mediciones, errores, anomalías, observaciones y evidencias complementarias.

### 4. Registro de iteraciones y pivots

Si el equipo corrige, itera o pivota, debe agregar al mismo registro:

- por qué dejó de insistir con el experimento anterior;
- qué supuesto quedó cuestionado;
- qué parte del problema y del Canvas conserva;
- qué cambió y en qué nivel;
- alternativas propuestas por la IA;
- decisión tomada por el equipo;
- contrato del siguiente experimento.

No creen un proyecto nuevo ni eliminen los resultados anteriores. El historial de iteraciones forma parte del entregable.

La interpretación final se realizará en la Clase 6. Si el equipo ya formula una lectura inicial, debe separarla claramente de la evidencia.

---

## Criterios de revisión

- [ ] El experimento parte de evidencia de la Clase 4.
- [ ] Trabaja una sola incertidumbre relevante.
- [ ] Permite observar una acción o resultado.
- [ ] La métrica y el criterio se definieron antes de probar.
- [ ] El instrumento funciona de principio a fin.
- [ ] La medición queda registrada.
- [ ] Las simulaciones están identificadas.
- [ ] El alcance es mínimo.
- [ ] La IA propuso y construyó; el equipo evaluó y decidió.
- [ ] Los errores y resultados negativos se conservaron.
- [ ] El equipo distinguió entre corregir, iterar y pivotar.
- [ ] Si dejó de insistir, explicó por qué repetir no produciría información nueva.
- [ ] La siguiente prueba conserva el problema o justifica explícitamente su revisión.
- [ ] El historial de experimentos anteriores permanece visible.
- [ ] No se inventó evidencia.
- [ ] El resultado puede analizarse en la Clase 6.

---

## Cierre

La velocidad no surge de adivinar mejor. Surge de disminuir el costo de estar equivocados y aumentar la frecuencia con la que aprendemos.

> **El mejor experimento no es el más impresionante. Es el que produce evidencia útil con la menor inversión.**

La Clase 5 termina con un experimento funcional, mediciones registradas y una decisión de continuidad. Si el resultado requiere otra vuelta, el nuevo experimento queda ejecutado o diseñado sin reiniciar el proceso. La Clase 6 comenzará preguntando:

> **¿Qué aprendimos y cuál es la próxima iteración más barata?**

> **Cada experimento termina. El aprendizaje continúa.**
