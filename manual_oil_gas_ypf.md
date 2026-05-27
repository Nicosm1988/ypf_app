# Manual ejecutivo y tecnico para entender la industria global del petroleo y gas, Latinoamerica, Argentina, Vaca Muerta e YPF

Version de trabajo: 2026-05-27  
Enfoque: conversacion ejecutiva, criterio tecnico, lectura de KPIs, diseno de tableros y conexion entre datos y decisiones.

## Como usar este manual

Este manual esta pensado como un programa profesional progresivo. No intenta reemplazar un curso de geologia, ingenieria de reservorios o finanzas corporativas; busca darte un mapa operativo para hablar con directores, gerentes tecnicos, financieros, comerciales y equipos de datos de una petrolera integrada.

Regla de lectura:

- Nivel simple: que es y por que importa.
- Nivel tecnico: como funciona fisicamente y operacionalmente.
- Nivel ejecutivo: como se decide inversion, riesgo, margen y estrategia.
- Nivel datos/analitica: que datos se capturan, que indicadores gobiernan y como se visualiza.

Cuando veas un numero, esta marcado como hecho publico con fuente y fecha. Cuando veas "estimacion", significa que debe validarse contra fuente actual antes de usarlo en una decision. Cuando veas "criterio ejecutivo", es interpretacion profesional, no dato publicado.

## Fuentes base consultadas

- YPF, Form 20-F 2025 presentado ante la SEC, publicado en marzo de 2026: https://www.sec.gov/Archives/edgar/data/0000904851/000119312526126363/d95578d20f.htm
- YPF Investor Presentation Q4 2025, marzo de 2026: https://inversores.ypf.com/documents/presentaciones/YPF%20Investor%20Presentation%20Q4%202025%20%201.pdf
- YPF Argentina LNG, pagina oficial consultada el 2026-05-27: https://argentina-lng.ypf.com/index-en.html
- Eni, acuerdo YPF-Eni para Argentina LNG, 2025-06-06: https://www.eni.com/content/dam/enicom/documents/press-release/migrated/2025-en/06/pr-eni-ypf-sign-agreement-argentina-lng-june-2025.pdf
- Secretaria de Energia de Argentina, Vaca Muerta y reportes trimestrales: https://www.argentina.gob.ar/economia/energia/vaca-muerta y https://www.argentina.gob.ar/economia/energia/planeamiento-energetico/informacion-energetica/informes-periodicos/informe-trimestral-de-coyuntura-energetica
- EIA, Argentina production near record highs, publicado 2024-12-17: https://www.eia.gov/todayinenergy/detail.php?id=63924
- EIA, What drives crude oil prices, ultima actualizacion 2023-08-16: https://www.eia.gov/energyexplained/oil-and-petroleum-products/prices-and-outlook.php
- IEA, Oil 2025, publicado 2025: https://www.iea.org/reports/oil-2025/executive-summary
- Microsoft Fabric documentation, Real-Time Intelligence y Lakehouse, consultado 2026-05-27: https://learn.microsoft.com/en-us/fabric/real-time-intelligence/overview y https://learn.microsoft.com/en-us/fabric/data-engineering/tutorial-lakehouse-introduction
- Energistics standards, WITSML, RESQML y PRODML: https://energistics.org/the-standards
- OSDU Forum, data platform para energia: https://osduforum.org/about-us/who-we-are/osdu-mission-vision/

## Datos publicos clave para orientarte

- Argentina: la EIA informo que en septiembre de 2024 Argentina produjo 738.000 barriles diarios de crudo, el mayor nivel mensual desde 2003, y que Vaca Muerta represento 58% de ese crudo. La misma fuente indico que en los primeros nueve meses de 2024 la produccion promedio de gas fue 5,0 Bcf/d y que Vaca Muerta llego a 74% del gas argentino en septiembre de 2024.
- Exportaciones argentinas: la EIA reporto que las exportaciones de crudo crecieron de 30.000 b/d en 2017 a 128.000 b/d en 2023, con shale crude en torno al 70% de las exportaciones de crudo de 2023.
- YPF: en su Investor Presentation Q4 2025, YPF mostro produccion de crudo de 255 kbbl/d, produccion de gas natural de 36,2 Mm3/d y una integracion fuerte al mercado domestico: 85% del crudo y 94% del gas vendidos localmente, calculado sobre volumen vendido en 2025.
- YPF reservas: en la misma presentacion, YPF mostro reservas probadas P1 2025 de 1.284 Mboe, +17% interanual, con 88% asociadas a Vaca Muerta y reserve replacement ratio total de 2,0x. El Form 20-F 2025 informa un reserve replacement ratio de 198% y reservas probadas netas de 1.284 Mboe al 31 de diciembre de 2025.
- Argentina LNG: la pagina oficial de YPF indica que en febrero de 2026 YPF, Eni y XRG firmaron un Joint Development Agreement para avanzar Argentina LNG. La pagina describe un proyecto integrado upstream-to-LNG con unidades FLNG, bloques de produccion dedicados y gasoducto dedicado; indica hasta 18 Mtpa para la configuracion con dos unidades FLNG y potencial de escalamiento a 24 Mtpa. Eni habia comunicado el 2025-06-06 una fase de 12 Mtpa y una vision de hasta 30 Mtpa hacia 2030; esto debe tratarse como plan/proyecto sujeto a FID, financiamiento, permisos y ejecucion.
- Mercado global: IEA Oil 2025 estima que la demanda global de petroleo podria subir 2,5 mb/d entre 2024 y 2030 y estabilizarse cerca de 105,5 mb/d hacia fin de decada. La IEA tambien senala que petroquimica pasa a ser la principal fuente de crecimiento de demanda de petroleo desde 2026.

---

# Mapa general de la industria

La industria de oil and gas convierte roca en energia util, moleculas industriales y caja. La cadena real no es "sacar petroleo y venderlo"; es una red de decisiones encadenadas:

1. Geologia: donde hay roca generadora, reservorio, trampa o shale economicamente explotable.
2. Subsuelo: que volumen podria recuperarse, con que incertidumbre y bajo que precio.
3. Pozo: que diseno maximiza contacto con la roca al menor costo y riesgo.
4. Produccion: como sostener caudal, presion, uptime y seguridad.
5. Superficie: como separar, tratar, medir, comprimir, almacenar y evacuar.
6. Midstream: como mover crudo, gas, NGL (natural gas liquids, liquidos del gas natural), GLP (gas licuado de petroleo), refinados y petroquimicos.
7. Downstream: como convertir crudo en combustibles, asfaltos, lubricantes, feedstocks petroquimicos y margen.
8. Trading: como capturar precio neto ajustado por calidad, flete, impuestos, restricciones y timing.
9. Comercializacion: como vender energia al canal mayorista, minorista, industrial, aviacion, agro, transporte y exportacion.
10. Finanzas: como transformar produccion en EBITDA, cash flow, reservas, reposicion y retorno sobre capital.
11. Datos: como conectar mediciones de campo, planta, ductos, laboratorio, ERP, trading, estaciones, finanzas y emisiones.

La mentalidad ejecutiva de una petrolera integrada:

- Upstream pregunta: "Que barriles o moleculas puedo agregar con el mejor retorno ajustado por riesgo?"
- Midstream pregunta: "Puedo evacuar lo que produzco sin destruir valor por cuellos de botella?"
- Downstream pregunta: "Que slate de crudo y que severidad de conversion maximizan margen y seguridad de abastecimiento?"
- Trading pregunta: "Donde vale mas esta molecula neta de transporte, impuestos, calidad y riesgo?"
- Finanzas pregunta: "El capex de hoy crea reservas, caja futura y opcionalidad exportadora?"
- Datos pregunta: "Que decision critica no estamos viendo a tiempo por datos fragmentados?"

---

# Modulo 1. Cadena de valor integrada

## 1. Titulo

Cadena de valor completa: upstream, midstream, downstream, petroquimica, trading y comercializacion.

## 2. Objetivo

Entender como una empresa petrolera real gana o pierde dinero a traves de activos fisicos conectados por restricciones tecnicas, comerciales y regulatorias.

## 3. Explicacion conceptual

Una petrolera integrada no vende "petroleo" solamente. Produce hidrocarburos, los transporta, los transforma, los mezcla, los almacena, los comercializa y administra riesgos de precio, tipo de cambio, regulacion, seguridad y disponibilidad operacional. La integracion importa porque permite capturar margen en varios eslabones, pero tambien obliga a coordinar miles de decisiones: perforar, evacuar, refinar, importar, exportar, abastecer estaciones, mantener inventarios y financiar capex.

La cadena tambien incluye transporte maritimo, logistica terrestre, terminales, almacenamiento, blending, calidad de combustibles y planificacion integrada. En una compania real, estas funciones no son soporte administrativo: definen si el barril llega al cliente correcto, con la especificacion correcta, al menor costo y en el momento en que el mercado paga mas.

## 4. Explicacion tecnica

| Eslabon | Activos | Procesos | Unidades | Costos | Ingresos | Cuellos de botella | KPIs criticos |
|---|---|---|---|---|---|---|---|
| Upstream | areas, pozos, rigs, fractura, baterias, plantas | exploracion, perforacion, completacion, produccion, workover | bbl/d, Mm3/d, boe/d, EUR, IP30 | capex pozo, lifting cost, agua, energia, servicios | venta crudo, gas, NGL | rigs, fractura, arena, agua, permisos, evacuacion | produccion, EUR, lifting cost, NPT, uptime, RRR |
| Midstream | ductos, compresoras, tanques, terminales | gathering, tratamiento, compresion, transporte, almacenamiento | bbl/d, m3/d, Bcf/d, bar, linepack | energia, mantenimiento, tarifas, expansion | tarifas, capacidad contratada, servicios | capacidad firme, presion, tanques, puerto | throughput, capacidad utilizada, disponibilidad, perdidas |
| Downstream | refinerias, unidades de conversion, terminales | destilacion, cracking, hidrotratamiento, blending | kbbl/d, yield %, ppm azufre | crudo, energia, hidrogeno, catalizadores, mantenimiento | venta nafta, diesel, jet, GLP, asfaltos | paradas, calidad crudo, hidrogeno, almacenamiento | margen, utilizacion, yield, disponibilidad |
| Petroquimica | crackers, plantas de polimeros, aromatics | conversion de NGL/nafta/gas a insumos quimicos | t/d, kt/a, USD/t | feedstock, energia, catalizadores | polietileno, propileno, metanol, fertilizantes | feedstock, escala, mercado, energia | margen petroquimico, utilizacion, calidad |
| Trading | desks, contratos, shipping, risk systems | compra/venta spot, term, hedging, arbitraje | bbl, t, MMBtu, USD/bbl | flete, storage, seguros, financiamiento | margen comercial, optimizacion | credito, regulacion, volatilidad | netback, VaR, PnL, exposicion |
| Transporte y almacenamiento | buques, camiones, trenes, barcazas, tanques, terminales | transporte maritimo, logistica terrestre, carga/descarga, segregacion, blending | bbl, m3, t, dias de cobertura | flete, demoras, seguros, perdidas, storage | servicios logisticos, arbitraje, continuidad comercial | clima, puerto, tanques, calidad, huelgas | OTIF, costo logistico, demurrage, inventario |
| Comercializacion | estaciones de servicio, mayoristas, B2B, aviacion/agro | pricing, despacho, retail, fidelizacion | litros, m3, margen/litro | logistica, impuestos, costo producto | ventas combustibles y servicios | precio regulado, competencia, inventario | market share, margen canal, rotacion |

## 5. Ejemplo global

ExxonMobil, Shell, BP, TotalEnergies, Chevron y Petrobras combinan upstream, trading, LNG, refinacion y comercializacion. La integracion les permite decidir si un barril se vende como crudo, se refina, se exporta, se almacena o se usa como feedstock petroquimico. La decision cambia segun Brent, WTI, spreads regionales, capacidad de refineria, flete, inventarios y demanda.

## 6. Ejemplo latinoamericano

Petrobras combina pre-sal offshore, refinerias, gas, trading y una posicion fuerte en Brasil. Pemex combina E&P y refinacion con alta carga fiscal y desafios financieros. Ecopetrol integra E&P, transporte via Cenit, refinacion y comercializacion. YPF integra Vaca Muerta, refinerias, terminales, estaciones y potencial LNG.

## 7. Ejemplo argentino

Argentina tiene cinco cuencas productivas principales: Neuquina, Golfo San Jorge, Austral, Cuyana y Noroeste. La Cuenca Neuquina domina el crecimiento por Vaca Muerta; Golfo San Jorge aporta crudo convencional maduro; Austral y Noroeste son relevantes para gas; Cuyana es mas madura y de menor escala. La integracion con refinerias y terminales define si el pais importa combustibles, exporta crudo o equilibra mercado interno.

## 8. Vaca Muerta / YPF

YPF opera como empresa integrada: produce en Vaca Muerta, evacua por infraestructura propia y de terceros, procesa gas, refina crudo, vende combustibles y participa en proyectos de exportacion. Su pregunta estrategica no es solo "cuantos barriles puedo producir", sino "cuantos barriles puedo monetizar con infraestructura, precio, mercado y caja suficientes".

## 9. KPIs relevantes

Produccion total, shale/total, lifting cost, capex por barril agregado, reserve replacement ratio, throughput ductos, utilizacion refineria, margen de refinacion, inventarios, market share, EBITDA, free cash flow, deuda neta/EBITDA, emisiones por boe.

## 10. Datos necesarios

Datos de pozos, produccion diaria, medicion fiscal, plantas, ductos, tanques, laboratorio, calidad de crudo, ventas, precios, contratos, ERP (Enterprise Resource Planning), EAM (Enterprise Asset Management), SCADA (Supervisory Control and Data Acquisition), trading, finanzas y emisiones.

## 11. Decisiones empresariales asociadas

Asignacion de capex, ritmo de perforacion, contratos de transporte, turnarounds de refineria, importacion/exportacion, cobertura de precios, inventarios minimos, pricing domestico, venta de activos maduros y alianzas internacionales.

## 12. Riesgos

Geologico, operacional, HSE (health, safety and environment), precio internacional, tipo de cambio, regulacion, sindicatos, cuellos de infraestructura, financiamiento, licencia social, emisiones y ciberseguridad industrial.

## 13. Tablero sugerido

Pantalla ejecutiva integrada con: produccion vs plan, evacuacion disponible, utilizacion de refinerias, margen downstream, ventas por canal, exportaciones, caja, deuda, capex, incidentes HSE y emisiones. Debe mostrar alertas por cuello de botella: pozo produce, planta procesa, ducto evacua, terminal exporta, caja cobra.

## 14. Preguntas de autoevaluacion

- Que diferencia hay entre producir un barril y monetizarlo?
- Por que una refineria puede ser estrategica aun si el margen de un mes es bajo?
- Que decision cambia si midstream esta lleno?
- Como se conecta el precio domestico con el capex upstream?

## 15. Fuentes recomendadas

YPF Form 20-F 2025, YPF Investor Presentation Q4 2025, EIA Energy Explained, IEA Oil 2025, reportes de Petrobras, Pemex y Ecopetrol.

---

# Modulo 2. Upstream: exploracion, desarrollo y produccion

## 1. Titulo

Upstream profesional: de la roca a la curva de produccion.

## 2. Objetivo

Poder conversar con directores de exploracion y produccion sobre reservas, productividad, pozos, costos, declino, facilities y valor economico.

## 3. Explicacion conceptual

Upstream es encontrar hidrocarburos y producirlos de forma rentable y segura. En convencional, se busca una acumulacion donde el hidrocarburo migro desde la roca generadora hacia un reservorio poroso atrapado por una estructura. En shale, la propia roca madre funciona como fuente y reservorio de muy baja permeabilidad; por eso se necesita pozo horizontal y fractura hidraulica.

## 4. Explicacion tecnica

Conceptos clave:

- Sismica 2D/3D: imagen indirecta del subsuelo para mapear estructuras, fallas, espesores y riesgos. En shale ayuda a ubicar ventanas, evitar fallas y disenar pads.
- Recursos: volumen estimado potencial, con menor certeza comercial.
- Reservas: volumen recuperable comercialmente bajo condiciones tecnicas, economicas y regulatorias. P1 = probadas; P2 = probadas + probables; P3 = probadas + probables + posibles.
- Tight gas: gas en reservorios de baja permeabilidad que no necesariamente son shale; suele requerir fractura hidraulica, pero la roca reservorio y la roca generadora pueden no ser la misma. En Argentina convive con shale gas en la Cuenca Neuquina y otras cuencas.
- Perforacion vertical/horizontal: vertical accede al objetivo; horizontal aumenta contacto con la roca.
- Completacion: prepara el pozo para producir; en shale incluye punzado, fractura por etapas y puesta en produccion.
- Fractura hidraulica: inyeccion de agua, arena y aditivos para crear conductividad artificial.
- Flowback: retorno inicial de fluidos despues de fractura.
- Declino: caida de produccion con el tiempo; en shale es acelerada al comienzo.
- EUR (estimated ultimate recovery): recuperacion final estimada de un pozo.
- Lifting cost: costo operativo para producir un barril equivalente.
- F&D cost (finding and development): costo de encontrar y desarrollar reservas.
- Factor de recuperacion: porcentaje del hidrocarburo in situ que se recupera.
- Facilities: separadores, tratadores, tanques, compresion, deshidratacion, medicion y sistemas electricos.
- Agua de produccion: agua que sale con hidrocarburos; requiere tratamiento, disposal o reutilizacion.
- Gas asociado: gas producido junto con crudo; puede venderse, reinyectarse, usarse para energia o, si no hay infraestructura, provocar restricciones.
- Telemetria: transmision automatica de variables de campo, como presion, caudal, temperatura, vibracion, estado de bombas y energia. Es la base para SCADA, control remoto, mantenimiento predictivo y optimizacion de produccion.

## 5. Ejemplo global

Permian Basin en Estados Unidos muestra factory mode: muchos pads, laterales largos, completaciones intensivas, infraestructura densa, multiples operadores, mercados de servicios profundos y acceso a capital. El aprendizaje continuo redujo tiempos de perforacion y aumento EUR por pozo.

## 6. Ejemplo latinoamericano

Brasil offshore pre-sal es el contrapunto: no es factory shale sino megacampos offshore con FPSO (floating production, storage and offloading), alto capex, largos plazos, enorme productividad por pozo y complejidad de CO2, sal y aguas ultraprofundas.

## 7. Ejemplo argentino

Argentina combina yacimientos convencionales maduros con no convencionales. En campos maduros, el foco es eficiencia, recuperacion secundaria/terciaria, lifting cost y abandono responsable. En Vaca Muerta, el foco es crecimiento, productividad por pozo, costo por etapa, infraestructura y mercado.

## 8. Vaca Muerta / YPF

Vaca Muerta requiere disenar pozos horizontales con laterales largos, muchas etapas de fractura, alta intensidad de arena/agua y gestion precisa de evacuacion. En areas como Loma Campana, La Amarga Chica y Bandurria Sur, YPF combina desarrollo masivo, socios, aprendizaje operativo y medicion de productividad por pad. Segun presentacion YPF Q4 2025, sus core hub blocks incluyen Loma Campana, La Amarga Chica, Bandurria Sur, Aguada del Chanar, Aguada de la Arena, Rincon del Mangrullo y Sierra Chata, con socios como Chevron, Vista, Shell, CGC y Pampa segun bloque.

## 9. KPIs relevantes

Produccion diaria, IP30, IP90, EUR, declino, downtime, uptime, costo por pozo, costo por metro lateral, etapas de fractura por dia, NPT (non-productive time), lifting cost, F&D cost, RRR (reserve replacement ratio), gas flaring/venting, agua producida, emisiones.

## 10. Datos necesarios

Sismica, tops geologicos, registros de pozo, trayectoria, presion, temperatura, fluidos, proppant, agua, quimicos, etapas, caudales, choke, presion de cabeza, downtime, workovers, medicion fiscal, costos, permisos y emisiones.

## 11. Decisiones empresariales asociadas

Seleccion de areas, espaciamiento entre pozos, longitud lateral, numero de etapas, intensidad de fractura, ritmo de desarrollo, contratos de servicios, electrificacion, facilities, evacuacion, reinyeccion y priorizacion de pads.

## 12. Riesgos

Heterogeneidad de roca, interferencia entre pozos, sobrecapitalizacion, falta de agua/arena, congestiones de fractura, accidentes, perdida de pozo, decline mayor al previsto, precios bajos, restricciones de evacuacion y conflictividad social.

## 13. Tablero sugerido

Dashboard de upstream con mapa de pads, curva tipo por area, produccion real vs forecast, IP30/IP90 por cohorte, costo por pozo, NPT, fractura por dia, uptime, gas asociado no evacuado, agua y emisiones. Debe permitir comparar vintage de pozos: pozos 2022 vs 2023 vs 2024 vs 2025.

## 14. Preguntas de autoevaluacion

- Por que EUR no es lo mismo que reservas probadas?
- Por que un pozo shale puede ser excelente tecnicamente y malo economicamente?
- Que pasa si el gas asociado no tiene evacuacion?
- Como cambia el valor de un pad si baja el NPT?

## 15. Fuentes recomendadas

SPE papers sobre shale completions, reportes de YPF, EIA, IAPG, Secretaria de Energia, Energistics WITSML/PRODML para datos de perforacion y produccion.

---

# Modulo 3. Shale y no convencionales

## 1. Titulo

El modelo shale: roca, pozo, fabrica, curva de aprendizaje y restriccion midstream.

## 2. Objetivo

Comprender por que el shale cambio la industria mundial y que condiciones hacen rentable a Vaca Muerta.

## 3. Explicacion conceptual

El shale cambio la industria porque convirtio recursos antes considerados de baja permeabilidad en produccion comercial repetible. La clave no fue solo una tecnologia, sino la combinacion de geologia, perforacion horizontal, fractura multietapa, datos, servicios, capital, infraestructura y aprendizaje industrial.

## 4. Explicacion tecnica

Variables de roca:

- TOC (total organic carbon): materia organica que indica potencial generador.
- Espesor: mas espesor permite mas inventario, mas landing zones y desarrollo vertical por benches.
- Presion: mayor presion puede mejorar energia de reservorio y productividad.
- Madurez termica: define ventana de petroleo, gas humedo o gas seco.
- Mineralogia: afecta fracturabilidad.
- Porosidad y saturacion: determinan almacenamiento.
- Permeabilidad: extremadamente baja; requiere fractura.

Variables de pozo:

- Longitud lateral: mas contacto con roca, pero mayor costo y complejidad.
- Etapas de fractura: mas puntos de estimulacion; costo y productividad deben balancearse.
- Proppant: arena que mantiene fracturas abiertas.
- Agua: fluido principal de bombeo; requiere abastecimiento, reciclaje y disposal.
- Choke management: controla caudal inicial para proteger productividad.

Variables industriales:

- Factory mode: repeticion estandarizada de pads y pozos.
- Pad drilling: varios pozos desde una misma locacion.
- Cube development: desarrollo simultaneo de varios benches/zones para minimizar interferencias.
- Learning curve: reduccion de tiempo y costo por repeticion y datos.

## 5. Ejemplo global

Estados Unidos logro escala shale por propiedad privada del subsuelo en muchos estados, ecosistema profundo de servicios, capital de high yield/equity, infraestructura extensa, mercados liquidos, midstream competitivo y datos publicos. Permian, Eagle Ford, Bakken, Marcellus y Haynesville muestran distintos modelos de aceite, gas humedo y gas seco.

## 6. Ejemplo latinoamericano

Vaca Muerta es el caso shale mas avanzado fuera de Norteamerica. Otros paises tienen recursos no convencionales, pero pocos combinan roca de clase mundial, operadores activos, infraestructura existente, mercado interno de gas y petroleo, y posibilidad exportadora.

## 7. Ejemplo argentino

Argentina tiene una ventaja geologica y una desventaja macro. La roca puede competir internacionalmente; el costo de capital, regulacion, tipo de cambio, retenciones, acceso a divisas e infraestructura pueden subir el breakeven real. Por eso el negocio no se evalua solo por EUR: se evalua por netback, estabilidad y capacidad de monetizacion.

## 8. Vaca Muerta / YPF

Vaca Muerta tiene ventanas de oil, wet gas y dry gas. La ventana de petroleo monetiza rapido si hay oleoductos y puertos. La ventana de gas necesita demanda domestica, exportacion regional, almacenamiento o LNG para romper la estacionalidad. YPF, Vista, Tecpetrol, PAE, Shell, Chevron, Pluspetrol, TotalEnergies, Pampa y otros operadores empujan distintos modelos: shale oil de rapido cash flow, gas mas expuesto a infraestructura y demanda estacional, y proyectos integrados LNG.

## 9. KPIs relevantes

IP30, IP90, EUR, costo por pozo, costo por etapa, costo por metro lateral, arena por pozo, agua por pozo, etapas por dia, drilling days, completion days, NPT, declino por cohorte, breakeven, netback, capacidad de evacuacion, gas flared/vented.

## 10. Datos necesarios

Geologia, presion, geoquimica, landing zone, trayectoria, completacion, arena, agua, quimicos, costos, tiempos, produccion diaria, presion, interferencia, infraestructura y precios.

## 11. Decisiones empresariales asociadas

Que areas desarrollar primero, que landing zones priorizar, cuanto lateral perforar, cuanta arena bombear, cuando pasar de piloto a desarrollo, que contratos de midstream firmar, como financiar capex y como proteger precio.

## 12. Riesgos

Declino mas rapido, interferencia parent-child, falta de evacuacion, inflacion de servicios, sensibilidad a Brent, tipo de cambio, retenciones, permisos ambientales, agua, licencia social y financiamiento.

## 13. Tablero sugerido

Panel de "shale factory": pozos perforados, pozos conectados, DUCs (drilled but uncompleted wells), fractura por flota, IP30/IP90, EUR forecast, costo por etapa, avance de pads, evacuacion disponible, gas asociado restringido y sensibilidad economica a Brent/tipo de cambio.

## 14. Preguntas de autoevaluacion

- Por que shale necesita escala y repeticion?
- Que significa que el shale sea "manufacturing-like"?
- Por que un cuello midstream cambia el valor de la roca?
- Que diferencia hay entre ventana de oil y dry gas?

## 15. Fuentes recomendadas

EIA sobre shale, SPE papers de completacion, reportes de YPF/Vista/Tecpetrol/PAE, Secretaria de Energia, IAPG.

## Comparacion Estados Unidos vs Vaca Muerta

| Dimension | Estados Unidos shale | Vaca Muerta | Implicancia |
|---|---|---|---|
| Geologia | Multiples plays, madurez tecnica alta | Roca de clase mundial en Cuenca Neuquina | Vaca Muerta puede competir en productividad, pero necesita escala |
| Servicios | Mercado profundo y competitivo | Menor escala, cuello en equipos especializados | Costos bajan con actividad sostenida |
| Midstream | Red extensa, aunque con cuellos locales | Evacuacion en expansion | Infraestructura define velocidad de crecimiento |
| Capital | Mercados mas liquidos | Riesgo pais y costo de capital alto | Proyectos necesitan estabilidad contractual |
| Regulacion | Federal/estadual, mercados liquidos | Nacion + provincias, retenciones, divisas | Netback local puede diferir mucho de Brent |
| Mercado gas | Hub Henry Hub, storage, LNG | Demanda estacional, bajo almacenamiento, exportacion regional/LNG en desarrollo | Gas necesita anclas de demanda y LNG |
| Propiedad | En muchos casos mineral rights privados | Recursos provinciales concesionados | Negociacion provincia-operador es central |
| Escala | Millones de b/d | Crecimiento acelerado, aun menor escala | Curva de aprendizaje en marcha |

---

# Modulo 4. Midstream: evacuacion, transporte y almacenamiento

## 1. Titulo

Midstream como habilitador o freno del crecimiento.

## 2. Objetivo

Entender como se mueve el crudo y el gas, y por que la infraestructura puede limitar Vaca Muerta aunque la roca sea excelente.

## 3. Explicacion conceptual

Midstream es el sistema circulatorio de la industria. Si el upstream es el corazon que bombea produccion, midstream son arterias, pulmones y tanques. Sin capacidad de evacuacion, un pozo debe cerrar, vender con descuento o demorar desarrollo.

## 4. Explicacion tecnica

Componentes:

- Gathering: red de baja/media presion que junta produccion de pozos.
- Separacion: separa gas, crudo, agua y solidos.
- Tratamiento de crudo: deshidratacion, desalado, estabilizacion, medicion.
- Tratamiento de gas: remocion de agua, CO2, H2S si aplica, NGL y compresion.
- Oleoductos: transportan crudo; requieren bombas, medicion, calidad y tanques.
- Gasoductos: transportan gas; dependen de presion, compresion, linepack y demanda.
- Poliductos: transportan refinados por batches.
- Terminales y puertos: almacenamiento, blending, carga de buques, medicion fiscal.
- Nominaciones: pedidos contractuales de transporte por periodo.
- Capacidad firme: derecho prioritario, normalmente con pago take-or-pay.
- Capacidad interrumpible: se usa si hay disponibilidad.
- Linepack: gas almacenado fisicamente dentro del gasoducto por presion.

## 5. Ejemplo global

Permian mostro varias veces que el precio local del crudo o gas puede descontarse cuando la produccion crece mas rapido que oleoductos/gasoductos. En gas, una restriccion puede llevar precios locales casi a cero o negativos. En crudo, puede ampliar descuentos contra WTI/Brent.

## 6. Ejemplo latinoamericano

Brasil offshore usa FPSO y exportacion maritima; Guyana tambien. Colombia depende de oleoductos vulnerables y exportacion por terminales. Bolivia dependio de gasoductos a Brasil y Argentina; cuando cae produccion, la infraestructura queda subutilizada.

## 7. Ejemplo argentino

Argentina tuvo historicamente gasoductos pensados para traer gas desde Bolivia y norte hacia centros de consumo. Con Vaca Muerta, se necesita revertir flujos, expandir transporte desde Neuquen, aumentar compresion y crear salida exportadora por ductos y LNG. En crudo, oleoductos hacia Chile, Bahia Blanca y futuras expansiones como Vaca Muerta Sur son claves.

## 8. Vaca Muerta / YPF

La EIA destaco que nuevos ductos redujeron importaciones de LNG y habilitaron mayor evacuacion de gas desde Vaca Muerta. Tambien senalo inversiones para expandir distribucion hacia el norte, reversas y exportaciones regionales. YPF reporto en su 20-F 2025 la finalizacion de un ducto de 86,6 km y 4,5 Mm3/d hacia el Complejo Industrial El Porton para evacuar gas asociado del norte de Vaca Muerta.

## 9. KPIs relevantes

Capacidad utilizada, throughput, presion, disponibilidad, linepack, capacidad firme, capacidad interrumpible, cumplimiento de nominaciones, perdidas, calidad, tanques disponibles, costo de transporte, incidentes.

## 10. Datos necesarios

SCADA, medicion fiscal, contratos, nominaciones, cromatografia gas, API y azufre del crudo, presion, temperatura, bombas, compresoras, tanques, buques, ordenes de despacho y mantenimiento.

## 11. Decisiones empresariales asociadas

Firmar take-or-pay, expandir ductos, construir plantas, contratar tanques, priorizar pads, exportar, refinar localmente, cerrar produccion, invertir en compresion o esperar demanda.

## 12. Riesgos

Congestion, fallas de ducto, calidad fuera de especificacion, indisponibilidad de compresoras, derrames, permisos, sobreinversion, subutilizacion, riesgo tarifario y riesgo contractual.

## 13. Tablero sugerido

Mapa GIS de ductos y terminales con capacidad nominal, capacidad usada, presion, linepack, tanques, nominaciones, restricciones, paradas, alertas HSE y forecast de produccion incremental vs capacidad disponible.

## 14. Preguntas de autoevaluacion

- Por que una petrolera puede demorar pozos aunque tenga inventario rentable?
- Que diferencia hay entre capacidad firme e interrumpible?
- Como afecta el linepack a la operacion diaria?
- Que significa "medicion fiscal" y por que importa?

## 15. Fuentes recomendadas

EIA Argentina 2024, ENARGAS, Secretaria de Energia, Transportadora de Gas del Sur (TGS), Transportadora de Gas del Norte (TGN), Oldelval, Oiltanking/terminales, YPF 20-F.

## Por que un cuello midstream limita Vaca Muerta

El valor del shale depende de repetir pozos. Si un pad produce mas gas asociado que el gathering o la planta puede procesar, la empresa debe bajar choke, cerrar pozos, quemar/ventear si la regulacion lo permite -cada vez menos aceptable-, o vender con descuento. Si el oleoducto esta lleno, el crudo se mueve por camion o no se mueve; sube costo, baja netback y cae retorno. Si el gasoducto esta lleno en invierno pero sobra gas en verano, el desarrollo de gas seco necesita almacenamiento, contratos firmes, exportacion regional o LNG.

---

# Modulo 5. Downstream: refinacion, combustibles y comercializacion

## 1. Titulo

Refinacion y combustibles: convertir crudo en margen, abastecimiento y posicion competitiva.

## 2. Objetivo

Entender como funciona una refineria, que define su margen y por que es estrategica para una empresa integrada como YPF.

## 3. Explicacion conceptual

Una refineria compra o recibe crudo y lo transforma en productos: naftas, gasoil, jet fuel, GLP, fuel oil, asfaltos, lubricantes, azufre y feedstocks petroquimicos. No todos los crudos sirven igual: API gravity, azufre, metales y acidez cambian rendimiento, costo y calidad.

## 4. Explicacion tecnica

Unidades principales:

- Destilacion atmosferica: separa por puntos de ebullicion.
- Destilacion al vacio: procesa residuos atmosfericos sin craquear termicamente.
- FCC (fluid catalytic cracking): convierte gasoleos pesados en naftas y olefinas.
- Hidrocracking: conversion con hidrogeno para diesel/jet de alta calidad.
- Reforming catalitico: mejora octano y produce aromatics/hidrogeno.
- Coquizacion: convierte residuo pesado en destilados y coque.
- Hidrotratamiento: remueve azufre, nitrogeno y metales.
- Blending: mezcla corrientes para cumplir octano, cetano, vapor pressure, azufre y especificaciones.
- Calidad de combustibles: conjunto de especificaciones fisicoquimicas y regulatorias que determinan si un producto puede venderse: azufre, octano, cetano, presion de vapor, punto de inflamacion, densidad, contenido de biocomponentes, estabilidad y contaminantes.

Variables:

- Slate de crudo: mezcla de crudos procesados.
- Yield: rendimiento de productos por barril de crudo.
- Nelson Complexity Index: indicador de complejidad de conversion.
- Crack spread: diferencia entre precio de productos y crudo.
- Margen de refinacion: valor de productos menos costo de crudo, energia, hidrogeno, catalizadores y logistica.
- Utilizacion: throughput real / capacidad.
- Planificacion integrada: coordinacion semanal/mensual entre crude supply, refineria, terminales, poliductos, camiones, inventarios, demanda comercial, importaciones y exportaciones. En combustibles, una mala planificacion puede convertir un buen margen teorico en quiebres de stock o importaciones caras.

## 5. Ejemplo global

Refinerias complejas en Estados Unidos Gulf Coast compran crudos pesados/descontados y producen combustibles limpios para mercado interno y exportacion. Singapur y Rotterdam son hubs de refinacion, almacenamiento, blending y trading.

## 6. Ejemplo latinoamericano

Brasil tiene refinacion relevante pero historicamente importo parte de combustibles. Mexico invirtio en aumentar autosuficiencia con Dos Bocas, pero enfrenta desafios de eficiencia y margen. Colombia tiene Cartagena y Barrancabermeja. Argentina tiene un sistema mas chico, con YPF como actor dominante.

## 7. Ejemplo argentino

El downstream argentino esta condicionado por impuestos, precios internos, demanda local, regulacion de calidad, capacidad logistico-portuaria y disponibilidad de crudo domestico. Cuando el precio interno de combustibles se desacopla de paridad internacional, el margen de refinacion y el incentivo de upstream se alteran.

## 8. Vaca Muerta / YPF

YPF opera una posicion integrada con refinerias, terminales, poliductos y red de estaciones. Su ventaja no es solo producir crudo; es capturar valor desde el pozo hasta el surtidor. Su Investor Presentation Q4 2025 muestra refinacion de 320 kbbl/d como figura de integracion 2025 y una utilizacion/margen downstream relevante en 4Q25. La decision clave es que barril va a refineria, que barril se exporta y que producto conviene importar si una unidad esta parada o el mercado local demanda mas diesel.

## 9. KPIs relevantes

Margen de refinacion, crack spread, utilizacion, yield por producto, disponibilidad mecanica, eficiencia energetica, intensidad energetica, paradas no programadas, calidad producto, inventarios criticos, demoras logisticas, ventas por canal, market share, margen por producto.

## 10. Datos necesarios

Crude assays, precios, plan de carga, rendimientos por unidad, laboratorio, blend recipes, energia, hidrogeno, catalizadores, mantenimiento, inventarios, pedidos, despachos, precios de canal, impuestos y costos logisticos.

## 11. Decisiones empresariales asociadas

Comprar/vender crudo, ajustar slate, parar unidades, priorizar diesel vs nafta, importar combustibles, exportar excedentes, invertir en conversion, cumplir normas de azufre, definir inventarios y precios por canal.

## 12. Riesgos

Accidentes de proceso, incendios, paradas no programadas, calidad fuera de especificacion, restriccion de hidrogeno, obsolescencia, regulacion de precios, shocks de demanda, falta de crudo adecuado e incidentes ambientales.

## 13. Tablero sugerido

Tablero refinery cockpit: throughput, utilizacion, margen por barril, yield, disponibilidad de unidades criticas, inventarios por tanque, productos fuera de especificacion, plan vs real, energia por barril, incidentes de seguridad de procesos y forecast de demanda.

## 14. Preguntas de autoevaluacion

- Por que el margen de refinacion no es lo mismo que crack spread?
- Que significa que una refineria sea mas compleja?
- Por que blending es una decision economica y no solo tecnica?
- Que pasa con el abastecimiento si una unidad de hidrotratamiento sale de servicio?

## 15. Fuentes recomendadas

EIA refining basics, YPF 20-F, reportes de refinacion de Petrobras/Pemex/Ecopetrol, normas de calidad de combustibles de Argentina.

---

# Modulo 6. Trading, precios y mercados internacionales

## 1. Titulo

Precios, netbacks, paridades, trading y riesgo.

## 2. Objetivo

Entender como una petrolera decide vender localmente, exportar, refinar, importar o almacenar.

## 3. Explicacion conceptual

El precio relevante para una empresa no es solo Brent o WTI. Es el netback: precio final menos flete, seguros, calidad, terminal, impuestos, retenciones, descuentos, financiamiento y riesgo. Una empresa compara alternativas: export parity, import parity, precio domestico regulado, margen de refino y valor de inventario.

## 4. Explicacion tecnica

Benchmarks:

- Brent: referencia global para crudos del Atlantico y gran parte del comercio internacional.
- WTI: referencia estadounidense, muy relevante para shale y mercados financieros.
- Dubai/Oman: referencia para Asia y crudos de Medio Oriente.
- Henry Hub: referencia de gas estadounidense.
- JKM (Japan Korea Marker): referencia LNG spot Asia.
- TTF: referencia gas Europa.

Conceptos:

- Diferencial de calidad: ajuste por API, azufre, metales, acidez y rendimiento.
- Flete: costo maritimo o terrestre.
- Netback exportador: precio destino - flete - terminal - impuestos - calidad.
- Import parity: costo de importar producto equivalente puesto en mercado local.
- Export parity: valor de exportar producto/crudo neto de costos.
- Hedging: cobertura con futuros, swaps u opciones.
- Spot vs term: venta puntual vs contrato de plazo.
- Contango/backwardation: curva de futuros que incentiva almacenamiento o venta inmediata.

## 5. Ejemplo global

Una refineria europea decide si compra Brent, crudo estadounidense, crudo africano o crudo de Medio Oriente comparando yield, flete, disponibilidad y margen producto. Un trader decide si almacena diesel si la curva paga carry, o si vende rapido si el mercado esta backwardated.

## 6. Ejemplo latinoamericano

Brasil exporta crudo pre-sal y tambien importa determinados refinados segun demanda y capacidad de refinacion. Mexico exporta Maya pero busca refinar mas localmente. Colombia exporta crudo y tiene riesgo de reservas. Guyana exporta casi todo su crudo por FPSO.

## 7. Ejemplo argentino

Argentina analiza paridad de exportacion para crudo de Vaca Muerta y paridad de importacion para combustibles. Retenciones, tipo de cambio, precios internos y permisos pueden modificar el netback. Si el precio domestico de combustibles queda por debajo de paridad de importacion, la refinacion puede tensionarse; si el precio domestico de crudo queda por debajo de export parity, upstream pierde incentivo.

## 8. Vaca Muerta / YPF

Vaca Muerta shale oil puede convertirse en flujo de dolares si hay oleoductos, terminales y precio exportable competitivo. Para YPF, el arbitraje es integrado: producir crudo, alimentar refinerias propias, vender combustibles localmente, exportar excedentes o importar diesel/jet si el sistema lo necesita. En gas, el arbitraje es mas complejo por estacionalidad: mercado interno, Chile, Brasil, LNG importado/evitado y futuro LNG exportador.

## 9. KPIs relevantes

Netback, realized price, Brent differential, crack spread, margen por canal, inventarios, dias de cobertura, VaR (value at risk), exposicion FX, PnL trading, cumplimiento contractual, costo logistico por unidad.

## 10. Datos necesarios

Precios spot/futuros, curvas, contratos, fletes, calidad, inventarios, demanda, restricciones, impuestos, retenciones, tipo de cambio, permisos de exportacion/importacion y credit risk.

## 11. Decisiones empresariales asociadas

Exportar crudo, refinar localmente, importar producto, cubrir precio, almacenar, mezclar, redireccionar buques, negociar contratos term, ajustar capex o acelerar ventas.

## 12. Riesgos

Volatilidad Brent/WTI, OPEC+, shale estadounidense, demanda china, sanciones, guerras, rutas maritimas, seguros, tipo de cambio, regulacion domestica, credit risk y basis risk.

## 13. Tablero sugerido

Trading dashboard con Brent/WTI/Dubai, diferenciales locales, netback por ruta, margen refino, import/export parity, inventarios, exposicion abierta, hedges, VaR y alertas de regulacion/logistica.

## 14. Preguntas de autoevaluacion

- Por que Brent alto no garantiza rentabilidad local?
- Como se calcula un netback exportador?
- Cuando conviene importar combustible aunque haya refinerias?
- Que riesgo cubre un hedge y cual no cubre?

## 15. Fuentes recomendadas

EIA What drives crude oil prices, IEA Oil Market Report, OPEC MOMR, S&P Global, Argus, Platts, reportes de companias.

---

# Modulo 7. Latinoamerica oil and gas

## 1. Titulo

Mapa estrategico de Latinoamerica.

## 2. Objetivo

Comparar Argentina con sus vecinos y entender los modelos de compania nacional, regulacion, recursos, infraestructura y riesgo politico.

## 3. Explicacion conceptual

Latinoamerica no es un mercado unico. Brasil es offshore de escala global; Mexico es un gigante maduro con desafios de declino y deuda; Colombia es productor medio con riesgo exploratorio; Venezuela tiene recursos enormes pero colapso institucional; Guyana es el nuevo exportador offshore; Argentina es el gran caso shale; Bolivia es gas maduro en declino; Chile, Uruguay y Paraguay son sobre todo importadores/logistica/consumo.

## 4. Explicacion tecnica

| Pais | Recurso principal | Empresa nacional/rol estatal | Privados relevantes | Infraestructura | Riesgo principal | Comparacion con Argentina |
|---|---|---|---|---|---|---|
| Argentina | Shale oil/gas, convencional maduro | YPF + provincias duenas del recurso | Vista, PAE, Tecpetrol, Shell, Chevron, Pluspetrol, TotalEnergies | ductos en expansion, refinerias, puertos | macro, divisas, regulacion, infraestructura | geologia shale superior, riesgo pais mayor |
| Brasil | Offshore pre-sal | Petrobras fuerte, ANP regulador | Shell, TotalEnergies, Equinor, ExxonMobil, Petrogal | FPSO, terminales, refinerias | permisos ambientales, politica de precios | mas escala, menor shale, offshore dominante |
| Mexico | offshore/onshore maduro, gas asociado | Pemex dominante, CNH | privados limitados por politica | refinerias, ductos, importacion gas USA | deuda Pemex, declino, politica energetica | mayor mercado, menor apertura reciente |
| Colombia | crudo convencional, gas offshore potencial | Ecopetrol + ANH | GeoPark, Parex, Canacol, Frontera | oleoductos, refinerias | reservas bajas, seguridad, politica exploratoria | menos recursos shale, marco historicamente estable |
| Venezuela | crudo pesado Orinoco, gas | PDVSA | socios bajo sanciones/JOA | mejorable/deteriorada | sanciones, gobernanza, declino | recursos enormes, capacidad real muy limitada |
| Guyana | offshore light oil | Estado cobra royalties/profit oil | ExxonMobil, Hess, CNOOC | FPSO exportador | gobernanza de renta, frontera con Venezuela | escala exportadora rapida, sin downstream local grande |
| Ecuador | crudo Oriente/Napo | Petroecuador | privados selectivos | oleoductos Andes/Pacifico | politica, ambiente, declino | mas convencional, menor potencial transformador |
| Bolivia | gas convencional | YPFB | Repsol, Petrobras, TotalEnergies historicos | gasoductos Brasil/Argentina | declino reservas, falta exploracion | Argentina pasa de importador a competidor/exportador |
| Peru | gas Camisea, LNG, crudo selva | PeruPetro | Pluspetrol, Hunt, Repsol | ductos, Pampa Melchorita LNG | conflictividad, permisos | tiene LNG pero menos shale oil |
| Chile | importador, refino ENAP, gas Magallanes menor | ENAP | distribuidores, energia | terminales LNG, refinerias, ductos con Argentina | seguridad suministro | mercado natural para gas/crudo argentino |
| Uruguay | importador, refino ANCAP | ANCAP | exploracion offshore incipiente | terminales, refineria La Teja | escala, dependencia importadora | comprador/logistica, no competidor upstream |
| Paraguay | importador | Petropar | distribuidoras | rios, almacenamiento | dependencia importadora | mercado potencial de productos |

## 5. Ejemplo global

La comparacion util no es solo con paises latinoamericanos. Brasil se compara con Noruega/Golfo de Mexico por offshore; Argentina con Permian/Eagle Ford por shale; Guyana con desarrollos FPSO rapidos; Mexico con NOCs maduras con alta carga fiscal.

## 6. Ejemplo latinoamericano

Brasil y Guyana son motores de crecimiento no-OPEC junto con Argentina. La EIA indico en 2025 que Brasil, Guyana y Argentina apoyan el crecimiento de oferta de crudo hacia 2026. Brasil alcanzo produccion mensual superior a 4,0 mb/d en octubre de 2025 segun EIA citando datos oficiales, y Guyana crece con Stabroek operado por ExxonMobil.

## 7. Ejemplo argentino

Argentina compite por capital con Brasil offshore, Guyana offshore y Estados Unidos shale. Su ventaja es roca y cercania a mercados regionales; su desventaja es riesgo macro/regulatorio. Para atraer capital, necesita reglas estables, evacuacion, acceso a divisas y contratos exportables.

## 8. Vaca Muerta / YPF

YPF puede posicionarse como "national champion" exportador si logra combinar Vaca Muerta, infraestructura de crudo, gasoductos, LNG y disciplina financiera. Comparada con Petrobras, YPF tiene menor escala y balance mas sensible; comparada con Pemex, tiene mejor historia reciente de crecimiento shale; comparada con Ecopetrol, tiene mayor recurso no convencional, pero mayor riesgo macro.

## 9. KPIs relevantes

Produccion nacional, reservas, vida de reservas, RRR, capex E&P, import/export balance, utilizacion refineria, deuda NOC, subsidios, royalties, government take, incidentes, emisiones.

## 10. Datos necesarios

Datos regulatorios nacionales, reportes anuales NOC, balances comerciales, precios internos, capacidad de ductos, refinerias, reservas auditadas y contratos.

## 11. Decisiones empresariales asociadas

Entrar/salir de un pais, asociarse con NOC, tomar riesgo exploratorio, invertir en midstream, exportar a mercados regionales, financiar LNG, adquirir activos maduros o shale.

## 12. Riesgos

Expropiacion, cambios fiscales, controles de precios, sanciones, seguridad fisica, conflictividad social, permisos ambientales, deuda soberana y riesgo cambiario.

## 13. Tablero sugerido

Mapa regional con produccion, reservas, capex, proyectos FID, riesgo politico, exportaciones/importaciones, companias operadoras, infraestructura critica y sensibilidad a Brent.

## 14. Preguntas de autoevaluacion

- Por que Petrobras no es comparable linealmente con YPF?
- Que diferencia hay entre recurso enorme y capacidad productiva real?
- Por que Guyana puede crecer mas rapido que Argentina en exportaciones de crudo?
- Que rol tiene Chile para gas argentino?

## 15. Fuentes recomendadas

EIA international, ANP Brasil, CNH Mexico, ANH Colombia, reportes Petrobras/Pemex/Ecopetrol/PDVSA, IEA, OPEC, World Bank, IMF.

---

# Modulo 8. Argentina como sistema energetico

## 1. Titulo

Argentina: petroleo, gas, macroeconomia, provincias y geopolitica.

## 2. Objetivo

Entender por que Vaca Muerta no es solo un proyecto petrolero, sino una variable macroeconomica y geopolitica.

## 3. Explicacion conceptual

Argentina historicamente oscilo entre autoabastecimiento, importaciones caras, intervencion de precios y potencial exportador. YPF fue creada como instrumento de soberania energetica, privatizada en los 90, y renacionalizada en 2012. Hoy Vaca Muerta puede cambiar la balanza energetica si convierte recursos en produccion exportable.

## 4. Explicacion tecnica

Elementos institucionales:

- Ley de Hidrocarburos: marco nacional base.
- Provincias: duenas del dominio originario de los recursos en su territorio; otorgan concesiones y cobran regalias.
- Nacion: define comercio exterior, impuestos, retenciones, transporte interjurisdiccional, politica macro y energia nacional.
- Regalias: participacion provincial sobre produccion.
- Concesiones: derechos de explotacion por plazo y condiciones.
- Permisos exploratorios: derechos para explorar.
- RIGI (Regimen de Incentivo para Grandes Inversiones): marco de incentivos para proyectos grandes, relevante para infraestructura y LNG.

Cuencas:

- Neuquina: Vaca Muerta, gas y oil no convencional, convencional maduro.
- Golfo San Jorge: crudo convencional maduro.
- Austral: gas y offshore/sur.
- Cuyana: convencional maduro.
- Noroeste: gas maduro y declinante.
- Offshore argentino: potencial, riesgo exploratorio, social y ambiental.

## 5. Ejemplo global

Noruega convirtio hidrocarburos offshore en fondos soberanos y capacidades industriales. Qatar convirtio gas en LNG y poder geopolitico. Estados Unidos convirtio shale en seguridad energetica y exportaciones. Argentina busca una version propia, condicionada por macro y estabilidad.

## 6. Ejemplo latinoamericano

Bolivia muestra el riesgo de depender de gas sin reposicion de reservas. Venezuela muestra que recursos sin gobernanza no garantizan produccion. Brasil muestra que NOC fuerte, regulacion y capital pueden desarrollar proyectos complejos.

## 7. Ejemplo argentino

La restriccion externa argentina hace que cada dolar de importacion energetica o exportacion adicional importe. Menos LNG importado en invierno mejora balanza comercial; mas crudo exportado genera divisas; LNG podria crear una nueva canasta exportadora.

## 8. Vaca Muerta / YPF

Vaca Muerta es estrategica en seis planos:

- Energetico: reduce dependencia de importaciones.
- Fiscal: genera regalias provinciales e impuestos nacionales.
- Exportador: crudo, gas regional y potencial LNG.
- Geopolitico: posiciona a Argentina como proveedor del Cono Sur y potencial proveedor global LNG.
- Industrial: demanda servicios, acero, arena, transporte, ingenieria y tecnologia.
- Tecnologico: impulsa automatizacion, datos, IA, operaciones remotas y proveedores especializados.

## 9. KPIs relevantes

Balanza energetica, importaciones LNG/diesel, exportaciones crudo/gas, produccion por cuenca, regalias, subsidios, precio domestico vs paridad, capacidad de transporte, inversiones, empleo, emisiones.

## 10. Datos necesarios

CAP IV/Secretaria de Energia, Aduana, INDEC, ENARGAS, CAMMESA, provincias, YPF/operadores, precios, tipo de cambio, contratos, ductos, refinerias y consumo por sector.

## 11. Decisiones empresariales asociadas

Politica de precios, permisos de exportacion, subsidios, expansion de gasoductos, oleoductos, terminales, financiamiento, RIGI, desarrollo proveedores y acuerdos internacionales.

## 12. Riesgos

Inestabilidad regulatoria, controles de capital, retenciones, conflicto Nacion-provincias, atraso tarifario, cuellos de infraestructura, oposicion ambiental y ciclos macro.

## 13. Tablero sugerido

Dashboard pais: produccion por cuenca, demanda interna, import/export energy balance, capacidad ductos, precios locales vs paridad, subsidios, regalias, proyectos de infraestructura, sensibilidad a Brent y tipo de cambio.

## 14. Preguntas de autoevaluacion

- Por que Vaca Muerta puede afectar la disponibilidad de dolares?
- Que rol tienen las provincias en el negocio?
- Por que precio domestico y exportacion estan conectados?
- Que diferencia hay entre autoabastecimiento y superavit energetico?

## 15. Fuentes recomendadas

Secretaria de Energia, ENARGAS, CAMMESA, INDEC, EIA, IEA, IMF, World Bank, informes provinciales de Neuquen, YPF.

---

# Modulo 9. Vaca Muerta: clase magistral ejecutiva

## 1. Titulo

Vaca Muerta: roca de clase mundial, sistema industrial en construccion.

## 2. Objetivo

Separar potencial geologico, capacidad productiva real, infraestructura disponible y restricciones comerciales.

## 3. Explicacion conceptual

Vaca Muerta no es un yacimiento unico; es una formacion geologica en la Cuenca Neuquina con diferentes ventanas de fluidos, areas, operadores, presiones, calidades y economias. Su importancia surge de una combinacion poco comun: recurso no convencional enorme, productividad competitiva, cercania a infraestructura existente, mercado interno de gas y posibilidad de exportar crudo y LNG.

## 4. Explicacion tecnica

Cinco perspectivas:

1. Geologica: roca madre rica en materia organica, espesor significativo, ventanas de oil, wet gas y dry gas. La calidad varia por area y profundidad.
2. Operativa: pozos horizontales multietapa, pads, fractura, facilities modulares, automatizacion, control remoto y learning curve.
3. Economica: breakeven depende de EUR, costo por pozo, lifting, capex midstream, precio realizado, retenciones, tipo de cambio y costo de capital.
4. Logistica: arena, agua, equipos de fractura, ductos, plantas, tanques, rutas, puertos, energia electrica y mano de obra.
5. Geopolitica: potencial de exportar al Cono Sur y LNG global, reduciendo importaciones y creando nueva posicion argentina.

## 5. Ejemplo global

Eagle Ford es un benchmark util por ventanas de oil, condensate y gas. Permian es benchmark por escala y multi-bench development. Vaca Muerta tiene similitudes tecnicas, pero opera en un sistema macro/regulatorio distinto.

## 6. Ejemplo latinoamericano

Frente a Guyana, Vaca Muerta requiere miles de pozos terrestres y mucho midstream; Guyana requiere FPSO offshore y menos mercado domestico. Frente a Brasil, Vaca Muerta tiene ciclos de inversion mas cortos que offshore pre-sal, pero necesita perforar continuamente para sostener crecimiento por declino shale.

## 7. Ejemplo argentino

Neuquen se convierte en centro de gravedad energetico. Rio Negro gana relevancia por potencial infraestructura de exportacion. Buenos Aires y Santa Fe son centros de demanda/refinacion/industria. El sistema federal importa: provincia otorga concesion; Nacion define comercio exterior, divisas y macro.

## 8. YPF y operadores

Operadores relevantes: YPF, Tecpetrol, Pan American Energy (PAE), Vista, Shell, Chevron, Pluspetrol, TotalEnergies, Pampa Energia, Phoenix, Capex, CGC y otros. YPF combina rol de operador, socio, refinador, comercializador y promotor de proyectos de infraestructura/LNG. Tecpetrol es referencia en shale gas por Fortin de Piedra. Vista es referencia de shale oil puro. PAE, Shell, Chevron y Pluspetrol aportan capital, operacion y comercializacion.

## 9. KPIs relevantes

Produccion shale oil/gas, pozos conectados, rigs, frac crews, etapas, IP30/IP90, EUR, costo por pozo, lifting cost, capacidad oleoductos/gasoductos, exportaciones, gas flared, emisiones, royalties, empleo.

## 10. Datos necesarios

Produccion por area y pozo, curvas por cohorte, costos, infraestructura, permisos, contratos, precios, capacidad de plantas, despacho, exportaciones, inventario de locaciones y emisiones.

## 11. Decisiones empresariales asociadas

Acelerar oil window, desarrollar gas si hay mercado, construir oleoducto, firmar contratos LNG, asociarse, vender activos maduros, financiar capex, contratar servicios, electrificar y automatizar.

## 12. Riesgos

Precio Brent, costo de capital, infraestructura insuficiente, cambios fiscales, licencia social, agua, emisiones, seguridad vial, conflictividad laboral, inflacion de costos y retrasos LNG.

## 13. Tablero sugerido

Mapa ejecutivo Vaca Muerta con capas: areas, operadores, ventanas, pozos activos, pads, produccion, ductos, plantas, tanques, puertos, capacidad usada, proyectos, royalties, emisiones y sensibilidad de netback.

## 14. Preguntas de autoevaluacion

- Que significa que Vaca Muerta sea "recurso" y no automaticamente "reservas"?
- Por que gas y oil tienen logicas comerciales diferentes?
- Que infraestructura define el proximo salto de produccion?
- Que rol juega YPF como integrador?

## 15. Fuentes recomendadas

Secretaria de Energia CAP IV, Neuquen Energia, IAPG, reportes YPF/Vista/Tecpetrol/PAE/Shell/Chevron, EIA, SPE.

## Mapa mental ejecutivo de Vaca Muerta

Roca -> define calidad, ventana y productividad posible.  
Pozo -> convierte roca en caudal inicial y EUR.  
Pad/factory -> convierte pozos en escala repetible.  
Facilities -> convierten flujo bruto en producto especificado.  
Midstream -> convierte produccion en barril/molecula vendible.  
Mercado interno -> asegura demanda base, pero puede tener precios regulados.  
Exportacion -> convierte excedente en dolares, si hay paridad y permisos.  
Precios -> definen netback, capex y ritmo de perforacion.  
Estado nacional -> regula comercio exterior, impuestos, divisas, energia.  
Provincias -> otorgan concesiones, cobran regalias, habilitan territorio.  
YPF -> integra recurso, refinacion, comercializacion, infraestructura y politica energetica.  
Privadas -> aportan capital, eficiencia, tecnologia, competencia y benchmarks.  
Datos -> conectan decisiones diarias con productividad, costos, seguridad y caja.  

---

# Modulo 10. YPF como empresa integrada

## 1. Titulo

YPF: estrategia, integracion, Vaca Muerta, downstream, datos y directorio.

## 2. Objetivo

Entender como pensaria YPF internamente al asignar capital, gestionar activos, equilibrar mercado interno/exportacion y usar datos.

## 3. Explicacion conceptual

YPF es una empresa integrada con rol empresarial y rol estrategico nacional. Eso crea ventajas y tensiones. Ventajas: escala, marca, red, refinerias, acceso a areas, relacion con Estado/provincias, capacidad de coordinar infraestructura. Tensiones: exposicion politica, precios domesticos, obligaciones de abastecimiento, deuda, capex alto y escrutinio publico.

## 4. Explicacion tecnica

Estructuras de negocio:

- Upstream: shale oil/gas, convencional, reservas, perforacion, produccion.
- Downstream & midstream: refinacion, transporte, terminales, logistica, combustibles.
- LNG & Integrated Gas / New Energies: proyectos de gas, LNG, energia y transicion segun segmentacion reportada por YPF desde 2024 en presentaciones.
- Comercializacion: estaciones, mayorista, agro, aviacion, industrias, lubricantes.
- Corporativo/finanzas: deuda, capex, cash flow, riesgos, compliance.

## 5. Ejemplo global

Equinor combina rol estatal, disciplina de capital, offshore y transicion. Petrobras combina NOC, pre-sal y refinacion. YPF necesita parecerse mas a una NOC con disciplina de capital que a una oficina publica de abastecimiento.

## 6. Ejemplo latinoamericano

Petrobras es benchmark regional por escala, tecnologia offshore y acceso a capital. Pemex muestra el riesgo de deuda, declino y carga politica. Ecopetrol muestra integracion con midstream y necesidad de reposicion de reservas. YPF esta mas expuesta a la oportunidad shale.

## 7. Ejemplo argentino

YPF debe abastecer mercado local, sostener red de estaciones, invertir en Vaca Muerta, mejorar caja, gestionar deuda y liderar proyectos exportadores. Su valor estrategico esta en integrar barril domestico, seguridad energetica y potencial exportador.

## 8. Vaca Muerta / YPF

Segun YPF Investor Presentation Q4 2025, YPF tiene una posicion relevante en Vaca Muerta y mostro que 88% de sus reservas P1 2025 estan asociadas a Vaca Muerta. Esto indica un giro estructural: el valor futuro de YPF depende cada vez mas del shale y menos de campos convencionales maduros. La venta/optimizacion de activos maduros mencionada en su Form 20-F 2025 es consistente con foco en no convencionales.

## 9. KPIs relevantes

Produccion, shale mix, reservas P1, RRR, lifting cost, capex, EBITDA ajustado, free cash flow, deuda neta/EBITDA, margen downstream, utilizacion refineria, market share, incidentes HSE, emisiones, proyectos FID.

## 10. Datos necesarios

Modelo integrado de activos: pozo-area-planta-ducto-refineria-terminal-cliente-contrato-centro de costo. Datos certificados por dominio, catalogo, linaje, controles de calidad, reconciliacion volumetrica y modelo semantico corporativo.

## 11. Decisiones empresariales asociadas

Priorizacion de capex:

1. Seguridad y cumplimiento.
2. Sostener produccion y reservas.
3. Crecimiento shale con mejor retorno.
4. Infraestructura que desbloquea produccion.
5. Downstream para confiabilidad/calidad/margen.
6. LNG si hay contratos, financiamiento y riesgo asignado.

## 12. Riesgos

Gobierno corporativo, interferencia politica, ejecucion de proyectos, precio, deuda, acceso a capital, regulacion, litigios, seguridad operacional, licencia social y ciberseguridad.

## 13. Tablero sugerido

Tablero de directorio YPF: valor economico integrado. Bloques: produccion/reservas, capex y retorno, caja/deuda, downstream/margen, proyectos estrategicos, HSE, emisiones, riesgo regulatorio, infraestructura critica y datos certificados.

## 14. Preguntas de autoevaluacion

- Que significa que YPF sea integrada?
- Como cambia YPF si Vaca Muerta pasa a dominar sus reservas?
- Que KPIs deberia mirar el directorio mensualmente?
- Como se diferencia una decision publica de una decision de capital disciplinada?

## 15. Fuentes recomendadas

YPF Form 20-F, YPF Investor Day, presentaciones trimestrales, reportes de sustentabilidad, CNV, SEC, Secretaria de Energia.

## Como pensaria YPF internamente

- Directorio: "Que portafolio maximiza valor, seguridad energetica y sostenibilidad financiera?"
- CEO: "Que prioridades integradas mueven caja y posicion estrategica en 12, 36 y 120 meses?"
- CFO: "Que capex se paga con caja, que se financia, que sensibilidad tengo a Brent, FX y precios internos?"
- COO: "Que activos limitan produccion, confiabilidad y seguridad?"
- Upstream: "Que pad genera mayor EUR por dolar invertido y menor riesgo de evacuacion?"
- Downstream: "Que slate, paradas y blends maximizan margen y abastecimiento?"
- Supply: "Donde debe estar cada barril/litro en las proximas 72 horas y 12 semanas?"
- Data office: "Que dato es oficial, quien lo gobierna, que decision habilita y que automatizacion permite?"

---

# Modulo 11. Diccionario profesional de KPIs

Lectura rapida: cada KPI debe tener definicion, formula, unidad, frecuencia, responsable, fuente, interpretacion, umbrales, errores comunes y ejemplo. En esta version, los campos estan compactados para que el diccionario sea usable en tablero.

## Upstream

| KPI | Formula / unidad / frecuencia | Responsable y fuente | Interpretacion, umbrales y errores | Ejemplo YPF/Vaca Muerta |
|---|---|---|---|---|
| Produccion diaria | oil bbl/d, gas Mm3/d, boe/d; diaria | Operaciones; SCADA/medicion fiscal | Mide escala y cumplimiento plan; error: confundir bruto, neto y equity | YPF reporta crudo 255 kbbl/d y gas 36,2 Mm3/d en presentacion Q4 2025 |
| Produccion acumulada | suma produccion periodo; bbl, m3, boe | Reservorios/finanzas; produccion | Sirve para curva y reservas; error: no reconciliar medicion fiscal | Acumulada por pozo shale vs EUR forecast |
| BOE | oil + gas convertido; boe | Planeamiento; conversion corporativa | Permite comparar; error: usar conversion energetica como si fuera margen economico | Gas y crudo Vaca Muerta en boe no tienen mismo netback |
| Lifting cost | opex produccion / boe producido; USD/boe; mensual | Upstream/finanzas; ERP + produccion | Menor es mejor si no degrada seguridad; error: incluir/excluir opex de forma inconsistente | YPF muestra foco en bajar lifting al salir de maduros y crecer shale |
| F&D cost | capex exploracion+desarrollo / reservas agregadas; USD/boe; anual | Reservas/CFO | Mide costo de reposicion; error: comparar con lifting cost | Shale rentable requiere F&D competitivo contra netback |
| Reservas | P1/P2/P3; boe; anual | Reservas; auditoria/SEC | Base de valor futuro; error: confundir recursos con reservas | YPF P1 2025: 1.284 Mboe segun Form 20-F/presentacion |
| Reserve replacement ratio | reservas agregadas / produccion; % o x; anual | Reservas/CFO | >100% repone produccion; error: no separar adquisiciones/revisiones | YPF 2025: 198% Form 20-F; 2,0x en presentacion |
| EUR | produccion acumulada esperada por pozo; boe; por pozo/cohorte | Reservorios | Determina valor de pozo; error: extrapolar primeros dias sin declino robusto | Curvas tipo por bloque de Vaca Muerta |
| IP30 | promedio primeros 30 dias; bbl/d o boe/d | Produccion/reservorios | Compara productividad inicial; error: ignorar choke y restricciones | Ranking de pads por area |
| IP90 | promedio primeros 90 dias | Produccion/reservorios | Mejor senal que IP30; error: no normalizar lateral/etapas | Comparar Loma Campana vs La Amarga Chica |
| Declino | variacion produccion periodo; % | Reservorios | En shale alto al inicio; error: usar declino convencional | Forecast de perforacion necesaria para sostener plateau |
| Uptime | horas produciendo / horas calendario; % diario | Operaciones | Mide confiabilidad; error: ocultar restricciones comerciales | Pozos cerrados por evacuacion no son falla de reservorio |
| Downtime | horas fuera de servicio; h o % | Operaciones/mantenimiento | Identifica perdidas; error: no clasificar causa | Downtime por compresion, energia, planta |
| Costo por pozo | capex total pozo; USD/pozo | Drilling/completions/CFO | Benchmark de eficiencia; error: comparar pozos con laterales distintos | Costo shale baja por factory mode |
| Costo por metro perforado | drilling cost / metros; USD/m | Drilling | Mide eficiencia perforacion; error: no separar vertical/lateral | Benchmark por rig y contratista |
| Etapas de fractura por dia | etapas completadas/dia | Completions | Mide productividad de frac crew; error: ignorar NPT/calidad | Seguimiento diario de flotas |
| Tiempo de perforacion | spud-to-TD o spud-to-rig release; dias | Drilling | Menor mejora capital efficiency; error: no ajustar complejidad | Curva de aprendizaje por pad |
| NPT | tiempo no productivo / tiempo total; % | Drilling/completions | Alerta de eficiencia; umbral depende operacion; error: clasificacion pobre | Causas: clima, equipo, espera materiales |
| Agua producida | m3/d, bbl/d; diaria | Operaciones/HSE | Impacta tratamiento/disposal; error: no integrar con balance hidrico | Reuso/disposal en areas shale |
| Gas venteado/quemado | m3/d, % gas producido | HSE/operaciones | Perdida economica y ambiental; error: medir tarde | Gas asociado restringido por falta de evacuacion |
| Emisiones upstream | tCO2e, kgCO2e/boe; mensual/anual | Sustentabilidad | Mide intensidad carbono; error: no incluir metano | Electrificacion y deteccion de fugas |

## Midstream

| KPI | Formula / unidad / frecuencia | Responsable y fuente | Interpretacion, umbrales y errores | Ejemplo |
|---|---|---|---|---|
| Capacidad utilizada | throughput/capacidad; % diario | Midstream; SCADA | Alto sostenido indica cuello; error: ignorar picos | Gasoducto lleno limita gas |
| Throughput | volumen transportado; bbl/d, Mm3/d | Operaciones ducto | Escala real de evacuacion; error: mezclar nominacion con flujo real | Oleoducto Vaca Muerta a puerto |
| Perdidas | entrada - salida; % | Medicion | Deben estar dentro tolerancias; error: medicion no calibrada | Balance ducto/tanques |
| Presion | bar/psi | SCADA | Controla capacidad y seguridad; error: ver solo promedio | Caidas por compresora |
| Disponibilidad | horas disponible / total; % | Mantenimiento | Confiabilidad; error: no separar planned/unplanned | Disponibilidad compresoras |
| Linepack | gas contenido en ducto; Mm3 | Gas control | Flexibilidad operativa; error: tratarlo como storage infinito | Gestion de picos diarios |
| Capacidad firme | volumen contratado firme | Comercial midstream | Ingreso y prioridad; error: no leer take-or-pay | Contratos de productores |
| Capacidad interrumpible | volumen sin garantia | Comercial midstream | Monetiza ociosidad; error: prometer disponibilidad | Ventas spot transporte |
| Cumplimiento nominaciones | real/nominado; % | Scheduling | Disciplina comercial; error: no considerar fuerza mayor | Entregas a distribuidoras |
| Congestion | demanda transporte - capacidad | Planeamiento | Senal de expansion; error: ignorar estacionalidad | Gas de verano sin mercado |
| Costo transporte | tarifa + costos; USD/bbl o USD/MMBtu | Comercial/finanzas | Afecta netback; error: olvidar fuel gas | Netback exportador |
| Incidentes | numero/severidad | HSE | Seguridad e integridad; error: subreporte | Derrames, fugas |
| Disponibilidad tanques | volumen libre/capacidad | Terminales | Evita shut-ins; error: no considerar calidad segregada | Tanques por crudo/blend |

## Downstream

| KPI | Formula / unidad / frecuencia | Responsable y fuente | Interpretacion, umbrales y errores | Ejemplo |
|---|---|---|---|---|
| Margen refinacion | valor productos - crudo - costos variables; USD/bbl | Refinacion/CFO | Valor economico real; error: confundir con crack simple | Slate Vaca Muerta en YPF |
| Crack spread | precio productos - precio crudo; USD/bbl | Trading/refinacion | Proxy de margen; error: no incluir costos/calidad | 3-2-1 crack como referencia |
| Utilizacion refineria | carga/capacidad; % | Refineria | Alto con confiabilidad es bueno; error: operar alto con riesgo HSE | Plan mensual de carga |
| Yield | producto/crudo; % | Planificacion/refineria | Optimiza mezcla; error: no ajustar por calidad | Diesel yield vs nafta |
| Disponibilidad mecanica | equipos disponibles/total; % | Mantenimiento | Confiabilidad; error: diferir mantenimiento critico | Unidades FCC/hidrotratamiento |
| Eficiencia energetica | energia consumida/barril | Energia refineria | Reduce costos/emisiones; error: comparar refinerias distintas | GJ/bbl procesado |
| Intensidad energetica | indice Solomon u otro | Refineria | Benchmark; error: sin normalizar complejidad | Comparacion interna |
| Paradas no programadas | eventos, horas, perdida bbl | Operaciones | Impacta margen y seguridad; error: no monetizar perdida | Unidad critica fuera |
| Inventario critico | dias cobertura por producto | Supply | Abastecimiento; error: promedio oculta faltantes regionales | Diesel invierno |
| Calidad producto | specs cumplidas; ppm, octano, cetano | Laboratorio/calidad | Cumplimiento legal; error: liberar fuera de spec | Azufre diesel |
| Demoras logisticas | horas/dias atraso | Supply | Impacta canal; error: no separar terminal/transporte | Despacho a estaciones |
| Ventas por canal | volumen canal; m3 | Comercial | Mix de mercado; error: volumen sin margen | Retail vs mayorista |
| Market share | ventas empresa/mercado; % | Comercial | Posicion competitiva; error: no segmentar region | Red YPF |
| Margen por producto | ingreso - costo producto/logistica/impuestos; USD o ARS/litro | Comercial/CFO | Rentabilidad; error: confundir precio bruto con margen | Nafta premium vs diesel |

## Comercializacion

| KPI | Formula / unidad / frecuencia | Responsable y fuente | Interpretacion y errores | Ejemplo |
|---|---|---|---|---|
| Volumen vendido | litros/m3 por canal | Comercial/POS/ERP | Escala; error: no separar canal | Estaciones vs agro |
| Margen por canal | margen/volumen | Comercial/CFO | Rentabilidad canal; error: mezclar impuestos | Retail premium |
| Participacion mercado | ventas propias/mercado | Comercial | Posicion; error: usar mercado incompleto | YPF red nacional |
| Rotacion inventarios | ventas/inventario promedio | Supply | Capital de trabajo; error: no considerar stock minimo | Terminales |
| Precio promedio | ingresos/volumen | Comercial | Realizacion; error: sin descuentos | Precio neto B2B |
| Elasticidad demanda | % cambio volumen/% cambio precio | Pricing | Pricing; error: confundir con estacionalidad | Nafta vs diesel |
| Cobertura logistica | zonas servidas/objetivo | Supply | Seguridad suministro; error: no medir lead time | Patagonia/invierno |
| Rentabilidad estacion | EBITDA estacion | Retail | Gestion red; error: no incluir tienda/servicios | Flagship vs rural |
| Ventas mayoristas | m3 por cliente/segmento | B2B | Industria/agro/transporte | Contratos industriales |
| Ventas minoristas | litros por estacion | Retail | Demanda final | Promociones/fidelidad |

## Finanzas

| KPI | Formula / unidad / frecuencia | Responsable y fuente | Interpretacion y errores | Ejemplo |
|---|---|---|---|---|
| EBITDA | resultado operativo + D&A ajustado | CFO | Caja operativa aproximada; error: tratarlo como cash flow | YPF reporta adjusted EBITDA |
| Cash flow operativo | caja operativa | Tesoreria | Capacidad de financiar capex | Sensible a precios/inventarios |
| Capex | inversiones; USD | CFO/PMO | Crecimiento y mantenimiento; error: no separar sustaining/growth | Shale vs refineria |
| Free cash flow | CFO - capex | CFO | Caja libre; error: ignorar deuda vencimientos | Financiar LNG o deuda |
| Deuda neta | deuda - caja | Tesoreria | Riesgo financiero | Moneda y vencimientos |
| Apalancamiento | deuda neta/EBITDA | CFO | Solvencia; error: EBITDA normalizado irreal | Covenants |
| ROCE | EBIT despues impuestos/capital empleado | CFO | Retorno capital | Comparar proyectos |
| Margen operativo | EBIT/ventas | CFO | Rentabilidad | Downstream vs upstream |
| Sensibilidad Brent | delta EBITDA/FCF por USD/bbl | Riesgos/CFO | Riesgo precio | Escenarios capex |
| Sensibilidad FX | delta caja por tipo cambio | Riesgos/CFO | Riesgo macro | Ingresos USD/costos ARS |
| Sensibilidad regulacion | impacto por retenciones/precios | Legal/CFO | Riesgo politica | Export duty/precio combustibles |

---

# Modulo 12. Datos, BI, IA y transformacion digital

## 1. Titulo

Petrolera data-driven: de SCADA e historian a lakehouse, tableros e IA.

## 2. Objetivo

Disenar una arquitectura objetivo para una petrolera integrada como YPF.

## 3. Explicacion conceptual

Una petrolera data-driven no es la que tiene muchos dashboards; es la que gobierna datos criticos y los usa para decidir antes, con menos riesgo y mejor economics. La pregunta central es: que decision mejora si el dato es confiable, oportuno y accionable?

## 4. Explicacion tecnica

Sistemas fuente:

- Historian: series temporales industriales de planta/campo.
- SCADA: supervision y control operacional.
- IoT/sensores: presion, temperatura, vibracion, caudal, energia, emisiones.
- ERP: finanzas, compras, inventario, costos.
- EAM: mantenimiento, activos, ordenes de trabajo.
- LIMS (Laboratory Information Management System): calidad de laboratorio.
- Trading/risk systems: contratos, precios, exposiciones.
- TMS/logistica: despacho, transporte, terminales.
- CRM/POS: clientes, estaciones, ventas.
- HSE/sustentabilidad: incidentes, emisiones, agua, permisos.

Arquitectura objetivo:

1. Ingestion industrial real-time: SCADA/historian/event streams hacia plataforma de tiempo real.
2. Ingestion batch/CDC: ERP, EAM, LIMS, trading, ventas, finanzas.
3. Lakehouse en arquitectura medallion:
   - Bronze: dato crudo trazable.
   - Silver: dato validado, estandarizado, deduplicado.
   - Gold: data products certificados para decision.
4. Modelos semanticos Power BI:
   - Volumen unico.
   - Costo unico.
   - Margen unico.
   - Emisiones unicas.
5. Gobierno:
   - Data owners por dominio.
   - Data stewards.
   - Catalogo.
   - Linaje.
   - Calidad.
   - Seguridad.
   - Indicadores certificados.
6. Analitica avanzada:
   - Forecast produccion.
   - Mantenimiento predictivo.
   - Deteccion anomalias.
   - Optimizacion de blending.
   - Forecast demanda.
   - Optimizacion inventarios.
   - Planificacion integrada upstream-midstream-downstream-comercial-finanzas.
   - Digital twins.
7. IA generativa:
   - Copiloto de operaciones.
   - Busqueda de procedimientos.
   - Analisis de incidentes.
   - Asistente de planificacion.
   - Explicacion de variaciones KPI.

## 5. Ejemplo global

Majors globales usan centros de operaciones remotas, digital twins, mantenimiento predictivo, optimizacion de perforacion y modelos integrados de cadena de suministro. El valor real aparece cuando se conecta el modelo con una accion: cambiar choke, reprogramar mantenimiento, ajustar blend, redireccionar despacho.

## 6. Ejemplo latinoamericano

Petrobras, Ecopetrol y YPF tienen escala suficiente para plataformas corporativas. El desafio regional suele ser integrar activos legacy, datos de contratistas, sistemas propios, datos regulatorios y calidad heterogenea.

## 7. Ejemplo argentino

Argentina necesita tableros que conecten operacion y macro: produccion, evacuacion, exportacion, importaciones evitadas, subsidios, precios y divisas. Un dato de ducto puede tener impacto de caja pais si habilita exportacion o reduce LNG importado.

## 8. Vaca Muerta / YPF

La oportunidad de IA en Vaca Muerta esta en factory mode:

- Predecir productividad por landing zone y completacion.
- Reducir NPT en perforacion.
- Optimizar diseno de fractura.
- Detectar interferencias parent-child.
- Predecir fallas de bombas/compresores.
- Optimizar evacuacion y blending.
- Reducir venteo/flaring.
- Certificar emisiones por barril exportado.

## 9. KPIs relevantes

Data quality score, % indicadores certificados, latencia de datos, % activos conectados, uptime sistemas, adopcion tableros, casos IA en produccion, valor capturado, incidentes de ciberseguridad, linaje completo.

## 10. Datos necesarios

Series temporales, eventos, datos maestros de activos, jerarquia pozo-pad-area-cuenca, materiales, costos, contratos, precios, calidad, clientes, emisiones, incidentes y permisos.

## 11. Decisiones empresariales asociadas

Priorizar casos de uso, certificar KPIs, invertir en sensores, integrar sistemas, definir gobierno, automatizar alertas, crear copilotos y medir valor.

## 12. Riesgos

Datos malos, dashboards contradictorios, IA sin gobierno, ciberseguridad OT/IT, dependencia de proveedores, modelos no explicables, privacidad, errores de automatizacion y baja adopcion.

## 13. Tablero sugerido

Digital transformation cockpit: activos conectados, calidad datos por dominio, tableros certificados, casos IA, valor economico, incidentes, deuda tecnica, linaje, adopcion y decisiones impactadas.

## 14. Preguntas de autoevaluacion

- Que diferencia hay entre dashboard y decision product?
- Por que un modelo semantico certificado es clave?
- Que dato maestro une upstream y finanzas?
- Donde IA genera valor real y donde solo genera ruido?

## 15. Fuentes recomendadas

Microsoft Fabric docs, Energistics, OSDU, DAMA-DMBOK, ISO 55000 asset management, ISA/IEC 62443 ciberseguridad industrial.

## Arquitectura objetivo para YPF

```
Campo/pozos/refinerias/ductos/estaciones
  -> SCADA, historian, IoT, LIMS, EAM, ERP, trading, POS
  -> ingestion streaming + batch + CDC
  -> bronze lakehouse: datos crudos con auditoria
  -> silver: datos normalizados por dominio
  -> gold: data products certificados
  -> modelos semanticos Power BI
  -> dashboards ejecutivos y operativos
  -> modelos ML/optimizacion/digital twins
  -> alertas, workflows y copilotos industriales
```

Dominios de datos:

- Upstream production.
- Wells and completions.
- Reserves and resources.
- Midstream and logistics.
- Refining and quality.
- Commercial and retail.
- Trading and risk.
- Finance and capital.
- HSE and sustainability.
- Master data: asset, location, product, customer, contract, cost center.

---

# Modulo 13. Tableros ejecutivos

## 1. Titulo

Dashboards para una petrolera integrada.

## 2. Objetivo

Disenar tableros que habiliten decisiones, no solo visualizacion.

## 3. Explicacion conceptual

Un buen tablero ejecutivo responde tres preguntas: que paso, por que importa y que decision requiere. Debe separar hechos certificados, forecast y supuestos.

## 4. Explicacion tecnica

Modelo semantico sugerido:

- FactProductionDaily, FactWellOperations, FactTransport, FactRefineryRuns, FactInventory, FactSales, FactPrices, FactFinancials, FactHSE, FactEmissions.
- DimAsset, DimWell, DimArea, DimBasin, DimProduct, DimCustomer, DimContract, DimDate, DimScenario, DimCurrency, DimBusinessUnit.
- Medidas certificadas: produccion boe/d, netback, margen, EBITDA, capex, uptime, emisiones, incidentes.

## 5 al 13. Tableros por rol

| Tablero | Objetivo y decisiones | KPIs principales | Alertas | Cortes | Fuentes | Frecuencia | Visualizacion Power BI | Riesgo de mala interpretacion |
|---|---|---|---|---|---|---|---|---|
| CEO | Ver valor integrado y prioridades | produccion, caja, capex, EBITDA, HSE, proyectos | caida produccion, deuda, incidentes, cuello midstream | unidad, cuenca, producto, pais | todos dominios | diario/semanal/mensual | portada tipo scorecard + mapa cadena valor | mirar volumen sin margen |
| CFO | Caja, deuda, sensibilidad y capital | EBITDA, FCF, deuda neta, capex, ROCE, Brent/FX sensitivity | covenant, desvio capex, precio | proyecto, moneda, vencimiento | ERP, treasury, trading | diario/mensual | waterfall caja, matriz sensibilidad | EBITDA como caja |
| COO | Operacion integrada y confiabilidad | uptime, downtime, throughput, incidentes, backlog | paradas, restricciones, HSE | activo, planta, ducto | SCADA/EAM/HSE | real-time/diario | mapa operativo + timeline eventos | promedios ocultan activos criticos |
| Upstream Director | Produccion, pozos, reservas | boe/d, IP30, EUR, drilling days, NPT, lifting | pozos bajo curva, gas restringido | area, pad, cohorte | wells, SCADA, ERP | diario/semanal | curvas tipo + mapa pads | IP alto sin EUR |
| Downstream Director | Margen y abastecimiento | margen, utilizacion, yield, inventarios, calidad | unidad critica, stockout | refineria, producto | refineria, LIMS, ERP | diario | refinery cockpit | crack spread como margen real |
| Midstream Director | Evacuacion y capacidad | throughput, capacidad usada, linepack, tanques | congestion, presion, nominacion | ducto, terminal | SCADA, contratos | real-time/diario | GIS + barras capacidad | capacidad nominal vs disponible |
| Comercial Director | Ventas, market share y margen canal | volumen, margen/litro, share, precio, elasticidad | caida share, quiebre stock | canal, region, producto | POS/CRM/ERP | diario/semanal | mapa ventas + cohortes estaciones | volumen sin rentabilidad |
| Supply Chain Director | Planificacion, inventarios, despacho | dias cobertura, OTIF, demoras, costo logistico | inventario critico, transporte | terminal, producto | TMS, ERP, inventarios | diario | red logistica | promedio nacional oculta faltantes |
| Transformacion Digital | Valor digital y gobierno | data quality, adopcion, casos IA, linaje | KPI no certificado, falla pipeline | dominio, owner | catalogo, Fabric, logs | semanal | heatmap madurez | medir actividad, no valor |
| Sustentabilidad | Emisiones, agua, incidentes | tCO2e, metano, agua, flaring, TRIR | fuga, venteo, derrame | activo, alcance | HSE, sensores | diario/mensual | intensidad por activo | intensidad baja con volumen bajo |
| Gerente Refineria | Operacion de planta | carga, disponibilidad, energia, calidad, HSE | unidad fuera, offspec | unidad, turno | DCS/LIMS/EAM | real-time | cockpit planta | no distinguir planned/unplanned |
| Gerente Vaca Muerta | Factory performance | pozos, pads, fractura, produccion, evacuacion | frac delay, pozo bajo curva | area, contratista | wells/SCADA/ERP | diario | mapa pads + Gantt | comparar pozos no normalizados |
| Comite Seguridad | Riesgo operacional | TRIR, near miss, process safety, barreras | incidente mayor, barrera vencida | activo, severidad | HSE/EAM | diario/semanal | bowtie + matriz riesgo | contar eventos sin severidad |
| Comite Inversiones | Portafolio capex | NPV, IRR, payback, capex, riesgo, CO2 | NPV negativo, desvio supuestos | proyecto, escenario | finanzas, subsuelo | mensual | bubble chart retorno/riesgo | comparar NPV con supuestos distintos |

## 14. Preguntas de autoevaluacion

- Que tablero necesita dato real-time y cual necesita dato certificado mensual?
- Que KPI puede enganar si no se muestra con corte correcto?
- Como se conectan dashboard CEO y tablero operativo?
- Que modelo semantico evita discusiones de "mi numero vs tu numero"?

## 15. Fuentes recomendadas

Power BI guidance, Microsoft Fabric, DAMA, reportes internos tipo oil and gas performance management, marcos HSE/API/IOGP.

---

# Modulo 14. Preguntas estrategicas que debes poder responder

## Por que el petroleo sigue siendo estrategico en la transicion energetica?

Porque el sistema energetico no cambia al mismo ritmo en todos los sectores. Transporte pesado, aviacion, petroquimica, mineria, agro, defensa y seguridad de suministro siguen dependiendo de hidrocarburos. La IEA Oil 2025 proyecta una meseta de demanda hacia 2030, no desaparicion inmediata, y senala que petroquimica gana peso como fuente de crecimiento. Criterio ejecutivo: la transicion reduce crecimiento de algunos combustibles, pero aumenta el valor de activos de bajo costo, baja intensidad de carbono y buena logistica.

## Que hace rentable a un proyecto shale?

Roca buena, EUR alto, costo por pozo bajo, learning curve, infraestructura disponible, precio realizado competitivo, bajo NPT, financiamiento razonable y estabilidad fiscal. Formula mental: valor = EUR x netback - capex - opex - transporte - impuestos - costo de capital - riesgo. En Vaca Muerta, midstream y macro pueden mover el resultado tanto como la geologia.

## Por que Vaca Muerta puede cambiar la macroeconomia argentina?

Porque puede reducir importaciones de energia, aumentar exportaciones de crudo/gas/LNG, generar regalias e impuestos, atraer capex y crear proveedores. Pero potencial geologico no es igual a dolares: se necesitan ductos, terminales, financiamiento, reglas, permisos y mercados.

## Cuales son los principales cuellos de botella de Vaca Muerta?

Evacuacion de crudo, evacuacion de gas asociado, demanda estacional de gas, capacidad de tratamiento, oleoductos/gasoductos, terminales, arena/agua, equipos de fractura, rutas, energia electrica, mano de obra calificada, permisos y financiamiento.

## Que necesita Argentina para exportar mas energia?

Oleoductos, gasoductos, plantas de tratamiento, terminales portuarias, contratos exportables, estabilidad regulatoria, acceso a divisas, financiamiento competitivo, certificacion ambiental, precios domesticos consistentes y coordinacion Nacion-provincias.

## Que rol cumple YPF en la seguridad energetica nacional?

YPF integra produccion, refinacion, logistica y comercializacion. Puede sostener abastecimiento, liderar inversiones, coordinar infraestructura y desarrollar Vaca Muerta. El riesgo es que el rol publico distorsione disciplina de capital si se le exige vender bajo costo o invertir sin retorno.

## Como se mide la eficiencia de una refineria?

Utilizacion, margen, yield, disponibilidad mecanica, energia por barril, paradas no programadas, calidad, seguridad de procesos y costo de mantenimiento. No alcanza con "procesar mucho"; debe procesar con seguridad, calidad y margen.

## Que es el margen de refinacion y por que importa?

Es el valor de productos obtenidos menos costo de crudo y costos variables. Importa porque define si conviene refinar, importar productos o exportar crudo. En una integrada, tambien afecta abastecimiento y posicion comercial.

## Como se conecta upstream con downstream?

Upstream define volumen y calidad de crudo/gas. Downstream define demanda de crudo, productos y margen. Midstream conecta ambos. Si Vaca Muerta produce mas crudo liviano del que la refineria optimiza, una parte puede exportarse o mezclarse. Si downstream necesita diesel y la refineria no alcanza, se importa.

## Como se decide una inversion petrolera?

Con portafolio y escenarios: NPV, IRR, payback, breakeven, reservas, riesgo geologico, riesgo de ejecucion, precio, regulacion, emisiones, seguridad, financiamiento y alineacion estrategica. En shale, la decision es programa, no pozo aislado.

## Que datos necesita una petrolera para operar mejor?

Datos confiables de activos, produccion, costos, precios, mantenimiento, calidad, inventarios, contratos, seguridad y emisiones, integrados por jerarquia comun. Sin master data de activos y productos, los tableros se contradicen.

## Como puede IA generar valor real en oil and gas?

Prediciendo fallas, optimizando produccion, reduciendo NPT, detectando anomalias, recomendando blends, forecast de demanda, optimizando inventarios, explicando variaciones y asistiendo a operadores con procedimientos. IA debe tener gobierno, trazabilidad y validacion humana.

## Que KPIs deberia mirar un directorio de YPF?

Produccion, shale mix, reservas P1/RRR, lifting cost, capex, ROCE, EBITDA, free cash flow, deuda neta/EBITDA, margen downstream, utilizacion refinerias, market share, proyectos LNG/infraestructura, incidentes HSE, emisiones, cumplimiento regulatorio y calidad de datos certificados.

## Como se compara YPF con Petrobras, Pemex y Ecopetrol?

YPF tiene oportunidad shale unica y escala menor. Petrobras tiene escala offshore global y balance mas robusto. Pemex tiene mercado enorme pero deuda/declino/carga fiscal. Ecopetrol tiene integracion y governance de mercado, pero desafio de reposicion de reservas. YPF es una opcion de transformacion: alto upside, alto riesgo macro.

## Que riesgos politicos enfrenta la industria argentina?

Retenciones, controles de capital, precios domesticos, cambios de concesiones, permisos, conflictos federales, subsidios, regulacion ambiental, conflictividad laboral y riesgo de reversa de reglas. El capital exige estabilidad porque shale requiere inversiones repetidas.

## Que oportunidades tiene Argentina en LNG?

Monetizar gas de Vaca Muerta mas alla de demanda domestica/regional, crear exportaciones de largo plazo y posicion geopolitica. Requiere FID, compradores, financiamiento, gasoductos, FLNG/onshore LNG, permisos, estabilidad fiscal, certificacion ambiental y ejecucion.

## Como se transforma una petrolera tradicional en una empresa digital e inteligente?

Gobernando datos criticos, integrando OT/IT, creando modelos semanticos certificados, priorizando casos de uso con valor economico, entrenando usuarios, asegurando ciberseguridad y convirtiendo dashboards en decisiones operativas. La transformacion no es tecnologia; es disciplina decisional con tecnologia.

---

# Modulo 15. Plan de estudio progresivo

## Semana 1: mapa de negocio

Dominar cadena de valor, unidades, productos, actores y como fluye el dinero.

## Semana 2: upstream

Reservas, recursos, pozos, completacion, declino, EUR, lifting, F&D.

## Semana 3: shale

Factory mode, pad drilling, completacion, curvas, breakeven y Vaca Muerta.

## Semana 4: midstream

Ductos, plantas, tanques, nominaciones, linepack, restricciones y contratos.

## Semana 5: downstream

Refinacion, unidades, blending, margen, calidad, paradas, comercializacion.

## Semana 6: trading y mercados

Benchmarks, netbacks, paridades, hedging, OPEC+, China, geopolitica.

## Semana 7: Argentina, LatAm e YPF

Comparar paises, NOCs, regulacion, provincias, YPF, Petrobras, Pemex, Ecopetrol.

## Semana 8: datos, BI e IA

Arquitectura de datos, Microsoft Fabric, Power BI, gobierno, KPIs, dashboards e IA.

---

# Bibliografia y documentos recomendados

## Basicos ejecutivos

- YPF Form 20-F y presentaciones trimestrales.
- Petrobras Form 20-F.
- Pemex Form 20-F.
- Ecopetrol Form 20-F.
- IEA Oil 2025 y World Energy Outlook.
- EIA Energy Explained y International Energy Statistics.
- OPEC Monthly Oil Market Report.

## Argentina

- Secretaria de Energia: produccion, CAP IV, informes trimestrales.
- ENARGAS: transporte y demanda de gas.
- CAMMESA: demanda de gas para generacion electrica.
- INDEC: comercio exterior y balanza energetica.
- Neuquen Energia: informes provinciales.
- IAPG: estadisticas y documentos tecnicos.

## Tecnicos

- SPE papers de shale, completacion, reservorios y produccion.
- AAPG para geologia.
- API standards para seguridad/procesos.
- IOGP para HSE.
- Energistics WITSML, RESQML, PRODML.
- OSDU data platform.

## Datos y BI

- Microsoft Fabric Real-Time Intelligence.
- Microsoft Fabric Lakehouse y medallion architecture.
- Power BI semantic models.
- DAMA-DMBOK para gobierno de datos.
- ISA/IEC 62443 para ciberseguridad industrial.

---

# Checklist para analizar cualquier tema oil and gas

1. Que activo fisico esta involucrado?
2. Que molecula/producto fluye?
3. Cual es la unidad correcta?
4. Donde se mide oficialmente?
5. Que precio o netback aplica?
6. Que costo variable y fijo importa?
7. Que restriccion fisica puede limitarlo?
8. Que regulacion modifica el incentivo?
9. Que KPI demuestra si mejora o empeora?
10. Que decision ejecutiva habilita?
11. Que riesgo puede destruir valor?
12. Que dato necesito y quien es owner?
13. Como se veria en un tablero?
14. Como impacta a Argentina, Vaca Muerta o YPF?
15. Que fuente debo consultar antes de citar un numero?
