import"./chunk-U5A4SLGG.js";import{a as l,b as c}from"./chunk-F2DVUQAN.js";import{a as e,d as r}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";function d(a,o=void 0){let n=a.split("."),t=r();for(let i of n)if(t&&Object.prototype.hasOwnProperty.call(t,i))t=t[i];else return o;return t!=null?t:o}function k(){let a="",o=a?"contato.intro":"contato.unavailable",n=`
    <header class="page-header">
      <p class="kicker" data-i18n="contato.kicker">${e("contato.kicker")}</p>
      <h1 data-i18n="contato.title">${e("contato.title")}</h1>
      <p class="lede" data-i18n="${o}">${e(o)}</p>
    </header>

    ${a?`
      <div class="contact-card">
        <p class="kicker" data-i18n="contato.labels.email">${e("contato.labels.email")}</p>
        <a class="contact-email" href="mailto:${c(a)}" dir="ltr"><bdi>${c(a)}</bdi></a>
      </div>
    `:""}
  `;return l("contato",n)}export{k as buildContatoPage};
