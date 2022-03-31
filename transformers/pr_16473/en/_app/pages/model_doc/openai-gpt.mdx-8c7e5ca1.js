import{S as rf,i as lf,s as df,e as a,k as l,w as v,t as n,M as cf,c as r,d as t,m as d,a as i,x as b,h as s,b as c,F as e,g as h,y as k,q as w,o as y,B as P,v as pf}from"../../chunks/vendor-6b77c823.js";import{T as rt}from"../../chunks/Tip-39098574.js";import{D as re}from"../../chunks/Docstring-abef54e3.js";import{C as Xe}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Qe}from"../../chunks/IconCopyLink-7a11ce68.js";function hf(K){let m,G,f,g,I;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),I=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),I=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,I)},d(T){T&&t(m)}}}function mf(K){let m,G,f,g,I;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),I=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),I=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,I)},d(T){T&&t(m)}}}function uf(K){let m,G,f,g,I;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),I=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),I=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,I)},d(T){T&&t(m)}}}function ff(K){let m,G,f,g,I;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),I=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),I=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,I)},d(T){T&&t(m)}}}function gf(K){let m,G,f,g,I,T,_,A,me,J,$,X,D,Y,ue,x,fe,ce,S,q,Z,ee,M,z,oe,N,pe,ne,H,ge,he,E,_e,L,Q,ie,W,Te,te,C,le,B,ve;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),I=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),ce=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),pe=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),he=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),ie=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),le=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){m=r(p,"P",{});var O=i(m);G=s(O,"TF 2.0 models accepts two formats as inputs:"),O.forEach(t),f=d(p),g=r(p,"UL",{});var U=i(g);I=r(U,"LI",{});var ze=i(I);T=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),_=d(U),A=r(U,"LI",{});var Fe=i(A);me=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),U.forEach(t),J=d(p),$=r(p,"P",{});var F=i($);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),ue=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var qe=i(x);fe=s(qe,"model(inputs)"),qe.forEach(t),ce=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var be=i(q);Z=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),ee=d(p),M=r(p,"UL",{});var j=i(M);z=r(j,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var ke=i(N);pe=s(ke,"input_ids"),ke.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var Ce=i(H);ge=s(Ce,"model(inputs_ids)"),Ce.forEach(t),R.forEach(t),he=d(j),E=r(j,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var $e=i(L);Q=s($e,"model([input_ids, attention_mask])"),$e.forEach(t),ie=s(V," or "),W=r(V,"CODE",{});var ye=i(W);Te=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),V.forEach(t),te=d(j),C=r(j,"LI",{});var we=i(C);le=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(we,"CODE",{});var Ge=i(B);ve=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),we.forEach(t),j.forEach(t)},m(p,O){h(p,m,O),e(m,G),h(p,f,O),h(p,g,O),e(g,I),e(I,T),e(g,_),e(g,A),e(A,me),h(p,J,O),h(p,$,O),e($,X),e($,D),e(D,Y),e($,ue),e($,x),e(x,fe),e($,ce),h(p,S,O),h(p,q,O),e(q,Z),h(p,ee,O),h(p,M,O),e(M,z),e(z,oe),e(z,N),e(N,pe),e(z,ne),e(z,H),e(H,ge),e(M,he),e(M,E),e(E,_e),e(E,L),e(L,Q),e(E,ie),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,le),e(C,B),e(B,ve)},d(p){p&&t(m),p&&t(f),p&&t(g),p&&t(J),p&&t($),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function _f(K){let m,G,f,g,I;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),I=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),I=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,I)},d(T){T&&t(m)}}}function Tf(K){let m,G,f,g,I,T,_,A,me,J,$,X,D,Y,ue,x,fe,ce,S,q,Z,ee,M,z,oe,N,pe,ne,H,ge,he,E,_e,L,Q,ie,W,Te,te,C,le,B,ve;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),I=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),ce=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),pe=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),he=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),ie=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),le=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){m=r(p,"P",{});var O=i(m);G=s(O,"TF 2.0 models accepts two formats as inputs:"),O.forEach(t),f=d(p),g=r(p,"UL",{});var U=i(g);I=r(U,"LI",{});var ze=i(I);T=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),_=d(U),A=r(U,"LI",{});var Fe=i(A);me=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),U.forEach(t),J=d(p),$=r(p,"P",{});var F=i($);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),ue=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var qe=i(x);fe=s(qe,"model(inputs)"),qe.forEach(t),ce=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var be=i(q);Z=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),ee=d(p),M=r(p,"UL",{});var j=i(M);z=r(j,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var ke=i(N);pe=s(ke,"input_ids"),ke.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var Ce=i(H);ge=s(Ce,"model(inputs_ids)"),Ce.forEach(t),R.forEach(t),he=d(j),E=r(j,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var $e=i(L);Q=s($e,"model([input_ids, attention_mask])"),$e.forEach(t),ie=s(V," or "),W=r(V,"CODE",{});var ye=i(W);Te=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),V.forEach(t),te=d(j),C=r(j,"LI",{});var we=i(C);le=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(we,"CODE",{});var Ge=i(B);ve=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),we.forEach(t),j.forEach(t)},m(p,O){h(p,m,O),e(m,G),h(p,f,O),h(p,g,O),e(g,I),e(I,T),e(g,_),e(g,A),e(A,me),h(p,J,O),h(p,$,O),e($,X),e($,D),e(D,Y),e($,ue),e($,x),e(x,fe),e($,ce),h(p,S,O),h(p,q,O),e(q,Z),h(p,ee,O),h(p,M,O),e(M,z),e(z,oe),e(z,N),e(N,pe),e(z,ne),e(z,H),e(H,ge),e(M,he),e(M,E),e(E,_e),e(E,L),e(L,Q),e(E,ie),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,le),e(C,B),e(B,ve)},d(p){p&&t(m),p&&t(f),p&&t(g),p&&t(J),p&&t($),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function vf(K){let m,G,f,g,I;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),I=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),I=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,I)},d(T){T&&t(m)}}}function bf(K){let m,G,f,g,I,T,_,A,me,J,$,X,D,Y,ue,x,fe,ce,S,q,Z,ee,M,z,oe,N,pe,ne,H,ge,he,E,_e,L,Q,ie,W,Te,te,C,le,B,ve;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),I=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),ce=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),pe=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),he=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),ie=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),le=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){m=r(p,"P",{});var O=i(m);G=s(O,"TF 2.0 models accepts two formats as inputs:"),O.forEach(t),f=d(p),g=r(p,"UL",{});var U=i(g);I=r(U,"LI",{});var ze=i(I);T=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),_=d(U),A=r(U,"LI",{});var Fe=i(A);me=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),U.forEach(t),J=d(p),$=r(p,"P",{});var F=i($);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),ue=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var qe=i(x);fe=s(qe,"model(inputs)"),qe.forEach(t),ce=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var be=i(q);Z=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),ee=d(p),M=r(p,"UL",{});var j=i(M);z=r(j,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var ke=i(N);pe=s(ke,"input_ids"),ke.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var Ce=i(H);ge=s(Ce,"model(inputs_ids)"),Ce.forEach(t),R.forEach(t),he=d(j),E=r(j,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var $e=i(L);Q=s($e,"model([input_ids, attention_mask])"),$e.forEach(t),ie=s(V," or "),W=r(V,"CODE",{});var ye=i(W);Te=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),V.forEach(t),te=d(j),C=r(j,"LI",{});var we=i(C);le=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(we,"CODE",{});var Ge=i(B);ve=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),we.forEach(t),j.forEach(t)},m(p,O){h(p,m,O),e(m,G),h(p,f,O),h(p,g,O),e(g,I),e(I,T),e(g,_),e(g,A),e(A,me),h(p,J,O),h(p,$,O),e($,X),e($,D),e(D,Y),e($,ue),e($,x),e(x,fe),e($,ce),h(p,S,O),h(p,q,O),e(q,Z),h(p,ee,O),h(p,M,O),e(M,z),e(z,oe),e(z,N),e(N,pe),e(z,ne),e(z,H),e(H,ge),e(M,he),e(M,E),e(E,_e),e(E,L),e(L,Q),e(E,ie),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,le),e(C,B),e(B,ve)},d(p){p&&t(m),p&&t(f),p&&t(g),p&&t(J),p&&t($),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function kf(K){let m,G,f,g,I;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),I=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),I=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,I)},d(T){T&&t(m)}}}function wf(K){let m,G,f,g,I,T,_,A,me,J,$,X,D,Y,ue,x,fe,ce,S,q,Z,ee,M,z,oe,N,pe,ne,H,ge,he,E,_e,L,Q,ie,W,Te,te,C,le,B,ve;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),I=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),ce=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),pe=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),he=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),ie=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),le=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){m=r(p,"P",{});var O=i(m);G=s(O,"TF 2.0 models accepts two formats as inputs:"),O.forEach(t),f=d(p),g=r(p,"UL",{});var U=i(g);I=r(U,"LI",{});var ze=i(I);T=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),_=d(U),A=r(U,"LI",{});var Fe=i(A);me=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),U.forEach(t),J=d(p),$=r(p,"P",{});var F=i($);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),ue=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var qe=i(x);fe=s(qe,"model(inputs)"),qe.forEach(t),ce=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var be=i(q);Z=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),ee=d(p),M=r(p,"UL",{});var j=i(M);z=r(j,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var ke=i(N);pe=s(ke,"input_ids"),ke.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var Ce=i(H);ge=s(Ce,"model(inputs_ids)"),Ce.forEach(t),R.forEach(t),he=d(j),E=r(j,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var $e=i(L);Q=s($e,"model([input_ids, attention_mask])"),$e.forEach(t),ie=s(V," or "),W=r(V,"CODE",{});var ye=i(W);Te=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),V.forEach(t),te=d(j),C=r(j,"LI",{});var we=i(C);le=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(we,"CODE",{});var Ge=i(B);ve=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),we.forEach(t),j.forEach(t)},m(p,O){h(p,m,O),e(m,G),h(p,f,O),h(p,g,O),e(g,I),e(I,T),e(g,_),e(g,A),e(A,me),h(p,J,O),h(p,$,O),e($,X),e($,D),e(D,Y),e($,ue),e($,x),e(x,fe),e($,ce),h(p,S,O),h(p,q,O),e(q,Z),h(p,ee,O),h(p,M,O),e(M,z),e(z,oe),e(z,N),e(N,pe),e(z,ne),e(z,H),e(H,ge),e(M,he),e(M,E),e(E,_e),e(E,L),e(L,Q),e(E,ie),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,le),e(C,B),e(B,ve)},d(p){p&&t(m),p&&t(f),p&&t(g),p&&t(J),p&&t($),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function yf(K){let m,G,f,g,I;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),I=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),I=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,I)},d(T){T&&t(m)}}}function Pf(K){let m,G,f,g,I,T,_,A,me,J,$,X,D,Y,ue,x,fe,ce,S,q,Z,ee,M,z,oe,N,pe,ne,H,ge,he,E,_e,L,Q,ie,W,Te,te,C,le,B,ve,p,O,U,ze,Fe,F,se,qe,be,j,R,ke,Ce,V,$e,ye,we,Ge,et,_i,zs,Ti,vi,Fs,bi,ki,qs,wi,yi,rr,ko,ir,We,Pi,Cs,Ii,Oi,js,Ai,$i,Jn,Gi,Mi,Ds,Ei,zi,lr,yt,Rt,xs,wo,Fi,Hs,qi,dr,je,yo,Ci,it,ji,Xn,Di,xi,Qn,Hi,Si,Po,Li,Ni,Wi,Pt,Bi,Yn,Ui,Ri,Zn,Vi,Ki,Ji,Ss,Xi,Qi,Io,cr,It,Vt,Ls,Oo,Yi,Ns,Zi,pr,De,Ao,el,Ws,tl,ol,$o,Bs,nl,sl,lt,al,Us,rl,il,Rs,ll,dl,Vs,cl,pl,hl,Go,ml,es,ul,fl,gl,ts,Mo,hr,Ot,Kt,Ks,Eo,_l,Js,Tl,mr,Ye,zo,vl,Fo,bl,Xs,kl,wl,yl,qo,Qs,Pl,Il,Ys,Ol,Al,Co,$l,os,Gl,Ml,ur,At,Jt,Zs,jo,El,ea,zl,fr,$t,Do,Fl,ta,ql,gr,Gt,xo,Cl,oa,jl,_r,Mt,Xt,na,Ho,Dl,sa,xl,Tr,xe,So,Hl,aa,Sl,Ll,Lo,Nl,ns,Wl,Bl,Ul,No,Rl,Wo,Vl,Kl,Jl,Be,Bo,Xl,Et,Ql,ss,Yl,Zl,ra,ed,td,od,Qt,nd,ia,sd,ad,Uo,vr,zt,Yt,la,Ro,rd,da,id,br,He,Vo,ld,ca,dd,cd,Ko,pd,as,hd,md,ud,Jo,fd,Xo,gd,_d,Td,Ue,Qo,vd,Ft,bd,rs,kd,wd,pa,yd,Pd,Id,Zt,Od,ha,Ad,$d,Yo,kr,qt,eo,ma,Zo,Gd,ua,Md,wr,Se,en,Ed,fa,zd,Fd,tn,qd,is,Cd,jd,Dd,on,xd,nn,Hd,Sd,Ld,Re,sn,Nd,Ct,Wd,ls,Bd,Ud,ga,Rd,Vd,Kd,to,Jd,_a,Xd,Qd,an,yr,jt,oo,Ta,rn,Yd,va,Zd,Pr,Le,ln,ec,Ne,tc,ds,oc,nc,ba,sc,ac,ka,rc,ic,wa,lc,dc,ya,cc,pc,hc,dn,mc,cs,uc,fc,gc,cn,_c,pn,Tc,vc,bc,ae,hn,kc,Dt,wc,ps,yc,Pc,Pa,Ic,Oc,Ac,no,$c,Ia,Gc,Mc,mn,Ec,un,zc,Oa,Fc,qc,fn,Cc,gn,Ir,xt,so,Aa,_n,jc,$a,Dc,Or,Ie,Tn,xc,Ga,Hc,Sc,vn,Lc,hs,Nc,Wc,Bc,bn,Uc,kn,Rc,Vc,Kc,ao,Jc,Ve,wn,Xc,Ht,Qc,ms,Yc,Zc,Ma,ep,tp,op,ro,np,Ea,sp,ap,yn,Ar,St,io,za,Pn,rp,Fa,ip,$r,Oe,In,lp,qa,dp,cp,On,pp,us,hp,mp,up,An,fp,$n,gp,_p,Tp,lo,vp,Ke,Gn,bp,Lt,kp,fs,wp,yp,Ca,Pp,Ip,Op,co,Ap,ja,$p,Gp,Mn,Gr,Nt,po,Da,En,Mp,xa,Ep,Mr,Ae,zn,zp,Ha,Fp,qp,Fn,Cp,gs,jp,Dp,xp,qn,Hp,Cn,Sp,Lp,Np,ho,Wp,Je,jn,Bp,Wt,Up,_s,Rp,Vp,Sa,Kp,Jp,Xp,mo,Qp,La,Yp,Zp,Dn,Er,Bt,uo,Na,xn,eh,Wa,th,zr,de,Hn,oh,Ba,nh,sh,Ts,vs,ah,rh,ih,Ze,lh,Ua,dh,ch,Ra,ph,hh,Va,mh,uh,Ka,fh,gh,_h,Sn,Th,bs,vh,bh,kh,Ln,wh,Nn,yh,Ph,Ih,fo,Oh,Me,Wn,Ah,Ut,$h,ks,Gh,Mh,Ja,Eh,zh,Fh,go,qh,Xa,Ch,jh,Bn,Dh,Un,Fr;return T=new Qe({}),Y=new Qe({}),ko=new Xe({props:{code:`pip install spacy ftfy==4.4.3
python -m spacy download en`,highlighted:`pip install spacy ftfy==4.4.3
python -m spacy download en`}}),wo=new Qe({}),yo=new re({props:{name:"class transformers.OpenAIGPTConfig",anchor:"transformers.OpenAIGPTConfig",parameters:[{name:"vocab_size",val:" = 40478"},{name:"n_positions",val:" = 512"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"afn",val:" = 'gelu'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"predict_special_tokens",val:" = True"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/configuration_openai.py#L27",parametersDescription:[{anchor:"transformers.OpenAIGPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 40478) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTModel">OpenAIGPTModel</a> or <a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel">TFOpenAIGPTModel</a>.`,name:"vocab_size"},{anchor:"transformers.OpenAIGPTConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.OpenAIGPTConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.OpenAIGPTConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.OpenAIGPTConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.OpenAIGPTConfig.afn",description:`<strong>afn</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"afn"},{anchor:"transformers.OpenAIGPTConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.OpenAIGPTConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.OpenAIGPTConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.OpenAIGPTConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers`,name:"layer_norm_epsilon"},{anchor:"transformers.OpenAIGPTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.OpenAIGPTConfig.predict_special_tokens",description:`<strong>predict_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not special tokens should be predicted when the model has a language modeling head.`,name:"predict_special_tokens"},{anchor:"transformers.OpenAIGPTConfig.summary_type",description:`<strong>summary_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;cls_index&quot;</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.OpenAIGPTConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.OpenAIGPTConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.OpenAIGPTConfig.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.OpenAIGPTConfig.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.OpenAIGPTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Io=new Xe({props:{code:`from transformers import OpenAIGPTConfig, OpenAIGPTModel

# Initializing a GPT configuration
configuration = OpenAIGPTConfig()

# Initializing a model from the configuration
model = OpenAIGPTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTConfig, OpenAIGPTModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = OpenAIGPTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Oo=new Qe({}),Ao=new re({props:{name:"class transformers.OpenAIGPTTokenizer",anchor:"transformers.OpenAIGPTTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/tokenization_openai.py#L73",parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),Mo=new re({props:{name:"save_vocabulary",anchor:"transformers.OpenAIGPTTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/tokenization_openai.py#L206"}}),Eo=new Qe({}),zo=new re({props:{name:"class transformers.OpenAIGPTTokenizerFast",anchor:"transformers.OpenAIGPTTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/tokenization_openai_fast.py#L40",parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),jo=new Qe({}),Do=new re({props:{name:"class transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mc_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/modeling_openai.py#L301",parametersDescription:[{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_loss",description:`<strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) &#x2014;
Multiple choice classification loss.`,name:"mc_loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),xo=new re({props:{name:"class transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"mc_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/modeling_tf_openai.py#L373",parametersDescription:[{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),Ho=new Qe({}),So=new re({props:{name:"class transformers.OpenAIGPTModel",anchor:"transformers.OpenAIGPTModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/modeling_openai.py#L405",parametersDescription:[{anchor:"transformers.OpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16473/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bo=new re({props:{name:"forward",anchor:"transformers.OpenAIGPTModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/modeling_openai.py#L431",parametersDescription:[{anchor:"transformers.OpenAIGPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16473/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16473/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16473/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16473/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16473/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qt=new rt({props:{$$slots:{default:[hf]},$$scope:{ctx:K}}}),Uo=new Xe({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTModel
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ro=new Qe({}),Vo=new re({props:{name:"class transformers.OpenAIGPTLMHeadModel",anchor:"transformers.OpenAIGPTLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/modeling_openai.py#L536",parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16473/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Qo=new re({props:{name:"forward",anchor:"transformers.OpenAIGPTLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/modeling_openai.py#L551",parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16473/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16473/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16473/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16473/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16473/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zt=new rt({props:{$$slots:{default:[mf]},$$scope:{ctx:K}}}),Yo=new Xe({props:{code:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTLMHeadModel

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTLMHeadModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTLMHeadModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Zo=new Qe({}),en=new re({props:{name:"class transformers.OpenAIGPTDoubleHeadsModel",anchor:"transformers.OpenAIGPTDoubleHeadsModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/modeling_openai.py#L623",parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16473/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),sn=new re({props:{name:"forward",anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"mc_token_ids",val:" = None"},{name:"labels",val:" = None"},{name:"mc_labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/modeling_openai.py#L641",parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16473/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16473/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16473/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-1, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code> are
ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_labels",description:`<strong>mc_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"mc_labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) \u2014 Multiple choice classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).</p>
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
  href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new rt({props:{$$slots:{default:[uf]},$$scope:{ctx:K}}}),an=new Xe({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTDoubleHeadsModel
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTDoubleHeadsModel.from_pretrained("openai-gpt")
tokenizer.add_special_tokens(
    {"cls_token": "[CLS]"}
)  # Add a [CLS] to the vocabulary (we should train it also!)
model.resize_token_embeddings(len(tokenizer))

choices = ["Hello, my dog is cute [CLS]", "Hello, my cat is cute [CLS]"]
input_ids = torch.tensor([tokenizer.encode(s) for s in choices]).unsqueeze(0)  # Batch size 1, 2 choices
mc_token_ids = torch.tensor([input_ids.size(-1) - 1, input_ids.size(-1) - 1]).unsqueeze(0)  # Batch size 1

outputs = model(input_ids, mc_token_ids=mc_token_ids)
lm_logits = outputs.logits
mc_logits = outputs.mc_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTDoubleHeadsModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTDoubleHeadsModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.add_special_tokens(
<span class="hljs-meta">... </span>    {<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;[CLS]&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([tokenizer.encode(s) <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> choices]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1, 2 choices</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_token_ids = torch.tensor([input_ids.size(-<span class="hljs-number">1</span>) - <span class="hljs-number">1</span>, input_ids.size(-<span class="hljs-number">1</span>) - <span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, mc_token_ids=mc_token_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_logits = outputs.mc_logits`}}),rn=new Qe({}),ln=new re({props:{name:"class transformers.OpenAIGPTForSequenceClassification",anchor:"transformers.OpenAIGPTForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/modeling_openai.py#L749",parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16473/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hn=new re({props:{name:"forward",anchor:"transformers.OpenAIGPTForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/modeling_openai.py#L759",parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16473/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16473/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16473/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16473/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16473/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),no=new rt({props:{$$slots:{default:[ff]},$$scope:{ctx:K}}}),mn=new Xe({props:{code:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),un=new Xe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),fn=new Xe({props:{code:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),gn=new Xe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),_n=new Qe({}),Tn=new re({props:{name:"class transformers.TFOpenAIGPTModel",anchor:"transformers.TFOpenAIGPTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/modeling_tf_openai.py#L498",parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16473/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ao=new rt({props:{$$slots:{default:[gf]},$$scope:{ctx:K}}}),wn=new re({props:{name:"call",anchor:"transformers.TFOpenAIGPTModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/modeling_tf_openai.py#L503",parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16473/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16473/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16473/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16473/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16473/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ro=new rt({props:{$$slots:{default:[_f]},$$scope:{ctx:K}}}),yn=new Xe({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTModel
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Pn=new Qe({}),In=new re({props:{name:"class transformers.TFOpenAIGPTLMHeadModel",anchor:"transformers.TFOpenAIGPTLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/modeling_tf_openai.py#L555",parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16473/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new rt({props:{$$slots:{default:[Tf]},$$scope:{ctx:K}}}),Gn=new re({props:{name:"call",anchor:"transformers.TFOpenAIGPTLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/modeling_tf_openai.py#L566",parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16473/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16473/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16473/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16473/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16473/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),co=new rt({props:{$$slots:{default:[vf]},$$scope:{ctx:K}}}),Mn=new Xe({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTLMHeadModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTLMHeadModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),En=new Qe({}),zn=new re({props:{name:"class transformers.TFOpenAIGPTDoubleHeadsModel",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/modeling_tf_openai.py#L645",parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16473/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ho=new rt({props:{$$slots:{default:[bf]},$$scope:{ctx:K}}}),jn=new re({props:{name:"call",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"mc_token_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/modeling_tf_openai.py#L654",parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16473/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16473/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16473/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).</p>
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
  href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mo=new rt({props:{$$slots:{default:[kf]},$$scope:{ctx:K}}}),Dn=new Xe({props:{code:`import tensorflow as tf
from transformers import OpenAIGPTTokenizer, TFOpenAIGPTDoubleHeadsModel

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTDoubleHeadsModel.from_pretrained("openai-gpt")

# Add a [CLS] to the vocabulary (we should train it also!)
tokenizer.add_special_tokens({"cls_token": "[CLS]"})
model.resize_token_embeddings(len(tokenizer))  # Update the model embeddings with the new vocabulary size
print(tokenizer.cls_token_id, len(tokenizer))  # The newly token the last token of the vocabulary

choices = ["Hello, my dog is cute [CLS]", "Hello, my cat is cute [CLS]"]
encoding = tokenizer(choices, return_tensors="tf")
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
inputs["mc_token_ids"] = tf.constant(
    [inputs["input_ids"].shape[-1] - 1, inputs["input_ids"].shape[-1] - 1]
)[
    None, :
]  # Batch size 1
outputs = model(inputs)
lm_prediction_scores, mc_prediction_scores = outputs[:2]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTDoubleHeadsModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTDoubleHeadsModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.add_special_tokens({<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;[CLS]&quot;</span>})
<span class="hljs-meta">&gt;&gt;&gt; </span>model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))  <span class="hljs-comment"># Update the model embeddings with the new vocabulary size</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.cls_token_id, <span class="hljs-built_in">len</span>(tokenizer))  <span class="hljs-comment"># The newly token the last token of the vocabulary</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(choices, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;mc_token_ids&quot;</span>] = tf.constant(
<span class="hljs-meta">... </span>    [inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] - <span class="hljs-number">1</span>, inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] - <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>)[
<span class="hljs-meta">... </span>    <span class="hljs-literal">None</span>, :
<span class="hljs-meta">&gt;&gt;&gt; </span>]  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_prediction_scores, mc_prediction_scores = outputs[:<span class="hljs-number">2</span>]`}}),xn=new Qe({}),Hn=new re({props:{name:"class transformers.TFOpenAIGPTForSequenceClassification",anchor:"transformers.TFOpenAIGPTForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/modeling_tf_openai.py#L781",parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16473/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fo=new rt({props:{$$slots:{default:[wf]},$$scope:{ctx:K}}}),Wn=new re({props:{name:"call",anchor:"transformers.TFOpenAIGPTForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/openai/modeling_tf_openai.py#L793",parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16473/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16473/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16473/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16473/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16473/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),go=new rt({props:{$$slots:{default:[yf]},$$scope:{ctx:K}}}),Bn=new Xe({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTForSequenceClassification.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Un=new Xe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFOpenAIGPTForSequenceClassification.from_pretrained("openai-gpt", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){m=a("meta"),G=l(),f=a("h1"),g=a("a"),I=a("span"),v(T.$$.fragment),_=l(),A=a("span"),me=n("OpenAI GPT"),J=l(),$=a("h2"),X=a("a"),D=a("span"),v(Y.$$.fragment),ue=l(),x=a("span"),fe=n("Overview"),ce=l(),S=a("p"),q=n("OpenAI GPT model was proposed in "),Z=a("a"),ee=n("Improving Language Understanding by Generative Pre-Training"),M=n(`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),z=l(),oe=a("p"),N=n("The abstract from the paper is the following:"),pe=l(),ne=a("p"),H=a("em"),ge=n(`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),he=l(),E=a("p"),_e=n("Tips:"),L=l(),Q=a("ul"),ie=a("li"),W=n(`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Te=l(),te=a("li"),C=n(`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),le=a("em"),B=n("run_generation.py"),ve=n(" example script."),p=l(),O=a("p"),U=a("a"),ze=n("Write With Transformer"),Fe=n(` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),F=l(),se=a("p"),qe=n("This model was contributed by "),be=a("a"),j=n("thomwolf"),R=n(". The original code can be found "),ke=a("a"),Ce=n("here"),V=n("."),$e=l(),ye=a("p"),we=n("Note:"),Ge=l(),et=a("p"),_i=n("If you want to reproduce the original tokenization process of the "),zs=a("em"),Ti=n("OpenAI GPT"),vi=n(" paper, you will need to install "),Fs=a("code"),bi=n("ftfy"),ki=n(`
and `),qs=a("code"),wi=n("SpaCy"),yi=n(":"),rr=l(),v(ko.$$.fragment),ir=l(),We=a("p"),Pi=n("If you don\u2019t install "),Cs=a("code"),Ii=n("ftfy"),Oi=n(" and "),js=a("code"),Ai=n("SpaCy"),$i=n(", the "),Jn=a("a"),Gi=n("OpenAIGPTTokenizer"),Mi=n(` will default to tokenize
using BERT\u2019s `),Ds=a("code"),Ei=n("BasicTokenizer"),zi=n(" followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),lr=l(),yt=a("h2"),Rt=a("a"),xs=a("span"),v(wo.$$.fragment),Fi=l(),Hs=a("span"),qi=n("OpenAIGPTConfig"),dr=l(),je=a("div"),v(yo.$$.fragment),Ci=l(),it=a("p"),ji=n("This is the configuration class to store the configuration of a "),Xn=a("a"),Di=n("OpenAIGPTModel"),xi=n(" or a "),Qn=a("a"),Hi=n("TFOpenAIGPTModel"),Si=n(`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
`),Po=a("a"),Li=n("GPT"),Ni=n(" architecture from OpenAI."),Wi=l(),Pt=a("p"),Bi=n("Configuration objects inherit from "),Yn=a("a"),Ui=n("PretrainedConfig"),Ri=n(` and can be used to control the model outputs. Read the
documentation from `),Zn=a("a"),Vi=n("PretrainedConfig"),Ki=n(" for more information."),Ji=l(),Ss=a("p"),Xi=n("Examples:"),Qi=l(),v(Io.$$.fragment),cr=l(),It=a("h2"),Vt=a("a"),Ls=a("span"),v(Oo.$$.fragment),Yi=l(),Ns=a("span"),Zi=n("OpenAIGPTTokenizer"),pr=l(),De=a("div"),v(Ao.$$.fragment),el=l(),Ws=a("p"),tl=n("Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),ol=l(),$o=a("ul"),Bs=a("li"),nl=n("lowercases all inputs,"),sl=l(),lt=a("li"),al=n("uses "),Us=a("code"),rl=n("SpaCy"),il=n(" tokenizer and "),Rs=a("code"),ll=n("ftfy"),dl=n(` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Vs=a("code"),cl=n("BasicTokenizer"),pl=n(" if not."),hl=l(),Go=a("p"),ml=n("This tokenizer inherits from "),es=a("a"),ul=n("PreTrainedTokenizer"),fl=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),gl=l(),ts=a("div"),v(Mo.$$.fragment),hr=l(),Ot=a("h2"),Kt=a("a"),Ks=a("span"),v(Eo.$$.fragment),_l=l(),Js=a("span"),Tl=n("OpenAIGPTTokenizerFast"),mr=l(),Ye=a("div"),v(zo.$$.fragment),vl=l(),Fo=a("p"),bl=n("Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),Xs=a("em"),kl=n("tokenizers"),wl=n(` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),yl=l(),qo=a("ul"),Qs=a("li"),Pl=n("lower case all inputs"),Il=l(),Ys=a("li"),Ol=n("uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),Al=l(),Co=a("p"),$l=n("This tokenizer inherits from "),os=a("a"),Gl=n("PreTrainedTokenizerFast"),Ml=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ur=l(),At=a("h2"),Jt=a("a"),Zs=a("span"),v(jo.$$.fragment),El=l(),ea=a("span"),zl=n("OpenAI specific outputs"),fr=l(),$t=a("div"),v(Do.$$.fragment),Fl=l(),ta=a("p"),ql=n("Base class for outputs of models predicting if two sentences are consecutive or not."),gr=l(),Gt=a("div"),v(xo.$$.fragment),Cl=l(),oa=a("p"),jl=n("Base class for outputs of models predicting if two sentences are consecutive or not."),_r=l(),Mt=a("h2"),Xt=a("a"),na=a("span"),v(Ho.$$.fragment),Dl=l(),sa=a("span"),xl=n("OpenAIGPTModel"),Tr=l(),xe=a("div"),v(So.$$.fragment),Hl=l(),aa=a("p"),Sl=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Ll=l(),Lo=a("p"),Nl=n("This model inherits from "),ns=a("a"),Wl=n("PreTrainedModel"),Bl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ul=l(),No=a("p"),Rl=n("This model is also a PyTorch "),Wo=a("a"),Vl=n("torch.nn.Module"),Kl=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jl=l(),Be=a("div"),v(Bo.$$.fragment),Xl=l(),Et=a("p"),Ql=n("The "),ss=a("a"),Yl=n("OpenAIGPTModel"),Zl=n(" forward method, overrides the "),ra=a("code"),ed=n("__call__"),td=n(" special method."),od=l(),v(Qt.$$.fragment),nd=l(),ia=a("p"),sd=n("Example:"),ad=l(),v(Uo.$$.fragment),vr=l(),zt=a("h2"),Yt=a("a"),la=a("span"),v(Ro.$$.fragment),rd=l(),da=a("span"),id=n("OpenAIGPTLMHeadModel"),br=l(),He=a("div"),v(Vo.$$.fragment),ld=l(),ca=a("p"),dd=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),cd=l(),Ko=a("p"),pd=n("This model inherits from "),as=a("a"),hd=n("PreTrainedModel"),md=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ud=l(),Jo=a("p"),fd=n("This model is also a PyTorch "),Xo=a("a"),gd=n("torch.nn.Module"),_d=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Td=l(),Ue=a("div"),v(Qo.$$.fragment),vd=l(),Ft=a("p"),bd=n("The "),rs=a("a"),kd=n("OpenAIGPTLMHeadModel"),wd=n(" forward method, overrides the "),pa=a("code"),yd=n("__call__"),Pd=n(" special method."),Id=l(),v(Zt.$$.fragment),Od=l(),ha=a("p"),Ad=n("Example:"),$d=l(),v(Yo.$$.fragment),kr=l(),qt=a("h2"),eo=a("a"),ma=a("span"),v(Zo.$$.fragment),Gd=l(),ua=a("span"),Md=n("OpenAIGPTDoubleHeadsModel"),wr=l(),Se=a("div"),v(en.$$.fragment),Ed=l(),fa=a("p"),zd=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Fd=l(),tn=a("p"),qd=n("This model inherits from "),is=a("a"),Cd=n("PreTrainedModel"),jd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dd=l(),on=a("p"),xd=n("This model is also a PyTorch "),nn=a("a"),Hd=n("torch.nn.Module"),Sd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ld=l(),Re=a("div"),v(sn.$$.fragment),Nd=l(),Ct=a("p"),Wd=n("The "),ls=a("a"),Bd=n("OpenAIGPTDoubleHeadsModel"),Ud=n(" forward method, overrides the "),ga=a("code"),Rd=n("__call__"),Vd=n(" special method."),Kd=l(),v(to.$$.fragment),Jd=l(),_a=a("p"),Xd=n("Examples:"),Qd=l(),v(an.$$.fragment),yr=l(),jt=a("h2"),oo=a("a"),Ta=a("span"),v(rn.$$.fragment),Yd=l(),va=a("span"),Zd=n("OpenAIGPTForSequenceClassification"),Pr=l(),Le=a("div"),v(ln.$$.fragment),ec=l(),Ne=a("p"),tc=n(`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),ds=a("a"),oc=n("OpenAIGPTForSequenceClassification"),nc=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),ba=a("code"),sc=n("pad_token_id"),ac=n(` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),ka=a("code"),rc=n("pad_token_id"),ic=n(` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),wa=a("code"),lc=n("inputs_embeds"),dc=n(" are passed instead of "),ya=a("code"),cc=n("input_ids"),pc=n(`, it does the same (take
the last value in each row of the batch).`),hc=l(),dn=a("p"),mc=n("This model inherits from "),cs=a("a"),uc=n("PreTrainedModel"),fc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gc=l(),cn=a("p"),_c=n("This model is also a PyTorch "),pn=a("a"),Tc=n("torch.nn.Module"),vc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bc=l(),ae=a("div"),v(hn.$$.fragment),kc=l(),Dt=a("p"),wc=n("The "),ps=a("a"),yc=n("OpenAIGPTForSequenceClassification"),Pc=n(" forward method, overrides the "),Pa=a("code"),Ic=n("__call__"),Oc=n(" special method."),Ac=l(),v(no.$$.fragment),$c=l(),Ia=a("p"),Gc=n("Example of single-label classification:"),Mc=l(),v(mn.$$.fragment),Ec=l(),v(un.$$.fragment),zc=l(),Oa=a("p"),Fc=n("Example of multi-label classification:"),qc=l(),v(fn.$$.fragment),Cc=l(),v(gn.$$.fragment),Ir=l(),xt=a("h2"),so=a("a"),Aa=a("span"),v(_n.$$.fragment),jc=l(),$a=a("span"),Dc=n("TFOpenAIGPTModel"),Or=l(),Ie=a("div"),v(Tn.$$.fragment),xc=l(),Ga=a("p"),Hc=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Sc=l(),vn=a("p"),Lc=n("This model inherits from "),hs=a("a"),Nc=n("TFPreTrainedModel"),Wc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bc=l(),bn=a("p"),Uc=n("This model is also a "),kn=a("a"),Rc=n("tf.keras.Model"),Vc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kc=l(),v(ao.$$.fragment),Jc=l(),Ve=a("div"),v(wn.$$.fragment),Xc=l(),Ht=a("p"),Qc=n("The "),ms=a("a"),Yc=n("TFOpenAIGPTModel"),Zc=n(" forward method, overrides the "),Ma=a("code"),ep=n("__call__"),tp=n(" special method."),op=l(),v(ro.$$.fragment),np=l(),Ea=a("p"),sp=n("Example:"),ap=l(),v(yn.$$.fragment),Ar=l(),St=a("h2"),io=a("a"),za=a("span"),v(Pn.$$.fragment),rp=l(),Fa=a("span"),ip=n("TFOpenAIGPTLMHeadModel"),$r=l(),Oe=a("div"),v(In.$$.fragment),lp=l(),qa=a("p"),dp=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),cp=l(),On=a("p"),pp=n("This model inherits from "),us=a("a"),hp=n("TFPreTrainedModel"),mp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),up=l(),An=a("p"),fp=n("This model is also a "),$n=a("a"),gp=n("tf.keras.Model"),_p=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tp=l(),v(lo.$$.fragment),vp=l(),Ke=a("div"),v(Gn.$$.fragment),bp=l(),Lt=a("p"),kp=n("The "),fs=a("a"),wp=n("TFOpenAIGPTLMHeadModel"),yp=n(" forward method, overrides the "),Ca=a("code"),Pp=n("__call__"),Ip=n(" special method."),Op=l(),v(co.$$.fragment),Ap=l(),ja=a("p"),$p=n("Example:"),Gp=l(),v(Mn.$$.fragment),Gr=l(),Nt=a("h2"),po=a("a"),Da=a("span"),v(En.$$.fragment),Mp=l(),xa=a("span"),Ep=n("TFOpenAIGPTDoubleHeadsModel"),Mr=l(),Ae=a("div"),v(zn.$$.fragment),zp=l(),Ha=a("p"),Fp=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),qp=l(),Fn=a("p"),Cp=n("This model inherits from "),gs=a("a"),jp=n("TFPreTrainedModel"),Dp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xp=l(),qn=a("p"),Hp=n("This model is also a "),Cn=a("a"),Sp=n("tf.keras.Model"),Lp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Np=l(),v(ho.$$.fragment),Wp=l(),Je=a("div"),v(jn.$$.fragment),Bp=l(),Wt=a("p"),Up=n("The "),_s=a("a"),Rp=n("TFOpenAIGPTDoubleHeadsModel"),Vp=n(" forward method, overrides the "),Sa=a("code"),Kp=n("__call__"),Jp=n(" special method."),Xp=l(),v(mo.$$.fragment),Qp=l(),La=a("p"),Yp=n("Examples:"),Zp=l(),v(Dn.$$.fragment),Er=l(),Bt=a("h2"),uo=a("a"),Na=a("span"),v(xn.$$.fragment),eh=l(),Wa=a("span"),th=n("TFOpenAIGPTForSequenceClassification"),zr=l(),de=a("div"),v(Hn.$$.fragment),oh=l(),Ba=a("p"),nh=n("The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),sh=l(),Ts=a("p"),vs=a("a"),ah=n("TFOpenAIGPTForSequenceClassification"),rh=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),ih=l(),Ze=a("p"),lh=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ua=a("code"),dh=n("pad_token_id"),ch=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ra=a("code"),ph=n("pad_token_id"),hh=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Va=a("code"),mh=n("inputs_embeds"),uh=n(" are passed instead of "),Ka=a("code"),fh=n("input_ids"),gh=n(`, it does the same (take the last value in
each row of the batch).`),_h=l(),Sn=a("p"),Th=n("This model inherits from "),bs=a("a"),vh=n("TFPreTrainedModel"),bh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kh=l(),Ln=a("p"),wh=n("This model is also a "),Nn=a("a"),yh=n("tf.keras.Model"),Ph=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ih=l(),v(fo.$$.fragment),Oh=l(),Me=a("div"),v(Wn.$$.fragment),Ah=l(),Ut=a("p"),$h=n("The "),ks=a("a"),Gh=n("TFOpenAIGPTForSequenceClassification"),Mh=n(" forward method, overrides the "),Ja=a("code"),Eh=n("__call__"),zh=n(" special method."),Fh=l(),v(go.$$.fragment),qh=l(),Xa=a("p"),Ch=n("Example:"),jh=l(),v(Bn.$$.fragment),Dh=l(),v(Un.$$.fragment),this.h()},l(o){const u=cf('[data-svelte="svelte-1phssyn"]',document.head);m=r(u,"META",{name:!0,content:!0}),u.forEach(t),G=d(o),f=r(o,"H1",{class:!0});var Rn=i(f);g=r(Rn,"A",{id:!0,class:!0,href:!0});var Qa=i(g);I=r(Qa,"SPAN",{});var Ya=i(I);b(T.$$.fragment,Ya),Ya.forEach(t),Qa.forEach(t),_=d(Rn),A=r(Rn,"SPAN",{});var Za=i(A);me=s(Za,"OpenAI GPT"),Za.forEach(t),Rn.forEach(t),J=d(o),$=r(o,"H2",{class:!0});var Vn=i($);X=r(Vn,"A",{id:!0,class:!0,href:!0});var er=i(X);D=r(er,"SPAN",{});var tr=i(D);b(Y.$$.fragment,tr),tr.forEach(t),er.forEach(t),ue=d(Vn),x=r(Vn,"SPAN",{});var or=i(x);fe=s(or,"Overview"),or.forEach(t),Vn.forEach(t),ce=d(o),S=r(o,"P",{});var Kn=i(S);q=s(Kn,"OpenAI GPT model was proposed in "),Z=r(Kn,"A",{href:!0,rel:!0});var nr=i(Z);ee=s(nr,"Improving Language Understanding by Generative Pre-Training"),nr.forEach(t),M=s(Kn,`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),Kn.forEach(t),z=d(o),oe=r(o,"P",{});var sr=i(oe);N=s(sr,"The abstract from the paper is the following:"),sr.forEach(t),pe=d(o),ne=r(o,"P",{});var ar=i(ne);H=r(ar,"EM",{});var Sh=i(H);ge=s(Sh,`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),Sh.forEach(t),ar.forEach(t),he=d(o),E=r(o,"P",{});var Lh=i(E);_e=s(Lh,"Tips:"),Lh.forEach(t),L=d(o),Q=r(o,"UL",{});var qr=i(Q);ie=r(qr,"LI",{});var Nh=i(ie);W=s(Nh,`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Nh.forEach(t),Te=d(qr),te=r(qr,"LI",{});var Cr=i(te);C=s(Cr,`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),le=r(Cr,"EM",{});var Wh=i(le);B=s(Wh,"run_generation.py"),Wh.forEach(t),ve=s(Cr," example script."),Cr.forEach(t),qr.forEach(t),p=d(o),O=r(o,"P",{});var xh=i(O);U=r(xh,"A",{href:!0,rel:!0});var Bh=i(U);ze=s(Bh,"Write With Transformer"),Bh.forEach(t),Fe=s(xh,` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),xh.forEach(t),F=d(o),se=r(o,"P",{});var ws=i(se);qe=s(ws,"This model was contributed by "),be=r(ws,"A",{href:!0,rel:!0});var Uh=i(be);j=s(Uh,"thomwolf"),Uh.forEach(t),R=s(ws,". The original code can be found "),ke=r(ws,"A",{href:!0,rel:!0});var Rh=i(ke);Ce=s(Rh,"here"),Rh.forEach(t),V=s(ws,"."),ws.forEach(t),$e=d(o),ye=r(o,"P",{});var Vh=i(ye);we=s(Vh,"Note:"),Vh.forEach(t),Ge=d(o),et=r(o,"P",{});var _o=i(et);_i=s(_o,"If you want to reproduce the original tokenization process of the "),zs=r(_o,"EM",{});var Kh=i(zs);Ti=s(Kh,"OpenAI GPT"),Kh.forEach(t),vi=s(_o," paper, you will need to install "),Fs=r(_o,"CODE",{});var Jh=i(Fs);bi=s(Jh,"ftfy"),Jh.forEach(t),ki=s(_o,`
and `),qs=r(_o,"CODE",{});var Xh=i(qs);wi=s(Xh,"SpaCy"),Xh.forEach(t),yi=s(_o,":"),_o.forEach(t),rr=d(o),b(ko.$$.fragment,o),ir=d(o),We=r(o,"P",{});var dt=i(We);Pi=s(dt,"If you don\u2019t install "),Cs=r(dt,"CODE",{});var Qh=i(Cs);Ii=s(Qh,"ftfy"),Qh.forEach(t),Oi=s(dt," and "),js=r(dt,"CODE",{});var Yh=i(js);Ai=s(Yh,"SpaCy"),Yh.forEach(t),$i=s(dt,", the "),Jn=r(dt,"A",{href:!0});var Zh=i(Jn);Gi=s(Zh,"OpenAIGPTTokenizer"),Zh.forEach(t),Mi=s(dt,` will default to tokenize
using BERT\u2019s `),Ds=r(dt,"CODE",{});var em=i(Ds);Ei=s(em,"BasicTokenizer"),em.forEach(t),zi=s(dt," followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),dt.forEach(t),lr=d(o),yt=r(o,"H2",{class:!0});var jr=i(yt);Rt=r(jr,"A",{id:!0,class:!0,href:!0});var tm=i(Rt);xs=r(tm,"SPAN",{});var om=i(xs);b(wo.$$.fragment,om),om.forEach(t),tm.forEach(t),Fi=d(jr),Hs=r(jr,"SPAN",{});var nm=i(Hs);qi=s(nm,"OpenAIGPTConfig"),nm.forEach(t),jr.forEach(t),dr=d(o),je=r(o,"DIV",{class:!0});var ct=i(je);b(yo.$$.fragment,ct),Ci=d(ct),it=r(ct,"P",{});var To=i(it);ji=s(To,"This is the configuration class to store the configuration of a "),Xn=r(To,"A",{href:!0});var sm=i(Xn);Di=s(sm,"OpenAIGPTModel"),sm.forEach(t),xi=s(To," or a "),Qn=r(To,"A",{href:!0});var am=i(Qn);Hi=s(am,"TFOpenAIGPTModel"),am.forEach(t),Si=s(To,`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
`),Po=r(To,"A",{href:!0,rel:!0});var rm=i(Po);Li=s(rm,"GPT"),rm.forEach(t),Ni=s(To," architecture from OpenAI."),To.forEach(t),Wi=d(ct),Pt=r(ct,"P",{});var ys=i(Pt);Bi=s(ys,"Configuration objects inherit from "),Yn=r(ys,"A",{href:!0});var im=i(Yn);Ui=s(im,"PretrainedConfig"),im.forEach(t),Ri=s(ys,` and can be used to control the model outputs. Read the
documentation from `),Zn=r(ys,"A",{href:!0});var lm=i(Zn);Vi=s(lm,"PretrainedConfig"),lm.forEach(t),Ki=s(ys," for more information."),ys.forEach(t),Ji=d(ct),Ss=r(ct,"P",{});var dm=i(Ss);Xi=s(dm,"Examples:"),dm.forEach(t),Qi=d(ct),b(Io.$$.fragment,ct),ct.forEach(t),cr=d(o),It=r(o,"H2",{class:!0});var Dr=i(It);Vt=r(Dr,"A",{id:!0,class:!0,href:!0});var cm=i(Vt);Ls=r(cm,"SPAN",{});var pm=i(Ls);b(Oo.$$.fragment,pm),pm.forEach(t),cm.forEach(t),Yi=d(Dr),Ns=r(Dr,"SPAN",{});var hm=i(Ns);Zi=s(hm,"OpenAIGPTTokenizer"),hm.forEach(t),Dr.forEach(t),pr=d(o),De=r(o,"DIV",{class:!0});var pt=i(De);b(Ao.$$.fragment,pt),el=d(pt),Ws=r(pt,"P",{});var mm=i(Ws);tl=s(mm,"Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),mm.forEach(t),ol=d(pt),$o=r(pt,"UL",{});var xr=i($o);Bs=r(xr,"LI",{});var um=i(Bs);nl=s(um,"lowercases all inputs,"),um.forEach(t),sl=d(xr),lt=r(xr,"LI",{});var vo=i(lt);al=s(vo,"uses "),Us=r(vo,"CODE",{});var fm=i(Us);rl=s(fm,"SpaCy"),fm.forEach(t),il=s(vo," tokenizer and "),Rs=r(vo,"CODE",{});var gm=i(Rs);ll=s(gm,"ftfy"),gm.forEach(t),dl=s(vo,` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Vs=r(vo,"CODE",{});var _m=i(Vs);cl=s(_m,"BasicTokenizer"),_m.forEach(t),pl=s(vo," if not."),vo.forEach(t),xr.forEach(t),hl=d(pt),Go=r(pt,"P",{});var Hr=i(Go);ml=s(Hr,"This tokenizer inherits from "),es=r(Hr,"A",{href:!0});var Tm=i(es);ul=s(Tm,"PreTrainedTokenizer"),Tm.forEach(t),fl=s(Hr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Hr.forEach(t),gl=d(pt),ts=r(pt,"DIV",{class:!0});var vm=i(ts);b(Mo.$$.fragment,vm),vm.forEach(t),pt.forEach(t),hr=d(o),Ot=r(o,"H2",{class:!0});var Sr=i(Ot);Kt=r(Sr,"A",{id:!0,class:!0,href:!0});var bm=i(Kt);Ks=r(bm,"SPAN",{});var km=i(Ks);b(Eo.$$.fragment,km),km.forEach(t),bm.forEach(t),_l=d(Sr),Js=r(Sr,"SPAN",{});var wm=i(Js);Tl=s(wm,"OpenAIGPTTokenizerFast"),wm.forEach(t),Sr.forEach(t),mr=d(o),Ye=r(o,"DIV",{class:!0});var bo=i(Ye);b(zo.$$.fragment,bo),vl=d(bo),Fo=r(bo,"P",{});var Lr=i(Fo);bl=s(Lr,"Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),Xs=r(Lr,"EM",{});var ym=i(Xs);kl=s(ym,"tokenizers"),ym.forEach(t),wl=s(Lr,` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),Lr.forEach(t),yl=d(bo),qo=r(bo,"UL",{});var Nr=i(qo);Qs=r(Nr,"LI",{});var Pm=i(Qs);Pl=s(Pm,"lower case all inputs"),Pm.forEach(t),Il=d(Nr),Ys=r(Nr,"LI",{});var Im=i(Ys);Ol=s(Im,"uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),Im.forEach(t),Nr.forEach(t),Al=d(bo),Co=r(bo,"P",{});var Wr=i(Co);$l=s(Wr,"This tokenizer inherits from "),os=r(Wr,"A",{href:!0});var Om=i(os);Gl=s(Om,"PreTrainedTokenizerFast"),Om.forEach(t),Ml=s(Wr,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Wr.forEach(t),bo.forEach(t),ur=d(o),At=r(o,"H2",{class:!0});var Br=i(At);Jt=r(Br,"A",{id:!0,class:!0,href:!0});var Am=i(Jt);Zs=r(Am,"SPAN",{});var $m=i(Zs);b(jo.$$.fragment,$m),$m.forEach(t),Am.forEach(t),El=d(Br),ea=r(Br,"SPAN",{});var Gm=i(ea);zl=s(Gm,"OpenAI specific outputs"),Gm.forEach(t),Br.forEach(t),fr=d(o),$t=r(o,"DIV",{class:!0});var Ur=i($t);b(Do.$$.fragment,Ur),Fl=d(Ur),ta=r(Ur,"P",{});var Mm=i(ta);ql=s(Mm,"Base class for outputs of models predicting if two sentences are consecutive or not."),Mm.forEach(t),Ur.forEach(t),gr=d(o),Gt=r(o,"DIV",{class:!0});var Rr=i(Gt);b(xo.$$.fragment,Rr),Cl=d(Rr),oa=r(Rr,"P",{});var Em=i(oa);jl=s(Em,"Base class for outputs of models predicting if two sentences are consecutive or not."),Em.forEach(t),Rr.forEach(t),_r=d(o),Mt=r(o,"H2",{class:!0});var Vr=i(Mt);Xt=r(Vr,"A",{id:!0,class:!0,href:!0});var zm=i(Xt);na=r(zm,"SPAN",{});var Fm=i(na);b(Ho.$$.fragment,Fm),Fm.forEach(t),zm.forEach(t),Dl=d(Vr),sa=r(Vr,"SPAN",{});var qm=i(sa);xl=s(qm,"OpenAIGPTModel"),qm.forEach(t),Vr.forEach(t),Tr=d(o),xe=r(o,"DIV",{class:!0});var ht=i(xe);b(So.$$.fragment,ht),Hl=d(ht),aa=r(ht,"P",{});var Cm=i(aa);Sl=s(Cm,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Cm.forEach(t),Ll=d(ht),Lo=r(ht,"P",{});var Kr=i(Lo);Nl=s(Kr,"This model inherits from "),ns=r(Kr,"A",{href:!0});var jm=i(ns);Wl=s(jm,"PreTrainedModel"),jm.forEach(t),Bl=s(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kr.forEach(t),Ul=d(ht),No=r(ht,"P",{});var Jr=i(No);Rl=s(Jr,"This model is also a PyTorch "),Wo=r(Jr,"A",{href:!0,rel:!0});var Dm=i(Wo);Vl=s(Dm,"torch.nn.Module"),Dm.forEach(t),Kl=s(Jr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jr.forEach(t),Jl=d(ht),Be=r(ht,"DIV",{class:!0});var mt=i(Be);b(Bo.$$.fragment,mt),Xl=d(mt),Et=r(mt,"P",{});var Ps=i(Et);Ql=s(Ps,"The "),ss=r(Ps,"A",{href:!0});var xm=i(ss);Yl=s(xm,"OpenAIGPTModel"),xm.forEach(t),Zl=s(Ps," forward method, overrides the "),ra=r(Ps,"CODE",{});var Hm=i(ra);ed=s(Hm,"__call__"),Hm.forEach(t),td=s(Ps," special method."),Ps.forEach(t),od=d(mt),b(Qt.$$.fragment,mt),nd=d(mt),ia=r(mt,"P",{});var Sm=i(ia);sd=s(Sm,"Example:"),Sm.forEach(t),ad=d(mt),b(Uo.$$.fragment,mt),mt.forEach(t),ht.forEach(t),vr=d(o),zt=r(o,"H2",{class:!0});var Xr=i(zt);Yt=r(Xr,"A",{id:!0,class:!0,href:!0});var Lm=i(Yt);la=r(Lm,"SPAN",{});var Nm=i(la);b(Ro.$$.fragment,Nm),Nm.forEach(t),Lm.forEach(t),rd=d(Xr),da=r(Xr,"SPAN",{});var Wm=i(da);id=s(Wm,"OpenAIGPTLMHeadModel"),Wm.forEach(t),Xr.forEach(t),br=d(o),He=r(o,"DIV",{class:!0});var ut=i(He);b(Vo.$$.fragment,ut),ld=d(ut),ca=r(ut,"P",{});var Bm=i(ca);dd=s(Bm,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Bm.forEach(t),cd=d(ut),Ko=r(ut,"P",{});var Qr=i(Ko);pd=s(Qr,"This model inherits from "),as=r(Qr,"A",{href:!0});var Um=i(as);hd=s(Um,"PreTrainedModel"),Um.forEach(t),md=s(Qr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qr.forEach(t),ud=d(ut),Jo=r(ut,"P",{});var Yr=i(Jo);fd=s(Yr,"This model is also a PyTorch "),Xo=r(Yr,"A",{href:!0,rel:!0});var Rm=i(Xo);gd=s(Rm,"torch.nn.Module"),Rm.forEach(t),_d=s(Yr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yr.forEach(t),Td=d(ut),Ue=r(ut,"DIV",{class:!0});var ft=i(Ue);b(Qo.$$.fragment,ft),vd=d(ft),Ft=r(ft,"P",{});var Is=i(Ft);bd=s(Is,"The "),rs=r(Is,"A",{href:!0});var Vm=i(rs);kd=s(Vm,"OpenAIGPTLMHeadModel"),Vm.forEach(t),wd=s(Is," forward method, overrides the "),pa=r(Is,"CODE",{});var Km=i(pa);yd=s(Km,"__call__"),Km.forEach(t),Pd=s(Is," special method."),Is.forEach(t),Id=d(ft),b(Zt.$$.fragment,ft),Od=d(ft),ha=r(ft,"P",{});var Jm=i(ha);Ad=s(Jm,"Example:"),Jm.forEach(t),$d=d(ft),b(Yo.$$.fragment,ft),ft.forEach(t),ut.forEach(t),kr=d(o),qt=r(o,"H2",{class:!0});var Zr=i(qt);eo=r(Zr,"A",{id:!0,class:!0,href:!0});var Xm=i(eo);ma=r(Xm,"SPAN",{});var Qm=i(ma);b(Zo.$$.fragment,Qm),Qm.forEach(t),Xm.forEach(t),Gd=d(Zr),ua=r(Zr,"SPAN",{});var Ym=i(ua);Md=s(Ym,"OpenAIGPTDoubleHeadsModel"),Ym.forEach(t),Zr.forEach(t),wr=d(o),Se=r(o,"DIV",{class:!0});var gt=i(Se);b(en.$$.fragment,gt),Ed=d(gt),fa=r(gt,"P",{});var Zm=i(fa);zd=s(Zm,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Zm.forEach(t),Fd=d(gt),tn=r(gt,"P",{});var ei=i(tn);qd=s(ei,"This model inherits from "),is=r(ei,"A",{href:!0});var eu=i(is);Cd=s(eu,"PreTrainedModel"),eu.forEach(t),jd=s(ei,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ei.forEach(t),Dd=d(gt),on=r(gt,"P",{});var ti=i(on);xd=s(ti,"This model is also a PyTorch "),nn=r(ti,"A",{href:!0,rel:!0});var tu=i(nn);Hd=s(tu,"torch.nn.Module"),tu.forEach(t),Sd=s(ti,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ti.forEach(t),Ld=d(gt),Re=r(gt,"DIV",{class:!0});var _t=i(Re);b(sn.$$.fragment,_t),Nd=d(_t),Ct=r(_t,"P",{});var Os=i(Ct);Wd=s(Os,"The "),ls=r(Os,"A",{href:!0});var ou=i(ls);Bd=s(ou,"OpenAIGPTDoubleHeadsModel"),ou.forEach(t),Ud=s(Os," forward method, overrides the "),ga=r(Os,"CODE",{});var nu=i(ga);Rd=s(nu,"__call__"),nu.forEach(t),Vd=s(Os," special method."),Os.forEach(t),Kd=d(_t),b(to.$$.fragment,_t),Jd=d(_t),_a=r(_t,"P",{});var su=i(_a);Xd=s(su,"Examples:"),su.forEach(t),Qd=d(_t),b(an.$$.fragment,_t),_t.forEach(t),gt.forEach(t),yr=d(o),jt=r(o,"H2",{class:!0});var oi=i(jt);oo=r(oi,"A",{id:!0,class:!0,href:!0});var au=i(oo);Ta=r(au,"SPAN",{});var ru=i(Ta);b(rn.$$.fragment,ru),ru.forEach(t),au.forEach(t),Yd=d(oi),va=r(oi,"SPAN",{});var iu=i(va);Zd=s(iu,"OpenAIGPTForSequenceClassification"),iu.forEach(t),oi.forEach(t),Pr=d(o),Le=r(o,"DIV",{class:!0});var Tt=i(Le);b(ln.$$.fragment,Tt),ec=d(Tt),Ne=r(Tt,"P",{});var tt=i(Ne);tc=s(tt,`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),ds=r(tt,"A",{href:!0});var lu=i(ds);oc=s(lu,"OpenAIGPTForSequenceClassification"),lu.forEach(t),nc=s(tt,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),ba=r(tt,"CODE",{});var du=i(ba);sc=s(du,"pad_token_id"),du.forEach(t),ac=s(tt,` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),ka=r(tt,"CODE",{});var cu=i(ka);rc=s(cu,"pad_token_id"),cu.forEach(t),ic=s(tt,` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),wa=r(tt,"CODE",{});var pu=i(wa);lc=s(pu,"inputs_embeds"),pu.forEach(t),dc=s(tt," are passed instead of "),ya=r(tt,"CODE",{});var hu=i(ya);cc=s(hu,"input_ids"),hu.forEach(t),pc=s(tt,`, it does the same (take
the last value in each row of the batch).`),tt.forEach(t),hc=d(Tt),dn=r(Tt,"P",{});var ni=i(dn);mc=s(ni,"This model inherits from "),cs=r(ni,"A",{href:!0});var mu=i(cs);uc=s(mu,"PreTrainedModel"),mu.forEach(t),fc=s(ni,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ni.forEach(t),gc=d(Tt),cn=r(Tt,"P",{});var si=i(cn);_c=s(si,"This model is also a PyTorch "),pn=r(si,"A",{href:!0,rel:!0});var uu=i(pn);Tc=s(uu,"torch.nn.Module"),uu.forEach(t),vc=s(si,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),si.forEach(t),bc=d(Tt),ae=r(Tt,"DIV",{class:!0});var Pe=i(ae);b(hn.$$.fragment,Pe),kc=d(Pe),Dt=r(Pe,"P",{});var As=i(Dt);wc=s(As,"The "),ps=r(As,"A",{href:!0});var fu=i(ps);yc=s(fu,"OpenAIGPTForSequenceClassification"),fu.forEach(t),Pc=s(As," forward method, overrides the "),Pa=r(As,"CODE",{});var gu=i(Pa);Ic=s(gu,"__call__"),gu.forEach(t),Oc=s(As," special method."),As.forEach(t),Ac=d(Pe),b(no.$$.fragment,Pe),$c=d(Pe),Ia=r(Pe,"P",{});var _u=i(Ia);Gc=s(_u,"Example of single-label classification:"),_u.forEach(t),Mc=d(Pe),b(mn.$$.fragment,Pe),Ec=d(Pe),b(un.$$.fragment,Pe),zc=d(Pe),Oa=r(Pe,"P",{});var Tu=i(Oa);Fc=s(Tu,"Example of multi-label classification:"),Tu.forEach(t),qc=d(Pe),b(fn.$$.fragment,Pe),Cc=d(Pe),b(gn.$$.fragment,Pe),Pe.forEach(t),Tt.forEach(t),Ir=d(o),xt=r(o,"H2",{class:!0});var ai=i(xt);so=r(ai,"A",{id:!0,class:!0,href:!0});var vu=i(so);Aa=r(vu,"SPAN",{});var bu=i(Aa);b(_n.$$.fragment,bu),bu.forEach(t),vu.forEach(t),jc=d(ai),$a=r(ai,"SPAN",{});var ku=i($a);Dc=s(ku,"TFOpenAIGPTModel"),ku.forEach(t),ai.forEach(t),Or=d(o),Ie=r(o,"DIV",{class:!0});var ot=i(Ie);b(Tn.$$.fragment,ot),xc=d(ot),Ga=r(ot,"P",{});var wu=i(Ga);Hc=s(wu,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),wu.forEach(t),Sc=d(ot),vn=r(ot,"P",{});var ri=i(vn);Lc=s(ri,"This model inherits from "),hs=r(ri,"A",{href:!0});var yu=i(hs);Nc=s(yu,"TFPreTrainedModel"),yu.forEach(t),Wc=s(ri,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ri.forEach(t),Bc=d(ot),bn=r(ot,"P",{});var ii=i(bn);Uc=s(ii,"This model is also a "),kn=r(ii,"A",{href:!0,rel:!0});var Pu=i(kn);Rc=s(Pu,"tf.keras.Model"),Pu.forEach(t),Vc=s(ii,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ii.forEach(t),Kc=d(ot),b(ao.$$.fragment,ot),Jc=d(ot),Ve=r(ot,"DIV",{class:!0});var vt=i(Ve);b(wn.$$.fragment,vt),Xc=d(vt),Ht=r(vt,"P",{});var $s=i(Ht);Qc=s($s,"The "),ms=r($s,"A",{href:!0});var Iu=i(ms);Yc=s(Iu,"TFOpenAIGPTModel"),Iu.forEach(t),Zc=s($s," forward method, overrides the "),Ma=r($s,"CODE",{});var Ou=i(Ma);ep=s(Ou,"__call__"),Ou.forEach(t),tp=s($s," special method."),$s.forEach(t),op=d(vt),b(ro.$$.fragment,vt),np=d(vt),Ea=r(vt,"P",{});var Au=i(Ea);sp=s(Au,"Example:"),Au.forEach(t),ap=d(vt),b(yn.$$.fragment,vt),vt.forEach(t),ot.forEach(t),Ar=d(o),St=r(o,"H2",{class:!0});var li=i(St);io=r(li,"A",{id:!0,class:!0,href:!0});var $u=i(io);za=r($u,"SPAN",{});var Gu=i(za);b(Pn.$$.fragment,Gu),Gu.forEach(t),$u.forEach(t),rp=d(li),Fa=r(li,"SPAN",{});var Mu=i(Fa);ip=s(Mu,"TFOpenAIGPTLMHeadModel"),Mu.forEach(t),li.forEach(t),$r=d(o),Oe=r(o,"DIV",{class:!0});var nt=i(Oe);b(In.$$.fragment,nt),lp=d(nt),qa=r(nt,"P",{});var Eu=i(qa);dp=s(Eu,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Eu.forEach(t),cp=d(nt),On=r(nt,"P",{});var di=i(On);pp=s(di,"This model inherits from "),us=r(di,"A",{href:!0});var zu=i(us);hp=s(zu,"TFPreTrainedModel"),zu.forEach(t),mp=s(di,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),di.forEach(t),up=d(nt),An=r(nt,"P",{});var ci=i(An);fp=s(ci,"This model is also a "),$n=r(ci,"A",{href:!0,rel:!0});var Fu=i($n);gp=s(Fu,"tf.keras.Model"),Fu.forEach(t),_p=s(ci,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ci.forEach(t),Tp=d(nt),b(lo.$$.fragment,nt),vp=d(nt),Ke=r(nt,"DIV",{class:!0});var bt=i(Ke);b(Gn.$$.fragment,bt),bp=d(bt),Lt=r(bt,"P",{});var Gs=i(Lt);kp=s(Gs,"The "),fs=r(Gs,"A",{href:!0});var qu=i(fs);wp=s(qu,"TFOpenAIGPTLMHeadModel"),qu.forEach(t),yp=s(Gs," forward method, overrides the "),Ca=r(Gs,"CODE",{});var Cu=i(Ca);Pp=s(Cu,"__call__"),Cu.forEach(t),Ip=s(Gs," special method."),Gs.forEach(t),Op=d(bt),b(co.$$.fragment,bt),Ap=d(bt),ja=r(bt,"P",{});var ju=i(ja);$p=s(ju,"Example:"),ju.forEach(t),Gp=d(bt),b(Mn.$$.fragment,bt),bt.forEach(t),nt.forEach(t),Gr=d(o),Nt=r(o,"H2",{class:!0});var pi=i(Nt);po=r(pi,"A",{id:!0,class:!0,href:!0});var Du=i(po);Da=r(Du,"SPAN",{});var xu=i(Da);b(En.$$.fragment,xu),xu.forEach(t),Du.forEach(t),Mp=d(pi),xa=r(pi,"SPAN",{});var Hu=i(xa);Ep=s(Hu,"TFOpenAIGPTDoubleHeadsModel"),Hu.forEach(t),pi.forEach(t),Mr=d(o),Ae=r(o,"DIV",{class:!0});var st=i(Ae);b(zn.$$.fragment,st),zp=d(st),Ha=r(st,"P",{});var Su=i(Ha);Fp=s(Su,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Su.forEach(t),qp=d(st),Fn=r(st,"P",{});var hi=i(Fn);Cp=s(hi,"This model inherits from "),gs=r(hi,"A",{href:!0});var Lu=i(gs);jp=s(Lu,"TFPreTrainedModel"),Lu.forEach(t),Dp=s(hi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hi.forEach(t),xp=d(st),qn=r(st,"P",{});var mi=i(qn);Hp=s(mi,"This model is also a "),Cn=r(mi,"A",{href:!0,rel:!0});var Nu=i(Cn);Sp=s(Nu,"tf.keras.Model"),Nu.forEach(t),Lp=s(mi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mi.forEach(t),Np=d(st),b(ho.$$.fragment,st),Wp=d(st),Je=r(st,"DIV",{class:!0});var kt=i(Je);b(jn.$$.fragment,kt),Bp=d(kt),Wt=r(kt,"P",{});var Ms=i(Wt);Up=s(Ms,"The "),_s=r(Ms,"A",{href:!0});var Wu=i(_s);Rp=s(Wu,"TFOpenAIGPTDoubleHeadsModel"),Wu.forEach(t),Vp=s(Ms," forward method, overrides the "),Sa=r(Ms,"CODE",{});var Bu=i(Sa);Kp=s(Bu,"__call__"),Bu.forEach(t),Jp=s(Ms," special method."),Ms.forEach(t),Xp=d(kt),b(mo.$$.fragment,kt),Qp=d(kt),La=r(kt,"P",{});var Uu=i(La);Yp=s(Uu,"Examples:"),Uu.forEach(t),Zp=d(kt),b(Dn.$$.fragment,kt),kt.forEach(t),st.forEach(t),Er=d(o),Bt=r(o,"H2",{class:!0});var ui=i(Bt);uo=r(ui,"A",{id:!0,class:!0,href:!0});var Ru=i(uo);Na=r(Ru,"SPAN",{});var Vu=i(Na);b(xn.$$.fragment,Vu),Vu.forEach(t),Ru.forEach(t),eh=d(ui),Wa=r(ui,"SPAN",{});var Ku=i(Wa);th=s(Ku,"TFOpenAIGPTForSequenceClassification"),Ku.forEach(t),ui.forEach(t),zr=d(o),de=r(o,"DIV",{class:!0});var Ee=i(de);b(Hn.$$.fragment,Ee),oh=d(Ee),Ba=r(Ee,"P",{});var Ju=i(Ba);nh=s(Ju,"The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),Ju.forEach(t),sh=d(Ee),Ts=r(Ee,"P",{});var Hh=i(Ts);vs=r(Hh,"A",{href:!0});var Xu=i(vs);ah=s(Xu,"TFOpenAIGPTForSequenceClassification"),Xu.forEach(t),rh=s(Hh,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),Hh.forEach(t),ih=d(Ee),Ze=r(Ee,"P",{});var wt=i(Ze);lh=s(wt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ua=r(wt,"CODE",{});var Qu=i(Ua);dh=s(Qu,"pad_token_id"),Qu.forEach(t),ch=s(wt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ra=r(wt,"CODE",{});var Yu=i(Ra);ph=s(Yu,"pad_token_id"),Yu.forEach(t),hh=s(wt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Va=r(wt,"CODE",{});var Zu=i(Va);mh=s(Zu,"inputs_embeds"),Zu.forEach(t),uh=s(wt," are passed instead of "),Ka=r(wt,"CODE",{});var ef=i(Ka);fh=s(ef,"input_ids"),ef.forEach(t),gh=s(wt,`, it does the same (take the last value in
each row of the batch).`),wt.forEach(t),_h=d(Ee),Sn=r(Ee,"P",{});var fi=i(Sn);Th=s(fi,"This model inherits from "),bs=r(fi,"A",{href:!0});var tf=i(bs);vh=s(tf,"TFPreTrainedModel"),tf.forEach(t),bh=s(fi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fi.forEach(t),kh=d(Ee),Ln=r(Ee,"P",{});var gi=i(Ln);wh=s(gi,"This model is also a "),Nn=r(gi,"A",{href:!0,rel:!0});var of=i(Nn);yh=s(of,"tf.keras.Model"),of.forEach(t),Ph=s(gi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gi.forEach(t),Ih=d(Ee),b(fo.$$.fragment,Ee),Oh=d(Ee),Me=r(Ee,"DIV",{class:!0});var at=i(Me);b(Wn.$$.fragment,at),Ah=d(at),Ut=r(at,"P",{});var Es=i(Ut);$h=s(Es,"The "),ks=r(Es,"A",{href:!0});var nf=i(ks);Gh=s(nf,"TFOpenAIGPTForSequenceClassification"),nf.forEach(t),Mh=s(Es," forward method, overrides the "),Ja=r(Es,"CODE",{});var sf=i(Ja);Eh=s(sf,"__call__"),sf.forEach(t),zh=s(Es," special method."),Es.forEach(t),Fh=d(at),b(go.$$.fragment,at),qh=d(at),Xa=r(at,"P",{});var af=i(Xa);Ch=s(af,"Example:"),af.forEach(t),jh=d(at),b(Bn.$$.fragment,at),Dh=d(at),b(Un.$$.fragment,at),at.forEach(t),Ee.forEach(t),this.h()},h(){c(m,"name","hf:doc:metadata"),c(m,"content",JSON.stringify(If)),c(g,"id","openai-gpt"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#openai-gpt"),c(f,"class","relative group"),c(X,"id","overview"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#overview"),c($,"class","relative group"),c(Z,"href","https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf"),c(Z,"rel","nofollow"),c(U,"href","https://transformer.huggingface.co/doc/gpt"),c(U,"rel","nofollow"),c(be,"href","https://huggingface.co/thomwolf"),c(be,"rel","nofollow"),c(ke,"href","https://github.com/openai/finetune-transformer-lm"),c(ke,"rel","nofollow"),c(Jn,"href","/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer"),c(Rt,"id","transformers.OpenAIGPTConfig"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.OpenAIGPTConfig"),c(yt,"class","relative group"),c(Xn,"href","/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),c(Qn,"href","/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),c(Po,"href","https://huggingface.co/openai-gpt"),c(Po,"rel","nofollow"),c(Yn,"href","/docs/transformers/pr_16473/en/main_classes/configuration#transformers.PretrainedConfig"),c(Zn,"href","/docs/transformers/pr_16473/en/main_classes/configuration#transformers.PretrainedConfig"),c(je,"class","docstring"),c(Vt,"id","transformers.OpenAIGPTTokenizer"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.OpenAIGPTTokenizer"),c(It,"class","relative group"),c(es,"href","/docs/transformers/pr_16473/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(ts,"class","docstring"),c(De,"class","docstring"),c(Kt,"id","transformers.OpenAIGPTTokenizerFast"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.OpenAIGPTTokenizerFast"),c(Ot,"class","relative group"),c(os,"href","/docs/transformers/pr_16473/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ye,"class","docstring"),c(Jt,"id","transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),c(At,"class","relative group"),c($t,"class","docstring"),c(Gt,"class","docstring"),c(Xt,"id","transformers.OpenAIGPTModel"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.OpenAIGPTModel"),c(Mt,"class","relative group"),c(ns,"href","/docs/transformers/pr_16473/en/main_classes/model#transformers.PreTrainedModel"),c(Wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Wo,"rel","nofollow"),c(ss,"href","/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),c(Be,"class","docstring"),c(xe,"class","docstring"),c(Yt,"id","transformers.OpenAIGPTLMHeadModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.OpenAIGPTLMHeadModel"),c(zt,"class","relative group"),c(as,"href","/docs/transformers/pr_16473/en/main_classes/model#transformers.PreTrainedModel"),c(Xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Xo,"rel","nofollow"),c(rs,"href","/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTLMHeadModel"),c(Ue,"class","docstring"),c(He,"class","docstring"),c(eo,"id","transformers.OpenAIGPTDoubleHeadsModel"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.OpenAIGPTDoubleHeadsModel"),c(qt,"class","relative group"),c(is,"href","/docs/transformers/pr_16473/en/main_classes/model#transformers.PreTrainedModel"),c(nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(nn,"rel","nofollow"),c(ls,"href","/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel"),c(Re,"class","docstring"),c(Se,"class","docstring"),c(oo,"id","transformers.OpenAIGPTForSequenceClassification"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.OpenAIGPTForSequenceClassification"),c(jt,"class","relative group"),c(ds,"href","/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),c(cs,"href","/docs/transformers/pr_16473/en/main_classes/model#transformers.PreTrainedModel"),c(pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(pn,"rel","nofollow"),c(ps,"href","/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),c(ae,"class","docstring"),c(Le,"class","docstring"),c(so,"id","transformers.TFOpenAIGPTModel"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.TFOpenAIGPTModel"),c(xt,"class","relative group"),c(hs,"href","/docs/transformers/pr_16473/en/main_classes/model#transformers.TFPreTrainedModel"),c(kn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(kn,"rel","nofollow"),c(ms,"href","/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),c(Ve,"class","docstring"),c(Ie,"class","docstring"),c(io,"id","transformers.TFOpenAIGPTLMHeadModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFOpenAIGPTLMHeadModel"),c(St,"class","relative group"),c(us,"href","/docs/transformers/pr_16473/en/main_classes/model#transformers.TFPreTrainedModel"),c($n,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c($n,"rel","nofollow"),c(fs,"href","/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.TFOpenAIGPTLMHeadModel"),c(Ke,"class","docstring"),c(Oe,"class","docstring"),c(po,"id","transformers.TFOpenAIGPTDoubleHeadsModel"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.TFOpenAIGPTDoubleHeadsModel"),c(Nt,"class","relative group"),c(gs,"href","/docs/transformers/pr_16473/en/main_classes/model#transformers.TFPreTrainedModel"),c(Cn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Cn,"rel","nofollow"),c(_s,"href","/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.TFOpenAIGPTDoubleHeadsModel"),c(Je,"class","docstring"),c(Ae,"class","docstring"),c(uo,"id","transformers.TFOpenAIGPTForSequenceClassification"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.TFOpenAIGPTForSequenceClassification"),c(Bt,"class","relative group"),c(vs,"href","/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),c(bs,"href","/docs/transformers/pr_16473/en/main_classes/model#transformers.TFPreTrainedModel"),c(Nn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Nn,"rel","nofollow"),c(ks,"href","/docs/transformers/pr_16473/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),c(Me,"class","docstring"),c(de,"class","docstring")},m(o,u){e(document.head,m),h(o,G,u),h(o,f,u),e(f,g),e(g,I),k(T,I,null),e(f,_),e(f,A),e(A,me),h(o,J,u),h(o,$,u),e($,X),e(X,D),k(Y,D,null),e($,ue),e($,x),e(x,fe),h(o,ce,u),h(o,S,u),e(S,q),e(S,Z),e(Z,ee),e(S,M),h(o,z,u),h(o,oe,u),e(oe,N),h(o,pe,u),h(o,ne,u),e(ne,H),e(H,ge),h(o,he,u),h(o,E,u),e(E,_e),h(o,L,u),h(o,Q,u),e(Q,ie),e(ie,W),e(Q,Te),e(Q,te),e(te,C),e(te,le),e(le,B),e(te,ve),h(o,p,u),h(o,O,u),e(O,U),e(U,ze),e(O,Fe),h(o,F,u),h(o,se,u),e(se,qe),e(se,be),e(be,j),e(se,R),e(se,ke),e(ke,Ce),e(se,V),h(o,$e,u),h(o,ye,u),e(ye,we),h(o,Ge,u),h(o,et,u),e(et,_i),e(et,zs),e(zs,Ti),e(et,vi),e(et,Fs),e(Fs,bi),e(et,ki),e(et,qs),e(qs,wi),e(et,yi),h(o,rr,u),k(ko,o,u),h(o,ir,u),h(o,We,u),e(We,Pi),e(We,Cs),e(Cs,Ii),e(We,Oi),e(We,js),e(js,Ai),e(We,$i),e(We,Jn),e(Jn,Gi),e(We,Mi),e(We,Ds),e(Ds,Ei),e(We,zi),h(o,lr,u),h(o,yt,u),e(yt,Rt),e(Rt,xs),k(wo,xs,null),e(yt,Fi),e(yt,Hs),e(Hs,qi),h(o,dr,u),h(o,je,u),k(yo,je,null),e(je,Ci),e(je,it),e(it,ji),e(it,Xn),e(Xn,Di),e(it,xi),e(it,Qn),e(Qn,Hi),e(it,Si),e(it,Po),e(Po,Li),e(it,Ni),e(je,Wi),e(je,Pt),e(Pt,Bi),e(Pt,Yn),e(Yn,Ui),e(Pt,Ri),e(Pt,Zn),e(Zn,Vi),e(Pt,Ki),e(je,Ji),e(je,Ss),e(Ss,Xi),e(je,Qi),k(Io,je,null),h(o,cr,u),h(o,It,u),e(It,Vt),e(Vt,Ls),k(Oo,Ls,null),e(It,Yi),e(It,Ns),e(Ns,Zi),h(o,pr,u),h(o,De,u),k(Ao,De,null),e(De,el),e(De,Ws),e(Ws,tl),e(De,ol),e(De,$o),e($o,Bs),e(Bs,nl),e($o,sl),e($o,lt),e(lt,al),e(lt,Us),e(Us,rl),e(lt,il),e(lt,Rs),e(Rs,ll),e(lt,dl),e(lt,Vs),e(Vs,cl),e(lt,pl),e(De,hl),e(De,Go),e(Go,ml),e(Go,es),e(es,ul),e(Go,fl),e(De,gl),e(De,ts),k(Mo,ts,null),h(o,hr,u),h(o,Ot,u),e(Ot,Kt),e(Kt,Ks),k(Eo,Ks,null),e(Ot,_l),e(Ot,Js),e(Js,Tl),h(o,mr,u),h(o,Ye,u),k(zo,Ye,null),e(Ye,vl),e(Ye,Fo),e(Fo,bl),e(Fo,Xs),e(Xs,kl),e(Fo,wl),e(Ye,yl),e(Ye,qo),e(qo,Qs),e(Qs,Pl),e(qo,Il),e(qo,Ys),e(Ys,Ol),e(Ye,Al),e(Ye,Co),e(Co,$l),e(Co,os),e(os,Gl),e(Co,Ml),h(o,ur,u),h(o,At,u),e(At,Jt),e(Jt,Zs),k(jo,Zs,null),e(At,El),e(At,ea),e(ea,zl),h(o,fr,u),h(o,$t,u),k(Do,$t,null),e($t,Fl),e($t,ta),e(ta,ql),h(o,gr,u),h(o,Gt,u),k(xo,Gt,null),e(Gt,Cl),e(Gt,oa),e(oa,jl),h(o,_r,u),h(o,Mt,u),e(Mt,Xt),e(Xt,na),k(Ho,na,null),e(Mt,Dl),e(Mt,sa),e(sa,xl),h(o,Tr,u),h(o,xe,u),k(So,xe,null),e(xe,Hl),e(xe,aa),e(aa,Sl),e(xe,Ll),e(xe,Lo),e(Lo,Nl),e(Lo,ns),e(ns,Wl),e(Lo,Bl),e(xe,Ul),e(xe,No),e(No,Rl),e(No,Wo),e(Wo,Vl),e(No,Kl),e(xe,Jl),e(xe,Be),k(Bo,Be,null),e(Be,Xl),e(Be,Et),e(Et,Ql),e(Et,ss),e(ss,Yl),e(Et,Zl),e(Et,ra),e(ra,ed),e(Et,td),e(Be,od),k(Qt,Be,null),e(Be,nd),e(Be,ia),e(ia,sd),e(Be,ad),k(Uo,Be,null),h(o,vr,u),h(o,zt,u),e(zt,Yt),e(Yt,la),k(Ro,la,null),e(zt,rd),e(zt,da),e(da,id),h(o,br,u),h(o,He,u),k(Vo,He,null),e(He,ld),e(He,ca),e(ca,dd),e(He,cd),e(He,Ko),e(Ko,pd),e(Ko,as),e(as,hd),e(Ko,md),e(He,ud),e(He,Jo),e(Jo,fd),e(Jo,Xo),e(Xo,gd),e(Jo,_d),e(He,Td),e(He,Ue),k(Qo,Ue,null),e(Ue,vd),e(Ue,Ft),e(Ft,bd),e(Ft,rs),e(rs,kd),e(Ft,wd),e(Ft,pa),e(pa,yd),e(Ft,Pd),e(Ue,Id),k(Zt,Ue,null),e(Ue,Od),e(Ue,ha),e(ha,Ad),e(Ue,$d),k(Yo,Ue,null),h(o,kr,u),h(o,qt,u),e(qt,eo),e(eo,ma),k(Zo,ma,null),e(qt,Gd),e(qt,ua),e(ua,Md),h(o,wr,u),h(o,Se,u),k(en,Se,null),e(Se,Ed),e(Se,fa),e(fa,zd),e(Se,Fd),e(Se,tn),e(tn,qd),e(tn,is),e(is,Cd),e(tn,jd),e(Se,Dd),e(Se,on),e(on,xd),e(on,nn),e(nn,Hd),e(on,Sd),e(Se,Ld),e(Se,Re),k(sn,Re,null),e(Re,Nd),e(Re,Ct),e(Ct,Wd),e(Ct,ls),e(ls,Bd),e(Ct,Ud),e(Ct,ga),e(ga,Rd),e(Ct,Vd),e(Re,Kd),k(to,Re,null),e(Re,Jd),e(Re,_a),e(_a,Xd),e(Re,Qd),k(an,Re,null),h(o,yr,u),h(o,jt,u),e(jt,oo),e(oo,Ta),k(rn,Ta,null),e(jt,Yd),e(jt,va),e(va,Zd),h(o,Pr,u),h(o,Le,u),k(ln,Le,null),e(Le,ec),e(Le,Ne),e(Ne,tc),e(Ne,ds),e(ds,oc),e(Ne,nc),e(Ne,ba),e(ba,sc),e(Ne,ac),e(Ne,ka),e(ka,rc),e(Ne,ic),e(Ne,wa),e(wa,lc),e(Ne,dc),e(Ne,ya),e(ya,cc),e(Ne,pc),e(Le,hc),e(Le,dn),e(dn,mc),e(dn,cs),e(cs,uc),e(dn,fc),e(Le,gc),e(Le,cn),e(cn,_c),e(cn,pn),e(pn,Tc),e(cn,vc),e(Le,bc),e(Le,ae),k(hn,ae,null),e(ae,kc),e(ae,Dt),e(Dt,wc),e(Dt,ps),e(ps,yc),e(Dt,Pc),e(Dt,Pa),e(Pa,Ic),e(Dt,Oc),e(ae,Ac),k(no,ae,null),e(ae,$c),e(ae,Ia),e(Ia,Gc),e(ae,Mc),k(mn,ae,null),e(ae,Ec),k(un,ae,null),e(ae,zc),e(ae,Oa),e(Oa,Fc),e(ae,qc),k(fn,ae,null),e(ae,Cc),k(gn,ae,null),h(o,Ir,u),h(o,xt,u),e(xt,so),e(so,Aa),k(_n,Aa,null),e(xt,jc),e(xt,$a),e($a,Dc),h(o,Or,u),h(o,Ie,u),k(Tn,Ie,null),e(Ie,xc),e(Ie,Ga),e(Ga,Hc),e(Ie,Sc),e(Ie,vn),e(vn,Lc),e(vn,hs),e(hs,Nc),e(vn,Wc),e(Ie,Bc),e(Ie,bn),e(bn,Uc),e(bn,kn),e(kn,Rc),e(bn,Vc),e(Ie,Kc),k(ao,Ie,null),e(Ie,Jc),e(Ie,Ve),k(wn,Ve,null),e(Ve,Xc),e(Ve,Ht),e(Ht,Qc),e(Ht,ms),e(ms,Yc),e(Ht,Zc),e(Ht,Ma),e(Ma,ep),e(Ht,tp),e(Ve,op),k(ro,Ve,null),e(Ve,np),e(Ve,Ea),e(Ea,sp),e(Ve,ap),k(yn,Ve,null),h(o,Ar,u),h(o,St,u),e(St,io),e(io,za),k(Pn,za,null),e(St,rp),e(St,Fa),e(Fa,ip),h(o,$r,u),h(o,Oe,u),k(In,Oe,null),e(Oe,lp),e(Oe,qa),e(qa,dp),e(Oe,cp),e(Oe,On),e(On,pp),e(On,us),e(us,hp),e(On,mp),e(Oe,up),e(Oe,An),e(An,fp),e(An,$n),e($n,gp),e(An,_p),e(Oe,Tp),k(lo,Oe,null),e(Oe,vp),e(Oe,Ke),k(Gn,Ke,null),e(Ke,bp),e(Ke,Lt),e(Lt,kp),e(Lt,fs),e(fs,wp),e(Lt,yp),e(Lt,Ca),e(Ca,Pp),e(Lt,Ip),e(Ke,Op),k(co,Ke,null),e(Ke,Ap),e(Ke,ja),e(ja,$p),e(Ke,Gp),k(Mn,Ke,null),h(o,Gr,u),h(o,Nt,u),e(Nt,po),e(po,Da),k(En,Da,null),e(Nt,Mp),e(Nt,xa),e(xa,Ep),h(o,Mr,u),h(o,Ae,u),k(zn,Ae,null),e(Ae,zp),e(Ae,Ha),e(Ha,Fp),e(Ae,qp),e(Ae,Fn),e(Fn,Cp),e(Fn,gs),e(gs,jp),e(Fn,Dp),e(Ae,xp),e(Ae,qn),e(qn,Hp),e(qn,Cn),e(Cn,Sp),e(qn,Lp),e(Ae,Np),k(ho,Ae,null),e(Ae,Wp),e(Ae,Je),k(jn,Je,null),e(Je,Bp),e(Je,Wt),e(Wt,Up),e(Wt,_s),e(_s,Rp),e(Wt,Vp),e(Wt,Sa),e(Sa,Kp),e(Wt,Jp),e(Je,Xp),k(mo,Je,null),e(Je,Qp),e(Je,La),e(La,Yp),e(Je,Zp),k(Dn,Je,null),h(o,Er,u),h(o,Bt,u),e(Bt,uo),e(uo,Na),k(xn,Na,null),e(Bt,eh),e(Bt,Wa),e(Wa,th),h(o,zr,u),h(o,de,u),k(Hn,de,null),e(de,oh),e(de,Ba),e(Ba,nh),e(de,sh),e(de,Ts),e(Ts,vs),e(vs,ah),e(Ts,rh),e(de,ih),e(de,Ze),e(Ze,lh),e(Ze,Ua),e(Ua,dh),e(Ze,ch),e(Ze,Ra),e(Ra,ph),e(Ze,hh),e(Ze,Va),e(Va,mh),e(Ze,uh),e(Ze,Ka),e(Ka,fh),e(Ze,gh),e(de,_h),e(de,Sn),e(Sn,Th),e(Sn,bs),e(bs,vh),e(Sn,bh),e(de,kh),e(de,Ln),e(Ln,wh),e(Ln,Nn),e(Nn,yh),e(Ln,Ph),e(de,Ih),k(fo,de,null),e(de,Oh),e(de,Me),k(Wn,Me,null),e(Me,Ah),e(Me,Ut),e(Ut,$h),e(Ut,ks),e(ks,Gh),e(Ut,Mh),e(Ut,Ja),e(Ja,Eh),e(Ut,zh),e(Me,Fh),k(go,Me,null),e(Me,qh),e(Me,Xa),e(Xa,Ch),e(Me,jh),k(Bn,Me,null),e(Me,Dh),k(Un,Me,null),Fr=!0},p(o,[u]){const Rn={};u&2&&(Rn.$$scope={dirty:u,ctx:o}),Qt.$set(Rn);const Qa={};u&2&&(Qa.$$scope={dirty:u,ctx:o}),Zt.$set(Qa);const Ya={};u&2&&(Ya.$$scope={dirty:u,ctx:o}),to.$set(Ya);const Za={};u&2&&(Za.$$scope={dirty:u,ctx:o}),no.$set(Za);const Vn={};u&2&&(Vn.$$scope={dirty:u,ctx:o}),ao.$set(Vn);const er={};u&2&&(er.$$scope={dirty:u,ctx:o}),ro.$set(er);const tr={};u&2&&(tr.$$scope={dirty:u,ctx:o}),lo.$set(tr);const or={};u&2&&(or.$$scope={dirty:u,ctx:o}),co.$set(or);const Kn={};u&2&&(Kn.$$scope={dirty:u,ctx:o}),ho.$set(Kn);const nr={};u&2&&(nr.$$scope={dirty:u,ctx:o}),mo.$set(nr);const sr={};u&2&&(sr.$$scope={dirty:u,ctx:o}),fo.$set(sr);const ar={};u&2&&(ar.$$scope={dirty:u,ctx:o}),go.$set(ar)},i(o){Fr||(w(T.$$.fragment,o),w(Y.$$.fragment,o),w(ko.$$.fragment,o),w(wo.$$.fragment,o),w(yo.$$.fragment,o),w(Io.$$.fragment,o),w(Oo.$$.fragment,o),w(Ao.$$.fragment,o),w(Mo.$$.fragment,o),w(Eo.$$.fragment,o),w(zo.$$.fragment,o),w(jo.$$.fragment,o),w(Do.$$.fragment,o),w(xo.$$.fragment,o),w(Ho.$$.fragment,o),w(So.$$.fragment,o),w(Bo.$$.fragment,o),w(Qt.$$.fragment,o),w(Uo.$$.fragment,o),w(Ro.$$.fragment,o),w(Vo.$$.fragment,o),w(Qo.$$.fragment,o),w(Zt.$$.fragment,o),w(Yo.$$.fragment,o),w(Zo.$$.fragment,o),w(en.$$.fragment,o),w(sn.$$.fragment,o),w(to.$$.fragment,o),w(an.$$.fragment,o),w(rn.$$.fragment,o),w(ln.$$.fragment,o),w(hn.$$.fragment,o),w(no.$$.fragment,o),w(mn.$$.fragment,o),w(un.$$.fragment,o),w(fn.$$.fragment,o),w(gn.$$.fragment,o),w(_n.$$.fragment,o),w(Tn.$$.fragment,o),w(ao.$$.fragment,o),w(wn.$$.fragment,o),w(ro.$$.fragment,o),w(yn.$$.fragment,o),w(Pn.$$.fragment,o),w(In.$$.fragment,o),w(lo.$$.fragment,o),w(Gn.$$.fragment,o),w(co.$$.fragment,o),w(Mn.$$.fragment,o),w(En.$$.fragment,o),w(zn.$$.fragment,o),w(ho.$$.fragment,o),w(jn.$$.fragment,o),w(mo.$$.fragment,o),w(Dn.$$.fragment,o),w(xn.$$.fragment,o),w(Hn.$$.fragment,o),w(fo.$$.fragment,o),w(Wn.$$.fragment,o),w(go.$$.fragment,o),w(Bn.$$.fragment,o),w(Un.$$.fragment,o),Fr=!0)},o(o){y(T.$$.fragment,o),y(Y.$$.fragment,o),y(ko.$$.fragment,o),y(wo.$$.fragment,o),y(yo.$$.fragment,o),y(Io.$$.fragment,o),y(Oo.$$.fragment,o),y(Ao.$$.fragment,o),y(Mo.$$.fragment,o),y(Eo.$$.fragment,o),y(zo.$$.fragment,o),y(jo.$$.fragment,o),y(Do.$$.fragment,o),y(xo.$$.fragment,o),y(Ho.$$.fragment,o),y(So.$$.fragment,o),y(Bo.$$.fragment,o),y(Qt.$$.fragment,o),y(Uo.$$.fragment,o),y(Ro.$$.fragment,o),y(Vo.$$.fragment,o),y(Qo.$$.fragment,o),y(Zt.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(sn.$$.fragment,o),y(to.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(hn.$$.fragment,o),y(no.$$.fragment,o),y(mn.$$.fragment,o),y(un.$$.fragment,o),y(fn.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(Tn.$$.fragment,o),y(ao.$$.fragment,o),y(wn.$$.fragment,o),y(ro.$$.fragment,o),y(yn.$$.fragment,o),y(Pn.$$.fragment,o),y(In.$$.fragment,o),y(lo.$$.fragment,o),y(Gn.$$.fragment,o),y(co.$$.fragment,o),y(Mn.$$.fragment,o),y(En.$$.fragment,o),y(zn.$$.fragment,o),y(ho.$$.fragment,o),y(jn.$$.fragment,o),y(mo.$$.fragment,o),y(Dn.$$.fragment,o),y(xn.$$.fragment,o),y(Hn.$$.fragment,o),y(fo.$$.fragment,o),y(Wn.$$.fragment,o),y(go.$$.fragment,o),y(Bn.$$.fragment,o),y(Un.$$.fragment,o),Fr=!1},d(o){t(m),o&&t(G),o&&t(f),P(T),o&&t(J),o&&t($),P(Y),o&&t(ce),o&&t(S),o&&t(z),o&&t(oe),o&&t(pe),o&&t(ne),o&&t(he),o&&t(E),o&&t(L),o&&t(Q),o&&t(p),o&&t(O),o&&t(F),o&&t(se),o&&t($e),o&&t(ye),o&&t(Ge),o&&t(et),o&&t(rr),P(ko,o),o&&t(ir),o&&t(We),o&&t(lr),o&&t(yt),P(wo),o&&t(dr),o&&t(je),P(yo),P(Io),o&&t(cr),o&&t(It),P(Oo),o&&t(pr),o&&t(De),P(Ao),P(Mo),o&&t(hr),o&&t(Ot),P(Eo),o&&t(mr),o&&t(Ye),P(zo),o&&t(ur),o&&t(At),P(jo),o&&t(fr),o&&t($t),P(Do),o&&t(gr),o&&t(Gt),P(xo),o&&t(_r),o&&t(Mt),P(Ho),o&&t(Tr),o&&t(xe),P(So),P(Bo),P(Qt),P(Uo),o&&t(vr),o&&t(zt),P(Ro),o&&t(br),o&&t(He),P(Vo),P(Qo),P(Zt),P(Yo),o&&t(kr),o&&t(qt),P(Zo),o&&t(wr),o&&t(Se),P(en),P(sn),P(to),P(an),o&&t(yr),o&&t(jt),P(rn),o&&t(Pr),o&&t(Le),P(ln),P(hn),P(no),P(mn),P(un),P(fn),P(gn),o&&t(Ir),o&&t(xt),P(_n),o&&t(Or),o&&t(Ie),P(Tn),P(ao),P(wn),P(ro),P(yn),o&&t(Ar),o&&t(St),P(Pn),o&&t($r),o&&t(Oe),P(In),P(lo),P(Gn),P(co),P(Mn),o&&t(Gr),o&&t(Nt),P(En),o&&t(Mr),o&&t(Ae),P(zn),P(ho),P(jn),P(mo),P(Dn),o&&t(Er),o&&t(Bt),P(xn),o&&t(zr),o&&t(de),P(Hn),P(fo),P(Wn),P(go),P(Bn),P(Un)}}}const If={local:"openai-gpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OpenAIGPTConfig",title:"OpenAIGPTConfig"},{local:"transformers.OpenAIGPTTokenizer",title:"OpenAIGPTTokenizer"},{local:"transformers.OpenAIGPTTokenizerFast",title:"OpenAIGPTTokenizerFast"},{local:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",title:"OpenAI specific outputs"},{local:"transformers.OpenAIGPTModel",title:"OpenAIGPTModel"},{local:"transformers.OpenAIGPTLMHeadModel",title:"OpenAIGPTLMHeadModel"},{local:"transformers.OpenAIGPTDoubleHeadsModel",title:"OpenAIGPTDoubleHeadsModel"},{local:"transformers.OpenAIGPTForSequenceClassification",title:"OpenAIGPTForSequenceClassification"},{local:"transformers.TFOpenAIGPTModel",title:"TFOpenAIGPTModel"},{local:"transformers.TFOpenAIGPTLMHeadModel",title:"TFOpenAIGPTLMHeadModel"},{local:"transformers.TFOpenAIGPTDoubleHeadsModel",title:"TFOpenAIGPTDoubleHeadsModel"},{local:"transformers.TFOpenAIGPTForSequenceClassification",title:"TFOpenAIGPTForSequenceClassification"}],title:"OpenAI GPT"};function Of(K){return pf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class zf extends rf{constructor(m){super();lf(this,m,Of,Pf,df,{})}}export{zf as default,If as metadata};
