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
- Form contatti: migrato a Web3Forms (support@fiche-pro.com) — completato
- Link download: sostituire href="#" con ZIP reali in download.html

## Note sessione 12-13 luglio 2026

- **Nuova struttura tariffe**: Starter 19€/mese · Pro 34€/mese · Pro Plus 49€/mese. Sconto -20% annuale su Pro e Pro Plus. Link checkout in prezzi.html aggiornati con i 6 variant ID reali (abbonamenti mensili/annuali).
- **Email di supporto ufficiale**: `support@fiche-pro.com` (CON trattino) — verificato via MX record reali su Cloudflare (Email Routing attivo, inoltra a sebastianopiro@gmail.com). `support@fichepro.com` (senza trattino) NON esiste come dominio, non usarlo mai. Uniformato su tutti i 14 file del sito.
- **Sicurezza — deploy Workers**: risolta esposizione pubblica di `.git` su fiche-pro.com. Causa: `directory = "."` in wrangler.toml in conflitto con `--assets` nel deploy. Fix definitivo in `.github/workflows/deploy.yml`: rsync con `--exclude='.git/'` (trailing slash obbligatorio) copia i soli asset statici in `/tmp/deploy` prima che wrangler giri. `directory` rimossa da wrangler.toml.
- **Deploy**: sito ora su Cloudflare Workers (non più Netlify). wrangler.toml: `html_handling = auto-trailing-slash`, `not_found_handling = single-page-application`. CI attivo su push a main via `cloudflare/wrangler-action@v3`.
- **REGOLA PERMANENTE — allineamento branch**: dopo ogni hotfix diretto su main, cherry-pick subito anche su develop e staging, nello stesso momento. Prima di QUALSIASI promozione develop/staging → main, verificare la DIREZIONE del diff con `git diff main <branch> --stat`. Un branch con "commit in più" non è detto sia più avanzato. Se main ha contenuto assente su develop/staging, riallineare con `git reset --hard main`, non promuovere.
- **Task aperti**: link download in download.html ancora placeholder `#` (in attesa binari Mac e Windows definitivi).
