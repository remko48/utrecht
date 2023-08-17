/*! For license information please see web-component-paragraph-readme-stories-mdx.a337f25b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[6007],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/web-component/paragraph/readme.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>readme_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js");var dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Web Component/Paragraph/README",id:"web-component-paragraph--readme",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n",(0,jsx_runtime.jsx)(dist.h_,{id:"web-component-paragraph--readme",title:"Web Component/Paragraph/README"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:'\x3c!-- @license CC0-1.0 --\x3e\n\n# Paragraph\n\nDe _paragraph_ component gebruik je voor een alinea met lopende tekst, instructies van formulieren en voor overige losstaande tekstfragmenten.\n\n## HTML\n\nGebruik hiervoor altijd het `<p>` HTML-element, die heeft automatisch de goede [`paragraph` role](https://w3c.github.io/aria/#paragraph) in de accessibility tree (dat is nodig voor WCAG eis 1.3.1). Voor een _lead paragraph_ gebruik je `<p><b>…</b></p>`. Voor _small print_ gebruik je `<p><small>…</small></p>`.\n\nZelfs als geen CSS geladen kan worden, blijft de tekst duidelijk. Door het `<p>` element is er tussen alinea\'s duidelijke witruimte (WCAG 1.4.12). Door het `<b>` element is de _lead paragraph_ visueel herkenbaar. Door `<small>` is _small print_ visueel herkenbaar.\n\n### Lead Paragraph\n\nDe _lead paragraph_ is een extra opvallende variant van de _paragraph_. Gebruik de _lead paragraph_ onder de _heading_ van een _article_ voor een introductietekst.\n\nSchrijf in de eerste alinea kort en bondig waar de pagina over gaat, zodat de lezer kan besluiten om verder te lezen. Gebruik hiervoor de _lead paragraph_ variant zodat de tekst extra opvallend is.\n\nWanneer je meer dan circa 30 woorden of 200 tekens nodig hebt, gebruik dan niet de _lead paragraph_ variant zodat de tekst een leesbare lettergrootte heeft voor langere teksten.\n\nGebruik de _lead paragraph_ niet wanneer je een _paragraph_ voor een ander doel extra opvallend wil maken, ontwikkel dan een eigen variant.\n\n## Inhoud\n\nGroepeer zinnen die bij elkaar horen in een alinea. Begin een nieuwe alinea wanneer de tekst over een andere onderwerp gaat of een eigen doel heeft. Teksten met alinea\'s die niet bovengemiddeld lang zijn makkelijker te begrijpen als je pauze neemt, en door het grouperen is informatie sneller terug te vinden.\n\nOverweeg of een alinea met meer dan 7 zinnen of 140 woorden duidelijker is als je tekst indeelt in twee alinea\'s.\n\n## Layout\n\n### Lettergrootte\n\nKies de lettergrootte niet te klein, bijvoorbeeld `16px` of groter. Gebruik `rem` in CSS in plaats van `px`, zodat de font-size van de _paragraph_ ook verdubbelt wanneer gebruikers via hun besturingssysteem of _user stylesheet_ de standaard lettergroote 200% groter maken. ([WCAG eis 1.4.4](https://www.w3.org/TR/WCAG21/#resize-text)) Gebruikers moeten de lettergrootte vier keer groter kunnen maken met browser zoom. ([WCAG eis 1.4.10](https://www.w3.org/TR/WCAG21/#reflow)) Maak zoom niet kapot door gebruik van de `vw` of `vh` eenheden in CSS die niet altijd goed werken met zoom.\n\nGebruik de design token `nl.paragraph.font-size` als je niet de standaard-grootte wilt van `nl.document.font-size`.\n\nVoor de lead paragraph variant is het gebruikelijk de lettergrootte 10% á 20% groter te kiezen (`nl.paragraph.lead.font-size`).\n\n### Regelhoogte\n\nStel de regelhoogte met `nl.paragraph.line-height` in voor voldoende afstand tussen tekstregels, dit verbetert de leesbaarheid. Standaard gebruiken browsers circa `1.2`, maar `1.5` is voor veel gebruikers beter leesbaar. Voor WCAG 1.4.8 is het ook belangrijk om `1.5` of groter aan te bieden.\n\n### Afstand tussen paragrafen\n\nKies voldoende afstand tussen alinea\'s, in elk geval 50% groter dan afstand tussen tekstregels. (WCAG 1.4.8). Gebruik hiervoor de design tokens `nl.paragraph.margin-block-start` en `nl.paragraph.margin-block-end`.\n\n### Kleurgebruik\n\n`nl.paragraph.color`: kies voldoende contrast ten opzichte van de achtergrondkleur, van bijvoorbeeld `nl.document.background-color` of `nl.page.background-color`. Kies in plaats van zwart voor zeer donkergrijs, dat is beter leesbaar op beeldschermen. Een contrastverhouding van 7:1 is ideaal. (WCAG 1.4.3 en WCAG 1.4.6)\n\n### Regellengte\n\nZorg dat de lengte van de tekst niet te lang wordt, bijvoorbeeld door deze design token in te stellen: `nl.article.max-inline-size`. De ideale regellengte verschilt per schrift en taal, maar ergens tussen de 50 en 75 tekens voor Nederlands is prima. Je kunt in CSS bijvoorbeeld de `ch` eenheid gebruiken: `--nl-article-max-inline-size: 60ch`.\n\nVoor WCAG 1.4.8 is het nodig dat de regellengte beperkt kan worden tot maximaal 80 tekens (`80ch`), bijvoorbeeld door de viewport van de browser kleiner te maken.\n\n### Tekstuitlijning\n\nTekst dient uitsluitend links uitgelijnd zijn, voor Nederlandse teksten. Gebruik daarvoor `text-align: start`.\n\n`text-align: justify` moet vermeden kunnen worden volgens WCAG 1.4.8, dus gebruik deze voor het gemak helemaal niet. Rechts uitlijnen en tekst centreren moet je ook niet gebruiken voor lopende tekst.\n\n## Hoe het niet moet\n\n### Geen opmaak\n\nGeen `p` gebruiken:\n\n```html\n<section>\n  <h1>Interessante pagina</h1>\n  Deze eerste tekst ziet er misschien prima uit.\n  <p>Maar ook de eerste paragraaf hoort in een p-element te staan.</p>\n</section>\n```\n\n### Lege paragraaf\n\nEen lege `p` gebruiken, bijvoorbeeld om extra afstand te maken:\n\n```html\n<section>\n  <h1>Voorbeeld pagina</h1>\n  <p>Deze pagina ziet er op het oog misschien prima uit.</p>\n  <p>&nbsp;</p>\n  <p>Maar sommige screen readers zeggen dat er drie paragrafen zijn, dat is verwarrend.</p>\n</section>\n```\n\n### Geen semantiek\n\nEen `div` gebruiken:\n\n```html\n<section>\n    <h1>Interessante pagina</h1>\n    <div>Deze eerste tekst ziet er misschien prima uit, maar de paragraph role ontbreek in de accessibility tree.</div>\n    <div role="paragraph">Gebruik gewoon een p-element in plaats van ARIA om de role te verkrijgen.</p>\n</section>\n```\n\nWanneer je tekstfragmenten na elkaar plaatst is het belangrijk dat je een element zoals paragraaf gebruikt (en niet een `inline` element zoals `span` of `label`), zodat de twee tekstfragmenten los van elkaar worden voorgelezen door screen readers. Wanneer de CSS niet geladen kan worden, dan heeft `p` wel marge en `div` niet, in veel situaties zonder CSS is `p` daarom leesbaarder dan `div`.\n\n### `inline` in plaats van `block`-elementen\n\n```html\n<label for="name">Voornaam</label><span>Voornaam is verplicht</span>\n```\n\nBeter:\n\n```html\n<p><label for="name">Voornaam</label></p>\n<p>Voornaam is verplicht</p>\n```\n\n### Overdreven nadruk\n\nBenadruk niet een hele paragraaf, maar markeer het belangrijke gedeelte.\n\n```html\n<p>\n  <strong\n    >Tenzij anders vermeld is op de inhoud van deze website de Creative Commons zero verklaring (CC0) van toepassing.\n    Dit houdt in dat iedere vorm van hergebruik van de inhoud van deze site is toegestaan, tenzij bij of in een bepaald\n    onderdeel (bijvoorbeeld een logo of een foto) staat aangegeven dat op dat onderdeel een auteursrechtelijke\n    uitzondering van toepassing is.\n  </strong>\n</p>\n```\n\nBeter:\n\n```html\n<p>\n  <em>Tenzij anders vermeld</em> is op de inhoud van deze website de Creative Commons zero verklaring (CC0) van\n  toepassing. Dit houdt in dat <strong>iedere vorm van hergebruik van de inhoud van deze site is toegestaan</strong>,\n  tenzij bij of in een bepaald onderdeel (bijvoorbeeld een logo of een foto) staat aangegeven dat op dat onderdeel een\n  auteursrechtelijke uitzondering van toepassing is.\n</p>\n```\n\n## Links\n\n- [MDN: `<p>`: The Paragraph element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)\n- [HTML specification: The `<b>` element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element). Bevat een voorbeeld van het `b` element voor lead paragraphs.\n- [HTML specification: The `<small>` element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element). Bevat een voorbeeld van het `small` element voor _small print_.\n- [Hoe lang mag een alinea zijn? En waar hangt dat van af? - Taaladvies.net](https://taaladvies.net/lengte-van-alineas/)\n\n### Relevante WCAG regels\n\n- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships)\n- [WCAG eis 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum)\n- [WCAG eis 1.4.4](https://www.w3.org/TR/WCAG21/#resize-text)\n- [WCAG eis 1.4.8](https://www.w3.org/TR/WCAG21/#visual-presentation)\n- [WCAG eis 1.4.10](https://www.w3.org/TR/WCAG21/#reflow)\n- [WCAG eis 1.4.12](https://www.w3.org/TR/WCAG21/#text-spacing)\n- [WCAG eis 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts)\n'})]})}}};const readme_stories=componentMeta}}]);