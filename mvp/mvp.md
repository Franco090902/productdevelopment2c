# Nuestro primer MVP — A Jugar

## Acceso
Abrir `mvp/index.html` directamente en el browser (local).
Requiere conexión a internet para Supabase y las fonts de Google.

## Usuario y situación
Organizador de un grupo de padel amateur que tiene un partido reservado y le falta 1 jugador.
Necesita conseguir un reemplazo de nivel compatible antes del partido.

## Valor y acción central
Publicar un faltante y elegir un reemplazo a partir de candidatos con perfil visible.
**Una sola cosa:** faltante → candidatos → eleccion → partido resuelto.

## Recorrido completo
1. Organizador inicia sesion (email/password o Google)
2. Va a "Publicar" → completa club, zona, fecha, hora, nivel → publica
3. El partido aparece en "Mis Partidos" como abierto
4. Otros usuarios ven el partido en "Partidos" y se postulan
5. Organizador va a "Mis Partidos" → "Ver candidatos"
6. Ve cards con: nombre, nivel, zona, rating, partidos, asistencia
7. Puede ver el perfil completo de cada candidato (modal)
8. Elige uno → modal de confirmacion → confirma
9. Se muestra: "Que miraste para decidir?" (pregunta cualitativa)
10. Pantalla final: nombre del reemplazo + tiempo de resolucion + metricas

## Funciona / Simulado / Fuera de alcance
| Estado | Funcionalidad |
|---|---|
| Funciona | Auth email+password, publicar partido, postularse, ver candidatos, elegir, resuelto |
| Funciona | Timestamps: published_at, created_at (aplicacion), selected_at, resolved_at |
| Funciona | Registro de decision_factor (pregunta cualitativa) |
| Funciona | RLS: cada usuario solo accede a lo que le corresponde |
| Simulado | 2 jugadores extra en el form de publicacion (Lucas y Santiago son demo) |
| Simulado | Rating y partidos jugados de usuarios demo (datos seed) |
| Fuera de alcance | Chat, notificaciones, pagos, matching automatico, geolocalización |

## Metricas registradas
- `match.published_at` — cuando se publica el faltante
- `application.created_at` — cuando cada jugador se postula
- `application.selected_at` — cuando el organizador elige
- `match.resolved_at` — cuando el partido queda resuelto
- `match.decision_factor` — que miro el organizador para decidir

### Calculo de metricas clave
```
tiempo hasta 1er candidato = min(application.created_at) - match.published_at
tiempo hasta eleccion       = application.selected_at - match.published_at
tiempo hasta resolucion     = match.resolved_at - match.published_at
cantidad de candidatos      = count(applications) donde match_id = X
candidato elegido           = application.status = 'accepted'
```
La pantalla "Partido resuelto" muestra estos valores en tiempo real.

## Datos demo disponibles
Ejecutar `sql/03_seed_demo.sql` en Supabase para cargar:
- 5 usuarios: matias@demo.com, valentina@demo.com, rodrigo@demo.com, camila@demo.com, ignacio@demo.com
- Password: Demo1234!
- 2 partidos pre-cargados con postulaciones

## Prueba e iteracion
- Quien probo: pendiente (propia Clase 7)
- Tarea sugerida: "Tenes un partido el sabado y te falta un jugador. Usa esto para encontrar un reemplazo."
- Criterio de exito: completa el recorrido sin ayuda y el partido queda "Resuelto"
- Proximo ajuste: por definir despues de la prueba

## Duda pendiente (de Clase 6)
Todavia no sabemos si mostrar un perfil mas completo hace que el organizador elija
de manera diferente que con informacion basica tipo WhatsApp.
El MVP permite observar UNA eleccion concreta y registrar que miro el organizador,
lo que conecta directamente con la incertidumbre abierta.