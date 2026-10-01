import{a as n}from"./chunk-AGXF7VHV.js";import{a as r,b as t,c as i}from"./chunk-F2DVUQAN.js";import{a as l}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";var p=["tech","root","socl","theo","natr"],g=[["author","authors"],["edition","edition"],["year","year"],["isbn","isbn"],["format","format"],["pages","pages"],["language","language"],["subjects","subjects"],["nextEdition","nextEdition"]];function $(a){return`<dl class="colophon">${g.filter(([,e])=>a[e]).map(([e,o])=>`
      <dt data-i18n="catalogo.labels.${e}">${l(`catalogo.labels.${e}`)}</dt>
      <dd>${t(a[o])}</dd>
    `).join("")}</dl>`}function d(a){return`<p class="book-area" data-i18n="areas.${a.area}.title">${l(`areas.${a.area}.title`)}</p>`}function u(a){let s=(a.links||[]).map(e=>`<a href="${t(e.url)}" class="btn outline" target="_blank" rel="noopener noreferrer">${t(e.label)}</a>`).join("");return`
    <article class="book-entry" data-area="${t(a.area)}">
      ${i(a)}
      <div>
        ${d(a)}
        ${a.series?`<p class="kicker">${t(a.series)}</p>`:""}
        <h3 class="book-title">${t(a.title)}</h3>
        ${a.subtitle?`<p class="subtitle">${t(a.subtitle)}</p>`:""}
        ${$(a)}
        <p class="book-abstract">${t(a.abstract)}</p>
        ${s?`
          <div class="book-links">
            <p class="book-links-label" data-i18n="catalogo.labels.links">${l("catalogo.labels.links")}</p>
            ${s}
          </div>
        `:""}
      </div>
    </article>
  `}function b(a){return a.backCover?`
    <a href="${t(a.backCover)}" class="book-back-cover-link" target="_blank" rel="noopener noreferrer">
      <img src="${t(a.backCover)}" alt="${t(a.backCoverAlt||"")}" class="book-back-cover" width="600" height="849" loading="lazy" decoding="async">
    </a>
  `:""}function h(a){return`
    <article class="book-card" data-area="${t(a.area)}">
      ${i(a)}
      <div class="book-card-body">
        ${d(a)}
        <h3 class="book-card-title">${t(a.title)}</h3>
        ${a.subtitle?`<p class="subtitle">${t(a.subtitle)}</p>`:""}
        <p class="book-status">
          <span data-i18n="catalogo.status.development">${l("catalogo.status.development")}</span>
          ${a.forecast?`\xB7 <span data-i18n="catalogo.labels.forecast">${l("catalogo.labels.forecast")}</span> ${t(a.forecast)}`:""}
        </p>
        ${a.note?`<p class="book-note">${t(a.note)}</p>`:""}
        <details class="book-details">
          <summary data-i18n="catalogo.details">${l("catalogo.details")}</summary>
          <p>${t(a.abstract)}</p>
          ${a.subjects?`<p class="book-subjects">${t(a.subjects)}</p>`:""}
          ${b(a)}
        </details>
      </div>
    </article>
  `}function f(a){let s=p.filter(e=>a.some(o=>o.area===e)).map(e=>`
      <button type="button" class="filter-btn" data-area-filter="${e}" aria-pressed="false" data-i18n="areas.${e}.title">${l(`areas.${e}.title`)}</button>
    `).join("");return`
    <div class="catalog-filters" role="group" aria-label="${l("catalogo.filterLabel")}" data-i18n-aria-label="catalogo.filterLabel">
      <button type="button" class="filter-btn" data-area-filter="all" aria-pressed="true" data-i18n="catalogo.allAreas">${l("catalogo.allAreas")}</button>
      ${s}
    </div>
  `}async function C(){let a=await n(),s=a.filter(c=>c.status==="published"),e=a.filter(c=>c.status!=="published"),o=`
    <header class="page-header">
      <h1 data-i18n="catalogo.title">${l("catalogo.title")}</h1>
      <p class="lede" data-i18n="catalogo.intro">${l("catalogo.intro")}</p>
    </header>
    ${a.length?f(a):`<p data-i18n="catalogo.empty">${l("catalogo.empty")}</p>`}
    ${s.length?`
      <section class="section catalog-section" aria-labelledby="catalog-published">
        <h2 class="section-title" id="catalog-published" data-i18n="catalogo.sections.published">${l("catalogo.sections.published")}</h2>
        <div class="book-list">${s.map(u).join("")}</div>
      </section>
    `:""}
    ${e.length?`
      <section class="section catalog-section" aria-labelledby="catalog-upcoming">
        <h2 class="section-title" id="catalog-upcoming" data-i18n="catalogo.sections.development">${l("catalogo.sections.development")}</h2>
        ${e.some(c=>c.placeholder)?`<p class="placeholder-note" data-i18n="catalogo.placeholderNote">${l("catalogo.placeholderNote")}</p>`:""}
        <div class="book-grid">${e.map(h).join("")}</div>
      </section>
    `:""}
    <p class="catalog-empty-filter" hidden data-i18n="catalogo.noResults">${l("catalogo.noResults")}</p>
  `;return r("catalogo",o)}export{C as buildCatalogoPage};
