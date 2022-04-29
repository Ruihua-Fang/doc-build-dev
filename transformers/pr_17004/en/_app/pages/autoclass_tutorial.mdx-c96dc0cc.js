import{S as ma,i as da,s as $a,e as l,k as m,w as C,t as s,M as _a,c as i,d as t,m as d,a as p,x as z,h as o,b as _,F as a,g as f,y as L,q as S,o as N,B as I,v as ka,L as ua}from"../chunks/vendor-6b77c823.js";import{T as va}from"../chunks/Tip-39098574.js";import{I as Ge}from"../chunks/IconCopyLink-7a11ce68.js";import{C as ve}from"../chunks/CodeBlock-3a8b25a8.js";import{F as wa,M as ha}from"../chunks/Markdown-9acf6d91.js";function ba(Y){let n,b,c,k,g,v,D,q;return{c(){n=l("p"),b=s("Remember, architecture refers to the skeleton of the model and checkpoints are the weights for a given architecture. For example, "),c=l("a"),k=s("BERT"),g=s(" is an architecture, while "),v=l("code"),D=s("bert-base-uncased"),q=s(" is a checkpoint. Model is a general term that can mean either architecture or checkpoint."),this.h()},l(A){n=i(A,"P",{});var j=p(n);b=o(j,"Remember, architecture refers to the skeleton of the model and checkpoints are the weights for a given architecture. For example, "),c=i(j,"A",{href:!0,rel:!0});var E=p(c);k=o(E,"BERT"),E.forEach(t),g=o(j," is an architecture, while "),v=i(j,"CODE",{});var O=p(v);D=o(O,"bert-base-uncased"),O.forEach(t),q=o(j," is a checkpoint. Model is a general term that can mean either architecture or checkpoint."),j.forEach(t),this.h()},h(){_(c,"href","https://huggingface.co/bert-base-uncased"),_(c,"rel","nofollow")},m(A,j){f(A,n,j),a(n,b),a(n,c),a(c,k),a(n,g),a(n,v),a(v,D),a(n,q)},d(A){A&&t(n)}}}function ya(Y){let n,b,c,k,g,v,D,q,A,j,E,O,F,B,M,G,V,x,H,$,Q,T,Z,X,y,U,ee,P,W,te,J;return F=new ve({props:{code:`from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),x=new ve({props:{code:`from transformers import AutoModelForTokenClassification

model = AutoModelForTokenClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),{c(){n=l("p"),b=s("Finally, the "),c=l("code"),k=s("AutoModelFor"),g=s(" classes let you load a pretrained model for a given task (see "),v=l("a"),D=s("here"),q=s(" for a complete list of available tasks). For example, load a model for sequence classification with "),A=l("a"),j=s("AutoModelForSequenceClassification.from_pretrained()"),E=s(":"),O=m(),C(F.$$.fragment),B=m(),M=l("p"),G=s("Easily reuse the same checkpoint to load an architecture for a different task:"),V=m(),C(x.$$.fragment),H=m(),$=l("p"),Q=s("Generally, we recommend using the "),T=l("code"),Z=s("AutoTokenizer"),X=s(" class and the "),y=l("code"),U=s("AutoModelFor"),ee=s(" class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),P=l("a"),W=s("tutorial"),te=s(", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),this.h()},l(r){n=i(r,"P",{});var h=p(n);b=o(h,"Finally, the "),c=i(h,"CODE",{});var oe=p(c);k=o(oe,"AutoModelFor"),oe.forEach(t),g=o(h," classes let you load a pretrained model for a given task (see "),v=i(h,"A",{href:!0});var ae=p(v);D=o(ae,"here"),ae.forEach(t),q=o(h," for a complete list of available tasks). For example, load a model for sequence classification with "),A=i(h,"A",{href:!0});var ne=p(A);j=o(ne,"AutoModelForSequenceClassification.from_pretrained()"),ne.forEach(t),E=o(h,":"),h.forEach(t),O=d(r),z(F.$$.fragment,r),B=d(r),M=i(r,"P",{});var se=p(M);G=o(se,"Easily reuse the same checkpoint to load an architecture for a different task:"),se.forEach(t),V=d(r),z(x.$$.fragment,r),H=d(r),$=i(r,"P",{});var w=p($);Q=o(w,"Generally, we recommend using the "),T=i(w,"CODE",{});var R=p(T);Z=o(R,"AutoTokenizer"),R.forEach(t),X=o(w," class and the "),y=i(w,"CODE",{});var re=p(y);U=o(re,"AutoModelFor"),re.forEach(t),ee=o(w," class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),P=i(w,"A",{href:!0});var K=p(P);W=o(K,"tutorial"),K.forEach(t),te=o(w,", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),w.forEach(t),this.h()},h(){_(v,"href","model_doc/auto"),_(A,"href","/docs/transformers/pr_17004/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),_(P,"href","preprocessing")},m(r,h){f(r,n,h),a(n,b),a(n,c),a(c,k),a(n,g),a(n,v),a(v,D),a(n,q),a(n,A),a(A,j),a(n,E),f(r,O,h),L(F,r,h),f(r,B,h),f(r,M,h),a(M,G),f(r,V,h),L(x,r,h),f(r,H,h),f(r,$,h),a($,Q),a($,T),a(T,Z),a($,X),a($,y),a(y,U),a($,ee),a($,P),a(P,W),a($,te),J=!0},p:ua,i(r){J||(S(F.$$.fragment,r),S(x.$$.fragment,r),J=!0)},o(r){N(F.$$.fragment,r),N(x.$$.fragment,r),J=!1},d(r){r&&t(n),r&&t(O),I(F,r),r&&t(B),r&&t(M),r&&t(V),I(x,r),r&&t(H),r&&t($)}}}function ga(Y){let n,b;return n=new ha({props:{$$slots:{default:[ya]},$$scope:{ctx:Y}}}),{c(){C(n.$$.fragment)},l(c){z(n.$$.fragment,c)},m(c,k){L(n,c,k),b=!0},p(c,k){const g={};k&2&&(g.$$scope={dirty:k,ctx:c}),n.$set(g)},i(c){b||(S(n.$$.fragment,c),b=!0)},o(c){N(n.$$.fragment,c),b=!1},d(c){I(n,c)}}}function Aa(Y){let n,b,c,k,g,v,D,q,A,j,E,O,F,B,M,G,V,x,H,$,Q,T,Z,X,y,U,ee,P,W,te,J;return F=new ve({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),x=new ve({props:{code:`from transformers import TFAutoModelForTokenClassification

model = TFAutoModelForTokenClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),{c(){n=l("p"),b=s("Finally, the "),c=l("code"),k=s("TFAutoModelFor"),g=s(" classes let you load a pretrained model for a given task (see "),v=l("a"),D=s("here"),q=s(" for a complete list of available tasks). For example, load a model for sequence classification with "),A=l("a"),j=s("TFAutoModelForSequenceClassification.from_pretrained()"),E=s(":"),O=m(),C(F.$$.fragment),B=m(),M=l("p"),G=s("Easily reuse the same checkpoint to load an architecture for a different task:"),V=m(),C(x.$$.fragment),H=m(),$=l("p"),Q=s("Generally, we recommend using the "),T=l("code"),Z=s("AutoTokenizer"),X=s(" class and the "),y=l("code"),U=s("TFAutoModelFor"),ee=s(" class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),P=l("a"),W=s("tutorial"),te=s(", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),this.h()},l(r){n=i(r,"P",{});var h=p(n);b=o(h,"Finally, the "),c=i(h,"CODE",{});var oe=p(c);k=o(oe,"TFAutoModelFor"),oe.forEach(t),g=o(h," classes let you load a pretrained model for a given task (see "),v=i(h,"A",{href:!0});var ae=p(v);D=o(ae,"here"),ae.forEach(t),q=o(h," for a complete list of available tasks). For example, load a model for sequence classification with "),A=i(h,"A",{href:!0});var ne=p(A);j=o(ne,"TFAutoModelForSequenceClassification.from_pretrained()"),ne.forEach(t),E=o(h,":"),h.forEach(t),O=d(r),z(F.$$.fragment,r),B=d(r),M=i(r,"P",{});var se=p(M);G=o(se,"Easily reuse the same checkpoint to load an architecture for a different task:"),se.forEach(t),V=d(r),z(x.$$.fragment,r),H=d(r),$=i(r,"P",{});var w=p($);Q=o(w,"Generally, we recommend using the "),T=i(w,"CODE",{});var R=p(T);Z=o(R,"AutoTokenizer"),R.forEach(t),X=o(w," class and the "),y=i(w,"CODE",{});var re=p(y);U=o(re,"TFAutoModelFor"),re.forEach(t),ee=o(w," class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),P=i(w,"A",{href:!0});var K=p(P);W=o(K,"tutorial"),K.forEach(t),te=o(w,", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),w.forEach(t),this.h()},h(){_(v,"href","model_doc/auto"),_(A,"href","/docs/transformers/pr_17004/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),_(P,"href","preprocessing")},m(r,h){f(r,n,h),a(n,b),a(n,c),a(c,k),a(n,g),a(n,v),a(v,D),a(n,q),a(n,A),a(A,j),a(n,E),f(r,O,h),L(F,r,h),f(r,B,h),f(r,M,h),a(M,G),f(r,V,h),L(x,r,h),f(r,H,h),f(r,$,h),a($,Q),a($,T),a(T,Z),a($,X),a($,y),a(y,U),a($,ee),a($,P),a(P,W),a($,te),J=!0},p:ua,i(r){J||(S(F.$$.fragment,r),S(x.$$.fragment,r),J=!0)},o(r){N(F.$$.fragment,r),N(x.$$.fragment,r),J=!1},d(r){r&&t(n),r&&t(O),I(F,r),r&&t(B),r&&t(M),r&&t(V),I(x,r),r&&t(H),r&&t($)}}}function ja(Y){let n,b;return n=new ha({props:{$$slots:{default:[Aa]},$$scope:{ctx:Y}}}),{c(){C(n.$$.fragment)},l(c){z(n.$$.fragment,c)},m(c,k){L(n,c,k),b=!0},p(c,k){const g={};k&2&&(g.$$scope={dirty:k,ctx:c}),n.$set(g)},i(c){b||(S(n.$$.fragment,c),b=!0)},o(c){N(n.$$.fragment,c),b=!1},d(c){I(n,c)}}}function Ea(Y){let n,b,c,k,g,v,D,q,A,j,E,O,F,B,M,G,V,x,H,$,Q,T,Z,X,y,U,ee,P,W,te,J,r,h,oe,ae,ne,se,w,R,re,K,dt,Se,$t,Ve,xe,_t,Ue,ce,kt,Te,vt,wt,We,we,Je,qe,bt,Ke,be,Qe,le,fe,Ne,ye,yt,Ie,gt,Xe,Me,At,Ye,ue,jt,Pe,Et,Ft,Ze,ge,et,ie,he,Oe,Ae,xt,De,Tt,tt,me,qt,Ce,Mt,Pt,at,de,Ct,ze,zt,Lt,rt,je,st,pe,$e,He,Ee,St,Re,Nt,ot,_e,nt;return v=new Ge({}),$=new va({props:{$$slots:{default:[ba]},$$scope:{ctx:Y}}}),K=new Ge({}),we=new ve({props:{code:`from transformers import AutoTokenizer

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

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)`}}),Ee=new Ge({}),_e=new wa({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ja],pytorch:[ga]},$$scope:{ctx:Y}}}),{c(){n=l("meta"),b=m(),c=l("h1"),k=l("a"),g=l("span"),C(v.$$.fragment),D=m(),q=l("span"),A=s("Load pretrained instances with an AutoClass"),j=m(),E=l("p"),O=s("With so many different Transformer architectures, it can be challenging to create one for your checkpoint. As a part of \u{1F917} Transformers core philosophy to make the library easy, simple and flexible to use, an "),F=l("code"),B=s("AutoClass"),M=s(" automatically infer and load the correct architecture from a given checkpoint. The "),G=l("code"),V=s("from_pretrained"),x=s(" method lets you quickly load a pretrained model for any architecture so you don\u2019t have to devote time and resources to train a model from scratch. Producing this type of checkpoint-agnostic code means if your code works for one checkpoint, it will work with another checkpoint - as long as it was trained for a similar task - even if the architecture is different."),H=m(),C($.$$.fragment),Q=m(),T=l("p"),Z=s("In this tutorial, learn to:"),X=m(),y=l("ul"),U=l("li"),ee=s("Load a pretrained tokenizer."),P=m(),W=l("li"),te=s("Load a pretrained feature extractor."),J=m(),r=l("li"),h=s("Load a pretrained processor."),oe=m(),ae=l("li"),ne=s("Load a pretrained model."),se=m(),w=l("h2"),R=l("a"),re=l("span"),C(K.$$.fragment),dt=m(),Se=l("span"),$t=s("AutoTokenizer"),Ve=m(),xe=l("p"),_t=s("Nearly every NLP task begins with a tokenizer. A tokenizer converts your input into a format that can be processed by the model."),Ue=m(),ce=l("p"),kt=s("Load a tokenizer with "),Te=l("a"),vt=s("AutoTokenizer.from_pretrained()"),wt=s(":"),We=m(),C(we.$$.fragment),Je=m(),qe=l("p"),bt=s("Then tokenize your input as shown below:"),Ke=m(),C(be.$$.fragment),Qe=m(),le=l("h2"),fe=l("a"),Ne=l("span"),C(ye.$$.fragment),yt=m(),Ie=l("span"),gt=s("AutoFeatureExtractor"),Xe=m(),Me=l("p"),At=s("For audio and vision tasks, a feature extractor processes the audio signal or image into the correct input format."),Ye=m(),ue=l("p"),jt=s("Load a feature extractor with "),Pe=l("a"),Et=s("AutoFeatureExtractor.from_pretrained()"),Ft=s(":"),Ze=m(),C(ge.$$.fragment),et=m(),ie=l("h2"),he=l("a"),Oe=l("span"),C(Ae.$$.fragment),xt=m(),De=l("span"),Tt=s("AutoProcessor"),tt=m(),me=l("p"),qt=s("Multimodal tasks require a processor that combines two types of preprocessing tools. For example, the "),Ce=l("a"),Mt=s("LayoutLMV2"),Pt=s(" model requires a feature extractor to handle images and a tokenizer to handle text; a processor combines both of them."),at=m(),de=l("p"),Ct=s("Load a processor with "),ze=l("a"),zt=s("AutoProcessor.from_pretrained()"),Lt=s(":"),rt=m(),C(je.$$.fragment),st=m(),pe=l("h2"),$e=l("a"),He=l("span"),C(Ee.$$.fragment),St=m(),Re=l("span"),Nt=s("AutoModel"),ot=m(),C(_e.$$.fragment),this.h()},l(e){const u=_a('[data-svelte="svelte-1phssyn"]',document.head);n=i(u,"META",{name:!0,content:!0}),u.forEach(t),b=d(e),c=i(e,"H1",{class:!0});var Fe=p(c);k=i(Fe,"A",{id:!0,class:!0,href:!0});var Be=p(k);g=i(Be,"SPAN",{});var It=p(g);z(v.$$.fragment,It),It.forEach(t),Be.forEach(t),D=d(Fe),q=i(Fe,"SPAN",{});var Ot=p(q);A=o(Ot,"Load pretrained instances with an AutoClass"),Ot.forEach(t),Fe.forEach(t),j=d(e),E=i(e,"P",{});var Le=p(E);O=o(Le,"With so many different Transformer architectures, it can be challenging to create one for your checkpoint. As a part of \u{1F917} Transformers core philosophy to make the library easy, simple and flexible to use, an "),F=i(Le,"CODE",{});var Dt=p(F);B=o(Dt,"AutoClass"),Dt.forEach(t),M=o(Le," automatically infer and load the correct architecture from a given checkpoint. The "),G=i(Le,"CODE",{});var Ht=p(G);V=o(Ht,"from_pretrained"),Ht.forEach(t),x=o(Le," method lets you quickly load a pretrained model for any architecture so you don\u2019t have to devote time and resources to train a model from scratch. Producing this type of checkpoint-agnostic code means if your code works for one checkpoint, it will work with another checkpoint - as long as it was trained for a similar task - even if the architecture is different."),Le.forEach(t),H=d(e),z($.$$.fragment,e),Q=d(e),T=i(e,"P",{});var Rt=p(T);Z=o(Rt,"In this tutorial, learn to:"),Rt.forEach(t),X=d(e),y=i(e,"UL",{});var ke=p(y);U=i(ke,"LI",{});var Bt=p(U);ee=o(Bt,"Load a pretrained tokenizer."),Bt.forEach(t),P=d(ke),W=i(ke,"LI",{});var Gt=p(W);te=o(Gt,"Load a pretrained feature extractor."),Gt.forEach(t),J=d(ke),r=i(ke,"LI",{});var Vt=p(r);h=o(Vt,"Load a pretrained processor."),Vt.forEach(t),oe=d(ke),ae=i(ke,"LI",{});var Ut=p(ae);ne=o(Ut,"Load a pretrained model."),Ut.forEach(t),ke.forEach(t),se=d(e),w=i(e,"H2",{class:!0});var lt=p(w);R=i(lt,"A",{id:!0,class:!0,href:!0});var Wt=p(R);re=i(Wt,"SPAN",{});var Jt=p(re);z(K.$$.fragment,Jt),Jt.forEach(t),Wt.forEach(t),dt=d(lt),Se=i(lt,"SPAN",{});var Kt=p(Se);$t=o(Kt,"AutoTokenizer"),Kt.forEach(t),lt.forEach(t),Ve=d(e),xe=i(e,"P",{});var Qt=p(xe);_t=o(Qt,"Nearly every NLP task begins with a tokenizer. A tokenizer converts your input into a format that can be processed by the model."),Qt.forEach(t),Ue=d(e),ce=i(e,"P",{});var it=p(ce);kt=o(it,"Load a tokenizer with "),Te=i(it,"A",{href:!0});var Xt=p(Te);vt=o(Xt,"AutoTokenizer.from_pretrained()"),Xt.forEach(t),wt=o(it,":"),it.forEach(t),We=d(e),z(we.$$.fragment,e),Je=d(e),qe=i(e,"P",{});var Yt=p(qe);bt=o(Yt,"Then tokenize your input as shown below:"),Yt.forEach(t),Ke=d(e),z(be.$$.fragment,e),Qe=d(e),le=i(e,"H2",{class:!0});var pt=p(le);fe=i(pt,"A",{id:!0,class:!0,href:!0});var Zt=p(fe);Ne=i(Zt,"SPAN",{});var ea=p(Ne);z(ye.$$.fragment,ea),ea.forEach(t),Zt.forEach(t),yt=d(pt),Ie=i(pt,"SPAN",{});var ta=p(Ie);gt=o(ta,"AutoFeatureExtractor"),ta.forEach(t),pt.forEach(t),Xe=d(e),Me=i(e,"P",{});var aa=p(Me);At=o(aa,"For audio and vision tasks, a feature extractor processes the audio signal or image into the correct input format."),aa.forEach(t),Ye=d(e),ue=i(e,"P",{});var ct=p(ue);jt=o(ct,"Load a feature extractor with "),Pe=i(ct,"A",{href:!0});var ra=p(Pe);Et=o(ra,"AutoFeatureExtractor.from_pretrained()"),ra.forEach(t),Ft=o(ct,":"),ct.forEach(t),Ze=d(e),z(ge.$$.fragment,e),et=d(e),ie=i(e,"H2",{class:!0});var ft=p(ie);he=i(ft,"A",{id:!0,class:!0,href:!0});var sa=p(he);Oe=i(sa,"SPAN",{});var oa=p(Oe);z(Ae.$$.fragment,oa),oa.forEach(t),sa.forEach(t),xt=d(ft),De=i(ft,"SPAN",{});var na=p(De);Tt=o(na,"AutoProcessor"),na.forEach(t),ft.forEach(t),tt=d(e),me=i(e,"P",{});var ut=p(me);qt=o(ut,"Multimodal tasks require a processor that combines two types of preprocessing tools. For example, the "),Ce=i(ut,"A",{href:!0});var la=p(Ce);Mt=o(la,"LayoutLMV2"),la.forEach(t),Pt=o(ut," model requires a feature extractor to handle images and a tokenizer to handle text; a processor combines both of them."),ut.forEach(t),at=d(e),de=i(e,"P",{});var ht=p(de);Ct=o(ht,"Load a processor with "),ze=i(ht,"A",{href:!0});var ia=p(ze);zt=o(ia,"AutoProcessor.from_pretrained()"),ia.forEach(t),Lt=o(ht,":"),ht.forEach(t),rt=d(e),z(je.$$.fragment,e),st=d(e),pe=i(e,"H2",{class:!0});var mt=p(pe);$e=i(mt,"A",{id:!0,class:!0,href:!0});var pa=p($e);He=i(pa,"SPAN",{});var ca=p(He);z(Ee.$$.fragment,ca),ca.forEach(t),pa.forEach(t),St=d(mt),Re=i(mt,"SPAN",{});var fa=p(Re);Nt=o(fa,"AutoModel"),fa.forEach(t),mt.forEach(t),ot=d(e),z(_e.$$.fragment,e),this.h()},h(){_(n,"name","hf:doc:metadata"),_(n,"content",JSON.stringify(Fa)),_(k,"id","load-pretrained-instances-with-an-autoclass"),_(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(k,"href","#load-pretrained-instances-with-an-autoclass"),_(c,"class","relative group"),_(R,"id","autotokenizer"),_(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(R,"href","#autotokenizer"),_(w,"class","relative group"),_(Te,"href","/docs/transformers/pr_17004/en/model_doc/auto#transformers.AutoTokenizer.from_pretrained"),_(fe,"id","autofeatureextractor"),_(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(fe,"href","#autofeatureextractor"),_(le,"class","relative group"),_(Pe,"href","/docs/transformers/pr_17004/en/model_doc/auto#transformers.AutoFeatureExtractor.from_pretrained"),_(he,"id","autoprocessor"),_(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(he,"href","#autoprocessor"),_(ie,"class","relative group"),_(Ce,"href","model_doc/layoutlmv2"),_(ze,"href","/docs/transformers/pr_17004/en/model_doc/auto#transformers.AutoProcessor.from_pretrained"),_($e,"id","automodel"),_($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_($e,"href","#automodel"),_(pe,"class","relative group")},m(e,u){a(document.head,n),f(e,b,u),f(e,c,u),a(c,k),a(k,g),L(v,g,null),a(c,D),a(c,q),a(q,A),f(e,j,u),f(e,E,u),a(E,O),a(E,F),a(F,B),a(E,M),a(E,G),a(G,V),a(E,x),f(e,H,u),L($,e,u),f(e,Q,u),f(e,T,u),a(T,Z),f(e,X,u),f(e,y,u),a(y,U),a(U,ee),a(y,P),a(y,W),a(W,te),a(y,J),a(y,r),a(r,h),a(y,oe),a(y,ae),a(ae,ne),f(e,se,u),f(e,w,u),a(w,R),a(R,re),L(K,re,null),a(w,dt),a(w,Se),a(Se,$t),f(e,Ve,u),f(e,xe,u),a(xe,_t),f(e,Ue,u),f(e,ce,u),a(ce,kt),a(ce,Te),a(Te,vt),a(ce,wt),f(e,We,u),L(we,e,u),f(e,Je,u),f(e,qe,u),a(qe,bt),f(e,Ke,u),L(be,e,u),f(e,Qe,u),f(e,le,u),a(le,fe),a(fe,Ne),L(ye,Ne,null),a(le,yt),a(le,Ie),a(Ie,gt),f(e,Xe,u),f(e,Me,u),a(Me,At),f(e,Ye,u),f(e,ue,u),a(ue,jt),a(ue,Pe),a(Pe,Et),a(ue,Ft),f(e,Ze,u),L(ge,e,u),f(e,et,u),f(e,ie,u),a(ie,he),a(he,Oe),L(Ae,Oe,null),a(ie,xt),a(ie,De),a(De,Tt),f(e,tt,u),f(e,me,u),a(me,qt),a(me,Ce),a(Ce,Mt),a(me,Pt),f(e,at,u),f(e,de,u),a(de,Ct),a(de,ze),a(ze,zt),a(de,Lt),f(e,rt,u),L(je,e,u),f(e,st,u),f(e,pe,u),a(pe,$e),a($e,He),L(Ee,He,null),a(pe,St),a(pe,Re),a(Re,Nt),f(e,ot,u),L(_e,e,u),nt=!0},p(e,[u]){const Fe={};u&2&&(Fe.$$scope={dirty:u,ctx:e}),$.$set(Fe);const Be={};u&2&&(Be.$$scope={dirty:u,ctx:e}),_e.$set(Be)},i(e){nt||(S(v.$$.fragment,e),S($.$$.fragment,e),S(K.$$.fragment,e),S(we.$$.fragment,e),S(be.$$.fragment,e),S(ye.$$.fragment,e),S(ge.$$.fragment,e),S(Ae.$$.fragment,e),S(je.$$.fragment,e),S(Ee.$$.fragment,e),S(_e.$$.fragment,e),nt=!0)},o(e){N(v.$$.fragment,e),N($.$$.fragment,e),N(K.$$.fragment,e),N(we.$$.fragment,e),N(be.$$.fragment,e),N(ye.$$.fragment,e),N(ge.$$.fragment,e),N(Ae.$$.fragment,e),N(je.$$.fragment,e),N(Ee.$$.fragment,e),N(_e.$$.fragment,e),nt=!1},d(e){t(n),e&&t(b),e&&t(c),I(v),e&&t(j),e&&t(E),e&&t(H),I($,e),e&&t(Q),e&&t(T),e&&t(X),e&&t(y),e&&t(se),e&&t(w),I(K),e&&t(Ve),e&&t(xe),e&&t(Ue),e&&t(ce),e&&t(We),I(we,e),e&&t(Je),e&&t(qe),e&&t(Ke),I(be,e),e&&t(Qe),e&&t(le),I(ye),e&&t(Xe),e&&t(Me),e&&t(Ye),e&&t(ue),e&&t(Ze),I(ge,e),e&&t(et),e&&t(ie),I(Ae),e&&t(tt),e&&t(me),e&&t(at),e&&t(de),e&&t(rt),I(je,e),e&&t(st),e&&t(pe),I(Ee),e&&t(ot),I(_e,e)}}}const Fa={local:"load-pretrained-instances-with-an-autoclass",sections:[{local:"autotokenizer",title:"AutoTokenizer"},{local:"autofeatureextractor",title:"AutoFeatureExtractor"},{local:"autoprocessor",title:"AutoProcessor"},{local:"automodel",title:"AutoModel"}],title:"Load pretrained instances with an AutoClass"};function xa(Y){return ka(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class za extends ma{constructor(n){super();da(this,n,xa,Ea,$a,{})}}export{za as default,Fa as metadata};
