# Íconos oficiales de Microsoft Power Platform

Activos incorporados el **2026-07-10** para su uso exclusivo en la documentación interna del portal. Los SVG se copiaron byte a byte desde los paquetes oficiales; no se incorporaron los ZIP ni los PDF de origen.

## Fuentes y trazabilidad

| Paquete | Fuente oficial | Versión | SHA-256 del ZIP |
| --- | --- | --- | --- |
| `Power-Platform-icons-scalable.zip` | [Microsoft Download Center](https://www.microsoft.com/en-us/download/details.aspx?id=108507) · [descarga directa](https://download.microsoft.com/download/498606aa-6d27-4f13-aa5c-1401078c153b/Power-Platform-icons-scalable.zip) · [guía de íconos de Power Platform](https://learn.microsoft.com/en-us/power-platform/guidance/icons) | 2, publicada el 2026-02-05 | `d5abafebbce553690caf7b42dd14b8335bf2c0dfc09f46bd9ac8041187da2c3a` |
| `Icons.zip` | [Microsoft Fabric en Microsoft Learn](https://learn.microsoft.com/en-us/fabric/fundamentals/icons) · [paquete del repositorio oficial `microsoft/fabric-samples`](https://raw.githubusercontent.com/microsoft/fabric-samples/main/docs-samples/Icons.zip) | paquete interno `@fabric-msft/svg-icons` 6.1.0 | `fc22e71b0545ed15e22c53f16bf4fb06ffe72daabd3c90a947a6e481c9675e6b` |

El ZIP vigente de Power Platform no incluye el SVG de Power BI. Por eso `power-bi.svg` proviene del paquete oficial de íconos de Microsoft Fabric.

## Archivos incorporados

| Archivo local | Ruta dentro del paquete | Tamaño | Lienzo verificado | SHA-256 del SVG |
| --- | --- | ---: | --- | --- |
| `power-apps.svg` | `Power Platform/PowerApps_scalable.svg` | 4.398 bytes | `viewBox="0 0 96 96"`; `width="96"`, `height="96"` | `c357907ad0a2d24a6d8c82b23fe4d2aaa4a4524076991f74770fc043a4cc455a` |
| `power-automate.svg` | `Power Platform/PowerAutomate_scalable.svg` | 2.545 bytes | `viewBox="0 0 96 96"`; `width="96"`, `height="96"` | `2025db7bb3feec49d75681934b8561fb958cf11bdf0e2acf6e2b28db5c755e8d` |
| `power-bi.svg` | `v6.1.0/package/dist/svg/power_bi_48_color.svg` | 2.452 bytes | el original no declara `viewBox`; declara `width="48"` y `height="48"` | `264abad01f50acaffb697b3ede22215b7d87f387c1af92f0a0b14117d2c2e4f1` |

La comparación binaria confirmó que cada archivo local conserva exactamente los bytes del SVG de origen. También se validaron la estructura y el contenido XML: no contienen elementos `script`, manejadores de eventos, enlaces `javascript:`, referencias a recursos remotos ni contenido HTML embebido. Las únicas URLs presentes corresponden al namespace estándar de SVG.

## Reglas de uso

- Usar los íconos únicamente para representar los productos Microsoft correspondientes en diagramas, materiales de aprendizaje o documentación interna.
- Mantener cerca del ícono una etiqueta con el nombre del producto.
- No recortar, voltear ni rotar los íconos.
- No distorsionar, recolorear, redibujar ni cambiar su forma o contenido.
- No usar los íconos como marca propia ni para representar un producto o servicio del portal.

Microsoft, Microsoft Power Platform, Power Apps, Power Automate, Power BI y Microsoft Fabric, junto con sus nombres e íconos de producto, son marcas de Microsoft. Su inclusión no transfiere derechos de marca ni implica afiliación o patrocinio; se mantienen los términos de uso publicados por Microsoft y todos los demás derechos quedan reservados por su titular.
