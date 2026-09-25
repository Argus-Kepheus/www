import{a as t}from"./chunk-D2XV4R5X.js";function c(){return`
    <div class="back-to-top-container">
      <a href="#top" class="back-to-top-button" aria-label="${t("aria.backToTop")}" data-i18n-aria-label="aria.backToTop">
        <span class="arrow-up">\u2191</span>
        <span class="button-text" data-i18n="buttons.backToTop">${t("buttons.backToTop")}</span>
      </a>
    </div>
  `}function i(a,s,r=!1){return console.log("Creating page container for:",a),`
    <div class="page-container ${a}-page">
      ${s}
      ${r?c():""}
    </div>
  `}function e(a=""){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function l(a,s="lazy"){return a.cover?`<img src="${e(a.cover)}" alt="${e(a.coverAlt||a.title)}" class="book-cover" width="600" height="849" loading="${s}" decoding="async">`:`
    <div class="book-cover css-cover" role="img" aria-label="${e(a.title)}">
      ${a.series?`<span class="css-cover-series">${e(a.series)}</span>`:""}
      <span class="css-cover-title">${e(a.title)}</span>
      ${a.subtitle?`<span class="css-cover-subtitle">${e(a.subtitle)}</span>`:""}
      <span class="css-cover-author">${e(a.authors)}</span>
      <span class="css-cover-publisher">Editora Argus Kepheus</span>
    </div>
  `}export{i as a,e as b,l as c};
