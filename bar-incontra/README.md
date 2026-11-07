# Bar Incontrà — sito web

Sito statico (HTML + CSS + un po' di JS), nessuna dipendenza, nessun build.
Si apre direttamente `index.html` nel browser.

## File

- `index.html` — contenuti
- `styles.css` — stile
- `script.js` — orario del giorno, menu mobile, barra di navigazione

## Da compilare prima di pubblicare

Cercare `DA COMPILARE` in `index.html`:

- via e numero civico
- numero di telefono (compare due volte)
- orari reali (tabella in `index.html` **e** oggetto `HOURS` in `script.js`)
- link Instagram / Facebook
- P.IVA nel footer

## Foto

Le foto in `img/` sono foto stock da Unsplash (licenza Unsplash, uso gratuito
anche commerciale). Quando ci sono foto vere del locale basta sostituire i file
in `img/` tenendo lo stesso nome, oppure cambiare gli `src` in `index.html`.
Formato consigliato: JPG, lato lungo 1600–2000 px per l'apertura, 1000 px per le altre.

## Pubblicazione

Va bene qualsiasi hosting statico: GitHub Pages, Netlify, Cloudflare Pages,
oppure lo spazio web di un normale provider (basta caricare i file via FTP).
