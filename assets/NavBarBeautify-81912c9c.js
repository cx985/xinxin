import{f as r,j as c,L as l,l as i,r as u,o as _,M as m,w as d,a as f}from"./app-57970fd2.js";import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";const v=f("div",{class:"none"},"修改顶栏组件",-1),B=r({__name:"NavBarBeautify",setup(h){const o=t=>{let e=window.location.pathname;const n=document.documentElement.scrollTop;t&&(e=t);const s=document.getElementsByClassName("theme-container");if(s.length<1)return null;const a=s[0];n<60&&(e=="/"||e=="/en/")?a.classList.add("scroll-top"):a.classList.remove("scroll-top")};return c(()=>{l(()=>{window.removeEventListener("scroll",()=>{}),o(),window.addEventListener("scroll",()=>{o()})}),i().beforeEach(e=>{l(()=>{setTimeout(()=>{o(e.fullPath)},50)})})}),(t,e)=>{const n=u("ClientOnly");return _(),m(n,null,{default:d(()=>[v]),_:1})}}});const C=p(B,[["__file","NavBarBeautify.vue"]]);export{C as default};
