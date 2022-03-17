import{S as Px,i as Cx,s as Sx,e as n,k as d,w as m,t as r,M as Ax,c as a,d as t,m as l,a as s,x as f,h as i,b as c,F as e,g as h,y as _,q as g,o as k,B as b}from"../../chunks/vendor-6b77c823.js";import{T as at}from"../../chunks/Tip-39098574.js";import{D as q}from"../../chunks/Docstring-abef54e3.js";import{C as F}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as U}from"../../chunks/IconCopyLink-7a11ce68.js";function Ix(E){let u,z,v,M,x;return{c(){u=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,x)},d(T){T&&t(u)}}}function Nx(E){let u,z,v,M,x;return{c(){u=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,x)},d(T){T&&t(u)}}}function Ox(E){let u,z,v,M,x;return{c(){u=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,x)},d(T){T&&t(u)}}}function Dx(E){let u,z,v,M,x;return{c(){u=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,x)},d(T){T&&t(u)}}}function Lx(E){let u,z,v,M,x,T,y,B,st,je,j,Ue,_e,rt,ge,ke,it,Ke,Q,O,Xe,ae,P,A,dt,ce,pe,lt,J,ct,pt,D,Ee,be,Ze,se,ve,ye,ht,re,Te,Me,Ye;return{c(){u=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),M=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),B=n("li"),st=r("having all inputs as a list, tuple or dict in the first positional arguments."),je=d(),j=n("p"),Ue=r("This second option is useful when using "),_e=n("code"),rt=r("tf.keras.Model.fit"),ge=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=n("code"),it=r("model(inputs)"),Ke=r("."),Q=d(),O=n("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=d(),P=n("ul"),A=n("li"),dt=r("a single Tensor with "),ce=n("code"),pe=r("input_ids"),lt=r(" only and nothing else: "),J=n("code"),ct=r("model(input_ids)"),pt=d(),D=n("li"),Ee=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=n("code"),Ze=r("model([input_ids, attention_mask])"),se=r(" or "),ve=n("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),ht=d(),re=n("li"),Te=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=n("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){u=a(w,"P",{});var $=s(u);z=i($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=l(w),M=a(w,"UL",{});var we=s(M);x=a(we,"LI",{});var He=s(x);T=i(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),y=l(we),B=a(we,"LI",{});var Ut=s(B);st=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),we.forEach(t),je=l(w),j=a(w,"P",{});var K=s(j);Ue=i(K,"This second option is useful when using "),_e=a(K,"CODE",{});var Xt=s(_e);rt=i(Xt,"tf.keras.Model.fit"),Xt.forEach(t),ge=i(K,` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=a(K,"CODE",{});var kt=s(ke);it=i(kt,"model(inputs)"),kt.forEach(t),Ke=i(K,"."),K.forEach(t),Q=l(w),O=a(w,"P",{});var X=s(O);Xe=i(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),ae=l(w),P=a(w,"UL",{});var ie=s(P);A=a(ie,"LI",{});var de=s(A);dt=i(de,"a single Tensor with "),ce=a(de,"CODE",{});var Ht=s(ce);pe=i(Ht,"input_ids"),Ht.forEach(t),lt=i(de," only and nothing else: "),J=a(de,"CODE",{});var Vt=s(J);ct=i(Vt,"model(input_ids)"),Vt.forEach(t),de.forEach(t),pt=l(ie),D=a(ie,"LI",{});var le=s(D);Ee=i(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=a(le,"CODE",{});var Qt=s(be);Ze=i(Qt,"model([input_ids, attention_mask])"),Qt.forEach(t),se=i(le," or "),ve=a(le,"CODE",{});var Jt=s(ve);ye=i(Jt,"model([input_ids, attention_mask, token_type_ids])"),Jt.forEach(t),le.forEach(t),ht=l(ie),re=a(ie,"LI",{});var Ve=s(re);Te=i(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=a(Ve,"CODE",{});var Kt=s(Me);Ye=i(Kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Kt.forEach(t),Ve.forEach(t),ie.forEach(t)},m(w,$){h(w,u,$),e(u,z),h(w,v,$),h(w,M,$),e(M,x),e(x,T),e(M,y),e(M,B),e(B,st),h(w,je,$),h(w,j,$),e(j,Ue),e(j,_e),e(_e,rt),e(j,ge),e(j,ke),e(ke,it),e(j,Ke),h(w,Q,$),h(w,O,$),e(O,Xe),h(w,ae,$),h(w,P,$),e(P,A),e(A,dt),e(A,ce),e(ce,pe),e(A,lt),e(A,J),e(J,ct),e(P,pt),e(P,D),e(D,Ee),e(D,be),e(be,Ze),e(D,se),e(D,ve),e(ve,ye),e(P,ht),e(P,re),e(re,Te),e(re,Me),e(Me,Ye)},d(w){w&&t(u),w&&t(v),w&&t(M),w&&t(je),w&&t(j),w&&t(Q),w&&t(O),w&&t(ae),w&&t(P)}}}function Gx(E){let u,z,v,M,x;return{c(){u=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,x)},d(T){T&&t(u)}}}function Wx(E){let u,z,v,M,x,T,y,B,st,je,j,Ue,_e,rt,ge,ke,it,Ke,Q,O,Xe,ae,P,A,dt,ce,pe,lt,J,ct,pt,D,Ee,be,Ze,se,ve,ye,ht,re,Te,Me,Ye;return{c(){u=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),M=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),B=n("li"),st=r("having all inputs as a list, tuple or dict in the first positional arguments."),je=d(),j=n("p"),Ue=r("This second option is useful when using "),_e=n("code"),rt=r("tf.keras.Model.fit"),ge=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=n("code"),it=r("model(inputs)"),Ke=r("."),Q=d(),O=n("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=d(),P=n("ul"),A=n("li"),dt=r("a single Tensor with "),ce=n("code"),pe=r("input_ids"),lt=r(" only and nothing else: "),J=n("code"),ct=r("model(input_ids)"),pt=d(),D=n("li"),Ee=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=n("code"),Ze=r("model([input_ids, attention_mask])"),se=r(" or "),ve=n("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),ht=d(),re=n("li"),Te=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=n("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){u=a(w,"P",{});var $=s(u);z=i($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=l(w),M=a(w,"UL",{});var we=s(M);x=a(we,"LI",{});var He=s(x);T=i(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),y=l(we),B=a(we,"LI",{});var Ut=s(B);st=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),we.forEach(t),je=l(w),j=a(w,"P",{});var K=s(j);Ue=i(K,"This second option is useful when using "),_e=a(K,"CODE",{});var Xt=s(_e);rt=i(Xt,"tf.keras.Model.fit"),Xt.forEach(t),ge=i(K,` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=a(K,"CODE",{});var kt=s(ke);it=i(kt,"model(inputs)"),kt.forEach(t),Ke=i(K,"."),K.forEach(t),Q=l(w),O=a(w,"P",{});var X=s(O);Xe=i(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),ae=l(w),P=a(w,"UL",{});var ie=s(P);A=a(ie,"LI",{});var de=s(A);dt=i(de,"a single Tensor with "),ce=a(de,"CODE",{});var Ht=s(ce);pe=i(Ht,"input_ids"),Ht.forEach(t),lt=i(de," only and nothing else: "),J=a(de,"CODE",{});var Vt=s(J);ct=i(Vt,"model(input_ids)"),Vt.forEach(t),de.forEach(t),pt=l(ie),D=a(ie,"LI",{});var le=s(D);Ee=i(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=a(le,"CODE",{});var Qt=s(be);Ze=i(Qt,"model([input_ids, attention_mask])"),Qt.forEach(t),se=i(le," or "),ve=a(le,"CODE",{});var Jt=s(ve);ye=i(Jt,"model([input_ids, attention_mask, token_type_ids])"),Jt.forEach(t),le.forEach(t),ht=l(ie),re=a(ie,"LI",{});var Ve=s(re);Te=i(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=a(Ve,"CODE",{});var Kt=s(Me);Ye=i(Kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Kt.forEach(t),Ve.forEach(t),ie.forEach(t)},m(w,$){h(w,u,$),e(u,z),h(w,v,$),h(w,M,$),e(M,x),e(x,T),e(M,y),e(M,B),e(B,st),h(w,je,$),h(w,j,$),e(j,Ue),e(j,_e),e(_e,rt),e(j,ge),e(j,ke),e(ke,it),e(j,Ke),h(w,Q,$),h(w,O,$),e(O,Xe),h(w,ae,$),h(w,P,$),e(P,A),e(A,dt),e(A,ce),e(ce,pe),e(A,lt),e(A,J),e(J,ct),e(P,pt),e(P,D),e(D,Ee),e(D,be),e(be,Ze),e(D,se),e(D,ve),e(ve,ye),e(P,ht),e(P,re),e(re,Te),e(re,Me),e(Me,Ye)},d(w){w&&t(u),w&&t(v),w&&t(M),w&&t(je),w&&t(j),w&&t(Q),w&&t(O),w&&t(ae),w&&t(P)}}}function Rx(E){let u,z,v,M,x;return{c(){u=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,x)},d(T){T&&t(u)}}}function Ux(E){let u,z,v,M,x;return{c(){u=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,x)},d(T){T&&t(u)}}}function Xx(E){let u,z,v,M,x;return{c(){u=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,x)},d(T){T&&t(u)}}}function Hx(E){let u,z,v,M,x;return{c(){u=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,x)},d(T){T&&t(u)}}}function Vx(E){let u,z,v,M,x;return{c(){u=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=a(T,"P",{});var y=s(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,u,y),e(u,z),e(u,v),e(v,M),e(u,x)},d(T){T&&t(u)}}}function Qx(E){let u,z,v,M,x,T,y,B,st,je,j,Ue,_e,rt,ge,ke,it,Ke,Q,O,Xe,ae,P,A,dt,ce,pe,lt,J,ct,pt,D,Ee,be,Ze,se,ve,ye,ht,re,Te,Me,Ye,w,$,we,He,Ut,K,Xt,kt,X,ie,de,Ht,Vt,le,Qt,Jt,Ve,Kt,Eu,rd,Pu,Cu,_p,bt,Su,Cn,id,Au,Iu,Nu,Zr,Ou,Du,gp,Yr,dd,Lu,kp,Sn,bp,ei,An,ld,Gu,Wu,Zt,Ru,cd,Uu,Xu,pd,Hu,Vu,vp,In,yp,Yt,So,hd,Nn,Qu,ud,Ju,Tp,vt,Ku,On,Zu,Yu,md,em,tm,Mp,ti,om,wp,oi,fd,nm,xp,eo,Ao,_d,Dn,am,gd,sm,zp,et,rm,kd,im,dm,bd,lm,cm,vd,pm,hm,qp,Io,um,ni,mm,fm,Bp,ai,yd,_m,$p,Ln,Fp,si,Gn,Td,gm,km,xe,bm,Md,vm,ym,wd,Tm,Mm,xd,wm,xm,zd,zm,qm,qd,Bm,$m,jp,Wn,Ep,to,No,Bd,Rn,Fm,$d,jm,Pp,ze,Un,Em,oo,Pm,ri,Cm,Sm,Xn,Am,Im,Nm,no,Om,ii,Dm,Lm,di,Gm,Wm,Rm,Fd,Um,Xm,Hn,Cp,ao,Oo,jd,Vn,Hm,Ed,Vm,Sp,L,Qn,Qm,Pd,Jm,Km,ut,Zm,li,Ym,ef,ci,tf,of,Jn,nf,af,sf,Kn,rf,Cd,df,lf,cf,Sd,pf,hf,Zn,uf,Do,Yn,mf,Ad,ff,_f,tt,ea,gf,ta,kf,Id,bf,vf,yf,oa,na,Nd,Tf,Mf,Od,wf,xf,aa,Dd,zf,qf,Ld,Bf,$f,Gd,Ff,Ap,so,Lo,Wd,sa,jf,Rd,Ef,Ip,C,ra,Pf,ro,Cf,Ud,Sf,Af,ia,If,Nf,Of,yt,pi,Df,Lf,hi,Gf,Wf,ui,Rf,Uf,Xf,da,Hf,Xd,Vf,Qf,Jf,Hd,Kf,Zf,la,Yf,Pe,ca,e_,Vd,t_,o_,pa,n_,Qd,a_,s_,r_,ha,ua,Jd,i_,d_,Kd,l_,c_,ma,Zd,p_,h_,Yd,u_,m_,el,f_,__,Go,fa,g_,tl,k_,b_,Wo,_a,v_,ol,y_,T_,Ro,ga,M_,nl,w_,Np,io,Uo,al,ka,x_,sl,z_,Op,S,ba,q_,va,B_,ya,$_,F_,j_,Ta,E_,mi,P_,C_,S_,rl,A_,I_,Ma,N_,ot,wa,O_,xa,D_,il,L_,G_,W_,za,qa,dl,R_,U_,ll,X_,H_,Ba,cl,V_,Q_,pl,J_,K_,hl,Z_,Y_,Xo,$a,eg,ul,tg,og,Ho,Fa,ng,ja,ag,ml,sg,rg,ig,Vo,Ea,dg,fl,lg,cg,Qo,Pa,pg,_l,hg,Dp,lo,Jo,gl,Ca,ug,kl,mg,Lp,G,Sa,fg,co,_g,bl,gg,kg,Aa,bg,vg,yg,Ia,Tg,fi,Mg,wg,xg,vl,zg,qg,Na,Bg,Ce,Oa,$g,yl,Fg,jg,Da,Eg,Tl,Pg,Cg,Sg,La,Ga,Ml,Ag,Ig,wl,Ng,Og,Wa,xl,Dg,Lg,zl,Gg,Wg,ql,Rg,Ug,Ko,Ra,Xg,Bl,Hg,Vg,Zo,Ua,Qg,$l,Jg,Gp,po,Yo,Fl,Xa,Kg,jl,Zg,Wp,Qe,Ha,Yg,Va,ek,_i,tk,ok,nk,Qa,ak,Ja,sk,rk,ik,Se,Ka,dk,ho,lk,gi,ck,pk,El,hk,uk,mk,en,fk,Pl,_k,gk,Za,Rp,uo,tn,Cl,Ya,kk,Sl,bk,Up,Je,es,vk,ts,yk,ki,Tk,Mk,wk,os,xk,ns,zk,qk,Bk,Z,as,$k,mo,Fk,bi,jk,Ek,Al,Pk,Ck,Sk,on,Ak,Il,Ik,Nk,ss,Ok,Nl,Dk,Lk,rs,Xp,fo,nn,Ol,is,Gk,Dl,Wk,Hp,qe,ds,Rk,_o,Uk,Ll,Xk,Hk,Gl,Vk,Qk,Jk,ls,Kk,vi,Zk,Yk,eb,cs,tb,ps,ob,nb,ab,Ae,hs,sb,go,rb,yi,ib,db,Wl,lb,cb,pb,an,hb,Rl,ub,mb,us,Vp,ko,sn,Ul,ms,fb,Xl,_b,Qp,Be,fs,gb,Hl,kb,bb,_s,vb,Ti,yb,Tb,Mb,gs,wb,ks,xb,zb,qb,Y,bs,Bb,bo,$b,Mi,Fb,jb,Vl,Eb,Pb,Cb,rn,Sb,Ql,Ab,Ib,vs,Nb,Jl,Ob,Db,ys,Jp,vo,dn,Kl,Ts,Lb,Zl,Gb,Kp,yo,Ms,Wb,Tt,ws,Rb,Yl,Ub,Xb,xs,Zp,To,ln,ec,zs,Hb,tc,Vb,Yp,$e,qs,Qb,Bs,Jb,wi,Kb,Zb,Yb,$s,ev,Fs,tv,ov,nv,cn,av,Ie,js,sv,Mo,rv,xi,iv,dv,oc,lv,cv,pv,pn,hv,nc,uv,mv,Es,eh,wo,hn,ac,Ps,fv,sc,_v,th,Fe,Cs,gv,Ss,kv,zi,bv,vv,yv,As,Tv,Is,Mv,wv,xv,un,zv,ee,Ns,qv,xo,Bv,qi,$v,Fv,rc,jv,Ev,Pv,mn,Cv,ic,Sv,Av,Os,Iv,dc,Nv,Ov,Ds,oh,zo,fn,lc,Ls,Dv,cc,Lv,nh,W,Gs,Gv,Ws,Wv,Bi,Rv,Uv,Xv,Rs,Hv,Us,Vv,Qv,Jv,pc,Kv,Zv,mt,hc,Xs,Yv,ey,uc,Hs,ty,oy,mc,Vs,ny,ay,fc,Qs,sy,ry,Ne,Js,iy,qo,dy,_c,ly,cy,gc,py,hy,uy,_n,my,kc,fy,_y,Ks,gy,Mt,Zs,ky,bc,by,vy,Ys,yy,wt,er,Ty,vc,My,wy,tr,ah,Bo,gn,yc,or,xy,Tc,zy,sh,R,nr,qy,ar,By,$i,$y,Fy,jy,sr,Ey,rr,Py,Cy,Sy,Mc,Ay,Iy,ft,wc,ir,Ny,Oy,xc,dr,Dy,Ly,zc,lr,Gy,Wy,qc,cr,Ry,Uy,te,pr,Xy,$o,Hy,Bc,Vy,Qy,$c,Jy,Ky,Zy,kn,Yy,Fc,eT,tT,hr,oT,jc,nT,aT,ur,sT,xt,mr,rT,Ec,iT,dT,fr,lT,zt,_r,cT,Pc,pT,hT,gr,rh,Fo,bn,Cc,kr,uT,Sc,mT,ih,I,br,fT,Ac,_T,gT,vr,kT,Fi,bT,vT,yT,yr,TT,Tr,MT,wT,xT,Ic,zT,qT,_t,Nc,Mr,BT,$T,Oc,wr,FT,jT,Dc,xr,ET,PT,Lc,zr,CT,ST,Oe,qr,AT,jo,IT,Gc,NT,OT,Wc,DT,LT,GT,vn,WT,Rc,RT,UT,Br,XT,qt,$r,HT,Uc,VT,QT,Fr,JT,Bt,jr,KT,Xc,ZT,YT,Er,dh,Eo,yn,Hc,Pr,e1,Vc,t1,lh,N,Cr,o1,Po,n1,Qc,a1,s1,Jc,r1,i1,d1,Sr,l1,ji,c1,p1,h1,Ar,u1,Ir,m1,f1,_1,Kc,g1,k1,gt,Zc,Nr,b1,v1,Yc,Or,y1,T1,ep,Dr,M1,w1,tp,Lr,x1,z1,De,Gr,q1,Co,B1,op,$1,F1,np,j1,E1,P1,Tn,C1,ap,S1,A1,Wr,I1,$t,Rr,N1,sp,O1,D1,Ur,L1,Ft,Xr,G1,rp,W1,R1,Hr,ch;return T=new U({}),ae=new U({}),He=new U({}),Sn=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs, labels=batch[<span class="hljs-string">&quot;labels&quot;</span>])`}}),In=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

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
<span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>`}}),Nn=new U({}),Dn=new U({}),Ln=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

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

model(**model_inputs, labels=labels)  <span class="hljs-comment"># forward pass</span>`}}),Wn=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

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
<span class="hljs-comment"># =&gt; &quot;The Secretary-General of the United Nations says there is no military solution in Syria.&quot;</span>`}}),Rn=new U({}),Un=new q({props:{name:"class transformers.MBartConfig",anchor:"transformers.MBartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/configuration_mbart.py#L35",parametersDescription:[{anchor:"transformers.MBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the MBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartModel">MBartModel</a> or <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.TFMBartModel">TFMBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.MBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Hn=new F({props:{code:`from transformers import MBartModel, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Vn=new U({}),Qn=new q({props:{name:"class transformers.MBartTokenizer",anchor:"transformers.MBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/tokenization_mbart.py#L50"}}),Zn=new F({props:{code:`from transformers import MBartTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),Yn=new q({props:{name:"as_target_tokenizer",anchor:"transformers.MBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/tokenization_mbart.py#L339"}}),ea=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/tokenization_mbart.py#L218",parametersDescription:[{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sa=new U({}),ra=new q({props:{name:"class transformers.MBartTokenizerFast",anchor:"transformers.MBartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/tokenization_mbart_fast.py#L61"}}),la=new F({props:{code:`from transformers import MBartTokenizerFast

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
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),ca=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/tokenization_mbart_fast.py#L163",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fa=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/tokenization_mbart_fast.py#L192",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),_a=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/tokenization_mbart_fast.py#L251"}}),ga=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/tokenization_mbart_fast.py#L266"}}),ka=new U({}),ba=new q({props:{name:"class transformers.MBart50Tokenizer",anchor:"transformers.MBart50Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart50/tokenization_mbart50.py#L48",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Ma=new F({props:{code:`from transformers import MBart50Tokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),wa=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart50/tokenization_mbart50.py#L287",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),$a=new q({props:{name:"convert_tokens_to_string",anchor:"transformers.MBart50Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart50/tokenization_mbart50.py#L236"}}),Fa=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart50/tokenization_mbart50.py#L257",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ea=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart50/tokenization_mbart50.py#L348"}}),Pa=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart50/tokenization_mbart50.py#L354"}}),Ca=new U({}),Sa=new q({props:{name:"class transformers.MBart50TokenizerFast",anchor:"transformers.MBart50TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L57",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),Na=new F({props:{code:`from transformers import MBart50TokenizerFast

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),Oa=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L170",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ra=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L221"}}),Ua=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L236"}}),Xa=new U({}),Ha=new q({props:{name:"class transformers.MBartModel",anchor:"transformers.MBartModel",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_mbart.py#L1134",parametersDescription:[{anchor:"transformers.MBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16207/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ka=new q({props:{name:"forward",anchor:"transformers.MBartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_mbart.py#L1161",parametersDescription:[{anchor:"transformers.MBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16207/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),en=new at({props:{$$slots:{default:[Ix]},$$scope:{ctx:E}}}),Za=new F({props:{code:`from transformers import MBartTokenizer, MBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ya=new U({}),es=new q({props:{name:"class transformers.MBartForConditionalGeneration",anchor:"transformers.MBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_mbart.py#L1251",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16207/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),as=new q({props:{name:"forward",anchor:"transformers.MBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_mbart.py#L1295",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16207/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),on=new at({props:{$$slots:{default:[Nx]},$$scope:{ctx:E}}}),ss=new F({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

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
<span class="hljs-string">&#x27;42 este r\u0103spuns&#x27;</span>`}}),rs=new F({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

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
[<span class="hljs-string">&#x27;nett&#x27;</span>, <span class="hljs-string">&#x27;sehr&#x27;</span>, <span class="hljs-string">&#x27;ganz&#x27;</span>, <span class="hljs-string">&#x27;nicht&#x27;</span>, <span class="hljs-string">&#x27;so&#x27;</span>]`}}),is=new U({}),ds=new q({props:{name:"class transformers.MBartForQuestionAnswering",anchor:"transformers.MBartForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_mbart.py#L1551",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16207/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hs=new q({props:{name:"forward",anchor:"transformers.MBartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_mbart.py#L1563",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16207/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MBartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),an=new at({props:{$$slots:{default:[Ox]},$$scope:{ctx:E}}}),us=new F({props:{code:`from transformers import MBartTokenizer, MBartForQuestionAnswering
import torch

torch.manual_seed(0)
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForQuestionAnswering.from_pretrained("facebook/mbart-large-cc25")

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
list(end_scores.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">3.04</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(start_scores.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">16</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(end_scores.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">16</span>]`}}),ms=new U({}),fs=new q({props:{name:"class transformers.MBartForSequenceClassification",anchor:"transformers.MBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_mbart.py#L1424",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16207/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bs=new q({props:{name:"forward",anchor:"transformers.MBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_mbart.py#L1437",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16207/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rn=new at({props:{$$slots:{default:[Dx]},$$scope:{ctx:E}}}),vs=new F({props:{code:`import torch
from transformers import MBartTokenizer, MBartForSequenceClassification

torch.manual_seed(0)
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits
list(logits.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),ys=new F({props:{code:`import torch
from transformers import MBartTokenizer, MBartForSequenceClassification

torch.manual_seed(0)
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25", problem_type="multi_label_classification", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
list(logits.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),Ts=new U({}),Ms=new q({props:{name:"class transformers.MBartForCausalLM",anchor:"transformers.MBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_mbart.py#L1684"}}),ws=new q({props:{name:"forward",anchor:"transformers.MBartForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_mbart.py#L1715",parametersDescription:[{anchor:"transformers.MBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16207/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xs=new F({props:{code:`from transformers import MBartTokenizer, MBartForCausalLM

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
<span class="hljs-literal">True</span>`}}),zs=new U({}),qs=new q({props:{name:"class transformers.TFMBartModel",anchor:"transformers.TFMBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_tf_mbart.py#L1138",parametersDescription:[{anchor:"transformers.TFMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16207/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),cn=new at({props:{$$slots:{default:[Lx]},$$scope:{ctx:E}}}),js=new q({props:{name:"call",anchor:"transformers.TFMBartModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_tf_mbart.py#L1150",parametersDescription:[{anchor:"transformers.TFMBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16207/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pn=new at({props:{$$slots:{default:[Gx]},$$scope:{ctx:E}}}),Es=new F({props:{code:`from transformers import MBartTokenizer, TFMBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ps=new U({}),Cs=new q({props:{name:"class transformers.TFMBartForConditionalGeneration",anchor:"transformers.TFMBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_tf_mbart.py#L1225",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16207/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),un=new at({props:{$$slots:{default:[Wx]},$$scope:{ctx:E}}}),Ns=new q({props:{name:"call",anchor:"transformers.TFMBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_tf_mbart.py#L1258",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16207/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mn=new at({props:{$$slots:{default:[Rx]},$$scope:{ctx:E}}}),Os=new F({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Ds=new F({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),Ls=new U({}),Gs=new q({props:{name:"class transformers.FlaxMBartModel",anchor:"transformers.FlaxMBartModel",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_flax_mbart.py#L1266",parametersDescription:[{anchor:"transformers.FlaxMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16207/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16207/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16207/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Js=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16207/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_n=new at({props:{$$slots:{default:[Ux]},$$scope:{ctx:E}}}),Ks=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartModel

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Zs=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16207/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ys=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),er=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_flax_mbart.py#L1090",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16207/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),or=new U({}),nr=new q({props:{name:"class transformers.FlaxMBartForConditionalGeneration",anchor:"transformers.FlaxMBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_flax_mbart.py#L1353",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16207/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16207/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16207/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),pr=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16207/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),kn=new at({props:{$$slots:{default:[Xx]},$$scope:{ctx:E}}}),hr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),ur=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),mr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16207/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),_r=new q({props:{name:"decode",anchor:"transformers.FlaxMBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_flax_mbart.py#L1357",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16207/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),kr=new U({}),br=new q({props:{name:"class transformers.FlaxMBartForSequenceClassification",anchor:"transformers.FlaxMBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_flax_mbart.py#L1666",parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16207/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16207/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16207/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),qr=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16207/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vn=new at({props:{$$slots:{default:[Hx]},$$scope:{ctx:E}}}),Br=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$r=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16207/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),jr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_flax_mbart.py#L1090",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16207/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Er=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Pr=new U({}),Cr=new q({props:{name:"class transformers.FlaxMBartForQuestionAnswering",anchor:"transformers.FlaxMBartForQuestionAnswering",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_flax_mbart.py#L1754",parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16207/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16207/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16207/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Gr=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16207/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tn=new at({props:{$$slots:{default:[Vx]},$$scope:{ctx:E}}}),Wr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Rr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16207/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ur=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Xr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16207/src/transformers/models/mbart/modeling_flax_mbart.py#L1090",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16207/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_16207/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Hr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){u=n("meta"),z=d(),v=n("h1"),M=n("a"),x=n("span"),m(T.$$.fragment),y=d(),B=n("span"),st=r("MBart and MBart-50"),je=d(),j=n("p"),Ue=n("strong"),_e=r("DISCLAIMER:"),rt=r(" If you see something strange, file a "),ge=n("a"),ke=r("Github Issue"),it=r(` and assign
@patrickvonplaten`),Ke=d(),Q=n("h2"),O=n("a"),Xe=n("span"),m(ae.$$.fragment),P=d(),A=n("span"),dt=r("Overview of MBart"),ce=d(),pe=n("p"),lt=r("The MBart model was presented in "),J=n("a"),ct=r("Multilingual Denoising Pre-training for Neural Machine Translation"),pt=r(` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),D=d(),Ee=n("p"),be=r(`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Ze=d(),se=n("p"),ve=r("This model was contributed by "),ye=n("a"),ht=r("valhalla"),re=r(". The Authors\u2019 code can be found "),Te=n("a"),Me=r("here"),Ye=d(),w=n("h3"),$=n("a"),we=n("span"),m(He.$$.fragment),Ut=d(),K=n("span"),Xt=r("Training of MBart"),kt=d(),X=n("p"),ie=r(`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),de=n("code"),Ht=r("X [eos, src_lang_code]"),Vt=r(" where "),le=n("code"),Qt=r("X"),Jt=r(` is the source text. The
target text format is `),Ve=n("code"),Kt=r("[tgt_lang_code] X [eos]"),Eu=r(". "),rd=n("code"),Pu=r("bos"),Cu=r(" is never used."),_p=d(),bt=n("p"),Su=r("The regular "),Cn=n("a"),id=n("strong"),Au=r("call"),Iu=r("()"),Nu=r(` will encode source text format, and it should be wrapped
inside the context manager `),Zr=n("a"),Ou=r("as_target_tokenizer()"),Du=r(" to encode target text format."),gp=d(),Yr=n("ul"),dd=n("li"),Lu=r("Supervised training"),kp=d(),m(Sn.$$.fragment),bp=d(),ei=n("ul"),An=n("li"),ld=n("p"),Gu=r("Generation"),Wu=d(),Zt=n("p"),Ru=r("While generating the target text set the "),cd=n("code"),Uu=r("decoder_start_token_id"),Xu=r(` to the target language id. The following
example shows how to translate English to Romanian using the `),pd=n("em"),Hu=r("facebook/mbart-large-en-ro"),Vu=r(" model."),vp=d(),m(In.$$.fragment),yp=d(),Yt=n("h2"),So=n("a"),hd=n("span"),m(Nn.$$.fragment),Qu=d(),ud=n("span"),Ju=r("Overview of MBart-50"),Tp=d(),vt=n("p"),Ku=r("MBart-50 was introduced in the "),On=n("a"),Zu=r("Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),Yu=r(` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),md=n("em"),em=r("mbart-large-cc25"),tm=r(` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Mp=d(),ti=n("p"),om=r("According to the abstract"),wp=d(),oi=n("p"),fd=n("em"),nm=r(`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),xp=d(),eo=n("h3"),Ao=n("a"),_d=n("span"),m(Dn.$$.fragment),am=d(),gd=n("span"),sm=r("Training of MBart-50"),zp=d(),et=n("p"),rm=r(`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),kd=n("code"),im=r("[lang_code] X [eos]"),dm=r(", where "),bd=n("code"),lm=r("lang_code"),cm=r(` is source
language id for source text and target language id for target text, with `),vd=n("code"),pm=r("X"),hm=r(` being the source or target text
respectively.`),qp=d(),Io=n("p"),um=r("MBart-50 has its own tokenizer "),ni=n("a"),mm=r("MBart50Tokenizer"),fm=r("."),Bp=d(),ai=n("ul"),yd=n("li"),_m=r("Supervised training"),$p=d(),m(Ln.$$.fragment),Fp=d(),si=n("ul"),Gn=n("li"),Td=n("p"),gm=r("Generation"),km=d(),xe=n("p"),bm=r("To generate using the mBART-50 multilingual translation models, "),Md=n("code"),vm=r("eos_token_id"),ym=r(` is used as the
`),wd=n("code"),Tm=r("decoder_start_token_id"),Mm=r(` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),xd=n("em"),wm=r("forced_bos_token_id"),xm=r(" parameter to the "),zd=n("em"),zm=r("generate"),qm=r(` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),qd=n("em"),Bm=r("facebook/mbart-50-large-many-to-many"),$m=r(" checkpoint."),jp=d(),m(Wn.$$.fragment),Ep=d(),to=n("h2"),No=n("a"),Bd=n("span"),m(Rn.$$.fragment),Fm=d(),$d=n("span"),jm=r("MBartConfig"),Pp=d(),ze=n("div"),m(Un.$$.fragment),Em=d(),oo=n("p"),Pm=r("This is the configuration class to store the configuration of a "),ri=n("a"),Cm=r("MBartModel"),Sm=r(`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Xn=n("a"),Am=r("facebook/mbart-large-cc25"),Im=r(" architecture."),Nm=d(),no=n("p"),Om=r("Configuration objects inherit from "),ii=n("a"),Dm=r("PretrainedConfig"),Lm=r(` and can be used to control the model outputs. Read the
documentation from `),di=n("a"),Gm=r("PretrainedConfig"),Wm=r(" for more information."),Rm=d(),Fd=n("p"),Um=r("Example:"),Xm=d(),m(Hn.$$.fragment),Cp=d(),ao=n("h2"),Oo=n("a"),jd=n("span"),m(Vn.$$.fragment),Hm=d(),Ed=n("span"),Vm=r("MBartTokenizer"),Sp=d(),L=n("div"),m(Qn.$$.fragment),Qm=d(),Pd=n("p"),Jm=r("Construct an MBART tokenizer."),Km=d(),ut=n("p"),Zm=r("Adapted from "),li=n("a"),Ym=r("RobertaTokenizer"),ef=r(" and "),ci=n("a"),tf=r("XLNetTokenizer"),of=r(`. Based on
`),Jn=n("a"),nf=r("SentencePiece"),af=r("."),sf=d(),Kn=n("p"),rf=r("The tokenization method is "),Cd=n("code"),df=r("<tokens> <eos> <language code>"),lf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),cf=d(),Sd=n("p"),pf=r("Examples:"),hf=d(),m(Zn.$$.fragment),uf=d(),Do=n("div"),m(Yn.$$.fragment),mf=d(),Ad=n("p"),ff=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),_f=d(),tt=n("div"),m(ea.$$.fragment),gf=d(),ta=n("p"),kf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Id=n("code"),bf=r("X"),vf=r(" represents the sequence:"),yf=d(),oa=n("ul"),na=n("li"),Nd=n("code"),Tf=r("input_ids"),Mf=r(" (for encoder) "),Od=n("code"),wf=r("X [eos, src_lang_code]"),xf=d(),aa=n("li"),Dd=n("code"),zf=r("decoder_input_ids"),qf=r(": (for decoder) "),Ld=n("code"),Bf=r("X [eos, tgt_lang_code]"),$f=d(),Gd=n("p"),Ff=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ap=d(),so=n("h2"),Lo=n("a"),Wd=n("span"),m(sa.$$.fragment),jf=d(),Rd=n("span"),Ef=r("MBartTokenizerFast"),Ip=d(),C=n("div"),m(ra.$$.fragment),Pf=d(),ro=n("p"),Cf=r("Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Ud=n("em"),Sf=r("tokenizers"),Af=r(` library). Based on
`),ia=n("a"),If=r("BPE"),Nf=r("."),Of=d(),yt=n("p"),pi=n("a"),Df=r("MBartTokenizerFast"),Lf=r(" is a subclass of "),hi=n("a"),Gf=r("XLMRobertaTokenizerFast"),Wf=r(`. Refer to superclass
`),ui=n("a"),Rf=r("XLMRobertaTokenizerFast"),Uf=r(` for usage examples and documentation concerning the initialization parameters and other
methods.`),Xf=d(),da=n("p"),Hf=r("The tokenization method is "),Xd=n("code"),Vf=r("<tokens> <eos> <language code>"),Qf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Jf=d(),Hd=n("p"),Kf=r("Examples:"),Zf=d(),m(la.$$.fragment),Yf=d(),Pe=n("div"),m(ca.$$.fragment),e_=d(),Vd=n("p"),t_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),o_=d(),pa=n("p"),n_=r("An MBART sequence has the following format, where "),Qd=n("code"),a_=r("X"),s_=r(" represents the sequence:"),r_=d(),ha=n("ul"),ua=n("li"),Jd=n("code"),i_=r("input_ids"),d_=r(" (for encoder) "),Kd=n("code"),l_=r("X [eos, src_lang_code]"),c_=d(),ma=n("li"),Zd=n("code"),p_=r("decoder_input_ids"),h_=r(": (for decoder) "),Yd=n("code"),u_=r("X [eos, tgt_lang_code]"),m_=d(),el=n("p"),f_=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),__=d(),Go=n("div"),m(fa.$$.fragment),g_=d(),tl=n("p"),k_=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),b_=d(),Wo=n("div"),m(_a.$$.fragment),v_=d(),ol=n("p"),y_=r("Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),T_=d(),Ro=n("div"),m(ga.$$.fragment),M_=d(),nl=n("p"),w_=r("Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Np=d(),io=n("h2"),Uo=n("a"),al=n("span"),m(ka.$$.fragment),x_=d(),sl=n("span"),z_=r("MBart50Tokenizer"),Op=d(),S=n("div"),m(ba.$$.fragment),q_=d(),va=n("p"),B_=r("Construct a MBart50 tokenizer. Based on "),ya=n("a"),$_=r("SentencePiece"),F_=r("."),j_=d(),Ta=n("p"),E_=r("This tokenizer inherits from "),mi=n("a"),P_=r("PreTrainedTokenizer"),C_=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),S_=d(),rl=n("p"),A_=r("Examples:"),I_=d(),m(Ma.$$.fragment),N_=d(),ot=n("div"),m(wa.$$.fragment),O_=d(),xa=n("p"),D_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),il=n("code"),L_=r("X"),G_=r(" represents the sequence:"),W_=d(),za=n("ul"),qa=n("li"),dl=n("code"),R_=r("input_ids"),U_=r(" (for encoder) "),ll=n("code"),X_=r("[src_lang_code] X [eos]"),H_=d(),Ba=n("li"),cl=n("code"),V_=r("labels"),Q_=r(": (for decoder) "),pl=n("code"),J_=r("[tgt_lang_code] X [eos]"),K_=d(),hl=n("p"),Z_=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Y_=d(),Xo=n("div"),m($a.$$.fragment),eg=d(),ul=n("p"),tg=r("Converts a sequence of tokens (strings for sub-words) in a single string."),og=d(),Ho=n("div"),m(Fa.$$.fragment),ng=d(),ja=n("p"),ag=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ml=n("code"),sg=r("prepare_for_model"),rg=r(" method."),ig=d(),Vo=n("div"),m(Ea.$$.fragment),dg=d(),fl=n("p"),lg=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),cg=d(),Qo=n("div"),m(Pa.$$.fragment),pg=d(),_l=n("p"),hg=r("Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Dp=d(),lo=n("h2"),Jo=n("a"),gl=n("span"),m(Ca.$$.fragment),ug=d(),kl=n("span"),mg=r("MBart50TokenizerFast"),Lp=d(),G=n("div"),m(Sa.$$.fragment),fg=d(),co=n("p"),_g=r("Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),bl=n("em"),gg=r("tokenizers"),kg=r(` library). Based on
`),Aa=n("a"),bg=r("BPE"),vg=r("."),yg=d(),Ia=n("p"),Tg=r("This tokenizer inherits from "),fi=n("a"),Mg=r("PreTrainedTokenizerFast"),wg=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),xg=d(),vl=n("p"),zg=r("Examples:"),qg=d(),m(Na.$$.fragment),Bg=d(),Ce=n("div"),m(Oa.$$.fragment),$g=d(),yl=n("p"),Fg=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),jg=d(),Da=n("p"),Eg=r("An MBART-50 sequence has the following format, where "),Tl=n("code"),Pg=r("X"),Cg=r(" represents the sequence:"),Sg=d(),La=n("ul"),Ga=n("li"),Ml=n("code"),Ag=r("input_ids"),Ig=r(" (for encoder) "),wl=n("code"),Ng=r("[src_lang_code] X [eos]"),Og=d(),Wa=n("li"),xl=n("code"),Dg=r("labels"),Lg=r(": (for decoder) "),zl=n("code"),Gg=r("[tgt_lang_code] X [eos]"),Wg=d(),ql=n("p"),Rg=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ug=d(),Ko=n("div"),m(Ra.$$.fragment),Xg=d(),Bl=n("p"),Hg=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Vg=d(),Zo=n("div"),m(Ua.$$.fragment),Qg=d(),$l=n("p"),Jg=r("Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Gp=d(),po=n("h2"),Yo=n("a"),Fl=n("span"),m(Xa.$$.fragment),Kg=d(),jl=n("span"),Zg=r("MBartModel"),Wp=d(),Qe=n("div"),m(Ha.$$.fragment),Yg=d(),Va=n("p"),ek=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),_i=n("a"),tk=r("PreTrainedModel"),ok=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nk=d(),Qa=n("p"),ak=r("This model is also a PyTorch "),Ja=n("a"),sk=r("torch.nn.Module"),rk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ik=d(),Se=n("div"),m(Ka.$$.fragment),dk=d(),ho=n("p"),lk=r("The "),gi=n("a"),ck=r("MBartModel"),pk=r(" forward method, overrides the "),El=n("code"),hk=r("__call__"),uk=r(" special method."),mk=d(),m(en.$$.fragment),fk=d(),Pl=n("p"),_k=r("Example:"),gk=d(),m(Za.$$.fragment),Rp=d(),uo=n("h2"),tn=n("a"),Cl=n("span"),m(Ya.$$.fragment),kk=d(),Sl=n("span"),bk=r("MBartForConditionalGeneration"),Up=d(),Je=n("div"),m(es.$$.fragment),vk=d(),ts=n("p"),yk=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ki=n("a"),Tk=r("PreTrainedModel"),Mk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wk=d(),os=n("p"),xk=r("This model is also a PyTorch "),ns=n("a"),zk=r("torch.nn.Module"),qk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bk=d(),Z=n("div"),m(as.$$.fragment),$k=d(),mo=n("p"),Fk=r("The "),bi=n("a"),jk=r("MBartForConditionalGeneration"),Ek=r(" forward method, overrides the "),Al=n("code"),Pk=r("__call__"),Ck=r(" special method."),Sk=d(),m(on.$$.fragment),Ak=d(),Il=n("p"),Ik=r("Translation example:"),Nk=d(),m(ss.$$.fragment),Ok=d(),Nl=n("p"),Dk=r("Mask filling example:"),Lk=d(),m(rs.$$.fragment),Xp=d(),fo=n("h2"),nn=n("a"),Ol=n("span"),m(is.$$.fragment),Gk=d(),Dl=n("span"),Wk=r("MBartForQuestionAnswering"),Hp=d(),qe=n("div"),m(ds.$$.fragment),Rk=d(),_o=n("p"),Uk=r(`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ll=n("code"),Xk=r("span start logits"),Hk=r(" and "),Gl=n("code"),Vk=r("span end logits"),Qk=r(")."),Jk=d(),ls=n("p"),Kk=r("This model inherits from "),vi=n("a"),Zk=r("PreTrainedModel"),Yk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eb=d(),cs=n("p"),tb=r("This model is also a PyTorch "),ps=n("a"),ob=r("torch.nn.Module"),nb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ab=d(),Ae=n("div"),m(hs.$$.fragment),sb=d(),go=n("p"),rb=r("The "),yi=n("a"),ib=r("MBartForQuestionAnswering"),db=r(" forward method, overrides the "),Wl=n("code"),lb=r("__call__"),cb=r(" special method."),pb=d(),m(an.$$.fragment),hb=d(),Rl=n("p"),ub=r("Example:"),mb=d(),m(us.$$.fragment),Vp=d(),ko=n("h2"),sn=n("a"),Ul=n("span"),m(ms.$$.fragment),fb=d(),Xl=n("span"),_b=r("MBartForSequenceClassification"),Qp=d(),Be=n("div"),m(fs.$$.fragment),gb=d(),Hl=n("p"),kb=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),bb=d(),_s=n("p"),vb=r("This model inherits from "),Ti=n("a"),yb=r("PreTrainedModel"),Tb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mb=d(),gs=n("p"),wb=r("This model is also a PyTorch "),ks=n("a"),xb=r("torch.nn.Module"),zb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qb=d(),Y=n("div"),m(bs.$$.fragment),Bb=d(),bo=n("p"),$b=r("The "),Mi=n("a"),Fb=r("MBartForSequenceClassification"),jb=r(" forward method, overrides the "),Vl=n("code"),Eb=r("__call__"),Pb=r(" special method."),Cb=d(),m(rn.$$.fragment),Sb=d(),Ql=n("p"),Ab=r("Example of single-label classification:"),Ib=d(),m(vs.$$.fragment),Nb=d(),Jl=n("p"),Ob=r("Example of multi-label classification:"),Db=d(),m(ys.$$.fragment),Jp=d(),vo=n("h2"),dn=n("a"),Kl=n("span"),m(Ts.$$.fragment),Lb=d(),Zl=n("span"),Gb=r("MBartForCausalLM"),Kp=d(),yo=n("div"),m(Ms.$$.fragment),Wb=d(),Tt=n("div"),m(ws.$$.fragment),Rb=d(),Yl=n("p"),Ub=r("Example:"),Xb=d(),m(xs.$$.fragment),Zp=d(),To=n("h2"),ln=n("a"),ec=n("span"),m(zs.$$.fragment),Hb=d(),tc=n("span"),Vb=r("TFMBartModel"),Yp=d(),$e=n("div"),m(qs.$$.fragment),Qb=d(),Bs=n("p"),Jb=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),wi=n("a"),Kb=r("TFPreTrainedModel"),Zb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yb=d(),$s=n("p"),ev=r("This model is also a "),Fs=n("a"),tv=r("tf.keras.Model"),ov=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nv=d(),m(cn.$$.fragment),av=d(),Ie=n("div"),m(js.$$.fragment),sv=d(),Mo=n("p"),rv=r("The "),xi=n("a"),iv=r("TFMBartModel"),dv=r(" forward method, overrides the "),oc=n("code"),lv=r("__call__"),cv=r(" special method."),pv=d(),m(pn.$$.fragment),hv=d(),nc=n("p"),uv=r("Example:"),mv=d(),m(Es.$$.fragment),eh=d(),wo=n("h2"),hn=n("a"),ac=n("span"),m(Ps.$$.fragment),fv=d(),sc=n("span"),_v=r("TFMBartForConditionalGeneration"),th=d(),Fe=n("div"),m(Cs.$$.fragment),gv=d(),Ss=n("p"),kv=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),zi=n("a"),bv=r("TFPreTrainedModel"),vv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yv=d(),As=n("p"),Tv=r("This model is also a "),Is=n("a"),Mv=r("tf.keras.Model"),wv=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xv=d(),m(un.$$.fragment),zv=d(),ee=n("div"),m(Ns.$$.fragment),qv=d(),xo=n("p"),Bv=r("The "),qi=n("a"),$v=r("TFMBartForConditionalGeneration"),Fv=r(" forward method, overrides the "),rc=n("code"),jv=r("__call__"),Ev=r(" special method."),Pv=d(),m(mn.$$.fragment),Cv=d(),ic=n("p"),Sv=r("Summarization example:"),Av=d(),m(Os.$$.fragment),Iv=d(),dc=n("p"),Nv=r("Mask filling example:"),Ov=d(),m(Ds.$$.fragment),oh=d(),zo=n("h2"),fn=n("a"),lc=n("span"),m(Ls.$$.fragment),Dv=d(),cc=n("span"),Lv=r("FlaxMBartModel"),nh=d(),W=n("div"),m(Gs.$$.fragment),Gv=d(),Ws=n("p"),Wv=r(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Bi=n("a"),Rv=r("FlaxPreTrainedModel"),Uv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xv=d(),Rs=n("p"),Hv=r(`This model is also a Flax Linen
`),Us=n("a"),Vv=r("flax.nn.Module"),Qv=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Jv=d(),pc=n("p"),Kv=r("Finally, this model supports inherent JAX features such as:"),Zv=d(),mt=n("ul"),hc=n("li"),Xs=n("a"),Yv=r("Just-In-Time (JIT) compilation"),ey=d(),uc=n("li"),Hs=n("a"),ty=r("Automatic Differentiation"),oy=d(),mc=n("li"),Vs=n("a"),ny=r("Vectorization"),ay=d(),fc=n("li"),Qs=n("a"),sy=r("Parallelization"),ry=d(),Ne=n("div"),m(Js.$$.fragment),iy=d(),qo=n("p"),dy=r("The "),_c=n("code"),ly=r("FlaxMBartPreTrainedModel"),cy=r("forward method, overrides the "),gc=n("code"),py=r("__call__"),hy=r(" special method."),uy=d(),m(_n.$$.fragment),my=d(),kc=n("p"),fy=r("Example:"),_y=d(),m(Ks.$$.fragment),gy=d(),Mt=n("div"),m(Zs.$$.fragment),ky=d(),bc=n("p"),by=r("Example:"),vy=d(),m(Ys.$$.fragment),yy=d(),wt=n("div"),m(er.$$.fragment),Ty=d(),vc=n("p"),My=r("Example:"),wy=d(),m(tr.$$.fragment),ah=d(),Bo=n("h2"),gn=n("a"),yc=n("span"),m(or.$$.fragment),xy=d(),Tc=n("span"),zy=r("FlaxMBartForConditionalGeneration"),sh=d(),R=n("div"),m(nr.$$.fragment),qy=d(),ar=n("p"),By=r(`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),$i=n("a"),$y=r("FlaxPreTrainedModel"),Fy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jy=d(),sr=n("p"),Ey=r(`This model is also a Flax Linen
`),rr=n("a"),Py=r("flax.nn.Module"),Cy=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Sy=d(),Mc=n("p"),Ay=r("Finally, this model supports inherent JAX features such as:"),Iy=d(),ft=n("ul"),wc=n("li"),ir=n("a"),Ny=r("Just-In-Time (JIT) compilation"),Oy=d(),xc=n("li"),dr=n("a"),Dy=r("Automatic Differentiation"),Ly=d(),zc=n("li"),lr=n("a"),Gy=r("Vectorization"),Wy=d(),qc=n("li"),cr=n("a"),Ry=r("Parallelization"),Uy=d(),te=n("div"),m(pr.$$.fragment),Xy=d(),$o=n("p"),Hy=r("The "),Bc=n("code"),Vy=r("FlaxMBartPreTrainedModel"),Qy=r("forward method, overrides the "),$c=n("code"),Jy=r("__call__"),Ky=r(" special method."),Zy=d(),m(kn.$$.fragment),Yy=d(),Fc=n("p"),eT=r("Summarization example:"),tT=d(),m(hr.$$.fragment),oT=d(),jc=n("p"),nT=r("Mask filling example:"),aT=d(),m(ur.$$.fragment),sT=d(),xt=n("div"),m(mr.$$.fragment),rT=d(),Ec=n("p"),iT=r("Example:"),dT=d(),m(fr.$$.fragment),lT=d(),zt=n("div"),m(_r.$$.fragment),cT=d(),Pc=n("p"),pT=r("Example:"),hT=d(),m(gr.$$.fragment),rh=d(),Fo=n("h2"),bn=n("a"),Cc=n("span"),m(kr.$$.fragment),uT=d(),Sc=n("span"),mT=r("FlaxMBartForSequenceClassification"),ih=d(),I=n("div"),m(br.$$.fragment),fT=d(),Ac=n("p"),_T=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),gT=d(),vr=n("p"),kT=r("This model inherits from "),Fi=n("a"),bT=r("FlaxPreTrainedModel"),vT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yT=d(),yr=n("p"),TT=r(`This model is also a Flax Linen
`),Tr=n("a"),MT=r("flax.nn.Module"),wT=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),xT=d(),Ic=n("p"),zT=r("Finally, this model supports inherent JAX features such as:"),qT=d(),_t=n("ul"),Nc=n("li"),Mr=n("a"),BT=r("Just-In-Time (JIT) compilation"),$T=d(),Oc=n("li"),wr=n("a"),FT=r("Automatic Differentiation"),jT=d(),Dc=n("li"),xr=n("a"),ET=r("Vectorization"),PT=d(),Lc=n("li"),zr=n("a"),CT=r("Parallelization"),ST=d(),Oe=n("div"),m(qr.$$.fragment),AT=d(),jo=n("p"),IT=r("The "),Gc=n("code"),NT=r("FlaxMBartPreTrainedModel"),OT=r("forward method, overrides the "),Wc=n("code"),DT=r("__call__"),LT=r(" special method."),GT=d(),m(vn.$$.fragment),WT=d(),Rc=n("p"),RT=r("Example:"),UT=d(),m(Br.$$.fragment),XT=d(),qt=n("div"),m($r.$$.fragment),HT=d(),Uc=n("p"),VT=r("Example:"),QT=d(),m(Fr.$$.fragment),JT=d(),Bt=n("div"),m(jr.$$.fragment),KT=d(),Xc=n("p"),ZT=r("Example:"),YT=d(),m(Er.$$.fragment),dh=d(),Eo=n("h2"),yn=n("a"),Hc=n("span"),m(Pr.$$.fragment),e1=d(),Vc=n("span"),t1=r("FlaxMBartForQuestionAnswering"),lh=d(),N=n("div"),m(Cr.$$.fragment),o1=d(),Po=n("p"),n1=r(`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Qc=n("code"),a1=r("span start logits"),s1=r(" and "),Jc=n("code"),r1=r("span end logits"),i1=r(")."),d1=d(),Sr=n("p"),l1=r("This model inherits from "),ji=n("a"),c1=r("FlaxPreTrainedModel"),p1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),h1=d(),Ar=n("p"),u1=r(`This model is also a Flax Linen
`),Ir=n("a"),m1=r("flax.nn.Module"),f1=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),_1=d(),Kc=n("p"),g1=r("Finally, this model supports inherent JAX features such as:"),k1=d(),gt=n("ul"),Zc=n("li"),Nr=n("a"),b1=r("Just-In-Time (JIT) compilation"),v1=d(),Yc=n("li"),Or=n("a"),y1=r("Automatic Differentiation"),T1=d(),ep=n("li"),Dr=n("a"),M1=r("Vectorization"),w1=d(),tp=n("li"),Lr=n("a"),x1=r("Parallelization"),z1=d(),De=n("div"),m(Gr.$$.fragment),q1=d(),Co=n("p"),B1=r("The "),op=n("code"),$1=r("FlaxMBartPreTrainedModel"),F1=r("forward method, overrides the "),np=n("code"),j1=r("__call__"),E1=r(" special method."),P1=d(),m(Tn.$$.fragment),C1=d(),ap=n("p"),S1=r("Example:"),A1=d(),m(Wr.$$.fragment),I1=d(),$t=n("div"),m(Rr.$$.fragment),N1=d(),sp=n("p"),O1=r("Example:"),D1=d(),m(Ur.$$.fragment),L1=d(),Ft=n("div"),m(Xr.$$.fragment),G1=d(),rp=n("p"),W1=r("Example:"),R1=d(),m(Hr.$$.fragment),this.h()},l(o){const p=Ax('[data-svelte="svelte-1phssyn"]',document.head);u=a(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(o),v=a(o,"H1",{class:!0});var Vr=s(v);M=a(Vr,"A",{id:!0,class:!0,href:!0});var ip=s(M);x=a(ip,"SPAN",{});var dp=s(x);f(T.$$.fragment,dp),dp.forEach(t),ip.forEach(t),y=l(Vr),B=a(Vr,"SPAN",{});var lp=s(B);st=i(lp,"MBart and MBart-50"),lp.forEach(t),Vr.forEach(t),je=l(o),j=a(o,"P",{});var Mn=s(j);Ue=a(Mn,"STRONG",{});var cp=s(Ue);_e=i(cp,"DISCLAIMER:"),cp.forEach(t),rt=i(Mn," If you see something strange, file a "),ge=a(Mn,"A",{href:!0,rel:!0});var pp=s(ge);ke=i(pp,"Github Issue"),pp.forEach(t),it=i(Mn,` and assign
@patrickvonplaten`),Mn.forEach(t),Ke=l(o),Q=a(o,"H2",{class:!0});var Qr=s(Q);O=a(Qr,"A",{id:!0,class:!0,href:!0});var hp=s(O);Xe=a(hp,"SPAN",{});var up=s(Xe);f(ae.$$.fragment,up),up.forEach(t),hp.forEach(t),P=l(Qr),A=a(Qr,"SPAN",{});var mp=s(A);dt=i(mp,"Overview of MBart"),mp.forEach(t),Qr.forEach(t),ce=l(o),pe=a(o,"P",{});var Jr=s(pe);lt=i(Jr,"The MBart model was presented in "),J=a(Jr,"A",{href:!0,rel:!0});var X1=s(J);ct=i(X1,"Multilingual Denoising Pre-training for Neural Machine Translation"),X1.forEach(t),pt=i(Jr,` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),Jr.forEach(t),D=l(o),Ee=a(o,"P",{});var H1=s(Ee);be=i(H1,`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),H1.forEach(t),Ze=l(o),se=a(o,"P",{});var fp=s(se);ve=i(fp,"This model was contributed by "),ye=a(fp,"A",{href:!0,rel:!0});var V1=s(ye);ht=i(V1,"valhalla"),V1.forEach(t),re=i(fp,". The Authors\u2019 code can be found "),Te=a(fp,"A",{href:!0,rel:!0});var Q1=s(Te);Me=i(Q1,"here"),Q1.forEach(t),fp.forEach(t),Ye=l(o),w=a(o,"H3",{class:!0});var ph=s(w);$=a(ph,"A",{id:!0,class:!0,href:!0});var J1=s($);we=a(J1,"SPAN",{});var K1=s(we);f(He.$$.fragment,K1),K1.forEach(t),J1.forEach(t),Ut=l(ph),K=a(ph,"SPAN",{});var Z1=s(K);Xt=i(Z1,"Training of MBart"),Z1.forEach(t),ph.forEach(t),kt=l(o),X=a(o,"P",{});var jt=s(X);ie=i(jt,`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),de=a(jt,"CODE",{});var Y1=s(de);Ht=i(Y1,"X [eos, src_lang_code]"),Y1.forEach(t),Vt=i(jt," where "),le=a(jt,"CODE",{});var eM=s(le);Qt=i(eM,"X"),eM.forEach(t),Jt=i(jt,` is the source text. The
target text format is `),Ve=a(jt,"CODE",{});var tM=s(Ve);Kt=i(tM,"[tgt_lang_code] X [eos]"),tM.forEach(t),Eu=i(jt,". "),rd=a(jt,"CODE",{});var oM=s(rd);Pu=i(oM,"bos"),oM.forEach(t),Cu=i(jt," is never used."),jt.forEach(t),_p=l(o),bt=a(o,"P",{});var Ei=s(bt);Su=i(Ei,"The regular "),Cn=a(Ei,"A",{href:!0});var U1=s(Cn);id=a(U1,"STRONG",{});var nM=s(id);Au=i(nM,"call"),nM.forEach(t),Iu=i(U1,"()"),U1.forEach(t),Nu=i(Ei,` will encode source text format, and it should be wrapped
inside the context manager `),Zr=a(Ei,"A",{href:!0});var aM=s(Zr);Ou=i(aM,"as_target_tokenizer()"),aM.forEach(t),Du=i(Ei," to encode target text format."),Ei.forEach(t),gp=l(o),Yr=a(o,"UL",{});var sM=s(Yr);dd=a(sM,"LI",{});var rM=s(dd);Lu=i(rM,"Supervised training"),rM.forEach(t),sM.forEach(t),kp=l(o),f(Sn.$$.fragment,o),bp=l(o),ei=a(o,"UL",{});var iM=s(ei);An=a(iM,"LI",{});var hh=s(An);ld=a(hh,"P",{});var dM=s(ld);Gu=i(dM,"Generation"),dM.forEach(t),Wu=l(hh),Zt=a(hh,"P",{});var Pi=s(Zt);Ru=i(Pi,"While generating the target text set the "),cd=a(Pi,"CODE",{});var lM=s(cd);Uu=i(lM,"decoder_start_token_id"),lM.forEach(t),Xu=i(Pi,` to the target language id. The following
example shows how to translate English to Romanian using the `),pd=a(Pi,"EM",{});var cM=s(pd);Hu=i(cM,"facebook/mbart-large-en-ro"),cM.forEach(t),Vu=i(Pi," model."),Pi.forEach(t),hh.forEach(t),iM.forEach(t),vp=l(o),f(In.$$.fragment,o),yp=l(o),Yt=a(o,"H2",{class:!0});var uh=s(Yt);So=a(uh,"A",{id:!0,class:!0,href:!0});var pM=s(So);hd=a(pM,"SPAN",{});var hM=s(hd);f(Nn.$$.fragment,hM),hM.forEach(t),pM.forEach(t),Qu=l(uh),ud=a(uh,"SPAN",{});var uM=s(ud);Ju=i(uM,"Overview of MBart-50"),uM.forEach(t),uh.forEach(t),Tp=l(o),vt=a(o,"P",{});var Ci=s(vt);Ku=i(Ci,"MBart-50 was introduced in the "),On=a(Ci,"A",{href:!0,rel:!0});var mM=s(On);Zu=i(mM,"Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),mM.forEach(t),Yu=i(Ci,` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),md=a(Ci,"EM",{});var fM=s(md);em=i(fM,"mbart-large-cc25"),fM.forEach(t),tm=i(Ci,` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Ci.forEach(t),Mp=l(o),ti=a(o,"P",{});var _M=s(ti);om=i(_M,"According to the abstract"),_M.forEach(t),wp=l(o),oi=a(o,"P",{});var gM=s(oi);fd=a(gM,"EM",{});var kM=s(fd);nm=i(kM,`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),kM.forEach(t),gM.forEach(t),xp=l(o),eo=a(o,"H3",{class:!0});var mh=s(eo);Ao=a(mh,"A",{id:!0,class:!0,href:!0});var bM=s(Ao);_d=a(bM,"SPAN",{});var vM=s(_d);f(Dn.$$.fragment,vM),vM.forEach(t),bM.forEach(t),am=l(mh),gd=a(mh,"SPAN",{});var yM=s(gd);sm=i(yM,"Training of MBart-50"),yM.forEach(t),mh.forEach(t),zp=l(o),et=a(o,"P",{});var wn=s(et);rm=i(wn,`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),kd=a(wn,"CODE",{});var TM=s(kd);im=i(TM,"[lang_code] X [eos]"),TM.forEach(t),dm=i(wn,", where "),bd=a(wn,"CODE",{});var MM=s(bd);lm=i(MM,"lang_code"),MM.forEach(t),cm=i(wn,` is source
language id for source text and target language id for target text, with `),vd=a(wn,"CODE",{});var wM=s(vd);pm=i(wM,"X"),wM.forEach(t),hm=i(wn,` being the source or target text
respectively.`),wn.forEach(t),qp=l(o),Io=a(o,"P",{});var fh=s(Io);um=i(fh,"MBart-50 has its own tokenizer "),ni=a(fh,"A",{href:!0});var xM=s(ni);mm=i(xM,"MBart50Tokenizer"),xM.forEach(t),fm=i(fh,"."),fh.forEach(t),Bp=l(o),ai=a(o,"UL",{});var zM=s(ai);yd=a(zM,"LI",{});var qM=s(yd);_m=i(qM,"Supervised training"),qM.forEach(t),zM.forEach(t),$p=l(o),f(Ln.$$.fragment,o),Fp=l(o),si=a(o,"UL",{});var BM=s(si);Gn=a(BM,"LI",{});var _h=s(Gn);Td=a(_h,"P",{});var $M=s(Td);gm=i($M,"Generation"),$M.forEach(t),km=l(_h),xe=a(_h,"P",{});var nt=s(xe);bm=i(nt,"To generate using the mBART-50 multilingual translation models, "),Md=a(nt,"CODE",{});var FM=s(Md);vm=i(FM,"eos_token_id"),FM.forEach(t),ym=i(nt,` is used as the
`),wd=a(nt,"CODE",{});var jM=s(wd);Tm=i(jM,"decoder_start_token_id"),jM.forEach(t),Mm=i(nt,` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),xd=a(nt,"EM",{});var EM=s(xd);wm=i(EM,"forced_bos_token_id"),EM.forEach(t),xm=i(nt," parameter to the "),zd=a(nt,"EM",{});var PM=s(zd);zm=i(PM,"generate"),PM.forEach(t),qm=i(nt,` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),qd=a(nt,"EM",{});var CM=s(qd);Bm=i(CM,"facebook/mbart-50-large-many-to-many"),CM.forEach(t),$m=i(nt," checkpoint."),nt.forEach(t),_h.forEach(t),BM.forEach(t),jp=l(o),f(Wn.$$.fragment,o),Ep=l(o),to=a(o,"H2",{class:!0});var gh=s(to);No=a(gh,"A",{id:!0,class:!0,href:!0});var SM=s(No);Bd=a(SM,"SPAN",{});var AM=s(Bd);f(Rn.$$.fragment,AM),AM.forEach(t),SM.forEach(t),Fm=l(gh),$d=a(gh,"SPAN",{});var IM=s($d);jm=i(IM,"MBartConfig"),IM.forEach(t),gh.forEach(t),Pp=l(o),ze=a(o,"DIV",{class:!0});var Et=s(ze);f(Un.$$.fragment,Et),Em=l(Et),oo=a(Et,"P",{});var Si=s(oo);Pm=i(Si,"This is the configuration class to store the configuration of a "),ri=a(Si,"A",{href:!0});var NM=s(ri);Cm=i(NM,"MBartModel"),NM.forEach(t),Sm=i(Si,`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Xn=a(Si,"A",{href:!0,rel:!0});var OM=s(Xn);Am=i(OM,"facebook/mbart-large-cc25"),OM.forEach(t),Im=i(Si," architecture."),Si.forEach(t),Nm=l(Et),no=a(Et,"P",{});var Ai=s(no);Om=i(Ai,"Configuration objects inherit from "),ii=a(Ai,"A",{href:!0});var DM=s(ii);Dm=i(DM,"PretrainedConfig"),DM.forEach(t),Lm=i(Ai,` and can be used to control the model outputs. Read the
documentation from `),di=a(Ai,"A",{href:!0});var LM=s(di);Gm=i(LM,"PretrainedConfig"),LM.forEach(t),Wm=i(Ai," for more information."),Ai.forEach(t),Rm=l(Et),Fd=a(Et,"P",{});var GM=s(Fd);Um=i(GM,"Example:"),GM.forEach(t),Xm=l(Et),f(Hn.$$.fragment,Et),Et.forEach(t),Cp=l(o),ao=a(o,"H2",{class:!0});var kh=s(ao);Oo=a(kh,"A",{id:!0,class:!0,href:!0});var WM=s(Oo);jd=a(WM,"SPAN",{});var RM=s(jd);f(Vn.$$.fragment,RM),RM.forEach(t),WM.forEach(t),Hm=l(kh),Ed=a(kh,"SPAN",{});var UM=s(Ed);Vm=i(UM,"MBartTokenizer"),UM.forEach(t),kh.forEach(t),Sp=l(o),L=a(o,"DIV",{class:!0});var he=s(L);f(Qn.$$.fragment,he),Qm=l(he),Pd=a(he,"P",{});var XM=s(Pd);Jm=i(XM,"Construct an MBART tokenizer."),XM.forEach(t),Km=l(he),ut=a(he,"P",{});var xn=s(ut);Zm=i(xn,"Adapted from "),li=a(xn,"A",{href:!0});var HM=s(li);Ym=i(HM,"RobertaTokenizer"),HM.forEach(t),ef=i(xn," and "),ci=a(xn,"A",{href:!0});var VM=s(ci);tf=i(VM,"XLNetTokenizer"),VM.forEach(t),of=i(xn,`. Based on
`),Jn=a(xn,"A",{href:!0,rel:!0});var QM=s(Jn);nf=i(QM,"SentencePiece"),QM.forEach(t),af=i(xn,"."),xn.forEach(t),sf=l(he),Kn=a(he,"P",{});var bh=s(Kn);rf=i(bh,"The tokenization method is "),Cd=a(bh,"CODE",{});var JM=s(Cd);df=i(JM,"<tokens> <eos> <language code>"),JM.forEach(t),lf=i(bh," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),bh.forEach(t),cf=l(he),Sd=a(he,"P",{});var KM=s(Sd);pf=i(KM,"Examples:"),KM.forEach(t),hf=l(he),f(Zn.$$.fragment,he),uf=l(he),Do=a(he,"DIV",{class:!0});var vh=s(Do);f(Yn.$$.fragment,vh),mf=l(vh),Ad=a(vh,"P",{});var ZM=s(Ad);ff=i(ZM,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),ZM.forEach(t),vh.forEach(t),_f=l(he),tt=a(he,"DIV",{class:!0});var zn=s(tt);f(ea.$$.fragment,zn),gf=l(zn),ta=a(zn,"P",{});var yh=s(ta);kf=i(yh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Id=a(yh,"CODE",{});var YM=s(Id);bf=i(YM,"X"),YM.forEach(t),vf=i(yh," represents the sequence:"),yh.forEach(t),yf=l(zn),oa=a(zn,"UL",{});var Th=s(oa);na=a(Th,"LI",{});var Mh=s(na);Nd=a(Mh,"CODE",{});var e2=s(Nd);Tf=i(e2,"input_ids"),e2.forEach(t),Mf=i(Mh," (for encoder) "),Od=a(Mh,"CODE",{});var t2=s(Od);wf=i(t2,"X [eos, src_lang_code]"),t2.forEach(t),Mh.forEach(t),xf=l(Th),aa=a(Th,"LI",{});var wh=s(aa);Dd=a(wh,"CODE",{});var o2=s(Dd);zf=i(o2,"decoder_input_ids"),o2.forEach(t),qf=i(wh,": (for decoder) "),Ld=a(wh,"CODE",{});var n2=s(Ld);Bf=i(n2,"X [eos, tgt_lang_code]"),n2.forEach(t),wh.forEach(t),Th.forEach(t),$f=l(zn),Gd=a(zn,"P",{});var a2=s(Gd);Ff=i(a2,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),a2.forEach(t),zn.forEach(t),he.forEach(t),Ap=l(o),so=a(o,"H2",{class:!0});var xh=s(so);Lo=a(xh,"A",{id:!0,class:!0,href:!0});var s2=s(Lo);Wd=a(s2,"SPAN",{});var r2=s(Wd);f(sa.$$.fragment,r2),r2.forEach(t),s2.forEach(t),jf=l(xh),Rd=a(xh,"SPAN",{});var i2=s(Rd);Ef=i(i2,"MBartTokenizerFast"),i2.forEach(t),xh.forEach(t),Ip=l(o),C=a(o,"DIV",{class:!0});var H=s(C);f(ra.$$.fragment,H),Pf=l(H),ro=a(H,"P",{});var Ii=s(ro);Cf=i(Ii,"Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Ud=a(Ii,"EM",{});var d2=s(Ud);Sf=i(d2,"tokenizers"),d2.forEach(t),Af=i(Ii,` library). Based on
`),ia=a(Ii,"A",{href:!0,rel:!0});var l2=s(ia);If=i(l2,"BPE"),l2.forEach(t),Nf=i(Ii,"."),Ii.forEach(t),Of=l(H),yt=a(H,"P",{});var Kr=s(yt);pi=a(Kr,"A",{href:!0});var c2=s(pi);Df=i(c2,"MBartTokenizerFast"),c2.forEach(t),Lf=i(Kr," is a subclass of "),hi=a(Kr,"A",{href:!0});var p2=s(hi);Gf=i(p2,"XLMRobertaTokenizerFast"),p2.forEach(t),Wf=i(Kr,`. Refer to superclass
`),ui=a(Kr,"A",{href:!0});var h2=s(ui);Rf=i(h2,"XLMRobertaTokenizerFast"),h2.forEach(t),Uf=i(Kr,` for usage examples and documentation concerning the initialization parameters and other
methods.`),Kr.forEach(t),Xf=l(H),da=a(H,"P",{});var zh=s(da);Hf=i(zh,"The tokenization method is "),Xd=a(zh,"CODE",{});var u2=s(Xd);Vf=i(u2,"<tokens> <eos> <language code>"),u2.forEach(t),Qf=i(zh," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),zh.forEach(t),Jf=l(H),Hd=a(H,"P",{});var m2=s(Hd);Kf=i(m2,"Examples:"),m2.forEach(t),Zf=l(H),f(la.$$.fragment,H),Yf=l(H),Pe=a(H,"DIV",{class:!0});var Pt=s(Pe);f(ca.$$.fragment,Pt),e_=l(Pt),Vd=a(Pt,"P",{});var f2=s(Vd);t_=i(f2,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),f2.forEach(t),o_=l(Pt),pa=a(Pt,"P",{});var qh=s(pa);n_=i(qh,"An MBART sequence has the following format, where "),Qd=a(qh,"CODE",{});var _2=s(Qd);a_=i(_2,"X"),_2.forEach(t),s_=i(qh," represents the sequence:"),qh.forEach(t),r_=l(Pt),ha=a(Pt,"UL",{});var Bh=s(ha);ua=a(Bh,"LI",{});var $h=s(ua);Jd=a($h,"CODE",{});var g2=s(Jd);i_=i(g2,"input_ids"),g2.forEach(t),d_=i($h," (for encoder) "),Kd=a($h,"CODE",{});var k2=s(Kd);l_=i(k2,"X [eos, src_lang_code]"),k2.forEach(t),$h.forEach(t),c_=l(Bh),ma=a(Bh,"LI",{});var Fh=s(ma);Zd=a(Fh,"CODE",{});var b2=s(Zd);p_=i(b2,"decoder_input_ids"),b2.forEach(t),h_=i(Fh,": (for decoder) "),Yd=a(Fh,"CODE",{});var v2=s(Yd);u_=i(v2,"X [eos, tgt_lang_code]"),v2.forEach(t),Fh.forEach(t),Bh.forEach(t),m_=l(Pt),el=a(Pt,"P",{});var y2=s(el);f_=i(y2,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),y2.forEach(t),Pt.forEach(t),__=l(H),Go=a(H,"DIV",{class:!0});var jh=s(Go);f(fa.$$.fragment,jh),g_=l(jh),tl=a(jh,"P",{});var T2=s(tl);k_=i(T2,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),T2.forEach(t),jh.forEach(t),b_=l(H),Wo=a(H,"DIV",{class:!0});var Eh=s(Wo);f(_a.$$.fragment,Eh),v_=l(Eh),ol=a(Eh,"P",{});var M2=s(ol);y_=i(M2,"Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),M2.forEach(t),Eh.forEach(t),T_=l(H),Ro=a(H,"DIV",{class:!0});var Ph=s(Ro);f(ga.$$.fragment,Ph),M_=l(Ph),nl=a(Ph,"P",{});var w2=s(nl);w_=i(w2,"Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),w2.forEach(t),Ph.forEach(t),H.forEach(t),Np=l(o),io=a(o,"H2",{class:!0});var Ch=s(io);Uo=a(Ch,"A",{id:!0,class:!0,href:!0});var x2=s(Uo);al=a(x2,"SPAN",{});var z2=s(al);f(ka.$$.fragment,z2),z2.forEach(t),x2.forEach(t),x_=l(Ch),sl=a(Ch,"SPAN",{});var q2=s(sl);z_=i(q2,"MBart50Tokenizer"),q2.forEach(t),Ch.forEach(t),Op=l(o),S=a(o,"DIV",{class:!0});var V=s(S);f(ba.$$.fragment,V),q_=l(V),va=a(V,"P",{});var Sh=s(va);B_=i(Sh,"Construct a MBart50 tokenizer. Based on "),ya=a(Sh,"A",{href:!0,rel:!0});var B2=s(ya);$_=i(B2,"SentencePiece"),B2.forEach(t),F_=i(Sh,"."),Sh.forEach(t),j_=l(V),Ta=a(V,"P",{});var Ah=s(Ta);E_=i(Ah,"This tokenizer inherits from "),mi=a(Ah,"A",{href:!0});var $2=s(mi);P_=i($2,"PreTrainedTokenizer"),$2.forEach(t),C_=i(Ah,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ah.forEach(t),S_=l(V),rl=a(V,"P",{});var F2=s(rl);A_=i(F2,"Examples:"),F2.forEach(t),I_=l(V),f(Ma.$$.fragment,V),N_=l(V),ot=a(V,"DIV",{class:!0});var qn=s(ot);f(wa.$$.fragment,qn),O_=l(qn),xa=a(qn,"P",{});var Ih=s(xa);D_=i(Ih,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),il=a(Ih,"CODE",{});var j2=s(il);L_=i(j2,"X"),j2.forEach(t),G_=i(Ih," represents the sequence:"),Ih.forEach(t),W_=l(qn),za=a(qn,"UL",{});var Nh=s(za);qa=a(Nh,"LI",{});var Oh=s(qa);dl=a(Oh,"CODE",{});var E2=s(dl);R_=i(E2,"input_ids"),E2.forEach(t),U_=i(Oh," (for encoder) "),ll=a(Oh,"CODE",{});var P2=s(ll);X_=i(P2,"[src_lang_code] X [eos]"),P2.forEach(t),Oh.forEach(t),H_=l(Nh),Ba=a(Nh,"LI",{});var Dh=s(Ba);cl=a(Dh,"CODE",{});var C2=s(cl);V_=i(C2,"labels"),C2.forEach(t),Q_=i(Dh,": (for decoder) "),pl=a(Dh,"CODE",{});var S2=s(pl);J_=i(S2,"[tgt_lang_code] X [eos]"),S2.forEach(t),Dh.forEach(t),Nh.forEach(t),K_=l(qn),hl=a(qn,"P",{});var A2=s(hl);Z_=i(A2,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),A2.forEach(t),qn.forEach(t),Y_=l(V),Xo=a(V,"DIV",{class:!0});var Lh=s(Xo);f($a.$$.fragment,Lh),eg=l(Lh),ul=a(Lh,"P",{});var I2=s(ul);tg=i(I2,"Converts a sequence of tokens (strings for sub-words) in a single string."),I2.forEach(t),Lh.forEach(t),og=l(V),Ho=a(V,"DIV",{class:!0});var Gh=s(Ho);f(Fa.$$.fragment,Gh),ng=l(Gh),ja=a(Gh,"P",{});var Wh=s(ja);ag=i(Wh,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ml=a(Wh,"CODE",{});var N2=s(ml);sg=i(N2,"prepare_for_model"),N2.forEach(t),rg=i(Wh," method."),Wh.forEach(t),Gh.forEach(t),ig=l(V),Vo=a(V,"DIV",{class:!0});var Rh=s(Vo);f(Ea.$$.fragment,Rh),dg=l(Rh),fl=a(Rh,"P",{});var O2=s(fl);lg=i(O2,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),O2.forEach(t),Rh.forEach(t),cg=l(V),Qo=a(V,"DIV",{class:!0});var Uh=s(Qo);f(Pa.$$.fragment,Uh),pg=l(Uh),_l=a(Uh,"P",{});var D2=s(_l);hg=i(D2,"Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),D2.forEach(t),Uh.forEach(t),V.forEach(t),Dp=l(o),lo=a(o,"H2",{class:!0});var Xh=s(lo);Jo=a(Xh,"A",{id:!0,class:!0,href:!0});var L2=s(Jo);gl=a(L2,"SPAN",{});var G2=s(gl);f(Ca.$$.fragment,G2),G2.forEach(t),L2.forEach(t),ug=l(Xh),kl=a(Xh,"SPAN",{});var W2=s(kl);mg=i(W2,"MBart50TokenizerFast"),W2.forEach(t),Xh.forEach(t),Lp=l(o),G=a(o,"DIV",{class:!0});var ue=s(G);f(Sa.$$.fragment,ue),fg=l(ue),co=a(ue,"P",{});var Ni=s(co);_g=i(Ni,"Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),bl=a(Ni,"EM",{});var R2=s(bl);gg=i(R2,"tokenizers"),R2.forEach(t),kg=i(Ni,` library). Based on
`),Aa=a(Ni,"A",{href:!0,rel:!0});var U2=s(Aa);bg=i(U2,"BPE"),U2.forEach(t),vg=i(Ni,"."),Ni.forEach(t),yg=l(ue),Ia=a(ue,"P",{});var Hh=s(Ia);Tg=i(Hh,"This tokenizer inherits from "),fi=a(Hh,"A",{href:!0});var X2=s(fi);Mg=i(X2,"PreTrainedTokenizerFast"),X2.forEach(t),wg=i(Hh,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Hh.forEach(t),xg=l(ue),vl=a(ue,"P",{});var H2=s(vl);zg=i(H2,"Examples:"),H2.forEach(t),qg=l(ue),f(Na.$$.fragment,ue),Bg=l(ue),Ce=a(ue,"DIV",{class:!0});var Ct=s(Ce);f(Oa.$$.fragment,Ct),$g=l(Ct),yl=a(Ct,"P",{});var V2=s(yl);Fg=i(V2,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),V2.forEach(t),jg=l(Ct),Da=a(Ct,"P",{});var Vh=s(Da);Eg=i(Vh,"An MBART-50 sequence has the following format, where "),Tl=a(Vh,"CODE",{});var Q2=s(Tl);Pg=i(Q2,"X"),Q2.forEach(t),Cg=i(Vh," represents the sequence:"),Vh.forEach(t),Sg=l(Ct),La=a(Ct,"UL",{});var Qh=s(La);Ga=a(Qh,"LI",{});var Jh=s(Ga);Ml=a(Jh,"CODE",{});var J2=s(Ml);Ag=i(J2,"input_ids"),J2.forEach(t),Ig=i(Jh," (for encoder) "),wl=a(Jh,"CODE",{});var K2=s(wl);Ng=i(K2,"[src_lang_code] X [eos]"),K2.forEach(t),Jh.forEach(t),Og=l(Qh),Wa=a(Qh,"LI",{});var Kh=s(Wa);xl=a(Kh,"CODE",{});var Z2=s(xl);Dg=i(Z2,"labels"),Z2.forEach(t),Lg=i(Kh,": (for decoder) "),zl=a(Kh,"CODE",{});var Y2=s(zl);Gg=i(Y2,"[tgt_lang_code] X [eos]"),Y2.forEach(t),Kh.forEach(t),Qh.forEach(t),Wg=l(Ct),ql=a(Ct,"P",{});var ew=s(ql);Rg=i(ew,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),ew.forEach(t),Ct.forEach(t),Ug=l(ue),Ko=a(ue,"DIV",{class:!0});var Zh=s(Ko);f(Ra.$$.fragment,Zh),Xg=l(Zh),Bl=a(Zh,"P",{});var tw=s(Bl);Hg=i(tw,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),tw.forEach(t),Zh.forEach(t),Vg=l(ue),Zo=a(ue,"DIV",{class:!0});var Yh=s(Zo);f(Ua.$$.fragment,Yh),Qg=l(Yh),$l=a(Yh,"P",{});var ow=s($l);Jg=i(ow,"Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),ow.forEach(t),Yh.forEach(t),ue.forEach(t),Gp=l(o),po=a(o,"H2",{class:!0});var eu=s(po);Yo=a(eu,"A",{id:!0,class:!0,href:!0});var nw=s(Yo);Fl=a(nw,"SPAN",{});var aw=s(Fl);f(Xa.$$.fragment,aw),aw.forEach(t),nw.forEach(t),Kg=l(eu),jl=a(eu,"SPAN",{});var sw=s(jl);Zg=i(sw,"MBartModel"),sw.forEach(t),eu.forEach(t),Wp=l(o),Qe=a(o,"DIV",{class:!0});var Bn=s(Qe);f(Ha.$$.fragment,Bn),Yg=l(Bn),Va=a(Bn,"P",{});var tu=s(Va);ek=i(tu,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),_i=a(tu,"A",{href:!0});var rw=s(_i);tk=i(rw,"PreTrainedModel"),rw.forEach(t),ok=i(tu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tu.forEach(t),nk=l(Bn),Qa=a(Bn,"P",{});var ou=s(Qa);ak=i(ou,"This model is also a PyTorch "),Ja=a(ou,"A",{href:!0,rel:!0});var iw=s(Ja);sk=i(iw,"torch.nn.Module"),iw.forEach(t),rk=i(ou,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ou.forEach(t),ik=l(Bn),Se=a(Bn,"DIV",{class:!0});var St=s(Se);f(Ka.$$.fragment,St),dk=l(St),ho=a(St,"P",{});var Oi=s(ho);lk=i(Oi,"The "),gi=a(Oi,"A",{href:!0});var dw=s(gi);ck=i(dw,"MBartModel"),dw.forEach(t),pk=i(Oi," forward method, overrides the "),El=a(Oi,"CODE",{});var lw=s(El);hk=i(lw,"__call__"),lw.forEach(t),uk=i(Oi," special method."),Oi.forEach(t),mk=l(St),f(en.$$.fragment,St),fk=l(St),Pl=a(St,"P",{});var cw=s(Pl);_k=i(cw,"Example:"),cw.forEach(t),gk=l(St),f(Za.$$.fragment,St),St.forEach(t),Bn.forEach(t),Rp=l(o),uo=a(o,"H2",{class:!0});var nu=s(uo);tn=a(nu,"A",{id:!0,class:!0,href:!0});var pw=s(tn);Cl=a(pw,"SPAN",{});var hw=s(Cl);f(Ya.$$.fragment,hw),hw.forEach(t),pw.forEach(t),kk=l(nu),Sl=a(nu,"SPAN",{});var uw=s(Sl);bk=i(uw,"MBartForConditionalGeneration"),uw.forEach(t),nu.forEach(t),Up=l(o),Je=a(o,"DIV",{class:!0});var $n=s(Je);f(es.$$.fragment,$n),vk=l($n),ts=a($n,"P",{});var au=s(ts);yk=i(au,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ki=a(au,"A",{href:!0});var mw=s(ki);Tk=i(mw,"PreTrainedModel"),mw.forEach(t),Mk=i(au,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),au.forEach(t),wk=l($n),os=a($n,"P",{});var su=s(os);xk=i(su,"This model is also a PyTorch "),ns=a(su,"A",{href:!0,rel:!0});var fw=s(ns);zk=i(fw,"torch.nn.Module"),fw.forEach(t),qk=i(su,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),su.forEach(t),Bk=l($n),Z=a($n,"DIV",{class:!0});var Le=s(Z);f(as.$$.fragment,Le),$k=l(Le),mo=a(Le,"P",{});var Di=s(mo);Fk=i(Di,"The "),bi=a(Di,"A",{href:!0});var _w=s(bi);jk=i(_w,"MBartForConditionalGeneration"),_w.forEach(t),Ek=i(Di," forward method, overrides the "),Al=a(Di,"CODE",{});var gw=s(Al);Pk=i(gw,"__call__"),gw.forEach(t),Ck=i(Di," special method."),Di.forEach(t),Sk=l(Le),f(on.$$.fragment,Le),Ak=l(Le),Il=a(Le,"P",{});var kw=s(Il);Ik=i(kw,"Translation example:"),kw.forEach(t),Nk=l(Le),f(ss.$$.fragment,Le),Ok=l(Le),Nl=a(Le,"P",{});var bw=s(Nl);Dk=i(bw,"Mask filling example:"),bw.forEach(t),Lk=l(Le),f(rs.$$.fragment,Le),Le.forEach(t),$n.forEach(t),Xp=l(o),fo=a(o,"H2",{class:!0});var ru=s(fo);nn=a(ru,"A",{id:!0,class:!0,href:!0});var vw=s(nn);Ol=a(vw,"SPAN",{});var yw=s(Ol);f(is.$$.fragment,yw),yw.forEach(t),vw.forEach(t),Gk=l(ru),Dl=a(ru,"SPAN",{});var Tw=s(Dl);Wk=i(Tw,"MBartForQuestionAnswering"),Tw.forEach(t),ru.forEach(t),Hp=l(o),qe=a(o,"DIV",{class:!0});var At=s(qe);f(ds.$$.fragment,At),Rk=l(At),_o=a(At,"P",{});var Li=s(_o);Uk=i(Li,`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ll=a(Li,"CODE",{});var Mw=s(Ll);Xk=i(Mw,"span start logits"),Mw.forEach(t),Hk=i(Li," and "),Gl=a(Li,"CODE",{});var ww=s(Gl);Vk=i(ww,"span end logits"),ww.forEach(t),Qk=i(Li,")."),Li.forEach(t),Jk=l(At),ls=a(At,"P",{});var iu=s(ls);Kk=i(iu,"This model inherits from "),vi=a(iu,"A",{href:!0});var xw=s(vi);Zk=i(xw,"PreTrainedModel"),xw.forEach(t),Yk=i(iu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iu.forEach(t),eb=l(At),cs=a(At,"P",{});var du=s(cs);tb=i(du,"This model is also a PyTorch "),ps=a(du,"A",{href:!0,rel:!0});var zw=s(ps);ob=i(zw,"torch.nn.Module"),zw.forEach(t),nb=i(du,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),du.forEach(t),ab=l(At),Ae=a(At,"DIV",{class:!0});var It=s(Ae);f(hs.$$.fragment,It),sb=l(It),go=a(It,"P",{});var Gi=s(go);rb=i(Gi,"The "),yi=a(Gi,"A",{href:!0});var qw=s(yi);ib=i(qw,"MBartForQuestionAnswering"),qw.forEach(t),db=i(Gi," forward method, overrides the "),Wl=a(Gi,"CODE",{});var Bw=s(Wl);lb=i(Bw,"__call__"),Bw.forEach(t),cb=i(Gi," special method."),Gi.forEach(t),pb=l(It),f(an.$$.fragment,It),hb=l(It),Rl=a(It,"P",{});var $w=s(Rl);ub=i($w,"Example:"),$w.forEach(t),mb=l(It),f(us.$$.fragment,It),It.forEach(t),At.forEach(t),Vp=l(o),ko=a(o,"H2",{class:!0});var lu=s(ko);sn=a(lu,"A",{id:!0,class:!0,href:!0});var Fw=s(sn);Ul=a(Fw,"SPAN",{});var jw=s(Ul);f(ms.$$.fragment,jw),jw.forEach(t),Fw.forEach(t),fb=l(lu),Xl=a(lu,"SPAN",{});var Ew=s(Xl);_b=i(Ew,"MBartForSequenceClassification"),Ew.forEach(t),lu.forEach(t),Qp=l(o),Be=a(o,"DIV",{class:!0});var Nt=s(Be);f(fs.$$.fragment,Nt),gb=l(Nt),Hl=a(Nt,"P",{});var Pw=s(Hl);kb=i(Pw,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Pw.forEach(t),bb=l(Nt),_s=a(Nt,"P",{});var cu=s(_s);vb=i(cu,"This model inherits from "),Ti=a(cu,"A",{href:!0});var Cw=s(Ti);yb=i(Cw,"PreTrainedModel"),Cw.forEach(t),Tb=i(cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cu.forEach(t),Mb=l(Nt),gs=a(Nt,"P",{});var pu=s(gs);wb=i(pu,"This model is also a PyTorch "),ks=a(pu,"A",{href:!0,rel:!0});var Sw=s(ks);xb=i(Sw,"torch.nn.Module"),Sw.forEach(t),zb=i(pu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pu.forEach(t),qb=l(Nt),Y=a(Nt,"DIV",{class:!0});var Ge=s(Y);f(bs.$$.fragment,Ge),Bb=l(Ge),bo=a(Ge,"P",{});var Wi=s(bo);$b=i(Wi,"The "),Mi=a(Wi,"A",{href:!0});var Aw=s(Mi);Fb=i(Aw,"MBartForSequenceClassification"),Aw.forEach(t),jb=i(Wi," forward method, overrides the "),Vl=a(Wi,"CODE",{});var Iw=s(Vl);Eb=i(Iw,"__call__"),Iw.forEach(t),Pb=i(Wi," special method."),Wi.forEach(t),Cb=l(Ge),f(rn.$$.fragment,Ge),Sb=l(Ge),Ql=a(Ge,"P",{});var Nw=s(Ql);Ab=i(Nw,"Example of single-label classification:"),Nw.forEach(t),Ib=l(Ge),f(vs.$$.fragment,Ge),Nb=l(Ge),Jl=a(Ge,"P",{});var Ow=s(Jl);Ob=i(Ow,"Example of multi-label classification:"),Ow.forEach(t),Db=l(Ge),f(ys.$$.fragment,Ge),Ge.forEach(t),Nt.forEach(t),Jp=l(o),vo=a(o,"H2",{class:!0});var hu=s(vo);dn=a(hu,"A",{id:!0,class:!0,href:!0});var Dw=s(dn);Kl=a(Dw,"SPAN",{});var Lw=s(Kl);f(Ts.$$.fragment,Lw),Lw.forEach(t),Dw.forEach(t),Lb=l(hu),Zl=a(hu,"SPAN",{});var Gw=s(Zl);Gb=i(Gw,"MBartForCausalLM"),Gw.forEach(t),hu.forEach(t),Kp=l(o),yo=a(o,"DIV",{class:!0});var uu=s(yo);f(Ms.$$.fragment,uu),Wb=l(uu),Tt=a(uu,"DIV",{class:!0});var Ri=s(Tt);f(ws.$$.fragment,Ri),Rb=l(Ri),Yl=a(Ri,"P",{});var Ww=s(Yl);Ub=i(Ww,"Example:"),Ww.forEach(t),Xb=l(Ri),f(xs.$$.fragment,Ri),Ri.forEach(t),uu.forEach(t),Zp=l(o),To=a(o,"H2",{class:!0});var mu=s(To);ln=a(mu,"A",{id:!0,class:!0,href:!0});var Rw=s(ln);ec=a(Rw,"SPAN",{});var Uw=s(ec);f(zs.$$.fragment,Uw),Uw.forEach(t),Rw.forEach(t),Hb=l(mu),tc=a(mu,"SPAN",{});var Xw=s(tc);Vb=i(Xw,"TFMBartModel"),Xw.forEach(t),mu.forEach(t),Yp=l(o),$e=a(o,"DIV",{class:!0});var Ot=s($e);f(qs.$$.fragment,Ot),Qb=l(Ot),Bs=a(Ot,"P",{});var fu=s(Bs);Jb=i(fu,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),wi=a(fu,"A",{href:!0});var Hw=s(wi);Kb=i(Hw,"TFPreTrainedModel"),Hw.forEach(t),Zb=i(fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fu.forEach(t),Yb=l(Ot),$s=a(Ot,"P",{});var _u=s($s);ev=i(_u,"This model is also a "),Fs=a(_u,"A",{href:!0,rel:!0});var Vw=s(Fs);tv=i(Vw,"tf.keras.Model"),Vw.forEach(t),ov=i(_u,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_u.forEach(t),nv=l(Ot),f(cn.$$.fragment,Ot),av=l(Ot),Ie=a(Ot,"DIV",{class:!0});var Dt=s(Ie);f(js.$$.fragment,Dt),sv=l(Dt),Mo=a(Dt,"P",{});var Ui=s(Mo);rv=i(Ui,"The "),xi=a(Ui,"A",{href:!0});var Qw=s(xi);iv=i(Qw,"TFMBartModel"),Qw.forEach(t),dv=i(Ui," forward method, overrides the "),oc=a(Ui,"CODE",{});var Jw=s(oc);lv=i(Jw,"__call__"),Jw.forEach(t),cv=i(Ui," special method."),Ui.forEach(t),pv=l(Dt),f(pn.$$.fragment,Dt),hv=l(Dt),nc=a(Dt,"P",{});var Kw=s(nc);uv=i(Kw,"Example:"),Kw.forEach(t),mv=l(Dt),f(Es.$$.fragment,Dt),Dt.forEach(t),Ot.forEach(t),eh=l(o),wo=a(o,"H2",{class:!0});var gu=s(wo);hn=a(gu,"A",{id:!0,class:!0,href:!0});var Zw=s(hn);ac=a(Zw,"SPAN",{});var Yw=s(ac);f(Ps.$$.fragment,Yw),Yw.forEach(t),Zw.forEach(t),fv=l(gu),sc=a(gu,"SPAN",{});var e0=s(sc);_v=i(e0,"TFMBartForConditionalGeneration"),e0.forEach(t),gu.forEach(t),th=l(o),Fe=a(o,"DIV",{class:!0});var Lt=s(Fe);f(Cs.$$.fragment,Lt),gv=l(Lt),Ss=a(Lt,"P",{});var ku=s(Ss);kv=i(ku,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),zi=a(ku,"A",{href:!0});var t0=s(zi);bv=i(t0,"TFPreTrainedModel"),t0.forEach(t),vv=i(ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku.forEach(t),yv=l(Lt),As=a(Lt,"P",{});var bu=s(As);Tv=i(bu,"This model is also a "),Is=a(bu,"A",{href:!0,rel:!0});var o0=s(Is);Mv=i(o0,"tf.keras.Model"),o0.forEach(t),wv=i(bu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bu.forEach(t),xv=l(Lt),f(un.$$.fragment,Lt),zv=l(Lt),ee=a(Lt,"DIV",{class:!0});var We=s(ee);f(Ns.$$.fragment,We),qv=l(We),xo=a(We,"P",{});var Xi=s(xo);Bv=i(Xi,"The "),qi=a(Xi,"A",{href:!0});var n0=s(qi);$v=i(n0,"TFMBartForConditionalGeneration"),n0.forEach(t),Fv=i(Xi," forward method, overrides the "),rc=a(Xi,"CODE",{});var a0=s(rc);jv=i(a0,"__call__"),a0.forEach(t),Ev=i(Xi," special method."),Xi.forEach(t),Pv=l(We),f(mn.$$.fragment,We),Cv=l(We),ic=a(We,"P",{});var s0=s(ic);Sv=i(s0,"Summarization example:"),s0.forEach(t),Av=l(We),f(Os.$$.fragment,We),Iv=l(We),dc=a(We,"P",{});var r0=s(dc);Nv=i(r0,"Mask filling example:"),r0.forEach(t),Ov=l(We),f(Ds.$$.fragment,We),We.forEach(t),Lt.forEach(t),oh=l(o),zo=a(o,"H2",{class:!0});var vu=s(zo);fn=a(vu,"A",{id:!0,class:!0,href:!0});var i0=s(fn);lc=a(i0,"SPAN",{});var d0=s(lc);f(Ls.$$.fragment,d0),d0.forEach(t),i0.forEach(t),Dv=l(vu),cc=a(vu,"SPAN",{});var l0=s(cc);Lv=i(l0,"FlaxMBartModel"),l0.forEach(t),vu.forEach(t),nh=l(o),W=a(o,"DIV",{class:!0});var me=s(W);f(Gs.$$.fragment,me),Gv=l(me),Ws=a(me,"P",{});var yu=s(Ws);Wv=i(yu,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Bi=a(yu,"A",{href:!0});var c0=s(Bi);Rv=i(c0,"FlaxPreTrainedModel"),c0.forEach(t),Uv=i(yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yu.forEach(t),Xv=l(me),Rs=a(me,"P",{});var Tu=s(Rs);Hv=i(Tu,`This model is also a Flax Linen
`),Us=a(Tu,"A",{href:!0,rel:!0});var p0=s(Us);Vv=i(p0,"flax.nn.Module"),p0.forEach(t),Qv=i(Tu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Tu.forEach(t),Jv=l(me),pc=a(me,"P",{});var h0=s(pc);Kv=i(h0,"Finally, this model supports inherent JAX features such as:"),h0.forEach(t),Zv=l(me),mt=a(me,"UL",{});var Fn=s(mt);hc=a(Fn,"LI",{});var u0=s(hc);Xs=a(u0,"A",{href:!0,rel:!0});var m0=s(Xs);Yv=i(m0,"Just-In-Time (JIT) compilation"),m0.forEach(t),u0.forEach(t),ey=l(Fn),uc=a(Fn,"LI",{});var f0=s(uc);Hs=a(f0,"A",{href:!0,rel:!0});var _0=s(Hs);ty=i(_0,"Automatic Differentiation"),_0.forEach(t),f0.forEach(t),oy=l(Fn),mc=a(Fn,"LI",{});var g0=s(mc);Vs=a(g0,"A",{href:!0,rel:!0});var k0=s(Vs);ny=i(k0,"Vectorization"),k0.forEach(t),g0.forEach(t),ay=l(Fn),fc=a(Fn,"LI",{});var b0=s(fc);Qs=a(b0,"A",{href:!0,rel:!0});var v0=s(Qs);sy=i(v0,"Parallelization"),v0.forEach(t),b0.forEach(t),Fn.forEach(t),ry=l(me),Ne=a(me,"DIV",{class:!0});var Gt=s(Ne);f(Js.$$.fragment,Gt),iy=l(Gt),qo=a(Gt,"P",{});var Hi=s(qo);dy=i(Hi,"The "),_c=a(Hi,"CODE",{});var y0=s(_c);ly=i(y0,"FlaxMBartPreTrainedModel"),y0.forEach(t),cy=i(Hi,"forward method, overrides the "),gc=a(Hi,"CODE",{});var T0=s(gc);py=i(T0,"__call__"),T0.forEach(t),hy=i(Hi," special method."),Hi.forEach(t),uy=l(Gt),f(_n.$$.fragment,Gt),my=l(Gt),kc=a(Gt,"P",{});var M0=s(kc);fy=i(M0,"Example:"),M0.forEach(t),_y=l(Gt),f(Ks.$$.fragment,Gt),Gt.forEach(t),gy=l(me),Mt=a(me,"DIV",{class:!0});var Vi=s(Mt);f(Zs.$$.fragment,Vi),ky=l(Vi),bc=a(Vi,"P",{});var w0=s(bc);by=i(w0,"Example:"),w0.forEach(t),vy=l(Vi),f(Ys.$$.fragment,Vi),Vi.forEach(t),yy=l(me),wt=a(me,"DIV",{class:!0});var Qi=s(wt);f(er.$$.fragment,Qi),Ty=l(Qi),vc=a(Qi,"P",{});var x0=s(vc);My=i(x0,"Example:"),x0.forEach(t),wy=l(Qi),f(tr.$$.fragment,Qi),Qi.forEach(t),me.forEach(t),ah=l(o),Bo=a(o,"H2",{class:!0});var Mu=s(Bo);gn=a(Mu,"A",{id:!0,class:!0,href:!0});var z0=s(gn);yc=a(z0,"SPAN",{});var q0=s(yc);f(or.$$.fragment,q0),q0.forEach(t),z0.forEach(t),xy=l(Mu),Tc=a(Mu,"SPAN",{});var B0=s(Tc);zy=i(B0,"FlaxMBartForConditionalGeneration"),B0.forEach(t),Mu.forEach(t),sh=l(o),R=a(o,"DIV",{class:!0});var fe=s(R);f(nr.$$.fragment,fe),qy=l(fe),ar=a(fe,"P",{});var wu=s(ar);By=i(wu,`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),$i=a(wu,"A",{href:!0});var $0=s($i);$y=i($0,"FlaxPreTrainedModel"),$0.forEach(t),Fy=i(wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wu.forEach(t),jy=l(fe),sr=a(fe,"P",{});var xu=s(sr);Ey=i(xu,`This model is also a Flax Linen
`),rr=a(xu,"A",{href:!0,rel:!0});var F0=s(rr);Py=i(F0,"flax.nn.Module"),F0.forEach(t),Cy=i(xu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),xu.forEach(t),Sy=l(fe),Mc=a(fe,"P",{});var j0=s(Mc);Ay=i(j0,"Finally, this model supports inherent JAX features such as:"),j0.forEach(t),Iy=l(fe),ft=a(fe,"UL",{});var jn=s(ft);wc=a(jn,"LI",{});var E0=s(wc);ir=a(E0,"A",{href:!0,rel:!0});var P0=s(ir);Ny=i(P0,"Just-In-Time (JIT) compilation"),P0.forEach(t),E0.forEach(t),Oy=l(jn),xc=a(jn,"LI",{});var C0=s(xc);dr=a(C0,"A",{href:!0,rel:!0});var S0=s(dr);Dy=i(S0,"Automatic Differentiation"),S0.forEach(t),C0.forEach(t),Ly=l(jn),zc=a(jn,"LI",{});var A0=s(zc);lr=a(A0,"A",{href:!0,rel:!0});var I0=s(lr);Gy=i(I0,"Vectorization"),I0.forEach(t),A0.forEach(t),Wy=l(jn),qc=a(jn,"LI",{});var N0=s(qc);cr=a(N0,"A",{href:!0,rel:!0});var O0=s(cr);Ry=i(O0,"Parallelization"),O0.forEach(t),N0.forEach(t),jn.forEach(t),Uy=l(fe),te=a(fe,"DIV",{class:!0});var Re=s(te);f(pr.$$.fragment,Re),Xy=l(Re),$o=a(Re,"P",{});var Ji=s($o);Hy=i(Ji,"The "),Bc=a(Ji,"CODE",{});var D0=s(Bc);Vy=i(D0,"FlaxMBartPreTrainedModel"),D0.forEach(t),Qy=i(Ji,"forward method, overrides the "),$c=a(Ji,"CODE",{});var L0=s($c);Jy=i(L0,"__call__"),L0.forEach(t),Ky=i(Ji," special method."),Ji.forEach(t),Zy=l(Re),f(kn.$$.fragment,Re),Yy=l(Re),Fc=a(Re,"P",{});var G0=s(Fc);eT=i(G0,"Summarization example:"),G0.forEach(t),tT=l(Re),f(hr.$$.fragment,Re),oT=l(Re),jc=a(Re,"P",{});var W0=s(jc);nT=i(W0,"Mask filling example:"),W0.forEach(t),aT=l(Re),f(ur.$$.fragment,Re),Re.forEach(t),sT=l(fe),xt=a(fe,"DIV",{class:!0});var Ki=s(xt);f(mr.$$.fragment,Ki),rT=l(Ki),Ec=a(Ki,"P",{});var R0=s(Ec);iT=i(R0,"Example:"),R0.forEach(t),dT=l(Ki),f(fr.$$.fragment,Ki),Ki.forEach(t),lT=l(fe),zt=a(fe,"DIV",{class:!0});var Zi=s(zt);f(_r.$$.fragment,Zi),cT=l(Zi),Pc=a(Zi,"P",{});var U0=s(Pc);pT=i(U0,"Example:"),U0.forEach(t),hT=l(Zi),f(gr.$$.fragment,Zi),Zi.forEach(t),fe.forEach(t),rh=l(o),Fo=a(o,"H2",{class:!0});var zu=s(Fo);bn=a(zu,"A",{id:!0,class:!0,href:!0});var X0=s(bn);Cc=a(X0,"SPAN",{});var H0=s(Cc);f(kr.$$.fragment,H0),H0.forEach(t),X0.forEach(t),uT=l(zu),Sc=a(zu,"SPAN",{});var V0=s(Sc);mT=i(V0,"FlaxMBartForSequenceClassification"),V0.forEach(t),zu.forEach(t),ih=l(o),I=a(o,"DIV",{class:!0});var oe=s(I);f(br.$$.fragment,oe),fT=l(oe),Ac=a(oe,"P",{});var Q0=s(Ac);_T=i(Q0,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Q0.forEach(t),gT=l(oe),vr=a(oe,"P",{});var qu=s(vr);kT=i(qu,"This model inherits from "),Fi=a(qu,"A",{href:!0});var J0=s(Fi);bT=i(J0,"FlaxPreTrainedModel"),J0.forEach(t),vT=i(qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qu.forEach(t),yT=l(oe),yr=a(oe,"P",{});var Bu=s(yr);TT=i(Bu,`This model is also a Flax Linen
`),Tr=a(Bu,"A",{href:!0,rel:!0});var K0=s(Tr);MT=i(K0,"flax.nn.Module"),K0.forEach(t),wT=i(Bu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Bu.forEach(t),xT=l(oe),Ic=a(oe,"P",{});var Z0=s(Ic);zT=i(Z0,"Finally, this model supports inherent JAX features such as:"),Z0.forEach(t),qT=l(oe),_t=a(oe,"UL",{});var En=s(_t);Nc=a(En,"LI",{});var Y0=s(Nc);Mr=a(Y0,"A",{href:!0,rel:!0});var ex=s(Mr);BT=i(ex,"Just-In-Time (JIT) compilation"),ex.forEach(t),Y0.forEach(t),$T=l(En),Oc=a(En,"LI",{});var tx=s(Oc);wr=a(tx,"A",{href:!0,rel:!0});var ox=s(wr);FT=i(ox,"Automatic Differentiation"),ox.forEach(t),tx.forEach(t),jT=l(En),Dc=a(En,"LI",{});var nx=s(Dc);xr=a(nx,"A",{href:!0,rel:!0});var ax=s(xr);ET=i(ax,"Vectorization"),ax.forEach(t),nx.forEach(t),PT=l(En),Lc=a(En,"LI",{});var sx=s(Lc);zr=a(sx,"A",{href:!0,rel:!0});var rx=s(zr);CT=i(rx,"Parallelization"),rx.forEach(t),sx.forEach(t),En.forEach(t),ST=l(oe),Oe=a(oe,"DIV",{class:!0});var Wt=s(Oe);f(qr.$$.fragment,Wt),AT=l(Wt),jo=a(Wt,"P",{});var Yi=s(jo);IT=i(Yi,"The "),Gc=a(Yi,"CODE",{});var ix=s(Gc);NT=i(ix,"FlaxMBartPreTrainedModel"),ix.forEach(t),OT=i(Yi,"forward method, overrides the "),Wc=a(Yi,"CODE",{});var dx=s(Wc);DT=i(dx,"__call__"),dx.forEach(t),LT=i(Yi," special method."),Yi.forEach(t),GT=l(Wt),f(vn.$$.fragment,Wt),WT=l(Wt),Rc=a(Wt,"P",{});var lx=s(Rc);RT=i(lx,"Example:"),lx.forEach(t),UT=l(Wt),f(Br.$$.fragment,Wt),Wt.forEach(t),XT=l(oe),qt=a(oe,"DIV",{class:!0});var ed=s(qt);f($r.$$.fragment,ed),HT=l(ed),Uc=a(ed,"P",{});var cx=s(Uc);VT=i(cx,"Example:"),cx.forEach(t),QT=l(ed),f(Fr.$$.fragment,ed),ed.forEach(t),JT=l(oe),Bt=a(oe,"DIV",{class:!0});var td=s(Bt);f(jr.$$.fragment,td),KT=l(td),Xc=a(td,"P",{});var px=s(Xc);ZT=i(px,"Example:"),px.forEach(t),YT=l(td),f(Er.$$.fragment,td),td.forEach(t),oe.forEach(t),dh=l(o),Eo=a(o,"H2",{class:!0});var $u=s(Eo);yn=a($u,"A",{id:!0,class:!0,href:!0});var hx=s(yn);Hc=a(hx,"SPAN",{});var ux=s(Hc);f(Pr.$$.fragment,ux),ux.forEach(t),hx.forEach(t),e1=l($u),Vc=a($u,"SPAN",{});var mx=s(Vc);t1=i(mx,"FlaxMBartForQuestionAnswering"),mx.forEach(t),$u.forEach(t),lh=l(o),N=a(o,"DIV",{class:!0});var ne=s(N);f(Cr.$$.fragment,ne),o1=l(ne),Po=a(ne,"P",{});var od=s(Po);n1=i(od,`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Qc=a(od,"CODE",{});var fx=s(Qc);a1=i(fx,"span start logits"),fx.forEach(t),s1=i(od," and "),Jc=a(od,"CODE",{});var _x=s(Jc);r1=i(_x,"span end logits"),_x.forEach(t),i1=i(od,")."),od.forEach(t),d1=l(ne),Sr=a(ne,"P",{});var Fu=s(Sr);l1=i(Fu,"This model inherits from "),ji=a(Fu,"A",{href:!0});var gx=s(ji);c1=i(gx,"FlaxPreTrainedModel"),gx.forEach(t),p1=i(Fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu.forEach(t),h1=l(ne),Ar=a(ne,"P",{});var ju=s(Ar);u1=i(ju,`This model is also a Flax Linen
`),Ir=a(ju,"A",{href:!0,rel:!0});var kx=s(Ir);m1=i(kx,"flax.nn.Module"),kx.forEach(t),f1=i(ju,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ju.forEach(t),_1=l(ne),Kc=a(ne,"P",{});var bx=s(Kc);g1=i(bx,"Finally, this model supports inherent JAX features such as:"),bx.forEach(t),k1=l(ne),gt=a(ne,"UL",{});var Pn=s(gt);Zc=a(Pn,"LI",{});var vx=s(Zc);Nr=a(vx,"A",{href:!0,rel:!0});var yx=s(Nr);b1=i(yx,"Just-In-Time (JIT) compilation"),yx.forEach(t),vx.forEach(t),v1=l(Pn),Yc=a(Pn,"LI",{});var Tx=s(Yc);Or=a(Tx,"A",{href:!0,rel:!0});var Mx=s(Or);y1=i(Mx,"Automatic Differentiation"),Mx.forEach(t),Tx.forEach(t),T1=l(Pn),ep=a(Pn,"LI",{});var wx=s(ep);Dr=a(wx,"A",{href:!0,rel:!0});var xx=s(Dr);M1=i(xx,"Vectorization"),xx.forEach(t),wx.forEach(t),w1=l(Pn),tp=a(Pn,"LI",{});var zx=s(tp);Lr=a(zx,"A",{href:!0,rel:!0});var qx=s(Lr);x1=i(qx,"Parallelization"),qx.forEach(t),zx.forEach(t),Pn.forEach(t),z1=l(ne),De=a(ne,"DIV",{class:!0});var Rt=s(De);f(Gr.$$.fragment,Rt),q1=l(Rt),Co=a(Rt,"P",{});var nd=s(Co);B1=i(nd,"The "),op=a(nd,"CODE",{});var Bx=s(op);$1=i(Bx,"FlaxMBartPreTrainedModel"),Bx.forEach(t),F1=i(nd,"forward method, overrides the "),np=a(nd,"CODE",{});var $x=s(np);j1=i($x,"__call__"),$x.forEach(t),E1=i(nd," special method."),nd.forEach(t),P1=l(Rt),f(Tn.$$.fragment,Rt),C1=l(Rt),ap=a(Rt,"P",{});var Fx=s(ap);S1=i(Fx,"Example:"),Fx.forEach(t),A1=l(Rt),f(Wr.$$.fragment,Rt),Rt.forEach(t),I1=l(ne),$t=a(ne,"DIV",{class:!0});var ad=s($t);f(Rr.$$.fragment,ad),N1=l(ad),sp=a(ad,"P",{});var jx=s(sp);O1=i(jx,"Example:"),jx.forEach(t),D1=l(ad),f(Ur.$$.fragment,ad),ad.forEach(t),L1=l(ne),Ft=a(ne,"DIV",{class:!0});var sd=s(Ft);f(Xr.$$.fragment,sd),G1=l(sd),rp=a(sd,"P",{});var Ex=s(rp);W1=i(Ex,"Example:"),Ex.forEach(t),R1=l(sd),f(Hr.$$.fragment,sd),sd.forEach(t),ne.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(Jx)),c(M,"id","mbart-and-mbart50"),c(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(M,"href","#mbart-and-mbart50"),c(v,"class","relative group"),c(ge,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ge,"rel","nofollow"),c(O,"id","overview-of-mbart"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#overview-of-mbart"),c(Q,"class","relative group"),c(J,"href","https://arxiv.org/abs/2001.08210"),c(J,"rel","nofollow"),c(ye,"href","https://huggingface.co/valhalla"),c(ye,"rel","nofollow"),c(Te,"href","https://github.com/pytorch/fairseq/tree/master/examples/mbart"),c(Te,"rel","nofollow"),c($,"id","training-of-mbart"),c($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($,"href","#training-of-mbart"),c(w,"class","relative group"),c(Cn,"href","/docs/transformers/pr_16207/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),c(Zr,"href","/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizer.as_target_tokenizer"),c(So,"id","overview-of-mbart50"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#overview-of-mbart50"),c(Yt,"class","relative group"),c(On,"href","https://arxiv.org/abs/2008.00401"),c(On,"rel","nofollow"),c(Ao,"id","training-of-mbart50"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#training-of-mbart50"),c(eo,"class","relative group"),c(ni,"href","/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBart50Tokenizer"),c(No,"id","transformers.MBartConfig"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.MBartConfig"),c(to,"class","relative group"),c(ri,"href","/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartModel"),c(Xn,"href","https://huggingface.co/facebook/mbart-large-cc25"),c(Xn,"rel","nofollow"),c(ii,"href","/docs/transformers/pr_16207/en/main_classes/configuration#transformers.PretrainedConfig"),c(di,"href","/docs/transformers/pr_16207/en/main_classes/configuration#transformers.PretrainedConfig"),c(ze,"class","docstring"),c(Oo,"id","transformers.MBartTokenizer"),c(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oo,"href","#transformers.MBartTokenizer"),c(ao,"class","relative group"),c(li,"href","/docs/transformers/pr_16207/en/model_doc/roberta#transformers.RobertaTokenizer"),c(ci,"href","/docs/transformers/pr_16207/en/model_doc/xlnet#transformers.XLNetTokenizer"),c(Jn,"href","https://github.com/google/sentencepiece"),c(Jn,"rel","nofollow"),c(Do,"class","docstring"),c(tt,"class","docstring"),c(L,"class","docstring"),c(Lo,"id","transformers.MBartTokenizerFast"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.MBartTokenizerFast"),c(so,"class","relative group"),c(ia,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(ia,"rel","nofollow"),c(pi,"href","/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartTokenizerFast"),c(hi,"href","/docs/transformers/pr_16207/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),c(ui,"href","/docs/transformers/pr_16207/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),c(Pe,"class","docstring"),c(Go,"class","docstring"),c(Wo,"class","docstring"),c(Ro,"class","docstring"),c(C,"class","docstring"),c(Uo,"id","transformers.MBart50Tokenizer"),c(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Uo,"href","#transformers.MBart50Tokenizer"),c(io,"class","relative group"),c(ya,"href","https://github.com/google/sentencepiece"),c(ya,"rel","nofollow"),c(mi,"href","/docs/transformers/pr_16207/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(ot,"class","docstring"),c(Xo,"class","docstring"),c(Ho,"class","docstring"),c(Vo,"class","docstring"),c(Qo,"class","docstring"),c(S,"class","docstring"),c(Jo,"id","transformers.MBart50TokenizerFast"),c(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jo,"href","#transformers.MBart50TokenizerFast"),c(lo,"class","relative group"),c(Aa,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(Aa,"rel","nofollow"),c(fi,"href","/docs/transformers/pr_16207/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ce,"class","docstring"),c(Ko,"class","docstring"),c(Zo,"class","docstring"),c(G,"class","docstring"),c(Yo,"id","transformers.MBartModel"),c(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yo,"href","#transformers.MBartModel"),c(po,"class","relative group"),c(_i,"href","/docs/transformers/pr_16207/en/main_classes/model#transformers.PreTrainedModel"),c(Ja,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ja,"rel","nofollow"),c(gi,"href","/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartModel"),c(Se,"class","docstring"),c(Qe,"class","docstring"),c(tn,"id","transformers.MBartForConditionalGeneration"),c(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(tn,"href","#transformers.MBartForConditionalGeneration"),c(uo,"class","relative group"),c(ki,"href","/docs/transformers/pr_16207/en/main_classes/model#transformers.PreTrainedModel"),c(ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ns,"rel","nofollow"),c(bi,"href","/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartForConditionalGeneration"),c(Z,"class","docstring"),c(Je,"class","docstring"),c(nn,"id","transformers.MBartForQuestionAnswering"),c(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(nn,"href","#transformers.MBartForQuestionAnswering"),c(fo,"class","relative group"),c(vi,"href","/docs/transformers/pr_16207/en/main_classes/model#transformers.PreTrainedModel"),c(ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ps,"rel","nofollow"),c(yi,"href","/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartForQuestionAnswering"),c(Ae,"class","docstring"),c(qe,"class","docstring"),c(sn,"id","transformers.MBartForSequenceClassification"),c(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(sn,"href","#transformers.MBartForSequenceClassification"),c(ko,"class","relative group"),c(Ti,"href","/docs/transformers/pr_16207/en/main_classes/model#transformers.PreTrainedModel"),c(ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ks,"rel","nofollow"),c(Mi,"href","/docs/transformers/pr_16207/en/model_doc/mbart#transformers.MBartForSequenceClassification"),c(Y,"class","docstring"),c(Be,"class","docstring"),c(dn,"id","transformers.MBartForCausalLM"),c(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(dn,"href","#transformers.MBartForCausalLM"),c(vo,"class","relative group"),c(Tt,"class","docstring"),c(yo,"class","docstring"),c(ln,"id","transformers.TFMBartModel"),c(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ln,"href","#transformers.TFMBartModel"),c(To,"class","relative group"),c(wi,"href","/docs/transformers/pr_16207/en/main_classes/model#transformers.TFPreTrainedModel"),c(Fs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Fs,"rel","nofollow"),c(xi,"href","/docs/transformers/pr_16207/en/model_doc/mbart#transformers.TFMBartModel"),c(Ie,"class","docstring"),c($e,"class","docstring"),c(hn,"id","transformers.TFMBartForConditionalGeneration"),c(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(hn,"href","#transformers.TFMBartForConditionalGeneration"),c(wo,"class","relative group"),c(zi,"href","/docs/transformers/pr_16207/en/main_classes/model#transformers.TFPreTrainedModel"),c(Is,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Is,"rel","nofollow"),c(qi,"href","/docs/transformers/pr_16207/en/model_doc/mbart#transformers.TFMBartForConditionalGeneration"),c(ee,"class","docstring"),c(Fe,"class","docstring"),c(fn,"id","transformers.FlaxMBartModel"),c(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fn,"href","#transformers.FlaxMBartModel"),c(zo,"class","relative group"),c(Bi,"href","/docs/transformers/pr_16207/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Us,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Us,"rel","nofollow"),c(Xs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Xs,"rel","nofollow"),c(Hs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Hs,"rel","nofollow"),c(Vs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Vs,"rel","nofollow"),c(Qs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Qs,"rel","nofollow"),c(Ne,"class","docstring"),c(Mt,"class","docstring"),c(wt,"class","docstring"),c(W,"class","docstring"),c(gn,"id","transformers.FlaxMBartForConditionalGeneration"),c(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(gn,"href","#transformers.FlaxMBartForConditionalGeneration"),c(Bo,"class","relative group"),c($i,"href","/docs/transformers/pr_16207/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(rr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(rr,"rel","nofollow"),c(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ir,"rel","nofollow"),c(dr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(dr,"rel","nofollow"),c(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(lr,"rel","nofollow"),c(cr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(cr,"rel","nofollow"),c(te,"class","docstring"),c(xt,"class","docstring"),c(zt,"class","docstring"),c(R,"class","docstring"),c(bn,"id","transformers.FlaxMBartForSequenceClassification"),c(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bn,"href","#transformers.FlaxMBartForSequenceClassification"),c(Fo,"class","relative group"),c(Fi,"href","/docs/transformers/pr_16207/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Tr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Tr,"rel","nofollow"),c(Mr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Mr,"rel","nofollow"),c(wr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(wr,"rel","nofollow"),c(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(xr,"rel","nofollow"),c(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(zr,"rel","nofollow"),c(Oe,"class","docstring"),c(qt,"class","docstring"),c(Bt,"class","docstring"),c(I,"class","docstring"),c(yn,"id","transformers.FlaxMBartForQuestionAnswering"),c(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yn,"href","#transformers.FlaxMBartForQuestionAnswering"),c(Eo,"class","relative group"),c(ji,"href","/docs/transformers/pr_16207/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ir,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ir,"rel","nofollow"),c(Nr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Nr,"rel","nofollow"),c(Or,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Or,"rel","nofollow"),c(Dr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Dr,"rel","nofollow"),c(Lr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Lr,"rel","nofollow"),c(De,"class","docstring"),c($t,"class","docstring"),c(Ft,"class","docstring"),c(N,"class","docstring")},m(o,p){e(document.head,u),h(o,z,p),h(o,v,p),e(v,M),e(M,x),_(T,x,null),e(v,y),e(v,B),e(B,st),h(o,je,p),h(o,j,p),e(j,Ue),e(Ue,_e),e(j,rt),e(j,ge),e(ge,ke),e(j,it),h(o,Ke,p),h(o,Q,p),e(Q,O),e(O,Xe),_(ae,Xe,null),e(Q,P),e(Q,A),e(A,dt),h(o,ce,p),h(o,pe,p),e(pe,lt),e(pe,J),e(J,ct),e(pe,pt),h(o,D,p),h(o,Ee,p),e(Ee,be),h(o,Ze,p),h(o,se,p),e(se,ve),e(se,ye),e(ye,ht),e(se,re),e(se,Te),e(Te,Me),h(o,Ye,p),h(o,w,p),e(w,$),e($,we),_(He,we,null),e(w,Ut),e(w,K),e(K,Xt),h(o,kt,p),h(o,X,p),e(X,ie),e(X,de),e(de,Ht),e(X,Vt),e(X,le),e(le,Qt),e(X,Jt),e(X,Ve),e(Ve,Kt),e(X,Eu),e(X,rd),e(rd,Pu),e(X,Cu),h(o,_p,p),h(o,bt,p),e(bt,Su),e(bt,Cn),e(Cn,id),e(id,Au),e(Cn,Iu),e(bt,Nu),e(bt,Zr),e(Zr,Ou),e(bt,Du),h(o,gp,p),h(o,Yr,p),e(Yr,dd),e(dd,Lu),h(o,kp,p),_(Sn,o,p),h(o,bp,p),h(o,ei,p),e(ei,An),e(An,ld),e(ld,Gu),e(An,Wu),e(An,Zt),e(Zt,Ru),e(Zt,cd),e(cd,Uu),e(Zt,Xu),e(Zt,pd),e(pd,Hu),e(Zt,Vu),h(o,vp,p),_(In,o,p),h(o,yp,p),h(o,Yt,p),e(Yt,So),e(So,hd),_(Nn,hd,null),e(Yt,Qu),e(Yt,ud),e(ud,Ju),h(o,Tp,p),h(o,vt,p),e(vt,Ku),e(vt,On),e(On,Zu),e(vt,Yu),e(vt,md),e(md,em),e(vt,tm),h(o,Mp,p),h(o,ti,p),e(ti,om),h(o,wp,p),h(o,oi,p),e(oi,fd),e(fd,nm),h(o,xp,p),h(o,eo,p),e(eo,Ao),e(Ao,_d),_(Dn,_d,null),e(eo,am),e(eo,gd),e(gd,sm),h(o,zp,p),h(o,et,p),e(et,rm),e(et,kd),e(kd,im),e(et,dm),e(et,bd),e(bd,lm),e(et,cm),e(et,vd),e(vd,pm),e(et,hm),h(o,qp,p),h(o,Io,p),e(Io,um),e(Io,ni),e(ni,mm),e(Io,fm),h(o,Bp,p),h(o,ai,p),e(ai,yd),e(yd,_m),h(o,$p,p),_(Ln,o,p),h(o,Fp,p),h(o,si,p),e(si,Gn),e(Gn,Td),e(Td,gm),e(Gn,km),e(Gn,xe),e(xe,bm),e(xe,Md),e(Md,vm),e(xe,ym),e(xe,wd),e(wd,Tm),e(xe,Mm),e(xe,xd),e(xd,wm),e(xe,xm),e(xe,zd),e(zd,zm),e(xe,qm),e(xe,qd),e(qd,Bm),e(xe,$m),h(o,jp,p),_(Wn,o,p),h(o,Ep,p),h(o,to,p),e(to,No),e(No,Bd),_(Rn,Bd,null),e(to,Fm),e(to,$d),e($d,jm),h(o,Pp,p),h(o,ze,p),_(Un,ze,null),e(ze,Em),e(ze,oo),e(oo,Pm),e(oo,ri),e(ri,Cm),e(oo,Sm),e(oo,Xn),e(Xn,Am),e(oo,Im),e(ze,Nm),e(ze,no),e(no,Om),e(no,ii),e(ii,Dm),e(no,Lm),e(no,di),e(di,Gm),e(no,Wm),e(ze,Rm),e(ze,Fd),e(Fd,Um),e(ze,Xm),_(Hn,ze,null),h(o,Cp,p),h(o,ao,p),e(ao,Oo),e(Oo,jd),_(Vn,jd,null),e(ao,Hm),e(ao,Ed),e(Ed,Vm),h(o,Sp,p),h(o,L,p),_(Qn,L,null),e(L,Qm),e(L,Pd),e(Pd,Jm),e(L,Km),e(L,ut),e(ut,Zm),e(ut,li),e(li,Ym),e(ut,ef),e(ut,ci),e(ci,tf),e(ut,of),e(ut,Jn),e(Jn,nf),e(ut,af),e(L,sf),e(L,Kn),e(Kn,rf),e(Kn,Cd),e(Cd,df),e(Kn,lf),e(L,cf),e(L,Sd),e(Sd,pf),e(L,hf),_(Zn,L,null),e(L,uf),e(L,Do),_(Yn,Do,null),e(Do,mf),e(Do,Ad),e(Ad,ff),e(L,_f),e(L,tt),_(ea,tt,null),e(tt,gf),e(tt,ta),e(ta,kf),e(ta,Id),e(Id,bf),e(ta,vf),e(tt,yf),e(tt,oa),e(oa,na),e(na,Nd),e(Nd,Tf),e(na,Mf),e(na,Od),e(Od,wf),e(oa,xf),e(oa,aa),e(aa,Dd),e(Dd,zf),e(aa,qf),e(aa,Ld),e(Ld,Bf),e(tt,$f),e(tt,Gd),e(Gd,Ff),h(o,Ap,p),h(o,so,p),e(so,Lo),e(Lo,Wd),_(sa,Wd,null),e(so,jf),e(so,Rd),e(Rd,Ef),h(o,Ip,p),h(o,C,p),_(ra,C,null),e(C,Pf),e(C,ro),e(ro,Cf),e(ro,Ud),e(Ud,Sf),e(ro,Af),e(ro,ia),e(ia,If),e(ro,Nf),e(C,Of),e(C,yt),e(yt,pi),e(pi,Df),e(yt,Lf),e(yt,hi),e(hi,Gf),e(yt,Wf),e(yt,ui),e(ui,Rf),e(yt,Uf),e(C,Xf),e(C,da),e(da,Hf),e(da,Xd),e(Xd,Vf),e(da,Qf),e(C,Jf),e(C,Hd),e(Hd,Kf),e(C,Zf),_(la,C,null),e(C,Yf),e(C,Pe),_(ca,Pe,null),e(Pe,e_),e(Pe,Vd),e(Vd,t_),e(Pe,o_),e(Pe,pa),e(pa,n_),e(pa,Qd),e(Qd,a_),e(pa,s_),e(Pe,r_),e(Pe,ha),e(ha,ua),e(ua,Jd),e(Jd,i_),e(ua,d_),e(ua,Kd),e(Kd,l_),e(ha,c_),e(ha,ma),e(ma,Zd),e(Zd,p_),e(ma,h_),e(ma,Yd),e(Yd,u_),e(Pe,m_),e(Pe,el),e(el,f_),e(C,__),e(C,Go),_(fa,Go,null),e(Go,g_),e(Go,tl),e(tl,k_),e(C,b_),e(C,Wo),_(_a,Wo,null),e(Wo,v_),e(Wo,ol),e(ol,y_),e(C,T_),e(C,Ro),_(ga,Ro,null),e(Ro,M_),e(Ro,nl),e(nl,w_),h(o,Np,p),h(o,io,p),e(io,Uo),e(Uo,al),_(ka,al,null),e(io,x_),e(io,sl),e(sl,z_),h(o,Op,p),h(o,S,p),_(ba,S,null),e(S,q_),e(S,va),e(va,B_),e(va,ya),e(ya,$_),e(va,F_),e(S,j_),e(S,Ta),e(Ta,E_),e(Ta,mi),e(mi,P_),e(Ta,C_),e(S,S_),e(S,rl),e(rl,A_),e(S,I_),_(Ma,S,null),e(S,N_),e(S,ot),_(wa,ot,null),e(ot,O_),e(ot,xa),e(xa,D_),e(xa,il),e(il,L_),e(xa,G_),e(ot,W_),e(ot,za),e(za,qa),e(qa,dl),e(dl,R_),e(qa,U_),e(qa,ll),e(ll,X_),e(za,H_),e(za,Ba),e(Ba,cl),e(cl,V_),e(Ba,Q_),e(Ba,pl),e(pl,J_),e(ot,K_),e(ot,hl),e(hl,Z_),e(S,Y_),e(S,Xo),_($a,Xo,null),e(Xo,eg),e(Xo,ul),e(ul,tg),e(S,og),e(S,Ho),_(Fa,Ho,null),e(Ho,ng),e(Ho,ja),e(ja,ag),e(ja,ml),e(ml,sg),e(ja,rg),e(S,ig),e(S,Vo),_(Ea,Vo,null),e(Vo,dg),e(Vo,fl),e(fl,lg),e(S,cg),e(S,Qo),_(Pa,Qo,null),e(Qo,pg),e(Qo,_l),e(_l,hg),h(o,Dp,p),h(o,lo,p),e(lo,Jo),e(Jo,gl),_(Ca,gl,null),e(lo,ug),e(lo,kl),e(kl,mg),h(o,Lp,p),h(o,G,p),_(Sa,G,null),e(G,fg),e(G,co),e(co,_g),e(co,bl),e(bl,gg),e(co,kg),e(co,Aa),e(Aa,bg),e(co,vg),e(G,yg),e(G,Ia),e(Ia,Tg),e(Ia,fi),e(fi,Mg),e(Ia,wg),e(G,xg),e(G,vl),e(vl,zg),e(G,qg),_(Na,G,null),e(G,Bg),e(G,Ce),_(Oa,Ce,null),e(Ce,$g),e(Ce,yl),e(yl,Fg),e(Ce,jg),e(Ce,Da),e(Da,Eg),e(Da,Tl),e(Tl,Pg),e(Da,Cg),e(Ce,Sg),e(Ce,La),e(La,Ga),e(Ga,Ml),e(Ml,Ag),e(Ga,Ig),e(Ga,wl),e(wl,Ng),e(La,Og),e(La,Wa),e(Wa,xl),e(xl,Dg),e(Wa,Lg),e(Wa,zl),e(zl,Gg),e(Ce,Wg),e(Ce,ql),e(ql,Rg),e(G,Ug),e(G,Ko),_(Ra,Ko,null),e(Ko,Xg),e(Ko,Bl),e(Bl,Hg),e(G,Vg),e(G,Zo),_(Ua,Zo,null),e(Zo,Qg),e(Zo,$l),e($l,Jg),h(o,Gp,p),h(o,po,p),e(po,Yo),e(Yo,Fl),_(Xa,Fl,null),e(po,Kg),e(po,jl),e(jl,Zg),h(o,Wp,p),h(o,Qe,p),_(Ha,Qe,null),e(Qe,Yg),e(Qe,Va),e(Va,ek),e(Va,_i),e(_i,tk),e(Va,ok),e(Qe,nk),e(Qe,Qa),e(Qa,ak),e(Qa,Ja),e(Ja,sk),e(Qa,rk),e(Qe,ik),e(Qe,Se),_(Ka,Se,null),e(Se,dk),e(Se,ho),e(ho,lk),e(ho,gi),e(gi,ck),e(ho,pk),e(ho,El),e(El,hk),e(ho,uk),e(Se,mk),_(en,Se,null),e(Se,fk),e(Se,Pl),e(Pl,_k),e(Se,gk),_(Za,Se,null),h(o,Rp,p),h(o,uo,p),e(uo,tn),e(tn,Cl),_(Ya,Cl,null),e(uo,kk),e(uo,Sl),e(Sl,bk),h(o,Up,p),h(o,Je,p),_(es,Je,null),e(Je,vk),e(Je,ts),e(ts,yk),e(ts,ki),e(ki,Tk),e(ts,Mk),e(Je,wk),e(Je,os),e(os,xk),e(os,ns),e(ns,zk),e(os,qk),e(Je,Bk),e(Je,Z),_(as,Z,null),e(Z,$k),e(Z,mo),e(mo,Fk),e(mo,bi),e(bi,jk),e(mo,Ek),e(mo,Al),e(Al,Pk),e(mo,Ck),e(Z,Sk),_(on,Z,null),e(Z,Ak),e(Z,Il),e(Il,Ik),e(Z,Nk),_(ss,Z,null),e(Z,Ok),e(Z,Nl),e(Nl,Dk),e(Z,Lk),_(rs,Z,null),h(o,Xp,p),h(o,fo,p),e(fo,nn),e(nn,Ol),_(is,Ol,null),e(fo,Gk),e(fo,Dl),e(Dl,Wk),h(o,Hp,p),h(o,qe,p),_(ds,qe,null),e(qe,Rk),e(qe,_o),e(_o,Uk),e(_o,Ll),e(Ll,Xk),e(_o,Hk),e(_o,Gl),e(Gl,Vk),e(_o,Qk),e(qe,Jk),e(qe,ls),e(ls,Kk),e(ls,vi),e(vi,Zk),e(ls,Yk),e(qe,eb),e(qe,cs),e(cs,tb),e(cs,ps),e(ps,ob),e(cs,nb),e(qe,ab),e(qe,Ae),_(hs,Ae,null),e(Ae,sb),e(Ae,go),e(go,rb),e(go,yi),e(yi,ib),e(go,db),e(go,Wl),e(Wl,lb),e(go,cb),e(Ae,pb),_(an,Ae,null),e(Ae,hb),e(Ae,Rl),e(Rl,ub),e(Ae,mb),_(us,Ae,null),h(o,Vp,p),h(o,ko,p),e(ko,sn),e(sn,Ul),_(ms,Ul,null),e(ko,fb),e(ko,Xl),e(Xl,_b),h(o,Qp,p),h(o,Be,p),_(fs,Be,null),e(Be,gb),e(Be,Hl),e(Hl,kb),e(Be,bb),e(Be,_s),e(_s,vb),e(_s,Ti),e(Ti,yb),e(_s,Tb),e(Be,Mb),e(Be,gs),e(gs,wb),e(gs,ks),e(ks,xb),e(gs,zb),e(Be,qb),e(Be,Y),_(bs,Y,null),e(Y,Bb),e(Y,bo),e(bo,$b),e(bo,Mi),e(Mi,Fb),e(bo,jb),e(bo,Vl),e(Vl,Eb),e(bo,Pb),e(Y,Cb),_(rn,Y,null),e(Y,Sb),e(Y,Ql),e(Ql,Ab),e(Y,Ib),_(vs,Y,null),e(Y,Nb),e(Y,Jl),e(Jl,Ob),e(Y,Db),_(ys,Y,null),h(o,Jp,p),h(o,vo,p),e(vo,dn),e(dn,Kl),_(Ts,Kl,null),e(vo,Lb),e(vo,Zl),e(Zl,Gb),h(o,Kp,p),h(o,yo,p),_(Ms,yo,null),e(yo,Wb),e(yo,Tt),_(ws,Tt,null),e(Tt,Rb),e(Tt,Yl),e(Yl,Ub),e(Tt,Xb),_(xs,Tt,null),h(o,Zp,p),h(o,To,p),e(To,ln),e(ln,ec),_(zs,ec,null),e(To,Hb),e(To,tc),e(tc,Vb),h(o,Yp,p),h(o,$e,p),_(qs,$e,null),e($e,Qb),e($e,Bs),e(Bs,Jb),e(Bs,wi),e(wi,Kb),e(Bs,Zb),e($e,Yb),e($e,$s),e($s,ev),e($s,Fs),e(Fs,tv),e($s,ov),e($e,nv),_(cn,$e,null),e($e,av),e($e,Ie),_(js,Ie,null),e(Ie,sv),e(Ie,Mo),e(Mo,rv),e(Mo,xi),e(xi,iv),e(Mo,dv),e(Mo,oc),e(oc,lv),e(Mo,cv),e(Ie,pv),_(pn,Ie,null),e(Ie,hv),e(Ie,nc),e(nc,uv),e(Ie,mv),_(Es,Ie,null),h(o,eh,p),h(o,wo,p),e(wo,hn),e(hn,ac),_(Ps,ac,null),e(wo,fv),e(wo,sc),e(sc,_v),h(o,th,p),h(o,Fe,p),_(Cs,Fe,null),e(Fe,gv),e(Fe,Ss),e(Ss,kv),e(Ss,zi),e(zi,bv),e(Ss,vv),e(Fe,yv),e(Fe,As),e(As,Tv),e(As,Is),e(Is,Mv),e(As,wv),e(Fe,xv),_(un,Fe,null),e(Fe,zv),e(Fe,ee),_(Ns,ee,null),e(ee,qv),e(ee,xo),e(xo,Bv),e(xo,qi),e(qi,$v),e(xo,Fv),e(xo,rc),e(rc,jv),e(xo,Ev),e(ee,Pv),_(mn,ee,null),e(ee,Cv),e(ee,ic),e(ic,Sv),e(ee,Av),_(Os,ee,null),e(ee,Iv),e(ee,dc),e(dc,Nv),e(ee,Ov),_(Ds,ee,null),h(o,oh,p),h(o,zo,p),e(zo,fn),e(fn,lc),_(Ls,lc,null),e(zo,Dv),e(zo,cc),e(cc,Lv),h(o,nh,p),h(o,W,p),_(Gs,W,null),e(W,Gv),e(W,Ws),e(Ws,Wv),e(Ws,Bi),e(Bi,Rv),e(Ws,Uv),e(W,Xv),e(W,Rs),e(Rs,Hv),e(Rs,Us),e(Us,Vv),e(Rs,Qv),e(W,Jv),e(W,pc),e(pc,Kv),e(W,Zv),e(W,mt),e(mt,hc),e(hc,Xs),e(Xs,Yv),e(mt,ey),e(mt,uc),e(uc,Hs),e(Hs,ty),e(mt,oy),e(mt,mc),e(mc,Vs),e(Vs,ny),e(mt,ay),e(mt,fc),e(fc,Qs),e(Qs,sy),e(W,ry),e(W,Ne),_(Js,Ne,null),e(Ne,iy),e(Ne,qo),e(qo,dy),e(qo,_c),e(_c,ly),e(qo,cy),e(qo,gc),e(gc,py),e(qo,hy),e(Ne,uy),_(_n,Ne,null),e(Ne,my),e(Ne,kc),e(kc,fy),e(Ne,_y),_(Ks,Ne,null),e(W,gy),e(W,Mt),_(Zs,Mt,null),e(Mt,ky),e(Mt,bc),e(bc,by),e(Mt,vy),_(Ys,Mt,null),e(W,yy),e(W,wt),_(er,wt,null),e(wt,Ty),e(wt,vc),e(vc,My),e(wt,wy),_(tr,wt,null),h(o,ah,p),h(o,Bo,p),e(Bo,gn),e(gn,yc),_(or,yc,null),e(Bo,xy),e(Bo,Tc),e(Tc,zy),h(o,sh,p),h(o,R,p),_(nr,R,null),e(R,qy),e(R,ar),e(ar,By),e(ar,$i),e($i,$y),e(ar,Fy),e(R,jy),e(R,sr),e(sr,Ey),e(sr,rr),e(rr,Py),e(sr,Cy),e(R,Sy),e(R,Mc),e(Mc,Ay),e(R,Iy),e(R,ft),e(ft,wc),e(wc,ir),e(ir,Ny),e(ft,Oy),e(ft,xc),e(xc,dr),e(dr,Dy),e(ft,Ly),e(ft,zc),e(zc,lr),e(lr,Gy),e(ft,Wy),e(ft,qc),e(qc,cr),e(cr,Ry),e(R,Uy),e(R,te),_(pr,te,null),e(te,Xy),e(te,$o),e($o,Hy),e($o,Bc),e(Bc,Vy),e($o,Qy),e($o,$c),e($c,Jy),e($o,Ky),e(te,Zy),_(kn,te,null),e(te,Yy),e(te,Fc),e(Fc,eT),e(te,tT),_(hr,te,null),e(te,oT),e(te,jc),e(jc,nT),e(te,aT),_(ur,te,null),e(R,sT),e(R,xt),_(mr,xt,null),e(xt,rT),e(xt,Ec),e(Ec,iT),e(xt,dT),_(fr,xt,null),e(R,lT),e(R,zt),_(_r,zt,null),e(zt,cT),e(zt,Pc),e(Pc,pT),e(zt,hT),_(gr,zt,null),h(o,rh,p),h(o,Fo,p),e(Fo,bn),e(bn,Cc),_(kr,Cc,null),e(Fo,uT),e(Fo,Sc),e(Sc,mT),h(o,ih,p),h(o,I,p),_(br,I,null),e(I,fT),e(I,Ac),e(Ac,_T),e(I,gT),e(I,vr),e(vr,kT),e(vr,Fi),e(Fi,bT),e(vr,vT),e(I,yT),e(I,yr),e(yr,TT),e(yr,Tr),e(Tr,MT),e(yr,wT),e(I,xT),e(I,Ic),e(Ic,zT),e(I,qT),e(I,_t),e(_t,Nc),e(Nc,Mr),e(Mr,BT),e(_t,$T),e(_t,Oc),e(Oc,wr),e(wr,FT),e(_t,jT),e(_t,Dc),e(Dc,xr),e(xr,ET),e(_t,PT),e(_t,Lc),e(Lc,zr),e(zr,CT),e(I,ST),e(I,Oe),_(qr,Oe,null),e(Oe,AT),e(Oe,jo),e(jo,IT),e(jo,Gc),e(Gc,NT),e(jo,OT),e(jo,Wc),e(Wc,DT),e(jo,LT),e(Oe,GT),_(vn,Oe,null),e(Oe,WT),e(Oe,Rc),e(Rc,RT),e(Oe,UT),_(Br,Oe,null),e(I,XT),e(I,qt),_($r,qt,null),e(qt,HT),e(qt,Uc),e(Uc,VT),e(qt,QT),_(Fr,qt,null),e(I,JT),e(I,Bt),_(jr,Bt,null),e(Bt,KT),e(Bt,Xc),e(Xc,ZT),e(Bt,YT),_(Er,Bt,null),h(o,dh,p),h(o,Eo,p),e(Eo,yn),e(yn,Hc),_(Pr,Hc,null),e(Eo,e1),e(Eo,Vc),e(Vc,t1),h(o,lh,p),h(o,N,p),_(Cr,N,null),e(N,o1),e(N,Po),e(Po,n1),e(Po,Qc),e(Qc,a1),e(Po,s1),e(Po,Jc),e(Jc,r1),e(Po,i1),e(N,d1),e(N,Sr),e(Sr,l1),e(Sr,ji),e(ji,c1),e(Sr,p1),e(N,h1),e(N,Ar),e(Ar,u1),e(Ar,Ir),e(Ir,m1),e(Ar,f1),e(N,_1),e(N,Kc),e(Kc,g1),e(N,k1),e(N,gt),e(gt,Zc),e(Zc,Nr),e(Nr,b1),e(gt,v1),e(gt,Yc),e(Yc,Or),e(Or,y1),e(gt,T1),e(gt,ep),e(ep,Dr),e(Dr,M1),e(gt,w1),e(gt,tp),e(tp,Lr),e(Lr,x1),e(N,z1),e(N,De),_(Gr,De,null),e(De,q1),e(De,Co),e(Co,B1),e(Co,op),e(op,$1),e(Co,F1),e(Co,np),e(np,j1),e(Co,E1),e(De,P1),_(Tn,De,null),e(De,C1),e(De,ap),e(ap,S1),e(De,A1),_(Wr,De,null),e(N,I1),e(N,$t),_(Rr,$t,null),e($t,N1),e($t,sp),e(sp,O1),e($t,D1),_(Ur,$t,null),e(N,L1),e(N,Ft),_(Xr,Ft,null),e(Ft,G1),e(Ft,rp),e(rp,W1),e(Ft,R1),_(Hr,Ft,null),ch=!0},p(o,[p]){const Vr={};p&2&&(Vr.$$scope={dirty:p,ctx:o}),en.$set(Vr);const ip={};p&2&&(ip.$$scope={dirty:p,ctx:o}),on.$set(ip);const dp={};p&2&&(dp.$$scope={dirty:p,ctx:o}),an.$set(dp);const lp={};p&2&&(lp.$$scope={dirty:p,ctx:o}),rn.$set(lp);const Mn={};p&2&&(Mn.$$scope={dirty:p,ctx:o}),cn.$set(Mn);const cp={};p&2&&(cp.$$scope={dirty:p,ctx:o}),pn.$set(cp);const pp={};p&2&&(pp.$$scope={dirty:p,ctx:o}),un.$set(pp);const Qr={};p&2&&(Qr.$$scope={dirty:p,ctx:o}),mn.$set(Qr);const hp={};p&2&&(hp.$$scope={dirty:p,ctx:o}),_n.$set(hp);const up={};p&2&&(up.$$scope={dirty:p,ctx:o}),kn.$set(up);const mp={};p&2&&(mp.$$scope={dirty:p,ctx:o}),vn.$set(mp);const Jr={};p&2&&(Jr.$$scope={dirty:p,ctx:o}),Tn.$set(Jr)},i(o){ch||(g(T.$$.fragment,o),g(ae.$$.fragment,o),g(He.$$.fragment,o),g(Sn.$$.fragment,o),g(In.$$.fragment,o),g(Nn.$$.fragment,o),g(Dn.$$.fragment,o),g(Ln.$$.fragment,o),g(Wn.$$.fragment,o),g(Rn.$$.fragment,o),g(Un.$$.fragment,o),g(Hn.$$.fragment,o),g(Vn.$$.fragment,o),g(Qn.$$.fragment,o),g(Zn.$$.fragment,o),g(Yn.$$.fragment,o),g(ea.$$.fragment,o),g(sa.$$.fragment,o),g(ra.$$.fragment,o),g(la.$$.fragment,o),g(ca.$$.fragment,o),g(fa.$$.fragment,o),g(_a.$$.fragment,o),g(ga.$$.fragment,o),g(ka.$$.fragment,o),g(ba.$$.fragment,o),g(Ma.$$.fragment,o),g(wa.$$.fragment,o),g($a.$$.fragment,o),g(Fa.$$.fragment,o),g(Ea.$$.fragment,o),g(Pa.$$.fragment,o),g(Ca.$$.fragment,o),g(Sa.$$.fragment,o),g(Na.$$.fragment,o),g(Oa.$$.fragment,o),g(Ra.$$.fragment,o),g(Ua.$$.fragment,o),g(Xa.$$.fragment,o),g(Ha.$$.fragment,o),g(Ka.$$.fragment,o),g(en.$$.fragment,o),g(Za.$$.fragment,o),g(Ya.$$.fragment,o),g(es.$$.fragment,o),g(as.$$.fragment,o),g(on.$$.fragment,o),g(ss.$$.fragment,o),g(rs.$$.fragment,o),g(is.$$.fragment,o),g(ds.$$.fragment,o),g(hs.$$.fragment,o),g(an.$$.fragment,o),g(us.$$.fragment,o),g(ms.$$.fragment,o),g(fs.$$.fragment,o),g(bs.$$.fragment,o),g(rn.$$.fragment,o),g(vs.$$.fragment,o),g(ys.$$.fragment,o),g(Ts.$$.fragment,o),g(Ms.$$.fragment,o),g(ws.$$.fragment,o),g(xs.$$.fragment,o),g(zs.$$.fragment,o),g(qs.$$.fragment,o),g(cn.$$.fragment,o),g(js.$$.fragment,o),g(pn.$$.fragment,o),g(Es.$$.fragment,o),g(Ps.$$.fragment,o),g(Cs.$$.fragment,o),g(un.$$.fragment,o),g(Ns.$$.fragment,o),g(mn.$$.fragment,o),g(Os.$$.fragment,o),g(Ds.$$.fragment,o),g(Ls.$$.fragment,o),g(Gs.$$.fragment,o),g(Js.$$.fragment,o),g(_n.$$.fragment,o),g(Ks.$$.fragment,o),g(Zs.$$.fragment,o),g(Ys.$$.fragment,o),g(er.$$.fragment,o),g(tr.$$.fragment,o),g(or.$$.fragment,o),g(nr.$$.fragment,o),g(pr.$$.fragment,o),g(kn.$$.fragment,o),g(hr.$$.fragment,o),g(ur.$$.fragment,o),g(mr.$$.fragment,o),g(fr.$$.fragment,o),g(_r.$$.fragment,o),g(gr.$$.fragment,o),g(kr.$$.fragment,o),g(br.$$.fragment,o),g(qr.$$.fragment,o),g(vn.$$.fragment,o),g(Br.$$.fragment,o),g($r.$$.fragment,o),g(Fr.$$.fragment,o),g(jr.$$.fragment,o),g(Er.$$.fragment,o),g(Pr.$$.fragment,o),g(Cr.$$.fragment,o),g(Gr.$$.fragment,o),g(Tn.$$.fragment,o),g(Wr.$$.fragment,o),g(Rr.$$.fragment,o),g(Ur.$$.fragment,o),g(Xr.$$.fragment,o),g(Hr.$$.fragment,o),ch=!0)},o(o){k(T.$$.fragment,o),k(ae.$$.fragment,o),k(He.$$.fragment,o),k(Sn.$$.fragment,o),k(In.$$.fragment,o),k(Nn.$$.fragment,o),k(Dn.$$.fragment,o),k(Ln.$$.fragment,o),k(Wn.$$.fragment,o),k(Rn.$$.fragment,o),k(Un.$$.fragment,o),k(Hn.$$.fragment,o),k(Vn.$$.fragment,o),k(Qn.$$.fragment,o),k(Zn.$$.fragment,o),k(Yn.$$.fragment,o),k(ea.$$.fragment,o),k(sa.$$.fragment,o),k(ra.$$.fragment,o),k(la.$$.fragment,o),k(ca.$$.fragment,o),k(fa.$$.fragment,o),k(_a.$$.fragment,o),k(ga.$$.fragment,o),k(ka.$$.fragment,o),k(ba.$$.fragment,o),k(Ma.$$.fragment,o),k(wa.$$.fragment,o),k($a.$$.fragment,o),k(Fa.$$.fragment,o),k(Ea.$$.fragment,o),k(Pa.$$.fragment,o),k(Ca.$$.fragment,o),k(Sa.$$.fragment,o),k(Na.$$.fragment,o),k(Oa.$$.fragment,o),k(Ra.$$.fragment,o),k(Ua.$$.fragment,o),k(Xa.$$.fragment,o),k(Ha.$$.fragment,o),k(Ka.$$.fragment,o),k(en.$$.fragment,o),k(Za.$$.fragment,o),k(Ya.$$.fragment,o),k(es.$$.fragment,o),k(as.$$.fragment,o),k(on.$$.fragment,o),k(ss.$$.fragment,o),k(rs.$$.fragment,o),k(is.$$.fragment,o),k(ds.$$.fragment,o),k(hs.$$.fragment,o),k(an.$$.fragment,o),k(us.$$.fragment,o),k(ms.$$.fragment,o),k(fs.$$.fragment,o),k(bs.$$.fragment,o),k(rn.$$.fragment,o),k(vs.$$.fragment,o),k(ys.$$.fragment,o),k(Ts.$$.fragment,o),k(Ms.$$.fragment,o),k(ws.$$.fragment,o),k(xs.$$.fragment,o),k(zs.$$.fragment,o),k(qs.$$.fragment,o),k(cn.$$.fragment,o),k(js.$$.fragment,o),k(pn.$$.fragment,o),k(Es.$$.fragment,o),k(Ps.$$.fragment,o),k(Cs.$$.fragment,o),k(un.$$.fragment,o),k(Ns.$$.fragment,o),k(mn.$$.fragment,o),k(Os.$$.fragment,o),k(Ds.$$.fragment,o),k(Ls.$$.fragment,o),k(Gs.$$.fragment,o),k(Js.$$.fragment,o),k(_n.$$.fragment,o),k(Ks.$$.fragment,o),k(Zs.$$.fragment,o),k(Ys.$$.fragment,o),k(er.$$.fragment,o),k(tr.$$.fragment,o),k(or.$$.fragment,o),k(nr.$$.fragment,o),k(pr.$$.fragment,o),k(kn.$$.fragment,o),k(hr.$$.fragment,o),k(ur.$$.fragment,o),k(mr.$$.fragment,o),k(fr.$$.fragment,o),k(_r.$$.fragment,o),k(gr.$$.fragment,o),k(kr.$$.fragment,o),k(br.$$.fragment,o),k(qr.$$.fragment,o),k(vn.$$.fragment,o),k(Br.$$.fragment,o),k($r.$$.fragment,o),k(Fr.$$.fragment,o),k(jr.$$.fragment,o),k(Er.$$.fragment,o),k(Pr.$$.fragment,o),k(Cr.$$.fragment,o),k(Gr.$$.fragment,o),k(Tn.$$.fragment,o),k(Wr.$$.fragment,o),k(Rr.$$.fragment,o),k(Ur.$$.fragment,o),k(Xr.$$.fragment,o),k(Hr.$$.fragment,o),ch=!1},d(o){t(u),o&&t(z),o&&t(v),b(T),o&&t(je),o&&t(j),o&&t(Ke),o&&t(Q),b(ae),o&&t(ce),o&&t(pe),o&&t(D),o&&t(Ee),o&&t(Ze),o&&t(se),o&&t(Ye),o&&t(w),b(He),o&&t(kt),o&&t(X),o&&t(_p),o&&t(bt),o&&t(gp),o&&t(Yr),o&&t(kp),b(Sn,o),o&&t(bp),o&&t(ei),o&&t(vp),b(In,o),o&&t(yp),o&&t(Yt),b(Nn),o&&t(Tp),o&&t(vt),o&&t(Mp),o&&t(ti),o&&t(wp),o&&t(oi),o&&t(xp),o&&t(eo),b(Dn),o&&t(zp),o&&t(et),o&&t(qp),o&&t(Io),o&&t(Bp),o&&t(ai),o&&t($p),b(Ln,o),o&&t(Fp),o&&t(si),o&&t(jp),b(Wn,o),o&&t(Ep),o&&t(to),b(Rn),o&&t(Pp),o&&t(ze),b(Un),b(Hn),o&&t(Cp),o&&t(ao),b(Vn),o&&t(Sp),o&&t(L),b(Qn),b(Zn),b(Yn),b(ea),o&&t(Ap),o&&t(so),b(sa),o&&t(Ip),o&&t(C),b(ra),b(la),b(ca),b(fa),b(_a),b(ga),o&&t(Np),o&&t(io),b(ka),o&&t(Op),o&&t(S),b(ba),b(Ma),b(wa),b($a),b(Fa),b(Ea),b(Pa),o&&t(Dp),o&&t(lo),b(Ca),o&&t(Lp),o&&t(G),b(Sa),b(Na),b(Oa),b(Ra),b(Ua),o&&t(Gp),o&&t(po),b(Xa),o&&t(Wp),o&&t(Qe),b(Ha),b(Ka),b(en),b(Za),o&&t(Rp),o&&t(uo),b(Ya),o&&t(Up),o&&t(Je),b(es),b(as),b(on),b(ss),b(rs),o&&t(Xp),o&&t(fo),b(is),o&&t(Hp),o&&t(qe),b(ds),b(hs),b(an),b(us),o&&t(Vp),o&&t(ko),b(ms),o&&t(Qp),o&&t(Be),b(fs),b(bs),b(rn),b(vs),b(ys),o&&t(Jp),o&&t(vo),b(Ts),o&&t(Kp),o&&t(yo),b(Ms),b(ws),b(xs),o&&t(Zp),o&&t(To),b(zs),o&&t(Yp),o&&t($e),b(qs),b(cn),b(js),b(pn),b(Es),o&&t(eh),o&&t(wo),b(Ps),o&&t(th),o&&t(Fe),b(Cs),b(un),b(Ns),b(mn),b(Os),b(Ds),o&&t(oh),o&&t(zo),b(Ls),o&&t(nh),o&&t(W),b(Gs),b(Js),b(_n),b(Ks),b(Zs),b(Ys),b(er),b(tr),o&&t(ah),o&&t(Bo),b(or),o&&t(sh),o&&t(R),b(nr),b(pr),b(kn),b(hr),b(ur),b(mr),b(fr),b(_r),b(gr),o&&t(rh),o&&t(Fo),b(kr),o&&t(ih),o&&t(I),b(br),b(qr),b(vn),b(Br),b($r),b(Fr),b(jr),b(Er),o&&t(dh),o&&t(Eo),b(Pr),o&&t(lh),o&&t(N),b(Cr),b(Gr),b(Tn),b(Wr),b(Rr),b(Ur),b(Xr),b(Hr)}}}const Jx={local:"mbart-and-mbart50",sections:[{local:"overview-of-mbart",sections:[{local:"training-of-mbart",title:"Training of MBart"}],title:"Overview of MBart"},{local:"overview-of-mbart50",sections:[{local:"training-of-mbart50",title:"Training of MBart-50"}],title:"Overview of MBart-50"},{local:"transformers.MBartConfig",title:"MBartConfig"},{local:"transformers.MBartTokenizer",title:"MBartTokenizer"},{local:"transformers.MBartTokenizerFast",title:"MBartTokenizerFast"},{local:"transformers.MBart50Tokenizer",title:"MBart50Tokenizer"},{local:"transformers.MBart50TokenizerFast",title:"MBart50TokenizerFast"},{local:"transformers.MBartModel",title:"MBartModel"},{local:"transformers.MBartForConditionalGeneration",title:"MBartForConditionalGeneration"},{local:"transformers.MBartForQuestionAnswering",title:"MBartForQuestionAnswering"},{local:"transformers.MBartForSequenceClassification",title:"MBartForSequenceClassification"},{local:"transformers.MBartForCausalLM",title:"MBartForCausalLM"},{local:"transformers.TFMBartModel",title:"TFMBartModel"},{local:"transformers.TFMBartForConditionalGeneration",title:"TFMBartForConditionalGeneration"},{local:"transformers.FlaxMBartModel",title:"FlaxMBartModel"},{local:"transformers.FlaxMBartForConditionalGeneration",title:"FlaxMBartForConditionalGeneration"},{local:"transformers.FlaxMBartForSequenceClassification",title:"FlaxMBartForSequenceClassification"},{local:"transformers.FlaxMBartForQuestionAnswering",title:"FlaxMBartForQuestionAnswering"}],title:"MBart and MBart-50"};function Kx(E,u,z){let{fw:v}=u;return E.$$set=M=>{"fw"in M&&z(0,v=M.fw)},[v]}class nz extends Px{constructor(u){super();Cx(this,u,Kx,Qx,Sx,{fw:0})}}export{nz as default,Jx as metadata};
