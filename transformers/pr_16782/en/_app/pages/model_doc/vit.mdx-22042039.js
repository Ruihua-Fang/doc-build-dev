import{S as mf,i as uf,s as gf,e as a,k as d,w as b,t as r,M as _f,c as s,d as t,m as c,a as n,x as w,h as i,b as l,F as e,g as f,y,q as $,o as x,B as F,v as vf}from"../../chunks/vendor-6b77c823.js";import{T as _e}from"../../chunks/Tip-39098574.js";import{D as W}from"../../chunks/Docstring-90e3aa51.js";import{C as Ft}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ve}from"../../chunks/IconCopyLink-7a11ce68.js";function Tf(M){let p,T,m,g,v;return{c(){p=a("p"),T=r(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=a("a"),g=r("Github Issue"),v=r("."),this.h()},l(_){p=s(_,"P",{});var u=n(p);T=i(u,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=s(u,"A",{href:!0,rel:!0});var V=n(m);g=i(V,"Github Issue"),V.forEach(t),v=i(u,"."),u.forEach(t),this.h()},h(){l(m,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),l(m,"rel","nofollow")},m(_,u){f(_,p,u),e(p,T),e(p,m),e(m,g),e(p,v)},d(_){_&&t(p)}}}function bf(M){let p,T;return{c(){p=a("p"),T=r(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(m){p=s(m,"P",{});var g=n(p);T=i(g,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),g.forEach(t)},m(m,g){f(m,p,g),e(p,T)},d(m){m&&t(p)}}}function wf(M){let p,T,m,g,v;return{c(){p=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var u=n(p);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var V=n(m);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){f(_,p,u),e(p,T),e(p,m),e(m,g),e(p,v)},d(_){_&&t(p)}}}function yf(M){let p,T,m,g,v;return{c(){p=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var u=n(p);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var V=n(m);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){f(_,p,u),e(p,T),e(p,m),e(m,g),e(p,v)},d(_){_&&t(p)}}}function $f(M){let p,T,m,g,v;return{c(){p=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var u=n(p);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var V=n(m);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){f(_,p,u),e(p,T),e(p,m),e(m,g),e(p,v)},d(_){_&&t(p)}}}function xf(M){let p,T,m,g,v,_,u,V,pe,R,k,ie,j,B,oe,C,he,ae;return{c(){p=a("p"),T=r("TF 2.0 models accepts two formats as inputs:"),m=d(),g=a("ul"),v=a("li"),_=r("having all inputs as keyword arguments (like PyTorch models), or"),u=d(),V=a("li"),pe=r("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),ie=r("This second option is useful when using "),j=a("code"),B=r("tf.keras.Model.fit"),oe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),C=a("code"),he=r("model(inputs)"),ae=r(".")},l(E){p=s(E,"P",{});var I=n(p);T=i(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),m=c(E),g=s(E,"UL",{});var z=n(g);v=s(z,"LI",{});var Ie=n(v);_=i(Ie,"having all inputs as keyword arguments (like PyTorch models), or"),Ie.forEach(t),u=c(z),V=s(z,"LI",{});var se=n(V);pe=i(se,"having all inputs as a list, tuple or dict in the first positional arguments."),se.forEach(t),z.forEach(t),R=c(E),k=s(E,"P",{});var L=n(k);ie=i(L,"This second option is useful when using "),j=s(L,"CODE",{});var je=n(j);B=i(je,"tf.keras.Model.fit"),je.forEach(t),oe=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),C=s(L,"CODE",{});var Te=n(C);he=i(Te,"model(inputs)"),Te.forEach(t),ae=i(L,"."),L.forEach(t)},m(E,I){f(E,p,I),e(p,T),f(E,m,I),f(E,g,I),e(g,v),e(v,_),e(g,u),e(g,V),e(V,pe),f(E,R,I),f(E,k,I),e(k,ie),e(k,j),e(j,B),e(k,oe),e(k,C),e(C,he),e(k,ae)},d(E){E&&t(p),E&&t(m),E&&t(g),E&&t(R),E&&t(k)}}}function Ff(M){let p,T,m,g,v;return{c(){p=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var u=n(p);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var V=n(m);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){f(_,p,u),e(p,T),e(p,m),e(m,g),e(p,v)},d(_){_&&t(p)}}}function Vf(M){let p,T,m,g,v,_,u,V,pe,R,k,ie,j,B,oe,C,he,ae;return{c(){p=a("p"),T=r("TF 2.0 models accepts two formats as inputs:"),m=d(),g=a("ul"),v=a("li"),_=r("having all inputs as keyword arguments (like PyTorch models), or"),u=d(),V=a("li"),pe=r("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),ie=r("This second option is useful when using "),j=a("code"),B=r("tf.keras.Model.fit"),oe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),C=a("code"),he=r("model(inputs)"),ae=r(".")},l(E){p=s(E,"P",{});var I=n(p);T=i(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),m=c(E),g=s(E,"UL",{});var z=n(g);v=s(z,"LI",{});var Ie=n(v);_=i(Ie,"having all inputs as keyword arguments (like PyTorch models), or"),Ie.forEach(t),u=c(z),V=s(z,"LI",{});var se=n(V);pe=i(se,"having all inputs as a list, tuple or dict in the first positional arguments."),se.forEach(t),z.forEach(t),R=c(E),k=s(E,"P",{});var L=n(k);ie=i(L,"This second option is useful when using "),j=s(L,"CODE",{});var je=n(j);B=i(je,"tf.keras.Model.fit"),je.forEach(t),oe=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),C=s(L,"CODE",{});var Te=n(C);he=i(Te,"model(inputs)"),Te.forEach(t),ae=i(L,"."),L.forEach(t)},m(E,I){f(E,p,I),e(p,T),f(E,m,I),f(E,g,I),e(g,v),e(v,_),e(g,u),e(g,V),e(V,pe),f(E,R,I),f(E,k,I),e(k,ie),e(k,j),e(j,B),e(k,oe),e(k,C),e(C,he),e(k,ae)},d(E){E&&t(p),E&&t(m),E&&t(g),E&&t(R),E&&t(k)}}}function Ef(M){let p,T,m,g,v;return{c(){p=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var u=n(p);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var V=n(m);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){f(_,p,u),e(p,T),e(p,m),e(m,g),e(p,v)},d(_){_&&t(p)}}}function kf(M){let p,T,m,g,v;return{c(){p=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var u=n(p);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var V=n(m);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){f(_,p,u),e(p,T),e(p,m),e(m,g),e(p,v)},d(_){_&&t(p)}}}function Mf(M){let p,T,m,g,v;return{c(){p=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var u=n(p);T=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var V=n(m);g=i(V,"Module"),V.forEach(t),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){f(_,p,u),e(p,T),e(p,m),e(m,g),e(p,v)},d(_){_&&t(p)}}}function If(M){let p,T,m,g,v,_,u,V,pe,R,k,ie,j,B,oe,C,he,ae,E,I,z,Ie,se,L,je,Te,Xo,tr,sn,Zo,Da,or,nn,Qo,ar,rn,N,Vt,sr,Et,nr,rr,ir,Oa,lr,dr,kt,cr,Yo,pr,hr,fr,Pe,mr,Sa,ur,gr,Mt,_r,vr,Tr,Ce,br,It,wr,yr,jt,$r,xr,Fr,Ae,Vr,Pt,Er,kr,Ct,Mr,Ir,jr,Wa,Pr,ln,ea,Cr,dn,le,Ba,P,ta,Ar,qr,oa,zr,Nr,aa,Lr,Dr,Ua,Or,Sr,Ra,Wr,Br,Ha,Ur,Rr,Ja,Hr,Jr,sa,Kr,Gr,Xr,Ka,na,ra,Zr,Qr,Yr,Ga,At,ei,qt,ti,oi,ai,Xa,ia,la,si,ni,cn,be,ri,zt,ii,li,Nt,di,ci,pn,et,pi,Lt,hi,fi,hn,qe,tt,Za,Dt,mi,Qa,ui,fn,U,Ot,gi,ze,_i,da,vi,Ti,St,bi,wi,yi,Ne,$i,ca,xi,Fi,pa,Vi,Ei,ki,Ya,Mi,Ii,Wt,mn,Le,ot,es,Bt,ji,ts,Pi,un,ne,Ut,Ci,os,Ai,qi,Rt,zi,ha,Ni,Li,Di,we,Ht,Oi,as,Si,Wi,at,gn,De,st,ss,Jt,Bi,ns,Ui,_n,fe,Kt,Ri,Gt,Hi,Xt,Ji,Ki,Gi,H,Zt,Xi,Oe,Zi,fa,Qi,Yi,rs,el,tl,ol,nt,al,is,sl,nl,Qt,vn,Se,rt,ls,Yt,rl,ds,il,Tn,me,eo,ll,We,dl,cs,cl,pl,to,hl,fl,ml,J,oo,ul,Be,gl,ma,_l,vl,ps,Tl,bl,wl,it,yl,hs,$l,xl,ao,bn,Ue,lt,fs,so,Fl,ms,Vl,wn,re,no,El,us,kl,Ml,ro,Il,io,jl,Pl,Cl,K,lo,Al,Re,ql,ua,zl,Nl,gs,Ll,Dl,Ol,dt,Sl,_s,Wl,Bl,co,yn,He,ct,vs,po,Ul,Ts,Rl,$n,D,ho,Hl,bs,Jl,Kl,fo,Gl,ga,Xl,Zl,Ql,mo,Yl,uo,ed,td,od,pt,ad,G,go,sd,Je,nd,_a,rd,id,ws,ld,dd,cd,ht,pd,ys,hd,fd,_o,xn,Ke,ft,$s,vo,md,xs,ud,Fn,O,To,gd,Fs,_d,vd,bo,Td,va,bd,wd,yd,wo,$d,yo,xd,Fd,Vd,mt,Ed,X,$o,kd,Ge,Md,Ta,Id,jd,Vs,Pd,Cd,Ad,ut,qd,Es,zd,Nd,xo,Vn,Xe,gt,ks,Fo,Ld,Ms,Dd,En,A,Vo,Od,Is,Sd,Wd,Eo,Bd,ba,Ud,Rd,Hd,ko,Jd,Mo,Kd,Gd,Xd,js,Zd,Qd,ue,Ps,Io,Yd,ec,Cs,jo,tc,oc,As,Po,ac,sc,qs,Co,nc,rc,Z,Ao,ic,Ze,lc,zs,dc,cc,Ns,pc,hc,fc,_t,mc,Ls,uc,gc,qo,kn,Qe,vt,Ds,zo,_c,Os,vc,Mn,q,No,Tc,Ss,bc,wc,Lo,yc,wa,$c,xc,Fc,Do,Vc,Oo,Ec,kc,Mc,Ws,Ic,jc,ge,Bs,So,Pc,Cc,Us,Wo,Ac,qc,Rs,Bo,zc,Nc,Hs,Uo,Lc,Dc,Q,Ro,Oc,Ye,Sc,Js,Wc,Bc,Ks,Uc,Rc,Hc,Tt,Jc,Gs,Kc,Gc,Ho,In;return _=new ve({}),k=new _e({props:{$$slots:{default:[Tf]},$$scope:{ctx:M}}}),C=new ve({}),Dt=new ve({}),Ot=new W({props:{name:"class transformers.ViTConfig",anchor:"transformers.ViTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ViTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ViTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ViTConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ViTConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ViTConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ViTConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ViTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ViTConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ViTConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>224</code>) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.ViTConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>16</code>) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.ViTConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to <code>3</code>) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.ViTConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.ViTConfig.encoder_stride",description:`<strong>encoder_stride</strong> (<code>int</code>, <code>optional</code>, defaults to 16) &#x2014;
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/vit/configuration_vit.py#L35"}}),Wt=new Ft({props:{code:`from transformers import ViTModel, ViTConfig

# Initializing a ViT vit-base-patch16-224 style configuration
configuration = ViTConfig()

# Initializing a model from the vit-base-patch16-224 style configuration
model = ViTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTModel, ViTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViT vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ViTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Bt=new ve({}),Ut=new W({props:{name:"class transformers.ViTFeatureExtractor",anchor:"transformers.ViTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ViTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.ViTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ViTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.ViTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/vit/feature_extraction_vit.py#L36"}}),Ht=new W({props:{name:"__call__",anchor:"transformers.ViTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.ViTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_16782/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/vit/feature_extraction_vit.py#L82",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16782/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16782/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),at=new _e({props:{warning:!0,$$slots:{default:[bf]},$$scope:{ctx:M}}}),Jt=new ve({}),Kt=new W({props:{name:"class transformers.ViTModel",anchor:"transformers.ViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16782/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/vit/modeling_vit.py#L512"}}),Zt=new W({props:{name:"forward",anchor:"transformers.ViTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTModel.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16782/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/vit/modeling_vit.py#L537",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16782/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16782/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nt=new _e({props:{$$slots:{default:[wf]},$$scope:{ctx:M}}}),Qt=new Ft({props:{code:`from transformers import ViTFeatureExtractor, ViTModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = ViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),Yt=new ve({}),eo=new W({props:{name:"class transformers.ViTForMaskedImageModeling",anchor:"transformers.ViTForMaskedImageModeling",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16782/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/vit/modeling_vit.py#L617"}}),oo=new W({props:{name:"forward",anchor:"transformers.ViTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTForMaskedImageModeling.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16782/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/vit/modeling_vit.py#L631",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16782/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16782/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),it=new _e({props:{$$slots:{default:[yf]},$$scope:{ctx:M}}}),ao=new Ft({props:{code:`from transformers import ViTFeatureExtractor, ViTForMaskedImageModeling
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = ViTForMaskedImageModeling.from_pretrained("google/vit-base-patch16-224-in21k")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = torch.randint(low=0, high=2, size=(1, num_patches)).bool()

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, reconstructed_pixel_values = outputs.loss, outputs.logits
list(reconstructed_pixel_values.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),so=new ve({}),no=new W({props:{name:"class transformers.ViTForImageClassification",anchor:"transformers.ViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16782/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/vit/modeling_vit.py#L727"}}),lo=new W({props:{name:"forward",anchor:"transformers.ViTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTForImageClassification.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16782/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/vit/modeling_vit.py#L740",returnDescription:`
<p>A <code>transformers.modeling_outputs.ImageClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each stage) of shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states
(also called feature maps) of the model at the output of each stage.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_outputs.ImageClassifierOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dt=new _e({props:{$$slots:{default:[$f]},$$scope:{ctx:M}}}),co=new Ft({props:{code:`from transformers import ViTFeatureExtractor, ViTForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = ViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
Egyptian cat`}}),po=new ve({}),ho=new W({props:{name:"class transformers.TFViTModel",anchor:"transformers.TFViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16782/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/vit/modeling_tf_vit.py#L649"}}),pt=new _e({props:{$$slots:{default:[xf]},$$scope:{ctx:M}}}),go=new W({props:{name:"call",anchor:"transformers.TFViTModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFViTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFViTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFViTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFViTModel.call.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.TFViTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16782/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/vit/modeling_tf_vit.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16782/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16782/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ht=new _e({props:{$$slots:{default:[Ff]},$$scope:{ctx:M}}}),_o=new Ft({props:{code:`from transformers import ViTFeatureExtractor, TFViTModel
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = TFViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(image, return_tensors="tf")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),vo=new ve({}),To=new W({props:{name:"class transformers.TFViTForImageClassification",anchor:"transformers.TFViTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16782/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/vit/modeling_tf_vit.py#L727"}}),mt=new _e({props:{$$slots:{default:[Vf]},$$scope:{ctx:M}}}),$o=new W({props:{name:"call",anchor:"transformers.TFViTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFViTForImageClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFViTForImageClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFViTForImageClassification.call.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.TFViTForImageClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16782/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTForImageClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFViTForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/vit/modeling_tf_vit.py#L741",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16782/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16782/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ut=new _e({props:{$$slots:{default:[Ef]},$$scope:{ctx:M}}}),xo=new Ft({props:{code:`from transformers import ViTFeatureExtractor, TFViTForImageClassification
import tensorflow as tf
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = TFViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(image, return_tensors="tf")
logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = int(tf.math.argmax(logits, axis=-1))
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
Egyptian cat`}}),Fo=new ve({}),Vo=new W({props:{name:"class transformers.FlaxViTModel",anchor:"transformers.FlaxViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16782/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16782/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16782/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/vit/modeling_flax_vit.py#L510"}}),Ao=new W({props:{name:"__call__",anchor:"transformers.FlaxViTModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/vit/modeling_flax_vit.py#L425",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16782/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.vit.configuration_vit.ViTConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16782/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_t=new _e({props:{$$slots:{default:[kf]},$$scope:{ctx:M}}}),qo=new Ft({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTModel
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = FlaxViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),zo=new ve({}),No=new W({props:{name:"class transformers.FlaxViTForImageClassification",anchor:"transformers.FlaxViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16782/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16782/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16782/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/vit/modeling_flax_vit.py#L591"}}),Ro=new W({props:{name:"__call__",anchor:"transformers.FlaxViTForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/vit/modeling_flax_vit.py#L425",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16782/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.vit.configuration_vit.ViTConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16782/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tt=new _e({props:{$$slots:{default:[Mf]},$$scope:{ctx:M}}}),Ho=new Ft({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTForImageClassification
from PIL import Image
import jax
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = FlaxViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
logits = outputs.logits

# model predicts one of the 1000 ImageNet classes
predicted_class_idx = jax.numpy.argmax(logits, axis=-1)
print("Predicted class:", model.config.id2label[predicted_class_idx.item()])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = jax.numpy.argmax(logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx.item()])`}}),{c(){p=a("meta"),T=d(),m=a("h1"),g=a("a"),v=a("span"),b(_.$$.fragment),u=d(),V=a("span"),pe=r("Vision Transformer (ViT)"),R=d(),b(k.$$.fragment),ie=d(),j=a("h2"),B=a("a"),oe=a("span"),b(C.$$.fragment),he=d(),ae=a("span"),E=r("Overview"),I=d(),z=a("p"),Ie=r("The Vision Transformer (ViT) model was proposed in "),se=a("a"),L=r(`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),je=r(` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Te=d(),Xo=a("p"),tr=r("The abstract from the paper is the following:"),sn=d(),Zo=a("p"),Da=a("em"),or=r(`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),nn=d(),Qo=a("p"),ar=r("Tips:"),rn=d(),N=a("ul"),Vt=a("li"),sr=r("Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),Et=a("a"),nr=r("here"),rr=r("."),ir=d(),Oa=a("li"),lr=r(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),dr=d(),kt=a("li"),cr=r(`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Yo=a("a"),pr=r("ViTFeatureExtractor"),hr=r(" to resize (or rescale) and normalize images for the model."),fr=d(),Pe=a("li"),mr=r(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Sa=a("code"),ur=r("google/vit-base-patch16-224"),gr=r(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),Mt=a("a"),_r=r("hub"),vr=r("."),Tr=d(),Ce=a("li"),br=r("The available checkpoints are either (1) pre-trained on "),It=a("a"),wr=r("ImageNet-21k"),yr=r(` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),jt=a("a"),$r=r("ImageNet"),xr=r(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Fr=d(),Ae=a("li"),Vr=r(`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),Pt=a("a"),Er=r("(Touvron et al., 2019)"),kr=r(", "),Ct=a("a"),Mr=r(`(Kolesnikov
et al., 2020)`),Ir=r(`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),jr=d(),Wa=a("li"),Pr=r(`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),ln=d(),ea=a("p"),Cr=r("Following the original Vision Transformer, some follow-up works have been made:"),dn=d(),le=a("ul"),Ba=a("li"),P=a("p"),ta=a("a"),Ar=r("DeiT"),qr=r(` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),oa=a("a"),zr=r("ViTModel"),Nr=r(` or
`),aa=a("a"),Lr=r("ViTForImageClassification"),Dr=r(". There are 4 variants available (in 3 different sizes): "),Ua=a("em"),Or=r("facebook/deit-tiny-patch16-224"),Sr=r(`,
`),Ra=a("em"),Wr=r("facebook/deit-small-patch16-224"),Br=r(", "),Ha=a("em"),Ur=r("facebook/deit-base-patch16-224"),Rr=r(" and "),Ja=a("em"),Hr=r("facebook/deit-base-patch16-384"),Jr=r(`. Note that one should
use `),sa=a("a"),Kr=r("DeiTFeatureExtractor"),Gr=r(" in order to prepare images for the model."),Xr=d(),Ka=a("li"),na=a("p"),ra=a("a"),Zr=r("BEiT"),Qr=r(` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Yr=d(),Ga=a("li"),At=a("p"),ei=r(`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),qt=a("a"),ti=r("hub"),oi=r("."),ai=d(),Xa=a("li"),ia=a("p"),la=a("a"),si=r("MAE"),ni=r(` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),cn=d(),be=a("p"),ri=r("This model was contributed by "),zt=a("a"),ii=r("nielsr"),li=r(`. The original code (written in JAX) can be
found `),Nt=a("a"),di=r("here"),ci=r("."),pn=d(),et=a("p"),pi=r("Note that we converted the weights from Ross Wightman\u2019s "),Lt=a("a"),hi=r("timm library"),fi=r(`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),hn=d(),qe=a("h2"),tt=a("a"),Za=a("span"),b(Dt.$$.fragment),mi=d(),Qa=a("span"),ui=r("ViTConfig"),fn=d(),U=a("div"),b(Ot.$$.fragment),gi=d(),ze=a("p"),_i=r("This is the configuration class to store the configuration of a "),da=a("a"),vi=r("ViTModel"),Ti=r(`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),St=a("a"),bi=r("google/vit-base-patch16-224"),wi=r(" architecture."),yi=d(),Ne=a("p"),$i=r("Configuration objects inherit from "),ca=a("a"),xi=r("PretrainedConfig"),Fi=r(` and can be used to control the model outputs. Read the
documentation from `),pa=a("a"),Vi=r("PretrainedConfig"),Ei=r(" for more information."),ki=d(),Ya=a("p"),Mi=r("Example:"),Ii=d(),b(Wt.$$.fragment),mn=d(),Le=a("h2"),ot=a("a"),es=a("span"),b(Bt.$$.fragment),ji=d(),ts=a("span"),Pi=r("ViTFeatureExtractor"),un=d(),ne=a("div"),b(Ut.$$.fragment),Ci=d(),os=a("p"),Ai=r("Constructs a ViT feature extractor."),qi=d(),Rt=a("p"),zi=r("This feature extractor inherits from "),ha=a("a"),Ni=r("FeatureExtractionMixin"),Li=r(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Di=d(),we=a("div"),b(Ht.$$.fragment),Oi=d(),as=a("p"),Si=r("Main method to prepare for the model one or several image(s)."),Wi=d(),b(at.$$.fragment),gn=d(),De=a("h2"),st=a("a"),ss=a("span"),b(Jt.$$.fragment),Bi=d(),ns=a("span"),Ui=r("ViTModel"),_n=d(),fe=a("div"),b(Kt.$$.fragment),Ri=d(),Gt=a("p"),Hi=r(`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Xt=a("a"),Ji=r("torch.nn.Module"),Ki=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gi=d(),H=a("div"),b(Zt.$$.fragment),Xi=d(),Oe=a("p"),Zi=r("The "),fa=a("a"),Qi=r("ViTModel"),Yi=r(" forward method, overrides the "),rs=a("code"),el=r("__call__"),tl=r(" special method."),ol=d(),b(nt.$$.fragment),al=d(),is=a("p"),sl=r("Example:"),nl=d(),b(Qt.$$.fragment),vn=d(),Se=a("h2"),rt=a("a"),ls=a("span"),b(Yt.$$.fragment),rl=d(),ds=a("span"),il=r("ViTForMaskedImageModeling"),Tn=d(),me=a("div"),b(eo.$$.fragment),ll=d(),We=a("p"),dl=r("ViT Model with a decoder on top for masked image modeling, as proposed in "),cs=a("code"),cl=r("SimMIM <https://arxiv.org/abs/2111.09886>"),pl=r(`__.
This model is a PyTorch `),to=a("a"),hl=r("torch.nn.Module"),fl=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ml=d(),J=a("div"),b(oo.$$.fragment),ul=d(),Be=a("p"),gl=r("The "),ma=a("a"),_l=r("ViTForMaskedImageModeling"),vl=r(" forward method, overrides the "),ps=a("code"),Tl=r("__call__"),bl=r(" special method."),wl=d(),b(it.$$.fragment),yl=d(),hs=a("p"),$l=r("Examples:"),xl=d(),b(ao.$$.fragment),bn=d(),Ue=a("h2"),lt=a("a"),fs=a("span"),b(so.$$.fragment),Fl=d(),ms=a("span"),Vl=r("ViTForImageClassification"),wn=d(),re=a("div"),b(no.$$.fragment),El=d(),us=a("p"),kl=r(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Ml=d(),ro=a("p"),Il=r("This model is a PyTorch "),io=a("a"),jl=r("torch.nn.Module"),Pl=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cl=d(),K=a("div"),b(lo.$$.fragment),Al=d(),Re=a("p"),ql=r("The "),ua=a("a"),zl=r("ViTForImageClassification"),Nl=r(" forward method, overrides the "),gs=a("code"),Ll=r("__call__"),Dl=r(" special method."),Ol=d(),b(dt.$$.fragment),Sl=d(),_s=a("p"),Wl=r("Example:"),Bl=d(),b(co.$$.fragment),yn=d(),He=a("h2"),ct=a("a"),vs=a("span"),b(po.$$.fragment),Ul=d(),Ts=a("span"),Rl=r("TFViTModel"),$n=d(),D=a("div"),b(ho.$$.fragment),Hl=d(),bs=a("p"),Jl=r("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Kl=d(),fo=a("p"),Gl=r("This model inherits from "),ga=a("a"),Xl=r("TFPreTrainedModel"),Zl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ql=d(),mo=a("p"),Yl=r("This model is also a "),uo=a("a"),ed=r("tf.keras.Model"),td=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),od=d(),b(pt.$$.fragment),ad=d(),G=a("div"),b(go.$$.fragment),sd=d(),Je=a("p"),nd=r("The "),_a=a("a"),rd=r("TFViTModel"),id=r(" forward method, overrides the "),ws=a("code"),ld=r("__call__"),dd=r(" special method."),cd=d(),b(ht.$$.fragment),pd=d(),ys=a("p"),hd=r("Example:"),fd=d(),b(_o.$$.fragment),xn=d(),Ke=a("h2"),ft=a("a"),$s=a("span"),b(vo.$$.fragment),md=d(),xs=a("span"),ud=r("TFViTForImageClassification"),Fn=d(),O=a("div"),b(To.$$.fragment),gd=d(),Fs=a("p"),_d=r(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),vd=d(),bo=a("p"),Td=r("This model inherits from "),va=a("a"),bd=r("TFPreTrainedModel"),wd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yd=d(),wo=a("p"),$d=r("This model is also a "),yo=a("a"),xd=r("tf.keras.Model"),Fd=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vd=d(),b(mt.$$.fragment),Ed=d(),X=a("div"),b($o.$$.fragment),kd=d(),Ge=a("p"),Md=r("The "),Ta=a("a"),Id=r("TFViTForImageClassification"),jd=r(" forward method, overrides the "),Vs=a("code"),Pd=r("__call__"),Cd=r(" special method."),Ad=d(),b(ut.$$.fragment),qd=d(),Es=a("p"),zd=r("Example:"),Nd=d(),b(xo.$$.fragment),Vn=d(),Xe=a("h2"),gt=a("a"),ks=a("span"),b(Fo.$$.fragment),Ld=d(),Ms=a("span"),Dd=r("FlaxVitModel"),En=d(),A=a("div"),b(Vo.$$.fragment),Od=d(),Is=a("p"),Sd=r("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Wd=d(),Eo=a("p"),Bd=r("This model inherits from "),ba=a("a"),Ud=r("FlaxPreTrainedModel"),Rd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Hd=d(),ko=a("p"),Jd=r("This model is also a Flax Linen "),Mo=a("a"),Kd=r("flax.linen.Module"),Gd=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xd=d(),js=a("p"),Zd=r("Finally, this model supports inherent JAX features such as:"),Qd=d(),ue=a("ul"),Ps=a("li"),Io=a("a"),Yd=r("Just-In-Time (JIT) compilation"),ec=d(),Cs=a("li"),jo=a("a"),tc=r("Automatic Differentiation"),oc=d(),As=a("li"),Po=a("a"),ac=r("Vectorization"),sc=d(),qs=a("li"),Co=a("a"),nc=r("Parallelization"),rc=d(),Z=a("div"),b(Ao.$$.fragment),ic=d(),Ze=a("p"),lc=r("The "),zs=a("code"),dc=r("FlaxViTPreTrainedModel"),cc=r(" forward method, overrides the "),Ns=a("code"),pc=r("__call__"),hc=r(" special method."),fc=d(),b(_t.$$.fragment),mc=d(),Ls=a("p"),uc=r("Examples:"),gc=d(),b(qo.$$.fragment),kn=d(),Qe=a("h2"),vt=a("a"),Ds=a("span"),b(zo.$$.fragment),_c=d(),Os=a("span"),vc=r("FlaxViTForImageClassification"),Mn=d(),q=a("div"),b(No.$$.fragment),Tc=d(),Ss=a("p"),bc=r(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),wc=d(),Lo=a("p"),yc=r("This model inherits from "),wa=a("a"),$c=r("FlaxPreTrainedModel"),xc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fc=d(),Do=a("p"),Vc=r("This model is also a Flax Linen "),Oo=a("a"),Ec=r("flax.linen.Module"),kc=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Mc=d(),Ws=a("p"),Ic=r("Finally, this model supports inherent JAX features such as:"),jc=d(),ge=a("ul"),Bs=a("li"),So=a("a"),Pc=r("Just-In-Time (JIT) compilation"),Cc=d(),Us=a("li"),Wo=a("a"),Ac=r("Automatic Differentiation"),qc=d(),Rs=a("li"),Bo=a("a"),zc=r("Vectorization"),Nc=d(),Hs=a("li"),Uo=a("a"),Lc=r("Parallelization"),Dc=d(),Q=a("div"),b(Ro.$$.fragment),Oc=d(),Ye=a("p"),Sc=r("The "),Js=a("code"),Wc=r("FlaxViTPreTrainedModel"),Bc=r(" forward method, overrides the "),Ks=a("code"),Uc=r("__call__"),Rc=r(" special method."),Hc=d(),b(Tt.$$.fragment),Jc=d(),Gs=a("p"),Kc=r("Example:"),Gc=d(),b(Ho.$$.fragment),this.h()},l(o){const h=_f('[data-svelte="svelte-1phssyn"]',document.head);p=s(h,"META",{name:!0,content:!0}),h.forEach(t),T=c(o),m=s(o,"H1",{class:!0});var Jo=n(m);g=s(Jo,"A",{id:!0,class:!0,href:!0});var Xs=n(g);v=s(Xs,"SPAN",{});var Zs=n(v);w(_.$$.fragment,Zs),Zs.forEach(t),Xs.forEach(t),u=c(Jo),V=s(Jo,"SPAN",{});var Qs=n(V);pe=i(Qs,"Vision Transformer (ViT)"),Qs.forEach(t),Jo.forEach(t),R=c(o),w(k.$$.fragment,o),ie=c(o),j=s(o,"H2",{class:!0});var Ko=n(j);B=s(Ko,"A",{id:!0,class:!0,href:!0});var Ys=n(B);oe=s(Ys,"SPAN",{});var en=n(oe);w(C.$$.fragment,en),en.forEach(t),Ys.forEach(t),he=c(Ko),ae=s(Ko,"SPAN",{});var tn=n(ae);E=i(tn,"Overview"),tn.forEach(t),Ko.forEach(t),I=c(o),z=s(o,"P",{});var Go=n(z);Ie=i(Go,"The Vision Transformer (ViT) model was proposed in "),se=s(Go,"A",{href:!0,rel:!0});var on=n(se);L=i(on,`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),on.forEach(t),je=i(Go,` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Go.forEach(t),Te=c(o),Xo=s(o,"P",{});var an=n(Xo);tr=i(an,"The abstract from the paper is the following:"),an.forEach(t),sn=c(o),Zo=s(o,"P",{});var Qc=n(Zo);Da=s(Qc,"EM",{});var Yc=n(Da);or=i(Yc,`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),Yc.forEach(t),Qc.forEach(t),nn=c(o),Qo=s(o,"P",{});var ep=n(Qo);ar=i(ep,"Tips:"),ep.forEach(t),rn=c(o),N=s(o,"UL",{});var Y=n(N);Vt=s(Y,"LI",{});var jn=n(Vt);sr=i(jn,"Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),Et=s(jn,"A",{href:!0,rel:!0});var tp=n(Et);nr=i(tp,"here"),tp.forEach(t),rr=i(jn,"."),jn.forEach(t),ir=c(Y),Oa=s(Y,"LI",{});var op=n(Oa);lr=i(op,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),op.forEach(t),dr=c(Y),kt=s(Y,"LI",{});var Pn=n(kt);cr=i(Pn,`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Yo=s(Pn,"A",{href:!0});var ap=n(Yo);pr=i(ap,"ViTFeatureExtractor"),ap.forEach(t),hr=i(Pn," to resize (or rescale) and normalize images for the model."),Pn.forEach(t),fr=c(Y),Pe=s(Y,"LI",{});var ya=n(Pe);mr=i(ya,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Sa=s(ya,"CODE",{});var sp=n(Sa);ur=i(sp,"google/vit-base-patch16-224"),sp.forEach(t),gr=i(ya,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),Mt=s(ya,"A",{href:!0,rel:!0});var np=n(Mt);_r=i(np,"hub"),np.forEach(t),vr=i(ya,"."),ya.forEach(t),Tr=c(Y),Ce=s(Y,"LI",{});var $a=n(Ce);br=i($a,"The available checkpoints are either (1) pre-trained on "),It=s($a,"A",{href:!0,rel:!0});var rp=n(It);wr=i(rp,"ImageNet-21k"),rp.forEach(t),yr=i($a,` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),jt=s($a,"A",{href:!0,rel:!0});var ip=n(jt);$r=i(ip,"ImageNet"),ip.forEach(t),xr=i($a,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),$a.forEach(t),Fr=c(Y),Ae=s(Y,"LI",{});var xa=n(Ae);Vr=i(xa,`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),Pt=s(xa,"A",{href:!0,rel:!0});var lp=n(Pt);Er=i(lp,"(Touvron et al., 2019)"),lp.forEach(t),kr=i(xa,", "),Ct=s(xa,"A",{href:!0,rel:!0});var dp=n(Ct);Mr=i(dp,`(Kolesnikov
et al., 2020)`),dp.forEach(t),Ir=i(xa,`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),xa.forEach(t),jr=c(Y),Wa=s(Y,"LI",{});var cp=n(Wa);Pr=i(cp,`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),cp.forEach(t),Y.forEach(t),ln=c(o),ea=s(o,"P",{});var pp=n(ea);Cr=i(pp,"Following the original Vision Transformer, some follow-up works have been made:"),pp.forEach(t),dn=c(o),le=s(o,"UL",{});var bt=n(le);Ba=s(bt,"LI",{});var hp=n(Ba);P=s(hp,"P",{});var S=n(P);ta=s(S,"A",{href:!0});var fp=n(ta);Ar=i(fp,"DeiT"),fp.forEach(t),qr=i(S,` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),oa=s(S,"A",{href:!0});var mp=n(oa);zr=i(mp,"ViTModel"),mp.forEach(t),Nr=i(S,` or
`),aa=s(S,"A",{href:!0});var up=n(aa);Lr=i(up,"ViTForImageClassification"),up.forEach(t),Dr=i(S,". There are 4 variants available (in 3 different sizes): "),Ua=s(S,"EM",{});var gp=n(Ua);Or=i(gp,"facebook/deit-tiny-patch16-224"),gp.forEach(t),Sr=i(S,`,
`),Ra=s(S,"EM",{});var _p=n(Ra);Wr=i(_p,"facebook/deit-small-patch16-224"),_p.forEach(t),Br=i(S,", "),Ha=s(S,"EM",{});var vp=n(Ha);Ur=i(vp,"facebook/deit-base-patch16-224"),vp.forEach(t),Rr=i(S," and "),Ja=s(S,"EM",{});var Tp=n(Ja);Hr=i(Tp,"facebook/deit-base-patch16-384"),Tp.forEach(t),Jr=i(S,`. Note that one should
use `),sa=s(S,"A",{href:!0});var bp=n(sa);Kr=i(bp,"DeiTFeatureExtractor"),bp.forEach(t),Gr=i(S," in order to prepare images for the model."),S.forEach(t),hp.forEach(t),Xr=c(bt),Ka=s(bt,"LI",{});var wp=n(Ka);na=s(wp,"P",{});var Xc=n(na);ra=s(Xc,"A",{href:!0});var yp=n(ra);Zr=i(yp,"BEiT"),yp.forEach(t),Qr=i(Xc,` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Xc.forEach(t),wp.forEach(t),Yr=c(bt),Ga=s(bt,"LI",{});var $p=n(Ga);At=s($p,"P",{});var Cn=n(At);ei=i(Cn,`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),qt=s(Cn,"A",{href:!0,rel:!0});var xp=n(qt);ti=i(xp,"hub"),xp.forEach(t),oi=i(Cn,"."),Cn.forEach(t),$p.forEach(t),ai=c(bt),Xa=s(bt,"LI",{});var Fp=n(Xa);ia=s(Fp,"P",{});var Zc=n(ia);la=s(Zc,"A",{href:!0});var Vp=n(la);si=i(Vp,"MAE"),Vp.forEach(t),ni=i(Zc,` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),Zc.forEach(t),Fp.forEach(t),bt.forEach(t),cn=c(o),be=s(o,"P",{});var Fa=n(be);ri=i(Fa,"This model was contributed by "),zt=s(Fa,"A",{href:!0,rel:!0});var Ep=n(zt);ii=i(Ep,"nielsr"),Ep.forEach(t),li=i(Fa,`. The original code (written in JAX) can be
found `),Nt=s(Fa,"A",{href:!0,rel:!0});var kp=n(Nt);di=i(kp,"here"),kp.forEach(t),ci=i(Fa,"."),Fa.forEach(t),pn=c(o),et=s(o,"P",{});var An=n(et);pi=i(An,"Note that we converted the weights from Ross Wightman\u2019s "),Lt=s(An,"A",{href:!0,rel:!0});var Mp=n(Lt);hi=i(Mp,"timm library"),Mp.forEach(t),fi=i(An,`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),An.forEach(t),hn=c(o),qe=s(o,"H2",{class:!0});var qn=n(qe);tt=s(qn,"A",{id:!0,class:!0,href:!0});var Ip=n(tt);Za=s(Ip,"SPAN",{});var jp=n(Za);w(Dt.$$.fragment,jp),jp.forEach(t),Ip.forEach(t),mi=c(qn),Qa=s(qn,"SPAN",{});var Pp=n(Qa);ui=i(Pp,"ViTConfig"),Pp.forEach(t),qn.forEach(t),fn=c(o),U=s(o,"DIV",{class:!0});var ye=n(U);w(Ot.$$.fragment,ye),gi=c(ye),ze=s(ye,"P",{});var Va=n(ze);_i=i(Va,"This is the configuration class to store the configuration of a "),da=s(Va,"A",{href:!0});var Cp=n(da);vi=i(Cp,"ViTModel"),Cp.forEach(t),Ti=i(Va,`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),St=s(Va,"A",{href:!0,rel:!0});var Ap=n(St);bi=i(Ap,"google/vit-base-patch16-224"),Ap.forEach(t),wi=i(Va," architecture."),Va.forEach(t),yi=c(ye),Ne=s(ye,"P",{});var Ea=n(Ne);$i=i(Ea,"Configuration objects inherit from "),ca=s(Ea,"A",{href:!0});var qp=n(ca);xi=i(qp,"PretrainedConfig"),qp.forEach(t),Fi=i(Ea,` and can be used to control the model outputs. Read the
documentation from `),pa=s(Ea,"A",{href:!0});var zp=n(pa);Vi=i(zp,"PretrainedConfig"),zp.forEach(t),Ei=i(Ea," for more information."),Ea.forEach(t),ki=c(ye),Ya=s(ye,"P",{});var Np=n(Ya);Mi=i(Np,"Example:"),Np.forEach(t),Ii=c(ye),w(Wt.$$.fragment,ye),ye.forEach(t),mn=c(o),Le=s(o,"H2",{class:!0});var zn=n(Le);ot=s(zn,"A",{id:!0,class:!0,href:!0});var Lp=n(ot);es=s(Lp,"SPAN",{});var Dp=n(es);w(Bt.$$.fragment,Dp),Dp.forEach(t),Lp.forEach(t),ji=c(zn),ts=s(zn,"SPAN",{});var Op=n(ts);Pi=i(Op,"ViTFeatureExtractor"),Op.forEach(t),zn.forEach(t),un=c(o),ne=s(o,"DIV",{class:!0});var wt=n(ne);w(Ut.$$.fragment,wt),Ci=c(wt),os=s(wt,"P",{});var Sp=n(os);Ai=i(Sp,"Constructs a ViT feature extractor."),Sp.forEach(t),qi=c(wt),Rt=s(wt,"P",{});var Nn=n(Rt);zi=i(Nn,"This feature extractor inherits from "),ha=s(Nn,"A",{href:!0});var Wp=n(ha);Ni=i(Wp,"FeatureExtractionMixin"),Wp.forEach(t),Li=i(Nn,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Nn.forEach(t),Di=c(wt),we=s(wt,"DIV",{class:!0});var ka=n(we);w(Ht.$$.fragment,ka),Oi=c(ka),as=s(ka,"P",{});var Bp=n(as);Si=i(Bp,"Main method to prepare for the model one or several image(s)."),Bp.forEach(t),Wi=c(ka),w(at.$$.fragment,ka),ka.forEach(t),wt.forEach(t),gn=c(o),De=s(o,"H2",{class:!0});var Ln=n(De);st=s(Ln,"A",{id:!0,class:!0,href:!0});var Up=n(st);ss=s(Up,"SPAN",{});var Rp=n(ss);w(Jt.$$.fragment,Rp),Rp.forEach(t),Up.forEach(t),Bi=c(Ln),ns=s(Ln,"SPAN",{});var Hp=n(ns);Ui=i(Hp,"ViTModel"),Hp.forEach(t),Ln.forEach(t),_n=c(o),fe=s(o,"DIV",{class:!0});var Ma=n(fe);w(Kt.$$.fragment,Ma),Ri=c(Ma),Gt=s(Ma,"P",{});var Dn=n(Gt);Hi=i(Dn,`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Xt=s(Dn,"A",{href:!0,rel:!0});var Jp=n(Xt);Ji=i(Jp,"torch.nn.Module"),Jp.forEach(t),Ki=i(Dn,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dn.forEach(t),Gi=c(Ma),H=s(Ma,"DIV",{class:!0});var $e=n(H);w(Zt.$$.fragment,$e),Xi=c($e),Oe=s($e,"P",{});var Ia=n(Oe);Zi=i(Ia,"The "),fa=s(Ia,"A",{href:!0});var Kp=n(fa);Qi=i(Kp,"ViTModel"),Kp.forEach(t),Yi=i(Ia," forward method, overrides the "),rs=s(Ia,"CODE",{});var Gp=n(rs);el=i(Gp,"__call__"),Gp.forEach(t),tl=i(Ia," special method."),Ia.forEach(t),ol=c($e),w(nt.$$.fragment,$e),al=c($e),is=s($e,"P",{});var Xp=n(is);sl=i(Xp,"Example:"),Xp.forEach(t),nl=c($e),w(Qt.$$.fragment,$e),$e.forEach(t),Ma.forEach(t),vn=c(o),Se=s(o,"H2",{class:!0});var On=n(Se);rt=s(On,"A",{id:!0,class:!0,href:!0});var Zp=n(rt);ls=s(Zp,"SPAN",{});var Qp=n(ls);w(Yt.$$.fragment,Qp),Qp.forEach(t),Zp.forEach(t),rl=c(On),ds=s(On,"SPAN",{});var Yp=n(ds);il=i(Yp,"ViTForMaskedImageModeling"),Yp.forEach(t),On.forEach(t),Tn=c(o),me=s(o,"DIV",{class:!0});var ja=n(me);w(eo.$$.fragment,ja),ll=c(ja),We=s(ja,"P",{});var Pa=n(We);dl=i(Pa,"ViT Model with a decoder on top for masked image modeling, as proposed in "),cs=s(Pa,"CODE",{});var eh=n(cs);cl=i(eh,"SimMIM <https://arxiv.org/abs/2111.09886>"),eh.forEach(t),pl=i(Pa,`__.
This model is a PyTorch `),to=s(Pa,"A",{href:!0,rel:!0});var th=n(to);hl=i(th,"torch.nn.Module"),th.forEach(t),fl=i(Pa,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pa.forEach(t),ml=c(ja),J=s(ja,"DIV",{class:!0});var xe=n(J);w(oo.$$.fragment,xe),ul=c(xe),Be=s(xe,"P",{});var Ca=n(Be);gl=i(Ca,"The "),ma=s(Ca,"A",{href:!0});var oh=n(ma);_l=i(oh,"ViTForMaskedImageModeling"),oh.forEach(t),vl=i(Ca," forward method, overrides the "),ps=s(Ca,"CODE",{});var ah=n(ps);Tl=i(ah,"__call__"),ah.forEach(t),bl=i(Ca," special method."),Ca.forEach(t),wl=c(xe),w(it.$$.fragment,xe),yl=c(xe),hs=s(xe,"P",{});var sh=n(hs);$l=i(sh,"Examples:"),sh.forEach(t),xl=c(xe),w(ao.$$.fragment,xe),xe.forEach(t),ja.forEach(t),bn=c(o),Ue=s(o,"H2",{class:!0});var Sn=n(Ue);lt=s(Sn,"A",{id:!0,class:!0,href:!0});var nh=n(lt);fs=s(nh,"SPAN",{});var rh=n(fs);w(so.$$.fragment,rh),rh.forEach(t),nh.forEach(t),Fl=c(Sn),ms=s(Sn,"SPAN",{});var ih=n(ms);Vl=i(ih,"ViTForImageClassification"),ih.forEach(t),Sn.forEach(t),wn=c(o),re=s(o,"DIV",{class:!0});var yt=n(re);w(no.$$.fragment,yt),El=c(yt),us=s(yt,"P",{});var lh=n(us);kl=i(lh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),lh.forEach(t),Ml=c(yt),ro=s(yt,"P",{});var Wn=n(ro);Il=i(Wn,"This model is a PyTorch "),io=s(Wn,"A",{href:!0,rel:!0});var dh=n(io);jl=i(dh,"torch.nn.Module"),dh.forEach(t),Pl=i(Wn,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wn.forEach(t),Cl=c(yt),K=s(yt,"DIV",{class:!0});var Fe=n(K);w(lo.$$.fragment,Fe),Al=c(Fe),Re=s(Fe,"P",{});var Aa=n(Re);ql=i(Aa,"The "),ua=s(Aa,"A",{href:!0});var ch=n(ua);zl=i(ch,"ViTForImageClassification"),ch.forEach(t),Nl=i(Aa," forward method, overrides the "),gs=s(Aa,"CODE",{});var ph=n(gs);Ll=i(ph,"__call__"),ph.forEach(t),Dl=i(Aa," special method."),Aa.forEach(t),Ol=c(Fe),w(dt.$$.fragment,Fe),Sl=c(Fe),_s=s(Fe,"P",{});var hh=n(_s);Wl=i(hh,"Example:"),hh.forEach(t),Bl=c(Fe),w(co.$$.fragment,Fe),Fe.forEach(t),yt.forEach(t),yn=c(o),He=s(o,"H2",{class:!0});var Bn=n(He);ct=s(Bn,"A",{id:!0,class:!0,href:!0});var fh=n(ct);vs=s(fh,"SPAN",{});var mh=n(vs);w(po.$$.fragment,mh),mh.forEach(t),fh.forEach(t),Ul=c(Bn),Ts=s(Bn,"SPAN",{});var uh=n(Ts);Rl=i(uh,"TFViTModel"),uh.forEach(t),Bn.forEach(t),$n=c(o),D=s(o,"DIV",{class:!0});var de=n(D);w(ho.$$.fragment,de),Hl=c(de),bs=s(de,"P",{});var gh=n(bs);Jl=i(gh,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),gh.forEach(t),Kl=c(de),fo=s(de,"P",{});var Un=n(fo);Gl=i(Un,"This model inherits from "),ga=s(Un,"A",{href:!0});var _h=n(ga);Xl=i(_h,"TFPreTrainedModel"),_h.forEach(t),Zl=i(Un,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Un.forEach(t),Ql=c(de),mo=s(de,"P",{});var Rn=n(mo);Yl=i(Rn,"This model is also a "),uo=s(Rn,"A",{href:!0,rel:!0});var vh=n(uo);ed=i(vh,"tf.keras.Model"),vh.forEach(t),td=i(Rn,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rn.forEach(t),od=c(de),w(pt.$$.fragment,de),ad=c(de),G=s(de,"DIV",{class:!0});var Ve=n(G);w(go.$$.fragment,Ve),sd=c(Ve),Je=s(Ve,"P",{});var qa=n(Je);nd=i(qa,"The "),_a=s(qa,"A",{href:!0});var Th=n(_a);rd=i(Th,"TFViTModel"),Th.forEach(t),id=i(qa," forward method, overrides the "),ws=s(qa,"CODE",{});var bh=n(ws);ld=i(bh,"__call__"),bh.forEach(t),dd=i(qa," special method."),qa.forEach(t),cd=c(Ve),w(ht.$$.fragment,Ve),pd=c(Ve),ys=s(Ve,"P",{});var wh=n(ys);hd=i(wh,"Example:"),wh.forEach(t),fd=c(Ve),w(_o.$$.fragment,Ve),Ve.forEach(t),de.forEach(t),xn=c(o),Ke=s(o,"H2",{class:!0});var Hn=n(Ke);ft=s(Hn,"A",{id:!0,class:!0,href:!0});var yh=n(ft);$s=s(yh,"SPAN",{});var $h=n($s);w(vo.$$.fragment,$h),$h.forEach(t),yh.forEach(t),md=c(Hn),xs=s(Hn,"SPAN",{});var xh=n(xs);ud=i(xh,"TFViTForImageClassification"),xh.forEach(t),Hn.forEach(t),Fn=c(o),O=s(o,"DIV",{class:!0});var ce=n(O);w(To.$$.fragment,ce),gd=c(ce),Fs=s(ce,"P",{});var Fh=n(Fs);_d=i(Fh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Fh.forEach(t),vd=c(ce),bo=s(ce,"P",{});var Jn=n(bo);Td=i(Jn,"This model inherits from "),va=s(Jn,"A",{href:!0});var Vh=n(va);bd=i(Vh,"TFPreTrainedModel"),Vh.forEach(t),wd=i(Jn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jn.forEach(t),yd=c(ce),wo=s(ce,"P",{});var Kn=n(wo);$d=i(Kn,"This model is also a "),yo=s(Kn,"A",{href:!0,rel:!0});var Eh=n(yo);xd=i(Eh,"tf.keras.Model"),Eh.forEach(t),Fd=i(Kn,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kn.forEach(t),Vd=c(ce),w(mt.$$.fragment,ce),Ed=c(ce),X=s(ce,"DIV",{class:!0});var Ee=n(X);w($o.$$.fragment,Ee),kd=c(Ee),Ge=s(Ee,"P",{});var za=n(Ge);Md=i(za,"The "),Ta=s(za,"A",{href:!0});var kh=n(Ta);Id=i(kh,"TFViTForImageClassification"),kh.forEach(t),jd=i(za," forward method, overrides the "),Vs=s(za,"CODE",{});var Mh=n(Vs);Pd=i(Mh,"__call__"),Mh.forEach(t),Cd=i(za," special method."),za.forEach(t),Ad=c(Ee),w(ut.$$.fragment,Ee),qd=c(Ee),Es=s(Ee,"P",{});var Ih=n(Es);zd=i(Ih,"Example:"),Ih.forEach(t),Nd=c(Ee),w(xo.$$.fragment,Ee),Ee.forEach(t),ce.forEach(t),Vn=c(o),Xe=s(o,"H2",{class:!0});var Gn=n(Xe);gt=s(Gn,"A",{id:!0,class:!0,href:!0});var jh=n(gt);ks=s(jh,"SPAN",{});var Ph=n(ks);w(Fo.$$.fragment,Ph),Ph.forEach(t),jh.forEach(t),Ld=c(Gn),Ms=s(Gn,"SPAN",{});var Ch=n(Ms);Dd=i(Ch,"FlaxVitModel"),Ch.forEach(t),Gn.forEach(t),En=c(o),A=s(o,"DIV",{class:!0});var ee=n(A);w(Vo.$$.fragment,ee),Od=c(ee),Is=s(ee,"P",{});var Ah=n(Is);Sd=i(Ah,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Ah.forEach(t),Wd=c(ee),Eo=s(ee,"P",{});var Xn=n(Eo);Bd=i(Xn,"This model inherits from "),ba=s(Xn,"A",{href:!0});var qh=n(ba);Ud=i(qh,"FlaxPreTrainedModel"),qh.forEach(t),Rd=i(Xn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Xn.forEach(t),Hd=c(ee),ko=s(ee,"P",{});var Zn=n(ko);Jd=i(Zn,"This model is also a Flax Linen "),Mo=s(Zn,"A",{href:!0,rel:!0});var zh=n(Mo);Kd=i(zh,"flax.linen.Module"),zh.forEach(t),Gd=i(Zn,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Zn.forEach(t),Xd=c(ee),js=s(ee,"P",{});var Nh=n(js);Zd=i(Nh,"Finally, this model supports inherent JAX features such as:"),Nh.forEach(t),Qd=c(ee),ue=s(ee,"UL",{});var $t=n(ue);Ps=s($t,"LI",{});var Lh=n(Ps);Io=s(Lh,"A",{href:!0,rel:!0});var Dh=n(Io);Yd=i(Dh,"Just-In-Time (JIT) compilation"),Dh.forEach(t),Lh.forEach(t),ec=c($t),Cs=s($t,"LI",{});var Oh=n(Cs);jo=s(Oh,"A",{href:!0,rel:!0});var Sh=n(jo);tc=i(Sh,"Automatic Differentiation"),Sh.forEach(t),Oh.forEach(t),oc=c($t),As=s($t,"LI",{});var Wh=n(As);Po=s(Wh,"A",{href:!0,rel:!0});var Bh=n(Po);ac=i(Bh,"Vectorization"),Bh.forEach(t),Wh.forEach(t),sc=c($t),qs=s($t,"LI",{});var Uh=n(qs);Co=s(Uh,"A",{href:!0,rel:!0});var Rh=n(Co);nc=i(Rh,"Parallelization"),Rh.forEach(t),Uh.forEach(t),$t.forEach(t),rc=c(ee),Z=s(ee,"DIV",{class:!0});var ke=n(Z);w(Ao.$$.fragment,ke),ic=c(ke),Ze=s(ke,"P",{});var Na=n(Ze);lc=i(Na,"The "),zs=s(Na,"CODE",{});var Hh=n(zs);dc=i(Hh,"FlaxViTPreTrainedModel"),Hh.forEach(t),cc=i(Na," forward method, overrides the "),Ns=s(Na,"CODE",{});var Jh=n(Ns);pc=i(Jh,"__call__"),Jh.forEach(t),hc=i(Na," special method."),Na.forEach(t),fc=c(ke),w(_t.$$.fragment,ke),mc=c(ke),Ls=s(ke,"P",{});var Kh=n(Ls);uc=i(Kh,"Examples:"),Kh.forEach(t),gc=c(ke),w(qo.$$.fragment,ke),ke.forEach(t),ee.forEach(t),kn=c(o),Qe=s(o,"H2",{class:!0});var Qn=n(Qe);vt=s(Qn,"A",{id:!0,class:!0,href:!0});var Gh=n(vt);Ds=s(Gh,"SPAN",{});var Xh=n(Ds);w(zo.$$.fragment,Xh),Xh.forEach(t),Gh.forEach(t),_c=c(Qn),Os=s(Qn,"SPAN",{});var Zh=n(Os);vc=i(Zh,"FlaxViTForImageClassification"),Zh.forEach(t),Qn.forEach(t),Mn=c(o),q=s(o,"DIV",{class:!0});var te=n(q);w(No.$$.fragment,te),Tc=c(te),Ss=s(te,"P",{});var Qh=n(Ss);bc=i(Qh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Qh.forEach(t),wc=c(te),Lo=s(te,"P",{});var Yn=n(Lo);yc=i(Yn,"This model inherits from "),wa=s(Yn,"A",{href:!0});var Yh=n(wa);$c=i(Yh,"FlaxPreTrainedModel"),Yh.forEach(t),xc=i(Yn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Yn.forEach(t),Fc=c(te),Do=s(te,"P",{});var er=n(Do);Vc=i(er,"This model is also a Flax Linen "),Oo=s(er,"A",{href:!0,rel:!0});var ef=n(Oo);Ec=i(ef,"flax.linen.Module"),ef.forEach(t),kc=i(er,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),er.forEach(t),Mc=c(te),Ws=s(te,"P",{});var tf=n(Ws);Ic=i(tf,"Finally, this model supports inherent JAX features such as:"),tf.forEach(t),jc=c(te),ge=s(te,"UL",{});var xt=n(ge);Bs=s(xt,"LI",{});var of=n(Bs);So=s(of,"A",{href:!0,rel:!0});var af=n(So);Pc=i(af,"Just-In-Time (JIT) compilation"),af.forEach(t),of.forEach(t),Cc=c(xt),Us=s(xt,"LI",{});var sf=n(Us);Wo=s(sf,"A",{href:!0,rel:!0});var nf=n(Wo);Ac=i(nf,"Automatic Differentiation"),nf.forEach(t),sf.forEach(t),qc=c(xt),Rs=s(xt,"LI",{});var rf=n(Rs);Bo=s(rf,"A",{href:!0,rel:!0});var lf=n(Bo);zc=i(lf,"Vectorization"),lf.forEach(t),rf.forEach(t),Nc=c(xt),Hs=s(xt,"LI",{});var df=n(Hs);Uo=s(df,"A",{href:!0,rel:!0});var cf=n(Uo);Lc=i(cf,"Parallelization"),cf.forEach(t),df.forEach(t),xt.forEach(t),Dc=c(te),Q=s(te,"DIV",{class:!0});var Me=n(Q);w(Ro.$$.fragment,Me),Oc=c(Me),Ye=s(Me,"P",{});var La=n(Ye);Sc=i(La,"The "),Js=s(La,"CODE",{});var pf=n(Js);Wc=i(pf,"FlaxViTPreTrainedModel"),pf.forEach(t),Bc=i(La," forward method, overrides the "),Ks=s(La,"CODE",{});var hf=n(Ks);Uc=i(hf,"__call__"),hf.forEach(t),Rc=i(La," special method."),La.forEach(t),Hc=c(Me),w(Tt.$$.fragment,Me),Jc=c(Me),Gs=s(Me,"P",{});var ff=n(Gs);Kc=i(ff,"Example:"),ff.forEach(t),Gc=c(Me),w(Ho.$$.fragment,Me),Me.forEach(t),te.forEach(t),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(jf)),l(g,"id","vision-transformer-vit"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#vision-transformer-vit"),l(m,"class","relative group"),l(B,"id","overview"),l(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(B,"href","#overview"),l(j,"class","relative group"),l(se,"href","https://arxiv.org/abs/2010.11929"),l(se,"rel","nofollow"),l(Et,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),l(Et,"rel","nofollow"),l(Yo,"href","/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTFeatureExtractor"),l(Mt,"href","https://huggingface.co/models?search=vit"),l(Mt,"rel","nofollow"),l(It,"href","http://www.image-net.org/"),l(It,"rel","nofollow"),l(jt,"href","http://www.image-net.org/challenges/LSVRC/2012/"),l(jt,"rel","nofollow"),l(Pt,"href","https://arxiv.org/abs/1906.06423"),l(Pt,"rel","nofollow"),l(Ct,"href","https://arxiv.org/abs/1912.11370"),l(Ct,"rel","nofollow"),l(ta,"href","deit"),l(oa,"href","/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTModel"),l(aa,"href","/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTForImageClassification"),l(sa,"href","/docs/transformers/pr_16782/en/model_doc/deit#transformers.DeiTFeatureExtractor"),l(ra,"href","beit"),l(qt,"href","https://huggingface.co/models?other=dino"),l(qt,"rel","nofollow"),l(la,"href","vit_mae"),l(zt,"href","https://huggingface.co/nielsr"),l(zt,"rel","nofollow"),l(Nt,"href","https://github.com/google-research/vision_transformer"),l(Nt,"rel","nofollow"),l(Lt,"href","https://github.com/rwightman/pytorch-image-models"),l(Lt,"rel","nofollow"),l(tt,"id","transformers.ViTConfig"),l(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(tt,"href","#transformers.ViTConfig"),l(qe,"class","relative group"),l(da,"href","/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTModel"),l(St,"href","https://huggingface.co/google/vit-base-patch16-224"),l(St,"rel","nofollow"),l(ca,"href","/docs/transformers/pr_16782/en/main_classes/configuration#transformers.PretrainedConfig"),l(pa,"href","/docs/transformers/pr_16782/en/main_classes/configuration#transformers.PretrainedConfig"),l(U,"class","docstring"),l(ot,"id","transformers.ViTFeatureExtractor"),l(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ot,"href","#transformers.ViTFeatureExtractor"),l(Le,"class","relative group"),l(ha,"href","/docs/transformers/pr_16782/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),l(we,"class","docstring"),l(ne,"class","docstring"),l(st,"id","transformers.ViTModel"),l(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(st,"href","#transformers.ViTModel"),l(De,"class","relative group"),l(Xt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Xt,"rel","nofollow"),l(fa,"href","/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTModel"),l(H,"class","docstring"),l(fe,"class","docstring"),l(rt,"id","transformers.ViTForMaskedImageModeling"),l(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(rt,"href","#transformers.ViTForMaskedImageModeling"),l(Se,"class","relative group"),l(to,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(to,"rel","nofollow"),l(ma,"href","/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTForMaskedImageModeling"),l(J,"class","docstring"),l(me,"class","docstring"),l(lt,"id","transformers.ViTForImageClassification"),l(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(lt,"href","#transformers.ViTForImageClassification"),l(Ue,"class","relative group"),l(io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(io,"rel","nofollow"),l(ua,"href","/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTForImageClassification"),l(K,"class","docstring"),l(re,"class","docstring"),l(ct,"id","transformers.TFViTModel"),l(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ct,"href","#transformers.TFViTModel"),l(He,"class","relative group"),l(ga,"href","/docs/transformers/pr_16782/en/main_classes/model#transformers.TFPreTrainedModel"),l(uo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(uo,"rel","nofollow"),l(_a,"href","/docs/transformers/pr_16782/en/model_doc/vit#transformers.TFViTModel"),l(G,"class","docstring"),l(D,"class","docstring"),l(ft,"id","transformers.TFViTForImageClassification"),l(ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ft,"href","#transformers.TFViTForImageClassification"),l(Ke,"class","relative group"),l(va,"href","/docs/transformers/pr_16782/en/main_classes/model#transformers.TFPreTrainedModel"),l(yo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(yo,"rel","nofollow"),l(Ta,"href","/docs/transformers/pr_16782/en/model_doc/vit#transformers.TFViTForImageClassification"),l(X,"class","docstring"),l(O,"class","docstring"),l(gt,"id","transformers.FlaxViTModel"),l(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(gt,"href","#transformers.FlaxViTModel"),l(Xe,"class","relative group"),l(ba,"href","/docs/transformers/pr_16782/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(Mo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Mo,"rel","nofollow"),l(Io,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(Io,"rel","nofollow"),l(jo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(jo,"rel","nofollow"),l(Po,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Po,"rel","nofollow"),l(Co,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Co,"rel","nofollow"),l(Z,"class","docstring"),l(A,"class","docstring"),l(vt,"id","transformers.FlaxViTForImageClassification"),l(vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(vt,"href","#transformers.FlaxViTForImageClassification"),l(Qe,"class","relative group"),l(wa,"href","/docs/transformers/pr_16782/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(Oo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Oo,"rel","nofollow"),l(So,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(So,"rel","nofollow"),l(Wo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(Wo,"rel","nofollow"),l(Bo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Bo,"rel","nofollow"),l(Uo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Uo,"rel","nofollow"),l(Q,"class","docstring"),l(q,"class","docstring")},m(o,h){e(document.head,p),f(o,T,h),f(o,m,h),e(m,g),e(g,v),y(_,v,null),e(m,u),e(m,V),e(V,pe),f(o,R,h),y(k,o,h),f(o,ie,h),f(o,j,h),e(j,B),e(B,oe),y(C,oe,null),e(j,he),e(j,ae),e(ae,E),f(o,I,h),f(o,z,h),e(z,Ie),e(z,se),e(se,L),e(z,je),f(o,Te,h),f(o,Xo,h),e(Xo,tr),f(o,sn,h),f(o,Zo,h),e(Zo,Da),e(Da,or),f(o,nn,h),f(o,Qo,h),e(Qo,ar),f(o,rn,h),f(o,N,h),e(N,Vt),e(Vt,sr),e(Vt,Et),e(Et,nr),e(Vt,rr),e(N,ir),e(N,Oa),e(Oa,lr),e(N,dr),e(N,kt),e(kt,cr),e(kt,Yo),e(Yo,pr),e(kt,hr),e(N,fr),e(N,Pe),e(Pe,mr),e(Pe,Sa),e(Sa,ur),e(Pe,gr),e(Pe,Mt),e(Mt,_r),e(Pe,vr),e(N,Tr),e(N,Ce),e(Ce,br),e(Ce,It),e(It,wr),e(Ce,yr),e(Ce,jt),e(jt,$r),e(Ce,xr),e(N,Fr),e(N,Ae),e(Ae,Vr),e(Ae,Pt),e(Pt,Er),e(Ae,kr),e(Ae,Ct),e(Ct,Mr),e(Ae,Ir),e(N,jr),e(N,Wa),e(Wa,Pr),f(o,ln,h),f(o,ea,h),e(ea,Cr),f(o,dn,h),f(o,le,h),e(le,Ba),e(Ba,P),e(P,ta),e(ta,Ar),e(P,qr),e(P,oa),e(oa,zr),e(P,Nr),e(P,aa),e(aa,Lr),e(P,Dr),e(P,Ua),e(Ua,Or),e(P,Sr),e(P,Ra),e(Ra,Wr),e(P,Br),e(P,Ha),e(Ha,Ur),e(P,Rr),e(P,Ja),e(Ja,Hr),e(P,Jr),e(P,sa),e(sa,Kr),e(P,Gr),e(le,Xr),e(le,Ka),e(Ka,na),e(na,ra),e(ra,Zr),e(na,Qr),e(le,Yr),e(le,Ga),e(Ga,At),e(At,ei),e(At,qt),e(qt,ti),e(At,oi),e(le,ai),e(le,Xa),e(Xa,ia),e(ia,la),e(la,si),e(ia,ni),f(o,cn,h),f(o,be,h),e(be,ri),e(be,zt),e(zt,ii),e(be,li),e(be,Nt),e(Nt,di),e(be,ci),f(o,pn,h),f(o,et,h),e(et,pi),e(et,Lt),e(Lt,hi),e(et,fi),f(o,hn,h),f(o,qe,h),e(qe,tt),e(tt,Za),y(Dt,Za,null),e(qe,mi),e(qe,Qa),e(Qa,ui),f(o,fn,h),f(o,U,h),y(Ot,U,null),e(U,gi),e(U,ze),e(ze,_i),e(ze,da),e(da,vi),e(ze,Ti),e(ze,St),e(St,bi),e(ze,wi),e(U,yi),e(U,Ne),e(Ne,$i),e(Ne,ca),e(ca,xi),e(Ne,Fi),e(Ne,pa),e(pa,Vi),e(Ne,Ei),e(U,ki),e(U,Ya),e(Ya,Mi),e(U,Ii),y(Wt,U,null),f(o,mn,h),f(o,Le,h),e(Le,ot),e(ot,es),y(Bt,es,null),e(Le,ji),e(Le,ts),e(ts,Pi),f(o,un,h),f(o,ne,h),y(Ut,ne,null),e(ne,Ci),e(ne,os),e(os,Ai),e(ne,qi),e(ne,Rt),e(Rt,zi),e(Rt,ha),e(ha,Ni),e(Rt,Li),e(ne,Di),e(ne,we),y(Ht,we,null),e(we,Oi),e(we,as),e(as,Si),e(we,Wi),y(at,we,null),f(o,gn,h),f(o,De,h),e(De,st),e(st,ss),y(Jt,ss,null),e(De,Bi),e(De,ns),e(ns,Ui),f(o,_n,h),f(o,fe,h),y(Kt,fe,null),e(fe,Ri),e(fe,Gt),e(Gt,Hi),e(Gt,Xt),e(Xt,Ji),e(Gt,Ki),e(fe,Gi),e(fe,H),y(Zt,H,null),e(H,Xi),e(H,Oe),e(Oe,Zi),e(Oe,fa),e(fa,Qi),e(Oe,Yi),e(Oe,rs),e(rs,el),e(Oe,tl),e(H,ol),y(nt,H,null),e(H,al),e(H,is),e(is,sl),e(H,nl),y(Qt,H,null),f(o,vn,h),f(o,Se,h),e(Se,rt),e(rt,ls),y(Yt,ls,null),e(Se,rl),e(Se,ds),e(ds,il),f(o,Tn,h),f(o,me,h),y(eo,me,null),e(me,ll),e(me,We),e(We,dl),e(We,cs),e(cs,cl),e(We,pl),e(We,to),e(to,hl),e(We,fl),e(me,ml),e(me,J),y(oo,J,null),e(J,ul),e(J,Be),e(Be,gl),e(Be,ma),e(ma,_l),e(Be,vl),e(Be,ps),e(ps,Tl),e(Be,bl),e(J,wl),y(it,J,null),e(J,yl),e(J,hs),e(hs,$l),e(J,xl),y(ao,J,null),f(o,bn,h),f(o,Ue,h),e(Ue,lt),e(lt,fs),y(so,fs,null),e(Ue,Fl),e(Ue,ms),e(ms,Vl),f(o,wn,h),f(o,re,h),y(no,re,null),e(re,El),e(re,us),e(us,kl),e(re,Ml),e(re,ro),e(ro,Il),e(ro,io),e(io,jl),e(ro,Pl),e(re,Cl),e(re,K),y(lo,K,null),e(K,Al),e(K,Re),e(Re,ql),e(Re,ua),e(ua,zl),e(Re,Nl),e(Re,gs),e(gs,Ll),e(Re,Dl),e(K,Ol),y(dt,K,null),e(K,Sl),e(K,_s),e(_s,Wl),e(K,Bl),y(co,K,null),f(o,yn,h),f(o,He,h),e(He,ct),e(ct,vs),y(po,vs,null),e(He,Ul),e(He,Ts),e(Ts,Rl),f(o,$n,h),f(o,D,h),y(ho,D,null),e(D,Hl),e(D,bs),e(bs,Jl),e(D,Kl),e(D,fo),e(fo,Gl),e(fo,ga),e(ga,Xl),e(fo,Zl),e(D,Ql),e(D,mo),e(mo,Yl),e(mo,uo),e(uo,ed),e(mo,td),e(D,od),y(pt,D,null),e(D,ad),e(D,G),y(go,G,null),e(G,sd),e(G,Je),e(Je,nd),e(Je,_a),e(_a,rd),e(Je,id),e(Je,ws),e(ws,ld),e(Je,dd),e(G,cd),y(ht,G,null),e(G,pd),e(G,ys),e(ys,hd),e(G,fd),y(_o,G,null),f(o,xn,h),f(o,Ke,h),e(Ke,ft),e(ft,$s),y(vo,$s,null),e(Ke,md),e(Ke,xs),e(xs,ud),f(o,Fn,h),f(o,O,h),y(To,O,null),e(O,gd),e(O,Fs),e(Fs,_d),e(O,vd),e(O,bo),e(bo,Td),e(bo,va),e(va,bd),e(bo,wd),e(O,yd),e(O,wo),e(wo,$d),e(wo,yo),e(yo,xd),e(wo,Fd),e(O,Vd),y(mt,O,null),e(O,Ed),e(O,X),y($o,X,null),e(X,kd),e(X,Ge),e(Ge,Md),e(Ge,Ta),e(Ta,Id),e(Ge,jd),e(Ge,Vs),e(Vs,Pd),e(Ge,Cd),e(X,Ad),y(ut,X,null),e(X,qd),e(X,Es),e(Es,zd),e(X,Nd),y(xo,X,null),f(o,Vn,h),f(o,Xe,h),e(Xe,gt),e(gt,ks),y(Fo,ks,null),e(Xe,Ld),e(Xe,Ms),e(Ms,Dd),f(o,En,h),f(o,A,h),y(Vo,A,null),e(A,Od),e(A,Is),e(Is,Sd),e(A,Wd),e(A,Eo),e(Eo,Bd),e(Eo,ba),e(ba,Ud),e(Eo,Rd),e(A,Hd),e(A,ko),e(ko,Jd),e(ko,Mo),e(Mo,Kd),e(ko,Gd),e(A,Xd),e(A,js),e(js,Zd),e(A,Qd),e(A,ue),e(ue,Ps),e(Ps,Io),e(Io,Yd),e(ue,ec),e(ue,Cs),e(Cs,jo),e(jo,tc),e(ue,oc),e(ue,As),e(As,Po),e(Po,ac),e(ue,sc),e(ue,qs),e(qs,Co),e(Co,nc),e(A,rc),e(A,Z),y(Ao,Z,null),e(Z,ic),e(Z,Ze),e(Ze,lc),e(Ze,zs),e(zs,dc),e(Ze,cc),e(Ze,Ns),e(Ns,pc),e(Ze,hc),e(Z,fc),y(_t,Z,null),e(Z,mc),e(Z,Ls),e(Ls,uc),e(Z,gc),y(qo,Z,null),f(o,kn,h),f(o,Qe,h),e(Qe,vt),e(vt,Ds),y(zo,Ds,null),e(Qe,_c),e(Qe,Os),e(Os,vc),f(o,Mn,h),f(o,q,h),y(No,q,null),e(q,Tc),e(q,Ss),e(Ss,bc),e(q,wc),e(q,Lo),e(Lo,yc),e(Lo,wa),e(wa,$c),e(Lo,xc),e(q,Fc),e(q,Do),e(Do,Vc),e(Do,Oo),e(Oo,Ec),e(Do,kc),e(q,Mc),e(q,Ws),e(Ws,Ic),e(q,jc),e(q,ge),e(ge,Bs),e(Bs,So),e(So,Pc),e(ge,Cc),e(ge,Us),e(Us,Wo),e(Wo,Ac),e(ge,qc),e(ge,Rs),e(Rs,Bo),e(Bo,zc),e(ge,Nc),e(ge,Hs),e(Hs,Uo),e(Uo,Lc),e(q,Dc),e(q,Q),y(Ro,Q,null),e(Q,Oc),e(Q,Ye),e(Ye,Sc),e(Ye,Js),e(Js,Wc),e(Ye,Bc),e(Ye,Ks),e(Ks,Uc),e(Ye,Rc),e(Q,Hc),y(Tt,Q,null),e(Q,Jc),e(Q,Gs),e(Gs,Kc),e(Q,Gc),y(Ho,Q,null),In=!0},p(o,[h]){const Jo={};h&2&&(Jo.$$scope={dirty:h,ctx:o}),k.$set(Jo);const Xs={};h&2&&(Xs.$$scope={dirty:h,ctx:o}),at.$set(Xs);const Zs={};h&2&&(Zs.$$scope={dirty:h,ctx:o}),nt.$set(Zs);const Qs={};h&2&&(Qs.$$scope={dirty:h,ctx:o}),it.$set(Qs);const Ko={};h&2&&(Ko.$$scope={dirty:h,ctx:o}),dt.$set(Ko);const Ys={};h&2&&(Ys.$$scope={dirty:h,ctx:o}),pt.$set(Ys);const en={};h&2&&(en.$$scope={dirty:h,ctx:o}),ht.$set(en);const tn={};h&2&&(tn.$$scope={dirty:h,ctx:o}),mt.$set(tn);const Go={};h&2&&(Go.$$scope={dirty:h,ctx:o}),ut.$set(Go);const on={};h&2&&(on.$$scope={dirty:h,ctx:o}),_t.$set(on);const an={};h&2&&(an.$$scope={dirty:h,ctx:o}),Tt.$set(an)},i(o){In||($(_.$$.fragment,o),$(k.$$.fragment,o),$(C.$$.fragment,o),$(Dt.$$.fragment,o),$(Ot.$$.fragment,o),$(Wt.$$.fragment,o),$(Bt.$$.fragment,o),$(Ut.$$.fragment,o),$(Ht.$$.fragment,o),$(at.$$.fragment,o),$(Jt.$$.fragment,o),$(Kt.$$.fragment,o),$(Zt.$$.fragment,o),$(nt.$$.fragment,o),$(Qt.$$.fragment,o),$(Yt.$$.fragment,o),$(eo.$$.fragment,o),$(oo.$$.fragment,o),$(it.$$.fragment,o),$(ao.$$.fragment,o),$(so.$$.fragment,o),$(no.$$.fragment,o),$(lo.$$.fragment,o),$(dt.$$.fragment,o),$(co.$$.fragment,o),$(po.$$.fragment,o),$(ho.$$.fragment,o),$(pt.$$.fragment,o),$(go.$$.fragment,o),$(ht.$$.fragment,o),$(_o.$$.fragment,o),$(vo.$$.fragment,o),$(To.$$.fragment,o),$(mt.$$.fragment,o),$($o.$$.fragment,o),$(ut.$$.fragment,o),$(xo.$$.fragment,o),$(Fo.$$.fragment,o),$(Vo.$$.fragment,o),$(Ao.$$.fragment,o),$(_t.$$.fragment,o),$(qo.$$.fragment,o),$(zo.$$.fragment,o),$(No.$$.fragment,o),$(Ro.$$.fragment,o),$(Tt.$$.fragment,o),$(Ho.$$.fragment,o),In=!0)},o(o){x(_.$$.fragment,o),x(k.$$.fragment,o),x(C.$$.fragment,o),x(Dt.$$.fragment,o),x(Ot.$$.fragment,o),x(Wt.$$.fragment,o),x(Bt.$$.fragment,o),x(Ut.$$.fragment,o),x(Ht.$$.fragment,o),x(at.$$.fragment,o),x(Jt.$$.fragment,o),x(Kt.$$.fragment,o),x(Zt.$$.fragment,o),x(nt.$$.fragment,o),x(Qt.$$.fragment,o),x(Yt.$$.fragment,o),x(eo.$$.fragment,o),x(oo.$$.fragment,o),x(it.$$.fragment,o),x(ao.$$.fragment,o),x(so.$$.fragment,o),x(no.$$.fragment,o),x(lo.$$.fragment,o),x(dt.$$.fragment,o),x(co.$$.fragment,o),x(po.$$.fragment,o),x(ho.$$.fragment,o),x(pt.$$.fragment,o),x(go.$$.fragment,o),x(ht.$$.fragment,o),x(_o.$$.fragment,o),x(vo.$$.fragment,o),x(To.$$.fragment,o),x(mt.$$.fragment,o),x($o.$$.fragment,o),x(ut.$$.fragment,o),x(xo.$$.fragment,o),x(Fo.$$.fragment,o),x(Vo.$$.fragment,o),x(Ao.$$.fragment,o),x(_t.$$.fragment,o),x(qo.$$.fragment,o),x(zo.$$.fragment,o),x(No.$$.fragment,o),x(Ro.$$.fragment,o),x(Tt.$$.fragment,o),x(Ho.$$.fragment,o),In=!1},d(o){t(p),o&&t(T),o&&t(m),F(_),o&&t(R),F(k,o),o&&t(ie),o&&t(j),F(C),o&&t(I),o&&t(z),o&&t(Te),o&&t(Xo),o&&t(sn),o&&t(Zo),o&&t(nn),o&&t(Qo),o&&t(rn),o&&t(N),o&&t(ln),o&&t(ea),o&&t(dn),o&&t(le),o&&t(cn),o&&t(be),o&&t(pn),o&&t(et),o&&t(hn),o&&t(qe),F(Dt),o&&t(fn),o&&t(U),F(Ot),F(Wt),o&&t(mn),o&&t(Le),F(Bt),o&&t(un),o&&t(ne),F(Ut),F(Ht),F(at),o&&t(gn),o&&t(De),F(Jt),o&&t(_n),o&&t(fe),F(Kt),F(Zt),F(nt),F(Qt),o&&t(vn),o&&t(Se),F(Yt),o&&t(Tn),o&&t(me),F(eo),F(oo),F(it),F(ao),o&&t(bn),o&&t(Ue),F(so),o&&t(wn),o&&t(re),F(no),F(lo),F(dt),F(co),o&&t(yn),o&&t(He),F(po),o&&t($n),o&&t(D),F(ho),F(pt),F(go),F(ht),F(_o),o&&t(xn),o&&t(Ke),F(vo),o&&t(Fn),o&&t(O),F(To),F(mt),F($o),F(ut),F(xo),o&&t(Vn),o&&t(Xe),F(Fo),o&&t(En),o&&t(A),F(Vo),F(Ao),F(_t),F(qo),o&&t(kn),o&&t(Qe),F(zo),o&&t(Mn),o&&t(q),F(No),F(Ro),F(Tt),F(Ho)}}}const jf={local:"vision-transformer-vit",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViTConfig",title:"ViTConfig"},{local:"transformers.ViTFeatureExtractor",title:"ViTFeatureExtractor"},{local:"transformers.ViTModel",title:"ViTModel"},{local:"transformers.ViTForMaskedImageModeling",title:"ViTForMaskedImageModeling"},{local:"transformers.ViTForImageClassification",title:"ViTForImageClassification"},{local:"transformers.TFViTModel",title:"TFViTModel"},{local:"transformers.TFViTForImageClassification",title:"TFViTForImageClassification"},{local:"transformers.FlaxViTModel",title:"FlaxVitModel"},{local:"transformers.FlaxViTForImageClassification",title:"FlaxViTForImageClassification"}],title:"Vision Transformer (ViT)"};function Pf(M){return vf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Lf extends mf{constructor(p){super();uf(this,p,Pf,If,gf,{})}}export{Lf as default,jf as metadata};
