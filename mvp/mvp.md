# Nuestro primer MVP — A Jugar

## Acceso
- App usuarios: Abrir `mvp/index.html` directamente en el browser (local).
- Panel de métricas del equipo: Abrir `admin/index.html` (requiere usuario con `account_type = 'team'`).
- Requiere conexión a internet para Supabase y las fonts de Google.

## Usuario y situación
Organizador de un grupo de padel amateur que tiene un partido reservado y le falta 1 jugador.
Necesita conseguir un reemplazo de nivel compatible antes del partido.

## Valor y acción central
Publicar un faltante y elegir un reemplazo a partir de candidatos con perfil visible, coordinando el contacto directo inmediato.
**Una sola cosa:** faltante → candidatos → eleccion → contacto por WhatsApp → partido resuelto.

## Recorrido completo (v1.1)
1. Organizador inicia sesion (email/password o Google) y valida su perfil (incluyendo WhatsApp obligatorio).
2. Va a "Publicar" → completa club, zona, fecha, hora, nivel → publica.
3. El partido aparece en "Mis Partidos" como abierto.
4. Otros usuarios ven el partido en "Partidos" y se postulan (cargando su teléfono de contacto).
5. Organizador va a "Mis Partidos" → "Ver candidatos".
6. Ve cards con: nombre, nivel, zona, rating, partidos, asistencia.
7. Puede ver el perfil completo de cada candidato (modal).
8. Elige uno → modal de confirmacion → confirma.
9. Se muestra: "Que miraste para decidir?" (pregunta cualitativa `decision_factor`).
10. Pantalla final: nombre del reemplazo + tiempo de resolucion + metricas + botón directo "💬 Contactar por WhatsApp" (dispara mensaje prearmado y registra el evento de traspaso).

## Funciona / Simulado / Fuera de alcance
| Estado | Funcionalidad |
|---|---|
| Funciona | Auth email+password, setup de perfil con teléfono WhatsApp obligatorio |
| Funciona | Publicar partido, postularse, ver candidatos, elegir reemplazo, resolución |
| Funciona | Botón directo "💬 Contactar por WhatsApp" con redirección a `wa.me` y texto prearmado |
| Funciona | Timestamps: `published_at`, `created_at` (postulación), `selected_at`, `resolved_at` |
| Funciona | Registro de `decision_factor` (pregunta cualitativa) y `whatsapp_click` (traspaso) |
| Funciona | RLS y funciones `SECURITY DEFINER` (`is_team()`, `get_pitch_metrics`) |
| Funciona | Panel analítico interno (`admin/`) para visualización de métricas en tiempo real |
| Simulado | 2 jugadores extra en el form de publicacion (Lucas y Santiago son demo) |
| Simulado | Rating y partidos jugados de usuarios demo (datos seed) |
| Fuera de alcance | Chat interno integrado, notificaciones push nativas, pagos online, matching algorítmico |

## Metricas registradas
- `match.published_at` — cuando se publica el faltante
- `application.created_at` — cuando cada jugador se postula
- `application.selected_at` — cuando el organizador elige
- `match.resolved_at` — cuando el partido queda resuelto
- `match.decision_factor` — que miro el organizador para decidir
- `match.whatsapp_click` — registro del traspaso efectivo a la conversación real con el reemplazo

### Calculo de metricas clave
```
tiempo hasta 1er candidato = min(application.created_at) - match.published_at
tiempo hasta eleccion       = application.selected_at - match.published_at
tiempo hasta resolucion     = match.resolved_at - match.published_at
cantidad de candidatos      = count(applications) donde match_id = X
candidato elegido           = application.status = 'accepted'
tasa de traspaso whatsapp   = count(matches donde whatsapp_click = true) / count(matches resueltos)
```
La pantalla "Partido resuelto" muestra estos valores en tiempo real y el panel `admin/` los consolida para el equipo.

## Datos demo disponibles
Ejecutar `sql/03_seed_demo.sql` en Supabase para cargar:
- 5 usuarios: matias@demo.com, valentina@demo.com, rodrigo@demo.com, camila@demo.com, ignacio@demo.com
- Password: Demo1234!
- 2 partidos pre-cargados con postulaciones

## Prueba e iteracion (Clase 8)
- **Quién probó:** 4 participantes en Ronda 1 (v1.0) y 4 participantes en Ronda 2 (v1.1) (organizadores de pádel amateur del segmento + compañeros).
- **Tarea:** "Tenés un partido el sábado y te falta un jugador. Usá esto para encontrar un reemplazo."
- **Qué ocurrió en v1.0:** 4 de 4 completaron la selección (100% éxito, 75% autonomía), pero 0 de 4 lograron coordinar el contacto porque la app no pedía teléfono ni permitía comunicarse con el reemplazo elegido.
- **Devolución concreta dada a la IA:** Exigir teléfono en setup de perfil, incorporar botón de WhatsApp en la pantalla resuelto, registrar `whatsapp_click` en base de datos e instrumentar el panel administrativo.
- **Resultado de la nueva prueba (v1.1):** 4 de 4 completaron con 100% autonomía y 100% activaron el contacto por WhatsApp inmediatamente, resolviendo la última milla de coordinación.
- **Próximo ajuste:** Monitorear el presentismo real en cancha (*Show-up rate* en `matches.outcome`) en 5 partidos reales para comprobar que los jugadores efectivamente asisten al turno.

## Duda pendiente (de Clase 6 y 7)
El MVP demostró que los organizadores eligen rápidamente apoyados en el perfil (nivel y zona como factores dominantes) y que valoran el salto directo a WhatsApp para la coordinación final.
La duda abierta principal ahora se desplaza a la **asistencia efectiva**: comprobar si el compromiso asumido por la app se traduce en presencia puntual en el club o si requiere confirmación forzosa previa.