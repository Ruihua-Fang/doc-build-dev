import{S as eT,i as tT,s as oT,e as r,k as l,w as k,t as n,Y as Po,M as nT,c as a,d as t,m as d,a as i,x as v,h as s,Z as jo,b as c,F as e,g as h,y as b,q as T,o as y,B as L}from"../../chunks/vendor-6b77c823.js";import{T as je}from"../../chunks/Tip-39098574.js";import{D as S}from"../../chunks/Docstring-abef54e3.js";import{C as at}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ze}from"../../chunks/IconCopyLink-7a11ce68.js";function sT(W){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function rT(W){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function aT(W){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function iT(W){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function lT(W){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function dT(W){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function cT(W){let p,x,g,u,$,w,_,M,de,X,E,ne,Q,ce,Z,H,he,re,R,P,se,K,z,q,me,D,Y,fe,I,pe,ge,C,ee,U,ae,te,N,ue,ie,j,_e,B,oe;return{c(){p=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),E=r("p"),ne=n("This second option is useful when using "),Q=r("code"),ce=n("tf.keras.Model.fit"),Z=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r("code"),he=n("model(inputs)"),re=n("."),R=l(),P=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),z=r("ul"),q=r("li"),me=n("a single Tensor with "),D=r("code"),Y=n("input_ids"),fe=n(" only and nothing else: "),I=r("code"),pe=n("model(inputs_ids)"),ge=l(),C=r("li"),ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r("code"),ae=n("model([input_ids, attention_mask])"),te=n(" or "),N=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ie=l(),j=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=a(m,"P",{});var F=i(p);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=a(m,"UL",{});var J=i(u);$=a(J,"LI",{});var Le=i($);w=s(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),_=d(J),M=a(J,"LI",{});var $e=i(M);de=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),X=d(m),E=a(m,"P",{});var O=i(E);ne=s(O,"This second option is useful when using "),Q=a(O,"CODE",{});var Fe=i(Q);ce=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),Z=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a(O,"CODE",{});var xe=i(H);he=s(xe,"model(inputs)"),xe.forEach(t),re=s(O,"."),O.forEach(t),R=d(m),P=a(m,"P",{});var be=i(P);se=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),K=d(m),z=a(m,"UL",{});var A=i(z);q=a(A,"LI",{});var V=i(q);me=s(V,"a single Tensor with "),D=a(V,"CODE",{});var Te=i(D);Y=s(Te,"input_ids"),Te.forEach(t),fe=s(V," only and nothing else: "),I=a(V,"CODE",{});var le=i(I);pe=s(le,"model(inputs_ids)"),le.forEach(t),V.forEach(t),ge=d(A),C=a(A,"LI",{});var G=i(C);ee=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(G,"CODE",{});var ke=i(U);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),te=s(G," or "),N=a(G,"CODE",{});var Me=i(N);ue=s(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),G.forEach(t),ie=d(A),j=a(A,"LI",{});var we=i(j);_e=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a(we,"CODE",{});var ve=i(B);oe=s(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(t),we.forEach(t),A.forEach(t)},m(m,F){h(m,p,F),e(p,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,de),h(m,X,F),h(m,E,F),e(E,ne),e(E,Q),e(Q,ce),e(E,Z),e(E,H),e(H,he),e(E,re),h(m,R,F),h(m,P,F),e(P,se),h(m,K,F),h(m,z,F),e(z,q),e(q,me),e(q,D),e(D,Y),e(q,fe),e(q,I),e(I,pe),e(z,ge),e(z,C),e(C,ee),e(C,U),e(U,ae),e(C,te),e(C,N),e(N,ue),e(z,ie),e(z,j),e(j,_e),e(j,B),e(B,oe)},d(m){m&&t(p),m&&t(g),m&&t(u),m&&t(X),m&&t(E),m&&t(R),m&&t(P),m&&t(K),m&&t(z)}}}function hT(W){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function mT(W){let p,x,g,u,$,w,_,M,de,X,E,ne,Q,ce,Z,H,he,re,R,P,se,K,z,q,me,D,Y,fe,I,pe,ge,C,ee,U,ae,te,N,ue,ie,j,_e,B,oe;return{c(){p=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),E=r("p"),ne=n("This second option is useful when using "),Q=r("code"),ce=n("tf.keras.Model.fit"),Z=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r("code"),he=n("model(inputs)"),re=n("."),R=l(),P=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),z=r("ul"),q=r("li"),me=n("a single Tensor with "),D=r("code"),Y=n("input_ids"),fe=n(" only and nothing else: "),I=r("code"),pe=n("model(inputs_ids)"),ge=l(),C=r("li"),ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r("code"),ae=n("model([input_ids, attention_mask])"),te=n(" or "),N=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ie=l(),j=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=a(m,"P",{});var F=i(p);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=a(m,"UL",{});var J=i(u);$=a(J,"LI",{});var Le=i($);w=s(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),_=d(J),M=a(J,"LI",{});var $e=i(M);de=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),X=d(m),E=a(m,"P",{});var O=i(E);ne=s(O,"This second option is useful when using "),Q=a(O,"CODE",{});var Fe=i(Q);ce=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),Z=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a(O,"CODE",{});var xe=i(H);he=s(xe,"model(inputs)"),xe.forEach(t),re=s(O,"."),O.forEach(t),R=d(m),P=a(m,"P",{});var be=i(P);se=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),K=d(m),z=a(m,"UL",{});var A=i(z);q=a(A,"LI",{});var V=i(q);me=s(V,"a single Tensor with "),D=a(V,"CODE",{});var Te=i(D);Y=s(Te,"input_ids"),Te.forEach(t),fe=s(V," only and nothing else: "),I=a(V,"CODE",{});var le=i(I);pe=s(le,"model(inputs_ids)"),le.forEach(t),V.forEach(t),ge=d(A),C=a(A,"LI",{});var G=i(C);ee=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(G,"CODE",{});var ke=i(U);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),te=s(G," or "),N=a(G,"CODE",{});var Me=i(N);ue=s(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),G.forEach(t),ie=d(A),j=a(A,"LI",{});var we=i(j);_e=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a(we,"CODE",{});var ve=i(B);oe=s(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(t),we.forEach(t),A.forEach(t)},m(m,F){h(m,p,F),e(p,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,de),h(m,X,F),h(m,E,F),e(E,ne),e(E,Q),e(Q,ce),e(E,Z),e(E,H),e(H,he),e(E,re),h(m,R,F),h(m,P,F),e(P,se),h(m,K,F),h(m,z,F),e(z,q),e(q,me),e(q,D),e(D,Y),e(q,fe),e(q,I),e(I,pe),e(z,ge),e(z,C),e(C,ee),e(C,U),e(U,ae),e(C,te),e(C,N),e(N,ue),e(z,ie),e(z,j),e(j,_e),e(j,B),e(B,oe)},d(m){m&&t(p),m&&t(g),m&&t(u),m&&t(X),m&&t(E),m&&t(R),m&&t(P),m&&t(K),m&&t(z)}}}function fT(W){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function pT(W){let p,x,g,u,$,w,_,M,de,X,E,ne,Q,ce,Z,H,he,re,R,P,se,K,z,q,me,D,Y,fe,I,pe,ge,C,ee,U,ae,te,N,ue,ie,j,_e,B,oe;return{c(){p=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),E=r("p"),ne=n("This second option is useful when using "),Q=r("code"),ce=n("tf.keras.Model.fit"),Z=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r("code"),he=n("model(inputs)"),re=n("."),R=l(),P=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),z=r("ul"),q=r("li"),me=n("a single Tensor with "),D=r("code"),Y=n("input_ids"),fe=n(" only and nothing else: "),I=r("code"),pe=n("model(inputs_ids)"),ge=l(),C=r("li"),ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r("code"),ae=n("model([input_ids, attention_mask])"),te=n(" or "),N=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ie=l(),j=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=a(m,"P",{});var F=i(p);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=a(m,"UL",{});var J=i(u);$=a(J,"LI",{});var Le=i($);w=s(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),_=d(J),M=a(J,"LI",{});var $e=i(M);de=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),X=d(m),E=a(m,"P",{});var O=i(E);ne=s(O,"This second option is useful when using "),Q=a(O,"CODE",{});var Fe=i(Q);ce=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),Z=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a(O,"CODE",{});var xe=i(H);he=s(xe,"model(inputs)"),xe.forEach(t),re=s(O,"."),O.forEach(t),R=d(m),P=a(m,"P",{});var be=i(P);se=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),K=d(m),z=a(m,"UL",{});var A=i(z);q=a(A,"LI",{});var V=i(q);me=s(V,"a single Tensor with "),D=a(V,"CODE",{});var Te=i(D);Y=s(Te,"input_ids"),Te.forEach(t),fe=s(V," only and nothing else: "),I=a(V,"CODE",{});var le=i(I);pe=s(le,"model(inputs_ids)"),le.forEach(t),V.forEach(t),ge=d(A),C=a(A,"LI",{});var G=i(C);ee=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(G,"CODE",{});var ke=i(U);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),te=s(G," or "),N=a(G,"CODE",{});var Me=i(N);ue=s(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),G.forEach(t),ie=d(A),j=a(A,"LI",{});var we=i(j);_e=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a(we,"CODE",{});var ve=i(B);oe=s(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(t),we.forEach(t),A.forEach(t)},m(m,F){h(m,p,F),e(p,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,de),h(m,X,F),h(m,E,F),e(E,ne),e(E,Q),e(Q,ce),e(E,Z),e(E,H),e(H,he),e(E,re),h(m,R,F),h(m,P,F),e(P,se),h(m,K,F),h(m,z,F),e(z,q),e(q,me),e(q,D),e(D,Y),e(q,fe),e(q,I),e(I,pe),e(z,ge),e(z,C),e(C,ee),e(C,U),e(U,ae),e(C,te),e(C,N),e(N,ue),e(z,ie),e(z,j),e(j,_e),e(j,B),e(B,oe)},d(m){m&&t(p),m&&t(g),m&&t(u),m&&t(X),m&&t(E),m&&t(R),m&&t(P),m&&t(K),m&&t(z)}}}function gT(W){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function uT(W){let p,x,g,u,$,w,_,M,de,X,E,ne,Q,ce,Z,H,he,re,R,P,se,K,z,q,me,D,Y,fe,I,pe,ge,C,ee,U,ae,te,N,ue,ie,j,_e,B,oe;return{c(){p=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),E=r("p"),ne=n("This second option is useful when using "),Q=r("code"),ce=n("tf.keras.Model.fit"),Z=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r("code"),he=n("model(inputs)"),re=n("."),R=l(),P=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),z=r("ul"),q=r("li"),me=n("a single Tensor with "),D=r("code"),Y=n("input_ids"),fe=n(" only and nothing else: "),I=r("code"),pe=n("model(inputs_ids)"),ge=l(),C=r("li"),ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r("code"),ae=n("model([input_ids, attention_mask])"),te=n(" or "),N=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ie=l(),j=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=a(m,"P",{});var F=i(p);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=a(m,"UL",{});var J=i(u);$=a(J,"LI",{});var Le=i($);w=s(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),_=d(J),M=a(J,"LI",{});var $e=i(M);de=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),X=d(m),E=a(m,"P",{});var O=i(E);ne=s(O,"This second option is useful when using "),Q=a(O,"CODE",{});var Fe=i(Q);ce=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),Z=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a(O,"CODE",{});var xe=i(H);he=s(xe,"model(inputs)"),xe.forEach(t),re=s(O,"."),O.forEach(t),R=d(m),P=a(m,"P",{});var be=i(P);se=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),K=d(m),z=a(m,"UL",{});var A=i(z);q=a(A,"LI",{});var V=i(q);me=s(V,"a single Tensor with "),D=a(V,"CODE",{});var Te=i(D);Y=s(Te,"input_ids"),Te.forEach(t),fe=s(V," only and nothing else: "),I=a(V,"CODE",{});var le=i(I);pe=s(le,"model(inputs_ids)"),le.forEach(t),V.forEach(t),ge=d(A),C=a(A,"LI",{});var G=i(C);ee=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(G,"CODE",{});var ke=i(U);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),te=s(G," or "),N=a(G,"CODE",{});var Me=i(N);ue=s(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),G.forEach(t),ie=d(A),j=a(A,"LI",{});var we=i(j);_e=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a(we,"CODE",{});var ve=i(B);oe=s(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(t),we.forEach(t),A.forEach(t)},m(m,F){h(m,p,F),e(p,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,de),h(m,X,F),h(m,E,F),e(E,ne),e(E,Q),e(Q,ce),e(E,Z),e(E,H),e(H,he),e(E,re),h(m,R,F),h(m,P,F),e(P,se),h(m,K,F),h(m,z,F),e(z,q),e(q,me),e(q,D),e(D,Y),e(q,fe),e(q,I),e(I,pe),e(z,ge),e(z,C),e(C,ee),e(C,U),e(U,ae),e(C,te),e(C,N),e(N,ue),e(z,ie),e(z,j),e(j,_e),e(j,B),e(B,oe)},d(m){m&&t(p),m&&t(g),m&&t(u),m&&t(X),m&&t(E),m&&t(R),m&&t(P),m&&t(K),m&&t(z)}}}function _T(W){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function wT(W){let p,x,g,u,$,w,_,M,de,X,E,ne,Q,ce,Z,H,he,re,R,P,se,K,z,q,me,D,Y,fe,I,pe,ge,C,ee,U,ae,te,N,ue,ie,j,_e,B,oe;return{c(){p=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),E=r("p"),ne=n("This second option is useful when using "),Q=r("code"),ce=n("tf.keras.Model.fit"),Z=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r("code"),he=n("model(inputs)"),re=n("."),R=l(),P=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),z=r("ul"),q=r("li"),me=n("a single Tensor with "),D=r("code"),Y=n("input_ids"),fe=n(" only and nothing else: "),I=r("code"),pe=n("model(inputs_ids)"),ge=l(),C=r("li"),ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r("code"),ae=n("model([input_ids, attention_mask])"),te=n(" or "),N=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ie=l(),j=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=a(m,"P",{});var F=i(p);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=a(m,"UL",{});var J=i(u);$=a(J,"LI",{});var Le=i($);w=s(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),_=d(J),M=a(J,"LI",{});var $e=i(M);de=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),X=d(m),E=a(m,"P",{});var O=i(E);ne=s(O,"This second option is useful when using "),Q=a(O,"CODE",{});var Fe=i(Q);ce=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),Z=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a(O,"CODE",{});var xe=i(H);he=s(xe,"model(inputs)"),xe.forEach(t),re=s(O,"."),O.forEach(t),R=d(m),P=a(m,"P",{});var be=i(P);se=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),K=d(m),z=a(m,"UL",{});var A=i(z);q=a(A,"LI",{});var V=i(q);me=s(V,"a single Tensor with "),D=a(V,"CODE",{});var Te=i(D);Y=s(Te,"input_ids"),Te.forEach(t),fe=s(V," only and nothing else: "),I=a(V,"CODE",{});var le=i(I);pe=s(le,"model(inputs_ids)"),le.forEach(t),V.forEach(t),ge=d(A),C=a(A,"LI",{});var G=i(C);ee=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(G,"CODE",{});var ke=i(U);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),te=s(G," or "),N=a(G,"CODE",{});var Me=i(N);ue=s(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),G.forEach(t),ie=d(A),j=a(A,"LI",{});var we=i(j);_e=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a(we,"CODE",{});var ve=i(B);oe=s(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(t),we.forEach(t),A.forEach(t)},m(m,F){h(m,p,F),e(p,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,de),h(m,X,F),h(m,E,F),e(E,ne),e(E,Q),e(Q,ce),e(E,Z),e(E,H),e(H,he),e(E,re),h(m,R,F),h(m,P,F),e(P,se),h(m,K,F),h(m,z,F),e(z,q),e(q,me),e(q,D),e(D,Y),e(q,fe),e(q,I),e(I,pe),e(z,ge),e(z,C),e(C,ee),e(C,U),e(U,ae),e(C,te),e(C,N),e(N,ue),e(z,ie),e(z,j),e(j,_e),e(j,B),e(B,oe)},d(m){m&&t(p),m&&t(g),m&&t(u),m&&t(X),m&&t(E),m&&t(R),m&&t(P),m&&t(K),m&&t(z)}}}function kT(W){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function vT(W){let p,x,g,u,$,w,_,M,de,X,E,ne,Q,ce,Z,H,he,re,R,P,se,K,z,q,me,D,Y,fe,I,pe,ge,C,ee,U,ae,te,N,ue,ie,j,_e,B,oe;return{c(){p=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),E=r("p"),ne=n("This second option is useful when using "),Q=r("code"),ce=n("tf.keras.Model.fit"),Z=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r("code"),he=n("model(inputs)"),re=n("."),R=l(),P=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),z=r("ul"),q=r("li"),me=n("a single Tensor with "),D=r("code"),Y=n("input_ids"),fe=n(" only and nothing else: "),I=r("code"),pe=n("model(inputs_ids)"),ge=l(),C=r("li"),ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r("code"),ae=n("model([input_ids, attention_mask])"),te=n(" or "),N=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ie=l(),j=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=a(m,"P",{});var F=i(p);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=a(m,"UL",{});var J=i(u);$=a(J,"LI",{});var Le=i($);w=s(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),_=d(J),M=a(J,"LI",{});var $e=i(M);de=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),X=d(m),E=a(m,"P",{});var O=i(E);ne=s(O,"This second option is useful when using "),Q=a(O,"CODE",{});var Fe=i(Q);ce=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),Z=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a(O,"CODE",{});var xe=i(H);he=s(xe,"model(inputs)"),xe.forEach(t),re=s(O,"."),O.forEach(t),R=d(m),P=a(m,"P",{});var be=i(P);se=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),K=d(m),z=a(m,"UL",{});var A=i(z);q=a(A,"LI",{});var V=i(q);me=s(V,"a single Tensor with "),D=a(V,"CODE",{});var Te=i(D);Y=s(Te,"input_ids"),Te.forEach(t),fe=s(V," only and nothing else: "),I=a(V,"CODE",{});var le=i(I);pe=s(le,"model(inputs_ids)"),le.forEach(t),V.forEach(t),ge=d(A),C=a(A,"LI",{});var G=i(C);ee=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(G,"CODE",{});var ke=i(U);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),te=s(G," or "),N=a(G,"CODE",{});var Me=i(N);ue=s(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),G.forEach(t),ie=d(A),j=a(A,"LI",{});var we=i(j);_e=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a(we,"CODE",{});var ve=i(B);oe=s(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(t),we.forEach(t),A.forEach(t)},m(m,F){h(m,p,F),e(p,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,de),h(m,X,F),h(m,E,F),e(E,ne),e(E,Q),e(Q,ce),e(E,Z),e(E,H),e(H,he),e(E,re),h(m,R,F),h(m,P,F),e(P,se),h(m,K,F),h(m,z,F),e(z,q),e(q,me),e(q,D),e(D,Y),e(q,fe),e(q,I),e(I,pe),e(z,ge),e(z,C),e(C,ee),e(C,U),e(U,ae),e(C,te),e(C,N),e(N,ue),e(z,ie),e(z,j),e(j,_e),e(j,B),e(B,oe)},d(m){m&&t(p),m&&t(g),m&&t(u),m&&t(X),m&&t(E),m&&t(R),m&&t(P),m&&t(K),m&&t(z)}}}function bT(W){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function TT(W){let p,x,g,u,$,w,_,M,de,X,E,ne,Q,ce,Z,H,he,re,R,P,se,K,z,q,me,D,Y,fe,I,pe,ge,C,ee,U,ae,te,N,ue,ie,j,_e,B,oe,m,F,J,Le,$e,O,Fe,xe,be,A,V,Te,le,G,ke,Me,we,ve,Oh,Ah,sd,jt,Oo,Va,$n,Ih,Ga,Nh,rd,ye,Sh,ad,Rb='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',id,ld,Ub='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',dd,cd,Vb='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',hd,Ka,Dh,Bh,Ja,Wh,Qh,Xa,Hh,Rh,md,Gb='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',fd,Ya,Uh,Vh,pd,gt,Gh,gd,Kb='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',ud,Za,Kh,Jh,_d,ut,Xh,ei,Yh,Zh,ti,em,tm,wd,Ao,oi,om,nm,ni,sm,kd,Io,rm,Nr,am,im,vd,Ve,lm,bd,Jb='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><msub><mi>n</mi><mi>s</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times n_s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>',Td,yd,Xb='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><mi>w</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times w)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mclose">)</span></span></span></span>',Ld,$d,Yb='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>n</mi><mi>s</mi></msub></mrow><annotation encoding="application/x-tex">n_s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>',Fd,xd,Zb='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Md,Ed,No,dm,Fn,cm,hm,zd,Ot,So,si,xn,mm,ri,fm,qd,At,Sr,pm,gm,Dr,um,_m,Cd,Mn,Pd,It,Do,ai,En,wm,ii,km,jd,Oe,zn,vm,Nt,bm,Br,Tm,ym,Wr,Lm,$m,Fm,St,xm,Qr,Mm,Em,qn,zm,qm,Cm,Dt,Pm,Hr,jm,Om,Rr,Am,Im,Nm,li,Sm,Dm,Cn,Od,Bt,Bo,di,Pn,Bm,ci,Wm,Ad,ft,jn,Qm,hi,Hm,Rm,Wo,Ur,Um,Vm,Vr,Gm,Km,Id,Wt,Qo,mi,On,Jm,fi,Xm,Nd,pt,An,Ym,In,Zm,pi,ef,tf,of,Ho,Gr,nf,sf,Kr,rf,af,Sd,Qt,Ro,gi,Nn,lf,ui,df,Dd,Ht,Sn,cf,_i,hf,Bd,Rt,Dn,mf,wi,ff,Wd,Ut,Bn,pf,ki,gf,Qd,Vt,Wn,uf,vi,_f,Hd,Gt,Qn,wf,bi,kf,Rd,Kt,Hn,vf,Ti,bf,Ud,Jt,Rn,Tf,yi,yf,Vd,Xt,Un,Lf,Li,$f,Gd,Yt,Vn,Ff,$i,xf,Kd,Zt,Gn,Mf,Fi,Ef,Jd,eo,Kn,zf,xi,qf,Xd,to,Jn,Cf,Mi,Pf,Yd,oo,Xn,jf,Ei,Of,Zd,no,Yn,Af,zi,If,ec,so,Uo,qi,Zn,Nf,Ci,Sf,tc,qe,es,Df,Pi,Bf,Wf,ts,Qf,Jr,Hf,Rf,Uf,os,Vf,ns,Gf,Kf,Jf,ro,Xf,Xr,Yf,Zf,ss,ep,tp,op,rs,np,ji,sp,rp,ap,Ge,as,ip,ao,lp,Yr,dp,cp,Oi,hp,mp,fp,Vo,pp,Ai,gp,up,is,oc,io,Go,Ii,ls,_p,Ni,wp,nc,We,ds,kp,cs,vp,Si,bp,Tp,yp,hs,Lp,Zr,$p,Fp,xp,ms,Mp,fs,Ep,zp,qp,Ke,ps,Cp,lo,Pp,ea,jp,Op,Di,Ap,Ip,Np,Ko,Sp,Bi,Dp,Bp,gs,sc,co,Jo,Wi,us,Wp,Qi,Qp,rc,Qe,_s,Hp,Hi,Rp,Up,ws,Vp,ta,Gp,Kp,Jp,ks,Xp,vs,Yp,Zp,eg,Ce,bs,tg,ho,og,oa,ng,sg,Ri,rg,ag,ig,Xo,lg,Ui,dg,cg,Ts,hg,Vi,mg,fg,ys,ac,mo,Yo,Gi,Ls,pg,Ki,gg,ic,He,$s,ug,Ji,_g,wg,Fs,kg,na,vg,bg,Tg,xs,yg,Ms,Lg,$g,Fg,Je,Es,xg,fo,Mg,sa,Eg,zg,Xi,qg,Cg,Pg,Zo,jg,Yi,Og,Ag,zs,lc,po,en,Zi,qs,Ig,el,Ng,dc,Re,Cs,Sg,tl,Dg,Bg,Ps,Wg,ra,Qg,Hg,Rg,js,Ug,Os,Vg,Gg,Kg,Xe,As,Jg,go,Xg,aa,Yg,Zg,ol,eu,tu,ou,tn,nu,nl,su,ru,Is,cc,uo,on,sl,Ns,au,rl,iu,hc,Ue,Ss,lu,_o,du,al,cu,hu,il,mu,fu,pu,Ds,gu,ia,uu,_u,wu,Bs,ku,Ws,vu,bu,Tu,Ye,Qs,yu,wo,Lu,la,$u,Fu,ll,xu,Mu,Eu,nn,zu,dl,qu,Cu,Hs,mc,ko,sn,cl,Rs,Pu,hl,ju,fc,Ee,Us,Ou,ml,Au,Iu,Vs,Nu,da,Su,Du,Bu,Gs,Wu,Ks,Qu,Hu,Ru,rn,Uu,vo,Vu,ca,Gu,Ku,Js,Ju,Xu,Yu,Xs,Zu,fl,e_,t_,o_,_t,Ys,n_,bo,s_,ha,r_,a_,pl,i_,l_,d_,an,pc,To,ln,gl,Zs,c_,ul,h_,gc,Ae,er,m_,tr,f_,_l,p_,g_,u_,or,__,ma,w_,k_,v_,nr,b_,sr,T_,y_,L_,dn,$_,Ze,rr,F_,yo,x_,fa,M_,E_,wl,z_,q_,C_,cn,P_,kl,j_,O_,ar,uc,Lo,hn,vl,ir,A_,bl,I_,_c,Ie,lr,N_,$o,S_,Tl,D_,B_,yl,W_,Q_,H_,dr,R_,pa,U_,V_,G_,cr,K_,hr,J_,X_,Y_,mn,Z_,et,mr,ew,Fo,tw,ga,ow,nw,Ll,sw,rw,aw,fn,iw,$l,lw,dw,fr,wc,xo,pn,Fl,pr,cw,xl,hw,kc,Ne,gr,mw,Ml,fw,pw,ur,gw,ua,uw,_w,ww,_r,kw,wr,vw,bw,Tw,gn,yw,tt,kr,Lw,Mo,$w,_a,Fw,xw,El,Mw,Ew,zw,un,qw,zl,Cw,Pw,vr,vc,Eo,_n,ql,br,jw,Cl,Ow,bc,Se,Tr,Aw,Pl,Iw,Nw,yr,Sw,wa,Dw,Bw,Ww,Lr,Qw,$r,Hw,Rw,Uw,wn,Vw,ot,Fr,Gw,zo,Kw,ka,Jw,Xw,jl,Yw,Zw,ek,kn,tk,Ol,ok,nk,xr,Tc,qo,vn,Al,Mr,sk,Il,rk,yc,De,Er,ak,Nl,ik,lk,zr,dk,va,ck,hk,mk,qr,fk,Cr,pk,gk,uk,bn,_k,nt,Pr,wk,Co,kk,ba,vk,bk,Sl,Tk,yk,Lk,Tn,$k,Dl,Fk,xk,jr,Lc;return w=new ze({}),K=new ze({}),$n=new ze({}),xn=new ze({}),Mn=new at({props:{code:`input_ids = tokenizer.encode("This is a sentence from [MASK] training data", return_tensors="pt")
mlm_labels = tokenizer.encode("This is a sentence from the training data", return_tensors="pt")

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[0]`,highlighted:`input_ids = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from [MASK] training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
mlm_labels = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from the training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[<span class="hljs-number">0</span>]`}}),En=new ze({}),zn=new S({props:{name:"class transformers.LongformerConfig",anchor:"transformers.LongformerConfig",parameters:[{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"sep_token_id",val:": int = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/configuration_longformer.py#L33",parametersDescription:[{anchor:"transformers.LongformerConfig.attention_window",description:`<strong>attention_window</strong> (<code>int</code> or <code>List[int]</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of an attention window around each token. If an <code>int</code>, use the same size for all layers. To specify a
different window size for each layer, use a <code>List[int]</code> where <code>len(attention_window) == num_hidden_layers</code>.`,name:"attention_window"}]}}),Cn=new at({props:{code:`from transformers import LongformerConfig, LongformerModel

# Initializing a Longformer configuration
configuration = LongformerConfig()

# Initializing a model from the configuration
model = LongformerModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerConfig, LongformerModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Longformer configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LongformerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Pn=new ze({}),jn=new S({props:{name:"class transformers.LongformerTokenizer",anchor:"transformers.LongformerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/tokenization_longformer.py#L51"}}),On=new ze({}),An=new S({props:{name:"class transformers.LongformerTokenizerFast",anchor:"transformers.LongformerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/tokenization_longformer_fast.py#L59"}}),Nn=new ze({}),Sn=new S({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_longformer.py#L61",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Dn=new S({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_longformer.py#L104",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.`,name:"pooler_output"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Bn=new S({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_longformer.py#L152",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Masked language modeling (MLM) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Wn=new S({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_longformer.py#L198",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Qn=new S({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_longformer.py#L247",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Hn=new S({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_longformer.py#L293",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Rn=new S({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_longformer.py#L341",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Un=new S({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_tf_longformer.py#L66",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Vn=new S({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"pooler_output",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_tf_longformer.py#L109",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.`,name:"pooler_output"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Gn=new S({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_tf_longformer.py#L157",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Masked language modeling (MLM) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Kn=new S({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_logits",val:": Tensor = None"},{name:"end_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_tf_longformer.py#L203",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Jn=new S({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_tf_longformer.py#L252",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Xn=new S({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_tf_longformer.py#L298",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Yn=new S({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_tf_longformer.py#L346",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Zn=new ze({}),es=new S({props:{name:"class transformers.LongformerModel",anchor:"transformers.LongformerModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_longformer.py#L1497",parametersDescription:[{anchor:"transformers.LongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16118/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),as=new S({props:{name:"forward",anchor:"transformers.LongformerModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_longformer.py#L1608",parametersDescription:[{anchor:"transformers.LongformerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerModel.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16118/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vo=new je({props:{$$slots:{default:[sT]},$$scope:{ctx:W}}}),is=new at({props:{code:`import torch
from transformers import LongformerModel, LongformerTokenizer

model = LongformerModel.from_pretrained("allenai/longformer-base-4096")
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")

SAMPLE_TEXT = " ".join(["Hello world! "] * 1000)  # long input document
input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(0)  # batch of size 1

attention_mask = torch.ones(
    input_ids.shape, dtype=torch.long, device=input_ids.device
)  # initialize to local attention
global_attention_mask = torch.zeros(
    input_ids.shape, dtype=torch.long, device=input_ids.device
)  # initialize to global attention to be deactivated for all tokens
global_attention_mask[
    :,
    [
        1,
        4,
        21,
    ],
] = 1  # Set global attention to random tokens for the sake of this example
# Usually, set global attention based on the task. For example,
# classification: the <s> token
# QA: question tokens
# LM: potentially on the beginning of sentences and paragraphs
outputs = model(input_ids, attention_mask=attention_mask, global_attention_mask=global_attention_mask)
sequence_output = outputs.last_hidden_state
pooled_output = outputs.pooler_output`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerModel, LongformerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerModel.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>SAMPLE_TEXT = <span class="hljs-string">&quot; &quot;</span>.join([<span class="hljs-string">&quot;Hello world! &quot;</span>] * <span class="hljs-number">1000</span>)  <span class="hljs-comment"># long input document</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># batch of size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = torch.ones(
<span class="hljs-meta">... </span>    input_ids.shape, dtype=torch.long, device=input_ids.device
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># initialize to local attention</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask = torch.zeros(
<span class="hljs-meta">... </span>    input_ids.shape, dtype=torch.long, device=input_ids.device
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># initialize to global attention to be deactivated for all tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask[
<span class="hljs-meta">... </span>    :,
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        <span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>        <span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>        <span class="hljs-number">21</span>,
<span class="hljs-meta">... </span>    ],
<span class="hljs-meta">&gt;&gt;&gt; </span>] = <span class="hljs-number">1</span>  <span class="hljs-comment"># Set global attention to random tokens for the sake of this example</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Usually, set global attention based on the task. For example,</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># classification: the &lt;s&gt; token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># QA: question tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># LM: potentially on the beginning of sentences and paragraphs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask, global_attention_mask=global_attention_mask)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_output = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output`}}),ls=new ze({}),ds=new S({props:{name:"class transformers.LongformerForMaskedLM",anchor:"transformers.LongformerForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_longformer.py#L1732",parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16118/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ps=new S({props:{name:"forward",anchor:"transformers.LongformerForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_longformer.py#L1751",parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16118/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.LongformerForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ko=new je({props:{$$slots:{default:[rT]},$$scope:{ctx:W}}}),gs=new at({props:{code:`import torch
from transformers import LongformerForMaskedLM, LongformerTokenizer

model = LongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")

SAMPLE_TEXT = " ".join(["Hello world! "] * 1000)  # long input document
input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(0)  # batch of size 1

attention_mask = None  # default is local attention everywhere, which is a good choice for MaskedLM
# check \`LongformerModel.forward\` for more details how to set *attention_mask*
outputs = model(input_ids, attention_mask=attention_mask, labels=input_ids)
loss = outputs.loss
prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerForMaskedLM, LongformerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>SAMPLE_TEXT = <span class="hljs-string">&quot; &quot;</span>.join([<span class="hljs-string">&quot;Hello world! &quot;</span>] * <span class="hljs-number">1000</span>)  <span class="hljs-comment"># long input document</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># batch of size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = <span class="hljs-literal">None</span>  <span class="hljs-comment"># default is local attention everywhere, which is a good choice for MaskedLM</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># check \`LongformerModel.forward\` for more details how to set *attention_mask*</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask, labels=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),us=new ze({}),_s=new S({props:{name:"class transformers.LongformerForSequenceClassification",anchor:"transformers.LongformerForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_longformer.py#L1837",parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16118/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bs=new S({props:{name:"forward",anchor:"transformers.LongformerForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_longformer.py#L1852",parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16118/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xo=new je({props:{$$slots:{default:[aT]},$$scope:{ctx:W}}}),Ts=new at({props:{code:`import torch
from transformers import LongformerTokenizer, LongformerForSequenceClassification

torch.manual_seed(0)
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),ys=new at({props:{code:`import torch
from transformers import LongformerTokenizer, LongformerForSequenceClassification

torch.manual_seed(0)
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096", problem_type="multi_label_classification", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),Ls=new ze({}),$s=new S({props:{name:"class transformers.LongformerForMultipleChoice",anchor:"transformers.LongformerForMultipleChoice",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_longformer.py#L2188",parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16118/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Es=new S({props:{name:"forward",anchor:"transformers.LongformerForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_longformer.py#L2199",parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16118/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zo=new je({props:{$$slots:{default:[iT]},$$scope:{ctx:W}}}),zs=new at({props:{code:`from transformers import LongformerTokenizer, LongformerForMultipleChoice
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForMultipleChoice.from_pretrained("allenai/longformer-base-4096")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),qs=new ze({}),Cs=new S({props:{name:"class transformers.LongformerForTokenClassification",anchor:"transformers.LongformerForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_longformer.py#L2103",parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16118/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),As=new S({props:{name:"forward",anchor:"transformers.LongformerForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_longformer.py#L2118",parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16118/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new je({props:{$$slots:{default:[lT]},$$scope:{ctx:W}}}),Is=new at({props:{code:`from transformers import LongformerTokenizer, LongformerForTokenClassification
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForTokenClassification.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ns=new ze({}),Ss=new S({props:{name:"class transformers.LongformerForQuestionAnswering",anchor:"transformers.LongformerForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_longformer.py#L1964",parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16118/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Qs=new S({props:{name:"forward",anchor:"transformers.LongformerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_longformer.py#L1978",parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16118/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LongformerForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nn=new je({props:{$$slots:{default:[dT]},$$scope:{ctx:W}}}),Hs=new at({props:{code:`from transformers import LongformerTokenizer, LongformerForQuestionAnswering
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")
model = LongformerForQuestionAnswering.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
encoding = tokenizer(question, text, return_tensors="pt")
input_ids = encoding["input_ids"]

# default is local attention everywhere
# the forward method will automatically set global attention on question tokens
attention_mask = encoding["attention_mask"]

outputs = model(input_ids, attention_mask=attention_mask)
start_logits = outputs.start_logits
end_logits = outputs.end_logits
all_tokens = tokenizer.convert_ids_to_tokens(input_ids[0].tolist())

answer_tokens = all_tokens[torch.argmax(start_logits) : torch.argmax(end_logits) + 1]
answer = tokenizer.decode(
    tokenizer.convert_tokens_to_ids(answer_tokens)
)  # remove space prepending space token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># default is local attention everywhere</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward method will automatically set global attention on question tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_ids[<span class="hljs-number">0</span>].tolist())

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_tokens = all_tokens[torch.argmax(start_logits) : torch.argmax(end_logits) + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = tokenizer.decode(
<span class="hljs-meta">... </span>    tokenizer.convert_tokens_to_ids(answer_tokens)
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># remove space prepending space token</span>`}}),Rs=new ze({}),Us=new S({props:{name:"class transformers.TFLongformerModel",anchor:"transformers.TFLongformerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_tf_longformer.py#L2006",parametersDescription:[{anchor:"transformers.TFLongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16118/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),rn=new je({props:{$$slots:{default:[cT]},$$scope:{ctx:W}}}),Ys=new S({props:{name:"call",anchor:"transformers.TFLongformerModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_tf_longformer.py#L2028",parametersDescription:[{anchor:"transformers.TFLongformerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerModel.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16118/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}]}}),an=new je({props:{$$slots:{default:[hT]},$$scope:{ctx:W}}}),Zs=new ze({}),er=new S({props:{name:"class transformers.TFLongformerForMaskedLM",anchor:"transformers.TFLongformerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_tf_longformer.py#L2094",parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16118/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),dn=new je({props:{$$slots:{default:[mT]},$$scope:{ctx:W}}}),rr=new S({props:{name:"call",anchor:"transformers.TFLongformerForMaskedLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_tf_longformer.py#L2111",parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16118/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),cn=new je({props:{$$slots:{default:[fT]},$$scope:{ctx:W}}}),ar=new at({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMaskedLM
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ir=new ze({}),lr=new S({props:{name:"class transformers.TFLongformerForQuestionAnswering",anchor:"transformers.TFLongformerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_tf_longformer.py#L2205",parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16118/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),mn=new je({props:{$$slots:{default:[pT]},$$scope:{ctx:W}}}),mr=new S({props:{name:"call",anchor:"transformers.TFLongformerForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_tf_longformer.py#L2220",parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16118/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),fn=new je({props:{$$slots:{default:[gT]},$$scope:{ctx:W}}}),fr=new at({props:{code:`from transformers import LongformerTokenizer, TFLongformerForQuestionAnswering
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")
model = TFLongformerForQuestionAnswering.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors="tf")
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = " ".join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0] + 1])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),pr=new ze({}),gr=new S({props:{name:"class transformers.TFLongformerForSequenceClassification",anchor:"transformers.TFLongformerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_tf_longformer.py#L2377",parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16118/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),gn=new je({props:{$$slots:{default:[uT]},$$scope:{ctx:W}}}),kr=new S({props:{name:"call",anchor:"transformers.TFLongformerForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_tf_longformer.py#L2389",parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16118/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),un=new je({props:{$$slots:{default:[_T]},$$scope:{ctx:W}}}),vr=new at({props:{code:`from transformers import LongformerTokenizer, TFLongformerForSequenceClassification
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),br=new ze({}),Tr=new S({props:{name:"class transformers.TFLongformerForTokenClassification",anchor:"transformers.TFLongformerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_tf_longformer.py#L2652",parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16118/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),wn=new je({props:{$$slots:{default:[wT]},$$scope:{ctx:W}}}),Fr=new S({props:{name:"call",anchor:"transformers.TFLongformerForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_tf_longformer.py#L2667",parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16118/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),kn=new je({props:{$$slots:{default:[kT]},$$scope:{ctx:W}}}),xr=new at({props:{code:`from transformers import LongformerTokenizer, TFLongformerForTokenClassification
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForTokenClassification.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
input_ids = inputs["input_ids"]
inputs["labels"] = tf.reshape(
    tf.constant([1] * tf.size(input_ids).numpy()), (-1, tf.size(input_ids))
)  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(
<span class="hljs-meta">... </span>    tf.constant([<span class="hljs-number">1</span>] * tf.size(input_ids).numpy()), (-<span class="hljs-number">1</span>, tf.size(input_ids))
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Mr=new ze({}),Er=new S({props:{name:"class transformers.TFLongformerForMultipleChoice",anchor:"transformers.TFLongformerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_tf_longformer.py#L2493",parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16118/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bn=new je({props:{$$slots:{default:[vT]},$$scope:{ctx:W}}}),Pr=new S({props:{name:"call",anchor:"transformers.TFLongformerForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16118/src/transformers/models/longformer/modeling_tf_longformer.py#L2513",parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16118/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16118/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16118/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Tn=new je({props:{$$slots:{default:[bT]},$$scope:{ctx:W}}}),jr=new at({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMultipleChoice
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForMultipleChoice.from_pretrained("allenai/longformer-base-4096")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=r("meta"),x=l(),g=r("h1"),u=r("a"),$=r("span"),k(w.$$.fragment),_=l(),M=r("span"),de=n("Longformer"),X=l(),E=r("p"),ne=r("strong"),Q=n("DISCLAIMER:"),ce=n(" This model is still a work in progress, if you see something strange, file a "),Z=r("a"),H=n("Github Issue"),he=n("."),re=l(),R=r("h2"),P=r("a"),se=r("span"),k(K.$$.fragment),z=l(),q=r("span"),me=n("Overview"),D=l(),Y=r("p"),fe=n("The Longformer model was presented in "),I=r("a"),pe=n("Longformer: The Long-Document Transformer"),ge=n(" by Iz Beltagy, Matthew E. Peters, Arman Cohan."),C=l(),ee=r("p"),U=n("The abstract from the paper is the following:"),ae=l(),te=r("p"),N=r("em"),ue=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),ie=l(),j=r("p"),_e=n("Tips:"),B=l(),oe=r("ul"),m=r("li"),F=n("Since the Longformer is based on RoBERTa, it doesn\u2019t have "),J=r("code"),Le=n("token_type_ids"),$e=n(`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),O=r("code"),Fe=n("tokenizer.sep_token"),xe=n(` (or
`),be=r("code"),A=n("</s>"),V=n(")."),Te=l(),le=r("p"),G=n("This model was contributed by "),ke=r("a"),Me=n("beltagy"),we=n(". The Authors\u2019 code can be found "),ve=r("a"),Oh=n("here"),Ah=n("."),sd=l(),jt=r("h2"),Oo=r("a"),Va=r("span"),k($n.$$.fragment),Ih=l(),Ga=r("span"),Nh=n("Longformer Self Attention"),rd=l(),ye=r("p"),Sh=n(`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),ad=new Po,id=n(` previous tokens and
`),ld=new Po,dd=n(" succeding tokens with "),cd=new Po,hd=n(` being the window length as defined in
`),Ka=r("code"),Dh=n("config.attention_window"),Bh=n(". Note that "),Ja=r("code"),Wh=n("config.attention_window"),Qh=n(" can be of type "),Xa=r("code"),Hh=n("List"),Rh=n(` to define a
different `),md=new Po,fd=n(` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),Ya=r("code"),Uh=n("BertSelfAttention"),Vh=n("."),pd=l(),gt=r("p"),Gh=n(`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),gd=new Po,ud=n(`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),Za=r("em"),Kh=n("symmetric"),Jh=n("."),_d=l(),ut=r("p"),Xh=n(`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),ei=r("code"),Yh=n("global_attention_mask"),Zh=n(` at run-time appropriately. All Longformer models employ the following logic for
`),ti=r("code"),em=n("global_attention_mask"),tm=n(":"),wd=l(),Ao=r("ul"),oi=r("li"),om=n("0: the token attends \u201Clocally\u201D,"),nm=l(),ni=r("li"),sm=n("1: the token attends \u201Cglobally\u201D."),kd=l(),Io=r("p"),rm=n("For more information please also refer to "),Nr=r("a"),am=n("forward()"),im=n(" method."),vd=l(),Ve=r("p"),lm=n(`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),bd=new Po,Td=n(` to
`),yd=new Po,Ld=n(", with "),$d=new Po,Fd=n(" being the sequence length and "),xd=new Po,Md=n(` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),Ed=l(),No=r("p"),dm=n("For more information, please refer to the official "),Fn=r("a"),cm=n("paper"),hm=n("."),zd=l(),Ot=r("h2"),So=r("a"),si=r("span"),k(xn.$$.fragment),mm=l(),ri=r("span"),fm=n("Training"),qd=l(),At=r("p"),Sr=r("a"),pm=n("LongformerForMaskedLM"),gm=n(" is trained the exact same way "),Dr=r("a"),um=n("RobertaForMaskedLM"),_m=n(` is
trained and should be used as follows:`),Cd=l(),k(Mn.$$.fragment),Pd=l(),It=r("h2"),Do=r("a"),ai=r("span"),k(En.$$.fragment),wm=l(),ii=r("span"),km=n("LongformerConfig"),jd=l(),Oe=r("div"),k(zn.$$.fragment),vm=l(),Nt=r("p"),bm=n("This is the configuration class to store the configuration of a "),Br=r("a"),Tm=n("LongformerModel"),ym=n(" or a "),Wr=r("a"),Lm=n("TFLongformerModel"),$m=n(`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),Fm=l(),St=r("p"),xm=n("This is the configuration class to store the configuration of a "),Qr=r("a"),Mm=n("LongformerModel"),Em=n(`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),qn=r("a"),zm=n("roberta-base"),qm=n(" architecture with a sequence length 4,096."),Cm=l(),Dt=r("p"),Pm=n("The "),Hr=r("a"),jm=n("LongformerConfig"),Om=n(" class directly inherits "),Rr=r("a"),Am=n("RobertaConfig"),Im=n(`. It reuses the same defaults. Please check the
parent class for more information.`),Nm=l(),li=r("p"),Sm=n("Example:"),Dm=l(),k(Cn.$$.fragment),Od=l(),Bt=r("h2"),Bo=r("a"),di=r("span"),k(Pn.$$.fragment),Bm=l(),ci=r("span"),Wm=n("LongformerTokenizer"),Ad=l(),ft=r("div"),k(jn.$$.fragment),Qm=l(),hi=r("p"),Hm=n("Construct a Longformer tokenizer."),Rm=l(),Wo=r("p"),Ur=r("a"),Um=n("LongformerTokenizer"),Vm=n(" is identical to "),Vr=r("a"),Gm=n("RobertaTokenizer"),Km=n(`. Refer to the superclass for usage examples and
documentation concerning parameters.`),Id=l(),Wt=r("h2"),Qo=r("a"),mi=r("span"),k(On.$$.fragment),Jm=l(),fi=r("span"),Xm=n("LongformerTokenizerFast"),Nd=l(),pt=r("div"),k(An.$$.fragment),Ym=l(),In=r("p"),Zm=n("Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),pi=r("em"),ef=n("tokenizers"),tf=n(" library)."),of=l(),Ho=r("p"),Gr=r("a"),nf=n("LongformerTokenizerFast"),sf=n(" is identical to "),Kr=r("a"),rf=n("RobertaTokenizerFast"),af=n(`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Sd=l(),Qt=r("h2"),Ro=r("a"),gi=r("span"),k(Nn.$$.fragment),lf=l(),ui=r("span"),df=n("Longformer specific outputs"),Dd=l(),Ht=r("div"),k(Sn.$$.fragment),cf=l(),_i=r("p"),hf=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Bd=l(),Rt=r("div"),k(Dn.$$.fragment),mf=l(),wi=r("p"),ff=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Wd=l(),Ut=r("div"),k(Bn.$$.fragment),pf=l(),ki=r("p"),gf=n("Base class for masked language models outputs."),Qd=l(),Vt=r("div"),k(Wn.$$.fragment),uf=l(),vi=r("p"),_f=n("Base class for outputs of question answering Longformer models."),Hd=l(),Gt=r("div"),k(Qn.$$.fragment),wf=l(),bi=r("p"),kf=n("Base class for outputs of sentence classification models."),Rd=l(),Kt=r("div"),k(Hn.$$.fragment),vf=l(),Ti=r("p"),bf=n("Base class for outputs of multiple choice Longformer models."),Ud=l(),Jt=r("div"),k(Rn.$$.fragment),Tf=l(),yi=r("p"),yf=n("Base class for outputs of token classification models."),Vd=l(),Xt=r("div"),k(Un.$$.fragment),Lf=l(),Li=r("p"),$f=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Gd=l(),Yt=r("div"),k(Vn.$$.fragment),Ff=l(),$i=r("p"),xf=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Kd=l(),Zt=r("div"),k(Gn.$$.fragment),Mf=l(),Fi=r("p"),Ef=n("Base class for masked language models outputs."),Jd=l(),eo=r("div"),k(Kn.$$.fragment),zf=l(),xi=r("p"),qf=n("Base class for outputs of question answering Longformer models."),Xd=l(),to=r("div"),k(Jn.$$.fragment),Cf=l(),Mi=r("p"),Pf=n("Base class for outputs of sentence classification models."),Yd=l(),oo=r("div"),k(Xn.$$.fragment),jf=l(),Ei=r("p"),Of=n("Base class for outputs of multiple choice models."),Zd=l(),no=r("div"),k(Yn.$$.fragment),Af=l(),zi=r("p"),If=n("Base class for outputs of token classification models."),ec=l(),so=r("h2"),Uo=r("a"),qi=r("span"),k(Zn.$$.fragment),Nf=l(),Ci=r("span"),Sf=n("LongformerModel"),tc=l(),qe=r("div"),k(es.$$.fragment),Df=l(),Pi=r("p"),Bf=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Wf=l(),ts=r("p"),Qf=n("This model inherits from "),Jr=r("a"),Hf=n("PreTrainedModel"),Rf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uf=l(),os=r("p"),Vf=n("This model is also a PyTorch "),ns=r("a"),Gf=n("torch.nn.Module"),Kf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jf=l(),ro=r("p"),Xf=n("This class copied code from "),Xr=r("a"),Yf=n("RobertaModel"),Zf=n(` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),ss=r("a"),ep=n(`Longformer:
the Long-Document Transformer`),tp=n(` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),op=l(),rs=r("p"),np=n("The self-attention module "),ji=r("code"),sp=n("LongformerSelfAttention"),rp=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),ap=l(),Ge=r("div"),k(as.$$.fragment),ip=l(),ao=r("p"),lp=n("The "),Yr=r("a"),dp=n("LongformerModel"),cp=n(" forward method, overrides the "),Oi=r("code"),hp=n("__call__"),mp=n(" special method."),fp=l(),k(Vo.$$.fragment),pp=l(),Ai=r("p"),gp=n("Examples:"),up=l(),k(is.$$.fragment),oc=l(),io=r("h2"),Go=r("a"),Ii=r("span"),k(ls.$$.fragment),_p=l(),Ni=r("span"),wp=n("LongformerForMaskedLM"),nc=l(),We=r("div"),k(ds.$$.fragment),kp=l(),cs=r("p"),vp=n("Longformer Model with a "),Si=r("code"),bp=n("language modeling"),Tp=n(" head on top."),yp=l(),hs=r("p"),Lp=n("This model inherits from "),Zr=r("a"),$p=n("PreTrainedModel"),Fp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xp=l(),ms=r("p"),Mp=n("This model is also a PyTorch "),fs=r("a"),Ep=n("torch.nn.Module"),zp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qp=l(),Ke=r("div"),k(ps.$$.fragment),Cp=l(),lo=r("p"),Pp=n("The "),ea=r("a"),jp=n("LongformerForMaskedLM"),Op=n(" forward method, overrides the "),Di=r("code"),Ap=n("__call__"),Ip=n(" special method."),Np=l(),k(Ko.$$.fragment),Sp=l(),Bi=r("p"),Dp=n("Examples:"),Bp=l(),k(gs.$$.fragment),sc=l(),co=r("h2"),Jo=r("a"),Wi=r("span"),k(us.$$.fragment),Wp=l(),Qi=r("span"),Qp=n("LongformerForSequenceClassification"),rc=l(),Qe=r("div"),k(_s.$$.fragment),Hp=l(),Hi=r("p"),Rp=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Up=l(),ws=r("p"),Vp=n("This model inherits from "),ta=r("a"),Gp=n("PreTrainedModel"),Kp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jp=l(),ks=r("p"),Xp=n("This model is also a PyTorch "),vs=r("a"),Yp=n("torch.nn.Module"),Zp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eg=l(),Ce=r("div"),k(bs.$$.fragment),tg=l(),ho=r("p"),og=n("The "),oa=r("a"),ng=n("LongformerForSequenceClassification"),sg=n(" forward method, overrides the "),Ri=r("code"),rg=n("__call__"),ag=n(" special method."),ig=l(),k(Xo.$$.fragment),lg=l(),Ui=r("p"),dg=n("Example of single-label classification:"),cg=l(),k(Ts.$$.fragment),hg=l(),Vi=r("p"),mg=n("Example of multi-label classification:"),fg=l(),k(ys.$$.fragment),ac=l(),mo=r("h2"),Yo=r("a"),Gi=r("span"),k(Ls.$$.fragment),pg=l(),Ki=r("span"),gg=n("LongformerForMultipleChoice"),ic=l(),He=r("div"),k($s.$$.fragment),ug=l(),Ji=r("p"),_g=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),wg=l(),Fs=r("p"),kg=n("This model inherits from "),na=r("a"),vg=n("PreTrainedModel"),bg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tg=l(),xs=r("p"),yg=n("This model is also a PyTorch "),Ms=r("a"),Lg=n("torch.nn.Module"),$g=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fg=l(),Je=r("div"),k(Es.$$.fragment),xg=l(),fo=r("p"),Mg=n("The "),sa=r("a"),Eg=n("LongformerForMultipleChoice"),zg=n(" forward method, overrides the "),Xi=r("code"),qg=n("__call__"),Cg=n(" special method."),Pg=l(),k(Zo.$$.fragment),jg=l(),Yi=r("p"),Og=n("Example:"),Ag=l(),k(zs.$$.fragment),lc=l(),po=r("h2"),en=r("a"),Zi=r("span"),k(qs.$$.fragment),Ig=l(),el=r("span"),Ng=n("LongformerForTokenClassification"),dc=l(),Re=r("div"),k(Cs.$$.fragment),Sg=l(),tl=r("p"),Dg=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Bg=l(),Ps=r("p"),Wg=n("This model inherits from "),ra=r("a"),Qg=n("PreTrainedModel"),Hg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rg=l(),js=r("p"),Ug=n("This model is also a PyTorch "),Os=r("a"),Vg=n("torch.nn.Module"),Gg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kg=l(),Xe=r("div"),k(As.$$.fragment),Jg=l(),go=r("p"),Xg=n("The "),aa=r("a"),Yg=n("LongformerForTokenClassification"),Zg=n(" forward method, overrides the "),ol=r("code"),eu=n("__call__"),tu=n(" special method."),ou=l(),k(tn.$$.fragment),nu=l(),nl=r("p"),su=n("Example:"),ru=l(),k(Is.$$.fragment),cc=l(),uo=r("h2"),on=r("a"),sl=r("span"),k(Ns.$$.fragment),au=l(),rl=r("span"),iu=n("LongformerForQuestionAnswering"),hc=l(),Ue=r("div"),k(Ss.$$.fragment),lu=l(),_o=r("p"),du=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),al=r("code"),cu=n("span start logits"),hu=n(" and "),il=r("code"),mu=n("span end logits"),fu=n(")."),pu=l(),Ds=r("p"),gu=n("This model inherits from "),ia=r("a"),uu=n("PreTrainedModel"),_u=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wu=l(),Bs=r("p"),ku=n("This model is also a PyTorch "),Ws=r("a"),vu=n("torch.nn.Module"),bu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tu=l(),Ye=r("div"),k(Qs.$$.fragment),yu=l(),wo=r("p"),Lu=n("The "),la=r("a"),$u=n("LongformerForQuestionAnswering"),Fu=n(" forward method, overrides the "),ll=r("code"),xu=n("__call__"),Mu=n(" special method."),Eu=l(),k(nn.$$.fragment),zu=l(),dl=r("p"),qu=n("Examples:"),Cu=l(),k(Hs.$$.fragment),mc=l(),ko=r("h2"),sn=r("a"),cl=r("span"),k(Rs.$$.fragment),Pu=l(),hl=r("span"),ju=n("TFLongformerModel"),fc=l(),Ee=r("div"),k(Us.$$.fragment),Ou=l(),ml=r("p"),Au=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Iu=l(),Vs=r("p"),Nu=n("This model inherits from "),da=r("a"),Su=n("TFPreTrainedModel"),Du=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bu=l(),Gs=r("p"),Wu=n("This model is also a "),Ks=r("a"),Qu=n("tf.keras.Model"),Hu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ru=l(),k(rn.$$.fragment),Uu=l(),vo=r("p"),Vu=n("This class copies code from "),ca=r("a"),Gu=n("TFRobertaModel"),Ku=n(` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Js=r("a"),Ju=n("Longformer: the Long-Document Transformer"),Xu=n(` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Yu=l(),Xs=r("p"),Zu=n("The self-attention module "),fl=r("code"),e_=n("TFLongformerSelfAttention"),t_=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),o_=l(),_t=r("div"),k(Ys.$$.fragment),n_=l(),bo=r("p"),s_=n("The "),ha=r("a"),r_=n("TFLongformerModel"),a_=n(" forward method, overrides the "),pl=r("code"),i_=n("__call__"),l_=n(" special method."),d_=l(),k(an.$$.fragment),pc=l(),To=r("h2"),ln=r("a"),gl=r("span"),k(Zs.$$.fragment),c_=l(),ul=r("span"),h_=n("TFLongformerForMaskedLM"),gc=l(),Ae=r("div"),k(er.$$.fragment),m_=l(),tr=r("p"),f_=n("Longformer Model with a "),_l=r("code"),p_=n("language modeling"),g_=n(" head on top."),u_=l(),or=r("p"),__=n("This model inherits from "),ma=r("a"),w_=n("TFPreTrainedModel"),k_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),v_=l(),nr=r("p"),b_=n("This model is also a "),sr=r("a"),T_=n("tf.keras.Model"),y_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),L_=l(),k(dn.$$.fragment),$_=l(),Ze=r("div"),k(rr.$$.fragment),F_=l(),yo=r("p"),x_=n("The "),fa=r("a"),M_=n("TFLongformerForMaskedLM"),E_=n(" forward method, overrides the "),wl=r("code"),z_=n("__call__"),q_=n(" special method."),C_=l(),k(cn.$$.fragment),P_=l(),kl=r("p"),j_=n("Example:"),O_=l(),k(ar.$$.fragment),uc=l(),Lo=r("h2"),hn=r("a"),vl=r("span"),k(ir.$$.fragment),A_=l(),bl=r("span"),I_=n("TFLongformerForQuestionAnswering"),_c=l(),Ie=r("div"),k(lr.$$.fragment),N_=l(),$o=r("p"),S_=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),Tl=r("code"),D_=n("span start logits"),B_=n(" and "),yl=r("code"),W_=n("span end logits"),Q_=n(")."),H_=l(),dr=r("p"),R_=n("This model inherits from "),pa=r("a"),U_=n("TFPreTrainedModel"),V_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),G_=l(),cr=r("p"),K_=n("This model is also a "),hr=r("a"),J_=n("tf.keras.Model"),X_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Y_=l(),k(mn.$$.fragment),Z_=l(),et=r("div"),k(mr.$$.fragment),ew=l(),Fo=r("p"),tw=n("The "),ga=r("a"),ow=n("TFLongformerForQuestionAnswering"),nw=n(" forward method, overrides the "),Ll=r("code"),sw=n("__call__"),rw=n(" special method."),aw=l(),k(fn.$$.fragment),iw=l(),$l=r("p"),lw=n("Example:"),dw=l(),k(fr.$$.fragment),wc=l(),xo=r("h2"),pn=r("a"),Fl=r("span"),k(pr.$$.fragment),cw=l(),xl=r("span"),hw=n("TFLongformerForSequenceClassification"),kc=l(),Ne=r("div"),k(gr.$$.fragment),mw=l(),Ml=r("p"),fw=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),pw=l(),ur=r("p"),gw=n("This model inherits from "),ua=r("a"),uw=n("TFPreTrainedModel"),_w=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ww=l(),_r=r("p"),kw=n("This model is also a "),wr=r("a"),vw=n("tf.keras.Model"),bw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tw=l(),k(gn.$$.fragment),yw=l(),tt=r("div"),k(kr.$$.fragment),Lw=l(),Mo=r("p"),$w=n("The "),_a=r("a"),Fw=n("TFLongformerForSequenceClassification"),xw=n(" forward method, overrides the "),El=r("code"),Mw=n("__call__"),Ew=n(" special method."),zw=l(),k(un.$$.fragment),qw=l(),zl=r("p"),Cw=n("Example:"),Pw=l(),k(vr.$$.fragment),vc=l(),Eo=r("h2"),_n=r("a"),ql=r("span"),k(br.$$.fragment),jw=l(),Cl=r("span"),Ow=n("TFLongformerForTokenClassification"),bc=l(),Se=r("div"),k(Tr.$$.fragment),Aw=l(),Pl=r("p"),Iw=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Nw=l(),yr=r("p"),Sw=n("This model inherits from "),wa=r("a"),Dw=n("TFPreTrainedModel"),Bw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ww=l(),Lr=r("p"),Qw=n("This model is also a "),$r=r("a"),Hw=n("tf.keras.Model"),Rw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uw=l(),k(wn.$$.fragment),Vw=l(),ot=r("div"),k(Fr.$$.fragment),Gw=l(),zo=r("p"),Kw=n("The "),ka=r("a"),Jw=n("TFLongformerForTokenClassification"),Xw=n(" forward method, overrides the "),jl=r("code"),Yw=n("__call__"),Zw=n(" special method."),ek=l(),k(kn.$$.fragment),tk=l(),Ol=r("p"),ok=n("Example:"),nk=l(),k(xr.$$.fragment),Tc=l(),qo=r("h2"),vn=r("a"),Al=r("span"),k(Mr.$$.fragment),sk=l(),Il=r("span"),rk=n("TFLongformerForMultipleChoice"),yc=l(),De=r("div"),k(Er.$$.fragment),ak=l(),Nl=r("p"),ik=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),lk=l(),zr=r("p"),dk=n("This model inherits from "),va=r("a"),ck=n("TFPreTrainedModel"),hk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mk=l(),qr=r("p"),fk=n("This model is also a "),Cr=r("a"),pk=n("tf.keras.Model"),gk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uk=l(),k(bn.$$.fragment),_k=l(),nt=r("div"),k(Pr.$$.fragment),wk=l(),Co=r("p"),kk=n("The "),ba=r("a"),vk=n("TFLongformerForMultipleChoice"),bk=n(" forward method, overrides the "),Sl=r("code"),Tk=n("__call__"),yk=n(" special method."),Lk=l(),k(Tn.$$.fragment),$k=l(),Dl=r("p"),Fk=n("Example:"),xk=l(),k(jr.$$.fragment),this.h()},l(o){const f=nT('[data-svelte="svelte-1phssyn"]',document.head);p=a(f,"META",{name:!0,content:!0}),f.forEach(t),x=d(o),g=a(o,"H1",{class:!0});var Or=i(g);u=a(Or,"A",{id:!0,class:!0,href:!0});var Bl=i(u);$=a(Bl,"SPAN",{});var Wl=i($);v(w.$$.fragment,Wl),Wl.forEach(t),Bl.forEach(t),_=d(Or),M=a(Or,"SPAN",{});var Ql=i(M);de=s(Ql,"Longformer"),Ql.forEach(t),Or.forEach(t),X=d(o),E=a(o,"P",{});var yn=i(E);ne=a(yn,"STRONG",{});var Hl=i(ne);Q=s(Hl,"DISCLAIMER:"),Hl.forEach(t),ce=s(yn," This model is still a work in progress, if you see something strange, file a "),Z=a(yn,"A",{href:!0,rel:!0});var Rl=i(Z);H=s(Rl,"Github Issue"),Rl.forEach(t),he=s(yn,"."),yn.forEach(t),re=d(o),R=a(o,"H2",{class:!0});var Ar=i(R);P=a(Ar,"A",{id:!0,class:!0,href:!0});var Ul=i(P);se=a(Ul,"SPAN",{});var Vl=i(se);v(K.$$.fragment,Vl),Vl.forEach(t),Ul.forEach(t),z=d(Ar),q=a(Ar,"SPAN",{});var Gl=i(q);me=s(Gl,"Overview"),Gl.forEach(t),Ar.forEach(t),D=d(o),Y=a(o,"P",{});var Ir=i(Y);fe=s(Ir,"The Longformer model was presented in "),I=a(Ir,"A",{href:!0,rel:!0});var Kl=i(I);pe=s(Kl,"Longformer: The Long-Document Transformer"),Kl.forEach(t),ge=s(Ir," by Iz Beltagy, Matthew E. Peters, Arman Cohan."),Ir.forEach(t),C=d(o),ee=a(o,"P",{});var Jl=i(ee);U=s(Jl,"The abstract from the paper is the following:"),Jl.forEach(t),ae=d(o),te=a(o,"P",{});var Xl=i(te);N=a(Xl,"EM",{});var Yl=i(N);ue=s(Yl,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),Yl.forEach(t),Xl.forEach(t),ie=d(o),j=a(o,"P",{});var Zl=i(j);_e=s(Zl,"Tips:"),Zl.forEach(t),B=d(o),oe=a(o,"UL",{});var ed=i(oe);m=a(ed,"LI",{});var Ln=i(m);F=s(Ln,"Since the Longformer is based on RoBERTa, it doesn\u2019t have "),J=a(Ln,"CODE",{});var Mk=i(J);Le=s(Mk,"token_type_ids"),Mk.forEach(t),$e=s(Ln,`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),O=a(Ln,"CODE",{});var Ek=i(O);Fe=s(Ek,"tokenizer.sep_token"),Ek.forEach(t),xe=s(Ln,` (or
`),be=a(Ln,"CODE",{});var zk=i(be);A=s(zk,"</s>"),zk.forEach(t),V=s(Ln,")."),Ln.forEach(t),ed.forEach(t),Te=d(o),le=a(o,"P",{});var Ta=i(le);G=s(Ta,"This model was contributed by "),ke=a(Ta,"A",{href:!0,rel:!0});var qk=i(ke);Me=s(qk,"beltagy"),qk.forEach(t),we=s(Ta,". The Authors\u2019 code can be found "),ve=a(Ta,"A",{href:!0,rel:!0});var Ck=i(ve);Oh=s(Ck,"here"),Ck.forEach(t),Ah=s(Ta,"."),Ta.forEach(t),sd=d(o),jt=a(o,"H2",{class:!0});var $c=i(jt);Oo=a($c,"A",{id:!0,class:!0,href:!0});var Pk=i(Oo);Va=a(Pk,"SPAN",{});var jk=i(Va);v($n.$$.fragment,jk),jk.forEach(t),Pk.forEach(t),Ih=d($c),Ga=a($c,"SPAN",{});var Ok=i(Ga);Nh=s(Ok,"Longformer Self Attention"),Ok.forEach(t),$c.forEach(t),rd=d(o),ye=a(o,"P",{});var Pe=i(ye);Sh=s(Pe,`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),ad=jo(Pe),id=s(Pe,` previous tokens and
`),ld=jo(Pe),dd=s(Pe," succeding tokens with "),cd=jo(Pe),hd=s(Pe,` being the window length as defined in
`),Ka=a(Pe,"CODE",{});var Ak=i(Ka);Dh=s(Ak,"config.attention_window"),Ak.forEach(t),Bh=s(Pe,". Note that "),Ja=a(Pe,"CODE",{});var Ik=i(Ja);Wh=s(Ik,"config.attention_window"),Ik.forEach(t),Qh=s(Pe," can be of type "),Xa=a(Pe,"CODE",{});var Nk=i(Xa);Hh=s(Nk,"List"),Nk.forEach(t),Rh=s(Pe,` to define a
different `),md=jo(Pe),fd=s(Pe,` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),Ya=a(Pe,"CODE",{});var Sk=i(Ya);Uh=s(Sk,"BertSelfAttention"),Sk.forEach(t),Vh=s(Pe,"."),Pe.forEach(t),pd=d(o),gt=a(o,"P",{});var ya=i(gt);Gh=s(ya,`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),gd=jo(ya),ud=s(ya,`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),Za=a(ya,"EM",{});var Dk=i(Za);Kh=s(Dk,"symmetric"),Dk.forEach(t),Jh=s(ya,"."),ya.forEach(t),_d=d(o),ut=a(o,"P",{});var La=i(ut);Xh=s(La,`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),ei=a(La,"CODE",{});var Bk=i(ei);Yh=s(Bk,"global_attention_mask"),Bk.forEach(t),Zh=s(La,` at run-time appropriately. All Longformer models employ the following logic for
`),ti=a(La,"CODE",{});var Wk=i(ti);em=s(Wk,"global_attention_mask"),Wk.forEach(t),tm=s(La,":"),La.forEach(t),wd=d(o),Ao=a(o,"UL",{});var Fc=i(Ao);oi=a(Fc,"LI",{});var Qk=i(oi);om=s(Qk,"0: the token attends \u201Clocally\u201D,"),Qk.forEach(t),nm=d(Fc),ni=a(Fc,"LI",{});var Hk=i(ni);sm=s(Hk,"1: the token attends \u201Cglobally\u201D."),Hk.forEach(t),Fc.forEach(t),kd=d(o),Io=a(o,"P",{});var xc=i(Io);rm=s(xc,"For more information please also refer to "),Nr=a(xc,"A",{href:!0});var Rk=i(Nr);am=s(Rk,"forward()"),Rk.forEach(t),im=s(xc," method."),xc.forEach(t),vd=d(o),Ve=a(o,"P",{});var wt=i(Ve);lm=s(wt,`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),bd=jo(wt),Td=s(wt,` to
`),yd=jo(wt),Ld=s(wt,", with "),$d=jo(wt),Fd=s(wt," being the sequence length and "),xd=jo(wt),Md=s(wt,` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),wt.forEach(t),Ed=d(o),No=a(o,"P",{});var Mc=i(No);dm=s(Mc,"For more information, please refer to the official "),Fn=a(Mc,"A",{href:!0,rel:!0});var Uk=i(Fn);cm=s(Uk,"paper"),Uk.forEach(t),hm=s(Mc,"."),Mc.forEach(t),zd=d(o),Ot=a(o,"H2",{class:!0});var Ec=i(Ot);So=a(Ec,"A",{id:!0,class:!0,href:!0});var Vk=i(So);si=a(Vk,"SPAN",{});var Gk=i(si);v(xn.$$.fragment,Gk),Gk.forEach(t),Vk.forEach(t),mm=d(Ec),ri=a(Ec,"SPAN",{});var Kk=i(ri);fm=s(Kk,"Training"),Kk.forEach(t),Ec.forEach(t),qd=d(o),At=a(o,"P",{});var td=i(At);Sr=a(td,"A",{href:!0});var Jk=i(Sr);pm=s(Jk,"LongformerForMaskedLM"),Jk.forEach(t),gm=s(td," is trained the exact same way "),Dr=a(td,"A",{href:!0});var Xk=i(Dr);um=s(Xk,"RobertaForMaskedLM"),Xk.forEach(t),_m=s(td,` is
trained and should be used as follows:`),td.forEach(t),Cd=d(o),v(Mn.$$.fragment,o),Pd=d(o),It=a(o,"H2",{class:!0});var zc=i(It);Do=a(zc,"A",{id:!0,class:!0,href:!0});var Yk=i(Do);ai=a(Yk,"SPAN",{});var Zk=i(ai);v(En.$$.fragment,Zk),Zk.forEach(t),Yk.forEach(t),wm=d(zc),ii=a(zc,"SPAN",{});var ev=i(ii);km=s(ev,"LongformerConfig"),ev.forEach(t),zc.forEach(t),jd=d(o),Oe=a(o,"DIV",{class:!0});var it=i(Oe);v(zn.$$.fragment,it),vm=d(it),Nt=a(it,"P",{});var $a=i(Nt);bm=s($a,"This is the configuration class to store the configuration of a "),Br=a($a,"A",{href:!0});var tv=i(Br);Tm=s(tv,"LongformerModel"),tv.forEach(t),ym=s($a," or a "),Wr=a($a,"A",{href:!0});var ov=i(Wr);Lm=s(ov,"TFLongformerModel"),ov.forEach(t),$m=s($a,`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),$a.forEach(t),Fm=d(it),St=a(it,"P",{});var Fa=i(St);xm=s(Fa,"This is the configuration class to store the configuration of a "),Qr=a(Fa,"A",{href:!0});var nv=i(Qr);Mm=s(nv,"LongformerModel"),nv.forEach(t),Em=s(Fa,`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),qn=a(Fa,"A",{href:!0,rel:!0});var sv=i(qn);zm=s(sv,"roberta-base"),sv.forEach(t),qm=s(Fa," architecture with a sequence length 4,096."),Fa.forEach(t),Cm=d(it),Dt=a(it,"P",{});var xa=i(Dt);Pm=s(xa,"The "),Hr=a(xa,"A",{href:!0});var rv=i(Hr);jm=s(rv,"LongformerConfig"),rv.forEach(t),Om=s(xa," class directly inherits "),Rr=a(xa,"A",{href:!0});var av=i(Rr);Am=s(av,"RobertaConfig"),av.forEach(t),Im=s(xa,`. It reuses the same defaults. Please check the
parent class for more information.`),xa.forEach(t),Nm=d(it),li=a(it,"P",{});var iv=i(li);Sm=s(iv,"Example:"),iv.forEach(t),Dm=d(it),v(Cn.$$.fragment,it),it.forEach(t),Od=d(o),Bt=a(o,"H2",{class:!0});var qc=i(Bt);Bo=a(qc,"A",{id:!0,class:!0,href:!0});var lv=i(Bo);di=a(lv,"SPAN",{});var dv=i(di);v(Pn.$$.fragment,dv),dv.forEach(t),lv.forEach(t),Bm=d(qc),ci=a(qc,"SPAN",{});var cv=i(ci);Wm=s(cv,"LongformerTokenizer"),cv.forEach(t),qc.forEach(t),Ad=d(o),ft=a(o,"DIV",{class:!0});var Ma=i(ft);v(jn.$$.fragment,Ma),Qm=d(Ma),hi=a(Ma,"P",{});var hv=i(hi);Hm=s(hv,"Construct a Longformer tokenizer."),hv.forEach(t),Rm=d(Ma),Wo=a(Ma,"P",{});var od=i(Wo);Ur=a(od,"A",{href:!0});var mv=i(Ur);Um=s(mv,"LongformerTokenizer"),mv.forEach(t),Vm=s(od," is identical to "),Vr=a(od,"A",{href:!0});var fv=i(Vr);Gm=s(fv,"RobertaTokenizer"),fv.forEach(t),Km=s(od,`. Refer to the superclass for usage examples and
documentation concerning parameters.`),od.forEach(t),Ma.forEach(t),Id=d(o),Wt=a(o,"H2",{class:!0});var Cc=i(Wt);Qo=a(Cc,"A",{id:!0,class:!0,href:!0});var pv=i(Qo);mi=a(pv,"SPAN",{});var gv=i(mi);v(On.$$.fragment,gv),gv.forEach(t),pv.forEach(t),Jm=d(Cc),fi=a(Cc,"SPAN",{});var uv=i(fi);Xm=s(uv,"LongformerTokenizerFast"),uv.forEach(t),Cc.forEach(t),Nd=d(o),pt=a(o,"DIV",{class:!0});var Ea=i(pt);v(An.$$.fragment,Ea),Ym=d(Ea),In=a(Ea,"P",{});var Pc=i(In);Zm=s(Pc,"Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),pi=a(Pc,"EM",{});var _v=i(pi);ef=s(_v,"tokenizers"),_v.forEach(t),tf=s(Pc," library)."),Pc.forEach(t),of=d(Ea),Ho=a(Ea,"P",{});var nd=i(Ho);Gr=a(nd,"A",{href:!0});var wv=i(Gr);nf=s(wv,"LongformerTokenizerFast"),wv.forEach(t),sf=s(nd," is identical to "),Kr=a(nd,"A",{href:!0});var kv=i(Kr);rf=s(kv,"RobertaTokenizerFast"),kv.forEach(t),af=s(nd,`. Refer to the superclass for usage examples
and documentation concerning parameters.`),nd.forEach(t),Ea.forEach(t),Sd=d(o),Qt=a(o,"H2",{class:!0});var jc=i(Qt);Ro=a(jc,"A",{id:!0,class:!0,href:!0});var vv=i(Ro);gi=a(vv,"SPAN",{});var bv=i(gi);v(Nn.$$.fragment,bv),bv.forEach(t),vv.forEach(t),lf=d(jc),ui=a(jc,"SPAN",{});var Tv=i(ui);df=s(Tv,"Longformer specific outputs"),Tv.forEach(t),jc.forEach(t),Dd=d(o),Ht=a(o,"DIV",{class:!0});var Oc=i(Ht);v(Sn.$$.fragment,Oc),cf=d(Oc),_i=a(Oc,"P",{});var yv=i(_i);hf=s(yv,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),yv.forEach(t),Oc.forEach(t),Bd=d(o),Rt=a(o,"DIV",{class:!0});var Ac=i(Rt);v(Dn.$$.fragment,Ac),mf=d(Ac),wi=a(Ac,"P",{});var Lv=i(wi);ff=s(Lv,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Lv.forEach(t),Ac.forEach(t),Wd=d(o),Ut=a(o,"DIV",{class:!0});var Ic=i(Ut);v(Bn.$$.fragment,Ic),pf=d(Ic),ki=a(Ic,"P",{});var $v=i(ki);gf=s($v,"Base class for masked language models outputs."),$v.forEach(t),Ic.forEach(t),Qd=d(o),Vt=a(o,"DIV",{class:!0});var Nc=i(Vt);v(Wn.$$.fragment,Nc),uf=d(Nc),vi=a(Nc,"P",{});var Fv=i(vi);_f=s(Fv,"Base class for outputs of question answering Longformer models."),Fv.forEach(t),Nc.forEach(t),Hd=d(o),Gt=a(o,"DIV",{class:!0});var Sc=i(Gt);v(Qn.$$.fragment,Sc),wf=d(Sc),bi=a(Sc,"P",{});var xv=i(bi);kf=s(xv,"Base class for outputs of sentence classification models."),xv.forEach(t),Sc.forEach(t),Rd=d(o),Kt=a(o,"DIV",{class:!0});var Dc=i(Kt);v(Hn.$$.fragment,Dc),vf=d(Dc),Ti=a(Dc,"P",{});var Mv=i(Ti);bf=s(Mv,"Base class for outputs of multiple choice Longformer models."),Mv.forEach(t),Dc.forEach(t),Ud=d(o),Jt=a(o,"DIV",{class:!0});var Bc=i(Jt);v(Rn.$$.fragment,Bc),Tf=d(Bc),yi=a(Bc,"P",{});var Ev=i(yi);yf=s(Ev,"Base class for outputs of token classification models."),Ev.forEach(t),Bc.forEach(t),Vd=d(o),Xt=a(o,"DIV",{class:!0});var Wc=i(Xt);v(Un.$$.fragment,Wc),Lf=d(Wc),Li=a(Wc,"P",{});var zv=i(Li);$f=s(zv,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),zv.forEach(t),Wc.forEach(t),Gd=d(o),Yt=a(o,"DIV",{class:!0});var Qc=i(Yt);v(Vn.$$.fragment,Qc),Ff=d(Qc),$i=a(Qc,"P",{});var qv=i($i);xf=s(qv,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),qv.forEach(t),Qc.forEach(t),Kd=d(o),Zt=a(o,"DIV",{class:!0});var Hc=i(Zt);v(Gn.$$.fragment,Hc),Mf=d(Hc),Fi=a(Hc,"P",{});var Cv=i(Fi);Ef=s(Cv,"Base class for masked language models outputs."),Cv.forEach(t),Hc.forEach(t),Jd=d(o),eo=a(o,"DIV",{class:!0});var Rc=i(eo);v(Kn.$$.fragment,Rc),zf=d(Rc),xi=a(Rc,"P",{});var Pv=i(xi);qf=s(Pv,"Base class for outputs of question answering Longformer models."),Pv.forEach(t),Rc.forEach(t),Xd=d(o),to=a(o,"DIV",{class:!0});var Uc=i(to);v(Jn.$$.fragment,Uc),Cf=d(Uc),Mi=a(Uc,"P",{});var jv=i(Mi);Pf=s(jv,"Base class for outputs of sentence classification models."),jv.forEach(t),Uc.forEach(t),Yd=d(o),oo=a(o,"DIV",{class:!0});var Vc=i(oo);v(Xn.$$.fragment,Vc),jf=d(Vc),Ei=a(Vc,"P",{});var Ov=i(Ei);Of=s(Ov,"Base class for outputs of multiple choice models."),Ov.forEach(t),Vc.forEach(t),Zd=d(o),no=a(o,"DIV",{class:!0});var Gc=i(no);v(Yn.$$.fragment,Gc),Af=d(Gc),zi=a(Gc,"P",{});var Av=i(zi);If=s(Av,"Base class for outputs of token classification models."),Av.forEach(t),Gc.forEach(t),ec=d(o),so=a(o,"H2",{class:!0});var Kc=i(so);Uo=a(Kc,"A",{id:!0,class:!0,href:!0});var Iv=i(Uo);qi=a(Iv,"SPAN",{});var Nv=i(qi);v(Zn.$$.fragment,Nv),Nv.forEach(t),Iv.forEach(t),Nf=d(Kc),Ci=a(Kc,"SPAN",{});var Sv=i(Ci);Sf=s(Sv,"LongformerModel"),Sv.forEach(t),Kc.forEach(t),tc=d(o),qe=a(o,"DIV",{class:!0});var st=i(qe);v(es.$$.fragment,st),Df=d(st),Pi=a(st,"P",{});var Dv=i(Pi);Bf=s(Dv,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),Dv.forEach(t),Wf=d(st),ts=a(st,"P",{});var Jc=i(ts);Qf=s(Jc,"This model inherits from "),Jr=a(Jc,"A",{href:!0});var Bv=i(Jr);Hf=s(Bv,"PreTrainedModel"),Bv.forEach(t),Rf=s(Jc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jc.forEach(t),Uf=d(st),os=a(st,"P",{});var Xc=i(os);Vf=s(Xc,"This model is also a PyTorch "),ns=a(Xc,"A",{href:!0,rel:!0});var Wv=i(ns);Gf=s(Wv,"torch.nn.Module"),Wv.forEach(t),Kf=s(Xc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xc.forEach(t),Jf=d(st),ro=a(st,"P",{});var za=i(ro);Xf=s(za,"This class copied code from "),Xr=a(za,"A",{href:!0});var Qv=i(Xr);Yf=s(Qv,"RobertaModel"),Qv.forEach(t),Zf=s(za,` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),ss=a(za,"A",{href:!0,rel:!0});var Hv=i(ss);ep=s(Hv,`Longformer:
the Long-Document Transformer`),Hv.forEach(t),tp=s(za,` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),za.forEach(t),op=d(st),rs=a(st,"P",{});var Yc=i(rs);np=s(Yc,"The self-attention module "),ji=a(Yc,"CODE",{});var Rv=i(ji);sp=s(Rv,"LongformerSelfAttention"),Rv.forEach(t),rp=s(Yc,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Yc.forEach(t),ap=d(st),Ge=a(st,"DIV",{class:!0});var kt=i(Ge);v(as.$$.fragment,kt),ip=d(kt),ao=a(kt,"P",{});var qa=i(ao);lp=s(qa,"The "),Yr=a(qa,"A",{href:!0});var Uv=i(Yr);dp=s(Uv,"LongformerModel"),Uv.forEach(t),cp=s(qa," forward method, overrides the "),Oi=a(qa,"CODE",{});var Vv=i(Oi);hp=s(Vv,"__call__"),Vv.forEach(t),mp=s(qa," special method."),qa.forEach(t),fp=d(kt),v(Vo.$$.fragment,kt),pp=d(kt),Ai=a(kt,"P",{});var Gv=i(Ai);gp=s(Gv,"Examples:"),Gv.forEach(t),up=d(kt),v(is.$$.fragment,kt),kt.forEach(t),st.forEach(t),oc=d(o),io=a(o,"H2",{class:!0});var Zc=i(io);Go=a(Zc,"A",{id:!0,class:!0,href:!0});var Kv=i(Go);Ii=a(Kv,"SPAN",{});var Jv=i(Ii);v(ls.$$.fragment,Jv),Jv.forEach(t),Kv.forEach(t),_p=d(Zc),Ni=a(Zc,"SPAN",{});var Xv=i(Ni);wp=s(Xv,"LongformerForMaskedLM"),Xv.forEach(t),Zc.forEach(t),nc=d(o),We=a(o,"DIV",{class:!0});var vt=i(We);v(ds.$$.fragment,vt),kp=d(vt),cs=a(vt,"P",{});var eh=i(cs);vp=s(eh,"Longformer Model with a "),Si=a(eh,"CODE",{});var Yv=i(Si);bp=s(Yv,"language modeling"),Yv.forEach(t),Tp=s(eh," head on top."),eh.forEach(t),yp=d(vt),hs=a(vt,"P",{});var th=i(hs);Lp=s(th,"This model inherits from "),Zr=a(th,"A",{href:!0});var Zv=i(Zr);$p=s(Zv,"PreTrainedModel"),Zv.forEach(t),Fp=s(th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),th.forEach(t),xp=d(vt),ms=a(vt,"P",{});var oh=i(ms);Mp=s(oh,"This model is also a PyTorch "),fs=a(oh,"A",{href:!0,rel:!0});var e1=i(fs);Ep=s(e1,"torch.nn.Module"),e1.forEach(t),zp=s(oh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oh.forEach(t),qp=d(vt),Ke=a(vt,"DIV",{class:!0});var bt=i(Ke);v(ps.$$.fragment,bt),Cp=d(bt),lo=a(bt,"P",{});var Ca=i(lo);Pp=s(Ca,"The "),ea=a(Ca,"A",{href:!0});var t1=i(ea);jp=s(t1,"LongformerForMaskedLM"),t1.forEach(t),Op=s(Ca," forward method, overrides the "),Di=a(Ca,"CODE",{});var o1=i(Di);Ap=s(o1,"__call__"),o1.forEach(t),Ip=s(Ca," special method."),Ca.forEach(t),Np=d(bt),v(Ko.$$.fragment,bt),Sp=d(bt),Bi=a(bt,"P",{});var n1=i(Bi);Dp=s(n1,"Examples:"),n1.forEach(t),Bp=d(bt),v(gs.$$.fragment,bt),bt.forEach(t),vt.forEach(t),sc=d(o),co=a(o,"H2",{class:!0});var nh=i(co);Jo=a(nh,"A",{id:!0,class:!0,href:!0});var s1=i(Jo);Wi=a(s1,"SPAN",{});var r1=i(Wi);v(us.$$.fragment,r1),r1.forEach(t),s1.forEach(t),Wp=d(nh),Qi=a(nh,"SPAN",{});var a1=i(Qi);Qp=s(a1,"LongformerForSequenceClassification"),a1.forEach(t),nh.forEach(t),rc=d(o),Qe=a(o,"DIV",{class:!0});var Tt=i(Qe);v(_s.$$.fragment,Tt),Hp=d(Tt),Hi=a(Tt,"P",{});var i1=i(Hi);Rp=s(i1,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),i1.forEach(t),Up=d(Tt),ws=a(Tt,"P",{});var sh=i(ws);Vp=s(sh,"This model inherits from "),ta=a(sh,"A",{href:!0});var l1=i(ta);Gp=s(l1,"PreTrainedModel"),l1.forEach(t),Kp=s(sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sh.forEach(t),Jp=d(Tt),ks=a(Tt,"P",{});var rh=i(ks);Xp=s(rh,"This model is also a PyTorch "),vs=a(rh,"A",{href:!0,rel:!0});var d1=i(vs);Yp=s(d1,"torch.nn.Module"),d1.forEach(t),Zp=s(rh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rh.forEach(t),eg=d(Tt),Ce=a(Tt,"DIV",{class:!0});var rt=i(Ce);v(bs.$$.fragment,rt),tg=d(rt),ho=a(rt,"P",{});var Pa=i(ho);og=s(Pa,"The "),oa=a(Pa,"A",{href:!0});var c1=i(oa);ng=s(c1,"LongformerForSequenceClassification"),c1.forEach(t),sg=s(Pa," forward method, overrides the "),Ri=a(Pa,"CODE",{});var h1=i(Ri);rg=s(h1,"__call__"),h1.forEach(t),ag=s(Pa," special method."),Pa.forEach(t),ig=d(rt),v(Xo.$$.fragment,rt),lg=d(rt),Ui=a(rt,"P",{});var m1=i(Ui);dg=s(m1,"Example of single-label classification:"),m1.forEach(t),cg=d(rt),v(Ts.$$.fragment,rt),hg=d(rt),Vi=a(rt,"P",{});var f1=i(Vi);mg=s(f1,"Example of multi-label classification:"),f1.forEach(t),fg=d(rt),v(ys.$$.fragment,rt),rt.forEach(t),Tt.forEach(t),ac=d(o),mo=a(o,"H2",{class:!0});var ah=i(mo);Yo=a(ah,"A",{id:!0,class:!0,href:!0});var p1=i(Yo);Gi=a(p1,"SPAN",{});var g1=i(Gi);v(Ls.$$.fragment,g1),g1.forEach(t),p1.forEach(t),pg=d(ah),Ki=a(ah,"SPAN",{});var u1=i(Ki);gg=s(u1,"LongformerForMultipleChoice"),u1.forEach(t),ah.forEach(t),ic=d(o),He=a(o,"DIV",{class:!0});var yt=i(He);v($s.$$.fragment,yt),ug=d(yt),Ji=a(yt,"P",{});var _1=i(Ji);_g=s(_1,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),_1.forEach(t),wg=d(yt),Fs=a(yt,"P",{});var ih=i(Fs);kg=s(ih,"This model inherits from "),na=a(ih,"A",{href:!0});var w1=i(na);vg=s(w1,"PreTrainedModel"),w1.forEach(t),bg=s(ih,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ih.forEach(t),Tg=d(yt),xs=a(yt,"P",{});var lh=i(xs);yg=s(lh,"This model is also a PyTorch "),Ms=a(lh,"A",{href:!0,rel:!0});var k1=i(Ms);Lg=s(k1,"torch.nn.Module"),k1.forEach(t),$g=s(lh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lh.forEach(t),Fg=d(yt),Je=a(yt,"DIV",{class:!0});var Lt=i(Je);v(Es.$$.fragment,Lt),xg=d(Lt),fo=a(Lt,"P",{});var ja=i(fo);Mg=s(ja,"The "),sa=a(ja,"A",{href:!0});var v1=i(sa);Eg=s(v1,"LongformerForMultipleChoice"),v1.forEach(t),zg=s(ja," forward method, overrides the "),Xi=a(ja,"CODE",{});var b1=i(Xi);qg=s(b1,"__call__"),b1.forEach(t),Cg=s(ja," special method."),ja.forEach(t),Pg=d(Lt),v(Zo.$$.fragment,Lt),jg=d(Lt),Yi=a(Lt,"P",{});var T1=i(Yi);Og=s(T1,"Example:"),T1.forEach(t),Ag=d(Lt),v(zs.$$.fragment,Lt),Lt.forEach(t),yt.forEach(t),lc=d(o),po=a(o,"H2",{class:!0});var dh=i(po);en=a(dh,"A",{id:!0,class:!0,href:!0});var y1=i(en);Zi=a(y1,"SPAN",{});var L1=i(Zi);v(qs.$$.fragment,L1),L1.forEach(t),y1.forEach(t),Ig=d(dh),el=a(dh,"SPAN",{});var $1=i(el);Ng=s($1,"LongformerForTokenClassification"),$1.forEach(t),dh.forEach(t),dc=d(o),Re=a(o,"DIV",{class:!0});var $t=i(Re);v(Cs.$$.fragment,$t),Sg=d($t),tl=a($t,"P",{});var F1=i(tl);Dg=s(F1,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),F1.forEach(t),Bg=d($t),Ps=a($t,"P",{});var ch=i(Ps);Wg=s(ch,"This model inherits from "),ra=a(ch,"A",{href:!0});var x1=i(ra);Qg=s(x1,"PreTrainedModel"),x1.forEach(t),Hg=s(ch,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ch.forEach(t),Rg=d($t),js=a($t,"P",{});var hh=i(js);Ug=s(hh,"This model is also a PyTorch "),Os=a(hh,"A",{href:!0,rel:!0});var M1=i(Os);Vg=s(M1,"torch.nn.Module"),M1.forEach(t),Gg=s(hh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hh.forEach(t),Kg=d($t),Xe=a($t,"DIV",{class:!0});var Ft=i(Xe);v(As.$$.fragment,Ft),Jg=d(Ft),go=a(Ft,"P",{});var Oa=i(go);Xg=s(Oa,"The "),aa=a(Oa,"A",{href:!0});var E1=i(aa);Yg=s(E1,"LongformerForTokenClassification"),E1.forEach(t),Zg=s(Oa," forward method, overrides the "),ol=a(Oa,"CODE",{});var z1=i(ol);eu=s(z1,"__call__"),z1.forEach(t),tu=s(Oa," special method."),Oa.forEach(t),ou=d(Ft),v(tn.$$.fragment,Ft),nu=d(Ft),nl=a(Ft,"P",{});var q1=i(nl);su=s(q1,"Example:"),q1.forEach(t),ru=d(Ft),v(Is.$$.fragment,Ft),Ft.forEach(t),$t.forEach(t),cc=d(o),uo=a(o,"H2",{class:!0});var mh=i(uo);on=a(mh,"A",{id:!0,class:!0,href:!0});var C1=i(on);sl=a(C1,"SPAN",{});var P1=i(sl);v(Ns.$$.fragment,P1),P1.forEach(t),C1.forEach(t),au=d(mh),rl=a(mh,"SPAN",{});var j1=i(rl);iu=s(j1,"LongformerForQuestionAnswering"),j1.forEach(t),mh.forEach(t),hc=d(o),Ue=a(o,"DIV",{class:!0});var xt=i(Ue);v(Ss.$$.fragment,xt),lu=d(xt),_o=a(xt,"P",{});var Aa=i(_o);du=s(Aa,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),al=a(Aa,"CODE",{});var O1=i(al);cu=s(O1,"span start logits"),O1.forEach(t),hu=s(Aa," and "),il=a(Aa,"CODE",{});var A1=i(il);mu=s(A1,"span end logits"),A1.forEach(t),fu=s(Aa,")."),Aa.forEach(t),pu=d(xt),Ds=a(xt,"P",{});var fh=i(Ds);gu=s(fh,"This model inherits from "),ia=a(fh,"A",{href:!0});var I1=i(ia);uu=s(I1,"PreTrainedModel"),I1.forEach(t),_u=s(fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fh.forEach(t),wu=d(xt),Bs=a(xt,"P",{});var ph=i(Bs);ku=s(ph,"This model is also a PyTorch "),Ws=a(ph,"A",{href:!0,rel:!0});var N1=i(Ws);vu=s(N1,"torch.nn.Module"),N1.forEach(t),bu=s(ph,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ph.forEach(t),Tu=d(xt),Ye=a(xt,"DIV",{class:!0});var Mt=i(Ye);v(Qs.$$.fragment,Mt),yu=d(Mt),wo=a(Mt,"P",{});var Ia=i(wo);Lu=s(Ia,"The "),la=a(Ia,"A",{href:!0});var S1=i(la);$u=s(S1,"LongformerForQuestionAnswering"),S1.forEach(t),Fu=s(Ia," forward method, overrides the "),ll=a(Ia,"CODE",{});var D1=i(ll);xu=s(D1,"__call__"),D1.forEach(t),Mu=s(Ia," special method."),Ia.forEach(t),Eu=d(Mt),v(nn.$$.fragment,Mt),zu=d(Mt),dl=a(Mt,"P",{});var B1=i(dl);qu=s(B1,"Examples:"),B1.forEach(t),Cu=d(Mt),v(Hs.$$.fragment,Mt),Mt.forEach(t),xt.forEach(t),mc=d(o),ko=a(o,"H2",{class:!0});var gh=i(ko);sn=a(gh,"A",{id:!0,class:!0,href:!0});var W1=i(sn);cl=a(W1,"SPAN",{});var Q1=i(cl);v(Rs.$$.fragment,Q1),Q1.forEach(t),W1.forEach(t),Pu=d(gh),hl=a(gh,"SPAN",{});var H1=i(hl);ju=s(H1,"TFLongformerModel"),H1.forEach(t),gh.forEach(t),fc=d(o),Ee=a(o,"DIV",{class:!0});var Be=i(Ee);v(Us.$$.fragment,Be),Ou=d(Be),ml=a(Be,"P",{});var R1=i(ml);Au=s(R1,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),R1.forEach(t),Iu=d(Be),Vs=a(Be,"P",{});var uh=i(Vs);Nu=s(uh,"This model inherits from "),da=a(uh,"A",{href:!0});var U1=i(da);Su=s(U1,"TFPreTrainedModel"),U1.forEach(t),Du=s(uh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uh.forEach(t),Bu=d(Be),Gs=a(Be,"P",{});var _h=i(Gs);Wu=s(_h,"This model is also a "),Ks=a(_h,"A",{href:!0,rel:!0});var V1=i(Ks);Qu=s(V1,"tf.keras.Model"),V1.forEach(t),Hu=s(_h,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_h.forEach(t),Ru=d(Be),v(rn.$$.fragment,Be),Uu=d(Be),vo=a(Be,"P",{});var Na=i(vo);Vu=s(Na,"This class copies code from "),ca=a(Na,"A",{href:!0});var G1=i(ca);Gu=s(G1,"TFRobertaModel"),G1.forEach(t),Ku=s(Na,` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Js=a(Na,"A",{href:!0,rel:!0});var K1=i(Js);Ju=s(K1,"Longformer: the Long-Document Transformer"),K1.forEach(t),Xu=s(Na,` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Na.forEach(t),Yu=d(Be),Xs=a(Be,"P",{});var wh=i(Xs);Zu=s(wh,"The self-attention module "),fl=a(wh,"CODE",{});var J1=i(fl);e_=s(J1,"TFLongformerSelfAttention"),J1.forEach(t),t_=s(wh,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),wh.forEach(t),o_=d(Be),_t=a(Be,"DIV",{class:!0});var Sa=i(_t);v(Ys.$$.fragment,Sa),n_=d(Sa),bo=a(Sa,"P",{});var Da=i(bo);s_=s(Da,"The "),ha=a(Da,"A",{href:!0});var X1=i(ha);r_=s(X1,"TFLongformerModel"),X1.forEach(t),a_=s(Da," forward method, overrides the "),pl=a(Da,"CODE",{});var Y1=i(pl);i_=s(Y1,"__call__"),Y1.forEach(t),l_=s(Da," special method."),Da.forEach(t),d_=d(Sa),v(an.$$.fragment,Sa),Sa.forEach(t),Be.forEach(t),pc=d(o),To=a(o,"H2",{class:!0});var kh=i(To);ln=a(kh,"A",{id:!0,class:!0,href:!0});var Z1=i(ln);gl=a(Z1,"SPAN",{});var eb=i(gl);v(Zs.$$.fragment,eb),eb.forEach(t),Z1.forEach(t),c_=d(kh),ul=a(kh,"SPAN",{});var tb=i(ul);h_=s(tb,"TFLongformerForMaskedLM"),tb.forEach(t),kh.forEach(t),gc=d(o),Ae=a(o,"DIV",{class:!0});var lt=i(Ae);v(er.$$.fragment,lt),m_=d(lt),tr=a(lt,"P",{});var vh=i(tr);f_=s(vh,"Longformer Model with a "),_l=a(vh,"CODE",{});var ob=i(_l);p_=s(ob,"language modeling"),ob.forEach(t),g_=s(vh," head on top."),vh.forEach(t),u_=d(lt),or=a(lt,"P",{});var bh=i(or);__=s(bh,"This model inherits from "),ma=a(bh,"A",{href:!0});var nb=i(ma);w_=s(nb,"TFPreTrainedModel"),nb.forEach(t),k_=s(bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bh.forEach(t),v_=d(lt),nr=a(lt,"P",{});var Th=i(nr);b_=s(Th,"This model is also a "),sr=a(Th,"A",{href:!0,rel:!0});var sb=i(sr);T_=s(sb,"tf.keras.Model"),sb.forEach(t),y_=s(Th,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Th.forEach(t),L_=d(lt),v(dn.$$.fragment,lt),$_=d(lt),Ze=a(lt,"DIV",{class:!0});var Et=i(Ze);v(rr.$$.fragment,Et),F_=d(Et),yo=a(Et,"P",{});var Ba=i(yo);x_=s(Ba,"The "),fa=a(Ba,"A",{href:!0});var rb=i(fa);M_=s(rb,"TFLongformerForMaskedLM"),rb.forEach(t),E_=s(Ba," forward method, overrides the "),wl=a(Ba,"CODE",{});var ab=i(wl);z_=s(ab,"__call__"),ab.forEach(t),q_=s(Ba," special method."),Ba.forEach(t),C_=d(Et),v(cn.$$.fragment,Et),P_=d(Et),kl=a(Et,"P",{});var ib=i(kl);j_=s(ib,"Example:"),ib.forEach(t),O_=d(Et),v(ar.$$.fragment,Et),Et.forEach(t),lt.forEach(t),uc=d(o),Lo=a(o,"H2",{class:!0});var yh=i(Lo);hn=a(yh,"A",{id:!0,class:!0,href:!0});var lb=i(hn);vl=a(lb,"SPAN",{});var db=i(vl);v(ir.$$.fragment,db),db.forEach(t),lb.forEach(t),A_=d(yh),bl=a(yh,"SPAN",{});var cb=i(bl);I_=s(cb,"TFLongformerForQuestionAnswering"),cb.forEach(t),yh.forEach(t),_c=d(o),Ie=a(o,"DIV",{class:!0});var dt=i(Ie);v(lr.$$.fragment,dt),N_=d(dt),$o=a(dt,"P",{});var Wa=i($o);S_=s(Wa,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),Tl=a(Wa,"CODE",{});var hb=i(Tl);D_=s(hb,"span start logits"),hb.forEach(t),B_=s(Wa," and "),yl=a(Wa,"CODE",{});var mb=i(yl);W_=s(mb,"span end logits"),mb.forEach(t),Q_=s(Wa,")."),Wa.forEach(t),H_=d(dt),dr=a(dt,"P",{});var Lh=i(dr);R_=s(Lh,"This model inherits from "),pa=a(Lh,"A",{href:!0});var fb=i(pa);U_=s(fb,"TFPreTrainedModel"),fb.forEach(t),V_=s(Lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lh.forEach(t),G_=d(dt),cr=a(dt,"P",{});var $h=i(cr);K_=s($h,"This model is also a "),hr=a($h,"A",{href:!0,rel:!0});var pb=i(hr);J_=s(pb,"tf.keras.Model"),pb.forEach(t),X_=s($h,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$h.forEach(t),Y_=d(dt),v(mn.$$.fragment,dt),Z_=d(dt),et=a(dt,"DIV",{class:!0});var zt=i(et);v(mr.$$.fragment,zt),ew=d(zt),Fo=a(zt,"P",{});var Qa=i(Fo);tw=s(Qa,"The "),ga=a(Qa,"A",{href:!0});var gb=i(ga);ow=s(gb,"TFLongformerForQuestionAnswering"),gb.forEach(t),nw=s(Qa," forward method, overrides the "),Ll=a(Qa,"CODE",{});var ub=i(Ll);sw=s(ub,"__call__"),ub.forEach(t),rw=s(Qa," special method."),Qa.forEach(t),aw=d(zt),v(fn.$$.fragment,zt),iw=d(zt),$l=a(zt,"P",{});var _b=i($l);lw=s(_b,"Example:"),_b.forEach(t),dw=d(zt),v(fr.$$.fragment,zt),zt.forEach(t),dt.forEach(t),wc=d(o),xo=a(o,"H2",{class:!0});var Fh=i(xo);pn=a(Fh,"A",{id:!0,class:!0,href:!0});var wb=i(pn);Fl=a(wb,"SPAN",{});var kb=i(Fl);v(pr.$$.fragment,kb),kb.forEach(t),wb.forEach(t),cw=d(Fh),xl=a(Fh,"SPAN",{});var vb=i(xl);hw=s(vb,"TFLongformerForSequenceClassification"),vb.forEach(t),Fh.forEach(t),kc=d(o),Ne=a(o,"DIV",{class:!0});var ct=i(Ne);v(gr.$$.fragment,ct),mw=d(ct),Ml=a(ct,"P",{});var bb=i(Ml);fw=s(bb,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),bb.forEach(t),pw=d(ct),ur=a(ct,"P",{});var xh=i(ur);gw=s(xh,"This model inherits from "),ua=a(xh,"A",{href:!0});var Tb=i(ua);uw=s(Tb,"TFPreTrainedModel"),Tb.forEach(t),_w=s(xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh.forEach(t),ww=d(ct),_r=a(ct,"P",{});var Mh=i(_r);kw=s(Mh,"This model is also a "),wr=a(Mh,"A",{href:!0,rel:!0});var yb=i(wr);vw=s(yb,"tf.keras.Model"),yb.forEach(t),bw=s(Mh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mh.forEach(t),Tw=d(ct),v(gn.$$.fragment,ct),yw=d(ct),tt=a(ct,"DIV",{class:!0});var qt=i(tt);v(kr.$$.fragment,qt),Lw=d(qt),Mo=a(qt,"P",{});var Ha=i(Mo);$w=s(Ha,"The "),_a=a(Ha,"A",{href:!0});var Lb=i(_a);Fw=s(Lb,"TFLongformerForSequenceClassification"),Lb.forEach(t),xw=s(Ha," forward method, overrides the "),El=a(Ha,"CODE",{});var $b=i(El);Mw=s($b,"__call__"),$b.forEach(t),Ew=s(Ha," special method."),Ha.forEach(t),zw=d(qt),v(un.$$.fragment,qt),qw=d(qt),zl=a(qt,"P",{});var Fb=i(zl);Cw=s(Fb,"Example:"),Fb.forEach(t),Pw=d(qt),v(vr.$$.fragment,qt),qt.forEach(t),ct.forEach(t),vc=d(o),Eo=a(o,"H2",{class:!0});var Eh=i(Eo);_n=a(Eh,"A",{id:!0,class:!0,href:!0});var xb=i(_n);ql=a(xb,"SPAN",{});var Mb=i(ql);v(br.$$.fragment,Mb),Mb.forEach(t),xb.forEach(t),jw=d(Eh),Cl=a(Eh,"SPAN",{});var Eb=i(Cl);Ow=s(Eb,"TFLongformerForTokenClassification"),Eb.forEach(t),Eh.forEach(t),bc=d(o),Se=a(o,"DIV",{class:!0});var ht=i(Se);v(Tr.$$.fragment,ht),Aw=d(ht),Pl=a(ht,"P",{});var zb=i(Pl);Iw=s(zb,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),zb.forEach(t),Nw=d(ht),yr=a(ht,"P",{});var zh=i(yr);Sw=s(zh,"This model inherits from "),wa=a(zh,"A",{href:!0});var qb=i(wa);Dw=s(qb,"TFPreTrainedModel"),qb.forEach(t),Bw=s(zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zh.forEach(t),Ww=d(ht),Lr=a(ht,"P",{});var qh=i(Lr);Qw=s(qh,"This model is also a "),$r=a(qh,"A",{href:!0,rel:!0});var Cb=i($r);Hw=s(Cb,"tf.keras.Model"),Cb.forEach(t),Rw=s(qh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qh.forEach(t),Uw=d(ht),v(wn.$$.fragment,ht),Vw=d(ht),ot=a(ht,"DIV",{class:!0});var Ct=i(ot);v(Fr.$$.fragment,Ct),Gw=d(Ct),zo=a(Ct,"P",{});var Ra=i(zo);Kw=s(Ra,"The "),ka=a(Ra,"A",{href:!0});var Pb=i(ka);Jw=s(Pb,"TFLongformerForTokenClassification"),Pb.forEach(t),Xw=s(Ra," forward method, overrides the "),jl=a(Ra,"CODE",{});var jb=i(jl);Yw=s(jb,"__call__"),jb.forEach(t),Zw=s(Ra," special method."),Ra.forEach(t),ek=d(Ct),v(kn.$$.fragment,Ct),tk=d(Ct),Ol=a(Ct,"P",{});var Ob=i(Ol);ok=s(Ob,"Example:"),Ob.forEach(t),nk=d(Ct),v(xr.$$.fragment,Ct),Ct.forEach(t),ht.forEach(t),Tc=d(o),qo=a(o,"H2",{class:!0});var Ch=i(qo);vn=a(Ch,"A",{id:!0,class:!0,href:!0});var Ab=i(vn);Al=a(Ab,"SPAN",{});var Ib=i(Al);v(Mr.$$.fragment,Ib),Ib.forEach(t),Ab.forEach(t),sk=d(Ch),Il=a(Ch,"SPAN",{});var Nb=i(Il);rk=s(Nb,"TFLongformerForMultipleChoice"),Nb.forEach(t),Ch.forEach(t),yc=d(o),De=a(o,"DIV",{class:!0});var mt=i(De);v(Er.$$.fragment,mt),ak=d(mt),Nl=a(mt,"P",{});var Sb=i(Nl);ik=s(Sb,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Sb.forEach(t),lk=d(mt),zr=a(mt,"P",{});var Ph=i(zr);dk=s(Ph,"This model inherits from "),va=a(Ph,"A",{href:!0});var Db=i(va);ck=s(Db,"TFPreTrainedModel"),Db.forEach(t),hk=s(Ph,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ph.forEach(t),mk=d(mt),qr=a(mt,"P",{});var jh=i(qr);fk=s(jh,"This model is also a "),Cr=a(jh,"A",{href:!0,rel:!0});var Bb=i(Cr);pk=s(Bb,"tf.keras.Model"),Bb.forEach(t),gk=s(jh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jh.forEach(t),uk=d(mt),v(bn.$$.fragment,mt),_k=d(mt),nt=a(mt,"DIV",{class:!0});var Pt=i(nt);v(Pr.$$.fragment,Pt),wk=d(Pt),Co=a(Pt,"P",{});var Ua=i(Co);kk=s(Ua,"The "),ba=a(Ua,"A",{href:!0});var Wb=i(ba);vk=s(Wb,"TFLongformerForMultipleChoice"),Wb.forEach(t),bk=s(Ua," forward method, overrides the "),Sl=a(Ua,"CODE",{});var Qb=i(Sl);Tk=s(Qb,"__call__"),Qb.forEach(t),yk=s(Ua," special method."),Ua.forEach(t),Lk=d(Pt),v(Tn.$$.fragment,Pt),$k=d(Pt),Dl=a(Pt,"P",{});var Hb=i(Dl);Fk=s(Hb,"Example:"),Hb.forEach(t),xk=d(Pt),v(jr.$$.fragment,Pt),Pt.forEach(t),mt.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(yT)),c(u,"id","longformer"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#longformer"),c(g,"class","relative group"),c(Z,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(Z,"rel","nofollow"),c(P,"id","overview"),c(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(P,"href","#overview"),c(R,"class","relative group"),c(I,"href","https://arxiv.org/pdf/2004.05150.pdf"),c(I,"rel","nofollow"),c(ke,"href","https://huggingface.co/beltagy"),c(ke,"rel","nofollow"),c(ve,"href","https://github.com/allenai/longformer"),c(ve,"rel","nofollow"),c(Oo,"id","longformer-self-attention"),c(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oo,"href","#longformer-self-attention"),c(jt,"class","relative group"),ad.a=id,ld.a=dd,cd.a=hd,md.a=fd,gd.a=ud,c(Nr,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerModel.forward"),bd.a=Td,yd.a=Ld,$d.a=Fd,xd.a=Md,c(Fn,"href","https://arxiv.org/pdf/2004.05150.pdf"),c(Fn,"rel","nofollow"),c(So,"id","training"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#training"),c(Ot,"class","relative group"),c(Sr,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerForMaskedLM"),c(Dr,"href","/docs/transformers/pr_16118/en/model_doc/roberta#transformers.RobertaForMaskedLM"),c(Do,"id","transformers.LongformerConfig"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.LongformerConfig"),c(It,"class","relative group"),c(Br,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerModel"),c(Wr,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.TFLongformerModel"),c(Qr,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerModel"),c(qn,"href","https://huggingface.co/roberta-base"),c(qn,"rel","nofollow"),c(Hr,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerConfig"),c(Rr,"href","/docs/transformers/pr_16118/en/model_doc/roberta#transformers.RobertaConfig"),c(Oe,"class","docstring"),c(Bo,"id","transformers.LongformerTokenizer"),c(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bo,"href","#transformers.LongformerTokenizer"),c(Bt,"class","relative group"),c(Ur,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerTokenizer"),c(Vr,"href","/docs/transformers/pr_16118/en/model_doc/roberta#transformers.RobertaTokenizer"),c(ft,"class","docstring"),c(Qo,"id","transformers.LongformerTokenizerFast"),c(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qo,"href","#transformers.LongformerTokenizerFast"),c(Wt,"class","relative group"),c(Gr,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerTokenizerFast"),c(Kr,"href","/docs/transformers/pr_16118/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(pt,"class","docstring"),c(Ro,"id","transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),c(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ro,"href","#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),c(Qt,"class","relative group"),c(Ht,"class","docstring"),c(Rt,"class","docstring"),c(Ut,"class","docstring"),c(Vt,"class","docstring"),c(Gt,"class","docstring"),c(Kt,"class","docstring"),c(Jt,"class","docstring"),c(Xt,"class","docstring"),c(Yt,"class","docstring"),c(Zt,"class","docstring"),c(eo,"class","docstring"),c(to,"class","docstring"),c(oo,"class","docstring"),c(no,"class","docstring"),c(Uo,"id","transformers.LongformerModel"),c(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Uo,"href","#transformers.LongformerModel"),c(so,"class","relative group"),c(Jr,"href","/docs/transformers/pr_16118/en/main_classes/model#transformers.PreTrainedModel"),c(ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ns,"rel","nofollow"),c(Xr,"href","/docs/transformers/pr_16118/en/model_doc/roberta#transformers.RobertaModel"),c(ss,"href","https://arxiv.org/abs/2004.05150"),c(ss,"rel","nofollow"),c(Yr,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerModel"),c(Ge,"class","docstring"),c(qe,"class","docstring"),c(Go,"id","transformers.LongformerForMaskedLM"),c(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Go,"href","#transformers.LongformerForMaskedLM"),c(io,"class","relative group"),c(Zr,"href","/docs/transformers/pr_16118/en/main_classes/model#transformers.PreTrainedModel"),c(fs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fs,"rel","nofollow"),c(ea,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerForMaskedLM"),c(Ke,"class","docstring"),c(We,"class","docstring"),c(Jo,"id","transformers.LongformerForSequenceClassification"),c(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jo,"href","#transformers.LongformerForSequenceClassification"),c(co,"class","relative group"),c(ta,"href","/docs/transformers/pr_16118/en/main_classes/model#transformers.PreTrainedModel"),c(vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(vs,"rel","nofollow"),c(oa,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerForSequenceClassification"),c(Ce,"class","docstring"),c(Qe,"class","docstring"),c(Yo,"id","transformers.LongformerForMultipleChoice"),c(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yo,"href","#transformers.LongformerForMultipleChoice"),c(mo,"class","relative group"),c(na,"href","/docs/transformers/pr_16118/en/main_classes/model#transformers.PreTrainedModel"),c(Ms,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ms,"rel","nofollow"),c(sa,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerForMultipleChoice"),c(Je,"class","docstring"),c(He,"class","docstring"),c(en,"id","transformers.LongformerForTokenClassification"),c(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(en,"href","#transformers.LongformerForTokenClassification"),c(po,"class","relative group"),c(ra,"href","/docs/transformers/pr_16118/en/main_classes/model#transformers.PreTrainedModel"),c(Os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Os,"rel","nofollow"),c(aa,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerForTokenClassification"),c(Xe,"class","docstring"),c(Re,"class","docstring"),c(on,"id","transformers.LongformerForQuestionAnswering"),c(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(on,"href","#transformers.LongformerForQuestionAnswering"),c(uo,"class","relative group"),c(ia,"href","/docs/transformers/pr_16118/en/main_classes/model#transformers.PreTrainedModel"),c(Ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ws,"rel","nofollow"),c(la,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.LongformerForQuestionAnswering"),c(Ye,"class","docstring"),c(Ue,"class","docstring"),c(sn,"id","transformers.TFLongformerModel"),c(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(sn,"href","#transformers.TFLongformerModel"),c(ko,"class","relative group"),c(da,"href","/docs/transformers/pr_16118/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ks,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ks,"rel","nofollow"),c(ca,"href","/docs/transformers/pr_16118/en/model_doc/roberta#transformers.TFRobertaModel"),c(Js,"href","https://arxiv.org/abs/2004.05150"),c(Js,"rel","nofollow"),c(ha,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.TFLongformerModel"),c(_t,"class","docstring"),c(Ee,"class","docstring"),c(ln,"id","transformers.TFLongformerForMaskedLM"),c(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ln,"href","#transformers.TFLongformerForMaskedLM"),c(To,"class","relative group"),c(ma,"href","/docs/transformers/pr_16118/en/main_classes/model#transformers.TFPreTrainedModel"),c(sr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(sr,"rel","nofollow"),c(fa,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.TFLongformerForMaskedLM"),c(Ze,"class","docstring"),c(Ae,"class","docstring"),c(hn,"id","transformers.TFLongformerForQuestionAnswering"),c(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(hn,"href","#transformers.TFLongformerForQuestionAnswering"),c(Lo,"class","relative group"),c(pa,"href","/docs/transformers/pr_16118/en/main_classes/model#transformers.TFPreTrainedModel"),c(hr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(hr,"rel","nofollow"),c(ga,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.TFLongformerForQuestionAnswering"),c(et,"class","docstring"),c(Ie,"class","docstring"),c(pn,"id","transformers.TFLongformerForSequenceClassification"),c(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(pn,"href","#transformers.TFLongformerForSequenceClassification"),c(xo,"class","relative group"),c(ua,"href","/docs/transformers/pr_16118/en/main_classes/model#transformers.TFPreTrainedModel"),c(wr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(wr,"rel","nofollow"),c(_a,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.TFLongformerForSequenceClassification"),c(tt,"class","docstring"),c(Ne,"class","docstring"),c(_n,"id","transformers.TFLongformerForTokenClassification"),c(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_n,"href","#transformers.TFLongformerForTokenClassification"),c(Eo,"class","relative group"),c(wa,"href","/docs/transformers/pr_16118/en/main_classes/model#transformers.TFPreTrainedModel"),c($r,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c($r,"rel","nofollow"),c(ka,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.TFLongformerForTokenClassification"),c(ot,"class","docstring"),c(Se,"class","docstring"),c(vn,"id","transformers.TFLongformerForMultipleChoice"),c(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vn,"href","#transformers.TFLongformerForMultipleChoice"),c(qo,"class","relative group"),c(va,"href","/docs/transformers/pr_16118/en/main_classes/model#transformers.TFPreTrainedModel"),c(Cr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Cr,"rel","nofollow"),c(ba,"href","/docs/transformers/pr_16118/en/model_doc/longformer#transformers.TFLongformerForMultipleChoice"),c(nt,"class","docstring"),c(De,"class","docstring")},m(o,f){e(document.head,p),h(o,x,f),h(o,g,f),e(g,u),e(u,$),b(w,$,null),e(g,_),e(g,M),e(M,de),h(o,X,f),h(o,E,f),e(E,ne),e(ne,Q),e(E,ce),e(E,Z),e(Z,H),e(E,he),h(o,re,f),h(o,R,f),e(R,P),e(P,se),b(K,se,null),e(R,z),e(R,q),e(q,me),h(o,D,f),h(o,Y,f),e(Y,fe),e(Y,I),e(I,pe),e(Y,ge),h(o,C,f),h(o,ee,f),e(ee,U),h(o,ae,f),h(o,te,f),e(te,N),e(N,ue),h(o,ie,f),h(o,j,f),e(j,_e),h(o,B,f),h(o,oe,f),e(oe,m),e(m,F),e(m,J),e(J,Le),e(m,$e),e(m,O),e(O,Fe),e(m,xe),e(m,be),e(be,A),e(m,V),h(o,Te,f),h(o,le,f),e(le,G),e(le,ke),e(ke,Me),e(le,we),e(le,ve),e(ve,Oh),e(le,Ah),h(o,sd,f),h(o,jt,f),e(jt,Oo),e(Oo,Va),b($n,Va,null),e(jt,Ih),e(jt,Ga),e(Ga,Nh),h(o,rd,f),h(o,ye,f),e(ye,Sh),ad.m(Rb,ye),e(ye,id),ld.m(Ub,ye),e(ye,dd),cd.m(Vb,ye),e(ye,hd),e(ye,Ka),e(Ka,Dh),e(ye,Bh),e(ye,Ja),e(Ja,Wh),e(ye,Qh),e(ye,Xa),e(Xa,Hh),e(ye,Rh),md.m(Gb,ye),e(ye,fd),e(ye,Ya),e(Ya,Uh),e(ye,Vh),h(o,pd,f),h(o,gt,f),e(gt,Gh),gd.m(Kb,gt),e(gt,ud),e(gt,Za),e(Za,Kh),e(gt,Jh),h(o,_d,f),h(o,ut,f),e(ut,Xh),e(ut,ei),e(ei,Yh),e(ut,Zh),e(ut,ti),e(ti,em),e(ut,tm),h(o,wd,f),h(o,Ao,f),e(Ao,oi),e(oi,om),e(Ao,nm),e(Ao,ni),e(ni,sm),h(o,kd,f),h(o,Io,f),e(Io,rm),e(Io,Nr),e(Nr,am),e(Io,im),h(o,vd,f),h(o,Ve,f),e(Ve,lm),bd.m(Jb,Ve),e(Ve,Td),yd.m(Xb,Ve),e(Ve,Ld),$d.m(Yb,Ve),e(Ve,Fd),xd.m(Zb,Ve),e(Ve,Md),h(o,Ed,f),h(o,No,f),e(No,dm),e(No,Fn),e(Fn,cm),e(No,hm),h(o,zd,f),h(o,Ot,f),e(Ot,So),e(So,si),b(xn,si,null),e(Ot,mm),e(Ot,ri),e(ri,fm),h(o,qd,f),h(o,At,f),e(At,Sr),e(Sr,pm),e(At,gm),e(At,Dr),e(Dr,um),e(At,_m),h(o,Cd,f),b(Mn,o,f),h(o,Pd,f),h(o,It,f),e(It,Do),e(Do,ai),b(En,ai,null),e(It,wm),e(It,ii),e(ii,km),h(o,jd,f),h(o,Oe,f),b(zn,Oe,null),e(Oe,vm),e(Oe,Nt),e(Nt,bm),e(Nt,Br),e(Br,Tm),e(Nt,ym),e(Nt,Wr),e(Wr,Lm),e(Nt,$m),e(Oe,Fm),e(Oe,St),e(St,xm),e(St,Qr),e(Qr,Mm),e(St,Em),e(St,qn),e(qn,zm),e(St,qm),e(Oe,Cm),e(Oe,Dt),e(Dt,Pm),e(Dt,Hr),e(Hr,jm),e(Dt,Om),e(Dt,Rr),e(Rr,Am),e(Dt,Im),e(Oe,Nm),e(Oe,li),e(li,Sm),e(Oe,Dm),b(Cn,Oe,null),h(o,Od,f),h(o,Bt,f),e(Bt,Bo),e(Bo,di),b(Pn,di,null),e(Bt,Bm),e(Bt,ci),e(ci,Wm),h(o,Ad,f),h(o,ft,f),b(jn,ft,null),e(ft,Qm),e(ft,hi),e(hi,Hm),e(ft,Rm),e(ft,Wo),e(Wo,Ur),e(Ur,Um),e(Wo,Vm),e(Wo,Vr),e(Vr,Gm),e(Wo,Km),h(o,Id,f),h(o,Wt,f),e(Wt,Qo),e(Qo,mi),b(On,mi,null),e(Wt,Jm),e(Wt,fi),e(fi,Xm),h(o,Nd,f),h(o,pt,f),b(An,pt,null),e(pt,Ym),e(pt,In),e(In,Zm),e(In,pi),e(pi,ef),e(In,tf),e(pt,of),e(pt,Ho),e(Ho,Gr),e(Gr,nf),e(Ho,sf),e(Ho,Kr),e(Kr,rf),e(Ho,af),h(o,Sd,f),h(o,Qt,f),e(Qt,Ro),e(Ro,gi),b(Nn,gi,null),e(Qt,lf),e(Qt,ui),e(ui,df),h(o,Dd,f),h(o,Ht,f),b(Sn,Ht,null),e(Ht,cf),e(Ht,_i),e(_i,hf),h(o,Bd,f),h(o,Rt,f),b(Dn,Rt,null),e(Rt,mf),e(Rt,wi),e(wi,ff),h(o,Wd,f),h(o,Ut,f),b(Bn,Ut,null),e(Ut,pf),e(Ut,ki),e(ki,gf),h(o,Qd,f),h(o,Vt,f),b(Wn,Vt,null),e(Vt,uf),e(Vt,vi),e(vi,_f),h(o,Hd,f),h(o,Gt,f),b(Qn,Gt,null),e(Gt,wf),e(Gt,bi),e(bi,kf),h(o,Rd,f),h(o,Kt,f),b(Hn,Kt,null),e(Kt,vf),e(Kt,Ti),e(Ti,bf),h(o,Ud,f),h(o,Jt,f),b(Rn,Jt,null),e(Jt,Tf),e(Jt,yi),e(yi,yf),h(o,Vd,f),h(o,Xt,f),b(Un,Xt,null),e(Xt,Lf),e(Xt,Li),e(Li,$f),h(o,Gd,f),h(o,Yt,f),b(Vn,Yt,null),e(Yt,Ff),e(Yt,$i),e($i,xf),h(o,Kd,f),h(o,Zt,f),b(Gn,Zt,null),e(Zt,Mf),e(Zt,Fi),e(Fi,Ef),h(o,Jd,f),h(o,eo,f),b(Kn,eo,null),e(eo,zf),e(eo,xi),e(xi,qf),h(o,Xd,f),h(o,to,f),b(Jn,to,null),e(to,Cf),e(to,Mi),e(Mi,Pf),h(o,Yd,f),h(o,oo,f),b(Xn,oo,null),e(oo,jf),e(oo,Ei),e(Ei,Of),h(o,Zd,f),h(o,no,f),b(Yn,no,null),e(no,Af),e(no,zi),e(zi,If),h(o,ec,f),h(o,so,f),e(so,Uo),e(Uo,qi),b(Zn,qi,null),e(so,Nf),e(so,Ci),e(Ci,Sf),h(o,tc,f),h(o,qe,f),b(es,qe,null),e(qe,Df),e(qe,Pi),e(Pi,Bf),e(qe,Wf),e(qe,ts),e(ts,Qf),e(ts,Jr),e(Jr,Hf),e(ts,Rf),e(qe,Uf),e(qe,os),e(os,Vf),e(os,ns),e(ns,Gf),e(os,Kf),e(qe,Jf),e(qe,ro),e(ro,Xf),e(ro,Xr),e(Xr,Yf),e(ro,Zf),e(ro,ss),e(ss,ep),e(ro,tp),e(qe,op),e(qe,rs),e(rs,np),e(rs,ji),e(ji,sp),e(rs,rp),e(qe,ap),e(qe,Ge),b(as,Ge,null),e(Ge,ip),e(Ge,ao),e(ao,lp),e(ao,Yr),e(Yr,dp),e(ao,cp),e(ao,Oi),e(Oi,hp),e(ao,mp),e(Ge,fp),b(Vo,Ge,null),e(Ge,pp),e(Ge,Ai),e(Ai,gp),e(Ge,up),b(is,Ge,null),h(o,oc,f),h(o,io,f),e(io,Go),e(Go,Ii),b(ls,Ii,null),e(io,_p),e(io,Ni),e(Ni,wp),h(o,nc,f),h(o,We,f),b(ds,We,null),e(We,kp),e(We,cs),e(cs,vp),e(cs,Si),e(Si,bp),e(cs,Tp),e(We,yp),e(We,hs),e(hs,Lp),e(hs,Zr),e(Zr,$p),e(hs,Fp),e(We,xp),e(We,ms),e(ms,Mp),e(ms,fs),e(fs,Ep),e(ms,zp),e(We,qp),e(We,Ke),b(ps,Ke,null),e(Ke,Cp),e(Ke,lo),e(lo,Pp),e(lo,ea),e(ea,jp),e(lo,Op),e(lo,Di),e(Di,Ap),e(lo,Ip),e(Ke,Np),b(Ko,Ke,null),e(Ke,Sp),e(Ke,Bi),e(Bi,Dp),e(Ke,Bp),b(gs,Ke,null),h(o,sc,f),h(o,co,f),e(co,Jo),e(Jo,Wi),b(us,Wi,null),e(co,Wp),e(co,Qi),e(Qi,Qp),h(o,rc,f),h(o,Qe,f),b(_s,Qe,null),e(Qe,Hp),e(Qe,Hi),e(Hi,Rp),e(Qe,Up),e(Qe,ws),e(ws,Vp),e(ws,ta),e(ta,Gp),e(ws,Kp),e(Qe,Jp),e(Qe,ks),e(ks,Xp),e(ks,vs),e(vs,Yp),e(ks,Zp),e(Qe,eg),e(Qe,Ce),b(bs,Ce,null),e(Ce,tg),e(Ce,ho),e(ho,og),e(ho,oa),e(oa,ng),e(ho,sg),e(ho,Ri),e(Ri,rg),e(ho,ag),e(Ce,ig),b(Xo,Ce,null),e(Ce,lg),e(Ce,Ui),e(Ui,dg),e(Ce,cg),b(Ts,Ce,null),e(Ce,hg),e(Ce,Vi),e(Vi,mg),e(Ce,fg),b(ys,Ce,null),h(o,ac,f),h(o,mo,f),e(mo,Yo),e(Yo,Gi),b(Ls,Gi,null),e(mo,pg),e(mo,Ki),e(Ki,gg),h(o,ic,f),h(o,He,f),b($s,He,null),e(He,ug),e(He,Ji),e(Ji,_g),e(He,wg),e(He,Fs),e(Fs,kg),e(Fs,na),e(na,vg),e(Fs,bg),e(He,Tg),e(He,xs),e(xs,yg),e(xs,Ms),e(Ms,Lg),e(xs,$g),e(He,Fg),e(He,Je),b(Es,Je,null),e(Je,xg),e(Je,fo),e(fo,Mg),e(fo,sa),e(sa,Eg),e(fo,zg),e(fo,Xi),e(Xi,qg),e(fo,Cg),e(Je,Pg),b(Zo,Je,null),e(Je,jg),e(Je,Yi),e(Yi,Og),e(Je,Ag),b(zs,Je,null),h(o,lc,f),h(o,po,f),e(po,en),e(en,Zi),b(qs,Zi,null),e(po,Ig),e(po,el),e(el,Ng),h(o,dc,f),h(o,Re,f),b(Cs,Re,null),e(Re,Sg),e(Re,tl),e(tl,Dg),e(Re,Bg),e(Re,Ps),e(Ps,Wg),e(Ps,ra),e(ra,Qg),e(Ps,Hg),e(Re,Rg),e(Re,js),e(js,Ug),e(js,Os),e(Os,Vg),e(js,Gg),e(Re,Kg),e(Re,Xe),b(As,Xe,null),e(Xe,Jg),e(Xe,go),e(go,Xg),e(go,aa),e(aa,Yg),e(go,Zg),e(go,ol),e(ol,eu),e(go,tu),e(Xe,ou),b(tn,Xe,null),e(Xe,nu),e(Xe,nl),e(nl,su),e(Xe,ru),b(Is,Xe,null),h(o,cc,f),h(o,uo,f),e(uo,on),e(on,sl),b(Ns,sl,null),e(uo,au),e(uo,rl),e(rl,iu),h(o,hc,f),h(o,Ue,f),b(Ss,Ue,null),e(Ue,lu),e(Ue,_o),e(_o,du),e(_o,al),e(al,cu),e(_o,hu),e(_o,il),e(il,mu),e(_o,fu),e(Ue,pu),e(Ue,Ds),e(Ds,gu),e(Ds,ia),e(ia,uu),e(Ds,_u),e(Ue,wu),e(Ue,Bs),e(Bs,ku),e(Bs,Ws),e(Ws,vu),e(Bs,bu),e(Ue,Tu),e(Ue,Ye),b(Qs,Ye,null),e(Ye,yu),e(Ye,wo),e(wo,Lu),e(wo,la),e(la,$u),e(wo,Fu),e(wo,ll),e(ll,xu),e(wo,Mu),e(Ye,Eu),b(nn,Ye,null),e(Ye,zu),e(Ye,dl),e(dl,qu),e(Ye,Cu),b(Hs,Ye,null),h(o,mc,f),h(o,ko,f),e(ko,sn),e(sn,cl),b(Rs,cl,null),e(ko,Pu),e(ko,hl),e(hl,ju),h(o,fc,f),h(o,Ee,f),b(Us,Ee,null),e(Ee,Ou),e(Ee,ml),e(ml,Au),e(Ee,Iu),e(Ee,Vs),e(Vs,Nu),e(Vs,da),e(da,Su),e(Vs,Du),e(Ee,Bu),e(Ee,Gs),e(Gs,Wu),e(Gs,Ks),e(Ks,Qu),e(Gs,Hu),e(Ee,Ru),b(rn,Ee,null),e(Ee,Uu),e(Ee,vo),e(vo,Vu),e(vo,ca),e(ca,Gu),e(vo,Ku),e(vo,Js),e(Js,Ju),e(vo,Xu),e(Ee,Yu),e(Ee,Xs),e(Xs,Zu),e(Xs,fl),e(fl,e_),e(Xs,t_),e(Ee,o_),e(Ee,_t),b(Ys,_t,null),e(_t,n_),e(_t,bo),e(bo,s_),e(bo,ha),e(ha,r_),e(bo,a_),e(bo,pl),e(pl,i_),e(bo,l_),e(_t,d_),b(an,_t,null),h(o,pc,f),h(o,To,f),e(To,ln),e(ln,gl),b(Zs,gl,null),e(To,c_),e(To,ul),e(ul,h_),h(o,gc,f),h(o,Ae,f),b(er,Ae,null),e(Ae,m_),e(Ae,tr),e(tr,f_),e(tr,_l),e(_l,p_),e(tr,g_),e(Ae,u_),e(Ae,or),e(or,__),e(or,ma),e(ma,w_),e(or,k_),e(Ae,v_),e(Ae,nr),e(nr,b_),e(nr,sr),e(sr,T_),e(nr,y_),e(Ae,L_),b(dn,Ae,null),e(Ae,$_),e(Ae,Ze),b(rr,Ze,null),e(Ze,F_),e(Ze,yo),e(yo,x_),e(yo,fa),e(fa,M_),e(yo,E_),e(yo,wl),e(wl,z_),e(yo,q_),e(Ze,C_),b(cn,Ze,null),e(Ze,P_),e(Ze,kl),e(kl,j_),e(Ze,O_),b(ar,Ze,null),h(o,uc,f),h(o,Lo,f),e(Lo,hn),e(hn,vl),b(ir,vl,null),e(Lo,A_),e(Lo,bl),e(bl,I_),h(o,_c,f),h(o,Ie,f),b(lr,Ie,null),e(Ie,N_),e(Ie,$o),e($o,S_),e($o,Tl),e(Tl,D_),e($o,B_),e($o,yl),e(yl,W_),e($o,Q_),e(Ie,H_),e(Ie,dr),e(dr,R_),e(dr,pa),e(pa,U_),e(dr,V_),e(Ie,G_),e(Ie,cr),e(cr,K_),e(cr,hr),e(hr,J_),e(cr,X_),e(Ie,Y_),b(mn,Ie,null),e(Ie,Z_),e(Ie,et),b(mr,et,null),e(et,ew),e(et,Fo),e(Fo,tw),e(Fo,ga),e(ga,ow),e(Fo,nw),e(Fo,Ll),e(Ll,sw),e(Fo,rw),e(et,aw),b(fn,et,null),e(et,iw),e(et,$l),e($l,lw),e(et,dw),b(fr,et,null),h(o,wc,f),h(o,xo,f),e(xo,pn),e(pn,Fl),b(pr,Fl,null),e(xo,cw),e(xo,xl),e(xl,hw),h(o,kc,f),h(o,Ne,f),b(gr,Ne,null),e(Ne,mw),e(Ne,Ml),e(Ml,fw),e(Ne,pw),e(Ne,ur),e(ur,gw),e(ur,ua),e(ua,uw),e(ur,_w),e(Ne,ww),e(Ne,_r),e(_r,kw),e(_r,wr),e(wr,vw),e(_r,bw),e(Ne,Tw),b(gn,Ne,null),e(Ne,yw),e(Ne,tt),b(kr,tt,null),e(tt,Lw),e(tt,Mo),e(Mo,$w),e(Mo,_a),e(_a,Fw),e(Mo,xw),e(Mo,El),e(El,Mw),e(Mo,Ew),e(tt,zw),b(un,tt,null),e(tt,qw),e(tt,zl),e(zl,Cw),e(tt,Pw),b(vr,tt,null),h(o,vc,f),h(o,Eo,f),e(Eo,_n),e(_n,ql),b(br,ql,null),e(Eo,jw),e(Eo,Cl),e(Cl,Ow),h(o,bc,f),h(o,Se,f),b(Tr,Se,null),e(Se,Aw),e(Se,Pl),e(Pl,Iw),e(Se,Nw),e(Se,yr),e(yr,Sw),e(yr,wa),e(wa,Dw),e(yr,Bw),e(Se,Ww),e(Se,Lr),e(Lr,Qw),e(Lr,$r),e($r,Hw),e(Lr,Rw),e(Se,Uw),b(wn,Se,null),e(Se,Vw),e(Se,ot),b(Fr,ot,null),e(ot,Gw),e(ot,zo),e(zo,Kw),e(zo,ka),e(ka,Jw),e(zo,Xw),e(zo,jl),e(jl,Yw),e(zo,Zw),e(ot,ek),b(kn,ot,null),e(ot,tk),e(ot,Ol),e(Ol,ok),e(ot,nk),b(xr,ot,null),h(o,Tc,f),h(o,qo,f),e(qo,vn),e(vn,Al),b(Mr,Al,null),e(qo,sk),e(qo,Il),e(Il,rk),h(o,yc,f),h(o,De,f),b(Er,De,null),e(De,ak),e(De,Nl),e(Nl,ik),e(De,lk),e(De,zr),e(zr,dk),e(zr,va),e(va,ck),e(zr,hk),e(De,mk),e(De,qr),e(qr,fk),e(qr,Cr),e(Cr,pk),e(qr,gk),e(De,uk),b(bn,De,null),e(De,_k),e(De,nt),b(Pr,nt,null),e(nt,wk),e(nt,Co),e(Co,kk),e(Co,ba),e(ba,vk),e(Co,bk),e(Co,Sl),e(Sl,Tk),e(Co,yk),e(nt,Lk),b(Tn,nt,null),e(nt,$k),e(nt,Dl),e(Dl,Fk),e(nt,xk),b(jr,nt,null),Lc=!0},p(o,[f]){const Or={};f&2&&(Or.$$scope={dirty:f,ctx:o}),Vo.$set(Or);const Bl={};f&2&&(Bl.$$scope={dirty:f,ctx:o}),Ko.$set(Bl);const Wl={};f&2&&(Wl.$$scope={dirty:f,ctx:o}),Xo.$set(Wl);const Ql={};f&2&&(Ql.$$scope={dirty:f,ctx:o}),Zo.$set(Ql);const yn={};f&2&&(yn.$$scope={dirty:f,ctx:o}),tn.$set(yn);const Hl={};f&2&&(Hl.$$scope={dirty:f,ctx:o}),nn.$set(Hl);const Rl={};f&2&&(Rl.$$scope={dirty:f,ctx:o}),rn.$set(Rl);const Ar={};f&2&&(Ar.$$scope={dirty:f,ctx:o}),an.$set(Ar);const Ul={};f&2&&(Ul.$$scope={dirty:f,ctx:o}),dn.$set(Ul);const Vl={};f&2&&(Vl.$$scope={dirty:f,ctx:o}),cn.$set(Vl);const Gl={};f&2&&(Gl.$$scope={dirty:f,ctx:o}),mn.$set(Gl);const Ir={};f&2&&(Ir.$$scope={dirty:f,ctx:o}),fn.$set(Ir);const Kl={};f&2&&(Kl.$$scope={dirty:f,ctx:o}),gn.$set(Kl);const Jl={};f&2&&(Jl.$$scope={dirty:f,ctx:o}),un.$set(Jl);const Xl={};f&2&&(Xl.$$scope={dirty:f,ctx:o}),wn.$set(Xl);const Yl={};f&2&&(Yl.$$scope={dirty:f,ctx:o}),kn.$set(Yl);const Zl={};f&2&&(Zl.$$scope={dirty:f,ctx:o}),bn.$set(Zl);const ed={};f&2&&(ed.$$scope={dirty:f,ctx:o}),Tn.$set(ed)},i(o){Lc||(T(w.$$.fragment,o),T(K.$$.fragment,o),T($n.$$.fragment,o),T(xn.$$.fragment,o),T(Mn.$$.fragment,o),T(En.$$.fragment,o),T(zn.$$.fragment,o),T(Cn.$$.fragment,o),T(Pn.$$.fragment,o),T(jn.$$.fragment,o),T(On.$$.fragment,o),T(An.$$.fragment,o),T(Nn.$$.fragment,o),T(Sn.$$.fragment,o),T(Dn.$$.fragment,o),T(Bn.$$.fragment,o),T(Wn.$$.fragment,o),T(Qn.$$.fragment,o),T(Hn.$$.fragment,o),T(Rn.$$.fragment,o),T(Un.$$.fragment,o),T(Vn.$$.fragment,o),T(Gn.$$.fragment,o),T(Kn.$$.fragment,o),T(Jn.$$.fragment,o),T(Xn.$$.fragment,o),T(Yn.$$.fragment,o),T(Zn.$$.fragment,o),T(es.$$.fragment,o),T(as.$$.fragment,o),T(Vo.$$.fragment,o),T(is.$$.fragment,o),T(ls.$$.fragment,o),T(ds.$$.fragment,o),T(ps.$$.fragment,o),T(Ko.$$.fragment,o),T(gs.$$.fragment,o),T(us.$$.fragment,o),T(_s.$$.fragment,o),T(bs.$$.fragment,o),T(Xo.$$.fragment,o),T(Ts.$$.fragment,o),T(ys.$$.fragment,o),T(Ls.$$.fragment,o),T($s.$$.fragment,o),T(Es.$$.fragment,o),T(Zo.$$.fragment,o),T(zs.$$.fragment,o),T(qs.$$.fragment,o),T(Cs.$$.fragment,o),T(As.$$.fragment,o),T(tn.$$.fragment,o),T(Is.$$.fragment,o),T(Ns.$$.fragment,o),T(Ss.$$.fragment,o),T(Qs.$$.fragment,o),T(nn.$$.fragment,o),T(Hs.$$.fragment,o),T(Rs.$$.fragment,o),T(Us.$$.fragment,o),T(rn.$$.fragment,o),T(Ys.$$.fragment,o),T(an.$$.fragment,o),T(Zs.$$.fragment,o),T(er.$$.fragment,o),T(dn.$$.fragment,o),T(rr.$$.fragment,o),T(cn.$$.fragment,o),T(ar.$$.fragment,o),T(ir.$$.fragment,o),T(lr.$$.fragment,o),T(mn.$$.fragment,o),T(mr.$$.fragment,o),T(fn.$$.fragment,o),T(fr.$$.fragment,o),T(pr.$$.fragment,o),T(gr.$$.fragment,o),T(gn.$$.fragment,o),T(kr.$$.fragment,o),T(un.$$.fragment,o),T(vr.$$.fragment,o),T(br.$$.fragment,o),T(Tr.$$.fragment,o),T(wn.$$.fragment,o),T(Fr.$$.fragment,o),T(kn.$$.fragment,o),T(xr.$$.fragment,o),T(Mr.$$.fragment,o),T(Er.$$.fragment,o),T(bn.$$.fragment,o),T(Pr.$$.fragment,o),T(Tn.$$.fragment,o),T(jr.$$.fragment,o),Lc=!0)},o(o){y(w.$$.fragment,o),y(K.$$.fragment,o),y($n.$$.fragment,o),y(xn.$$.fragment,o),y(Mn.$$.fragment,o),y(En.$$.fragment,o),y(zn.$$.fragment,o),y(Cn.$$.fragment,o),y(Pn.$$.fragment,o),y(jn.$$.fragment,o),y(On.$$.fragment,o),y(An.$$.fragment,o),y(Nn.$$.fragment,o),y(Sn.$$.fragment,o),y(Dn.$$.fragment,o),y(Bn.$$.fragment,o),y(Wn.$$.fragment,o),y(Qn.$$.fragment,o),y(Hn.$$.fragment,o),y(Rn.$$.fragment,o),y(Un.$$.fragment,o),y(Vn.$$.fragment,o),y(Gn.$$.fragment,o),y(Kn.$$.fragment,o),y(Jn.$$.fragment,o),y(Xn.$$.fragment,o),y(Yn.$$.fragment,o),y(Zn.$$.fragment,o),y(es.$$.fragment,o),y(as.$$.fragment,o),y(Vo.$$.fragment,o),y(is.$$.fragment,o),y(ls.$$.fragment,o),y(ds.$$.fragment,o),y(ps.$$.fragment,o),y(Ko.$$.fragment,o),y(gs.$$.fragment,o),y(us.$$.fragment,o),y(_s.$$.fragment,o),y(bs.$$.fragment,o),y(Xo.$$.fragment,o),y(Ts.$$.fragment,o),y(ys.$$.fragment,o),y(Ls.$$.fragment,o),y($s.$$.fragment,o),y(Es.$$.fragment,o),y(Zo.$$.fragment,o),y(zs.$$.fragment,o),y(qs.$$.fragment,o),y(Cs.$$.fragment,o),y(As.$$.fragment,o),y(tn.$$.fragment,o),y(Is.$$.fragment,o),y(Ns.$$.fragment,o),y(Ss.$$.fragment,o),y(Qs.$$.fragment,o),y(nn.$$.fragment,o),y(Hs.$$.fragment,o),y(Rs.$$.fragment,o),y(Us.$$.fragment,o),y(rn.$$.fragment,o),y(Ys.$$.fragment,o),y(an.$$.fragment,o),y(Zs.$$.fragment,o),y(er.$$.fragment,o),y(dn.$$.fragment,o),y(rr.$$.fragment,o),y(cn.$$.fragment,o),y(ar.$$.fragment,o),y(ir.$$.fragment,o),y(lr.$$.fragment,o),y(mn.$$.fragment,o),y(mr.$$.fragment,o),y(fn.$$.fragment,o),y(fr.$$.fragment,o),y(pr.$$.fragment,o),y(gr.$$.fragment,o),y(gn.$$.fragment,o),y(kr.$$.fragment,o),y(un.$$.fragment,o),y(vr.$$.fragment,o),y(br.$$.fragment,o),y(Tr.$$.fragment,o),y(wn.$$.fragment,o),y(Fr.$$.fragment,o),y(kn.$$.fragment,o),y(xr.$$.fragment,o),y(Mr.$$.fragment,o),y(Er.$$.fragment,o),y(bn.$$.fragment,o),y(Pr.$$.fragment,o),y(Tn.$$.fragment,o),y(jr.$$.fragment,o),Lc=!1},d(o){t(p),o&&t(x),o&&t(g),L(w),o&&t(X),o&&t(E),o&&t(re),o&&t(R),L(K),o&&t(D),o&&t(Y),o&&t(C),o&&t(ee),o&&t(ae),o&&t(te),o&&t(ie),o&&t(j),o&&t(B),o&&t(oe),o&&t(Te),o&&t(le),o&&t(sd),o&&t(jt),L($n),o&&t(rd),o&&t(ye),o&&t(pd),o&&t(gt),o&&t(_d),o&&t(ut),o&&t(wd),o&&t(Ao),o&&t(kd),o&&t(Io),o&&t(vd),o&&t(Ve),o&&t(Ed),o&&t(No),o&&t(zd),o&&t(Ot),L(xn),o&&t(qd),o&&t(At),o&&t(Cd),L(Mn,o),o&&t(Pd),o&&t(It),L(En),o&&t(jd),o&&t(Oe),L(zn),L(Cn),o&&t(Od),o&&t(Bt),L(Pn),o&&t(Ad),o&&t(ft),L(jn),o&&t(Id),o&&t(Wt),L(On),o&&t(Nd),o&&t(pt),L(An),o&&t(Sd),o&&t(Qt),L(Nn),o&&t(Dd),o&&t(Ht),L(Sn),o&&t(Bd),o&&t(Rt),L(Dn),o&&t(Wd),o&&t(Ut),L(Bn),o&&t(Qd),o&&t(Vt),L(Wn),o&&t(Hd),o&&t(Gt),L(Qn),o&&t(Rd),o&&t(Kt),L(Hn),o&&t(Ud),o&&t(Jt),L(Rn),o&&t(Vd),o&&t(Xt),L(Un),o&&t(Gd),o&&t(Yt),L(Vn),o&&t(Kd),o&&t(Zt),L(Gn),o&&t(Jd),o&&t(eo),L(Kn),o&&t(Xd),o&&t(to),L(Jn),o&&t(Yd),o&&t(oo),L(Xn),o&&t(Zd),o&&t(no),L(Yn),o&&t(ec),o&&t(so),L(Zn),o&&t(tc),o&&t(qe),L(es),L(as),L(Vo),L(is),o&&t(oc),o&&t(io),L(ls),o&&t(nc),o&&t(We),L(ds),L(ps),L(Ko),L(gs),o&&t(sc),o&&t(co),L(us),o&&t(rc),o&&t(Qe),L(_s),L(bs),L(Xo),L(Ts),L(ys),o&&t(ac),o&&t(mo),L(Ls),o&&t(ic),o&&t(He),L($s),L(Es),L(Zo),L(zs),o&&t(lc),o&&t(po),L(qs),o&&t(dc),o&&t(Re),L(Cs),L(As),L(tn),L(Is),o&&t(cc),o&&t(uo),L(Ns),o&&t(hc),o&&t(Ue),L(Ss),L(Qs),L(nn),L(Hs),o&&t(mc),o&&t(ko),L(Rs),o&&t(fc),o&&t(Ee),L(Us),L(rn),L(Ys),L(an),o&&t(pc),o&&t(To),L(Zs),o&&t(gc),o&&t(Ae),L(er),L(dn),L(rr),L(cn),L(ar),o&&t(uc),o&&t(Lo),L(ir),o&&t(_c),o&&t(Ie),L(lr),L(mn),L(mr),L(fn),L(fr),o&&t(wc),o&&t(xo),L(pr),o&&t(kc),o&&t(Ne),L(gr),L(gn),L(kr),L(un),L(vr),o&&t(vc),o&&t(Eo),L(br),o&&t(bc),o&&t(Se),L(Tr),L(wn),L(Fr),L(kn),L(xr),o&&t(Tc),o&&t(qo),L(Mr),o&&t(yc),o&&t(De),L(Er),L(bn),L(Pr),L(Tn),L(jr)}}}const yT={local:"longformer",sections:[{local:"overview",title:"Overview"},{local:"longformer-self-attention",title:"Longformer Self Attention"},{local:"training",title:"Training"},{local:"transformers.LongformerConfig",title:"LongformerConfig"},{local:"transformers.LongformerTokenizer",title:"LongformerTokenizer"},{local:"transformers.LongformerTokenizerFast",title:"LongformerTokenizerFast"},{local:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",title:"Longformer specific outputs"},{local:"transformers.LongformerModel",title:"LongformerModel"},{local:"transformers.LongformerForMaskedLM",title:"LongformerForMaskedLM"},{local:"transformers.LongformerForSequenceClassification",title:"LongformerForSequenceClassification"},{local:"transformers.LongformerForMultipleChoice",title:"LongformerForMultipleChoice"},{local:"transformers.LongformerForTokenClassification",title:"LongformerForTokenClassification"},{local:"transformers.LongformerForQuestionAnswering",title:"LongformerForQuestionAnswering"},{local:"transformers.TFLongformerModel",title:"TFLongformerModel"},{local:"transformers.TFLongformerForMaskedLM",title:"TFLongformerForMaskedLM"},{local:"transformers.TFLongformerForQuestionAnswering",title:"TFLongformerForQuestionAnswering"},{local:"transformers.TFLongformerForSequenceClassification",title:"TFLongformerForSequenceClassification"},{local:"transformers.TFLongformerForTokenClassification",title:"TFLongformerForTokenClassification"},{local:"transformers.TFLongformerForMultipleChoice",title:"TFLongformerForMultipleChoice"}],title:"Longformer"};function LT(W,p,x){let{fw:g}=p;return W.$$set=u=>{"fw"in u&&x(0,g=u.fw)},[g]}class zT extends eT{constructor(p){super();tT(this,p,LT,TT,oT,{fw:0})}}export{zT as default,yT as metadata};
