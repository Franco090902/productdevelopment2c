# Iteración 3 — Resultados: prueba de elección texto vs. perfil

> **Estado:** resultados cargados desde `Encuesta_Product_Dev.csv` (8 filas, respuestas del 02/10 y del 24/10/2026).
> **Clasificación:** propuesta de la IA, **pendiente de confirmación del equipo** (sección 5).
> Este archivo continúa `clase-05-experimento (1)-confirmado.md` y `formulario-iteracion-3.md`. No reemplaza ni modifica los resultados de las rondas anteriores.
> El criterio de éxito y de fracaso **no se modificó** después de ver los resultados.

---

## 1. Cómo se ejecutó realmente (desvíos respecto del contrato)

| Aspecto | Contrato confirmado | Lo que muestra el CSV |
|---|---|---|
| Diseño | Dos formularios paralelos, personas distintas, asignación alternada A, B, A, B | **Una sola encuesta: cada persona respondió A y después B** |
| Meta | 10 respuestas válidas, 5 por condición | **6 personas con elección registrada** (cada una en ambas condiciones) |
| Asignación | Alternada por el equipo para evitar sesgo | Todos vieron primero A y luego B |
| Origen de las respuestas | Debía registrarse | No registrado; no se puede verificar independencia |

**Consecuencias para la lectura:**
- La condición B está influida por haber visto A antes (efecto de orden): es probable que la gente repita su elección.
- La confianza ya era muy alta en A (casi todos 5/5), así que había poco margen para subir 1 punto en B (efecto techo).
- No hay comparación entre grupos distintos: la comparación es de cada persona consigo misma.
- Ambos efectos juegan **en contra** de detectar un cambio, por lo que un resultado sin cambio es una señal débil.

**Lectura del umbral "3 de 5":** como cada persona responde ambas condiciones, el umbral se lee como proporción (60% de quienes explicaron su elección). Se informan una lectura estricta y una amplia; con ambas el resultado final es el mismo (sección 4).

## 2. Participantes

| Fila | Marca temporal | ¿Juega regular? | Estado |
|---|---|---|---|
| F1 | 02/10 20:22 | **No** | Fuera del perfil objetivo (registrada, no cuenta en las métricas) |
| F2 | 02/10 20:29 | Sí | Válida |
| F3 | 02/10 21:04 | Sí | Válida |
| F4 | 24/10 16:04 | Sí | Válida |
| F5 | 24/10 16:46 | Sí | Válida |
| F6 | 24/10 16:47 | Sí | Válida para elección, confianza y tiempo; **sin explicación escrita** en A ni en B |
| F7 | 24/10 16:48 | Sí | **Incompleta**: filtro respondido, sin ninguna respuesta posterior (registrada, no cuenta) |
| F8 | 24/10 16:55 | Sí | Válida |

**Muestra válida: n = 6** (5 con explicación escrita). Meta de 10: no alcanzada. Fuera de perfil: 1. Incompleta: 1.

## 3. Resultados (n = 6)

### 3.1 Elección

| Candidato | Condición A (info básica) | Condición B (con perfil) |
|---|---:|---:|
| Martín (6ta, 10 min, conocido en común; perfil 4,4 y 90%) | 4 (F2, F3, F4, F5) | 4 (F2, F3, F4, F5) |
| Tomás (6ta, 15 min, sin conocido en común; perfil 4,9 y 98%) | 0 | **0** |
| Lucas (7ma, 8 min, conocido en común; perfil 4,6 y 93%) | 2 (F6, F8) | 2 (F6, F8) |

**Nadie cambió de candidato entre A y B (6 de 6 eligieron igual).**

### 3.2 Confianza (escala 1–5)

| | F2 | F3 | F4 | F5 | F6 | F8 | Media |
|---|---:|---:|---:|---:|---:|---:|---:|
| A | 5 | 5 | 4 | 5 | 5 | 5 | **4,83** |
| B | 5 | 4 | 4 | 5 | 5 | 5 | **4,67** |

Diferencia B − A: **−0,17**. El criterio pedía +1 o más.

### 3.3 Tiempo hasta decidir

| | Menos de 10 s | 10–30 s | 31–60 s |
|---|---:|---:|---:|
| A | 3 | 3 | 0 |
| B | 2 | 3 | 1 |

B no fue más rápida; una persona (F8) tardó más.

### 3.4 Razones escritas (textuales, sin interpretar)

| Fila | Razón en A | Razón en B | Info que faltaba (A / B) |
|---|---|---|---|
| F2 | "Porque tiene mejor level y lo vamos a esperar por más que esté más lejos." | "Por las mismas razones que antes." | "La habilidad." / "Si." |
| F3 | "Porque supuestamente juega bien" | "Porque tiene el mejor nivel" | "Si juega de forma regular" / "Porque no tiene 100% de asistencia" |
| F4 | "Tiene buen nivel. Está relativamente cerca. Y hay un amigo en común." | "Me parece la opción más balanceada. Buena cantidad de partidos jugados, buenas estadísticas y es de confianza." | "No." / "No." |
| F5 | "Porque era amigo de un conocido y me pareció la mejor opción para mi equipo" | "Porque me pareció un buen balance entre las dos otras opciones" | "No" / "No" |
| F6 | (en blanco) | (en blanco) | (en blanco) |
| F8 | "Es el mas cercano" | "Tiene calificacion y asistencia aceptables y esta mas cerca" | "No" / "No" |

### 3.5 Señales del perfil mencionadas en la explicación de B

| Lectura | Quiénes | Cantidad (sobre 5 con explicación) |
|---|---|---:|
| Estricta: menciona calificación, asistencia o estadísticas como razón | F4 (partidos y estadísticas), F8 (calificación y asistencia) | **2 de 5** |
| Amplia: suma a F3, que menciona la asistencia como duda (no es 100%) | F3, F4, F8 | **3 de 5** |

En los tres casos la persona **eligió al mismo candidato que en A**: el perfil reforzó la elección, no la cambió.

### 3.6 Conocido en común

- En A, dijeron que influyó: **5 de 6** (F2, F4, F5, F6, F8). F3 dijo que no.
- En B, dijeron que influyó: **4 de 5 que respondieron** (F2, F4, F5, F8). F3 dijo que no; F6 no respondió.

## 4. Comparación con el contrato

| Criterio | Resultado |
|---|---|
| Éxito: en B, al menos 3 de 5 incorporan una señal adicional del perfil | Lectura estricta: **no** (2 de 5). Lectura amplia: **sí** (3 de 5) |
| Éxito: la confianza media de B supera a la de A en 1 punto o más | **No** (−0,17) |
| Éxito requiere **ambas** condiciones | **No se cumple** |
| Fracaso: menos de 3 de 5 citan esas señales | Se cumple solo en la lectura estricta |
| Fracaso: la confianza media de A es igual o superior | **Se cumple** (4,83 ≥ 4,67) |
| Métrica adicional: tiempo de decisión | B no fue más rápida |
| Métrica adicional: distribución de elecciones | Idéntica en A y B |

## 5. Clasificación

### Propuesta de la IA (a confirmar o cambiar por el equipo)

| Dimensión | Estado | Por qué |
|---|---|---|
| El perfil (foto, calificación, asistencia) cambia la elección o aumenta la confianza | **No respaldada por esta prueba, con evidencia débil** | Se cumple la cláusula de fracaso por confianza (A ≥ B), nadie cambió de elección y el éxito exige ambas condiciones. |
| Usabilidad y velocidad de decisión con perfil | Sin ventaja observada | El tiempo no mejoró. |

**Por qué "evidencia débil":** n = 6, diseño de medidas repetidas con orden fijo, efecto techo en la confianza y origen de las respuestas desconocido. Todos esos límites dificultan detectar un efecto, así que este resultado **no demuestra que el perfil no sirva**.

**Alternativa que el equipo podría elegir: "inconclusa".** En ese caso la justificación debe ser metodológica (orden fijo, techo, desvío del diseño) y quedar escrita junto con el hecho de que se cumple la cláusula de fracaso. No debe apoyarse en que el resultado sea incómodo.

### Sensibilidad que el equipo debe conocer
- Con la lectura amplia de F3, la primera mitad del éxito se cumple, pero la segunda (confianza) no, así que la conclusión no cambia.

## 6. Hallazgo secundario (no previsto en el contrato)

**Conocido en común pesó más que el perfil.**
- Tomás tenía el mejor perfil de los tres (4,9 y 98% de asistencia) pero era el único sin conocido en común. **No lo eligió nadie, ni en A ni en B.**
- Los seis eligieron a alguien con conocido en común; F4 y F5 lo citan en su explicación.
- **Límite:** en el escenario, "conocido en común" coincide con Martín y Lucas, y "mejor perfil" con Tomás. No se puede separar el efecto de cada variable.

Esto se suma a otros indicios del repo: Entrevista 1, comentarios de R5, R7 y R9 en la Ronda 2 y el caso TuCancha. **Sigue siendo una hipótesis**: la red de contactos podría ser la señal que decide, más que los datos del perfil.

## 7. Registro de iteración

```markdown
## Iteración 3

- Experimento anterior: Ronda 2 (prototipo v2, n=7), valor del perfil inconcluso.
- Resultado: no respaldada por esta prueba, con evidencia débil. [Propuesta de la IA, pendiente de confirmación]
- Evidencia producida: secciones 2 a 6 de este archivo (n=6 válidas, 1 fuera de perfil, 1 incompleta).
- Por qué no sirve seguir insistiendo de la misma manera: repetir la misma encuesta con el mismo orden mantendría los mismos límites y los candidatos confunden perfil con conocido en común.
- Supuesto que quedó cuestionado: que más información de perfil cambia a quién elige el organizador.
- Qué conservamos: el problema, el segmento y el flujo publicar/postularse/elegir/WhatsApp (probado en el MVP).
- Qué modificamos: hipótesis de valor (de "perfil" a "perfil vs. conocido en común") o el método, según lo que decida el equipo.
- Tipo de cambio: a decidir (iteración de método o pivot de mecanismo). 
- Próximo experimento: ver sección 8.
- Qué evidencia diferente esperamos obtener: elecciones reales en partidos reales, con el factor de decisión registrado.
```

## 8. Próxima prueba más barata (propuestas, a elegir por el equipo)

| | 1. Piloto en cancha con `decision_factor` | 2. Repetir la elección separando variables |
|---|---|---|
| Qué prueba | Si el reemplazo se presenta (show-up) y qué mira el organizador al elegir, incluida la opción "Conocido en común" | Si un desconocido con mejor perfil le gana a un conocido con perfil promedio |
| Qué cambia | Pasa de encuesta a uso real | Se rediseña el escenario (candidato conocido vs. desconocido con mejor perfil) y se usan dos grupos distintos |
| Costo | Medio (organizar 5 partidos) | Bajo (formulario) |
| Evidencia nueva | Comportamiento real y asistencia | Separa el efecto del perfil del de la red |
| Qué obligaría a revisar | Show-up menor a 80% o `decision_factor` dominado por "conocido en común" | Nadie elige al desconocido aunque tenga mejor perfil |

**Recomendación de la IA:** la 1, porque el piloto ya está definido, mide el supuesto más importante (show-up) y el MVP ya registra qué miró el organizador. La 2 puede hacerse en paralelo si hay tiempo.

## 9. Decisiones humanas pendientes

| Punto de control | Estado |
|---|---|
| Aceptar la exclusión de F1 (no juega regular) y F7 (incompleta) | Pendiente de confirmar |
| Clasificación: no respaldada (débil) o inconclusa | Pendiente de confirmar |
| Registrar el desvío de diseño (una encuesta con A y B por persona) | Propuesto en la sección 1 |
| Próxima prueba | Pendiente de elegir |

## 10. Cambios propuestos al Canvas (a confirmar)

- **Caja 6 (Valor):** agregar nota de la Iteración 3: el perfil no cambió la elección (6 de 6 igual) ni subió la confianza; se refina la hipótesis hacia "perfil + conocido en común".
- **Caja 8 (Fase 1):** registrar la Iteración 3 como nueva ronda; no borrar las anteriores.
- **Pre-mortem, fila "Falta de valor real":** anotar que la señal temprana se observó en la Iteración 3.
- **Pre-mortem, fila "Rechazo a desconocidos":** anotar que ningún participante eligió al único candidato sin conocido en común.

> No borramos ni reescribimos el resultado anterior. Cada vuelta se conserva para mostrar cómo evolucionó el razonamiento.
