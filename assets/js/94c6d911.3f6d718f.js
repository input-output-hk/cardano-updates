"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[4501],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4130:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"Performance & tracing update",slug:"2022-11-16-performance-and-tracing",authors:"deepfire",tags:["performance-tracing"],hide_table_of_contents:!1},i=void 0,c={permalink:"/cardano-updates/2022-11-16-performance-and-tracing",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-11-16-performance-and-tracing.md",source:"@site/blog/2022-11-16-performance-and-tracing.md",title:"Performance & tracing update",description:"High level summary",date:"2022-11-16T00:00:00.000Z",formattedDate:"November 16, 2022",tags:[{label:"performance-tracing",permalink:"/cardano-updates/tags/performance-tracing"}],readingTime:1.635,hasTruncateMarker:!1,authors:[{name:"Serge Kosyrev",title:"Performance and Tracing Team Lead",url:"https://github.com/deepfire",imageURL:"https://github.com/deepfire.png",key:"deepfire"}],frontMatter:{title:"Performance & tracing update",slug:"2022-11-16-performance-and-tracing",authors:"deepfire",tags:["performance-tracing"],hide_table_of_contents:!1},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2022-11-11-hydra"}},l={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Performance",id:"performance",level:2},{value:"Tracing",id:"tracing",level:2},{value:"Infrastructure",id:"infrastructure",level:2}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"P2P performance investigation is ongoing, in support of the networking team."),(0,a.kt)("li",{parentName:"ol"},"SECP benchmarking enablement is underway: we already have the script and are working on Plutus V2 generation support."),(0,a.kt)("li",{parentName:"ol"},"Unexpected setback in the new tracing system:  full scale benchmarks have shown a performance regression: local chain syncing benchmarks were an improvement over legacy tracing."),(0,a.kt)("li",{parentName:"ol"},"On the open sourcing front we added an integrated data dictionary, which is necessary for explaining ourselves to the world.  SRE collaboration on production deployment of performance data publishing has started."),(0,a.kt)("li",{parentName:"ol"},"We have started bringing the Nomad-based workbench backend closer to a cloud deployment scenario.")),(0,a.kt)("h2",{id:"performance"},"Performance"),(0,a.kt)("p",null,"We are supporting the networking team on P2P performance investigation.  Generation support for Plutus V2 was started.  We have collaborated with the Plutus team to get a SECP benchmark script, which is now ready for use, pending Plutus V2 support.  The transaction generator has also been updated to the cardano-api changes."),(0,a.kt)("h2",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"We ran an initial round of full-scale benchmarks for the new tracing system -- which uncovered a regression relative to legacy tracing, which is contrary to the local chain syncing benchmarks, that showed improvement instead.  We added tracing to cardano-tracer, fixing some minor bugs on the way.  Network and disk IO metrics are now collected once again and are integrated into analysis."),(0,a.kt)("h2",{id:"infrastructure"},"Infrastructure"),(0,a.kt)("p",null,"The first iteration of the Nomad-based local workbench backend was completed -- it has reached feature parity with the existing supervisor backend.  The next iteration started, bringing it closer to the cloud scenario, by deploying to separate Nomad tasks connected by a virtual network.  This will serve as basis for CI and full cloud backends."),(0,a.kt)("p",null,"We designed and implemented the authoring pipeline for the performance data dictionary, which will be henceforth embedded in our performance reports.  We are collaborating with SRE on production deployment of data publishing."),(0,a.kt)("p",null,"A number of smaller workbench, data analysis & reporting improvements have been made."))}d.isMDXComponent=!0}}]);