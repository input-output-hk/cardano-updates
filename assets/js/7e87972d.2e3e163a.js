"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[2432],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8671:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"Performance & tracing update",slug:"2022-11-30-performance-and-tracing",authors:"deepfire",tags:["performance-tracing"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2022-11-30-performance-and-tracing",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-11-30-performance-and-tracing.md",source:"@site/blog/2022-11-30-performance-and-tracing.md",title:"Performance & tracing update",description:"High level summary",date:"2022-11-30T00:00:00.000Z",formattedDate:"November 30, 2022",tags:[{label:"performance-tracing",permalink:"/cardano-updates/tags/performance-tracing"}],readingTime:1.95,hasTruncateMarker:!1,authors:[{name:"Serge Kosyrev",title:"Performance and Tracing Team Lead",url:"https://github.com/deepfire",imageURL:"https://github.com/deepfire.png",key:"deepfire"}],frontMatter:{title:"Performance & tracing update",slug:"2022-11-30-performance-and-tracing",authors:"deepfire",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2022-11-30-consensus"},nextItem:{title:"Network Team Update",permalink:"/cardano-updates/2022-11-28-network"}},c={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Performance",id:"performance",level:2},{value:"Tracing",id:"tracing",level:2},{value:"Infrastructure",id:"infrastructure",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Benchmarks for the 1.36 first pre-release bump of the internal components have been delivered, and data shows the component bump is clear for release."),(0,a.kt)("li",{parentName:"ol"},"SECP benchmarking enablement is underway:  the necessary generator features have been implemented, and are now being integrated into the workbench."),(0,a.kt)("li",{parentName:"ol"},"The new tracing system:  in response to the performance regression we previously discovered we are working on pre-planned implementation improvements, and doing more benchmarks."),(0,a.kt)("li",{parentName:"ol"},"Infrastructure:  the Nomad-based workbench backend has been made closer to a cloud deployment scenario.  Cleanup in preparation for Cicero CI/CD integration started."),(0,a.kt)("li",{parentName:"ol"},"Open sourcing:  ongoing SRE collaboration on production deployment of performance data publishing.")),(0,a.kt)("h2",{id:"performance"},"Performance"),(0,a.kt)("p",null,"We have ran benchmarks for the first component bump of the upcoming 1.36 release, and we don't see any significant performance changes.  The component bumps are therefore clear for release."),(0,a.kt)("h2",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"For the tracing system regression that we spotted -- even before, we already had plans for further efficiency improvement, and now we are actively pursuing them.\nThe idea is to collect more statically-available information to enable shifting of more tracing decisions from message delivery time to configuration time."),(0,a.kt)("p",null,"To support this effort, we also started running more benchmarks and enhanced data analysis with relevant metrics."),(0,a.kt)("h2",{id:"infrastructure"},"Infrastructure"),(0,a.kt)("p",null,"Generation support for Plutus V2 has been implemented and so, with the help of the previously made looped signature-verifying script, the generator is now capable of producing two SECP workloads: verifying either ECDSA or Schnorr signatures.  This is now being integrated into the infrastructure -- the generator parametrisation API is being enhanced and the workbench is being extended to handle the new parametrisation."),(0,a.kt)("p",null,"In addition the workbench is now being enhanced to handle protocol-version-based choices for the Plutus cost model."),(0,a.kt)("p",null,"The intermediate cloud compatibility iteration of the workbench cloud enablement effort was merged.\nWe are now doing some cleanup work in preparation for starting the Cicero backend, which will bring us nearly completely to the CI/CD integration."),(0,a.kt)("p",null,"We continue collaboration with SRE on production deployment of data publishing.  We now have a gradual rollout plan, which respects the plans for SRE infrastructure feature availability."),(0,a.kt)("p",null,"We are working on recovering the software dependency manifest feature that was lost with the organisation-wide transition to CHaP."),(0,a.kt)("p",null,"As usual, a number of smaller workbench, data analysis & reporting improvements have been made."))}u.isMDXComponent=!0}}]);