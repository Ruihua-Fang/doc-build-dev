import{S as ma,i as da,s as $a,e as l,k as m,w as M,t as o,M as ka,c as i,d as t,m as d,a as c,x as P,h as n,b as k,F as a,g as f,y as z,q as L,o as S,B as N,L as ua}from"../chunks/vendor-6b77c823.js";import{T as va}from"../chunks/Tip-39098574.js";import{I as Re}from"../chunks/IconCopyLink-7a11ce68.js";import{C as ve}from"../chunks/CodeBlock-3a8b25a8.js";import{F as _a,M as ha}from"../chunks/Markdown-4489c441.js";function wa(X){let r,_,p,$,b,w,H,T;return{c(){r=l("p"),_=o("Remember, architecture refers to the skeleton of the model and checkpoints are the weights for a given architecture. For example, "),p=l("a"),$=o("BERT"),b=o(" is an architecture, while "),w=l("code"),H=o("bert-base-uncased"),T=o(" is a checkpoint. Model is a general term that can mean either architecture or checkpoint."),this.h()},l(j){r=i(j,"P",{});var E=c(r);_=n(E,"Remember, architecture refers to the skeleton of the model and checkpoints are the weights for a given architecture. For example, "),p=i(E,"A",{href:!0,rel:!0});var y=c(p);$=n(y,"BERT"),y.forEach(t),b=n(E," is an architecture, while "),w=i(E,"CODE",{});var g=c(w);H=n(g,"bert-base-uncased"),g.forEach(t),T=n(E," is a checkpoint. Model is a general term that can mean either architecture or checkpoint."),E.forEach(t),this.h()},h(){k(p,"href","https://huggingface.co/bert-base-uncased"),k(p,"rel","nofollow")},m(j,E){f(j,r,E),a(r,_),a(r,p),a(p,$),a(r,b),a(r,w),a(w,H),a(r,T)},d(j){j&&t(r)}}}function ba(X){let r,_,p,$,b,w,H,T,j,E,y,g,B,q,Y,G,x,J,v,I,O,V,Z,D,F,U,C,ee,K,Q;return g=new ve({props:{code:`from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),x=new ve({props:{code:`from transformers import AutoModelForTokenClassification

model = AutoModelForTokenClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),{c(){r=l("p"),_=o("Finally, the "),p=l("code"),$=o("AutoModelFor"),b=o(" classes let you load a pretrained model for a given task (see "),w=l("a"),H=o("here"),T=o(" for a complete list of available tasks). For example, load a model for sequence classification with "),j=l("code"),E=o("AutoModelForSequenceClassification.from_pretrained()"),y=m(),M(g.$$.fragment),B=m(),q=l("p"),Y=o("Easily reuse the same checkpoint to load an architecture for a different task:"),G=m(),M(x.$$.fragment),J=m(),v=l("p"),I=o("Generally, we recommend using the "),O=l("code"),V=o("AutoTokenizer"),Z=o(" class and the "),D=l("code"),F=o("AutoModelFor"),U=o(" class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),C=l("a"),ee=o("tutorial"),K=o(", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),this.h()},l(s){r=i(s,"P",{});var h=c(r);_=n(h,"Finally, the "),p=i(h,"CODE",{});var se=c(p);$=n(se,"AutoModelFor"),se.forEach(t),b=n(h," classes let you load a pretrained model for a given task (see "),w=i(h,"A",{href:!0});var re=c(w);H=n(re,"here"),re.forEach(t),T=n(h," for a complete list of available tasks). For example, load a model for sequence classification with "),j=i(h,"CODE",{});var te=c(j);E=n(te,"AutoModelForSequenceClassification.from_pretrained()"),te.forEach(t),h.forEach(t),y=d(s),P(g.$$.fragment,s),B=d(s),q=i(s,"P",{});var oe=c(q);Y=n(oe,"Easily reuse the same checkpoint to load an architecture for a different task:"),oe.forEach(t),G=d(s),P(x.$$.fragment,s),J=d(s),v=i(s,"P",{});var A=c(v);I=n(A,"Generally, we recommend using the "),O=i(A,"CODE",{});var R=c(O);V=n(R,"AutoTokenizer"),R.forEach(t),Z=n(A," class and the "),D=i(A,"CODE",{});var W=c(D);F=n(W,"AutoModelFor"),W.forEach(t),U=n(A," class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),C=i(A,"A",{href:!0});var ae=c(C);ee=n(ae,"tutorial"),ae.forEach(t),K=n(A,", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),A.forEach(t),this.h()},h(){k(w,"href","model_doc/auto"),k(C,"href","preprocessing")},m(s,h){f(s,r,h),a(r,_),a(r,p),a(p,$),a(r,b),a(r,w),a(w,H),a(r,T),a(r,j),a(j,E),f(s,y,h),z(g,s,h),f(s,B,h),f(s,q,h),a(q,Y),f(s,G,h),z(x,s,h),f(s,J,h),f(s,v,h),a(v,I),a(v,O),a(O,V),a(v,Z),a(v,D),a(D,F),a(v,U),a(v,C),a(C,ee),a(v,K),Q=!0},p:ua,i(s){Q||(L(g.$$.fragment,s),L(x.$$.fragment,s),Q=!0)},o(s){S(g.$$.fragment,s),S(x.$$.fragment,s),Q=!1},d(s){s&&t(r),s&&t(y),N(g,s),s&&t(B),s&&t(q),s&&t(G),N(x,s),s&&t(J),s&&t(v)}}}function ya(X){let r,_;return r=new ha({props:{$$slots:{default:[ba]},$$scope:{ctx:X}}}),{c(){M(r.$$.fragment)},l(p){P(r.$$.fragment,p)},m(p,$){z(r,p,$),_=!0},p(p,$){const b={};$&2&&(b.$$scope={dirty:$,ctx:p}),r.$set(b)},i(p){_||(L(r.$$.fragment,p),_=!0)},o(p){S(r.$$.fragment,p),_=!1},d(p){N(r,p)}}}function ga(X){let r,_,p,$,b,w,H,T,j,E,y,g,B,q,Y,G,x,J,v,I,O,V,Z,D,F,U,C,ee,K,Q;return g=new ve({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),x=new ve({props:{code:`from transformers import TFAutoModelForTokenClassification

model = TFAutoModelForTokenClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),{c(){r=l("p"),_=o("Finally, the "),p=l("code"),$=o("TFAutoModelFor"),b=o(" classes let you load a pretrained model for a given task (see "),w=l("a"),H=o("here"),T=o(" for a complete list of available tasks). For example, load a model for sequence classification with "),j=l("code"),E=o("TFAutoModelForSequenceClassification.from_pretrained()"),y=m(),M(g.$$.fragment),B=m(),q=l("p"),Y=o("Easily reuse the same checkpoint to load an architecture for a different task:"),G=m(),M(x.$$.fragment),J=m(),v=l("p"),I=o("Generally, we recommend using the "),O=l("code"),V=o("AutoTokenizer"),Z=o(" class and the "),D=l("code"),F=o("TFAutoModelFor"),U=o(" class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),C=l("a"),ee=o("tutorial"),K=o(", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),this.h()},l(s){r=i(s,"P",{});var h=c(r);_=n(h,"Finally, the "),p=i(h,"CODE",{});var se=c(p);$=n(se,"TFAutoModelFor"),se.forEach(t),b=n(h," classes let you load a pretrained model for a given task (see "),w=i(h,"A",{href:!0});var re=c(w);H=n(re,"here"),re.forEach(t),T=n(h," for a complete list of available tasks). For example, load a model for sequence classification with "),j=i(h,"CODE",{});var te=c(j);E=n(te,"TFAutoModelForSequenceClassification.from_pretrained()"),te.forEach(t),h.forEach(t),y=d(s),P(g.$$.fragment,s),B=d(s),q=i(s,"P",{});var oe=c(q);Y=n(oe,"Easily reuse the same checkpoint to load an architecture for a different task:"),oe.forEach(t),G=d(s),P(x.$$.fragment,s),J=d(s),v=i(s,"P",{});var A=c(v);I=n(A,"Generally, we recommend using the "),O=i(A,"CODE",{});var R=c(O);V=n(R,"AutoTokenizer"),R.forEach(t),Z=n(A," class and the "),D=i(A,"CODE",{});var W=c(D);F=n(W,"TFAutoModelFor"),W.forEach(t),U=n(A," class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),C=i(A,"A",{href:!0});var ae=c(C);ee=n(ae,"tutorial"),ae.forEach(t),K=n(A,", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),A.forEach(t),this.h()},h(){k(w,"href","model_doc/auto"),k(C,"href","preprocessing")},m(s,h){f(s,r,h),a(r,_),a(r,p),a(p,$),a(r,b),a(r,w),a(w,H),a(r,T),a(r,j),a(j,E),f(s,y,h),z(g,s,h),f(s,B,h),f(s,q,h),a(q,Y),f(s,G,h),z(x,s,h),f(s,J,h),f(s,v,h),a(v,I),a(v,O),a(O,V),a(v,Z),a(v,D),a(D,F),a(v,U),a(v,C),a(C,ee),a(v,K),Q=!0},p:ua,i(s){Q||(L(g.$$.fragment,s),L(x.$$.fragment,s),Q=!0)},o(s){S(g.$$.fragment,s),S(x.$$.fragment,s),Q=!1},d(s){s&&t(r),s&&t(y),N(g,s),s&&t(B),s&&t(q),s&&t(G),N(x,s),s&&t(J),s&&t(v)}}}function Aa(X){let r,_;return r=new ha({props:{$$slots:{default:[ga]},$$scope:{ctx:X}}}),{c(){M(r.$$.fragment)},l(p){P(r.$$.fragment,p)},m(p,$){z(r,p,$),_=!0},p(p,$){const b={};$&2&&(b.$$scope={dirty:$,ctx:p}),r.$set(b)},i(p){_||(L(r.$$.fragment,p),_=!0)},o(p){S(r.$$.fragment,p),_=!1},d(p){N(r,p)}}}function ja(X){let r,_,p,$,b,w,H,T,j,E,y,g,B,q,Y,G,x,J,v,I,O,V,Z,D,F,U,C,ee,K,Q,s,h,se,re,te,oe,A,R,W,ae,_e,dt,Se,$t,Ve,xe,kt,We,ce,vt,Te,_t,wt,Je,we,Ue,qe,bt,Ke,be,Qe,ne,pe,Ne,ye,yt,Ie,gt,Xe,Ce,At,Ye,fe,jt,Me,Et,Ft,Ze,ge,et,le,ue,Oe,Ae,xt,De,Tt,tt,he,qt,Pe,Ct,Mt,at,me,Pt,ze,zt,Lt,st,je,rt,ie,de,He,Ee,St,Be,Nt,ot,$e,nt;return w=new Re({}),I=new va({props:{$$slots:{default:[wa]},$$scope:{ctx:X}}}),_e=new Re({}),we=new ve({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),be=new ve({props:{code:`sequence = "In a hole in the ground there lived a hobbit."
print(tokenizer(sequence))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = <span class="hljs-string">&quot;In a hole in the ground there lived a hobbit.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer(sequence))
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: [<span class="hljs-number">101</span>, <span class="hljs-number">1999</span>, <span class="hljs-number">1037</span>, <span class="hljs-number">4920</span>, <span class="hljs-number">1999</span>, <span class="hljs-number">1996</span>, <span class="hljs-number">2598</span>, <span class="hljs-number">2045</span>, <span class="hljs-number">2973</span>, <span class="hljs-number">1037</span>, <span class="hljs-number">7570</span>, <span class="hljs-number">10322</span>, <span class="hljs-number">4183</span>, <span class="hljs-number">1012</span>, <span class="hljs-number">102</span>], 
 <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>], 
 <span class="hljs-string">&#x27;attention_mask&#x27;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]}`}}),ye=new Re({}),ge=new ve({props:{code:`from transformers import AutoFeatureExtractor

feature_extractor = AutoFeatureExtractor.from_pretrained(
    "ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition&quot;</span>
<span class="hljs-meta">... </span>)`}}),Ae=new Re({}),je=new ve({props:{code:`from transformers import AutoProcessor

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv2-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)`}}),Ee=new Re({}),$e=new _a({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Aa],pytorch:[ya]},$$scope:{ctx:X}}}),{c(){r=l("meta"),_=m(),p=l("h1"),$=l("a"),b=l("span"),M(w.$$.fragment),H=m(),T=l("span"),j=o("Load pretrained instances with an AutoClass"),E=m(),y=l("p"),g=o("With so many different Transformer architectures, it can be challenging to create one for your checkpoint. As a part of \u{1F917} Transformers core philosophy to make the library easy, simple and flexible to use, an "),B=l("code"),q=o("AutoClass"),Y=o(" automatically infer and load the correct architecture from a given checkpoint. The "),G=l("code"),x=o("from_pretrained"),J=o(" method lets you quickly load a pretrained model for any architecture so you don\u2019t have to devote time and resources to train a model from scratch. Producing this type of checkpoint-agnostic code means if your code works for one checkpoint, it will work with another checkpoint - as long as it was trained for a similar task - even if the architecture is different."),v=m(),M(I.$$.fragment),O=m(),V=l("p"),Z=o("In this tutorial, learn to:"),D=m(),F=l("ul"),U=l("li"),C=o("Load a pretrained tokenizer."),ee=m(),K=l("li"),Q=o("Load a pretrained feature extractor."),s=m(),h=l("li"),se=o("Load a pretrained processor."),re=m(),te=l("li"),oe=o("Load a pretrained model."),A=m(),R=l("h2"),W=l("a"),ae=l("span"),M(_e.$$.fragment),dt=m(),Se=l("span"),$t=o("AutoTokenizer"),Ve=m(),xe=l("p"),kt=o("Nearly every NLP task begins with a tokenizer. A tokenizer converts your input into a format that can be processed by the model."),We=m(),ce=l("p"),vt=o("Load a tokenizer with "),Te=l("a"),_t=o("AutoTokenizer.from_pretrained()"),wt=o(":"),Je=m(),M(we.$$.fragment),Ue=m(),qe=l("p"),bt=o("Then tokenize your input as shown below:"),Ke=m(),M(be.$$.fragment),Qe=m(),ne=l("h2"),pe=l("a"),Ne=l("span"),M(ye.$$.fragment),yt=m(),Ie=l("span"),gt=o("AutoFeatureExtractor"),Xe=m(),Ce=l("p"),At=o("For audio and vision tasks, a feature extractor processes the audio signal or image into the correct input format."),Ye=m(),fe=l("p"),jt=o("Load a feature extractor with "),Me=l("a"),Et=o("AutoFeatureExtractor.from_pretrained()"),Ft=o(":"),Ze=m(),M(ge.$$.fragment),et=m(),le=l("h2"),ue=l("a"),Oe=l("span"),M(Ae.$$.fragment),xt=m(),De=l("span"),Tt=o("AutoProcessor"),tt=m(),he=l("p"),qt=o("Multimodal tasks require a processor that combines two types of preprocessing tools. For example, the "),Pe=l("a"),Ct=o("LayoutLMV2"),Mt=o(" model requires a feature extractor to handle images and a tokenizer to handle text; a processor combines both of them."),at=m(),me=l("p"),Pt=o("Load a processor with "),ze=l("a"),zt=o("AutoProcessor.from_pretrained()"),Lt=o(":"),st=m(),M(je.$$.fragment),rt=m(),ie=l("h2"),de=l("a"),He=l("span"),M(Ee.$$.fragment),St=m(),Be=l("span"),Nt=o("AutoModel"),ot=m(),M($e.$$.fragment),this.h()},l(e){const u=ka('[data-svelte="svelte-1phssyn"]',document.head);r=i(u,"META",{name:!0,content:!0}),u.forEach(t),_=d(e),p=i(e,"H1",{class:!0});var Fe=c(p);$=i(Fe,"A",{id:!0,class:!0,href:!0});var Ge=c($);b=i(Ge,"SPAN",{});var It=c(b);P(w.$$.fragment,It),It.forEach(t),Ge.forEach(t),H=d(Fe),T=i(Fe,"SPAN",{});var Ot=c(T);j=n(Ot,"Load pretrained instances with an AutoClass"),Ot.forEach(t),Fe.forEach(t),E=d(e),y=i(e,"P",{});var Le=c(y);g=n(Le,"With so many different Transformer architectures, it can be challenging to create one for your checkpoint. As a part of \u{1F917} Transformers core philosophy to make the library easy, simple and flexible to use, an "),B=i(Le,"CODE",{});var Dt=c(B);q=n(Dt,"AutoClass"),Dt.forEach(t),Y=n(Le," automatically infer and load the correct architecture from a given checkpoint. The "),G=i(Le,"CODE",{});var Ht=c(G);x=n(Ht,"from_pretrained"),Ht.forEach(t),J=n(Le," method lets you quickly load a pretrained model for any architecture so you don\u2019t have to devote time and resources to train a model from scratch. Producing this type of checkpoint-agnostic code means if your code works for one checkpoint, it will work with another checkpoint - as long as it was trained for a similar task - even if the architecture is different."),Le.forEach(t),v=d(e),P(I.$$.fragment,e),O=d(e),V=i(e,"P",{});var Bt=c(V);Z=n(Bt,"In this tutorial, learn to:"),Bt.forEach(t),D=d(e),F=i(e,"UL",{});var ke=c(F);U=i(ke,"LI",{});var Gt=c(U);C=n(Gt,"Load a pretrained tokenizer."),Gt.forEach(t),ee=d(ke),K=i(ke,"LI",{});var Rt=c(K);Q=n(Rt,"Load a pretrained feature extractor."),Rt.forEach(t),s=d(ke),h=i(ke,"LI",{});var Vt=c(h);se=n(Vt,"Load a pretrained processor."),Vt.forEach(t),re=d(ke),te=i(ke,"LI",{});var Wt=c(te);oe=n(Wt,"Load a pretrained model."),Wt.forEach(t),ke.forEach(t),A=d(e),R=i(e,"H2",{class:!0});var lt=c(R);W=i(lt,"A",{id:!0,class:!0,href:!0});var Jt=c(W);ae=i(Jt,"SPAN",{});var Ut=c(ae);P(_e.$$.fragment,Ut),Ut.forEach(t),Jt.forEach(t),dt=d(lt),Se=i(lt,"SPAN",{});var Kt=c(Se);$t=n(Kt,"AutoTokenizer"),Kt.forEach(t),lt.forEach(t),Ve=d(e),xe=i(e,"P",{});var Qt=c(xe);kt=n(Qt,"Nearly every NLP task begins with a tokenizer. A tokenizer converts your input into a format that can be processed by the model."),Qt.forEach(t),We=d(e),ce=i(e,"P",{});var it=c(ce);vt=n(it,"Load a tokenizer with "),Te=i(it,"A",{href:!0});var Xt=c(Te);_t=n(Xt,"AutoTokenizer.from_pretrained()"),Xt.forEach(t),wt=n(it,":"),it.forEach(t),Je=d(e),P(we.$$.fragment,e),Ue=d(e),qe=i(e,"P",{});var Yt=c(qe);bt=n(Yt,"Then tokenize your input as shown below:"),Yt.forEach(t),Ke=d(e),P(be.$$.fragment,e),Qe=d(e),ne=i(e,"H2",{class:!0});var ct=c(ne);pe=i(ct,"A",{id:!0,class:!0,href:!0});var Zt=c(pe);Ne=i(Zt,"SPAN",{});var ea=c(Ne);P(ye.$$.fragment,ea),ea.forEach(t),Zt.forEach(t),yt=d(ct),Ie=i(ct,"SPAN",{});var ta=c(Ie);gt=n(ta,"AutoFeatureExtractor"),ta.forEach(t),ct.forEach(t),Xe=d(e),Ce=i(e,"P",{});var aa=c(Ce);At=n(aa,"For audio and vision tasks, a feature extractor processes the audio signal or image into the correct input format."),aa.forEach(t),Ye=d(e),fe=i(e,"P",{});var pt=c(fe);jt=n(pt,"Load a feature extractor with "),Me=i(pt,"A",{href:!0});var sa=c(Me);Et=n(sa,"AutoFeatureExtractor.from_pretrained()"),sa.forEach(t),Ft=n(pt,":"),pt.forEach(t),Ze=d(e),P(ge.$$.fragment,e),et=d(e),le=i(e,"H2",{class:!0});var ft=c(le);ue=i(ft,"A",{id:!0,class:!0,href:!0});var ra=c(ue);Oe=i(ra,"SPAN",{});var oa=c(Oe);P(Ae.$$.fragment,oa),oa.forEach(t),ra.forEach(t),xt=d(ft),De=i(ft,"SPAN",{});var na=c(De);Tt=n(na,"AutoProcessor"),na.forEach(t),ft.forEach(t),tt=d(e),he=i(e,"P",{});var ut=c(he);qt=n(ut,"Multimodal tasks require a processor that combines two types of preprocessing tools. For example, the "),Pe=i(ut,"A",{href:!0});var la=c(Pe);Ct=n(la,"LayoutLMV2"),la.forEach(t),Mt=n(ut," model requires a feature extractor to handle images and a tokenizer to handle text; a processor combines both of them."),ut.forEach(t),at=d(e),me=i(e,"P",{});var ht=c(me);Pt=n(ht,"Load a processor with "),ze=i(ht,"A",{href:!0});var ia=c(ze);zt=n(ia,"AutoProcessor.from_pretrained()"),ia.forEach(t),Lt=n(ht,":"),ht.forEach(t),st=d(e),P(je.$$.fragment,e),rt=d(e),ie=i(e,"H2",{class:!0});var mt=c(ie);de=i(mt,"A",{id:!0,class:!0,href:!0});var ca=c(de);He=i(ca,"SPAN",{});var pa=c(He);P(Ee.$$.fragment,pa),pa.forEach(t),ca.forEach(t),St=d(mt),Be=i(mt,"SPAN",{});var fa=c(Be);Nt=n(fa,"AutoModel"),fa.forEach(t),mt.forEach(t),ot=d(e),P($e.$$.fragment,e),this.h()},h(){k(r,"name","hf:doc:metadata"),k(r,"content",JSON.stringify(Ea)),k($,"id","load-pretrained-instances-with-an-autoclass"),k($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k($,"href","#load-pretrained-instances-with-an-autoclass"),k(p,"class","relative group"),k(W,"id","autotokenizer"),k(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(W,"href","#autotokenizer"),k(R,"class","relative group"),k(Te,"href","/docs/transformers/pr_16305/en/model_doc/auto#transformers.AutoTokenizer.from_pretrained"),k(pe,"id","autofeatureextractor"),k(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(pe,"href","#autofeatureextractor"),k(ne,"class","relative group"),k(Me,"href","/docs/transformers/pr_16305/en/model_doc/auto#transformers.AutoFeatureExtractor.from_pretrained"),k(ue,"id","autoprocessor"),k(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(ue,"href","#autoprocessor"),k(le,"class","relative group"),k(Pe,"href","model_doc/layoutlmv2"),k(ze,"href","/docs/transformers/pr_16305/en/model_doc/auto#transformers.AutoProcessor.from_pretrained"),k(de,"id","automodel"),k(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(de,"href","#automodel"),k(ie,"class","relative group")},m(e,u){a(document.head,r),f(e,_,u),f(e,p,u),a(p,$),a($,b),z(w,b,null),a(p,H),a(p,T),a(T,j),f(e,E,u),f(e,y,u),a(y,g),a(y,B),a(B,q),a(y,Y),a(y,G),a(G,x),a(y,J),f(e,v,u),z(I,e,u),f(e,O,u),f(e,V,u),a(V,Z),f(e,D,u),f(e,F,u),a(F,U),a(U,C),a(F,ee),a(F,K),a(K,Q),a(F,s),a(F,h),a(h,se),a(F,re),a(F,te),a(te,oe),f(e,A,u),f(e,R,u),a(R,W),a(W,ae),z(_e,ae,null),a(R,dt),a(R,Se),a(Se,$t),f(e,Ve,u),f(e,xe,u),a(xe,kt),f(e,We,u),f(e,ce,u),a(ce,vt),a(ce,Te),a(Te,_t),a(ce,wt),f(e,Je,u),z(we,e,u),f(e,Ue,u),f(e,qe,u),a(qe,bt),f(e,Ke,u),z(be,e,u),f(e,Qe,u),f(e,ne,u),a(ne,pe),a(pe,Ne),z(ye,Ne,null),a(ne,yt),a(ne,Ie),a(Ie,gt),f(e,Xe,u),f(e,Ce,u),a(Ce,At),f(e,Ye,u),f(e,fe,u),a(fe,jt),a(fe,Me),a(Me,Et),a(fe,Ft),f(e,Ze,u),z(ge,e,u),f(e,et,u),f(e,le,u),a(le,ue),a(ue,Oe),z(Ae,Oe,null),a(le,xt),a(le,De),a(De,Tt),f(e,tt,u),f(e,he,u),a(he,qt),a(he,Pe),a(Pe,Ct),a(he,Mt),f(e,at,u),f(e,me,u),a(me,Pt),a(me,ze),a(ze,zt),a(me,Lt),f(e,st,u),z(je,e,u),f(e,rt,u),f(e,ie,u),a(ie,de),a(de,He),z(Ee,He,null),a(ie,St),a(ie,Be),a(Be,Nt),f(e,ot,u),z($e,e,u),nt=!0},p(e,[u]){const Fe={};u&2&&(Fe.$$scope={dirty:u,ctx:e}),I.$set(Fe);const Ge={};u&2&&(Ge.$$scope={dirty:u,ctx:e}),$e.$set(Ge)},i(e){nt||(L(w.$$.fragment,e),L(I.$$.fragment,e),L(_e.$$.fragment,e),L(we.$$.fragment,e),L(be.$$.fragment,e),L(ye.$$.fragment,e),L(ge.$$.fragment,e),L(Ae.$$.fragment,e),L(je.$$.fragment,e),L(Ee.$$.fragment,e),L($e.$$.fragment,e),nt=!0)},o(e){S(w.$$.fragment,e),S(I.$$.fragment,e),S(_e.$$.fragment,e),S(we.$$.fragment,e),S(be.$$.fragment,e),S(ye.$$.fragment,e),S(ge.$$.fragment,e),S(Ae.$$.fragment,e),S(je.$$.fragment,e),S(Ee.$$.fragment,e),S($e.$$.fragment,e),nt=!1},d(e){t(r),e&&t(_),e&&t(p),N(w),e&&t(E),e&&t(y),e&&t(v),N(I,e),e&&t(O),e&&t(V),e&&t(D),e&&t(F),e&&t(A),e&&t(R),N(_e),e&&t(Ve),e&&t(xe),e&&t(We),e&&t(ce),e&&t(Je),N(we,e),e&&t(Ue),e&&t(qe),e&&t(Ke),N(be,e),e&&t(Qe),e&&t(ne),N(ye),e&&t(Xe),e&&t(Ce),e&&t(Ye),e&&t(fe),e&&t(Ze),N(ge,e),e&&t(et),e&&t(le),N(Ae),e&&t(tt),e&&t(he),e&&t(at),e&&t(me),e&&t(st),N(je,e),e&&t(rt),e&&t(ie),N(Ee),e&&t(ot),N($e,e)}}}const Ea={local:"load-pretrained-instances-with-an-autoclass",sections:[{local:"autotokenizer",title:"AutoTokenizer"},{local:"autofeatureextractor",title:"AutoFeatureExtractor"},{local:"autoprocessor",title:"AutoProcessor"},{local:"automodel",title:"AutoModel"}],title:"Load pretrained instances with an AutoClass"};function Fa(X,r,_){let{fw:p}=r;return X.$$set=$=>{"fw"in $&&_(0,p=$.fw)},[p]}class Pa extends ma{constructor(r){super();da(this,r,Fa,ja,$a,{fw:0})}}export{Pa as default,Ea as metadata};
