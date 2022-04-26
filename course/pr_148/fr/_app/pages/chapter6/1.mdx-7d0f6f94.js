import{S as wt,i as yt,s as $t,e as o,k as _,w as It,t as n,M as Tt,c as a,d as t,m as E,a as l,x as At,h as r,b as f,F as e,g as h,y as Ct,L as Nt,q as jt,o as Dt,B as St,v as Ut}from"../../chunks/vendor-1e8b365d.js";import{I as Bt}from"../../chunks/IconCopyLink-483c28ba.js";function Ft(ot){let k,Z,q,b,N,L,ie,j,ue,ee,i,ce,y,me,pe,D,de,fe,S,he,ve,U,_e,Ee,B,ke,qe,te,u,ze,F,xe,be,M,Me,H,ge,Pe,J,Le,we,g,ye,O,$e,Ie,R,Te,Ae,ne,$,Ce,re,m,z,Ne,G,je,De,K,Se,Ue,Be,w,Fe,Q,He,Je,Oe,V,Re,Ge,x,Ke,W,Qe,Ve,X,We,Xe,se,v,Ye,I,Ze,et,Y,tt,nt,oe;return L=new Bt({}),{c(){k=o("meta"),Z=_(),q=o("h1"),b=o("a"),N=o("span"),It(L.$$.fragment),ie=_(),j=o("span"),ue=n("Introduction"),ee=_(),i=o("p"),ce=n("Dans le "),y=o("a"),me=n("Chapitre 3"),pe=n(", nous avons vu comment "),D=o("em"),de=n("finetuner"),fe=n(" un mod\xE8le sur une t\xE2che donn\xE9e. Pour ce faire, nous utilisons le m\xEAme "),S=o("em"),he=n("tokenizer"),ve=n(" que celui avec lequel le mod\xE8le a \xE9t\xE9 pr\xE9-entra\xEEn\xE9. Mais que faisons-nous lorsque nous voulons entra\xEEner un mod\xE8le \xE0 partir de z\xE9ro ? Dans ces cas, l\u2019utilisation d\u2019un "),U=o("em"),_e=n("tokenizer"),Ee=n(" qui a \xE9t\xE9 pr\xE9-entra\xEEn\xE9 sur un corpus d\u2019un autre domaine ou d\u2019une autre langue est g\xE9n\xE9ralement sous-optimale. Par exemple, un "),B=o("em"),ke=n("tokenizer"),qe=n(" entra\xEEn\xE9 sur un corpus anglais sera peu performant sur un corpus de textes japonais car l\u2019utilisation des espaces et de la ponctuation est tr\xE8s diff\xE9rente entre les deux langues."),te=_(),u=o("p"),ze=n("Dans ce chapitre, vous apprendrez \xE0 entra\xEEner un tout nouveau "),F=o("em"),xe=n("tokenizer"),be=n(" sur un corpus de textes afin qu\u2019il puisse ensuite \xEAtre utilis\xE9 pour pr\xE9-entra\xEEner un mod\xE8le de langue. Tout cela se fera \xE0 l\u2019aide de la biblioth\xE8que "),M=o("a"),Me=n("\u{1F917} "),H=o("em"),ge=n("Tokenizers"),Pe=n(", qui fournit les "),J=o("em"),Le=n("tokenizers"),we=n(" \xAB rapides \xBB de la biblioth\xE8que "),g=o("a"),ye=n("\u{1F917} "),O=o("em"),$e=n("Transformers"),Ie=n(". Nous examinerons de pr\xE8s les fonctionnalit\xE9s offertes par cette biblioth\xE8que et nous \xE9tudierons comment les "),R=o("em"),Te=n("tokenizers"),Ae=n(" rapides diff\xE8rent des versions \xAB lentes \xBB."),ne=_(),$=o("p"),Ce=n("Les sujets que nous couvrirons comprennent :"),re=_(),m=o("ul"),z=o("li"),Ne=n("comment entra\xEEner un nouveau "),G=o("em"),je=n("tokenizer"),De=n(" similaire \xE0 celui utilis\xE9 par un "),K=o("em"),Se=n("checkpoint"),Ue=n(" donn\xE9 sur un nouveau corpus de textes,"),Be=_(),w=o("li"),Fe=n("les caract\xE9ristiques sp\xE9ciales des "),Q=o("em"),He=n("tokenizers"),Je=n(" rapides,"),Oe=_(),V=o("li"),Re=n("les diff\xE9rences entre les trois principaux algorithmes de tok\xE9nisation utilis\xE9s aujourd\u2019hui en NLP,"),Ge=_(),x=o("li"),Ke=n("comment construire un "),W=o("em"),Qe=n("tokenizer"),Ve=n(" \xE0 partir de z\xE9ro avec la biblioth\xE8que \u{1F917} "),X=o("em"),We=n("Tokenizers"),Xe=n(" et l\u2019entra\xEEner sur des donn\xE9es."),se=_(),v=o("p"),Ye=n("Les techniques pr\xE9sent\xE9es dans ce chapitre vous pr\xE9pareront \xE0 la section du "),I=o("a"),Ze=n("Chapitre 7"),et=n(" o\xF9 nous examinons la cr\xE9ation d\u2019un mod\xE8le de langue pour le langage Python. Commen\xE7ons par examiner ce que signifie \xAB entra\xEEner \xBB un "),Y=o("em"),tt=n("tokenizer"),nt=n("."),this.h()},l(s){const c=Tt('[data-svelte="svelte-1phssyn"]',document.head);k=a(c,"META",{name:!0,content:!0}),c.forEach(t),Z=E(s),q=a(s,"H1",{class:!0});var ae=l(q);b=a(ae,"A",{id:!0,class:!0,href:!0});var at=l(b);N=a(at,"SPAN",{});var lt=l(N);At(L.$$.fragment,lt),lt.forEach(t),at.forEach(t),ie=E(ae),j=a(ae,"SPAN",{});var it=l(j);ue=r(it,"Introduction"),it.forEach(t),ae.forEach(t),ee=E(s),i=a(s,"P",{});var p=l(i);ce=r(p,"Dans le "),y=a(p,"A",{href:!0});var ut=l(y);me=r(ut,"Chapitre 3"),ut.forEach(t),pe=r(p,", nous avons vu comment "),D=a(p,"EM",{});var ct=l(D);de=r(ct,"finetuner"),ct.forEach(t),fe=r(p," un mod\xE8le sur une t\xE2che donn\xE9e. Pour ce faire, nous utilisons le m\xEAme "),S=a(p,"EM",{});var mt=l(S);he=r(mt,"tokenizer"),mt.forEach(t),ve=r(p," que celui avec lequel le mod\xE8le a \xE9t\xE9 pr\xE9-entra\xEEn\xE9. Mais que faisons-nous lorsque nous voulons entra\xEEner un mod\xE8le \xE0 partir de z\xE9ro ? Dans ces cas, l\u2019utilisation d\u2019un "),U=a(p,"EM",{});var pt=l(U);_e=r(pt,"tokenizer"),pt.forEach(t),Ee=r(p," qui a \xE9t\xE9 pr\xE9-entra\xEEn\xE9 sur un corpus d\u2019un autre domaine ou d\u2019une autre langue est g\xE9n\xE9ralement sous-optimale. Par exemple, un "),B=a(p,"EM",{});var dt=l(B);ke=r(dt,"tokenizer"),dt.forEach(t),qe=r(p," entra\xEEn\xE9 sur un corpus anglais sera peu performant sur un corpus de textes japonais car l\u2019utilisation des espaces et de la ponctuation est tr\xE8s diff\xE9rente entre les deux langues."),p.forEach(t),te=E(s),u=a(s,"P",{});var d=l(u);ze=r(d,"Dans ce chapitre, vous apprendrez \xE0 entra\xEEner un tout nouveau "),F=a(d,"EM",{});var ft=l(F);xe=r(ft,"tokenizer"),ft.forEach(t),be=r(d," sur un corpus de textes afin qu\u2019il puisse ensuite \xEAtre utilis\xE9 pour pr\xE9-entra\xEEner un mod\xE8le de langue. Tout cela se fera \xE0 l\u2019aide de la biblioth\xE8que "),M=a(d,"A",{href:!0,rel:!0});var rt=l(M);Me=r(rt,"\u{1F917} "),H=a(rt,"EM",{});var ht=l(H);ge=r(ht,"Tokenizers"),ht.forEach(t),rt.forEach(t),Pe=r(d,", qui fournit les "),J=a(d,"EM",{});var vt=l(J);Le=r(vt,"tokenizers"),vt.forEach(t),we=r(d," \xAB rapides \xBB de la biblioth\xE8que "),g=a(d,"A",{href:!0,rel:!0});var st=l(g);ye=r(st,"\u{1F917} "),O=a(st,"EM",{});var _t=l(O);$e=r(_t,"Transformers"),_t.forEach(t),st.forEach(t),Ie=r(d,". Nous examinerons de pr\xE8s les fonctionnalit\xE9s offertes par cette biblioth\xE8que et nous \xE9tudierons comment les "),R=a(d,"EM",{});var Et=l(R);Te=r(Et,"tokenizers"),Et.forEach(t),Ae=r(d," rapides diff\xE8rent des versions \xAB lentes \xBB."),d.forEach(t),ne=E(s),$=a(s,"P",{});var kt=l($);Ce=r(kt,"Les sujets que nous couvrirons comprennent :"),kt.forEach(t),re=E(s),m=a(s,"UL",{});var P=l(m);z=a(P,"LI",{});var T=l(z);Ne=r(T,"comment entra\xEEner un nouveau "),G=a(T,"EM",{});var qt=l(G);je=r(qt,"tokenizer"),qt.forEach(t),De=r(T," similaire \xE0 celui utilis\xE9 par un "),K=a(T,"EM",{});var zt=l(K);Se=r(zt,"checkpoint"),zt.forEach(t),Ue=r(T," donn\xE9 sur un nouveau corpus de textes,"),T.forEach(t),Be=E(P),w=a(P,"LI",{});var le=l(w);Fe=r(le,"les caract\xE9ristiques sp\xE9ciales des "),Q=a(le,"EM",{});var xt=l(Q);He=r(xt,"tokenizers"),xt.forEach(t),Je=r(le," rapides,"),le.forEach(t),Oe=E(P),V=a(P,"LI",{});var bt=l(V);Re=r(bt,"les diff\xE9rences entre les trois principaux algorithmes de tok\xE9nisation utilis\xE9s aujourd\u2019hui en NLP,"),bt.forEach(t),Ge=E(P),x=a(P,"LI",{});var A=l(x);Ke=r(A,"comment construire un "),W=a(A,"EM",{});var Mt=l(W);Qe=r(Mt,"tokenizer"),Mt.forEach(t),Ve=r(A," \xE0 partir de z\xE9ro avec la biblioth\xE8que \u{1F917} "),X=a(A,"EM",{});var gt=l(X);We=r(gt,"Tokenizers"),gt.forEach(t),Xe=r(A," et l\u2019entra\xEEner sur des donn\xE9es."),A.forEach(t),P.forEach(t),se=E(s),v=a(s,"P",{});var C=l(v);Ye=r(C,"Les techniques pr\xE9sent\xE9es dans ce chapitre vous pr\xE9pareront \xE0 la section du "),I=a(C,"A",{href:!0});var Pt=l(I);Ze=r(Pt,"Chapitre 7"),Pt.forEach(t),et=r(C," o\xF9 nous examinons la cr\xE9ation d\u2019un mod\xE8le de langue pour le langage Python. Commen\xE7ons par examiner ce que signifie \xAB entra\xEEner \xBB un "),Y=a(C,"EM",{});var Lt=l(Y);tt=r(Lt,"tokenizer"),Lt.forEach(t),nt=r(C,"."),C.forEach(t),this.h()},h(){f(k,"name","hf:doc:metadata"),f(k,"content",JSON.stringify(Ht)),f(b,"id","introduction"),f(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(b,"href","#introduction"),f(q,"class","relative group"),f(y,"href","/course/fr/chapter3"),f(M,"href","https://github.com/huggingface/tokenizers"),f(M,"rel","nofollow"),f(g,"href","https://github.com/huggingface/transformers"),f(g,"rel","nofollow"),f(I,"href","/course/fr/chapter7/6")},m(s,c){e(document.head,k),h(s,Z,c),h(s,q,c),e(q,b),e(b,N),Ct(L,N,null),e(q,ie),e(q,j),e(j,ue),h(s,ee,c),h(s,i,c),e(i,ce),e(i,y),e(y,me),e(i,pe),e(i,D),e(D,de),e(i,fe),e(i,S),e(S,he),e(i,ve),e(i,U),e(U,_e),e(i,Ee),e(i,B),e(B,ke),e(i,qe),h(s,te,c),h(s,u,c),e(u,ze),e(u,F),e(F,xe),e(u,be),e(u,M),e(M,Me),e(M,H),e(H,ge),e(u,Pe),e(u,J),e(J,Le),e(u,we),e(u,g),e(g,ye),e(g,O),e(O,$e),e(u,Ie),e(u,R),e(R,Te),e(u,Ae),h(s,ne,c),h(s,$,c),e($,Ce),h(s,re,c),h(s,m,c),e(m,z),e(z,Ne),e(z,G),e(G,je),e(z,De),e(z,K),e(K,Se),e(z,Ue),e(m,Be),e(m,w),e(w,Fe),e(w,Q),e(Q,He),e(w,Je),e(m,Oe),e(m,V),e(V,Re),e(m,Ge),e(m,x),e(x,Ke),e(x,W),e(W,Qe),e(x,Ve),e(x,X),e(X,We),e(x,Xe),h(s,se,c),h(s,v,c),e(v,Ye),e(v,I),e(I,Ze),e(v,et),e(v,Y),e(Y,tt),e(v,nt),oe=!0},p:Nt,i(s){oe||(jt(L.$$.fragment,s),oe=!0)},o(s){Dt(L.$$.fragment,s),oe=!1},d(s){t(k),s&&t(Z),s&&t(q),St(L),s&&t(ee),s&&t(i),s&&t(te),s&&t(u),s&&t(ne),s&&t($),s&&t(re),s&&t(m),s&&t(se),s&&t(v)}}}const Ht={local:"introduction",title:"Introduction"};function Jt(ot){return Ut(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gt extends wt{constructor(k){super();yt(this,k,Jt,Ft,$t,{})}}export{Gt as default,Ht as metadata};
