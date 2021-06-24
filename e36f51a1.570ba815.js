(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),g=r,b=l["".concat(a,".").concat(g)]||l[g]||d[g]||i;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(101)),a={id:"event_triggers",title:"Set up event triggers"},c={unversionedId:"event_triggers",id:"version-1.1.0/event_triggers",isDocsHomePage:!1,title:"Set up event triggers",description:"BrainVision Trigger Box setup",source:"@site/versioned_docs/version-1.1.0/event_triggers.md",slug:"/event_triggers",permalink:"/honeycomb-docs/docs/1.1.0/event_triggers",editUrl:"https://github.com/brown-ccv/honeycomb-docs/edit/main/versioned_docs/version-1.1.0/event_triggers.md",version:"1.1.0",lastUpdatedAt:1623787793,sidebar:"version-1.1.0/someSidebar",previous:{title:"Configuration",permalink:"/honeycomb-docs/docs/1.1.0/configuration"},next:{title:"Deploy online",permalink:"/honeycomb-docs/docs/1.1.0/online_integration"}},s=[{value:"BrainVision Trigger Box setup",id:"brainvision-trigger-box-setup",children:[]},{value:"Open Source Event Trigger setup",id:"open-source-event-trigger-setup",children:[]},{value:"Send event code triggers",id:"send-event-code-triggers",children:[]},{value:"Run the task with event triggers",id:"run-the-task-with-event-triggers",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"brainvision-trigger-box-setup"},"BrainVision Trigger Box setup"),Object(i.b)("p",null,"Follow the TriggerBox setup instructions in the BrainVision Trigger Box manual. Plug the TriggerBox into the computer running the task. Check your operating system\u2019s device list to identify the COM port that the TriggerBox is connected to. Create a new system environment variable:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"COMNAME\n")),Object(i.b)("p",null,"and set to the COM port to the correct value (e.g., COM3). "),Object(i.b)("h2",{id:"open-source-event-trigger-setup"},"Open Source Event Trigger setup"),Object(i.b)("p",null,"Details on how to make the open source event trigger and photodiode can be found here: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/neuromotion/USB-event-marker"},"https://github.com/neuromotion/USB-event-marker"),"\nConnect the open source event trigger to the computer running the task using a USB to micro-USB cable. Check your operating system\u2019s USB device list to identify the product ID of the teensyduino event marker. "),Object(i.b)("p",null,"Create a new system environment variable: ",Object(i.b)("inlineCode",{parentName:"p"},"EVENT_MARKER_PRODUCT_ID")," and set to the product ID of the event marker. "),Object(i.b)("h2",{id:"send-event-code-triggers"},"Send event code triggers"),Object(i.b)("p",null,"Change the eventCodes values listed in the src/config/trigger.js file to the desired values. Import eventCodes from\n",Object(i.b)("inlineCode",{parentName:"p"},"./trigger")," and export as ",Object(i.b)("inlineCode",{parentName:"p"},"eventCodes")),Object(i.b)("p",null,"Whenever you would like to send an event code in a trial, load ",Object(i.b)("inlineCode",{parentName:"p"},"eventCodes")," from ",Object(i.b)("inlineCode",{parentName:"p"},"../config/main/"),", and call ",Object(i.b)("inlineCode",{parentName:"p"},"pdSpotEncode"),"with the proper eventCode (e.g. eventCode.Fixation) as input. "),Object(i.b)("h2",{id:"run-the-task-with-event-triggers"},"Run the task with event triggers"),Object(i.b)("p",null,"Honeycomb automatically checks whether your event marker is connected and running at the start of the task. If it is not connected, the task will present an error and will not be able to run. "))}p.isMDXComponent=!0}}]);