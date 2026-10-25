# Economía del producto — A Jugar

- **Fecha, moneda y período:** 25/10/2026 · pesos argentinos (ARS) · mensual. Tipo de cambio usado: dólar tarjeta $2.015 (DolarHoy, 25/10/2026).
- **Usuario, valor y evidencia disponible:** organizador de un grupo de pádel amateur al que le falta un jugador. Publica el faltante, elige un reemplazo con perfil visible y coordina por WhatsApp. En la Ronda 2 del MVP, 4 de 4 completaron la tarea y 4 de 4 activaron el contacto. **No hay evidencia de disposición a pagar.**
- **Quién pagaría/financiaría y por qué (hipótesis):** el jugador, mediante una suscripción **Pro** (freemium: publicar y postularse es gratis). El club (comisión por reserva o cupo de turnos) y los anuncios o sponsors de pádel son hipótesis secundarias, sin acuerdos ni cifras.
- **Unidad económica:** suscriptor Pro por mes.

Beneficios de Pro: alertas por zona y nivel, perfil verificado e historial de asistencia, reserva con 72 h de anticipación (requiere acuerdo con un club) y descuentos en tiendas de pádel (requieren acuerdos). Se descartó la prioridad en postulaciones: puede dañar la confianza del organizador. Riesgo central: WhatsApp es gratis y hoy les funciona.

## Números iniciales

| Concepto | Importe y unidad | Observado / referencia / estimación / pendiente | Fuente o motivo |
| --- | --- | --- | --- |
| Ingreso por unidad | $5.000 por suscriptor al mes | Estimación | Referido a un turno de pádel de $50.000–$90.000 (4 jugadores ≈ $12.500–$22.500 por partido); ≈ 7% de un turno medio de $70.000 |
| Comisión Mercado Pago (variable) | ≈ $272 por suscriptor al mes (4,49% + IVA, acreditación a 10 días) | Referencia | Tarifa pública de Mercado Pago consultada por búsqueda; confirmar en la cuenta (impuestos provinciales pueden variar) |
| Chatbot de WhatsApp: mensajes (variable) | ≈ $262 por suscriptor al mes (5 mensajes de utilidad × US$0,026 × $2.015) | Estimación | Tarifas de Meta tomadas de otra IA, sin verificar en la fuente oficial. Los 5 mensajes son un supuesto de ejemplo, no del equipo. Si el bot solo responde consultas dentro de las 24 h, los primeros 1.000 mensajes al mes serían gratis, pero las alertas de Pro serían mensajes de utilidad |
| Soporte humano (un amigo) | Pendiente | Pendiente | Sin minutos estimados; hoy sería esfuerzo sin desembolso, no costo cero |
| Descuentos en tiendas | $0 de costo para el equipo | Estimación | Se financiarían a cambio de ventas; sin acuerdos todavía |
| Costos fijos por período | $80.600 al mes: Supabase Pro $50.375 (US$25) + proveedor de WhatsApp (BSP) $30.225 (US$15, extremo bajo del rango US$15–50 ≈ $30.225–$100.750) | Referencia y estimación | Supabase: precios oficiales (el plan gratuito pausa proyectos inactivos). BSP: dato de otra IA, sin verificar. Falta sumar el hosting del backend del bot |
| Inversión inicial | Pendiente | Pendiente | Construcción de Pro, pantalla de prueba y chatbot sin estimar |

El precio de referencia del turno surge de búsquedas generales para el AMBA, sin tarifa de un club puntual. Confirmar con un club o plataforma de reservas.

## Resultado y escenario

- **Contribución por unidad (con chatbot, antes de soporte humano):** $5.000 − $272 (Mercado Pago) − $262 (mensajes del bot) = **≈ $4.466** por suscriptor al mes. Derivado de estimaciones, no es evidencia.
- **Escenario base:** precio $5.000 → contribución ≈ $4.466 → **≈ 19 suscriptores** para cubrir los costos fijos ($80.600 ÷ $4.466 ≈ 18,05).
- **Escenario exigente (cambia solo el precio a $3.000):** comisión ≈ $163 → contribución ≈ $2.575 → **≈ 32 suscriptores** ($80.600 ÷ $2.575 ≈ 31,3).
- **Referencia sin chatbot (solo Supabase, soporte por un amigo):** contribución ≈ $4.728 y ≈ 11 suscriptores con $5.000 (≈ 18 con $3.000). Es un piso optimista porque el esfuerzo del amigo no está valorizado.
- **Qué significa:** un precio menor reduce la contribución cerca de 42% y exige unos 13 suscriptores más para cubrir los costos fijos.
- **Qué no demuestra:** que existan suscriptores dispuestos a pagar, que el soporte sea de bajo costo ni que haya ganancia. La contribución no es ganancia neta y el equilibrio omite hosting del bot, soporte humano y tiempo propio.

## Primeros clientes

- **Canal 1 (principal):** red propia. Los 8 participantes de las pruebas y sus grupos de pádel comparten la app y publican su próximo faltante.
- **Canal 2 (exploratorio):** club piloto. Investigar 3 a 5 clubes y proponer una prueba chica por derivación manual, sin comisión ni exclusividad.
- **Costo y esfuerzo previstos:** $0 de gasto publicitario (estimación) y **3 a 4 horas semanales** del equipo. Ambos canales son a implementar a futuro; no se ejecutan en esta actividad.
- **CAC / repago:** no calculables, porque hoy hay cero clientes pagadores. Dato pendiente.

## Supuesto por comprobar

- **Supuesto elegido:** organizadores y jugadores pagarían $5.000 al mes por Pro aunque WhatsApp sea gratis.
- **Prueba 1 (primero), entrevistas con precio:** 8 participantes del MVP, con el [guion de entrevista](entrevista-pro-form.md). Registro: respuestas del formulario. No demuestra pago efectivo.
- **Prueba 2 (después), puerta falsa en la app:** pantalla "Pro $5.000/mes" con los beneficios y un botón "Quiero Pro" que registra clics y el WhatsApp de contacto. No cobra y no demuestra pago efectivo, solo intención de acción.
- **Criterio previo y decisión según el resultado (confirmado por el equipo):**
  - Entrevistas (8 participantes): se avanza a la puerta falsa si **al menos 4 de 8** ponen alertas o perfil verificado entre sus dos beneficios más valorados, **al menos 4 de 8** califican $5.000 como "barato" o "razonable" y **al menos 4 de 8** dejan su contacto para que se les avise. Si no se cumple, se revisan los beneficios o se prueba el precio de $3.000 antes de construirla.
  - Puerta falsa: umbral de clics y contactos a definir antes de lanzarla, según la cantidad de usuarios activos.
- **Responsable y fecha:** pendiente de asignar por el equipo.
