/*! For license information please see page-content-css-stories-with-aside-stories-mdx.5d6b65eb.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[84545],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/page-content/css/stories/with-aside.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,withAside:()=>withAside});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_story_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/page-content/css/story-template.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../components/page-content/css/index.scss"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const withAside=_story_template__WEBPACK_IMPORTED_MODULE_1__.JH.bind({});withAside.storyName="With Aside",withAside.args={..._story_template__WEBPACK_IMPORTED_MODULE_1__.sS,asideHTML:"<h2>Related pages</h2>"},withAside.parameters={storySource:{source:"PageContent.bind({})"}};const componentMeta={title:"CSS Component/Page Content/With Aside",id:"css-page-content--aside",parameters:{status:"WORK IN PROGRESS"},component:_story_template__WEBPACK_IMPORTED_MODULE_1__.JH,tags:["stories-mdx"],includeStories:["withAside"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{id:"css-page-content--aside",title:"CSS Component/Page Content/With Aside",component:_story_template__WEBPACK_IMPORTED_MODULE_1__.JH,parameters:{status:"WORK IN PROGRESS"}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"page-content-with-aside",children:"Page Content with aside"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"With Aside",args:{..._story_template__WEBPACK_IMPORTED_MODULE_1__.sS,asideHTML:"<h2>Related pages</h2>"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.JH.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"../../components/page-content/css/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aG:()=>Breadcrumb,JH:()=>PageContent,PG:()=>argTypes,Ut:()=>breadcrumbArgs,_O:()=>defaultArgs,sS:()=>exampleArgs});var clsx_m=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),html_react_parser=__webpack_require__("../../node_modules/.pnpm/html-react-parser@3.0.16_react@18.2.0/node_modules/html-react-parser/index.mjs");__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={asideHTML:{description:"Aside HTML content",control:"text"},navHTML:{description:"Navigation HTML content",control:"text"},innerHTML:{description:"HTML content",control:"text"}},breadcrumbArgs={label:"kruimelpad",items:[{href:"https://example.com/",title:"Home",rel:"home",focus:!0},{href:"https://example.com/a/",title:"Wonen en leven"},{href:"https://example.com/a/b/",title:"Afval",rel:"up"}],variant:"arrows"},defaultArgs={asideHTML:"",innerHTML:"",navHTML:""},exampleArgs={innerHTML:"<h1>The Quick Brown Fox Jumps Over The Lazy Dog</h1>"},PageContent=({asideHTML=defaultArgs.asideHTML,innerHTML=defaultArgs.innerHTML,navHTML=defaultArgs.navHTML})=>(0,jsx_runtime.jsxs)("div",{className:"utrecht-page-content",children:[navHTML&&(0,jsx_runtime.jsx)("nav",{className:"utrecht-page-content__nav",children:(0,html_react_parser.ZP)(navHTML)}),innerHTML&&(0,jsx_runtime.jsx)("main",{className:"utrecht-page-content__main",children:(0,html_react_parser.ZP)(innerHTML)}),asideHTML&&(0,jsx_runtime.jsx)("aside",{className:"utrecht-page-content__aside",children:(0,html_react_parser.ZP)(asideHTML)})]});PageContent.displayName="PageContent";const Breadcrumb=({label=breadcrumbArgs.label,items=breadcrumbArgs.items,variant=breadcrumbArgs.variant})=>(0,jsx_runtime.jsxs)("nav",{className:(0,clsx_m.Z)("utrecht-breadcrumb","arrows"===variant&&"utrecht-breadcrumb--arrows"),"aria-labelledby":"breadcrumb-heading",children:[(0,jsx_runtime.jsx)("h2",{className:"utrecht-breadcrumb__heading",id:"breadcrumb-heading","aria-hidden":"true",children:label}),(0,jsx_runtime.jsx)("ol",{className:"utrecht-breadcrumb__list",itemScope:null,itemType:null,children:items.map((({href,title,rel,current,focus})=>(0,jsx_runtime.jsx)("li",{className:"utrecht-breadcrumb__item",itemScope:null,itemType:null,itemProp:null,children:(0,jsx_runtime.jsx)("a",{className:(0,clsx_m.Z)("utrecht-breadcrumb__link",focus&&"utrecht-breadcrumb__link--focus","utrecht-link",current&&"utrecht-link--current",focus&&"utrecht-link--focus"),href,rel,"aria-current":current&&"location",itemProp:null,children:(0,jsx_runtime.jsx)("span",{className:"utrecht-breadcrumb__text",itemProp:null,children:title})})},href)))})]});Breadcrumb.displayName="Breadcrumb"},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/page-content/css/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utrecht-page-content{padding-block-end:var(--utrecht-page-content-padding-block-end);padding-block-start:var(--utrecht-page-content-padding-block-start);padding-inline-end:var(--utrecht-page-padding-inline-end);padding-inline-start:var(--utrecht-page-padding-inline-start)}.utrecht-page-content__main{grid-area:main}.utrecht-page-content__aside{grid-area:aside}","",{version:3,sources:["webpack://./../../components/page-content/css/index.scss","webpack://./../../components/page-content/css/_mixin.scss"],names:[],mappings:"AAQA,sBCDE,+DAAA,CACA,mEAAA,CACA,yDAAA,CACA,6DAAA,CDEF,4BCEE,cAAA,CDEF,6BCEE,eAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Gemeente Utrecht\n * Copyright (c) 2021 Robbert Broersma\n */\n\n@import "./mixin";\n\n.utrecht-page-content {\n  @include utrecht-page-content;\n}\n\n.utrecht-page-content__main {\n  @include utrecht-page-content__main;\n}\n\n.utrecht-page-content__aside {\n  @include utrecht-page-content__aside;\n}\n',"/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Gemeente Utrecht\n * Copyright (c) 2021 Robbert Broersma\n */\n\n@mixin utrecht-page-content {\n  padding-block-end: var(--utrecht-page-content-padding-block-end);\n  padding-block-start: var(--utrecht-page-content-padding-block-start);\n  padding-inline-end: var(--utrecht-page-padding-inline-end);\n  padding-inline-start: var(--utrecht-page-padding-inline-start);\n}\n\n@mixin utrecht-page-content__main {\n  grid-area: main;\n}\n\n@mixin utrecht-page-content__aside {\n  grid-area: aside;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../components/page-content/css/index.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/page-content/css/index.scss"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);