import{S as uw,i as mw,s as fw,e as o,k as d,w as f,t as r,M as _w,c as s,d as t,m as l,a,x as _,h as i,b as c,F as e,g as p,y as g,q as T,o as v,B as k,v as gw}from"../../chunks/vendor-6b77c823.js";import{T as $t}from"../../chunks/Tip-39098574.js";import{D as M}from"../../chunks/Docstring-abef54e3.js";import{C as R}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ve}from"../../chunks/IconCopyLink-7a11ce68.js";function Tw(L){let u,z,b,w,$;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var y=a(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var q=a(b);w=i(q,"Module"),q.forEach(t),$=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(x,y){p(x,u,y),e(u,z),e(u,b),e(b,w),e(u,$)},d(x){x&&t(u)}}}function vw(L){let u,z,b,w,$;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var y=a(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var q=a(b);w=i(q,"Module"),q.forEach(t),$=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(x,y){p(x,u,y),e(u,z),e(u,b),e(b,w),e(u,$)},d(x){x&&t(u)}}}function kw(L){let u,z,b,w,$;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var y=a(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var q=a(b);w=i(q,"Module"),q.forEach(t),$=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(x,y){p(x,u,y),e(u,z),e(u,b),e(b,w),e(u,$)},d(x){x&&t(u)}}}function bw(L){let u,z,b,w,$,x,y,q,qe,oe,E,ee,S,se,Ee,G,je,ke,U,A,ae,pe,F,P,he,K,be,ue,W,Fe,ye,C,Me,H,V,me,N,Ce,fe,I,Pe,B,Ne;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),b=d(),w=o("ul"),$=o("li"),x=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),q=o("li"),qe=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),E=o("p"),ee=r("This second option is useful when using "),S=o("code"),se=r("tf.keras.Model.fit"),Ee=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),je=r("model(inputs)"),ke=r("."),U=d(),A=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=o("ul"),P=o("li"),he=r("a single Tensor with "),K=o("code"),be=r("input_ids"),ue=r(" only and nothing else: "),W=o("code"),Fe=r("model(inputs_ids)"),ye=d(),C=o("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),me=r(" or "),N=o("code"),Ce=r("model([input_ids, attention_mask, token_type_ids])"),fe=d(),I=o("li"),Pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=o("code"),Ne=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);z=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),w=s(m,"UL",{});var te=a(w);$=s(te,"LI",{});var Se=a($);x=i(Se,"having all inputs as keyword arguments (like PyTorch models), or"),Se.forEach(t),y=l(te),q=s(te,"LI",{});var pt=a(q);qe=i(pt,"having all inputs as a list, tuple or dict in the first positional arguments."),pt.forEach(t),te.forEach(t),oe=l(m),E=s(m,"P",{});var D=a(E);ee=i(D,"This second option is useful when using "),S=s(D,"CODE",{});var Ge=a(S);se=i(Ge,"tf.keras.Model.fit"),Ge.forEach(t),Ee=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(D,"CODE",{});var ne=a(G);je=i(ne,"model(inputs)"),ne.forEach(t),ke=i(D,"."),D.forEach(t),U=l(m),A=s(m,"P",{});var ht=a(A);ae=i(ht,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ht.forEach(t),pe=l(m),F=s(m,"UL",{});var O=a(F);P=s(O,"LI",{});var Y=a(P);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var ut=a(K);be=i(ut,"input_ids"),ut.forEach(t),ue=i(Y," only and nothing else: "),W=s(Y,"CODE",{});var Oe=a(W);Fe=i(Oe,"model(inputs_ids)"),Oe.forEach(t),Y.forEach(t),ye=l(O),C=s(O,"LI",{});var Z=a(C);Me=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var mt=a(H);V=i(mt,"model([input_ids, attention_mask])"),mt.forEach(t),me=i(Z," or "),N=s(Z,"CODE",{});var Le=a(N);Ce=i(Le,"model([input_ids, attention_mask, token_type_ids])"),Le.forEach(t),Z.forEach(t),fe=l(O),I=s(O,"LI",{});var Ae=a(I);Pe=i(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(Ae,"CODE",{});var ft=a(B);Ne=i(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),Ae.forEach(t),O.forEach(t)},m(m,j){p(m,u,j),e(u,z),p(m,b,j),p(m,w,j),e(w,$),e($,x),e(w,y),e(w,q),e(q,qe),p(m,oe,j),p(m,E,j),e(E,ee),e(E,S),e(S,se),e(E,Ee),e(E,G),e(G,je),e(E,ke),p(m,U,j),p(m,A,j),e(A,ae),p(m,pe,j),p(m,F,j),e(F,P),e(P,he),e(P,K),e(K,be),e(P,ue),e(P,W),e(W,Fe),e(F,ye),e(F,C),e(C,Me),e(C,H),e(H,V),e(C,me),e(C,N),e(N,Ce),e(F,fe),e(F,I),e(I,Pe),e(I,B),e(B,Ne)},d(m){m&&t(u),m&&t(b),m&&t(w),m&&t(oe),m&&t(E),m&&t(U),m&&t(A),m&&t(pe),m&&t(F)}}}function yw(L){let u,z,b,w,$;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var y=a(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var q=a(b);w=i(q,"Module"),q.forEach(t),$=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(x,y){p(x,u,y),e(u,z),e(u,b),e(b,w),e(u,$)},d(x){x&&t(u)}}}function ww(L){let u,z,b,w,$,x,y,q,qe,oe,E,ee,S,se,Ee,G,je,ke,U,A,ae,pe,F,P,he,K,be,ue,W,Fe,ye,C,Me,H,V,me,N,Ce,fe,I,Pe,B,Ne;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),b=d(),w=o("ul"),$=o("li"),x=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),q=o("li"),qe=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),E=o("p"),ee=r("This second option is useful when using "),S=o("code"),se=r("tf.keras.Model.fit"),Ee=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),je=r("model(inputs)"),ke=r("."),U=d(),A=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=o("ul"),P=o("li"),he=r("a single Tensor with "),K=o("code"),be=r("input_ids"),ue=r(" only and nothing else: "),W=o("code"),Fe=r("model(inputs_ids)"),ye=d(),C=o("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),me=r(" or "),N=o("code"),Ce=r("model([input_ids, attention_mask, token_type_ids])"),fe=d(),I=o("li"),Pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=o("code"),Ne=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);z=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),w=s(m,"UL",{});var te=a(w);$=s(te,"LI",{});var Se=a($);x=i(Se,"having all inputs as keyword arguments (like PyTorch models), or"),Se.forEach(t),y=l(te),q=s(te,"LI",{});var pt=a(q);qe=i(pt,"having all inputs as a list, tuple or dict in the first positional arguments."),pt.forEach(t),te.forEach(t),oe=l(m),E=s(m,"P",{});var D=a(E);ee=i(D,"This second option is useful when using "),S=s(D,"CODE",{});var Ge=a(S);se=i(Ge,"tf.keras.Model.fit"),Ge.forEach(t),Ee=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(D,"CODE",{});var ne=a(G);je=i(ne,"model(inputs)"),ne.forEach(t),ke=i(D,"."),D.forEach(t),U=l(m),A=s(m,"P",{});var ht=a(A);ae=i(ht,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ht.forEach(t),pe=l(m),F=s(m,"UL",{});var O=a(F);P=s(O,"LI",{});var Y=a(P);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var ut=a(K);be=i(ut,"input_ids"),ut.forEach(t),ue=i(Y," only and nothing else: "),W=s(Y,"CODE",{});var Oe=a(W);Fe=i(Oe,"model(inputs_ids)"),Oe.forEach(t),Y.forEach(t),ye=l(O),C=s(O,"LI",{});var Z=a(C);Me=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var mt=a(H);V=i(mt,"model([input_ids, attention_mask])"),mt.forEach(t),me=i(Z," or "),N=s(Z,"CODE",{});var Le=a(N);Ce=i(Le,"model([input_ids, attention_mask, token_type_ids])"),Le.forEach(t),Z.forEach(t),fe=l(O),I=s(O,"LI",{});var Ae=a(I);Pe=i(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(Ae,"CODE",{});var ft=a(B);Ne=i(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),Ae.forEach(t),O.forEach(t)},m(m,j){p(m,u,j),e(u,z),p(m,b,j),p(m,w,j),e(w,$),e($,x),e(w,y),e(w,q),e(q,qe),p(m,oe,j),p(m,E,j),e(E,ee),e(E,S),e(S,se),e(E,Ee),e(E,G),e(G,je),e(E,ke),p(m,U,j),p(m,A,j),e(A,ae),p(m,pe,j),p(m,F,j),e(F,P),e(P,he),e(P,K),e(K,be),e(P,ue),e(P,W),e(W,Fe),e(F,ye),e(F,C),e(C,Me),e(C,H),e(H,V),e(C,me),e(C,N),e(N,Ce),e(F,fe),e(F,I),e(I,Pe),e(I,B),e(B,Ne)},d(m){m&&t(u),m&&t(b),m&&t(w),m&&t(oe),m&&t(E),m&&t(U),m&&t(A),m&&t(pe),m&&t(F)}}}function xw(L){let u,z,b,w,$;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var y=a(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var q=a(b);w=i(q,"Module"),q.forEach(t),$=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(x,y){p(x,u,y),e(u,z),e(u,b),e(b,w),e(u,$)},d(x){x&&t(u)}}}function $w(L){let u,z,b,w,$,x,y,q,qe,oe,E,ee,S,se,Ee,G,je,ke,U,A,ae,pe,F,P,he,K,be,ue,W,Fe,ye,C,Me,H,V,me,N,Ce,fe,I,Pe,B,Ne;return{c(){u=o("p"),z=r("TF 2.0 models accepts two formats as inputs:"),b=d(),w=o("ul"),$=o("li"),x=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),q=o("li"),qe=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),E=o("p"),ee=r("This second option is useful when using "),S=o("code"),se=r("tf.keras.Model.fit"),Ee=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),je=r("model(inputs)"),ke=r("."),U=d(),A=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=o("ul"),P=o("li"),he=r("a single Tensor with "),K=o("code"),be=r("input_ids"),ue=r(" only and nothing else: "),W=o("code"),Fe=r("model(inputs_ids)"),ye=d(),C=o("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),me=r(" or "),N=o("code"),Ce=r("model([input_ids, attention_mask, token_type_ids])"),fe=d(),I=o("li"),Pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=o("code"),Ne=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);z=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),w=s(m,"UL",{});var te=a(w);$=s(te,"LI",{});var Se=a($);x=i(Se,"having all inputs as keyword arguments (like PyTorch models), or"),Se.forEach(t),y=l(te),q=s(te,"LI",{});var pt=a(q);qe=i(pt,"having all inputs as a list, tuple or dict in the first positional arguments."),pt.forEach(t),te.forEach(t),oe=l(m),E=s(m,"P",{});var D=a(E);ee=i(D,"This second option is useful when using "),S=s(D,"CODE",{});var Ge=a(S);se=i(Ge,"tf.keras.Model.fit"),Ge.forEach(t),Ee=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(D,"CODE",{});var ne=a(G);je=i(ne,"model(inputs)"),ne.forEach(t),ke=i(D,"."),D.forEach(t),U=l(m),A=s(m,"P",{});var ht=a(A);ae=i(ht,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ht.forEach(t),pe=l(m),F=s(m,"UL",{});var O=a(F);P=s(O,"LI",{});var Y=a(P);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var ut=a(K);be=i(ut,"input_ids"),ut.forEach(t),ue=i(Y," only and nothing else: "),W=s(Y,"CODE",{});var Oe=a(W);Fe=i(Oe,"model(inputs_ids)"),Oe.forEach(t),Y.forEach(t),ye=l(O),C=s(O,"LI",{});var Z=a(C);Me=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var mt=a(H);V=i(mt,"model([input_ids, attention_mask])"),mt.forEach(t),me=i(Z," or "),N=s(Z,"CODE",{});var Le=a(N);Ce=i(Le,"model([input_ids, attention_mask, token_type_ids])"),Le.forEach(t),Z.forEach(t),fe=l(O),I=s(O,"LI",{});var Ae=a(I);Pe=i(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(Ae,"CODE",{});var ft=a(B);Ne=i(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),Ae.forEach(t),O.forEach(t)},m(m,j){p(m,u,j),e(u,z),p(m,b,j),p(m,w,j),e(w,$),e($,x),e(w,y),e(w,q),e(q,qe),p(m,oe,j),p(m,E,j),e(E,ee),e(E,S),e(S,se),e(E,Ee),e(E,G),e(G,je),e(E,ke),p(m,U,j),p(m,A,j),e(A,ae),p(m,pe,j),p(m,F,j),e(F,P),e(P,he),e(P,K),e(K,be),e(P,ue),e(P,W),e(W,Fe),e(F,ye),e(F,C),e(C,Me),e(C,H),e(H,V),e(C,me),e(C,N),e(N,Ce),e(F,fe),e(F,I),e(I,Pe),e(I,B),e(B,Ne)},d(m){m&&t(u),m&&t(b),m&&t(w),m&&t(oe),m&&t(E),m&&t(U),m&&t(A),m&&t(pe),m&&t(F)}}}function zw(L){let u,z,b,w,$;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var y=a(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var q=a(b);w=i(q,"Module"),q.forEach(t),$=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(x,y){p(x,u,y),e(u,z),e(u,b),e(b,w),e(u,$)},d(x){x&&t(u)}}}function qw(L){let u,z,b,w,$;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var y=a(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var q=a(b);w=i(q,"Module"),q.forEach(t),$=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(x,y){p(x,u,y),e(u,z),e(u,b),e(b,w),e(u,$)},d(x){x&&t(u)}}}function Ew(L){let u,z,b,w,$;return{c(){u=o("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),w=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=s(x,"P",{});var y=a(u);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var q=a(b);w=i(q,"Module"),q.forEach(t),$=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(x,y){p(x,u,y),e(u,z),e(u,b),e(b,w),e(u,$)},d(x){x&&t(u)}}}function jw(L){let u,z,b,w,$,x,y,q,qe,oe,E,ee,S,se,Ee,G,je,ke,U,A,ae,pe,F,P,he,K,be,ue,W,Fe,ye,C,Me,H,V,me,N,Ce,fe,I,Pe,B,Ne,m,j,te,Se,pt,D,Ge,ne,ht,O,Y,ut,Oe,Z,mt,Le,Ae,ft,Vl,Xa,Dp,Kl,Ue,di,li,To,Sp,Gp,ci,pi,vo,Up,Wp,hi,ui,ko,Bp,Rp,mi,fi,bo,Hp,Vp,_i,Qa,yo,Kp,Yp,Yl,er,Zp,Zl,zt,gi,$n,Ti,Jp,Xp,tr,Qp,eh,th,vi,zn,ki,nh,oh,nr,sh,ah,rh,bi,qn,yi,ih,dh,or,lh,ch,Jl,En,ph,wo,hh,uh,Xl,qt,mh,xo,fh,_h,$o,gh,Th,Ql,sr,ec,Zt,jn,wi,zo,vh,xi,kh,tc,_t,bh,$i,yh,wh,zi,xh,$h,qi,zh,qh,nc,Fn,Eh,ar,jh,Fh,oc,Mn,dt,Ei,Mh,Ch,_e,Ph,ji,Nh,Oh,Fi,Lh,Ah,Mi,Ih,Dh,Ci,Sh,Gh,Pi,Uh,Wh,rr,Bh,Rh,Hh,Ni,Vh,Kh,qo,Yh,Eo,Zh,jo,Jh,Xh,Qh,ge,Oi,eu,tu,Li,nu,ou,Fo,su,re,au,Ai,ru,iu,Ii,du,lu,Di,cu,pu,Si,hu,uu,Gi,mu,fu,Ui,_u,gu,Wi,Tu,vu,ku,Jt,bu,Bi,yu,wu,Ri,xu,$u,zu,Te,qu,Hi,Eu,ju,Vi,Fu,Mu,Ki,Cu,Pu,Yi,Nu,Ou,Mo,Lu,Au,Zi,Iu,Du,Su,Co,sc,ir,Gu,ac,Et,Ji,Po,Uu,Xi,Wu,Bu,Ru,Qi,Xt,Hu,No,Vu,Ku,Oo,Yu,Zu,Ju,ed,Lo,Xu,td,Qu,em,rc,dr,ic,Qt,Cn,nd,Ao,tm,od,nm,dc,gt,om,lr,sm,am,Io,rm,im,Do,dm,lm,lc,So,cc,We,cm,sd,pm,hm,ad,um,mm,cr,fm,_m,rd,gm,Tm,pc,pr,vm,hc,Go,uc,hr,mc,en,Pn,id,Uo,km,dd,bm,fc,Tt,ym,Wo,wm,xm,ld,$m,zm,cd,qm,Em,_c,tn,Nn,pd,Bo,jm,hd,Fm,gc,ur,Mm,Tc,On,ud,nn,Cm,Ro,Pm,Nm,Ho,Om,Lm,Am,md,Ie,Im,Vo,Dm,Sm,Ko,Gm,Um,Yo,Wm,Bm,Zo,Rm,Hm,Jo,Vm,Km,vc,on,Ln,fd,Xo,Ym,_d,Zm,kc,wt,Qo,Jm,xt,Xm,mr,Qm,ef,fr,tf,nf,es,of,sf,af,sn,rf,_r,df,lf,gr,cf,pf,bc,an,An,gd,ts,hf,Td,uf,yc,ie,ns,mf,os,ff,ss,_f,gf,Tf,as,vf,Tr,kf,bf,yf,jt,rs,wf,vd,xf,$f,is,vr,zf,kd,qf,Ef,kr,jf,bd,Ff,Mf,In,ds,Cf,ls,Pf,yd,Nf,Of,Lf,Dn,cs,Af,wd,If,Df,br,ps,wc,rn,Sn,xd,hs,Sf,$d,Gf,xc,De,us,Uf,dn,Wf,zd,Bf,Rf,ms,Hf,Vf,Kf,fs,Yf,yr,Zf,Jf,Xf,Ft,_s,Qf,qd,e_,t_,gs,wr,n_,Ed,o_,s_,xr,a_,jd,r_,i_,Gn,Ts,d_,Fd,l_,$c,ln,Un,Md,vs,c_,Cd,p_,zc,J,ks,h_,Pd,u_,m_,bs,f_,ys,__,g_,T_,ws,v_,$r,k_,b_,y_,xs,w_,$s,x_,$_,z_,Be,zs,q_,cn,E_,zr,j_,F_,Nd,M_,C_,P_,Wn,N_,Od,O_,L_,qs,A_,Re,Es,I_,Ld,D_,S_,Ad,G_,U_,Id,W_,B_,js,R_,vt,Fs,H_,Dd,V_,K_,Sd,Y_,Z_,Ms,qc,pn,Bn,Gd,Cs,J_,Ud,X_,Ec,X,Ps,Q_,Ns,eg,Wd,tg,ng,og,Os,sg,Ls,ag,rg,ig,As,dg,qr,lg,cg,pg,Is,hg,Ds,ug,mg,fg,He,Ss,_g,hn,gg,Er,Tg,vg,Bd,kg,bg,yg,Rn,wg,Rd,xg,$g,Gs,zg,Ve,Us,qg,Hd,Eg,jg,Vd,Fg,Mg,Kd,Cg,Pg,Ws,Ng,kt,Bs,Og,Yd,Lg,Ag,Zd,Ig,Dg,Rs,jc,un,Hn,Jd,Hs,Sg,Xd,Gg,Fc,Q,Vs,Ug,Qd,Wg,Bg,Ks,Rg,Ys,Hg,Vg,Kg,Zs,Yg,jr,Zg,Jg,Xg,Js,Qg,Xs,eT,tT,nT,Ke,Qs,oT,mn,sT,Fr,aT,rT,el,iT,dT,lT,Vn,cT,tl,pT,hT,ea,uT,Ye,ta,mT,nl,fT,_T,ol,gT,TT,sl,vT,kT,na,bT,bt,oa,yT,al,wT,xT,rl,$T,zT,sa,Mc,fn,Kn,il,aa,qT,dl,ET,Cc,de,ra,jT,ll,FT,MT,ia,CT,da,PT,NT,OT,la,LT,Mr,AT,IT,DT,ca,ST,pa,GT,UT,WT,Yn,BT,Ze,ha,RT,_n,HT,Cr,VT,KT,cl,YT,ZT,JT,Zn,XT,pl,QT,e5,ua,Pc,gn,Jn,hl,ma,t5,ul,n5,Nc,le,fa,o5,_a,s5,ml,a5,r5,i5,ga,d5,Ta,l5,c5,p5,va,h5,Pr,u5,m5,f5,ka,_5,ba,g5,T5,v5,Xn,k5,Je,ya,b5,Tn,y5,Nr,w5,x5,fl,$5,z5,q5,Qn,E5,_l,j5,F5,wa,Oc,vn,eo,gl,xa,M5,Tl,C5,Lc,ce,$a,P5,vl,N5,O5,za,L5,qa,A5,I5,D5,Ea,S5,Or,G5,U5,W5,ja,B5,Fa,R5,H5,V5,to,K5,Xe,Ma,Y5,kn,Z5,Lr,J5,X5,kl,Q5,ev,tv,no,nv,bl,ov,sv,Ca,Ac,bn,oo,yl,Pa,av,wl,rv,Ic,lt,Na,iv,Qe,Oa,dv,yn,lv,xl,cv,pv,$l,hv,uv,mv,so,fv,zl,_v,gv,La,Tv,Mt,Aa,vv,ql,kv,bv,Ia,yv,Ct,Da,wv,El,xv,$v,Sa,Dc,wn,ao,jl,Ga,zv,Fl,qv,Sc,ct,Ua,Ev,et,Wa,jv,xn,Fv,Ml,Mv,Cv,Cl,Pv,Nv,Ov,ro,Lv,Pl,Av,Iv,Ba,Dv,Pt,Ra,Sv,Nl,Gv,Uv,Ha,Wv,Nt,Va,Bv,Ol,Rv,Hv,Ka,Gc;return x=new ve({}),se=new ve({}),zo=new ve({}),qo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
loss = model(input_ids=input_ids, labels=labels).loss`}}),Co=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration
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
loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss`}}),Ao=new ve({}),So=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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

<span class="hljs-comment"># [&#x27;Das Haus ist wunderbar.&#x27;, &#x27;Ich arbeite gerne in NYC.&#x27;]</span>`}}),Uo=new ve({}),Bo=new ve({}),Xo=new ve({}),Qo=new M({props:{name:"class transformers.T5Config",anchor:"transformers.T5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"relative_attention_max_distance",val:" = 128"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/configuration_t5.py#L34",parametersDescription:[{anchor:"transformers.T5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
Vocabulary size of the T5 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5Model">T5Model</a> or <a href="/docs/transformers/pr_15529/en/model_doc/t5#transformers.TFT5Model">TFT5Model</a>.`,name:"vocab_size"},{anchor:"transformers.T5Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of the encoder layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.T5Config.d_kv",description:`<strong>d_kv</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of the key, query, value projections per attention head. <code>d_kv</code> has to be equal to <code>d_model // num_heads</code>.`,name:"d_kv"},{anchor:"transformers.T5Config.d_ff",description:`<strong>d_ff</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Size of the intermediate feed forward layer in each <code>T5Block</code>.`,name:"d_ff"},{anchor:"transformers.T5Config.num_layers",description:`<strong>num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_layers"},{anchor:"transformers.T5Config.num_decoder_layers",description:`<strong>num_decoder_layers</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of hidden layers in the Transformer decoder. Will use the same value as <code>num_layers</code> if not set.`,name:"num_decoder_layers"},{anchor:"transformers.T5Config.num_heads",description:`<strong>num_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.T5Config.relative_attention_num_buckets",description:`<strong>relative_attention_num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"},{anchor:"transformers.T5Config.relative_attention_max_distance",description:`<strong>relative_attention_max_distance</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum distance of the longer sequences for the bucket separation.`,name:"relative_attention_max_distance"},{anchor:"transformers.T5Config.dropout_rate",description:`<strong>dropout_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The ratio for all dropout layers.`,name:"dropout_rate"},{anchor:"transformers.T5Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-6) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.T5Config.initializer_factor",description:`<strong>initializer_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"},{anchor:"transformers.T5Config.feed_forward_proj",description:`<strong>feed_forward_proj</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
Type of feed forward layer to be used. Should be one of <code>&quot;relu&quot;</code> or <code>&quot;gated-gelu&quot;</code>. T5v1.1 uses the
<code>&quot;gated-gelu&quot;</code> feed forward projection. Original T5 uses <code>&quot;relu&quot;</code>.`,name:"feed_forward_proj"},{anchor:"transformers.T5Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),ts=new ve({}),ns=new M({props:{name:"class transformers.T5Tokenizer",anchor:"transformers.T5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/tokenization_t5.py#L53",parametersDescription:[{anchor:"transformers.T5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}]}}),rs=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/tokenization_t5.py#L223",parametersDescription:[{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ds=new M({props:{name:"get_special_tokens_mask",anchor:"transformers.T5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/tokenization_t5.py#L163",parametersDescription:[{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),cs=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/tokenization_t5.py#L201",parametersDescription:[{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ps=new M({props:{name:"save_vocabulary",anchor:"transformers.T5Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/tokenization_t5.py#L298"}}),hs=new ve({}),us=new M({props:{name:"class transformers.T5TokenizerFast",anchor:"transformers.T5TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/tokenization_t5_fast.py#L62",parametersDescription:[{anchor:"transformers.T5TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}]}}),_s=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/tokenization_t5_fast.py#L165",parametersDescription:[{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ts=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/tokenization_t5_fast.py#L191",parametersDescription:[{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),vs=new ve({}),ks=new M({props:{name:"class transformers.T5Model",anchor:"transformers.T5Model",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_t5.py#L1267",parametersDescription:[{anchor:"transformers.T5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15529/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),zs=new M({props:{name:"forward",anchor:"transformers.T5Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_t5.py#L1343",parametersDescription:[{anchor:"transformers.T5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15529/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wn=new $t({props:{$$slots:{default:[Tw]},$$scope:{ctx:L}}}),qs=new R({props:{code:`from transformers import T5Tokenizer, T5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Es=new M({props:{name:"parallelize",anchor:"transformers.T5Model.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_t5.py#L1299",parametersDescription:[{anchor:"transformers.T5Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
model.parallelize(device_map)`}}),Fs=new M({props:{name:"deparallelize",anchor:"transformers.T5Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_t5.py#L1311"}}),Ms=new R({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),Cs=new ve({}),Ps=new M({props:{name:"class transformers.T5ForConditionalGeneration",anchor:"transformers.T5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_t5.py#L1456",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15529/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ss=new M({props:{name:"forward",anchor:"transformers.T5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_t5.py#L1537",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15529/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.T5ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rn=new $t({props:{$$slots:{default:[vw]},$$scope:{ctx:L}}}),Gs=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`}}),Us=new M({props:{name:"parallelize",anchor:"transformers.T5ForConditionalGeneration.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_t5.py#L1493",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}]}}),Ws=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),Bs=new M({props:{name:"deparallelize",anchor:"transformers.T5ForConditionalGeneration.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_t5.py#L1506"}}),Rs=new R({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),Hs=new ve({}),Vs=new M({props:{name:"class transformers.T5EncoderModel",anchor:"transformers.T5EncoderModel",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_t5.py#L1750",parametersDescription:[{anchor:"transformers.T5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15529/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Qs=new M({props:{name:"forward",anchor:"transformers.T5EncoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_t5.py#L1808",parametersDescription:[{anchor:"transformers.T5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15529/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vn=new $t({props:{$$slots:{default:[kw]},$$scope:{ctx:L}}}),ea=new R({props:{code:`from transformers import T5Tokenizer, T5EncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ta=new M({props:{name:"parallelize",anchor:"transformers.T5EncoderModel.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_t5.py#L1771",parametersDescription:[{anchor:"transformers.T5EncoderModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
model.parallelize(device_map)`}}),oa=new M({props:{name:"deparallelize",anchor:"transformers.T5EncoderModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_t5.py#L1782"}}),sa=new R({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),aa=new ve({}),ra=new M({props:{name:"class transformers.TFT5Model",anchor:"transformers.TFT5Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_tf_t5.py#L1109",parametersDescription:[{anchor:"transformers.TFT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15529/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Yn=new $t({props:{$$slots:{default:[bw]},$$scope:{ctx:L}}}),ha=new M({props:{name:"call",anchor:"transformers.TFT5Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_tf_t5.py#L1135",parametersDescription:[{anchor:"transformers.TFT5Model.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_15529/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
</ul>
<p>decoder_head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_attention_mask"},{anchor:"transformers.TFT5Model.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFT5Model.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFT5Model.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFT5Model.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFT5Model.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFT5Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFT5Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFT5Model.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15529/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFT5Model.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zn=new $t({props:{$$slots:{default:[yw]},$$scope:{ctx:L}}}),ua=new R({props:{code:`from transformers import T5Tokenizer, TFT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ma=new ve({}),fa=new M({props:{name:"class transformers.TFT5ForConditionalGeneration",anchor:"transformers.TFT5ForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_tf_t5.py#L1256",parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15529/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xn=new $t({props:{$$slots:{default:[ww]},$$scope:{ctx:L}}}),ya=new M({props:{name:"call",anchor:"transformers.TFT5ForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_tf_t5.py#L1311",parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_15529/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
</ul>
<p>decoder_head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_attention_mask"},{anchor:"transformers.TFT5ForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFT5ForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFT5ForConditionalGeneration.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFT5ForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFT5ForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFT5ForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFT5ForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15529/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFT5ForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFT5ForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qn=new $t({props:{$$slots:{default:[xw]},$$scope:{ctx:L}}}),wa=new R({props:{code:`from transformers import T5Tokenizer, TFT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you</span>`}}),xa=new ve({}),$a=new M({props:{name:"class transformers.TFT5EncoderModel",anchor:"transformers.TFT5EncoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_tf_t5.py#L1599",parametersDescription:[{anchor:"transformers.TFT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15529/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),to=new $t({props:{$$slots:{default:[$w]},$$scope:{ctx:L}}}),Ma=new M({props:{name:"call",anchor:"transformers.TFT5EncoderModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_tf_t5.py#L1617",parametersDescription:[{anchor:"transformers.TFT5EncoderModel.call.inputs",description:`<strong>inputs</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15529/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFT5EncoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),no=new $t({props:{$$slots:{default:[zw]},$$scope:{ctx:L}}}),Ca=new R({props:{code:`from transformers import T5Tokenizer, TFT5EncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),Pa=new ve({}),Na=new M({props:{name:"class transformers.FlaxT5Model",anchor:"transformers.FlaxT5Model",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_flax_t5.py#L1314"}}),Oa=new M({props:{name:"__call__",anchor:"transformers.FlaxT5Model.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_flax_t5.py#L946",parametersDescription:[{anchor:"transformers.FlaxT5Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5Model.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5Model.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5Model.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5Model.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5Model.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new $t({props:{$$slots:{default:[qw]},$$scope:{ctx:L}}}),La=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Aa=new M({props:{name:"encode",anchor:"transformers.FlaxT5Model.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_flax_t5.py#L1031",parametersDescription:[{anchor:"transformers.FlaxT5Model.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5Model.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5Model.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5Model.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5Model.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15529/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ia=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Da=new M({props:{name:"decode",anchor:"transformers.FlaxT5Model.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_flax_t5.py#L1089",parametersDescription:[{anchor:"transformers.FlaxT5Model.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5Model.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5Model.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxT5Model.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5Model.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxT5Model.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5Model.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5Model.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15529/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sa=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ga=new ve({}),Ua=new M({props:{name:"class transformers.FlaxT5ForConditionalGeneration",anchor:"transformers.FlaxT5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_flax_t5.py#L1454"}}),Wa=new M({props:{name:"__call__",anchor:"transformers.FlaxT5ForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_flax_t5.py#L946",parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new $t({props:{$$slots:{default:[Ew]},$$scope:{ctx:L}}}),Ba=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Ra=new M({props:{name:"encode",anchor:"transformers.FlaxT5ForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_flax_t5.py#L1031",parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15529/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Va=new M({props:{name:"decode",anchor:"transformers.FlaxT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/t5/modeling_flax_t5.py#L1457",parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15529/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=o("meta"),z=d(),b=o("h1"),w=o("a"),$=o("span"),f(x.$$.fragment),y=d(),q=o("span"),qe=r("T5"),oe=d(),E=o("h2"),ee=o("a"),S=o("span"),f(se.$$.fragment),Ee=d(),G=o("span"),je=r("Overview"),ke=d(),U=o("p"),A=r("The T5 model was presented in "),ae=o("a"),pe=r("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),F=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),P=d(),he=o("p"),K=r("The abstract from the paper is the following:"),be=d(),ue=o("p"),W=o("em"),Fe=r(`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),ye=d(),C=o("p"),Me=r("Tips:"),H=d(),V=o("ul"),me=o("li"),N=o("p"),Ce=r(`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),fe=o("em"),I=r("translate English to German: \u2026"),Pe=r(`,
for summarization: `),B=o("em"),Ne=r("summarize: \u2026"),m=r("."),j=d(),te=o("li"),Se=o("p"),pt=r("T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),D=d(),Ge=o("li"),ne=o("p"),ht=r("See the "),O=o("a"),Y=r("training"),ut=r(", "),Oe=o("a"),Z=r("inference"),mt=r(" and "),Le=o("a"),Ae=r("scripts"),ft=r(" sections below for all details regarding usage."),Vl=d(),Xa=o("p"),Dp=r("T5 comes in different sizes:"),Kl=d(),Ue=o("ul"),di=o("li"),li=o("p"),To=o("a"),Sp=r("t5-small"),Gp=d(),ci=o("li"),pi=o("p"),vo=o("a"),Up=r("t5-base"),Wp=d(),hi=o("li"),ui=o("p"),ko=o("a"),Bp=r("t5-large"),Rp=d(),mi=o("li"),fi=o("p"),bo=o("a"),Hp=r("t5-3b"),Vp=d(),_i=o("li"),Qa=o("p"),yo=o("a"),Kp=r("t5-11b"),Yp=r("."),Yl=d(),er=o("p"),Zp=r("Based on the original T5 model, Google has released some follow-up works:"),Zl=d(),zt=o("ul"),gi=o("li"),$n=o("p"),Ti=o("strong"),Jp=r("T5v1.1"),Xp=r(`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),tr=o("a"),Qp=r("here"),eh=r("."),th=d(),vi=o("li"),zn=o("p"),ki=o("strong"),nh=r("mT5"),oh=r(`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),nr=o("a"),sh=r("here"),ah=r("."),rh=d(),bi=o("li"),qn=o("p"),yi=o("strong"),ih=r("byT5"),dh=r(`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),or=o("a"),lh=r("here"),ch=r("."),Jl=d(),En=o("p"),ph=r("All checkpoints can be found on the "),wo=o("a"),hh=r("hub"),uh=r("."),Xl=d(),qt=o("p"),mh=r("This model was contributed by "),xo=o("a"),fh=r("thomwolf"),_h=r(". The original code can be found "),$o=o("a"),gh=r("here"),Th=r("."),Ql=d(),sr=o("a"),ec=d(),Zt=o("h2"),jn=o("a"),wi=o("span"),f(zo.$$.fragment),vh=d(),xi=o("span"),kh=r("Training"),tc=d(),_t=o("p"),bh=r(`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),$i=o("code"),yh=r("input_ids"),wh=r(`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),zi=o("code"),xh=r("decoder_input_ids"),$h=r(`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),qi=o("code"),zh=r("labels"),qh=r(`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),nc=d(),Fn=o("p"),Eh=r("One can use "),ar=o("a"),jh=r("T5ForConditionalGeneration"),Fh=r(` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),oc=d(),Mn=o("ul"),dt=o("li"),Ei=o("p"),Mh=r("Unsupervised denoising training"),Ch=d(),_e=o("p"),Ph=r("In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),ji=o("em"),Nh=r("a.k.a"),Oh=r(` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Fi=o("em"),Lh=r("real"),Ah=r(` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Mi=o("code"),Ih=r("<extra_id_0>"),Dh=r(`,
`),Ci=o("code"),Sh=r("<extra_id_1>"),Gh=r(", \u2026 up to "),Pi=o("code"),Uh=r("<extra_id_99>"),Wh=r(`. As a default, 100 sentinel tokens are available in
`),rr=o("a"),Bh=r("T5Tokenizer"),Rh=r("."),Hh=d(),Ni=o("p"),Vh=r(`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Kh=d(),f(qo.$$.fragment),Yh=d(),Eo=o("p"),Zh=r("If you\u2019re interested in pre-training T5 on a new corpus, check out the "),jo=o("a"),Jh=r("run_t5_mlm_flax.py"),Xh=r(` script in the Examples
directory.`),Qh=d(),ge=o("li"),Oi=o("p"),eu=r("Supervised training"),tu=d(),Li=o("p"),nu=r(`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),ou=d(),f(Fo.$$.fragment),su=d(),re=o("p"),au=r("As you can see, only 2 inputs are required for the model in order to compute a loss: "),Ai=o("code"),ru=r("input_ids"),iu=r(` (which are the
`),Ii=o("code"),du=r("input_ids"),lu=r(" of the encoded input sequence) and "),Di=o("code"),cu=r("labels"),pu=r(" (which are the "),Si=o("code"),hu=r("input_ids"),uu=r(` of the encoded
target sequence). The model will automatically create the `),Gi=o("code"),mu=r("decoder_input_ids"),fu=r(" based on the "),Ui=o("code"),_u=r("labels"),gu=r(`, by
shifting them one position to the right and prepending the `),Wi=o("code"),Tu=r("config.decoder_start_token_id"),vu=r(`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),ku=d(),Jt=o("p"),bu=r(`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Bi=o("code"),yu=r("max_source_length"),wu=r(" and "),Ri=o("code"),xu=r("max_target_length"),$u=r(`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),zu=d(),Te=o("p"),qu=r("In addition, we must make sure that padding token id\u2019s of the "),Hi=o("code"),Eu=r("labels"),ju=r(` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Vi=o("code"),Fu=r("ignore_index"),Mu=r(`
of the `),Ki=o("code"),Cu=r("CrossEntropyLoss"),Pu=r(". In Flax, one can use the "),Yi=o("code"),Nu=r("decoder_attention_mask"),Ou=r(` to ignore padded tokens from
the loss (see the `),Mo=o("a"),Lu=r("Flax summarization script"),Au=r(` for details). We also pass
`),Zi=o("code"),Iu=r("attention_mask"),Du=r(` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),Su=d(),f(Co.$$.fragment),sc=d(),ir=o("p"),Gu=r("Additional training tips:"),ac=d(),Et=o("ul"),Ji=o("li"),Po=o("p"),Uu=r("T5 models need a slightly higher learning rate than the default one set in the "),Xi=o("code"),Wu=r("Trainer"),Bu=r(` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Ru=d(),Qi=o("li"),Xt=o("p"),Hu=r("According to "),No=o("a"),Vu=r("this forum post"),Ku=r(`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),Oo=o("a"),Yu=r("paper"),Zu=r(` for the task prefixes
used).`),Ju=d(),ed=o("li"),Lo=o("p"),Xu=r(`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),td=o("em"),Qu=r("pad_to_multiple_of"),em=r(` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),rc=d(),dr=o("a"),ic=d(),Qt=o("h2"),Cn=o("a"),nd=o("span"),f(Ao.$$.fragment),tm=d(),od=o("span"),nm=r("Inference"),dc=d(),gt=o("p"),om=r("At inference time, it is recommended to use "),lr=o("a"),sm=r("generate()"),am=r(`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Io=o("a"),rm=r("this blog post"),im=r(` to know all the details about generating text with Transformers.
There\u2019s also `),Do=o("a"),dm=r("this blog post"),lm=r(` which explains how
generation works in general in encoder-decoder models.`),lc=d(),f(So.$$.fragment),cc=d(),We=o("p"),cm=r("Note that T5 uses the "),sd=o("code"),pm=r("pad_token_id"),hm=r(" as the "),ad=o("code"),um=r("decoder_start_token_id"),mm=r(`, so when doing generation without using
`),cr=o("a"),fm=r("generate()"),_m=r(", make sure you start it with the "),rd=o("code"),gm=r("pad_token_id"),Tm=r("."),pc=d(),pr=o("p"),vm=r("The example above only shows a single example. You can also do batched inference, like so:"),hc=d(),f(Go.$$.fragment),uc=d(),hr=o("a"),mc=d(),en=o("h2"),Pn=o("a"),id=o("span"),f(Uo.$$.fragment),km=d(),dd=o("span"),bm=r("Performance"),fc=d(),Tt=o("p"),ym=r("If you\u2019d like a faster training and inference performance, install "),Wo=o("a"),wm=r("apex"),xm=r(" and then the model will automatically use "),ld=o("code"),$m=r("apex.normalization.FusedRMSNorm"),zm=r(" instead of "),cd=o("code"),qm=r("T5LayerNorm"),Em=r(". The former uses an optimized fused kernel which is several times faster than the latter."),_c=d(),tn=o("h2"),Nn=o("a"),pd=o("span"),f(Bo.$$.fragment),jm=d(),hd=o("span"),Fm=r("Example scripts"),gc=d(),ur=o("p"),Mm=r("T5 is supported by several example scripts, both for pre-training and fine-tuning."),Tc=d(),On=o("ul"),ud=o("li"),nn=o("p"),Cm=r("pre-training: the "),Ro=o("a"),Pm=r("run_t5_mlm_flax.py"),Nm=r(`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Ho=o("a"),Om=r("t5_tokenizer_model.py"),Lm=r(`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Am=d(),md=o("li"),Ie=o("p"),Im=r("fine-tuning: T5 is supported by the official summarization scripts ("),Vo=o("a"),Dm=r("PyTorch"),Sm=r(", "),Ko=o("a"),Gm=r("Tensorflow"),Um=r(", and "),Yo=o("a"),Wm=r("Flax"),Bm=r(`) and translation scripts
(`),Zo=o("a"),Rm=r("PyTorch"),Hm=r(" and "),Jo=o("a"),Vm=r("Tensorflow"),Km=r(`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),vc=d(),on=o("h2"),Ln=o("a"),fd=o("span"),f(Xo.$$.fragment),Ym=d(),_d=o("span"),Zm=r("T5Config"),kc=d(),wt=o("div"),f(Qo.$$.fragment),Jm=d(),xt=o("p"),Xm=r("This is the configuration class to store the configuration of a "),mr=o("a"),Qm=r("T5Model"),ef=r(" or a "),fr=o("a"),tf=r("TFT5Model"),nf=r(`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),es=o("a"),of=r("t5-small"),sf=r(" architecture."),af=d(),sn=o("p"),rf=r("Configuration objects inherit from "),_r=o("a"),df=r("PretrainedConfig"),lf=r(` and can be used to control the model outputs. Read the
documentation from `),gr=o("a"),cf=r("PretrainedConfig"),pf=r(" for more information."),bc=d(),an=o("h2"),An=o("a"),gd=o("span"),f(ts.$$.fragment),hf=d(),Td=o("span"),uf=r("T5Tokenizer"),yc=d(),ie=o("div"),f(ns.$$.fragment),mf=d(),os=o("p"),ff=r("Construct a T5 tokenizer. Based on "),ss=o("a"),_f=r("SentencePiece"),gf=r("."),Tf=d(),as=o("p"),vf=r("This tokenizer inherits from "),Tr=o("a"),kf=r("PreTrainedTokenizer"),bf=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),yf=d(),jt=o("div"),f(rs.$$.fragment),wf=d(),vd=o("p"),xf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),$f=d(),is=o("ul"),vr=o("li"),zf=r("single sequence: "),kd=o("code"),qf=r("X </s>"),Ef=d(),kr=o("li"),jf=r("pair of sequences: "),bd=o("code"),Ff=r("A </s> B </s>"),Mf=d(),In=o("div"),f(ds.$$.fragment),Cf=d(),ls=o("p"),Pf=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),yd=o("code"),Nf=r("prepare_for_model"),Of=r(" method."),Lf=d(),Dn=o("div"),f(cs.$$.fragment),Af=d(),wd=o("p"),If=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Df=d(),br=o("div"),f(ps.$$.fragment),wc=d(),rn=o("h2"),Sn=o("a"),xd=o("span"),f(hs.$$.fragment),Sf=d(),$d=o("span"),Gf=r("T5TokenizerFast"),xc=d(),De=o("div"),f(us.$$.fragment),Uf=d(),dn=o("p"),Wf=r("Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),zd=o("em"),Bf=r("tokenizers"),Rf=r(` library). Based on
`),ms=o("a"),Hf=r("Unigram"),Vf=r("."),Kf=d(),fs=o("p"),Yf=r("This tokenizer inherits from "),yr=o("a"),Zf=r("PreTrainedTokenizerFast"),Jf=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Xf=d(),Ft=o("div"),f(_s.$$.fragment),Qf=d(),qd=o("p"),e_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),t_=d(),gs=o("ul"),wr=o("li"),n_=r("single sequence: "),Ed=o("code"),o_=r("X </s>"),s_=d(),xr=o("li"),a_=r("pair of sequences: "),jd=o("code"),r_=r("A </s> B </s>"),i_=d(),Gn=o("div"),f(Ts.$$.fragment),d_=d(),Fd=o("p"),l_=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),$c=d(),ln=o("h2"),Un=o("a"),Md=o("span"),f(vs.$$.fragment),c_=d(),Cd=o("span"),p_=r("T5Model"),zc=d(),J=o("div"),f(ks.$$.fragment),h_=d(),Pd=o("p"),u_=r("The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),m_=d(),bs=o("p"),f_=r("The T5 model was proposed in "),ys=o("a"),__=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),g_=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),T_=d(),ws=o("p"),v_=r("This model inherits from "),$r=o("a"),k_=r("PreTrainedModel"),b_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),y_=d(),xs=o("p"),w_=r("This model is also a PyTorch "),$s=o("a"),x_=r("torch.nn.Module"),$_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),z_=d(),Be=o("div"),f(zs.$$.fragment),q_=d(),cn=o("p"),E_=r("The "),zr=o("a"),j_=r("T5Model"),F_=r(" forward method, overrides the "),Nd=o("code"),M_=r("__call__"),C_=r(" special method."),P_=d(),f(Wn.$$.fragment),N_=d(),Od=o("p"),O_=r("Example:"),L_=d(),f(qs.$$.fragment),A_=d(),Re=o("div"),f(Es.$$.fragment),I_=d(),Ld=o("p"),D_=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),S_=d(),Ad=o("p"),G_=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),U_=d(),Id=o("p"),W_=r("Example:"),B_=d(),f(js.$$.fragment),R_=d(),vt=o("div"),f(Fs.$$.fragment),H_=d(),Dd=o("p"),V_=r("Moves the model to cpu from a model parallel state."),K_=d(),Sd=o("p"),Y_=r("Example:"),Z_=d(),f(Ms.$$.fragment),qc=d(),pn=o("h2"),Bn=o("a"),Gd=o("span"),f(Cs.$$.fragment),J_=d(),Ud=o("span"),X_=r("T5ForConditionalGeneration"),Ec=d(),X=o("div"),f(Ps.$$.fragment),Q_=d(),Ns=o("p"),eg=r("T5 Model with a "),Wd=o("code"),tg=r("language modeling"),ng=r(" head on top."),og=d(),Os=o("p"),sg=r("The T5 model was proposed in "),Ls=o("a"),ag=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),rg=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),ig=d(),As=o("p"),dg=r("This model inherits from "),qr=o("a"),lg=r("PreTrainedModel"),cg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pg=d(),Is=o("p"),hg=r("This model is also a PyTorch "),Ds=o("a"),ug=r("torch.nn.Module"),mg=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fg=d(),He=o("div"),f(Ss.$$.fragment),_g=d(),hn=o("p"),gg=r("The "),Er=o("a"),Tg=r("T5ForConditionalGeneration"),vg=r(" forward method, overrides the "),Bd=o("code"),kg=r("__call__"),bg=r(" special method."),yg=d(),f(Rn.$$.fragment),wg=d(),Rd=o("p"),xg=r("Examples:"),$g=d(),f(Gs.$$.fragment),zg=d(),Ve=o("div"),f(Us.$$.fragment),qg=d(),Hd=o("p"),Eg=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),jg=d(),Vd=o("p"),Fg=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Mg=d(),Kd=o("p"),Cg=r("Example:"),Pg=d(),f(Ws.$$.fragment),Ng=d(),kt=o("div"),f(Bs.$$.fragment),Og=d(),Yd=o("p"),Lg=r("Moves the model to cpu from a model parallel state."),Ag=d(),Zd=o("p"),Ig=r("Example:"),Dg=d(),f(Rs.$$.fragment),jc=d(),un=o("h2"),Hn=o("a"),Jd=o("span"),f(Hs.$$.fragment),Sg=d(),Xd=o("span"),Gg=r("T5EncoderModel"),Fc=d(),Q=o("div"),f(Vs.$$.fragment),Ug=d(),Qd=o("p"),Wg=r("The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),Bg=d(),Ks=o("p"),Rg=r("The T5 model was proposed in "),Ys=o("a"),Hg=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Vg=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Kg=d(),Zs=o("p"),Yg=r("This model inherits from "),jr=o("a"),Zg=r("PreTrainedModel"),Jg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xg=d(),Js=o("p"),Qg=r("This model is also a PyTorch "),Xs=o("a"),eT=r("torch.nn.Module"),tT=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nT=d(),Ke=o("div"),f(Qs.$$.fragment),oT=d(),mn=o("p"),sT=r("The "),Fr=o("a"),aT=r("T5EncoderModel"),rT=r(" forward method, overrides the "),el=o("code"),iT=r("__call__"),dT=r(" special method."),lT=d(),f(Vn.$$.fragment),cT=d(),tl=o("p"),pT=r("Example:"),hT=d(),f(ea.$$.fragment),uT=d(),Ye=o("div"),f(ta.$$.fragment),mT=d(),nl=o("p"),fT=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),_T=d(),ol=o("p"),gT=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),TT=d(),sl=o("p"),vT=r("Example:"),kT=d(),f(na.$$.fragment),bT=d(),bt=o("div"),f(oa.$$.fragment),yT=d(),al=o("p"),wT=r("Moves the model to cpu from a model parallel state."),xT=d(),rl=o("p"),$T=r("Example:"),zT=d(),f(sa.$$.fragment),Mc=d(),fn=o("h2"),Kn=o("a"),il=o("span"),f(aa.$$.fragment),qT=d(),dl=o("span"),ET=r("TFT5Model"),Cc=d(),de=o("div"),f(ra.$$.fragment),jT=d(),ll=o("p"),FT=r("The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),MT=d(),ia=o("p"),CT=r("The T5 model was proposed in "),da=o("a"),PT=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),NT=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),OT=d(),la=o("p"),LT=r("This model inherits from "),Mr=o("a"),AT=r("TFPreTrainedModel"),IT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),DT=d(),ca=o("p"),ST=r("This model is also a "),pa=o("a"),GT=r("tf.keras.Model"),UT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),WT=d(),f(Yn.$$.fragment),BT=d(),Ze=o("div"),f(ha.$$.fragment),RT=d(),_n=o("p"),HT=r("The "),Cr=o("a"),VT=r("TFT5Model"),KT=r(" forward method, overrides the "),cl=o("code"),YT=r("__call__"),ZT=r(" special method."),JT=d(),f(Zn.$$.fragment),XT=d(),pl=o("p"),QT=r("Examples:"),e5=d(),f(ua.$$.fragment),Pc=d(),gn=o("h2"),Jn=o("a"),hl=o("span"),f(ma.$$.fragment),t5=d(),ul=o("span"),n5=r("TFT5ForConditionalGeneration"),Nc=d(),le=o("div"),f(fa.$$.fragment),o5=d(),_a=o("p"),s5=r("T5 Model with a "),ml=o("code"),a5=r("language modeling"),r5=r(" head on top."),i5=d(),ga=o("p"),d5=r("The T5 model was proposed in "),Ta=o("a"),l5=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),c5=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),p5=d(),va=o("p"),h5=r("This model inherits from "),Pr=o("a"),u5=r("TFPreTrainedModel"),m5=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),f5=d(),ka=o("p"),_5=r("This model is also a "),ba=o("a"),g5=r("tf.keras.Model"),T5=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),v5=d(),f(Xn.$$.fragment),k5=d(),Je=o("div"),f(ya.$$.fragment),b5=d(),Tn=o("p"),y5=r("The "),Nr=o("a"),w5=r("TFT5ForConditionalGeneration"),x5=r(" forward method, overrides the "),fl=o("code"),$5=r("__call__"),z5=r(" special method."),q5=d(),f(Qn.$$.fragment),E5=d(),_l=o("p"),j5=r("Examples:"),F5=d(),f(wa.$$.fragment),Oc=d(),vn=o("h2"),eo=o("a"),gl=o("span"),f(xa.$$.fragment),M5=d(),Tl=o("span"),C5=r("TFT5EncoderModel"),Lc=d(),ce=o("div"),f($a.$$.fragment),P5=d(),vl=o("p"),N5=r("The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),O5=d(),za=o("p"),L5=r("The T5 model was proposed in "),qa=o("a"),A5=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),I5=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),D5=d(),Ea=o("p"),S5=r("This model inherits from "),Or=o("a"),G5=r("TFPreTrainedModel"),U5=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),W5=d(),ja=o("p"),B5=r("This model is also a "),Fa=o("a"),R5=r("tf.keras.Model"),H5=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),V5=d(),f(to.$$.fragment),K5=d(),Xe=o("div"),f(Ma.$$.fragment),Y5=d(),kn=o("p"),Z5=r("The "),Lr=o("a"),J5=r("TFT5EncoderModel"),X5=r(" forward method, overrides the "),kl=o("code"),Q5=r("__call__"),ev=r(" special method."),tv=d(),f(no.$$.fragment),nv=d(),bl=o("p"),ov=r("Examples:"),sv=d(),f(Ca.$$.fragment),Ac=d(),bn=o("h2"),oo=o("a"),yl=o("span"),f(Pa.$$.fragment),av=d(),wl=o("span"),rv=r("FlaxT5Model"),Ic=d(),lt=o("div"),f(Na.$$.fragment),iv=d(),Qe=o("div"),f(Oa.$$.fragment),dv=d(),yn=o("p"),lv=r("The "),xl=o("code"),cv=r("FlaxT5PreTrainedModel"),pv=r("forward method, overrides the "),$l=o("code"),hv=r("__call__"),uv=r(" special method."),mv=d(),f(so.$$.fragment),fv=d(),zl=o("p"),_v=r("Example:"),gv=d(),f(La.$$.fragment),Tv=d(),Mt=o("div"),f(Aa.$$.fragment),vv=d(),ql=o("p"),kv=r("Example:"),bv=d(),f(Ia.$$.fragment),yv=d(),Ct=o("div"),f(Da.$$.fragment),wv=d(),El=o("p"),xv=r("Example:"),$v=d(),f(Sa.$$.fragment),Dc=d(),wn=o("h2"),ao=o("a"),jl=o("span"),f(Ga.$$.fragment),zv=d(),Fl=o("span"),qv=r("FlaxT5ForConditionalGeneration"),Sc=d(),ct=o("div"),f(Ua.$$.fragment),Ev=d(),et=o("div"),f(Wa.$$.fragment),jv=d(),xn=o("p"),Fv=r("The "),Ml=o("code"),Mv=r("FlaxT5PreTrainedModel"),Cv=r("forward method, overrides the "),Cl=o("code"),Pv=r("__call__"),Nv=r(" special method."),Ov=d(),f(ro.$$.fragment),Lv=d(),Pl=o("p"),Av=r("Example:"),Iv=d(),f(Ba.$$.fragment),Dv=d(),Pt=o("div"),f(Ra.$$.fragment),Sv=d(),Nl=o("p"),Gv=r("Example:"),Uv=d(),f(Ha.$$.fragment),Wv=d(),Nt=o("div"),f(Va.$$.fragment),Bv=d(),Ol=o("p"),Rv=r("Example:"),Hv=d(),f(Ka.$$.fragment),this.h()},l(n){const h=_w('[data-svelte="svelte-1phssyn"]',document.head);u=s(h,"META",{name:!0,content:!0}),h.forEach(t),z=l(n),b=s(n,"H1",{class:!0});var Ya=a(b);w=s(Ya,"A",{id:!0,class:!0,href:!0});var Ll=a(w);$=s(Ll,"SPAN",{});var Al=a($);_(x.$$.fragment,Al),Al.forEach(t),Ll.forEach(t),y=l(Ya),q=s(Ya,"SPAN",{});var Il=a(q);qe=i(Il,"T5"),Il.forEach(t),Ya.forEach(t),oe=l(n),E=s(n,"H2",{class:!0});var Za=a(E);ee=s(Za,"A",{id:!0,class:!0,href:!0});var Dl=a(ee);S=s(Dl,"SPAN",{});var Sl=a(S);_(se.$$.fragment,Sl),Sl.forEach(t),Dl.forEach(t),Ee=l(Za),G=s(Za,"SPAN",{});var Gl=a(G);je=i(Gl,"Overview"),Gl.forEach(t),Za.forEach(t),ke=l(n),U=s(n,"P",{});var Ja=a(U);A=i(Ja,"The T5 model was presented in "),ae=s(Ja,"A",{href:!0,rel:!0});var Ul=a(ae);pe=i(Ul,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),Ul.forEach(t),F=i(Ja,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),Ja.forEach(t),P=l(n),he=s(n,"P",{});var Wl=a(he);K=i(Wl,"The abstract from the paper is the following:"),Wl.forEach(t),be=l(n),ue=s(n,"P",{});var Xv=a(ue);W=s(Xv,"EM",{});var Qv=a(W);Fe=i(Qv,`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),Qv.forEach(t),Xv.forEach(t),ye=l(n),C=s(n,"P",{});var ek=a(C);Me=i(ek,"Tips:"),ek.forEach(t),H=l(n),V=s(n,"UL",{});var Ar=a(V);me=s(Ar,"LI",{});var tk=a(me);N=s(tk,"P",{});var Ir=a(N);Ce=i(Ir,`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),fe=s(Ir,"EM",{});var nk=a(fe);I=i(nk,"translate English to German: \u2026"),nk.forEach(t),Pe=i(Ir,`,
for summarization: `),B=s(Ir,"EM",{});var ok=a(B);Ne=i(ok,"summarize: \u2026"),ok.forEach(t),m=i(Ir,"."),Ir.forEach(t),tk.forEach(t),j=l(Ar),te=s(Ar,"LI",{});var sk=a(te);Se=s(sk,"P",{});var ak=a(Se);pt=i(ak,"T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),ak.forEach(t),sk.forEach(t),D=l(Ar),Ge=s(Ar,"LI",{});var rk=a(Ge);ne=s(rk,"P",{});var io=a(ne);ht=i(io,"See the "),O=s(io,"A",{href:!0});var ik=a(O);Y=i(ik,"training"),ik.forEach(t),ut=i(io,", "),Oe=s(io,"A",{href:!0});var dk=a(Oe);Z=i(dk,"inference"),dk.forEach(t),mt=i(io," and "),Le=s(io,"A",{href:!0});var lk=a(Le);Ae=i(lk,"scripts"),lk.forEach(t),ft=i(io," sections below for all details regarding usage."),io.forEach(t),rk.forEach(t),Ar.forEach(t),Vl=l(n),Xa=s(n,"P",{});var ck=a(Xa);Dp=i(ck,"T5 comes in different sizes:"),ck.forEach(t),Kl=l(n),Ue=s(n,"UL",{});var Ot=a(Ue);di=s(Ot,"LI",{});var pk=a(di);li=s(pk,"P",{});var hk=a(li);To=s(hk,"A",{href:!0,rel:!0});var uk=a(To);Sp=i(uk,"t5-small"),uk.forEach(t),hk.forEach(t),pk.forEach(t),Gp=l(Ot),ci=s(Ot,"LI",{});var mk=a(ci);pi=s(mk,"P",{});var fk=a(pi);vo=s(fk,"A",{href:!0,rel:!0});var _k=a(vo);Up=i(_k,"t5-base"),_k.forEach(t),fk.forEach(t),mk.forEach(t),Wp=l(Ot),hi=s(Ot,"LI",{});var gk=a(hi);ui=s(gk,"P",{});var Tk=a(ui);ko=s(Tk,"A",{href:!0,rel:!0});var vk=a(ko);Bp=i(vk,"t5-large"),vk.forEach(t),Tk.forEach(t),gk.forEach(t),Rp=l(Ot),mi=s(Ot,"LI",{});var kk=a(mi);fi=s(kk,"P",{});var bk=a(fi);bo=s(bk,"A",{href:!0,rel:!0});var yk=a(bo);Hp=i(yk,"t5-3b"),yk.forEach(t),bk.forEach(t),kk.forEach(t),Vp=l(Ot),_i=s(Ot,"LI",{});var wk=a(_i);Qa=s(wk,"P",{});var Vv=a(Qa);yo=s(Vv,"A",{href:!0,rel:!0});var xk=a(yo);Kp=i(xk,"t5-11b"),xk.forEach(t),Yp=i(Vv,"."),Vv.forEach(t),wk.forEach(t),Ot.forEach(t),Yl=l(n),er=s(n,"P",{});var $k=a(er);Zp=i($k,"Based on the original T5 model, Google has released some follow-up works:"),$k.forEach(t),Zl=l(n),zt=s(n,"UL",{});var Dr=a(zt);gi=s(Dr,"LI",{});var zk=a(gi);$n=s(zk,"P",{});var Bl=a($n);Ti=s(Bl,"STRONG",{});var qk=a(Ti);Jp=i(qk,"T5v1.1"),qk.forEach(t),Xp=i(Bl,`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),tr=s(Bl,"A",{href:!0});var Ek=a(tr);Qp=i(Ek,"here"),Ek.forEach(t),eh=i(Bl,"."),Bl.forEach(t),zk.forEach(t),th=l(Dr),vi=s(Dr,"LI",{});var jk=a(vi);zn=s(jk,"P",{});var Rl=a(zn);ki=s(Rl,"STRONG",{});var Fk=a(ki);nh=i(Fk,"mT5"),Fk.forEach(t),oh=i(Rl,`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),nr=s(Rl,"A",{href:!0});var Mk=a(nr);sh=i(Mk,"here"),Mk.forEach(t),ah=i(Rl,"."),Rl.forEach(t),jk.forEach(t),rh=l(Dr),bi=s(Dr,"LI",{});var Ck=a(bi);qn=s(Ck,"P",{});var Hl=a(qn);yi=s(Hl,"STRONG",{});var Pk=a(yi);ih=i(Pk,"byT5"),Pk.forEach(t),dh=i(Hl,`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),or=s(Hl,"A",{href:!0});var Nk=a(or);lh=i(Nk,"here"),Nk.forEach(t),ch=i(Hl,"."),Hl.forEach(t),Ck.forEach(t),Dr.forEach(t),Jl=l(n),En=s(n,"P",{});var Uc=a(En);ph=i(Uc,"All checkpoints can be found on the "),wo=s(Uc,"A",{href:!0,rel:!0});var Ok=a(wo);hh=i(Ok,"hub"),Ok.forEach(t),uh=i(Uc,"."),Uc.forEach(t),Xl=l(n),qt=s(n,"P",{});var Sr=a(qt);mh=i(Sr,"This model was contributed by "),xo=s(Sr,"A",{href:!0,rel:!0});var Lk=a(xo);fh=i(Lk,"thomwolf"),Lk.forEach(t),_h=i(Sr,". The original code can be found "),$o=s(Sr,"A",{href:!0,rel:!0});var Ak=a($o);gh=i(Ak,"here"),Ak.forEach(t),Th=i(Sr,"."),Sr.forEach(t),Ql=l(n),sr=s(n,"A",{id:!0}),a(sr).forEach(t),ec=l(n),Zt=s(n,"H2",{class:!0});var Wc=a(Zt);jn=s(Wc,"A",{id:!0,class:!0,href:!0});var Ik=a(jn);wi=s(Ik,"SPAN",{});var Dk=a(wi);_(zo.$$.fragment,Dk),Dk.forEach(t),Ik.forEach(t),vh=l(Wc),xi=s(Wc,"SPAN",{});var Sk=a(xi);kh=i(Sk,"Training"),Sk.forEach(t),Wc.forEach(t),tc=l(n),_t=s(n,"P",{});var lo=a(_t);bh=i(lo,`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),$i=s(lo,"CODE",{});var Gk=a($i);yh=i(Gk,"input_ids"),Gk.forEach(t),wh=i(lo,`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),zi=s(lo,"CODE",{});var Uk=a(zi);xh=i(Uk,"decoder_input_ids"),Uk.forEach(t),$h=i(lo,`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),qi=s(lo,"CODE",{});var Wk=a(qi);zh=i(Wk,"labels"),Wk.forEach(t),qh=i(lo,`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),lo.forEach(t),nc=l(n),Fn=s(n,"P",{});var Bc=a(Fn);Eh=i(Bc,"One can use "),ar=s(Bc,"A",{href:!0});var Bk=a(ar);jh=i(Bk,"T5ForConditionalGeneration"),Bk.forEach(t),Fh=i(Bc,` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Bc.forEach(t),oc=l(n),Mn=s(n,"UL",{});var Rc=a(Mn);dt=s(Rc,"LI",{});var Lt=a(dt);Ei=s(Lt,"P",{});var Rk=a(Ei);Mh=i(Rk,"Unsupervised denoising training"),Rk.forEach(t),Ch=l(Lt),_e=s(Lt,"P",{});var tt=a(_e);Ph=i(tt,"In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),ji=s(tt,"EM",{});var Hk=a(ji);Nh=i(Hk,"a.k.a"),Hk.forEach(t),Oh=i(tt,` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Fi=s(tt,"EM",{});var Vk=a(Fi);Lh=i(Vk,"real"),Vk.forEach(t),Ah=i(tt,` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Mi=s(tt,"CODE",{});var Kk=a(Mi);Ih=i(Kk,"<extra_id_0>"),Kk.forEach(t),Dh=i(tt,`,
`),Ci=s(tt,"CODE",{});var Yk=a(Ci);Sh=i(Yk,"<extra_id_1>"),Yk.forEach(t),Gh=i(tt,", \u2026 up to "),Pi=s(tt,"CODE",{});var Zk=a(Pi);Uh=i(Zk,"<extra_id_99>"),Zk.forEach(t),Wh=i(tt,`. As a default, 100 sentinel tokens are available in
`),rr=s(tt,"A",{href:!0});var Jk=a(rr);Bh=i(Jk,"T5Tokenizer"),Jk.forEach(t),Rh=i(tt,"."),tt.forEach(t),Hh=l(Lt),Ni=s(Lt,"P",{});var Xk=a(Ni);Vh=i(Xk,`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Xk.forEach(t),Kh=l(Lt),_(qo.$$.fragment,Lt),Yh=l(Lt),Eo=s(Lt,"P",{});var Hc=a(Eo);Zh=i(Hc,"If you\u2019re interested in pre-training T5 on a new corpus, check out the "),jo=s(Hc,"A",{href:!0,rel:!0});var Qk=a(jo);Jh=i(Qk,"run_t5_mlm_flax.py"),Qk.forEach(t),Xh=i(Hc,` script in the Examples
directory.`),Hc.forEach(t),Lt.forEach(t),Qh=l(Rc),ge=s(Rc,"LI",{});var nt=a(ge);Oi=s(nt,"P",{});var eb=a(Oi);eu=i(eb,"Supervised training"),eb.forEach(t),tu=l(nt),Li=s(nt,"P",{});var tb=a(Li);nu=i(tb,`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),tb.forEach(t),ou=l(nt),_(Fo.$$.fragment,nt),su=l(nt),re=s(nt,"P",{});var we=a(re);au=i(we,"As you can see, only 2 inputs are required for the model in order to compute a loss: "),Ai=s(we,"CODE",{});var nb=a(Ai);ru=i(nb,"input_ids"),nb.forEach(t),iu=i(we,` (which are the
`),Ii=s(we,"CODE",{});var ob=a(Ii);du=i(ob,"input_ids"),ob.forEach(t),lu=i(we," of the encoded input sequence) and "),Di=s(we,"CODE",{});var sb=a(Di);cu=i(sb,"labels"),sb.forEach(t),pu=i(we," (which are the "),Si=s(we,"CODE",{});var ab=a(Si);hu=i(ab,"input_ids"),ab.forEach(t),uu=i(we,` of the encoded
target sequence). The model will automatically create the `),Gi=s(we,"CODE",{});var rb=a(Gi);mu=i(rb,"decoder_input_ids"),rb.forEach(t),fu=i(we," based on the "),Ui=s(we,"CODE",{});var ib=a(Ui);_u=i(ib,"labels"),ib.forEach(t),gu=i(we,`, by
shifting them one position to the right and prepending the `),Wi=s(we,"CODE",{});var db=a(Wi);Tu=i(db,"config.decoder_start_token_id"),db.forEach(t),vu=i(we,`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),we.forEach(t),ku=l(nt),Jt=s(nt,"P",{});var Gr=a(Jt);bu=i(Gr,`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Bi=s(Gr,"CODE",{});var lb=a(Bi);yu=i(lb,"max_source_length"),lb.forEach(t),wu=i(Gr," and "),Ri=s(Gr,"CODE",{});var cb=a(Ri);xu=i(cb,"max_target_length"),cb.forEach(t),$u=i(Gr,`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),Gr.forEach(t),zu=l(nt),Te=s(nt,"P",{});var ot=a(Te);qu=i(ot,"In addition, we must make sure that padding token id\u2019s of the "),Hi=s(ot,"CODE",{});var pb=a(Hi);Eu=i(pb,"labels"),pb.forEach(t),ju=i(ot,` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Vi=s(ot,"CODE",{});var hb=a(Vi);Fu=i(hb,"ignore_index"),hb.forEach(t),Mu=i(ot,`
of the `),Ki=s(ot,"CODE",{});var ub=a(Ki);Cu=i(ub,"CrossEntropyLoss"),ub.forEach(t),Pu=i(ot,". In Flax, one can use the "),Yi=s(ot,"CODE",{});var mb=a(Yi);Nu=i(mb,"decoder_attention_mask"),mb.forEach(t),Ou=i(ot,` to ignore padded tokens from
the loss (see the `),Mo=s(ot,"A",{href:!0,rel:!0});var fb=a(Mo);Lu=i(fb,"Flax summarization script"),fb.forEach(t),Au=i(ot,` for details). We also pass
`),Zi=s(ot,"CODE",{});var _b=a(Zi);Iu=i(_b,"attention_mask"),_b.forEach(t),Du=i(ot,` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),ot.forEach(t),Su=l(nt),_(Co.$$.fragment,nt),nt.forEach(t),Rc.forEach(t),sc=l(n),ir=s(n,"P",{});var gb=a(ir);Gu=i(gb,"Additional training tips:"),gb.forEach(t),ac=l(n),Et=s(n,"UL",{});var Ur=a(Et);Ji=s(Ur,"LI",{});var Tb=a(Ji);Po=s(Tb,"P",{});var Vc=a(Po);Uu=i(Vc,"T5 models need a slightly higher learning rate than the default one set in the "),Xi=s(Vc,"CODE",{});var vb=a(Xi);Wu=i(vb,"Trainer"),vb.forEach(t),Bu=i(Vc,` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Vc.forEach(t),Tb.forEach(t),Ru=l(Ur),Qi=s(Ur,"LI",{});var kb=a(Qi);Xt=s(kb,"P",{});var Wr=a(Xt);Hu=i(Wr,"According to "),No=s(Wr,"A",{href:!0,rel:!0});var bb=a(No);Vu=i(bb,"this forum post"),bb.forEach(t),Ku=i(Wr,`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),Oo=s(Wr,"A",{href:!0,rel:!0});var yb=a(Oo);Yu=i(yb,"paper"),yb.forEach(t),Zu=i(Wr,` for the task prefixes
used).`),Wr.forEach(t),kb.forEach(t),Ju=l(Ur),ed=s(Ur,"LI",{});var wb=a(ed);Lo=s(wb,"P",{});var Kc=a(Lo);Xu=i(Kc,`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),td=s(Kc,"EM",{});var xb=a(td);Qu=i(xb,"pad_to_multiple_of"),xb.forEach(t),em=i(Kc,` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),Kc.forEach(t),wb.forEach(t),Ur.forEach(t),rc=l(n),dr=s(n,"A",{id:!0}),a(dr).forEach(t),ic=l(n),Qt=s(n,"H2",{class:!0});var Yc=a(Qt);Cn=s(Yc,"A",{id:!0,class:!0,href:!0});var $b=a(Cn);nd=s($b,"SPAN",{});var zb=a(nd);_(Ao.$$.fragment,zb),zb.forEach(t),$b.forEach(t),tm=l(Yc),od=s(Yc,"SPAN",{});var qb=a(od);nm=i(qb,"Inference"),qb.forEach(t),Yc.forEach(t),dc=l(n),gt=s(n,"P",{});var co=a(gt);om=i(co,"At inference time, it is recommended to use "),lr=s(co,"A",{href:!0});var Eb=a(lr);sm=i(Eb,"generate()"),Eb.forEach(t),am=i(co,`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Io=s(co,"A",{href:!0,rel:!0});var jb=a(Io);rm=i(jb,"this blog post"),jb.forEach(t),im=i(co,` to know all the details about generating text with Transformers.
There\u2019s also `),Do=s(co,"A",{href:!0,rel:!0});var Fb=a(Do);dm=i(Fb,"this blog post"),Fb.forEach(t),lm=i(co,` which explains how
generation works in general in encoder-decoder models.`),co.forEach(t),lc=l(n),_(So.$$.fragment,n),cc=l(n),We=s(n,"P",{});var At=a(We);cm=i(At,"Note that T5 uses the "),sd=s(At,"CODE",{});var Mb=a(sd);pm=i(Mb,"pad_token_id"),Mb.forEach(t),hm=i(At," as the "),ad=s(At,"CODE",{});var Cb=a(ad);um=i(Cb,"decoder_start_token_id"),Cb.forEach(t),mm=i(At,`, so when doing generation without using
`),cr=s(At,"A",{href:!0});var Pb=a(cr);fm=i(Pb,"generate()"),Pb.forEach(t),_m=i(At,", make sure you start it with the "),rd=s(At,"CODE",{});var Nb=a(rd);gm=i(Nb,"pad_token_id"),Nb.forEach(t),Tm=i(At,"."),At.forEach(t),pc=l(n),pr=s(n,"P",{});var Ob=a(pr);vm=i(Ob,"The example above only shows a single example. You can also do batched inference, like so:"),Ob.forEach(t),hc=l(n),_(Go.$$.fragment,n),uc=l(n),hr=s(n,"A",{id:!0}),a(hr).forEach(t),mc=l(n),en=s(n,"H2",{class:!0});var Zc=a(en);Pn=s(Zc,"A",{id:!0,class:!0,href:!0});var Lb=a(Pn);id=s(Lb,"SPAN",{});var Ab=a(id);_(Uo.$$.fragment,Ab),Ab.forEach(t),Lb.forEach(t),km=l(Zc),dd=s(Zc,"SPAN",{});var Ib=a(dd);bm=i(Ib,"Performance"),Ib.forEach(t),Zc.forEach(t),fc=l(n),Tt=s(n,"P",{});var po=a(Tt);ym=i(po,"If you\u2019d like a faster training and inference performance, install "),Wo=s(po,"A",{href:!0,rel:!0});var Db=a(Wo);wm=i(Db,"apex"),Db.forEach(t),xm=i(po," and then the model will automatically use "),ld=s(po,"CODE",{});var Sb=a(ld);$m=i(Sb,"apex.normalization.FusedRMSNorm"),Sb.forEach(t),zm=i(po," instead of "),cd=s(po,"CODE",{});var Gb=a(cd);qm=i(Gb,"T5LayerNorm"),Gb.forEach(t),Em=i(po,". The former uses an optimized fused kernel which is several times faster than the latter."),po.forEach(t),_c=l(n),tn=s(n,"H2",{class:!0});var Jc=a(tn);Nn=s(Jc,"A",{id:!0,class:!0,href:!0});var Ub=a(Nn);pd=s(Ub,"SPAN",{});var Wb=a(pd);_(Bo.$$.fragment,Wb),Wb.forEach(t),Ub.forEach(t),jm=l(Jc),hd=s(Jc,"SPAN",{});var Bb=a(hd);Fm=i(Bb,"Example scripts"),Bb.forEach(t),Jc.forEach(t),gc=l(n),ur=s(n,"P",{});var Rb=a(ur);Mm=i(Rb,"T5 is supported by several example scripts, both for pre-training and fine-tuning."),Rb.forEach(t),Tc=l(n),On=s(n,"UL",{});var Xc=a(On);ud=s(Xc,"LI",{});var Hb=a(ud);nn=s(Hb,"P",{});var Br=a(nn);Cm=i(Br,"pre-training: the "),Ro=s(Br,"A",{href:!0,rel:!0});var Vb=a(Ro);Pm=i(Vb,"run_t5_mlm_flax.py"),Vb.forEach(t),Nm=i(Br,`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Ho=s(Br,"A",{href:!0,rel:!0});var Kb=a(Ho);Om=i(Kb,"t5_tokenizer_model.py"),Kb.forEach(t),Lm=i(Br,`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Br.forEach(t),Hb.forEach(t),Am=l(Xc),md=s(Xc,"LI",{});var Yb=a(md);Ie=s(Yb,"P",{});var yt=a(Ie);Im=i(yt,"fine-tuning: T5 is supported by the official summarization scripts ("),Vo=s(yt,"A",{href:!0,rel:!0});var Zb=a(Vo);Dm=i(Zb,"PyTorch"),Zb.forEach(t),Sm=i(yt,", "),Ko=s(yt,"A",{href:!0,rel:!0});var Jb=a(Ko);Gm=i(Jb,"Tensorflow"),Jb.forEach(t),Um=i(yt,", and "),Yo=s(yt,"A",{href:!0,rel:!0});var Xb=a(Yo);Wm=i(Xb,"Flax"),Xb.forEach(t),Bm=i(yt,`) and translation scripts
(`),Zo=s(yt,"A",{href:!0,rel:!0});var Qb=a(Zo);Rm=i(Qb,"PyTorch"),Qb.forEach(t),Hm=i(yt," and "),Jo=s(yt,"A",{href:!0,rel:!0});var ey=a(Jo);Vm=i(ey,"Tensorflow"),ey.forEach(t),Km=i(yt,`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),yt.forEach(t),Yb.forEach(t),Xc.forEach(t),vc=l(n),on=s(n,"H2",{class:!0});var Qc=a(on);Ln=s(Qc,"A",{id:!0,class:!0,href:!0});var ty=a(Ln);fd=s(ty,"SPAN",{});var ny=a(fd);_(Xo.$$.fragment,ny),ny.forEach(t),ty.forEach(t),Ym=l(Qc),_d=s(Qc,"SPAN",{});var oy=a(_d);Zm=i(oy,"T5Config"),oy.forEach(t),Qc.forEach(t),kc=l(n),wt=s(n,"DIV",{class:!0});var Rr=a(wt);_(Qo.$$.fragment,Rr),Jm=l(Rr),xt=s(Rr,"P",{});var ho=a(xt);Xm=i(ho,"This is the configuration class to store the configuration of a "),mr=s(ho,"A",{href:!0});var sy=a(mr);Qm=i(sy,"T5Model"),sy.forEach(t),ef=i(ho," or a "),fr=s(ho,"A",{href:!0});var ay=a(fr);tf=i(ay,"TFT5Model"),ay.forEach(t),nf=i(ho,`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),es=s(ho,"A",{href:!0,rel:!0});var ry=a(es);of=i(ry,"t5-small"),ry.forEach(t),sf=i(ho," architecture."),ho.forEach(t),af=l(Rr),sn=s(Rr,"P",{});var Hr=a(sn);rf=i(Hr,"Configuration objects inherit from "),_r=s(Hr,"A",{href:!0});var iy=a(_r);df=i(iy,"PretrainedConfig"),iy.forEach(t),lf=i(Hr,` and can be used to control the model outputs. Read the
documentation from `),gr=s(Hr,"A",{href:!0});var dy=a(gr);cf=i(dy,"PretrainedConfig"),dy.forEach(t),pf=i(Hr," for more information."),Hr.forEach(t),Rr.forEach(t),bc=l(n),an=s(n,"H2",{class:!0});var ep=a(an);An=s(ep,"A",{id:!0,class:!0,href:!0});var ly=a(An);gd=s(ly,"SPAN",{});var cy=a(gd);_(ts.$$.fragment,cy),cy.forEach(t),ly.forEach(t),hf=l(ep),Td=s(ep,"SPAN",{});var py=a(Td);uf=i(py,"T5Tokenizer"),py.forEach(t),ep.forEach(t),yc=l(n),ie=s(n,"DIV",{class:!0});var st=a(ie);_(ns.$$.fragment,st),mf=l(st),os=s(st,"P",{});var tp=a(os);ff=i(tp,"Construct a T5 tokenizer. Based on "),ss=s(tp,"A",{href:!0,rel:!0});var hy=a(ss);_f=i(hy,"SentencePiece"),hy.forEach(t),gf=i(tp,"."),tp.forEach(t),Tf=l(st),as=s(st,"P",{});var np=a(as);vf=i(np,"This tokenizer inherits from "),Tr=s(np,"A",{href:!0});var uy=a(Tr);kf=i(uy,"PreTrainedTokenizer"),uy.forEach(t),bf=i(np,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),np.forEach(t),yf=l(st),jt=s(st,"DIV",{class:!0});var Vr=a(jt);_(rs.$$.fragment,Vr),wf=l(Vr),vd=s(Vr,"P",{});var my=a(vd);xf=i(my,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),my.forEach(t),$f=l(Vr),is=s(Vr,"UL",{});var op=a(is);vr=s(op,"LI",{});var Kv=a(vr);zf=i(Kv,"single sequence: "),kd=s(Kv,"CODE",{});var fy=a(kd);qf=i(fy,"X </s>"),fy.forEach(t),Kv.forEach(t),Ef=l(op),kr=s(op,"LI",{});var Yv=a(kr);jf=i(Yv,"pair of sequences: "),bd=s(Yv,"CODE",{});var _y=a(bd);Ff=i(_y,"A </s> B </s>"),_y.forEach(t),Yv.forEach(t),op.forEach(t),Vr.forEach(t),Mf=l(st),In=s(st,"DIV",{class:!0});var sp=a(In);_(ds.$$.fragment,sp),Cf=l(sp),ls=s(sp,"P",{});var ap=a(ls);Pf=i(ap,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),yd=s(ap,"CODE",{});var gy=a(yd);Nf=i(gy,"prepare_for_model"),gy.forEach(t),Of=i(ap," method."),ap.forEach(t),sp.forEach(t),Lf=l(st),Dn=s(st,"DIV",{class:!0});var rp=a(Dn);_(cs.$$.fragment,rp),Af=l(rp),wd=s(rp,"P",{});var Ty=a(wd);If=i(Ty,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Ty.forEach(t),rp.forEach(t),Df=l(st),br=s(st,"DIV",{class:!0});var vy=a(br);_(ps.$$.fragment,vy),vy.forEach(t),st.forEach(t),wc=l(n),rn=s(n,"H2",{class:!0});var ip=a(rn);Sn=s(ip,"A",{id:!0,class:!0,href:!0});var ky=a(Sn);xd=s(ky,"SPAN",{});var by=a(xd);_(hs.$$.fragment,by),by.forEach(t),ky.forEach(t),Sf=l(ip),$d=s(ip,"SPAN",{});var yy=a($d);Gf=i(yy,"T5TokenizerFast"),yy.forEach(t),ip.forEach(t),xc=l(n),De=s(n,"DIV",{class:!0});var It=a(De);_(us.$$.fragment,It),Uf=l(It),dn=s(It,"P",{});var Kr=a(dn);Wf=i(Kr,"Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),zd=s(Kr,"EM",{});var wy=a(zd);Bf=i(wy,"tokenizers"),wy.forEach(t),Rf=i(Kr,` library). Based on
`),ms=s(Kr,"A",{href:!0,rel:!0});var xy=a(ms);Hf=i(xy,"Unigram"),xy.forEach(t),Vf=i(Kr,"."),Kr.forEach(t),Kf=l(It),fs=s(It,"P",{});var dp=a(fs);Yf=i(dp,"This tokenizer inherits from "),yr=s(dp,"A",{href:!0});var $y=a(yr);Zf=i($y,"PreTrainedTokenizerFast"),$y.forEach(t),Jf=i(dp,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),dp.forEach(t),Xf=l(It),Ft=s(It,"DIV",{class:!0});var Yr=a(Ft);_(_s.$$.fragment,Yr),Qf=l(Yr),qd=s(Yr,"P",{});var zy=a(qd);e_=i(zy,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),zy.forEach(t),t_=l(Yr),gs=s(Yr,"UL",{});var lp=a(gs);wr=s(lp,"LI",{});var Zv=a(wr);n_=i(Zv,"single sequence: "),Ed=s(Zv,"CODE",{});var qy=a(Ed);o_=i(qy,"X </s>"),qy.forEach(t),Zv.forEach(t),s_=l(lp),xr=s(lp,"LI",{});var Jv=a(xr);a_=i(Jv,"pair of sequences: "),jd=s(Jv,"CODE",{});var Ey=a(jd);r_=i(Ey,"A </s> B </s>"),Ey.forEach(t),Jv.forEach(t),lp.forEach(t),Yr.forEach(t),i_=l(It),Gn=s(It,"DIV",{class:!0});var cp=a(Gn);_(Ts.$$.fragment,cp),d_=l(cp),Fd=s(cp,"P",{});var jy=a(Fd);l_=i(jy,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),jy.forEach(t),cp.forEach(t),It.forEach(t),$c=l(n),ln=s(n,"H2",{class:!0});var pp=a(ln);Un=s(pp,"A",{id:!0,class:!0,href:!0});var Fy=a(Un);Md=s(Fy,"SPAN",{});var My=a(Md);_(vs.$$.fragment,My),My.forEach(t),Fy.forEach(t),c_=l(pp),Cd=s(pp,"SPAN",{});var Cy=a(Cd);p_=i(Cy,"T5Model"),Cy.forEach(t),pp.forEach(t),zc=l(n),J=s(n,"DIV",{class:!0});var xe=a(J);_(ks.$$.fragment,xe),h_=l(xe),Pd=s(xe,"P",{});var Py=a(Pd);u_=i(Py,"The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),Py.forEach(t),m_=l(xe),bs=s(xe,"P",{});var hp=a(bs);f_=i(hp,"The T5 model was proposed in "),ys=s(hp,"A",{href:!0,rel:!0});var Ny=a(ys);__=i(Ny,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Ny.forEach(t),g_=i(hp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),hp.forEach(t),T_=l(xe),ws=s(xe,"P",{});var up=a(ws);v_=i(up,"This model inherits from "),$r=s(up,"A",{href:!0});var Oy=a($r);k_=i(Oy,"PreTrainedModel"),Oy.forEach(t),b_=i(up,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),up.forEach(t),y_=l(xe),xs=s(xe,"P",{});var mp=a(xs);w_=i(mp,"This model is also a PyTorch "),$s=s(mp,"A",{href:!0,rel:!0});var Ly=a($s);x_=i(Ly,"torch.nn.Module"),Ly.forEach(t),$_=i(mp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mp.forEach(t),z_=l(xe),Be=s(xe,"DIV",{class:!0});var Dt=a(Be);_(zs.$$.fragment,Dt),q_=l(Dt),cn=s(Dt,"P",{});var Zr=a(cn);E_=i(Zr,"The "),zr=s(Zr,"A",{href:!0});var Ay=a(zr);j_=i(Ay,"T5Model"),Ay.forEach(t),F_=i(Zr," forward method, overrides the "),Nd=s(Zr,"CODE",{});var Iy=a(Nd);M_=i(Iy,"__call__"),Iy.forEach(t),C_=i(Zr," special method."),Zr.forEach(t),P_=l(Dt),_(Wn.$$.fragment,Dt),N_=l(Dt),Od=s(Dt,"P",{});var Dy=a(Od);O_=i(Dy,"Example:"),Dy.forEach(t),L_=l(Dt),_(qs.$$.fragment,Dt),Dt.forEach(t),A_=l(xe),Re=s(xe,"DIV",{class:!0});var St=a(Re);_(Es.$$.fragment,St),I_=l(St),Ld=s(St,"P",{});var Sy=a(Ld);D_=i(Sy,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),Sy.forEach(t),S_=l(St),Ad=s(St,"P",{});var Gy=a(Ad);G_=i(Gy,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Gy.forEach(t),U_=l(St),Id=s(St,"P",{});var Uy=a(Id);W_=i(Uy,"Example:"),Uy.forEach(t),B_=l(St),_(js.$$.fragment,St),St.forEach(t),R_=l(xe),vt=s(xe,"DIV",{class:!0});var uo=a(vt);_(Fs.$$.fragment,uo),H_=l(uo),Dd=s(uo,"P",{});var Wy=a(Dd);V_=i(Wy,"Moves the model to cpu from a model parallel state."),Wy.forEach(t),K_=l(uo),Sd=s(uo,"P",{});var By=a(Sd);Y_=i(By,"Example:"),By.forEach(t),Z_=l(uo),_(Ms.$$.fragment,uo),uo.forEach(t),xe.forEach(t),qc=l(n),pn=s(n,"H2",{class:!0});var fp=a(pn);Bn=s(fp,"A",{id:!0,class:!0,href:!0});var Ry=a(Bn);Gd=s(Ry,"SPAN",{});var Hy=a(Gd);_(Cs.$$.fragment,Hy),Hy.forEach(t),Ry.forEach(t),J_=l(fp),Ud=s(fp,"SPAN",{});var Vy=a(Ud);X_=i(Vy,"T5ForConditionalGeneration"),Vy.forEach(t),fp.forEach(t),Ec=l(n),X=s(n,"DIV",{class:!0});var $e=a(X);_(Ps.$$.fragment,$e),Q_=l($e),Ns=s($e,"P",{});var _p=a(Ns);eg=i(_p,"T5 Model with a "),Wd=s(_p,"CODE",{});var Ky=a(Wd);tg=i(Ky,"language modeling"),Ky.forEach(t),ng=i(_p," head on top."),_p.forEach(t),og=l($e),Os=s($e,"P",{});var gp=a(Os);sg=i(gp,"The T5 model was proposed in "),Ls=s(gp,"A",{href:!0,rel:!0});var Yy=a(Ls);ag=i(Yy,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Yy.forEach(t),rg=i(gp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),gp.forEach(t),ig=l($e),As=s($e,"P",{});var Tp=a(As);dg=i(Tp,"This model inherits from "),qr=s(Tp,"A",{href:!0});var Zy=a(qr);lg=i(Zy,"PreTrainedModel"),Zy.forEach(t),cg=i(Tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tp.forEach(t),pg=l($e),Is=s($e,"P",{});var vp=a(Is);hg=i(vp,"This model is also a PyTorch "),Ds=s(vp,"A",{href:!0,rel:!0});var Jy=a(Ds);ug=i(Jy,"torch.nn.Module"),Jy.forEach(t),mg=i(vp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vp.forEach(t),fg=l($e),He=s($e,"DIV",{class:!0});var Gt=a(He);_(Ss.$$.fragment,Gt),_g=l(Gt),hn=s(Gt,"P",{});var Jr=a(hn);gg=i(Jr,"The "),Er=s(Jr,"A",{href:!0});var Xy=a(Er);Tg=i(Xy,"T5ForConditionalGeneration"),Xy.forEach(t),vg=i(Jr," forward method, overrides the "),Bd=s(Jr,"CODE",{});var Qy=a(Bd);kg=i(Qy,"__call__"),Qy.forEach(t),bg=i(Jr," special method."),Jr.forEach(t),yg=l(Gt),_(Rn.$$.fragment,Gt),wg=l(Gt),Rd=s(Gt,"P",{});var e1=a(Rd);xg=i(e1,"Examples:"),e1.forEach(t),$g=l(Gt),_(Gs.$$.fragment,Gt),Gt.forEach(t),zg=l($e),Ve=s($e,"DIV",{class:!0});var Ut=a(Ve);_(Us.$$.fragment,Ut),qg=l(Ut),Hd=s(Ut,"P",{});var t1=a(Hd);Eg=i(t1,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),t1.forEach(t),jg=l(Ut),Vd=s(Ut,"P",{});var n1=a(Vd);Fg=i(n1,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),n1.forEach(t),Mg=l(Ut),Kd=s(Ut,"P",{});var o1=a(Kd);Cg=i(o1,"Example:"),o1.forEach(t),Pg=l(Ut),_(Ws.$$.fragment,Ut),Ut.forEach(t),Ng=l($e),kt=s($e,"DIV",{class:!0});var mo=a(kt);_(Bs.$$.fragment,mo),Og=l(mo),Yd=s(mo,"P",{});var s1=a(Yd);Lg=i(s1,"Moves the model to cpu from a model parallel state."),s1.forEach(t),Ag=l(mo),Zd=s(mo,"P",{});var a1=a(Zd);Ig=i(a1,"Example:"),a1.forEach(t),Dg=l(mo),_(Rs.$$.fragment,mo),mo.forEach(t),$e.forEach(t),jc=l(n),un=s(n,"H2",{class:!0});var kp=a(un);Hn=s(kp,"A",{id:!0,class:!0,href:!0});var r1=a(Hn);Jd=s(r1,"SPAN",{});var i1=a(Jd);_(Hs.$$.fragment,i1),i1.forEach(t),r1.forEach(t),Sg=l(kp),Xd=s(kp,"SPAN",{});var d1=a(Xd);Gg=i(d1,"T5EncoderModel"),d1.forEach(t),kp.forEach(t),Fc=l(n),Q=s(n,"DIV",{class:!0});var ze=a(Q);_(Vs.$$.fragment,ze),Ug=l(ze),Qd=s(ze,"P",{});var l1=a(Qd);Wg=i(l1,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),l1.forEach(t),Bg=l(ze),Ks=s(ze,"P",{});var bp=a(Ks);Rg=i(bp,"The T5 model was proposed in "),Ys=s(bp,"A",{href:!0,rel:!0});var c1=a(Ys);Hg=i(c1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),c1.forEach(t),Vg=i(bp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),bp.forEach(t),Kg=l(ze),Zs=s(ze,"P",{});var yp=a(Zs);Yg=i(yp,"This model inherits from "),jr=s(yp,"A",{href:!0});var p1=a(jr);Zg=i(p1,"PreTrainedModel"),p1.forEach(t),Jg=i(yp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yp.forEach(t),Xg=l(ze),Js=s(ze,"P",{});var wp=a(Js);Qg=i(wp,"This model is also a PyTorch "),Xs=s(wp,"A",{href:!0,rel:!0});var h1=a(Xs);eT=i(h1,"torch.nn.Module"),h1.forEach(t),tT=i(wp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wp.forEach(t),nT=l(ze),Ke=s(ze,"DIV",{class:!0});var Wt=a(Ke);_(Qs.$$.fragment,Wt),oT=l(Wt),mn=s(Wt,"P",{});var Xr=a(mn);sT=i(Xr,"The "),Fr=s(Xr,"A",{href:!0});var u1=a(Fr);aT=i(u1,"T5EncoderModel"),u1.forEach(t),rT=i(Xr," forward method, overrides the "),el=s(Xr,"CODE",{});var m1=a(el);iT=i(m1,"__call__"),m1.forEach(t),dT=i(Xr," special method."),Xr.forEach(t),lT=l(Wt),_(Vn.$$.fragment,Wt),cT=l(Wt),tl=s(Wt,"P",{});var f1=a(tl);pT=i(f1,"Example:"),f1.forEach(t),hT=l(Wt),_(ea.$$.fragment,Wt),Wt.forEach(t),uT=l(ze),Ye=s(ze,"DIV",{class:!0});var Bt=a(Ye);_(ta.$$.fragment,Bt),mT=l(Bt),nl=s(Bt,"P",{});var _1=a(nl);fT=i(_1,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),_1.forEach(t),_T=l(Bt),ol=s(Bt,"P",{});var g1=a(ol);gT=i(g1,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),g1.forEach(t),TT=l(Bt),sl=s(Bt,"P",{});var T1=a(sl);vT=i(T1,"Example:"),T1.forEach(t),kT=l(Bt),_(na.$$.fragment,Bt),Bt.forEach(t),bT=l(ze),bt=s(ze,"DIV",{class:!0});var fo=a(bt);_(oa.$$.fragment,fo),yT=l(fo),al=s(fo,"P",{});var v1=a(al);wT=i(v1,"Moves the model to cpu from a model parallel state."),v1.forEach(t),xT=l(fo),rl=s(fo,"P",{});var k1=a(rl);$T=i(k1,"Example:"),k1.forEach(t),zT=l(fo),_(sa.$$.fragment,fo),fo.forEach(t),ze.forEach(t),Mc=l(n),fn=s(n,"H2",{class:!0});var xp=a(fn);Kn=s(xp,"A",{id:!0,class:!0,href:!0});var b1=a(Kn);il=s(b1,"SPAN",{});var y1=a(il);_(aa.$$.fragment,y1),y1.forEach(t),b1.forEach(t),qT=l(xp),dl=s(xp,"SPAN",{});var w1=a(dl);ET=i(w1,"TFT5Model"),w1.forEach(t),xp.forEach(t),Cc=l(n),de=s(n,"DIV",{class:!0});var at=a(de);_(ra.$$.fragment,at),jT=l(at),ll=s(at,"P",{});var x1=a(ll);FT=i(x1,"The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),x1.forEach(t),MT=l(at),ia=s(at,"P",{});var $p=a(ia);CT=i($p,"The T5 model was proposed in "),da=s($p,"A",{href:!0,rel:!0});var $1=a(da);PT=i($1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),$1.forEach(t),NT=i($p,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),$p.forEach(t),OT=l(at),la=s(at,"P",{});var zp=a(la);LT=i(zp,"This model inherits from "),Mr=s(zp,"A",{href:!0});var z1=a(Mr);AT=i(z1,"TFPreTrainedModel"),z1.forEach(t),IT=i(zp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zp.forEach(t),DT=l(at),ca=s(at,"P",{});var qp=a(ca);ST=i(qp,"This model is also a "),pa=s(qp,"A",{href:!0,rel:!0});var q1=a(pa);GT=i(q1,"tf.keras.Model"),q1.forEach(t),UT=i(qp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qp.forEach(t),WT=l(at),_(Yn.$$.fragment,at),BT=l(at),Ze=s(at,"DIV",{class:!0});var Rt=a(Ze);_(ha.$$.fragment,Rt),RT=l(Rt),_n=s(Rt,"P",{});var Qr=a(_n);HT=i(Qr,"The "),Cr=s(Qr,"A",{href:!0});var E1=a(Cr);VT=i(E1,"TFT5Model"),E1.forEach(t),KT=i(Qr," forward method, overrides the "),cl=s(Qr,"CODE",{});var j1=a(cl);YT=i(j1,"__call__"),j1.forEach(t),ZT=i(Qr," special method."),Qr.forEach(t),JT=l(Rt),_(Zn.$$.fragment,Rt),XT=l(Rt),pl=s(Rt,"P",{});var F1=a(pl);QT=i(F1,"Examples:"),F1.forEach(t),e5=l(Rt),_(ua.$$.fragment,Rt),Rt.forEach(t),at.forEach(t),Pc=l(n),gn=s(n,"H2",{class:!0});var Ep=a(gn);Jn=s(Ep,"A",{id:!0,class:!0,href:!0});var M1=a(Jn);hl=s(M1,"SPAN",{});var C1=a(hl);_(ma.$$.fragment,C1),C1.forEach(t),M1.forEach(t),t5=l(Ep),ul=s(Ep,"SPAN",{});var P1=a(ul);n5=i(P1,"TFT5ForConditionalGeneration"),P1.forEach(t),Ep.forEach(t),Nc=l(n),le=s(n,"DIV",{class:!0});var rt=a(le);_(fa.$$.fragment,rt),o5=l(rt),_a=s(rt,"P",{});var jp=a(_a);s5=i(jp,"T5 Model with a "),ml=s(jp,"CODE",{});var N1=a(ml);a5=i(N1,"language modeling"),N1.forEach(t),r5=i(jp," head on top."),jp.forEach(t),i5=l(rt),ga=s(rt,"P",{});var Fp=a(ga);d5=i(Fp,"The T5 model was proposed in "),Ta=s(Fp,"A",{href:!0,rel:!0});var O1=a(Ta);l5=i(O1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),O1.forEach(t),c5=i(Fp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Fp.forEach(t),p5=l(rt),va=s(rt,"P",{});var Mp=a(va);h5=i(Mp,"This model inherits from "),Pr=s(Mp,"A",{href:!0});var L1=a(Pr);u5=i(L1,"TFPreTrainedModel"),L1.forEach(t),m5=i(Mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mp.forEach(t),f5=l(rt),ka=s(rt,"P",{});var Cp=a(ka);_5=i(Cp,"This model is also a "),ba=s(Cp,"A",{href:!0,rel:!0});var A1=a(ba);g5=i(A1,"tf.keras.Model"),A1.forEach(t),T5=i(Cp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cp.forEach(t),v5=l(rt),_(Xn.$$.fragment,rt),k5=l(rt),Je=s(rt,"DIV",{class:!0});var Ht=a(Je);_(ya.$$.fragment,Ht),b5=l(Ht),Tn=s(Ht,"P",{});var ei=a(Tn);y5=i(ei,"The "),Nr=s(ei,"A",{href:!0});var I1=a(Nr);w5=i(I1,"TFT5ForConditionalGeneration"),I1.forEach(t),x5=i(ei," forward method, overrides the "),fl=s(ei,"CODE",{});var D1=a(fl);$5=i(D1,"__call__"),D1.forEach(t),z5=i(ei," special method."),ei.forEach(t),q5=l(Ht),_(Qn.$$.fragment,Ht),E5=l(Ht),_l=s(Ht,"P",{});var S1=a(_l);j5=i(S1,"Examples:"),S1.forEach(t),F5=l(Ht),_(wa.$$.fragment,Ht),Ht.forEach(t),rt.forEach(t),Oc=l(n),vn=s(n,"H2",{class:!0});var Pp=a(vn);eo=s(Pp,"A",{id:!0,class:!0,href:!0});var G1=a(eo);gl=s(G1,"SPAN",{});var U1=a(gl);_(xa.$$.fragment,U1),U1.forEach(t),G1.forEach(t),M5=l(Pp),Tl=s(Pp,"SPAN",{});var W1=a(Tl);C5=i(W1,"TFT5EncoderModel"),W1.forEach(t),Pp.forEach(t),Lc=l(n),ce=s(n,"DIV",{class:!0});var it=a(ce);_($a.$$.fragment,it),P5=l(it),vl=s(it,"P",{});var B1=a(vl);N5=i(B1,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),B1.forEach(t),O5=l(it),za=s(it,"P",{});var Np=a(za);L5=i(Np,"The T5 model was proposed in "),qa=s(Np,"A",{href:!0,rel:!0});var R1=a(qa);A5=i(R1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),R1.forEach(t),I5=i(Np,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Np.forEach(t),D5=l(it),Ea=s(it,"P",{});var Op=a(Ea);S5=i(Op,"This model inherits from "),Or=s(Op,"A",{href:!0});var H1=a(Or);G5=i(H1,"TFPreTrainedModel"),H1.forEach(t),U5=i(Op,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Op.forEach(t),W5=l(it),ja=s(it,"P",{});var Lp=a(ja);B5=i(Lp,"This model is also a "),Fa=s(Lp,"A",{href:!0,rel:!0});var V1=a(Fa);R5=i(V1,"tf.keras.Model"),V1.forEach(t),H5=i(Lp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lp.forEach(t),V5=l(it),_(to.$$.fragment,it),K5=l(it),Xe=s(it,"DIV",{class:!0});var Vt=a(Xe);_(Ma.$$.fragment,Vt),Y5=l(Vt),kn=s(Vt,"P",{});var ti=a(kn);Z5=i(ti,"The "),Lr=s(ti,"A",{href:!0});var K1=a(Lr);J5=i(K1,"TFT5EncoderModel"),K1.forEach(t),X5=i(ti," forward method, overrides the "),kl=s(ti,"CODE",{});var Y1=a(kl);Q5=i(Y1,"__call__"),Y1.forEach(t),ev=i(ti," special method."),ti.forEach(t),tv=l(Vt),_(no.$$.fragment,Vt),nv=l(Vt),bl=s(Vt,"P",{});var Z1=a(bl);ov=i(Z1,"Examples:"),Z1.forEach(t),sv=l(Vt),_(Ca.$$.fragment,Vt),Vt.forEach(t),it.forEach(t),Ac=l(n),bn=s(n,"H2",{class:!0});var Ap=a(bn);oo=s(Ap,"A",{id:!0,class:!0,href:!0});var J1=a(oo);yl=s(J1,"SPAN",{});var X1=a(yl);_(Pa.$$.fragment,X1),X1.forEach(t),J1.forEach(t),av=l(Ap),wl=s(Ap,"SPAN",{});var Q1=a(wl);rv=i(Q1,"FlaxT5Model"),Q1.forEach(t),Ap.forEach(t),Ic=l(n),lt=s(n,"DIV",{class:!0});var _o=a(lt);_(Na.$$.fragment,_o),iv=l(_o),Qe=s(_o,"DIV",{class:!0});var Kt=a(Qe);_(Oa.$$.fragment,Kt),dv=l(Kt),yn=s(Kt,"P",{});var ni=a(yn);lv=i(ni,"The "),xl=s(ni,"CODE",{});var ew=a(xl);cv=i(ew,"FlaxT5PreTrainedModel"),ew.forEach(t),pv=i(ni,"forward method, overrides the "),$l=s(ni,"CODE",{});var tw=a($l);hv=i(tw,"__call__"),tw.forEach(t),uv=i(ni," special method."),ni.forEach(t),mv=l(Kt),_(so.$$.fragment,Kt),fv=l(Kt),zl=s(Kt,"P",{});var nw=a(zl);_v=i(nw,"Example:"),nw.forEach(t),gv=l(Kt),_(La.$$.fragment,Kt),Kt.forEach(t),Tv=l(_o),Mt=s(_o,"DIV",{class:!0});var oi=a(Mt);_(Aa.$$.fragment,oi),vv=l(oi),ql=s(oi,"P",{});var ow=a(ql);kv=i(ow,"Example:"),ow.forEach(t),bv=l(oi),_(Ia.$$.fragment,oi),oi.forEach(t),yv=l(_o),Ct=s(_o,"DIV",{class:!0});var si=a(Ct);_(Da.$$.fragment,si),wv=l(si),El=s(si,"P",{});var sw=a(El);xv=i(sw,"Example:"),sw.forEach(t),$v=l(si),_(Sa.$$.fragment,si),si.forEach(t),_o.forEach(t),Dc=l(n),wn=s(n,"H2",{class:!0});var Ip=a(wn);ao=s(Ip,"A",{id:!0,class:!0,href:!0});var aw=a(ao);jl=s(aw,"SPAN",{});var rw=a(jl);_(Ga.$$.fragment,rw),rw.forEach(t),aw.forEach(t),zv=l(Ip),Fl=s(Ip,"SPAN",{});var iw=a(Fl);qv=i(iw,"FlaxT5ForConditionalGeneration"),iw.forEach(t),Ip.forEach(t),Sc=l(n),ct=s(n,"DIV",{class:!0});var go=a(ct);_(Ua.$$.fragment,go),Ev=l(go),et=s(go,"DIV",{class:!0});var Yt=a(et);_(Wa.$$.fragment,Yt),jv=l(Yt),xn=s(Yt,"P",{});var ai=a(xn);Fv=i(ai,"The "),Ml=s(ai,"CODE",{});var dw=a(Ml);Mv=i(dw,"FlaxT5PreTrainedModel"),dw.forEach(t),Cv=i(ai,"forward method, overrides the "),Cl=s(ai,"CODE",{});var lw=a(Cl);Pv=i(lw,"__call__"),lw.forEach(t),Nv=i(ai," special method."),ai.forEach(t),Ov=l(Yt),_(ro.$$.fragment,Yt),Lv=l(Yt),Pl=s(Yt,"P",{});var cw=a(Pl);Av=i(cw,"Example:"),cw.forEach(t),Iv=l(Yt),_(Ba.$$.fragment,Yt),Yt.forEach(t),Dv=l(go),Pt=s(go,"DIV",{class:!0});var ri=a(Pt);_(Ra.$$.fragment,ri),Sv=l(ri),Nl=s(ri,"P",{});var pw=a(Nl);Gv=i(pw,"Example:"),pw.forEach(t),Uv=l(ri),_(Ha.$$.fragment,ri),ri.forEach(t),Wv=l(go),Nt=s(go,"DIV",{class:!0});var ii=a(Nt);_(Va.$$.fragment,ii),Bv=l(ii),Ol=s(ii,"P",{});var hw=a(Ol);Rv=i(hw,"Example:"),hw.forEach(t),Hv=l(ii),_(Ka.$$.fragment,ii),ii.forEach(t),go.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(Fw)),c(w,"id","t5"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#t5"),c(b,"class","relative group"),c(ee,"id","overview"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#overview"),c(E,"class","relative group"),c(ae,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(ae,"rel","nofollow"),c(O,"href","#training"),c(Oe,"href","#inference"),c(Le,"href","#scripts"),c(To,"href","https://huggingface.co/t5-small"),c(To,"rel","nofollow"),c(vo,"href","https://huggingface.co/t5-base"),c(vo,"rel","nofollow"),c(ko,"href","https://huggingface.co/t5-large"),c(ko,"rel","nofollow"),c(bo,"href","https://huggingface.co/t5-3b"),c(bo,"rel","nofollow"),c(yo,"href","https://huggingface.co/t5-11b"),c(yo,"rel","nofollow"),c(tr,"href","t5v1.1"),c(nr,"href","mt5"),c(or,"href","byt5"),c(wo,"href","https://huggingface.co/models?search=t5"),c(wo,"rel","nofollow"),c(xo,"href","https://huggingface.co/thomwolf"),c(xo,"rel","nofollow"),c($o,"href","https://github.com/google-research/text-to-text-transfer-transformer"),c($o,"rel","nofollow"),c(sr,"id","training"),c(jn,"id","training"),c(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jn,"href","#training"),c(Zt,"class","relative group"),c(ar,"href","/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(rr,"href","/docs/transformers/pr_15529/en/model_doc/mt5#transformers.T5Tokenizer"),c(jo,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling"),c(jo,"rel","nofollow"),c(Mo,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),c(Mo,"rel","nofollow"),c(No,"href","https://discuss.huggingface.co/t/t5-finetuning-tips/684"),c(No,"rel","nofollow"),c(Oo,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(Oo,"rel","nofollow"),c(dr,"id","inference"),c(Cn,"id","inference"),c(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Cn,"href","#inference"),c(Qt,"class","relative group"),c(lr,"href","/docs/transformers/pr_15529/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(Io,"href","https://huggingface.co/blog/how-to-generate"),c(Io,"rel","nofollow"),c(Do,"href","https://huggingface.co/blog/encoder-decoder#encoder-decoder"),c(Do,"rel","nofollow"),c(cr,"href","/docs/transformers/pr_15529/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(hr,"id","scripts"),c(Pn,"id","performance"),c(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pn,"href","#performance"),c(en,"class","relative group"),c(Wo,"href","https://github.com/NVIDIA/apex#quick-start"),c(Wo,"rel","nofollow"),c(Nn,"id","example-scripts"),c(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nn,"href","#example-scripts"),c(tn,"class","relative group"),c(Ro,"href","https://github.com/huggingface/transformers/blob/main/examples/flax/language-modeling/run_t5_mlm_flax.py"),c(Ro,"rel","nofollow"),c(Ho,"href","https://github.com/huggingface/transformers/blob/main/examples/flax/language-modeling/t5_tokenizer_model.py"),c(Ho,"rel","nofollow"),c(Vo,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization"),c(Vo,"rel","nofollow"),c(Ko,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/summarization"),c(Ko,"rel","nofollow"),c(Yo,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),c(Yo,"rel","nofollow"),c(Zo,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/translation"),c(Zo,"rel","nofollow"),c(Jo,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/translation"),c(Jo,"rel","nofollow"),c(Ln,"id","transformers.T5Config"),c(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ln,"href","#transformers.T5Config"),c(on,"class","relative group"),c(mr,"href","/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5Model"),c(fr,"href","/docs/transformers/pr_15529/en/model_doc/t5#transformers.TFT5Model"),c(es,"href","https://huggingface.co/t5-small"),c(es,"rel","nofollow"),c(_r,"href","/docs/transformers/pr_15529/en/main_classes/configuration#transformers.PretrainedConfig"),c(gr,"href","/docs/transformers/pr_15529/en/main_classes/configuration#transformers.PretrainedConfig"),c(wt,"class","docstring"),c(An,"id","transformers.T5Tokenizer"),c(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(An,"href","#transformers.T5Tokenizer"),c(an,"class","relative group"),c(ss,"href","https://github.com/google/sentencepiece"),c(ss,"rel","nofollow"),c(Tr,"href","/docs/transformers/pr_15529/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(jt,"class","docstring"),c(In,"class","docstring"),c(Dn,"class","docstring"),c(br,"class","docstring"),c(ie,"class","docstring"),c(Sn,"id","transformers.T5TokenizerFast"),c(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Sn,"href","#transformers.T5TokenizerFast"),c(rn,"class","relative group"),c(ms,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(ms,"rel","nofollow"),c(yr,"href","/docs/transformers/pr_15529/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ft,"class","docstring"),c(Gn,"class","docstring"),c(De,"class","docstring"),c(Un,"id","transformers.T5Model"),c(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Un,"href","#transformers.T5Model"),c(ln,"class","relative group"),c(ys,"href","https://arxiv.org/abs/1910.10683"),c(ys,"rel","nofollow"),c($r,"href","/docs/transformers/pr_15529/en/main_classes/model#transformers.PreTrainedModel"),c($s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c($s,"rel","nofollow"),c(zr,"href","/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5Model"),c(Be,"class","docstring"),c(Re,"class","docstring"),c(vt,"class","docstring"),c(J,"class","docstring"),c(Bn,"id","transformers.T5ForConditionalGeneration"),c(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bn,"href","#transformers.T5ForConditionalGeneration"),c(pn,"class","relative group"),c(Ls,"href","https://arxiv.org/abs/1910.10683"),c(Ls,"rel","nofollow"),c(qr,"href","/docs/transformers/pr_15529/en/main_classes/model#transformers.PreTrainedModel"),c(Ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ds,"rel","nofollow"),c(Er,"href","/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(He,"class","docstring"),c(Ve,"class","docstring"),c(kt,"class","docstring"),c(X,"class","docstring"),c(Hn,"id","transformers.T5EncoderModel"),c(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Hn,"href","#transformers.T5EncoderModel"),c(un,"class","relative group"),c(Ys,"href","https://arxiv.org/abs/1910.10683"),c(Ys,"rel","nofollow"),c(jr,"href","/docs/transformers/pr_15529/en/main_classes/model#transformers.PreTrainedModel"),c(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Xs,"rel","nofollow"),c(Fr,"href","/docs/transformers/pr_15529/en/model_doc/t5#transformers.T5EncoderModel"),c(Ke,"class","docstring"),c(Ye,"class","docstring"),c(bt,"class","docstring"),c(Q,"class","docstring"),c(Kn,"id","transformers.TFT5Model"),c(Kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kn,"href","#transformers.TFT5Model"),c(fn,"class","relative group"),c(da,"href","https://arxiv.org/abs/1910.10683"),c(da,"rel","nofollow"),c(Mr,"href","/docs/transformers/pr_15529/en/main_classes/model#transformers.TFPreTrainedModel"),c(pa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(pa,"rel","nofollow"),c(Cr,"href","/docs/transformers/pr_15529/en/model_doc/t5#transformers.TFT5Model"),c(Ze,"class","docstring"),c(de,"class","docstring"),c(Jn,"id","transformers.TFT5ForConditionalGeneration"),c(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jn,"href","#transformers.TFT5ForConditionalGeneration"),c(gn,"class","relative group"),c(Ta,"href","https://arxiv.org/abs/1910.10683"),c(Ta,"rel","nofollow"),c(Pr,"href","/docs/transformers/pr_15529/en/main_classes/model#transformers.TFPreTrainedModel"),c(ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ba,"rel","nofollow"),c(Nr,"href","/docs/transformers/pr_15529/en/model_doc/t5#transformers.TFT5ForConditionalGeneration"),c(Je,"class","docstring"),c(le,"class","docstring"),c(eo,"id","transformers.TFT5EncoderModel"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.TFT5EncoderModel"),c(vn,"class","relative group"),c(qa,"href","https://arxiv.org/abs/1910.10683"),c(qa,"rel","nofollow"),c(Or,"href","/docs/transformers/pr_15529/en/main_classes/model#transformers.TFPreTrainedModel"),c(Fa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Fa,"rel","nofollow"),c(Lr,"href","/docs/transformers/pr_15529/en/model_doc/t5#transformers.TFT5EncoderModel"),c(Xe,"class","docstring"),c(ce,"class","docstring"),c(oo,"id","transformers.FlaxT5Model"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.FlaxT5Model"),c(bn,"class","relative group"),c(Qe,"class","docstring"),c(Mt,"class","docstring"),c(Ct,"class","docstring"),c(lt,"class","docstring"),c(ao,"id","transformers.FlaxT5ForConditionalGeneration"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.FlaxT5ForConditionalGeneration"),c(wn,"class","relative group"),c(et,"class","docstring"),c(Pt,"class","docstring"),c(Nt,"class","docstring"),c(ct,"class","docstring")},m(n,h){e(document.head,u),p(n,z,h),p(n,b,h),e(b,w),e(w,$),g(x,$,null),e(b,y),e(b,q),e(q,qe),p(n,oe,h),p(n,E,h),e(E,ee),e(ee,S),g(se,S,null),e(E,Ee),e(E,G),e(G,je),p(n,ke,h),p(n,U,h),e(U,A),e(U,ae),e(ae,pe),e(U,F),p(n,P,h),p(n,he,h),e(he,K),p(n,be,h),p(n,ue,h),e(ue,W),e(W,Fe),p(n,ye,h),p(n,C,h),e(C,Me),p(n,H,h),p(n,V,h),e(V,me),e(me,N),e(N,Ce),e(N,fe),e(fe,I),e(N,Pe),e(N,B),e(B,Ne),e(N,m),e(V,j),e(V,te),e(te,Se),e(Se,pt),e(V,D),e(V,Ge),e(Ge,ne),e(ne,ht),e(ne,O),e(O,Y),e(ne,ut),e(ne,Oe),e(Oe,Z),e(ne,mt),e(ne,Le),e(Le,Ae),e(ne,ft),p(n,Vl,h),p(n,Xa,h),e(Xa,Dp),p(n,Kl,h),p(n,Ue,h),e(Ue,di),e(di,li),e(li,To),e(To,Sp),e(Ue,Gp),e(Ue,ci),e(ci,pi),e(pi,vo),e(vo,Up),e(Ue,Wp),e(Ue,hi),e(hi,ui),e(ui,ko),e(ko,Bp),e(Ue,Rp),e(Ue,mi),e(mi,fi),e(fi,bo),e(bo,Hp),e(Ue,Vp),e(Ue,_i),e(_i,Qa),e(Qa,yo),e(yo,Kp),e(Qa,Yp),p(n,Yl,h),p(n,er,h),e(er,Zp),p(n,Zl,h),p(n,zt,h),e(zt,gi),e(gi,$n),e($n,Ti),e(Ti,Jp),e($n,Xp),e($n,tr),e(tr,Qp),e($n,eh),e(zt,th),e(zt,vi),e(vi,zn),e(zn,ki),e(ki,nh),e(zn,oh),e(zn,nr),e(nr,sh),e(zn,ah),e(zt,rh),e(zt,bi),e(bi,qn),e(qn,yi),e(yi,ih),e(qn,dh),e(qn,or),e(or,lh),e(qn,ch),p(n,Jl,h),p(n,En,h),e(En,ph),e(En,wo),e(wo,hh),e(En,uh),p(n,Xl,h),p(n,qt,h),e(qt,mh),e(qt,xo),e(xo,fh),e(qt,_h),e(qt,$o),e($o,gh),e(qt,Th),p(n,Ql,h),p(n,sr,h),p(n,ec,h),p(n,Zt,h),e(Zt,jn),e(jn,wi),g(zo,wi,null),e(Zt,vh),e(Zt,xi),e(xi,kh),p(n,tc,h),p(n,_t,h),e(_t,bh),e(_t,$i),e($i,yh),e(_t,wh),e(_t,zi),e(zi,xh),e(_t,$h),e(_t,qi),e(qi,zh),e(_t,qh),p(n,nc,h),p(n,Fn,h),e(Fn,Eh),e(Fn,ar),e(ar,jh),e(Fn,Fh),p(n,oc,h),p(n,Mn,h),e(Mn,dt),e(dt,Ei),e(Ei,Mh),e(dt,Ch),e(dt,_e),e(_e,Ph),e(_e,ji),e(ji,Nh),e(_e,Oh),e(_e,Fi),e(Fi,Lh),e(_e,Ah),e(_e,Mi),e(Mi,Ih),e(_e,Dh),e(_e,Ci),e(Ci,Sh),e(_e,Gh),e(_e,Pi),e(Pi,Uh),e(_e,Wh),e(_e,rr),e(rr,Bh),e(_e,Rh),e(dt,Hh),e(dt,Ni),e(Ni,Vh),e(dt,Kh),g(qo,dt,null),e(dt,Yh),e(dt,Eo),e(Eo,Zh),e(Eo,jo),e(jo,Jh),e(Eo,Xh),e(Mn,Qh),e(Mn,ge),e(ge,Oi),e(Oi,eu),e(ge,tu),e(ge,Li),e(Li,nu),e(ge,ou),g(Fo,ge,null),e(ge,su),e(ge,re),e(re,au),e(re,Ai),e(Ai,ru),e(re,iu),e(re,Ii),e(Ii,du),e(re,lu),e(re,Di),e(Di,cu),e(re,pu),e(re,Si),e(Si,hu),e(re,uu),e(re,Gi),e(Gi,mu),e(re,fu),e(re,Ui),e(Ui,_u),e(re,gu),e(re,Wi),e(Wi,Tu),e(re,vu),e(ge,ku),e(ge,Jt),e(Jt,bu),e(Jt,Bi),e(Bi,yu),e(Jt,wu),e(Jt,Ri),e(Ri,xu),e(Jt,$u),e(ge,zu),e(ge,Te),e(Te,qu),e(Te,Hi),e(Hi,Eu),e(Te,ju),e(Te,Vi),e(Vi,Fu),e(Te,Mu),e(Te,Ki),e(Ki,Cu),e(Te,Pu),e(Te,Yi),e(Yi,Nu),e(Te,Ou),e(Te,Mo),e(Mo,Lu),e(Te,Au),e(Te,Zi),e(Zi,Iu),e(Te,Du),e(ge,Su),g(Co,ge,null),p(n,sc,h),p(n,ir,h),e(ir,Gu),p(n,ac,h),p(n,Et,h),e(Et,Ji),e(Ji,Po),e(Po,Uu),e(Po,Xi),e(Xi,Wu),e(Po,Bu),e(Et,Ru),e(Et,Qi),e(Qi,Xt),e(Xt,Hu),e(Xt,No),e(No,Vu),e(Xt,Ku),e(Xt,Oo),e(Oo,Yu),e(Xt,Zu),e(Et,Ju),e(Et,ed),e(ed,Lo),e(Lo,Xu),e(Lo,td),e(td,Qu),e(Lo,em),p(n,rc,h),p(n,dr,h),p(n,ic,h),p(n,Qt,h),e(Qt,Cn),e(Cn,nd),g(Ao,nd,null),e(Qt,tm),e(Qt,od),e(od,nm),p(n,dc,h),p(n,gt,h),e(gt,om),e(gt,lr),e(lr,sm),e(gt,am),e(gt,Io),e(Io,rm),e(gt,im),e(gt,Do),e(Do,dm),e(gt,lm),p(n,lc,h),g(So,n,h),p(n,cc,h),p(n,We,h),e(We,cm),e(We,sd),e(sd,pm),e(We,hm),e(We,ad),e(ad,um),e(We,mm),e(We,cr),e(cr,fm),e(We,_m),e(We,rd),e(rd,gm),e(We,Tm),p(n,pc,h),p(n,pr,h),e(pr,vm),p(n,hc,h),g(Go,n,h),p(n,uc,h),p(n,hr,h),p(n,mc,h),p(n,en,h),e(en,Pn),e(Pn,id),g(Uo,id,null),e(en,km),e(en,dd),e(dd,bm),p(n,fc,h),p(n,Tt,h),e(Tt,ym),e(Tt,Wo),e(Wo,wm),e(Tt,xm),e(Tt,ld),e(ld,$m),e(Tt,zm),e(Tt,cd),e(cd,qm),e(Tt,Em),p(n,_c,h),p(n,tn,h),e(tn,Nn),e(Nn,pd),g(Bo,pd,null),e(tn,jm),e(tn,hd),e(hd,Fm),p(n,gc,h),p(n,ur,h),e(ur,Mm),p(n,Tc,h),p(n,On,h),e(On,ud),e(ud,nn),e(nn,Cm),e(nn,Ro),e(Ro,Pm),e(nn,Nm),e(nn,Ho),e(Ho,Om),e(nn,Lm),e(On,Am),e(On,md),e(md,Ie),e(Ie,Im),e(Ie,Vo),e(Vo,Dm),e(Ie,Sm),e(Ie,Ko),e(Ko,Gm),e(Ie,Um),e(Ie,Yo),e(Yo,Wm),e(Ie,Bm),e(Ie,Zo),e(Zo,Rm),e(Ie,Hm),e(Ie,Jo),e(Jo,Vm),e(Ie,Km),p(n,vc,h),p(n,on,h),e(on,Ln),e(Ln,fd),g(Xo,fd,null),e(on,Ym),e(on,_d),e(_d,Zm),p(n,kc,h),p(n,wt,h),g(Qo,wt,null),e(wt,Jm),e(wt,xt),e(xt,Xm),e(xt,mr),e(mr,Qm),e(xt,ef),e(xt,fr),e(fr,tf),e(xt,nf),e(xt,es),e(es,of),e(xt,sf),e(wt,af),e(wt,sn),e(sn,rf),e(sn,_r),e(_r,df),e(sn,lf),e(sn,gr),e(gr,cf),e(sn,pf),p(n,bc,h),p(n,an,h),e(an,An),e(An,gd),g(ts,gd,null),e(an,hf),e(an,Td),e(Td,uf),p(n,yc,h),p(n,ie,h),g(ns,ie,null),e(ie,mf),e(ie,os),e(os,ff),e(os,ss),e(ss,_f),e(os,gf),e(ie,Tf),e(ie,as),e(as,vf),e(as,Tr),e(Tr,kf),e(as,bf),e(ie,yf),e(ie,jt),g(rs,jt,null),e(jt,wf),e(jt,vd),e(vd,xf),e(jt,$f),e(jt,is),e(is,vr),e(vr,zf),e(vr,kd),e(kd,qf),e(is,Ef),e(is,kr),e(kr,jf),e(kr,bd),e(bd,Ff),e(ie,Mf),e(ie,In),g(ds,In,null),e(In,Cf),e(In,ls),e(ls,Pf),e(ls,yd),e(yd,Nf),e(ls,Of),e(ie,Lf),e(ie,Dn),g(cs,Dn,null),e(Dn,Af),e(Dn,wd),e(wd,If),e(ie,Df),e(ie,br),g(ps,br,null),p(n,wc,h),p(n,rn,h),e(rn,Sn),e(Sn,xd),g(hs,xd,null),e(rn,Sf),e(rn,$d),e($d,Gf),p(n,xc,h),p(n,De,h),g(us,De,null),e(De,Uf),e(De,dn),e(dn,Wf),e(dn,zd),e(zd,Bf),e(dn,Rf),e(dn,ms),e(ms,Hf),e(dn,Vf),e(De,Kf),e(De,fs),e(fs,Yf),e(fs,yr),e(yr,Zf),e(fs,Jf),e(De,Xf),e(De,Ft),g(_s,Ft,null),e(Ft,Qf),e(Ft,qd),e(qd,e_),e(Ft,t_),e(Ft,gs),e(gs,wr),e(wr,n_),e(wr,Ed),e(Ed,o_),e(gs,s_),e(gs,xr),e(xr,a_),e(xr,jd),e(jd,r_),e(De,i_),e(De,Gn),g(Ts,Gn,null),e(Gn,d_),e(Gn,Fd),e(Fd,l_),p(n,$c,h),p(n,ln,h),e(ln,Un),e(Un,Md),g(vs,Md,null),e(ln,c_),e(ln,Cd),e(Cd,p_),p(n,zc,h),p(n,J,h),g(ks,J,null),e(J,h_),e(J,Pd),e(Pd,u_),e(J,m_),e(J,bs),e(bs,f_),e(bs,ys),e(ys,__),e(bs,g_),e(J,T_),e(J,ws),e(ws,v_),e(ws,$r),e($r,k_),e(ws,b_),e(J,y_),e(J,xs),e(xs,w_),e(xs,$s),e($s,x_),e(xs,$_),e(J,z_),e(J,Be),g(zs,Be,null),e(Be,q_),e(Be,cn),e(cn,E_),e(cn,zr),e(zr,j_),e(cn,F_),e(cn,Nd),e(Nd,M_),e(cn,C_),e(Be,P_),g(Wn,Be,null),e(Be,N_),e(Be,Od),e(Od,O_),e(Be,L_),g(qs,Be,null),e(J,A_),e(J,Re),g(Es,Re,null),e(Re,I_),e(Re,Ld),e(Ld,D_),e(Re,S_),e(Re,Ad),e(Ad,G_),e(Re,U_),e(Re,Id),e(Id,W_),e(Re,B_),g(js,Re,null),e(J,R_),e(J,vt),g(Fs,vt,null),e(vt,H_),e(vt,Dd),e(Dd,V_),e(vt,K_),e(vt,Sd),e(Sd,Y_),e(vt,Z_),g(Ms,vt,null),p(n,qc,h),p(n,pn,h),e(pn,Bn),e(Bn,Gd),g(Cs,Gd,null),e(pn,J_),e(pn,Ud),e(Ud,X_),p(n,Ec,h),p(n,X,h),g(Ps,X,null),e(X,Q_),e(X,Ns),e(Ns,eg),e(Ns,Wd),e(Wd,tg),e(Ns,ng),e(X,og),e(X,Os),e(Os,sg),e(Os,Ls),e(Ls,ag),e(Os,rg),e(X,ig),e(X,As),e(As,dg),e(As,qr),e(qr,lg),e(As,cg),e(X,pg),e(X,Is),e(Is,hg),e(Is,Ds),e(Ds,ug),e(Is,mg),e(X,fg),e(X,He),g(Ss,He,null),e(He,_g),e(He,hn),e(hn,gg),e(hn,Er),e(Er,Tg),e(hn,vg),e(hn,Bd),e(Bd,kg),e(hn,bg),e(He,yg),g(Rn,He,null),e(He,wg),e(He,Rd),e(Rd,xg),e(He,$g),g(Gs,He,null),e(X,zg),e(X,Ve),g(Us,Ve,null),e(Ve,qg),e(Ve,Hd),e(Hd,Eg),e(Ve,jg),e(Ve,Vd),e(Vd,Fg),e(Ve,Mg),e(Ve,Kd),e(Kd,Cg),e(Ve,Pg),g(Ws,Ve,null),e(X,Ng),e(X,kt),g(Bs,kt,null),e(kt,Og),e(kt,Yd),e(Yd,Lg),e(kt,Ag),e(kt,Zd),e(Zd,Ig),e(kt,Dg),g(Rs,kt,null),p(n,jc,h),p(n,un,h),e(un,Hn),e(Hn,Jd),g(Hs,Jd,null),e(un,Sg),e(un,Xd),e(Xd,Gg),p(n,Fc,h),p(n,Q,h),g(Vs,Q,null),e(Q,Ug),e(Q,Qd),e(Qd,Wg),e(Q,Bg),e(Q,Ks),e(Ks,Rg),e(Ks,Ys),e(Ys,Hg),e(Ks,Vg),e(Q,Kg),e(Q,Zs),e(Zs,Yg),e(Zs,jr),e(jr,Zg),e(Zs,Jg),e(Q,Xg),e(Q,Js),e(Js,Qg),e(Js,Xs),e(Xs,eT),e(Js,tT),e(Q,nT),e(Q,Ke),g(Qs,Ke,null),e(Ke,oT),e(Ke,mn),e(mn,sT),e(mn,Fr),e(Fr,aT),e(mn,rT),e(mn,el),e(el,iT),e(mn,dT),e(Ke,lT),g(Vn,Ke,null),e(Ke,cT),e(Ke,tl),e(tl,pT),e(Ke,hT),g(ea,Ke,null),e(Q,uT),e(Q,Ye),g(ta,Ye,null),e(Ye,mT),e(Ye,nl),e(nl,fT),e(Ye,_T),e(Ye,ol),e(ol,gT),e(Ye,TT),e(Ye,sl),e(sl,vT),e(Ye,kT),g(na,Ye,null),e(Q,bT),e(Q,bt),g(oa,bt,null),e(bt,yT),e(bt,al),e(al,wT),e(bt,xT),e(bt,rl),e(rl,$T),e(bt,zT),g(sa,bt,null),p(n,Mc,h),p(n,fn,h),e(fn,Kn),e(Kn,il),g(aa,il,null),e(fn,qT),e(fn,dl),e(dl,ET),p(n,Cc,h),p(n,de,h),g(ra,de,null),e(de,jT),e(de,ll),e(ll,FT),e(de,MT),e(de,ia),e(ia,CT),e(ia,da),e(da,PT),e(ia,NT),e(de,OT),e(de,la),e(la,LT),e(la,Mr),e(Mr,AT),e(la,IT),e(de,DT),e(de,ca),e(ca,ST),e(ca,pa),e(pa,GT),e(ca,UT),e(de,WT),g(Yn,de,null),e(de,BT),e(de,Ze),g(ha,Ze,null),e(Ze,RT),e(Ze,_n),e(_n,HT),e(_n,Cr),e(Cr,VT),e(_n,KT),e(_n,cl),e(cl,YT),e(_n,ZT),e(Ze,JT),g(Zn,Ze,null),e(Ze,XT),e(Ze,pl),e(pl,QT),e(Ze,e5),g(ua,Ze,null),p(n,Pc,h),p(n,gn,h),e(gn,Jn),e(Jn,hl),g(ma,hl,null),e(gn,t5),e(gn,ul),e(ul,n5),p(n,Nc,h),p(n,le,h),g(fa,le,null),e(le,o5),e(le,_a),e(_a,s5),e(_a,ml),e(ml,a5),e(_a,r5),e(le,i5),e(le,ga),e(ga,d5),e(ga,Ta),e(Ta,l5),e(ga,c5),e(le,p5),e(le,va),e(va,h5),e(va,Pr),e(Pr,u5),e(va,m5),e(le,f5),e(le,ka),e(ka,_5),e(ka,ba),e(ba,g5),e(ka,T5),e(le,v5),g(Xn,le,null),e(le,k5),e(le,Je),g(ya,Je,null),e(Je,b5),e(Je,Tn),e(Tn,y5),e(Tn,Nr),e(Nr,w5),e(Tn,x5),e(Tn,fl),e(fl,$5),e(Tn,z5),e(Je,q5),g(Qn,Je,null),e(Je,E5),e(Je,_l),e(_l,j5),e(Je,F5),g(wa,Je,null),p(n,Oc,h),p(n,vn,h),e(vn,eo),e(eo,gl),g(xa,gl,null),e(vn,M5),e(vn,Tl),e(Tl,C5),p(n,Lc,h),p(n,ce,h),g($a,ce,null),e(ce,P5),e(ce,vl),e(vl,N5),e(ce,O5),e(ce,za),e(za,L5),e(za,qa),e(qa,A5),e(za,I5),e(ce,D5),e(ce,Ea),e(Ea,S5),e(Ea,Or),e(Or,G5),e(Ea,U5),e(ce,W5),e(ce,ja),e(ja,B5),e(ja,Fa),e(Fa,R5),e(ja,H5),e(ce,V5),g(to,ce,null),e(ce,K5),e(ce,Xe),g(Ma,Xe,null),e(Xe,Y5),e(Xe,kn),e(kn,Z5),e(kn,Lr),e(Lr,J5),e(kn,X5),e(kn,kl),e(kl,Q5),e(kn,ev),e(Xe,tv),g(no,Xe,null),e(Xe,nv),e(Xe,bl),e(bl,ov),e(Xe,sv),g(Ca,Xe,null),p(n,Ac,h),p(n,bn,h),e(bn,oo),e(oo,yl),g(Pa,yl,null),e(bn,av),e(bn,wl),e(wl,rv),p(n,Ic,h),p(n,lt,h),g(Na,lt,null),e(lt,iv),e(lt,Qe),g(Oa,Qe,null),e(Qe,dv),e(Qe,yn),e(yn,lv),e(yn,xl),e(xl,cv),e(yn,pv),e(yn,$l),e($l,hv),e(yn,uv),e(Qe,mv),g(so,Qe,null),e(Qe,fv),e(Qe,zl),e(zl,_v),e(Qe,gv),g(La,Qe,null),e(lt,Tv),e(lt,Mt),g(Aa,Mt,null),e(Mt,vv),e(Mt,ql),e(ql,kv),e(Mt,bv),g(Ia,Mt,null),e(lt,yv),e(lt,Ct),g(Da,Ct,null),e(Ct,wv),e(Ct,El),e(El,xv),e(Ct,$v),g(Sa,Ct,null),p(n,Dc,h),p(n,wn,h),e(wn,ao),e(ao,jl),g(Ga,jl,null),e(wn,zv),e(wn,Fl),e(Fl,qv),p(n,Sc,h),p(n,ct,h),g(Ua,ct,null),e(ct,Ev),e(ct,et),g(Wa,et,null),e(et,jv),e(et,xn),e(xn,Fv),e(xn,Ml),e(Ml,Mv),e(xn,Cv),e(xn,Cl),e(Cl,Pv),e(xn,Nv),e(et,Ov),g(ro,et,null),e(et,Lv),e(et,Pl),e(Pl,Av),e(et,Iv),g(Ba,et,null),e(ct,Dv),e(ct,Pt),g(Ra,Pt,null),e(Pt,Sv),e(Pt,Nl),e(Nl,Gv),e(Pt,Uv),g(Ha,Pt,null),e(ct,Wv),e(ct,Nt),g(Va,Nt,null),e(Nt,Bv),e(Nt,Ol),e(Ol,Rv),e(Nt,Hv),g(Ka,Nt,null),Gc=!0},p(n,[h]){const Ya={};h&2&&(Ya.$$scope={dirty:h,ctx:n}),Wn.$set(Ya);const Ll={};h&2&&(Ll.$$scope={dirty:h,ctx:n}),Rn.$set(Ll);const Al={};h&2&&(Al.$$scope={dirty:h,ctx:n}),Vn.$set(Al);const Il={};h&2&&(Il.$$scope={dirty:h,ctx:n}),Yn.$set(Il);const Za={};h&2&&(Za.$$scope={dirty:h,ctx:n}),Zn.$set(Za);const Dl={};h&2&&(Dl.$$scope={dirty:h,ctx:n}),Xn.$set(Dl);const Sl={};h&2&&(Sl.$$scope={dirty:h,ctx:n}),Qn.$set(Sl);const Gl={};h&2&&(Gl.$$scope={dirty:h,ctx:n}),to.$set(Gl);const Ja={};h&2&&(Ja.$$scope={dirty:h,ctx:n}),no.$set(Ja);const Ul={};h&2&&(Ul.$$scope={dirty:h,ctx:n}),so.$set(Ul);const Wl={};h&2&&(Wl.$$scope={dirty:h,ctx:n}),ro.$set(Wl)},i(n){Gc||(T(x.$$.fragment,n),T(se.$$.fragment,n),T(zo.$$.fragment,n),T(qo.$$.fragment,n),T(Fo.$$.fragment,n),T(Co.$$.fragment,n),T(Ao.$$.fragment,n),T(So.$$.fragment,n),T(Go.$$.fragment,n),T(Uo.$$.fragment,n),T(Bo.$$.fragment,n),T(Xo.$$.fragment,n),T(Qo.$$.fragment,n),T(ts.$$.fragment,n),T(ns.$$.fragment,n),T(rs.$$.fragment,n),T(ds.$$.fragment,n),T(cs.$$.fragment,n),T(ps.$$.fragment,n),T(hs.$$.fragment,n),T(us.$$.fragment,n),T(_s.$$.fragment,n),T(Ts.$$.fragment,n),T(vs.$$.fragment,n),T(ks.$$.fragment,n),T(zs.$$.fragment,n),T(Wn.$$.fragment,n),T(qs.$$.fragment,n),T(Es.$$.fragment,n),T(js.$$.fragment,n),T(Fs.$$.fragment,n),T(Ms.$$.fragment,n),T(Cs.$$.fragment,n),T(Ps.$$.fragment,n),T(Ss.$$.fragment,n),T(Rn.$$.fragment,n),T(Gs.$$.fragment,n),T(Us.$$.fragment,n),T(Ws.$$.fragment,n),T(Bs.$$.fragment,n),T(Rs.$$.fragment,n),T(Hs.$$.fragment,n),T(Vs.$$.fragment,n),T(Qs.$$.fragment,n),T(Vn.$$.fragment,n),T(ea.$$.fragment,n),T(ta.$$.fragment,n),T(na.$$.fragment,n),T(oa.$$.fragment,n),T(sa.$$.fragment,n),T(aa.$$.fragment,n),T(ra.$$.fragment,n),T(Yn.$$.fragment,n),T(ha.$$.fragment,n),T(Zn.$$.fragment,n),T(ua.$$.fragment,n),T(ma.$$.fragment,n),T(fa.$$.fragment,n),T(Xn.$$.fragment,n),T(ya.$$.fragment,n),T(Qn.$$.fragment,n),T(wa.$$.fragment,n),T(xa.$$.fragment,n),T($a.$$.fragment,n),T(to.$$.fragment,n),T(Ma.$$.fragment,n),T(no.$$.fragment,n),T(Ca.$$.fragment,n),T(Pa.$$.fragment,n),T(Na.$$.fragment,n),T(Oa.$$.fragment,n),T(so.$$.fragment,n),T(La.$$.fragment,n),T(Aa.$$.fragment,n),T(Ia.$$.fragment,n),T(Da.$$.fragment,n),T(Sa.$$.fragment,n),T(Ga.$$.fragment,n),T(Ua.$$.fragment,n),T(Wa.$$.fragment,n),T(ro.$$.fragment,n),T(Ba.$$.fragment,n),T(Ra.$$.fragment,n),T(Ha.$$.fragment,n),T(Va.$$.fragment,n),T(Ka.$$.fragment,n),Gc=!0)},o(n){v(x.$$.fragment,n),v(se.$$.fragment,n),v(zo.$$.fragment,n),v(qo.$$.fragment,n),v(Fo.$$.fragment,n),v(Co.$$.fragment,n),v(Ao.$$.fragment,n),v(So.$$.fragment,n),v(Go.$$.fragment,n),v(Uo.$$.fragment,n),v(Bo.$$.fragment,n),v(Xo.$$.fragment,n),v(Qo.$$.fragment,n),v(ts.$$.fragment,n),v(ns.$$.fragment,n),v(rs.$$.fragment,n),v(ds.$$.fragment,n),v(cs.$$.fragment,n),v(ps.$$.fragment,n),v(hs.$$.fragment,n),v(us.$$.fragment,n),v(_s.$$.fragment,n),v(Ts.$$.fragment,n),v(vs.$$.fragment,n),v(ks.$$.fragment,n),v(zs.$$.fragment,n),v(Wn.$$.fragment,n),v(qs.$$.fragment,n),v(Es.$$.fragment,n),v(js.$$.fragment,n),v(Fs.$$.fragment,n),v(Ms.$$.fragment,n),v(Cs.$$.fragment,n),v(Ps.$$.fragment,n),v(Ss.$$.fragment,n),v(Rn.$$.fragment,n),v(Gs.$$.fragment,n),v(Us.$$.fragment,n),v(Ws.$$.fragment,n),v(Bs.$$.fragment,n),v(Rs.$$.fragment,n),v(Hs.$$.fragment,n),v(Vs.$$.fragment,n),v(Qs.$$.fragment,n),v(Vn.$$.fragment,n),v(ea.$$.fragment,n),v(ta.$$.fragment,n),v(na.$$.fragment,n),v(oa.$$.fragment,n),v(sa.$$.fragment,n),v(aa.$$.fragment,n),v(ra.$$.fragment,n),v(Yn.$$.fragment,n),v(ha.$$.fragment,n),v(Zn.$$.fragment,n),v(ua.$$.fragment,n),v(ma.$$.fragment,n),v(fa.$$.fragment,n),v(Xn.$$.fragment,n),v(ya.$$.fragment,n),v(Qn.$$.fragment,n),v(wa.$$.fragment,n),v(xa.$$.fragment,n),v($a.$$.fragment,n),v(to.$$.fragment,n),v(Ma.$$.fragment,n),v(no.$$.fragment,n),v(Ca.$$.fragment,n),v(Pa.$$.fragment,n),v(Na.$$.fragment,n),v(Oa.$$.fragment,n),v(so.$$.fragment,n),v(La.$$.fragment,n),v(Aa.$$.fragment,n),v(Ia.$$.fragment,n),v(Da.$$.fragment,n),v(Sa.$$.fragment,n),v(Ga.$$.fragment,n),v(Ua.$$.fragment,n),v(Wa.$$.fragment,n),v(ro.$$.fragment,n),v(Ba.$$.fragment,n),v(Ra.$$.fragment,n),v(Ha.$$.fragment,n),v(Va.$$.fragment,n),v(Ka.$$.fragment,n),Gc=!1},d(n){t(u),n&&t(z),n&&t(b),k(x),n&&t(oe),n&&t(E),k(se),n&&t(ke),n&&t(U),n&&t(P),n&&t(he),n&&t(be),n&&t(ue),n&&t(ye),n&&t(C),n&&t(H),n&&t(V),n&&t(Vl),n&&t(Xa),n&&t(Kl),n&&t(Ue),n&&t(Yl),n&&t(er),n&&t(Zl),n&&t(zt),n&&t(Jl),n&&t(En),n&&t(Xl),n&&t(qt),n&&t(Ql),n&&t(sr),n&&t(ec),n&&t(Zt),k(zo),n&&t(tc),n&&t(_t),n&&t(nc),n&&t(Fn),n&&t(oc),n&&t(Mn),k(qo),k(Fo),k(Co),n&&t(sc),n&&t(ir),n&&t(ac),n&&t(Et),n&&t(rc),n&&t(dr),n&&t(ic),n&&t(Qt),k(Ao),n&&t(dc),n&&t(gt),n&&t(lc),k(So,n),n&&t(cc),n&&t(We),n&&t(pc),n&&t(pr),n&&t(hc),k(Go,n),n&&t(uc),n&&t(hr),n&&t(mc),n&&t(en),k(Uo),n&&t(fc),n&&t(Tt),n&&t(_c),n&&t(tn),k(Bo),n&&t(gc),n&&t(ur),n&&t(Tc),n&&t(On),n&&t(vc),n&&t(on),k(Xo),n&&t(kc),n&&t(wt),k(Qo),n&&t(bc),n&&t(an),k(ts),n&&t(yc),n&&t(ie),k(ns),k(rs),k(ds),k(cs),k(ps),n&&t(wc),n&&t(rn),k(hs),n&&t(xc),n&&t(De),k(us),k(_s),k(Ts),n&&t($c),n&&t(ln),k(vs),n&&t(zc),n&&t(J),k(ks),k(zs),k(Wn),k(qs),k(Es),k(js),k(Fs),k(Ms),n&&t(qc),n&&t(pn),k(Cs),n&&t(Ec),n&&t(X),k(Ps),k(Ss),k(Rn),k(Gs),k(Us),k(Ws),k(Bs),k(Rs),n&&t(jc),n&&t(un),k(Hs),n&&t(Fc),n&&t(Q),k(Vs),k(Qs),k(Vn),k(ea),k(ta),k(na),k(oa),k(sa),n&&t(Mc),n&&t(fn),k(aa),n&&t(Cc),n&&t(de),k(ra),k(Yn),k(ha),k(Zn),k(ua),n&&t(Pc),n&&t(gn),k(ma),n&&t(Nc),n&&t(le),k(fa),k(Xn),k(ya),k(Qn),k(wa),n&&t(Oc),n&&t(vn),k(xa),n&&t(Lc),n&&t(ce),k($a),k(to),k(Ma),k(no),k(Ca),n&&t(Ac),n&&t(bn),k(Pa),n&&t(Ic),n&&t(lt),k(Na),k(Oa),k(so),k(La),k(Aa),k(Ia),k(Da),k(Sa),n&&t(Dc),n&&t(wn),k(Ga),n&&t(Sc),n&&t(ct),k(Ua),k(Wa),k(ro),k(Ba),k(Ra),k(Ha),k(Va),k(Ka)}}}const Fw={local:"t5",sections:[{local:"overview",title:"Overview"},{local:"training",title:"Training"},{local:"inference",title:"Inference"},{local:"performance",title:"Performance"},{local:"example-scripts",title:"Example scripts"},{local:"transformers.T5Config",title:"T5Config"},{local:"transformers.T5Tokenizer",title:"T5Tokenizer"},{local:"transformers.T5TokenizerFast",title:"T5TokenizerFast"},{local:"transformers.T5Model",title:"T5Model"},{local:"transformers.T5ForConditionalGeneration",title:"T5ForConditionalGeneration"},{local:"transformers.T5EncoderModel",title:"T5EncoderModel"},{local:"transformers.TFT5Model",title:"TFT5Model"},{local:"transformers.TFT5ForConditionalGeneration",title:"TFT5ForConditionalGeneration"},{local:"transformers.TFT5EncoderModel",title:"TFT5EncoderModel"},{local:"transformers.FlaxT5Model",title:"FlaxT5Model"},{local:"transformers.FlaxT5ForConditionalGeneration",title:"FlaxT5ForConditionalGeneration"}],title:"T5"};function Mw(L){return gw(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Aw extends uw{constructor(u){super();mw(this,u,Mw,jw,fw,{})}}export{Aw as default,Fw as metadata};
