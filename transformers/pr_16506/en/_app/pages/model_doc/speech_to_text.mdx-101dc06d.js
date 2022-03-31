import{S as hh,i as fh,s as uh,e as a,k as c,w as T,t as n,M as mh,c as r,d as t,m as l,a as i,x as v,h as s,b as d,F as e,g as h,y as k,q as y,o as x,B as b,v as _h}from"../../chunks/vendor-6b77c823.js";import{T as Yt}from"../../chunks/Tip-39098574.js";import{D}from"../../chunks/Docstring-abef54e3.js";import{C as ln}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ue}from"../../chunks/IconCopyLink-7a11ce68.js";function gh(V){let p,q,m,g,S,_,w,$;return{c(){p=a("p"),q=n(`This class method is simply calling the feature extractor
`),m=a("a"),g=n("from_pretrained()"),S=n(` and the tokenizer
`),_=a("code"),w=n("from_pretrained"),$=n(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(N){p=r(N,"P",{});var z=i(p);q=s(z,`This class method is simply calling the feature extractor
`),m=r(z,"A",{href:!0});var E=i(m);g=s(E,"from_pretrained()"),E.forEach(t),S=s(z,` and the tokenizer
`),_=r(z,"CODE",{});var I=i(_);w=s(I,"from_pretrained"),I.forEach(t),$=s(z,` methods. Please refer to the docstrings of the
methods above for more information.`),z.forEach(t),this.h()},h(){d(m,"href","/docs/transformers/pr_16506/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(N,z){h(N,p,z),e(p,q),e(p,m),e(m,g),e(p,S),e(p,_),e(_,w),e(p,$)},d(N){N&&t(p)}}}function Th(V){let p,q,m,g,S,_,w,$;return{c(){p=a("p"),q=n("This class method is simply calling "),m=a("a"),g=n("save_pretrained()"),S=n(` and
`),_=a("code"),w=n("save_pretrained"),$=n(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(N){p=r(N,"P",{});var z=i(p);q=s(z,"This class method is simply calling "),m=r(z,"A",{href:!0});var E=i(m);g=s(E,"save_pretrained()"),E.forEach(t),S=s(z,` and
`),_=r(z,"CODE",{});var I=i(_);w=s(I,"save_pretrained"),I.forEach(t),$=s(z,`. Please refer to the docstrings of the methods
above for more information.`),z.forEach(t),this.h()},h(){d(m,"href","/docs/transformers/pr_16506/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(N,z){h(N,p,z),e(p,q),e(p,m),e(m,g),e(p,S),e(p,_),e(_,w),e(p,$)},d(N){N&&t(p)}}}function vh(V){let p,q,m,g,S;return{c(){p=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=r(_,"P",{});var w=i(p);q=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(_,w){h(_,p,w),e(p,q),e(p,m),e(m,g),e(p,S)},d(_){_&&t(p)}}}function kh(V){let p,q,m,g,S;return{c(){p=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=r(_,"P",{});var w=i(p);q=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(_,w){h(_,p,w),e(p,q),e(p,m),e(m,g),e(p,S)},d(_){_&&t(p)}}}function yh(V){let p,q,m,g,S,_,w,$,N,z,E,I,H,ee,Fe,B,je,$e,M,K,te,be,C,P,Ce,oe,ne,Pe,se,ae,Me,O,Ee,L,Ne,re,ie,Ae,de,J,De,Z,Y;return{c(){p=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),m=c(),g=a("ul"),S=a("li"),_=n("having all inputs as keyword arguments (like PyTorch models), or"),w=c(),$=a("li"),N=n("having all inputs as a list, tuple or dict in the first positional arguments."),z=c(),E=a("p"),I=n("This second option is useful when using "),H=a("code"),ee=n("tf.keras.Model.fit"),Fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=a("code"),je=n("model(inputs)"),$e=n("."),M=c(),K=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be=c(),C=a("ul"),P=a("li"),Ce=n("a single Tensor with "),oe=a("code"),ne=n("input_ids"),Pe=n(" only and nothing else: "),se=a("code"),ae=n("model(input_ids)"),Me=c(),O=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Ne=n("model([input_ids, attention_mask])"),re=n(" or "),ie=a("code"),Ae=n("model([input_ids, attention_mask, token_type_ids])"),de=c(),J=a("li"),De=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),Y=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){p=r(u,"P",{});var F=i(p);q=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=l(u),g=r(u,"UL",{});var X=i(g);S=r(X,"LI",{});var st=i(S);_=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(X),$=r(X,"LI",{});var Ie=i($);N=s(Ie,"having all inputs as a list, tuple or dict in the first positional arguments."),Ie.forEach(t),X.forEach(t),z=l(u),E=r(u,"P",{});var Q=i(E);I=s(Q,"This second option is useful when using "),H=r(Q,"CODE",{});var We=i(H);ee=s(We,"tf.keras.Model.fit"),We.forEach(t),Fe=s(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=r(Q,"CODE",{});var _e=i(B);je=s(_e,"model(inputs)"),_e.forEach(t),$e=s(Q,"."),Q.forEach(t),M=l(u),K=r(u,"P",{});var at=i(K);te=s(at,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),at.forEach(t),be=l(u),C=r(u,"UL",{});var G=i(C);P=r(G,"LI",{});var ce=i(P);Ce=s(ce,"a single Tensor with "),oe=r(ce,"CODE",{});var rt=i(oe);ne=s(rt,"input_ids"),rt.forEach(t),Pe=s(ce," only and nothing else: "),se=r(ce,"CODE",{});var Ve=i(se);ae=s(Ve,"model(input_ids)"),Ve.forEach(t),ce.forEach(t),Me=l(G),O=r(G,"LI",{});var j=i(O);Ee=s(j,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(j,"CODE",{});var it=i(L);Ne=s(it,"model([input_ids, attention_mask])"),it.forEach(t),re=s(j," or "),ie=r(j,"CODE",{});var qe=i(ie);Ae=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),j.forEach(t),de=l(G),J=r(G,"LI",{});var Le=i(J);De=s(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Le,"CODE",{});var dt=i(Z);Y=s(dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),dt.forEach(t),Le.forEach(t),G.forEach(t)},m(u,F){h(u,p,F),e(p,q),h(u,m,F),h(u,g,F),e(g,S),e(S,_),e(g,w),e(g,$),e($,N),h(u,z,F),h(u,E,F),e(E,I),e(E,H),e(H,ee),e(E,Fe),e(E,B),e(B,je),e(E,$e),h(u,M,F),h(u,K,F),e(K,te),h(u,be,F),h(u,C,F),e(C,P),e(P,Ce),e(P,oe),e(oe,ne),e(P,Pe),e(P,se),e(se,ae),e(C,Me),e(C,O),e(O,Ee),e(O,L),e(L,Ne),e(O,re),e(O,ie),e(ie,Ae),e(C,de),e(C,J),e(J,De),e(J,Z),e(Z,Y)},d(u){u&&t(p),u&&t(m),u&&t(g),u&&t(z),u&&t(E),u&&t(M),u&&t(K),u&&t(be),u&&t(C)}}}function xh(V){let p,q,m,g,S;return{c(){p=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=r(_,"P",{});var w=i(p);q=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(_,w){h(_,p,w),e(p,q),e(p,m),e(m,g),e(p,S)},d(_){_&&t(p)}}}function bh(V){let p,q,m,g,S,_,w,$,N,z,E,I,H,ee,Fe,B,je,$e,M,K,te,be,C,P,Ce,oe,ne,Pe,se,ae,Me,O,Ee,L,Ne,re,ie,Ae,de,J,De,Z,Y;return{c(){p=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),m=c(),g=a("ul"),S=a("li"),_=n("having all inputs as keyword arguments (like PyTorch models), or"),w=c(),$=a("li"),N=n("having all inputs as a list, tuple or dict in the first positional arguments."),z=c(),E=a("p"),I=n("This second option is useful when using "),H=a("code"),ee=n("tf.keras.Model.fit"),Fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=a("code"),je=n("model(inputs)"),$e=n("."),M=c(),K=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be=c(),C=a("ul"),P=a("li"),Ce=n("a single Tensor with "),oe=a("code"),ne=n("input_ids"),Pe=n(" only and nothing else: "),se=a("code"),ae=n("model(input_ids)"),Me=c(),O=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Ne=n("model([input_ids, attention_mask])"),re=n(" or "),ie=a("code"),Ae=n("model([input_ids, attention_mask, token_type_ids])"),de=c(),J=a("li"),De=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),Y=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){p=r(u,"P",{});var F=i(p);q=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=l(u),g=r(u,"UL",{});var X=i(g);S=r(X,"LI",{});var st=i(S);_=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(X),$=r(X,"LI",{});var Ie=i($);N=s(Ie,"having all inputs as a list, tuple or dict in the first positional arguments."),Ie.forEach(t),X.forEach(t),z=l(u),E=r(u,"P",{});var Q=i(E);I=s(Q,"This second option is useful when using "),H=r(Q,"CODE",{});var We=i(H);ee=s(We,"tf.keras.Model.fit"),We.forEach(t),Fe=s(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=r(Q,"CODE",{});var _e=i(B);je=s(_e,"model(inputs)"),_e.forEach(t),$e=s(Q,"."),Q.forEach(t),M=l(u),K=r(u,"P",{});var at=i(K);te=s(at,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),at.forEach(t),be=l(u),C=r(u,"UL",{});var G=i(C);P=r(G,"LI",{});var ce=i(P);Ce=s(ce,"a single Tensor with "),oe=r(ce,"CODE",{});var rt=i(oe);ne=s(rt,"input_ids"),rt.forEach(t),Pe=s(ce," only and nothing else: "),se=r(ce,"CODE",{});var Ve=i(se);ae=s(Ve,"model(input_ids)"),Ve.forEach(t),ce.forEach(t),Me=l(G),O=r(G,"LI",{});var j=i(O);Ee=s(j,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(j,"CODE",{});var it=i(L);Ne=s(it,"model([input_ids, attention_mask])"),it.forEach(t),re=s(j," or "),ie=r(j,"CODE",{});var qe=i(ie);Ae=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),j.forEach(t),de=l(G),J=r(G,"LI",{});var Le=i(J);De=s(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Le,"CODE",{});var dt=i(Z);Y=s(dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),dt.forEach(t),Le.forEach(t),G.forEach(t)},m(u,F){h(u,p,F),e(p,q),h(u,m,F),h(u,g,F),e(g,S),e(S,_),e(g,w),e(g,$),e($,N),h(u,z,F),h(u,E,F),e(E,I),e(E,H),e(H,ee),e(E,Fe),e(E,B),e(B,je),e(E,$e),h(u,M,F),h(u,K,F),e(K,te),h(u,be,F),h(u,C,F),e(C,P),e(P,Ce),e(P,oe),e(oe,ne),e(P,Pe),e(P,se),e(se,ae),e(C,Me),e(C,O),e(O,Ee),e(O,L),e(L,Ne),e(O,re),e(O,ie),e(ie,Ae),e(C,de),e(C,J),e(J,De),e(J,Z),e(Z,Y)},d(u){u&&t(p),u&&t(m),u&&t(g),u&&t(z),u&&t(E),u&&t(M),u&&t(K),u&&t(be),u&&t(C)}}}function wh(V){let p,q,m,g,S;return{c(){p=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=r(_,"P",{});var w=i(p);q=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(_,w){h(_,p,w),e(p,q),e(p,m),e(m,g),e(p,S)},d(_){_&&t(p)}}}function Sh(V){let p,q,m,g,S,_,w,$,N,z,E,I,H,ee,Fe,B,je,$e,M,K,te,be,C,P,Ce,oe,ne,Pe,se,ae,Me,O,Ee,L,Ne,re,ie,Ae,de,J,De,Z,Y,u,F,X,st,Ie,Q,We,_e,at,G,ce,rt,Ve,j,it,qe,Le,dt,pn,tr,or,hn,nr,sr,fn,ar,rr,Zs,U,ir,Yn,dr,cr,Xn,lr,pr,Qn,hr,fr,Zn,ur,mr,es,_r,gr,Xt,Tr,vr,ts,kr,ea,un,os,yr,ta,Qt,oa,mn,Zt,ns,xr,br,le,wr,ss,Sr,$r,as,Er,qr,rs,zr,Fr,is,jr,Cr,ds,Pr,Mr,na,eo,sa,bt,Nr,to,Ar,Dr,aa,ct,wt,cs,oo,Ir,ls,Lr,ra,pe,no,Or,lt,Gr,_n,Ur,Wr,so,Vr,Rr,Hr,pt,Br,gn,Kr,Jr,Tn,Yr,Xr,Qr,ps,Zr,ei,ao,ia,ht,St,hs,ro,ti,fs,oi,da,W,io,ni,us,si,ai,co,ri,vn,ii,di,ci,$t,lo,li,ms,pi,hi,Et,po,fi,ho,ui,_s,mi,_i,gi,Re,fo,Ti,kn,vi,yn,ki,yi,gs,xi,bi,xn,uo,ca,ft,qt,Ts,mo,wi,vs,Si,la,he,_o,$i,ks,Ei,qi,go,zi,bn,Fi,ji,Ci,ys,Pi,Mi,zt,To,Ni,xs,Ai,pa,ut,Ft,bs,vo,Di,ws,Ii,ha,A,ko,Li,Ss,Oi,Gi,ge,wn,Ui,Wi,Sn,Vi,Ri,$n,Hi,Bi,yo,$s,Ki,Ji,Yi,En,Xi,Qi,Zi,jt,xo,ed,Oe,td,bo,Es,od,nd,sd,qn,ad,rd,wo,qs,id,dd,cd,ld,He,So,pd,zs,hd,fd,Ct,ud,Be,$o,md,Eo,_d,zn,gd,Td,vd,Pt,kd,Mt,qo,yd,zo,xd,Fn,bd,wd,Sd,Nt,Fo,$d,jo,Ed,jn,qd,zd,Fd,At,Co,jd,Fs,Cd,fa,mt,Dt,js,Po,Pd,Cs,Md,ua,we,Mo,Nd,No,Ad,Cn,Dd,Id,Ld,Ao,Od,Do,Gd,Ud,Wd,Te,Io,Vd,_t,Rd,Pn,Hd,Bd,Ps,Kd,Jd,Yd,It,Xd,Ms,Qd,Zd,Lo,ma,gt,Lt,Ns,Oo,ec,As,tc,_a,Se,Go,oc,Uo,nc,Mn,sc,ac,rc,Wo,ic,Vo,dc,cc,lc,ve,Ro,pc,Tt,hc,Nn,fc,uc,Ds,mc,_c,gc,Ot,Tc,Is,vc,kc,Ho,ga,vt,Gt,Ls,Bo,yc,Os,xc,Ta,fe,Ko,bc,Jo,wc,An,Sc,$c,Ec,Yo,qc,Xo,zc,Fc,jc,Ut,Cc,ke,Qo,Pc,kt,Mc,Dn,Nc,Ac,Gs,Dc,Ic,Lc,Wt,Oc,Us,Gc,Uc,Zo,va,yt,Vt,Ws,en,Wc,Vs,Vc,ka,ue,tn,Rc,on,Hc,In,Bc,Kc,Jc,nn,Yc,sn,Xc,Qc,Zc,Rt,el,ye,an,tl,xt,ol,Ln,nl,sl,Rs,al,rl,il,Ht,dl,Hs,cl,ll,rn,ya;return _=new Ue({}),ee=new Ue({}),X=new Ue({}),Qt=new ln({props:{code:`import torch
from transformers import Speech2TextProcessor, Speech2TextForConditionalGeneration
from datasets import load_dataset
import soundfile as sf

model = Speech2TextForConditionalGeneration.from_pretrained("facebook/s2t-small-librispeech-asr")
processor = Speech2TextProcessor.from_pretrained("facebook/s2t-small-librispeech-asr")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

inputs = processor(ds["speech"][0], sampling_rate=16_000, return_tensors="pt")
generated_ids = model.generate(input_ids=inputs["input_features"], attention_mask=inputs["attention_mask"])

transcription = processor.batch_decode(generated_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextProcessor, Speech2TextForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2TextProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], sampling_rate=<span class="hljs-number">16_000</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(input_ids=inputs[<span class="hljs-string">&quot;input_features&quot;</span>], attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`}}),eo=new ln({props:{code:`import torch
from transformers import Speech2TextProcessor, Speech2TextForConditionalGeneration
from datasets import load_dataset
import soundfile as sf

model = Speech2TextForConditionalGeneration.from_pretrained("facebook/s2t-medium-mustc-multilingual-st")
processor = Speech2TextProcessor.from_pretrained("facebook/s2t-medium-mustc-multilingual-st")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

inputs = processor(ds["speech"][0], sampling_rate=16_000, return_tensors="pt")
generated_ids = model.generate(
    input_ids=inputs["input_features"],
    attention_mask=inputs["attention_mask"],
    forced_bos_token_id=processor.tokenizer.lang_code_to_id["fr"],
)

translation = processor.batch_decode(generated_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextProcessor, Speech2TextForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-medium-mustc-multilingual-st&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2TextProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-medium-mustc-multilingual-st&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], sampling_rate=<span class="hljs-number">16_000</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(
<span class="hljs-meta">... </span>    input_ids=inputs[<span class="hljs-string">&quot;input_features&quot;</span>],
<span class="hljs-meta">... </span>    attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    forced_bos_token_id=processor.tokenizer.lang_code_to_id[<span class="hljs-string">&quot;fr&quot;</span>],
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>translation = processor.batch_decode(generated_ids)`}}),oo=new Ue({}),no=new D({props:{name:"class transformers.Speech2TextConfig",anchor:"transformers.Speech2TextConfig",parameters:[{name:"vocab_size",val:" = 10000"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 4"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 4"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_source_positions",val:" = 6000"},{name:"max_target_positions",val:" = 1024"},{name:"num_conv_layers",val:" = 2"},{name:"conv_kernel_sizes",val:" = (5, 5)"},{name:"conv_channels",val:" = 1024"},{name:"input_feat_per_channel",val:" = 80"},{name:"input_channels",val:" = 1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/configuration_speech_to_text.py#L29",parametersDescription:[{anchor:"transformers.Speech2TextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Speech2Text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextModel">Speech2TextModel</a>`,name:"vocab_size"},{anchor:"transformers.Speech2TextConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
An integer specifying number of input channels of the input feature vector.`,name:"input_channels"}]}}),ao=new ln({props:{code:`from transformers import Speech2TextModel, Speech2TextConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ro=new Ue({}),io=new D({props:{name:"class transformers.Speech2TextTokenizer",anchor:"transformers.Speech2TextTokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_upper_case",val:" = False"},{name:"do_lower_case",val:" = False"},{name:"tgt_lang",val:" = None"},{name:"lang_codes",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L55",parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional keyword arguments passed along to <a href="/docs/transformers/pr_16506/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"sp_model_kwargs"}]}}),lo=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.Speech2TextTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L195"}}),po=new D({props:{name:"get_special_tokens_mask",anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L202",parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fo=new D({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/tokenization_utils_base.py#L2856",parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),uo=new D({props:{name:"save_vocabulary",anchor:"transformers.Speech2TextTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L251"}}),mo=new Ue({}),_o=new D({props:{name:"class transformers.Speech2TextFeatureExtractor",anchor:"transformers.Speech2TextFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"num_mel_bins",val:" = 80"},{name:"padding_value",val:" = 0.0"},{name:"do_ceptral_normalize",val:" = True"},{name:"normalize_means",val:" = True"},{name:"normalize_vars",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L33",parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.Speech2TextFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.num_mel_bins",description:`<strong>num_mel_bins</strong> (<code>int</code>, defaults to 80) &#x2014;
Number of Mel-frequency bins.`,name:"num_mel_bins"},{anchor:"transformers.Speech2TextFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding vectors.`,name:"padding_value"},{anchor:"transformers.Speech2TextFeatureExtractor.do_ceptral_normalize",description:`<strong>do_ceptral_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to apply utterance-level cepstral mean and variance normalization to extracted features.`,name:"do_ceptral_normalize"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_means",description:`<strong>normalize_means</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to zero-mean normalize the extracted features.`,name:"normalize_means"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_vars",description:`<strong>normalize_vars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to unit-variance normalize the extracted features.`,name:"normalize_vars"}]}}),To=new D({props:{name:"__call__",anchor:"transformers.Speech2TextFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L126",parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
The sequence or batch of sequences to be padded. Each sequence can be a numpy array, a list of float
values, a list of numpy arrays or a list of list of float values.`,name:"raw_speech"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_16506/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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

					</div>`,name:"return_attention_mask"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_16506/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors.`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values / vectors.`,name:"padding_value"}]}}),vo=new Ue({}),ko=new D({props:{name:"class transformers.Speech2TextProcessor",anchor:"transformers.Speech2TextProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/processing_speech_to_text.py#L23",parametersDescription:[{anchor:"transformers.Speech2TextProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>Speech2TextFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2TextProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2TextTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}]}}),xo=new D({props:{name:"__call__",anchor:"transformers.Speech2TextProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/processing_speech_to_text.py#L45"}}),So=new D({props:{name:"from_pretrained",anchor:"transformers.Speech2TextProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/processing_utils.py#L156",parametersDescription:[{anchor:"transformers.Speech2TextProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/pr_16506/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/pr_16506/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}]}}),Ct=new Yt({props:{$$slots:{default:[gh]},$$scope:{ctx:V}}}),$o=new D({props:{name:"save_pretrained",anchor:"transformers.Speech2TextProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/processing_utils.py#L94",parametersDescription:[{anchor:"transformers.Speech2TextProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Speech2TextProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/pr_16506/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}]}}),Pt=new Yt({props:{$$slots:{default:[Th]},$$scope:{ctx:V}}}),qo=new D({props:{name:"batch_decode",anchor:"transformers.Speech2TextProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/processing_speech_to_text.py#L55"}}),Fo=new D({props:{name:"decode",anchor:"transformers.Speech2TextProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/processing_speech_to_text.py#L62"}}),Co=new D({props:{name:"as_target_processor",anchor:"transformers.Speech2TextProcessor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/processing_speech_to_text.py#L69"}}),Po=new Ue({}),Mo=new D({props:{name:"class transformers.Speech2TextModel",anchor:"transformers.Speech2TextModel",parameters:[{name:"config",val:": Speech2TextConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1116",parametersDescription:[{anchor:"transformers.Speech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16506/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Io=new D({props:{name:"forward",anchor:"transformers.Speech2TextModel.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1138",parametersDescription:[{anchor:"transformers.Speech2TextModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/pr_16506/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/pr_16506/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16506/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16506/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16506/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/pr_16506/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
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
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">256</span>]`}}),Oo=new Ue({}),Go=new D({props:{name:"class transformers.Speech2TextForConditionalGeneration",anchor:"transformers.Speech2TextForConditionalGeneration",parameters:[{name:"config",val:": Speech2TextConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1247",parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16506/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ro=new D({props:{name:"forward",anchor:"transformers.Speech2TextForConditionalGeneration.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1284",parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/pr_16506/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/pr_16506/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16506/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16506/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16506/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/pr_16506/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ot=new Yt({props:{$$slots:{default:[kh]},$$scope:{ctx:V}}}),Ho=new ln({props:{code:`import torch
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
<span class="hljs-string">&#x27;mister quilter is the apostle of the middle classes and we are glad to welcome his gospel&#x27;</span>`}}),Bo=new Ue({}),Ko=new D({props:{name:"class transformers.TFSpeech2TextModel",anchor:"transformers.TFSpeech2TextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1230",parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16506/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ut=new Yt({props:{$$slots:{default:[yh]},$$scope:{ctx:V}}}),Qo=new D({props:{name:"call",anchor:"transformers.TFSpeech2TextModel.call",parameters:[{name:"input_features",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_dict",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1242",parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of floats. See <a href="/docs/transformers/pr_16506/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/pr_16506/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16506/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16506/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16506/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
  href="/docs/transformers/pr_16506/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Wt=new Yt({props:{$$slots:{default:[xh]},$$scope:{ctx:V}}}),Zo=new ln({props:{code:`from transformers import Speech2TextTokenizer, TFSpeech2TextModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),en=new Ue({}),tn=new D({props:{name:"class transformers.TFSpeech2TextForConditionalGeneration",anchor:"transformers.TFSpeech2TextForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1313",parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16506/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Rt=new Yt({props:{$$slots:{default:[bh]},$$scope:{ctx:V}}}),an=new D({props:{name:"call",anchor:"transformers.TFSpeech2TextForConditionalGeneration.call",parameters:[{name:"input_features",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16506/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1335",parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of floats. See <a href="/docs/transformers/pr_16506/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/pr_16506/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16506/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16506/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16506/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
  href="/docs/transformers/pr_16506/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ht=new Yt({props:{$$slots:{default:[wh]},$$scope:{ctx:V}}}),rn=new ln({props:{code:`import tensorflow as tf
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

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`}}),{c(){p=a("meta"),q=c(),m=a("h1"),g=a("a"),S=a("span"),T(_.$$.fragment),w=c(),$=a("span"),N=n("Speech2Text"),z=c(),E=a("h2"),I=a("a"),H=a("span"),T(ee.$$.fragment),Fe=c(),B=a("span"),je=n("Overview"),$e=c(),M=a("p"),K=n("The Speech2Text model was proposed in "),te=a("a"),be=n("fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),C=n(` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),P=a("a"),Ce=n("LibriSpeech"),oe=n(", "),ne=a("a"),Pe=n("CoVoST 2"),se=n(", "),ae=a("a"),Me=n("MuST-C"),O=n("."),Ee=c(),L=a("p"),Ne=n("This model was contributed by "),re=a("a"),ie=n("valhalla"),Ae=n(". The original code can be found "),de=a("a"),J=n("here"),De=n("."),Z=c(),Y=a("h2"),u=a("a"),F=a("span"),T(X.$$.fragment),st=c(),Ie=a("span"),Q=n("Inference"),We=c(),_e=a("p"),at=n(`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),G=a("code"),ce=n("generate()"),rt=n(" method can be used for inference."),Ve=c(),j=a("p"),it=n("The "),qe=a("a"),Le=n("Speech2TextFeatureExtractor"),dt=n(` class is responsible for extracting the log-mel filter-bank
features. The `),pn=a("a"),tr=n("Speech2TextProcessor"),or=n(" wraps "),hn=a("a"),nr=n("Speech2TextFeatureExtractor"),sr=n(` and
`),fn=a("a"),ar=n("Speech2TextTokenizer"),rr=n(` into a single instance to both extract the input features and decode the
predicted token ids.`),Zs=c(),U=a("p"),ir=n("The feature extractor depends on "),Yn=a("code"),dr=n("torchaudio"),cr=n(" and the tokenizer depends on "),Xn=a("code"),lr=n("sentencepiece"),pr=n(` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),Qn=a("code"),hr=n('pip install transformers"[speech, sentencepiece]"'),fr=n(" or install the packages seperately with "),Zn=a("code"),ur=n("pip install torchaudio sentencepiece"),mr=n(". Also "),es=a("code"),_r=n("torchaudio"),gr=n(" requires the development version of the "),Xt=a("a"),Tr=n("libsndfile"),vr=n(` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),ts=a("code"),kr=n("apt install libsndfile1-dev"),ea=c(),un=a("ul"),os=a("li"),yr=n("ASR and Speech Translation"),ta=c(),T(Qt.$$.fragment),oa=c(),mn=a("ul"),Zt=a("li"),ns=a("p"),xr=n("Multilingual speech translation"),br=c(),le=a("p"),wr=n("For multilingual speech translation models, "),ss=a("code"),Sr=n("eos_token_id"),$r=n(" is used as the "),as=a("code"),Er=n("decoder_start_token_id"),qr=n(` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),rs=a("code"),zr=n("forced_bos_token_id"),Fr=n(" parameter to the "),is=a("code"),jr=n("generate()"),Cr=n(` method. The following
example shows how to transate English speech to French text using the `),ds=a("em"),Pr=n("facebook/s2t-medium-mustc-multilingual-st"),Mr=n(`
checkpoint.`),na=c(),T(eo.$$.fragment),sa=c(),bt=a("p"),Nr=n("See the "),to=a("a"),Ar=n("model hub"),Dr=n(" to look for Speech2Text checkpoints."),aa=c(),ct=a("h2"),wt=a("a"),cs=a("span"),T(oo.$$.fragment),Ir=c(),ls=a("span"),Lr=n("Speech2TextConfig"),ra=c(),pe=a("div"),T(no.$$.fragment),Or=c(),lt=a("p"),Gr=n("This is the configuration class to store the configuration of a "),_n=a("a"),Ur=n("Speech2TextModel"),Wr=n(`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),so=a("a"),Vr=n("facebook/s2t-small-librispeech-asr"),Rr=n(" architecture."),Hr=c(),pt=a("p"),Br=n("Configuration objects inherit from "),gn=a("a"),Kr=n("PretrainedConfig"),Jr=n(` and can be used to control the model outputs. Read the
documentation from `),Tn=a("a"),Yr=n("PretrainedConfig"),Xr=n(" for more information."),Qr=c(),ps=a("p"),Zr=n("Example:"),ei=c(),T(ao.$$.fragment),ia=c(),ht=a("h2"),St=a("a"),hs=a("span"),T(ro.$$.fragment),ti=c(),fs=a("span"),oi=n("Speech2TextTokenizer"),da=c(),W=a("div"),T(io.$$.fragment),ni=c(),us=a("p"),si=n("Construct an Speech2Text tokenizer."),ai=c(),co=a("p"),ri=n("This tokenizer inherits from "),vn=a("a"),ii=n("PreTrainedTokenizer"),di=n(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),ci=c(),$t=a("div"),T(lo.$$.fragment),li=c(),ms=a("p"),pi=n("Build model inputs from a sequence by appending eos_token_id."),hi=c(),Et=a("div"),T(po.$$.fragment),fi=c(),ho=a("p"),ui=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_s=a("code"),mi=n("prepare_for_model"),_i=n(" method."),gi=c(),Re=a("div"),T(fo.$$.fragment),Ti=c(),kn=a("p"),vi=n("Create the token type IDs corresponding to the sequences passed. "),yn=a("a"),ki=n(`What are token type
IDs?`),yi=c(),gs=a("p"),xi=n("Should be overridden in a subclass if the model has a special way of building those."),bi=c(),xn=a("div"),T(uo.$$.fragment),ca=c(),ft=a("h2"),qt=a("a"),Ts=a("span"),T(mo.$$.fragment),wi=c(),vs=a("span"),Si=n("Speech2TextFeatureExtractor"),la=c(),he=a("div"),T(_o.$$.fragment),$i=c(),ks=a("p"),Ei=n("Constructs a Speech2Text feature extractor."),qi=c(),go=a("p"),zi=n("This feature extractor inherits from "),bn=a("a"),Fi=n("Speech2TextFeatureExtractor"),ji=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ci=c(),ys=a("p"),Pi=n(`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),Mi=c(),zt=a("div"),T(To.$$.fragment),Ni=c(),xs=a("p"),Ai=n("Main method to featurize and prepare for the model one or several sequence(s). sequences."),pa=c(),ut=a("h2"),Ft=a("a"),bs=a("span"),T(vo.$$.fragment),Di=c(),ws=a("span"),Ii=n("Speech2TextProcessor"),ha=c(),A=a("div"),T(ko.$$.fragment),Li=c(),Ss=a("p"),Oi=n(`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),Gi=c(),ge=a("p"),wn=a("a"),Ui=n("Speech2TextProcessor"),Wi=n(" offers all the functionalities of "),Sn=a("a"),Vi=n("Speech2TextFeatureExtractor"),Ri=n(` and
`),$n=a("a"),Hi=n("Speech2TextTokenizer"),Bi=n(". See the "),yo=a("a"),$s=a("strong"),Ki=n("call"),Ji=n("()"),Yi=n(" and "),En=a("a"),Xi=n("decode()"),Qi=n(` for more
information.`),Zi=c(),jt=a("div"),T(xo.$$.fragment),ed=c(),Oe=a("p"),td=n(`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),bo=a("a"),Es=a("strong"),od=n("call"),nd=n("()"),sd=n(` and returns its output. If used in the context
`),qn=a("a"),ad=n("as_target_processor()"),rd=n(` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),wo=a("a"),qs=a("strong"),id=n("call"),dd=n("()"),cd=n(`. Please refer to the doctsring of the above two methods for more
information.`),ld=c(),He=a("div"),T(So.$$.fragment),pd=c(),zs=a("p"),hd=n("Instantiate a processor associated with a pretrained model."),fd=c(),T(Ct.$$.fragment),ud=c(),Be=a("div"),T($o.$$.fragment),md=c(),Eo=a("p"),_d=n(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),zn=a("a"),gd=n("from_pretrained()"),Td=n(" method."),vd=c(),T(Pt.$$.fragment),kd=c(),Mt=a("div"),T(qo.$$.fragment),yd=c(),zo=a("p"),xd=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Fn=a("a"),bd=n("batch_decode()"),wd=n(`. Please
refer to the docstring of this method for more information.`),Sd=c(),Nt=a("div"),T(Fo.$$.fragment),$d=c(),jo=a("p"),Ed=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),jn=a("a"),qd=n("decode()"),zd=n(`. Please refer
to the docstring of this method for more information.`),Fd=c(),At=a("div"),T(Co.$$.fragment),jd=c(),Fs=a("p"),Cd=n(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text.`),fa=c(),mt=a("h2"),Dt=a("a"),js=a("span"),T(Po.$$.fragment),Pd=c(),Cs=a("span"),Md=n("Speech2TextModel"),ua=c(),we=a("div"),T(Mo.$$.fragment),Nd=c(),No=a("p"),Ad=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Cn=a("a"),Dd=n("PreTrainedModel"),Id=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ld=c(),Ao=a("p"),Od=n("This model is also a PyTorch "),Do=a("a"),Gd=n("torch.nn.Module"),Ud=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wd=c(),Te=a("div"),T(Io.$$.fragment),Vd=c(),_t=a("p"),Rd=n("The "),Pn=a("a"),Hd=n("Speech2TextModel"),Bd=n(" forward method, overrides the "),Ps=a("code"),Kd=n("__call__"),Jd=n(" special method."),Yd=c(),T(It.$$.fragment),Xd=c(),Ms=a("p"),Qd=n("Example:"),Zd=c(),T(Lo.$$.fragment),ma=c(),gt=a("h2"),Lt=a("a"),Ns=a("span"),T(Oo.$$.fragment),ec=c(),As=a("span"),tc=n("Speech2TextForConditionalGeneration"),_a=c(),Se=a("div"),T(Go.$$.fragment),oc=c(),Uo=a("p"),nc=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Mn=a("a"),sc=n("PreTrainedModel"),ac=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rc=c(),Wo=a("p"),ic=n("This model is also a PyTorch "),Vo=a("a"),dc=n("torch.nn.Module"),cc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lc=c(),ve=a("div"),T(Ro.$$.fragment),pc=c(),Tt=a("p"),hc=n("The "),Nn=a("a"),fc=n("Speech2TextForConditionalGeneration"),uc=n(" forward method, overrides the "),Ds=a("code"),mc=n("__call__"),_c=n(" special method."),gc=c(),T(Ot.$$.fragment),Tc=c(),Is=a("p"),vc=n("Example:"),kc=c(),T(Ho.$$.fragment),ga=c(),vt=a("h2"),Gt=a("a"),Ls=a("span"),T(Bo.$$.fragment),yc=c(),Os=a("span"),xc=n("TFSpeech2TextModel"),Ta=c(),fe=a("div"),T(Ko.$$.fragment),bc=c(),Jo=a("p"),wc=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),An=a("a"),Sc=n("TFPreTrainedModel"),$c=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ec=c(),Yo=a("p"),qc=n("This model is also a "),Xo=a("a"),zc=n("tf.keras.Model"),Fc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jc=c(),T(Ut.$$.fragment),Cc=c(),ke=a("div"),T(Qo.$$.fragment),Pc=c(),kt=a("p"),Mc=n("The "),Dn=a("a"),Nc=n("TFSpeech2TextModel"),Ac=n(" forward method, overrides the "),Gs=a("code"),Dc=n("__call__"),Ic=n(" special method."),Lc=c(),T(Wt.$$.fragment),Oc=c(),Us=a("p"),Gc=n("Example:"),Uc=c(),T(Zo.$$.fragment),va=c(),yt=a("h2"),Vt=a("a"),Ws=a("span"),T(en.$$.fragment),Wc=c(),Vs=a("span"),Vc=n("TFSpeech2TextForConditionalGeneration"),ka=c(),ue=a("div"),T(tn.$$.fragment),Rc=c(),on=a("p"),Hc=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),In=a("a"),Bc=n("TFPreTrainedModel"),Kc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jc=c(),nn=a("p"),Yc=n("This model is also a "),sn=a("a"),Xc=n("tf.keras.Model"),Qc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zc=c(),T(Rt.$$.fragment),el=c(),ye=a("div"),T(an.$$.fragment),tl=c(),xt=a("p"),ol=n("The "),Ln=a("a"),nl=n("TFSpeech2TextForConditionalGeneration"),sl=n(" forward method, overrides the "),Rs=a("code"),al=n("__call__"),rl=n(" special method."),il=c(),T(Ht.$$.fragment),dl=c(),Hs=a("p"),cl=n("Example:"),ll=c(),T(rn.$$.fragment),this.h()},l(o){const f=mh('[data-svelte="svelte-1phssyn"]',document.head);p=r(f,"META",{name:!0,content:!0}),f.forEach(t),q=l(o),m=r(o,"H1",{class:!0});var dn=i(m);g=r(dn,"A",{id:!0,class:!0,href:!0});var Bs=i(g);S=r(Bs,"SPAN",{});var Ks=i(S);v(_.$$.fragment,Ks),Ks.forEach(t),Bs.forEach(t),w=l(dn),$=r(dn,"SPAN",{});var Js=i($);N=s(Js,"Speech2Text"),Js.forEach(t),dn.forEach(t),z=l(o),E=r(o,"H2",{class:!0});var cn=i(E);I=r(cn,"A",{id:!0,class:!0,href:!0});var Ys=i(I);H=r(Ys,"SPAN",{});var Xs=i(H);v(ee.$$.fragment,Xs),Xs.forEach(t),Ys.forEach(t),Fe=l(cn),B=r(cn,"SPAN",{});var Qs=i(B);je=s(Qs,"Overview"),Qs.forEach(t),cn.forEach(t),$e=l(o),M=r(o,"P",{});var Ke=i(M);K=s(Ke,"The Speech2Text model was proposed in "),te=r(Ke,"A",{href:!0,rel:!0});var ml=i(te);be=s(ml,"fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),ml.forEach(t),C=s(Ke,` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),P=r(Ke,"A",{href:!0,rel:!0});var _l=i(P);Ce=s(_l,"LibriSpeech"),_l.forEach(t),oe=s(Ke,", "),ne=r(Ke,"A",{href:!0,rel:!0});var gl=i(ne);Pe=s(gl,"CoVoST 2"),gl.forEach(t),se=s(Ke,", "),ae=r(Ke,"A",{href:!0,rel:!0});var Tl=i(ae);Me=s(Tl,"MuST-C"),Tl.forEach(t),O=s(Ke,"."),Ke.forEach(t),Ee=l(o),L=r(o,"P",{});var On=i(L);Ne=s(On,"This model was contributed by "),re=r(On,"A",{href:!0,rel:!0});var vl=i(re);ie=s(vl,"valhalla"),vl.forEach(t),Ae=s(On,". The original code can be found "),de=r(On,"A",{href:!0,rel:!0});var kl=i(de);J=s(kl,"here"),kl.forEach(t),De=s(On,"."),On.forEach(t),Z=l(o),Y=r(o,"H2",{class:!0});var xa=i(Y);u=r(xa,"A",{id:!0,class:!0,href:!0});var yl=i(u);F=r(yl,"SPAN",{});var xl=i(F);v(X.$$.fragment,xl),xl.forEach(t),yl.forEach(t),st=l(xa),Ie=r(xa,"SPAN",{});var bl=i(Ie);Q=s(bl,"Inference"),bl.forEach(t),xa.forEach(t),We=l(o),_e=r(o,"P",{});var ba=i(_e);at=s(ba,`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),G=r(ba,"CODE",{});var wl=i(G);ce=s(wl,"generate()"),wl.forEach(t),rt=s(ba," method can be used for inference."),ba.forEach(t),Ve=l(o),j=r(o,"P",{});var Je=i(j);it=s(Je,"The "),qe=r(Je,"A",{href:!0});var Sl=i(qe);Le=s(Sl,"Speech2TextFeatureExtractor"),Sl.forEach(t),dt=s(Je,` class is responsible for extracting the log-mel filter-bank
features. The `),pn=r(Je,"A",{href:!0});var $l=i(pn);tr=s($l,"Speech2TextProcessor"),$l.forEach(t),or=s(Je," wraps "),hn=r(Je,"A",{href:!0});var El=i(hn);nr=s(El,"Speech2TextFeatureExtractor"),El.forEach(t),sr=s(Je,` and
`),fn=r(Je,"A",{href:!0});var ql=i(fn);ar=s(ql,"Speech2TextTokenizer"),ql.forEach(t),rr=s(Je,` into a single instance to both extract the input features and decode the
predicted token ids.`),Je.forEach(t),Zs=l(o),U=r(o,"P",{});var me=i(U);ir=s(me,"The feature extractor depends on "),Yn=r(me,"CODE",{});var zl=i(Yn);dr=s(zl,"torchaudio"),zl.forEach(t),cr=s(me," and the tokenizer depends on "),Xn=r(me,"CODE",{});var Fl=i(Xn);lr=s(Fl,"sentencepiece"),Fl.forEach(t),pr=s(me,` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),Qn=r(me,"CODE",{});var jl=i(Qn);hr=s(jl,'pip install transformers"[speech, sentencepiece]"'),jl.forEach(t),fr=s(me," or install the packages seperately with "),Zn=r(me,"CODE",{});var Cl=i(Zn);ur=s(Cl,"pip install torchaudio sentencepiece"),Cl.forEach(t),mr=s(me,". Also "),es=r(me,"CODE",{});var Pl=i(es);_r=s(Pl,"torchaudio"),Pl.forEach(t),gr=s(me," requires the development version of the "),Xt=r(me,"A",{href:!0,rel:!0});var Ml=i(Xt);Tr=s(Ml,"libsndfile"),Ml.forEach(t),vr=s(me,` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),ts=r(me,"CODE",{});var Nl=i(ts);kr=s(Nl,"apt install libsndfile1-dev"),Nl.forEach(t),me.forEach(t),ea=l(o),un=r(o,"UL",{});var Al=i(un);os=r(Al,"LI",{});var Dl=i(os);yr=s(Dl,"ASR and Speech Translation"),Dl.forEach(t),Al.forEach(t),ta=l(o),v(Qt.$$.fragment,o),oa=l(o),mn=r(o,"UL",{});var Il=i(mn);Zt=r(Il,"LI",{});var wa=i(Zt);ns=r(wa,"P",{});var Ll=i(ns);xr=s(Ll,"Multilingual speech translation"),Ll.forEach(t),br=l(wa),le=r(wa,"P",{});var ze=i(le);wr=s(ze,"For multilingual speech translation models, "),ss=r(ze,"CODE",{});var Ol=i(ss);Sr=s(Ol,"eos_token_id"),Ol.forEach(t),$r=s(ze," is used as the "),as=r(ze,"CODE",{});var Gl=i(as);Er=s(Gl,"decoder_start_token_id"),Gl.forEach(t),qr=s(ze,` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),rs=r(ze,"CODE",{});var Ul=i(rs);zr=s(Ul,"forced_bos_token_id"),Ul.forEach(t),Fr=s(ze," parameter to the "),is=r(ze,"CODE",{});var Wl=i(is);jr=s(Wl,"generate()"),Wl.forEach(t),Cr=s(ze,` method. The following
example shows how to transate English speech to French text using the `),ds=r(ze,"EM",{});var Vl=i(ds);Pr=s(Vl,"facebook/s2t-medium-mustc-multilingual-st"),Vl.forEach(t),Mr=s(ze,`
checkpoint.`),ze.forEach(t),wa.forEach(t),Il.forEach(t),na=l(o),v(eo.$$.fragment,o),sa=l(o),bt=r(o,"P",{});var Sa=i(bt);Nr=s(Sa,"See the "),to=r(Sa,"A",{href:!0,rel:!0});var Rl=i(to);Ar=s(Rl,"model hub"),Rl.forEach(t),Dr=s(Sa," to look for Speech2Text checkpoints."),Sa.forEach(t),aa=l(o),ct=r(o,"H2",{class:!0});var $a=i(ct);wt=r($a,"A",{id:!0,class:!0,href:!0});var Hl=i(wt);cs=r(Hl,"SPAN",{});var Bl=i(cs);v(oo.$$.fragment,Bl),Bl.forEach(t),Hl.forEach(t),Ir=l($a),ls=r($a,"SPAN",{});var Kl=i(ls);Lr=s(Kl,"Speech2TextConfig"),Kl.forEach(t),$a.forEach(t),ra=l(o),pe=r(o,"DIV",{class:!0});var Ye=i(pe);v(no.$$.fragment,Ye),Or=l(Ye),lt=r(Ye,"P",{});var Gn=i(lt);Gr=s(Gn,"This is the configuration class to store the configuration of a "),_n=r(Gn,"A",{href:!0});var Jl=i(_n);Ur=s(Jl,"Speech2TextModel"),Jl.forEach(t),Wr=s(Gn,`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),so=r(Gn,"A",{href:!0,rel:!0});var Yl=i(so);Vr=s(Yl,"facebook/s2t-small-librispeech-asr"),Yl.forEach(t),Rr=s(Gn," architecture."),Gn.forEach(t),Hr=l(Ye),pt=r(Ye,"P",{});var Un=i(pt);Br=s(Un,"Configuration objects inherit from "),gn=r(Un,"A",{href:!0});var Xl=i(gn);Kr=s(Xl,"PretrainedConfig"),Xl.forEach(t),Jr=s(Un,` and can be used to control the model outputs. Read the
documentation from `),Tn=r(Un,"A",{href:!0});var Ql=i(Tn);Yr=s(Ql,"PretrainedConfig"),Ql.forEach(t),Xr=s(Un," for more information."),Un.forEach(t),Qr=l(Ye),ps=r(Ye,"P",{});var Zl=i(ps);Zr=s(Zl,"Example:"),Zl.forEach(t),ei=l(Ye),v(ao.$$.fragment,Ye),Ye.forEach(t),ia=l(o),ht=r(o,"H2",{class:!0});var Ea=i(ht);St=r(Ea,"A",{id:!0,class:!0,href:!0});var ep=i(St);hs=r(ep,"SPAN",{});var tp=i(hs);v(ro.$$.fragment,tp),tp.forEach(t),ep.forEach(t),ti=l(Ea),fs=r(Ea,"SPAN",{});var op=i(fs);oi=s(op,"Speech2TextTokenizer"),op.forEach(t),Ea.forEach(t),da=l(o),W=r(o,"DIV",{class:!0});var xe=i(W);v(io.$$.fragment,xe),ni=l(xe),us=r(xe,"P",{});var np=i(us);si=s(np,"Construct an Speech2Text tokenizer."),np.forEach(t),ai=l(xe),co=r(xe,"P",{});var qa=i(co);ri=s(qa,"This tokenizer inherits from "),vn=r(qa,"A",{href:!0});var sp=i(vn);ii=s(sp,"PreTrainedTokenizer"),sp.forEach(t),di=s(qa,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),qa.forEach(t),ci=l(xe),$t=r(xe,"DIV",{class:!0});var za=i($t);v(lo.$$.fragment,za),li=l(za),ms=r(za,"P",{});var ap=i(ms);pi=s(ap,"Build model inputs from a sequence by appending eos_token_id."),ap.forEach(t),za.forEach(t),hi=l(xe),Et=r(xe,"DIV",{class:!0});var Fa=i(Et);v(po.$$.fragment,Fa),fi=l(Fa),ho=r(Fa,"P",{});var ja=i(ho);ui=s(ja,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_s=r(ja,"CODE",{});var rp=i(_s);mi=s(rp,"prepare_for_model"),rp.forEach(t),_i=s(ja," method."),ja.forEach(t),Fa.forEach(t),gi=l(xe),Re=r(xe,"DIV",{class:!0});var Wn=i(Re);v(fo.$$.fragment,Wn),Ti=l(Wn),kn=r(Wn,"P",{});var pl=i(kn);vi=s(pl,"Create the token type IDs corresponding to the sequences passed. "),yn=r(pl,"A",{href:!0});var ip=i(yn);ki=s(ip,`What are token type
IDs?`),ip.forEach(t),pl.forEach(t),yi=l(Wn),gs=r(Wn,"P",{});var dp=i(gs);xi=s(dp,"Should be overridden in a subclass if the model has a special way of building those."),dp.forEach(t),Wn.forEach(t),bi=l(xe),xn=r(xe,"DIV",{class:!0});var cp=i(xn);v(uo.$$.fragment,cp),cp.forEach(t),xe.forEach(t),ca=l(o),ft=r(o,"H2",{class:!0});var Ca=i(ft);qt=r(Ca,"A",{id:!0,class:!0,href:!0});var lp=i(qt);Ts=r(lp,"SPAN",{});var pp=i(Ts);v(mo.$$.fragment,pp),pp.forEach(t),lp.forEach(t),wi=l(Ca),vs=r(Ca,"SPAN",{});var hp=i(vs);Si=s(hp,"Speech2TextFeatureExtractor"),hp.forEach(t),Ca.forEach(t),la=l(o),he=r(o,"DIV",{class:!0});var Xe=i(he);v(_o.$$.fragment,Xe),$i=l(Xe),ks=r(Xe,"P",{});var fp=i(ks);Ei=s(fp,"Constructs a Speech2Text feature extractor."),fp.forEach(t),qi=l(Xe),go=r(Xe,"P",{});var Pa=i(go);zi=s(Pa,"This feature extractor inherits from "),bn=r(Pa,"A",{href:!0});var up=i(bn);Fi=s(up,"Speech2TextFeatureExtractor"),up.forEach(t),ji=s(Pa,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Pa.forEach(t),Ci=l(Xe),ys=r(Xe,"P",{});var mp=i(ys);Pi=s(mp,`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),mp.forEach(t),Mi=l(Xe),zt=r(Xe,"DIV",{class:!0});var Ma=i(zt);v(To.$$.fragment,Ma),Ni=l(Ma),xs=r(Ma,"P",{});var _p=i(xs);Ai=s(_p,"Main method to featurize and prepare for the model one or several sequence(s). sequences."),_p.forEach(t),Ma.forEach(t),Xe.forEach(t),pa=l(o),ut=r(o,"H2",{class:!0});var Na=i(ut);Ft=r(Na,"A",{id:!0,class:!0,href:!0});var gp=i(Ft);bs=r(gp,"SPAN",{});var Tp=i(bs);v(vo.$$.fragment,Tp),Tp.forEach(t),gp.forEach(t),Di=l(Na),ws=r(Na,"SPAN",{});var vp=i(ws);Ii=s(vp,"Speech2TextProcessor"),vp.forEach(t),Na.forEach(t),ha=l(o),A=r(o,"DIV",{class:!0});var R=i(A);v(ko.$$.fragment,R),Li=l(R),Ss=r(R,"P",{});var kp=i(Ss);Oi=s(kp,`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),kp.forEach(t),Gi=l(R),ge=r(R,"P",{});var Ge=i(ge);wn=r(Ge,"A",{href:!0});var yp=i(wn);Ui=s(yp,"Speech2TextProcessor"),yp.forEach(t),Wi=s(Ge," offers all the functionalities of "),Sn=r(Ge,"A",{href:!0});var xp=i(Sn);Vi=s(xp,"Speech2TextFeatureExtractor"),xp.forEach(t),Ri=s(Ge,` and
`),$n=r(Ge,"A",{href:!0});var bp=i($n);Hi=s(bp,"Speech2TextTokenizer"),bp.forEach(t),Bi=s(Ge,". See the "),yo=r(Ge,"A",{href:!0});var hl=i(yo);$s=r(hl,"STRONG",{});var wp=i($s);Ki=s(wp,"call"),wp.forEach(t),Ji=s(hl,"()"),hl.forEach(t),Yi=s(Ge," and "),En=r(Ge,"A",{href:!0});var Sp=i(En);Xi=s(Sp,"decode()"),Sp.forEach(t),Qi=s(Ge,` for more
information.`),Ge.forEach(t),Zi=l(R),jt=r(R,"DIV",{class:!0});var Aa=i(jt);v(xo.$$.fragment,Aa),ed=l(Aa),Oe=r(Aa,"P",{});var Bt=i(Oe);td=s(Bt,`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),bo=r(Bt,"A",{href:!0});var fl=i(bo);Es=r(fl,"STRONG",{});var $p=i(Es);od=s($p,"call"),$p.forEach(t),nd=s(fl,"()"),fl.forEach(t),sd=s(Bt,` and returns its output. If used in the context
`),qn=r(Bt,"A",{href:!0});var Ep=i(qn);ad=s(Ep,"as_target_processor()"),Ep.forEach(t),rd=s(Bt,` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),wo=r(Bt,"A",{href:!0});var ul=i(wo);qs=r(ul,"STRONG",{});var qp=i(qs);id=s(qp,"call"),qp.forEach(t),dd=s(ul,"()"),ul.forEach(t),cd=s(Bt,`. Please refer to the doctsring of the above two methods for more
information.`),Bt.forEach(t),Aa.forEach(t),ld=l(R),He=r(R,"DIV",{class:!0});var Vn=i(He);v(So.$$.fragment,Vn),pd=l(Vn),zs=r(Vn,"P",{});var zp=i(zs);hd=s(zp,"Instantiate a processor associated with a pretrained model."),zp.forEach(t),fd=l(Vn),v(Ct.$$.fragment,Vn),Vn.forEach(t),ud=l(R),Be=r(R,"DIV",{class:!0});var Rn=i(Be);v($o.$$.fragment,Rn),md=l(Rn),Eo=r(Rn,"P",{});var Da=i(Eo);_d=s(Da,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),zn=r(Da,"A",{href:!0});var Fp=i(zn);gd=s(Fp,"from_pretrained()"),Fp.forEach(t),Td=s(Da," method."),Da.forEach(t),vd=l(Rn),v(Pt.$$.fragment,Rn),Rn.forEach(t),kd=l(R),Mt=r(R,"DIV",{class:!0});var Ia=i(Mt);v(qo.$$.fragment,Ia),yd=l(Ia),zo=r(Ia,"P",{});var La=i(zo);xd=s(La,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Fn=r(La,"A",{href:!0});var jp=i(Fn);bd=s(jp,"batch_decode()"),jp.forEach(t),wd=s(La,`. Please
refer to the docstring of this method for more information.`),La.forEach(t),Ia.forEach(t),Sd=l(R),Nt=r(R,"DIV",{class:!0});var Oa=i(Nt);v(Fo.$$.fragment,Oa),$d=l(Oa),jo=r(Oa,"P",{});var Ga=i(jo);Ed=s(Ga,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),jn=r(Ga,"A",{href:!0});var Cp=i(jn);qd=s(Cp,"decode()"),Cp.forEach(t),zd=s(Ga,`. Please refer
to the docstring of this method for more information.`),Ga.forEach(t),Oa.forEach(t),Fd=l(R),At=r(R,"DIV",{class:!0});var Ua=i(At);v(Co.$$.fragment,Ua),jd=l(Ua),Fs=r(Ua,"P",{});var Pp=i(Fs);Cd=s(Pp,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text.`),Pp.forEach(t),Ua.forEach(t),R.forEach(t),fa=l(o),mt=r(o,"H2",{class:!0});var Wa=i(mt);Dt=r(Wa,"A",{id:!0,class:!0,href:!0});var Mp=i(Dt);js=r(Mp,"SPAN",{});var Np=i(js);v(Po.$$.fragment,Np),Np.forEach(t),Mp.forEach(t),Pd=l(Wa),Cs=r(Wa,"SPAN",{});var Ap=i(Cs);Md=s(Ap,"Speech2TextModel"),Ap.forEach(t),Wa.forEach(t),ua=l(o),we=r(o,"DIV",{class:!0});var Kt=i(we);v(Mo.$$.fragment,Kt),Nd=l(Kt),No=r(Kt,"P",{});var Va=i(No);Ad=s(Va,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Cn=r(Va,"A",{href:!0});var Dp=i(Cn);Dd=s(Dp,"PreTrainedModel"),Dp.forEach(t),Id=s(Va,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Va.forEach(t),Ld=l(Kt),Ao=r(Kt,"P",{});var Ra=i(Ao);Od=s(Ra,"This model is also a PyTorch "),Do=r(Ra,"A",{href:!0,rel:!0});var Ip=i(Do);Gd=s(Ip,"torch.nn.Module"),Ip.forEach(t),Ud=s(Ra,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ra.forEach(t),Wd=l(Kt),Te=r(Kt,"DIV",{class:!0});var Qe=i(Te);v(Io.$$.fragment,Qe),Vd=l(Qe),_t=r(Qe,"P",{});var Hn=i(_t);Rd=s(Hn,"The "),Pn=r(Hn,"A",{href:!0});var Lp=i(Pn);Hd=s(Lp,"Speech2TextModel"),Lp.forEach(t),Bd=s(Hn," forward method, overrides the "),Ps=r(Hn,"CODE",{});var Op=i(Ps);Kd=s(Op,"__call__"),Op.forEach(t),Jd=s(Hn," special method."),Hn.forEach(t),Yd=l(Qe),v(It.$$.fragment,Qe),Xd=l(Qe),Ms=r(Qe,"P",{});var Gp=i(Ms);Qd=s(Gp,"Example:"),Gp.forEach(t),Zd=l(Qe),v(Lo.$$.fragment,Qe),Qe.forEach(t),Kt.forEach(t),ma=l(o),gt=r(o,"H2",{class:!0});var Ha=i(gt);Lt=r(Ha,"A",{id:!0,class:!0,href:!0});var Up=i(Lt);Ns=r(Up,"SPAN",{});var Wp=i(Ns);v(Oo.$$.fragment,Wp),Wp.forEach(t),Up.forEach(t),ec=l(Ha),As=r(Ha,"SPAN",{});var Vp=i(As);tc=s(Vp,"Speech2TextForConditionalGeneration"),Vp.forEach(t),Ha.forEach(t),_a=l(o),Se=r(o,"DIV",{class:!0});var Jt=i(Se);v(Go.$$.fragment,Jt),oc=l(Jt),Uo=r(Jt,"P",{});var Ba=i(Uo);nc=s(Ba,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Mn=r(Ba,"A",{href:!0});var Rp=i(Mn);sc=s(Rp,"PreTrainedModel"),Rp.forEach(t),ac=s(Ba,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ba.forEach(t),rc=l(Jt),Wo=r(Jt,"P",{});var Ka=i(Wo);ic=s(Ka,"This model is also a PyTorch "),Vo=r(Ka,"A",{href:!0,rel:!0});var Hp=i(Vo);dc=s(Hp,"torch.nn.Module"),Hp.forEach(t),cc=s(Ka,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ka.forEach(t),lc=l(Jt),ve=r(Jt,"DIV",{class:!0});var Ze=i(ve);v(Ro.$$.fragment,Ze),pc=l(Ze),Tt=r(Ze,"P",{});var Bn=i(Tt);hc=s(Bn,"The "),Nn=r(Bn,"A",{href:!0});var Bp=i(Nn);fc=s(Bp,"Speech2TextForConditionalGeneration"),Bp.forEach(t),uc=s(Bn," forward method, overrides the "),Ds=r(Bn,"CODE",{});var Kp=i(Ds);mc=s(Kp,"__call__"),Kp.forEach(t),_c=s(Bn," special method."),Bn.forEach(t),gc=l(Ze),v(Ot.$$.fragment,Ze),Tc=l(Ze),Is=r(Ze,"P",{});var Jp=i(Is);vc=s(Jp,"Example:"),Jp.forEach(t),kc=l(Ze),v(Ho.$$.fragment,Ze),Ze.forEach(t),Jt.forEach(t),ga=l(o),vt=r(o,"H2",{class:!0});var Ja=i(vt);Gt=r(Ja,"A",{id:!0,class:!0,href:!0});var Yp=i(Gt);Ls=r(Yp,"SPAN",{});var Xp=i(Ls);v(Bo.$$.fragment,Xp),Xp.forEach(t),Yp.forEach(t),yc=l(Ja),Os=r(Ja,"SPAN",{});var Qp=i(Os);xc=s(Qp,"TFSpeech2TextModel"),Qp.forEach(t),Ja.forEach(t),Ta=l(o),fe=r(o,"DIV",{class:!0});var et=i(fe);v(Ko.$$.fragment,et),bc=l(et),Jo=r(et,"P",{});var Ya=i(Jo);wc=s(Ya,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),An=r(Ya,"A",{href:!0});var Zp=i(An);Sc=s(Zp,"TFPreTrainedModel"),Zp.forEach(t),$c=s(Ya,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ya.forEach(t),Ec=l(et),Yo=r(et,"P",{});var Xa=i(Yo);qc=s(Xa,"This model is also a "),Xo=r(Xa,"A",{href:!0,rel:!0});var eh=i(Xo);zc=s(eh,"tf.keras.Model"),eh.forEach(t),Fc=s(Xa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xa.forEach(t),jc=l(et),v(Ut.$$.fragment,et),Cc=l(et),ke=r(et,"DIV",{class:!0});var tt=i(ke);v(Qo.$$.fragment,tt),Pc=l(tt),kt=r(tt,"P",{});var Kn=i(kt);Mc=s(Kn,"The "),Dn=r(Kn,"A",{href:!0});var th=i(Dn);Nc=s(th,"TFSpeech2TextModel"),th.forEach(t),Ac=s(Kn," forward method, overrides the "),Gs=r(Kn,"CODE",{});var oh=i(Gs);Dc=s(oh,"__call__"),oh.forEach(t),Ic=s(Kn," special method."),Kn.forEach(t),Lc=l(tt),v(Wt.$$.fragment,tt),Oc=l(tt),Us=r(tt,"P",{});var nh=i(Us);Gc=s(nh,"Example:"),nh.forEach(t),Uc=l(tt),v(Zo.$$.fragment,tt),tt.forEach(t),et.forEach(t),va=l(o),yt=r(o,"H2",{class:!0});var Qa=i(yt);Vt=r(Qa,"A",{id:!0,class:!0,href:!0});var sh=i(Vt);Ws=r(sh,"SPAN",{});var ah=i(Ws);v(en.$$.fragment,ah),ah.forEach(t),sh.forEach(t),Wc=l(Qa),Vs=r(Qa,"SPAN",{});var rh=i(Vs);Vc=s(rh,"TFSpeech2TextForConditionalGeneration"),rh.forEach(t),Qa.forEach(t),ka=l(o),ue=r(o,"DIV",{class:!0});var ot=i(ue);v(tn.$$.fragment,ot),Rc=l(ot),on=r(ot,"P",{});var Za=i(on);Hc=s(Za,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),In=r(Za,"A",{href:!0});var ih=i(In);Bc=s(ih,"TFPreTrainedModel"),ih.forEach(t),Kc=s(Za,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Za.forEach(t),Jc=l(ot),nn=r(ot,"P",{});var er=i(nn);Yc=s(er,"This model is also a "),sn=r(er,"A",{href:!0,rel:!0});var dh=i(sn);Xc=s(dh,"tf.keras.Model"),dh.forEach(t),Qc=s(er,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),er.forEach(t),Zc=l(ot),v(Rt.$$.fragment,ot),el=l(ot),ye=r(ot,"DIV",{class:!0});var nt=i(ye);v(an.$$.fragment,nt),tl=l(nt),xt=r(nt,"P",{});var Jn=i(xt);ol=s(Jn,"The "),Ln=r(Jn,"A",{href:!0});var ch=i(Ln);nl=s(ch,"TFSpeech2TextForConditionalGeneration"),ch.forEach(t),sl=s(Jn," forward method, overrides the "),Rs=r(Jn,"CODE",{});var lh=i(Rs);al=s(lh,"__call__"),lh.forEach(t),rl=s(Jn," special method."),Jn.forEach(t),il=l(nt),v(Ht.$$.fragment,nt),dl=l(nt),Hs=r(nt,"P",{});var ph=i(Hs);cl=s(ph,"Example:"),ph.forEach(t),ll=l(nt),v(rn.$$.fragment,nt),nt.forEach(t),ot.forEach(t),this.h()},h(){d(p,"name","hf:doc:metadata"),d(p,"content",JSON.stringify($h)),d(g,"id","speech2text"),d(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(g,"href","#speech2text"),d(m,"class","relative group"),d(I,"id","overview"),d(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(I,"href","#overview"),d(E,"class","relative group"),d(te,"href","https://arxiv.org/abs/2010.05171"),d(te,"rel","nofollow"),d(P,"href","http://www.openslr.org/12"),d(P,"rel","nofollow"),d(ne,"href","https://github.com/facebookresearch/covost"),d(ne,"rel","nofollow"),d(ae,"href","https://ict.fbk.eu/must-c/"),d(ae,"rel","nofollow"),d(re,"href","https://huggingface.co/valhalla"),d(re,"rel","nofollow"),d(de,"href","https://github.com/pytorch/fairseq/tree/master/examples/speech_to_text"),d(de,"rel","nofollow"),d(u,"id","inference"),d(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(u,"href","#inference"),d(Y,"class","relative group"),d(qe,"href","/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d(pn,"href","/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),d(hn,"href","/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d(fn,"href","/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),d(Xt,"href","http://www.mega-nerd.com/libsndfile/"),d(Xt,"rel","nofollow"),d(to,"href","https://huggingface.co/models?filter=speech_to_text"),d(to,"rel","nofollow"),d(wt,"id","transformers.Speech2TextConfig"),d(wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(wt,"href","#transformers.Speech2TextConfig"),d(ct,"class","relative group"),d(_n,"href","/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextModel"),d(so,"href","https://huggingface.co/facebook/s2t-small-librispeech-asr"),d(so,"rel","nofollow"),d(gn,"href","/docs/transformers/pr_16506/en/main_classes/configuration#transformers.PretrainedConfig"),d(Tn,"href","/docs/transformers/pr_16506/en/main_classes/configuration#transformers.PretrainedConfig"),d(pe,"class","docstring"),d(St,"id","transformers.Speech2TextTokenizer"),d(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(St,"href","#transformers.Speech2TextTokenizer"),d(ht,"class","relative group"),d(vn,"href","/docs/transformers/pr_16506/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d($t,"class","docstring"),d(Et,"class","docstring"),d(yn,"href","../glossary#token-type-ids"),d(Re,"class","docstring"),d(xn,"class","docstring"),d(W,"class","docstring"),d(qt,"id","transformers.Speech2TextFeatureExtractor"),d(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qt,"href","#transformers.Speech2TextFeatureExtractor"),d(ft,"class","relative group"),d(bn,"href","/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d(zt,"class","docstring"),d(he,"class","docstring"),d(Ft,"id","transformers.Speech2TextProcessor"),d(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ft,"href","#transformers.Speech2TextProcessor"),d(ut,"class","relative group"),d(wn,"href","/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),d(Sn,"href","/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d($n,"href","/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),d(yo,"href","/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.__call__"),d(En,"href","/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.decode"),d(bo,"href","/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"),d(qn,"href","/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.as_target_processor"),d(wo,"href","/docs/transformers/pr_16506/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__"),d(jt,"class","docstring"),d(He,"class","docstring"),d(zn,"href","/docs/transformers/pr_16506/en/model_doc/trocr#transformers.TrOCRProcessor.from_pretrained"),d(Be,"class","docstring"),d(Fn,"href","/docs/transformers/pr_16506/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.batch_decode"),d(Mt,"class","docstring"),d(jn,"href","/docs/transformers/pr_16506/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.decode"),d(Nt,"class","docstring"),d(At,"class","docstring"),d(A,"class","docstring"),d(Dt,"id","transformers.Speech2TextModel"),d(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Dt,"href","#transformers.Speech2TextModel"),d(mt,"class","relative group"),d(Cn,"href","/docs/transformers/pr_16506/en/main_classes/model#transformers.PreTrainedModel"),d(Do,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Do,"rel","nofollow"),d(Pn,"href","/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextModel"),d(Te,"class","docstring"),d(we,"class","docstring"),d(Lt,"id","transformers.Speech2TextForConditionalGeneration"),d(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Lt,"href","#transformers.Speech2TextForConditionalGeneration"),d(gt,"class","relative group"),d(Mn,"href","/docs/transformers/pr_16506/en/main_classes/model#transformers.PreTrainedModel"),d(Vo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Vo,"rel","nofollow"),d(Nn,"href","/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.Speech2TextForConditionalGeneration"),d(ve,"class","docstring"),d(Se,"class","docstring"),d(Gt,"id","transformers.TFSpeech2TextModel"),d(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Gt,"href","#transformers.TFSpeech2TextModel"),d(vt,"class","relative group"),d(An,"href","/docs/transformers/pr_16506/en/main_classes/model#transformers.TFPreTrainedModel"),d(Xo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Xo,"rel","nofollow"),d(Dn,"href","/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.TFSpeech2TextModel"),d(ke,"class","docstring"),d(fe,"class","docstring"),d(Vt,"id","transformers.TFSpeech2TextForConditionalGeneration"),d(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Vt,"href","#transformers.TFSpeech2TextForConditionalGeneration"),d(yt,"class","relative group"),d(In,"href","/docs/transformers/pr_16506/en/main_classes/model#transformers.TFPreTrainedModel"),d(sn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(sn,"rel","nofollow"),d(Ln,"href","/docs/transformers/pr_16506/en/model_doc/speech_to_text#transformers.TFSpeech2TextForConditionalGeneration"),d(ye,"class","docstring"),d(ue,"class","docstring")},m(o,f){e(document.head,p),h(o,q,f),h(o,m,f),e(m,g),e(g,S),k(_,S,null),e(m,w),e(m,$),e($,N),h(o,z,f),h(o,E,f),e(E,I),e(I,H),k(ee,H,null),e(E,Fe),e(E,B),e(B,je),h(o,$e,f),h(o,M,f),e(M,K),e(M,te),e(te,be),e(M,C),e(M,P),e(P,Ce),e(M,oe),e(M,ne),e(ne,Pe),e(M,se),e(M,ae),e(ae,Me),e(M,O),h(o,Ee,f),h(o,L,f),e(L,Ne),e(L,re),e(re,ie),e(L,Ae),e(L,de),e(de,J),e(L,De),h(o,Z,f),h(o,Y,f),e(Y,u),e(u,F),k(X,F,null),e(Y,st),e(Y,Ie),e(Ie,Q),h(o,We,f),h(o,_e,f),e(_e,at),e(_e,G),e(G,ce),e(_e,rt),h(o,Ve,f),h(o,j,f),e(j,it),e(j,qe),e(qe,Le),e(j,dt),e(j,pn),e(pn,tr),e(j,or),e(j,hn),e(hn,nr),e(j,sr),e(j,fn),e(fn,ar),e(j,rr),h(o,Zs,f),h(o,U,f),e(U,ir),e(U,Yn),e(Yn,dr),e(U,cr),e(U,Xn),e(Xn,lr),e(U,pr),e(U,Qn),e(Qn,hr),e(U,fr),e(U,Zn),e(Zn,ur),e(U,mr),e(U,es),e(es,_r),e(U,gr),e(U,Xt),e(Xt,Tr),e(U,vr),e(U,ts),e(ts,kr),h(o,ea,f),h(o,un,f),e(un,os),e(os,yr),h(o,ta,f),k(Qt,o,f),h(o,oa,f),h(o,mn,f),e(mn,Zt),e(Zt,ns),e(ns,xr),e(Zt,br),e(Zt,le),e(le,wr),e(le,ss),e(ss,Sr),e(le,$r),e(le,as),e(as,Er),e(le,qr),e(le,rs),e(rs,zr),e(le,Fr),e(le,is),e(is,jr),e(le,Cr),e(le,ds),e(ds,Pr),e(le,Mr),h(o,na,f),k(eo,o,f),h(o,sa,f),h(o,bt,f),e(bt,Nr),e(bt,to),e(to,Ar),e(bt,Dr),h(o,aa,f),h(o,ct,f),e(ct,wt),e(wt,cs),k(oo,cs,null),e(ct,Ir),e(ct,ls),e(ls,Lr),h(o,ra,f),h(o,pe,f),k(no,pe,null),e(pe,Or),e(pe,lt),e(lt,Gr),e(lt,_n),e(_n,Ur),e(lt,Wr),e(lt,so),e(so,Vr),e(lt,Rr),e(pe,Hr),e(pe,pt),e(pt,Br),e(pt,gn),e(gn,Kr),e(pt,Jr),e(pt,Tn),e(Tn,Yr),e(pt,Xr),e(pe,Qr),e(pe,ps),e(ps,Zr),e(pe,ei),k(ao,pe,null),h(o,ia,f),h(o,ht,f),e(ht,St),e(St,hs),k(ro,hs,null),e(ht,ti),e(ht,fs),e(fs,oi),h(o,da,f),h(o,W,f),k(io,W,null),e(W,ni),e(W,us),e(us,si),e(W,ai),e(W,co),e(co,ri),e(co,vn),e(vn,ii),e(co,di),e(W,ci),e(W,$t),k(lo,$t,null),e($t,li),e($t,ms),e(ms,pi),e(W,hi),e(W,Et),k(po,Et,null),e(Et,fi),e(Et,ho),e(ho,ui),e(ho,_s),e(_s,mi),e(ho,_i),e(W,gi),e(W,Re),k(fo,Re,null),e(Re,Ti),e(Re,kn),e(kn,vi),e(kn,yn),e(yn,ki),e(Re,yi),e(Re,gs),e(gs,xi),e(W,bi),e(W,xn),k(uo,xn,null),h(o,ca,f),h(o,ft,f),e(ft,qt),e(qt,Ts),k(mo,Ts,null),e(ft,wi),e(ft,vs),e(vs,Si),h(o,la,f),h(o,he,f),k(_o,he,null),e(he,$i),e(he,ks),e(ks,Ei),e(he,qi),e(he,go),e(go,zi),e(go,bn),e(bn,Fi),e(go,ji),e(he,Ci),e(he,ys),e(ys,Pi),e(he,Mi),e(he,zt),k(To,zt,null),e(zt,Ni),e(zt,xs),e(xs,Ai),h(o,pa,f),h(o,ut,f),e(ut,Ft),e(Ft,bs),k(vo,bs,null),e(ut,Di),e(ut,ws),e(ws,Ii),h(o,ha,f),h(o,A,f),k(ko,A,null),e(A,Li),e(A,Ss),e(Ss,Oi),e(A,Gi),e(A,ge),e(ge,wn),e(wn,Ui),e(ge,Wi),e(ge,Sn),e(Sn,Vi),e(ge,Ri),e(ge,$n),e($n,Hi),e(ge,Bi),e(ge,yo),e(yo,$s),e($s,Ki),e(yo,Ji),e(ge,Yi),e(ge,En),e(En,Xi),e(ge,Qi),e(A,Zi),e(A,jt),k(xo,jt,null),e(jt,ed),e(jt,Oe),e(Oe,td),e(Oe,bo),e(bo,Es),e(Es,od),e(bo,nd),e(Oe,sd),e(Oe,qn),e(qn,ad),e(Oe,rd),e(Oe,wo),e(wo,qs),e(qs,id),e(wo,dd),e(Oe,cd),e(A,ld),e(A,He),k(So,He,null),e(He,pd),e(He,zs),e(zs,hd),e(He,fd),k(Ct,He,null),e(A,ud),e(A,Be),k($o,Be,null),e(Be,md),e(Be,Eo),e(Eo,_d),e(Eo,zn),e(zn,gd),e(Eo,Td),e(Be,vd),k(Pt,Be,null),e(A,kd),e(A,Mt),k(qo,Mt,null),e(Mt,yd),e(Mt,zo),e(zo,xd),e(zo,Fn),e(Fn,bd),e(zo,wd),e(A,Sd),e(A,Nt),k(Fo,Nt,null),e(Nt,$d),e(Nt,jo),e(jo,Ed),e(jo,jn),e(jn,qd),e(jo,zd),e(A,Fd),e(A,At),k(Co,At,null),e(At,jd),e(At,Fs),e(Fs,Cd),h(o,fa,f),h(o,mt,f),e(mt,Dt),e(Dt,js),k(Po,js,null),e(mt,Pd),e(mt,Cs),e(Cs,Md),h(o,ua,f),h(o,we,f),k(Mo,we,null),e(we,Nd),e(we,No),e(No,Ad),e(No,Cn),e(Cn,Dd),e(No,Id),e(we,Ld),e(we,Ao),e(Ao,Od),e(Ao,Do),e(Do,Gd),e(Ao,Ud),e(we,Wd),e(we,Te),k(Io,Te,null),e(Te,Vd),e(Te,_t),e(_t,Rd),e(_t,Pn),e(Pn,Hd),e(_t,Bd),e(_t,Ps),e(Ps,Kd),e(_t,Jd),e(Te,Yd),k(It,Te,null),e(Te,Xd),e(Te,Ms),e(Ms,Qd),e(Te,Zd),k(Lo,Te,null),h(o,ma,f),h(o,gt,f),e(gt,Lt),e(Lt,Ns),k(Oo,Ns,null),e(gt,ec),e(gt,As),e(As,tc),h(o,_a,f),h(o,Se,f),k(Go,Se,null),e(Se,oc),e(Se,Uo),e(Uo,nc),e(Uo,Mn),e(Mn,sc),e(Uo,ac),e(Se,rc),e(Se,Wo),e(Wo,ic),e(Wo,Vo),e(Vo,dc),e(Wo,cc),e(Se,lc),e(Se,ve),k(Ro,ve,null),e(ve,pc),e(ve,Tt),e(Tt,hc),e(Tt,Nn),e(Nn,fc),e(Tt,uc),e(Tt,Ds),e(Ds,mc),e(Tt,_c),e(ve,gc),k(Ot,ve,null),e(ve,Tc),e(ve,Is),e(Is,vc),e(ve,kc),k(Ho,ve,null),h(o,ga,f),h(o,vt,f),e(vt,Gt),e(Gt,Ls),k(Bo,Ls,null),e(vt,yc),e(vt,Os),e(Os,xc),h(o,Ta,f),h(o,fe,f),k(Ko,fe,null),e(fe,bc),e(fe,Jo),e(Jo,wc),e(Jo,An),e(An,Sc),e(Jo,$c),e(fe,Ec),e(fe,Yo),e(Yo,qc),e(Yo,Xo),e(Xo,zc),e(Yo,Fc),e(fe,jc),k(Ut,fe,null),e(fe,Cc),e(fe,ke),k(Qo,ke,null),e(ke,Pc),e(ke,kt),e(kt,Mc),e(kt,Dn),e(Dn,Nc),e(kt,Ac),e(kt,Gs),e(Gs,Dc),e(kt,Ic),e(ke,Lc),k(Wt,ke,null),e(ke,Oc),e(ke,Us),e(Us,Gc),e(ke,Uc),k(Zo,ke,null),h(o,va,f),h(o,yt,f),e(yt,Vt),e(Vt,Ws),k(en,Ws,null),e(yt,Wc),e(yt,Vs),e(Vs,Vc),h(o,ka,f),h(o,ue,f),k(tn,ue,null),e(ue,Rc),e(ue,on),e(on,Hc),e(on,In),e(In,Bc),e(on,Kc),e(ue,Jc),e(ue,nn),e(nn,Yc),e(nn,sn),e(sn,Xc),e(nn,Qc),e(ue,Zc),k(Rt,ue,null),e(ue,el),e(ue,ye),k(an,ye,null),e(ye,tl),e(ye,xt),e(xt,ol),e(xt,Ln),e(Ln,nl),e(xt,sl),e(xt,Rs),e(Rs,al),e(xt,rl),e(ye,il),k(Ht,ye,null),e(ye,dl),e(ye,Hs),e(Hs,cl),e(ye,ll),k(rn,ye,null),ya=!0},p(o,[f]){const dn={};f&2&&(dn.$$scope={dirty:f,ctx:o}),Ct.$set(dn);const Bs={};f&2&&(Bs.$$scope={dirty:f,ctx:o}),Pt.$set(Bs);const Ks={};f&2&&(Ks.$$scope={dirty:f,ctx:o}),It.$set(Ks);const Js={};f&2&&(Js.$$scope={dirty:f,ctx:o}),Ot.$set(Js);const cn={};f&2&&(cn.$$scope={dirty:f,ctx:o}),Ut.$set(cn);const Ys={};f&2&&(Ys.$$scope={dirty:f,ctx:o}),Wt.$set(Ys);const Xs={};f&2&&(Xs.$$scope={dirty:f,ctx:o}),Rt.$set(Xs);const Qs={};f&2&&(Qs.$$scope={dirty:f,ctx:o}),Ht.$set(Qs)},i(o){ya||(y(_.$$.fragment,o),y(ee.$$.fragment,o),y(X.$$.fragment,o),y(Qt.$$.fragment,o),y(eo.$$.fragment,o),y(oo.$$.fragment,o),y(no.$$.fragment,o),y(ao.$$.fragment,o),y(ro.$$.fragment,o),y(io.$$.fragment,o),y(lo.$$.fragment,o),y(po.$$.fragment,o),y(fo.$$.fragment,o),y(uo.$$.fragment,o),y(mo.$$.fragment,o),y(_o.$$.fragment,o),y(To.$$.fragment,o),y(vo.$$.fragment,o),y(ko.$$.fragment,o),y(xo.$$.fragment,o),y(So.$$.fragment,o),y(Ct.$$.fragment,o),y($o.$$.fragment,o),y(Pt.$$.fragment,o),y(qo.$$.fragment,o),y(Fo.$$.fragment,o),y(Co.$$.fragment,o),y(Po.$$.fragment,o),y(Mo.$$.fragment,o),y(Io.$$.fragment,o),y(It.$$.fragment,o),y(Lo.$$.fragment,o),y(Oo.$$.fragment,o),y(Go.$$.fragment,o),y(Ro.$$.fragment,o),y(Ot.$$.fragment,o),y(Ho.$$.fragment,o),y(Bo.$$.fragment,o),y(Ko.$$.fragment,o),y(Ut.$$.fragment,o),y(Qo.$$.fragment,o),y(Wt.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(tn.$$.fragment,o),y(Rt.$$.fragment,o),y(an.$$.fragment,o),y(Ht.$$.fragment,o),y(rn.$$.fragment,o),ya=!0)},o(o){x(_.$$.fragment,o),x(ee.$$.fragment,o),x(X.$$.fragment,o),x(Qt.$$.fragment,o),x(eo.$$.fragment,o),x(oo.$$.fragment,o),x(no.$$.fragment,o),x(ao.$$.fragment,o),x(ro.$$.fragment,o),x(io.$$.fragment,o),x(lo.$$.fragment,o),x(po.$$.fragment,o),x(fo.$$.fragment,o),x(uo.$$.fragment,o),x(mo.$$.fragment,o),x(_o.$$.fragment,o),x(To.$$.fragment,o),x(vo.$$.fragment,o),x(ko.$$.fragment,o),x(xo.$$.fragment,o),x(So.$$.fragment,o),x(Ct.$$.fragment,o),x($o.$$.fragment,o),x(Pt.$$.fragment,o),x(qo.$$.fragment,o),x(Fo.$$.fragment,o),x(Co.$$.fragment,o),x(Po.$$.fragment,o),x(Mo.$$.fragment,o),x(Io.$$.fragment,o),x(It.$$.fragment,o),x(Lo.$$.fragment,o),x(Oo.$$.fragment,o),x(Go.$$.fragment,o),x(Ro.$$.fragment,o),x(Ot.$$.fragment,o),x(Ho.$$.fragment,o),x(Bo.$$.fragment,o),x(Ko.$$.fragment,o),x(Ut.$$.fragment,o),x(Qo.$$.fragment,o),x(Wt.$$.fragment,o),x(Zo.$$.fragment,o),x(en.$$.fragment,o),x(tn.$$.fragment,o),x(Rt.$$.fragment,o),x(an.$$.fragment,o),x(Ht.$$.fragment,o),x(rn.$$.fragment,o),ya=!1},d(o){t(p),o&&t(q),o&&t(m),b(_),o&&t(z),o&&t(E),b(ee),o&&t($e),o&&t(M),o&&t(Ee),o&&t(L),o&&t(Z),o&&t(Y),b(X),o&&t(We),o&&t(_e),o&&t(Ve),o&&t(j),o&&t(Zs),o&&t(U),o&&t(ea),o&&t(un),o&&t(ta),b(Qt,o),o&&t(oa),o&&t(mn),o&&t(na),b(eo,o),o&&t(sa),o&&t(bt),o&&t(aa),o&&t(ct),b(oo),o&&t(ra),o&&t(pe),b(no),b(ao),o&&t(ia),o&&t(ht),b(ro),o&&t(da),o&&t(W),b(io),b(lo),b(po),b(fo),b(uo),o&&t(ca),o&&t(ft),b(mo),o&&t(la),o&&t(he),b(_o),b(To),o&&t(pa),o&&t(ut),b(vo),o&&t(ha),o&&t(A),b(ko),b(xo),b(So),b(Ct),b($o),b(Pt),b(qo),b(Fo),b(Co),o&&t(fa),o&&t(mt),b(Po),o&&t(ua),o&&t(we),b(Mo),b(Io),b(It),b(Lo),o&&t(ma),o&&t(gt),b(Oo),o&&t(_a),o&&t(Se),b(Go),b(Ro),b(Ot),b(Ho),o&&t(ga),o&&t(vt),b(Bo),o&&t(Ta),o&&t(fe),b(Ko),b(Ut),b(Qo),b(Wt),b(Zo),o&&t(va),o&&t(yt),b(en),o&&t(ka),o&&t(ue),b(tn),b(Rt),b(an),b(Ht),b(rn)}}}const $h={local:"speech2text",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.Speech2TextConfig",title:"Speech2TextConfig"},{local:"transformers.Speech2TextTokenizer",title:"Speech2TextTokenizer"},{local:"transformers.Speech2TextFeatureExtractor",title:"Speech2TextFeatureExtractor"},{local:"transformers.Speech2TextProcessor",title:"Speech2TextProcessor"},{local:"transformers.Speech2TextModel",title:"Speech2TextModel"},{local:"transformers.Speech2TextForConditionalGeneration",title:"Speech2TextForConditionalGeneration"},{local:"transformers.TFSpeech2TextModel",title:"TFSpeech2TextModel"},{local:"transformers.TFSpeech2TextForConditionalGeneration",title:"TFSpeech2TextForConditionalGeneration"}],title:"Speech2Text"};function Eh(V){return _h(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ph extends hh{constructor(p){super();fh(this,p,Eh,Sh,uh,{})}}export{Ph as default,$h as metadata};
