"use strict";(self.webpackChunkmemocard_blog=self.webpackChunkmemocard_blog||[]).push([[43471],{43471:(e,l,a)=>{a.r(l),a.d(l,{default:()=>H});var s=a(791197),t=a(280171),r=a(695347),u=a(545084),i=a(858365),n=a(443355),o=a(495138),v=a(854268),c=a(615154),h=a(510246),p=a(296970);const y=(0,u._aR)("SEARCH_PRO_QUERY_HISTORY",[]),{resultHistoryCount:d}=p.s,m=(0,u._aR)("SEARCH_PRO_RESULT_HISTORY",[]);var H=(0,o.aZ)({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(e,{emit:l}){const a=(0,v.tv)(),H=(0,s.I)(),f=(0,c.zT)(p.a),{enabled:g,addQueryHistory:k,queryHistory:R,removeQueryHistory:Q}=(()=>{const{queryHistoryCount:e}=p.s,l=e>0;return{enabled:l,queryHistory:y,addQueryHistory:a=>{l&&(y.value.length<e?y.value=Array.from(new Set([a,...y.value])):y.value=Array.from(new Set([a,...y.value.slice(0,e-1)])))},removeQueryHistory:e=>{y.value=[...y.value.slice(0,e),...y.value.slice(e+1)]}}})(),{enabled:b,resultHistory:w,addResultHistory:x,removeResultHistory:C}=(()=>{const e=(0,v.tv)(),l=d>0,a=l=>e.resolve({name:l.key,..."anchor"in l?{hash:`#${l.anchor}`}:{}}).fullPath;return{enabled:l,resultHistory:m,addResultHistory:e=>{if(l){const l={link:a(e),display:e.display};"header"in e&&(l.header=e.header),m.value.length<d?m.value=[l,...m.value]:m.value=[l,...m.value.slice(0,d-1)]}},removeResultHistory:e=>{m.value=[...m.value.slice(0,e),...m.value.slice(e+1)]}}})(),S=g||b,q=(0,n.Vh)(e,"query"),{results:_,searching:A}=(e=>{const l=(0,p.u)(),a=(0,s.I)(),{search:t,terminate:r}=(0,p.c)(),u=(0,n.iH)(!1),v=(0,n.XI)([]);return(0,o.bv)((()=>{const s=()=>{v.value=[],u.value=!1},n=(0,i.DI)((e=>{u.value=!0,e?t({type:"search",query:e,locale:a.value,options:l}).then((e=>{v.value=e,u.value=!1})).catch((e=>{console.error(e),s()})):s()}),p.s.searchDelay);(0,o.YP)([e,a],(()=>n(e.value)),{immediate:!0}),(0,o.Ah)((()=>{r()}))})),{searching:u,results:v}})(q),P=(0,n.iH)({isQuery:!0,index:0}),D=(0,n.iH)(0),T=(0,n.iH)(0),I=(0,o.Fl)((()=>S&&(R.value.length>0||w.value.length>0))),E=(0,o.Fl)((()=>_.value.length>0)),F=(0,o.Fl)((()=>_.value[D.value]||null)),O=e=>a.resolve({name:e.key,..."anchor"in e?{hash:`#${e.anchor}`}:{}}).fullPath,Y=e=>e.map((e=>(0,t.HD)(e)?e:(0,o.h)(e[0],e[1]))),$=e=>{if("customField"===e.type){const l=p.b[e.index]||"$content",[a,s=""]=(0,r.PO)(l)?l[H.value].split("$content"):l.split("$content");return e.display.map((e=>(0,o.h)("div",Y([a,...e,s]))))}return e.display.map((e=>(0,o.h)("div",Y(e))))},U=()=>{D.value=0,T.value=0,l("updateQuery",""),l("close")};return(0,u.ORN)("keydown",(s=>{if(e.isFocusing)if(E.value){if("ArrowUp"===s.key)T.value>0?T.value=T.value-1:(D.value=D.value>0?D.value-1:_.value.length-1,T.value=F.value.contents.length-1);else if("ArrowDown"===s.key)T.value<F.value.contents.length-1?T.value=T.value+1:(D.value=D.value<_.value.length-1?D.value+1:0,T.value=0);else if("Enter"===s.key){const l=F.value.contents[T.value],s=O(l);k(e.query),x(l),a.push(s),U()}}else if(b)if("ArrowUp"===s.key)(()=>{const{isQuery:e,index:l}=P.value;P.value=0===l?{isQuery:!e,index:e?w.value.length-1:R.value.length-1}:{isQuery:e,index:l-1}})();else if("ArrowDown"===s.key)(()=>{const{isQuery:e,index:l}=P.value;l===(e?R.value.length-1:w.value.length-1)?P.value={isQuery:!e,index:0}:P.value={isQuery:e,index:l+1}})();else if("Enter"===s.key){const{index:e}=P.value;P.value.isQuery?(l("updateQuery",R.value[e]),s.preventDefault()):(a.push(w.value[e].link),U())}})),(0,o.YP)([D,T],(()=>{var e;null==(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))||e.scrollIntoView(!1)}),{flush:"post"}),()=>(0,o.h)("div",{class:["search-pro-result-wrapper",{empty:q.value?!E.value:!I.value}],id:"search-pro-results"},""===q.value?S?I.value?[g?(0,o.h)("ul",{class:"search-pro-result-list"},(0,o.h)("li",{class:"search-pro-result-list-item"},[(0,o.h)("div",{class:"search-pro-result-title"},f.value.history),R.value.map(((e,a)=>(0,o.h)("div",{class:["search-pro-result-item",{active:P.value.isQuery&&P.value.index===a}],onClick:()=>{l("updateQuery",e)}},[(0,o.h)(h.H,{class:"search-pro-result-type"}),(0,o.h)("div",{class:"search-pro-result-content"},e),(0,o.h)("button",{class:"search-pro-remove-icon",innerHTML:h.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),Q(a)}})])))])):null,b?(0,o.h)("ul",{class:"search-pro-result-list"},(0,o.h)("li",{class:"search-pro-result-list-item"},[(0,o.h)("div",{class:"search-pro-result-title"},f.value.history),w.value.map(((e,l)=>(0,o.h)(c.RG,{to:e.link,class:["search-pro-result-item",{active:!P.value.isQuery&&P.value.index===l}],onClick:()=>{U()}},(()=>[(0,o.h)(h.H,{class:"search-pro-result-type"}),(0,o.h)("div",{class:"search-pro-result-content"},[e.header?(0,o.h)("div",{class:"content-header"},e.header):null,(0,o.h)("div",e.display.map((e=>Y(e))).flat())]),(0,o.h)("button",{class:"search-pro-remove-icon",innerHTML:h.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),C(l)}})]))))])):null]:f.value.emptyHistory:f.value.emptyResult:A.value?(0,o.h)(h.S,{hint:f.value.searching}):E.value?(0,o.h)("ul",{class:"search-pro-result-list"},_.value.map((({title:l,contents:a},s)=>{const t=D.value===s;return(0,o.h)("li",{class:["search-pro-result-list-item",{active:t}]},[(0,o.h)("div",{class:"search-pro-result-title"},l||f.value.defaultTitle),a.map(((l,a)=>{const s=t&&T.value===a;return(0,o.h)(c.RG,{to:O(l),class:["search-pro-result-item",{active:s,"aria-selected":s}],onClick:()=>{k(e.query),x(l),U()}},(()=>["text"===l.type?null:(0,o.h)("title"===l.type?h.T:"heading"===l.type?h.a:h.b,{class:"search-pro-result-type"}),(0,o.h)("div",{class:"search-pro-result-content"},["text"===l.type&&l.header?(0,o.h)("div",{class:"content-header"},l.header):null,(0,o.h)("div",$(l))])]))}))])}))):f.value.emptyResult)}})}}]);