(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(7),i=(n(0),n(88)),a={id:"intro",title:"Introduction",sidebar_label:"Introduction",slug:"/"},c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"Honeycomb is an open source task-template repository that combines well-accepted practices and technologies from the cognitive science and web development communities to build psychophysiological tasks that are ready for deployment to different settings (desktop, or online) and support electrophysiological recordings, without significant changes to the code base.",source:"@site/docs/intro.md",slug:"/",permalink:"/honeycomb-docs/docs/",editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/intro.md",version:"current",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Project Organization",permalink:"/honeycomb-docs/docs/folders"}},s=[{value:"Flexible deployment online and in the lab",id:"flexible-deployment-online-and-in-the-lab",children:[]},{value:"Easy to install executables",id:"easy-to-install-executables",children:[]},{value:"Foundation in jsPsych",id:"foundation-in-jspsych",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Honeycomb is an open source task-template repository that combines well-accepted practices and technologies from the cognitive science and web development communities to build psychophysiological tasks that are ready for deployment to different settings (desktop, or online) and support electrophysiological recordings, without significant changes to the code base."),Object(i.b)("h3",{id:"flexible-deployment-online-and-in-the-lab"},"Flexible deployment online and in the lab"),Object(i.b)("p",null,"Honeycomb provides the ability to write one codebase and use it flexibly across settings (with guaranteed consistency in instructions, timing, etc.). The same code-base is used to maintain and deploy the identical task on Mechanical Turk, Prolific, and in research settings during concurrent electrophysiological recordings. "),Object(i.b)("h3",{id:"easy-to-install-executables"},"Easy to install executables"),Object(i.b)("p",null,"Deployment specifications are abstracted as parameters that are easy to configure, and application building is automated via GitHub actions providing continuous delivery of easy-to-download executables, easing setup burden across research sites. "),Object(i.b)("h3",{id:"foundation-in-jspsych"},"Foundation in jsPsych"),Object(i.b)("p",null,"jsPsych tasks can be converted to the Honeycomb structure to take advantage of the flexible deployment and automated GitHub Actions workflow that Honeycomb provides. "))}d.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=o,y=u["".concat(a,".").concat(b)]||u[b]||p[b]||i;return n?r.a.createElement(y,c(c({ref:t},l),{},{components:n})):r.a.createElement(y,c({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);