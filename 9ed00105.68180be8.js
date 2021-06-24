(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{101:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return u}));var n=i(0),a=i.n(n);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var b=a.a.createContext({}),c=function(e){var t=a.a.useContext(b),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=c(i),d=n,u=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return i?a.a.createElement(u,o(o({ref:t},b),{},{components:i})):a.a.createElement(u,o({ref:t},b))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<r;b++)l[b]=i[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},88:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return o})),i.d(t,"toc",(function(){return s})),i.d(t,"default",(function(){return c}));var n=i(3),a=i(7),r=(i(0),i(101)),l={id:"configuration",title:"Configuration"},o={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"Environment Variables",source:"@site/docs/configuration.md",slug:"/configuration",permalink:"/honeycomb-docs/docs/configuration",editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/docs/configuration.md",version:"current",lastUpdatedAt:1624559271,sidebar:"someSidebar",previous:{title:"Automated Builds",permalink:"/honeycomb-docs/docs/ci"},next:{title:"Set up event triggers",permalink:"/honeycomb-docs/docs/event_triggers"}},s=[{value:"Environment Variables",id:"environment-variables",children:[]}],b={toc:s};function c(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"Honeycomb uses environment variables during build and run time to control the different configurations. Below we list the  environment variables used by the app and indicate whether they are mandatory, optional and needed during build (",Object(r.b)("inlineCode",{parentName:"p"},"npm build"),") or run time (using the application executable or ",Object(r.b)("inlineCode",{parentName:"p"},"npm run dev"),")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ELECTRON_START_URL")," ",Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-string-grey",alt:"string"}),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-optional-yellow",alt:"optional"}),": URL (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"http://localhost:3000"),") where the front end of the app is being hosted - also used in ",Object(r.b)("inlineCode",{parentName:"li"},"electron.js")," to indicate the app is running in dev mode."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"EVENT_MARKER_PRODUCT_ID"),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-string-grey",alt:"string"}),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-optional-yellow",alt:"optional"}),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-runtime-purple",alt:"runtime"}),": The product ID of the event marker (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"0487"),").  If not set, it will use the ",Object(r.b)("inlineCode",{parentName:"li"},"productID")," set in ",Object(r.b)("inlineCode",{parentName:"li"},"public/config/trigger.js")," if available, or attempt to connect using the com name."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"EVENT_MARKER_COM_NAME")," ",Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-string-grey",alt:"string"}),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-optional-yellow",alt:"optional"}),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-runtime-purple",alt:"runtime"}),": The com name of the event marker (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"COM3"),"). If not set, it will use the ",Object(r.b)("inlineCode",{parentName:"li"},"comName")," set in ",Object(r.b)("inlineCode",{parentName:"li"},"public/config/trigger.js"),".  If the ",Object(r.b)("inlineCode",{parentName:"li"},"productID")," is set (not an empty string), this field will be ignored."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"REACT_APP_VOLUME"),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-boolean-lightgrey",alt:"boolean"}),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/default-false-yellow",alt:"default false"}),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-buildtime-blue",alt:"buildtime"}),": whether the participant is being asked to adjust volume. This can be used on both the desktop (electron) and online settings."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"REACT_APP_VIDEO"),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-boolean-lightgrey",alt:"boolean"}),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/default-false-yellow",alt:"default false"}),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-buildtime-blue",alt:"buildtime"}),": whether the participant is being video recorded. This can be used when the task is running as a desktop app (electron). "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"REACT_APP_USE_EEG"),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-boolean-lightgrey",alt:"boolean"}),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/default-false-yellow",alt:"default false"}),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-buildtime-blue",alt:"buildtime"}),": whether the event marker/EEG is available. This can be used when the task is running as a desktop app (electron)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"REACT_APP_USE_PHOTODIODE"),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-boolean-lightgrey",alt:"boolean"}),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/default-false-yellow",alt:"default false"}),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-buildtime-blue",alt:"buildtime"}),": whether the photodiode is in use. This can be used when the task is running as a desktop app (electron)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"REACT_APP_PARTICIPANT_ID")," ",Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-string-grey",alt:"string"}),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-optional-yellow",alt:"optional"}),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-runtime-purple",alt:"runtime"}),": The default participant id to show when authorizing a participant. If not set, user will need to enter the value in the provided input box."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"REACT_APP_STUDY_ID")," ",Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-string-grey",alt:"string"}),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-optional-yellow",alt:"optional"}),Object(r.b)("img",{parentName:"li",src:"https://img.shields.io/badge/-runtime-purple",alt:"runtime"}),": The default study id to show when authorizing a participant. If not set, user will need to enter the value in the provided input box.")),Object(r.b)("p",null,"Here are details on some of the badges:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{parentName:"p",src:"https://img.shields.io/badge/-runtime-purple",alt:"runtime"}),": Run-time environment variable. Set at the system level. See ",Object(r.b)("a",{parentName:"p",href:"https://www.imatest.com/docs/editing-system-environment-variables/#Windows"},"this tutorial for OS specific instructions."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{parentName:"p",src:"https://img.shields.io/badge/-buildtime-blue",alt:"buildtime"}),": Build-time environment variable. Set in a ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file before building. Can also be defined in a separate file under the ",Object(r.b)("inlineCode",{parentName:"p"},"env/")," directory and called with the dotenv-cli before building."))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"dotenv -e env/<your env file> npm run build\n")))}c.isMDXComponent=!0}}]);