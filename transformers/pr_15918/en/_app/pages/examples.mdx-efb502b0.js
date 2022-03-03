import{S as Ll,i as Tl,s as Pl,e as a,k as m,w as et,t as i,M as ql,c as l,d as t,m as p,a as s,x as tt,h as f,b as h,F as e,g as c,y as rt,L as Sl,q as at,o as lt,B as st}from"../chunks/vendor-4833417e.js";import{I as kl}from"../chunks/IconCopyLink-4b81c553.js";import{C as la}from"../chunks/CodeBlock-6a3d1b46.js";import"../chunks/CopyButton-dacfbfaf.js";function Nl(It){let _,C,v,d,xe,I,kt,we,Lt,ot,g,Tt,k,Pt,qt,L,St,Nt,T,jt,Wt,it,E,Ft,P,Rt,Ct,q,Mt,Jt,ft,M,Ot,nt,x,Bt,S,Gt,Ht,N,Ut,Xt,ht,w,y,ye,j,Dt,be,Yt,mt,J,Ae,zt,pt,b,Kt,$e,Qt,Vt,ut,W,ct,O,Zt,vt,F,gt,B,er,dt,A,Ie,tr,rr,o,ke,G,ar,lr,Le,H,sr,or,Te,U,ir,fr,Pe,X,nr,hr,qe,D,mr,pr,Se,Y,ur,cr,Ne,z,vr,gr,je,K,dr,_r,We,Q,Er,xr,Fe,V,wr,yr,Re,Z,br,Ar,Ce,ee,$r,Ir,Me,te,kr,Lr,Je,re,Tr,Pr,Oe,ae,qr,Sr,Be,le,Nr,jr,Ge,se,Wr,Fr,He,oe,Rr,Cr,Ue,ie,Mr,Jr,Xe,fe,Or,Br,De,ne,Gr,Hr,Ye,he,Ur,Xr,ze,me,Dr,Yr,Ke,pe,zr,Kr,Qe,ue,Qr,Vr,Ve,ce,Zr,ea,Ze,ve,ta,_t,ge,ra,Et,R,xt,de,aa,wt;return I=new kl({}),j=new kl({}),W=new la({props:{code:`git clone https://github.com/huggingface/transformers
cd transformers
pip install .`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/huggingface/transformers
<span class="hljs-built_in">cd</span> transformers
pip install .`}}),F=new la({props:{code:"pip install -r requirements.txt",highlighted:"pip install -r requirements.txt"}}),R=new la({props:{code:"git checkout tags/v3.5.1",highlighted:"git checkout tags/v3.5.1"}}),{c(){_=a("meta"),C=m(),v=a("h1"),d=a("a"),xe=a("span"),et(I.$$.fragment),kt=m(),we=a("span"),Lt=i("Examples"),ot=m(),g=a("p"),Tt=i("We host a wide range of example scripts for multiple learning frameworks. Simply choose your favorite: "),k=a("a"),Pt=i("TensorFlow"),qt=i(", "),L=a("a"),St=i("PyTorch"),Nt=i(" or "),T=a("a"),jt=i("JAX/Flax"),Wt=i("."),it=m(),E=a("p"),Ft=i("We also have some "),P=a("a"),Rt=i("research projects"),Ct=i(", as well as some "),q=a("a"),Mt=i("legacy examples"),Jt=i(". Note that unlike the main examples these are not actively maintained, and may require specific older versions of dependencies in order to run."),ft=m(),M=a("p"),Ot=i("While we strive to present as many use cases as possible, the example scripts are just that - examples. It is expected that they won\u2019t work out-of-the box on your specific problem and that you will be required to change a few lines of code to adapt them to your needs. To help you with that, most of the examples fully expose the preprocessing of the data, allowing you to tweak and edit them as required."),nt=m(),x=a("p"),Bt=i("Please discuss on the "),S=a("a"),Gt=i("forum"),Ht=i(" or in an "),N=a("a"),Ut=i("issue"),Xt=i(" a feature you would like to implement in an example before submitting a PR; we welcome bug fixes, but since we want to keep the examples as simple as possible it\u2019s unlikely that we will merge a pull request adding more functionality at the cost of readability."),ht=m(),w=a("h2"),y=a("a"),ye=a("span"),et(j.$$.fragment),Dt=m(),be=a("span"),Yt=i("Important note"),mt=m(),J=a("p"),Ae=a("strong"),zt=i("Important"),pt=m(),b=a("p"),Kt=i("To make sure you can successfully run the latest versions of the example scripts, you have to "),$e=a("strong"),Qt=i("install the library from source"),Vt=i(" and install some example-specific requirements. To do this, execute the following steps in a new virtual environment:"),ut=m(),et(W.$$.fragment),ct=m(),O=a("p"),Zt=i("Then cd in the example folder of your choice and run"),vt=m(),et(F.$$.fragment),gt=m(),B=a("p"),er=i("To browse the examples corresponding to released versions of \u{1F917} Transformers, click on the line below and then on your desired version of the library:"),dt=m(),A=a("details"),Ie=a("summary"),tr=i("Examples for older versions of \u{1F917} Transformers"),rr=m(),o=a("ul"),ke=a("li"),G=a("a"),ar=i("v4.5.1"),lr=m(),Le=a("li"),H=a("a"),sr=i("v4.4.2"),or=m(),Te=a("li"),U=a("a"),ir=i("v4.3.3"),fr=m(),Pe=a("li"),X=a("a"),nr=i("v4.2.2"),hr=m(),qe=a("li"),D=a("a"),mr=i("v4.1.1"),pr=m(),Se=a("li"),Y=a("a"),ur=i("v4.0.1"),cr=m(),Ne=a("li"),z=a("a"),vr=i("v3.5.1"),gr=m(),je=a("li"),K=a("a"),dr=i("v3.4.0"),_r=m(),We=a("li"),Q=a("a"),Er=i("v3.3.1"),xr=m(),Fe=a("li"),V=a("a"),wr=i("v3.2.0"),yr=m(),Re=a("li"),Z=a("a"),br=i("v3.1.0"),Ar=m(),Ce=a("li"),ee=a("a"),$r=i("v3.0.2"),Ir=m(),Me=a("li"),te=a("a"),kr=i("v2.11.0"),Lr=m(),Je=a("li"),re=a("a"),Tr=i("v2.10.0"),Pr=m(),Oe=a("li"),ae=a("a"),qr=i("v2.9.1"),Sr=m(),Be=a("li"),le=a("a"),Nr=i("v2.8.0"),jr=m(),Ge=a("li"),se=a("a"),Wr=i("v2.7.0"),Fr=m(),He=a("li"),oe=a("a"),Rr=i("v2.6.0"),Cr=m(),Ue=a("li"),ie=a("a"),Mr=i("v2.5.1"),Jr=m(),Xe=a("li"),fe=a("a"),Or=i("v2.4.0"),Br=m(),De=a("li"),ne=a("a"),Gr=i("v2.3.0"),Hr=m(),Ye=a("li"),he=a("a"),Ur=i("v2.2.0"),Xr=m(),ze=a("li"),me=a("a"),Dr=i("v2.1.1"),Yr=m(),Ke=a("li"),pe=a("a"),zr=i("v2.0.0"),Kr=m(),Qe=a("li"),ue=a("a"),Qr=i("v1.2.0"),Vr=m(),Ve=a("li"),ce=a("a"),Zr=i("v1.1.0"),ea=m(),Ze=a("li"),ve=a("a"),ta=i("v1.0.0"),_t=m(),ge=a("p"),ra=i("Alternatively, you can switch your cloned \u{1F917} Transformers to a specific version (for instance with v3.5.1) with"),Et=m(),et(R.$$.fragment),xt=m(),de=a("p"),aa=i("and run the example command as usual afterward."),this.h()},l(r){const u=ql('[data-svelte="svelte-1phssyn"]',document.head);_=l(u,"META",{name:!0,content:!0}),u.forEach(t),C=p(r),v=l(r,"H1",{class:!0});var yt=s(v);d=l(yt,"A",{id:!0,class:!0,href:!0});var sa=s(d);xe=l(sa,"SPAN",{});var oa=s(xe);tt(I.$$.fragment,oa),oa.forEach(t),sa.forEach(t),kt=p(yt),we=l(yt,"SPAN",{});var ia=s(we);Lt=f(ia,"Examples"),ia.forEach(t),yt.forEach(t),ot=p(r),g=l(r,"P",{});var $=s(g);Tt=f($,"We host a wide range of example scripts for multiple learning frameworks. Simply choose your favorite: "),k=l($,"A",{href:!0,rel:!0});var fa=s(k);Pt=f(fa,"TensorFlow"),fa.forEach(t),qt=f($,", "),L=l($,"A",{href:!0,rel:!0});var na=s(L);St=f(na,"PyTorch"),na.forEach(t),Nt=f($," or "),T=l($,"A",{href:!0,rel:!0});var ha=s(T);jt=f(ha,"JAX/Flax"),ha.forEach(t),Wt=f($,"."),$.forEach(t),it=p(r),E=l(r,"P",{});var _e=s(E);Ft=f(_e,"We also have some "),P=l(_e,"A",{href:!0,rel:!0});var ma=s(P);Rt=f(ma,"research projects"),ma.forEach(t),Ct=f(_e,", as well as some "),q=l(_e,"A",{href:!0,rel:!0});var pa=s(q);Mt=f(pa,"legacy examples"),pa.forEach(t),Jt=f(_e,". Note that unlike the main examples these are not actively maintained, and may require specific older versions of dependencies in order to run."),_e.forEach(t),ft=p(r),M=l(r,"P",{});var ua=s(M);Ot=f(ua,"While we strive to present as many use cases as possible, the example scripts are just that - examples. It is expected that they won\u2019t work out-of-the box on your specific problem and that you will be required to change a few lines of code to adapt them to your needs. To help you with that, most of the examples fully expose the preprocessing of the data, allowing you to tweak and edit them as required."),ua.forEach(t),nt=p(r),x=l(r,"P",{});var Ee=s(x);Bt=f(Ee,"Please discuss on the "),S=l(Ee,"A",{href:!0,rel:!0});var ca=s(S);Gt=f(ca,"forum"),ca.forEach(t),Ht=f(Ee," or in an "),N=l(Ee,"A",{href:!0,rel:!0});var va=s(N);Ut=f(va,"issue"),va.forEach(t),Xt=f(Ee," a feature you would like to implement in an example before submitting a PR; we welcome bug fixes, but since we want to keep the examples as simple as possible it\u2019s unlikely that we will merge a pull request adding more functionality at the cost of readability."),Ee.forEach(t),ht=p(r),w=l(r,"H2",{class:!0});var bt=s(w);y=l(bt,"A",{id:!0,class:!0,href:!0});var ga=s(y);ye=l(ga,"SPAN",{});var da=s(ye);tt(j.$$.fragment,da),da.forEach(t),ga.forEach(t),Dt=p(bt),be=l(bt,"SPAN",{});var _a=s(be);Yt=f(_a,"Important note"),_a.forEach(t),bt.forEach(t),mt=p(r),J=l(r,"P",{});var Ea=s(J);Ae=l(Ea,"STRONG",{});var xa=s(Ae);zt=f(xa,"Important"),xa.forEach(t),Ea.forEach(t),pt=p(r),b=l(r,"P",{});var At=s(b);Kt=f(At,"To make sure you can successfully run the latest versions of the example scripts, you have to "),$e=l(At,"STRONG",{});var wa=s($e);Qt=f(wa,"install the library from source"),wa.forEach(t),Vt=f(At," and install some example-specific requirements. To do this, execute the following steps in a new virtual environment:"),At.forEach(t),ut=p(r),tt(W.$$.fragment,r),ct=p(r),O=l(r,"P",{});var ya=s(O);Zt=f(ya,"Then cd in the example folder of your choice and run"),ya.forEach(t),vt=p(r),tt(F.$$.fragment,r),gt=p(r),B=l(r,"P",{});var ba=s(B);er=f(ba,"To browse the examples corresponding to released versions of \u{1F917} Transformers, click on the line below and then on your desired version of the library:"),ba.forEach(t),dt=p(r),A=l(r,"DETAILS",{});var $t=s(A);Ie=l($t,"SUMMARY",{});var Aa=s(Ie);tr=f(Aa,"Examples for older versions of \u{1F917} Transformers"),Aa.forEach(t),rr=p($t),o=l($t,"UL",{});var n=s(o);ke=l(n,"LI",{});var $a=s(ke);G=l($a,"A",{href:!0});var Ia=s(G);ar=f(Ia,"v4.5.1"),Ia.forEach(t),$a.forEach(t),lr=p(n),Le=l(n,"LI",{});var ka=s(Le);H=l(ka,"A",{href:!0});var La=s(H);sr=f(La,"v4.4.2"),La.forEach(t),ka.forEach(t),or=p(n),Te=l(n,"LI",{});var Ta=s(Te);U=l(Ta,"A",{href:!0});var Pa=s(U);ir=f(Pa,"v4.3.3"),Pa.forEach(t),Ta.forEach(t),fr=p(n),Pe=l(n,"LI",{});var qa=s(Pe);X=l(qa,"A",{href:!0});var Sa=s(X);nr=f(Sa,"v4.2.2"),Sa.forEach(t),qa.forEach(t),hr=p(n),qe=l(n,"LI",{});var Na=s(qe);D=l(Na,"A",{href:!0});var ja=s(D);mr=f(ja,"v4.1.1"),ja.forEach(t),Na.forEach(t),pr=p(n),Se=l(n,"LI",{});var Wa=s(Se);Y=l(Wa,"A",{href:!0});var Fa=s(Y);ur=f(Fa,"v4.0.1"),Fa.forEach(t),Wa.forEach(t),cr=p(n),Ne=l(n,"LI",{});var Ra=s(Ne);z=l(Ra,"A",{href:!0});var Ca=s(z);vr=f(Ca,"v3.5.1"),Ca.forEach(t),Ra.forEach(t),gr=p(n),je=l(n,"LI",{});var Ma=s(je);K=l(Ma,"A",{href:!0});var Ja=s(K);dr=f(Ja,"v3.4.0"),Ja.forEach(t),Ma.forEach(t),_r=p(n),We=l(n,"LI",{});var Oa=s(We);Q=l(Oa,"A",{href:!0});var Ba=s(Q);Er=f(Ba,"v3.3.1"),Ba.forEach(t),Oa.forEach(t),xr=p(n),Fe=l(n,"LI",{});var Ga=s(Fe);V=l(Ga,"A",{href:!0});var Ha=s(V);wr=f(Ha,"v3.2.0"),Ha.forEach(t),Ga.forEach(t),yr=p(n),Re=l(n,"LI",{});var Ua=s(Re);Z=l(Ua,"A",{href:!0});var Xa=s(Z);br=f(Xa,"v3.1.0"),Xa.forEach(t),Ua.forEach(t),Ar=p(n),Ce=l(n,"LI",{});var Da=s(Ce);ee=l(Da,"A",{href:!0});var Ya=s(ee);$r=f(Ya,"v3.0.2"),Ya.forEach(t),Da.forEach(t),Ir=p(n),Me=l(n,"LI",{});var za=s(Me);te=l(za,"A",{href:!0});var Ka=s(te);kr=f(Ka,"v2.11.0"),Ka.forEach(t),za.forEach(t),Lr=p(n),Je=l(n,"LI",{});var Qa=s(Je);re=l(Qa,"A",{href:!0});var Va=s(re);Tr=f(Va,"v2.10.0"),Va.forEach(t),Qa.forEach(t),Pr=p(n),Oe=l(n,"LI",{});var Za=s(Oe);ae=l(Za,"A",{href:!0});var el=s(ae);qr=f(el,"v2.9.1"),el.forEach(t),Za.forEach(t),Sr=p(n),Be=l(n,"LI",{});var tl=s(Be);le=l(tl,"A",{href:!0});var rl=s(le);Nr=f(rl,"v2.8.0"),rl.forEach(t),tl.forEach(t),jr=p(n),Ge=l(n,"LI",{});var al=s(Ge);se=l(al,"A",{href:!0});var ll=s(se);Wr=f(ll,"v2.7.0"),ll.forEach(t),al.forEach(t),Fr=p(n),He=l(n,"LI",{});var sl=s(He);oe=l(sl,"A",{href:!0});var ol=s(oe);Rr=f(ol,"v2.6.0"),ol.forEach(t),sl.forEach(t),Cr=p(n),Ue=l(n,"LI",{});var il=s(Ue);ie=l(il,"A",{href:!0});var fl=s(ie);Mr=f(fl,"v2.5.1"),fl.forEach(t),il.forEach(t),Jr=p(n),Xe=l(n,"LI",{});var nl=s(Xe);fe=l(nl,"A",{href:!0});var hl=s(fe);Or=f(hl,"v2.4.0"),hl.forEach(t),nl.forEach(t),Br=p(n),De=l(n,"LI",{});var ml=s(De);ne=l(ml,"A",{href:!0});var pl=s(ne);Gr=f(pl,"v2.3.0"),pl.forEach(t),ml.forEach(t),Hr=p(n),Ye=l(n,"LI",{});var ul=s(Ye);he=l(ul,"A",{href:!0});var cl=s(he);Ur=f(cl,"v2.2.0"),cl.forEach(t),ul.forEach(t),Xr=p(n),ze=l(n,"LI",{});var vl=s(ze);me=l(vl,"A",{href:!0});var gl=s(me);Dr=f(gl,"v2.1.1"),gl.forEach(t),vl.forEach(t),Yr=p(n),Ke=l(n,"LI",{});var dl=s(Ke);pe=l(dl,"A",{href:!0});var _l=s(pe);zr=f(_l,"v2.0.0"),_l.forEach(t),dl.forEach(t),Kr=p(n),Qe=l(n,"LI",{});var El=s(Qe);ue=l(El,"A",{href:!0});var xl=s(ue);Qr=f(xl,"v1.2.0"),xl.forEach(t),El.forEach(t),Vr=p(n),Ve=l(n,"LI",{});var wl=s(Ve);ce=l(wl,"A",{href:!0});var yl=s(ce);Zr=f(yl,"v1.1.0"),yl.forEach(t),wl.forEach(t),ea=p(n),Ze=l(n,"LI",{});var bl=s(Ze);ve=l(bl,"A",{href:!0});var Al=s(ve);ta=f(Al,"v1.0.0"),Al.forEach(t),bl.forEach(t),n.forEach(t),$t.forEach(t),_t=p(r),ge=l(r,"P",{});var $l=s(ge);ra=f($l,"Alternatively, you can switch your cloned \u{1F917} Transformers to a specific version (for instance with v3.5.1) with"),$l.forEach(t),Et=p(r),tt(R.$$.fragment,r),xt=p(r),de=l(r,"P",{});var Il=s(de);aa=f(Il,"and run the example command as usual afterward."),Il.forEach(t),this.h()},h(){h(_,"name","hf:doc:metadata"),h(_,"content",JSON.stringify(jl)),h(d,"id","examples"),h(d,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(d,"href","#examples"),h(v,"class","relative group"),h(k,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow"),h(k,"rel","nofollow"),h(L,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch"),h(L,"rel","nofollow"),h(T,"href","https://github.com/huggingface/transformers/tree/master/examples/flax"),h(T,"rel","nofollow"),h(P,"href","https://github.com/huggingface/transformers/tree/master/examples/research_projects"),h(P,"rel","nofollow"),h(q,"href","https://github.com/huggingface/transformers/tree/master/examples/legacy"),h(q,"rel","nofollow"),h(S,"href","https://discuss.huggingface.co/"),h(S,"rel","nofollow"),h(N,"href","https://github.com/huggingface/transformers/issues"),h(N,"rel","nofollow"),h(y,"id","important-note"),h(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(y,"href","#important-note"),h(w,"class","relative group"),h(G,"href","https://github.com/huggingface/transformers/tree/v4.5.1/examples"),h(H,"href","https://github.com/huggingface/transformers/tree/v4.4.2/examples"),h(U,"href","https://github.com/huggingface/transformers/tree/v4.3.3/examples"),h(X,"href","https://github.com/huggingface/transformers/tree/v4.2.2/examples"),h(D,"href","https://github.com/huggingface/transformers/tree/v4.1.1/examples"),h(Y,"href","https://github.com/huggingface/transformers/tree/v4.0.1/examples"),h(z,"href","https://github.com/huggingface/transformers/tree/v3.5.1/examples"),h(K,"href","https://github.com/huggingface/transformers/tree/v3.4.0/examples"),h(Q,"href","https://github.com/huggingface/transformers/tree/v3.3.1/examples"),h(V,"href","https://github.com/huggingface/transformers/tree/v3.2.0/examples"),h(Z,"href","https://github.com/huggingface/transformers/tree/v3.1.0/examples"),h(ee,"href","https://github.com/huggingface/transformers/tree/v3.0.2/examples"),h(te,"href","https://github.com/huggingface/transformers/tree/v2.11.0/examples"),h(re,"href","https://github.com/huggingface/transformers/tree/v2.10.0/examples"),h(ae,"href","https://github.com/huggingface/transformers/tree/v2.9.1/examples"),h(le,"href","https://github.com/huggingface/transformers/tree/v2.8.0/examples"),h(se,"href","https://github.com/huggingface/transformers/tree/v2.7.0/examples"),h(oe,"href","https://github.com/huggingface/transformers/tree/v2.6.0/examples"),h(ie,"href","https://github.com/huggingface/transformers/tree/v2.5.1/examples"),h(fe,"href","https://github.com/huggingface/transformers/tree/v2.4.0/examples"),h(ne,"href","https://github.com/huggingface/transformers/tree/v2.3.0/examples"),h(he,"href","https://github.com/huggingface/transformers/tree/v2.2.0/examples"),h(me,"href","https://github.com/huggingface/transformers/tree/v2.1.0/examples"),h(pe,"href","https://github.com/huggingface/transformers/tree/v2.0.0/examples"),h(ue,"href","https://github.com/huggingface/transformers/tree/v1.2.0/examples"),h(ce,"href","https://github.com/huggingface/transformers/tree/v1.1.0/examples"),h(ve,"href","https://github.com/huggingface/transformers/tree/v1.0.0/examples")},m(r,u){e(document.head,_),c(r,C,u),c(r,v,u),e(v,d),e(d,xe),rt(I,xe,null),e(v,kt),e(v,we),e(we,Lt),c(r,ot,u),c(r,g,u),e(g,Tt),e(g,k),e(k,Pt),e(g,qt),e(g,L),e(L,St),e(g,Nt),e(g,T),e(T,jt),e(g,Wt),c(r,it,u),c(r,E,u),e(E,Ft),e(E,P),e(P,Rt),e(E,Ct),e(E,q),e(q,Mt),e(E,Jt),c(r,ft,u),c(r,M,u),e(M,Ot),c(r,nt,u),c(r,x,u),e(x,Bt),e(x,S),e(S,Gt),e(x,Ht),e(x,N),e(N,Ut),e(x,Xt),c(r,ht,u),c(r,w,u),e(w,y),e(y,ye),rt(j,ye,null),e(w,Dt),e(w,be),e(be,Yt),c(r,mt,u),c(r,J,u),e(J,Ae),e(Ae,zt),c(r,pt,u),c(r,b,u),e(b,Kt),e(b,$e),e($e,Qt),e(b,Vt),c(r,ut,u),rt(W,r,u),c(r,ct,u),c(r,O,u),e(O,Zt),c(r,vt,u),rt(F,r,u),c(r,gt,u),c(r,B,u),e(B,er),c(r,dt,u),c(r,A,u),e(A,Ie),e(Ie,tr),e(A,rr),e(A,o),e(o,ke),e(ke,G),e(G,ar),e(o,lr),e(o,Le),e(Le,H),e(H,sr),e(o,or),e(o,Te),e(Te,U),e(U,ir),e(o,fr),e(o,Pe),e(Pe,X),e(X,nr),e(o,hr),e(o,qe),e(qe,D),e(D,mr),e(o,pr),e(o,Se),e(Se,Y),e(Y,ur),e(o,cr),e(o,Ne),e(Ne,z),e(z,vr),e(o,gr),e(o,je),e(je,K),e(K,dr),e(o,_r),e(o,We),e(We,Q),e(Q,Er),e(o,xr),e(o,Fe),e(Fe,V),e(V,wr),e(o,yr),e(o,Re),e(Re,Z),e(Z,br),e(o,Ar),e(o,Ce),e(Ce,ee),e(ee,$r),e(o,Ir),e(o,Me),e(Me,te),e(te,kr),e(o,Lr),e(o,Je),e(Je,re),e(re,Tr),e(o,Pr),e(o,Oe),e(Oe,ae),e(ae,qr),e(o,Sr),e(o,Be),e(Be,le),e(le,Nr),e(o,jr),e(o,Ge),e(Ge,se),e(se,Wr),e(o,Fr),e(o,He),e(He,oe),e(oe,Rr),e(o,Cr),e(o,Ue),e(Ue,ie),e(ie,Mr),e(o,Jr),e(o,Xe),e(Xe,fe),e(fe,Or),e(o,Br),e(o,De),e(De,ne),e(ne,Gr),e(o,Hr),e(o,Ye),e(Ye,he),e(he,Ur),e(o,Xr),e(o,ze),e(ze,me),e(me,Dr),e(o,Yr),e(o,Ke),e(Ke,pe),e(pe,zr),e(o,Kr),e(o,Qe),e(Qe,ue),e(ue,Qr),e(o,Vr),e(o,Ve),e(Ve,ce),e(ce,Zr),e(o,ea),e(o,Ze),e(Ze,ve),e(ve,ta),c(r,_t,u),c(r,ge,u),e(ge,ra),c(r,Et,u),rt(R,r,u),c(r,xt,u),c(r,de,u),e(de,aa),wt=!0},p:Sl,i(r){wt||(at(I.$$.fragment,r),at(j.$$.fragment,r),at(W.$$.fragment,r),at(F.$$.fragment,r),at(R.$$.fragment,r),wt=!0)},o(r){lt(I.$$.fragment,r),lt(j.$$.fragment,r),lt(W.$$.fragment,r),lt(F.$$.fragment,r),lt(R.$$.fragment,r),wt=!1},d(r){t(_),r&&t(C),r&&t(v),st(I),r&&t(ot),r&&t(g),r&&t(it),r&&t(E),r&&t(ft),r&&t(M),r&&t(nt),r&&t(x),r&&t(ht),r&&t(w),st(j),r&&t(mt),r&&t(J),r&&t(pt),r&&t(b),r&&t(ut),st(W,r),r&&t(ct),r&&t(O),r&&t(vt),st(F,r),r&&t(gt),r&&t(B),r&&t(dt),r&&t(A),r&&t(_t),r&&t(ge),r&&t(Et),st(R,r),r&&t(xt),r&&t(de)}}}const jl={local:"examples",sections:[{local:"important-note",title:"Important note"}],title:"Examples"};function Wl(It,_,C){let{fw:v}=_;return It.$$set=d=>{"fw"in d&&C(0,v=d.fw)},[v]}class Jl extends Ll{constructor(_){super();Tl(this,_,Wl,Nl,Pl,{fw:0})}}export{Jl as default,jl as metadata};
