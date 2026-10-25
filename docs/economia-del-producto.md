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
| Soporte (variable) | Pendiente | Pendiente | Lo haría un amigo o un chatbot; costo previsto bajo, sin minutos estimados |
| Descuentos en tiendas | $0 de costo para el equipo | Estimación | Se financiarían a cambio de ventas; sin acuerdos todavía |
| Costos fijos por período | $50.375 al mes (Supabase Pro, US$25 × $2.015) | Referencia | Precios oficiales de Supabase; el plan gratuito pausa proyectos inactivos |
| Inversión inicial | Pendiente | Pendiente | Construcción de Pro, pantalla de prueba y chatbot sin estimar |

El precio de referencia del turno surge de búsquedas generales para el AMBA, sin tarifa de un club puntual. Confirmar con un club o plataforma de reservas.

## Resultado y escenario

- **Contribución por unidad (antes de soporte):** $5.000 − $272 = **≈ $4.728** por suscriptor al mes. Derivado de estimaciones, no es evidencia.
- **Escenario base:** precio $5.000 → contribución ≈ $4.728 → **≈ 11 suscriptores** para cubrir solo Supabase ($50.375 ÷ $4.728 ≈ 10,7).
- **Escenario exigente (cambia solo el precio a $3.000):** comisión ≈ $163 → contribución ≈ $2.837 → **≈ 18 suscriptores** ($50.375 ÷ $2.837 ≈ 17,8).
- **Qué significa:** un precio menor reduce la contribución cerca de 40% y exige unos 7 suscriptores más para cubrir el costo fijo.
- **Qué no demuestra:** que existan suscriptores dispuestos a pagar, que el soporte sea de bajo costo ni que haya ganancia. La contribución no es ganancia neta y el equilibrio omite soporte, chatbot y tiempo propio.

## Primeros clientes

- **Canal 1 (principal):** red propia. Los 8 participantes de las pruebas y sus grupos de pádel comparten la app y publican su próximo faltante.
- **Canal 2 (exploratorio):** club piloto. Investigar 3 a 5 clubes y proponer una prueba chica por derivación manual, sin comisión ni exclusividad.
- **Costo y esfuerzo previstos:** $0 de gasto publicitario (estimación) y **3 a 4 horas semanales** del equipo. Ambos canales son a implementar a futuro; no se ejecutan en esta actividad.
- **CAC / repago:** no calculables, porque hoy hay cero clientes pagadores. Dato pendiente.

## Supuesto por comprobar

- **Supuesto elegido:** organizadores y jugadores pagarían $5.000 al mes por Pro aunque WhatsApp sea gratis.
- **Prueba 1 (primero), entrevistas con precio:** 8 participantes del MVP, con el [guion de entrevista](entrevista-pro-form.md). Registro: respuestas del formulario. No demuestra pago efectivo.
- **Prueba 2 (después), puerta falsa en la app:** pantalla "Pro $5.000/mes" con los beneficios y un botón "Quiero Pro" que registra clics y el WhatsApp de contacto. No cobra y no demuestra pago efectivo, solo intención de acción.
- **Criterio previo y decisión según el resultado (propuesto, a ajustar por el equipo):**
  - Entrevistas: si al menos la mitad valora alertas o perfil verificado y menciona un precio cercano a $5.000, se avanza a la puerta falsa. Si no, se revisan los beneficios o el precio ($3.000) antes de construirla.
  - Puerta falsa: umbral de clics y contactos a definir antes de lanzarla.
- **Responsable y fecha:** pendiente de asignar por el equipo.
