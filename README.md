# Oil & Gas Study Desk

Web personal de estudio sobre la industria global del petroleo y gas, Latinoamerica, Argentina, Vaca Muerta e YPF.

## Abrir localmente

```bash
python3 -m http.server 8001 --bind 127.0.0.1
```

Luego abrir:

```text
http://127.0.0.1:8001/
```

## Incluye

- Manual ejecutivo y tecnico en Markdown.
- Navegacion por modulos.
- Busqueda de conceptos.
- Modo lectura.
- Conceptos clickeables dentro de la lectura.
- Grafo animado de conexiones entre roca, pozo, midstream, downstream, mercado, caja, datos, Vaca Muerta e YPF.
- Flujo animado de valor con escenarios como cuello midstream, precio local bajo, exportacion habilitada y refineria parada.
- Tarjetas de repaso.
- Quiz ejecutivo.
- Diccionario de KPIs.
- Notas por modulo guardadas en el navegador.
- Progreso local con `localStorage`.
- PWA/offline basico con service worker.
- Assets responsive en AVIF/WebP.
- Headers de cache y seguridad para Vercel.

## Archivos principales

- `index.html`
- `styles.css`
- `app.js`
- `manual_oil_gas_ypf.md`
- `assets/energy-chain.png`
- `vercel.json`
- `manifest.webmanifest`
- `service-worker.js`
