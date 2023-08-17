/*! For license information please see web-component-icon-readme-stories-mdx.4550adfd.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[55366],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/web-component/icon/readme.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>readme_stories,removeMarkdownH1:()=>removeMarkdownH1});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),READMEraw=__webpack_require__("../../components/icon/README.md?raw");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const removeMarkdownH1=markdown=>markdown.replace(/(^|\n)#\s.+/,"");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Web Component/Icon/README",id:"web-component-icon",parameters:{status:{type:"WORK IN PROGRESS"}},tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n","\n",(0,jsx_runtime.jsx)(dist.h_,{id:"web-component-icon",title:"Web Component/Icon/README",parameters:{status:{type:"WORK IN PROGRESS"}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"iconen",children:"Iconen"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:removeMarkdownH1("\x3c!-- @license CC0-1.0 --\x3e\n\n\x3c!-- markdownlint-disable first-line-h1 --\x3e\n\n## Design\n\n[Figma - Utrecht Design System - Icons](https://www.figma.com/file/msb3CfQBefPoruqNQ968Zh/Utrecht-Design-System?node-id=69%3A855)\n")}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:removeMarkdownH1(READMEraw)})]})}}};const readme_stories=componentMeta},"../../components/icon/README.md?raw":module=>{module.exports="\x3c!-- @license CC0-1.0 --\x3e\n\n# Iconen in code\n\n## Iconen gebruiken als Custom Element\n\nEén van de makkelijkste manieren om iconen te gebruiken is door ze te includen in de web component library, zodat je ze als custom element kan gebruiken. Elk icoon is beschikbaar als custom element. De naam van van het icoon (`utrecht-icon-...`) is ook de naam van het custom-element. Voorbeeld:\n\n```html\n<div>\n  <utrecht-icon-loupe></utrecht-icon-loupe>\n</div>\n```\n\nVerander de kleur van het icoon via de CSS-eigenschap `color` op een parent element of via de custom eigenschap `--utrecht-icon-color`.\n\n### `color` van de omgevings content\n\nOp onderstaande manier kan je het makkelijkst de kleur aanpassen. De kleur van de bestaande tekst zal ook op het icoon toegepast worden.\n\n```html\n<button>\n  <utrecht-icon-loupe></utrecht-icon-loupe>\n  Search\n</button>\n\n<style>\n  button {\n    background-color: rgb(0, 0, 0);\n    color: rgb(255, 255, 255);\n  }\n</style>\n```\n\n### `--utrecht-icon-color` als custom icoon kleur\n\nDeze manier is handig als je een klein verschil wilt aanbrengen tussen de tekst kleur en de kleur van het icoon. Het gebruikt een CSS custom property `--utrecht-icon-color` als de kleur van het icoon.\n\n```html\n<button>\n  <utrecht-icon-loupe></utrecht-icon-loupe>\n  Search\n</button>\n\n<style>\n  button {\n    --utrecht-icon-color: rgba(255, 255, 255, 0.75);\n    background-color: rgb(0, 0, 0);\n    color: rgb(255, 255, 255);\n  }\n</style>\n```\n\n### Icoon grootte aanpassen\n\nDe grootte van het icoon kan aangepast worden met de `--utrecht-icon-size` CSS eigenschap:\n\n```html\n<button>\n  <utrecht-icon-loupe></utrecht-icon-loupe>\n  Search\n</button>\n\n<style>\n  button {\n    --utrecht-icon-size: 42px;\n    background-color: rgb(0, 0, 0);\n    color: rgb(255, 255, 255);\n  }\n</style>\n```\n\n## Overzicht van icons\n\nWanneer het nodig is een overzicht te hebben van de beschikbare icons, gebruik dan als basis de meegeleverde JSON informatie in `dist/index.json`. Het bevat een array met onder andere de ID van elke icoon. Op dit moment is de naam van de custom element altijd gelijk aan de ID.\n"}}]);