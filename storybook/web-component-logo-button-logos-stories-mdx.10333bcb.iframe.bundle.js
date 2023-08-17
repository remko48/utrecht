/*! For license information please see web-component-logo-button-logos-stories-mdx.10333bcb.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[15177],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/web-component/logo-button/logos.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,digid:()=>digid,eherkenning:()=>eherkenning,eidas:()=>eidas});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_story_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/web-component/logo-button/story-template.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const digid=_story_template__WEBPACK_IMPORTED_MODULE_1__.Xb.bind({});digid.storyName="Digid",digid.parameters={storySource:{source:"LogoButton.bind({})"}};const eherkenning=_story_template__WEBPACK_IMPORTED_MODULE_1__.Xb.bind({});eherkenning.storyName="eherkenning",eherkenning.args={logo:"eherkenning"},eherkenning.parameters={storySource:{source:"LogoButton.bind({})"}};const eidas=_story_template__WEBPACK_IMPORTED_MODULE_1__.Xb.bind({});eidas.storyName="eidas",eidas.args={logo:"eidas"},eidas.parameters={storySource:{source:"LogoButton.bind({})"}};const componentMeta={title:"Web Component/Logo Button/Logos",id:"web-component-logo-button",parameters:{status:{type:"WORK IN PROGRESS"}},component:_story_template__WEBPACK_IMPORTED_MODULE_1__.Xb,args:_story_template__WEBPACK_IMPORTED_MODULE_1__._O,argTypes:_story_template__WEBPACK_IMPORTED_MODULE_1__.PG,tags:["stories-mdx"],includeStories:["digid","eherkenning","eidas"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Web Component/Logo Button/Logos",id:"web-component-logo-button",component:_story_template__WEBPACK_IMPORTED_MODULE_1__.Xb,args:_story_template__WEBPACK_IMPORTED_MODULE_1__._O,argTypes:_story_template__WEBPACK_IMPORTED_MODULE_1__.PG,parameters:{status:{type:"WORK IN PROGRESS"}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"digid-logo-button",children:"DigiD Logo Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Digid",children:_story_template__WEBPACK_IMPORTED_MODULE_1__.Xb.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"eherkenning-logo-button",children:"Eherkenning Logo Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"eherkenning",args:{logo:"eherkenning"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.Xb.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"eidas-logo-button",children:"Eidas Logo Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"eidas",args:{logo:"eidas"},children:_story_template__WEBPACK_IMPORTED_MODULE_1__.Xb.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./stories/web-component/logo-button/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PG:()=>argTypes,Xb:()=>LogoButton,_O:()=>defaultArgs});var html_react_parser__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/html-react-parser@3.0.16_react@18.2.0/node_modules/html-react-parser/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const defaultArgs={logo:"digid",label:"Inloggen",appearance:"primary-action-button"},argTypes={logo:{name:"logo",control:"select",options:["digid","eherkenning","eidas"],table:{category:"DEMO",defaultValue:{summary:void 0}}},appearance:{name:"appearance",control:"select",options:["primary-action-button","secondary-action-button","subtle-button"],table:{category:"DEMO",defaultValue:{summary:void 0}}},label:{name:"label",type:{name:"string",required:!1},table:{category:"DEMO",defaultValue:{summary:""}}}},LogoButton=({logo,label,appearance})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("utrecht-logo-button",{children:[(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(`<utrecht-${logo}-logo></utrecht-${logo}-logo>`),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("utrecht-button",{appearance,children:[label," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("utrecht-icon-arrow",{})]})]});LogoButton.displayName="LogoButton"}}]);