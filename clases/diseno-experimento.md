# Diseño del experimento — A Jugar (Pádel Amateur)

> Documento de diseño de la Clase 5 (Ronda 2 de la Fase 1). Los resultados están en `clase-05-experimento.md`; la Ronda 1 está en `registro-experimento.md`.

## 1. Evidencia de partida

- Problema: dificultad para completar el cuarteto con un reemplazo confiable y de nivel cuando no se resuelve dentro del círculo directo (4 entrevistas reales de la Clase 2 + research secundario).
- Ronda 1 (prototipo v1, n=3): inconclusa con señal favorable. Preguntar por la confianza no separaba lo espontáneo de lo inducido.
- Incertidumbre abierta: si el valor percibido del perfil se sostiene con más muestra y se menciona espontáneamente.

## 2. Contrato experimental (Ronda 2)

| Campo | Definición |
|---|---|
| Hipótesis | Ver un perfil con nivel, historial y foto ayuda a elegir un reemplazo más confiable que preguntando por WhatsApp. |
| Participantes | Jugadores de pádel fuera del círculo directo; meta ~8 válidos en 1 semana. |
| Acción observable | Completar la tarea en `index-v2.html` y responder el formulario reordenado. |
| Métrica | % que completa sin ayuda; menciones espontáneas vs. inducidas; fricciones. |
| Éxito | La mayoría completa sin ayuda y menciona espontáneamente algún elemento del perfil como generador de confianza. |
| Fracaso | La mayoría se traba, prefiere WhatsApp o solo menciona confianza al preguntarle directo. |
| Limitaciones | Autoadministrado; posible sesgo al círculo del equipo. |

El criterio no se modificó tras ver los resultados.

## 3. Experimento elegido

Opción C: formulario reordenado (pregunta abierta antes de la pregunta directa de confianza) + difusión ampliada de la Ronda 1, con lista de espera como señal complementaria de compromiso. Se descartaron las sesiones en vivo (difícil conseguir participantes) y el concierge por WhatsApp (depende de una necesidad real y de capacidad operativa).

## 4. Real y simulado

| Real | Simulado |
|---|---|
| Participantes, respuestas, tiempo de prueba, lista de espera | Partidos, jugadores, historial, calificaciones, % de asistencia, foto (avatar generado), video (placeholder); el tester actúa como "Valentina" |

## 5. Alcance mínimo

- Imprescindible: `index-v2.html` sin cambios, formulario con preguntas reordenadas, mensaje de difusión.
- Fuera de alcance: backend, cuentas, pagos, notificaciones, video real, mejoras al prototipo durante la ronda.

## 6. Protocolo

1. Difundir el link del prototipo y el formulario (reenvío en cadena y grupos de pádel).
2. La persona elige una consigna (publicar o postularse), prueba el prototipo y responde.
3. Filtrar por perfil (juega regularmente); registrar y excluir de las métricas a quienes no cumplan.
4. Cerrar a los 7 días o al llegar a ~8 válidos.
5. Guardar el CSV sin publicarlo (datos personales).

## 7. Decisiones humanas

Ver la tabla de decisiones en la sección 11 de `clase-05-experimento.md`.

## 8. Desvíos respecto al diseño

- Faltó la pregunta de reenvío y el registro del origen de cada respuesta.
- La pregunta abierta orientaba hacia la info de los otros jugadores.
- Piloto omitido; probado por un integrante y un amigo.
- Defecto del instrumento: el perfil simulado del tester generó confusión (R9).
