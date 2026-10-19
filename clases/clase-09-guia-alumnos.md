# Clase 9 — ¿Cómo se sostiene nuestro producto?

## Guía para alumnos · Desarrollo de Productos · 40 minutos

Ya construyeron un MVP y trabajaron sobre su uso y valor. Ahora vamos a aplicar lo visto en la clase de finanzas: **¿quién financiaría este valor y cuánto cuesta entregarlo?**

La IA ayuda a identificar costos, calcular y cuestionar supuestos. El equipo elige el modelo, revisa los números y decide qué comprobar. No buscamos un plan financiero completo ni demostrar que el negocio ya funciona.

## Qué necesitan y qué entregan

Compartan con la IA `mvp.md` y `pruebas-y-mejoras-mvp.md`, o sus equivalentes. Si falta alguno, alcanza con explicar usuario, valor, funcionamiento y evidencia disponible. No hay que rehacer el canvas.

**Entregable:** `economia-del-producto.md`, de aproximadamente una página, en el repositorio. Incluirá pagador, unidad, ingresos y costos estimados, contribución o costo unitario, adquisición inicial y un supuesto económico por probar. No necesitan una planilla ni copiar toda la conversación.

## Cómo empezar con IA

Si permite skills, activen **explorar-economia-producto**. También pueden adjuntar su `SKILL.md` como instrucciones. Si no tienen esa posibilidad, adjunten esta guía y usen el mismo pedido:

```text
Vamos con la clase 9: explorar la economía de nuestro producto.
Leé esta guía y los archivos del MVP que compartimos.
Acompañanos paso a paso, con una pregunta por vez. Recuperá lo que ya
esté documentado y esperá nuestras decisiones antes de avanzar.
No armes todo el análisis de una vez ni inventes precios, costos o clientes.
Separá datos observados, referencias, estimaciones y pendientes.
Queremos terminar con economia-del-producto.md breve.
Empezá resumiendo nuestro producto y preguntando por la primera decisión
pendiente: quién pagaría o financiaría el valor que ofrecemos.
```

**Conversen con la IA entre pasos.** Si ofrece un modelo completo de entrada, pídanle volver a la primera decisión que todavía no tomaron.

## 1. ¿Quién pagaría y por qué? · 5 minutos

Distingan quién usa, quién recibe valor y quién paga o financia. No siempre son la misma persona.

Definan un pagador posible y qué beneficio justificaría su aporte. Marquen si es una hipótesis o si existe evidencia. Que alguien haya usado el MVP no demuestra que pagaría.

Si el usuario no paga, exploren quién podría financiarlo y con qué incentivo. Si no lo saben, registren el pendiente: no inventen una suscripción o un sponsor para completar la tabla.

## 2. ¿Cuál es nuestra unidad? · 5 minutos

Elijan una unidad que puedan explicar: una operación, un servicio realizado, un cliente por mes o una cuenta institucional por mes.

**Ingresos y costos deben referirse a la misma unidad.** Definan moneda, fecha y período. En un marketplace, el ingreso propio puede ser la comisión; no es automáticamente el monto total de la compra.

Pedido posible:

> Proponé dos unidades que tengan sentido para nuestro producto y explicá cuál facilita entender los ingresos y costos. Esperá que elijamos.

## 3. ¿Cuánto entra y cuánto cuesta? · 10 minutos

Estimen un ingreso por unidad y los pocos costos relevantes. Cada cifra debe indicar su origen:

- **Dato observado:** registro real del equipo.
- **Referencia:** fuente identificable y fecha; puede no ser comparable con su caso.
- **Estimación:** supuesto del equipo, con motivo o rango.
- **Pendiente:** falta información para asignar un valor.

Un precio que propone la IA es una estimación, no evidencia de disposición a pagar. Si usan tarifas actuales, verifiquen la fuente; si no pueden consultarlas, déjenlas pendientes o trabajen con supuestos identificados.

| Tipo de costo | Qué considerar |
| --- | --- |
| Variable por unidad | Consumo de IA, mensajes, comisiones y trabajo manual necesario para atender otra unidad. |
| Fijo por período | Costos que no cambian con ese volumen: por ejemplo, un abono mensual dentro de su capacidad. |
| Inicial | Construcción o puesta en marcha; registrarlo aparte. |

La categoría depende de cómo opera el producto. Para consumo, calculen **cantidad por unidad × precio por uso**. Para atención manual, registren minutos y un valor horario estimado. Si hoy trabajan gratis, distingan el desembolso actual del costo de sostener ese esfuerzo. Un plan gratuito para el prototipo no garantiza una operación gratuita a mayor escala.

## 4. ¿Qué deja cada unidad? · 8 minutos

**Contribución por unidad = ingreso por unidad − costo variable por unidad.**

La contribución sirve para cubrir costos fijos y, después, generar ganancias. No equivale a ganancia neta ni asegura que haya clientes.

Ejemplo exclusivamente ilustrativo, en pesos por cliente por mes:

| Concepto | Base estimada | Escenario exigente |
| --- | ---: | ---: |
| Ingreso | $10.000 | $10.000 |
| Costo variable | $3.000 | $5.000 |
| Contribución | $7.000 | $5.000 |

Aquí solo cambia el costo variable. Todavía faltaría cubrir los costos fijos; estos números no son precios recomendados ni referencias de mercado.

Con su IA, calculen un escenario base y otro exigente, cambiando **un supuesto** elegido por el equipo. Revisen la cuenta y expliquen qué cambia en su decisión. Si faltan datos, dejen la fórmula y el dato pendiente; no usen cero para representar lo desconocido.

**Si aún no hay ingreso o financiación definidos:** calculen costo por unidad y comparen escenarios de costo. Pueden estimar financiación necesaria para un volumen explícitamente supuesto, separando inversión inicial. Dejen la contribución pendiente. Un ahorro potencial para una institución no es un ingreso cobrado por el producto.

## 5. ¿Cómo conseguimos los primeros clientes? · 5 minutos

Definan un canal inicial y qué dinero o tiempo requeriría. No necesitan diseñar una campaña completa.

Si tienen una base suficiente, pueden estimar:

**CAC = costo de adquisición atribuible / nuevos clientes adquiridos.**

Usen el mismo período y distingan clientes pagadores de visitas o registros. Si las cifras son supuestos, indiquen “CAC estimado”; con cero clientes no se puede calcular. No confundan ausencia de gasto publicitario con ausencia de esfuerzo comercial.

Solo si tienen contribución mensual positiva por cliente, pueden calcular un **repago simplificado = CAC / contribución mensual por cliente**. El resultado son meses y supone que el cliente permanece y la contribución se mantiene. No calculen con ingresos en lugar de contribución. Si faltan datos, indiquen qué averiguar. **No se exige CAC, repago ni LTV sin base suficiente.**

## 6. ¿Qué necesitamos comprobar primero? · 7 minutos

Elijan un único supuesto económico frágil: quién pagaría, precio aceptable, tiempo de atención, consumo de IA o costo de conseguir clientes.

Pidan:

> Con nuestros números y pendientes, proponé dos pruebas baratas para investigar el supuesto más frágil. Indicá qué observaríamos y qué no demostraría cada una. Esperá nuestra elección.

Definan prueba, participante o fuente, acción observable, registro, criterio previo, responsable y fecha. Una entrevista puede aclarar presupuesto o compra, pero “sí, lo compraría” no demuestra pago efectivo. En esta actividad se diseña la prueba; no hace falta cobrar ni contratar servicios.

## Estructura de economia-del-producto.md

```markdown
# Economía del producto — [Proyecto]
- Fecha, moneda y período:
- Usuario, valor y evidencia disponible:
- Quién pagaría/financiaría y por qué (dato o hipótesis):
- Unidad económica:

## Números iniciales
| Concepto | Importe y unidad | Observado / referencia / estimación / pendiente | Fuente o motivo |
| --- | --- | --- | --- |
| Ingreso por unidad | | | |
| Costos variables por unidad (desglosados) | | | |
| Costos fijos por período | | | |
| Inversión inicial, si corresponde | | | |

## Resultado y escenario
- Contribución por unidad (cálculo) o costo por unidad si falta ingreso:
- Escenario base y escenario exigente; supuesto que cambia:
- Qué significa y qué no demuestra:

## Primeros clientes
- Canal, costo y esfuerzo previstos:
- CAC / repago solo si se pueden estimar con base suficiente; de lo contrario, dato pendiente:

## Supuesto por comprobar
- Supuesto elegido:
- Prueba, con quién, acción observable y registro:
- Criterio previo y decisión según el resultado:
- Responsable y fecha:
```

## Antes de cerrar

- ¿Se entiende quién pagaría o qué sigue pendiente?
- ¿Los cálculos usan la misma unidad, moneda y período?
- ¿Distinguimos datos de estimaciones y costos variables de fijos?
- ¿Podemos explicar la contribución o el costo unitario sin llamarlo ganancia?
- ¿Elegimos un supuesto y una prueba concreta?

Conversen brevemente: **¿qué costo o supuesto nos ayudó a detectar la IA y qué tuvimos que corregir o decidir nosotros?** No hace falta otro documento.

Para el pitch podrán decir: **“Nuestra unidad es…, estimamos que ingresa… y cuesta…, bajo estos supuestos. Lo primero que necesitamos comprobar es…”**
