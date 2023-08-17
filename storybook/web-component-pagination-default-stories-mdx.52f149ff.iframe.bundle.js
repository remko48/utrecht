/*! For license information please see web-component-pagination-default-stories-mdx.52f149ff.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[41297],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/web-component/pagination/default.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>default_stories,defaultStory:()=>defaultStory});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={currentIndex:{description:"Current index",type:"number"},links:{description:"Items",type:"array"},prev:{description:"Previous link",type:"object"},next:{description:"Next link",type:"object"}},defaultArgs={currentIndex:-1,links:[],next:null,prev:null},exampleArgs={currentIndex:3,distanced:!0,links:[{href:"./1",index:1,title:"Resultaat 1 tot 10"},{href:"./2",index:2,title:"Resultaat 11 tot 20"},{href:"./3",index:3,title:"Resultaat 21 tot 30"},{href:"./4",index:4,title:"Resultaat 31 tot 40"},{href:"./5",index:5,title:"Resultaat 41 tot 50"}],next:{href:"./2"},prev:{disabled:!0}},Pagination=({currentIndex=defaultArgs.currentIndex,links=defaultArgs.links,next=defaultArgs.next,prev=defaultArgs.prev})=>(0,jsx_runtime.jsx)("utrecht-pagination",{links:JSON.stringify(links),next:JSON.stringify(next),prev:JSON.stringify(prev),"current-index":currentIndex});Pagination.displayName="Pagination";const defaultStory=Pagination.bind({});defaultStory.storyName="Default",defaultStory.args=exampleArgs,defaultStory.parameters={storySource:{source:"Pagination.bind({})"}};const componentMeta={title:"Web Component/Pagination",id:"web-component-pagination",parameters:{status:{type:"WORK IN PROGRESS"}},component:Pagination,args:defaultArgs,argTypes,tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n",(0,jsx_runtime.jsx)(dist.h_,{id:"web-component-pagination",title:"Web Component/Pagination",component:Pagination,argTypes,args:defaultArgs,parameters:{status:{type:"WORK IN PROGRESS"}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"pagination-navigation",children:"Pagination navigation"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",args:exampleArgs,children:Pagination.bind({})})}),"\n",(0,jsx_runtime.jsx)(dist.$4,{story:"Default"})]})}}};const default_stories=componentMeta}}]);