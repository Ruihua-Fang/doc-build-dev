import{S as C,i as E,s as x,N as y,O as w,a as d,d as h,b as u,g as V,F as g,L as N,e as b,k as I,t as R,c as p,m as A,h as L,f as O,j as S,w as H,x as T,y as k,P as v,q as M,o as B,B as D,Q as q,R as P}from"./vendor-19e06bd2.js";function Z(a){const e=document.createElement("textarea");document.body.appendChild(e),e.value=a,e.select(),document.execCommand("copy"),document.body.removeChild(e)}function j(a){let e,t,l,n;return{c(){e=y("svg"),t=y("path"),l=y("path"),n=y("rect"),this.h()},l(r){e=w(r,"svg",{class:!0,xmlns:!0,"aria-hidden":!0,fill:!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var s=d(e);t=w(s,"path",{d:!0,transform:!0}),d(t).forEach(h),l=w(s,"path",{d:!0,transform:!0}),d(l).forEach(h),n=w(s,"rect",{fill:!0,width:!0,height:!0}),d(n).forEach(h),s.forEach(h),this.h()},h(){u(t,"d","M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"),u(t,"transform","translate(0)"),u(l,"d","M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"),u(l,"transform","translate(0)"),u(n,"fill","none"),u(n,"width","32"),u(n,"height","32"),u(e,"class",a[0]),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"aria-hidden","true"),u(e,"fill","currentColor"),u(e,"focusable","false"),u(e,"role","img"),u(e,"width","1em"),u(e,"height","1em"),u(e,"preserveAspectRatio","xMidYMid meet"),u(e,"viewBox","0 0 32 32")},m(r,s){V(r,e,s),g(e,t),g(e,l),g(e,n)},p(r,[s]){s&1&&u(e,"class",r[0])},i:N,o:N,d(r){r&&h(e)}}}function F(a,e,t){let{classNames:l=""}=e;return a.$$set=n=>{"classNames"in n&&t(0,l=n.classNames)},[l]}class Q extends C{constructor(e){super();E(this,e,F,j,x,{classNames:0})}}function U(a){let e,t,l,n,r;return{c(){e=b("div"),t=b("div"),l=I(),n=R(a[1]),this.h()},l(s){e=p(s,"DIV",{class:!0});var c=d(e);t=p(c,"DIV",{class:!0,style:!0}),d(t).forEach(h),l=A(c),n=L(c,a[1]),c.forEach(h),this.h()},h(){u(t,"class","absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-black border-4 border-t-0"),O(t,"border-left-color","transparent"),O(t,"border-right-color","transparent"),u(e,"class",r="absolute pointer-events-none transition-opacity bg-black text-white py-1 px-2 leading-tight rounded font-normal shadow "+a[2]+" "+a[0])},m(s,c){V(s,e,c),g(e,t),g(e,l),g(e,n)},p(s,[c]){c&2&&S(n,s[1]),c&5&&r!==(r="absolute pointer-events-none transition-opacity bg-black text-white py-1 px-2 leading-tight rounded font-normal shadow "+s[2]+" "+s[0])&&u(e,"class",r)},i:N,o:N,d(s){s&&h(e)}}}function Y(a,e,t){let{classNames:l=""}=e,{label:n="Copied"}=e,{position:r="left-1/2 top-full transform -translate-x-1/2 translate-y-2"}=e;return a.$$set=s=>{"classNames"in s&&t(0,l=s.classNames),"label"in s&&t(1,n=s.label),"position"in s&&t(2,r=s.position)},[l,n,r]}class z extends C{constructor(e){super();E(this,e,Y,U,x,{classNames:0,label:1,position:2})}}function G(a){let e,t,l,n,r,s,c,m,f;return t=new Q({}),n=new z({props:{classNames:a[4]?"opacity-100":"opacity-0"}}),{c(){e=b("button"),H(t.$$.fragment),l=I(),H(n.$$.fragment),this.h()},l(o){e=p(o,"BUTTON",{class:!0,title:!0,type:!0});var i=d(e);T(t.$$.fragment,i),l=A(i),T(n.$$.fragment,i),i.forEach(h),this.h()},h(){u(e,"class",r="inline-flex items-center relative text-sm focus:text-green-500 cursor-pointer focus:outline-none "+a[0]+" "+(a[2]==="text"?"mx-0.5":"")+" "+(a[2]==="button"?"btn":"")+" "+(a[2]==="button-clear"?"py-1 px-2 border rounded-lg shadow-sm":"")+" "+(!a[4]&&["button-clear","text"].includes(a[2])?"text-gray-600":"")+" "+(a[4]?"text-green-500":"")),u(e,"title",s=a[3]||a[1]||"Copy to clipboard"),u(e,"type","button")},m(o,i){V(o,e,i),k(t,e,null),g(e,l),k(n,e,null),c=!0,m||(f=v(e,"click",a[5]),m=!0)},p(o,[i]){const _={};i&16&&(_.classNames=o[4]?"opacity-100":"opacity-0"),n.$set(_),(!c||i&21&&r!==(r="inline-flex items-center relative text-sm focus:text-green-500 cursor-pointer focus:outline-none "+o[0]+" "+(o[2]==="text"?"mx-0.5":"")+" "+(o[2]==="button"?"btn":"")+" "+(o[2]==="button-clear"?"py-1 px-2 border rounded-lg shadow-sm":"")+" "+(!o[4]&&["button-clear","text"].includes(o[2])?"text-gray-600":"")+" "+(o[4]?"text-green-500":"")))&&u(e,"class",r),(!c||i&10&&s!==(s=o[3]||o[1]||"Copy to clipboard"))&&u(e,"title",s)},i(o){c||(M(t.$$.fragment,o),M(n.$$.fragment,o),c=!0)},o(o){B(t.$$.fragment,o),B(n.$$.fragment,o),c=!1},d(o){o&&h(e),D(t),D(n),m=!1,f()}}}function J(a,e,t){let{classNames:l=""}=e,{label:n=""}=e,{style:r="text"}=e,{title:s=""}=e,{value:c}=e,m=!1,f;q(()=>{f&&clearTimeout(f)});function o(){Z(c),t(4,m=!0),f&&clearTimeout(f),f=setTimeout(()=>{t(4,m=!1)},1e3)}return a.$$set=i=>{"classNames"in i&&t(0,l=i.classNames),"label"in i&&t(1,n=i.label),"style"in i&&t(2,r=i.style),"title"in i&&t(3,s=i.title),"value"in i&&t(6,c=i.value)},[l,n,r,s,m,o,c]}class K extends C{constructor(e){super();E(this,e,J,G,x,{classNames:0,label:1,style:2,title:3,value:6})}}function W(a){let e,t,l,n,r,s,c,m;return l=new K({props:{classNames:"transition duration-200 ease-in-out "+(a[2]&&"opacity-0"),label:"code excerpt",value:a[0]}}),{c(){e=b("div"),t=b("div"),H(l.$$.fragment),n=I(),r=b("pre"),this.h()},l(f){e=p(f,"DIV",{class:!0});var o=d(e);t=p(o,"DIV",{class:!0});var i=d(t);T(l.$$.fragment,i),i.forEach(h),n=A(o),r=p(o,"PRE",{});var _=d(r);_.forEach(h),o.forEach(h),this.h()},h(){u(t,"class","absolute top-2.5 right-4"),u(e,"class","code-block relative")},m(f,o){V(f,e,o),g(e,t),k(l,t,null),g(e,n),g(e,r),r.innerHTML=a[1],s=!0,c||(m=[v(e,"mouseover",a[3]),v(e,"focus",a[3]),v(e,"mouseout",a[4]),v(e,"blur",a[4])],c=!0)},p(f,[o]){const i={};o&4&&(i.classNames="transition duration-200 ease-in-out "+(f[2]&&"opacity-0")),o&1&&(i.value=f[0]),l.$set(i),(!s||o&2)&&(r.innerHTML=f[1])},i(f){s||(M(l.$$.fragment,f),s=!0)},o(f){B(l.$$.fragment,f),s=!1},d(f){f&&h(e),D(l),c=!1,P(m)}}}function X(a,e,t){let l=!0,{code:n=""}=e,{highlighted:r=""}=e;function s(){t(2,l=!1)}function c(){t(2,l=!0)}return a.$$set=m=>{"code"in m&&t(0,n=m.code),"highlighted"in m&&t(1,r=m.highlighted)},[n,r,l,s,c]}class ee extends C{constructor(e){super();E(this,e,X,W,x,{code:0,highlighted:1})}}export{ee as C};
