# Guía: datos sintéticos del MVP — cómo cargarlos y leer las métricas

> ⚠️ **Todo lo generado acá es SINTÉTICO**, autorizado por el docente para practicar el proceso y la presentación. No es evidencia real ni de mercado.

## Archivos
| Archivo | Qué es |
|---|---|
| [08_seed_synthetic.sql](../mvp/sql/08_seed_synthetic.sql) | 13 usuarios, 14 partidos, postulaciones, `outcome`, `source` y eventos de puerta falsa |
| [09_cleanup_synthetic.sql](../mvp/sql/09_cleanup_synthetic.sql) | Borra solo lo sintético |
| [entrevista-pro-SIMULADA.md](entrevista-pro-SIMULADA.md) | 8 entrevistas Pro simuladas con su lectura contra el criterio |

## Cómo cargarlo
1. **Recomendado:** usar un proyecto Supabase aparte. Si usan el mismo que el de pruebas reales, los perfiles son visibles para todos los autenticados (`profiles_select_authenticated`) y los **2 partidos abiertos** aparecerían en la lista de "Partidos". Si no, corran el cleanup después de ensayar.
2. Tener aplicados `01` a `06` (y `07` si quieren los eventos de Pro).
3. Ejecutar `08_seed_synthetic.sql` en el SQL Editor (como postgres).
4. Abrir `admin/index.html` con su cuenta `team`. Filtro: **modo = `todas`** y fechas por defecto (últimos 30 días; los datos son relativos a `now()`).
5. Con **modo = `real`** los datos sintéticos no aparecen. Eso es correcto y se puede mostrar en la defensa.
6. Al terminar de ensayar: `09_cleanup_synthetic.sql`.

## Valores que debería mostrar el panel (modo `todas`)
Si ya existen las 5 cuentas del seed original `03_seed_demo.sql` o datos de pruebas reales marcados como `demo`, los números van a sumar a estos.

| Métrica | Valor esperado | n |
|---|---|---|
| North Star (resueltos) | 10 | 14 publicados |
| Tasa de resolución | 71,4% (10 resueltos, 2 abiertos, 2 cancelados) | 14 |
| Tiempo mediano de resolución | 51,5 min | 10 |
| Tiempo mediano al primer candidato | 7,0 min | 12 |
| Liquidez | 85,7% con postulación; 2,7 postulantes por partido | 14 |
| decision_factor | Conocido en común 3, Nivel 2, Cercanía 2, Calificaciones 1, Asistencia 1, Foto 1 | 10 |
| Primer postulante elegido | 40% | 10 |
| Retención de organizadores (≤14 días) | 80% | 5 |
| Traspaso a WhatsApp | 9 | 10 resueltos |

Si algún valor no coincide, revisen primero el rango de fechas y si hay más datos en modo `todas`.

## Lo que el panel NO muestra aunque haya datos
`get_pitch_metrics` tiene fijas en `no_medible` estas cuatro métricas. Mostrarán **"No medible aún"** aunque el seed las cargue:

| Métrica | Dato sintético cargado | Cómo verlo hoy |
|---|---|---|
| Show-up rate | `matches.outcome`: 7 played, 2 no_show (77,8%) | Query de verificación al final de `08_seed_synthetic.sql` |
| Descubrimiento link vs. listado | `applications.source`: 29 listing, 3 link | Query de verificación (idem) |
| Embudo completo | No hay tabla de eventos | No se puede simular con el esquema actual |
| Vistas de perfil | No hay tabla de eventos | No se puede simular con el esquema actual |

Para que el panel las muestre, hay que modificar `get_pitch_metrics` y `admin/admin.js`. Puedo hacerlo si quieren; hoy lo dejé fuera de alcance para no tocar código que ya funciona.

## Cosas del repo que encontré (conviene corregirlas antes de la defensa)
1. **`profiles.phone` no está en ninguna migración.** `app.js` lo usa pero `01`–`07` no lo crean. El seed lo agrega con `IF NOT EXISTS`. Agreguen una migración al repo para que la base se pueda reconstruir.
2. **`metricas.md` contradice a `04_account_type.sql`.** El doc dice que el trigger solo bloquea a usuarios con JWT y no bloquea al SQL Editor. El código bloquea **cualquier** cambio de `account_type`. Por eso el seed desactiva el trigger un momento. Corrijan el doc o el trigger.
3. **La prueba piloto del 17–18/10 sigue sin resultado registrado**, y hoy es 26/10. El seed deja un ejercicio de práctica con `outcome`, pero eso no reemplaza declarar si el piloto real se hizo.
4. **Una cuenta `demo` no distingue "demo viejo" de "sintético".** Los sintéticos se reconocen por el prefijo `Sint.` y los IDs `a0000000-` / `b0000000-`.

## Resultados simulados que quedan para practicar la decisión
- **Show-up 77,8% (<80%):** según `pruebas-y-mejoras-mvp.md`, entraría la rama "priorizar compromiso previo (confirmación 2 h antes o penalización en el perfil)". Notar que el plan hablaba de 5 partidos y acá hay 9 con `outcome`.
- **Entrevistas Pro:** 2 de 3 criterios cumplidos, así que se revisan beneficios o se prueba $3.000.
- **Puerta falsa:** 8 vieron, 5 hicieron clic, 3 dejaron contacto. **El umbral no está definido** (lo dice la economía): no conviene llamarlo éxito ni fracaso.
- **Conocido en común** lidera `decision_factor` (3 de 10), en línea con la hipótesis de la Iteración 3. En lo sintético lo dejé así a propósito; no lo cuenten como confirmación.

## Cómo presentarlo sin mezclar
Decir tres cosas, en este orden:
1. **Real:** Ronda 1 y 2 (n=4 y n=4), Iteración 3 (n=6 válidas), entrevistas de la Clase 2.
2. **Sintético:** el seed, las 8 entrevistas Pro y el show-up, con permiso del docente.
3. **Qué demuestra el ejercicio:** que el proceso de medir, leer contra el criterio y decidir funciona. No demuestra mercado ni disposición a pagar.

Nunca sumen un n sintético a un n real, ni pongan una cifra sintética en un pitch como evidencia.
