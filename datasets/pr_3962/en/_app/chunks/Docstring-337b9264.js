var rt=Object.defineProperty,st=Object.defineProperties;var nt=Object.getOwnPropertyDescriptors;var be=Object.getOwnPropertySymbols;var it=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable;var ke=(a,e,t)=>e in a?rt(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,we=(a,e)=>{for(var t in e||(e={}))it.call(e,t)&&ke(a,t,e[t]);if(be)for(var t of be(e))ot.call(e,t)&&ke(a,t,e[t]);return a},Ee=(a,e)=>st(a,nt(e));import{S as Re,i as Xe,s as Ye,e as v,c as b,a as k,d as h,b as _,f as se,g as S,l as Q,L as ye,t as z,h as B,F as d,U as je,Q as he,j as ne,V as qe,T as Ue,k as P,m as C,W as We,X as Ze,q as U,w as Fe,x as Oe,y as Qe,o as O,B as Je,n as Ke,p as $e,G as de,Y as et,Z as tt,v as ft,E as ct,_ as ut}from"./vendor-aa873a46.js";import{I as lt}from"./IconCopyLink-d0ca3106.js";function Le(a){let e,t;return{c(){e=v("div"),this.h()},l(l){e=b(l,"DIV",{class:!0,style:!0,id:!0});var s=k(e);s.forEach(h),this.h()},h(){_(e,"class",t="absolute text-base py-1.5 p-2 break-words bg-white border-2 border-black dark:border-gray-500 rounded shadow-alternate-xl z-50 "+(a[0].length>1e3?"max-w-lg":"max-w-xs")),se(e,"top",a[2]+15+"px"),se(e,"left",a[1]+15+"px"),_(e,"id",a[3])},m(l,s){S(l,e,s),e.innerHTML=a[0]},p(l,s){s&1&&(e.innerHTML=l[0]),s&1&&t!==(t="absolute text-base py-1.5 p-2 break-words bg-white border-2 border-black dark:border-gray-500 rounded shadow-alternate-xl z-50 "+(l[0].length>1e3?"max-w-lg":"max-w-xs"))&&_(e,"class",t),s&4&&se(e,"top",l[2]+15+"px"),s&2&&se(e,"left",l[1]+15+"px"),s&8&&_(e,"id",l[3])},d(l){l&&h(e)}}}function ht(a){let e,t=a[0]&&Le(a);return{c(){t&&t.c(),e=Q()},l(l){t&&t.l(l),e=Q()},m(l,s){t&&t.m(l,s),S(l,e,s)},p(l,[s]){l[0]?t?t.p(l,s):(t=Le(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:ye,o:ye,d(l){t&&t.d(l),l&&h(e)}}}function dt(a,e,t){let{txt:l}=e,{x:s}=e,{y:c}=e,{id:n}=e;return a.$$set=o=>{"txt"in o&&t(0,l=o.txt),"x"in o&&t(1,s=o.x),"y"in o&&t(2,c=o.y),"id"in o&&t(3,n=o.id)},[l,s,c,n]}class pt extends Re{constructor(e){super();Xe(this,e,dt,ht,Ye,{txt:0,x:1,y:2,id:3})}}const Pe="docstring-tooltip";function at(a,e){let t;function l(o){n(),t=new pt({props:{txt:e,x:o.pageX,y:o.pageY,id:Pe},target:document.body})}function s(o){t.$set({x:o.pageX,y:o.pageY})}function c(){t.$destroy()}function n(){var u;const o=document.getElementById(Pe);o&&((u=o.parentNode)==null||u.removeChild(o))}return a.addEventListener("mouseover",l),a.addEventListener("mouseleave",c),a.addEventListener("mousemove",s),{destroy(){a.removeEventListener("mouseover",l),a.removeEventListener("mouseleave",c),a.removeEventListener("mousemove",s)}}}function Ce(a,e,t){const l=a.slice();return l[16]=e[t].title,l[7]=e[t].parametersDescription,l}function Ae(a,e,t){const l=a.slice();return l[5]=e[t].anchor,l[19]=e[t].description,l}function Ne(a,e,t){const l=a.slice();return l[6]=e[t].name,l[22]=e[t].val,l}function Se(a){let e,t,l=a[6]+"",s,c,n=a[22]+"",o,u,p,r,i;function f(){return a[12](a[6])}return{c(){e=v("span"),t=v("span"),s=z(l),c=v("span"),o=z(n),this.h()},l(m){e=b(m,"SPAN",{class:!0});var w=k(e);t=b(w,"SPAN",{class:!0});var T=k(t);s=B(T,l),c=b(T,"SPAN",{class:!0});var G=k(c);o=B(G,n),G.forEach(h),T.forEach(h),w.forEach(h),this.h()},h(){_(c,"class","opacity-60"),_(t,"class","rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"),_(e,"class",u="comma "+(a[10][a[6]]?"cursor-pointer":"cursor-default"))},m(m,w){S(m,e,w),d(e,t),d(t,s),d(t,c),d(c,o),r||(i=[je(p=at.call(null,e,a[10][a[6]]||"")),he(e,"click",We(Ze(f)))],r=!0)},p(m,w){a=m,w&1&&l!==(l=a[6]+"")&&ne(s,l),w&1&&n!==(n=a[22]+"")&&ne(o,n),w&1&&u!==(u="comma "+(a[10][a[6]]?"cursor-pointer":"cursor-default"))&&_(e,"class",u),p&&qe(p.update)&&w&1&&p.update.call(null,a[10][a[6]]||"")},d(m){m&&h(e),r=!1,Ue(i)}}}function Me(a){let e,t,l,s,c=Ge(a[3])+"",n,o,u,p;return{c(){e=v("span"),t=z("\u2192"),l=P(),s=v("span"),this.h()},l(r){e=b(r,"SPAN",{class:!0});var i=k(e);t=B(i,"\u2192"),i.forEach(h),l=C(r),s=b(r,"SPAN",{class:!0});var f=k(s);f.forEach(h),this.h()},h(){_(e,"class","font-bold"),_(s,"class",n="rounded hover:bg-gray-400 "+(a[2]?"cursor-pointer":"cursor-default"))},m(r,i){S(r,e,i),d(e,t),S(r,l,i),S(r,s,i),s.innerHTML=c,u||(p=[je(o=at.call(null,s,a[2]||"")),he(s,"click",We(Ze(a[13])))],u=!0)},p(r,i){i&8&&c!==(c=Ge(r[3])+"")&&(s.innerHTML=c),i&4&&n!==(n="rounded hover:bg-gray-400 "+(r[2]?"cursor-pointer":"cursor-default"))&&_(s,"class",n),o&&qe(o.update)&&i&4&&o.update.call(null,r[2]||"")},d(r){r&&h(e),r&&h(l),r&&h(s),u=!1,Ue(p)}}}function Te(a){var p;let e,t,l,s=((p=a[7])==null?void 0:p.length)+"",c,n,o,u;return{c(){e=v("div"),t=v("button"),l=z("Expand "),c=z(s),n=z(" parameters"),this.h()},l(r){e=b(r,"DIV",{class:!0});var i=k(e);t=b(i,"BUTTON",{class:!0});var f=k(t);l=B(f,"Expand "),c=B(f,s),n=B(f," parameters"),f.forEach(h),i.forEach(h),this.h()},h(){_(t,"class","absolute leading-tight px-3 py-1.5 dark:bg-gray-900 bg-black text-gray-200 hover:text-white rounded-xl bottom-12 ring-offset-2 hover:ring-black hover:ring-2"),_(e,"class","absolute inset-0 bg-gradient-to-t from-white to-white/0 dark:from-gray-950 dark:to-gray-950/0 z-10 flex justify-center")},m(r,i){S(r,e,i),d(e,t),d(t,l),d(t,c),d(t,n),o||(u=he(t,"click",a[14]),o=!0)},p(r,i){var f;i&128&&s!==(s=((f=r[7])==null?void 0:f.length)+"")&&ne(c,s)},d(r){r&&h(e),o=!1,u()}}}function He(a){let e,t,l,s,c,n,o=a[7],u=[];for(let r=0;r<o.length;r+=1)u[r]=Ve(Ae(a,o,r));const p=r=>O(u[r],1,1,()=>{u[r]=null});return{c(){e=v("p"),t=z("Parameters "),l=v("span"),s=P(),c=v("ul");for(let r=0;r<u.length;r+=1)u[r].c();this.h()},l(r){e=b(r,"P",{class:!0});var i=k(e);t=B(i,"Parameters "),l=b(i,"SPAN",{class:!0}),k(l).forEach(h),i.forEach(h),s=C(r),c=b(r,"UL",{class:!0});var f=k(c);for(let m=0;m<u.length;m+=1)u[m].l(f);f.forEach(h),this.h()},h(){_(l,"class","flex-auto border-t-2 border-gray-100 dark:border-gray-700 ml-3"),_(e,"class","flex items-center font-semibold !mt-2 !mb-2 text-gray-800"),_(c,"class","px-2")},m(r,i){S(r,e,i),d(e,t),d(e,l),S(r,s,i),S(r,c,i);for(let f=0;f<u.length;f+=1)u[f].m(c,null);n=!0},p(r,i){if(i&128){o=r[7];let f;for(f=0;f<o.length;f+=1){const m=Ae(r,o,f);u[f]?(u[f].p(m,i),U(u[f],1)):(u[f]=Ve(m),u[f].c(),U(u[f],1),u[f].m(c,null))}for(Ke(),f=o.length;f<u.length;f+=1)p(f);$e()}},i(r){if(!n){for(let i=0;i<o.length;i+=1)U(u[i]);n=!0}},o(r){u=u.filter(Boolean);for(let i=0;i<u.length;i+=1)O(u[i]);n=!1},d(r){r&&h(e),r&&h(s),r&&h(c),de(u,r)}}}function Ve(a){let e,t,l,s,c,n,o,u,p,r=a[19]+"",i,f;return c=new lt({props:{classNames:"text-smd"}}),{c(){e=v("li"),t=v("span"),l=v("a"),s=v("span"),Fe(c.$$.fragment),u=P(),p=v("span"),i=P(),this.h()},l(m){e=b(m,"LI",{class:!0});var w=k(e);t=b(w,"SPAN",{class:!0});var T=k(t);l=b(T,"A",{id:!0,class:!0,href:!0});var G=k(l);s=b(G,"SPAN",{});var R=k(s);Oe(c.$$.fragment,R),R.forEach(h),G.forEach(h),u=C(T),p=b(T,"SPAN",{});var W=k(p);W.forEach(h),T.forEach(h),i=C(w),w.forEach(h),this.h()},h(){_(l,"id",n=a[5]),_(l,"class","header-link block pr-0.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(l,"href",o=`#${a[5]}`),_(t,"class","group flex space-x-1.5 items-start"),_(e,"class","text-base !pl-4 my-3")},m(m,w){S(m,e,w),d(e,t),d(t,l),d(l,s),Qe(c,s,null),d(t,u),d(t,p),p.innerHTML=r,d(e,i),f=!0},p(m,w){(!f||w&128&&n!==(n=m[5]))&&_(l,"id",n),(!f||w&128&&o!==(o=`#${m[5]}`))&&_(l,"href",o),(!f||w&128)&&r!==(r=m[19]+"")&&(p.innerHTML=r)},i(m){f||(U(c.$$.fragment,m),f=!0)},o(m){O(c.$$.fragment,m),f=!1},d(m){m&&h(e),Je(c)}}}function xe(a){let e,t=a[1],l=[];for(let s=0;s<t.length;s+=1)l[s]=De(Ce(a,t,s));return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=Q()},l(s){for(let c=0;c<l.length;c+=1)l[c].l(s);e=Q()},m(s,c){for(let n=0;n<l.length;n+=1)l[n].m(s,c);S(s,e,c)},p(s,c){if(c&2){t=s[1];let n;for(n=0;n<t.length;n+=1){const o=Ce(s,t,n);l[n]?l[n].p(o,c):(l[n]=De(o),l[n].c(),l[n].m(e.parentNode,e))}for(;n<l.length;n+=1)l[n].d(1);l.length=t.length}},d(s){de(l,s),s&&h(e)}}}function De(a){let e,t=a[16]+"",l,s,c,n,o,u=a[7]+"";return{c(){e=v("p"),l=z(t),s=P(),c=v("span"),n=P(),o=v("p"),this.h()},l(p){e=b(p,"P",{class:!0});var r=k(e);l=B(r,t),s=C(r),c=b(r,"SPAN",{class:!0}),k(c).forEach(h),r.forEach(h),n=C(p),o=b(p,"P",{});var i=k(o);i.forEach(h),this.h()},h(){_(c,"class","flex-auto border-t-2 ml-3"),_(e,"class","flex items-center font-semibold")},m(p,r){S(p,e,r),d(e,l),d(e,s),d(e,c),S(p,n,r),S(p,o,r),o.innerHTML=u},p(p,r){r&2&&t!==(t=p[16]+"")&&ne(l,t),r&2&&u!==(u=p[7]+"")&&(o.innerHTML=u)},d(p){p&&h(e),p&&h(n),p&&h(o)}}}function Ie(a){let e,t,l,s,c,n,o,u,p,r=(a[2]||"")+"",i=!!a[3]&&ze(a);return{c(){e=v("div"),t=v("p"),l=z("Returns"),s=P(),i&&i.c(),c=P(),n=v("span"),u=P(),p=v("p"),this.h()},l(f){e=b(f,"DIV",{class:!0,id:!0});var m=k(e);t=b(m,"P",{class:!0});var w=k(t);l=B(w,"Returns"),w.forEach(h),s=C(m),i&&i.l(m),c=C(m),n=b(m,"SPAN",{class:!0}),k(n).forEach(h),m.forEach(h),u=C(f),p=b(f,"P",{class:!0});var T=k(p);T.forEach(h),this.h()},h(){_(t,"class","text-base"),_(n,"class","flex-auto border-t-2 border-gray-100 dark:border-gray-700"),_(e,"class","flex items-center font-semibold space-x-3 text-base !mt-0 !mb-0 text-gray-800"),_(e,"id",o=`${a[5]}.returns`),_(p,"class","text-base")},m(f,m){S(f,e,m),d(e,t),d(t,l),d(e,s),i&&i.m(e,null),d(e,c),d(e,n),S(f,u,m),S(f,p,m),p.innerHTML=r},p(f,m){f[3]?i?i.p(f,m):(i=ze(f),i.c(),i.m(e,c)):i&&(i.d(1),i=null),m&32&&o!==(o=`${f[5]}.returns`)&&_(e,"id",o),m&4&&r!==(r=(f[2]||"")+"")&&(p.innerHTML=r)},d(f){f&&h(e),i&&i.d(),f&&h(u),f&&h(p)}}}function ze(a){let e,t;return{c(){e=new et,t=Q(),this.h()},l(l){e=tt(l),t=Q(),this.h()},h(){e.a=t},m(l,s){e.m(a[3],l,s),S(l,t,s)},p(l,s){s&8&&e.p(l[3])},d(l){l&&h(t),l&&e.d()}}}function mt(a){let e,t,l,s=Be(a[6])+"",c,n,o,u,p,r,i,f,m,w,T,G,R,W,E,A,Y,J,ie,ee,K,oe,fe,ce,M,te,le,ae,re,X;o=new lt({});let Z=a[0],H=[];for(let g=0;g<Z.length;g+=1)H[g]=Se(Ne(a,Z,g));let V=a[3]&&Me(a),x=a[9]&&Te(a),N=!!a[7]&&He(a),D=a[1]&&xe(a),I=!!a[3]&&Ie(a);return{c(){e=v("div"),t=v("span"),l=new et,c=P(),n=v("a"),Fe(o.$$.fragment),p=P(),r=v("a"),i=v("span"),f=z("<"),m=P(),w=v("span"),T=z("source"),G=P(),R=v("span"),W=z(">"),E=P(),A=v("p"),Y=v("span"),J=z("("),ie=P();for(let g=0;g<H.length;g+=1)H[g].c();ee=P(),K=v("span"),oe=z(")"),fe=P(),V&&V.c(),ce=P(),M=v("div"),x&&x.c(),te=P(),N&&N.c(),le=P(),D&&D.c(),ae=P(),I&&I.c(),this.h()},l(g){e=b(g,"DIV",{});var y=k(e);t=b(y,"SPAN",{class:!0,id:!0});var L=k(t);l=tt(L),c=C(L),n=b(L,"A",{id:!0,class:!0,href:!0});var $=k(n);Oe(o.$$.fragment,$),$.forEach(h),p=C(L),r=b(L,"A",{class:!0,href:!0,target:!0});var F=k(r);i=b(F,"SPAN",{});var pe=k(i);f=B(pe,"<"),pe.forEach(h),m=C(F),w=b(F,"SPAN",{class:!0});var me=k(w);T=B(me,"source"),me.forEach(h),G=C(F),R=b(F,"SPAN",{});var _e=k(R);W=B(_e,">"),_e.forEach(h),F.forEach(h),L.forEach(h),E=C(y),A=b(y,"P",{class:!0});var j=k(A);Y=b(j,"SPAN",{});var ge=k(Y);J=B(ge,"("),ge.forEach(h),ie=C(j);for(let ue=0;ue<H.length;ue+=1)H[ue].l(j);ee=C(j),K=b(j,"SPAN",{});var ve=k(K);oe=B(ve,")"),ve.forEach(h),fe=C(j),V&&V.l(j),j.forEach(h),ce=C(y),M=b(y,"DIV",{class:!0});var q=k(M);x&&x.l(q),te=C(q),N&&N.l(q),le=C(q),D&&D.l(q),ae=C(q),I&&I.l(q),q.forEach(h),y.forEach(h),this.h()},h(){l.a=c,_(n,"id",a[5]),_(n,"class","header-link invisible with-hover:group-hover:visible pr-2"),_(n,"href",u="#"+a[5]),_(w,"class","hidden md:block mx-0.5 hover:!underline"),_(r,"class","!ml-auto !text-gray-400 !no-underline text-sm flex items-center"),_(r,"href",a[4]),_(r,"target","_blank"),_(t,"class","group flex space-x-1.5 items-center text-gray-800 bg-gradient-to-r rounded-tr-lg -mt-4 -ml-4 pt-3 px-2.5"),_(t,"id",a[5]),_(A,"class","font-mono text-xs md:text-sm !leading-relaxed !my-6"),_(M,"class",re="!mb-10 relative docstring-details "+(a[9]?"max-h-96 overflow-hidden":""))},m(g,y){S(g,e,y),d(e,t),l.m(s,t),d(t,c),d(t,n),Qe(o,n,null),d(t,p),d(t,r),d(r,i),d(i,f),d(r,m),d(r,w),d(w,T),d(r,G),d(r,R),d(R,W),d(e,E),d(e,A),d(A,Y),d(Y,J),d(A,ie);for(let L=0;L<H.length;L+=1)H[L].m(A,null);d(A,ee),d(A,K),d(K,oe),d(A,fe),V&&V.m(A,null),d(e,ce),d(e,M),x&&x.m(M,null),d(M,te),N&&N.m(M,null),d(M,le),D&&D.m(M,null),d(M,ae),I&&I.m(M,null),a[15](M),X=!0},p(g,[y]){if((!X||y&64)&&s!==(s=Be(g[6])+"")&&l.p(s),(!X||y&32)&&_(n,"id",g[5]),(!X||y&32&&u!==(u="#"+g[5]))&&_(n,"href",u),(!X||y&16)&&_(r,"href",g[4]),(!X||y&32)&&_(t,"id",g[5]),y&3105){Z=g[0];let L;for(L=0;L<Z.length;L+=1){const $=Ne(g,Z,L);H[L]?H[L].p($,y):(H[L]=Se($),H[L].c(),H[L].m(A,ee))}for(;L<H.length;L+=1)H[L].d(1);H.length=Z.length}g[3]?V?V.p(g,y):(V=Me(g),V.c(),V.m(A,null)):V&&(V.d(1),V=null),g[9]?x?x.p(g,y):(x=Te(g),x.c(),x.m(M,te)):x&&(x.d(1),x=null),g[7]?N?(N.p(g,y),y&128&&U(N,1)):(N=He(g),N.c(),U(N,1),N.m(M,le)):N&&(Ke(),O(N,1,1,()=>{N=null}),$e()),g[1]?D?D.p(g,y):(D=xe(g),D.c(),D.m(M,ae)):D&&(D.d(1),D=null),g[3]?I?I.p(g,y):(I=Ie(g),I.c(),I.m(M,null)):I&&(I.d(1),I=null),(!X||y&512&&re!==(re="!mb-10 relative docstring-details "+(g[9]?"max-h-96 overflow-hidden":"")))&&_(M,"class",re)},i(g){X||(U(o.$$.fragment,g),U(N),X=!0)},o(g){O(o.$$.fragment,g),O(N),X=!1},d(g){g&&h(e),Je(o),de(H,g),V&&V.d(),x&&x.d(),N&&N.d(),D&&D.d(),I&&I.d(),a[15](null)}}}function Be(a){if(a.startsWith("class ")){const e=a.substring(6).split("."),t=e.pop();return`<h3 class="!m-0"><span class="flex-1 break-all md:text-lg bg-gradient-to-r px-2.5 py-1.5 rounded-xl from-indigo-50/70 to-white dark:from-gray-900 dark:to-gray-950 dark:text-indigo-300 text-indigo-700"><svg class="mr-1.5 text-indigo-500 inline-block -mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width=".8em" height=".8em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path class="uim-quaternary" d="M20.23 7.24L12 12L3.77 7.24a1.98 1.98 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71z" opacity=".25" fill="currentColor"></path><path class="uim-tertiary" d="M12 12v9.5a2.09 2.09 0 0 1-.91-.21L4.5 17.48a2.003 2.003 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01L12 12z" opacity=".5" fill="currentColor"></path><path class="uim-primary" d="M20.5 8.25v7.5a2.003 2.003 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01z" fill="currentColor"></path></svg><span class="font-light">class</span> <span class="font-medium">${e.join(".")}.</span><span class="font-semibold">${t}</span></span></h3>`}else return`<h4 class="!m-0"><span class="flex-1 rounded-xl py-0.5 break-all bg-gradient-to-r from-blue-50/60 to-white dark:from-gray-900 dark:to-gray-950 text-blue-700 dark:text-blue-300 font-medium px-2"><svg width="1em" height="1em" viewBox="0 0 32 33" class="mr-1 inline-block -mt-0.5"  xmlns="http://www.w3.org/2000/svg"><path d="M5.80566 18.3545C4.90766 17.4565 4.90766 16.0005 5.80566 15.1025L14.3768 6.53142C15.2748 5.63342 16.7307 5.63342 17.6287 6.53142L26.1999 15.1025C27.0979 16.0005 27.0979 17.4565 26.1999 18.3545L17.6287 26.9256C16.7307 27.8236 15.2748 27.8236 14.3768 26.9256L5.80566 18.3545Z" fill="currentColor" fill-opacity="0.25"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.4801 13.9619C16.4801 12.9761 16.7467 12.5436 16.9443 12.3296C17.1764 12.078 17.5731 11.8517 18.2275 11.707C18.8821 11.5623 19.638 11.5342 20.4038 11.5582C20.7804 11.57 21.1341 11.5932 21.4719 11.6156L21.5263 11.6193C21.8195 11.6389 22.1626 11.6618 22.4429 11.6618V7.40825C22.3209 7.40825 22.1219 7.39596 21.7544 7.37149C21.4202 7.34925 20.9976 7.32115 20.5371 7.30672C19.6286 7.27824 18.4672 7.29779 17.3093 7.55377C16.1512 7.8098 14.8404 8.33724 13.8181 9.4452C12.7612 10.5907 12.2266 12.1236 12.2266 13.9619V15.0127H10.6836V19.2662H12.2266V26.6332H16.4801V19.2662H20.3394V15.0127H16.4801V13.9619Z" fill="currentColor"/></svg>${a}</span></h4>`}function Ge(a){const e=/\s*<p>(((?!<p>).)*)<\/p>\s*/gms;return a.replace(e,(t,l)=>`<span>${l}</span>`)}function _t(a,e,t){let{anchor:l}=e,{name:s}=e,{parameters:c=[]}=e,{parametersDescription:n}=e,{parameterGroups:o}=e,{returnDescription:u}=e,{returnType:p}=e,{source:r}=e,i,f=!1;const m=(n==null?void 0:n.reduce((E,A)=>{const{name:Y,description:J}=A;return Ee(we({},E),{[Y]:J})},{}))||{};ft(()=>{const{hash:E}=window.location,A=!!E&&(n==null?void 0:n.some(({anchor:Y})=>Y===E.substring(1)));t(9,f=!A&&i.clientHeight>500)});async function w(E,A){A&&(t(9,f=!1),await ct(),window.location.hash=E)}const T=E=>w(`${l}.${E}`,!!m[E]),G=()=>w(`${l}.returns`,!!u),R=()=>t(9,f=!1);function W(E){ut[E?"unshift":"push"](()=>{i=E,t(8,i)})}return a.$$set=E=>{"anchor"in E&&t(5,l=E.anchor),"name"in E&&t(6,s=E.name),"parameters"in E&&t(0,c=E.parameters),"parametersDescription"in E&&t(7,n=E.parametersDescription),"parameterGroups"in E&&t(1,o=E.parameterGroups),"returnDescription"in E&&t(2,u=E.returnDescription),"returnType"in E&&t(3,p=E.returnType),"source"in E&&t(4,r=E.source)},[c,o,u,p,r,l,s,n,i,f,m,w,T,G,R,W]}class kt extends Re{constructor(e){super();Xe(this,e,_t,mt,Ye,{anchor:5,name:6,parameters:0,parametersDescription:7,parameterGroups:1,returnDescription:2,returnType:3,source:4})}}export{kt as D};
