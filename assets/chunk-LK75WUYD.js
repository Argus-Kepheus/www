import{a as n}from"./chunk-AGXF7VHV.js";import{a as l,b as i,c}from"./chunk-F2DVUQAN.js";import{a as t}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";function h(e){return`
    <section class="cover-hero on-cover full-bleed" aria-labelledby="home-title">
      <div class="cover-hero-inner">
        <div class="cover-hero-text reveal">
          <p class="kicker" data-i18n="home.kicker">${t("home.kicker")}</p>
          <span class="rule" aria-hidden="true"></span>
          <h1 id="home-title" data-i18n="home.title">${t("home.title")}</h1>
          <span class="rule" aria-hidden="true"></span>
          <p class="subtitle" data-i18n="home.subtitle">${t("home.subtitle")}</p>
          <div class="cta-buttons">
            <a href="#catalogo" class="btn primary" data-i18n="home.cta.catalogo">${t("home.cta.catalogo")}</a>
            <a href="#contato" class="btn secondary" data-i18n="home.cta.contato">${t("home.cta.contato")}</a>
          </div>
        </div>
        ${e?`
          <a href="#catalogo" class="cover-hero-book reveal">
            ${c(e,"eager")}
            <p class="cover-hero-caption" data-i18n="home.bookCaption">${t("home.bookCaption")}</p>
          </a>
        `:""}
      </div>
    </section>
  `}function m(){let e=["item1","item2","item3"].map(a=>`
      <li class="principle">
        <h3 data-i18n="home.highlights.${a}.title">${t(`home.highlights.${a}.title`)}</h3>
        <p data-i18n="home.highlights.${a}.description">${t(`home.highlights.${a}.description`)}</p>
      </li>
    `).join("");return`
    <section class="section reveal" aria-labelledby="home-principles">
      <h2 class="section-title" id="home-principles" data-i18n="home.highlights.title">${t("home.highlights.title")}</h2>
      <p class="lede" data-i18n="home.intro">${t("home.intro")}</p>
      <ol class="principles">${e}</ol>
    </section>
  `}function p(e){return e?`
    <section class="section reveal" aria-labelledby="home-featured">
      <div class="feature">
        ${c(e)}
        <div>
          <p class="kicker" data-i18n="home.featured.kicker">${t("home.featured.kicker")}</p>
          <h3 id="home-featured">${i(e.title)}</h3>
          <p class="subtitle">${i(e.subtitle)}</p>
          <p>${i(e.abstract)}</p>
          <a href="#catalogo" class="btn primary" data-i18n="home.featured.cta">${t("home.featured.cta")}</a>
        </div>
      </div>
    </section>
  `:""}function d(e){if(!e.length)return"";let a=e.slice(0,4).map(o=>`<li class="upcoming-item"><a href="#catalogo" class="upcoming-link">${c(o)}<span class="upcoming-title">${i(o.title)}</span></a></li>`).join("");return`
    <section class="section reveal" aria-labelledby="home-upcoming">
      <p class="kicker" data-i18n="home.upcoming.kicker">${t("home.upcoming.kicker")}</p>
      <h2 class="section-title" id="home-upcoming" data-i18n="home.upcoming.title">${t("home.upcoming.title")}</h2>
      <ul class="upcoming-list">${a}</ul>
      <a href="#catalogo" class="btn secondary" data-i18n="home.upcoming.cta">${t("home.upcoming.cta")}</a>
    </section>
  `}async function f(){let e=await n(),a=e.find(s=>s.status==="published"),o=e.filter(s=>s.status!=="published"),r=`
    ${h(a)}
    ${m()}
    ${p(a)}
    ${d(o)}
  `;return l("home",r)}export{f as buildHomePage};
