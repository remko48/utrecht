/*! For license information please see badge-status-css-stories-status-stories-mdx.e2b80097.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[27445],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/badge-status/css/stories/status.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{active:()=>active,danger:()=>danger,default:()=>__WEBPACK_DEFAULT_EXPORT__,error:()=>error,inactive:()=>inactive,invalid:()=>invalid,neutral:()=>neutral,safe:()=>safe,success:()=>success,valid:()=>valid,warning:()=>warning});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_story_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/badge-status/css/story-template.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../components/badge-status/css/index.scss"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const neutral=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});neutral.storyName="Neutral",neutral.args={status:"neutral",textContent:"neutral"},neutral.parameters={storySource:{source:"BadgeStatus.bind({})"}};const success=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});success.storyName="Success",success.args={status:"success",textContent:"success"},success.parameters={storySource:{source:"BadgeStatus.bind({})"}};const warning=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});warning.storyName="Warning",warning.args={status:"warning",textContent:"warning"},warning.parameters={storySource:{source:"BadgeStatus.bind({})"}};const error=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});error.storyName="Error",error.args={status:"error",textContent:"error"},error.parameters={storySource:{source:"BadgeStatus.bind({})"}};const safe=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});safe.storyName="Safe",safe.args={status:"safe",textContent:"safe"},safe.parameters={storySource:{source:"BadgeStatus.bind({})"}};const danger=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});danger.storyName="Danger",danger.args={status:"danger",textContent:"danger"},danger.parameters={storySource:{source:"BadgeStatus.bind({})"}};const active=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});active.storyName="Active",active.args={status:"active",textContent:"active"},active.parameters={storySource:{source:"BadgeStatus.bind({})"}};const inactive=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});inactive.storyName="Inactive",inactive.args={status:"inactive",textContent:"inactive"},inactive.parameters={storySource:{source:"BadgeStatus.bind({})"}};const valid=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});valid.storyName="Valid",valid.args={status:"valid",textContent:"valid"},valid.parameters={storySource:{source:"BadgeStatus.bind({})"}};const invalid=_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({});invalid.storyName="Invalid",invalid.args={status:"invalid",textContent:"invalid"},invalid.parameters={storySource:{source:"BadgeStatus.bind({})"}};const componentMeta={title:"CSS Component/Badge/Status Badge/Status",id:"css-status-badge--status",parameters:{status:{type:"WORK IN PROGRESS"}},component:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO,tags:["stories-mdx"],includeStories:["neutral","success","warning","error","safe","danger","active","inactive","valid","invalid"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",h2:"h2"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{id:"css-status-badge--status",title:"CSS Component/Badge/Status Badge/Status",component:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO,parameters:{status:{type:"WORK IN PROGRESS"}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"status-badge",children:"Status badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"neutral",children:"Neutral"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Neutral",args:{status:"neutral",textContent:"neutral"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"success",children:"Success"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Success",args:{status:"success",textContent:"success"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"warning",children:"Warning"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Warning",args:{status:"warning",textContent:"warning"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"error",children:"Error"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Error",args:{status:"error",textContent:"error"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"safe",children:"Safe"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Safe",args:{status:"safe",textContent:"safe"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"danger",children:"Danger"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Danger",args:{status:"danger",textContent:"danger"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"active",children:"Active"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Active",args:{status:"active",textContent:"active"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"inactive",children:"Inactive"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Inactive",args:{status:"inactive",textContent:"inactive"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"valid",children:"Valid"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Valid",args:{status:"valid",textContent:"valid"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"invalid-badge",children:"Invalid badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oG,{name:"Invalid",args:{status:"invalid",textContent:"invalid"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.eO.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"../../components/badge-status/css/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PG:()=>argTypes,_O:()=>defaultArgs,eO:()=>BadgeStatus,sS:()=>exampleArgs});var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const argTypes={textContent:{description:"Text content",control:"text"},status:{control:{type:"select"},description:"Status",options:["error","success","valid","invalid","active","inactive","neutral","danger","warning","safe"]}},defaultArgs={status:"neutral",textContent:""},exampleArgs={status:"neutral",textContent:"normaal"},BadgeStatus=({status=defaultArgs.status,textContent=defaultArgs.textContent})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("utrecht-badge-status",`utrecht-badge-status--${status||"neutral"}`),children:textContent});BadgeStatus.displayName="BadgeStatus"},"../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/badge-status/css/index.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utrecht-badge-status{background-color:var(--utrecht-badge-background-color, hsl(0, 0%, 0%));border-radius:var(--utrecht-badge-border-radius, 0.5ch);color:var(--utrecht-badge-color, hsl(0, 0%, 100%));display:inline-block;font-family:var(--utrecht-document-font-family, sans-serif);font-size:var(--utrecht-badge-font-size, inherit);font-style:var(--utrecht-badge-font-style, normal);font-weight:var(--utrecht-badge-font-weight, bold);line-height:var(--utrecht-badge-line-height, 1em);padding-block-end:var(--utrecht-badge-padding-block, 0.5ex);padding-block-start:var(--utrecht-badge-padding-block, 0.5ex);padding-inline-end:var(--utrecht-badge-padding-inline, 0.5ch);padding-inline-start:var(--utrecht-badge-padding-inline, 0.5ch);text-decoration:none;letter-spacing:var(--utrecht-badge-status-letter-spacing, inherit);text-transform:var(--utrecht-badge-status-text-transform, inherit)}@media screen and (-ms-high-contrast: active),screen and (forced-colors: active){.utrecht-badge-status{border-color:currentColor;border-style:solid;border-width:1px}}.utrecht-badge-status--danger{background-color:var(--utrecht-feedback-danger-fill-background-color, hsl(0, 100%, 40%));color:var(--utrecht-feedback-danger-fill-color, white)}.utrecht-badge-status--warning{background-color:var(--utrecht-feedback-warning-fill-background-color, hsl(48, 100%, 50%));color:var(--utrecht-feedback-warning-fill-color, white)}.utrecht-badge-status--safe{background-color:var(--utrecht-feedback-safe-fill-background-color, hsl(90, 30%, 50%));color:var(--utrecht-feedback-safe-fill-color, white)}.utrecht-badge-status--neutral{background-color:var(--utrecht-feedback-neutral-fill-background-color, black);color:var(--utrecht-feedback-neutral-fill-color, white)}.utrecht-badge-status--valid{background-color:var(--utrecht-feedback-valid-fill-background-color, var(--utrecht-feedback-safe-fill-background-color, hsl(90, 30%, 50%)));color:var(--utrecht-feedback-valid-fill-color, var(--utrecht-feedback-safe-fill-color, white))}.utrecht-badge-status--invalid{background-color:var(--utrecht-feedback-invalid-fill-background-color, var(--utrecht-feedback-danger-fill-background-color, hsl(39, 100%, 50%)));color:var(--utrecht-feedback-invalid-fill-color, var(--utrecht-feedback-danger-fill-color, white))}.utrecht-badge-status--error{background-color:var(--utrecht-feedback-error-fill-background-color, var(--utrecht-feedback-danger-fill-background-color, hsl(0, 100%, 30%)));color:var(--utrecht-feedback-error-fill-color, var(--utrecht-feedback-danger-fill-color, white))}.utrecht-badge-status--success{background-color:var(--utrecht-feedback-success-fill-background-color, var(--utrecht-feedback-safe-fill-background-color, hsl(90, 30%, 50%)));color:var(--utrecht-feedback-success-fill-color, var(--utrecht-feedback-safe-fill-color, white))}.utrecht-badge-status--active{background-color:var(--utrecht-feedback-active-fill-background-color, var(--utrecht-feedback-safe-fill-background-color, hsl(90, 30%, 50%)));color:var(--utrecht-feedback-active-fill-color, var(--utrecht-feedback-safe-fill-color, white))}.utrecht-badge-status--inactive{background-color:var(--utrecht-feedback-inactive-fill-background-color, var(--utrecht-feedback-danger-fill-background-color, hsl(0, 100%, 40%)));color:var(--utrecht-feedback-inactive-fill-color, var(--utrecht-feedback-danger-fill-color, white))}","",{version:3,sources:["webpack://./../../components/badge-status/css/index.scss","webpack://./../../components/badge/css/_mixin.scss"],names:[],mappings:"AAQA,sBAAA,sEAAA,CCCE,uDAAA,CACA,kDAAA,CACA,oBAAA,CACA,2DAAA,CACA,iDAAA,CACA,kDAAA,CACA,kDAAA,CACA,iDAAA,CACA,2DAAA,CACA,6DAAA,CACA,6DAAA,CACA,+DAAA,CACA,oBAAA,CDTA,kEAAA,CACA,kEAAA,CCYA,iFDjBF,sBCkBI,yBAAA,CACA,kBAAA,CAGA,gBAAA,CAAA,CDdJ,8BACE,wFAAA,CACA,sDAAA,CAGF,+BACE,0FAAA,CACA,uDAAA,CAGF,4BACE,sFAAA,CACA,oDAAA,CAGF,+BACE,6EAAA,CACA,uDAAA,CAGF,6BACE,2IAAA,CAIA,8FAAA,CAGF,+BACE,gJAAA,CAIA,kGAAA,CAGF,6BACE,6IAAA,CAIA,gGAAA,CAGF,+BACE,6IAAA,CAIA,gGAAA,CAGF,8BACE,4IAAA,CAIA,+FAAA,CAGF,gCACE,gJAAA,CAIA,mGAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2020-2022 Gemeente Utrecht\n * Copyright (c) 2020-2022 Frameless B.V.\n */\n\n@import "../../badge/css/mixin";\n\n.utrecht-badge-status {\n  @include utrecht-badge;\n  @include utrecht-badge--media-query-forced-colors;\n\n  letter-spacing: var(--utrecht-badge-status-letter-spacing, inherit);\n  text-transform: var(--utrecht-badge-status-text-transform, inherit);\n}\n\n.utrecht-badge-status--danger {\n  background-color: var(--utrecht-feedback-danger-fill-background-color, hsl(0 100% 40%));\n  color: var(--utrecht-feedback-danger-fill-color, white);\n}\n\n.utrecht-badge-status--warning {\n  background-color: var(--utrecht-feedback-warning-fill-background-color, hsl(48 100% 50%));\n  color: var(--utrecht-feedback-warning-fill-color, white);\n}\n\n.utrecht-badge-status--safe {\n  background-color: var(--utrecht-feedback-safe-fill-background-color, hsl(90 30% 50%));\n  color: var(--utrecht-feedback-safe-fill-color, white);\n}\n\n.utrecht-badge-status--neutral {\n  background-color: var(--utrecht-feedback-neutral-fill-background-color, black);\n  color: var(--utrecht-feedback-neutral-fill-color, white);\n}\n\n.utrecht-badge-status--valid {\n  background-color: var(\n    --utrecht-feedback-valid-fill-background-color,\n    var(--utrecht-feedback-safe-fill-background-color, hsl(90 30% 50%))\n  );\n  color: var(--utrecht-feedback-valid-fill-color, var(--utrecht-feedback-safe-fill-color, white));\n}\n\n.utrecht-badge-status--invalid {\n  background-color: var(\n    --utrecht-feedback-invalid-fill-background-color,\n    var(--utrecht-feedback-danger-fill-background-color, hsl(39 100% 50%))\n  );\n  color: var(--utrecht-feedback-invalid-fill-color, var(--utrecht-feedback-danger-fill-color, white));\n}\n\n.utrecht-badge-status--error {\n  background-color: var(\n    --utrecht-feedback-error-fill-background-color,\n    var(--utrecht-feedback-danger-fill-background-color, hsl(0 100% 30%))\n  );\n  color: var(--utrecht-feedback-error-fill-color, var(--utrecht-feedback-danger-fill-color, white));\n}\n\n.utrecht-badge-status--success {\n  background-color: var(\n    --utrecht-feedback-success-fill-background-color,\n    var(--utrecht-feedback-safe-fill-background-color, hsl(90 30% 50%))\n  );\n  color: var(--utrecht-feedback-success-fill-color, var(--utrecht-feedback-safe-fill-color, white));\n}\n\n.utrecht-badge-status--active {\n  background-color: var(\n    --utrecht-feedback-active-fill-background-color,\n    var(--utrecht-feedback-safe-fill-background-color, hsl(90 30% 50%))\n  );\n  color: var(--utrecht-feedback-active-fill-color, var(--utrecht-feedback-safe-fill-color, white));\n}\n\n.utrecht-badge-status--inactive {\n  background-color: var(\n    --utrecht-feedback-inactive-fill-background-color,\n    var(--utrecht-feedback-danger-fill-background-color, hsl(0 100% 40%))\n  );\n  color: var(--utrecht-feedback-inactive-fill-color, var(--utrecht-feedback-danger-fill-color, white));\n}\n',"/**\n * @license EUPL-1.2\n * Copyright (c) 2020-2022 Gemeente Utrecht\n * Copyright (c) 2020-2022 Frameless B.V.\n */\n\n@mixin utrecht-badge {\n  /* `line-height` has a default value, so `line-height` can be used on a parent element to add vertical space between badges */\n  background-color: var(--utrecht-badge-background-color, hsl(0 0% 0%));\n  border-radius: var(--utrecht-badge-border-radius, 0.5ch);\n  color: var(--utrecht-badge-color, hsl(0 0% 100%));\n  display: inline-block;\n  font-family: var(--utrecht-document-font-family, sans-serif);\n  font-size: var(--utrecht-badge-font-size, inherit);\n  font-style: var(--utrecht-badge-font-style, normal); /* no inheritance */\n  font-weight: var(--utrecht-badge-font-weight, bold); /* no inheritance */\n  line-height: var(--utrecht-badge-line-height, 1em);\n  padding-block-end: var(--utrecht-badge-padding-block, 0.5ex);\n  padding-block-start: var(--utrecht-badge-padding-block, 0.5ex);\n  padding-inline-end: var(--utrecht-badge-padding-inline, 0.5ch);\n  padding-inline-start: var(--utrecht-badge-padding-inline, 0.5ch);\n  text-decoration: none; /* no inheritance */\n}\n\n@mixin utrecht-badge--media-query-forced-colors {\n  @media screen and (-ms-high-contrast: active), screen and (forced-colors: active) {\n    border-color: currentColor;\n    border-style: solid;\n\n    /* Warning: there layout difference because of the added 1px border */\n    border-width: 1px;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../components/badge-status/css/index.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.2_webpack@5.81.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.81.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.2.2_sass@1.62.1_webpack@5.81.0/node_modules/sass-loader/dist/cjs.js!../../components/badge-status/css/index.scss"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_2_webpack_5_81_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_pnpm_css_loader_6_7_3_webpack_5_81_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_2_2_sass_1_62_1_webpack_5_81_0_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);