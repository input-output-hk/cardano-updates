"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[9610],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(r),d=n,m=h["".concat(p,".").concat(d)]||h[d]||c[d]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4846:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={},i=void 0,l={permalink:"/cardano-updates/2022/10/28/hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-10-28-hydra.md",source:"@site/blog/2022-10-28-hydra.md",title:"hydra",description:"High level summary",date:"2022-10-28T00:00:00.000Z",formattedDate:"October 28, 2022",tags:[],readingTime:.795,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"Network Team Update",permalink:"/cardano-updates/2022-10-28-network"}},p={authorsImageUrls:[]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"This week, the hydra team completed several user experience improvements to the\n",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-tui")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-node"),", and delivered a first version of persisted head\nstates by publishing release version\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra-poc/releases/tag/0.8.0"},(0,n.kt)("inlineCode",{parentName:"a"},"0.8.0")),".\nBesides this, they met with researchers on topic of the HeadV1 specification and\nkicked-off work on the RFP for an external audit of the Hydra Head protocol and implementation."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Completed the UX improvements on the ",(0,n.kt)("inlineCode",{parentName:"li"},"hydra-tui")),(0,n.kt)("li",{parentName:"ul"},"Released version ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/releases/tag/0.8.0"},(0,n.kt)("inlineCode",{parentName:"a"},"0.8.0")),", which delivers a first version of persisted head states"),(0,n.kt)("li",{parentName:"ul"},"Met with researchers on the HeadV1 specification"),(0,n.kt)("li",{parentName:"ul"},"Started work on the RFP for our external audit")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Complete ADR18 implementation and get it merged"),(0,n.kt)("li",{parentName:"ul"},"Start work on event-sourced persistence ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/issues/580"},"#580")),(0,n.kt)("li",{parentName:"ul"},"Have a first plutus script gap closed ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/issues/452"},"#452")),(0,n.kt)("li",{parentName:"ul"},"Revamp CI to use flakes and build macos artifacts (stretch goal: migrate to cicero for nix builds)")))}c.isMDXComponent=!0}}]);