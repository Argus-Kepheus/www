import{a as r}from"./chunk-AGXF7VHV.js";import{a as n,b as l,c}from"./chunk-F2DVUQAN.js";import{a as t}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";var p=["tech","root","socl","theo","natr"],g=[["author","authors"],["edition","edition"],["year","year"],["isbn","isbn"],["format","format"],["pages","pages"],["language","language"],["subjects","subjects"],["nextEdition","nextEdition"]];function u(a){return`<dl class="colophon">${g.filter(([,e])=>a[e]).map(([e,o])=>`
      <dt data-i18n="catalogo.labels.${e}">${t(`catalogo.labels.${e}`)}</dt>
      <dd>${l(a[o])}</dd>
    `).join("")}</dl>`}function d(a){return`<p class="book-area" data-i18n="areas.${a.area}.title">${t(`areas.${a.area}.title`)}</p>`}function $(a){let s=(a.links||[]).map(e=>`<a href="${l(e.url)}" class="btn outline" target="_blank" rel="noopener noreferrer">${l(e.label)}</a>`).join("");return`
    <article class="book-entry" data-area="${l(a.area)}">
      ${c(a)}
      <div>
        ${d(a)}
        ${a.series?`<p class="kicker">${l(a.series)}</p>`:""}
        <h3 class="book-title">${l(a.title)}</h3>
        ${a.subtitle?`<p class="subtitle">${l(a.subtitle)}</p>`:""}
        ${u(a)}
        <p class="book-abstract">${l(a.abstract)}</p>
        ${s?`
          <div class="book-links">
            <p class="book-links-label" data-i18n="catalogo.labels.links">${t("catalogo.labels.links")}</p>
            ${s}
          </div>
        `:""}
      </div>
    </article>
  `}function b(a){return`
    <article class="book-card" data-area="${l(a.area)}">
      ${c(a)}
      <div class="book-card-body">
        ${d(a)}
        <h3 class="book-card-title">${l(a.title)}</h3>
        ${a.subtitle?`<p class="subtitle">${l(a.subtitle)}</p>`:""}
        <p class="book-status">
          <span data-i18n="catalogo.status.development">${t("catalogo.status.development")}</span>
          ${a.forecast?`\xB7 <span data-i18n="catalogo.labels.forecast">${t("catalogo.labels.forecast")}</span> ${l(a.forecast)}`:""}
        </p>
        <details class="book-details">
          <summary data-i18n="catalogo.details">${t("catalogo.details")}</summary>
          <p>${l(a.abstract)}</p>
          ${a.subjects?`<p class="book-subjects">${l(a.subjects)}</p>`:""}
        </details>
      </div>
    </article>
  `}function h(a){let s=p.filter(e=>a.some(o=>o.area===e)).map(e=>`
      <button type="button" class="filter-btn" data-area-filter="${e}" aria-pressed="false" data-i18n="areas.${e}.title">${t(`areas.${e}.title`)}</button>
    `).join("");return`
    <div class="catalog-filters" role="group" aria-label="${t("catalogo.filterLabel")}" data-i18n-aria-label="catalogo.filterLabel">
      <button type="button" class="filter-btn" data-area-filter="all" aria-pressed="true" data-i18n="catalogo.allAreas">${t("catalogo.allAreas")}</button>
      ${s}
    </div>
  `}async function y(){let a=await r(),s=a.filter(i=>i.status==="published"),e=a.filter(i=>i.status!=="published"),o=`
    <header class="page-header">
      <h1 data-i18n="catalogo.title">${t("catalogo.title")}</h1>
      <p class="lede" data-i18n="catalogo.intro">${t("catalogo.intro")}</p>
    </header>
    ${a.length?h(a):`<p data-i18n="catalogo.empty">${t("catalogo.empty")}</p>`}
    ${s.length?`
      <section class="section catalog-section" aria-labelledby="catalog-published">
        <h2 class="section-title" id="catalog-published" data-i18n="catalogo.sections.published">${t("catalogo.sections.published")}</h2>
        <div class="book-list">${s.map($).join("")}</div>
      </section>
    `:""}
    ${e.length?`
      <section class="section catalog-section" aria-labelledby="catalog-upcoming">
        <h2 class="section-title" id="catalog-upcoming" data-i18n="catalogo.sections.development">${t("catalogo.sections.development")}</h2>
        <p class="placeholder-note" data-i18n="catalogo.placeholderNote">${t("catalogo.placeholderNote")}</p>
        <div class="book-grid">${e.map(b).join("")}</div>
      </section>
    `:""}
    <p class="catalog-empty-filter" hidden data-i18n="catalogo.noResults">${t("catalogo.noResults")}</p>
  `;return n("catalogo",o)}export{y as buildCatalogoPage};
