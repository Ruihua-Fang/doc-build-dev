var G1=Object.defineProperty,I1=Object.defineProperties;var B1=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var z1=Object.prototype.hasOwnProperty,R1=Object.prototype.propertyIsEnumerable;var K=(s,e,t)=>e in s?G1(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Q=(s,e)=>{for(var t in e||(e={}))z1.call(e,t)&&K(s,t,e[t]);if(J)for(var t of J(e))R1.call(e,t)&&K(s,t,e[t]);return s},$=(s,e)=>I1(s,B1(e));import{S as v1,i as b1,s as C1,e as C,c as k,a as w,d as _,b as v,f as q,g as S,l as X,L as e1,t as V,k as M,h as G,m as H,F as g,V as k1,P as F,W as w1,j as W,X as E1,R as y1,Y as L1,G as O,q as z,w as P1,x as S1,y as A1,o as Z,B as M1,n as H1,p as N1,Z as x1,_ as T1,v as Y1,$ as Z1,E as X1,a0 as j1}from"./vendor-0d3f0756.js";import{I as D1}from"./IconCopyLink-9193371d.js";function t1(s){let e,t;return{c(){e=C("div"),this.h()},l(l){e=k(l,"DIV",{class:!0,style:!0,id:!0});var n=w(e);n.forEach(_),this.h()},h(){v(e,"class",t="absolute text-base py-1.5 p-2 break-words bg-white border-2 border-black dark:border-gray-500 rounded shadow-alternate-xl z-50 "+(s[0].length>1e3?"max-w-lg":"max-w-xs")),q(e,"top",s[2]+15+"px"),q(e,"left",s[1]+15+"px"),v(e,"id",s[3])},m(l,n){S(l,e,n),e.innerHTML=s[0]},p(l,n){n&1&&(e.innerHTML=l[0]),n&1&&t!==(t="absolute text-base py-1.5 p-2 break-words bg-white border-2 border-black dark:border-gray-500 rounded shadow-alternate-xl z-50 "+(l[0].length>1e3?"max-w-lg":"max-w-xs"))&&v(e,"class",t),n&4&&q(e,"top",l[2]+15+"px"),n&2&&q(e,"left",l[1]+15+"px"),n&8&&v(e,"id",l[3])},d(l){l&&_(e)}}}function q1(s){let e,t=s[0]&&t1(s);return{c(){t&&t.c(),e=X()},l(l){t&&t.l(l),e=X()},m(l,n){t&&t.m(l,n),S(l,e,n)},p(l,[n]){l[0]?t?t.p(l,n):(t=t1(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:e1,o:e1,d(l){t&&t.d(l),l&&_(e)}}}function W1(s,e,t){let{txt:l}=e,{x:n}=e,{y:f}=e,{id:o}=e;return s.$$set=c=>{"txt"in c&&t(0,l=c.txt),"x"in c&&t(1,n=c.x),"y"in c&&t(2,f=c.y),"id"in c&&t(3,o=c.id)},[l,n,f,o]}class F1 extends v1{constructor(e){super();b1(this,e,W1,q1,C1,{txt:0,x:1,y:2,id:3})}}const l1="docstring-tooltip";function V1(s,e){let t;function l(c){o(),t=new F1({props:{txt:e,x:c.pageX,y:c.pageY,id:l1},target:document.body})}function n(c){t.$set({x:c.pageX,y:c.pageY})}function f(){t.$destroy()}function o(){var h;const c=document.getElementById(l1);c&&((h=c.parentNode)==null||h.removeChild(c))}return s.addEventListener("mouseover",l),s.addEventListener("mouseleave",f),s.addEventListener("mousemove",n),{destroy(){s.removeEventListener("mouseover",l),s.removeEventListener("mouseleave",f),s.removeEventListener("mousemove",n)}}}const{window:O1}=Z1;function s1(s,e,t){const l=s.slice();return l[21]=e[t].title,l[9]=e[t].parametersDescription,l}function a1(s,e,t){const l=s.slice();return l[7]=e[t].anchor,l[24]=e[t].description,l}function r1(s,e,t){const l=s.slice();return l[8]=e[t].name,l[27]=e[t].val,l}function n1(s){let e,t,l,n,f,o,c,h,m;return{c(){e=C("a"),t=C("span"),l=V("<"),n=M(),f=C("span"),o=V("source"),c=M(),h=C("span"),m=V(">"),this.h()},l(a){e=k(a,"A",{class:!0,href:!0,target:!0});var i=w(e);t=k(i,"SPAN",{});var r=w(t);l=G(r,"<"),r.forEach(_),n=H(i),f=k(i,"SPAN",{class:!0});var d=w(f);o=G(d,"source"),d.forEach(_),c=H(i),h=k(i,"SPAN",{});var u=w(h);m=G(u,">"),u.forEach(_),i.forEach(_),this.h()},h(){v(f,"class","hidden md:block mx-0.5 hover:!underline"),v(e,"class","!ml-auto !text-gray-400 !no-underline text-sm flex items-center"),v(e,"href",s[5]),v(e,"target","_blank")},m(a,i){S(a,e,i),g(e,t),g(t,l),g(e,n),g(e,f),g(f,o),g(e,c),g(e,h),g(h,m)},p(a,i){i&32&&v(e,"href",a[5])},d(a){a&&_(e)}}}function i1(s){let e,t,l,n,f,o,c,h,m=s[1],a=[];for(let r=0;r<m.length;r+=1)a[r]=o1(r1(s,m,r));let i=s[4]&&f1(s);return{c(){e=C("p"),t=C("span"),l=V("("),n=M();for(let r=0;r<a.length;r+=1)a[r].c();f=M(),o=C("span"),c=V(")"),h=M(),i&&i.c(),this.h()},l(r){e=k(r,"P",{class:!0});var d=w(e);t=k(d,"SPAN",{});var u=w(t);l=G(u,"("),u.forEach(_),n=H(d);for(let A=0;A<a.length;A+=1)a[A].l(d);f=H(d),o=k(d,"SPAN",{});var E=w(o);c=G(E,")"),E.forEach(_),h=H(d),i&&i.l(d),d.forEach(_),this.h()},h(){v(e,"class","font-mono text-xs md:text-sm !leading-relaxed !my-6")},m(r,d){S(r,e,d),g(e,t),g(t,l),g(e,n);for(let u=0;u<a.length;u+=1)a[u].m(e,null);g(e,f),g(e,o),g(o,c),g(e,h),i&&i.m(e,null)},p(r,d){if(d&12418){m=r[1];let u;for(u=0;u<m.length;u+=1){const E=r1(r,m,u);a[u]?a[u].p(E,d):(a[u]=o1(E),a[u].c(),a[u].m(e,f))}for(;u<a.length;u+=1)a[u].d(1);a.length=m.length}r[4]?i?i.p(r,d):(i=f1(r),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(r){r&&_(e),O(a,r),i&&i.d()}}}function o1(s){let e,t,l=s[8]+"",n,f,o=s[27]+"",c,h,m,a,i;function r(){return s[16](s[8])}return{c(){e=C("span"),t=C("span"),n=V(l),f=C("span"),c=V(o),this.h()},l(d){e=k(d,"SPAN",{class:!0});var u=w(e);t=k(u,"SPAN",{class:!0});var E=w(t);n=G(E,l),f=k(E,"SPAN",{class:!0});var A=w(f);c=G(A,o),A.forEach(_),E.forEach(_),u.forEach(_),this.h()},h(){v(f,"class","opacity-60"),v(t,"class","rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"),v(e,"class",h="comma "+(s[12][s[8]]?"cursor-pointer":"cursor-default"))},m(d,u){S(d,e,u),g(e,t),g(t,n),g(t,f),g(f,c),a||(i=[k1(m=V1.call(null,e,s[12][s[8]]||"")),F(e,"click",w1(L1(r)))],a=!0)},p(d,u){s=d,u&2&&l!==(l=s[8]+"")&&W(n,l),u&2&&o!==(o=s[27]+"")&&W(c,o),u&2&&h!==(h="comma "+(s[12][s[8]]?"cursor-pointer":"cursor-default"))&&v(e,"class",h),m&&E1(m.update)&&u&2&&m.update.call(null,s[12][s[8]]||"")},d(d){d&&_(e),a=!1,y1(i)}}}function f1(s){let e,t,l,n,f=g1(s[4])+"",o,c,h,m;return{c(){e=C("span"),t=V("\u2192"),l=M(),n=C("span"),this.h()},l(a){e=k(a,"SPAN",{class:!0});var i=w(e);t=G(i,"\u2192"),i.forEach(_),l=H(a),n=k(a,"SPAN",{class:!0});var r=w(n);r.forEach(_),this.h()},h(){v(e,"class","font-bold"),v(n,"class",o="rounded hover:bg-gray-400 "+(s[3]?"cursor-pointer":"cursor-default"))},m(a,i){S(a,e,i),g(e,t),S(a,l,i),S(a,n,i),n.innerHTML=f,h||(m=[k1(c=V1.call(null,n,s[3]||"")),F(n,"click",w1(L1(s[17])))],h=!0)},p(a,i){i&16&&f!==(f=g1(a[4])+"")&&(n.innerHTML=f),i&8&&o!==(o="rounded hover:bg-gray-400 "+(a[3]?"cursor-pointer":"cursor-default"))&&v(n,"class",o),c&&E1(c.update)&&i&8&&c.update.call(null,a[3]||"")},d(a){a&&_(e),a&&_(l),a&&_(n),h=!1,y1(m)}}}function c1(s){var m;let e,t,l,n=((m=s[9])==null?void 0:m.length)+"",f,o,c,h;return{c(){e=C("div"),t=C("button"),l=V("Expand "),f=V(n),o=V(" parameters"),this.h()},l(a){e=k(a,"DIV",{class:!0});var i=w(e);t=k(i,"BUTTON",{class:!0});var r=w(t);l=G(r,"Expand "),f=G(r,n),o=G(r," parameters"),r.forEach(_),i.forEach(_),this.h()},h(){v(t,"class","absolute leading-tight px-3 py-1.5 dark:bg-gray-900 bg-black text-gray-200 hover:text-white rounded-xl bottom-12 ring-offset-2 hover:ring-black hover:ring-2"),v(e,"class","absolute inset-0 bg-gradient-to-t from-white to-white/0 dark:from-gray-950 dark:to-gray-950/0 z-10 flex justify-center")},m(a,i){S(a,e,i),g(e,t),g(t,l),g(t,f),g(t,o),c||(h=F(t,"click",s[18]),c=!0)},p(a,i){var r;i&512&&n!==(n=((r=a[9])==null?void 0:r.length)+"")&&W(f,n)},d(a){a&&_(e),c=!1,h()}}}function u1(s){let e,t,l,n,f,o,c=s[9],h=[];for(let a=0;a<c.length;a+=1)h[a]=h1(a1(s,c,a));const m=a=>Z(h[a],1,1,()=>{h[a]=null});return{c(){e=C("p"),t=V("Parameters "),l=C("span"),n=M(),f=C("ul");for(let a=0;a<h.length;a+=1)h[a].c();this.h()},l(a){e=k(a,"P",{class:!0});var i=w(e);t=G(i,"Parameters "),l=k(i,"SPAN",{class:!0}),w(l).forEach(_),i.forEach(_),n=H(a),f=k(a,"UL",{class:!0});var r=w(f);for(let d=0;d<h.length;d+=1)h[d].l(r);r.forEach(_),this.h()},h(){v(l,"class","flex-auto border-t-2 border-gray-100 dark:border-gray-700 ml-3"),v(e,"class","flex items-center font-semibold !mt-2 !mb-2 text-gray-800"),v(f,"class","px-2")},m(a,i){S(a,e,i),g(e,t),g(e,l),S(a,n,i),S(a,f,i);for(let r=0;r<h.length;r+=1)h[r].m(f,null);o=!0},p(a,i){if(i&513){c=a[9];let r;for(r=0;r<c.length;r+=1){const d=a1(a,c,r);h[r]?(h[r].p(d,i),z(h[r],1)):(h[r]=h1(d),h[r].c(),z(h[r],1),h[r].m(f,null))}for(H1(),r=c.length;r<h.length;r+=1)m(r);N1()}},i(a){if(!o){for(let i=0;i<c.length;i+=1)z(h[i]);o=!0}},o(a){h=h.filter(Boolean);for(let i=0;i<h.length;i+=1)Z(h[i]);o=!1},d(a){a&&_(e),a&&_(n),a&&_(f),O(h,a)}}}function h1(s){let e,t,l,n,f,o,c,h,m,a=s[24]+"",i,r,d;return f=new D1({props:{classNames:"text-smd"}}),{c(){e=C("li"),t=C("span"),l=C("a"),n=C("span"),P1(f.$$.fragment),h=M(),m=C("span"),i=M(),this.h()},l(u){e=k(u,"LI",{class:!0});var E=w(e);t=k(E,"SPAN",{class:!0});var A=w(t);l=k(A,"A",{id:!0,class:!0,href:!0});var D=w(l);n=k(D,"SPAN",{});var I=w(n);S1(f.$$.fragment,I),I.forEach(_),D.forEach(_),h=H(A),m=k(A,"SPAN",{});var R=w(m);R.forEach(_),A.forEach(_),i=H(E),E.forEach(_),this.h()},h(){v(l,"id",o=s[7]),v(l,"class","header-link block pr-0.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(l,"href",c=`#${s[7]}`),v(t,"class","group flex space-x-1.5 items-start"),v(e,"class",r="text-base !pl-4 my-3 rounded "+(s[0]===s[7]?j:""))},m(u,E){S(u,e,E),g(e,t),g(t,l),g(l,n),A1(f,n,null),g(t,h),g(t,m),m.innerHTML=a,g(e,i),d=!0},p(u,E){(!d||E&512&&o!==(o=u[7]))&&v(l,"id",o),(!d||E&512&&c!==(c=`#${u[7]}`))&&v(l,"href",c),(!d||E&512)&&a!==(a=u[24]+"")&&(m.innerHTML=a),(!d||E&513&&r!==(r="text-base !pl-4 my-3 rounded "+(u[0]===u[7]?j:"")))&&v(e,"class",r)},i(u){d||(z(f.$$.fragment,u),d=!0)},o(u){Z(f.$$.fragment,u),d=!1},d(u){u&&_(e),M1(f)}}}function d1(s){let e,t=s[2],l=[];for(let n=0;n<t.length;n+=1)l[n]=m1(s1(s,t,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=X()},l(n){for(let f=0;f<l.length;f+=1)l[f].l(n);e=X()},m(n,f){for(let o=0;o<l.length;o+=1)l[o].m(n,f);S(n,e,f)},p(n,f){if(f&4){t=n[2];let o;for(o=0;o<t.length;o+=1){const c=s1(n,t,o);l[o]?l[o].p(c,f):(l[o]=m1(c),l[o].c(),l[o].m(e.parentNode,e))}for(;o<l.length;o+=1)l[o].d(1);l.length=t.length}},d(n){O(l,n),n&&_(e)}}}function m1(s){let e,t=s[21]+"",l,n,f,o,c,h=s[9]+"";return{c(){e=C("p"),l=V(t),n=M(),f=C("span"),o=M(),c=C("p"),this.h()},l(m){e=k(m,"P",{class:!0});var a=w(e);l=G(a,t),n=H(a),f=k(a,"SPAN",{class:!0}),w(f).forEach(_),a.forEach(_),o=H(m),c=k(m,"P",{});var i=w(c);i.forEach(_),this.h()},h(){v(f,"class","flex-auto border-t-2 ml-3"),v(e,"class","flex items-center font-semibold")},m(m,a){S(m,e,a),g(e,l),g(e,n),g(e,f),S(m,o,a),S(m,c,a),c.innerHTML=h},p(m,a){a&4&&t!==(t=m[21]+"")&&W(l,t),a&4&&h!==(h=m[9]+"")&&(c.innerHTML=h)},d(m){m&&_(e),m&&_(o),m&&_(c)}}}function p1(s){let e,t,l,n,f,o,c,h,m,a,i=(s[3]||"")+"",r=!!s[4]&&_1(s);return{c(){e=C("div"),t=C("p"),l=V("Returns"),n=M(),r&&r.c(),f=M(),o=C("span"),m=M(),a=C("p"),this.h()},l(d){e=k(d,"DIV",{class:!0,id:!0});var u=w(e);t=k(u,"P",{class:!0});var E=w(t);l=G(E,"Returns"),E.forEach(_),n=H(u),r&&r.l(u),f=H(u),o=k(u,"SPAN",{class:!0}),w(o).forEach(_),u.forEach(_),m=H(d),a=k(d,"P",{class:!0});var A=w(a);A.forEach(_),this.h()},h(){v(t,"class","text-base"),v(o,"class","flex-auto border-t-2 border-gray-100 dark:border-gray-700"),v(e,"class",c="flex items-center font-semibold space-x-3 text-base !mt-0 !mb-0 text-gray-800 rounded "+(s[0]===s[7]?j:"")),v(e,"id",h=`${s[7]}.returns`),v(a,"class","text-base")},m(d,u){S(d,e,u),g(e,t),g(t,l),g(e,n),r&&r.m(e,null),g(e,f),g(e,o),S(d,m,u),S(d,a,u),a.innerHTML=i},p(d,u){d[4]?r?r.p(d,u):(r=_1(d),r.c(),r.m(e,f)):r&&(r.d(1),r=null),u&129&&c!==(c="flex items-center font-semibold space-x-3 text-base !mt-0 !mb-0 text-gray-800 rounded "+(d[0]===d[7]?j:""))&&v(e,"class",c),u&128&&h!==(h=`${d[7]}.returns`)&&v(e,"id",h),u&8&&i!==(i=(d[3]||"")+"")&&(a.innerHTML=i)},d(d){d&&_(e),r&&r.d(),d&&_(m),d&&_(a)}}}function _1(s){let e,t;return{c(){e=new x1,t=X(),this.h()},l(l){e=T1(l),t=X(),this.h()},h(){e.a=t},m(l,n){e.m(s[4],l,n),S(l,t,n)},p(l,n){n&16&&e.p(l[4])},d(l){l&&_(t),l&&e.d()}}}function U1(s){let e,t,l,n=s[14](s[8])+"",f,o,c,h,m,a,i,r,d,u,E,A,D,I,R;c=new D1({});let N=s[5]&&n1(s),x=!s[6]&&i1(s),T=s[11]&&c1(s),P=!!s[9]&&u1(s),p=s[2]&&d1(s),y=!!s[4]&&p1(s);return{c(){e=C("div"),t=C("span"),l=new x1,f=M(),o=C("a"),P1(c.$$.fragment),m=M(),N&&N.c(),a=M(),x&&x.c(),i=M(),r=C("div"),T&&T.c(),d=M(),P&&P.c(),u=M(),p&&p.c(),E=M(),y&&y.c(),this.h()},l(b){e=k(b,"DIV",{});var L=w(e);t=k(L,"SPAN",{class:!0,id:!0});var Y=w(t);l=T1(Y),f=H(Y),o=k(Y,"A",{id:!0,class:!0,href:!0});var U=w(o);S1(c.$$.fragment,U),U.forEach(_),m=H(Y),N&&N.l(Y),Y.forEach(_),a=H(L),x&&x.l(L),i=H(L),r=k(L,"DIV",{class:!0});var B=w(r);T&&T.l(B),d=H(B),P&&P.l(B),u=H(B),p&&p.l(B),E=H(B),y&&y.l(B),B.forEach(_),L.forEach(_),this.h()},h(){l.a=f,v(o,"id",s[7]),v(o,"class","header-link invisible with-hover:group-hover:visible pr-2"),v(o,"href",h="#"+s[7]),v(t,"class","group flex space-x-1.5 items-center text-gray-800 bg-gradient-to-r rounded-tr-lg -mt-4 -ml-4 pt-3 px-2.5"),v(t,"id",s[7]),v(r,"class",A="!mb-10 relative docstring-details "+(s[11]?"max-h-96 overflow-hidden":""))},m(b,L){S(b,e,L),g(e,t),l.m(n,t),g(t,f),g(t,o),A1(c,o,null),g(t,m),N&&N.m(t,null),g(e,a),x&&x.m(e,null),g(e,i),g(e,r),T&&T.m(r,null),g(r,d),P&&P.m(r,null),g(r,u),p&&p.m(r,null),g(r,E),y&&y.m(r,null),s[19](r),D=!0,I||(R=F(O1,"hashchange",s[15]),I=!0)},p(b,[L]){(!D||L&256)&&n!==(n=b[14](b[8])+"")&&l.p(n),(!D||L&128)&&v(o,"id",b[7]),(!D||L&128&&h!==(h="#"+b[7]))&&v(o,"href",h),b[5]?N?N.p(b,L):(N=n1(b),N.c(),N.m(t,null)):N&&(N.d(1),N=null),(!D||L&128)&&v(t,"id",b[7]),b[6]?x&&(x.d(1),x=null):x?x.p(b,L):(x=i1(b),x.c(),x.m(e,i)),b[11]?T?T.p(b,L):(T=c1(b),T.c(),T.m(r,d)):T&&(T.d(1),T=null),b[9]?P?(P.p(b,L),L&512&&z(P,1)):(P=u1(b),P.c(),z(P,1),P.m(r,u)):P&&(H1(),Z(P,1,1,()=>{P=null}),N1()),b[2]?p?p.p(b,L):(p=d1(b),p.c(),p.m(r,E)):p&&(p.d(1),p=null),b[4]?y?y.p(b,L):(y=p1(b),y.c(),y.m(r,null)):y&&(y.d(1),y=null),(!D||L&2048&&A!==(A="!mb-10 relative docstring-details "+(b[11]?"max-h-96 overflow-hidden":"")))&&v(r,"class",A)},i(b){D||(z(c.$$.fragment,b),z(P),D=!0)},o(b){Z(c.$$.fragment,b),Z(P),D=!1},d(b){b&&_(e),M1(c),N&&N.d(),x&&x.d(),T&&T.d(),P&&P.d(),p&&p.d(),y&&y.d(),s[19](null),I=!1,R()}}}const j="bg-yellow-50 dark:bg-[#494a3d]";function g1(s){const e=/\s*<p>(((?!<p>).)*)<\/p>\s*/gms;return s.replace(e,(t,l)=>`<span>${l}</span>`)}function J1(s,e,t){let{anchor:l}=e,{name:n}=e,{parameters:f=[]}=e,{parametersDescription:o}=e,{parameterGroups:c}=e,{returnDescription:h}=e,{returnType:m}=e,{source:a=void 0}=e,{hashlink:i}=e,{isGetSetDescriptor:r=!1}=e,d,u,E=!1;const A=(o==null?void 0:o.reduce((p,y)=>{const{name:b,description:L}=y;return $(Q({},p),{[b]:L})},{}))||{};Y1(()=>{const{hash:p}=window.location;t(0,i=p.substring(1));const y=!!p&&(o==null?void 0:o.some(({anchor:b})=>b===i));t(11,E=!y&&d.clientHeight>500),R()});async function D(p,y){y&&(t(11,E=!1),await X1(),window.location.hash=p)}function I(p){if(p.startsWith("class ")){const y=p.substring(6).split("."),b=y.pop();return`<h3 class="!m-0"><span class="flex-1 break-all md:text-lg bg-gradient-to-r px-2.5 py-1.5 rounded-xl from-indigo-50/70 to-white dark:from-gray-900 dark:to-gray-950 dark:text-indigo-300 text-indigo-700"><svg class="mr-1.5 text-indigo-500 inline-block -mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width=".8em" height=".8em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path class="uim-quaternary" d="M20.23 7.24L12 12L3.77 7.24a1.98 1.98 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71z" opacity=".25" fill="currentColor"></path><path class="uim-tertiary" d="M12 12v9.5a2.09 2.09 0 0 1-.91-.21L4.5 17.48a2.003 2.003 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01L12 12z" opacity=".5" fill="currentColor"></path><path class="uim-primary" d="M20.5 8.25v7.5a2.003 2.003 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01z" fill="currentColor"></path></svg><span class="font-light">class</span> <span class="font-medium">${y.join(".")}.</span><span class="font-semibold">${b}</span></span></h3>`}else return r?`<div class="flex items-center flex-1 rounded-xl py-0.5 break-all bg-gradient-to-r from-green-50/60 to-white dark:from-gray-900 dark:to-gray-950 text-green-700 dark:text-green-300 font-medium px-2"><svg class="fill-current text-2xl text-green-500 inline-block" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><circle cx="12.5" cy="12.5" r="7.5" fill-opacity="0.2"></circle><path d="M12.8454 17.4994C12.077 17.4994 11.3929 17.3946 10.7931 17.185C10.1933 16.9779 9.68621 16.6731 9.27188 16.2709C8.85756 15.871 8.542 15.382 8.3252 14.8039C8.1084 14.2257 8 13.5681 8 12.831C8 12.1035 8.1084 11.4435 8.3252 10.8509C8.54441 10.2583 8.86358 9.75005 9.28272 9.32608C9.70187 8.89971 10.2138 8.57211 10.8184 8.34326C11.4254 8.11442 12.1168 8 12.8924 8C13.6103 8 14.251 8.10479 14.8147 8.31436C15.3808 8.52393 15.8602 8.82263 16.2528 9.21046C16.6479 9.59588 16.9478 10.0548 17.1525 10.5871C17.3597 11.1171 17.4621 11.7036 17.4596 12.3468C17.4621 12.79 17.4235 13.1971 17.344 13.5681C17.2645 13.9391 17.1393 14.2631 16.9682 14.5401C16.7996 14.8147 16.578 15.0327 16.3034 15.1941C16.0288 15.3531 15.6963 15.4434 15.3061 15.4651C15.0267 15.4868 14.8002 15.4663 14.6268 15.4037C14.4534 15.341 14.3209 15.2483 14.2293 15.1254C14.1402 15.0002 14.0824 14.8544 14.0559 14.6882H14.0125C13.9547 14.8328 13.8415 14.9641 13.6729 15.0821C13.5043 15.1977 13.2983 15.288 13.055 15.3531C12.8141 15.4157 12.5576 15.4386 12.2854 15.4217C12.0011 15.4049 11.7313 15.3386 11.476 15.223C11.2231 15.1074 10.9978 14.94 10.8003 14.7208C10.6052 14.5015 10.451 14.2305 10.3378 13.9078C10.227 13.585 10.1704 13.2116 10.168 12.7876C10.1704 12.3685 10.2294 12.0035 10.345 11.6928C10.4631 11.3821 10.6184 11.1207 10.8112 10.9087C11.0063 10.6967 11.2231 10.5305 11.4616 10.4101C11.7 10.2896 11.9397 10.2125 12.1806 10.1788C12.4528 10.1379 12.7106 10.1379 12.9538 10.1788C13.1971 10.2198 13.4019 10.286 13.5681 10.3776C13.7367 10.4691 13.8415 10.5679 13.8825 10.6738H13.9331V10.2692H15.064V13.7957C15.0664 13.962 15.1038 14.0908 15.176 14.1824C15.2483 14.2739 15.3459 14.3197 15.4687 14.3197C15.6349 14.3197 15.7734 14.2462 15.8842 14.0993C15.9975 13.9523 16.0818 13.7271 16.1372 13.4236C16.195 13.1201 16.2239 12.7334 16.2239 12.2637C16.2239 11.8108 16.1637 11.4134 16.0432 11.0713C15.9252 10.7268 15.759 10.4342 15.5446 10.1933C15.3326 9.94998 15.0857 9.75246 14.8039 9.6007C14.522 9.44894 14.2161 9.33813 13.8861 9.26827C13.5585 9.19841 13.2212 9.16349 12.8744 9.16349C12.2745 9.16349 11.7506 9.25502 11.3026 9.4381C10.8545 9.61876 10.4811 9.8729 10.1824 10.2005C9.88374 10.5281 9.65971 10.9123 9.51036 11.3532C9.36342 11.7916 9.28875 12.2697 9.28634 12.7876C9.28875 13.3585 9.36824 13.8644 9.52482 14.3052C9.6838 14.7436 9.91746 15.1122 10.2258 15.4109C10.5341 15.7096 10.9147 15.936 11.3676 16.0902C11.8205 16.2444 12.3408 16.3215 12.9286 16.3215C13.2056 16.3215 13.4766 16.301 13.7415 16.26C14.0065 16.2215 14.2462 16.1733 14.4606 16.1155C14.675 16.0601 14.8472 16.0059 14.9773 15.9529L15.335 17.0008C15.1833 17.0875 14.9773 17.1682 14.7171 17.2428C14.4594 17.3199 14.1679 17.3814 13.8427 17.4271C13.5199 17.4753 13.1875 17.4994 12.8454 17.4994ZM12.6792 14.233C12.9731 14.233 13.2068 14.1764 13.3802 14.0631C13.5561 13.9499 13.6813 13.7825 13.756 13.5609C13.8331 13.3369 13.8692 13.061 13.8644 12.7334C13.862 12.4444 13.8247 12.1999 13.7524 11.9999C13.6825 11.7976 13.5609 11.6446 13.3874 11.541C13.2164 11.4351 12.9779 11.3821 12.672 11.3821C12.4046 11.3821 12.177 11.4387 11.9891 11.5519C11.8036 11.6651 11.6615 11.8241 11.5627 12.0288C11.4664 12.2312 11.417 12.4697 11.4146 12.7443C11.417 12.9996 11.4579 13.2417 11.5374 13.4706C11.6169 13.697 11.7482 13.8813 11.9313 14.0234C12.1144 14.1631 12.3637 14.233 12.6792 14.233Z"></path></svg><span class="text-sm text-green-500 mr-1">property</span><span> ${p}</span></div>`:`<h4 class="!m-0"><span class="flex-1 rounded-xl py-0.5 break-all bg-gradient-to-r from-blue-50/60 to-white dark:from-gray-900 dark:to-gray-950 text-blue-700 dark:text-blue-300 font-medium px-2"><svg width="1em" height="1em" viewBox="0 0 32 33" class="mr-1 inline-block -mt-0.5"  xmlns="http://www.w3.org/2000/svg"><path d="M5.80566 18.3545C4.90766 17.4565 4.90766 16.0005 5.80566 15.1025L14.3768 6.53142C15.2748 5.63342 16.7307 5.63342 17.6287 6.53142L26.1999 15.1025C27.0979 16.0005 27.0979 17.4565 26.1999 18.3545L17.6287 26.9256C16.7307 27.8236 15.2748 27.8236 14.3768 26.9256L5.80566 18.3545Z" fill="currentColor" fill-opacity="0.25"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.4801 13.9619C16.4801 12.9761 16.7467 12.5436 16.9443 12.3296C17.1764 12.078 17.5731 11.8517 18.2275 11.707C18.8821 11.5623 19.638 11.5342 20.4038 11.5582C20.7804 11.57 21.1341 11.5932 21.4719 11.6156L21.5263 11.6193C21.8195 11.6389 22.1626 11.6618 22.4429 11.6618V7.40825C22.3209 7.40825 22.1219 7.39596 21.7544 7.37149C21.4202 7.34925 20.9976 7.32115 20.5371 7.30672C19.6286 7.27824 18.4672 7.29779 17.3093 7.55377C16.1512 7.8098 14.8404 8.33724 13.8181 9.4452C12.7612 10.5907 12.2266 12.1236 12.2266 13.9619V15.0127H10.6836V19.2662H12.2266V26.6332H16.4801V19.2662H20.3394V15.0127H16.4801V13.9619Z" fill="currentColor"/></svg>${p}</span></h4>`}function R(){var y;const{hash:p}=window.location;t(0,i=p.substring(1)),u&&u.classList.remove(...j.split(" ")),i===l&&(u=(y=document.getElementById(i))==null?void 0:y.closest(".docstring"),u&&u.classList.add(...j.split(" ")))}const N=p=>D(`${l}.${p}`,!!A[p]),x=()=>D(`${l}.returns`,!!h),T=()=>t(11,E=!1);function P(p){j1[p?"unshift":"push"](()=>{d=p,t(10,d)})}return s.$$set=p=>{"anchor"in p&&t(7,l=p.anchor),"name"in p&&t(8,n=p.name),"parameters"in p&&t(1,f=p.parameters),"parametersDescription"in p&&t(9,o=p.parametersDescription),"parameterGroups"in p&&t(2,c=p.parameterGroups),"returnDescription"in p&&t(3,h=p.returnDescription),"returnType"in p&&t(4,m=p.returnType),"source"in p&&t(5,a=p.source),"hashlink"in p&&t(0,i=p.hashlink),"isGetSetDescriptor"in p&&t(6,r=p.isGetSetDescriptor)},[i,f,c,h,m,a,r,l,n,o,d,E,A,D,I,R,N,x,T,P]}class ee extends v1{constructor(e){super();b1(this,e,J1,U1,C1,{anchor:7,name:8,parameters:1,parametersDescription:9,parameterGroups:2,returnDescription:3,returnType:4,source:5,hashlink:0,isGetSetDescriptor:6})}}export{ee as D};
