"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[3271],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const s={title:"DB sync Team Update",slug:"2022-12-01-db-sync",authors:"kderme",tags:["db-sync"],hide_table_of_contents:!1},o=void 0,i={permalink:"/cardano-updates/2022-12-01-db-sync",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-12-01-db-sync.md",source:"@site/blog/2022-12-01-db-sync.md",title:"DB sync Team Update",description:"High level summary",date:"2022-12-01T00:00:00.000Z",formattedDate:"December 1, 2022",tags:[{label:"db-sync",permalink:"/cardano-updates/tags/db-sync"}],readingTime:.78,hasTruncateMarker:!1,authors:[{name:"Kostas Dermentzis",title:"Cardano DB-Sync Software Engineer",url:"https://github.com/kderme",imageURL:"https://github.com/kderme.png",key:"kderme"}],frontMatter:{title:"DB sync Team Update",slug:"2022-12-01-db-sync",authors:"kderme",tags:["db-sync"],hide_table_of_contents:!1},nextItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2022-11-30-consensus"}},c={authorsImageUrls:[void 0]},l=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"The DB Sync team prepared a release ",(0,a.kt)("inlineCode",{parentName:"p"},"13.1.0.0-rc2")," which includes many improvements for db-sync,\nit makes rollbacks and syncing much faster, simplifies the schema, fixes bugs and introduces\nmigrations. This release finalises the objectives that were set for db-sync for the previous\n3 months period and part of the syncing speed objective set for the next period\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-db-sync/blob/3640e5aa00b8bada61e5d4b6eee063749866711b/cardano-db-sync/CHANGELOG.md#13100"},"Changelog")),(0,a.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Branch ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-db-sync/compare/release/13.0.x..3640e5aa00b8bada61e5d4b6eee063749866711b"},"release/13.1.0.x"),"\nincludes all the improvements related to the release. The release is passing through the testing\nphase and a number of bugs and issues have been fixed, like\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-db-sync/issues/1312"},"#1312"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-db-sync/issues/1311"},"#1311"),".\nAlso many new unit tests have been added.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Part of the release branch is cherry-picked back into master, in a way that it respects the new\nrelease and development process, so that it takes into account migrations\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-db-sync/issues/1305"},"release process"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The DB Sync team has also tagged release ",(0,a.kt)("inlineCode",{parentName:"p"},"13.0.6")," which better supports preview and preprod for\ndocker."))))}u.isMDXComponent=!0}}]);