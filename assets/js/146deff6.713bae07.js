"use strict";(self.webpackChunk_utrecht_docusaurus=self.webpackChunk_utrecht_docusaurus||[]).push([[789],{170:(e,a,r)=>{r.d(a,{Cd:()=>f,GS:()=>b,SC:()=>g,XJ:()=>o,Z0:()=>p,aC:()=>u,by:()=>h,iA:()=>v,k8:()=>m,nL:()=>d,nv:()=>N,pj:()=>y,xs:()=>j});var t=r(5619),s=r(6277),n=r(1104);function i(e,a){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(t=Object.getOwnPropertySymbols(e);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]])}return r}(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("article",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-article",n)},{children:r}))})).displayName="Article",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("div",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-backdrop",n)},{children:r}))})).displayName="Backdrop";var l=(0,n.forwardRef)((function(e,a){var r=e.appearance,n=e.busy,l=e.disabled,c=e.children,d=e.className,o=e.type,u=i(e,["appearance","busy","disabled","children","className","type"]);return(0,t.jsx)("button",Object.assign({},u,{ref:a,className:(0,s.Z)("utrecht-button",n&&"utrecht-button--busy",l&&"utrecht-button--disabled","submit"===o&&"utrecht-button--submit","primary-action-button"===r&&"utrecht-button--primary-action","secondary-action-button"===r&&"utrecht-button--secondary-action","subtle-button"===r&&"utrecht-button--subtle",d),"aria-busy":n||void 0,disabled:l,type:o||"button"},{children:c}))}));l.displayName="Button";var c=function(e){var a;" "===e.key&&"function"==typeof(null===(a=e.target)||void 0===a?void 0:a.click)&&(e.preventDefault(),e.target.click())};(0,n.forwardRef)((function(e,a){var r=e.appearance,n=e.children,l=e.className,d=e.external,o=e.role,u=i(e,["appearance","children","className","external","role"]),m=u;return"button"===o&&(m=Object.assign(Object.assign({},u),{onKeyDown:c})),(0,t.jsx)("a",Object.assign({},m,{ref:a,role:o,className:(0,s.Z)("utrecht-button-link","utrecht-button-link--html-a",{"utrecht-button-link--external":d,"utrecht-button-link--primary-action":"primary-action-button"===r,"utrecht-button-link--secondary-action":"secondary-action-button"===r,"utrecht-button-link--subtle":"subtle-button"===r},l),rel:d?"external noopener noreferrer":void 0},{children:n}))})).displayName="ButtonLink",(0,n.forwardRef)((function(e,a){var r=e.disabled,n=e.invalid,l=e.required,c=e.className,d=i(e,["disabled","invalid","required","className"]);return(0,t.jsx)("input",Object.assign({},d,{ref:a,type:"checkbox",className:(0,s.Z)("utrecht-checkbox","utrecht-checkbox--html-input",r&&"utrecht-checkbox--disabled",n&&"utrecht-checkbox--invalid",l&&"utrecht-checkbox--required",c),"aria-invalid":n||void 0,disabled:r,required:l}))})).displayName="Checkbox",(0,n.forwardRef)((function(e,a){var r=e.disabled,n=e.required,l=e.className,c=e.invalid,d=i(e,["disabled","required","className","invalid"]);return(0,t.jsx)("input",Object.assign({type:"radio","aria-invalid":c||void 0,disabled:r,required:n,ref:a,className:(0,s.Z)("utrecht-custom-radio-button",r&&"utrecht-custom-radio-button--disabled",c&&"utrecht-custom-radio-button--invalid",l)},d))})).displayName="CustomRadioButton",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("div",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-document",n)},{children:r}))})).displayName="Document",(0,n.forwardRef)((function(e,a){var r=e.appearance,n=e.children,l=e.className,c=i(e,["appearance","children","className"]);return(0,t.jsx)("dl",Object.assign({},c,{className:(0,s.Z)("utrecht-data-list","utrecht-data-list--html-dl","rows"===r&&"utrecht-data-list--rows",l),ref:a},{children:n}))})).displayName="DataList",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("div",Object.assign({},l,{className:(0,s.Z)("utrecht-data-list__item",n),ref:a},{children:r}))})).displayName="DataListItem",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("dt",Object.assign({},l,{className:(0,s.Z)("utrecht-data-list__item-key",n),ref:a},{children:r}))})).displayName="DataListKey",(0,n.forwardRef)((function(e,a){var r=e.value,n=e.children,i=e.className,l=e.emptyDescription,c=e.multiline,d=e.notranslate,o=""===r||null===r;return(0,t.jsx)("dd",Object.assign({className:(0,s.Z)("utrecht-data-list__item-value","utrecht-data-list__item-value--html-dd",i,c&&"utrecht-data-list__item-value--multiline"),translate:"boolean"==typeof d?d?"no":"yes":void 0,ref:a},{children:o?(0,t.jsx)("span",Object.assign({"aria-label":l},{children:"-"})):n}))})).displayName="DataListValue",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("dd",Object.assign({},l,{className:(0,s.Z)("utrecht-data-list__actions","utrecht-data-list__actions--html-dd",n),ref:a},{children:r}))})).displayName="DataListActions",(0,n.forwardRef)((function(e,a){var r=e.className,n=e.children,l=i(e,["className","children"]);return(0,t.jsx)("fieldset",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-form-fieldset","utrecht-form-fieldset--reset-fieldset",r)},{children:n}))})).displayName="Fieldset",(0,n.forwardRef)((function(e,a){var r=e.className,n=e.children,l=i(e,["className","children"]);return(0,t.jsx)("legend",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-form-fieldset__legend","utrecht-form-fieldset__legend--reset-legend",r)},{children:n}))})).displayName="FieldsetLegend",(0,n.forwardRef)((function(e,a){var r=e.className,n=e.children,l=i(e,["className","children"]);return(0,t.jsx)("div",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-form-field","utrecht-form-field--distanced",r)},{children:n}))})).displayName="FormField",(0,n.forwardRef)((function(e,a){var r=e.invalid,n=e.valid,l=e.warning,c=e.className,d=e.children,o=i(e,["invalid","valid","warning","className","children"]);return(0,t.jsx)("div",Object.assign({},o,{ref:a,className:(0,s.Z)("utrecht-form-field-description",r&&"utrecht-form-field-description--invalid",n&&"utrecht-form-field-description--valid",l&&"utrecht-form-field-description--warning",c)},{children:d}))})).displayName="FormFieldDescription",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=e.type,c=e.disabled,d=e.checked,o=i(e,["children","className","type","disabled","checked"]);return(0,t.jsx)("label",Object.assign({},o,{ref:a,className:(0,s.Z)("utrecht-form-label",l&&"utrecht-form-label--".concat(l),c&&"utrecht-form-label--disabled",d&&"utrecht-form-label--checked",n)},{children:r}))})).displayName="FormLabel",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("div",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-html",n)},{children:r}))})).displayName="HTMLContent";var d=(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("h1",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-heading-1",n)},{children:r}))}));d.displayName="Heading1";var o=(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("h2",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-heading-2",n)},{children:r}))}));o.displayName="Heading2";var u=(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("h3",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-heading-3",n)},{children:r}))}));u.displayName="Heading3";var m=(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("h4",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-heading-4",n)},{children:r}))}));m.displayName="Heading4";var h=(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("h5",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-heading-5",n)},{children:r}))}));h.displayName="Heading5";var f=(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("h6",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-heading-6",n)},{children:r}))}));f.displayName="Heading6",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=e.external,c=i(e,["children","className","external"]);return(0,t.jsx)("a",Object.assign({},c,{ref:a,className:(0,s.Z)("utrecht-link",{"utrecht-link--external":l},n),rel:l?"external noopener noreferrer":void 0},{children:r}))})).displayName="Link",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.inline,l=e.className,c=i(e,["children","inline","className"]);return(0,t.jsx)("button",Object.assign({},c,{ref:a,className:(0,s.Z)("utrecht-link-button","utrecht-link-button--html-button",{"utrecht-link-button--inline":n},l)},{children:r}))})).displayName="LinkButton",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=e.value,c=i(e,["children","className","value"]);return(0,t.jsx)("data",Object.assign({value:"string"==typeof l||"number"==typeof l?String(l):void 0},c,{ref:a,className:(0,s.Z)("utrecht-value-number",n)},{children:r}))})).displayName="NumberValue";var b=(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("ol",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-ordered-list",n)},{children:r}))}));b.displayName="OrderedList",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("li",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-ordered-list__item",n)},{children:r}))})).displayName="OrderedListItem",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("div",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-page",n)},{children:r}))})).displayName="Page",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("div",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-page-content",n)},{children:r}))})).displayName="PageContent",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("main",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-page-content__main",n)},{children:r}))})).displayName="PageContentMain",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("footer",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-page-footer",n)},{children:r}))})).displayName="PageFooter",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("header",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-page-header",n)},{children:r}))})).displayName="PageHeader";var N=(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=e.lead,c=i(e,["children","className","lead"]);return(0,t.jsx)("p",Object.assign({},c,{ref:a,className:(0,s.Z)("utrecht-paragraph",l&&"utrecht-paragraph--lead",n)},{children:r}))}));N.displayName="Paragraph",(0,n.forwardRef)((function(e,a){var r=e.invalid,n=e.className,l=i(e,["invalid","className"]);return(0,t.jsx)("input",Object.assign({},l,{ref:a,type:"radio",className:(0,s.Z)("utrecht-radio-button","utrecht-radio-button--html-input",r&&"utrecht-radio-button--invalid",n)}))})).displayName="RadioButton",(0,n.forwardRef)((function(e,a){var r=e.invalid,n=e.required,l=e.className,c=e.noscript,d=e.children,o=i(e,["invalid","required","className","noscript","children"]);return(0,t.jsx)("select",Object.assign({},o,{ref:a,"aria-invalid":r||void 0,required:!!c&&n,"aria-required":c?void 0:n,className:(0,s.Z)("utrecht-select","utrecht-select--html-select",r&&"utrecht-select--invalid",n&&"utrecht-select--required",l)},{children:d}))})).displayName="Select",(0,n.forwardRef)((function(e,a){var r=e.disabled,n=e.invalid,l=e.value,c=e.children,d=e.className,o=i(e,["disabled","invalid","value","children","className"]);return(0,t.jsx)("option",Object.assign({},o,{ref:a,disabled:r,value:l,className:(0,s.Z)("utrecht-select__option",r&&"utrecht-select__option--disabled",n&&"utrecht-select__option--invalid",d)},{children:c}))})).displayName="SelectOption";var p=(0,n.forwardRef)((function(e,a){var r=e.className;e.children;var n=i(e,["className","children"]);return(0,t.jsx)("hr",Object.assign({},n,{ref:a,className:(0,s.Z)("utrecht-separator",r)}))}));p.displayName="Separator",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("div",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-surface",n)},{children:r}))})).displayName="Surface";var v=(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("table",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-table",n)},{children:r}))}));v.displayName="Table",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("tbody",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-table__body",n)},{children:r}))})).displayName="TableBody",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("caption",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-table__caption",n)},{children:r}))})).displayName="TableCaption";var y=(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("td",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-table__cell",n)},{children:r}))}));y.displayName="TableCell",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("tfoot",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-table__footer",n)},{children:r}))})).displayName="TableFooter",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("thead",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-table__header",n)},{children:r}))})).displayName="TableHeader";var j=(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("th",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-table__header-cell",n)},{children:r}))}));j.displayName="TableHeaderCell";var g=(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("tr",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-table__row",n)},{children:r}))}));g.displayName="TableRow",(0,n.forwardRef)((function(e,a){var r=e.disabled,n=e.invalid,l=e.readOnly,c=e.required,d=e.className,o=i(e,["disabled","invalid","readOnly","required","className"]);return(0,t.jsx)("textarea",Object.assign({},o,{ref:a,className:(0,s.Z)("utrecht-textarea","utrecht-textarea--html-textarea",r&&"utrecht-textarea--disabled",n&&"utrecht-textarea--invalid",l&&"utrecht-textarea--readonly",c&&"utrecht-textarea--required",d),disabled:r,readOnly:l,required:c,"aria-invalid":n||void 0}))})).displayName="Textarea",(0,n.forwardRef)((function(e,a){var r=e.disabled,n=e.invalid,l=e.readOnly,c=e.required,d=e.className,o=e.type,u=void 0===o?"text":o,m=e.maxLength,h=e.inputMode,f=i(e,["disabled","invalid","readOnly","required","className","type","maxLength","inputMode"]);return(0,t.jsx)("input",Object.assign({},f,{ref:a,type:u,className:(0,s.Z)("utrecht-textbox","utrecht-textbox--html-input",r&&"utrecht-textbox--disabled",n&&"utrecht-textbox--invalid",l&&"utrecht-textbox--readonly",c&&"utrecht-textbox--required",d),maxLength:m,disabled:r,readOnly:l,required:c,"aria-invalid":n||void 0,inputMode:h||("number"===u?"numeric":void 0)}))})).displayName="Textbox",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("bdi",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-url",n)},{children:r}))})).displayName="URLValue",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("ul",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-unordered-list",n)},{children:r}))})).displayName="UnorderedList",(0,n.forwardRef)((function(e,a){var r=e.children,n=e.className,l=i(e,["children","className"]);return(0,t.jsx)("li",Object.assign({},l,{ref:a,className:(0,s.Z)("utrecht-unordered-list__item",n)},{children:r}))})).displayName="UnorderedListItem"},7781:(e,a,r)=>{r.d(a,{U:()=>u});var t=r(7896),s=r(876),n=r(170),i=r(2784);const l=(e,a)=>{const r=new URL(a,new URL(e,"resolve://pathname/"));if("resolve:"===r.protocol){const{pathname:r,search:t,hash:s}=new URL(a,new URL(e,"http://example.com/"));return r+t+s}return r.toString()},c={1:{},2:{h1:n.XJ,h2:n.aC,h3:n.k8,h4:n.by,h5:n.Cd},3:{h1:n.aC,h2:n.k8,h3:n.by,h4:n.Cd,h5:n.Cd},4:{h1:n.k8,h2:n.by,h3:n.Cd,h4:n.Cd,h5:n.Cd},5:{h1:n.by,h2:n.Cd,h3:n.Cd,h4:n.Cd,h5:n.Cd},6:{h1:n.Cd,h2:n.Cd,h3:n.Cd,h4:n.Cd,h5:n.Cd}},d=e=>({img:a=>{let{src:r,...s}=a;return i.createElement("img",(0,t.Z)({},s,{src:l(e,r),className:"utrecht-img utrecht-img--fit"}))}}),o=(e,a)=>{if(e){const e={...c[a-1]};return e.h1=()=>null,e}return c[a]},u=e=>{let{children:a,omitH1:r=!1,headingLevel:t=1,baseUrl:n=""}=e;return i.createElement(s.Zo,{components:{...o(r,t),...d(n)}},a)}},388:(e,a,r)=>{r.d(a,{U:()=>o});var t=r(7614),s=r(2009),n=r(1112),i=r(8873),l=r(2784);const c="story-tabs__tab_Ets0",d="story-tabs__link_j5UT",o=e=>{let{tabs:a}=e;return l.createElement(n.Z,null,a.map((e=>{let{id:a,label:r,story:n}=e;const{siteConfig:o}=(0,t.Z)(),u=o.customFields.storybookUrl,m=u+"?path=/docs/"+n,h=u+"iframe.html?id="+n+"&viewMode=docs#singleStory=true&shortcuts=false";return l.createElement(s.Z,{value:a,label:r,key:a},l.createElement("div",{className:c},l.createElement(i.Z,{src:h,style:{width:"1px",minWidth:"100%"},heightCalculationMethod:"lowestElement"}),l.createElement("a",{className:d,href:m,target:"_blank",rel:"noreferrer"},"Storybook: ",n)))})))}},7326:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var t=r(7896),s=(r(2784),r(876)),n=r(7781),i=r(388);const l={toc:[]};function c(e){let{components:a,...r}=e;return(0,s.kt)("wrapper",(0,t.Z)({},l,r,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"lijsten"},"Lijsten"))}c.isMDXComponent=!0;const d={title:"Genummerde lijst",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Genummerde lijst",sidebar_position:1,pagination_label:"Genummerde lijst",description:"Utrecht genummerde lijst component.",keywords:["ordered list","list","opsomming","lijst","lijstje","bullets","marker","list items","nested list"]},o=void 0,u={unversionedId:"componenten/data display/ordered-list",id:"componenten/data display/ordered-list",title:"Genummerde lijst",description:"Utrecht genummerde lijst component.",source:"@site/docs/componenten/data display/ordered-list.mdx",sourceDirName:"componenten/data display",slug:"/componenten/data display/ordered-list",permalink:"/utrecht/docs/componenten/data display/ordered-list",draft:!1,editUrl:"https://github.com/nl-design-system/utrecht/tree/main/documentation/docs/componenten/data display/ordered-list.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Genummerde lijst",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Genummerde lijst",sidebar_position:1,pagination_label:"Genummerde lijst",description:"Utrecht genummerde lijst component.",keywords:["ordered list","list","opsomming","lijst","lijstje","bullets","marker","list items","nested list"]},sidebar:"components",previous:{title:"Paragraaf",permalink:"/utrecht/docs/componenten/typografie/paragraaf"},next:{title:"Ongenummerde lijst",permalink:"/utrecht/docs/componenten/data display/unordered-list"}},m={},h=[],f={toc:h};function b(e){let{components:a,...r}=e;return(0,s.kt)("wrapper",(0,t.Z)({},f,r,{components:a,mdxType:"MDXLayout"}),(0,s.kt)(n.U,{headingLevel:1,mdxType:"Markdown"},(0,s.kt)(c,{mdxType:"IntroText"})),(0,s.kt)(i.U,{tabs:[{id:"html",label:"HTML",story:"html-ordered-list--default-story"},{id:"css",label:"CSS",story:"css-ordered-list--default-story"}],mdxType:"StoryTabs"}))}b.isMDXComponent=!0}}]);