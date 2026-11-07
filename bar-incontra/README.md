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

Le immagini attuali sono foto d'esempio da Unsplash. Per sostituirle con foto
vere del locale: creare una cartella `img/`, metterci le foto e cambiare gli
attributi `src` in `index.html` (es. `src="img/bancone.jpg"`).
Formato consigliato: JPG, lato lungo 1600–2000 px.

## Pubblicazione

Va bene qualsiasi hosting statico: GitHub Pages, Netlify, Cloudflare Pages,
oppure lo spazio web di un normale provider (basta caricare i file via FTP).
