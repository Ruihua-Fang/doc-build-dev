import{S as hh,i as fh,s as uh,e as a,k as c,w as T,t as n,M as mh,c as r,d as t,m as l,a as i,x as v,h as s,b as d,F as e,g as h,y as x,q as k,o as b,B as y,v as _h}from"../../chunks/vendor-6b77c823.js";import{T as Yt}from"../../chunks/Tip-39098574.js";import{D}from"../../chunks/Docstring-abef54e3.js";import{C as ln}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as We}from"../../chunks/IconCopyLink-7a11ce68.js";function gh(U){let p,q,m,g,S,_,w,$;return{c(){p=a("p"),q=n(`This class method is simply calling the feature extractor
`),m=a("a"),g=n("from_pretrained()"),S=n(` and the tokenizer
`),_=a("code"),w=n("from_pretrained"),$=n(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(A){p=r(A,"P",{});var z=i(p);q=s(z,`This class method is simply calling the feature extractor
`),m=r(z,"A",{href:!0});var E=i(m);g=s(E,"from_pretrained()"),E.forEach(t),S=s(z,` and the tokenizer
`),_=r(z,"CODE",{});var N=i(_);w=s(N,"from_pretrained"),N.forEach(t),$=s(z,` methods. Please refer to the docstrings of the
methods above for more information.`),z.forEach(t),this.h()},h(){d(m,"href","/docs/transformers/pr_16329/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(A,z){h(A,p,z),e(p,q),e(p,m),e(m,g),e(p,S),e(p,_),e(_,w),e(p,$)},d(A){A&&t(p)}}}function Th(U){let p,q,m,g,S,_,w,$;return{c(){p=a("p"),q=n("This class method is simply calling "),m=a("a"),g=n("save_pretrained()"),S=n(` and
`),_=a("code"),w=n("save_pretrained"),$=n(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(A){p=r(A,"P",{});var z=i(p);q=s(z,"This class method is simply calling "),m=r(z,"A",{href:!0});var E=i(m);g=s(E,"save_pretrained()"),E.forEach(t),S=s(z,` and
`),_=r(z,"CODE",{});var N=i(_);w=s(N,"save_pretrained"),N.forEach(t),$=s(z,`. Please refer to the docstrings of the methods
above for more information.`),z.forEach(t),this.h()},h(){d(m,"href","/docs/transformers/pr_16329/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(A,z){h(A,p,z),e(p,q),e(p,m),e(m,g),e(p,S),e(p,_),e(_,w),e(p,$)},d(A){A&&t(p)}}}function vh(U){let p,q,m,g,S;return{c(){p=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=r(_,"P",{});var w=i(p);q=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(_,w){h(_,p,w),e(p,q),e(p,m),e(m,g),e(p,S)},d(_){_&&t(p)}}}function xh(U){let p,q,m,g,S;return{c(){p=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=r(_,"P",{});var w=i(p);q=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(_,w){h(_,p,w),e(p,q),e(p,m),e(m,g),e(p,S)},d(_){_&&t(p)}}}function kh(U){let p,q,m,g,S,_,w,$,A,z,E,N,H,ee,Fe,B,je,$e,M,J,te,ye,C,P,Ce,oe,ne,Pe,se,ae,Me,O,Ee,L,Ae,re,ie,Ie,de,K,De,Z,Y;return{c(){p=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),m=c(),g=a("ul"),S=a("li"),_=n("having all inputs as keyword arguments (like PyTorch models), or"),w=c(),$=a("li"),A=n("having all inputs as a list, tuple or dict in the first positional arguments."),z=c(),E=a("p"),N=n("This second option is useful when using "),H=a("code"),ee=n("tf.keras.Model.fit"),Fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=a("code"),je=n("model(inputs)"),$e=n("."),M=c(),J=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye=c(),C=a("ul"),P=a("li"),Ce=n("a single Tensor with "),oe=a("code"),ne=n("input_ids"),Pe=n(" only and nothing else: "),se=a("code"),ae=n("model(input_ids)"),Me=c(),O=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Ae=n("model([input_ids, attention_mask])"),re=n(" or "),ie=a("code"),Ie=n("model([input_ids, attention_mask, token_type_ids])"),de=c(),K=a("li"),De=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),Y=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){p=r(u,"P",{});var F=i(p);q=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=l(u),g=r(u,"UL",{});var X=i(g);S=r(X,"LI",{});var st=i(S);_=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(X),$=r(X,"LI",{});var Ne=i($);A=s(Ne,"having all inputs as a list, tuple or dict in the first positional arguments."),Ne.forEach(t),X.forEach(t),z=l(u),E=r(u,"P",{});var Q=i(E);N=s(Q,"This second option is useful when using "),H=r(Q,"CODE",{});var Ve=i(H);ee=s(Ve,"tf.keras.Model.fit"),Ve.forEach(t),Fe=s(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=r(Q,"CODE",{});var _e=i(B);je=s(_e,"model(inputs)"),_e.forEach(t),$e=s(Q,"."),Q.forEach(t),M=l(u),J=r(u,"P",{});var at=i(J);te=s(at,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),at.forEach(t),ye=l(u),C=r(u,"UL",{});var G=i(C);P=r(G,"LI",{});var ce=i(P);Ce=s(ce,"a single Tensor with "),oe=r(ce,"CODE",{});var rt=i(oe);ne=s(rt,"input_ids"),rt.forEach(t),Pe=s(ce," only and nothing else: "),se=r(ce,"CODE",{});var Ue=i(se);ae=s(Ue,"model(input_ids)"),Ue.forEach(t),ce.forEach(t),Me=l(G),O=r(G,"LI",{});var j=i(O);Ee=s(j,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(j,"CODE",{});var it=i(L);Ae=s(it,"model([input_ids, attention_mask])"),it.forEach(t),re=s(j," or "),ie=r(j,"CODE",{});var qe=i(ie);Ie=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),j.forEach(t),de=l(G),K=r(G,"LI",{});var Le=i(K);De=s(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Le,"CODE",{});var dt=i(Z);Y=s(dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),dt.forEach(t),Le.forEach(t),G.forEach(t)},m(u,F){h(u,p,F),e(p,q),h(u,m,F),h(u,g,F),e(g,S),e(S,_),e(g,w),e(g,$),e($,A),h(u,z,F),h(u,E,F),e(E,N),e(E,H),e(H,ee),e(E,Fe),e(E,B),e(B,je),e(E,$e),h(u,M,F),h(u,J,F),e(J,te),h(u,ye,F),h(u,C,F),e(C,P),e(P,Ce),e(P,oe),e(oe,ne),e(P,Pe),e(P,se),e(se,ae),e(C,Me),e(C,O),e(O,Ee),e(O,L),e(L,Ae),e(O,re),e(O,ie),e(ie,Ie),e(C,de),e(C,K),e(K,De),e(K,Z),e(Z,Y)},d(u){u&&t(p),u&&t(m),u&&t(g),u&&t(z),u&&t(E),u&&t(M),u&&t(J),u&&t(ye),u&&t(C)}}}function bh(U){let p,q,m,g,S;return{c(){p=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=r(_,"P",{});var w=i(p);q=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(_,w){h(_,p,w),e(p,q),e(p,m),e(m,g),e(p,S)},d(_){_&&t(p)}}}function yh(U){let p,q,m,g,S,_,w,$,A,z,E,N,H,ee,Fe,B,je,$e,M,J,te,ye,C,P,Ce,oe,ne,Pe,se,ae,Me,O,Ee,L,Ae,re,ie,Ie,de,K,De,Z,Y;return{c(){p=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),m=c(),g=a("ul"),S=a("li"),_=n("having all inputs as keyword arguments (like PyTorch models), or"),w=c(),$=a("li"),A=n("having all inputs as a list, tuple or dict in the first positional arguments."),z=c(),E=a("p"),N=n("This second option is useful when using "),H=a("code"),ee=n("tf.keras.Model.fit"),Fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=a("code"),je=n("model(inputs)"),$e=n("."),M=c(),J=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye=c(),C=a("ul"),P=a("li"),Ce=n("a single Tensor with "),oe=a("code"),ne=n("input_ids"),Pe=n(" only and nothing else: "),se=a("code"),ae=n("model(input_ids)"),Me=c(),O=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Ae=n("model([input_ids, attention_mask])"),re=n(" or "),ie=a("code"),Ie=n("model([input_ids, attention_mask, token_type_ids])"),de=c(),K=a("li"),De=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),Y=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){p=r(u,"P",{});var F=i(p);q=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=l(u),g=r(u,"UL",{});var X=i(g);S=r(X,"LI",{});var st=i(S);_=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(X),$=r(X,"LI",{});var Ne=i($);A=s(Ne,"having all inputs as a list, tuple or dict in the first positional arguments."),Ne.forEach(t),X.forEach(t),z=l(u),E=r(u,"P",{});var Q=i(E);N=s(Q,"This second option is useful when using "),H=r(Q,"CODE",{});var Ve=i(H);ee=s(Ve,"tf.keras.Model.fit"),Ve.forEach(t),Fe=s(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=r(Q,"CODE",{});var _e=i(B);je=s(_e,"model(inputs)"),_e.forEach(t),$e=s(Q,"."),Q.forEach(t),M=l(u),J=r(u,"P",{});var at=i(J);te=s(at,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),at.forEach(t),ye=l(u),C=r(u,"UL",{});var G=i(C);P=r(G,"LI",{});var ce=i(P);Ce=s(ce,"a single Tensor with "),oe=r(ce,"CODE",{});var rt=i(oe);ne=s(rt,"input_ids"),rt.forEach(t),Pe=s(ce," only and nothing else: "),se=r(ce,"CODE",{});var Ue=i(se);ae=s(Ue,"model(input_ids)"),Ue.forEach(t),ce.forEach(t),Me=l(G),O=r(G,"LI",{});var j=i(O);Ee=s(j,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(j,"CODE",{});var it=i(L);Ae=s(it,"model([input_ids, attention_mask])"),it.forEach(t),re=s(j," or "),ie=r(j,"CODE",{});var qe=i(ie);Ie=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),j.forEach(t),de=l(G),K=r(G,"LI",{});var Le=i(K);De=s(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Le,"CODE",{});var dt=i(Z);Y=s(dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),dt.forEach(t),Le.forEach(t),G.forEach(t)},m(u,F){h(u,p,F),e(p,q),h(u,m,F),h(u,g,F),e(g,S),e(S,_),e(g,w),e(g,$),e($,A),h(u,z,F),h(u,E,F),e(E,N),e(E,H),e(H,ee),e(E,Fe),e(E,B),e(B,je),e(E,$e),h(u,M,F),h(u,J,F),e(J,te),h(u,ye,F),h(u,C,F),e(C,P),e(P,Ce),e(P,oe),e(oe,ne),e(P,Pe),e(P,se),e(se,ae),e(C,Me),e(C,O),e(O,Ee),e(O,L),e(L,Ae),e(O,re),e(O,ie),e(ie,Ie),e(C,de),e(C,K),e(K,De),e(K,Z),e(Z,Y)},d(u){u&&t(p),u&&t(m),u&&t(g),u&&t(z),u&&t(E),u&&t(M),u&&t(J),u&&t(ye),u&&t(C)}}}function wh(U){let p,q,m,g,S;return{c(){p=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=r(_,"P",{});var w=i(p);q=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var $=i(m);g=s($,"Module"),$.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(_,w){h(_,p,w),e(p,q),e(p,m),e(m,g),e(p,S)},d(_){_&&t(p)}}}function Sh(U){let p,q,m,g,S,_,w,$,A,z,E,N,H,ee,Fe,B,je,$e,M,J,te,ye,C,P,Ce,oe,ne,Pe,se,ae,Me,O,Ee,L,Ae,re,ie,Ie,de,K,De,Z,Y,u,F,X,st,Ne,Q,Ve,_e,at,G,ce,rt,Ue,j,it,qe,Le,dt,pn,tr,or,hn,nr,sr,fn,ar,rr,Zs,W,ir,Yn,dr,cr,Xn,lr,pr,Qn,hr,fr,Zn,ur,mr,es,_r,gr,Xt,Tr,vr,ts,xr,ea,un,os,kr,ta,Qt,oa,mn,Zt,ns,br,yr,le,wr,ss,Sr,$r,as,Er,qr,rs,zr,Fr,is,jr,Cr,ds,Pr,Mr,na,eo,sa,yt,Ar,to,Ir,Dr,aa,ct,wt,cs,oo,Nr,ls,Lr,ra,pe,no,Or,lt,Gr,_n,Wr,Vr,so,Ur,Rr,Hr,pt,Br,gn,Jr,Kr,Tn,Yr,Xr,Qr,ps,Zr,ei,ao,ia,ht,St,hs,ro,ti,fs,oi,da,V,io,ni,us,si,ai,co,ri,vn,ii,di,ci,$t,lo,li,ms,pi,hi,Et,po,fi,ho,ui,_s,mi,_i,gi,Re,fo,Ti,xn,vi,kn,xi,ki,gs,bi,yi,bn,uo,ca,ft,qt,Ts,mo,wi,vs,Si,la,he,_o,$i,xs,Ei,qi,go,zi,yn,Fi,ji,Ci,ks,Pi,Mi,zt,To,Ai,bs,Ii,pa,ut,Ft,ys,vo,Di,ws,Ni,ha,I,xo,Li,Ss,Oi,Gi,ge,wn,Wi,Vi,Sn,Ui,Ri,$n,Hi,Bi,ko,$s,Ji,Ki,Yi,En,Xi,Qi,Zi,jt,bo,ed,Oe,td,yo,Es,od,nd,sd,qn,ad,rd,wo,qs,id,dd,cd,ld,He,So,pd,zs,hd,fd,Ct,ud,Be,$o,md,Eo,_d,zn,gd,Td,vd,Pt,xd,Mt,qo,kd,zo,bd,Fn,yd,wd,Sd,At,Fo,$d,jo,Ed,jn,qd,zd,Fd,It,Co,jd,Fs,Cd,fa,mt,Dt,js,Po,Pd,Cs,Md,ua,we,Mo,Ad,Ao,Id,Cn,Dd,Nd,Ld,Io,Od,Do,Gd,Wd,Vd,Te,No,Ud,_t,Rd,Pn,Hd,Bd,Ps,Jd,Kd,Yd,Nt,Xd,Ms,Qd,Zd,Lo,ma,gt,Lt,As,Oo,ec,Is,tc,_a,Se,Go,oc,Wo,nc,Mn,sc,ac,rc,Vo,ic,Uo,dc,cc,lc,ve,Ro,pc,Tt,hc,An,fc,uc,Ds,mc,_c,gc,Ot,Tc,Ns,vc,xc,Ho,ga,vt,Gt,Ls,Bo,kc,Os,bc,Ta,fe,Jo,yc,Ko,wc,In,Sc,$c,Ec,Yo,qc,Xo,zc,Fc,jc,Wt,Cc,xe,Qo,Pc,xt,Mc,Dn,Ac,Ic,Gs,Dc,Nc,Lc,Vt,Oc,Ws,Gc,Wc,Zo,va,kt,Ut,Vs,en,Vc,Us,Uc,xa,ue,tn,Rc,on,Hc,Nn,Bc,Jc,Kc,nn,Yc,sn,Xc,Qc,Zc,Rt,el,ke,an,tl,bt,ol,Ln,nl,sl,Rs,al,rl,il,Ht,dl,Hs,cl,ll,rn,ka;return _=new We({}),ee=new We({}),X=new We({}),Qt=new ln({props:{code:`import torch
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

<span class="hljs-meta">&gt;&gt;&gt; </span>translation = processor.batch_decode(generated_ids)`}}),oo=new We({}),no=new D({props:{name:"class transformers.Speech2TextConfig",anchor:"transformers.Speech2TextConfig",parameters:[{name:"vocab_size",val:" = 10000"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 4"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 4"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_source_positions",val:" = 6000"},{name:"max_target_positions",val:" = 1024"},{name:"num_conv_layers",val:" = 2"},{name:"conv_kernel_sizes",val:" = (5, 5)"},{name:"conv_channels",val:" = 1024"},{name:"input_feat_per_channel",val:" = 80"},{name:"input_channels",val:" = 1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/configuration_speech_to_text.py#L29",parametersDescription:[{anchor:"transformers.Speech2TextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Speech2Text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextModel">Speech2TextModel</a>`,name:"vocab_size"},{anchor:"transformers.Speech2TextConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ro=new We({}),io=new D({props:{name:"class transformers.Speech2TextTokenizer",anchor:"transformers.Speech2TextTokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_upper_case",val:" = False"},{name:"do_lower_case",val:" = False"},{name:"tgt_lang",val:" = None"},{name:"lang_codes",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L55",parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional keyword arguments passed along to <a href="/docs/transformers/pr_16329/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"sp_model_kwargs"}]}}),lo=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.Speech2TextTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L195"}}),po=new D({props:{name:"get_special_tokens_mask",anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L202",parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fo=new D({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/tokenization_utils_base.py#L2856",parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),uo=new D({props:{name:"save_vocabulary",anchor:"transformers.Speech2TextTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L251"}}),mo=new We({}),_o=new D({props:{name:"class transformers.Speech2TextFeatureExtractor",anchor:"transformers.Speech2TextFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"num_mel_bins",val:" = 80"},{name:"padding_value",val:" = 0.0"},{name:"do_ceptral_normalize",val:" = True"},{name:"normalize_means",val:" = True"},{name:"normalize_vars",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L33",parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.Speech2TextFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.num_mel_bins",description:`<strong>num_mel_bins</strong> (<code>int</code>, defaults to 80) &#x2014;
Number of Mel-frequency bins.`,name:"num_mel_bins"},{anchor:"transformers.Speech2TextFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding vectors.`,name:"padding_value"},{anchor:"transformers.Speech2TextFeatureExtractor.do_ceptral_normalize",description:`<strong>do_ceptral_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to apply utterance-level cepstral mean and variance normalization to extracted features.`,name:"do_ceptral_normalize"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_means",description:`<strong>normalize_means</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to zero-mean normalize the extracted features.`,name:"normalize_means"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_vars",description:`<strong>normalize_vars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to unit-variance normalize the extracted features.`,name:"normalize_vars"}]}}),To=new D({props:{name:"__call__",anchor:"transformers.Speech2TextFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L126",parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
The sequence or batch of sequences to be padded. Each sequence can be a numpy array, a list of float
values, a list of numpy arrays or a list of list of float values.`,name:"raw_speech"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_16329/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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

					</div>`,name:"return_attention_mask"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_16329/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors.`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values / vectors.`,name:"padding_value"}]}}),vo=new We({}),xo=new D({props:{name:"class transformers.Speech2TextProcessor",anchor:"transformers.Speech2TextProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/processing_speech_to_text.py#L23",parametersDescription:[{anchor:"transformers.Speech2TextProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>Speech2TextFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2TextProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2TextTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}]}}),bo=new D({props:{name:"__call__",anchor:"transformers.Speech2TextProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/processing_speech_to_text.py#L45"}}),So=new D({props:{name:"from_pretrained",anchor:"transformers.Speech2TextProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/processing_utils.py#L156",parametersDescription:[{anchor:"transformers.Speech2TextProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/pr_16329/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/pr_16329/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}]}}),Ct=new Yt({props:{$$slots:{default:[gh]},$$scope:{ctx:U}}}),$o=new D({props:{name:"save_pretrained",anchor:"transformers.Speech2TextProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/processing_utils.py#L94",parametersDescription:[{anchor:"transformers.Speech2TextProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Speech2TextProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/pr_16329/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}]}}),Pt=new Yt({props:{$$slots:{default:[Th]},$$scope:{ctx:U}}}),qo=new D({props:{name:"batch_decode",anchor:"transformers.Speech2TextProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/processing_speech_to_text.py#L55"}}),Fo=new D({props:{name:"decode",anchor:"transformers.Speech2TextProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/processing_speech_to_text.py#L62"}}),Co=new D({props:{name:"as_target_processor",anchor:"transformers.Speech2TextProcessor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/processing_speech_to_text.py#L69"}}),Po=new We({}),Mo=new D({props:{name:"class transformers.Speech2TextModel",anchor:"transformers.Speech2TextModel",parameters:[{name:"config",val:": Speech2TextConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1116",parametersDescription:[{anchor:"transformers.Speech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16329/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),No=new D({props:{name:"forward",anchor:"transformers.Speech2TextModel.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1138",parametersDescription:[{anchor:"transformers.Speech2TextModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/pr_16329/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/pr_16329/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16329/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16329/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16329/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
  href="/docs/transformers/pr_16329/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nt=new Yt({props:{$$slots:{default:[vh]},$$scope:{ctx:U}}}),Lo=new ln({props:{code:`import torch
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
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">256</span>]`}}),Oo=new We({}),Go=new D({props:{name:"class transformers.Speech2TextForConditionalGeneration",anchor:"transformers.Speech2TextForConditionalGeneration",parameters:[{name:"config",val:": Speech2TextConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1247",parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16329/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ro=new D({props:{name:"forward",anchor:"transformers.Speech2TextForConditionalGeneration.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1284",parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/pr_16329/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/pr_16329/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16329/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16329/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16329/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
  href="/docs/transformers/pr_16329/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ot=new Yt({props:{$$slots:{default:[xh]},$$scope:{ctx:U}}}),Ho=new ln({props:{code:`import torch
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
<span class="hljs-string">&#x27;mister quilter is the apostle of the middle classes and we are glad to welcome his gospel&#x27;</span>`}}),Bo=new We({}),Jo=new D({props:{name:"class transformers.TFSpeech2TextModel",anchor:"transformers.TFSpeech2TextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1228",parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16329/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Wt=new Yt({props:{$$slots:{default:[kh]},$$scope:{ctx:U}}}),Qo=new D({props:{name:"call",anchor:"transformers.TFSpeech2TextModel.call",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1240",parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of floats. See <a href="/docs/transformers/pr_16329/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/pr_16329/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16329/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16329/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16329/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
  href="/docs/transformers/pr_16329/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vt=new Yt({props:{$$slots:{default:[bh]},$$scope:{ctx:U}}}),Zo=new ln({props:{code:`from transformers import Speech2TextTokenizer, TFSpeech2TextModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),en=new We({}),tn=new D({props:{name:"class transformers.TFSpeech2TextForConditionalGeneration",anchor:"transformers.TFSpeech2TextForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1311",parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16329/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Rt=new Yt({props:{$$slots:{default:[yh]},$$scope:{ctx:U}}}),an=new D({props:{name:"call",anchor:"transformers.TFSpeech2TextForConditionalGeneration.call",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16329/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1333",parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of floats. See <a href="/docs/transformers/pr_16329/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/pr_16329/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16329/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16329/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16329/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
  href="/docs/transformers/pr_16329/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ht=new Yt({props:{$$slots:{default:[wh]},$$scope:{ctx:U}}}),rn=new ln({props:{code:`import tensorflow as tf
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

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`}}),{c(){p=a("meta"),q=c(),m=a("h1"),g=a("a"),S=a("span"),T(_.$$.fragment),w=c(),$=a("span"),A=n("Speech2Text"),z=c(),E=a("h2"),N=a("a"),H=a("span"),T(ee.$$.fragment),Fe=c(),B=a("span"),je=n("Overview"),$e=c(),M=a("p"),J=n("The Speech2Text model was proposed in "),te=a("a"),ye=n("fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),C=n(` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),P=a("a"),Ce=n("LibriSpeech"),oe=n(", "),ne=a("a"),Pe=n("CoVoST 2"),se=n(", "),ae=a("a"),Me=n("MuST-C"),O=n("."),Ee=c(),L=a("p"),Ae=n("This model was contributed by "),re=a("a"),ie=n("valhalla"),Ie=n(". The original code can be found "),de=a("a"),K=n("here"),De=n("."),Z=c(),Y=a("h2"),u=a("a"),F=a("span"),T(X.$$.fragment),st=c(),Ne=a("span"),Q=n("Inference"),Ve=c(),_e=a("p"),at=n(`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),G=a("code"),ce=n("generate()"),rt=n(" method can be used for inference."),Ue=c(),j=a("p"),it=n("The "),qe=a("a"),Le=n("Speech2TextFeatureExtractor"),dt=n(` class is responsible for extracting the log-mel filter-bank
features. The `),pn=a("a"),tr=n("Speech2TextProcessor"),or=n(" wraps "),hn=a("a"),nr=n("Speech2TextFeatureExtractor"),sr=n(` and
`),fn=a("a"),ar=n("Speech2TextTokenizer"),rr=n(` into a single instance to both extract the input features and decode the
predicted token ids.`),Zs=c(),W=a("p"),ir=n("The feature extractor depends on "),Yn=a("code"),dr=n("torchaudio"),cr=n(" and the tokenizer depends on "),Xn=a("code"),lr=n("sentencepiece"),pr=n(` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),Qn=a("code"),hr=n('pip install transformers"[speech, sentencepiece]"'),fr=n(" or install the packages seperately with "),Zn=a("code"),ur=n("pip install torchaudio sentencepiece"),mr=n(". Also "),es=a("code"),_r=n("torchaudio"),gr=n(" requires the development version of the "),Xt=a("a"),Tr=n("libsndfile"),vr=n(` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),ts=a("code"),xr=n("apt install libsndfile1-dev"),ea=c(),un=a("ul"),os=a("li"),kr=n("ASR and Speech Translation"),ta=c(),T(Qt.$$.fragment),oa=c(),mn=a("ul"),Zt=a("li"),ns=a("p"),br=n("Multilingual speech translation"),yr=c(),le=a("p"),wr=n("For multilingual speech translation models, "),ss=a("code"),Sr=n("eos_token_id"),$r=n(" is used as the "),as=a("code"),Er=n("decoder_start_token_id"),qr=n(` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),rs=a("code"),zr=n("forced_bos_token_id"),Fr=n(" parameter to the "),is=a("code"),jr=n("generate()"),Cr=n(` method. The following
example shows how to transate English speech to French text using the `),ds=a("em"),Pr=n("facebook/s2t-medium-mustc-multilingual-st"),Mr=n(`
checkpoint.`),na=c(),T(eo.$$.fragment),sa=c(),yt=a("p"),Ar=n("See the "),to=a("a"),Ir=n("model hub"),Dr=n(" to look for Speech2Text checkpoints."),aa=c(),ct=a("h2"),wt=a("a"),cs=a("span"),T(oo.$$.fragment),Nr=c(),ls=a("span"),Lr=n("Speech2TextConfig"),ra=c(),pe=a("div"),T(no.$$.fragment),Or=c(),lt=a("p"),Gr=n("This is the configuration class to store the configuration of a "),_n=a("a"),Wr=n("Speech2TextModel"),Vr=n(`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),so=a("a"),Ur=n("facebook/s2t-small-librispeech-asr"),Rr=n(" architecture."),Hr=c(),pt=a("p"),Br=n("Configuration objects inherit from "),gn=a("a"),Jr=n("PretrainedConfig"),Kr=n(` and can be used to control the model outputs. Read the
documentation from `),Tn=a("a"),Yr=n("PretrainedConfig"),Xr=n(" for more information."),Qr=c(),ps=a("p"),Zr=n("Example:"),ei=c(),T(ao.$$.fragment),ia=c(),ht=a("h2"),St=a("a"),hs=a("span"),T(ro.$$.fragment),ti=c(),fs=a("span"),oi=n("Speech2TextTokenizer"),da=c(),V=a("div"),T(io.$$.fragment),ni=c(),us=a("p"),si=n("Construct an Speech2Text tokenizer."),ai=c(),co=a("p"),ri=n("This tokenizer inherits from "),vn=a("a"),ii=n("PreTrainedTokenizer"),di=n(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),ci=c(),$t=a("div"),T(lo.$$.fragment),li=c(),ms=a("p"),pi=n("Build model inputs from a sequence by appending eos_token_id."),hi=c(),Et=a("div"),T(po.$$.fragment),fi=c(),ho=a("p"),ui=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_s=a("code"),mi=n("prepare_for_model"),_i=n(" method."),gi=c(),Re=a("div"),T(fo.$$.fragment),Ti=c(),xn=a("p"),vi=n("Create the token type IDs corresponding to the sequences passed. "),kn=a("a"),xi=n(`What are token type
IDs?`),ki=c(),gs=a("p"),bi=n("Should be overridden in a subclass if the model has a special way of building those."),yi=c(),bn=a("div"),T(uo.$$.fragment),ca=c(),ft=a("h2"),qt=a("a"),Ts=a("span"),T(mo.$$.fragment),wi=c(),vs=a("span"),Si=n("Speech2TextFeatureExtractor"),la=c(),he=a("div"),T(_o.$$.fragment),$i=c(),xs=a("p"),Ei=n("Constructs a Speech2Text feature extractor."),qi=c(),go=a("p"),zi=n("This feature extractor inherits from "),yn=a("a"),Fi=n("Speech2TextFeatureExtractor"),ji=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ci=c(),ks=a("p"),Pi=n(`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),Mi=c(),zt=a("div"),T(To.$$.fragment),Ai=c(),bs=a("p"),Ii=n("Main method to featurize and prepare for the model one or several sequence(s). sequences."),pa=c(),ut=a("h2"),Ft=a("a"),ys=a("span"),T(vo.$$.fragment),Di=c(),ws=a("span"),Ni=n("Speech2TextProcessor"),ha=c(),I=a("div"),T(xo.$$.fragment),Li=c(),Ss=a("p"),Oi=n(`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),Gi=c(),ge=a("p"),wn=a("a"),Wi=n("Speech2TextProcessor"),Vi=n(" offers all the functionalities of "),Sn=a("a"),Ui=n("Speech2TextFeatureExtractor"),Ri=n(` and
`),$n=a("a"),Hi=n("Speech2TextTokenizer"),Bi=n(". See the "),ko=a("a"),$s=a("strong"),Ji=n("call"),Ki=n("()"),Yi=n(" and "),En=a("a"),Xi=n("decode()"),Qi=n(` for more
information.`),Zi=c(),jt=a("div"),T(bo.$$.fragment),ed=c(),Oe=a("p"),td=n(`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),yo=a("a"),Es=a("strong"),od=n("call"),nd=n("()"),sd=n(` and returns its output. If used in the context
`),qn=a("a"),ad=n("as_target_processor()"),rd=n(` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),wo=a("a"),qs=a("strong"),id=n("call"),dd=n("()"),cd=n(`. Please refer to the doctsring of the above two methods for more
information.`),ld=c(),He=a("div"),T(So.$$.fragment),pd=c(),zs=a("p"),hd=n("Instantiate a processor associated with a pretrained model."),fd=c(),T(Ct.$$.fragment),ud=c(),Be=a("div"),T($o.$$.fragment),md=c(),Eo=a("p"),_d=n(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),zn=a("a"),gd=n("from_pretrained()"),Td=n(" method."),vd=c(),T(Pt.$$.fragment),xd=c(),Mt=a("div"),T(qo.$$.fragment),kd=c(),zo=a("p"),bd=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Fn=a("a"),yd=n("batch_decode()"),wd=n(`. Please
refer to the docstring of this method for more information.`),Sd=c(),At=a("div"),T(Fo.$$.fragment),$d=c(),jo=a("p"),Ed=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),jn=a("a"),qd=n("decode()"),zd=n(`. Please refer
to the docstring of this method for more information.`),Fd=c(),It=a("div"),T(Co.$$.fragment),jd=c(),Fs=a("p"),Cd=n(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text.`),fa=c(),mt=a("h2"),Dt=a("a"),js=a("span"),T(Po.$$.fragment),Pd=c(),Cs=a("span"),Md=n("Speech2TextModel"),ua=c(),we=a("div"),T(Mo.$$.fragment),Ad=c(),Ao=a("p"),Id=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Cn=a("a"),Dd=n("PreTrainedModel"),Nd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ld=c(),Io=a("p"),Od=n("This model is also a PyTorch "),Do=a("a"),Gd=n("torch.nn.Module"),Wd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vd=c(),Te=a("div"),T(No.$$.fragment),Ud=c(),_t=a("p"),Rd=n("The "),Pn=a("a"),Hd=n("Speech2TextModel"),Bd=n(" forward method, overrides the "),Ps=a("code"),Jd=n("__call__"),Kd=n(" special method."),Yd=c(),T(Nt.$$.fragment),Xd=c(),Ms=a("p"),Qd=n("Example:"),Zd=c(),T(Lo.$$.fragment),ma=c(),gt=a("h2"),Lt=a("a"),As=a("span"),T(Oo.$$.fragment),ec=c(),Is=a("span"),tc=n("Speech2TextForConditionalGeneration"),_a=c(),Se=a("div"),T(Go.$$.fragment),oc=c(),Wo=a("p"),nc=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Mn=a("a"),sc=n("PreTrainedModel"),ac=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rc=c(),Vo=a("p"),ic=n("This model is also a PyTorch "),Uo=a("a"),dc=n("torch.nn.Module"),cc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lc=c(),ve=a("div"),T(Ro.$$.fragment),pc=c(),Tt=a("p"),hc=n("The "),An=a("a"),fc=n("Speech2TextForConditionalGeneration"),uc=n(" forward method, overrides the "),Ds=a("code"),mc=n("__call__"),_c=n(" special method."),gc=c(),T(Ot.$$.fragment),Tc=c(),Ns=a("p"),vc=n("Example:"),xc=c(),T(Ho.$$.fragment),ga=c(),vt=a("h2"),Gt=a("a"),Ls=a("span"),T(Bo.$$.fragment),kc=c(),Os=a("span"),bc=n("TFSpeech2TextModel"),Ta=c(),fe=a("div"),T(Jo.$$.fragment),yc=c(),Ko=a("p"),wc=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),In=a("a"),Sc=n("TFPreTrainedModel"),$c=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ec=c(),Yo=a("p"),qc=n("This model is also a "),Xo=a("a"),zc=n("tf.keras.Model"),Fc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jc=c(),T(Wt.$$.fragment),Cc=c(),xe=a("div"),T(Qo.$$.fragment),Pc=c(),xt=a("p"),Mc=n("The "),Dn=a("a"),Ac=n("TFSpeech2TextModel"),Ic=n(" forward method, overrides the "),Gs=a("code"),Dc=n("__call__"),Nc=n(" special method."),Lc=c(),T(Vt.$$.fragment),Oc=c(),Ws=a("p"),Gc=n("Example:"),Wc=c(),T(Zo.$$.fragment),va=c(),kt=a("h2"),Ut=a("a"),Vs=a("span"),T(en.$$.fragment),Vc=c(),Us=a("span"),Uc=n("TFSpeech2TextForConditionalGeneration"),xa=c(),ue=a("div"),T(tn.$$.fragment),Rc=c(),on=a("p"),Hc=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Nn=a("a"),Bc=n("TFPreTrainedModel"),Jc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kc=c(),nn=a("p"),Yc=n("This model is also a "),sn=a("a"),Xc=n("tf.keras.Model"),Qc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zc=c(),T(Rt.$$.fragment),el=c(),ke=a("div"),T(an.$$.fragment),tl=c(),bt=a("p"),ol=n("The "),Ln=a("a"),nl=n("TFSpeech2TextForConditionalGeneration"),sl=n(" forward method, overrides the "),Rs=a("code"),al=n("__call__"),rl=n(" special method."),il=c(),T(Ht.$$.fragment),dl=c(),Hs=a("p"),cl=n("Example:"),ll=c(),T(rn.$$.fragment),this.h()},l(o){const f=mh('[data-svelte="svelte-1phssyn"]',document.head);p=r(f,"META",{name:!0,content:!0}),f.forEach(t),q=l(o),m=r(o,"H1",{class:!0});var dn=i(m);g=r(dn,"A",{id:!0,class:!0,href:!0});var Bs=i(g);S=r(Bs,"SPAN",{});var Js=i(S);v(_.$$.fragment,Js),Js.forEach(t),Bs.forEach(t),w=l(dn),$=r(dn,"SPAN",{});var Ks=i($);A=s(Ks,"Speech2Text"),Ks.forEach(t),dn.forEach(t),z=l(o),E=r(o,"H2",{class:!0});var cn=i(E);N=r(cn,"A",{id:!0,class:!0,href:!0});var Ys=i(N);H=r(Ys,"SPAN",{});var Xs=i(H);v(ee.$$.fragment,Xs),Xs.forEach(t),Ys.forEach(t),Fe=l(cn),B=r(cn,"SPAN",{});var Qs=i(B);je=s(Qs,"Overview"),Qs.forEach(t),cn.forEach(t),$e=l(o),M=r(o,"P",{});var Je=i(M);J=s(Je,"The Speech2Text model was proposed in "),te=r(Je,"A",{href:!0,rel:!0});var ml=i(te);ye=s(ml,"fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),ml.forEach(t),C=s(Je,` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),P=r(Je,"A",{href:!0,rel:!0});var _l=i(P);Ce=s(_l,"LibriSpeech"),_l.forEach(t),oe=s(Je,", "),ne=r(Je,"A",{href:!0,rel:!0});var gl=i(ne);Pe=s(gl,"CoVoST 2"),gl.forEach(t),se=s(Je,", "),ae=r(Je,"A",{href:!0,rel:!0});var Tl=i(ae);Me=s(Tl,"MuST-C"),Tl.forEach(t),O=s(Je,"."),Je.forEach(t),Ee=l(o),L=r(o,"P",{});var On=i(L);Ae=s(On,"This model was contributed by "),re=r(On,"A",{href:!0,rel:!0});var vl=i(re);ie=s(vl,"valhalla"),vl.forEach(t),Ie=s(On,". The original code can be found "),de=r(On,"A",{href:!0,rel:!0});var xl=i(de);K=s(xl,"here"),xl.forEach(t),De=s(On,"."),On.forEach(t),Z=l(o),Y=r(o,"H2",{class:!0});var ba=i(Y);u=r(ba,"A",{id:!0,class:!0,href:!0});var kl=i(u);F=r(kl,"SPAN",{});var bl=i(F);v(X.$$.fragment,bl),bl.forEach(t),kl.forEach(t),st=l(ba),Ne=r(ba,"SPAN",{});var yl=i(Ne);Q=s(yl,"Inference"),yl.forEach(t),ba.forEach(t),Ve=l(o),_e=r(o,"P",{});var ya=i(_e);at=s(ya,`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),G=r(ya,"CODE",{});var wl=i(G);ce=s(wl,"generate()"),wl.forEach(t),rt=s(ya," method can be used for inference."),ya.forEach(t),Ue=l(o),j=r(o,"P",{});var Ke=i(j);it=s(Ke,"The "),qe=r(Ke,"A",{href:!0});var Sl=i(qe);Le=s(Sl,"Speech2TextFeatureExtractor"),Sl.forEach(t),dt=s(Ke,` class is responsible for extracting the log-mel filter-bank
features. The `),pn=r(Ke,"A",{href:!0});var $l=i(pn);tr=s($l,"Speech2TextProcessor"),$l.forEach(t),or=s(Ke," wraps "),hn=r(Ke,"A",{href:!0});var El=i(hn);nr=s(El,"Speech2TextFeatureExtractor"),El.forEach(t),sr=s(Ke,` and
`),fn=r(Ke,"A",{href:!0});var ql=i(fn);ar=s(ql,"Speech2TextTokenizer"),ql.forEach(t),rr=s(Ke,` into a single instance to both extract the input features and decode the
predicted token ids.`),Ke.forEach(t),Zs=l(o),W=r(o,"P",{});var me=i(W);ir=s(me,"The feature extractor depends on "),Yn=r(me,"CODE",{});var zl=i(Yn);dr=s(zl,"torchaudio"),zl.forEach(t),cr=s(me," and the tokenizer depends on "),Xn=r(me,"CODE",{});var Fl=i(Xn);lr=s(Fl,"sentencepiece"),Fl.forEach(t),pr=s(me,` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),Qn=r(me,"CODE",{});var jl=i(Qn);hr=s(jl,'pip install transformers"[speech, sentencepiece]"'),jl.forEach(t),fr=s(me," or install the packages seperately with "),Zn=r(me,"CODE",{});var Cl=i(Zn);ur=s(Cl,"pip install torchaudio sentencepiece"),Cl.forEach(t),mr=s(me,". Also "),es=r(me,"CODE",{});var Pl=i(es);_r=s(Pl,"torchaudio"),Pl.forEach(t),gr=s(me," requires the development version of the "),Xt=r(me,"A",{href:!0,rel:!0});var Ml=i(Xt);Tr=s(Ml,"libsndfile"),Ml.forEach(t),vr=s(me,` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),ts=r(me,"CODE",{});var Al=i(ts);xr=s(Al,"apt install libsndfile1-dev"),Al.forEach(t),me.forEach(t),ea=l(o),un=r(o,"UL",{});var Il=i(un);os=r(Il,"LI",{});var Dl=i(os);kr=s(Dl,"ASR and Speech Translation"),Dl.forEach(t),Il.forEach(t),ta=l(o),v(Qt.$$.fragment,o),oa=l(o),mn=r(o,"UL",{});var Nl=i(mn);Zt=r(Nl,"LI",{});var wa=i(Zt);ns=r(wa,"P",{});var Ll=i(ns);br=s(Ll,"Multilingual speech translation"),Ll.forEach(t),yr=l(wa),le=r(wa,"P",{});var ze=i(le);wr=s(ze,"For multilingual speech translation models, "),ss=r(ze,"CODE",{});var Ol=i(ss);Sr=s(Ol,"eos_token_id"),Ol.forEach(t),$r=s(ze," is used as the "),as=r(ze,"CODE",{});var Gl=i(as);Er=s(Gl,"decoder_start_token_id"),Gl.forEach(t),qr=s(ze,` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),rs=r(ze,"CODE",{});var Wl=i(rs);zr=s(Wl,"forced_bos_token_id"),Wl.forEach(t),Fr=s(ze," parameter to the "),is=r(ze,"CODE",{});var Vl=i(is);jr=s(Vl,"generate()"),Vl.forEach(t),Cr=s(ze,` method. The following
example shows how to transate English speech to French text using the `),ds=r(ze,"EM",{});var Ul=i(ds);Pr=s(Ul,"facebook/s2t-medium-mustc-multilingual-st"),Ul.forEach(t),Mr=s(ze,`
checkpoint.`),ze.forEach(t),wa.forEach(t),Nl.forEach(t),na=l(o),v(eo.$$.fragment,o),sa=l(o),yt=r(o,"P",{});var Sa=i(yt);Ar=s(Sa,"See the "),to=r(Sa,"A",{href:!0,rel:!0});var Rl=i(to);Ir=s(Rl,"model hub"),Rl.forEach(t),Dr=s(Sa," to look for Speech2Text checkpoints."),Sa.forEach(t),aa=l(o),ct=r(o,"H2",{class:!0});var $a=i(ct);wt=r($a,"A",{id:!0,class:!0,href:!0});var Hl=i(wt);cs=r(Hl,"SPAN",{});var Bl=i(cs);v(oo.$$.fragment,Bl),Bl.forEach(t),Hl.forEach(t),Nr=l($a),ls=r($a,"SPAN",{});var Jl=i(ls);Lr=s(Jl,"Speech2TextConfig"),Jl.forEach(t),$a.forEach(t),ra=l(o),pe=r(o,"DIV",{class:!0});var Ye=i(pe);v(no.$$.fragment,Ye),Or=l(Ye),lt=r(Ye,"P",{});var Gn=i(lt);Gr=s(Gn,"This is the configuration class to store the configuration of a "),_n=r(Gn,"A",{href:!0});var Kl=i(_n);Wr=s(Kl,"Speech2TextModel"),Kl.forEach(t),Vr=s(Gn,`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),so=r(Gn,"A",{href:!0,rel:!0});var Yl=i(so);Ur=s(Yl,"facebook/s2t-small-librispeech-asr"),Yl.forEach(t),Rr=s(Gn," architecture."),Gn.forEach(t),Hr=l(Ye),pt=r(Ye,"P",{});var Wn=i(pt);Br=s(Wn,"Configuration objects inherit from "),gn=r(Wn,"A",{href:!0});var Xl=i(gn);Jr=s(Xl,"PretrainedConfig"),Xl.forEach(t),Kr=s(Wn,` and can be used to control the model outputs. Read the
documentation from `),Tn=r(Wn,"A",{href:!0});var Ql=i(Tn);Yr=s(Ql,"PretrainedConfig"),Ql.forEach(t),Xr=s(Wn," for more information."),Wn.forEach(t),Qr=l(Ye),ps=r(Ye,"P",{});var Zl=i(ps);Zr=s(Zl,"Example:"),Zl.forEach(t),ei=l(Ye),v(ao.$$.fragment,Ye),Ye.forEach(t),ia=l(o),ht=r(o,"H2",{class:!0});var Ea=i(ht);St=r(Ea,"A",{id:!0,class:!0,href:!0});var ep=i(St);hs=r(ep,"SPAN",{});var tp=i(hs);v(ro.$$.fragment,tp),tp.forEach(t),ep.forEach(t),ti=l(Ea),fs=r(Ea,"SPAN",{});var op=i(fs);oi=s(op,"Speech2TextTokenizer"),op.forEach(t),Ea.forEach(t),da=l(o),V=r(o,"DIV",{class:!0});var be=i(V);v(io.$$.fragment,be),ni=l(be),us=r(be,"P",{});var np=i(us);si=s(np,"Construct an Speech2Text tokenizer."),np.forEach(t),ai=l(be),co=r(be,"P",{});var qa=i(co);ri=s(qa,"This tokenizer inherits from "),vn=r(qa,"A",{href:!0});var sp=i(vn);ii=s(sp,"PreTrainedTokenizer"),sp.forEach(t),di=s(qa,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),qa.forEach(t),ci=l(be),$t=r(be,"DIV",{class:!0});var za=i($t);v(lo.$$.fragment,za),li=l(za),ms=r(za,"P",{});var ap=i(ms);pi=s(ap,"Build model inputs from a sequence by appending eos_token_id."),ap.forEach(t),za.forEach(t),hi=l(be),Et=r(be,"DIV",{class:!0});var Fa=i(Et);v(po.$$.fragment,Fa),fi=l(Fa),ho=r(Fa,"P",{});var ja=i(ho);ui=s(ja,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_s=r(ja,"CODE",{});var rp=i(_s);mi=s(rp,"prepare_for_model"),rp.forEach(t),_i=s(ja," method."),ja.forEach(t),Fa.forEach(t),gi=l(be),Re=r(be,"DIV",{class:!0});var Vn=i(Re);v(fo.$$.fragment,Vn),Ti=l(Vn),xn=r(Vn,"P",{});var pl=i(xn);vi=s(pl,"Create the token type IDs corresponding to the sequences passed. "),kn=r(pl,"A",{href:!0});var ip=i(kn);xi=s(ip,`What are token type
IDs?`),ip.forEach(t),pl.forEach(t),ki=l(Vn),gs=r(Vn,"P",{});var dp=i(gs);bi=s(dp,"Should be overridden in a subclass if the model has a special way of building those."),dp.forEach(t),Vn.forEach(t),yi=l(be),bn=r(be,"DIV",{class:!0});var cp=i(bn);v(uo.$$.fragment,cp),cp.forEach(t),be.forEach(t),ca=l(o),ft=r(o,"H2",{class:!0});var Ca=i(ft);qt=r(Ca,"A",{id:!0,class:!0,href:!0});var lp=i(qt);Ts=r(lp,"SPAN",{});var pp=i(Ts);v(mo.$$.fragment,pp),pp.forEach(t),lp.forEach(t),wi=l(Ca),vs=r(Ca,"SPAN",{});var hp=i(vs);Si=s(hp,"Speech2TextFeatureExtractor"),hp.forEach(t),Ca.forEach(t),la=l(o),he=r(o,"DIV",{class:!0});var Xe=i(he);v(_o.$$.fragment,Xe),$i=l(Xe),xs=r(Xe,"P",{});var fp=i(xs);Ei=s(fp,"Constructs a Speech2Text feature extractor."),fp.forEach(t),qi=l(Xe),go=r(Xe,"P",{});var Pa=i(go);zi=s(Pa,"This feature extractor inherits from "),yn=r(Pa,"A",{href:!0});var up=i(yn);Fi=s(up,"Speech2TextFeatureExtractor"),up.forEach(t),ji=s(Pa,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Pa.forEach(t),Ci=l(Xe),ks=r(Xe,"P",{});var mp=i(ks);Pi=s(mp,`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),mp.forEach(t),Mi=l(Xe),zt=r(Xe,"DIV",{class:!0});var Ma=i(zt);v(To.$$.fragment,Ma),Ai=l(Ma),bs=r(Ma,"P",{});var _p=i(bs);Ii=s(_p,"Main method to featurize and prepare for the model one or several sequence(s). sequences."),_p.forEach(t),Ma.forEach(t),Xe.forEach(t),pa=l(o),ut=r(o,"H2",{class:!0});var Aa=i(ut);Ft=r(Aa,"A",{id:!0,class:!0,href:!0});var gp=i(Ft);ys=r(gp,"SPAN",{});var Tp=i(ys);v(vo.$$.fragment,Tp),Tp.forEach(t),gp.forEach(t),Di=l(Aa),ws=r(Aa,"SPAN",{});var vp=i(ws);Ni=s(vp,"Speech2TextProcessor"),vp.forEach(t),Aa.forEach(t),ha=l(o),I=r(o,"DIV",{class:!0});var R=i(I);v(xo.$$.fragment,R),Li=l(R),Ss=r(R,"P",{});var xp=i(Ss);Oi=s(xp,`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),xp.forEach(t),Gi=l(R),ge=r(R,"P",{});var Ge=i(ge);wn=r(Ge,"A",{href:!0});var kp=i(wn);Wi=s(kp,"Speech2TextProcessor"),kp.forEach(t),Vi=s(Ge," offers all the functionalities of "),Sn=r(Ge,"A",{href:!0});var bp=i(Sn);Ui=s(bp,"Speech2TextFeatureExtractor"),bp.forEach(t),Ri=s(Ge,` and
`),$n=r(Ge,"A",{href:!0});var yp=i($n);Hi=s(yp,"Speech2TextTokenizer"),yp.forEach(t),Bi=s(Ge,". See the "),ko=r(Ge,"A",{href:!0});var hl=i(ko);$s=r(hl,"STRONG",{});var wp=i($s);Ji=s(wp,"call"),wp.forEach(t),Ki=s(hl,"()"),hl.forEach(t),Yi=s(Ge," and "),En=r(Ge,"A",{href:!0});var Sp=i(En);Xi=s(Sp,"decode()"),Sp.forEach(t),Qi=s(Ge,` for more
information.`),Ge.forEach(t),Zi=l(R),jt=r(R,"DIV",{class:!0});var Ia=i(jt);v(bo.$$.fragment,Ia),ed=l(Ia),Oe=r(Ia,"P",{});var Bt=i(Oe);td=s(Bt,`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),yo=r(Bt,"A",{href:!0});var fl=i(yo);Es=r(fl,"STRONG",{});var $p=i(Es);od=s($p,"call"),$p.forEach(t),nd=s(fl,"()"),fl.forEach(t),sd=s(Bt,` and returns its output. If used in the context
`),qn=r(Bt,"A",{href:!0});var Ep=i(qn);ad=s(Ep,"as_target_processor()"),Ep.forEach(t),rd=s(Bt,` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),wo=r(Bt,"A",{href:!0});var ul=i(wo);qs=r(ul,"STRONG",{});var qp=i(qs);id=s(qp,"call"),qp.forEach(t),dd=s(ul,"()"),ul.forEach(t),cd=s(Bt,`. Please refer to the doctsring of the above two methods for more
information.`),Bt.forEach(t),Ia.forEach(t),ld=l(R),He=r(R,"DIV",{class:!0});var Un=i(He);v(So.$$.fragment,Un),pd=l(Un),zs=r(Un,"P",{});var zp=i(zs);hd=s(zp,"Instantiate a processor associated with a pretrained model."),zp.forEach(t),fd=l(Un),v(Ct.$$.fragment,Un),Un.forEach(t),ud=l(R),Be=r(R,"DIV",{class:!0});var Rn=i(Be);v($o.$$.fragment,Rn),md=l(Rn),Eo=r(Rn,"P",{});var Da=i(Eo);_d=s(Da,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),zn=r(Da,"A",{href:!0});var Fp=i(zn);gd=s(Fp,"from_pretrained()"),Fp.forEach(t),Td=s(Da," method."),Da.forEach(t),vd=l(Rn),v(Pt.$$.fragment,Rn),Rn.forEach(t),xd=l(R),Mt=r(R,"DIV",{class:!0});var Na=i(Mt);v(qo.$$.fragment,Na),kd=l(Na),zo=r(Na,"P",{});var La=i(zo);bd=s(La,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Fn=r(La,"A",{href:!0});var jp=i(Fn);yd=s(jp,"batch_decode()"),jp.forEach(t),wd=s(La,`. Please
refer to the docstring of this method for more information.`),La.forEach(t),Na.forEach(t),Sd=l(R),At=r(R,"DIV",{class:!0});var Oa=i(At);v(Fo.$$.fragment,Oa),$d=l(Oa),jo=r(Oa,"P",{});var Ga=i(jo);Ed=s(Ga,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),jn=r(Ga,"A",{href:!0});var Cp=i(jn);qd=s(Cp,"decode()"),Cp.forEach(t),zd=s(Ga,`. Please refer
to the docstring of this method for more information.`),Ga.forEach(t),Oa.forEach(t),Fd=l(R),It=r(R,"DIV",{class:!0});var Wa=i(It);v(Co.$$.fragment,Wa),jd=l(Wa),Fs=r(Wa,"P",{});var Pp=i(Fs);Cd=s(Pp,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text.`),Pp.forEach(t),Wa.forEach(t),R.forEach(t),fa=l(o),mt=r(o,"H2",{class:!0});var Va=i(mt);Dt=r(Va,"A",{id:!0,class:!0,href:!0});var Mp=i(Dt);js=r(Mp,"SPAN",{});var Ap=i(js);v(Po.$$.fragment,Ap),Ap.forEach(t),Mp.forEach(t),Pd=l(Va),Cs=r(Va,"SPAN",{});var Ip=i(Cs);Md=s(Ip,"Speech2TextModel"),Ip.forEach(t),Va.forEach(t),ua=l(o),we=r(o,"DIV",{class:!0});var Jt=i(we);v(Mo.$$.fragment,Jt),Ad=l(Jt),Ao=r(Jt,"P",{});var Ua=i(Ao);Id=s(Ua,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Cn=r(Ua,"A",{href:!0});var Dp=i(Cn);Dd=s(Dp,"PreTrainedModel"),Dp.forEach(t),Nd=s(Ua,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ua.forEach(t),Ld=l(Jt),Io=r(Jt,"P",{});var Ra=i(Io);Od=s(Ra,"This model is also a PyTorch "),Do=r(Ra,"A",{href:!0,rel:!0});var Np=i(Do);Gd=s(Np,"torch.nn.Module"),Np.forEach(t),Wd=s(Ra,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ra.forEach(t),Vd=l(Jt),Te=r(Jt,"DIV",{class:!0});var Qe=i(Te);v(No.$$.fragment,Qe),Ud=l(Qe),_t=r(Qe,"P",{});var Hn=i(_t);Rd=s(Hn,"The "),Pn=r(Hn,"A",{href:!0});var Lp=i(Pn);Hd=s(Lp,"Speech2TextModel"),Lp.forEach(t),Bd=s(Hn," forward method, overrides the "),Ps=r(Hn,"CODE",{});var Op=i(Ps);Jd=s(Op,"__call__"),Op.forEach(t),Kd=s(Hn," special method."),Hn.forEach(t),Yd=l(Qe),v(Nt.$$.fragment,Qe),Xd=l(Qe),Ms=r(Qe,"P",{});var Gp=i(Ms);Qd=s(Gp,"Example:"),Gp.forEach(t),Zd=l(Qe),v(Lo.$$.fragment,Qe),Qe.forEach(t),Jt.forEach(t),ma=l(o),gt=r(o,"H2",{class:!0});var Ha=i(gt);Lt=r(Ha,"A",{id:!0,class:!0,href:!0});var Wp=i(Lt);As=r(Wp,"SPAN",{});var Vp=i(As);v(Oo.$$.fragment,Vp),Vp.forEach(t),Wp.forEach(t),ec=l(Ha),Is=r(Ha,"SPAN",{});var Up=i(Is);tc=s(Up,"Speech2TextForConditionalGeneration"),Up.forEach(t),Ha.forEach(t),_a=l(o),Se=r(o,"DIV",{class:!0});var Kt=i(Se);v(Go.$$.fragment,Kt),oc=l(Kt),Wo=r(Kt,"P",{});var Ba=i(Wo);nc=s(Ba,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Mn=r(Ba,"A",{href:!0});var Rp=i(Mn);sc=s(Rp,"PreTrainedModel"),Rp.forEach(t),ac=s(Ba,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ba.forEach(t),rc=l(Kt),Vo=r(Kt,"P",{});var Ja=i(Vo);ic=s(Ja,"This model is also a PyTorch "),Uo=r(Ja,"A",{href:!0,rel:!0});var Hp=i(Uo);dc=s(Hp,"torch.nn.Module"),Hp.forEach(t),cc=s(Ja,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ja.forEach(t),lc=l(Kt),ve=r(Kt,"DIV",{class:!0});var Ze=i(ve);v(Ro.$$.fragment,Ze),pc=l(Ze),Tt=r(Ze,"P",{});var Bn=i(Tt);hc=s(Bn,"The "),An=r(Bn,"A",{href:!0});var Bp=i(An);fc=s(Bp,"Speech2TextForConditionalGeneration"),Bp.forEach(t),uc=s(Bn," forward method, overrides the "),Ds=r(Bn,"CODE",{});var Jp=i(Ds);mc=s(Jp,"__call__"),Jp.forEach(t),_c=s(Bn," special method."),Bn.forEach(t),gc=l(Ze),v(Ot.$$.fragment,Ze),Tc=l(Ze),Ns=r(Ze,"P",{});var Kp=i(Ns);vc=s(Kp,"Example:"),Kp.forEach(t),xc=l(Ze),v(Ho.$$.fragment,Ze),Ze.forEach(t),Kt.forEach(t),ga=l(o),vt=r(o,"H2",{class:!0});var Ka=i(vt);Gt=r(Ka,"A",{id:!0,class:!0,href:!0});var Yp=i(Gt);Ls=r(Yp,"SPAN",{});var Xp=i(Ls);v(Bo.$$.fragment,Xp),Xp.forEach(t),Yp.forEach(t),kc=l(Ka),Os=r(Ka,"SPAN",{});var Qp=i(Os);bc=s(Qp,"TFSpeech2TextModel"),Qp.forEach(t),Ka.forEach(t),Ta=l(o),fe=r(o,"DIV",{class:!0});var et=i(fe);v(Jo.$$.fragment,et),yc=l(et),Ko=r(et,"P",{});var Ya=i(Ko);wc=s(Ya,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),In=r(Ya,"A",{href:!0});var Zp=i(In);Sc=s(Zp,"TFPreTrainedModel"),Zp.forEach(t),$c=s(Ya,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ya.forEach(t),Ec=l(et),Yo=r(et,"P",{});var Xa=i(Yo);qc=s(Xa,"This model is also a "),Xo=r(Xa,"A",{href:!0,rel:!0});var eh=i(Xo);zc=s(eh,"tf.keras.Model"),eh.forEach(t),Fc=s(Xa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xa.forEach(t),jc=l(et),v(Wt.$$.fragment,et),Cc=l(et),xe=r(et,"DIV",{class:!0});var tt=i(xe);v(Qo.$$.fragment,tt),Pc=l(tt),xt=r(tt,"P",{});var Jn=i(xt);Mc=s(Jn,"The "),Dn=r(Jn,"A",{href:!0});var th=i(Dn);Ac=s(th,"TFSpeech2TextModel"),th.forEach(t),Ic=s(Jn," forward method, overrides the "),Gs=r(Jn,"CODE",{});var oh=i(Gs);Dc=s(oh,"__call__"),oh.forEach(t),Nc=s(Jn," special method."),Jn.forEach(t),Lc=l(tt),v(Vt.$$.fragment,tt),Oc=l(tt),Ws=r(tt,"P",{});var nh=i(Ws);Gc=s(nh,"Example:"),nh.forEach(t),Wc=l(tt),v(Zo.$$.fragment,tt),tt.forEach(t),et.forEach(t),va=l(o),kt=r(o,"H2",{class:!0});var Qa=i(kt);Ut=r(Qa,"A",{id:!0,class:!0,href:!0});var sh=i(Ut);Vs=r(sh,"SPAN",{});var ah=i(Vs);v(en.$$.fragment,ah),ah.forEach(t),sh.forEach(t),Vc=l(Qa),Us=r(Qa,"SPAN",{});var rh=i(Us);Uc=s(rh,"TFSpeech2TextForConditionalGeneration"),rh.forEach(t),Qa.forEach(t),xa=l(o),ue=r(o,"DIV",{class:!0});var ot=i(ue);v(tn.$$.fragment,ot),Rc=l(ot),on=r(ot,"P",{});var Za=i(on);Hc=s(Za,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Nn=r(Za,"A",{href:!0});var ih=i(Nn);Bc=s(ih,"TFPreTrainedModel"),ih.forEach(t),Jc=s(Za,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Za.forEach(t),Kc=l(ot),nn=r(ot,"P",{});var er=i(nn);Yc=s(er,"This model is also a "),sn=r(er,"A",{href:!0,rel:!0});var dh=i(sn);Xc=s(dh,"tf.keras.Model"),dh.forEach(t),Qc=s(er,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),er.forEach(t),Zc=l(ot),v(Rt.$$.fragment,ot),el=l(ot),ke=r(ot,"DIV",{class:!0});var nt=i(ke);v(an.$$.fragment,nt),tl=l(nt),bt=r(nt,"P",{});var Kn=i(bt);ol=s(Kn,"The "),Ln=r(Kn,"A",{href:!0});var ch=i(Ln);nl=s(ch,"TFSpeech2TextForConditionalGeneration"),ch.forEach(t),sl=s(Kn," forward method, overrides the "),Rs=r(Kn,"CODE",{});var lh=i(Rs);al=s(lh,"__call__"),lh.forEach(t),rl=s(Kn," special method."),Kn.forEach(t),il=l(nt),v(Ht.$$.fragment,nt),dl=l(nt),Hs=r(nt,"P",{});var ph=i(Hs);cl=s(ph,"Example:"),ph.forEach(t),ll=l(nt),v(rn.$$.fragment,nt),nt.forEach(t),ot.forEach(t),this.h()},h(){d(p,"name","hf:doc:metadata"),d(p,"content",JSON.stringify($h)),d(g,"id","speech2text"),d(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(g,"href","#speech2text"),d(m,"class","relative group"),d(N,"id","overview"),d(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(N,"href","#overview"),d(E,"class","relative group"),d(te,"href","https://arxiv.org/abs/2010.05171"),d(te,"rel","nofollow"),d(P,"href","http://www.openslr.org/12"),d(P,"rel","nofollow"),d(ne,"href","https://github.com/facebookresearch/covost"),d(ne,"rel","nofollow"),d(ae,"href","https://ict.fbk.eu/must-c/"),d(ae,"rel","nofollow"),d(re,"href","https://huggingface.co/valhalla"),d(re,"rel","nofollow"),d(de,"href","https://github.com/pytorch/fairseq/tree/master/examples/speech_to_text"),d(de,"rel","nofollow"),d(u,"id","inference"),d(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(u,"href","#inference"),d(Y,"class","relative group"),d(qe,"href","/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d(pn,"href","/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),d(hn,"href","/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d(fn,"href","/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),d(Xt,"href","http://www.mega-nerd.com/libsndfile/"),d(Xt,"rel","nofollow"),d(to,"href","https://huggingface.co/models?filter=speech_to_text"),d(to,"rel","nofollow"),d(wt,"id","transformers.Speech2TextConfig"),d(wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(wt,"href","#transformers.Speech2TextConfig"),d(ct,"class","relative group"),d(_n,"href","/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextModel"),d(so,"href","https://huggingface.co/facebook/s2t-small-librispeech-asr"),d(so,"rel","nofollow"),d(gn,"href","/docs/transformers/pr_16329/en/main_classes/configuration#transformers.PretrainedConfig"),d(Tn,"href","/docs/transformers/pr_16329/en/main_classes/configuration#transformers.PretrainedConfig"),d(pe,"class","docstring"),d(St,"id","transformers.Speech2TextTokenizer"),d(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(St,"href","#transformers.Speech2TextTokenizer"),d(ht,"class","relative group"),d(vn,"href","/docs/transformers/pr_16329/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d($t,"class","docstring"),d(Et,"class","docstring"),d(kn,"href","../glossary#token-type-ids"),d(Re,"class","docstring"),d(bn,"class","docstring"),d(V,"class","docstring"),d(qt,"id","transformers.Speech2TextFeatureExtractor"),d(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qt,"href","#transformers.Speech2TextFeatureExtractor"),d(ft,"class","relative group"),d(yn,"href","/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d(zt,"class","docstring"),d(he,"class","docstring"),d(Ft,"id","transformers.Speech2TextProcessor"),d(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ft,"href","#transformers.Speech2TextProcessor"),d(ut,"class","relative group"),d(wn,"href","/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),d(Sn,"href","/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d($n,"href","/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),d(ko,"href","/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.__call__"),d(En,"href","/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.decode"),d(yo,"href","/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"),d(qn,"href","/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.as_target_processor"),d(wo,"href","/docs/transformers/pr_16329/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__"),d(jt,"class","docstring"),d(He,"class","docstring"),d(zn,"href","/docs/transformers/pr_16329/en/model_doc/trocr#transformers.TrOCRProcessor.from_pretrained"),d(Be,"class","docstring"),d(Fn,"href","/docs/transformers/pr_16329/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.batch_decode"),d(Mt,"class","docstring"),d(jn,"href","/docs/transformers/pr_16329/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.decode"),d(At,"class","docstring"),d(It,"class","docstring"),d(I,"class","docstring"),d(Dt,"id","transformers.Speech2TextModel"),d(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Dt,"href","#transformers.Speech2TextModel"),d(mt,"class","relative group"),d(Cn,"href","/docs/transformers/pr_16329/en/main_classes/model#transformers.PreTrainedModel"),d(Do,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Do,"rel","nofollow"),d(Pn,"href","/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextModel"),d(Te,"class","docstring"),d(we,"class","docstring"),d(Lt,"id","transformers.Speech2TextForConditionalGeneration"),d(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Lt,"href","#transformers.Speech2TextForConditionalGeneration"),d(gt,"class","relative group"),d(Mn,"href","/docs/transformers/pr_16329/en/main_classes/model#transformers.PreTrainedModel"),d(Uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Uo,"rel","nofollow"),d(An,"href","/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.Speech2TextForConditionalGeneration"),d(ve,"class","docstring"),d(Se,"class","docstring"),d(Gt,"id","transformers.TFSpeech2TextModel"),d(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Gt,"href","#transformers.TFSpeech2TextModel"),d(vt,"class","relative group"),d(In,"href","/docs/transformers/pr_16329/en/main_classes/model#transformers.TFPreTrainedModel"),d(Xo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Xo,"rel","nofollow"),d(Dn,"href","/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.TFSpeech2TextModel"),d(xe,"class","docstring"),d(fe,"class","docstring"),d(Ut,"id","transformers.TFSpeech2TextForConditionalGeneration"),d(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ut,"href","#transformers.TFSpeech2TextForConditionalGeneration"),d(kt,"class","relative group"),d(Nn,"href","/docs/transformers/pr_16329/en/main_classes/model#transformers.TFPreTrainedModel"),d(sn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(sn,"rel","nofollow"),d(Ln,"href","/docs/transformers/pr_16329/en/model_doc/speech_to_text#transformers.TFSpeech2TextForConditionalGeneration"),d(ke,"class","docstring"),d(ue,"class","docstring")},m(o,f){e(document.head,p),h(o,q,f),h(o,m,f),e(m,g),e(g,S),x(_,S,null),e(m,w),e(m,$),e($,A),h(o,z,f),h(o,E,f),e(E,N),e(N,H),x(ee,H,null),e(E,Fe),e(E,B),e(B,je),h(o,$e,f),h(o,M,f),e(M,J),e(M,te),e(te,ye),e(M,C),e(M,P),e(P,Ce),e(M,oe),e(M,ne),e(ne,Pe),e(M,se),e(M,ae),e(ae,Me),e(M,O),h(o,Ee,f),h(o,L,f),e(L,Ae),e(L,re),e(re,ie),e(L,Ie),e(L,de),e(de,K),e(L,De),h(o,Z,f),h(o,Y,f),e(Y,u),e(u,F),x(X,F,null),e(Y,st),e(Y,Ne),e(Ne,Q),h(o,Ve,f),h(o,_e,f),e(_e,at),e(_e,G),e(G,ce),e(_e,rt),h(o,Ue,f),h(o,j,f),e(j,it),e(j,qe),e(qe,Le),e(j,dt),e(j,pn),e(pn,tr),e(j,or),e(j,hn),e(hn,nr),e(j,sr),e(j,fn),e(fn,ar),e(j,rr),h(o,Zs,f),h(o,W,f),e(W,ir),e(W,Yn),e(Yn,dr),e(W,cr),e(W,Xn),e(Xn,lr),e(W,pr),e(W,Qn),e(Qn,hr),e(W,fr),e(W,Zn),e(Zn,ur),e(W,mr),e(W,es),e(es,_r),e(W,gr),e(W,Xt),e(Xt,Tr),e(W,vr),e(W,ts),e(ts,xr),h(o,ea,f),h(o,un,f),e(un,os),e(os,kr),h(o,ta,f),x(Qt,o,f),h(o,oa,f),h(o,mn,f),e(mn,Zt),e(Zt,ns),e(ns,br),e(Zt,yr),e(Zt,le),e(le,wr),e(le,ss),e(ss,Sr),e(le,$r),e(le,as),e(as,Er),e(le,qr),e(le,rs),e(rs,zr),e(le,Fr),e(le,is),e(is,jr),e(le,Cr),e(le,ds),e(ds,Pr),e(le,Mr),h(o,na,f),x(eo,o,f),h(o,sa,f),h(o,yt,f),e(yt,Ar),e(yt,to),e(to,Ir),e(yt,Dr),h(o,aa,f),h(o,ct,f),e(ct,wt),e(wt,cs),x(oo,cs,null),e(ct,Nr),e(ct,ls),e(ls,Lr),h(o,ra,f),h(o,pe,f),x(no,pe,null),e(pe,Or),e(pe,lt),e(lt,Gr),e(lt,_n),e(_n,Wr),e(lt,Vr),e(lt,so),e(so,Ur),e(lt,Rr),e(pe,Hr),e(pe,pt),e(pt,Br),e(pt,gn),e(gn,Jr),e(pt,Kr),e(pt,Tn),e(Tn,Yr),e(pt,Xr),e(pe,Qr),e(pe,ps),e(ps,Zr),e(pe,ei),x(ao,pe,null),h(o,ia,f),h(o,ht,f),e(ht,St),e(St,hs),x(ro,hs,null),e(ht,ti),e(ht,fs),e(fs,oi),h(o,da,f),h(o,V,f),x(io,V,null),e(V,ni),e(V,us),e(us,si),e(V,ai),e(V,co),e(co,ri),e(co,vn),e(vn,ii),e(co,di),e(V,ci),e(V,$t),x(lo,$t,null),e($t,li),e($t,ms),e(ms,pi),e(V,hi),e(V,Et),x(po,Et,null),e(Et,fi),e(Et,ho),e(ho,ui),e(ho,_s),e(_s,mi),e(ho,_i),e(V,gi),e(V,Re),x(fo,Re,null),e(Re,Ti),e(Re,xn),e(xn,vi),e(xn,kn),e(kn,xi),e(Re,ki),e(Re,gs),e(gs,bi),e(V,yi),e(V,bn),x(uo,bn,null),h(o,ca,f),h(o,ft,f),e(ft,qt),e(qt,Ts),x(mo,Ts,null),e(ft,wi),e(ft,vs),e(vs,Si),h(o,la,f),h(o,he,f),x(_o,he,null),e(he,$i),e(he,xs),e(xs,Ei),e(he,qi),e(he,go),e(go,zi),e(go,yn),e(yn,Fi),e(go,ji),e(he,Ci),e(he,ks),e(ks,Pi),e(he,Mi),e(he,zt),x(To,zt,null),e(zt,Ai),e(zt,bs),e(bs,Ii),h(o,pa,f),h(o,ut,f),e(ut,Ft),e(Ft,ys),x(vo,ys,null),e(ut,Di),e(ut,ws),e(ws,Ni),h(o,ha,f),h(o,I,f),x(xo,I,null),e(I,Li),e(I,Ss),e(Ss,Oi),e(I,Gi),e(I,ge),e(ge,wn),e(wn,Wi),e(ge,Vi),e(ge,Sn),e(Sn,Ui),e(ge,Ri),e(ge,$n),e($n,Hi),e(ge,Bi),e(ge,ko),e(ko,$s),e($s,Ji),e(ko,Ki),e(ge,Yi),e(ge,En),e(En,Xi),e(ge,Qi),e(I,Zi),e(I,jt),x(bo,jt,null),e(jt,ed),e(jt,Oe),e(Oe,td),e(Oe,yo),e(yo,Es),e(Es,od),e(yo,nd),e(Oe,sd),e(Oe,qn),e(qn,ad),e(Oe,rd),e(Oe,wo),e(wo,qs),e(qs,id),e(wo,dd),e(Oe,cd),e(I,ld),e(I,He),x(So,He,null),e(He,pd),e(He,zs),e(zs,hd),e(He,fd),x(Ct,He,null),e(I,ud),e(I,Be),x($o,Be,null),e(Be,md),e(Be,Eo),e(Eo,_d),e(Eo,zn),e(zn,gd),e(Eo,Td),e(Be,vd),x(Pt,Be,null),e(I,xd),e(I,Mt),x(qo,Mt,null),e(Mt,kd),e(Mt,zo),e(zo,bd),e(zo,Fn),e(Fn,yd),e(zo,wd),e(I,Sd),e(I,At),x(Fo,At,null),e(At,$d),e(At,jo),e(jo,Ed),e(jo,jn),e(jn,qd),e(jo,zd),e(I,Fd),e(I,It),x(Co,It,null),e(It,jd),e(It,Fs),e(Fs,Cd),h(o,fa,f),h(o,mt,f),e(mt,Dt),e(Dt,js),x(Po,js,null),e(mt,Pd),e(mt,Cs),e(Cs,Md),h(o,ua,f),h(o,we,f),x(Mo,we,null),e(we,Ad),e(we,Ao),e(Ao,Id),e(Ao,Cn),e(Cn,Dd),e(Ao,Nd),e(we,Ld),e(we,Io),e(Io,Od),e(Io,Do),e(Do,Gd),e(Io,Wd),e(we,Vd),e(we,Te),x(No,Te,null),e(Te,Ud),e(Te,_t),e(_t,Rd),e(_t,Pn),e(Pn,Hd),e(_t,Bd),e(_t,Ps),e(Ps,Jd),e(_t,Kd),e(Te,Yd),x(Nt,Te,null),e(Te,Xd),e(Te,Ms),e(Ms,Qd),e(Te,Zd),x(Lo,Te,null),h(o,ma,f),h(o,gt,f),e(gt,Lt),e(Lt,As),x(Oo,As,null),e(gt,ec),e(gt,Is),e(Is,tc),h(o,_a,f),h(o,Se,f),x(Go,Se,null),e(Se,oc),e(Se,Wo),e(Wo,nc),e(Wo,Mn),e(Mn,sc),e(Wo,ac),e(Se,rc),e(Se,Vo),e(Vo,ic),e(Vo,Uo),e(Uo,dc),e(Vo,cc),e(Se,lc),e(Se,ve),x(Ro,ve,null),e(ve,pc),e(ve,Tt),e(Tt,hc),e(Tt,An),e(An,fc),e(Tt,uc),e(Tt,Ds),e(Ds,mc),e(Tt,_c),e(ve,gc),x(Ot,ve,null),e(ve,Tc),e(ve,Ns),e(Ns,vc),e(ve,xc),x(Ho,ve,null),h(o,ga,f),h(o,vt,f),e(vt,Gt),e(Gt,Ls),x(Bo,Ls,null),e(vt,kc),e(vt,Os),e(Os,bc),h(o,Ta,f),h(o,fe,f),x(Jo,fe,null),e(fe,yc),e(fe,Ko),e(Ko,wc),e(Ko,In),e(In,Sc),e(Ko,$c),e(fe,Ec),e(fe,Yo),e(Yo,qc),e(Yo,Xo),e(Xo,zc),e(Yo,Fc),e(fe,jc),x(Wt,fe,null),e(fe,Cc),e(fe,xe),x(Qo,xe,null),e(xe,Pc),e(xe,xt),e(xt,Mc),e(xt,Dn),e(Dn,Ac),e(xt,Ic),e(xt,Gs),e(Gs,Dc),e(xt,Nc),e(xe,Lc),x(Vt,xe,null),e(xe,Oc),e(xe,Ws),e(Ws,Gc),e(xe,Wc),x(Zo,xe,null),h(o,va,f),h(o,kt,f),e(kt,Ut),e(Ut,Vs),x(en,Vs,null),e(kt,Vc),e(kt,Us),e(Us,Uc),h(o,xa,f),h(o,ue,f),x(tn,ue,null),e(ue,Rc),e(ue,on),e(on,Hc),e(on,Nn),e(Nn,Bc),e(on,Jc),e(ue,Kc),e(ue,nn),e(nn,Yc),e(nn,sn),e(sn,Xc),e(nn,Qc),e(ue,Zc),x(Rt,ue,null),e(ue,el),e(ue,ke),x(an,ke,null),e(ke,tl),e(ke,bt),e(bt,ol),e(bt,Ln),e(Ln,nl),e(bt,sl),e(bt,Rs),e(Rs,al),e(bt,rl),e(ke,il),x(Ht,ke,null),e(ke,dl),e(ke,Hs),e(Hs,cl),e(ke,ll),x(rn,ke,null),ka=!0},p(o,[f]){const dn={};f&2&&(dn.$$scope={dirty:f,ctx:o}),Ct.$set(dn);const Bs={};f&2&&(Bs.$$scope={dirty:f,ctx:o}),Pt.$set(Bs);const Js={};f&2&&(Js.$$scope={dirty:f,ctx:o}),Nt.$set(Js);const Ks={};f&2&&(Ks.$$scope={dirty:f,ctx:o}),Ot.$set(Ks);const cn={};f&2&&(cn.$$scope={dirty:f,ctx:o}),Wt.$set(cn);const Ys={};f&2&&(Ys.$$scope={dirty:f,ctx:o}),Vt.$set(Ys);const Xs={};f&2&&(Xs.$$scope={dirty:f,ctx:o}),Rt.$set(Xs);const Qs={};f&2&&(Qs.$$scope={dirty:f,ctx:o}),Ht.$set(Qs)},i(o){ka||(k(_.$$.fragment,o),k(ee.$$.fragment,o),k(X.$$.fragment,o),k(Qt.$$.fragment,o),k(eo.$$.fragment,o),k(oo.$$.fragment,o),k(no.$$.fragment,o),k(ao.$$.fragment,o),k(ro.$$.fragment,o),k(io.$$.fragment,o),k(lo.$$.fragment,o),k(po.$$.fragment,o),k(fo.$$.fragment,o),k(uo.$$.fragment,o),k(mo.$$.fragment,o),k(_o.$$.fragment,o),k(To.$$.fragment,o),k(vo.$$.fragment,o),k(xo.$$.fragment,o),k(bo.$$.fragment,o),k(So.$$.fragment,o),k(Ct.$$.fragment,o),k($o.$$.fragment,o),k(Pt.$$.fragment,o),k(qo.$$.fragment,o),k(Fo.$$.fragment,o),k(Co.$$.fragment,o),k(Po.$$.fragment,o),k(Mo.$$.fragment,o),k(No.$$.fragment,o),k(Nt.$$.fragment,o),k(Lo.$$.fragment,o),k(Oo.$$.fragment,o),k(Go.$$.fragment,o),k(Ro.$$.fragment,o),k(Ot.$$.fragment,o),k(Ho.$$.fragment,o),k(Bo.$$.fragment,o),k(Jo.$$.fragment,o),k(Wt.$$.fragment,o),k(Qo.$$.fragment,o),k(Vt.$$.fragment,o),k(Zo.$$.fragment,o),k(en.$$.fragment,o),k(tn.$$.fragment,o),k(Rt.$$.fragment,o),k(an.$$.fragment,o),k(Ht.$$.fragment,o),k(rn.$$.fragment,o),ka=!0)},o(o){b(_.$$.fragment,o),b(ee.$$.fragment,o),b(X.$$.fragment,o),b(Qt.$$.fragment,o),b(eo.$$.fragment,o),b(oo.$$.fragment,o),b(no.$$.fragment,o),b(ao.$$.fragment,o),b(ro.$$.fragment,o),b(io.$$.fragment,o),b(lo.$$.fragment,o),b(po.$$.fragment,o),b(fo.$$.fragment,o),b(uo.$$.fragment,o),b(mo.$$.fragment,o),b(_o.$$.fragment,o),b(To.$$.fragment,o),b(vo.$$.fragment,o),b(xo.$$.fragment,o),b(bo.$$.fragment,o),b(So.$$.fragment,o),b(Ct.$$.fragment,o),b($o.$$.fragment,o),b(Pt.$$.fragment,o),b(qo.$$.fragment,o),b(Fo.$$.fragment,o),b(Co.$$.fragment,o),b(Po.$$.fragment,o),b(Mo.$$.fragment,o),b(No.$$.fragment,o),b(Nt.$$.fragment,o),b(Lo.$$.fragment,o),b(Oo.$$.fragment,o),b(Go.$$.fragment,o),b(Ro.$$.fragment,o),b(Ot.$$.fragment,o),b(Ho.$$.fragment,o),b(Bo.$$.fragment,o),b(Jo.$$.fragment,o),b(Wt.$$.fragment,o),b(Qo.$$.fragment,o),b(Vt.$$.fragment,o),b(Zo.$$.fragment,o),b(en.$$.fragment,o),b(tn.$$.fragment,o),b(Rt.$$.fragment,o),b(an.$$.fragment,o),b(Ht.$$.fragment,o),b(rn.$$.fragment,o),ka=!1},d(o){t(p),o&&t(q),o&&t(m),y(_),o&&t(z),o&&t(E),y(ee),o&&t($e),o&&t(M),o&&t(Ee),o&&t(L),o&&t(Z),o&&t(Y),y(X),o&&t(Ve),o&&t(_e),o&&t(Ue),o&&t(j),o&&t(Zs),o&&t(W),o&&t(ea),o&&t(un),o&&t(ta),y(Qt,o),o&&t(oa),o&&t(mn),o&&t(na),y(eo,o),o&&t(sa),o&&t(yt),o&&t(aa),o&&t(ct),y(oo),o&&t(ra),o&&t(pe),y(no),y(ao),o&&t(ia),o&&t(ht),y(ro),o&&t(da),o&&t(V),y(io),y(lo),y(po),y(fo),y(uo),o&&t(ca),o&&t(ft),y(mo),o&&t(la),o&&t(he),y(_o),y(To),o&&t(pa),o&&t(ut),y(vo),o&&t(ha),o&&t(I),y(xo),y(bo),y(So),y(Ct),y($o),y(Pt),y(qo),y(Fo),y(Co),o&&t(fa),o&&t(mt),y(Po),o&&t(ua),o&&t(we),y(Mo),y(No),y(Nt),y(Lo),o&&t(ma),o&&t(gt),y(Oo),o&&t(_a),o&&t(Se),y(Go),y(Ro),y(Ot),y(Ho),o&&t(ga),o&&t(vt),y(Bo),o&&t(Ta),o&&t(fe),y(Jo),y(Wt),y(Qo),y(Vt),y(Zo),o&&t(va),o&&t(kt),y(en),o&&t(xa),o&&t(ue),y(tn),y(Rt),y(an),y(Ht),y(rn)}}}const $h={local:"speech2text",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.Speech2TextConfig",title:"Speech2TextConfig"},{local:"transformers.Speech2TextTokenizer",title:"Speech2TextTokenizer"},{local:"transformers.Speech2TextFeatureExtractor",title:"Speech2TextFeatureExtractor"},{local:"transformers.Speech2TextProcessor",title:"Speech2TextProcessor"},{local:"transformers.Speech2TextModel",title:"Speech2TextModel"},{local:"transformers.Speech2TextForConditionalGeneration",title:"Speech2TextForConditionalGeneration"},{local:"transformers.TFSpeech2TextModel",title:"TFSpeech2TextModel"},{local:"transformers.TFSpeech2TextForConditionalGeneration",title:"TFSpeech2TextForConditionalGeneration"}],title:"Speech2Text"};function Eh(U){return _h(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ph extends hh{constructor(p){super();fh(this,p,Eh,Sh,uh,{})}}export{Ph as default,$h as metadata};
