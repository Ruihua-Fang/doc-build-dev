import{S as Iq,i as Wq,s as Uq,e as o,k as l,w as b,t as a,M as Hq,c as r,d as s,m as p,a as i,x as v,h as n,b as d,N as Bq,F as e,g as c,y as w,q as y,o as k,B as j}from"../../chunks/vendor-4833417e.js";import{T as As}from"../../chunks/Tip-fffd6df1.js";import{D as le}from"../../chunks/Docstring-44c5af16.js";import{C as Ft}from"../../chunks/CodeBlock-90ffda97.js";import{C as Gr}from"../../chunks/CodeBlockFw-03f30a28.js";import{I as ss}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-04a16537.js";function Gq(U){let m,F,g,f,q;return{c(){m=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),f=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);F=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var A=i(g);f=n(A,"Module"),A.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,F),e(m,g),e(g,f),e(m,q)},d(T){T&&s(m)}}}function Rq(U){let m,F,g,f,q;return{c(){m=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),f=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);F=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var A=i(g);f=n(A,"Module"),A.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,F),e(m,g),e(g,f),e(m,q)},d(T){T&&s(m)}}}function Vq(U){let m,F,g,f,q;return{c(){m=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),f=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);F=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var A=i(g);f=n(A,"Module"),A.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,F),e(m,g),e(g,f),e(m,q)},d(T){T&&s(m)}}}function Kq(U){let m,F,g,f,q;return{c(){m=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),f=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);F=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var A=i(g);f=n(A,"Module"),A.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,F),e(m,g),e(g,f),e(m,q)},d(T){T&&s(m)}}}function Yq(U){let m,F,g,f,q,T,_,A,_e,K,$,Y,O,Z,Te,I,be,ce,W,N,ee,se,z,x,oe,H,he,V,L,te,ve,C,we,Q,ae,ye,B,ke,re,P,je,G,ue;return{c(){m=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),f=o("ul"),q=o("li"),T=a("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=o("li"),_e=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),$=o("p"),Y=a("This second option is useful when using "),O=o("code"),Z=a("tf.keras.Model.fit"),Te=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),be=a("model(inputs)"),ce=a("."),W=l(),N=o("p"),ee=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se=l(),z=o("ul"),x=o("li"),oe=a("a single Tensor with "),H=o("code"),he=a("input_ids"),V=a(" only and nothing else: "),L=o("code"),te=a("model(inputs_ids)"),ve=l(),C=o("li"),we=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),ae=a("model([input_ids, attention_mask])"),ye=a(" or "),B=o("code"),ke=a("model([input_ids, attention_mask, token_type_ids])"),re=l(),P=o("li"),je=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=o("code"),ue=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var E=i(m);F=n(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(s),g=p(u),f=r(u,"UL",{});var J=i(f);q=r(J,"LI",{});var Fe=i(q);T=n(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(s),_=p(J),A=r(J,"LI",{});var Ge=i(A);_e=n(Ge,"having all inputs as a list, tuple or dict in the first positional arguments."),Ge.forEach(s),J.forEach(s),K=p(u),$=r(u,"P",{});var S=i($);Y=n(S,"This second option is useful when using "),O=r(S,"CODE",{});var Ae=i(O);Z=n(Ae,"tf.keras.Model.fit"),Ae.forEach(s),Te=n(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(S,"CODE",{});var xe=i(I);be=n(xe,"model(inputs)"),xe.forEach(s),ce=n(S,"."),S.forEach(s),W=p(u),N=r(u,"P",{});var Re=i(N);ee=n(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Re.forEach(s),se=p(u),z=r(u,"UL",{});var D=i(z);x=r(D,"LI",{});var M=i(x);oe=n(M,"a single Tensor with "),H=r(M,"CODE",{});var Ve=i(H);he=n(Ve,"input_ids"),Ve.forEach(s),V=n(M," only and nothing else: "),L=r(M,"CODE",{});var Ce=i(L);te=n(Ce,"model(inputs_ids)"),Ce.forEach(s),M.forEach(s),ve=p(D),C=r(D,"LI",{});var R=i(C);we=n(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(R,"CODE",{});var Ke=i(Q);ae=n(Ke,"model([input_ids, attention_mask])"),Ke.forEach(s),ye=n(R," or "),B=r(R,"CODE",{});var qe=i(B);ke=n(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(s),R.forEach(s),re=p(D),P=r(D,"LI",{});var Ee=i(P);je=n(Ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ee,"CODE",{});var Ye=i(G);ue=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(s),Ee.forEach(s),D.forEach(s)},m(u,E){c(u,m,E),e(m,F),c(u,g,E),c(u,f,E),e(f,q),e(q,T),e(f,_),e(f,A),e(A,_e),c(u,K,E),c(u,$,E),e($,Y),e($,O),e(O,Z),e($,Te),e($,I),e(I,be),e($,ce),c(u,W,E),c(u,N,E),e(N,ee),c(u,se,E),c(u,z,E),e(z,x),e(x,oe),e(x,H),e(H,he),e(x,V),e(x,L),e(L,te),e(z,ve),e(z,C),e(C,we),e(C,Q),e(Q,ae),e(C,ye),e(C,B),e(B,ke),e(z,re),e(z,P),e(P,je),e(P,G),e(G,ue)},d(u){u&&s(m),u&&s(g),u&&s(f),u&&s(K),u&&s($),u&&s(W),u&&s(N),u&&s(se),u&&s(z)}}}function Jq(U){let m,F,g,f,q;return{c(){m=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),f=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);F=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var A=i(g);f=n(A,"Module"),A.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,F),e(m,g),e(g,f),e(m,q)},d(T){T&&s(m)}}}function Xq(U){let m,F,g,f,q,T,_,A,_e,K,$,Y,O,Z,Te,I,be,ce,W,N,ee,se,z,x,oe,H,he,V,L,te,ve,C,we,Q,ae,ye,B,ke,re,P,je,G,ue;return{c(){m=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),f=o("ul"),q=o("li"),T=a("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=o("li"),_e=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),$=o("p"),Y=a("This second option is useful when using "),O=o("code"),Z=a("tf.keras.Model.fit"),Te=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),be=a("model(inputs)"),ce=a("."),W=l(),N=o("p"),ee=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se=l(),z=o("ul"),x=o("li"),oe=a("a single Tensor with "),H=o("code"),he=a("input_ids"),V=a(" only and nothing else: "),L=o("code"),te=a("model(inputs_ids)"),ve=l(),C=o("li"),we=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),ae=a("model([input_ids, attention_mask])"),ye=a(" or "),B=o("code"),ke=a("model([input_ids, attention_mask, token_type_ids])"),re=l(),P=o("li"),je=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=o("code"),ue=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var E=i(m);F=n(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(s),g=p(u),f=r(u,"UL",{});var J=i(f);q=r(J,"LI",{});var Fe=i(q);T=n(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(s),_=p(J),A=r(J,"LI",{});var Ge=i(A);_e=n(Ge,"having all inputs as a list, tuple or dict in the first positional arguments."),Ge.forEach(s),J.forEach(s),K=p(u),$=r(u,"P",{});var S=i($);Y=n(S,"This second option is useful when using "),O=r(S,"CODE",{});var Ae=i(O);Z=n(Ae,"tf.keras.Model.fit"),Ae.forEach(s),Te=n(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(S,"CODE",{});var xe=i(I);be=n(xe,"model(inputs)"),xe.forEach(s),ce=n(S,"."),S.forEach(s),W=p(u),N=r(u,"P",{});var Re=i(N);ee=n(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Re.forEach(s),se=p(u),z=r(u,"UL",{});var D=i(z);x=r(D,"LI",{});var M=i(x);oe=n(M,"a single Tensor with "),H=r(M,"CODE",{});var Ve=i(H);he=n(Ve,"input_ids"),Ve.forEach(s),V=n(M," only and nothing else: "),L=r(M,"CODE",{});var Ce=i(L);te=n(Ce,"model(inputs_ids)"),Ce.forEach(s),M.forEach(s),ve=p(D),C=r(D,"LI",{});var R=i(C);we=n(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(R,"CODE",{});var Ke=i(Q);ae=n(Ke,"model([input_ids, attention_mask])"),Ke.forEach(s),ye=n(R," or "),B=r(R,"CODE",{});var qe=i(B);ke=n(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(s),R.forEach(s),re=p(D),P=r(D,"LI",{});var Ee=i(P);je=n(Ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ee,"CODE",{});var Ye=i(G);ue=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(s),Ee.forEach(s),D.forEach(s)},m(u,E){c(u,m,E),e(m,F),c(u,g,E),c(u,f,E),e(f,q),e(q,T),e(f,_),e(f,A),e(A,_e),c(u,K,E),c(u,$,E),e($,Y),e($,O),e(O,Z),e($,Te),e($,I),e(I,be),e($,ce),c(u,W,E),c(u,N,E),e(N,ee),c(u,se,E),c(u,z,E),e(z,x),e(x,oe),e(x,H),e(H,he),e(x,V),e(x,L),e(L,te),e(z,ve),e(z,C),e(C,we),e(C,Q),e(Q,ae),e(C,ye),e(C,B),e(B,ke),e(z,re),e(z,P),e(P,je),e(P,G),e(G,ue)},d(u){u&&s(m),u&&s(g),u&&s(f),u&&s(K),u&&s($),u&&s(W),u&&s(N),u&&s(se),u&&s(z)}}}function Zq(U){let m,F,g,f,q;return{c(){m=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),f=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);F=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var A=i(g);f=n(A,"Module"),A.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,F),e(m,g),e(g,f),e(m,q)},d(T){T&&s(m)}}}function e0(U){let m,F,g,f,q,T,_,A,_e,K,$,Y,O,Z,Te,I,be,ce,W,N,ee,se,z,x,oe,H,he,V,L,te,ve,C,we,Q,ae,ye,B,ke,re,P,je,G,ue;return{c(){m=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),f=o("ul"),q=o("li"),T=a("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=o("li"),_e=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),$=o("p"),Y=a("This second option is useful when using "),O=o("code"),Z=a("tf.keras.Model.fit"),Te=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),be=a("model(inputs)"),ce=a("."),W=l(),N=o("p"),ee=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se=l(),z=o("ul"),x=o("li"),oe=a("a single Tensor with "),H=o("code"),he=a("input_ids"),V=a(" only and nothing else: "),L=o("code"),te=a("model(inputs_ids)"),ve=l(),C=o("li"),we=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),ae=a("model([input_ids, attention_mask])"),ye=a(" or "),B=o("code"),ke=a("model([input_ids, attention_mask, token_type_ids])"),re=l(),P=o("li"),je=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=o("code"),ue=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var E=i(m);F=n(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(s),g=p(u),f=r(u,"UL",{});var J=i(f);q=r(J,"LI",{});var Fe=i(q);T=n(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(s),_=p(J),A=r(J,"LI",{});var Ge=i(A);_e=n(Ge,"having all inputs as a list, tuple or dict in the first positional arguments."),Ge.forEach(s),J.forEach(s),K=p(u),$=r(u,"P",{});var S=i($);Y=n(S,"This second option is useful when using "),O=r(S,"CODE",{});var Ae=i(O);Z=n(Ae,"tf.keras.Model.fit"),Ae.forEach(s),Te=n(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(S,"CODE",{});var xe=i(I);be=n(xe,"model(inputs)"),xe.forEach(s),ce=n(S,"."),S.forEach(s),W=p(u),N=r(u,"P",{});var Re=i(N);ee=n(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Re.forEach(s),se=p(u),z=r(u,"UL",{});var D=i(z);x=r(D,"LI",{});var M=i(x);oe=n(M,"a single Tensor with "),H=r(M,"CODE",{});var Ve=i(H);he=n(Ve,"input_ids"),Ve.forEach(s),V=n(M," only and nothing else: "),L=r(M,"CODE",{});var Ce=i(L);te=n(Ce,"model(inputs_ids)"),Ce.forEach(s),M.forEach(s),ve=p(D),C=r(D,"LI",{});var R=i(C);we=n(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(R,"CODE",{});var Ke=i(Q);ae=n(Ke,"model([input_ids, attention_mask])"),Ke.forEach(s),ye=n(R," or "),B=r(R,"CODE",{});var qe=i(B);ke=n(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(s),R.forEach(s),re=p(D),P=r(D,"LI",{});var Ee=i(P);je=n(Ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ee,"CODE",{});var Ye=i(G);ue=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(s),Ee.forEach(s),D.forEach(s)},m(u,E){c(u,m,E),e(m,F),c(u,g,E),c(u,f,E),e(f,q),e(q,T),e(f,_),e(f,A),e(A,_e),c(u,K,E),c(u,$,E),e($,Y),e($,O),e(O,Z),e($,Te),e($,I),e(I,be),e($,ce),c(u,W,E),c(u,N,E),e(N,ee),c(u,se,E),c(u,z,E),e(z,x),e(x,oe),e(x,H),e(H,he),e(x,V),e(x,L),e(L,te),e(z,ve),e(z,C),e(C,we),e(C,Q),e(Q,ae),e(C,ye),e(C,B),e(B,ke),e(z,re),e(z,P),e(P,je),e(P,G),e(G,ue)},d(u){u&&s(m),u&&s(g),u&&s(f),u&&s(K),u&&s($),u&&s(W),u&&s(N),u&&s(se),u&&s(z)}}}function s0(U){let m,F,g,f,q;return{c(){m=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),f=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);F=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var A=i(g);f=n(A,"Module"),A.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,F),e(m,g),e(g,f),e(m,q)},d(T){T&&s(m)}}}function t0(U){let m,F,g,f,q,T,_,A,_e,K,$,Y,O,Z,Te,I,be,ce,W,N,ee,se,z,x,oe,H,he,V,L,te,ve,C,we,Q,ae,ye,B,ke,re,P,je,G,ue;return{c(){m=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),f=o("ul"),q=o("li"),T=a("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=o("li"),_e=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),$=o("p"),Y=a("This second option is useful when using "),O=o("code"),Z=a("tf.keras.Model.fit"),Te=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),be=a("model(inputs)"),ce=a("."),W=l(),N=o("p"),ee=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se=l(),z=o("ul"),x=o("li"),oe=a("a single Tensor with "),H=o("code"),he=a("input_ids"),V=a(" only and nothing else: "),L=o("code"),te=a("model(inputs_ids)"),ve=l(),C=o("li"),we=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),ae=a("model([input_ids, attention_mask])"),ye=a(" or "),B=o("code"),ke=a("model([input_ids, attention_mask, token_type_ids])"),re=l(),P=o("li"),je=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=o("code"),ue=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var E=i(m);F=n(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(s),g=p(u),f=r(u,"UL",{});var J=i(f);q=r(J,"LI",{});var Fe=i(q);T=n(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(s),_=p(J),A=r(J,"LI",{});var Ge=i(A);_e=n(Ge,"having all inputs as a list, tuple or dict in the first positional arguments."),Ge.forEach(s),J.forEach(s),K=p(u),$=r(u,"P",{});var S=i($);Y=n(S,"This second option is useful when using "),O=r(S,"CODE",{});var Ae=i(O);Z=n(Ae,"tf.keras.Model.fit"),Ae.forEach(s),Te=n(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(S,"CODE",{});var xe=i(I);be=n(xe,"model(inputs)"),xe.forEach(s),ce=n(S,"."),S.forEach(s),W=p(u),N=r(u,"P",{});var Re=i(N);ee=n(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Re.forEach(s),se=p(u),z=r(u,"UL",{});var D=i(z);x=r(D,"LI",{});var M=i(x);oe=n(M,"a single Tensor with "),H=r(M,"CODE",{});var Ve=i(H);he=n(Ve,"input_ids"),Ve.forEach(s),V=n(M," only and nothing else: "),L=r(M,"CODE",{});var Ce=i(L);te=n(Ce,"model(inputs_ids)"),Ce.forEach(s),M.forEach(s),ve=p(D),C=r(D,"LI",{});var R=i(C);we=n(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(R,"CODE",{});var Ke=i(Q);ae=n(Ke,"model([input_ids, attention_mask])"),Ke.forEach(s),ye=n(R," or "),B=r(R,"CODE",{});var qe=i(B);ke=n(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(s),R.forEach(s),re=p(D),P=r(D,"LI",{});var Ee=i(P);je=n(Ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ee,"CODE",{});var Ye=i(G);ue=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(s),Ee.forEach(s),D.forEach(s)},m(u,E){c(u,m,E),e(m,F),c(u,g,E),c(u,f,E),e(f,q),e(q,T),e(f,_),e(f,A),e(A,_e),c(u,K,E),c(u,$,E),e($,Y),e($,O),e(O,Z),e($,Te),e($,I),e(I,be),e($,ce),c(u,W,E),c(u,N,E),e(N,ee),c(u,se,E),c(u,z,E),e(z,x),e(x,oe),e(x,H),e(H,he),e(x,V),e(x,L),e(L,te),e(z,ve),e(z,C),e(C,we),e(C,Q),e(Q,ae),e(C,ye),e(C,B),e(B,ke),e(z,re),e(z,P),e(P,je),e(P,G),e(G,ue)},d(u){u&&s(m),u&&s(g),u&&s(f),u&&s(K),u&&s($),u&&s(W),u&&s(N),u&&s(se),u&&s(z)}}}function a0(U){let m,F,g,f,q;return{c(){m=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),f=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);F=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var A=i(g);f=n(A,"Module"),A.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,F),e(m,g),e(g,f),e(m,q)},d(T){T&&s(m)}}}function n0(U){let m,F,g,f,q,T,_,A,_e,K,$,Y,O,Z,Te,I,be,ce,W,N,ee,se,z,x,oe,H,he,V,L,te,ve,C,we,Q,ae,ye,B,ke,re,P,je,G,ue,u,E,J,Fe,Ge,S,Ae,xe,Re,D,M,Ve,Ce,R,Ke,qe,Ee,Ye,fa,dh,ch,od,At,Gy,rd,$t,hh,bo,uh,mh,id,_s,gh,_a,fh,_h,Ta,Th,bh,ba,vh,wh,ld,vo,yh,pd,Ts,Me,kh,Rr,jh,qh,wo,Eh,Fh,Vr,Ah,$h,va,zh,xh,Kr,Ch,Mh,Yr,Ph,Sh,Dh,Je,Nh,Jr,Lh,Qh,Xr,Oh,Ih,Zr,Wh,Uh,ei,Hh,Bh,wa,Gh,Rh,Vh,Vs,Kh,si,Yh,Jh,ti,Xh,Zh,eu,ai,su,dd,Ks,zt,ni,ya,tu,oi,au,cd,xt,nu,yo,ou,ru,hd,ko,ri,iu,ud,Ct,lu,jo,pu,du,md,zs,ii,cu,hu,ka,uu,li,mu,gu,fu,ja,_u,pi,Tu,bu,gd,qo,vu,fd,Mt,di,Ys,ci,hi,wu,yu,ui,mi,ku,ju,gi,fi,qu,Eu,Js,Xs,_i,Fu,Au,Ti,$u,zu,bi,xu,Cu,Zs,vi,Mu,Pu,wi,Su,Du,yi,Nu,Lu,et,ki,Qu,Ou,ji,Iu,Wu,qi,Uu,_d,xs,Hu,qa,Bu,Gu,Ea,Ru,Vu,Td,Fa,bd,Cs,Ku,Eo,Yu,Ju,Fo,Xu,Zu,vd,Aa,wd,Pt,em,$a,sm,tm,yd,St,am,za,nm,om,kd,Ao,Ei,rm,jd,Dt,im,xa,lm,pm,qd,ie,$o,Fi,dm,cm,hm,zo,Ai,um,mm,gm,xo,$i,fm,_m,Tm,Co,zi,bm,vm,wm,Mo,xi,ym,km,jm,Po,Ci,qm,Em,Fm,So,Mi,Am,$m,zm,Do,Pi,xm,Cm,Mm,No,Si,Pm,Sm,Ed,We,Dm,Ca,Nm,Lm,Ma,Qm,Om,Di,Im,Wm,Ni,Um,Hm,Li,Bm,Gm,Fd,Lo,Qi,Rm,Ad,$e,Vm,Qo,Km,Ym,Oi,Jm,Xm,Ii,Zm,eg,Wi,sg,tg,Oo,ag,ng,Io,og,rg,$d,Nt,Ui,Pa,Hi,Bi,ig,lg,Gi,Ri,pg,dg,st,Sa,Vi,cg,hg,$s,Ki,ug,mg,Yi,gg,fg,Ji,_g,Tg,Xi,bg,vg,Da,Zi,wg,yg,Pe,el,kg,jg,sl,qg,Eg,tl,Fg,Ag,al,$g,zg,nl,xg,Cg,ol,Mg,Pg,rl,Sg,Dg,Na,il,Ng,Lg,ms,ll,Qg,Og,pl,Ig,Wg,dl,Ug,Hg,cl,Bg,Gg,hl,Rg,zd,pe,Wo,Vg,Kg,ul,Yg,Jg,ml,Xg,Zg,gl,ef,sf,fl,tf,af,_l,nf,of,Tl,rf,lf,bl,pf,df,xd,La,Cd,bs,cf,Uo,hf,uf,vl,mf,gf,wl,ff,_f,Md,Qa,Pd,X,Tf,yl,bf,vf,kl,wf,yf,jl,kf,jf,ql,qf,Ef,El,Ff,Af,Fl,$f,zf,Ho,xf,Cf,Oa,Mf,Pf,Ia,Sf,Df,Sd,Bo,Al,Nf,Dd,Ms,Lf,Go,Qf,Of,Ro,If,Wf,Nd,Wa,Ld,tt,Lt,$l,Ua,Uf,zl,Hf,Qd,me,Bf,Vo,Gf,Rf,Ko,Vf,Kf,xl,Yf,Jf,Cl,Xf,Zf,Ml,e_,s_,Yo,t_,a_,Pl,n_,o_,Od,Qt,r_,Sl,i_,l_,Id,Ha,Wd,Ue,p_,Dl,d_,c_,Nl,h_,u_,Ll,m_,g_,Ba,f_,__,Ga,T_,b_,Ud,at,Ot,Ql,Ra,v_,Ol,w_,Hd,nt,Va,y_,Ka,k_,Jo,j_,q_,Bd,ot,It,Il,Ya,E_,Wl,F_,Gd,Xe,Ja,A_,gs,$_,Xo,z_,x_,Ul,C_,M_,Hl,P_,S_,Zo,D_,N_,L_,Xa,Q_,Za,O_,I_,W_,Bl,U_,H_,en,Rd,rt,Wt,Gl,sn,B_,Rl,G_,Vd,de,tn,R_,Vl,V_,K_,ne,Y_,er,J_,X_,sr,Z_,eT,Kl,sT,tT,Yl,aT,nT,Jl,oT,rT,Xl,iT,lT,Zl,pT,dT,ep,cT,hT,sp,uT,mT,gT,Se,tp,fT,_T,ap,TT,bT,np,vT,wT,op,yT,kT,rp,jT,qT,ip,ET,FT,lp,AT,$T,tr,ar,zT,xT,CT,Ut,an,MT,pp,PT,ST,Ps,nn,DT,on,NT,nr,LT,QT,OT,rn,IT,ln,WT,UT,HT,or,pn,Kd,it,Ht,dp,dn,BT,cp,GT,Yd,De,cn,RT,hn,VT,rr,KT,YT,JT,un,XT,mn,ZT,eb,sb,gn,tb,ir,ab,nb,ob,fn,rb,_n,ib,lb,pb,ts,Tn,db,lt,cb,lr,hb,ub,hp,mb,gb,fb,Bt,_b,up,Tb,bb,bn,Jd,pt,Gt,mp,vn,vb,gp,wb,Xd,fs,wn,yb,dt,kb,fp,jb,qb,pr,Eb,Fb,Ab,yn,$b,kn,zb,xb,Cb,as,jn,Mb,ct,Pb,dr,Sb,Db,_p,Nb,Lb,Qb,Rt,Ob,Tp,Ib,Wb,qn,Zd,ht,Vt,bp,En,Ub,vp,Hb,ec,Ze,Fn,Bb,wp,Gb,Rb,An,Vb,cr,Kb,Yb,Jb,$n,Xb,zn,Zb,ev,sv,ns,xn,tv,ut,av,hr,nv,ov,yp,rv,iv,lv,Kt,pv,kp,dv,cv,Cn,sc,mt,Yt,jp,Mn,hv,qp,uv,tc,es,Pn,mv,gt,gv,Ep,fv,_v,Fp,Tv,bv,vv,Sn,wv,ur,yv,kv,jv,Dn,qv,Nn,Ev,Fv,Av,os,Ln,$v,ft,zv,mr,xv,Cv,Ap,Mv,Pv,Sv,Jt,Dv,$p,Nv,Lv,Qn,ac,_t,Xt,zp,On,Qv,xp,Ov,nc,Ne,In,Iv,Cp,Wv,Uv,Wn,Hv,gr,Bv,Gv,Rv,Un,Vv,Hn,Kv,Yv,Jv,Zt,Xv,rs,Bn,Zv,Tt,ew,fr,sw,tw,Mp,aw,nw,ow,ea,rw,Pp,iw,lw,Gn,oc,bt,sa,Sp,Rn,pw,Dp,dw,rc,Le,Vn,cw,Kn,hw,Np,uw,mw,gw,Yn,fw,_r,_w,Tw,bw,Jn,vw,Xn,ww,yw,kw,ta,jw,is,Zn,qw,vt,Ew,Tr,Fw,Aw,Lp,$w,zw,xw,aa,Cw,Qp,Mw,Pw,eo,ic,wt,na,Op,so,Sw,Ip,Dw,lc,Qe,to,Nw,Wp,Lw,Qw,ao,Ow,br,Iw,Ww,Uw,no,Hw,oo,Bw,Gw,Rw,oa,Vw,ls,ro,Kw,yt,Yw,vr,Jw,Xw,Up,Zw,ey,sy,ra,ty,Hp,ay,ny,io,pc,kt,ia,Bp,lo,oy,Gp,ry,dc,Oe,po,iy,jt,ly,Rp,py,dy,Vp,cy,hy,uy,co,my,wr,gy,fy,_y,ho,Ty,uo,by,vy,wy,la,yy,ps,mo,ky,qt,jy,yr,qy,Ey,Kp,Fy,Ay,$y,pa,zy,Yp,xy,Cy,go,cc;return T=new ss({}),Z=new ss({}),ya=new ss({}),Fa=new Gr({props:{pt:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

# for example, the base sized model with default SQA configuration
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base")

# or, the base sized model with WTQ configuration
config = TapasConfig.from_pretrained("google/tapas-base-finetuned-wtq")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

# or, the base sized model with WikiSQL configuration
config = TapasConfig("google-base-finetuned-wikisql-supervised")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># for example, the base sized model with default SQA configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WikiSQL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(<span class="hljs-string">&quot;google-base-finetuned-wikisql-supervised&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`},tf:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

# for example, the base sized model with default SQA configuration
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base")

# or, the base sized model with WTQ configuration
config = TapasConfig.from_pretrained("google/tapas-base-finetuned-wtq")
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

# or, the base sized model with WikiSQL configuration
config = TapasConfig("google-base-finetuned-wikisql-supervised")
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># for example, the base sized model with default SQA configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WikiSQL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(<span class="hljs-string">&quot;google-base-finetuned-wikisql-supervised&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}}),Aa=new Gr({props:{pt:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`},tf:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}}),La=new Gr({props:{pt:{code:`from transformers import TapasTokenizer
import pandas as pd

model_name = "google/tapas-base"
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
answer_coordinates = [[(0, 0)], [(2, 1)], [(0, 1), (1, 1), (2, 1)]]
answer_text = [["Brad Pitt"], ["69"], ["209"]]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(
    table=table,
    queries=queries,
    answer_coordinates=answer_coordinates,
    answer_text=answer_text,
    padding="max_length",
    return_tensors="pt",
)
inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_coordinates = [[(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>)], [(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)], [(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)]]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_text = [[<span class="hljs-string">&quot;Brad Pitt&quot;</span>], [<span class="hljs-string">&quot;69&quot;</span>], [<span class="hljs-string">&quot;209&quot;</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    table=table,
<span class="hljs-meta">... </span>    queries=queries,
<span class="hljs-meta">... </span>    answer_coordinates=answer_coordinates,
<span class="hljs-meta">... </span>    answer_text=answer_text,
<span class="hljs-meta">... </span>    padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;attention_mask&#x27;</span>: tensor([[...]]), <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: tensor([[[...]]]),
<span class="hljs-string">&#x27;numeric_values&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;numeric_values_scale: tensor([[ ... ]]), labels: tensor([[ ... ]])}</span>`},tf:{code:`from transformers import TapasTokenizer
import pandas as pd

model_name = "google/tapas-base"
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
answer_coordinates = [[(0, 0)], [(2, 1)], [(0, 1), (1, 1), (2, 1)]]
answer_text = [["Brad Pitt"], ["69"], ["209"]]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(
    table=table,
    queries=queries,
    answer_coordinates=answer_coordinates,
    answer_text=answer_text,
    padding="max_length",
    return_tensors="tf",
)
inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_coordinates = [[(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>)], [(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)], [(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)]]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_text = [[<span class="hljs-string">&quot;Brad Pitt&quot;</span>], [<span class="hljs-string">&quot;69&quot;</span>], [<span class="hljs-string">&quot;209&quot;</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    table=table,
<span class="hljs-meta">... </span>    queries=queries,
<span class="hljs-meta">... </span>    answer_coordinates=answer_coordinates,
<span class="hljs-meta">... </span>    answer_text=answer_text,
<span class="hljs-meta">... </span>    padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;tf&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;attention_mask&#x27;</span>: tensor([[...]]), <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: tensor([[[...]]]),
<span class="hljs-string">&#x27;numeric_values&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;numeric_values_scale: tensor([[ ... ]]), labels: tensor([[ ... ]])}</span>`}}}),Qa=new Gr({props:{pt:{code:`import torch
import pandas as pd

tsv_path = "your_path_to_the_tsv_file"
table_csv_path = "your_path_to_a_directory_containing_all_csv_files"


class TableDataset(torch.utils.data.Dataset):
    def __init__(self, data, tokenizer):
        self.data = data
        self.tokenizer = tokenizer

    def __getitem__(self, idx):
        item = data.iloc[idx]
        table = pd.read_csv(table_csv_path + item.table_file).astype(
            str
        )  # be sure to make your table data text only
        encoding = self.tokenizer(
            table=table,
            queries=item.question,
            answer_coordinates=item.answer_coordinates,
            answer_text=item.answer_text,
            truncation=True,
            padding="max_length",
            return_tensors="pt",
        )
        # remove the batch dimension which the tokenizer adds by default
        encoding = {key: val.squeeze(0) for key, val in encoding.items()}
        # add the float_answer which is also required (weak supervision for aggregation case)
        encoding["float_answer"] = torch.tensor(item.float_answer)
        return encoding

    def __len__(self):
        return len(self.data)


data = pd.read_csv(tsv_path, sep="\\t")
train_dataset = TableDataset(data, tokenizer)
train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=32)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tsv_path = <span class="hljs-string">&quot;your_path_to_the_tsv_file&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>table_csv_path = <span class="hljs-string">&quot;your_path_to_a_directory_containing_all_csv_files&quot;</span>


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">TableDataset</span>(torch.utils.data.Dataset):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, data, tokenizer</span>):
<span class="hljs-meta">... </span>        self.data = data
<span class="hljs-meta">... </span>        self.tokenizer = tokenizer

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__getitem__</span>(<span class="hljs-params">self, idx</span>):
<span class="hljs-meta">... </span>        item = data.iloc[idx]
<span class="hljs-meta">... </span>        table = pd.read_csv(table_csv_path + item.table_file).astype(
<span class="hljs-meta">... </span>            <span class="hljs-built_in">str</span>
<span class="hljs-meta">... </span>        )  <span class="hljs-comment"># be sure to make your table data text only</span>
<span class="hljs-meta">... </span>        encoding = self.tokenizer(
<span class="hljs-meta">... </span>            table=table,
<span class="hljs-meta">... </span>            queries=item.question,
<span class="hljs-meta">... </span>            answer_coordinates=item.answer_coordinates,
<span class="hljs-meta">... </span>            answer_text=item.answer_text,
<span class="hljs-meta">... </span>            truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>            padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>            return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>        )
<span class="hljs-meta">... </span>        <span class="hljs-comment"># remove the batch dimension which the tokenizer adds by default</span>
<span class="hljs-meta">... </span>        encoding = {key: val.squeeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> key, val <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">... </span>        <span class="hljs-comment"># add the float_answer which is also required (weak supervision for aggregation case)</span>
<span class="hljs-meta">... </span>        encoding[<span class="hljs-string">&quot;float_answer&quot;</span>] = torch.tensor(item.float_answer)
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> encoding

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__len__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> <span class="hljs-built_in">len</span>(self.data)


<span class="hljs-meta">&gt;&gt;&gt; </span>data = pd.read_csv(tsv_path, sep=<span class="hljs-string">&quot;\\t&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataset = TableDataset(data, tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=<span class="hljs-number">32</span>)`},tf:{code:`import tensorflow as tf
import pandas as pd

tsv_path = "your_path_to_the_tsv_file"
table_csv_path = "your_path_to_a_directory_containing_all_csv_files"


class TableDataset:
    def __init__(self, data, tokenizer):
        self.data = data
        self.tokenizer = tokenizer

    def __iter__(self):
        for idx in range(self.__len__()):
            item = self.data.iloc[idx]
            table = pd.read_csv(table_csv_path + item.table_file).astype(
                str
            )  # be sure to make your table data text only
            encoding = self.tokenizer(
                table=table,
                queries=item.question,
                answer_coordinates=item.answer_coordinates,
                answer_text=item.answer_text,
                truncation=True,
                padding="max_length",
                return_tensors="tf",
            )
            # remove the batch dimension which the tokenizer adds by default
            encoding = {key: tf.squeeze(val, 0) for key, val in encoding.items()}
            # add the float_answer which is also required (weak supervision for aggregation case)
            encoding["float_answer"] = tf.convert_to_tensor(item.float_answer, dtype=tf.float32)
            yield encoding["input_ids"], encoding["attention_mask"], encoding["numeric_values"], encoding[
                "numeric_values_scale"
            ], encoding["token_type_ids"], encoding["labels"], encoding["float_answer"]

    def __len__(self):
        return len(self.data)


data = pd.read_csv(tsv_path, sep="\\t")
train_dataset = TableDataset(data, tokenizer)
output_signature = (
    tf.TensorSpec(shape=(512,), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.float32),
    tf.TensorSpec(shape=(512,), dtype=tf.float32),
    tf.TensorSpec(shape=(512, 7), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.float32),
)
train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(32)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tsv_path = <span class="hljs-string">&quot;your_path_to_the_tsv_file&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>table_csv_path = <span class="hljs-string">&quot;your_path_to_a_directory_containing_all_csv_files&quot;</span>


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">TableDataset</span>:
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, data, tokenizer</span>):
<span class="hljs-meta">... </span>        self.data = data
<span class="hljs-meta">... </span>        self.tokenizer = tokenizer

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__iter__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">for</span> idx <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(self.__len__()):
<span class="hljs-meta">... </span>            item = self.data.iloc[idx]
<span class="hljs-meta">... </span>            table = pd.read_csv(table_csv_path + item.table_file).astype(
<span class="hljs-meta">... </span>                <span class="hljs-built_in">str</span>
<span class="hljs-meta">... </span>            )  <span class="hljs-comment"># be sure to make your table data text only</span>
<span class="hljs-meta">... </span>            encoding = self.tokenizer(
<span class="hljs-meta">... </span>                table=table,
<span class="hljs-meta">... </span>                queries=item.question,
<span class="hljs-meta">... </span>                answer_coordinates=item.answer_coordinates,
<span class="hljs-meta">... </span>                answer_text=item.answer_text,
<span class="hljs-meta">... </span>                truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>                padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>                return_tensors=<span class="hljs-string">&quot;tf&quot;</span>,
<span class="hljs-meta">... </span>            )
<span class="hljs-meta">... </span>            <span class="hljs-comment"># remove the batch dimension which the tokenizer adds by default</span>
<span class="hljs-meta">... </span>            encoding = {key: tf.squeeze(val, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> key, val <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">... </span>            <span class="hljs-comment"># add the float_answer which is also required (weak supervision for aggregation case)</span>
<span class="hljs-meta">... </span>            encoding[<span class="hljs-string">&quot;float_answer&quot;</span>] = tf.convert_to_tensor(item.float_answer, dtype=tf.float32)
<span class="hljs-meta">... </span>            <span class="hljs-keyword">yield</span> encoding[<span class="hljs-string">&quot;input_ids&quot;</span>], encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>], encoding[<span class="hljs-string">&quot;numeric_values&quot;</span>], encoding[
<span class="hljs-meta">... </span>                <span class="hljs-string">&quot;numeric_values_scale&quot;</span>
<span class="hljs-meta">... </span>            ], encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>], encoding[<span class="hljs-string">&quot;labels&quot;</span>], encoding[<span class="hljs-string">&quot;float_answer&quot;</span>]

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__len__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> <span class="hljs-built_in">len</span>(self.data)


<span class="hljs-meta">&gt;&gt;&gt; </span>data = pd.read_csv(tsv_path, sep=<span class="hljs-string">&quot;\\t&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataset = TableDataset(data, tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>output_signature = (
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>, <span class="hljs-number">7</span>), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(<span class="hljs-number">32</span>)`}}}),Wa=new Gr({props:{pt:{code:`from transformers import TapasConfig, TapasForQuestionAnswering, AdamW

# this is the default WTQ configuration
config = TapasConfig(
    num_aggregation_labels=4,
    use_answer_as_supervision=True,
    answer_loss_cutoff=0.664694,
    cell_selection_preference=0.207951,
    huber_loss_delta=0.121194,
    init_cell_selection_weights_to_zero=True,
    select_one_column=True,
    allow_empty_column_selection=False,
    temperature=0.0352513,
)
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

optimizer = AdamW(model.parameters(), lr=5e-5)

model.train()
for epoch in range(2):  # loop over the dataset multiple times
    for batch in train_dataloader:
        # get the inputs;
        input_ids = batch["input_ids"]
        attention_mask = batch["attention_mask"]
        token_type_ids = batch["token_type_ids"]
        labels = batch["labels"]
        numeric_values = batch["numeric_values"]
        numeric_values_scale = batch["numeric_values_scale"]
        float_answer = batch["float_answer"]

        # zero the parameter gradients
        optimizer.zero_grad()

        # forward + backward + optimize
        outputs = model(
            input_ids=input_ids,
            attention_mask=attention_mask,
            token_type_ids=token_type_ids,
            labels=labels,
            numeric_values=numeric_values,
            numeric_values_scale=numeric_values_scale,
            float_answer=float_answer,
        )
        loss = outputs.loss
        loss.backward()
        optimizer.step()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering, AdamW

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># this is the default WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(
<span class="hljs-meta">... </span>    num_aggregation_labels=<span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>    use_answer_as_supervision=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    answer_loss_cutoff=<span class="hljs-number">0.664694</span>,
<span class="hljs-meta">... </span>    cell_selection_preference=<span class="hljs-number">0.207951</span>,
<span class="hljs-meta">... </span>    huber_loss_delta=<span class="hljs-number">0.121194</span>,
<span class="hljs-meta">... </span>    init_cell_selection_weights_to_zero=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    select_one_column=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    allow_empty_column_selection=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.0352513</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">5e-5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model.train()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):  <span class="hljs-comment"># loop over the dataset multiple times</span>
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># get the inputs;</span>
<span class="hljs-meta">... </span>        input_ids = batch[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">... </span>        attention_mask = batch[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">... </span>        token_type_ids = batch[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">... </span>        labels = batch[<span class="hljs-string">&quot;labels&quot;</span>]
<span class="hljs-meta">... </span>        numeric_values = batch[<span class="hljs-string">&quot;numeric_values&quot;</span>]
<span class="hljs-meta">... </span>        numeric_values_scale = batch[<span class="hljs-string">&quot;numeric_values_scale&quot;</span>]
<span class="hljs-meta">... </span>        float_answer = batch[<span class="hljs-string">&quot;float_answer&quot;</span>]

<span class="hljs-meta">... </span>        <span class="hljs-comment"># zero the parameter gradients</span>
<span class="hljs-meta">... </span>        optimizer.zero_grad()

<span class="hljs-meta">... </span>        <span class="hljs-comment"># forward + backward + optimize</span>
<span class="hljs-meta">... </span>        outputs = model(
<span class="hljs-meta">... </span>            input_ids=input_ids,
<span class="hljs-meta">... </span>            attention_mask=attention_mask,
<span class="hljs-meta">... </span>            token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>            labels=labels,
<span class="hljs-meta">... </span>            numeric_values=numeric_values,
<span class="hljs-meta">... </span>            numeric_values_scale=numeric_values_scale,
<span class="hljs-meta">... </span>            float_answer=float_answer,
<span class="hljs-meta">... </span>        )
<span class="hljs-meta">... </span>        loss = outputs.loss
<span class="hljs-meta">... </span>        loss.backward()
<span class="hljs-meta">... </span>        optimizer.step()`},tf:{code:`import tensorflow as tf
from transformers import TapasConfig, TFTapasForQuestionAnswering

# this is the default WTQ configuration
config = TapasConfig(
    num_aggregation_labels=4,
    use_answer_as_supervision=True,
    answer_loss_cutoff=0.664694,
    cell_selection_preference=0.207951,
    huber_loss_delta=0.121194,
    init_cell_selection_weights_to_zero=True,
    select_one_column=True,
    allow_empty_column_selection=False,
    temperature=0.0352513,
)
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

optimizer = tf.keras.optimizers.Adam(learning_rate=5e-5)

for epoch in range(2):  # loop over the dataset multiple times
    for batch in train_dataloader:
        # get the inputs;
        input_ids = batch[0]
        attention_mask = batch[1]
        token_type_ids = batch[4]
        labels = batch[-1]
        numeric_values = batch[2]
        numeric_values_scale = batch[3]
        float_answer = batch[6]

        # forward + backward + optimize
        with tf.GradientTape() as tape:
            outputs = model(
                input_ids=input_ids,
                attention_mask=attention_mask,
                token_type_ids=token_type_ids,
                labels=labels,
                numeric_values=numeric_values,
                numeric_values_scale=numeric_values_scale,
                float_answer=float_answer,
            )
        grads = tape.gradient(outputs.loss, model.trainable_weights)
        optimizer.apply_gradients(zip(grads, model.trainable_weights))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># this is the default WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(
<span class="hljs-meta">... </span>    num_aggregation_labels=<span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>    use_answer_as_supervision=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    answer_loss_cutoff=<span class="hljs-number">0.664694</span>,
<span class="hljs-meta">... </span>    cell_selection_preference=<span class="hljs-number">0.207951</span>,
<span class="hljs-meta">... </span>    huber_loss_delta=<span class="hljs-number">0.121194</span>,
<span class="hljs-meta">... </span>    init_cell_selection_weights_to_zero=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    select_one_column=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    allow_empty_column_selection=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.0352513</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = tf.keras.optimizers.Adam(learning_rate=<span class="hljs-number">5e-5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):  <span class="hljs-comment"># loop over the dataset multiple times</span>
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># get the inputs;</span>
<span class="hljs-meta">... </span>        input_ids = batch[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>        attention_mask = batch[<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>        token_type_ids = batch[<span class="hljs-number">4</span>]
<span class="hljs-meta">... </span>        labels = batch[-<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>        numeric_values = batch[<span class="hljs-number">2</span>]
<span class="hljs-meta">... </span>        numeric_values_scale = batch[<span class="hljs-number">3</span>]
<span class="hljs-meta">... </span>        float_answer = batch[<span class="hljs-number">6</span>]

<span class="hljs-meta">... </span>        <span class="hljs-comment"># forward + backward + optimize</span>
<span class="hljs-meta">... </span>        <span class="hljs-keyword">with</span> tf.GradientTape() <span class="hljs-keyword">as</span> tape:
<span class="hljs-meta">... </span>            outputs = model(
<span class="hljs-meta">... </span>                input_ids=input_ids,
<span class="hljs-meta">... </span>                attention_mask=attention_mask,
<span class="hljs-meta">... </span>                token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>                labels=labels,
<span class="hljs-meta">... </span>                numeric_values=numeric_values,
<span class="hljs-meta">... </span>                numeric_values_scale=numeric_values_scale,
<span class="hljs-meta">... </span>                float_answer=float_answer,
<span class="hljs-meta">... </span>            )
<span class="hljs-meta">... </span>        grads = tape.gradient(outputs.loss, model.trainable_weights)
<span class="hljs-meta">... </span>        optimizer.apply_gradients(<span class="hljs-built_in">zip</span>(grads, model.trainable_weights))`}}}),Ua=new ss({}),Ha=new Gr({props:{pt:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd

model_name = "google/tapas-base-finetuned-wtq"
model = TapasForQuestionAnswering.from_pretrained(model_name)
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
outputs = model(**inputs)
predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
    inputs, outputs.logits.detach(), outputs.logits_aggregation.detach()
)

# let's print out the results:
id2aggregation = {0: "NONE", 1: "SUM", 2: "AVERAGE", 3: "COUNT"}
aggregation_predictions_string = [id2aggregation[x] for x in predicted_aggregation_indices]

answers = []
for coordinates in predicted_answer_coordinates:
    if len(coordinates) == 1:
        # only a single cell:
        answers.append(table.iat[coordinates[0]])
    else:
        # multiple cells
        cell_values = []
        for coordinate in coordinates:
            cell_values.append(table.iat[coordinate])
        answers.append(", ".join(cell_values))

display(table)
print("")
for query, answer, predicted_agg in zip(queries, answers, aggregation_predictions_string):
    print(query)
    if predicted_agg == "NONE":
        print("Predicted answer: " + answer)
    else:
        print("Predicted answer: " + predicted_agg + " > " + answer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
<span class="hljs-meta">... </span>    inputs, outputs.logits.detach(), outputs.logits_aggregation.detach()
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s print out the results:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>id2aggregation = {<span class="hljs-number">0</span>: <span class="hljs-string">&quot;NONE&quot;</span>, <span class="hljs-number">1</span>: <span class="hljs-string">&quot;SUM&quot;</span>, <span class="hljs-number">2</span>: <span class="hljs-string">&quot;AVERAGE&quot;</span>, <span class="hljs-number">3</span>: <span class="hljs-string">&quot;COUNT&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>aggregation_predictions_string = [id2aggregation[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> predicted_aggregation_indices]

<span class="hljs-meta">&gt;&gt;&gt; </span>answers = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> coordinates <span class="hljs-keyword">in</span> predicted_answer_coordinates:
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(coordinates) == <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># only a single cell:</span>
<span class="hljs-meta">... </span>        answers.append(table.iat[coordinates[<span class="hljs-number">0</span>]])
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># multiple cells</span>
<span class="hljs-meta">... </span>        cell_values = []
<span class="hljs-meta">... </span>        <span class="hljs-keyword">for</span> coordinate <span class="hljs-keyword">in</span> coordinates:
<span class="hljs-meta">... </span>            cell_values.append(table.iat[coordinate])
<span class="hljs-meta">... </span>        answers.append(<span class="hljs-string">&quot;, &quot;</span>.join(cell_values))

<span class="hljs-meta">&gt;&gt;&gt; </span>display(table)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> query, answer, predicted_agg <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(queries, answers, aggregation_predictions_string):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(query)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> predicted_agg == <span class="hljs-string">&quot;NONE&quot;</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + answer)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + predicted_agg + <span class="hljs-string">&quot; &gt; &quot;</span> + answer)
What <span class="hljs-keyword">is</span> the name of the first actor?
Predicted answer: Brad Pitt
How many movies has George Clooney played <span class="hljs-keyword">in</span>?
Predicted answer: COUNT &gt; <span class="hljs-number">69</span>
What <span class="hljs-keyword">is</span> the total number of movies?
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`},tf:{code:`from transformers import TapasTokenizer, TFTapasForQuestionAnswering
import pandas as pd

model_name = "google/tapas-base-finetuned-wtq"
model = TFTapasForQuestionAnswering.from_pretrained(model_name)
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
outputs = model(**inputs)
predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
    inputs, outputs.logits, outputs.logits_aggregation
)

# let's print out the results:
id2aggregation = {0: "NONE", 1: "SUM", 2: "AVERAGE", 3: "COUNT"}
aggregation_predictions_string = [id2aggregation[x] for x in predicted_aggregation_indices]

answers = []
for coordinates in predicted_answer_coordinates:
    if len(coordinates) == 1:
        # only a single cell:
        answers.append(table.iat[coordinates[0]])
    else:
        # multiple cells
        cell_values = []
        for coordinate in coordinates:
            cell_values.append(table.iat[coordinate])
        answers.append(", ".join(cell_values))

display(table)
print("")
for query, answer, predicted_agg in zip(queries, answers, aggregation_predictions_string):
    print(query)
    if predicted_agg == "NONE":
        print("Predicted answer: " + answer)
    else:
        print("Predicted answer: " + predicted_agg + " > " + answer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TFTapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
<span class="hljs-meta">... </span>    inputs, outputs.logits, outputs.logits_aggregation
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s print out the results:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>id2aggregation = {<span class="hljs-number">0</span>: <span class="hljs-string">&quot;NONE&quot;</span>, <span class="hljs-number">1</span>: <span class="hljs-string">&quot;SUM&quot;</span>, <span class="hljs-number">2</span>: <span class="hljs-string">&quot;AVERAGE&quot;</span>, <span class="hljs-number">3</span>: <span class="hljs-string">&quot;COUNT&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>aggregation_predictions_string = [id2aggregation[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> predicted_aggregation_indices]

<span class="hljs-meta">&gt;&gt;&gt; </span>answers = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> coordinates <span class="hljs-keyword">in</span> predicted_answer_coordinates:
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(coordinates) == <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># only a single cell:</span>
<span class="hljs-meta">... </span>        answers.append(table.iat[coordinates[<span class="hljs-number">0</span>]])
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># multiple cells</span>
<span class="hljs-meta">... </span>        cell_values = []
<span class="hljs-meta">... </span>        <span class="hljs-keyword">for</span> coordinate <span class="hljs-keyword">in</span> coordinates:
<span class="hljs-meta">... </span>            cell_values.append(table.iat[coordinate])
<span class="hljs-meta">... </span>        answers.append(<span class="hljs-string">&quot;, &quot;</span>.join(cell_values))

<span class="hljs-meta">&gt;&gt;&gt; </span>display(table)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> query, answer, predicted_agg <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(queries, answers, aggregation_predictions_string):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(query)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> predicted_agg == <span class="hljs-string">&quot;NONE&quot;</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + answer)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + predicted_agg + <span class="hljs-string">&quot; &gt; &quot;</span> + answer)
What <span class="hljs-keyword">is</span> the name of the first actor?
Predicted answer: Brad Pitt
How many movies has George Clooney played <span class="hljs-keyword">in</span>?
Predicted answer: COUNT &gt; <span class="hljs-number">69</span>
What <span class="hljs-keyword">is</span> the total number of movies?
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}}),Ra=new ss({}),Va=new le({props:{name:"class transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"logits_aggregation",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/modeling_tapas.py#L106",parametersDescription:[{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) &#x2014;
Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.`,name:"loss"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the cell selection head, for every token.`,name:"logits"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits_aggregation",description:`<strong>logits_aggregation</strong> (<code>torch.FloatTensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) &#x2014;
Prediction scores of the aggregation head, for every aggregation operator.`,name:"logits_aggregation"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.`,name:"attentions"}]}}),Ya=new ss({}),Ja=new le({props:{name:"class transformers.TapasConfig",anchor:"transformers.TapasConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1024"},{name:"type_vocab_sizes",val:" = [3, 256, 256, 2, 256, 256, 10]"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"positive_label_weight",val:" = 10.0"},{name:"num_aggregation_labels",val:" = 0"},{name:"aggregation_loss_weight",val:" = 1.0"},{name:"use_answer_as_supervision",val:" = None"},{name:"answer_loss_importance",val:" = 1.0"},{name:"use_normalized_answer_loss",val:" = False"},{name:"huber_loss_delta",val:" = None"},{name:"temperature",val:" = 1.0"},{name:"aggregation_temperature",val:" = 1.0"},{name:"use_gumbel_for_cells",val:" = False"},{name:"use_gumbel_for_aggregation",val:" = False"},{name:"average_approximation_function",val:" = 'ratio'"},{name:"cell_selection_preference",val:" = None"},{name:"answer_loss_cutoff",val:" = None"},{name:"max_num_rows",val:" = 64"},{name:"max_num_columns",val:" = 32"},{name:"average_logits_per_cell",val:" = False"},{name:"select_one_column",val:" = True"},{name:"allow_empty_column_selection",val:" = False"},{name:"init_cell_selection_weights_to_zero",val:" = False"},{name:"reset_position_index_per_cell",val:" = True"},{name:"disable_per_token_loss",val:" = False"},{name:"aggregation_labels",val:" = None"},{name:"no_aggregation_label_index",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/configuration_tapas.py#L37",parametersDescription:[{anchor:"transformers.TapasConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the TAPAS model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasModel">TapasModel</a>.`,name:"vocab_size"},{anchor:"transformers.TapasConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.TapasConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.TapasConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.TapasConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.TapasConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;swish&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.TapasConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.TapasConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.TapasConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.TapasConfig.type_vocab_sizes",description:`<strong>type_vocab_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 256, 256, 2, 256, 256, 10]</code>) &#x2014;
The vocabulary sizes of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasModel">TapasModel</a>.`,name:"type_vocab_sizes"},{anchor:"transformers.TapasConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.TapasConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.TapasConfig.positive_label_weight",description:`<strong>positive_label_weight</strong> (<code>float</code>, <em>optional</em>, defaults to 10.0) &#x2014;
Weight for positive labels.`,name:"positive_label_weight"},{anchor:"transformers.TapasConfig.num_aggregation_labels",description:`<strong>num_aggregation_labels</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of aggregation operators to predict.`,name:"num_aggregation_labels"},{anchor:"transformers.TapasConfig.aggregation_loss_weight",description:`<strong>aggregation_loss_weight</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Importance weight for the aggregation loss.`,name:"aggregation_loss_weight"},{anchor:"transformers.TapasConfig.use_answer_as_supervision",description:`<strong>use_answer_as_supervision</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to use the answer as the only supervision for aggregation examples.`,name:"use_answer_as_supervision"},{anchor:"transformers.TapasConfig.answer_loss_importance",description:`<strong>answer_loss_importance</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Importance weight for the regression loss.`,name:"answer_loss_importance"},{anchor:"transformers.TapasConfig.use_normalized_answer_loss",description:`<strong>use_normalized_answer_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to normalize the answer loss by the maximum of the predicted and expected value.`,name:"use_normalized_answer_loss"},{anchor:"transformers.TapasConfig.huber_loss_delta",description:`<strong>huber_loss_delta</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Delta parameter used to calculate the regression loss.`,name:"huber_loss_delta"},{anchor:"transformers.TapasConfig.temperature",description:`<strong>temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Value used to control (OR change) the skewness of cell logits probabilities.`,name:"temperature"},{anchor:"transformers.TapasConfig.aggregation_temperature",description:`<strong>aggregation_temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Scales aggregation logits to control the skewness of probabilities.`,name:"aggregation_temperature"},{anchor:"transformers.TapasConfig.use_gumbel_for_cells",description:`<strong>use_gumbel_for_cells</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply Gumbel-Softmax to cell selection.`,name:"use_gumbel_for_cells"},{anchor:"transformers.TapasConfig.use_gumbel_for_aggregation",description:`<strong>use_gumbel_for_aggregation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply Gumbel-Softmax to aggregation selection.`,name:"use_gumbel_for_aggregation"},{anchor:"transformers.TapasConfig.average_approximation_function",description:`<strong>average_approximation_function</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;ratio&quot;</code>) &#x2014;
Method to calculate the expected average of cells in the weak supervision case. One of <code>&quot;ratio&quot;</code>,
<code>&quot;first_order&quot;</code> or <code>&quot;second_order&quot;</code>.`,name:"average_approximation_function"},{anchor:"transformers.TapasConfig.cell_selection_preference",description:`<strong>cell_selection_preference</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Preference for cell selection in ambiguous cases. Only applicable in case of weak supervision for
aggregation (WTQ, WikiSQL). If the total mass of the aggregation probabilities (excluding the &#x201C;NONE&#x201D;
operator) is higher than this hyperparameter, then aggregation is predicted for an example.`,name:"cell_selection_preference"},{anchor:"transformers.TapasConfig.answer_loss_cutoff",description:`<strong>answer_loss_cutoff</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Ignore examples with answer loss larger than cutoff.`,name:"answer_loss_cutoff"},{anchor:"transformers.TapasConfig.max_num_rows",description:`<strong>max_num_rows</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Maximum number of rows.`,name:"max_num_rows"},{anchor:"transformers.TapasConfig.max_num_columns",description:`<strong>max_num_columns</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Maximum number of columns.`,name:"max_num_columns"},{anchor:"transformers.TapasConfig.average_logits_per_cell",description:`<strong>average_logits_per_cell</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to average logits per cell.`,name:"average_logits_per_cell"},{anchor:"transformers.TapasConfig.select_one_column",description:`<strong>select_one_column</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to constrain the model to only select cells from a single column.`,name:"select_one_column"},{anchor:"transformers.TapasConfig.allow_empty_column_selection",description:`<strong>allow_empty_column_selection</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to allow not to select any column.`,name:"allow_empty_column_selection"},{anchor:"transformers.TapasConfig.init_cell_selection_weights_to_zero",description:`<strong>init_cell_selection_weights_to_zero</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to initialize cell selection weights to 0 so that the initial probabilities are 50%.`,name:"init_cell_selection_weights_to_zero"},{anchor:"transformers.TapasConfig.reset_position_index_per_cell",description:`<strong>reset_position_index_per_cell</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to restart position indexes at every cell (i.e. use relative position embeddings).`,name:"reset_position_index_per_cell"},{anchor:"transformers.TapasConfig.disable_per_token_loss",description:`<strong>disable_per_token_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to disable any (strong or weak) supervision on cells.`,name:"disable_per_token_loss"},{anchor:"transformers.TapasConfig.aggregation_labels",description:`<strong>aggregation_labels</strong> (<code>Dict[int, label]</code>, <em>optional</em>) &#x2014;
The aggregation labels used to aggregate the results. For example, the WTQ models have the following
aggregation labels: <code>{0: &quot;NONE&quot;, 1: &quot;SUM&quot;, 2: &quot;AVERAGE&quot;, 3: &quot;COUNT&quot;}</code>`,name:"aggregation_labels"},{anchor:"transformers.TapasConfig.no_aggregation_label_index",description:`<strong>no_aggregation_label_index</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If the aggregation labels are defined and one of these labels represents &#x201C;No aggregation&#x201D;, this should be
set to its index. For example, the WTQ models have the &#x201C;NONE&#x201D; aggregation label at index 0, so that value
should be set to 0 for these models.`,name:"no_aggregation_label_index"}]}}),en=new Ft({props:{code:`from transformers import TapasModel, TapasConfig

# Initializing a default (SQA) Tapas configuration
configuration = TapasConfig()
# Initializing a model from the configuration
model = TapasModel(configuration)
# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasModel, TapasConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a default (SQA) Tapas configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = TapasConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),sn=new ss({}),tn=new le({props:{name:"class transformers.TapasTokenizer",anchor:"transformers.TapasTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"empty_token",val:" = '[EMPTY]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"cell_trim_length",val:": int = -1"},{name:"max_column_id",val:": int = None"},{name:"max_row_id",val:": int = None"},{name:"strip_column_names",val:": bool = False"},{name:"update_answer_coordinates",val:": bool = False"},{name:"min_question_length",val:" = None"},{name:"max_question_length",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/tokenization_tapas.py#L189",parametersDescription:[{anchor:"transformers.TapasTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.TapasTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.TapasTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.TapasTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.TapasTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.TapasTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.TapasTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.TapasTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.TapasTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.TapasTokenizer.empty_token",description:`<strong>empty_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[EMPTY]&quot;</code>) &#x2014;
The token used for empty cell values in a table. Empty cell values include &quot;&quot;, &#x201C;n/a&#x201D;, &#x201C;nan&#x201D; and &#x201D;?&#x201C;.`,name:"empty_token"},{anchor:"transformers.TapasTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"},{anchor:"transformers.TapasTokenizer.cell_trim_length",description:`<strong>cell_trim_length</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
If &gt; 0: Trim cells so that the length is &lt;= this value. Also disables further cell trimming, should thus be
used with <code>truncation</code> set to <code>True</code>.`,name:"cell_trim_length"},{anchor:"transformers.TapasTokenizer.max_column_id",description:`<strong>max_column_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Max column id to extract.`,name:"max_column_id"},{anchor:"transformers.TapasTokenizer.max_row_id",description:`<strong>max_row_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Max row id to extract.`,name:"max_row_id"},{anchor:"transformers.TapasTokenizer.strip_column_names",description:`<strong>strip_column_names</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to add empty strings instead of column names.`,name:"strip_column_names"},{anchor:"transformers.TapasTokenizer.update_answer_coordinates",description:`<strong>update_answer_coordinates</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to recompute the answer coordinates from the answer text.`,name:"update_answer_coordinates"},{anchor:"transformers.TapasTokenizer.min_question_length",description:`<strong>min_question_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Minimum length of each question in terms of tokens (will be skipped otherwise).`,name:"min_question_length"},{anchor:"transformers.TapasTokenizer.max_question_length",description:`<strong>max_question_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of each question in terms of tokens (will be skipped otherwise).`,name:"max_question_length"}]}}),an=new le({props:{name:"__call__",anchor:"transformers.TapasTokenizer.__call__",parameters:[{name:"table",val:": pd.DataFrame"},{name:"queries",val:": typing.Union[str, typing.List[str], typing.List[int], typing.List[typing.List[str]], typing.List[typing.List[int]], NoneType] = None"},{name:"answer_coordinates",val:": typing.Union[typing.List[typing.Tuple], typing.List[typing.List[typing.Tuple]], NoneType] = None"},{name:"answer_text",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.file_utils.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.models.tapas.tokenization_tapas.TapasTruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/tokenization_tapas.py#L529",parametersDescription:[{anchor:"transformers.TapasTokenizer.__call__.table",description:`<strong>table</strong> (<code>pd.DataFrame</code>) &#x2014;
Table containing tabular data. Note that all cell values must be text. Use <em>.astype(str)</em> on a Pandas
dataframe to convert it to string.`,name:"table"},{anchor:"transformers.TapasTokenizer.__call__.queries",description:`<strong>queries</strong> (<code>str</code> or <code>List[str]</code>) &#x2014;
Question or batch of questions related to a table to be encoded. Note that in case of a batch, all
questions must refer to the <strong>same</strong> table.`,name:"queries"},{anchor:"transformers.TapasTokenizer.__call__.answer_coordinates",description:`<strong>answer_coordinates</strong> (<code>List[Tuple]</code> or <code>List[List[Tuple]]</code>, <em>optional</em>) &#x2014;
Answer coordinates of each table-question pair in the batch. In case only a single table-question pair
is provided, then the answer_coordinates must be a single list of one or more tuples. Each tuple must
be a (row_index, column_index) pair. The first data row (not the column header row) has index 0. The
first column has index 0. In case a batch of table-question pairs is provided, then the
answer_coordinates must be a list of lists of tuples (each list corresponding to a single
table-question pair).`,name:"answer_coordinates"},{anchor:"transformers.TapasTokenizer.__call__.answer_text",description:`<strong>answer_text</strong> (<code>List[str]</code> or <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
Answer text of each table-question pair in the batch. In case only a single table-question pair is
provided, then the answer_text must be a single list of one or more strings. Each string must be the
answer text of a corresponding answer coordinate. In case a batch of table-question pairs is provided,
then the answer_coordinates must be a list of lists of strings (each list corresponding to a single
table-question pair).`,name:"answer_text"},{anchor:"transformers.TapasTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.TapasTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_15828/en/internal/file_utils#transformers.file_utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.TapasTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <code>TapasTruncationStrategy</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;drop_rows_to_fit&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code>
or to the maximum acceptable input length for the model if that argument is not provided. This will
truncate row by row, removing rows from the table.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.TapasTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.TapasTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.TapasTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.TapasTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_15828/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}]}}),nn=new le({props:{name:"convert_logits_to_predictions",anchor:"transformers.TapasTokenizer.convert_logits_to_predictions",parameters:[{name:"data",val:""},{name:"logits",val:""},{name:"logits_agg",val:" = None"},{name:"cell_classification_threshold",val:" = 0.5"}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/tokenization_tapas.py#L1891",parametersDescription:[{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.data",description:`<strong>data</strong> (<code>dict</code>) &#x2014;
Dictionary mapping features to actual values. Should be created using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.`,name:"data"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits",description:`<strong>logits</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Tensor containing the logits at the token level.`,name:"logits"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits_agg",description:`<strong>logits_agg</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_aggregation_labels)</code>, <em>optional</em>) &#x2014;
Tensor containing the aggregation logits.`,name:"logits_agg"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.cell_classification_threshold",description:`<strong>cell_classification_threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
Threshold to be used for cell selection. All table cells for which their probability is larger than
this threshold will be selected.`,name:"cell_classification_threshold"}],returnDescription:`
<p>Predicted answer coordinates
as a list of lists of tuples. Each element in the list contains the predicted answer coordinates of a
single example in the batch, as a list of tuples. Each tuple is a cell, i.e. (row index, column index).</p>
<ul>
<li>predicted_aggregation_indices (<code>List[int]</code>of length <code>batch_size</code>, <em>optional</em>, returned when
<code>logits_aggregation</code> is provided): Predicted aggregation operator indices of the aggregation head.</li>
</ul>
`}}),pn=new le({props:{name:"save_vocabulary",anchor:"transformers.TapasTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/tokenization_tapas.py#L397"}}),dn=new ss({}),cn=new le({props:{name:"class transformers.TapasModel",anchor:"transformers.TapasModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/modeling_tapas.py#L856",parametersDescription:[{anchor:"transformers.TapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15828/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Tn=new le({props:{name:"forward",anchor:"transformers.TapasModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/modeling_tapas.py#L894",parametersDescription:[{anchor:"transformers.TapasModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/pr_15828/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_15828/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15828/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15828/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
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
`}}),Bt=new As({props:{$$slots:{default:[Gq]},$$scope:{ctx:U}}}),bn=new Ft({props:{code:`from transformers import TapasTokenizer, TapasModel
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base")
model = TapasModel.from_pretrained("google/tapas-base")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasModel.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),vn=new ss({}),wn=new le({props:{name:"class transformers.TapasForMaskedLM",anchor:"transformers.TapasForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/modeling_tapas.py#L1009",parametersDescription:[{anchor:"transformers.TapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15828/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jn=new le({props:{name:"forward",anchor:"transformers.TapasForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/modeling_tapas.py#L1028",parametersDescription:[{anchor:"transformers.TapasForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/pr_15828/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_15828/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15828/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15828/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),Rt=new As({props:{$$slots:{default:[Rq]},$$scope:{ctx:U}}}),qn=new Ft({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base")
model = TapasForMaskedLM.from_pretrained("google/tapas-base")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)

inputs = tokenizer(
    table=table, queries="How many [MASK] has George [MASK] played in?", return_tensors="pt"
)
labels = tokenizer(
    table=table, queries="How many movies has George Clooney played in?", return_tensors="pt"
)["input_ids"]

outputs = model(**inputs, labels=labels)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    table=table, queries=<span class="hljs-string">&quot;How many [MASK] has George [MASK] played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(
<span class="hljs-meta">... </span>    table=table, queries=<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),En=new ss({}),Fn=new le({props:{name:"class transformers.TapasForSequenceClassification",anchor:"transformers.TapasForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/modeling_tapas.py#L1468",parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15828/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xn=new le({props:{name:"forward",anchor:"transformers.TapasForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/modeling_tapas.py#L1480",parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/pr_15828/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_15828/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15828/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy). Note: this is called
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15828/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),Kt=new As({props:{$$slots:{default:[Vq]},$$scope:{ctx:U}}}),Cn=new Ft({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
import torch
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-tabfact")
model = TapasForSequenceClassification.from_pretrained("google/tapas-base-finetuned-tabfact")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = [
    "There is only one actor who is 45 years old",
    "There are 3 actors which played in more than 60 movies",
]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
labels = torch.tensor([1, 0])  # 1 means entailed, 0 means refuted

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There is only one actor who is 45 years old&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There are 3 actors which played in more than 60 movies&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>, <span class="hljs-number">0</span>])  <span class="hljs-comment"># 1 means entailed, 0 means refuted</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Mn=new ss({}),Pn=new le({props:{name:"class transformers.TapasForQuestionAnswering",anchor:"transformers.TapasForQuestionAnswering",parameters:[{name:"config",val:": TapasConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/modeling_tapas.py#L1124",parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15828/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ln=new le({props:{name:"forward",anchor:"transformers.TapasForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"table_mask",val:" = None"},{name:"labels",val:" = None"},{name:"aggregation_labels",val:" = None"},{name:"float_answer",val:" = None"},{name:"numeric_values",val:" = None"},{name:"numeric_values_scale",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/modeling_tapas.py#L1159",parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/pr_15828/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_15828/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15828/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForQuestionAnswering.forward.table_mask",description:`<strong>table_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Mask for the table. Indicates which tokens belong to the table (1). Question tokens, table headers and
padding are 0.`,name:"table_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Labels per token for computing the hierarchical cell selection loss. This encodes the positions of the
answer appearing in the table. Can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.</p>
<ul>
<li>1 for tokens that are <strong>part of the answer</strong>,</li>
<li>0 for tokens that are <strong>not part of the answer</strong>.</li>
</ul>`,name:"labels"},{anchor:"transformers.TapasForQuestionAnswering.forward.aggregation_labels",description:`<strong>aggregation_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Aggregation function index for every example in the batch for computing the aggregation loss. Indices
should be in <code>[0, ..., config.num_aggregation_labels - 1]</code>. Only required in case of strong supervision for
aggregation (WikiSQL-supervised).`,name:"aggregation_labels"},{anchor:"transformers.TapasForQuestionAnswering.forward.float_answer",description:`<strong>float_answer</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Float answer for every example in the batch. Set to <em>float(&#x2018;nan&#x2019;)</em> for cell selection questions. Only
required in case of weak supervision (WTQ) to calculate the aggregate mask and regression loss.`,name:"float_answer"},{anchor:"transformers.TapasForQuestionAnswering.forward.numeric_values",description:`<strong>numeric_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Numeric values of every token, NaN for tokens which are not numeric values. Can be obtained using
<a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case of weak supervision for aggregation (WTQ) to calculate the
regression loss.`,name:"numeric_values"},{anchor:"transformers.TapasForQuestionAnswering.forward.numeric_values_scale",description:`<strong>numeric_values_scale</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Scale of the numeric values of every token. Can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case
of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"
>transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) \u2014 Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the cell selection head, for every token.</li>
<li><strong>logits_aggregation</strong> (<code>torch.FloatTensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) \u2014 Prediction scores of the aggregation head, for every aggregation operator.</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`}}),Jt=new As({props:{$$slots:{default:[Kq]},$$scope:{ctx:U}}}),Qn=new Ft({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-wtq")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base-finetuned-wtq")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
logits_aggregation = outputs.logits_aggregation,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),On=new ss({}),In=new le({props:{name:"class transformers.TFTapasModel",anchor:"transformers.TFTapasModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/modeling_tf_tapas.py#L976",parametersDescription:[{anchor:"transformers.TFTapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15828/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Zt=new As({props:{$$slots:{default:[Yq]},$$scope:{ctx:U}}}),Bn=new le({props:{name:"call",anchor:"transformers.TFTapasModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/modeling_tf_tapas.py#L982",parametersDescription:[{anchor:"transformers.TFTapasModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/pr_15828/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15828/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15828/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15828/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
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
`}}),ea=new As({props:{$$slots:{default:[Jq]},$$scope:{ctx:U}}}),Gn=new Ft({props:{code:`from transformers import TapasTokenizer, TapasModel
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base")
model = TapasModel.from_pretrained("google/tapas-base")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasModel.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Rn=new ss({}),Vn=new le({props:{name:"class transformers.TFTapasForMaskedLM",anchor:"transformers.TFTapasForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/modeling_tf_tapas.py#L1066",parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15828/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ta=new As({props:{$$slots:{default:[Xq]},$$scope:{ctx:U}}}),Zn=new le({props:{name:"call",anchor:"transformers.TFTapasForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/modeling_tf_tapas.py#L1082",parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/pr_15828/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15828/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15828/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15828/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
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
`}}),aa=new As({props:{$$slots:{default:[Zq]},$$scope:{ctx:U}}}),eo=new Ft({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base")
model = TapasForMaskedLM.from_pretrained("google/tapas-base")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)

inputs = tokenizer(
    table=table, queries="How many [MASK] has George [MASK] played in?", return_tensors="tf"
)
labels = tokenizer(
    table=table, queries="How many movies has George Clooney played in?", return_tensors="tf"
)["input_ids"]

outputs = model(**inputs, labels=labels)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    table=table, queries=<span class="hljs-string">&quot;How many [MASK] has George [MASK] played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(
<span class="hljs-meta">... </span>    table=table, queries=<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),so=new ss({}),to=new le({props:{name:"class transformers.TFTapasForSequenceClassification",anchor:"transformers.TFTapasForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/modeling_tf_tapas.py#L1649",parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15828/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),oa=new As({props:{$$slots:{default:[e0]},$$scope:{ctx:U}}}),ro=new le({props:{name:"call",anchor:"transformers.TFTapasForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/modeling_tf_tapas.py#L1660",parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/pr_15828/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15828/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15828/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy). Note: this is called
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15828/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
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
`}}),ra=new As({props:{$$slots:{default:[s0]},$$scope:{ctx:U}}}),io=new Ft({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
import tensorflow as tf
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-tabfact")
model = TapasForSequenceClassification.from_pretrained("google/tapas-base-finetuned-tabfact")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = [
    "There is only one actor who is 45 years old",
    "There are 3 actors which played in more than 60 movies",
]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
labels = tf.convert_to_tensor([1, 0])  # 1 means entailed, 0 means refuted

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There is only one actor who is 45 years old&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There are 3 actors which played in more than 60 movies&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.convert_to_tensor([<span class="hljs-number">1</span>, <span class="hljs-number">0</span>])  <span class="hljs-comment"># 1 means entailed, 0 means refuted</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),lo=new ss({}),po=new le({props:{name:"class transformers.TFTapasForQuestionAnswering",anchor:"transformers.TFTapasForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/modeling_tf_tapas.py#L1292",parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15828/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),la=new As({props:{$$slots:{default:[t0]},$$scope:{ctx:U}}}),mo=new le({props:{name:"call",anchor:"transformers.TFTapasForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"table_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"aggregation_labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"float_answer",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values_scale",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15828/src/transformers/models/tapas/modeling_tf_tapas.py#L1314",parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/pr_15828/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15828/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15828/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForQuestionAnswering.call.table_mask",description:`<strong>table_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Mask for the table. Indicates which tokens belong to the table (1). Question tokens, table headers and
padding are 0.`,name:"table_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Labels per token for computing the hierarchical cell selection loss. This encodes the positions of the
answer appearing in the table. Can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.</p>
<ul>
<li>1 for tokens that are <strong>part of the answer</strong>,</li>
<li>0 for tokens that are <strong>not part of the answer</strong>.</li>
</ul>`,name:"labels"},{anchor:"transformers.TFTapasForQuestionAnswering.call.aggregation_labels",description:`<strong>aggregation_labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Aggregation function index for every example in the batch for computing the aggregation loss. Indices
should be in <code>[0, ..., config.num_aggregation_labels - 1]</code>. Only required in case of strong supervision for
aggregation (WikiSQL-supervised).`,name:"aggregation_labels"},{anchor:"transformers.TFTapasForQuestionAnswering.call.float_answer",description:`<strong>float_answer</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Float answer for every example in the batch. Set to <em>float(&#x2018;nan&#x2019;)</em> for cell selection questions. Only
required in case of weak supervision (WTQ) to calculate the aggregate mask and regression loss.`,name:"float_answer"},{anchor:"transformers.TFTapasForQuestionAnswering.call.numeric_values",description:`<strong>numeric_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Numeric values of every token, NaN for tokens which are not numeric values. Can be obtained using
<a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case of weak supervision for aggregation (WTQ) to calculate the
regression loss.`,name:"numeric_values"},{anchor:"transformers.TFTapasForQuestionAnswering.call.numeric_values_scale",description:`<strong>numeric_values_scale</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Scale of the numeric values of every token. Can be obtained using <a href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case
of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],returnDescription:`
<p>A <code>transformers.models.tapas.modeling_tf_tapas.TFTableQuestionAnsweringOutput</code>or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) \u2014 Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.</li>
<li><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the cell selection head, for every token.</li>
<li><strong>logits_aggregation</strong> (<code>tf.Tensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) \u2014 Prediction scores of the aggregation head, for every aggregation operator.</li>
<li><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer plus
the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`}}),pa=new As({props:{$$slots:{default:[a0]},$$scope:{ctx:U}}}),go=new Ft({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-wtq")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base-finetuned-wtq")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
outputs = model(**inputs)

logits = outputs.logits
logits_aggregation = outputs.logits_aggregation,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),{c(){m=o("meta"),F=l(),g=o("h1"),f=o("a"),q=o("span"),b(T.$$.fragment),_=l(),A=o("span"),_e=a("TAPAS"),K=l(),$=o("h2"),Y=o("a"),O=o("span"),b(Z.$$.fragment),Te=l(),I=o("span"),be=a("Overview"),ce=l(),W=o("p"),N=a("The TAPAS model was proposed in "),ee=o("a"),se=a("TAPAS: Weakly Supervised Table Parsing via Pre-training"),z=a(`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),x=l(),oe=o("p"),H=a("For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),he=l(),V=o("ul"),L=o("li"),te=o("a"),ve=a("SQA"),C=a(" (Sequential Question Answering by Microsoft)"),we=l(),Q=o("li"),ae=o("a"),ye=a("WTQ"),B=a(" (Wiki Table Questions by Stanford University)"),ke=l(),re=o("li"),P=o("a"),je=a("WikiSQL"),G=a(" (by Salesforce)."),ue=l(),u=o("p"),E=a("It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),J=l(),Fe=o("p"),Ge=a("The abstract from the paper is the following:"),S=l(),Ae=o("p"),xe=o("em"),Re=a("Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),D=l(),M=o("p"),Ve=a("In addition, the authors have further pre-trained TAPAS to recognize "),Ce=o("strong"),R=a("table entailment"),Ke=a(", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),qe=o("a"),Ee=a("TabFact"),Ye=a(", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),fa=o("a"),dh=a("Understanding tables with intermediate pre-training"),ch=a(" by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),od=l(),At=o("img"),rd=l(),$t=o("small"),hh=a("TAPAS architecture. Taken from the "),bo=o("a"),uh=a("original blog post"),mh=a("."),id=l(),_s=o("p"),gh=a("This model was contributed by "),_a=o("a"),fh=a("nielsr"),_h=a(". The Tensorflow version of this model was contributed by "),Ta=o("a"),Th=a("kamalkraj"),bh=a(". The original code can be found "),ba=o("a"),vh=a("here"),wh=a("."),ld=l(),vo=o("p"),yh=a("Tips:"),pd=l(),Ts=o("ul"),Me=o("li"),kh=a("TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),Rr=o("code"),jh=a("reset_position_index_per_cell"),qh=a(" parameter of "),wo=o("a"),Eh=a("TapasConfig"),Fh=a(", which is set to "),Vr=o("code"),Ah=a("True"),$h=a(" by default. The default versions of the models available on the "),va=o("a"),zh=a("hub"),xh=a(" all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),Kr=o("code"),Ch=a('revision="no_reset"'),Mh=a(" when calling the "),Yr=o("code"),Ph=a("from_pretrained()"),Sh=a(" method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),Dh=l(),Je=o("li"),Nh=a("TAPAS is based on BERT, so "),Jr=o("code"),Lh=a("TAPAS-base"),Qh=a(" for example corresponds to a "),Xr=o("code"),Oh=a("BERT-base"),Ih=a(" architecture. Of course, "),Zr=o("code"),Wh=a("TAPAS-large"),Uh=a(" will result in the best performance (the results reported in the paper are from "),ei=o("code"),Hh=a("TAPAS-large"),Bh=a("). Results of the various sized models are shown on the "),wa=o("a"),Gh=a("original Github repository"),Rh=a("."),Vh=l(),Vs=o("li"),Kh=a("TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),si=o("code"),Yh=a("prev_labels"),Jh=a(" token type ids can be overwritten by the predicted "),ti=o("code"),Xh=a("labels"),Zh=a(" of the model to the previous question. See \u201CUsage\u201D section for more info."),eu=l(),ai=o("li"),su=a("TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),dd=l(),Ks=o("h2"),zt=o("a"),ni=o("span"),b(ya.$$.fragment),tu=l(),oi=o("span"),au=a("Usage: fine-tuning"),cd=l(),xt=o("p"),nu=a("Here we explain how you can fine-tune "),yo=o("a"),ou=a("TapasForQuestionAnswering"),ru=a(" on your own dataset."),hd=l(),ko=o("p"),ri=o("strong"),iu=a("STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),ud=l(),Ct=o("p"),lu=a("Basically, there are 3 different ways in which one can fine-tune "),jo=o("a"),pu=a("TapasForQuestionAnswering"),du=a(", corresponding to the different datasets on which Tapas was fine-tuned:"),md=l(),zs=o("ol"),ii=o("li"),cu=a("SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),hu=l(),ka=o("li"),uu=a("WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),li=o("strong"),mu=a("weak supervision"),gu=a(", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),fu=l(),ja=o("li"),_u=a("WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),pi=o("strong"),Tu=a("strong supervision"),bu=a(". Here, learning the appropriate aggregation operator is much easier."),gd=l(),qo=o("p"),vu=a("To summarize:"),fd=l(),Mt=o("table"),di=o("thead"),Ys=o("tr"),ci=o("th"),hi=o("strong"),wu=a("Task"),yu=l(),ui=o("th"),mi=o("strong"),ku=a("Example dataset"),ju=l(),gi=o("th"),fi=o("strong"),qu=a("Description"),Eu=l(),Js=o("tbody"),Xs=o("tr"),_i=o("td"),Fu=a("Conversational"),Au=l(),Ti=o("td"),$u=a("SQA"),zu=l(),bi=o("td"),xu=a("Conversational, only cell selection questions"),Cu=l(),Zs=o("tr"),vi=o("td"),Mu=a("Weak supervision for aggregation"),Pu=l(),wi=o("td"),Su=a("WTQ"),Du=l(),yi=o("td"),Nu=a("Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Lu=l(),et=o("tr"),ki=o("td"),Qu=a("Strong supervision for aggregation"),Ou=l(),ji=o("td"),Iu=a("WikiSQL-supervised"),Wu=l(),qi=o("td"),Uu=a("Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),_d=l(),xs=o("p"),Hu=a(`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),qa=o("a"),Bu=a("torch-scatter"),Gu=a(" dependency for your environment in case you\u2019re using PyTorch, or the "),Ea=o("a"),Ru=a("tensorflow_probability"),Vu=a(`
dependency in case you\u2019re using Tensorflow:`),Td=l(),b(Fa.$$.fragment),bd=l(),Cs=o("p"),Ku=a("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),Eo=o("a"),Yu=a("TapasConfig"),Ju=a(", and then create a "),Fo=o("a"),Xu=a("TapasForQuestionAnswering"),Zu=a(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),vd=l(),b(Aa.$$.fragment),wd=l(),Pt=o("p"),em=a("What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),$a=o("a"),sm=a("here"),tm=a(" for more info."),yd=l(),St=o("p"),am=a("For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),za=o("a"),nm=a("here"),om=a("."),kd=l(),Ao=o("p"),Ei=o("strong"),rm=a("STEP 2: Prepare your data in the SQA format"),jd=l(),Dt=o("p"),im=a("Second, no matter what you picked above, you should prepare your dataset in the "),xa=o("a"),lm=a("SQA"),pm=a(" format. This format is a TSV/CSV file with the following columns:"),qd=l(),ie=o("ul"),$o=o("li"),Fi=o("code"),dm=a("id"),cm=a(": optional, id of the table-question pair, for bookkeeping purposes."),hm=l(),zo=o("li"),Ai=o("code"),um=a("annotator"),mm=a(": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),gm=l(),xo=o("li"),$i=o("code"),fm=a("position"),_m=a(": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),Tm=l(),Co=o("li"),zi=o("code"),bm=a("question"),vm=a(": string"),wm=l(),Mo=o("li"),xi=o("code"),ym=a("table_file"),km=a(": string, name of a csv file containing the tabular data"),jm=l(),Po=o("li"),Ci=o("code"),qm=a("answer_coordinates"),Em=a(": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),Fm=l(),So=o("li"),Mi=o("code"),Am=a("answer_text"),$m=a(": list of one or more strings (each string being a cell value that is part of the answer)"),zm=l(),Do=o("li"),Pi=o("code"),xm=a("aggregation_label"),Cm=a(": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),Mm=l(),No=o("li"),Si=o("code"),Pm=a("float_answer"),Sm=a(": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),Ed=l(),We=o("p"),Dm=a("The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),Ca=o("a"),Nm=a("here"),Lm=a(". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),Ma=o("a"),Qm=a("here"),Om=a(". Interestingly, these conversion scripts are not perfect (the "),Di=o("code"),Im=a("answer_coordinates"),Wm=a(" and "),Ni=o("code"),Um=a("float_answer"),Hm=a(" fields are populated based on the "),Li=o("code"),Bm=a("answer_text"),Gm=a("), meaning that WTQ and WikiSQL results could actually be improved."),Fd=l(),Lo=o("p"),Qi=o("strong"),Rm=a("STEP 3: Convert your data into PyTorch/TensorFlow tensors using TapasTokenizer"),Ad=l(),$e=o("p"),Vm=a("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),Qo=o("a"),Km=a("TapasTokenizer"),Ym=a(" to convert table-question pairs into "),Oi=o("code"),Jm=a("input_ids"),Xm=a(", "),Ii=o("code"),Zm=a("attention_mask"),eg=a(", "),Wi=o("code"),sg=a("token_type_ids"),tg=a(" and so on. Again, based on which of the three cases you picked above, "),Oo=o("a"),ag=a("TapasForQuestionAnswering"),ng=a("/"),Io=o("a"),og=a("TFTapasForQuestionAnswering"),rg=a(` requires different
inputs to be fine-tuned:`),$d=l(),Nt=o("table"),Ui=o("thead"),Pa=o("tr"),Hi=o("th"),Bi=o("strong"),ig=a("Task"),lg=l(),Gi=o("th"),Ri=o("strong"),pg=a("Required inputs"),dg=l(),st=o("tbody"),Sa=o("tr"),Vi=o("td"),cg=a("Conversational"),hg=l(),$s=o("td"),Ki=o("code"),ug=a("input_ids"),mg=a(", "),Yi=o("code"),gg=a("attention_mask"),fg=a(", "),Ji=o("code"),_g=a("token_type_ids"),Tg=a(", "),Xi=o("code"),bg=a("labels"),vg=l(),Da=o("tr"),Zi=o("td"),wg=a("Weak supervision for aggregation"),yg=l(),Pe=o("td"),el=o("code"),kg=a("input_ids"),jg=a(", "),sl=o("code"),qg=a("attention_mask"),Eg=a(", "),tl=o("code"),Fg=a("token_type_ids"),Ag=a(", "),al=o("code"),$g=a("labels"),zg=a(", "),nl=o("code"),xg=a("numeric_values"),Cg=a(", "),ol=o("code"),Mg=a("numeric_values_scale"),Pg=a(", "),rl=o("code"),Sg=a("float_answer"),Dg=l(),Na=o("tr"),il=o("td"),Ng=a("Strong supervision for aggregation"),Lg=l(),ms=o("td"),ll=o("code"),Qg=a("input ids"),Og=a(", "),pl=o("code"),Ig=a("attention mask"),Wg=a(", "),dl=o("code"),Ug=a("token type ids"),Hg=a(", "),cl=o("code"),Bg=a("labels"),Gg=a(", "),hl=o("code"),Rg=a("aggregation_labels"),zd=l(),pe=o("p"),Wo=o("a"),Vg=a("TapasTokenizer"),Kg=a(" creates the "),ul=o("code"),Yg=a("labels"),Jg=a(", "),ml=o("code"),Xg=a("numeric_values"),Zg=a(" and "),gl=o("code"),ef=a("numeric_values_scale"),sf=a(" based on the "),fl=o("code"),tf=a("answer_coordinates"),af=a(" and "),_l=o("code"),nf=a("answer_text"),of=a(" columns of the TSV file. The "),Tl=o("code"),rf=a("float_answer"),lf=a(" and "),bl=o("code"),pf=a("aggregation_labels"),df=a(" are already in the TSV file of step 2. Here\u2019s an example:"),xd=l(),b(La.$$.fragment),Cd=l(),bs=o("p"),cf=a("Note that "),Uo=o("a"),hf=a("TapasTokenizer"),uf=a(" expects the data of the table to be "),vl=o("strong"),mf=a("text-only"),gf=a(". You can use "),wl=o("code"),ff=a(".astype(str)"),_f=a(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Md=l(),b(Qa.$$.fragment),Pd=l(),X=o("p"),Tf=a("Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),yl=o("strong"),bf=a("not conversational"),vf=a(". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),kl=o("code"),wf=a("queries"),yf=a(", "),jl=o("code"),kf=a("answer_coordinates"),jf=a(" and "),ql=o("code"),qf=a("answer_text"),Ef=a(" per table (in the order of their "),El=o("code"),Ff=a("position"),Af=a(`
index) and batch encode each table with its questions. This will make sure that the `),Fl=o("code"),$f=a("prev_labels"),zf=a(" token types (see docs of "),Ho=o("a"),xf=a("TapasTokenizer"),Cf=a(") are set correctly. See "),Oa=o("a"),Mf=a("this notebook"),Pf=a(" for more info. See "),Ia=o("a"),Sf=a("this notebook"),Df=a(" for more info regarding using the TensorFlow model."),Sd=l(),Bo=o("p"),Al=o("strong"),Nf=a("STEP 4: Train (fine-tune) TapasForQuestionAnswering/TFTapasForQuestionAnswering"),Dd=l(),Ms=o("p"),Lf=a("You can then fine-tune "),Go=o("a"),Qf=a("TapasForQuestionAnswering"),Of=a(" or "),Ro=o("a"),If=a("TFTapasForQuestionAnswering"),Wf=a(" as follows (shown here for the weak supervision for aggregation case):"),Nd=l(),b(Wa.$$.fragment),Ld=l(),tt=o("h2"),Lt=o("a"),$l=o("span"),b(Ua.$$.fragment),Uf=l(),zl=o("span"),Hf=a("Usage: inference"),Qd=l(),me=o("p"),Bf=a("Here we explain how you can use "),Vo=o("a"),Gf=a("TapasForQuestionAnswering"),Rf=a(" or "),Ko=o("a"),Vf=a("TFTapasForQuestionAnswering"),Kf=a(" for inference (i.e. making predictions on new data). For inference, only "),xl=o("code"),Yf=a("input_ids"),Jf=a(", "),Cl=o("code"),Xf=a("attention_mask"),Zf=a(" and "),Ml=o("code"),e_=a("token_type_ids"),s_=a(" (which you can obtain using "),Yo=o("a"),t_=a("TapasTokenizer"),a_=a(") have to be provided to the model to obtain the logits. Next, you can use the handy "),Pl=o("code"),n_=a("convert_logits_to_predictions"),o_=a(" method to convert these into predicted coordinates and optional aggregation indices."),Od=l(),Qt=o("p"),r_=a("However, note that inference is "),Sl=o("strong"),i_=a("different"),l_=a(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),Id=l(),b(Ha.$$.fragment),Wd=l(),Ue=o("p"),p_=a("In case of a conversational set-up, then each table-question pair must be provided "),Dl=o("strong"),d_=a("sequentially"),c_=a(" to the model, such that the "),Nl=o("code"),h_=a("prev_labels"),u_=a(" token types can be overwritten by the predicted "),Ll=o("code"),m_=a("labels"),g_=a(" of the previous table-question pair. Again, more info can be found in "),Ba=o("a"),f_=a("this notebook"),__=a(" (for PyTorch) and "),Ga=o("a"),T_=a("this notebook"),b_=a(" (for TensorFlow)."),Ud=l(),at=o("h2"),Ot=o("a"),Ql=o("span"),b(Ra.$$.fragment),v_=l(),Ol=o("span"),w_=a("TAPAS specific outputs"),Hd=l(),nt=o("div"),b(Va.$$.fragment),y_=l(),Ka=o("p"),k_=a("Output type of "),Jo=o("a"),j_=a("TapasForQuestionAnswering"),q_=a("."),Bd=l(),ot=o("h2"),It=o("a"),Il=o("span"),b(Ya.$$.fragment),E_=l(),Wl=o("span"),F_=a("TapasConfig"),Gd=l(),Xe=o("div"),b(Ja.$$.fragment),A_=l(),gs=o("p"),$_=a("This is the configuration class to store the configuration of a "),Xo=o("a"),z_=a("TapasModel"),x_=a(`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS `),Ul=o("em"),C_=a("tapas-base-finetuned-sqa"),M_=a(` architecture.
Configuration objects inherit from `),Hl=o("code"),P_=a("PreTrainedConfig"),S_=a(` and can be used to control the model outputs. Read the
documentation from `),Zo=o("a"),D_=a("PretrainedConfig"),N_=a(" for more information."),L_=l(),Xa=o("p"),Q_=a(`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),Za=o("a"),O_=a("https://github.com/google-research/tapas/tree/master"),I_=a("."),W_=l(),Bl=o("p"),U_=a("Example:"),H_=l(),b(en.$$.fragment),Rd=l(),rt=o("h2"),Wt=o("a"),Gl=o("span"),b(sn.$$.fragment),B_=l(),Rl=o("span"),G_=a("TapasTokenizer"),Vd=l(),de=o("div"),b(tn.$$.fragment),R_=l(),Vl=o("p"),V_=a(`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),K_=l(),ne=o("p"),Y_=a("This tokenizer inherits from "),er=o("a"),J_=a("PreTrainedTokenizer"),X_=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),sr=o("a"),Z_=a("TapasTokenizer"),eT=a(` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Kl=o("code"),sT=a("segment_ids"),tT=a(`,
`),Yl=o("code"),aT=a("column_ids"),nT=a(", "),Jl=o("code"),oT=a("row_ids"),rT=a(", "),Xl=o("code"),iT=a("prev_labels"),lT=a(", "),Zl=o("code"),pT=a("column_ranks"),dT=a(", "),ep=o("code"),cT=a("inv_column_ranks"),hT=a(" and "),sp=o("code"),uT=a("numeric_relations"),mT=a(":"),gT=l(),Se=o("ul"),tp=o("li"),fT=a(`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),_T=l(),ap=o("li"),TT=a(`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),bT=l(),np=o("li"),vT=a(`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),wT=l(),op=o("li"),yT=a(`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),kT=l(),rp=o("li"),jT=a(`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),qT=l(),ip=o("li"),ET=a(`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),FT=l(),lp=o("li"),AT=a(`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),$T=l(),tr=o("p"),ar=o("a"),zT=a("TapasTokenizer"),xT=a(` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),CT=l(),Ut=o("div"),b(an.$$.fragment),MT=l(),pp=o("p"),PT=a("Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),ST=l(),Ps=o("div"),b(nn.$$.fragment),DT=l(),on=o("p"),NT=a("Converts logits of "),nr=o("a"),LT=a("TapasForQuestionAnswering"),QT=a(` to actual predicted answer coordinates and optional
aggregation indices.`),OT=l(),rn=o("p"),IT=a(`The original implementation, on which this function is based, can be found
`),ln=o("a"),WT=a("here"),UT=a("."),HT=l(),or=o("div"),b(pn.$$.fragment),Kd=l(),it=o("h2"),Ht=o("a"),dp=o("span"),b(dn.$$.fragment),BT=l(),cp=o("span"),GT=a("TapasModel"),Yd=l(),De=o("div"),b(cn.$$.fragment),RT=l(),hn=o("p"),VT=a(`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),rr=o("a"),KT=a("PreTrainedModel"),YT=a(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),JT=l(),un=o("p"),XT=a("This model is also a PyTorch "),mn=o("a"),ZT=a("torch.nn.Module"),eb=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sb=l(),gn=o("p"),tb=a("This class is a small change compared to "),ir=o("a"),ab=a("BertModel"),nb=a(", taking into account the additional token type ids."),ob=l(),fn=o("p"),rb=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),_n=o("a"),ib=a(`Attention is
all you need`),lb=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),pb=l(),ts=o("div"),b(Tn.$$.fragment),db=l(),lt=o("p"),cb=a("The "),lr=o("a"),hb=a("TapasModel"),ub=a(" forward method, overrides the "),hp=o("code"),mb=a("__call__"),gb=a(" special method."),fb=l(),b(Bt.$$.fragment),_b=l(),up=o("p"),Tb=a("Examples:"),bb=l(),b(bn.$$.fragment),Jd=l(),pt=o("h2"),Gt=o("a"),mp=o("span"),b(vn.$$.fragment),vb=l(),gp=o("span"),wb=a("TapasForMaskedLM"),Xd=l(),fs=o("div"),b(wn.$$.fragment),yb=l(),dt=o("p"),kb=a("Tapas Model with a "),fp=o("code"),jb=a("language modeling"),qb=a(` head on top.
This model inherits from `),pr=o("a"),Eb=a("PreTrainedModel"),Fb=a(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ab=l(),yn=o("p"),$b=a("This model is also a PyTorch "),kn=o("a"),zb=a("torch.nn.Module"),xb=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cb=l(),as=o("div"),b(jn.$$.fragment),Mb=l(),ct=o("p"),Pb=a("The "),dr=o("a"),Sb=a("TapasForMaskedLM"),Db=a(" forward method, overrides the "),_p=o("code"),Nb=a("__call__"),Lb=a(" special method."),Qb=l(),b(Rt.$$.fragment),Ob=l(),Tp=o("p"),Ib=a("Examples:"),Wb=l(),b(qn.$$.fragment),Zd=l(),ht=o("h2"),Vt=o("a"),bp=o("span"),b(En.$$.fragment),Ub=l(),vp=o("span"),Hb=a("TapasForSequenceClassification"),ec=l(),Ze=o("div"),b(Fn.$$.fragment),Bb=l(),wp=o("p"),Gb=a(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Rb=l(),An=o("p"),Vb=a("This model inherits from "),cr=o("a"),Kb=a("PreTrainedModel"),Yb=a(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jb=l(),$n=o("p"),Xb=a("This model is also a PyTorch "),zn=o("a"),Zb=a("torch.nn.Module"),ev=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sv=l(),ns=o("div"),b(xn.$$.fragment),tv=l(),ut=o("p"),av=a("The "),hr=o("a"),nv=a("TapasForSequenceClassification"),ov=a(" forward method, overrides the "),yp=o("code"),rv=a("__call__"),iv=a(" special method."),lv=l(),b(Kt.$$.fragment),pv=l(),kp=o("p"),dv=a("Examples:"),cv=l(),b(Cn.$$.fragment),sc=l(),mt=o("h2"),Yt=o("a"),jp=o("span"),b(Mn.$$.fragment),hv=l(),qp=o("span"),uv=a("TapasForQuestionAnswering"),tc=l(),es=o("div"),b(Pn.$$.fragment),mv=l(),gt=o("p"),gv=a(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Ep=o("code"),fv=a("logits"),_v=a(" and optional "),Fp=o("code"),Tv=a("logits_aggregation"),bv=a(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),vv=l(),Sn=o("p"),wv=a("This model inherits from "),ur=o("a"),yv=a("PreTrainedModel"),kv=a(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jv=l(),Dn=o("p"),qv=a("This model is also a PyTorch "),Nn=o("a"),Ev=a("torch.nn.Module"),Fv=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Av=l(),os=o("div"),b(Ln.$$.fragment),$v=l(),ft=o("p"),zv=a("The "),mr=o("a"),xv=a("TapasForQuestionAnswering"),Cv=a(" forward method, overrides the "),Ap=o("code"),Mv=a("__call__"),Pv=a(" special method."),Sv=l(),b(Jt.$$.fragment),Dv=l(),$p=o("p"),Nv=a("Examples:"),Lv=l(),b(Qn.$$.fragment),ac=l(),_t=o("h2"),Xt=o("a"),zp=o("span"),b(On.$$.fragment),Qv=l(),xp=o("span"),Ov=a("TFTapasModel"),nc=l(),Ne=o("div"),b(In.$$.fragment),Iv=l(),Cp=o("p"),Wv=a("The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),Uv=l(),Wn=o("p"),Hv=a("This model inherits from "),gr=o("a"),Bv=a("TFPreTrainedModel"),Gv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rv=l(),Un=o("p"),Vv=a("This model is also a "),Hn=o("a"),Kv=a("tf.keras.Model"),Yv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jv=l(),b(Zt.$$.fragment),Xv=l(),rs=o("div"),b(Bn.$$.fragment),Zv=l(),Tt=o("p"),ew=a("The "),fr=o("a"),sw=a("TFTapasModel"),tw=a(" forward method, overrides the "),Mp=o("code"),aw=a("__call__"),nw=a(" special method."),ow=l(),b(ea.$$.fragment),rw=l(),Pp=o("p"),iw=a("Examples:"),lw=l(),b(Gn.$$.fragment),oc=l(),bt=o("h2"),sa=o("a"),Sp=o("span"),b(Rn.$$.fragment),pw=l(),Dp=o("span"),dw=a("TFTapasForMaskedLM"),rc=l(),Le=o("div"),b(Vn.$$.fragment),cw=l(),Kn=o("p"),hw=a("Tapas Model with a "),Np=o("code"),uw=a("language modeling"),mw=a(" head on top."),gw=l(),Yn=o("p"),fw=a("This model inherits from "),_r=o("a"),_w=a("TFPreTrainedModel"),Tw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bw=l(),Jn=o("p"),vw=a("This model is also a "),Xn=o("a"),ww=a("tf.keras.Model"),yw=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kw=l(),b(ta.$$.fragment),jw=l(),is=o("div"),b(Zn.$$.fragment),qw=l(),vt=o("p"),Ew=a("The "),Tr=o("a"),Fw=a("TFTapasForMaskedLM"),Aw=a(" forward method, overrides the "),Lp=o("code"),$w=a("__call__"),zw=a(" special method."),xw=l(),b(aa.$$.fragment),Cw=l(),Qp=o("p"),Mw=a("Examples:"),Pw=l(),b(eo.$$.fragment),ic=l(),wt=o("h2"),na=o("a"),Op=o("span"),b(so.$$.fragment),Sw=l(),Ip=o("span"),Dw=a("TFTapasForSequenceClassification"),lc=l(),Qe=o("div"),b(to.$$.fragment),Nw=l(),Wp=o("p"),Lw=a(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Qw=l(),ao=o("p"),Ow=a("This model inherits from "),br=o("a"),Iw=a("TFPreTrainedModel"),Ww=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uw=l(),no=o("p"),Hw=a("This model is also a "),oo=o("a"),Bw=a("tf.keras.Model"),Gw=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rw=l(),b(oa.$$.fragment),Vw=l(),ls=o("div"),b(ro.$$.fragment),Kw=l(),yt=o("p"),Yw=a("The "),vr=o("a"),Jw=a("TFTapasForSequenceClassification"),Xw=a(" forward method, overrides the "),Up=o("code"),Zw=a("__call__"),ey=a(" special method."),sy=l(),b(ra.$$.fragment),ty=l(),Hp=o("p"),ay=a("Examples:"),ny=l(),b(io.$$.fragment),pc=l(),kt=o("h2"),ia=o("a"),Bp=o("span"),b(lo.$$.fragment),oy=l(),Gp=o("span"),ry=a("TFTapasForQuestionAnswering"),dc=l(),Oe=o("div"),b(po.$$.fragment),iy=l(),jt=o("p"),ly=a(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Rp=o("code"),py=a("logits"),dy=a(" and optional "),Vp=o("code"),cy=a("logits_aggregation"),hy=a(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),uy=l(),co=o("p"),my=a("This model inherits from "),wr=o("a"),gy=a("TFPreTrainedModel"),fy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_y=l(),ho=o("p"),Ty=a("This model is also a "),uo=o("a"),by=a("tf.keras.Model"),vy=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wy=l(),b(la.$$.fragment),yy=l(),ps=o("div"),b(mo.$$.fragment),ky=l(),qt=o("p"),jy=a("The "),yr=o("a"),qy=a("TFTapasForQuestionAnswering"),Ey=a(" forward method, overrides the "),Kp=o("code"),Fy=a("__call__"),Ay=a(" special method."),$y=l(),b(pa.$$.fragment),zy=l(),Yp=o("p"),xy=a("Examples:"),Cy=l(),b(go.$$.fragment),this.h()},l(t){const h=Hq('[data-svelte="svelte-1phssyn"]',document.head);m=r(h,"META",{name:!0,content:!0}),h.forEach(s),F=p(t),g=r(t,"H1",{class:!0});var fo=i(g);f=r(fo,"A",{id:!0,class:!0,href:!0});var Jp=i(f);q=r(Jp,"SPAN",{});var Xp=i(q);v(T.$$.fragment,Xp),Xp.forEach(s),Jp.forEach(s),_=p(fo),A=r(fo,"SPAN",{});var Zp=i(A);_e=n(Zp,"TAPAS"),Zp.forEach(s),fo.forEach(s),K=p(t),$=r(t,"H2",{class:!0});var _o=i($);Y=r(_o,"A",{id:!0,class:!0,href:!0});var ed=i(Y);O=r(ed,"SPAN",{});var sd=i(O);v(Z.$$.fragment,sd),sd.forEach(s),ed.forEach(s),Te=p(_o),I=r(_o,"SPAN",{});var td=i(I);be=n(td,"Overview"),td.forEach(s),_o.forEach(s),ce=p(t),W=r(t,"P",{});var To=i(W);N=n(To,"The TAPAS model was proposed in "),ee=r(To,"A",{href:!0,rel:!0});var ad=i(ee);se=n(ad,"TAPAS: Weakly Supervised Table Parsing via Pre-training"),ad.forEach(s),z=n(To,`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),To.forEach(s),x=p(t),oe=r(t,"P",{});var nd=i(oe);H=n(nd,"For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),nd.forEach(s),he=p(t),V=r(t,"UL",{});var Et=i(V);L=r(Et,"LI",{});var My=i(L);te=r(My,"A",{href:!0,rel:!0});var Ry=i(te);ve=n(Ry,"SQA"),Ry.forEach(s),C=n(My," (Sequential Question Answering by Microsoft)"),My.forEach(s),we=p(Et),Q=r(Et,"LI",{});var Py=i(Q);ae=r(Py,"A",{href:!0,rel:!0});var Vy=i(ae);ye=n(Vy,"WTQ"),Vy.forEach(s),B=n(Py," (Wiki Table Questions by Stanford University)"),Py.forEach(s),ke=p(Et),re=r(Et,"LI",{});var Sy=i(re);P=r(Sy,"A",{href:!0,rel:!0});var Ky=i(P);je=n(Ky,"WikiSQL"),Ky.forEach(s),G=n(Sy," (by Salesforce)."),Sy.forEach(s),Et.forEach(s),ue=p(t),u=r(t,"P",{});var Yy=i(u);E=n(Yy,"It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),Yy.forEach(s),J=p(t),Fe=r(t,"P",{});var Jy=i(Fe);Ge=n(Jy,"The abstract from the paper is the following:"),Jy.forEach(s),S=p(t),Ae=r(t,"P",{});var Xy=i(Ae);xe=r(Xy,"EM",{});var Zy=i(xe);Re=n(Zy,"Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),Zy.forEach(s),Xy.forEach(s),D=p(t),M=r(t,"P",{});var da=i(M);Ve=n(da,"In addition, the authors have further pre-trained TAPAS to recognize "),Ce=r(da,"STRONG",{});var ek=i(Ce);R=n(ek,"table entailment"),ek.forEach(s),Ke=n(da,", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),qe=r(da,"A",{href:!0,rel:!0});var sk=i(qe);Ee=n(sk,"TabFact"),sk.forEach(s),Ye=n(da,", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),fa=r(da,"A",{href:!0,rel:!0});var tk=i(fa);dh=n(tk,"Understanding tables with intermediate pre-training"),tk.forEach(s),ch=n(da," by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),da.forEach(s),od=p(t),At=r(t,"IMG",{src:!0,alt:!0,width:!0}),rd=p(t),$t=r(t,"SMALL",{});var hc=i($t);hh=n(hc,"TAPAS architecture. Taken from the "),bo=r(hc,"A",{href:!0});var ak=i(bo);uh=n(ak,"original blog post"),ak.forEach(s),mh=n(hc,"."),hc.forEach(s),id=p(t),_s=r(t,"P",{});var ca=i(_s);gh=n(ca,"This model was contributed by "),_a=r(ca,"A",{href:!0,rel:!0});var nk=i(_a);fh=n(nk,"nielsr"),nk.forEach(s),_h=n(ca,". The Tensorflow version of this model was contributed by "),Ta=r(ca,"A",{href:!0,rel:!0});var ok=i(Ta);Th=n(ok,"kamalkraj"),ok.forEach(s),bh=n(ca,". The original code can be found "),ba=r(ca,"A",{href:!0,rel:!0});var rk=i(ba);vh=n(rk,"here"),rk.forEach(s),wh=n(ca,"."),ca.forEach(s),ld=p(t),vo=r(t,"P",{});var ik=i(vo);yh=n(ik,"Tips:"),ik.forEach(s),pd=p(t),Ts=r(t,"UL",{});var ha=i(Ts);Me=r(ha,"LI",{});var ds=i(Me);kh=n(ds,"TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),Rr=r(ds,"CODE",{});var lk=i(Rr);jh=n(lk,"reset_position_index_per_cell"),lk.forEach(s),qh=n(ds," parameter of "),wo=r(ds,"A",{href:!0});var pk=i(wo);Eh=n(pk,"TapasConfig"),pk.forEach(s),Fh=n(ds,", which is set to "),Vr=r(ds,"CODE",{});var dk=i(Vr);Ah=n(dk,"True"),dk.forEach(s),$h=n(ds," by default. The default versions of the models available on the "),va=r(ds,"A",{href:!0,rel:!0});var ck=i(va);zh=n(ck,"hub"),ck.forEach(s),xh=n(ds," all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),Kr=r(ds,"CODE",{});var hk=i(Kr);Ch=n(hk,'revision="no_reset"'),hk.forEach(s),Mh=n(ds," when calling the "),Yr=r(ds,"CODE",{});var uk=i(Yr);Ph=n(uk,"from_pretrained()"),uk.forEach(s),Sh=n(ds," method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),ds.forEach(s),Dh=p(ha),Je=r(ha,"LI",{});var vs=i(Je);Nh=n(vs,"TAPAS is based on BERT, so "),Jr=r(vs,"CODE",{});var mk=i(Jr);Lh=n(mk,"TAPAS-base"),mk.forEach(s),Qh=n(vs," for example corresponds to a "),Xr=r(vs,"CODE",{});var gk=i(Xr);Oh=n(gk,"BERT-base"),gk.forEach(s),Ih=n(vs," architecture. Of course, "),Zr=r(vs,"CODE",{});var fk=i(Zr);Wh=n(fk,"TAPAS-large"),fk.forEach(s),Uh=n(vs," will result in the best performance (the results reported in the paper are from "),ei=r(vs,"CODE",{});var _k=i(ei);Hh=n(_k,"TAPAS-large"),_k.forEach(s),Bh=n(vs,"). Results of the various sized models are shown on the "),wa=r(vs,"A",{href:!0,rel:!0});var Tk=i(wa);Gh=n(Tk,"original Github repository"),Tk.forEach(s),Rh=n(vs,"."),vs.forEach(s),Vh=p(ha),Vs=r(ha,"LI",{});var kr=i(Vs);Kh=n(kr,"TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),si=r(kr,"CODE",{});var bk=i(si);Yh=n(bk,"prev_labels"),bk.forEach(s),Jh=n(kr," token type ids can be overwritten by the predicted "),ti=r(kr,"CODE",{});var vk=i(ti);Xh=n(vk,"labels"),vk.forEach(s),Zh=n(kr," of the model to the previous question. See \u201CUsage\u201D section for more info."),kr.forEach(s),eu=p(ha),ai=r(ha,"LI",{});var wk=i(ai);su=n(wk,"TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),wk.forEach(s),ha.forEach(s),dd=p(t),Ks=r(t,"H2",{class:!0});var uc=i(Ks);zt=r(uc,"A",{id:!0,class:!0,href:!0});var yk=i(zt);ni=r(yk,"SPAN",{});var kk=i(ni);v(ya.$$.fragment,kk),kk.forEach(s),yk.forEach(s),tu=p(uc),oi=r(uc,"SPAN",{});var jk=i(oi);au=n(jk,"Usage: fine-tuning"),jk.forEach(s),uc.forEach(s),cd=p(t),xt=r(t,"P",{});var mc=i(xt);nu=n(mc,"Here we explain how you can fine-tune "),yo=r(mc,"A",{href:!0});var qk=i(yo);ou=n(qk,"TapasForQuestionAnswering"),qk.forEach(s),ru=n(mc," on your own dataset."),mc.forEach(s),hd=p(t),ko=r(t,"P",{});var Ek=i(ko);ri=r(Ek,"STRONG",{});var Fk=i(ri);iu=n(Fk,"STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),Fk.forEach(s),Ek.forEach(s),ud=p(t),Ct=r(t,"P",{});var gc=i(Ct);lu=n(gc,"Basically, there are 3 different ways in which one can fine-tune "),jo=r(gc,"A",{href:!0});var Ak=i(jo);pu=n(Ak,"TapasForQuestionAnswering"),Ak.forEach(s),du=n(gc,", corresponding to the different datasets on which Tapas was fine-tuned:"),gc.forEach(s),md=p(t),zs=r(t,"OL",{});var jr=i(zs);ii=r(jr,"LI",{});var $k=i(ii);cu=n($k,"SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),$k.forEach(s),hu=p(jr),ka=r(jr,"LI",{});var fc=i(ka);uu=n(fc,"WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),li=r(fc,"STRONG",{});var zk=i(li);mu=n(zk,"weak supervision"),zk.forEach(s),gu=n(fc,", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),fc.forEach(s),fu=p(jr),ja=r(jr,"LI",{});var _c=i(ja);_u=n(_c,"WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),pi=r(_c,"STRONG",{});var xk=i(pi);Tu=n(xk,"strong supervision"),xk.forEach(s),bu=n(_c,". Here, learning the appropriate aggregation operator is much easier."),_c.forEach(s),jr.forEach(s),gd=p(t),qo=r(t,"P",{});var Ck=i(qo);vu=n(Ck,"To summarize:"),Ck.forEach(s),fd=p(t),Mt=r(t,"TABLE",{});var Tc=i(Mt);di=r(Tc,"THEAD",{});var Mk=i(di);Ys=r(Mk,"TR",{});var qr=i(Ys);ci=r(qr,"TH",{});var Pk=i(ci);hi=r(Pk,"STRONG",{});var Sk=i(hi);wu=n(Sk,"Task"),Sk.forEach(s),Pk.forEach(s),yu=p(qr),ui=r(qr,"TH",{});var Dk=i(ui);mi=r(Dk,"STRONG",{});var Nk=i(mi);ku=n(Nk,"Example dataset"),Nk.forEach(s),Dk.forEach(s),ju=p(qr),gi=r(qr,"TH",{});var Lk=i(gi);fi=r(Lk,"STRONG",{});var Qk=i(fi);qu=n(Qk,"Description"),Qk.forEach(s),Lk.forEach(s),qr.forEach(s),Mk.forEach(s),Eu=p(Tc),Js=r(Tc,"TBODY",{});var Er=i(Js);Xs=r(Er,"TR",{});var Fr=i(Xs);_i=r(Fr,"TD",{});var Ok=i(_i);Fu=n(Ok,"Conversational"),Ok.forEach(s),Au=p(Fr),Ti=r(Fr,"TD",{});var Ik=i(Ti);$u=n(Ik,"SQA"),Ik.forEach(s),zu=p(Fr),bi=r(Fr,"TD",{});var Wk=i(bi);xu=n(Wk,"Conversational, only cell selection questions"),Wk.forEach(s),Fr.forEach(s),Cu=p(Er),Zs=r(Er,"TR",{});var Ar=i(Zs);vi=r(Ar,"TD",{});var Uk=i(vi);Mu=n(Uk,"Weak supervision for aggregation"),Uk.forEach(s),Pu=p(Ar),wi=r(Ar,"TD",{});var Hk=i(wi);Su=n(Hk,"WTQ"),Hk.forEach(s),Du=p(Ar),yi=r(Ar,"TD",{});var Bk=i(yi);Nu=n(Bk,"Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Bk.forEach(s),Ar.forEach(s),Lu=p(Er),et=r(Er,"TR",{});var $r=i(et);ki=r($r,"TD",{});var Gk=i(ki);Qu=n(Gk,"Strong supervision for aggregation"),Gk.forEach(s),Ou=p($r),ji=r($r,"TD",{});var Rk=i(ji);Iu=n(Rk,"WikiSQL-supervised"),Rk.forEach(s),Wu=p($r),qi=r($r,"TD",{});var Vk=i(qi);Uu=n(Vk,"Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),Vk.forEach(s),$r.forEach(s),Er.forEach(s),Tc.forEach(s),_d=p(t),xs=r(t,"P",{});var zr=i(xs);Hu=n(zr,`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),qa=r(zr,"A",{href:!0,rel:!0});var Kk=i(qa);Bu=n(Kk,"torch-scatter"),Kk.forEach(s),Gu=n(zr," dependency for your environment in case you\u2019re using PyTorch, or the "),Ea=r(zr,"A",{href:!0,rel:!0});var Yk=i(Ea);Ru=n(Yk,"tensorflow_probability"),Yk.forEach(s),Vu=n(zr,`
dependency in case you\u2019re using Tensorflow:`),zr.forEach(s),Td=p(t),v(Fa.$$.fragment,t),bd=p(t),Cs=r(t,"P",{});var xr=i(Cs);Ku=n(xr,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),Eo=r(xr,"A",{href:!0});var Jk=i(Eo);Yu=n(Jk,"TapasConfig"),Jk.forEach(s),Ju=n(xr,", and then create a "),Fo=r(xr,"A",{href:!0});var Xk=i(Fo);Xu=n(Xk,"TapasForQuestionAnswering"),Xk.forEach(s),Zu=n(xr," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),xr.forEach(s),vd=p(t),v(Aa.$$.fragment,t),wd=p(t),Pt=r(t,"P",{});var bc=i(Pt);em=n(bc,"What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),$a=r(bc,"A",{href:!0,rel:!0});var Zk=i($a);sm=n(Zk,"here"),Zk.forEach(s),tm=n(bc," for more info."),bc.forEach(s),yd=p(t),St=r(t,"P",{});var vc=i(St);am=n(vc,"For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),za=r(vc,"A",{href:!0,rel:!0});var e1=i(za);nm=n(e1,"here"),e1.forEach(s),om=n(vc,"."),vc.forEach(s),kd=p(t),Ao=r(t,"P",{});var s1=i(Ao);Ei=r(s1,"STRONG",{});var t1=i(Ei);rm=n(t1,"STEP 2: Prepare your data in the SQA format"),t1.forEach(s),s1.forEach(s),jd=p(t),Dt=r(t,"P",{});var wc=i(Dt);im=n(wc,"Second, no matter what you picked above, you should prepare your dataset in the "),xa=r(wc,"A",{href:!0,rel:!0});var a1=i(xa);lm=n(a1,"SQA"),a1.forEach(s),pm=n(wc," format. This format is a TSV/CSV file with the following columns:"),wc.forEach(s),qd=p(t),ie=r(t,"UL",{});var ze=i(ie);$o=r(ze,"LI",{});var Dy=i($o);Fi=r(Dy,"CODE",{});var n1=i(Fi);dm=n(n1,"id"),n1.forEach(s),cm=n(Dy,": optional, id of the table-question pair, for bookkeeping purposes."),Dy.forEach(s),hm=p(ze),zo=r(ze,"LI",{});var Ny=i(zo);Ai=r(Ny,"CODE",{});var o1=i(Ai);um=n(o1,"annotator"),o1.forEach(s),mm=n(Ny,": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),Ny.forEach(s),gm=p(ze),xo=r(ze,"LI",{});var Ly=i(xo);$i=r(Ly,"CODE",{});var r1=i($i);fm=n(r1,"position"),r1.forEach(s),_m=n(Ly,": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),Ly.forEach(s),Tm=p(ze),Co=r(ze,"LI",{});var Qy=i(Co);zi=r(Qy,"CODE",{});var i1=i(zi);bm=n(i1,"question"),i1.forEach(s),vm=n(Qy,": string"),Qy.forEach(s),wm=p(ze),Mo=r(ze,"LI",{});var Oy=i(Mo);xi=r(Oy,"CODE",{});var l1=i(xi);ym=n(l1,"table_file"),l1.forEach(s),km=n(Oy,": string, name of a csv file containing the tabular data"),Oy.forEach(s),jm=p(ze),Po=r(ze,"LI",{});var Iy=i(Po);Ci=r(Iy,"CODE",{});var p1=i(Ci);qm=n(p1,"answer_coordinates"),p1.forEach(s),Em=n(Iy,": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),Iy.forEach(s),Fm=p(ze),So=r(ze,"LI",{});var Wy=i(So);Mi=r(Wy,"CODE",{});var d1=i(Mi);Am=n(d1,"answer_text"),d1.forEach(s),$m=n(Wy,": list of one or more strings (each string being a cell value that is part of the answer)"),Wy.forEach(s),zm=p(ze),Do=r(ze,"LI",{});var Uy=i(Do);Pi=r(Uy,"CODE",{});var c1=i(Pi);xm=n(c1,"aggregation_label"),c1.forEach(s),Cm=n(Uy,": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),Uy.forEach(s),Mm=p(ze),No=r(ze,"LI",{});var Hy=i(No);Si=r(Hy,"CODE",{});var h1=i(Si);Pm=n(h1,"float_answer"),h1.forEach(s),Sm=n(Hy,": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),Hy.forEach(s),ze.forEach(s),Ed=p(t),We=r(t,"P",{});var ws=i(We);Dm=n(ws,"The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),Ca=r(ws,"A",{href:!0,rel:!0});var u1=i(Ca);Nm=n(u1,"here"),u1.forEach(s),Lm=n(ws,". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),Ma=r(ws,"A",{href:!0,rel:!0});var m1=i(Ma);Qm=n(m1,"here"),m1.forEach(s),Om=n(ws,". Interestingly, these conversion scripts are not perfect (the "),Di=r(ws,"CODE",{});var g1=i(Di);Im=n(g1,"answer_coordinates"),g1.forEach(s),Wm=n(ws," and "),Ni=r(ws,"CODE",{});var f1=i(Ni);Um=n(f1,"float_answer"),f1.forEach(s),Hm=n(ws," fields are populated based on the "),Li=r(ws,"CODE",{});var _1=i(Li);Bm=n(_1,"answer_text"),_1.forEach(s),Gm=n(ws,"), meaning that WTQ and WikiSQL results could actually be improved."),ws.forEach(s),Fd=p(t),Lo=r(t,"P",{});var T1=i(Lo);Qi=r(T1,"STRONG",{});var b1=i(Qi);Rm=n(b1,"STEP 3: Convert your data into PyTorch/TensorFlow tensors using TapasTokenizer"),b1.forEach(s),T1.forEach(s),Ad=p(t),$e=r(t,"P",{});var cs=i($e);Vm=n(cs,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),Qo=r(cs,"A",{href:!0});var v1=i(Qo);Km=n(v1,"TapasTokenizer"),v1.forEach(s),Ym=n(cs," to convert table-question pairs into "),Oi=r(cs,"CODE",{});var w1=i(Oi);Jm=n(w1,"input_ids"),w1.forEach(s),Xm=n(cs,", "),Ii=r(cs,"CODE",{});var y1=i(Ii);Zm=n(y1,"attention_mask"),y1.forEach(s),eg=n(cs,", "),Wi=r(cs,"CODE",{});var k1=i(Wi);sg=n(k1,"token_type_ids"),k1.forEach(s),tg=n(cs," and so on. Again, based on which of the three cases you picked above, "),Oo=r(cs,"A",{href:!0});var j1=i(Oo);ag=n(j1,"TapasForQuestionAnswering"),j1.forEach(s),ng=n(cs,"/"),Io=r(cs,"A",{href:!0});var q1=i(Io);og=n(q1,"TFTapasForQuestionAnswering"),q1.forEach(s),rg=n(cs,` requires different
inputs to be fine-tuned:`),cs.forEach(s),$d=p(t),Nt=r(t,"TABLE",{});var yc=i(Nt);Ui=r(yc,"THEAD",{});var E1=i(Ui);Pa=r(E1,"TR",{});var kc=i(Pa);Hi=r(kc,"TH",{});var F1=i(Hi);Bi=r(F1,"STRONG",{});var A1=i(Bi);ig=n(A1,"Task"),A1.forEach(s),F1.forEach(s),lg=p(kc),Gi=r(kc,"TH",{});var $1=i(Gi);Ri=r($1,"STRONG",{});var z1=i(Ri);pg=n(z1,"Required inputs"),z1.forEach(s),$1.forEach(s),kc.forEach(s),E1.forEach(s),dg=p(yc),st=r(yc,"TBODY",{});var Cr=i(st);Sa=r(Cr,"TR",{});var jc=i(Sa);Vi=r(jc,"TD",{});var x1=i(Vi);cg=n(x1,"Conversational"),x1.forEach(s),hg=p(jc),$s=r(jc,"TD",{});var ua=i($s);Ki=r(ua,"CODE",{});var C1=i(Ki);ug=n(C1,"input_ids"),C1.forEach(s),mg=n(ua,", "),Yi=r(ua,"CODE",{});var M1=i(Yi);gg=n(M1,"attention_mask"),M1.forEach(s),fg=n(ua,", "),Ji=r(ua,"CODE",{});var P1=i(Ji);_g=n(P1,"token_type_ids"),P1.forEach(s),Tg=n(ua,", "),Xi=r(ua,"CODE",{});var S1=i(Xi);bg=n(S1,"labels"),S1.forEach(s),ua.forEach(s),jc.forEach(s),vg=p(Cr),Da=r(Cr,"TR",{});var qc=i(Da);Zi=r(qc,"TD",{});var D1=i(Zi);wg=n(D1,"Weak supervision for aggregation"),D1.forEach(s),yg=p(qc),Pe=r(qc,"TD",{});var hs=i(Pe);el=r(hs,"CODE",{});var N1=i(el);kg=n(N1,"input_ids"),N1.forEach(s),jg=n(hs,", "),sl=r(hs,"CODE",{});var L1=i(sl);qg=n(L1,"attention_mask"),L1.forEach(s),Eg=n(hs,", "),tl=r(hs,"CODE",{});var Q1=i(tl);Fg=n(Q1,"token_type_ids"),Q1.forEach(s),Ag=n(hs,", "),al=r(hs,"CODE",{});var O1=i(al);$g=n(O1,"labels"),O1.forEach(s),zg=n(hs,", "),nl=r(hs,"CODE",{});var I1=i(nl);xg=n(I1,"numeric_values"),I1.forEach(s),Cg=n(hs,", "),ol=r(hs,"CODE",{});var W1=i(ol);Mg=n(W1,"numeric_values_scale"),W1.forEach(s),Pg=n(hs,", "),rl=r(hs,"CODE",{});var U1=i(rl);Sg=n(U1,"float_answer"),U1.forEach(s),hs.forEach(s),qc.forEach(s),Dg=p(Cr),Na=r(Cr,"TR",{});var Ec=i(Na);il=r(Ec,"TD",{});var H1=i(il);Ng=n(H1,"Strong supervision for aggregation"),H1.forEach(s),Lg=p(Ec),ms=r(Ec,"TD",{});var Ss=i(ms);ll=r(Ss,"CODE",{});var B1=i(ll);Qg=n(B1,"input ids"),B1.forEach(s),Og=n(Ss,", "),pl=r(Ss,"CODE",{});var G1=i(pl);Ig=n(G1,"attention mask"),G1.forEach(s),Wg=n(Ss,", "),dl=r(Ss,"CODE",{});var R1=i(dl);Ug=n(R1,"token type ids"),R1.forEach(s),Hg=n(Ss,", "),cl=r(Ss,"CODE",{});var V1=i(cl);Bg=n(V1,"labels"),V1.forEach(s),Gg=n(Ss,", "),hl=r(Ss,"CODE",{});var K1=i(hl);Rg=n(K1,"aggregation_labels"),K1.forEach(s),Ss.forEach(s),Ec.forEach(s),Cr.forEach(s),yc.forEach(s),zd=p(t),pe=r(t,"P",{});var Ie=i(pe);Wo=r(Ie,"A",{href:!0});var Y1=i(Wo);Vg=n(Y1,"TapasTokenizer"),Y1.forEach(s),Kg=n(Ie," creates the "),ul=r(Ie,"CODE",{});var J1=i(ul);Yg=n(J1,"labels"),J1.forEach(s),Jg=n(Ie,", "),ml=r(Ie,"CODE",{});var X1=i(ml);Xg=n(X1,"numeric_values"),X1.forEach(s),Zg=n(Ie," and "),gl=r(Ie,"CODE",{});var Z1=i(gl);ef=n(Z1,"numeric_values_scale"),Z1.forEach(s),sf=n(Ie," based on the "),fl=r(Ie,"CODE",{});var e2=i(fl);tf=n(e2,"answer_coordinates"),e2.forEach(s),af=n(Ie," and "),_l=r(Ie,"CODE",{});var s2=i(_l);nf=n(s2,"answer_text"),s2.forEach(s),of=n(Ie," columns of the TSV file. The "),Tl=r(Ie,"CODE",{});var t2=i(Tl);rf=n(t2,"float_answer"),t2.forEach(s),lf=n(Ie," and "),bl=r(Ie,"CODE",{});var a2=i(bl);pf=n(a2,"aggregation_labels"),a2.forEach(s),df=n(Ie," are already in the TSV file of step 2. Here\u2019s an example:"),Ie.forEach(s),xd=p(t),v(La.$$.fragment,t),Cd=p(t),bs=r(t,"P",{});var ma=i(bs);cf=n(ma,"Note that "),Uo=r(ma,"A",{href:!0});var n2=i(Uo);hf=n(n2,"TapasTokenizer"),n2.forEach(s),uf=n(ma," expects the data of the table to be "),vl=r(ma,"STRONG",{});var o2=i(vl);mf=n(o2,"text-only"),o2.forEach(s),gf=n(ma,". You can use "),wl=r(ma,"CODE",{});var r2=i(wl);ff=n(r2,".astype(str)"),r2.forEach(s),_f=n(ma,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),ma.forEach(s),Md=p(t),v(Qa.$$.fragment,t),Pd=p(t),X=r(t,"P",{});var ge=i(X);Tf=n(ge,"Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),yl=r(ge,"STRONG",{});var i2=i(yl);bf=n(i2,"not conversational"),i2.forEach(s),vf=n(ge,". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),kl=r(ge,"CODE",{});var l2=i(kl);wf=n(l2,"queries"),l2.forEach(s),yf=n(ge,", "),jl=r(ge,"CODE",{});var p2=i(jl);kf=n(p2,"answer_coordinates"),p2.forEach(s),jf=n(ge," and "),ql=r(ge,"CODE",{});var d2=i(ql);qf=n(d2,"answer_text"),d2.forEach(s),Ef=n(ge," per table (in the order of their "),El=r(ge,"CODE",{});var c2=i(El);Ff=n(c2,"position"),c2.forEach(s),Af=n(ge,`
index) and batch encode each table with its questions. This will make sure that the `),Fl=r(ge,"CODE",{});var h2=i(Fl);$f=n(h2,"prev_labels"),h2.forEach(s),zf=n(ge," token types (see docs of "),Ho=r(ge,"A",{href:!0});var u2=i(Ho);xf=n(u2,"TapasTokenizer"),u2.forEach(s),Cf=n(ge,") are set correctly. See "),Oa=r(ge,"A",{href:!0,rel:!0});var m2=i(Oa);Mf=n(m2,"this notebook"),m2.forEach(s),Pf=n(ge," for more info. See "),Ia=r(ge,"A",{href:!0,rel:!0});var g2=i(Ia);Sf=n(g2,"this notebook"),g2.forEach(s),Df=n(ge," for more info regarding using the TensorFlow model."),ge.forEach(s),Sd=p(t),Bo=r(t,"P",{});var f2=i(Bo);Al=r(f2,"STRONG",{});var _2=i(Al);Nf=n(_2,"STEP 4: Train (fine-tune) TapasForQuestionAnswering/TFTapasForQuestionAnswering"),_2.forEach(s),f2.forEach(s),Dd=p(t),Ms=r(t,"P",{});var Mr=i(Ms);Lf=n(Mr,"You can then fine-tune "),Go=r(Mr,"A",{href:!0});var T2=i(Go);Qf=n(T2,"TapasForQuestionAnswering"),T2.forEach(s),Of=n(Mr," or "),Ro=r(Mr,"A",{href:!0});var b2=i(Ro);If=n(b2,"TFTapasForQuestionAnswering"),b2.forEach(s),Wf=n(Mr," as follows (shown here for the weak supervision for aggregation case):"),Mr.forEach(s),Nd=p(t),v(Wa.$$.fragment,t),Ld=p(t),tt=r(t,"H2",{class:!0});var Fc=i(tt);Lt=r(Fc,"A",{id:!0,class:!0,href:!0});var v2=i(Lt);$l=r(v2,"SPAN",{});var w2=i($l);v(Ua.$$.fragment,w2),w2.forEach(s),v2.forEach(s),Uf=p(Fc),zl=r(Fc,"SPAN",{});var y2=i(zl);Hf=n(y2,"Usage: inference"),y2.forEach(s),Fc.forEach(s),Qd=p(t),me=r(t,"P",{});var He=i(me);Bf=n(He,"Here we explain how you can use "),Vo=r(He,"A",{href:!0});var k2=i(Vo);Gf=n(k2,"TapasForQuestionAnswering"),k2.forEach(s),Rf=n(He," or "),Ko=r(He,"A",{href:!0});var j2=i(Ko);Vf=n(j2,"TFTapasForQuestionAnswering"),j2.forEach(s),Kf=n(He," for inference (i.e. making predictions on new data). For inference, only "),xl=r(He,"CODE",{});var q2=i(xl);Yf=n(q2,"input_ids"),q2.forEach(s),Jf=n(He,", "),Cl=r(He,"CODE",{});var E2=i(Cl);Xf=n(E2,"attention_mask"),E2.forEach(s),Zf=n(He," and "),Ml=r(He,"CODE",{});var F2=i(Ml);e_=n(F2,"token_type_ids"),F2.forEach(s),s_=n(He," (which you can obtain using "),Yo=r(He,"A",{href:!0});var A2=i(Yo);t_=n(A2,"TapasTokenizer"),A2.forEach(s),a_=n(He,") have to be provided to the model to obtain the logits. Next, you can use the handy "),Pl=r(He,"CODE",{});var $2=i(Pl);n_=n($2,"convert_logits_to_predictions"),$2.forEach(s),o_=n(He," method to convert these into predicted coordinates and optional aggregation indices."),He.forEach(s),Od=p(t),Qt=r(t,"P",{});var Ac=i(Qt);r_=n(Ac,"However, note that inference is "),Sl=r(Ac,"STRONG",{});var z2=i(Sl);i_=n(z2,"different"),z2.forEach(s),l_=n(Ac," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),Ac.forEach(s),Id=p(t),v(Ha.$$.fragment,t),Wd=p(t),Ue=r(t,"P",{});var ys=i(Ue);p_=n(ys,"In case of a conversational set-up, then each table-question pair must be provided "),Dl=r(ys,"STRONG",{});var x2=i(Dl);d_=n(x2,"sequentially"),x2.forEach(s),c_=n(ys," to the model, such that the "),Nl=r(ys,"CODE",{});var C2=i(Nl);h_=n(C2,"prev_labels"),C2.forEach(s),u_=n(ys," token types can be overwritten by the predicted "),Ll=r(ys,"CODE",{});var M2=i(Ll);m_=n(M2,"labels"),M2.forEach(s),g_=n(ys," of the previous table-question pair. Again, more info can be found in "),Ba=r(ys,"A",{href:!0,rel:!0});var P2=i(Ba);f_=n(P2,"this notebook"),P2.forEach(s),__=n(ys," (for PyTorch) and "),Ga=r(ys,"A",{href:!0,rel:!0});var S2=i(Ga);T_=n(S2,"this notebook"),S2.forEach(s),b_=n(ys," (for TensorFlow)."),ys.forEach(s),Ud=p(t),at=r(t,"H2",{class:!0});var $c=i(at);Ot=r($c,"A",{id:!0,class:!0,href:!0});var D2=i(Ot);Ql=r(D2,"SPAN",{});var N2=i(Ql);v(Ra.$$.fragment,N2),N2.forEach(s),D2.forEach(s),v_=p($c),Ol=r($c,"SPAN",{});var L2=i(Ol);w_=n(L2,"TAPAS specific outputs"),L2.forEach(s),$c.forEach(s),Hd=p(t),nt=r(t,"DIV",{class:!0});var zc=i(nt);v(Va.$$.fragment,zc),y_=p(zc),Ka=r(zc,"P",{});var xc=i(Ka);k_=n(xc,"Output type of "),Jo=r(xc,"A",{href:!0});var Q2=i(Jo);j_=n(Q2,"TapasForQuestionAnswering"),Q2.forEach(s),q_=n(xc,"."),xc.forEach(s),zc.forEach(s),Bd=p(t),ot=r(t,"H2",{class:!0});var Cc=i(ot);It=r(Cc,"A",{id:!0,class:!0,href:!0});var O2=i(It);Il=r(O2,"SPAN",{});var I2=i(Il);v(Ya.$$.fragment,I2),I2.forEach(s),O2.forEach(s),E_=p(Cc),Wl=r(Cc,"SPAN",{});var W2=i(Wl);F_=n(W2,"TapasConfig"),W2.forEach(s),Cc.forEach(s),Gd=p(t),Xe=r(t,"DIV",{class:!0});var Ds=i(Xe);v(Ja.$$.fragment,Ds),A_=p(Ds),gs=r(Ds,"P",{});var Ns=i(gs);$_=n(Ns,"This is the configuration class to store the configuration of a "),Xo=r(Ns,"A",{href:!0});var U2=i(Xo);z_=n(U2,"TapasModel"),U2.forEach(s),x_=n(Ns,`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS `),Ul=r(Ns,"EM",{});var H2=i(Ul);C_=n(H2,"tapas-base-finetuned-sqa"),H2.forEach(s),M_=n(Ns,` architecture.
Configuration objects inherit from `),Hl=r(Ns,"CODE",{});var B2=i(Hl);P_=n(B2,"PreTrainedConfig"),B2.forEach(s),S_=n(Ns,` and can be used to control the model outputs. Read the
documentation from `),Zo=r(Ns,"A",{href:!0});var G2=i(Zo);D_=n(G2,"PretrainedConfig"),G2.forEach(s),N_=n(Ns," for more information."),Ns.forEach(s),L_=p(Ds),Xa=r(Ds,"P",{});var Mc=i(Xa);Q_=n(Mc,`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),Za=r(Mc,"A",{href:!0,rel:!0});var R2=i(Za);O_=n(R2,"https://github.com/google-research/tapas/tree/master"),R2.forEach(s),I_=n(Mc,"."),Mc.forEach(s),W_=p(Ds),Bl=r(Ds,"P",{});var V2=i(Bl);U_=n(V2,"Example:"),V2.forEach(s),H_=p(Ds),v(en.$$.fragment,Ds),Ds.forEach(s),Rd=p(t),rt=r(t,"H2",{class:!0});var Pc=i(rt);Wt=r(Pc,"A",{id:!0,class:!0,href:!0});var K2=i(Wt);Gl=r(K2,"SPAN",{});var Y2=i(Gl);v(sn.$$.fragment,Y2),Y2.forEach(s),K2.forEach(s),B_=p(Pc),Rl=r(Pc,"SPAN",{});var J2=i(Rl);G_=n(J2,"TapasTokenizer"),J2.forEach(s),Pc.forEach(s),Vd=p(t),de=r(t,"DIV",{class:!0});var Be=i(de);v(tn.$$.fragment,Be),R_=p(Be),Vl=r(Be,"P",{});var X2=i(Vl);V_=n(X2,`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),X2.forEach(s),K_=p(Be),ne=r(Be,"P",{});var fe=i(ne);Y_=n(fe,"This tokenizer inherits from "),er=r(fe,"A",{href:!0});var Z2=i(er);J_=n(Z2,"PreTrainedTokenizer"),Z2.forEach(s),X_=n(fe,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),sr=r(fe,"A",{href:!0});var ej=i(sr);Z_=n(ej,"TapasTokenizer"),ej.forEach(s),eT=n(fe,` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Kl=r(fe,"CODE",{});var sj=i(Kl);sT=n(sj,"segment_ids"),sj.forEach(s),tT=n(fe,`,
`),Yl=r(fe,"CODE",{});var tj=i(Yl);aT=n(tj,"column_ids"),tj.forEach(s),nT=n(fe,", "),Jl=r(fe,"CODE",{});var aj=i(Jl);oT=n(aj,"row_ids"),aj.forEach(s),rT=n(fe,", "),Xl=r(fe,"CODE",{});var nj=i(Xl);iT=n(nj,"prev_labels"),nj.forEach(s),lT=n(fe,", "),Zl=r(fe,"CODE",{});var oj=i(Zl);pT=n(oj,"column_ranks"),oj.forEach(s),dT=n(fe,", "),ep=r(fe,"CODE",{});var rj=i(ep);cT=n(rj,"inv_column_ranks"),rj.forEach(s),hT=n(fe," and "),sp=r(fe,"CODE",{});var ij=i(sp);uT=n(ij,"numeric_relations"),ij.forEach(s),mT=n(fe,":"),fe.forEach(s),gT=p(Be),Se=r(Be,"UL",{});var us=i(Se);tp=r(us,"LI",{});var lj=i(tp);fT=n(lj,`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),lj.forEach(s),_T=p(us),ap=r(us,"LI",{});var pj=i(ap);TT=n(pj,`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),pj.forEach(s),bT=p(us),np=r(us,"LI",{});var dj=i(np);vT=n(dj,`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),dj.forEach(s),wT=p(us),op=r(us,"LI",{});var cj=i(op);yT=n(cj,`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),cj.forEach(s),kT=p(us),rp=r(us,"LI",{});var hj=i(rp);jT=n(hj,`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),hj.forEach(s),qT=p(us),ip=r(us,"LI",{});var uj=i(ip);ET=n(uj,`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),uj.forEach(s),FT=p(us),lp=r(us,"LI",{});var mj=i(lp);AT=n(mj,`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),mj.forEach(s),us.forEach(s),$T=p(Be),tr=r(Be,"P",{});var By=i(tr);ar=r(By,"A",{href:!0});var gj=i(ar);zT=n(gj,"TapasTokenizer"),gj.forEach(s),xT=n(By,` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),By.forEach(s),CT=p(Be),Ut=r(Be,"DIV",{class:!0});var Sc=i(Ut);v(an.$$.fragment,Sc),MT=p(Sc),pp=r(Sc,"P",{});var fj=i(pp);PT=n(fj,"Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),fj.forEach(s),Sc.forEach(s),ST=p(Be),Ps=r(Be,"DIV",{class:!0});var Pr=i(Ps);v(nn.$$.fragment,Pr),DT=p(Pr),on=r(Pr,"P",{});var Dc=i(on);NT=n(Dc,"Converts logits of "),nr=r(Dc,"A",{href:!0});var _j=i(nr);LT=n(_j,"TapasForQuestionAnswering"),_j.forEach(s),QT=n(Dc,` to actual predicted answer coordinates and optional
aggregation indices.`),Dc.forEach(s),OT=p(Pr),rn=r(Pr,"P",{});var Nc=i(rn);IT=n(Nc,`The original implementation, on which this function is based, can be found
`),ln=r(Nc,"A",{href:!0,rel:!0});var Tj=i(ln);WT=n(Tj,"here"),Tj.forEach(s),UT=n(Nc,"."),Nc.forEach(s),Pr.forEach(s),HT=p(Be),or=r(Be,"DIV",{class:!0});var bj=i(or);v(pn.$$.fragment,bj),bj.forEach(s),Be.forEach(s),Kd=p(t),it=r(t,"H2",{class:!0});var Lc=i(it);Ht=r(Lc,"A",{id:!0,class:!0,href:!0});var vj=i(Ht);dp=r(vj,"SPAN",{});var wj=i(dp);v(dn.$$.fragment,wj),wj.forEach(s),vj.forEach(s),BT=p(Lc),cp=r(Lc,"SPAN",{});var yj=i(cp);GT=n(yj,"TapasModel"),yj.forEach(s),Lc.forEach(s),Yd=p(t),De=r(t,"DIV",{class:!0});var ks=i(De);v(cn.$$.fragment,ks),RT=p(ks),hn=r(ks,"P",{});var Qc=i(hn);VT=n(Qc,`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),rr=r(Qc,"A",{href:!0});var kj=i(rr);KT=n(kj,"PreTrainedModel"),kj.forEach(s),YT=n(Qc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qc.forEach(s),JT=p(ks),un=r(ks,"P",{});var Oc=i(un);XT=n(Oc,"This model is also a PyTorch "),mn=r(Oc,"A",{href:!0,rel:!0});var jj=i(mn);ZT=n(jj,"torch.nn.Module"),jj.forEach(s),eb=n(Oc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Oc.forEach(s),sb=p(ks),gn=r(ks,"P",{});var Ic=i(gn);tb=n(Ic,"This class is a small change compared to "),ir=r(Ic,"A",{href:!0});var qj=i(ir);ab=n(qj,"BertModel"),qj.forEach(s),nb=n(Ic,", taking into account the additional token type ids."),Ic.forEach(s),ob=p(ks),fn=r(ks,"P",{});var Wc=i(fn);rb=n(Wc,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),_n=r(Wc,"A",{href:!0,rel:!0});var Ej=i(_n);ib=n(Ej,`Attention is
all you need`),Ej.forEach(s),lb=n(Wc,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Wc.forEach(s),pb=p(ks),ts=r(ks,"DIV",{class:!0});var Ls=i(ts);v(Tn.$$.fragment,Ls),db=p(Ls),lt=r(Ls,"P",{});var Sr=i(lt);cb=n(Sr,"The "),lr=r(Sr,"A",{href:!0});var Fj=i(lr);hb=n(Fj,"TapasModel"),Fj.forEach(s),ub=n(Sr," forward method, overrides the "),hp=r(Sr,"CODE",{});var Aj=i(hp);mb=n(Aj,"__call__"),Aj.forEach(s),gb=n(Sr," special method."),Sr.forEach(s),fb=p(Ls),v(Bt.$$.fragment,Ls),_b=p(Ls),up=r(Ls,"P",{});var $j=i(up);Tb=n($j,"Examples:"),$j.forEach(s),bb=p(Ls),v(bn.$$.fragment,Ls),Ls.forEach(s),ks.forEach(s),Jd=p(t),pt=r(t,"H2",{class:!0});var Uc=i(pt);Gt=r(Uc,"A",{id:!0,class:!0,href:!0});var zj=i(Gt);mp=r(zj,"SPAN",{});var xj=i(mp);v(vn.$$.fragment,xj),xj.forEach(s),zj.forEach(s),vb=p(Uc),gp=r(Uc,"SPAN",{});var Cj=i(gp);wb=n(Cj,"TapasForMaskedLM"),Cj.forEach(s),Uc.forEach(s),Xd=p(t),fs=r(t,"DIV",{class:!0});var ga=i(fs);v(wn.$$.fragment,ga),yb=p(ga),dt=r(ga,"P",{});var Dr=i(dt);kb=n(Dr,"Tapas Model with a "),fp=r(Dr,"CODE",{});var Mj=i(fp);jb=n(Mj,"language modeling"),Mj.forEach(s),qb=n(Dr,` head on top.
This model inherits from `),pr=r(Dr,"A",{href:!0});var Pj=i(pr);Eb=n(Pj,"PreTrainedModel"),Pj.forEach(s),Fb=n(Dr,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dr.forEach(s),Ab=p(ga),yn=r(ga,"P",{});var Hc=i(yn);$b=n(Hc,"This model is also a PyTorch "),kn=r(Hc,"A",{href:!0,rel:!0});var Sj=i(kn);zb=n(Sj,"torch.nn.Module"),Sj.forEach(s),xb=n(Hc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hc.forEach(s),Cb=p(ga),as=r(ga,"DIV",{class:!0});var Qs=i(as);v(jn.$$.fragment,Qs),Mb=p(Qs),ct=r(Qs,"P",{});var Nr=i(ct);Pb=n(Nr,"The "),dr=r(Nr,"A",{href:!0});var Dj=i(dr);Sb=n(Dj,"TapasForMaskedLM"),Dj.forEach(s),Db=n(Nr," forward method, overrides the "),_p=r(Nr,"CODE",{});var Nj=i(_p);Nb=n(Nj,"__call__"),Nj.forEach(s),Lb=n(Nr," special method."),Nr.forEach(s),Qb=p(Qs),v(Rt.$$.fragment,Qs),Ob=p(Qs),Tp=r(Qs,"P",{});var Lj=i(Tp);Ib=n(Lj,"Examples:"),Lj.forEach(s),Wb=p(Qs),v(qn.$$.fragment,Qs),Qs.forEach(s),ga.forEach(s),Zd=p(t),ht=r(t,"H2",{class:!0});var Bc=i(ht);Vt=r(Bc,"A",{id:!0,class:!0,href:!0});var Qj=i(Vt);bp=r(Qj,"SPAN",{});var Oj=i(bp);v(En.$$.fragment,Oj),Oj.forEach(s),Qj.forEach(s),Ub=p(Bc),vp=r(Bc,"SPAN",{});var Ij=i(vp);Hb=n(Ij,"TapasForSequenceClassification"),Ij.forEach(s),Bc.forEach(s),ec=p(t),Ze=r(t,"DIV",{class:!0});var Os=i(Ze);v(Fn.$$.fragment,Os),Bb=p(Os),wp=r(Os,"P",{});var Wj=i(wp);Gb=n(Wj,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Wj.forEach(s),Rb=p(Os),An=r(Os,"P",{});var Gc=i(An);Vb=n(Gc,"This model inherits from "),cr=r(Gc,"A",{href:!0});var Uj=i(cr);Kb=n(Uj,"PreTrainedModel"),Uj.forEach(s),Yb=n(Gc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gc.forEach(s),Jb=p(Os),$n=r(Os,"P",{});var Rc=i($n);Xb=n(Rc,"This model is also a PyTorch "),zn=r(Rc,"A",{href:!0,rel:!0});var Hj=i(zn);Zb=n(Hj,"torch.nn.Module"),Hj.forEach(s),ev=n(Rc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rc.forEach(s),sv=p(Os),ns=r(Os,"DIV",{class:!0});var Is=i(ns);v(xn.$$.fragment,Is),tv=p(Is),ut=r(Is,"P",{});var Lr=i(ut);av=n(Lr,"The "),hr=r(Lr,"A",{href:!0});var Bj=i(hr);nv=n(Bj,"TapasForSequenceClassification"),Bj.forEach(s),ov=n(Lr," forward method, overrides the "),yp=r(Lr,"CODE",{});var Gj=i(yp);rv=n(Gj,"__call__"),Gj.forEach(s),iv=n(Lr," special method."),Lr.forEach(s),lv=p(Is),v(Kt.$$.fragment,Is),pv=p(Is),kp=r(Is,"P",{});var Rj=i(kp);dv=n(Rj,"Examples:"),Rj.forEach(s),cv=p(Is),v(Cn.$$.fragment,Is),Is.forEach(s),Os.forEach(s),sc=p(t),mt=r(t,"H2",{class:!0});var Vc=i(mt);Yt=r(Vc,"A",{id:!0,class:!0,href:!0});var Vj=i(Yt);jp=r(Vj,"SPAN",{});var Kj=i(jp);v(Mn.$$.fragment,Kj),Kj.forEach(s),Vj.forEach(s),hv=p(Vc),qp=r(Vc,"SPAN",{});var Yj=i(qp);uv=n(Yj,"TapasForQuestionAnswering"),Yj.forEach(s),Vc.forEach(s),tc=p(t),es=r(t,"DIV",{class:!0});var Ws=i(es);v(Pn.$$.fragment,Ws),mv=p(Ws),gt=r(Ws,"P",{});var Qr=i(gt);gv=n(Qr,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Ep=r(Qr,"CODE",{});var Jj=i(Ep);fv=n(Jj,"logits"),Jj.forEach(s),_v=n(Qr," and optional "),Fp=r(Qr,"CODE",{});var Xj=i(Fp);Tv=n(Xj,"logits_aggregation"),Xj.forEach(s),bv=n(Qr,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Qr.forEach(s),vv=p(Ws),Sn=r(Ws,"P",{});var Kc=i(Sn);wv=n(Kc,"This model inherits from "),ur=r(Kc,"A",{href:!0});var Zj=i(ur);yv=n(Zj,"PreTrainedModel"),Zj.forEach(s),kv=n(Kc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kc.forEach(s),jv=p(Ws),Dn=r(Ws,"P",{});var Yc=i(Dn);qv=n(Yc,"This model is also a PyTorch "),Nn=r(Yc,"A",{href:!0,rel:!0});var eq=i(Nn);Ev=n(eq,"torch.nn.Module"),eq.forEach(s),Fv=n(Yc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yc.forEach(s),Av=p(Ws),os=r(Ws,"DIV",{class:!0});var Us=i(os);v(Ln.$$.fragment,Us),$v=p(Us),ft=r(Us,"P",{});var Or=i(ft);zv=n(Or,"The "),mr=r(Or,"A",{href:!0});var sq=i(mr);xv=n(sq,"TapasForQuestionAnswering"),sq.forEach(s),Cv=n(Or," forward method, overrides the "),Ap=r(Or,"CODE",{});var tq=i(Ap);Mv=n(tq,"__call__"),tq.forEach(s),Pv=n(Or," special method."),Or.forEach(s),Sv=p(Us),v(Jt.$$.fragment,Us),Dv=p(Us),$p=r(Us,"P",{});var aq=i($p);Nv=n(aq,"Examples:"),aq.forEach(s),Lv=p(Us),v(Qn.$$.fragment,Us),Us.forEach(s),Ws.forEach(s),ac=p(t),_t=r(t,"H2",{class:!0});var Jc=i(_t);Xt=r(Jc,"A",{id:!0,class:!0,href:!0});var nq=i(Xt);zp=r(nq,"SPAN",{});var oq=i(zp);v(On.$$.fragment,oq),oq.forEach(s),nq.forEach(s),Qv=p(Jc),xp=r(Jc,"SPAN",{});var rq=i(xp);Ov=n(rq,"TFTapasModel"),rq.forEach(s),Jc.forEach(s),nc=p(t),Ne=r(t,"DIV",{class:!0});var js=i(Ne);v(In.$$.fragment,js),Iv=p(js),Cp=r(js,"P",{});var iq=i(Cp);Wv=n(iq,"The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),iq.forEach(s),Uv=p(js),Wn=r(js,"P",{});var Xc=i(Wn);Hv=n(Xc,"This model inherits from "),gr=r(Xc,"A",{href:!0});var lq=i(gr);Bv=n(lq,"TFPreTrainedModel"),lq.forEach(s),Gv=n(Xc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xc.forEach(s),Rv=p(js),Un=r(js,"P",{});var Zc=i(Un);Vv=n(Zc,"This model is also a "),Hn=r(Zc,"A",{href:!0,rel:!0});var pq=i(Hn);Kv=n(pq,"tf.keras.Model"),pq.forEach(s),Yv=n(Zc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zc.forEach(s),Jv=p(js),v(Zt.$$.fragment,js),Xv=p(js),rs=r(js,"DIV",{class:!0});var Hs=i(rs);v(Bn.$$.fragment,Hs),Zv=p(Hs),Tt=r(Hs,"P",{});var Ir=i(Tt);ew=n(Ir,"The "),fr=r(Ir,"A",{href:!0});var dq=i(fr);sw=n(dq,"TFTapasModel"),dq.forEach(s),tw=n(Ir," forward method, overrides the "),Mp=r(Ir,"CODE",{});var cq=i(Mp);aw=n(cq,"__call__"),cq.forEach(s),nw=n(Ir," special method."),Ir.forEach(s),ow=p(Hs),v(ea.$$.fragment,Hs),rw=p(Hs),Pp=r(Hs,"P",{});var hq=i(Pp);iw=n(hq,"Examples:"),hq.forEach(s),lw=p(Hs),v(Gn.$$.fragment,Hs),Hs.forEach(s),js.forEach(s),oc=p(t),bt=r(t,"H2",{class:!0});var eh=i(bt);sa=r(eh,"A",{id:!0,class:!0,href:!0});var uq=i(sa);Sp=r(uq,"SPAN",{});var mq=i(Sp);v(Rn.$$.fragment,mq),mq.forEach(s),uq.forEach(s),pw=p(eh),Dp=r(eh,"SPAN",{});var gq=i(Dp);dw=n(gq,"TFTapasForMaskedLM"),gq.forEach(s),eh.forEach(s),rc=p(t),Le=r(t,"DIV",{class:!0});var qs=i(Le);v(Vn.$$.fragment,qs),cw=p(qs),Kn=r(qs,"P",{});var sh=i(Kn);hw=n(sh,"Tapas Model with a "),Np=r(sh,"CODE",{});var fq=i(Np);uw=n(fq,"language modeling"),fq.forEach(s),mw=n(sh," head on top."),sh.forEach(s),gw=p(qs),Yn=r(qs,"P",{});var th=i(Yn);fw=n(th,"This model inherits from "),_r=r(th,"A",{href:!0});var _q=i(_r);_w=n(_q,"TFPreTrainedModel"),_q.forEach(s),Tw=n(th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),th.forEach(s),bw=p(qs),Jn=r(qs,"P",{});var ah=i(Jn);vw=n(ah,"This model is also a "),Xn=r(ah,"A",{href:!0,rel:!0});var Tq=i(Xn);ww=n(Tq,"tf.keras.Model"),Tq.forEach(s),yw=n(ah,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ah.forEach(s),kw=p(qs),v(ta.$$.fragment,qs),jw=p(qs),is=r(qs,"DIV",{class:!0});var Bs=i(is);v(Zn.$$.fragment,Bs),qw=p(Bs),vt=r(Bs,"P",{});var Wr=i(vt);Ew=n(Wr,"The "),Tr=r(Wr,"A",{href:!0});var bq=i(Tr);Fw=n(bq,"TFTapasForMaskedLM"),bq.forEach(s),Aw=n(Wr," forward method, overrides the "),Lp=r(Wr,"CODE",{});var vq=i(Lp);$w=n(vq,"__call__"),vq.forEach(s),zw=n(Wr," special method."),Wr.forEach(s),xw=p(Bs),v(aa.$$.fragment,Bs),Cw=p(Bs),Qp=r(Bs,"P",{});var wq=i(Qp);Mw=n(wq,"Examples:"),wq.forEach(s),Pw=p(Bs),v(eo.$$.fragment,Bs),Bs.forEach(s),qs.forEach(s),ic=p(t),wt=r(t,"H2",{class:!0});var nh=i(wt);na=r(nh,"A",{id:!0,class:!0,href:!0});var yq=i(na);Op=r(yq,"SPAN",{});var kq=i(Op);v(so.$$.fragment,kq),kq.forEach(s),yq.forEach(s),Sw=p(nh),Ip=r(nh,"SPAN",{});var jq=i(Ip);Dw=n(jq,"TFTapasForSequenceClassification"),jq.forEach(s),nh.forEach(s),lc=p(t),Qe=r(t,"DIV",{class:!0});var Es=i(Qe);v(to.$$.fragment,Es),Nw=p(Es),Wp=r(Es,"P",{});var qq=i(Wp);Lw=n(qq,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),qq.forEach(s),Qw=p(Es),ao=r(Es,"P",{});var oh=i(ao);Ow=n(oh,"This model inherits from "),br=r(oh,"A",{href:!0});var Eq=i(br);Iw=n(Eq,"TFPreTrainedModel"),Eq.forEach(s),Ww=n(oh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oh.forEach(s),Uw=p(Es),no=r(Es,"P",{});var rh=i(no);Hw=n(rh,"This model is also a "),oo=r(rh,"A",{href:!0,rel:!0});var Fq=i(oo);Bw=n(Fq,"tf.keras.Model"),Fq.forEach(s),Gw=n(rh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rh.forEach(s),Rw=p(Es),v(oa.$$.fragment,Es),Vw=p(Es),ls=r(Es,"DIV",{class:!0});var Gs=i(ls);v(ro.$$.fragment,Gs),Kw=p(Gs),yt=r(Gs,"P",{});var Ur=i(yt);Yw=n(Ur,"The "),vr=r(Ur,"A",{href:!0});var Aq=i(vr);Jw=n(Aq,"TFTapasForSequenceClassification"),Aq.forEach(s),Xw=n(Ur," forward method, overrides the "),Up=r(Ur,"CODE",{});var $q=i(Up);Zw=n($q,"__call__"),$q.forEach(s),ey=n(Ur," special method."),Ur.forEach(s),sy=p(Gs),v(ra.$$.fragment,Gs),ty=p(Gs),Hp=r(Gs,"P",{});var zq=i(Hp);ay=n(zq,"Examples:"),zq.forEach(s),ny=p(Gs),v(io.$$.fragment,Gs),Gs.forEach(s),Es.forEach(s),pc=p(t),kt=r(t,"H2",{class:!0});var ih=i(kt);ia=r(ih,"A",{id:!0,class:!0,href:!0});var xq=i(ia);Bp=r(xq,"SPAN",{});var Cq=i(Bp);v(lo.$$.fragment,Cq),Cq.forEach(s),xq.forEach(s),oy=p(ih),Gp=r(ih,"SPAN",{});var Mq=i(Gp);ry=n(Mq,"TFTapasForQuestionAnswering"),Mq.forEach(s),ih.forEach(s),dc=p(t),Oe=r(t,"DIV",{class:!0});var Fs=i(Oe);v(po.$$.fragment,Fs),iy=p(Fs),jt=r(Fs,"P",{});var Hr=i(jt);ly=n(Hr,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Rp=r(Hr,"CODE",{});var Pq=i(Rp);py=n(Pq,"logits"),Pq.forEach(s),dy=n(Hr," and optional "),Vp=r(Hr,"CODE",{});var Sq=i(Vp);cy=n(Sq,"logits_aggregation"),Sq.forEach(s),hy=n(Hr,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Hr.forEach(s),uy=p(Fs),co=r(Fs,"P",{});var lh=i(co);my=n(lh,"This model inherits from "),wr=r(lh,"A",{href:!0});var Dq=i(wr);gy=n(Dq,"TFPreTrainedModel"),Dq.forEach(s),fy=n(lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lh.forEach(s),_y=p(Fs),ho=r(Fs,"P",{});var ph=i(ho);Ty=n(ph,"This model is also a "),uo=r(ph,"A",{href:!0,rel:!0});var Nq=i(uo);by=n(Nq,"tf.keras.Model"),Nq.forEach(s),vy=n(ph,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ph.forEach(s),wy=p(Fs),v(la.$$.fragment,Fs),yy=p(Fs),ps=r(Fs,"DIV",{class:!0});var Rs=i(ps);v(mo.$$.fragment,Rs),ky=p(Rs),qt=r(Rs,"P",{});var Br=i(qt);jy=n(Br,"The "),yr=r(Br,"A",{href:!0});var Lq=i(yr);qy=n(Lq,"TFTapasForQuestionAnswering"),Lq.forEach(s),Ey=n(Br," forward method, overrides the "),Kp=r(Br,"CODE",{});var Qq=i(Kp);Fy=n(Qq,"__call__"),Qq.forEach(s),Ay=n(Br," special method."),Br.forEach(s),$y=p(Rs),v(pa.$$.fragment,Rs),zy=p(Rs),Yp=r(Rs,"P",{});var Oq=i(Yp);xy=n(Oq,"Examples:"),Oq.forEach(s),Cy=p(Rs),v(go.$$.fragment,Rs),Rs.forEach(s),Fs.forEach(s),this.h()},h(){d(m,"name","hf:doc:metadata"),d(m,"content",JSON.stringify(o0)),d(f,"id","tapas"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#tapas"),d(g,"class","relative group"),d(Y,"id","overview"),d(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Y,"href","#overview"),d($,"class","relative group"),d(ee,"href","https://www.aclweb.org/anthology/2020.acl-main.398"),d(ee,"rel","nofollow"),d(te,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),d(te,"rel","nofollow"),d(ae,"href","https://github.com/ppasupat/WikiTableQuestions"),d(ae,"rel","nofollow"),d(P,"href","https://github.com/salesforce/WikiSQL"),d(P,"rel","nofollow"),d(qe,"href","https://github.com/wenhuchen/Table-Fact-Checking"),d(qe,"rel","nofollow"),d(fa,"href","https://www.aclweb.org/anthology/2020.findings-emnlp.27/"),d(fa,"rel","nofollow"),Bq(At.src,Gy="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/tapas_architecture.png")||d(At,"src",Gy),d(At,"alt","drawing"),d(At,"width","600"),d(bo,"href","https://ai.googleblog.com/2020/04/using-neural-networks-to-find-answers.html"),d(_a,"href","https://huggingface.co/nielsr"),d(_a,"rel","nofollow"),d(Ta,"href","https://huggingface.co/kamalkraj"),d(Ta,"rel","nofollow"),d(ba,"href","https://github.com/google-research/tapas"),d(ba,"rel","nofollow"),d(wo,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig"),d(va,"href","https://huggingface.co/models?search=tapas"),d(va,"rel","nofollow"),d(wa,"href","https://github.com/google-research/tapas%3E"),d(wa,"rel","nofollow"),d(zt,"id","usage-finetuning"),d(zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(zt,"href","#usage-finetuning"),d(Ks,"class","relative group"),d(yo,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(jo,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(qa,"href","https://github.com/rusty1s/pytorch_scatter"),d(qa,"rel","nofollow"),d(Ea,"href","https://github.com/tensorflow/probability"),d(Ea,"rel","nofollow"),d(Eo,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasConfig"),d(Fo,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d($a,"href","https://github.com/google-research/tapas/issues/91#issuecomment-735719340"),d($a,"rel","nofollow"),d(za,"href","https://huggingface.co/models?search=tapas"),d(za,"rel","nofollow"),d(xa,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),d(xa,"rel","nofollow"),d(Ca,"href","https://github.com/google-research/tapas/issues/50#issuecomment-705465960"),d(Ca,"rel","nofollow"),d(Ma,"href","https://github.com/NielsRogge/tapas_utils"),d(Ma,"rel","nofollow"),d(Qo,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer"),d(Oo,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(Io,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),d(Wo,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer"),d(Uo,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer"),d(Ho,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer"),d(Oa,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),d(Oa,"rel","nofollow"),d(Ia,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),d(Ia,"rel","nofollow"),d(Go,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(Ro,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),d(Lt,"id","usage-inference"),d(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Lt,"href","#usage-inference"),d(tt,"class","relative group"),d(Vo,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(Ko,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),d(Yo,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer"),d(Ba,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),d(Ba,"rel","nofollow"),d(Ga,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),d(Ga,"rel","nofollow"),d(Ot,"id","transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),d(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ot,"href","#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),d(at,"class","relative group"),d(Jo,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(nt,"class","docstring"),d(It,"id","transformers.TapasConfig"),d(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(It,"href","#transformers.TapasConfig"),d(ot,"class","relative group"),d(Xo,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasModel"),d(Zo,"href","/docs/transformers/pr_15828/en/main_classes/configuration#transformers.PretrainedConfig"),d(Za,"href","https://github.com/google-research/tapas/tree/master"),d(Za,"rel","nofollow"),d(Xe,"class","docstring"),d(Wt,"id","transformers.TapasTokenizer"),d(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Wt,"href","#transformers.TapasTokenizer"),d(rt,"class","relative group"),d(er,"href","/docs/transformers/pr_15828/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(sr,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer"),d(ar,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasTokenizer"),d(Ut,"class","docstring"),d(nr,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(ln,"href","https://github.com/google-research/tapas/blob/4908213eb4df7aa988573350278b44c4dbe3f71b/tapas/experiments/prediction_utils.py#L288"),d(ln,"rel","nofollow"),d(Ps,"class","docstring"),d(or,"class","docstring"),d(de,"class","docstring"),d(Ht,"id","transformers.TapasModel"),d(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ht,"href","#transformers.TapasModel"),d(it,"class","relative group"),d(rr,"href","/docs/transformers/pr_15828/en/main_classes/model#transformers.PreTrainedModel"),d(mn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(mn,"rel","nofollow"),d(ir,"href","/docs/transformers/pr_15828/en/model_doc/bert#transformers.BertModel"),d(_n,"href","https://arxiv.org/abs/1706.03762"),d(_n,"rel","nofollow"),d(lr,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasModel"),d(ts,"class","docstring"),d(De,"class","docstring"),d(Gt,"id","transformers.TapasForMaskedLM"),d(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Gt,"href","#transformers.TapasForMaskedLM"),d(pt,"class","relative group"),d(pr,"href","/docs/transformers/pr_15828/en/main_classes/model#transformers.PreTrainedModel"),d(kn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(kn,"rel","nofollow"),d(dr,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasForMaskedLM"),d(as,"class","docstring"),d(fs,"class","docstring"),d(Vt,"id","transformers.TapasForSequenceClassification"),d(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Vt,"href","#transformers.TapasForSequenceClassification"),d(ht,"class","relative group"),d(cr,"href","/docs/transformers/pr_15828/en/main_classes/model#transformers.PreTrainedModel"),d(zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(zn,"rel","nofollow"),d(hr,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasForSequenceClassification"),d(ns,"class","docstring"),d(Ze,"class","docstring"),d(Yt,"id","transformers.TapasForQuestionAnswering"),d(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Yt,"href","#transformers.TapasForQuestionAnswering"),d(mt,"class","relative group"),d(ur,"href","/docs/transformers/pr_15828/en/main_classes/model#transformers.PreTrainedModel"),d(Nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Nn,"rel","nofollow"),d(mr,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(os,"class","docstring"),d(es,"class","docstring"),d(Xt,"id","transformers.TFTapasModel"),d(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Xt,"href","#transformers.TFTapasModel"),d(_t,"class","relative group"),d(gr,"href","/docs/transformers/pr_15828/en/main_classes/model#transformers.TFPreTrainedModel"),d(Hn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Hn,"rel","nofollow"),d(fr,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TFTapasModel"),d(rs,"class","docstring"),d(Ne,"class","docstring"),d(sa,"id","transformers.TFTapasForMaskedLM"),d(sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(sa,"href","#transformers.TFTapasForMaskedLM"),d(bt,"class","relative group"),d(_r,"href","/docs/transformers/pr_15828/en/main_classes/model#transformers.TFPreTrainedModel"),d(Xn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Xn,"rel","nofollow"),d(Tr,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TFTapasForMaskedLM"),d(is,"class","docstring"),d(Le,"class","docstring"),d(na,"id","transformers.TFTapasForSequenceClassification"),d(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(na,"href","#transformers.TFTapasForSequenceClassification"),d(wt,"class","relative group"),d(br,"href","/docs/transformers/pr_15828/en/main_classes/model#transformers.TFPreTrainedModel"),d(oo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(oo,"rel","nofollow"),d(vr,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TFTapasForSequenceClassification"),d(ls,"class","docstring"),d(Qe,"class","docstring"),d(ia,"id","transformers.TFTapasForQuestionAnswering"),d(ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ia,"href","#transformers.TFTapasForQuestionAnswering"),d(kt,"class","relative group"),d(wr,"href","/docs/transformers/pr_15828/en/main_classes/model#transformers.TFPreTrainedModel"),d(uo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(uo,"rel","nofollow"),d(yr,"href","/docs/transformers/pr_15828/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),d(ps,"class","docstring"),d(Oe,"class","docstring")},m(t,h){e(document.head,m),c(t,F,h),c(t,g,h),e(g,f),e(f,q),w(T,q,null),e(g,_),e(g,A),e(A,_e),c(t,K,h),c(t,$,h),e($,Y),e(Y,O),w(Z,O,null),e($,Te),e($,I),e(I,be),c(t,ce,h),c(t,W,h),e(W,N),e(W,ee),e(ee,se),e(W,z),c(t,x,h),c(t,oe,h),e(oe,H),c(t,he,h),c(t,V,h),e(V,L),e(L,te),e(te,ve),e(L,C),e(V,we),e(V,Q),e(Q,ae),e(ae,ye),e(Q,B),e(V,ke),e(V,re),e(re,P),e(P,je),e(re,G),c(t,ue,h),c(t,u,h),e(u,E),c(t,J,h),c(t,Fe,h),e(Fe,Ge),c(t,S,h),c(t,Ae,h),e(Ae,xe),e(xe,Re),c(t,D,h),c(t,M,h),e(M,Ve),e(M,Ce),e(Ce,R),e(M,Ke),e(M,qe),e(qe,Ee),e(M,Ye),e(M,fa),e(fa,dh),e(M,ch),c(t,od,h),c(t,At,h),c(t,rd,h),c(t,$t,h),e($t,hh),e($t,bo),e(bo,uh),e($t,mh),c(t,id,h),c(t,_s,h),e(_s,gh),e(_s,_a),e(_a,fh),e(_s,_h),e(_s,Ta),e(Ta,Th),e(_s,bh),e(_s,ba),e(ba,vh),e(_s,wh),c(t,ld,h),c(t,vo,h),e(vo,yh),c(t,pd,h),c(t,Ts,h),e(Ts,Me),e(Me,kh),e(Me,Rr),e(Rr,jh),e(Me,qh),e(Me,wo),e(wo,Eh),e(Me,Fh),e(Me,Vr),e(Vr,Ah),e(Me,$h),e(Me,va),e(va,zh),e(Me,xh),e(Me,Kr),e(Kr,Ch),e(Me,Mh),e(Me,Yr),e(Yr,Ph),e(Me,Sh),e(Ts,Dh),e(Ts,Je),e(Je,Nh),e(Je,Jr),e(Jr,Lh),e(Je,Qh),e(Je,Xr),e(Xr,Oh),e(Je,Ih),e(Je,Zr),e(Zr,Wh),e(Je,Uh),e(Je,ei),e(ei,Hh),e(Je,Bh),e(Je,wa),e(wa,Gh),e(Je,Rh),e(Ts,Vh),e(Ts,Vs),e(Vs,Kh),e(Vs,si),e(si,Yh),e(Vs,Jh),e(Vs,ti),e(ti,Xh),e(Vs,Zh),e(Ts,eu),e(Ts,ai),e(ai,su),c(t,dd,h),c(t,Ks,h),e(Ks,zt),e(zt,ni),w(ya,ni,null),e(Ks,tu),e(Ks,oi),e(oi,au),c(t,cd,h),c(t,xt,h),e(xt,nu),e(xt,yo),e(yo,ou),e(xt,ru),c(t,hd,h),c(t,ko,h),e(ko,ri),e(ri,iu),c(t,ud,h),c(t,Ct,h),e(Ct,lu),e(Ct,jo),e(jo,pu),e(Ct,du),c(t,md,h),c(t,zs,h),e(zs,ii),e(ii,cu),e(zs,hu),e(zs,ka),e(ka,uu),e(ka,li),e(li,mu),e(ka,gu),e(zs,fu),e(zs,ja),e(ja,_u),e(ja,pi),e(pi,Tu),e(ja,bu),c(t,gd,h),c(t,qo,h),e(qo,vu),c(t,fd,h),c(t,Mt,h),e(Mt,di),e(di,Ys),e(Ys,ci),e(ci,hi),e(hi,wu),e(Ys,yu),e(Ys,ui),e(ui,mi),e(mi,ku),e(Ys,ju),e(Ys,gi),e(gi,fi),e(fi,qu),e(Mt,Eu),e(Mt,Js),e(Js,Xs),e(Xs,_i),e(_i,Fu),e(Xs,Au),e(Xs,Ti),e(Ti,$u),e(Xs,zu),e(Xs,bi),e(bi,xu),e(Js,Cu),e(Js,Zs),e(Zs,vi),e(vi,Mu),e(Zs,Pu),e(Zs,wi),e(wi,Su),e(Zs,Du),e(Zs,yi),e(yi,Nu),e(Js,Lu),e(Js,et),e(et,ki),e(ki,Qu),e(et,Ou),e(et,ji),e(ji,Iu),e(et,Wu),e(et,qi),e(qi,Uu),c(t,_d,h),c(t,xs,h),e(xs,Hu),e(xs,qa),e(qa,Bu),e(xs,Gu),e(xs,Ea),e(Ea,Ru),e(xs,Vu),c(t,Td,h),w(Fa,t,h),c(t,bd,h),c(t,Cs,h),e(Cs,Ku),e(Cs,Eo),e(Eo,Yu),e(Cs,Ju),e(Cs,Fo),e(Fo,Xu),e(Cs,Zu),c(t,vd,h),w(Aa,t,h),c(t,wd,h),c(t,Pt,h),e(Pt,em),e(Pt,$a),e($a,sm),e(Pt,tm),c(t,yd,h),c(t,St,h),e(St,am),e(St,za),e(za,nm),e(St,om),c(t,kd,h),c(t,Ao,h),e(Ao,Ei),e(Ei,rm),c(t,jd,h),c(t,Dt,h),e(Dt,im),e(Dt,xa),e(xa,lm),e(Dt,pm),c(t,qd,h),c(t,ie,h),e(ie,$o),e($o,Fi),e(Fi,dm),e($o,cm),e(ie,hm),e(ie,zo),e(zo,Ai),e(Ai,um),e(zo,mm),e(ie,gm),e(ie,xo),e(xo,$i),e($i,fm),e(xo,_m),e(ie,Tm),e(ie,Co),e(Co,zi),e(zi,bm),e(Co,vm),e(ie,wm),e(ie,Mo),e(Mo,xi),e(xi,ym),e(Mo,km),e(ie,jm),e(ie,Po),e(Po,Ci),e(Ci,qm),e(Po,Em),e(ie,Fm),e(ie,So),e(So,Mi),e(Mi,Am),e(So,$m),e(ie,zm),e(ie,Do),e(Do,Pi),e(Pi,xm),e(Do,Cm),e(ie,Mm),e(ie,No),e(No,Si),e(Si,Pm),e(No,Sm),c(t,Ed,h),c(t,We,h),e(We,Dm),e(We,Ca),e(Ca,Nm),e(We,Lm),e(We,Ma),e(Ma,Qm),e(We,Om),e(We,Di),e(Di,Im),e(We,Wm),e(We,Ni),e(Ni,Um),e(We,Hm),e(We,Li),e(Li,Bm),e(We,Gm),c(t,Fd,h),c(t,Lo,h),e(Lo,Qi),e(Qi,Rm),c(t,Ad,h),c(t,$e,h),e($e,Vm),e($e,Qo),e(Qo,Km),e($e,Ym),e($e,Oi),e(Oi,Jm),e($e,Xm),e($e,Ii),e(Ii,Zm),e($e,eg),e($e,Wi),e(Wi,sg),e($e,tg),e($e,Oo),e(Oo,ag),e($e,ng),e($e,Io),e(Io,og),e($e,rg),c(t,$d,h),c(t,Nt,h),e(Nt,Ui),e(Ui,Pa),e(Pa,Hi),e(Hi,Bi),e(Bi,ig),e(Pa,lg),e(Pa,Gi),e(Gi,Ri),e(Ri,pg),e(Nt,dg),e(Nt,st),e(st,Sa),e(Sa,Vi),e(Vi,cg),e(Sa,hg),e(Sa,$s),e($s,Ki),e(Ki,ug),e($s,mg),e($s,Yi),e(Yi,gg),e($s,fg),e($s,Ji),e(Ji,_g),e($s,Tg),e($s,Xi),e(Xi,bg),e(st,vg),e(st,Da),e(Da,Zi),e(Zi,wg),e(Da,yg),e(Da,Pe),e(Pe,el),e(el,kg),e(Pe,jg),e(Pe,sl),e(sl,qg),e(Pe,Eg),e(Pe,tl),e(tl,Fg),e(Pe,Ag),e(Pe,al),e(al,$g),e(Pe,zg),e(Pe,nl),e(nl,xg),e(Pe,Cg),e(Pe,ol),e(ol,Mg),e(Pe,Pg),e(Pe,rl),e(rl,Sg),e(st,Dg),e(st,Na),e(Na,il),e(il,Ng),e(Na,Lg),e(Na,ms),e(ms,ll),e(ll,Qg),e(ms,Og),e(ms,pl),e(pl,Ig),e(ms,Wg),e(ms,dl),e(dl,Ug),e(ms,Hg),e(ms,cl),e(cl,Bg),e(ms,Gg),e(ms,hl),e(hl,Rg),c(t,zd,h),c(t,pe,h),e(pe,Wo),e(Wo,Vg),e(pe,Kg),e(pe,ul),e(ul,Yg),e(pe,Jg),e(pe,ml),e(ml,Xg),e(pe,Zg),e(pe,gl),e(gl,ef),e(pe,sf),e(pe,fl),e(fl,tf),e(pe,af),e(pe,_l),e(_l,nf),e(pe,of),e(pe,Tl),e(Tl,rf),e(pe,lf),e(pe,bl),e(bl,pf),e(pe,df),c(t,xd,h),w(La,t,h),c(t,Cd,h),c(t,bs,h),e(bs,cf),e(bs,Uo),e(Uo,hf),e(bs,uf),e(bs,vl),e(vl,mf),e(bs,gf),e(bs,wl),e(wl,ff),e(bs,_f),c(t,Md,h),w(Qa,t,h),c(t,Pd,h),c(t,X,h),e(X,Tf),e(X,yl),e(yl,bf),e(X,vf),e(X,kl),e(kl,wf),e(X,yf),e(X,jl),e(jl,kf),e(X,jf),e(X,ql),e(ql,qf),e(X,Ef),e(X,El),e(El,Ff),e(X,Af),e(X,Fl),e(Fl,$f),e(X,zf),e(X,Ho),e(Ho,xf),e(X,Cf),e(X,Oa),e(Oa,Mf),e(X,Pf),e(X,Ia),e(Ia,Sf),e(X,Df),c(t,Sd,h),c(t,Bo,h),e(Bo,Al),e(Al,Nf),c(t,Dd,h),c(t,Ms,h),e(Ms,Lf),e(Ms,Go),e(Go,Qf),e(Ms,Of),e(Ms,Ro),e(Ro,If),e(Ms,Wf),c(t,Nd,h),w(Wa,t,h),c(t,Ld,h),c(t,tt,h),e(tt,Lt),e(Lt,$l),w(Ua,$l,null),e(tt,Uf),e(tt,zl),e(zl,Hf),c(t,Qd,h),c(t,me,h),e(me,Bf),e(me,Vo),e(Vo,Gf),e(me,Rf),e(me,Ko),e(Ko,Vf),e(me,Kf),e(me,xl),e(xl,Yf),e(me,Jf),e(me,Cl),e(Cl,Xf),e(me,Zf),e(me,Ml),e(Ml,e_),e(me,s_),e(me,Yo),e(Yo,t_),e(me,a_),e(me,Pl),e(Pl,n_),e(me,o_),c(t,Od,h),c(t,Qt,h),e(Qt,r_),e(Qt,Sl),e(Sl,i_),e(Qt,l_),c(t,Id,h),w(Ha,t,h),c(t,Wd,h),c(t,Ue,h),e(Ue,p_),e(Ue,Dl),e(Dl,d_),e(Ue,c_),e(Ue,Nl),e(Nl,h_),e(Ue,u_),e(Ue,Ll),e(Ll,m_),e(Ue,g_),e(Ue,Ba),e(Ba,f_),e(Ue,__),e(Ue,Ga),e(Ga,T_),e(Ue,b_),c(t,Ud,h),c(t,at,h),e(at,Ot),e(Ot,Ql),w(Ra,Ql,null),e(at,v_),e(at,Ol),e(Ol,w_),c(t,Hd,h),c(t,nt,h),w(Va,nt,null),e(nt,y_),e(nt,Ka),e(Ka,k_),e(Ka,Jo),e(Jo,j_),e(Ka,q_),c(t,Bd,h),c(t,ot,h),e(ot,It),e(It,Il),w(Ya,Il,null),e(ot,E_),e(ot,Wl),e(Wl,F_),c(t,Gd,h),c(t,Xe,h),w(Ja,Xe,null),e(Xe,A_),e(Xe,gs),e(gs,$_),e(gs,Xo),e(Xo,z_),e(gs,x_),e(gs,Ul),e(Ul,C_),e(gs,M_),e(gs,Hl),e(Hl,P_),e(gs,S_),e(gs,Zo),e(Zo,D_),e(gs,N_),e(Xe,L_),e(Xe,Xa),e(Xa,Q_),e(Xa,Za),e(Za,O_),e(Xa,I_),e(Xe,W_),e(Xe,Bl),e(Bl,U_),e(Xe,H_),w(en,Xe,null),c(t,Rd,h),c(t,rt,h),e(rt,Wt),e(Wt,Gl),w(sn,Gl,null),e(rt,B_),e(rt,Rl),e(Rl,G_),c(t,Vd,h),c(t,de,h),w(tn,de,null),e(de,R_),e(de,Vl),e(Vl,V_),e(de,K_),e(de,ne),e(ne,Y_),e(ne,er),e(er,J_),e(ne,X_),e(ne,sr),e(sr,Z_),e(ne,eT),e(ne,Kl),e(Kl,sT),e(ne,tT),e(ne,Yl),e(Yl,aT),e(ne,nT),e(ne,Jl),e(Jl,oT),e(ne,rT),e(ne,Xl),e(Xl,iT),e(ne,lT),e(ne,Zl),e(Zl,pT),e(ne,dT),e(ne,ep),e(ep,cT),e(ne,hT),e(ne,sp),e(sp,uT),e(ne,mT),e(de,gT),e(de,Se),e(Se,tp),e(tp,fT),e(Se,_T),e(Se,ap),e(ap,TT),e(Se,bT),e(Se,np),e(np,vT),e(Se,wT),e(Se,op),e(op,yT),e(Se,kT),e(Se,rp),e(rp,jT),e(Se,qT),e(Se,ip),e(ip,ET),e(Se,FT),e(Se,lp),e(lp,AT),e(de,$T),e(de,tr),e(tr,ar),e(ar,zT),e(tr,xT),e(de,CT),e(de,Ut),w(an,Ut,null),e(Ut,MT),e(Ut,pp),e(pp,PT),e(de,ST),e(de,Ps),w(nn,Ps,null),e(Ps,DT),e(Ps,on),e(on,NT),e(on,nr),e(nr,LT),e(on,QT),e(Ps,OT),e(Ps,rn),e(rn,IT),e(rn,ln),e(ln,WT),e(rn,UT),e(de,HT),e(de,or),w(pn,or,null),c(t,Kd,h),c(t,it,h),e(it,Ht),e(Ht,dp),w(dn,dp,null),e(it,BT),e(it,cp),e(cp,GT),c(t,Yd,h),c(t,De,h),w(cn,De,null),e(De,RT),e(De,hn),e(hn,VT),e(hn,rr),e(rr,KT),e(hn,YT),e(De,JT),e(De,un),e(un,XT),e(un,mn),e(mn,ZT),e(un,eb),e(De,sb),e(De,gn),e(gn,tb),e(gn,ir),e(ir,ab),e(gn,nb),e(De,ob),e(De,fn),e(fn,rb),e(fn,_n),e(_n,ib),e(fn,lb),e(De,pb),e(De,ts),w(Tn,ts,null),e(ts,db),e(ts,lt),e(lt,cb),e(lt,lr),e(lr,hb),e(lt,ub),e(lt,hp),e(hp,mb),e(lt,gb),e(ts,fb),w(Bt,ts,null),e(ts,_b),e(ts,up),e(up,Tb),e(ts,bb),w(bn,ts,null),c(t,Jd,h),c(t,pt,h),e(pt,Gt),e(Gt,mp),w(vn,mp,null),e(pt,vb),e(pt,gp),e(gp,wb),c(t,Xd,h),c(t,fs,h),w(wn,fs,null),e(fs,yb),e(fs,dt),e(dt,kb),e(dt,fp),e(fp,jb),e(dt,qb),e(dt,pr),e(pr,Eb),e(dt,Fb),e(fs,Ab),e(fs,yn),e(yn,$b),e(yn,kn),e(kn,zb),e(yn,xb),e(fs,Cb),e(fs,as),w(jn,as,null),e(as,Mb),e(as,ct),e(ct,Pb),e(ct,dr),e(dr,Sb),e(ct,Db),e(ct,_p),e(_p,Nb),e(ct,Lb),e(as,Qb),w(Rt,as,null),e(as,Ob),e(as,Tp),e(Tp,Ib),e(as,Wb),w(qn,as,null),c(t,Zd,h),c(t,ht,h),e(ht,Vt),e(Vt,bp),w(En,bp,null),e(ht,Ub),e(ht,vp),e(vp,Hb),c(t,ec,h),c(t,Ze,h),w(Fn,Ze,null),e(Ze,Bb),e(Ze,wp),e(wp,Gb),e(Ze,Rb),e(Ze,An),e(An,Vb),e(An,cr),e(cr,Kb),e(An,Yb),e(Ze,Jb),e(Ze,$n),e($n,Xb),e($n,zn),e(zn,Zb),e($n,ev),e(Ze,sv),e(Ze,ns),w(xn,ns,null),e(ns,tv),e(ns,ut),e(ut,av),e(ut,hr),e(hr,nv),e(ut,ov),e(ut,yp),e(yp,rv),e(ut,iv),e(ns,lv),w(Kt,ns,null),e(ns,pv),e(ns,kp),e(kp,dv),e(ns,cv),w(Cn,ns,null),c(t,sc,h),c(t,mt,h),e(mt,Yt),e(Yt,jp),w(Mn,jp,null),e(mt,hv),e(mt,qp),e(qp,uv),c(t,tc,h),c(t,es,h),w(Pn,es,null),e(es,mv),e(es,gt),e(gt,gv),e(gt,Ep),e(Ep,fv),e(gt,_v),e(gt,Fp),e(Fp,Tv),e(gt,bv),e(es,vv),e(es,Sn),e(Sn,wv),e(Sn,ur),e(ur,yv),e(Sn,kv),e(es,jv),e(es,Dn),e(Dn,qv),e(Dn,Nn),e(Nn,Ev),e(Dn,Fv),e(es,Av),e(es,os),w(Ln,os,null),e(os,$v),e(os,ft),e(ft,zv),e(ft,mr),e(mr,xv),e(ft,Cv),e(ft,Ap),e(Ap,Mv),e(ft,Pv),e(os,Sv),w(Jt,os,null),e(os,Dv),e(os,$p),e($p,Nv),e(os,Lv),w(Qn,os,null),c(t,ac,h),c(t,_t,h),e(_t,Xt),e(Xt,zp),w(On,zp,null),e(_t,Qv),e(_t,xp),e(xp,Ov),c(t,nc,h),c(t,Ne,h),w(In,Ne,null),e(Ne,Iv),e(Ne,Cp),e(Cp,Wv),e(Ne,Uv),e(Ne,Wn),e(Wn,Hv),e(Wn,gr),e(gr,Bv),e(Wn,Gv),e(Ne,Rv),e(Ne,Un),e(Un,Vv),e(Un,Hn),e(Hn,Kv),e(Un,Yv),e(Ne,Jv),w(Zt,Ne,null),e(Ne,Xv),e(Ne,rs),w(Bn,rs,null),e(rs,Zv),e(rs,Tt),e(Tt,ew),e(Tt,fr),e(fr,sw),e(Tt,tw),e(Tt,Mp),e(Mp,aw),e(Tt,nw),e(rs,ow),w(ea,rs,null),e(rs,rw),e(rs,Pp),e(Pp,iw),e(rs,lw),w(Gn,rs,null),c(t,oc,h),c(t,bt,h),e(bt,sa),e(sa,Sp),w(Rn,Sp,null),e(bt,pw),e(bt,Dp),e(Dp,dw),c(t,rc,h),c(t,Le,h),w(Vn,Le,null),e(Le,cw),e(Le,Kn),e(Kn,hw),e(Kn,Np),e(Np,uw),e(Kn,mw),e(Le,gw),e(Le,Yn),e(Yn,fw),e(Yn,_r),e(_r,_w),e(Yn,Tw),e(Le,bw),e(Le,Jn),e(Jn,vw),e(Jn,Xn),e(Xn,ww),e(Jn,yw),e(Le,kw),w(ta,Le,null),e(Le,jw),e(Le,is),w(Zn,is,null),e(is,qw),e(is,vt),e(vt,Ew),e(vt,Tr),e(Tr,Fw),e(vt,Aw),e(vt,Lp),e(Lp,$w),e(vt,zw),e(is,xw),w(aa,is,null),e(is,Cw),e(is,Qp),e(Qp,Mw),e(is,Pw),w(eo,is,null),c(t,ic,h),c(t,wt,h),e(wt,na),e(na,Op),w(so,Op,null),e(wt,Sw),e(wt,Ip),e(Ip,Dw),c(t,lc,h),c(t,Qe,h),w(to,Qe,null),e(Qe,Nw),e(Qe,Wp),e(Wp,Lw),e(Qe,Qw),e(Qe,ao),e(ao,Ow),e(ao,br),e(br,Iw),e(ao,Ww),e(Qe,Uw),e(Qe,no),e(no,Hw),e(no,oo),e(oo,Bw),e(no,Gw),e(Qe,Rw),w(oa,Qe,null),e(Qe,Vw),e(Qe,ls),w(ro,ls,null),e(ls,Kw),e(ls,yt),e(yt,Yw),e(yt,vr),e(vr,Jw),e(yt,Xw),e(yt,Up),e(Up,Zw),e(yt,ey),e(ls,sy),w(ra,ls,null),e(ls,ty),e(ls,Hp),e(Hp,ay),e(ls,ny),w(io,ls,null),c(t,pc,h),c(t,kt,h),e(kt,ia),e(ia,Bp),w(lo,Bp,null),e(kt,oy),e(kt,Gp),e(Gp,ry),c(t,dc,h),c(t,Oe,h),w(po,Oe,null),e(Oe,iy),e(Oe,jt),e(jt,ly),e(jt,Rp),e(Rp,py),e(jt,dy),e(jt,Vp),e(Vp,cy),e(jt,hy),e(Oe,uy),e(Oe,co),e(co,my),e(co,wr),e(wr,gy),e(co,fy),e(Oe,_y),e(Oe,ho),e(ho,Ty),e(ho,uo),e(uo,by),e(ho,vy),e(Oe,wy),w(la,Oe,null),e(Oe,yy),e(Oe,ps),w(mo,ps,null),e(ps,ky),e(ps,qt),e(qt,jy),e(qt,yr),e(yr,qy),e(qt,Ey),e(qt,Kp),e(Kp,Fy),e(qt,Ay),e(ps,$y),w(pa,ps,null),e(ps,zy),e(ps,Yp),e(Yp,xy),e(ps,Cy),w(go,ps,null),cc=!0},p(t,[h]){const fo={};h&2&&(fo.$$scope={dirty:h,ctx:t}),Bt.$set(fo);const Jp={};h&2&&(Jp.$$scope={dirty:h,ctx:t}),Rt.$set(Jp);const Xp={};h&2&&(Xp.$$scope={dirty:h,ctx:t}),Kt.$set(Xp);const Zp={};h&2&&(Zp.$$scope={dirty:h,ctx:t}),Jt.$set(Zp);const _o={};h&2&&(_o.$$scope={dirty:h,ctx:t}),Zt.$set(_o);const ed={};h&2&&(ed.$$scope={dirty:h,ctx:t}),ea.$set(ed);const sd={};h&2&&(sd.$$scope={dirty:h,ctx:t}),ta.$set(sd);const td={};h&2&&(td.$$scope={dirty:h,ctx:t}),aa.$set(td);const To={};h&2&&(To.$$scope={dirty:h,ctx:t}),oa.$set(To);const ad={};h&2&&(ad.$$scope={dirty:h,ctx:t}),ra.$set(ad);const nd={};h&2&&(nd.$$scope={dirty:h,ctx:t}),la.$set(nd);const Et={};h&2&&(Et.$$scope={dirty:h,ctx:t}),pa.$set(Et)},i(t){cc||(y(T.$$.fragment,t),y(Z.$$.fragment,t),y(ya.$$.fragment,t),y(Fa.$$.fragment,t),y(Aa.$$.fragment,t),y(La.$$.fragment,t),y(Qa.$$.fragment,t),y(Wa.$$.fragment,t),y(Ua.$$.fragment,t),y(Ha.$$.fragment,t),y(Ra.$$.fragment,t),y(Va.$$.fragment,t),y(Ya.$$.fragment,t),y(Ja.$$.fragment,t),y(en.$$.fragment,t),y(sn.$$.fragment,t),y(tn.$$.fragment,t),y(an.$$.fragment,t),y(nn.$$.fragment,t),y(pn.$$.fragment,t),y(dn.$$.fragment,t),y(cn.$$.fragment,t),y(Tn.$$.fragment,t),y(Bt.$$.fragment,t),y(bn.$$.fragment,t),y(vn.$$.fragment,t),y(wn.$$.fragment,t),y(jn.$$.fragment,t),y(Rt.$$.fragment,t),y(qn.$$.fragment,t),y(En.$$.fragment,t),y(Fn.$$.fragment,t),y(xn.$$.fragment,t),y(Kt.$$.fragment,t),y(Cn.$$.fragment,t),y(Mn.$$.fragment,t),y(Pn.$$.fragment,t),y(Ln.$$.fragment,t),y(Jt.$$.fragment,t),y(Qn.$$.fragment,t),y(On.$$.fragment,t),y(In.$$.fragment,t),y(Zt.$$.fragment,t),y(Bn.$$.fragment,t),y(ea.$$.fragment,t),y(Gn.$$.fragment,t),y(Rn.$$.fragment,t),y(Vn.$$.fragment,t),y(ta.$$.fragment,t),y(Zn.$$.fragment,t),y(aa.$$.fragment,t),y(eo.$$.fragment,t),y(so.$$.fragment,t),y(to.$$.fragment,t),y(oa.$$.fragment,t),y(ro.$$.fragment,t),y(ra.$$.fragment,t),y(io.$$.fragment,t),y(lo.$$.fragment,t),y(po.$$.fragment,t),y(la.$$.fragment,t),y(mo.$$.fragment,t),y(pa.$$.fragment,t),y(go.$$.fragment,t),cc=!0)},o(t){k(T.$$.fragment,t),k(Z.$$.fragment,t),k(ya.$$.fragment,t),k(Fa.$$.fragment,t),k(Aa.$$.fragment,t),k(La.$$.fragment,t),k(Qa.$$.fragment,t),k(Wa.$$.fragment,t),k(Ua.$$.fragment,t),k(Ha.$$.fragment,t),k(Ra.$$.fragment,t),k(Va.$$.fragment,t),k(Ya.$$.fragment,t),k(Ja.$$.fragment,t),k(en.$$.fragment,t),k(sn.$$.fragment,t),k(tn.$$.fragment,t),k(an.$$.fragment,t),k(nn.$$.fragment,t),k(pn.$$.fragment,t),k(dn.$$.fragment,t),k(cn.$$.fragment,t),k(Tn.$$.fragment,t),k(Bt.$$.fragment,t),k(bn.$$.fragment,t),k(vn.$$.fragment,t),k(wn.$$.fragment,t),k(jn.$$.fragment,t),k(Rt.$$.fragment,t),k(qn.$$.fragment,t),k(En.$$.fragment,t),k(Fn.$$.fragment,t),k(xn.$$.fragment,t),k(Kt.$$.fragment,t),k(Cn.$$.fragment,t),k(Mn.$$.fragment,t),k(Pn.$$.fragment,t),k(Ln.$$.fragment,t),k(Jt.$$.fragment,t),k(Qn.$$.fragment,t),k(On.$$.fragment,t),k(In.$$.fragment,t),k(Zt.$$.fragment,t),k(Bn.$$.fragment,t),k(ea.$$.fragment,t),k(Gn.$$.fragment,t),k(Rn.$$.fragment,t),k(Vn.$$.fragment,t),k(ta.$$.fragment,t),k(Zn.$$.fragment,t),k(aa.$$.fragment,t),k(eo.$$.fragment,t),k(so.$$.fragment,t),k(to.$$.fragment,t),k(oa.$$.fragment,t),k(ro.$$.fragment,t),k(ra.$$.fragment,t),k(io.$$.fragment,t),k(lo.$$.fragment,t),k(po.$$.fragment,t),k(la.$$.fragment,t),k(mo.$$.fragment,t),k(pa.$$.fragment,t),k(go.$$.fragment,t),cc=!1},d(t){s(m),t&&s(F),t&&s(g),j(T),t&&s(K),t&&s($),j(Z),t&&s(ce),t&&s(W),t&&s(x),t&&s(oe),t&&s(he),t&&s(V),t&&s(ue),t&&s(u),t&&s(J),t&&s(Fe),t&&s(S),t&&s(Ae),t&&s(D),t&&s(M),t&&s(od),t&&s(At),t&&s(rd),t&&s($t),t&&s(id),t&&s(_s),t&&s(ld),t&&s(vo),t&&s(pd),t&&s(Ts),t&&s(dd),t&&s(Ks),j(ya),t&&s(cd),t&&s(xt),t&&s(hd),t&&s(ko),t&&s(ud),t&&s(Ct),t&&s(md),t&&s(zs),t&&s(gd),t&&s(qo),t&&s(fd),t&&s(Mt),t&&s(_d),t&&s(xs),t&&s(Td),j(Fa,t),t&&s(bd),t&&s(Cs),t&&s(vd),j(Aa,t),t&&s(wd),t&&s(Pt),t&&s(yd),t&&s(St),t&&s(kd),t&&s(Ao),t&&s(jd),t&&s(Dt),t&&s(qd),t&&s(ie),t&&s(Ed),t&&s(We),t&&s(Fd),t&&s(Lo),t&&s(Ad),t&&s($e),t&&s($d),t&&s(Nt),t&&s(zd),t&&s(pe),t&&s(xd),j(La,t),t&&s(Cd),t&&s(bs),t&&s(Md),j(Qa,t),t&&s(Pd),t&&s(X),t&&s(Sd),t&&s(Bo),t&&s(Dd),t&&s(Ms),t&&s(Nd),j(Wa,t),t&&s(Ld),t&&s(tt),j(Ua),t&&s(Qd),t&&s(me),t&&s(Od),t&&s(Qt),t&&s(Id),j(Ha,t),t&&s(Wd),t&&s(Ue),t&&s(Ud),t&&s(at),j(Ra),t&&s(Hd),t&&s(nt),j(Va),t&&s(Bd),t&&s(ot),j(Ya),t&&s(Gd),t&&s(Xe),j(Ja),j(en),t&&s(Rd),t&&s(rt),j(sn),t&&s(Vd),t&&s(de),j(tn),j(an),j(nn),j(pn),t&&s(Kd),t&&s(it),j(dn),t&&s(Yd),t&&s(De),j(cn),j(Tn),j(Bt),j(bn),t&&s(Jd),t&&s(pt),j(vn),t&&s(Xd),t&&s(fs),j(wn),j(jn),j(Rt),j(qn),t&&s(Zd),t&&s(ht),j(En),t&&s(ec),t&&s(Ze),j(Fn),j(xn),j(Kt),j(Cn),t&&s(sc),t&&s(mt),j(Mn),t&&s(tc),t&&s(es),j(Pn),j(Ln),j(Jt),j(Qn),t&&s(ac),t&&s(_t),j(On),t&&s(nc),t&&s(Ne),j(In),j(Zt),j(Bn),j(ea),j(Gn),t&&s(oc),t&&s(bt),j(Rn),t&&s(rc),t&&s(Le),j(Vn),j(ta),j(Zn),j(aa),j(eo),t&&s(ic),t&&s(wt),j(so),t&&s(lc),t&&s(Qe),j(to),j(oa),j(ro),j(ra),j(io),t&&s(pc),t&&s(kt),j(lo),t&&s(dc),t&&s(Oe),j(po),j(la),j(mo),j(pa),j(go)}}}const o0={local:"tapas",sections:[{local:"overview",title:"Overview"},{local:"usage-finetuning",title:"Usage: fine-tuning"},{local:"usage-inference",title:"Usage: inference"},{local:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",title:"TAPAS specific outputs"},{local:"transformers.TapasConfig",title:"TapasConfig"},{local:"transformers.TapasTokenizer",title:"TapasTokenizer"},{local:"transformers.TapasModel",title:"TapasModel"},{local:"transformers.TapasForMaskedLM",title:"TapasForMaskedLM"},{local:"transformers.TapasForSequenceClassification",title:"TapasForSequenceClassification"},{local:"transformers.TapasForQuestionAnswering",title:"TapasForQuestionAnswering"},{local:"transformers.TFTapasModel",title:"TFTapasModel"},{local:"transformers.TFTapasForMaskedLM",title:"TFTapasForMaskedLM"},{local:"transformers.TFTapasForSequenceClassification",title:"TFTapasForSequenceClassification"},{local:"transformers.TFTapasForQuestionAnswering",title:"TFTapasForQuestionAnswering"}],title:"TAPAS"};function r0(U,m,F){let{fw:g}=m;return U.$$set=f=>{"fw"in f&&F(0,g=f.fw)},[g]}class m0 extends Iq{constructor(m){super();Wq(this,m,r0,n0,Uq,{fw:0})}}export{m0 as default,o0 as metadata};
