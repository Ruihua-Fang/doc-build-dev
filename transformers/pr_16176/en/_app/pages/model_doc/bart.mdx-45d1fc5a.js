import{S as Cw,i as Aw,s as Sw,e as n,k as d,w as m,t as r,M as Iw,c as a,d as t,m as l,a as s,x as f,h as i,b as c,F as e,g as u,y as _,q as g,o as k,B as b}from"../../chunks/vendor-6b77c823.js";import{T as qe}from"../../chunks/Tip-39098574.js";import{D as q}from"../../chunks/Docstring-abef54e3.js";import{C as P}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as H}from"../../chunks/IconCopyLink-7a11ce68.js";function Ow(j){let p,z,y,w,x;return{c(){p=n("p"),z=r("When used with "),y=n("code"),w=r("is_split_into_words=True"),x=r(", this tokenizer will add a space before each word (even the first one).")},l(T){p=a(T,"P",{});var v=s(p);z=i(v,"When used with "),y=a(v,"CODE",{});var B=s(y);w=i(B,"is_split_into_words=True"),B.forEach(t),x=i(v,", this tokenizer will add a space before each word (even the first one)."),v.forEach(t)},m(T,v){u(T,p,v),e(p,z),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function Nw(j){let p,z,y,w,x,T,v,B;return{c(){p=n("p"),z=r("When used with "),y=n("code"),w=r("is_split_into_words=True"),x=r(", this tokenizer needs to be instantiated with "),T=n("code"),v=r("add_prefix_space=True"),B=r(".")},l(ae){p=a(ae,"P",{});var A=s(p);z=i(A,"When used with "),y=a(A,"CODE",{});var $=s(y);w=i($,"is_split_into_words=True"),$.forEach(t),x=i(A,", this tokenizer needs to be instantiated with "),T=a(A,"CODE",{});var ce=s(T);v=i(ce,"add_prefix_space=True"),ce.forEach(t),B=i(A,"."),A.forEach(t)},m(ae,A){u(ae,p,A),e(p,z),e(p,y),e(y,w),e(p,x),e(p,T),e(T,v),e(p,B)},d(ae){ae&&t(p)}}}function Dw(j){let p,z,y,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);z=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,z),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function Lw(j){let p,z,y,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);z=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,z),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function Gw(j){let p,z,y,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);z=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,z),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function Ww(j){let p,z,y,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);z=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,z),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function Rw(j){let p,z,y,w,x,T,v,B,ae,A,$,ce,ge,et,ke,be,tt,Ze,Q,N,Re,se,C,S,ot,pe,he,nt,V,at,st,D,$e,ye,Ye,K,re,rt,it,J,dt,ve,Ue;return{c(){p=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),y=d(),w=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),v=d(),B=n("li"),ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),A=d(),$=n("p"),ce=r("This second option is useful when using "),ge=n("code"),et=r("tf.keras.Model.fit"),ke=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),be=n("code"),tt=r("model(inputs)"),Ze=r("."),Q=d(),N=n("p"),Re=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se=d(),C=n("ul"),S=n("li"),ot=r("a single Tensor with "),pe=n("code"),he=r("input_ids"),nt=r(" only and nothing else: "),V=n("code"),at=r("model(input_ids)"),st=d(),D=n("li"),$e=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ye=n("code"),Ye=r("model([input_ids, attention_mask])"),K=r(" or "),re=n("code"),rt=r("model([input_ids, attention_mask, token_type_ids])"),it=d(),J=n("li"),dt=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ve=n("code"),Ue=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(F){p=a(F,"P",{});var M=s(p);z=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),y=l(F),w=a(F,"UL",{});var U=s(w);x=a(U,"LI",{});var Lt=s(x);T=i(Lt,"having all inputs as keyword arguments (like PyTorch models), or"),Lt.forEach(t),v=l(U),B=a(U,"LI",{});var He=s(B);ae=i(He,"having all inputs as a list, tuple or dict in the first positional arguments."),He.forEach(t),U.forEach(t),A=l(F),$=a(F,"P",{});var ie=s($);ce=i(ie,"This second option is useful when using "),ge=a(ie,"CODE",{});var Gt=s(ge);et=i(Gt,"tf.keras.Model.fit"),Gt.forEach(t),ke=i(ie,` method which currently requires having all the
tensors in the first argument of the model call function: `),be=a(ie,"CODE",{});var Qe=s(be);tt=i(Qe,"model(inputs)"),Qe.forEach(t),Ze=i(ie,"."),ie.forEach(t),Q=l(F),N=a(F,"P",{});var Wt=s(N);Re=i(Wt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Wt.forEach(t),se=l(F),C=a(F,"UL",{});var de=s(C);S=a(de,"LI",{});var ue=s(S);ot=i(ue,"a single Tensor with "),pe=a(ue,"CODE",{});var Te=s(pe);he=i(Te,"input_ids"),Te.forEach(t),nt=i(ue," only and nothing else: "),V=a(ue,"CODE",{});var je=s(V);at=i(je,"model(input_ids)"),je.forEach(t),ue.forEach(t),st=l(de),D=a(de,"LI",{});var le=s(D);$e=i(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ye=a(le,"CODE",{});var Ve=s(ye);Ye=i(Ve,"model([input_ids, attention_mask])"),Ve.forEach(t),K=i(le," or "),re=a(le,"CODE",{});var Rt=s(re);rt=i(Rt,"model([input_ids, attention_mask, token_type_ids])"),Rt.forEach(t),le.forEach(t),it=l(de),J=a(de,"LI",{});var Je=s(J);dt=i(Je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ve=a(Je,"CODE",{});var Ut=s(ve);Ue=i(Ut,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ut.forEach(t),Je.forEach(t),de.forEach(t)},m(F,M){u(F,p,M),e(p,z),u(F,y,M),u(F,w,M),e(w,x),e(x,T),e(w,v),e(w,B),e(B,ae),u(F,A,M),u(F,$,M),e($,ce),e($,ge),e(ge,et),e($,ke),e($,be),e(be,tt),e($,Ze),u(F,Q,M),u(F,N,M),e(N,Re),u(F,se,M),u(F,C,M),e(C,S),e(S,ot),e(S,pe),e(pe,he),e(S,nt),e(S,V),e(V,at),e(C,st),e(C,D),e(D,$e),e(D,ye),e(ye,Ye),e(D,K),e(D,re),e(re,rt),e(C,it),e(C,J),e(J,dt),e(J,ve),e(ve,Ue)},d(F){F&&t(p),F&&t(y),F&&t(w),F&&t(A),F&&t($),F&&t(Q),F&&t(N),F&&t(se),F&&t(C)}}}function Uw(j){let p,z,y,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);z=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,z),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function Hw(j){let p,z,y,w,x,T,v,B,ae,A,$,ce,ge,et,ke,be,tt,Ze,Q,N,Re,se,C,S,ot,pe,he,nt,V,at,st,D,$e,ye,Ye,K,re,rt,it,J,dt,ve,Ue;return{c(){p=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),y=d(),w=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),v=d(),B=n("li"),ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),A=d(),$=n("p"),ce=r("This second option is useful when using "),ge=n("code"),et=r("tf.keras.Model.fit"),ke=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),be=n("code"),tt=r("model(inputs)"),Ze=r("."),Q=d(),N=n("p"),Re=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se=d(),C=n("ul"),S=n("li"),ot=r("a single Tensor with "),pe=n("code"),he=r("input_ids"),nt=r(" only and nothing else: "),V=n("code"),at=r("model(input_ids)"),st=d(),D=n("li"),$e=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ye=n("code"),Ye=r("model([input_ids, attention_mask])"),K=r(" or "),re=n("code"),rt=r("model([input_ids, attention_mask, token_type_ids])"),it=d(),J=n("li"),dt=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ve=n("code"),Ue=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(F){p=a(F,"P",{});var M=s(p);z=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),y=l(F),w=a(F,"UL",{});var U=s(w);x=a(U,"LI",{});var Lt=s(x);T=i(Lt,"having all inputs as keyword arguments (like PyTorch models), or"),Lt.forEach(t),v=l(U),B=a(U,"LI",{});var He=s(B);ae=i(He,"having all inputs as a list, tuple or dict in the first positional arguments."),He.forEach(t),U.forEach(t),A=l(F),$=a(F,"P",{});var ie=s($);ce=i(ie,"This second option is useful when using "),ge=a(ie,"CODE",{});var Gt=s(ge);et=i(Gt,"tf.keras.Model.fit"),Gt.forEach(t),ke=i(ie,` method which currently requires having all the
tensors in the first argument of the model call function: `),be=a(ie,"CODE",{});var Qe=s(be);tt=i(Qe,"model(inputs)"),Qe.forEach(t),Ze=i(ie,"."),ie.forEach(t),Q=l(F),N=a(F,"P",{});var Wt=s(N);Re=i(Wt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Wt.forEach(t),se=l(F),C=a(F,"UL",{});var de=s(C);S=a(de,"LI",{});var ue=s(S);ot=i(ue,"a single Tensor with "),pe=a(ue,"CODE",{});var Te=s(pe);he=i(Te,"input_ids"),Te.forEach(t),nt=i(ue," only and nothing else: "),V=a(ue,"CODE",{});var je=s(V);at=i(je,"model(input_ids)"),je.forEach(t),ue.forEach(t),st=l(de),D=a(de,"LI",{});var le=s(D);$e=i(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ye=a(le,"CODE",{});var Ve=s(ye);Ye=i(Ve,"model([input_ids, attention_mask])"),Ve.forEach(t),K=i(le," or "),re=a(le,"CODE",{});var Rt=s(re);rt=i(Rt,"model([input_ids, attention_mask, token_type_ids])"),Rt.forEach(t),le.forEach(t),it=l(de),J=a(de,"LI",{});var Je=s(J);dt=i(Je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ve=a(Je,"CODE",{});var Ut=s(ve);Ue=i(Ut,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ut.forEach(t),Je.forEach(t),de.forEach(t)},m(F,M){u(F,p,M),e(p,z),u(F,y,M),u(F,w,M),e(w,x),e(x,T),e(w,v),e(w,B),e(B,ae),u(F,A,M),u(F,$,M),e($,ce),e($,ge),e(ge,et),e($,ke),e($,be),e(be,tt),e($,Ze),u(F,Q,M),u(F,N,M),e(N,Re),u(F,se,M),u(F,C,M),e(C,S),e(S,ot),e(S,pe),e(pe,he),e(S,nt),e(S,V),e(V,at),e(C,st),e(C,D),e(D,$e),e(D,ye),e(ye,Ye),e(D,K),e(D,re),e(re,rt),e(C,it),e(C,J),e(J,dt),e(J,ve),e(ve,Ue)},d(F){F&&t(p),F&&t(y),F&&t(w),F&&t(A),F&&t($),F&&t(Q),F&&t(N),F&&t(se),F&&t(C)}}}function Qw(j){let p,z,y,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);z=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,z),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function Vw(j){let p,z,y,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);z=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,z),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function Jw(j){let p,z,y,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);z=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,z),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function Xw(j){let p,z,y,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);z=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,z),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function Kw(j){let p,z,y,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);z=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,z),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function Zw(j){let p,z,y,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),y=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var v=s(p);z=i(v,"Although the recipe for forward pass needs to be defined within this function, one should call the "),y=a(v,"CODE",{});var B=s(y);w=i(B,"Module"),B.forEach(t),x=i(v,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),v.forEach(t)},m(T,v){u(T,p,v),e(p,z),e(p,y),e(y,w),e(p,x)},d(T){T&&t(p)}}}function Yw(j){let p,z,y,w,x,T,v,B,ae,A,$,ce,ge,et,ke,be,tt,Ze,Q,N,Re,se,C,S,ot,pe,he,nt,V,at,st,D,$e,ye,Ye,K,re,rt,it,J,dt,ve,Ue,F,M,U,Lt,He,ie,Gt,Qe,Wt,de,ue,Te,je,le,Ve,Rt,Je,Ut,tc,_t,xn,Ip,zn,Op,Np,Dp,lt,Lp,_r,Gp,Wp,wi,Rp,Up,Fn,Hp,Qp,Vp,jo,Bn,Jp,Xp,qn,Kp,Zp,oc,Ht,Mo,xi,$n,Yp,zi,eh,nc,Me,ct,th,Fi,oh,nh,gr,ah,sh,kr,rh,ih,dh,Qt,lh,br,ch,ph,Bi,hh,uh,mh,Vt,fh,qi,_h,gh,$i,kh,bh,yh,yr,vr,vh,Th,wh,Jt,xh,ji,zh,Fh,Mi,Bh,qh,ac,Xt,Po,Pi,jn,$h,Ei,jh,sc,gt,Mh,Ci,Ph,Eh,Ai,Ch,Ah,rc,Mn,ic,Kt,Eo,Si,Pn,Sh,Ii,Ih,dc,we,En,Oh,Zt,Nh,Tr,Dh,Lh,Cn,Gh,Wh,Rh,Yt,Uh,wr,Hh,Qh,xr,Vh,Jh,Xh,Oi,Kh,Zh,An,lc,eo,Co,Ni,Sn,Yh,Di,eu,cc,E,In,tu,Li,ou,nu,Gi,au,su,On,ru,Nn,iu,Wi,du,lu,cu,Ao,pu,Dn,hu,zr,uu,mu,fu,kt,Ln,_u,Ri,gu,ku,Gn,Fr,bu,Ui,yu,vu,Br,Tu,Hi,wu,xu,So,Wn,zu,Qi,Fu,Bu,Io,Rn,qu,Vi,$u,ju,Oo,Un,Mu,Hn,Pu,Ji,Eu,Cu,pc,to,No,Xi,Qn,Au,Ki,Su,hc,G,Vn,Iu,Jn,Ou,Zi,Nu,Du,Lu,Yi,Gu,Wu,Xn,Ru,Kn,Uu,ed,Hu,Qu,Vu,Do,Ju,Zn,Xu,qr,Ku,Zu,Yu,Lo,Yn,em,td,tm,uc,oo,Go,od,ea,om,nd,nm,mc,Xe,ta,am,oa,sm,$r,rm,im,dm,na,lm,aa,cm,pm,hm,Pe,sa,um,no,mm,jr,fm,_m,ad,gm,km,bm,Wo,ym,sd,vm,Tm,ra,fc,ao,Ro,rd,ia,wm,id,xm,_c,Ke,da,zm,la,Fm,Mr,Bm,qm,$m,ca,jm,pa,Mm,Pm,Em,Z,ha,Cm,so,Am,Pr,Sm,Im,dd,Om,Nm,Dm,Uo,Lm,ld,Gm,Wm,ua,Rm,cd,Um,Hm,ma,gc,ro,Ho,pd,fa,Qm,hd,Vm,kc,xe,_a,Jm,ud,Xm,Km,ga,Zm,Er,Ym,ef,tf,ka,of,ba,nf,af,sf,Y,ya,rf,io,df,Cr,lf,cf,md,pf,hf,uf,Qo,mf,fd,ff,_f,va,gf,_d,kf,bf,Ta,bc,lo,Vo,gd,wa,yf,kd,vf,yc,ze,xa,Tf,co,wf,bd,xf,zf,yd,Ff,Bf,qf,za,$f,Ar,jf,Mf,Pf,Fa,Ef,Ba,Cf,Af,Sf,Ee,qa,If,po,Of,Sr,Nf,Df,vd,Lf,Gf,Wf,Jo,Rf,Td,Uf,Hf,$a,vc,ho,Xo,wd,ja,Qf,xd,Vf,Tc,uo,Ma,Jf,bt,Pa,Xf,zd,Kf,Zf,Ea,wc,mo,Ko,Fd,Ca,Yf,Bd,e_,xc,Fe,Aa,t_,Sa,o_,Ir,n_,a_,s_,Ia,r_,Oa,i_,d_,l_,Zo,c_,Ce,Na,p_,fo,h_,Or,u_,m_,qd,f_,__,g_,Yo,k_,$d,b_,y_,Da,zc,_o,en,jd,La,v_,Md,T_,Fc,Be,Ga,w_,Wa,x_,Nr,z_,F_,B_,Ra,q_,Ua,$_,j_,M_,tn,P_,ee,Ha,E_,go,C_,Dr,A_,S_,Pd,I_,O_,N_,on,D_,Ed,L_,G_,Qa,W_,Cd,R_,U_,Va,Bc,ko,nn,Ad,Ja,H_,Sd,Q_,qc,W,Xa,V_,Ka,J_,Lr,X_,K_,Z_,Za,Y_,Ya,eg,tg,og,Id,ng,ag,pt,Od,es,sg,rg,Nd,ts,ig,dg,Dd,os,lg,cg,Ld,ns,pg,hg,Ae,as,ug,bo,mg,Gd,fg,_g,Wd,gg,kg,bg,an,yg,Rd,vg,Tg,ss,wg,yt,rs,xg,Ud,zg,Fg,is,Bg,vt,ds,qg,Hd,$g,jg,ls,$c,yo,sn,Qd,cs,Mg,Vd,Pg,jc,R,ps,Eg,hs,Cg,Gr,Ag,Sg,Ig,us,Og,ms,Ng,Dg,Lg,Jd,Gg,Wg,ht,Xd,fs,Rg,Ug,Kd,_s,Hg,Qg,Zd,gs,Vg,Jg,Yd,ks,Xg,Kg,te,bs,Zg,vo,Yg,el,ek,tk,tl,ok,nk,ak,rn,sk,ol,rk,ik,ys,dk,nl,lk,ck,vs,pk,Tt,Ts,hk,al,uk,mk,ws,fk,wt,xs,_k,sl,gk,kk,zs,Mc,To,dn,rl,Fs,bk,il,yk,Pc,I,Bs,vk,dl,Tk,wk,qs,xk,Wr,zk,Fk,Bk,$s,qk,js,$k,jk,Mk,ll,Pk,Ek,ut,cl,Ms,Ck,Ak,pl,Ps,Sk,Ik,hl,Es,Ok,Nk,ul,Cs,Dk,Lk,Se,As,Gk,wo,Wk,ml,Rk,Uk,fl,Hk,Qk,Vk,ln,Jk,_l,Xk,Kk,Ss,Zk,xt,Is,Yk,gl,eb,tb,Os,ob,zt,Ns,nb,kl,ab,sb,Ds,Ec,xo,cn,bl,Ls,rb,yl,ib,Cc,O,Gs,db,zo,lb,vl,cb,pb,Tl,hb,ub,mb,Ws,fb,Rr,_b,gb,kb,Rs,bb,Us,yb,vb,Tb,wl,wb,xb,mt,xl,Hs,zb,Fb,zl,Qs,Bb,qb,Fl,Vs,$b,jb,Bl,Js,Mb,Pb,Ie,Xs,Eb,Fo,Cb,ql,Ab,Sb,$l,Ib,Ob,Nb,pn,Db,jl,Lb,Gb,Ks,Wb,Ft,Zs,Rb,Ml,Ub,Hb,Ys,Qb,Bt,er,Vb,Pl,Jb,Xb,tr,Ac,Bo,hn,El,or,Kb,Cl,Zb,Sc,X,nr,Yb,Al,ey,ty,ar,oy,Ur,ny,ay,sy,sr,ry,rr,iy,dy,ly,Sl,cy,py,ft,Il,ir,hy,uy,Ol,dr,my,fy,Nl,lr,_y,gy,Dl,cr,ky,by,Oe,pr,yy,qo,vy,Ll,Ty,wy,Gl,xy,zy,Fy,un,By,Wl,qy,$y,hr,Ic;return T=new H({}),se=new H({}),Ve=new H({}),$n=new H({}),jn=new H({}),Mn=new P({props:{code:`from transformers import BartForConditionalGeneration, BartTokenizer

model = BartForConditionalGeneration.from_pretrained("facebook/bart-large", forced_bos_token_id=0)
tok = BartTokenizer.from_pretrained("facebook/bart-large")
example_english_phrase = "UN Chief Says There Is No <mask> in Syria"
batch = tok(example_english_phrase, return_tensors="pt")
generated_ids = model.generate(batch["input_ids"])
assert tok.batch_decode(generated_ids, skip_special_tokens=True) == [
    "UN Chief Says There Is No Plan to Stop Chemical Weapons in Syria"
]`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartForConditionalGeneration, BartTokenizer

model = BartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>, forced_bos_token_id=<span class="hljs-number">0</span>)
tok = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
example_english_phrase = <span class="hljs-string">&quot;UN Chief Says There Is No &lt;mask&gt; in Syria&quot;</span>
batch = tok(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
generated_ids = model.generate(batch[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-keyword">assert</span> tok.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>) == [
    <span class="hljs-string">&quot;UN Chief Says There Is No Plan to Stop Chemical Weapons in Syria&quot;</span>
]`}}),Pn=new H({}),En=new q({props:{name:"class transformers.BartConfig",anchor:"transformers.BartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"use_cache",val:" = True"},{name:"num_labels",val:" = 3"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"is_encoder_decoder",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/configuration_bart.py#L36",parametersDescription:[{anchor:"transformers.BartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartModel">BartModel</a> or <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.TFBartModel">TFBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.BartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BartConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BartConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BartConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BartConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BartConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BartConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BartConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BartConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BartConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BartConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BartConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.BartConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BartConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.BartConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BartConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).
num_labels &#x2014; (<code>int</code>, <em>optional</em>, defaults to 3):
The number of labels to use in <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartForSequenceClassification">BartForSequenceClassification</a>.`,name:"use_cache"},{anchor:"transformers.BartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),An=new P({props:{code:`from transformers import BartModel, BartConfig

# Initializing a BART facebook/bart-large style configuration
configuration = BartConfig()

# Initializing a model from the facebook/bart-large style configuration
model = BartModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartModel, BartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BART facebook/bart-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BartConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/bart-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Sn=new H({}),In=new q({props:{name:"class transformers.BartTokenizer",anchor:"transformers.BartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/tokenization_bart.py#L101",parametersDescription:[{anchor:"transformers.BartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BartTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BartTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.BartTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BartTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BartTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BartTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BartTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BartTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BartTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BartTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}]}}),On=new P({props:{code:`from transformers import BartTokenizer
tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),Ao=new qe({props:{$$slots:{default:[Ow]},$$scope:{ctx:j}}}),Ln=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/tokenization_bart.py#L338",parametersDescription:[{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Wn=new q({props:{name:"convert_tokens_to_string",anchor:"transformers.BartTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/tokenization_bart.py#L303"}}),Rn=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/tokenization_bart.py#L390",parametersDescription:[{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Un=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.BartTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/tokenization_bart.py#L363",parametersDescription:[{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qn=new H({}),Vn=new q({props:{name:"class transformers.BartTokenizerFast",anchor:"transformers.BartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/tokenization_bart_fast.py#L70",parametersDescription:[{anchor:"transformers.BartTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BartTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BartTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.BartTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BartTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BartTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BartTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BartTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BartTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BartTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BartTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.BartTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}]}}),Xn=new P({props:{code:`from transformers import BartTokenizerFast
tokenizer = BartTokenizerFast.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),Do=new qe({props:{$$slots:{default:[Nw]},$$scope:{ctx:j}}}),Yn=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/tokenization_bart_fast.py#L282",parametersDescription:[{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ea=new H({}),ta=new q({props:{name:"class transformers.BartModel",anchor:"transformers.BartModel",parameters:[{name:"config",val:": BartConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_bart.py#L1138",parametersDescription:[{anchor:"transformers.BartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),sa=new q({props:{name:"forward",anchor:"transformers.BartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_bart.py#L1165",parametersDescription:[{anchor:"transformers.BartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information
on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wo=new qe({props:{$$slots:{default:[Dw]},$$scope:{ctx:j}}}),ra=new P({props:{code:`from transformers import BartTokenizer, BartModel
import torch

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = BartModel.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ia=new H({}),da=new q({props:{name:"class transformers.BartForConditionalGeneration",anchor:"transformers.BartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_bart.py#L1265",parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ha=new q({props:{name:"forward",anchor:"transformers.BartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_bart.py#L1304",parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information
on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Uo=new qe({props:{$$slots:{default:[Lw]},$$scope:{ctx:j}}}),ua=new P({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

model = BartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

ARTICLE_TO_SUMMARIZE = (
    "PG&E stated it scheduled the blackouts in response to forecasts for high winds "
    "amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were "
    "scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."
)
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="pt")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=2, max_length=20)
tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">2</span>, max_length=<span class="hljs-number">20</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;PG&amp;E scheduled the blackouts in response to forecasts for high winds amid dry conditions&#x27;</span>`}}),ma=new P({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = BartForConditionalGeneration.from_pretrained("facebook/bart-base")

TXT = "My friends are <mask> but they eat too many carbs."
input_ids = tokenizer([TXT], return_tensors="pt")["input_ids"]
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()
[<span class="hljs-string">&#x27;not&#x27;</span>, <span class="hljs-string">&#x27;good&#x27;</span>, <span class="hljs-string">&#x27;healthy&#x27;</span>, <span class="hljs-string">&#x27;great&#x27;</span>, <span class="hljs-string">&#x27;very&#x27;</span>]`}}),fa=new H({}),_a=new q({props:{name:"class transformers.BartForSequenceClassification",anchor:"transformers.BartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_bart.py#L1434",parametersDescription:[{anchor:"transformers.BartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ya=new q({props:{name:"forward",anchor:"transformers.BartForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_bart.py#L1447",parametersDescription:[{anchor:"transformers.BartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information
on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qo=new qe({props:{$$slots:{default:[Gw]},$$scope:{ctx:j}}}),va=new P({props:{code:`import torch
from transformers import BartTokenizer, BartForSequenceClassification

torch.manual_seed(0)
tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = BartForSequenceClassification.from_pretrained("facebook/bart-base", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits
list(logits.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),Ta=new P({props:{code:`import torch
from transformers import BartTokenizer, BartForSequenceClassification

torch.manual_seed(0)
tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = BartForSequenceClassification.from_pretrained("facebook/bart-base", problem_type="multi_label_classification", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
list(logits.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),wa=new H({}),xa=new q({props:{name:"class transformers.BartForQuestionAnswering",anchor:"transformers.BartForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_bart.py#L1560",parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qa=new q({props:{name:"forward",anchor:"transformers.BartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_bart.py#L1572",parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information
on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jo=new qe({props:{$$slots:{default:[Ww]},$$scope:{ctx:j}}}),$a=new P({props:{code:`from transformers import BartTokenizer, BartForQuestionAnswering
import torch

torch.manual_seed(0)
tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = BartForQuestionAnswering.from_pretrained("facebook/bart-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
round(loss.item(), 2)

start_scores = outputs.start_logits
list(start_scores.shape)

end_scores = outputs.end_logits
list(end_scores.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">2.98</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(start_scores.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">17</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(end_scores.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">17</span>]`}}),ja=new H({}),Ma=new q({props:{name:"class transformers.BartForCausalLM",anchor:"transformers.BartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_bart.py#L1690"}}),Pa=new q({props:{name:"forward",anchor:"transformers.BartForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_bart.py#L1721",parametersDescription:[{anchor:"transformers.BartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BartForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.BartForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BartForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BartForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BartForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ea=new P({props:{code:`from transformers import BartTokenizer, BartForCausalLM

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = BartForCausalLM.from_pretrained("facebook/bart-base", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),Ca=new H({}),Aa=new q({props:{name:"class transformers.TFBartModel",anchor:"transformers.TFBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_tf_bart.py#L1121",parametersDescription:[{anchor:"transformers.TFBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Zo=new qe({props:{$$slots:{default:[Rw]},$$scope:{ctx:j}}}),Na=new q({props:{name:"call",anchor:"transformers.TFBartModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_tf_bart.py#L1136",parametersDescription:[{anchor:"transformers.TFBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFBartModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBartModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBartModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBartModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBartModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBartModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBartModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBartModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBartModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBartModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yo=new qe({props:{$$slots:{default:[Uw]},$$scope:{ctx:j}}}),Da=new P({props:{code:`from transformers import BartTokenizer, TFBartModel
import tensorflow as tf

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
model = TFBartModel.from_pretrained("facebook/bart-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, TFBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),La=new H({}),Ga=new q({props:{name:"class transformers.TFBartForConditionalGeneration",anchor:"transformers.TFBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_tf_bart.py#L1210",parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),tn=new qe({props:{$$slots:{default:[Hw]},$$scope:{ctx:j}}}),Ha=new q({props:{name:"call",anchor:"transformers.TFBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_tf_bart.py#L1245",parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBartForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBartForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBartForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBartForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBartForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),on=new qe({props:{$$slots:{default:[Qw]},$$scope:{ctx:j}}}),Qa=new P({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

model = TFBartForConditionalGeneration.from_pretrained("facebook/bart-large")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")

ARTICLE_TO_SUMMARIZE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="tf")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, TFBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Va=new P({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
TXT = "My friends are <mask> but they eat too many carbs."

model = TFBartForConditionalGeneration.from_pretrained("facebook/bart-large")
input_ids = tokenizer([TXT], return_tensors="tf")["input_ids"]
logits = model(input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, TFBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),Ja=new H({}),Xa=new q({props:{name:"class transformers.FlaxBartModel",anchor:"transformers.FlaxBartModel",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_flax_bart.py#L1230",parametersDescription:[{anchor:"transformers.FlaxBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),as=new q({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_flax_bart.py#L1165",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),an=new qe({props:{$$slots:{default:[Vw]},$$scope:{ctx:j}}}),ss=new P({props:{code:`from transformers import BartTokenizer, FlaxBartModel

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartModel.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),rs=new q({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_flax_bart.py#L988",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),is=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),ds=new q({props:{name:"decode",anchor:"transformers.FlaxBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_flax_bart.py#L1051",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ls=new P({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),cs=new H({}),ps=new q({props:{name:"class transformers.FlaxBartForConditionalGeneration",anchor:"transformers.FlaxBartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_flax_bart.py#L1316",parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),bs=new q({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_flax_bart.py#L1165",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rn=new qe({props:{$$slots:{default:[Jw]},$$scope:{ctx:j}}}),ys=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

ARTICLE_TO_SUMMARIZE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"]).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),vs=new P({props:{code:`import jax
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")

TXT = "My friends are <mask> but they eat too many carbs."
input_ids = tokenizer([TXT], return_tensors="jax")["input_ids"]

logits = model(input_ids).logits
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero()[0].item()
probs = jax.nn.softmax(logits[0, masked_index], axis=0)
values, predictions = jax.lax.top_k(probs, k=1)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero()[<span class="hljs-number">0</span>].item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits[<span class="hljs-number">0</span>, masked_index], axis=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = jax.lax.top_k(probs, k=<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),Ts=new q({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_flax_bart.py#L988",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ws=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),xs=new q({props:{name:"decode",anchor:"transformers.FlaxBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_flax_bart.py#L1320",parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zs=new P({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Fs=new H({}),Bs=new q({props:{name:"class transformers.FlaxBartForSequenceClassification",anchor:"transformers.FlaxBartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_flax_bart.py#L1629",parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),As=new q({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_flax_bart.py#L1165",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ln=new qe({props:{$$slots:{default:[Xw]},$$scope:{ctx:j}}}),Ss=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForSequenceClassification.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Is=new q({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_flax_bart.py#L988",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Os=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Ns=new q({props:{name:"decode",anchor:"transformers.FlaxBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_flax_bart.py#L1051",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ds=new P({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Ls=new H({}),Gs=new q({props:{name:"class transformers.FlaxBartForQuestionAnswering",anchor:"transformers.FlaxBartForQuestionAnswering",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_flax_bart.py#L1716",parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Xs=new q({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_flax_bart.py#L1165",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pn=new qe({props:{$$slots:{default:[Kw]},$$scope:{ctx:j}}}),Ks=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForQuestionAnswering

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForQuestionAnswering.from_pretrained("facebook/bart-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Zs=new q({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_flax_bart.py#L988",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ys=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),er=new q({props:{name:"decode",anchor:"transformers.FlaxBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_flax_bart.py#L1051",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tr=new P({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),or=new H({}),nr=new q({props:{name:"class transformers.FlaxBartForCausalLM",anchor:"transformers.FlaxBartForCausalLM",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_flax_bart.py#L1952",parametersDescription:[{anchor:"transformers.FlaxBartForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),pr=new q({props:{name:"__call__",anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16176/src/transformers/models/bart/modeling_flax_bart.py#L1790",parametersDescription:[{anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16176/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16176/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),un=new qe({props:{$$slots:{default:[Zw]},$$scope:{ctx:j}}}),hr=new P({props:{code:`from transformers import BartTokenizer, FlaxBartForCausalLM

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForCausalLM.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){p=n("meta"),z=d(),y=n("h1"),w=n("a"),x=n("span"),m(T.$$.fragment),v=d(),B=n("span"),ae=r("BART"),A=d(),$=n("p"),ce=n("strong"),ge=r("DISCLAIMER:"),et=r(" If you see something strange, file a "),ke=n("a"),be=r("Github Issue"),tt=r(` and assign
@patrickvonplaten`),Ze=d(),Q=n("h2"),N=n("a"),Re=n("span"),m(se.$$.fragment),C=d(),S=n("span"),ot=r("Overview"),pe=d(),he=n("p"),nt=r("The Bart model was proposed in "),V=n("a"),at=r(`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),st=r(` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),D=d(),$e=n("p"),ye=r("According to the abstract,"),Ye=d(),K=n("ul"),re=n("li"),rt=r(`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),it=d(),J=n("li"),dt=r(`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),ve=d(),Ue=n("li"),F=r(`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),M=d(),U=n("p"),Lt=r("This model was contributed by "),He=n("a"),ie=r("sshleifer"),Gt=r(". The Authors\u2019 code can be found "),Qe=n("a"),Wt=r("here"),de=r("."),ue=d(),Te=n("h3"),je=n("a"),le=n("span"),m(Ve.$$.fragment),Rt=d(),Je=n("span"),Ut=r("Examples"),tc=d(),_t=n("ul"),xn=n("li"),Ip=r(`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),zn=n("a"),Op=r("examples/pytorch/summarization/"),Np=r("."),Dp=d(),lt=n("li"),Lp=r("An example of how to train "),_r=n("a"),Gp=r("BartForConditionalGeneration"),Wp=r(" with a Hugging Face "),wi=n("code"),Rp=r("datasets"),Up=r(`
object can be found in this `),Fn=n("a"),Hp=r("forum discussion"),Qp=r("."),Vp=d(),jo=n("li"),Bn=n("a"),Jp=r("Distilled checkpoints"),Xp=r(" are described in this "),qn=n("a"),Kp=r("paper"),Zp=r("."),oc=d(),Ht=n("h2"),Mo=n("a"),xi=n("span"),m($n.$$.fragment),Yp=d(),zi=n("span"),eh=r("Implementation Notes"),nc=d(),Me=n("ul"),ct=n("li"),th=r("Bart doesn\u2019t use "),Fi=n("code"),oh=r("token_type_ids"),nh=r(" for sequence classification. Use "),gr=n("a"),ah=r("BartTokenizer"),sh=r(` or
`),kr=n("a"),rh=r("encode()"),ih=r(" to get the proper splitting."),dh=d(),Qt=n("li"),lh=r("The forward pass of "),br=n("a"),ch=r("BartModel"),ph=r(" will create the "),Bi=n("code"),hh=r("decoder_input_ids"),uh=r(` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),mh=d(),Vt=n("li"),fh=r(`Model predictions are intended to be identical to the original implementation when
`),qi=n("code"),_h=r("forced_bos_token_id=0"),gh=r(`. This only works, however, if the string you pass to
`),$i=n("code"),kh=r("fairseq.encode"),bh=r(" starts with a space."),yh=d(),yr=n("li"),vr=n("a"),vh=r("generate()"),Th=r(` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),wh=d(),Jt=n("li"),xh=r("Models that load the "),ji=n("em"),zh=r("facebook/bart-large-cnn"),Fh=r(" weights will not have a "),Mi=n("code"),Bh=r("mask_token_id"),qh=r(`, or be able to perform
mask-filling tasks.`),ac=d(),Xt=n("h2"),Po=n("a"),Pi=n("span"),m(jn.$$.fragment),$h=d(),Ei=n("span"),jh=r("Mask Filling"),sc=d(),gt=n("p"),Mh=r("The "),Ci=n("code"),Ph=r("facebook/bart-base"),Eh=r(" and "),Ai=n("code"),Ch=r("facebook/bart-large"),Ah=r(" checkpoints can be used to fill multi-token masks."),rc=d(),m(Mn.$$.fragment),ic=d(),Kt=n("h2"),Eo=n("a"),Si=n("span"),m(Pn.$$.fragment),Sh=d(),Ii=n("span"),Ih=r("BartConfig"),dc=d(),we=n("div"),m(En.$$.fragment),Oh=d(),Zt=n("p"),Nh=r("This is the configuration class to store the configuration of a "),Tr=n("a"),Dh=r("BartModel"),Lh=r(`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),Cn=n("a"),Gh=r("facebook/bart-large"),Wh=r(" architecture."),Rh=d(),Yt=n("p"),Uh=r("Configuration objects inherit from "),wr=n("a"),Hh=r("PretrainedConfig"),Qh=r(` and can be used to control the model outputs. Read the
documentation from `),xr=n("a"),Vh=r("PretrainedConfig"),Jh=r(" for more information."),Xh=d(),Oi=n("p"),Kh=r("Example:"),Zh=d(),m(An.$$.fragment),lc=d(),eo=n("h2"),Co=n("a"),Ni=n("span"),m(Sn.$$.fragment),Yh=d(),Di=n("span"),eu=r("BartTokenizer"),cc=d(),E=n("div"),m(In.$$.fragment),tu=d(),Li=n("p"),ou=r("Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),nu=d(),Gi=n("p"),au=r(`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),su=d(),m(On.$$.fragment),ru=d(),Nn=n("p"),iu=r("You can get around that behavior by passing "),Wi=n("code"),du=r("add_prefix_space=True"),lu=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),cu=d(),m(Ao.$$.fragment),pu=d(),Dn=n("p"),hu=r("This tokenizer inherits from "),zr=n("a"),uu=r("PreTrainedTokenizer"),mu=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),fu=d(),kt=n("div"),m(Ln.$$.fragment),_u=d(),Ri=n("p"),gu=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),ku=d(),Gn=n("ul"),Fr=n("li"),bu=r("single sequence: "),Ui=n("code"),yu=r("<s> X </s>"),vu=d(),Br=n("li"),Tu=r("pair of sequences: "),Hi=n("code"),wu=r("<s> A </s></s> B </s>"),xu=d(),So=n("div"),m(Wn.$$.fragment),zu=d(),Qi=n("p"),Fu=r("Converts a sequence of tokens (string) in a single string."),Bu=d(),Io=n("div"),m(Rn.$$.fragment),qu=d(),Vi=n("p"),$u=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),ju=d(),Oo=n("div"),m(Un.$$.fragment),Mu=d(),Hn=n("p"),Pu=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ji=n("code"),Eu=r("prepare_for_model"),Cu=r(" method."),pc=d(),to=n("h2"),No=n("a"),Xi=n("span"),m(Qn.$$.fragment),Au=d(),Ki=n("span"),Su=r("BartTokenizerFast"),hc=d(),G=n("div"),m(Vn.$$.fragment),Iu=d(),Jn=n("p"),Ou=r("Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),Zi=n("em"),Nu=r("tokenizers"),Du=r(` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),Lu=d(),Yi=n("p"),Gu=r(`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),Wu=d(),m(Xn.$$.fragment),Ru=d(),Kn=n("p"),Uu=r("You can get around that behavior by passing "),ed=n("code"),Hu=r("add_prefix_space=True"),Qu=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Vu=d(),m(Do.$$.fragment),Ju=d(),Zn=n("p"),Xu=r("This tokenizer inherits from "),qr=n("a"),Ku=r("PreTrainedTokenizerFast"),Zu=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Yu=d(),Lo=n("div"),m(Yn.$$.fragment),em=d(),td=n("p"),tm=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),uc=d(),oo=n("h2"),Go=n("a"),od=n("span"),m(ea.$$.fragment),om=d(),nd=n("span"),nm=r("BartModel"),mc=d(),Xe=n("div"),m(ta.$$.fragment),am=d(),oa=n("p"),sm=r(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$r=n("a"),rm=r("PreTrainedModel"),im=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dm=d(),na=n("p"),lm=r("This model is also a PyTorch "),aa=n("a"),cm=r("torch.nn.Module"),pm=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hm=d(),Pe=n("div"),m(sa.$$.fragment),um=d(),no=n("p"),mm=r("The "),jr=n("a"),fm=r("BartModel"),_m=r(" forward method, overrides the "),ad=n("code"),gm=r("__call__"),km=r(" special method."),bm=d(),m(Wo.$$.fragment),ym=d(),sd=n("p"),vm=r("Example:"),Tm=d(),m(ra.$$.fragment),fc=d(),ao=n("h2"),Ro=n("a"),rd=n("span"),m(ia.$$.fragment),wm=d(),id=n("span"),xm=r("BartForConditionalGeneration"),_c=d(),Ke=n("div"),m(da.$$.fragment),zm=d(),la=n("p"),Fm=r(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Mr=n("a"),Bm=r("PreTrainedModel"),qm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$m=d(),ca=n("p"),jm=r("This model is also a PyTorch "),pa=n("a"),Mm=r("torch.nn.Module"),Pm=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Em=d(),Z=n("div"),m(ha.$$.fragment),Cm=d(),so=n("p"),Am=r("The "),Pr=n("a"),Sm=r("BartForConditionalGeneration"),Im=r(" forward method, overrides the "),dd=n("code"),Om=r("__call__"),Nm=r(" special method."),Dm=d(),m(Uo.$$.fragment),Lm=d(),ld=n("p"),Gm=r("Summarization example:"),Wm=d(),m(ua.$$.fragment),Rm=d(),cd=n("p"),Um=r("Mask filling example:"),Hm=d(),m(ma.$$.fragment),gc=d(),ro=n("h2"),Ho=n("a"),pd=n("span"),m(fa.$$.fragment),Qm=d(),hd=n("span"),Vm=r("BartForSequenceClassification"),kc=d(),xe=n("div"),m(_a.$$.fragment),Jm=d(),ud=n("p"),Xm=r(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Km=d(),ga=n("p"),Zm=r("This model inherits from "),Er=n("a"),Ym=r("PreTrainedModel"),ef=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tf=d(),ka=n("p"),of=r("This model is also a PyTorch "),ba=n("a"),nf=r("torch.nn.Module"),af=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sf=d(),Y=n("div"),m(ya.$$.fragment),rf=d(),io=n("p"),df=r("The "),Cr=n("a"),lf=r("BartForSequenceClassification"),cf=r(" forward method, overrides the "),md=n("code"),pf=r("__call__"),hf=r(" special method."),uf=d(),m(Qo.$$.fragment),mf=d(),fd=n("p"),ff=r("Example of single-label classification:"),_f=d(),m(va.$$.fragment),gf=d(),_d=n("p"),kf=r("Example of multi-label classification:"),bf=d(),m(Ta.$$.fragment),bc=d(),lo=n("h2"),Vo=n("a"),gd=n("span"),m(wa.$$.fragment),yf=d(),kd=n("span"),vf=r("BartForQuestionAnswering"),yc=d(),ze=n("div"),m(xa.$$.fragment),Tf=d(),co=n("p"),wf=r(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),bd=n("code"),xf=r("span start logits"),zf=r(" and "),yd=n("code"),Ff=r("span end logits"),Bf=r(")."),qf=d(),za=n("p"),$f=r("This model inherits from "),Ar=n("a"),jf=r("PreTrainedModel"),Mf=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pf=d(),Fa=n("p"),Ef=r("This model is also a PyTorch "),Ba=n("a"),Cf=r("torch.nn.Module"),Af=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sf=d(),Ee=n("div"),m(qa.$$.fragment),If=d(),po=n("p"),Of=r("The "),Sr=n("a"),Nf=r("BartForQuestionAnswering"),Df=r(" forward method, overrides the "),vd=n("code"),Lf=r("__call__"),Gf=r(" special method."),Wf=d(),m(Jo.$$.fragment),Rf=d(),Td=n("p"),Uf=r("Example:"),Hf=d(),m($a.$$.fragment),vc=d(),ho=n("h2"),Xo=n("a"),wd=n("span"),m(ja.$$.fragment),Qf=d(),xd=n("span"),Vf=r("BartForCausalLM"),Tc=d(),uo=n("div"),m(Ma.$$.fragment),Jf=d(),bt=n("div"),m(Pa.$$.fragment),Xf=d(),zd=n("p"),Kf=r("Example:"),Zf=d(),m(Ea.$$.fragment),wc=d(),mo=n("h2"),Ko=n("a"),Fd=n("span"),m(Ca.$$.fragment),Yf=d(),Bd=n("span"),e_=r("TFBartModel"),xc=d(),Fe=n("div"),m(Aa.$$.fragment),t_=d(),Sa=n("p"),o_=r(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ir=n("a"),n_=r("TFPreTrainedModel"),a_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),s_=d(),Ia=n("p"),r_=r("This model is also a "),Oa=n("a"),i_=r("tf.keras.Model"),d_=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),l_=d(),m(Zo.$$.fragment),c_=d(),Ce=n("div"),m(Na.$$.fragment),p_=d(),fo=n("p"),h_=r("The "),Or=n("a"),u_=r("TFBartModel"),m_=r(" forward method, overrides the "),qd=n("code"),f_=r("__call__"),__=r(" special method."),g_=d(),m(Yo.$$.fragment),k_=d(),$d=n("p"),b_=r("Example:"),y_=d(),m(Da.$$.fragment),zc=d(),_o=n("h2"),en=n("a"),jd=n("span"),m(La.$$.fragment),v_=d(),Md=n("span"),T_=r("TFBartForConditionalGeneration"),Fc=d(),Be=n("div"),m(Ga.$$.fragment),w_=d(),Wa=n("p"),x_=r(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Nr=n("a"),z_=r("TFPreTrainedModel"),F_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),B_=d(),Ra=n("p"),q_=r("This model is also a "),Ua=n("a"),$_=r("tf.keras.Model"),j_=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),M_=d(),m(tn.$$.fragment),P_=d(),ee=n("div"),m(Ha.$$.fragment),E_=d(),go=n("p"),C_=r("The "),Dr=n("a"),A_=r("TFBartForConditionalGeneration"),S_=r(" forward method, overrides the "),Pd=n("code"),I_=r("__call__"),O_=r(" special method."),N_=d(),m(on.$$.fragment),D_=d(),Ed=n("p"),L_=r("Summarization example:"),G_=d(),m(Qa.$$.fragment),W_=d(),Cd=n("p"),R_=r("Mask filling example:"),U_=d(),m(Va.$$.fragment),Bc=d(),ko=n("h2"),nn=n("a"),Ad=n("span"),m(Ja.$$.fragment),H_=d(),Sd=n("span"),Q_=r("FlaxBartModel"),qc=d(),W=n("div"),m(Xa.$$.fragment),V_=d(),Ka=n("p"),J_=r(`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Lr=n("a"),X_=r("FlaxPreTrainedModel"),K_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Z_=d(),Za=n("p"),Y_=r(`This model is also a Flax Linen
`),Ya=n("a"),eg=r("flax.nn.Module"),tg=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),og=d(),Id=n("p"),ng=r("Finally, this model supports inherent JAX features such as:"),ag=d(),pt=n("ul"),Od=n("li"),es=n("a"),sg=r("Just-In-Time (JIT) compilation"),rg=d(),Nd=n("li"),ts=n("a"),ig=r("Automatic Differentiation"),dg=d(),Dd=n("li"),os=n("a"),lg=r("Vectorization"),cg=d(),Ld=n("li"),ns=n("a"),pg=r("Parallelization"),hg=d(),Ae=n("div"),m(as.$$.fragment),ug=d(),bo=n("p"),mg=r("The "),Gd=n("code"),fg=r("FlaxBartPreTrainedModel"),_g=r("forward method, overrides the "),Wd=n("code"),gg=r("__call__"),kg=r(" special method."),bg=d(),m(an.$$.fragment),yg=d(),Rd=n("p"),vg=r("Example:"),Tg=d(),m(ss.$$.fragment),wg=d(),yt=n("div"),m(rs.$$.fragment),xg=d(),Ud=n("p"),zg=r("Example:"),Fg=d(),m(is.$$.fragment),Bg=d(),vt=n("div"),m(ds.$$.fragment),qg=d(),Hd=n("p"),$g=r("Example:"),jg=d(),m(ls.$$.fragment),$c=d(),yo=n("h2"),sn=n("a"),Qd=n("span"),m(cs.$$.fragment),Mg=d(),Vd=n("span"),Pg=r("FlaxBartForConditionalGeneration"),jc=d(),R=n("div"),m(ps.$$.fragment),Eg=d(),hs=n("p"),Cg=r(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Gr=n("a"),Ag=r("FlaxPreTrainedModel"),Sg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ig=d(),us=n("p"),Og=r(`This model is also a Flax Linen
`),ms=n("a"),Ng=r("flax.nn.Module"),Dg=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Lg=d(),Jd=n("p"),Gg=r("Finally, this model supports inherent JAX features such as:"),Wg=d(),ht=n("ul"),Xd=n("li"),fs=n("a"),Rg=r("Just-In-Time (JIT) compilation"),Ug=d(),Kd=n("li"),_s=n("a"),Hg=r("Automatic Differentiation"),Qg=d(),Zd=n("li"),gs=n("a"),Vg=r("Vectorization"),Jg=d(),Yd=n("li"),ks=n("a"),Xg=r("Parallelization"),Kg=d(),te=n("div"),m(bs.$$.fragment),Zg=d(),vo=n("p"),Yg=r("The "),el=n("code"),ek=r("FlaxBartPreTrainedModel"),tk=r("forward method, overrides the "),tl=n("code"),ok=r("__call__"),nk=r(" special method."),ak=d(),m(rn.$$.fragment),sk=d(),ol=n("p"),rk=r("Summarization example:"),ik=d(),m(ys.$$.fragment),dk=d(),nl=n("p"),lk=r("Mask filling example:"),ck=d(),m(vs.$$.fragment),pk=d(),Tt=n("div"),m(Ts.$$.fragment),hk=d(),al=n("p"),uk=r("Example:"),mk=d(),m(ws.$$.fragment),fk=d(),wt=n("div"),m(xs.$$.fragment),_k=d(),sl=n("p"),gk=r("Example:"),kk=d(),m(zs.$$.fragment),Mc=d(),To=n("h2"),dn=n("a"),rl=n("span"),m(Fs.$$.fragment),bk=d(),il=n("span"),yk=r("FlaxBartForSequenceClassification"),Pc=d(),I=n("div"),m(Bs.$$.fragment),vk=d(),dl=n("p"),Tk=r(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),wk=d(),qs=n("p"),xk=r("This model inherits from "),Wr=n("a"),zk=r("FlaxPreTrainedModel"),Fk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bk=d(),$s=n("p"),qk=r(`This model is also a Flax Linen
`),js=n("a"),$k=r("flax.nn.Module"),jk=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mk=d(),ll=n("p"),Pk=r("Finally, this model supports inherent JAX features such as:"),Ek=d(),ut=n("ul"),cl=n("li"),Ms=n("a"),Ck=r("Just-In-Time (JIT) compilation"),Ak=d(),pl=n("li"),Ps=n("a"),Sk=r("Automatic Differentiation"),Ik=d(),hl=n("li"),Es=n("a"),Ok=r("Vectorization"),Nk=d(),ul=n("li"),Cs=n("a"),Dk=r("Parallelization"),Lk=d(),Se=n("div"),m(As.$$.fragment),Gk=d(),wo=n("p"),Wk=r("The "),ml=n("code"),Rk=r("FlaxBartPreTrainedModel"),Uk=r("forward method, overrides the "),fl=n("code"),Hk=r("__call__"),Qk=r(" special method."),Vk=d(),m(ln.$$.fragment),Jk=d(),_l=n("p"),Xk=r("Example:"),Kk=d(),m(Ss.$$.fragment),Zk=d(),xt=n("div"),m(Is.$$.fragment),Yk=d(),gl=n("p"),eb=r("Example:"),tb=d(),m(Os.$$.fragment),ob=d(),zt=n("div"),m(Ns.$$.fragment),nb=d(),kl=n("p"),ab=r("Example:"),sb=d(),m(Ds.$$.fragment),Ec=d(),xo=n("h2"),cn=n("a"),bl=n("span"),m(Ls.$$.fragment),rb=d(),yl=n("span"),ib=r("FlaxBartForQuestionAnswering"),Cc=d(),O=n("div"),m(Gs.$$.fragment),db=d(),zo=n("p"),lb=r(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),vl=n("code"),cb=r("span start logits"),pb=r(" and "),Tl=n("code"),hb=r("span end logits"),ub=r(")."),mb=d(),Ws=n("p"),fb=r("This model inherits from "),Rr=n("a"),_b=r("FlaxPreTrainedModel"),gb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kb=d(),Rs=n("p"),bb=r(`This model is also a Flax Linen
`),Us=n("a"),yb=r("flax.nn.Module"),vb=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Tb=d(),wl=n("p"),wb=r("Finally, this model supports inherent JAX features such as:"),xb=d(),mt=n("ul"),xl=n("li"),Hs=n("a"),zb=r("Just-In-Time (JIT) compilation"),Fb=d(),zl=n("li"),Qs=n("a"),Bb=r("Automatic Differentiation"),qb=d(),Fl=n("li"),Vs=n("a"),$b=r("Vectorization"),jb=d(),Bl=n("li"),Js=n("a"),Mb=r("Parallelization"),Pb=d(),Ie=n("div"),m(Xs.$$.fragment),Eb=d(),Fo=n("p"),Cb=r("The "),ql=n("code"),Ab=r("FlaxBartPreTrainedModel"),Sb=r("forward method, overrides the "),$l=n("code"),Ib=r("__call__"),Ob=r(" special method."),Nb=d(),m(pn.$$.fragment),Db=d(),jl=n("p"),Lb=r("Example:"),Gb=d(),m(Ks.$$.fragment),Wb=d(),Ft=n("div"),m(Zs.$$.fragment),Rb=d(),Ml=n("p"),Ub=r("Example:"),Hb=d(),m(Ys.$$.fragment),Qb=d(),Bt=n("div"),m(er.$$.fragment),Vb=d(),Pl=n("p"),Jb=r("Example:"),Xb=d(),m(tr.$$.fragment),Ac=d(),Bo=n("h2"),hn=n("a"),El=n("span"),m(or.$$.fragment),Kb=d(),Cl=n("span"),Zb=r("FlaxBartForCausalLM"),Sc=d(),X=n("div"),m(nr.$$.fragment),Yb=d(),Al=n("p"),ey=r(`Bart Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings)
e.g for autoregressive tasks.`),ty=d(),ar=n("p"),oy=r("This model inherits from "),Ur=n("a"),ny=r("FlaxPreTrainedModel"),ay=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sy=d(),sr=n("p"),ry=r(`This model is also a Flax Linen
`),rr=n("a"),iy=r("flax.nn.Module"),dy=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ly=d(),Sl=n("p"),cy=r("Finally, this model supports inherent JAX features such as:"),py=d(),ft=n("ul"),Il=n("li"),ir=n("a"),hy=r("Just-In-Time (JIT) compilation"),uy=d(),Ol=n("li"),dr=n("a"),my=r("Automatic Differentiation"),fy=d(),Nl=n("li"),lr=n("a"),_y=r("Vectorization"),gy=d(),Dl=n("li"),cr=n("a"),ky=r("Parallelization"),by=d(),Oe=n("div"),m(pr.$$.fragment),yy=d(),qo=n("p"),vy=r("The "),Ll=n("code"),Ty=r("FlaxBartDecoderPreTrainedModel"),wy=r("forward method, overrides the "),Gl=n("code"),xy=r("__call__"),zy=r(" special method."),Fy=d(),m(un.$$.fragment),By=d(),Wl=n("p"),qy=r("Example:"),$y=d(),m(hr.$$.fragment),this.h()},l(o){const h=Iw('[data-svelte="svelte-1phssyn"]',document.head);p=a(h,"META",{name:!0,content:!0}),h.forEach(t),z=l(o),y=a(o,"H1",{class:!0});var ur=s(y);w=a(ur,"A",{id:!0,class:!0,href:!0});var Rl=s(w);x=a(Rl,"SPAN",{});var Ul=s(x);f(T.$$.fragment,Ul),Ul.forEach(t),Rl.forEach(t),v=l(ur),B=a(ur,"SPAN",{});var Hl=s(B);ae=i(Hl,"BART"),Hl.forEach(t),ur.forEach(t),A=l(o),$=a(o,"P",{});var mn=s($);ce=a(mn,"STRONG",{});var Ql=s(ce);ge=i(Ql,"DISCLAIMER:"),Ql.forEach(t),et=i(mn," If you see something strange, file a "),ke=a(mn,"A",{href:!0,rel:!0});var Vl=s(ke);be=i(Vl,"Github Issue"),Vl.forEach(t),tt=i(mn,` and assign
@patrickvonplaten`),mn.forEach(t),Ze=l(o),Q=a(o,"H2",{class:!0});var mr=s(Q);N=a(mr,"A",{id:!0,class:!0,href:!0});var Jl=s(N);Re=a(Jl,"SPAN",{});var Xl=s(Re);f(se.$$.fragment,Xl),Xl.forEach(t),Jl.forEach(t),C=l(mr),S=a(mr,"SPAN",{});var Kl=s(S);ot=i(Kl,"Overview"),Kl.forEach(t),mr.forEach(t),pe=l(o),he=a(o,"P",{});var fr=s(he);nt=i(fr,"The Bart model was proposed in "),V=a(fr,"A",{href:!0,rel:!0});var Zl=s(V);at=i(Zl,`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),Zl.forEach(t),st=i(fr,` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),fr.forEach(t),D=l(o),$e=a(o,"P",{});var Yl=s($e);ye=i(Yl,"According to the abstract,"),Yl.forEach(t),Ye=l(o),K=a(o,"UL",{});var $o=s(K);re=a($o,"LI",{});var Ey=s(re);rt=i(Ey,`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),Ey.forEach(t),it=l($o),J=a($o,"LI",{});var Cy=s(J);dt=i(Cy,`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),Cy.forEach(t),ve=l($o),Ue=a($o,"LI",{});var Ay=s(Ue);F=i(Ay,`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),Ay.forEach(t),$o.forEach(t),M=l(o),U=a(o,"P",{});var Hr=s(U);Lt=i(Hr,"This model was contributed by "),He=a(Hr,"A",{href:!0,rel:!0});var Sy=s(He);ie=i(Sy,"sshleifer"),Sy.forEach(t),Gt=i(Hr,". The Authors\u2019 code can be found "),Qe=a(Hr,"A",{href:!0,rel:!0});var Iy=s(Qe);Wt=i(Iy,"here"),Iy.forEach(t),de=i(Hr,"."),Hr.forEach(t),ue=l(o),Te=a(o,"H3",{class:!0});var Oc=s(Te);je=a(Oc,"A",{id:!0,class:!0,href:!0});var Oy=s(je);le=a(Oy,"SPAN",{});var Ny=s(le);f(Ve.$$.fragment,Ny),Ny.forEach(t),Oy.forEach(t),Rt=l(Oc),Je=a(Oc,"SPAN",{});var Dy=s(Je);Ut=i(Dy,"Examples"),Dy.forEach(t),Oc.forEach(t),tc=l(o),_t=a(o,"UL",{});var Qr=s(_t);xn=a(Qr,"LI",{});var Nc=s(xn);Ip=i(Nc,`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),zn=a(Nc,"A",{href:!0,rel:!0});var Ly=s(zn);Op=i(Ly,"examples/pytorch/summarization/"),Ly.forEach(t),Np=i(Nc,"."),Nc.forEach(t),Dp=l(Qr),lt=a(Qr,"LI",{});var fn=s(lt);Lp=i(fn,"An example of how to train "),_r=a(fn,"A",{href:!0});var Gy=s(_r);Gp=i(Gy,"BartForConditionalGeneration"),Gy.forEach(t),Wp=i(fn," with a Hugging Face "),wi=a(fn,"CODE",{});var Wy=s(wi);Rp=i(Wy,"datasets"),Wy.forEach(t),Up=i(fn,`
object can be found in this `),Fn=a(fn,"A",{href:!0,rel:!0});var Ry=s(Fn);Hp=i(Ry,"forum discussion"),Ry.forEach(t),Qp=i(fn,"."),fn.forEach(t),Vp=l(Qr),jo=a(Qr,"LI",{});var ec=s(jo);Bn=a(ec,"A",{href:!0,rel:!0});var Uy=s(Bn);Jp=i(Uy,"Distilled checkpoints"),Uy.forEach(t),Xp=i(ec," are described in this "),qn=a(ec,"A",{href:!0,rel:!0});var Hy=s(qn);Kp=i(Hy,"paper"),Hy.forEach(t),Zp=i(ec,"."),ec.forEach(t),Qr.forEach(t),oc=l(o),Ht=a(o,"H2",{class:!0});var Dc=s(Ht);Mo=a(Dc,"A",{id:!0,class:!0,href:!0});var Qy=s(Mo);xi=a(Qy,"SPAN",{});var Vy=s(xi);f($n.$$.fragment,Vy),Vy.forEach(t),Qy.forEach(t),Yp=l(Dc),zi=a(Dc,"SPAN",{});var Jy=s(zi);eh=i(Jy,"Implementation Notes"),Jy.forEach(t),Dc.forEach(t),nc=l(o),Me=a(o,"UL",{});var qt=s(Me);ct=a(qt,"LI",{});var _n=s(ct);th=i(_n,"Bart doesn\u2019t use "),Fi=a(_n,"CODE",{});var Xy=s(Fi);oh=i(Xy,"token_type_ids"),Xy.forEach(t),nh=i(_n," for sequence classification. Use "),gr=a(_n,"A",{href:!0});var Ky=s(gr);ah=i(Ky,"BartTokenizer"),Ky.forEach(t),sh=i(_n,` or
`),kr=a(_n,"A",{href:!0});var Zy=s(kr);rh=i(Zy,"encode()"),Zy.forEach(t),ih=i(_n," to get the proper splitting."),_n.forEach(t),dh=l(qt),Qt=a(qt,"LI",{});var Vr=s(Qt);lh=i(Vr,"The forward pass of "),br=a(Vr,"A",{href:!0});var Yy=s(br);ch=i(Yy,"BartModel"),Yy.forEach(t),ph=i(Vr," will create the "),Bi=a(Vr,"CODE",{});var e1=s(Bi);hh=i(e1,"decoder_input_ids"),e1.forEach(t),uh=i(Vr,` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),Vr.forEach(t),mh=l(qt),Vt=a(qt,"LI",{});var Jr=s(Vt);fh=i(Jr,`Model predictions are intended to be identical to the original implementation when
`),qi=a(Jr,"CODE",{});var t1=s(qi);_h=i(t1,"forced_bos_token_id=0"),t1.forEach(t),gh=i(Jr,`. This only works, however, if the string you pass to
`),$i=a(Jr,"CODE",{});var o1=s($i);kh=i(o1,"fairseq.encode"),o1.forEach(t),bh=i(Jr," starts with a space."),Jr.forEach(t),yh=l(qt),yr=a(qt,"LI",{});var jy=s(yr);vr=a(jy,"A",{href:!0});var n1=s(vr);vh=i(n1,"generate()"),n1.forEach(t),Th=i(jy,` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),jy.forEach(t),wh=l(qt),Jt=a(qt,"LI",{});var Xr=s(Jt);xh=i(Xr,"Models that load the "),ji=a(Xr,"EM",{});var a1=s(ji);zh=i(a1,"facebook/bart-large-cnn"),a1.forEach(t),Fh=i(Xr," weights will not have a "),Mi=a(Xr,"CODE",{});var s1=s(Mi);Bh=i(s1,"mask_token_id"),s1.forEach(t),qh=i(Xr,`, or be able to perform
mask-filling tasks.`),Xr.forEach(t),qt.forEach(t),ac=l(o),Xt=a(o,"H2",{class:!0});var Lc=s(Xt);Po=a(Lc,"A",{id:!0,class:!0,href:!0});var r1=s(Po);Pi=a(r1,"SPAN",{});var i1=s(Pi);f(jn.$$.fragment,i1),i1.forEach(t),r1.forEach(t),$h=l(Lc),Ei=a(Lc,"SPAN",{});var d1=s(Ei);jh=i(d1,"Mask Filling"),d1.forEach(t),Lc.forEach(t),sc=l(o),gt=a(o,"P",{});var Kr=s(gt);Mh=i(Kr,"The "),Ci=a(Kr,"CODE",{});var l1=s(Ci);Ph=i(l1,"facebook/bart-base"),l1.forEach(t),Eh=i(Kr," and "),Ai=a(Kr,"CODE",{});var c1=s(Ai);Ch=i(c1,"facebook/bart-large"),c1.forEach(t),Ah=i(Kr," checkpoints can be used to fill multi-token masks."),Kr.forEach(t),rc=l(o),f(Mn.$$.fragment,o),ic=l(o),Kt=a(o,"H2",{class:!0});var Gc=s(Kt);Eo=a(Gc,"A",{id:!0,class:!0,href:!0});var p1=s(Eo);Si=a(p1,"SPAN",{});var h1=s(Si);f(Pn.$$.fragment,h1),h1.forEach(t),p1.forEach(t),Sh=l(Gc),Ii=a(Gc,"SPAN",{});var u1=s(Ii);Ih=i(u1,"BartConfig"),u1.forEach(t),Gc.forEach(t),dc=l(o),we=a(o,"DIV",{class:!0});var $t=s(we);f(En.$$.fragment,$t),Oh=l($t),Zt=a($t,"P",{});var Zr=s(Zt);Nh=i(Zr,"This is the configuration class to store the configuration of a "),Tr=a(Zr,"A",{href:!0});var m1=s(Tr);Dh=i(m1,"BartModel"),m1.forEach(t),Lh=i(Zr,`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),Cn=a(Zr,"A",{href:!0,rel:!0});var f1=s(Cn);Gh=i(f1,"facebook/bart-large"),f1.forEach(t),Wh=i(Zr," architecture."),Zr.forEach(t),Rh=l($t),Yt=a($t,"P",{});var Yr=s(Yt);Uh=i(Yr,"Configuration objects inherit from "),wr=a(Yr,"A",{href:!0});var _1=s(wr);Hh=i(_1,"PretrainedConfig"),_1.forEach(t),Qh=i(Yr,` and can be used to control the model outputs. Read the
documentation from `),xr=a(Yr,"A",{href:!0});var g1=s(xr);Vh=i(g1,"PretrainedConfig"),g1.forEach(t),Jh=i(Yr," for more information."),Yr.forEach(t),Xh=l($t),Oi=a($t,"P",{});var k1=s(Oi);Kh=i(k1,"Example:"),k1.forEach(t),Zh=l($t),f(An.$$.fragment,$t),$t.forEach(t),lc=l(o),eo=a(o,"H2",{class:!0});var Wc=s(eo);Co=a(Wc,"A",{id:!0,class:!0,href:!0});var b1=s(Co);Ni=a(b1,"SPAN",{});var y1=s(Ni);f(Sn.$$.fragment,y1),y1.forEach(t),b1.forEach(t),Yh=l(Wc),Di=a(Wc,"SPAN",{});var v1=s(Di);eu=i(v1,"BartTokenizer"),v1.forEach(t),Wc.forEach(t),cc=l(o),E=a(o,"DIV",{class:!0});var L=s(E);f(In.$$.fragment,L),tu=l(L),Li=a(L,"P",{});var T1=s(Li);ou=i(T1,"Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),T1.forEach(t),nu=l(L),Gi=a(L,"P",{});var w1=s(Gi);au=i(w1,`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),w1.forEach(t),su=l(L),f(On.$$.fragment,L),ru=l(L),Nn=a(L,"P",{});var Rc=s(Nn);iu=i(Rc,"You can get around that behavior by passing "),Wi=a(Rc,"CODE",{});var x1=s(Wi);du=i(x1,"add_prefix_space=True"),x1.forEach(t),lu=i(Rc,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Rc.forEach(t),cu=l(L),f(Ao.$$.fragment,L),pu=l(L),Dn=a(L,"P",{});var Uc=s(Dn);hu=i(Uc,"This tokenizer inherits from "),zr=a(Uc,"A",{href:!0});var z1=s(zr);uu=i(z1,"PreTrainedTokenizer"),z1.forEach(t),mu=i(Uc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Uc.forEach(t),fu=l(L),kt=a(L,"DIV",{class:!0});var ei=s(kt);f(Ln.$$.fragment,ei),_u=l(ei),Ri=a(ei,"P",{});var F1=s(Ri);gu=i(F1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),F1.forEach(t),ku=l(ei),Gn=a(ei,"UL",{});var Hc=s(Gn);Fr=a(Hc,"LI",{});var My=s(Fr);bu=i(My,"single sequence: "),Ui=a(My,"CODE",{});var B1=s(Ui);yu=i(B1,"<s> X </s>"),B1.forEach(t),My.forEach(t),vu=l(Hc),Br=a(Hc,"LI",{});var Py=s(Br);Tu=i(Py,"pair of sequences: "),Hi=a(Py,"CODE",{});var q1=s(Hi);wu=i(q1,"<s> A </s></s> B </s>"),q1.forEach(t),Py.forEach(t),Hc.forEach(t),ei.forEach(t),xu=l(L),So=a(L,"DIV",{class:!0});var Qc=s(So);f(Wn.$$.fragment,Qc),zu=l(Qc),Qi=a(Qc,"P",{});var $1=s(Qi);Fu=i($1,"Converts a sequence of tokens (string) in a single string."),$1.forEach(t),Qc.forEach(t),Bu=l(L),Io=a(L,"DIV",{class:!0});var Vc=s(Io);f(Rn.$$.fragment,Vc),qu=l(Vc),Vi=a(Vc,"P",{});var j1=s(Vi);$u=i(j1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),j1.forEach(t),Vc.forEach(t),ju=l(L),Oo=a(L,"DIV",{class:!0});var Jc=s(Oo);f(Un.$$.fragment,Jc),Mu=l(Jc),Hn=a(Jc,"P",{});var Xc=s(Hn);Pu=i(Xc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ji=a(Xc,"CODE",{});var M1=s(Ji);Eu=i(M1,"prepare_for_model"),M1.forEach(t),Cu=i(Xc," method."),Xc.forEach(t),Jc.forEach(t),L.forEach(t),pc=l(o),to=a(o,"H2",{class:!0});var Kc=s(to);No=a(Kc,"A",{id:!0,class:!0,href:!0});var P1=s(No);Xi=a(P1,"SPAN",{});var E1=s(Xi);f(Qn.$$.fragment,E1),E1.forEach(t),P1.forEach(t),Au=l(Kc),Ki=a(Kc,"SPAN",{});var C1=s(Ki);Su=i(C1,"BartTokenizerFast"),C1.forEach(t),Kc.forEach(t),hc=l(o),G=a(o,"DIV",{class:!0});var me=s(G);f(Vn.$$.fragment,me),Iu=l(me),Jn=a(me,"P",{});var Zc=s(Jn);Ou=i(Zc,"Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),Zi=a(Zc,"EM",{});var A1=s(Zi);Nu=i(A1,"tokenizers"),A1.forEach(t),Du=i(Zc,` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),Zc.forEach(t),Lu=l(me),Yi=a(me,"P",{});var S1=s(Yi);Gu=i(S1,`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),S1.forEach(t),Wu=l(me),f(Xn.$$.fragment,me),Ru=l(me),Kn=a(me,"P",{});var Yc=s(Kn);Uu=i(Yc,"You can get around that behavior by passing "),ed=a(Yc,"CODE",{});var I1=s(ed);Hu=i(I1,"add_prefix_space=True"),I1.forEach(t),Qu=i(Yc,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Yc.forEach(t),Vu=l(me),f(Do.$$.fragment,me),Ju=l(me),Zn=a(me,"P",{});var ep=s(Zn);Xu=i(ep,"This tokenizer inherits from "),qr=a(ep,"A",{href:!0});var O1=s(qr);Ku=i(O1,"PreTrainedTokenizerFast"),O1.forEach(t),Zu=i(ep,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ep.forEach(t),Yu=l(me),Lo=a(me,"DIV",{class:!0});var tp=s(Lo);f(Yn.$$.fragment,tp),em=l(tp),td=a(tp,"P",{});var N1=s(td);tm=i(N1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),N1.forEach(t),tp.forEach(t),me.forEach(t),uc=l(o),oo=a(o,"H2",{class:!0});var op=s(oo);Go=a(op,"A",{id:!0,class:!0,href:!0});var D1=s(Go);od=a(D1,"SPAN",{});var L1=s(od);f(ea.$$.fragment,L1),L1.forEach(t),D1.forEach(t),om=l(op),nd=a(op,"SPAN",{});var G1=s(nd);nm=i(G1,"BartModel"),G1.forEach(t),op.forEach(t),mc=l(o),Xe=a(o,"DIV",{class:!0});var gn=s(Xe);f(ta.$$.fragment,gn),am=l(gn),oa=a(gn,"P",{});var np=s(oa);sm=i(np,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),$r=a(np,"A",{href:!0});var W1=s($r);rm=i(W1,"PreTrainedModel"),W1.forEach(t),im=i(np,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),np.forEach(t),dm=l(gn),na=a(gn,"P",{});var ap=s(na);lm=i(ap,"This model is also a PyTorch "),aa=a(ap,"A",{href:!0,rel:!0});var R1=s(aa);cm=i(R1,"torch.nn.Module"),R1.forEach(t),pm=i(ap,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ap.forEach(t),hm=l(gn),Pe=a(gn,"DIV",{class:!0});var jt=s(Pe);f(sa.$$.fragment,jt),um=l(jt),no=a(jt,"P",{});var ti=s(no);mm=i(ti,"The "),jr=a(ti,"A",{href:!0});var U1=s(jr);fm=i(U1,"BartModel"),U1.forEach(t),_m=i(ti," forward method, overrides the "),ad=a(ti,"CODE",{});var H1=s(ad);gm=i(H1,"__call__"),H1.forEach(t),km=i(ti," special method."),ti.forEach(t),bm=l(jt),f(Wo.$$.fragment,jt),ym=l(jt),sd=a(jt,"P",{});var Q1=s(sd);vm=i(Q1,"Example:"),Q1.forEach(t),Tm=l(jt),f(ra.$$.fragment,jt),jt.forEach(t),gn.forEach(t),fc=l(o),ao=a(o,"H2",{class:!0});var sp=s(ao);Ro=a(sp,"A",{id:!0,class:!0,href:!0});var V1=s(Ro);rd=a(V1,"SPAN",{});var J1=s(rd);f(ia.$$.fragment,J1),J1.forEach(t),V1.forEach(t),wm=l(sp),id=a(sp,"SPAN",{});var X1=s(id);xm=i(X1,"BartForConditionalGeneration"),X1.forEach(t),sp.forEach(t),_c=l(o),Ke=a(o,"DIV",{class:!0});var kn=s(Ke);f(da.$$.fragment,kn),zm=l(kn),la=a(kn,"P",{});var rp=s(la);Fm=i(rp,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Mr=a(rp,"A",{href:!0});var K1=s(Mr);Bm=i(K1,"PreTrainedModel"),K1.forEach(t),qm=i(rp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rp.forEach(t),$m=l(kn),ca=a(kn,"P",{});var ip=s(ca);jm=i(ip,"This model is also a PyTorch "),pa=a(ip,"A",{href:!0,rel:!0});var Z1=s(pa);Mm=i(Z1,"torch.nn.Module"),Z1.forEach(t),Pm=i(ip,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ip.forEach(t),Em=l(kn),Z=a(kn,"DIV",{class:!0});var Ne=s(Z);f(ha.$$.fragment,Ne),Cm=l(Ne),so=a(Ne,"P",{});var oi=s(so);Am=i(oi,"The "),Pr=a(oi,"A",{href:!0});var Y1=s(Pr);Sm=i(Y1,"BartForConditionalGeneration"),Y1.forEach(t),Im=i(oi," forward method, overrides the "),dd=a(oi,"CODE",{});var ev=s(dd);Om=i(ev,"__call__"),ev.forEach(t),Nm=i(oi," special method."),oi.forEach(t),Dm=l(Ne),f(Uo.$$.fragment,Ne),Lm=l(Ne),ld=a(Ne,"P",{});var tv=s(ld);Gm=i(tv,"Summarization example:"),tv.forEach(t),Wm=l(Ne),f(ua.$$.fragment,Ne),Rm=l(Ne),cd=a(Ne,"P",{});var ov=s(cd);Um=i(ov,"Mask filling example:"),ov.forEach(t),Hm=l(Ne),f(ma.$$.fragment,Ne),Ne.forEach(t),kn.forEach(t),gc=l(o),ro=a(o,"H2",{class:!0});var dp=s(ro);Ho=a(dp,"A",{id:!0,class:!0,href:!0});var nv=s(Ho);pd=a(nv,"SPAN",{});var av=s(pd);f(fa.$$.fragment,av),av.forEach(t),nv.forEach(t),Qm=l(dp),hd=a(dp,"SPAN",{});var sv=s(hd);Vm=i(sv,"BartForSequenceClassification"),sv.forEach(t),dp.forEach(t),kc=l(o),xe=a(o,"DIV",{class:!0});var Mt=s(xe);f(_a.$$.fragment,Mt),Jm=l(Mt),ud=a(Mt,"P",{});var rv=s(ud);Xm=i(rv,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),rv.forEach(t),Km=l(Mt),ga=a(Mt,"P",{});var lp=s(ga);Zm=i(lp,"This model inherits from "),Er=a(lp,"A",{href:!0});var iv=s(Er);Ym=i(iv,"PreTrainedModel"),iv.forEach(t),ef=i(lp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lp.forEach(t),tf=l(Mt),ka=a(Mt,"P",{});var cp=s(ka);of=i(cp,"This model is also a PyTorch "),ba=a(cp,"A",{href:!0,rel:!0});var dv=s(ba);nf=i(dv,"torch.nn.Module"),dv.forEach(t),af=i(cp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cp.forEach(t),sf=l(Mt),Y=a(Mt,"DIV",{class:!0});var De=s(Y);f(ya.$$.fragment,De),rf=l(De),io=a(De,"P",{});var ni=s(io);df=i(ni,"The "),Cr=a(ni,"A",{href:!0});var lv=s(Cr);lf=i(lv,"BartForSequenceClassification"),lv.forEach(t),cf=i(ni," forward method, overrides the "),md=a(ni,"CODE",{});var cv=s(md);pf=i(cv,"__call__"),cv.forEach(t),hf=i(ni," special method."),ni.forEach(t),uf=l(De),f(Qo.$$.fragment,De),mf=l(De),fd=a(De,"P",{});var pv=s(fd);ff=i(pv,"Example of single-label classification:"),pv.forEach(t),_f=l(De),f(va.$$.fragment,De),gf=l(De),_d=a(De,"P",{});var hv=s(_d);kf=i(hv,"Example of multi-label classification:"),hv.forEach(t),bf=l(De),f(Ta.$$.fragment,De),De.forEach(t),Mt.forEach(t),bc=l(o),lo=a(o,"H2",{class:!0});var pp=s(lo);Vo=a(pp,"A",{id:!0,class:!0,href:!0});var uv=s(Vo);gd=a(uv,"SPAN",{});var mv=s(gd);f(wa.$$.fragment,mv),mv.forEach(t),uv.forEach(t),yf=l(pp),kd=a(pp,"SPAN",{});var fv=s(kd);vf=i(fv,"BartForQuestionAnswering"),fv.forEach(t),pp.forEach(t),yc=l(o),ze=a(o,"DIV",{class:!0});var Pt=s(ze);f(xa.$$.fragment,Pt),Tf=l(Pt),co=a(Pt,"P",{});var ai=s(co);wf=i(ai,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),bd=a(ai,"CODE",{});var _v=s(bd);xf=i(_v,"span start logits"),_v.forEach(t),zf=i(ai," and "),yd=a(ai,"CODE",{});var gv=s(yd);Ff=i(gv,"span end logits"),gv.forEach(t),Bf=i(ai,")."),ai.forEach(t),qf=l(Pt),za=a(Pt,"P",{});var hp=s(za);$f=i(hp,"This model inherits from "),Ar=a(hp,"A",{href:!0});var kv=s(Ar);jf=i(kv,"PreTrainedModel"),kv.forEach(t),Mf=i(hp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hp.forEach(t),Pf=l(Pt),Fa=a(Pt,"P",{});var up=s(Fa);Ef=i(up,"This model is also a PyTorch "),Ba=a(up,"A",{href:!0,rel:!0});var bv=s(Ba);Cf=i(bv,"torch.nn.Module"),bv.forEach(t),Af=i(up,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),up.forEach(t),Sf=l(Pt),Ee=a(Pt,"DIV",{class:!0});var Et=s(Ee);f(qa.$$.fragment,Et),If=l(Et),po=a(Et,"P",{});var si=s(po);Of=i(si,"The "),Sr=a(si,"A",{href:!0});var yv=s(Sr);Nf=i(yv,"BartForQuestionAnswering"),yv.forEach(t),Df=i(si," forward method, overrides the "),vd=a(si,"CODE",{});var vv=s(vd);Lf=i(vv,"__call__"),vv.forEach(t),Gf=i(si," special method."),si.forEach(t),Wf=l(Et),f(Jo.$$.fragment,Et),Rf=l(Et),Td=a(Et,"P",{});var Tv=s(Td);Uf=i(Tv,"Example:"),Tv.forEach(t),Hf=l(Et),f($a.$$.fragment,Et),Et.forEach(t),Pt.forEach(t),vc=l(o),ho=a(o,"H2",{class:!0});var mp=s(ho);Xo=a(mp,"A",{id:!0,class:!0,href:!0});var wv=s(Xo);wd=a(wv,"SPAN",{});var xv=s(wd);f(ja.$$.fragment,xv),xv.forEach(t),wv.forEach(t),Qf=l(mp),xd=a(mp,"SPAN",{});var zv=s(xd);Vf=i(zv,"BartForCausalLM"),zv.forEach(t),mp.forEach(t),Tc=l(o),uo=a(o,"DIV",{class:!0});var fp=s(uo);f(Ma.$$.fragment,fp),Jf=l(fp),bt=a(fp,"DIV",{class:!0});var ri=s(bt);f(Pa.$$.fragment,ri),Xf=l(ri),zd=a(ri,"P",{});var Fv=s(zd);Kf=i(Fv,"Example:"),Fv.forEach(t),Zf=l(ri),f(Ea.$$.fragment,ri),ri.forEach(t),fp.forEach(t),wc=l(o),mo=a(o,"H2",{class:!0});var _p=s(mo);Ko=a(_p,"A",{id:!0,class:!0,href:!0});var Bv=s(Ko);Fd=a(Bv,"SPAN",{});var qv=s(Fd);f(Ca.$$.fragment,qv),qv.forEach(t),Bv.forEach(t),Yf=l(_p),Bd=a(_p,"SPAN",{});var $v=s(Bd);e_=i($v,"TFBartModel"),$v.forEach(t),_p.forEach(t),xc=l(o),Fe=a(o,"DIV",{class:!0});var Ct=s(Fe);f(Aa.$$.fragment,Ct),t_=l(Ct),Sa=a(Ct,"P",{});var gp=s(Sa);o_=i(gp,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ir=a(gp,"A",{href:!0});var jv=s(Ir);n_=i(jv,"TFPreTrainedModel"),jv.forEach(t),a_=i(gp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gp.forEach(t),s_=l(Ct),Ia=a(Ct,"P",{});var kp=s(Ia);r_=i(kp,"This model is also a "),Oa=a(kp,"A",{href:!0,rel:!0});var Mv=s(Oa);i_=i(Mv,"tf.keras.Model"),Mv.forEach(t),d_=i(kp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kp.forEach(t),l_=l(Ct),f(Zo.$$.fragment,Ct),c_=l(Ct),Ce=a(Ct,"DIV",{class:!0});var At=s(Ce);f(Na.$$.fragment,At),p_=l(At),fo=a(At,"P",{});var ii=s(fo);h_=i(ii,"The "),Or=a(ii,"A",{href:!0});var Pv=s(Or);u_=i(Pv,"TFBartModel"),Pv.forEach(t),m_=i(ii," forward method, overrides the "),qd=a(ii,"CODE",{});var Ev=s(qd);f_=i(Ev,"__call__"),Ev.forEach(t),__=i(ii," special method."),ii.forEach(t),g_=l(At),f(Yo.$$.fragment,At),k_=l(At),$d=a(At,"P",{});var Cv=s($d);b_=i(Cv,"Example:"),Cv.forEach(t),y_=l(At),f(Da.$$.fragment,At),At.forEach(t),Ct.forEach(t),zc=l(o),_o=a(o,"H2",{class:!0});var bp=s(_o);en=a(bp,"A",{id:!0,class:!0,href:!0});var Av=s(en);jd=a(Av,"SPAN",{});var Sv=s(jd);f(La.$$.fragment,Sv),Sv.forEach(t),Av.forEach(t),v_=l(bp),Md=a(bp,"SPAN",{});var Iv=s(Md);T_=i(Iv,"TFBartForConditionalGeneration"),Iv.forEach(t),bp.forEach(t),Fc=l(o),Be=a(o,"DIV",{class:!0});var St=s(Be);f(Ga.$$.fragment,St),w_=l(St),Wa=a(St,"P",{});var yp=s(Wa);x_=i(yp,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Nr=a(yp,"A",{href:!0});var Ov=s(Nr);z_=i(Ov,"TFPreTrainedModel"),Ov.forEach(t),F_=i(yp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yp.forEach(t),B_=l(St),Ra=a(St,"P",{});var vp=s(Ra);q_=i(vp,"This model is also a "),Ua=a(vp,"A",{href:!0,rel:!0});var Nv=s(Ua);$_=i(Nv,"tf.keras.Model"),Nv.forEach(t),j_=i(vp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vp.forEach(t),M_=l(St),f(tn.$$.fragment,St),P_=l(St),ee=a(St,"DIV",{class:!0});var Le=s(ee);f(Ha.$$.fragment,Le),E_=l(Le),go=a(Le,"P",{});var di=s(go);C_=i(di,"The "),Dr=a(di,"A",{href:!0});var Dv=s(Dr);A_=i(Dv,"TFBartForConditionalGeneration"),Dv.forEach(t),S_=i(di," forward method, overrides the "),Pd=a(di,"CODE",{});var Lv=s(Pd);I_=i(Lv,"__call__"),Lv.forEach(t),O_=i(di," special method."),di.forEach(t),N_=l(Le),f(on.$$.fragment,Le),D_=l(Le),Ed=a(Le,"P",{});var Gv=s(Ed);L_=i(Gv,"Summarization example:"),Gv.forEach(t),G_=l(Le),f(Qa.$$.fragment,Le),W_=l(Le),Cd=a(Le,"P",{});var Wv=s(Cd);R_=i(Wv,"Mask filling example:"),Wv.forEach(t),U_=l(Le),f(Va.$$.fragment,Le),Le.forEach(t),St.forEach(t),Bc=l(o),ko=a(o,"H2",{class:!0});var Tp=s(ko);nn=a(Tp,"A",{id:!0,class:!0,href:!0});var Rv=s(nn);Ad=a(Rv,"SPAN",{});var Uv=s(Ad);f(Ja.$$.fragment,Uv),Uv.forEach(t),Rv.forEach(t),H_=l(Tp),Sd=a(Tp,"SPAN",{});var Hv=s(Sd);Q_=i(Hv,"FlaxBartModel"),Hv.forEach(t),Tp.forEach(t),qc=l(o),W=a(o,"DIV",{class:!0});var fe=s(W);f(Xa.$$.fragment,fe),V_=l(fe),Ka=a(fe,"P",{});var wp=s(Ka);J_=i(wp,`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Lr=a(wp,"A",{href:!0});var Qv=s(Lr);X_=i(Qv,"FlaxPreTrainedModel"),Qv.forEach(t),K_=i(wp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wp.forEach(t),Z_=l(fe),Za=a(fe,"P",{});var xp=s(Za);Y_=i(xp,`This model is also a Flax Linen
`),Ya=a(xp,"A",{href:!0,rel:!0});var Vv=s(Ya);eg=i(Vv,"flax.nn.Module"),Vv.forEach(t),tg=i(xp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),xp.forEach(t),og=l(fe),Id=a(fe,"P",{});var Jv=s(Id);ng=i(Jv,"Finally, this model supports inherent JAX features such as:"),Jv.forEach(t),ag=l(fe),pt=a(fe,"UL",{});var bn=s(pt);Od=a(bn,"LI",{});var Xv=s(Od);es=a(Xv,"A",{href:!0,rel:!0});var Kv=s(es);sg=i(Kv,"Just-In-Time (JIT) compilation"),Kv.forEach(t),Xv.forEach(t),rg=l(bn),Nd=a(bn,"LI",{});var Zv=s(Nd);ts=a(Zv,"A",{href:!0,rel:!0});var Yv=s(ts);ig=i(Yv,"Automatic Differentiation"),Yv.forEach(t),Zv.forEach(t),dg=l(bn),Dd=a(bn,"LI",{});var eT=s(Dd);os=a(eT,"A",{href:!0,rel:!0});var tT=s(os);lg=i(tT,"Vectorization"),tT.forEach(t),eT.forEach(t),cg=l(bn),Ld=a(bn,"LI",{});var oT=s(Ld);ns=a(oT,"A",{href:!0,rel:!0});var nT=s(ns);pg=i(nT,"Parallelization"),nT.forEach(t),oT.forEach(t),bn.forEach(t),hg=l(fe),Ae=a(fe,"DIV",{class:!0});var It=s(Ae);f(as.$$.fragment,It),ug=l(It),bo=a(It,"P",{});var li=s(bo);mg=i(li,"The "),Gd=a(li,"CODE",{});var aT=s(Gd);fg=i(aT,"FlaxBartPreTrainedModel"),aT.forEach(t),_g=i(li,"forward method, overrides the "),Wd=a(li,"CODE",{});var sT=s(Wd);gg=i(sT,"__call__"),sT.forEach(t),kg=i(li," special method."),li.forEach(t),bg=l(It),f(an.$$.fragment,It),yg=l(It),Rd=a(It,"P",{});var rT=s(Rd);vg=i(rT,"Example:"),rT.forEach(t),Tg=l(It),f(ss.$$.fragment,It),It.forEach(t),wg=l(fe),yt=a(fe,"DIV",{class:!0});var ci=s(yt);f(rs.$$.fragment,ci),xg=l(ci),Ud=a(ci,"P",{});var iT=s(Ud);zg=i(iT,"Example:"),iT.forEach(t),Fg=l(ci),f(is.$$.fragment,ci),ci.forEach(t),Bg=l(fe),vt=a(fe,"DIV",{class:!0});var pi=s(vt);f(ds.$$.fragment,pi),qg=l(pi),Hd=a(pi,"P",{});var dT=s(Hd);$g=i(dT,"Example:"),dT.forEach(t),jg=l(pi),f(ls.$$.fragment,pi),pi.forEach(t),fe.forEach(t),$c=l(o),yo=a(o,"H2",{class:!0});var zp=s(yo);sn=a(zp,"A",{id:!0,class:!0,href:!0});var lT=s(sn);Qd=a(lT,"SPAN",{});var cT=s(Qd);f(cs.$$.fragment,cT),cT.forEach(t),lT.forEach(t),Mg=l(zp),Vd=a(zp,"SPAN",{});var pT=s(Vd);Pg=i(pT,"FlaxBartForConditionalGeneration"),pT.forEach(t),zp.forEach(t),jc=l(o),R=a(o,"DIV",{class:!0});var _e=s(R);f(ps.$$.fragment,_e),Eg=l(_e),hs=a(_e,"P",{});var Fp=s(hs);Cg=i(Fp,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Gr=a(Fp,"A",{href:!0});var hT=s(Gr);Ag=i(hT,"FlaxPreTrainedModel"),hT.forEach(t),Sg=i(Fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fp.forEach(t),Ig=l(_e),us=a(_e,"P",{});var Bp=s(us);Og=i(Bp,`This model is also a Flax Linen
`),ms=a(Bp,"A",{href:!0,rel:!0});var uT=s(ms);Ng=i(uT,"flax.nn.Module"),uT.forEach(t),Dg=i(Bp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Bp.forEach(t),Lg=l(_e),Jd=a(_e,"P",{});var mT=s(Jd);Gg=i(mT,"Finally, this model supports inherent JAX features such as:"),mT.forEach(t),Wg=l(_e),ht=a(_e,"UL",{});var yn=s(ht);Xd=a(yn,"LI",{});var fT=s(Xd);fs=a(fT,"A",{href:!0,rel:!0});var _T=s(fs);Rg=i(_T,"Just-In-Time (JIT) compilation"),_T.forEach(t),fT.forEach(t),Ug=l(yn),Kd=a(yn,"LI",{});var gT=s(Kd);_s=a(gT,"A",{href:!0,rel:!0});var kT=s(_s);Hg=i(kT,"Automatic Differentiation"),kT.forEach(t),gT.forEach(t),Qg=l(yn),Zd=a(yn,"LI",{});var bT=s(Zd);gs=a(bT,"A",{href:!0,rel:!0});var yT=s(gs);Vg=i(yT,"Vectorization"),yT.forEach(t),bT.forEach(t),Jg=l(yn),Yd=a(yn,"LI",{});var vT=s(Yd);ks=a(vT,"A",{href:!0,rel:!0});var TT=s(ks);Xg=i(TT,"Parallelization"),TT.forEach(t),vT.forEach(t),yn.forEach(t),Kg=l(_e),te=a(_e,"DIV",{class:!0});var Ge=s(te);f(bs.$$.fragment,Ge),Zg=l(Ge),vo=a(Ge,"P",{});var hi=s(vo);Yg=i(hi,"The "),el=a(hi,"CODE",{});var wT=s(el);ek=i(wT,"FlaxBartPreTrainedModel"),wT.forEach(t),tk=i(hi,"forward method, overrides the "),tl=a(hi,"CODE",{});var xT=s(tl);ok=i(xT,"__call__"),xT.forEach(t),nk=i(hi," special method."),hi.forEach(t),ak=l(Ge),f(rn.$$.fragment,Ge),sk=l(Ge),ol=a(Ge,"P",{});var zT=s(ol);rk=i(zT,"Summarization example:"),zT.forEach(t),ik=l(Ge),f(ys.$$.fragment,Ge),dk=l(Ge),nl=a(Ge,"P",{});var FT=s(nl);lk=i(FT,"Mask filling example:"),FT.forEach(t),ck=l(Ge),f(vs.$$.fragment,Ge),Ge.forEach(t),pk=l(_e),Tt=a(_e,"DIV",{class:!0});var ui=s(Tt);f(Ts.$$.fragment,ui),hk=l(ui),al=a(ui,"P",{});var BT=s(al);uk=i(BT,"Example:"),BT.forEach(t),mk=l(ui),f(ws.$$.fragment,ui),ui.forEach(t),fk=l(_e),wt=a(_e,"DIV",{class:!0});var mi=s(wt);f(xs.$$.fragment,mi),_k=l(mi),sl=a(mi,"P",{});var qT=s(sl);gk=i(qT,"Example:"),qT.forEach(t),kk=l(mi),f(zs.$$.fragment,mi),mi.forEach(t),_e.forEach(t),Mc=l(o),To=a(o,"H2",{class:!0});var qp=s(To);dn=a(qp,"A",{id:!0,class:!0,href:!0});var $T=s(dn);rl=a($T,"SPAN",{});var jT=s(rl);f(Fs.$$.fragment,jT),jT.forEach(t),$T.forEach(t),bk=l(qp),il=a(qp,"SPAN",{});var MT=s(il);yk=i(MT,"FlaxBartForSequenceClassification"),MT.forEach(t),qp.forEach(t),Pc=l(o),I=a(o,"DIV",{class:!0});var oe=s(I);f(Bs.$$.fragment,oe),vk=l(oe),dl=a(oe,"P",{});var PT=s(dl);Tk=i(PT,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),PT.forEach(t),wk=l(oe),qs=a(oe,"P",{});var $p=s(qs);xk=i($p,"This model inherits from "),Wr=a($p,"A",{href:!0});var ET=s(Wr);zk=i(ET,"FlaxPreTrainedModel"),ET.forEach(t),Fk=i($p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$p.forEach(t),Bk=l(oe),$s=a(oe,"P",{});var jp=s($s);qk=i(jp,`This model is also a Flax Linen
`),js=a(jp,"A",{href:!0,rel:!0});var CT=s(js);$k=i(CT,"flax.nn.Module"),CT.forEach(t),jk=i(jp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),jp.forEach(t),Mk=l(oe),ll=a(oe,"P",{});var AT=s(ll);Pk=i(AT,"Finally, this model supports inherent JAX features such as:"),AT.forEach(t),Ek=l(oe),ut=a(oe,"UL",{});var vn=s(ut);cl=a(vn,"LI",{});var ST=s(cl);Ms=a(ST,"A",{href:!0,rel:!0});var IT=s(Ms);Ck=i(IT,"Just-In-Time (JIT) compilation"),IT.forEach(t),ST.forEach(t),Ak=l(vn),pl=a(vn,"LI",{});var OT=s(pl);Ps=a(OT,"A",{href:!0,rel:!0});var NT=s(Ps);Sk=i(NT,"Automatic Differentiation"),NT.forEach(t),OT.forEach(t),Ik=l(vn),hl=a(vn,"LI",{});var DT=s(hl);Es=a(DT,"A",{href:!0,rel:!0});var LT=s(Es);Ok=i(LT,"Vectorization"),LT.forEach(t),DT.forEach(t),Nk=l(vn),ul=a(vn,"LI",{});var GT=s(ul);Cs=a(GT,"A",{href:!0,rel:!0});var WT=s(Cs);Dk=i(WT,"Parallelization"),WT.forEach(t),GT.forEach(t),vn.forEach(t),Lk=l(oe),Se=a(oe,"DIV",{class:!0});var Ot=s(Se);f(As.$$.fragment,Ot),Gk=l(Ot),wo=a(Ot,"P",{});var fi=s(wo);Wk=i(fi,"The "),ml=a(fi,"CODE",{});var RT=s(ml);Rk=i(RT,"FlaxBartPreTrainedModel"),RT.forEach(t),Uk=i(fi,"forward method, overrides the "),fl=a(fi,"CODE",{});var UT=s(fl);Hk=i(UT,"__call__"),UT.forEach(t),Qk=i(fi," special method."),fi.forEach(t),Vk=l(Ot),f(ln.$$.fragment,Ot),Jk=l(Ot),_l=a(Ot,"P",{});var HT=s(_l);Xk=i(HT,"Example:"),HT.forEach(t),Kk=l(Ot),f(Ss.$$.fragment,Ot),Ot.forEach(t),Zk=l(oe),xt=a(oe,"DIV",{class:!0});var _i=s(xt);f(Is.$$.fragment,_i),Yk=l(_i),gl=a(_i,"P",{});var QT=s(gl);eb=i(QT,"Example:"),QT.forEach(t),tb=l(_i),f(Os.$$.fragment,_i),_i.forEach(t),ob=l(oe),zt=a(oe,"DIV",{class:!0});var gi=s(zt);f(Ns.$$.fragment,gi),nb=l(gi),kl=a(gi,"P",{});var VT=s(kl);ab=i(VT,"Example:"),VT.forEach(t),sb=l(gi),f(Ds.$$.fragment,gi),gi.forEach(t),oe.forEach(t),Ec=l(o),xo=a(o,"H2",{class:!0});var Mp=s(xo);cn=a(Mp,"A",{id:!0,class:!0,href:!0});var JT=s(cn);bl=a(JT,"SPAN",{});var XT=s(bl);f(Ls.$$.fragment,XT),XT.forEach(t),JT.forEach(t),rb=l(Mp),yl=a(Mp,"SPAN",{});var KT=s(yl);ib=i(KT,"FlaxBartForQuestionAnswering"),KT.forEach(t),Mp.forEach(t),Cc=l(o),O=a(o,"DIV",{class:!0});var ne=s(O);f(Gs.$$.fragment,ne),db=l(ne),zo=a(ne,"P",{});var ki=s(zo);lb=i(ki,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),vl=a(ki,"CODE",{});var ZT=s(vl);cb=i(ZT,"span start logits"),ZT.forEach(t),pb=i(ki," and "),Tl=a(ki,"CODE",{});var YT=s(Tl);hb=i(YT,"span end logits"),YT.forEach(t),ub=i(ki,")."),ki.forEach(t),mb=l(ne),Ws=a(ne,"P",{});var Pp=s(Ws);fb=i(Pp,"This model inherits from "),Rr=a(Pp,"A",{href:!0});var ew=s(Rr);_b=i(ew,"FlaxPreTrainedModel"),ew.forEach(t),gb=i(Pp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pp.forEach(t),kb=l(ne),Rs=a(ne,"P",{});var Ep=s(Rs);bb=i(Ep,`This model is also a Flax Linen
`),Us=a(Ep,"A",{href:!0,rel:!0});var tw=s(Us);yb=i(tw,"flax.nn.Module"),tw.forEach(t),vb=i(Ep,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ep.forEach(t),Tb=l(ne),wl=a(ne,"P",{});var ow=s(wl);wb=i(ow,"Finally, this model supports inherent JAX features such as:"),ow.forEach(t),xb=l(ne),mt=a(ne,"UL",{});var Tn=s(mt);xl=a(Tn,"LI",{});var nw=s(xl);Hs=a(nw,"A",{href:!0,rel:!0});var aw=s(Hs);zb=i(aw,"Just-In-Time (JIT) compilation"),aw.forEach(t),nw.forEach(t),Fb=l(Tn),zl=a(Tn,"LI",{});var sw=s(zl);Qs=a(sw,"A",{href:!0,rel:!0});var rw=s(Qs);Bb=i(rw,"Automatic Differentiation"),rw.forEach(t),sw.forEach(t),qb=l(Tn),Fl=a(Tn,"LI",{});var iw=s(Fl);Vs=a(iw,"A",{href:!0,rel:!0});var dw=s(Vs);$b=i(dw,"Vectorization"),dw.forEach(t),iw.forEach(t),jb=l(Tn),Bl=a(Tn,"LI",{});var lw=s(Bl);Js=a(lw,"A",{href:!0,rel:!0});var cw=s(Js);Mb=i(cw,"Parallelization"),cw.forEach(t),lw.forEach(t),Tn.forEach(t),Pb=l(ne),Ie=a(ne,"DIV",{class:!0});var Nt=s(Ie);f(Xs.$$.fragment,Nt),Eb=l(Nt),Fo=a(Nt,"P",{});var bi=s(Fo);Cb=i(bi,"The "),ql=a(bi,"CODE",{});var pw=s(ql);Ab=i(pw,"FlaxBartPreTrainedModel"),pw.forEach(t),Sb=i(bi,"forward method, overrides the "),$l=a(bi,"CODE",{});var hw=s($l);Ib=i(hw,"__call__"),hw.forEach(t),Ob=i(bi," special method."),bi.forEach(t),Nb=l(Nt),f(pn.$$.fragment,Nt),Db=l(Nt),jl=a(Nt,"P",{});var uw=s(jl);Lb=i(uw,"Example:"),uw.forEach(t),Gb=l(Nt),f(Ks.$$.fragment,Nt),Nt.forEach(t),Wb=l(ne),Ft=a(ne,"DIV",{class:!0});var yi=s(Ft);f(Zs.$$.fragment,yi),Rb=l(yi),Ml=a(yi,"P",{});var mw=s(Ml);Ub=i(mw,"Example:"),mw.forEach(t),Hb=l(yi),f(Ys.$$.fragment,yi),yi.forEach(t),Qb=l(ne),Bt=a(ne,"DIV",{class:!0});var vi=s(Bt);f(er.$$.fragment,vi),Vb=l(vi),Pl=a(vi,"P",{});var fw=s(Pl);Jb=i(fw,"Example:"),fw.forEach(t),Xb=l(vi),f(tr.$$.fragment,vi),vi.forEach(t),ne.forEach(t),Ac=l(o),Bo=a(o,"H2",{class:!0});var Cp=s(Bo);hn=a(Cp,"A",{id:!0,class:!0,href:!0});var _w=s(hn);El=a(_w,"SPAN",{});var gw=s(El);f(or.$$.fragment,gw),gw.forEach(t),_w.forEach(t),Kb=l(Cp),Cl=a(Cp,"SPAN",{});var kw=s(Cl);Zb=i(kw,"FlaxBartForCausalLM"),kw.forEach(t),Cp.forEach(t),Sc=l(o),X=a(o,"DIV",{class:!0});var We=s(X);f(nr.$$.fragment,We),Yb=l(We),Al=a(We,"P",{});var bw=s(Al);ey=i(bw,`Bart Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings)
e.g for autoregressive tasks.`),bw.forEach(t),ty=l(We),ar=a(We,"P",{});var Ap=s(ar);oy=i(Ap,"This model inherits from "),Ur=a(Ap,"A",{href:!0});var yw=s(Ur);ny=i(yw,"FlaxPreTrainedModel"),yw.forEach(t),ay=i(Ap,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ap.forEach(t),sy=l(We),sr=a(We,"P",{});var Sp=s(sr);ry=i(Sp,`This model is also a Flax Linen
`),rr=a(Sp,"A",{href:!0,rel:!0});var vw=s(rr);iy=i(vw,"flax.nn.Module"),vw.forEach(t),dy=i(Sp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Sp.forEach(t),ly=l(We),Sl=a(We,"P",{});var Tw=s(Sl);cy=i(Tw,"Finally, this model supports inherent JAX features such as:"),Tw.forEach(t),py=l(We),ft=a(We,"UL",{});var wn=s(ft);Il=a(wn,"LI",{});var ww=s(Il);ir=a(ww,"A",{href:!0,rel:!0});var xw=s(ir);hy=i(xw,"Just-In-Time (JIT) compilation"),xw.forEach(t),ww.forEach(t),uy=l(wn),Ol=a(wn,"LI",{});var zw=s(Ol);dr=a(zw,"A",{href:!0,rel:!0});var Fw=s(dr);my=i(Fw,"Automatic Differentiation"),Fw.forEach(t),zw.forEach(t),fy=l(wn),Nl=a(wn,"LI",{});var Bw=s(Nl);lr=a(Bw,"A",{href:!0,rel:!0});var qw=s(lr);_y=i(qw,"Vectorization"),qw.forEach(t),Bw.forEach(t),gy=l(wn),Dl=a(wn,"LI",{});var $w=s(Dl);cr=a($w,"A",{href:!0,rel:!0});var jw=s(cr);ky=i(jw,"Parallelization"),jw.forEach(t),$w.forEach(t),wn.forEach(t),by=l(We),Oe=a(We,"DIV",{class:!0});var Dt=s(Oe);f(pr.$$.fragment,Dt),yy=l(Dt),qo=a(Dt,"P",{});var Ti=s(qo);vy=i(Ti,"The "),Ll=a(Ti,"CODE",{});var Mw=s(Ll);Ty=i(Mw,"FlaxBartDecoderPreTrainedModel"),Mw.forEach(t),wy=i(Ti,"forward method, overrides the "),Gl=a(Ti,"CODE",{});var Pw=s(Gl);xy=i(Pw,"__call__"),Pw.forEach(t),zy=i(Ti," special method."),Ti.forEach(t),Fy=l(Dt),f(un.$$.fragment,Dt),By=l(Dt),Wl=a(Dt,"P",{});var Ew=s(Wl);qy=i(Ew,"Example:"),Ew.forEach(t),$y=l(Dt),f(hr.$$.fragment,Dt),Dt.forEach(t),We.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(ex)),c(w,"id","bart"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#bart"),c(y,"class","relative group"),c(ke,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ke,"rel","nofollow"),c(N,"id","overview"),c(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(N,"href","#overview"),c(Q,"class","relative group"),c(V,"href","https://arxiv.org/abs/1910.13461"),c(V,"rel","nofollow"),c(He,"href","https://huggingface.co/sshleifer"),c(He,"rel","nofollow"),c(Qe,"href","https://github.com/pytorch/fairseq/tree/master/examples/bart"),c(Qe,"rel","nofollow"),c(je,"id","examples"),c(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(je,"href","#examples"),c(Te,"class","relative group"),c(zn,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization/README.md"),c(zn,"rel","nofollow"),c(_r,"href","/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(Fn,"href","https://discuss.huggingface.co/t/train-bart-for-conditional-generation-e-g-summarization/1904"),c(Fn,"rel","nofollow"),c(Bn,"href","https://huggingface.co/models?search=distilbart"),c(Bn,"rel","nofollow"),c(qn,"href","https://arxiv.org/abs/2010.13002"),c(qn,"rel","nofollow"),c(Mo,"id","implementation-notes"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#implementation-notes"),c(Ht,"class","relative group"),c(gr,"href","/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartTokenizer"),c(kr,"href","/docs/transformers/pr_16176/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode"),c(br,"href","/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartModel"),c(vr,"href","/docs/transformers/pr_16176/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(Po,"id","mask-filling"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#mask-filling"),c(Xt,"class","relative group"),c(Eo,"id","transformers.BartConfig"),c(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Eo,"href","#transformers.BartConfig"),c(Kt,"class","relative group"),c(Tr,"href","/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartModel"),c(Cn,"href","https://huggingface.co/facebook/bart-large"),c(Cn,"rel","nofollow"),c(wr,"href","/docs/transformers/pr_16176/en/main_classes/configuration#transformers.PretrainedConfig"),c(xr,"href","/docs/transformers/pr_16176/en/main_classes/configuration#transformers.PretrainedConfig"),c(we,"class","docstring"),c(Co,"id","transformers.BartTokenizer"),c(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Co,"href","#transformers.BartTokenizer"),c(eo,"class","relative group"),c(zr,"href","/docs/transformers/pr_16176/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(kt,"class","docstring"),c(So,"class","docstring"),c(Io,"class","docstring"),c(Oo,"class","docstring"),c(E,"class","docstring"),c(No,"id","transformers.BartTokenizerFast"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.BartTokenizerFast"),c(to,"class","relative group"),c(qr,"href","/docs/transformers/pr_16176/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Lo,"class","docstring"),c(G,"class","docstring"),c(Go,"id","transformers.BartModel"),c(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Go,"href","#transformers.BartModel"),c(oo,"class","relative group"),c($r,"href","/docs/transformers/pr_16176/en/main_classes/model#transformers.PreTrainedModel"),c(aa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(aa,"rel","nofollow"),c(jr,"href","/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartModel"),c(Pe,"class","docstring"),c(Xe,"class","docstring"),c(Ro,"id","transformers.BartForConditionalGeneration"),c(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ro,"href","#transformers.BartForConditionalGeneration"),c(ao,"class","relative group"),c(Mr,"href","/docs/transformers/pr_16176/en/main_classes/model#transformers.PreTrainedModel"),c(pa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(pa,"rel","nofollow"),c(Pr,"href","/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(Z,"class","docstring"),c(Ke,"class","docstring"),c(Ho,"id","transformers.BartForSequenceClassification"),c(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ho,"href","#transformers.BartForSequenceClassification"),c(ro,"class","relative group"),c(Er,"href","/docs/transformers/pr_16176/en/main_classes/model#transformers.PreTrainedModel"),c(ba,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ba,"rel","nofollow"),c(Cr,"href","/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartForSequenceClassification"),c(Y,"class","docstring"),c(xe,"class","docstring"),c(Vo,"id","transformers.BartForQuestionAnswering"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#transformers.BartForQuestionAnswering"),c(lo,"class","relative group"),c(Ar,"href","/docs/transformers/pr_16176/en/main_classes/model#transformers.PreTrainedModel"),c(Ba,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ba,"rel","nofollow"),c(Sr,"href","/docs/transformers/pr_16176/en/model_doc/bart#transformers.BartForQuestionAnswering"),c(Ee,"class","docstring"),c(ze,"class","docstring"),c(Xo,"id","transformers.BartForCausalLM"),c(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xo,"href","#transformers.BartForCausalLM"),c(ho,"class","relative group"),c(bt,"class","docstring"),c(uo,"class","docstring"),c(Ko,"id","transformers.TFBartModel"),c(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ko,"href","#transformers.TFBartModel"),c(mo,"class","relative group"),c(Ir,"href","/docs/transformers/pr_16176/en/main_classes/model#transformers.TFPreTrainedModel"),c(Oa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Oa,"rel","nofollow"),c(Or,"href","/docs/transformers/pr_16176/en/model_doc/bart#transformers.TFBartModel"),c(Ce,"class","docstring"),c(Fe,"class","docstring"),c(en,"id","transformers.TFBartForConditionalGeneration"),c(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(en,"href","#transformers.TFBartForConditionalGeneration"),c(_o,"class","relative group"),c(Nr,"href","/docs/transformers/pr_16176/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ua,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ua,"rel","nofollow"),c(Dr,"href","/docs/transformers/pr_16176/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),c(ee,"class","docstring"),c(Be,"class","docstring"),c(nn,"id","transformers.FlaxBartModel"),c(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(nn,"href","#transformers.FlaxBartModel"),c(ko,"class","relative group"),c(Lr,"href","/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ya,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ya,"rel","nofollow"),c(es,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(es,"rel","nofollow"),c(ts,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ts,"rel","nofollow"),c(os,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(os,"rel","nofollow"),c(ns,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ns,"rel","nofollow"),c(Ae,"class","docstring"),c(yt,"class","docstring"),c(vt,"class","docstring"),c(W,"class","docstring"),c(sn,"id","transformers.FlaxBartForConditionalGeneration"),c(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(sn,"href","#transformers.FlaxBartForConditionalGeneration"),c(yo,"class","relative group"),c(Gr,"href","/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ms,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(ms,"rel","nofollow"),c(fs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(fs,"rel","nofollow"),c(_s,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(_s,"rel","nofollow"),c(gs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(gs,"rel","nofollow"),c(ks,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ks,"rel","nofollow"),c(te,"class","docstring"),c(Tt,"class","docstring"),c(wt,"class","docstring"),c(R,"class","docstring"),c(dn,"id","transformers.FlaxBartForSequenceClassification"),c(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(dn,"href","#transformers.FlaxBartForSequenceClassification"),c(To,"class","relative group"),c(Wr,"href","/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(js,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(js,"rel","nofollow"),c(Ms,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ms,"rel","nofollow"),c(Ps,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ps,"rel","nofollow"),c(Es,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Es,"rel","nofollow"),c(Cs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Cs,"rel","nofollow"),c(Se,"class","docstring"),c(xt,"class","docstring"),c(zt,"class","docstring"),c(I,"class","docstring"),c(cn,"id","transformers.FlaxBartForQuestionAnswering"),c(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(cn,"href","#transformers.FlaxBartForQuestionAnswering"),c(xo,"class","relative group"),c(Rr,"href","/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Us,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Us,"rel","nofollow"),c(Hs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Hs,"rel","nofollow"),c(Qs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Qs,"rel","nofollow"),c(Vs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Vs,"rel","nofollow"),c(Js,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Js,"rel","nofollow"),c(Ie,"class","docstring"),c(Ft,"class","docstring"),c(Bt,"class","docstring"),c(O,"class","docstring"),c(hn,"id","transformers.FlaxBartForCausalLM"),c(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(hn,"href","#transformers.FlaxBartForCausalLM"),c(Bo,"class","relative group"),c(Ur,"href","/docs/transformers/pr_16176/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(rr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(rr,"rel","nofollow"),c(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ir,"rel","nofollow"),c(dr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(dr,"rel","nofollow"),c(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(lr,"rel","nofollow"),c(cr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(cr,"rel","nofollow"),c(Oe,"class","docstring"),c(X,"class","docstring")},m(o,h){e(document.head,p),u(o,z,h),u(o,y,h),e(y,w),e(w,x),_(T,x,null),e(y,v),e(y,B),e(B,ae),u(o,A,h),u(o,$,h),e($,ce),e(ce,ge),e($,et),e($,ke),e(ke,be),e($,tt),u(o,Ze,h),u(o,Q,h),e(Q,N),e(N,Re),_(se,Re,null),e(Q,C),e(Q,S),e(S,ot),u(o,pe,h),u(o,he,h),e(he,nt),e(he,V),e(V,at),e(he,st),u(o,D,h),u(o,$e,h),e($e,ye),u(o,Ye,h),u(o,K,h),e(K,re),e(re,rt),e(K,it),e(K,J),e(J,dt),e(K,ve),e(K,Ue),e(Ue,F),u(o,M,h),u(o,U,h),e(U,Lt),e(U,He),e(He,ie),e(U,Gt),e(U,Qe),e(Qe,Wt),e(U,de),u(o,ue,h),u(o,Te,h),e(Te,je),e(je,le),_(Ve,le,null),e(Te,Rt),e(Te,Je),e(Je,Ut),u(o,tc,h),u(o,_t,h),e(_t,xn),e(xn,Ip),e(xn,zn),e(zn,Op),e(xn,Np),e(_t,Dp),e(_t,lt),e(lt,Lp),e(lt,_r),e(_r,Gp),e(lt,Wp),e(lt,wi),e(wi,Rp),e(lt,Up),e(lt,Fn),e(Fn,Hp),e(lt,Qp),e(_t,Vp),e(_t,jo),e(jo,Bn),e(Bn,Jp),e(jo,Xp),e(jo,qn),e(qn,Kp),e(jo,Zp),u(o,oc,h),u(o,Ht,h),e(Ht,Mo),e(Mo,xi),_($n,xi,null),e(Ht,Yp),e(Ht,zi),e(zi,eh),u(o,nc,h),u(o,Me,h),e(Me,ct),e(ct,th),e(ct,Fi),e(Fi,oh),e(ct,nh),e(ct,gr),e(gr,ah),e(ct,sh),e(ct,kr),e(kr,rh),e(ct,ih),e(Me,dh),e(Me,Qt),e(Qt,lh),e(Qt,br),e(br,ch),e(Qt,ph),e(Qt,Bi),e(Bi,hh),e(Qt,uh),e(Me,mh),e(Me,Vt),e(Vt,fh),e(Vt,qi),e(qi,_h),e(Vt,gh),e(Vt,$i),e($i,kh),e(Vt,bh),e(Me,yh),e(Me,yr),e(yr,vr),e(vr,vh),e(yr,Th),e(Me,wh),e(Me,Jt),e(Jt,xh),e(Jt,ji),e(ji,zh),e(Jt,Fh),e(Jt,Mi),e(Mi,Bh),e(Jt,qh),u(o,ac,h),u(o,Xt,h),e(Xt,Po),e(Po,Pi),_(jn,Pi,null),e(Xt,$h),e(Xt,Ei),e(Ei,jh),u(o,sc,h),u(o,gt,h),e(gt,Mh),e(gt,Ci),e(Ci,Ph),e(gt,Eh),e(gt,Ai),e(Ai,Ch),e(gt,Ah),u(o,rc,h),_(Mn,o,h),u(o,ic,h),u(o,Kt,h),e(Kt,Eo),e(Eo,Si),_(Pn,Si,null),e(Kt,Sh),e(Kt,Ii),e(Ii,Ih),u(o,dc,h),u(o,we,h),_(En,we,null),e(we,Oh),e(we,Zt),e(Zt,Nh),e(Zt,Tr),e(Tr,Dh),e(Zt,Lh),e(Zt,Cn),e(Cn,Gh),e(Zt,Wh),e(we,Rh),e(we,Yt),e(Yt,Uh),e(Yt,wr),e(wr,Hh),e(Yt,Qh),e(Yt,xr),e(xr,Vh),e(Yt,Jh),e(we,Xh),e(we,Oi),e(Oi,Kh),e(we,Zh),_(An,we,null),u(o,lc,h),u(o,eo,h),e(eo,Co),e(Co,Ni),_(Sn,Ni,null),e(eo,Yh),e(eo,Di),e(Di,eu),u(o,cc,h),u(o,E,h),_(In,E,null),e(E,tu),e(E,Li),e(Li,ou),e(E,nu),e(E,Gi),e(Gi,au),e(E,su),_(On,E,null),e(E,ru),e(E,Nn),e(Nn,iu),e(Nn,Wi),e(Wi,du),e(Nn,lu),e(E,cu),_(Ao,E,null),e(E,pu),e(E,Dn),e(Dn,hu),e(Dn,zr),e(zr,uu),e(Dn,mu),e(E,fu),e(E,kt),_(Ln,kt,null),e(kt,_u),e(kt,Ri),e(Ri,gu),e(kt,ku),e(kt,Gn),e(Gn,Fr),e(Fr,bu),e(Fr,Ui),e(Ui,yu),e(Gn,vu),e(Gn,Br),e(Br,Tu),e(Br,Hi),e(Hi,wu),e(E,xu),e(E,So),_(Wn,So,null),e(So,zu),e(So,Qi),e(Qi,Fu),e(E,Bu),e(E,Io),_(Rn,Io,null),e(Io,qu),e(Io,Vi),e(Vi,$u),e(E,ju),e(E,Oo),_(Un,Oo,null),e(Oo,Mu),e(Oo,Hn),e(Hn,Pu),e(Hn,Ji),e(Ji,Eu),e(Hn,Cu),u(o,pc,h),u(o,to,h),e(to,No),e(No,Xi),_(Qn,Xi,null),e(to,Au),e(to,Ki),e(Ki,Su),u(o,hc,h),u(o,G,h),_(Vn,G,null),e(G,Iu),e(G,Jn),e(Jn,Ou),e(Jn,Zi),e(Zi,Nu),e(Jn,Du),e(G,Lu),e(G,Yi),e(Yi,Gu),e(G,Wu),_(Xn,G,null),e(G,Ru),e(G,Kn),e(Kn,Uu),e(Kn,ed),e(ed,Hu),e(Kn,Qu),e(G,Vu),_(Do,G,null),e(G,Ju),e(G,Zn),e(Zn,Xu),e(Zn,qr),e(qr,Ku),e(Zn,Zu),e(G,Yu),e(G,Lo),_(Yn,Lo,null),e(Lo,em),e(Lo,td),e(td,tm),u(o,uc,h),u(o,oo,h),e(oo,Go),e(Go,od),_(ea,od,null),e(oo,om),e(oo,nd),e(nd,nm),u(o,mc,h),u(o,Xe,h),_(ta,Xe,null),e(Xe,am),e(Xe,oa),e(oa,sm),e(oa,$r),e($r,rm),e(oa,im),e(Xe,dm),e(Xe,na),e(na,lm),e(na,aa),e(aa,cm),e(na,pm),e(Xe,hm),e(Xe,Pe),_(sa,Pe,null),e(Pe,um),e(Pe,no),e(no,mm),e(no,jr),e(jr,fm),e(no,_m),e(no,ad),e(ad,gm),e(no,km),e(Pe,bm),_(Wo,Pe,null),e(Pe,ym),e(Pe,sd),e(sd,vm),e(Pe,Tm),_(ra,Pe,null),u(o,fc,h),u(o,ao,h),e(ao,Ro),e(Ro,rd),_(ia,rd,null),e(ao,wm),e(ao,id),e(id,xm),u(o,_c,h),u(o,Ke,h),_(da,Ke,null),e(Ke,zm),e(Ke,la),e(la,Fm),e(la,Mr),e(Mr,Bm),e(la,qm),e(Ke,$m),e(Ke,ca),e(ca,jm),e(ca,pa),e(pa,Mm),e(ca,Pm),e(Ke,Em),e(Ke,Z),_(ha,Z,null),e(Z,Cm),e(Z,so),e(so,Am),e(so,Pr),e(Pr,Sm),e(so,Im),e(so,dd),e(dd,Om),e(so,Nm),e(Z,Dm),_(Uo,Z,null),e(Z,Lm),e(Z,ld),e(ld,Gm),e(Z,Wm),_(ua,Z,null),e(Z,Rm),e(Z,cd),e(cd,Um),e(Z,Hm),_(ma,Z,null),u(o,gc,h),u(o,ro,h),e(ro,Ho),e(Ho,pd),_(fa,pd,null),e(ro,Qm),e(ro,hd),e(hd,Vm),u(o,kc,h),u(o,xe,h),_(_a,xe,null),e(xe,Jm),e(xe,ud),e(ud,Xm),e(xe,Km),e(xe,ga),e(ga,Zm),e(ga,Er),e(Er,Ym),e(ga,ef),e(xe,tf),e(xe,ka),e(ka,of),e(ka,ba),e(ba,nf),e(ka,af),e(xe,sf),e(xe,Y),_(ya,Y,null),e(Y,rf),e(Y,io),e(io,df),e(io,Cr),e(Cr,lf),e(io,cf),e(io,md),e(md,pf),e(io,hf),e(Y,uf),_(Qo,Y,null),e(Y,mf),e(Y,fd),e(fd,ff),e(Y,_f),_(va,Y,null),e(Y,gf),e(Y,_d),e(_d,kf),e(Y,bf),_(Ta,Y,null),u(o,bc,h),u(o,lo,h),e(lo,Vo),e(Vo,gd),_(wa,gd,null),e(lo,yf),e(lo,kd),e(kd,vf),u(o,yc,h),u(o,ze,h),_(xa,ze,null),e(ze,Tf),e(ze,co),e(co,wf),e(co,bd),e(bd,xf),e(co,zf),e(co,yd),e(yd,Ff),e(co,Bf),e(ze,qf),e(ze,za),e(za,$f),e(za,Ar),e(Ar,jf),e(za,Mf),e(ze,Pf),e(ze,Fa),e(Fa,Ef),e(Fa,Ba),e(Ba,Cf),e(Fa,Af),e(ze,Sf),e(ze,Ee),_(qa,Ee,null),e(Ee,If),e(Ee,po),e(po,Of),e(po,Sr),e(Sr,Nf),e(po,Df),e(po,vd),e(vd,Lf),e(po,Gf),e(Ee,Wf),_(Jo,Ee,null),e(Ee,Rf),e(Ee,Td),e(Td,Uf),e(Ee,Hf),_($a,Ee,null),u(o,vc,h),u(o,ho,h),e(ho,Xo),e(Xo,wd),_(ja,wd,null),e(ho,Qf),e(ho,xd),e(xd,Vf),u(o,Tc,h),u(o,uo,h),_(Ma,uo,null),e(uo,Jf),e(uo,bt),_(Pa,bt,null),e(bt,Xf),e(bt,zd),e(zd,Kf),e(bt,Zf),_(Ea,bt,null),u(o,wc,h),u(o,mo,h),e(mo,Ko),e(Ko,Fd),_(Ca,Fd,null),e(mo,Yf),e(mo,Bd),e(Bd,e_),u(o,xc,h),u(o,Fe,h),_(Aa,Fe,null),e(Fe,t_),e(Fe,Sa),e(Sa,o_),e(Sa,Ir),e(Ir,n_),e(Sa,a_),e(Fe,s_),e(Fe,Ia),e(Ia,r_),e(Ia,Oa),e(Oa,i_),e(Ia,d_),e(Fe,l_),_(Zo,Fe,null),e(Fe,c_),e(Fe,Ce),_(Na,Ce,null),e(Ce,p_),e(Ce,fo),e(fo,h_),e(fo,Or),e(Or,u_),e(fo,m_),e(fo,qd),e(qd,f_),e(fo,__),e(Ce,g_),_(Yo,Ce,null),e(Ce,k_),e(Ce,$d),e($d,b_),e(Ce,y_),_(Da,Ce,null),u(o,zc,h),u(o,_o,h),e(_o,en),e(en,jd),_(La,jd,null),e(_o,v_),e(_o,Md),e(Md,T_),u(o,Fc,h),u(o,Be,h),_(Ga,Be,null),e(Be,w_),e(Be,Wa),e(Wa,x_),e(Wa,Nr),e(Nr,z_),e(Wa,F_),e(Be,B_),e(Be,Ra),e(Ra,q_),e(Ra,Ua),e(Ua,$_),e(Ra,j_),e(Be,M_),_(tn,Be,null),e(Be,P_),e(Be,ee),_(Ha,ee,null),e(ee,E_),e(ee,go),e(go,C_),e(go,Dr),e(Dr,A_),e(go,S_),e(go,Pd),e(Pd,I_),e(go,O_),e(ee,N_),_(on,ee,null),e(ee,D_),e(ee,Ed),e(Ed,L_),e(ee,G_),_(Qa,ee,null),e(ee,W_),e(ee,Cd),e(Cd,R_),e(ee,U_),_(Va,ee,null),u(o,Bc,h),u(o,ko,h),e(ko,nn),e(nn,Ad),_(Ja,Ad,null),e(ko,H_),e(ko,Sd),e(Sd,Q_),u(o,qc,h),u(o,W,h),_(Xa,W,null),e(W,V_),e(W,Ka),e(Ka,J_),e(Ka,Lr),e(Lr,X_),e(Ka,K_),e(W,Z_),e(W,Za),e(Za,Y_),e(Za,Ya),e(Ya,eg),e(Za,tg),e(W,og),e(W,Id),e(Id,ng),e(W,ag),e(W,pt),e(pt,Od),e(Od,es),e(es,sg),e(pt,rg),e(pt,Nd),e(Nd,ts),e(ts,ig),e(pt,dg),e(pt,Dd),e(Dd,os),e(os,lg),e(pt,cg),e(pt,Ld),e(Ld,ns),e(ns,pg),e(W,hg),e(W,Ae),_(as,Ae,null),e(Ae,ug),e(Ae,bo),e(bo,mg),e(bo,Gd),e(Gd,fg),e(bo,_g),e(bo,Wd),e(Wd,gg),e(bo,kg),e(Ae,bg),_(an,Ae,null),e(Ae,yg),e(Ae,Rd),e(Rd,vg),e(Ae,Tg),_(ss,Ae,null),e(W,wg),e(W,yt),_(rs,yt,null),e(yt,xg),e(yt,Ud),e(Ud,zg),e(yt,Fg),_(is,yt,null),e(W,Bg),e(W,vt),_(ds,vt,null),e(vt,qg),e(vt,Hd),e(Hd,$g),e(vt,jg),_(ls,vt,null),u(o,$c,h),u(o,yo,h),e(yo,sn),e(sn,Qd),_(cs,Qd,null),e(yo,Mg),e(yo,Vd),e(Vd,Pg),u(o,jc,h),u(o,R,h),_(ps,R,null),e(R,Eg),e(R,hs),e(hs,Cg),e(hs,Gr),e(Gr,Ag),e(hs,Sg),e(R,Ig),e(R,us),e(us,Og),e(us,ms),e(ms,Ng),e(us,Dg),e(R,Lg),e(R,Jd),e(Jd,Gg),e(R,Wg),e(R,ht),e(ht,Xd),e(Xd,fs),e(fs,Rg),e(ht,Ug),e(ht,Kd),e(Kd,_s),e(_s,Hg),e(ht,Qg),e(ht,Zd),e(Zd,gs),e(gs,Vg),e(ht,Jg),e(ht,Yd),e(Yd,ks),e(ks,Xg),e(R,Kg),e(R,te),_(bs,te,null),e(te,Zg),e(te,vo),e(vo,Yg),e(vo,el),e(el,ek),e(vo,tk),e(vo,tl),e(tl,ok),e(vo,nk),e(te,ak),_(rn,te,null),e(te,sk),e(te,ol),e(ol,rk),e(te,ik),_(ys,te,null),e(te,dk),e(te,nl),e(nl,lk),e(te,ck),_(vs,te,null),e(R,pk),e(R,Tt),_(Ts,Tt,null),e(Tt,hk),e(Tt,al),e(al,uk),e(Tt,mk),_(ws,Tt,null),e(R,fk),e(R,wt),_(xs,wt,null),e(wt,_k),e(wt,sl),e(sl,gk),e(wt,kk),_(zs,wt,null),u(o,Mc,h),u(o,To,h),e(To,dn),e(dn,rl),_(Fs,rl,null),e(To,bk),e(To,il),e(il,yk),u(o,Pc,h),u(o,I,h),_(Bs,I,null),e(I,vk),e(I,dl),e(dl,Tk),e(I,wk),e(I,qs),e(qs,xk),e(qs,Wr),e(Wr,zk),e(qs,Fk),e(I,Bk),e(I,$s),e($s,qk),e($s,js),e(js,$k),e($s,jk),e(I,Mk),e(I,ll),e(ll,Pk),e(I,Ek),e(I,ut),e(ut,cl),e(cl,Ms),e(Ms,Ck),e(ut,Ak),e(ut,pl),e(pl,Ps),e(Ps,Sk),e(ut,Ik),e(ut,hl),e(hl,Es),e(Es,Ok),e(ut,Nk),e(ut,ul),e(ul,Cs),e(Cs,Dk),e(I,Lk),e(I,Se),_(As,Se,null),e(Se,Gk),e(Se,wo),e(wo,Wk),e(wo,ml),e(ml,Rk),e(wo,Uk),e(wo,fl),e(fl,Hk),e(wo,Qk),e(Se,Vk),_(ln,Se,null),e(Se,Jk),e(Se,_l),e(_l,Xk),e(Se,Kk),_(Ss,Se,null),e(I,Zk),e(I,xt),_(Is,xt,null),e(xt,Yk),e(xt,gl),e(gl,eb),e(xt,tb),_(Os,xt,null),e(I,ob),e(I,zt),_(Ns,zt,null),e(zt,nb),e(zt,kl),e(kl,ab),e(zt,sb),_(Ds,zt,null),u(o,Ec,h),u(o,xo,h),e(xo,cn),e(cn,bl),_(Ls,bl,null),e(xo,rb),e(xo,yl),e(yl,ib),u(o,Cc,h),u(o,O,h),_(Gs,O,null),e(O,db),e(O,zo),e(zo,lb),e(zo,vl),e(vl,cb),e(zo,pb),e(zo,Tl),e(Tl,hb),e(zo,ub),e(O,mb),e(O,Ws),e(Ws,fb),e(Ws,Rr),e(Rr,_b),e(Ws,gb),e(O,kb),e(O,Rs),e(Rs,bb),e(Rs,Us),e(Us,yb),e(Rs,vb),e(O,Tb),e(O,wl),e(wl,wb),e(O,xb),e(O,mt),e(mt,xl),e(xl,Hs),e(Hs,zb),e(mt,Fb),e(mt,zl),e(zl,Qs),e(Qs,Bb),e(mt,qb),e(mt,Fl),e(Fl,Vs),e(Vs,$b),e(mt,jb),e(mt,Bl),e(Bl,Js),e(Js,Mb),e(O,Pb),e(O,Ie),_(Xs,Ie,null),e(Ie,Eb),e(Ie,Fo),e(Fo,Cb),e(Fo,ql),e(ql,Ab),e(Fo,Sb),e(Fo,$l),e($l,Ib),e(Fo,Ob),e(Ie,Nb),_(pn,Ie,null),e(Ie,Db),e(Ie,jl),e(jl,Lb),e(Ie,Gb),_(Ks,Ie,null),e(O,Wb),e(O,Ft),_(Zs,Ft,null),e(Ft,Rb),e(Ft,Ml),e(Ml,Ub),e(Ft,Hb),_(Ys,Ft,null),e(O,Qb),e(O,Bt),_(er,Bt,null),e(Bt,Vb),e(Bt,Pl),e(Pl,Jb),e(Bt,Xb),_(tr,Bt,null),u(o,Ac,h),u(o,Bo,h),e(Bo,hn),e(hn,El),_(or,El,null),e(Bo,Kb),e(Bo,Cl),e(Cl,Zb),u(o,Sc,h),u(o,X,h),_(nr,X,null),e(X,Yb),e(X,Al),e(Al,ey),e(X,ty),e(X,ar),e(ar,oy),e(ar,Ur),e(Ur,ny),e(ar,ay),e(X,sy),e(X,sr),e(sr,ry),e(sr,rr),e(rr,iy),e(sr,dy),e(X,ly),e(X,Sl),e(Sl,cy),e(X,py),e(X,ft),e(ft,Il),e(Il,ir),e(ir,hy),e(ft,uy),e(ft,Ol),e(Ol,dr),e(dr,my),e(ft,fy),e(ft,Nl),e(Nl,lr),e(lr,_y),e(ft,gy),e(ft,Dl),e(Dl,cr),e(cr,ky),e(X,by),e(X,Oe),_(pr,Oe,null),e(Oe,yy),e(Oe,qo),e(qo,vy),e(qo,Ll),e(Ll,Ty),e(qo,wy),e(qo,Gl),e(Gl,xy),e(qo,zy),e(Oe,Fy),_(un,Oe,null),e(Oe,By),e(Oe,Wl),e(Wl,qy),e(Oe,$y),_(hr,Oe,null),Ic=!0},p(o,[h]){const ur={};h&2&&(ur.$$scope={dirty:h,ctx:o}),Ao.$set(ur);const Rl={};h&2&&(Rl.$$scope={dirty:h,ctx:o}),Do.$set(Rl);const Ul={};h&2&&(Ul.$$scope={dirty:h,ctx:o}),Wo.$set(Ul);const Hl={};h&2&&(Hl.$$scope={dirty:h,ctx:o}),Uo.$set(Hl);const mn={};h&2&&(mn.$$scope={dirty:h,ctx:o}),Qo.$set(mn);const Ql={};h&2&&(Ql.$$scope={dirty:h,ctx:o}),Jo.$set(Ql);const Vl={};h&2&&(Vl.$$scope={dirty:h,ctx:o}),Zo.$set(Vl);const mr={};h&2&&(mr.$$scope={dirty:h,ctx:o}),Yo.$set(mr);const Jl={};h&2&&(Jl.$$scope={dirty:h,ctx:o}),tn.$set(Jl);const Xl={};h&2&&(Xl.$$scope={dirty:h,ctx:o}),on.$set(Xl);const Kl={};h&2&&(Kl.$$scope={dirty:h,ctx:o}),an.$set(Kl);const fr={};h&2&&(fr.$$scope={dirty:h,ctx:o}),rn.$set(fr);const Zl={};h&2&&(Zl.$$scope={dirty:h,ctx:o}),ln.$set(Zl);const Yl={};h&2&&(Yl.$$scope={dirty:h,ctx:o}),pn.$set(Yl);const $o={};h&2&&($o.$$scope={dirty:h,ctx:o}),un.$set($o)},i(o){Ic||(g(T.$$.fragment,o),g(se.$$.fragment,o),g(Ve.$$.fragment,o),g($n.$$.fragment,o),g(jn.$$.fragment,o),g(Mn.$$.fragment,o),g(Pn.$$.fragment,o),g(En.$$.fragment,o),g(An.$$.fragment,o),g(Sn.$$.fragment,o),g(In.$$.fragment,o),g(On.$$.fragment,o),g(Ao.$$.fragment,o),g(Ln.$$.fragment,o),g(Wn.$$.fragment,o),g(Rn.$$.fragment,o),g(Un.$$.fragment,o),g(Qn.$$.fragment,o),g(Vn.$$.fragment,o),g(Xn.$$.fragment,o),g(Do.$$.fragment,o),g(Yn.$$.fragment,o),g(ea.$$.fragment,o),g(ta.$$.fragment,o),g(sa.$$.fragment,o),g(Wo.$$.fragment,o),g(ra.$$.fragment,o),g(ia.$$.fragment,o),g(da.$$.fragment,o),g(ha.$$.fragment,o),g(Uo.$$.fragment,o),g(ua.$$.fragment,o),g(ma.$$.fragment,o),g(fa.$$.fragment,o),g(_a.$$.fragment,o),g(ya.$$.fragment,o),g(Qo.$$.fragment,o),g(va.$$.fragment,o),g(Ta.$$.fragment,o),g(wa.$$.fragment,o),g(xa.$$.fragment,o),g(qa.$$.fragment,o),g(Jo.$$.fragment,o),g($a.$$.fragment,o),g(ja.$$.fragment,o),g(Ma.$$.fragment,o),g(Pa.$$.fragment,o),g(Ea.$$.fragment,o),g(Ca.$$.fragment,o),g(Aa.$$.fragment,o),g(Zo.$$.fragment,o),g(Na.$$.fragment,o),g(Yo.$$.fragment,o),g(Da.$$.fragment,o),g(La.$$.fragment,o),g(Ga.$$.fragment,o),g(tn.$$.fragment,o),g(Ha.$$.fragment,o),g(on.$$.fragment,o),g(Qa.$$.fragment,o),g(Va.$$.fragment,o),g(Ja.$$.fragment,o),g(Xa.$$.fragment,o),g(as.$$.fragment,o),g(an.$$.fragment,o),g(ss.$$.fragment,o),g(rs.$$.fragment,o),g(is.$$.fragment,o),g(ds.$$.fragment,o),g(ls.$$.fragment,o),g(cs.$$.fragment,o),g(ps.$$.fragment,o),g(bs.$$.fragment,o),g(rn.$$.fragment,o),g(ys.$$.fragment,o),g(vs.$$.fragment,o),g(Ts.$$.fragment,o),g(ws.$$.fragment,o),g(xs.$$.fragment,o),g(zs.$$.fragment,o),g(Fs.$$.fragment,o),g(Bs.$$.fragment,o),g(As.$$.fragment,o),g(ln.$$.fragment,o),g(Ss.$$.fragment,o),g(Is.$$.fragment,o),g(Os.$$.fragment,o),g(Ns.$$.fragment,o),g(Ds.$$.fragment,o),g(Ls.$$.fragment,o),g(Gs.$$.fragment,o),g(Xs.$$.fragment,o),g(pn.$$.fragment,o),g(Ks.$$.fragment,o),g(Zs.$$.fragment,o),g(Ys.$$.fragment,o),g(er.$$.fragment,o),g(tr.$$.fragment,o),g(or.$$.fragment,o),g(nr.$$.fragment,o),g(pr.$$.fragment,o),g(un.$$.fragment,o),g(hr.$$.fragment,o),Ic=!0)},o(o){k(T.$$.fragment,o),k(se.$$.fragment,o),k(Ve.$$.fragment,o),k($n.$$.fragment,o),k(jn.$$.fragment,o),k(Mn.$$.fragment,o),k(Pn.$$.fragment,o),k(En.$$.fragment,o),k(An.$$.fragment,o),k(Sn.$$.fragment,o),k(In.$$.fragment,o),k(On.$$.fragment,o),k(Ao.$$.fragment,o),k(Ln.$$.fragment,o),k(Wn.$$.fragment,o),k(Rn.$$.fragment,o),k(Un.$$.fragment,o),k(Qn.$$.fragment,o),k(Vn.$$.fragment,o),k(Xn.$$.fragment,o),k(Do.$$.fragment,o),k(Yn.$$.fragment,o),k(ea.$$.fragment,o),k(ta.$$.fragment,o),k(sa.$$.fragment,o),k(Wo.$$.fragment,o),k(ra.$$.fragment,o),k(ia.$$.fragment,o),k(da.$$.fragment,o),k(ha.$$.fragment,o),k(Uo.$$.fragment,o),k(ua.$$.fragment,o),k(ma.$$.fragment,o),k(fa.$$.fragment,o),k(_a.$$.fragment,o),k(ya.$$.fragment,o),k(Qo.$$.fragment,o),k(va.$$.fragment,o),k(Ta.$$.fragment,o),k(wa.$$.fragment,o),k(xa.$$.fragment,o),k(qa.$$.fragment,o),k(Jo.$$.fragment,o),k($a.$$.fragment,o),k(ja.$$.fragment,o),k(Ma.$$.fragment,o),k(Pa.$$.fragment,o),k(Ea.$$.fragment,o),k(Ca.$$.fragment,o),k(Aa.$$.fragment,o),k(Zo.$$.fragment,o),k(Na.$$.fragment,o),k(Yo.$$.fragment,o),k(Da.$$.fragment,o),k(La.$$.fragment,o),k(Ga.$$.fragment,o),k(tn.$$.fragment,o),k(Ha.$$.fragment,o),k(on.$$.fragment,o),k(Qa.$$.fragment,o),k(Va.$$.fragment,o),k(Ja.$$.fragment,o),k(Xa.$$.fragment,o),k(as.$$.fragment,o),k(an.$$.fragment,o),k(ss.$$.fragment,o),k(rs.$$.fragment,o),k(is.$$.fragment,o),k(ds.$$.fragment,o),k(ls.$$.fragment,o),k(cs.$$.fragment,o),k(ps.$$.fragment,o),k(bs.$$.fragment,o),k(rn.$$.fragment,o),k(ys.$$.fragment,o),k(vs.$$.fragment,o),k(Ts.$$.fragment,o),k(ws.$$.fragment,o),k(xs.$$.fragment,o),k(zs.$$.fragment,o),k(Fs.$$.fragment,o),k(Bs.$$.fragment,o),k(As.$$.fragment,o),k(ln.$$.fragment,o),k(Ss.$$.fragment,o),k(Is.$$.fragment,o),k(Os.$$.fragment,o),k(Ns.$$.fragment,o),k(Ds.$$.fragment,o),k(Ls.$$.fragment,o),k(Gs.$$.fragment,o),k(Xs.$$.fragment,o),k(pn.$$.fragment,o),k(Ks.$$.fragment,o),k(Zs.$$.fragment,o),k(Ys.$$.fragment,o),k(er.$$.fragment,o),k(tr.$$.fragment,o),k(or.$$.fragment,o),k(nr.$$.fragment,o),k(pr.$$.fragment,o),k(un.$$.fragment,o),k(hr.$$.fragment,o),Ic=!1},d(o){t(p),o&&t(z),o&&t(y),b(T),o&&t(A),o&&t($),o&&t(Ze),o&&t(Q),b(se),o&&t(pe),o&&t(he),o&&t(D),o&&t($e),o&&t(Ye),o&&t(K),o&&t(M),o&&t(U),o&&t(ue),o&&t(Te),b(Ve),o&&t(tc),o&&t(_t),o&&t(oc),o&&t(Ht),b($n),o&&t(nc),o&&t(Me),o&&t(ac),o&&t(Xt),b(jn),o&&t(sc),o&&t(gt),o&&t(rc),b(Mn,o),o&&t(ic),o&&t(Kt),b(Pn),o&&t(dc),o&&t(we),b(En),b(An),o&&t(lc),o&&t(eo),b(Sn),o&&t(cc),o&&t(E),b(In),b(On),b(Ao),b(Ln),b(Wn),b(Rn),b(Un),o&&t(pc),o&&t(to),b(Qn),o&&t(hc),o&&t(G),b(Vn),b(Xn),b(Do),b(Yn),o&&t(uc),o&&t(oo),b(ea),o&&t(mc),o&&t(Xe),b(ta),b(sa),b(Wo),b(ra),o&&t(fc),o&&t(ao),b(ia),o&&t(_c),o&&t(Ke),b(da),b(ha),b(Uo),b(ua),b(ma),o&&t(gc),o&&t(ro),b(fa),o&&t(kc),o&&t(xe),b(_a),b(ya),b(Qo),b(va),b(Ta),o&&t(bc),o&&t(lo),b(wa),o&&t(yc),o&&t(ze),b(xa),b(qa),b(Jo),b($a),o&&t(vc),o&&t(ho),b(ja),o&&t(Tc),o&&t(uo),b(Ma),b(Pa),b(Ea),o&&t(wc),o&&t(mo),b(Ca),o&&t(xc),o&&t(Fe),b(Aa),b(Zo),b(Na),b(Yo),b(Da),o&&t(zc),o&&t(_o),b(La),o&&t(Fc),o&&t(Be),b(Ga),b(tn),b(Ha),b(on),b(Qa),b(Va),o&&t(Bc),o&&t(ko),b(Ja),o&&t(qc),o&&t(W),b(Xa),b(as),b(an),b(ss),b(rs),b(is),b(ds),b(ls),o&&t($c),o&&t(yo),b(cs),o&&t(jc),o&&t(R),b(ps),b(bs),b(rn),b(ys),b(vs),b(Ts),b(ws),b(xs),b(zs),o&&t(Mc),o&&t(To),b(Fs),o&&t(Pc),o&&t(I),b(Bs),b(As),b(ln),b(Ss),b(Is),b(Os),b(Ns),b(Ds),o&&t(Ec),o&&t(xo),b(Ls),o&&t(Cc),o&&t(O),b(Gs),b(Xs),b(pn),b(Ks),b(Zs),b(Ys),b(er),b(tr),o&&t(Ac),o&&t(Bo),b(or),o&&t(Sc),o&&t(X),b(nr),b(pr),b(un),b(hr)}}}const ex={local:"bart",sections:[{local:"overview",sections:[{local:"examples",title:"Examples"}],title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"mask-filling",title:"Mask Filling"},{local:"transformers.BartConfig",title:"BartConfig"},{local:"transformers.BartTokenizer",title:"BartTokenizer"},{local:"transformers.BartTokenizerFast",title:"BartTokenizerFast"},{local:"transformers.BartModel",title:"BartModel"},{local:"transformers.BartForConditionalGeneration",title:"BartForConditionalGeneration"},{local:"transformers.BartForSequenceClassification",title:"BartForSequenceClassification"},{local:"transformers.BartForQuestionAnswering",title:"BartForQuestionAnswering"},{local:"transformers.BartForCausalLM",title:"BartForCausalLM"},{local:"transformers.TFBartModel",title:"TFBartModel"},{local:"transformers.TFBartForConditionalGeneration",title:"TFBartForConditionalGeneration"},{local:"transformers.FlaxBartModel",title:"FlaxBartModel"},{local:"transformers.FlaxBartForConditionalGeneration",title:"FlaxBartForConditionalGeneration"},{local:"transformers.FlaxBartForSequenceClassification",title:"FlaxBartForSequenceClassification"},{local:"transformers.FlaxBartForQuestionAnswering",title:"FlaxBartForQuestionAnswering"},{local:"transformers.FlaxBartForCausalLM",title:"FlaxBartForCausalLM"}],title:"BART"};function tx(j,p,z){let{fw:y}=p;return j.$$set=w=>{"fw"in w&&z(0,y=w.fw)},[y]}class ix extends Cw{constructor(p){super();Aw(this,p,tx,Yw,Sw,{fw:0})}}export{ix as default,ex as metadata};
