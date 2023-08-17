/*! For license information please see web-component-BreadcrumbNav-stories.afc11773.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[65417],{"../../documentation/components/ComponentTokensSection.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>ComponentTokensSection});var prop_types=__webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),DesignTokensTable=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../documentation/components/DesignTokensTable.jsx"));const isHiddenDesignToken=token=>!!token&&!!token.$extensions&&!0===token.$extensions["nl.nldesignsystem.hidden"];var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ComponentTokensTable=({component,tokens})=>{const componentPath=["utrecht",component.replace(/^(example|denhaag|utrecht)-/,"")],subset=tokens.filter((token=>componentPath.every(((name,index)=>token.path[index]===name)))).filter((token=>!isHiddenDesignToken(token)));return 0===subset.length?(0,jsx_runtime.jsxs)("p",{children:["This component has ",(0,jsx_runtime.jsx)("strong",{children:"no documented design tokens"}),"."]}):(0,jsx_runtime.jsx)(DesignTokensTable.V,{tokens:subset})};ComponentTokensTable.displayName="ComponentTokensTable",ComponentTokensTable.propTypes={component:prop_types_default().string.isRequired,tokens:prop_types_default().arrayOf(prop_types_default().shape({comment:prop_types_default().string,name:prop_types_default().string,path:prop_types_default().arrayOf(prop_types_default().string),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])}))};var lodash_isplainobject=__webpack_require__("../../node_modules/.pnpm/lodash.isplainobject@4.0.6/node_modules/lodash.isplainobject/index.js"),lodash_isplainobject_default=__webpack_require__.n(lodash_isplainobject);const CopyButton=({value,textContent="Copy"})=>(0,jsx_runtime.jsx)("button",{className:"utrecht-button utrecht-button--secondary-action utrecht-button--html-button",style:{cursor:"copy"},onClick:()=>navigator.clipboard.writeText(value),type:"button",children:textContent});CopyButton.displayName="CopyButton",CopyButton.propTypes={value:prop_types_default().string.isRequired,textContent:prop_types_default().string};const traverseDeep=(root,parents,current,valueTest,callback)=>{valueTest(current)?callback(parents,current):lodash_isplainobject_default()(current)&&Object.entries(current).forEach((([key,value])=>{traverseDeep(root,[...parents,key],value,valueTest,callback)}))},isDesignTokenDefinition=value=>(value=>Object.prototype.hasOwnProperty.call(value,"value")||Object.prototype.hasOwnProperty.call(value,"$value"))(value)||Object.prototype.hasOwnProperty.call(value,"css")||Object.prototype.hasOwnProperty.call(value,"$extensions"),tokensToCSS=tokens=>{const lines=[];return((tokens,callback)=>{traverseDeep(tokens,[],tokens,isDesignTokenDefinition,callback)})(tokens,((path,value)=>{isHiddenDesignToken(value)||lines.push(`  /* --${path.join("-")}: ${value&&value.$extensions&&value.$extensions["nl.nldesignsystem.css.property"]&&value.$extensions["nl.nldesignsystem.css.property"].syntax?value.$extensions["nl.nldesignsystem.css.property"].syntax:"<value>"}; */`)})),`.your-theme {\n  /* Uncomment each custom property you need */\n${lines.join("\n")}\n}`},ExampleTokensCSS=({definition})=>{const code=tokensToCSS(definition);return(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsxs)("h2",{children:["Template for ",(0,jsx_runtime.jsx)("samp",{children:"your-theme.css"})]}),(0,jsx_runtime.jsx)("p",{children:"If you do not (yet) want to manage your design tokens in JSON files, but when you just want to get started quickly to reuse our CSS component with your own design, then you can use this CSS template as a starting point to see what parts of the component you can customize with design tokens."}),(0,jsx_runtime.jsxs)("p",{children:["Combine the design tokens CSS with our"," ",(0,jsx_runtime.jsx)("a",{href:"https://npmjs.com/package/@utrecht/component-library-css",children:"CSS component library pacakge on npm"}),", and you should be able to quickly and easily create a web page with our components and your own design."]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CopyButton,{value:code,textContent:"Copy CSS"})}),(0,jsx_runtime.jsx)("pre",{children:code})]})};ExampleTokensCSS.displayName="ExampleTokensCSS",ExampleTokensCSS.propTypes={definition:prop_types_default().object.isRequired};var lodash_clonedeepwith=__webpack_require__("../../node_modules/.pnpm/lodash.clonedeepwith@4.5.0/node_modules/lodash.clonedeepwith/index.js"),lodash_clonedeepwith_default=__webpack_require__.n(lodash_clonedeepwith),lodash_mapvalues=__webpack_require__("../../node_modules/.pnpm/lodash.mapvalues@4.6.0/node_modules/lodash.mapvalues/index.js"),lodash_mapvalues_default=__webpack_require__.n(lodash_mapvalues),lodash_omitby=__webpack_require__("../../node_modules/.pnpm/lodash.omitby@4.6.0/node_modules/lodash.omitby/index.js"),lodash_omitby_default=__webpack_require__.n(lodash_omitby);const ExampleTokensJSON=({definition})=>{const filter=item=>lodash_isplainobject_default()(item.$extensions)||lodash_isplainobject_default()(item.$value)?{}:lodash_isplainobject_default()(item)?lodash_mapvalues_default()(lodash_omitby_default()(item,(item=>isHiddenDesignToken(item))),(item=>lodash_clonedeepwith_default()(item,filter))):void 0,tokens=lodash_clonedeepwith_default()(definition,filter),code=JSON.stringify(tokens,null,"  ");return(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsxs)("h2",{children:["Template ",(0,jsx_runtime.jsx)("samp",{children:"tokens.json"})," for your theme"]}),(0,jsx_runtime.jsxs)("p",{children:["We use the ",(0,jsx_runtime.jsx)("a",{href:"https://design-tokens.github.io/community-group/format/",children:"Design Tokens Format"})," to store our design choices in JSON files. These ",(0,jsx_runtime.jsx)("code",{children:"tokens.json"})," files are translated into other formats such as CSS and SCSS variables, so the design choices can be imported automatically into projects with varying technical stacks."]}),(0,jsx_runtime.jsx)("p",{children:"When we develop front-end components in CSS, we avoid putting design decisions in our CSS code directly. Instead we use CSS variables that reference the design tokens. This way we don't need to change the CSS components when over time we make different design decisions, we just include the latest export of the design tokens."}),(0,jsx_runtime.jsx)("p",{children:"Because our CSS components are coded in such a way that design decisions —such as fonts, colors and sizes— are stored in an optional file that you don't have to use, you can reuse our CSS components and combine them with design decisions for your own project and brand."}),(0,jsx_runtime.jsxs)("p",{children:["Copy the JSON template below if you want to reuse this component, and replace the empty placeholder object with your own code:",(0,jsx_runtime.jsx)("code",{children:'{ "value": "#123456", "comment": "my design choice" }'}),"."]}),(0,jsx_runtime.jsxs)("p",{children:["When you have a collection of design token JSON files, you can use"," ",(0,jsx_runtime.jsx)("a",{href:"https://amzn.github.io/style-dictionary/#/",children:"Style Dictionary"})," to translate them to CSS or any other format your developers need."]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CopyButton,{value:code,textContent:"Copy JSON"})}),(0,jsx_runtime.jsx)("pre",{children:code})]})};ExampleTokensJSON.displayName="ExampleTokensJSON",ExampleTokensJSON.propTypes={definition:prop_types_default().object.isRequired};const ComponentTokensSection=({component,tokens,definition})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[definition?(0,jsx_runtime.jsx)(ExampleTokensJSON,{definition}):"",definition?(0,jsx_runtime.jsx)(ExampleTokensCSS,{definition}):"",(0,jsx_runtime.jsx)(ComponentTokensTable,{component,tokens})]});ComponentTokensSection.propTypes={component:prop_types_default().string.isRequired,definition:prop_types_default().object,tokens:prop_types_default().arrayOf(prop_types_default().shape({comment:prop_types_default().string,name:prop_types_default().string,path:prop_types_default().arrayOf(prop_types_default().string),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])})).isRequired}},"../../documentation/components/DesignTokensTable.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>DesignTokensTable});var prop_types=__webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),css=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/color-sample/css/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(css.Z,options);css.Z&&css.Z.locals&&css.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ColorExample=({color})=>(0,jsx_runtime.jsx)("data",{className:"utrecht-color-sample",style:{color,outline:"1px solid silver"},value:color});ColorExample.displayName="ColorExample",ColorExample.propTypes={color:prop_types_default().string.isRequired};const visualizeToken=token=>token.$extensions&&token.$extensions["nl.nldesignsystem.css.property"]&&"<color>"===token.$extensions["nl.nldesignsystem.css.property"].syntax?(0,jsx_runtime.jsx)(ColorExample,{color:token.value}):"",DesignTokensTable=({tokens})=>(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)("h2",{children:"Theme for Gemeente Utrecht"}),(0,jsx_runtime.jsxs)("table",{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Design token name"}),(0,jsx_runtime.jsx)("th",{children:"Design token value"}),(0,jsx_runtime.jsx)("th",{}),(0,jsx_runtime.jsx)("th",{children:"Support"})]})}),(0,jsx_runtime.jsx)("tbody",{children:tokens.map((token=>{const{name,path,value}=token;return(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)("code",{children:path.join(".")})}),(0,jsx_runtime.jsx)("td",{children:value}),(0,jsx_runtime.jsx)("td",{children:visualizeToken(token)}),(0,jsx_runtime.jsx)("td",{children:token.$extensions&&!1===token.$extensions["nl.nldesignsystem.figma.supports-token"]?(0,jsx_runtime.jsx)("span",{className:"utrecht-badge-data",children:"CSS"}):"string"==typeof token.type?(0,jsx_runtime.jsxs)("div",{className:"utrecht-badge-list",children:[(0,jsx_runtime.jsx)("span",{className:"utrecht-badge-data",children:"CSS"}),(0,jsx_runtime.jsx)("span",{className:"utrecht-badge-data",children:"Figma"})]}):""})]},name)}))})]})]});DesignTokensTable.displayName="DesignTokensTable",DesignTokensTable.propTypes={tokens:prop_types_default().arrayOf(prop_types_default().shape({comment:prop_types_default().string,name:prop_types_default().string,path:prop_types_default().arrayOf(prop_types_default().string),value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number])}))}},"./stories/web-component/BreadcrumbNav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BreadcrumbNav_stories});var tokens=__webpack_require__("../../components/breadcrumb/tokens.json"),dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),util=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./stories/components/util.tsx")),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Breadcrumb=({children,items,variant})=>(0,jsx_runtime.jsx)("utrecht-breadcrumb",{json:JSON.stringify(items),variant,children});Breadcrumb.displayName="Breadcrumb";const meta={title:"Web Component/Breadcrumb navigation",id:"web-component-breadcrumb-nav",component:Breadcrumb,argTypes:{items:{description:"Menu items",type:{name:"array",required:!0}},variant:{description:"Variant",type:{name:"enum"},options:["","arrows"]}},args:{items:[],variant:""},tags:["autodocs"],parameters:{status:{type:"WORK IN PROGRESS"},tokensPrefix:"utrecht-breadcrumb",tokens:dist,tokensDefinition:tokens,docs:{description:{component:'\x3c!-- @license CC0-1.0 --\x3e\n\n# Breadcrumb navigation\n\nBreadcrumb navigation, ook wel "kruimelpad" genoemd, gebruik je als de pagina\'s van je site georganiseerd zijn in een boomstructuur. Als je site teveel pagina\'s heeft om naar elke pagina een link te maken op de homepage bijvoorbeeld. De eerste link is altijd naar de homepage.\n\nHet kruimelpad moet alleen links bevatten naar hogere niveau\'s of eerdere stappen. De pagina zelf is niet onderdeel van het kruimelpad. Gebruik geen breadcrumb navigation op de homepage, want die heeft geen hogere niveaus.\n\n## HTML\n\nGebruik een `nav` element, want het is handig dat het kruimelpad een _navigation landmark_ is. Het kruimelpad is zelden de enige _navigation landmark_ op de pagina en landmarks moeten wel duidelijk te onderscheiden zijn. Gebruik daarom `aria-label` of `aria-labelledby` met een duidelijk label.\n\nGebruik een heading element met `aria-labelledby`, zodat het label zichtbaar is wanneer de CSS niet geladen kan worden. Zonder stijl is het kruimelpad niet duidelijk herkenbaar, dan maakt de heading dat duidelijk.\n\nDe _breadcrumb navigation_ is niet een onderdeel dat opgezocht wordt via heading navigatie van een _screen reader_. Verberg de heading met `aria-hidden="true"` zodat de headings uit de main content sneller te vinden zijn.\n\nBijvoorbeeld:\n\n```html\n<nav aria-labelledby="breadcrumb-heading">\n  <h2 id="breadcrumb-heading" aria-hidden="true">Kruimelpad</h2>\n  ...kruimelpad...\n</nav>\n```\n\nGebruik `rel` om duidelijk te maken wat het doel is van de links. ([WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)). Gebruik [`rel="home"`](https://microformats.org/wiki/rel-home) voor de link naar de homepage (deze relatie is nog slechts een voorstel). Gebruik [`rel="up"`](https://microformats.org/wiki/rel-up) voor pagina\'s die één niveau hoger zijn in een hierarchie. Gebruik `rel="first"` voor de eerste pagina in een serie.\n\n## Hoe het niet moet\n\n### Navigatie in de verkeerde _landmark_\n\nPlaats het `<nav>` HTML-element met de breadcrumb navigation niet binnen de _main page content_, ofwel het `<main>` HTML-element.\n\nNiet:\n\n```html\n<main>\n  <nav class="breadcrumbs">\n    <a href="/">Home</a> /\n    <a href="/contact" aria-current="page">Contact</a>\n  </nav>\n  <h1>Contact</h1>\n</main>\n```\n\nWel:\n\n```html\n<nav class="breadcrumbs">\n  <a href="/">Home</a> /\n  <a href="/contact" aria-current="page">Contact</a>\n</nav>\n<main>\n  <h1>Contact</h1>\n</main>\n```\n\n## Related info\n\n- [Google Search Central - Advanced SEO - Breadcrumb](https://developers.google.com/search/docs/data-types/breadcrumb)\n- [Homepage Links Remain a Necessity — Nielsen Norman Group](https://www.nngroup.com/articles/homepage-links/)\n- [Breadcrumbs — Adobe Spectrum Design System](https://spectrum.adobe.com/page/breadcrumbs/)\n- [Exploring Markup for Breadcrumbs — Chris Coyier](https://css-tricks.com/markup-for-breadcrumbs/)\n\n## Relevante WCAG regels\n\n- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): gebruik het `<nav>` element voor de `navigation` landmark role.\n- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)\n- [WCAG eis 2.4.5](https://www.w3.org/TR/WCAG21/#multiple-ways)\n- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de label van de `navigation` landmark maakt duidelijk dat het om het broodkruimelpad gaat. Zie ook: [Using `aria-label` to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5).\n- [WCAG eis 2.4.8](https://www.w3.org/TR/WCAG21/#location):\n  - gebruik `<a aria-current="location">` om de huidige pagina te markeren\n  - een kruimelpad is een manier om duidelijk te maken waar de gebruiker zich bevind in de context van een site met meerdere pagina\'s.\n'}}}},BreadcrumbNav_stories=meta,Default={args:{items:[{href:"https://example.com/",title:"Home"},{href:"https://example.com/a/",title:"Wonen en leven"},{href:"https://example.com/a/b/",title:"Afval"},{href:"https://example.com/a/b/c/",title:"Kliko's",current:!0}],variant:"arrows"}},DesignTokens=(0,util.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: [{\n      href: 'https://example.com/',\n      title: 'Home'\n    }, {\n      href: 'https://example.com/a/',\n      title: 'Wonen en leven'\n    }, {\n      href: 'https://example.com/a/b/',\n      title: 'Afval'\n    }, {\n      href: 'https://example.com/a/b/c/',\n      title: \"Kliko's\",\n      current: true\n    }],\n    variant: 'arrows'\n  }\n}",...Default.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DesignTokens"]},"./stories/components/util.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>designTokenStory});var _utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../documentation/components/ComponentTokensSection.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const designTokenStory=meta=>({args:{tokens:meta.parameters.tokens,definition:meta.parameters.tokensDefinition,component:meta.parameters.tokensPrefix},parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:""}},status:null},render:({tokens,definition,component})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utrecht_documentation_components_ComponentTokensSection_jsx__WEBPACK_IMPORTED_MODULE_0__.k,{tokens,definition,component})});try{designTokenStory.displayName="designTokenStory",designTokenStory.__docgenInfo={description:"",displayName:"designTokenStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/util.tsx#designTokenStory"]={docgenInfo:designTokenStory.__docgenInfo,name:"designTokenStory",path:"stories/components/util.tsx#designTokenStory"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/color-sample/css/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utrecht-color-sample{background-color:var(--utrecht-color-sample-background-color, currentColor);block-size:var(--utrecht-color-sample-block-size, 2em);border-color:var(--utrecht-color-sample-border-color, var(--utrecht-color-sample-default-border-color));border-radius:var(--utrecht-color-sample-border-radius, 0);border-style:solid;border-width:var(--utrecht-color-sample-border-width, 0);box-sizing:border-box;display:inline-block;inline-size:var(--utrecht-color-sample-inline-size, 2em);-webkit-print-color-adjust:exact;print-color-adjust:exact}@media(forced-colors: active){.utrecht-color-sample{forced-color-adjust:none}}@media(forced-colors: active)and (prefers-color-scheme: dark){.utrecht-color-sample{--utrecht-color-sample-default-border-color: var(--utrecht-color-sample-dark-border-color, #000)}}@media(forced-colors: active)and (prefers-color-scheme: light){.utrecht-color-sample{--utrecht-color-sample-default-border-color: var(--utrecht-color-sample-light-border-color, #fff)}}","",{version:3,sources:["webpack://./../../components/color-sample/css/index.scss","webpack://./../../components/color-sample/css/_mixin.scss"],names:[],mappings:"AAQA,sBCDE,2EAAA,CACA,sDAAA,CACA,uGAAA,CACA,0DAAA,CACA,kBAAA,CACA,wDAAA,CACA,qBAAA,CACA,oBAAA,CACA,wDAAA,CACA,gCAAA,CACA,wBAAA,CAEA,8BACE,sBACE,wBAAA,CAAA,CAGJ,8DACE,sBACE,gGAAA,CAAA,CAGJ,+DACE,sBACE,iGAAA,CAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2021-2022 Gemeente Utrecht\n * Copyright (c) 2021-2022 Frameless B.V.\n */\n\n@import "./mixin";\n\n.utrecht-color-sample {\n  @include utrecht-color-sample;\n}\n',"/**\n * @license EUPL-1.2\n * Copyright (c) 2021-2022 Gemeente Utrecht\n * Copyright (c) 2021-2022 Frameless B.V.\n */\n\n@mixin utrecht-color-sample {\n  background-color: var(--utrecht-color-sample-background-color, currentColor);\n  block-size: var(--utrecht-color-sample-block-size, 2em);\n  border-color: var(--utrecht-color-sample-border-color, var(--utrecht-color-sample-default-border-color));\n  border-radius: var(--utrecht-color-sample-border-radius, 0);\n  border-style: solid;\n  border-width: var(--utrecht-color-sample-border-width, 0);\n  box-sizing: border-box;\n  display: inline-block;\n  inline-size: var(--utrecht-color-sample-inline-size, 2em);\n  -webkit-print-color-adjust: exact;\n  print-color-adjust: exact;\n\n  @media (forced-colors: active) {\n    & {\n      forced-color-adjust: none;\n    }\n  }\n  @media (forced-colors: active) and (prefers-color-scheme: dark) {\n    & {\n      --utrecht-color-sample-default-border-color: var(--utrecht-color-sample-dark-border-color, #000);\n    }\n  }\n  @media (forced-colors: active) and (prefers-color-scheme: light) {\n    & {\n      --utrecht-color-sample-default-border-color: var(--utrecht-color-sample-light-border-color, #fff);\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../components/breadcrumb/tokens.json":module=>{module.exports=JSON.parse('{"utrecht":{"breadcrumb":{"block-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"font-family":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true}}},"font-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"text-transform":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"inherit | none | uppercase","inherits":true}}},"divider":{"content":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"*","inherits":true}}},"inline-size":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}},"item":{"padding-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-inline-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}},"link":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"focus":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}}}}}')}}]);