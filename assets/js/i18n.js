/**
 * CyberNotes i18n — simple ID/EN UI toggle.
 *
 * How it works:
 * - Any element with BOTH data-id="..." and data-en="..." attributes gets its
 *   content swapped automatically based on the selected language.
 * - The chosen language is remembered in localStorage, so it persists across
 *   pages and future visits.
 * - Article content itself (files in _posts/) is NOT translated by this
 *   script — it only affects site UI text (nav, footer, headings, etc).
 *   New articles only ever need a plain .md file, nothing else.
 *
 * To make a new piece of UI text translatable, just wrap it like this:
 *   <span data-id="Teks Indonesia" data-en="English text">Teks Indonesia</span>
 */
(function () {
  var STORAGE_KEY = 'cn_lang';
  var DEFAULT_LANG = 'id';

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    } catch (e) {
      return DEFAULT_LANG;
    }
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-id][data-en]').forEach(function (el) {
      var text = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-id');
      if (text !== null) el.innerHTML = text;
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    document.body.classList.toggle('lang-en', lang === 'en');
    document.body.classList.toggle('lang-id', lang === 'id');
  }

  function setLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore (private mode / storage disabled) */
    }
    applyLang(lang);
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(getLang());

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
      });
    });
  });

  window.CyberNotesI18n = { setLang: setLang, getLang: getLang };
})();
