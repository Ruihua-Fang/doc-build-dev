import{S as rf,i as lf,s as df,e as a,k as l,w as b,t as n,M as pf,c as r,d as t,m as d,a as i,x as y,h as s,b as p,F as e,g as h,y as v,q as k,o as w,B as P,v as cf}from"../../chunks/vendor-6b77c823.js";import{T as rt}from"../../chunks/Tip-39098574.js";import{D as re}from"../../chunks/Docstring-1088f2fb.js";import{C as Xe}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Qe}from"../../chunks/IconCopyLink-7a11ce68.js";function hf(K){let m,G,f,g,O;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),O=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),O=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,O)},d(T){T&&t(m)}}}function mf(K){let m,G,f,g,O;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),O=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),O=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,O)},d(T){T&&t(m)}}}function uf(K){let m,G,f,g,O;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),O=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),O=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,O)},d(T){T&&t(m)}}}function ff(K){let m,G,f,g,O;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),O=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),O=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,O)},d(T){T&&t(m)}}}function gf(K){let m,G,f,g,O,T,_,A,me,J,$,X,D,Y,ue,x,fe,pe,S,q,Z,ee,M,z,oe,N,ce,ne,H,ge,he,E,_e,L,Q,ie,W,Te,te,C,le,U,be;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),O=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),pe=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),he=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),ie=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),le=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){m=r(c,"P",{});var I=i(m);G=s(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),f=d(c),g=r(c,"UL",{});var B=i(g);O=r(B,"LI",{});var ze=i(O);T=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),_=d(B),A=r(B,"LI",{});var Fe=i(A);me=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),B.forEach(t),J=d(c),$=r(c,"P",{});var F=i($);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),ue=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var qe=i(x);fe=s(qe,"model(inputs)"),qe.forEach(t),pe=s(F,"."),F.forEach(t),S=d(c),q=r(c,"P",{});var ye=i(q);Z=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),ee=d(c),M=r(c,"UL",{});var j=i(M);z=r(j,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var ve=i(N);ce=s(ve,"input_ids"),ve.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var Ce=i(H);ge=s(Ce,"model(inputs_ids)"),Ce.forEach(t),R.forEach(t),he=d(j),E=r(j,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var $e=i(L);Q=s($e,"model([input_ids, attention_mask])"),$e.forEach(t),ie=s(V," or "),W=r(V,"CODE",{});var we=i(W);Te=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),V.forEach(t),te=d(j),C=r(j,"LI",{});var ke=i(C);le=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ke,"CODE",{});var Ge=i(U);be=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),ke.forEach(t),j.forEach(t)},m(c,I){h(c,m,I),e(m,G),h(c,f,I),h(c,g,I),e(g,O),e(O,T),e(g,_),e(g,A),e(A,me),h(c,J,I),h(c,$,I),e($,X),e($,D),e(D,Y),e($,ue),e($,x),e(x,fe),e($,pe),h(c,S,I),h(c,q,I),e(q,Z),h(c,ee,I),h(c,M,I),e(M,z),e(z,oe),e(z,N),e(N,ce),e(z,ne),e(z,H),e(H,ge),e(M,he),e(M,E),e(E,_e),e(E,L),e(L,Q),e(E,ie),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,le),e(C,U),e(U,be)},d(c){c&&t(m),c&&t(f),c&&t(g),c&&t(J),c&&t($),c&&t(S),c&&t(q),c&&t(ee),c&&t(M)}}}function _f(K){let m,G,f,g,O;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),O=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),O=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,O)},d(T){T&&t(m)}}}function Tf(K){let m,G,f,g,O,T,_,A,me,J,$,X,D,Y,ue,x,fe,pe,S,q,Z,ee,M,z,oe,N,ce,ne,H,ge,he,E,_e,L,Q,ie,W,Te,te,C,le,U,be;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),O=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),pe=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),he=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),ie=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),le=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){m=r(c,"P",{});var I=i(m);G=s(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),f=d(c),g=r(c,"UL",{});var B=i(g);O=r(B,"LI",{});var ze=i(O);T=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),_=d(B),A=r(B,"LI",{});var Fe=i(A);me=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),B.forEach(t),J=d(c),$=r(c,"P",{});var F=i($);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),ue=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var qe=i(x);fe=s(qe,"model(inputs)"),qe.forEach(t),pe=s(F,"."),F.forEach(t),S=d(c),q=r(c,"P",{});var ye=i(q);Z=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),ee=d(c),M=r(c,"UL",{});var j=i(M);z=r(j,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var ve=i(N);ce=s(ve,"input_ids"),ve.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var Ce=i(H);ge=s(Ce,"model(inputs_ids)"),Ce.forEach(t),R.forEach(t),he=d(j),E=r(j,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var $e=i(L);Q=s($e,"model([input_ids, attention_mask])"),$e.forEach(t),ie=s(V," or "),W=r(V,"CODE",{});var we=i(W);Te=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),V.forEach(t),te=d(j),C=r(j,"LI",{});var ke=i(C);le=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ke,"CODE",{});var Ge=i(U);be=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),ke.forEach(t),j.forEach(t)},m(c,I){h(c,m,I),e(m,G),h(c,f,I),h(c,g,I),e(g,O),e(O,T),e(g,_),e(g,A),e(A,me),h(c,J,I),h(c,$,I),e($,X),e($,D),e(D,Y),e($,ue),e($,x),e(x,fe),e($,pe),h(c,S,I),h(c,q,I),e(q,Z),h(c,ee,I),h(c,M,I),e(M,z),e(z,oe),e(z,N),e(N,ce),e(z,ne),e(z,H),e(H,ge),e(M,he),e(M,E),e(E,_e),e(E,L),e(L,Q),e(E,ie),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,le),e(C,U),e(U,be)},d(c){c&&t(m),c&&t(f),c&&t(g),c&&t(J),c&&t($),c&&t(S),c&&t(q),c&&t(ee),c&&t(M)}}}function bf(K){let m,G,f,g,O;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),O=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),O=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,O)},d(T){T&&t(m)}}}function yf(K){let m,G,f,g,O,T,_,A,me,J,$,X,D,Y,ue,x,fe,pe,S,q,Z,ee,M,z,oe,N,ce,ne,H,ge,he,E,_e,L,Q,ie,W,Te,te,C,le,U,be;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),O=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),pe=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),he=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),ie=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),le=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){m=r(c,"P",{});var I=i(m);G=s(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),f=d(c),g=r(c,"UL",{});var B=i(g);O=r(B,"LI",{});var ze=i(O);T=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),_=d(B),A=r(B,"LI",{});var Fe=i(A);me=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),B.forEach(t),J=d(c),$=r(c,"P",{});var F=i($);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),ue=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var qe=i(x);fe=s(qe,"model(inputs)"),qe.forEach(t),pe=s(F,"."),F.forEach(t),S=d(c),q=r(c,"P",{});var ye=i(q);Z=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),ee=d(c),M=r(c,"UL",{});var j=i(M);z=r(j,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var ve=i(N);ce=s(ve,"input_ids"),ve.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var Ce=i(H);ge=s(Ce,"model(inputs_ids)"),Ce.forEach(t),R.forEach(t),he=d(j),E=r(j,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var $e=i(L);Q=s($e,"model([input_ids, attention_mask])"),$e.forEach(t),ie=s(V," or "),W=r(V,"CODE",{});var we=i(W);Te=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),V.forEach(t),te=d(j),C=r(j,"LI",{});var ke=i(C);le=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ke,"CODE",{});var Ge=i(U);be=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),ke.forEach(t),j.forEach(t)},m(c,I){h(c,m,I),e(m,G),h(c,f,I),h(c,g,I),e(g,O),e(O,T),e(g,_),e(g,A),e(A,me),h(c,J,I),h(c,$,I),e($,X),e($,D),e(D,Y),e($,ue),e($,x),e(x,fe),e($,pe),h(c,S,I),h(c,q,I),e(q,Z),h(c,ee,I),h(c,M,I),e(M,z),e(z,oe),e(z,N),e(N,ce),e(z,ne),e(z,H),e(H,ge),e(M,he),e(M,E),e(E,_e),e(E,L),e(L,Q),e(E,ie),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,le),e(C,U),e(U,be)},d(c){c&&t(m),c&&t(f),c&&t(g),c&&t(J),c&&t($),c&&t(S),c&&t(q),c&&t(ee),c&&t(M)}}}function vf(K){let m,G,f,g,O;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),O=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),O=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,O)},d(T){T&&t(m)}}}function kf(K){let m,G,f,g,O,T,_,A,me,J,$,X,D,Y,ue,x,fe,pe,S,q,Z,ee,M,z,oe,N,ce,ne,H,ge,he,E,_e,L,Q,ie,W,Te,te,C,le,U,be;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),O=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),pe=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),he=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),ie=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),le=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){m=r(c,"P",{});var I=i(m);G=s(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),f=d(c),g=r(c,"UL",{});var B=i(g);O=r(B,"LI",{});var ze=i(O);T=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),_=d(B),A=r(B,"LI",{});var Fe=i(A);me=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),B.forEach(t),J=d(c),$=r(c,"P",{});var F=i($);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),ue=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var qe=i(x);fe=s(qe,"model(inputs)"),qe.forEach(t),pe=s(F,"."),F.forEach(t),S=d(c),q=r(c,"P",{});var ye=i(q);Z=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),ee=d(c),M=r(c,"UL",{});var j=i(M);z=r(j,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var ve=i(N);ce=s(ve,"input_ids"),ve.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var Ce=i(H);ge=s(Ce,"model(inputs_ids)"),Ce.forEach(t),R.forEach(t),he=d(j),E=r(j,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var $e=i(L);Q=s($e,"model([input_ids, attention_mask])"),$e.forEach(t),ie=s(V," or "),W=r(V,"CODE",{});var we=i(W);Te=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),V.forEach(t),te=d(j),C=r(j,"LI",{});var ke=i(C);le=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ke,"CODE",{});var Ge=i(U);be=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),ke.forEach(t),j.forEach(t)},m(c,I){h(c,m,I),e(m,G),h(c,f,I),h(c,g,I),e(g,O),e(O,T),e(g,_),e(g,A),e(A,me),h(c,J,I),h(c,$,I),e($,X),e($,D),e(D,Y),e($,ue),e($,x),e(x,fe),e($,pe),h(c,S,I),h(c,q,I),e(q,Z),h(c,ee,I),h(c,M,I),e(M,z),e(z,oe),e(z,N),e(N,ce),e(z,ne),e(z,H),e(H,ge),e(M,he),e(M,E),e(E,_e),e(E,L),e(L,Q),e(E,ie),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,le),e(C,U),e(U,be)},d(c){c&&t(m),c&&t(f),c&&t(g),c&&t(J),c&&t($),c&&t(S),c&&t(q),c&&t(ee),c&&t(M)}}}function wf(K){let m,G,f,g,O;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),O=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),O=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,O)},d(T){T&&t(m)}}}function Pf(K){let m,G,f,g,O,T,_,A,me,J,$,X,D,Y,ue,x,fe,pe,S,q,Z,ee,M,z,oe,N,ce,ne,H,ge,he,E,_e,L,Q,ie,W,Te,te,C,le,U,be,c,I,B,ze,Fe,F,se,qe,ye,j,R,ve,Ce,V,$e,we,ke,Ge,et,_i,zs,Ti,bi,Fs,yi,vi,qs,ki,wi,rr,vo,ir,We,Pi,Cs,Oi,Ii,js,Ai,$i,Jn,Gi,Mi,Ds,Ei,zi,lr,wt,Rt,xs,ko,Fi,Hs,qi,dr,je,wo,Ci,it,ji,Xn,Di,xi,Qn,Hi,Si,Po,Li,Ni,Wi,Pt,Ui,Yn,Bi,Ri,Zn,Vi,Ki,Ji,Ss,Xi,Qi,Oo,pr,Ot,Vt,Ls,Io,Yi,Ns,Zi,cr,De,Ao,el,Ws,tl,ol,$o,Us,nl,sl,lt,al,Bs,rl,il,Rs,ll,dl,Vs,pl,cl,hl,Go,ml,es,ul,fl,gl,ts,Mo,hr,It,Kt,Ks,Eo,_l,Js,Tl,mr,Ye,zo,bl,Fo,yl,Xs,vl,kl,wl,qo,Qs,Pl,Ol,Ys,Il,Al,Co,$l,os,Gl,Ml,ur,At,Jt,Zs,jo,El,ea,zl,fr,$t,Do,Fl,ta,ql,gr,Gt,xo,Cl,oa,jl,_r,Mt,Xt,na,Ho,Dl,sa,xl,Tr,xe,So,Hl,aa,Sl,Ll,Lo,Nl,ns,Wl,Ul,Bl,No,Rl,Wo,Vl,Kl,Jl,Ue,Uo,Xl,Et,Ql,ss,Yl,Zl,ra,ed,td,od,Qt,nd,ia,sd,ad,Bo,br,zt,Yt,la,Ro,rd,da,id,yr,He,Vo,ld,pa,dd,pd,Ko,cd,as,hd,md,ud,Jo,fd,Xo,gd,_d,Td,Be,Qo,bd,Ft,yd,rs,vd,kd,ca,wd,Pd,Od,Zt,Id,ha,Ad,$d,Yo,vr,qt,eo,ma,Zo,Gd,ua,Md,kr,Se,en,Ed,fa,zd,Fd,tn,qd,is,Cd,jd,Dd,on,xd,nn,Hd,Sd,Ld,Re,sn,Nd,Ct,Wd,ls,Ud,Bd,ga,Rd,Vd,Kd,to,Jd,_a,Xd,Qd,an,wr,jt,oo,Ta,rn,Yd,ba,Zd,Pr,Le,ln,ep,Ne,tp,ds,op,np,ya,sp,ap,va,rp,ip,ka,lp,dp,wa,pp,cp,hp,dn,mp,ps,up,fp,gp,pn,_p,cn,Tp,bp,yp,ae,hn,vp,Dt,kp,cs,wp,Pp,Pa,Op,Ip,Ap,no,$p,Oa,Gp,Mp,mn,Ep,un,zp,Ia,Fp,qp,fn,Cp,gn,Or,xt,so,Aa,_n,jp,$a,Dp,Ir,Oe,Tn,xp,Ga,Hp,Sp,bn,Lp,hs,Np,Wp,Up,yn,Bp,vn,Rp,Vp,Kp,ao,Jp,Ve,kn,Xp,Ht,Qp,ms,Yp,Zp,Ma,ec,tc,oc,ro,nc,Ea,sc,ac,wn,Ar,St,io,za,Pn,rc,Fa,ic,$r,Ie,On,lc,qa,dc,pc,In,cc,us,hc,mc,uc,An,fc,$n,gc,_c,Tc,lo,bc,Ke,Gn,yc,Lt,vc,fs,kc,wc,Ca,Pc,Oc,Ic,po,Ac,ja,$c,Gc,Mn,Gr,Nt,co,Da,En,Mc,xa,Ec,Mr,Ae,zn,zc,Ha,Fc,qc,Fn,Cc,gs,jc,Dc,xc,qn,Hc,Cn,Sc,Lc,Nc,ho,Wc,Je,jn,Uc,Wt,Bc,_s,Rc,Vc,Sa,Kc,Jc,Xc,mo,Qc,La,Yc,Zc,Dn,Er,Ut,uo,Na,xn,eh,Wa,th,zr,de,Hn,oh,Ua,nh,sh,Ts,bs,ah,rh,ih,Ze,lh,Ba,dh,ph,Ra,ch,hh,Va,mh,uh,Ka,fh,gh,_h,Sn,Th,ys,bh,yh,vh,Ln,kh,Nn,wh,Ph,Oh,fo,Ih,Me,Wn,Ah,Bt,$h,vs,Gh,Mh,Ja,Eh,zh,Fh,go,qh,Xa,Ch,jh,Un,Dh,Bn,Fr;return T=new Qe({}),Y=new Qe({}),vo=new Xe({props:{code:`pip install spacy ftfy==4.4.3
python -m spacy download en`,highlighted:`pip install spacy ftfy==4.4.3
python -m spacy download en`}}),ko=new Qe({}),wo=new re({props:{name:"class transformers.OpenAIGPTConfig",anchor:"transformers.OpenAIGPTConfig",parameters:[{name:"vocab_size",val:" = 40478"},{name:"n_positions",val:" = 512"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"afn",val:" = 'gelu'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"predict_special_tokens",val:" = True"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 40478) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTModel">OpenAIGPTModel</a> or <a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel">TFOpenAIGPTModel</a>.`,name:"vocab_size"},{anchor:"transformers.OpenAIGPTConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.OpenAIGPTConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.OpenAIGPTConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.OpenAIGPTConfig.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.OpenAIGPTConfig.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.OpenAIGPTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/configuration_openai.py#L27"}}),Oo=new Xe({props:{code:`from transformers import OpenAIGPTConfig, OpenAIGPTModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Io=new Qe({}),Ao=new re({props:{name:"class transformers.OpenAIGPTTokenizer",anchor:"transformers.OpenAIGPTTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/tokenization_openai.py#L73"}}),Mo=new re({props:{name:"save_vocabulary",anchor:"transformers.OpenAIGPTTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/tokenization_openai.py#L206"}}),Eo=new Qe({}),zo=new re({props:{name:"class transformers.OpenAIGPTTokenizerFast",anchor:"transformers.OpenAIGPTTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/tokenization_openai_fast.py#L40"}}),jo=new Qe({}),Do=new re({props:{name:"class transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mc_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_loss",description:`<strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) &#x2014;
Multiple choice classification loss.`,name:"mc_loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/modeling_openai.py#L296"}}),xo=new re({props:{name:"class transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"mc_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/modeling_tf_openai.py#L374"}}),Ho=new Qe({}),So=new re({props:{name:"class transformers.OpenAIGPTModel",anchor:"transformers.OpenAIGPTModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16906/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/modeling_openai.py#L400"}}),Uo=new re({props:{name:"forward",anchor:"transformers.OpenAIGPTModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OpenAIGPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16906/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16906/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16906/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/modeling_openai.py#L426",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16906/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_16906/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qt=new rt({props:{$$slots:{default:[hf]},$$scope:{ctx:K}}}),Bo=new Xe({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ro=new Qe({}),Vo=new re({props:{name:"class transformers.OpenAIGPTLMHeadModel",anchor:"transformers.OpenAIGPTLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16906/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/modeling_openai.py#L531"}}),Qo=new re({props:{name:"forward",anchor:"transformers.OpenAIGPTLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16906/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16906/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16906/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/modeling_openai.py#L546",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16906/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_16906/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Zo=new Qe({}),en=new re({props:{name:"class transformers.OpenAIGPTDoubleHeadsModel",anchor:"transformers.OpenAIGPTDoubleHeadsModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16906/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/modeling_openai.py#L618"}}),sn=new re({props:{name:"forward",anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_token_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"mc_labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16906/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16906/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16906/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-1, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code> are
ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_labels",description:`<strong>mc_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"mc_labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/modeling_openai.py#L636",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
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
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_logits = outputs.mc_logits`}}),rn=new Qe({}),ln=new re({props:{name:"class transformers.OpenAIGPTForSequenceClassification",anchor:"transformers.OpenAIGPTForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16906/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/modeling_openai.py#L744"}}),hn=new re({props:{name:"forward",anchor:"transformers.OpenAIGPTForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16906/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16906/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16906/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/modeling_openai.py#L754",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16906/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_16906/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
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
model = OpenAIGPTForSequenceClassification.from_pretrained(
    "openai-gpt", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;openai-gpt&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),_n=new Qe({}),Tn=new re({props:{name:"class transformers.TFOpenAIGPTModel",anchor:"transformers.TFOpenAIGPTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16906/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/modeling_tf_openai.py#L499"}}),ao=new rt({props:{$$slots:{default:[gf]},$$scope:{ctx:K}}}),kn=new re({props:{name:"call",anchor:"transformers.TFOpenAIGPTModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16906/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16906/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16906/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/modeling_tf_openai.py#L504",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16906/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_16906/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ro=new rt({props:{$$slots:{default:[_f]},$$scope:{ctx:K}}}),wn=new Xe({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Pn=new Qe({}),On=new re({props:{name:"class transformers.TFOpenAIGPTLMHeadModel",anchor:"transformers.TFOpenAIGPTLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16906/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/modeling_tf_openai.py#L555"}}),lo=new rt({props:{$$slots:{default:[Tf]},$$scope:{ctx:K}}}),Gn=new re({props:{name:"call",anchor:"transformers.TFOpenAIGPTLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16906/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16906/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16906/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/modeling_tf_openai.py#L566",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16906/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_16906/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),po=new rt({props:{$$slots:{default:[bf]},$$scope:{ctx:K}}}),Mn=new Xe({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),En=new Qe({}),zn=new re({props:{name:"class transformers.TFOpenAIGPTDoubleHeadsModel",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16906/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/modeling_tf_openai.py#L644"}}),ho=new rt({props:{$$slots:{default:[yf]},$$scope:{ctx:K}}}),jn=new re({props:{name:"call",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mc_token_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16906/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16906/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16906/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/modeling_tf_openai.py#L653",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mo=new rt({props:{$$slots:{default:[vf]},$$scope:{ctx:K}}}),Dn=new Xe({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_prediction_scores, mc_prediction_scores = outputs[:<span class="hljs-number">2</span>]`}}),xn=new Qe({}),Hn=new re({props:{name:"class transformers.TFOpenAIGPTForSequenceClassification",anchor:"transformers.TFOpenAIGPTForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16906/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/modeling_tf_openai.py#L779"}}),fo=new rt({props:{$$slots:{default:[kf]},$$scope:{ctx:K}}}),Wn=new re({props:{name:"call",anchor:"transformers.TFOpenAIGPTForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16906/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16906/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16906/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16906/src/transformers/models/openai/modeling_tf_openai.py#L791",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16906/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_16906/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),go=new rt({props:{$$slots:{default:[wf]},$$scope:{ctx:K}}}),Un=new Xe({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
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
`}}),Bn=new Xe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){m=a("meta"),G=l(),f=a("h1"),g=a("a"),O=a("span"),b(T.$$.fragment),_=l(),A=a("span"),me=n("OpenAI GPT"),J=l(),$=a("h2"),X=a("a"),D=a("span"),b(Y.$$.fragment),ue=l(),x=a("span"),fe=n("Overview"),pe=l(),S=a("p"),q=n("OpenAI GPT model was proposed in "),Z=a("a"),ee=n("Improving Language Understanding by Generative Pre-Training"),M=n(`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),z=l(),oe=a("p"),N=n("The abstract from the paper is the following:"),ce=l(),ne=a("p"),H=a("em"),ge=n(`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
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
observed in the `),le=a("em"),U=n("run_generation.py"),be=n(" example script."),c=l(),I=a("p"),B=a("a"),ze=n("Write With Transformer"),Fe=n(` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),F=l(),se=a("p"),qe=n("This model was contributed by "),ye=a("a"),j=n("thomwolf"),R=n(". The original code can be found "),ve=a("a"),Ce=n("here"),V=n("."),$e=l(),we=a("p"),ke=n("Note:"),Ge=l(),et=a("p"),_i=n("If you want to reproduce the original tokenization process of the "),zs=a("em"),Ti=n("OpenAI GPT"),bi=n(" paper, you will need to install "),Fs=a("code"),yi=n("ftfy"),vi=n(`
and `),qs=a("code"),ki=n("SpaCy"),wi=n(":"),rr=l(),b(vo.$$.fragment),ir=l(),We=a("p"),Pi=n("If you don\u2019t install "),Cs=a("code"),Oi=n("ftfy"),Ii=n(" and "),js=a("code"),Ai=n("SpaCy"),$i=n(", the "),Jn=a("a"),Gi=n("OpenAIGPTTokenizer"),Mi=n(` will default to tokenize
using BERT\u2019s `),Ds=a("code"),Ei=n("BasicTokenizer"),zi=n(" followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),lr=l(),wt=a("h2"),Rt=a("a"),xs=a("span"),b(ko.$$.fragment),Fi=l(),Hs=a("span"),qi=n("OpenAIGPTConfig"),dr=l(),je=a("div"),b(wo.$$.fragment),Ci=l(),it=a("p"),ji=n("This is the configuration class to store the configuration of a "),Xn=a("a"),Di=n("OpenAIGPTModel"),xi=n(" or a "),Qn=a("a"),Hi=n("TFOpenAIGPTModel"),Si=n(`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
`),Po=a("a"),Li=n("GPT"),Ni=n(" architecture from OpenAI."),Wi=l(),Pt=a("p"),Ui=n("Configuration objects inherit from "),Yn=a("a"),Bi=n("PretrainedConfig"),Ri=n(` and can be used to control the model outputs. Read the
documentation from `),Zn=a("a"),Vi=n("PretrainedConfig"),Ki=n(" for more information."),Ji=l(),Ss=a("p"),Xi=n("Examples:"),Qi=l(),b(Oo.$$.fragment),pr=l(),Ot=a("h2"),Vt=a("a"),Ls=a("span"),b(Io.$$.fragment),Yi=l(),Ns=a("span"),Zi=n("OpenAIGPTTokenizer"),cr=l(),De=a("div"),b(Ao.$$.fragment),el=l(),Ws=a("p"),tl=n("Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),ol=l(),$o=a("ul"),Us=a("li"),nl=n("lowercases all inputs,"),sl=l(),lt=a("li"),al=n("uses "),Bs=a("code"),rl=n("SpaCy"),il=n(" tokenizer and "),Rs=a("code"),ll=n("ftfy"),dl=n(` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Vs=a("code"),pl=n("BasicTokenizer"),cl=n(" if not."),hl=l(),Go=a("p"),ml=n("This tokenizer inherits from "),es=a("a"),ul=n("PreTrainedTokenizer"),fl=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),gl=l(),ts=a("div"),b(Mo.$$.fragment),hr=l(),It=a("h2"),Kt=a("a"),Ks=a("span"),b(Eo.$$.fragment),_l=l(),Js=a("span"),Tl=n("OpenAIGPTTokenizerFast"),mr=l(),Ye=a("div"),b(zo.$$.fragment),bl=l(),Fo=a("p"),yl=n("Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),Xs=a("em"),vl=n("tokenizers"),kl=n(` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),wl=l(),qo=a("ul"),Qs=a("li"),Pl=n("lower case all inputs"),Ol=l(),Ys=a("li"),Il=n("uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),Al=l(),Co=a("p"),$l=n("This tokenizer inherits from "),os=a("a"),Gl=n("PreTrainedTokenizerFast"),Ml=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ur=l(),At=a("h2"),Jt=a("a"),Zs=a("span"),b(jo.$$.fragment),El=l(),ea=a("span"),zl=n("OpenAI specific outputs"),fr=l(),$t=a("div"),b(Do.$$.fragment),Fl=l(),ta=a("p"),ql=n("Base class for outputs of models predicting if two sentences are consecutive or not."),gr=l(),Gt=a("div"),b(xo.$$.fragment),Cl=l(),oa=a("p"),jl=n("Base class for outputs of models predicting if two sentences are consecutive or not."),_r=l(),Mt=a("h2"),Xt=a("a"),na=a("span"),b(Ho.$$.fragment),Dl=l(),sa=a("span"),xl=n("OpenAIGPTModel"),Tr=l(),xe=a("div"),b(So.$$.fragment),Hl=l(),aa=a("p"),Sl=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Ll=l(),Lo=a("p"),Nl=n("This model inherits from "),ns=a("a"),Wl=n("PreTrainedModel"),Ul=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bl=l(),No=a("p"),Rl=n("This model is also a PyTorch "),Wo=a("a"),Vl=n("torch.nn.Module"),Kl=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jl=l(),Ue=a("div"),b(Uo.$$.fragment),Xl=l(),Et=a("p"),Ql=n("The "),ss=a("a"),Yl=n("OpenAIGPTModel"),Zl=n(" forward method, overrides the "),ra=a("code"),ed=n("__call__"),td=n(" special method."),od=l(),b(Qt.$$.fragment),nd=l(),ia=a("p"),sd=n("Example:"),ad=l(),b(Bo.$$.fragment),br=l(),zt=a("h2"),Yt=a("a"),la=a("span"),b(Ro.$$.fragment),rd=l(),da=a("span"),id=n("OpenAIGPTLMHeadModel"),yr=l(),He=a("div"),b(Vo.$$.fragment),ld=l(),pa=a("p"),dd=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),pd=l(),Ko=a("p"),cd=n("This model inherits from "),as=a("a"),hd=n("PreTrainedModel"),md=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ud=l(),Jo=a("p"),fd=n("This model is also a PyTorch "),Xo=a("a"),gd=n("torch.nn.Module"),_d=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Td=l(),Be=a("div"),b(Qo.$$.fragment),bd=l(),Ft=a("p"),yd=n("The "),rs=a("a"),vd=n("OpenAIGPTLMHeadModel"),kd=n(" forward method, overrides the "),ca=a("code"),wd=n("__call__"),Pd=n(" special method."),Od=l(),b(Zt.$$.fragment),Id=l(),ha=a("p"),Ad=n("Example:"),$d=l(),b(Yo.$$.fragment),vr=l(),qt=a("h2"),eo=a("a"),ma=a("span"),b(Zo.$$.fragment),Gd=l(),ua=a("span"),Md=n("OpenAIGPTDoubleHeadsModel"),kr=l(),Se=a("div"),b(en.$$.fragment),Ed=l(),fa=a("p"),zd=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Fd=l(),tn=a("p"),qd=n("This model inherits from "),is=a("a"),Cd=n("PreTrainedModel"),jd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dd=l(),on=a("p"),xd=n("This model is also a PyTorch "),nn=a("a"),Hd=n("torch.nn.Module"),Sd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ld=l(),Re=a("div"),b(sn.$$.fragment),Nd=l(),Ct=a("p"),Wd=n("The "),ls=a("a"),Ud=n("OpenAIGPTDoubleHeadsModel"),Bd=n(" forward method, overrides the "),ga=a("code"),Rd=n("__call__"),Vd=n(" special method."),Kd=l(),b(to.$$.fragment),Jd=l(),_a=a("p"),Xd=n("Examples:"),Qd=l(),b(an.$$.fragment),wr=l(),jt=a("h2"),oo=a("a"),Ta=a("span"),b(rn.$$.fragment),Yd=l(),ba=a("span"),Zd=n("OpenAIGPTForSequenceClassification"),Pr=l(),Le=a("div"),b(ln.$$.fragment),ep=l(),Ne=a("p"),tp=n(`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),ds=a("a"),op=n("OpenAIGPTForSequenceClassification"),np=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),ya=a("code"),sp=n("pad_token_id"),ap=n(` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),va=a("code"),rp=n("pad_token_id"),ip=n(` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),ka=a("code"),lp=n("inputs_embeds"),dp=n(" are passed instead of "),wa=a("code"),pp=n("input_ids"),cp=n(`, it does the same (take
the last value in each row of the batch).`),hp=l(),dn=a("p"),mp=n("This model inherits from "),ps=a("a"),up=n("PreTrainedModel"),fp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gp=l(),pn=a("p"),_p=n("This model is also a PyTorch "),cn=a("a"),Tp=n("torch.nn.Module"),bp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yp=l(),ae=a("div"),b(hn.$$.fragment),vp=l(),Dt=a("p"),kp=n("The "),cs=a("a"),wp=n("OpenAIGPTForSequenceClassification"),Pp=n(" forward method, overrides the "),Pa=a("code"),Op=n("__call__"),Ip=n(" special method."),Ap=l(),b(no.$$.fragment),$p=l(),Oa=a("p"),Gp=n("Example of single-label classification:"),Mp=l(),b(mn.$$.fragment),Ep=l(),b(un.$$.fragment),zp=l(),Ia=a("p"),Fp=n("Example of multi-label classification:"),qp=l(),b(fn.$$.fragment),Cp=l(),b(gn.$$.fragment),Or=l(),xt=a("h2"),so=a("a"),Aa=a("span"),b(_n.$$.fragment),jp=l(),$a=a("span"),Dp=n("TFOpenAIGPTModel"),Ir=l(),Oe=a("div"),b(Tn.$$.fragment),xp=l(),Ga=a("p"),Hp=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Sp=l(),bn=a("p"),Lp=n("This model inherits from "),hs=a("a"),Np=n("TFPreTrainedModel"),Wp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Up=l(),yn=a("p"),Bp=n("This model is also a "),vn=a("a"),Rp=n("tf.keras.Model"),Vp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kp=l(),b(ao.$$.fragment),Jp=l(),Ve=a("div"),b(kn.$$.fragment),Xp=l(),Ht=a("p"),Qp=n("The "),ms=a("a"),Yp=n("TFOpenAIGPTModel"),Zp=n(" forward method, overrides the "),Ma=a("code"),ec=n("__call__"),tc=n(" special method."),oc=l(),b(ro.$$.fragment),nc=l(),Ea=a("p"),sc=n("Example:"),ac=l(),b(wn.$$.fragment),Ar=l(),St=a("h2"),io=a("a"),za=a("span"),b(Pn.$$.fragment),rc=l(),Fa=a("span"),ic=n("TFOpenAIGPTLMHeadModel"),$r=l(),Ie=a("div"),b(On.$$.fragment),lc=l(),qa=a("p"),dc=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),pc=l(),In=a("p"),cc=n("This model inherits from "),us=a("a"),hc=n("TFPreTrainedModel"),mc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uc=l(),An=a("p"),fc=n("This model is also a "),$n=a("a"),gc=n("tf.keras.Model"),_c=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tc=l(),b(lo.$$.fragment),bc=l(),Ke=a("div"),b(Gn.$$.fragment),yc=l(),Lt=a("p"),vc=n("The "),fs=a("a"),kc=n("TFOpenAIGPTLMHeadModel"),wc=n(" forward method, overrides the "),Ca=a("code"),Pc=n("__call__"),Oc=n(" special method."),Ic=l(),b(po.$$.fragment),Ac=l(),ja=a("p"),$c=n("Example:"),Gc=l(),b(Mn.$$.fragment),Gr=l(),Nt=a("h2"),co=a("a"),Da=a("span"),b(En.$$.fragment),Mc=l(),xa=a("span"),Ec=n("TFOpenAIGPTDoubleHeadsModel"),Mr=l(),Ae=a("div"),b(zn.$$.fragment),zc=l(),Ha=a("p"),Fc=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),qc=l(),Fn=a("p"),Cc=n("This model inherits from "),gs=a("a"),jc=n("TFPreTrainedModel"),Dc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xc=l(),qn=a("p"),Hc=n("This model is also a "),Cn=a("a"),Sc=n("tf.keras.Model"),Lc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nc=l(),b(ho.$$.fragment),Wc=l(),Je=a("div"),b(jn.$$.fragment),Uc=l(),Wt=a("p"),Bc=n("The "),_s=a("a"),Rc=n("TFOpenAIGPTDoubleHeadsModel"),Vc=n(" forward method, overrides the "),Sa=a("code"),Kc=n("__call__"),Jc=n(" special method."),Xc=l(),b(mo.$$.fragment),Qc=l(),La=a("p"),Yc=n("Examples:"),Zc=l(),b(Dn.$$.fragment),Er=l(),Ut=a("h2"),uo=a("a"),Na=a("span"),b(xn.$$.fragment),eh=l(),Wa=a("span"),th=n("TFOpenAIGPTForSequenceClassification"),zr=l(),de=a("div"),b(Hn.$$.fragment),oh=l(),Ua=a("p"),nh=n("The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),sh=l(),Ts=a("p"),bs=a("a"),ah=n("TFOpenAIGPTForSequenceClassification"),rh=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),ih=l(),Ze=a("p"),lh=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ba=a("code"),dh=n("pad_token_id"),ph=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ra=a("code"),ch=n("pad_token_id"),hh=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Va=a("code"),mh=n("inputs_embeds"),uh=n(" are passed instead of "),Ka=a("code"),fh=n("input_ids"),gh=n(`, it does the same (take the last value in
each row of the batch).`),_h=l(),Sn=a("p"),Th=n("This model inherits from "),ys=a("a"),bh=n("TFPreTrainedModel"),yh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vh=l(),Ln=a("p"),kh=n("This model is also a "),Nn=a("a"),wh=n("tf.keras.Model"),Ph=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Oh=l(),b(fo.$$.fragment),Ih=l(),Me=a("div"),b(Wn.$$.fragment),Ah=l(),Bt=a("p"),$h=n("The "),vs=a("a"),Gh=n("TFOpenAIGPTForSequenceClassification"),Mh=n(" forward method, overrides the "),Ja=a("code"),Eh=n("__call__"),zh=n(" special method."),Fh=l(),b(go.$$.fragment),qh=l(),Xa=a("p"),Ch=n("Example:"),jh=l(),b(Un.$$.fragment),Dh=l(),b(Bn.$$.fragment),this.h()},l(o){const u=pf('[data-svelte="svelte-1phssyn"]',document.head);m=r(u,"META",{name:!0,content:!0}),u.forEach(t),G=d(o),f=r(o,"H1",{class:!0});var Rn=i(f);g=r(Rn,"A",{id:!0,class:!0,href:!0});var Qa=i(g);O=r(Qa,"SPAN",{});var Ya=i(O);y(T.$$.fragment,Ya),Ya.forEach(t),Qa.forEach(t),_=d(Rn),A=r(Rn,"SPAN",{});var Za=i(A);me=s(Za,"OpenAI GPT"),Za.forEach(t),Rn.forEach(t),J=d(o),$=r(o,"H2",{class:!0});var Vn=i($);X=r(Vn,"A",{id:!0,class:!0,href:!0});var er=i(X);D=r(er,"SPAN",{});var tr=i(D);y(Y.$$.fragment,tr),tr.forEach(t),er.forEach(t),ue=d(Vn),x=r(Vn,"SPAN",{});var or=i(x);fe=s(or,"Overview"),or.forEach(t),Vn.forEach(t),pe=d(o),S=r(o,"P",{});var Kn=i(S);q=s(Kn,"OpenAI GPT model was proposed in "),Z=r(Kn,"A",{href:!0,rel:!0});var nr=i(Z);ee=s(nr,"Improving Language Understanding by Generative Pre-Training"),nr.forEach(t),M=s(Kn,`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),Kn.forEach(t),z=d(o),oe=r(o,"P",{});var sr=i(oe);N=s(sr,"The abstract from the paper is the following:"),sr.forEach(t),ce=d(o),ne=r(o,"P",{});var ar=i(ne);H=r(ar,"EM",{});var Sh=i(H);ge=s(Sh,`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
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
observed in the `),le=r(Cr,"EM",{});var Wh=i(le);U=s(Wh,"run_generation.py"),Wh.forEach(t),be=s(Cr," example script."),Cr.forEach(t),qr.forEach(t),c=d(o),I=r(o,"P",{});var xh=i(I);B=r(xh,"A",{href:!0,rel:!0});var Uh=i(B);ze=s(Uh,"Write With Transformer"),Uh.forEach(t),Fe=s(xh,` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),xh.forEach(t),F=d(o),se=r(o,"P",{});var ks=i(se);qe=s(ks,"This model was contributed by "),ye=r(ks,"A",{href:!0,rel:!0});var Bh=i(ye);j=s(Bh,"thomwolf"),Bh.forEach(t),R=s(ks,". The original code can be found "),ve=r(ks,"A",{href:!0,rel:!0});var Rh=i(ve);Ce=s(Rh,"here"),Rh.forEach(t),V=s(ks,"."),ks.forEach(t),$e=d(o),we=r(o,"P",{});var Vh=i(we);ke=s(Vh,"Note:"),Vh.forEach(t),Ge=d(o),et=r(o,"P",{});var _o=i(et);_i=s(_o,"If you want to reproduce the original tokenization process of the "),zs=r(_o,"EM",{});var Kh=i(zs);Ti=s(Kh,"OpenAI GPT"),Kh.forEach(t),bi=s(_o," paper, you will need to install "),Fs=r(_o,"CODE",{});var Jh=i(Fs);yi=s(Jh,"ftfy"),Jh.forEach(t),vi=s(_o,`
and `),qs=r(_o,"CODE",{});var Xh=i(qs);ki=s(Xh,"SpaCy"),Xh.forEach(t),wi=s(_o,":"),_o.forEach(t),rr=d(o),y(vo.$$.fragment,o),ir=d(o),We=r(o,"P",{});var dt=i(We);Pi=s(dt,"If you don\u2019t install "),Cs=r(dt,"CODE",{});var Qh=i(Cs);Oi=s(Qh,"ftfy"),Qh.forEach(t),Ii=s(dt," and "),js=r(dt,"CODE",{});var Yh=i(js);Ai=s(Yh,"SpaCy"),Yh.forEach(t),$i=s(dt,", the "),Jn=r(dt,"A",{href:!0});var Zh=i(Jn);Gi=s(Zh,"OpenAIGPTTokenizer"),Zh.forEach(t),Mi=s(dt,` will default to tokenize
using BERT\u2019s `),Ds=r(dt,"CODE",{});var em=i(Ds);Ei=s(em,"BasicTokenizer"),em.forEach(t),zi=s(dt," followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),dt.forEach(t),lr=d(o),wt=r(o,"H2",{class:!0});var jr=i(wt);Rt=r(jr,"A",{id:!0,class:!0,href:!0});var tm=i(Rt);xs=r(tm,"SPAN",{});var om=i(xs);y(ko.$$.fragment,om),om.forEach(t),tm.forEach(t),Fi=d(jr),Hs=r(jr,"SPAN",{});var nm=i(Hs);qi=s(nm,"OpenAIGPTConfig"),nm.forEach(t),jr.forEach(t),dr=d(o),je=r(o,"DIV",{class:!0});var pt=i(je);y(wo.$$.fragment,pt),Ci=d(pt),it=r(pt,"P",{});var To=i(it);ji=s(To,"This is the configuration class to store the configuration of a "),Xn=r(To,"A",{href:!0});var sm=i(Xn);Di=s(sm,"OpenAIGPTModel"),sm.forEach(t),xi=s(To," or a "),Qn=r(To,"A",{href:!0});var am=i(Qn);Hi=s(am,"TFOpenAIGPTModel"),am.forEach(t),Si=s(To,`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
`),Po=r(To,"A",{href:!0,rel:!0});var rm=i(Po);Li=s(rm,"GPT"),rm.forEach(t),Ni=s(To," architecture from OpenAI."),To.forEach(t),Wi=d(pt),Pt=r(pt,"P",{});var ws=i(Pt);Ui=s(ws,"Configuration objects inherit from "),Yn=r(ws,"A",{href:!0});var im=i(Yn);Bi=s(im,"PretrainedConfig"),im.forEach(t),Ri=s(ws,` and can be used to control the model outputs. Read the
documentation from `),Zn=r(ws,"A",{href:!0});var lm=i(Zn);Vi=s(lm,"PretrainedConfig"),lm.forEach(t),Ki=s(ws," for more information."),ws.forEach(t),Ji=d(pt),Ss=r(pt,"P",{});var dm=i(Ss);Xi=s(dm,"Examples:"),dm.forEach(t),Qi=d(pt),y(Oo.$$.fragment,pt),pt.forEach(t),pr=d(o),Ot=r(o,"H2",{class:!0});var Dr=i(Ot);Vt=r(Dr,"A",{id:!0,class:!0,href:!0});var pm=i(Vt);Ls=r(pm,"SPAN",{});var cm=i(Ls);y(Io.$$.fragment,cm),cm.forEach(t),pm.forEach(t),Yi=d(Dr),Ns=r(Dr,"SPAN",{});var hm=i(Ns);Zi=s(hm,"OpenAIGPTTokenizer"),hm.forEach(t),Dr.forEach(t),cr=d(o),De=r(o,"DIV",{class:!0});var ct=i(De);y(Ao.$$.fragment,ct),el=d(ct),Ws=r(ct,"P",{});var mm=i(Ws);tl=s(mm,"Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),mm.forEach(t),ol=d(ct),$o=r(ct,"UL",{});var xr=i($o);Us=r(xr,"LI",{});var um=i(Us);nl=s(um,"lowercases all inputs,"),um.forEach(t),sl=d(xr),lt=r(xr,"LI",{});var bo=i(lt);al=s(bo,"uses "),Bs=r(bo,"CODE",{});var fm=i(Bs);rl=s(fm,"SpaCy"),fm.forEach(t),il=s(bo," tokenizer and "),Rs=r(bo,"CODE",{});var gm=i(Rs);ll=s(gm,"ftfy"),gm.forEach(t),dl=s(bo,` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Vs=r(bo,"CODE",{});var _m=i(Vs);pl=s(_m,"BasicTokenizer"),_m.forEach(t),cl=s(bo," if not."),bo.forEach(t),xr.forEach(t),hl=d(ct),Go=r(ct,"P",{});var Hr=i(Go);ml=s(Hr,"This tokenizer inherits from "),es=r(Hr,"A",{href:!0});var Tm=i(es);ul=s(Tm,"PreTrainedTokenizer"),Tm.forEach(t),fl=s(Hr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Hr.forEach(t),gl=d(ct),ts=r(ct,"DIV",{class:!0});var bm=i(ts);y(Mo.$$.fragment,bm),bm.forEach(t),ct.forEach(t),hr=d(o),It=r(o,"H2",{class:!0});var Sr=i(It);Kt=r(Sr,"A",{id:!0,class:!0,href:!0});var ym=i(Kt);Ks=r(ym,"SPAN",{});var vm=i(Ks);y(Eo.$$.fragment,vm),vm.forEach(t),ym.forEach(t),_l=d(Sr),Js=r(Sr,"SPAN",{});var km=i(Js);Tl=s(km,"OpenAIGPTTokenizerFast"),km.forEach(t),Sr.forEach(t),mr=d(o),Ye=r(o,"DIV",{class:!0});var yo=i(Ye);y(zo.$$.fragment,yo),bl=d(yo),Fo=r(yo,"P",{});var Lr=i(Fo);yl=s(Lr,"Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),Xs=r(Lr,"EM",{});var wm=i(Xs);vl=s(wm,"tokenizers"),wm.forEach(t),kl=s(Lr,` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),Lr.forEach(t),wl=d(yo),qo=r(yo,"UL",{});var Nr=i(qo);Qs=r(Nr,"LI",{});var Pm=i(Qs);Pl=s(Pm,"lower case all inputs"),Pm.forEach(t),Ol=d(Nr),Ys=r(Nr,"LI",{});var Om=i(Ys);Il=s(Om,"uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),Om.forEach(t),Nr.forEach(t),Al=d(yo),Co=r(yo,"P",{});var Wr=i(Co);$l=s(Wr,"This tokenizer inherits from "),os=r(Wr,"A",{href:!0});var Im=i(os);Gl=s(Im,"PreTrainedTokenizerFast"),Im.forEach(t),Ml=s(Wr,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Wr.forEach(t),yo.forEach(t),ur=d(o),At=r(o,"H2",{class:!0});var Ur=i(At);Jt=r(Ur,"A",{id:!0,class:!0,href:!0});var Am=i(Jt);Zs=r(Am,"SPAN",{});var $m=i(Zs);y(jo.$$.fragment,$m),$m.forEach(t),Am.forEach(t),El=d(Ur),ea=r(Ur,"SPAN",{});var Gm=i(ea);zl=s(Gm,"OpenAI specific outputs"),Gm.forEach(t),Ur.forEach(t),fr=d(o),$t=r(o,"DIV",{class:!0});var Br=i($t);y(Do.$$.fragment,Br),Fl=d(Br),ta=r(Br,"P",{});var Mm=i(ta);ql=s(Mm,"Base class for outputs of models predicting if two sentences are consecutive or not."),Mm.forEach(t),Br.forEach(t),gr=d(o),Gt=r(o,"DIV",{class:!0});var Rr=i(Gt);y(xo.$$.fragment,Rr),Cl=d(Rr),oa=r(Rr,"P",{});var Em=i(oa);jl=s(Em,"Base class for outputs of models predicting if two sentences are consecutive or not."),Em.forEach(t),Rr.forEach(t),_r=d(o),Mt=r(o,"H2",{class:!0});var Vr=i(Mt);Xt=r(Vr,"A",{id:!0,class:!0,href:!0});var zm=i(Xt);na=r(zm,"SPAN",{});var Fm=i(na);y(Ho.$$.fragment,Fm),Fm.forEach(t),zm.forEach(t),Dl=d(Vr),sa=r(Vr,"SPAN",{});var qm=i(sa);xl=s(qm,"OpenAIGPTModel"),qm.forEach(t),Vr.forEach(t),Tr=d(o),xe=r(o,"DIV",{class:!0});var ht=i(xe);y(So.$$.fragment,ht),Hl=d(ht),aa=r(ht,"P",{});var Cm=i(aa);Sl=s(Cm,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Cm.forEach(t),Ll=d(ht),Lo=r(ht,"P",{});var Kr=i(Lo);Nl=s(Kr,"This model inherits from "),ns=r(Kr,"A",{href:!0});var jm=i(ns);Wl=s(jm,"PreTrainedModel"),jm.forEach(t),Ul=s(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kr.forEach(t),Bl=d(ht),No=r(ht,"P",{});var Jr=i(No);Rl=s(Jr,"This model is also a PyTorch "),Wo=r(Jr,"A",{href:!0,rel:!0});var Dm=i(Wo);Vl=s(Dm,"torch.nn.Module"),Dm.forEach(t),Kl=s(Jr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jr.forEach(t),Jl=d(ht),Ue=r(ht,"DIV",{class:!0});var mt=i(Ue);y(Uo.$$.fragment,mt),Xl=d(mt),Et=r(mt,"P",{});var Ps=i(Et);Ql=s(Ps,"The "),ss=r(Ps,"A",{href:!0});var xm=i(ss);Yl=s(xm,"OpenAIGPTModel"),xm.forEach(t),Zl=s(Ps," forward method, overrides the "),ra=r(Ps,"CODE",{});var Hm=i(ra);ed=s(Hm,"__call__"),Hm.forEach(t),td=s(Ps," special method."),Ps.forEach(t),od=d(mt),y(Qt.$$.fragment,mt),nd=d(mt),ia=r(mt,"P",{});var Sm=i(ia);sd=s(Sm,"Example:"),Sm.forEach(t),ad=d(mt),y(Bo.$$.fragment,mt),mt.forEach(t),ht.forEach(t),br=d(o),zt=r(o,"H2",{class:!0});var Xr=i(zt);Yt=r(Xr,"A",{id:!0,class:!0,href:!0});var Lm=i(Yt);la=r(Lm,"SPAN",{});var Nm=i(la);y(Ro.$$.fragment,Nm),Nm.forEach(t),Lm.forEach(t),rd=d(Xr),da=r(Xr,"SPAN",{});var Wm=i(da);id=s(Wm,"OpenAIGPTLMHeadModel"),Wm.forEach(t),Xr.forEach(t),yr=d(o),He=r(o,"DIV",{class:!0});var ut=i(He);y(Vo.$$.fragment,ut),ld=d(ut),pa=r(ut,"P",{});var Um=i(pa);dd=s(Um,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Um.forEach(t),pd=d(ut),Ko=r(ut,"P",{});var Qr=i(Ko);cd=s(Qr,"This model inherits from "),as=r(Qr,"A",{href:!0});var Bm=i(as);hd=s(Bm,"PreTrainedModel"),Bm.forEach(t),md=s(Qr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qr.forEach(t),ud=d(ut),Jo=r(ut,"P",{});var Yr=i(Jo);fd=s(Yr,"This model is also a PyTorch "),Xo=r(Yr,"A",{href:!0,rel:!0});var Rm=i(Xo);gd=s(Rm,"torch.nn.Module"),Rm.forEach(t),_d=s(Yr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yr.forEach(t),Td=d(ut),Be=r(ut,"DIV",{class:!0});var ft=i(Be);y(Qo.$$.fragment,ft),bd=d(ft),Ft=r(ft,"P",{});var Os=i(Ft);yd=s(Os,"The "),rs=r(Os,"A",{href:!0});var Vm=i(rs);vd=s(Vm,"OpenAIGPTLMHeadModel"),Vm.forEach(t),kd=s(Os," forward method, overrides the "),ca=r(Os,"CODE",{});var Km=i(ca);wd=s(Km,"__call__"),Km.forEach(t),Pd=s(Os," special method."),Os.forEach(t),Od=d(ft),y(Zt.$$.fragment,ft),Id=d(ft),ha=r(ft,"P",{});var Jm=i(ha);Ad=s(Jm,"Example:"),Jm.forEach(t),$d=d(ft),y(Yo.$$.fragment,ft),ft.forEach(t),ut.forEach(t),vr=d(o),qt=r(o,"H2",{class:!0});var Zr=i(qt);eo=r(Zr,"A",{id:!0,class:!0,href:!0});var Xm=i(eo);ma=r(Xm,"SPAN",{});var Qm=i(ma);y(Zo.$$.fragment,Qm),Qm.forEach(t),Xm.forEach(t),Gd=d(Zr),ua=r(Zr,"SPAN",{});var Ym=i(ua);Md=s(Ym,"OpenAIGPTDoubleHeadsModel"),Ym.forEach(t),Zr.forEach(t),kr=d(o),Se=r(o,"DIV",{class:!0});var gt=i(Se);y(en.$$.fragment,gt),Ed=d(gt),fa=r(gt,"P",{});var Zm=i(fa);zd=s(Zm,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Zm.forEach(t),Fd=d(gt),tn=r(gt,"P",{});var ei=i(tn);qd=s(ei,"This model inherits from "),is=r(ei,"A",{href:!0});var eu=i(is);Cd=s(eu,"PreTrainedModel"),eu.forEach(t),jd=s(ei,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ei.forEach(t),Dd=d(gt),on=r(gt,"P",{});var ti=i(on);xd=s(ti,"This model is also a PyTorch "),nn=r(ti,"A",{href:!0,rel:!0});var tu=i(nn);Hd=s(tu,"torch.nn.Module"),tu.forEach(t),Sd=s(ti,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ti.forEach(t),Ld=d(gt),Re=r(gt,"DIV",{class:!0});var _t=i(Re);y(sn.$$.fragment,_t),Nd=d(_t),Ct=r(_t,"P",{});var Is=i(Ct);Wd=s(Is,"The "),ls=r(Is,"A",{href:!0});var ou=i(ls);Ud=s(ou,"OpenAIGPTDoubleHeadsModel"),ou.forEach(t),Bd=s(Is," forward method, overrides the "),ga=r(Is,"CODE",{});var nu=i(ga);Rd=s(nu,"__call__"),nu.forEach(t),Vd=s(Is," special method."),Is.forEach(t),Kd=d(_t),y(to.$$.fragment,_t),Jd=d(_t),_a=r(_t,"P",{});var su=i(_a);Xd=s(su,"Examples:"),su.forEach(t),Qd=d(_t),y(an.$$.fragment,_t),_t.forEach(t),gt.forEach(t),wr=d(o),jt=r(o,"H2",{class:!0});var oi=i(jt);oo=r(oi,"A",{id:!0,class:!0,href:!0});var au=i(oo);Ta=r(au,"SPAN",{});var ru=i(Ta);y(rn.$$.fragment,ru),ru.forEach(t),au.forEach(t),Yd=d(oi),ba=r(oi,"SPAN",{});var iu=i(ba);Zd=s(iu,"OpenAIGPTForSequenceClassification"),iu.forEach(t),oi.forEach(t),Pr=d(o),Le=r(o,"DIV",{class:!0});var Tt=i(Le);y(ln.$$.fragment,Tt),ep=d(Tt),Ne=r(Tt,"P",{});var tt=i(Ne);tp=s(tt,`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),ds=r(tt,"A",{href:!0});var lu=i(ds);op=s(lu,"OpenAIGPTForSequenceClassification"),lu.forEach(t),np=s(tt,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),ya=r(tt,"CODE",{});var du=i(ya);sp=s(du,"pad_token_id"),du.forEach(t),ap=s(tt,` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),va=r(tt,"CODE",{});var pu=i(va);rp=s(pu,"pad_token_id"),pu.forEach(t),ip=s(tt,` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),ka=r(tt,"CODE",{});var cu=i(ka);lp=s(cu,"inputs_embeds"),cu.forEach(t),dp=s(tt," are passed instead of "),wa=r(tt,"CODE",{});var hu=i(wa);pp=s(hu,"input_ids"),hu.forEach(t),cp=s(tt,`, it does the same (take
the last value in each row of the batch).`),tt.forEach(t),hp=d(Tt),dn=r(Tt,"P",{});var ni=i(dn);mp=s(ni,"This model inherits from "),ps=r(ni,"A",{href:!0});var mu=i(ps);up=s(mu,"PreTrainedModel"),mu.forEach(t),fp=s(ni,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ni.forEach(t),gp=d(Tt),pn=r(Tt,"P",{});var si=i(pn);_p=s(si,"This model is also a PyTorch "),cn=r(si,"A",{href:!0,rel:!0});var uu=i(cn);Tp=s(uu,"torch.nn.Module"),uu.forEach(t),bp=s(si,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),si.forEach(t),yp=d(Tt),ae=r(Tt,"DIV",{class:!0});var Pe=i(ae);y(hn.$$.fragment,Pe),vp=d(Pe),Dt=r(Pe,"P",{});var As=i(Dt);kp=s(As,"The "),cs=r(As,"A",{href:!0});var fu=i(cs);wp=s(fu,"OpenAIGPTForSequenceClassification"),fu.forEach(t),Pp=s(As," forward method, overrides the "),Pa=r(As,"CODE",{});var gu=i(Pa);Op=s(gu,"__call__"),gu.forEach(t),Ip=s(As," special method."),As.forEach(t),Ap=d(Pe),y(no.$$.fragment,Pe),$p=d(Pe),Oa=r(Pe,"P",{});var _u=i(Oa);Gp=s(_u,"Example of single-label classification:"),_u.forEach(t),Mp=d(Pe),y(mn.$$.fragment,Pe),Ep=d(Pe),y(un.$$.fragment,Pe),zp=d(Pe),Ia=r(Pe,"P",{});var Tu=i(Ia);Fp=s(Tu,"Example of multi-label classification:"),Tu.forEach(t),qp=d(Pe),y(fn.$$.fragment,Pe),Cp=d(Pe),y(gn.$$.fragment,Pe),Pe.forEach(t),Tt.forEach(t),Or=d(o),xt=r(o,"H2",{class:!0});var ai=i(xt);so=r(ai,"A",{id:!0,class:!0,href:!0});var bu=i(so);Aa=r(bu,"SPAN",{});var yu=i(Aa);y(_n.$$.fragment,yu),yu.forEach(t),bu.forEach(t),jp=d(ai),$a=r(ai,"SPAN",{});var vu=i($a);Dp=s(vu,"TFOpenAIGPTModel"),vu.forEach(t),ai.forEach(t),Ir=d(o),Oe=r(o,"DIV",{class:!0});var ot=i(Oe);y(Tn.$$.fragment,ot),xp=d(ot),Ga=r(ot,"P",{});var ku=i(Ga);Hp=s(ku,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),ku.forEach(t),Sp=d(ot),bn=r(ot,"P",{});var ri=i(bn);Lp=s(ri,"This model inherits from "),hs=r(ri,"A",{href:!0});var wu=i(hs);Np=s(wu,"TFPreTrainedModel"),wu.forEach(t),Wp=s(ri,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ri.forEach(t),Up=d(ot),yn=r(ot,"P",{});var ii=i(yn);Bp=s(ii,"This model is also a "),vn=r(ii,"A",{href:!0,rel:!0});var Pu=i(vn);Rp=s(Pu,"tf.keras.Model"),Pu.forEach(t),Vp=s(ii,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ii.forEach(t),Kp=d(ot),y(ao.$$.fragment,ot),Jp=d(ot),Ve=r(ot,"DIV",{class:!0});var bt=i(Ve);y(kn.$$.fragment,bt),Xp=d(bt),Ht=r(bt,"P",{});var $s=i(Ht);Qp=s($s,"The "),ms=r($s,"A",{href:!0});var Ou=i(ms);Yp=s(Ou,"TFOpenAIGPTModel"),Ou.forEach(t),Zp=s($s," forward method, overrides the "),Ma=r($s,"CODE",{});var Iu=i(Ma);ec=s(Iu,"__call__"),Iu.forEach(t),tc=s($s," special method."),$s.forEach(t),oc=d(bt),y(ro.$$.fragment,bt),nc=d(bt),Ea=r(bt,"P",{});var Au=i(Ea);sc=s(Au,"Example:"),Au.forEach(t),ac=d(bt),y(wn.$$.fragment,bt),bt.forEach(t),ot.forEach(t),Ar=d(o),St=r(o,"H2",{class:!0});var li=i(St);io=r(li,"A",{id:!0,class:!0,href:!0});var $u=i(io);za=r($u,"SPAN",{});var Gu=i(za);y(Pn.$$.fragment,Gu),Gu.forEach(t),$u.forEach(t),rc=d(li),Fa=r(li,"SPAN",{});var Mu=i(Fa);ic=s(Mu,"TFOpenAIGPTLMHeadModel"),Mu.forEach(t),li.forEach(t),$r=d(o),Ie=r(o,"DIV",{class:!0});var nt=i(Ie);y(On.$$.fragment,nt),lc=d(nt),qa=r(nt,"P",{});var Eu=i(qa);dc=s(Eu,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Eu.forEach(t),pc=d(nt),In=r(nt,"P",{});var di=i(In);cc=s(di,"This model inherits from "),us=r(di,"A",{href:!0});var zu=i(us);hc=s(zu,"TFPreTrainedModel"),zu.forEach(t),mc=s(di,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),di.forEach(t),uc=d(nt),An=r(nt,"P",{});var pi=i(An);fc=s(pi,"This model is also a "),$n=r(pi,"A",{href:!0,rel:!0});var Fu=i($n);gc=s(Fu,"tf.keras.Model"),Fu.forEach(t),_c=s(pi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pi.forEach(t),Tc=d(nt),y(lo.$$.fragment,nt),bc=d(nt),Ke=r(nt,"DIV",{class:!0});var yt=i(Ke);y(Gn.$$.fragment,yt),yc=d(yt),Lt=r(yt,"P",{});var Gs=i(Lt);vc=s(Gs,"The "),fs=r(Gs,"A",{href:!0});var qu=i(fs);kc=s(qu,"TFOpenAIGPTLMHeadModel"),qu.forEach(t),wc=s(Gs," forward method, overrides the "),Ca=r(Gs,"CODE",{});var Cu=i(Ca);Pc=s(Cu,"__call__"),Cu.forEach(t),Oc=s(Gs," special method."),Gs.forEach(t),Ic=d(yt),y(po.$$.fragment,yt),Ac=d(yt),ja=r(yt,"P",{});var ju=i(ja);$c=s(ju,"Example:"),ju.forEach(t),Gc=d(yt),y(Mn.$$.fragment,yt),yt.forEach(t),nt.forEach(t),Gr=d(o),Nt=r(o,"H2",{class:!0});var ci=i(Nt);co=r(ci,"A",{id:!0,class:!0,href:!0});var Du=i(co);Da=r(Du,"SPAN",{});var xu=i(Da);y(En.$$.fragment,xu),xu.forEach(t),Du.forEach(t),Mc=d(ci),xa=r(ci,"SPAN",{});var Hu=i(xa);Ec=s(Hu,"TFOpenAIGPTDoubleHeadsModel"),Hu.forEach(t),ci.forEach(t),Mr=d(o),Ae=r(o,"DIV",{class:!0});var st=i(Ae);y(zn.$$.fragment,st),zc=d(st),Ha=r(st,"P",{});var Su=i(Ha);Fc=s(Su,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Su.forEach(t),qc=d(st),Fn=r(st,"P",{});var hi=i(Fn);Cc=s(hi,"This model inherits from "),gs=r(hi,"A",{href:!0});var Lu=i(gs);jc=s(Lu,"TFPreTrainedModel"),Lu.forEach(t),Dc=s(hi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hi.forEach(t),xc=d(st),qn=r(st,"P",{});var mi=i(qn);Hc=s(mi,"This model is also a "),Cn=r(mi,"A",{href:!0,rel:!0});var Nu=i(Cn);Sc=s(Nu,"tf.keras.Model"),Nu.forEach(t),Lc=s(mi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mi.forEach(t),Nc=d(st),y(ho.$$.fragment,st),Wc=d(st),Je=r(st,"DIV",{class:!0});var vt=i(Je);y(jn.$$.fragment,vt),Uc=d(vt),Wt=r(vt,"P",{});var Ms=i(Wt);Bc=s(Ms,"The "),_s=r(Ms,"A",{href:!0});var Wu=i(_s);Rc=s(Wu,"TFOpenAIGPTDoubleHeadsModel"),Wu.forEach(t),Vc=s(Ms," forward method, overrides the "),Sa=r(Ms,"CODE",{});var Uu=i(Sa);Kc=s(Uu,"__call__"),Uu.forEach(t),Jc=s(Ms," special method."),Ms.forEach(t),Xc=d(vt),y(mo.$$.fragment,vt),Qc=d(vt),La=r(vt,"P",{});var Bu=i(La);Yc=s(Bu,"Examples:"),Bu.forEach(t),Zc=d(vt),y(Dn.$$.fragment,vt),vt.forEach(t),st.forEach(t),Er=d(o),Ut=r(o,"H2",{class:!0});var ui=i(Ut);uo=r(ui,"A",{id:!0,class:!0,href:!0});var Ru=i(uo);Na=r(Ru,"SPAN",{});var Vu=i(Na);y(xn.$$.fragment,Vu),Vu.forEach(t),Ru.forEach(t),eh=d(ui),Wa=r(ui,"SPAN",{});var Ku=i(Wa);th=s(Ku,"TFOpenAIGPTForSequenceClassification"),Ku.forEach(t),ui.forEach(t),zr=d(o),de=r(o,"DIV",{class:!0});var Ee=i(de);y(Hn.$$.fragment,Ee),oh=d(Ee),Ua=r(Ee,"P",{});var Ju=i(Ua);nh=s(Ju,"The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),Ju.forEach(t),sh=d(Ee),Ts=r(Ee,"P",{});var Hh=i(Ts);bs=r(Hh,"A",{href:!0});var Xu=i(bs);ah=s(Xu,"TFOpenAIGPTForSequenceClassification"),Xu.forEach(t),rh=s(Hh,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),Hh.forEach(t),ih=d(Ee),Ze=r(Ee,"P",{});var kt=i(Ze);lh=s(kt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ba=r(kt,"CODE",{});var Qu=i(Ba);dh=s(Qu,"pad_token_id"),Qu.forEach(t),ph=s(kt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ra=r(kt,"CODE",{});var Yu=i(Ra);ch=s(Yu,"pad_token_id"),Yu.forEach(t),hh=s(kt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Va=r(kt,"CODE",{});var Zu=i(Va);mh=s(Zu,"inputs_embeds"),Zu.forEach(t),uh=s(kt," are passed instead of "),Ka=r(kt,"CODE",{});var ef=i(Ka);fh=s(ef,"input_ids"),ef.forEach(t),gh=s(kt,`, it does the same (take the last value in
each row of the batch).`),kt.forEach(t),_h=d(Ee),Sn=r(Ee,"P",{});var fi=i(Sn);Th=s(fi,"This model inherits from "),ys=r(fi,"A",{href:!0});var tf=i(ys);bh=s(tf,"TFPreTrainedModel"),tf.forEach(t),yh=s(fi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fi.forEach(t),vh=d(Ee),Ln=r(Ee,"P",{});var gi=i(Ln);kh=s(gi,"This model is also a "),Nn=r(gi,"A",{href:!0,rel:!0});var of=i(Nn);wh=s(of,"tf.keras.Model"),of.forEach(t),Ph=s(gi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gi.forEach(t),Oh=d(Ee),y(fo.$$.fragment,Ee),Ih=d(Ee),Me=r(Ee,"DIV",{class:!0});var at=i(Me);y(Wn.$$.fragment,at),Ah=d(at),Bt=r(at,"P",{});var Es=i(Bt);$h=s(Es,"The "),vs=r(Es,"A",{href:!0});var nf=i(vs);Gh=s(nf,"TFOpenAIGPTForSequenceClassification"),nf.forEach(t),Mh=s(Es," forward method, overrides the "),Ja=r(Es,"CODE",{});var sf=i(Ja);Eh=s(sf,"__call__"),sf.forEach(t),zh=s(Es," special method."),Es.forEach(t),Fh=d(at),y(go.$$.fragment,at),qh=d(at),Xa=r(at,"P",{});var af=i(Xa);Ch=s(af,"Example:"),af.forEach(t),jh=d(at),y(Un.$$.fragment,at),Dh=d(at),y(Bn.$$.fragment,at),at.forEach(t),Ee.forEach(t),this.h()},h(){p(m,"name","hf:doc:metadata"),p(m,"content",JSON.stringify(Of)),p(g,"id","openai-gpt"),p(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(g,"href","#openai-gpt"),p(f,"class","relative group"),p(X,"id","overview"),p(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(X,"href","#overview"),p($,"class","relative group"),p(Z,"href","https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf"),p(Z,"rel","nofollow"),p(B,"href","https://transformer.huggingface.co/doc/gpt"),p(B,"rel","nofollow"),p(ye,"href","https://huggingface.co/thomwolf"),p(ye,"rel","nofollow"),p(ve,"href","https://github.com/openai/finetune-transformer-lm"),p(ve,"rel","nofollow"),p(Jn,"href","/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer"),p(Rt,"id","transformers.OpenAIGPTConfig"),p(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Rt,"href","#transformers.OpenAIGPTConfig"),p(wt,"class","relative group"),p(Xn,"href","/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),p(Qn,"href","/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),p(Po,"href","https://huggingface.co/openai-gpt"),p(Po,"rel","nofollow"),p(Yn,"href","/docs/transformers/pr_16906/en/main_classes/configuration#transformers.PretrainedConfig"),p(Zn,"href","/docs/transformers/pr_16906/en/main_classes/configuration#transformers.PretrainedConfig"),p(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Vt,"id","transformers.OpenAIGPTTokenizer"),p(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Vt,"href","#transformers.OpenAIGPTTokenizer"),p(Ot,"class","relative group"),p(es,"href","/docs/transformers/pr_16906/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(ts,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Kt,"id","transformers.OpenAIGPTTokenizerFast"),p(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Kt,"href","#transformers.OpenAIGPTTokenizerFast"),p(It,"class","relative group"),p(os,"href","/docs/transformers/pr_16906/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),p(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Jt,"id","transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),p(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Jt,"href","#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),p(At,"class","relative group"),p($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Xt,"id","transformers.OpenAIGPTModel"),p(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Xt,"href","#transformers.OpenAIGPTModel"),p(Mt,"class","relative group"),p(ns,"href","/docs/transformers/pr_16906/en/main_classes/model#transformers.PreTrainedModel"),p(Wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Wo,"rel","nofollow"),p(ss,"href","/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),p(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Yt,"id","transformers.OpenAIGPTLMHeadModel"),p(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Yt,"href","#transformers.OpenAIGPTLMHeadModel"),p(zt,"class","relative group"),p(as,"href","/docs/transformers/pr_16906/en/main_classes/model#transformers.PreTrainedModel"),p(Xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Xo,"rel","nofollow"),p(rs,"href","/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTLMHeadModel"),p(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(eo,"id","transformers.OpenAIGPTDoubleHeadsModel"),p(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(eo,"href","#transformers.OpenAIGPTDoubleHeadsModel"),p(qt,"class","relative group"),p(is,"href","/docs/transformers/pr_16906/en/main_classes/model#transformers.PreTrainedModel"),p(nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(nn,"rel","nofollow"),p(ls,"href","/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel"),p(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(oo,"id","transformers.OpenAIGPTForSequenceClassification"),p(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(oo,"href","#transformers.OpenAIGPTForSequenceClassification"),p(jt,"class","relative group"),p(ds,"href","/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),p(ps,"href","/docs/transformers/pr_16906/en/main_classes/model#transformers.PreTrainedModel"),p(cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(cn,"rel","nofollow"),p(cs,"href","/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),p(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(so,"id","transformers.TFOpenAIGPTModel"),p(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(so,"href","#transformers.TFOpenAIGPTModel"),p(xt,"class","relative group"),p(hs,"href","/docs/transformers/pr_16906/en/main_classes/model#transformers.TFPreTrainedModel"),p(vn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(vn,"rel","nofollow"),p(ms,"href","/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),p(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(io,"id","transformers.TFOpenAIGPTLMHeadModel"),p(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(io,"href","#transformers.TFOpenAIGPTLMHeadModel"),p(St,"class","relative group"),p(us,"href","/docs/transformers/pr_16906/en/main_classes/model#transformers.TFPreTrainedModel"),p($n,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p($n,"rel","nofollow"),p(fs,"href","/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.TFOpenAIGPTLMHeadModel"),p(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(co,"id","transformers.TFOpenAIGPTDoubleHeadsModel"),p(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(co,"href","#transformers.TFOpenAIGPTDoubleHeadsModel"),p(Nt,"class","relative group"),p(gs,"href","/docs/transformers/pr_16906/en/main_classes/model#transformers.TFPreTrainedModel"),p(Cn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Cn,"rel","nofollow"),p(_s,"href","/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.TFOpenAIGPTDoubleHeadsModel"),p(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(uo,"id","transformers.TFOpenAIGPTForSequenceClassification"),p(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(uo,"href","#transformers.TFOpenAIGPTForSequenceClassification"),p(Ut,"class","relative group"),p(bs,"href","/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),p(ys,"href","/docs/transformers/pr_16906/en/main_classes/model#transformers.TFPreTrainedModel"),p(Nn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Nn,"rel","nofollow"),p(vs,"href","/docs/transformers/pr_16906/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),p(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,m),h(o,G,u),h(o,f,u),e(f,g),e(g,O),v(T,O,null),e(f,_),e(f,A),e(A,me),h(o,J,u),h(o,$,u),e($,X),e(X,D),v(Y,D,null),e($,ue),e($,x),e(x,fe),h(o,pe,u),h(o,S,u),e(S,q),e(S,Z),e(Z,ee),e(S,M),h(o,z,u),h(o,oe,u),e(oe,N),h(o,ce,u),h(o,ne,u),e(ne,H),e(H,ge),h(o,he,u),h(o,E,u),e(E,_e),h(o,L,u),h(o,Q,u),e(Q,ie),e(ie,W),e(Q,Te),e(Q,te),e(te,C),e(te,le),e(le,U),e(te,be),h(o,c,u),h(o,I,u),e(I,B),e(B,ze),e(I,Fe),h(o,F,u),h(o,se,u),e(se,qe),e(se,ye),e(ye,j),e(se,R),e(se,ve),e(ve,Ce),e(se,V),h(o,$e,u),h(o,we,u),e(we,ke),h(o,Ge,u),h(o,et,u),e(et,_i),e(et,zs),e(zs,Ti),e(et,bi),e(et,Fs),e(Fs,yi),e(et,vi),e(et,qs),e(qs,ki),e(et,wi),h(o,rr,u),v(vo,o,u),h(o,ir,u),h(o,We,u),e(We,Pi),e(We,Cs),e(Cs,Oi),e(We,Ii),e(We,js),e(js,Ai),e(We,$i),e(We,Jn),e(Jn,Gi),e(We,Mi),e(We,Ds),e(Ds,Ei),e(We,zi),h(o,lr,u),h(o,wt,u),e(wt,Rt),e(Rt,xs),v(ko,xs,null),e(wt,Fi),e(wt,Hs),e(Hs,qi),h(o,dr,u),h(o,je,u),v(wo,je,null),e(je,Ci),e(je,it),e(it,ji),e(it,Xn),e(Xn,Di),e(it,xi),e(it,Qn),e(Qn,Hi),e(it,Si),e(it,Po),e(Po,Li),e(it,Ni),e(je,Wi),e(je,Pt),e(Pt,Ui),e(Pt,Yn),e(Yn,Bi),e(Pt,Ri),e(Pt,Zn),e(Zn,Vi),e(Pt,Ki),e(je,Ji),e(je,Ss),e(Ss,Xi),e(je,Qi),v(Oo,je,null),h(o,pr,u),h(o,Ot,u),e(Ot,Vt),e(Vt,Ls),v(Io,Ls,null),e(Ot,Yi),e(Ot,Ns),e(Ns,Zi),h(o,cr,u),h(o,De,u),v(Ao,De,null),e(De,el),e(De,Ws),e(Ws,tl),e(De,ol),e(De,$o),e($o,Us),e(Us,nl),e($o,sl),e($o,lt),e(lt,al),e(lt,Bs),e(Bs,rl),e(lt,il),e(lt,Rs),e(Rs,ll),e(lt,dl),e(lt,Vs),e(Vs,pl),e(lt,cl),e(De,hl),e(De,Go),e(Go,ml),e(Go,es),e(es,ul),e(Go,fl),e(De,gl),e(De,ts),v(Mo,ts,null),h(o,hr,u),h(o,It,u),e(It,Kt),e(Kt,Ks),v(Eo,Ks,null),e(It,_l),e(It,Js),e(Js,Tl),h(o,mr,u),h(o,Ye,u),v(zo,Ye,null),e(Ye,bl),e(Ye,Fo),e(Fo,yl),e(Fo,Xs),e(Xs,vl),e(Fo,kl),e(Ye,wl),e(Ye,qo),e(qo,Qs),e(Qs,Pl),e(qo,Ol),e(qo,Ys),e(Ys,Il),e(Ye,Al),e(Ye,Co),e(Co,$l),e(Co,os),e(os,Gl),e(Co,Ml),h(o,ur,u),h(o,At,u),e(At,Jt),e(Jt,Zs),v(jo,Zs,null),e(At,El),e(At,ea),e(ea,zl),h(o,fr,u),h(o,$t,u),v(Do,$t,null),e($t,Fl),e($t,ta),e(ta,ql),h(o,gr,u),h(o,Gt,u),v(xo,Gt,null),e(Gt,Cl),e(Gt,oa),e(oa,jl),h(o,_r,u),h(o,Mt,u),e(Mt,Xt),e(Xt,na),v(Ho,na,null),e(Mt,Dl),e(Mt,sa),e(sa,xl),h(o,Tr,u),h(o,xe,u),v(So,xe,null),e(xe,Hl),e(xe,aa),e(aa,Sl),e(xe,Ll),e(xe,Lo),e(Lo,Nl),e(Lo,ns),e(ns,Wl),e(Lo,Ul),e(xe,Bl),e(xe,No),e(No,Rl),e(No,Wo),e(Wo,Vl),e(No,Kl),e(xe,Jl),e(xe,Ue),v(Uo,Ue,null),e(Ue,Xl),e(Ue,Et),e(Et,Ql),e(Et,ss),e(ss,Yl),e(Et,Zl),e(Et,ra),e(ra,ed),e(Et,td),e(Ue,od),v(Qt,Ue,null),e(Ue,nd),e(Ue,ia),e(ia,sd),e(Ue,ad),v(Bo,Ue,null),h(o,br,u),h(o,zt,u),e(zt,Yt),e(Yt,la),v(Ro,la,null),e(zt,rd),e(zt,da),e(da,id),h(o,yr,u),h(o,He,u),v(Vo,He,null),e(He,ld),e(He,pa),e(pa,dd),e(He,pd),e(He,Ko),e(Ko,cd),e(Ko,as),e(as,hd),e(Ko,md),e(He,ud),e(He,Jo),e(Jo,fd),e(Jo,Xo),e(Xo,gd),e(Jo,_d),e(He,Td),e(He,Be),v(Qo,Be,null),e(Be,bd),e(Be,Ft),e(Ft,yd),e(Ft,rs),e(rs,vd),e(Ft,kd),e(Ft,ca),e(ca,wd),e(Ft,Pd),e(Be,Od),v(Zt,Be,null),e(Be,Id),e(Be,ha),e(ha,Ad),e(Be,$d),v(Yo,Be,null),h(o,vr,u),h(o,qt,u),e(qt,eo),e(eo,ma),v(Zo,ma,null),e(qt,Gd),e(qt,ua),e(ua,Md),h(o,kr,u),h(o,Se,u),v(en,Se,null),e(Se,Ed),e(Se,fa),e(fa,zd),e(Se,Fd),e(Se,tn),e(tn,qd),e(tn,is),e(is,Cd),e(tn,jd),e(Se,Dd),e(Se,on),e(on,xd),e(on,nn),e(nn,Hd),e(on,Sd),e(Se,Ld),e(Se,Re),v(sn,Re,null),e(Re,Nd),e(Re,Ct),e(Ct,Wd),e(Ct,ls),e(ls,Ud),e(Ct,Bd),e(Ct,ga),e(ga,Rd),e(Ct,Vd),e(Re,Kd),v(to,Re,null),e(Re,Jd),e(Re,_a),e(_a,Xd),e(Re,Qd),v(an,Re,null),h(o,wr,u),h(o,jt,u),e(jt,oo),e(oo,Ta),v(rn,Ta,null),e(jt,Yd),e(jt,ba),e(ba,Zd),h(o,Pr,u),h(o,Le,u),v(ln,Le,null),e(Le,ep),e(Le,Ne),e(Ne,tp),e(Ne,ds),e(ds,op),e(Ne,np),e(Ne,ya),e(ya,sp),e(Ne,ap),e(Ne,va),e(va,rp),e(Ne,ip),e(Ne,ka),e(ka,lp),e(Ne,dp),e(Ne,wa),e(wa,pp),e(Ne,cp),e(Le,hp),e(Le,dn),e(dn,mp),e(dn,ps),e(ps,up),e(dn,fp),e(Le,gp),e(Le,pn),e(pn,_p),e(pn,cn),e(cn,Tp),e(pn,bp),e(Le,yp),e(Le,ae),v(hn,ae,null),e(ae,vp),e(ae,Dt),e(Dt,kp),e(Dt,cs),e(cs,wp),e(Dt,Pp),e(Dt,Pa),e(Pa,Op),e(Dt,Ip),e(ae,Ap),v(no,ae,null),e(ae,$p),e(ae,Oa),e(Oa,Gp),e(ae,Mp),v(mn,ae,null),e(ae,Ep),v(un,ae,null),e(ae,zp),e(ae,Ia),e(Ia,Fp),e(ae,qp),v(fn,ae,null),e(ae,Cp),v(gn,ae,null),h(o,Or,u),h(o,xt,u),e(xt,so),e(so,Aa),v(_n,Aa,null),e(xt,jp),e(xt,$a),e($a,Dp),h(o,Ir,u),h(o,Oe,u),v(Tn,Oe,null),e(Oe,xp),e(Oe,Ga),e(Ga,Hp),e(Oe,Sp),e(Oe,bn),e(bn,Lp),e(bn,hs),e(hs,Np),e(bn,Wp),e(Oe,Up),e(Oe,yn),e(yn,Bp),e(yn,vn),e(vn,Rp),e(yn,Vp),e(Oe,Kp),v(ao,Oe,null),e(Oe,Jp),e(Oe,Ve),v(kn,Ve,null),e(Ve,Xp),e(Ve,Ht),e(Ht,Qp),e(Ht,ms),e(ms,Yp),e(Ht,Zp),e(Ht,Ma),e(Ma,ec),e(Ht,tc),e(Ve,oc),v(ro,Ve,null),e(Ve,nc),e(Ve,Ea),e(Ea,sc),e(Ve,ac),v(wn,Ve,null),h(o,Ar,u),h(o,St,u),e(St,io),e(io,za),v(Pn,za,null),e(St,rc),e(St,Fa),e(Fa,ic),h(o,$r,u),h(o,Ie,u),v(On,Ie,null),e(Ie,lc),e(Ie,qa),e(qa,dc),e(Ie,pc),e(Ie,In),e(In,cc),e(In,us),e(us,hc),e(In,mc),e(Ie,uc),e(Ie,An),e(An,fc),e(An,$n),e($n,gc),e(An,_c),e(Ie,Tc),v(lo,Ie,null),e(Ie,bc),e(Ie,Ke),v(Gn,Ke,null),e(Ke,yc),e(Ke,Lt),e(Lt,vc),e(Lt,fs),e(fs,kc),e(Lt,wc),e(Lt,Ca),e(Ca,Pc),e(Lt,Oc),e(Ke,Ic),v(po,Ke,null),e(Ke,Ac),e(Ke,ja),e(ja,$c),e(Ke,Gc),v(Mn,Ke,null),h(o,Gr,u),h(o,Nt,u),e(Nt,co),e(co,Da),v(En,Da,null),e(Nt,Mc),e(Nt,xa),e(xa,Ec),h(o,Mr,u),h(o,Ae,u),v(zn,Ae,null),e(Ae,zc),e(Ae,Ha),e(Ha,Fc),e(Ae,qc),e(Ae,Fn),e(Fn,Cc),e(Fn,gs),e(gs,jc),e(Fn,Dc),e(Ae,xc),e(Ae,qn),e(qn,Hc),e(qn,Cn),e(Cn,Sc),e(qn,Lc),e(Ae,Nc),v(ho,Ae,null),e(Ae,Wc),e(Ae,Je),v(jn,Je,null),e(Je,Uc),e(Je,Wt),e(Wt,Bc),e(Wt,_s),e(_s,Rc),e(Wt,Vc),e(Wt,Sa),e(Sa,Kc),e(Wt,Jc),e(Je,Xc),v(mo,Je,null),e(Je,Qc),e(Je,La),e(La,Yc),e(Je,Zc),v(Dn,Je,null),h(o,Er,u),h(o,Ut,u),e(Ut,uo),e(uo,Na),v(xn,Na,null),e(Ut,eh),e(Ut,Wa),e(Wa,th),h(o,zr,u),h(o,de,u),v(Hn,de,null),e(de,oh),e(de,Ua),e(Ua,nh),e(de,sh),e(de,Ts),e(Ts,bs),e(bs,ah),e(Ts,rh),e(de,ih),e(de,Ze),e(Ze,lh),e(Ze,Ba),e(Ba,dh),e(Ze,ph),e(Ze,Ra),e(Ra,ch),e(Ze,hh),e(Ze,Va),e(Va,mh),e(Ze,uh),e(Ze,Ka),e(Ka,fh),e(Ze,gh),e(de,_h),e(de,Sn),e(Sn,Th),e(Sn,ys),e(ys,bh),e(Sn,yh),e(de,vh),e(de,Ln),e(Ln,kh),e(Ln,Nn),e(Nn,wh),e(Ln,Ph),e(de,Oh),v(fo,de,null),e(de,Ih),e(de,Me),v(Wn,Me,null),e(Me,Ah),e(Me,Bt),e(Bt,$h),e(Bt,vs),e(vs,Gh),e(Bt,Mh),e(Bt,Ja),e(Ja,Eh),e(Bt,zh),e(Me,Fh),v(go,Me,null),e(Me,qh),e(Me,Xa),e(Xa,Ch),e(Me,jh),v(Un,Me,null),e(Me,Dh),v(Bn,Me,null),Fr=!0},p(o,[u]){const Rn={};u&2&&(Rn.$$scope={dirty:u,ctx:o}),Qt.$set(Rn);const Qa={};u&2&&(Qa.$$scope={dirty:u,ctx:o}),Zt.$set(Qa);const Ya={};u&2&&(Ya.$$scope={dirty:u,ctx:o}),to.$set(Ya);const Za={};u&2&&(Za.$$scope={dirty:u,ctx:o}),no.$set(Za);const Vn={};u&2&&(Vn.$$scope={dirty:u,ctx:o}),ao.$set(Vn);const er={};u&2&&(er.$$scope={dirty:u,ctx:o}),ro.$set(er);const tr={};u&2&&(tr.$$scope={dirty:u,ctx:o}),lo.$set(tr);const or={};u&2&&(or.$$scope={dirty:u,ctx:o}),po.$set(or);const Kn={};u&2&&(Kn.$$scope={dirty:u,ctx:o}),ho.$set(Kn);const nr={};u&2&&(nr.$$scope={dirty:u,ctx:o}),mo.$set(nr);const sr={};u&2&&(sr.$$scope={dirty:u,ctx:o}),fo.$set(sr);const ar={};u&2&&(ar.$$scope={dirty:u,ctx:o}),go.$set(ar)},i(o){Fr||(k(T.$$.fragment,o),k(Y.$$.fragment,o),k(vo.$$.fragment,o),k(ko.$$.fragment,o),k(wo.$$.fragment,o),k(Oo.$$.fragment,o),k(Io.$$.fragment,o),k(Ao.$$.fragment,o),k(Mo.$$.fragment,o),k(Eo.$$.fragment,o),k(zo.$$.fragment,o),k(jo.$$.fragment,o),k(Do.$$.fragment,o),k(xo.$$.fragment,o),k(Ho.$$.fragment,o),k(So.$$.fragment,o),k(Uo.$$.fragment,o),k(Qt.$$.fragment,o),k(Bo.$$.fragment,o),k(Ro.$$.fragment,o),k(Vo.$$.fragment,o),k(Qo.$$.fragment,o),k(Zt.$$.fragment,o),k(Yo.$$.fragment,o),k(Zo.$$.fragment,o),k(en.$$.fragment,o),k(sn.$$.fragment,o),k(to.$$.fragment,o),k(an.$$.fragment,o),k(rn.$$.fragment,o),k(ln.$$.fragment,o),k(hn.$$.fragment,o),k(no.$$.fragment,o),k(mn.$$.fragment,o),k(un.$$.fragment,o),k(fn.$$.fragment,o),k(gn.$$.fragment,o),k(_n.$$.fragment,o),k(Tn.$$.fragment,o),k(ao.$$.fragment,o),k(kn.$$.fragment,o),k(ro.$$.fragment,o),k(wn.$$.fragment,o),k(Pn.$$.fragment,o),k(On.$$.fragment,o),k(lo.$$.fragment,o),k(Gn.$$.fragment,o),k(po.$$.fragment,o),k(Mn.$$.fragment,o),k(En.$$.fragment,o),k(zn.$$.fragment,o),k(ho.$$.fragment,o),k(jn.$$.fragment,o),k(mo.$$.fragment,o),k(Dn.$$.fragment,o),k(xn.$$.fragment,o),k(Hn.$$.fragment,o),k(fo.$$.fragment,o),k(Wn.$$.fragment,o),k(go.$$.fragment,o),k(Un.$$.fragment,o),k(Bn.$$.fragment,o),Fr=!0)},o(o){w(T.$$.fragment,o),w(Y.$$.fragment,o),w(vo.$$.fragment,o),w(ko.$$.fragment,o),w(wo.$$.fragment,o),w(Oo.$$.fragment,o),w(Io.$$.fragment,o),w(Ao.$$.fragment,o),w(Mo.$$.fragment,o),w(Eo.$$.fragment,o),w(zo.$$.fragment,o),w(jo.$$.fragment,o),w(Do.$$.fragment,o),w(xo.$$.fragment,o),w(Ho.$$.fragment,o),w(So.$$.fragment,o),w(Uo.$$.fragment,o),w(Qt.$$.fragment,o),w(Bo.$$.fragment,o),w(Ro.$$.fragment,o),w(Vo.$$.fragment,o),w(Qo.$$.fragment,o),w(Zt.$$.fragment,o),w(Yo.$$.fragment,o),w(Zo.$$.fragment,o),w(en.$$.fragment,o),w(sn.$$.fragment,o),w(to.$$.fragment,o),w(an.$$.fragment,o),w(rn.$$.fragment,o),w(ln.$$.fragment,o),w(hn.$$.fragment,o),w(no.$$.fragment,o),w(mn.$$.fragment,o),w(un.$$.fragment,o),w(fn.$$.fragment,o),w(gn.$$.fragment,o),w(_n.$$.fragment,o),w(Tn.$$.fragment,o),w(ao.$$.fragment,o),w(kn.$$.fragment,o),w(ro.$$.fragment,o),w(wn.$$.fragment,o),w(Pn.$$.fragment,o),w(On.$$.fragment,o),w(lo.$$.fragment,o),w(Gn.$$.fragment,o),w(po.$$.fragment,o),w(Mn.$$.fragment,o),w(En.$$.fragment,o),w(zn.$$.fragment,o),w(ho.$$.fragment,o),w(jn.$$.fragment,o),w(mo.$$.fragment,o),w(Dn.$$.fragment,o),w(xn.$$.fragment,o),w(Hn.$$.fragment,o),w(fo.$$.fragment,o),w(Wn.$$.fragment,o),w(go.$$.fragment,o),w(Un.$$.fragment,o),w(Bn.$$.fragment,o),Fr=!1},d(o){t(m),o&&t(G),o&&t(f),P(T),o&&t(J),o&&t($),P(Y),o&&t(pe),o&&t(S),o&&t(z),o&&t(oe),o&&t(ce),o&&t(ne),o&&t(he),o&&t(E),o&&t(L),o&&t(Q),o&&t(c),o&&t(I),o&&t(F),o&&t(se),o&&t($e),o&&t(we),o&&t(Ge),o&&t(et),o&&t(rr),P(vo,o),o&&t(ir),o&&t(We),o&&t(lr),o&&t(wt),P(ko),o&&t(dr),o&&t(je),P(wo),P(Oo),o&&t(pr),o&&t(Ot),P(Io),o&&t(cr),o&&t(De),P(Ao),P(Mo),o&&t(hr),o&&t(It),P(Eo),o&&t(mr),o&&t(Ye),P(zo),o&&t(ur),o&&t(At),P(jo),o&&t(fr),o&&t($t),P(Do),o&&t(gr),o&&t(Gt),P(xo),o&&t(_r),o&&t(Mt),P(Ho),o&&t(Tr),o&&t(xe),P(So),P(Uo),P(Qt),P(Bo),o&&t(br),o&&t(zt),P(Ro),o&&t(yr),o&&t(He),P(Vo),P(Qo),P(Zt),P(Yo),o&&t(vr),o&&t(qt),P(Zo),o&&t(kr),o&&t(Se),P(en),P(sn),P(to),P(an),o&&t(wr),o&&t(jt),P(rn),o&&t(Pr),o&&t(Le),P(ln),P(hn),P(no),P(mn),P(un),P(fn),P(gn),o&&t(Or),o&&t(xt),P(_n),o&&t(Ir),o&&t(Oe),P(Tn),P(ao),P(kn),P(ro),P(wn),o&&t(Ar),o&&t(St),P(Pn),o&&t($r),o&&t(Ie),P(On),P(lo),P(Gn),P(po),P(Mn),o&&t(Gr),o&&t(Nt),P(En),o&&t(Mr),o&&t(Ae),P(zn),P(ho),P(jn),P(mo),P(Dn),o&&t(Er),o&&t(Ut),P(xn),o&&t(zr),o&&t(de),P(Hn),P(fo),P(Wn),P(go),P(Un),P(Bn)}}}const Of={local:"openai-gpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OpenAIGPTConfig",title:"OpenAIGPTConfig"},{local:"transformers.OpenAIGPTTokenizer",title:"OpenAIGPTTokenizer"},{local:"transformers.OpenAIGPTTokenizerFast",title:"OpenAIGPTTokenizerFast"},{local:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",title:"OpenAI specific outputs"},{local:"transformers.OpenAIGPTModel",title:"OpenAIGPTModel"},{local:"transformers.OpenAIGPTLMHeadModel",title:"OpenAIGPTLMHeadModel"},{local:"transformers.OpenAIGPTDoubleHeadsModel",title:"OpenAIGPTDoubleHeadsModel"},{local:"transformers.OpenAIGPTForSequenceClassification",title:"OpenAIGPTForSequenceClassification"},{local:"transformers.TFOpenAIGPTModel",title:"TFOpenAIGPTModel"},{local:"transformers.TFOpenAIGPTLMHeadModel",title:"TFOpenAIGPTLMHeadModel"},{local:"transformers.TFOpenAIGPTDoubleHeadsModel",title:"TFOpenAIGPTDoubleHeadsModel"},{local:"transformers.TFOpenAIGPTForSequenceClassification",title:"TFOpenAIGPTForSequenceClassification"}],title:"OpenAI GPT"};function If(K){return cf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class zf extends rf{constructor(m){super();lf(this,m,If,Pf,df,{})}}export{zf as default,Of as metadata};
