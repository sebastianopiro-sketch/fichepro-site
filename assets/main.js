// ── Language system ───────────────────────────────────────────────
const LANG_KEY = 'ftp_lang';
let currentLang = localStorage.getItem(LANG_KEY) || 'fr';
let currentBilling = 'monthly';

const T = {
  nav: {
    features: { it: 'Funzionalità', fr: 'Fonctionnalités', en: 'Features' },
    pricing:  { it: 'Prezzi',       fr: 'Tarifs',          en: 'Pricing' },
    download: { it: 'Download',     fr: 'Télécharger',     en: 'Download' },
    contact:  { it: 'Contatti',     fr: 'Contact',         en: 'Contact' },
    trial:    { it: 'Prova gratis', fr: 'Essai gratuit',   en: 'Free trial' },
  },
  hero: {
    badge:    { it: 'Disponibile per Mac e Windows', fr: 'Disponible sur Mac et Windows', en: 'Available on Mac and Windows' },
    title1:   { it: 'Il costo del piatto,', fr: 'Le coût du plat,', en: 'Food cost,' },
    title2:   { it: 'sotto controllo.', fr: 'sous contrôle.', en: 'under control.' },
    subtitle: { it: 'Schede tecniche, costi ingredienti, coefficienti e margini. Tutto in un\'app desktop che funziona anche offline.', fr: 'Fiches techniques, coûts ingrédients, coefficients et marges. Tout dans une application desktop qui fonctionne aussi hors ligne.', en: 'Recipe cards, ingredient costs, mark-ups and margins. All in a desktop app that works offline too.' },
    cta1:     { it: 'Prova gratis 30 giorni', fr: 'Essai gratuit 30 jours', en: 'Free 30-day trial' },
    cta2:     { it: 'Vedi i prezzi', fr: 'Voir les tarifs', en: 'See pricing' },
    meta:     { it: 'Nessuna carta di credito. Nessun abbonamento.', fr: 'Sans carte bancaire. Sans abonnement.', en: 'No credit card. No subscription.' },
  },
  features: {
    title:    { it: 'Tutto quello che serve al tuo ristorante', fr: 'Tout ce dont votre restaurant a besoin', en: 'Everything your restaurant needs' },
    sub:      { it: 'Pensato da zero per la ristorazione professionale', fr: 'Pensé pour la restauration professionnelle', en: 'Built from the ground up for professional kitchens' },
    f1t:  { it: 'Schede tecniche complete', fr: 'Fiches techniques complètes', en: 'Complete recipe cards' },
    f1d:  { it: 'Crea schede con ingredienti, quantità, costi e metodo di preparazione. Export PDF e Excel incluso.', fr: 'Créez des fiches avec ingrédients, quantités, coûts et méthode de préparation. Export PDF et Excel inclus.', en: 'Create cards with ingredients, quantities, costs and preparation method. PDF and Excel export included.' },
    f2t:  { it: 'Calcolo costi automatico', fr: 'Calcul des coûts automatique', en: 'Automatic cost calculation' },
    f2d:  { it: 'Inserisci i prezzi degli ingredienti e l\'app calcola costo per porzione, margine e coefficiente in tempo reale.', fr: 'Saisissez les prix et l\'app calcule le coût par portion, la marge et le coefficient en temps réel.', en: 'Enter ingredient prices and the app calculates per-portion cost, margin and mark-up in real time.' },
    f3t:  { it: 'Import Excel intelligente', fr: 'Import Excel intelligent', en: 'Smart Excel import' },
    f3d:  { it: 'Importa schede esistenti da Excel con riconoscimento automatico di colonne e formule.', fr: 'Importez des fiches existantes depuis Excel avec reconnaissance automatique des colonnes et formules.', en: 'Import existing cards from Excel with automatic column and formula recognition.' },
    f4t:  { it: 'Dashboard Analytics', fr: 'Dashboard Analytics', en: 'Analytics Dashboard' },
    f4d:  { it: 'Visualizza costo medio, coefficiente e ratio per categoria. Individua i piatti più redditizi.', fr: 'Visualisez coût moyen, coefficient et ratio par catégorie. Identifiez vos plats les plus rentables.', en: 'View average cost, mark-up and ratio by category. Spot your most profitable dishes.' },
    f5t:  { it: 'Menu Engineering', fr: 'Menu Engineering', en: 'Menu Engineering' },
    f5d:  { it: 'Classifica i piatti in Stars, Puzzles, Plow Horses e Dogs. Soglie personalizzabili.', fr: 'Classifiez vos plats en Stars, Puzzles, Plow Horses et Dogs. Seuils personnalisables.', en: 'Classify dishes as Stars, Puzzles, Plow Horses and Dogs. Customisable thresholds.' },
    f6t:  { it: 'Funziona offline', fr: 'Fonctionne hors ligne', en: 'Works offline' },
    f6d:  { it: 'App desktop locale, nessun dato inviato al cloud. I tuoi costi rimangono riservati.', fr: 'Application desktop locale, aucune donnée envoyée dans le cloud. Vos coûts restent confidentiels.', en: 'Local desktop app, no data sent to the cloud. Your costs stay private.' },
  },
  pricing: {
    title:    { it: 'Il piano giusto per te', fr: 'La formule qui vous convient', en: 'The right plan for you' },
    sub:      { it: 'Mensile o annuale, cancella quando vuoi.', fr: 'Mensuel ou annuel, annulez quand vous voulez.', en: 'Monthly or annual, cancel anytime.' },
    toggle_monthly: { it: 'Mensile', fr: 'Mensuel', en: 'Monthly' },
    toggle_annual:  { it: 'Annuale', fr: 'Annuel', en: 'Annual' },
    per_month: { it: '/mese', fr: '/mois', en: '/mo' },
    per_year:  { it: '/anno', fr: '/an', en: '/yr' },
    billed_monthly: { it: 'fatturato mensilmente', fr: 'facturé mensuellement', en: 'billed monthly' },
    annual_note_starter: { it: '228€/anno', fr: '228€/an', en: '228€/yr' },
    annual_note_pro:     { it: 'ovvero 329€/anno, -20%', fr: 'soit 329€/an, -20%', en: 'i.e. 329€/yr, -20%' },
    annual_note_proplus: { it: 'ovvero 469€/anno, -20%', fr: 'soit 469€/an, -20%', en: 'i.e. 469€/yr, -20%' },
    chosen:   { it: 'Più scelto', fr: 'Le plus choisi', en: 'Most chosen' },
    lifetime_note:    { it: 'Preferisci un pagamento unico senza abbonamento? ', fr: 'Vous préférez un paiement unique sans abonnement ? ', en: 'Prefer a one-time payment with no subscription? ' },
    lifetime_contact: { it: 'Contattaci', fr: 'Contactez-nous', en: 'Contact us' },
    once:     { it: 'pagamento unico', fr: 'paiement unique', en: 'one-time payment' },
    buy:      { it: 'Acquista ora', fr: 'Acheter maintenant', en: 'Buy now' },
    trial_cta:{ it: 'Inizia il trial gratuito', fr: 'Démarrer l\'essai gratuit', en: 'Start free trial' },
    trial_sub:{ it: '30 giorni, nessuna carta', fr: '30 jours, sans carte', en: '30 days, no card' },
    popular:  { it: 'Più popolare', fr: 'Plus populaire', en: 'Most popular' },
    f_sheets: { it: 'Schede tecniche illimitate', fr: 'Fiches techniques illimitées', en: 'Unlimited recipe cards' },
    f_cost:   { it: 'Calcolo costi automatico', fr: 'Calcul des coûts auto', en: 'Automatic cost calculation' },
    f_excel:  { it: 'Export Excel e stampa', fr: 'Export Excel et impression', en: 'Excel export and print' },
    f_history:{ it: 'Cronologia modifiche', fr: 'Historique des modifications', en: 'Change history' },
    f_import: { it: 'Import Excel intelligente', fr: 'Import Excel intelligent', en: 'Smart Excel import' },
    f_pdf:    { it: 'PDF con logo e brand', fr: 'PDF avec logo et marque', en: 'PDF with logo and brand' },
    f_analytics:{ it: 'Dashboard analytics', fr: 'Dashboard analytics', en: 'Analytics dashboard' },
    f_compare:{ it: 'Confronto versioni', fr: 'Comparaison versions', en: 'Version comparison' },
    f_menu:   { it: 'Menu Engineering', fr: 'Menu Engineering', en: 'Menu Engineering' },
    f_actions:{ it: 'Azioni suggerite (Menu Eng.)', fr: 'Actions suggérées (Menu Eng.)', en: 'Suggested actions (Menu Eng.)' },
    f_csv:    { it: 'Export CSV analytics', fr: 'Export CSV analytics', en: 'Analytics CSV export' },
    f_lang3:  { it: 'IT + FR + EN', fr: 'IT + FR + EN', en: 'IT + FR + EN' },
    f_nocloud:{ it: 'Dati solo in locale', fr: 'Données en local uniquement', en: 'Local data only' },
    pc1:      { it: '1 PC', fr: '1 PC', en: '1 PC' },
    pc9:      { it: '1 PC', fr: '1 PC', en: '1 PC' },
    pc15:     { it: '1 PC', fr: '1 PC', en: '1 PC' },
    monthly:  { it: 'al mese', fr: 'par mois', en: 'per month' },
    cancel:   { it: 'cancella quando vuoi', fr: 'annulez quand vous voulez', en: 'cancel anytime' },
    cancel_sub: { it: 'fatturato mensilmente · cancella quando vuoi', fr: 'facturé mensuellement · annulez quand vous voulez', en: 'billed monthly · cancel anytime' },
    pc_any:   { it: 'qualsiasi PC', fr: 'n\'importe quel PC', en: 'any PC' },
  },
  download: {
    title:    { it: 'Scarica Fiche Technique Pro', fr: 'Télécharger Fiche Technique Pro', en: 'Download Fiche Technique Pro' },
    sub:      { it: 'Disponibile per Mac e Windows.', fr: 'Disponible sur Mac et Windows.', en: 'Available on Mac and Windows.' },
    mac_title:{ it: 'Per Mac', fr: 'Pour Mac', en: 'For Mac' },
    mac_desc: { it: 'macOS 10.14 Mojave o superiore. Chip Intel e Apple Silicon.', fr: 'macOS 10.14 Mojave ou supérieur. Intel et Apple Silicon.', en: 'macOS 10.14 Mojave or later. Intel and Apple Silicon.' },
    mac_btn:  { it: 'Scarica per Mac', fr: 'Télécharger pour Mac', en: 'Download for Mac' },
    win_title:{ it: 'Per Windows', fr: 'Pour Windows', en: 'For Windows' },
    win_desc: { it: 'Windows 10 o superiore. 64-bit.', fr: 'Windows 10 ou supérieur. 64 bits.', en: 'Windows 10 or later. 64-bit.' },
    win_btn:  { it: 'Scarica per Windows', fr: 'Télécharger pour Windows', en: 'Download for Windows' },
    req:      { it: 'Pronto all\'uso', fr: 'Prêt à l\'emploi', en: 'Ready to use' },
    steps_title:{ it: 'Come installare', fr: 'Comment installer', en: 'How to install' },
    s1: { it: 'Scarica e decomprimi il file ZIP', fr: 'Téléchargez et décompressez le fichier ZIP', en: 'Download and unzip the ZIP file' },
    s2: { it: 'Avvia l\'app (doppio click su AVVIA.bat su Windows o AVVIA_MAC.command su Mac)', fr: 'Lancez l\'app (double-clic sur AVVIA.bat ou AVVIA_MAC.command)', en: 'Launch the app (double-click AVVIA.bat on Windows or AVVIA_MAC.command on Mac)' },
    s3: { it: 'L\'app si apre nel browser — inserisci la tua chiave di attivazione', fr: 'L\'app s\'ouvre dans le navigateur — saisissez votre clé d\'activation', en: 'The app opens in your browser — enter your activation key' },
    s4: { it: 'Inizia a creare le tue schede tecniche!', fr: 'Commencez à créer vos fiches techniques !', en: 'Start creating your recipe cards!' },
    win_install_title: { it: 'Come installare su Windows', fr: 'Comment installer sur Windows', en: 'How to install on Windows' },
    win_install_s1:    { it: 'Scarica il file .exe e aprilo', fr: 'Téléchargez le fichier .exe et ouvrez-le', en: 'Download the .exe file and open it' },
    win_install_s2:    { it: 'Se appare l\'avviso SmartScreen: clicca "Ulteriori informazioni"', fr: 'Si l\'avertissement SmartScreen apparaît : cliquez "Informations complémentaires"', en: 'If the SmartScreen warning appears: click "More info"' },
    win_install_s3:    { it: 'Poi clicca "Esegui comunque" per avviare l\'app', fr: 'Puis cliquez "Exécuter quand même" pour lancer l\'app', en: 'Then click "Run anyway" to launch the app' },
    win_install_s4:    { it: 'Solo al primo avvio — poi si apre normalmente', fr: 'Seulement au premier lancement — ensuite elle s\'ouvre normalement', en: 'Only on first launch — afterwards it opens normally' },
    win_install_note:  { it: 'Questo avviso appare perché l\'app non è certificata Microsoft. È normale per software indipendente.', fr: 'Cet avertissement apparaît car l\'app n\'est pas certifiée Microsoft. C\'est normal pour les logiciels indépendants.', en: 'This warning appears because the app is not Microsoft certified. This is normal for independent software.' },
    mac_install_title: { it: 'Come installare su Mac', fr: 'Comment installer sur Mac', en: 'How to install on Mac' },
    mac_install_s1: { it: 'Scarica il file ZIP e decomprimi', fr: 'Téléchargez le fichier ZIP et décompressez-le', en: 'Download the ZIP file and unzip it' },
    mac_install_s2: { it: 'Trascina FicheTechnique.app nella cartella Applicazioni', fr: 'Glissez FicheTechnique.app dans le dossier Applications', en: 'Drag FicheTechnique.app to your Applications folder' },
    mac_install_s3: { it: 'Al primo avvio: tasto destro sull\'app → clicca "Apri" → clicca "Apri" nel popup', fr: 'Au premier lancement : clic droit sur l\'app → cliquez "Ouvrir" → cliquez "Ouvrir" dans le popup', en: 'First launch: right-click the app → click "Open" → click "Open" in the popup' },
    mac_install_s4: { it: 'Solo al primo avvio — poi si apre normalmente', fr: 'Seulement au premier lancement — ensuite elle s\'ouvre normalement', en: 'Only on first launch — afterwards it opens normally' },
    mac_install_note: { it: 'Questo avviso appare perché l\'app non è distribuita tramite il Mac App Store. È normale per software indipendente.', fr: 'Cet avertissement apparaît car l\'app n\'est pas distribuée via le Mac App Store. C\'est normal pour les logiciels indépendants.', en: 'This warning appears because the app is not distributed via the Mac App Store. This is normal for independent software.' },
  },
  contact: {
    title:    { it: 'Contattaci', fr: 'Nous contacter', en: 'Contact us' },
    sub:      { it: 'Domande, problemi tecnici o richieste di demo? Siamo qui.', fr: 'Questions, problèmes techniques ou demandes de démo ? Nous sommes là.', en: 'Questions, technical issues or demo requests? We\'re here.' },
    name:     { it: 'Nome', fr: 'Nom', en: 'Name' },
    email:    { it: 'Email', fr: 'Email', en: 'Email' },
    subject:  { it: 'Oggetto', fr: 'Objet', en: 'Subject' },
    msg:      { it: 'Messaggio', fr: 'Message', en: 'Message' },
    send:     { it: 'Invia messaggio', fr: 'Envoyer le message', en: 'Send message' },
    s_support:{ it: 'Supporto tecnico', fr: 'Support technique', en: 'Technical support' },
    s_sales:  { it: 'Vendite / Demo', fr: 'Ventes / Démo', en: 'Sales / Demo' },
    s_other:  { it: 'Altro', fr: 'Autre', en: 'Other' },
  },
  footer: {
    desc:     { it: 'Software professionale per il calcolo del costo di produzione in ristorazione.', fr: 'Logiciel professionnel de calcul du coût de revient en restauration.', en: 'Professional food cost calculation software for restaurants.' },
    product:  { it: 'Prodotto', fr: 'Produit', en: 'Product' },
    support:  { it: 'Supporto', fr: 'Support', en: 'Support' },
    rights:   { it: 'Tutti i diritti riservati.', fr: 'Tous droits réservés.', en: 'All rights reserved.' },
  },
  home: {
    mockup_dish:   { it: '🍝 Risotto ai Funghi',      fr: '🍝 Risotto aux Champignons', en: '🍝 Mushroom Risotto' },
    mockup_coeff:  { it: 'coefficiente di margine',    fr: 'coefficient de marge',        en: 'margin coefficient' },

    used_by:       { it: 'Usato da ristoratori in',    fr: 'Utilisé par des restaurateurs en', en: 'Used by restaurateurs in' },
    country_it:    { it: '🇮🇹 Italia',                 fr: '🇮🇹 Italie',                  en: '🇮🇹 Italy' },
    country_fr:    { it: '🇫🇷 Francia',                fr: '🇫🇷 France',                  en: '🇫🇷 France' },
    country_be:    { it: '🇧🇪 Belgio',                 fr: '🇧🇪 Belgique',                en: '🇧🇪 Belgium' },
    country_ch:    { it: '🇨🇭 Svizzera',               fr: '🇨🇭 Suisse',                  en: '🇨🇭 Switzerland' },
    country_lu:    { it: '🇱🇺 Lussemburgo',            fr: '🇱🇺 Luxembourg',              en: '🇱🇺 Luxembourg' },

    hiw_eyebrow:   { it: 'Come funziona',              fr: 'Comment ça marche',           en: 'How it works' },
    hiw_title:     { it: 'Operativo in 3 minuti',      fr: 'Opérationnel en 3 minutes',   en: 'Up and running in 3 minutes' },
    hiw_s1t:       { it: 'Scarica e installa',         fr: 'Téléchargez et installez',    en: 'Download and install' },
    hiw_s1d:       { it: 'Scarica il file per Mac (.zip) o Windows (.exe) dalla pagina Download.', fr: 'Téléchargez le fichier Mac (.zip) ou Windows (.exe) depuis la page Téléchargement.', en: 'Download the Mac (.zip) or Windows (.exe) file from the Download page.' },
    hiw_s2t:       { it: 'Attiva la licenza',          fr: 'Activez votre licence',       en: 'Activate your licence' },
    hiw_s2d:       { it: "Apri l'app e inserisci la chiave di attivazione ricevuta per email.", fr: "Ouvrez l'app et saisissez la clé d'activation reçue par email.", en: 'Open the app and enter the activation key received by email.' },
    hiw_s3t:       { it: 'Crea la tua prima scheda',   fr: 'Créez votre première fiche',  en: 'Create your first recipe card' },
    hiw_s3d:       { it: 'Aggiungi ingredienti, quantità e prezzi. Il coefficiente appare in tempo reale.', fr: 'Ajoutez ingrédients, quantités et prix. Le coefficient s\'affiche instantanément.', en: 'Add ingredients, quantities and prices. The mark-up appears in real time.' },

    analytics_start: { it: '✓ Avvio automatico',       fr: '✓ Démarrage automatique',     en: '✓ Auto start' },
    analytics_title: { it: '📊 Analytics — Giugno 2026', fr: '📊 Analytics — Juin 2026',  en: '📊 Analytics — June 2026' },
    analytics_coeff: { it: 'Coeff. medio',             fr: 'Coeff. moyen',                en: 'Avg mark-up' },
    analytics_ratio: { it: 'Ratio medio',              fr: 'Ratio moyen',                 en: 'Avg ratio' },
    analytics_cards: { it: 'Schede attive',            fr: 'Fiches actives',              en: 'Active cards' },
    analytics_stars: { it: 'Stars menu',               fr: 'Stars menu',                  en: 'Menu stars' },

    cta_title:     { it: 'Pronto a controllare i tuoi costi?', fr: 'Prêt à maîtriser vos coûts ?', en: 'Ready to master your costs?' },
    cta_sub:       { it: 'Prova gratis 30 giorni. Nessuna carta di credito.', fr: 'Essai gratuit 30 jours. Sans carte bancaire.', en: 'Free 30-day trial. No credit card.' },

    faq_eyebrow:   { it: 'FAQ',                        fr: 'FAQ',                         en: 'FAQ' },
    faq_title:     { it: 'Domande frequenti',          fr: 'Questions fréquentes',        en: 'Frequently asked questions' },
    faq_q1:        { it: 'Funziona senza Internet?',   fr: 'Fonctionne-t-il sans Internet ?', en: 'Does it work without Internet?' },
    faq_a1:        { it: "Sì. È un'app desktop locale. Una volta installata funziona completamente offline. I tuoi dati non lasciano mai il tuo PC.", fr: "Oui. C'est une application desktop locale. Une fois installée, elle fonctionne entièrement hors ligne. Vos données ne quittent jamais votre PC.", en: "Yes. It's a local desktop app. Once installed it works fully offline. Your data never leaves your PC." },
    faq_q2:        { it: 'Qual è la differenza tra i piani?', fr: 'Quelle est la différence entre les plans ?', en: 'What is the difference between plans?' },
    faq_a2:        { it: 'Starter = 1 PC, funzioni base. Pro = 1 PC + import Excel, PDF con logo, analytics. Pro Plus = 1 PC + menu engineering con raccomandazioni ed export CSV.', fr: 'Starter = 1 PC, fonctions de base. Pro = 1 PC + import Excel, PDF avec logo, analytics. Pro Plus = 1 PC + menu engineering avec recommandations et export CSV.', en: 'Starter = 1 PC, core features. Pro = 1 PC + Excel import, branded PDF, analytics. Pro Plus = 1 PC + menu engineering with recommendations and CSV export.' },
    faq_q3:        { it: 'Posso usare l\'app su più PC?', fr: 'Puis-je utiliser l\'app sur plusieurs PC ?', en: 'Can I use the app on multiple PCs?' },
    faq_a3:        { it: 'Ogni licenza attiva 1 PC. Per cambiare dispositivo è necessario disattivare prima quello corrente dalle Impostazioni.', fr: 'Chaque licence active 1 PC. Pour changer d\'appareil, désactivez d\'abord le PC actuel depuis les Paramètres.', en: 'Each licence activates 1 PC. To switch device, deactivate the current one first from Settings.' },
    faq_q4:        { it: 'Come funziona la prova gratuita?', fr: 'Comment fonctionne l\'essai gratuit ?', en: 'How does the free trial work?' },
    faq_a4:        { it: 'La prova dura 30 giorni con accesso a tutte le funzioni. Nessuna carta di credito richiesta. Dopo 30 giorni puoi acquistare una licenza o smettere di usare l\'app.', fr: "L'essai dure 30 jours avec accès à toutes les fonctions. Aucune carte bancaire requise. Après 30 jours, vous pouvez acheter une licence ou arrêter d'utiliser l'app.", en: 'The trial lasts 30 days with full access. No credit card required. After 30 days you can purchase a licence or stop using the app.' },
    faq_q5:        { it: 'Posso importare le mie schede Excel esistenti?', fr: 'Puis-je importer mes fiches Excel existantes ?', en: 'Can I import my existing Excel sheets?' },
    faq_a5:        { it: 'Sì, con i piani Pro e Pro Plus. L\'importatore riconosce automaticamente colonne, formule e diversi formati di schede Excel.', fr: 'Oui, avec les plans Pro et Pro Plus. L\'importeur reconnaît automatiquement les colonnes, les formules et les différents formats de fiches Excel.', en: 'Yes, with Pro and Pro Plus plans. The importer automatically recognises columns, formulas and different Excel sheet formats.' },
  },
};

function t(section, key) {
  return T[section]?.[key]?.[currentLang] || T[section]?.[key]?.['fr'] || '';
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.querySelectorAll('.lang-sw button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  renderAll();
}

function renderAll() {
  document.querySelectorAll('[data-t]').forEach(el => {
    const [section, key] = el.dataset.t.split('.');
    el.textContent = t(section, key);
  });
  document.querySelectorAll('[data-t-html]').forEach(el => {
    const [section, key] = el.dataset.tHtml.split('.');
    el.innerHTML = t(section, key);
  });
  document.querySelectorAll('[data-t-placeholder]').forEach(el => {
    const [section, key] = el.dataset.tPlaceholder.split('.');
    el.placeholder = t(section, key);
  });
  updateBilling(currentBilling);
}

function updateBilling(billing) {
  currentBilling = billing;
  document.querySelectorAll('.plan-card[data-monthly-href]').forEach(card => {
    const amount = card.dataset[billing + 'Amount'];
    const periodKey = card.dataset[billing + 'Period'];
    const noteKey = card.dataset[billing + 'Note'];
    const href = card.dataset[billing + 'Href'];
    if (!amount) return;
    card.querySelector('.plan-amount').textContent = amount;
    const [ps, pk] = periodKey.split('.');
    card.querySelector('.plan-period').textContent = t(ps, pk);
    const [ns, nk] = noteKey.split('.');
    card.querySelector('.plan-billing-note').textContent = t(ns, nk);
    card.querySelector('.plan-cta').href = href;
  });
}

function initBillingToggle() {
  const toggle = document.getElementById('billing-toggle');
  if (!toggle) return;
  toggle.querySelectorAll('.toggle-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      toggle.querySelectorAll('.toggle-opt').forEach(b => b.classList.toggle('active', b === btn));
      updateBilling(btn.dataset.billing);
    });
  });
}

// ── FAQ toggle ────────────────────────────────────────────────────
function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q')?.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
}

// ── Smooth scroll for nav links ───────────────────────────────────
function initNav() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

// ── Contact form ──────────────────────────────────────────────────
function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = '⏳ Invio...';
    btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      const data = await res.json();
      if (data.success) {
        btn.textContent = '✓ Inviato!';
        btn.style.background = '#059669';
        form.reset();
        setTimeout(() => { btn.textContent = t('contact','send'); btn.disabled = false; btn.style.background = ''; }, 3000);
      } else {
        throw new Error(data.message || 'Errore');
      }
    } catch {
      btn.textContent = '✗ Errore — riprova';
      btn.style.background = '#dc2626';
      setTimeout(() => { btn.textContent = t('contact','send'); btn.disabled = false; btn.style.background = ''; }, 3000);
    }
  });
}

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-sw button').forEach(b => {
    b.addEventListener('click', () => setLang(b.dataset.lang));
  });
  setLang(currentLang);
  initFaq();
  initNav();
  initForm();
  initBillingToggle();
});
