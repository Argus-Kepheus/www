import{a as r,b as n}from"./chunk-F2DVUQAN.js";import{a as e,d as i}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";function s(a,o=void 0){let l=a.split("."),t=i();for(let c of l)if(t&&Object.prototype.hasOwnProperty.call(t,c))t=t[c];else return o;return t!=null?t:o}function m(){let a=s("contato.email",""),o=`
    <header class="page-header">
      <p class="kicker" data-i18n="contato.kicker">${e("contato.kicker")}</p>
      <h1 data-i18n="contato.title">${e("contato.title")}</h1>
      <p class="lede" data-i18n="contato.intro">${e("contato.intro")}</p>
    </header>

    ${a?`
      <div class="contact-card">
        <p class="kicker" data-i18n="contato.labels.email">${e("contato.labels.email")}</p>
        <a class="contact-email" href="mailto:${n(a)}" dir="ltr"><bdi>${n(a)}</bdi></a>
      </div>
    `:""}
  `;return r("contato",o)}export{m as buildContatoPage};
