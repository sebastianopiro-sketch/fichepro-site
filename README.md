# Fiche Technique Pro — Sito web

Sito statico HTML/CSS/JS in 3 lingue (IT/FR/EN).

## Struttura
- `index.html` — Landing page
- `prezzi.html` — Pricing con link Lemon Squeezy
- `download.html` — Download Mac/Windows
- `contatti.html` — Form contatto
- `assets/style.css` — Stili
- `assets/main.js` — Sistema lingue + interazioni

## Deploy su Netlify
1. Push su GitHub
2. Netlify → New site from Git → seleziona il repo
3. Build command: (vuoto)
4. Publish directory: `.`
5. Deploy

## Aggiornare i link download
Cerca `href="#"` in download.html e sostituisci con i link reali ai file ZIP.

## Link Lemon Squeezy
I Variant ID sono già configurati:
- Trial:    1778897
- Starter:  1778865
- Pro:      1778886
- ProPlus:  1778891
