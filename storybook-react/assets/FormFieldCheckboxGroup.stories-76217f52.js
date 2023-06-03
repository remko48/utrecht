import{a as l,j as e}from"./jsx-runtime-91a467a5.js";import{F as h,a as N,b as V,H as q,c as t,P as $,d as B,C as H}from"./index.esm-4e479a00.js";import T from"./FormField.stories-07493d4b.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./defineProperty-a128c648.js";import"./clsx.m-1229b3e0.js";import"./chunk-PCJTTTQV-681b0990.js";import"./iframe-281c51a1.js";import"../sb-preview/runtime.mjs";import"./react-18-ff2c0a32.js";import"./index-8ce4a492.js";import"./index-5a49a6a6.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-5b183829.js";import"./index-9d29e343.js";import"./index-356e4a49.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-75a6d1a2.js";import"./util-7b298058.js";import"./index-1fc0ca9a.js";const w={...T.argTypes,headingLevel:{description:"Heading level for the label. Leave empty for a regular label.",control:{type:"select"},options:["","1","2","3","4","5","6"],table:{defaultValue:{summary:!1},category:"Story"}},name:{description:"Name attribute of the <input> elements",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},groupLabel:{description:"Label of the group",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},groupInvalidDescription:{description:"Description for an invalid group",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},groupId:{description:"ID of the group",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},groupDescription:{description:"Description of the group",type:{name:"text",required:!1},table:{category:"Story",defaultValue:{summary:""}}}},le={title:"React Component/Form Field/Checkbox group",id:"react-form-field--checkbox-group",component:h,argTypes:w,args:{groupId:"7adc261b-20ea-41b8-bc5d-8bdcad6feb91",groupLabel:"Hoe wil je dat wij contact opnemen?",options:[{id:"4e054ee1-799e-4608-9055-19d3fc0b88e9",name:"phone",value:"true",label:"Telefoon",checked:!0},{id:"238b2692-2460-4bad-93b5-b6def8c3b820",name:"email",value:"true",label:"E-mail"},{id:"6a1b86d8-f5d2-4852-9f95-b6690ac3d0e2",name:"mail",value:"true",label:"Brief"}]},render:F=>{const{groupDescription:s,groupId:o,groupInvalidDescription:p,groupLabel:c,groupName:I,headingLevel:n,invalid:_,options:D}=F,a=o&&s?`${o}-description`:void 0,d=p?`${o}-invalid-description`:void 0,k=[a,d].filter(Boolean).join(" ");return l(N,{id:o,"aria-describedby":k,invalid:_,children:[e(V,{children:n?e(q,{level:n,children:c}):c}),a?e(t,{id:a,children:s}):void 0,d?e(t,{id:d,status:"invalid",children:p}):void 0,D.map(({description:m,checked:L,id:r,invalid:u,invalidDescription:f,label:j,name:C,value:S})=>{const b=`${r}-description`,g=u?`${r}-invalid-description`:void 0;return l(h,{invalid:u,type:"checkbox",children:[e($,{className:"utrecht-form-field__label utrecht-form-field__label--checkbox",children:l(B,{type:"checkbox",htmlFor:r,children:[e(H,{className:"utrecht-form-field__input",id:r,value:S,name:C||I,defaultChecked:L,"aria-describedby":[b,g].filter(Boolean).join(" ")||void 0}),j]})}),m?e(t,{id:b,className:"utrecht-form-field__description",children:m}):void 0,f?e(t,{id:g,status:"invalid",className:"utrecht-form-field__description",children:f}):void 0]},r)})]})}},i={};var y,v,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const se=["FormFieldCheckboxGroup"];export{i as FormFieldCheckboxGroup,se as __namedExportsOrder,le as default};
//# sourceMappingURL=FormFieldCheckboxGroup.stories-76217f52.js.map
