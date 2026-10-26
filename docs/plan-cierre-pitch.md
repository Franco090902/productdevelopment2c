# Plan de cierre: trabajo, pitch deck, guion y presentación

> Ensayo: **26/10** · Entrega: **02/11** (fechas de la guía de revisión). Las fechas son de ustedes; ajusten si cambiaron.
> Regla de todo el material: **real y sintético siempre separados y etiquetados.**

## Paso a paso

### Paso 1 — Cerrar el repositorio (hoy)
- [ ] Ejecutar `08_seed_synthetic.sql` en un proyecto de prueba y comparar el panel con la tabla de [datos-sinteticos-guia.md](datos-sinteticos-guia.md). Sacar capturas del panel en modo `todas`.
- [ ] Anonimizar nombres de participantes y cambiar o desactivar las credenciales demo (punto de privacidad de `revisi_n_de_entregables.md`).
- [ ] Agregar la migración de `profiles.phone` y corregir la contradicción entre `metricas.md` y el trigger de `04_account_type.sql`.
- [ ] Registrar en `pruebas-y-mejoras-mvp.md` si el piloto del 17–18/10 se hizo. Si no, poner nueva fecha. **No** usar el show-up sintético como resultado del piloto.
- [ ] Marcar cuál archivo de la Ronda 2 es el vigente y confirmar `aprendizaje-y-mvp.md` como versión final.

### Paso 2 — Decidir qué se dice sobre la evidencia (hoy)
Armen una tabla de una página, y úsenla en deck y guion:

| Bloque | Qué es | Cómo se llama en la presentación |
|---|---|---|
| Entrevistas Clase 2, Ronda 1 y 2 del MVP (n=4 y n=4), Iteración 3 (n=6) | Real | "Evidencia observada" |
| Entrevistas Pro (8), show-up, eventos de puerta falsa, panel con datos sintéticos | Sintético, autorizado por el docente | "Simulación para ensayar el proceso" |
| Precio $5.000, costos, equilibrio de 19 suscriptores | Estimación | "Hipótesis a validar" |

### Paso 3 — Armar el deck (1 a 2 días)
Siguen el flujo de las filminas del curso (Problema → Mercado → Solución → Modelo → Tracción → Equipo → Pedido). **Por el límite de 10 minutos y 3 presentadores, usar 9 slides**: ver [guion-pitch-10min.md](guion-pitch-10min.md). La tabla de abajo es la versión de 12 slides; fusionen título+problema y mercado+competencia.

| # | Slide | Contenido de ustedes | Estado |
|---|---|---|---|
| 1 | Título | A Jugar, equipo, contacto | Listo para armar |
| 2 | Problema | Historia de un organizador al que se le baja un jugador (entrevistas Clase 2) | Real |
| 3 | Solución | Faltante → candidatos con perfil → elección → WhatsApp | Real |
| 4 | Cómo funciona | 3 capturas del MVP (publicar, candidatos, resuelto con botón WhatsApp) | Real |
| 5 | Mercado | **Pendiente**: no hay TAM/SAM en el repo. Usar solo datos con fuente verificable; si no, decir "a dimensionar" | Falta investigar |
| 6 | Alternativas | WhatsApp gratis es el rival principal; mencionar el caso TuCancha ya relevado | Real |
| 7 | Tracción | Ronda 1→2: contacto 0/4 → 4/4 tras agregar WhatsApp. Aclarar que es muestra chica y que 2 participantes eran de fuera del segmento | Real |
| 8 | Qué aprendimos | El perfil no cambió la elección (6/6) y "conocido en común" pesó más. Decisión que se desprende | Real |
| 9 | Modelo de negocio | Pro $5.000/mes, ≈ 19 suscriptores para cubrir fijos de $80.600. Rotulado "estimación" | Estimación |
| 10 | Prueba de pago (simulada) | Entrevistas simuladas: 2 de 3 criterios, decisión: probar $3.000. Rotulado SIMULADO | Sintético |
| 11 | Equipo y uso de IA | Qué hizo la IA y qué corrigieron ustedes (reflexión de `revisi_n_de_entregables.md`) | Real |
| 12 | Próximo paso | Entrevistas reales con el guion, piloto de show-up en 5 partidos, 3 a 5 clubes. **Monto de inversión: pendiente**, no inventar | A decidir |

Reglas de diseño: una idea por slide, una cifra grande, la fuente y la etiqueta (REAL / SIMULADO / ESTIMACIÓN) en cada dato.

### Paso 4 — Escribir el guion (1 día)
Estructura sugerida (ajustar al tiempo que les den, que no lo sé):
1. **Gancho:** la historia del organizador con el partido en riesgo.
2. **Problema → solución → cómo funciona.**
3. **Evidencia:** qué probaron, qué aprendieron, qué cambió el producto.
4. **Honestidad:** "esto no sabemos todavía" (disposición a pagar, show-up, mercado).
5. **Modelo y decisión:** precio, equilibrio, qué haríamos con el resultado.
6. **Próximo paso.**

Frases clave para no mezclar:
- *"Esto lo observamos con 4 personas reales."*
- *"Esto lo simulamos, con permiso del docente, para ensayar la decisión."*
- *"Esto es una estimación que todavía no validamos."*

### Paso 5 — Preparar la defensa (1 día)
Las filminas piden proyectar **integridad, realismo, conocimiento, entrenabilidad y compromiso.** Se muestran así:
- **Integridad y realismo:** etiquetar lo sintético y declarar los límites.
- **Entrenabilidad:** mostrar cómo cambió el producto (v1.0 → v1.1) y la hipótesis (perfil → conocido en común).
- **Conocimiento:** saber de memoria el panel (North Star, tiempos, retención).
- Respuestas ensayadas para: ¿por qué pagarían si WhatsApp es gratis?, ¿qué evidencia real tienen?, ¿qué es simulado?, ¿cuál es el supuesto más riesgoso?

### Paso 6 — Ensayar (2 pasadas)
- Una pasada cronometrada, otra con preguntas cruzadas entre ustedes.
- Cada integrante debe poder responder cualquier slide.
- Revisar que ninguna cifra sintética aparezca sin etiqueta.

### Paso 7 — Entrega (02/11)
- Repo limpio (privacidad resuelta), deck, guion, `revision-entregables.md` actualizado y este plan marcado.
- Opcional: README con enlace de acceso al MVP.

## Qué falta que ustedes decidan o investiguen
1. Tamaño de mercado con fuente real (o decir que no está dimensionado).
2. Duración del pitch y a quién se presenta.
3. Si habrá "pedido" concreto (inversión, clubes piloto, otra cosa).
4. Responsable y fecha de la prueba de pago real (hoy dice "pendiente de asignar").
