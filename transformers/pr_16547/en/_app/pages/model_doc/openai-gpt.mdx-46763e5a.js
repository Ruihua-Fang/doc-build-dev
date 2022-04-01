import{S as iu,i as lu,s as du,e as a,k as l,w as v,t as n,M as pu,c as r,d as t,m as d,a as i,x as k,h as s,b as p,F as e,g as h,y,q as b,o as w,B as P,v as cu}from"../../chunks/vendor-6b77c823.js";import{T as rt}from"../../chunks/Tip-39098574.js";import{D as re}from"../../chunks/Docstring-abef54e3.js";import{C as Xe}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Qe}from"../../chunks/IconCopyLink-7a11ce68.js";function hu(K){let m,G,u,g,O;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),O=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var A=i(u);g=s(A,"Module"),A.forEach(t),O=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,u),e(u,g),e(m,O)},d(T){T&&t(m)}}}function mu(K){let m,G,u,g,O;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),O=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var A=i(u);g=s(A,"Module"),A.forEach(t),O=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,u),e(u,g),e(m,O)},d(T){T&&t(m)}}}function fu(K){let m,G,u,g,O;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),O=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var A=i(u);g=s(A,"Module"),A.forEach(t),O=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,u),e(u,g),e(m,O)},d(T){T&&t(m)}}}function uu(K){let m,G,u,g,O;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),O=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var A=i(u);g=s(A,"Module"),A.forEach(t),O=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,u),e(u,g),e(m,O)},d(T){T&&t(m)}}}function gu(K){let m,G,u,g,O,T,_,A,me,J,$,X,D,Y,fe,x,ue,pe,S,q,Z,ee,M,z,oe,L,ce,ne,H,ge,he,E,_e,N,Q,ie,W,Te,te,C,le,B,ve;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),O=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),ue=n("model(inputs)"),pe=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),L=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),he=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),Q=n("model([input_ids, attention_mask])"),ie=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),le=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){m=r(c,"P",{});var I=i(m);G=s(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),u=d(c),g=r(c,"UL",{});var U=i(g);O=r(U,"LI",{});var ze=i(O);T=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),_=d(U),A=r(U,"LI",{});var Fe=i(A);me=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),U.forEach(t),J=d(c),$=r(c,"P",{});var F=i($);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),fe=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var qe=i(x);ue=s(qe,"model(inputs)"),qe.forEach(t),pe=s(F,"."),F.forEach(t),S=d(c),q=r(c,"P",{});var ke=i(q);Z=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),ee=d(c),M=r(c,"UL",{});var j=i(M);z=r(j,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),L=r(R,"CODE",{});var ye=i(L);ce=s(ye,"input_ids"),ye.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var Ce=i(H);ge=s(Ce,"model(inputs_ids)"),Ce.forEach(t),R.forEach(t),he=d(j),E=r(j,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(V,"CODE",{});var $e=i(N);Q=s($e,"model([input_ids, attention_mask])"),$e.forEach(t),ie=s(V," or "),W=r(V,"CODE",{});var we=i(W);Te=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),V.forEach(t),te=d(j),C=r(j,"LI",{});var be=i(C);le=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(be,"CODE",{});var Ge=i(B);ve=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),be.forEach(t),j.forEach(t)},m(c,I){h(c,m,I),e(m,G),h(c,u,I),h(c,g,I),e(g,O),e(O,T),e(g,_),e(g,A),e(A,me),h(c,J,I),h(c,$,I),e($,X),e($,D),e(D,Y),e($,fe),e($,x),e(x,ue),e($,pe),h(c,S,I),h(c,q,I),e(q,Z),h(c,ee,I),h(c,M,I),e(M,z),e(z,oe),e(z,L),e(L,ce),e(z,ne),e(z,H),e(H,ge),e(M,he),e(M,E),e(E,_e),e(E,N),e(N,Q),e(E,ie),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,le),e(C,B),e(B,ve)},d(c){c&&t(m),c&&t(u),c&&t(g),c&&t(J),c&&t($),c&&t(S),c&&t(q),c&&t(ee),c&&t(M)}}}function _u(K){let m,G,u,g,O;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),O=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var A=i(u);g=s(A,"Module"),A.forEach(t),O=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,u),e(u,g),e(m,O)},d(T){T&&t(m)}}}function Tu(K){let m,G,u,g,O,T,_,A,me,J,$,X,D,Y,fe,x,ue,pe,S,q,Z,ee,M,z,oe,L,ce,ne,H,ge,he,E,_e,N,Q,ie,W,Te,te,C,le,B,ve;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),O=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),ue=n("model(inputs)"),pe=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),L=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),he=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),Q=n("model([input_ids, attention_mask])"),ie=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),le=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){m=r(c,"P",{});var I=i(m);G=s(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),u=d(c),g=r(c,"UL",{});var U=i(g);O=r(U,"LI",{});var ze=i(O);T=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),_=d(U),A=r(U,"LI",{});var Fe=i(A);me=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),U.forEach(t),J=d(c),$=r(c,"P",{});var F=i($);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),fe=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var qe=i(x);ue=s(qe,"model(inputs)"),qe.forEach(t),pe=s(F,"."),F.forEach(t),S=d(c),q=r(c,"P",{});var ke=i(q);Z=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),ee=d(c),M=r(c,"UL",{});var j=i(M);z=r(j,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),L=r(R,"CODE",{});var ye=i(L);ce=s(ye,"input_ids"),ye.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var Ce=i(H);ge=s(Ce,"model(inputs_ids)"),Ce.forEach(t),R.forEach(t),he=d(j),E=r(j,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(V,"CODE",{});var $e=i(N);Q=s($e,"model([input_ids, attention_mask])"),$e.forEach(t),ie=s(V," or "),W=r(V,"CODE",{});var we=i(W);Te=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),V.forEach(t),te=d(j),C=r(j,"LI",{});var be=i(C);le=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(be,"CODE",{});var Ge=i(B);ve=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),be.forEach(t),j.forEach(t)},m(c,I){h(c,m,I),e(m,G),h(c,u,I),h(c,g,I),e(g,O),e(O,T),e(g,_),e(g,A),e(A,me),h(c,J,I),h(c,$,I),e($,X),e($,D),e(D,Y),e($,fe),e($,x),e(x,ue),e($,pe),h(c,S,I),h(c,q,I),e(q,Z),h(c,ee,I),h(c,M,I),e(M,z),e(z,oe),e(z,L),e(L,ce),e(z,ne),e(z,H),e(H,ge),e(M,he),e(M,E),e(E,_e),e(E,N),e(N,Q),e(E,ie),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,le),e(C,B),e(B,ve)},d(c){c&&t(m),c&&t(u),c&&t(g),c&&t(J),c&&t($),c&&t(S),c&&t(q),c&&t(ee),c&&t(M)}}}function vu(K){let m,G,u,g,O;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),O=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var A=i(u);g=s(A,"Module"),A.forEach(t),O=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,u),e(u,g),e(m,O)},d(T){T&&t(m)}}}function ku(K){let m,G,u,g,O,T,_,A,me,J,$,X,D,Y,fe,x,ue,pe,S,q,Z,ee,M,z,oe,L,ce,ne,H,ge,he,E,_e,N,Q,ie,W,Te,te,C,le,B,ve;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),O=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),ue=n("model(inputs)"),pe=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),L=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),he=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),Q=n("model([input_ids, attention_mask])"),ie=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),le=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){m=r(c,"P",{});var I=i(m);G=s(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),u=d(c),g=r(c,"UL",{});var U=i(g);O=r(U,"LI",{});var ze=i(O);T=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),_=d(U),A=r(U,"LI",{});var Fe=i(A);me=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),U.forEach(t),J=d(c),$=r(c,"P",{});var F=i($);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),fe=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var qe=i(x);ue=s(qe,"model(inputs)"),qe.forEach(t),pe=s(F,"."),F.forEach(t),S=d(c),q=r(c,"P",{});var ke=i(q);Z=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),ee=d(c),M=r(c,"UL",{});var j=i(M);z=r(j,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),L=r(R,"CODE",{});var ye=i(L);ce=s(ye,"input_ids"),ye.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var Ce=i(H);ge=s(Ce,"model(inputs_ids)"),Ce.forEach(t),R.forEach(t),he=d(j),E=r(j,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(V,"CODE",{});var $e=i(N);Q=s($e,"model([input_ids, attention_mask])"),$e.forEach(t),ie=s(V," or "),W=r(V,"CODE",{});var we=i(W);Te=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),V.forEach(t),te=d(j),C=r(j,"LI",{});var be=i(C);le=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(be,"CODE",{});var Ge=i(B);ve=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),be.forEach(t),j.forEach(t)},m(c,I){h(c,m,I),e(m,G),h(c,u,I),h(c,g,I),e(g,O),e(O,T),e(g,_),e(g,A),e(A,me),h(c,J,I),h(c,$,I),e($,X),e($,D),e(D,Y),e($,fe),e($,x),e(x,ue),e($,pe),h(c,S,I),h(c,q,I),e(q,Z),h(c,ee,I),h(c,M,I),e(M,z),e(z,oe),e(z,L),e(L,ce),e(z,ne),e(z,H),e(H,ge),e(M,he),e(M,E),e(E,_e),e(E,N),e(N,Q),e(E,ie),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,le),e(C,B),e(B,ve)},d(c){c&&t(m),c&&t(u),c&&t(g),c&&t(J),c&&t($),c&&t(S),c&&t(q),c&&t(ee),c&&t(M)}}}function yu(K){let m,G,u,g,O;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),O=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var A=i(u);g=s(A,"Module"),A.forEach(t),O=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,u),e(u,g),e(m,O)},d(T){T&&t(m)}}}function bu(K){let m,G,u,g,O,T,_,A,me,J,$,X,D,Y,fe,x,ue,pe,S,q,Z,ee,M,z,oe,L,ce,ne,H,ge,he,E,_e,N,Q,ie,W,Te,te,C,le,B,ve;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),O=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),ue=n("model(inputs)"),pe=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),L=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),he=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),Q=n("model([input_ids, attention_mask])"),ie=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),le=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){m=r(c,"P",{});var I=i(m);G=s(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),u=d(c),g=r(c,"UL",{});var U=i(g);O=r(U,"LI",{});var ze=i(O);T=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),_=d(U),A=r(U,"LI",{});var Fe=i(A);me=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),U.forEach(t),J=d(c),$=r(c,"P",{});var F=i($);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),fe=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var qe=i(x);ue=s(qe,"model(inputs)"),qe.forEach(t),pe=s(F,"."),F.forEach(t),S=d(c),q=r(c,"P",{});var ke=i(q);Z=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),ee=d(c),M=r(c,"UL",{});var j=i(M);z=r(j,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),L=r(R,"CODE",{});var ye=i(L);ce=s(ye,"input_ids"),ye.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var Ce=i(H);ge=s(Ce,"model(inputs_ids)"),Ce.forEach(t),R.forEach(t),he=d(j),E=r(j,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(V,"CODE",{});var $e=i(N);Q=s($e,"model([input_ids, attention_mask])"),$e.forEach(t),ie=s(V," or "),W=r(V,"CODE",{});var we=i(W);Te=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),V.forEach(t),te=d(j),C=r(j,"LI",{});var be=i(C);le=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(be,"CODE",{});var Ge=i(B);ve=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),be.forEach(t),j.forEach(t)},m(c,I){h(c,m,I),e(m,G),h(c,u,I),h(c,g,I),e(g,O),e(O,T),e(g,_),e(g,A),e(A,me),h(c,J,I),h(c,$,I),e($,X),e($,D),e(D,Y),e($,fe),e($,x),e(x,ue),e($,pe),h(c,S,I),h(c,q,I),e(q,Z),h(c,ee,I),h(c,M,I),e(M,z),e(z,oe),e(z,L),e(L,ce),e(z,ne),e(z,H),e(H,ge),e(M,he),e(M,E),e(E,_e),e(E,N),e(N,Q),e(E,ie),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,le),e(C,B),e(B,ve)},d(c){c&&t(m),c&&t(u),c&&t(g),c&&t(J),c&&t($),c&&t(S),c&&t(q),c&&t(ee),c&&t(M)}}}function wu(K){let m,G,u,g,O;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),O=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var A=i(u);g=s(A,"Module"),A.forEach(t),O=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,u),e(u,g),e(m,O)},d(T){T&&t(m)}}}function Pu(K){let m,G,u,g,O,T,_,A,me,J,$,X,D,Y,fe,x,ue,pe,S,q,Z,ee,M,z,oe,L,ce,ne,H,ge,he,E,_e,N,Q,ie,W,Te,te,C,le,B,ve,c,I,U,ze,Fe,F,se,qe,ke,j,R,ye,Ce,V,$e,we,be,Ge,et,_i,zs,Ti,vi,Fs,ki,yi,qs,bi,wi,rr,yo,ir,We,Pi,Cs,Oi,Ii,js,Ai,$i,Jn,Gi,Mi,Ds,Ei,zi,lr,wt,Rt,xs,bo,Fi,Hs,qi,dr,je,wo,Ci,it,ji,Xn,Di,xi,Qn,Hi,Si,Po,Ni,Li,Wi,Pt,Bi,Yn,Ui,Ri,Zn,Vi,Ki,Ji,Ss,Xi,Qi,Oo,pr,Ot,Vt,Ns,Io,Yi,Ls,Zi,cr,De,Ao,el,Ws,tl,ol,$o,Bs,nl,sl,lt,al,Us,rl,il,Rs,ll,dl,Vs,pl,cl,hl,Go,ml,es,fl,ul,gl,ts,Mo,hr,It,Kt,Ks,Eo,_l,Js,Tl,mr,Ye,zo,vl,Fo,kl,Xs,yl,bl,wl,qo,Qs,Pl,Ol,Ys,Il,Al,Co,$l,os,Gl,Ml,fr,At,Jt,Zs,jo,El,ea,zl,ur,$t,Do,Fl,ta,ql,gr,Gt,xo,Cl,oa,jl,_r,Mt,Xt,na,Ho,Dl,sa,xl,Tr,xe,So,Hl,aa,Sl,Nl,No,Ll,ns,Wl,Bl,Ul,Lo,Rl,Wo,Vl,Kl,Jl,Be,Bo,Xl,Et,Ql,ss,Yl,Zl,ra,ed,td,od,Qt,nd,ia,sd,ad,Uo,vr,zt,Yt,la,Ro,rd,da,id,kr,He,Vo,ld,pa,dd,pd,Ko,cd,as,hd,md,fd,Jo,ud,Xo,gd,_d,Td,Ue,Qo,vd,Ft,kd,rs,yd,bd,ca,wd,Pd,Od,Zt,Id,ha,Ad,$d,Yo,yr,qt,eo,ma,Zo,Gd,fa,Md,br,Se,en,Ed,ua,zd,Fd,tn,qd,is,Cd,jd,Dd,on,xd,nn,Hd,Sd,Nd,Re,sn,Ld,Ct,Wd,ls,Bd,Ud,ga,Rd,Vd,Kd,to,Jd,_a,Xd,Qd,an,wr,jt,oo,Ta,rn,Yd,va,Zd,Pr,Ne,ln,ep,Le,tp,ds,op,np,ka,sp,ap,ya,rp,ip,ba,lp,dp,wa,pp,cp,hp,dn,mp,ps,fp,up,gp,pn,_p,cn,Tp,vp,kp,ae,hn,yp,Dt,bp,cs,wp,Pp,Pa,Op,Ip,Ap,no,$p,Oa,Gp,Mp,mn,Ep,fn,zp,Ia,Fp,qp,un,Cp,gn,Or,xt,so,Aa,_n,jp,$a,Dp,Ir,Oe,Tn,xp,Ga,Hp,Sp,vn,Np,hs,Lp,Wp,Bp,kn,Up,yn,Rp,Vp,Kp,ao,Jp,Ve,bn,Xp,Ht,Qp,ms,Yp,Zp,Ma,ec,tc,oc,ro,nc,Ea,sc,ac,wn,Ar,St,io,za,Pn,rc,Fa,ic,$r,Ie,On,lc,qa,dc,pc,In,cc,fs,hc,mc,fc,An,uc,$n,gc,_c,Tc,lo,vc,Ke,Gn,kc,Nt,yc,us,bc,wc,Ca,Pc,Oc,Ic,po,Ac,ja,$c,Gc,Mn,Gr,Lt,co,Da,En,Mc,xa,Ec,Mr,Ae,zn,zc,Ha,Fc,qc,Fn,Cc,gs,jc,Dc,xc,qn,Hc,Cn,Sc,Nc,Lc,ho,Wc,Je,jn,Bc,Wt,Uc,_s,Rc,Vc,Sa,Kc,Jc,Xc,mo,Qc,Na,Yc,Zc,Dn,Er,Bt,fo,La,xn,eh,Wa,th,zr,de,Hn,oh,Ba,nh,sh,Ts,vs,ah,rh,ih,Ze,lh,Ua,dh,ph,Ra,ch,hh,Va,mh,fh,Ka,uh,gh,_h,Sn,Th,ks,vh,kh,yh,Nn,bh,Ln,wh,Ph,Oh,uo,Ih,Me,Wn,Ah,Ut,$h,ys,Gh,Mh,Ja,Eh,zh,Fh,go,qh,Xa,Ch,jh,Bn,Dh,Un,Fr;return T=new Qe({}),Y=new Qe({}),yo=new Xe({props:{code:`pip install spacy ftfy==4.4.3
python -m spacy download en`,highlighted:`pip install spacy ftfy==4.4.3
python -m spacy download en`}}),bo=new Qe({}),wo=new re({props:{name:"class transformers.OpenAIGPTConfig",anchor:"transformers.OpenAIGPTConfig",parameters:[{name:"vocab_size",val:" = 40478"},{name:"n_positions",val:" = 512"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"afn",val:" = 'gelu'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"predict_special_tokens",val:" = True"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/configuration_openai.py#L27",parametersDescription:[{anchor:"transformers.OpenAIGPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 40478) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTModel">OpenAIGPTModel</a> or <a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel">TFOpenAIGPTModel</a>.`,name:"vocab_size"},{anchor:"transformers.OpenAIGPTConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.OpenAIGPTConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.OpenAIGPTConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.OpenAIGPTConfig.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.OpenAIGPTConfig.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.OpenAIGPTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Oo=new Xe({props:{code:`from transformers import OpenAIGPTConfig, OpenAIGPTModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Io=new Qe({}),Ao=new re({props:{name:"class transformers.OpenAIGPTTokenizer",anchor:"transformers.OpenAIGPTTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/tokenization_openai.py#L73",parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),Mo=new re({props:{name:"save_vocabulary",anchor:"transformers.OpenAIGPTTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/tokenization_openai.py#L206"}}),Eo=new Qe({}),zo=new re({props:{name:"class transformers.OpenAIGPTTokenizerFast",anchor:"transformers.OpenAIGPTTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/tokenization_openai_fast.py#L40",parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),jo=new Qe({}),Do=new re({props:{name:"class transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mc_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/modeling_openai.py#L301",parametersDescription:[{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_loss",description:`<strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) &#x2014;
Multiple choice classification loss.`,name:"mc_loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),xo=new re({props:{name:"class transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"mc_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/modeling_tf_openai.py#L375",parametersDescription:[{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),Ho=new Qe({}),So=new re({props:{name:"class transformers.OpenAIGPTModel",anchor:"transformers.OpenAIGPTModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/modeling_openai.py#L405",parametersDescription:[{anchor:"transformers.OpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16547/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bo=new re({props:{name:"forward",anchor:"transformers.OpenAIGPTModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/modeling_openai.py#L431",parametersDescription:[{anchor:"transformers.OpenAIGPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16547/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16547/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16547/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16547/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_16547/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qt=new rt({props:{$$slots:{default:[hu]},$$scope:{ctx:K}}}),Uo=new Xe({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ro=new Qe({}),Vo=new re({props:{name:"class transformers.OpenAIGPTLMHeadModel",anchor:"transformers.OpenAIGPTLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/modeling_openai.py#L536",parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16547/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Qo=new re({props:{name:"forward",anchor:"transformers.OpenAIGPTLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/modeling_openai.py#L551",parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16547/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16547/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16547/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16547/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_16547/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zt=new rt({props:{$$slots:{default:[mu]},$$scope:{ctx:K}}}),Yo=new Xe({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Zo=new Qe({}),en=new re({props:{name:"class transformers.OpenAIGPTDoubleHeadsModel",anchor:"transformers.OpenAIGPTDoubleHeadsModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/modeling_openai.py#L623",parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16547/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),sn=new re({props:{name:"forward",anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"mc_token_ids",val:" = None"},{name:"labels",val:" = None"},{name:"mc_labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/modeling_openai.py#L641",parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16547/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16547/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16547/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-1, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code> are
ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_labels",description:`<strong>mc_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"mc_labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new rt({props:{$$slots:{default:[fu]},$$scope:{ctx:K}}}),an=new Xe({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTDoubleHeadsModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_logits = outputs.mc_logits`}}),rn=new Qe({}),ln=new re({props:{name:"class transformers.OpenAIGPTForSequenceClassification",anchor:"transformers.OpenAIGPTForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/modeling_openai.py#L749",parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16547/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hn=new re({props:{name:"forward",anchor:"transformers.OpenAIGPTForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/modeling_openai.py#L759",parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16547/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16547/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16547/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16547/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_16547/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),no=new rt({props:{$$slots:{default:[uu]},$$scope:{ctx:K}}}),mn=new Xe({props:{code:`import torch
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
`}}),fn=new Xe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),un=new Xe({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),_n=new Qe({}),Tn=new re({props:{name:"class transformers.TFOpenAIGPTModel",anchor:"transformers.TFOpenAIGPTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/modeling_tf_openai.py#L500",parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16547/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ao=new rt({props:{$$slots:{default:[gu]},$$scope:{ctx:K}}}),bn=new re({props:{name:"call",anchor:"transformers.TFOpenAIGPTModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/modeling_tf_openai.py#L505",parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16547/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16547/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16547/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16547/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_16547/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ro=new rt({props:{$$slots:{default:[_u]},$$scope:{ctx:K}}}),wn=new Xe({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Pn=new Qe({}),On=new re({props:{name:"class transformers.TFOpenAIGPTLMHeadModel",anchor:"transformers.TFOpenAIGPTLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/modeling_tf_openai.py#L557",parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16547/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new rt({props:{$$slots:{default:[Tu]},$$scope:{ctx:K}}}),Gn=new re({props:{name:"call",anchor:"transformers.TFOpenAIGPTLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/modeling_tf_openai.py#L568",parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16547/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16547/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16547/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16547/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_16547/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),po=new rt({props:{$$slots:{default:[vu]},$$scope:{ctx:K}}}),Mn=new Xe({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),En=new Qe({}),zn=new re({props:{name:"class transformers.TFOpenAIGPTDoubleHeadsModel",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/modeling_tf_openai.py#L647",parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16547/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ho=new rt({props:{$$slots:{default:[ku]},$$scope:{ctx:K}}}),jn=new re({props:{name:"call",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mc_token_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/modeling_tf_openai.py#L656",parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16547/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16547/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16547/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mo=new rt({props:{$$slots:{default:[yu]},$$scope:{ctx:K}}}),Dn=new Xe({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_prediction_scores, mc_prediction_scores = outputs[:<span class="hljs-number">2</span>]`}}),xn=new Qe({}),Hn=new re({props:{name:"class transformers.TFOpenAIGPTForSequenceClassification",anchor:"transformers.TFOpenAIGPTForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/modeling_tf_openai.py#L783",parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16547/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),uo=new rt({props:{$$slots:{default:[bu]},$$scope:{ctx:K}}}),Wn=new re({props:{name:"call",anchor:"transformers.TFOpenAIGPTForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16547/src/transformers/models/openai/modeling_tf_openai.py#L795",parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16547/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16547/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16547/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16547/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_16547/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),go=new rt({props:{$$slots:{default:[wu]},$$scope:{ctx:K}}}),Bn=new Xe({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
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
`}}),{c(){m=a("meta"),G=l(),u=a("h1"),g=a("a"),O=a("span"),v(T.$$.fragment),_=l(),A=a("span"),me=n("OpenAI GPT"),J=l(),$=a("h2"),X=a("a"),D=a("span"),v(Y.$$.fragment),fe=l(),x=a("span"),ue=n("Overview"),pe=l(),S=a("p"),q=n("OpenAI GPT model was proposed in "),Z=a("a"),ee=n("Improving Language Understanding by Generative Pre-Training"),M=n(`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),z=l(),oe=a("p"),L=n("The abstract from the paper is the following:"),ce=l(),ne=a("p"),H=a("em"),ge=n(`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),he=l(),E=a("p"),_e=n("Tips:"),N=l(),Q=a("ul"),ie=a("li"),W=n(`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Te=l(),te=a("li"),C=n(`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),le=a("em"),B=n("run_generation.py"),ve=n(" example script."),c=l(),I=a("p"),U=a("a"),ze=n("Write With Transformer"),Fe=n(` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),F=l(),se=a("p"),qe=n("This model was contributed by "),ke=a("a"),j=n("thomwolf"),R=n(". The original code can be found "),ye=a("a"),Ce=n("here"),V=n("."),$e=l(),we=a("p"),be=n("Note:"),Ge=l(),et=a("p"),_i=n("If you want to reproduce the original tokenization process of the "),zs=a("em"),Ti=n("OpenAI GPT"),vi=n(" paper, you will need to install "),Fs=a("code"),ki=n("ftfy"),yi=n(`
and `),qs=a("code"),bi=n("SpaCy"),wi=n(":"),rr=l(),v(yo.$$.fragment),ir=l(),We=a("p"),Pi=n("If you don\u2019t install "),Cs=a("code"),Oi=n("ftfy"),Ii=n(" and "),js=a("code"),Ai=n("SpaCy"),$i=n(", the "),Jn=a("a"),Gi=n("OpenAIGPTTokenizer"),Mi=n(` will default to tokenize
using BERT\u2019s `),Ds=a("code"),Ei=n("BasicTokenizer"),zi=n(" followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),lr=l(),wt=a("h2"),Rt=a("a"),xs=a("span"),v(bo.$$.fragment),Fi=l(),Hs=a("span"),qi=n("OpenAIGPTConfig"),dr=l(),je=a("div"),v(wo.$$.fragment),Ci=l(),it=a("p"),ji=n("This is the configuration class to store the configuration of a "),Xn=a("a"),Di=n("OpenAIGPTModel"),xi=n(" or a "),Qn=a("a"),Hi=n("TFOpenAIGPTModel"),Si=n(`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
`),Po=a("a"),Ni=n("GPT"),Li=n(" architecture from OpenAI."),Wi=l(),Pt=a("p"),Bi=n("Configuration objects inherit from "),Yn=a("a"),Ui=n("PretrainedConfig"),Ri=n(` and can be used to control the model outputs. Read the
documentation from `),Zn=a("a"),Vi=n("PretrainedConfig"),Ki=n(" for more information."),Ji=l(),Ss=a("p"),Xi=n("Examples:"),Qi=l(),v(Oo.$$.fragment),pr=l(),Ot=a("h2"),Vt=a("a"),Ns=a("span"),v(Io.$$.fragment),Yi=l(),Ls=a("span"),Zi=n("OpenAIGPTTokenizer"),cr=l(),De=a("div"),v(Ao.$$.fragment),el=l(),Ws=a("p"),tl=n("Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),ol=l(),$o=a("ul"),Bs=a("li"),nl=n("lowercases all inputs,"),sl=l(),lt=a("li"),al=n("uses "),Us=a("code"),rl=n("SpaCy"),il=n(" tokenizer and "),Rs=a("code"),ll=n("ftfy"),dl=n(` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Vs=a("code"),pl=n("BasicTokenizer"),cl=n(" if not."),hl=l(),Go=a("p"),ml=n("This tokenizer inherits from "),es=a("a"),fl=n("PreTrainedTokenizer"),ul=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),gl=l(),ts=a("div"),v(Mo.$$.fragment),hr=l(),It=a("h2"),Kt=a("a"),Ks=a("span"),v(Eo.$$.fragment),_l=l(),Js=a("span"),Tl=n("OpenAIGPTTokenizerFast"),mr=l(),Ye=a("div"),v(zo.$$.fragment),vl=l(),Fo=a("p"),kl=n("Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),Xs=a("em"),yl=n("tokenizers"),bl=n(` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),wl=l(),qo=a("ul"),Qs=a("li"),Pl=n("lower case all inputs"),Ol=l(),Ys=a("li"),Il=n("uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),Al=l(),Co=a("p"),$l=n("This tokenizer inherits from "),os=a("a"),Gl=n("PreTrainedTokenizerFast"),Ml=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),fr=l(),At=a("h2"),Jt=a("a"),Zs=a("span"),v(jo.$$.fragment),El=l(),ea=a("span"),zl=n("OpenAI specific outputs"),ur=l(),$t=a("div"),v(Do.$$.fragment),Fl=l(),ta=a("p"),ql=n("Base class for outputs of models predicting if two sentences are consecutive or not."),gr=l(),Gt=a("div"),v(xo.$$.fragment),Cl=l(),oa=a("p"),jl=n("Base class for outputs of models predicting if two sentences are consecutive or not."),_r=l(),Mt=a("h2"),Xt=a("a"),na=a("span"),v(Ho.$$.fragment),Dl=l(),sa=a("span"),xl=n("OpenAIGPTModel"),Tr=l(),xe=a("div"),v(So.$$.fragment),Hl=l(),aa=a("p"),Sl=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Nl=l(),No=a("p"),Ll=n("This model inherits from "),ns=a("a"),Wl=n("PreTrainedModel"),Bl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ul=l(),Lo=a("p"),Rl=n("This model is also a PyTorch "),Wo=a("a"),Vl=n("torch.nn.Module"),Kl=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jl=l(),Be=a("div"),v(Bo.$$.fragment),Xl=l(),Et=a("p"),Ql=n("The "),ss=a("a"),Yl=n("OpenAIGPTModel"),Zl=n(" forward method, overrides the "),ra=a("code"),ed=n("__call__"),td=n(" special method."),od=l(),v(Qt.$$.fragment),nd=l(),ia=a("p"),sd=n("Example:"),ad=l(),v(Uo.$$.fragment),vr=l(),zt=a("h2"),Yt=a("a"),la=a("span"),v(Ro.$$.fragment),rd=l(),da=a("span"),id=n("OpenAIGPTLMHeadModel"),kr=l(),He=a("div"),v(Vo.$$.fragment),ld=l(),pa=a("p"),dd=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),pd=l(),Ko=a("p"),cd=n("This model inherits from "),as=a("a"),hd=n("PreTrainedModel"),md=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fd=l(),Jo=a("p"),ud=n("This model is also a PyTorch "),Xo=a("a"),gd=n("torch.nn.Module"),_d=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Td=l(),Ue=a("div"),v(Qo.$$.fragment),vd=l(),Ft=a("p"),kd=n("The "),rs=a("a"),yd=n("OpenAIGPTLMHeadModel"),bd=n(" forward method, overrides the "),ca=a("code"),wd=n("__call__"),Pd=n(" special method."),Od=l(),v(Zt.$$.fragment),Id=l(),ha=a("p"),Ad=n("Example:"),$d=l(),v(Yo.$$.fragment),yr=l(),qt=a("h2"),eo=a("a"),ma=a("span"),v(Zo.$$.fragment),Gd=l(),fa=a("span"),Md=n("OpenAIGPTDoubleHeadsModel"),br=l(),Se=a("div"),v(en.$$.fragment),Ed=l(),ua=a("p"),zd=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Fd=l(),tn=a("p"),qd=n("This model inherits from "),is=a("a"),Cd=n("PreTrainedModel"),jd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dd=l(),on=a("p"),xd=n("This model is also a PyTorch "),nn=a("a"),Hd=n("torch.nn.Module"),Sd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nd=l(),Re=a("div"),v(sn.$$.fragment),Ld=l(),Ct=a("p"),Wd=n("The "),ls=a("a"),Bd=n("OpenAIGPTDoubleHeadsModel"),Ud=n(" forward method, overrides the "),ga=a("code"),Rd=n("__call__"),Vd=n(" special method."),Kd=l(),v(to.$$.fragment),Jd=l(),_a=a("p"),Xd=n("Examples:"),Qd=l(),v(an.$$.fragment),wr=l(),jt=a("h2"),oo=a("a"),Ta=a("span"),v(rn.$$.fragment),Yd=l(),va=a("span"),Zd=n("OpenAIGPTForSequenceClassification"),Pr=l(),Ne=a("div"),v(ln.$$.fragment),ep=l(),Le=a("p"),tp=n(`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),ds=a("a"),op=n("OpenAIGPTForSequenceClassification"),np=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),ka=a("code"),sp=n("pad_token_id"),ap=n(` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),ya=a("code"),rp=n("pad_token_id"),ip=n(` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),ba=a("code"),lp=n("inputs_embeds"),dp=n(" are passed instead of "),wa=a("code"),pp=n("input_ids"),cp=n(`, it does the same (take
the last value in each row of the batch).`),hp=l(),dn=a("p"),mp=n("This model inherits from "),ps=a("a"),fp=n("PreTrainedModel"),up=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gp=l(),pn=a("p"),_p=n("This model is also a PyTorch "),cn=a("a"),Tp=n("torch.nn.Module"),vp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kp=l(),ae=a("div"),v(hn.$$.fragment),yp=l(),Dt=a("p"),bp=n("The "),cs=a("a"),wp=n("OpenAIGPTForSequenceClassification"),Pp=n(" forward method, overrides the "),Pa=a("code"),Op=n("__call__"),Ip=n(" special method."),Ap=l(),v(no.$$.fragment),$p=l(),Oa=a("p"),Gp=n("Example of single-label classification:"),Mp=l(),v(mn.$$.fragment),Ep=l(),v(fn.$$.fragment),zp=l(),Ia=a("p"),Fp=n("Example of multi-label classification:"),qp=l(),v(un.$$.fragment),Cp=l(),v(gn.$$.fragment),Or=l(),xt=a("h2"),so=a("a"),Aa=a("span"),v(_n.$$.fragment),jp=l(),$a=a("span"),Dp=n("TFOpenAIGPTModel"),Ir=l(),Oe=a("div"),v(Tn.$$.fragment),xp=l(),Ga=a("p"),Hp=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Sp=l(),vn=a("p"),Np=n("This model inherits from "),hs=a("a"),Lp=n("TFPreTrainedModel"),Wp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bp=l(),kn=a("p"),Up=n("This model is also a "),yn=a("a"),Rp=n("tf.keras.Model"),Vp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kp=l(),v(ao.$$.fragment),Jp=l(),Ve=a("div"),v(bn.$$.fragment),Xp=l(),Ht=a("p"),Qp=n("The "),ms=a("a"),Yp=n("TFOpenAIGPTModel"),Zp=n(" forward method, overrides the "),Ma=a("code"),ec=n("__call__"),tc=n(" special method."),oc=l(),v(ro.$$.fragment),nc=l(),Ea=a("p"),sc=n("Example:"),ac=l(),v(wn.$$.fragment),Ar=l(),St=a("h2"),io=a("a"),za=a("span"),v(Pn.$$.fragment),rc=l(),Fa=a("span"),ic=n("TFOpenAIGPTLMHeadModel"),$r=l(),Ie=a("div"),v(On.$$.fragment),lc=l(),qa=a("p"),dc=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),pc=l(),In=a("p"),cc=n("This model inherits from "),fs=a("a"),hc=n("TFPreTrainedModel"),mc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fc=l(),An=a("p"),uc=n("This model is also a "),$n=a("a"),gc=n("tf.keras.Model"),_c=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tc=l(),v(lo.$$.fragment),vc=l(),Ke=a("div"),v(Gn.$$.fragment),kc=l(),Nt=a("p"),yc=n("The "),us=a("a"),bc=n("TFOpenAIGPTLMHeadModel"),wc=n(" forward method, overrides the "),Ca=a("code"),Pc=n("__call__"),Oc=n(" special method."),Ic=l(),v(po.$$.fragment),Ac=l(),ja=a("p"),$c=n("Example:"),Gc=l(),v(Mn.$$.fragment),Gr=l(),Lt=a("h2"),co=a("a"),Da=a("span"),v(En.$$.fragment),Mc=l(),xa=a("span"),Ec=n("TFOpenAIGPTDoubleHeadsModel"),Mr=l(),Ae=a("div"),v(zn.$$.fragment),zc=l(),Ha=a("p"),Fc=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),qc=l(),Fn=a("p"),Cc=n("This model inherits from "),gs=a("a"),jc=n("TFPreTrainedModel"),Dc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xc=l(),qn=a("p"),Hc=n("This model is also a "),Cn=a("a"),Sc=n("tf.keras.Model"),Nc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lc=l(),v(ho.$$.fragment),Wc=l(),Je=a("div"),v(jn.$$.fragment),Bc=l(),Wt=a("p"),Uc=n("The "),_s=a("a"),Rc=n("TFOpenAIGPTDoubleHeadsModel"),Vc=n(" forward method, overrides the "),Sa=a("code"),Kc=n("__call__"),Jc=n(" special method."),Xc=l(),v(mo.$$.fragment),Qc=l(),Na=a("p"),Yc=n("Examples:"),Zc=l(),v(Dn.$$.fragment),Er=l(),Bt=a("h2"),fo=a("a"),La=a("span"),v(xn.$$.fragment),eh=l(),Wa=a("span"),th=n("TFOpenAIGPTForSequenceClassification"),zr=l(),de=a("div"),v(Hn.$$.fragment),oh=l(),Ba=a("p"),nh=n("The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),sh=l(),Ts=a("p"),vs=a("a"),ah=n("TFOpenAIGPTForSequenceClassification"),rh=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),ih=l(),Ze=a("p"),lh=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ua=a("code"),dh=n("pad_token_id"),ph=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ra=a("code"),ch=n("pad_token_id"),hh=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Va=a("code"),mh=n("inputs_embeds"),fh=n(" are passed instead of "),Ka=a("code"),uh=n("input_ids"),gh=n(`, it does the same (take the last value in
each row of the batch).`),_h=l(),Sn=a("p"),Th=n("This model inherits from "),ks=a("a"),vh=n("TFPreTrainedModel"),kh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh=l(),Nn=a("p"),bh=n("This model is also a "),Ln=a("a"),wh=n("tf.keras.Model"),Ph=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Oh=l(),v(uo.$$.fragment),Ih=l(),Me=a("div"),v(Wn.$$.fragment),Ah=l(),Ut=a("p"),$h=n("The "),ys=a("a"),Gh=n("TFOpenAIGPTForSequenceClassification"),Mh=n(" forward method, overrides the "),Ja=a("code"),Eh=n("__call__"),zh=n(" special method."),Fh=l(),v(go.$$.fragment),qh=l(),Xa=a("p"),Ch=n("Example:"),jh=l(),v(Bn.$$.fragment),Dh=l(),v(Un.$$.fragment),this.h()},l(o){const f=pu('[data-svelte="svelte-1phssyn"]',document.head);m=r(f,"META",{name:!0,content:!0}),f.forEach(t),G=d(o),u=r(o,"H1",{class:!0});var Rn=i(u);g=r(Rn,"A",{id:!0,class:!0,href:!0});var Qa=i(g);O=r(Qa,"SPAN",{});var Ya=i(O);k(T.$$.fragment,Ya),Ya.forEach(t),Qa.forEach(t),_=d(Rn),A=r(Rn,"SPAN",{});var Za=i(A);me=s(Za,"OpenAI GPT"),Za.forEach(t),Rn.forEach(t),J=d(o),$=r(o,"H2",{class:!0});var Vn=i($);X=r(Vn,"A",{id:!0,class:!0,href:!0});var er=i(X);D=r(er,"SPAN",{});var tr=i(D);k(Y.$$.fragment,tr),tr.forEach(t),er.forEach(t),fe=d(Vn),x=r(Vn,"SPAN",{});var or=i(x);ue=s(or,"Overview"),or.forEach(t),Vn.forEach(t),pe=d(o),S=r(o,"P",{});var Kn=i(S);q=s(Kn,"OpenAI GPT model was proposed in "),Z=r(Kn,"A",{href:!0,rel:!0});var nr=i(Z);ee=s(nr,"Improving Language Understanding by Generative Pre-Training"),nr.forEach(t),M=s(Kn,`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),Kn.forEach(t),z=d(o),oe=r(o,"P",{});var sr=i(oe);L=s(sr,"The abstract from the paper is the following:"),sr.forEach(t),ce=d(o),ne=r(o,"P",{});var ar=i(ne);H=r(ar,"EM",{});var Sh=i(H);ge=s(Sh,`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),Sh.forEach(t),ar.forEach(t),he=d(o),E=r(o,"P",{});var Nh=i(E);_e=s(Nh,"Tips:"),Nh.forEach(t),N=d(o),Q=r(o,"UL",{});var qr=i(Q);ie=r(qr,"LI",{});var Lh=i(ie);W=s(Lh,`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Lh.forEach(t),Te=d(qr),te=r(qr,"LI",{});var Cr=i(te);C=s(Cr,`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),le=r(Cr,"EM",{});var Wh=i(le);B=s(Wh,"run_generation.py"),Wh.forEach(t),ve=s(Cr," example script."),Cr.forEach(t),qr.forEach(t),c=d(o),I=r(o,"P",{});var xh=i(I);U=r(xh,"A",{href:!0,rel:!0});var Bh=i(U);ze=s(Bh,"Write With Transformer"),Bh.forEach(t),Fe=s(xh,` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),xh.forEach(t),F=d(o),se=r(o,"P",{});var bs=i(se);qe=s(bs,"This model was contributed by "),ke=r(bs,"A",{href:!0,rel:!0});var Uh=i(ke);j=s(Uh,"thomwolf"),Uh.forEach(t),R=s(bs,". The original code can be found "),ye=r(bs,"A",{href:!0,rel:!0});var Rh=i(ye);Ce=s(Rh,"here"),Rh.forEach(t),V=s(bs,"."),bs.forEach(t),$e=d(o),we=r(o,"P",{});var Vh=i(we);be=s(Vh,"Note:"),Vh.forEach(t),Ge=d(o),et=r(o,"P",{});var _o=i(et);_i=s(_o,"If you want to reproduce the original tokenization process of the "),zs=r(_o,"EM",{});var Kh=i(zs);Ti=s(Kh,"OpenAI GPT"),Kh.forEach(t),vi=s(_o," paper, you will need to install "),Fs=r(_o,"CODE",{});var Jh=i(Fs);ki=s(Jh,"ftfy"),Jh.forEach(t),yi=s(_o,`
and `),qs=r(_o,"CODE",{});var Xh=i(qs);bi=s(Xh,"SpaCy"),Xh.forEach(t),wi=s(_o,":"),_o.forEach(t),rr=d(o),k(yo.$$.fragment,o),ir=d(o),We=r(o,"P",{});var dt=i(We);Pi=s(dt,"If you don\u2019t install "),Cs=r(dt,"CODE",{});var Qh=i(Cs);Oi=s(Qh,"ftfy"),Qh.forEach(t),Ii=s(dt," and "),js=r(dt,"CODE",{});var Yh=i(js);Ai=s(Yh,"SpaCy"),Yh.forEach(t),$i=s(dt,", the "),Jn=r(dt,"A",{href:!0});var Zh=i(Jn);Gi=s(Zh,"OpenAIGPTTokenizer"),Zh.forEach(t),Mi=s(dt,` will default to tokenize
using BERT\u2019s `),Ds=r(dt,"CODE",{});var em=i(Ds);Ei=s(em,"BasicTokenizer"),em.forEach(t),zi=s(dt," followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),dt.forEach(t),lr=d(o),wt=r(o,"H2",{class:!0});var jr=i(wt);Rt=r(jr,"A",{id:!0,class:!0,href:!0});var tm=i(Rt);xs=r(tm,"SPAN",{});var om=i(xs);k(bo.$$.fragment,om),om.forEach(t),tm.forEach(t),Fi=d(jr),Hs=r(jr,"SPAN",{});var nm=i(Hs);qi=s(nm,"OpenAIGPTConfig"),nm.forEach(t),jr.forEach(t),dr=d(o),je=r(o,"DIV",{class:!0});var pt=i(je);k(wo.$$.fragment,pt),Ci=d(pt),it=r(pt,"P",{});var To=i(it);ji=s(To,"This is the configuration class to store the configuration of a "),Xn=r(To,"A",{href:!0});var sm=i(Xn);Di=s(sm,"OpenAIGPTModel"),sm.forEach(t),xi=s(To," or a "),Qn=r(To,"A",{href:!0});var am=i(Qn);Hi=s(am,"TFOpenAIGPTModel"),am.forEach(t),Si=s(To,`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
`),Po=r(To,"A",{href:!0,rel:!0});var rm=i(Po);Ni=s(rm,"GPT"),rm.forEach(t),Li=s(To," architecture from OpenAI."),To.forEach(t),Wi=d(pt),Pt=r(pt,"P",{});var ws=i(Pt);Bi=s(ws,"Configuration objects inherit from "),Yn=r(ws,"A",{href:!0});var im=i(Yn);Ui=s(im,"PretrainedConfig"),im.forEach(t),Ri=s(ws,` and can be used to control the model outputs. Read the
documentation from `),Zn=r(ws,"A",{href:!0});var lm=i(Zn);Vi=s(lm,"PretrainedConfig"),lm.forEach(t),Ki=s(ws," for more information."),ws.forEach(t),Ji=d(pt),Ss=r(pt,"P",{});var dm=i(Ss);Xi=s(dm,"Examples:"),dm.forEach(t),Qi=d(pt),k(Oo.$$.fragment,pt),pt.forEach(t),pr=d(o),Ot=r(o,"H2",{class:!0});var Dr=i(Ot);Vt=r(Dr,"A",{id:!0,class:!0,href:!0});var pm=i(Vt);Ns=r(pm,"SPAN",{});var cm=i(Ns);k(Io.$$.fragment,cm),cm.forEach(t),pm.forEach(t),Yi=d(Dr),Ls=r(Dr,"SPAN",{});var hm=i(Ls);Zi=s(hm,"OpenAIGPTTokenizer"),hm.forEach(t),Dr.forEach(t),cr=d(o),De=r(o,"DIV",{class:!0});var ct=i(De);k(Ao.$$.fragment,ct),el=d(ct),Ws=r(ct,"P",{});var mm=i(Ws);tl=s(mm,"Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),mm.forEach(t),ol=d(ct),$o=r(ct,"UL",{});var xr=i($o);Bs=r(xr,"LI",{});var fm=i(Bs);nl=s(fm,"lowercases all inputs,"),fm.forEach(t),sl=d(xr),lt=r(xr,"LI",{});var vo=i(lt);al=s(vo,"uses "),Us=r(vo,"CODE",{});var um=i(Us);rl=s(um,"SpaCy"),um.forEach(t),il=s(vo," tokenizer and "),Rs=r(vo,"CODE",{});var gm=i(Rs);ll=s(gm,"ftfy"),gm.forEach(t),dl=s(vo,` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Vs=r(vo,"CODE",{});var _m=i(Vs);pl=s(_m,"BasicTokenizer"),_m.forEach(t),cl=s(vo," if not."),vo.forEach(t),xr.forEach(t),hl=d(ct),Go=r(ct,"P",{});var Hr=i(Go);ml=s(Hr,"This tokenizer inherits from "),es=r(Hr,"A",{href:!0});var Tm=i(es);fl=s(Tm,"PreTrainedTokenizer"),Tm.forEach(t),ul=s(Hr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Hr.forEach(t),gl=d(ct),ts=r(ct,"DIV",{class:!0});var vm=i(ts);k(Mo.$$.fragment,vm),vm.forEach(t),ct.forEach(t),hr=d(o),It=r(o,"H2",{class:!0});var Sr=i(It);Kt=r(Sr,"A",{id:!0,class:!0,href:!0});var km=i(Kt);Ks=r(km,"SPAN",{});var ym=i(Ks);k(Eo.$$.fragment,ym),ym.forEach(t),km.forEach(t),_l=d(Sr),Js=r(Sr,"SPAN",{});var bm=i(Js);Tl=s(bm,"OpenAIGPTTokenizerFast"),bm.forEach(t),Sr.forEach(t),mr=d(o),Ye=r(o,"DIV",{class:!0});var ko=i(Ye);k(zo.$$.fragment,ko),vl=d(ko),Fo=r(ko,"P",{});var Nr=i(Fo);kl=s(Nr,"Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),Xs=r(Nr,"EM",{});var wm=i(Xs);yl=s(wm,"tokenizers"),wm.forEach(t),bl=s(Nr,` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),Nr.forEach(t),wl=d(ko),qo=r(ko,"UL",{});var Lr=i(qo);Qs=r(Lr,"LI",{});var Pm=i(Qs);Pl=s(Pm,"lower case all inputs"),Pm.forEach(t),Ol=d(Lr),Ys=r(Lr,"LI",{});var Om=i(Ys);Il=s(Om,"uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),Om.forEach(t),Lr.forEach(t),Al=d(ko),Co=r(ko,"P",{});var Wr=i(Co);$l=s(Wr,"This tokenizer inherits from "),os=r(Wr,"A",{href:!0});var Im=i(os);Gl=s(Im,"PreTrainedTokenizerFast"),Im.forEach(t),Ml=s(Wr,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Wr.forEach(t),ko.forEach(t),fr=d(o),At=r(o,"H2",{class:!0});var Br=i(At);Jt=r(Br,"A",{id:!0,class:!0,href:!0});var Am=i(Jt);Zs=r(Am,"SPAN",{});var $m=i(Zs);k(jo.$$.fragment,$m),$m.forEach(t),Am.forEach(t),El=d(Br),ea=r(Br,"SPAN",{});var Gm=i(ea);zl=s(Gm,"OpenAI specific outputs"),Gm.forEach(t),Br.forEach(t),ur=d(o),$t=r(o,"DIV",{class:!0});var Ur=i($t);k(Do.$$.fragment,Ur),Fl=d(Ur),ta=r(Ur,"P",{});var Mm=i(ta);ql=s(Mm,"Base class for outputs of models predicting if two sentences are consecutive or not."),Mm.forEach(t),Ur.forEach(t),gr=d(o),Gt=r(o,"DIV",{class:!0});var Rr=i(Gt);k(xo.$$.fragment,Rr),Cl=d(Rr),oa=r(Rr,"P",{});var Em=i(oa);jl=s(Em,"Base class for outputs of models predicting if two sentences are consecutive or not."),Em.forEach(t),Rr.forEach(t),_r=d(o),Mt=r(o,"H2",{class:!0});var Vr=i(Mt);Xt=r(Vr,"A",{id:!0,class:!0,href:!0});var zm=i(Xt);na=r(zm,"SPAN",{});var Fm=i(na);k(Ho.$$.fragment,Fm),Fm.forEach(t),zm.forEach(t),Dl=d(Vr),sa=r(Vr,"SPAN",{});var qm=i(sa);xl=s(qm,"OpenAIGPTModel"),qm.forEach(t),Vr.forEach(t),Tr=d(o),xe=r(o,"DIV",{class:!0});var ht=i(xe);k(So.$$.fragment,ht),Hl=d(ht),aa=r(ht,"P",{});var Cm=i(aa);Sl=s(Cm,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Cm.forEach(t),Nl=d(ht),No=r(ht,"P",{});var Kr=i(No);Ll=s(Kr,"This model inherits from "),ns=r(Kr,"A",{href:!0});var jm=i(ns);Wl=s(jm,"PreTrainedModel"),jm.forEach(t),Bl=s(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kr.forEach(t),Ul=d(ht),Lo=r(ht,"P",{});var Jr=i(Lo);Rl=s(Jr,"This model is also a PyTorch "),Wo=r(Jr,"A",{href:!0,rel:!0});var Dm=i(Wo);Vl=s(Dm,"torch.nn.Module"),Dm.forEach(t),Kl=s(Jr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jr.forEach(t),Jl=d(ht),Be=r(ht,"DIV",{class:!0});var mt=i(Be);k(Bo.$$.fragment,mt),Xl=d(mt),Et=r(mt,"P",{});var Ps=i(Et);Ql=s(Ps,"The "),ss=r(Ps,"A",{href:!0});var xm=i(ss);Yl=s(xm,"OpenAIGPTModel"),xm.forEach(t),Zl=s(Ps," forward method, overrides the "),ra=r(Ps,"CODE",{});var Hm=i(ra);ed=s(Hm,"__call__"),Hm.forEach(t),td=s(Ps," special method."),Ps.forEach(t),od=d(mt),k(Qt.$$.fragment,mt),nd=d(mt),ia=r(mt,"P",{});var Sm=i(ia);sd=s(Sm,"Example:"),Sm.forEach(t),ad=d(mt),k(Uo.$$.fragment,mt),mt.forEach(t),ht.forEach(t),vr=d(o),zt=r(o,"H2",{class:!0});var Xr=i(zt);Yt=r(Xr,"A",{id:!0,class:!0,href:!0});var Nm=i(Yt);la=r(Nm,"SPAN",{});var Lm=i(la);k(Ro.$$.fragment,Lm),Lm.forEach(t),Nm.forEach(t),rd=d(Xr),da=r(Xr,"SPAN",{});var Wm=i(da);id=s(Wm,"OpenAIGPTLMHeadModel"),Wm.forEach(t),Xr.forEach(t),kr=d(o),He=r(o,"DIV",{class:!0});var ft=i(He);k(Vo.$$.fragment,ft),ld=d(ft),pa=r(ft,"P",{});var Bm=i(pa);dd=s(Bm,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Bm.forEach(t),pd=d(ft),Ko=r(ft,"P",{});var Qr=i(Ko);cd=s(Qr,"This model inherits from "),as=r(Qr,"A",{href:!0});var Um=i(as);hd=s(Um,"PreTrainedModel"),Um.forEach(t),md=s(Qr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qr.forEach(t),fd=d(ft),Jo=r(ft,"P",{});var Yr=i(Jo);ud=s(Yr,"This model is also a PyTorch "),Xo=r(Yr,"A",{href:!0,rel:!0});var Rm=i(Xo);gd=s(Rm,"torch.nn.Module"),Rm.forEach(t),_d=s(Yr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yr.forEach(t),Td=d(ft),Ue=r(ft,"DIV",{class:!0});var ut=i(Ue);k(Qo.$$.fragment,ut),vd=d(ut),Ft=r(ut,"P",{});var Os=i(Ft);kd=s(Os,"The "),rs=r(Os,"A",{href:!0});var Vm=i(rs);yd=s(Vm,"OpenAIGPTLMHeadModel"),Vm.forEach(t),bd=s(Os," forward method, overrides the "),ca=r(Os,"CODE",{});var Km=i(ca);wd=s(Km,"__call__"),Km.forEach(t),Pd=s(Os," special method."),Os.forEach(t),Od=d(ut),k(Zt.$$.fragment,ut),Id=d(ut),ha=r(ut,"P",{});var Jm=i(ha);Ad=s(Jm,"Example:"),Jm.forEach(t),$d=d(ut),k(Yo.$$.fragment,ut),ut.forEach(t),ft.forEach(t),yr=d(o),qt=r(o,"H2",{class:!0});var Zr=i(qt);eo=r(Zr,"A",{id:!0,class:!0,href:!0});var Xm=i(eo);ma=r(Xm,"SPAN",{});var Qm=i(ma);k(Zo.$$.fragment,Qm),Qm.forEach(t),Xm.forEach(t),Gd=d(Zr),fa=r(Zr,"SPAN",{});var Ym=i(fa);Md=s(Ym,"OpenAIGPTDoubleHeadsModel"),Ym.forEach(t),Zr.forEach(t),br=d(o),Se=r(o,"DIV",{class:!0});var gt=i(Se);k(en.$$.fragment,gt),Ed=d(gt),ua=r(gt,"P",{});var Zm=i(ua);zd=s(Zm,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Zm.forEach(t),Fd=d(gt),tn=r(gt,"P",{});var ei=i(tn);qd=s(ei,"This model inherits from "),is=r(ei,"A",{href:!0});var ef=i(is);Cd=s(ef,"PreTrainedModel"),ef.forEach(t),jd=s(ei,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ei.forEach(t),Dd=d(gt),on=r(gt,"P",{});var ti=i(on);xd=s(ti,"This model is also a PyTorch "),nn=r(ti,"A",{href:!0,rel:!0});var tf=i(nn);Hd=s(tf,"torch.nn.Module"),tf.forEach(t),Sd=s(ti,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ti.forEach(t),Nd=d(gt),Re=r(gt,"DIV",{class:!0});var _t=i(Re);k(sn.$$.fragment,_t),Ld=d(_t),Ct=r(_t,"P",{});var Is=i(Ct);Wd=s(Is,"The "),ls=r(Is,"A",{href:!0});var of=i(ls);Bd=s(of,"OpenAIGPTDoubleHeadsModel"),of.forEach(t),Ud=s(Is," forward method, overrides the "),ga=r(Is,"CODE",{});var nf=i(ga);Rd=s(nf,"__call__"),nf.forEach(t),Vd=s(Is," special method."),Is.forEach(t),Kd=d(_t),k(to.$$.fragment,_t),Jd=d(_t),_a=r(_t,"P",{});var sf=i(_a);Xd=s(sf,"Examples:"),sf.forEach(t),Qd=d(_t),k(an.$$.fragment,_t),_t.forEach(t),gt.forEach(t),wr=d(o),jt=r(o,"H2",{class:!0});var oi=i(jt);oo=r(oi,"A",{id:!0,class:!0,href:!0});var af=i(oo);Ta=r(af,"SPAN",{});var rf=i(Ta);k(rn.$$.fragment,rf),rf.forEach(t),af.forEach(t),Yd=d(oi),va=r(oi,"SPAN",{});var lf=i(va);Zd=s(lf,"OpenAIGPTForSequenceClassification"),lf.forEach(t),oi.forEach(t),Pr=d(o),Ne=r(o,"DIV",{class:!0});var Tt=i(Ne);k(ln.$$.fragment,Tt),ep=d(Tt),Le=r(Tt,"P",{});var tt=i(Le);tp=s(tt,`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),ds=r(tt,"A",{href:!0});var df=i(ds);op=s(df,"OpenAIGPTForSequenceClassification"),df.forEach(t),np=s(tt,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),ka=r(tt,"CODE",{});var pf=i(ka);sp=s(pf,"pad_token_id"),pf.forEach(t),ap=s(tt,` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),ya=r(tt,"CODE",{});var cf=i(ya);rp=s(cf,"pad_token_id"),cf.forEach(t),ip=s(tt,` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),ba=r(tt,"CODE",{});var hf=i(ba);lp=s(hf,"inputs_embeds"),hf.forEach(t),dp=s(tt," are passed instead of "),wa=r(tt,"CODE",{});var mf=i(wa);pp=s(mf,"input_ids"),mf.forEach(t),cp=s(tt,`, it does the same (take
the last value in each row of the batch).`),tt.forEach(t),hp=d(Tt),dn=r(Tt,"P",{});var ni=i(dn);mp=s(ni,"This model inherits from "),ps=r(ni,"A",{href:!0});var ff=i(ps);fp=s(ff,"PreTrainedModel"),ff.forEach(t),up=s(ni,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ni.forEach(t),gp=d(Tt),pn=r(Tt,"P",{});var si=i(pn);_p=s(si,"This model is also a PyTorch "),cn=r(si,"A",{href:!0,rel:!0});var uf=i(cn);Tp=s(uf,"torch.nn.Module"),uf.forEach(t),vp=s(si,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),si.forEach(t),kp=d(Tt),ae=r(Tt,"DIV",{class:!0});var Pe=i(ae);k(hn.$$.fragment,Pe),yp=d(Pe),Dt=r(Pe,"P",{});var As=i(Dt);bp=s(As,"The "),cs=r(As,"A",{href:!0});var gf=i(cs);wp=s(gf,"OpenAIGPTForSequenceClassification"),gf.forEach(t),Pp=s(As," forward method, overrides the "),Pa=r(As,"CODE",{});var _f=i(Pa);Op=s(_f,"__call__"),_f.forEach(t),Ip=s(As," special method."),As.forEach(t),Ap=d(Pe),k(no.$$.fragment,Pe),$p=d(Pe),Oa=r(Pe,"P",{});var Tf=i(Oa);Gp=s(Tf,"Example of single-label classification:"),Tf.forEach(t),Mp=d(Pe),k(mn.$$.fragment,Pe),Ep=d(Pe),k(fn.$$.fragment,Pe),zp=d(Pe),Ia=r(Pe,"P",{});var vf=i(Ia);Fp=s(vf,"Example of multi-label classification:"),vf.forEach(t),qp=d(Pe),k(un.$$.fragment,Pe),Cp=d(Pe),k(gn.$$.fragment,Pe),Pe.forEach(t),Tt.forEach(t),Or=d(o),xt=r(o,"H2",{class:!0});var ai=i(xt);so=r(ai,"A",{id:!0,class:!0,href:!0});var kf=i(so);Aa=r(kf,"SPAN",{});var yf=i(Aa);k(_n.$$.fragment,yf),yf.forEach(t),kf.forEach(t),jp=d(ai),$a=r(ai,"SPAN",{});var bf=i($a);Dp=s(bf,"TFOpenAIGPTModel"),bf.forEach(t),ai.forEach(t),Ir=d(o),Oe=r(o,"DIV",{class:!0});var ot=i(Oe);k(Tn.$$.fragment,ot),xp=d(ot),Ga=r(ot,"P",{});var wf=i(Ga);Hp=s(wf,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),wf.forEach(t),Sp=d(ot),vn=r(ot,"P",{});var ri=i(vn);Np=s(ri,"This model inherits from "),hs=r(ri,"A",{href:!0});var Pf=i(hs);Lp=s(Pf,"TFPreTrainedModel"),Pf.forEach(t),Wp=s(ri,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ri.forEach(t),Bp=d(ot),kn=r(ot,"P",{});var ii=i(kn);Up=s(ii,"This model is also a "),yn=r(ii,"A",{href:!0,rel:!0});var Of=i(yn);Rp=s(Of,"tf.keras.Model"),Of.forEach(t),Vp=s(ii,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ii.forEach(t),Kp=d(ot),k(ao.$$.fragment,ot),Jp=d(ot),Ve=r(ot,"DIV",{class:!0});var vt=i(Ve);k(bn.$$.fragment,vt),Xp=d(vt),Ht=r(vt,"P",{});var $s=i(Ht);Qp=s($s,"The "),ms=r($s,"A",{href:!0});var If=i(ms);Yp=s(If,"TFOpenAIGPTModel"),If.forEach(t),Zp=s($s," forward method, overrides the "),Ma=r($s,"CODE",{});var Af=i(Ma);ec=s(Af,"__call__"),Af.forEach(t),tc=s($s," special method."),$s.forEach(t),oc=d(vt),k(ro.$$.fragment,vt),nc=d(vt),Ea=r(vt,"P",{});var $f=i(Ea);sc=s($f,"Example:"),$f.forEach(t),ac=d(vt),k(wn.$$.fragment,vt),vt.forEach(t),ot.forEach(t),Ar=d(o),St=r(o,"H2",{class:!0});var li=i(St);io=r(li,"A",{id:!0,class:!0,href:!0});var Gf=i(io);za=r(Gf,"SPAN",{});var Mf=i(za);k(Pn.$$.fragment,Mf),Mf.forEach(t),Gf.forEach(t),rc=d(li),Fa=r(li,"SPAN",{});var Ef=i(Fa);ic=s(Ef,"TFOpenAIGPTLMHeadModel"),Ef.forEach(t),li.forEach(t),$r=d(o),Ie=r(o,"DIV",{class:!0});var nt=i(Ie);k(On.$$.fragment,nt),lc=d(nt),qa=r(nt,"P",{});var zf=i(qa);dc=s(zf,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),zf.forEach(t),pc=d(nt),In=r(nt,"P",{});var di=i(In);cc=s(di,"This model inherits from "),fs=r(di,"A",{href:!0});var Ff=i(fs);hc=s(Ff,"TFPreTrainedModel"),Ff.forEach(t),mc=s(di,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),di.forEach(t),fc=d(nt),An=r(nt,"P",{});var pi=i(An);uc=s(pi,"This model is also a "),$n=r(pi,"A",{href:!0,rel:!0});var qf=i($n);gc=s(qf,"tf.keras.Model"),qf.forEach(t),_c=s(pi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pi.forEach(t),Tc=d(nt),k(lo.$$.fragment,nt),vc=d(nt),Ke=r(nt,"DIV",{class:!0});var kt=i(Ke);k(Gn.$$.fragment,kt),kc=d(kt),Nt=r(kt,"P",{});var Gs=i(Nt);yc=s(Gs,"The "),us=r(Gs,"A",{href:!0});var Cf=i(us);bc=s(Cf,"TFOpenAIGPTLMHeadModel"),Cf.forEach(t),wc=s(Gs," forward method, overrides the "),Ca=r(Gs,"CODE",{});var jf=i(Ca);Pc=s(jf,"__call__"),jf.forEach(t),Oc=s(Gs," special method."),Gs.forEach(t),Ic=d(kt),k(po.$$.fragment,kt),Ac=d(kt),ja=r(kt,"P",{});var Df=i(ja);$c=s(Df,"Example:"),Df.forEach(t),Gc=d(kt),k(Mn.$$.fragment,kt),kt.forEach(t),nt.forEach(t),Gr=d(o),Lt=r(o,"H2",{class:!0});var ci=i(Lt);co=r(ci,"A",{id:!0,class:!0,href:!0});var xf=i(co);Da=r(xf,"SPAN",{});var Hf=i(Da);k(En.$$.fragment,Hf),Hf.forEach(t),xf.forEach(t),Mc=d(ci),xa=r(ci,"SPAN",{});var Sf=i(xa);Ec=s(Sf,"TFOpenAIGPTDoubleHeadsModel"),Sf.forEach(t),ci.forEach(t),Mr=d(o),Ae=r(o,"DIV",{class:!0});var st=i(Ae);k(zn.$$.fragment,st),zc=d(st),Ha=r(st,"P",{});var Nf=i(Ha);Fc=s(Nf,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Nf.forEach(t),qc=d(st),Fn=r(st,"P",{});var hi=i(Fn);Cc=s(hi,"This model inherits from "),gs=r(hi,"A",{href:!0});var Lf=i(gs);jc=s(Lf,"TFPreTrainedModel"),Lf.forEach(t),Dc=s(hi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hi.forEach(t),xc=d(st),qn=r(st,"P",{});var mi=i(qn);Hc=s(mi,"This model is also a "),Cn=r(mi,"A",{href:!0,rel:!0});var Wf=i(Cn);Sc=s(Wf,"tf.keras.Model"),Wf.forEach(t),Nc=s(mi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mi.forEach(t),Lc=d(st),k(ho.$$.fragment,st),Wc=d(st),Je=r(st,"DIV",{class:!0});var yt=i(Je);k(jn.$$.fragment,yt),Bc=d(yt),Wt=r(yt,"P",{});var Ms=i(Wt);Uc=s(Ms,"The "),_s=r(Ms,"A",{href:!0});var Bf=i(_s);Rc=s(Bf,"TFOpenAIGPTDoubleHeadsModel"),Bf.forEach(t),Vc=s(Ms," forward method, overrides the "),Sa=r(Ms,"CODE",{});var Uf=i(Sa);Kc=s(Uf,"__call__"),Uf.forEach(t),Jc=s(Ms," special method."),Ms.forEach(t),Xc=d(yt),k(mo.$$.fragment,yt),Qc=d(yt),Na=r(yt,"P",{});var Rf=i(Na);Yc=s(Rf,"Examples:"),Rf.forEach(t),Zc=d(yt),k(Dn.$$.fragment,yt),yt.forEach(t),st.forEach(t),Er=d(o),Bt=r(o,"H2",{class:!0});var fi=i(Bt);fo=r(fi,"A",{id:!0,class:!0,href:!0});var Vf=i(fo);La=r(Vf,"SPAN",{});var Kf=i(La);k(xn.$$.fragment,Kf),Kf.forEach(t),Vf.forEach(t),eh=d(fi),Wa=r(fi,"SPAN",{});var Jf=i(Wa);th=s(Jf,"TFOpenAIGPTForSequenceClassification"),Jf.forEach(t),fi.forEach(t),zr=d(o),de=r(o,"DIV",{class:!0});var Ee=i(de);k(Hn.$$.fragment,Ee),oh=d(Ee),Ba=r(Ee,"P",{});var Xf=i(Ba);nh=s(Xf,"The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),Xf.forEach(t),sh=d(Ee),Ts=r(Ee,"P",{});var Hh=i(Ts);vs=r(Hh,"A",{href:!0});var Qf=i(vs);ah=s(Qf,"TFOpenAIGPTForSequenceClassification"),Qf.forEach(t),rh=s(Hh,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),Hh.forEach(t),ih=d(Ee),Ze=r(Ee,"P",{});var bt=i(Ze);lh=s(bt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ua=r(bt,"CODE",{});var Yf=i(Ua);dh=s(Yf,"pad_token_id"),Yf.forEach(t),ph=s(bt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ra=r(bt,"CODE",{});var Zf=i(Ra);ch=s(Zf,"pad_token_id"),Zf.forEach(t),hh=s(bt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Va=r(bt,"CODE",{});var eu=i(Va);mh=s(eu,"inputs_embeds"),eu.forEach(t),fh=s(bt," are passed instead of "),Ka=r(bt,"CODE",{});var tu=i(Ka);uh=s(tu,"input_ids"),tu.forEach(t),gh=s(bt,`, it does the same (take the last value in
each row of the batch).`),bt.forEach(t),_h=d(Ee),Sn=r(Ee,"P",{});var ui=i(Sn);Th=s(ui,"This model inherits from "),ks=r(ui,"A",{href:!0});var ou=i(ks);vh=s(ou,"TFPreTrainedModel"),ou.forEach(t),kh=s(ui,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ui.forEach(t),yh=d(Ee),Nn=r(Ee,"P",{});var gi=i(Nn);bh=s(gi,"This model is also a "),Ln=r(gi,"A",{href:!0,rel:!0});var nu=i(Ln);wh=s(nu,"tf.keras.Model"),nu.forEach(t),Ph=s(gi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gi.forEach(t),Oh=d(Ee),k(uo.$$.fragment,Ee),Ih=d(Ee),Me=r(Ee,"DIV",{class:!0});var at=i(Me);k(Wn.$$.fragment,at),Ah=d(at),Ut=r(at,"P",{});var Es=i(Ut);$h=s(Es,"The "),ys=r(Es,"A",{href:!0});var su=i(ys);Gh=s(su,"TFOpenAIGPTForSequenceClassification"),su.forEach(t),Mh=s(Es," forward method, overrides the "),Ja=r(Es,"CODE",{});var au=i(Ja);Eh=s(au,"__call__"),au.forEach(t),zh=s(Es," special method."),Es.forEach(t),Fh=d(at),k(go.$$.fragment,at),qh=d(at),Xa=r(at,"P",{});var ru=i(Xa);Ch=s(ru,"Example:"),ru.forEach(t),jh=d(at),k(Bn.$$.fragment,at),Dh=d(at),k(Un.$$.fragment,at),at.forEach(t),Ee.forEach(t),this.h()},h(){p(m,"name","hf:doc:metadata"),p(m,"content",JSON.stringify(Ou)),p(g,"id","openai-gpt"),p(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(g,"href","#openai-gpt"),p(u,"class","relative group"),p(X,"id","overview"),p(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(X,"href","#overview"),p($,"class","relative group"),p(Z,"href","https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf"),p(Z,"rel","nofollow"),p(U,"href","https://transformer.huggingface.co/doc/gpt"),p(U,"rel","nofollow"),p(ke,"href","https://huggingface.co/thomwolf"),p(ke,"rel","nofollow"),p(ye,"href","https://github.com/openai/finetune-transformer-lm"),p(ye,"rel","nofollow"),p(Jn,"href","/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer"),p(Rt,"id","transformers.OpenAIGPTConfig"),p(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Rt,"href","#transformers.OpenAIGPTConfig"),p(wt,"class","relative group"),p(Xn,"href","/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),p(Qn,"href","/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),p(Po,"href","https://huggingface.co/openai-gpt"),p(Po,"rel","nofollow"),p(Yn,"href","/docs/transformers/pr_16547/en/main_classes/configuration#transformers.PretrainedConfig"),p(Zn,"href","/docs/transformers/pr_16547/en/main_classes/configuration#transformers.PretrainedConfig"),p(je,"class","docstring"),p(Vt,"id","transformers.OpenAIGPTTokenizer"),p(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Vt,"href","#transformers.OpenAIGPTTokenizer"),p(Ot,"class","relative group"),p(es,"href","/docs/transformers/pr_16547/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(ts,"class","docstring"),p(De,"class","docstring"),p(Kt,"id","transformers.OpenAIGPTTokenizerFast"),p(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Kt,"href","#transformers.OpenAIGPTTokenizerFast"),p(It,"class","relative group"),p(os,"href","/docs/transformers/pr_16547/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),p(Ye,"class","docstring"),p(Jt,"id","transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),p(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Jt,"href","#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),p(At,"class","relative group"),p($t,"class","docstring"),p(Gt,"class","docstring"),p(Xt,"id","transformers.OpenAIGPTModel"),p(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Xt,"href","#transformers.OpenAIGPTModel"),p(Mt,"class","relative group"),p(ns,"href","/docs/transformers/pr_16547/en/main_classes/model#transformers.PreTrainedModel"),p(Wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Wo,"rel","nofollow"),p(ss,"href","/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),p(Be,"class","docstring"),p(xe,"class","docstring"),p(Yt,"id","transformers.OpenAIGPTLMHeadModel"),p(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Yt,"href","#transformers.OpenAIGPTLMHeadModel"),p(zt,"class","relative group"),p(as,"href","/docs/transformers/pr_16547/en/main_classes/model#transformers.PreTrainedModel"),p(Xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Xo,"rel","nofollow"),p(rs,"href","/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTLMHeadModel"),p(Ue,"class","docstring"),p(He,"class","docstring"),p(eo,"id","transformers.OpenAIGPTDoubleHeadsModel"),p(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(eo,"href","#transformers.OpenAIGPTDoubleHeadsModel"),p(qt,"class","relative group"),p(is,"href","/docs/transformers/pr_16547/en/main_classes/model#transformers.PreTrainedModel"),p(nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(nn,"rel","nofollow"),p(ls,"href","/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel"),p(Re,"class","docstring"),p(Se,"class","docstring"),p(oo,"id","transformers.OpenAIGPTForSequenceClassification"),p(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(oo,"href","#transformers.OpenAIGPTForSequenceClassification"),p(jt,"class","relative group"),p(ds,"href","/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),p(ps,"href","/docs/transformers/pr_16547/en/main_classes/model#transformers.PreTrainedModel"),p(cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(cn,"rel","nofollow"),p(cs,"href","/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),p(ae,"class","docstring"),p(Ne,"class","docstring"),p(so,"id","transformers.TFOpenAIGPTModel"),p(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(so,"href","#transformers.TFOpenAIGPTModel"),p(xt,"class","relative group"),p(hs,"href","/docs/transformers/pr_16547/en/main_classes/model#transformers.TFPreTrainedModel"),p(yn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(yn,"rel","nofollow"),p(ms,"href","/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),p(Ve,"class","docstring"),p(Oe,"class","docstring"),p(io,"id","transformers.TFOpenAIGPTLMHeadModel"),p(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(io,"href","#transformers.TFOpenAIGPTLMHeadModel"),p(St,"class","relative group"),p(fs,"href","/docs/transformers/pr_16547/en/main_classes/model#transformers.TFPreTrainedModel"),p($n,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p($n,"rel","nofollow"),p(us,"href","/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.TFOpenAIGPTLMHeadModel"),p(Ke,"class","docstring"),p(Ie,"class","docstring"),p(co,"id","transformers.TFOpenAIGPTDoubleHeadsModel"),p(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(co,"href","#transformers.TFOpenAIGPTDoubleHeadsModel"),p(Lt,"class","relative group"),p(gs,"href","/docs/transformers/pr_16547/en/main_classes/model#transformers.TFPreTrainedModel"),p(Cn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Cn,"rel","nofollow"),p(_s,"href","/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.TFOpenAIGPTDoubleHeadsModel"),p(Je,"class","docstring"),p(Ae,"class","docstring"),p(fo,"id","transformers.TFOpenAIGPTForSequenceClassification"),p(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(fo,"href","#transformers.TFOpenAIGPTForSequenceClassification"),p(Bt,"class","relative group"),p(vs,"href","/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),p(ks,"href","/docs/transformers/pr_16547/en/main_classes/model#transformers.TFPreTrainedModel"),p(Ln,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Ln,"rel","nofollow"),p(ys,"href","/docs/transformers/pr_16547/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),p(Me,"class","docstring"),p(de,"class","docstring")},m(o,f){e(document.head,m),h(o,G,f),h(o,u,f),e(u,g),e(g,O),y(T,O,null),e(u,_),e(u,A),e(A,me),h(o,J,f),h(o,$,f),e($,X),e(X,D),y(Y,D,null),e($,fe),e($,x),e(x,ue),h(o,pe,f),h(o,S,f),e(S,q),e(S,Z),e(Z,ee),e(S,M),h(o,z,f),h(o,oe,f),e(oe,L),h(o,ce,f),h(o,ne,f),e(ne,H),e(H,ge),h(o,he,f),h(o,E,f),e(E,_e),h(o,N,f),h(o,Q,f),e(Q,ie),e(ie,W),e(Q,Te),e(Q,te),e(te,C),e(te,le),e(le,B),e(te,ve),h(o,c,f),h(o,I,f),e(I,U),e(U,ze),e(I,Fe),h(o,F,f),h(o,se,f),e(se,qe),e(se,ke),e(ke,j),e(se,R),e(se,ye),e(ye,Ce),e(se,V),h(o,$e,f),h(o,we,f),e(we,be),h(o,Ge,f),h(o,et,f),e(et,_i),e(et,zs),e(zs,Ti),e(et,vi),e(et,Fs),e(Fs,ki),e(et,yi),e(et,qs),e(qs,bi),e(et,wi),h(o,rr,f),y(yo,o,f),h(o,ir,f),h(o,We,f),e(We,Pi),e(We,Cs),e(Cs,Oi),e(We,Ii),e(We,js),e(js,Ai),e(We,$i),e(We,Jn),e(Jn,Gi),e(We,Mi),e(We,Ds),e(Ds,Ei),e(We,zi),h(o,lr,f),h(o,wt,f),e(wt,Rt),e(Rt,xs),y(bo,xs,null),e(wt,Fi),e(wt,Hs),e(Hs,qi),h(o,dr,f),h(o,je,f),y(wo,je,null),e(je,Ci),e(je,it),e(it,ji),e(it,Xn),e(Xn,Di),e(it,xi),e(it,Qn),e(Qn,Hi),e(it,Si),e(it,Po),e(Po,Ni),e(it,Li),e(je,Wi),e(je,Pt),e(Pt,Bi),e(Pt,Yn),e(Yn,Ui),e(Pt,Ri),e(Pt,Zn),e(Zn,Vi),e(Pt,Ki),e(je,Ji),e(je,Ss),e(Ss,Xi),e(je,Qi),y(Oo,je,null),h(o,pr,f),h(o,Ot,f),e(Ot,Vt),e(Vt,Ns),y(Io,Ns,null),e(Ot,Yi),e(Ot,Ls),e(Ls,Zi),h(o,cr,f),h(o,De,f),y(Ao,De,null),e(De,el),e(De,Ws),e(Ws,tl),e(De,ol),e(De,$o),e($o,Bs),e(Bs,nl),e($o,sl),e($o,lt),e(lt,al),e(lt,Us),e(Us,rl),e(lt,il),e(lt,Rs),e(Rs,ll),e(lt,dl),e(lt,Vs),e(Vs,pl),e(lt,cl),e(De,hl),e(De,Go),e(Go,ml),e(Go,es),e(es,fl),e(Go,ul),e(De,gl),e(De,ts),y(Mo,ts,null),h(o,hr,f),h(o,It,f),e(It,Kt),e(Kt,Ks),y(Eo,Ks,null),e(It,_l),e(It,Js),e(Js,Tl),h(o,mr,f),h(o,Ye,f),y(zo,Ye,null),e(Ye,vl),e(Ye,Fo),e(Fo,kl),e(Fo,Xs),e(Xs,yl),e(Fo,bl),e(Ye,wl),e(Ye,qo),e(qo,Qs),e(Qs,Pl),e(qo,Ol),e(qo,Ys),e(Ys,Il),e(Ye,Al),e(Ye,Co),e(Co,$l),e(Co,os),e(os,Gl),e(Co,Ml),h(o,fr,f),h(o,At,f),e(At,Jt),e(Jt,Zs),y(jo,Zs,null),e(At,El),e(At,ea),e(ea,zl),h(o,ur,f),h(o,$t,f),y(Do,$t,null),e($t,Fl),e($t,ta),e(ta,ql),h(o,gr,f),h(o,Gt,f),y(xo,Gt,null),e(Gt,Cl),e(Gt,oa),e(oa,jl),h(o,_r,f),h(o,Mt,f),e(Mt,Xt),e(Xt,na),y(Ho,na,null),e(Mt,Dl),e(Mt,sa),e(sa,xl),h(o,Tr,f),h(o,xe,f),y(So,xe,null),e(xe,Hl),e(xe,aa),e(aa,Sl),e(xe,Nl),e(xe,No),e(No,Ll),e(No,ns),e(ns,Wl),e(No,Bl),e(xe,Ul),e(xe,Lo),e(Lo,Rl),e(Lo,Wo),e(Wo,Vl),e(Lo,Kl),e(xe,Jl),e(xe,Be),y(Bo,Be,null),e(Be,Xl),e(Be,Et),e(Et,Ql),e(Et,ss),e(ss,Yl),e(Et,Zl),e(Et,ra),e(ra,ed),e(Et,td),e(Be,od),y(Qt,Be,null),e(Be,nd),e(Be,ia),e(ia,sd),e(Be,ad),y(Uo,Be,null),h(o,vr,f),h(o,zt,f),e(zt,Yt),e(Yt,la),y(Ro,la,null),e(zt,rd),e(zt,da),e(da,id),h(o,kr,f),h(o,He,f),y(Vo,He,null),e(He,ld),e(He,pa),e(pa,dd),e(He,pd),e(He,Ko),e(Ko,cd),e(Ko,as),e(as,hd),e(Ko,md),e(He,fd),e(He,Jo),e(Jo,ud),e(Jo,Xo),e(Xo,gd),e(Jo,_d),e(He,Td),e(He,Ue),y(Qo,Ue,null),e(Ue,vd),e(Ue,Ft),e(Ft,kd),e(Ft,rs),e(rs,yd),e(Ft,bd),e(Ft,ca),e(ca,wd),e(Ft,Pd),e(Ue,Od),y(Zt,Ue,null),e(Ue,Id),e(Ue,ha),e(ha,Ad),e(Ue,$d),y(Yo,Ue,null),h(o,yr,f),h(o,qt,f),e(qt,eo),e(eo,ma),y(Zo,ma,null),e(qt,Gd),e(qt,fa),e(fa,Md),h(o,br,f),h(o,Se,f),y(en,Se,null),e(Se,Ed),e(Se,ua),e(ua,zd),e(Se,Fd),e(Se,tn),e(tn,qd),e(tn,is),e(is,Cd),e(tn,jd),e(Se,Dd),e(Se,on),e(on,xd),e(on,nn),e(nn,Hd),e(on,Sd),e(Se,Nd),e(Se,Re),y(sn,Re,null),e(Re,Ld),e(Re,Ct),e(Ct,Wd),e(Ct,ls),e(ls,Bd),e(Ct,Ud),e(Ct,ga),e(ga,Rd),e(Ct,Vd),e(Re,Kd),y(to,Re,null),e(Re,Jd),e(Re,_a),e(_a,Xd),e(Re,Qd),y(an,Re,null),h(o,wr,f),h(o,jt,f),e(jt,oo),e(oo,Ta),y(rn,Ta,null),e(jt,Yd),e(jt,va),e(va,Zd),h(o,Pr,f),h(o,Ne,f),y(ln,Ne,null),e(Ne,ep),e(Ne,Le),e(Le,tp),e(Le,ds),e(ds,op),e(Le,np),e(Le,ka),e(ka,sp),e(Le,ap),e(Le,ya),e(ya,rp),e(Le,ip),e(Le,ba),e(ba,lp),e(Le,dp),e(Le,wa),e(wa,pp),e(Le,cp),e(Ne,hp),e(Ne,dn),e(dn,mp),e(dn,ps),e(ps,fp),e(dn,up),e(Ne,gp),e(Ne,pn),e(pn,_p),e(pn,cn),e(cn,Tp),e(pn,vp),e(Ne,kp),e(Ne,ae),y(hn,ae,null),e(ae,yp),e(ae,Dt),e(Dt,bp),e(Dt,cs),e(cs,wp),e(Dt,Pp),e(Dt,Pa),e(Pa,Op),e(Dt,Ip),e(ae,Ap),y(no,ae,null),e(ae,$p),e(ae,Oa),e(Oa,Gp),e(ae,Mp),y(mn,ae,null),e(ae,Ep),y(fn,ae,null),e(ae,zp),e(ae,Ia),e(Ia,Fp),e(ae,qp),y(un,ae,null),e(ae,Cp),y(gn,ae,null),h(o,Or,f),h(o,xt,f),e(xt,so),e(so,Aa),y(_n,Aa,null),e(xt,jp),e(xt,$a),e($a,Dp),h(o,Ir,f),h(o,Oe,f),y(Tn,Oe,null),e(Oe,xp),e(Oe,Ga),e(Ga,Hp),e(Oe,Sp),e(Oe,vn),e(vn,Np),e(vn,hs),e(hs,Lp),e(vn,Wp),e(Oe,Bp),e(Oe,kn),e(kn,Up),e(kn,yn),e(yn,Rp),e(kn,Vp),e(Oe,Kp),y(ao,Oe,null),e(Oe,Jp),e(Oe,Ve),y(bn,Ve,null),e(Ve,Xp),e(Ve,Ht),e(Ht,Qp),e(Ht,ms),e(ms,Yp),e(Ht,Zp),e(Ht,Ma),e(Ma,ec),e(Ht,tc),e(Ve,oc),y(ro,Ve,null),e(Ve,nc),e(Ve,Ea),e(Ea,sc),e(Ve,ac),y(wn,Ve,null),h(o,Ar,f),h(o,St,f),e(St,io),e(io,za),y(Pn,za,null),e(St,rc),e(St,Fa),e(Fa,ic),h(o,$r,f),h(o,Ie,f),y(On,Ie,null),e(Ie,lc),e(Ie,qa),e(qa,dc),e(Ie,pc),e(Ie,In),e(In,cc),e(In,fs),e(fs,hc),e(In,mc),e(Ie,fc),e(Ie,An),e(An,uc),e(An,$n),e($n,gc),e(An,_c),e(Ie,Tc),y(lo,Ie,null),e(Ie,vc),e(Ie,Ke),y(Gn,Ke,null),e(Ke,kc),e(Ke,Nt),e(Nt,yc),e(Nt,us),e(us,bc),e(Nt,wc),e(Nt,Ca),e(Ca,Pc),e(Nt,Oc),e(Ke,Ic),y(po,Ke,null),e(Ke,Ac),e(Ke,ja),e(ja,$c),e(Ke,Gc),y(Mn,Ke,null),h(o,Gr,f),h(o,Lt,f),e(Lt,co),e(co,Da),y(En,Da,null),e(Lt,Mc),e(Lt,xa),e(xa,Ec),h(o,Mr,f),h(o,Ae,f),y(zn,Ae,null),e(Ae,zc),e(Ae,Ha),e(Ha,Fc),e(Ae,qc),e(Ae,Fn),e(Fn,Cc),e(Fn,gs),e(gs,jc),e(Fn,Dc),e(Ae,xc),e(Ae,qn),e(qn,Hc),e(qn,Cn),e(Cn,Sc),e(qn,Nc),e(Ae,Lc),y(ho,Ae,null),e(Ae,Wc),e(Ae,Je),y(jn,Je,null),e(Je,Bc),e(Je,Wt),e(Wt,Uc),e(Wt,_s),e(_s,Rc),e(Wt,Vc),e(Wt,Sa),e(Sa,Kc),e(Wt,Jc),e(Je,Xc),y(mo,Je,null),e(Je,Qc),e(Je,Na),e(Na,Yc),e(Je,Zc),y(Dn,Je,null),h(o,Er,f),h(o,Bt,f),e(Bt,fo),e(fo,La),y(xn,La,null),e(Bt,eh),e(Bt,Wa),e(Wa,th),h(o,zr,f),h(o,de,f),y(Hn,de,null),e(de,oh),e(de,Ba),e(Ba,nh),e(de,sh),e(de,Ts),e(Ts,vs),e(vs,ah),e(Ts,rh),e(de,ih),e(de,Ze),e(Ze,lh),e(Ze,Ua),e(Ua,dh),e(Ze,ph),e(Ze,Ra),e(Ra,ch),e(Ze,hh),e(Ze,Va),e(Va,mh),e(Ze,fh),e(Ze,Ka),e(Ka,uh),e(Ze,gh),e(de,_h),e(de,Sn),e(Sn,Th),e(Sn,ks),e(ks,vh),e(Sn,kh),e(de,yh),e(de,Nn),e(Nn,bh),e(Nn,Ln),e(Ln,wh),e(Nn,Ph),e(de,Oh),y(uo,de,null),e(de,Ih),e(de,Me),y(Wn,Me,null),e(Me,Ah),e(Me,Ut),e(Ut,$h),e(Ut,ys),e(ys,Gh),e(Ut,Mh),e(Ut,Ja),e(Ja,Eh),e(Ut,zh),e(Me,Fh),y(go,Me,null),e(Me,qh),e(Me,Xa),e(Xa,Ch),e(Me,jh),y(Bn,Me,null),e(Me,Dh),y(Un,Me,null),Fr=!0},p(o,[f]){const Rn={};f&2&&(Rn.$$scope={dirty:f,ctx:o}),Qt.$set(Rn);const Qa={};f&2&&(Qa.$$scope={dirty:f,ctx:o}),Zt.$set(Qa);const Ya={};f&2&&(Ya.$$scope={dirty:f,ctx:o}),to.$set(Ya);const Za={};f&2&&(Za.$$scope={dirty:f,ctx:o}),no.$set(Za);const Vn={};f&2&&(Vn.$$scope={dirty:f,ctx:o}),ao.$set(Vn);const er={};f&2&&(er.$$scope={dirty:f,ctx:o}),ro.$set(er);const tr={};f&2&&(tr.$$scope={dirty:f,ctx:o}),lo.$set(tr);const or={};f&2&&(or.$$scope={dirty:f,ctx:o}),po.$set(or);const Kn={};f&2&&(Kn.$$scope={dirty:f,ctx:o}),ho.$set(Kn);const nr={};f&2&&(nr.$$scope={dirty:f,ctx:o}),mo.$set(nr);const sr={};f&2&&(sr.$$scope={dirty:f,ctx:o}),uo.$set(sr);const ar={};f&2&&(ar.$$scope={dirty:f,ctx:o}),go.$set(ar)},i(o){Fr||(b(T.$$.fragment,o),b(Y.$$.fragment,o),b(yo.$$.fragment,o),b(bo.$$.fragment,o),b(wo.$$.fragment,o),b(Oo.$$.fragment,o),b(Io.$$.fragment,o),b(Ao.$$.fragment,o),b(Mo.$$.fragment,o),b(Eo.$$.fragment,o),b(zo.$$.fragment,o),b(jo.$$.fragment,o),b(Do.$$.fragment,o),b(xo.$$.fragment,o),b(Ho.$$.fragment,o),b(So.$$.fragment,o),b(Bo.$$.fragment,o),b(Qt.$$.fragment,o),b(Uo.$$.fragment,o),b(Ro.$$.fragment,o),b(Vo.$$.fragment,o),b(Qo.$$.fragment,o),b(Zt.$$.fragment,o),b(Yo.$$.fragment,o),b(Zo.$$.fragment,o),b(en.$$.fragment,o),b(sn.$$.fragment,o),b(to.$$.fragment,o),b(an.$$.fragment,o),b(rn.$$.fragment,o),b(ln.$$.fragment,o),b(hn.$$.fragment,o),b(no.$$.fragment,o),b(mn.$$.fragment,o),b(fn.$$.fragment,o),b(un.$$.fragment,o),b(gn.$$.fragment,o),b(_n.$$.fragment,o),b(Tn.$$.fragment,o),b(ao.$$.fragment,o),b(bn.$$.fragment,o),b(ro.$$.fragment,o),b(wn.$$.fragment,o),b(Pn.$$.fragment,o),b(On.$$.fragment,o),b(lo.$$.fragment,o),b(Gn.$$.fragment,o),b(po.$$.fragment,o),b(Mn.$$.fragment,o),b(En.$$.fragment,o),b(zn.$$.fragment,o),b(ho.$$.fragment,o),b(jn.$$.fragment,o),b(mo.$$.fragment,o),b(Dn.$$.fragment,o),b(xn.$$.fragment,o),b(Hn.$$.fragment,o),b(uo.$$.fragment,o),b(Wn.$$.fragment,o),b(go.$$.fragment,o),b(Bn.$$.fragment,o),b(Un.$$.fragment,o),Fr=!0)},o(o){w(T.$$.fragment,o),w(Y.$$.fragment,o),w(yo.$$.fragment,o),w(bo.$$.fragment,o),w(wo.$$.fragment,o),w(Oo.$$.fragment,o),w(Io.$$.fragment,o),w(Ao.$$.fragment,o),w(Mo.$$.fragment,o),w(Eo.$$.fragment,o),w(zo.$$.fragment,o),w(jo.$$.fragment,o),w(Do.$$.fragment,o),w(xo.$$.fragment,o),w(Ho.$$.fragment,o),w(So.$$.fragment,o),w(Bo.$$.fragment,o),w(Qt.$$.fragment,o),w(Uo.$$.fragment,o),w(Ro.$$.fragment,o),w(Vo.$$.fragment,o),w(Qo.$$.fragment,o),w(Zt.$$.fragment,o),w(Yo.$$.fragment,o),w(Zo.$$.fragment,o),w(en.$$.fragment,o),w(sn.$$.fragment,o),w(to.$$.fragment,o),w(an.$$.fragment,o),w(rn.$$.fragment,o),w(ln.$$.fragment,o),w(hn.$$.fragment,o),w(no.$$.fragment,o),w(mn.$$.fragment,o),w(fn.$$.fragment,o),w(un.$$.fragment,o),w(gn.$$.fragment,o),w(_n.$$.fragment,o),w(Tn.$$.fragment,o),w(ao.$$.fragment,o),w(bn.$$.fragment,o),w(ro.$$.fragment,o),w(wn.$$.fragment,o),w(Pn.$$.fragment,o),w(On.$$.fragment,o),w(lo.$$.fragment,o),w(Gn.$$.fragment,o),w(po.$$.fragment,o),w(Mn.$$.fragment,o),w(En.$$.fragment,o),w(zn.$$.fragment,o),w(ho.$$.fragment,o),w(jn.$$.fragment,o),w(mo.$$.fragment,o),w(Dn.$$.fragment,o),w(xn.$$.fragment,o),w(Hn.$$.fragment,o),w(uo.$$.fragment,o),w(Wn.$$.fragment,o),w(go.$$.fragment,o),w(Bn.$$.fragment,o),w(Un.$$.fragment,o),Fr=!1},d(o){t(m),o&&t(G),o&&t(u),P(T),o&&t(J),o&&t($),P(Y),o&&t(pe),o&&t(S),o&&t(z),o&&t(oe),o&&t(ce),o&&t(ne),o&&t(he),o&&t(E),o&&t(N),o&&t(Q),o&&t(c),o&&t(I),o&&t(F),o&&t(se),o&&t($e),o&&t(we),o&&t(Ge),o&&t(et),o&&t(rr),P(yo,o),o&&t(ir),o&&t(We),o&&t(lr),o&&t(wt),P(bo),o&&t(dr),o&&t(je),P(wo),P(Oo),o&&t(pr),o&&t(Ot),P(Io),o&&t(cr),o&&t(De),P(Ao),P(Mo),o&&t(hr),o&&t(It),P(Eo),o&&t(mr),o&&t(Ye),P(zo),o&&t(fr),o&&t(At),P(jo),o&&t(ur),o&&t($t),P(Do),o&&t(gr),o&&t(Gt),P(xo),o&&t(_r),o&&t(Mt),P(Ho),o&&t(Tr),o&&t(xe),P(So),P(Bo),P(Qt),P(Uo),o&&t(vr),o&&t(zt),P(Ro),o&&t(kr),o&&t(He),P(Vo),P(Qo),P(Zt),P(Yo),o&&t(yr),o&&t(qt),P(Zo),o&&t(br),o&&t(Se),P(en),P(sn),P(to),P(an),o&&t(wr),o&&t(jt),P(rn),o&&t(Pr),o&&t(Ne),P(ln),P(hn),P(no),P(mn),P(fn),P(un),P(gn),o&&t(Or),o&&t(xt),P(_n),o&&t(Ir),o&&t(Oe),P(Tn),P(ao),P(bn),P(ro),P(wn),o&&t(Ar),o&&t(St),P(Pn),o&&t($r),o&&t(Ie),P(On),P(lo),P(Gn),P(po),P(Mn),o&&t(Gr),o&&t(Lt),P(En),o&&t(Mr),o&&t(Ae),P(zn),P(ho),P(jn),P(mo),P(Dn),o&&t(Er),o&&t(Bt),P(xn),o&&t(zr),o&&t(de),P(Hn),P(uo),P(Wn),P(go),P(Bn),P(Un)}}}const Ou={local:"openai-gpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OpenAIGPTConfig",title:"OpenAIGPTConfig"},{local:"transformers.OpenAIGPTTokenizer",title:"OpenAIGPTTokenizer"},{local:"transformers.OpenAIGPTTokenizerFast",title:"OpenAIGPTTokenizerFast"},{local:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",title:"OpenAI specific outputs"},{local:"transformers.OpenAIGPTModel",title:"OpenAIGPTModel"},{local:"transformers.OpenAIGPTLMHeadModel",title:"OpenAIGPTLMHeadModel"},{local:"transformers.OpenAIGPTDoubleHeadsModel",title:"OpenAIGPTDoubleHeadsModel"},{local:"transformers.OpenAIGPTForSequenceClassification",title:"OpenAIGPTForSequenceClassification"},{local:"transformers.TFOpenAIGPTModel",title:"TFOpenAIGPTModel"},{local:"transformers.TFOpenAIGPTLMHeadModel",title:"TFOpenAIGPTLMHeadModel"},{local:"transformers.TFOpenAIGPTDoubleHeadsModel",title:"TFOpenAIGPTDoubleHeadsModel"},{local:"transformers.TFOpenAIGPTForSequenceClassification",title:"TFOpenAIGPTForSequenceClassification"}],title:"OpenAI GPT"};function Iu(K){return cu(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class zu extends iu{constructor(m){super();lu(this,m,Iu,Pu,du,{})}}export{zu as default,Ou as metadata};
