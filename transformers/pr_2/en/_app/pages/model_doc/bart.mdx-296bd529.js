import{S as Lw,i as Dw,s as Gw,e as n,k as d,w as m,t as r,M as Ww,c as a,d as t,m as l,a as s,x as f,h as i,b as c,F as e,g as u,y as _,q as g,o as b,B as k,v as Uw}from"../../chunks/vendor-6b77c823.js";import{T as je}from"../../chunks/Tip-39098574.js";import{D as $}from"../../chunks/Docstring-1088f2fb.js";import{C}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Q}from"../../chunks/IconCopyLink-7a11ce68.js";function Rw(j){let p,F,v,w,x;return{c(){p=n("p"),F=r("When used with "),v=n("code"),w=r("is_split_into_words=True"),x=r(", this tokenizer will add a space before each word (even the first one).")},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"When used with "),v=a(y,"CODE",{});var q=s(v);w=i(q,"is_split_into_words=True"),q.forEach(t),x=i(y,", this tokenizer will add a space before each word (even the first one)."),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function Hw(j){let p,F,v,w,x,T,y,q;return{c(){p=n("p"),F=r("When used with "),v=n("code"),w=r("is_split_into_words=True"),x=r(", this tokenizer needs to be instantiated with "),T=n("code"),y=r("add_prefix_space=True"),q=r(".")},l(se){p=a(se,"P",{});var A=s(p);F=i(A,"When used with "),v=a(A,"CODE",{});var B=s(v);w=i(B,"is_split_into_words=True"),B.forEach(t),x=i(A,", this tokenizer needs to be instantiated with "),T=a(A,"CODE",{});var pe=s(T);y=i(pe,"add_prefix_space=True"),pe.forEach(t),q=i(A,"."),A.forEach(t)},m(se,A){u(se,p,A),e(p,F),e(p,v),e(v,w),e(p,x),e(p,T),e(T,y),e(p,q)},d(se){se&&t(p)}}}function Qw(j){let p,F,v,w,x;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function Vw(j){let p,F,v,w,x;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function Jw(j){let p,F,v,w,x;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function Xw(j){let p,F,v,w,x;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function Kw(j){let p,F,v,w,x,T,y,q,se,A,B,pe,ke,tt,ye,ve,ot,Ze,V,N,Ue,re,P,S,nt,he,ue,at,J,st,rt,L,Ce,Te,Ye,Z,ie,it,dt,X,lt,we,Re;return{c(){p=n("p"),F=r("TF 2.0 models accepts two formats as inputs:"),v=d(),w=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),q=n("li"),se=r("having all inputs as a list, tuple or dict in the first positional arguments."),A=d(),B=n("p"),pe=r("This second option is useful when using "),ke=n("code"),tt=r("tf.keras.Model.fit"),ye=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ve=n("code"),ot=r("model(inputs)"),Ze=r("."),V=d(),N=n("p"),Ue=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),re=d(),P=n("ul"),S=n("li"),nt=r("a single Tensor with "),he=n("code"),ue=r("input_ids"),at=r(" only and nothing else: "),J=n("code"),st=r("model(input_ids)"),rt=d(),L=n("li"),Ce=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Te=n("code"),Ye=r("model([input_ids, attention_mask])"),Z=r(" or "),ie=n("code"),it=r("model([input_ids, attention_mask, token_type_ids])"),dt=d(),X=n("li"),lt=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),we=n("code"),Re=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){p=a(z,"P",{});var M=s(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),v=l(z),w=a(z,"UL",{});var H=s(w);x=a(H,"LI",{});var Dt=s(x);T=i(Dt,"having all inputs as keyword arguments (like PyTorch models), or"),Dt.forEach(t),y=l(H),q=a(H,"LI",{});var He=s(q);se=i(He,"having all inputs as a list, tuple or dict in the first positional arguments."),He.forEach(t),H.forEach(t),A=l(z),B=a(z,"P",{});var de=s(B);pe=i(de,"This second option is useful when using "),ke=a(de,"CODE",{});var Gt=s(ke);tt=i(Gt,"tf.keras.Model.fit"),Gt.forEach(t),ye=i(de,` method which currently requires having all the
tensors in the first argument of the model call function: `),ve=a(de,"CODE",{});var Qe=s(ve);ot=i(Qe,"model(inputs)"),Qe.forEach(t),Ze=i(de,"."),de.forEach(t),V=l(z),N=a(z,"P",{});var Wt=s(N);Ue=i(Wt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Wt.forEach(t),re=l(z),P=a(z,"UL",{});var le=s(P);S=a(le,"LI",{});var me=s(S);nt=i(me,"a single Tensor with "),he=a(me,"CODE",{});var xe=s(he);ue=i(xe,"input_ids"),xe.forEach(t),at=i(me," only and nothing else: "),J=a(me,"CODE",{});var Me=s(J);st=i(Me,"model(input_ids)"),Me.forEach(t),me.forEach(t),rt=l(le),L=a(le,"LI",{});var ce=s(L);Ce=i(ce,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Te=a(ce,"CODE",{});var Ve=s(Te);Ye=i(Ve,"model([input_ids, attention_mask])"),Ve.forEach(t),Z=i(ce," or "),ie=a(ce,"CODE",{});var Ut=s(ie);it=i(Ut,"model([input_ids, attention_mask, token_type_ids])"),Ut.forEach(t),ce.forEach(t),dt=l(le),X=a(le,"LI",{});var Je=s(X);lt=i(Je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),we=a(Je,"CODE",{});var Rt=s(we);Re=i(Rt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Rt.forEach(t),Je.forEach(t),le.forEach(t)},m(z,M){u(z,p,M),e(p,F),u(z,v,M),u(z,w,M),e(w,x),e(x,T),e(w,y),e(w,q),e(q,se),u(z,A,M),u(z,B,M),e(B,pe),e(B,ke),e(ke,tt),e(B,ye),e(B,ve),e(ve,ot),e(B,Ze),u(z,V,M),u(z,N,M),e(N,Ue),u(z,re,M),u(z,P,M),e(P,S),e(S,nt),e(S,he),e(he,ue),e(S,at),e(S,J),e(J,st),e(P,rt),e(P,L),e(L,Ce),e(L,Te),e(Te,Ye),e(L,Z),e(L,ie),e(ie,it),e(P,dt),e(P,X),e(X,lt),e(X,we),e(we,Re)},d(z){z&&t(p),z&&t(v),z&&t(w),z&&t(A),z&&t(B),z&&t(V),z&&t(N),z&&t(re),z&&t(P)}}}function Zw(j){let p,F,v,w,x;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function Yw(j){let p,F,v,w,x,T,y,q,se,A,B,pe,ke,tt,ye,ve,ot,Ze,V,N,Ue,re,P,S,nt,he,ue,at,J,st,rt,L,Ce,Te,Ye,Z,ie,it,dt,X,lt,we,Re;return{c(){p=n("p"),F=r("TF 2.0 models accepts two formats as inputs:"),v=d(),w=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),q=n("li"),se=r("having all inputs as a list, tuple or dict in the first positional arguments."),A=d(),B=n("p"),pe=r("This second option is useful when using "),ke=n("code"),tt=r("tf.keras.Model.fit"),ye=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ve=n("code"),ot=r("model(inputs)"),Ze=r("."),V=d(),N=n("p"),Ue=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),re=d(),P=n("ul"),S=n("li"),nt=r("a single Tensor with "),he=n("code"),ue=r("input_ids"),at=r(" only and nothing else: "),J=n("code"),st=r("model(input_ids)"),rt=d(),L=n("li"),Ce=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Te=n("code"),Ye=r("model([input_ids, attention_mask])"),Z=r(" or "),ie=n("code"),it=r("model([input_ids, attention_mask, token_type_ids])"),dt=d(),X=n("li"),lt=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),we=n("code"),Re=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){p=a(z,"P",{});var M=s(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),v=l(z),w=a(z,"UL",{});var H=s(w);x=a(H,"LI",{});var Dt=s(x);T=i(Dt,"having all inputs as keyword arguments (like PyTorch models), or"),Dt.forEach(t),y=l(H),q=a(H,"LI",{});var He=s(q);se=i(He,"having all inputs as a list, tuple or dict in the first positional arguments."),He.forEach(t),H.forEach(t),A=l(z),B=a(z,"P",{});var de=s(B);pe=i(de,"This second option is useful when using "),ke=a(de,"CODE",{});var Gt=s(ke);tt=i(Gt,"tf.keras.Model.fit"),Gt.forEach(t),ye=i(de,` method which currently requires having all the
tensors in the first argument of the model call function: `),ve=a(de,"CODE",{});var Qe=s(ve);ot=i(Qe,"model(inputs)"),Qe.forEach(t),Ze=i(de,"."),de.forEach(t),V=l(z),N=a(z,"P",{});var Wt=s(N);Ue=i(Wt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Wt.forEach(t),re=l(z),P=a(z,"UL",{});var le=s(P);S=a(le,"LI",{});var me=s(S);nt=i(me,"a single Tensor with "),he=a(me,"CODE",{});var xe=s(he);ue=i(xe,"input_ids"),xe.forEach(t),at=i(me," only and nothing else: "),J=a(me,"CODE",{});var Me=s(J);st=i(Me,"model(input_ids)"),Me.forEach(t),me.forEach(t),rt=l(le),L=a(le,"LI",{});var ce=s(L);Ce=i(ce,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Te=a(ce,"CODE",{});var Ve=s(Te);Ye=i(Ve,"model([input_ids, attention_mask])"),Ve.forEach(t),Z=i(ce," or "),ie=a(ce,"CODE",{});var Ut=s(ie);it=i(Ut,"model([input_ids, attention_mask, token_type_ids])"),Ut.forEach(t),ce.forEach(t),dt=l(le),X=a(le,"LI",{});var Je=s(X);lt=i(Je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),we=a(Je,"CODE",{});var Rt=s(we);Re=i(Rt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Rt.forEach(t),Je.forEach(t),le.forEach(t)},m(z,M){u(z,p,M),e(p,F),u(z,v,M),u(z,w,M),e(w,x),e(x,T),e(w,y),e(w,q),e(q,se),u(z,A,M),u(z,B,M),e(B,pe),e(B,ke),e(ke,tt),e(B,ye),e(B,ve),e(ve,ot),e(B,Ze),u(z,V,M),u(z,N,M),e(N,Ue),u(z,re,M),u(z,P,M),e(P,S),e(S,nt),e(S,he),e(he,ue),e(S,at),e(S,J),e(J,st),e(P,rt),e(P,L),e(L,Ce),e(L,Te),e(Te,Ye),e(L,Z),e(L,ie),e(ie,it),e(P,dt),e(P,X),e(X,lt),e(X,we),e(we,Re)},d(z){z&&t(p),z&&t(v),z&&t(w),z&&t(A),z&&t(B),z&&t(V),z&&t(N),z&&t(re),z&&t(P)}}}function e1(j){let p,F,v,w,x;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function t1(j){let p,F,v,w,x;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function o1(j){let p,F,v,w,x;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function n1(j){let p,F,v,w,x;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function a1(j){let p,F,v,w,x;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function s1(j){let p,F,v,w,x;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=a(T,"P",{});var y=s(p);F=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,p,y),e(p,F),e(p,v),e(v,w),e(p,x)},d(T){T&&t(p)}}}function r1(j){let p,F,v,w,x,T,y,q,se,A,B,pe,ke,tt,ye,ve,ot,Ze,V,N,Ue,re,P,S,nt,he,ue,at,J,st,rt,L,Ce,Te,Ye,Z,ie,it,dt,X,lt,we,Re,z,M,H,Dt,He,de,Gt,Qe,Wt,le,me,xe,Me,ce,Ve,Ut,Je,Rt,ac,gt,xn,Lp,Fn,Dp,Gp,Wp,ct,Up,kr,Rp,Hp,zi,Qp,Vp,zn,Jp,Xp,Kp,jo,qn,Zp,Yp,$n,eh,th,sc,Ht,Co,qi,Bn,oh,$i,nh,rc,Ee,pt,ah,Bi,sh,rh,yr,ih,dh,vr,lh,ch,ph,Qt,hh,Tr,uh,mh,ji,fh,_h,gh,Vt,bh,Ci,kh,yh,Mi,vh,Th,wh,wr,xr,xh,Fh,zh,Jt,qh,Ei,$h,Bh,Pi,jh,Ch,ic,Xt,Mo,Ai,jn,Mh,Si,Eh,dc,bt,Ph,Oi,Ah,Sh,Ii,Oh,Ih,lc,Cn,cc,Kt,Eo,Ni,Mn,Nh,Li,Lh,pc,Fe,En,Dh,Zt,Gh,Fr,Wh,Uh,Pn,Rh,Hh,Qh,Yt,Vh,zr,Jh,Xh,qr,Kh,Zh,Yh,Di,eu,tu,An,hc,eo,Po,Gi,Sn,ou,Wi,nu,uc,E,On,au,Ui,su,ru,Ri,iu,du,In,lu,Nn,cu,Hi,pu,hu,uu,Ao,mu,Ln,fu,$r,_u,gu,bu,kt,Dn,ku,Qi,yu,vu,Gn,Br,Tu,Vi,wu,xu,jr,Fu,Ji,zu,qu,So,Wn,$u,Xi,Bu,ju,Oo,Un,Cu,Ki,Mu,Eu,Io,Rn,Pu,Hn,Au,Zi,Su,Ou,mc,to,No,Yi,Qn,Iu,ed,Nu,fc,W,Vn,Lu,Jn,Du,td,Gu,Wu,Uu,od,Ru,Hu,Xn,Qu,Kn,Vu,nd,Ju,Xu,Ku,Lo,Zu,Zn,Yu,Cr,em,tm,om,Do,Yn,nm,ad,am,_c,oo,Go,sd,ea,sm,rd,rm,gc,Xe,ta,im,oa,dm,Mr,lm,cm,pm,na,hm,aa,um,mm,fm,Pe,sa,_m,no,gm,Er,bm,km,id,ym,vm,Tm,Wo,wm,dd,xm,Fm,ra,bc,ao,Uo,ld,ia,zm,cd,qm,kc,Ke,da,$m,la,Bm,Pr,jm,Cm,Mm,ca,Em,pa,Pm,Am,Sm,Y,ha,Om,so,Im,Ar,Nm,Lm,pd,Dm,Gm,Wm,Ro,Um,hd,Rm,Hm,ua,Qm,ud,Vm,Jm,ma,yc,ro,Ho,md,fa,Xm,fd,Km,vc,ze,_a,Zm,_d,Ym,ef,ga,tf,Sr,of,nf,af,ba,sf,ka,rf,df,lf,D,ya,cf,io,pf,Or,hf,uf,gd,mf,ff,_f,Qo,gf,bd,bf,kf,va,yf,Ta,vf,kd,Tf,wf,wa,xf,xa,Tc,lo,Vo,yd,Fa,Ff,vd,zf,wc,qe,za,qf,co,$f,Td,Bf,jf,wd,Cf,Mf,Ef,qa,Pf,Ir,Af,Sf,Of,$a,If,Ba,Nf,Lf,Df,fe,ja,Gf,po,Wf,Nr,Uf,Rf,xd,Hf,Qf,Vf,Jo,Jf,Fd,Xf,Kf,Ca,Zf,Ma,xc,ho,Xo,zd,Ea,Yf,qd,e_,Fc,uo,Pa,t_,yt,Aa,o_,$d,n_,a_,Sa,zc,mo,Ko,Bd,Oa,s_,jd,r_,qc,$e,Ia,i_,Na,d_,Lr,l_,c_,p_,La,h_,Da,u_,m_,f_,Zo,__,Ae,Ga,g_,fo,b_,Dr,k_,y_,Cd,v_,T_,w_,Yo,x_,Md,F_,z_,Wa,$c,_o,en,Ed,Ua,q_,Pd,$_,Bc,Be,Ra,B_,Ha,j_,Gr,C_,M_,E_,Qa,P_,Va,A_,S_,O_,tn,I_,ee,Ja,N_,go,L_,Wr,D_,G_,Ad,W_,U_,R_,on,H_,Sd,Q_,V_,Xa,J_,Od,X_,K_,Ka,jc,bo,nn,Id,Za,Z_,Nd,Y_,Cc,U,Ya,eg,es,tg,Ur,og,ng,ag,ts,sg,os,rg,ig,dg,Ld,lg,cg,ht,Dd,ns,pg,hg,Gd,as,ug,mg,Wd,ss,fg,_g,Ud,rs,gg,bg,Se,is,kg,ko,yg,Rd,vg,Tg,Hd,wg,xg,Fg,an,zg,Qd,qg,$g,ds,Bg,vt,ls,jg,Vd,Cg,Mg,cs,Eg,Tt,ps,Pg,Jd,Ag,Sg,hs,Mc,yo,sn,Xd,us,Og,Kd,Ig,Ec,R,ms,Ng,fs,Lg,Rr,Dg,Gg,Wg,_s,Ug,gs,Rg,Hg,Qg,Zd,Vg,Jg,ut,Yd,bs,Xg,Kg,el,ks,Zg,Yg,tl,ys,eb,tb,ol,vs,ob,nb,te,Ts,ab,vo,sb,nl,rb,ib,al,db,lb,cb,rn,pb,sl,hb,ub,ws,mb,rl,fb,_b,xs,gb,wt,Fs,bb,il,kb,yb,zs,vb,xt,qs,Tb,dl,wb,xb,$s,Pc,To,dn,ll,Bs,Fb,cl,zb,Ac,O,js,qb,pl,$b,Bb,Cs,jb,Hr,Cb,Mb,Eb,Ms,Pb,Es,Ab,Sb,Ob,hl,Ib,Nb,mt,ul,Ps,Lb,Db,ml,As,Gb,Wb,fl,Ss,Ub,Rb,_l,Os,Hb,Qb,Oe,Is,Vb,wo,Jb,gl,Xb,Kb,bl,Zb,Yb,ek,ln,tk,kl,ok,nk,Ns,ak,Ft,Ls,sk,yl,rk,ik,Ds,dk,zt,Gs,lk,vl,ck,pk,Ws,Sc,xo,cn,Tl,Us,hk,wl,uk,Oc,I,Rs,mk,Fo,fk,xl,_k,gk,Fl,bk,kk,yk,Hs,vk,Qr,Tk,wk,xk,Qs,Fk,Vs,zk,qk,$k,zl,Bk,jk,ft,ql,Js,Ck,Mk,$l,Xs,Ek,Pk,Bl,Ks,Ak,Sk,jl,Zs,Ok,Ik,Ie,Ys,Nk,zo,Lk,Cl,Dk,Gk,Ml,Wk,Uk,Rk,pn,Hk,El,Qk,Vk,er,Jk,qt,tr,Xk,Pl,Kk,Zk,or,Yk,$t,nr,ey,Al,ty,oy,ar,Ic,qo,hn,Sl,sr,ny,Ol,ay,Nc,K,rr,sy,Il,ry,iy,ir,dy,Vr,ly,cy,py,dr,hy,lr,uy,my,fy,Nl,_y,gy,_t,Ll,cr,by,ky,Dl,pr,yy,vy,Gl,hr,Ty,wy,Wl,ur,xy,Fy,Ne,mr,zy,$o,qy,Ul,$y,By,Rl,jy,Cy,My,un,Ey,Hl,Py,Ay,fr,Lc;return T=new Q({}),re=new Q({}),Ve=new Q({}),Bn=new Q({}),jn=new Q({}),Cn=new C({props:{code:`from transformers import BartForConditionalGeneration, BartTokenizer

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
]`}}),Mn=new Q({}),En=new $({props:{name:"class transformers.BartConfig",anchor:"transformers.BartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"use_cache",val:" = True"},{name:"num_labels",val:" = 3"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"is_encoder_decoder",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartModel">BartModel</a> or <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.TFBartModel">TFBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.BartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
The number of labels to use in <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartForSequenceClassification">BartForSequenceClassification</a>.`,name:"use_cache"},{anchor:"transformers.BartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/configuration_bart.py#L35"}}),An=new C({props:{code:`from transformers import BartModel, BartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Sn=new Q({}),On=new $({props:{name:"class transformers.BartTokenizer",anchor:"transformers.BartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/tokenization_bart.py#L101"}}),In=new C({props:{code:`from transformers import BartTokenizer
tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),Ao=new je({props:{$$slots:{default:[Rw]},$$scope:{ctx:j}}}),Dn=new $({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/tokenization_bart.py#L338",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Wn=new $({props:{name:"convert_tokens_to_string",anchor:"transformers.BartTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/tokenization_bart.py#L303"}}),Un=new $({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/tokenization_bart.py#L390",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rn=new $({props:{name:"get_special_tokens_mask",anchor:"transformers.BartTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/tokenization_bart.py#L363",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qn=new Q({}),Vn=new $({props:{name:"class transformers.BartTokenizerFast",anchor:"transformers.BartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/tokenization_bart_fast.py#L70"}}),Xn=new C({props:{code:`from transformers import BartTokenizerFast
tokenizer = BartTokenizerFast.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),Lo=new je({props:{$$slots:{default:[Hw]},$$scope:{ctx:j}}}),Yn=new $({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/tokenization_bart_fast.py#L282",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ea=new Q({}),ta=new $({props:{name:"class transformers.BartModel",anchor:"transformers.BartModel",parameters:[{name:"config",val:": BartConfig"}],parametersDescription:[{anchor:"transformers.BartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_bart.py#L1141"}}),sa=new $({props:{name:"forward",anchor:"transformers.BartModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_bart.py#L1168",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
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
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wo=new je({props:{$$slots:{default:[Qw]},$$scope:{ctx:j}}}),ra=new C({props:{code:`from transformers import BartTokenizer, BartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ia=new Q({}),da=new $({props:{name:"class transformers.BartForConditionalGeneration",anchor:"transformers.BartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"}],parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_bart.py#L1268"}}),ha=new $({props:{name:"forward",anchor:"transformers.BartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_bart.py#L1307",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new je({props:{$$slots:{default:[Vw]},$$scope:{ctx:j}}}),ua=new C({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

model = BartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

ARTICLE_TO_SUMMARIZE = (
    "PG&E stated it scheduled the blackouts in response to forecasts for high winds "
    "amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were "
    "scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."
)
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="pt")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=2, min_length=0, max_length=20)
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
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">2</span>, min_length=<span class="hljs-number">0</span>, max_length=<span class="hljs-number">20</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;PG&amp;E scheduled the blackouts in response to forecasts for high winds amid dry conditions&#x27;</span>`}}),ma=new C({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

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
[<span class="hljs-string">&#x27;not&#x27;</span>, <span class="hljs-string">&#x27;good&#x27;</span>, <span class="hljs-string">&#x27;healthy&#x27;</span>, <span class="hljs-string">&#x27;great&#x27;</span>, <span class="hljs-string">&#x27;very&#x27;</span>]`}}),fa=new Q({}),_a=new $({props:{name:"class transformers.BartForSequenceClassification",anchor:"transformers.BartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_bart.py#L1437"}}),ya=new $({props:{name:"forward",anchor:"transformers.BartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_bart.py#L1450",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qo=new je({props:{$$slots:{default:[Jw]},$$scope:{ctx:j}}}),va=new C({props:{code:`import torch
from transformers import BartTokenizer, BartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("valhalla/bart-large-sst2")
model = BartForSequenceClassification.from_pretrained("valhalla/bart-large-sst2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;valhalla/bart-large-sst2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;valhalla/bart-large-sst2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;POSITIVE&#x27;</span>`}}),Ta=new C({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BartForSequenceClassification.from_pretrained("valhalla/bart-large-sst2", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;valhalla/bart-large-sst2&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.0</span>`}}),wa=new C({props:{code:`import torch
from transformers import BartTokenizer, BartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("valhalla/bart-large-sst2")
model = BartForSequenceClassification.from_pretrained("valhalla/bart-large-sst2", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;valhalla/bart-large-sst2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;valhalla/bart-large-sst2&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;POSITIVE&#x27;</span>`}}),xa=new C({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BartForSequenceClassification.from_pretrained(
    "valhalla/bart-large-sst2", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;valhalla/bart-large-sst2&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),Fa=new Q({}),za=new $({props:{name:"class transformers.BartForQuestionAnswering",anchor:"transformers.BartForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_bart.py#L1564"}}),ja=new $({props:{name:"forward",anchor:"transformers.BartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_bart.py#L1576",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jo=new je({props:{$$slots:{default:[Xw]},$$scope:{ctx:j}}}),Ca=new C({props:{code:`from transformers import BartTokenizer, BartForQuestionAnswering
import torch

tokenizer = BartTokenizer.from_pretrained("valhalla/bart-large-finetuned-squadv1")
model = BartForQuestionAnswering.from_pretrained("valhalla/bart-large-finetuned-squadv1")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;valhalla/bart-large-finetuned-squadv1&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;valhalla/bart-large-finetuned-squadv1&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; nice puppet&#x27;</span>`}}),Ma=new C({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.59</span>`}}),Ea=new Q({}),Pa=new $({props:{name:"class transformers.BartForCausalLM",anchor:"transformers.BartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_bart.py#L1694"}}),Aa=new $({props:{name:"forward",anchor:"transformers.BartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_bart.py#L1725",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sa=new C({props:{code:`from transformers import BartTokenizer, BartForCausalLM

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
<span class="hljs-literal">True</span>`}}),Oa=new Q({}),Ia=new $({props:{name:"class transformers.TFBartModel",anchor:"transformers.TFBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_tf_bart.py#L1127"}}),Zo=new je({props:{$$slots:{default:[Kw]},$$scope:{ctx:j}}}),Ga=new $({props:{name:"call",anchor:"transformers.TFBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_tf_bart.py#L1142",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yo=new je({props:{$$slots:{default:[Zw]},$$scope:{ctx:j}}}),Wa=new C({props:{code:`from transformers import BartTokenizer, TFBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ua=new Q({}),Ra=new $({props:{name:"class transformers.TFBartForConditionalGeneration",anchor:"transformers.TFBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_tf_bart.py#L1216"}}),tn=new je({props:{$$slots:{default:[Yw]},$$scope:{ctx:j}}}),Ja=new $({props:{name:"call",anchor:"transformers.TFBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_tf_bart.py#L1251",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),on=new je({props:{$$slots:{default:[e1]},$$scope:{ctx:j}}}),Xa=new C({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Ka=new C({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),Za=new Q({}),Ya=new $({props:{name:"class transformers.FlaxBartModel",anchor:"transformers.FlaxBartModel",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_flax_bart.py#L1241"}}),is=new $({props:{name:"__call__",anchor:"transformers.FlaxBartModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_flax_bart.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),an=new je({props:{$$slots:{default:[t1]},$$scope:{ctx:j}}}),ds=new C({props:{code:`from transformers import BartTokenizer, FlaxBartModel

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartModel.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ls=new $({props:{name:"encode",anchor:"transformers.FlaxBartModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_flax_bart.py#L999",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),cs=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),ps=new $({props:{name:"decode",anchor:"transformers.FlaxBartModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_flax_bart.py#L1062",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hs=new C({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),us=new Q({}),ms=new $({props:{name:"class transformers.FlaxBartForConditionalGeneration",anchor:"transformers.FlaxBartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_flax_bart.py#L1327"}}),Ts=new $({props:{name:"__call__",anchor:"transformers.FlaxBartForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_flax_bart.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rn=new je({props:{$$slots:{default:[o1]},$$scope:{ctx:j}}}),ws=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),xs=new C({props:{code:`import jax
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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),Fs=new $({props:{name:"encode",anchor:"transformers.FlaxBartForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_flax_bart.py#L999",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zs=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),qs=new $({props:{name:"decode",anchor:"transformers.FlaxBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_flax_bart.py#L1331",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$s=new C({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Bs=new Q({}),js=new $({props:{name:"class transformers.FlaxBartForSequenceClassification",anchor:"transformers.FlaxBartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_flax_bart.py#L1640"}}),Is=new $({props:{name:"__call__",anchor:"transformers.FlaxBartForSequenceClassification.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_flax_bart.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ln=new je({props:{$$slots:{default:[n1]},$$scope:{ctx:j}}}),Ns=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForSequenceClassification.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ls=new $({props:{name:"encode",anchor:"transformers.FlaxBartForSequenceClassification.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForSequenceClassification.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForSequenceClassification.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForSequenceClassification.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_flax_bart.py#L999",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ds=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Gs=new $({props:{name:"decode",anchor:"transformers.FlaxBartForSequenceClassification.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_flax_bart.py#L1062",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ws=new C({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Us=new Q({}),Rs=new $({props:{name:"class transformers.FlaxBartForQuestionAnswering",anchor:"transformers.FlaxBartForQuestionAnswering",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_flax_bart.py#L1727"}}),Ys=new $({props:{name:"__call__",anchor:"transformers.FlaxBartForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_flax_bart.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pn=new je({props:{$$slots:{default:[a1]},$$scope:{ctx:j}}}),er=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),tr=new $({props:{name:"encode",anchor:"transformers.FlaxBartForQuestionAnswering.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForQuestionAnswering.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForQuestionAnswering.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForQuestionAnswering.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_flax_bart.py#L999",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),or=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),nr=new $({props:{name:"decode",anchor:"transformers.FlaxBartForQuestionAnswering.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_flax_bart.py#L1062",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ar=new C({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),sr=new Q({}),rr=new $({props:{name:"class transformers.FlaxBartForCausalLM",anchor:"transformers.FlaxBartForCausalLM",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_flax_bart.py#L1964"}}),mr=new $({props:{name:"__call__",anchor:"transformers.FlaxBartForCausalLM.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForCausalLM.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForCausalLM.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartForCausalLM.__call__.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartForCausalLM.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForCausalLM.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForCausalLM.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartForCausalLM.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForCausalLM.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_2/src/transformers/models/bart/modeling_flax_bart.py#L1802",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/pr_2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),un=new je({props:{$$slots:{default:[s1]},$$scope:{ctx:j}}}),fr=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){p=n("meta"),F=d(),v=n("h1"),w=n("a"),x=n("span"),m(T.$$.fragment),y=d(),q=n("span"),se=r("BART"),A=d(),B=n("p"),pe=n("strong"),ke=r("DISCLAIMER:"),tt=r(" If you see something strange, file a "),ye=n("a"),ve=r("Github Issue"),ot=r(` and assign
@patrickvonplaten`),Ze=d(),V=n("h2"),N=n("a"),Ue=n("span"),m(re.$$.fragment),P=d(),S=n("span"),nt=r("Overview"),he=d(),ue=n("p"),at=r("The Bart model was proposed in "),J=n("a"),st=r(`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),rt=r(` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),L=d(),Ce=n("p"),Te=r("According to the abstract,"),Ye=d(),Z=n("ul"),ie=n("li"),it=r(`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),dt=d(),X=n("li"),lt=r(`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),we=d(),Re=n("li"),z=r(`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),M=d(),H=n("p"),Dt=r("This model was contributed by "),He=n("a"),de=r("sshleifer"),Gt=r(". The Authors\u2019 code can be found "),Qe=n("a"),Wt=r("here"),le=r("."),me=d(),xe=n("h3"),Me=n("a"),ce=n("span"),m(Ve.$$.fragment),Ut=d(),Je=n("span"),Rt=r("Examples"),ac=d(),gt=n("ul"),xn=n("li"),Lp=r(`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),Fn=n("a"),Dp=r("examples/pytorch/summarization/"),Gp=r("."),Wp=d(),ct=n("li"),Up=r("An example of how to train "),kr=n("a"),Rp=r("BartForConditionalGeneration"),Hp=r(" with a Hugging Face "),zi=n("code"),Qp=r("datasets"),Vp=r(`
object can be found in this `),zn=n("a"),Jp=r("forum discussion"),Xp=r("."),Kp=d(),jo=n("li"),qn=n("a"),Zp=r("Distilled checkpoints"),Yp=r(" are described in this "),$n=n("a"),eh=r("paper"),th=r("."),sc=d(),Ht=n("h2"),Co=n("a"),qi=n("span"),m(Bn.$$.fragment),oh=d(),$i=n("span"),nh=r("Implementation Notes"),rc=d(),Ee=n("ul"),pt=n("li"),ah=r("Bart doesn\u2019t use "),Bi=n("code"),sh=r("token_type_ids"),rh=r(" for sequence classification. Use "),yr=n("a"),ih=r("BartTokenizer"),dh=r(` or
`),vr=n("a"),lh=r("encode()"),ch=r(" to get the proper splitting."),ph=d(),Qt=n("li"),hh=r("The forward pass of "),Tr=n("a"),uh=r("BartModel"),mh=r(" will create the "),ji=n("code"),fh=r("decoder_input_ids"),_h=r(` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),gh=d(),Vt=n("li"),bh=r(`Model predictions are intended to be identical to the original implementation when
`),Ci=n("code"),kh=r("forced_bos_token_id=0"),yh=r(`. This only works, however, if the string you pass to
`),Mi=n("code"),vh=r("fairseq.encode"),Th=r(" starts with a space."),wh=d(),wr=n("li"),xr=n("a"),xh=r("generate()"),Fh=r(` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),zh=d(),Jt=n("li"),qh=r("Models that load the "),Ei=n("em"),$h=r("facebook/bart-large-cnn"),Bh=r(" weights will not have a "),Pi=n("code"),jh=r("mask_token_id"),Ch=r(`, or be able to perform
mask-filling tasks.`),ic=d(),Xt=n("h2"),Mo=n("a"),Ai=n("span"),m(jn.$$.fragment),Mh=d(),Si=n("span"),Eh=r("Mask Filling"),dc=d(),bt=n("p"),Ph=r("The "),Oi=n("code"),Ah=r("facebook/bart-base"),Sh=r(" and "),Ii=n("code"),Oh=r("facebook/bart-large"),Ih=r(" checkpoints can be used to fill multi-token masks."),lc=d(),m(Cn.$$.fragment),cc=d(),Kt=n("h2"),Eo=n("a"),Ni=n("span"),m(Mn.$$.fragment),Nh=d(),Li=n("span"),Lh=r("BartConfig"),pc=d(),Fe=n("div"),m(En.$$.fragment),Dh=d(),Zt=n("p"),Gh=r("This is the configuration class to store the configuration of a "),Fr=n("a"),Wh=r("BartModel"),Uh=r(`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),Pn=n("a"),Rh=r("facebook/bart-large"),Hh=r(" architecture."),Qh=d(),Yt=n("p"),Vh=r("Configuration objects inherit from "),zr=n("a"),Jh=r("PretrainedConfig"),Xh=r(` and can be used to control the model outputs. Read the
documentation from `),qr=n("a"),Kh=r("PretrainedConfig"),Zh=r(" for more information."),Yh=d(),Di=n("p"),eu=r("Example:"),tu=d(),m(An.$$.fragment),hc=d(),eo=n("h2"),Po=n("a"),Gi=n("span"),m(Sn.$$.fragment),ou=d(),Wi=n("span"),nu=r("BartTokenizer"),uc=d(),E=n("div"),m(On.$$.fragment),au=d(),Ui=n("p"),su=r("Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),ru=d(),Ri=n("p"),iu=r(`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),du=d(),m(In.$$.fragment),lu=d(),Nn=n("p"),cu=r("You can get around that behavior by passing "),Hi=n("code"),pu=r("add_prefix_space=True"),hu=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),uu=d(),m(Ao.$$.fragment),mu=d(),Ln=n("p"),fu=r("This tokenizer inherits from "),$r=n("a"),_u=r("PreTrainedTokenizer"),gu=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),bu=d(),kt=n("div"),m(Dn.$$.fragment),ku=d(),Qi=n("p"),yu=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),vu=d(),Gn=n("ul"),Br=n("li"),Tu=r("single sequence: "),Vi=n("code"),wu=r("<s> X </s>"),xu=d(),jr=n("li"),Fu=r("pair of sequences: "),Ji=n("code"),zu=r("<s> A </s></s> B </s>"),qu=d(),So=n("div"),m(Wn.$$.fragment),$u=d(),Xi=n("p"),Bu=r("Converts a sequence of tokens (string) in a single string."),ju=d(),Oo=n("div"),m(Un.$$.fragment),Cu=d(),Ki=n("p"),Mu=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Eu=d(),Io=n("div"),m(Rn.$$.fragment),Pu=d(),Hn=n("p"),Au=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Zi=n("code"),Su=r("prepare_for_model"),Ou=r(" method."),mc=d(),to=n("h2"),No=n("a"),Yi=n("span"),m(Qn.$$.fragment),Iu=d(),ed=n("span"),Nu=r("BartTokenizerFast"),fc=d(),W=n("div"),m(Vn.$$.fragment),Lu=d(),Jn=n("p"),Du=r("Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),td=n("em"),Gu=r("tokenizers"),Wu=r(` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),Uu=d(),od=n("p"),Ru=r(`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),Hu=d(),m(Xn.$$.fragment),Qu=d(),Kn=n("p"),Vu=r("You can get around that behavior by passing "),nd=n("code"),Ju=r("add_prefix_space=True"),Xu=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Ku=d(),m(Lo.$$.fragment),Zu=d(),Zn=n("p"),Yu=r("This tokenizer inherits from "),Cr=n("a"),em=r("PreTrainedTokenizerFast"),tm=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),om=d(),Do=n("div"),m(Yn.$$.fragment),nm=d(),ad=n("p"),am=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),_c=d(),oo=n("h2"),Go=n("a"),sd=n("span"),m(ea.$$.fragment),sm=d(),rd=n("span"),rm=r("BartModel"),gc=d(),Xe=n("div"),m(ta.$$.fragment),im=d(),oa=n("p"),dm=r(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mr=n("a"),lm=r("PreTrainedModel"),cm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pm=d(),na=n("p"),hm=r("This model is also a PyTorch "),aa=n("a"),um=r("torch.nn.Module"),mm=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fm=d(),Pe=n("div"),m(sa.$$.fragment),_m=d(),no=n("p"),gm=r("The "),Er=n("a"),bm=r("BartModel"),km=r(" forward method, overrides the "),id=n("code"),ym=r("__call__"),vm=r(" special method."),Tm=d(),m(Wo.$$.fragment),wm=d(),dd=n("p"),xm=r("Example:"),Fm=d(),m(ra.$$.fragment),bc=d(),ao=n("h2"),Uo=n("a"),ld=n("span"),m(ia.$$.fragment),zm=d(),cd=n("span"),qm=r("BartForConditionalGeneration"),kc=d(),Ke=n("div"),m(da.$$.fragment),$m=d(),la=n("p"),Bm=r(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Pr=n("a"),jm=r("PreTrainedModel"),Cm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mm=d(),ca=n("p"),Em=r("This model is also a PyTorch "),pa=n("a"),Pm=r("torch.nn.Module"),Am=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sm=d(),Y=n("div"),m(ha.$$.fragment),Om=d(),so=n("p"),Im=r("The "),Ar=n("a"),Nm=r("BartForConditionalGeneration"),Lm=r(" forward method, overrides the "),pd=n("code"),Dm=r("__call__"),Gm=r(" special method."),Wm=d(),m(Ro.$$.fragment),Um=d(),hd=n("p"),Rm=r("Summarization example:"),Hm=d(),m(ua.$$.fragment),Qm=d(),ud=n("p"),Vm=r("Mask filling example:"),Jm=d(),m(ma.$$.fragment),yc=d(),ro=n("h2"),Ho=n("a"),md=n("span"),m(fa.$$.fragment),Xm=d(),fd=n("span"),Km=r("BartForSequenceClassification"),vc=d(),ze=n("div"),m(_a.$$.fragment),Zm=d(),_d=n("p"),Ym=r(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),ef=d(),ga=n("p"),tf=r("This model inherits from "),Sr=n("a"),of=r("PreTrainedModel"),nf=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),af=d(),ba=n("p"),sf=r("This model is also a PyTorch "),ka=n("a"),rf=r("torch.nn.Module"),df=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lf=d(),D=n("div"),m(ya.$$.fragment),cf=d(),io=n("p"),pf=r("The "),Or=n("a"),hf=r("BartForSequenceClassification"),uf=r(" forward method, overrides the "),gd=n("code"),mf=r("__call__"),ff=r(" special method."),_f=d(),m(Qo.$$.fragment),gf=d(),bd=n("p"),bf=r("Example of single-label classification:"),kf=d(),m(va.$$.fragment),yf=d(),m(Ta.$$.fragment),vf=d(),kd=n("p"),Tf=r("Example of multi-label classification:"),wf=d(),m(wa.$$.fragment),xf=d(),m(xa.$$.fragment),Tc=d(),lo=n("h2"),Vo=n("a"),yd=n("span"),m(Fa.$$.fragment),Ff=d(),vd=n("span"),zf=r("BartForQuestionAnswering"),wc=d(),qe=n("div"),m(za.$$.fragment),qf=d(),co=n("p"),$f=r(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Td=n("code"),Bf=r("span start logits"),jf=r(" and "),wd=n("code"),Cf=r("span end logits"),Mf=r(")."),Ef=d(),qa=n("p"),Pf=r("This model inherits from "),Ir=n("a"),Af=r("PreTrainedModel"),Sf=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Of=d(),$a=n("p"),If=r("This model is also a PyTorch "),Ba=n("a"),Nf=r("torch.nn.Module"),Lf=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Df=d(),fe=n("div"),m(ja.$$.fragment),Gf=d(),po=n("p"),Wf=r("The "),Nr=n("a"),Uf=r("BartForQuestionAnswering"),Rf=r(" forward method, overrides the "),xd=n("code"),Hf=r("__call__"),Qf=r(" special method."),Vf=d(),m(Jo.$$.fragment),Jf=d(),Fd=n("p"),Xf=r("Example:"),Kf=d(),m(Ca.$$.fragment),Zf=d(),m(Ma.$$.fragment),xc=d(),ho=n("h2"),Xo=n("a"),zd=n("span"),m(Ea.$$.fragment),Yf=d(),qd=n("span"),e_=r("BartForCausalLM"),Fc=d(),uo=n("div"),m(Pa.$$.fragment),t_=d(),yt=n("div"),m(Aa.$$.fragment),o_=d(),$d=n("p"),n_=r("Example:"),a_=d(),m(Sa.$$.fragment),zc=d(),mo=n("h2"),Ko=n("a"),Bd=n("span"),m(Oa.$$.fragment),s_=d(),jd=n("span"),r_=r("TFBartModel"),qc=d(),$e=n("div"),m(Ia.$$.fragment),i_=d(),Na=n("p"),d_=r(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Lr=n("a"),l_=r("TFPreTrainedModel"),c_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),p_=d(),La=n("p"),h_=r("This model is also a "),Da=n("a"),u_=r("tf.keras.Model"),m_=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),f_=d(),m(Zo.$$.fragment),__=d(),Ae=n("div"),m(Ga.$$.fragment),g_=d(),fo=n("p"),b_=r("The "),Dr=n("a"),k_=r("TFBartModel"),y_=r(" forward method, overrides the "),Cd=n("code"),v_=r("__call__"),T_=r(" special method."),w_=d(),m(Yo.$$.fragment),x_=d(),Md=n("p"),F_=r("Example:"),z_=d(),m(Wa.$$.fragment),$c=d(),_o=n("h2"),en=n("a"),Ed=n("span"),m(Ua.$$.fragment),q_=d(),Pd=n("span"),$_=r("TFBartForConditionalGeneration"),Bc=d(),Be=n("div"),m(Ra.$$.fragment),B_=d(),Ha=n("p"),j_=r(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Gr=n("a"),C_=r("TFPreTrainedModel"),M_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),E_=d(),Qa=n("p"),P_=r("This model is also a "),Va=n("a"),A_=r("tf.keras.Model"),S_=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),O_=d(),m(tn.$$.fragment),I_=d(),ee=n("div"),m(Ja.$$.fragment),N_=d(),go=n("p"),L_=r("The "),Wr=n("a"),D_=r("TFBartForConditionalGeneration"),G_=r(" forward method, overrides the "),Ad=n("code"),W_=r("__call__"),U_=r(" special method."),R_=d(),m(on.$$.fragment),H_=d(),Sd=n("p"),Q_=r("Summarization example:"),V_=d(),m(Xa.$$.fragment),J_=d(),Od=n("p"),X_=r("Mask filling example:"),K_=d(),m(Ka.$$.fragment),jc=d(),bo=n("h2"),nn=n("a"),Id=n("span"),m(Za.$$.fragment),Z_=d(),Nd=n("span"),Y_=r("FlaxBartModel"),Cc=d(),U=n("div"),m(Ya.$$.fragment),eg=d(),es=n("p"),tg=r(`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ur=n("a"),og=r("FlaxPreTrainedModel"),ng=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ag=d(),ts=n("p"),sg=r(`This model is also a Flax Linen
`),os=n("a"),rg=r("flax.nn.Module"),ig=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),dg=d(),Ld=n("p"),lg=r("Finally, this model supports inherent JAX features such as:"),cg=d(),ht=n("ul"),Dd=n("li"),ns=n("a"),pg=r("Just-In-Time (JIT) compilation"),hg=d(),Gd=n("li"),as=n("a"),ug=r("Automatic Differentiation"),mg=d(),Wd=n("li"),ss=n("a"),fg=r("Vectorization"),_g=d(),Ud=n("li"),rs=n("a"),gg=r("Parallelization"),bg=d(),Se=n("div"),m(is.$$.fragment),kg=d(),ko=n("p"),yg=r("The "),Rd=n("code"),vg=r("FlaxBartPreTrainedModel"),Tg=r(" forward method, overrides the "),Hd=n("code"),wg=r("__call__"),xg=r(" special method."),Fg=d(),m(an.$$.fragment),zg=d(),Qd=n("p"),qg=r("Example:"),$g=d(),m(ds.$$.fragment),Bg=d(),vt=n("div"),m(ls.$$.fragment),jg=d(),Vd=n("p"),Cg=r("Example:"),Mg=d(),m(cs.$$.fragment),Eg=d(),Tt=n("div"),m(ps.$$.fragment),Pg=d(),Jd=n("p"),Ag=r("Example:"),Sg=d(),m(hs.$$.fragment),Mc=d(),yo=n("h2"),sn=n("a"),Xd=n("span"),m(us.$$.fragment),Og=d(),Kd=n("span"),Ig=r("FlaxBartForConditionalGeneration"),Ec=d(),R=n("div"),m(ms.$$.fragment),Ng=d(),fs=n("p"),Lg=r(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Rr=n("a"),Dg=r("FlaxPreTrainedModel"),Gg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wg=d(),_s=n("p"),Ug=r(`This model is also a Flax Linen
`),gs=n("a"),Rg=r("flax.nn.Module"),Hg=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Qg=d(),Zd=n("p"),Vg=r("Finally, this model supports inherent JAX features such as:"),Jg=d(),ut=n("ul"),Yd=n("li"),bs=n("a"),Xg=r("Just-In-Time (JIT) compilation"),Kg=d(),el=n("li"),ks=n("a"),Zg=r("Automatic Differentiation"),Yg=d(),tl=n("li"),ys=n("a"),eb=r("Vectorization"),tb=d(),ol=n("li"),vs=n("a"),ob=r("Parallelization"),nb=d(),te=n("div"),m(Ts.$$.fragment),ab=d(),vo=n("p"),sb=r("The "),nl=n("code"),rb=r("FlaxBartPreTrainedModel"),ib=r(" forward method, overrides the "),al=n("code"),db=r("__call__"),lb=r(" special method."),cb=d(),m(rn.$$.fragment),pb=d(),sl=n("p"),hb=r("Summarization example:"),ub=d(),m(ws.$$.fragment),mb=d(),rl=n("p"),fb=r("Mask filling example:"),_b=d(),m(xs.$$.fragment),gb=d(),wt=n("div"),m(Fs.$$.fragment),bb=d(),il=n("p"),kb=r("Example:"),yb=d(),m(zs.$$.fragment),vb=d(),xt=n("div"),m(qs.$$.fragment),Tb=d(),dl=n("p"),wb=r("Example:"),xb=d(),m($s.$$.fragment),Pc=d(),To=n("h2"),dn=n("a"),ll=n("span"),m(Bs.$$.fragment),Fb=d(),cl=n("span"),zb=r("FlaxBartForSequenceClassification"),Ac=d(),O=n("div"),m(js.$$.fragment),qb=d(),pl=n("p"),$b=r(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Bb=d(),Cs=n("p"),jb=r("This model inherits from "),Hr=n("a"),Cb=r("FlaxPreTrainedModel"),Mb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eb=d(),Ms=n("p"),Pb=r(`This model is also a Flax Linen
`),Es=n("a"),Ab=r("flax.nn.Module"),Sb=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ob=d(),hl=n("p"),Ib=r("Finally, this model supports inherent JAX features such as:"),Nb=d(),mt=n("ul"),ul=n("li"),Ps=n("a"),Lb=r("Just-In-Time (JIT) compilation"),Db=d(),ml=n("li"),As=n("a"),Gb=r("Automatic Differentiation"),Wb=d(),fl=n("li"),Ss=n("a"),Ub=r("Vectorization"),Rb=d(),_l=n("li"),Os=n("a"),Hb=r("Parallelization"),Qb=d(),Oe=n("div"),m(Is.$$.fragment),Vb=d(),wo=n("p"),Jb=r("The "),gl=n("code"),Xb=r("FlaxBartPreTrainedModel"),Kb=r(" forward method, overrides the "),bl=n("code"),Zb=r("__call__"),Yb=r(" special method."),ek=d(),m(ln.$$.fragment),tk=d(),kl=n("p"),ok=r("Example:"),nk=d(),m(Ns.$$.fragment),ak=d(),Ft=n("div"),m(Ls.$$.fragment),sk=d(),yl=n("p"),rk=r("Example:"),ik=d(),m(Ds.$$.fragment),dk=d(),zt=n("div"),m(Gs.$$.fragment),lk=d(),vl=n("p"),ck=r("Example:"),pk=d(),m(Ws.$$.fragment),Sc=d(),xo=n("h2"),cn=n("a"),Tl=n("span"),m(Us.$$.fragment),hk=d(),wl=n("span"),uk=r("FlaxBartForQuestionAnswering"),Oc=d(),I=n("div"),m(Rs.$$.fragment),mk=d(),Fo=n("p"),fk=r(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),xl=n("code"),_k=r("span start logits"),gk=r(" and "),Fl=n("code"),bk=r("span end logits"),kk=r(")."),yk=d(),Hs=n("p"),vk=r("This model inherits from "),Qr=n("a"),Tk=r("FlaxPreTrainedModel"),wk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xk=d(),Qs=n("p"),Fk=r(`This model is also a Flax Linen
`),Vs=n("a"),zk=r("flax.nn.Module"),qk=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),$k=d(),zl=n("p"),Bk=r("Finally, this model supports inherent JAX features such as:"),jk=d(),ft=n("ul"),ql=n("li"),Js=n("a"),Ck=r("Just-In-Time (JIT) compilation"),Mk=d(),$l=n("li"),Xs=n("a"),Ek=r("Automatic Differentiation"),Pk=d(),Bl=n("li"),Ks=n("a"),Ak=r("Vectorization"),Sk=d(),jl=n("li"),Zs=n("a"),Ok=r("Parallelization"),Ik=d(),Ie=n("div"),m(Ys.$$.fragment),Nk=d(),zo=n("p"),Lk=r("The "),Cl=n("code"),Dk=r("FlaxBartPreTrainedModel"),Gk=r(" forward method, overrides the "),Ml=n("code"),Wk=r("__call__"),Uk=r(" special method."),Rk=d(),m(pn.$$.fragment),Hk=d(),El=n("p"),Qk=r("Example:"),Vk=d(),m(er.$$.fragment),Jk=d(),qt=n("div"),m(tr.$$.fragment),Xk=d(),Pl=n("p"),Kk=r("Example:"),Zk=d(),m(or.$$.fragment),Yk=d(),$t=n("div"),m(nr.$$.fragment),ey=d(),Al=n("p"),ty=r("Example:"),oy=d(),m(ar.$$.fragment),Ic=d(),qo=n("h2"),hn=n("a"),Sl=n("span"),m(sr.$$.fragment),ny=d(),Ol=n("span"),ay=r("FlaxBartForCausalLM"),Nc=d(),K=n("div"),m(rr.$$.fragment),sy=d(),Il=n("p"),ry=r(`Bart Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings)
e.g for autoregressive tasks.`),iy=d(),ir=n("p"),dy=r("This model inherits from "),Vr=n("a"),ly=r("FlaxPreTrainedModel"),cy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),py=d(),dr=n("p"),hy=r(`This model is also a Flax Linen
`),lr=n("a"),uy=r("flax.nn.Module"),my=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fy=d(),Nl=n("p"),_y=r("Finally, this model supports inherent JAX features such as:"),gy=d(),_t=n("ul"),Ll=n("li"),cr=n("a"),by=r("Just-In-Time (JIT) compilation"),ky=d(),Dl=n("li"),pr=n("a"),yy=r("Automatic Differentiation"),vy=d(),Gl=n("li"),hr=n("a"),Ty=r("Vectorization"),wy=d(),Wl=n("li"),ur=n("a"),xy=r("Parallelization"),Fy=d(),Ne=n("div"),m(mr.$$.fragment),zy=d(),$o=n("p"),qy=r("The "),Ul=n("code"),$y=r("FlaxBartDecoderPreTrainedModel"),By=r(" forward method, overrides the "),Rl=n("code"),jy=r("__call__"),Cy=r(" special method."),My=d(),m(un.$$.fragment),Ey=d(),Hl=n("p"),Py=r("Example:"),Ay=d(),m(fr.$$.fragment),this.h()},l(o){const h=Ww('[data-svelte="svelte-1phssyn"]',document.head);p=a(h,"META",{name:!0,content:!0}),h.forEach(t),F=l(o),v=a(o,"H1",{class:!0});var _r=s(v);w=a(_r,"A",{id:!0,class:!0,href:!0});var Ql=s(w);x=a(Ql,"SPAN",{});var Vl=s(x);f(T.$$.fragment,Vl),Vl.forEach(t),Ql.forEach(t),y=l(_r),q=a(_r,"SPAN",{});var Jl=s(q);se=i(Jl,"BART"),Jl.forEach(t),_r.forEach(t),A=l(o),B=a(o,"P",{});var mn=s(B);pe=a(mn,"STRONG",{});var Xl=s(pe);ke=i(Xl,"DISCLAIMER:"),Xl.forEach(t),tt=i(mn," If you see something strange, file a "),ye=a(mn,"A",{href:!0,rel:!0});var Kl=s(ye);ve=i(Kl,"Github Issue"),Kl.forEach(t),ot=i(mn,` and assign
@patrickvonplaten`),mn.forEach(t),Ze=l(o),V=a(o,"H2",{class:!0});var gr=s(V);N=a(gr,"A",{id:!0,class:!0,href:!0});var Zl=s(N);Ue=a(Zl,"SPAN",{});var Yl=s(Ue);f(re.$$.fragment,Yl),Yl.forEach(t),Zl.forEach(t),P=l(gr),S=a(gr,"SPAN",{});var ec=s(S);nt=i(ec,"Overview"),ec.forEach(t),gr.forEach(t),he=l(o),ue=a(o,"P",{});var br=s(ue);at=i(br,"The Bart model was proposed in "),J=a(br,"A",{href:!0,rel:!0});var tc=s(J);st=i(tc,`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),tc.forEach(t),rt=i(br,` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),br.forEach(t),L=l(o),Ce=a(o,"P",{});var oc=s(Ce);Te=i(oc,"According to the abstract,"),oc.forEach(t),Ye=l(o),Z=a(o,"UL",{});var Bo=s(Z);ie=a(Bo,"LI",{});var Ny=s(ie);it=i(Ny,`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),Ny.forEach(t),dt=l(Bo),X=a(Bo,"LI",{});var Ly=s(X);lt=i(Ly,`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),Ly.forEach(t),we=l(Bo),Re=a(Bo,"LI",{});var Dy=s(Re);z=i(Dy,`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),Dy.forEach(t),Bo.forEach(t),M=l(o),H=a(o,"P",{});var Jr=s(H);Dt=i(Jr,"This model was contributed by "),He=a(Jr,"A",{href:!0,rel:!0});var Gy=s(He);de=i(Gy,"sshleifer"),Gy.forEach(t),Gt=i(Jr,". The Authors\u2019 code can be found "),Qe=a(Jr,"A",{href:!0,rel:!0});var Wy=s(Qe);Wt=i(Wy,"here"),Wy.forEach(t),le=i(Jr,"."),Jr.forEach(t),me=l(o),xe=a(o,"H3",{class:!0});var Dc=s(xe);Me=a(Dc,"A",{id:!0,class:!0,href:!0});var Uy=s(Me);ce=a(Uy,"SPAN",{});var Ry=s(ce);f(Ve.$$.fragment,Ry),Ry.forEach(t),Uy.forEach(t),Ut=l(Dc),Je=a(Dc,"SPAN",{});var Hy=s(Je);Rt=i(Hy,"Examples"),Hy.forEach(t),Dc.forEach(t),ac=l(o),gt=a(o,"UL",{});var Xr=s(gt);xn=a(Xr,"LI",{});var Gc=s(xn);Lp=i(Gc,`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),Fn=a(Gc,"A",{href:!0,rel:!0});var Qy=s(Fn);Dp=i(Qy,"examples/pytorch/summarization/"),Qy.forEach(t),Gp=i(Gc,"."),Gc.forEach(t),Wp=l(Xr),ct=a(Xr,"LI",{});var fn=s(ct);Up=i(fn,"An example of how to train "),kr=a(fn,"A",{href:!0});var Vy=s(kr);Rp=i(Vy,"BartForConditionalGeneration"),Vy.forEach(t),Hp=i(fn," with a Hugging Face "),zi=a(fn,"CODE",{});var Jy=s(zi);Qp=i(Jy,"datasets"),Jy.forEach(t),Vp=i(fn,`
object can be found in this `),zn=a(fn,"A",{href:!0,rel:!0});var Xy=s(zn);Jp=i(Xy,"forum discussion"),Xy.forEach(t),Xp=i(fn,"."),fn.forEach(t),Kp=l(Xr),jo=a(Xr,"LI",{});var nc=s(jo);qn=a(nc,"A",{href:!0,rel:!0});var Ky=s(qn);Zp=i(Ky,"Distilled checkpoints"),Ky.forEach(t),Yp=i(nc," are described in this "),$n=a(nc,"A",{href:!0,rel:!0});var Zy=s($n);eh=i(Zy,"paper"),Zy.forEach(t),th=i(nc,"."),nc.forEach(t),Xr.forEach(t),sc=l(o),Ht=a(o,"H2",{class:!0});var Wc=s(Ht);Co=a(Wc,"A",{id:!0,class:!0,href:!0});var Yy=s(Co);qi=a(Yy,"SPAN",{});var ev=s(qi);f(Bn.$$.fragment,ev),ev.forEach(t),Yy.forEach(t),oh=l(Wc),$i=a(Wc,"SPAN",{});var tv=s($i);nh=i(tv,"Implementation Notes"),tv.forEach(t),Wc.forEach(t),rc=l(o),Ee=a(o,"UL",{});var Bt=s(Ee);pt=a(Bt,"LI",{});var _n=s(pt);ah=i(_n,"Bart doesn\u2019t use "),Bi=a(_n,"CODE",{});var ov=s(Bi);sh=i(ov,"token_type_ids"),ov.forEach(t),rh=i(_n," for sequence classification. Use "),yr=a(_n,"A",{href:!0});var nv=s(yr);ih=i(nv,"BartTokenizer"),nv.forEach(t),dh=i(_n,` or
`),vr=a(_n,"A",{href:!0});var av=s(vr);lh=i(av,"encode()"),av.forEach(t),ch=i(_n," to get the proper splitting."),_n.forEach(t),ph=l(Bt),Qt=a(Bt,"LI",{});var Kr=s(Qt);hh=i(Kr,"The forward pass of "),Tr=a(Kr,"A",{href:!0});var sv=s(Tr);uh=i(sv,"BartModel"),sv.forEach(t),mh=i(Kr," will create the "),ji=a(Kr,"CODE",{});var rv=s(ji);fh=i(rv,"decoder_input_ids"),rv.forEach(t),_h=i(Kr,` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),Kr.forEach(t),gh=l(Bt),Vt=a(Bt,"LI",{});var Zr=s(Vt);bh=i(Zr,`Model predictions are intended to be identical to the original implementation when
`),Ci=a(Zr,"CODE",{});var iv=s(Ci);kh=i(iv,"forced_bos_token_id=0"),iv.forEach(t),yh=i(Zr,`. This only works, however, if the string you pass to
`),Mi=a(Zr,"CODE",{});var dv=s(Mi);vh=i(dv,"fairseq.encode"),dv.forEach(t),Th=i(Zr," starts with a space."),Zr.forEach(t),wh=l(Bt),wr=a(Bt,"LI",{});var Sy=s(wr);xr=a(Sy,"A",{href:!0});var lv=s(xr);xh=i(lv,"generate()"),lv.forEach(t),Fh=i(Sy,` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),Sy.forEach(t),zh=l(Bt),Jt=a(Bt,"LI",{});var Yr=s(Jt);qh=i(Yr,"Models that load the "),Ei=a(Yr,"EM",{});var cv=s(Ei);$h=i(cv,"facebook/bart-large-cnn"),cv.forEach(t),Bh=i(Yr," weights will not have a "),Pi=a(Yr,"CODE",{});var pv=s(Pi);jh=i(pv,"mask_token_id"),pv.forEach(t),Ch=i(Yr,`, or be able to perform
mask-filling tasks.`),Yr.forEach(t),Bt.forEach(t),ic=l(o),Xt=a(o,"H2",{class:!0});var Uc=s(Xt);Mo=a(Uc,"A",{id:!0,class:!0,href:!0});var hv=s(Mo);Ai=a(hv,"SPAN",{});var uv=s(Ai);f(jn.$$.fragment,uv),uv.forEach(t),hv.forEach(t),Mh=l(Uc),Si=a(Uc,"SPAN",{});var mv=s(Si);Eh=i(mv,"Mask Filling"),mv.forEach(t),Uc.forEach(t),dc=l(o),bt=a(o,"P",{});var ei=s(bt);Ph=i(ei,"The "),Oi=a(ei,"CODE",{});var fv=s(Oi);Ah=i(fv,"facebook/bart-base"),fv.forEach(t),Sh=i(ei," and "),Ii=a(ei,"CODE",{});var _v=s(Ii);Oh=i(_v,"facebook/bart-large"),_v.forEach(t),Ih=i(ei," checkpoints can be used to fill multi-token masks."),ei.forEach(t),lc=l(o),f(Cn.$$.fragment,o),cc=l(o),Kt=a(o,"H2",{class:!0});var Rc=s(Kt);Eo=a(Rc,"A",{id:!0,class:!0,href:!0});var gv=s(Eo);Ni=a(gv,"SPAN",{});var bv=s(Ni);f(Mn.$$.fragment,bv),bv.forEach(t),gv.forEach(t),Nh=l(Rc),Li=a(Rc,"SPAN",{});var kv=s(Li);Lh=i(kv,"BartConfig"),kv.forEach(t),Rc.forEach(t),pc=l(o),Fe=a(o,"DIV",{class:!0});var jt=s(Fe);f(En.$$.fragment,jt),Dh=l(jt),Zt=a(jt,"P",{});var ti=s(Zt);Gh=i(ti,"This is the configuration class to store the configuration of a "),Fr=a(ti,"A",{href:!0});var yv=s(Fr);Wh=i(yv,"BartModel"),yv.forEach(t),Uh=i(ti,`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),Pn=a(ti,"A",{href:!0,rel:!0});var vv=s(Pn);Rh=i(vv,"facebook/bart-large"),vv.forEach(t),Hh=i(ti," architecture."),ti.forEach(t),Qh=l(jt),Yt=a(jt,"P",{});var oi=s(Yt);Vh=i(oi,"Configuration objects inherit from "),zr=a(oi,"A",{href:!0});var Tv=s(zr);Jh=i(Tv,"PretrainedConfig"),Tv.forEach(t),Xh=i(oi,` and can be used to control the model outputs. Read the
documentation from `),qr=a(oi,"A",{href:!0});var wv=s(qr);Kh=i(wv,"PretrainedConfig"),wv.forEach(t),Zh=i(oi," for more information."),oi.forEach(t),Yh=l(jt),Di=a(jt,"P",{});var xv=s(Di);eu=i(xv,"Example:"),xv.forEach(t),tu=l(jt),f(An.$$.fragment,jt),jt.forEach(t),hc=l(o),eo=a(o,"H2",{class:!0});var Hc=s(eo);Po=a(Hc,"A",{id:!0,class:!0,href:!0});var Fv=s(Po);Gi=a(Fv,"SPAN",{});var zv=s(Gi);f(Sn.$$.fragment,zv),zv.forEach(t),Fv.forEach(t),ou=l(Hc),Wi=a(Hc,"SPAN",{});var qv=s(Wi);nu=i(qv,"BartTokenizer"),qv.forEach(t),Hc.forEach(t),uc=l(o),E=a(o,"DIV",{class:!0});var G=s(E);f(On.$$.fragment,G),au=l(G),Ui=a(G,"P",{});var $v=s(Ui);su=i($v,"Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),$v.forEach(t),ru=l(G),Ri=a(G,"P",{});var Bv=s(Ri);iu=i(Bv,`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),Bv.forEach(t),du=l(G),f(In.$$.fragment,G),lu=l(G),Nn=a(G,"P",{});var Qc=s(Nn);cu=i(Qc,"You can get around that behavior by passing "),Hi=a(Qc,"CODE",{});var jv=s(Hi);pu=i(jv,"add_prefix_space=True"),jv.forEach(t),hu=i(Qc,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Qc.forEach(t),uu=l(G),f(Ao.$$.fragment,G),mu=l(G),Ln=a(G,"P",{});var Vc=s(Ln);fu=i(Vc,"This tokenizer inherits from "),$r=a(Vc,"A",{href:!0});var Cv=s($r);_u=i(Cv,"PreTrainedTokenizer"),Cv.forEach(t),gu=i(Vc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Vc.forEach(t),bu=l(G),kt=a(G,"DIV",{class:!0});var ni=s(kt);f(Dn.$$.fragment,ni),ku=l(ni),Qi=a(ni,"P",{});var Mv=s(Qi);yu=i(Mv,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),Mv.forEach(t),vu=l(ni),Gn=a(ni,"UL",{});var Jc=s(Gn);Br=a(Jc,"LI",{});var Oy=s(Br);Tu=i(Oy,"single sequence: "),Vi=a(Oy,"CODE",{});var Ev=s(Vi);wu=i(Ev,"<s> X </s>"),Ev.forEach(t),Oy.forEach(t),xu=l(Jc),jr=a(Jc,"LI",{});var Iy=s(jr);Fu=i(Iy,"pair of sequences: "),Ji=a(Iy,"CODE",{});var Pv=s(Ji);zu=i(Pv,"<s> A </s></s> B </s>"),Pv.forEach(t),Iy.forEach(t),Jc.forEach(t),ni.forEach(t),qu=l(G),So=a(G,"DIV",{class:!0});var Xc=s(So);f(Wn.$$.fragment,Xc),$u=l(Xc),Xi=a(Xc,"P",{});var Av=s(Xi);Bu=i(Av,"Converts a sequence of tokens (string) in a single string."),Av.forEach(t),Xc.forEach(t),ju=l(G),Oo=a(G,"DIV",{class:!0});var Kc=s(Oo);f(Un.$$.fragment,Kc),Cu=l(Kc),Ki=a(Kc,"P",{});var Sv=s(Ki);Mu=i(Sv,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Sv.forEach(t),Kc.forEach(t),Eu=l(G),Io=a(G,"DIV",{class:!0});var Zc=s(Io);f(Rn.$$.fragment,Zc),Pu=l(Zc),Hn=a(Zc,"P",{});var Yc=s(Hn);Au=i(Yc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Zi=a(Yc,"CODE",{});var Ov=s(Zi);Su=i(Ov,"prepare_for_model"),Ov.forEach(t),Ou=i(Yc," method."),Yc.forEach(t),Zc.forEach(t),G.forEach(t),mc=l(o),to=a(o,"H2",{class:!0});var ep=s(to);No=a(ep,"A",{id:!0,class:!0,href:!0});var Iv=s(No);Yi=a(Iv,"SPAN",{});var Nv=s(Yi);f(Qn.$$.fragment,Nv),Nv.forEach(t),Iv.forEach(t),Iu=l(ep),ed=a(ep,"SPAN",{});var Lv=s(ed);Nu=i(Lv,"BartTokenizerFast"),Lv.forEach(t),ep.forEach(t),fc=l(o),W=a(o,"DIV",{class:!0});var _e=s(W);f(Vn.$$.fragment,_e),Lu=l(_e),Jn=a(_e,"P",{});var tp=s(Jn);Du=i(tp,"Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),td=a(tp,"EM",{});var Dv=s(td);Gu=i(Dv,"tokenizers"),Dv.forEach(t),Wu=i(tp,` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),tp.forEach(t),Uu=l(_e),od=a(_e,"P",{});var Gv=s(od);Ru=i(Gv,`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),Gv.forEach(t),Hu=l(_e),f(Xn.$$.fragment,_e),Qu=l(_e),Kn=a(_e,"P",{});var op=s(Kn);Vu=i(op,"You can get around that behavior by passing "),nd=a(op,"CODE",{});var Wv=s(nd);Ju=i(Wv,"add_prefix_space=True"),Wv.forEach(t),Xu=i(op,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),op.forEach(t),Ku=l(_e),f(Lo.$$.fragment,_e),Zu=l(_e),Zn=a(_e,"P",{});var np=s(Zn);Yu=i(np,"This tokenizer inherits from "),Cr=a(np,"A",{href:!0});var Uv=s(Cr);em=i(Uv,"PreTrainedTokenizerFast"),Uv.forEach(t),tm=i(np,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),np.forEach(t),om=l(_e),Do=a(_e,"DIV",{class:!0});var ap=s(Do);f(Yn.$$.fragment,ap),nm=l(ap),ad=a(ap,"P",{});var Rv=s(ad);am=i(Rv,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Rv.forEach(t),ap.forEach(t),_e.forEach(t),_c=l(o),oo=a(o,"H2",{class:!0});var sp=s(oo);Go=a(sp,"A",{id:!0,class:!0,href:!0});var Hv=s(Go);sd=a(Hv,"SPAN",{});var Qv=s(sd);f(ea.$$.fragment,Qv),Qv.forEach(t),Hv.forEach(t),sm=l(sp),rd=a(sp,"SPAN",{});var Vv=s(rd);rm=i(Vv,"BartModel"),Vv.forEach(t),sp.forEach(t),gc=l(o),Xe=a(o,"DIV",{class:!0});var gn=s(Xe);f(ta.$$.fragment,gn),im=l(gn),oa=a(gn,"P",{});var rp=s(oa);dm=i(rp,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mr=a(rp,"A",{href:!0});var Jv=s(Mr);lm=i(Jv,"PreTrainedModel"),Jv.forEach(t),cm=i(rp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rp.forEach(t),pm=l(gn),na=a(gn,"P",{});var ip=s(na);hm=i(ip,"This model is also a PyTorch "),aa=a(ip,"A",{href:!0,rel:!0});var Xv=s(aa);um=i(Xv,"torch.nn.Module"),Xv.forEach(t),mm=i(ip,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ip.forEach(t),fm=l(gn),Pe=a(gn,"DIV",{class:!0});var Ct=s(Pe);f(sa.$$.fragment,Ct),_m=l(Ct),no=a(Ct,"P",{});var ai=s(no);gm=i(ai,"The "),Er=a(ai,"A",{href:!0});var Kv=s(Er);bm=i(Kv,"BartModel"),Kv.forEach(t),km=i(ai," forward method, overrides the "),id=a(ai,"CODE",{});var Zv=s(id);ym=i(Zv,"__call__"),Zv.forEach(t),vm=i(ai," special method."),ai.forEach(t),Tm=l(Ct),f(Wo.$$.fragment,Ct),wm=l(Ct),dd=a(Ct,"P",{});var Yv=s(dd);xm=i(Yv,"Example:"),Yv.forEach(t),Fm=l(Ct),f(ra.$$.fragment,Ct),Ct.forEach(t),gn.forEach(t),bc=l(o),ao=a(o,"H2",{class:!0});var dp=s(ao);Uo=a(dp,"A",{id:!0,class:!0,href:!0});var eT=s(Uo);ld=a(eT,"SPAN",{});var tT=s(ld);f(ia.$$.fragment,tT),tT.forEach(t),eT.forEach(t),zm=l(dp),cd=a(dp,"SPAN",{});var oT=s(cd);qm=i(oT,"BartForConditionalGeneration"),oT.forEach(t),dp.forEach(t),kc=l(o),Ke=a(o,"DIV",{class:!0});var bn=s(Ke);f(da.$$.fragment,bn),$m=l(bn),la=a(bn,"P",{});var lp=s(la);Bm=i(lp,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Pr=a(lp,"A",{href:!0});var nT=s(Pr);jm=i(nT,"PreTrainedModel"),nT.forEach(t),Cm=i(lp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lp.forEach(t),Mm=l(bn),ca=a(bn,"P",{});var cp=s(ca);Em=i(cp,"This model is also a PyTorch "),pa=a(cp,"A",{href:!0,rel:!0});var aT=s(pa);Pm=i(aT,"torch.nn.Module"),aT.forEach(t),Am=i(cp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cp.forEach(t),Sm=l(bn),Y=a(bn,"DIV",{class:!0});var Le=s(Y);f(ha.$$.fragment,Le),Om=l(Le),so=a(Le,"P",{});var si=s(so);Im=i(si,"The "),Ar=a(si,"A",{href:!0});var sT=s(Ar);Nm=i(sT,"BartForConditionalGeneration"),sT.forEach(t),Lm=i(si," forward method, overrides the "),pd=a(si,"CODE",{});var rT=s(pd);Dm=i(rT,"__call__"),rT.forEach(t),Gm=i(si," special method."),si.forEach(t),Wm=l(Le),f(Ro.$$.fragment,Le),Um=l(Le),hd=a(Le,"P",{});var iT=s(hd);Rm=i(iT,"Summarization example:"),iT.forEach(t),Hm=l(Le),f(ua.$$.fragment,Le),Qm=l(Le),ud=a(Le,"P",{});var dT=s(ud);Vm=i(dT,"Mask filling example:"),dT.forEach(t),Jm=l(Le),f(ma.$$.fragment,Le),Le.forEach(t),bn.forEach(t),yc=l(o),ro=a(o,"H2",{class:!0});var pp=s(ro);Ho=a(pp,"A",{id:!0,class:!0,href:!0});var lT=s(Ho);md=a(lT,"SPAN",{});var cT=s(md);f(fa.$$.fragment,cT),cT.forEach(t),lT.forEach(t),Xm=l(pp),fd=a(pp,"SPAN",{});var pT=s(fd);Km=i(pT,"BartForSequenceClassification"),pT.forEach(t),pp.forEach(t),vc=l(o),ze=a(o,"DIV",{class:!0});var Mt=s(ze);f(_a.$$.fragment,Mt),Zm=l(Mt),_d=a(Mt,"P",{});var hT=s(_d);Ym=i(hT,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),hT.forEach(t),ef=l(Mt),ga=a(Mt,"P",{});var hp=s(ga);tf=i(hp,"This model inherits from "),Sr=a(hp,"A",{href:!0});var uT=s(Sr);of=i(uT,"PreTrainedModel"),uT.forEach(t),nf=i(hp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hp.forEach(t),af=l(Mt),ba=a(Mt,"P",{});var up=s(ba);sf=i(up,"This model is also a PyTorch "),ka=a(up,"A",{href:!0,rel:!0});var mT=s(ka);rf=i(mT,"torch.nn.Module"),mT.forEach(t),df=i(up,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),up.forEach(t),lf=l(Mt),D=a(Mt,"DIV",{class:!0});var oe=s(D);f(ya.$$.fragment,oe),cf=l(oe),io=a(oe,"P",{});var ri=s(io);pf=i(ri,"The "),Or=a(ri,"A",{href:!0});var fT=s(Or);hf=i(fT,"BartForSequenceClassification"),fT.forEach(t),uf=i(ri," forward method, overrides the "),gd=a(ri,"CODE",{});var _T=s(gd);mf=i(_T,"__call__"),_T.forEach(t),ff=i(ri," special method."),ri.forEach(t),_f=l(oe),f(Qo.$$.fragment,oe),gf=l(oe),bd=a(oe,"P",{});var gT=s(bd);bf=i(gT,"Example of single-label classification:"),gT.forEach(t),kf=l(oe),f(va.$$.fragment,oe),yf=l(oe),f(Ta.$$.fragment,oe),vf=l(oe),kd=a(oe,"P",{});var bT=s(kd);Tf=i(bT,"Example of multi-label classification:"),bT.forEach(t),wf=l(oe),f(wa.$$.fragment,oe),xf=l(oe),f(xa.$$.fragment,oe),oe.forEach(t),Mt.forEach(t),Tc=l(o),lo=a(o,"H2",{class:!0});var mp=s(lo);Vo=a(mp,"A",{id:!0,class:!0,href:!0});var kT=s(Vo);yd=a(kT,"SPAN",{});var yT=s(yd);f(Fa.$$.fragment,yT),yT.forEach(t),kT.forEach(t),Ff=l(mp),vd=a(mp,"SPAN",{});var vT=s(vd);zf=i(vT,"BartForQuestionAnswering"),vT.forEach(t),mp.forEach(t),wc=l(o),qe=a(o,"DIV",{class:!0});var Et=s(qe);f(za.$$.fragment,Et),qf=l(Et),co=a(Et,"P",{});var ii=s(co);$f=i(ii,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Td=a(ii,"CODE",{});var TT=s(Td);Bf=i(TT,"span start logits"),TT.forEach(t),jf=i(ii," and "),wd=a(ii,"CODE",{});var wT=s(wd);Cf=i(wT,"span end logits"),wT.forEach(t),Mf=i(ii,")."),ii.forEach(t),Ef=l(Et),qa=a(Et,"P",{});var fp=s(qa);Pf=i(fp,"This model inherits from "),Ir=a(fp,"A",{href:!0});var xT=s(Ir);Af=i(xT,"PreTrainedModel"),xT.forEach(t),Sf=i(fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fp.forEach(t),Of=l(Et),$a=a(Et,"P",{});var _p=s($a);If=i(_p,"This model is also a PyTorch "),Ba=a(_p,"A",{href:!0,rel:!0});var FT=s(Ba);Nf=i(FT,"torch.nn.Module"),FT.forEach(t),Lf=i(_p,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_p.forEach(t),Df=l(Et),fe=a(Et,"DIV",{class:!0});var et=s(fe);f(ja.$$.fragment,et),Gf=l(et),po=a(et,"P",{});var di=s(po);Wf=i(di,"The "),Nr=a(di,"A",{href:!0});var zT=s(Nr);Uf=i(zT,"BartForQuestionAnswering"),zT.forEach(t),Rf=i(di," forward method, overrides the "),xd=a(di,"CODE",{});var qT=s(xd);Hf=i(qT,"__call__"),qT.forEach(t),Qf=i(di," special method."),di.forEach(t),Vf=l(et),f(Jo.$$.fragment,et),Jf=l(et),Fd=a(et,"P",{});var $T=s(Fd);Xf=i($T,"Example:"),$T.forEach(t),Kf=l(et),f(Ca.$$.fragment,et),Zf=l(et),f(Ma.$$.fragment,et),et.forEach(t),Et.forEach(t),xc=l(o),ho=a(o,"H2",{class:!0});var gp=s(ho);Xo=a(gp,"A",{id:!0,class:!0,href:!0});var BT=s(Xo);zd=a(BT,"SPAN",{});var jT=s(zd);f(Ea.$$.fragment,jT),jT.forEach(t),BT.forEach(t),Yf=l(gp),qd=a(gp,"SPAN",{});var CT=s(qd);e_=i(CT,"BartForCausalLM"),CT.forEach(t),gp.forEach(t),Fc=l(o),uo=a(o,"DIV",{class:!0});var bp=s(uo);f(Pa.$$.fragment,bp),t_=l(bp),yt=a(bp,"DIV",{class:!0});var li=s(yt);f(Aa.$$.fragment,li),o_=l(li),$d=a(li,"P",{});var MT=s($d);n_=i(MT,"Example:"),MT.forEach(t),a_=l(li),f(Sa.$$.fragment,li),li.forEach(t),bp.forEach(t),zc=l(o),mo=a(o,"H2",{class:!0});var kp=s(mo);Ko=a(kp,"A",{id:!0,class:!0,href:!0});var ET=s(Ko);Bd=a(ET,"SPAN",{});var PT=s(Bd);f(Oa.$$.fragment,PT),PT.forEach(t),ET.forEach(t),s_=l(kp),jd=a(kp,"SPAN",{});var AT=s(jd);r_=i(AT,"TFBartModel"),AT.forEach(t),kp.forEach(t),qc=l(o),$e=a(o,"DIV",{class:!0});var Pt=s($e);f(Ia.$$.fragment,Pt),i_=l(Pt),Na=a(Pt,"P",{});var yp=s(Na);d_=i(yp,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Lr=a(yp,"A",{href:!0});var ST=s(Lr);l_=i(ST,"TFPreTrainedModel"),ST.forEach(t),c_=i(yp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yp.forEach(t),p_=l(Pt),La=a(Pt,"P",{});var vp=s(La);h_=i(vp,"This model is also a "),Da=a(vp,"A",{href:!0,rel:!0});var OT=s(Da);u_=i(OT,"tf.keras.Model"),OT.forEach(t),m_=i(vp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vp.forEach(t),f_=l(Pt),f(Zo.$$.fragment,Pt),__=l(Pt),Ae=a(Pt,"DIV",{class:!0});var At=s(Ae);f(Ga.$$.fragment,At),g_=l(At),fo=a(At,"P",{});var ci=s(fo);b_=i(ci,"The "),Dr=a(ci,"A",{href:!0});var IT=s(Dr);k_=i(IT,"TFBartModel"),IT.forEach(t),y_=i(ci," forward method, overrides the "),Cd=a(ci,"CODE",{});var NT=s(Cd);v_=i(NT,"__call__"),NT.forEach(t),T_=i(ci," special method."),ci.forEach(t),w_=l(At),f(Yo.$$.fragment,At),x_=l(At),Md=a(At,"P",{});var LT=s(Md);F_=i(LT,"Example:"),LT.forEach(t),z_=l(At),f(Wa.$$.fragment,At),At.forEach(t),Pt.forEach(t),$c=l(o),_o=a(o,"H2",{class:!0});var Tp=s(_o);en=a(Tp,"A",{id:!0,class:!0,href:!0});var DT=s(en);Ed=a(DT,"SPAN",{});var GT=s(Ed);f(Ua.$$.fragment,GT),GT.forEach(t),DT.forEach(t),q_=l(Tp),Pd=a(Tp,"SPAN",{});var WT=s(Pd);$_=i(WT,"TFBartForConditionalGeneration"),WT.forEach(t),Tp.forEach(t),Bc=l(o),Be=a(o,"DIV",{class:!0});var St=s(Be);f(Ra.$$.fragment,St),B_=l(St),Ha=a(St,"P",{});var wp=s(Ha);j_=i(wp,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Gr=a(wp,"A",{href:!0});var UT=s(Gr);C_=i(UT,"TFPreTrainedModel"),UT.forEach(t),M_=i(wp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wp.forEach(t),E_=l(St),Qa=a(St,"P",{});var xp=s(Qa);P_=i(xp,"This model is also a "),Va=a(xp,"A",{href:!0,rel:!0});var RT=s(Va);A_=i(RT,"tf.keras.Model"),RT.forEach(t),S_=i(xp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xp.forEach(t),O_=l(St),f(tn.$$.fragment,St),I_=l(St),ee=a(St,"DIV",{class:!0});var De=s(ee);f(Ja.$$.fragment,De),N_=l(De),go=a(De,"P",{});var pi=s(go);L_=i(pi,"The "),Wr=a(pi,"A",{href:!0});var HT=s(Wr);D_=i(HT,"TFBartForConditionalGeneration"),HT.forEach(t),G_=i(pi," forward method, overrides the "),Ad=a(pi,"CODE",{});var QT=s(Ad);W_=i(QT,"__call__"),QT.forEach(t),U_=i(pi," special method."),pi.forEach(t),R_=l(De),f(on.$$.fragment,De),H_=l(De),Sd=a(De,"P",{});var VT=s(Sd);Q_=i(VT,"Summarization example:"),VT.forEach(t),V_=l(De),f(Xa.$$.fragment,De),J_=l(De),Od=a(De,"P",{});var JT=s(Od);X_=i(JT,"Mask filling example:"),JT.forEach(t),K_=l(De),f(Ka.$$.fragment,De),De.forEach(t),St.forEach(t),jc=l(o),bo=a(o,"H2",{class:!0});var Fp=s(bo);nn=a(Fp,"A",{id:!0,class:!0,href:!0});var XT=s(nn);Id=a(XT,"SPAN",{});var KT=s(Id);f(Za.$$.fragment,KT),KT.forEach(t),XT.forEach(t),Z_=l(Fp),Nd=a(Fp,"SPAN",{});var ZT=s(Nd);Y_=i(ZT,"FlaxBartModel"),ZT.forEach(t),Fp.forEach(t),Cc=l(o),U=a(o,"DIV",{class:!0});var ge=s(U);f(Ya.$$.fragment,ge),eg=l(ge),es=a(ge,"P",{});var zp=s(es);tg=i(zp,`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ur=a(zp,"A",{href:!0});var YT=s(Ur);og=i(YT,"FlaxPreTrainedModel"),YT.forEach(t),ng=i(zp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zp.forEach(t),ag=l(ge),ts=a(ge,"P",{});var qp=s(ts);sg=i(qp,`This model is also a Flax Linen
`),os=a(qp,"A",{href:!0,rel:!0});var e2=s(os);rg=i(e2,"flax.nn.Module"),e2.forEach(t),ig=i(qp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),qp.forEach(t),dg=l(ge),Ld=a(ge,"P",{});var t2=s(Ld);lg=i(t2,"Finally, this model supports inherent JAX features such as:"),t2.forEach(t),cg=l(ge),ht=a(ge,"UL",{});var kn=s(ht);Dd=a(kn,"LI",{});var o2=s(Dd);ns=a(o2,"A",{href:!0,rel:!0});var n2=s(ns);pg=i(n2,"Just-In-Time (JIT) compilation"),n2.forEach(t),o2.forEach(t),hg=l(kn),Gd=a(kn,"LI",{});var a2=s(Gd);as=a(a2,"A",{href:!0,rel:!0});var s2=s(as);ug=i(s2,"Automatic Differentiation"),s2.forEach(t),a2.forEach(t),mg=l(kn),Wd=a(kn,"LI",{});var r2=s(Wd);ss=a(r2,"A",{href:!0,rel:!0});var i2=s(ss);fg=i(i2,"Vectorization"),i2.forEach(t),r2.forEach(t),_g=l(kn),Ud=a(kn,"LI",{});var d2=s(Ud);rs=a(d2,"A",{href:!0,rel:!0});var l2=s(rs);gg=i(l2,"Parallelization"),l2.forEach(t),d2.forEach(t),kn.forEach(t),bg=l(ge),Se=a(ge,"DIV",{class:!0});var Ot=s(Se);f(is.$$.fragment,Ot),kg=l(Ot),ko=a(Ot,"P",{});var hi=s(ko);yg=i(hi,"The "),Rd=a(hi,"CODE",{});var c2=s(Rd);vg=i(c2,"FlaxBartPreTrainedModel"),c2.forEach(t),Tg=i(hi," forward method, overrides the "),Hd=a(hi,"CODE",{});var p2=s(Hd);wg=i(p2,"__call__"),p2.forEach(t),xg=i(hi," special method."),hi.forEach(t),Fg=l(Ot),f(an.$$.fragment,Ot),zg=l(Ot),Qd=a(Ot,"P",{});var h2=s(Qd);qg=i(h2,"Example:"),h2.forEach(t),$g=l(Ot),f(ds.$$.fragment,Ot),Ot.forEach(t),Bg=l(ge),vt=a(ge,"DIV",{class:!0});var ui=s(vt);f(ls.$$.fragment,ui),jg=l(ui),Vd=a(ui,"P",{});var u2=s(Vd);Cg=i(u2,"Example:"),u2.forEach(t),Mg=l(ui),f(cs.$$.fragment,ui),ui.forEach(t),Eg=l(ge),Tt=a(ge,"DIV",{class:!0});var mi=s(Tt);f(ps.$$.fragment,mi),Pg=l(mi),Jd=a(mi,"P",{});var m2=s(Jd);Ag=i(m2,"Example:"),m2.forEach(t),Sg=l(mi),f(hs.$$.fragment,mi),mi.forEach(t),ge.forEach(t),Mc=l(o),yo=a(o,"H2",{class:!0});var $p=s(yo);sn=a($p,"A",{id:!0,class:!0,href:!0});var f2=s(sn);Xd=a(f2,"SPAN",{});var _2=s(Xd);f(us.$$.fragment,_2),_2.forEach(t),f2.forEach(t),Og=l($p),Kd=a($p,"SPAN",{});var g2=s(Kd);Ig=i(g2,"FlaxBartForConditionalGeneration"),g2.forEach(t),$p.forEach(t),Ec=l(o),R=a(o,"DIV",{class:!0});var be=s(R);f(ms.$$.fragment,be),Ng=l(be),fs=a(be,"P",{});var Bp=s(fs);Lg=i(Bp,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Rr=a(Bp,"A",{href:!0});var b2=s(Rr);Dg=i(b2,"FlaxPreTrainedModel"),b2.forEach(t),Gg=i(Bp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bp.forEach(t),Wg=l(be),_s=a(be,"P",{});var jp=s(_s);Ug=i(jp,`This model is also a Flax Linen
`),gs=a(jp,"A",{href:!0,rel:!0});var k2=s(gs);Rg=i(k2,"flax.nn.Module"),k2.forEach(t),Hg=i(jp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),jp.forEach(t),Qg=l(be),Zd=a(be,"P",{});var y2=s(Zd);Vg=i(y2,"Finally, this model supports inherent JAX features such as:"),y2.forEach(t),Jg=l(be),ut=a(be,"UL",{});var yn=s(ut);Yd=a(yn,"LI",{});var v2=s(Yd);bs=a(v2,"A",{href:!0,rel:!0});var T2=s(bs);Xg=i(T2,"Just-In-Time (JIT) compilation"),T2.forEach(t),v2.forEach(t),Kg=l(yn),el=a(yn,"LI",{});var w2=s(el);ks=a(w2,"A",{href:!0,rel:!0});var x2=s(ks);Zg=i(x2,"Automatic Differentiation"),x2.forEach(t),w2.forEach(t),Yg=l(yn),tl=a(yn,"LI",{});var F2=s(tl);ys=a(F2,"A",{href:!0,rel:!0});var z2=s(ys);eb=i(z2,"Vectorization"),z2.forEach(t),F2.forEach(t),tb=l(yn),ol=a(yn,"LI",{});var q2=s(ol);vs=a(q2,"A",{href:!0,rel:!0});var $2=s(vs);ob=i($2,"Parallelization"),$2.forEach(t),q2.forEach(t),yn.forEach(t),nb=l(be),te=a(be,"DIV",{class:!0});var Ge=s(te);f(Ts.$$.fragment,Ge),ab=l(Ge),vo=a(Ge,"P",{});var fi=s(vo);sb=i(fi,"The "),nl=a(fi,"CODE",{});var B2=s(nl);rb=i(B2,"FlaxBartPreTrainedModel"),B2.forEach(t),ib=i(fi," forward method, overrides the "),al=a(fi,"CODE",{});var j2=s(al);db=i(j2,"__call__"),j2.forEach(t),lb=i(fi," special method."),fi.forEach(t),cb=l(Ge),f(rn.$$.fragment,Ge),pb=l(Ge),sl=a(Ge,"P",{});var C2=s(sl);hb=i(C2,"Summarization example:"),C2.forEach(t),ub=l(Ge),f(ws.$$.fragment,Ge),mb=l(Ge),rl=a(Ge,"P",{});var M2=s(rl);fb=i(M2,"Mask filling example:"),M2.forEach(t),_b=l(Ge),f(xs.$$.fragment,Ge),Ge.forEach(t),gb=l(be),wt=a(be,"DIV",{class:!0});var _i=s(wt);f(Fs.$$.fragment,_i),bb=l(_i),il=a(_i,"P",{});var E2=s(il);kb=i(E2,"Example:"),E2.forEach(t),yb=l(_i),f(zs.$$.fragment,_i),_i.forEach(t),vb=l(be),xt=a(be,"DIV",{class:!0});var gi=s(xt);f(qs.$$.fragment,gi),Tb=l(gi),dl=a(gi,"P",{});var P2=s(dl);wb=i(P2,"Example:"),P2.forEach(t),xb=l(gi),f($s.$$.fragment,gi),gi.forEach(t),be.forEach(t),Pc=l(o),To=a(o,"H2",{class:!0});var Cp=s(To);dn=a(Cp,"A",{id:!0,class:!0,href:!0});var A2=s(dn);ll=a(A2,"SPAN",{});var S2=s(ll);f(Bs.$$.fragment,S2),S2.forEach(t),A2.forEach(t),Fb=l(Cp),cl=a(Cp,"SPAN",{});var O2=s(cl);zb=i(O2,"FlaxBartForSequenceClassification"),O2.forEach(t),Cp.forEach(t),Ac=l(o),O=a(o,"DIV",{class:!0});var ne=s(O);f(js.$$.fragment,ne),qb=l(ne),pl=a(ne,"P",{});var I2=s(pl);$b=i(I2,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),I2.forEach(t),Bb=l(ne),Cs=a(ne,"P",{});var Mp=s(Cs);jb=i(Mp,"This model inherits from "),Hr=a(Mp,"A",{href:!0});var N2=s(Hr);Cb=i(N2,"FlaxPreTrainedModel"),N2.forEach(t),Mb=i(Mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mp.forEach(t),Eb=l(ne),Ms=a(ne,"P",{});var Ep=s(Ms);Pb=i(Ep,`This model is also a Flax Linen
`),Es=a(Ep,"A",{href:!0,rel:!0});var L2=s(Es);Ab=i(L2,"flax.nn.Module"),L2.forEach(t),Sb=i(Ep,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ep.forEach(t),Ob=l(ne),hl=a(ne,"P",{});var D2=s(hl);Ib=i(D2,"Finally, this model supports inherent JAX features such as:"),D2.forEach(t),Nb=l(ne),mt=a(ne,"UL",{});var vn=s(mt);ul=a(vn,"LI",{});var G2=s(ul);Ps=a(G2,"A",{href:!0,rel:!0});var W2=s(Ps);Lb=i(W2,"Just-In-Time (JIT) compilation"),W2.forEach(t),G2.forEach(t),Db=l(vn),ml=a(vn,"LI",{});var U2=s(ml);As=a(U2,"A",{href:!0,rel:!0});var R2=s(As);Gb=i(R2,"Automatic Differentiation"),R2.forEach(t),U2.forEach(t),Wb=l(vn),fl=a(vn,"LI",{});var H2=s(fl);Ss=a(H2,"A",{href:!0,rel:!0});var Q2=s(Ss);Ub=i(Q2,"Vectorization"),Q2.forEach(t),H2.forEach(t),Rb=l(vn),_l=a(vn,"LI",{});var V2=s(_l);Os=a(V2,"A",{href:!0,rel:!0});var J2=s(Os);Hb=i(J2,"Parallelization"),J2.forEach(t),V2.forEach(t),vn.forEach(t),Qb=l(ne),Oe=a(ne,"DIV",{class:!0});var It=s(Oe);f(Is.$$.fragment,It),Vb=l(It),wo=a(It,"P",{});var bi=s(wo);Jb=i(bi,"The "),gl=a(bi,"CODE",{});var X2=s(gl);Xb=i(X2,"FlaxBartPreTrainedModel"),X2.forEach(t),Kb=i(bi," forward method, overrides the "),bl=a(bi,"CODE",{});var K2=s(bl);Zb=i(K2,"__call__"),K2.forEach(t),Yb=i(bi," special method."),bi.forEach(t),ek=l(It),f(ln.$$.fragment,It),tk=l(It),kl=a(It,"P",{});var Z2=s(kl);ok=i(Z2,"Example:"),Z2.forEach(t),nk=l(It),f(Ns.$$.fragment,It),It.forEach(t),ak=l(ne),Ft=a(ne,"DIV",{class:!0});var ki=s(Ft);f(Ls.$$.fragment,ki),sk=l(ki),yl=a(ki,"P",{});var Y2=s(yl);rk=i(Y2,"Example:"),Y2.forEach(t),ik=l(ki),f(Ds.$$.fragment,ki),ki.forEach(t),dk=l(ne),zt=a(ne,"DIV",{class:!0});var yi=s(zt);f(Gs.$$.fragment,yi),lk=l(yi),vl=a(yi,"P",{});var ew=s(vl);ck=i(ew,"Example:"),ew.forEach(t),pk=l(yi),f(Ws.$$.fragment,yi),yi.forEach(t),ne.forEach(t),Sc=l(o),xo=a(o,"H2",{class:!0});var Pp=s(xo);cn=a(Pp,"A",{id:!0,class:!0,href:!0});var tw=s(cn);Tl=a(tw,"SPAN",{});var ow=s(Tl);f(Us.$$.fragment,ow),ow.forEach(t),tw.forEach(t),hk=l(Pp),wl=a(Pp,"SPAN",{});var nw=s(wl);uk=i(nw,"FlaxBartForQuestionAnswering"),nw.forEach(t),Pp.forEach(t),Oc=l(o),I=a(o,"DIV",{class:!0});var ae=s(I);f(Rs.$$.fragment,ae),mk=l(ae),Fo=a(ae,"P",{});var vi=s(Fo);fk=i(vi,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),xl=a(vi,"CODE",{});var aw=s(xl);_k=i(aw,"span start logits"),aw.forEach(t),gk=i(vi," and "),Fl=a(vi,"CODE",{});var sw=s(Fl);bk=i(sw,"span end logits"),sw.forEach(t),kk=i(vi,")."),vi.forEach(t),yk=l(ae),Hs=a(ae,"P",{});var Ap=s(Hs);vk=i(Ap,"This model inherits from "),Qr=a(Ap,"A",{href:!0});var rw=s(Qr);Tk=i(rw,"FlaxPreTrainedModel"),rw.forEach(t),wk=i(Ap,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ap.forEach(t),xk=l(ae),Qs=a(ae,"P",{});var Sp=s(Qs);Fk=i(Sp,`This model is also a Flax Linen
`),Vs=a(Sp,"A",{href:!0,rel:!0});var iw=s(Vs);zk=i(iw,"flax.nn.Module"),iw.forEach(t),qk=i(Sp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Sp.forEach(t),$k=l(ae),zl=a(ae,"P",{});var dw=s(zl);Bk=i(dw,"Finally, this model supports inherent JAX features such as:"),dw.forEach(t),jk=l(ae),ft=a(ae,"UL",{});var Tn=s(ft);ql=a(Tn,"LI",{});var lw=s(ql);Js=a(lw,"A",{href:!0,rel:!0});var cw=s(Js);Ck=i(cw,"Just-In-Time (JIT) compilation"),cw.forEach(t),lw.forEach(t),Mk=l(Tn),$l=a(Tn,"LI",{});var pw=s($l);Xs=a(pw,"A",{href:!0,rel:!0});var hw=s(Xs);Ek=i(hw,"Automatic Differentiation"),hw.forEach(t),pw.forEach(t),Pk=l(Tn),Bl=a(Tn,"LI",{});var uw=s(Bl);Ks=a(uw,"A",{href:!0,rel:!0});var mw=s(Ks);Ak=i(mw,"Vectorization"),mw.forEach(t),uw.forEach(t),Sk=l(Tn),jl=a(Tn,"LI",{});var fw=s(jl);Zs=a(fw,"A",{href:!0,rel:!0});var _w=s(Zs);Ok=i(_w,"Parallelization"),_w.forEach(t),fw.forEach(t),Tn.forEach(t),Ik=l(ae),Ie=a(ae,"DIV",{class:!0});var Nt=s(Ie);f(Ys.$$.fragment,Nt),Nk=l(Nt),zo=a(Nt,"P",{});var Ti=s(zo);Lk=i(Ti,"The "),Cl=a(Ti,"CODE",{});var gw=s(Cl);Dk=i(gw,"FlaxBartPreTrainedModel"),gw.forEach(t),Gk=i(Ti," forward method, overrides the "),Ml=a(Ti,"CODE",{});var bw=s(Ml);Wk=i(bw,"__call__"),bw.forEach(t),Uk=i(Ti," special method."),Ti.forEach(t),Rk=l(Nt),f(pn.$$.fragment,Nt),Hk=l(Nt),El=a(Nt,"P",{});var kw=s(El);Qk=i(kw,"Example:"),kw.forEach(t),Vk=l(Nt),f(er.$$.fragment,Nt),Nt.forEach(t),Jk=l(ae),qt=a(ae,"DIV",{class:!0});var wi=s(qt);f(tr.$$.fragment,wi),Xk=l(wi),Pl=a(wi,"P",{});var yw=s(Pl);Kk=i(yw,"Example:"),yw.forEach(t),Zk=l(wi),f(or.$$.fragment,wi),wi.forEach(t),Yk=l(ae),$t=a(ae,"DIV",{class:!0});var xi=s($t);f(nr.$$.fragment,xi),ey=l(xi),Al=a(xi,"P",{});var vw=s(Al);ty=i(vw,"Example:"),vw.forEach(t),oy=l(xi),f(ar.$$.fragment,xi),xi.forEach(t),ae.forEach(t),Ic=l(o),qo=a(o,"H2",{class:!0});var Op=s(qo);hn=a(Op,"A",{id:!0,class:!0,href:!0});var Tw=s(hn);Sl=a(Tw,"SPAN",{});var ww=s(Sl);f(sr.$$.fragment,ww),ww.forEach(t),Tw.forEach(t),ny=l(Op),Ol=a(Op,"SPAN",{});var xw=s(Ol);ay=i(xw,"FlaxBartForCausalLM"),xw.forEach(t),Op.forEach(t),Nc=l(o),K=a(o,"DIV",{class:!0});var We=s(K);f(rr.$$.fragment,We),sy=l(We),Il=a(We,"P",{});var Fw=s(Il);ry=i(Fw,`Bart Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings)
e.g for autoregressive tasks.`),Fw.forEach(t),iy=l(We),ir=a(We,"P",{});var Ip=s(ir);dy=i(Ip,"This model inherits from "),Vr=a(Ip,"A",{href:!0});var zw=s(Vr);ly=i(zw,"FlaxPreTrainedModel"),zw.forEach(t),cy=i(Ip,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ip.forEach(t),py=l(We),dr=a(We,"P",{});var Np=s(dr);hy=i(Np,`This model is also a Flax Linen
`),lr=a(Np,"A",{href:!0,rel:!0});var qw=s(lr);uy=i(qw,"flax.nn.Module"),qw.forEach(t),my=i(Np,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Np.forEach(t),fy=l(We),Nl=a(We,"P",{});var $w=s(Nl);_y=i($w,"Finally, this model supports inherent JAX features such as:"),$w.forEach(t),gy=l(We),_t=a(We,"UL",{});var wn=s(_t);Ll=a(wn,"LI",{});var Bw=s(Ll);cr=a(Bw,"A",{href:!0,rel:!0});var jw=s(cr);by=i(jw,"Just-In-Time (JIT) compilation"),jw.forEach(t),Bw.forEach(t),ky=l(wn),Dl=a(wn,"LI",{});var Cw=s(Dl);pr=a(Cw,"A",{href:!0,rel:!0});var Mw=s(pr);yy=i(Mw,"Automatic Differentiation"),Mw.forEach(t),Cw.forEach(t),vy=l(wn),Gl=a(wn,"LI",{});var Ew=s(Gl);hr=a(Ew,"A",{href:!0,rel:!0});var Pw=s(hr);Ty=i(Pw,"Vectorization"),Pw.forEach(t),Ew.forEach(t),wy=l(wn),Wl=a(wn,"LI",{});var Aw=s(Wl);ur=a(Aw,"A",{href:!0,rel:!0});var Sw=s(ur);xy=i(Sw,"Parallelization"),Sw.forEach(t),Aw.forEach(t),wn.forEach(t),Fy=l(We),Ne=a(We,"DIV",{class:!0});var Lt=s(Ne);f(mr.$$.fragment,Lt),zy=l(Lt),$o=a(Lt,"P",{});var Fi=s($o);qy=i(Fi,"The "),Ul=a(Fi,"CODE",{});var Ow=s(Ul);$y=i(Ow,"FlaxBartDecoderPreTrainedModel"),Ow.forEach(t),By=i(Fi," forward method, overrides the "),Rl=a(Fi,"CODE",{});var Iw=s(Rl);jy=i(Iw,"__call__"),Iw.forEach(t),Cy=i(Fi," special method."),Fi.forEach(t),My=l(Lt),f(un.$$.fragment,Lt),Ey=l(Lt),Hl=a(Lt,"P",{});var Nw=s(Hl);Py=i(Nw,"Example:"),Nw.forEach(t),Ay=l(Lt),f(fr.$$.fragment,Lt),Lt.forEach(t),We.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(i1)),c(w,"id","bart"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#bart"),c(v,"class","relative group"),c(ye,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ye,"rel","nofollow"),c(N,"id","overview"),c(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(N,"href","#overview"),c(V,"class","relative group"),c(J,"href","https://arxiv.org/abs/1910.13461"),c(J,"rel","nofollow"),c(He,"href","https://huggingface.co/sshleifer"),c(He,"rel","nofollow"),c(Qe,"href","https://github.com/pytorch/fairseq/tree/master/examples/bart"),c(Qe,"rel","nofollow"),c(Me,"id","examples"),c(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Me,"href","#examples"),c(xe,"class","relative group"),c(Fn,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization/README.md"),c(Fn,"rel","nofollow"),c(kr,"href","/docs/transformers/pr_2/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(zn,"href","https://discuss.huggingface.co/t/train-bart-for-conditional-generation-e-g-summarization/1904"),c(zn,"rel","nofollow"),c(qn,"href","https://huggingface.co/models?search=distilbart"),c(qn,"rel","nofollow"),c($n,"href","https://arxiv.org/abs/2010.13002"),c($n,"rel","nofollow"),c(Co,"id","implementation-notes"),c(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Co,"href","#implementation-notes"),c(Ht,"class","relative group"),c(yr,"href","/docs/transformers/pr_2/en/model_doc/bart#transformers.BartTokenizer"),c(vr,"href","/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode"),c(Tr,"href","/docs/transformers/pr_2/en/model_doc/bart#transformers.BartModel"),c(xr,"href","/docs/transformers/pr_2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(Mo,"id","mask-filling"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#mask-filling"),c(Xt,"class","relative group"),c(Eo,"id","transformers.BartConfig"),c(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Eo,"href","#transformers.BartConfig"),c(Kt,"class","relative group"),c(Fr,"href","/docs/transformers/pr_2/en/model_doc/bart#transformers.BartModel"),c(Pn,"href","https://huggingface.co/facebook/bart-large"),c(Pn,"rel","nofollow"),c(zr,"href","/docs/transformers/pr_2/en/main_classes/configuration#transformers.PretrainedConfig"),c(qr,"href","/docs/transformers/pr_2/en/main_classes/configuration#transformers.PretrainedConfig"),c(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Po,"id","transformers.BartTokenizer"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.BartTokenizer"),c(eo,"class","relative group"),c($r,"href","/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(No,"id","transformers.BartTokenizerFast"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.BartTokenizerFast"),c(to,"class","relative group"),c(Cr,"href","/docs/transformers/pr_2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Do,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Go,"id","transformers.BartModel"),c(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Go,"href","#transformers.BartModel"),c(oo,"class","relative group"),c(Mr,"href","/docs/transformers/pr_2/en/main_classes/model#transformers.PreTrainedModel"),c(aa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(aa,"rel","nofollow"),c(Er,"href","/docs/transformers/pr_2/en/model_doc/bart#transformers.BartModel"),c(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Uo,"id","transformers.BartForConditionalGeneration"),c(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Uo,"href","#transformers.BartForConditionalGeneration"),c(ao,"class","relative group"),c(Pr,"href","/docs/transformers/pr_2/en/main_classes/model#transformers.PreTrainedModel"),c(pa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(pa,"rel","nofollow"),c(Ar,"href","/docs/transformers/pr_2/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ho,"id","transformers.BartForSequenceClassification"),c(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ho,"href","#transformers.BartForSequenceClassification"),c(ro,"class","relative group"),c(Sr,"href","/docs/transformers/pr_2/en/main_classes/model#transformers.PreTrainedModel"),c(ka,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ka,"rel","nofollow"),c(Or,"href","/docs/transformers/pr_2/en/model_doc/bart#transformers.BartForSequenceClassification"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Vo,"id","transformers.BartForQuestionAnswering"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#transformers.BartForQuestionAnswering"),c(lo,"class","relative group"),c(Ir,"href","/docs/transformers/pr_2/en/main_classes/model#transformers.PreTrainedModel"),c(Ba,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ba,"rel","nofollow"),c(Nr,"href","/docs/transformers/pr_2/en/model_doc/bart#transformers.BartForQuestionAnswering"),c(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xo,"id","transformers.BartForCausalLM"),c(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xo,"href","#transformers.BartForCausalLM"),c(ho,"class","relative group"),c(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ko,"id","transformers.TFBartModel"),c(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ko,"href","#transformers.TFBartModel"),c(mo,"class","relative group"),c(Lr,"href","/docs/transformers/pr_2/en/main_classes/model#transformers.TFPreTrainedModel"),c(Da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Da,"rel","nofollow"),c(Dr,"href","/docs/transformers/pr_2/en/model_doc/bart#transformers.TFBartModel"),c(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(en,"id","transformers.TFBartForConditionalGeneration"),c(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(en,"href","#transformers.TFBartForConditionalGeneration"),c(_o,"class","relative group"),c(Gr,"href","/docs/transformers/pr_2/en/main_classes/model#transformers.TFPreTrainedModel"),c(Va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Va,"rel","nofollow"),c(Wr,"href","/docs/transformers/pr_2/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),c(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(nn,"id","transformers.FlaxBartModel"),c(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(nn,"href","#transformers.FlaxBartModel"),c(bo,"class","relative group"),c(Ur,"href","/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(os,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(os,"rel","nofollow"),c(ns,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ns,"rel","nofollow"),c(as,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(as,"rel","nofollow"),c(ss,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ss,"rel","nofollow"),c(rs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(rs,"rel","nofollow"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(sn,"id","transformers.FlaxBartForConditionalGeneration"),c(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(sn,"href","#transformers.FlaxBartForConditionalGeneration"),c(yo,"class","relative group"),c(Rr,"href","/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(gs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(gs,"rel","nofollow"),c(bs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(bs,"rel","nofollow"),c(ks,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ks,"rel","nofollow"),c(ys,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ys,"rel","nofollow"),c(vs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(vs,"rel","nofollow"),c(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(dn,"id","transformers.FlaxBartForSequenceClassification"),c(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(dn,"href","#transformers.FlaxBartForSequenceClassification"),c(To,"class","relative group"),c(Hr,"href","/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Es,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Es,"rel","nofollow"),c(Ps,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ps,"rel","nofollow"),c(As,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(As,"rel","nofollow"),c(Ss,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ss,"rel","nofollow"),c(Os,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Os,"rel","nofollow"),c(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(cn,"id","transformers.FlaxBartForQuestionAnswering"),c(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(cn,"href","#transformers.FlaxBartForQuestionAnswering"),c(xo,"class","relative group"),c(Qr,"href","/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Vs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Vs,"rel","nofollow"),c(Js,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Js,"rel","nofollow"),c(Xs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Xs,"rel","nofollow"),c(Ks,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ks,"rel","nofollow"),c(Zs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Zs,"rel","nofollow"),c(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(hn,"id","transformers.FlaxBartForCausalLM"),c(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(hn,"href","#transformers.FlaxBartForCausalLM"),c(qo,"class","relative group"),c(Vr,"href","/docs/transformers/pr_2/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(lr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(lr,"rel","nofollow"),c(cr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(cr,"rel","nofollow"),c(pr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(pr,"rel","nofollow"),c(hr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(hr,"rel","nofollow"),c(ur,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ur,"rel","nofollow"),c(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,h){e(document.head,p),u(o,F,h),u(o,v,h),e(v,w),e(w,x),_(T,x,null),e(v,y),e(v,q),e(q,se),u(o,A,h),u(o,B,h),e(B,pe),e(pe,ke),e(B,tt),e(B,ye),e(ye,ve),e(B,ot),u(o,Ze,h),u(o,V,h),e(V,N),e(N,Ue),_(re,Ue,null),e(V,P),e(V,S),e(S,nt),u(o,he,h),u(o,ue,h),e(ue,at),e(ue,J),e(J,st),e(ue,rt),u(o,L,h),u(o,Ce,h),e(Ce,Te),u(o,Ye,h),u(o,Z,h),e(Z,ie),e(ie,it),e(Z,dt),e(Z,X),e(X,lt),e(Z,we),e(Z,Re),e(Re,z),u(o,M,h),u(o,H,h),e(H,Dt),e(H,He),e(He,de),e(H,Gt),e(H,Qe),e(Qe,Wt),e(H,le),u(o,me,h),u(o,xe,h),e(xe,Me),e(Me,ce),_(Ve,ce,null),e(xe,Ut),e(xe,Je),e(Je,Rt),u(o,ac,h),u(o,gt,h),e(gt,xn),e(xn,Lp),e(xn,Fn),e(Fn,Dp),e(xn,Gp),e(gt,Wp),e(gt,ct),e(ct,Up),e(ct,kr),e(kr,Rp),e(ct,Hp),e(ct,zi),e(zi,Qp),e(ct,Vp),e(ct,zn),e(zn,Jp),e(ct,Xp),e(gt,Kp),e(gt,jo),e(jo,qn),e(qn,Zp),e(jo,Yp),e(jo,$n),e($n,eh),e(jo,th),u(o,sc,h),u(o,Ht,h),e(Ht,Co),e(Co,qi),_(Bn,qi,null),e(Ht,oh),e(Ht,$i),e($i,nh),u(o,rc,h),u(o,Ee,h),e(Ee,pt),e(pt,ah),e(pt,Bi),e(Bi,sh),e(pt,rh),e(pt,yr),e(yr,ih),e(pt,dh),e(pt,vr),e(vr,lh),e(pt,ch),e(Ee,ph),e(Ee,Qt),e(Qt,hh),e(Qt,Tr),e(Tr,uh),e(Qt,mh),e(Qt,ji),e(ji,fh),e(Qt,_h),e(Ee,gh),e(Ee,Vt),e(Vt,bh),e(Vt,Ci),e(Ci,kh),e(Vt,yh),e(Vt,Mi),e(Mi,vh),e(Vt,Th),e(Ee,wh),e(Ee,wr),e(wr,xr),e(xr,xh),e(wr,Fh),e(Ee,zh),e(Ee,Jt),e(Jt,qh),e(Jt,Ei),e(Ei,$h),e(Jt,Bh),e(Jt,Pi),e(Pi,jh),e(Jt,Ch),u(o,ic,h),u(o,Xt,h),e(Xt,Mo),e(Mo,Ai),_(jn,Ai,null),e(Xt,Mh),e(Xt,Si),e(Si,Eh),u(o,dc,h),u(o,bt,h),e(bt,Ph),e(bt,Oi),e(Oi,Ah),e(bt,Sh),e(bt,Ii),e(Ii,Oh),e(bt,Ih),u(o,lc,h),_(Cn,o,h),u(o,cc,h),u(o,Kt,h),e(Kt,Eo),e(Eo,Ni),_(Mn,Ni,null),e(Kt,Nh),e(Kt,Li),e(Li,Lh),u(o,pc,h),u(o,Fe,h),_(En,Fe,null),e(Fe,Dh),e(Fe,Zt),e(Zt,Gh),e(Zt,Fr),e(Fr,Wh),e(Zt,Uh),e(Zt,Pn),e(Pn,Rh),e(Zt,Hh),e(Fe,Qh),e(Fe,Yt),e(Yt,Vh),e(Yt,zr),e(zr,Jh),e(Yt,Xh),e(Yt,qr),e(qr,Kh),e(Yt,Zh),e(Fe,Yh),e(Fe,Di),e(Di,eu),e(Fe,tu),_(An,Fe,null),u(o,hc,h),u(o,eo,h),e(eo,Po),e(Po,Gi),_(Sn,Gi,null),e(eo,ou),e(eo,Wi),e(Wi,nu),u(o,uc,h),u(o,E,h),_(On,E,null),e(E,au),e(E,Ui),e(Ui,su),e(E,ru),e(E,Ri),e(Ri,iu),e(E,du),_(In,E,null),e(E,lu),e(E,Nn),e(Nn,cu),e(Nn,Hi),e(Hi,pu),e(Nn,hu),e(E,uu),_(Ao,E,null),e(E,mu),e(E,Ln),e(Ln,fu),e(Ln,$r),e($r,_u),e(Ln,gu),e(E,bu),e(E,kt),_(Dn,kt,null),e(kt,ku),e(kt,Qi),e(Qi,yu),e(kt,vu),e(kt,Gn),e(Gn,Br),e(Br,Tu),e(Br,Vi),e(Vi,wu),e(Gn,xu),e(Gn,jr),e(jr,Fu),e(jr,Ji),e(Ji,zu),e(E,qu),e(E,So),_(Wn,So,null),e(So,$u),e(So,Xi),e(Xi,Bu),e(E,ju),e(E,Oo),_(Un,Oo,null),e(Oo,Cu),e(Oo,Ki),e(Ki,Mu),e(E,Eu),e(E,Io),_(Rn,Io,null),e(Io,Pu),e(Io,Hn),e(Hn,Au),e(Hn,Zi),e(Zi,Su),e(Hn,Ou),u(o,mc,h),u(o,to,h),e(to,No),e(No,Yi),_(Qn,Yi,null),e(to,Iu),e(to,ed),e(ed,Nu),u(o,fc,h),u(o,W,h),_(Vn,W,null),e(W,Lu),e(W,Jn),e(Jn,Du),e(Jn,td),e(td,Gu),e(Jn,Wu),e(W,Uu),e(W,od),e(od,Ru),e(W,Hu),_(Xn,W,null),e(W,Qu),e(W,Kn),e(Kn,Vu),e(Kn,nd),e(nd,Ju),e(Kn,Xu),e(W,Ku),_(Lo,W,null),e(W,Zu),e(W,Zn),e(Zn,Yu),e(Zn,Cr),e(Cr,em),e(Zn,tm),e(W,om),e(W,Do),_(Yn,Do,null),e(Do,nm),e(Do,ad),e(ad,am),u(o,_c,h),u(o,oo,h),e(oo,Go),e(Go,sd),_(ea,sd,null),e(oo,sm),e(oo,rd),e(rd,rm),u(o,gc,h),u(o,Xe,h),_(ta,Xe,null),e(Xe,im),e(Xe,oa),e(oa,dm),e(oa,Mr),e(Mr,lm),e(oa,cm),e(Xe,pm),e(Xe,na),e(na,hm),e(na,aa),e(aa,um),e(na,mm),e(Xe,fm),e(Xe,Pe),_(sa,Pe,null),e(Pe,_m),e(Pe,no),e(no,gm),e(no,Er),e(Er,bm),e(no,km),e(no,id),e(id,ym),e(no,vm),e(Pe,Tm),_(Wo,Pe,null),e(Pe,wm),e(Pe,dd),e(dd,xm),e(Pe,Fm),_(ra,Pe,null),u(o,bc,h),u(o,ao,h),e(ao,Uo),e(Uo,ld),_(ia,ld,null),e(ao,zm),e(ao,cd),e(cd,qm),u(o,kc,h),u(o,Ke,h),_(da,Ke,null),e(Ke,$m),e(Ke,la),e(la,Bm),e(la,Pr),e(Pr,jm),e(la,Cm),e(Ke,Mm),e(Ke,ca),e(ca,Em),e(ca,pa),e(pa,Pm),e(ca,Am),e(Ke,Sm),e(Ke,Y),_(ha,Y,null),e(Y,Om),e(Y,so),e(so,Im),e(so,Ar),e(Ar,Nm),e(so,Lm),e(so,pd),e(pd,Dm),e(so,Gm),e(Y,Wm),_(Ro,Y,null),e(Y,Um),e(Y,hd),e(hd,Rm),e(Y,Hm),_(ua,Y,null),e(Y,Qm),e(Y,ud),e(ud,Vm),e(Y,Jm),_(ma,Y,null),u(o,yc,h),u(o,ro,h),e(ro,Ho),e(Ho,md),_(fa,md,null),e(ro,Xm),e(ro,fd),e(fd,Km),u(o,vc,h),u(o,ze,h),_(_a,ze,null),e(ze,Zm),e(ze,_d),e(_d,Ym),e(ze,ef),e(ze,ga),e(ga,tf),e(ga,Sr),e(Sr,of),e(ga,nf),e(ze,af),e(ze,ba),e(ba,sf),e(ba,ka),e(ka,rf),e(ba,df),e(ze,lf),e(ze,D),_(ya,D,null),e(D,cf),e(D,io),e(io,pf),e(io,Or),e(Or,hf),e(io,uf),e(io,gd),e(gd,mf),e(io,ff),e(D,_f),_(Qo,D,null),e(D,gf),e(D,bd),e(bd,bf),e(D,kf),_(va,D,null),e(D,yf),_(Ta,D,null),e(D,vf),e(D,kd),e(kd,Tf),e(D,wf),_(wa,D,null),e(D,xf),_(xa,D,null),u(o,Tc,h),u(o,lo,h),e(lo,Vo),e(Vo,yd),_(Fa,yd,null),e(lo,Ff),e(lo,vd),e(vd,zf),u(o,wc,h),u(o,qe,h),_(za,qe,null),e(qe,qf),e(qe,co),e(co,$f),e(co,Td),e(Td,Bf),e(co,jf),e(co,wd),e(wd,Cf),e(co,Mf),e(qe,Ef),e(qe,qa),e(qa,Pf),e(qa,Ir),e(Ir,Af),e(qa,Sf),e(qe,Of),e(qe,$a),e($a,If),e($a,Ba),e(Ba,Nf),e($a,Lf),e(qe,Df),e(qe,fe),_(ja,fe,null),e(fe,Gf),e(fe,po),e(po,Wf),e(po,Nr),e(Nr,Uf),e(po,Rf),e(po,xd),e(xd,Hf),e(po,Qf),e(fe,Vf),_(Jo,fe,null),e(fe,Jf),e(fe,Fd),e(Fd,Xf),e(fe,Kf),_(Ca,fe,null),e(fe,Zf),_(Ma,fe,null),u(o,xc,h),u(o,ho,h),e(ho,Xo),e(Xo,zd),_(Ea,zd,null),e(ho,Yf),e(ho,qd),e(qd,e_),u(o,Fc,h),u(o,uo,h),_(Pa,uo,null),e(uo,t_),e(uo,yt),_(Aa,yt,null),e(yt,o_),e(yt,$d),e($d,n_),e(yt,a_),_(Sa,yt,null),u(o,zc,h),u(o,mo,h),e(mo,Ko),e(Ko,Bd),_(Oa,Bd,null),e(mo,s_),e(mo,jd),e(jd,r_),u(o,qc,h),u(o,$e,h),_(Ia,$e,null),e($e,i_),e($e,Na),e(Na,d_),e(Na,Lr),e(Lr,l_),e(Na,c_),e($e,p_),e($e,La),e(La,h_),e(La,Da),e(Da,u_),e(La,m_),e($e,f_),_(Zo,$e,null),e($e,__),e($e,Ae),_(Ga,Ae,null),e(Ae,g_),e(Ae,fo),e(fo,b_),e(fo,Dr),e(Dr,k_),e(fo,y_),e(fo,Cd),e(Cd,v_),e(fo,T_),e(Ae,w_),_(Yo,Ae,null),e(Ae,x_),e(Ae,Md),e(Md,F_),e(Ae,z_),_(Wa,Ae,null),u(o,$c,h),u(o,_o,h),e(_o,en),e(en,Ed),_(Ua,Ed,null),e(_o,q_),e(_o,Pd),e(Pd,$_),u(o,Bc,h),u(o,Be,h),_(Ra,Be,null),e(Be,B_),e(Be,Ha),e(Ha,j_),e(Ha,Gr),e(Gr,C_),e(Ha,M_),e(Be,E_),e(Be,Qa),e(Qa,P_),e(Qa,Va),e(Va,A_),e(Qa,S_),e(Be,O_),_(tn,Be,null),e(Be,I_),e(Be,ee),_(Ja,ee,null),e(ee,N_),e(ee,go),e(go,L_),e(go,Wr),e(Wr,D_),e(go,G_),e(go,Ad),e(Ad,W_),e(go,U_),e(ee,R_),_(on,ee,null),e(ee,H_),e(ee,Sd),e(Sd,Q_),e(ee,V_),_(Xa,ee,null),e(ee,J_),e(ee,Od),e(Od,X_),e(ee,K_),_(Ka,ee,null),u(o,jc,h),u(o,bo,h),e(bo,nn),e(nn,Id),_(Za,Id,null),e(bo,Z_),e(bo,Nd),e(Nd,Y_),u(o,Cc,h),u(o,U,h),_(Ya,U,null),e(U,eg),e(U,es),e(es,tg),e(es,Ur),e(Ur,og),e(es,ng),e(U,ag),e(U,ts),e(ts,sg),e(ts,os),e(os,rg),e(ts,ig),e(U,dg),e(U,Ld),e(Ld,lg),e(U,cg),e(U,ht),e(ht,Dd),e(Dd,ns),e(ns,pg),e(ht,hg),e(ht,Gd),e(Gd,as),e(as,ug),e(ht,mg),e(ht,Wd),e(Wd,ss),e(ss,fg),e(ht,_g),e(ht,Ud),e(Ud,rs),e(rs,gg),e(U,bg),e(U,Se),_(is,Se,null),e(Se,kg),e(Se,ko),e(ko,yg),e(ko,Rd),e(Rd,vg),e(ko,Tg),e(ko,Hd),e(Hd,wg),e(ko,xg),e(Se,Fg),_(an,Se,null),e(Se,zg),e(Se,Qd),e(Qd,qg),e(Se,$g),_(ds,Se,null),e(U,Bg),e(U,vt),_(ls,vt,null),e(vt,jg),e(vt,Vd),e(Vd,Cg),e(vt,Mg),_(cs,vt,null),e(U,Eg),e(U,Tt),_(ps,Tt,null),e(Tt,Pg),e(Tt,Jd),e(Jd,Ag),e(Tt,Sg),_(hs,Tt,null),u(o,Mc,h),u(o,yo,h),e(yo,sn),e(sn,Xd),_(us,Xd,null),e(yo,Og),e(yo,Kd),e(Kd,Ig),u(o,Ec,h),u(o,R,h),_(ms,R,null),e(R,Ng),e(R,fs),e(fs,Lg),e(fs,Rr),e(Rr,Dg),e(fs,Gg),e(R,Wg),e(R,_s),e(_s,Ug),e(_s,gs),e(gs,Rg),e(_s,Hg),e(R,Qg),e(R,Zd),e(Zd,Vg),e(R,Jg),e(R,ut),e(ut,Yd),e(Yd,bs),e(bs,Xg),e(ut,Kg),e(ut,el),e(el,ks),e(ks,Zg),e(ut,Yg),e(ut,tl),e(tl,ys),e(ys,eb),e(ut,tb),e(ut,ol),e(ol,vs),e(vs,ob),e(R,nb),e(R,te),_(Ts,te,null),e(te,ab),e(te,vo),e(vo,sb),e(vo,nl),e(nl,rb),e(vo,ib),e(vo,al),e(al,db),e(vo,lb),e(te,cb),_(rn,te,null),e(te,pb),e(te,sl),e(sl,hb),e(te,ub),_(ws,te,null),e(te,mb),e(te,rl),e(rl,fb),e(te,_b),_(xs,te,null),e(R,gb),e(R,wt),_(Fs,wt,null),e(wt,bb),e(wt,il),e(il,kb),e(wt,yb),_(zs,wt,null),e(R,vb),e(R,xt),_(qs,xt,null),e(xt,Tb),e(xt,dl),e(dl,wb),e(xt,xb),_($s,xt,null),u(o,Pc,h),u(o,To,h),e(To,dn),e(dn,ll),_(Bs,ll,null),e(To,Fb),e(To,cl),e(cl,zb),u(o,Ac,h),u(o,O,h),_(js,O,null),e(O,qb),e(O,pl),e(pl,$b),e(O,Bb),e(O,Cs),e(Cs,jb),e(Cs,Hr),e(Hr,Cb),e(Cs,Mb),e(O,Eb),e(O,Ms),e(Ms,Pb),e(Ms,Es),e(Es,Ab),e(Ms,Sb),e(O,Ob),e(O,hl),e(hl,Ib),e(O,Nb),e(O,mt),e(mt,ul),e(ul,Ps),e(Ps,Lb),e(mt,Db),e(mt,ml),e(ml,As),e(As,Gb),e(mt,Wb),e(mt,fl),e(fl,Ss),e(Ss,Ub),e(mt,Rb),e(mt,_l),e(_l,Os),e(Os,Hb),e(O,Qb),e(O,Oe),_(Is,Oe,null),e(Oe,Vb),e(Oe,wo),e(wo,Jb),e(wo,gl),e(gl,Xb),e(wo,Kb),e(wo,bl),e(bl,Zb),e(wo,Yb),e(Oe,ek),_(ln,Oe,null),e(Oe,tk),e(Oe,kl),e(kl,ok),e(Oe,nk),_(Ns,Oe,null),e(O,ak),e(O,Ft),_(Ls,Ft,null),e(Ft,sk),e(Ft,yl),e(yl,rk),e(Ft,ik),_(Ds,Ft,null),e(O,dk),e(O,zt),_(Gs,zt,null),e(zt,lk),e(zt,vl),e(vl,ck),e(zt,pk),_(Ws,zt,null),u(o,Sc,h),u(o,xo,h),e(xo,cn),e(cn,Tl),_(Us,Tl,null),e(xo,hk),e(xo,wl),e(wl,uk),u(o,Oc,h),u(o,I,h),_(Rs,I,null),e(I,mk),e(I,Fo),e(Fo,fk),e(Fo,xl),e(xl,_k),e(Fo,gk),e(Fo,Fl),e(Fl,bk),e(Fo,kk),e(I,yk),e(I,Hs),e(Hs,vk),e(Hs,Qr),e(Qr,Tk),e(Hs,wk),e(I,xk),e(I,Qs),e(Qs,Fk),e(Qs,Vs),e(Vs,zk),e(Qs,qk),e(I,$k),e(I,zl),e(zl,Bk),e(I,jk),e(I,ft),e(ft,ql),e(ql,Js),e(Js,Ck),e(ft,Mk),e(ft,$l),e($l,Xs),e(Xs,Ek),e(ft,Pk),e(ft,Bl),e(Bl,Ks),e(Ks,Ak),e(ft,Sk),e(ft,jl),e(jl,Zs),e(Zs,Ok),e(I,Ik),e(I,Ie),_(Ys,Ie,null),e(Ie,Nk),e(Ie,zo),e(zo,Lk),e(zo,Cl),e(Cl,Dk),e(zo,Gk),e(zo,Ml),e(Ml,Wk),e(zo,Uk),e(Ie,Rk),_(pn,Ie,null),e(Ie,Hk),e(Ie,El),e(El,Qk),e(Ie,Vk),_(er,Ie,null),e(I,Jk),e(I,qt),_(tr,qt,null),e(qt,Xk),e(qt,Pl),e(Pl,Kk),e(qt,Zk),_(or,qt,null),e(I,Yk),e(I,$t),_(nr,$t,null),e($t,ey),e($t,Al),e(Al,ty),e($t,oy),_(ar,$t,null),u(o,Ic,h),u(o,qo,h),e(qo,hn),e(hn,Sl),_(sr,Sl,null),e(qo,ny),e(qo,Ol),e(Ol,ay),u(o,Nc,h),u(o,K,h),_(rr,K,null),e(K,sy),e(K,Il),e(Il,ry),e(K,iy),e(K,ir),e(ir,dy),e(ir,Vr),e(Vr,ly),e(ir,cy),e(K,py),e(K,dr),e(dr,hy),e(dr,lr),e(lr,uy),e(dr,my),e(K,fy),e(K,Nl),e(Nl,_y),e(K,gy),e(K,_t),e(_t,Ll),e(Ll,cr),e(cr,by),e(_t,ky),e(_t,Dl),e(Dl,pr),e(pr,yy),e(_t,vy),e(_t,Gl),e(Gl,hr),e(hr,Ty),e(_t,wy),e(_t,Wl),e(Wl,ur),e(ur,xy),e(K,Fy),e(K,Ne),_(mr,Ne,null),e(Ne,zy),e(Ne,$o),e($o,qy),e($o,Ul),e(Ul,$y),e($o,By),e($o,Rl),e(Rl,jy),e($o,Cy),e(Ne,My),_(un,Ne,null),e(Ne,Ey),e(Ne,Hl),e(Hl,Py),e(Ne,Ay),_(fr,Ne,null),Lc=!0},p(o,[h]){const _r={};h&2&&(_r.$$scope={dirty:h,ctx:o}),Ao.$set(_r);const Ql={};h&2&&(Ql.$$scope={dirty:h,ctx:o}),Lo.$set(Ql);const Vl={};h&2&&(Vl.$$scope={dirty:h,ctx:o}),Wo.$set(Vl);const Jl={};h&2&&(Jl.$$scope={dirty:h,ctx:o}),Ro.$set(Jl);const mn={};h&2&&(mn.$$scope={dirty:h,ctx:o}),Qo.$set(mn);const Xl={};h&2&&(Xl.$$scope={dirty:h,ctx:o}),Jo.$set(Xl);const Kl={};h&2&&(Kl.$$scope={dirty:h,ctx:o}),Zo.$set(Kl);const gr={};h&2&&(gr.$$scope={dirty:h,ctx:o}),Yo.$set(gr);const Zl={};h&2&&(Zl.$$scope={dirty:h,ctx:o}),tn.$set(Zl);const Yl={};h&2&&(Yl.$$scope={dirty:h,ctx:o}),on.$set(Yl);const ec={};h&2&&(ec.$$scope={dirty:h,ctx:o}),an.$set(ec);const br={};h&2&&(br.$$scope={dirty:h,ctx:o}),rn.$set(br);const tc={};h&2&&(tc.$$scope={dirty:h,ctx:o}),ln.$set(tc);const oc={};h&2&&(oc.$$scope={dirty:h,ctx:o}),pn.$set(oc);const Bo={};h&2&&(Bo.$$scope={dirty:h,ctx:o}),un.$set(Bo)},i(o){Lc||(g(T.$$.fragment,o),g(re.$$.fragment,o),g(Ve.$$.fragment,o),g(Bn.$$.fragment,o),g(jn.$$.fragment,o),g(Cn.$$.fragment,o),g(Mn.$$.fragment,o),g(En.$$.fragment,o),g(An.$$.fragment,o),g(Sn.$$.fragment,o),g(On.$$.fragment,o),g(In.$$.fragment,o),g(Ao.$$.fragment,o),g(Dn.$$.fragment,o),g(Wn.$$.fragment,o),g(Un.$$.fragment,o),g(Rn.$$.fragment,o),g(Qn.$$.fragment,o),g(Vn.$$.fragment,o),g(Xn.$$.fragment,o),g(Lo.$$.fragment,o),g(Yn.$$.fragment,o),g(ea.$$.fragment,o),g(ta.$$.fragment,o),g(sa.$$.fragment,o),g(Wo.$$.fragment,o),g(ra.$$.fragment,o),g(ia.$$.fragment,o),g(da.$$.fragment,o),g(ha.$$.fragment,o),g(Ro.$$.fragment,o),g(ua.$$.fragment,o),g(ma.$$.fragment,o),g(fa.$$.fragment,o),g(_a.$$.fragment,o),g(ya.$$.fragment,o),g(Qo.$$.fragment,o),g(va.$$.fragment,o),g(Ta.$$.fragment,o),g(wa.$$.fragment,o),g(xa.$$.fragment,o),g(Fa.$$.fragment,o),g(za.$$.fragment,o),g(ja.$$.fragment,o),g(Jo.$$.fragment,o),g(Ca.$$.fragment,o),g(Ma.$$.fragment,o),g(Ea.$$.fragment,o),g(Pa.$$.fragment,o),g(Aa.$$.fragment,o),g(Sa.$$.fragment,o),g(Oa.$$.fragment,o),g(Ia.$$.fragment,o),g(Zo.$$.fragment,o),g(Ga.$$.fragment,o),g(Yo.$$.fragment,o),g(Wa.$$.fragment,o),g(Ua.$$.fragment,o),g(Ra.$$.fragment,o),g(tn.$$.fragment,o),g(Ja.$$.fragment,o),g(on.$$.fragment,o),g(Xa.$$.fragment,o),g(Ka.$$.fragment,o),g(Za.$$.fragment,o),g(Ya.$$.fragment,o),g(is.$$.fragment,o),g(an.$$.fragment,o),g(ds.$$.fragment,o),g(ls.$$.fragment,o),g(cs.$$.fragment,o),g(ps.$$.fragment,o),g(hs.$$.fragment,o),g(us.$$.fragment,o),g(ms.$$.fragment,o),g(Ts.$$.fragment,o),g(rn.$$.fragment,o),g(ws.$$.fragment,o),g(xs.$$.fragment,o),g(Fs.$$.fragment,o),g(zs.$$.fragment,o),g(qs.$$.fragment,o),g($s.$$.fragment,o),g(Bs.$$.fragment,o),g(js.$$.fragment,o),g(Is.$$.fragment,o),g(ln.$$.fragment,o),g(Ns.$$.fragment,o),g(Ls.$$.fragment,o),g(Ds.$$.fragment,o),g(Gs.$$.fragment,o),g(Ws.$$.fragment,o),g(Us.$$.fragment,o),g(Rs.$$.fragment,o),g(Ys.$$.fragment,o),g(pn.$$.fragment,o),g(er.$$.fragment,o),g(tr.$$.fragment,o),g(or.$$.fragment,o),g(nr.$$.fragment,o),g(ar.$$.fragment,o),g(sr.$$.fragment,o),g(rr.$$.fragment,o),g(mr.$$.fragment,o),g(un.$$.fragment,o),g(fr.$$.fragment,o),Lc=!0)},o(o){b(T.$$.fragment,o),b(re.$$.fragment,o),b(Ve.$$.fragment,o),b(Bn.$$.fragment,o),b(jn.$$.fragment,o),b(Cn.$$.fragment,o),b(Mn.$$.fragment,o),b(En.$$.fragment,o),b(An.$$.fragment,o),b(Sn.$$.fragment,o),b(On.$$.fragment,o),b(In.$$.fragment,o),b(Ao.$$.fragment,o),b(Dn.$$.fragment,o),b(Wn.$$.fragment,o),b(Un.$$.fragment,o),b(Rn.$$.fragment,o),b(Qn.$$.fragment,o),b(Vn.$$.fragment,o),b(Xn.$$.fragment,o),b(Lo.$$.fragment,o),b(Yn.$$.fragment,o),b(ea.$$.fragment,o),b(ta.$$.fragment,o),b(sa.$$.fragment,o),b(Wo.$$.fragment,o),b(ra.$$.fragment,o),b(ia.$$.fragment,o),b(da.$$.fragment,o),b(ha.$$.fragment,o),b(Ro.$$.fragment,o),b(ua.$$.fragment,o),b(ma.$$.fragment,o),b(fa.$$.fragment,o),b(_a.$$.fragment,o),b(ya.$$.fragment,o),b(Qo.$$.fragment,o),b(va.$$.fragment,o),b(Ta.$$.fragment,o),b(wa.$$.fragment,o),b(xa.$$.fragment,o),b(Fa.$$.fragment,o),b(za.$$.fragment,o),b(ja.$$.fragment,o),b(Jo.$$.fragment,o),b(Ca.$$.fragment,o),b(Ma.$$.fragment,o),b(Ea.$$.fragment,o),b(Pa.$$.fragment,o),b(Aa.$$.fragment,o),b(Sa.$$.fragment,o),b(Oa.$$.fragment,o),b(Ia.$$.fragment,o),b(Zo.$$.fragment,o),b(Ga.$$.fragment,o),b(Yo.$$.fragment,o),b(Wa.$$.fragment,o),b(Ua.$$.fragment,o),b(Ra.$$.fragment,o),b(tn.$$.fragment,o),b(Ja.$$.fragment,o),b(on.$$.fragment,o),b(Xa.$$.fragment,o),b(Ka.$$.fragment,o),b(Za.$$.fragment,o),b(Ya.$$.fragment,o),b(is.$$.fragment,o),b(an.$$.fragment,o),b(ds.$$.fragment,o),b(ls.$$.fragment,o),b(cs.$$.fragment,o),b(ps.$$.fragment,o),b(hs.$$.fragment,o),b(us.$$.fragment,o),b(ms.$$.fragment,o),b(Ts.$$.fragment,o),b(rn.$$.fragment,o),b(ws.$$.fragment,o),b(xs.$$.fragment,o),b(Fs.$$.fragment,o),b(zs.$$.fragment,o),b(qs.$$.fragment,o),b($s.$$.fragment,o),b(Bs.$$.fragment,o),b(js.$$.fragment,o),b(Is.$$.fragment,o),b(ln.$$.fragment,o),b(Ns.$$.fragment,o),b(Ls.$$.fragment,o),b(Ds.$$.fragment,o),b(Gs.$$.fragment,o),b(Ws.$$.fragment,o),b(Us.$$.fragment,o),b(Rs.$$.fragment,o),b(Ys.$$.fragment,o),b(pn.$$.fragment,o),b(er.$$.fragment,o),b(tr.$$.fragment,o),b(or.$$.fragment,o),b(nr.$$.fragment,o),b(ar.$$.fragment,o),b(sr.$$.fragment,o),b(rr.$$.fragment,o),b(mr.$$.fragment,o),b(un.$$.fragment,o),b(fr.$$.fragment,o),Lc=!1},d(o){t(p),o&&t(F),o&&t(v),k(T),o&&t(A),o&&t(B),o&&t(Ze),o&&t(V),k(re),o&&t(he),o&&t(ue),o&&t(L),o&&t(Ce),o&&t(Ye),o&&t(Z),o&&t(M),o&&t(H),o&&t(me),o&&t(xe),k(Ve),o&&t(ac),o&&t(gt),o&&t(sc),o&&t(Ht),k(Bn),o&&t(rc),o&&t(Ee),o&&t(ic),o&&t(Xt),k(jn),o&&t(dc),o&&t(bt),o&&t(lc),k(Cn,o),o&&t(cc),o&&t(Kt),k(Mn),o&&t(pc),o&&t(Fe),k(En),k(An),o&&t(hc),o&&t(eo),k(Sn),o&&t(uc),o&&t(E),k(On),k(In),k(Ao),k(Dn),k(Wn),k(Un),k(Rn),o&&t(mc),o&&t(to),k(Qn),o&&t(fc),o&&t(W),k(Vn),k(Xn),k(Lo),k(Yn),o&&t(_c),o&&t(oo),k(ea),o&&t(gc),o&&t(Xe),k(ta),k(sa),k(Wo),k(ra),o&&t(bc),o&&t(ao),k(ia),o&&t(kc),o&&t(Ke),k(da),k(ha),k(Ro),k(ua),k(ma),o&&t(yc),o&&t(ro),k(fa),o&&t(vc),o&&t(ze),k(_a),k(ya),k(Qo),k(va),k(Ta),k(wa),k(xa),o&&t(Tc),o&&t(lo),k(Fa),o&&t(wc),o&&t(qe),k(za),k(ja),k(Jo),k(Ca),k(Ma),o&&t(xc),o&&t(ho),k(Ea),o&&t(Fc),o&&t(uo),k(Pa),k(Aa),k(Sa),o&&t(zc),o&&t(mo),k(Oa),o&&t(qc),o&&t($e),k(Ia),k(Zo),k(Ga),k(Yo),k(Wa),o&&t($c),o&&t(_o),k(Ua),o&&t(Bc),o&&t(Be),k(Ra),k(tn),k(Ja),k(on),k(Xa),k(Ka),o&&t(jc),o&&t(bo),k(Za),o&&t(Cc),o&&t(U),k(Ya),k(is),k(an),k(ds),k(ls),k(cs),k(ps),k(hs),o&&t(Mc),o&&t(yo),k(us),o&&t(Ec),o&&t(R),k(ms),k(Ts),k(rn),k(ws),k(xs),k(Fs),k(zs),k(qs),k($s),o&&t(Pc),o&&t(To),k(Bs),o&&t(Ac),o&&t(O),k(js),k(Is),k(ln),k(Ns),k(Ls),k(Ds),k(Gs),k(Ws),o&&t(Sc),o&&t(xo),k(Us),o&&t(Oc),o&&t(I),k(Rs),k(Ys),k(pn),k(er),k(tr),k(or),k(nr),k(ar),o&&t(Ic),o&&t(qo),k(sr),o&&t(Nc),o&&t(K),k(rr),k(mr),k(un),k(fr)}}}const i1={local:"bart",sections:[{local:"overview",sections:[{local:"examples",title:"Examples"}],title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"mask-filling",title:"Mask Filling"},{local:"transformers.BartConfig",title:"BartConfig"},{local:"transformers.BartTokenizer",title:"BartTokenizer"},{local:"transformers.BartTokenizerFast",title:"BartTokenizerFast"},{local:"transformers.BartModel",title:"BartModel"},{local:"transformers.BartForConditionalGeneration",title:"BartForConditionalGeneration"},{local:"transformers.BartForSequenceClassification",title:"BartForSequenceClassification"},{local:"transformers.BartForQuestionAnswering",title:"BartForQuestionAnswering"},{local:"transformers.BartForCausalLM",title:"BartForCausalLM"},{local:"transformers.TFBartModel",title:"TFBartModel"},{local:"transformers.TFBartForConditionalGeneration",title:"TFBartForConditionalGeneration"},{local:"transformers.FlaxBartModel",title:"FlaxBartModel"},{local:"transformers.FlaxBartForConditionalGeneration",title:"FlaxBartForConditionalGeneration"},{local:"transformers.FlaxBartForSequenceClassification",title:"FlaxBartForSequenceClassification"},{local:"transformers.FlaxBartForQuestionAnswering",title:"FlaxBartForQuestionAnswering"},{local:"transformers.FlaxBartForCausalLM",title:"FlaxBartForCausalLM"}],title:"BART"};function d1(j){return Uw(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class m1 extends Lw{constructor(p){super();Dw(this,p,d1,r1,Gw,{})}}export{m1 as default,i1 as metadata};
