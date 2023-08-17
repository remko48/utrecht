/*! For license information please see surface-css-stories-readme-stories-mdx.b759ab69.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[47822],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/surface/css/stories/readme.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>readme_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.7_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),design_tokens_dist=__webpack_require__("../../proprietary/design-tokens/dist/index.mjs");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"CSS Component/Surface/README",id:"css-surface--readme",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n",(0,jsx_runtime.jsx)(dist.h_,{id:"css-surface--readme",title:"CSS Component/Surface/README"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:"\x3c!-- @license CC0-1.0 --\x3e\n\n# Surface component\n\nThe surface component can be used to style the background color of the entire viewport.\n\nThe CSS class name is `utrecht-surface`.\n"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"theme-color",children:"Theme color"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To make the browser user interface match your websites surface background color, you can include the following code in the ",(0,jsx_runtime.jsx)(_components.code,{children:"<head>"})," element of your pages:"]}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{language:"html",code:`<meta name="theme-color" content="${design_tokens_dist.E4D}">`}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"For projects that use JSX and React, the following code sample shows how to refer to the design token package to automatically use the most recent choice of color."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import { utrechtSurfaceBackgroundColor } from "@utrecht/design-tokens/dist/index.mjs";\n\nexport const ThemeColor = () => <meta name="theme-color" content={utrechtSurfaceBackgroundColor} />;\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["See for more information: ",(0,jsx_runtime.jsxs)(_components.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color",target:"_blank",rel:"nofollow noopener noreferrer",children:[(0,jsx_runtime.jsx)(_components.code,{children:"theme-color"})," on MDN"]})]})]})}}};const readme_stories=componentMeta}}]);