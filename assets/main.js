// ── Language system ───────────────────────────────────────────────
const LANG_KEY = 'ftp_lang';
let currentLang = localStorage.getItem(LANG_KEY) || 'fr';

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
    title:    { it: 'Prezzo unico, per sempre', fr: 'Prix unique, pour toujours', en: 'One price, forever' },
    sub:      { it: 'Nessun abbonamento. Paghi una volta, usi per sempre.', fr: 'Sans abonnement. Payez une fois, utilisez pour toujours.', en: 'No subscription. Pay once, use forever.' },
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
    pc9:      { it: 'fino a 9 PC', fr: "jusqu'à 9 PC", en: 'up to 9 PCs' },
    pc15:     { it: 'fino a 15 PC', fr: "jusqu'à 15 PC", en: 'up to 15 PCs' },
    monthly:  { it: 'al mese', fr: 'par mois', en: 'per month' },
    cancel:   { it: 'cancella quando vuoi', fr: 'annulez quand vous voulez', en: 'cancel anytime' },
    pc_any:   { it: 'qualsiasi PC', fr: 'n\'importe quel PC', en: 'any PC' },
  },
  download: {
    title:    { it: 'Scarica Fiche Technique Pro', fr: 'Télécharger Fiche Technique Pro', en: 'Download Fiche Technique Pro' },
    sub:      { it: 'Disponibile per Mac e Windows. Richiede Python 3.8+.', fr: 'Disponible sur Mac et Windows. Nécessite Python 3.8+.', en: 'Available on Mac and Windows. Requires Python 3.8+.' },
    mac_title:{ it: 'Per Mac', fr: 'Pour Mac', en: 'For Mac' },
    mac_desc: { it: 'macOS 10.14 Mojave o superiore. Chip Intel e Apple Silicon.', fr: 'macOS 10.14 Mojave ou supérieur. Intel et Apple Silicon.', en: 'macOS 10.14 Mojave or later. Intel and Apple Silicon.' },
    mac_btn:  { it: 'Scarica per Mac', fr: 'Télécharger pour Mac', en: 'Download for Mac' },
    win_title:{ it: 'Per Windows', fr: 'Pour Windows', en: 'For Windows' },
    win_desc: { it: 'Windows 10 o superiore. 64-bit. Python richiesto.', fr: 'Windows 10 ou supérieur. 64 bits. Python requis.', en: 'Windows 10 or later. 64-bit. Python required.' },
    win_btn:  { it: 'Scarica per Windows', fr: 'Télécharger pour Windows', en: 'Download for Windows' },
    req:      { it: 'Richiede Python 3.8+', fr: 'Nécessite Python 3.8+', en: 'Requires Python 3.8+' },
    steps_title:{ it: 'Come installare', fr: 'Comment installer', en: 'How to install' },
    s1: { it: 'Scarica e decomprimi il file ZIP', fr: 'Téléchargez et décompressez le fichier ZIP', en: 'Download and unzip the ZIP file' },
    s2: { it: 'Avvia l\'app (doppio click su AVVIA.bat su Windows o AVVIA_MAC.command su Mac)', fr: 'Lancez l\'app (double-clic sur AVVIA.bat ou AVVIA_MAC.command)', en: 'Launch the app (double-click AVVIA.bat on Windows or AVVIA_MAC.command on Mac)' },
    s3: { it: 'L\'app si apre nel browser — inserisci la tua chiave di attivazione', fr: 'L\'app s\'ouvre dans le navigateur — saisissez votre clé d\'activation', en: 'The app opens in your browser — enter your activation key' },
    s4: { it: 'Inizia a creare le tue schede tecniche!', fr: 'Commencez à créer vos fiches techniques !', en: 'Start creating your recipe cards!' },
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
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = '✓ Inviato!';
    btn.disabled = true;
    btn.style.background = '#059669';
    setTimeout(() => { form.reset(); btn.textContent = t('contact','send'); btn.disabled = false; btn.style.background = ''; }, 3000);
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
});
