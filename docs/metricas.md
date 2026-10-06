# Métricas — A Jugar (Panel interno)

> **Versión de definiciones:** v1.0  
> **Actualizado:** octubre 2026  
> **Acceso:** solo equipo (account_type = 'team')

---

## Contexto

Este documento define cada métrica del panel interno, su fórmula exacta, la fuente de datos y si es medible con el esquema actual. Su propósito es fijar las definiciones antes de usar los números en un pitch o toma de decisiones.

---

## Filtros disponibles

| Filtro | Valores | Default | Descripción |
|---|---|---|---|
| `fecha_desde` / `fecha_hasta` | fecha ISO | últimos 30 días | Filtra por `matches.published_at` (convertido a America/Argentina/Buenos_Aires) |
| `modo` | `real` / `real_team` / `todas` | `real` | `real` excluye cuentas demo y team. `real_team` incluye al equipo. `todas` incluye demo. |

**Regla:** siempre usar `modo = 'real'` para cifras de pitch. `todas` solo para diagnóstico.

---

## Métricas medibles

### ⭐ North Star — Partidos completados gracias a A Jugar

- **Definición:** partidos con `status = 'resolved'` publicados en el período filtrado.
- **Fórmula:** `COUNT(matches WHERE status = 'resolved' AND published_at IN rango)`
- **n reportado:** total de partidos publicados en el período (incluye abiertos, resueltos, cancelados).
- **Gráfico:** count de resolved por semana (agrupado por `resolved_at` en horario BA).
- **Nota:** "resuelto" significa que el organizador eligió un reemplazo. No confirma que el partido se jugó efectivamente (ver *Show-up rate* en sección No medible).

---

### ⏱ Tiempo mediano de resolución

- **Definición:** mediana del tiempo entre publicación y resolución, en minutos.
- **Fórmula:** `PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY resolved_at - published_at)` solo para matches `status = 'resolved'`.
- **n reportado:** cantidad de partidos resueltos en el período.
- **Unidad:** minutos (el panel convierte a horas si supera 60).
- **Nota:** no hay línea base de WhatsApp disponible para comparar (ver sección No medible).

---

### 🙋 Tiempo mediano hasta el primer candidato

- **Definición:** mediana del tiempo entre publicación del partido y la primera postulación recibida.
- **Fórmula:** `PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY MIN(applications.created_at) - matches.published_at)` por partido.
- **n reportado:** cantidad de partidos con al menos una postulación en el período.
- **Unidad:** minutos.

---

### ✅ Tasa de resolución

- **Definición:** % de partidos publicados que quedaron resueltos en el período.
- **Fórmula:** `resueltos / total_publicados * 100`
- **n reportado:** total de partidos publicados.
- **Desagregado:** resueltos, abiertos (aún en curso), cancelados.
- **Advertencia:** los partidos "abiertos" al momento de la consulta sesgan el denominador si el período incluye fechas recientes.

---

### 💧 Liquidez

| Sub-métrica | Fórmula | n |
|---|---|---|
| % partidos con al menos 1 postulación | `COUNT DISTINCT(match_id en applications) / COUNT(matches) * 100` | n partidos |
| Postulantes por partido | `COUNT(applications) / COUNT DISTINCT(match_id en applications)` | n partidos con postulación |

---

### 🔍 Valor del perfil — decision_factor

- **Definición:** distribución de la respuesta cualitativa "¿qué miraste para elegir?", registrada en `matches.decision_factor` al resolver.
- **Valores posibles:** Nivel, Cercanía, Foto, Calificaciones, Asistencia, Conocido en común, Otro.
- **Fórmula:** `GROUP BY decision_factor, COUNT(*)`
- **n reportado:** cantidad de partidos con decision_factor no nulo.
- **Nota:** este campo solo existe para partidos resueltos a través del flujo de la app. Partidos resueltos sin pasar por la pregunta cualitativa tienen `decision_factor = NULL`.

---

### 🥇 Primer postulante elegido

- **Definición:** % de partidos resueltos donde el candidato aceptado fue el primero en postularse (menor `applications.created_at` para ese partido).
- **Fórmula:**
  ```
  COUNT(matches donde applications.status='accepted' coincide con MIN(created_at) de ese partido)
  / COUNT(matches resueltos con candidato aceptado) * 100
  ```
- **n reportado:** partidos resueltos con candidato aceptado.

---

### 🔄 Retención de organizadores

- **Definición:** % de organizadores únicos (en el período) que publicaron un segundo partido dentro de los 14 días siguientes a su primer partido publicado.
- **Fórmula:**
  ```
  COUNT(organizer_id donde 2do partido - 1er partido ≤ 14 días)
  / COUNT(organizer_id distintos) * 100
  ```
- **n reportado:** cantidad de organizadores únicos con al menos un partido en el período.
- **Advertencia:** el período filtrado puede truncar el recuento si el 2do partido cae fuera del rango.

---

## Métricas no medibles aún

Estas métricas se muestran en el panel como **"No medible aún"**. Las columnas están creadas en el esquema (donde aplica) pero el app aún no las registra.

| Métrica | Qué falta |
|---|---|
| **Descubrimiento: link vs. listado** | Poblar `applications.source` ('link' o 'listing') al crear la postulación. La columna existe en el esquema. |
| **Traspaso a WhatsApp** | Registrar `matches.whatsapp_click = true` cuando el organizador hace clic en un botón de WhatsApp tras elegir. La columna existe. Nota: un clic ≠ conversación real. |
| **Show-up rate** | Poblar `matches.outcome` ('played', 'no_show', 'cancelled') cuando el organizador confirma el resultado post-partido. La columna existe. |
| **Embudo completo** | Requiere tabla de eventos (link_opened, signup_completed). No implementada. |
| **Vistas de perfil antes de elegir** | Requiere tabla de eventos. No implementada. |

---

## Reglas de presentación

1. **Siempre mostrar n** junto a cada porcentaje o mediana.
2. **n < 5:** mostrar badge "Datos insuficientes (n = X)". El número sigue visible.
3. **Sin datos:** mostrar `—` o `0` con claridad, nunca gráfico roto o vacío sin mensaje.
4. **Nunca mostrar:** emails, teléfonos ni datos personales. Solo agregados.
5. **Fechas:** siempre en horario America/Argentina/Buenos_Aires.

---

## Cómo marcar una cuenta como team

Desde el SQL Editor de Supabase (como postgres/service_role):

```sql
UPDATE public.profiles
SET account_type = 'team'
WHERE id = '<UUID del usuario>';
```

El trigger `prevent_account_type_change` solo bloquea cambios realizados por usuarios autenticados via JWT; **no** bloquea updates desde el SQL Editor (donde `auth.uid()` es null).

---

## Seguridad

- La función `get_pitch_metrics` es `SECURITY DEFINER` y verifica `is_team()` al inicio.
- `is_team()` también es `SECURITY DEFINER` y lee directamente de `profiles.account_type`.
- `REVOKE EXECUTE ON FUNCTION get_pitch_metrics FROM PUBLIC` — solo el rol `authenticated` puede llamarla.
- `REVOKE UPDATE (account_type) ON profiles FROM authenticated` + trigger — ningún usuario puede escalarse a `team` por sí mismo.
- La anon key es pública por diseño; la seguridad real está en RLS + funciones SECURITY DEFINER.

---

## Versiones de definiciones

| Versión | Fecha | Cambios |
|---|---|---|
| v1.0 | Oct 2026 | Definición inicial. 8 métricas medibles, 5 no medibles. |
