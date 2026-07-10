# Íconos oficiales de Microsoft Fabric

Activos incorporados el **2026-07-10** para representar productos y elementos de Microsoft Fabric en la documentación interna del portal. Los SVG se copiaron byte a byte desde el paquete oficial; el ZIP de origen no se distribuye con la aplicación.

## Fuente y trazabilidad

| Paquete     | Fuente oficial                                                                                                                                                                                                                                            | Versión                                        | SHA-256 del ZIP                                                    |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------ |
| `Icons.zip` | [Microsoft Fabric en Microsoft Learn](https://learn.microsoft.com/en-us/fabric/fundamentals/icons) · [paquete del repositorio oficial `microsoft/fabric-samples`](https://raw.githubusercontent.com/microsoft/fabric-samples/main/docs-samples/Icons.zip) | paquete interno `@fabric-msft/svg-icons` 6.1.0 | `fc22e71b0545ed15e22c53f16bf4fb06ffe72daabd3c90a947a6e481c9675e6b` |

## Archivos incorporados

| Producto o elemento       | Archivo local y ruta dentro del paquete                                                                   |      Tamaño | SHA-256 del SVG                                                    |
| ------------------------- | --------------------------------------------------------------------------------------------------------- | ----------: | ------------------------------------------------------------------ |
| Dataflow Gen2             | `dataflow_gen2_48_item.svg` · `v6.1.0/package/dist/svg/dataflow_gen2_48_item.svg`                         | 1.604 bytes | `5291386e4344dbd5729c19805d75287fc04eed07ed74979d6b15355213a17aaf` |
| Notebook                  | `notebook_48_item.svg` · `v6.1.0/package/dist/svg/notebook_48_item.svg`                                   | 2.741 bytes | `d1822f787c453b2edf2f5af8ecca2b8b1258e07859dfaf057562b0f166dbc866` |
| Lakehouse                 | `lakehouse_48_item.svg` · `v6.1.0/package/dist/svg/lakehouse_48_item.svg`                                 | 3.228 bytes | `7f4ba4303e8f507d4ec8e47bc055bace80eb9715ccc58df40021b776a3c65f08` |
| Data Warehouse            | `data_warehouse_48_item.svg` · `v6.1.0/package/dist/svg/data_warehouse_48_item.svg`                       | 1.870 bytes | `f1fb93c5c38b69b74c7086bca91626a1f57954b30abbd109ede412b735e0a691` |
| Mirrored Generic Database | `mirrored_generic_database_48_item.svg` · `v6.1.0/package/dist/svg/mirrored_generic_database_48_item.svg` | 3.804 bytes | `a1b2d7cad2063b92b2de71d9a61d0981e44068beaa690351feaeb01a58173597` |
| OneLake                   | `one_lake_48_color.svg` · `v6.1.0/package/dist/svg/one_lake_48_color.svg`                                 | 3.022 bytes | `23fe33bcc61e703f655ac98753512a780bc2ff71d157d6c25682841ed9b6a825` |
| Power BI                  | `power_bi_48_color.svg` · `v6.1.0/package/dist/svg/power_bi_48_color.svg`                                 | 2.452 bytes | `264abad01f50acaffb697b3ede22215b7d87f387c1af92f0a0b14117d2c2e4f1` |

La comparación binaria confirmó que cada archivo local conserva exactamente los bytes del SVG de origen. También se verificó que no contienen elementos `script`, manejadores de eventos, enlaces `javascript:`, referencias a recursos remotos ni contenido HTML embebido. Las únicas URLs presentes corresponden al namespace estándar de SVG.

## Reglas de uso

- Usar los íconos únicamente para representar el producto o elemento Microsoft correspondiente en diagramas, materiales de aprendizaje o documentación.
- Mantener cerca del ícono una etiqueta con el nombre del producto o elemento.
- No recortar, voltear, rotar, distorsionar, recolorear ni cambiar la forma o el contenido del SVG.
- No aplicar filtros visuales ni usar estos íconos para representar un producto o servicio propio.
- Si se actualiza el paquete, verificar nuevamente la versión, los hashes y las reglas oficiales antes de reemplazar los archivos.

Microsoft Fabric, OneLake, Power BI y sus nombres e íconos son marcas de Microsoft. La inclusión de estos activos no transfiere derechos de marca ni implica afiliación o patrocinio; todos los demás derechos quedan reservados por su titular.
