import{s as m,d as h,e as g}from"./scrollToSection.d088d63a.js";import{_ as A,d as p,a as w,y as v,o as S,aW as _,aX as u,aY as b}from"./_plugin-vue_export-helper.87f4d5e4.js";const y=/\s|&nbsp;/g,R=e=>{try{return e.replaceAll(y,"").toLowerCase()}catch{return e}},l=(e,t)=>{e.dataset.qa=R(t.value)},$="qa",E={beforeMount:(e,t)=>l(e,t),updated:(e,t)=>l(e,t)},B=p({props:{to:{type:Object,default:()=>({})}}}),k=["href"];function L(e,t,n,s,a,o){return S(),w("a",{href:e.to.path},[v(e.$slots,"default")],8,k)}const M=A(B,[["render",L]]),O=()=>{const e=navigator.userAgent;let t,n=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(n[1])?(t=/\brv[ :]+(\d+)/g.exec(e)||[],{name:"IE",version:t[1]||""}):n[1]==="Chrome"&&(t=e.match(/\bOPR|Edge\/(\d+)/),t!=null)?{name:"Opera",version:t[1]}:(n=n[2]?[n[1],n[2]]:[navigator.appName,navigator.appVersion,"-?"],(t=e.match(/version\/(\d+)/i))!=null&&n.splice(1,1,t[1]),{name:n[0],version:n[1]})};function x(e){const n=O().name===_;if(typeof e=="object"){const{query:s,path:a,hash:o}=e,c=s?`?${new URLSearchParams(s)}`:"";a?window.location.assign(`${a}${c}`):window.history.pushState(null,null,c),o&&m(o,n)}else window.location.assign(e)}const f=e=>{e.component("RouterLink",M),e.config.globalProperties.$router={push:t=>x(t)},e.directive($,E)},I=p({props:{value:String,name:String,hydrate:{type:Boolean,default:!0}},setup({name:e,value:t,hydrate:n}){if(!t)return()=>null;let s=n?"astro-slot":"astro-static-slot";return()=>u(s,{name:e,innerHTML:t})}}),j=e=>async(t,n,s,{client:a})=>{if(delete n.class,!e.hasAttribute("ssr"))return;const o=t.name?`${t.name} Host`:void 0,c={};for(const[r,d]of Object.entries(s))c[r]=()=>u(I,{value:d,name:r==="default"?void 0:r});let i=u(t,n,c);if(N(t.setup)&&(i=u(b,null,i)),a==="only"){const r=h({name:o,render:()=>i});await f(r),r.mount(e,!1)}else{const r=g({name:o,render:()=>i});await f(r),r.mount(e,!0)}};function N(e){const t=e?.constructor;return t&&t.name==="AsyncFunction"}export{j as default};
