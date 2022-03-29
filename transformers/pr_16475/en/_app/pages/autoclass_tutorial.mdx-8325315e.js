import{S as ma,i as da,s as $a,e as l,k as m,w as M,t as r,M as ka,c as i,d as t,m as d,a as c,x as C,h as o,b as $,F as a,g as f,y as z,q as L,o as S,B as N,v as va,L as ua}from"../chunks/vendor-6b77c823.js";import{T as _a}from"../chunks/Tip-39098574.js";import{I as Ge}from"../chunks/IconCopyLink-7a11ce68.js";import{C as ve}from"../chunks/CodeBlock-3a8b25a8.js";import{F as wa,M as ha}from"../chunks/Markdown-4489c441.js";function ba(X){let n,w,p,k,b,_,H,T;return{c(){n=l("p"),w=r("Remember, architecture refers to the skeleton of the model and checkpoints are the weights for a given architecture. For example, "),p=l("a"),k=r("BERT"),b=r(" is an architecture, while "),_=l("code"),H=r("bert-base-uncased"),T=r(" is a checkpoint. Model is a general term that can mean either architecture or checkpoint."),this.h()},l(j){n=i(j,"P",{});var E=c(n);w=o(E,"Remember, architecture refers to the skeleton of the model and checkpoints are the weights for a given architecture. For example, "),p=i(E,"A",{href:!0,rel:!0});var y=c(p);k=o(y,"BERT"),y.forEach(t),b=o(E," is an architecture, while "),_=i(E,"CODE",{});var g=c(_);H=o(g,"bert-base-uncased"),g.forEach(t),T=o(E," is a checkpoint. Model is a general term that can mean either architecture or checkpoint."),E.forEach(t),this.h()},h(){$(p,"href","https://huggingface.co/bert-base-uncased"),$(p,"rel","nofollow")},m(j,E){f(j,n,E),a(n,w),a(n,p),a(p,k),a(n,b),a(n,_),a(_,H),a(n,T)},d(j){j&&t(n)}}}function ya(X){let n,w,p,k,b,_,H,T,j,E,y,g,R,q,Y,B,x,W,v,I,O,U,Z,D,F,J,P,ee,K,Q;return g=new ve({props:{code:`from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),x=new ve({props:{code:`from transformers import AutoModelForTokenClassification

model = AutoModelForTokenClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),{c(){n=l("p"),w=r("Finally, the "),p=l("code"),k=r("AutoModelFor"),b=r(" classes let you load a pretrained model for a given task (see "),_=l("a"),H=r("here"),T=r(" for a complete list of available tasks). For example, load a model for sequence classification with "),j=l("code"),E=r("AutoModelForSequenceClassification.from_pretrained()"),y=m(),M(g.$$.fragment),R=m(),q=l("p"),Y=r("Easily reuse the same checkpoint to load an architecture for a different task:"),B=m(),M(x.$$.fragment),W=m(),v=l("p"),I=r("Generally, we recommend using the "),O=l("code"),U=r("AutoTokenizer"),Z=r(" class and the "),D=l("code"),F=r("AutoModelFor"),J=r(" class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),P=l("a"),ee=r("tutorial"),K=r(", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),this.h()},l(s){n=i(s,"P",{});var h=c(n);w=o(h,"Finally, the "),p=i(h,"CODE",{});var se=c(p);k=o(se,"AutoModelFor"),se.forEach(t),b=o(h," classes let you load a pretrained model for a given task (see "),_=i(h,"A",{href:!0});var re=c(_);H=o(re,"here"),re.forEach(t),T=o(h," for a complete list of available tasks). For example, load a model for sequence classification with "),j=i(h,"CODE",{});var te=c(j);E=o(te,"AutoModelForSequenceClassification.from_pretrained()"),te.forEach(t),h.forEach(t),y=d(s),C(g.$$.fragment,s),R=d(s),q=i(s,"P",{});var oe=c(q);Y=o(oe,"Easily reuse the same checkpoint to load an architecture for a different task:"),oe.forEach(t),B=d(s),C(x.$$.fragment,s),W=d(s),v=i(s,"P",{});var A=c(v);I=o(A,"Generally, we recommend using the "),O=i(A,"CODE",{});var G=c(O);U=o(G,"AutoTokenizer"),G.forEach(t),Z=o(A," class and the "),D=i(A,"CODE",{});var V=c(D);F=o(V,"AutoModelFor"),V.forEach(t),J=o(A," class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),P=i(A,"A",{href:!0});var ae=c(P);ee=o(ae,"tutorial"),ae.forEach(t),K=o(A,", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),A.forEach(t),this.h()},h(){$(_,"href","model_doc/auto"),$(P,"href","preprocessing")},m(s,h){f(s,n,h),a(n,w),a(n,p),a(p,k),a(n,b),a(n,_),a(_,H),a(n,T),a(n,j),a(j,E),f(s,y,h),z(g,s,h),f(s,R,h),f(s,q,h),a(q,Y),f(s,B,h),z(x,s,h),f(s,W,h),f(s,v,h),a(v,I),a(v,O),a(O,U),a(v,Z),a(v,D),a(D,F),a(v,J),a(v,P),a(P,ee),a(v,K),Q=!0},p:ua,i(s){Q||(L(g.$$.fragment,s),L(x.$$.fragment,s),Q=!0)},o(s){S(g.$$.fragment,s),S(x.$$.fragment,s),Q=!1},d(s){s&&t(n),s&&t(y),N(g,s),s&&t(R),s&&t(q),s&&t(B),N(x,s),s&&t(W),s&&t(v)}}}function ga(X){let n,w;return n=new ha({props:{$$slots:{default:[ya]},$$scope:{ctx:X}}}),{c(){M(n.$$.fragment)},l(p){C(n.$$.fragment,p)},m(p,k){z(n,p,k),w=!0},p(p,k){const b={};k&2&&(b.$$scope={dirty:k,ctx:p}),n.$set(b)},i(p){w||(L(n.$$.fragment,p),w=!0)},o(p){S(n.$$.fragment,p),w=!1},d(p){N(n,p)}}}function Aa(X){let n,w,p,k,b,_,H,T,j,E,y,g,R,q,Y,B,x,W,v,I,O,U,Z,D,F,J,P,ee,K,Q;return g=new ve({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),x=new ve({props:{code:`from transformers import TFAutoModelForTokenClassification

model = TFAutoModelForTokenClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),{c(){n=l("p"),w=r("Finally, the "),p=l("code"),k=r("TFAutoModelFor"),b=r(" classes let you load a pretrained model for a given task (see "),_=l("a"),H=r("here"),T=r(" for a complete list of available tasks). For example, load a model for sequence classification with "),j=l("code"),E=r("TFAutoModelForSequenceClassification.from_pretrained()"),y=m(),M(g.$$.fragment),R=m(),q=l("p"),Y=r("Easily reuse the same checkpoint to load an architecture for a different task:"),B=m(),M(x.$$.fragment),W=m(),v=l("p"),I=r("Generally, we recommend using the "),O=l("code"),U=r("AutoTokenizer"),Z=r(" class and the "),D=l("code"),F=r("TFAutoModelFor"),J=r(" class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),P=l("a"),ee=r("tutorial"),K=r(", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),this.h()},l(s){n=i(s,"P",{});var h=c(n);w=o(h,"Finally, the "),p=i(h,"CODE",{});var se=c(p);k=o(se,"TFAutoModelFor"),se.forEach(t),b=o(h," classes let you load a pretrained model for a given task (see "),_=i(h,"A",{href:!0});var re=c(_);H=o(re,"here"),re.forEach(t),T=o(h," for a complete list of available tasks). For example, load a model for sequence classification with "),j=i(h,"CODE",{});var te=c(j);E=o(te,"TFAutoModelForSequenceClassification.from_pretrained()"),te.forEach(t),h.forEach(t),y=d(s),C(g.$$.fragment,s),R=d(s),q=i(s,"P",{});var oe=c(q);Y=o(oe,"Easily reuse the same checkpoint to load an architecture for a different task:"),oe.forEach(t),B=d(s),C(x.$$.fragment,s),W=d(s),v=i(s,"P",{});var A=c(v);I=o(A,"Generally, we recommend using the "),O=i(A,"CODE",{});var G=c(O);U=o(G,"AutoTokenizer"),G.forEach(t),Z=o(A," class and the "),D=i(A,"CODE",{});var V=c(D);F=o(V,"TFAutoModelFor"),V.forEach(t),J=o(A," class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),P=i(A,"A",{href:!0});var ae=c(P);ee=o(ae,"tutorial"),ae.forEach(t),K=o(A,", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),A.forEach(t),this.h()},h(){$(_,"href","model_doc/auto"),$(P,"href","preprocessing")},m(s,h){f(s,n,h),a(n,w),a(n,p),a(p,k),a(n,b),a(n,_),a(_,H),a(n,T),a(n,j),a(j,E),f(s,y,h),z(g,s,h),f(s,R,h),f(s,q,h),a(q,Y),f(s,B,h),z(x,s,h),f(s,W,h),f(s,v,h),a(v,I),a(v,O),a(O,U),a(v,Z),a(v,D),a(D,F),a(v,J),a(v,P),a(P,ee),a(v,K),Q=!0},p:ua,i(s){Q||(L(g.$$.fragment,s),L(x.$$.fragment,s),Q=!0)},o(s){S(g.$$.fragment,s),S(x.$$.fragment,s),Q=!1},d(s){s&&t(n),s&&t(y),N(g,s),s&&t(R),s&&t(q),s&&t(B),N(x,s),s&&t(W),s&&t(v)}}}function ja(X){let n,w;return n=new ha({props:{$$slots:{default:[Aa]},$$scope:{ctx:X}}}),{c(){M(n.$$.fragment)},l(p){C(n.$$.fragment,p)},m(p,k){z(n,p,k),w=!0},p(p,k){const b={};k&2&&(b.$$scope={dirty:k,ctx:p}),n.$set(b)},i(p){w||(L(n.$$.fragment,p),w=!0)},o(p){S(n.$$.fragment,p),w=!1},d(p){N(n,p)}}}function Ea(X){let n,w,p,k,b,_,H,T,j,E,y,g,R,q,Y,B,x,W,v,I,O,U,Z,D,F,J,P,ee,K,Q,s,h,se,re,te,oe,A,G,V,ae,_e,dt,Se,$t,Ue,xe,kt,Ve,ce,vt,Te,_t,wt,We,we,Je,qe,bt,Ke,be,Qe,ne,pe,Ne,ye,yt,Ie,gt,Xe,Pe,At,Ye,fe,jt,Me,Et,Ft,Ze,ge,et,le,ue,Oe,Ae,xt,De,Tt,tt,he,qt,Ce,Pt,Mt,at,me,Ct,ze,zt,Lt,st,je,rt,ie,de,He,Ee,St,Re,Nt,ot,$e,nt;return _=new Ge({}),I=new _a({props:{$$slots:{default:[ba]},$$scope:{ctx:X}}}),_e=new Ge({}),we=new ve({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),be=new ve({props:{code:`sequence = "In a hole in the ground there lived a hobbit."
print(tokenizer(sequence))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = <span class="hljs-string">&quot;In a hole in the ground there lived a hobbit.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer(sequence))
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: [<span class="hljs-number">101</span>, <span class="hljs-number">1999</span>, <span class="hljs-number">1037</span>, <span class="hljs-number">4920</span>, <span class="hljs-number">1999</span>, <span class="hljs-number">1996</span>, <span class="hljs-number">2598</span>, <span class="hljs-number">2045</span>, <span class="hljs-number">2973</span>, <span class="hljs-number">1037</span>, <span class="hljs-number">7570</span>, <span class="hljs-number">10322</span>, <span class="hljs-number">4183</span>, <span class="hljs-number">1012</span>, <span class="hljs-number">102</span>], 
 <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>], 
 <span class="hljs-string">&#x27;attention_mask&#x27;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]}`}}),ye=new Ge({}),ge=new ve({props:{code:`from transformers import AutoFeatureExtractor

feature_extractor = AutoFeatureExtractor.from_pretrained(
    "ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition&quot;</span>
<span class="hljs-meta">... </span>)`}}),Ae=new Ge({}),je=new ve({props:{code:`from transformers import AutoProcessor

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv2-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)`}}),Ee=new Ge({}),$e=new wa({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ja],pytorch:[ga]},$$scope:{ctx:X}}}),{c(){n=l("meta"),w=m(),p=l("h1"),k=l("a"),b=l("span"),M(_.$$.fragment),H=m(),T=l("span"),j=r("Load pretrained instances with an AutoClass"),E=m(),y=l("p"),g=r("With so many different Transformer architectures, it can be challenging to create one for your checkpoint. As a part of \u{1F917} Transformers core philosophy to make the library easy, simple and flexible to use, an "),R=l("code"),q=r("AutoClass"),Y=r(" automatically infer and load the correct architecture from a given checkpoint. The "),B=l("code"),x=r("from_pretrained"),W=r(" method lets you quickly load a pretrained model for any architecture so you don\u2019t have to devote time and resources to train a model from scratch. Producing this type of checkpoint-agnostic code means if your code works for one checkpoint, it will work with another checkpoint - as long as it was trained for a similar task - even if the architecture is different."),v=m(),M(I.$$.fragment),O=m(),U=l("p"),Z=r("In this tutorial, learn to:"),D=m(),F=l("ul"),J=l("li"),P=r("Load a pretrained tokenizer."),ee=m(),K=l("li"),Q=r("Load a pretrained feature extractor."),s=m(),h=l("li"),se=r("Load a pretrained processor."),re=m(),te=l("li"),oe=r("Load a pretrained model."),A=m(),G=l("h2"),V=l("a"),ae=l("span"),M(_e.$$.fragment),dt=m(),Se=l("span"),$t=r("AutoTokenizer"),Ue=m(),xe=l("p"),kt=r("Nearly every NLP task begins with a tokenizer. A tokenizer converts your input into a format that can be processed by the model."),Ve=m(),ce=l("p"),vt=r("Load a tokenizer with "),Te=l("a"),_t=r("AutoTokenizer.from_pretrained()"),wt=r(":"),We=m(),M(we.$$.fragment),Je=m(),qe=l("p"),bt=r("Then tokenize your input as shown below:"),Ke=m(),M(be.$$.fragment),Qe=m(),ne=l("h2"),pe=l("a"),Ne=l("span"),M(ye.$$.fragment),yt=m(),Ie=l("span"),gt=r("AutoFeatureExtractor"),Xe=m(),Pe=l("p"),At=r("For audio and vision tasks, a feature extractor processes the audio signal or image into the correct input format."),Ye=m(),fe=l("p"),jt=r("Load a feature extractor with "),Me=l("a"),Et=r("AutoFeatureExtractor.from_pretrained()"),Ft=r(":"),Ze=m(),M(ge.$$.fragment),et=m(),le=l("h2"),ue=l("a"),Oe=l("span"),M(Ae.$$.fragment),xt=m(),De=l("span"),Tt=r("AutoProcessor"),tt=m(),he=l("p"),qt=r("Multimodal tasks require a processor that combines two types of preprocessing tools. For example, the "),Ce=l("a"),Pt=r("LayoutLMV2"),Mt=r(" model requires a feature extractor to handle images and a tokenizer to handle text; a processor combines both of them."),at=m(),me=l("p"),Ct=r("Load a processor with "),ze=l("a"),zt=r("AutoProcessor.from_pretrained()"),Lt=r(":"),st=m(),M(je.$$.fragment),rt=m(),ie=l("h2"),de=l("a"),He=l("span"),M(Ee.$$.fragment),St=m(),Re=l("span"),Nt=r("AutoModel"),ot=m(),M($e.$$.fragment),this.h()},l(e){const u=ka('[data-svelte="svelte-1phssyn"]',document.head);n=i(u,"META",{name:!0,content:!0}),u.forEach(t),w=d(e),p=i(e,"H1",{class:!0});var Fe=c(p);k=i(Fe,"A",{id:!0,class:!0,href:!0});var Be=c(k);b=i(Be,"SPAN",{});var It=c(b);C(_.$$.fragment,It),It.forEach(t),Be.forEach(t),H=d(Fe),T=i(Fe,"SPAN",{});var Ot=c(T);j=o(Ot,"Load pretrained instances with an AutoClass"),Ot.forEach(t),Fe.forEach(t),E=d(e),y=i(e,"P",{});var Le=c(y);g=o(Le,"With so many different Transformer architectures, it can be challenging to create one for your checkpoint. As a part of \u{1F917} Transformers core philosophy to make the library easy, simple and flexible to use, an "),R=i(Le,"CODE",{});var Dt=c(R);q=o(Dt,"AutoClass"),Dt.forEach(t),Y=o(Le," automatically infer and load the correct architecture from a given checkpoint. The "),B=i(Le,"CODE",{});var Ht=c(B);x=o(Ht,"from_pretrained"),Ht.forEach(t),W=o(Le," method lets you quickly load a pretrained model for any architecture so you don\u2019t have to devote time and resources to train a model from scratch. Producing this type of checkpoint-agnostic code means if your code works for one checkpoint, it will work with another checkpoint - as long as it was trained for a similar task - even if the architecture is different."),Le.forEach(t),v=d(e),C(I.$$.fragment,e),O=d(e),U=i(e,"P",{});var Rt=c(U);Z=o(Rt,"In this tutorial, learn to:"),Rt.forEach(t),D=d(e),F=i(e,"UL",{});var ke=c(F);J=i(ke,"LI",{});var Bt=c(J);P=o(Bt,"Load a pretrained tokenizer."),Bt.forEach(t),ee=d(ke),K=i(ke,"LI",{});var Gt=c(K);Q=o(Gt,"Load a pretrained feature extractor."),Gt.forEach(t),s=d(ke),h=i(ke,"LI",{});var Ut=c(h);se=o(Ut,"Load a pretrained processor."),Ut.forEach(t),re=d(ke),te=i(ke,"LI",{});var Vt=c(te);oe=o(Vt,"Load a pretrained model."),Vt.forEach(t),ke.forEach(t),A=d(e),G=i(e,"H2",{class:!0});var lt=c(G);V=i(lt,"A",{id:!0,class:!0,href:!0});var Wt=c(V);ae=i(Wt,"SPAN",{});var Jt=c(ae);C(_e.$$.fragment,Jt),Jt.forEach(t),Wt.forEach(t),dt=d(lt),Se=i(lt,"SPAN",{});var Kt=c(Se);$t=o(Kt,"AutoTokenizer"),Kt.forEach(t),lt.forEach(t),Ue=d(e),xe=i(e,"P",{});var Qt=c(xe);kt=o(Qt,"Nearly every NLP task begins with a tokenizer. A tokenizer converts your input into a format that can be processed by the model."),Qt.forEach(t),Ve=d(e),ce=i(e,"P",{});var it=c(ce);vt=o(it,"Load a tokenizer with "),Te=i(it,"A",{href:!0});var Xt=c(Te);_t=o(Xt,"AutoTokenizer.from_pretrained()"),Xt.forEach(t),wt=o(it,":"),it.forEach(t),We=d(e),C(we.$$.fragment,e),Je=d(e),qe=i(e,"P",{});var Yt=c(qe);bt=o(Yt,"Then tokenize your input as shown below:"),Yt.forEach(t),Ke=d(e),C(be.$$.fragment,e),Qe=d(e),ne=i(e,"H2",{class:!0});var ct=c(ne);pe=i(ct,"A",{id:!0,class:!0,href:!0});var Zt=c(pe);Ne=i(Zt,"SPAN",{});var ea=c(Ne);C(ye.$$.fragment,ea),ea.forEach(t),Zt.forEach(t),yt=d(ct),Ie=i(ct,"SPAN",{});var ta=c(Ie);gt=o(ta,"AutoFeatureExtractor"),ta.forEach(t),ct.forEach(t),Xe=d(e),Pe=i(e,"P",{});var aa=c(Pe);At=o(aa,"For audio and vision tasks, a feature extractor processes the audio signal or image into the correct input format."),aa.forEach(t),Ye=d(e),fe=i(e,"P",{});var pt=c(fe);jt=o(pt,"Load a feature extractor with "),Me=i(pt,"A",{href:!0});var sa=c(Me);Et=o(sa,"AutoFeatureExtractor.from_pretrained()"),sa.forEach(t),Ft=o(pt,":"),pt.forEach(t),Ze=d(e),C(ge.$$.fragment,e),et=d(e),le=i(e,"H2",{class:!0});var ft=c(le);ue=i(ft,"A",{id:!0,class:!0,href:!0});var ra=c(ue);Oe=i(ra,"SPAN",{});var oa=c(Oe);C(Ae.$$.fragment,oa),oa.forEach(t),ra.forEach(t),xt=d(ft),De=i(ft,"SPAN",{});var na=c(De);Tt=o(na,"AutoProcessor"),na.forEach(t),ft.forEach(t),tt=d(e),he=i(e,"P",{});var ut=c(he);qt=o(ut,"Multimodal tasks require a processor that combines two types of preprocessing tools. For example, the "),Ce=i(ut,"A",{href:!0});var la=c(Ce);Pt=o(la,"LayoutLMV2"),la.forEach(t),Mt=o(ut," model requires a feature extractor to handle images and a tokenizer to handle text; a processor combines both of them."),ut.forEach(t),at=d(e),me=i(e,"P",{});var ht=c(me);Ct=o(ht,"Load a processor with "),ze=i(ht,"A",{href:!0});var ia=c(ze);zt=o(ia,"AutoProcessor.from_pretrained()"),ia.forEach(t),Lt=o(ht,":"),ht.forEach(t),st=d(e),C(je.$$.fragment,e),rt=d(e),ie=i(e,"H2",{class:!0});var mt=c(ie);de=i(mt,"A",{id:!0,class:!0,href:!0});var ca=c(de);He=i(ca,"SPAN",{});var pa=c(He);C(Ee.$$.fragment,pa),pa.forEach(t),ca.forEach(t),St=d(mt),Re=i(mt,"SPAN",{});var fa=c(Re);Nt=o(fa,"AutoModel"),fa.forEach(t),mt.forEach(t),ot=d(e),C($e.$$.fragment,e),this.h()},h(){$(n,"name","hf:doc:metadata"),$(n,"content",JSON.stringify(Fa)),$(k,"id","load-pretrained-instances-with-an-autoclass"),$(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(k,"href","#load-pretrained-instances-with-an-autoclass"),$(p,"class","relative group"),$(V,"id","autotokenizer"),$(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(V,"href","#autotokenizer"),$(G,"class","relative group"),$(Te,"href","/docs/transformers/pr_16475/en/model_doc/auto#transformers.AutoTokenizer.from_pretrained"),$(pe,"id","autofeatureextractor"),$(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(pe,"href","#autofeatureextractor"),$(ne,"class","relative group"),$(Me,"href","/docs/transformers/pr_16475/en/model_doc/auto#transformers.AutoFeatureExtractor.from_pretrained"),$(ue,"id","autoprocessor"),$(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(ue,"href","#autoprocessor"),$(le,"class","relative group"),$(Ce,"href","model_doc/layoutlmv2"),$(ze,"href","/docs/transformers/pr_16475/en/model_doc/auto#transformers.AutoProcessor.from_pretrained"),$(de,"id","automodel"),$(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(de,"href","#automodel"),$(ie,"class","relative group")},m(e,u){a(document.head,n),f(e,w,u),f(e,p,u),a(p,k),a(k,b),z(_,b,null),a(p,H),a(p,T),a(T,j),f(e,E,u),f(e,y,u),a(y,g),a(y,R),a(R,q),a(y,Y),a(y,B),a(B,x),a(y,W),f(e,v,u),z(I,e,u),f(e,O,u),f(e,U,u),a(U,Z),f(e,D,u),f(e,F,u),a(F,J),a(J,P),a(F,ee),a(F,K),a(K,Q),a(F,s),a(F,h),a(h,se),a(F,re),a(F,te),a(te,oe),f(e,A,u),f(e,G,u),a(G,V),a(V,ae),z(_e,ae,null),a(G,dt),a(G,Se),a(Se,$t),f(e,Ue,u),f(e,xe,u),a(xe,kt),f(e,Ve,u),f(e,ce,u),a(ce,vt),a(ce,Te),a(Te,_t),a(ce,wt),f(e,We,u),z(we,e,u),f(e,Je,u),f(e,qe,u),a(qe,bt),f(e,Ke,u),z(be,e,u),f(e,Qe,u),f(e,ne,u),a(ne,pe),a(pe,Ne),z(ye,Ne,null),a(ne,yt),a(ne,Ie),a(Ie,gt),f(e,Xe,u),f(e,Pe,u),a(Pe,At),f(e,Ye,u),f(e,fe,u),a(fe,jt),a(fe,Me),a(Me,Et),a(fe,Ft),f(e,Ze,u),z(ge,e,u),f(e,et,u),f(e,le,u),a(le,ue),a(ue,Oe),z(Ae,Oe,null),a(le,xt),a(le,De),a(De,Tt),f(e,tt,u),f(e,he,u),a(he,qt),a(he,Ce),a(Ce,Pt),a(he,Mt),f(e,at,u),f(e,me,u),a(me,Ct),a(me,ze),a(ze,zt),a(me,Lt),f(e,st,u),z(je,e,u),f(e,rt,u),f(e,ie,u),a(ie,de),a(de,He),z(Ee,He,null),a(ie,St),a(ie,Re),a(Re,Nt),f(e,ot,u),z($e,e,u),nt=!0},p(e,[u]){const Fe={};u&2&&(Fe.$$scope={dirty:u,ctx:e}),I.$set(Fe);const Be={};u&2&&(Be.$$scope={dirty:u,ctx:e}),$e.$set(Be)},i(e){nt||(L(_.$$.fragment,e),L(I.$$.fragment,e),L(_e.$$.fragment,e),L(we.$$.fragment,e),L(be.$$.fragment,e),L(ye.$$.fragment,e),L(ge.$$.fragment,e),L(Ae.$$.fragment,e),L(je.$$.fragment,e),L(Ee.$$.fragment,e),L($e.$$.fragment,e),nt=!0)},o(e){S(_.$$.fragment,e),S(I.$$.fragment,e),S(_e.$$.fragment,e),S(we.$$.fragment,e),S(be.$$.fragment,e),S(ye.$$.fragment,e),S(ge.$$.fragment,e),S(Ae.$$.fragment,e),S(je.$$.fragment,e),S(Ee.$$.fragment,e),S($e.$$.fragment,e),nt=!1},d(e){t(n),e&&t(w),e&&t(p),N(_),e&&t(E),e&&t(y),e&&t(v),N(I,e),e&&t(O),e&&t(U),e&&t(D),e&&t(F),e&&t(A),e&&t(G),N(_e),e&&t(Ue),e&&t(xe),e&&t(Ve),e&&t(ce),e&&t(We),N(we,e),e&&t(Je),e&&t(qe),e&&t(Ke),N(be,e),e&&t(Qe),e&&t(ne),N(ye),e&&t(Xe),e&&t(Pe),e&&t(Ye),e&&t(fe),e&&t(Ze),N(ge,e),e&&t(et),e&&t(le),N(Ae),e&&t(tt),e&&t(he),e&&t(at),e&&t(me),e&&t(st),N(je,e),e&&t(rt),e&&t(ie),N(Ee),e&&t(ot),N($e,e)}}}const Fa={local:"load-pretrained-instances-with-an-autoclass",sections:[{local:"autotokenizer",title:"AutoTokenizer"},{local:"autofeatureextractor",title:"AutoFeatureExtractor"},{local:"autoprocessor",title:"AutoProcessor"},{local:"automodel",title:"AutoModel"}],title:"Load pretrained instances with an AutoClass"};function xa(X){return va(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class za extends ma{constructor(n){super();da(this,n,xa,Ea,$a,{})}}export{za as default,Fa as metadata};
