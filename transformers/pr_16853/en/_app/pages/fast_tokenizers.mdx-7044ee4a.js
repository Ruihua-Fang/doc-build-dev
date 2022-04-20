import{S as $t,i as jt,s as bt,e as a,k as h,w as N,t as i,M as Pt,c as n,d as t,m,a as o,x as L,h as l,b as p,F as r,g as f,y as B,L as Et,q as x,o as O,B as J,v as St}from"../chunks/vendor-6b77c823.js";import{I as rt}from"../chunks/IconCopyLink-7a11ce68.js";import{C as je}from"../chunks/CodeBlock-3a8b25a8.js";function At(st){let z,ae,u,v,V,j,be,X,Pe,ne,c,Ee,U,Se,Ae,b,qe,Fe,oe,W,Ne,ie,P,le,C,Le,fe,g,T,Y,E,Be,Z,xe,pe,k,Oe,H,Je,Ue,ee,We,Ce,he,S,me,w,He,K,Ke,Me,ce,_,y,te,A,Ie,re,De,ke,M,Re,de,q,ze,d,Ge,I,Qe,Ve,se,Xe,Ye,ue,F,ge,$,Ze,D,et,tt,_e;return j=new rt({}),P=new je({props:{code:`from tokenizers import Tokenizer
from tokenizers.models import BPE
from tokenizers.trainers import BpeTrainer
from tokenizers.pre_tokenizers import Whitespace

tokenizer = Tokenizer(BPE(unk_token="[UNK]"))
trainer = BpeTrainer(special_tokens=["[UNK]", "[CLS]", "[SEP]", "[PAD]", "[MASK]"])

tokenizer.pre_tokenizer = Whitespace()
files = [...]
tokenizer.train(files, trainer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> tokenizers <span class="hljs-keyword">import</span> Tokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> tokenizers.models <span class="hljs-keyword">import</span> BPE
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> tokenizers.trainers <span class="hljs-keyword">import</span> BpeTrainer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> tokenizers.pre_tokenizers <span class="hljs-keyword">import</span> Whitespace

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = Tokenizer(BPE(unk_token=<span class="hljs-string">&quot;[UNK]&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = BpeTrainer(special_tokens=[<span class="hljs-string">&quot;[UNK]&quot;</span>, <span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-string">&quot;[PAD]&quot;</span>, <span class="hljs-string">&quot;[MASK]&quot;</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.pre_tokenizer = Whitespace()
<span class="hljs-meta">&gt;&gt;&gt; </span>files = [...]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.train(files, trainer)`}}),E=new rt({}),S=new je({props:{code:`from transformers import PreTrainedTokenizerFast

fast_tokenizer = PreTrainedTokenizerFast(tokenizer_object=tokenizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PreTrainedTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>fast_tokenizer = PreTrainedTokenizerFast(tokenizer_object=tokenizer)`}}),A=new rt({}),q=new je({props:{code:'tokenizer.save("tokenizer.json")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.save(<span class="hljs-string">&quot;tokenizer.json&quot;</span>)'}}),F=new je({props:{code:`from transformers import PreTrainedTokenizerFast

fast_tokenizer = PreTrainedTokenizerFast(tokenizer_file="tokenizer.json")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PreTrainedTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>fast_tokenizer = PreTrainedTokenizerFast(tokenizer_file=<span class="hljs-string">&quot;tokenizer.json&quot;</span>)`}}),{c(){z=a("meta"),ae=h(),u=a("h1"),v=a("a"),V=a("span"),N(j.$$.fragment),be=h(),X=a("span"),Pe=i("Use tokenizers from \u{1F917} Tokenizers"),ne=h(),c=a("p"),Ee=i("The "),U=a("a"),Se=i("PreTrainedTokenizerFast"),Ae=i(" depends on the "),b=a("a"),qe=i("\u{1F917} Tokenizers"),Fe=i(` library. The tokenizers obtained from the \u{1F917} Tokenizers library can be
loaded very simply into \u{1F917} Transformers.`),oe=h(),W=a("p"),Ne=i("Before getting in the specifics, let\u2019s first start by creating a dummy tokenizer in a few lines:"),ie=h(),N(P.$$.fragment),le=h(),C=a("p"),Le=i(`We now have a tokenizer trained on the files we defined. We can either continue using it in that runtime, or save it to
a JSON file for future re-use.`),fe=h(),g=a("h2"),T=a("a"),Y=a("span"),N(E.$$.fragment),Be=h(),Z=a("span"),xe=i("Loading directly from the tokenizer object"),pe=h(),k=a("p"),Oe=i(`Let\u2019s see how to leverage this tokenizer object in the \u{1F917} Transformers library. The
`),H=a("a"),Je=i("PreTrainedTokenizerFast"),Ue=i(` class allows for easy instantiation, by accepting the instantiated
`),ee=a("em"),We=i("tokenizer"),Ce=i(" object as an argument:"),he=h(),N(S.$$.fragment),me=h(),w=a("p"),He=i("This object can now be used with all the methods shared by the \u{1F917} Transformers tokenizers! Head to "),K=a("a"),Ke=i(`the tokenizer
page`),Me=i(" for more information."),ce=h(),_=a("h2"),y=a("a"),te=a("span"),N(A.$$.fragment),Ie=h(),re=a("span"),De=i("Loading from a JSON file"),ke=h(),M=a("p"),Re=i("In order to load a tokenizer from a JSON file, let\u2019s first start by saving our tokenizer:"),de=h(),N(q.$$.fragment),ze=h(),d=a("p"),Ge=i("The path to which we saved this file can be passed to the "),I=a("a"),Qe=i("PreTrainedTokenizerFast"),Ve=i(` initialization
method using the `),se=a("code"),Xe=i("tokenizer_file"),Ye=i(" parameter:"),ue=h(),N(F.$$.fragment),ge=h(),$=a("p"),Ze=i("This object can now be used with all the methods shared by the \u{1F917} Transformers tokenizers! Head to "),D=a("a"),et=i(`the tokenizer
page`),tt=i(" for more information."),this.h()},l(e){const s=Pt('[data-svelte="svelte-1phssyn"]',document.head);z=n(s,"META",{name:!0,content:!0}),s.forEach(t),ae=m(e),u=n(e,"H1",{class:!0});var ve=o(u);v=n(ve,"A",{id:!0,class:!0,href:!0});var at=o(v);V=n(at,"SPAN",{});var nt=o(V);L(j.$$.fragment,nt),nt.forEach(t),at.forEach(t),be=m(ve),X=n(ve,"SPAN",{});var ot=o(X);Pe=l(ot,"Use tokenizers from \u{1F917} Tokenizers"),ot.forEach(t),ve.forEach(t),ne=m(e),c=n(e,"P",{});var R=o(c);Ee=l(R,"The "),U=n(R,"A",{href:!0});var it=o(U);Se=l(it,"PreTrainedTokenizerFast"),it.forEach(t),Ae=l(R," depends on the "),b=n(R,"A",{href:!0,rel:!0});var lt=o(b);qe=l(lt,"\u{1F917} Tokenizers"),lt.forEach(t),Fe=l(R,` library. The tokenizers obtained from the \u{1F917} Tokenizers library can be
loaded very simply into \u{1F917} Transformers.`),R.forEach(t),oe=m(e),W=n(e,"P",{});var ft=o(W);Ne=l(ft,"Before getting in the specifics, let\u2019s first start by creating a dummy tokenizer in a few lines:"),ft.forEach(t),ie=m(e),L(P.$$.fragment,e),le=m(e),C=n(e,"P",{});var pt=o(C);Le=l(pt,`We now have a tokenizer trained on the files we defined. We can either continue using it in that runtime, or save it to
a JSON file for future re-use.`),pt.forEach(t),fe=m(e),g=n(e,"H2",{class:!0});var Te=o(g);T=n(Te,"A",{id:!0,class:!0,href:!0});var ht=o(T);Y=n(ht,"SPAN",{});var mt=o(Y);L(E.$$.fragment,mt),mt.forEach(t),ht.forEach(t),Be=m(Te),Z=n(Te,"SPAN",{});var ct=o(Z);xe=l(ct,"Loading directly from the tokenizer object"),ct.forEach(t),Te.forEach(t),pe=m(e),k=n(e,"P",{});var G=o(k);Oe=l(G,`Let\u2019s see how to leverage this tokenizer object in the \u{1F917} Transformers library. The
`),H=n(G,"A",{href:!0});var kt=o(H);Je=l(kt,"PreTrainedTokenizerFast"),kt.forEach(t),Ue=l(G,` class allows for easy instantiation, by accepting the instantiated
`),ee=n(G,"EM",{});var dt=o(ee);We=l(dt,"tokenizer"),dt.forEach(t),Ce=l(G," object as an argument:"),G.forEach(t),he=m(e),L(S.$$.fragment,e),me=m(e),w=n(e,"P",{});var we=o(w);He=l(we,"This object can now be used with all the methods shared by the \u{1F917} Transformers tokenizers! Head to "),K=n(we,"A",{href:!0});var zt=o(K);Ke=l(zt,`the tokenizer
page`),zt.forEach(t),Me=l(we," for more information."),we.forEach(t),ce=m(e),_=n(e,"H2",{class:!0});var ye=o(_);y=n(ye,"A",{id:!0,class:!0,href:!0});var ut=o(y);te=n(ut,"SPAN",{});var gt=o(te);L(A.$$.fragment,gt),gt.forEach(t),ut.forEach(t),Ie=m(ye),re=n(ye,"SPAN",{});var _t=o(re);De=l(_t,"Loading from a JSON file"),_t.forEach(t),ye.forEach(t),ke=m(e),M=n(e,"P",{});var vt=o(M);Re=l(vt,"In order to load a tokenizer from a JSON file, let\u2019s first start by saving our tokenizer:"),vt.forEach(t),de=m(e),L(q.$$.fragment,e),ze=m(e),d=n(e,"P",{});var Q=o(d);Ge=l(Q,"The path to which we saved this file can be passed to the "),I=n(Q,"A",{href:!0});var Tt=o(I);Qe=l(Tt,"PreTrainedTokenizerFast"),Tt.forEach(t),Ve=l(Q,` initialization
method using the `),se=n(Q,"CODE",{});var wt=o(se);Xe=l(wt,"tokenizer_file"),wt.forEach(t),Ye=l(Q," parameter:"),Q.forEach(t),ue=m(e),L(F.$$.fragment,e),ge=m(e),$=n(e,"P",{});var $e=o($);Ze=l($e,"This object can now be used with all the methods shared by the \u{1F917} Transformers tokenizers! Head to "),D=n($e,"A",{href:!0});var yt=o(D);et=l(yt,`the tokenizer
page`),yt.forEach(t),tt=l($e," for more information."),$e.forEach(t),this.h()},h(){p(z,"name","hf:doc:metadata"),p(z,"content",JSON.stringify(qt)),p(v,"id","use-tokenizers-from-tokenizers"),p(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(v,"href","#use-tokenizers-from-tokenizers"),p(u,"class","relative group"),p(U,"href","/docs/transformers/pr_16853/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),p(b,"href","https://huggingface.co/docs/tokenizers"),p(b,"rel","nofollow"),p(T,"id","loading-directly-from-the-tokenizer-object"),p(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(T,"href","#loading-directly-from-the-tokenizer-object"),p(g,"class","relative group"),p(H,"href","/docs/transformers/pr_16853/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),p(K,"href","main_classes/tokenizer"),p(y,"id","loading-from-a-json-file"),p(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(y,"href","#loading-from-a-json-file"),p(_,"class","relative group"),p(I,"href","/docs/transformers/pr_16853/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),p(D,"href","main_classes/tokenizer")},m(e,s){r(document.head,z),f(e,ae,s),f(e,u,s),r(u,v),r(v,V),B(j,V,null),r(u,be),r(u,X),r(X,Pe),f(e,ne,s),f(e,c,s),r(c,Ee),r(c,U),r(U,Se),r(c,Ae),r(c,b),r(b,qe),r(c,Fe),f(e,oe,s),f(e,W,s),r(W,Ne),f(e,ie,s),B(P,e,s),f(e,le,s),f(e,C,s),r(C,Le),f(e,fe,s),f(e,g,s),r(g,T),r(T,Y),B(E,Y,null),r(g,Be),r(g,Z),r(Z,xe),f(e,pe,s),f(e,k,s),r(k,Oe),r(k,H),r(H,Je),r(k,Ue),r(k,ee),r(ee,We),r(k,Ce),f(e,he,s),B(S,e,s),f(e,me,s),f(e,w,s),r(w,He),r(w,K),r(K,Ke),r(w,Me),f(e,ce,s),f(e,_,s),r(_,y),r(y,te),B(A,te,null),r(_,Ie),r(_,re),r(re,De),f(e,ke,s),f(e,M,s),r(M,Re),f(e,de,s),B(q,e,s),f(e,ze,s),f(e,d,s),r(d,Ge),r(d,I),r(I,Qe),r(d,Ve),r(d,se),r(se,Xe),r(d,Ye),f(e,ue,s),B(F,e,s),f(e,ge,s),f(e,$,s),r($,Ze),r($,D),r(D,et),r($,tt),_e=!0},p:Et,i(e){_e||(x(j.$$.fragment,e),x(P.$$.fragment,e),x(E.$$.fragment,e),x(S.$$.fragment,e),x(A.$$.fragment,e),x(q.$$.fragment,e),x(F.$$.fragment,e),_e=!0)},o(e){O(j.$$.fragment,e),O(P.$$.fragment,e),O(E.$$.fragment,e),O(S.$$.fragment,e),O(A.$$.fragment,e),O(q.$$.fragment,e),O(F.$$.fragment,e),_e=!1},d(e){t(z),e&&t(ae),e&&t(u),J(j),e&&t(ne),e&&t(c),e&&t(oe),e&&t(W),e&&t(ie),J(P,e),e&&t(le),e&&t(C),e&&t(fe),e&&t(g),J(E),e&&t(pe),e&&t(k),e&&t(he),J(S,e),e&&t(me),e&&t(w),e&&t(ce),e&&t(_),J(A),e&&t(ke),e&&t(M),e&&t(de),J(q,e),e&&t(ze),e&&t(d),e&&t(ue),J(F,e),e&&t(ge),e&&t($)}}}const qt={local:"use-tokenizers-from-tokenizers",sections:[{local:"loading-directly-from-the-tokenizer-object",title:"Loading directly from the tokenizer object"},{local:"loading-from-a-json-file",title:"Loading from a JSON file"}],title:"Use tokenizers from \u{1F917} Tokenizers"};function Ft(st){return St(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xt extends $t{constructor(z){super();jt(this,z,Ft,At,bt,{})}}export{xt as default,qt as metadata};
