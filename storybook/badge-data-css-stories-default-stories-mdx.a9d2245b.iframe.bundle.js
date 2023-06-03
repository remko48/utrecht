/*! For license information please see badge-data-css-stories-default-stories-mdx.a9d2245b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[33500],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/badge-data/css/stories/default.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>default_stories,defaultStory:()=>defaultStory});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),story_template=__webpack_require__("../../components/badge-data/css/story-template.jsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),css=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/badge-data/css/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(css.Z,options);css.Z&&css.Z.locals&&css.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const defaultStory=story_template.sy.bind({});defaultStory.storyName="Default",defaultStory.args=story_template.sS,defaultStory.parameters={storySource:{source:"BadgeData.bind({})"}};const componentMeta={title:"CSS Component/Badge/Data Badge",id:"css-data-badge",parameters:{status:{type:"WORK IN PROGRESS"}},component:story_template.sy,args:story_template._O,argTypes:story_template.PG,tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n",(0,jsx_runtime.jsx)(dist.h_,{id:"css-data-badge",title:"CSS Component/Badge/Data Badge",component:story_template.sy,argTypes:story_template.PG,args:story_template._O,parameters:{status:{type:"WORK IN PROGRESS"}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"data-badge",children:"Data badge"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Styling via the ",(0,jsx_runtime.jsx)(_components.code,{children:".utrecht-badge-data"})," class name:"]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",args:story_template.sS,children:story_template.sy.bind({})})}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"Default"})]})}}};const default_stories=componentMeta},"../../components/badge-data/css/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PG:()=>argTypes,_O:()=>defaultArgs,sS:()=>exampleArgs,sy:()=>BadgeData});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={textContent:{description:"Text content",control:"text"}},defaultArgs={textContent:""},exampleArgs={textContent:"Festivals"},BadgeData=({children,textContent=defaultArgs.textContent})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span",{className:"utrecht-badge-data",children:[textContent,children]});BadgeData.displayName="BadgeData"},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/badge-data/css/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utrecht-badge-data{background-color:var(--utrecht-badge-background-color, hsl(0, 0%, 0%));border-radius:var(--utrecht-badge-border-radius, 0.5ch);color:var(--utrecht-badge-color, hsl(0, 0%, 100%));display:inline-block;font-family:var(--utrecht-document-font-family, sans-serif);font-size:var(--utrecht-badge-font-size, inherit);font-style:var(--utrecht-badge-font-style, normal);font-weight:var(--utrecht-badge-font-weight, bold);line-height:var(--utrecht-badge-line-height, 1em);padding-block-end:var(--utrecht-badge-padding-block, 0.5ex);padding-block-start:var(--utrecht-badge-padding-block, 0.5ex);padding-inline-end:var(--utrecht-badge-padding-inline, 0.5ch);padding-inline-start:var(--utrecht-badge-padding-inline, 0.5ch);text-decoration:none;letter-spacing:var(--utrecht-badge-data-letter-spacing, inherit);text-transform:var(--utrecht-badge-data-text-transform, inherit)}@media screen and (-ms-high-contrast: active),screen and (forced-colors: active){.utrecht-badge-data{border-color:currentColor;border-style:solid;border-width:1px}}","",{version:3,sources:["webpack://./../../components/badge-data/css/index.scss","webpack://./../../components/badge/css/_mixin.scss","webpack://./../../components/badge-data/css/_mixin.scss"],names:[],mappings:"AAQA,oBAAA,sEAAA,CCCE,uDAAA,CACA,kDAAA,CACA,oBAAA,CACA,2DAAA,CACA,iDAAA,CACA,kDAAA,CACA,kDAAA,CACA,iDAAA,CACA,2DAAA,CACA,6DAAA,CACA,6DAAA,CACA,+DAAA,CACA,oBAAA,CCTA,gEAAA,CACA,gEAAA,CDYA,iFDjBF,oBCkBI,yBAAA,CACA,kBAAA,CAGA,gBAAA,CAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2020-2022 Gemeente Utrecht\n * Copyright (c) 2020-2022 Frameless B.V.\n */\n\n@import "./mixin";\n\n.utrecht-badge-data {\n  @include utrecht-badge-data;\n}\n',"/**\n * @license EUPL-1.2\n * Copyright (c) 2020-2022 Gemeente Utrecht\n * Copyright (c) 2020-2022 Frameless B.V.\n */\n\n@mixin utrecht-badge {\n  /* `line-height` has a default value, so `line-height` can be used on a parent element to add vertical space between badges */\n  background-color: var(--utrecht-badge-background-color, hsl(0 0% 0%));\n  border-radius: var(--utrecht-badge-border-radius, 0.5ch);\n  color: var(--utrecht-badge-color, hsl(0 0% 100%));\n  display: inline-block;\n  font-family: var(--utrecht-document-font-family, sans-serif);\n  font-size: var(--utrecht-badge-font-size, inherit);\n  font-style: var(--utrecht-badge-font-style, normal); /* no inheritance */\n  font-weight: var(--utrecht-badge-font-weight, bold); /* no inheritance */\n  line-height: var(--utrecht-badge-line-height, 1em);\n  padding-block-end: var(--utrecht-badge-padding-block, 0.5ex);\n  padding-block-start: var(--utrecht-badge-padding-block, 0.5ex);\n  padding-inline-end: var(--utrecht-badge-padding-inline, 0.5ch);\n  padding-inline-start: var(--utrecht-badge-padding-inline, 0.5ch);\n  text-decoration: none; /* no inheritance */\n}\n\n@mixin utrecht-badge--media-query-forced-colors {\n  @media screen and (-ms-high-contrast: active), screen and (forced-colors: active) {\n    border-color: currentColor;\n    border-style: solid;\n\n    /* Warning: there layout difference because of the added 1px border */\n    border-width: 1px;\n  }\n}\n",'/**\n * @license EUPL-1.2\n * Copyright (c) 2020-2022 Gemeente Utrecht\n * Copyright (c) 2020-2022 Frameless B.V.\n */\n\n@import "../../badge/css/mixin";\n\n@mixin utrecht-badge-data {\n  @include utrecht-badge;\n  @include utrecht-badge--media-query-forced-colors;\n\n  letter-spacing: var(--utrecht-badge-data-letter-spacing, inherit);\n  text-transform: var(--utrecht-badge-data-text-transform, inherit);\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);