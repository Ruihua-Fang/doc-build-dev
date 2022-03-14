import{S as uw,i as mw,s as fw,e as o,k as d,w as f,t as r,M as _w,c as s,d as t,m as l,a,x as _,h as i,b as c,F as e,g as p,y as g,q as T,o as k,B as v}from"../../chunks/vendor-4833417e.js";import{T as zt}from"../../chunks/Tip-fffd6df1.js";import{D as M}from"../../chunks/Docstring-4f315ed9.js";import{C as R}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as ke}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function gw(L){let u,x,b,w,z;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l($){u=s($,"P",{});var y=a(u);x=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var E=a(b);w=i(E,"Module"),E.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m($,y){p($,u,y),e(u,x),e(u,b),e(b,w),e(u,z)},d($){$&&t(u)}}}function Tw(L){let u,x,b,w,z;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l($){u=s($,"P",{});var y=a(u);x=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var E=a(b);w=i(E,"Module"),E.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m($,y){p($,u,y),e(u,x),e(u,b),e(b,w),e(u,z)},d($){$&&t(u)}}}function kw(L){let u,x,b,w,z;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l($){u=s($,"P",{});var y=a(u);x=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var E=a(b);w=i(E,"Module"),E.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m($,y){p($,u,y),e(u,x),e(u,b),e(b,w),e(u,z)},d($){$&&t(u)}}}function vw(L){let u,x,b,w,z,$,y,E,Ee,oe,q,ee,O,se,qe,G,je,ve,B,I,ae,pe,F,C,he,K,be,ue,U,Fe,ye,P,Me,H,V,me,A,Pe,fe,D,Ce,W,Ae;return{c(){u=o("p"),x=r("TF 2.0 models accepts two formats as inputs:"),b=d(),w=o("ul"),z=o("li"),$=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),E=o("li"),Ee=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),q=o("p"),ee=r("This second option is useful when using "),O=o("code"),se=r("tf.keras.Model.fit"),qe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),je=r("model(inputs)"),ve=r("."),B=d(),I=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=o("ul"),C=o("li"),he=r("a single Tensor with "),K=o("code"),be=r("input_ids"),ue=r(" only and nothing else: "),U=o("code"),Fe=r("model(inputs_ids)"),ye=d(),P=o("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),me=r(" or "),A=o("code"),Pe=r("model([input_ids, attention_mask, token_type_ids])"),fe=d(),D=o("li"),Ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=o("code"),Ae=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);x=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),w=s(m,"UL",{});var te=a(w);z=s(te,"LI",{});var Oe=a(z);$=i(Oe,"having all inputs as keyword arguments (like PyTorch models), or"),Oe.forEach(t),y=l(te),E=s(te,"LI",{});var pt=a(E);Ee=i(pt,"having all inputs as a list, tuple or dict in the first positional arguments."),pt.forEach(t),te.forEach(t),oe=l(m),q=s(m,"P",{});var S=a(q);ee=i(S,"This second option is useful when using "),O=s(S,"CODE",{});var Ge=a(O);se=i(Ge,"tf.keras.Model.fit"),Ge.forEach(t),qe=i(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(S,"CODE",{});var ne=a(G);je=i(ne,"model(inputs)"),ne.forEach(t),ve=i(S,"."),S.forEach(t),B=l(m),I=s(m,"P",{});var ht=a(I);ae=i(ht,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ht.forEach(t),pe=l(m),F=s(m,"UL",{});var N=a(F);C=s(N,"LI",{});var Y=a(C);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var ut=a(K);be=i(ut,"input_ids"),ut.forEach(t),ue=i(Y," only and nothing else: "),U=s(Y,"CODE",{});var Ne=a(U);Fe=i(Ne,"model(inputs_ids)"),Ne.forEach(t),Y.forEach(t),ye=l(N),P=s(N,"LI",{});var Z=a(P);Me=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var mt=a(H);V=i(mt,"model([input_ids, attention_mask])"),mt.forEach(t),me=i(Z," or "),A=s(Z,"CODE",{});var Le=a(A);Pe=i(Le,"model([input_ids, attention_mask, token_type_ids])"),Le.forEach(t),Z.forEach(t),fe=l(N),D=s(N,"LI",{});var Ie=a(D);Ce=i(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(Ie,"CODE",{});var ft=a(W);Ae=i(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),Ie.forEach(t),N.forEach(t)},m(m,j){p(m,u,j),e(u,x),p(m,b,j),p(m,w,j),e(w,z),e(z,$),e(w,y),e(w,E),e(E,Ee),p(m,oe,j),p(m,q,j),e(q,ee),e(q,O),e(O,se),e(q,qe),e(q,G),e(G,je),e(q,ve),p(m,B,j),p(m,I,j),e(I,ae),p(m,pe,j),p(m,F,j),e(F,C),e(C,he),e(C,K),e(K,be),e(C,ue),e(C,U),e(U,Fe),e(F,ye),e(F,P),e(P,Me),e(P,H),e(H,V),e(P,me),e(P,A),e(A,Pe),e(F,fe),e(F,D),e(D,Ce),e(D,W),e(W,Ae)},d(m){m&&t(u),m&&t(b),m&&t(w),m&&t(oe),m&&t(q),m&&t(B),m&&t(I),m&&t(pe),m&&t(F)}}}function bw(L){let u,x,b,w,z;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l($){u=s($,"P",{});var y=a(u);x=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var E=a(b);w=i(E,"Module"),E.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m($,y){p($,u,y),e(u,x),e(u,b),e(b,w),e(u,z)},d($){$&&t(u)}}}function yw(L){let u,x,b,w,z,$,y,E,Ee,oe,q,ee,O,se,qe,G,je,ve,B,I,ae,pe,F,C,he,K,be,ue,U,Fe,ye,P,Me,H,V,me,A,Pe,fe,D,Ce,W,Ae;return{c(){u=o("p"),x=r("TF 2.0 models accepts two formats as inputs:"),b=d(),w=o("ul"),z=o("li"),$=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),E=o("li"),Ee=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),q=o("p"),ee=r("This second option is useful when using "),O=o("code"),se=r("tf.keras.Model.fit"),qe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),je=r("model(inputs)"),ve=r("."),B=d(),I=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=o("ul"),C=o("li"),he=r("a single Tensor with "),K=o("code"),be=r("input_ids"),ue=r(" only and nothing else: "),U=o("code"),Fe=r("model(inputs_ids)"),ye=d(),P=o("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),me=r(" or "),A=o("code"),Pe=r("model([input_ids, attention_mask, token_type_ids])"),fe=d(),D=o("li"),Ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=o("code"),Ae=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);x=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),w=s(m,"UL",{});var te=a(w);z=s(te,"LI",{});var Oe=a(z);$=i(Oe,"having all inputs as keyword arguments (like PyTorch models), or"),Oe.forEach(t),y=l(te),E=s(te,"LI",{});var pt=a(E);Ee=i(pt,"having all inputs as a list, tuple or dict in the first positional arguments."),pt.forEach(t),te.forEach(t),oe=l(m),q=s(m,"P",{});var S=a(q);ee=i(S,"This second option is useful when using "),O=s(S,"CODE",{});var Ge=a(O);se=i(Ge,"tf.keras.Model.fit"),Ge.forEach(t),qe=i(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(S,"CODE",{});var ne=a(G);je=i(ne,"model(inputs)"),ne.forEach(t),ve=i(S,"."),S.forEach(t),B=l(m),I=s(m,"P",{});var ht=a(I);ae=i(ht,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ht.forEach(t),pe=l(m),F=s(m,"UL",{});var N=a(F);C=s(N,"LI",{});var Y=a(C);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var ut=a(K);be=i(ut,"input_ids"),ut.forEach(t),ue=i(Y," only and nothing else: "),U=s(Y,"CODE",{});var Ne=a(U);Fe=i(Ne,"model(inputs_ids)"),Ne.forEach(t),Y.forEach(t),ye=l(N),P=s(N,"LI",{});var Z=a(P);Me=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var mt=a(H);V=i(mt,"model([input_ids, attention_mask])"),mt.forEach(t),me=i(Z," or "),A=s(Z,"CODE",{});var Le=a(A);Pe=i(Le,"model([input_ids, attention_mask, token_type_ids])"),Le.forEach(t),Z.forEach(t),fe=l(N),D=s(N,"LI",{});var Ie=a(D);Ce=i(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(Ie,"CODE",{});var ft=a(W);Ae=i(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),Ie.forEach(t),N.forEach(t)},m(m,j){p(m,u,j),e(u,x),p(m,b,j),p(m,w,j),e(w,z),e(z,$),e(w,y),e(w,E),e(E,Ee),p(m,oe,j),p(m,q,j),e(q,ee),e(q,O),e(O,se),e(q,qe),e(q,G),e(G,je),e(q,ve),p(m,B,j),p(m,I,j),e(I,ae),p(m,pe,j),p(m,F,j),e(F,C),e(C,he),e(C,K),e(K,be),e(C,ue),e(C,U),e(U,Fe),e(F,ye),e(F,P),e(P,Me),e(P,H),e(H,V),e(P,me),e(P,A),e(A,Pe),e(F,fe),e(F,D),e(D,Ce),e(D,W),e(W,Ae)},d(m){m&&t(u),m&&t(b),m&&t(w),m&&t(oe),m&&t(q),m&&t(B),m&&t(I),m&&t(pe),m&&t(F)}}}function ww(L){let u,x,b,w,z;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l($){u=s($,"P",{});var y=a(u);x=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var E=a(b);w=i(E,"Module"),E.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m($,y){p($,u,y),e(u,x),e(u,b),e(b,w),e(u,z)},d($){$&&t(u)}}}function $w(L){let u,x,b,w,z,$,y,E,Ee,oe,q,ee,O,se,qe,G,je,ve,B,I,ae,pe,F,C,he,K,be,ue,U,Fe,ye,P,Me,H,V,me,A,Pe,fe,D,Ce,W,Ae;return{c(){u=o("p"),x=r("TF 2.0 models accepts two formats as inputs:"),b=d(),w=o("ul"),z=o("li"),$=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),E=o("li"),Ee=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),q=o("p"),ee=r("This second option is useful when using "),O=o("code"),se=r("tf.keras.Model.fit"),qe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),je=r("model(inputs)"),ve=r("."),B=d(),I=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=o("ul"),C=o("li"),he=r("a single Tensor with "),K=o("code"),be=r("input_ids"),ue=r(" only and nothing else: "),U=o("code"),Fe=r("model(inputs_ids)"),ye=d(),P=o("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),me=r(" or "),A=o("code"),Pe=r("model([input_ids, attention_mask, token_type_ids])"),fe=d(),D=o("li"),Ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=o("code"),Ae=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);x=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),w=s(m,"UL",{});var te=a(w);z=s(te,"LI",{});var Oe=a(z);$=i(Oe,"having all inputs as keyword arguments (like PyTorch models), or"),Oe.forEach(t),y=l(te),E=s(te,"LI",{});var pt=a(E);Ee=i(pt,"having all inputs as a list, tuple or dict in the first positional arguments."),pt.forEach(t),te.forEach(t),oe=l(m),q=s(m,"P",{});var S=a(q);ee=i(S,"This second option is useful when using "),O=s(S,"CODE",{});var Ge=a(O);se=i(Ge,"tf.keras.Model.fit"),Ge.forEach(t),qe=i(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(S,"CODE",{});var ne=a(G);je=i(ne,"model(inputs)"),ne.forEach(t),ve=i(S,"."),S.forEach(t),B=l(m),I=s(m,"P",{});var ht=a(I);ae=i(ht,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ht.forEach(t),pe=l(m),F=s(m,"UL",{});var N=a(F);C=s(N,"LI",{});var Y=a(C);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var ut=a(K);be=i(ut,"input_ids"),ut.forEach(t),ue=i(Y," only and nothing else: "),U=s(Y,"CODE",{});var Ne=a(U);Fe=i(Ne,"model(inputs_ids)"),Ne.forEach(t),Y.forEach(t),ye=l(N),P=s(N,"LI",{});var Z=a(P);Me=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var mt=a(H);V=i(mt,"model([input_ids, attention_mask])"),mt.forEach(t),me=i(Z," or "),A=s(Z,"CODE",{});var Le=a(A);Pe=i(Le,"model([input_ids, attention_mask, token_type_ids])"),Le.forEach(t),Z.forEach(t),fe=l(N),D=s(N,"LI",{});var Ie=a(D);Ce=i(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(Ie,"CODE",{});var ft=a(W);Ae=i(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),Ie.forEach(t),N.forEach(t)},m(m,j){p(m,u,j),e(u,x),p(m,b,j),p(m,w,j),e(w,z),e(z,$),e(w,y),e(w,E),e(E,Ee),p(m,oe,j),p(m,q,j),e(q,ee),e(q,O),e(O,se),e(q,qe),e(q,G),e(G,je),e(q,ve),p(m,B,j),p(m,I,j),e(I,ae),p(m,pe,j),p(m,F,j),e(F,C),e(C,he),e(C,K),e(K,be),e(C,ue),e(C,U),e(U,Fe),e(F,ye),e(F,P),e(P,Me),e(P,H),e(H,V),e(P,me),e(P,A),e(A,Pe),e(F,fe),e(F,D),e(D,Ce),e(D,W),e(W,Ae)},d(m){m&&t(u),m&&t(b),m&&t(w),m&&t(oe),m&&t(q),m&&t(B),m&&t(I),m&&t(pe),m&&t(F)}}}function zw(L){let u,x,b,w,z;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l($){u=s($,"P",{});var y=a(u);x=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var E=a(b);w=i(E,"Module"),E.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m($,y){p($,u,y),e(u,x),e(u,b),e(b,w),e(u,z)},d($){$&&t(u)}}}function xw(L){let u,x,b,w,z;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l($){u=s($,"P",{});var y=a(u);x=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var E=a(b);w=i(E,"Module"),E.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m($,y){p($,u,y),e(u,x),e(u,b),e(b,w),e(u,z)},d($){$&&t(u)}}}function Ew(L){let u,x,b,w,z;return{c(){u=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),z=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l($){u=s($,"P",{});var y=a(u);x=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var E=a(b);w=i(E,"Module"),E.forEach(t),z=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m($,y){p($,u,y),e(u,x),e(u,b),e(b,w),e(u,z)},d($){$&&t(u)}}}function qw(L){let u,x,b,w,z,$,y,E,Ee,oe,q,ee,O,se,qe,G,je,ve,B,I,ae,pe,F,C,he,K,be,ue,U,Fe,ye,P,Me,H,V,me,A,Pe,fe,D,Ce,W,Ae,m,j,te,Oe,pt,S,Ge,ne,ht,N,Y,ut,Ne,Z,mt,Le,Ie,ft,Vl,Xa,Sp,Kl,Be,di,li,To,Op,Gp,ci,pi,ko,Bp,Up,hi,ui,vo,Wp,Rp,mi,fi,bo,Hp,Vp,_i,Qa,yo,Kp,Yp,Yl,er,Zp,Zl,xt,gi,zn,Ti,Jp,Xp,tr,Qp,eh,th,ki,xn,vi,nh,oh,nr,sh,ah,rh,bi,En,yi,ih,dh,or,lh,ch,Jl,qn,ph,wo,hh,uh,Xl,Et,mh,$o,fh,_h,zo,gh,Th,Ql,sr,ec,Zt,jn,wi,xo,kh,$i,vh,tc,_t,bh,zi,yh,wh,xi,$h,zh,Ei,xh,Eh,nc,Fn,qh,ar,jh,Fh,oc,Mn,dt,qi,Mh,Ph,_e,Ch,ji,Ah,Nh,Fi,Lh,Ih,Mi,Dh,Sh,Pi,Oh,Gh,Ci,Bh,Uh,rr,Wh,Rh,Hh,Ai,Vh,Kh,Eo,Yh,qo,Zh,jo,Jh,Xh,Qh,ge,Ni,eu,tu,Li,nu,ou,Fo,su,re,au,Ii,ru,iu,Di,du,lu,Si,cu,pu,Oi,hu,uu,Gi,mu,fu,Bi,_u,gu,Ui,Tu,ku,vu,Jt,bu,Wi,yu,wu,Ri,$u,zu,xu,Te,Eu,Hi,qu,ju,Vi,Fu,Mu,Ki,Pu,Cu,Yi,Au,Nu,Mo,Lu,Iu,Zi,Du,Su,Ou,Po,sc,ir,Gu,ac,qt,Ji,Co,Bu,Xi,Uu,Wu,Ru,Qi,Xt,Hu,Ao,Vu,Ku,No,Yu,Zu,Ju,ed,Lo,Xu,td,Qu,em,rc,dr,ic,Qt,Pn,nd,Io,tm,od,nm,dc,gt,om,lr,sm,am,Do,rm,im,So,dm,lm,lc,Oo,cc,Ue,cm,sd,pm,hm,ad,um,mm,cr,fm,_m,rd,gm,Tm,pc,pr,km,hc,Go,uc,hr,mc,en,Cn,id,Bo,vm,dd,bm,fc,Tt,ym,Uo,wm,$m,ld,zm,xm,cd,Em,qm,_c,tn,An,pd,Wo,jm,hd,Fm,gc,ur,Mm,Tc,Nn,ud,nn,Pm,Ro,Cm,Am,Ho,Nm,Lm,Im,md,De,Dm,Vo,Sm,Om,Ko,Gm,Bm,Yo,Um,Wm,Zo,Rm,Hm,Jo,Vm,Km,kc,on,Ln,fd,Xo,Ym,_d,Zm,vc,wt,Qo,Jm,$t,Xm,mr,Qm,ef,fr,tf,nf,es,of,sf,af,sn,rf,_r,df,lf,gr,cf,pf,bc,an,In,gd,ts,hf,Td,uf,yc,ie,ns,mf,os,ff,ss,_f,gf,Tf,as,kf,Tr,vf,bf,yf,jt,rs,wf,kd,$f,zf,is,kr,xf,vd,Ef,qf,vr,jf,bd,Ff,Mf,Dn,ds,Pf,ls,Cf,yd,Af,Nf,Lf,Sn,cs,If,wd,Df,Sf,br,ps,wc,rn,On,$d,hs,Of,zd,Gf,$c,Se,us,Bf,dn,Uf,xd,Wf,Rf,ms,Hf,Vf,Kf,fs,Yf,yr,Zf,Jf,Xf,Ft,_s,Qf,Ed,e_,t_,gs,wr,n_,qd,o_,s_,$r,a_,jd,r_,i_,Gn,Ts,d_,Fd,l_,zc,ln,Bn,Md,ks,c_,Pd,p_,xc,J,vs,h_,Cd,u_,m_,bs,f_,ys,__,g_,T_,ws,k_,zr,v_,b_,y_,$s,w_,zs,$_,z_,x_,We,xs,E_,cn,q_,xr,j_,F_,Ad,M_,P_,C_,Un,A_,Nd,N_,L_,Es,I_,Re,qs,D_,Ld,S_,O_,Id,G_,B_,Dd,U_,W_,js,R_,kt,Fs,H_,Sd,V_,K_,Od,Y_,Z_,Ms,Ec,pn,Wn,Gd,Ps,J_,Bd,X_,qc,X,Cs,Q_,As,eg,Ud,tg,ng,og,Ns,sg,Ls,ag,rg,ig,Is,dg,Er,lg,cg,pg,Ds,hg,Ss,ug,mg,fg,He,Os,_g,hn,gg,qr,Tg,kg,Wd,vg,bg,yg,Rn,wg,Rd,$g,zg,Gs,xg,Ve,Bs,Eg,Hd,qg,jg,Vd,Fg,Mg,Kd,Pg,Cg,Us,Ag,vt,Ws,Ng,Yd,Lg,Ig,Zd,Dg,Sg,Rs,jc,un,Hn,Jd,Hs,Og,Xd,Gg,Fc,Q,Vs,Bg,Qd,Ug,Wg,Ks,Rg,Ys,Hg,Vg,Kg,Zs,Yg,jr,Zg,Jg,Xg,Js,Qg,Xs,eT,tT,nT,Ke,Qs,oT,mn,sT,Fr,aT,rT,el,iT,dT,lT,Vn,cT,tl,pT,hT,ea,uT,Ye,ta,mT,nl,fT,_T,ol,gT,TT,sl,kT,vT,na,bT,bt,oa,yT,al,wT,$T,rl,zT,xT,sa,Mc,fn,Kn,il,aa,ET,dl,qT,Pc,de,ra,jT,ll,FT,MT,ia,PT,da,CT,AT,NT,la,LT,Mr,IT,DT,ST,ca,OT,pa,GT,BT,UT,Yn,WT,Ze,ha,RT,_n,HT,Pr,VT,KT,cl,YT,ZT,JT,Zn,XT,pl,QT,ek,ua,Cc,gn,Jn,hl,ma,tk,ul,nk,Ac,le,fa,ok,_a,sk,ml,ak,rk,ik,ga,dk,Ta,lk,ck,pk,ka,hk,Cr,uk,mk,fk,va,_k,ba,gk,Tk,kk,Xn,vk,Je,ya,bk,Tn,yk,Ar,wk,$k,fl,zk,xk,Ek,Qn,qk,_l,jk,Fk,wa,Nc,kn,eo,gl,$a,Mk,Tl,Pk,Lc,ce,za,Ck,kl,Ak,Nk,xa,Lk,Ea,Ik,Dk,Sk,qa,Ok,Nr,Gk,Bk,Uk,ja,Wk,Fa,Rk,Hk,Vk,to,Kk,Xe,Ma,Yk,vn,Zk,Lr,Jk,Xk,vl,Qk,ev,tv,no,nv,bl,ov,sv,Pa,Ic,bn,oo,yl,Ca,av,wl,rv,Dc,lt,Aa,iv,Qe,Na,dv,yn,lv,$l,cv,pv,zl,hv,uv,mv,so,fv,xl,_v,gv,La,Tv,Mt,Ia,kv,El,vv,bv,Da,yv,Pt,Sa,wv,ql,$v,zv,Oa,Sc,wn,ao,jl,Ga,xv,Fl,Ev,Oc,ct,Ba,qv,et,Ua,jv,$n,Fv,Ml,Mv,Pv,Pl,Cv,Av,Nv,ro,Lv,Cl,Iv,Dv,Wa,Sv,Ct,Ra,Ov,Al,Gv,Bv,Ha,Uv,At,Va,Wv,Nl,Rv,Hv,Ka,Gc;return $=new ke({}),se=new ke({}),xo=new ke({}),Eo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="pt").input_ids
labels = tokenizer("<extra_id_0> cute dog <extra_id_1> the <extra_id_2>", return_tensors="pt").input_ids
# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
loss = model(input_ids=input_ids, labels=labels).loss`}}),Fo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("translate English to German: The house is wonderful.", return_tensors="pt").input_ids
labels = tokenizer("Das Haus ist wunderbar.", return_tensors="pt").input_ids
# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&quot;translate English to German: The house is wonderful.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
labels = tokenizer(<span class="hljs-string">&quot;Das Haus ist wunderbar.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
loss = model(input_ids=input_ids, labels=labels).loss`}}),Po=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration
import torch

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

# the following 2 hyperparameters are task-specific
max_source_length = 512
max_target_length = 128

# Suppose we have the following 2 training examples:
input_sequence_1 = "Welcome to NYC"
output_sequence_1 = "Bienvenue \xE0 NYC"

input_sequence_2 = "HuggingFace is a company"
output_sequence_2 = "HuggingFace est une entreprise"

# encode the inputs
task_prefix = "translate English to French: "
input_sequences = [input_sequence_1, input_sequence_2]
encoding = tokenizer(
    [task_prefix + sequence for sequence in input_sequences],
    padding="longest",
    max_length=max_source_length,
    truncation=True,
    return_tensors="pt",
)
input_ids, attention_mask = encoding.input_ids, encoding.attention_mask

# encode the targets
target_encoding = tokenizer(
    [output_sequence_1, output_sequence_2], padding="longest", max_length=max_target_length, truncation=True
)
labels = target_encoding.input_ids

# replace padding token id's of the labels by -100
labels = torch.tensor(labels)
labels[labels == tokenizer.pad_token_id] = -100

# forward pass
loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration
<span class="hljs-keyword">import</span> torch

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-comment"># the following 2 hyperparameters are task-specific</span>
max_source_length = <span class="hljs-number">512</span>
max_target_length = <span class="hljs-number">128</span>

<span class="hljs-comment"># Suppose we have the following 2 training examples:</span>
input_sequence_1 = <span class="hljs-string">&quot;Welcome to NYC&quot;</span>
output_sequence_1 = <span class="hljs-string">&quot;Bienvenue \xE0 NYC&quot;</span>

input_sequence_2 = <span class="hljs-string">&quot;HuggingFace is a company&quot;</span>
output_sequence_2 = <span class="hljs-string">&quot;HuggingFace est une entreprise&quot;</span>

<span class="hljs-comment"># encode the inputs</span>
task_prefix = <span class="hljs-string">&quot;translate English to French: &quot;</span>
input_sequences = [input_sequence_1, input_sequence_2]
encoding = tokenizer(
    [task_prefix + sequence <span class="hljs-keyword">for</span> sequence <span class="hljs-keyword">in</span> input_sequences],
    padding=<span class="hljs-string">&quot;longest&quot;</span>,
    max_length=max_source_length,
    truncation=<span class="hljs-literal">True</span>,
    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
)
input_ids, attention_mask = encoding.input_ids, encoding.attention_mask

<span class="hljs-comment"># encode the targets</span>
target_encoding = tokenizer(
    [output_sequence_1, output_sequence_2], padding=<span class="hljs-string">&quot;longest&quot;</span>, max_length=max_target_length, truncation=<span class="hljs-literal">True</span>
)
labels = target_encoding.input_ids

<span class="hljs-comment"># replace padding token id&#x27;s of the labels by -100</span>
labels = torch.tensor(labels)
labels[labels == tokenizer.pad_token_id] = -<span class="hljs-number">100</span>

<span class="hljs-comment"># forward pass</span>
loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss`}}),Io=new ke({}),Oo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("translate English to German: The house is wonderful.", return_tensors="pt").input_ids
outputs = model.generate(input_ids)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
# Das Haus ist wunderbar.`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&quot;translate English to German: The house is wonderful.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
outputs = model.generate(input_ids)
<span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-comment"># Das Haus ist wunderbar.</span>`}}),Go=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

# when generating, we will use the logits of right-most token to predict the next token
# so the padding should be on the left
tokenizer.padding_side = "left"
tokenizer.pad_token = tokenizer.eos_token  # to avoid an error

task_prefix = "translate English to German: "
sentences = ["The house is wonderful.", "I like to work in NYC."]  # use different length sentences to test batching
inputs = tokenizer([task_prefix + sentence for sentence in sentences], return_tensors="pt", padding=True)

output_sequences = model.generate(
    input_ids=inputs["input_ids"],
    attention_mask=inputs["attention_mask"],
    do_sample=False,  # disable sampling to test if batching affects output
)

print(tokenizer.batch_decode(output_sequences, skip_special_tokens=True))

# ['Das Haus ist wunderbar.', 'Ich arbeite gerne in NYC.']`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-comment"># when generating, we will use the logits of right-most token to predict the next token</span>
<span class="hljs-comment"># so the padding should be on the left</span>
tokenizer.padding_side = <span class="hljs-string">&quot;left&quot;</span>
tokenizer.pad_token = tokenizer.eos_token  <span class="hljs-comment"># to avoid an error</span>

task_prefix = <span class="hljs-string">&quot;translate English to German: &quot;</span>
sentences = [<span class="hljs-string">&quot;The house is wonderful.&quot;</span>, <span class="hljs-string">&quot;I like to work in NYC.&quot;</span>]  <span class="hljs-comment"># use different length sentences to test batching</span>
inputs = tokenizer([task_prefix + sentence <span class="hljs-keyword">for</span> sentence <span class="hljs-keyword">in</span> sentences], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)

output_sequences = model.generate(
    input_ids=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>],
    attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>],
    do_sample=<span class="hljs-literal">False</span>,  <span class="hljs-comment"># disable sampling to test if batching affects output</span>
)

<span class="hljs-built_in">print</span>(tokenizer.batch_decode(output_sequences, skip_special_tokens=<span class="hljs-literal">True</span>))

<span class="hljs-comment"># [&#x27;Das Haus ist wunderbar.&#x27;, &#x27;Ich arbeite gerne in NYC.&#x27;]</span>`}}),Bo=new ke({}),Wo=new ke({}),Xo=new ke({}),Qo=new M({props:{name:"class transformers.T5Config",anchor:"transformers.T5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/configuration_t5.py#L34",parametersDescription:[{anchor:"transformers.T5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
Vocabulary size of the T5 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5Model">T5Model</a> or <a href="/docs/transformers/pr_16142/en/model_doc/t5#transformers.TFT5Model">TFT5Model</a>.`,name:"vocab_size"},{anchor:"transformers.T5Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of the encoder layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.T5Config.d_kv",description:`<strong>d_kv</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of the key, query, value projections per attention head. <code>d_kv</code> has to be equal to <code>d_model // num_heads</code>.`,name:"d_kv"},{anchor:"transformers.T5Config.d_ff",description:`<strong>d_ff</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Size of the intermediate feed forward layer in each <code>T5Block</code>.`,name:"d_ff"},{anchor:"transformers.T5Config.num_layers",description:`<strong>num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_layers"},{anchor:"transformers.T5Config.num_decoder_layers",description:`<strong>num_decoder_layers</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of hidden layers in the Transformer decoder. Will use the same value as <code>num_layers</code> if not set.`,name:"num_decoder_layers"},{anchor:"transformers.T5Config.num_heads",description:`<strong>num_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.T5Config.relative_attention_num_buckets",description:`<strong>relative_attention_num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"},{anchor:"transformers.T5Config.dropout_rate",description:`<strong>dropout_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The ratio for all dropout layers.`,name:"dropout_rate"},{anchor:"transformers.T5Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-6) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.T5Config.initializer_factor",description:`<strong>initializer_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"},{anchor:"transformers.T5Config.feed_forward_proj",description:`<strong>feed_forward_proj</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
Type of feed forward layer to be used. Should be one of <code>&quot;relu&quot;</code> or <code>&quot;gated-gelu&quot;</code>. T5v1.1 uses the
<code>&quot;gated-gelu&quot;</code> feed forward projection. Original T5 uses <code>&quot;relu&quot;</code>.`,name:"feed_forward_proj"},{anchor:"transformers.T5Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),ts=new ke({}),ns=new M({props:{name:"class transformers.T5Tokenizer",anchor:"transformers.T5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/tokenization_t5.py#L53",parametersDescription:[{anchor:"transformers.T5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.T5Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.T5Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.T5Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.T5Tokenizer.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Add a number of extra ids added to the end of the vocabulary for use as sentinels. These tokens are
accessible as &#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. Extra tokens are
indexed from the end of the vocabulary up to beginning (&#x201C;<extra_id_0>&#x201D; is the last token in the vocabulary
like in T5 preprocessing see
<a href="https://github.com/google-research/text-to-text-transfer-transformer/blob/9fd7b14a769417be33bc6c850f9598764913c833/t5/data/preprocessors.py#L2117" rel="nofollow">here</a>).</extra_id_0></extra<em>`,name:"extra_ids"},{anchor:"transformers.T5Tokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.T5Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.T5Tokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}]}}),rs=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/tokenization_t5.py#L223",parametersDescription:[{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ds=new M({props:{name:"get_special_tokens_mask",anchor:"transformers.T5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/tokenization_t5.py#L163",parametersDescription:[{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),cs=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/tokenization_t5.py#L201",parametersDescription:[{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ps=new M({props:{name:"save_vocabulary",anchor:"transformers.T5Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/tokenization_t5.py#L298"}}),hs=new ke({}),us=new M({props:{name:"class transformers.T5TokenizerFast",anchor:"transformers.T5TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/tokenization_t5_fast.py#L63",parametersDescription:[{anchor:"transformers.T5TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.T5TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.T5TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.T5TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.T5TokenizerFast.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Add a number of extra ids added to the end of the vocabulary for use as sentinels. These tokens are
accessible as &#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. Extra tokens are
indexed from the end of the vocabulary up to beginning (&#x201C;<extra_id_0>&#x201D; is the last token in the vocabulary
like in T5 preprocessing see
<a href="https://github.com/google-research/text-to-text-transfer-transformer/blob/9fd7b14a769417be33bc6c850f9598764913c833/t5/data/preprocessors.py#L2117" rel="nofollow">here</a>).</extra_id_0></extra<em>`,name:"extra_ids"},{anchor:"transformers.T5TokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}]}}),_s=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/tokenization_t5_fast.py#L166",parametersDescription:[{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ts=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/tokenization_t5_fast.py#L192",parametersDescription:[{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ks=new ke({}),vs=new M({props:{name:"class transformers.T5Model",anchor:"transformers.T5Model",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_t5.py#L1264",parametersDescription:[{anchor:"transformers.T5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16142/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xs=new M({props:{name:"forward",anchor:"transformers.T5Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_t5.py#L1340",parametersDescription:[{anchor:"transformers.T5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16142/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16142/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.T5Model.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.T5Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5Model.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.T5Model.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.T5Model.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.T5Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.T5Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5Model.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.T5Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.T5Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16142/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Un=new zt({props:{$$slots:{default:[gw]},$$scope:{ctx:L}}}),Es=new R({props:{code:`from transformers import T5Tokenizer, T5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),qs=new M({props:{name:"parallelize",anchor:"transformers.T5Model.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_t5.py#L1296",parametersDescription:[{anchor:"transformers.T5Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the t5 models have the
following number of attention modules:</p>
<ul>
<li>t5-small: 6</li>
<li>t5-base: 12</li>
<li>t5-large: 24</li>
<li>t5-3b: 24</li>
<li>t5-11b: 24</li>
</ul>`,name:"device_map"}]}}),js=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`}}),Fs=new M({props:{name:"deparallelize",anchor:"transformers.T5Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_t5.py#L1308"}}),Ms=new R({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),Ps=new ke({}),Cs=new M({props:{name:"class transformers.T5ForConditionalGeneration",anchor:"transformers.T5ForConditionalGeneration",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_t5.py#L1453",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16142/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Os=new M({props:{name:"forward",anchor:"transformers.T5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_t5.py#L1534",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16142/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16142/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.T5ForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.T5ForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.T5ForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.T5ForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5ForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5ForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16142/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.T5ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rn=new zt({props:{$$slots:{default:[Tw]},$$scope:{ctx:L}}}),Gs=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

# training
input_ids = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="pt").input_ids
labels = tokenizer("<extra_id_0> cute dog <extra_id_1> the <extra_id_2>", return_tensors="pt").input_ids
outputs = model(input_ids=input_ids, labels=labels)
loss = outputs.loss
logits = outputs.logits

# inference
input_ids = tokenizer(
    "summarize: studies have shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
outputs = model.generate(input_ids)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
# studies have shown that owning a dog is good for you.`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;summarize: studies have shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`}}),Bs=new M({props:{name:"parallelize",anchor:"transformers.T5ForConditionalGeneration.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_t5.py#L1490",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the t5 models have the
following number of attention modules:</p>
<ul>
<li>t5-small: 6</li>
<li>t5-base: 12</li>
<li>t5-large: 24</li>
<li>t5-3b: 24</li>
<li>t5-11b: 24</li>
</ul>`,name:"device_map"}]}}),Us=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`}}),Ws=new M({props:{name:"deparallelize",anchor:"transformers.T5ForConditionalGeneration.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_t5.py#L1503"}}),Rs=new R({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),Hs=new ke({}),Vs=new M({props:{name:"class transformers.T5EncoderModel",anchor:"transformers.T5EncoderModel",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_t5.py#L1747",parametersDescription:[{anchor:"transformers.T5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16142/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Qs=new M({props:{name:"forward",anchor:"transformers.T5EncoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_t5.py#L1805",parametersDescription:[{anchor:"transformers.T5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16142/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5EncoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5EncoderModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5EncoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5EncoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5EncoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5EncoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16142/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vn=new zt({props:{$$slots:{default:[kw]},$$scope:{ctx:L}}}),ea=new R({props:{code:`from transformers import T5Tokenizer, T5EncoderModel

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5EncoderModel.from_pretrained("t5-small")
input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
outputs = model(input_ids=input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5EncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5EncoderModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ta=new M({props:{name:"parallelize",anchor:"transformers.T5EncoderModel.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_t5.py#L1768",parametersDescription:[{anchor:"transformers.T5EncoderModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the t5 models have the
following number of attention modules:</p>
<ul>
<li>t5-small: 6</li>
<li>t5-base: 12</li>
<li>t5-large: 24</li>
<li>t5-3b: 24</li>
<li>t5-11b: 24</li>
</ul>`,name:"device_map"}]}}),na=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`}}),oa=new M({props:{name:"deparallelize",anchor:"transformers.T5EncoderModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_t5.py#L1779"}}),sa=new R({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),aa=new ke({}),ra=new M({props:{name:"class transformers.TFT5Model",anchor:"transformers.TFT5Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_tf_t5.py#L1131",parametersDescription:[{anchor:"transformers.TFT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16142/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Yn=new zt({props:{$$slots:{default:[vw]},$$scope:{ctx:L}}}),ha=new M({props:{name:"call",anchor:"transformers.TFT5Model.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_tf_t5.py#L1157",parametersDescription:[{anchor:"transformers.TFT5Model.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16142/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>inputs</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.TFT5Model.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for sequence to sequence training. T5 uses the <code>pad_token_id</code> as the starting token for
<code>decoder_input_ids</code> generation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code>
have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.TFT5Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5Model.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.
head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zn=new zt({props:{$$slots:{default:[bw]},$$scope:{ctx:L}}}),ua=new R({props:{code:`from transformers import T5Tokenizer, TFT5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = TFT5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="tf"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="tf").input_ids  # Batch size 1

# forward pass
outputs = model(input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ma=new ke({}),fa=new M({props:{name:"class transformers.TFT5ForConditionalGeneration",anchor:"transformers.TFT5ForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_tf_t5.py#L1298",parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16142/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xn=new zt({props:{$$slots:{default:[yw]},$$scope:{ctx:L}}}),ya=new M({props:{name:"call",anchor:"transformers.TFT5ForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_tf_t5.py#L1353",parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16142/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>inputs</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for sequence to sequence training. T5 uses the <code>pad_token_id</code> as the starting token for
<code>decoder_input_ids</code> generation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code>
have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.TFT5ForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.
head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qn=new zt({props:{$$slots:{default:[ww]},$$scope:{ctx:L}}}),wa=new R({props:{code:`from transformers import T5Tokenizer, TFT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = TFT5ForConditionalGeneration.from_pretrained("t5-small")

# training
inputs = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="tf").input_ids
labels = tokenizer("<extra_id_0> cute dog <extra_id_1> the <extra_id_2>", return_tensors="tf").input_ids
outputs = model(inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits

# inference
inputs = tokenizer(
    "summarize: studies have shown that owning a dog is good for you", return_tensors="tf"
).input_ids  # Batch size 1
outputs = model.generate(inputs)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
# studies have shown that owning a dog is good for you`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;summarize: studies have shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you</span>`}}),$a=new ke({}),za=new M({props:{name:"class transformers.TFT5EncoderModel",anchor:"transformers.TFT5EncoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_tf_t5.py#L1600",parametersDescription:[{anchor:"transformers.TFT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16142/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),to=new zt({props:{$$slots:{default:[$w]},$$scope:{ctx:L}}}),Ma=new M({props:{name:"call",anchor:"transformers.TFT5EncoderModel.call",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_tf_t5.py#L1618",parametersDescription:[{anchor:"transformers.TFT5EncoderModel.call.inputs",description:`<strong>inputs</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16142/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p>To know more on how to prepare <code>inputs</code> for pre-training take a look at <a href="./t5#training">T5 Training</a>.`,name:"inputs"},{anchor:"transformers.TFT5EncoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5EncoderModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.
head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"inputs_embeds"},{anchor:"transformers.TFT5EncoderModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFT5EncoderModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFT5EncoderModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16142/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFT5EncoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
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
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),no=new zt({props:{$$slots:{default:[zw]},$$scope:{ctx:L}}}),Pa=new R({props:{code:`from transformers import T5Tokenizer, TFT5EncoderModel

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = TFT5EncoderModel.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="tf"
).input_ids  # Batch size 1
outputs = model(input_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5EncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5EncoderModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),Ca=new ke({}),Aa=new M({props:{name:"class transformers.FlaxT5Model",anchor:"transformers.FlaxT5Model",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_flax_t5.py#L1313"}}),Na=new M({props:{name:"__call__",anchor:"transformers.FlaxT5PreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_flax_t5.py#L945",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16142/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16142/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new zt({props:{$$slots:{default:[xw]},$$scope:{ctx:L}}}),La=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="np"
).input_ids
decoder_input_ids = tokenizer("Studies show that", return_tensors="np").input_ids

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ia=new M({props:{name:"encode",anchor:"transformers.FlaxT5PreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_flax_t5.py#L1030",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16142/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16142/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Da=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Sa=new M({props:{name:"decode",anchor:"transformers.FlaxT5PreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_flax_t5.py#L1088",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16142/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16142/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oa=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
import jax.numpy as jnp

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ga=new ke({}),Ba=new M({props:{name:"class transformers.FlaxT5ForConditionalGeneration",anchor:"transformers.FlaxT5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_flax_t5.py#L1453"}}),Ua=new M({props:{name:"__call__",anchor:"transformers.FlaxT5PreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_flax_t5.py#L945",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16142/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16142/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new zt({props:{$$slots:{default:[Ew]},$$scope:{ctx:L}}}),Wa=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

ARTICLE_TO_SUMMARIZE = "summarize: My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"]).sequences
print(tokenizer.decode(summary_ids[0], skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Ra=new M({props:{name:"encode",anchor:"transformers.FlaxT5PreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_flax_t5.py#L1030",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16142/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16142/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ha=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Va=new M({props:{name:"decode",anchor:"transformers.FlaxT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16142/src/transformers/models/t5/modeling_flax_t5.py#L1456",parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16142/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16142/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16142/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16142/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ka=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
import jax.numpy as jnp

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "summarize: My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=o("meta"),x=d(),b=o("h1"),w=o("a"),z=o("span"),f($.$$.fragment),y=d(),E=o("span"),Ee=r("T5"),oe=d(),q=o("h2"),ee=o("a"),O=o("span"),f(se.$$.fragment),qe=d(),G=o("span"),je=r("Overview"),ve=d(),B=o("p"),I=r("The T5 model was presented in "),ae=o("a"),pe=r("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),F=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),C=d(),he=o("p"),K=r("The abstract from the paper is the following:"),be=d(),ue=o("p"),U=o("em"),Fe=r(`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),ye=d(),P=o("p"),Me=r("Tips:"),H=d(),V=o("ul"),me=o("li"),A=o("p"),Pe=r(`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),fe=o("em"),D=r("translate English to German: \u2026"),Ce=r(`,
for summarization: `),W=o("em"),Ae=r("summarize: \u2026"),m=r("."),j=d(),te=o("li"),Oe=o("p"),pt=r("T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),S=d(),Ge=o("li"),ne=o("p"),ht=r("See the "),N=o("a"),Y=r("training"),ut=r(", "),Ne=o("a"),Z=r("inference"),mt=r(" and "),Le=o("a"),Ie=r("scripts"),ft=r(" sections below for all details regarding usage."),Vl=d(),Xa=o("p"),Sp=r("T5 comes in different sizes:"),Kl=d(),Be=o("ul"),di=o("li"),li=o("p"),To=o("a"),Op=r("t5-small"),Gp=d(),ci=o("li"),pi=o("p"),ko=o("a"),Bp=r("t5-base"),Up=d(),hi=o("li"),ui=o("p"),vo=o("a"),Wp=r("t5-large"),Rp=d(),mi=o("li"),fi=o("p"),bo=o("a"),Hp=r("t5-3b"),Vp=d(),_i=o("li"),Qa=o("p"),yo=o("a"),Kp=r("t5-11b"),Yp=r("."),Yl=d(),er=o("p"),Zp=r("Based on the original T5 model, Google has released some follow-up works:"),Zl=d(),xt=o("ul"),gi=o("li"),zn=o("p"),Ti=o("strong"),Jp=r("T5v1.1"),Xp=r(`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),tr=o("a"),Qp=r("here"),eh=r("."),th=d(),ki=o("li"),xn=o("p"),vi=o("strong"),nh=r("mT5"),oh=r(`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),nr=o("a"),sh=r("here"),ah=r("."),rh=d(),bi=o("li"),En=o("p"),yi=o("strong"),ih=r("byT5"),dh=r(`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),or=o("a"),lh=r("here"),ch=r("."),Jl=d(),qn=o("p"),ph=r("All checkpoints can be found on the "),wo=o("a"),hh=r("hub"),uh=r("."),Xl=d(),Et=o("p"),mh=r("This model was contributed by "),$o=o("a"),fh=r("thomwolf"),_h=r(". The original code can be found "),zo=o("a"),gh=r("here"),Th=r("."),Ql=d(),sr=o("a"),ec=d(),Zt=o("h2"),jn=o("a"),wi=o("span"),f(xo.$$.fragment),kh=d(),$i=o("span"),vh=r("Training"),tc=d(),_t=o("p"),bh=r(`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),zi=o("code"),yh=r("input_ids"),wh=r(`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),xi=o("code"),$h=r("decoder_input_ids"),zh=r(`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),Ei=o("code"),xh=r("labels"),Eh=r(`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),nc=d(),Fn=o("p"),qh=r("One can use "),ar=o("a"),jh=r("T5ForConditionalGeneration"),Fh=r(` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),oc=d(),Mn=o("ul"),dt=o("li"),qi=o("p"),Mh=r("Unsupervised denoising training"),Ph=d(),_e=o("p"),Ch=r("In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),ji=o("em"),Ah=r("a.k.a"),Nh=r(` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Fi=o("em"),Lh=r("real"),Ih=r(` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Mi=o("code"),Dh=r("<extra_id_0>"),Sh=r(`,
`),Pi=o("code"),Oh=r("<extra_id_1>"),Gh=r(", \u2026 up to "),Ci=o("code"),Bh=r("<extra_id_99>"),Uh=r(`. As a default, 100 sentinel tokens are available in
`),rr=o("a"),Wh=r("T5Tokenizer"),Rh=r("."),Hh=d(),Ai=o("p"),Vh=r(`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Kh=d(),f(Eo.$$.fragment),Yh=d(),qo=o("p"),Zh=r("If you\u2019re interested in pre-training T5 on a new corpus, check out the "),jo=o("a"),Jh=r("run_t5_mlm_flax.py"),Xh=r(` script in the Examples
directory.`),Qh=d(),ge=o("li"),Ni=o("p"),eu=r("Supervised training"),tu=d(),Li=o("p"),nu=r(`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),ou=d(),f(Fo.$$.fragment),su=d(),re=o("p"),au=r("As you can see, only 2 inputs are required for the model in order to compute a loss: "),Ii=o("code"),ru=r("input_ids"),iu=r(` (which are the
`),Di=o("code"),du=r("input_ids"),lu=r(" of the encoded input sequence) and "),Si=o("code"),cu=r("labels"),pu=r(" (which are the "),Oi=o("code"),hu=r("input_ids"),uu=r(` of the encoded
target sequence). The model will automatically create the `),Gi=o("code"),mu=r("decoder_input_ids"),fu=r(" based on the "),Bi=o("code"),_u=r("labels"),gu=r(`, by
shifting them one position to the right and prepending the `),Ui=o("code"),Tu=r("config.decoder_start_token_id"),ku=r(`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),vu=d(),Jt=o("p"),bu=r(`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Wi=o("code"),yu=r("max_source_length"),wu=r(" and "),Ri=o("code"),$u=r("max_target_length"),zu=r(`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),xu=d(),Te=o("p"),Eu=r("In addition, we must make sure that padding token id\u2019s of the "),Hi=o("code"),qu=r("labels"),ju=r(` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Vi=o("code"),Fu=r("ignore_index"),Mu=r(`
of the `),Ki=o("code"),Pu=r("CrossEntropyLoss"),Cu=r(". In Flax, one can use the "),Yi=o("code"),Au=r("decoder_attention_mask"),Nu=r(` to ignore padded tokens from
the loss (see the `),Mo=o("a"),Lu=r("Flax summarization script"),Iu=r(` for details). We also pass
`),Zi=o("code"),Du=r("attention_mask"),Su=r(` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),Ou=d(),f(Po.$$.fragment),sc=d(),ir=o("p"),Gu=r("Additional training tips:"),ac=d(),qt=o("ul"),Ji=o("li"),Co=o("p"),Bu=r("T5 models need a slightly higher learning rate than the default one set in the "),Xi=o("code"),Uu=r("Trainer"),Wu=r(` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Ru=d(),Qi=o("li"),Xt=o("p"),Hu=r("According to "),Ao=o("a"),Vu=r("this forum post"),Ku=r(`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),No=o("a"),Yu=r("paper"),Zu=r(` for the task prefixes
used).`),Ju=d(),ed=o("li"),Lo=o("p"),Xu=r(`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),td=o("em"),Qu=r("pad_to_multiple_of"),em=r(` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),rc=d(),dr=o("a"),ic=d(),Qt=o("h2"),Pn=o("a"),nd=o("span"),f(Io.$$.fragment),tm=d(),od=o("span"),nm=r("Inference"),dc=d(),gt=o("p"),om=r("At inference time, it is recommended to use "),lr=o("a"),sm=r("generate()"),am=r(`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Do=o("a"),rm=r("this blog post"),im=r(` to know all the details about generating text with Transformers.
There\u2019s also `),So=o("a"),dm=r("this blog post"),lm=r(` which explains how
generation works in general in encoder-decoder models.`),lc=d(),f(Oo.$$.fragment),cc=d(),Ue=o("p"),cm=r("Note that T5 uses the "),sd=o("code"),pm=r("pad_token_id"),hm=r(" as the "),ad=o("code"),um=r("decoder_start_token_id"),mm=r(`, so when doing generation without using
`),cr=o("a"),fm=r("generate()"),_m=r(", make sure you start it with the "),rd=o("code"),gm=r("pad_token_id"),Tm=r("."),pc=d(),pr=o("p"),km=r("The example above only shows a single example. You can also do batched inference, like so:"),hc=d(),f(Go.$$.fragment),uc=d(),hr=o("a"),mc=d(),en=o("h2"),Cn=o("a"),id=o("span"),f(Bo.$$.fragment),vm=d(),dd=o("span"),bm=r("Performance"),fc=d(),Tt=o("p"),ym=r("If you\u2019d like a faster training and inference performance, install "),Uo=o("a"),wm=r("apex"),$m=r(" and then the model will automatically use "),ld=o("code"),zm=r("apex.normalization.FusedRMSNorm"),xm=r(" instead of "),cd=o("code"),Em=r("T5LayerNorm"),qm=r(". The former uses an optimized fused kernel which is several times faster than the latter."),_c=d(),tn=o("h2"),An=o("a"),pd=o("span"),f(Wo.$$.fragment),jm=d(),hd=o("span"),Fm=r("Example scripts"),gc=d(),ur=o("p"),Mm=r("T5 is supported by several example scripts, both for pre-training and fine-tuning."),Tc=d(),Nn=o("ul"),ud=o("li"),nn=o("p"),Pm=r("pre-training: the "),Ro=o("a"),Cm=r("run_t5_mlm_flax.py"),Am=r(`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Ho=o("a"),Nm=r("t5_tokenizer_model.py"),Lm=r(`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Im=d(),md=o("li"),De=o("p"),Dm=r("fine-tuning: T5 is supported by the official summarization scripts ("),Vo=o("a"),Sm=r("PyTorch"),Om=r(", "),Ko=o("a"),Gm=r("Tensorflow"),Bm=r(", and "),Yo=o("a"),Um=r("Flax"),Wm=r(`) and translation scripts
(`),Zo=o("a"),Rm=r("PyTorch"),Hm=r(" and "),Jo=o("a"),Vm=r("Tensorflow"),Km=r(`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),kc=d(),on=o("h2"),Ln=o("a"),fd=o("span"),f(Xo.$$.fragment),Ym=d(),_d=o("span"),Zm=r("T5Config"),vc=d(),wt=o("div"),f(Qo.$$.fragment),Jm=d(),$t=o("p"),Xm=r("This is the configuration class to store the configuration of a "),mr=o("a"),Qm=r("T5Model"),ef=r(" or a "),fr=o("a"),tf=r("TFT5Model"),nf=r(`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),es=o("a"),of=r("t5-small"),sf=r(" architecture."),af=d(),sn=o("p"),rf=r("Configuration objects inherit from "),_r=o("a"),df=r("PretrainedConfig"),lf=r(` and can be used to control the model outputs. Read the
documentation from `),gr=o("a"),cf=r("PretrainedConfig"),pf=r(" for more information."),bc=d(),an=o("h2"),In=o("a"),gd=o("span"),f(ts.$$.fragment),hf=d(),Td=o("span"),uf=r("T5Tokenizer"),yc=d(),ie=o("div"),f(ns.$$.fragment),mf=d(),os=o("p"),ff=r("Construct a T5 tokenizer. Based on "),ss=o("a"),_f=r("SentencePiece"),gf=r("."),Tf=d(),as=o("p"),kf=r("This tokenizer inherits from "),Tr=o("a"),vf=r("PreTrainedTokenizer"),bf=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),yf=d(),jt=o("div"),f(rs.$$.fragment),wf=d(),kd=o("p"),$f=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),zf=d(),is=o("ul"),kr=o("li"),xf=r("single sequence: "),vd=o("code"),Ef=r("X </s>"),qf=d(),vr=o("li"),jf=r("pair of sequences: "),bd=o("code"),Ff=r("A </s> B </s>"),Mf=d(),Dn=o("div"),f(ds.$$.fragment),Pf=d(),ls=o("p"),Cf=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),yd=o("code"),Af=r("prepare_for_model"),Nf=r(" method."),Lf=d(),Sn=o("div"),f(cs.$$.fragment),If=d(),wd=o("p"),Df=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Sf=d(),br=o("div"),f(ps.$$.fragment),wc=d(),rn=o("h2"),On=o("a"),$d=o("span"),f(hs.$$.fragment),Of=d(),zd=o("span"),Gf=r("T5TokenizerFast"),$c=d(),Se=o("div"),f(us.$$.fragment),Bf=d(),dn=o("p"),Uf=r("Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),xd=o("em"),Wf=r("tokenizers"),Rf=r(` library). Based on
`),ms=o("a"),Hf=r("Unigram"),Vf=r("."),Kf=d(),fs=o("p"),Yf=r("This tokenizer inherits from "),yr=o("a"),Zf=r("PreTrainedTokenizerFast"),Jf=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Xf=d(),Ft=o("div"),f(_s.$$.fragment),Qf=d(),Ed=o("p"),e_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),t_=d(),gs=o("ul"),wr=o("li"),n_=r("single sequence: "),qd=o("code"),o_=r("X </s>"),s_=d(),$r=o("li"),a_=r("pair of sequences: "),jd=o("code"),r_=r("A </s> B </s>"),i_=d(),Gn=o("div"),f(Ts.$$.fragment),d_=d(),Fd=o("p"),l_=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),zc=d(),ln=o("h2"),Bn=o("a"),Md=o("span"),f(ks.$$.fragment),c_=d(),Pd=o("span"),p_=r("T5Model"),xc=d(),J=o("div"),f(vs.$$.fragment),h_=d(),Cd=o("p"),u_=r("The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),m_=d(),bs=o("p"),f_=r("The T5 model was proposed in "),ys=o("a"),__=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),g_=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),T_=d(),ws=o("p"),k_=r("This model inherits from "),zr=o("a"),v_=r("PreTrainedModel"),b_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),y_=d(),$s=o("p"),w_=r("This model is also a PyTorch "),zs=o("a"),$_=r("torch.nn.Module"),z_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),x_=d(),We=o("div"),f(xs.$$.fragment),E_=d(),cn=o("p"),q_=r("The "),xr=o("a"),j_=r("T5Model"),F_=r(" forward method, overrides the "),Ad=o("code"),M_=r("__call__"),P_=r(" special method."),C_=d(),f(Un.$$.fragment),A_=d(),Nd=o("p"),N_=r("Example:"),L_=d(),f(Es.$$.fragment),I_=d(),Re=o("div"),f(qs.$$.fragment),D_=d(),Ld=o("p"),S_=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),O_=d(),Id=o("p"),G_=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),B_=d(),Dd=o("p"),U_=r("Example:"),W_=d(),f(js.$$.fragment),R_=d(),kt=o("div"),f(Fs.$$.fragment),H_=d(),Sd=o("p"),V_=r("Moves the model to cpu from a model parallel state."),K_=d(),Od=o("p"),Y_=r("Example:"),Z_=d(),f(Ms.$$.fragment),Ec=d(),pn=o("h2"),Wn=o("a"),Gd=o("span"),f(Ps.$$.fragment),J_=d(),Bd=o("span"),X_=r("T5ForConditionalGeneration"),qc=d(),X=o("div"),f(Cs.$$.fragment),Q_=d(),As=o("p"),eg=r("T5 Model with a "),Ud=o("code"),tg=r("language modeling"),ng=r(" head on top."),og=d(),Ns=o("p"),sg=r("The T5 model was proposed in "),Ls=o("a"),ag=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),rg=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),ig=d(),Is=o("p"),dg=r("This model inherits from "),Er=o("a"),lg=r("PreTrainedModel"),cg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pg=d(),Ds=o("p"),hg=r("This model is also a PyTorch "),Ss=o("a"),ug=r("torch.nn.Module"),mg=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fg=d(),He=o("div"),f(Os.$$.fragment),_g=d(),hn=o("p"),gg=r("The "),qr=o("a"),Tg=r("T5ForConditionalGeneration"),kg=r(" forward method, overrides the "),Wd=o("code"),vg=r("__call__"),bg=r(" special method."),yg=d(),f(Rn.$$.fragment),wg=d(),Rd=o("p"),$g=r("Examples:"),zg=d(),f(Gs.$$.fragment),xg=d(),Ve=o("div"),f(Bs.$$.fragment),Eg=d(),Hd=o("p"),qg=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),jg=d(),Vd=o("p"),Fg=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Mg=d(),Kd=o("p"),Pg=r("Example:"),Cg=d(),f(Us.$$.fragment),Ag=d(),vt=o("div"),f(Ws.$$.fragment),Ng=d(),Yd=o("p"),Lg=r("Moves the model to cpu from a model parallel state."),Ig=d(),Zd=o("p"),Dg=r("Example:"),Sg=d(),f(Rs.$$.fragment),jc=d(),un=o("h2"),Hn=o("a"),Jd=o("span"),f(Hs.$$.fragment),Og=d(),Xd=o("span"),Gg=r("T5EncoderModel"),Fc=d(),Q=o("div"),f(Vs.$$.fragment),Bg=d(),Qd=o("p"),Ug=r("The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),Wg=d(),Ks=o("p"),Rg=r("The T5 model was proposed in "),Ys=o("a"),Hg=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Vg=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Kg=d(),Zs=o("p"),Yg=r("This model inherits from "),jr=o("a"),Zg=r("PreTrainedModel"),Jg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xg=d(),Js=o("p"),Qg=r("This model is also a PyTorch "),Xs=o("a"),eT=r("torch.nn.Module"),tT=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nT=d(),Ke=o("div"),f(Qs.$$.fragment),oT=d(),mn=o("p"),sT=r("The "),Fr=o("a"),aT=r("T5EncoderModel"),rT=r(" forward method, overrides the "),el=o("code"),iT=r("__call__"),dT=r(" special method."),lT=d(),f(Vn.$$.fragment),cT=d(),tl=o("p"),pT=r("Example:"),hT=d(),f(ea.$$.fragment),uT=d(),Ye=o("div"),f(ta.$$.fragment),mT=d(),nl=o("p"),fT=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),_T=d(),ol=o("p"),gT=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),TT=d(),sl=o("p"),kT=r("Example:"),vT=d(),f(na.$$.fragment),bT=d(),bt=o("div"),f(oa.$$.fragment),yT=d(),al=o("p"),wT=r("Moves the model to cpu from a model parallel state."),$T=d(),rl=o("p"),zT=r("Example:"),xT=d(),f(sa.$$.fragment),Mc=d(),fn=o("h2"),Kn=o("a"),il=o("span"),f(aa.$$.fragment),ET=d(),dl=o("span"),qT=r("TFT5Model"),Pc=d(),de=o("div"),f(ra.$$.fragment),jT=d(),ll=o("p"),FT=r("The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),MT=d(),ia=o("p"),PT=r("The T5 model was proposed in "),da=o("a"),CT=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),AT=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),NT=d(),la=o("p"),LT=r("This model inherits from "),Mr=o("a"),IT=r("TFPreTrainedModel"),DT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ST=d(),ca=o("p"),OT=r("This model is also a "),pa=o("a"),GT=r("tf.keras.Model"),BT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),UT=d(),f(Yn.$$.fragment),WT=d(),Ze=o("div"),f(ha.$$.fragment),RT=d(),_n=o("p"),HT=r("The "),Pr=o("a"),VT=r("TFT5Model"),KT=r(" forward method, overrides the "),cl=o("code"),YT=r("__call__"),ZT=r(" special method."),JT=d(),f(Zn.$$.fragment),XT=d(),pl=o("p"),QT=r("Examples:"),ek=d(),f(ua.$$.fragment),Cc=d(),gn=o("h2"),Jn=o("a"),hl=o("span"),f(ma.$$.fragment),tk=d(),ul=o("span"),nk=r("TFT5ForConditionalGeneration"),Ac=d(),le=o("div"),f(fa.$$.fragment),ok=d(),_a=o("p"),sk=r("T5 Model with a "),ml=o("code"),ak=r("language modeling"),rk=r(" head on top."),ik=d(),ga=o("p"),dk=r("The T5 model was proposed in "),Ta=o("a"),lk=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),ck=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),pk=d(),ka=o("p"),hk=r("This model inherits from "),Cr=o("a"),uk=r("TFPreTrainedModel"),mk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fk=d(),va=o("p"),_k=r("This model is also a "),ba=o("a"),gk=r("tf.keras.Model"),Tk=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kk=d(),f(Xn.$$.fragment),vk=d(),Je=o("div"),f(ya.$$.fragment),bk=d(),Tn=o("p"),yk=r("The "),Ar=o("a"),wk=r("TFT5ForConditionalGeneration"),$k=r(" forward method, overrides the "),fl=o("code"),zk=r("__call__"),xk=r(" special method."),Ek=d(),f(Qn.$$.fragment),qk=d(),_l=o("p"),jk=r("Examples:"),Fk=d(),f(wa.$$.fragment),Nc=d(),kn=o("h2"),eo=o("a"),gl=o("span"),f($a.$$.fragment),Mk=d(),Tl=o("span"),Pk=r("TFT5EncoderModel"),Lc=d(),ce=o("div"),f(za.$$.fragment),Ck=d(),kl=o("p"),Ak=r("The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),Nk=d(),xa=o("p"),Lk=r("The T5 model was proposed in "),Ea=o("a"),Ik=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Dk=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Sk=d(),qa=o("p"),Ok=r("This model inherits from "),Nr=o("a"),Gk=r("TFPreTrainedModel"),Bk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uk=d(),ja=o("p"),Wk=r("This model is also a "),Fa=o("a"),Rk=r("tf.keras.Model"),Hk=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vk=d(),f(to.$$.fragment),Kk=d(),Xe=o("div"),f(Ma.$$.fragment),Yk=d(),vn=o("p"),Zk=r("The "),Lr=o("a"),Jk=r("TFT5EncoderModel"),Xk=r(" forward method, overrides the "),vl=o("code"),Qk=r("__call__"),ev=r(" special method."),tv=d(),f(no.$$.fragment),nv=d(),bl=o("p"),ov=r("Examples:"),sv=d(),f(Pa.$$.fragment),Ic=d(),bn=o("h2"),oo=o("a"),yl=o("span"),f(Ca.$$.fragment),av=d(),wl=o("span"),rv=r("FlaxT5Model"),Dc=d(),lt=o("div"),f(Aa.$$.fragment),iv=d(),Qe=o("div"),f(Na.$$.fragment),dv=d(),yn=o("p"),lv=r("The "),$l=o("code"),cv=r("FlaxT5PreTrainedModel"),pv=r("forward method, overrides the "),zl=o("code"),hv=r("__call__"),uv=r(" special method."),mv=d(),f(so.$$.fragment),fv=d(),xl=o("p"),_v=r("Example:"),gv=d(),f(La.$$.fragment),Tv=d(),Mt=o("div"),f(Ia.$$.fragment),kv=d(),El=o("p"),vv=r("Example:"),bv=d(),f(Da.$$.fragment),yv=d(),Pt=o("div"),f(Sa.$$.fragment),wv=d(),ql=o("p"),$v=r("Example:"),zv=d(),f(Oa.$$.fragment),Sc=d(),wn=o("h2"),ao=o("a"),jl=o("span"),f(Ga.$$.fragment),xv=d(),Fl=o("span"),Ev=r("FlaxT5ForConditionalGeneration"),Oc=d(),ct=o("div"),f(Ba.$$.fragment),qv=d(),et=o("div"),f(Ua.$$.fragment),jv=d(),$n=o("p"),Fv=r("The "),Ml=o("code"),Mv=r("FlaxT5PreTrainedModel"),Pv=r("forward method, overrides the "),Pl=o("code"),Cv=r("__call__"),Av=r(" special method."),Nv=d(),f(ro.$$.fragment),Lv=d(),Cl=o("p"),Iv=r("Example:"),Dv=d(),f(Wa.$$.fragment),Sv=d(),Ct=o("div"),f(Ra.$$.fragment),Ov=d(),Al=o("p"),Gv=r("Example:"),Bv=d(),f(Ha.$$.fragment),Uv=d(),At=o("div"),f(Va.$$.fragment),Wv=d(),Nl=o("p"),Rv=r("Example:"),Hv=d(),f(Ka.$$.fragment),this.h()},l(n){const h=_w('[data-svelte="svelte-1phssyn"]',document.head);u=s(h,"META",{name:!0,content:!0}),h.forEach(t),x=l(n),b=s(n,"H1",{class:!0});var Ya=a(b);w=s(Ya,"A",{id:!0,class:!0,href:!0});var Ll=a(w);z=s(Ll,"SPAN",{});var Il=a(z);_($.$$.fragment,Il),Il.forEach(t),Ll.forEach(t),y=l(Ya),E=s(Ya,"SPAN",{});var Dl=a(E);Ee=i(Dl,"T5"),Dl.forEach(t),Ya.forEach(t),oe=l(n),q=s(n,"H2",{class:!0});var Za=a(q);ee=s(Za,"A",{id:!0,class:!0,href:!0});var Sl=a(ee);O=s(Sl,"SPAN",{});var Ol=a(O);_(se.$$.fragment,Ol),Ol.forEach(t),Sl.forEach(t),qe=l(Za),G=s(Za,"SPAN",{});var Gl=a(G);je=i(Gl,"Overview"),Gl.forEach(t),Za.forEach(t),ve=l(n),B=s(n,"P",{});var Ja=a(B);I=i(Ja,"The T5 model was presented in "),ae=s(Ja,"A",{href:!0,rel:!0});var Bl=a(ae);pe=i(Bl,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),Bl.forEach(t),F=i(Ja,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),Ja.forEach(t),C=l(n),he=s(n,"P",{});var Ul=a(he);K=i(Ul,"The abstract from the paper is the following:"),Ul.forEach(t),be=l(n),ue=s(n,"P",{});var Xv=a(ue);U=s(Xv,"EM",{});var Qv=a(U);Fe=i(Qv,`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),Qv.forEach(t),Xv.forEach(t),ye=l(n),P=s(n,"P",{});var e1=a(P);Me=i(e1,"Tips:"),e1.forEach(t),H=l(n),V=s(n,"UL",{});var Ir=a(V);me=s(Ir,"LI",{});var t1=a(me);A=s(t1,"P",{});var Dr=a(A);Pe=i(Dr,`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),fe=s(Dr,"EM",{});var n1=a(fe);D=i(n1,"translate English to German: \u2026"),n1.forEach(t),Ce=i(Dr,`,
for summarization: `),W=s(Dr,"EM",{});var o1=a(W);Ae=i(o1,"summarize: \u2026"),o1.forEach(t),m=i(Dr,"."),Dr.forEach(t),t1.forEach(t),j=l(Ir),te=s(Ir,"LI",{});var s1=a(te);Oe=s(s1,"P",{});var a1=a(Oe);pt=i(a1,"T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),a1.forEach(t),s1.forEach(t),S=l(Ir),Ge=s(Ir,"LI",{});var r1=a(Ge);ne=s(r1,"P",{});var io=a(ne);ht=i(io,"See the "),N=s(io,"A",{href:!0});var i1=a(N);Y=i(i1,"training"),i1.forEach(t),ut=i(io,", "),Ne=s(io,"A",{href:!0});var d1=a(Ne);Z=i(d1,"inference"),d1.forEach(t),mt=i(io," and "),Le=s(io,"A",{href:!0});var l1=a(Le);Ie=i(l1,"scripts"),l1.forEach(t),ft=i(io," sections below for all details regarding usage."),io.forEach(t),r1.forEach(t),Ir.forEach(t),Vl=l(n),Xa=s(n,"P",{});var c1=a(Xa);Sp=i(c1,"T5 comes in different sizes:"),c1.forEach(t),Kl=l(n),Be=s(n,"UL",{});var Nt=a(Be);di=s(Nt,"LI",{});var p1=a(di);li=s(p1,"P",{});var h1=a(li);To=s(h1,"A",{href:!0,rel:!0});var u1=a(To);Op=i(u1,"t5-small"),u1.forEach(t),h1.forEach(t),p1.forEach(t),Gp=l(Nt),ci=s(Nt,"LI",{});var m1=a(ci);pi=s(m1,"P",{});var f1=a(pi);ko=s(f1,"A",{href:!0,rel:!0});var _1=a(ko);Bp=i(_1,"t5-base"),_1.forEach(t),f1.forEach(t),m1.forEach(t),Up=l(Nt),hi=s(Nt,"LI",{});var g1=a(hi);ui=s(g1,"P",{});var T1=a(ui);vo=s(T1,"A",{href:!0,rel:!0});var k1=a(vo);Wp=i(k1,"t5-large"),k1.forEach(t),T1.forEach(t),g1.forEach(t),Rp=l(Nt),mi=s(Nt,"LI",{});var v1=a(mi);fi=s(v1,"P",{});var b1=a(fi);bo=s(b1,"A",{href:!0,rel:!0});var y1=a(bo);Hp=i(y1,"t5-3b"),y1.forEach(t),b1.forEach(t),v1.forEach(t),Vp=l(Nt),_i=s(Nt,"LI",{});var w1=a(_i);Qa=s(w1,"P",{});var Vv=a(Qa);yo=s(Vv,"A",{href:!0,rel:!0});var $1=a(yo);Kp=i($1,"t5-11b"),$1.forEach(t),Yp=i(Vv,"."),Vv.forEach(t),w1.forEach(t),Nt.forEach(t),Yl=l(n),er=s(n,"P",{});var z1=a(er);Zp=i(z1,"Based on the original T5 model, Google has released some follow-up works:"),z1.forEach(t),Zl=l(n),xt=s(n,"UL",{});var Sr=a(xt);gi=s(Sr,"LI",{});var x1=a(gi);zn=s(x1,"P",{});var Wl=a(zn);Ti=s(Wl,"STRONG",{});var E1=a(Ti);Jp=i(E1,"T5v1.1"),E1.forEach(t),Xp=i(Wl,`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),tr=s(Wl,"A",{href:!0});var q1=a(tr);Qp=i(q1,"here"),q1.forEach(t),eh=i(Wl,"."),Wl.forEach(t),x1.forEach(t),th=l(Sr),ki=s(Sr,"LI",{});var j1=a(ki);xn=s(j1,"P",{});var Rl=a(xn);vi=s(Rl,"STRONG",{});var F1=a(vi);nh=i(F1,"mT5"),F1.forEach(t),oh=i(Rl,`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),nr=s(Rl,"A",{href:!0});var M1=a(nr);sh=i(M1,"here"),M1.forEach(t),ah=i(Rl,"."),Rl.forEach(t),j1.forEach(t),rh=l(Sr),bi=s(Sr,"LI",{});var P1=a(bi);En=s(P1,"P",{});var Hl=a(En);yi=s(Hl,"STRONG",{});var C1=a(yi);ih=i(C1,"byT5"),C1.forEach(t),dh=i(Hl,`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),or=s(Hl,"A",{href:!0});var A1=a(or);lh=i(A1,"here"),A1.forEach(t),ch=i(Hl,"."),Hl.forEach(t),P1.forEach(t),Sr.forEach(t),Jl=l(n),qn=s(n,"P",{});var Bc=a(qn);ph=i(Bc,"All checkpoints can be found on the "),wo=s(Bc,"A",{href:!0,rel:!0});var N1=a(wo);hh=i(N1,"hub"),N1.forEach(t),uh=i(Bc,"."),Bc.forEach(t),Xl=l(n),Et=s(n,"P",{});var Or=a(Et);mh=i(Or,"This model was contributed by "),$o=s(Or,"A",{href:!0,rel:!0});var L1=a($o);fh=i(L1,"thomwolf"),L1.forEach(t),_h=i(Or,". The original code can be found "),zo=s(Or,"A",{href:!0,rel:!0});var I1=a(zo);gh=i(I1,"here"),I1.forEach(t),Th=i(Or,"."),Or.forEach(t),Ql=l(n),sr=s(n,"A",{id:!0}),a(sr).forEach(t),ec=l(n),Zt=s(n,"H2",{class:!0});var Uc=a(Zt);jn=s(Uc,"A",{id:!0,class:!0,href:!0});var D1=a(jn);wi=s(D1,"SPAN",{});var S1=a(wi);_(xo.$$.fragment,S1),S1.forEach(t),D1.forEach(t),kh=l(Uc),$i=s(Uc,"SPAN",{});var O1=a($i);vh=i(O1,"Training"),O1.forEach(t),Uc.forEach(t),tc=l(n),_t=s(n,"P",{});var lo=a(_t);bh=i(lo,`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),zi=s(lo,"CODE",{});var G1=a(zi);yh=i(G1,"input_ids"),G1.forEach(t),wh=i(lo,`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),xi=s(lo,"CODE",{});var B1=a(xi);$h=i(B1,"decoder_input_ids"),B1.forEach(t),zh=i(lo,`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),Ei=s(lo,"CODE",{});var U1=a(Ei);xh=i(U1,"labels"),U1.forEach(t),Eh=i(lo,`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),lo.forEach(t),nc=l(n),Fn=s(n,"P",{});var Wc=a(Fn);qh=i(Wc,"One can use "),ar=s(Wc,"A",{href:!0});var W1=a(ar);jh=i(W1,"T5ForConditionalGeneration"),W1.forEach(t),Fh=i(Wc,` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Wc.forEach(t),oc=l(n),Mn=s(n,"UL",{});var Rc=a(Mn);dt=s(Rc,"LI",{});var Lt=a(dt);qi=s(Lt,"P",{});var R1=a(qi);Mh=i(R1,"Unsupervised denoising training"),R1.forEach(t),Ph=l(Lt),_e=s(Lt,"P",{});var tt=a(_e);Ch=i(tt,"In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),ji=s(tt,"EM",{});var H1=a(ji);Ah=i(H1,"a.k.a"),H1.forEach(t),Nh=i(tt,` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Fi=s(tt,"EM",{});var V1=a(Fi);Lh=i(V1,"real"),V1.forEach(t),Ih=i(tt,` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Mi=s(tt,"CODE",{});var K1=a(Mi);Dh=i(K1,"<extra_id_0>"),K1.forEach(t),Sh=i(tt,`,
`),Pi=s(tt,"CODE",{});var Y1=a(Pi);Oh=i(Y1,"<extra_id_1>"),Y1.forEach(t),Gh=i(tt,", \u2026 up to "),Ci=s(tt,"CODE",{});var Z1=a(Ci);Bh=i(Z1,"<extra_id_99>"),Z1.forEach(t),Uh=i(tt,`. As a default, 100 sentinel tokens are available in
`),rr=s(tt,"A",{href:!0});var J1=a(rr);Wh=i(J1,"T5Tokenizer"),J1.forEach(t),Rh=i(tt,"."),tt.forEach(t),Hh=l(Lt),Ai=s(Lt,"P",{});var X1=a(Ai);Vh=i(X1,`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),X1.forEach(t),Kh=l(Lt),_(Eo.$$.fragment,Lt),Yh=l(Lt),qo=s(Lt,"P",{});var Hc=a(qo);Zh=i(Hc,"If you\u2019re interested in pre-training T5 on a new corpus, check out the "),jo=s(Hc,"A",{href:!0,rel:!0});var Q1=a(jo);Jh=i(Q1,"run_t5_mlm_flax.py"),Q1.forEach(t),Xh=i(Hc,` script in the Examples
directory.`),Hc.forEach(t),Lt.forEach(t),Qh=l(Rc),ge=s(Rc,"LI",{});var nt=a(ge);Ni=s(nt,"P",{});var eb=a(Ni);eu=i(eb,"Supervised training"),eb.forEach(t),tu=l(nt),Li=s(nt,"P",{});var tb=a(Li);nu=i(tb,`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),tb.forEach(t),ou=l(nt),_(Fo.$$.fragment,nt),su=l(nt),re=s(nt,"P",{});var we=a(re);au=i(we,"As you can see, only 2 inputs are required for the model in order to compute a loss: "),Ii=s(we,"CODE",{});var nb=a(Ii);ru=i(nb,"input_ids"),nb.forEach(t),iu=i(we,` (which are the
`),Di=s(we,"CODE",{});var ob=a(Di);du=i(ob,"input_ids"),ob.forEach(t),lu=i(we," of the encoded input sequence) and "),Si=s(we,"CODE",{});var sb=a(Si);cu=i(sb,"labels"),sb.forEach(t),pu=i(we," (which are the "),Oi=s(we,"CODE",{});var ab=a(Oi);hu=i(ab,"input_ids"),ab.forEach(t),uu=i(we,` of the encoded
target sequence). The model will automatically create the `),Gi=s(we,"CODE",{});var rb=a(Gi);mu=i(rb,"decoder_input_ids"),rb.forEach(t),fu=i(we," based on the "),Bi=s(we,"CODE",{});var ib=a(Bi);_u=i(ib,"labels"),ib.forEach(t),gu=i(we,`, by
shifting them one position to the right and prepending the `),Ui=s(we,"CODE",{});var db=a(Ui);Tu=i(db,"config.decoder_start_token_id"),db.forEach(t),ku=i(we,`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),we.forEach(t),vu=l(nt),Jt=s(nt,"P",{});var Gr=a(Jt);bu=i(Gr,`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Wi=s(Gr,"CODE",{});var lb=a(Wi);yu=i(lb,"max_source_length"),lb.forEach(t),wu=i(Gr," and "),Ri=s(Gr,"CODE",{});var cb=a(Ri);$u=i(cb,"max_target_length"),cb.forEach(t),zu=i(Gr,`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),Gr.forEach(t),xu=l(nt),Te=s(nt,"P",{});var ot=a(Te);Eu=i(ot,"In addition, we must make sure that padding token id\u2019s of the "),Hi=s(ot,"CODE",{});var pb=a(Hi);qu=i(pb,"labels"),pb.forEach(t),ju=i(ot,` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Vi=s(ot,"CODE",{});var hb=a(Vi);Fu=i(hb,"ignore_index"),hb.forEach(t),Mu=i(ot,`
of the `),Ki=s(ot,"CODE",{});var ub=a(Ki);Pu=i(ub,"CrossEntropyLoss"),ub.forEach(t),Cu=i(ot,". In Flax, one can use the "),Yi=s(ot,"CODE",{});var mb=a(Yi);Au=i(mb,"decoder_attention_mask"),mb.forEach(t),Nu=i(ot,` to ignore padded tokens from
the loss (see the `),Mo=s(ot,"A",{href:!0,rel:!0});var fb=a(Mo);Lu=i(fb,"Flax summarization script"),fb.forEach(t),Iu=i(ot,` for details). We also pass
`),Zi=s(ot,"CODE",{});var _b=a(Zi);Du=i(_b,"attention_mask"),_b.forEach(t),Su=i(ot,` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),ot.forEach(t),Ou=l(nt),_(Po.$$.fragment,nt),nt.forEach(t),Rc.forEach(t),sc=l(n),ir=s(n,"P",{});var gb=a(ir);Gu=i(gb,"Additional training tips:"),gb.forEach(t),ac=l(n),qt=s(n,"UL",{});var Br=a(qt);Ji=s(Br,"LI",{});var Tb=a(Ji);Co=s(Tb,"P",{});var Vc=a(Co);Bu=i(Vc,"T5 models need a slightly higher learning rate than the default one set in the "),Xi=s(Vc,"CODE",{});var kb=a(Xi);Uu=i(kb,"Trainer"),kb.forEach(t),Wu=i(Vc,` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Vc.forEach(t),Tb.forEach(t),Ru=l(Br),Qi=s(Br,"LI",{});var vb=a(Qi);Xt=s(vb,"P",{});var Ur=a(Xt);Hu=i(Ur,"According to "),Ao=s(Ur,"A",{href:!0,rel:!0});var bb=a(Ao);Vu=i(bb,"this forum post"),bb.forEach(t),Ku=i(Ur,`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),No=s(Ur,"A",{href:!0,rel:!0});var yb=a(No);Yu=i(yb,"paper"),yb.forEach(t),Zu=i(Ur,` for the task prefixes
used).`),Ur.forEach(t),vb.forEach(t),Ju=l(Br),ed=s(Br,"LI",{});var wb=a(ed);Lo=s(wb,"P",{});var Kc=a(Lo);Xu=i(Kc,`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),td=s(Kc,"EM",{});var $b=a(td);Qu=i($b,"pad_to_multiple_of"),$b.forEach(t),em=i(Kc,` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),Kc.forEach(t),wb.forEach(t),Br.forEach(t),rc=l(n),dr=s(n,"A",{id:!0}),a(dr).forEach(t),ic=l(n),Qt=s(n,"H2",{class:!0});var Yc=a(Qt);Pn=s(Yc,"A",{id:!0,class:!0,href:!0});var zb=a(Pn);nd=s(zb,"SPAN",{});var xb=a(nd);_(Io.$$.fragment,xb),xb.forEach(t),zb.forEach(t),tm=l(Yc),od=s(Yc,"SPAN",{});var Eb=a(od);nm=i(Eb,"Inference"),Eb.forEach(t),Yc.forEach(t),dc=l(n),gt=s(n,"P",{});var co=a(gt);om=i(co,"At inference time, it is recommended to use "),lr=s(co,"A",{href:!0});var qb=a(lr);sm=i(qb,"generate()"),qb.forEach(t),am=i(co,`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Do=s(co,"A",{href:!0,rel:!0});var jb=a(Do);rm=i(jb,"this blog post"),jb.forEach(t),im=i(co,` to know all the details about generating text with Transformers.
There\u2019s also `),So=s(co,"A",{href:!0,rel:!0});var Fb=a(So);dm=i(Fb,"this blog post"),Fb.forEach(t),lm=i(co,` which explains how
generation works in general in encoder-decoder models.`),co.forEach(t),lc=l(n),_(Oo.$$.fragment,n),cc=l(n),Ue=s(n,"P",{});var It=a(Ue);cm=i(It,"Note that T5 uses the "),sd=s(It,"CODE",{});var Mb=a(sd);pm=i(Mb,"pad_token_id"),Mb.forEach(t),hm=i(It," as the "),ad=s(It,"CODE",{});var Pb=a(ad);um=i(Pb,"decoder_start_token_id"),Pb.forEach(t),mm=i(It,`, so when doing generation without using
`),cr=s(It,"A",{href:!0});var Cb=a(cr);fm=i(Cb,"generate()"),Cb.forEach(t),_m=i(It,", make sure you start it with the "),rd=s(It,"CODE",{});var Ab=a(rd);gm=i(Ab,"pad_token_id"),Ab.forEach(t),Tm=i(It,"."),It.forEach(t),pc=l(n),pr=s(n,"P",{});var Nb=a(pr);km=i(Nb,"The example above only shows a single example. You can also do batched inference, like so:"),Nb.forEach(t),hc=l(n),_(Go.$$.fragment,n),uc=l(n),hr=s(n,"A",{id:!0}),a(hr).forEach(t),mc=l(n),en=s(n,"H2",{class:!0});var Zc=a(en);Cn=s(Zc,"A",{id:!0,class:!0,href:!0});var Lb=a(Cn);id=s(Lb,"SPAN",{});var Ib=a(id);_(Bo.$$.fragment,Ib),Ib.forEach(t),Lb.forEach(t),vm=l(Zc),dd=s(Zc,"SPAN",{});var Db=a(dd);bm=i(Db,"Performance"),Db.forEach(t),Zc.forEach(t),fc=l(n),Tt=s(n,"P",{});var po=a(Tt);ym=i(po,"If you\u2019d like a faster training and inference performance, install "),Uo=s(po,"A",{href:!0,rel:!0});var Sb=a(Uo);wm=i(Sb,"apex"),Sb.forEach(t),$m=i(po," and then the model will automatically use "),ld=s(po,"CODE",{});var Ob=a(ld);zm=i(Ob,"apex.normalization.FusedRMSNorm"),Ob.forEach(t),xm=i(po," instead of "),cd=s(po,"CODE",{});var Gb=a(cd);Em=i(Gb,"T5LayerNorm"),Gb.forEach(t),qm=i(po,". The former uses an optimized fused kernel which is several times faster than the latter."),po.forEach(t),_c=l(n),tn=s(n,"H2",{class:!0});var Jc=a(tn);An=s(Jc,"A",{id:!0,class:!0,href:!0});var Bb=a(An);pd=s(Bb,"SPAN",{});var Ub=a(pd);_(Wo.$$.fragment,Ub),Ub.forEach(t),Bb.forEach(t),jm=l(Jc),hd=s(Jc,"SPAN",{});var Wb=a(hd);Fm=i(Wb,"Example scripts"),Wb.forEach(t),Jc.forEach(t),gc=l(n),ur=s(n,"P",{});var Rb=a(ur);Mm=i(Rb,"T5 is supported by several example scripts, both for pre-training and fine-tuning."),Rb.forEach(t),Tc=l(n),Nn=s(n,"UL",{});var Xc=a(Nn);ud=s(Xc,"LI",{});var Hb=a(ud);nn=s(Hb,"P",{});var Wr=a(nn);Pm=i(Wr,"pre-training: the "),Ro=s(Wr,"A",{href:!0,rel:!0});var Vb=a(Ro);Cm=i(Vb,"run_t5_mlm_flax.py"),Vb.forEach(t),Am=i(Wr,`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Ho=s(Wr,"A",{href:!0,rel:!0});var Kb=a(Ho);Nm=i(Kb,"t5_tokenizer_model.py"),Kb.forEach(t),Lm=i(Wr,`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Wr.forEach(t),Hb.forEach(t),Im=l(Xc),md=s(Xc,"LI",{});var Yb=a(md);De=s(Yb,"P",{});var yt=a(De);Dm=i(yt,"fine-tuning: T5 is supported by the official summarization scripts ("),Vo=s(yt,"A",{href:!0,rel:!0});var Zb=a(Vo);Sm=i(Zb,"PyTorch"),Zb.forEach(t),Om=i(yt,", "),Ko=s(yt,"A",{href:!0,rel:!0});var Jb=a(Ko);Gm=i(Jb,"Tensorflow"),Jb.forEach(t),Bm=i(yt,", and "),Yo=s(yt,"A",{href:!0,rel:!0});var Xb=a(Yo);Um=i(Xb,"Flax"),Xb.forEach(t),Wm=i(yt,`) and translation scripts
(`),Zo=s(yt,"A",{href:!0,rel:!0});var Qb=a(Zo);Rm=i(Qb,"PyTorch"),Qb.forEach(t),Hm=i(yt," and "),Jo=s(yt,"A",{href:!0,rel:!0});var e5=a(Jo);Vm=i(e5,"Tensorflow"),e5.forEach(t),Km=i(yt,`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),yt.forEach(t),Yb.forEach(t),Xc.forEach(t),kc=l(n),on=s(n,"H2",{class:!0});var Qc=a(on);Ln=s(Qc,"A",{id:!0,class:!0,href:!0});var t5=a(Ln);fd=s(t5,"SPAN",{});var n5=a(fd);_(Xo.$$.fragment,n5),n5.forEach(t),t5.forEach(t),Ym=l(Qc),_d=s(Qc,"SPAN",{});var o5=a(_d);Zm=i(o5,"T5Config"),o5.forEach(t),Qc.forEach(t),vc=l(n),wt=s(n,"DIV",{class:!0});var Rr=a(wt);_(Qo.$$.fragment,Rr),Jm=l(Rr),$t=s(Rr,"P",{});var ho=a($t);Xm=i(ho,"This is the configuration class to store the configuration of a "),mr=s(ho,"A",{href:!0});var s5=a(mr);Qm=i(s5,"T5Model"),s5.forEach(t),ef=i(ho," or a "),fr=s(ho,"A",{href:!0});var a5=a(fr);tf=i(a5,"TFT5Model"),a5.forEach(t),nf=i(ho,`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),es=s(ho,"A",{href:!0,rel:!0});var r5=a(es);of=i(r5,"t5-small"),r5.forEach(t),sf=i(ho," architecture."),ho.forEach(t),af=l(Rr),sn=s(Rr,"P",{});var Hr=a(sn);rf=i(Hr,"Configuration objects inherit from "),_r=s(Hr,"A",{href:!0});var i5=a(_r);df=i(i5,"PretrainedConfig"),i5.forEach(t),lf=i(Hr,` and can be used to control the model outputs. Read the
documentation from `),gr=s(Hr,"A",{href:!0});var d5=a(gr);cf=i(d5,"PretrainedConfig"),d5.forEach(t),pf=i(Hr," for more information."),Hr.forEach(t),Rr.forEach(t),bc=l(n),an=s(n,"H2",{class:!0});var ep=a(an);In=s(ep,"A",{id:!0,class:!0,href:!0});var l5=a(In);gd=s(l5,"SPAN",{});var c5=a(gd);_(ts.$$.fragment,c5),c5.forEach(t),l5.forEach(t),hf=l(ep),Td=s(ep,"SPAN",{});var p5=a(Td);uf=i(p5,"T5Tokenizer"),p5.forEach(t),ep.forEach(t),yc=l(n),ie=s(n,"DIV",{class:!0});var st=a(ie);_(ns.$$.fragment,st),mf=l(st),os=s(st,"P",{});var tp=a(os);ff=i(tp,"Construct a T5 tokenizer. Based on "),ss=s(tp,"A",{href:!0,rel:!0});var h5=a(ss);_f=i(h5,"SentencePiece"),h5.forEach(t),gf=i(tp,"."),tp.forEach(t),Tf=l(st),as=s(st,"P",{});var np=a(as);kf=i(np,"This tokenizer inherits from "),Tr=s(np,"A",{href:!0});var u5=a(Tr);vf=i(u5,"PreTrainedTokenizer"),u5.forEach(t),bf=i(np,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),np.forEach(t),yf=l(st),jt=s(st,"DIV",{class:!0});var Vr=a(jt);_(rs.$$.fragment,Vr),wf=l(Vr),kd=s(Vr,"P",{});var m5=a(kd);$f=i(m5,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),m5.forEach(t),zf=l(Vr),is=s(Vr,"UL",{});var op=a(is);kr=s(op,"LI",{});var Kv=a(kr);xf=i(Kv,"single sequence: "),vd=s(Kv,"CODE",{});var f5=a(vd);Ef=i(f5,"X </s>"),f5.forEach(t),Kv.forEach(t),qf=l(op),vr=s(op,"LI",{});var Yv=a(vr);jf=i(Yv,"pair of sequences: "),bd=s(Yv,"CODE",{});var _5=a(bd);Ff=i(_5,"A </s> B </s>"),_5.forEach(t),Yv.forEach(t),op.forEach(t),Vr.forEach(t),Mf=l(st),Dn=s(st,"DIV",{class:!0});var sp=a(Dn);_(ds.$$.fragment,sp),Pf=l(sp),ls=s(sp,"P",{});var ap=a(ls);Cf=i(ap,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),yd=s(ap,"CODE",{});var g5=a(yd);Af=i(g5,"prepare_for_model"),g5.forEach(t),Nf=i(ap," method."),ap.forEach(t),sp.forEach(t),Lf=l(st),Sn=s(st,"DIV",{class:!0});var rp=a(Sn);_(cs.$$.fragment,rp),If=l(rp),wd=s(rp,"P",{});var T5=a(wd);Df=i(T5,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),T5.forEach(t),rp.forEach(t),Sf=l(st),br=s(st,"DIV",{class:!0});var k5=a(br);_(ps.$$.fragment,k5),k5.forEach(t),st.forEach(t),wc=l(n),rn=s(n,"H2",{class:!0});var ip=a(rn);On=s(ip,"A",{id:!0,class:!0,href:!0});var v5=a(On);$d=s(v5,"SPAN",{});var b5=a($d);_(hs.$$.fragment,b5),b5.forEach(t),v5.forEach(t),Of=l(ip),zd=s(ip,"SPAN",{});var y5=a(zd);Gf=i(y5,"T5TokenizerFast"),y5.forEach(t),ip.forEach(t),$c=l(n),Se=s(n,"DIV",{class:!0});var Dt=a(Se);_(us.$$.fragment,Dt),Bf=l(Dt),dn=s(Dt,"P",{});var Kr=a(dn);Uf=i(Kr,"Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),xd=s(Kr,"EM",{});var w5=a(xd);Wf=i(w5,"tokenizers"),w5.forEach(t),Rf=i(Kr,` library). Based on
`),ms=s(Kr,"A",{href:!0,rel:!0});var $5=a(ms);Hf=i($5,"Unigram"),$5.forEach(t),Vf=i(Kr,"."),Kr.forEach(t),Kf=l(Dt),fs=s(Dt,"P",{});var dp=a(fs);Yf=i(dp,"This tokenizer inherits from "),yr=s(dp,"A",{href:!0});var z5=a(yr);Zf=i(z5,"PreTrainedTokenizerFast"),z5.forEach(t),Jf=i(dp,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),dp.forEach(t),Xf=l(Dt),Ft=s(Dt,"DIV",{class:!0});var Yr=a(Ft);_(_s.$$.fragment,Yr),Qf=l(Yr),Ed=s(Yr,"P",{});var x5=a(Ed);e_=i(x5,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),x5.forEach(t),t_=l(Yr),gs=s(Yr,"UL",{});var lp=a(gs);wr=s(lp,"LI",{});var Zv=a(wr);n_=i(Zv,"single sequence: "),qd=s(Zv,"CODE",{});var E5=a(qd);o_=i(E5,"X </s>"),E5.forEach(t),Zv.forEach(t),s_=l(lp),$r=s(lp,"LI",{});var Jv=a($r);a_=i(Jv,"pair of sequences: "),jd=s(Jv,"CODE",{});var q5=a(jd);r_=i(q5,"A </s> B </s>"),q5.forEach(t),Jv.forEach(t),lp.forEach(t),Yr.forEach(t),i_=l(Dt),Gn=s(Dt,"DIV",{class:!0});var cp=a(Gn);_(Ts.$$.fragment,cp),d_=l(cp),Fd=s(cp,"P",{});var j5=a(Fd);l_=i(j5,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),j5.forEach(t),cp.forEach(t),Dt.forEach(t),zc=l(n),ln=s(n,"H2",{class:!0});var pp=a(ln);Bn=s(pp,"A",{id:!0,class:!0,href:!0});var F5=a(Bn);Md=s(F5,"SPAN",{});var M5=a(Md);_(ks.$$.fragment,M5),M5.forEach(t),F5.forEach(t),c_=l(pp),Pd=s(pp,"SPAN",{});var P5=a(Pd);p_=i(P5,"T5Model"),P5.forEach(t),pp.forEach(t),xc=l(n),J=s(n,"DIV",{class:!0});var $e=a(J);_(vs.$$.fragment,$e),h_=l($e),Cd=s($e,"P",{});var C5=a(Cd);u_=i(C5,"The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),C5.forEach(t),m_=l($e),bs=s($e,"P",{});var hp=a(bs);f_=i(hp,"The T5 model was proposed in "),ys=s(hp,"A",{href:!0,rel:!0});var A5=a(ys);__=i(A5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),A5.forEach(t),g_=i(hp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),hp.forEach(t),T_=l($e),ws=s($e,"P",{});var up=a(ws);k_=i(up,"This model inherits from "),zr=s(up,"A",{href:!0});var N5=a(zr);v_=i(N5,"PreTrainedModel"),N5.forEach(t),b_=i(up,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),up.forEach(t),y_=l($e),$s=s($e,"P",{});var mp=a($s);w_=i(mp,"This model is also a PyTorch "),zs=s(mp,"A",{href:!0,rel:!0});var L5=a(zs);$_=i(L5,"torch.nn.Module"),L5.forEach(t),z_=i(mp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mp.forEach(t),x_=l($e),We=s($e,"DIV",{class:!0});var St=a(We);_(xs.$$.fragment,St),E_=l(St),cn=s(St,"P",{});var Zr=a(cn);q_=i(Zr,"The "),xr=s(Zr,"A",{href:!0});var I5=a(xr);j_=i(I5,"T5Model"),I5.forEach(t),F_=i(Zr," forward method, overrides the "),Ad=s(Zr,"CODE",{});var D5=a(Ad);M_=i(D5,"__call__"),D5.forEach(t),P_=i(Zr," special method."),Zr.forEach(t),C_=l(St),_(Un.$$.fragment,St),A_=l(St),Nd=s(St,"P",{});var S5=a(Nd);N_=i(S5,"Example:"),S5.forEach(t),L_=l(St),_(Es.$$.fragment,St),St.forEach(t),I_=l($e),Re=s($e,"DIV",{class:!0});var Ot=a(Re);_(qs.$$.fragment,Ot),D_=l(Ot),Ld=s(Ot,"P",{});var O5=a(Ld);S_=i(O5,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),O5.forEach(t),O_=l(Ot),Id=s(Ot,"P",{});var G5=a(Id);G_=i(G5,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),G5.forEach(t),B_=l(Ot),Dd=s(Ot,"P",{});var B5=a(Dd);U_=i(B5,"Example:"),B5.forEach(t),W_=l(Ot),_(js.$$.fragment,Ot),Ot.forEach(t),R_=l($e),kt=s($e,"DIV",{class:!0});var uo=a(kt);_(Fs.$$.fragment,uo),H_=l(uo),Sd=s(uo,"P",{});var U5=a(Sd);V_=i(U5,"Moves the model to cpu from a model parallel state."),U5.forEach(t),K_=l(uo),Od=s(uo,"P",{});var W5=a(Od);Y_=i(W5,"Example:"),W5.forEach(t),Z_=l(uo),_(Ms.$$.fragment,uo),uo.forEach(t),$e.forEach(t),Ec=l(n),pn=s(n,"H2",{class:!0});var fp=a(pn);Wn=s(fp,"A",{id:!0,class:!0,href:!0});var R5=a(Wn);Gd=s(R5,"SPAN",{});var H5=a(Gd);_(Ps.$$.fragment,H5),H5.forEach(t),R5.forEach(t),J_=l(fp),Bd=s(fp,"SPAN",{});var V5=a(Bd);X_=i(V5,"T5ForConditionalGeneration"),V5.forEach(t),fp.forEach(t),qc=l(n),X=s(n,"DIV",{class:!0});var ze=a(X);_(Cs.$$.fragment,ze),Q_=l(ze),As=s(ze,"P",{});var _p=a(As);eg=i(_p,"T5 Model with a "),Ud=s(_p,"CODE",{});var K5=a(Ud);tg=i(K5,"language modeling"),K5.forEach(t),ng=i(_p," head on top."),_p.forEach(t),og=l(ze),Ns=s(ze,"P",{});var gp=a(Ns);sg=i(gp,"The T5 model was proposed in "),Ls=s(gp,"A",{href:!0,rel:!0});var Y5=a(Ls);ag=i(Y5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Y5.forEach(t),rg=i(gp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),gp.forEach(t),ig=l(ze),Is=s(ze,"P",{});var Tp=a(Is);dg=i(Tp,"This model inherits from "),Er=s(Tp,"A",{href:!0});var Z5=a(Er);lg=i(Z5,"PreTrainedModel"),Z5.forEach(t),cg=i(Tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tp.forEach(t),pg=l(ze),Ds=s(ze,"P",{});var kp=a(Ds);hg=i(kp,"This model is also a PyTorch "),Ss=s(kp,"A",{href:!0,rel:!0});var J5=a(Ss);ug=i(J5,"torch.nn.Module"),J5.forEach(t),mg=i(kp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kp.forEach(t),fg=l(ze),He=s(ze,"DIV",{class:!0});var Gt=a(He);_(Os.$$.fragment,Gt),_g=l(Gt),hn=s(Gt,"P",{});var Jr=a(hn);gg=i(Jr,"The "),qr=s(Jr,"A",{href:!0});var X5=a(qr);Tg=i(X5,"T5ForConditionalGeneration"),X5.forEach(t),kg=i(Jr," forward method, overrides the "),Wd=s(Jr,"CODE",{});var Q5=a(Wd);vg=i(Q5,"__call__"),Q5.forEach(t),bg=i(Jr," special method."),Jr.forEach(t),yg=l(Gt),_(Rn.$$.fragment,Gt),wg=l(Gt),Rd=s(Gt,"P",{});var ey=a(Rd);$g=i(ey,"Examples:"),ey.forEach(t),zg=l(Gt),_(Gs.$$.fragment,Gt),Gt.forEach(t),xg=l(ze),Ve=s(ze,"DIV",{class:!0});var Bt=a(Ve);_(Bs.$$.fragment,Bt),Eg=l(Bt),Hd=s(Bt,"P",{});var ty=a(Hd);qg=i(ty,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),ty.forEach(t),jg=l(Bt),Vd=s(Bt,"P",{});var ny=a(Vd);Fg=i(ny,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),ny.forEach(t),Mg=l(Bt),Kd=s(Bt,"P",{});var oy=a(Kd);Pg=i(oy,"Example:"),oy.forEach(t),Cg=l(Bt),_(Us.$$.fragment,Bt),Bt.forEach(t),Ag=l(ze),vt=s(ze,"DIV",{class:!0});var mo=a(vt);_(Ws.$$.fragment,mo),Ng=l(mo),Yd=s(mo,"P",{});var sy=a(Yd);Lg=i(sy,"Moves the model to cpu from a model parallel state."),sy.forEach(t),Ig=l(mo),Zd=s(mo,"P",{});var ay=a(Zd);Dg=i(ay,"Example:"),ay.forEach(t),Sg=l(mo),_(Rs.$$.fragment,mo),mo.forEach(t),ze.forEach(t),jc=l(n),un=s(n,"H2",{class:!0});var vp=a(un);Hn=s(vp,"A",{id:!0,class:!0,href:!0});var ry=a(Hn);Jd=s(ry,"SPAN",{});var iy=a(Jd);_(Hs.$$.fragment,iy),iy.forEach(t),ry.forEach(t),Og=l(vp),Xd=s(vp,"SPAN",{});var dy=a(Xd);Gg=i(dy,"T5EncoderModel"),dy.forEach(t),vp.forEach(t),Fc=l(n),Q=s(n,"DIV",{class:!0});var xe=a(Q);_(Vs.$$.fragment,xe),Bg=l(xe),Qd=s(xe,"P",{});var ly=a(Qd);Ug=i(ly,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),ly.forEach(t),Wg=l(xe),Ks=s(xe,"P",{});var bp=a(Ks);Rg=i(bp,"The T5 model was proposed in "),Ys=s(bp,"A",{href:!0,rel:!0});var cy=a(Ys);Hg=i(cy,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),cy.forEach(t),Vg=i(bp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),bp.forEach(t),Kg=l(xe),Zs=s(xe,"P",{});var yp=a(Zs);Yg=i(yp,"This model inherits from "),jr=s(yp,"A",{href:!0});var py=a(jr);Zg=i(py,"PreTrainedModel"),py.forEach(t),Jg=i(yp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yp.forEach(t),Xg=l(xe),Js=s(xe,"P",{});var wp=a(Js);Qg=i(wp,"This model is also a PyTorch "),Xs=s(wp,"A",{href:!0,rel:!0});var hy=a(Xs);eT=i(hy,"torch.nn.Module"),hy.forEach(t),tT=i(wp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wp.forEach(t),nT=l(xe),Ke=s(xe,"DIV",{class:!0});var Ut=a(Ke);_(Qs.$$.fragment,Ut),oT=l(Ut),mn=s(Ut,"P",{});var Xr=a(mn);sT=i(Xr,"The "),Fr=s(Xr,"A",{href:!0});var uy=a(Fr);aT=i(uy,"T5EncoderModel"),uy.forEach(t),rT=i(Xr," forward method, overrides the "),el=s(Xr,"CODE",{});var my=a(el);iT=i(my,"__call__"),my.forEach(t),dT=i(Xr," special method."),Xr.forEach(t),lT=l(Ut),_(Vn.$$.fragment,Ut),cT=l(Ut),tl=s(Ut,"P",{});var fy=a(tl);pT=i(fy,"Example:"),fy.forEach(t),hT=l(Ut),_(ea.$$.fragment,Ut),Ut.forEach(t),uT=l(xe),Ye=s(xe,"DIV",{class:!0});var Wt=a(Ye);_(ta.$$.fragment,Wt),mT=l(Wt),nl=s(Wt,"P",{});var _y=a(nl);fT=i(_y,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),_y.forEach(t),_T=l(Wt),ol=s(Wt,"P",{});var gy=a(ol);gT=i(gy,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),gy.forEach(t),TT=l(Wt),sl=s(Wt,"P",{});var Ty=a(sl);kT=i(Ty,"Example:"),Ty.forEach(t),vT=l(Wt),_(na.$$.fragment,Wt),Wt.forEach(t),bT=l(xe),bt=s(xe,"DIV",{class:!0});var fo=a(bt);_(oa.$$.fragment,fo),yT=l(fo),al=s(fo,"P",{});var ky=a(al);wT=i(ky,"Moves the model to cpu from a model parallel state."),ky.forEach(t),$T=l(fo),rl=s(fo,"P",{});var vy=a(rl);zT=i(vy,"Example:"),vy.forEach(t),xT=l(fo),_(sa.$$.fragment,fo),fo.forEach(t),xe.forEach(t),Mc=l(n),fn=s(n,"H2",{class:!0});var $p=a(fn);Kn=s($p,"A",{id:!0,class:!0,href:!0});var by=a(Kn);il=s(by,"SPAN",{});var yy=a(il);_(aa.$$.fragment,yy),yy.forEach(t),by.forEach(t),ET=l($p),dl=s($p,"SPAN",{});var wy=a(dl);qT=i(wy,"TFT5Model"),wy.forEach(t),$p.forEach(t),Pc=l(n),de=s(n,"DIV",{class:!0});var at=a(de);_(ra.$$.fragment,at),jT=l(at),ll=s(at,"P",{});var $y=a(ll);FT=i($y,"The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),$y.forEach(t),MT=l(at),ia=s(at,"P",{});var zp=a(ia);PT=i(zp,"The T5 model was proposed in "),da=s(zp,"A",{href:!0,rel:!0});var zy=a(da);CT=i(zy,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),zy.forEach(t),AT=i(zp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),zp.forEach(t),NT=l(at),la=s(at,"P",{});var xp=a(la);LT=i(xp,"This model inherits from "),Mr=s(xp,"A",{href:!0});var xy=a(Mr);IT=i(xy,"TFPreTrainedModel"),xy.forEach(t),DT=i(xp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xp.forEach(t),ST=l(at),ca=s(at,"P",{});var Ep=a(ca);OT=i(Ep,"This model is also a "),pa=s(Ep,"A",{href:!0,rel:!0});var Ey=a(pa);GT=i(Ey,"tf.keras.Model"),Ey.forEach(t),BT=i(Ep,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ep.forEach(t),UT=l(at),_(Yn.$$.fragment,at),WT=l(at),Ze=s(at,"DIV",{class:!0});var Rt=a(Ze);_(ha.$$.fragment,Rt),RT=l(Rt),_n=s(Rt,"P",{});var Qr=a(_n);HT=i(Qr,"The "),Pr=s(Qr,"A",{href:!0});var qy=a(Pr);VT=i(qy,"TFT5Model"),qy.forEach(t),KT=i(Qr," forward method, overrides the "),cl=s(Qr,"CODE",{});var jy=a(cl);YT=i(jy,"__call__"),jy.forEach(t),ZT=i(Qr," special method."),Qr.forEach(t),JT=l(Rt),_(Zn.$$.fragment,Rt),XT=l(Rt),pl=s(Rt,"P",{});var Fy=a(pl);QT=i(Fy,"Examples:"),Fy.forEach(t),ek=l(Rt),_(ua.$$.fragment,Rt),Rt.forEach(t),at.forEach(t),Cc=l(n),gn=s(n,"H2",{class:!0});var qp=a(gn);Jn=s(qp,"A",{id:!0,class:!0,href:!0});var My=a(Jn);hl=s(My,"SPAN",{});var Py=a(hl);_(ma.$$.fragment,Py),Py.forEach(t),My.forEach(t),tk=l(qp),ul=s(qp,"SPAN",{});var Cy=a(ul);nk=i(Cy,"TFT5ForConditionalGeneration"),Cy.forEach(t),qp.forEach(t),Ac=l(n),le=s(n,"DIV",{class:!0});var rt=a(le);_(fa.$$.fragment,rt),ok=l(rt),_a=s(rt,"P",{});var jp=a(_a);sk=i(jp,"T5 Model with a "),ml=s(jp,"CODE",{});var Ay=a(ml);ak=i(Ay,"language modeling"),Ay.forEach(t),rk=i(jp," head on top."),jp.forEach(t),ik=l(rt),ga=s(rt,"P",{});var Fp=a(ga);dk=i(Fp,"The T5 model was proposed in "),Ta=s(Fp,"A",{href:!0,rel:!0});var Ny=a(Ta);lk=i(Ny,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Ny.forEach(t),ck=i(Fp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Fp.forEach(t),pk=l(rt),ka=s(rt,"P",{});var Mp=a(ka);hk=i(Mp,"This model inherits from "),Cr=s(Mp,"A",{href:!0});var Ly=a(Cr);uk=i(Ly,"TFPreTrainedModel"),Ly.forEach(t),mk=i(Mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mp.forEach(t),fk=l(rt),va=s(rt,"P",{});var Pp=a(va);_k=i(Pp,"This model is also a "),ba=s(Pp,"A",{href:!0,rel:!0});var Iy=a(ba);gk=i(Iy,"tf.keras.Model"),Iy.forEach(t),Tk=i(Pp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pp.forEach(t),kk=l(rt),_(Xn.$$.fragment,rt),vk=l(rt),Je=s(rt,"DIV",{class:!0});var Ht=a(Je);_(ya.$$.fragment,Ht),bk=l(Ht),Tn=s(Ht,"P",{});var ei=a(Tn);yk=i(ei,"The "),Ar=s(ei,"A",{href:!0});var Dy=a(Ar);wk=i(Dy,"TFT5ForConditionalGeneration"),Dy.forEach(t),$k=i(ei," forward method, overrides the "),fl=s(ei,"CODE",{});var Sy=a(fl);zk=i(Sy,"__call__"),Sy.forEach(t),xk=i(ei," special method."),ei.forEach(t),Ek=l(Ht),_(Qn.$$.fragment,Ht),qk=l(Ht),_l=s(Ht,"P",{});var Oy=a(_l);jk=i(Oy,"Examples:"),Oy.forEach(t),Fk=l(Ht),_(wa.$$.fragment,Ht),Ht.forEach(t),rt.forEach(t),Nc=l(n),kn=s(n,"H2",{class:!0});var Cp=a(kn);eo=s(Cp,"A",{id:!0,class:!0,href:!0});var Gy=a(eo);gl=s(Gy,"SPAN",{});var By=a(gl);_($a.$$.fragment,By),By.forEach(t),Gy.forEach(t),Mk=l(Cp),Tl=s(Cp,"SPAN",{});var Uy=a(Tl);Pk=i(Uy,"TFT5EncoderModel"),Uy.forEach(t),Cp.forEach(t),Lc=l(n),ce=s(n,"DIV",{class:!0});var it=a(ce);_(za.$$.fragment,it),Ck=l(it),kl=s(it,"P",{});var Wy=a(kl);Ak=i(Wy,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),Wy.forEach(t),Nk=l(it),xa=s(it,"P",{});var Ap=a(xa);Lk=i(Ap,"The T5 model was proposed in "),Ea=s(Ap,"A",{href:!0,rel:!0});var Ry=a(Ea);Ik=i(Ry,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Ry.forEach(t),Dk=i(Ap,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Ap.forEach(t),Sk=l(it),qa=s(it,"P",{});var Np=a(qa);Ok=i(Np,"This model inherits from "),Nr=s(Np,"A",{href:!0});var Hy=a(Nr);Gk=i(Hy,"TFPreTrainedModel"),Hy.forEach(t),Bk=i(Np,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Np.forEach(t),Uk=l(it),ja=s(it,"P",{});var Lp=a(ja);Wk=i(Lp,"This model is also a "),Fa=s(Lp,"A",{href:!0,rel:!0});var Vy=a(Fa);Rk=i(Vy,"tf.keras.Model"),Vy.forEach(t),Hk=i(Lp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lp.forEach(t),Vk=l(it),_(to.$$.fragment,it),Kk=l(it),Xe=s(it,"DIV",{class:!0});var Vt=a(Xe);_(Ma.$$.fragment,Vt),Yk=l(Vt),vn=s(Vt,"P",{});var ti=a(vn);Zk=i(ti,"The "),Lr=s(ti,"A",{href:!0});var Ky=a(Lr);Jk=i(Ky,"TFT5EncoderModel"),Ky.forEach(t),Xk=i(ti," forward method, overrides the "),vl=s(ti,"CODE",{});var Yy=a(vl);Qk=i(Yy,"__call__"),Yy.forEach(t),ev=i(ti," special method."),ti.forEach(t),tv=l(Vt),_(no.$$.fragment,Vt),nv=l(Vt),bl=s(Vt,"P",{});var Zy=a(bl);ov=i(Zy,"Examples:"),Zy.forEach(t),sv=l(Vt),_(Pa.$$.fragment,Vt),Vt.forEach(t),it.forEach(t),Ic=l(n),bn=s(n,"H2",{class:!0});var Ip=a(bn);oo=s(Ip,"A",{id:!0,class:!0,href:!0});var Jy=a(oo);yl=s(Jy,"SPAN",{});var Xy=a(yl);_(Ca.$$.fragment,Xy),Xy.forEach(t),Jy.forEach(t),av=l(Ip),wl=s(Ip,"SPAN",{});var Qy=a(wl);rv=i(Qy,"FlaxT5Model"),Qy.forEach(t),Ip.forEach(t),Dc=l(n),lt=s(n,"DIV",{class:!0});var _o=a(lt);_(Aa.$$.fragment,_o),iv=l(_o),Qe=s(_o,"DIV",{class:!0});var Kt=a(Qe);_(Na.$$.fragment,Kt),dv=l(Kt),yn=s(Kt,"P",{});var ni=a(yn);lv=i(ni,"The "),$l=s(ni,"CODE",{});var ew=a($l);cv=i(ew,"FlaxT5PreTrainedModel"),ew.forEach(t),pv=i(ni,"forward method, overrides the "),zl=s(ni,"CODE",{});var tw=a(zl);hv=i(tw,"__call__"),tw.forEach(t),uv=i(ni," special method."),ni.forEach(t),mv=l(Kt),_(so.$$.fragment,Kt),fv=l(Kt),xl=s(Kt,"P",{});var nw=a(xl);_v=i(nw,"Example:"),nw.forEach(t),gv=l(Kt),_(La.$$.fragment,Kt),Kt.forEach(t),Tv=l(_o),Mt=s(_o,"DIV",{class:!0});var oi=a(Mt);_(Ia.$$.fragment,oi),kv=l(oi),El=s(oi,"P",{});var ow=a(El);vv=i(ow,"Example:"),ow.forEach(t),bv=l(oi),_(Da.$$.fragment,oi),oi.forEach(t),yv=l(_o),Pt=s(_o,"DIV",{class:!0});var si=a(Pt);_(Sa.$$.fragment,si),wv=l(si),ql=s(si,"P",{});var sw=a(ql);$v=i(sw,"Example:"),sw.forEach(t),zv=l(si),_(Oa.$$.fragment,si),si.forEach(t),_o.forEach(t),Sc=l(n),wn=s(n,"H2",{class:!0});var Dp=a(wn);ao=s(Dp,"A",{id:!0,class:!0,href:!0});var aw=a(ao);jl=s(aw,"SPAN",{});var rw=a(jl);_(Ga.$$.fragment,rw),rw.forEach(t),aw.forEach(t),xv=l(Dp),Fl=s(Dp,"SPAN",{});var iw=a(Fl);Ev=i(iw,"FlaxT5ForConditionalGeneration"),iw.forEach(t),Dp.forEach(t),Oc=l(n),ct=s(n,"DIV",{class:!0});var go=a(ct);_(Ba.$$.fragment,go),qv=l(go),et=s(go,"DIV",{class:!0});var Yt=a(et);_(Ua.$$.fragment,Yt),jv=l(Yt),$n=s(Yt,"P",{});var ai=a($n);Fv=i(ai,"The "),Ml=s(ai,"CODE",{});var dw=a(Ml);Mv=i(dw,"FlaxT5PreTrainedModel"),dw.forEach(t),Pv=i(ai,"forward method, overrides the "),Pl=s(ai,"CODE",{});var lw=a(Pl);Cv=i(lw,"__call__"),lw.forEach(t),Av=i(ai," special method."),ai.forEach(t),Nv=l(Yt),_(ro.$$.fragment,Yt),Lv=l(Yt),Cl=s(Yt,"P",{});var cw=a(Cl);Iv=i(cw,"Example:"),cw.forEach(t),Dv=l(Yt),_(Wa.$$.fragment,Yt),Yt.forEach(t),Sv=l(go),Ct=s(go,"DIV",{class:!0});var ri=a(Ct);_(Ra.$$.fragment,ri),Ov=l(ri),Al=s(ri,"P",{});var pw=a(Al);Gv=i(pw,"Example:"),pw.forEach(t),Bv=l(ri),_(Ha.$$.fragment,ri),ri.forEach(t),Uv=l(go),At=s(go,"DIV",{class:!0});var ii=a(At);_(Va.$$.fragment,ii),Wv=l(ii),Nl=s(ii,"P",{});var hw=a(Nl);Rv=i(hw,"Example:"),hw.forEach(t),Hv=l(ii),_(Ka.$$.fragment,ii),ii.forEach(t),go.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(jw)),c(w,"id","t5"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#t5"),c(b,"class","relative group"),c(ee,"id","overview"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#overview"),c(q,"class","relative group"),c(ae,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(ae,"rel","nofollow"),c(N,"href","#training"),c(Ne,"href","#inference"),c(Le,"href","#scripts"),c(To,"href","https://huggingface.co/t5-small"),c(To,"rel","nofollow"),c(ko,"href","https://huggingface.co/t5-base"),c(ko,"rel","nofollow"),c(vo,"href","https://huggingface.co/t5-large"),c(vo,"rel","nofollow"),c(bo,"href","https://huggingface.co/t5-3b"),c(bo,"rel","nofollow"),c(yo,"href","https://huggingface.co/t5-11b"),c(yo,"rel","nofollow"),c(tr,"href","t5v1.1"),c(nr,"href","mt5"),c(or,"href","byt5"),c(wo,"href","https://huggingface.co/models?search=t5"),c(wo,"rel","nofollow"),c($o,"href","https://huggingface.co/thomwolf"),c($o,"rel","nofollow"),c(zo,"href","https://github.com/google-research/text-to-text-transfer-transformer"),c(zo,"rel","nofollow"),c(sr,"id","training"),c(jn,"id","training"),c(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jn,"href","#training"),c(Zt,"class","relative group"),c(ar,"href","/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(rr,"href","/docs/transformers/pr_16142/en/model_doc/mt5#transformers.T5Tokenizer"),c(jo,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/language-modeling"),c(jo,"rel","nofollow"),c(Mo,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/summarization"),c(Mo,"rel","nofollow"),c(Ao,"href","https://discuss.huggingface.co/t/t5-finetuning-tips/684"),c(Ao,"rel","nofollow"),c(No,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(No,"rel","nofollow"),c(dr,"id","inference"),c(Pn,"id","inference"),c(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pn,"href","#inference"),c(Qt,"class","relative group"),c(lr,"href","/docs/transformers/pr_16142/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(Do,"href","https://huggingface.co/blog/how-to-generate"),c(Do,"rel","nofollow"),c(So,"href","https://huggingface.co/blog/encoder-decoder#encoder-decoder"),c(So,"rel","nofollow"),c(cr,"href","/docs/transformers/pr_16142/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(hr,"id","scripts"),c(Cn,"id","performance"),c(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Cn,"href","#performance"),c(en,"class","relative group"),c(Uo,"href","https://github.com/NVIDIA/apex#quick-start"),c(Uo,"rel","nofollow"),c(An,"id","example-scripts"),c(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(An,"href","#example-scripts"),c(tn,"class","relative group"),c(Ro,"href","https://github.com/huggingface/transformers/blob/master/examples/flax/language-modeling/run_t5_mlm_flax.py"),c(Ro,"rel","nofollow"),c(Ho,"href","https://github.com/huggingface/transformers/blob/master/examples/flax/language-modeling/t5_tokenizer_model.py"),c(Ho,"rel","nofollow"),c(Vo,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization"),c(Vo,"rel","nofollow"),c(Ko,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/summarization"),c(Ko,"rel","nofollow"),c(Yo,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/summarization"),c(Yo,"rel","nofollow"),c(Zo,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/translation"),c(Zo,"rel","nofollow"),c(Jo,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/translation"),c(Jo,"rel","nofollow"),c(Ln,"id","transformers.T5Config"),c(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ln,"href","#transformers.T5Config"),c(on,"class","relative group"),c(mr,"href","/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5Model"),c(fr,"href","/docs/transformers/pr_16142/en/model_doc/t5#transformers.TFT5Model"),c(es,"href","https://huggingface.co/t5-small"),c(es,"rel","nofollow"),c(_r,"href","/docs/transformers/pr_16142/en/main_classes/configuration#transformers.PretrainedConfig"),c(gr,"href","/docs/transformers/pr_16142/en/main_classes/configuration#transformers.PretrainedConfig"),c(wt,"class","docstring"),c(In,"id","transformers.T5Tokenizer"),c(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(In,"href","#transformers.T5Tokenizer"),c(an,"class","relative group"),c(ss,"href","https://github.com/google/sentencepiece"),c(ss,"rel","nofollow"),c(Tr,"href","/docs/transformers/pr_16142/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(jt,"class","docstring"),c(Dn,"class","docstring"),c(Sn,"class","docstring"),c(br,"class","docstring"),c(ie,"class","docstring"),c(On,"id","transformers.T5TokenizerFast"),c(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(On,"href","#transformers.T5TokenizerFast"),c(rn,"class","relative group"),c(ms,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(ms,"rel","nofollow"),c(yr,"href","/docs/transformers/pr_16142/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ft,"class","docstring"),c(Gn,"class","docstring"),c(Se,"class","docstring"),c(Bn,"id","transformers.T5Model"),c(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bn,"href","#transformers.T5Model"),c(ln,"class","relative group"),c(ys,"href","https://arxiv.org/abs/1910.10683"),c(ys,"rel","nofollow"),c(zr,"href","/docs/transformers/pr_16142/en/main_classes/model#transformers.PreTrainedModel"),c(zs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(zs,"rel","nofollow"),c(xr,"href","/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5Model"),c(We,"class","docstring"),c(Re,"class","docstring"),c(kt,"class","docstring"),c(J,"class","docstring"),c(Wn,"id","transformers.T5ForConditionalGeneration"),c(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wn,"href","#transformers.T5ForConditionalGeneration"),c(pn,"class","relative group"),c(Ls,"href","https://arxiv.org/abs/1910.10683"),c(Ls,"rel","nofollow"),c(Er,"href","/docs/transformers/pr_16142/en/main_classes/model#transformers.PreTrainedModel"),c(Ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ss,"rel","nofollow"),c(qr,"href","/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(He,"class","docstring"),c(Ve,"class","docstring"),c(vt,"class","docstring"),c(X,"class","docstring"),c(Hn,"id","transformers.T5EncoderModel"),c(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Hn,"href","#transformers.T5EncoderModel"),c(un,"class","relative group"),c(Ys,"href","https://arxiv.org/abs/1910.10683"),c(Ys,"rel","nofollow"),c(jr,"href","/docs/transformers/pr_16142/en/main_classes/model#transformers.PreTrainedModel"),c(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Xs,"rel","nofollow"),c(Fr,"href","/docs/transformers/pr_16142/en/model_doc/t5#transformers.T5EncoderModel"),c(Ke,"class","docstring"),c(Ye,"class","docstring"),c(bt,"class","docstring"),c(Q,"class","docstring"),c(Kn,"id","transformers.TFT5Model"),c(Kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kn,"href","#transformers.TFT5Model"),c(fn,"class","relative group"),c(da,"href","https://arxiv.org/abs/1910.10683"),c(da,"rel","nofollow"),c(Mr,"href","/docs/transformers/pr_16142/en/main_classes/model#transformers.TFPreTrainedModel"),c(pa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(pa,"rel","nofollow"),c(Pr,"href","/docs/transformers/pr_16142/en/model_doc/t5#transformers.TFT5Model"),c(Ze,"class","docstring"),c(de,"class","docstring"),c(Jn,"id","transformers.TFT5ForConditionalGeneration"),c(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jn,"href","#transformers.TFT5ForConditionalGeneration"),c(gn,"class","relative group"),c(Ta,"href","https://arxiv.org/abs/1910.10683"),c(Ta,"rel","nofollow"),c(Cr,"href","/docs/transformers/pr_16142/en/main_classes/model#transformers.TFPreTrainedModel"),c(ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ba,"rel","nofollow"),c(Ar,"href","/docs/transformers/pr_16142/en/model_doc/t5#transformers.TFT5ForConditionalGeneration"),c(Je,"class","docstring"),c(le,"class","docstring"),c(eo,"id","transformers.TFT5EncoderModel"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.TFT5EncoderModel"),c(kn,"class","relative group"),c(Ea,"href","https://arxiv.org/abs/1910.10683"),c(Ea,"rel","nofollow"),c(Nr,"href","/docs/transformers/pr_16142/en/main_classes/model#transformers.TFPreTrainedModel"),c(Fa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Fa,"rel","nofollow"),c(Lr,"href","/docs/transformers/pr_16142/en/model_doc/t5#transformers.TFT5EncoderModel"),c(Xe,"class","docstring"),c(ce,"class","docstring"),c(oo,"id","transformers.FlaxT5Model"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.FlaxT5Model"),c(bn,"class","relative group"),c(Qe,"class","docstring"),c(Mt,"class","docstring"),c(Pt,"class","docstring"),c(lt,"class","docstring"),c(ao,"id","transformers.FlaxT5ForConditionalGeneration"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.FlaxT5ForConditionalGeneration"),c(wn,"class","relative group"),c(et,"class","docstring"),c(Ct,"class","docstring"),c(At,"class","docstring"),c(ct,"class","docstring")},m(n,h){e(document.head,u),p(n,x,h),p(n,b,h),e(b,w),e(w,z),g($,z,null),e(b,y),e(b,E),e(E,Ee),p(n,oe,h),p(n,q,h),e(q,ee),e(ee,O),g(se,O,null),e(q,qe),e(q,G),e(G,je),p(n,ve,h),p(n,B,h),e(B,I),e(B,ae),e(ae,pe),e(B,F),p(n,C,h),p(n,he,h),e(he,K),p(n,be,h),p(n,ue,h),e(ue,U),e(U,Fe),p(n,ye,h),p(n,P,h),e(P,Me),p(n,H,h),p(n,V,h),e(V,me),e(me,A),e(A,Pe),e(A,fe),e(fe,D),e(A,Ce),e(A,W),e(W,Ae),e(A,m),e(V,j),e(V,te),e(te,Oe),e(Oe,pt),e(V,S),e(V,Ge),e(Ge,ne),e(ne,ht),e(ne,N),e(N,Y),e(ne,ut),e(ne,Ne),e(Ne,Z),e(ne,mt),e(ne,Le),e(Le,Ie),e(ne,ft),p(n,Vl,h),p(n,Xa,h),e(Xa,Sp),p(n,Kl,h),p(n,Be,h),e(Be,di),e(di,li),e(li,To),e(To,Op),e(Be,Gp),e(Be,ci),e(ci,pi),e(pi,ko),e(ko,Bp),e(Be,Up),e(Be,hi),e(hi,ui),e(ui,vo),e(vo,Wp),e(Be,Rp),e(Be,mi),e(mi,fi),e(fi,bo),e(bo,Hp),e(Be,Vp),e(Be,_i),e(_i,Qa),e(Qa,yo),e(yo,Kp),e(Qa,Yp),p(n,Yl,h),p(n,er,h),e(er,Zp),p(n,Zl,h),p(n,xt,h),e(xt,gi),e(gi,zn),e(zn,Ti),e(Ti,Jp),e(zn,Xp),e(zn,tr),e(tr,Qp),e(zn,eh),e(xt,th),e(xt,ki),e(ki,xn),e(xn,vi),e(vi,nh),e(xn,oh),e(xn,nr),e(nr,sh),e(xn,ah),e(xt,rh),e(xt,bi),e(bi,En),e(En,yi),e(yi,ih),e(En,dh),e(En,or),e(or,lh),e(En,ch),p(n,Jl,h),p(n,qn,h),e(qn,ph),e(qn,wo),e(wo,hh),e(qn,uh),p(n,Xl,h),p(n,Et,h),e(Et,mh),e(Et,$o),e($o,fh),e(Et,_h),e(Et,zo),e(zo,gh),e(Et,Th),p(n,Ql,h),p(n,sr,h),p(n,ec,h),p(n,Zt,h),e(Zt,jn),e(jn,wi),g(xo,wi,null),e(Zt,kh),e(Zt,$i),e($i,vh),p(n,tc,h),p(n,_t,h),e(_t,bh),e(_t,zi),e(zi,yh),e(_t,wh),e(_t,xi),e(xi,$h),e(_t,zh),e(_t,Ei),e(Ei,xh),e(_t,Eh),p(n,nc,h),p(n,Fn,h),e(Fn,qh),e(Fn,ar),e(ar,jh),e(Fn,Fh),p(n,oc,h),p(n,Mn,h),e(Mn,dt),e(dt,qi),e(qi,Mh),e(dt,Ph),e(dt,_e),e(_e,Ch),e(_e,ji),e(ji,Ah),e(_e,Nh),e(_e,Fi),e(Fi,Lh),e(_e,Ih),e(_e,Mi),e(Mi,Dh),e(_e,Sh),e(_e,Pi),e(Pi,Oh),e(_e,Gh),e(_e,Ci),e(Ci,Bh),e(_e,Uh),e(_e,rr),e(rr,Wh),e(_e,Rh),e(dt,Hh),e(dt,Ai),e(Ai,Vh),e(dt,Kh),g(Eo,dt,null),e(dt,Yh),e(dt,qo),e(qo,Zh),e(qo,jo),e(jo,Jh),e(qo,Xh),e(Mn,Qh),e(Mn,ge),e(ge,Ni),e(Ni,eu),e(ge,tu),e(ge,Li),e(Li,nu),e(ge,ou),g(Fo,ge,null),e(ge,su),e(ge,re),e(re,au),e(re,Ii),e(Ii,ru),e(re,iu),e(re,Di),e(Di,du),e(re,lu),e(re,Si),e(Si,cu),e(re,pu),e(re,Oi),e(Oi,hu),e(re,uu),e(re,Gi),e(Gi,mu),e(re,fu),e(re,Bi),e(Bi,_u),e(re,gu),e(re,Ui),e(Ui,Tu),e(re,ku),e(ge,vu),e(ge,Jt),e(Jt,bu),e(Jt,Wi),e(Wi,yu),e(Jt,wu),e(Jt,Ri),e(Ri,$u),e(Jt,zu),e(ge,xu),e(ge,Te),e(Te,Eu),e(Te,Hi),e(Hi,qu),e(Te,ju),e(Te,Vi),e(Vi,Fu),e(Te,Mu),e(Te,Ki),e(Ki,Pu),e(Te,Cu),e(Te,Yi),e(Yi,Au),e(Te,Nu),e(Te,Mo),e(Mo,Lu),e(Te,Iu),e(Te,Zi),e(Zi,Du),e(Te,Su),e(ge,Ou),g(Po,ge,null),p(n,sc,h),p(n,ir,h),e(ir,Gu),p(n,ac,h),p(n,qt,h),e(qt,Ji),e(Ji,Co),e(Co,Bu),e(Co,Xi),e(Xi,Uu),e(Co,Wu),e(qt,Ru),e(qt,Qi),e(Qi,Xt),e(Xt,Hu),e(Xt,Ao),e(Ao,Vu),e(Xt,Ku),e(Xt,No),e(No,Yu),e(Xt,Zu),e(qt,Ju),e(qt,ed),e(ed,Lo),e(Lo,Xu),e(Lo,td),e(td,Qu),e(Lo,em),p(n,rc,h),p(n,dr,h),p(n,ic,h),p(n,Qt,h),e(Qt,Pn),e(Pn,nd),g(Io,nd,null),e(Qt,tm),e(Qt,od),e(od,nm),p(n,dc,h),p(n,gt,h),e(gt,om),e(gt,lr),e(lr,sm),e(gt,am),e(gt,Do),e(Do,rm),e(gt,im),e(gt,So),e(So,dm),e(gt,lm),p(n,lc,h),g(Oo,n,h),p(n,cc,h),p(n,Ue,h),e(Ue,cm),e(Ue,sd),e(sd,pm),e(Ue,hm),e(Ue,ad),e(ad,um),e(Ue,mm),e(Ue,cr),e(cr,fm),e(Ue,_m),e(Ue,rd),e(rd,gm),e(Ue,Tm),p(n,pc,h),p(n,pr,h),e(pr,km),p(n,hc,h),g(Go,n,h),p(n,uc,h),p(n,hr,h),p(n,mc,h),p(n,en,h),e(en,Cn),e(Cn,id),g(Bo,id,null),e(en,vm),e(en,dd),e(dd,bm),p(n,fc,h),p(n,Tt,h),e(Tt,ym),e(Tt,Uo),e(Uo,wm),e(Tt,$m),e(Tt,ld),e(ld,zm),e(Tt,xm),e(Tt,cd),e(cd,Em),e(Tt,qm),p(n,_c,h),p(n,tn,h),e(tn,An),e(An,pd),g(Wo,pd,null),e(tn,jm),e(tn,hd),e(hd,Fm),p(n,gc,h),p(n,ur,h),e(ur,Mm),p(n,Tc,h),p(n,Nn,h),e(Nn,ud),e(ud,nn),e(nn,Pm),e(nn,Ro),e(Ro,Cm),e(nn,Am),e(nn,Ho),e(Ho,Nm),e(nn,Lm),e(Nn,Im),e(Nn,md),e(md,De),e(De,Dm),e(De,Vo),e(Vo,Sm),e(De,Om),e(De,Ko),e(Ko,Gm),e(De,Bm),e(De,Yo),e(Yo,Um),e(De,Wm),e(De,Zo),e(Zo,Rm),e(De,Hm),e(De,Jo),e(Jo,Vm),e(De,Km),p(n,kc,h),p(n,on,h),e(on,Ln),e(Ln,fd),g(Xo,fd,null),e(on,Ym),e(on,_d),e(_d,Zm),p(n,vc,h),p(n,wt,h),g(Qo,wt,null),e(wt,Jm),e(wt,$t),e($t,Xm),e($t,mr),e(mr,Qm),e($t,ef),e($t,fr),e(fr,tf),e($t,nf),e($t,es),e(es,of),e($t,sf),e(wt,af),e(wt,sn),e(sn,rf),e(sn,_r),e(_r,df),e(sn,lf),e(sn,gr),e(gr,cf),e(sn,pf),p(n,bc,h),p(n,an,h),e(an,In),e(In,gd),g(ts,gd,null),e(an,hf),e(an,Td),e(Td,uf),p(n,yc,h),p(n,ie,h),g(ns,ie,null),e(ie,mf),e(ie,os),e(os,ff),e(os,ss),e(ss,_f),e(os,gf),e(ie,Tf),e(ie,as),e(as,kf),e(as,Tr),e(Tr,vf),e(as,bf),e(ie,yf),e(ie,jt),g(rs,jt,null),e(jt,wf),e(jt,kd),e(kd,$f),e(jt,zf),e(jt,is),e(is,kr),e(kr,xf),e(kr,vd),e(vd,Ef),e(is,qf),e(is,vr),e(vr,jf),e(vr,bd),e(bd,Ff),e(ie,Mf),e(ie,Dn),g(ds,Dn,null),e(Dn,Pf),e(Dn,ls),e(ls,Cf),e(ls,yd),e(yd,Af),e(ls,Nf),e(ie,Lf),e(ie,Sn),g(cs,Sn,null),e(Sn,If),e(Sn,wd),e(wd,Df),e(ie,Sf),e(ie,br),g(ps,br,null),p(n,wc,h),p(n,rn,h),e(rn,On),e(On,$d),g(hs,$d,null),e(rn,Of),e(rn,zd),e(zd,Gf),p(n,$c,h),p(n,Se,h),g(us,Se,null),e(Se,Bf),e(Se,dn),e(dn,Uf),e(dn,xd),e(xd,Wf),e(dn,Rf),e(dn,ms),e(ms,Hf),e(dn,Vf),e(Se,Kf),e(Se,fs),e(fs,Yf),e(fs,yr),e(yr,Zf),e(fs,Jf),e(Se,Xf),e(Se,Ft),g(_s,Ft,null),e(Ft,Qf),e(Ft,Ed),e(Ed,e_),e(Ft,t_),e(Ft,gs),e(gs,wr),e(wr,n_),e(wr,qd),e(qd,o_),e(gs,s_),e(gs,$r),e($r,a_),e($r,jd),e(jd,r_),e(Se,i_),e(Se,Gn),g(Ts,Gn,null),e(Gn,d_),e(Gn,Fd),e(Fd,l_),p(n,zc,h),p(n,ln,h),e(ln,Bn),e(Bn,Md),g(ks,Md,null),e(ln,c_),e(ln,Pd),e(Pd,p_),p(n,xc,h),p(n,J,h),g(vs,J,null),e(J,h_),e(J,Cd),e(Cd,u_),e(J,m_),e(J,bs),e(bs,f_),e(bs,ys),e(ys,__),e(bs,g_),e(J,T_),e(J,ws),e(ws,k_),e(ws,zr),e(zr,v_),e(ws,b_),e(J,y_),e(J,$s),e($s,w_),e($s,zs),e(zs,$_),e($s,z_),e(J,x_),e(J,We),g(xs,We,null),e(We,E_),e(We,cn),e(cn,q_),e(cn,xr),e(xr,j_),e(cn,F_),e(cn,Ad),e(Ad,M_),e(cn,P_),e(We,C_),g(Un,We,null),e(We,A_),e(We,Nd),e(Nd,N_),e(We,L_),g(Es,We,null),e(J,I_),e(J,Re),g(qs,Re,null),e(Re,D_),e(Re,Ld),e(Ld,S_),e(Re,O_),e(Re,Id),e(Id,G_),e(Re,B_),e(Re,Dd),e(Dd,U_),e(Re,W_),g(js,Re,null),e(J,R_),e(J,kt),g(Fs,kt,null),e(kt,H_),e(kt,Sd),e(Sd,V_),e(kt,K_),e(kt,Od),e(Od,Y_),e(kt,Z_),g(Ms,kt,null),p(n,Ec,h),p(n,pn,h),e(pn,Wn),e(Wn,Gd),g(Ps,Gd,null),e(pn,J_),e(pn,Bd),e(Bd,X_),p(n,qc,h),p(n,X,h),g(Cs,X,null),e(X,Q_),e(X,As),e(As,eg),e(As,Ud),e(Ud,tg),e(As,ng),e(X,og),e(X,Ns),e(Ns,sg),e(Ns,Ls),e(Ls,ag),e(Ns,rg),e(X,ig),e(X,Is),e(Is,dg),e(Is,Er),e(Er,lg),e(Is,cg),e(X,pg),e(X,Ds),e(Ds,hg),e(Ds,Ss),e(Ss,ug),e(Ds,mg),e(X,fg),e(X,He),g(Os,He,null),e(He,_g),e(He,hn),e(hn,gg),e(hn,qr),e(qr,Tg),e(hn,kg),e(hn,Wd),e(Wd,vg),e(hn,bg),e(He,yg),g(Rn,He,null),e(He,wg),e(He,Rd),e(Rd,$g),e(He,zg),g(Gs,He,null),e(X,xg),e(X,Ve),g(Bs,Ve,null),e(Ve,Eg),e(Ve,Hd),e(Hd,qg),e(Ve,jg),e(Ve,Vd),e(Vd,Fg),e(Ve,Mg),e(Ve,Kd),e(Kd,Pg),e(Ve,Cg),g(Us,Ve,null),e(X,Ag),e(X,vt),g(Ws,vt,null),e(vt,Ng),e(vt,Yd),e(Yd,Lg),e(vt,Ig),e(vt,Zd),e(Zd,Dg),e(vt,Sg),g(Rs,vt,null),p(n,jc,h),p(n,un,h),e(un,Hn),e(Hn,Jd),g(Hs,Jd,null),e(un,Og),e(un,Xd),e(Xd,Gg),p(n,Fc,h),p(n,Q,h),g(Vs,Q,null),e(Q,Bg),e(Q,Qd),e(Qd,Ug),e(Q,Wg),e(Q,Ks),e(Ks,Rg),e(Ks,Ys),e(Ys,Hg),e(Ks,Vg),e(Q,Kg),e(Q,Zs),e(Zs,Yg),e(Zs,jr),e(jr,Zg),e(Zs,Jg),e(Q,Xg),e(Q,Js),e(Js,Qg),e(Js,Xs),e(Xs,eT),e(Js,tT),e(Q,nT),e(Q,Ke),g(Qs,Ke,null),e(Ke,oT),e(Ke,mn),e(mn,sT),e(mn,Fr),e(Fr,aT),e(mn,rT),e(mn,el),e(el,iT),e(mn,dT),e(Ke,lT),g(Vn,Ke,null),e(Ke,cT),e(Ke,tl),e(tl,pT),e(Ke,hT),g(ea,Ke,null),e(Q,uT),e(Q,Ye),g(ta,Ye,null),e(Ye,mT),e(Ye,nl),e(nl,fT),e(Ye,_T),e(Ye,ol),e(ol,gT),e(Ye,TT),e(Ye,sl),e(sl,kT),e(Ye,vT),g(na,Ye,null),e(Q,bT),e(Q,bt),g(oa,bt,null),e(bt,yT),e(bt,al),e(al,wT),e(bt,$T),e(bt,rl),e(rl,zT),e(bt,xT),g(sa,bt,null),p(n,Mc,h),p(n,fn,h),e(fn,Kn),e(Kn,il),g(aa,il,null),e(fn,ET),e(fn,dl),e(dl,qT),p(n,Pc,h),p(n,de,h),g(ra,de,null),e(de,jT),e(de,ll),e(ll,FT),e(de,MT),e(de,ia),e(ia,PT),e(ia,da),e(da,CT),e(ia,AT),e(de,NT),e(de,la),e(la,LT),e(la,Mr),e(Mr,IT),e(la,DT),e(de,ST),e(de,ca),e(ca,OT),e(ca,pa),e(pa,GT),e(ca,BT),e(de,UT),g(Yn,de,null),e(de,WT),e(de,Ze),g(ha,Ze,null),e(Ze,RT),e(Ze,_n),e(_n,HT),e(_n,Pr),e(Pr,VT),e(_n,KT),e(_n,cl),e(cl,YT),e(_n,ZT),e(Ze,JT),g(Zn,Ze,null),e(Ze,XT),e(Ze,pl),e(pl,QT),e(Ze,ek),g(ua,Ze,null),p(n,Cc,h),p(n,gn,h),e(gn,Jn),e(Jn,hl),g(ma,hl,null),e(gn,tk),e(gn,ul),e(ul,nk),p(n,Ac,h),p(n,le,h),g(fa,le,null),e(le,ok),e(le,_a),e(_a,sk),e(_a,ml),e(ml,ak),e(_a,rk),e(le,ik),e(le,ga),e(ga,dk),e(ga,Ta),e(Ta,lk),e(ga,ck),e(le,pk),e(le,ka),e(ka,hk),e(ka,Cr),e(Cr,uk),e(ka,mk),e(le,fk),e(le,va),e(va,_k),e(va,ba),e(ba,gk),e(va,Tk),e(le,kk),g(Xn,le,null),e(le,vk),e(le,Je),g(ya,Je,null),e(Je,bk),e(Je,Tn),e(Tn,yk),e(Tn,Ar),e(Ar,wk),e(Tn,$k),e(Tn,fl),e(fl,zk),e(Tn,xk),e(Je,Ek),g(Qn,Je,null),e(Je,qk),e(Je,_l),e(_l,jk),e(Je,Fk),g(wa,Je,null),p(n,Nc,h),p(n,kn,h),e(kn,eo),e(eo,gl),g($a,gl,null),e(kn,Mk),e(kn,Tl),e(Tl,Pk),p(n,Lc,h),p(n,ce,h),g(za,ce,null),e(ce,Ck),e(ce,kl),e(kl,Ak),e(ce,Nk),e(ce,xa),e(xa,Lk),e(xa,Ea),e(Ea,Ik),e(xa,Dk),e(ce,Sk),e(ce,qa),e(qa,Ok),e(qa,Nr),e(Nr,Gk),e(qa,Bk),e(ce,Uk),e(ce,ja),e(ja,Wk),e(ja,Fa),e(Fa,Rk),e(ja,Hk),e(ce,Vk),g(to,ce,null),e(ce,Kk),e(ce,Xe),g(Ma,Xe,null),e(Xe,Yk),e(Xe,vn),e(vn,Zk),e(vn,Lr),e(Lr,Jk),e(vn,Xk),e(vn,vl),e(vl,Qk),e(vn,ev),e(Xe,tv),g(no,Xe,null),e(Xe,nv),e(Xe,bl),e(bl,ov),e(Xe,sv),g(Pa,Xe,null),p(n,Ic,h),p(n,bn,h),e(bn,oo),e(oo,yl),g(Ca,yl,null),e(bn,av),e(bn,wl),e(wl,rv),p(n,Dc,h),p(n,lt,h),g(Aa,lt,null),e(lt,iv),e(lt,Qe),g(Na,Qe,null),e(Qe,dv),e(Qe,yn),e(yn,lv),e(yn,$l),e($l,cv),e(yn,pv),e(yn,zl),e(zl,hv),e(yn,uv),e(Qe,mv),g(so,Qe,null),e(Qe,fv),e(Qe,xl),e(xl,_v),e(Qe,gv),g(La,Qe,null),e(lt,Tv),e(lt,Mt),g(Ia,Mt,null),e(Mt,kv),e(Mt,El),e(El,vv),e(Mt,bv),g(Da,Mt,null),e(lt,yv),e(lt,Pt),g(Sa,Pt,null),e(Pt,wv),e(Pt,ql),e(ql,$v),e(Pt,zv),g(Oa,Pt,null),p(n,Sc,h),p(n,wn,h),e(wn,ao),e(ao,jl),g(Ga,jl,null),e(wn,xv),e(wn,Fl),e(Fl,Ev),p(n,Oc,h),p(n,ct,h),g(Ba,ct,null),e(ct,qv),e(ct,et),g(Ua,et,null),e(et,jv),e(et,$n),e($n,Fv),e($n,Ml),e(Ml,Mv),e($n,Pv),e($n,Pl),e(Pl,Cv),e($n,Av),e(et,Nv),g(ro,et,null),e(et,Lv),e(et,Cl),e(Cl,Iv),e(et,Dv),g(Wa,et,null),e(ct,Sv),e(ct,Ct),g(Ra,Ct,null),e(Ct,Ov),e(Ct,Al),e(Al,Gv),e(Ct,Bv),g(Ha,Ct,null),e(ct,Uv),e(ct,At),g(Va,At,null),e(At,Wv),e(At,Nl),e(Nl,Rv),e(At,Hv),g(Ka,At,null),Gc=!0},p(n,[h]){const Ya={};h&2&&(Ya.$$scope={dirty:h,ctx:n}),Un.$set(Ya);const Ll={};h&2&&(Ll.$$scope={dirty:h,ctx:n}),Rn.$set(Ll);const Il={};h&2&&(Il.$$scope={dirty:h,ctx:n}),Vn.$set(Il);const Dl={};h&2&&(Dl.$$scope={dirty:h,ctx:n}),Yn.$set(Dl);const Za={};h&2&&(Za.$$scope={dirty:h,ctx:n}),Zn.$set(Za);const Sl={};h&2&&(Sl.$$scope={dirty:h,ctx:n}),Xn.$set(Sl);const Ol={};h&2&&(Ol.$$scope={dirty:h,ctx:n}),Qn.$set(Ol);const Gl={};h&2&&(Gl.$$scope={dirty:h,ctx:n}),to.$set(Gl);const Ja={};h&2&&(Ja.$$scope={dirty:h,ctx:n}),no.$set(Ja);const Bl={};h&2&&(Bl.$$scope={dirty:h,ctx:n}),so.$set(Bl);const Ul={};h&2&&(Ul.$$scope={dirty:h,ctx:n}),ro.$set(Ul)},i(n){Gc||(T($.$$.fragment,n),T(se.$$.fragment,n),T(xo.$$.fragment,n),T(Eo.$$.fragment,n),T(Fo.$$.fragment,n),T(Po.$$.fragment,n),T(Io.$$.fragment,n),T(Oo.$$.fragment,n),T(Go.$$.fragment,n),T(Bo.$$.fragment,n),T(Wo.$$.fragment,n),T(Xo.$$.fragment,n),T(Qo.$$.fragment,n),T(ts.$$.fragment,n),T(ns.$$.fragment,n),T(rs.$$.fragment,n),T(ds.$$.fragment,n),T(cs.$$.fragment,n),T(ps.$$.fragment,n),T(hs.$$.fragment,n),T(us.$$.fragment,n),T(_s.$$.fragment,n),T(Ts.$$.fragment,n),T(ks.$$.fragment,n),T(vs.$$.fragment,n),T(xs.$$.fragment,n),T(Un.$$.fragment,n),T(Es.$$.fragment,n),T(qs.$$.fragment,n),T(js.$$.fragment,n),T(Fs.$$.fragment,n),T(Ms.$$.fragment,n),T(Ps.$$.fragment,n),T(Cs.$$.fragment,n),T(Os.$$.fragment,n),T(Rn.$$.fragment,n),T(Gs.$$.fragment,n),T(Bs.$$.fragment,n),T(Us.$$.fragment,n),T(Ws.$$.fragment,n),T(Rs.$$.fragment,n),T(Hs.$$.fragment,n),T(Vs.$$.fragment,n),T(Qs.$$.fragment,n),T(Vn.$$.fragment,n),T(ea.$$.fragment,n),T(ta.$$.fragment,n),T(na.$$.fragment,n),T(oa.$$.fragment,n),T(sa.$$.fragment,n),T(aa.$$.fragment,n),T(ra.$$.fragment,n),T(Yn.$$.fragment,n),T(ha.$$.fragment,n),T(Zn.$$.fragment,n),T(ua.$$.fragment,n),T(ma.$$.fragment,n),T(fa.$$.fragment,n),T(Xn.$$.fragment,n),T(ya.$$.fragment,n),T(Qn.$$.fragment,n),T(wa.$$.fragment,n),T($a.$$.fragment,n),T(za.$$.fragment,n),T(to.$$.fragment,n),T(Ma.$$.fragment,n),T(no.$$.fragment,n),T(Pa.$$.fragment,n),T(Ca.$$.fragment,n),T(Aa.$$.fragment,n),T(Na.$$.fragment,n),T(so.$$.fragment,n),T(La.$$.fragment,n),T(Ia.$$.fragment,n),T(Da.$$.fragment,n),T(Sa.$$.fragment,n),T(Oa.$$.fragment,n),T(Ga.$$.fragment,n),T(Ba.$$.fragment,n),T(Ua.$$.fragment,n),T(ro.$$.fragment,n),T(Wa.$$.fragment,n),T(Ra.$$.fragment,n),T(Ha.$$.fragment,n),T(Va.$$.fragment,n),T(Ka.$$.fragment,n),Gc=!0)},o(n){k($.$$.fragment,n),k(se.$$.fragment,n),k(xo.$$.fragment,n),k(Eo.$$.fragment,n),k(Fo.$$.fragment,n),k(Po.$$.fragment,n),k(Io.$$.fragment,n),k(Oo.$$.fragment,n),k(Go.$$.fragment,n),k(Bo.$$.fragment,n),k(Wo.$$.fragment,n),k(Xo.$$.fragment,n),k(Qo.$$.fragment,n),k(ts.$$.fragment,n),k(ns.$$.fragment,n),k(rs.$$.fragment,n),k(ds.$$.fragment,n),k(cs.$$.fragment,n),k(ps.$$.fragment,n),k(hs.$$.fragment,n),k(us.$$.fragment,n),k(_s.$$.fragment,n),k(Ts.$$.fragment,n),k(ks.$$.fragment,n),k(vs.$$.fragment,n),k(xs.$$.fragment,n),k(Un.$$.fragment,n),k(Es.$$.fragment,n),k(qs.$$.fragment,n),k(js.$$.fragment,n),k(Fs.$$.fragment,n),k(Ms.$$.fragment,n),k(Ps.$$.fragment,n),k(Cs.$$.fragment,n),k(Os.$$.fragment,n),k(Rn.$$.fragment,n),k(Gs.$$.fragment,n),k(Bs.$$.fragment,n),k(Us.$$.fragment,n),k(Ws.$$.fragment,n),k(Rs.$$.fragment,n),k(Hs.$$.fragment,n),k(Vs.$$.fragment,n),k(Qs.$$.fragment,n),k(Vn.$$.fragment,n),k(ea.$$.fragment,n),k(ta.$$.fragment,n),k(na.$$.fragment,n),k(oa.$$.fragment,n),k(sa.$$.fragment,n),k(aa.$$.fragment,n),k(ra.$$.fragment,n),k(Yn.$$.fragment,n),k(ha.$$.fragment,n),k(Zn.$$.fragment,n),k(ua.$$.fragment,n),k(ma.$$.fragment,n),k(fa.$$.fragment,n),k(Xn.$$.fragment,n),k(ya.$$.fragment,n),k(Qn.$$.fragment,n),k(wa.$$.fragment,n),k($a.$$.fragment,n),k(za.$$.fragment,n),k(to.$$.fragment,n),k(Ma.$$.fragment,n),k(no.$$.fragment,n),k(Pa.$$.fragment,n),k(Ca.$$.fragment,n),k(Aa.$$.fragment,n),k(Na.$$.fragment,n),k(so.$$.fragment,n),k(La.$$.fragment,n),k(Ia.$$.fragment,n),k(Da.$$.fragment,n),k(Sa.$$.fragment,n),k(Oa.$$.fragment,n),k(Ga.$$.fragment,n),k(Ba.$$.fragment,n),k(Ua.$$.fragment,n),k(ro.$$.fragment,n),k(Wa.$$.fragment,n),k(Ra.$$.fragment,n),k(Ha.$$.fragment,n),k(Va.$$.fragment,n),k(Ka.$$.fragment,n),Gc=!1},d(n){t(u),n&&t(x),n&&t(b),v($),n&&t(oe),n&&t(q),v(se),n&&t(ve),n&&t(B),n&&t(C),n&&t(he),n&&t(be),n&&t(ue),n&&t(ye),n&&t(P),n&&t(H),n&&t(V),n&&t(Vl),n&&t(Xa),n&&t(Kl),n&&t(Be),n&&t(Yl),n&&t(er),n&&t(Zl),n&&t(xt),n&&t(Jl),n&&t(qn),n&&t(Xl),n&&t(Et),n&&t(Ql),n&&t(sr),n&&t(ec),n&&t(Zt),v(xo),n&&t(tc),n&&t(_t),n&&t(nc),n&&t(Fn),n&&t(oc),n&&t(Mn),v(Eo),v(Fo),v(Po),n&&t(sc),n&&t(ir),n&&t(ac),n&&t(qt),n&&t(rc),n&&t(dr),n&&t(ic),n&&t(Qt),v(Io),n&&t(dc),n&&t(gt),n&&t(lc),v(Oo,n),n&&t(cc),n&&t(Ue),n&&t(pc),n&&t(pr),n&&t(hc),v(Go,n),n&&t(uc),n&&t(hr),n&&t(mc),n&&t(en),v(Bo),n&&t(fc),n&&t(Tt),n&&t(_c),n&&t(tn),v(Wo),n&&t(gc),n&&t(ur),n&&t(Tc),n&&t(Nn),n&&t(kc),n&&t(on),v(Xo),n&&t(vc),n&&t(wt),v(Qo),n&&t(bc),n&&t(an),v(ts),n&&t(yc),n&&t(ie),v(ns),v(rs),v(ds),v(cs),v(ps),n&&t(wc),n&&t(rn),v(hs),n&&t($c),n&&t(Se),v(us),v(_s),v(Ts),n&&t(zc),n&&t(ln),v(ks),n&&t(xc),n&&t(J),v(vs),v(xs),v(Un),v(Es),v(qs),v(js),v(Fs),v(Ms),n&&t(Ec),n&&t(pn),v(Ps),n&&t(qc),n&&t(X),v(Cs),v(Os),v(Rn),v(Gs),v(Bs),v(Us),v(Ws),v(Rs),n&&t(jc),n&&t(un),v(Hs),n&&t(Fc),n&&t(Q),v(Vs),v(Qs),v(Vn),v(ea),v(ta),v(na),v(oa),v(sa),n&&t(Mc),n&&t(fn),v(aa),n&&t(Pc),n&&t(de),v(ra),v(Yn),v(ha),v(Zn),v(ua),n&&t(Cc),n&&t(gn),v(ma),n&&t(Ac),n&&t(le),v(fa),v(Xn),v(ya),v(Qn),v(wa),n&&t(Nc),n&&t(kn),v($a),n&&t(Lc),n&&t(ce),v(za),v(to),v(Ma),v(no),v(Pa),n&&t(Ic),n&&t(bn),v(Ca),n&&t(Dc),n&&t(lt),v(Aa),v(Na),v(so),v(La),v(Ia),v(Da),v(Sa),v(Oa),n&&t(Sc),n&&t(wn),v(Ga),n&&t(Oc),n&&t(ct),v(Ba),v(Ua),v(ro),v(Wa),v(Ra),v(Ha),v(Va),v(Ka)}}}const jw={local:"t5",sections:[{local:"overview",title:"Overview"},{local:"training",title:"Training"},{local:"inference",title:"Inference"},{local:"performance",title:"Performance"},{local:"example-scripts",title:"Example scripts"},{local:"transformers.T5Config",title:"T5Config"},{local:"transformers.T5Tokenizer",title:"T5Tokenizer"},{local:"transformers.T5TokenizerFast",title:"T5TokenizerFast"},{local:"transformers.T5Model",title:"T5Model"},{local:"transformers.T5ForConditionalGeneration",title:"T5ForConditionalGeneration"},{local:"transformers.T5EncoderModel",title:"T5EncoderModel"},{local:"transformers.TFT5Model",title:"TFT5Model"},{local:"transformers.TFT5ForConditionalGeneration",title:"TFT5ForConditionalGeneration"},{local:"transformers.TFT5EncoderModel",title:"TFT5EncoderModel"},{local:"transformers.FlaxT5Model",title:"FlaxT5Model"},{local:"transformers.FlaxT5ForConditionalGeneration",title:"FlaxT5ForConditionalGeneration"}],title:"T5"};function Fw(L,u,x){let{fw:b}=u;return L.$$set=w=>{"fw"in w&&x(0,b=w.fw)},[b]}class Iw extends uw{constructor(u){super();mw(this,u,Fw,qw,fw,{fw:0})}}export{Iw as default,jw as metadata};
