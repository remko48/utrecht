/*! For license information please see 373.9aa561bd.js.LICENSE.txt */
"use strict";(self.webpackChunk_utrecht_docusaurus=self.webpackChunk_utrecht_docusaurus||[]).push([[373],{6277:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.r(t),n.d(t,{default:function(){return a}})},7320:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var l,i,c=a(e),s=1;s<arguments.length;s++){for(var u in l=Object(arguments[s]))n.call(l,u)&&(c[u]=l[u]);if(t){i=t(l);for(var d=0;d<i.length;d++)r.call(l,i[d])&&(c[i[d]]=l[i[d]])}}return c}},1837:function(e,t,n){n(7320);var r=n(2784),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),t.Fragment=o("react.fragment")}var l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,o={},s=null,u=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:s,ref:u,props:o,_owner:l.current}}t.jsx=s,t.jsxs=s},3426:function(e,t,n){var r=n(7320),a=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var l=60109,i=60110,c=60112;t.Suspense=60113;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;a=d("react.element"),o=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),l=d("react.provider"),i=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),s=d("react.memo"),u=d("react.lazy")}var m="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function b(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||p}function h(){}function g(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||p}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var y=g.prototype=new h;y.constructor=g,r(y,b.prototype),y.isPureReactComponent=!0;var E={current:null},_=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function L(e,t,n){var r,o={},l=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)_.call(t,r)&&!k.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var s=Array(c),u=0;u<c;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:a,type:e,key:l,ref:i,props:o,_owner:E.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var w=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,n,r,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case o:c=!0}}if(c)return l=l(c=e),e=""===r?"."+C(c,0):r,Array.isArray(l)?(n="",null!=e&&(n=e.replace(w,"$&/")+"/"),O(l,t,n,"",(function(e){return e}))):null!=l&&(N(l)&&(l=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,n+(!l.key||c&&c.key===l.key?"":(""+l.key).replace(w,"$&/")+"/")+e)),t.push(l)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=r+C(i=e[s],s);c+=O(i,t,n,u,l)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(i=e.next()).done;)c+=O(i=i.value,t,n,u=r+C(i,s++),l);else if("object"===i)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function x(e,t,n){if(null==e)return e;var r=[],a=0;return O(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function Z(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function j(){var e=T.current;if(null===e)throw Error(f(321));return e}var S={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:x,forEach:function(e,t,n){x(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return x(e,(function(){t++})),t},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!N(e))throw Error(f(143));return e}},t.Component=b,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S,t.cloneElement=function(e,t,n){if(null==e)throw Error(f(267,e));var o=r({},e.props),l=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=E.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)_.call(t,u)&&!k.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];o.children=s}return{$$typeof:a,type:e.type,key:l,ref:i,props:o,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=L,t.createFactory=function(e){var t=L.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=N,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:Z}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return j().useCallback(e,t)},t.useContext=function(e,t){return j().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return j().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return j().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return j().useLayoutEffect(e,t)},t.useMemo=function(e,t){return j().useMemo(e,t)},t.useReducer=function(e,t,n){return j().useReducer(e,t,n)},t.useRef=function(e){return j().useRef(e)},t.useState=function(e){return j().useState(e)},t.version="17.0.2"},2784:function(e,t,n){e.exports=n(3426)},2322:function(e,t,n){e.exports=n(1837)},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,p=m["".concat(c,".").concat(f)]||m[f]||d[f]||o;return n?r.createElement(p,l(l({ref:t},u),{},{components:n})):r.createElement(p,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3974:function(e,t,n){n.r(t),n.d(t,{default:function(){return Te}});var r=n(7294),a=n(6010),o=n(7462),l=n(5999),i=n(9960);function c(e){var t=e.permalink,n=e.title,o=e.subLabel,l=e.isNext;return r.createElement(i.Z,{className:(0,a.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&r.createElement("div",{className:"pagination-nav__sublabel"},o),r.createElement("div",{className:"pagination-nav__label"},n))}function s(e){var t=e.previous,n=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(c,(0,o.Z)({},t,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&r.createElement(c,(0,o.Z)({},n,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var u=n(2263),d=n(4663),m=n(373),f=n(5281),p=n(4477);var v={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return r.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:r.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return r.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:r.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){var t=v[e.versionMetadata.banner];return r.createElement(t,e)}function h(e){var t=e.versionLabel,n=e.to,a=e.onClick;return r.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:r.createElement("b",null,r.createElement(i.Z,{to:n,onClick:a},r.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){var t,n=e.className,o=e.versionMetadata,l=(0,u.Z)().siteConfig.title,i=(0,d.gA)({failfast:!0}).pluginId,c=(0,m.J)(i).savePreferredVersionName,s=(0,d.Jo)(i),p=s.latestDocSuggestion,v=s.latestVersionSuggestion,g=null!=p?p:(t=v).docs.find((function(e){return e.id===t.mainDocId}));return r.createElement("div",{className:(0,a.Z)(n,f.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},r.createElement("div",null,r.createElement(b,{siteTitle:l,versionMetadata:o})),r.createElement("div",{className:"margin-top--md"},r.createElement(h,{versionLabel:v.label,to:g.path,onClick:function(){return c(v.name)}})))}function y(e){var t=e.className,n=(0,p.E)();return n.banner?r.createElement(g,{className:t,versionMetadata:n}):null}function E(e){var t=e.className,n=(0,p.E)();return n.badge?r.createElement("span",{className:(0,a.Z)(t,f.k.docs.docVersionBadge,"badge badge--secondary")},r.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function _(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return r.createElement(l.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:r.createElement("b",null,r.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function k(e){var t=e.lastUpdatedBy;return r.createElement(l.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:r.createElement("b",null,t)}}," by {user}")}function L(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,a=e.lastUpdatedBy;return r.createElement("span",{className:f.k.common.lastUpdated},r.createElement(l.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?r.createElement(_,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:a?r.createElement(k,{lastUpdatedBy:a}):""}},"Last updated{atDate}{byUser}"),!1)}var N=n(3366),w="iconEdit_St0i",C=["className"];function O(e){var t=e.className,n=(0,N.Z)(e,C);return r.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.Z)(w,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function x(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:f.k.common.editThisPage},r.createElement(O,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var Z="tag_rZEr",T="tagRegular_ukED",j="tagWithCount_ymwW";function S(e){var t=e.permalink,n=e.label,o=e.count;return r.createElement(i.Z,{href:t,className:(0,a.Z)(Z,o?j:T)},n,o&&r.createElement("span",null,o))}var A="tags_PZIc",U="tag_bXIa";function P(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(A,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return r.createElement("li",{key:n,className:U},r.createElement(S,{label:t,permalink:n}))}))))}var H="lastUpdated_Xcjv";function I(e){return r.createElement("div",{className:(0,a.Z)(f.k.docs.docFooterTagsRow,"row margin-bottom--sm")},r.createElement("div",{className:"col"},r.createElement(P,e)))}function R(e){var t=e.editUrl,n=e.lastUpdatedAt,o=e.lastUpdatedBy,l=e.formattedLastUpdatedAt;return r.createElement("div",{className:(0,a.Z)(f.k.docs.docFooterEditMetaRow,"row")},r.createElement("div",{className:"col"},t&&r.createElement(x,{editUrl:t})),r.createElement("div",{className:(0,a.Z)("col",H)},(n||o)&&r.createElement(L,{lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:o})))}function M(e){var t=e.content.metadata,n=t.editUrl,o=t.lastUpdatedAt,l=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,c=t.tags,s=c.length>0,u=!!(n||o||i);return s||u?r.createElement("footer",{className:(0,a.Z)(f.k.docs.docFooter,"docusaurus-mt-lg")},s&&r.createElement(I,{tags:c}),u&&r.createElement(R,{editUrl:n,lastUpdatedAt:o,lastUpdatedBy:i,formattedLastUpdatedAt:l})):null}function B(e){var t=e.toc,n=e.className,a=e.linkClassName,o=e.isChild;return t.length?r.createElement("ul",{className:o?void 0:n},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(B,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var $=r.memo(B),D=n(6668),V=["parentIndex"];function F(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var r=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),n[e.level]=t}));var r=[];return t.forEach((function(e){var n=e.parentIndex,a=(0,N.Z)(e,V);n>=0?t[n].children.push(a):r.push(a)})),r}function q(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return t.flatMap((function(e){var t=q({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[Object.assign({},e,{children:t})]:t}))}function z(e){var t=e.getBoundingClientRect();return t.top===t.bottom?z(e.parentNode):t}function W(e,t){var n,r,a=t.anchorTopOffset,o=e.find((function(e){return z(e).top>=a}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(z(o))?o:null!=(r=e[e.indexOf(o)-1])?r:null:null!=(n=e[e.length-1])?n:null}function X(){var e=(0,r.useRef)(0),t=(0,D.L)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function J(e){var t=(0,r.useRef)(void 0),n=X();(0,r.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,a=e.linkActiveClassName,o=e.minHeadingLevel,l=e.maxHeadingLevel;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),i=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,r=[],a=t;a<=n;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),c=W(i,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(a)),e.classList.add(a),t.current=e}else e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}var G=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function Y(e){var t=e.toc,n=e.className,a=void 0===n?"table-of-contents table-of-contents__left-border":n,l=e.linkClassName,i=void 0===l?"table-of-contents__link":l,c=e.linkActiveClassName,s=void 0===c?void 0:c,u=e.minHeadingLevel,d=e.maxHeadingLevel,m=(0,N.Z)(e,G),f=(0,D.L)(),p=null!=u?u:f.tableOfContents.minHeadingLevel,v=null!=d?d:f.tableOfContents.maxHeadingLevel,b=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,r.useMemo)((function(){return q({toc:F(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:v});return J((0,r.useMemo)((function(){if(i&&s)return{linkClassName:i,linkActiveClassName:s,minHeadingLevel:p,maxHeadingLevel:v}}),[i,s,p,v])),r.createElement($,(0,o.Z)({toc:b,className:a,linkClassName:i},m))}var K="tableOfContents_FUlz",Q=["className"];function ee(e){var t=e.className,n=(0,N.Z)(e,Q);return r.createElement("div",{className:(0,a.Z)(K,"thin-scrollbar",t)},r.createElement(Y,(0,o.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var te=n(6043),ne="tocCollapsible_UQTM",re="tocCollapsibleContent_IzMJ",ae="tocCollapsibleExpanded_VkLC",oe="tocCollapsibleButton_MrK0",le="tocCollapsibleButtonExpanded_X9wH",ie=["collapsed"];function ce(e){var t=e.collapsed,n=(0,N.Z)(e,ie);return r.createElement("button",(0,o.Z)({type:"button"},n,{className:(0,a.Z)("clean-btn",oe,!t&&le,n.className)}),r.createElement(l.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}function se(e){var t=e.toc,n=e.className,o=e.minHeadingLevel,l=e.maxHeadingLevel,i=(0,te.u)({initialState:!0}),c=i.collapsed,s=i.toggleCollapsed;return r.createElement("div",{className:(0,a.Z)(ne,!c&&ae,n)},r.createElement(ce,{collapsed:c,onClick:s}),r.createElement(te.z,{lazy:!0,className:re,collapsed:c},r.createElement(Y,{toc:t,minHeadingLevel:o,maxHeadingLevel:l})))}var ue=n(2),de="docItemContainer_NEVZ",me="docItemCol_VRn9",fe="tocMobile_n2Hs",pe=n(833),ve=n(7524),be=n(3791),he=n(8596),ge={breadcrumbsContainer:"breadcrumbsContainer_AsBi",breadcrumbHomeIcon:"breadcrumbHomeIcon_GR0d"},ye=n(4996);function Ee(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function _e(e){var t=e.children,n=e.href,a="breadcrumbs__link";return e.isLast?r.createElement("span",{className:a,itemProp:"name"},t):n?r.createElement(i.Z,{className:a,href:n,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:a},t)}function ke(e){var t=e.children,n=e.active,l=e.index,i=e.addMicrodata;return r.createElement("li",(0,o.Z)({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,a.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function Le(){var e=(0,ye.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(i.Z,{"aria-label":(0,l.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,a.Z)("breadcrumbs__link",ge.breadcrumbsItemLink),href:e},r.createElement(Ee,{className:ge.breadcrumbHomeIcon})))}function Ne(){var e=(0,be.s1)(),t=(0,he.Ns)();return e?r.createElement("nav",{className:(0,a.Z)(f.k.docs.docBreadcrumbs,ge.breadcrumbsContainer),"aria-label":(0,l.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(Le,null),e.map((function(t,n){var a=n===e.length-1;return r.createElement(ke,{key:n,active:a,index:n,addMicrodata:!!t.href},r.createElement(_e,{href:t.href,isLast:a},t.label))})))):null}var we=n(3905),Ce=n(8825);function Oe(e){var t=e.children;return r.createElement(we.Zo,{components:Ce.Z},t)}function xe(e){var t,n=e.content,a=n.metadata,o=n.frontMatter,l=n.assets,i=o.keywords,c=a.description,s=a.title,u=null!=(t=l.image)?t:o.image;return r.createElement(pe.d,{title:s,description:c,keywords:i,image:u})}function Ze(e){var t=e.content,n=t.metadata,o=t.frontMatter,l=o.hide_title,i=o.hide_table_of_contents,c=o.toc_min_heading_level,u=o.toc_max_heading_level,d=n.title,m=!l&&void 0===t.contentTitle,p=(0,ve.i)(),v=!i&&t.toc&&t.toc.length>0,b=v&&("desktop"===p||"ssr"===p);return r.createElement("div",{className:"row"},r.createElement("div",{className:(0,a.Z)("col",!i&&me)},r.createElement(y,null),r.createElement("div",{className:de},r.createElement("article",null,r.createElement(Ne,null),r.createElement(E,null),v&&r.createElement(se,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:u,className:(0,a.Z)(f.k.docs.docTocMobile,fe)}),r.createElement("div",{className:(0,a.Z)(f.k.docs.docMarkdown,"markdown")},m&&r.createElement("header",null,r.createElement(ue.Z,{as:"h1"},d)),r.createElement(Oe,null,r.createElement(t,null))),r.createElement(M,e)),r.createElement(s,{previous:n.previous,next:n.next}))),b&&r.createElement("div",{className:"col col--3"},r.createElement(ee,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:u,className:f.k.docs.docTocDesktop})))}function Te(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return r.createElement(pe.FG,{className:t},r.createElement(xe,e),r.createElement(Ze,e))}},4477:function(e,t,n){n.d(t,{E:function(){return i},q:function(){return l}});var r=n(7294),a=n(1295),o=r.createContext(null);function l(e){var t=e.children,n=e.version;return r.createElement(o.Provider,{value:n},t)}function i(){var e=(0,r.useContext)(o);if(null===e)throw new a.i6("DocsVersionProvider");return e}}}]);