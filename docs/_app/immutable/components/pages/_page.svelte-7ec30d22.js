import{S as P,i as D,s as S,I as z,J as T,K as G,m as d,h as g,L as b,b as w,M as j,B as I,N as V,O as J,k as p,q as C,a as H,l as x,r as O,c as q,n as B,G as _,f as k,d as K,t as y,P as N,w as Q,x as A,y as F,Q as R,z as U,g as W}from"../../chunks/index-e5c07239.js";function X(n){let e,l=[{xmlns:"http://www.w3.org/2000/svg"},{width:n[1]},{height:n[2]},{viewBox:n[0]},{stroke:n[3]},{fill:n[4]},n[6]],c={};for(let s=0;s<l.length;s+=1)c=z(c,l[s]);return{c(){e=T("svg"),this.h()},l(s){e=G(s,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,stroke:!0,fill:!0});var a=d(e);a.forEach(g),this.h()},h(){b(e,c)},m(s,a){w(s,e,a),e.innerHTML=n[5]},p(s,[a]){a&32&&(e.innerHTML=s[5]),b(e,c=j(l,[{xmlns:"http://www.w3.org/2000/svg"},a&2&&{width:s[1]},a&4&&{height:s[2]},a&1&&{viewBox:s[0]},a&8&&{stroke:s[3]},a&16&&{fill:s[4]},a&64&&s[6]]))},i:I,o:I,d(s){s&&g(e)}}}function Y(n){const l=/viewBox="([\d\- \.]+)"/.exec(n);return l?l[1]:"0 0 20 20"}function Z(n,e,l){let c;const s=["data","viewBox","size","width","height","color","stroke","fill"];let a=V(e,s),{data:u=""}=e,{viewBox:i=Y(u)}=e,{size:m="20px"}=e,{width:t=m}=e,{height:h=m}=e,{color:o="currentColor"}=e,{stroke:r=o}=e,{fill:v=o}=e;return n.$$set=f=>{e=z(z({},e),J(f)),l(6,a=V(e,s)),"data"in f&&l(7,u=f.data),"viewBox"in f&&l(0,i=f.viewBox),"size"in f&&l(8,m=f.size),"width"in f&&l(1,t=f.width),"height"in f&&l(2,h=f.height),"color"in f&&l(9,o=f.color),"stroke"in f&&l(3,r=f.stroke),"fill"in f&&l(4,v=f.fill)},n.$$.update=()=>{n.$$.dirty&128&&l(5,c=u.replace(/<svg[ \n]([^>]*)>/,"").replace("</svg>",""))},[i,t,h,r,v,c,a,u,m,o]}class $ extends P{constructor(e){super(),D(this,e,Z,X,S,{data:7,viewBox:0,size:8,width:1,height:2,color:9,stroke:3,fill:4})}}const ee='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>',te='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.4 12H2.8L1 15H0V5h1l1.8 3h5.6L6 0h2l4.8 8H18a2 2 0 1 1 0 4h-5.2L8 20H6l2.4-8z"/></svg>',se='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z"/></svg>';function L(n,e,l){const c=n.slice();return c[3]=e[l],c}function M(n){let e,l,c,s,a,u=`<Icon data={${n[3].icon}} ${n[2](n[3].props)} />`,i,m,t;const h=[{data:n[0][n[3].icon]},n[3].props];let o={};for(let r=0;r<h.length;r+=1)o=z(o,h[r]);return c=new $({props:o}),{c(){e=p("div"),l=p("div"),Q(c.$$.fragment),s=H(),a=p("code"),i=C(u),m=H(),this.h()},l(r){e=x(r,"DIV",{class:!0});var v=d(e);l=x(v,"DIV",{class:!0});var f=d(l);A(c.$$.fragment,f),f.forEach(g),s=q(v),a=x(v,"CODE",{class:!0});var E=d(a);i=O(E,u),E.forEach(g),m=q(v),v.forEach(g),this.h()},h(){B(l,"class","icon svelte-pqyy6q"),B(a,"class","code svelte-pqyy6q"),B(e,"class","item "+n[3].class+" svelte-pqyy6q")},m(r,v){w(r,e,v),_(e,l),F(c,l,null),_(e,s),_(e,a),_(a,i),_(e,m),t=!0},p(r,v){const f=v&3?j(h,[{data:r[0][r[3].icon]},v&2&&R(r[3].props)]):{};c.$set(f)},i(r){t||(k(c.$$.fragment,r),t=!0)},o(r){y(c.$$.fragment,r),t=!1},d(r){r&&g(e),U(c)}}}function le(n){let e,l,c,s,a,u=n[1],i=[];for(let t=0;t<u.length;t+=1)i[t]=M(L(n,u,t));const m=t=>y(i[t],1,1,()=>{i[t]=null});return{c(){e=p("h1"),l=C("Svelte Icon Examples"),c=H(),s=p("div");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){e=x(t,"H1",{class:!0});var h=d(e);l=O(h,"Svelte Icon Examples"),h.forEach(g),c=q(t),s=x(t,"DIV",{class:!0});var o=d(s);for(let r=0;r<i.length;r+=1)i[r].l(o);o.forEach(g),this.h()},h(){B(e,"class","title svelte-pqyy6q"),B(s,"class","container svelte-pqyy6q")},m(t,h){w(t,e,h),_(e,l),w(t,c,h),w(t,s,h);for(let o=0;o<i.length;o+=1)i[o].m(s,null);a=!0},p(t,[h]){if(h&7){u=t[1];let o;for(o=0;o<u.length;o+=1){const r=L(t,u,o);i[o]?(i[o].p(r,h),k(i[o],1)):(i[o]=M(r),i[o].c(),k(i[o],1),i[o].m(s,null))}for(W(),o=u.length;o<i.length;o+=1)m(o);K()}},i(t){if(!a){for(let h=0;h<u.length;h+=1)k(i[h]);a=!0}},o(t){i=i.filter(Boolean);for(let h=0;h<i.length;h+=1)y(i[h]);a=!1},d(t){t&&g(e),t&&g(c),t&&g(s),N(i,t)}}}function oe(n){return[{menu:ee,home:se,airplane:te},[{icon:"menu"},{icon:"menu",props:{size:"80px"}},{icon:"menu",props:{color:"red"}},{icon:"menu",class:"orange"},{icon:"airplane",props:{viewBox:"-2 -2 24 24",size:"60px",fill:"blue",stroke:"black"}},{icon:"home",props:{width:"30px",height:"50px"}}],s=>Object.keys(s||{}).map(a=>`${a}="${s[a]}"`).join(" ")]}class ne extends P{constructor(e){super(),D(this,e,oe,le,S,{})}}export{ne as default};
