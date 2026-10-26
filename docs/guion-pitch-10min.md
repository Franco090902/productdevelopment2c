# Guion del pitch — 10 minutos máximo, 3 integrantes

> Audiencia: profesores en rol de inversores. Objetivo: que entiendan el problema, vean evidencia **honesta** y entiendan qué piden.
> Duración planificada: **9:30**, con 30 s de margen. No usar los 10:00 completos.
> Etiquetas obligatorias en cada dato: **REAL**, **SIMULADO** o **ESTIMACIÓN**. Los integrantes A, B y C se asignan entre ustedes.

## Reparto y tiempos

| Tiempo | # | Slide | Quién | Duración |
|---|---|---|---|---|
| 0:00 | 1 | Gancho y problema | A | 1:10 |
| 1:10 | 2 | Solución y cómo funciona | A | 1:00 |
| 2:10 | 3 | Mercado y alternativas | A | 0:40 |
| 2:50 | 4 | Tracción (REAL) | B | 1:20 |
| 4:10 | 5 | Lo que aprendimos | B | 1:00 |
| 5:10 | 6 | Modelo de negocio (ESTIMACIÓN) | B | 1:00 |
| 6:10 | 7 | Prueba de pago (SIMULADA) | C | 1:10 |
| 7:20 | 8 | Equipo y uso de IA | C | 0:40 |
| 8:00 | 9 | El pedido | C | 1:00 |
| 9:00 | — | Cierre | C | 0:30 |

Con 10 minutos, **9 slides** es el máximo realista. Es una versión reducida de los 12 del curso: el título se funde con el gancho, y mercado, competencia y estrategia van en un solo slide.

## Guion (texto base, adaptarlo con sus palabras)

### Slide 1 — Gancho y problema (A, 1:10)
> "Sábado, cancha reservada, cuatro jugadores. A dos horas del partido, uno se baja. En pádel no se puede jugar con tres: **un solo faltante suspende el partido**. Hoy el organizador lo resuelve escribiendo a grupos de WhatsApp, esperando y sin saber a quién le llega ni si el reemplazo es de su nivel."
> *[Reemplazar por una frase textual real de sus entrevistas de la Clase 2, si la tienen.]*

### Slide 2 — Solución y cómo funciona (A, 1:00)
> "A Jugar resuelve esa última hora. El organizador publica el faltante, los jugadores se postulan, él ve su perfil, elige y toca un botón que abre WhatsApp con el mensaje armado. Una sola acción: **faltante, candidatos, elección, contacto.**"
- Mostrar 3 capturas del MVP. Decir qué funciona y qué es simulado (tomado de `mvp/mvp.md`).

### Slide 3 — Mercado y alternativas (A, 0:40)
> "Nuestro competidor principal es WhatsApp, que es gratis y hoy les funciona. Por eso no competimos en features: competimos en velocidad y confianza."
- **Tamaño de mercado: no lo tenemos dimensionado.** Decirlo así, y no mostrar una cifra sin fuente.

### Slide 4 — Tracción (B, 1:20) — **REAL**
> "Probamos con 8 personas en dos versiones. En la primera, 4 de 4 completaron la tarea, pero **0 de 4 pudo contactar al reemplazo**: la app los dejaba varados. Agregamos teléfono y botón de WhatsApp, y en la segunda, 4 de 4 activaron el contacto de inmediato. Son muestras chicas, y dos participantes eran de fuera del segmento."
- Cifras: Ronda 1 contacto 0/4, Ronda 2 contacto 4/4, autonomía 75% → 100%.
- Límite a decir en voz alta: un clic no prueba que el jugador asista.

### Slide 5 — Lo que aprendimos (B, 1:00) — **REAL**
> "Pusimos a prueba nuestra hipótesis central: que ver el perfil cambia a quién elegís. Con 6 personas, **nadie cambió su elección** y la confianza no subió. Y el candidato con mejor perfil no lo eligió nadie: ganó el que tenía un conocido en común. No lo tomamos como un fracaso, nos obligó a replantear el valor: puede ser la red, más que el perfil."
- Aclarar que el diseño tiene límites (orden fijo, n=6) y que la hipótesis sigue abierta.

### Slide 6 — Modelo de negocio (B, 1:00) — **ESTIMACIÓN**
> "Proponemos una suscripción Pro de $5.000 por mes, freemium: publicar y postularse sigue siendo gratis. Con costos fijos estimados de $80.600 mensuales, el equilibrio está en unos 19 suscriptores. Todo esto es una estimación nuestra: **hoy no hay evidencia de que alguien pague.**"
- Datos de `docs/economia-del-producto.md`. Mencionar que el costo de mensajería del bot viene de una fuente sin verificar.

### Slide 7 — Prueba de pago (C, 1:10) — **SIMULADA**
> "Para ensayar cómo decidiríamos, simulamos 8 entrevistas, con autorización del docente. Fijamos el criterio antes: 4 de 8 en cada uno de tres puntos. En la simulación se cumplieron dos, pero **solo 3 de 8 vieron $5.000 como razonable**. Con nuestra regla, no construimos la puerta falsa todavía: primero probamos $3.000. **Esto es un ensayo del proceso, no evidencia de mercado.**"

### Slide 8 — Equipo y uso de IA (C, 0:40)
> "La IA nos aceleró la síntesis y el prototipo. Pero tuvimos que frenar una lectura demasiado optimista de la Ronda 1, descartar un chat interno y redefinir qué es un partido 'resuelto'."
- Presentar a los tres integrantes y qué hizo cada uno (completar).

### Slide 9 — El pedido (C, 1:00)
Ver opciones abajo. Debe ser **una** sola.

### Cierre (C, 0:30)
> "Resolvimos el problema en el prototipo, aprendimos lo que no sabíamos y sabemos qué nos falta probar. Lo que sigue es evidencia real."

## El pedido: tienen que elegir uno
No hay monto de inversión definido en sus documentos. Dos opciones coherentes con lo que ya tienen:

| Opción | Qué piden | Base |
|---|---|---|
| **A. Capital semilla ficticio** | Cubrir 3 meses de costos fijos: **$241.800** ($80.600 × 3), **más** lo pendiente: hosting del bot, construcción de Pro y soporte, que hoy están sin estimar | Cálculo con su propia cifra de `economia-del-producto.md`; los pendientes hay que estimarlos antes de presentar |
| **B. Acceso, no dinero** | Introducción a 3 a 5 clubes piloto y feedback sobre el precio | Es el Canal 2 de su economía, y es más realista con la evidencia que tienen |

La opción B es más honesta con el nivel de evidencia actual. La A requiere completar los costos pendientes, o un inversor puede preguntar "¿y el resto?".

## Reglas para los 10 minutos
- Pasen el relevo con una frase de puente ("ahora B les cuenta qué probamos").
- Una cifra grande por slide; las etiquetas REAL / SIMULADO / ESTIMACIÓN visibles.
- No leer: usar el slide como apoyo.
- Ensayen con cronómetro; si pasan de 9:30, recorten el slide 8 y el 3 primero.

## Preguntas probables de "inversores" (para ensayar, sin respuesta acá)
1. ¿Por qué pagarían si WhatsApp es gratis?
2. ¿Qué evidencia real tienen de que pagarían?
3. ¿Qué parte de lo que muestran es simulada?
4. Si el perfil no cambió la elección, ¿cuál es su valor diferencial?
5. ¿Cuál es el tamaño del mercado?
6. ¿Qué pasa si el reemplazo no se presenta?
7. ¿Cómo adquieren clientes y a qué costo?

Cada integrante debería poder contestar cualquiera de ellas. Si quieren, las practicamos como parte del examen que dejamos pendiente.
