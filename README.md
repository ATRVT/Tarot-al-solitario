# Tarot — Espejo Ciego (PWA Final con demo) — 2025-08-26

- PWA instalable (offline).
- Línea de 5 con scroll lateral en móviles.
- 3×3 en cuadrícula real.
- Editor de preguntas (añadir/quitar, exportar/importar JSON).
- Decks: noblet (con demo 00..77.jpg), rosenwald, visconti_sforza y budapest (vacíos para tus imágenes).

## Añadir tus propias cartas
Coloca 78 archivos JPG numerados **00.jpg … 77.jpg** en la carpeta de cada mazo que quieras usar.
Ejemplo:
- assets/decks/rosenwald/00.jpg … 77.jpg
- assets/decks/visconti_sforza/00.jpg … 77.jpg
- assets/decks/budapest/00.jpg … 77.jpg

## Publicar en GitHub Pages
1. Sube todos estos archivos a la **raíz** del repositorio.
2. Ve a Settings → Pages → Source: *Deploy from a branch*, Branch: *main*, Folder: */ (root)* → Save.
3. Abre la URL pública y en el móvil elige “Añadir a pantalla de inicio” para instalar.

## Actualizar la PWA
Cuando cambies imágenes o código, aumenta el nombre del caché en `sw.js` (por ejemplo: `tarot-pwa-final2-v2`) y vuelve a publicar para forzar la actualización en móviles.

¡Buenísima práctica! ✨
