# CLAUDE.md — fichepro-site

## Contesto
Sito marketing statico — HTML/CSS/JS puro, nessun framework.
Deploy su Netlify — push git → aggiornamento automatico.
Live: https://fiche-pro.com

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
Trial    https://fichepro.lemonsqueezy.com/checkout/buy/998afe07-c0dc-4f1d-b0e0-e205266a695a
Starter  https://fichepro.lemonsqueezy.com/checkout/buy/998afe07-c0dc-4f1d-b0e0-e205266a695a
Pro      https://fichepro.lemonsqueezy.com/checkout/buy/998afe07-c0dc-4f1d-b0e0-e205266a695a
Pro Plus https://fichepro.lemonsqueezy.com/checkout/buy/998afe07-c0dc-4f1d-b0e0-e205266a695a

## Task pendenti
- Form Netlify: aggiungere data-netlify="true" e campo hidden form-name in contatti.html
- Link download: sostituire href="#" con ZIP reali in download.html
