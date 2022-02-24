import{S as mf,i as uf,s as gf,e as a,k as d,w,t as n,M as _f,c as s,d as t,m as c,a as r,x as b,h as i,b as l,F as e,g as m,y,q as $,o as x,B as V}from"../../chunks/vendor-4833417e.js";import{T as _e}from"../../chunks/Tip-fffd6df1.js";import{D as W}from"../../chunks/Docstring-44c5af16.js";import{C as Vt}from"../../chunks/CodeBlock-90ffda97.js";import{I as ve}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-04a16537.js";function vf(I){let h,v,f,g,T;return{c(){h=a("p"),v=n(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),f=a("a"),g=n("Github Issue"),T=n("."),this.h()},l(_){h=s(_,"P",{});var u=r(h);v=i(u,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),f=s(u,"A",{href:!0,rel:!0});var F=r(f);g=i(F,"Github Issue"),F.forEach(t),T=i(u,"."),u.forEach(t),this.h()},h(){l(f,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),l(f,"rel","nofollow")},m(_,u){m(_,h,u),e(h,v),e(h,f),e(f,g),e(h,T)},d(_){_&&t(h)}}}function Tf(I){let h,v;return{c(){h=a("p"),v=n(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(f){h=s(f,"P",{});var g=r(h);v=i(g,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),g.forEach(t)},m(f,g){m(f,h,g),e(h,v)},d(f){f&&t(h)}}}function wf(I){let h,v,f,g,T;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var u=r(h);v=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var F=r(f);g=i(F,"Module"),F.forEach(t),T=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,h,u),e(h,v),e(h,f),e(f,g),e(h,T)},d(_){_&&t(h)}}}function bf(I){let h,v,f,g,T;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var u=r(h);v=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var F=r(f);g=i(F,"Module"),F.forEach(t),T=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,h,u),e(h,v),e(h,f),e(f,g),e(h,T)},d(_){_&&t(h)}}}function yf(I){let h,v,f,g,T;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var u=r(h);v=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var F=r(f);g=i(F,"Module"),F.forEach(t),T=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,h,u),e(h,v),e(h,f),e(f,g),e(h,T)},d(_){_&&t(h)}}}function $f(I){let h,v,f,g,T,_,u,F,he,R,k,ie,j,U,oe,C,pe,ae;return{c(){h=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),f=d(),g=a("ul"),T=a("li"),_=n("having all inputs as keyword arguments (like PyTorch models), or"),u=d(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),ie=n("This second option is useful when using "),j=a("code"),U=n("tf.keras.Model.fit"),oe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),C=a("code"),pe=n("model(inputs)"),ae=n(".")},l(E){h=s(E,"P",{});var M=r(h);v=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),f=c(E),g=s(E,"UL",{});var z=r(g);T=s(z,"LI",{});var Me=r(T);_=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),u=c(z),F=s(z,"LI",{});var se=r(F);he=i(se,"having all inputs as a list, tuple or dict in the first positional arguments."),se.forEach(t),z.forEach(t),R=c(E),k=s(E,"P",{});var L=r(k);ie=i(L,"This second option is useful when using "),j=s(L,"CODE",{});var je=r(j);U=i(je,"tf.keras.Model.fit"),je.forEach(t),oe=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),C=s(L,"CODE",{});var Te=r(C);pe=i(Te,"model(inputs)"),Te.forEach(t),ae=i(L,"."),L.forEach(t)},m(E,M){m(E,h,M),e(h,v),m(E,f,M),m(E,g,M),e(g,T),e(T,_),e(g,u),e(g,F),e(F,he),m(E,R,M),m(E,k,M),e(k,ie),e(k,j),e(j,U),e(k,oe),e(k,C),e(C,pe),e(k,ae)},d(E){E&&t(h),E&&t(f),E&&t(g),E&&t(R),E&&t(k)}}}function xf(I){let h,v,f,g,T;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var u=r(h);v=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var F=r(f);g=i(F,"Module"),F.forEach(t),T=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,h,u),e(h,v),e(h,f),e(f,g),e(h,T)},d(_){_&&t(h)}}}function Vf(I){let h,v,f,g,T,_,u,F,he,R,k,ie,j,U,oe,C,pe,ae;return{c(){h=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),f=d(),g=a("ul"),T=a("li"),_=n("having all inputs as keyword arguments (like PyTorch models), or"),u=d(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),R=d(),k=a("p"),ie=n("This second option is useful when using "),j=a("code"),U=n("tf.keras.Model.fit"),oe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),C=a("code"),pe=n("model(inputs)"),ae=n(".")},l(E){h=s(E,"P",{});var M=r(h);v=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),f=c(E),g=s(E,"UL",{});var z=r(g);T=s(z,"LI",{});var Me=r(T);_=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),u=c(z),F=s(z,"LI",{});var se=r(F);he=i(se,"having all inputs as a list, tuple or dict in the first positional arguments."),se.forEach(t),z.forEach(t),R=c(E),k=s(E,"P",{});var L=r(k);ie=i(L,"This second option is useful when using "),j=s(L,"CODE",{});var je=r(j);U=i(je,"tf.keras.Model.fit"),je.forEach(t),oe=i(L,` method which currently requires having all the
tensors in the first argument of the model call function: `),C=s(L,"CODE",{});var Te=r(C);pe=i(Te,"model(inputs)"),Te.forEach(t),ae=i(L,"."),L.forEach(t)},m(E,M){m(E,h,M),e(h,v),m(E,f,M),m(E,g,M),e(g,T),e(T,_),e(g,u),e(g,F),e(F,he),m(E,R,M),m(E,k,M),e(k,ie),e(k,j),e(j,U),e(k,oe),e(k,C),e(C,pe),e(k,ae)},d(E){E&&t(h),E&&t(f),E&&t(g),E&&t(R),E&&t(k)}}}function Ff(I){let h,v,f,g,T;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var u=r(h);v=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var F=r(f);g=i(F,"Module"),F.forEach(t),T=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,h,u),e(h,v),e(h,f),e(f,g),e(h,T)},d(_){_&&t(h)}}}function Ef(I){let h,v,f,g,T;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var u=r(h);v=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var F=r(f);g=i(F,"Module"),F.forEach(t),T=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,h,u),e(h,v),e(h,f),e(f,g),e(h,T)},d(_){_&&t(h)}}}function kf(I){let h,v,f,g,T;return{c(){h=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){h=s(_,"P",{});var u=r(h);v=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(u,"CODE",{});var F=r(f);g=i(F,"Module"),F.forEach(t),T=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(_,u){m(_,h,u),e(h,v),e(h,f),e(f,g),e(h,T)},d(_){_&&t(h)}}}function If(I){let h,v,f,g,T,_,u,F,he,R,k,ie,j,U,oe,C,pe,ae,E,M,z,Me,se,L,je,Te,Xo,en,sr,Zo,Da,tn,rr,Qo,on,nr,N,Ft,an,Et,sn,rn,nn,Oa,ln,dn,kt,cn,Yo,hn,pn,fn,Pe,mn,Sa,un,gn,It,_n,vn,Tn,Ce,wn,Mt,bn,yn,jt,$n,xn,Vn,Ae,Fn,Pt,En,kn,Ct,In,Mn,jn,Wa,Pn,ir,ea,Cn,lr,le,Ua,P,ta,An,qn,oa,zn,Nn,aa,Ln,Dn,Ba,On,Sn,Ra,Wn,Un,Ha,Bn,Rn,Ja,Hn,Jn,sa,Kn,Gn,Xn,Ka,ra,na,Zn,Qn,Yn,Ga,At,ei,qt,ti,oi,ai,Xa,ia,la,si,ri,dr,we,ni,zt,ii,li,Nt,di,ci,cr,et,hi,Lt,pi,fi,hr,qe,tt,Za,Dt,mi,Qa,ui,pr,B,Ot,gi,ze,_i,da,vi,Ti,St,wi,bi,yi,Ne,$i,ca,xi,Vi,ha,Fi,Ei,ki,Ya,Ii,Mi,Wt,fr,Le,ot,es,Ut,ji,ts,Pi,mr,re,Bt,Ci,os,Ai,qi,Rt,zi,pa,Ni,Li,Di,be,Ht,Oi,as,Si,Wi,at,ur,De,st,ss,Jt,Ui,rs,Bi,gr,fe,Kt,Ri,Gt,Hi,Xt,Ji,Ki,Gi,H,Zt,Xi,Oe,Zi,fa,Qi,Yi,ns,el,tl,ol,rt,al,is,sl,rl,Qt,_r,Se,nt,ls,Yt,nl,ds,il,vr,me,eo,ll,We,dl,cs,cl,hl,to,pl,fl,ml,J,oo,ul,Ue,gl,ma,_l,vl,hs,Tl,wl,bl,it,yl,ps,$l,xl,ao,Tr,Be,lt,fs,so,Vl,ms,Fl,wr,ne,ro,El,us,kl,Il,no,Ml,io,jl,Pl,Cl,K,lo,Al,Re,ql,ua,zl,Nl,gs,Ll,Dl,Ol,dt,Sl,_s,Wl,Ul,co,br,He,ct,vs,ho,Bl,Ts,Rl,yr,D,po,Hl,ws,Jl,Kl,fo,Gl,ga,Xl,Zl,Ql,mo,Yl,uo,ed,td,od,ht,ad,G,go,sd,Je,rd,_a,nd,id,bs,ld,dd,cd,pt,hd,ys,pd,fd,_o,$r,Ke,ft,$s,vo,md,xs,ud,xr,O,To,gd,Vs,_d,vd,wo,Td,va,wd,bd,yd,bo,$d,yo,xd,Vd,Fd,mt,Ed,X,$o,kd,Ge,Id,Ta,Md,jd,Fs,Pd,Cd,Ad,ut,qd,Es,zd,Nd,xo,Vr,Xe,gt,ks,Vo,Ld,Is,Dd,Fr,A,Fo,Od,Ms,Sd,Wd,Eo,Ud,wa,Bd,Rd,Hd,ko,Jd,Io,Kd,Gd,Xd,js,Zd,Qd,ue,Ps,Mo,Yd,ec,Cs,jo,tc,oc,As,Po,ac,sc,qs,Co,rc,nc,Z,Ao,ic,Ze,lc,zs,dc,cc,Ns,hc,pc,fc,_t,mc,Ls,uc,gc,qo,Er,Qe,vt,Ds,zo,_c,Os,vc,kr,q,No,Tc,Ss,wc,bc,Lo,yc,ba,$c,xc,Vc,Do,Fc,Oo,Ec,kc,Ic,Ws,Mc,jc,ge,Us,So,Pc,Cc,Bs,Wo,Ac,qc,Rs,Uo,zc,Nc,Hs,Bo,Lc,Dc,Q,Ro,Oc,Ye,Sc,Js,Wc,Uc,Ks,Bc,Rc,Hc,Tt,Jc,Gs,Kc,Gc,Ho,Ir;return _=new ve({}),k=new _e({props:{$$slots:{default:[vf]},$$scope:{ctx:I}}}),C=new ve({}),Dt=new ve({}),Ot=new W({props:{name:"class transformers.ViTConfig",anchor:"transformers.ViTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15820/src/transformers/models/vit/configuration_vit.py#L29",parametersDescription:[{anchor:"transformers.ViTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}]}}),Wt=new Vt({props:{code:`from transformers import ViTModel, ViTConfig

# Initializing a ViT vit-base-patch16-224 style configuration
configuration = ViTConfig()

# Initializing a model from the vit-base-patch16-224 style configuration
model = ViTModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTModel, ViTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViT vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ViTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Ut=new ve({}),Bt=new W({props:{name:"class transformers.ViTFeatureExtractor",anchor:"transformers.ViTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = 2"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15820/src/transformers/models/vit/feature_extraction_vit.py#L37",parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ViTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.ViTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ViTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.ViTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}]}}),Ht=new W({props:{name:"__call__",anchor:"transformers.ViTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15820/src/transformers/models/vit/feature_extraction_vit.py#L83",parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.ViTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_15820/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15820/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`}}),at=new _e({props:{warning:"&lcub;true}",$$slots:{default:[Tf]},$$scope:{ctx:I}}}),Jt=new ve({}),Kt=new W({props:{name:"class transformers.ViTModel",anchor:"transformers.ViTModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15820/src/transformers/models/vit/modeling_vit.py#L487",parametersDescription:[{anchor:"transformers.ViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15820/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Zt=new W({props:{name:"forward",anchor:"transformers.ViTModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"interpolate_pos_encoding",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15820/src/transformers/models/vit/modeling_vit.py#L512",parametersDescription:[{anchor:"transformers.ViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_15820/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15820/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTConfig"
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),rt=new _e({props:{$$slots:{default:[wf]},$$scope:{ctx:I}}}),Qt=new Vt({props:{code:`from transformers import ViTFeatureExtractor, ViTModel
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
list(last_hidden_states.shape),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),Yt=new ve({}),eo=new W({props:{name:"class transformers.ViTForMaskedImageModeling",anchor:"transformers.ViTForMaskedImageModeling",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15820/src/transformers/models/vit/modeling_vit.py#L592",parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15820/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),oo=new W({props:{name:"forward",anchor:"transformers.ViTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"bool_masked_pos",val:" = None"},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"interpolate_pos_encoding",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15820/src/transformers/models/vit/modeling_vit.py#L606",parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_15820/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15820/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),it=new _e({props:{$$slots:{default:[bf]},$$scope:{ctx:I}}}),ao=new Vt({props:{code:`from transformers import ViTFeatureExtractor, ViTForMaskedImageModeling
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = ViTForMaskedImageModeling.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(images=image, return_tensors="pt")

outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),so=new ve({}),ro=new W({props:{name:"class transformers.ViTForImageClassification",anchor:"transformers.ViTForImageClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15820/src/transformers/models/vit/modeling_vit.py#L696",parametersDescription:[{anchor:"transformers.ViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15820/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new W({props:{name:"forward",anchor:"transformers.ViTForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"interpolate_pos_encoding",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15820/src/transformers/models/vit/modeling_vit.py#L709",parametersDescription:[{anchor:"transformers.ViTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_15820/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15820/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),dt=new _e({props:{$$slots:{default:[yf]},$$scope:{ctx:I}}}),co=new Vt({props:{code:`from transformers import ViTFeatureExtractor, ViTForImageClassification
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
print(model.config.id2label[predicted_label]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTForImageClassification
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
<span class="hljs-string">&#x27;Egyptian cat&#x27;</span>`}}),ho=new ve({}),po=new W({props:{name:"class transformers.TFViTModel",anchor:"transformers.TFViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15820/src/transformers/models/vit/modeling_tf_vit.py#L656",parametersDescription:[{anchor:"transformers.TFViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15820/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ht=new _e({props:{$$slots:{default:[$f]},$$scope:{ctx:I}}}),go=new W({props:{name:"call",anchor:"transformers.TFViTModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15820/src/transformers/models/vit/modeling_tf_vit.py#L662",parametersDescription:[{anchor:"transformers.TFViTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_15820/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15820/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTConfig"
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
`}}),pt=new _e({props:{$$slots:{default:[xf]},$$scope:{ctx:I}}}),_o=new Vt({props:{code:`from transformers import ViTFeatureExtractor, TFViTModel
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = TFViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(images=image, return_tensors="tf")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),vo=new ve({}),To=new W({props:{name:"class transformers.TFViTForImageClassification",anchor:"transformers.TFViTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15820/src/transformers/models/vit/modeling_tf_vit.py#L762",parametersDescription:[{anchor:"transformers.TFViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15820/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),mt=new _e({props:{$$slots:{default:[Vf]},$$scope:{ctx:I}}}),$o=new W({props:{name:"call",anchor:"transformers.TFViTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15820/src/transformers/models/vit/modeling_tf_vit.py#L776",parametersDescription:[{anchor:"transformers.TFViTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_15820/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTForImageClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFViTForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15820/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTConfig"
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
`}}),ut=new _e({props:{$$slots:{default:[Ff]},$$scope:{ctx:I}}}),xo=new Vt({props:{code:`from transformers import ViTFeatureExtractor, TFViTForImageClassification
import tensorflow as tf
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = TFViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(images=image, return_tensors="tf")
outputs = model(**inputs)
logits = outputs.logits
# model predicts one of the 1000 ImageNet classes
predicted_class_idx = tf.math.argmax(logits, axis=-1)[0]
print("Predicted class:", model.config.id2label[int(predicted_class_idx)]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[<span class="hljs-built_in">int</span>(predicted_class_idx)])`}}),Vo=new ve({}),Fo=new W({props:{name:"class transformers.FlaxViTModel",anchor:"transformers.FlaxViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15820/src/transformers/models/vit/modeling_flax_vit.py#L510",parametersDescription:[{anchor:"transformers.FlaxViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15820/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15820/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15820/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ao=new W({props:{name:"__call__",anchor:"transformers.FlaxViTPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15820/src/transformers/models/vit/modeling_flax_vit.py#L425",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15820/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
`}}),_t=new _e({props:{$$slots:{default:[Ef]},$$scope:{ctx:I}}}),qo=new Vt({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTModel
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = FlaxViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),zo=new ve({}),No=new W({props:{name:"class transformers.FlaxViTForImageClassification",anchor:"transformers.FlaxViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15820/src/transformers/models/vit/modeling_flax_vit.py#L591",parametersDescription:[{anchor:"transformers.FlaxViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15820/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15820/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15820/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ro=new W({props:{name:"__call__",anchor:"transformers.FlaxViTPreTrainedModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15820/src/transformers/models/vit/modeling_flax_vit.py#L425",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15820/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
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
`}}),Tt=new _e({props:{$$slots:{default:[kf]},$$scope:{ctx:I}}}),Ho=new Vt({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTForImageClassification
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
print("Predicted class:", model.config.id2label[predicted_class_idx.item()]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx.item()])`}}),{c(){h=a("meta"),v=d(),f=a("h1"),g=a("a"),T=a("span"),w(_.$$.fragment),u=d(),F=a("span"),he=n("Vision Transformer (ViT)"),R=d(),w(k.$$.fragment),ie=d(),j=a("h2"),U=a("a"),oe=a("span"),w(C.$$.fragment),pe=d(),ae=a("span"),E=n("Overview"),M=d(),z=a("p"),Me=n("The Vision Transformer (ViT) model was proposed in "),se=a("a"),L=n(`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),je=n(` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Te=d(),Xo=a("p"),en=n("The abstract from the paper is the following:"),sr=d(),Zo=a("p"),Da=a("em"),tn=n(`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),rr=d(),Qo=a("p"),on=n("Tips:"),nr=d(),N=a("ul"),Ft=a("li"),an=n("Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),Et=a("a"),sn=n("here"),rn=n("."),nn=d(),Oa=a("li"),ln=n(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),dn=d(),kt=a("li"),cn=n(`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Yo=a("a"),hn=n("ViTFeatureExtractor"),pn=n(" to resize (or rescale) and normalize images for the model."),fn=d(),Pe=a("li"),mn=n(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Sa=a("code"),un=n("google/vit-base-patch16-224"),gn=n(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),It=a("a"),_n=n("hub"),vn=n("."),Tn=d(),Ce=a("li"),wn=n("The available checkpoints are either (1) pre-trained on "),Mt=a("a"),bn=n("ImageNet-21k"),yn=n(` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),jt=a("a"),$n=n("ImageNet"),xn=n(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Vn=d(),Ae=a("li"),Fn=n(`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),Pt=a("a"),En=n("(Touvron et al., 2019)"),kn=n(", "),Ct=a("a"),In=n(`(Kolesnikov
et al., 2020)`),Mn=n(`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),jn=d(),Wa=a("li"),Pn=n(`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),ir=d(),ea=a("p"),Cn=n("Following the original Vision Transformer, some follow-up works have been made:"),lr=d(),le=a("ul"),Ua=a("li"),P=a("p"),ta=a("a"),An=n("DeiT"),qn=n(` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),oa=a("a"),zn=n("ViTModel"),Nn=n(` or
`),aa=a("a"),Ln=n("ViTForImageClassification"),Dn=n(". There are 4 variants available (in 3 different sizes): "),Ba=a("em"),On=n("facebook/deit-tiny-patch16-224"),Sn=n(`,
`),Ra=a("em"),Wn=n("facebook/deit-small-patch16-224"),Un=n(", "),Ha=a("em"),Bn=n("facebook/deit-base-patch16-224"),Rn=n(" and "),Ja=a("em"),Hn=n("facebook/deit-base-patch16-384"),Jn=n(`. Note that one should
use `),sa=a("a"),Kn=n("DeiTFeatureExtractor"),Gn=n(" in order to prepare images for the model."),Xn=d(),Ka=a("li"),ra=a("p"),na=a("a"),Zn=n("BEiT"),Qn=n(` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Yn=d(),Ga=a("li"),At=a("p"),ei=n(`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),qt=a("a"),ti=n("hub"),oi=n("."),ai=d(),Xa=a("li"),ia=a("p"),la=a("a"),si=n("MAE"),ri=n(` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),dr=d(),we=a("p"),ni=n("This model was contributed by "),zt=a("a"),ii=n("nielsr"),li=n(`. The original code (written in JAX) can be
found `),Nt=a("a"),di=n("here"),ci=n("."),cr=d(),et=a("p"),hi=n("Note that we converted the weights from Ross Wightman\u2019s "),Lt=a("a"),pi=n("timm library"),fi=n(`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),hr=d(),qe=a("h2"),tt=a("a"),Za=a("span"),w(Dt.$$.fragment),mi=d(),Qa=a("span"),ui=n("ViTConfig"),pr=d(),B=a("div"),w(Ot.$$.fragment),gi=d(),ze=a("p"),_i=n("This is the configuration class to store the configuration of a "),da=a("a"),vi=n("ViTModel"),Ti=n(`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),St=a("a"),wi=n("google/vit-base-patch16-224"),bi=n(" architecture."),yi=d(),Ne=a("p"),$i=n("Configuration objects inherit from "),ca=a("a"),xi=n("PretrainedConfig"),Vi=n(` and can be used to control the model outputs. Read the
documentation from `),ha=a("a"),Fi=n("PretrainedConfig"),Ei=n(" for more information."),ki=d(),Ya=a("p"),Ii=n("Example:"),Mi=d(),w(Wt.$$.fragment),fr=d(),Le=a("h2"),ot=a("a"),es=a("span"),w(Ut.$$.fragment),ji=d(),ts=a("span"),Pi=n("ViTFeatureExtractor"),mr=d(),re=a("div"),w(Bt.$$.fragment),Ci=d(),os=a("p"),Ai=n("Constructs a ViT feature extractor."),qi=d(),Rt=a("p"),zi=n("This feature extractor inherits from "),pa=a("a"),Ni=n("FeatureExtractionMixin"),Li=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Di=d(),be=a("div"),w(Ht.$$.fragment),Oi=d(),as=a("p"),Si=n("Main method to prepare for the model one or several image(s)."),Wi=d(),w(at.$$.fragment),ur=d(),De=a("h2"),st=a("a"),ss=a("span"),w(Jt.$$.fragment),Ui=d(),rs=a("span"),Bi=n("ViTModel"),gr=d(),fe=a("div"),w(Kt.$$.fragment),Ri=d(),Gt=a("p"),Hi=n(`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Xt=a("a"),Ji=n("torch.nn.Module"),Ki=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gi=d(),H=a("div"),w(Zt.$$.fragment),Xi=d(),Oe=a("p"),Zi=n("The "),fa=a("a"),Qi=n("ViTModel"),Yi=n(" forward method, overrides the "),ns=a("code"),el=n("__call__"),tl=n(" special method."),ol=d(),w(rt.$$.fragment),al=d(),is=a("p"),sl=n("Example:"),rl=d(),w(Qt.$$.fragment),_r=d(),Se=a("h2"),nt=a("a"),ls=a("span"),w(Yt.$$.fragment),nl=d(),ds=a("span"),il=n("ViTForMaskedImageModeling"),vr=d(),me=a("div"),w(eo.$$.fragment),ll=d(),We=a("p"),dl=n("ViT Model with a decoder on top for masked image modeling, as proposed in "),cs=a("code"),cl=n("SimMIM <https://arxiv.org/abs/2111.09886>"),hl=n(`__.
This model is a PyTorch `),to=a("a"),pl=n("torch.nn.Module"),fl=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ml=d(),J=a("div"),w(oo.$$.fragment),ul=d(),Ue=a("p"),gl=n("The "),ma=a("a"),_l=n("ViTForMaskedImageModeling"),vl=n(" forward method, overrides the "),hs=a("code"),Tl=n("__call__"),wl=n(" special method."),bl=d(),w(it.$$.fragment),yl=d(),ps=a("p"),$l=n("Examples:"),xl=d(),w(ao.$$.fragment),Tr=d(),Be=a("h2"),lt=a("a"),fs=a("span"),w(so.$$.fragment),Vl=d(),ms=a("span"),Fl=n("ViTForImageClassification"),wr=d(),ne=a("div"),w(ro.$$.fragment),El=d(),us=a("p"),kl=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Il=d(),no=a("p"),Ml=n("This model is a PyTorch "),io=a("a"),jl=n("torch.nn.Module"),Pl=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cl=d(),K=a("div"),w(lo.$$.fragment),Al=d(),Re=a("p"),ql=n("The "),ua=a("a"),zl=n("ViTForImageClassification"),Nl=n(" forward method, overrides the "),gs=a("code"),Ll=n("__call__"),Dl=n(" special method."),Ol=d(),w(dt.$$.fragment),Sl=d(),_s=a("p"),Wl=n("Example:"),Ul=d(),w(co.$$.fragment),br=d(),He=a("h2"),ct=a("a"),vs=a("span"),w(ho.$$.fragment),Bl=d(),Ts=a("span"),Rl=n("TFViTModel"),yr=d(),D=a("div"),w(po.$$.fragment),Hl=d(),ws=a("p"),Jl=n("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Kl=d(),fo=a("p"),Gl=n("This model inherits from "),ga=a("a"),Xl=n("TFPreTrainedModel"),Zl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ql=d(),mo=a("p"),Yl=n("This model is also a "),uo=a("a"),ed=n("tf.keras.Model"),td=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),od=d(),w(ht.$$.fragment),ad=d(),G=a("div"),w(go.$$.fragment),sd=d(),Je=a("p"),rd=n("The "),_a=a("a"),nd=n("TFViTModel"),id=n(" forward method, overrides the "),bs=a("code"),ld=n("__call__"),dd=n(" special method."),cd=d(),w(pt.$$.fragment),hd=d(),ys=a("p"),pd=n("Examples:"),fd=d(),w(_o.$$.fragment),$r=d(),Ke=a("h2"),ft=a("a"),$s=a("span"),w(vo.$$.fragment),md=d(),xs=a("span"),ud=n("TFViTForImageClassification"),xr=d(),O=a("div"),w(To.$$.fragment),gd=d(),Vs=a("p"),_d=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),vd=d(),wo=a("p"),Td=n("This model inherits from "),va=a("a"),wd=n("TFPreTrainedModel"),bd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yd=d(),bo=a("p"),$d=n("This model is also a "),yo=a("a"),xd=n("tf.keras.Model"),Vd=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fd=d(),w(mt.$$.fragment),Ed=d(),X=a("div"),w($o.$$.fragment),kd=d(),Ge=a("p"),Id=n("The "),Ta=a("a"),Md=n("TFViTForImageClassification"),jd=n(" forward method, overrides the "),Fs=a("code"),Pd=n("__call__"),Cd=n(" special method."),Ad=d(),w(ut.$$.fragment),qd=d(),Es=a("p"),zd=n("Examples:"),Nd=d(),w(xo.$$.fragment),Vr=d(),Xe=a("h2"),gt=a("a"),ks=a("span"),w(Vo.$$.fragment),Ld=d(),Is=a("span"),Dd=n("FlaxVitModel"),Fr=d(),A=a("div"),w(Fo.$$.fragment),Od=d(),Ms=a("p"),Sd=n("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Wd=d(),Eo=a("p"),Ud=n("This model inherits from "),wa=a("a"),Bd=n("FlaxPreTrainedModel"),Rd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Hd=d(),ko=a("p"),Jd=n("This model is also a Flax Linen "),Io=a("a"),Kd=n("flax.linen.Module"),Gd=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xd=d(),js=a("p"),Zd=n("Finally, this model supports inherent JAX features such as:"),Qd=d(),ue=a("ul"),Ps=a("li"),Mo=a("a"),Yd=n("Just-In-Time (JIT) compilation"),ec=d(),Cs=a("li"),jo=a("a"),tc=n("Automatic Differentiation"),oc=d(),As=a("li"),Po=a("a"),ac=n("Vectorization"),sc=d(),qs=a("li"),Co=a("a"),rc=n("Parallelization"),nc=d(),Z=a("div"),w(Ao.$$.fragment),ic=d(),Ze=a("p"),lc=n("The "),zs=a("code"),dc=n("FlaxViTPreTrainedModel"),cc=n("forward method, overrides the "),Ns=a("code"),hc=n("__call__"),pc=n(" special method."),fc=d(),w(_t.$$.fragment),mc=d(),Ls=a("p"),uc=n("Examples:"),gc=d(),w(qo.$$.fragment),Er=d(),Qe=a("h2"),vt=a("a"),Ds=a("span"),w(zo.$$.fragment),_c=d(),Os=a("span"),vc=n("FlaxViTForImageClassification"),kr=d(),q=a("div"),w(No.$$.fragment),Tc=d(),Ss=a("p"),wc=n(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),bc=d(),Lo=a("p"),yc=n("This model inherits from "),ba=a("a"),$c=n("FlaxPreTrainedModel"),xc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Vc=d(),Do=a("p"),Fc=n("This model is also a Flax Linen "),Oo=a("a"),Ec=n("flax.linen.Module"),kc=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ic=d(),Ws=a("p"),Mc=n("Finally, this model supports inherent JAX features such as:"),jc=d(),ge=a("ul"),Us=a("li"),So=a("a"),Pc=n("Just-In-Time (JIT) compilation"),Cc=d(),Bs=a("li"),Wo=a("a"),Ac=n("Automatic Differentiation"),qc=d(),Rs=a("li"),Uo=a("a"),zc=n("Vectorization"),Nc=d(),Hs=a("li"),Bo=a("a"),Lc=n("Parallelization"),Dc=d(),Q=a("div"),w(Ro.$$.fragment),Oc=d(),Ye=a("p"),Sc=n("The "),Js=a("code"),Wc=n("FlaxViTPreTrainedModel"),Uc=n("forward method, overrides the "),Ks=a("code"),Bc=n("__call__"),Rc=n(" special method."),Hc=d(),w(Tt.$$.fragment),Jc=d(),Gs=a("p"),Kc=n("Example:"),Gc=d(),w(Ho.$$.fragment),this.h()},l(o){const p=_f('[data-svelte="svelte-1phssyn"]',document.head);h=s(p,"META",{name:!0,content:!0}),p.forEach(t),v=c(o),f=s(o,"H1",{class:!0});var Jo=r(f);g=s(Jo,"A",{id:!0,class:!0,href:!0});var Xs=r(g);T=s(Xs,"SPAN",{});var Zs=r(T);b(_.$$.fragment,Zs),Zs.forEach(t),Xs.forEach(t),u=c(Jo),F=s(Jo,"SPAN",{});var Qs=r(F);he=i(Qs,"Vision Transformer (ViT)"),Qs.forEach(t),Jo.forEach(t),R=c(o),b(k.$$.fragment,o),ie=c(o),j=s(o,"H2",{class:!0});var Ko=r(j);U=s(Ko,"A",{id:!0,class:!0,href:!0});var Ys=r(U);oe=s(Ys,"SPAN",{});var er=r(oe);b(C.$$.fragment,er),er.forEach(t),Ys.forEach(t),pe=c(Ko),ae=s(Ko,"SPAN",{});var tr=r(ae);E=i(tr,"Overview"),tr.forEach(t),Ko.forEach(t),M=c(o),z=s(o,"P",{});var Go=r(z);Me=i(Go,"The Vision Transformer (ViT) model was proposed in "),se=s(Go,"A",{href:!0,rel:!0});var or=r(se);L=i(or,`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),or.forEach(t),je=i(Go,` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Go.forEach(t),Te=c(o),Xo=s(o,"P",{});var ar=r(Xo);en=i(ar,"The abstract from the paper is the following:"),ar.forEach(t),sr=c(o),Zo=s(o,"P",{});var Qc=r(Zo);Da=s(Qc,"EM",{});var Yc=r(Da);tn=i(Yc,`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),Yc.forEach(t),Qc.forEach(t),rr=c(o),Qo=s(o,"P",{});var eh=r(Qo);on=i(eh,"Tips:"),eh.forEach(t),nr=c(o),N=s(o,"UL",{});var Y=r(N);Ft=s(Y,"LI",{});var Mr=r(Ft);an=i(Mr,"Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),Et=s(Mr,"A",{href:!0,rel:!0});var th=r(Et);sn=i(th,"here"),th.forEach(t),rn=i(Mr,"."),Mr.forEach(t),nn=c(Y),Oa=s(Y,"LI",{});var oh=r(Oa);ln=i(oh,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),oh.forEach(t),dn=c(Y),kt=s(Y,"LI",{});var jr=r(kt);cn=i(jr,`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Yo=s(jr,"A",{href:!0});var ah=r(Yo);hn=i(ah,"ViTFeatureExtractor"),ah.forEach(t),pn=i(jr," to resize (or rescale) and normalize images for the model."),jr.forEach(t),fn=c(Y),Pe=s(Y,"LI",{});var ya=r(Pe);mn=i(ya,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Sa=s(ya,"CODE",{});var sh=r(Sa);un=i(sh,"google/vit-base-patch16-224"),sh.forEach(t),gn=i(ya,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),It=s(ya,"A",{href:!0,rel:!0});var rh=r(It);_n=i(rh,"hub"),rh.forEach(t),vn=i(ya,"."),ya.forEach(t),Tn=c(Y),Ce=s(Y,"LI",{});var $a=r(Ce);wn=i($a,"The available checkpoints are either (1) pre-trained on "),Mt=s($a,"A",{href:!0,rel:!0});var nh=r(Mt);bn=i(nh,"ImageNet-21k"),nh.forEach(t),yn=i($a,` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),jt=s($a,"A",{href:!0,rel:!0});var ih=r(jt);$n=i(ih,"ImageNet"),ih.forEach(t),xn=i($a,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),$a.forEach(t),Vn=c(Y),Ae=s(Y,"LI",{});var xa=r(Ae);Fn=i(xa,`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),Pt=s(xa,"A",{href:!0,rel:!0});var lh=r(Pt);En=i(lh,"(Touvron et al., 2019)"),lh.forEach(t),kn=i(xa,", "),Ct=s(xa,"A",{href:!0,rel:!0});var dh=r(Ct);In=i(dh,`(Kolesnikov
et al., 2020)`),dh.forEach(t),Mn=i(xa,`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),xa.forEach(t),jn=c(Y),Wa=s(Y,"LI",{});var ch=r(Wa);Pn=i(ch,`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),ch.forEach(t),Y.forEach(t),ir=c(o),ea=s(o,"P",{});var hh=r(ea);Cn=i(hh,"Following the original Vision Transformer, some follow-up works have been made:"),hh.forEach(t),lr=c(o),le=s(o,"UL",{});var wt=r(le);Ua=s(wt,"LI",{});var ph=r(Ua);P=s(ph,"P",{});var S=r(P);ta=s(S,"A",{href:!0});var fh=r(ta);An=i(fh,"DeiT"),fh.forEach(t),qn=i(S,` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),oa=s(S,"A",{href:!0});var mh=r(oa);zn=i(mh,"ViTModel"),mh.forEach(t),Nn=i(S,` or
`),aa=s(S,"A",{href:!0});var uh=r(aa);Ln=i(uh,"ViTForImageClassification"),uh.forEach(t),Dn=i(S,". There are 4 variants available (in 3 different sizes): "),Ba=s(S,"EM",{});var gh=r(Ba);On=i(gh,"facebook/deit-tiny-patch16-224"),gh.forEach(t),Sn=i(S,`,
`),Ra=s(S,"EM",{});var _h=r(Ra);Wn=i(_h,"facebook/deit-small-patch16-224"),_h.forEach(t),Un=i(S,", "),Ha=s(S,"EM",{});var vh=r(Ha);Bn=i(vh,"facebook/deit-base-patch16-224"),vh.forEach(t),Rn=i(S," and "),Ja=s(S,"EM",{});var Th=r(Ja);Hn=i(Th,"facebook/deit-base-patch16-384"),Th.forEach(t),Jn=i(S,`. Note that one should
use `),sa=s(S,"A",{href:!0});var wh=r(sa);Kn=i(wh,"DeiTFeatureExtractor"),wh.forEach(t),Gn=i(S," in order to prepare images for the model."),S.forEach(t),ph.forEach(t),Xn=c(wt),Ka=s(wt,"LI",{});var bh=r(Ka);ra=s(bh,"P",{});var Xc=r(ra);na=s(Xc,"A",{href:!0});var yh=r(na);Zn=i(yh,"BEiT"),yh.forEach(t),Qn=i(Xc,` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Xc.forEach(t),bh.forEach(t),Yn=c(wt),Ga=s(wt,"LI",{});var $h=r(Ga);At=s($h,"P",{});var Pr=r(At);ei=i(Pr,`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),qt=s(Pr,"A",{href:!0,rel:!0});var xh=r(qt);ti=i(xh,"hub"),xh.forEach(t),oi=i(Pr,"."),Pr.forEach(t),$h.forEach(t),ai=c(wt),Xa=s(wt,"LI",{});var Vh=r(Xa);ia=s(Vh,"P",{});var Zc=r(ia);la=s(Zc,"A",{href:!0});var Fh=r(la);si=i(Fh,"MAE"),Fh.forEach(t),ri=i(Zc,` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),Zc.forEach(t),Vh.forEach(t),wt.forEach(t),dr=c(o),we=s(o,"P",{});var Va=r(we);ni=i(Va,"This model was contributed by "),zt=s(Va,"A",{href:!0,rel:!0});var Eh=r(zt);ii=i(Eh,"nielsr"),Eh.forEach(t),li=i(Va,`. The original code (written in JAX) can be
found `),Nt=s(Va,"A",{href:!0,rel:!0});var kh=r(Nt);di=i(kh,"here"),kh.forEach(t),ci=i(Va,"."),Va.forEach(t),cr=c(o),et=s(o,"P",{});var Cr=r(et);hi=i(Cr,"Note that we converted the weights from Ross Wightman\u2019s "),Lt=s(Cr,"A",{href:!0,rel:!0});var Ih=r(Lt);pi=i(Ih,"timm library"),Ih.forEach(t),fi=i(Cr,`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),Cr.forEach(t),hr=c(o),qe=s(o,"H2",{class:!0});var Ar=r(qe);tt=s(Ar,"A",{id:!0,class:!0,href:!0});var Mh=r(tt);Za=s(Mh,"SPAN",{});var jh=r(Za);b(Dt.$$.fragment,jh),jh.forEach(t),Mh.forEach(t),mi=c(Ar),Qa=s(Ar,"SPAN",{});var Ph=r(Qa);ui=i(Ph,"ViTConfig"),Ph.forEach(t),Ar.forEach(t),pr=c(o),B=s(o,"DIV",{class:!0});var ye=r(B);b(Ot.$$.fragment,ye),gi=c(ye),ze=s(ye,"P",{});var Fa=r(ze);_i=i(Fa,"This is the configuration class to store the configuration of a "),da=s(Fa,"A",{href:!0});var Ch=r(da);vi=i(Ch,"ViTModel"),Ch.forEach(t),Ti=i(Fa,`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),St=s(Fa,"A",{href:!0,rel:!0});var Ah=r(St);wi=i(Ah,"google/vit-base-patch16-224"),Ah.forEach(t),bi=i(Fa," architecture."),Fa.forEach(t),yi=c(ye),Ne=s(ye,"P",{});var Ea=r(Ne);$i=i(Ea,"Configuration objects inherit from "),ca=s(Ea,"A",{href:!0});var qh=r(ca);xi=i(qh,"PretrainedConfig"),qh.forEach(t),Vi=i(Ea,` and can be used to control the model outputs. Read the
documentation from `),ha=s(Ea,"A",{href:!0});var zh=r(ha);Fi=i(zh,"PretrainedConfig"),zh.forEach(t),Ei=i(Ea," for more information."),Ea.forEach(t),ki=c(ye),Ya=s(ye,"P",{});var Nh=r(Ya);Ii=i(Nh,"Example:"),Nh.forEach(t),Mi=c(ye),b(Wt.$$.fragment,ye),ye.forEach(t),fr=c(o),Le=s(o,"H2",{class:!0});var qr=r(Le);ot=s(qr,"A",{id:!0,class:!0,href:!0});var Lh=r(ot);es=s(Lh,"SPAN",{});var Dh=r(es);b(Ut.$$.fragment,Dh),Dh.forEach(t),Lh.forEach(t),ji=c(qr),ts=s(qr,"SPAN",{});var Oh=r(ts);Pi=i(Oh,"ViTFeatureExtractor"),Oh.forEach(t),qr.forEach(t),mr=c(o),re=s(o,"DIV",{class:!0});var bt=r(re);b(Bt.$$.fragment,bt),Ci=c(bt),os=s(bt,"P",{});var Sh=r(os);Ai=i(Sh,"Constructs a ViT feature extractor."),Sh.forEach(t),qi=c(bt),Rt=s(bt,"P",{});var zr=r(Rt);zi=i(zr,"This feature extractor inherits from "),pa=s(zr,"A",{href:!0});var Wh=r(pa);Ni=i(Wh,"FeatureExtractionMixin"),Wh.forEach(t),Li=i(zr,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),zr.forEach(t),Di=c(bt),be=s(bt,"DIV",{class:!0});var ka=r(be);b(Ht.$$.fragment,ka),Oi=c(ka),as=s(ka,"P",{});var Uh=r(as);Si=i(Uh,"Main method to prepare for the model one or several image(s)."),Uh.forEach(t),Wi=c(ka),b(at.$$.fragment,ka),ka.forEach(t),bt.forEach(t),ur=c(o),De=s(o,"H2",{class:!0});var Nr=r(De);st=s(Nr,"A",{id:!0,class:!0,href:!0});var Bh=r(st);ss=s(Bh,"SPAN",{});var Rh=r(ss);b(Jt.$$.fragment,Rh),Rh.forEach(t),Bh.forEach(t),Ui=c(Nr),rs=s(Nr,"SPAN",{});var Hh=r(rs);Bi=i(Hh,"ViTModel"),Hh.forEach(t),Nr.forEach(t),gr=c(o),fe=s(o,"DIV",{class:!0});var Ia=r(fe);b(Kt.$$.fragment,Ia),Ri=c(Ia),Gt=s(Ia,"P",{});var Lr=r(Gt);Hi=i(Lr,`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Xt=s(Lr,"A",{href:!0,rel:!0});var Jh=r(Xt);Ji=i(Jh,"torch.nn.Module"),Jh.forEach(t),Ki=i(Lr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Lr.forEach(t),Gi=c(Ia),H=s(Ia,"DIV",{class:!0});var $e=r(H);b(Zt.$$.fragment,$e),Xi=c($e),Oe=s($e,"P",{});var Ma=r(Oe);Zi=i(Ma,"The "),fa=s(Ma,"A",{href:!0});var Kh=r(fa);Qi=i(Kh,"ViTModel"),Kh.forEach(t),Yi=i(Ma," forward method, overrides the "),ns=s(Ma,"CODE",{});var Gh=r(ns);el=i(Gh,"__call__"),Gh.forEach(t),tl=i(Ma," special method."),Ma.forEach(t),ol=c($e),b(rt.$$.fragment,$e),al=c($e),is=s($e,"P",{});var Xh=r(is);sl=i(Xh,"Example:"),Xh.forEach(t),rl=c($e),b(Qt.$$.fragment,$e),$e.forEach(t),Ia.forEach(t),_r=c(o),Se=s(o,"H2",{class:!0});var Dr=r(Se);nt=s(Dr,"A",{id:!0,class:!0,href:!0});var Zh=r(nt);ls=s(Zh,"SPAN",{});var Qh=r(ls);b(Yt.$$.fragment,Qh),Qh.forEach(t),Zh.forEach(t),nl=c(Dr),ds=s(Dr,"SPAN",{});var Yh=r(ds);il=i(Yh,"ViTForMaskedImageModeling"),Yh.forEach(t),Dr.forEach(t),vr=c(o),me=s(o,"DIV",{class:!0});var ja=r(me);b(eo.$$.fragment,ja),ll=c(ja),We=s(ja,"P",{});var Pa=r(We);dl=i(Pa,"ViT Model with a decoder on top for masked image modeling, as proposed in "),cs=s(Pa,"CODE",{});var ep=r(cs);cl=i(ep,"SimMIM <https://arxiv.org/abs/2111.09886>"),ep.forEach(t),hl=i(Pa,`__.
This model is a PyTorch `),to=s(Pa,"A",{href:!0,rel:!0});var tp=r(to);pl=i(tp,"torch.nn.Module"),tp.forEach(t),fl=i(Pa,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pa.forEach(t),ml=c(ja),J=s(ja,"DIV",{class:!0});var xe=r(J);b(oo.$$.fragment,xe),ul=c(xe),Ue=s(xe,"P",{});var Ca=r(Ue);gl=i(Ca,"The "),ma=s(Ca,"A",{href:!0});var op=r(ma);_l=i(op,"ViTForMaskedImageModeling"),op.forEach(t),vl=i(Ca," forward method, overrides the "),hs=s(Ca,"CODE",{});var ap=r(hs);Tl=i(ap,"__call__"),ap.forEach(t),wl=i(Ca," special method."),Ca.forEach(t),bl=c(xe),b(it.$$.fragment,xe),yl=c(xe),ps=s(xe,"P",{});var sp=r(ps);$l=i(sp,"Examples:"),sp.forEach(t),xl=c(xe),b(ao.$$.fragment,xe),xe.forEach(t),ja.forEach(t),Tr=c(o),Be=s(o,"H2",{class:!0});var Or=r(Be);lt=s(Or,"A",{id:!0,class:!0,href:!0});var rp=r(lt);fs=s(rp,"SPAN",{});var np=r(fs);b(so.$$.fragment,np),np.forEach(t),rp.forEach(t),Vl=c(Or),ms=s(Or,"SPAN",{});var ip=r(ms);Fl=i(ip,"ViTForImageClassification"),ip.forEach(t),Or.forEach(t),wr=c(o),ne=s(o,"DIV",{class:!0});var yt=r(ne);b(ro.$$.fragment,yt),El=c(yt),us=s(yt,"P",{});var lp=r(us);kl=i(lp,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),lp.forEach(t),Il=c(yt),no=s(yt,"P",{});var Sr=r(no);Ml=i(Sr,"This model is a PyTorch "),io=s(Sr,"A",{href:!0,rel:!0});var dp=r(io);jl=i(dp,"torch.nn.Module"),dp.forEach(t),Pl=i(Sr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Sr.forEach(t),Cl=c(yt),K=s(yt,"DIV",{class:!0});var Ve=r(K);b(lo.$$.fragment,Ve),Al=c(Ve),Re=s(Ve,"P",{});var Aa=r(Re);ql=i(Aa,"The "),ua=s(Aa,"A",{href:!0});var cp=r(ua);zl=i(cp,"ViTForImageClassification"),cp.forEach(t),Nl=i(Aa," forward method, overrides the "),gs=s(Aa,"CODE",{});var hp=r(gs);Ll=i(hp,"__call__"),hp.forEach(t),Dl=i(Aa," special method."),Aa.forEach(t),Ol=c(Ve),b(dt.$$.fragment,Ve),Sl=c(Ve),_s=s(Ve,"P",{});var pp=r(_s);Wl=i(pp,"Example:"),pp.forEach(t),Ul=c(Ve),b(co.$$.fragment,Ve),Ve.forEach(t),yt.forEach(t),br=c(o),He=s(o,"H2",{class:!0});var Wr=r(He);ct=s(Wr,"A",{id:!0,class:!0,href:!0});var fp=r(ct);vs=s(fp,"SPAN",{});var mp=r(vs);b(ho.$$.fragment,mp),mp.forEach(t),fp.forEach(t),Bl=c(Wr),Ts=s(Wr,"SPAN",{});var up=r(Ts);Rl=i(up,"TFViTModel"),up.forEach(t),Wr.forEach(t),yr=c(o),D=s(o,"DIV",{class:!0});var de=r(D);b(po.$$.fragment,de),Hl=c(de),ws=s(de,"P",{});var gp=r(ws);Jl=i(gp,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),gp.forEach(t),Kl=c(de),fo=s(de,"P",{});var Ur=r(fo);Gl=i(Ur,"This model inherits from "),ga=s(Ur,"A",{href:!0});var _p=r(ga);Xl=i(_p,"TFPreTrainedModel"),_p.forEach(t),Zl=i(Ur,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ur.forEach(t),Ql=c(de),mo=s(de,"P",{});var Br=r(mo);Yl=i(Br,"This model is also a "),uo=s(Br,"A",{href:!0,rel:!0});var vp=r(uo);ed=i(vp,"tf.keras.Model"),vp.forEach(t),td=i(Br,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Br.forEach(t),od=c(de),b(ht.$$.fragment,de),ad=c(de),G=s(de,"DIV",{class:!0});var Fe=r(G);b(go.$$.fragment,Fe),sd=c(Fe),Je=s(Fe,"P",{});var qa=r(Je);rd=i(qa,"The "),_a=s(qa,"A",{href:!0});var Tp=r(_a);nd=i(Tp,"TFViTModel"),Tp.forEach(t),id=i(qa," forward method, overrides the "),bs=s(qa,"CODE",{});var wp=r(bs);ld=i(wp,"__call__"),wp.forEach(t),dd=i(qa," special method."),qa.forEach(t),cd=c(Fe),b(pt.$$.fragment,Fe),hd=c(Fe),ys=s(Fe,"P",{});var bp=r(ys);pd=i(bp,"Examples:"),bp.forEach(t),fd=c(Fe),b(_o.$$.fragment,Fe),Fe.forEach(t),de.forEach(t),$r=c(o),Ke=s(o,"H2",{class:!0});var Rr=r(Ke);ft=s(Rr,"A",{id:!0,class:!0,href:!0});var yp=r(ft);$s=s(yp,"SPAN",{});var $p=r($s);b(vo.$$.fragment,$p),$p.forEach(t),yp.forEach(t),md=c(Rr),xs=s(Rr,"SPAN",{});var xp=r(xs);ud=i(xp,"TFViTForImageClassification"),xp.forEach(t),Rr.forEach(t),xr=c(o),O=s(o,"DIV",{class:!0});var ce=r(O);b(To.$$.fragment,ce),gd=c(ce),Vs=s(ce,"P",{});var Vp=r(Vs);_d=i(Vp,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Vp.forEach(t),vd=c(ce),wo=s(ce,"P",{});var Hr=r(wo);Td=i(Hr,"This model inherits from "),va=s(Hr,"A",{href:!0});var Fp=r(va);wd=i(Fp,"TFPreTrainedModel"),Fp.forEach(t),bd=i(Hr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hr.forEach(t),yd=c(ce),bo=s(ce,"P",{});var Jr=r(bo);$d=i(Jr,"This model is also a "),yo=s(Jr,"A",{href:!0,rel:!0});var Ep=r(yo);xd=i(Ep,"tf.keras.Model"),Ep.forEach(t),Vd=i(Jr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jr.forEach(t),Fd=c(ce),b(mt.$$.fragment,ce),Ed=c(ce),X=s(ce,"DIV",{class:!0});var Ee=r(X);b($o.$$.fragment,Ee),kd=c(Ee),Ge=s(Ee,"P",{});var za=r(Ge);Id=i(za,"The "),Ta=s(za,"A",{href:!0});var kp=r(Ta);Md=i(kp,"TFViTForImageClassification"),kp.forEach(t),jd=i(za," forward method, overrides the "),Fs=s(za,"CODE",{});var Ip=r(Fs);Pd=i(Ip,"__call__"),Ip.forEach(t),Cd=i(za," special method."),za.forEach(t),Ad=c(Ee),b(ut.$$.fragment,Ee),qd=c(Ee),Es=s(Ee,"P",{});var Mp=r(Es);zd=i(Mp,"Examples:"),Mp.forEach(t),Nd=c(Ee),b(xo.$$.fragment,Ee),Ee.forEach(t),ce.forEach(t),Vr=c(o),Xe=s(o,"H2",{class:!0});var Kr=r(Xe);gt=s(Kr,"A",{id:!0,class:!0,href:!0});var jp=r(gt);ks=s(jp,"SPAN",{});var Pp=r(ks);b(Vo.$$.fragment,Pp),Pp.forEach(t),jp.forEach(t),Ld=c(Kr),Is=s(Kr,"SPAN",{});var Cp=r(Is);Dd=i(Cp,"FlaxVitModel"),Cp.forEach(t),Kr.forEach(t),Fr=c(o),A=s(o,"DIV",{class:!0});var ee=r(A);b(Fo.$$.fragment,ee),Od=c(ee),Ms=s(ee,"P",{});var Ap=r(Ms);Sd=i(Ap,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Ap.forEach(t),Wd=c(ee),Eo=s(ee,"P",{});var Gr=r(Eo);Ud=i(Gr,"This model inherits from "),wa=s(Gr,"A",{href:!0});var qp=r(wa);Bd=i(qp,"FlaxPreTrainedModel"),qp.forEach(t),Rd=i(Gr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gr.forEach(t),Hd=c(ee),ko=s(ee,"P",{});var Xr=r(ko);Jd=i(Xr,"This model is also a Flax Linen "),Io=s(Xr,"A",{href:!0,rel:!0});var zp=r(Io);Kd=i(zp,"flax.linen.Module"),zp.forEach(t),Gd=i(Xr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xr.forEach(t),Xd=c(ee),js=s(ee,"P",{});var Np=r(js);Zd=i(Np,"Finally, this model supports inherent JAX features such as:"),Np.forEach(t),Qd=c(ee),ue=s(ee,"UL",{});var $t=r(ue);Ps=s($t,"LI",{});var Lp=r(Ps);Mo=s(Lp,"A",{href:!0,rel:!0});var Dp=r(Mo);Yd=i(Dp,"Just-In-Time (JIT) compilation"),Dp.forEach(t),Lp.forEach(t),ec=c($t),Cs=s($t,"LI",{});var Op=r(Cs);jo=s(Op,"A",{href:!0,rel:!0});var Sp=r(jo);tc=i(Sp,"Automatic Differentiation"),Sp.forEach(t),Op.forEach(t),oc=c($t),As=s($t,"LI",{});var Wp=r(As);Po=s(Wp,"A",{href:!0,rel:!0});var Up=r(Po);ac=i(Up,"Vectorization"),Up.forEach(t),Wp.forEach(t),sc=c($t),qs=s($t,"LI",{});var Bp=r(qs);Co=s(Bp,"A",{href:!0,rel:!0});var Rp=r(Co);rc=i(Rp,"Parallelization"),Rp.forEach(t),Bp.forEach(t),$t.forEach(t),nc=c(ee),Z=s(ee,"DIV",{class:!0});var ke=r(Z);b(Ao.$$.fragment,ke),ic=c(ke),Ze=s(ke,"P",{});var Na=r(Ze);lc=i(Na,"The "),zs=s(Na,"CODE",{});var Hp=r(zs);dc=i(Hp,"FlaxViTPreTrainedModel"),Hp.forEach(t),cc=i(Na,"forward method, overrides the "),Ns=s(Na,"CODE",{});var Jp=r(Ns);hc=i(Jp,"__call__"),Jp.forEach(t),pc=i(Na," special method."),Na.forEach(t),fc=c(ke),b(_t.$$.fragment,ke),mc=c(ke),Ls=s(ke,"P",{});var Kp=r(Ls);uc=i(Kp,"Examples:"),Kp.forEach(t),gc=c(ke),b(qo.$$.fragment,ke),ke.forEach(t),ee.forEach(t),Er=c(o),Qe=s(o,"H2",{class:!0});var Zr=r(Qe);vt=s(Zr,"A",{id:!0,class:!0,href:!0});var Gp=r(vt);Ds=s(Gp,"SPAN",{});var Xp=r(Ds);b(zo.$$.fragment,Xp),Xp.forEach(t),Gp.forEach(t),_c=c(Zr),Os=s(Zr,"SPAN",{});var Zp=r(Os);vc=i(Zp,"FlaxViTForImageClassification"),Zp.forEach(t),Zr.forEach(t),kr=c(o),q=s(o,"DIV",{class:!0});var te=r(q);b(No.$$.fragment,te),Tc=c(te),Ss=s(te,"P",{});var Qp=r(Ss);wc=i(Qp,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Qp.forEach(t),bc=c(te),Lo=s(te,"P",{});var Qr=r(Lo);yc=i(Qr,"This model inherits from "),ba=s(Qr,"A",{href:!0});var Yp=r(ba);$c=i(Yp,"FlaxPreTrainedModel"),Yp.forEach(t),xc=i(Qr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Qr.forEach(t),Vc=c(te),Do=s(te,"P",{});var Yr=r(Do);Fc=i(Yr,"This model is also a Flax Linen "),Oo=s(Yr,"A",{href:!0,rel:!0});var ef=r(Oo);Ec=i(ef,"flax.linen.Module"),ef.forEach(t),kc=i(Yr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Yr.forEach(t),Ic=c(te),Ws=s(te,"P",{});var tf=r(Ws);Mc=i(tf,"Finally, this model supports inherent JAX features such as:"),tf.forEach(t),jc=c(te),ge=s(te,"UL",{});var xt=r(ge);Us=s(xt,"LI",{});var of=r(Us);So=s(of,"A",{href:!0,rel:!0});var af=r(So);Pc=i(af,"Just-In-Time (JIT) compilation"),af.forEach(t),of.forEach(t),Cc=c(xt),Bs=s(xt,"LI",{});var sf=r(Bs);Wo=s(sf,"A",{href:!0,rel:!0});var rf=r(Wo);Ac=i(rf,"Automatic Differentiation"),rf.forEach(t),sf.forEach(t),qc=c(xt),Rs=s(xt,"LI",{});var nf=r(Rs);Uo=s(nf,"A",{href:!0,rel:!0});var lf=r(Uo);zc=i(lf,"Vectorization"),lf.forEach(t),nf.forEach(t),Nc=c(xt),Hs=s(xt,"LI",{});var df=r(Hs);Bo=s(df,"A",{href:!0,rel:!0});var cf=r(Bo);Lc=i(cf,"Parallelization"),cf.forEach(t),df.forEach(t),xt.forEach(t),Dc=c(te),Q=s(te,"DIV",{class:!0});var Ie=r(Q);b(Ro.$$.fragment,Ie),Oc=c(Ie),Ye=s(Ie,"P",{});var La=r(Ye);Sc=i(La,"The "),Js=s(La,"CODE",{});var hf=r(Js);Wc=i(hf,"FlaxViTPreTrainedModel"),hf.forEach(t),Uc=i(La,"forward method, overrides the "),Ks=s(La,"CODE",{});var pf=r(Ks);Bc=i(pf,"__call__"),pf.forEach(t),Rc=i(La," special method."),La.forEach(t),Hc=c(Ie),b(Tt.$$.fragment,Ie),Jc=c(Ie),Gs=s(Ie,"P",{});var ff=r(Gs);Kc=i(ff,"Example:"),ff.forEach(t),Gc=c(Ie),b(Ho.$$.fragment,Ie),Ie.forEach(t),te.forEach(t),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(Mf)),l(g,"id","vision-transformer-vit"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#vision-transformer-vit"),l(f,"class","relative group"),l(U,"id","overview"),l(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(U,"href","#overview"),l(j,"class","relative group"),l(se,"href","https://arxiv.org/abs/2010.11929"),l(se,"rel","nofollow"),l(Et,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),l(Et,"rel","nofollow"),l(Yo,"href","/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTFeatureExtractor"),l(It,"href","https://huggingface.co/models?search=vit"),l(It,"rel","nofollow"),l(Mt,"href","http://www.image-net.org/"),l(Mt,"rel","nofollow"),l(jt,"href","http://www.image-net.org/challenges/LSVRC/2012/"),l(jt,"rel","nofollow"),l(Pt,"href","https://arxiv.org/abs/1906.06423"),l(Pt,"rel","nofollow"),l(Ct,"href","https://arxiv.org/abs/1912.11370"),l(Ct,"rel","nofollow"),l(ta,"href","deit"),l(oa,"href","/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTModel"),l(aa,"href","/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTForImageClassification"),l(sa,"href","/docs/transformers/pr_15820/en/model_doc/deit#transformers.DeiTFeatureExtractor"),l(na,"href","beit"),l(qt,"href","https://huggingface.co/models?other=dino"),l(qt,"rel","nofollow"),l(la,"href","vit_mae"),l(zt,"href","https://huggingface.co/nielsr"),l(zt,"rel","nofollow"),l(Nt,"href","https://github.com/google-research/vision_transformer"),l(Nt,"rel","nofollow"),l(Lt,"href","https://github.com/rwightman/pytorch-image-models"),l(Lt,"rel","nofollow"),l(tt,"id","transformers.ViTConfig"),l(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(tt,"href","#transformers.ViTConfig"),l(qe,"class","relative group"),l(da,"href","/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTModel"),l(St,"href","https://huggingface.co/google/vit-base-patch16-224"),l(St,"rel","nofollow"),l(ca,"href","/docs/transformers/pr_15820/en/main_classes/configuration#transformers.PretrainedConfig"),l(ha,"href","/docs/transformers/pr_15820/en/main_classes/configuration#transformers.PretrainedConfig"),l(B,"class","docstring"),l(ot,"id","transformers.ViTFeatureExtractor"),l(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ot,"href","#transformers.ViTFeatureExtractor"),l(Le,"class","relative group"),l(pa,"href","/docs/transformers/pr_15820/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),l(be,"class","docstring"),l(re,"class","docstring"),l(st,"id","transformers.ViTModel"),l(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(st,"href","#transformers.ViTModel"),l(De,"class","relative group"),l(Xt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Xt,"rel","nofollow"),l(fa,"href","/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTModel"),l(H,"class","docstring"),l(fe,"class","docstring"),l(nt,"id","transformers.ViTForMaskedImageModeling"),l(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(nt,"href","#transformers.ViTForMaskedImageModeling"),l(Se,"class","relative group"),l(to,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(to,"rel","nofollow"),l(ma,"href","/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTForMaskedImageModeling"),l(J,"class","docstring"),l(me,"class","docstring"),l(lt,"id","transformers.ViTForImageClassification"),l(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(lt,"href","#transformers.ViTForImageClassification"),l(Be,"class","relative group"),l(io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(io,"rel","nofollow"),l(ua,"href","/docs/transformers/pr_15820/en/model_doc/vit#transformers.ViTForImageClassification"),l(K,"class","docstring"),l(ne,"class","docstring"),l(ct,"id","transformers.TFViTModel"),l(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ct,"href","#transformers.TFViTModel"),l(He,"class","relative group"),l(ga,"href","/docs/transformers/pr_15820/en/main_classes/model#transformers.TFPreTrainedModel"),l(uo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(uo,"rel","nofollow"),l(_a,"href","/docs/transformers/pr_15820/en/model_doc/vit#transformers.TFViTModel"),l(G,"class","docstring"),l(D,"class","docstring"),l(ft,"id","transformers.TFViTForImageClassification"),l(ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ft,"href","#transformers.TFViTForImageClassification"),l(Ke,"class","relative group"),l(va,"href","/docs/transformers/pr_15820/en/main_classes/model#transformers.TFPreTrainedModel"),l(yo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(yo,"rel","nofollow"),l(Ta,"href","/docs/transformers/pr_15820/en/model_doc/vit#transformers.TFViTForImageClassification"),l(X,"class","docstring"),l(O,"class","docstring"),l(gt,"id","transformers.FlaxViTModel"),l(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(gt,"href","#transformers.FlaxViTModel"),l(Xe,"class","relative group"),l(wa,"href","/docs/transformers/pr_15820/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(Io,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Io,"rel","nofollow"),l(Mo,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(Mo,"rel","nofollow"),l(jo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(jo,"rel","nofollow"),l(Po,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Po,"rel","nofollow"),l(Co,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Co,"rel","nofollow"),l(Z,"class","docstring"),l(A,"class","docstring"),l(vt,"id","transformers.FlaxViTForImageClassification"),l(vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(vt,"href","#transformers.FlaxViTForImageClassification"),l(Qe,"class","relative group"),l(ba,"href","/docs/transformers/pr_15820/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(Oo,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),l(Oo,"rel","nofollow"),l(So,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),l(So,"rel","nofollow"),l(Wo,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),l(Wo,"rel","nofollow"),l(Uo,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),l(Uo,"rel","nofollow"),l(Bo,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),l(Bo,"rel","nofollow"),l(Q,"class","docstring"),l(q,"class","docstring")},m(o,p){e(document.head,h),m(o,v,p),m(o,f,p),e(f,g),e(g,T),y(_,T,null),e(f,u),e(f,F),e(F,he),m(o,R,p),y(k,o,p),m(o,ie,p),m(o,j,p),e(j,U),e(U,oe),y(C,oe,null),e(j,pe),e(j,ae),e(ae,E),m(o,M,p),m(o,z,p),e(z,Me),e(z,se),e(se,L),e(z,je),m(o,Te,p),m(o,Xo,p),e(Xo,en),m(o,sr,p),m(o,Zo,p),e(Zo,Da),e(Da,tn),m(o,rr,p),m(o,Qo,p),e(Qo,on),m(o,nr,p),m(o,N,p),e(N,Ft),e(Ft,an),e(Ft,Et),e(Et,sn),e(Ft,rn),e(N,nn),e(N,Oa),e(Oa,ln),e(N,dn),e(N,kt),e(kt,cn),e(kt,Yo),e(Yo,hn),e(kt,pn),e(N,fn),e(N,Pe),e(Pe,mn),e(Pe,Sa),e(Sa,un),e(Pe,gn),e(Pe,It),e(It,_n),e(Pe,vn),e(N,Tn),e(N,Ce),e(Ce,wn),e(Ce,Mt),e(Mt,bn),e(Ce,yn),e(Ce,jt),e(jt,$n),e(Ce,xn),e(N,Vn),e(N,Ae),e(Ae,Fn),e(Ae,Pt),e(Pt,En),e(Ae,kn),e(Ae,Ct),e(Ct,In),e(Ae,Mn),e(N,jn),e(N,Wa),e(Wa,Pn),m(o,ir,p),m(o,ea,p),e(ea,Cn),m(o,lr,p),m(o,le,p),e(le,Ua),e(Ua,P),e(P,ta),e(ta,An),e(P,qn),e(P,oa),e(oa,zn),e(P,Nn),e(P,aa),e(aa,Ln),e(P,Dn),e(P,Ba),e(Ba,On),e(P,Sn),e(P,Ra),e(Ra,Wn),e(P,Un),e(P,Ha),e(Ha,Bn),e(P,Rn),e(P,Ja),e(Ja,Hn),e(P,Jn),e(P,sa),e(sa,Kn),e(P,Gn),e(le,Xn),e(le,Ka),e(Ka,ra),e(ra,na),e(na,Zn),e(ra,Qn),e(le,Yn),e(le,Ga),e(Ga,At),e(At,ei),e(At,qt),e(qt,ti),e(At,oi),e(le,ai),e(le,Xa),e(Xa,ia),e(ia,la),e(la,si),e(ia,ri),m(o,dr,p),m(o,we,p),e(we,ni),e(we,zt),e(zt,ii),e(we,li),e(we,Nt),e(Nt,di),e(we,ci),m(o,cr,p),m(o,et,p),e(et,hi),e(et,Lt),e(Lt,pi),e(et,fi),m(o,hr,p),m(o,qe,p),e(qe,tt),e(tt,Za),y(Dt,Za,null),e(qe,mi),e(qe,Qa),e(Qa,ui),m(o,pr,p),m(o,B,p),y(Ot,B,null),e(B,gi),e(B,ze),e(ze,_i),e(ze,da),e(da,vi),e(ze,Ti),e(ze,St),e(St,wi),e(ze,bi),e(B,yi),e(B,Ne),e(Ne,$i),e(Ne,ca),e(ca,xi),e(Ne,Vi),e(Ne,ha),e(ha,Fi),e(Ne,Ei),e(B,ki),e(B,Ya),e(Ya,Ii),e(B,Mi),y(Wt,B,null),m(o,fr,p),m(o,Le,p),e(Le,ot),e(ot,es),y(Ut,es,null),e(Le,ji),e(Le,ts),e(ts,Pi),m(o,mr,p),m(o,re,p),y(Bt,re,null),e(re,Ci),e(re,os),e(os,Ai),e(re,qi),e(re,Rt),e(Rt,zi),e(Rt,pa),e(pa,Ni),e(Rt,Li),e(re,Di),e(re,be),y(Ht,be,null),e(be,Oi),e(be,as),e(as,Si),e(be,Wi),y(at,be,null),m(o,ur,p),m(o,De,p),e(De,st),e(st,ss),y(Jt,ss,null),e(De,Ui),e(De,rs),e(rs,Bi),m(o,gr,p),m(o,fe,p),y(Kt,fe,null),e(fe,Ri),e(fe,Gt),e(Gt,Hi),e(Gt,Xt),e(Xt,Ji),e(Gt,Ki),e(fe,Gi),e(fe,H),y(Zt,H,null),e(H,Xi),e(H,Oe),e(Oe,Zi),e(Oe,fa),e(fa,Qi),e(Oe,Yi),e(Oe,ns),e(ns,el),e(Oe,tl),e(H,ol),y(rt,H,null),e(H,al),e(H,is),e(is,sl),e(H,rl),y(Qt,H,null),m(o,_r,p),m(o,Se,p),e(Se,nt),e(nt,ls),y(Yt,ls,null),e(Se,nl),e(Se,ds),e(ds,il),m(o,vr,p),m(o,me,p),y(eo,me,null),e(me,ll),e(me,We),e(We,dl),e(We,cs),e(cs,cl),e(We,hl),e(We,to),e(to,pl),e(We,fl),e(me,ml),e(me,J),y(oo,J,null),e(J,ul),e(J,Ue),e(Ue,gl),e(Ue,ma),e(ma,_l),e(Ue,vl),e(Ue,hs),e(hs,Tl),e(Ue,wl),e(J,bl),y(it,J,null),e(J,yl),e(J,ps),e(ps,$l),e(J,xl),y(ao,J,null),m(o,Tr,p),m(o,Be,p),e(Be,lt),e(lt,fs),y(so,fs,null),e(Be,Vl),e(Be,ms),e(ms,Fl),m(o,wr,p),m(o,ne,p),y(ro,ne,null),e(ne,El),e(ne,us),e(us,kl),e(ne,Il),e(ne,no),e(no,Ml),e(no,io),e(io,jl),e(no,Pl),e(ne,Cl),e(ne,K),y(lo,K,null),e(K,Al),e(K,Re),e(Re,ql),e(Re,ua),e(ua,zl),e(Re,Nl),e(Re,gs),e(gs,Ll),e(Re,Dl),e(K,Ol),y(dt,K,null),e(K,Sl),e(K,_s),e(_s,Wl),e(K,Ul),y(co,K,null),m(o,br,p),m(o,He,p),e(He,ct),e(ct,vs),y(ho,vs,null),e(He,Bl),e(He,Ts),e(Ts,Rl),m(o,yr,p),m(o,D,p),y(po,D,null),e(D,Hl),e(D,ws),e(ws,Jl),e(D,Kl),e(D,fo),e(fo,Gl),e(fo,ga),e(ga,Xl),e(fo,Zl),e(D,Ql),e(D,mo),e(mo,Yl),e(mo,uo),e(uo,ed),e(mo,td),e(D,od),y(ht,D,null),e(D,ad),e(D,G),y(go,G,null),e(G,sd),e(G,Je),e(Je,rd),e(Je,_a),e(_a,nd),e(Je,id),e(Je,bs),e(bs,ld),e(Je,dd),e(G,cd),y(pt,G,null),e(G,hd),e(G,ys),e(ys,pd),e(G,fd),y(_o,G,null),m(o,$r,p),m(o,Ke,p),e(Ke,ft),e(ft,$s),y(vo,$s,null),e(Ke,md),e(Ke,xs),e(xs,ud),m(o,xr,p),m(o,O,p),y(To,O,null),e(O,gd),e(O,Vs),e(Vs,_d),e(O,vd),e(O,wo),e(wo,Td),e(wo,va),e(va,wd),e(wo,bd),e(O,yd),e(O,bo),e(bo,$d),e(bo,yo),e(yo,xd),e(bo,Vd),e(O,Fd),y(mt,O,null),e(O,Ed),e(O,X),y($o,X,null),e(X,kd),e(X,Ge),e(Ge,Id),e(Ge,Ta),e(Ta,Md),e(Ge,jd),e(Ge,Fs),e(Fs,Pd),e(Ge,Cd),e(X,Ad),y(ut,X,null),e(X,qd),e(X,Es),e(Es,zd),e(X,Nd),y(xo,X,null),m(o,Vr,p),m(o,Xe,p),e(Xe,gt),e(gt,ks),y(Vo,ks,null),e(Xe,Ld),e(Xe,Is),e(Is,Dd),m(o,Fr,p),m(o,A,p),y(Fo,A,null),e(A,Od),e(A,Ms),e(Ms,Sd),e(A,Wd),e(A,Eo),e(Eo,Ud),e(Eo,wa),e(wa,Bd),e(Eo,Rd),e(A,Hd),e(A,ko),e(ko,Jd),e(ko,Io),e(Io,Kd),e(ko,Gd),e(A,Xd),e(A,js),e(js,Zd),e(A,Qd),e(A,ue),e(ue,Ps),e(Ps,Mo),e(Mo,Yd),e(ue,ec),e(ue,Cs),e(Cs,jo),e(jo,tc),e(ue,oc),e(ue,As),e(As,Po),e(Po,ac),e(ue,sc),e(ue,qs),e(qs,Co),e(Co,rc),e(A,nc),e(A,Z),y(Ao,Z,null),e(Z,ic),e(Z,Ze),e(Ze,lc),e(Ze,zs),e(zs,dc),e(Ze,cc),e(Ze,Ns),e(Ns,hc),e(Ze,pc),e(Z,fc),y(_t,Z,null),e(Z,mc),e(Z,Ls),e(Ls,uc),e(Z,gc),y(qo,Z,null),m(o,Er,p),m(o,Qe,p),e(Qe,vt),e(vt,Ds),y(zo,Ds,null),e(Qe,_c),e(Qe,Os),e(Os,vc),m(o,kr,p),m(o,q,p),y(No,q,null),e(q,Tc),e(q,Ss),e(Ss,wc),e(q,bc),e(q,Lo),e(Lo,yc),e(Lo,ba),e(ba,$c),e(Lo,xc),e(q,Vc),e(q,Do),e(Do,Fc),e(Do,Oo),e(Oo,Ec),e(Do,kc),e(q,Ic),e(q,Ws),e(Ws,Mc),e(q,jc),e(q,ge),e(ge,Us),e(Us,So),e(So,Pc),e(ge,Cc),e(ge,Bs),e(Bs,Wo),e(Wo,Ac),e(ge,qc),e(ge,Rs),e(Rs,Uo),e(Uo,zc),e(ge,Nc),e(ge,Hs),e(Hs,Bo),e(Bo,Lc),e(q,Dc),e(q,Q),y(Ro,Q,null),e(Q,Oc),e(Q,Ye),e(Ye,Sc),e(Ye,Js),e(Js,Wc),e(Ye,Uc),e(Ye,Ks),e(Ks,Bc),e(Ye,Rc),e(Q,Hc),y(Tt,Q,null),e(Q,Jc),e(Q,Gs),e(Gs,Kc),e(Q,Gc),y(Ho,Q,null),Ir=!0},p(o,[p]){const Jo={};p&2&&(Jo.$$scope={dirty:p,ctx:o}),k.$set(Jo);const Xs={};p&2&&(Xs.$$scope={dirty:p,ctx:o}),at.$set(Xs);const Zs={};p&2&&(Zs.$$scope={dirty:p,ctx:o}),rt.$set(Zs);const Qs={};p&2&&(Qs.$$scope={dirty:p,ctx:o}),it.$set(Qs);const Ko={};p&2&&(Ko.$$scope={dirty:p,ctx:o}),dt.$set(Ko);const Ys={};p&2&&(Ys.$$scope={dirty:p,ctx:o}),ht.$set(Ys);const er={};p&2&&(er.$$scope={dirty:p,ctx:o}),pt.$set(er);const tr={};p&2&&(tr.$$scope={dirty:p,ctx:o}),mt.$set(tr);const Go={};p&2&&(Go.$$scope={dirty:p,ctx:o}),ut.$set(Go);const or={};p&2&&(or.$$scope={dirty:p,ctx:o}),_t.$set(or);const ar={};p&2&&(ar.$$scope={dirty:p,ctx:o}),Tt.$set(ar)},i(o){Ir||($(_.$$.fragment,o),$(k.$$.fragment,o),$(C.$$.fragment,o),$(Dt.$$.fragment,o),$(Ot.$$.fragment,o),$(Wt.$$.fragment,o),$(Ut.$$.fragment,o),$(Bt.$$.fragment,o),$(Ht.$$.fragment,o),$(at.$$.fragment,o),$(Jt.$$.fragment,o),$(Kt.$$.fragment,o),$(Zt.$$.fragment,o),$(rt.$$.fragment,o),$(Qt.$$.fragment,o),$(Yt.$$.fragment,o),$(eo.$$.fragment,o),$(oo.$$.fragment,o),$(it.$$.fragment,o),$(ao.$$.fragment,o),$(so.$$.fragment,o),$(ro.$$.fragment,o),$(lo.$$.fragment,o),$(dt.$$.fragment,o),$(co.$$.fragment,o),$(ho.$$.fragment,o),$(po.$$.fragment,o),$(ht.$$.fragment,o),$(go.$$.fragment,o),$(pt.$$.fragment,o),$(_o.$$.fragment,o),$(vo.$$.fragment,o),$(To.$$.fragment,o),$(mt.$$.fragment,o),$($o.$$.fragment,o),$(ut.$$.fragment,o),$(xo.$$.fragment,o),$(Vo.$$.fragment,o),$(Fo.$$.fragment,o),$(Ao.$$.fragment,o),$(_t.$$.fragment,o),$(qo.$$.fragment,o),$(zo.$$.fragment,o),$(No.$$.fragment,o),$(Ro.$$.fragment,o),$(Tt.$$.fragment,o),$(Ho.$$.fragment,o),Ir=!0)},o(o){x(_.$$.fragment,o),x(k.$$.fragment,o),x(C.$$.fragment,o),x(Dt.$$.fragment,o),x(Ot.$$.fragment,o),x(Wt.$$.fragment,o),x(Ut.$$.fragment,o),x(Bt.$$.fragment,o),x(Ht.$$.fragment,o),x(at.$$.fragment,o),x(Jt.$$.fragment,o),x(Kt.$$.fragment,o),x(Zt.$$.fragment,o),x(rt.$$.fragment,o),x(Qt.$$.fragment,o),x(Yt.$$.fragment,o),x(eo.$$.fragment,o),x(oo.$$.fragment,o),x(it.$$.fragment,o),x(ao.$$.fragment,o),x(so.$$.fragment,o),x(ro.$$.fragment,o),x(lo.$$.fragment,o),x(dt.$$.fragment,o),x(co.$$.fragment,o),x(ho.$$.fragment,o),x(po.$$.fragment,o),x(ht.$$.fragment,o),x(go.$$.fragment,o),x(pt.$$.fragment,o),x(_o.$$.fragment,o),x(vo.$$.fragment,o),x(To.$$.fragment,o),x(mt.$$.fragment,o),x($o.$$.fragment,o),x(ut.$$.fragment,o),x(xo.$$.fragment,o),x(Vo.$$.fragment,o),x(Fo.$$.fragment,o),x(Ao.$$.fragment,o),x(_t.$$.fragment,o),x(qo.$$.fragment,o),x(zo.$$.fragment,o),x(No.$$.fragment,o),x(Ro.$$.fragment,o),x(Tt.$$.fragment,o),x(Ho.$$.fragment,o),Ir=!1},d(o){t(h),o&&t(v),o&&t(f),V(_),o&&t(R),V(k,o),o&&t(ie),o&&t(j),V(C),o&&t(M),o&&t(z),o&&t(Te),o&&t(Xo),o&&t(sr),o&&t(Zo),o&&t(rr),o&&t(Qo),o&&t(nr),o&&t(N),o&&t(ir),o&&t(ea),o&&t(lr),o&&t(le),o&&t(dr),o&&t(we),o&&t(cr),o&&t(et),o&&t(hr),o&&t(qe),V(Dt),o&&t(pr),o&&t(B),V(Ot),V(Wt),o&&t(fr),o&&t(Le),V(Ut),o&&t(mr),o&&t(re),V(Bt),V(Ht),V(at),o&&t(ur),o&&t(De),V(Jt),o&&t(gr),o&&t(fe),V(Kt),V(Zt),V(rt),V(Qt),o&&t(_r),o&&t(Se),V(Yt),o&&t(vr),o&&t(me),V(eo),V(oo),V(it),V(ao),o&&t(Tr),o&&t(Be),V(so),o&&t(wr),o&&t(ne),V(ro),V(lo),V(dt),V(co),o&&t(br),o&&t(He),V(ho),o&&t(yr),o&&t(D),V(po),V(ht),V(go),V(pt),V(_o),o&&t($r),o&&t(Ke),V(vo),o&&t(xr),o&&t(O),V(To),V(mt),V($o),V(ut),V(xo),o&&t(Vr),o&&t(Xe),V(Vo),o&&t(Fr),o&&t(A),V(Fo),V(Ao),V(_t),V(qo),o&&t(Er),o&&t(Qe),V(zo),o&&t(kr),o&&t(q),V(No),V(Ro),V(Tt),V(Ho)}}}const Mf={local:"vision-transformer-vit",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViTConfig",title:"ViTConfig"},{local:"transformers.ViTFeatureExtractor",title:"ViTFeatureExtractor"},{local:"transformers.ViTModel",title:"ViTModel"},{local:"transformers.ViTForMaskedImageModeling",title:"ViTForMaskedImageModeling"},{local:"transformers.ViTForImageClassification",title:"ViTForImageClassification"},{local:"transformers.TFViTModel",title:"TFViTModel"},{local:"transformers.TFViTForImageClassification",title:"TFViTForImageClassification"},{local:"transformers.FlaxViTModel",title:"FlaxVitModel"},{local:"transformers.FlaxViTForImageClassification",title:"FlaxViTForImageClassification"}],title:"Vision Transformer (ViT)"};function jf(I,h,v){let{fw:f}=h;return I.$$set=g=>{"fw"in g&&v(0,f=g.fw)},[f]}class Lf extends mf{constructor(h){super();uf(this,h,jf,If,gf,{fw:0})}}export{Lf as default,Mf as metadata};
