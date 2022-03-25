import{S as St,i as Wt,s as Ct,e as o,k as u,w as J,t as r,M as It,c as i,d as t,m,a as l,x as R,h as n,b as c,F as s,g as h,y as U,q as G,o as K,B as Q,v as Ot}from"../chunks/vendor-aa873a46.js";import{T as Ht}from"../chunks/Tip-f7f252ab.js";import{I as lt}from"../chunks/IconCopyLink-d0ca3106.js";import{C as qt}from"../chunks/CodeBlock-1f14baf3.js";function Nt(V){let p,w,f,y,b,d,v,$,j,H,P;return{c(){p=o("p"),w=r("Transforms are any of the processing methods from the "),f=o("a"),y=r("How-to Process"),b=r(" guides such as "),d=o("a"),v=r("Dataset.map()"),$=r(" or "),j=o("a"),H=r("Dataset.shuffle()"),P=r("."),this.h()},l(x){p=i(x,"P",{});var g=l(p);w=n(g,"Transforms are any of the processing methods from the "),f=i(g,"A",{href:!0});var k=l(f);y=n(k,"How-to Process"),k.forEach(t),b=n(g," guides such as "),d=i(g,"A",{href:!0});var E=l(d);v=n(E,"Dataset.map()"),E.forEach(t),$=n(g," or "),j=i(g,"A",{href:!0});var q=l(j);H=n(q,"Dataset.shuffle()"),q.forEach(t),P=n(g,"."),g.forEach(t),this.h()},h(){c(f,"href","./process"),c(d,"href","/docs/datasets/pr_4019/en/package_reference/main_classes#datasets.Dataset.map"),c(j,"href","/docs/datasets/pr_4019/en/package_reference/main_classes#datasets.Dataset.shuffle")},m(x,g){h(x,p,g),s(p,w),s(p,f),s(f,y),s(p,b),s(p,d),s(d,v),s(p,$),s(p,j),s(j,H),s(p,P)},d(x){x&&t(p)}}}function Ft(V){let p,w,f,y,b;return{c(){p=o("p"),w=r("When caching is disabled, use "),f=o("a"),y=r("Dataset.save_to_disk()"),b=r(" to save your transformed dataset or it will be deleted once the session ends."),this.h()},l(d){p=i(d,"P",{});var v=l(p);w=n(v,"When caching is disabled, use "),f=i(v,"A",{href:!0});var $=l(f);y=n($,"Dataset.save_to_disk()"),$.forEach(t),b=n(v," to save your transformed dataset or it will be deleted once the session ends."),v.forEach(t),this.h()},h(){c(f,"href","/docs/datasets/pr_4019/en/package_reference/main_classes#datasets.Dataset.save_to_disk")},m(d,v){h(d,p,v),s(p,w),s(p,f),s(f,y),s(p,b)},d(d){d&&t(p)}}}function Mt(V){let p,w,f,y,b,d,v,$,j,H,P,x,g,k,E,q,N,Se,ne,We,ue,X,Ce,me,S,ye,Z,Ie,ge,F,ve,A,Oe,M,Ne,Fe,z,Me,ze,_e,ee,Be,be,te,Le,we,W,$e,T,C,oe,B,Ye,ie,Je,ke,_,Re,le,Ue,Ge,he,Ke,Qe,pe,Ve,Xe,fe,Ze,et,Ee,I,tt,se,st,at,je,L,Pe,O,rt,ce,nt,ot,Ae,ae,it,De;return d=new lt({}),N=new lt({}),S=new Ht({props:{$$slots:{default:[Nt]},$$scope:{ctx:V}}}),F=new qt({props:{code:`from datasets import Dataset
dataset1 = Dataset.from_dict({"a": [0, 1, 2]})
dataset2 = dataset1.map(lambda x: {"a": x["a"] + 1})
print(dataset1._fingerprint, dataset2._fingerprint)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> Dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset1 = Dataset.from_dict({<span class="hljs-string">&quot;a&quot;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>]})
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset2 = dataset1.<span class="hljs-built_in">map</span>(<span class="hljs-keyword">lambda</span> x: {<span class="hljs-string">&quot;a&quot;</span>: x[<span class="hljs-string">&quot;a&quot;</span>] + <span class="hljs-number">1</span>})
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(dataset1._fingerprint, dataset2._fingerprint)
d19493523d95e2dc 5b86abacd4b42434`}}),W=new Ht({props:{$$slots:{default:[Ft]},$$scope:{ctx:V}}}),B=new lt({}),L=new qt({props:{code:`from datasets.fingerprint import Hasher
my_func = lambda example: {"length": len(example["text"])}
print(Hasher.hash(my_func))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets.fingerprint <span class="hljs-keyword">import</span> Hasher
<span class="hljs-meta">&gt;&gt;&gt; </span>my_func = <span class="hljs-keyword">lambda</span> example: {<span class="hljs-string">&quot;length&quot;</span>: <span class="hljs-built_in">len</span>(example[<span class="hljs-string">&quot;text&quot;</span>])}
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(Hasher.<span class="hljs-built_in">hash</span>(my_func))
<span class="hljs-string">&#x27;3d35e2b3e94c81d6&#x27;</span>`}}),{c(){p=o("meta"),w=u(),f=o("h1"),y=o("a"),b=o("span"),J(d.$$.fragment),v=u(),$=o("span"),j=r("The cache"),H=u(),P=o("p"),x=r("The cache is one of the reasons why \u{1F917} Datasets is so efficient. It stores previously downloaded and processed datasets so when you need to use them again, they are reloaded directly from the cache. This avoids having to download a dataset all over again, or reapplying processing functions. Even after you close and start another Python session, \u{1F917} Datasets will reload your dataset directly from the cache!"),g=u(),k=o("h2"),E=o("a"),q=o("span"),J(N.$$.fragment),Se=u(),ne=o("span"),We=r("Fingerprint"),ue=u(),X=o("p"),Ce=r("How does the cache keeps track of what transforms are applied to a dataset? Well, \u{1F917} Datasets assigns a fingerprint to the cache file. A fingerprint keeps track of the current state of a dataset. The initial fingerprint is computed using a hash from the Arrow table, or a hash of the Arrow files if the dataset is on disk. Subsequent fingerprints are computed by combining the fingerprint of the previous state, and a hash of the latest transform applied."),me=u(),J(S.$$.fragment),ye=u(),Z=o("p"),Ie=r("Here are what the actual fingerprints look like:"),ge=u(),J(F.$$.fragment),ve=u(),A=o("p"),Oe=r("In order for a transform to be hashable, it needs to be picklable by "),M=o("a"),Ne=r("dill"),Fe=r(" or "),z=o("a"),Me=r("pickle"),ze=r("."),_e=u(),ee=o("p"),Be=r("When you use a non-hashable transform, \u{1F917} Datasets uses a random fingerprint instead and raises a warning. The non-hashable transform is considered different from the previous transforms. As a result, \u{1F917} Datasets will recompute all the transforms. Make sure your transforms are serializable with pickle or dill to avoid this!"),be=u(),te=o("p"),Le=r("An example of when \u{1F917} Datasets recomputes everything is when caching is disabled. When this happens, the cache files are generated every time and they get written to a temporary directory. Once your Python session ends, the cache files in the temporary directory are deleted. A random hash is assigned to these cache files, instead of a fingerprint."),we=u(),J(W.$$.fragment),$e=u(),T=o("h2"),C=o("a"),oe=o("span"),J(B.$$.fragment),Ye=u(),ie=o("span"),Je=r("Hashing"),ke=u(),_=o("p"),Re=r("The fingerprint of a dataset is updated by hashing the function passed to "),le=o("code"),Ue=r("map"),Ge=r(" as well as the "),he=o("code"),Ke=r("map"),Qe=r(" parameters ("),pe=o("code"),Ve=r("batch_size"),Xe=r(", "),fe=o("code"),Ze=r("remove_columns"),et=r(", etc.)."),Ee=u(),I=o("p"),tt=r("You can check the hash of any Python object using the "),se=o("a"),st=r("fingerprint.Hasher"),at=r(":"),je=u(),J(L.$$.fragment),Pe=u(),O=o("p"),rt=r("The hash is computed by dumping the object using a "),ce=o("code"),nt=r("dill"),ot=r(` pickler and hashing the dumped bytes.
The pickler recursively dumps all the variables used in your function, so any change you do to an object that is used in your function, will cause the hash to change.`),Ae=u(),ae=o("p"),it=r(`If one of your functions doesn\u2019t seem to have the same hash across sessions, it means at least one of its variables contains a Python object that is not deterministic.
When this happens, feel free to hash any object you find suspicious to try to find the object that caused the hash to change.
For example, if you use a list for which the order of its elements is not deterministic across sessions, then the hash won\u2019t be the same across sessions either.`),this.h()},l(e){const a=It('[data-svelte="svelte-1phssyn"]',document.head);p=i(a,"META",{name:!0,content:!0}),a.forEach(t),w=m(e),f=i(e,"H1",{class:!0});var Y=l(f);y=i(Y,"A",{id:!0,class:!0,href:!0});var de=l(y);b=i(de,"SPAN",{});var ht=l(b);R(d.$$.fragment,ht),ht.forEach(t),de.forEach(t),v=m(Y),$=i(Y,"SPAN",{});var pt=l($);j=n(pt,"The cache"),pt.forEach(t),Y.forEach(t),H=m(e),P=i(e,"P",{});var ft=l(P);x=n(ft,"The cache is one of the reasons why \u{1F917} Datasets is so efficient. It stores previously downloaded and processed datasets so when you need to use them again, they are reloaded directly from the cache. This avoids having to download a dataset all over again, or reapplying processing functions. Even after you close and start another Python session, \u{1F917} Datasets will reload your dataset directly from the cache!"),ft.forEach(t),g=m(e),k=i(e,"H2",{class:!0});var xe=l(k);E=i(xe,"A",{id:!0,class:!0,href:!0});var ct=l(E);q=i(ct,"SPAN",{});var dt=l(q);R(N.$$.fragment,dt),dt.forEach(t),ct.forEach(t),Se=m(xe),ne=i(xe,"SPAN",{});var ut=l(ne);We=n(ut,"Fingerprint"),ut.forEach(t),xe.forEach(t),ue=m(e),X=i(e,"P",{});var mt=l(X);Ce=n(mt,"How does the cache keeps track of what transforms are applied to a dataset? Well, \u{1F917} Datasets assigns a fingerprint to the cache file. A fingerprint keeps track of the current state of a dataset. The initial fingerprint is computed using a hash from the Arrow table, or a hash of the Arrow files if the dataset is on disk. Subsequent fingerprints are computed by combining the fingerprint of the previous state, and a hash of the latest transform applied."),mt.forEach(t),me=m(e),R(S.$$.fragment,e),ye=m(e),Z=i(e,"P",{});var yt=l(Z);Ie=n(yt,"Here are what the actual fingerprints look like:"),yt.forEach(t),ge=m(e),R(F.$$.fragment,e),ve=m(e),A=i(e,"P",{});var re=l(A);Oe=n(re,"In order for a transform to be hashable, it needs to be picklable by "),M=i(re,"A",{href:!0,rel:!0});var gt=l(M);Ne=n(gt,"dill"),gt.forEach(t),Fe=n(re," or "),z=i(re,"A",{href:!0,rel:!0});var vt=l(z);Me=n(vt,"pickle"),vt.forEach(t),ze=n(re,"."),re.forEach(t),_e=m(e),ee=i(e,"P",{});var _t=l(ee);Be=n(_t,"When you use a non-hashable transform, \u{1F917} Datasets uses a random fingerprint instead and raises a warning. The non-hashable transform is considered different from the previous transforms. As a result, \u{1F917} Datasets will recompute all the transforms. Make sure your transforms are serializable with pickle or dill to avoid this!"),_t.forEach(t),be=m(e),te=i(e,"P",{});var bt=l(te);Le=n(bt,"An example of when \u{1F917} Datasets recomputes everything is when caching is disabled. When this happens, the cache files are generated every time and they get written to a temporary directory. Once your Python session ends, the cache files in the temporary directory are deleted. A random hash is assigned to these cache files, instead of a fingerprint."),bt.forEach(t),we=m(e),R(W.$$.fragment,e),$e=m(e),T=i(e,"H2",{class:!0});var Te=l(T);C=i(Te,"A",{id:!0,class:!0,href:!0});var wt=l(C);oe=i(wt,"SPAN",{});var $t=l(oe);R(B.$$.fragment,$t),$t.forEach(t),wt.forEach(t),Ye=m(Te),ie=i(Te,"SPAN",{});var kt=l(ie);Je=n(kt,"Hashing"),kt.forEach(t),Te.forEach(t),ke=m(e),_=i(e,"P",{});var D=l(_);Re=n(D,"The fingerprint of a dataset is updated by hashing the function passed to "),le=i(D,"CODE",{});var Et=l(le);Ue=n(Et,"map"),Et.forEach(t),Ge=n(D," as well as the "),he=i(D,"CODE",{});var jt=l(he);Ke=n(jt,"map"),jt.forEach(t),Qe=n(D," parameters ("),pe=i(D,"CODE",{});var Pt=l(pe);Ve=n(Pt,"batch_size"),Pt.forEach(t),Xe=n(D,", "),fe=i(D,"CODE",{});var At=l(fe);Ze=n(At,"remove_columns"),At.forEach(t),et=n(D,", etc.)."),D.forEach(t),Ee=m(e),I=i(e,"P",{});var He=l(I);tt=n(He,"You can check the hash of any Python object using the "),se=i(He,"A",{href:!0});var Dt=l(se);st=n(Dt,"fingerprint.Hasher"),Dt.forEach(t),at=n(He,":"),He.forEach(t),je=m(e),R(L.$$.fragment,e),Pe=m(e),O=i(e,"P",{});var qe=l(O);rt=n(qe,"The hash is computed by dumping the object using a "),ce=i(qe,"CODE",{});var xt=l(ce);nt=n(xt,"dill"),xt.forEach(t),ot=n(qe,` pickler and hashing the dumped bytes.
The pickler recursively dumps all the variables used in your function, so any change you do to an object that is used in your function, will cause the hash to change.`),qe.forEach(t),Ae=m(e),ae=i(e,"P",{});var Tt=l(ae);it=n(Tt,`If one of your functions doesn\u2019t seem to have the same hash across sessions, it means at least one of its variables contains a Python object that is not deterministic.
When this happens, feel free to hash any object you find suspicious to try to find the object that caused the hash to change.
For example, if you use a list for which the order of its elements is not deterministic across sessions, then the hash won\u2019t be the same across sessions either.`),Tt.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(zt)),c(y,"id","the-cache"),c(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(y,"href","#the-cache"),c(f,"class","relative group"),c(E,"id","fingerprint"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#fingerprint"),c(k,"class","relative group"),c(M,"href","https://dill.readthedocs.io/en/latest/"),c(M,"rel","nofollow"),c(z,"href","https://docs.python.org/3/library/pickle"),c(z,"rel","nofollow"),c(C,"id","hashing"),c(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(C,"href","#hashing"),c(T,"class","relative group"),c(se,"href","/docs/datasets/pr_4019/en/package_reference/main_classes#datasets.fingerprint.Hasher")},m(e,a){s(document.head,p),h(e,w,a),h(e,f,a),s(f,y),s(y,b),U(d,b,null),s(f,v),s(f,$),s($,j),h(e,H,a),h(e,P,a),s(P,x),h(e,g,a),h(e,k,a),s(k,E),s(E,q),U(N,q,null),s(k,Se),s(k,ne),s(ne,We),h(e,ue,a),h(e,X,a),s(X,Ce),h(e,me,a),U(S,e,a),h(e,ye,a),h(e,Z,a),s(Z,Ie),h(e,ge,a),U(F,e,a),h(e,ve,a),h(e,A,a),s(A,Oe),s(A,M),s(M,Ne),s(A,Fe),s(A,z),s(z,Me),s(A,ze),h(e,_e,a),h(e,ee,a),s(ee,Be),h(e,be,a),h(e,te,a),s(te,Le),h(e,we,a),U(W,e,a),h(e,$e,a),h(e,T,a),s(T,C),s(C,oe),U(B,oe,null),s(T,Ye),s(T,ie),s(ie,Je),h(e,ke,a),h(e,_,a),s(_,Re),s(_,le),s(le,Ue),s(_,Ge),s(_,he),s(he,Ke),s(_,Qe),s(_,pe),s(pe,Ve),s(_,Xe),s(_,fe),s(fe,Ze),s(_,et),h(e,Ee,a),h(e,I,a),s(I,tt),s(I,se),s(se,st),s(I,at),h(e,je,a),U(L,e,a),h(e,Pe,a),h(e,O,a),s(O,rt),s(O,ce),s(ce,nt),s(O,ot),h(e,Ae,a),h(e,ae,a),s(ae,it),De=!0},p(e,[a]){const Y={};a&2&&(Y.$$scope={dirty:a,ctx:e}),S.$set(Y);const de={};a&2&&(de.$$scope={dirty:a,ctx:e}),W.$set(de)},i(e){De||(G(d.$$.fragment,e),G(N.$$.fragment,e),G(S.$$.fragment,e),G(F.$$.fragment,e),G(W.$$.fragment,e),G(B.$$.fragment,e),G(L.$$.fragment,e),De=!0)},o(e){K(d.$$.fragment,e),K(N.$$.fragment,e),K(S.$$.fragment,e),K(F.$$.fragment,e),K(W.$$.fragment,e),K(B.$$.fragment,e),K(L.$$.fragment,e),De=!1},d(e){t(p),e&&t(w),e&&t(f),Q(d),e&&t(H),e&&t(P),e&&t(g),e&&t(k),Q(N),e&&t(ue),e&&t(X),e&&t(me),Q(S,e),e&&t(ye),e&&t(Z),e&&t(ge),Q(F,e),e&&t(ve),e&&t(A),e&&t(_e),e&&t(ee),e&&t(be),e&&t(te),e&&t(we),Q(W,e),e&&t($e),e&&t(T),Q(B),e&&t(ke),e&&t(_),e&&t(Ee),e&&t(I),e&&t(je),Q(L,e),e&&t(Pe),e&&t(O),e&&t(Ae),e&&t(ae)}}}const zt={local:"the-cache",sections:[{local:"fingerprint",title:"Fingerprint"},{local:"hashing",title:"Hashing"}],title:"The cache"};function Bt(V){return Ot(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ut extends St{constructor(p){super();Wt(this,p,Bt,Mt,Ct,{})}}export{Ut as default,zt as metadata};
