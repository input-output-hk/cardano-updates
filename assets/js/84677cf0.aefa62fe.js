"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[4415],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),d=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(a),c=n,m=p["".concat(u,".").concat(c)]||p[c]||h[c]||i;return a?r.createElement(m,o(o({ref:t},s),{},{components:a})):r.createElement(m,o({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},789:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const i={title:"Hydra Team Update",slug:"2022-12-09-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2022-12-09-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-12-09-hydra.md",source:"@site/blog/2022-12-09-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2022-12-09T00:00:00.000Z",formattedDate:"December 9, 2022",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:1.62,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2022-12-09-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2022-12-02-hydra"}},u={authorsImageUrls:[void 0]},d=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],s={toc:d};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,'This week, the Hydra team has worked on completing to "Validate coordinated head protocol against formal model", this is a huge step to verify the implementation is secure. They also worked on implementing ',(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/blob/7e532bd1c8a840a8155cf4b0858b982308dfc3f0/docs/adr/CloseTx-validity-bounds-and-deadline-calculation-DoS.md"},"ADR21")," related to bounded tx validity which is now under review. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/obsidiansystems/hydra-pay"},"HydraPay")," project, from Obsidian Systems, is coming to an end of the first phase at least, so team did a review and submitted couple of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/obsidiansystems/hydra-pay/issues?q=is%3Aissue"},"issues")," they found in the process. The team had a meeting with the Director of CyberSecurity - topic was the RFP that is currently in flight that should scope the work of future auditors. Also, the team completed the hydra-tutorial review created by our colleague Thomas Vellecoop from the education team, and we are close to integrate it to our official site. From the development side, they have fixed a bug on the CI when running the benchmark jobs to calculate the cost of abortTx and a flaky spec which checks a plutus merkle-tree is always balanced."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Document model based testing ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/194"},"#194")," & ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/641"},"#641")),(0,n.kt)("li",{parentName:"ul"},"Got ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/blob/7e532bd1c8a840a8155cf4b0858b982308dfc3f0/docs/adr/CloseTx-validity-bounds-and-deadline-calculation-DoS.md"},"ADR21"),", reducing gaps between implementation and specification, under review."),(0,n.kt)("li",{parentName:"ul"},"Complete review on ",(0,n.kt)("inlineCode",{parentName:"li"},"hydra-tutorial"),"."),(0,n.kt)("li",{parentName:"ul"},"Complete first round of review on ",(0,n.kt)("inlineCode",{parentName:"li"},"HydraPay")," work ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/634"},"#634")),(0,n.kt)("li",{parentName:"ul"},"Meeting with ",(0,n.kt)("inlineCode",{parentName:"li"},"Director of CyberSecurity")," frio ",(0,n.kt)("inlineCode",{parentName:"li"},"IOG"),' to unblock "the RFP prepared for the external audit" ',(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/606"},"#606")),(0,n.kt)("li",{parentName:"ul"},"Remove ",(0,n.kt)("inlineCode",{parentName:"li"},"vasil-dev")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"testnet")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"smoke-test")," because they were not working ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/630"},"#630")),(0,n.kt)("li",{parentName:"ul"},"Fix flaky ",(0,n.kt)("inlineCode",{parentName:"li"},"plutus-merkle-tree")," test ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/642"},"#642")),(0,n.kt)("li",{parentName:"ul"},"Refactor ",(0,n.kt)("inlineCode",{parentName:"li"},"NetworkSpec")," to improve legilibility."),(0,n.kt)("li",{parentName:"ul"},"Fix benchmark cost for ",(0,n.kt)("inlineCode",{parentName:"li"},"abortTx")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/631"},"#631")),(0,n.kt)("li",{parentName:"ul"},"Adapt ",(0,n.kt)("inlineCode",{parentName:"li"},"nix.conf")," to the recent hydra-ci nix cache migration.")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Get ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/blob/7e532bd1c8a840a8155cf4b0858b982308dfc3f0/docs/adr/CloseTx-validity-bounds-and-deadline-calculation-DoS.md"},"ADR21")," accepted & close tx validity gap in our implementation."),(0,n.kt)("li",{parentName:"ul"},"Integrate the ",(0,n.kt)("inlineCode",{parentName:"li"},"hydra-tutorial"),"."),(0,n.kt)("li",{parentName:"ul"},"Have a LaTeX write-up of the HeadV1 (Coordinated Hydra Head) spec."),(0,n.kt)("li",{parentName:"ul"},"Get Cicero (new CI) working."),(0,n.kt)("li",{parentName:"ul"},"Use reference inputs to reduce the cost of the ",(0,n.kt)("inlineCode",{parentName:"li"},"commitTx"),".")))}h.isMDXComponent=!0}}]);