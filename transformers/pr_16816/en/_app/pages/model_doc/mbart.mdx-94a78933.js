import{S as C0,i as E0,s as P0,e as n,k as d,w as u,t as r,M as S0,c as a,d as t,m as l,a as s,x as m,h as i,b as c,F as e,g as h,y as f,q as _,o as g,B as b,v as A0}from"../../chunks/vendor-6b77c823.js";import{T as st}from"../../chunks/Tip-39098574.js";import{D as F}from"../../chunks/Docstring-17b815d9.js";import{C as $}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as X}from"../../chunks/IconCopyLink-7a11ce68.js";function O0(C){let k,z,v,M,x;return{c(){k=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){k=a(T,"P",{});var y=s(k);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,k,y),e(k,z),e(k,v),e(v,M),e(k,x)},d(T){T&&t(k)}}}function I0(C){let k,z,v,M,x;return{c(){k=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){k=a(T,"P",{});var y=s(k);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,k,y),e(k,z),e(k,v),e(v,M),e(k,x)},d(T){T&&t(k)}}}function N0(C){let k,z,v,M,x;return{c(){k=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){k=a(T,"P",{});var y=s(k);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,k,y),e(k,z),e(k,v),e(v,M),e(k,x)},d(T){T&&t(k)}}}function D0(C){let k,z,v,M,x;return{c(){k=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){k=a(T,"P",{});var y=s(k);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,k,y),e(k,z),e(k,v),e(v,M),e(k,x)},d(T){T&&t(k)}}}function L0(C){let k,z,v,M,x,T,y,q,rt,Ee,j,Re,be,it,ke,ye,dt,Ke,J,N,Xe,se,E,A,lt,pe,he,ct,K,pt,ht,D,Pe,ve,Ze,re,Te,we,ut,ie,Me,xe,Ye;return{c(){k=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),M=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),q=n("li"),rt=r("having all inputs as a list, tuple or dict in the first positional arguments."),Ee=d(),j=n("p"),Re=r("This second option is useful when using "),be=n("code"),it=r("tf.keras.Model.fit"),ke=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=n("code"),dt=r("model(inputs)"),Ke=r("."),J=d(),N=n("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se=d(),E=n("ul"),A=n("li"),lt=r("a single Tensor with "),pe=n("code"),he=r("input_ids"),ct=r(" only and nothing else: "),K=n("code"),pt=r("model(input_ids)"),ht=d(),D=n("li"),Pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=n("code"),Ze=r("model([input_ids, attention_mask])"),re=r(" or "),Te=n("code"),we=r("model([input_ids, attention_mask, token_type_ids])"),ut=d(),ie=n("li"),Me=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=n("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){k=a(w,"P",{});var B=s(k);z=i(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),v=l(w),M=a(w,"UL",{});var ze=s(M);x=a(ze,"LI",{});var Ve=s(x);T=i(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),y=l(ze),q=a(ze,"LI",{});var Ut=s(q);rt=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),ze.forEach(t),Ee=l(w),j=a(w,"P",{});var Z=s(j);Re=i(Z,"This second option is useful when using "),be=a(Z,"CODE",{});var Rt=s(be);it=i(Rt,"tf.keras.Model.fit"),Rt.forEach(t),ke=i(Z,` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=a(Z,"CODE",{});var kt=s(ye);dt=i(kt,"model(inputs)"),kt.forEach(t),Ke=i(Z,"."),Z.forEach(t),J=l(w),N=a(w,"P",{});var V=s(N);Xe=i(V,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V.forEach(t),se=l(w),E=a(w,"UL",{});var de=s(E);A=a(de,"LI",{});var le=s(A);lt=i(le,"a single Tensor with "),pe=a(le,"CODE",{});var Xt=s(pe);he=i(Xt,"input_ids"),Xt.forEach(t),ct=i(le," only and nothing else: "),K=a(le,"CODE",{});var Vt=s(K);pt=i(Vt,"model(input_ids)"),Vt.forEach(t),le.forEach(t),ht=l(de),D=a(de,"LI",{});var ce=s(D);Pe=i(ce,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=a(ce,"CODE",{});var Qt=s(ve);Ze=i(Qt,"model([input_ids, attention_mask])"),Qt.forEach(t),re=i(ce," or "),Te=a(ce,"CODE",{});var Ht=s(Te);we=i(Ht,"model([input_ids, attention_mask, token_type_ids])"),Ht.forEach(t),ce.forEach(t),ut=l(de),ie=a(de,"LI",{});var Qe=s(ie);Me=i(Qe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=a(Qe,"CODE",{});var Jt=s(xe);Ye=i(Jt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Jt.forEach(t),Qe.forEach(t),de.forEach(t)},m(w,B){h(w,k,B),e(k,z),h(w,v,B),h(w,M,B),e(M,x),e(x,T),e(M,y),e(M,q),e(q,rt),h(w,Ee,B),h(w,j,B),e(j,Re),e(j,be),e(be,it),e(j,ke),e(j,ye),e(ye,dt),e(j,Ke),h(w,J,B),h(w,N,B),e(N,Xe),h(w,se,B),h(w,E,B),e(E,A),e(A,lt),e(A,pe),e(pe,he),e(A,ct),e(A,K),e(K,pt),e(E,ht),e(E,D),e(D,Pe),e(D,ve),e(ve,Ze),e(D,re),e(D,Te),e(Te,we),e(E,ut),e(E,ie),e(ie,Me),e(ie,xe),e(xe,Ye)},d(w){w&&t(k),w&&t(v),w&&t(M),w&&t(Ee),w&&t(j),w&&t(J),w&&t(N),w&&t(se),w&&t(E)}}}function G0(C){let k,z,v,M,x;return{c(){k=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){k=a(T,"P",{});var y=s(k);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,k,y),e(k,z),e(k,v),e(v,M),e(k,x)},d(T){T&&t(k)}}}function W0(C){let k,z,v,M,x,T,y,q,rt,Ee,j,Re,be,it,ke,ye,dt,Ke,J,N,Xe,se,E,A,lt,pe,he,ct,K,pt,ht,D,Pe,ve,Ze,re,Te,we,ut,ie,Me,xe,Ye;return{c(){k=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),M=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),q=n("li"),rt=r("having all inputs as a list, tuple or dict in the first positional arguments."),Ee=d(),j=n("p"),Re=r("This second option is useful when using "),be=n("code"),it=r("tf.keras.Model.fit"),ke=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=n("code"),dt=r("model(inputs)"),Ke=r("."),J=d(),N=n("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se=d(),E=n("ul"),A=n("li"),lt=r("a single Tensor with "),pe=n("code"),he=r("input_ids"),ct=r(" only and nothing else: "),K=n("code"),pt=r("model(input_ids)"),ht=d(),D=n("li"),Pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=n("code"),Ze=r("model([input_ids, attention_mask])"),re=r(" or "),Te=n("code"),we=r("model([input_ids, attention_mask, token_type_ids])"),ut=d(),ie=n("li"),Me=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=n("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){k=a(w,"P",{});var B=s(k);z=i(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),v=l(w),M=a(w,"UL",{});var ze=s(M);x=a(ze,"LI",{});var Ve=s(x);T=i(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),y=l(ze),q=a(ze,"LI",{});var Ut=s(q);rt=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),ze.forEach(t),Ee=l(w),j=a(w,"P",{});var Z=s(j);Re=i(Z,"This second option is useful when using "),be=a(Z,"CODE",{});var Rt=s(be);it=i(Rt,"tf.keras.Model.fit"),Rt.forEach(t),ke=i(Z,` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=a(Z,"CODE",{});var kt=s(ye);dt=i(kt,"model(inputs)"),kt.forEach(t),Ke=i(Z,"."),Z.forEach(t),J=l(w),N=a(w,"P",{});var V=s(N);Xe=i(V,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V.forEach(t),se=l(w),E=a(w,"UL",{});var de=s(E);A=a(de,"LI",{});var le=s(A);lt=i(le,"a single Tensor with "),pe=a(le,"CODE",{});var Xt=s(pe);he=i(Xt,"input_ids"),Xt.forEach(t),ct=i(le," only and nothing else: "),K=a(le,"CODE",{});var Vt=s(K);pt=i(Vt,"model(input_ids)"),Vt.forEach(t),le.forEach(t),ht=l(de),D=a(de,"LI",{});var ce=s(D);Pe=i(ce,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=a(ce,"CODE",{});var Qt=s(ve);Ze=i(Qt,"model([input_ids, attention_mask])"),Qt.forEach(t),re=i(ce," or "),Te=a(ce,"CODE",{});var Ht=s(Te);we=i(Ht,"model([input_ids, attention_mask, token_type_ids])"),Ht.forEach(t),ce.forEach(t),ut=l(de),ie=a(de,"LI",{});var Qe=s(ie);Me=i(Qe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=a(Qe,"CODE",{});var Jt=s(xe);Ye=i(Jt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Jt.forEach(t),Qe.forEach(t),de.forEach(t)},m(w,B){h(w,k,B),e(k,z),h(w,v,B),h(w,M,B),e(M,x),e(x,T),e(M,y),e(M,q),e(q,rt),h(w,Ee,B),h(w,j,B),e(j,Re),e(j,be),e(be,it),e(j,ke),e(j,ye),e(ye,dt),e(j,Ke),h(w,J,B),h(w,N,B),e(N,Xe),h(w,se,B),h(w,E,B),e(E,A),e(A,lt),e(A,pe),e(pe,he),e(A,ct),e(A,K),e(K,pt),e(E,ht),e(E,D),e(D,Pe),e(D,ve),e(ve,Ze),e(D,re),e(D,Te),e(Te,we),e(E,ut),e(E,ie),e(ie,Me),e(ie,xe),e(xe,Ye)},d(w){w&&t(k),w&&t(v),w&&t(M),w&&t(Ee),w&&t(j),w&&t(J),w&&t(N),w&&t(se),w&&t(E)}}}function U0(C){let k,z,v,M,x;return{c(){k=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){k=a(T,"P",{});var y=s(k);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,k,y),e(k,z),e(k,v),e(v,M),e(k,x)},d(T){T&&t(k)}}}function R0(C){let k,z,v,M,x;return{c(){k=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){k=a(T,"P",{});var y=s(k);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,k,y),e(k,z),e(k,v),e(v,M),e(k,x)},d(T){T&&t(k)}}}function X0(C){let k,z,v,M,x;return{c(){k=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){k=a(T,"P",{});var y=s(k);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,k,y),e(k,z),e(k,v),e(v,M),e(k,x)},d(T){T&&t(k)}}}function V0(C){let k,z,v,M,x;return{c(){k=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){k=a(T,"P",{});var y=s(k);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,k,y),e(k,z),e(k,v),e(v,M),e(k,x)},d(T){T&&t(k)}}}function Q0(C){let k,z,v,M,x;return{c(){k=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){k=a(T,"P",{});var y=s(k);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var q=s(v);M=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,k,y),e(k,z),e(k,v),e(v,M),e(k,x)},d(T){T&&t(k)}}}function H0(C){let k,z,v,M,x,T,y,q,rt,Ee,j,Re,be,it,ke,ye,dt,Ke,J,N,Xe,se,E,A,lt,pe,he,ct,K,pt,ht,D,Pe,ve,Ze,re,Te,we,ut,ie,Me,xe,Ye,w,B,ze,Ve,Ut,Z,Rt,kt,V,de,le,Xt,Vt,ce,Qt,Ht,Qe,Jt,Eu,rd,Pu,Su,_p,yt,Au,En,id,Ou,Iu,Nu,ei,Du,Lu,gp,ti,dd,Gu,bp,Pn,kp,oi,Sn,ld,Wu,Uu,Kt,Ru,cd,Xu,Vu,pd,Qu,Hu,yp,An,vp,Zt,Po,hd,On,Ju,ud,Ku,Tp,vt,Zu,In,Yu,em,md,tm,om,wp,ni,nm,Mp,ai,fd,am,xp,Yt,So,_d,Nn,sm,gd,rm,zp,et,im,bd,dm,lm,kd,cm,pm,yd,hm,um,Fp,Ao,mm,si,fm,_m,qp,ri,vd,gm,$p,Dn,Bp,ii,Ln,Td,bm,km,Fe,ym,wd,vm,Tm,Md,wm,Mm,xd,xm,zm,zd,Fm,qm,Fd,$m,Bm,jp,Gn,Cp,eo,Oo,qd,Wn,jm,$d,Cm,Ep,qe,Un,Em,to,Pm,di,Sm,Am,Rn,Om,Im,Nm,oo,Dm,li,Lm,Gm,ci,Wm,Um,Rm,Bd,Xm,Vm,Xn,Pp,no,Io,jd,Vn,Qm,Cd,Hm,Sp,G,Qn,Jm,Ed,Km,Zm,mt,Ym,pi,ef,tf,hi,of,nf,Hn,af,sf,rf,Jn,df,Pd,lf,cf,pf,Sd,hf,uf,Kn,mf,No,Zn,ff,Ad,_f,gf,tt,Yn,bf,ea,kf,Od,yf,vf,Tf,ta,oa,Id,wf,Mf,Nd,xf,zf,na,Dd,Ff,qf,Ld,$f,Bf,Gd,jf,Ap,ao,Do,Wd,aa,Cf,Ud,Ef,Op,P,sa,Pf,so,Sf,Rd,Af,Of,ra,If,Nf,Df,ia,Lf,ui,Gf,Wf,Uf,da,Rf,Xd,Xf,Vf,Qf,Vd,Hf,Jf,la,Kf,Se,ca,Zf,Qd,Yf,e_,pa,t_,Hd,o_,n_,a_,ha,ua,Jd,s_,r_,Kd,i_,d_,ma,Zd,l_,c_,Yd,p_,h_,el,u_,m_,Lo,fa,f_,tl,__,g_,Go,_a,b_,ol,k_,y_,Wo,ga,v_,nl,T_,Ip,ro,Uo,al,ba,w_,sl,M_,Np,S,ka,x_,ya,z_,va,F_,q_,$_,Ta,B_,mi,j_,C_,E_,rl,P_,S_,wa,A_,ot,Ma,O_,xa,I_,il,N_,D_,L_,za,Fa,dl,G_,W_,ll,U_,R_,qa,cl,X_,V_,pl,Q_,H_,hl,J_,K_,Ro,$a,Z_,ul,Y_,eg,Xo,Ba,tg,ja,og,ml,ng,ag,sg,Vo,Ca,rg,fl,ig,dg,Qo,Ea,lg,_l,cg,Dp,io,Ho,gl,Pa,pg,bl,hg,Lp,W,Sa,ug,lo,mg,kl,fg,_g,Aa,gg,bg,kg,Oa,yg,fi,vg,Tg,wg,yl,Mg,xg,Ia,zg,Ae,Na,Fg,vl,qg,$g,Da,Bg,Tl,jg,Cg,Eg,La,Ga,wl,Pg,Sg,Ml,Ag,Og,Wa,xl,Ig,Ng,zl,Dg,Lg,Fl,Gg,Wg,Jo,Ua,Ug,ql,Rg,Xg,Ko,Ra,Vg,$l,Qg,Gp,co,Zo,Bl,Xa,Hg,jl,Jg,Wp,He,Va,Kg,Qa,Zg,_i,Yg,eb,tb,Ha,ob,Ja,nb,ab,sb,Oe,Ka,rb,po,ib,gi,db,lb,Cl,cb,pb,hb,Yo,ub,El,mb,fb,Za,Up,ho,en,Pl,Ya,_b,Sl,gb,Rp,Je,es,bb,ts,kb,bi,yb,vb,Tb,os,wb,ns,Mb,xb,zb,Y,as,Fb,uo,qb,ki,$b,Bb,Al,jb,Cb,Eb,tn,Pb,Ol,Sb,Ab,ss,Ob,Il,Ib,Nb,rs,Xp,mo,on,Nl,is,Db,Dl,Lb,Vp,$e,ds,Gb,fo,Wb,Ll,Ub,Rb,Gl,Xb,Vb,Qb,ls,Hb,yi,Jb,Kb,Zb,cs,Yb,ps,ek,tk,ok,ue,hs,nk,_o,ak,vi,sk,rk,Wl,ik,dk,lk,nn,ck,Ul,pk,hk,us,uk,ms,Qp,go,an,Rl,fs,mk,Xl,fk,Hp,Be,_s,_k,Vl,gk,bk,gs,kk,Ti,yk,vk,Tk,bs,wk,ks,Mk,xk,zk,L,ys,Fk,bo,qk,wi,$k,Bk,Ql,jk,Ck,Ek,sn,Pk,Hl,Sk,Ak,vs,Ok,Ts,Ik,Jl,Nk,Dk,ws,Lk,Ms,Jp,ko,rn,Kl,xs,Gk,Zl,Wk,Kp,yo,zs,Uk,Tt,Fs,Rk,Yl,Xk,Vk,qs,Zp,vo,dn,ec,$s,Qk,tc,Hk,Yp,je,Bs,Jk,js,Kk,Mi,Zk,Yk,ey,Cs,ty,Es,oy,ny,ay,ln,sy,Ie,Ps,ry,To,iy,xi,dy,ly,oc,cy,py,hy,cn,uy,nc,my,fy,Ss,eh,wo,pn,ac,As,_y,sc,gy,th,Ce,Os,by,Is,ky,zi,yy,vy,Ty,Ns,wy,Ds,My,xy,zy,hn,Fy,ee,Ls,qy,Mo,$y,Fi,By,jy,rc,Cy,Ey,Py,un,Sy,ic,Ay,Oy,Gs,Iy,dc,Ny,Dy,Ws,oh,xo,mn,lc,Us,Ly,cc,Gy,nh,U,Rs,Wy,Xs,Uy,qi,Ry,Xy,Vy,Vs,Qy,Qs,Hy,Jy,Ky,pc,Zy,Yy,ft,hc,Hs,ev,tv,uc,Js,ov,nv,mc,Ks,av,sv,fc,Zs,rv,iv,Ne,Ys,dv,zo,lv,_c,cv,pv,gc,hv,uv,mv,fn,fv,bc,_v,gv,er,bv,wt,tr,kv,kc,yv,vv,or,Tv,Mt,nr,wv,yc,Mv,xv,ar,ah,Fo,_n,vc,sr,zv,Tc,Fv,sh,R,rr,qv,ir,$v,$i,Bv,jv,Cv,dr,Ev,lr,Pv,Sv,Av,wc,Ov,Iv,_t,Mc,cr,Nv,Dv,xc,pr,Lv,Gv,zc,hr,Wv,Uv,Fc,ur,Rv,Xv,te,mr,Vv,qo,Qv,qc,Hv,Jv,$c,Kv,Zv,Yv,gn,e1,Bc,t1,o1,fr,n1,jc,a1,s1,_r,r1,xt,gr,i1,Cc,d1,l1,br,c1,zt,kr,p1,Ec,h1,u1,yr,rh,$o,bn,Pc,vr,m1,Sc,f1,ih,O,Tr,_1,Ac,g1,b1,wr,k1,Bi,y1,v1,T1,Mr,w1,xr,M1,x1,z1,Oc,F1,q1,gt,Ic,zr,$1,B1,Nc,Fr,j1,C1,Dc,qr,E1,P1,Lc,$r,S1,A1,De,Br,O1,Bo,I1,Gc,N1,D1,Wc,L1,G1,W1,kn,U1,Uc,R1,X1,jr,V1,Ft,Cr,Q1,Rc,H1,J1,Er,K1,qt,Pr,Z1,Xc,Y1,eT,Sr,dh,jo,yn,Vc,Ar,tT,Qc,oT,lh,I,Or,nT,Co,aT,Hc,sT,rT,Jc,iT,dT,lT,Ir,cT,ji,pT,hT,uT,Nr,mT,Dr,fT,_T,gT,Kc,bT,kT,bt,Zc,Lr,yT,vT,Yc,Gr,TT,wT,ep,Wr,MT,xT,tp,Ur,zT,FT,Le,Rr,qT,Eo,$T,op,BT,jT,np,CT,ET,PT,vn,ST,ap,AT,OT,Xr,IT,$t,Vr,NT,sp,DT,LT,Qr,GT,Bt,Hr,WT,rp,UT,RT,Jr,ch;return T=new X({}),se=new X({}),Ve=new X({}),Pn=new $({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = "UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-en-ro")
# forward pass
model(**inputs, labels=batch["labels"])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs, labels=batch[<span class="hljs-string">&quot;labels&quot;</span>])`}}),An=new $({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX")
article = "UN Chief Says There Is No Military Solution in Syria"
inputs = tokenizer(article, return_tensors="pt")
translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id["ro_RO"])
tokenizer.batch_decode(translated_tokens, skip_special_tokens=True)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(article, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;ro_RO&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(translated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>`}}),On=new X({}),Nn=new X({}),Dn=new $({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50")
tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")

src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids

model(**model_inputs, labels=labels)  # forward pass`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>)
tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)

src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

model(**model_inputs, labels=labels)  <span class="hljs-comment"># forward pass</span>`}}),Gn=new $({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

article_hi = "\u0938\u0902\u092F\u0941\u0915\u094D\u0924 \u0930\u093E\u0937\u094D\u091F\u094D\u0930 \u0915\u0947 \u092A\u094D\u0930\u092E\u0941\u0916 \u0915\u093E \u0915\u0939\u0928\u093E \u0939\u0948 \u0915\u093F \u0938\u0940\u0930\u093F\u092F\u093E \u092E\u0947\u0902 \u0915\u094B\u0908 \u0938\u0948\u0928\u094D\u092F \u0938\u092E\u093E\u0927\u093E\u0928 \u0928\u0939\u0940\u0902 \u0939\u0948"
article_ar = "\u0627\u0644\u0623\u0645\u064A\u0646 \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u0623\u0645\u0645 \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u064A\u0642\u0648\u0644 \u0625\u0646\u0647 \u0644\u0627 \u064A\u0648\u062C\u062F \u062D\u0644 \u0639\u0633\u0643\u0631\u064A \u0641\u064A \u0633\u0648\u0631\u064A\u0627."

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50-many-to-many-mmt")
tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50-many-to-many-mmt")

# translate Hindi to French
tokenizer.src_lang = "hi_IN"
encoded_hi = tokenizer(article_hi, return_tensors="pt")
generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.lang_code_to_id["fr_XX"])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)
# => "Le chef de l 'ONU affirme qu 'il n 'y a pas de solution militaire en Syria."

# translate Arabic to English
tokenizer.src_lang = "ar_AR"
encoded_ar = tokenizer(article_ar, return_tensors="pt")
generated_tokens = model.generate(**encoded_ar, forced_bos_token_id=tokenizer.lang_code_to_id["en_XX"])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)
# => "The Secretary-General of the United Nations says there is no military solution in Syria."`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBart50TokenizerFast

article_hi = <span class="hljs-string">&quot;\u0938\u0902\u092F\u0941\u0915\u094D\u0924 \u0930\u093E\u0937\u094D\u091F\u094D\u0930 \u0915\u0947 \u092A\u094D\u0930\u092E\u0941\u0916 \u0915\u093E \u0915\u0939\u0928\u093E \u0939\u0948 \u0915\u093F \u0938\u0940\u0930\u093F\u092F\u093E \u092E\u0947\u0902 \u0915\u094B\u0908 \u0938\u0948\u0928\u094D\u092F \u0938\u092E\u093E\u0927\u093E\u0928 \u0928\u0939\u0940\u0902 \u0939\u0948&quot;</span>
article_ar = <span class="hljs-string">&quot;\u0627\u0644\u0623\u0645\u064A\u0646 \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u0623\u0645\u0645 \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u064A\u0642\u0648\u0644 \u0625\u0646\u0647 \u0644\u0627 \u064A\u0648\u062C\u062F \u062D\u0644 \u0639\u0633\u0643\u0631\u064A \u0641\u064A \u0633\u0648\u0631\u064A\u0627.&quot;</span>

model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50-many-to-many-mmt&quot;</span>)
tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50-many-to-many-mmt&quot;</span>)

<span class="hljs-comment"># translate Hindi to French</span>
tokenizer.src_lang = <span class="hljs-string">&quot;hi_IN&quot;</span>
encoded_hi = tokenizer(article_hi, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;fr_XX&quot;</span>])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-comment"># =&gt; &quot;Le chef de l &#x27;ONU affirme qu &#x27;il n &#x27;y a pas de solution militaire en Syria.&quot;</span>

<span class="hljs-comment"># translate Arabic to English</span>
tokenizer.src_lang = <span class="hljs-string">&quot;ar_AR&quot;</span>
encoded_ar = tokenizer(article_ar, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
generated_tokens = model.generate(**encoded_ar, forced_bos_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;en_XX&quot;</span>])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-comment"># =&gt; &quot;The Secretary-General of the United Nations says there is no military solution in Syria.&quot;</span>`}}),Wn=new X({}),Un=new F({props:{name:"class transformers.MBartConfig",anchor:"transformers.MBartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the MBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartModel">MBartModel</a> or <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.TFMBartModel">TFMBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.MBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.MBartConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.MBartConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.MBartConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.MBartConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.MBartConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.MBartConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.MBartConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.MBartConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.MBartConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.MBartConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.MBartConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.MBartConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MBartConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.MBartConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.MBartConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.MBartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/configuration_mbart.py#L34"}}),Xn=new $({props:{code:`from transformers import MBartModel, MBartConfig

# Initializing a MBART facebook/mbart-large-cc25 style configuration
configuration = MBartConfig()

# Initializing a model from the facebook/mbart-large-cc25 style configuration
model = MBartModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartModel, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MBART facebook/mbart-large-cc25 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MBartConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/mbart-large-cc25 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Vn=new X({}),Qn=new F({props:{name:"class transformers.MBartTokenizer",anchor:"transformers.MBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/tokenization_mbart.py#L50"}}),Kn=new $({props:{code:`from transformers import MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")
inputs["labels"] = labels["input_ids"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),Zn=new F({props:{name:"as_target_tokenizer",anchor:"transformers.MBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/tokenization_mbart.py#L339"}}),Yn=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/tokenization_mbart.py#L218",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),aa=new X({}),sa=new F({props:{name:"class transformers.MBartTokenizerFast",anchor:"transformers.MBartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/tokenization_mbart_fast.py#L60"}}),la=new $({props:{code:`from transformers import MBartTokenizerFast

tokenizer = MBartTokenizerFast.from_pretrained(
    "facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO"
)
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")
inputs["labels"] = labels["input_ids"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizerFast.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),ca=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/tokenization_mbart_fast.py#L161",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fa=new F({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/tokenization_mbart_fast.py#L190",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),_a=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/tokenization_mbart_fast.py#L249"}}),ga=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/tokenization_mbart_fast.py#L264"}}),ba=new X({}),ka=new F({props:{name:"class transformers.MBart50Tokenizer",anchor:"transformers.MBart50Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MBart50Tokenizer.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"src_lang"},{anchor:"transformers.MBart50Tokenizer.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.MBart50Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.MBart50Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MBart50Tokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MBart50Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MBart50Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MBart50Tokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MBart50Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart50/tokenization_mbart50.py#L48"}}),wa=new $({props:{code:`from transformers import MBart50Tokenizer

tokenizer = MBart50Tokenizer.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids
# model(**model_inputs, labels=labels) should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),Ma=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart50/tokenization_mbart50.py#L287",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),$a=new F({props:{name:"convert_tokens_to_string",anchor:"transformers.MBart50Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart50/tokenization_mbart50.py#L236"}}),Ba=new F({props:{name:"get_special_tokens_mask",anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart50/tokenization_mbart50.py#L257",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ca=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart50/tokenization_mbart50.py#L348"}}),Ea=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart50/tokenization_mbart50.py#L354"}}),Pa=new X({}),Sa=new F({props:{name:"class transformers.MBart50TokenizerFast",anchor:"transformers.MBart50TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MBart50TokenizerFast.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"src_lang"},{anchor:"transformers.MBart50TokenizerFast.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.MBart50TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.MBart50TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MBart50TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MBart50TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MBart50TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MBart50TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L56"}}),Ia=new $({props:{code:`from transformers import MBart50TokenizerFast

tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids
# model(**model_inputs, labels=labels) should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50TokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),Na=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L169",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ua=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L220"}}),Ra=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L235"}}),Xa=new X({}),Va=new F({props:{name:"class transformers.MBartModel",anchor:"transformers.MBartModel",parameters:[{name:"config",val:": MBartConfig"}],parametersDescription:[{anchor:"transformers.MBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16816/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_mbart.py#L1140"}}),Ka=new F({props:{name:"forward",anchor:"transformers.MBartModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16816/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_mbart.py#L1167",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new st({props:{$$slots:{default:[O0]},$$scope:{ctx:C}}}),Za=new $({props:{code:`from transformers import MBartTokenizer, MBartModel
import torch

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ya=new X({}),es=new F({props:{name:"class transformers.MBartForConditionalGeneration",anchor:"transformers.MBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"}],parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16816/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_mbart.py#L1257"}}),as=new F({props:{name:"forward",anchor:"transformers.MBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16816/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_mbart.py#L1301",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new st({props:{$$slots:{default:[I0]},$$scope:{ctx:C}}}),ss=new $({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-en-ro")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro")

example_english_phrase = "42 is the answer"
inputs = tokenizer(example_english_phrase, return_tensors="pt")

# Translate
generated_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
tokenizer.batch_decode(generated_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot;42 is the answer&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Translate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;42 este r\u0103spuns&#x27;</span>`}}),rs=new $({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"

input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="pt")["input_ids"]
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()
[<span class="hljs-string">&#x27;nett&#x27;</span>, <span class="hljs-string">&#x27;sehr&#x27;</span>, <span class="hljs-string">&#x27;ganz&#x27;</span>, <span class="hljs-string">&#x27;nicht&#x27;</span>, <span class="hljs-string">&#x27;so&#x27;</span>]`}}),is=new X({}),ds=new F({props:{name:"class transformers.MBartForQuestionAnswering",anchor:"transformers.MBartForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16816/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_mbart.py#L1558"}}),hs=new F({props:{name:"forward",anchor:"transformers.MBartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16816/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MBartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_mbart.py#L1570",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nn=new st({props:{$$slots:{default:[N0]},$$scope:{ctx:C}}}),us=new $({props:{code:`from transformers import MBartTokenizer, MBartForQuestionAnswering
import torch

tokenizer = MBartTokenizer.from_pretrained("hf-internal-testing/tiny-random-mbart")
model = MBartForQuestionAnswering.from_pretrained("hf-internal-testing/tiny-random-mbart")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;? Jim Henson was a&#x27;</span>`}}),ms=new $({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">3.55</span>`}}),fs=new X({}),_s=new F({props:{name:"class transformers.MBartForSequenceClassification",anchor:"transformers.MBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16816/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_mbart.py#L1430"}}),ys=new F({props:{name:"forward",anchor:"transformers.MBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16816/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_mbart.py#L1443",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sn=new st({props:{$$slots:{default:[D0]},$$scope:{ctx:C}}}),vs=new $({props:{code:`import torch
from transformers import MBartTokenizer, MBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("hf-internal-testing/tiny-random-mbart")
model = MBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-mbart")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),Ts=new $({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = MBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-mbart", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),ws=new $({props:{code:`import torch
from transformers import MBartTokenizer, MBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("hf-internal-testing/tiny-random-mbart")
model = MBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-mbart", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),Ms=new $({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MBartForSequenceClassification.from_pretrained(
    "hf-internal-testing/tiny-random-mbart", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;hf-internal-testing/tiny-random-mbart&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),xs=new X({}),zs=new F({props:{name:"class transformers.MBartForCausalLM",anchor:"transformers.MBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_mbart.py#L1691"}}),Fs=new F({props:{name:"forward",anchor:"transformers.MBartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.MBartForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.MBartForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MBartForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.MBartForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.MBartForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16816/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_mbart.py#L1722",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qs=new $({props:{code:`from transformers import MBartTokenizer, MBartForCausalLM

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForCausalLM.from_pretrained("facebook/mbart-large-cc25", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),$s=new X({}),Bs=new F({props:{name:"class transformers.TFMBartModel",anchor:"transformers.TFMBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16816/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_tf_mbart.py#L1146"}}),ln=new st({props:{$$slots:{default:[L0]},$$scope:{ctx:C}}}),Ps=new F({props:{name:"call",anchor:"transformers.TFMBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFMBartModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMBartModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMBartModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMBartModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMBartModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMBartModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMBartModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMBartModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMBartModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMBartModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16816/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_tf_mbart.py#L1158",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),cn=new st({props:{$$slots:{default:[G0]},$$scope:{ctx:C}}}),Ss=new $({props:{code:`from transformers import MBartTokenizer, TFMBartModel
import tensorflow as tf

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = TFMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),As=new X({}),Os=new F({props:{name:"class transformers.TFMBartForConditionalGeneration",anchor:"transformers.TFMBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16816/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_tf_mbart.py#L1233"}}),hn=new st({props:{$$slots:{default:[W0]},$$scope:{ctx:C}}}),Ls=new F({props:{name:"call",anchor:"transformers.TFMBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMBartForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMBartForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMBartForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMBartForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMBartForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16816/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_tf_mbart.py#L1266",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),un=new st({props:{$$slots:{default:[U0]},$$scope:{ctx:C}}}),Gs=new $({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

model = TFMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="tf")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Ws=new $({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="tf")["input_ids"]

logits = model(input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),Us=new X({}),Rs=new F({props:{name:"class transformers.FlaxMBartModel",anchor:"transformers.FlaxMBartModel",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16816/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16816/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16816/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_flax_mbart.py#L1266"}}),Ys=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16816/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fn=new st({props:{$$slots:{default:[R0]},$$scope:{ctx:C}}}),er=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartModel

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),tr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16816/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),or=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),nr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16816/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_flax_mbart.py#L1090",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ar=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),sr=new X({}),rr=new F({props:{name:"class transformers.FlaxMBartForConditionalGeneration",anchor:"transformers.FlaxMBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16816/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16816/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16816/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_flax_mbart.py#L1353"}}),mr=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16816/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gn=new st({props:{$$slots:{default:[X0]},$$scope:{ctx:C}}}),fr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),_r=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="np")["input_ids"]

logits = model(input_ids).logits
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero()[0].item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero()[<span class="hljs-number">0</span>].item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),gr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16816/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),br=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),kr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16816/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_flax_mbart.py#L1357",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),vr=new X({}),Tr=new F({props:{name:"class transformers.FlaxMBartForSequenceClassification",anchor:"transformers.FlaxMBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16816/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16816/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16816/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_flax_mbart.py#L1666"}}),Br=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForSequenceClassification.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16816/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),kn=new st({props:{$$slots:{default:[V0]},$$scope:{ctx:C}}}),jr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Cr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForSequenceClassification.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16816/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Er=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Pr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForSequenceClassification.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16816/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_flax_mbart.py#L1090",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Ar=new X({}),Or=new F({props:{name:"class transformers.FlaxMBartForQuestionAnswering",anchor:"transformers.FlaxMBartForQuestionAnswering",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16816/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16816/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16816/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_flax_mbart.py#L1754"}}),Rr=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16816/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vn=new st({props:{$$slots:{default:[Q0]},$$scope:{ctx:C}}}),Xr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForQuestionAnswering

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForQuestionAnswering.from_pretrained("facebook/mbart-large-cc25")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Vr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForQuestionAnswering.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16816/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Hr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForQuestionAnswering.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16816/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16816/src/transformers/models/mbart/modeling_flax_mbart.py#L1090",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16816/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){k=n("meta"),z=d(),v=n("h1"),M=n("a"),x=n("span"),u(T.$$.fragment),y=d(),q=n("span"),rt=r("MBart and MBart-50"),Ee=d(),j=n("p"),Re=n("strong"),be=r("DISCLAIMER:"),it=r(" If you see something strange, file a "),ke=n("a"),ye=r("Github Issue"),dt=r(` and assign
@patrickvonplaten`),Ke=d(),J=n("h2"),N=n("a"),Xe=n("span"),u(se.$$.fragment),E=d(),A=n("span"),lt=r("Overview of MBart"),pe=d(),he=n("p"),ct=r("The MBart model was presented in "),K=n("a"),pt=r("Multilingual Denoising Pre-training for Neural Machine Translation"),ht=r(` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),D=d(),Pe=n("p"),ve=r(`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Ze=d(),re=n("p"),Te=r("This model was contributed by "),we=n("a"),ut=r("valhalla"),ie=r(". The Authors\u2019 code can be found "),Me=n("a"),xe=r("here"),Ye=d(),w=n("h3"),B=n("a"),ze=n("span"),u(Ve.$$.fragment),Ut=d(),Z=n("span"),Rt=r("Training of MBart"),kt=d(),V=n("p"),de=r(`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),le=n("code"),Xt=r("X [eos, src_lang_code]"),Vt=r(" where "),ce=n("code"),Qt=r("X"),Ht=r(` is the source text. The
target text format is `),Qe=n("code"),Jt=r("[tgt_lang_code] X [eos]"),Eu=r(". "),rd=n("code"),Pu=r("bos"),Su=r(" is never used."),_p=d(),yt=n("p"),Au=r("The regular "),En=n("a"),id=n("strong"),Ou=r("call"),Iu=r("()"),Nu=r(` will encode source text format, and it should be wrapped
inside the context manager `),ei=n("a"),Du=r("as_target_tokenizer()"),Lu=r(" to encode target text format."),gp=d(),ti=n("ul"),dd=n("li"),Gu=r("Supervised training"),bp=d(),u(Pn.$$.fragment),kp=d(),oi=n("ul"),Sn=n("li"),ld=n("p"),Wu=r("Generation"),Uu=d(),Kt=n("p"),Ru=r("While generating the target text set the "),cd=n("code"),Xu=r("decoder_start_token_id"),Vu=r(` to the target language id. The following
example shows how to translate English to Romanian using the `),pd=n("em"),Qu=r("facebook/mbart-large-en-ro"),Hu=r(" model."),yp=d(),u(An.$$.fragment),vp=d(),Zt=n("h2"),Po=n("a"),hd=n("span"),u(On.$$.fragment),Ju=d(),ud=n("span"),Ku=r("Overview of MBart-50"),Tp=d(),vt=n("p"),Zu=r("MBart-50 was introduced in the "),In=n("a"),Yu=r("Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),em=r(` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),md=n("em"),tm=r("mbart-large-cc25"),om=r(` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),wp=d(),ni=n("p"),nm=r("According to the abstract"),Mp=d(),ai=n("p"),fd=n("em"),am=r(`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),xp=d(),Yt=n("h3"),So=n("a"),_d=n("span"),u(Nn.$$.fragment),sm=d(),gd=n("span"),rm=r("Training of MBart-50"),zp=d(),et=n("p"),im=r(`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),bd=n("code"),dm=r("[lang_code] X [eos]"),lm=r(", where "),kd=n("code"),cm=r("lang_code"),pm=r(` is source
language id for source text and target language id for target text, with `),yd=n("code"),hm=r("X"),um=r(` being the source or target text
respectively.`),Fp=d(),Ao=n("p"),mm=r("MBart-50 has its own tokenizer "),si=n("a"),fm=r("MBart50Tokenizer"),_m=r("."),qp=d(),ri=n("ul"),vd=n("li"),gm=r("Supervised training"),$p=d(),u(Dn.$$.fragment),Bp=d(),ii=n("ul"),Ln=n("li"),Td=n("p"),bm=r("Generation"),km=d(),Fe=n("p"),ym=r("To generate using the mBART-50 multilingual translation models, "),wd=n("code"),vm=r("eos_token_id"),Tm=r(` is used as the
`),Md=n("code"),wm=r("decoder_start_token_id"),Mm=r(` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),xd=n("em"),xm=r("forced_bos_token_id"),zm=r(" parameter to the "),zd=n("em"),Fm=r("generate"),qm=r(` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Fd=n("em"),$m=r("facebook/mbart-50-large-many-to-many"),Bm=r(" checkpoint."),jp=d(),u(Gn.$$.fragment),Cp=d(),eo=n("h2"),Oo=n("a"),qd=n("span"),u(Wn.$$.fragment),jm=d(),$d=n("span"),Cm=r("MBartConfig"),Ep=d(),qe=n("div"),u(Un.$$.fragment),Em=d(),to=n("p"),Pm=r("This is the configuration class to store the configuration of a "),di=n("a"),Sm=r("MBartModel"),Am=r(`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Rn=n("a"),Om=r("facebook/mbart-large-cc25"),Im=r(" architecture."),Nm=d(),oo=n("p"),Dm=r("Configuration objects inherit from "),li=n("a"),Lm=r("PretrainedConfig"),Gm=r(` and can be used to control the model outputs. Read the
documentation from `),ci=n("a"),Wm=r("PretrainedConfig"),Um=r(" for more information."),Rm=d(),Bd=n("p"),Xm=r("Example:"),Vm=d(),u(Xn.$$.fragment),Pp=d(),no=n("h2"),Io=n("a"),jd=n("span"),u(Vn.$$.fragment),Qm=d(),Cd=n("span"),Hm=r("MBartTokenizer"),Sp=d(),G=n("div"),u(Qn.$$.fragment),Jm=d(),Ed=n("p"),Km=r("Construct an MBART tokenizer."),Zm=d(),mt=n("p"),Ym=r("Adapted from "),pi=n("a"),ef=r("RobertaTokenizer"),tf=r(" and "),hi=n("a"),of=r("XLNetTokenizer"),nf=r(`. Based on
`),Hn=n("a"),af=r("SentencePiece"),sf=r("."),rf=d(),Jn=n("p"),df=r("The tokenization method is "),Pd=n("code"),lf=r("<tokens> <eos> <language code>"),cf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),pf=d(),Sd=n("p"),hf=r("Examples:"),uf=d(),u(Kn.$$.fragment),mf=d(),No=n("div"),u(Zn.$$.fragment),ff=d(),Ad=n("p"),_f=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),gf=d(),tt=n("div"),u(Yn.$$.fragment),bf=d(),ea=n("p"),kf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Od=n("code"),yf=r("X"),vf=r(" represents the sequence:"),Tf=d(),ta=n("ul"),oa=n("li"),Id=n("code"),wf=r("input_ids"),Mf=r(" (for encoder) "),Nd=n("code"),xf=r("X [eos, src_lang_code]"),zf=d(),na=n("li"),Dd=n("code"),Ff=r("decoder_input_ids"),qf=r(": (for decoder) "),Ld=n("code"),$f=r("X [eos, tgt_lang_code]"),Bf=d(),Gd=n("p"),jf=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ap=d(),ao=n("h2"),Do=n("a"),Wd=n("span"),u(aa.$$.fragment),Cf=d(),Ud=n("span"),Ef=r("MBartTokenizerFast"),Op=d(),P=n("div"),u(sa.$$.fragment),Pf=d(),so=n("p"),Sf=r("Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Rd=n("em"),Af=r("tokenizers"),Of=r(` library). Based on
`),ra=n("a"),If=r("BPE"),Nf=r("."),Df=d(),ia=n("p"),Lf=r("This tokenizer inherits from "),ui=n("a"),Gf=r("PreTrainedTokenizerFast"),Wf=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Uf=d(),da=n("p"),Rf=r("The tokenization method is "),Xd=n("code"),Xf=r("<tokens> <eos> <language code>"),Vf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Qf=d(),Vd=n("p"),Hf=r("Examples:"),Jf=d(),u(la.$$.fragment),Kf=d(),Se=n("div"),u(ca.$$.fragment),Zf=d(),Qd=n("p"),Yf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),e_=d(),pa=n("p"),t_=r("An MBART sequence has the following format, where "),Hd=n("code"),o_=r("X"),n_=r(" represents the sequence:"),a_=d(),ha=n("ul"),ua=n("li"),Jd=n("code"),s_=r("input_ids"),r_=r(" (for encoder) "),Kd=n("code"),i_=r("X [eos, src_lang_code]"),d_=d(),ma=n("li"),Zd=n("code"),l_=r("decoder_input_ids"),c_=r(": (for decoder) "),Yd=n("code"),p_=r("X [eos, tgt_lang_code]"),h_=d(),el=n("p"),u_=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),m_=d(),Lo=n("div"),u(fa.$$.fragment),f_=d(),tl=n("p"),__=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),g_=d(),Go=n("div"),u(_a.$$.fragment),b_=d(),ol=n("p"),k_=r("Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),y_=d(),Wo=n("div"),u(ga.$$.fragment),v_=d(),nl=n("p"),T_=r("Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Ip=d(),ro=n("h2"),Uo=n("a"),al=n("span"),u(ba.$$.fragment),w_=d(),sl=n("span"),M_=r("MBart50Tokenizer"),Np=d(),S=n("div"),u(ka.$$.fragment),x_=d(),ya=n("p"),z_=r("Construct a MBart50 tokenizer. Based on "),va=n("a"),F_=r("SentencePiece"),q_=r("."),$_=d(),Ta=n("p"),B_=r("This tokenizer inherits from "),mi=n("a"),j_=r("PreTrainedTokenizer"),C_=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),E_=d(),rl=n("p"),P_=r("Examples:"),S_=d(),u(wa.$$.fragment),A_=d(),ot=n("div"),u(Ma.$$.fragment),O_=d(),xa=n("p"),I_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),il=n("code"),N_=r("X"),D_=r(" represents the sequence:"),L_=d(),za=n("ul"),Fa=n("li"),dl=n("code"),G_=r("input_ids"),W_=r(" (for encoder) "),ll=n("code"),U_=r("[src_lang_code] X [eos]"),R_=d(),qa=n("li"),cl=n("code"),X_=r("labels"),V_=r(": (for decoder) "),pl=n("code"),Q_=r("[tgt_lang_code] X [eos]"),H_=d(),hl=n("p"),J_=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),K_=d(),Ro=n("div"),u($a.$$.fragment),Z_=d(),ul=n("p"),Y_=r("Converts a sequence of tokens (strings for sub-words) in a single string."),eg=d(),Xo=n("div"),u(Ba.$$.fragment),tg=d(),ja=n("p"),og=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ml=n("code"),ng=r("prepare_for_model"),ag=r(" method."),sg=d(),Vo=n("div"),u(Ca.$$.fragment),rg=d(),fl=n("p"),ig=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),dg=d(),Qo=n("div"),u(Ea.$$.fragment),lg=d(),_l=n("p"),cg=r("Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Dp=d(),io=n("h2"),Ho=n("a"),gl=n("span"),u(Pa.$$.fragment),pg=d(),bl=n("span"),hg=r("MBart50TokenizerFast"),Lp=d(),W=n("div"),u(Sa.$$.fragment),ug=d(),lo=n("p"),mg=r("Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),kl=n("em"),fg=r("tokenizers"),_g=r(` library). Based on
`),Aa=n("a"),gg=r("BPE"),bg=r("."),kg=d(),Oa=n("p"),yg=r("This tokenizer inherits from "),fi=n("a"),vg=r("PreTrainedTokenizerFast"),Tg=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),wg=d(),yl=n("p"),Mg=r("Examples:"),xg=d(),u(Ia.$$.fragment),zg=d(),Ae=n("div"),u(Na.$$.fragment),Fg=d(),vl=n("p"),qg=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),$g=d(),Da=n("p"),Bg=r("An MBART-50 sequence has the following format, where "),Tl=n("code"),jg=r("X"),Cg=r(" represents the sequence:"),Eg=d(),La=n("ul"),Ga=n("li"),wl=n("code"),Pg=r("input_ids"),Sg=r(" (for encoder) "),Ml=n("code"),Ag=r("[src_lang_code] X [eos]"),Og=d(),Wa=n("li"),xl=n("code"),Ig=r("labels"),Ng=r(": (for decoder) "),zl=n("code"),Dg=r("[tgt_lang_code] X [eos]"),Lg=d(),Fl=n("p"),Gg=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Wg=d(),Jo=n("div"),u(Ua.$$.fragment),Ug=d(),ql=n("p"),Rg=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Xg=d(),Ko=n("div"),u(Ra.$$.fragment),Vg=d(),$l=n("p"),Qg=r("Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Gp=d(),co=n("h2"),Zo=n("a"),Bl=n("span"),u(Xa.$$.fragment),Hg=d(),jl=n("span"),Jg=r("MBartModel"),Wp=d(),He=n("div"),u(Va.$$.fragment),Kg=d(),Qa=n("p"),Zg=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),_i=n("a"),Yg=r("PreTrainedModel"),eb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tb=d(),Ha=n("p"),ob=r("This model is also a PyTorch "),Ja=n("a"),nb=r("torch.nn.Module"),ab=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sb=d(),Oe=n("div"),u(Ka.$$.fragment),rb=d(),po=n("p"),ib=r("The "),gi=n("a"),db=r("MBartModel"),lb=r(" forward method, overrides the "),Cl=n("code"),cb=r("__call__"),pb=r(" special method."),hb=d(),u(Yo.$$.fragment),ub=d(),El=n("p"),mb=r("Example:"),fb=d(),u(Za.$$.fragment),Up=d(),ho=n("h2"),en=n("a"),Pl=n("span"),u(Ya.$$.fragment),_b=d(),Sl=n("span"),gb=r("MBartForConditionalGeneration"),Rp=d(),Je=n("div"),u(es.$$.fragment),bb=d(),ts=n("p"),kb=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),bi=n("a"),yb=r("PreTrainedModel"),vb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tb=d(),os=n("p"),wb=r("This model is also a PyTorch "),ns=n("a"),Mb=r("torch.nn.Module"),xb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zb=d(),Y=n("div"),u(as.$$.fragment),Fb=d(),uo=n("p"),qb=r("The "),ki=n("a"),$b=r("MBartForConditionalGeneration"),Bb=r(" forward method, overrides the "),Al=n("code"),jb=r("__call__"),Cb=r(" special method."),Eb=d(),u(tn.$$.fragment),Pb=d(),Ol=n("p"),Sb=r("Translation example:"),Ab=d(),u(ss.$$.fragment),Ob=d(),Il=n("p"),Ib=r("Mask filling example:"),Nb=d(),u(rs.$$.fragment),Xp=d(),mo=n("h2"),on=n("a"),Nl=n("span"),u(is.$$.fragment),Db=d(),Dl=n("span"),Lb=r("MBartForQuestionAnswering"),Vp=d(),$e=n("div"),u(ds.$$.fragment),Gb=d(),fo=n("p"),Wb=r(`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ll=n("code"),Ub=r("span start logits"),Rb=r(" and "),Gl=n("code"),Xb=r("span end logits"),Vb=r(")."),Qb=d(),ls=n("p"),Hb=r("This model inherits from "),yi=n("a"),Jb=r("PreTrainedModel"),Kb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zb=d(),cs=n("p"),Yb=r("This model is also a PyTorch "),ps=n("a"),ek=r("torch.nn.Module"),tk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ok=d(),ue=n("div"),u(hs.$$.fragment),nk=d(),_o=n("p"),ak=r("The "),vi=n("a"),sk=r("MBartForQuestionAnswering"),rk=r(" forward method, overrides the "),Wl=n("code"),ik=r("__call__"),dk=r(" special method."),lk=d(),u(nn.$$.fragment),ck=d(),Ul=n("p"),pk=r("Example:"),hk=d(),u(us.$$.fragment),uk=d(),u(ms.$$.fragment),Qp=d(),go=n("h2"),an=n("a"),Rl=n("span"),u(fs.$$.fragment),mk=d(),Xl=n("span"),fk=r("MBartForSequenceClassification"),Hp=d(),Be=n("div"),u(_s.$$.fragment),_k=d(),Vl=n("p"),gk=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),bk=d(),gs=n("p"),kk=r("This model inherits from "),Ti=n("a"),yk=r("PreTrainedModel"),vk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tk=d(),bs=n("p"),wk=r("This model is also a PyTorch "),ks=n("a"),Mk=r("torch.nn.Module"),xk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zk=d(),L=n("div"),u(ys.$$.fragment),Fk=d(),bo=n("p"),qk=r("The "),wi=n("a"),$k=r("MBartForSequenceClassification"),Bk=r(" forward method, overrides the "),Ql=n("code"),jk=r("__call__"),Ck=r(" special method."),Ek=d(),u(sn.$$.fragment),Pk=d(),Hl=n("p"),Sk=r("Example of single-label classification:"),Ak=d(),u(vs.$$.fragment),Ok=d(),u(Ts.$$.fragment),Ik=d(),Jl=n("p"),Nk=r("Example of multi-label classification:"),Dk=d(),u(ws.$$.fragment),Lk=d(),u(Ms.$$.fragment),Jp=d(),ko=n("h2"),rn=n("a"),Kl=n("span"),u(xs.$$.fragment),Gk=d(),Zl=n("span"),Wk=r("MBartForCausalLM"),Kp=d(),yo=n("div"),u(zs.$$.fragment),Uk=d(),Tt=n("div"),u(Fs.$$.fragment),Rk=d(),Yl=n("p"),Xk=r("Example:"),Vk=d(),u(qs.$$.fragment),Zp=d(),vo=n("h2"),dn=n("a"),ec=n("span"),u($s.$$.fragment),Qk=d(),tc=n("span"),Hk=r("TFMBartModel"),Yp=d(),je=n("div"),u(Bs.$$.fragment),Jk=d(),js=n("p"),Kk=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mi=n("a"),Zk=r("TFPreTrainedModel"),Yk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ey=d(),Cs=n("p"),ty=r("This model is also a "),Es=n("a"),oy=r("tf.keras.Model"),ny=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ay=d(),u(ln.$$.fragment),sy=d(),Ie=n("div"),u(Ps.$$.fragment),ry=d(),To=n("p"),iy=r("The "),xi=n("a"),dy=r("TFMBartModel"),ly=r(" forward method, overrides the "),oc=n("code"),cy=r("__call__"),py=r(" special method."),hy=d(),u(cn.$$.fragment),uy=d(),nc=n("p"),my=r("Example:"),fy=d(),u(Ss.$$.fragment),eh=d(),wo=n("h2"),pn=n("a"),ac=n("span"),u(As.$$.fragment),_y=d(),sc=n("span"),gy=r("TFMBartForConditionalGeneration"),th=d(),Ce=n("div"),u(Os.$$.fragment),by=d(),Is=n("p"),ky=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),zi=n("a"),yy=r("TFPreTrainedModel"),vy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ty=d(),Ns=n("p"),wy=r("This model is also a "),Ds=n("a"),My=r("tf.keras.Model"),xy=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zy=d(),u(hn.$$.fragment),Fy=d(),ee=n("div"),u(Ls.$$.fragment),qy=d(),Mo=n("p"),$y=r("The "),Fi=n("a"),By=r("TFMBartForConditionalGeneration"),jy=r(" forward method, overrides the "),rc=n("code"),Cy=r("__call__"),Ey=r(" special method."),Py=d(),u(un.$$.fragment),Sy=d(),ic=n("p"),Ay=r("Summarization example:"),Oy=d(),u(Gs.$$.fragment),Iy=d(),dc=n("p"),Ny=r("Mask filling example:"),Dy=d(),u(Ws.$$.fragment),oh=d(),xo=n("h2"),mn=n("a"),lc=n("span"),u(Us.$$.fragment),Ly=d(),cc=n("span"),Gy=r("FlaxMBartModel"),nh=d(),U=n("div"),u(Rs.$$.fragment),Wy=d(),Xs=n("p"),Uy=r(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),qi=n("a"),Ry=r("FlaxPreTrainedModel"),Xy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vy=d(),Vs=n("p"),Qy=r(`This model is also a Flax Linen
`),Qs=n("a"),Hy=r("flax.nn.Module"),Jy=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ky=d(),pc=n("p"),Zy=r("Finally, this model supports inherent JAX features such as:"),Yy=d(),ft=n("ul"),hc=n("li"),Hs=n("a"),ev=r("Just-In-Time (JIT) compilation"),tv=d(),uc=n("li"),Js=n("a"),ov=r("Automatic Differentiation"),nv=d(),mc=n("li"),Ks=n("a"),av=r("Vectorization"),sv=d(),fc=n("li"),Zs=n("a"),rv=r("Parallelization"),iv=d(),Ne=n("div"),u(Ys.$$.fragment),dv=d(),zo=n("p"),lv=r("The "),_c=n("code"),cv=r("FlaxMBartPreTrainedModel"),pv=r(" forward method, overrides the "),gc=n("code"),hv=r("__call__"),uv=r(" special method."),mv=d(),u(fn.$$.fragment),fv=d(),bc=n("p"),_v=r("Example:"),gv=d(),u(er.$$.fragment),bv=d(),wt=n("div"),u(tr.$$.fragment),kv=d(),kc=n("p"),yv=r("Example:"),vv=d(),u(or.$$.fragment),Tv=d(),Mt=n("div"),u(nr.$$.fragment),wv=d(),yc=n("p"),Mv=r("Example:"),xv=d(),u(ar.$$.fragment),ah=d(),Fo=n("h2"),_n=n("a"),vc=n("span"),u(sr.$$.fragment),zv=d(),Tc=n("span"),Fv=r("FlaxMBartForConditionalGeneration"),sh=d(),R=n("div"),u(rr.$$.fragment),qv=d(),ir=n("p"),$v=r(`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),$i=n("a"),Bv=r("FlaxPreTrainedModel"),jv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cv=d(),dr=n("p"),Ev=r(`This model is also a Flax Linen
`),lr=n("a"),Pv=r("flax.nn.Module"),Sv=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Av=d(),wc=n("p"),Ov=r("Finally, this model supports inherent JAX features such as:"),Iv=d(),_t=n("ul"),Mc=n("li"),cr=n("a"),Nv=r("Just-In-Time (JIT) compilation"),Dv=d(),xc=n("li"),pr=n("a"),Lv=r("Automatic Differentiation"),Gv=d(),zc=n("li"),hr=n("a"),Wv=r("Vectorization"),Uv=d(),Fc=n("li"),ur=n("a"),Rv=r("Parallelization"),Xv=d(),te=n("div"),u(mr.$$.fragment),Vv=d(),qo=n("p"),Qv=r("The "),qc=n("code"),Hv=r("FlaxMBartPreTrainedModel"),Jv=r(" forward method, overrides the "),$c=n("code"),Kv=r("__call__"),Zv=r(" special method."),Yv=d(),u(gn.$$.fragment),e1=d(),Bc=n("p"),t1=r("Summarization example:"),o1=d(),u(fr.$$.fragment),n1=d(),jc=n("p"),a1=r("Mask filling example:"),s1=d(),u(_r.$$.fragment),r1=d(),xt=n("div"),u(gr.$$.fragment),i1=d(),Cc=n("p"),d1=r("Example:"),l1=d(),u(br.$$.fragment),c1=d(),zt=n("div"),u(kr.$$.fragment),p1=d(),Ec=n("p"),h1=r("Example:"),u1=d(),u(yr.$$.fragment),rh=d(),$o=n("h2"),bn=n("a"),Pc=n("span"),u(vr.$$.fragment),m1=d(),Sc=n("span"),f1=r("FlaxMBartForSequenceClassification"),ih=d(),O=n("div"),u(Tr.$$.fragment),_1=d(),Ac=n("p"),g1=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),b1=d(),wr=n("p"),k1=r("This model inherits from "),Bi=n("a"),y1=r("FlaxPreTrainedModel"),v1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),T1=d(),Mr=n("p"),w1=r(`This model is also a Flax Linen
`),xr=n("a"),M1=r("flax.nn.Module"),x1=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),z1=d(),Oc=n("p"),F1=r("Finally, this model supports inherent JAX features such as:"),q1=d(),gt=n("ul"),Ic=n("li"),zr=n("a"),$1=r("Just-In-Time (JIT) compilation"),B1=d(),Nc=n("li"),Fr=n("a"),j1=r("Automatic Differentiation"),C1=d(),Dc=n("li"),qr=n("a"),E1=r("Vectorization"),P1=d(),Lc=n("li"),$r=n("a"),S1=r("Parallelization"),A1=d(),De=n("div"),u(Br.$$.fragment),O1=d(),Bo=n("p"),I1=r("The "),Gc=n("code"),N1=r("FlaxMBartPreTrainedModel"),D1=r(" forward method, overrides the "),Wc=n("code"),L1=r("__call__"),G1=r(" special method."),W1=d(),u(kn.$$.fragment),U1=d(),Uc=n("p"),R1=r("Example:"),X1=d(),u(jr.$$.fragment),V1=d(),Ft=n("div"),u(Cr.$$.fragment),Q1=d(),Rc=n("p"),H1=r("Example:"),J1=d(),u(Er.$$.fragment),K1=d(),qt=n("div"),u(Pr.$$.fragment),Z1=d(),Xc=n("p"),Y1=r("Example:"),eT=d(),u(Sr.$$.fragment),dh=d(),jo=n("h2"),yn=n("a"),Vc=n("span"),u(Ar.$$.fragment),tT=d(),Qc=n("span"),oT=r("FlaxMBartForQuestionAnswering"),lh=d(),I=n("div"),u(Or.$$.fragment),nT=d(),Co=n("p"),aT=r(`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Hc=n("code"),sT=r("span start logits"),rT=r(" and "),Jc=n("code"),iT=r("span end logits"),dT=r(")."),lT=d(),Ir=n("p"),cT=r("This model inherits from "),ji=n("a"),pT=r("FlaxPreTrainedModel"),hT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uT=d(),Nr=n("p"),mT=r(`This model is also a Flax Linen
`),Dr=n("a"),fT=r("flax.nn.Module"),_T=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),gT=d(),Kc=n("p"),bT=r("Finally, this model supports inherent JAX features such as:"),kT=d(),bt=n("ul"),Zc=n("li"),Lr=n("a"),yT=r("Just-In-Time (JIT) compilation"),vT=d(),Yc=n("li"),Gr=n("a"),TT=r("Automatic Differentiation"),wT=d(),ep=n("li"),Wr=n("a"),MT=r("Vectorization"),xT=d(),tp=n("li"),Ur=n("a"),zT=r("Parallelization"),FT=d(),Le=n("div"),u(Rr.$$.fragment),qT=d(),Eo=n("p"),$T=r("The "),op=n("code"),BT=r("FlaxMBartPreTrainedModel"),jT=r(" forward method, overrides the "),np=n("code"),CT=r("__call__"),ET=r(" special method."),PT=d(),u(vn.$$.fragment),ST=d(),ap=n("p"),AT=r("Example:"),OT=d(),u(Xr.$$.fragment),IT=d(),$t=n("div"),u(Vr.$$.fragment),NT=d(),sp=n("p"),DT=r("Example:"),LT=d(),u(Qr.$$.fragment),GT=d(),Bt=n("div"),u(Hr.$$.fragment),WT=d(),rp=n("p"),UT=r("Example:"),RT=d(),u(Jr.$$.fragment),this.h()},l(o){const p=S0('[data-svelte="svelte-1phssyn"]',document.head);k=a(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(o),v=a(o,"H1",{class:!0});var Kr=s(v);M=a(Kr,"A",{id:!0,class:!0,href:!0});var ip=s(M);x=a(ip,"SPAN",{});var dp=s(x);m(T.$$.fragment,dp),dp.forEach(t),ip.forEach(t),y=l(Kr),q=a(Kr,"SPAN",{});var lp=s(q);rt=i(lp,"MBart and MBart-50"),lp.forEach(t),Kr.forEach(t),Ee=l(o),j=a(o,"P",{});var Tn=s(j);Re=a(Tn,"STRONG",{});var cp=s(Re);be=i(cp,"DISCLAIMER:"),cp.forEach(t),it=i(Tn," If you see something strange, file a "),ke=a(Tn,"A",{href:!0,rel:!0});var pp=s(ke);ye=i(pp,"Github Issue"),pp.forEach(t),dt=i(Tn,` and assign
@patrickvonplaten`),Tn.forEach(t),Ke=l(o),J=a(o,"H2",{class:!0});var Zr=s(J);N=a(Zr,"A",{id:!0,class:!0,href:!0});var hp=s(N);Xe=a(hp,"SPAN",{});var up=s(Xe);m(se.$$.fragment,up),up.forEach(t),hp.forEach(t),E=l(Zr),A=a(Zr,"SPAN",{});var mp=s(A);lt=i(mp,"Overview of MBart"),mp.forEach(t),Zr.forEach(t),pe=l(o),he=a(o,"P",{});var Yr=s(he);ct=i(Yr,"The MBart model was presented in "),K=a(Yr,"A",{href:!0,rel:!0});var VT=s(K);pt=i(VT,"Multilingual Denoising Pre-training for Neural Machine Translation"),VT.forEach(t),ht=i(Yr,` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),Yr.forEach(t),D=l(o),Pe=a(o,"P",{});var QT=s(Pe);ve=i(QT,`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),QT.forEach(t),Ze=l(o),re=a(o,"P",{});var fp=s(re);Te=i(fp,"This model was contributed by "),we=a(fp,"A",{href:!0,rel:!0});var HT=s(we);ut=i(HT,"valhalla"),HT.forEach(t),ie=i(fp,". The Authors\u2019 code can be found "),Me=a(fp,"A",{href:!0,rel:!0});var JT=s(Me);xe=i(JT,"here"),JT.forEach(t),fp.forEach(t),Ye=l(o),w=a(o,"H3",{class:!0});var ph=s(w);B=a(ph,"A",{id:!0,class:!0,href:!0});var KT=s(B);ze=a(KT,"SPAN",{});var ZT=s(ze);m(Ve.$$.fragment,ZT),ZT.forEach(t),KT.forEach(t),Ut=l(ph),Z=a(ph,"SPAN",{});var YT=s(Z);Rt=i(YT,"Training of MBart"),YT.forEach(t),ph.forEach(t),kt=l(o),V=a(o,"P",{});var jt=s(V);de=i(jt,`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),le=a(jt,"CODE",{});var ew=s(le);Xt=i(ew,"X [eos, src_lang_code]"),ew.forEach(t),Vt=i(jt," where "),ce=a(jt,"CODE",{});var tw=s(ce);Qt=i(tw,"X"),tw.forEach(t),Ht=i(jt,` is the source text. The
target text format is `),Qe=a(jt,"CODE",{});var ow=s(Qe);Jt=i(ow,"[tgt_lang_code] X [eos]"),ow.forEach(t),Eu=i(jt,". "),rd=a(jt,"CODE",{});var nw=s(rd);Pu=i(nw,"bos"),nw.forEach(t),Su=i(jt," is never used."),jt.forEach(t),_p=l(o),yt=a(o,"P",{});var Ci=s(yt);Au=i(Ci,"The regular "),En=a(Ci,"A",{href:!0});var XT=s(En);id=a(XT,"STRONG",{});var aw=s(id);Ou=i(aw,"call"),aw.forEach(t),Iu=i(XT,"()"),XT.forEach(t),Nu=i(Ci,` will encode source text format, and it should be wrapped
inside the context manager `),ei=a(Ci,"A",{href:!0});var sw=s(ei);Du=i(sw,"as_target_tokenizer()"),sw.forEach(t),Lu=i(Ci," to encode target text format."),Ci.forEach(t),gp=l(o),ti=a(o,"UL",{});var rw=s(ti);dd=a(rw,"LI",{});var iw=s(dd);Gu=i(iw,"Supervised training"),iw.forEach(t),rw.forEach(t),bp=l(o),m(Pn.$$.fragment,o),kp=l(o),oi=a(o,"UL",{});var dw=s(oi);Sn=a(dw,"LI",{});var hh=s(Sn);ld=a(hh,"P",{});var lw=s(ld);Wu=i(lw,"Generation"),lw.forEach(t),Uu=l(hh),Kt=a(hh,"P",{});var Ei=s(Kt);Ru=i(Ei,"While generating the target text set the "),cd=a(Ei,"CODE",{});var cw=s(cd);Xu=i(cw,"decoder_start_token_id"),cw.forEach(t),Vu=i(Ei,` to the target language id. The following
example shows how to translate English to Romanian using the `),pd=a(Ei,"EM",{});var pw=s(pd);Qu=i(pw,"facebook/mbart-large-en-ro"),pw.forEach(t),Hu=i(Ei," model."),Ei.forEach(t),hh.forEach(t),dw.forEach(t),yp=l(o),m(An.$$.fragment,o),vp=l(o),Zt=a(o,"H2",{class:!0});var uh=s(Zt);Po=a(uh,"A",{id:!0,class:!0,href:!0});var hw=s(Po);hd=a(hw,"SPAN",{});var uw=s(hd);m(On.$$.fragment,uw),uw.forEach(t),hw.forEach(t),Ju=l(uh),ud=a(uh,"SPAN",{});var mw=s(ud);Ku=i(mw,"Overview of MBart-50"),mw.forEach(t),uh.forEach(t),Tp=l(o),vt=a(o,"P",{});var Pi=s(vt);Zu=i(Pi,"MBart-50 was introduced in the "),In=a(Pi,"A",{href:!0,rel:!0});var fw=s(In);Yu=i(fw,"Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),fw.forEach(t),em=i(Pi,` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),md=a(Pi,"EM",{});var _w=s(md);tm=i(_w,"mbart-large-cc25"),_w.forEach(t),om=i(Pi,` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Pi.forEach(t),wp=l(o),ni=a(o,"P",{});var gw=s(ni);nm=i(gw,"According to the abstract"),gw.forEach(t),Mp=l(o),ai=a(o,"P",{});var bw=s(ai);fd=a(bw,"EM",{});var kw=s(fd);am=i(kw,`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),kw.forEach(t),bw.forEach(t),xp=l(o),Yt=a(o,"H3",{class:!0});var mh=s(Yt);So=a(mh,"A",{id:!0,class:!0,href:!0});var yw=s(So);_d=a(yw,"SPAN",{});var vw=s(_d);m(Nn.$$.fragment,vw),vw.forEach(t),yw.forEach(t),sm=l(mh),gd=a(mh,"SPAN",{});var Tw=s(gd);rm=i(Tw,"Training of MBart-50"),Tw.forEach(t),mh.forEach(t),zp=l(o),et=a(o,"P",{});var wn=s(et);im=i(wn,`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),bd=a(wn,"CODE",{});var ww=s(bd);dm=i(ww,"[lang_code] X [eos]"),ww.forEach(t),lm=i(wn,", where "),kd=a(wn,"CODE",{});var Mw=s(kd);cm=i(Mw,"lang_code"),Mw.forEach(t),pm=i(wn,` is source
language id for source text and target language id for target text, with `),yd=a(wn,"CODE",{});var xw=s(yd);hm=i(xw,"X"),xw.forEach(t),um=i(wn,` being the source or target text
respectively.`),wn.forEach(t),Fp=l(o),Ao=a(o,"P",{});var fh=s(Ao);mm=i(fh,"MBart-50 has its own tokenizer "),si=a(fh,"A",{href:!0});var zw=s(si);fm=i(zw,"MBart50Tokenizer"),zw.forEach(t),_m=i(fh,"."),fh.forEach(t),qp=l(o),ri=a(o,"UL",{});var Fw=s(ri);vd=a(Fw,"LI",{});var qw=s(vd);gm=i(qw,"Supervised training"),qw.forEach(t),Fw.forEach(t),$p=l(o),m(Dn.$$.fragment,o),Bp=l(o),ii=a(o,"UL",{});var $w=s(ii);Ln=a($w,"LI",{});var _h=s(Ln);Td=a(_h,"P",{});var Bw=s(Td);bm=i(Bw,"Generation"),Bw.forEach(t),km=l(_h),Fe=a(_h,"P",{});var nt=s(Fe);ym=i(nt,"To generate using the mBART-50 multilingual translation models, "),wd=a(nt,"CODE",{});var jw=s(wd);vm=i(jw,"eos_token_id"),jw.forEach(t),Tm=i(nt,` is used as the
`),Md=a(nt,"CODE",{});var Cw=s(Md);wm=i(Cw,"decoder_start_token_id"),Cw.forEach(t),Mm=i(nt,` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),xd=a(nt,"EM",{});var Ew=s(xd);xm=i(Ew,"forced_bos_token_id"),Ew.forEach(t),zm=i(nt," parameter to the "),zd=a(nt,"EM",{});var Pw=s(zd);Fm=i(Pw,"generate"),Pw.forEach(t),qm=i(nt,` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Fd=a(nt,"EM",{});var Sw=s(Fd);$m=i(Sw,"facebook/mbart-50-large-many-to-many"),Sw.forEach(t),Bm=i(nt," checkpoint."),nt.forEach(t),_h.forEach(t),$w.forEach(t),jp=l(o),m(Gn.$$.fragment,o),Cp=l(o),eo=a(o,"H2",{class:!0});var gh=s(eo);Oo=a(gh,"A",{id:!0,class:!0,href:!0});var Aw=s(Oo);qd=a(Aw,"SPAN",{});var Ow=s(qd);m(Wn.$$.fragment,Ow),Ow.forEach(t),Aw.forEach(t),jm=l(gh),$d=a(gh,"SPAN",{});var Iw=s($d);Cm=i(Iw,"MBartConfig"),Iw.forEach(t),gh.forEach(t),Ep=l(o),qe=a(o,"DIV",{class:!0});var Ct=s(qe);m(Un.$$.fragment,Ct),Em=l(Ct),to=a(Ct,"P",{});var Si=s(to);Pm=i(Si,"This is the configuration class to store the configuration of a "),di=a(Si,"A",{href:!0});var Nw=s(di);Sm=i(Nw,"MBartModel"),Nw.forEach(t),Am=i(Si,`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Rn=a(Si,"A",{href:!0,rel:!0});var Dw=s(Rn);Om=i(Dw,"facebook/mbart-large-cc25"),Dw.forEach(t),Im=i(Si," architecture."),Si.forEach(t),Nm=l(Ct),oo=a(Ct,"P",{});var Ai=s(oo);Dm=i(Ai,"Configuration objects inherit from "),li=a(Ai,"A",{href:!0});var Lw=s(li);Lm=i(Lw,"PretrainedConfig"),Lw.forEach(t),Gm=i(Ai,` and can be used to control the model outputs. Read the
documentation from `),ci=a(Ai,"A",{href:!0});var Gw=s(ci);Wm=i(Gw,"PretrainedConfig"),Gw.forEach(t),Um=i(Ai," for more information."),Ai.forEach(t),Rm=l(Ct),Bd=a(Ct,"P",{});var Ww=s(Bd);Xm=i(Ww,"Example:"),Ww.forEach(t),Vm=l(Ct),m(Xn.$$.fragment,Ct),Ct.forEach(t),Pp=l(o),no=a(o,"H2",{class:!0});var bh=s(no);Io=a(bh,"A",{id:!0,class:!0,href:!0});var Uw=s(Io);jd=a(Uw,"SPAN",{});var Rw=s(jd);m(Vn.$$.fragment,Rw),Rw.forEach(t),Uw.forEach(t),Qm=l(bh),Cd=a(bh,"SPAN",{});var Xw=s(Cd);Hm=i(Xw,"MBartTokenizer"),Xw.forEach(t),bh.forEach(t),Sp=l(o),G=a(o,"DIV",{class:!0});var me=s(G);m(Qn.$$.fragment,me),Jm=l(me),Ed=a(me,"P",{});var Vw=s(Ed);Km=i(Vw,"Construct an MBART tokenizer."),Vw.forEach(t),Zm=l(me),mt=a(me,"P",{});var Mn=s(mt);Ym=i(Mn,"Adapted from "),pi=a(Mn,"A",{href:!0});var Qw=s(pi);ef=i(Qw,"RobertaTokenizer"),Qw.forEach(t),tf=i(Mn," and "),hi=a(Mn,"A",{href:!0});var Hw=s(hi);of=i(Hw,"XLNetTokenizer"),Hw.forEach(t),nf=i(Mn,`. Based on
`),Hn=a(Mn,"A",{href:!0,rel:!0});var Jw=s(Hn);af=i(Jw,"SentencePiece"),Jw.forEach(t),sf=i(Mn,"."),Mn.forEach(t),rf=l(me),Jn=a(me,"P",{});var kh=s(Jn);df=i(kh,"The tokenization method is "),Pd=a(kh,"CODE",{});var Kw=s(Pd);lf=i(Kw,"<tokens> <eos> <language code>"),Kw.forEach(t),cf=i(kh," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),kh.forEach(t),pf=l(me),Sd=a(me,"P",{});var Zw=s(Sd);hf=i(Zw,"Examples:"),Zw.forEach(t),uf=l(me),m(Kn.$$.fragment,me),mf=l(me),No=a(me,"DIV",{class:!0});var yh=s(No);m(Zn.$$.fragment,yh),ff=l(yh),Ad=a(yh,"P",{});var Yw=s(Ad);_f=i(Yw,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Yw.forEach(t),yh.forEach(t),gf=l(me),tt=a(me,"DIV",{class:!0});var xn=s(tt);m(Yn.$$.fragment,xn),bf=l(xn),ea=a(xn,"P",{});var vh=s(ea);kf=i(vh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Od=a(vh,"CODE",{});var eM=s(Od);yf=i(eM,"X"),eM.forEach(t),vf=i(vh," represents the sequence:"),vh.forEach(t),Tf=l(xn),ta=a(xn,"UL",{});var Th=s(ta);oa=a(Th,"LI",{});var wh=s(oa);Id=a(wh,"CODE",{});var tM=s(Id);wf=i(tM,"input_ids"),tM.forEach(t),Mf=i(wh," (for encoder) "),Nd=a(wh,"CODE",{});var oM=s(Nd);xf=i(oM,"X [eos, src_lang_code]"),oM.forEach(t),wh.forEach(t),zf=l(Th),na=a(Th,"LI",{});var Mh=s(na);Dd=a(Mh,"CODE",{});var nM=s(Dd);Ff=i(nM,"decoder_input_ids"),nM.forEach(t),qf=i(Mh,": (for decoder) "),Ld=a(Mh,"CODE",{});var aM=s(Ld);$f=i(aM,"X [eos, tgt_lang_code]"),aM.forEach(t),Mh.forEach(t),Th.forEach(t),Bf=l(xn),Gd=a(xn,"P",{});var sM=s(Gd);jf=i(sM,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),sM.forEach(t),xn.forEach(t),me.forEach(t),Ap=l(o),ao=a(o,"H2",{class:!0});var xh=s(ao);Do=a(xh,"A",{id:!0,class:!0,href:!0});var rM=s(Do);Wd=a(rM,"SPAN",{});var iM=s(Wd);m(aa.$$.fragment,iM),iM.forEach(t),rM.forEach(t),Cf=l(xh),Ud=a(xh,"SPAN",{});var dM=s(Ud);Ef=i(dM,"MBartTokenizerFast"),dM.forEach(t),xh.forEach(t),Op=l(o),P=a(o,"DIV",{class:!0});var Q=s(P);m(sa.$$.fragment,Q),Pf=l(Q),so=a(Q,"P",{});var Oi=s(so);Sf=i(Oi,"Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Rd=a(Oi,"EM",{});var lM=s(Rd);Af=i(lM,"tokenizers"),lM.forEach(t),Of=i(Oi,` library). Based on
`),ra=a(Oi,"A",{href:!0,rel:!0});var cM=s(ra);If=i(cM,"BPE"),cM.forEach(t),Nf=i(Oi,"."),Oi.forEach(t),Df=l(Q),ia=a(Q,"P",{});var zh=s(ia);Lf=i(zh,"This tokenizer inherits from "),ui=a(zh,"A",{href:!0});var pM=s(ui);Gf=i(pM,"PreTrainedTokenizerFast"),pM.forEach(t),Wf=i(zh,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),zh.forEach(t),Uf=l(Q),da=a(Q,"P",{});var Fh=s(da);Rf=i(Fh,"The tokenization method is "),Xd=a(Fh,"CODE",{});var hM=s(Xd);Xf=i(hM,"<tokens> <eos> <language code>"),hM.forEach(t),Vf=i(Fh," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Fh.forEach(t),Qf=l(Q),Vd=a(Q,"P",{});var uM=s(Vd);Hf=i(uM,"Examples:"),uM.forEach(t),Jf=l(Q),m(la.$$.fragment,Q),Kf=l(Q),Se=a(Q,"DIV",{class:!0});var Et=s(Se);m(ca.$$.fragment,Et),Zf=l(Et),Qd=a(Et,"P",{});var mM=s(Qd);Yf=i(mM,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),mM.forEach(t),e_=l(Et),pa=a(Et,"P",{});var qh=s(pa);t_=i(qh,"An MBART sequence has the following format, where "),Hd=a(qh,"CODE",{});var fM=s(Hd);o_=i(fM,"X"),fM.forEach(t),n_=i(qh," represents the sequence:"),qh.forEach(t),a_=l(Et),ha=a(Et,"UL",{});var $h=s(ha);ua=a($h,"LI",{});var Bh=s(ua);Jd=a(Bh,"CODE",{});var _M=s(Jd);s_=i(_M,"input_ids"),_M.forEach(t),r_=i(Bh," (for encoder) "),Kd=a(Bh,"CODE",{});var gM=s(Kd);i_=i(gM,"X [eos, src_lang_code]"),gM.forEach(t),Bh.forEach(t),d_=l($h),ma=a($h,"LI",{});var jh=s(ma);Zd=a(jh,"CODE",{});var bM=s(Zd);l_=i(bM,"decoder_input_ids"),bM.forEach(t),c_=i(jh,": (for decoder) "),Yd=a(jh,"CODE",{});var kM=s(Yd);p_=i(kM,"X [eos, tgt_lang_code]"),kM.forEach(t),jh.forEach(t),$h.forEach(t),h_=l(Et),el=a(Et,"P",{});var yM=s(el);u_=i(yM,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),yM.forEach(t),Et.forEach(t),m_=l(Q),Lo=a(Q,"DIV",{class:!0});var Ch=s(Lo);m(fa.$$.fragment,Ch),f_=l(Ch),tl=a(Ch,"P",{});var vM=s(tl);__=i(vM,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),vM.forEach(t),Ch.forEach(t),g_=l(Q),Go=a(Q,"DIV",{class:!0});var Eh=s(Go);m(_a.$$.fragment,Eh),b_=l(Eh),ol=a(Eh,"P",{});var TM=s(ol);k_=i(TM,"Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),TM.forEach(t),Eh.forEach(t),y_=l(Q),Wo=a(Q,"DIV",{class:!0});var Ph=s(Wo);m(ga.$$.fragment,Ph),v_=l(Ph),nl=a(Ph,"P",{});var wM=s(nl);T_=i(wM,"Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),wM.forEach(t),Ph.forEach(t),Q.forEach(t),Ip=l(o),ro=a(o,"H2",{class:!0});var Sh=s(ro);Uo=a(Sh,"A",{id:!0,class:!0,href:!0});var MM=s(Uo);al=a(MM,"SPAN",{});var xM=s(al);m(ba.$$.fragment,xM),xM.forEach(t),MM.forEach(t),w_=l(Sh),sl=a(Sh,"SPAN",{});var zM=s(sl);M_=i(zM,"MBart50Tokenizer"),zM.forEach(t),Sh.forEach(t),Np=l(o),S=a(o,"DIV",{class:!0});var H=s(S);m(ka.$$.fragment,H),x_=l(H),ya=a(H,"P",{});var Ah=s(ya);z_=i(Ah,"Construct a MBart50 tokenizer. Based on "),va=a(Ah,"A",{href:!0,rel:!0});var FM=s(va);F_=i(FM,"SentencePiece"),FM.forEach(t),q_=i(Ah,"."),Ah.forEach(t),$_=l(H),Ta=a(H,"P",{});var Oh=s(Ta);B_=i(Oh,"This tokenizer inherits from "),mi=a(Oh,"A",{href:!0});var qM=s(mi);j_=i(qM,"PreTrainedTokenizer"),qM.forEach(t),C_=i(Oh,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Oh.forEach(t),E_=l(H),rl=a(H,"P",{});var $M=s(rl);P_=i($M,"Examples:"),$M.forEach(t),S_=l(H),m(wa.$$.fragment,H),A_=l(H),ot=a(H,"DIV",{class:!0});var zn=s(ot);m(Ma.$$.fragment,zn),O_=l(zn),xa=a(zn,"P",{});var Ih=s(xa);I_=i(Ih,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),il=a(Ih,"CODE",{});var BM=s(il);N_=i(BM,"X"),BM.forEach(t),D_=i(Ih," represents the sequence:"),Ih.forEach(t),L_=l(zn),za=a(zn,"UL",{});var Nh=s(za);Fa=a(Nh,"LI",{});var Dh=s(Fa);dl=a(Dh,"CODE",{});var jM=s(dl);G_=i(jM,"input_ids"),jM.forEach(t),W_=i(Dh," (for encoder) "),ll=a(Dh,"CODE",{});var CM=s(ll);U_=i(CM,"[src_lang_code] X [eos]"),CM.forEach(t),Dh.forEach(t),R_=l(Nh),qa=a(Nh,"LI",{});var Lh=s(qa);cl=a(Lh,"CODE",{});var EM=s(cl);X_=i(EM,"labels"),EM.forEach(t),V_=i(Lh,": (for decoder) "),pl=a(Lh,"CODE",{});var PM=s(pl);Q_=i(PM,"[tgt_lang_code] X [eos]"),PM.forEach(t),Lh.forEach(t),Nh.forEach(t),H_=l(zn),hl=a(zn,"P",{});var SM=s(hl);J_=i(SM,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),SM.forEach(t),zn.forEach(t),K_=l(H),Ro=a(H,"DIV",{class:!0});var Gh=s(Ro);m($a.$$.fragment,Gh),Z_=l(Gh),ul=a(Gh,"P",{});var AM=s(ul);Y_=i(AM,"Converts a sequence of tokens (strings for sub-words) in a single string."),AM.forEach(t),Gh.forEach(t),eg=l(H),Xo=a(H,"DIV",{class:!0});var Wh=s(Xo);m(Ba.$$.fragment,Wh),tg=l(Wh),ja=a(Wh,"P",{});var Uh=s(ja);og=i(Uh,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ml=a(Uh,"CODE",{});var OM=s(ml);ng=i(OM,"prepare_for_model"),OM.forEach(t),ag=i(Uh," method."),Uh.forEach(t),Wh.forEach(t),sg=l(H),Vo=a(H,"DIV",{class:!0});var Rh=s(Vo);m(Ca.$$.fragment,Rh),rg=l(Rh),fl=a(Rh,"P",{});var IM=s(fl);ig=i(IM,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),IM.forEach(t),Rh.forEach(t),dg=l(H),Qo=a(H,"DIV",{class:!0});var Xh=s(Qo);m(Ea.$$.fragment,Xh),lg=l(Xh),_l=a(Xh,"P",{});var NM=s(_l);cg=i(NM,"Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),NM.forEach(t),Xh.forEach(t),H.forEach(t),Dp=l(o),io=a(o,"H2",{class:!0});var Vh=s(io);Ho=a(Vh,"A",{id:!0,class:!0,href:!0});var DM=s(Ho);gl=a(DM,"SPAN",{});var LM=s(gl);m(Pa.$$.fragment,LM),LM.forEach(t),DM.forEach(t),pg=l(Vh),bl=a(Vh,"SPAN",{});var GM=s(bl);hg=i(GM,"MBart50TokenizerFast"),GM.forEach(t),Vh.forEach(t),Lp=l(o),W=a(o,"DIV",{class:!0});var fe=s(W);m(Sa.$$.fragment,fe),ug=l(fe),lo=a(fe,"P",{});var Ii=s(lo);mg=i(Ii,"Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),kl=a(Ii,"EM",{});var WM=s(kl);fg=i(WM,"tokenizers"),WM.forEach(t),_g=i(Ii,` library). Based on
`),Aa=a(Ii,"A",{href:!0,rel:!0});var UM=s(Aa);gg=i(UM,"BPE"),UM.forEach(t),bg=i(Ii,"."),Ii.forEach(t),kg=l(fe),Oa=a(fe,"P",{});var Qh=s(Oa);yg=i(Qh,"This tokenizer inherits from "),fi=a(Qh,"A",{href:!0});var RM=s(fi);vg=i(RM,"PreTrainedTokenizerFast"),RM.forEach(t),Tg=i(Qh,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Qh.forEach(t),wg=l(fe),yl=a(fe,"P",{});var XM=s(yl);Mg=i(XM,"Examples:"),XM.forEach(t),xg=l(fe),m(Ia.$$.fragment,fe),zg=l(fe),Ae=a(fe,"DIV",{class:!0});var Pt=s(Ae);m(Na.$$.fragment,Pt),Fg=l(Pt),vl=a(Pt,"P",{});var VM=s(vl);qg=i(VM,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),VM.forEach(t),$g=l(Pt),Da=a(Pt,"P",{});var Hh=s(Da);Bg=i(Hh,"An MBART-50 sequence has the following format, where "),Tl=a(Hh,"CODE",{});var QM=s(Tl);jg=i(QM,"X"),QM.forEach(t),Cg=i(Hh," represents the sequence:"),Hh.forEach(t),Eg=l(Pt),La=a(Pt,"UL",{});var Jh=s(La);Ga=a(Jh,"LI",{});var Kh=s(Ga);wl=a(Kh,"CODE",{});var HM=s(wl);Pg=i(HM,"input_ids"),HM.forEach(t),Sg=i(Kh," (for encoder) "),Ml=a(Kh,"CODE",{});var JM=s(Ml);Ag=i(JM,"[src_lang_code] X [eos]"),JM.forEach(t),Kh.forEach(t),Og=l(Jh),Wa=a(Jh,"LI",{});var Zh=s(Wa);xl=a(Zh,"CODE",{});var KM=s(xl);Ig=i(KM,"labels"),KM.forEach(t),Ng=i(Zh,": (for decoder) "),zl=a(Zh,"CODE",{});var ZM=s(zl);Dg=i(ZM,"[tgt_lang_code] X [eos]"),ZM.forEach(t),Zh.forEach(t),Jh.forEach(t),Lg=l(Pt),Fl=a(Pt,"P",{});var YM=s(Fl);Gg=i(YM,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),YM.forEach(t),Pt.forEach(t),Wg=l(fe),Jo=a(fe,"DIV",{class:!0});var Yh=s(Jo);m(Ua.$$.fragment,Yh),Ug=l(Yh),ql=a(Yh,"P",{});var e2=s(ql);Rg=i(e2,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),e2.forEach(t),Yh.forEach(t),Xg=l(fe),Ko=a(fe,"DIV",{class:!0});var eu=s(Ko);m(Ra.$$.fragment,eu),Vg=l(eu),$l=a(eu,"P",{});var t2=s($l);Qg=i(t2,"Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),t2.forEach(t),eu.forEach(t),fe.forEach(t),Gp=l(o),co=a(o,"H2",{class:!0});var tu=s(co);Zo=a(tu,"A",{id:!0,class:!0,href:!0});var o2=s(Zo);Bl=a(o2,"SPAN",{});var n2=s(Bl);m(Xa.$$.fragment,n2),n2.forEach(t),o2.forEach(t),Hg=l(tu),jl=a(tu,"SPAN",{});var a2=s(jl);Jg=i(a2,"MBartModel"),a2.forEach(t),tu.forEach(t),Wp=l(o),He=a(o,"DIV",{class:!0});var Fn=s(He);m(Va.$$.fragment,Fn),Kg=l(Fn),Qa=a(Fn,"P",{});var ou=s(Qa);Zg=i(ou,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),_i=a(ou,"A",{href:!0});var s2=s(_i);Yg=i(s2,"PreTrainedModel"),s2.forEach(t),eb=i(ou,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ou.forEach(t),tb=l(Fn),Ha=a(Fn,"P",{});var nu=s(Ha);ob=i(nu,"This model is also a PyTorch "),Ja=a(nu,"A",{href:!0,rel:!0});var r2=s(Ja);nb=i(r2,"torch.nn.Module"),r2.forEach(t),ab=i(nu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nu.forEach(t),sb=l(Fn),Oe=a(Fn,"DIV",{class:!0});var St=s(Oe);m(Ka.$$.fragment,St),rb=l(St),po=a(St,"P",{});var Ni=s(po);ib=i(Ni,"The "),gi=a(Ni,"A",{href:!0});var i2=s(gi);db=i(i2,"MBartModel"),i2.forEach(t),lb=i(Ni," forward method, overrides the "),Cl=a(Ni,"CODE",{});var d2=s(Cl);cb=i(d2,"__call__"),d2.forEach(t),pb=i(Ni," special method."),Ni.forEach(t),hb=l(St),m(Yo.$$.fragment,St),ub=l(St),El=a(St,"P",{});var l2=s(El);mb=i(l2,"Example:"),l2.forEach(t),fb=l(St),m(Za.$$.fragment,St),St.forEach(t),Fn.forEach(t),Up=l(o),ho=a(o,"H2",{class:!0});var au=s(ho);en=a(au,"A",{id:!0,class:!0,href:!0});var c2=s(en);Pl=a(c2,"SPAN",{});var p2=s(Pl);m(Ya.$$.fragment,p2),p2.forEach(t),c2.forEach(t),_b=l(au),Sl=a(au,"SPAN",{});var h2=s(Sl);gb=i(h2,"MBartForConditionalGeneration"),h2.forEach(t),au.forEach(t),Rp=l(o),Je=a(o,"DIV",{class:!0});var qn=s(Je);m(es.$$.fragment,qn),bb=l(qn),ts=a(qn,"P",{});var su=s(ts);kb=i(su,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),bi=a(su,"A",{href:!0});var u2=s(bi);yb=i(u2,"PreTrainedModel"),u2.forEach(t),vb=i(su,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),su.forEach(t),Tb=l(qn),os=a(qn,"P",{});var ru=s(os);wb=i(ru,"This model is also a PyTorch "),ns=a(ru,"A",{href:!0,rel:!0});var m2=s(ns);Mb=i(m2,"torch.nn.Module"),m2.forEach(t),xb=i(ru,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ru.forEach(t),zb=l(qn),Y=a(qn,"DIV",{class:!0});var Ge=s(Y);m(as.$$.fragment,Ge),Fb=l(Ge),uo=a(Ge,"P",{});var Di=s(uo);qb=i(Di,"The "),ki=a(Di,"A",{href:!0});var f2=s(ki);$b=i(f2,"MBartForConditionalGeneration"),f2.forEach(t),Bb=i(Di," forward method, overrides the "),Al=a(Di,"CODE",{});var _2=s(Al);jb=i(_2,"__call__"),_2.forEach(t),Cb=i(Di," special method."),Di.forEach(t),Eb=l(Ge),m(tn.$$.fragment,Ge),Pb=l(Ge),Ol=a(Ge,"P",{});var g2=s(Ol);Sb=i(g2,"Translation example:"),g2.forEach(t),Ab=l(Ge),m(ss.$$.fragment,Ge),Ob=l(Ge),Il=a(Ge,"P",{});var b2=s(Il);Ib=i(b2,"Mask filling example:"),b2.forEach(t),Nb=l(Ge),m(rs.$$.fragment,Ge),Ge.forEach(t),qn.forEach(t),Xp=l(o),mo=a(o,"H2",{class:!0});var iu=s(mo);on=a(iu,"A",{id:!0,class:!0,href:!0});var k2=s(on);Nl=a(k2,"SPAN",{});var y2=s(Nl);m(is.$$.fragment,y2),y2.forEach(t),k2.forEach(t),Db=l(iu),Dl=a(iu,"SPAN",{});var v2=s(Dl);Lb=i(v2,"MBartForQuestionAnswering"),v2.forEach(t),iu.forEach(t),Vp=l(o),$e=a(o,"DIV",{class:!0});var At=s($e);m(ds.$$.fragment,At),Gb=l(At),fo=a(At,"P",{});var Li=s(fo);Wb=i(Li,`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ll=a(Li,"CODE",{});var T2=s(Ll);Ub=i(T2,"span start logits"),T2.forEach(t),Rb=i(Li," and "),Gl=a(Li,"CODE",{});var w2=s(Gl);Xb=i(w2,"span end logits"),w2.forEach(t),Vb=i(Li,")."),Li.forEach(t),Qb=l(At),ls=a(At,"P",{});var du=s(ls);Hb=i(du,"This model inherits from "),yi=a(du,"A",{href:!0});var M2=s(yi);Jb=i(M2,"PreTrainedModel"),M2.forEach(t),Kb=i(du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),du.forEach(t),Zb=l(At),cs=a(At,"P",{});var lu=s(cs);Yb=i(lu,"This model is also a PyTorch "),ps=a(lu,"A",{href:!0,rel:!0});var x2=s(ps);ek=i(x2,"torch.nn.Module"),x2.forEach(t),tk=i(lu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lu.forEach(t),ok=l(At),ue=a(At,"DIV",{class:!0});var at=s(ue);m(hs.$$.fragment,at),nk=l(at),_o=a(at,"P",{});var Gi=s(_o);ak=i(Gi,"The "),vi=a(Gi,"A",{href:!0});var z2=s(vi);sk=i(z2,"MBartForQuestionAnswering"),z2.forEach(t),rk=i(Gi," forward method, overrides the "),Wl=a(Gi,"CODE",{});var F2=s(Wl);ik=i(F2,"__call__"),F2.forEach(t),dk=i(Gi," special method."),Gi.forEach(t),lk=l(at),m(nn.$$.fragment,at),ck=l(at),Ul=a(at,"P",{});var q2=s(Ul);pk=i(q2,"Example:"),q2.forEach(t),hk=l(at),m(us.$$.fragment,at),uk=l(at),m(ms.$$.fragment,at),at.forEach(t),At.forEach(t),Qp=l(o),go=a(o,"H2",{class:!0});var cu=s(go);an=a(cu,"A",{id:!0,class:!0,href:!0});var $2=s(an);Rl=a($2,"SPAN",{});var B2=s(Rl);m(fs.$$.fragment,B2),B2.forEach(t),$2.forEach(t),mk=l(cu),Xl=a(cu,"SPAN",{});var j2=s(Xl);fk=i(j2,"MBartForSequenceClassification"),j2.forEach(t),cu.forEach(t),Hp=l(o),Be=a(o,"DIV",{class:!0});var Ot=s(Be);m(_s.$$.fragment,Ot),_k=l(Ot),Vl=a(Ot,"P",{});var C2=s(Vl);gk=i(C2,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),C2.forEach(t),bk=l(Ot),gs=a(Ot,"P",{});var pu=s(gs);kk=i(pu,"This model inherits from "),Ti=a(pu,"A",{href:!0});var E2=s(Ti);yk=i(E2,"PreTrainedModel"),E2.forEach(t),vk=i(pu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pu.forEach(t),Tk=l(Ot),bs=a(Ot,"P",{});var hu=s(bs);wk=i(hu,"This model is also a PyTorch "),ks=a(hu,"A",{href:!0,rel:!0});var P2=s(ks);Mk=i(P2,"torch.nn.Module"),P2.forEach(t),xk=i(hu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hu.forEach(t),zk=l(Ot),L=a(Ot,"DIV",{class:!0});var oe=s(L);m(ys.$$.fragment,oe),Fk=l(oe),bo=a(oe,"P",{});var Wi=s(bo);qk=i(Wi,"The "),wi=a(Wi,"A",{href:!0});var S2=s(wi);$k=i(S2,"MBartForSequenceClassification"),S2.forEach(t),Bk=i(Wi," forward method, overrides the "),Ql=a(Wi,"CODE",{});var A2=s(Ql);jk=i(A2,"__call__"),A2.forEach(t),Ck=i(Wi," special method."),Wi.forEach(t),Ek=l(oe),m(sn.$$.fragment,oe),Pk=l(oe),Hl=a(oe,"P",{});var O2=s(Hl);Sk=i(O2,"Example of single-label classification:"),O2.forEach(t),Ak=l(oe),m(vs.$$.fragment,oe),Ok=l(oe),m(Ts.$$.fragment,oe),Ik=l(oe),Jl=a(oe,"P",{});var I2=s(Jl);Nk=i(I2,"Example of multi-label classification:"),I2.forEach(t),Dk=l(oe),m(ws.$$.fragment,oe),Lk=l(oe),m(Ms.$$.fragment,oe),oe.forEach(t),Ot.forEach(t),Jp=l(o),ko=a(o,"H2",{class:!0});var uu=s(ko);rn=a(uu,"A",{id:!0,class:!0,href:!0});var N2=s(rn);Kl=a(N2,"SPAN",{});var D2=s(Kl);m(xs.$$.fragment,D2),D2.forEach(t),N2.forEach(t),Gk=l(uu),Zl=a(uu,"SPAN",{});var L2=s(Zl);Wk=i(L2,"MBartForCausalLM"),L2.forEach(t),uu.forEach(t),Kp=l(o),yo=a(o,"DIV",{class:!0});var mu=s(yo);m(zs.$$.fragment,mu),Uk=l(mu),Tt=a(mu,"DIV",{class:!0});var Ui=s(Tt);m(Fs.$$.fragment,Ui),Rk=l(Ui),Yl=a(Ui,"P",{});var G2=s(Yl);Xk=i(G2,"Example:"),G2.forEach(t),Vk=l(Ui),m(qs.$$.fragment,Ui),Ui.forEach(t),mu.forEach(t),Zp=l(o),vo=a(o,"H2",{class:!0});var fu=s(vo);dn=a(fu,"A",{id:!0,class:!0,href:!0});var W2=s(dn);ec=a(W2,"SPAN",{});var U2=s(ec);m($s.$$.fragment,U2),U2.forEach(t),W2.forEach(t),Qk=l(fu),tc=a(fu,"SPAN",{});var R2=s(tc);Hk=i(R2,"TFMBartModel"),R2.forEach(t),fu.forEach(t),Yp=l(o),je=a(o,"DIV",{class:!0});var It=s(je);m(Bs.$$.fragment,It),Jk=l(It),js=a(It,"P",{});var _u=s(js);Kk=i(_u,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mi=a(_u,"A",{href:!0});var X2=s(Mi);Zk=i(X2,"TFPreTrainedModel"),X2.forEach(t),Yk=i(_u,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_u.forEach(t),ey=l(It),Cs=a(It,"P",{});var gu=s(Cs);ty=i(gu,"This model is also a "),Es=a(gu,"A",{href:!0,rel:!0});var V2=s(Es);oy=i(V2,"tf.keras.Model"),V2.forEach(t),ny=i(gu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gu.forEach(t),ay=l(It),m(ln.$$.fragment,It),sy=l(It),Ie=a(It,"DIV",{class:!0});var Nt=s(Ie);m(Ps.$$.fragment,Nt),ry=l(Nt),To=a(Nt,"P",{});var Ri=s(To);iy=i(Ri,"The "),xi=a(Ri,"A",{href:!0});var Q2=s(xi);dy=i(Q2,"TFMBartModel"),Q2.forEach(t),ly=i(Ri," forward method, overrides the "),oc=a(Ri,"CODE",{});var H2=s(oc);cy=i(H2,"__call__"),H2.forEach(t),py=i(Ri," special method."),Ri.forEach(t),hy=l(Nt),m(cn.$$.fragment,Nt),uy=l(Nt),nc=a(Nt,"P",{});var J2=s(nc);my=i(J2,"Example:"),J2.forEach(t),fy=l(Nt),m(Ss.$$.fragment,Nt),Nt.forEach(t),It.forEach(t),eh=l(o),wo=a(o,"H2",{class:!0});var bu=s(wo);pn=a(bu,"A",{id:!0,class:!0,href:!0});var K2=s(pn);ac=a(K2,"SPAN",{});var Z2=s(ac);m(As.$$.fragment,Z2),Z2.forEach(t),K2.forEach(t),_y=l(bu),sc=a(bu,"SPAN",{});var Y2=s(sc);gy=i(Y2,"TFMBartForConditionalGeneration"),Y2.forEach(t),bu.forEach(t),th=l(o),Ce=a(o,"DIV",{class:!0});var Dt=s(Ce);m(Os.$$.fragment,Dt),by=l(Dt),Is=a(Dt,"P",{});var ku=s(Is);ky=i(ku,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),zi=a(ku,"A",{href:!0});var ex=s(zi);yy=i(ex,"TFPreTrainedModel"),ex.forEach(t),vy=i(ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku.forEach(t),Ty=l(Dt),Ns=a(Dt,"P",{});var yu=s(Ns);wy=i(yu,"This model is also a "),Ds=a(yu,"A",{href:!0,rel:!0});var tx=s(Ds);My=i(tx,"tf.keras.Model"),tx.forEach(t),xy=i(yu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yu.forEach(t),zy=l(Dt),m(hn.$$.fragment,Dt),Fy=l(Dt),ee=a(Dt,"DIV",{class:!0});var We=s(ee);m(Ls.$$.fragment,We),qy=l(We),Mo=a(We,"P",{});var Xi=s(Mo);$y=i(Xi,"The "),Fi=a(Xi,"A",{href:!0});var ox=s(Fi);By=i(ox,"TFMBartForConditionalGeneration"),ox.forEach(t),jy=i(Xi," forward method, overrides the "),rc=a(Xi,"CODE",{});var nx=s(rc);Cy=i(nx,"__call__"),nx.forEach(t),Ey=i(Xi," special method."),Xi.forEach(t),Py=l(We),m(un.$$.fragment,We),Sy=l(We),ic=a(We,"P",{});var ax=s(ic);Ay=i(ax,"Summarization example:"),ax.forEach(t),Oy=l(We),m(Gs.$$.fragment,We),Iy=l(We),dc=a(We,"P",{});var sx=s(dc);Ny=i(sx,"Mask filling example:"),sx.forEach(t),Dy=l(We),m(Ws.$$.fragment,We),We.forEach(t),Dt.forEach(t),oh=l(o),xo=a(o,"H2",{class:!0});var vu=s(xo);mn=a(vu,"A",{id:!0,class:!0,href:!0});var rx=s(mn);lc=a(rx,"SPAN",{});var ix=s(lc);m(Us.$$.fragment,ix),ix.forEach(t),rx.forEach(t),Ly=l(vu),cc=a(vu,"SPAN",{});var dx=s(cc);Gy=i(dx,"FlaxMBartModel"),dx.forEach(t),vu.forEach(t),nh=l(o),U=a(o,"DIV",{class:!0});var _e=s(U);m(Rs.$$.fragment,_e),Wy=l(_e),Xs=a(_e,"P",{});var Tu=s(Xs);Uy=i(Tu,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),qi=a(Tu,"A",{href:!0});var lx=s(qi);Ry=i(lx,"FlaxPreTrainedModel"),lx.forEach(t),Xy=i(Tu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tu.forEach(t),Vy=l(_e),Vs=a(_e,"P",{});var wu=s(Vs);Qy=i(wu,`This model is also a Flax Linen
`),Qs=a(wu,"A",{href:!0,rel:!0});var cx=s(Qs);Hy=i(cx,"flax.nn.Module"),cx.forEach(t),Jy=i(wu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wu.forEach(t),Ky=l(_e),pc=a(_e,"P",{});var px=s(pc);Zy=i(px,"Finally, this model supports inherent JAX features such as:"),px.forEach(t),Yy=l(_e),ft=a(_e,"UL",{});var $n=s(ft);hc=a($n,"LI",{});var hx=s(hc);Hs=a(hx,"A",{href:!0,rel:!0});var ux=s(Hs);ev=i(ux,"Just-In-Time (JIT) compilation"),ux.forEach(t),hx.forEach(t),tv=l($n),uc=a($n,"LI",{});var mx=s(uc);Js=a(mx,"A",{href:!0,rel:!0});var fx=s(Js);ov=i(fx,"Automatic Differentiation"),fx.forEach(t),mx.forEach(t),nv=l($n),mc=a($n,"LI",{});var _x=s(mc);Ks=a(_x,"A",{href:!0,rel:!0});var gx=s(Ks);av=i(gx,"Vectorization"),gx.forEach(t),_x.forEach(t),sv=l($n),fc=a($n,"LI",{});var bx=s(fc);Zs=a(bx,"A",{href:!0,rel:!0});var kx=s(Zs);rv=i(kx,"Parallelization"),kx.forEach(t),bx.forEach(t),$n.forEach(t),iv=l(_e),Ne=a(_e,"DIV",{class:!0});var Lt=s(Ne);m(Ys.$$.fragment,Lt),dv=l(Lt),zo=a(Lt,"P",{});var Vi=s(zo);lv=i(Vi,"The "),_c=a(Vi,"CODE",{});var yx=s(_c);cv=i(yx,"FlaxMBartPreTrainedModel"),yx.forEach(t),pv=i(Vi," forward method, overrides the "),gc=a(Vi,"CODE",{});var vx=s(gc);hv=i(vx,"__call__"),vx.forEach(t),uv=i(Vi," special method."),Vi.forEach(t),mv=l(Lt),m(fn.$$.fragment,Lt),fv=l(Lt),bc=a(Lt,"P",{});var Tx=s(bc);_v=i(Tx,"Example:"),Tx.forEach(t),gv=l(Lt),m(er.$$.fragment,Lt),Lt.forEach(t),bv=l(_e),wt=a(_e,"DIV",{class:!0});var Qi=s(wt);m(tr.$$.fragment,Qi),kv=l(Qi),kc=a(Qi,"P",{});var wx=s(kc);yv=i(wx,"Example:"),wx.forEach(t),vv=l(Qi),m(or.$$.fragment,Qi),Qi.forEach(t),Tv=l(_e),Mt=a(_e,"DIV",{class:!0});var Hi=s(Mt);m(nr.$$.fragment,Hi),wv=l(Hi),yc=a(Hi,"P",{});var Mx=s(yc);Mv=i(Mx,"Example:"),Mx.forEach(t),xv=l(Hi),m(ar.$$.fragment,Hi),Hi.forEach(t),_e.forEach(t),ah=l(o),Fo=a(o,"H2",{class:!0});var Mu=s(Fo);_n=a(Mu,"A",{id:!0,class:!0,href:!0});var xx=s(_n);vc=a(xx,"SPAN",{});var zx=s(vc);m(sr.$$.fragment,zx),zx.forEach(t),xx.forEach(t),zv=l(Mu),Tc=a(Mu,"SPAN",{});var Fx=s(Tc);Fv=i(Fx,"FlaxMBartForConditionalGeneration"),Fx.forEach(t),Mu.forEach(t),sh=l(o),R=a(o,"DIV",{class:!0});var ge=s(R);m(rr.$$.fragment,ge),qv=l(ge),ir=a(ge,"P",{});var xu=s(ir);$v=i(xu,`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),$i=a(xu,"A",{href:!0});var qx=s($i);Bv=i(qx,"FlaxPreTrainedModel"),qx.forEach(t),jv=i(xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xu.forEach(t),Cv=l(ge),dr=a(ge,"P",{});var zu=s(dr);Ev=i(zu,`This model is also a Flax Linen
`),lr=a(zu,"A",{href:!0,rel:!0});var $x=s(lr);Pv=i($x,"flax.nn.Module"),$x.forEach(t),Sv=i(zu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zu.forEach(t),Av=l(ge),wc=a(ge,"P",{});var Bx=s(wc);Ov=i(Bx,"Finally, this model supports inherent JAX features such as:"),Bx.forEach(t),Iv=l(ge),_t=a(ge,"UL",{});var Bn=s(_t);Mc=a(Bn,"LI",{});var jx=s(Mc);cr=a(jx,"A",{href:!0,rel:!0});var Cx=s(cr);Nv=i(Cx,"Just-In-Time (JIT) compilation"),Cx.forEach(t),jx.forEach(t),Dv=l(Bn),xc=a(Bn,"LI",{});var Ex=s(xc);pr=a(Ex,"A",{href:!0,rel:!0});var Px=s(pr);Lv=i(Px,"Automatic Differentiation"),Px.forEach(t),Ex.forEach(t),Gv=l(Bn),zc=a(Bn,"LI",{});var Sx=s(zc);hr=a(Sx,"A",{href:!0,rel:!0});var Ax=s(hr);Wv=i(Ax,"Vectorization"),Ax.forEach(t),Sx.forEach(t),Uv=l(Bn),Fc=a(Bn,"LI",{});var Ox=s(Fc);ur=a(Ox,"A",{href:!0,rel:!0});var Ix=s(ur);Rv=i(Ix,"Parallelization"),Ix.forEach(t),Ox.forEach(t),Bn.forEach(t),Xv=l(ge),te=a(ge,"DIV",{class:!0});var Ue=s(te);m(mr.$$.fragment,Ue),Vv=l(Ue),qo=a(Ue,"P",{});var Ji=s(qo);Qv=i(Ji,"The "),qc=a(Ji,"CODE",{});var Nx=s(qc);Hv=i(Nx,"FlaxMBartPreTrainedModel"),Nx.forEach(t),Jv=i(Ji," forward method, overrides the "),$c=a(Ji,"CODE",{});var Dx=s($c);Kv=i(Dx,"__call__"),Dx.forEach(t),Zv=i(Ji," special method."),Ji.forEach(t),Yv=l(Ue),m(gn.$$.fragment,Ue),e1=l(Ue),Bc=a(Ue,"P",{});var Lx=s(Bc);t1=i(Lx,"Summarization example:"),Lx.forEach(t),o1=l(Ue),m(fr.$$.fragment,Ue),n1=l(Ue),jc=a(Ue,"P",{});var Gx=s(jc);a1=i(Gx,"Mask filling example:"),Gx.forEach(t),s1=l(Ue),m(_r.$$.fragment,Ue),Ue.forEach(t),r1=l(ge),xt=a(ge,"DIV",{class:!0});var Ki=s(xt);m(gr.$$.fragment,Ki),i1=l(Ki),Cc=a(Ki,"P",{});var Wx=s(Cc);d1=i(Wx,"Example:"),Wx.forEach(t),l1=l(Ki),m(br.$$.fragment,Ki),Ki.forEach(t),c1=l(ge),zt=a(ge,"DIV",{class:!0});var Zi=s(zt);m(kr.$$.fragment,Zi),p1=l(Zi),Ec=a(Zi,"P",{});var Ux=s(Ec);h1=i(Ux,"Example:"),Ux.forEach(t),u1=l(Zi),m(yr.$$.fragment,Zi),Zi.forEach(t),ge.forEach(t),rh=l(o),$o=a(o,"H2",{class:!0});var Fu=s($o);bn=a(Fu,"A",{id:!0,class:!0,href:!0});var Rx=s(bn);Pc=a(Rx,"SPAN",{});var Xx=s(Pc);m(vr.$$.fragment,Xx),Xx.forEach(t),Rx.forEach(t),m1=l(Fu),Sc=a(Fu,"SPAN",{});var Vx=s(Sc);f1=i(Vx,"FlaxMBartForSequenceClassification"),Vx.forEach(t),Fu.forEach(t),ih=l(o),O=a(o,"DIV",{class:!0});var ne=s(O);m(Tr.$$.fragment,ne),_1=l(ne),Ac=a(ne,"P",{});var Qx=s(Ac);g1=i(Qx,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Qx.forEach(t),b1=l(ne),wr=a(ne,"P",{});var qu=s(wr);k1=i(qu,"This model inherits from "),Bi=a(qu,"A",{href:!0});var Hx=s(Bi);y1=i(Hx,"FlaxPreTrainedModel"),Hx.forEach(t),v1=i(qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qu.forEach(t),T1=l(ne),Mr=a(ne,"P",{});var $u=s(Mr);w1=i($u,`This model is also a Flax Linen
`),xr=a($u,"A",{href:!0,rel:!0});var Jx=s(xr);M1=i(Jx,"flax.nn.Module"),Jx.forEach(t),x1=i($u,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),$u.forEach(t),z1=l(ne),Oc=a(ne,"P",{});var Kx=s(Oc);F1=i(Kx,"Finally, this model supports inherent JAX features such as:"),Kx.forEach(t),q1=l(ne),gt=a(ne,"UL",{});var jn=s(gt);Ic=a(jn,"LI",{});var Zx=s(Ic);zr=a(Zx,"A",{href:!0,rel:!0});var Yx=s(zr);$1=i(Yx,"Just-In-Time (JIT) compilation"),Yx.forEach(t),Zx.forEach(t),B1=l(jn),Nc=a(jn,"LI",{});var e0=s(Nc);Fr=a(e0,"A",{href:!0,rel:!0});var t0=s(Fr);j1=i(t0,"Automatic Differentiation"),t0.forEach(t),e0.forEach(t),C1=l(jn),Dc=a(jn,"LI",{});var o0=s(Dc);qr=a(o0,"A",{href:!0,rel:!0});var n0=s(qr);E1=i(n0,"Vectorization"),n0.forEach(t),o0.forEach(t),P1=l(jn),Lc=a(jn,"LI",{});var a0=s(Lc);$r=a(a0,"A",{href:!0,rel:!0});var s0=s($r);S1=i(s0,"Parallelization"),s0.forEach(t),a0.forEach(t),jn.forEach(t),A1=l(ne),De=a(ne,"DIV",{class:!0});var Gt=s(De);m(Br.$$.fragment,Gt),O1=l(Gt),Bo=a(Gt,"P",{});var Yi=s(Bo);I1=i(Yi,"The "),Gc=a(Yi,"CODE",{});var r0=s(Gc);N1=i(r0,"FlaxMBartPreTrainedModel"),r0.forEach(t),D1=i(Yi," forward method, overrides the "),Wc=a(Yi,"CODE",{});var i0=s(Wc);L1=i(i0,"__call__"),i0.forEach(t),G1=i(Yi," special method."),Yi.forEach(t),W1=l(Gt),m(kn.$$.fragment,Gt),U1=l(Gt),Uc=a(Gt,"P",{});var d0=s(Uc);R1=i(d0,"Example:"),d0.forEach(t),X1=l(Gt),m(jr.$$.fragment,Gt),Gt.forEach(t),V1=l(ne),Ft=a(ne,"DIV",{class:!0});var ed=s(Ft);m(Cr.$$.fragment,ed),Q1=l(ed),Rc=a(ed,"P",{});var l0=s(Rc);H1=i(l0,"Example:"),l0.forEach(t),J1=l(ed),m(Er.$$.fragment,ed),ed.forEach(t),K1=l(ne),qt=a(ne,"DIV",{class:!0});var td=s(qt);m(Pr.$$.fragment,td),Z1=l(td),Xc=a(td,"P",{});var c0=s(Xc);Y1=i(c0,"Example:"),c0.forEach(t),eT=l(td),m(Sr.$$.fragment,td),td.forEach(t),ne.forEach(t),dh=l(o),jo=a(o,"H2",{class:!0});var Bu=s(jo);yn=a(Bu,"A",{id:!0,class:!0,href:!0});var p0=s(yn);Vc=a(p0,"SPAN",{});var h0=s(Vc);m(Ar.$$.fragment,h0),h0.forEach(t),p0.forEach(t),tT=l(Bu),Qc=a(Bu,"SPAN",{});var u0=s(Qc);oT=i(u0,"FlaxMBartForQuestionAnswering"),u0.forEach(t),Bu.forEach(t),lh=l(o),I=a(o,"DIV",{class:!0});var ae=s(I);m(Or.$$.fragment,ae),nT=l(ae),Co=a(ae,"P",{});var od=s(Co);aT=i(od,`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Hc=a(od,"CODE",{});var m0=s(Hc);sT=i(m0,"span start logits"),m0.forEach(t),rT=i(od," and "),Jc=a(od,"CODE",{});var f0=s(Jc);iT=i(f0,"span end logits"),f0.forEach(t),dT=i(od,")."),od.forEach(t),lT=l(ae),Ir=a(ae,"P",{});var ju=s(Ir);cT=i(ju,"This model inherits from "),ji=a(ju,"A",{href:!0});var _0=s(ji);pT=i(_0,"FlaxPreTrainedModel"),_0.forEach(t),hT=i(ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ju.forEach(t),uT=l(ae),Nr=a(ae,"P",{});var Cu=s(Nr);mT=i(Cu,`This model is also a Flax Linen
`),Dr=a(Cu,"A",{href:!0,rel:!0});var g0=s(Dr);fT=i(g0,"flax.nn.Module"),g0.forEach(t),_T=i(Cu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Cu.forEach(t),gT=l(ae),Kc=a(ae,"P",{});var b0=s(Kc);bT=i(b0,"Finally, this model supports inherent JAX features such as:"),b0.forEach(t),kT=l(ae),bt=a(ae,"UL",{});var Cn=s(bt);Zc=a(Cn,"LI",{});var k0=s(Zc);Lr=a(k0,"A",{href:!0,rel:!0});var y0=s(Lr);yT=i(y0,"Just-In-Time (JIT) compilation"),y0.forEach(t),k0.forEach(t),vT=l(Cn),Yc=a(Cn,"LI",{});var v0=s(Yc);Gr=a(v0,"A",{href:!0,rel:!0});var T0=s(Gr);TT=i(T0,"Automatic Differentiation"),T0.forEach(t),v0.forEach(t),wT=l(Cn),ep=a(Cn,"LI",{});var w0=s(ep);Wr=a(w0,"A",{href:!0,rel:!0});var M0=s(Wr);MT=i(M0,"Vectorization"),M0.forEach(t),w0.forEach(t),xT=l(Cn),tp=a(Cn,"LI",{});var x0=s(tp);Ur=a(x0,"A",{href:!0,rel:!0});var z0=s(Ur);zT=i(z0,"Parallelization"),z0.forEach(t),x0.forEach(t),Cn.forEach(t),FT=l(ae),Le=a(ae,"DIV",{class:!0});var Wt=s(Le);m(Rr.$$.fragment,Wt),qT=l(Wt),Eo=a(Wt,"P",{});var nd=s(Eo);$T=i(nd,"The "),op=a(nd,"CODE",{});var F0=s(op);BT=i(F0,"FlaxMBartPreTrainedModel"),F0.forEach(t),jT=i(nd," forward method, overrides the "),np=a(nd,"CODE",{});var q0=s(np);CT=i(q0,"__call__"),q0.forEach(t),ET=i(nd," special method."),nd.forEach(t),PT=l(Wt),m(vn.$$.fragment,Wt),ST=l(Wt),ap=a(Wt,"P",{});var $0=s(ap);AT=i($0,"Example:"),$0.forEach(t),OT=l(Wt),m(Xr.$$.fragment,Wt),Wt.forEach(t),IT=l(ae),$t=a(ae,"DIV",{class:!0});var ad=s($t);m(Vr.$$.fragment,ad),NT=l(ad),sp=a(ad,"P",{});var B0=s(sp);DT=i(B0,"Example:"),B0.forEach(t),LT=l(ad),m(Qr.$$.fragment,ad),ad.forEach(t),GT=l(ae),Bt=a(ae,"DIV",{class:!0});var sd=s(Bt);m(Hr.$$.fragment,sd),WT=l(sd),rp=a(sd,"P",{});var j0=s(rp);UT=i(j0,"Example:"),j0.forEach(t),RT=l(sd),m(Jr.$$.fragment,sd),sd.forEach(t),ae.forEach(t),this.h()},h(){c(k,"name","hf:doc:metadata"),c(k,"content",JSON.stringify(J0)),c(M,"id","mbart-and-mbart50"),c(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(M,"href","#mbart-and-mbart50"),c(v,"class","relative group"),c(ke,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ke,"rel","nofollow"),c(N,"id","overview-of-mbart"),c(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(N,"href","#overview-of-mbart"),c(J,"class","relative group"),c(K,"href","https://arxiv.org/abs/2001.08210"),c(K,"rel","nofollow"),c(we,"href","https://huggingface.co/valhalla"),c(we,"rel","nofollow"),c(Me,"href","https://github.com/pytorch/fairseq/tree/master/examples/mbart"),c(Me,"rel","nofollow"),c(B,"id","training-of-mbart"),c(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(B,"href","#training-of-mbart"),c(w,"class","relative group"),c(En,"href","/docs/transformers/pr_16816/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"),c(ei,"href","/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartTokenizer.as_target_tokenizer"),c(Po,"id","overview-of-mbart50"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#overview-of-mbart50"),c(Zt,"class","relative group"),c(In,"href","https://arxiv.org/abs/2008.00401"),c(In,"rel","nofollow"),c(So,"id","training-of-mbart50"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#training-of-mbart50"),c(Yt,"class","relative group"),c(si,"href","/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBart50Tokenizer"),c(Oo,"id","transformers.MBartConfig"),c(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oo,"href","#transformers.MBartConfig"),c(eo,"class","relative group"),c(di,"href","/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartModel"),c(Rn,"href","https://huggingface.co/facebook/mbart-large-cc25"),c(Rn,"rel","nofollow"),c(li,"href","/docs/transformers/pr_16816/en/main_classes/configuration#transformers.PretrainedConfig"),c(ci,"href","/docs/transformers/pr_16816/en/main_classes/configuration#transformers.PretrainedConfig"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Io,"id","transformers.MBartTokenizer"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.MBartTokenizer"),c(no,"class","relative group"),c(pi,"href","/docs/transformers/pr_16816/en/model_doc/roberta#transformers.RobertaTokenizer"),c(hi,"href","/docs/transformers/pr_16816/en/model_doc/xlnet#transformers.XLNetTokenizer"),c(Hn,"href","https://github.com/google/sentencepiece"),c(Hn,"rel","nofollow"),c(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Do,"id","transformers.MBartTokenizerFast"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.MBartTokenizerFast"),c(ao,"class","relative group"),c(ra,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(ra,"rel","nofollow"),c(ui,"href","/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Uo,"id","transformers.MBart50Tokenizer"),c(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Uo,"href","#transformers.MBart50Tokenizer"),c(ro,"class","relative group"),c(va,"href","https://github.com/google/sentencepiece"),c(va,"rel","nofollow"),c(mi,"href","/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ho,"id","transformers.MBart50TokenizerFast"),c(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ho,"href","#transformers.MBart50TokenizerFast"),c(io,"class","relative group"),c(Aa,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(Aa,"rel","nofollow"),c(fi,"href","/docs/transformers/pr_16816/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Zo,"id","transformers.MBartModel"),c(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zo,"href","#transformers.MBartModel"),c(co,"class","relative group"),c(_i,"href","/docs/transformers/pr_16816/en/main_classes/model#transformers.PreTrainedModel"),c(Ja,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ja,"rel","nofollow"),c(gi,"href","/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartModel"),c(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(en,"id","transformers.MBartForConditionalGeneration"),c(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(en,"href","#transformers.MBartForConditionalGeneration"),c(ho,"class","relative group"),c(bi,"href","/docs/transformers/pr_16816/en/main_classes/model#transformers.PreTrainedModel"),c(ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ns,"rel","nofollow"),c(ki,"href","/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartForConditionalGeneration"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(on,"id","transformers.MBartForQuestionAnswering"),c(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(on,"href","#transformers.MBartForQuestionAnswering"),c(mo,"class","relative group"),c(yi,"href","/docs/transformers/pr_16816/en/main_classes/model#transformers.PreTrainedModel"),c(ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ps,"rel","nofollow"),c(vi,"href","/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartForQuestionAnswering"),c(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(an,"id","transformers.MBartForSequenceClassification"),c(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(an,"href","#transformers.MBartForSequenceClassification"),c(go,"class","relative group"),c(Ti,"href","/docs/transformers/pr_16816/en/main_classes/model#transformers.PreTrainedModel"),c(ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ks,"rel","nofollow"),c(wi,"href","/docs/transformers/pr_16816/en/model_doc/mbart#transformers.MBartForSequenceClassification"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(rn,"id","transformers.MBartForCausalLM"),c(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(rn,"href","#transformers.MBartForCausalLM"),c(ko,"class","relative group"),c(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(dn,"id","transformers.TFMBartModel"),c(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(dn,"href","#transformers.TFMBartModel"),c(vo,"class","relative group"),c(Mi,"href","/docs/transformers/pr_16816/en/main_classes/model#transformers.TFPreTrainedModel"),c(Es,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Es,"rel","nofollow"),c(xi,"href","/docs/transformers/pr_16816/en/model_doc/mbart#transformers.TFMBartModel"),c(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(pn,"id","transformers.TFMBartForConditionalGeneration"),c(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(pn,"href","#transformers.TFMBartForConditionalGeneration"),c(wo,"class","relative group"),c(zi,"href","/docs/transformers/pr_16816/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ds,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ds,"rel","nofollow"),c(Fi,"href","/docs/transformers/pr_16816/en/model_doc/mbart#transformers.TFMBartForConditionalGeneration"),c(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(mn,"id","transformers.FlaxMBartModel"),c(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mn,"href","#transformers.FlaxMBartModel"),c(xo,"class","relative group"),c(qi,"href","/docs/transformers/pr_16816/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Qs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Qs,"rel","nofollow"),c(Hs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Hs,"rel","nofollow"),c(Js,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Js,"rel","nofollow"),c(Ks,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ks,"rel","nofollow"),c(Zs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Zs,"rel","nofollow"),c(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(_n,"id","transformers.FlaxMBartForConditionalGeneration"),c(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_n,"href","#transformers.FlaxMBartForConditionalGeneration"),c(Fo,"class","relative group"),c($i,"href","/docs/transformers/pr_16816/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(lr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(lr,"rel","nofollow"),c(cr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(cr,"rel","nofollow"),c(pr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(pr,"rel","nofollow"),c(hr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(hr,"rel","nofollow"),c(ur,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ur,"rel","nofollow"),c(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(bn,"id","transformers.FlaxMBartForSequenceClassification"),c(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bn,"href","#transformers.FlaxMBartForSequenceClassification"),c($o,"class","relative group"),c(Bi,"href","/docs/transformers/pr_16816/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(xr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(xr,"rel","nofollow"),c(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(zr,"rel","nofollow"),c(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Fr,"rel","nofollow"),c(qr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(qr,"rel","nofollow"),c($r,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c($r,"rel","nofollow"),c(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(yn,"id","transformers.FlaxMBartForQuestionAnswering"),c(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yn,"href","#transformers.FlaxMBartForQuestionAnswering"),c(jo,"class","relative group"),c(ji,"href","/docs/transformers/pr_16816/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Dr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Dr,"rel","nofollow"),c(Lr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Lr,"rel","nofollow"),c(Gr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Gr,"rel","nofollow"),c(Wr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Wr,"rel","nofollow"),c(Ur,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ur,"rel","nofollow"),c(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,p){e(document.head,k),h(o,z,p),h(o,v,p),e(v,M),e(M,x),f(T,x,null),e(v,y),e(v,q),e(q,rt),h(o,Ee,p),h(o,j,p),e(j,Re),e(Re,be),e(j,it),e(j,ke),e(ke,ye),e(j,dt),h(o,Ke,p),h(o,J,p),e(J,N),e(N,Xe),f(se,Xe,null),e(J,E),e(J,A),e(A,lt),h(o,pe,p),h(o,he,p),e(he,ct),e(he,K),e(K,pt),e(he,ht),h(o,D,p),h(o,Pe,p),e(Pe,ve),h(o,Ze,p),h(o,re,p),e(re,Te),e(re,we),e(we,ut),e(re,ie),e(re,Me),e(Me,xe),h(o,Ye,p),h(o,w,p),e(w,B),e(B,ze),f(Ve,ze,null),e(w,Ut),e(w,Z),e(Z,Rt),h(o,kt,p),h(o,V,p),e(V,de),e(V,le),e(le,Xt),e(V,Vt),e(V,ce),e(ce,Qt),e(V,Ht),e(V,Qe),e(Qe,Jt),e(V,Eu),e(V,rd),e(rd,Pu),e(V,Su),h(o,_p,p),h(o,yt,p),e(yt,Au),e(yt,En),e(En,id),e(id,Ou),e(En,Iu),e(yt,Nu),e(yt,ei),e(ei,Du),e(yt,Lu),h(o,gp,p),h(o,ti,p),e(ti,dd),e(dd,Gu),h(o,bp,p),f(Pn,o,p),h(o,kp,p),h(o,oi,p),e(oi,Sn),e(Sn,ld),e(ld,Wu),e(Sn,Uu),e(Sn,Kt),e(Kt,Ru),e(Kt,cd),e(cd,Xu),e(Kt,Vu),e(Kt,pd),e(pd,Qu),e(Kt,Hu),h(o,yp,p),f(An,o,p),h(o,vp,p),h(o,Zt,p),e(Zt,Po),e(Po,hd),f(On,hd,null),e(Zt,Ju),e(Zt,ud),e(ud,Ku),h(o,Tp,p),h(o,vt,p),e(vt,Zu),e(vt,In),e(In,Yu),e(vt,em),e(vt,md),e(md,tm),e(vt,om),h(o,wp,p),h(o,ni,p),e(ni,nm),h(o,Mp,p),h(o,ai,p),e(ai,fd),e(fd,am),h(o,xp,p),h(o,Yt,p),e(Yt,So),e(So,_d),f(Nn,_d,null),e(Yt,sm),e(Yt,gd),e(gd,rm),h(o,zp,p),h(o,et,p),e(et,im),e(et,bd),e(bd,dm),e(et,lm),e(et,kd),e(kd,cm),e(et,pm),e(et,yd),e(yd,hm),e(et,um),h(o,Fp,p),h(o,Ao,p),e(Ao,mm),e(Ao,si),e(si,fm),e(Ao,_m),h(o,qp,p),h(o,ri,p),e(ri,vd),e(vd,gm),h(o,$p,p),f(Dn,o,p),h(o,Bp,p),h(o,ii,p),e(ii,Ln),e(Ln,Td),e(Td,bm),e(Ln,km),e(Ln,Fe),e(Fe,ym),e(Fe,wd),e(wd,vm),e(Fe,Tm),e(Fe,Md),e(Md,wm),e(Fe,Mm),e(Fe,xd),e(xd,xm),e(Fe,zm),e(Fe,zd),e(zd,Fm),e(Fe,qm),e(Fe,Fd),e(Fd,$m),e(Fe,Bm),h(o,jp,p),f(Gn,o,p),h(o,Cp,p),h(o,eo,p),e(eo,Oo),e(Oo,qd),f(Wn,qd,null),e(eo,jm),e(eo,$d),e($d,Cm),h(o,Ep,p),h(o,qe,p),f(Un,qe,null),e(qe,Em),e(qe,to),e(to,Pm),e(to,di),e(di,Sm),e(to,Am),e(to,Rn),e(Rn,Om),e(to,Im),e(qe,Nm),e(qe,oo),e(oo,Dm),e(oo,li),e(li,Lm),e(oo,Gm),e(oo,ci),e(ci,Wm),e(oo,Um),e(qe,Rm),e(qe,Bd),e(Bd,Xm),e(qe,Vm),f(Xn,qe,null),h(o,Pp,p),h(o,no,p),e(no,Io),e(Io,jd),f(Vn,jd,null),e(no,Qm),e(no,Cd),e(Cd,Hm),h(o,Sp,p),h(o,G,p),f(Qn,G,null),e(G,Jm),e(G,Ed),e(Ed,Km),e(G,Zm),e(G,mt),e(mt,Ym),e(mt,pi),e(pi,ef),e(mt,tf),e(mt,hi),e(hi,of),e(mt,nf),e(mt,Hn),e(Hn,af),e(mt,sf),e(G,rf),e(G,Jn),e(Jn,df),e(Jn,Pd),e(Pd,lf),e(Jn,cf),e(G,pf),e(G,Sd),e(Sd,hf),e(G,uf),f(Kn,G,null),e(G,mf),e(G,No),f(Zn,No,null),e(No,ff),e(No,Ad),e(Ad,_f),e(G,gf),e(G,tt),f(Yn,tt,null),e(tt,bf),e(tt,ea),e(ea,kf),e(ea,Od),e(Od,yf),e(ea,vf),e(tt,Tf),e(tt,ta),e(ta,oa),e(oa,Id),e(Id,wf),e(oa,Mf),e(oa,Nd),e(Nd,xf),e(ta,zf),e(ta,na),e(na,Dd),e(Dd,Ff),e(na,qf),e(na,Ld),e(Ld,$f),e(tt,Bf),e(tt,Gd),e(Gd,jf),h(o,Ap,p),h(o,ao,p),e(ao,Do),e(Do,Wd),f(aa,Wd,null),e(ao,Cf),e(ao,Ud),e(Ud,Ef),h(o,Op,p),h(o,P,p),f(sa,P,null),e(P,Pf),e(P,so),e(so,Sf),e(so,Rd),e(Rd,Af),e(so,Of),e(so,ra),e(ra,If),e(so,Nf),e(P,Df),e(P,ia),e(ia,Lf),e(ia,ui),e(ui,Gf),e(ia,Wf),e(P,Uf),e(P,da),e(da,Rf),e(da,Xd),e(Xd,Xf),e(da,Vf),e(P,Qf),e(P,Vd),e(Vd,Hf),e(P,Jf),f(la,P,null),e(P,Kf),e(P,Se),f(ca,Se,null),e(Se,Zf),e(Se,Qd),e(Qd,Yf),e(Se,e_),e(Se,pa),e(pa,t_),e(pa,Hd),e(Hd,o_),e(pa,n_),e(Se,a_),e(Se,ha),e(ha,ua),e(ua,Jd),e(Jd,s_),e(ua,r_),e(ua,Kd),e(Kd,i_),e(ha,d_),e(ha,ma),e(ma,Zd),e(Zd,l_),e(ma,c_),e(ma,Yd),e(Yd,p_),e(Se,h_),e(Se,el),e(el,u_),e(P,m_),e(P,Lo),f(fa,Lo,null),e(Lo,f_),e(Lo,tl),e(tl,__),e(P,g_),e(P,Go),f(_a,Go,null),e(Go,b_),e(Go,ol),e(ol,k_),e(P,y_),e(P,Wo),f(ga,Wo,null),e(Wo,v_),e(Wo,nl),e(nl,T_),h(o,Ip,p),h(o,ro,p),e(ro,Uo),e(Uo,al),f(ba,al,null),e(ro,w_),e(ro,sl),e(sl,M_),h(o,Np,p),h(o,S,p),f(ka,S,null),e(S,x_),e(S,ya),e(ya,z_),e(ya,va),e(va,F_),e(ya,q_),e(S,$_),e(S,Ta),e(Ta,B_),e(Ta,mi),e(mi,j_),e(Ta,C_),e(S,E_),e(S,rl),e(rl,P_),e(S,S_),f(wa,S,null),e(S,A_),e(S,ot),f(Ma,ot,null),e(ot,O_),e(ot,xa),e(xa,I_),e(xa,il),e(il,N_),e(xa,D_),e(ot,L_),e(ot,za),e(za,Fa),e(Fa,dl),e(dl,G_),e(Fa,W_),e(Fa,ll),e(ll,U_),e(za,R_),e(za,qa),e(qa,cl),e(cl,X_),e(qa,V_),e(qa,pl),e(pl,Q_),e(ot,H_),e(ot,hl),e(hl,J_),e(S,K_),e(S,Ro),f($a,Ro,null),e(Ro,Z_),e(Ro,ul),e(ul,Y_),e(S,eg),e(S,Xo),f(Ba,Xo,null),e(Xo,tg),e(Xo,ja),e(ja,og),e(ja,ml),e(ml,ng),e(ja,ag),e(S,sg),e(S,Vo),f(Ca,Vo,null),e(Vo,rg),e(Vo,fl),e(fl,ig),e(S,dg),e(S,Qo),f(Ea,Qo,null),e(Qo,lg),e(Qo,_l),e(_l,cg),h(o,Dp,p),h(o,io,p),e(io,Ho),e(Ho,gl),f(Pa,gl,null),e(io,pg),e(io,bl),e(bl,hg),h(o,Lp,p),h(o,W,p),f(Sa,W,null),e(W,ug),e(W,lo),e(lo,mg),e(lo,kl),e(kl,fg),e(lo,_g),e(lo,Aa),e(Aa,gg),e(lo,bg),e(W,kg),e(W,Oa),e(Oa,yg),e(Oa,fi),e(fi,vg),e(Oa,Tg),e(W,wg),e(W,yl),e(yl,Mg),e(W,xg),f(Ia,W,null),e(W,zg),e(W,Ae),f(Na,Ae,null),e(Ae,Fg),e(Ae,vl),e(vl,qg),e(Ae,$g),e(Ae,Da),e(Da,Bg),e(Da,Tl),e(Tl,jg),e(Da,Cg),e(Ae,Eg),e(Ae,La),e(La,Ga),e(Ga,wl),e(wl,Pg),e(Ga,Sg),e(Ga,Ml),e(Ml,Ag),e(La,Og),e(La,Wa),e(Wa,xl),e(xl,Ig),e(Wa,Ng),e(Wa,zl),e(zl,Dg),e(Ae,Lg),e(Ae,Fl),e(Fl,Gg),e(W,Wg),e(W,Jo),f(Ua,Jo,null),e(Jo,Ug),e(Jo,ql),e(ql,Rg),e(W,Xg),e(W,Ko),f(Ra,Ko,null),e(Ko,Vg),e(Ko,$l),e($l,Qg),h(o,Gp,p),h(o,co,p),e(co,Zo),e(Zo,Bl),f(Xa,Bl,null),e(co,Hg),e(co,jl),e(jl,Jg),h(o,Wp,p),h(o,He,p),f(Va,He,null),e(He,Kg),e(He,Qa),e(Qa,Zg),e(Qa,_i),e(_i,Yg),e(Qa,eb),e(He,tb),e(He,Ha),e(Ha,ob),e(Ha,Ja),e(Ja,nb),e(Ha,ab),e(He,sb),e(He,Oe),f(Ka,Oe,null),e(Oe,rb),e(Oe,po),e(po,ib),e(po,gi),e(gi,db),e(po,lb),e(po,Cl),e(Cl,cb),e(po,pb),e(Oe,hb),f(Yo,Oe,null),e(Oe,ub),e(Oe,El),e(El,mb),e(Oe,fb),f(Za,Oe,null),h(o,Up,p),h(o,ho,p),e(ho,en),e(en,Pl),f(Ya,Pl,null),e(ho,_b),e(ho,Sl),e(Sl,gb),h(o,Rp,p),h(o,Je,p),f(es,Je,null),e(Je,bb),e(Je,ts),e(ts,kb),e(ts,bi),e(bi,yb),e(ts,vb),e(Je,Tb),e(Je,os),e(os,wb),e(os,ns),e(ns,Mb),e(os,xb),e(Je,zb),e(Je,Y),f(as,Y,null),e(Y,Fb),e(Y,uo),e(uo,qb),e(uo,ki),e(ki,$b),e(uo,Bb),e(uo,Al),e(Al,jb),e(uo,Cb),e(Y,Eb),f(tn,Y,null),e(Y,Pb),e(Y,Ol),e(Ol,Sb),e(Y,Ab),f(ss,Y,null),e(Y,Ob),e(Y,Il),e(Il,Ib),e(Y,Nb),f(rs,Y,null),h(o,Xp,p),h(o,mo,p),e(mo,on),e(on,Nl),f(is,Nl,null),e(mo,Db),e(mo,Dl),e(Dl,Lb),h(o,Vp,p),h(o,$e,p),f(ds,$e,null),e($e,Gb),e($e,fo),e(fo,Wb),e(fo,Ll),e(Ll,Ub),e(fo,Rb),e(fo,Gl),e(Gl,Xb),e(fo,Vb),e($e,Qb),e($e,ls),e(ls,Hb),e(ls,yi),e(yi,Jb),e(ls,Kb),e($e,Zb),e($e,cs),e(cs,Yb),e(cs,ps),e(ps,ek),e(cs,tk),e($e,ok),e($e,ue),f(hs,ue,null),e(ue,nk),e(ue,_o),e(_o,ak),e(_o,vi),e(vi,sk),e(_o,rk),e(_o,Wl),e(Wl,ik),e(_o,dk),e(ue,lk),f(nn,ue,null),e(ue,ck),e(ue,Ul),e(Ul,pk),e(ue,hk),f(us,ue,null),e(ue,uk),f(ms,ue,null),h(o,Qp,p),h(o,go,p),e(go,an),e(an,Rl),f(fs,Rl,null),e(go,mk),e(go,Xl),e(Xl,fk),h(o,Hp,p),h(o,Be,p),f(_s,Be,null),e(Be,_k),e(Be,Vl),e(Vl,gk),e(Be,bk),e(Be,gs),e(gs,kk),e(gs,Ti),e(Ti,yk),e(gs,vk),e(Be,Tk),e(Be,bs),e(bs,wk),e(bs,ks),e(ks,Mk),e(bs,xk),e(Be,zk),e(Be,L),f(ys,L,null),e(L,Fk),e(L,bo),e(bo,qk),e(bo,wi),e(wi,$k),e(bo,Bk),e(bo,Ql),e(Ql,jk),e(bo,Ck),e(L,Ek),f(sn,L,null),e(L,Pk),e(L,Hl),e(Hl,Sk),e(L,Ak),f(vs,L,null),e(L,Ok),f(Ts,L,null),e(L,Ik),e(L,Jl),e(Jl,Nk),e(L,Dk),f(ws,L,null),e(L,Lk),f(Ms,L,null),h(o,Jp,p),h(o,ko,p),e(ko,rn),e(rn,Kl),f(xs,Kl,null),e(ko,Gk),e(ko,Zl),e(Zl,Wk),h(o,Kp,p),h(o,yo,p),f(zs,yo,null),e(yo,Uk),e(yo,Tt),f(Fs,Tt,null),e(Tt,Rk),e(Tt,Yl),e(Yl,Xk),e(Tt,Vk),f(qs,Tt,null),h(o,Zp,p),h(o,vo,p),e(vo,dn),e(dn,ec),f($s,ec,null),e(vo,Qk),e(vo,tc),e(tc,Hk),h(o,Yp,p),h(o,je,p),f(Bs,je,null),e(je,Jk),e(je,js),e(js,Kk),e(js,Mi),e(Mi,Zk),e(js,Yk),e(je,ey),e(je,Cs),e(Cs,ty),e(Cs,Es),e(Es,oy),e(Cs,ny),e(je,ay),f(ln,je,null),e(je,sy),e(je,Ie),f(Ps,Ie,null),e(Ie,ry),e(Ie,To),e(To,iy),e(To,xi),e(xi,dy),e(To,ly),e(To,oc),e(oc,cy),e(To,py),e(Ie,hy),f(cn,Ie,null),e(Ie,uy),e(Ie,nc),e(nc,my),e(Ie,fy),f(Ss,Ie,null),h(o,eh,p),h(o,wo,p),e(wo,pn),e(pn,ac),f(As,ac,null),e(wo,_y),e(wo,sc),e(sc,gy),h(o,th,p),h(o,Ce,p),f(Os,Ce,null),e(Ce,by),e(Ce,Is),e(Is,ky),e(Is,zi),e(zi,yy),e(Is,vy),e(Ce,Ty),e(Ce,Ns),e(Ns,wy),e(Ns,Ds),e(Ds,My),e(Ns,xy),e(Ce,zy),f(hn,Ce,null),e(Ce,Fy),e(Ce,ee),f(Ls,ee,null),e(ee,qy),e(ee,Mo),e(Mo,$y),e(Mo,Fi),e(Fi,By),e(Mo,jy),e(Mo,rc),e(rc,Cy),e(Mo,Ey),e(ee,Py),f(un,ee,null),e(ee,Sy),e(ee,ic),e(ic,Ay),e(ee,Oy),f(Gs,ee,null),e(ee,Iy),e(ee,dc),e(dc,Ny),e(ee,Dy),f(Ws,ee,null),h(o,oh,p),h(o,xo,p),e(xo,mn),e(mn,lc),f(Us,lc,null),e(xo,Ly),e(xo,cc),e(cc,Gy),h(o,nh,p),h(o,U,p),f(Rs,U,null),e(U,Wy),e(U,Xs),e(Xs,Uy),e(Xs,qi),e(qi,Ry),e(Xs,Xy),e(U,Vy),e(U,Vs),e(Vs,Qy),e(Vs,Qs),e(Qs,Hy),e(Vs,Jy),e(U,Ky),e(U,pc),e(pc,Zy),e(U,Yy),e(U,ft),e(ft,hc),e(hc,Hs),e(Hs,ev),e(ft,tv),e(ft,uc),e(uc,Js),e(Js,ov),e(ft,nv),e(ft,mc),e(mc,Ks),e(Ks,av),e(ft,sv),e(ft,fc),e(fc,Zs),e(Zs,rv),e(U,iv),e(U,Ne),f(Ys,Ne,null),e(Ne,dv),e(Ne,zo),e(zo,lv),e(zo,_c),e(_c,cv),e(zo,pv),e(zo,gc),e(gc,hv),e(zo,uv),e(Ne,mv),f(fn,Ne,null),e(Ne,fv),e(Ne,bc),e(bc,_v),e(Ne,gv),f(er,Ne,null),e(U,bv),e(U,wt),f(tr,wt,null),e(wt,kv),e(wt,kc),e(kc,yv),e(wt,vv),f(or,wt,null),e(U,Tv),e(U,Mt),f(nr,Mt,null),e(Mt,wv),e(Mt,yc),e(yc,Mv),e(Mt,xv),f(ar,Mt,null),h(o,ah,p),h(o,Fo,p),e(Fo,_n),e(_n,vc),f(sr,vc,null),e(Fo,zv),e(Fo,Tc),e(Tc,Fv),h(o,sh,p),h(o,R,p),f(rr,R,null),e(R,qv),e(R,ir),e(ir,$v),e(ir,$i),e($i,Bv),e(ir,jv),e(R,Cv),e(R,dr),e(dr,Ev),e(dr,lr),e(lr,Pv),e(dr,Sv),e(R,Av),e(R,wc),e(wc,Ov),e(R,Iv),e(R,_t),e(_t,Mc),e(Mc,cr),e(cr,Nv),e(_t,Dv),e(_t,xc),e(xc,pr),e(pr,Lv),e(_t,Gv),e(_t,zc),e(zc,hr),e(hr,Wv),e(_t,Uv),e(_t,Fc),e(Fc,ur),e(ur,Rv),e(R,Xv),e(R,te),f(mr,te,null),e(te,Vv),e(te,qo),e(qo,Qv),e(qo,qc),e(qc,Hv),e(qo,Jv),e(qo,$c),e($c,Kv),e(qo,Zv),e(te,Yv),f(gn,te,null),e(te,e1),e(te,Bc),e(Bc,t1),e(te,o1),f(fr,te,null),e(te,n1),e(te,jc),e(jc,a1),e(te,s1),f(_r,te,null),e(R,r1),e(R,xt),f(gr,xt,null),e(xt,i1),e(xt,Cc),e(Cc,d1),e(xt,l1),f(br,xt,null),e(R,c1),e(R,zt),f(kr,zt,null),e(zt,p1),e(zt,Ec),e(Ec,h1),e(zt,u1),f(yr,zt,null),h(o,rh,p),h(o,$o,p),e($o,bn),e(bn,Pc),f(vr,Pc,null),e($o,m1),e($o,Sc),e(Sc,f1),h(o,ih,p),h(o,O,p),f(Tr,O,null),e(O,_1),e(O,Ac),e(Ac,g1),e(O,b1),e(O,wr),e(wr,k1),e(wr,Bi),e(Bi,y1),e(wr,v1),e(O,T1),e(O,Mr),e(Mr,w1),e(Mr,xr),e(xr,M1),e(Mr,x1),e(O,z1),e(O,Oc),e(Oc,F1),e(O,q1),e(O,gt),e(gt,Ic),e(Ic,zr),e(zr,$1),e(gt,B1),e(gt,Nc),e(Nc,Fr),e(Fr,j1),e(gt,C1),e(gt,Dc),e(Dc,qr),e(qr,E1),e(gt,P1),e(gt,Lc),e(Lc,$r),e($r,S1),e(O,A1),e(O,De),f(Br,De,null),e(De,O1),e(De,Bo),e(Bo,I1),e(Bo,Gc),e(Gc,N1),e(Bo,D1),e(Bo,Wc),e(Wc,L1),e(Bo,G1),e(De,W1),f(kn,De,null),e(De,U1),e(De,Uc),e(Uc,R1),e(De,X1),f(jr,De,null),e(O,V1),e(O,Ft),f(Cr,Ft,null),e(Ft,Q1),e(Ft,Rc),e(Rc,H1),e(Ft,J1),f(Er,Ft,null),e(O,K1),e(O,qt),f(Pr,qt,null),e(qt,Z1),e(qt,Xc),e(Xc,Y1),e(qt,eT),f(Sr,qt,null),h(o,dh,p),h(o,jo,p),e(jo,yn),e(yn,Vc),f(Ar,Vc,null),e(jo,tT),e(jo,Qc),e(Qc,oT),h(o,lh,p),h(o,I,p),f(Or,I,null),e(I,nT),e(I,Co),e(Co,aT),e(Co,Hc),e(Hc,sT),e(Co,rT),e(Co,Jc),e(Jc,iT),e(Co,dT),e(I,lT),e(I,Ir),e(Ir,cT),e(Ir,ji),e(ji,pT),e(Ir,hT),e(I,uT),e(I,Nr),e(Nr,mT),e(Nr,Dr),e(Dr,fT),e(Nr,_T),e(I,gT),e(I,Kc),e(Kc,bT),e(I,kT),e(I,bt),e(bt,Zc),e(Zc,Lr),e(Lr,yT),e(bt,vT),e(bt,Yc),e(Yc,Gr),e(Gr,TT),e(bt,wT),e(bt,ep),e(ep,Wr),e(Wr,MT),e(bt,xT),e(bt,tp),e(tp,Ur),e(Ur,zT),e(I,FT),e(I,Le),f(Rr,Le,null),e(Le,qT),e(Le,Eo),e(Eo,$T),e(Eo,op),e(op,BT),e(Eo,jT),e(Eo,np),e(np,CT),e(Eo,ET),e(Le,PT),f(vn,Le,null),e(Le,ST),e(Le,ap),e(ap,AT),e(Le,OT),f(Xr,Le,null),e(I,IT),e(I,$t),f(Vr,$t,null),e($t,NT),e($t,sp),e(sp,DT),e($t,LT),f(Qr,$t,null),e(I,GT),e(I,Bt),f(Hr,Bt,null),e(Bt,WT),e(Bt,rp),e(rp,UT),e(Bt,RT),f(Jr,Bt,null),ch=!0},p(o,[p]){const Kr={};p&2&&(Kr.$$scope={dirty:p,ctx:o}),Yo.$set(Kr);const ip={};p&2&&(ip.$$scope={dirty:p,ctx:o}),tn.$set(ip);const dp={};p&2&&(dp.$$scope={dirty:p,ctx:o}),nn.$set(dp);const lp={};p&2&&(lp.$$scope={dirty:p,ctx:o}),sn.$set(lp);const Tn={};p&2&&(Tn.$$scope={dirty:p,ctx:o}),ln.$set(Tn);const cp={};p&2&&(cp.$$scope={dirty:p,ctx:o}),cn.$set(cp);const pp={};p&2&&(pp.$$scope={dirty:p,ctx:o}),hn.$set(pp);const Zr={};p&2&&(Zr.$$scope={dirty:p,ctx:o}),un.$set(Zr);const hp={};p&2&&(hp.$$scope={dirty:p,ctx:o}),fn.$set(hp);const up={};p&2&&(up.$$scope={dirty:p,ctx:o}),gn.$set(up);const mp={};p&2&&(mp.$$scope={dirty:p,ctx:o}),kn.$set(mp);const Yr={};p&2&&(Yr.$$scope={dirty:p,ctx:o}),vn.$set(Yr)},i(o){ch||(_(T.$$.fragment,o),_(se.$$.fragment,o),_(Ve.$$.fragment,o),_(Pn.$$.fragment,o),_(An.$$.fragment,o),_(On.$$.fragment,o),_(Nn.$$.fragment,o),_(Dn.$$.fragment,o),_(Gn.$$.fragment,o),_(Wn.$$.fragment,o),_(Un.$$.fragment,o),_(Xn.$$.fragment,o),_(Vn.$$.fragment,o),_(Qn.$$.fragment,o),_(Kn.$$.fragment,o),_(Zn.$$.fragment,o),_(Yn.$$.fragment,o),_(aa.$$.fragment,o),_(sa.$$.fragment,o),_(la.$$.fragment,o),_(ca.$$.fragment,o),_(fa.$$.fragment,o),_(_a.$$.fragment,o),_(ga.$$.fragment,o),_(ba.$$.fragment,o),_(ka.$$.fragment,o),_(wa.$$.fragment,o),_(Ma.$$.fragment,o),_($a.$$.fragment,o),_(Ba.$$.fragment,o),_(Ca.$$.fragment,o),_(Ea.$$.fragment,o),_(Pa.$$.fragment,o),_(Sa.$$.fragment,o),_(Ia.$$.fragment,o),_(Na.$$.fragment,o),_(Ua.$$.fragment,o),_(Ra.$$.fragment,o),_(Xa.$$.fragment,o),_(Va.$$.fragment,o),_(Ka.$$.fragment,o),_(Yo.$$.fragment,o),_(Za.$$.fragment,o),_(Ya.$$.fragment,o),_(es.$$.fragment,o),_(as.$$.fragment,o),_(tn.$$.fragment,o),_(ss.$$.fragment,o),_(rs.$$.fragment,o),_(is.$$.fragment,o),_(ds.$$.fragment,o),_(hs.$$.fragment,o),_(nn.$$.fragment,o),_(us.$$.fragment,o),_(ms.$$.fragment,o),_(fs.$$.fragment,o),_(_s.$$.fragment,o),_(ys.$$.fragment,o),_(sn.$$.fragment,o),_(vs.$$.fragment,o),_(Ts.$$.fragment,o),_(ws.$$.fragment,o),_(Ms.$$.fragment,o),_(xs.$$.fragment,o),_(zs.$$.fragment,o),_(Fs.$$.fragment,o),_(qs.$$.fragment,o),_($s.$$.fragment,o),_(Bs.$$.fragment,o),_(ln.$$.fragment,o),_(Ps.$$.fragment,o),_(cn.$$.fragment,o),_(Ss.$$.fragment,o),_(As.$$.fragment,o),_(Os.$$.fragment,o),_(hn.$$.fragment,o),_(Ls.$$.fragment,o),_(un.$$.fragment,o),_(Gs.$$.fragment,o),_(Ws.$$.fragment,o),_(Us.$$.fragment,o),_(Rs.$$.fragment,o),_(Ys.$$.fragment,o),_(fn.$$.fragment,o),_(er.$$.fragment,o),_(tr.$$.fragment,o),_(or.$$.fragment,o),_(nr.$$.fragment,o),_(ar.$$.fragment,o),_(sr.$$.fragment,o),_(rr.$$.fragment,o),_(mr.$$.fragment,o),_(gn.$$.fragment,o),_(fr.$$.fragment,o),_(_r.$$.fragment,o),_(gr.$$.fragment,o),_(br.$$.fragment,o),_(kr.$$.fragment,o),_(yr.$$.fragment,o),_(vr.$$.fragment,o),_(Tr.$$.fragment,o),_(Br.$$.fragment,o),_(kn.$$.fragment,o),_(jr.$$.fragment,o),_(Cr.$$.fragment,o),_(Er.$$.fragment,o),_(Pr.$$.fragment,o),_(Sr.$$.fragment,o),_(Ar.$$.fragment,o),_(Or.$$.fragment,o),_(Rr.$$.fragment,o),_(vn.$$.fragment,o),_(Xr.$$.fragment,o),_(Vr.$$.fragment,o),_(Qr.$$.fragment,o),_(Hr.$$.fragment,o),_(Jr.$$.fragment,o),ch=!0)},o(o){g(T.$$.fragment,o),g(se.$$.fragment,o),g(Ve.$$.fragment,o),g(Pn.$$.fragment,o),g(An.$$.fragment,o),g(On.$$.fragment,o),g(Nn.$$.fragment,o),g(Dn.$$.fragment,o),g(Gn.$$.fragment,o),g(Wn.$$.fragment,o),g(Un.$$.fragment,o),g(Xn.$$.fragment,o),g(Vn.$$.fragment,o),g(Qn.$$.fragment,o),g(Kn.$$.fragment,o),g(Zn.$$.fragment,o),g(Yn.$$.fragment,o),g(aa.$$.fragment,o),g(sa.$$.fragment,o),g(la.$$.fragment,o),g(ca.$$.fragment,o),g(fa.$$.fragment,o),g(_a.$$.fragment,o),g(ga.$$.fragment,o),g(ba.$$.fragment,o),g(ka.$$.fragment,o),g(wa.$$.fragment,o),g(Ma.$$.fragment,o),g($a.$$.fragment,o),g(Ba.$$.fragment,o),g(Ca.$$.fragment,o),g(Ea.$$.fragment,o),g(Pa.$$.fragment,o),g(Sa.$$.fragment,o),g(Ia.$$.fragment,o),g(Na.$$.fragment,o),g(Ua.$$.fragment,o),g(Ra.$$.fragment,o),g(Xa.$$.fragment,o),g(Va.$$.fragment,o),g(Ka.$$.fragment,o),g(Yo.$$.fragment,o),g(Za.$$.fragment,o),g(Ya.$$.fragment,o),g(es.$$.fragment,o),g(as.$$.fragment,o),g(tn.$$.fragment,o),g(ss.$$.fragment,o),g(rs.$$.fragment,o),g(is.$$.fragment,o),g(ds.$$.fragment,o),g(hs.$$.fragment,o),g(nn.$$.fragment,o),g(us.$$.fragment,o),g(ms.$$.fragment,o),g(fs.$$.fragment,o),g(_s.$$.fragment,o),g(ys.$$.fragment,o),g(sn.$$.fragment,o),g(vs.$$.fragment,o),g(Ts.$$.fragment,o),g(ws.$$.fragment,o),g(Ms.$$.fragment,o),g(xs.$$.fragment,o),g(zs.$$.fragment,o),g(Fs.$$.fragment,o),g(qs.$$.fragment,o),g($s.$$.fragment,o),g(Bs.$$.fragment,o),g(ln.$$.fragment,o),g(Ps.$$.fragment,o),g(cn.$$.fragment,o),g(Ss.$$.fragment,o),g(As.$$.fragment,o),g(Os.$$.fragment,o),g(hn.$$.fragment,o),g(Ls.$$.fragment,o),g(un.$$.fragment,o),g(Gs.$$.fragment,o),g(Ws.$$.fragment,o),g(Us.$$.fragment,o),g(Rs.$$.fragment,o),g(Ys.$$.fragment,o),g(fn.$$.fragment,o),g(er.$$.fragment,o),g(tr.$$.fragment,o),g(or.$$.fragment,o),g(nr.$$.fragment,o),g(ar.$$.fragment,o),g(sr.$$.fragment,o),g(rr.$$.fragment,o),g(mr.$$.fragment,o),g(gn.$$.fragment,o),g(fr.$$.fragment,o),g(_r.$$.fragment,o),g(gr.$$.fragment,o),g(br.$$.fragment,o),g(kr.$$.fragment,o),g(yr.$$.fragment,o),g(vr.$$.fragment,o),g(Tr.$$.fragment,o),g(Br.$$.fragment,o),g(kn.$$.fragment,o),g(jr.$$.fragment,o),g(Cr.$$.fragment,o),g(Er.$$.fragment,o),g(Pr.$$.fragment,o),g(Sr.$$.fragment,o),g(Ar.$$.fragment,o),g(Or.$$.fragment,o),g(Rr.$$.fragment,o),g(vn.$$.fragment,o),g(Xr.$$.fragment,o),g(Vr.$$.fragment,o),g(Qr.$$.fragment,o),g(Hr.$$.fragment,o),g(Jr.$$.fragment,o),ch=!1},d(o){t(k),o&&t(z),o&&t(v),b(T),o&&t(Ee),o&&t(j),o&&t(Ke),o&&t(J),b(se),o&&t(pe),o&&t(he),o&&t(D),o&&t(Pe),o&&t(Ze),o&&t(re),o&&t(Ye),o&&t(w),b(Ve),o&&t(kt),o&&t(V),o&&t(_p),o&&t(yt),o&&t(gp),o&&t(ti),o&&t(bp),b(Pn,o),o&&t(kp),o&&t(oi),o&&t(yp),b(An,o),o&&t(vp),o&&t(Zt),b(On),o&&t(Tp),o&&t(vt),o&&t(wp),o&&t(ni),o&&t(Mp),o&&t(ai),o&&t(xp),o&&t(Yt),b(Nn),o&&t(zp),o&&t(et),o&&t(Fp),o&&t(Ao),o&&t(qp),o&&t(ri),o&&t($p),b(Dn,o),o&&t(Bp),o&&t(ii),o&&t(jp),b(Gn,o),o&&t(Cp),o&&t(eo),b(Wn),o&&t(Ep),o&&t(qe),b(Un),b(Xn),o&&t(Pp),o&&t(no),b(Vn),o&&t(Sp),o&&t(G),b(Qn),b(Kn),b(Zn),b(Yn),o&&t(Ap),o&&t(ao),b(aa),o&&t(Op),o&&t(P),b(sa),b(la),b(ca),b(fa),b(_a),b(ga),o&&t(Ip),o&&t(ro),b(ba),o&&t(Np),o&&t(S),b(ka),b(wa),b(Ma),b($a),b(Ba),b(Ca),b(Ea),o&&t(Dp),o&&t(io),b(Pa),o&&t(Lp),o&&t(W),b(Sa),b(Ia),b(Na),b(Ua),b(Ra),o&&t(Gp),o&&t(co),b(Xa),o&&t(Wp),o&&t(He),b(Va),b(Ka),b(Yo),b(Za),o&&t(Up),o&&t(ho),b(Ya),o&&t(Rp),o&&t(Je),b(es),b(as),b(tn),b(ss),b(rs),o&&t(Xp),o&&t(mo),b(is),o&&t(Vp),o&&t($e),b(ds),b(hs),b(nn),b(us),b(ms),o&&t(Qp),o&&t(go),b(fs),o&&t(Hp),o&&t(Be),b(_s),b(ys),b(sn),b(vs),b(Ts),b(ws),b(Ms),o&&t(Jp),o&&t(ko),b(xs),o&&t(Kp),o&&t(yo),b(zs),b(Fs),b(qs),o&&t(Zp),o&&t(vo),b($s),o&&t(Yp),o&&t(je),b(Bs),b(ln),b(Ps),b(cn),b(Ss),o&&t(eh),o&&t(wo),b(As),o&&t(th),o&&t(Ce),b(Os),b(hn),b(Ls),b(un),b(Gs),b(Ws),o&&t(oh),o&&t(xo),b(Us),o&&t(nh),o&&t(U),b(Rs),b(Ys),b(fn),b(er),b(tr),b(or),b(nr),b(ar),o&&t(ah),o&&t(Fo),b(sr),o&&t(sh),o&&t(R),b(rr),b(mr),b(gn),b(fr),b(_r),b(gr),b(br),b(kr),b(yr),o&&t(rh),o&&t($o),b(vr),o&&t(ih),o&&t(O),b(Tr),b(Br),b(kn),b(jr),b(Cr),b(Er),b(Pr),b(Sr),o&&t(dh),o&&t(jo),b(Ar),o&&t(lh),o&&t(I),b(Or),b(Rr),b(vn),b(Xr),b(Vr),b(Qr),b(Hr),b(Jr)}}}const J0={local:"mbart-and-mbart50",sections:[{local:"overview-of-mbart",sections:[{local:"training-of-mbart",title:"Training of MBart"}],title:"Overview of MBart"},{local:"overview-of-mbart50",sections:[{local:"training-of-mbart50",title:"Training of MBart-50"}],title:"Overview of MBart-50"},{local:"transformers.MBartConfig",title:"MBartConfig"},{local:"transformers.MBartTokenizer",title:"MBartTokenizer"},{local:"transformers.MBartTokenizerFast",title:"MBartTokenizerFast"},{local:"transformers.MBart50Tokenizer",title:"MBart50Tokenizer"},{local:"transformers.MBart50TokenizerFast",title:"MBart50TokenizerFast"},{local:"transformers.MBartModel",title:"MBartModel"},{local:"transformers.MBartForConditionalGeneration",title:"MBartForConditionalGeneration"},{local:"transformers.MBartForQuestionAnswering",title:"MBartForQuestionAnswering"},{local:"transformers.MBartForSequenceClassification",title:"MBartForSequenceClassification"},{local:"transformers.MBartForCausalLM",title:"MBartForCausalLM"},{local:"transformers.TFMBartModel",title:"TFMBartModel"},{local:"transformers.TFMBartForConditionalGeneration",title:"TFMBartForConditionalGeneration"},{local:"transformers.FlaxMBartModel",title:"FlaxMBartModel"},{local:"transformers.FlaxMBartForConditionalGeneration",title:"FlaxMBartForConditionalGeneration"},{local:"transformers.FlaxMBartForSequenceClassification",title:"FlaxMBartForSequenceClassification"},{local:"transformers.FlaxMBartForQuestionAnswering",title:"FlaxMBartForQuestionAnswering"}],title:"MBart and MBart-50"};function K0(C){return A0(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class nz extends C0{constructor(k){super();E0(this,k,K0,H0,P0,{})}}export{nz as default,J0 as metadata};
