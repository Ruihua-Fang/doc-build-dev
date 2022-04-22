import{S as hh,i as mh,s as uh,e as r,k as c,w as T,t as n,M as fh,c as a,d as t,m as l,a as i,x as v,h as s,b as d,F as e,g as h,y as b,q as x,o as y,B as k,v as _h}from"../../chunks/vendor-6b77c823.js";import{T as Yt}from"../../chunks/Tip-39098574.js";import{D}from"../../chunks/Docstring-1088f2fb.js";import{C as ln}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ue}from"../../chunks/IconCopyLink-7a11ce68.js";function gh(V){let p,q,f,g,S,_,w,$;return{c(){p=r("p"),q=n(`This class method is simply calling the feature extractor
`),f=r("a"),g=n("from_pretrained()"),S=n(` and the tokenizer
`),_=r("code"),w=n("from_pretrained"),$=n(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(N){p=a(N,"P",{});var F=i(p);q=s(F,`This class method is simply calling the feature extractor
`),f=a(F,"A",{href:!0});var E=i(f);g=s(E,"from_pretrained()"),E.forEach(t),S=s(F,` and the tokenizer
`),_=a(F,"CODE",{});var I=i(_);w=s(I,"from_pretrained"),I.forEach(t),$=s(F,` methods. Please refer to the docstrings of the
methods above for more information.`),F.forEach(t),this.h()},h(){d(f,"href","/docs/transformers/pr_1/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(N,F){h(N,p,F),e(p,q),e(p,f),e(f,g),e(p,S),e(p,_),e(_,w),e(p,$)},d(N){N&&t(p)}}}function Th(V){let p,q,f,g,S,_,w,$;return{c(){p=r("p"),q=n("This class method is simply calling "),f=r("a"),g=n("save_pretrained()"),S=n(` and
`),_=r("code"),w=n("save_pretrained"),$=n(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(N){p=a(N,"P",{});var F=i(p);q=s(F,"This class method is simply calling "),f=a(F,"A",{href:!0});var E=i(f);g=s(E,"save_pretrained()"),E.forEach(t),S=s(F,` and
`),_=a(F,"CODE",{});var I=i(_);w=s(I,"save_pretrained"),I.forEach(t),$=s(F,`. Please refer to the docstrings of the methods
above for more information.`),F.forEach(t),this.h()},h(){d(f,"href","/docs/transformers/pr_1/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(N,F){h(N,p,F),e(p,q),e(p,f),e(f,g),e(p,S),e(p,_),e(_,w),e(p,$)},d(N){N&&t(p)}}}function vh(V){let p,q,f,g,S;return{c(){p=r("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r("code"),g=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=a(_,"P",{});var w=i(p);q=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(w,"CODE",{});var $=i(f);g=s($,"Module"),$.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(_,w){h(_,p,w),e(p,q),e(p,f),e(f,g),e(p,S)},d(_){_&&t(p)}}}function bh(V){let p,q,f,g,S;return{c(){p=r("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r("code"),g=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=a(_,"P",{});var w=i(p);q=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(w,"CODE",{});var $=i(f);g=s($,"Module"),$.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(_,w){h(_,p,w),e(p,q),e(p,f),e(f,g),e(p,S)},d(_){_&&t(p)}}}function xh(V){let p,q,f,g,S,_,w,$,N,F,E,I,H,ee,ze,K,Ce,$e,M,B,te,ke,P,j,Pe,oe,ne,je,se,re,Me,O,Ee,L,Ne,ae,ie,Ae,de,J,De,Z,Y;return{c(){p=r("p"),q=n("TF 2.0 models accepts two formats as inputs:"),f=c(),g=r("ul"),S=r("li"),_=n("having all inputs as keyword arguments (like PyTorch models), or"),w=c(),$=r("li"),N=n("having all inputs as a list, tuple or dict in the first positional arguments."),F=c(),E=r("p"),I=n("This second option is useful when using "),H=r("code"),ee=n("tf.keras.Model.fit"),ze=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=r("code"),Ce=n("model(inputs)"),$e=n("."),M=c(),B=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke=c(),P=r("ul"),j=r("li"),Pe=n("a single Tensor with "),oe=r("code"),ne=n("input_ids"),je=n(" only and nothing else: "),se=r("code"),re=n("model(input_ids)"),Me=c(),O=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r("code"),Ne=n("model([input_ids, attention_mask])"),ae=n(" or "),ie=r("code"),Ae=n("model([input_ids, attention_mask, token_type_ids])"),de=c(),J=r("li"),De=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Y=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){p=a(u,"P",{});var z=i(p);q=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),f=l(u),g=a(u,"UL",{});var X=i(g);S=a(X,"LI",{});var st=i(S);_=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(X),$=a(X,"LI",{});var Ie=i($);N=s(Ie,"having all inputs as a list, tuple or dict in the first positional arguments."),Ie.forEach(t),X.forEach(t),F=l(u),E=a(u,"P",{});var Q=i(E);I=s(Q,"This second option is useful when using "),H=a(Q,"CODE",{});var We=i(H);ee=s(We,"tf.keras.Model.fit"),We.forEach(t),ze=s(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=a(Q,"CODE",{});var _e=i(K);Ce=s(_e,"model(inputs)"),_e.forEach(t),$e=s(Q,"."),Q.forEach(t),M=l(u),B=a(u,"P",{});var rt=i(B);te=s(rt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),rt.forEach(t),ke=l(u),P=a(u,"UL",{});var G=i(P);j=a(G,"LI",{});var ce=i(j);Pe=s(ce,"a single Tensor with "),oe=a(ce,"CODE",{});var at=i(oe);ne=s(at,"input_ids"),at.forEach(t),je=s(ce," only and nothing else: "),se=a(ce,"CODE",{});var Ve=i(se);re=s(Ve,"model(input_ids)"),Ve.forEach(t),ce.forEach(t),Me=l(G),O=a(G,"LI",{});var C=i(O);Ee=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a(C,"CODE",{});var it=i(L);Ne=s(it,"model([input_ids, attention_mask])"),it.forEach(t),ae=s(C," or "),ie=a(C,"CODE",{});var qe=i(ie);Ae=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),C.forEach(t),de=l(G),J=a(G,"LI",{});var Le=i(J);De=s(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(Le,"CODE",{});var dt=i(Z);Y=s(dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),dt.forEach(t),Le.forEach(t),G.forEach(t)},m(u,z){h(u,p,z),e(p,q),h(u,f,z),h(u,g,z),e(g,S),e(S,_),e(g,w),e(g,$),e($,N),h(u,F,z),h(u,E,z),e(E,I),e(E,H),e(H,ee),e(E,ze),e(E,K),e(K,Ce),e(E,$e),h(u,M,z),h(u,B,z),e(B,te),h(u,ke,z),h(u,P,z),e(P,j),e(j,Pe),e(j,oe),e(oe,ne),e(j,je),e(j,se),e(se,re),e(P,Me),e(P,O),e(O,Ee),e(O,L),e(L,Ne),e(O,ae),e(O,ie),e(ie,Ae),e(P,de),e(P,J),e(J,De),e(J,Z),e(Z,Y)},d(u){u&&t(p),u&&t(f),u&&t(g),u&&t(F),u&&t(E),u&&t(M),u&&t(B),u&&t(ke),u&&t(P)}}}function yh(V){let p,q,f,g,S;return{c(){p=r("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r("code"),g=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=a(_,"P",{});var w=i(p);q=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(w,"CODE",{});var $=i(f);g=s($,"Module"),$.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(_,w){h(_,p,w),e(p,q),e(p,f),e(f,g),e(p,S)},d(_){_&&t(p)}}}function kh(V){let p,q,f,g,S,_,w,$,N,F,E,I,H,ee,ze,K,Ce,$e,M,B,te,ke,P,j,Pe,oe,ne,je,se,re,Me,O,Ee,L,Ne,ae,ie,Ae,de,J,De,Z,Y;return{c(){p=r("p"),q=n("TF 2.0 models accepts two formats as inputs:"),f=c(),g=r("ul"),S=r("li"),_=n("having all inputs as keyword arguments (like PyTorch models), or"),w=c(),$=r("li"),N=n("having all inputs as a list, tuple or dict in the first positional arguments."),F=c(),E=r("p"),I=n("This second option is useful when using "),H=r("code"),ee=n("tf.keras.Model.fit"),ze=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=r("code"),Ce=n("model(inputs)"),$e=n("."),M=c(),B=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke=c(),P=r("ul"),j=r("li"),Pe=n("a single Tensor with "),oe=r("code"),ne=n("input_ids"),je=n(" only and nothing else: "),se=r("code"),re=n("model(input_ids)"),Me=c(),O=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r("code"),Ne=n("model([input_ids, attention_mask])"),ae=n(" or "),ie=r("code"),Ae=n("model([input_ids, attention_mask, token_type_ids])"),de=c(),J=r("li"),De=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Y=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){p=a(u,"P",{});var z=i(p);q=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),f=l(u),g=a(u,"UL",{});var X=i(g);S=a(X,"LI",{});var st=i(S);_=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(X),$=a(X,"LI",{});var Ie=i($);N=s(Ie,"having all inputs as a list, tuple or dict in the first positional arguments."),Ie.forEach(t),X.forEach(t),F=l(u),E=a(u,"P",{});var Q=i(E);I=s(Q,"This second option is useful when using "),H=a(Q,"CODE",{});var We=i(H);ee=s(We,"tf.keras.Model.fit"),We.forEach(t),ze=s(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=a(Q,"CODE",{});var _e=i(K);Ce=s(_e,"model(inputs)"),_e.forEach(t),$e=s(Q,"."),Q.forEach(t),M=l(u),B=a(u,"P",{});var rt=i(B);te=s(rt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),rt.forEach(t),ke=l(u),P=a(u,"UL",{});var G=i(P);j=a(G,"LI",{});var ce=i(j);Pe=s(ce,"a single Tensor with "),oe=a(ce,"CODE",{});var at=i(oe);ne=s(at,"input_ids"),at.forEach(t),je=s(ce," only and nothing else: "),se=a(ce,"CODE",{});var Ve=i(se);re=s(Ve,"model(input_ids)"),Ve.forEach(t),ce.forEach(t),Me=l(G),O=a(G,"LI",{});var C=i(O);Ee=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a(C,"CODE",{});var it=i(L);Ne=s(it,"model([input_ids, attention_mask])"),it.forEach(t),ae=s(C," or "),ie=a(C,"CODE",{});var qe=i(ie);Ae=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),C.forEach(t),de=l(G),J=a(G,"LI",{});var Le=i(J);De=s(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(Le,"CODE",{});var dt=i(Z);Y=s(dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),dt.forEach(t),Le.forEach(t),G.forEach(t)},m(u,z){h(u,p,z),e(p,q),h(u,f,z),h(u,g,z),e(g,S),e(S,_),e(g,w),e(g,$),e($,N),h(u,F,z),h(u,E,z),e(E,I),e(E,H),e(H,ee),e(E,ze),e(E,K),e(K,Ce),e(E,$e),h(u,M,z),h(u,B,z),e(B,te),h(u,ke,z),h(u,P,z),e(P,j),e(j,Pe),e(j,oe),e(oe,ne),e(j,je),e(j,se),e(se,re),e(P,Me),e(P,O),e(O,Ee),e(O,L),e(L,Ne),e(O,ae),e(O,ie),e(ie,Ae),e(P,de),e(P,J),e(J,De),e(J,Z),e(Z,Y)},d(u){u&&t(p),u&&t(f),u&&t(g),u&&t(F),u&&t(E),u&&t(M),u&&t(B),u&&t(ke),u&&t(P)}}}function wh(V){let p,q,f,g,S;return{c(){p=r("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r("code"),g=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=a(_,"P",{});var w=i(p);q=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(w,"CODE",{});var $=i(f);g=s($,"Module"),$.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(_,w){h(_,p,w),e(p,q),e(p,f),e(f,g),e(p,S)},d(_){_&&t(p)}}}function Sh(V){let p,q,f,g,S,_,w,$,N,F,E,I,H,ee,ze,K,Ce,$e,M,B,te,ke,P,j,Pe,oe,ne,je,se,re,Me,O,Ee,L,Ne,ae,ie,Ae,de,J,De,Z,Y,u,z,X,st,Ie,Q,We,_e,rt,G,ce,at,Ve,C,it,qe,Le,dt,pn,ta,oa,hn,na,sa,mn,ra,aa,Zs,U,ia,Yn,da,ca,Xn,la,pa,Qn,ha,ma,Zn,ua,fa,es,_a,ga,Xt,Ta,va,ts,ba,er,un,os,xa,tr,Qt,or,fn,Zt,ns,ya,ka,le,wa,ss,Sa,$a,rs,Ea,qa,as,Fa,za,is,Ca,Pa,ds,ja,Ma,nr,eo,sr,kt,Na,to,Aa,Da,rr,ct,wt,cs,oo,Ia,ls,La,ar,pe,no,Oa,lt,Ga,_n,Ua,Wa,so,Va,Ra,Ha,pt,Ka,gn,Ba,Ja,Tn,Ya,Xa,Qa,ps,Za,ei,ro,ir,ht,St,hs,ao,ti,ms,oi,dr,W,io,ni,us,si,ri,co,ai,vn,ii,di,ci,$t,lo,li,fs,pi,hi,Et,po,mi,ho,ui,_s,fi,_i,gi,Re,mo,Ti,bn,vi,xn,bi,xi,gs,yi,ki,yn,uo,cr,mt,qt,Ts,fo,wi,vs,Si,lr,he,_o,$i,bs,Ei,qi,go,Fi,kn,zi,Ci,Pi,xs,ji,Mi,Ft,To,Ni,ys,Ai,pr,ut,zt,ks,vo,Di,ws,Ii,hr,A,bo,Li,Ss,Oi,Gi,ge,wn,Ui,Wi,Sn,Vi,Ri,$n,Hi,Ki,xo,$s,Bi,Ji,Yi,En,Xi,Qi,Zi,Ct,yo,ed,Oe,td,ko,Es,od,nd,sd,qn,rd,ad,wo,qs,id,dd,cd,ld,He,So,pd,Fs,hd,md,Pt,ud,Ke,$o,fd,Eo,_d,Fn,gd,Td,vd,jt,bd,Mt,qo,xd,Fo,yd,zn,kd,wd,Sd,Nt,zo,$d,Co,Ed,Cn,qd,Fd,zd,At,Po,Cd,zs,Pd,mr,ft,Dt,Cs,jo,jd,Ps,Md,ur,we,Mo,Nd,No,Ad,Pn,Dd,Id,Ld,Ao,Od,Do,Gd,Ud,Wd,Te,Io,Vd,_t,Rd,jn,Hd,Kd,js,Bd,Jd,Yd,It,Xd,Ms,Qd,Zd,Lo,fr,gt,Lt,Ns,Oo,ec,As,tc,_r,Se,Go,oc,Uo,nc,Mn,sc,rc,ac,Wo,ic,Vo,dc,cc,lc,ve,Ro,pc,Tt,hc,Nn,mc,uc,Ds,fc,_c,gc,Ot,Tc,Is,vc,bc,Ho,gr,vt,Gt,Ls,Ko,xc,Os,yc,Tr,me,Bo,kc,Jo,wc,An,Sc,$c,Ec,Yo,qc,Xo,Fc,zc,Cc,Ut,Pc,be,Qo,jc,bt,Mc,Dn,Nc,Ac,Gs,Dc,Ic,Lc,Wt,Oc,Us,Gc,Uc,Zo,vr,xt,Vt,Ws,en,Wc,Vs,Vc,br,ue,tn,Rc,on,Hc,In,Kc,Bc,Jc,nn,Yc,sn,Xc,Qc,Zc,Rt,el,xe,rn,tl,yt,ol,Ln,nl,sl,Rs,rl,al,il,Ht,dl,Hs,cl,ll,an,xr;return _=new Ue({}),ee=new Ue({}),X=new Ue({}),Qt=new ln({props:{code:`import torch
from transformers import Speech2TextProcessor, Speech2TextForConditionalGeneration
from datasets import load_dataset

model = Speech2TextForConditionalGeneration.from_pretrained("facebook/s2t-small-librispeech-asr")
processor = Speech2TextProcessor.from_pretrained("facebook/s2t-small-librispeech-asr")


ds = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")

inputs = processor(ds[0]["audio"]["array"], sampling_rate=ds[0]["audio"]["sampling_rate"], return_tensors="pt")
generated_ids = model.generate(inputs["input_features"], attention_mask=inputs["attention_mask"])

transcription = processor.batch_decode(generated_ids)
transcription`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextProcessor, Speech2TextForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2TextProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs[<span class="hljs-string">&quot;input_features&quot;</span>], attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription
[<span class="hljs-string">&#x27;mister quilter is the apostle of the middle classes and we are glad to welcome his gospel&#x27;</span>]`}}),eo=new ln({props:{code:`import torch
from transformers import Speech2TextProcessor, Speech2TextForConditionalGeneration
from datasets import load_dataset

model = Speech2TextForConditionalGeneration.from_pretrained("facebook/s2t-medium-mustc-multilingual-st")
processor = Speech2TextProcessor.from_pretrained("facebook/s2t-medium-mustc-multilingual-st")

ds = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")

inputs = processor(ds[0]["audio"]["array"], sampling_rate=ds[0]["audio"]["sampling_rate"], return_tensors="pt")
generated_ids = model.generate(
    inputs["input_features"],
    attention_mask=inputs["attention_mask"],
    forced_bos_token_id=processor.tokenizer.lang_code_to_id["fr"],
)

translation = processor.batch_decode(generated_ids)
translation`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextProcessor, Speech2TextForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-medium-mustc-multilingual-st&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2TextProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-medium-mustc-multilingual-st&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;input_features&quot;</span>],
<span class="hljs-meta">... </span>    attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    forced_bos_token_id=processor.tokenizer.lang_code_to_id[<span class="hljs-string">&quot;fr&quot;</span>],
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>translation = processor.batch_decode(generated_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>translation
[<span class="hljs-string">&quot;&lt;lang:fr&gt; (Vid\xE9o) Si M. Kilder est l&#x27;apossible des classes moyennes, et nous sommes heureux d&#x27;\xEAtre accueillis dans son \xE9vangile.&quot;</span>]`}}),oo=new Ue({}),no=new D({props:{name:"class transformers.Speech2TextConfig",anchor:"transformers.Speech2TextConfig",parameters:[{name:"vocab_size",val:" = 10000"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 4"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 4"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_source_positions",val:" = 6000"},{name:"max_target_positions",val:" = 1024"},{name:"num_conv_layers",val:" = 2"},{name:"conv_kernel_sizes",val:" = (5, 5)"},{name:"conv_channels",val:" = 1024"},{name:"input_feat_per_channel",val:" = 80"},{name:"input_channels",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Speech2Text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextModel">Speech2TextModel</a>`,name:"vocab_size"},{anchor:"transformers.Speech2TextConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.Speech2TextConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.Speech2TextConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.Speech2TextConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.Speech2TextConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.Speech2TextConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.Speech2TextConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.Speech2TextConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.Speech2TextConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.Speech2TextConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.Speech2TextConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.Speech2TextConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.Speech2TextConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.Speech2TextConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.Speech2TextConfig.max_source_positions",description:`<strong>max_source_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 6000) &#x2014;
The maximum sequence length of log-mel filter-bank features that this model might ever be used with.`,name:"max_source_positions"},{anchor:"transformers.Speech2TextConfig.max_target_positions",description:`<strong>max_target_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_target_positions"},{anchor:"transformers.Speech2TextConfig.num_conv_layers",description:`<strong>num_conv_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of 1D convolutional layers in the conv module.`,name:"num_conv_layers"},{anchor:"transformers.Speech2TextConfig.conv_kernel_sizes",description:`<strong>conv_kernel_sizes</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 5)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the conv module. The length
of <code>conv_kernel_sizes</code> has to match <code>num_conv_layers</code>.`,name:"conv_kernel_sizes"},{anchor:"transformers.Speech2TextConfig.conv_channels",description:`<strong>conv_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
An integer defining the number of output channels of each convolution layers except the final one in the
conv module.`,name:"conv_channels"},{anchor:"transformers.Speech2TextConfig.input_feat_per_channel",description:`<strong>input_feat_per_channel</strong> (<code>int</code>, <em>optional</em>, defaults to 80) &#x2014;
An integer specifying the size of feature vector. This is also the dimensions of log-mel filter-bank
features.`,name:"input_feat_per_channel"},{anchor:"transformers.Speech2TextConfig.input_channels",description:`<strong>input_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
An integer specifying number of input channels of the input feature vector.`,name:"input_channels"}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/configuration_speech_to_text.py#L29"}}),ro=new ln({props:{code:`from transformers import Speech2TextModel, Speech2TextConfig

# Initializing a Speech2Text s2t_transformer_s style configuration
configuration = Speech2TextConfig()

# Initializing a model from the s2t_transformer_s style configuration
model = Speech2TextModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextModel, Speech2TextConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Speech2Text s2t_transformer_s style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Speech2TextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the s2t_transformer_s style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ao=new Ue({}),io=new D({props:{name:"class transformers.Speech2TextTokenizer",anchor:"transformers.Speech2TextTokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_upper_case",val:" = False"},{name:"do_lower_case",val:" = False"},{name:"tgt_lang",val:" = None"},{name:"lang_codes",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Speech2TextTokenizer.spm_file",description:`<strong>spm_file</strong> (<code>str</code>) &#x2014;
Path to the <a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> model file`,name:"spm_file"},{anchor:"transformers.Speech2TextTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Speech2TextTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Speech2TextTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Speech2TextTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.Speech2TextTokenizer.do_upper_case",description:`<strong>do_upper_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to uppercase the output when decoding.`,name:"do_upper_case"},{anchor:"transformers.Speech2TextTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.Speech2TextTokenizer.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.Speech2TextTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/pr_1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L55"}}),lo=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.Speech2TextTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L195"}}),po=new D({props:{name:"get_special_tokens_mask",anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L202",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),mo=new D({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/tokenization_utils_base.py#L2859",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),uo=new D({props:{name:"save_vocabulary",anchor:"transformers.Speech2TextTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L251"}}),fo=new Ue({}),_o=new D({props:{name:"class transformers.Speech2TextFeatureExtractor",anchor:"transformers.Speech2TextFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"num_mel_bins",val:" = 80"},{name:"padding_value",val:" = 0.0"},{name:"do_ceptral_normalize",val:" = True"},{name:"normalize_means",val:" = True"},{name:"normalize_vars",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.Speech2TextFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.num_mel_bins",description:`<strong>num_mel_bins</strong> (<code>int</code>, defaults to 80) &#x2014;
Number of Mel-frequency bins.`,name:"num_mel_bins"},{anchor:"transformers.Speech2TextFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding vectors.`,name:"padding_value"},{anchor:"transformers.Speech2TextFeatureExtractor.do_ceptral_normalize",description:`<strong>do_ceptral_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to apply utterance-level cepstral mean and variance normalization to extracted features.`,name:"do_ceptral_normalize"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_means",description:`<strong>normalize_means</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to zero-mean normalize the extracted features.`,name:"normalize_means"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_vars",description:`<strong>normalize_vars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to unit-variance normalize the extracted features.`,name:"normalize_vars"}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L33"}}),To=new D({props:{name:"__call__",anchor:"transformers.Speech2TextFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
The sequence or batch of sequences to be padded. Each sequence can be a numpy array, a list of float
values, a list of numpy arrays or a list of list of float values.`,name:"raw_speech"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_1/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Select a strategy to pad the returned sequences (according to the model&#x2019;s padding side and padding
index) among:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of the returned list and optionally padding length (see above).`,name:"max_length"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>) &#x2014;
Activates truncation to cut input sequences longer than <em>max_length</em> to <em>max_length</em>.`,name:"truncation"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value.</p>
<p>This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability</p>
<blockquote>
<p>= 7.5 (Volta), or on TPUs which benefit from having sequence lengths be a multiple of 128.</p>
</blockquote>`,name:"pad_to_multiple_of"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific feature_extractor&#x2019;s default.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>For Speech2TextTransoformer models, <code>attention_mask</code> should alwys be passed for batched inference, to
avoid subtle bugs.</p>

					</div>`,name:"return_attention_mask"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors.`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values / vectors.`,name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L126"}}),vo=new Ue({}),bo=new D({props:{name:"class transformers.Speech2TextProcessor",anchor:"transformers.Speech2TextProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>Speech2TextFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2TextProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2TextTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/processing_speech_to_text.py#L23"}}),yo=new D({props:{name:"__call__",anchor:"transformers.Speech2TextProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/processing_speech_to_text.py#L45"}}),So=new D({props:{name:"from_pretrained",anchor:"transformers.Speech2TextProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/pr_1/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/pr_1/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/processing_utils.py#L156"}}),Pt=new Yt({props:{$$slots:{default:[gh]},$$scope:{ctx:V}}}),$o=new D({props:{name:"save_pretrained",anchor:"transformers.Speech2TextProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Speech2TextProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/pr_1/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/processing_utils.py#L94"}}),jt=new Yt({props:{$$slots:{default:[Th]},$$scope:{ctx:V}}}),qo=new D({props:{name:"batch_decode",anchor:"transformers.Speech2TextProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/processing_speech_to_text.py#L55"}}),zo=new D({props:{name:"decode",anchor:"transformers.Speech2TextProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/processing_speech_to_text.py#L62"}}),Po=new D({props:{name:"as_target_processor",anchor:"transformers.Speech2TextProcessor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/processing_speech_to_text.py#L69"}}),jo=new Ue({}),Mo=new D({props:{name:"class transformers.Speech2TextModel",anchor:"transformers.Speech2TextModel",parameters:[{name:"config",val:": Speech2TextConfig"}],parametersDescription:[{anchor:"transformers.Speech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1116"}}),Io=new D({props:{name:"forward",anchor:"transformers.Speech2TextModel.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Speech2TextModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion
into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/pr_1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>SpeechToText uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.Speech2TextModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_speech_to_text._prepare_decoder_inputs</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.Speech2TextModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Speech2TextModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.Speech2TextModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.Speech2TextModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.Speech2TextModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. decoder_inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, target_sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>decoder_input_ids<code>you can choose to directly pass an embedded representation. If</code>past_key_values<code>is used, optionally only the last</code>decoder_inputs_embeds<code>have to be input (see</code>past_key_values<code>). This is useful if you want more control over how to convert </code>decoder_input_ids\` indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"past_key_values"},{anchor:"transformers.Speech2TextModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.Speech2TextModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Speech2TextModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Speech2TextModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1138",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
>Speech2TextConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),It=new Yt({props:{$$slots:{default:[vh]},$$scope:{ctx:V}}}),Lo=new ln({props:{code:`import torch
from transformers import Speech2TextModel, Speech2TextFeatureExtractor
from datasets import load_dataset

model = Speech2TextModel.from_pretrained("facebook/s2t-small-librispeech-asr")
feature_extractor = Speech2TextFeatureExtractor.from_pretrained("facebook/s2t-small-librispeech-asr")
ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
inputs = feature_extractor(
    ds[0]["audio"]["array"], sampling_rate=ds[0]["audio"]["sampling_rate"], return_tensors="pt"
)
input_features = inputs.input_features
decoder_input_ids = torch.tensor([[1, 1]]) * model.config.decoder_start_token_id
last_hidden_state = model(input_features, decoder_input_ids=decoder_input_ids).last_hidden_state
list(last_hidden_state.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextModel, Speech2TextFeatureExtractor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextModel.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Speech2TextFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]]) * model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = model(input_features, decoder_input_ids=decoder_input_ids).last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_state.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">256</span>]`}}),Oo=new Ue({}),Go=new D({props:{name:"class transformers.Speech2TextForConditionalGeneration",anchor:"transformers.Speech2TextForConditionalGeneration",parameters:[{name:"config",val:": Speech2TextConfig"}],parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1247"}}),Ro=new D({props:{name:"forward",anchor:"transformers.Speech2TextForConditionalGeneration.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion
into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/pr_1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>SpeechToText uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_speech_to_text._prepare_decoder_inputs</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. decoder_inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, target_sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>decoder_input_ids<code>you can choose to directly pass an embedded representation. If</code>past_key_values<code>is used, optionally only the last</code>decoder_inputs_embeds<code>have to be input (see</code>past_key_values<code>). This is useful if you want more control over how to convert </code>decoder_input_ids\` indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"past_key_values"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1284",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
>Speech2TextConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ot=new Yt({props:{$$slots:{default:[bh]},$$scope:{ctx:V}}}),Ho=new ln({props:{code:`import torch
from transformers import Speech2TextProcessor, Speech2TextForConditionalGeneration
from datasets import load_dataset

model = Speech2TextForConditionalGeneration.from_pretrained("facebook/s2t-small-librispeech-asr")
processor = Speech2TextProcessor.from_pretrained("facebook/s2t-small-librispeech-asr")


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")

inputs = processor(
    ds[0]["audio"]["array"], sampling_rate=ds[0]["audio"]["sampling_rate"], return_tensors="pt"
)
input_features = inputs.input_features

generated_ids = model.generate(inputs=input_features)

transcription = processor.batch_decode(generated_ids)[0]
transcription`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextProcessor, Speech2TextForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2TextProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs=input_features)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription
<span class="hljs-string">&#x27;mister quilter is the apostle of the middle classes and we are glad to welcome his gospel&#x27;</span>`}}),Ko=new Ue({}),Bo=new D({props:{name:"class transformers.TFSpeech2TextModel",anchor:"transformers.TFSpeech2TextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1228"}}),Ut=new Yt({props:{$$slots:{default:[xh]},$$scope:{ctx:V}}}),Qo=new D({props:{name:"call",anchor:"transformers.TFSpeech2TextModel.call",parameters:[{name:"input_features",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion
into a tensor of floats. See <a href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/pr_1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFSpeech2TextModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFSpeech2TextModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFSpeech2TextModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFSpeech2TextModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFSpeech2TextModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFSpeech2TextModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFSpeech2TextModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFSpeech2TextModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFSpeech2TextModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1240",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
>Speech2TextConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Wt=new Yt({props:{$$slots:{default:[yh]},$$scope:{ctx:V}}}),Zo=new ln({props:{code:`from transformers import Speech2TextTokenizer, TFSpeech2TextModel
import tensorflow as tf

tokenizer = Speech2TextTokenizer.from_pretrained("facebook/s2t-small-librispeech-asr")
model = TFSpeech2TextModel.from_pretrained("facebook/s2t-small-librispeech-asr")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextTokenizer, TFSpeech2TextModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = Speech2TextTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFSpeech2TextModel.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),en=new Ue({}),tn=new D({props:{name:"class transformers.TFSpeech2TextForConditionalGeneration",anchor:"transformers.TFSpeech2TextForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1311"}}),Rt=new Yt({props:{$$slots:{default:[kh]},$$scope:{ctx:V}}}),rn=new D({props:{name:"call",anchor:"transformers.TFSpeech2TextForConditionalGeneration.call",parameters:[{name:"input_features",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion
into a tensor of floats. See <a href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/pr_1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_1/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1333",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
>Speech2TextConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ht=new Yt({props:{$$slots:{default:[wh]},$$scope:{ctx:V}}}),an=new ln({props:{code:`import tensorflow as tf
from transformers import Speech2TextProcessor, TFSpeech2TextForConditionalGeneration
from datasets import load_dataset
import soundfile as sf

model = TFSpeech2TextForConditionalGeneration.from_pretrained(
    "facebook/s2t-small-librispeech-asr", from_pt=True
)
processor = Speech2TextProcessor.from_pretrained("facebook/s2t-small-librispeech-asr")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)
ds.set_format(type="tf")

input_features = processor(
    ds["speech"][0], sampling_rate=16000, return_tensors="tf"
).input_features  # Batch size 1
generated_ids = model.generate(input_features)

transcription = processor.batch_decode(generated_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextProcessor, TFSpeech2TextForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFSpeech2TextForConditionalGeneration.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>, from_pt=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2TextProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds.set_format(<span class="hljs-built_in">type</span>=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = processor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], sampling_rate=<span class="hljs-number">16000</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_features  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(input_features)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`}}),{c(){p=r("meta"),q=c(),f=r("h1"),g=r("a"),S=r("span"),T(_.$$.fragment),w=c(),$=r("span"),N=n("Speech2Text"),F=c(),E=r("h2"),I=r("a"),H=r("span"),T(ee.$$.fragment),ze=c(),K=r("span"),Ce=n("Overview"),$e=c(),M=r("p"),B=n("The Speech2Text model was proposed in "),te=r("a"),ke=n("fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),P=n(` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),j=r("a"),Pe=n("LibriSpeech"),oe=n(", "),ne=r("a"),je=n("CoVoST 2"),se=n(", "),re=r("a"),Me=n("MuST-C"),O=n("."),Ee=c(),L=r("p"),Ne=n("This model was contributed by "),ae=r("a"),ie=n("valhalla"),Ae=n(". The original code can be found "),de=r("a"),J=n("here"),De=n("."),Z=c(),Y=r("h2"),u=r("a"),z=r("span"),T(X.$$.fragment),st=c(),Ie=r("span"),Q=n("Inference"),We=c(),_e=r("p"),rt=n(`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),G=r("code"),ce=n("generate()"),at=n(" method can be used for inference."),Ve=c(),C=r("p"),it=n("The "),qe=r("a"),Le=n("Speech2TextFeatureExtractor"),dt=n(` class is responsible for extracting the log-mel filter-bank
features. The `),pn=r("a"),ta=n("Speech2TextProcessor"),oa=n(" wraps "),hn=r("a"),na=n("Speech2TextFeatureExtractor"),sa=n(` and
`),mn=r("a"),ra=n("Speech2TextTokenizer"),aa=n(` into a single instance to both extract the input features and decode the
predicted token ids.`),Zs=c(),U=r("p"),ia=n("The feature extractor depends on "),Yn=r("code"),da=n("torchaudio"),ca=n(" and the tokenizer depends on "),Xn=r("code"),la=n("sentencepiece"),pa=n(` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),Qn=r("code"),ha=n('pip install transformers"[speech, sentencepiece]"'),ma=n(" or install the packages seperately with "),Zn=r("code"),ua=n("pip install torchaudio sentencepiece"),fa=n(". Also "),es=r("code"),_a=n("torchaudio"),ga=n(" requires the development version of the "),Xt=r("a"),Ta=n("libsndfile"),va=n(` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),ts=r("code"),ba=n("apt install libsndfile1-dev"),er=c(),un=r("ul"),os=r("li"),xa=n("ASR and Speech Translation"),tr=c(),T(Qt.$$.fragment),or=c(),fn=r("ul"),Zt=r("li"),ns=r("p"),ya=n("Multilingual speech translation"),ka=c(),le=r("p"),wa=n("For multilingual speech translation models, "),ss=r("code"),Sa=n("eos_token_id"),$a=n(" is used as the "),rs=r("code"),Ea=n("decoder_start_token_id"),qa=n(` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),as=r("code"),Fa=n("forced_bos_token_id"),za=n(" parameter to the "),is=r("code"),Ca=n("generate()"),Pa=n(` method. The following
example shows how to transate English speech to French text using the `),ds=r("em"),ja=n("facebook/s2t-medium-mustc-multilingual-st"),Ma=n(`
checkpoint.`),nr=c(),T(eo.$$.fragment),sr=c(),kt=r("p"),Na=n("See the "),to=r("a"),Aa=n("model hub"),Da=n(" to look for Speech2Text checkpoints."),rr=c(),ct=r("h2"),wt=r("a"),cs=r("span"),T(oo.$$.fragment),Ia=c(),ls=r("span"),La=n("Speech2TextConfig"),ar=c(),pe=r("div"),T(no.$$.fragment),Oa=c(),lt=r("p"),Ga=n("This is the configuration class to store the configuration of a "),_n=r("a"),Ua=n("Speech2TextModel"),Wa=n(`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),so=r("a"),Va=n("facebook/s2t-small-librispeech-asr"),Ra=n(" architecture."),Ha=c(),pt=r("p"),Ka=n("Configuration objects inherit from "),gn=r("a"),Ba=n("PretrainedConfig"),Ja=n(` and can be used to control the model outputs. Read the
documentation from `),Tn=r("a"),Ya=n("PretrainedConfig"),Xa=n(" for more information."),Qa=c(),ps=r("p"),Za=n("Example:"),ei=c(),T(ro.$$.fragment),ir=c(),ht=r("h2"),St=r("a"),hs=r("span"),T(ao.$$.fragment),ti=c(),ms=r("span"),oi=n("Speech2TextTokenizer"),dr=c(),W=r("div"),T(io.$$.fragment),ni=c(),us=r("p"),si=n("Construct an Speech2Text tokenizer."),ri=c(),co=r("p"),ai=n("This tokenizer inherits from "),vn=r("a"),ii=n("PreTrainedTokenizer"),di=n(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),ci=c(),$t=r("div"),T(lo.$$.fragment),li=c(),fs=r("p"),pi=n("Build model inputs from a sequence by appending eos_token_id."),hi=c(),Et=r("div"),T(po.$$.fragment),mi=c(),ho=r("p"),ui=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_s=r("code"),fi=n("prepare_for_model"),_i=n(" method."),gi=c(),Re=r("div"),T(mo.$$.fragment),Ti=c(),bn=r("p"),vi=n("Create the token type IDs corresponding to the sequences passed. "),xn=r("a"),bi=n(`What are token type
IDs?`),xi=c(),gs=r("p"),yi=n("Should be overridden in a subclass if the model has a special way of building those."),ki=c(),yn=r("div"),T(uo.$$.fragment),cr=c(),mt=r("h2"),qt=r("a"),Ts=r("span"),T(fo.$$.fragment),wi=c(),vs=r("span"),Si=n("Speech2TextFeatureExtractor"),lr=c(),he=r("div"),T(_o.$$.fragment),$i=c(),bs=r("p"),Ei=n("Constructs a Speech2Text feature extractor."),qi=c(),go=r("p"),Fi=n("This feature extractor inherits from "),kn=r("a"),zi=n("Speech2TextFeatureExtractor"),Ci=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Pi=c(),xs=r("p"),ji=n(`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),Mi=c(),Ft=r("div"),T(To.$$.fragment),Ni=c(),ys=r("p"),Ai=n("Main method to featurize and prepare for the model one or several sequence(s). sequences."),pr=c(),ut=r("h2"),zt=r("a"),ks=r("span"),T(vo.$$.fragment),Di=c(),ws=r("span"),Ii=n("Speech2TextProcessor"),hr=c(),A=r("div"),T(bo.$$.fragment),Li=c(),Ss=r("p"),Oi=n(`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),Gi=c(),ge=r("p"),wn=r("a"),Ui=n("Speech2TextProcessor"),Wi=n(" offers all the functionalities of "),Sn=r("a"),Vi=n("Speech2TextFeatureExtractor"),Ri=n(` and
`),$n=r("a"),Hi=n("Speech2TextTokenizer"),Ki=n(". See the "),xo=r("a"),$s=r("strong"),Bi=n("call"),Ji=n("()"),Yi=n(" and "),En=r("a"),Xi=n("decode()"),Qi=n(` for more
information.`),Zi=c(),Ct=r("div"),T(yo.$$.fragment),ed=c(),Oe=r("p"),td=n(`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),ko=r("a"),Es=r("strong"),od=n("call"),nd=n("()"),sd=n(` and returns its output. If used in the context
`),qn=r("a"),rd=n("as_target_processor()"),ad=n(` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),wo=r("a"),qs=r("strong"),id=n("call"),dd=n("()"),cd=n(`. Please refer to the doctsring of the above two methods for more
information.`),ld=c(),He=r("div"),T(So.$$.fragment),pd=c(),Fs=r("p"),hd=n("Instantiate a processor associated with a pretrained model."),md=c(),T(Pt.$$.fragment),ud=c(),Ke=r("div"),T($o.$$.fragment),fd=c(),Eo=r("p"),_d=n(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Fn=r("a"),gd=n("from_pretrained()"),Td=n(" method."),vd=c(),T(jt.$$.fragment),bd=c(),Mt=r("div"),T(qo.$$.fragment),xd=c(),Fo=r("p"),yd=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),zn=r("a"),kd=n("batch_decode()"),wd=n(`. Please
refer to the docstring of this method for more information.`),Sd=c(),Nt=r("div"),T(zo.$$.fragment),$d=c(),Co=r("p"),Ed=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Cn=r("a"),qd=n("decode()"),Fd=n(`. Please refer
to the docstring of this method for more information.`),zd=c(),At=r("div"),T(Po.$$.fragment),Cd=c(),zs=r("p"),Pd=n(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text.`),mr=c(),ft=r("h2"),Dt=r("a"),Cs=r("span"),T(jo.$$.fragment),jd=c(),Ps=r("span"),Md=n("Speech2TextModel"),ur=c(),we=r("div"),T(Mo.$$.fragment),Nd=c(),No=r("p"),Ad=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Pn=r("a"),Dd=n("PreTrainedModel"),Id=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ld=c(),Ao=r("p"),Od=n("This model is also a PyTorch "),Do=r("a"),Gd=n("torch.nn.Module"),Ud=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wd=c(),Te=r("div"),T(Io.$$.fragment),Vd=c(),_t=r("p"),Rd=n("The "),jn=r("a"),Hd=n("Speech2TextModel"),Kd=n(" forward method, overrides the "),js=r("code"),Bd=n("__call__"),Jd=n(" special method."),Yd=c(),T(It.$$.fragment),Xd=c(),Ms=r("p"),Qd=n("Example:"),Zd=c(),T(Lo.$$.fragment),fr=c(),gt=r("h2"),Lt=r("a"),Ns=r("span"),T(Oo.$$.fragment),ec=c(),As=r("span"),tc=n("Speech2TextForConditionalGeneration"),_r=c(),Se=r("div"),T(Go.$$.fragment),oc=c(),Uo=r("p"),nc=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Mn=r("a"),sc=n("PreTrainedModel"),rc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ac=c(),Wo=r("p"),ic=n("This model is also a PyTorch "),Vo=r("a"),dc=n("torch.nn.Module"),cc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lc=c(),ve=r("div"),T(Ro.$$.fragment),pc=c(),Tt=r("p"),hc=n("The "),Nn=r("a"),mc=n("Speech2TextForConditionalGeneration"),uc=n(" forward method, overrides the "),Ds=r("code"),fc=n("__call__"),_c=n(" special method."),gc=c(),T(Ot.$$.fragment),Tc=c(),Is=r("p"),vc=n("Example:"),bc=c(),T(Ho.$$.fragment),gr=c(),vt=r("h2"),Gt=r("a"),Ls=r("span"),T(Ko.$$.fragment),xc=c(),Os=r("span"),yc=n("TFSpeech2TextModel"),Tr=c(),me=r("div"),T(Bo.$$.fragment),kc=c(),Jo=r("p"),wc=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),An=r("a"),Sc=n("TFPreTrainedModel"),$c=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ec=c(),Yo=r("p"),qc=n("This model is also a "),Xo=r("a"),Fc=n("tf.keras.Model"),zc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cc=c(),T(Ut.$$.fragment),Pc=c(),be=r("div"),T(Qo.$$.fragment),jc=c(),bt=r("p"),Mc=n("The "),Dn=r("a"),Nc=n("TFSpeech2TextModel"),Ac=n(" forward method, overrides the "),Gs=r("code"),Dc=n("__call__"),Ic=n(" special method."),Lc=c(),T(Wt.$$.fragment),Oc=c(),Us=r("p"),Gc=n("Example:"),Uc=c(),T(Zo.$$.fragment),vr=c(),xt=r("h2"),Vt=r("a"),Ws=r("span"),T(en.$$.fragment),Wc=c(),Vs=r("span"),Vc=n("TFSpeech2TextForConditionalGeneration"),br=c(),ue=r("div"),T(tn.$$.fragment),Rc=c(),on=r("p"),Hc=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),In=r("a"),Kc=n("TFPreTrainedModel"),Bc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jc=c(),nn=r("p"),Yc=n("This model is also a "),sn=r("a"),Xc=n("tf.keras.Model"),Qc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zc=c(),T(Rt.$$.fragment),el=c(),xe=r("div"),T(rn.$$.fragment),tl=c(),yt=r("p"),ol=n("The "),Ln=r("a"),nl=n("TFSpeech2TextForConditionalGeneration"),sl=n(" forward method, overrides the "),Rs=r("code"),rl=n("__call__"),al=n(" special method."),il=c(),T(Ht.$$.fragment),dl=c(),Hs=r("p"),cl=n("Example:"),ll=c(),T(an.$$.fragment),this.h()},l(o){const m=fh('[data-svelte="svelte-1phssyn"]',document.head);p=a(m,"META",{name:!0,content:!0}),m.forEach(t),q=l(o),f=a(o,"H1",{class:!0});var dn=i(f);g=a(dn,"A",{id:!0,class:!0,href:!0});var Ks=i(g);S=a(Ks,"SPAN",{});var Bs=i(S);v(_.$$.fragment,Bs),Bs.forEach(t),Ks.forEach(t),w=l(dn),$=a(dn,"SPAN",{});var Js=i($);N=s(Js,"Speech2Text"),Js.forEach(t),dn.forEach(t),F=l(o),E=a(o,"H2",{class:!0});var cn=i(E);I=a(cn,"A",{id:!0,class:!0,href:!0});var Ys=i(I);H=a(Ys,"SPAN",{});var Xs=i(H);v(ee.$$.fragment,Xs),Xs.forEach(t),Ys.forEach(t),ze=l(cn),K=a(cn,"SPAN",{});var Qs=i(K);Ce=s(Qs,"Overview"),Qs.forEach(t),cn.forEach(t),$e=l(o),M=a(o,"P",{});var Be=i(M);B=s(Be,"The Speech2Text model was proposed in "),te=a(Be,"A",{href:!0,rel:!0});var fl=i(te);ke=s(fl,"fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),fl.forEach(t),P=s(Be,` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),j=a(Be,"A",{href:!0,rel:!0});var _l=i(j);Pe=s(_l,"LibriSpeech"),_l.forEach(t),oe=s(Be,", "),ne=a(Be,"A",{href:!0,rel:!0});var gl=i(ne);je=s(gl,"CoVoST 2"),gl.forEach(t),se=s(Be,", "),re=a(Be,"A",{href:!0,rel:!0});var Tl=i(re);Me=s(Tl,"MuST-C"),Tl.forEach(t),O=s(Be,"."),Be.forEach(t),Ee=l(o),L=a(o,"P",{});var On=i(L);Ne=s(On,"This model was contributed by "),ae=a(On,"A",{href:!0,rel:!0});var vl=i(ae);ie=s(vl,"valhalla"),vl.forEach(t),Ae=s(On,". The original code can be found "),de=a(On,"A",{href:!0,rel:!0});var bl=i(de);J=s(bl,"here"),bl.forEach(t),De=s(On,"."),On.forEach(t),Z=l(o),Y=a(o,"H2",{class:!0});var yr=i(Y);u=a(yr,"A",{id:!0,class:!0,href:!0});var xl=i(u);z=a(xl,"SPAN",{});var yl=i(z);v(X.$$.fragment,yl),yl.forEach(t),xl.forEach(t),st=l(yr),Ie=a(yr,"SPAN",{});var kl=i(Ie);Q=s(kl,"Inference"),kl.forEach(t),yr.forEach(t),We=l(o),_e=a(o,"P",{});var kr=i(_e);rt=s(kr,`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),G=a(kr,"CODE",{});var wl=i(G);ce=s(wl,"generate()"),wl.forEach(t),at=s(kr," method can be used for inference."),kr.forEach(t),Ve=l(o),C=a(o,"P",{});var Je=i(C);it=s(Je,"The "),qe=a(Je,"A",{href:!0});var Sl=i(qe);Le=s(Sl,"Speech2TextFeatureExtractor"),Sl.forEach(t),dt=s(Je,` class is responsible for extracting the log-mel filter-bank
features. The `),pn=a(Je,"A",{href:!0});var $l=i(pn);ta=s($l,"Speech2TextProcessor"),$l.forEach(t),oa=s(Je," wraps "),hn=a(Je,"A",{href:!0});var El=i(hn);na=s(El,"Speech2TextFeatureExtractor"),El.forEach(t),sa=s(Je,` and
`),mn=a(Je,"A",{href:!0});var ql=i(mn);ra=s(ql,"Speech2TextTokenizer"),ql.forEach(t),aa=s(Je,` into a single instance to both extract the input features and decode the
predicted token ids.`),Je.forEach(t),Zs=l(o),U=a(o,"P",{});var fe=i(U);ia=s(fe,"The feature extractor depends on "),Yn=a(fe,"CODE",{});var Fl=i(Yn);da=s(Fl,"torchaudio"),Fl.forEach(t),ca=s(fe," and the tokenizer depends on "),Xn=a(fe,"CODE",{});var zl=i(Xn);la=s(zl,"sentencepiece"),zl.forEach(t),pa=s(fe,` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),Qn=a(fe,"CODE",{});var Cl=i(Qn);ha=s(Cl,'pip install transformers"[speech, sentencepiece]"'),Cl.forEach(t),ma=s(fe," or install the packages seperately with "),Zn=a(fe,"CODE",{});var Pl=i(Zn);ua=s(Pl,"pip install torchaudio sentencepiece"),Pl.forEach(t),fa=s(fe,". Also "),es=a(fe,"CODE",{});var jl=i(es);_a=s(jl,"torchaudio"),jl.forEach(t),ga=s(fe," requires the development version of the "),Xt=a(fe,"A",{href:!0,rel:!0});var Ml=i(Xt);Ta=s(Ml,"libsndfile"),Ml.forEach(t),va=s(fe,` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),ts=a(fe,"CODE",{});var Nl=i(ts);ba=s(Nl,"apt install libsndfile1-dev"),Nl.forEach(t),fe.forEach(t),er=l(o),un=a(o,"UL",{});var Al=i(un);os=a(Al,"LI",{});var Dl=i(os);xa=s(Dl,"ASR and Speech Translation"),Dl.forEach(t),Al.forEach(t),tr=l(o),v(Qt.$$.fragment,o),or=l(o),fn=a(o,"UL",{});var Il=i(fn);Zt=a(Il,"LI",{});var wr=i(Zt);ns=a(wr,"P",{});var Ll=i(ns);ya=s(Ll,"Multilingual speech translation"),Ll.forEach(t),ka=l(wr),le=a(wr,"P",{});var Fe=i(le);wa=s(Fe,"For multilingual speech translation models, "),ss=a(Fe,"CODE",{});var Ol=i(ss);Sa=s(Ol,"eos_token_id"),Ol.forEach(t),$a=s(Fe," is used as the "),rs=a(Fe,"CODE",{});var Gl=i(rs);Ea=s(Gl,"decoder_start_token_id"),Gl.forEach(t),qa=s(Fe,` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),as=a(Fe,"CODE",{});var Ul=i(as);Fa=s(Ul,"forced_bos_token_id"),Ul.forEach(t),za=s(Fe," parameter to the "),is=a(Fe,"CODE",{});var Wl=i(is);Ca=s(Wl,"generate()"),Wl.forEach(t),Pa=s(Fe,` method. The following
example shows how to transate English speech to French text using the `),ds=a(Fe,"EM",{});var Vl=i(ds);ja=s(Vl,"facebook/s2t-medium-mustc-multilingual-st"),Vl.forEach(t),Ma=s(Fe,`
checkpoint.`),Fe.forEach(t),wr.forEach(t),Il.forEach(t),nr=l(o),v(eo.$$.fragment,o),sr=l(o),kt=a(o,"P",{});var Sr=i(kt);Na=s(Sr,"See the "),to=a(Sr,"A",{href:!0,rel:!0});var Rl=i(to);Aa=s(Rl,"model hub"),Rl.forEach(t),Da=s(Sr," to look for Speech2Text checkpoints."),Sr.forEach(t),rr=l(o),ct=a(o,"H2",{class:!0});var $r=i(ct);wt=a($r,"A",{id:!0,class:!0,href:!0});var Hl=i(wt);cs=a(Hl,"SPAN",{});var Kl=i(cs);v(oo.$$.fragment,Kl),Kl.forEach(t),Hl.forEach(t),Ia=l($r),ls=a($r,"SPAN",{});var Bl=i(ls);La=s(Bl,"Speech2TextConfig"),Bl.forEach(t),$r.forEach(t),ar=l(o),pe=a(o,"DIV",{class:!0});var Ye=i(pe);v(no.$$.fragment,Ye),Oa=l(Ye),lt=a(Ye,"P",{});var Gn=i(lt);Ga=s(Gn,"This is the configuration class to store the configuration of a "),_n=a(Gn,"A",{href:!0});var Jl=i(_n);Ua=s(Jl,"Speech2TextModel"),Jl.forEach(t),Wa=s(Gn,`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),so=a(Gn,"A",{href:!0,rel:!0});var Yl=i(so);Va=s(Yl,"facebook/s2t-small-librispeech-asr"),Yl.forEach(t),Ra=s(Gn," architecture."),Gn.forEach(t),Ha=l(Ye),pt=a(Ye,"P",{});var Un=i(pt);Ka=s(Un,"Configuration objects inherit from "),gn=a(Un,"A",{href:!0});var Xl=i(gn);Ba=s(Xl,"PretrainedConfig"),Xl.forEach(t),Ja=s(Un,` and can be used to control the model outputs. Read the
documentation from `),Tn=a(Un,"A",{href:!0});var Ql=i(Tn);Ya=s(Ql,"PretrainedConfig"),Ql.forEach(t),Xa=s(Un," for more information."),Un.forEach(t),Qa=l(Ye),ps=a(Ye,"P",{});var Zl=i(ps);Za=s(Zl,"Example:"),Zl.forEach(t),ei=l(Ye),v(ro.$$.fragment,Ye),Ye.forEach(t),ir=l(o),ht=a(o,"H2",{class:!0});var Er=i(ht);St=a(Er,"A",{id:!0,class:!0,href:!0});var ep=i(St);hs=a(ep,"SPAN",{});var tp=i(hs);v(ao.$$.fragment,tp),tp.forEach(t),ep.forEach(t),ti=l(Er),ms=a(Er,"SPAN",{});var op=i(ms);oi=s(op,"Speech2TextTokenizer"),op.forEach(t),Er.forEach(t),dr=l(o),W=a(o,"DIV",{class:!0});var ye=i(W);v(io.$$.fragment,ye),ni=l(ye),us=a(ye,"P",{});var np=i(us);si=s(np,"Construct an Speech2Text tokenizer."),np.forEach(t),ri=l(ye),co=a(ye,"P",{});var qr=i(co);ai=s(qr,"This tokenizer inherits from "),vn=a(qr,"A",{href:!0});var sp=i(vn);ii=s(sp,"PreTrainedTokenizer"),sp.forEach(t),di=s(qr,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),qr.forEach(t),ci=l(ye),$t=a(ye,"DIV",{class:!0});var Fr=i($t);v(lo.$$.fragment,Fr),li=l(Fr),fs=a(Fr,"P",{});var rp=i(fs);pi=s(rp,"Build model inputs from a sequence by appending eos_token_id."),rp.forEach(t),Fr.forEach(t),hi=l(ye),Et=a(ye,"DIV",{class:!0});var zr=i(Et);v(po.$$.fragment,zr),mi=l(zr),ho=a(zr,"P",{});var Cr=i(ho);ui=s(Cr,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_s=a(Cr,"CODE",{});var ap=i(_s);fi=s(ap,"prepare_for_model"),ap.forEach(t),_i=s(Cr," method."),Cr.forEach(t),zr.forEach(t),gi=l(ye),Re=a(ye,"DIV",{class:!0});var Wn=i(Re);v(mo.$$.fragment,Wn),Ti=l(Wn),bn=a(Wn,"P",{});var pl=i(bn);vi=s(pl,"Create the token type IDs corresponding to the sequences passed. "),xn=a(pl,"A",{href:!0});var ip=i(xn);bi=s(ip,`What are token type
IDs?`),ip.forEach(t),pl.forEach(t),xi=l(Wn),gs=a(Wn,"P",{});var dp=i(gs);yi=s(dp,"Should be overridden in a subclass if the model has a special way of building those."),dp.forEach(t),Wn.forEach(t),ki=l(ye),yn=a(ye,"DIV",{class:!0});var cp=i(yn);v(uo.$$.fragment,cp),cp.forEach(t),ye.forEach(t),cr=l(o),mt=a(o,"H2",{class:!0});var Pr=i(mt);qt=a(Pr,"A",{id:!0,class:!0,href:!0});var lp=i(qt);Ts=a(lp,"SPAN",{});var pp=i(Ts);v(fo.$$.fragment,pp),pp.forEach(t),lp.forEach(t),wi=l(Pr),vs=a(Pr,"SPAN",{});var hp=i(vs);Si=s(hp,"Speech2TextFeatureExtractor"),hp.forEach(t),Pr.forEach(t),lr=l(o),he=a(o,"DIV",{class:!0});var Xe=i(he);v(_o.$$.fragment,Xe),$i=l(Xe),bs=a(Xe,"P",{});var mp=i(bs);Ei=s(mp,"Constructs a Speech2Text feature extractor."),mp.forEach(t),qi=l(Xe),go=a(Xe,"P",{});var jr=i(go);Fi=s(jr,"This feature extractor inherits from "),kn=a(jr,"A",{href:!0});var up=i(kn);zi=s(up,"Speech2TextFeatureExtractor"),up.forEach(t),Ci=s(jr,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),jr.forEach(t),Pi=l(Xe),xs=a(Xe,"P",{});var fp=i(xs);ji=s(fp,`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),fp.forEach(t),Mi=l(Xe),Ft=a(Xe,"DIV",{class:!0});var Mr=i(Ft);v(To.$$.fragment,Mr),Ni=l(Mr),ys=a(Mr,"P",{});var _p=i(ys);Ai=s(_p,"Main method to featurize and prepare for the model one or several sequence(s). sequences."),_p.forEach(t),Mr.forEach(t),Xe.forEach(t),pr=l(o),ut=a(o,"H2",{class:!0});var Nr=i(ut);zt=a(Nr,"A",{id:!0,class:!0,href:!0});var gp=i(zt);ks=a(gp,"SPAN",{});var Tp=i(ks);v(vo.$$.fragment,Tp),Tp.forEach(t),gp.forEach(t),Di=l(Nr),ws=a(Nr,"SPAN",{});var vp=i(ws);Ii=s(vp,"Speech2TextProcessor"),vp.forEach(t),Nr.forEach(t),hr=l(o),A=a(o,"DIV",{class:!0});var R=i(A);v(bo.$$.fragment,R),Li=l(R),Ss=a(R,"P",{});var bp=i(Ss);Oi=s(bp,`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),bp.forEach(t),Gi=l(R),ge=a(R,"P",{});var Ge=i(ge);wn=a(Ge,"A",{href:!0});var xp=i(wn);Ui=s(xp,"Speech2TextProcessor"),xp.forEach(t),Wi=s(Ge," offers all the functionalities of "),Sn=a(Ge,"A",{href:!0});var yp=i(Sn);Vi=s(yp,"Speech2TextFeatureExtractor"),yp.forEach(t),Ri=s(Ge,` and
`),$n=a(Ge,"A",{href:!0});var kp=i($n);Hi=s(kp,"Speech2TextTokenizer"),kp.forEach(t),Ki=s(Ge,". See the "),xo=a(Ge,"A",{href:!0});var hl=i(xo);$s=a(hl,"STRONG",{});var wp=i($s);Bi=s(wp,"call"),wp.forEach(t),Ji=s(hl,"()"),hl.forEach(t),Yi=s(Ge," and "),En=a(Ge,"A",{href:!0});var Sp=i(En);Xi=s(Sp,"decode()"),Sp.forEach(t),Qi=s(Ge,` for more
information.`),Ge.forEach(t),Zi=l(R),Ct=a(R,"DIV",{class:!0});var Ar=i(Ct);v(yo.$$.fragment,Ar),ed=l(Ar),Oe=a(Ar,"P",{});var Kt=i(Oe);td=s(Kt,`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),ko=a(Kt,"A",{href:!0});var ml=i(ko);Es=a(ml,"STRONG",{});var $p=i(Es);od=s($p,"call"),$p.forEach(t),nd=s(ml,"()"),ml.forEach(t),sd=s(Kt,` and returns its output. If used in the context
`),qn=a(Kt,"A",{href:!0});var Ep=i(qn);rd=s(Ep,"as_target_processor()"),Ep.forEach(t),ad=s(Kt,` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),wo=a(Kt,"A",{href:!0});var ul=i(wo);qs=a(ul,"STRONG",{});var qp=i(qs);id=s(qp,"call"),qp.forEach(t),dd=s(ul,"()"),ul.forEach(t),cd=s(Kt,`. Please refer to the doctsring of the above two methods for more
information.`),Kt.forEach(t),Ar.forEach(t),ld=l(R),He=a(R,"DIV",{class:!0});var Vn=i(He);v(So.$$.fragment,Vn),pd=l(Vn),Fs=a(Vn,"P",{});var Fp=i(Fs);hd=s(Fp,"Instantiate a processor associated with a pretrained model."),Fp.forEach(t),md=l(Vn),v(Pt.$$.fragment,Vn),Vn.forEach(t),ud=l(R),Ke=a(R,"DIV",{class:!0});var Rn=i(Ke);v($o.$$.fragment,Rn),fd=l(Rn),Eo=a(Rn,"P",{});var Dr=i(Eo);_d=s(Dr,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Fn=a(Dr,"A",{href:!0});var zp=i(Fn);gd=s(zp,"from_pretrained()"),zp.forEach(t),Td=s(Dr," method."),Dr.forEach(t),vd=l(Rn),v(jt.$$.fragment,Rn),Rn.forEach(t),bd=l(R),Mt=a(R,"DIV",{class:!0});var Ir=i(Mt);v(qo.$$.fragment,Ir),xd=l(Ir),Fo=a(Ir,"P",{});var Lr=i(Fo);yd=s(Lr,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),zn=a(Lr,"A",{href:!0});var Cp=i(zn);kd=s(Cp,"batch_decode()"),Cp.forEach(t),wd=s(Lr,`. Please
refer to the docstring of this method for more information.`),Lr.forEach(t),Ir.forEach(t),Sd=l(R),Nt=a(R,"DIV",{class:!0});var Or=i(Nt);v(zo.$$.fragment,Or),$d=l(Or),Co=a(Or,"P",{});var Gr=i(Co);Ed=s(Gr,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Cn=a(Gr,"A",{href:!0});var Pp=i(Cn);qd=s(Pp,"decode()"),Pp.forEach(t),Fd=s(Gr,`. Please refer
to the docstring of this method for more information.`),Gr.forEach(t),Or.forEach(t),zd=l(R),At=a(R,"DIV",{class:!0});var Ur=i(At);v(Po.$$.fragment,Ur),Cd=l(Ur),zs=a(Ur,"P",{});var jp=i(zs);Pd=s(jp,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text.`),jp.forEach(t),Ur.forEach(t),R.forEach(t),mr=l(o),ft=a(o,"H2",{class:!0});var Wr=i(ft);Dt=a(Wr,"A",{id:!0,class:!0,href:!0});var Mp=i(Dt);Cs=a(Mp,"SPAN",{});var Np=i(Cs);v(jo.$$.fragment,Np),Np.forEach(t),Mp.forEach(t),jd=l(Wr),Ps=a(Wr,"SPAN",{});var Ap=i(Ps);Md=s(Ap,"Speech2TextModel"),Ap.forEach(t),Wr.forEach(t),ur=l(o),we=a(o,"DIV",{class:!0});var Bt=i(we);v(Mo.$$.fragment,Bt),Nd=l(Bt),No=a(Bt,"P",{});var Vr=i(No);Ad=s(Vr,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Pn=a(Vr,"A",{href:!0});var Dp=i(Pn);Dd=s(Dp,"PreTrainedModel"),Dp.forEach(t),Id=s(Vr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vr.forEach(t),Ld=l(Bt),Ao=a(Bt,"P",{});var Rr=i(Ao);Od=s(Rr,"This model is also a PyTorch "),Do=a(Rr,"A",{href:!0,rel:!0});var Ip=i(Do);Gd=s(Ip,"torch.nn.Module"),Ip.forEach(t),Ud=s(Rr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rr.forEach(t),Wd=l(Bt),Te=a(Bt,"DIV",{class:!0});var Qe=i(Te);v(Io.$$.fragment,Qe),Vd=l(Qe),_t=a(Qe,"P",{});var Hn=i(_t);Rd=s(Hn,"The "),jn=a(Hn,"A",{href:!0});var Lp=i(jn);Hd=s(Lp,"Speech2TextModel"),Lp.forEach(t),Kd=s(Hn," forward method, overrides the "),js=a(Hn,"CODE",{});var Op=i(js);Bd=s(Op,"__call__"),Op.forEach(t),Jd=s(Hn," special method."),Hn.forEach(t),Yd=l(Qe),v(It.$$.fragment,Qe),Xd=l(Qe),Ms=a(Qe,"P",{});var Gp=i(Ms);Qd=s(Gp,"Example:"),Gp.forEach(t),Zd=l(Qe),v(Lo.$$.fragment,Qe),Qe.forEach(t),Bt.forEach(t),fr=l(o),gt=a(o,"H2",{class:!0});var Hr=i(gt);Lt=a(Hr,"A",{id:!0,class:!0,href:!0});var Up=i(Lt);Ns=a(Up,"SPAN",{});var Wp=i(Ns);v(Oo.$$.fragment,Wp),Wp.forEach(t),Up.forEach(t),ec=l(Hr),As=a(Hr,"SPAN",{});var Vp=i(As);tc=s(Vp,"Speech2TextForConditionalGeneration"),Vp.forEach(t),Hr.forEach(t),_r=l(o),Se=a(o,"DIV",{class:!0});var Jt=i(Se);v(Go.$$.fragment,Jt),oc=l(Jt),Uo=a(Jt,"P",{});var Kr=i(Uo);nc=s(Kr,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Mn=a(Kr,"A",{href:!0});var Rp=i(Mn);sc=s(Rp,"PreTrainedModel"),Rp.forEach(t),rc=s(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kr.forEach(t),ac=l(Jt),Wo=a(Jt,"P",{});var Br=i(Wo);ic=s(Br,"This model is also a PyTorch "),Vo=a(Br,"A",{href:!0,rel:!0});var Hp=i(Vo);dc=s(Hp,"torch.nn.Module"),Hp.forEach(t),cc=s(Br,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Br.forEach(t),lc=l(Jt),ve=a(Jt,"DIV",{class:!0});var Ze=i(ve);v(Ro.$$.fragment,Ze),pc=l(Ze),Tt=a(Ze,"P",{});var Kn=i(Tt);hc=s(Kn,"The "),Nn=a(Kn,"A",{href:!0});var Kp=i(Nn);mc=s(Kp,"Speech2TextForConditionalGeneration"),Kp.forEach(t),uc=s(Kn," forward method, overrides the "),Ds=a(Kn,"CODE",{});var Bp=i(Ds);fc=s(Bp,"__call__"),Bp.forEach(t),_c=s(Kn," special method."),Kn.forEach(t),gc=l(Ze),v(Ot.$$.fragment,Ze),Tc=l(Ze),Is=a(Ze,"P",{});var Jp=i(Is);vc=s(Jp,"Example:"),Jp.forEach(t),bc=l(Ze),v(Ho.$$.fragment,Ze),Ze.forEach(t),Jt.forEach(t),gr=l(o),vt=a(o,"H2",{class:!0});var Jr=i(vt);Gt=a(Jr,"A",{id:!0,class:!0,href:!0});var Yp=i(Gt);Ls=a(Yp,"SPAN",{});var Xp=i(Ls);v(Ko.$$.fragment,Xp),Xp.forEach(t),Yp.forEach(t),xc=l(Jr),Os=a(Jr,"SPAN",{});var Qp=i(Os);yc=s(Qp,"TFSpeech2TextModel"),Qp.forEach(t),Jr.forEach(t),Tr=l(o),me=a(o,"DIV",{class:!0});var et=i(me);v(Bo.$$.fragment,et),kc=l(et),Jo=a(et,"P",{});var Yr=i(Jo);wc=s(Yr,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),An=a(Yr,"A",{href:!0});var Zp=i(An);Sc=s(Zp,"TFPreTrainedModel"),Zp.forEach(t),$c=s(Yr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yr.forEach(t),Ec=l(et),Yo=a(et,"P",{});var Xr=i(Yo);qc=s(Xr,"This model is also a "),Xo=a(Xr,"A",{href:!0,rel:!0});var eh=i(Xo);Fc=s(eh,"tf.keras.Model"),eh.forEach(t),zc=s(Xr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xr.forEach(t),Cc=l(et),v(Ut.$$.fragment,et),Pc=l(et),be=a(et,"DIV",{class:!0});var tt=i(be);v(Qo.$$.fragment,tt),jc=l(tt),bt=a(tt,"P",{});var Bn=i(bt);Mc=s(Bn,"The "),Dn=a(Bn,"A",{href:!0});var th=i(Dn);Nc=s(th,"TFSpeech2TextModel"),th.forEach(t),Ac=s(Bn," forward method, overrides the "),Gs=a(Bn,"CODE",{});var oh=i(Gs);Dc=s(oh,"__call__"),oh.forEach(t),Ic=s(Bn," special method."),Bn.forEach(t),Lc=l(tt),v(Wt.$$.fragment,tt),Oc=l(tt),Us=a(tt,"P",{});var nh=i(Us);Gc=s(nh,"Example:"),nh.forEach(t),Uc=l(tt),v(Zo.$$.fragment,tt),tt.forEach(t),et.forEach(t),vr=l(o),xt=a(o,"H2",{class:!0});var Qr=i(xt);Vt=a(Qr,"A",{id:!0,class:!0,href:!0});var sh=i(Vt);Ws=a(sh,"SPAN",{});var rh=i(Ws);v(en.$$.fragment,rh),rh.forEach(t),sh.forEach(t),Wc=l(Qr),Vs=a(Qr,"SPAN",{});var ah=i(Vs);Vc=s(ah,"TFSpeech2TextForConditionalGeneration"),ah.forEach(t),Qr.forEach(t),br=l(o),ue=a(o,"DIV",{class:!0});var ot=i(ue);v(tn.$$.fragment,ot),Rc=l(ot),on=a(ot,"P",{});var Zr=i(on);Hc=s(Zr,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),In=a(Zr,"A",{href:!0});var ih=i(In);Kc=s(ih,"TFPreTrainedModel"),ih.forEach(t),Bc=s(Zr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zr.forEach(t),Jc=l(ot),nn=a(ot,"P",{});var ea=i(nn);Yc=s(ea,"This model is also a "),sn=a(ea,"A",{href:!0,rel:!0});var dh=i(sn);Xc=s(dh,"tf.keras.Model"),dh.forEach(t),Qc=s(ea,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ea.forEach(t),Zc=l(ot),v(Rt.$$.fragment,ot),el=l(ot),xe=a(ot,"DIV",{class:!0});var nt=i(xe);v(rn.$$.fragment,nt),tl=l(nt),yt=a(nt,"P",{});var Jn=i(yt);ol=s(Jn,"The "),Ln=a(Jn,"A",{href:!0});var ch=i(Ln);nl=s(ch,"TFSpeech2TextForConditionalGeneration"),ch.forEach(t),sl=s(Jn," forward method, overrides the "),Rs=a(Jn,"CODE",{});var lh=i(Rs);rl=s(lh,"__call__"),lh.forEach(t),al=s(Jn," special method."),Jn.forEach(t),il=l(nt),v(Ht.$$.fragment,nt),dl=l(nt),Hs=a(nt,"P",{});var ph=i(Hs);cl=s(ph,"Example:"),ph.forEach(t),ll=l(nt),v(an.$$.fragment,nt),nt.forEach(t),ot.forEach(t),this.h()},h(){d(p,"name","hf:doc:metadata"),d(p,"content",JSON.stringify($h)),d(g,"id","speech2text"),d(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(g,"href","#speech2text"),d(f,"class","relative group"),d(I,"id","overview"),d(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(I,"href","#overview"),d(E,"class","relative group"),d(te,"href","https://arxiv.org/abs/2010.05171"),d(te,"rel","nofollow"),d(j,"href","http://www.openslr.org/12"),d(j,"rel","nofollow"),d(ne,"href","https://github.com/facebookresearch/covost"),d(ne,"rel","nofollow"),d(re,"href","https://ict.fbk.eu/must-c/"),d(re,"rel","nofollow"),d(ae,"href","https://huggingface.co/valhalla"),d(ae,"rel","nofollow"),d(de,"href","https://github.com/pytorch/fairseq/tree/master/examples/speech_to_text"),d(de,"rel","nofollow"),d(u,"id","inference"),d(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(u,"href","#inference"),d(Y,"class","relative group"),d(qe,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d(pn,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),d(hn,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d(mn,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),d(Xt,"href","http://www.mega-nerd.com/libsndfile/"),d(Xt,"rel","nofollow"),d(to,"href","https://huggingface.co/models?filter=speech_to_text"),d(to,"rel","nofollow"),d(wt,"id","transformers.Speech2TextConfig"),d(wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(wt,"href","#transformers.Speech2TextConfig"),d(ct,"class","relative group"),d(_n,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextModel"),d(so,"href","https://huggingface.co/facebook/s2t-small-librispeech-asr"),d(so,"rel","nofollow"),d(gn,"href","/docs/transformers/pr_1/en/main_classes/configuration#transformers.PretrainedConfig"),d(Tn,"href","/docs/transformers/pr_1/en/main_classes/configuration#transformers.PretrainedConfig"),d(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(St,"id","transformers.Speech2TextTokenizer"),d(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(St,"href","#transformers.Speech2TextTokenizer"),d(ht,"class","relative group"),d(vn,"href","/docs/transformers/pr_1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(xn,"href","../glossary#token-type-ids"),d(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(qt,"id","transformers.Speech2TextFeatureExtractor"),d(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qt,"href","#transformers.Speech2TextFeatureExtractor"),d(mt,"class","relative group"),d(kn,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(zt,"id","transformers.Speech2TextProcessor"),d(zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(zt,"href","#transformers.Speech2TextProcessor"),d(ut,"class","relative group"),d(wn,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),d(Sn,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d($n,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),d(xo,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.__call__"),d(En,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.decode"),d(ko,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"),d(qn,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.as_target_processor"),d(wo,"href","/docs/transformers/pr_1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"),d(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Fn,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.from_pretrained"),d(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(zn,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.batch_decode"),d(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Cn,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.decode"),d(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Dt,"id","transformers.Speech2TextModel"),d(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Dt,"href","#transformers.Speech2TextModel"),d(ft,"class","relative group"),d(Pn,"href","/docs/transformers/pr_1/en/main_classes/model#transformers.PreTrainedModel"),d(Do,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Do,"rel","nofollow"),d(jn,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextModel"),d(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Lt,"id","transformers.Speech2TextForConditionalGeneration"),d(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Lt,"href","#transformers.Speech2TextForConditionalGeneration"),d(gt,"class","relative group"),d(Mn,"href","/docs/transformers/pr_1/en/main_classes/model#transformers.PreTrainedModel"),d(Vo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Vo,"rel","nofollow"),d(Nn,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.Speech2TextForConditionalGeneration"),d(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Gt,"id","transformers.TFSpeech2TextModel"),d(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Gt,"href","#transformers.TFSpeech2TextModel"),d(vt,"class","relative group"),d(An,"href","/docs/transformers/pr_1/en/main_classes/model#transformers.TFPreTrainedModel"),d(Xo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Xo,"rel","nofollow"),d(Dn,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.TFSpeech2TextModel"),d(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Vt,"id","transformers.TFSpeech2TextForConditionalGeneration"),d(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Vt,"href","#transformers.TFSpeech2TextForConditionalGeneration"),d(xt,"class","relative group"),d(In,"href","/docs/transformers/pr_1/en/main_classes/model#transformers.TFPreTrainedModel"),d(sn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(sn,"rel","nofollow"),d(Ln,"href","/docs/transformers/pr_1/en/model_doc/speech_to_text#transformers.TFSpeech2TextForConditionalGeneration"),d(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,m){e(document.head,p),h(o,q,m),h(o,f,m),e(f,g),e(g,S),b(_,S,null),e(f,w),e(f,$),e($,N),h(o,F,m),h(o,E,m),e(E,I),e(I,H),b(ee,H,null),e(E,ze),e(E,K),e(K,Ce),h(o,$e,m),h(o,M,m),e(M,B),e(M,te),e(te,ke),e(M,P),e(M,j),e(j,Pe),e(M,oe),e(M,ne),e(ne,je),e(M,se),e(M,re),e(re,Me),e(M,O),h(o,Ee,m),h(o,L,m),e(L,Ne),e(L,ae),e(ae,ie),e(L,Ae),e(L,de),e(de,J),e(L,De),h(o,Z,m),h(o,Y,m),e(Y,u),e(u,z),b(X,z,null),e(Y,st),e(Y,Ie),e(Ie,Q),h(o,We,m),h(o,_e,m),e(_e,rt),e(_e,G),e(G,ce),e(_e,at),h(o,Ve,m),h(o,C,m),e(C,it),e(C,qe),e(qe,Le),e(C,dt),e(C,pn),e(pn,ta),e(C,oa),e(C,hn),e(hn,na),e(C,sa),e(C,mn),e(mn,ra),e(C,aa),h(o,Zs,m),h(o,U,m),e(U,ia),e(U,Yn),e(Yn,da),e(U,ca),e(U,Xn),e(Xn,la),e(U,pa),e(U,Qn),e(Qn,ha),e(U,ma),e(U,Zn),e(Zn,ua),e(U,fa),e(U,es),e(es,_a),e(U,ga),e(U,Xt),e(Xt,Ta),e(U,va),e(U,ts),e(ts,ba),h(o,er,m),h(o,un,m),e(un,os),e(os,xa),h(o,tr,m),b(Qt,o,m),h(o,or,m),h(o,fn,m),e(fn,Zt),e(Zt,ns),e(ns,ya),e(Zt,ka),e(Zt,le),e(le,wa),e(le,ss),e(ss,Sa),e(le,$a),e(le,rs),e(rs,Ea),e(le,qa),e(le,as),e(as,Fa),e(le,za),e(le,is),e(is,Ca),e(le,Pa),e(le,ds),e(ds,ja),e(le,Ma),h(o,nr,m),b(eo,o,m),h(o,sr,m),h(o,kt,m),e(kt,Na),e(kt,to),e(to,Aa),e(kt,Da),h(o,rr,m),h(o,ct,m),e(ct,wt),e(wt,cs),b(oo,cs,null),e(ct,Ia),e(ct,ls),e(ls,La),h(o,ar,m),h(o,pe,m),b(no,pe,null),e(pe,Oa),e(pe,lt),e(lt,Ga),e(lt,_n),e(_n,Ua),e(lt,Wa),e(lt,so),e(so,Va),e(lt,Ra),e(pe,Ha),e(pe,pt),e(pt,Ka),e(pt,gn),e(gn,Ba),e(pt,Ja),e(pt,Tn),e(Tn,Ya),e(pt,Xa),e(pe,Qa),e(pe,ps),e(ps,Za),e(pe,ei),b(ro,pe,null),h(o,ir,m),h(o,ht,m),e(ht,St),e(St,hs),b(ao,hs,null),e(ht,ti),e(ht,ms),e(ms,oi),h(o,dr,m),h(o,W,m),b(io,W,null),e(W,ni),e(W,us),e(us,si),e(W,ri),e(W,co),e(co,ai),e(co,vn),e(vn,ii),e(co,di),e(W,ci),e(W,$t),b(lo,$t,null),e($t,li),e($t,fs),e(fs,pi),e(W,hi),e(W,Et),b(po,Et,null),e(Et,mi),e(Et,ho),e(ho,ui),e(ho,_s),e(_s,fi),e(ho,_i),e(W,gi),e(W,Re),b(mo,Re,null),e(Re,Ti),e(Re,bn),e(bn,vi),e(bn,xn),e(xn,bi),e(Re,xi),e(Re,gs),e(gs,yi),e(W,ki),e(W,yn),b(uo,yn,null),h(o,cr,m),h(o,mt,m),e(mt,qt),e(qt,Ts),b(fo,Ts,null),e(mt,wi),e(mt,vs),e(vs,Si),h(o,lr,m),h(o,he,m),b(_o,he,null),e(he,$i),e(he,bs),e(bs,Ei),e(he,qi),e(he,go),e(go,Fi),e(go,kn),e(kn,zi),e(go,Ci),e(he,Pi),e(he,xs),e(xs,ji),e(he,Mi),e(he,Ft),b(To,Ft,null),e(Ft,Ni),e(Ft,ys),e(ys,Ai),h(o,pr,m),h(o,ut,m),e(ut,zt),e(zt,ks),b(vo,ks,null),e(ut,Di),e(ut,ws),e(ws,Ii),h(o,hr,m),h(o,A,m),b(bo,A,null),e(A,Li),e(A,Ss),e(Ss,Oi),e(A,Gi),e(A,ge),e(ge,wn),e(wn,Ui),e(ge,Wi),e(ge,Sn),e(Sn,Vi),e(ge,Ri),e(ge,$n),e($n,Hi),e(ge,Ki),e(ge,xo),e(xo,$s),e($s,Bi),e(xo,Ji),e(ge,Yi),e(ge,En),e(En,Xi),e(ge,Qi),e(A,Zi),e(A,Ct),b(yo,Ct,null),e(Ct,ed),e(Ct,Oe),e(Oe,td),e(Oe,ko),e(ko,Es),e(Es,od),e(ko,nd),e(Oe,sd),e(Oe,qn),e(qn,rd),e(Oe,ad),e(Oe,wo),e(wo,qs),e(qs,id),e(wo,dd),e(Oe,cd),e(A,ld),e(A,He),b(So,He,null),e(He,pd),e(He,Fs),e(Fs,hd),e(He,md),b(Pt,He,null),e(A,ud),e(A,Ke),b($o,Ke,null),e(Ke,fd),e(Ke,Eo),e(Eo,_d),e(Eo,Fn),e(Fn,gd),e(Eo,Td),e(Ke,vd),b(jt,Ke,null),e(A,bd),e(A,Mt),b(qo,Mt,null),e(Mt,xd),e(Mt,Fo),e(Fo,yd),e(Fo,zn),e(zn,kd),e(Fo,wd),e(A,Sd),e(A,Nt),b(zo,Nt,null),e(Nt,$d),e(Nt,Co),e(Co,Ed),e(Co,Cn),e(Cn,qd),e(Co,Fd),e(A,zd),e(A,At),b(Po,At,null),e(At,Cd),e(At,zs),e(zs,Pd),h(o,mr,m),h(o,ft,m),e(ft,Dt),e(Dt,Cs),b(jo,Cs,null),e(ft,jd),e(ft,Ps),e(Ps,Md),h(o,ur,m),h(o,we,m),b(Mo,we,null),e(we,Nd),e(we,No),e(No,Ad),e(No,Pn),e(Pn,Dd),e(No,Id),e(we,Ld),e(we,Ao),e(Ao,Od),e(Ao,Do),e(Do,Gd),e(Ao,Ud),e(we,Wd),e(we,Te),b(Io,Te,null),e(Te,Vd),e(Te,_t),e(_t,Rd),e(_t,jn),e(jn,Hd),e(_t,Kd),e(_t,js),e(js,Bd),e(_t,Jd),e(Te,Yd),b(It,Te,null),e(Te,Xd),e(Te,Ms),e(Ms,Qd),e(Te,Zd),b(Lo,Te,null),h(o,fr,m),h(o,gt,m),e(gt,Lt),e(Lt,Ns),b(Oo,Ns,null),e(gt,ec),e(gt,As),e(As,tc),h(o,_r,m),h(o,Se,m),b(Go,Se,null),e(Se,oc),e(Se,Uo),e(Uo,nc),e(Uo,Mn),e(Mn,sc),e(Uo,rc),e(Se,ac),e(Se,Wo),e(Wo,ic),e(Wo,Vo),e(Vo,dc),e(Wo,cc),e(Se,lc),e(Se,ve),b(Ro,ve,null),e(ve,pc),e(ve,Tt),e(Tt,hc),e(Tt,Nn),e(Nn,mc),e(Tt,uc),e(Tt,Ds),e(Ds,fc),e(Tt,_c),e(ve,gc),b(Ot,ve,null),e(ve,Tc),e(ve,Is),e(Is,vc),e(ve,bc),b(Ho,ve,null),h(o,gr,m),h(o,vt,m),e(vt,Gt),e(Gt,Ls),b(Ko,Ls,null),e(vt,xc),e(vt,Os),e(Os,yc),h(o,Tr,m),h(o,me,m),b(Bo,me,null),e(me,kc),e(me,Jo),e(Jo,wc),e(Jo,An),e(An,Sc),e(Jo,$c),e(me,Ec),e(me,Yo),e(Yo,qc),e(Yo,Xo),e(Xo,Fc),e(Yo,zc),e(me,Cc),b(Ut,me,null),e(me,Pc),e(me,be),b(Qo,be,null),e(be,jc),e(be,bt),e(bt,Mc),e(bt,Dn),e(Dn,Nc),e(bt,Ac),e(bt,Gs),e(Gs,Dc),e(bt,Ic),e(be,Lc),b(Wt,be,null),e(be,Oc),e(be,Us),e(Us,Gc),e(be,Uc),b(Zo,be,null),h(o,vr,m),h(o,xt,m),e(xt,Vt),e(Vt,Ws),b(en,Ws,null),e(xt,Wc),e(xt,Vs),e(Vs,Vc),h(o,br,m),h(o,ue,m),b(tn,ue,null),e(ue,Rc),e(ue,on),e(on,Hc),e(on,In),e(In,Kc),e(on,Bc),e(ue,Jc),e(ue,nn),e(nn,Yc),e(nn,sn),e(sn,Xc),e(nn,Qc),e(ue,Zc),b(Rt,ue,null),e(ue,el),e(ue,xe),b(rn,xe,null),e(xe,tl),e(xe,yt),e(yt,ol),e(yt,Ln),e(Ln,nl),e(yt,sl),e(yt,Rs),e(Rs,rl),e(yt,al),e(xe,il),b(Ht,xe,null),e(xe,dl),e(xe,Hs),e(Hs,cl),e(xe,ll),b(an,xe,null),xr=!0},p(o,[m]){const dn={};m&2&&(dn.$$scope={dirty:m,ctx:o}),Pt.$set(dn);const Ks={};m&2&&(Ks.$$scope={dirty:m,ctx:o}),jt.$set(Ks);const Bs={};m&2&&(Bs.$$scope={dirty:m,ctx:o}),It.$set(Bs);const Js={};m&2&&(Js.$$scope={dirty:m,ctx:o}),Ot.$set(Js);const cn={};m&2&&(cn.$$scope={dirty:m,ctx:o}),Ut.$set(cn);const Ys={};m&2&&(Ys.$$scope={dirty:m,ctx:o}),Wt.$set(Ys);const Xs={};m&2&&(Xs.$$scope={dirty:m,ctx:o}),Rt.$set(Xs);const Qs={};m&2&&(Qs.$$scope={dirty:m,ctx:o}),Ht.$set(Qs)},i(o){xr||(x(_.$$.fragment,o),x(ee.$$.fragment,o),x(X.$$.fragment,o),x(Qt.$$.fragment,o),x(eo.$$.fragment,o),x(oo.$$.fragment,o),x(no.$$.fragment,o),x(ro.$$.fragment,o),x(ao.$$.fragment,o),x(io.$$.fragment,o),x(lo.$$.fragment,o),x(po.$$.fragment,o),x(mo.$$.fragment,o),x(uo.$$.fragment,o),x(fo.$$.fragment,o),x(_o.$$.fragment,o),x(To.$$.fragment,o),x(vo.$$.fragment,o),x(bo.$$.fragment,o),x(yo.$$.fragment,o),x(So.$$.fragment,o),x(Pt.$$.fragment,o),x($o.$$.fragment,o),x(jt.$$.fragment,o),x(qo.$$.fragment,o),x(zo.$$.fragment,o),x(Po.$$.fragment,o),x(jo.$$.fragment,o),x(Mo.$$.fragment,o),x(Io.$$.fragment,o),x(It.$$.fragment,o),x(Lo.$$.fragment,o),x(Oo.$$.fragment,o),x(Go.$$.fragment,o),x(Ro.$$.fragment,o),x(Ot.$$.fragment,o),x(Ho.$$.fragment,o),x(Ko.$$.fragment,o),x(Bo.$$.fragment,o),x(Ut.$$.fragment,o),x(Qo.$$.fragment,o),x(Wt.$$.fragment,o),x(Zo.$$.fragment,o),x(en.$$.fragment,o),x(tn.$$.fragment,o),x(Rt.$$.fragment,o),x(rn.$$.fragment,o),x(Ht.$$.fragment,o),x(an.$$.fragment,o),xr=!0)},o(o){y(_.$$.fragment,o),y(ee.$$.fragment,o),y(X.$$.fragment,o),y(Qt.$$.fragment,o),y(eo.$$.fragment,o),y(oo.$$.fragment,o),y(no.$$.fragment,o),y(ro.$$.fragment,o),y(ao.$$.fragment,o),y(io.$$.fragment,o),y(lo.$$.fragment,o),y(po.$$.fragment,o),y(mo.$$.fragment,o),y(uo.$$.fragment,o),y(fo.$$.fragment,o),y(_o.$$.fragment,o),y(To.$$.fragment,o),y(vo.$$.fragment,o),y(bo.$$.fragment,o),y(yo.$$.fragment,o),y(So.$$.fragment,o),y(Pt.$$.fragment,o),y($o.$$.fragment,o),y(jt.$$.fragment,o),y(qo.$$.fragment,o),y(zo.$$.fragment,o),y(Po.$$.fragment,o),y(jo.$$.fragment,o),y(Mo.$$.fragment,o),y(Io.$$.fragment,o),y(It.$$.fragment,o),y(Lo.$$.fragment,o),y(Oo.$$.fragment,o),y(Go.$$.fragment,o),y(Ro.$$.fragment,o),y(Ot.$$.fragment,o),y(Ho.$$.fragment,o),y(Ko.$$.fragment,o),y(Bo.$$.fragment,o),y(Ut.$$.fragment,o),y(Qo.$$.fragment,o),y(Wt.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(tn.$$.fragment,o),y(Rt.$$.fragment,o),y(rn.$$.fragment,o),y(Ht.$$.fragment,o),y(an.$$.fragment,o),xr=!1},d(o){t(p),o&&t(q),o&&t(f),k(_),o&&t(F),o&&t(E),k(ee),o&&t($e),o&&t(M),o&&t(Ee),o&&t(L),o&&t(Z),o&&t(Y),k(X),o&&t(We),o&&t(_e),o&&t(Ve),o&&t(C),o&&t(Zs),o&&t(U),o&&t(er),o&&t(un),o&&t(tr),k(Qt,o),o&&t(or),o&&t(fn),o&&t(nr),k(eo,o),o&&t(sr),o&&t(kt),o&&t(rr),o&&t(ct),k(oo),o&&t(ar),o&&t(pe),k(no),k(ro),o&&t(ir),o&&t(ht),k(ao),o&&t(dr),o&&t(W),k(io),k(lo),k(po),k(mo),k(uo),o&&t(cr),o&&t(mt),k(fo),o&&t(lr),o&&t(he),k(_o),k(To),o&&t(pr),o&&t(ut),k(vo),o&&t(hr),o&&t(A),k(bo),k(yo),k(So),k(Pt),k($o),k(jt),k(qo),k(zo),k(Po),o&&t(mr),o&&t(ft),k(jo),o&&t(ur),o&&t(we),k(Mo),k(Io),k(It),k(Lo),o&&t(fr),o&&t(gt),k(Oo),o&&t(_r),o&&t(Se),k(Go),k(Ro),k(Ot),k(Ho),o&&t(gr),o&&t(vt),k(Ko),o&&t(Tr),o&&t(me),k(Bo),k(Ut),k(Qo),k(Wt),k(Zo),o&&t(vr),o&&t(xt),k(en),o&&t(br),o&&t(ue),k(tn),k(Rt),k(rn),k(Ht),k(an)}}}const $h={local:"speech2text",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.Speech2TextConfig",title:"Speech2TextConfig"},{local:"transformers.Speech2TextTokenizer",title:"Speech2TextTokenizer"},{local:"transformers.Speech2TextFeatureExtractor",title:"Speech2TextFeatureExtractor"},{local:"transformers.Speech2TextProcessor",title:"Speech2TextProcessor"},{local:"transformers.Speech2TextModel",title:"Speech2TextModel"},{local:"transformers.Speech2TextForConditionalGeneration",title:"Speech2TextForConditionalGeneration"},{local:"transformers.TFSpeech2TextModel",title:"TFSpeech2TextModel"},{local:"transformers.TFSpeech2TextForConditionalGeneration",title:"TFSpeech2TextForConditionalGeneration"}],title:"Speech2Text"};function Eh(V){return _h(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class jh extends hh{constructor(p){super();mh(this,p,Eh,Sh,uh,{})}}export{jh as default,$h as metadata};
