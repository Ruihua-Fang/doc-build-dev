import{S as lh,i as ph,s as hh,e as a,k as c,w as T,t as n,L as fh,c as r,d as t,m as l,a as i,x as v,h as s,b as d,J as e,g as h,y as k,q as x,o as b,B as y}from"../../chunks/vendor-9e2b328e.js";import{T as Yt}from"../../chunks/Tip-76f97a76.js";import{D as L}from"../../chunks/Docstring-50fd6873.js";import{C as cn}from"../../chunks/CodeBlock-b9ff96e9.js";import{I as We}from"../../chunks/IconCopyLink-fd0e58fd.js";import"../../chunks/CopyButton-4b97cbf7.js";function uh(G){let p,$,m,_,S,g,w,E;return{c(){p=a("p"),$=n(`This class method is simply calling the feature extractor
`),m=a("a"),_=n("from_pretrained()"),S=n(` and the tokenizer
`),g=a("code"),w=n("from_pretrained"),E=n(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(A){p=r(A,"P",{});var q=i(p);$=s(q,`This class method is simply calling the feature extractor
`),m=r(q,"A",{href:!0});var z=i(m);_=s(z,"from_pretrained()"),z.forEach(t),S=s(q,` and the tokenizer
`),g=r(q,"CODE",{});var D=i(g);w=s(D,"from_pretrained"),D.forEach(t),E=s(q,` methods. Please refer to the docstrings of the
methods above for more information.`),q.forEach(t),this.h()},h(){d(m,"href","/docs/transformers/pr_15678/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(A,q){h(A,p,q),e(p,$),e(p,m),e(m,_),e(p,S),e(p,g),e(g,w),e(p,E)},d(A){A&&t(p)}}}function mh(G){let p,$,m,_,S,g,w,E;return{c(){p=a("p"),$=n("This class method is simply calling "),m=a("a"),_=n("save_pretrained()"),S=n(` and
`),g=a("code"),w=n("save_pretrained"),E=n(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(A){p=r(A,"P",{});var q=i(p);$=s(q,"This class method is simply calling "),m=r(q,"A",{href:!0});var z=i(m);_=s(z,"save_pretrained()"),z.forEach(t),S=s(q,` and
`),g=r(q,"CODE",{});var D=i(g);w=s(D,"save_pretrained"),D.forEach(t),E=s(q,`. Please refer to the docstrings of the methods
above for more information.`),q.forEach(t),this.h()},h(){d(m,"href","/docs/transformers/pr_15678/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(A,q){h(A,p,q),e(p,$),e(p,m),e(m,_),e(p,S),e(p,g),e(g,w),e(p,E)},d(A){A&&t(p)}}}function _h(G){let p,$,m,_,S;return{c(){p=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),_=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=r(g,"P",{});var w=i(p);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var E=i(m);_=s(E,"Module"),E.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(g,w){h(g,p,w),e(p,$),e(p,m),e(m,_),e(p,S)},d(g){g&&t(p)}}}function gh(G){let p,$,m,_,S;return{c(){p=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),_=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=r(g,"P",{});var w=i(p);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var E=i(m);_=s(E,"Module"),E.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(g,w){h(g,p,w),e(p,$),e(p,m),e(m,_),e(p,S)},d(g){g&&t(p)}}}function Th(G){let p,$,m,_,S,g,w,E,A,q,z,D,R,ee,Fe,V,Pe,$e,M,J,te,ye,j,C,je,oe,ne,Ce,se,ae,Me,O,Ee,N,Ae,re,ie,Ie,de,K,De,Z,Y;return{c(){p=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),m=c(),_=a("ul"),S=a("li"),g=n("having all inputs as keyword arguments (like PyTorch models), or"),w=c(),E=a("li"),A=n("having all inputs as a list, tuple or dict in the first positional arguments."),q=c(),z=a("p"),D=n("This second option is useful when using "),R=a("code"),ee=n("tf.keras.Model.fit"),Fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),V=a("code"),Pe=n("model(inputs)"),$e=n("."),M=c(),J=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye=c(),j=a("ul"),C=a("li"),je=n("a single Tensor with "),oe=a("code"),ne=n("input_ids"),Ce=n(" only and nothing else: "),se=a("code"),ae=n("model(input_ids)"),Me=c(),O=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),Ae=n("model([input_ids, attention_mask])"),re=n(" or "),ie=a("code"),Ie=n("model([input_ids, attention_mask, token_type_ids])"),de=c(),K=a("li"),De=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),Y=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){p=r(u,"P",{});var F=i(p);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=l(u),_=r(u,"UL",{});var X=i(_);S=r(X,"LI",{});var st=i(S);g=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(X),E=r(X,"LI",{});var Ne=i(E);A=s(Ne,"having all inputs as a list, tuple or dict in the first positional arguments."),Ne.forEach(t),X.forEach(t),q=l(u),z=r(u,"P",{});var Q=i(z);D=s(Q,"This second option is useful when using "),R=r(Q,"CODE",{});var Ue=i(R);ee=s(Ue,"tf.keras.Model.fit"),Ue.forEach(t),Fe=s(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),V=r(Q,"CODE",{});var _e=i(V);Pe=s(_e,"model(inputs)"),_e.forEach(t),$e=s(Q,"."),Q.forEach(t),M=l(u),J=r(u,"P",{});var at=i(J);te=s(at,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),at.forEach(t),ye=l(u),j=r(u,"UL",{});var W=i(j);C=r(W,"LI",{});var ce=i(C);je=s(ce,"a single Tensor with "),oe=r(ce,"CODE",{});var rt=i(oe);ne=s(rt,"input_ids"),rt.forEach(t),Ce=s(ce," only and nothing else: "),se=r(ce,"CODE",{});var He=i(se);ae=s(He,"model(input_ids)"),He.forEach(t),ce.forEach(t),Me=l(W),O=r(W,"LI",{});var P=i(O);Ee=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(P,"CODE",{});var it=i(N);Ae=s(it,"model([input_ids, attention_mask])"),it.forEach(t),re=s(P," or "),ie=r(P,"CODE",{});var ze=i(ie);Ie=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),P.forEach(t),de=l(W),K=r(W,"LI",{});var Le=i(K);De=s(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Le,"CODE",{});var dt=i(Z);Y=s(dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),dt.forEach(t),Le.forEach(t),W.forEach(t)},m(u,F){h(u,p,F),e(p,$),h(u,m,F),h(u,_,F),e(_,S),e(S,g),e(_,w),e(_,E),e(E,A),h(u,q,F),h(u,z,F),e(z,D),e(z,R),e(R,ee),e(z,Fe),e(z,V),e(V,Pe),e(z,$e),h(u,M,F),h(u,J,F),e(J,te),h(u,ye,F),h(u,j,F),e(j,C),e(C,je),e(C,oe),e(oe,ne),e(C,Ce),e(C,se),e(se,ae),e(j,Me),e(j,O),e(O,Ee),e(O,N),e(N,Ae),e(O,re),e(O,ie),e(ie,Ie),e(j,de),e(j,K),e(K,De),e(K,Z),e(Z,Y)},d(u){u&&t(p),u&&t(m),u&&t(_),u&&t(q),u&&t(z),u&&t(M),u&&t(J),u&&t(ye),u&&t(j)}}}function vh(G){let p,$,m,_,S;return{c(){p=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),_=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=r(g,"P",{});var w=i(p);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var E=i(m);_=s(E,"Module"),E.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(g,w){h(g,p,w),e(p,$),e(p,m),e(m,_),e(p,S)},d(g){g&&t(p)}}}function kh(G){let p,$,m,_,S,g,w,E,A,q,z,D,R,ee,Fe,V,Pe,$e,M,J,te,ye,j,C,je,oe,ne,Ce,se,ae,Me,O,Ee,N,Ae,re,ie,Ie,de,K,De,Z,Y;return{c(){p=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),m=c(),_=a("ul"),S=a("li"),g=n("having all inputs as keyword arguments (like PyTorch models), or"),w=c(),E=a("li"),A=n("having all inputs as a list, tuple or dict in the first positional arguments."),q=c(),z=a("p"),D=n("This second option is useful when using "),R=a("code"),ee=n("tf.keras.Model.fit"),Fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),V=a("code"),Pe=n("model(inputs)"),$e=n("."),M=c(),J=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye=c(),j=a("ul"),C=a("li"),je=n("a single Tensor with "),oe=a("code"),ne=n("input_ids"),Ce=n(" only and nothing else: "),se=a("code"),ae=n("model(input_ids)"),Me=c(),O=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),Ae=n("model([input_ids, attention_mask])"),re=n(" or "),ie=a("code"),Ie=n("model([input_ids, attention_mask, token_type_ids])"),de=c(),K=a("li"),De=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),Y=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){p=r(u,"P",{});var F=i(p);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=l(u),_=r(u,"UL",{});var X=i(_);S=r(X,"LI",{});var st=i(S);g=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(X),E=r(X,"LI",{});var Ne=i(E);A=s(Ne,"having all inputs as a list, tuple or dict in the first positional arguments."),Ne.forEach(t),X.forEach(t),q=l(u),z=r(u,"P",{});var Q=i(z);D=s(Q,"This second option is useful when using "),R=r(Q,"CODE",{});var Ue=i(R);ee=s(Ue,"tf.keras.Model.fit"),Ue.forEach(t),Fe=s(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),V=r(Q,"CODE",{});var _e=i(V);Pe=s(_e,"model(inputs)"),_e.forEach(t),$e=s(Q,"."),Q.forEach(t),M=l(u),J=r(u,"P",{});var at=i(J);te=s(at,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),at.forEach(t),ye=l(u),j=r(u,"UL",{});var W=i(j);C=r(W,"LI",{});var ce=i(C);je=s(ce,"a single Tensor with "),oe=r(ce,"CODE",{});var rt=i(oe);ne=s(rt,"input_ids"),rt.forEach(t),Ce=s(ce," only and nothing else: "),se=r(ce,"CODE",{});var He=i(se);ae=s(He,"model(input_ids)"),He.forEach(t),ce.forEach(t),Me=l(W),O=r(W,"LI",{});var P=i(O);Ee=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(P,"CODE",{});var it=i(N);Ae=s(it,"model([input_ids, attention_mask])"),it.forEach(t),re=s(P," or "),ie=r(P,"CODE",{});var ze=i(ie);Ie=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),P.forEach(t),de=l(W),K=r(W,"LI",{});var Le=i(K);De=s(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Le,"CODE",{});var dt=i(Z);Y=s(dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),dt.forEach(t),Le.forEach(t),W.forEach(t)},m(u,F){h(u,p,F),e(p,$),h(u,m,F),h(u,_,F),e(_,S),e(S,g),e(_,w),e(_,E),e(E,A),h(u,q,F),h(u,z,F),e(z,D),e(z,R),e(R,ee),e(z,Fe),e(z,V),e(V,Pe),e(z,$e),h(u,M,F),h(u,J,F),e(J,te),h(u,ye,F),h(u,j,F),e(j,C),e(C,je),e(C,oe),e(oe,ne),e(C,Ce),e(C,se),e(se,ae),e(j,Me),e(j,O),e(O,Ee),e(O,N),e(N,Ae),e(O,re),e(O,ie),e(ie,Ie),e(j,de),e(j,K),e(K,De),e(K,Z),e(Z,Y)},d(u){u&&t(p),u&&t(m),u&&t(_),u&&t(q),u&&t(z),u&&t(M),u&&t(J),u&&t(ye),u&&t(j)}}}function xh(G){let p,$,m,_,S;return{c(){p=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),_=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=r(g,"P",{});var w=i(p);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var E=i(m);_=s(E,"Module"),E.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(g,w){h(g,p,w),e(p,$),e(p,m),e(m,_),e(p,S)},d(g){g&&t(p)}}}function bh(G){let p,$,m,_,S,g,w,E,A,q,z,D,R,ee,Fe,V,Pe,$e,M,J,te,ye,j,C,je,oe,ne,Ce,se,ae,Me,O,Ee,N,Ae,re,ie,Ie,de,K,De,Z,Y,u,F,X,st,Ne,Q,Ue,_e,at,W,ce,rt,He,P,it,ze,Le,dt,ln,er,tr,pn,or,nr,hn,sr,ar,Qs,U,rr,Jn,ir,dr,Kn,cr,lr,Yn,pr,hr,Xn,fr,ur,Qn,mr,_r,Xt,gr,Tr,Zn,vr,Zs,fn,es,kr,ea,Qt,ta,un,Zt,ts,xr,br,le,yr,os,wr,Sr,ns,$r,Er,ss,zr,qr,as,Fr,Pr,rs,jr,Cr,oa,eo,na,yt,Mr,to,Ar,Ir,sa,ct,wt,is,oo,Dr,ds,Nr,aa,pe,no,Lr,lt,Or,mn,Gr,Wr,so,Ur,Hr,Br,pt,Rr,_n,Vr,Jr,gn,Kr,Yr,Xr,cs,Qr,Zr,ao,ra,ht,St,ls,ro,ei,ps,ti,ia,H,io,oi,hs,ni,si,co,ai,Tn,ri,ii,di,$t,lo,ci,fs,li,pi,Et,po,hi,ho,fi,us,ui,mi,_i,Be,fo,gi,vn,Ti,kn,vi,ki,ms,xi,bi,_s,da,ft,zt,gs,uo,yi,Ts,wi,ca,he,mo,Si,vs,$i,Ei,_o,zi,xn,qi,Fi,Pi,ks,ji,Ci,qt,go,Mi,xs,Ai,la,ut,Ft,bs,To,Ii,ys,Di,pa,I,vo,Ni,ws,Li,Oi,ge,bn,Gi,Wi,yn,Ui,Hi,wn,Bi,Ri,ko,Ss,Vi,Ji,Ki,Sn,Yi,Xi,Qi,Pt,xo,Zi,Oe,ed,bo,$s,td,od,nd,$n,sd,ad,yo,Es,rd,id,dd,cd,Re,wo,ld,zs,pd,hd,jt,fd,Ve,So,ud,$o,md,En,_d,gd,Td,Ct,vd,Mt,Eo,kd,zo,xd,zn,bd,yd,wd,At,qo,Sd,Fo,$d,qn,Ed,zd,qd,It,Po,Fd,qs,Pd,ha,mt,Dt,Fs,jo,jd,Ps,Cd,fa,we,Co,Md,Mo,Ad,Fn,Id,Dd,Nd,Ao,Ld,Io,Od,Gd,Wd,Te,Do,Ud,_t,Hd,Pn,Bd,Rd,js,Vd,Jd,Kd,Nt,Yd,Cs,Xd,Qd,No,ua,gt,Lt,Ms,Lo,Zd,As,ec,ma,Se,Oo,tc,Go,oc,jn,nc,sc,ac,Wo,rc,Uo,ic,dc,cc,ve,Ho,lc,Tt,pc,Cn,hc,fc,Is,uc,mc,_c,Ot,gc,Ds,Tc,vc,Bo,_a,vt,Gt,Ns,Ro,kc,Ls,xc,ga,fe,Vo,bc,Jo,yc,Mn,wc,Sc,$c,Ko,Ec,Yo,zc,qc,Fc,Wt,Pc,ke,Xo,jc,kt,Cc,An,Mc,Ac,Os,Ic,Dc,Nc,Ut,Lc,Gs,Oc,Gc,Qo,Ta,xt,Ht,Ws,Zo,Wc,Us,Uc,va,ue,en,Hc,tn,Bc,In,Rc,Vc,Jc,on,Kc,nn,Yc,Xc,Qc,Bt,Zc,xe,sn,el,bt,tl,Dn,ol,nl,Hs,sl,al,rl,Rt,il,Bs,dl,cl,an,ka;return g=new We({}),ee=new We({}),X=new We({}),Qt=new cn({props:{code:`import torch
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

transcription = processor.batch_decode(generated_ids),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
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

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`}}),eo=new cn({props:{code:`import torch
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

translation = processor.batch_decode(generated_ids),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
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

<span class="hljs-meta">&gt;&gt;&gt; </span>translation = processor.batch_decode(generated_ids)`}}),oo=new We({}),no=new L({props:{name:"class transformers.Speech2TextConfig",anchor:"transformers.Speech2TextConfig",parameters:[{name:"vocab_size",val:" = 10000"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 4"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 4"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_source_positions",val:" = 6000"},{name:"max_target_positions",val:" = 1024"},{name:"num_conv_layers",val:" = 2"},{name:"conv_kernel_sizes",val:" = (5, 5)"},{name:"conv_channels",val:" = 1024"},{name:"input_feat_per_channel",val:" = 80"},{name:"input_channels",val:" = 1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/speech_to_text/configuration_speech_to_text.py#L29",parametersDescription:[{anchor:"transformers.Speech2TextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Speech2Text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextModel">Speech2TextModel</a>`,name:"vocab_size"},{anchor:"transformers.Speech2TextConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
An integer specifying number of input channels of the input feature vector.`,name:"input_channels"}]}}),ao=new cn({props:{code:`from transformers import Speech2TextModel, Speech2TextConfig

# Initializing a Speech2Text s2t_transformer_s style configuration
configuration = Speech2TextConfig()

# Initializing a model from the s2t_transformer_s style configuration
model = Speech2TextModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextModel, Speech2TextConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Speech2Text s2t_transformer_s style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Speech2TextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the s2t_transformer_s style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ro=new We({}),io=new L({props:{name:"class transformers.Speech2TextTokenizer",anchor:"transformers.Speech2TextTokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_upper_case",val:" = False"},{name:"do_lower_case",val:" = False"},{name:"tgt_lang",val:" = None"},{name:"lang_codes",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L55",parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),lo=new L({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.Speech2TextTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L195"}}),po=new L({props:{name:"get_special_tokens_mask",anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L202",parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fo=new L({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/tokenization_utils_base.py#L2864",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),uo=new We({}),mo=new L({props:{name:"class transformers.Speech2TextFeatureExtractor",anchor:"transformers.Speech2TextFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"num_mel_bins",val:" = 80"},{name:"padding_value",val:" = 0.0"},{name:"do_ceptral_normalize",val:" = True"},{name:"normalize_means",val:" = True"},{name:"normalize_vars",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L34",parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.Speech2TextFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.num_mel_bins",description:`<strong>num_mel_bins</strong> (<code>int</code>, defaults to 80) &#x2014;
Number of Mel-frequency bins.`,name:"num_mel_bins"},{anchor:"transformers.Speech2TextFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding vectors.`,name:"padding_value"},{anchor:"transformers.Speech2TextFeatureExtractor.do_ceptral_normalize",description:`<strong>do_ceptral_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to apply utterance-level cepstral mean and variance normalization to extracted features.`,name:"do_ceptral_normalize"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_means",description:`<strong>normalize_means</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to zero-mean normalize the extracted features.`,name:"normalize_means"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_vars",description:`<strong>normalize_vars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to unit-variance normalize the extracted features.`,name:"normalize_vars"}]}}),go=new L({props:{name:"__call__",anchor:"transformers.Speech2TextFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.file_utils.PaddingStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L127",parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
The sequence or batch of sequences to be padded. Each sequence can be a numpy array, a list of float
values, a list of numpy arrays or a list of list of float values.`,name:"raw_speech"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_15678/en/internal/file_utils#transformers.file_utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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

					</div>`,name:"return_attention_mask"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_15678/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors.`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values / vectors.`,name:"padding_value"}]}}),To=new We({}),vo=new L({props:{name:"class transformers.Speech2TextProcessor",anchor:"transformers.Speech2TextProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/speech_to_text/processing_speech_to_text.py#L23",parametersDescription:[{anchor:"transformers.Speech2TextProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>Speech2TextFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2TextProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2TextTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}]}}),xo=new L({props:{name:"__call__",anchor:"transformers.Speech2TextProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/speech_to_text/processing_speech_to_text.py#L45"}}),wo=new L({props:{name:"from_pretrained",anchor:"transformers.ProcessorMixin.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/processing_utils.py#L157",parametersDescription:[{anchor:"transformers.ProcessorMixin.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/pr_15678/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/pr_15678/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}]}}),jt=new Yt({props:{$$slots:{default:[uh]},$$scope:{ctx:G}}}),So=new L({props:{name:"save_pretrained",anchor:"transformers.ProcessorMixin.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/processing_utils.py#L95",parametersDescription:[{anchor:"transformers.ProcessorMixin.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.ProcessorMixin.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/pr_15678/en/main_classes/model#transformers.file_utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}]}}),Ct=new Yt({props:{$$slots:{default:[mh]},$$scope:{ctx:G}}}),Eo=new L({props:{name:"batch_decode",anchor:"transformers.Speech2TextProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/speech_to_text/processing_speech_to_text.py#L55"}}),qo=new L({props:{name:"decode",anchor:"transformers.Speech2TextProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/speech_to_text/processing_speech_to_text.py#L62"}}),Po=new L({props:{name:"as_target_processor",anchor:"transformers.Speech2TextProcessor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/speech_to_text/processing_speech_to_text.py#L69"}}),jo=new We({}),Co=new L({props:{name:"class transformers.Speech2TextModel",anchor:"transformers.Speech2TextModel",parameters:[{name:"config",val:": Speech2TextConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1124",parametersDescription:[{anchor:"transformers.Speech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_15678/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Do=new L({props:{name:"forward",anchor:"transformers.Speech2TextModel.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1146",parametersDescription:[{anchor:"transformers.Speech2TextModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/pr_15678/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/pr_15678/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15678/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15678/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
>Speech2TextConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
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
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nt=new Yt({props:{$$slots:{default:[_h]},$$scope:{ctx:G}}}),No=new cn({props:{code:`from transformers import Speech2TextTokenizer, Speech2TextModel
import torch

tokenizer = Speech2TextTokenizer.from_pretrained("facebook/s2t-small-librispeech-asr")
model = Speech2TextModel.from_pretrained("facebook/s2t-small-librispeech-asr")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextTokenizer, Speech2TextModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = Speech2TextTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextModel.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Lo=new We({}),Oo=new L({props:{name:"class transformers.Speech2TextForConditionalGeneration",anchor:"transformers.Speech2TextForConditionalGeneration",parameters:[{name:"config",val:": Speech2TextConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1237",parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_15678/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ho=new L({props:{name:"forward",anchor:"transformers.Speech2TextForConditionalGeneration.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1274",parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/pr_15678/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/pr_15678/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15678/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15678/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ot=new Yt({props:{$$slots:{default:[gh]},$$scope:{ctx:G}}}),Bo=new cn({props:{code:`import torch
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

input_features = processor(
    ds["speech"][0], sampling_rate=16000, return_tensors="pt"
).input_features  # Batch size 1
generated_ids = model.generate(inputs=input_features)

transcription = processor.batch_decode(generated_ids),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
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

<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = processor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], sampling_rate=<span class="hljs-number">16000</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_features  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs=input_features)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`}}),Ro=new We({}),Vo=new L({props:{name:"class transformers.TFSpeech2TextModel",anchor:"transformers.TFSpeech2TextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1288",parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_15678/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Wt=new Yt({props:{$$slots:{default:[Th]},$$scope:{ctx:G}}}),Xo=new L({props:{name:"call",anchor:"transformers.TFSpeech2TextModel.call",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1300",parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of floats. See <a href="/docs/transformers/pr_15678/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/pr_15678/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15678/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15678/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ut=new Yt({props:{$$slots:{default:[vh]},$$scope:{ctx:G}}}),Qo=new cn({props:{code:`from transformers import Speech2TextTokenizer, TFSpeech2TextModel
import tensorflow as tf

tokenizer = Speech2TextTokenizer.from_pretrained("facebook/s2t-small-librispeech-asr")
model = TFSpeech2TextModel.from_pretrained("facebook/s2t-small-librispeech-asr")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextTokenizer, TFSpeech2TextModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = Speech2TextTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFSpeech2TextModel.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Zo=new We({}),en=new L({props:{name:"class transformers.TFSpeech2TextForConditionalGeneration",anchor:"transformers.TFSpeech2TextForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1393",parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_15678/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bt=new Yt({props:{$$slots:{default:[kh]},$$scope:{ctx:G}}}),sn=new L({props:{name:"call",anchor:"transformers.TFSpeech2TextForConditionalGeneration.call",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15678/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1415",parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of floats. See <a href="/docs/transformers/pr_15678/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/pr_15678/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15678/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15678/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
  href="/docs/transformers/pr_15678/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Rt=new Yt({props:{$$slots:{default:[xh]},$$scope:{ctx:G}}}),an=new cn({props:{code:`import tensorflow as tf
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

transcription = processor.batch_decode(generated_ids),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
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

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`}}),{c(){p=a("meta"),$=c(),m=a("h1"),_=a("a"),S=a("span"),T(g.$$.fragment),w=c(),E=a("span"),A=n("Speech2Text"),q=c(),z=a("h2"),D=a("a"),R=a("span"),T(ee.$$.fragment),Fe=c(),V=a("span"),Pe=n("Overview"),$e=c(),M=a("p"),J=n("The Speech2Text model was proposed in "),te=a("a"),ye=n("fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),j=n(` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),C=a("a"),je=n("LibriSpeech"),oe=n(", "),ne=a("a"),Ce=n("CoVoST 2"),se=n(", "),ae=a("a"),Me=n("MuST-C"),O=n("."),Ee=c(),N=a("p"),Ae=n("This model was contributed by "),re=a("a"),ie=n("valhalla"),Ie=n(". The original code can be found "),de=a("a"),K=n("here"),De=n("."),Z=c(),Y=a("h2"),u=a("a"),F=a("span"),T(X.$$.fragment),st=c(),Ne=a("span"),Q=n("Inference"),Ue=c(),_e=a("p"),at=n(`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),W=a("code"),ce=n("generate()"),rt=n(" method can be used for inference."),He=c(),P=a("p"),it=n("The "),ze=a("a"),Le=n("Speech2TextFeatureExtractor"),dt=n(` class is responsible for extracting the log-mel filter-bank
features. The `),ln=a("a"),er=n("Speech2TextProcessor"),tr=n(" wraps "),pn=a("a"),or=n("Speech2TextFeatureExtractor"),nr=n(` and
`),hn=a("a"),sr=n("Speech2TextTokenizer"),ar=n(` into a single instance to both extract the input features and decode the
predicted token ids.`),Qs=c(),U=a("p"),rr=n("The feature extractor depends on "),Jn=a("code"),ir=n("torchaudio"),dr=n(" and the tokenizer depends on "),Kn=a("code"),cr=n("sentencepiece"),lr=n(` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),Yn=a("code"),pr=n('pip install transformers"[speech, sentencepiece]"'),hr=n(" or install the packages seperately with "),Xn=a("code"),fr=n("pip install torchaudio sentencepiece"),ur=n(". Also "),Qn=a("code"),mr=n("torchaudio"),_r=n(" requires the development version of the "),Xt=a("a"),gr=n("libsndfile"),Tr=n(` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),Zn=a("code"),vr=n("apt install libsndfile1-dev"),Zs=c(),fn=a("ul"),es=a("li"),kr=n("ASR and Speech Translation"),ea=c(),T(Qt.$$.fragment),ta=c(),un=a("ul"),Zt=a("li"),ts=a("p"),xr=n("Multilingual speech translation"),br=c(),le=a("p"),yr=n("For multilingual speech translation models, "),os=a("code"),wr=n("eos_token_id"),Sr=n(" is used as the "),ns=a("code"),$r=n("decoder_start_token_id"),Er=n(` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),ss=a("code"),zr=n("forced_bos_token_id"),qr=n(" parameter to the "),as=a("code"),Fr=n("generate()"),Pr=n(` method. The following
example shows how to transate English speech to French text using the `),rs=a("em"),jr=n("facebook/s2t-medium-mustc-multilingual-st"),Cr=n(`
checkpoint.`),oa=c(),T(eo.$$.fragment),na=c(),yt=a("p"),Mr=n("See the "),to=a("a"),Ar=n("model hub"),Ir=n(" to look for Speech2Text checkpoints."),sa=c(),ct=a("h2"),wt=a("a"),is=a("span"),T(oo.$$.fragment),Dr=c(),ds=a("span"),Nr=n("Speech2TextConfig"),aa=c(),pe=a("div"),T(no.$$.fragment),Lr=c(),lt=a("p"),Or=n("This is the configuration class to store the configuration of a "),mn=a("a"),Gr=n("Speech2TextModel"),Wr=n(`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),so=a("a"),Ur=n("facebook/s2t-small-librispeech-asr"),Hr=n(" architecture."),Br=c(),pt=a("p"),Rr=n("Configuration objects inherit from "),_n=a("a"),Vr=n("PretrainedConfig"),Jr=n(` and can be used to control the model outputs. Read the
documentation from `),gn=a("a"),Kr=n("PretrainedConfig"),Yr=n(" for more information."),Xr=c(),cs=a("p"),Qr=n("Example:"),Zr=c(),T(ao.$$.fragment),ra=c(),ht=a("h2"),St=a("a"),ls=a("span"),T(ro.$$.fragment),ei=c(),ps=a("span"),ti=n("Speech2TextTokenizer"),ia=c(),H=a("div"),T(io.$$.fragment),oi=c(),hs=a("p"),ni=n("Construct an Speech2Text tokenizer."),si=c(),co=a("p"),ai=n("This tokenizer inherits from "),Tn=a("a"),ri=n("PreTrainedTokenizer"),ii=n(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),di=c(),$t=a("div"),T(lo.$$.fragment),ci=c(),fs=a("p"),li=n("Build model inputs from a sequence by appending eos_token_id."),pi=c(),Et=a("div"),T(po.$$.fragment),hi=c(),ho=a("p"),fi=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),us=a("code"),ui=n("prepare_for_model"),mi=n(" method."),_i=c(),Be=a("div"),T(fo.$$.fragment),gi=c(),vn=a("p"),Ti=n("Create the token type IDs corresponding to the sequences passed. "),kn=a("a"),vi=n(`What are token type
IDs?`),ki=c(),ms=a("p"),xi=n("Should be overridden in a subclass if the model has a special way of building those."),bi=c(),_s=a("div"),da=c(),ft=a("h2"),zt=a("a"),gs=a("span"),T(uo.$$.fragment),yi=c(),Ts=a("span"),wi=n("Speech2TextFeatureExtractor"),ca=c(),he=a("div"),T(mo.$$.fragment),Si=c(),vs=a("p"),$i=n("Constructs a Speech2Text feature extractor."),Ei=c(),_o=a("p"),zi=n("This feature extractor inherits from "),xn=a("a"),qi=n("Speech2TextFeatureExtractor"),Fi=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Pi=c(),ks=a("p"),ji=n(`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),Ci=c(),qt=a("div"),T(go.$$.fragment),Mi=c(),xs=a("p"),Ai=n("Main method to featurize and prepare for the model one or several sequence(s). sequences."),la=c(),ut=a("h2"),Ft=a("a"),bs=a("span"),T(To.$$.fragment),Ii=c(),ys=a("span"),Di=n("Speech2TextProcessor"),pa=c(),I=a("div"),T(vo.$$.fragment),Ni=c(),ws=a("p"),Li=n(`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),Oi=c(),ge=a("p"),bn=a("a"),Gi=n("Speech2TextProcessor"),Wi=n(" offers all the functionalities of "),yn=a("a"),Ui=n("Speech2TextFeatureExtractor"),Hi=n(` and
`),wn=a("a"),Bi=n("Speech2TextTokenizer"),Ri=n(". See the "),ko=a("a"),Ss=a("strong"),Vi=n("call"),Ji=n("()"),Ki=n(" and "),Sn=a("a"),Yi=n("decode()"),Xi=n(` for more
information.`),Qi=c(),Pt=a("div"),T(xo.$$.fragment),Zi=c(),Oe=a("p"),ed=n(`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),bo=a("a"),$s=a("strong"),td=n("call"),od=n("()"),nd=n(` and returns its output. If used in the context
`),$n=a("a"),sd=n("as_target_processor()"),ad=n(` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),yo=a("a"),Es=a("strong"),rd=n("call"),id=n("()"),dd=n(`. Please refer to the doctsring of the above two methods for more
information.`),cd=c(),Re=a("div"),T(wo.$$.fragment),ld=c(),zs=a("p"),pd=n("Instantiate a processor associated with a pretrained model."),hd=c(),T(jt.$$.fragment),fd=c(),Ve=a("div"),T(So.$$.fragment),ud=c(),$o=a("p"),md=n(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),En=a("a"),_d=n("from_pretrained()"),gd=n(" method."),Td=c(),T(Ct.$$.fragment),vd=c(),Mt=a("div"),T(Eo.$$.fragment),kd=c(),zo=a("p"),xd=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),zn=a("a"),bd=n("batch_decode()"),yd=n(`. Please
refer to the docstring of this method for more information.`),wd=c(),At=a("div"),T(qo.$$.fragment),Sd=c(),Fo=a("p"),$d=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),qn=a("a"),Ed=n("decode()"),zd=n(`. Please refer
to the docstring of this method for more information.`),qd=c(),It=a("div"),T(Po.$$.fragment),Fd=c(),qs=a("p"),Pd=n(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text.`),ha=c(),mt=a("h2"),Dt=a("a"),Fs=a("span"),T(jo.$$.fragment),jd=c(),Ps=a("span"),Cd=n("Speech2TextModel"),fa=c(),we=a("div"),T(Co.$$.fragment),Md=c(),Mo=a("p"),Ad=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Fn=a("a"),Id=n("PreTrainedModel"),Dd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nd=c(),Ao=a("p"),Ld=n("This model is also a PyTorch "),Io=a("a"),Od=n("torch.nn.Module"),Gd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wd=c(),Te=a("div"),T(Do.$$.fragment),Ud=c(),_t=a("p"),Hd=n("The "),Pn=a("a"),Bd=n("Speech2TextModel"),Rd=n(" forward method, overrides the "),js=a("code"),Vd=n("__call__"),Jd=n(" special method."),Kd=c(),T(Nt.$$.fragment),Yd=c(),Cs=a("p"),Xd=n("Example:"),Qd=c(),T(No.$$.fragment),ua=c(),gt=a("h2"),Lt=a("a"),Ms=a("span"),T(Lo.$$.fragment),Zd=c(),As=a("span"),ec=n("Speech2TextForConditionalGeneration"),ma=c(),Se=a("div"),T(Oo.$$.fragment),tc=c(),Go=a("p"),oc=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),jn=a("a"),nc=n("PreTrainedModel"),sc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ac=c(),Wo=a("p"),rc=n("This model is also a PyTorch "),Uo=a("a"),ic=n("torch.nn.Module"),dc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cc=c(),ve=a("div"),T(Ho.$$.fragment),lc=c(),Tt=a("p"),pc=n("The "),Cn=a("a"),hc=n("Speech2TextForConditionalGeneration"),fc=n(" forward method, overrides the "),Is=a("code"),uc=n("__call__"),mc=n(" special method."),_c=c(),T(Ot.$$.fragment),gc=c(),Ds=a("p"),Tc=n("Example:"),vc=c(),T(Bo.$$.fragment),_a=c(),vt=a("h2"),Gt=a("a"),Ns=a("span"),T(Ro.$$.fragment),kc=c(),Ls=a("span"),xc=n("TFSpeech2TextModel"),ga=c(),fe=a("div"),T(Vo.$$.fragment),bc=c(),Jo=a("p"),yc=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mn=a("a"),wc=n("TFPreTrainedModel"),Sc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$c=c(),Ko=a("p"),Ec=n("This model is also a "),Yo=a("a"),zc=n("tf.keras.Model"),qc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fc=c(),T(Wt.$$.fragment),Pc=c(),ke=a("div"),T(Xo.$$.fragment),jc=c(),kt=a("p"),Cc=n("The "),An=a("a"),Mc=n("TFSpeech2TextModel"),Ac=n(" forward method, overrides the "),Os=a("code"),Ic=n("__call__"),Dc=n(" special method."),Nc=c(),T(Ut.$$.fragment),Lc=c(),Gs=a("p"),Oc=n("Example:"),Gc=c(),T(Qo.$$.fragment),Ta=c(),xt=a("h2"),Ht=a("a"),Ws=a("span"),T(Zo.$$.fragment),Wc=c(),Us=a("span"),Uc=n("TFSpeech2TextForConditionalGeneration"),va=c(),ue=a("div"),T(en.$$.fragment),Hc=c(),tn=a("p"),Bc=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),In=a("a"),Rc=n("TFPreTrainedModel"),Vc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jc=c(),on=a("p"),Kc=n("This model is also a "),nn=a("a"),Yc=n("tf.keras.Model"),Xc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qc=c(),T(Bt.$$.fragment),Zc=c(),xe=a("div"),T(sn.$$.fragment),el=c(),bt=a("p"),tl=n("The "),Dn=a("a"),ol=n("TFSpeech2TextForConditionalGeneration"),nl=n(" forward method, overrides the "),Hs=a("code"),sl=n("__call__"),al=n(" special method."),rl=c(),T(Rt.$$.fragment),il=c(),Bs=a("p"),dl=n("Example:"),cl=c(),T(an.$$.fragment),this.h()},l(o){const f=fh('[data-svelte="svelte-1phssyn"]',document.head);p=r(f,"META",{name:!0,content:!0}),f.forEach(t),$=l(o),m=r(o,"H1",{class:!0});var rn=i(m);_=r(rn,"A",{id:!0,class:!0,href:!0});var Rs=i(_);S=r(Rs,"SPAN",{});var Vs=i(S);v(g.$$.fragment,Vs),Vs.forEach(t),Rs.forEach(t),w=l(rn),E=r(rn,"SPAN",{});var Js=i(E);A=s(Js,"Speech2Text"),Js.forEach(t),rn.forEach(t),q=l(o),z=r(o,"H2",{class:!0});var dn=i(z);D=r(dn,"A",{id:!0,class:!0,href:!0});var Ks=i(D);R=r(Ks,"SPAN",{});var Ys=i(R);v(ee.$$.fragment,Ys),Ys.forEach(t),Ks.forEach(t),Fe=l(dn),V=r(dn,"SPAN",{});var Xs=i(V);Pe=s(Xs,"Overview"),Xs.forEach(t),dn.forEach(t),$e=l(o),M=r(o,"P",{});var Je=i(M);J=s(Je,"The Speech2Text model was proposed in "),te=r(Je,"A",{href:!0,rel:!0});var ul=i(te);ye=s(ul,"fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),ul.forEach(t),j=s(Je,` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),C=r(Je,"A",{href:!0,rel:!0});var ml=i(C);je=s(ml,"LibriSpeech"),ml.forEach(t),oe=s(Je,", "),ne=r(Je,"A",{href:!0,rel:!0});var _l=i(ne);Ce=s(_l,"CoVoST 2"),_l.forEach(t),se=s(Je,", "),ae=r(Je,"A",{href:!0,rel:!0});var gl=i(ae);Me=s(gl,"MuST-C"),gl.forEach(t),O=s(Je,"."),Je.forEach(t),Ee=l(o),N=r(o,"P",{});var Nn=i(N);Ae=s(Nn,"This model was contributed by "),re=r(Nn,"A",{href:!0,rel:!0});var Tl=i(re);ie=s(Tl,"valhalla"),Tl.forEach(t),Ie=s(Nn,". The original code can be found "),de=r(Nn,"A",{href:!0,rel:!0});var vl=i(de);K=s(vl,"here"),vl.forEach(t),De=s(Nn,"."),Nn.forEach(t),Z=l(o),Y=r(o,"H2",{class:!0});var xa=i(Y);u=r(xa,"A",{id:!0,class:!0,href:!0});var kl=i(u);F=r(kl,"SPAN",{});var xl=i(F);v(X.$$.fragment,xl),xl.forEach(t),kl.forEach(t),st=l(xa),Ne=r(xa,"SPAN",{});var bl=i(Ne);Q=s(bl,"Inference"),bl.forEach(t),xa.forEach(t),Ue=l(o),_e=r(o,"P",{});var ba=i(_e);at=s(ba,`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),W=r(ba,"CODE",{});var yl=i(W);ce=s(yl,"generate()"),yl.forEach(t),rt=s(ba," method can be used for inference."),ba.forEach(t),He=l(o),P=r(o,"P",{});var Ke=i(P);it=s(Ke,"The "),ze=r(Ke,"A",{href:!0});var wl=i(ze);Le=s(wl,"Speech2TextFeatureExtractor"),wl.forEach(t),dt=s(Ke,` class is responsible for extracting the log-mel filter-bank
features. The `),ln=r(Ke,"A",{href:!0});var Sl=i(ln);er=s(Sl,"Speech2TextProcessor"),Sl.forEach(t),tr=s(Ke," wraps "),pn=r(Ke,"A",{href:!0});var $l=i(pn);or=s($l,"Speech2TextFeatureExtractor"),$l.forEach(t),nr=s(Ke,` and
`),hn=r(Ke,"A",{href:!0});var El=i(hn);sr=s(El,"Speech2TextTokenizer"),El.forEach(t),ar=s(Ke,` into a single instance to both extract the input features and decode the
predicted token ids.`),Ke.forEach(t),Qs=l(o),U=r(o,"P",{});var me=i(U);rr=s(me,"The feature extractor depends on "),Jn=r(me,"CODE",{});var zl=i(Jn);ir=s(zl,"torchaudio"),zl.forEach(t),dr=s(me," and the tokenizer depends on "),Kn=r(me,"CODE",{});var ql=i(Kn);cr=s(ql,"sentencepiece"),ql.forEach(t),lr=s(me,` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),Yn=r(me,"CODE",{});var Fl=i(Yn);pr=s(Fl,'pip install transformers"[speech, sentencepiece]"'),Fl.forEach(t),hr=s(me," or install the packages seperately with "),Xn=r(me,"CODE",{});var Pl=i(Xn);fr=s(Pl,"pip install torchaudio sentencepiece"),Pl.forEach(t),ur=s(me,". Also "),Qn=r(me,"CODE",{});var jl=i(Qn);mr=s(jl,"torchaudio"),jl.forEach(t),_r=s(me," requires the development version of the "),Xt=r(me,"A",{href:!0,rel:!0});var Cl=i(Xt);gr=s(Cl,"libsndfile"),Cl.forEach(t),Tr=s(me,` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),Zn=r(me,"CODE",{});var Ml=i(Zn);vr=s(Ml,"apt install libsndfile1-dev"),Ml.forEach(t),me.forEach(t),Zs=l(o),fn=r(o,"UL",{});var Al=i(fn);es=r(Al,"LI",{});var Il=i(es);kr=s(Il,"ASR and Speech Translation"),Il.forEach(t),Al.forEach(t),ea=l(o),v(Qt.$$.fragment,o),ta=l(o),un=r(o,"UL",{});var Dl=i(un);Zt=r(Dl,"LI",{});var ya=i(Zt);ts=r(ya,"P",{});var Nl=i(ts);xr=s(Nl,"Multilingual speech translation"),Nl.forEach(t),br=l(ya),le=r(ya,"P",{});var qe=i(le);yr=s(qe,"For multilingual speech translation models, "),os=r(qe,"CODE",{});var Ll=i(os);wr=s(Ll,"eos_token_id"),Ll.forEach(t),Sr=s(qe," is used as the "),ns=r(qe,"CODE",{});var Ol=i(ns);$r=s(Ol,"decoder_start_token_id"),Ol.forEach(t),Er=s(qe,` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),ss=r(qe,"CODE",{});var Gl=i(ss);zr=s(Gl,"forced_bos_token_id"),Gl.forEach(t),qr=s(qe," parameter to the "),as=r(qe,"CODE",{});var Wl=i(as);Fr=s(Wl,"generate()"),Wl.forEach(t),Pr=s(qe,` method. The following
example shows how to transate English speech to French text using the `),rs=r(qe,"EM",{});var Ul=i(rs);jr=s(Ul,"facebook/s2t-medium-mustc-multilingual-st"),Ul.forEach(t),Cr=s(qe,`
checkpoint.`),qe.forEach(t),ya.forEach(t),Dl.forEach(t),oa=l(o),v(eo.$$.fragment,o),na=l(o),yt=r(o,"P",{});var wa=i(yt);Mr=s(wa,"See the "),to=r(wa,"A",{href:!0,rel:!0});var Hl=i(to);Ar=s(Hl,"model hub"),Hl.forEach(t),Ir=s(wa," to look for Speech2Text checkpoints."),wa.forEach(t),sa=l(o),ct=r(o,"H2",{class:!0});var Sa=i(ct);wt=r(Sa,"A",{id:!0,class:!0,href:!0});var Bl=i(wt);is=r(Bl,"SPAN",{});var Rl=i(is);v(oo.$$.fragment,Rl),Rl.forEach(t),Bl.forEach(t),Dr=l(Sa),ds=r(Sa,"SPAN",{});var Vl=i(ds);Nr=s(Vl,"Speech2TextConfig"),Vl.forEach(t),Sa.forEach(t),aa=l(o),pe=r(o,"DIV",{class:!0});var Ye=i(pe);v(no.$$.fragment,Ye),Lr=l(Ye),lt=r(Ye,"P",{});var Ln=i(lt);Or=s(Ln,"This is the configuration class to store the configuration of a "),mn=r(Ln,"A",{href:!0});var Jl=i(mn);Gr=s(Jl,"Speech2TextModel"),Jl.forEach(t),Wr=s(Ln,`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),so=r(Ln,"A",{href:!0,rel:!0});var Kl=i(so);Ur=s(Kl,"facebook/s2t-small-librispeech-asr"),Kl.forEach(t),Hr=s(Ln," architecture."),Ln.forEach(t),Br=l(Ye),pt=r(Ye,"P",{});var On=i(pt);Rr=s(On,"Configuration objects inherit from "),_n=r(On,"A",{href:!0});var Yl=i(_n);Vr=s(Yl,"PretrainedConfig"),Yl.forEach(t),Jr=s(On,` and can be used to control the model outputs. Read the
documentation from `),gn=r(On,"A",{href:!0});var Xl=i(gn);Kr=s(Xl,"PretrainedConfig"),Xl.forEach(t),Yr=s(On," for more information."),On.forEach(t),Xr=l(Ye),cs=r(Ye,"P",{});var Ql=i(cs);Qr=s(Ql,"Example:"),Ql.forEach(t),Zr=l(Ye),v(ao.$$.fragment,Ye),Ye.forEach(t),ra=l(o),ht=r(o,"H2",{class:!0});var $a=i(ht);St=r($a,"A",{id:!0,class:!0,href:!0});var Zl=i(St);ls=r(Zl,"SPAN",{});var ep=i(ls);v(ro.$$.fragment,ep),ep.forEach(t),Zl.forEach(t),ei=l($a),ps=r($a,"SPAN",{});var tp=i(ps);ti=s(tp,"Speech2TextTokenizer"),tp.forEach(t),$a.forEach(t),ia=l(o),H=r(o,"DIV",{class:!0});var be=i(H);v(io.$$.fragment,be),oi=l(be),hs=r(be,"P",{});var op=i(hs);ni=s(op,"Construct an Speech2Text tokenizer."),op.forEach(t),si=l(be),co=r(be,"P",{});var Ea=i(co);ai=s(Ea,"This tokenizer inherits from "),Tn=r(Ea,"A",{href:!0});var np=i(Tn);ri=s(np,"PreTrainedTokenizer"),np.forEach(t),ii=s(Ea,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Ea.forEach(t),di=l(be),$t=r(be,"DIV",{class:!0});var za=i($t);v(lo.$$.fragment,za),ci=l(za),fs=r(za,"P",{});var sp=i(fs);li=s(sp,"Build model inputs from a sequence by appending eos_token_id."),sp.forEach(t),za.forEach(t),pi=l(be),Et=r(be,"DIV",{class:!0});var qa=i(Et);v(po.$$.fragment,qa),hi=l(qa),ho=r(qa,"P",{});var Fa=i(ho);fi=s(Fa,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),us=r(Fa,"CODE",{});var ap=i(us);ui=s(ap,"prepare_for_model"),ap.forEach(t),mi=s(Fa," method."),Fa.forEach(t),qa.forEach(t),_i=l(be),Be=r(be,"DIV",{class:!0});var Gn=i(Be);v(fo.$$.fragment,Gn),gi=l(Gn),vn=r(Gn,"P",{});var ll=i(vn);Ti=s(ll,"Create the token type IDs corresponding to the sequences passed. "),kn=r(ll,"A",{href:!0});var rp=i(kn);vi=s(rp,`What are token type
IDs?`),rp.forEach(t),ll.forEach(t),ki=l(Gn),ms=r(Gn,"P",{});var ip=i(ms);xi=s(ip,"Should be overridden in a subclass if the model has a special way of building those."),ip.forEach(t),Gn.forEach(t),bi=l(be),_s=r(be,"DIV",{class:!0}),i(_s).forEach(t),be.forEach(t),da=l(o),ft=r(o,"H2",{class:!0});var Pa=i(ft);zt=r(Pa,"A",{id:!0,class:!0,href:!0});var dp=i(zt);gs=r(dp,"SPAN",{});var cp=i(gs);v(uo.$$.fragment,cp),cp.forEach(t),dp.forEach(t),yi=l(Pa),Ts=r(Pa,"SPAN",{});var lp=i(Ts);wi=s(lp,"Speech2TextFeatureExtractor"),lp.forEach(t),Pa.forEach(t),ca=l(o),he=r(o,"DIV",{class:!0});var Xe=i(he);v(mo.$$.fragment,Xe),Si=l(Xe),vs=r(Xe,"P",{});var pp=i(vs);$i=s(pp,"Constructs a Speech2Text feature extractor."),pp.forEach(t),Ei=l(Xe),_o=r(Xe,"P",{});var ja=i(_o);zi=s(ja,"This feature extractor inherits from "),xn=r(ja,"A",{href:!0});var hp=i(xn);qi=s(hp,"Speech2TextFeatureExtractor"),hp.forEach(t),Fi=s(ja,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ja.forEach(t),Pi=l(Xe),ks=r(Xe,"P",{});var fp=i(ks);ji=s(fp,`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),fp.forEach(t),Ci=l(Xe),qt=r(Xe,"DIV",{class:!0});var Ca=i(qt);v(go.$$.fragment,Ca),Mi=l(Ca),xs=r(Ca,"P",{});var up=i(xs);Ai=s(up,"Main method to featurize and prepare for the model one or several sequence(s). sequences."),up.forEach(t),Ca.forEach(t),Xe.forEach(t),la=l(o),ut=r(o,"H2",{class:!0});var Ma=i(ut);Ft=r(Ma,"A",{id:!0,class:!0,href:!0});var mp=i(Ft);bs=r(mp,"SPAN",{});var _p=i(bs);v(To.$$.fragment,_p),_p.forEach(t),mp.forEach(t),Ii=l(Ma),ys=r(Ma,"SPAN",{});var gp=i(ys);Di=s(gp,"Speech2TextProcessor"),gp.forEach(t),Ma.forEach(t),pa=l(o),I=r(o,"DIV",{class:!0});var B=i(I);v(vo.$$.fragment,B),Ni=l(B),ws=r(B,"P",{});var Tp=i(ws);Li=s(Tp,`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),Tp.forEach(t),Oi=l(B),ge=r(B,"P",{});var Ge=i(ge);bn=r(Ge,"A",{href:!0});var vp=i(bn);Gi=s(vp,"Speech2TextProcessor"),vp.forEach(t),Wi=s(Ge," offers all the functionalities of "),yn=r(Ge,"A",{href:!0});var kp=i(yn);Ui=s(kp,"Speech2TextFeatureExtractor"),kp.forEach(t),Hi=s(Ge,` and
`),wn=r(Ge,"A",{href:!0});var xp=i(wn);Bi=s(xp,"Speech2TextTokenizer"),xp.forEach(t),Ri=s(Ge,". See the "),ko=r(Ge,"A",{href:!0});var pl=i(ko);Ss=r(pl,"STRONG",{});var bp=i(Ss);Vi=s(bp,"call"),bp.forEach(t),Ji=s(pl,"()"),pl.forEach(t),Ki=s(Ge," and "),Sn=r(Ge,"A",{href:!0});var yp=i(Sn);Yi=s(yp,"decode()"),yp.forEach(t),Xi=s(Ge,` for more
information.`),Ge.forEach(t),Qi=l(B),Pt=r(B,"DIV",{class:!0});var Aa=i(Pt);v(xo.$$.fragment,Aa),Zi=l(Aa),Oe=r(Aa,"P",{});var Vt=i(Oe);ed=s(Vt,`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),bo=r(Vt,"A",{href:!0});var hl=i(bo);$s=r(hl,"STRONG",{});var wp=i($s);td=s(wp,"call"),wp.forEach(t),od=s(hl,"()"),hl.forEach(t),nd=s(Vt,` and returns its output. If used in the context
`),$n=r(Vt,"A",{href:!0});var Sp=i($n);sd=s(Sp,"as_target_processor()"),Sp.forEach(t),ad=s(Vt,` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),yo=r(Vt,"A",{href:!0});var fl=i(yo);Es=r(fl,"STRONG",{});var $p=i(Es);rd=s($p,"call"),$p.forEach(t),id=s(fl,"()"),fl.forEach(t),dd=s(Vt,`. Please refer to the doctsring of the above two methods for more
information.`),Vt.forEach(t),Aa.forEach(t),cd=l(B),Re=r(B,"DIV",{class:!0});var Wn=i(Re);v(wo.$$.fragment,Wn),ld=l(Wn),zs=r(Wn,"P",{});var Ep=i(zs);pd=s(Ep,"Instantiate a processor associated with a pretrained model."),Ep.forEach(t),hd=l(Wn),v(jt.$$.fragment,Wn),Wn.forEach(t),fd=l(B),Ve=r(B,"DIV",{class:!0});var Un=i(Ve);v(So.$$.fragment,Un),ud=l(Un),$o=r(Un,"P",{});var Ia=i($o);md=s(Ia,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),En=r(Ia,"A",{href:!0});var zp=i(En);_d=s(zp,"from_pretrained()"),zp.forEach(t),gd=s(Ia," method."),Ia.forEach(t),Td=l(Un),v(Ct.$$.fragment,Un),Un.forEach(t),vd=l(B),Mt=r(B,"DIV",{class:!0});var Da=i(Mt);v(Eo.$$.fragment,Da),kd=l(Da),zo=r(Da,"P",{});var Na=i(zo);xd=s(Na,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),zn=r(Na,"A",{href:!0});var qp=i(zn);bd=s(qp,"batch_decode()"),qp.forEach(t),yd=s(Na,`. Please
refer to the docstring of this method for more information.`),Na.forEach(t),Da.forEach(t),wd=l(B),At=r(B,"DIV",{class:!0});var La=i(At);v(qo.$$.fragment,La),Sd=l(La),Fo=r(La,"P",{});var Oa=i(Fo);$d=s(Oa,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),qn=r(Oa,"A",{href:!0});var Fp=i(qn);Ed=s(Fp,"decode()"),Fp.forEach(t),zd=s(Oa,`. Please refer
to the docstring of this method for more information.`),Oa.forEach(t),La.forEach(t),qd=l(B),It=r(B,"DIV",{class:!0});var Ga=i(It);v(Po.$$.fragment,Ga),Fd=l(Ga),qs=r(Ga,"P",{});var Pp=i(qs);Pd=s(Pp,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text.`),Pp.forEach(t),Ga.forEach(t),B.forEach(t),ha=l(o),mt=r(o,"H2",{class:!0});var Wa=i(mt);Dt=r(Wa,"A",{id:!0,class:!0,href:!0});var jp=i(Dt);Fs=r(jp,"SPAN",{});var Cp=i(Fs);v(jo.$$.fragment,Cp),Cp.forEach(t),jp.forEach(t),jd=l(Wa),Ps=r(Wa,"SPAN",{});var Mp=i(Ps);Cd=s(Mp,"Speech2TextModel"),Mp.forEach(t),Wa.forEach(t),fa=l(o),we=r(o,"DIV",{class:!0});var Jt=i(we);v(Co.$$.fragment,Jt),Md=l(Jt),Mo=r(Jt,"P",{});var Ua=i(Mo);Ad=s(Ua,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Fn=r(Ua,"A",{href:!0});var Ap=i(Fn);Id=s(Ap,"PreTrainedModel"),Ap.forEach(t),Dd=s(Ua,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ua.forEach(t),Nd=l(Jt),Ao=r(Jt,"P",{});var Ha=i(Ao);Ld=s(Ha,"This model is also a PyTorch "),Io=r(Ha,"A",{href:!0,rel:!0});var Ip=i(Io);Od=s(Ip,"torch.nn.Module"),Ip.forEach(t),Gd=s(Ha,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ha.forEach(t),Wd=l(Jt),Te=r(Jt,"DIV",{class:!0});var Qe=i(Te);v(Do.$$.fragment,Qe),Ud=l(Qe),_t=r(Qe,"P",{});var Hn=i(_t);Hd=s(Hn,"The "),Pn=r(Hn,"A",{href:!0});var Dp=i(Pn);Bd=s(Dp,"Speech2TextModel"),Dp.forEach(t),Rd=s(Hn," forward method, overrides the "),js=r(Hn,"CODE",{});var Np=i(js);Vd=s(Np,"__call__"),Np.forEach(t),Jd=s(Hn," special method."),Hn.forEach(t),Kd=l(Qe),v(Nt.$$.fragment,Qe),Yd=l(Qe),Cs=r(Qe,"P",{});var Lp=i(Cs);Xd=s(Lp,"Example:"),Lp.forEach(t),Qd=l(Qe),v(No.$$.fragment,Qe),Qe.forEach(t),Jt.forEach(t),ua=l(o),gt=r(o,"H2",{class:!0});var Ba=i(gt);Lt=r(Ba,"A",{id:!0,class:!0,href:!0});var Op=i(Lt);Ms=r(Op,"SPAN",{});var Gp=i(Ms);v(Lo.$$.fragment,Gp),Gp.forEach(t),Op.forEach(t),Zd=l(Ba),As=r(Ba,"SPAN",{});var Wp=i(As);ec=s(Wp,"Speech2TextForConditionalGeneration"),Wp.forEach(t),Ba.forEach(t),ma=l(o),Se=r(o,"DIV",{class:!0});var Kt=i(Se);v(Oo.$$.fragment,Kt),tc=l(Kt),Go=r(Kt,"P",{});var Ra=i(Go);oc=s(Ra,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),jn=r(Ra,"A",{href:!0});var Up=i(jn);nc=s(Up,"PreTrainedModel"),Up.forEach(t),sc=s(Ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ra.forEach(t),ac=l(Kt),Wo=r(Kt,"P",{});var Va=i(Wo);rc=s(Va,"This model is also a PyTorch "),Uo=r(Va,"A",{href:!0,rel:!0});var Hp=i(Uo);ic=s(Hp,"torch.nn.Module"),Hp.forEach(t),dc=s(Va,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Va.forEach(t),cc=l(Kt),ve=r(Kt,"DIV",{class:!0});var Ze=i(ve);v(Ho.$$.fragment,Ze),lc=l(Ze),Tt=r(Ze,"P",{});var Bn=i(Tt);pc=s(Bn,"The "),Cn=r(Bn,"A",{href:!0});var Bp=i(Cn);hc=s(Bp,"Speech2TextForConditionalGeneration"),Bp.forEach(t),fc=s(Bn," forward method, overrides the "),Is=r(Bn,"CODE",{});var Rp=i(Is);uc=s(Rp,"__call__"),Rp.forEach(t),mc=s(Bn," special method."),Bn.forEach(t),_c=l(Ze),v(Ot.$$.fragment,Ze),gc=l(Ze),Ds=r(Ze,"P",{});var Vp=i(Ds);Tc=s(Vp,"Example:"),Vp.forEach(t),vc=l(Ze),v(Bo.$$.fragment,Ze),Ze.forEach(t),Kt.forEach(t),_a=l(o),vt=r(o,"H2",{class:!0});var Ja=i(vt);Gt=r(Ja,"A",{id:!0,class:!0,href:!0});var Jp=i(Gt);Ns=r(Jp,"SPAN",{});var Kp=i(Ns);v(Ro.$$.fragment,Kp),Kp.forEach(t),Jp.forEach(t),kc=l(Ja),Ls=r(Ja,"SPAN",{});var Yp=i(Ls);xc=s(Yp,"TFSpeech2TextModel"),Yp.forEach(t),Ja.forEach(t),ga=l(o),fe=r(o,"DIV",{class:!0});var et=i(fe);v(Vo.$$.fragment,et),bc=l(et),Jo=r(et,"P",{});var Ka=i(Jo);yc=s(Ka,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mn=r(Ka,"A",{href:!0});var Xp=i(Mn);wc=s(Xp,"TFPreTrainedModel"),Xp.forEach(t),Sc=s(Ka,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ka.forEach(t),$c=l(et),Ko=r(et,"P",{});var Ya=i(Ko);Ec=s(Ya,"This model is also a "),Yo=r(Ya,"A",{href:!0,rel:!0});var Qp=i(Yo);zc=s(Qp,"tf.keras.Model"),Qp.forEach(t),qc=s(Ya,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ya.forEach(t),Fc=l(et),v(Wt.$$.fragment,et),Pc=l(et),ke=r(et,"DIV",{class:!0});var tt=i(ke);v(Xo.$$.fragment,tt),jc=l(tt),kt=r(tt,"P",{});var Rn=i(kt);Cc=s(Rn,"The "),An=r(Rn,"A",{href:!0});var Zp=i(An);Mc=s(Zp,"TFSpeech2TextModel"),Zp.forEach(t),Ac=s(Rn," forward method, overrides the "),Os=r(Rn,"CODE",{});var eh=i(Os);Ic=s(eh,"__call__"),eh.forEach(t),Dc=s(Rn," special method."),Rn.forEach(t),Nc=l(tt),v(Ut.$$.fragment,tt),Lc=l(tt),Gs=r(tt,"P",{});var th=i(Gs);Oc=s(th,"Example:"),th.forEach(t),Gc=l(tt),v(Qo.$$.fragment,tt),tt.forEach(t),et.forEach(t),Ta=l(o),xt=r(o,"H2",{class:!0});var Xa=i(xt);Ht=r(Xa,"A",{id:!0,class:!0,href:!0});var oh=i(Ht);Ws=r(oh,"SPAN",{});var nh=i(Ws);v(Zo.$$.fragment,nh),nh.forEach(t),oh.forEach(t),Wc=l(Xa),Us=r(Xa,"SPAN",{});var sh=i(Us);Uc=s(sh,"TFSpeech2TextForConditionalGeneration"),sh.forEach(t),Xa.forEach(t),va=l(o),ue=r(o,"DIV",{class:!0});var ot=i(ue);v(en.$$.fragment,ot),Hc=l(ot),tn=r(ot,"P",{});var Qa=i(tn);Bc=s(Qa,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),In=r(Qa,"A",{href:!0});var ah=i(In);Rc=s(ah,"TFPreTrainedModel"),ah.forEach(t),Vc=s(Qa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qa.forEach(t),Jc=l(ot),on=r(ot,"P",{});var Za=i(on);Kc=s(Za,"This model is also a "),nn=r(Za,"A",{href:!0,rel:!0});var rh=i(nn);Yc=s(rh,"tf.keras.Model"),rh.forEach(t),Xc=s(Za,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Za.forEach(t),Qc=l(ot),v(Bt.$$.fragment,ot),Zc=l(ot),xe=r(ot,"DIV",{class:!0});var nt=i(xe);v(sn.$$.fragment,nt),el=l(nt),bt=r(nt,"P",{});var Vn=i(bt);tl=s(Vn,"The "),Dn=r(Vn,"A",{href:!0});var ih=i(Dn);ol=s(ih,"TFSpeech2TextForConditionalGeneration"),ih.forEach(t),nl=s(Vn," forward method, overrides the "),Hs=r(Vn,"CODE",{});var dh=i(Hs);sl=s(dh,"__call__"),dh.forEach(t),al=s(Vn," special method."),Vn.forEach(t),rl=l(nt),v(Rt.$$.fragment,nt),il=l(nt),Bs=r(nt,"P",{});var ch=i(Bs);dl=s(ch,"Example:"),ch.forEach(t),cl=l(nt),v(an.$$.fragment,nt),nt.forEach(t),ot.forEach(t),this.h()},h(){d(p,"name","hf:doc:metadata"),d(p,"content",JSON.stringify(yh)),d(_,"id","speech2text"),d(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_,"href","#speech2text"),d(m,"class","relative group"),d(D,"id","overview"),d(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(D,"href","#overview"),d(z,"class","relative group"),d(te,"href","https://arxiv.org/abs/2010.05171"),d(te,"rel","nofollow"),d(C,"href","http://www.openslr.org/12"),d(C,"rel","nofollow"),d(ne,"href","https://github.com/facebookresearch/covost"),d(ne,"rel","nofollow"),d(ae,"href","https://ict.fbk.eu/must-c/"),d(ae,"rel","nofollow"),d(re,"href","https://huggingface.co/valhalla"),d(re,"rel","nofollow"),d(de,"href","https://github.com/pytorch/fairseq/tree/master/examples/speech_to_text"),d(de,"rel","nofollow"),d(u,"id","inference"),d(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(u,"href","#inference"),d(Y,"class","relative group"),d(ze,"href","/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d(ln,"href","/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),d(pn,"href","/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d(hn,"href","/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),d(Xt,"href","http://www.mega-nerd.com/libsndfile/"),d(Xt,"rel","nofollow"),d(to,"href","https://huggingface.co/models?filter=speech_to_text"),d(to,"rel","nofollow"),d(wt,"id","transformers.Speech2TextConfig"),d(wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(wt,"href","#transformers.Speech2TextConfig"),d(ct,"class","relative group"),d(mn,"href","/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextModel"),d(so,"href","https://huggingface.co/facebook/s2t-small-librispeech-asr"),d(so,"rel","nofollow"),d(_n,"href","/docs/transformers/pr_15678/en/main_classes/configuration#transformers.PretrainedConfig"),d(gn,"href","/docs/transformers/pr_15678/en/main_classes/configuration#transformers.PretrainedConfig"),d(pe,"class","docstring"),d(St,"id","transformers.Speech2TextTokenizer"),d(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(St,"href","#transformers.Speech2TextTokenizer"),d(ht,"class","relative group"),d(Tn,"href","/docs/transformers/pr_15678/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d($t,"class","docstring"),d(Et,"class","docstring"),d(kn,"href","../glossary#token-type-ids"),d(Be,"class","docstring"),d(_s,"class","docstring"),d(H,"class","docstring"),d(zt,"id","transformers.Speech2TextFeatureExtractor"),d(zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(zt,"href","#transformers.Speech2TextFeatureExtractor"),d(ft,"class","relative group"),d(xn,"href","/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d(qt,"class","docstring"),d(he,"class","docstring"),d(Ft,"id","transformers.Speech2TextProcessor"),d(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ft,"href","#transformers.Speech2TextProcessor"),d(ut,"class","relative group"),d(bn,"href","/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),d(yn,"href","/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d(wn,"href","/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),d(ko,"href","/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.__call__"),d(Sn,"href","/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.decode"),d(bo,"href","/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"),d($n,"href","/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.as_target_processor"),d(yo,"href","/docs/transformers/pr_15678/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),d(Pt,"class","docstring"),d(Re,"class","docstring"),d(En,"href","/docs/transformers/pr_15678/en/main_classes/processors#transformers.ProcessorMixin.from_pretrained"),d(Ve,"class","docstring"),d(zn,"href","/docs/transformers/pr_15678/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),d(Mt,"class","docstring"),d(qn,"href","/docs/transformers/pr_15678/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),d(At,"class","docstring"),d(It,"class","docstring"),d(I,"class","docstring"),d(Dt,"id","transformers.Speech2TextModel"),d(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Dt,"href","#transformers.Speech2TextModel"),d(mt,"class","relative group"),d(Fn,"href","/docs/transformers/pr_15678/en/main_classes/model#transformers.PreTrainedModel"),d(Io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Io,"rel","nofollow"),d(Pn,"href","/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextModel"),d(Te,"class","docstring"),d(we,"class","docstring"),d(Lt,"id","transformers.Speech2TextForConditionalGeneration"),d(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Lt,"href","#transformers.Speech2TextForConditionalGeneration"),d(gt,"class","relative group"),d(jn,"href","/docs/transformers/pr_15678/en/main_classes/model#transformers.PreTrainedModel"),d(Uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Uo,"rel","nofollow"),d(Cn,"href","/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.Speech2TextForConditionalGeneration"),d(ve,"class","docstring"),d(Se,"class","docstring"),d(Gt,"id","transformers.TFSpeech2TextModel"),d(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Gt,"href","#transformers.TFSpeech2TextModel"),d(vt,"class","relative group"),d(Mn,"href","/docs/transformers/pr_15678/en/main_classes/model#transformers.TFPreTrainedModel"),d(Yo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Yo,"rel","nofollow"),d(An,"href","/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.TFSpeech2TextModel"),d(ke,"class","docstring"),d(fe,"class","docstring"),d(Ht,"id","transformers.TFSpeech2TextForConditionalGeneration"),d(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ht,"href","#transformers.TFSpeech2TextForConditionalGeneration"),d(xt,"class","relative group"),d(In,"href","/docs/transformers/pr_15678/en/main_classes/model#transformers.TFPreTrainedModel"),d(nn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(nn,"rel","nofollow"),d(Dn,"href","/docs/transformers/pr_15678/en/model_doc/speech_to_text#transformers.TFSpeech2TextForConditionalGeneration"),d(xe,"class","docstring"),d(ue,"class","docstring")},m(o,f){e(document.head,p),h(o,$,f),h(o,m,f),e(m,_),e(_,S),k(g,S,null),e(m,w),e(m,E),e(E,A),h(o,q,f),h(o,z,f),e(z,D),e(D,R),k(ee,R,null),e(z,Fe),e(z,V),e(V,Pe),h(o,$e,f),h(o,M,f),e(M,J),e(M,te),e(te,ye),e(M,j),e(M,C),e(C,je),e(M,oe),e(M,ne),e(ne,Ce),e(M,se),e(M,ae),e(ae,Me),e(M,O),h(o,Ee,f),h(o,N,f),e(N,Ae),e(N,re),e(re,ie),e(N,Ie),e(N,de),e(de,K),e(N,De),h(o,Z,f),h(o,Y,f),e(Y,u),e(u,F),k(X,F,null),e(Y,st),e(Y,Ne),e(Ne,Q),h(o,Ue,f),h(o,_e,f),e(_e,at),e(_e,W),e(W,ce),e(_e,rt),h(o,He,f),h(o,P,f),e(P,it),e(P,ze),e(ze,Le),e(P,dt),e(P,ln),e(ln,er),e(P,tr),e(P,pn),e(pn,or),e(P,nr),e(P,hn),e(hn,sr),e(P,ar),h(o,Qs,f),h(o,U,f),e(U,rr),e(U,Jn),e(Jn,ir),e(U,dr),e(U,Kn),e(Kn,cr),e(U,lr),e(U,Yn),e(Yn,pr),e(U,hr),e(U,Xn),e(Xn,fr),e(U,ur),e(U,Qn),e(Qn,mr),e(U,_r),e(U,Xt),e(Xt,gr),e(U,Tr),e(U,Zn),e(Zn,vr),h(o,Zs,f),h(o,fn,f),e(fn,es),e(es,kr),h(o,ea,f),k(Qt,o,f),h(o,ta,f),h(o,un,f),e(un,Zt),e(Zt,ts),e(ts,xr),e(Zt,br),e(Zt,le),e(le,yr),e(le,os),e(os,wr),e(le,Sr),e(le,ns),e(ns,$r),e(le,Er),e(le,ss),e(ss,zr),e(le,qr),e(le,as),e(as,Fr),e(le,Pr),e(le,rs),e(rs,jr),e(le,Cr),h(o,oa,f),k(eo,o,f),h(o,na,f),h(o,yt,f),e(yt,Mr),e(yt,to),e(to,Ar),e(yt,Ir),h(o,sa,f),h(o,ct,f),e(ct,wt),e(wt,is),k(oo,is,null),e(ct,Dr),e(ct,ds),e(ds,Nr),h(o,aa,f),h(o,pe,f),k(no,pe,null),e(pe,Lr),e(pe,lt),e(lt,Or),e(lt,mn),e(mn,Gr),e(lt,Wr),e(lt,so),e(so,Ur),e(lt,Hr),e(pe,Br),e(pe,pt),e(pt,Rr),e(pt,_n),e(_n,Vr),e(pt,Jr),e(pt,gn),e(gn,Kr),e(pt,Yr),e(pe,Xr),e(pe,cs),e(cs,Qr),e(pe,Zr),k(ao,pe,null),h(o,ra,f),h(o,ht,f),e(ht,St),e(St,ls),k(ro,ls,null),e(ht,ei),e(ht,ps),e(ps,ti),h(o,ia,f),h(o,H,f),k(io,H,null),e(H,oi),e(H,hs),e(hs,ni),e(H,si),e(H,co),e(co,ai),e(co,Tn),e(Tn,ri),e(co,ii),e(H,di),e(H,$t),k(lo,$t,null),e($t,ci),e($t,fs),e(fs,li),e(H,pi),e(H,Et),k(po,Et,null),e(Et,hi),e(Et,ho),e(ho,fi),e(ho,us),e(us,ui),e(ho,mi),e(H,_i),e(H,Be),k(fo,Be,null),e(Be,gi),e(Be,vn),e(vn,Ti),e(vn,kn),e(kn,vi),e(Be,ki),e(Be,ms),e(ms,xi),e(H,bi),e(H,_s),h(o,da,f),h(o,ft,f),e(ft,zt),e(zt,gs),k(uo,gs,null),e(ft,yi),e(ft,Ts),e(Ts,wi),h(o,ca,f),h(o,he,f),k(mo,he,null),e(he,Si),e(he,vs),e(vs,$i),e(he,Ei),e(he,_o),e(_o,zi),e(_o,xn),e(xn,qi),e(_o,Fi),e(he,Pi),e(he,ks),e(ks,ji),e(he,Ci),e(he,qt),k(go,qt,null),e(qt,Mi),e(qt,xs),e(xs,Ai),h(o,la,f),h(o,ut,f),e(ut,Ft),e(Ft,bs),k(To,bs,null),e(ut,Ii),e(ut,ys),e(ys,Di),h(o,pa,f),h(o,I,f),k(vo,I,null),e(I,Ni),e(I,ws),e(ws,Li),e(I,Oi),e(I,ge),e(ge,bn),e(bn,Gi),e(ge,Wi),e(ge,yn),e(yn,Ui),e(ge,Hi),e(ge,wn),e(wn,Bi),e(ge,Ri),e(ge,ko),e(ko,Ss),e(Ss,Vi),e(ko,Ji),e(ge,Ki),e(ge,Sn),e(Sn,Yi),e(ge,Xi),e(I,Qi),e(I,Pt),k(xo,Pt,null),e(Pt,Zi),e(Pt,Oe),e(Oe,ed),e(Oe,bo),e(bo,$s),e($s,td),e(bo,od),e(Oe,nd),e(Oe,$n),e($n,sd),e(Oe,ad),e(Oe,yo),e(yo,Es),e(Es,rd),e(yo,id),e(Oe,dd),e(I,cd),e(I,Re),k(wo,Re,null),e(Re,ld),e(Re,zs),e(zs,pd),e(Re,hd),k(jt,Re,null),e(I,fd),e(I,Ve),k(So,Ve,null),e(Ve,ud),e(Ve,$o),e($o,md),e($o,En),e(En,_d),e($o,gd),e(Ve,Td),k(Ct,Ve,null),e(I,vd),e(I,Mt),k(Eo,Mt,null),e(Mt,kd),e(Mt,zo),e(zo,xd),e(zo,zn),e(zn,bd),e(zo,yd),e(I,wd),e(I,At),k(qo,At,null),e(At,Sd),e(At,Fo),e(Fo,$d),e(Fo,qn),e(qn,Ed),e(Fo,zd),e(I,qd),e(I,It),k(Po,It,null),e(It,Fd),e(It,qs),e(qs,Pd),h(o,ha,f),h(o,mt,f),e(mt,Dt),e(Dt,Fs),k(jo,Fs,null),e(mt,jd),e(mt,Ps),e(Ps,Cd),h(o,fa,f),h(o,we,f),k(Co,we,null),e(we,Md),e(we,Mo),e(Mo,Ad),e(Mo,Fn),e(Fn,Id),e(Mo,Dd),e(we,Nd),e(we,Ao),e(Ao,Ld),e(Ao,Io),e(Io,Od),e(Ao,Gd),e(we,Wd),e(we,Te),k(Do,Te,null),e(Te,Ud),e(Te,_t),e(_t,Hd),e(_t,Pn),e(Pn,Bd),e(_t,Rd),e(_t,js),e(js,Vd),e(_t,Jd),e(Te,Kd),k(Nt,Te,null),e(Te,Yd),e(Te,Cs),e(Cs,Xd),e(Te,Qd),k(No,Te,null),h(o,ua,f),h(o,gt,f),e(gt,Lt),e(Lt,Ms),k(Lo,Ms,null),e(gt,Zd),e(gt,As),e(As,ec),h(o,ma,f),h(o,Se,f),k(Oo,Se,null),e(Se,tc),e(Se,Go),e(Go,oc),e(Go,jn),e(jn,nc),e(Go,sc),e(Se,ac),e(Se,Wo),e(Wo,rc),e(Wo,Uo),e(Uo,ic),e(Wo,dc),e(Se,cc),e(Se,ve),k(Ho,ve,null),e(ve,lc),e(ve,Tt),e(Tt,pc),e(Tt,Cn),e(Cn,hc),e(Tt,fc),e(Tt,Is),e(Is,uc),e(Tt,mc),e(ve,_c),k(Ot,ve,null),e(ve,gc),e(ve,Ds),e(Ds,Tc),e(ve,vc),k(Bo,ve,null),h(o,_a,f),h(o,vt,f),e(vt,Gt),e(Gt,Ns),k(Ro,Ns,null),e(vt,kc),e(vt,Ls),e(Ls,xc),h(o,ga,f),h(o,fe,f),k(Vo,fe,null),e(fe,bc),e(fe,Jo),e(Jo,yc),e(Jo,Mn),e(Mn,wc),e(Jo,Sc),e(fe,$c),e(fe,Ko),e(Ko,Ec),e(Ko,Yo),e(Yo,zc),e(Ko,qc),e(fe,Fc),k(Wt,fe,null),e(fe,Pc),e(fe,ke),k(Xo,ke,null),e(ke,jc),e(ke,kt),e(kt,Cc),e(kt,An),e(An,Mc),e(kt,Ac),e(kt,Os),e(Os,Ic),e(kt,Dc),e(ke,Nc),k(Ut,ke,null),e(ke,Lc),e(ke,Gs),e(Gs,Oc),e(ke,Gc),k(Qo,ke,null),h(o,Ta,f),h(o,xt,f),e(xt,Ht),e(Ht,Ws),k(Zo,Ws,null),e(xt,Wc),e(xt,Us),e(Us,Uc),h(o,va,f),h(o,ue,f),k(en,ue,null),e(ue,Hc),e(ue,tn),e(tn,Bc),e(tn,In),e(In,Rc),e(tn,Vc),e(ue,Jc),e(ue,on),e(on,Kc),e(on,nn),e(nn,Yc),e(on,Xc),e(ue,Qc),k(Bt,ue,null),e(ue,Zc),e(ue,xe),k(sn,xe,null),e(xe,el),e(xe,bt),e(bt,tl),e(bt,Dn),e(Dn,ol),e(bt,nl),e(bt,Hs),e(Hs,sl),e(bt,al),e(xe,rl),k(Rt,xe,null),e(xe,il),e(xe,Bs),e(Bs,dl),e(xe,cl),k(an,xe,null),ka=!0},p(o,[f]){const rn={};f&2&&(rn.$$scope={dirty:f,ctx:o}),jt.$set(rn);const Rs={};f&2&&(Rs.$$scope={dirty:f,ctx:o}),Ct.$set(Rs);const Vs={};f&2&&(Vs.$$scope={dirty:f,ctx:o}),Nt.$set(Vs);const Js={};f&2&&(Js.$$scope={dirty:f,ctx:o}),Ot.$set(Js);const dn={};f&2&&(dn.$$scope={dirty:f,ctx:o}),Wt.$set(dn);const Ks={};f&2&&(Ks.$$scope={dirty:f,ctx:o}),Ut.$set(Ks);const Ys={};f&2&&(Ys.$$scope={dirty:f,ctx:o}),Bt.$set(Ys);const Xs={};f&2&&(Xs.$$scope={dirty:f,ctx:o}),Rt.$set(Xs)},i(o){ka||(x(g.$$.fragment,o),x(ee.$$.fragment,o),x(X.$$.fragment,o),x(Qt.$$.fragment,o),x(eo.$$.fragment,o),x(oo.$$.fragment,o),x(no.$$.fragment,o),x(ao.$$.fragment,o),x(ro.$$.fragment,o),x(io.$$.fragment,o),x(lo.$$.fragment,o),x(po.$$.fragment,o),x(fo.$$.fragment,o),x(uo.$$.fragment,o),x(mo.$$.fragment,o),x(go.$$.fragment,o),x(To.$$.fragment,o),x(vo.$$.fragment,o),x(xo.$$.fragment,o),x(wo.$$.fragment,o),x(jt.$$.fragment,o),x(So.$$.fragment,o),x(Ct.$$.fragment,o),x(Eo.$$.fragment,o),x(qo.$$.fragment,o),x(Po.$$.fragment,o),x(jo.$$.fragment,o),x(Co.$$.fragment,o),x(Do.$$.fragment,o),x(Nt.$$.fragment,o),x(No.$$.fragment,o),x(Lo.$$.fragment,o),x(Oo.$$.fragment,o),x(Ho.$$.fragment,o),x(Ot.$$.fragment,o),x(Bo.$$.fragment,o),x(Ro.$$.fragment,o),x(Vo.$$.fragment,o),x(Wt.$$.fragment,o),x(Xo.$$.fragment,o),x(Ut.$$.fragment,o),x(Qo.$$.fragment,o),x(Zo.$$.fragment,o),x(en.$$.fragment,o),x(Bt.$$.fragment,o),x(sn.$$.fragment,o),x(Rt.$$.fragment,o),x(an.$$.fragment,o),ka=!0)},o(o){b(g.$$.fragment,o),b(ee.$$.fragment,o),b(X.$$.fragment,o),b(Qt.$$.fragment,o),b(eo.$$.fragment,o),b(oo.$$.fragment,o),b(no.$$.fragment,o),b(ao.$$.fragment,o),b(ro.$$.fragment,o),b(io.$$.fragment,o),b(lo.$$.fragment,o),b(po.$$.fragment,o),b(fo.$$.fragment,o),b(uo.$$.fragment,o),b(mo.$$.fragment,o),b(go.$$.fragment,o),b(To.$$.fragment,o),b(vo.$$.fragment,o),b(xo.$$.fragment,o),b(wo.$$.fragment,o),b(jt.$$.fragment,o),b(So.$$.fragment,o),b(Ct.$$.fragment,o),b(Eo.$$.fragment,o),b(qo.$$.fragment,o),b(Po.$$.fragment,o),b(jo.$$.fragment,o),b(Co.$$.fragment,o),b(Do.$$.fragment,o),b(Nt.$$.fragment,o),b(No.$$.fragment,o),b(Lo.$$.fragment,o),b(Oo.$$.fragment,o),b(Ho.$$.fragment,o),b(Ot.$$.fragment,o),b(Bo.$$.fragment,o),b(Ro.$$.fragment,o),b(Vo.$$.fragment,o),b(Wt.$$.fragment,o),b(Xo.$$.fragment,o),b(Ut.$$.fragment,o),b(Qo.$$.fragment,o),b(Zo.$$.fragment,o),b(en.$$.fragment,o),b(Bt.$$.fragment,o),b(sn.$$.fragment,o),b(Rt.$$.fragment,o),b(an.$$.fragment,o),ka=!1},d(o){t(p),o&&t($),o&&t(m),y(g),o&&t(q),o&&t(z),y(ee),o&&t($e),o&&t(M),o&&t(Ee),o&&t(N),o&&t(Z),o&&t(Y),y(X),o&&t(Ue),o&&t(_e),o&&t(He),o&&t(P),o&&t(Qs),o&&t(U),o&&t(Zs),o&&t(fn),o&&t(ea),y(Qt,o),o&&t(ta),o&&t(un),o&&t(oa),y(eo,o),o&&t(na),o&&t(yt),o&&t(sa),o&&t(ct),y(oo),o&&t(aa),o&&t(pe),y(no),y(ao),o&&t(ra),o&&t(ht),y(ro),o&&t(ia),o&&t(H),y(io),y(lo),y(po),y(fo),o&&t(da),o&&t(ft),y(uo),o&&t(ca),o&&t(he),y(mo),y(go),o&&t(la),o&&t(ut),y(To),o&&t(pa),o&&t(I),y(vo),y(xo),y(wo),y(jt),y(So),y(Ct),y(Eo),y(qo),y(Po),o&&t(ha),o&&t(mt),y(jo),o&&t(fa),o&&t(we),y(Co),y(Do),y(Nt),y(No),o&&t(ua),o&&t(gt),y(Lo),o&&t(ma),o&&t(Se),y(Oo),y(Ho),y(Ot),y(Bo),o&&t(_a),o&&t(vt),y(Ro),o&&t(ga),o&&t(fe),y(Vo),y(Wt),y(Xo),y(Ut),y(Qo),o&&t(Ta),o&&t(xt),y(Zo),o&&t(va),o&&t(ue),y(en),y(Bt),y(sn),y(Rt),y(an)}}}const yh={local:"speech2text",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.Speech2TextConfig",title:"Speech2TextConfig"},{local:"transformers.Speech2TextTokenizer",title:"Speech2TextTokenizer"},{local:"transformers.Speech2TextFeatureExtractor",title:"Speech2TextFeatureExtractor"},{local:"transformers.Speech2TextProcessor",title:"Speech2TextProcessor"},{local:"transformers.Speech2TextModel",title:"Speech2TextModel"},{local:"transformers.Speech2TextForConditionalGeneration",title:"Speech2TextForConditionalGeneration"},{local:"transformers.TFSpeech2TextModel",title:"TFSpeech2TextModel"},{local:"transformers.TFSpeech2TextForConditionalGeneration",title:"TFSpeech2TextForConditionalGeneration"}],title:"Speech2Text"};function wh(G,p,$){let{fw:m}=p;return G.$$set=_=>{"fw"in _&&$(0,m=_.fw)},[m]}class Ph extends lh{constructor(p){super();ph(this,p,wh,bh,hh,{fw:0})}}export{Ph as default,yh as metadata};
