/*! For license information please see components-Alert-stories.1435ca21.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[6211],{"./stories/components/Alert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DesignTokens:()=>DesignTokens,Error:()=>Error,Info:()=>Info,OK:()=>OK,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Alert_stories});const tokens_namespaceObject=JSON.parse('{"utrecht":{"alert":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"padding-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-inline-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"padding-inline-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-block-start":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"margin-block-end":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}},"warning":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}},"error":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}},"ok":{"background-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"border-width":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<length>","inherits":true}}}},"icon":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}},"error":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"warning":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}},"ok":{"color":{"$extensions":{"nl.nldesignsystem.css.property":{"syntax":"<color>","inherits":true}}}}}}}}');var dist=__webpack_require__("../../proprietary/design-tokens/dist/index.json"),clsx_m=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js")),jsx_runtime=(__webpack_require__("../../components/alert/css/index.scss"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const Alert=({children,icon=null,type})=>(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)("utrecht-alert",{"utrecht-alert--error":"error"===type,"utrecht-alert--info":"info"===type,"utrecht-alert--ok":"ok"===type,"utrecht-alert--warning":"warning"===type}),children:[icon&&(0,jsx_runtime.jsx)("div",{className:"utrecht-alert__icon",children:icon}),(0,jsx_runtime.jsx)("div",{className:"utrecht-alert__message",role:"alert",children})]});Alert.displayName="Alert";try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{icon:{defaultValue:{value:"null"},description:"",name:"icon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/Alert.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"stories/components/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}const Heading2=({children=null,textContent="",distanced=!1,...restProps})=>(0,jsx_runtime.jsxs)("h2",{className:(0,clsx_m.Z)("utrecht-heading-2",{"utrecht-heading-2--distanced":distanced}),...restProps,children:[children,textContent]});Heading2.displayName="Heading2";try{Heading2.displayName="Heading2",Heading2.__docgenInfo={description:"",displayName:"Heading2",props:{distanced:{defaultValue:{value:"false"},description:"",name:"distanced",required:!1,type:{name:"boolean"}},textContent:{defaultValue:{value:""},description:"",name:"textContent",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/Heading2.tsx#Heading2"]={docgenInfo:Heading2.__docgenInfo,name:"Heading2",path:"stories/components/Heading2.tsx#Heading2"})}catch(__react_docgen_typescript_loader_error){}var html_react_parser=__webpack_require__("../../node_modules/.pnpm/html-react-parser@3.0.16_react@18.2.0/node_modules/html-react-parser/index.mjs");const Paragraph=({children=null,distanced=!1,innerHTML="",lead=!1,small=!1,...restProps})=>{const content=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[children,(0,html_react_parser.ZP)(innerHTML)]});return(0,jsx_runtime.jsx)("p",{className:(0,clsx_m.Z)("utrecht-paragraph",{"utrecht-paragraph--distanced":distanced,"utrecht-paragraph--lead":lead,"utrecht-paragraph--small":small}),...restProps,children:small?(0,jsx_runtime.jsx)("small",{className:"utrecht-paragraph__small",children:content}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:content})})};Paragraph.displayName="Paragraph";try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"",displayName:"Paragraph",props:{distanced:{defaultValue:{value:"false"},description:"",name:"distanced",required:!1,type:{name:"boolean"}},lead:{defaultValue:{value:"false"},description:"",name:"lead",required:!1,type:{name:"boolean"}},small:{defaultValue:{value:"false"},description:"",name:"small",required:!1,type:{name:"boolean"}},innerHTML:{defaultValue:{value:""},description:"",name:"innerHTML",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/Paragraph.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"stories/components/Paragraph.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}var util=__webpack_require__("./stories/components/util.tsx");const meta={title:"CSS Component/Alert",id:"css-alert",component:Alert,argTypes:{children:{description:"HTML content of the alert"},type:{description:"Type",control:{type:"select"},options:["","error","info","ok","warning"]}},args:{children:[(0,jsx_runtime.jsx)(Heading2,{children:"Lorem ipsum"}),(0,jsx_runtime.jsx)(Paragraph,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]},tags:["autodocs"],parameters:{status:{type:"ALPHA"},tokensPrefix:"utrecht-alert",tokens:dist,tokensDefinition:tokens_namespaceObject,docs:{description:{component:'\x3c!-- @license CC0-1.0 --\x3e\n\n# Alert\n\nDe _alert component_ is er voor berichten die de gebruiker snel moet weten, omdat ze belangrijk zijn voor het uitvoeren van de huidige taak. De alert is alleen voor eenvoudige berichten. Gebruik in de alert geen buttons, geen formulier-componenten en geen complexe opmaak zoals tabellen.\n\nLet op: de alert component gebruiken kan essentieël zijn voor gebruikers van een schermvoorlezer, maar onjuist gebruik kan heel erg vervelend zijn.\n\nGebruik niet een alert voor een algemene aankondiging die op meerdere pagina\'s staat, als het niet per se relevant is voor de huidige taak van de bezoeker. De alert wordt door schermvoorlezers als eerste voorgelezen op elke pagina waar de alert staat, het kan lastig zijn de website te gebruiken als de schermlezer elke keer wordt geblokkeerd met steeds dezelfde melding. Gebruik in die situaties de notification banner component.\n\n## Componenten die lijken op alert\n\n- de _alert_: wordt zo snel mogelijk aangekondigd.\n- de _notification banner_: wordt ook snel aangekondigd, omdat het één van eerste onderdelen van de pagina is als je de banner plaatst aan het begin van de page header. Je kunt de banner overslaan een _skip link_.\n- de _error appearance_ van de _form field description_: voor feedback in een formulier die hoort bij een form control. Wordt aangekondigd door schermlezers wanneer de form control focus heeft.\n\n## Tekst\n\nSchrijf een bericht voor de alert die ook duidelijk is als de gebruiker geen icoon of signaalkleur ziet.\n\nLet op: als de tekst met een script aangepast wordt dan wordt de alert in zijn geheel nogmaals voorgelezen door een schermvoorlezer. Een tekst met een veranderend onderdeel zoals "Over 14 minuten en 59 seconden verloopt je sessie.", heeft als effect dat de schermlezer alleen nog de alert voorleest en de pagina verder onbruikbaar is.\n\n## HTML\n\nHet belangrijkste onderdeel van de alert is het bericht, plaats die in een `<div role="alert">`.\n\nGebruik bij voorkeur een _paragraph component_ voor de inhoud van het bericht, voor een goede `font-size` en `line-height` en zodat de alert `margin` heeft wanneer de CSS niet geladen kan worden.\n\nAls je wel een button gebruikt (bijvoorbeeld om de alert te verbergen), plaats die dan nooit binnen het element met `role="alert"`, maar daarbuiten.\n\n```html\n<div class="utrecht-alert">\n  <div class="utrecht-alert__icon">\n    \x3c!-- optioneel: een icon --\x3e\n  </div>\n  <div class="utrecht-alert__message" role="alert">\n    \x3c!-- het bericht, bijvoorbeeld: --\x3e\n    <p class="utrecht-paragraph">Let op: er is nu een storing waardoor...</p>\n  </div>\n  \x3c!-- optioneel en nog niet ondersteund: een button, buiten het bericht --\x3e\n</div>\n```\n\n## Relevante WCAG eisen\n\n- [WCAG eis 1.1.1](https://www.w3.org/TR/WCAG21/#non-text-content): als de alert een icoon gebruikt met een bepaalde betekenis, moet de betekenis ook uit de tekst blijken.\n- [WCAG eis 1.4.1](https://www.w3.org/TR/WCAG21/#use-of-color): als de alert een signaalkleur gebruikt moet de tekst datzelfde ook duidelijk maken, bijvoorbeeld met signaalwoorden. Gebruik bijvoorbeeld "Let op:" voor een waarschuwing.\n- [WCAG eis 2.2.1](https://www.w3.org/TR/WCAG21/#timing-adjustable): laat de alert niet automatisch verdwijnen na een bepaalde tijd (lees de WCAG specificatie voor enkele uitzonderingen).\n'}}}},Alert_stories=meta,Default={},Info={args:{type:"info"}},OK={args:{type:"ok"}},Warning={args:{type:"warning"}},Error={args:{type:"error"}},DesignTokens=(0,util.$)(meta);Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'info'\n  }\n}",...Info.parameters?.docs?.source}}},OK.parameters={...OK.parameters,docs:{...OK.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'ok'\n  }\n}",...OK.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'warning'\n  }\n}",...Warning.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'error'\n  }\n}",...Error.parameters?.docs?.source}}},DesignTokens.parameters={...DesignTokens.parameters,docs:{...DesignTokens.parameters?.docs,source:{originalSource:"designTokenStory(meta)",...DesignTokens.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Info","OK","Warning","Error","DesignTokens"]}}]);