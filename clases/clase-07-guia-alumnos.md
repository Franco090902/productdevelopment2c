# Clase 7 — Del aprendizaje al primer MVP

## Guía para alumnos · 90 minutos

Hoy van a construir una primera versión que una persona pueda usar para obtener un resultado concreto. Van a hacerlo conversando con la IA: dar contexto, acordar qué construir, probar lo recibido y pedir mejoras.

**Objetivo: aprender a dirigir a la IA para construir, probar e iterar un MVP que entregue un valor concreto.**

## Cómo vamos a trabajar con la IA

La clase empieza con una conversación. La IA recupera el documento de Clase 6, propone un recorrido y espera que el equipo lo confirme o ajuste. Recién después de acordar el alcance y los datos, le piden construir. Al recibir la primera versión, la prueban y le dan una devolución para iterar.

**No peguen todos los pedidos juntos. Háganlos uno por uno y respondan a la IA entre pasos.** Si construye de entrada, pídanle: «Antes de construir, revisemos juntos el recorrido y el alcance. Hacenos una pregunta por vez».

## Qué necesitan

- El archivo `aprendizaje-y-mvp.md` de la Clase 6.
- La herramienta de IA con la que van a construir y, si ya existe, acceso al prototipo o código del equipo.
- Una persona que pueda probar la versión al final, aunque sea otro compañero.

Usen la herramienta que tengan disponible. Si permite skills, activen `construir-mvp-con-ia`. Si no, usen los pedidos de esta guía. Si la IA sólo conversa y no construye, pídanle el pedido completo para llevar a una herramienta que sí pueda hacerlo.

## Qué entregan

1. **Una versión accesible del MVP**, por enlace o con instrucciones sencillas para ejecutarla.
2. **Un archivo `mvp.md` breve** en su repositorio, con lo que funciona, la prueba realizada y el siguiente ajuste.

Una versión que usa datos de demostración debe identificarlos. Que funcione técnicamente no demuestra todavía que sea útil para el usuario.

## Recorrido de la clase

| Momento | Qué vamos a lograr | Tiempo |
|---|---|---:|
| 1. Recuperar | Usuario, valor y acción central claros | 10 min |
| 2. Diseñar | Un recorrido de principio a fin | 15 min |
| 3. Recortar | Alcance y datos definidos | 15 min |
| 4. Construir e iterar | Primera versión funcionando | 35 min |
| 5. Probar y registrar | Observaciones y próximo ajuste | 15 min |

## 1. Recuperar el punto de partida

Compartan el archivo de la Clase 6 y escriban:

```text
Leé nuestro aprendizaje-y-mvp.md. Recuperá el usuario, su situación,
el valor que queremos entregar, la única acción central del MVP,
la decisión que tomamos y la duda que sigue abierta.
No inventes datos ni des por validado lo que todavía no sabemos.
Si falta una decisión indispensable, preguntanos de a una.
Vamos a construir con [HERRAMIENTA].
Todavía no construyas: primero conversemos el recorrido y el alcance.
```

Corrijan lo que la IA haya entendido mal. No vuelvan a completar el canvas ni a relatar todo el proyecto.

Si todavía falta evidencia, mantengan esa duda explícita. Pueden construir para seguir aprendiendo; no presenten esa construcción como una validación que todavía no ocurrió.

## 2. Diseñar un recorrido mínimo

Pidan:

```text
Proponé el recorrido más corto para entregar ese valor:
cómo empieza el usuario, qué hace y qué resultado obtiene.
Definí cómo comprobaremos que funciona y qué debería pasar
si faltan datos o el usuario ingresa algo inválido.
No agregues funcionalidades fuera de la acción central.
Esperá nuestra respuesta para acordar o ajustar el recorrido.
```

Revisen: **¿la persona obtiene un resultado útil al terminar?** Decidan con la IA el recorrido que van a construir.

Ejemplo ilustrativo: un estudiante consulta el último reporte por sector y su hora de actualización para decidir a qué sector dirigirse. El criterio técnico es mostrar el reporte disponible o informar claramente que no hay datos. Predecir disponibilidad futura es otro alcance y necesita datos adicionales. Que el reporte ayude a decidir requiere una prueba con una persona.

## 3. Recortar el alcance y resolver los datos

Pidan:

```text
Para ese recorrido, separá en una tabla:
qué debe funcionar ahora, qué podemos operar manualmente o simular
y qué queda afuera. Indicá qué datos necesitamos y de dónde saldrán.
Si algo esencial no está disponible, proponé una alternativa sencilla.
```

No hace falta automatizar todo. Una operación manual puede sostener el primer MVP si permite entregar el valor acordado.

En el ejemplo de estacionamiento, ¿quién informa la ocupación y cuándo se actualiza? Si no hay una fuente real, una pantalla con números inventados sólo permite probar el recorrido. Debe mostrar **“Datos de demostración”** y no prometer disponibilidad real.

**Regla de alcance:** si una función no ayuda a completar la acción central o a comprobar su resultado, déjenla para después. Revisen especialmente registro de usuarios, pagos, paneles e integraciones.

## 4. Construir y mejorar conversando con la IA

Cuando el recorrido y el alcance estén claros, escriban:

```text
Construí la primera versión con el recorrido y alcance que acordamos.
Usá la alternativa más sencilla que podamos ejecutar en esta herramienta.
Respetá la procedencia de los datos y señalá lo manual o simulado.
Incluí una respuesta clara cuando falten datos o haya una entrada inválida.
Al terminar, indicá cómo abrirla y probá el recorrido principal.
Decinos qué verificaste y qué falta probar. No agregues funciones nuevas.
```

Abran la versión y úsenla. No se queden mirando la pantalla ni acepten “listo” como prueba de funcionamiento.

### Cómo darle una devolución útil

Usen cuatro datos: **qué hice, qué esperaba, qué pasó y qué evidencia tengo**.

| Devolución poco útil | Devolución que permite avanzar |
|---|---|
| “No funciona.” | “Elegí el Sector Norte y presioné Consultar. Esperaba ver el último reporte, pero no apareció ningún resultado. Adjunto captura.” |
| “Está feo.” | “El resultado queda debajo de la pantalla y no se ve sin bajar. Mostralo junto al botón de consulta.” |
| “Hacelo mejor.” | “Cuando no hay datos muestra cero lugares. Necesitamos que diga ‘Sin información disponible’.” |

Después pidan:

```text
Corregí este problema concreto. Explicá brevemente qué cambiaste
y cómo podemos comprobarlo. Conservá el recorrido que ya funciona.
```

Vuelvan a probar. Trabajen sobre una prioridad por vez. Si la IA agrega algo innecesario, pregunten: **“¿Esto ayuda a completar la acción central que acordamos?”**

Si cambian de herramienta o conversación, lleven el contexto, la versión actual y el problema concreto. Nunca compartan contraseñas ni claves dentro del pedido.

## 5. Probar con otra persona y registrar

Den una tarea, por ejemplo: “Estás por salir hacia la universidad. Usá esta versión para consultar la información y decidir a qué sector irías”. No le indiquen dónde tocar.

Observen:

- ¿Pudo completar la acción? ¿Necesitó ayuda?
- ¿Entendió el resultado y sus limitaciones?
- ¿Qué hizo con la información? ¿Qué obstáculo encontraron?

Registren intentos y acciones completadas, aunque sea manualmente. Para explorar el valor, observen qué resultado obtuvo la persona; un clic por sí solo no lo demuestra. Identifiquen si probó un compañero o alguien del segmento objetivo. Si no hubo prueba, déjenla pendiente.

Pueden pedirle a la IA:

```text
Estas son nuestras observaciones: [OBSERVACIONES REALES].
Separá problemas de funcionamiento, dificultades de uso y dudas sobre el valor.
Proponé un próximo ajuste. No inventes causas ni resultados.
```

Decidan el ajuste. Si queda tiempo, impleméntenlo y vuelvan a probarlo.

## Plantilla del entregable: mvp.md

Completen con ayuda de la IA. Manténganlo breve; no hace falta copiar toda la conversación.

```markdown
# Nuestro primer MVP
- Usuario y situación:
- Valor y acción central:
- Acceso o forma de ejecución:
- Recorrido: inicio → acción → resultado.
- Funciona / manual o simulado / fuera de alcance:
- Evidencia disponible y duda pendiente:
- Qué medimos: usuarios que intentan y completan la acción; resultado útil observado.

## Prueba e iteración
- Quién probó (rol) y tarea:
- Qué ocurrió y cómo lo sabemos:
- Devolución concreta que dimos a la IA:
- Cambio realizado y resultado de la nueva prueba:
- Próximo ajuste:
```

## Antes de entregar

- [ ] Podemos acceder a la versión y completar la acción central.
- [ ] Sabemos qué funciona y qué depende de operación manual o simulación.
- [ ] Probamos el recorrido principal y qué ocurre cuando faltan datos o la entrada es inválida.
- [ ] Registramos una devolución concreta a la IA y qué pasó después, o marcamos lo pendiente.
- [ ] Registramos la prueba con otra persona o la dejamos explícitamente pendiente.
- [ ] Conservamos una duda sobre el valor y elegimos el próximo ajuste.

**La IA propone y construye. El equipo dirige, prueba y decide.** En la próxima clase vamos a mejorar esta versión usando lo que observemos al utilizarla.
