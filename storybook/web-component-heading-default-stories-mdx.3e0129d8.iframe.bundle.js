/*! For license information please see web-component-heading-default-stories-mdx.3e0129d8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[51546],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/web-component/heading/default.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),_story_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/web-component/heading/story-template.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const defaultStory=_story_template__WEBPACK_IMPORTED_MODULE_1__.X6.bind({});defaultStory.storyName="Default",defaultStory.args=_story_template__WEBPACK_IMPORTED_MODULE_1__.sS,defaultStory.parameters={storySource:{source:"Heading.bind({})"}};const componentMeta={title:"Web Component/Heading/Variable Heading",id:"web-component-heading",parameters:{status:{type:"BETA"}},component:_story_template__WEBPACK_IMPORTED_MODULE_1__.X6,args:_story_template__WEBPACK_IMPORTED_MODULE_1__._O,argTypes:_story_template__WEBPACK_IMPORTED_MODULE_1__.PG,tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{id:"web-component-heading",title:"Web Component/Heading/Variable Heading",component:_story_template__WEBPACK_IMPORTED_MODULE_1__.X6,argTypes:_story_template__WEBPACK_IMPORTED_MODULE_1__.PG,args:_story_template__WEBPACK_IMPORTED_MODULE_1__._O,parameters:{status:{type:"BETA"}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"variable-heading",children:"Variable Heading"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Default",args:_story_template__WEBPACK_IMPORTED_MODULE_1__.sS,children:_story_template__WEBPACK_IMPORTED_MODULE_1__.X6.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.$4,{story:"Default"})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./stories/web-component/heading/story-template.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PG:()=>argTypes,X6:()=>Heading,_O:()=>defaultArgs,sS:()=>exampleArgs});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={level:{description:"Heading level",type:{name:"number",required:!0}},textContent:{description:"Set the content of the heading",control:"text"}},defaultArgs={textContent:"",level:1},exampleArgs={level:1,textContent:"The Quick Brown Fox Jumps Over The Lazy Dog"},Heading=({level=defaultArgs.level,textContent=defaultArgs.textContent})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("utrecht-heading",{level,children:textContent})});Heading.displayName="Heading"}}]);