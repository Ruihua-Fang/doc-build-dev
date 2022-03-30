import{S as zf,i as Pf,s as jf,e as n,k as l,w as v,t as r,M as Of,c as s,d as t,m as d,a,x as b,h as i,b as c,F as e,g as f,y as w,q as y,o as L,B as k,v as Sf}from"../../chunks/vendor-6b77c823.js";import{T as it}from"../../chunks/Tip-39098574.js";import{D as te}from"../../chunks/Docstring-abef54e3.js";import{C as Qe}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ge}from"../../chunks/IconCopyLink-7a11ce68.js";function Nf(R){let p,M,u,g,$,_,T,X,I,W;return{c(){p=n("p"),M=r("TransformerXL does "),u=n("strong"),g=r("not"),$=r(" work with "),_=n("em"),T=r("torch.nn.DataParallel"),X=r(" due to a bug in PyTorch, see "),I=n("a"),W=r("issue #36035"),this.h()},l(x){p=s(x,"P",{});var z=a(p);M=i(z,"TransformerXL does "),u=s(z,"STRONG",{});var O=a(u);g=i(O,"not"),O.forEach(t),$=i(z," work with "),_=s(z,"EM",{});var K=a(_);T=i(K,"torch.nn.DataParallel"),K.forEach(t),X=i(z," due to a bug in PyTorch, see "),I=s(z,"A",{href:!0,rel:!0});var ae=a(I);W=i(ae,"issue #36035"),ae.forEach(t),z.forEach(t),this.h()},h(){c(I,"href","https://github.com/pytorch/pytorch/issues/36035"),c(I,"rel","nofollow")},m(x,z){f(x,p,z),e(p,M),e(p,u),e(u,g),e(p,$),e(p,_),e(_,T),e(p,X),e(p,I),e(I,W)},d(x){x&&t(p)}}}function Af(R){let p,M,u,g,$;return{c(){p=n("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),g=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var T=a(p);M=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(T,"CODE",{});var X=a(u);g=i(X,"Module"),X.forEach(t),$=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(_,T){f(_,p,T),e(p,M),e(p,u),e(u,g),e(p,$)},d(_){_&&t(p)}}}function Hf(R){let p,M,u,g,$;return{c(){p=n("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),g=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var T=a(p);M=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(T,"CODE",{});var X=a(u);g=i(X,"Module"),X.forEach(t),$=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(_,T){f(_,p,T),e(p,M),e(p,u),e(u,g),e(p,$)},d(_){_&&t(p)}}}function Df(R){let p,M,u,g,$;return{c(){p=n("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),g=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var T=a(p);M=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(T,"CODE",{});var X=a(u);g=i(X,"Module"),X.forEach(t),$=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(_,T){f(_,p,T),e(p,M),e(p,u),e(u,g),e(p,$)},d(_){_&&t(p)}}}function If(R){let p,M,u,g,$,_,T,X,I,W,x,z,O,K,ae,V,$e,ge,B,N,ne,re,F,C,ie,Q,_e,le,U,xe,Te,q,Xe,G,oe,fe,Z,Me,he,A,ve,j,Ee;return{c(){p=n("p"),M=r("TF 2.0 models accepts two formats as inputs:"),u=l(),g=n("ul"),$=n("li"),_=r("having all inputs as keyword arguments (like PyTorch models), or"),T=l(),X=n("li"),I=r("having all inputs as a list, tuple or dict in the first positional arguments."),W=l(),x=n("p"),z=r("This second option is useful when using "),O=n("code"),K=r("tf.keras.Model.fit"),ae=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),V=n("code"),$e=r("model(inputs)"),ge=r("."),B=l(),N=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),re=l(),F=n("ul"),C=n("li"),ie=r("a single Tensor with "),Q=n("code"),_e=r("input_ids"),le=r(" only and nothing else: "),U=n("code"),xe=r("model(inputs_ids)"),Te=l(),q=n("li"),Xe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=n("code"),oe=r("model([input_ids, attention_mask])"),fe=r(" or "),Z=n("code"),Me=r("model([input_ids, attention_mask, token_type_ids])"),he=l(),A=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=n("code"),Ee=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=s(h,"P",{});var E=a(p);M=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(h),g=s(h,"UL",{});var de=a(g);$=s(de,"LI",{});var be=a($);_=i(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),T=d(de),X=s(de,"LI",{});var Ve=a(X);I=i(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),de.forEach(t),W=d(h),x=s(h,"P",{});var H=a(x);z=i(H,"This second option is useful when using "),O=s(H,"CODE",{});var Ae=a(O);K=i(Ae,"tf.keras.Model.fit"),Ae.forEach(t),ae=i(H,` method which currently requires having all the
tensors in the first argument of the model call function: `),V=s(H,"CODE",{});var pe=a(V);$e=i(pe,"model(inputs)"),pe.forEach(t),ge=i(H,"."),H.forEach(t),B=d(h),N=s(h,"P",{});var He=a(N);ne=i(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),re=d(h),F=s(h,"UL",{});var P=a(F);C=s(P,"LI",{});var S=a(C);ie=i(S,"a single Tensor with "),Q=s(S,"CODE",{});var Ce=a(Q);_e=i(Ce,"input_ids"),Ce.forEach(t),le=i(S," only and nothing else: "),U=s(S,"CODE",{});var we=a(U);xe=i(we,"model(inputs_ids)"),we.forEach(t),S.forEach(t),Te=d(P),q=s(P,"LI",{});var J=a(q);Xe=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=s(J,"CODE",{});var ze=a(G);oe=i(ze,"model([input_ids, attention_mask])"),ze.forEach(t),fe=i(J," or "),Z=s(J,"CODE",{});var Be=a(Z);Me=i(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),J.forEach(t),he=d(P),A=s(P,"LI",{});var ye=a(A);ve=i(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=s(ye,"CODE",{});var D=a(j);Ee=i(D,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),D.forEach(t),ye.forEach(t),P.forEach(t)},m(h,E){f(h,p,E),e(p,M),f(h,u,E),f(h,g,E),e(g,$),e($,_),e(g,T),e(g,X),e(X,I),f(h,W,E),f(h,x,E),e(x,z),e(x,O),e(O,K),e(x,ae),e(x,V),e(V,$e),e(x,ge),f(h,B,E),f(h,N,E),e(N,ne),f(h,re,E),f(h,F,E),e(F,C),e(C,ie),e(C,Q),e(Q,_e),e(C,le),e(C,U),e(U,xe),e(F,Te),e(F,q),e(q,Xe),e(q,G),e(G,oe),e(q,fe),e(q,Z),e(Z,Me),e(F,he),e(F,A),e(A,ve),e(A,j),e(j,Ee)},d(h){h&&t(p),h&&t(u),h&&t(g),h&&t(W),h&&t(x),h&&t(B),h&&t(N),h&&t(re),h&&t(F)}}}function Wf(R){let p,M,u,g,$;return{c(){p=n("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),g=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var T=a(p);M=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(T,"CODE",{});var X=a(u);g=i(X,"Module"),X.forEach(t),$=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(_,T){f(_,p,T),e(p,M),e(p,u),e(u,g),e(p,$)},d(_){_&&t(p)}}}function Vf(R){let p,M,u,g,$,_,T,X,I,W,x,z,O,K,ae,V,$e,ge,B,N,ne,re,F,C,ie,Q,_e,le,U,xe,Te,q,Xe,G,oe,fe,Z,Me,he,A,ve,j,Ee;return{c(){p=n("p"),M=r("TF 2.0 models accepts two formats as inputs:"),u=l(),g=n("ul"),$=n("li"),_=r("having all inputs as keyword arguments (like PyTorch models), or"),T=l(),X=n("li"),I=r("having all inputs as a list, tuple or dict in the first positional arguments."),W=l(),x=n("p"),z=r("This second option is useful when using "),O=n("code"),K=r("tf.keras.Model.fit"),ae=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),V=n("code"),$e=r("model(inputs)"),ge=r("."),B=l(),N=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),re=l(),F=n("ul"),C=n("li"),ie=r("a single Tensor with "),Q=n("code"),_e=r("input_ids"),le=r(" only and nothing else: "),U=n("code"),xe=r("model(inputs_ids)"),Te=l(),q=n("li"),Xe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=n("code"),oe=r("model([input_ids, attention_mask])"),fe=r(" or "),Z=n("code"),Me=r("model([input_ids, attention_mask, token_type_ids])"),he=l(),A=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=n("code"),Ee=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=s(h,"P",{});var E=a(p);M=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(h),g=s(h,"UL",{});var de=a(g);$=s(de,"LI",{});var be=a($);_=i(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),T=d(de),X=s(de,"LI",{});var Ve=a(X);I=i(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),de.forEach(t),W=d(h),x=s(h,"P",{});var H=a(x);z=i(H,"This second option is useful when using "),O=s(H,"CODE",{});var Ae=a(O);K=i(Ae,"tf.keras.Model.fit"),Ae.forEach(t),ae=i(H,` method which currently requires having all the
tensors in the first argument of the model call function: `),V=s(H,"CODE",{});var pe=a(V);$e=i(pe,"model(inputs)"),pe.forEach(t),ge=i(H,"."),H.forEach(t),B=d(h),N=s(h,"P",{});var He=a(N);ne=i(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),re=d(h),F=s(h,"UL",{});var P=a(F);C=s(P,"LI",{});var S=a(C);ie=i(S,"a single Tensor with "),Q=s(S,"CODE",{});var Ce=a(Q);_e=i(Ce,"input_ids"),Ce.forEach(t),le=i(S," only and nothing else: "),U=s(S,"CODE",{});var we=a(U);xe=i(we,"model(inputs_ids)"),we.forEach(t),S.forEach(t),Te=d(P),q=s(P,"LI",{});var J=a(q);Xe=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=s(J,"CODE",{});var ze=a(G);oe=i(ze,"model([input_ids, attention_mask])"),ze.forEach(t),fe=i(J," or "),Z=s(J,"CODE",{});var Be=a(Z);Me=i(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),J.forEach(t),he=d(P),A=s(P,"LI",{});var ye=a(A);ve=i(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=s(ye,"CODE",{});var D=a(j);Ee=i(D,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),D.forEach(t),ye.forEach(t),P.forEach(t)},m(h,E){f(h,p,E),e(p,M),f(h,u,E),f(h,g,E),e(g,$),e($,_),e(g,T),e(g,X),e(X,I),f(h,W,E),f(h,x,E),e(x,z),e(x,O),e(O,K),e(x,ae),e(x,V),e(V,$e),e(x,ge),f(h,B,E),f(h,N,E),e(N,ne),f(h,re,E),f(h,F,E),e(F,C),e(C,ie),e(C,Q),e(Q,_e),e(C,le),e(C,U),e(U,xe),e(F,Te),e(F,q),e(q,Xe),e(q,G),e(G,oe),e(q,fe),e(q,Z),e(Z,Me),e(F,he),e(F,A),e(A,ve),e(A,j),e(j,Ee)},d(h){h&&t(p),h&&t(u),h&&t(g),h&&t(W),h&&t(x),h&&t(B),h&&t(N),h&&t(re),h&&t(F)}}}function Bf(R){let p,M,u,g,$;return{c(){p=n("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),g=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var T=a(p);M=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(T,"CODE",{});var X=a(u);g=i(X,"Module"),X.forEach(t),$=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(_,T){f(_,p,T),e(p,M),e(p,u),e(u,g),e(p,$)},d(_){_&&t(p)}}}function Uf(R){let p,M,u,g,$,_,T,X,I,W,x,z,O,K,ae,V,$e,ge,B,N,ne,re,F,C,ie,Q,_e,le,U,xe,Te,q,Xe,G,oe,fe,Z,Me,he,A,ve,j,Ee;return{c(){p=n("p"),M=r("TF 2.0 models accepts two formats as inputs:"),u=l(),g=n("ul"),$=n("li"),_=r("having all inputs as keyword arguments (like PyTorch models), or"),T=l(),X=n("li"),I=r("having all inputs as a list, tuple or dict in the first positional arguments."),W=l(),x=n("p"),z=r("This second option is useful when using "),O=n("code"),K=r("tf.keras.Model.fit"),ae=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),V=n("code"),$e=r("model(inputs)"),ge=r("."),B=l(),N=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),re=l(),F=n("ul"),C=n("li"),ie=r("a single Tensor with "),Q=n("code"),_e=r("input_ids"),le=r(" only and nothing else: "),U=n("code"),xe=r("model(inputs_ids)"),Te=l(),q=n("li"),Xe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=n("code"),oe=r("model([input_ids, attention_mask])"),fe=r(" or "),Z=n("code"),Me=r("model([input_ids, attention_mask, token_type_ids])"),he=l(),A=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=n("code"),Ee=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=s(h,"P",{});var E=a(p);M=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(h),g=s(h,"UL",{});var de=a(g);$=s(de,"LI",{});var be=a($);_=i(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),T=d(de),X=s(de,"LI",{});var Ve=a(X);I=i(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),de.forEach(t),W=d(h),x=s(h,"P",{});var H=a(x);z=i(H,"This second option is useful when using "),O=s(H,"CODE",{});var Ae=a(O);K=i(Ae,"tf.keras.Model.fit"),Ae.forEach(t),ae=i(H,` method which currently requires having all the
tensors in the first argument of the model call function: `),V=s(H,"CODE",{});var pe=a(V);$e=i(pe,"model(inputs)"),pe.forEach(t),ge=i(H,"."),H.forEach(t),B=d(h),N=s(h,"P",{});var He=a(N);ne=i(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),re=d(h),F=s(h,"UL",{});var P=a(F);C=s(P,"LI",{});var S=a(C);ie=i(S,"a single Tensor with "),Q=s(S,"CODE",{});var Ce=a(Q);_e=i(Ce,"input_ids"),Ce.forEach(t),le=i(S," only and nothing else: "),U=s(S,"CODE",{});var we=a(U);xe=i(we,"model(inputs_ids)"),we.forEach(t),S.forEach(t),Te=d(P),q=s(P,"LI",{});var J=a(q);Xe=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=s(J,"CODE",{});var ze=a(G);oe=i(ze,"model([input_ids, attention_mask])"),ze.forEach(t),fe=i(J," or "),Z=s(J,"CODE",{});var Be=a(Z);Me=i(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),J.forEach(t),he=d(P),A=s(P,"LI",{});var ye=a(A);ve=i(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=s(ye,"CODE",{});var D=a(j);Ee=i(D,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),D.forEach(t),ye.forEach(t),P.forEach(t)},m(h,E){f(h,p,E),e(p,M),f(h,u,E),f(h,g,E),e(g,$),e($,_),e(g,T),e(g,X),e(X,I),f(h,W,E),f(h,x,E),e(x,z),e(x,O),e(O,K),e(x,ae),e(x,V),e(V,$e),e(x,ge),f(h,B,E),f(h,N,E),e(N,ne),f(h,re,E),f(h,F,E),e(F,C),e(C,ie),e(C,Q),e(Q,_e),e(C,le),e(C,U),e(U,xe),e(F,Te),e(F,q),e(q,Xe),e(q,G),e(G,oe),e(q,fe),e(q,Z),e(Z,Me),e(F,he),e(F,A),e(A,ve),e(A,j),e(j,Ee)},d(h){h&&t(p),h&&t(u),h&&t(g),h&&t(W),h&&t(x),h&&t(B),h&&t(N),h&&t(re),h&&t(F)}}}function Rf(R){let p,M,u,g,$;return{c(){p=n("p"),M=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),g=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=s(_,"P",{});var T=a(p);M=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(T,"CODE",{});var X=a(u);g=i(X,"Module"),X.forEach(t),$=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(_,T){f(_,p,T),e(p,M),e(p,u),e(u,g),e(p,$)},d(_){_&&t(p)}}}function Kf(R){let p,M,u,g,$,_,T,X,I,W,x,z,O,K,ae,V,$e,ge,B,N,ne,re,F,C,ie,Q,_e,le,U,xe,Te,q,Xe,G,oe,fe,Z,Me,he,A,ve,j,Ee,h,E,de,be,Ve,H,Ae,pe,He,P,S,Ce,we,J,ze,Be,ye,D,Kt,Da,Ye,Ia,cn,Wa,Va,fn,Ba,Ua,Gt,Ra,Ka,Ga,lt,Ya,hn,Qa,Za,pn,Ja,er,tr,Hn,or,nr,Yt,Ws,dt,Mt,Dn,Qt,sr,In,ar,Vs,De,Zt,rr,Jt,ir,eo,lr,dr,cr,to,fr,mn,hr,pr,mr,un,oo,Bs,ct,Et,Wn,no,ur,Vn,gr,Us,ft,so,_r,Bn,Tr,Rs,ht,ao,vr,Un,br,Ks,pt,ro,wr,Rn,yr,Gs,mt,io,Lr,Kn,kr,Ys,ut,Ft,Gn,lo,$r,Yn,xr,Qs,Fe,co,Xr,Qn,Mr,Er,fo,Fr,gn,qr,Cr,zr,ho,Pr,po,jr,Or,Sr,Pe,mo,Nr,gt,Ar,_n,Hr,Dr,Zn,Ir,Wr,Vr,qt,Br,Jn,Ur,Rr,uo,Zs,_t,Ct,es,go,Kr,ts,Gr,Js,qe,_o,Yr,os,Qr,Zr,To,Jr,Tn,ei,ti,oi,vo,ni,bo,si,ai,ri,je,wo,ii,Tt,li,vn,di,ci,ns,fi,hi,pi,zt,mi,ss,ui,gi,yo,ea,vt,Pt,as,Lo,_i,rs,Ti,ta,se,ko,vi,is,bi,wi,bn,wn,yi,Li,ki,Ie,$i,ls,xi,Xi,ds,Mi,Ei,cs,Fi,qi,fs,Ci,zi,Pi,$o,ji,yn,Oi,Si,Ni,xo,Ai,Xo,Hi,Di,Ii,Y,Mo,Wi,bt,Vi,Ln,Bi,Ui,hs,Ri,Ki,Gi,jt,Yi,ps,Qi,Zi,Eo,Ji,Fo,el,ms,tl,ol,qo,nl,Co,oa,wt,Ot,us,zo,sl,gs,al,na,me,Po,rl,_s,il,ll,jo,dl,kn,cl,fl,hl,Oo,pl,So,ml,ul,gl,St,_l,Oe,No,Tl,yt,vl,$n,bl,wl,Ts,yl,Ll,kl,Nt,$l,vs,xl,Xl,Ao,sa,Lt,At,bs,Ho,Ml,ws,El,aa,ue,Do,Fl,ys,ql,Cl,Io,zl,xn,Pl,jl,Ol,Wo,Sl,Vo,Nl,Al,Hl,Ht,Dl,Se,Bo,Il,kt,Wl,Xn,Vl,Bl,Ls,Ul,Rl,Kl,Dt,Gl,ks,Yl,Ql,Uo,ra,$t,It,$s,Ro,Zl,xs,Jl,ia,ee,Ko,ed,Xs,td,od,Mn,En,nd,sd,ad,We,rd,Ms,id,ld,Es,dd,cd,Fs,fd,hd,qs,pd,md,ud,Go,gd,Fn,_d,Td,vd,Yo,bd,Qo,wd,yd,Ld,Wt,kd,Le,Zo,$d,xt,xd,qn,Xd,Md,Cs,Ed,Fd,qd,Vt,Cd,zs,zd,Pd,Jo,jd,en,la,Xt,Bt,Ps,tn,Od,js,Sd,da,on,nn,ca,sn,an,fa;return _=new Ge({}),K=new Ge({}),pe=new it({props:{warning:!0,$$slots:{default:[Nf]},$$scope:{ctx:R}}}),we=new Ge({}),Kt=new te({props:{name:"class transformers.TransfoXLConfig",anchor:"transformers.TransfoXLConfig",parameters:[{name:"vocab_size",val:" = 267735"},{name:"cutoffs",val:" = [20000, 40000, 200000]"},{name:"d_model",val:" = 1024"},{name:"d_embed",val:" = 1024"},{name:"n_head",val:" = 16"},{name:"d_head",val:" = 64"},{name:"d_inner",val:" = 4096"},{name:"div_val",val:" = 4"},{name:"pre_lnorm",val:" = False"},{name:"n_layer",val:" = 18"},{name:"mem_len",val:" = 1600"},{name:"clamp_len",val:" = 1000"},{name:"same_length",val:" = True"},{name:"proj_share_all_but_first",val:" = True"},{name:"attn_type",val:" = 0"},{name:"sample_softmax",val:" = -1"},{name:"adaptive",val:" = True"},{name:"dropout",val:" = 0.1"},{name:"dropatt",val:" = 0.0"},{name:"untie_r",val:" = True"},{name:"init",val:" = 'normal'"},{name:"init_range",val:" = 0.01"},{name:"proj_init_std",val:" = 0.01"},{name:"init_std",val:" = 0.02"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"eos_token_id",val:" = 0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/configuration_transfo_xl.py#L29",parametersDescription:[{anchor:"transformers.TransfoXLConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 267735) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLModel">TransfoXLModel</a> or <a href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TFTransfoXLModel">TFTransfoXLModel</a>.`,name:"vocab_size"},{anchor:"transformers.TransfoXLConfig.cutoffs",description:`<strong>cutoffs</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[20000, 40000, 200000]</code>) &#x2014;
Cutoffs for the adaptive softmax.`,name:"cutoffs"},{anchor:"transformers.TransfoXLConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the model&#x2019;s hidden states.`,name:"d_model"},{anchor:"transformers.TransfoXLConfig.d_embed",description:`<strong>d_embed</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the embeddings`,name:"d_embed"},{anchor:"transformers.TransfoXLConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.TransfoXLConfig.d_head",description:`<strong>d_head</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Dimensionality of the model&#x2019;s heads.`,name:"d_head"},{anchor:"transformers.TransfoXLConfig.d_inner",description:`<strong>d_inner</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Inner dimension in FF`,name:"d_inner"},{anchor:"transformers.TransfoXLConfig.div_val",description:`<strong>div_val</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Divident value for adapative input and softmax`,name:"div_val"},{anchor:"transformers.TransfoXLConfig.pre_lnorm",description:`<strong>pre_lnorm</strong> (<code>boolean</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to apply LayerNorm to the input instead of the output in the blocks.`,name:"pre_lnorm"},{anchor:"transformers.TransfoXLConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 18) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.TransfoXLConfig.mem_len",description:`<strong>mem_len</strong> (<code>int</code>, <em>optional</em>, defaults to 1600) &#x2014;
Length of the retained previous heads.`,name:"mem_len"},{anchor:"transformers.TransfoXLConfig.clamp_len",description:`<strong>clamp_len</strong> (<code>int</code>, <em>optional</em>, defaults to 1000) &#x2014;
Use the same pos embeddings after clamp_len.`,name:"clamp_len"},{anchor:"transformers.TransfoXLConfig.same_length",description:`<strong>same_length</strong> (<code>boolean</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use the same attn length for all tokens`,name:"same_length"},{anchor:"transformers.TransfoXLConfig.proj_share_all_but_first",description:`<strong>proj_share_all_but_first</strong> (<code>boolean</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
True to share all but first projs, False not to share.`,name:"proj_share_all_but_first"},{anchor:"transformers.TransfoXLConfig.attn_type",description:`<strong>attn_type</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Attention type. 0 for Transformer-XL, 1 for Shaw et al, 2 for Vaswani et al, 3 for Al Rfou et al.`,name:"attn_type"},{anchor:"transformers.TransfoXLConfig.sample_softmax",description:`<strong>sample_softmax</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
Number of samples in the sampled softmax.`,name:"sample_softmax"},{anchor:"transformers.TransfoXLConfig.adaptive",description:`<strong>adaptive</strong> (<code>boolean</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use adaptive softmax.`,name:"adaptive"},{anchor:"transformers.TransfoXLConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.TransfoXLConfig.dropatt",description:`<strong>dropatt</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"dropatt"},{anchor:"transformers.TransfoXLConfig.untie_r",description:`<strong>untie_r</strong> (<code>boolean</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether ot not to untie relative position biases.`,name:"untie_r"},{anchor:"transformers.TransfoXLConfig.init",description:`<strong>init</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;normal&quot;</code>) &#x2014;
Parameter initializer to use.`,name:"init"},{anchor:"transformers.TransfoXLConfig.init_range",description:`<strong>init_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.01) &#x2014;
Parameters initialized by U(-init_range, init_range).`,name:"init_range"},{anchor:"transformers.TransfoXLConfig.proj_init_std",description:`<strong>proj_init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.01) &#x2014;
Parameters initialized by N(0, init_std)`,name:"proj_init_std"},{anchor:"transformers.TransfoXLConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
Parameters initialized by N(0, init_std)`,name:"init_std"},{anchor:"transformers.TransfoXLConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers`,name:"layer_norm_epsilon"}]}}),Yt=new Qe({props:{code:`from transformers import TransfoXLConfig, TransfoXLModel

# Initializing a Transformer XL configuration
configuration = TransfoXLConfig()

# Initializing a model from the configuration
model = TransfoXLModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLConfig, TransfoXLModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Transformer XL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = TransfoXLConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TransfoXLModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Qt=new Ge({}),Zt=new te({props:{name:"class transformers.TransfoXLTokenizer",anchor:"transformers.TransfoXLTokenizer",parameters:[{name:"special",val:" = None"},{name:"min_freq",val:" = 0"},{name:"max_size",val:" = None"},{name:"lower_case",val:" = False"},{name:"delimiter",val:" = None"},{name:"vocab_file",val:" = None"},{name:"pretrained_vocab_file",val:": str = None"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"eos_token",val:" = '<eos>'"},{name:"additional_special_tokens",val:" = ['<formula>']"},{name:"language",val:" = 'en'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/tokenization_transfo_xl.py#L114",parametersDescription:[{anchor:"transformers.TransfoXLTokenizer.special",description:`<strong>special</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
A list of special tokens (to be treated by the original implementation of this tokenizer).`,name:"special"},{anchor:"transformers.TransfoXLTokenizer.min_freq",description:`<strong>min_freq</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The minimum number of times a token has to be present in order to be kept in the vocabulary (otherwise it
will be mapped to <code>unk_token</code>).`,name:"min_freq"},{anchor:"transformers.TransfoXLTokenizer.max_size",description:`<strong>max_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum size of the vocabulary. If left unset, it will default to the size of the vocabulary found
after excluding the tokens according to the <code>min_freq</code> rule.`,name:"max_size"},{anchor:"transformers.TransfoXLTokenizer.lower_case",description:`<strong>lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"lower_case"},{anchor:"transformers.TransfoXLTokenizer.delimiter",description:`<strong>delimiter</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The delimiter used between tokens.`,name:"delimiter"},{anchor:"transformers.TransfoXLTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>, <em>optional</em>) &#x2014;
File containing the vocabulary (from the original implementation).`,name:"vocab_file"},{anchor:"transformers.TransfoXLTokenizer.pretrained_vocab_file",description:`<strong>pretrained_vocab_file</strong> (<code>str</code>, <em>optional</em>) &#x2014;
File containing the vocabulary as saved with the <code>save_pretrained()</code> method.`,name:"pretrained_vocab_file"},{anchor:"transformers.TransfoXLTokenizer.never_split",description:`<strong>never_split</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
List of tokens that should never be split. If no list is specified, will simply use the existing special
tokens.`,name:"never_split"},{anchor:"transformers.TransfoXLTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.TransfoXLTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;eos&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.TransfoXLTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;formula&gt;&quot;]</code>) &#x2014;
A list of additional special tokens (for the HuggingFace functionality).`,name:"additional_special_tokens"},{anchor:"transformers.TransfoXLTokenizer.language",description:`<strong>language</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;en&quot;</code>) &#x2014;
The language of this tokenizer (used for mose preprocessing).`,name:"language"}]}}),oo=new te({props:{name:"save_vocabulary",anchor:"transformers.TransfoXLTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/tokenization_transfo_xl.py#L300"}}),no=new Ge({}),so=new te({props:{name:"class transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput",anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"mems",val:": typing.List[torch.FloatTensor] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L607",parametersDescription:[{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.`,name:"mems"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),ao=new te({props:{name:"class transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput",anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput",parameters:[{name:"losses",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_scores",val:": FloatTensor = None"},{name:"mems",val:": typing.List[torch.FloatTensor] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L672",parametersDescription:[{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput.losses",description:`<strong>losses</strong> (<code>torch.FloatTensor</code> of shape <em>(batch_size, sequence_length-1)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling losses (not reduced).`,name:"losses"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput.prediction_scores",description:`<strong>prediction_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token after SoftMax).`,name:"prediction_scores"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.`,name:"mems"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"},{anchor:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>()</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Reduced language modeling loss.`,name:"loss"}]}}),ro=new te({props:{name:"class transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput",anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"mems",val:": typing.List[tensorflow.python.framework.ops.Tensor] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L701",parametersDescription:[{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.`,name:"mems"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),io=new te({props:{name:"class transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput",anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput",parameters:[{name:"prediction_scores",val:": Tensor = None"},{name:"mems",val:": typing.List[tensorflow.python.framework.ops.Tensor] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L732",parametersDescription:[{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput.losses",description:`<strong>losses</strong> (<code>tf.Tensor</code> of shape <em>(batch_size, sequence_length-1)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling losses (not reduced).`,name:"losses"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput.prediction_scores",description:`<strong>prediction_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token after SoftMax).`,name:"prediction_scores"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.`,name:"mems"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),lo=new Ge({}),co=new te({props:{name:"class transformers.TransfoXLModel",anchor:"transformers.TransfoXLModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L771",parametersDescription:[{anchor:"transformers.TransfoXLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLConfig">TransfoXLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16501/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),mo=new te({props:{name:"forward",anchor:"transformers.TransfoXLModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"mems",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L875",parametersDescription:[{anchor:"transformers.TransfoXLModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLTokenizer">TransfoXLTokenizer</a>. See <a href="/docs/transformers/pr_16501/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16501/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TransfoXLModel.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>mems</code> output below). Can be used to speed up sequential decoding. The token ids which have their mems
given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"mems"},{anchor:"transformers.TransfoXLModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TransfoXLModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TransfoXLModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TransfoXLModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TransfoXLModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16501/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput"
>transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLConfig"
>TransfoXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.</p>
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
`,returnType:`
<p><a
  href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput"
>transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qt=new it({props:{$$slots:{default:[Af]},$$scope:{ctx:R}}}),uo=new Qe({props:{code:`from transformers import TransfoXLTokenizer, TransfoXLModel
import torch

tokenizer = TransfoXLTokenizer.from_pretrained("transfo-xl-wt103")
model = TransfoXLModel.from_pretrained("transfo-xl-wt103")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TransfoXLModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TransfoXLModel.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),go=new Ge({}),_o=new te({props:{name:"class transformers.TransfoXLLMHeadModel",anchor:"transformers.TransfoXLLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L1013",parametersDescription:[{anchor:"transformers.TransfoXLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLConfig">TransfoXLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16501/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),wo=new te({props:{name:"forward",anchor:"transformers.TransfoXLLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"mems",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L1065",parametersDescription:[{anchor:"transformers.TransfoXLLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLTokenizer">TransfoXLTokenizer</a>. See <a href="/docs/transformers/pr_16501/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16501/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TransfoXLLMHeadModel.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>mems</code> output below). Can be used to speed up sequential decoding. The token ids which have their mems
given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"mems"},{anchor:"transformers.TransfoXLLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TransfoXLLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TransfoXLLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TransfoXLLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TransfoXLLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16501/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TransfoXLLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput"
>transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLConfig"
>TransfoXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>losses</strong> (<code>torch.FloatTensor</code> of shape <em>(batch_size, sequence_length-1)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling losses (not reduced).</p>
</li>
<li>
<p><strong>prediction_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token after SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.</p>
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
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>()</code>, <em>optional</em>, returned when <code>labels</code> is provided)
Reduced language modeling loss.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput"
>transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLLMHeadModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zt=new it({props:{$$slots:{default:[Hf]},$$scope:{ctx:R}}}),yo=new Qe({props:{code:`import torch
from transformers import TransfoXLTokenizer, TransfoXLLMHeadModel

tokenizer = TransfoXLTokenizer.from_pretrained("transfo-xl-wt103")
model = TransfoXLLMHeadModel.from_pretrained("transfo-xl-wt103")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TransfoXLLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TransfoXLLMHeadModel.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Lo=new Ge({}),ko=new te({props:{name:"class transformers.TransfoXLForSequenceClassification",anchor:"transformers.TransfoXLForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L1198",parametersDescription:[{anchor:"transformers.TransfoXLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLConfig">TransfoXLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16501/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Mo=new te({props:{name:"forward",anchor:"transformers.TransfoXLForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L1209",parametersDescription:[{anchor:"transformers.TransfoXLForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLTokenizer">TransfoXLTokenizer</a>. See <a href="/docs/transformers/pr_16501/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16501/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>mems</code> output below). Can be used to speed up sequential decoding. The token ids which have their mems
given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"mems"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16501/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TransfoXLForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <code>transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLSequenceClassifierOutputWithPast</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLConfig"
>TransfoXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.</p>
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
`,returnType:`
<p><code>transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLSequenceClassifierOutputWithPast</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),jt=new it({props:{$$slots:{default:[Df]},$$scope:{ctx:R}}}),Eo=new Qe({props:{code:`import torch
from transformers import TransfoXLTokenizer, TransfoXLForSequenceClassification

tokenizer = TransfoXLTokenizer.from_pretrained("transfo-xl-wt103")
model = TransfoXLForSequenceClassification.from_pretrained("transfo-xl-wt103")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TransfoXLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TransfoXLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Fo=new Qe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TransfoXLForSequenceClassification.from_pretrained("transfo-xl-wt103", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TransfoXLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),qo=new Qe({props:{code:`import torch
from transformers import TransfoXLTokenizer, TransfoXLForSequenceClassification

tokenizer = TransfoXLTokenizer.from_pretrained("transfo-xl-wt103")
model = TransfoXLForSequenceClassification.from_pretrained("transfo-xl-wt103", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TransfoXLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TransfoXLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Co=new Qe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TransfoXLForSequenceClassification.from_pretrained("transfo-xl-wt103", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TransfoXLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),zo=new Ge({}),Po=new te({props:{name:"class transformers.TFTransfoXLModel",anchor:"transformers.TFTransfoXLModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L878",parametersDescription:[{anchor:"transformers.TFTransfoXLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLConfig">TransfoXLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16501/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),St=new it({props:{$$slots:{default:[If]},$$scope:{ctx:R}}}),No=new te({props:{name:"call",anchor:"transformers.TFTransfoXLModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"mems",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L883",parametersDescription:[{anchor:"transformers.TFTransfoXLModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16501/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16501/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16501/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTransfoXLModel.call.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>mems</code> output below). Can be used to speed up sequential decoding. The token ids which have their mems
given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"mems"},{anchor:"transformers.TFTransfoXLModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTransfoXLModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTransfoXLModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTransfoXLModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTransfoXLModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16501/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTransfoXLModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput"
>transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLConfig"
>TransfoXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.</p>
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
  href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput"
>transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Nt=new it({props:{$$slots:{default:[Wf]},$$scope:{ctx:R}}}),Ao=new Qe({props:{code:`from transformers import TransfoXLTokenizer, TFTransfoXLModel
import tensorflow as tf

tokenizer = TransfoXLTokenizer.from_pretrained("transfo-xl-wt103")
model = TFTransfoXLModel.from_pretrained("transfo-xl-wt103")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TFTransfoXLModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTransfoXLModel.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ho=new Ge({}),Do=new te({props:{name:"class transformers.TFTransfoXLLMHeadModel",anchor:"transformers.TFTransfoXLLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L935",parametersDescription:[{anchor:"transformers.TFTransfoXLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLConfig">TransfoXLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16501/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ht=new it({props:{$$slots:{default:[Vf]},$$scope:{ctx:R}}}),Bo=new te({props:{name:"call",anchor:"transformers.TFTransfoXLLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"mems",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L963",parametersDescription:[{anchor:"transformers.TFTransfoXLLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16501/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16501/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16501/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>mems</code> output below). Can be used to speed up sequential decoding. The token ids which have their mems
given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"mems"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16501/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTransfoXLLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput"
>transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLConfig"
>TransfoXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>losses</strong> (<code>tf.Tensor</code> of shape <em>(batch_size, sequence_length-1)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling losses (not reduced).</p>
</li>
<li>
<p><strong>prediction_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token after SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.</p>
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
  href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput"
>transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLLMHeadModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Dt=new it({props:{$$slots:{default:[Bf]},$$scope:{ctx:R}}}),Uo=new Qe({props:{code:`from transformers import TransfoXLTokenizer, TFTransfoXLLMHeadModel
import tensorflow as tf

tokenizer = TransfoXLTokenizer.from_pretrained("transfo-xl-wt103")
model = TFTransfoXLLMHeadModel.from_pretrained("transfo-xl-wt103")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TFTransfoXLLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTransfoXLLMHeadModel.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ro=new Ge({}),Ko=new te({props:{name:"class transformers.TFTransfoXLForSequenceClassification",anchor:"transformers.TFTransfoXLForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L1057",parametersDescription:[{anchor:"transformers.TFTransfoXLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLConfig">TransfoXLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16501/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Wt=new it({props:{$$slots:{default:[Uf]},$$scope:{ctx:R}}}),Zo=new te({props:{name:"call",anchor:"transformers.TFTransfoXLForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L1072",parametersDescription:[{anchor:"transformers.TFTransfoXLForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16501/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16501/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16501/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>mems</code> output below). Can be used to speed up sequential decoding. The token ids which have their mems
given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"mems"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16501/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTransfoXLForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <code>transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLSequenceClassifierOutputWithPast</code>or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLConfig"
>TransfoXLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states (key and values in the attention blocks). Can be used (see <code>mems</code>
input) to speed up sequential decoding. The token ids which have their past given to this model should not
be passed as input ids as they have already been computed.</p>
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
<p><code>transformers.models.transfo_xl.modeling_tf_transfo_xl.TFTransfoXLSequenceClassifierOutputWithPast</code>or <code>tuple(tf.Tensor)</code></p>
`}}),Vt=new it({props:{$$slots:{default:[Rf]},$$scope:{ctx:R}}}),Jo=new Qe({props:{code:`from transformers import TransfoXLTokenizer, TFTransfoXLForSequenceClassification
import tensorflow as tf

tokenizer = TransfoXLTokenizer.from_pretrained("transfo-xl-wt103")
model = TFTransfoXLForSequenceClassification.from_pretrained("transfo-xl-wt103")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TransfoXLTokenizer, TFTransfoXLForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TransfoXLTokenizer.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTransfoXLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),en=new Qe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFTransfoXLForSequenceClassification.from_pretrained("transfo-xl-wt103", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTransfoXLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;transfo-xl-wt103&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),tn=new Ge({}),nn=new te({props:{name:"class transformers.AdaptiveEmbedding",anchor:"transformers.AdaptiveEmbedding",parameters:[{name:"n_token",val:""},{name:"d_embed",val:""},{name:"d_proj",val:""},{name:"cutoffs",val:""},{name:"div_val",val:" = 1"},{name:"sample_softmax",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/modeling_transfo_xl.py#L405"}}),an=new te({props:{name:"class transformers.TFAdaptiveEmbedding",anchor:"transformers.TFAdaptiveEmbedding",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16501/src/transformers/models/transfo_xl/modeling_tf_transfo_xl.py#L343"}}),{c(){p=n("meta"),M=l(),u=n("h1"),g=n("a"),$=n("span"),v(_.$$.fragment),T=l(),X=n("span"),I=r("Transformer XL"),W=l(),x=n("h2"),z=n("a"),O=n("span"),v(K.$$.fragment),ae=l(),V=n("span"),$e=r("Overview"),ge=l(),B=n("p"),N=r("The Transformer-XL model was proposed in "),ne=n("a"),re=r("Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context"),F=r(` by Zihang Dai, Zhilin Yang, Yiming Yang, Jaime Carbonell, Quoc V. Le, Ruslan
Salakhutdinov. It\u2019s a causal (uni-directional) transformer with relative positioning (sinuso\xEFdal) embeddings which can
reuse previously computed hidden-states to attend to longer context (memory). This model also uses adaptive softmax
inputs and outputs (tied).`),C=l(),ie=n("p"),Q=r("The abstract from the paper is the following:"),_e=l(),le=n("p"),U=n("em"),xe=r(`Transformers have a potential of learning longer-term dependency, but are limited by a fixed-length context in the
setting of language modeling. We propose a novel neural architecture Transformer-XL that enables learning dependency
beyond a fixed length without disrupting temporal coherence. It consists of a segment-level recurrence mechanism and a
novel positional encoding scheme. Our method not only enables capturing longer-term dependency, but also resolves the
context fragmentation problem. As a result, Transformer-XL learns dependency that is 80% longer than RNNs and 450%
longer than vanilla Transformers, achieves better performance on both short and long sequences, and is up to 1,800+
times faster than vanilla Transformers during evaluation. Notably, we improve the state-of-the-art results of
bpc/perplexity to 0.99 on enwiki8, 1.08 on text8, 18.3 on WikiText-103, 21.8 on One Billion Word, and 54.5 on Penn
Treebank (without finetuning). When trained only on WikiText-103, Transformer-XL manages to generate reasonably
coherent, novel text articles with thousands of tokens.`),Te=l(),q=n("p"),Xe=r("Tips:"),G=l(),oe=n("ul"),fe=n("li"),Z=r(`Transformer-XL uses relative sinusoidal positional embeddings. Padding can be done on the left or on the right. The
original implementation trains on SQuAD with padding on the left, therefore the padding defaults are set to left.`),Me=l(),he=n("li"),A=r("Transformer-XL is one of the few models that has no sequence length limit."),ve=l(),j=n("p"),Ee=r("This model was contributed by "),h=n("a"),E=r("thomwolf"),de=r(". The original code can be found "),be=n("a"),Ve=r("here"),H=r("."),Ae=l(),v(pe.$$.fragment),He=l(),P=n("h2"),S=n("a"),Ce=n("span"),v(we.$$.fragment),J=l(),ze=n("span"),Be=r("TransfoXLConfig"),ye=l(),D=n("div"),v(Kt.$$.fragment),Da=l(),Ye=n("p"),Ia=r("This is the configuration class to store the configuration of a "),cn=n("a"),Wa=r("TransfoXLModel"),Va=r(" or a "),fn=n("a"),Ba=r("TFTransfoXLModel"),Ua=r(`. It is
used to instantiate a Transformer-XL model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the `),Gt=n("a"),Ra=r(`Transformer
XL`),Ka=r(" architecture."),Ga=l(),lt=n("p"),Ya=r("Configuration objects inherit from "),hn=n("a"),Qa=r("PretrainedConfig"),Za=r(` and can be used to control the model outputs. Read the
documentation from `),pn=n("a"),Ja=r("PretrainedConfig"),er=r(" for more information."),tr=l(),Hn=n("p"),or=r("Examples:"),nr=l(),v(Yt.$$.fragment),Ws=l(),dt=n("h2"),Mt=n("a"),Dn=n("span"),v(Qt.$$.fragment),sr=l(),In=n("span"),ar=r("TransfoXLTokenizer"),Vs=l(),De=n("div"),v(Zt.$$.fragment),rr=l(),Jt=n("p"),ir=r("Construct a Transformer-XL tokenizer adapted from Vocab class in "),eo=n("a"),lr=r(`the original
code`),dr=r(`. The Transformer-XL tokenizer is a word-level tokenizer (no
sub-word tokenization).`),cr=l(),to=n("p"),fr=r("This tokenizer inherits from "),mn=n("a"),hr=r("PreTrainedTokenizer"),pr=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),mr=l(),un=n("div"),v(oo.$$.fragment),Bs=l(),ct=n("h2"),Et=n("a"),Wn=n("span"),v(no.$$.fragment),ur=l(),Vn=n("span"),gr=r("TransfoXL specific outputs"),Us=l(),ft=n("div"),v(so.$$.fragment),_r=l(),Bn=n("p"),Tr=r("Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),Rs=l(),ht=n("div"),v(ao.$$.fragment),vr=l(),Un=n("p"),br=r("Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),Ks=l(),pt=n("div"),v(ro.$$.fragment),wr=l(),Rn=n("p"),yr=r("Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),Gs=l(),mt=n("div"),v(io.$$.fragment),Lr=l(),Kn=n("p"),kr=r("Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),Ys=l(),ut=n("h2"),Ft=n("a"),Gn=n("span"),v(lo.$$.fragment),$r=l(),Yn=n("span"),xr=r("TransfoXLModel"),Qs=l(),Fe=n("div"),v(co.$$.fragment),Xr=l(),Qn=n("p"),Mr=r("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Er=l(),fo=n("p"),Fr=r("This model inherits from "),gn=n("a"),qr=r("PreTrainedModel"),Cr=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zr=l(),ho=n("p"),Pr=r("This model is also a PyTorch "),po=n("a"),jr=r("torch.nn.Module"),Or=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sr=l(),Pe=n("div"),v(mo.$$.fragment),Nr=l(),gt=n("p"),Ar=r("The "),_n=n("a"),Hr=r("TransfoXLModel"),Dr=r(" forward method, overrides the "),Zn=n("code"),Ir=r("__call__"),Wr=r(" special method."),Vr=l(),v(qt.$$.fragment),Br=l(),Jn=n("p"),Ur=r("Example:"),Rr=l(),v(uo.$$.fragment),Zs=l(),_t=n("h2"),Ct=n("a"),es=n("span"),v(go.$$.fragment),Kr=l(),ts=n("span"),Gr=r("TransfoXLLMHeadModel"),Js=l(),qe=n("div"),v(_o.$$.fragment),Yr=l(),os=n("p"),Qr=r(`The Transformer-XL Model with a language modeling head on top (adaptive softmax with weights tied to the adaptive
input embeddings)`),Zr=l(),To=n("p"),Jr=r("This model inherits from "),Tn=n("a"),ei=r("PreTrainedModel"),ti=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oi=l(),vo=n("p"),ni=r("This model is also a PyTorch "),bo=n("a"),si=r("torch.nn.Module"),ai=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ri=l(),je=n("div"),v(wo.$$.fragment),ii=l(),Tt=n("p"),li=r("The "),vn=n("a"),di=r("TransfoXLLMHeadModel"),ci=r(" forward method, overrides the "),ns=n("code"),fi=r("__call__"),hi=r(" special method."),pi=l(),v(zt.$$.fragment),mi=l(),ss=n("p"),ui=r("Example:"),gi=l(),v(yo.$$.fragment),ea=l(),vt=n("h2"),Pt=n("a"),as=n("span"),v(Lo.$$.fragment),_i=l(),rs=n("span"),Ti=r("TransfoXLForSequenceClassification"),ta=l(),se=n("div"),v(ko.$$.fragment),vi=l(),is=n("p"),bi=r("The Transformer-XL Model transformer with a sequence classification head on top (linear layer)."),wi=l(),bn=n("p"),wn=n("a"),yi=r("TransfoXLForSequenceClassification"),Li=r(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-1) do.`),ki=l(),Ie=n("p"),$i=r(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ls=n("code"),xi=r("pad_token_id"),Xi=r(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),ds=n("code"),Mi=r("pad_token_id"),Ei=r(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),cs=n("code"),Fi=r("inputs_embeds"),qi=r(" are passed instead of "),fs=n("code"),Ci=r("input_ids"),zi=r(`, it does the same (take the last value in
each row of the batch).`),Pi=l(),$o=n("p"),ji=r("This model inherits from "),yn=n("a"),Oi=r("PreTrainedModel"),Si=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ni=l(),xo=n("p"),Ai=r("This model is also a PyTorch "),Xo=n("a"),Hi=r("torch.nn.Module"),Di=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ii=l(),Y=n("div"),v(Mo.$$.fragment),Wi=l(),bt=n("p"),Vi=r("The "),Ln=n("a"),Bi=r("TransfoXLForSequenceClassification"),Ui=r(" forward method, overrides the "),hs=n("code"),Ri=r("__call__"),Ki=r(" special method."),Gi=l(),v(jt.$$.fragment),Yi=l(),ps=n("p"),Qi=r("Example of single-label classification:"),Zi=l(),v(Eo.$$.fragment),Ji=l(),v(Fo.$$.fragment),el=l(),ms=n("p"),tl=r("Example of multi-label classification:"),ol=l(),v(qo.$$.fragment),nl=l(),v(Co.$$.fragment),oa=l(),wt=n("h2"),Ot=n("a"),us=n("span"),v(zo.$$.fragment),sl=l(),gs=n("span"),al=r("TFTransfoXLModel"),na=l(),me=n("div"),v(Po.$$.fragment),rl=l(),_s=n("p"),il=r("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),ll=l(),jo=n("p"),dl=r("This model inherits from "),kn=n("a"),cl=r("TFPreTrainedModel"),fl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hl=l(),Oo=n("p"),pl=r("This model is also a "),So=n("a"),ml=r("tf.keras.Model"),ul=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gl=l(),v(St.$$.fragment),_l=l(),Oe=n("div"),v(No.$$.fragment),Tl=l(),yt=n("p"),vl=r("The "),$n=n("a"),bl=r("TFTransfoXLModel"),wl=r(" forward method, overrides the "),Ts=n("code"),yl=r("__call__"),Ll=r(" special method."),kl=l(),v(Nt.$$.fragment),$l=l(),vs=n("p"),xl=r("Example:"),Xl=l(),v(Ao.$$.fragment),sa=l(),Lt=n("h2"),At=n("a"),bs=n("span"),v(Ho.$$.fragment),Ml=l(),ws=n("span"),El=r("TFTransfoXLLMHeadModel"),aa=l(),ue=n("div"),v(Do.$$.fragment),Fl=l(),ys=n("p"),ql=r(`The Transformer-XL Model with a language modeling head on top (adaptive softmax with weights tied to the adaptive
input embeddings)`),Cl=l(),Io=n("p"),zl=r("This model inherits from "),xn=n("a"),Pl=r("TFPreTrainedModel"),jl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ol=l(),Wo=n("p"),Sl=r("This model is also a "),Vo=n("a"),Nl=r("tf.keras.Model"),Al=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hl=l(),v(Ht.$$.fragment),Dl=l(),Se=n("div"),v(Bo.$$.fragment),Il=l(),kt=n("p"),Wl=r("The "),Xn=n("a"),Vl=r("TFTransfoXLLMHeadModel"),Bl=r(" forward method, overrides the "),Ls=n("code"),Ul=r("__call__"),Rl=r(" special method."),Kl=l(),v(Dt.$$.fragment),Gl=l(),ks=n("p"),Yl=r("Example:"),Ql=l(),v(Uo.$$.fragment),ra=l(),$t=n("h2"),It=n("a"),$s=n("span"),v(Ro.$$.fragment),Zl=l(),xs=n("span"),Jl=r("TFTransfoXLForSequenceClassification"),ia=l(),ee=n("div"),v(Ko.$$.fragment),ed=l(),Xs=n("p"),td=r("The Transfo XL Model transformer with a sequence classification head on top (linear layer)."),od=l(),Mn=n("p"),En=n("a"),nd=r("TFTransfoXLForSequenceClassification"),sd=r(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-1,GPT-2) do.`),ad=l(),We=n("p"),rd=r(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ms=n("code"),id=r("pad_token_id"),ld=r(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Es=n("code"),dd=r("pad_token_id"),cd=r(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Fs=n("code"),fd=r("inputs_embeds"),hd=r(" are passed instead of "),qs=n("code"),pd=r("input_ids"),md=r(`, it does the same (take the last value in
each row of the batch).`),ud=l(),Go=n("p"),gd=r("This model inherits from "),Fn=n("a"),_d=r("TFPreTrainedModel"),Td=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vd=l(),Yo=n("p"),bd=r("This model is also a "),Qo=n("a"),wd=r("tf.keras.Model"),yd=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ld=l(),v(Wt.$$.fragment),kd=l(),Le=n("div"),v(Zo.$$.fragment),$d=l(),xt=n("p"),xd=r("The "),qn=n("a"),Xd=r("TFTransfoXLForSequenceClassification"),Md=r(" forward method, overrides the "),Cs=n("code"),Ed=r("__call__"),Fd=r(" special method."),qd=l(),v(Vt.$$.fragment),Cd=l(),zs=n("p"),zd=r("Example:"),Pd=l(),v(Jo.$$.fragment),jd=l(),v(en.$$.fragment),la=l(),Xt=n("h2"),Bt=n("a"),Ps=n("span"),v(tn.$$.fragment),Od=l(),js=n("span"),Sd=r("Internal Layers"),da=l(),on=n("div"),v(nn.$$.fragment),ca=l(),sn=n("div"),v(an.$$.fragment),this.h()},l(o){const m=Of('[data-svelte="svelte-1phssyn"]',document.head);p=s(m,"META",{name:!0,content:!0}),m.forEach(t),M=d(o),u=s(o,"H1",{class:!0});var rn=a(u);g=s(rn,"A",{id:!0,class:!0,href:!0});var Os=a(g);$=s(Os,"SPAN",{});var Ss=a($);b(_.$$.fragment,Ss),Ss.forEach(t),Os.forEach(t),T=d(rn),X=s(rn,"SPAN",{});var Ns=a(X);I=i(Ns,"Transformer XL"),Ns.forEach(t),rn.forEach(t),W=d(o),x=s(o,"H2",{class:!0});var ln=a(x);z=s(ln,"A",{id:!0,class:!0,href:!0});var As=a(z);O=s(As,"SPAN",{});var Hs=a(O);b(K.$$.fragment,Hs),Hs.forEach(t),As.forEach(t),ae=d(ln),V=s(ln,"SPAN",{});var Ds=a(V);$e=i(Ds,"Overview"),Ds.forEach(t),ln.forEach(t),ge=d(o),B=s(o,"P",{});var dn=a(B);N=i(dn,"The Transformer-XL model was proposed in "),ne=s(dn,"A",{href:!0,rel:!0});var Is=a(ne);re=i(Is,"Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context"),Is.forEach(t),F=i(dn,` by Zihang Dai, Zhilin Yang, Yiming Yang, Jaime Carbonell, Quoc V. Le, Ruslan
Salakhutdinov. It\u2019s a causal (uni-directional) transformer with relative positioning (sinuso\xEFdal) embeddings which can
reuse previously computed hidden-states to attend to longer context (memory). This model also uses adaptive softmax
inputs and outputs (tied).`),dn.forEach(t),C=d(o),ie=s(o,"P",{});var Hd=a(ie);Q=i(Hd,"The abstract from the paper is the following:"),Hd.forEach(t),_e=d(o),le=s(o,"P",{});var Dd=a(le);U=s(Dd,"EM",{});var Id=a(U);xe=i(Id,`Transformers have a potential of learning longer-term dependency, but are limited by a fixed-length context in the
setting of language modeling. We propose a novel neural architecture Transformer-XL that enables learning dependency
beyond a fixed length without disrupting temporal coherence. It consists of a segment-level recurrence mechanism and a
novel positional encoding scheme. Our method not only enables capturing longer-term dependency, but also resolves the
context fragmentation problem. As a result, Transformer-XL learns dependency that is 80% longer than RNNs and 450%
longer than vanilla Transformers, achieves better performance on both short and long sequences, and is up to 1,800+
times faster than vanilla Transformers during evaluation. Notably, we improve the state-of-the-art results of
bpc/perplexity to 0.99 on enwiki8, 1.08 on text8, 18.3 on WikiText-103, 21.8 on One Billion Word, and 54.5 on Penn
Treebank (without finetuning). When trained only on WikiText-103, Transformer-XL manages to generate reasonably
coherent, novel text articles with thousands of tokens.`),Id.forEach(t),Dd.forEach(t),Te=d(o),q=s(o,"P",{});var Wd=a(q);Xe=i(Wd,"Tips:"),Wd.forEach(t),G=d(o),oe=s(o,"UL",{});var ha=a(oe);fe=s(ha,"LI",{});var Vd=a(fe);Z=i(Vd,`Transformer-XL uses relative sinusoidal positional embeddings. Padding can be done on the left or on the right. The
original implementation trains on SQuAD with padding on the left, therefore the padding defaults are set to left.`),Vd.forEach(t),Me=d(ha),he=s(ha,"LI",{});var Bd=a(he);A=i(Bd,"Transformer-XL is one of the few models that has no sequence length limit."),Bd.forEach(t),ha.forEach(t),ve=d(o),j=s(o,"P",{});var Cn=a(j);Ee=i(Cn,"This model was contributed by "),h=s(Cn,"A",{href:!0,rel:!0});var Ud=a(h);E=i(Ud,"thomwolf"),Ud.forEach(t),de=i(Cn,". The original code can be found "),be=s(Cn,"A",{href:!0,rel:!0});var Rd=a(be);Ve=i(Rd,"here"),Rd.forEach(t),H=i(Cn,"."),Cn.forEach(t),Ae=d(o),b(pe.$$.fragment,o),He=d(o),P=s(o,"H2",{class:!0});var pa=a(P);S=s(pa,"A",{id:!0,class:!0,href:!0});var Kd=a(S);Ce=s(Kd,"SPAN",{});var Gd=a(Ce);b(we.$$.fragment,Gd),Gd.forEach(t),Kd.forEach(t),J=d(pa),ze=s(pa,"SPAN",{});var Yd=a(ze);Be=i(Yd,"TransfoXLConfig"),Yd.forEach(t),pa.forEach(t),ye=d(o),D=s(o,"DIV",{class:!0});var Ze=a(D);b(Kt.$$.fragment,Ze),Da=d(Ze),Ye=s(Ze,"P",{});var Ut=a(Ye);Ia=i(Ut,"This is the configuration class to store the configuration of a "),cn=s(Ut,"A",{href:!0});var Qd=a(cn);Wa=i(Qd,"TransfoXLModel"),Qd.forEach(t),Va=i(Ut," or a "),fn=s(Ut,"A",{href:!0});var Zd=a(fn);Ba=i(Zd,"TFTransfoXLModel"),Zd.forEach(t),Ua=i(Ut,`. It is
used to instantiate a Transformer-XL model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the `),Gt=s(Ut,"A",{href:!0,rel:!0});var Jd=a(Gt);Ra=i(Jd,`Transformer
XL`),Jd.forEach(t),Ka=i(Ut," architecture."),Ut.forEach(t),Ga=d(Ze),lt=s(Ze,"P",{});var zn=a(lt);Ya=i(zn,"Configuration objects inherit from "),hn=s(zn,"A",{href:!0});var ec=a(hn);Qa=i(ec,"PretrainedConfig"),ec.forEach(t),Za=i(zn,` and can be used to control the model outputs. Read the
documentation from `),pn=s(zn,"A",{href:!0});var tc=a(pn);Ja=i(tc,"PretrainedConfig"),tc.forEach(t),er=i(zn," for more information."),zn.forEach(t),tr=d(Ze),Hn=s(Ze,"P",{});var oc=a(Hn);or=i(oc,"Examples:"),oc.forEach(t),nr=d(Ze),b(Yt.$$.fragment,Ze),Ze.forEach(t),Ws=d(o),dt=s(o,"H2",{class:!0});var ma=a(dt);Mt=s(ma,"A",{id:!0,class:!0,href:!0});var nc=a(Mt);Dn=s(nc,"SPAN",{});var sc=a(Dn);b(Qt.$$.fragment,sc),sc.forEach(t),nc.forEach(t),sr=d(ma),In=s(ma,"SPAN",{});var ac=a(In);ar=i(ac,"TransfoXLTokenizer"),ac.forEach(t),ma.forEach(t),Vs=d(o),De=s(o,"DIV",{class:!0});var Rt=a(De);b(Zt.$$.fragment,Rt),rr=d(Rt),Jt=s(Rt,"P",{});var ua=a(Jt);ir=i(ua,"Construct a Transformer-XL tokenizer adapted from Vocab class in "),eo=s(ua,"A",{href:!0,rel:!0});var rc=a(eo);lr=i(rc,`the original
code`),rc.forEach(t),dr=i(ua,`. The Transformer-XL tokenizer is a word-level tokenizer (no
sub-word tokenization).`),ua.forEach(t),cr=d(Rt),to=s(Rt,"P",{});var ga=a(to);fr=i(ga,"This tokenizer inherits from "),mn=s(ga,"A",{href:!0});var ic=a(mn);hr=i(ic,"PreTrainedTokenizer"),ic.forEach(t),pr=i(ga,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ga.forEach(t),mr=d(Rt),un=s(Rt,"DIV",{class:!0});var lc=a(un);b(oo.$$.fragment,lc),lc.forEach(t),Rt.forEach(t),Bs=d(o),ct=s(o,"H2",{class:!0});var _a=a(ct);Et=s(_a,"A",{id:!0,class:!0,href:!0});var dc=a(Et);Wn=s(dc,"SPAN",{});var cc=a(Wn);b(no.$$.fragment,cc),cc.forEach(t),dc.forEach(t),ur=d(_a),Vn=s(_a,"SPAN",{});var fc=a(Vn);gr=i(fc,"TransfoXL specific outputs"),fc.forEach(t),_a.forEach(t),Us=d(o),ft=s(o,"DIV",{class:!0});var Ta=a(ft);b(so.$$.fragment,Ta),_r=d(Ta),Bn=s(Ta,"P",{});var hc=a(Bn);Tr=i(hc,"Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),hc.forEach(t),Ta.forEach(t),Rs=d(o),ht=s(o,"DIV",{class:!0});var va=a(ht);b(ao.$$.fragment,va),vr=d(va),Un=s(va,"P",{});var pc=a(Un);br=i(pc,"Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),pc.forEach(t),va.forEach(t),Ks=d(o),pt=s(o,"DIV",{class:!0});var ba=a(pt);b(ro.$$.fragment,ba),wr=d(ba),Rn=s(ba,"P",{});var mc=a(Rn);yr=i(mc,"Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),mc.forEach(t),ba.forEach(t),Gs=d(o),mt=s(o,"DIV",{class:!0});var wa=a(mt);b(io.$$.fragment,wa),Lr=d(wa),Kn=s(wa,"P",{});var uc=a(Kn);kr=i(uc,"Base class for model\u2019s outputs that may also contain a past key/values (to speed up sequential decoding)."),uc.forEach(t),wa.forEach(t),Ys=d(o),ut=s(o,"H2",{class:!0});var ya=a(ut);Ft=s(ya,"A",{id:!0,class:!0,href:!0});var gc=a(Ft);Gn=s(gc,"SPAN",{});var _c=a(Gn);b(lo.$$.fragment,_c),_c.forEach(t),gc.forEach(t),$r=d(ya),Yn=s(ya,"SPAN",{});var Tc=a(Yn);xr=i(Tc,"TransfoXLModel"),Tc.forEach(t),ya.forEach(t),Qs=d(o),Fe=s(o,"DIV",{class:!0});var Je=a(Fe);b(co.$$.fragment,Je),Xr=d(Je),Qn=s(Je,"P",{});var vc=a(Qn);Mr=i(vc,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),vc.forEach(t),Er=d(Je),fo=s(Je,"P",{});var La=a(fo);Fr=i(La,"This model inherits from "),gn=s(La,"A",{href:!0});var bc=a(gn);qr=i(bc,"PreTrainedModel"),bc.forEach(t),Cr=i(La,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),La.forEach(t),zr=d(Je),ho=s(Je,"P",{});var ka=a(ho);Pr=i(ka,"This model is also a PyTorch "),po=s(ka,"A",{href:!0,rel:!0});var wc=a(po);jr=i(wc,"torch.nn.Module"),wc.forEach(t),Or=i(ka,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ka.forEach(t),Sr=d(Je),Pe=s(Je,"DIV",{class:!0});var et=a(Pe);b(mo.$$.fragment,et),Nr=d(et),gt=s(et,"P",{});var Pn=a(gt);Ar=i(Pn,"The "),_n=s(Pn,"A",{href:!0});var yc=a(_n);Hr=i(yc,"TransfoXLModel"),yc.forEach(t),Dr=i(Pn," forward method, overrides the "),Zn=s(Pn,"CODE",{});var Lc=a(Zn);Ir=i(Lc,"__call__"),Lc.forEach(t),Wr=i(Pn," special method."),Pn.forEach(t),Vr=d(et),b(qt.$$.fragment,et),Br=d(et),Jn=s(et,"P",{});var kc=a(Jn);Ur=i(kc,"Example:"),kc.forEach(t),Rr=d(et),b(uo.$$.fragment,et),et.forEach(t),Je.forEach(t),Zs=d(o),_t=s(o,"H2",{class:!0});var $a=a(_t);Ct=s($a,"A",{id:!0,class:!0,href:!0});var $c=a(Ct);es=s($c,"SPAN",{});var xc=a(es);b(go.$$.fragment,xc),xc.forEach(t),$c.forEach(t),Kr=d($a),ts=s($a,"SPAN",{});var Xc=a(ts);Gr=i(Xc,"TransfoXLLMHeadModel"),Xc.forEach(t),$a.forEach(t),Js=d(o),qe=s(o,"DIV",{class:!0});var tt=a(qe);b(_o.$$.fragment,tt),Yr=d(tt),os=s(tt,"P",{});var Mc=a(os);Qr=i(Mc,`The Transformer-XL Model with a language modeling head on top (adaptive softmax with weights tied to the adaptive
input embeddings)`),Mc.forEach(t),Zr=d(tt),To=s(tt,"P",{});var xa=a(To);Jr=i(xa,"This model inherits from "),Tn=s(xa,"A",{href:!0});var Ec=a(Tn);ei=i(Ec,"PreTrainedModel"),Ec.forEach(t),ti=i(xa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xa.forEach(t),oi=d(tt),vo=s(tt,"P",{});var Xa=a(vo);ni=i(Xa,"This model is also a PyTorch "),bo=s(Xa,"A",{href:!0,rel:!0});var Fc=a(bo);si=i(Fc,"torch.nn.Module"),Fc.forEach(t),ai=i(Xa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xa.forEach(t),ri=d(tt),je=s(tt,"DIV",{class:!0});var ot=a(je);b(wo.$$.fragment,ot),ii=d(ot),Tt=s(ot,"P",{});var jn=a(Tt);li=i(jn,"The "),vn=s(jn,"A",{href:!0});var qc=a(vn);di=i(qc,"TransfoXLLMHeadModel"),qc.forEach(t),ci=i(jn," forward method, overrides the "),ns=s(jn,"CODE",{});var Cc=a(ns);fi=i(Cc,"__call__"),Cc.forEach(t),hi=i(jn," special method."),jn.forEach(t),pi=d(ot),b(zt.$$.fragment,ot),mi=d(ot),ss=s(ot,"P",{});var zc=a(ss);ui=i(zc,"Example:"),zc.forEach(t),gi=d(ot),b(yo.$$.fragment,ot),ot.forEach(t),tt.forEach(t),ea=d(o),vt=s(o,"H2",{class:!0});var Ma=a(vt);Pt=s(Ma,"A",{id:!0,class:!0,href:!0});var Pc=a(Pt);as=s(Pc,"SPAN",{});var jc=a(as);b(Lo.$$.fragment,jc),jc.forEach(t),Pc.forEach(t),_i=d(Ma),rs=s(Ma,"SPAN",{});var Oc=a(rs);Ti=i(Oc,"TransfoXLForSequenceClassification"),Oc.forEach(t),Ma.forEach(t),ta=d(o),se=s(o,"DIV",{class:!0});var Ne=a(se);b(ko.$$.fragment,Ne),vi=d(Ne),is=s(Ne,"P",{});var Sc=a(is);bi=i(Sc,"The Transformer-XL Model transformer with a sequence classification head on top (linear layer)."),Sc.forEach(t),wi=d(Ne),bn=s(Ne,"P",{});var Nd=a(bn);wn=s(Nd,"A",{href:!0});var Nc=a(wn);yi=i(Nc,"TransfoXLForSequenceClassification"),Nc.forEach(t),Li=i(Nd,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-1) do.`),Nd.forEach(t),ki=d(Ne),Ie=s(Ne,"P",{});var nt=a(Ie);$i=i(nt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ls=s(nt,"CODE",{});var Ac=a(ls);xi=i(Ac,"pad_token_id"),Ac.forEach(t),Xi=i(nt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),ds=s(nt,"CODE",{});var Hc=a(ds);Mi=i(Hc,"pad_token_id"),Hc.forEach(t),Ei=i(nt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),cs=s(nt,"CODE",{});var Dc=a(cs);Fi=i(Dc,"inputs_embeds"),Dc.forEach(t),qi=i(nt," are passed instead of "),fs=s(nt,"CODE",{});var Ic=a(fs);Ci=i(Ic,"input_ids"),Ic.forEach(t),zi=i(nt,`, it does the same (take the last value in
each row of the batch).`),nt.forEach(t),Pi=d(Ne),$o=s(Ne,"P",{});var Ea=a($o);ji=i(Ea,"This model inherits from "),yn=s(Ea,"A",{href:!0});var Wc=a(yn);Oi=i(Wc,"PreTrainedModel"),Wc.forEach(t),Si=i(Ea,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ea.forEach(t),Ni=d(Ne),xo=s(Ne,"P",{});var Fa=a(xo);Ai=i(Fa,"This model is also a PyTorch "),Xo=s(Fa,"A",{href:!0,rel:!0});var Vc=a(Xo);Hi=i(Vc,"torch.nn.Module"),Vc.forEach(t),Di=i(Fa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fa.forEach(t),Ii=d(Ne),Y=s(Ne,"DIV",{class:!0});var ce=a(Y);b(Mo.$$.fragment,ce),Wi=d(ce),bt=s(ce,"P",{});var On=a(bt);Vi=i(On,"The "),Ln=s(On,"A",{href:!0});var Bc=a(Ln);Bi=i(Bc,"TransfoXLForSequenceClassification"),Bc.forEach(t),Ui=i(On," forward method, overrides the "),hs=s(On,"CODE",{});var Uc=a(hs);Ri=i(Uc,"__call__"),Uc.forEach(t),Ki=i(On," special method."),On.forEach(t),Gi=d(ce),b(jt.$$.fragment,ce),Yi=d(ce),ps=s(ce,"P",{});var Rc=a(ps);Qi=i(Rc,"Example of single-label classification:"),Rc.forEach(t),Zi=d(ce),b(Eo.$$.fragment,ce),Ji=d(ce),b(Fo.$$.fragment,ce),el=d(ce),ms=s(ce,"P",{});var Kc=a(ms);tl=i(Kc,"Example of multi-label classification:"),Kc.forEach(t),ol=d(ce),b(qo.$$.fragment,ce),nl=d(ce),b(Co.$$.fragment,ce),ce.forEach(t),Ne.forEach(t),oa=d(o),wt=s(o,"H2",{class:!0});var qa=a(wt);Ot=s(qa,"A",{id:!0,class:!0,href:!0});var Gc=a(Ot);us=s(Gc,"SPAN",{});var Yc=a(us);b(zo.$$.fragment,Yc),Yc.forEach(t),Gc.forEach(t),sl=d(qa),gs=s(qa,"SPAN",{});var Qc=a(gs);al=i(Qc,"TFTransfoXLModel"),Qc.forEach(t),qa.forEach(t),na=d(o),me=s(o,"DIV",{class:!0});var Ue=a(me);b(Po.$$.fragment,Ue),rl=d(Ue),_s=s(Ue,"P",{});var Zc=a(_s);il=i(Zc,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Zc.forEach(t),ll=d(Ue),jo=s(Ue,"P",{});var Ca=a(jo);dl=i(Ca,"This model inherits from "),kn=s(Ca,"A",{href:!0});var Jc=a(kn);cl=i(Jc,"TFPreTrainedModel"),Jc.forEach(t),fl=i(Ca,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ca.forEach(t),hl=d(Ue),Oo=s(Ue,"P",{});var za=a(Oo);pl=i(za,"This model is also a "),So=s(za,"A",{href:!0,rel:!0});var ef=a(So);ml=i(ef,"tf.keras.Model"),ef.forEach(t),ul=i(za,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),za.forEach(t),gl=d(Ue),b(St.$$.fragment,Ue),_l=d(Ue),Oe=s(Ue,"DIV",{class:!0});var st=a(Oe);b(No.$$.fragment,st),Tl=d(st),yt=s(st,"P",{});var Sn=a(yt);vl=i(Sn,"The "),$n=s(Sn,"A",{href:!0});var tf=a($n);bl=i(tf,"TFTransfoXLModel"),tf.forEach(t),wl=i(Sn," forward method, overrides the "),Ts=s(Sn,"CODE",{});var of=a(Ts);yl=i(of,"__call__"),of.forEach(t),Ll=i(Sn," special method."),Sn.forEach(t),kl=d(st),b(Nt.$$.fragment,st),$l=d(st),vs=s(st,"P",{});var nf=a(vs);xl=i(nf,"Example:"),nf.forEach(t),Xl=d(st),b(Ao.$$.fragment,st),st.forEach(t),Ue.forEach(t),sa=d(o),Lt=s(o,"H2",{class:!0});var Pa=a(Lt);At=s(Pa,"A",{id:!0,class:!0,href:!0});var sf=a(At);bs=s(sf,"SPAN",{});var af=a(bs);b(Ho.$$.fragment,af),af.forEach(t),sf.forEach(t),Ml=d(Pa),ws=s(Pa,"SPAN",{});var rf=a(ws);El=i(rf,"TFTransfoXLLMHeadModel"),rf.forEach(t),Pa.forEach(t),aa=d(o),ue=s(o,"DIV",{class:!0});var Re=a(ue);b(Do.$$.fragment,Re),Fl=d(Re),ys=s(Re,"P",{});var lf=a(ys);ql=i(lf,`The Transformer-XL Model with a language modeling head on top (adaptive softmax with weights tied to the adaptive
input embeddings)`),lf.forEach(t),Cl=d(Re),Io=s(Re,"P",{});var ja=a(Io);zl=i(ja,"This model inherits from "),xn=s(ja,"A",{href:!0});var df=a(xn);Pl=i(df,"TFPreTrainedModel"),df.forEach(t),jl=i(ja,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ja.forEach(t),Ol=d(Re),Wo=s(Re,"P",{});var Oa=a(Wo);Sl=i(Oa,"This model is also a "),Vo=s(Oa,"A",{href:!0,rel:!0});var cf=a(Vo);Nl=i(cf,"tf.keras.Model"),cf.forEach(t),Al=i(Oa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Oa.forEach(t),Hl=d(Re),b(Ht.$$.fragment,Re),Dl=d(Re),Se=s(Re,"DIV",{class:!0});var at=a(Se);b(Bo.$$.fragment,at),Il=d(at),kt=s(at,"P",{});var Nn=a(kt);Wl=i(Nn,"The "),Xn=s(Nn,"A",{href:!0});var ff=a(Xn);Vl=i(ff,"TFTransfoXLLMHeadModel"),ff.forEach(t),Bl=i(Nn," forward method, overrides the "),Ls=s(Nn,"CODE",{});var hf=a(Ls);Ul=i(hf,"__call__"),hf.forEach(t),Rl=i(Nn," special method."),Nn.forEach(t),Kl=d(at),b(Dt.$$.fragment,at),Gl=d(at),ks=s(at,"P",{});var pf=a(ks);Yl=i(pf,"Example:"),pf.forEach(t),Ql=d(at),b(Uo.$$.fragment,at),at.forEach(t),Re.forEach(t),ra=d(o),$t=s(o,"H2",{class:!0});var Sa=a($t);It=s(Sa,"A",{id:!0,class:!0,href:!0});var mf=a(It);$s=s(mf,"SPAN",{});var uf=a($s);b(Ro.$$.fragment,uf),uf.forEach(t),mf.forEach(t),Zl=d(Sa),xs=s(Sa,"SPAN",{});var gf=a(xs);Jl=i(gf,"TFTransfoXLForSequenceClassification"),gf.forEach(t),Sa.forEach(t),ia=d(o),ee=s(o,"DIV",{class:!0});var ke=a(ee);b(Ko.$$.fragment,ke),ed=d(ke),Xs=s(ke,"P",{});var _f=a(Xs);td=i(_f,"The Transfo XL Model transformer with a sequence classification head on top (linear layer)."),_f.forEach(t),od=d(ke),Mn=s(ke,"P",{});var Ad=a(Mn);En=s(Ad,"A",{href:!0});var Tf=a(En);nd=i(Tf,"TFTransfoXLForSequenceClassification"),Tf.forEach(t),sd=i(Ad,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-1,GPT-2) do.`),Ad.forEach(t),ad=d(ke),We=s(ke,"P",{});var rt=a(We);rd=i(rt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ms=s(rt,"CODE",{});var vf=a(Ms);id=i(vf,"pad_token_id"),vf.forEach(t),ld=i(rt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Es=s(rt,"CODE",{});var bf=a(Es);dd=i(bf,"pad_token_id"),bf.forEach(t),cd=i(rt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Fs=s(rt,"CODE",{});var wf=a(Fs);fd=i(wf,"inputs_embeds"),wf.forEach(t),hd=i(rt," are passed instead of "),qs=s(rt,"CODE",{});var yf=a(qs);pd=i(yf,"input_ids"),yf.forEach(t),md=i(rt,`, it does the same (take the last value in
each row of the batch).`),rt.forEach(t),ud=d(ke),Go=s(ke,"P",{});var Na=a(Go);gd=i(Na,"This model inherits from "),Fn=s(Na,"A",{href:!0});var Lf=a(Fn);_d=i(Lf,"TFPreTrainedModel"),Lf.forEach(t),Td=i(Na,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Na.forEach(t),vd=d(ke),Yo=s(ke,"P",{});var Aa=a(Yo);bd=i(Aa,"This model is also a "),Qo=s(Aa,"A",{href:!0,rel:!0});var kf=a(Qo);wd=i(kf,"tf.keras.Model"),kf.forEach(t),yd=i(Aa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Aa.forEach(t),Ld=d(ke),b(Wt.$$.fragment,ke),kd=d(ke),Le=s(ke,"DIV",{class:!0});var Ke=a(Le);b(Zo.$$.fragment,Ke),$d=d(Ke),xt=s(Ke,"P",{});var An=a(xt);xd=i(An,"The "),qn=s(An,"A",{href:!0});var $f=a(qn);Xd=i($f,"TFTransfoXLForSequenceClassification"),$f.forEach(t),Md=i(An," forward method, overrides the "),Cs=s(An,"CODE",{});var xf=a(Cs);Ed=i(xf,"__call__"),xf.forEach(t),Fd=i(An," special method."),An.forEach(t),qd=d(Ke),b(Vt.$$.fragment,Ke),Cd=d(Ke),zs=s(Ke,"P",{});var Xf=a(zs);zd=i(Xf,"Example:"),Xf.forEach(t),Pd=d(Ke),b(Jo.$$.fragment,Ke),jd=d(Ke),b(en.$$.fragment,Ke),Ke.forEach(t),ke.forEach(t),la=d(o),Xt=s(o,"H2",{class:!0});var Ha=a(Xt);Bt=s(Ha,"A",{id:!0,class:!0,href:!0});var Mf=a(Bt);Ps=s(Mf,"SPAN",{});var Ef=a(Ps);b(tn.$$.fragment,Ef),Ef.forEach(t),Mf.forEach(t),Od=d(Ha),js=s(Ha,"SPAN",{});var Ff=a(js);Sd=i(Ff,"Internal Layers"),Ff.forEach(t),Ha.forEach(t),da=d(o),on=s(o,"DIV",{class:!0});var qf=a(on);b(nn.$$.fragment,qf),qf.forEach(t),ca=d(o),sn=s(o,"DIV",{class:!0});var Cf=a(sn);b(an.$$.fragment,Cf),Cf.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(Gf)),c(g,"id","transformer-xl"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#transformer-xl"),c(u,"class","relative group"),c(z,"id","overview"),c(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(z,"href","#overview"),c(x,"class","relative group"),c(ne,"href","https://arxiv.org/abs/1901.02860"),c(ne,"rel","nofollow"),c(h,"href","https://huggingface.co/thomwolf"),c(h,"rel","nofollow"),c(be,"href","https://github.com/kimiyoung/transformer-xl"),c(be,"rel","nofollow"),c(S,"id","transformers.TransfoXLConfig"),c(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(S,"href","#transformers.TransfoXLConfig"),c(P,"class","relative group"),c(cn,"href","/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLModel"),c(fn,"href","/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TFTransfoXLModel"),c(Gt,"href","https://huggingface.co/transfo-xl-wt103"),c(Gt,"rel","nofollow"),c(hn,"href","/docs/transformers/pr_16501/en/main_classes/configuration#transformers.PretrainedConfig"),c(pn,"href","/docs/transformers/pr_16501/en/main_classes/configuration#transformers.PretrainedConfig"),c(D,"class","docstring"),c(Mt,"id","transformers.TransfoXLTokenizer"),c(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mt,"href","#transformers.TransfoXLTokenizer"),c(dt,"class","relative group"),c(eo,"href","https://github.com/kimiyoung/transformer-xl"),c(eo,"rel","nofollow"),c(mn,"href","/docs/transformers/pr_16501/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(un,"class","docstring"),c(De,"class","docstring"),c(Et,"id","transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput"),c(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Et,"href","#transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput"),c(ct,"class","relative group"),c(ft,"class","docstring"),c(ht,"class","docstring"),c(pt,"class","docstring"),c(mt,"class","docstring"),c(Ft,"id","transformers.TransfoXLModel"),c(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ft,"href","#transformers.TransfoXLModel"),c(ut,"class","relative group"),c(gn,"href","/docs/transformers/pr_16501/en/main_classes/model#transformers.PreTrainedModel"),c(po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(po,"rel","nofollow"),c(_n,"href","/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLModel"),c(Pe,"class","docstring"),c(Fe,"class","docstring"),c(Ct,"id","transformers.TransfoXLLMHeadModel"),c(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ct,"href","#transformers.TransfoXLLMHeadModel"),c(_t,"class","relative group"),c(Tn,"href","/docs/transformers/pr_16501/en/main_classes/model#transformers.PreTrainedModel"),c(bo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(bo,"rel","nofollow"),c(vn,"href","/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLLMHeadModel"),c(je,"class","docstring"),c(qe,"class","docstring"),c(Pt,"id","transformers.TransfoXLForSequenceClassification"),c(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pt,"href","#transformers.TransfoXLForSequenceClassification"),c(vt,"class","relative group"),c(wn,"href","/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLForSequenceClassification"),c(yn,"href","/docs/transformers/pr_16501/en/main_classes/model#transformers.PreTrainedModel"),c(Xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Xo,"rel","nofollow"),c(Ln,"href","/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TransfoXLForSequenceClassification"),c(Y,"class","docstring"),c(se,"class","docstring"),c(Ot,"id","transformers.TFTransfoXLModel"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.TFTransfoXLModel"),c(wt,"class","relative group"),c(kn,"href","/docs/transformers/pr_16501/en/main_classes/model#transformers.TFPreTrainedModel"),c(So,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(So,"rel","nofollow"),c($n,"href","/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TFTransfoXLModel"),c(Oe,"class","docstring"),c(me,"class","docstring"),c(At,"id","transformers.TFTransfoXLLMHeadModel"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.TFTransfoXLLMHeadModel"),c(Lt,"class","relative group"),c(xn,"href","/docs/transformers/pr_16501/en/main_classes/model#transformers.TFPreTrainedModel"),c(Vo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Vo,"rel","nofollow"),c(Xn,"href","/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TFTransfoXLLMHeadModel"),c(Se,"class","docstring"),c(ue,"class","docstring"),c(It,"id","transformers.TFTransfoXLForSequenceClassification"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#transformers.TFTransfoXLForSequenceClassification"),c($t,"class","relative group"),c(En,"href","/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TFTransfoXLForSequenceClassification"),c(Fn,"href","/docs/transformers/pr_16501/en/main_classes/model#transformers.TFPreTrainedModel"),c(Qo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Qo,"rel","nofollow"),c(qn,"href","/docs/transformers/pr_16501/en/model_doc/transfo-xl#transformers.TFTransfoXLForSequenceClassification"),c(Le,"class","docstring"),c(ee,"class","docstring"),c(Bt,"id","transformers.AdaptiveEmbedding"),c(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bt,"href","#transformers.AdaptiveEmbedding"),c(Xt,"class","relative group"),c(on,"class","docstring"),c(sn,"class","docstring")},m(o,m){e(document.head,p),f(o,M,m),f(o,u,m),e(u,g),e(g,$),w(_,$,null),e(u,T),e(u,X),e(X,I),f(o,W,m),f(o,x,m),e(x,z),e(z,O),w(K,O,null),e(x,ae),e(x,V),e(V,$e),f(o,ge,m),f(o,B,m),e(B,N),e(B,ne),e(ne,re),e(B,F),f(o,C,m),f(o,ie,m),e(ie,Q),f(o,_e,m),f(o,le,m),e(le,U),e(U,xe),f(o,Te,m),f(o,q,m),e(q,Xe),f(o,G,m),f(o,oe,m),e(oe,fe),e(fe,Z),e(oe,Me),e(oe,he),e(he,A),f(o,ve,m),f(o,j,m),e(j,Ee),e(j,h),e(h,E),e(j,de),e(j,be),e(be,Ve),e(j,H),f(o,Ae,m),w(pe,o,m),f(o,He,m),f(o,P,m),e(P,S),e(S,Ce),w(we,Ce,null),e(P,J),e(P,ze),e(ze,Be),f(o,ye,m),f(o,D,m),w(Kt,D,null),e(D,Da),e(D,Ye),e(Ye,Ia),e(Ye,cn),e(cn,Wa),e(Ye,Va),e(Ye,fn),e(fn,Ba),e(Ye,Ua),e(Ye,Gt),e(Gt,Ra),e(Ye,Ka),e(D,Ga),e(D,lt),e(lt,Ya),e(lt,hn),e(hn,Qa),e(lt,Za),e(lt,pn),e(pn,Ja),e(lt,er),e(D,tr),e(D,Hn),e(Hn,or),e(D,nr),w(Yt,D,null),f(o,Ws,m),f(o,dt,m),e(dt,Mt),e(Mt,Dn),w(Qt,Dn,null),e(dt,sr),e(dt,In),e(In,ar),f(o,Vs,m),f(o,De,m),w(Zt,De,null),e(De,rr),e(De,Jt),e(Jt,ir),e(Jt,eo),e(eo,lr),e(Jt,dr),e(De,cr),e(De,to),e(to,fr),e(to,mn),e(mn,hr),e(to,pr),e(De,mr),e(De,un),w(oo,un,null),f(o,Bs,m),f(o,ct,m),e(ct,Et),e(Et,Wn),w(no,Wn,null),e(ct,ur),e(ct,Vn),e(Vn,gr),f(o,Us,m),f(o,ft,m),w(so,ft,null),e(ft,_r),e(ft,Bn),e(Bn,Tr),f(o,Rs,m),f(o,ht,m),w(ao,ht,null),e(ht,vr),e(ht,Un),e(Un,br),f(o,Ks,m),f(o,pt,m),w(ro,pt,null),e(pt,wr),e(pt,Rn),e(Rn,yr),f(o,Gs,m),f(o,mt,m),w(io,mt,null),e(mt,Lr),e(mt,Kn),e(Kn,kr),f(o,Ys,m),f(o,ut,m),e(ut,Ft),e(Ft,Gn),w(lo,Gn,null),e(ut,$r),e(ut,Yn),e(Yn,xr),f(o,Qs,m),f(o,Fe,m),w(co,Fe,null),e(Fe,Xr),e(Fe,Qn),e(Qn,Mr),e(Fe,Er),e(Fe,fo),e(fo,Fr),e(fo,gn),e(gn,qr),e(fo,Cr),e(Fe,zr),e(Fe,ho),e(ho,Pr),e(ho,po),e(po,jr),e(ho,Or),e(Fe,Sr),e(Fe,Pe),w(mo,Pe,null),e(Pe,Nr),e(Pe,gt),e(gt,Ar),e(gt,_n),e(_n,Hr),e(gt,Dr),e(gt,Zn),e(Zn,Ir),e(gt,Wr),e(Pe,Vr),w(qt,Pe,null),e(Pe,Br),e(Pe,Jn),e(Jn,Ur),e(Pe,Rr),w(uo,Pe,null),f(o,Zs,m),f(o,_t,m),e(_t,Ct),e(Ct,es),w(go,es,null),e(_t,Kr),e(_t,ts),e(ts,Gr),f(o,Js,m),f(o,qe,m),w(_o,qe,null),e(qe,Yr),e(qe,os),e(os,Qr),e(qe,Zr),e(qe,To),e(To,Jr),e(To,Tn),e(Tn,ei),e(To,ti),e(qe,oi),e(qe,vo),e(vo,ni),e(vo,bo),e(bo,si),e(vo,ai),e(qe,ri),e(qe,je),w(wo,je,null),e(je,ii),e(je,Tt),e(Tt,li),e(Tt,vn),e(vn,di),e(Tt,ci),e(Tt,ns),e(ns,fi),e(Tt,hi),e(je,pi),w(zt,je,null),e(je,mi),e(je,ss),e(ss,ui),e(je,gi),w(yo,je,null),f(o,ea,m),f(o,vt,m),e(vt,Pt),e(Pt,as),w(Lo,as,null),e(vt,_i),e(vt,rs),e(rs,Ti),f(o,ta,m),f(o,se,m),w(ko,se,null),e(se,vi),e(se,is),e(is,bi),e(se,wi),e(se,bn),e(bn,wn),e(wn,yi),e(bn,Li),e(se,ki),e(se,Ie),e(Ie,$i),e(Ie,ls),e(ls,xi),e(Ie,Xi),e(Ie,ds),e(ds,Mi),e(Ie,Ei),e(Ie,cs),e(cs,Fi),e(Ie,qi),e(Ie,fs),e(fs,Ci),e(Ie,zi),e(se,Pi),e(se,$o),e($o,ji),e($o,yn),e(yn,Oi),e($o,Si),e(se,Ni),e(se,xo),e(xo,Ai),e(xo,Xo),e(Xo,Hi),e(xo,Di),e(se,Ii),e(se,Y),w(Mo,Y,null),e(Y,Wi),e(Y,bt),e(bt,Vi),e(bt,Ln),e(Ln,Bi),e(bt,Ui),e(bt,hs),e(hs,Ri),e(bt,Ki),e(Y,Gi),w(jt,Y,null),e(Y,Yi),e(Y,ps),e(ps,Qi),e(Y,Zi),w(Eo,Y,null),e(Y,Ji),w(Fo,Y,null),e(Y,el),e(Y,ms),e(ms,tl),e(Y,ol),w(qo,Y,null),e(Y,nl),w(Co,Y,null),f(o,oa,m),f(o,wt,m),e(wt,Ot),e(Ot,us),w(zo,us,null),e(wt,sl),e(wt,gs),e(gs,al),f(o,na,m),f(o,me,m),w(Po,me,null),e(me,rl),e(me,_s),e(_s,il),e(me,ll),e(me,jo),e(jo,dl),e(jo,kn),e(kn,cl),e(jo,fl),e(me,hl),e(me,Oo),e(Oo,pl),e(Oo,So),e(So,ml),e(Oo,ul),e(me,gl),w(St,me,null),e(me,_l),e(me,Oe),w(No,Oe,null),e(Oe,Tl),e(Oe,yt),e(yt,vl),e(yt,$n),e($n,bl),e(yt,wl),e(yt,Ts),e(Ts,yl),e(yt,Ll),e(Oe,kl),w(Nt,Oe,null),e(Oe,$l),e(Oe,vs),e(vs,xl),e(Oe,Xl),w(Ao,Oe,null),f(o,sa,m),f(o,Lt,m),e(Lt,At),e(At,bs),w(Ho,bs,null),e(Lt,Ml),e(Lt,ws),e(ws,El),f(o,aa,m),f(o,ue,m),w(Do,ue,null),e(ue,Fl),e(ue,ys),e(ys,ql),e(ue,Cl),e(ue,Io),e(Io,zl),e(Io,xn),e(xn,Pl),e(Io,jl),e(ue,Ol),e(ue,Wo),e(Wo,Sl),e(Wo,Vo),e(Vo,Nl),e(Wo,Al),e(ue,Hl),w(Ht,ue,null),e(ue,Dl),e(ue,Se),w(Bo,Se,null),e(Se,Il),e(Se,kt),e(kt,Wl),e(kt,Xn),e(Xn,Vl),e(kt,Bl),e(kt,Ls),e(Ls,Ul),e(kt,Rl),e(Se,Kl),w(Dt,Se,null),e(Se,Gl),e(Se,ks),e(ks,Yl),e(Se,Ql),w(Uo,Se,null),f(o,ra,m),f(o,$t,m),e($t,It),e(It,$s),w(Ro,$s,null),e($t,Zl),e($t,xs),e(xs,Jl),f(o,ia,m),f(o,ee,m),w(Ko,ee,null),e(ee,ed),e(ee,Xs),e(Xs,td),e(ee,od),e(ee,Mn),e(Mn,En),e(En,nd),e(Mn,sd),e(ee,ad),e(ee,We),e(We,rd),e(We,Ms),e(Ms,id),e(We,ld),e(We,Es),e(Es,dd),e(We,cd),e(We,Fs),e(Fs,fd),e(We,hd),e(We,qs),e(qs,pd),e(We,md),e(ee,ud),e(ee,Go),e(Go,gd),e(Go,Fn),e(Fn,_d),e(Go,Td),e(ee,vd),e(ee,Yo),e(Yo,bd),e(Yo,Qo),e(Qo,wd),e(Yo,yd),e(ee,Ld),w(Wt,ee,null),e(ee,kd),e(ee,Le),w(Zo,Le,null),e(Le,$d),e(Le,xt),e(xt,xd),e(xt,qn),e(qn,Xd),e(xt,Md),e(xt,Cs),e(Cs,Ed),e(xt,Fd),e(Le,qd),w(Vt,Le,null),e(Le,Cd),e(Le,zs),e(zs,zd),e(Le,Pd),w(Jo,Le,null),e(Le,jd),w(en,Le,null),f(o,la,m),f(o,Xt,m),e(Xt,Bt),e(Bt,Ps),w(tn,Ps,null),e(Xt,Od),e(Xt,js),e(js,Sd),f(o,da,m),f(o,on,m),w(nn,on,null),f(o,ca,m),f(o,sn,m),w(an,sn,null),fa=!0},p(o,[m]){const rn={};m&2&&(rn.$$scope={dirty:m,ctx:o}),pe.$set(rn);const Os={};m&2&&(Os.$$scope={dirty:m,ctx:o}),qt.$set(Os);const Ss={};m&2&&(Ss.$$scope={dirty:m,ctx:o}),zt.$set(Ss);const Ns={};m&2&&(Ns.$$scope={dirty:m,ctx:o}),jt.$set(Ns);const ln={};m&2&&(ln.$$scope={dirty:m,ctx:o}),St.$set(ln);const As={};m&2&&(As.$$scope={dirty:m,ctx:o}),Nt.$set(As);const Hs={};m&2&&(Hs.$$scope={dirty:m,ctx:o}),Ht.$set(Hs);const Ds={};m&2&&(Ds.$$scope={dirty:m,ctx:o}),Dt.$set(Ds);const dn={};m&2&&(dn.$$scope={dirty:m,ctx:o}),Wt.$set(dn);const Is={};m&2&&(Is.$$scope={dirty:m,ctx:o}),Vt.$set(Is)},i(o){fa||(y(_.$$.fragment,o),y(K.$$.fragment,o),y(pe.$$.fragment,o),y(we.$$.fragment,o),y(Kt.$$.fragment,o),y(Yt.$$.fragment,o),y(Qt.$$.fragment,o),y(Zt.$$.fragment,o),y(oo.$$.fragment,o),y(no.$$.fragment,o),y(so.$$.fragment,o),y(ao.$$.fragment,o),y(ro.$$.fragment,o),y(io.$$.fragment,o),y(lo.$$.fragment,o),y(co.$$.fragment,o),y(mo.$$.fragment,o),y(qt.$$.fragment,o),y(uo.$$.fragment,o),y(go.$$.fragment,o),y(_o.$$.fragment,o),y(wo.$$.fragment,o),y(zt.$$.fragment,o),y(yo.$$.fragment,o),y(Lo.$$.fragment,o),y(ko.$$.fragment,o),y(Mo.$$.fragment,o),y(jt.$$.fragment,o),y(Eo.$$.fragment,o),y(Fo.$$.fragment,o),y(qo.$$.fragment,o),y(Co.$$.fragment,o),y(zo.$$.fragment,o),y(Po.$$.fragment,o),y(St.$$.fragment,o),y(No.$$.fragment,o),y(Nt.$$.fragment,o),y(Ao.$$.fragment,o),y(Ho.$$.fragment,o),y(Do.$$.fragment,o),y(Ht.$$.fragment,o),y(Bo.$$.fragment,o),y(Dt.$$.fragment,o),y(Uo.$$.fragment,o),y(Ro.$$.fragment,o),y(Ko.$$.fragment,o),y(Wt.$$.fragment,o),y(Zo.$$.fragment,o),y(Vt.$$.fragment,o),y(Jo.$$.fragment,o),y(en.$$.fragment,o),y(tn.$$.fragment,o),y(nn.$$.fragment,o),y(an.$$.fragment,o),fa=!0)},o(o){L(_.$$.fragment,o),L(K.$$.fragment,o),L(pe.$$.fragment,o),L(we.$$.fragment,o),L(Kt.$$.fragment,o),L(Yt.$$.fragment,o),L(Qt.$$.fragment,o),L(Zt.$$.fragment,o),L(oo.$$.fragment,o),L(no.$$.fragment,o),L(so.$$.fragment,o),L(ao.$$.fragment,o),L(ro.$$.fragment,o),L(io.$$.fragment,o),L(lo.$$.fragment,o),L(co.$$.fragment,o),L(mo.$$.fragment,o),L(qt.$$.fragment,o),L(uo.$$.fragment,o),L(go.$$.fragment,o),L(_o.$$.fragment,o),L(wo.$$.fragment,o),L(zt.$$.fragment,o),L(yo.$$.fragment,o),L(Lo.$$.fragment,o),L(ko.$$.fragment,o),L(Mo.$$.fragment,o),L(jt.$$.fragment,o),L(Eo.$$.fragment,o),L(Fo.$$.fragment,o),L(qo.$$.fragment,o),L(Co.$$.fragment,o),L(zo.$$.fragment,o),L(Po.$$.fragment,o),L(St.$$.fragment,o),L(No.$$.fragment,o),L(Nt.$$.fragment,o),L(Ao.$$.fragment,o),L(Ho.$$.fragment,o),L(Do.$$.fragment,o),L(Ht.$$.fragment,o),L(Bo.$$.fragment,o),L(Dt.$$.fragment,o),L(Uo.$$.fragment,o),L(Ro.$$.fragment,o),L(Ko.$$.fragment,o),L(Wt.$$.fragment,o),L(Zo.$$.fragment,o),L(Vt.$$.fragment,o),L(Jo.$$.fragment,o),L(en.$$.fragment,o),L(tn.$$.fragment,o),L(nn.$$.fragment,o),L(an.$$.fragment,o),fa=!1},d(o){t(p),o&&t(M),o&&t(u),k(_),o&&t(W),o&&t(x),k(K),o&&t(ge),o&&t(B),o&&t(C),o&&t(ie),o&&t(_e),o&&t(le),o&&t(Te),o&&t(q),o&&t(G),o&&t(oe),o&&t(ve),o&&t(j),o&&t(Ae),k(pe,o),o&&t(He),o&&t(P),k(we),o&&t(ye),o&&t(D),k(Kt),k(Yt),o&&t(Ws),o&&t(dt),k(Qt),o&&t(Vs),o&&t(De),k(Zt),k(oo),o&&t(Bs),o&&t(ct),k(no),o&&t(Us),o&&t(ft),k(so),o&&t(Rs),o&&t(ht),k(ao),o&&t(Ks),o&&t(pt),k(ro),o&&t(Gs),o&&t(mt),k(io),o&&t(Ys),o&&t(ut),k(lo),o&&t(Qs),o&&t(Fe),k(co),k(mo),k(qt),k(uo),o&&t(Zs),o&&t(_t),k(go),o&&t(Js),o&&t(qe),k(_o),k(wo),k(zt),k(yo),o&&t(ea),o&&t(vt),k(Lo),o&&t(ta),o&&t(se),k(ko),k(Mo),k(jt),k(Eo),k(Fo),k(qo),k(Co),o&&t(oa),o&&t(wt),k(zo),o&&t(na),o&&t(me),k(Po),k(St),k(No),k(Nt),k(Ao),o&&t(sa),o&&t(Lt),k(Ho),o&&t(aa),o&&t(ue),k(Do),k(Ht),k(Bo),k(Dt),k(Uo),o&&t(ra),o&&t($t),k(Ro),o&&t(ia),o&&t(ee),k(Ko),k(Wt),k(Zo),k(Vt),k(Jo),k(en),o&&t(la),o&&t(Xt),k(tn),o&&t(da),o&&t(on),k(nn),o&&t(ca),o&&t(sn),k(an)}}}const Gf={local:"transformer-xl",sections:[{local:"overview",title:"Overview"},{local:"transformers.TransfoXLConfig",title:"TransfoXLConfig"},{local:"transformers.TransfoXLTokenizer",title:"TransfoXLTokenizer"},{local:"transformers.models.transfo_xl.modeling_transfo_xl.TransfoXLModelOutput",title:"TransfoXL specific outputs"},{local:"transformers.TransfoXLModel",title:"TransfoXLModel"},{local:"transformers.TransfoXLLMHeadModel",title:"TransfoXLLMHeadModel"},{local:"transformers.TransfoXLForSequenceClassification",title:"TransfoXLForSequenceClassification"},{local:"transformers.TFTransfoXLModel",title:"TFTransfoXLModel"},{local:"transformers.TFTransfoXLLMHeadModel",title:"TFTransfoXLLMHeadModel"},{local:"transformers.TFTransfoXLForSequenceClassification",title:"TFTransfoXLForSequenceClassification"},{local:"transformers.AdaptiveEmbedding",title:"Internal Layers"}],title:"Transformer XL"};function Yf(R){return Sf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class oh extends zf{constructor(p){super();Pf(this,p,Yf,Kf,jf,{})}}export{oh as default,Gf as metadata};
