import{a as o}from"./chunk-AGXF7VHV.js";import{a as s}from"./chunk-F2DVUQAN.js";import{a}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";var l=["tech","root","socl","theo","natr"];function c(e){return e===0?`<span data-i18n="sobre.areaCountNone">${a("sobre.areaCountNone")}</span>`:e===1?`<span data-i18n="sobre.areaCountOne">${a("sobre.areaCountOne")}</span>`:`<span>${a("sobre.areaCount",{count:String(e)})}</span>`}async function u(){let e=await o(),r=l.map(t=>`
      <li class="domain">
        <p class="domain-count">${c(e.filter(i=>i.area===t).length)}</p>
        <div>
          <h3 data-i18n="areas.${t}.title">${a(`areas.${t}.title`)}</h3>
          <p data-i18n="areas.${t}.description">${a(`areas.${t}.description`)}</p>
        </div>
      </li>
    `).join(""),n=`
    <header class="page-header">
      <p class="kicker" data-i18n="sobre.kicker">${a("sobre.kicker")}</p>
      <h1 data-i18n="sobre.title">${a("sobre.title")}</h1>
      <p class="lede" data-i18n="sobre.intro">${a("sobre.intro")}</p>
    </header>
    <section class="section" aria-labelledby="sobre-areas">
      <h2 class="section-title" id="sobre-areas" data-i18n="sobre.areasTitle">${a("sobre.areasTitle")}</h2>
      <ul class="domain-list">${r}</ul>
    </section>
  `;return s("sobre",n)}export{u as buildSobrePage};
