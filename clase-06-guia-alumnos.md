# Clase 6 — Aprender, decidir y arrancar el MVP

## Guía rápida para alumnos

## Para qué sirve esta clase

Ya hicieron un experimento. Hoy no vamos a analizarlo como una auditoría: vamos a usarlo para decidir qué hacer y empezar a preparar el MVP.

Sólo vamos a responder cuatro preguntas:

1. ¿Qué queríamos comprobar?
2. ¿Qué pasó?
3. ¿Qué aprendimos?
4. ¿Qué hacemos ahora?

> **No importa si el resultado fue bueno o malo. Importa que nos ayude a decidir el próximo paso.**

La IA puede ordenar la información y proponer opciones. El equipo decide.

---

## Lo que necesitan

Tengan a mano:

- **diseno-experimento.md** de la Clase 5;
- **registro-experimento.md** de la Clase 5;
- si los tienen, capturas, notas o resultados complementarios.

No resuman el experimento de memoria. La IA leerá esos archivos y recuperará lo importante. Si sólo tienen uno de los dos, compartan ese.

---

## Entregable

Creen un archivo corto en su repositorio:

~~~
aprendizaje-y-mvp.md
~~~

Debe poder leerse en una pantalla. No agreguen anexos ni tablas extra.

---

## Agenda — 90 minutos

| Momento | Pregunta | Tiempo |
|---|---|---:|
| 1 | La IA recupera qué hicieron | 10 min |
| 2 | ¿Qué pasó? | 20 min |
| 3 | ¿Qué aprendimos? | 20 min |
| 4 | ¿Qué hacemos ahora? | 20 min |
| 5 | ¿Qué MVP vamos a empezar? | 20 min |

---

# 1. La IA recupera qué hicieron

Compartan o adjunten los archivos de Clase 5. Escriban:

~~~text
Leé nuestro diseno-experimento.md y registro-experimento.md.
Recuperá qué queríamos comprobar, cuál era el criterio, qué hicimos y
qué resultados quedaron registrados. Después decinos si estamos listos
para analizar, si falta completar la prueba o si falta ordenar el registro.
No inventes datos.
~~~

La IA debe devolver:

~~~markdown
## Lo que entiendo de su experimento

- Querían comprobar:
- El criterio de éxito era:
- Construyeron o probaron:
- El resultado registrado fue:

## Chequeo rápido

- Hipótesis definida antes de probar: Sí / No / No aparece en el archivo
- Criterio definido antes de probar: Sí / No / No aparece en el archivo
- Hay resultados u observaciones: Sí / No
- Estado de la iteración: lista para analizar / falta completar la prueba /
  falta ordenar el registro
~~~

Revisen esa síntesis. Corrijan sólo lo que esté mal.

> La IA recupera el recorrido; el equipo confirma que representa lo que realmente hizo.

---

# 2. ¿Qué pasó?

Registren hasta tres hechos. Un hecho es algo que vieron, midieron o registraron; no una explicación.

~~~markdown
## 2. Resultado

| Qué pasó | Cómo lo sabemos |
|---|---|
| | |
| | |
| | |

- Resultado frente al criterio: se alcanzó / no se alcanzó / todavía no sabemos.
- Algo que salió distinto de lo esperado:
~~~

## Uso de IA

Pueden pedir:

~~~text
Ordená estos resultados en hasta tres hechos observables.
No inventes datos ni expliques por qué ocurrieron todavía.

[PEGAR RESULTADOS]
~~~

> Si tienen datos simulados o una prueba técnica, indíquenlo. Demuestran que algo puede funcionar, no que los usuarios lo quieran o lo usen.

---

# 3. ¿Qué aprendimos?

Escriban una sola frase que empiece así:

> **Aprendimos que...**

Y otra:

> **Todavía no sabemos si...**

~~~markdown
## 3. Aprendizaje

- Aprendimos que:
- Todavía no sabemos si:
~~~

No busquen una explicación perfecta. Si el resultado no permite concluir, el aprendizaje puede ser simplemente:

> “Todavía no reunimos suficiente evidencia para responder la pregunta.”

Eso también sirve: evita que el equipo tome una decisión basada en una suposición.

---

# 4. ¿Qué hacemos ahora?

Elijan **una** opción:

| Si pasó esto… | Elegimos… |
|---|---|
| La prueba todavía no llegó a la cantidad o tiempo acordado | **Seguir probando** |
| La prueba tuvo un error técnico o una instrucción confusa | **Arreglar la prueba** |
| La prueba ya no puede enseñarnos algo nuevo | **Probar otro camino** |
| La evidencia ya alcanza para continuar | **Avanzar** |

~~~markdown
## 4. Decisión

- Elegimos:
- Porque:
- Próximo paso:
~~~

### Si eligen “probar otro camino”

No descarten automáticamente el problema. Cambien primero la forma de resolverlo, el canal, el segmento o el alcance.

> **Cambiar de camino no es empezar de cero. Es conservar lo aprendido y probar algo mejor.**

---

# 5. ¿Qué MVP vamos a empezar?

No diseñen diez pantallas ni una lista de funcionalidades. Definan el valor mínimo que el MVP debe entregar.

~~~markdown
## 5. Punto de partida del MVP

- Usuario:
- Situación:
- Valor que queremos entregar:
- Una sola cosa que el MVP debe permitir hacer:
- Qué vamos a medir cuando lo use una persona:
~~~

## Ejemplo: estacionamiento universitario

| Campo | Ejemplo |
|---|---|
| Usuario | Estudiante que llega a primera hora |
| Situación | Sale hacia la universidad sin saber dónde estacionar |
| Valor | Reducir la incertidumbre antes de salir |
| Una cosa que hace el MVP | Muestra disponibilidad estimada para un horario |
| Qué medimos | Si consulta la información y cambia su decisión de llegada |

> **Si una función no entrega este valor o no ayuda a medirlo, no entra en el MVP.**

En la próxima clase vamos a diseñar y construir esta versión mínima.

---

## Entrega

Antes de terminar, revisen:

- [ ] La hipótesis y el criterio son los originales.
- [ ] Registramos hechos, no explicaciones disfrazadas.
- [ ] Escribimos un aprendizaje y una duda que sigue abierta.
- [ ] Elegimos un solo próximo paso.
- [ ] El MVP tiene un usuario, un valor y una única acción central.

## Cierre

> **El experimento no existe para defender una idea. Existe para que la siguiente versión sea mejor que la primera.**
