# CLAUDE.md — fichepro-site

## Contesto
Sito marketing statico — HTML/CSS/JS puro, nessun framework.
Deploy su Netlify — push git → aggiornamento automatico.
Live: https://fiche-technique-pro.fichepro.workers.dev

## Regole operative
- Rispondi e commenta sempre in italiano
- Includi sempre git add -A && git commit -m "..." && git push alla fine
- Nessun framework — solo HTML/CSS/JS vanilla
- Ogni testo visibile va aggiunto in IT, FR e EN nell'oggetto T di main.js
- Commit message: feat: fix: refactor: docs: style:

## Struttura
index.html      Landing page
prezzi.html     Pricing
download.html   Download Mac/Windows
contatti.html   Form contatto
blog.html       Indice articoli SEO
assets/style.css
assets/main.js  Sistema multilingua + interazioni

## Sistema multilingua
Traduzioni nell'oggetto T in main.js.
Lingua default: fr. Chiave localStorage: ftp_lang.
Attributo HTML: data-t="sezione.chiave"
Regola: aggiungi prima la traduzione in main.js, poi data-t nell'HTML.

## Link Lemon Squeezy
Trial    https://app.lemonsqueezy.com/checkout/buy/1778897
Starter  https://app.lemonsqueezy.com/checkout/buy/1778865
Pro      https://app.lemonsqueezy.com/checkout/buy/1778886
Pro Plus https://app.lemonsqueezy.com/checkout/buy/1778891

## Task pendenti
- Form Netlify: aggiungere data-netlify="true" e campo hidden form-name in contatti.html
- Link download: sostituire href="#" con ZIP reali in download.html
