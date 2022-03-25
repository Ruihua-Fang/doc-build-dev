import{S as yF,i as $F,s as DF,e as o,k as l,w as b,t as a,M as FF,c as n,d as t,m as d,a as r,x as k,h as i,b as c,F as e,g as u,y as T,q as w,o as y,B as $,v as BF}from"../../chunks/vendor-6b77c823.js";import{T as ge}from"../../chunks/Tip-39098574.js";import{D as Q}from"../../chunks/Docstring-abef54e3.js";import{C as re}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as be}from"../../chunks/IconCopyLink-7a11ce68.js";function MF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function EF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function xF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function zF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function jF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function CF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function PF(j){let p,F,g,v,D,_,f,B,ce,K,E,G,L,X,pe,S,he,ae,N,q,Y,V,x,z,ue,W,se,fe,R,ie,ee,A,le,I,oe,me,P,te,U,de;return{c(){p=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),D=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=o("p"),G=a("This second option is useful when using "),L=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),fe=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),oe=a("model([input_ids, attention_mask])"),me=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var J=r(v);D=n(J,"LI",{});var _e=r(D);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),K=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var we=r(S);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),V=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);ue=i(H,"a single Tensor with "),W=n(H,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),fe=i(H," only and nothing else: "),R=n(H,"CODE",{});var De=r(R);ie=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var Fe=r(I);oe=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,D),e(D,_),e(v,f),e(v,B),e(B,ce),u(h,K,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,pe),e(E,S),e(S,he),e(E,ae),u(h,N,M),u(h,q,M),e(q,Y),u(h,V,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,fe),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,I),e(I,oe),e(x,me),e(x,P),e(P,te),e(P,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(K),h&&t(E),h&&t(N),h&&t(q),h&&t(V),h&&t(x)}}}function qF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function AF(j){let p,F,g,v,D,_,f,B,ce,K,E,G,L,X,pe,S,he,ae,N,q,Y,V,x,z,ue,W,se,fe,R,ie,ee,A,le,I,oe,me,P,te,U,de;return{c(){p=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),D=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=o("p"),G=a("This second option is useful when using "),L=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),fe=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),oe=a("model([input_ids, attention_mask])"),me=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var J=r(v);D=n(J,"LI",{});var _e=r(D);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),K=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var we=r(S);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),V=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);ue=i(H,"a single Tensor with "),W=n(H,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),fe=i(H," only and nothing else: "),R=n(H,"CODE",{});var De=r(R);ie=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var Fe=r(I);oe=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,D),e(D,_),e(v,f),e(v,B),e(B,ce),u(h,K,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,pe),e(E,S),e(S,he),e(E,ae),u(h,N,M),u(h,q,M),e(q,Y),u(h,V,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,fe),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,I),e(I,oe),e(x,me),e(x,P),e(P,te),e(P,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(K),h&&t(E),h&&t(N),h&&t(q),h&&t(V),h&&t(x)}}}function OF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function NF(j){let p,F,g,v,D,_,f,B,ce,K,E,G,L,X,pe,S,he,ae,N,q,Y,V,x,z,ue,W,se,fe,R,ie,ee,A,le,I,oe,me,P,te,U,de;return{c(){p=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),D=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=o("p"),G=a("This second option is useful when using "),L=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),fe=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),oe=a("model([input_ids, attention_mask])"),me=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var J=r(v);D=n(J,"LI",{});var _e=r(D);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),K=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var we=r(S);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),V=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);ue=i(H,"a single Tensor with "),W=n(H,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),fe=i(H," only and nothing else: "),R=n(H,"CODE",{});var De=r(R);ie=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var Fe=r(I);oe=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,D),e(D,_),e(v,f),e(v,B),e(B,ce),u(h,K,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,pe),e(E,S),e(S,he),e(E,ae),u(h,N,M),u(h,q,M),e(q,Y),u(h,V,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,fe),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,I),e(I,oe),e(x,me),e(x,P),e(P,te),e(P,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(K),h&&t(E),h&&t(N),h&&t(q),h&&t(V),h&&t(x)}}}function IF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function LF(j){let p,F,g,v,D,_,f,B,ce,K,E,G,L,X,pe,S,he,ae,N,q,Y,V,x,z,ue,W,se,fe,R,ie,ee,A,le,I,oe,me,P,te,U,de;return{c(){p=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),D=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=o("p"),G=a("This second option is useful when using "),L=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),fe=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),oe=a("model([input_ids, attention_mask])"),me=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var J=r(v);D=n(J,"LI",{});var _e=r(D);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),K=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var we=r(S);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),V=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);ue=i(H,"a single Tensor with "),W=n(H,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),fe=i(H," only and nothing else: "),R=n(H,"CODE",{});var De=r(R);ie=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var Fe=r(I);oe=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,D),e(D,_),e(v,f),e(v,B),e(B,ce),u(h,K,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,pe),e(E,S),e(S,he),e(E,ae),u(h,N,M),u(h,q,M),e(q,Y),u(h,V,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,fe),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,I),e(I,oe),e(x,me),e(x,P),e(P,te),e(P,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(K),h&&t(E),h&&t(N),h&&t(q),h&&t(V),h&&t(x)}}}function SF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function WF(j){let p,F,g,v,D,_,f,B,ce,K,E,G,L,X,pe,S,he,ae,N,q,Y,V,x,z,ue,W,se,fe,R,ie,ee,A,le,I,oe,me,P,te,U,de;return{c(){p=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),D=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=o("p"),G=a("This second option is useful when using "),L=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),fe=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),oe=a("model([input_ids, attention_mask])"),me=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var J=r(v);D=n(J,"LI",{});var _e=r(D);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),K=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var we=r(S);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),V=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);ue=i(H,"a single Tensor with "),W=n(H,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),fe=i(H," only and nothing else: "),R=n(H,"CODE",{});var De=r(R);ie=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var Fe=r(I);oe=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,D),e(D,_),e(v,f),e(v,B),e(B,ce),u(h,K,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,pe),e(E,S),e(S,he),e(E,ae),u(h,N,M),u(h,q,M),e(q,Y),u(h,V,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,fe),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,I),e(I,oe),e(x,me),e(x,P),e(P,te),e(P,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(K),h&&t(E),h&&t(N),h&&t(q),h&&t(V),h&&t(x)}}}function RF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function UF(j){let p,F,g,v,D,_,f,B,ce,K,E,G,L,X,pe,S,he,ae,N,q,Y,V,x,z,ue,W,se,fe,R,ie,ee,A,le,I,oe,me,P,te,U,de;return{c(){p=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),D=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=o("p"),G=a("This second option is useful when using "),L=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),fe=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),oe=a("model([input_ids, attention_mask])"),me=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var J=r(v);D=n(J,"LI",{});var _e=r(D);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),K=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var we=r(S);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),V=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);ue=i(H,"a single Tensor with "),W=n(H,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),fe=i(H," only and nothing else: "),R=n(H,"CODE",{});var De=r(R);ie=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var Fe=r(I);oe=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,D),e(D,_),e(v,f),e(v,B),e(B,ce),u(h,K,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,pe),e(E,S),e(S,he),e(E,ae),u(h,N,M),u(h,q,M),e(q,Y),u(h,V,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,fe),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,I),e(I,oe),e(x,me),e(x,P),e(P,te),e(P,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(K),h&&t(E),h&&t(N),h&&t(q),h&&t(V),h&&t(x)}}}function HF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function QF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function KF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function VF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function JF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function GF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function XF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function YF(j){let p,F,g,v,D,_,f,B,ce,K,E,G,L,X,pe,S,he,ae,N,q,Y,V,x,z,ue,W,se,fe,R,ie,ee,A,le,I,oe,me,P,te,U,de,h,M,J,_e,Te,O,ve,we,ye,C,H,$e,De,Z,Fe,ne,Be,Tu,wp,bt,wu,Yo,yu,$u,Zo,Du,Fu,en,Bu,Mu,yp,as,Js,Fl,tn,Eu,Bl,xu,$p,Ve,sn,zu,Ct,ju,vi,Cu,Pu,bi,qu,Au,on,Ou,Nu,Iu,is,Lu,ki,Su,Wu,Ti,Ru,Uu,Hu,Ml,Qu,Ku,nn,Dp,ls,Gs,El,rn,Vu,xl,Ju,Fp,_t,an,Gu,zl,Xu,Yu,Xs,wi,Zu,ef,yi,tf,sf,of,ln,nf,$i,rf,af,Bp,ds,Ys,jl,dn,lf,Cl,df,Mp,vt,cn,cf,pn,pf,Pl,hf,uf,ff,Zs,Di,mf,gf,Fi,_f,vf,bf,hn,kf,Bi,Tf,wf,Ep,cs,eo,ql,un,yf,Al,$f,xp,Je,fn,Df,Ol,Ff,Bf,mn,Mf,Mi,Ef,xf,zf,gn,jf,_n,Cf,Pf,qf,tt,vn,Af,ps,Of,Ei,Nf,If,Nl,Lf,Sf,Wf,to,Rf,Il,Uf,Hf,bn,zp,hs,so,Ll,kn,Qf,Sl,Kf,jp,Ge,Tn,Vf,wn,Jf,Wl,Gf,Xf,Yf,yn,Zf,xi,em,tm,sm,$n,om,Dn,nm,rm,am,Se,Fn,im,us,lm,zi,dm,cm,Rl,pm,hm,um,oo,fm,Ul,mm,gm,Bn,_m,Mn,Cp,fs,no,Hl,En,vm,Ql,bm,Pp,Xe,xn,km,Kl,Tm,wm,zn,ym,ji,$m,Dm,Fm,jn,Bm,Cn,Mm,Em,xm,ke,Pn,zm,ms,jm,Ci,Cm,Pm,Vl,qm,Am,Om,ro,Nm,Jl,Im,Lm,qn,Sm,An,Wm,Gl,Rm,Um,On,Hm,Nn,qp,gs,ao,Xl,In,Qm,Yl,Km,Ap,Ye,Ln,Vm,Zl,Jm,Gm,Sn,Xm,Pi,Ym,Zm,eg,Wn,tg,Rn,sg,og,ng,st,Un,rg,_s,ag,qi,ig,lg,ed,dg,cg,pg,io,hg,td,ug,fg,Hn,Op,vs,lo,sd,Qn,mg,od,gg,Np,Ze,Kn,_g,nd,vg,bg,Vn,kg,Ai,Tg,wg,yg,Jn,$g,Gn,Dg,Fg,Bg,We,Xn,Mg,bs,Eg,Oi,xg,zg,rd,jg,Cg,Pg,co,qg,ad,Ag,Og,Yn,Ng,Zn,Ip,ks,po,id,er,Ig,ld,Lg,Lp,et,tr,Sg,Ts,Wg,dd,Rg,Ug,cd,Hg,Qg,Kg,sr,Vg,Ni,Jg,Gg,Xg,or,Yg,nr,Zg,e_,t_,Re,rr,s_,ws,o_,Ii,n_,r_,pd,a_,i_,l_,ho,d_,hd,c_,p_,ar,h_,ir,Sp,ys,uo,ud,lr,u_,fd,f_,Wp,qe,dr,m_,md,g_,__,cr,v_,Li,b_,k_,T_,pr,w_,hr,y_,$_,D_,fo,F_,ot,ur,B_,$s,M_,Si,E_,x_,gd,z_,j_,C_,mo,P_,_d,q_,A_,fr,Rp,Ds,go,vd,mr,O_,bd,N_,Up,Ae,gr,I_,_r,L_,kd,S_,W_,R_,vr,U_,Wi,H_,Q_,K_,br,V_,kr,J_,G_,X_,_o,Y_,Ue,Tr,Z_,Fs,e1,Ri,t1,s1,Td,o1,n1,r1,vo,a1,wd,i1,l1,wr,d1,yr,Hp,Bs,bo,yd,$r,c1,$d,p1,Qp,Oe,Dr,h1,Dd,u1,f1,Fr,m1,Ui,g1,_1,v1,Br,b1,Mr,k1,T1,w1,ko,y1,He,Er,$1,Ms,D1,Hi,F1,B1,Fd,M1,E1,x1,To,z1,Bd,j1,C1,xr,P1,zr,Kp,Es,wo,Md,jr,q1,Ed,A1,Vp,Ne,Cr,O1,xd,N1,I1,Pr,L1,Qi,S1,W1,R1,qr,U1,Ar,H1,Q1,K1,yo,V1,nt,Or,J1,xs,G1,Ki,X1,Y1,zd,Z1,ev,tv,$o,sv,jd,ov,nv,Nr,Jp,zs,Do,Cd,Ir,rv,Pd,av,Gp,Ie,Lr,iv,qd,lv,dv,Sr,cv,Vi,pv,hv,uv,Wr,fv,Rr,mv,gv,_v,Fo,vv,Qe,Ur,bv,js,kv,Ji,Tv,wv,Ad,yv,$v,Dv,Bo,Fv,Od,Bv,Mv,Hr,Ev,Qr,Xp,Cs,Mo,Nd,Kr,xv,Id,zv,Yp,Le,Vr,jv,Ps,Cv,Ld,Pv,qv,Sd,Av,Ov,Nv,Jr,Iv,Gi,Lv,Sv,Wv,Gr,Rv,Xr,Uv,Hv,Qv,Eo,Kv,Ke,Yr,Vv,qs,Jv,Xi,Gv,Xv,Wd,Yv,Zv,eb,xo,tb,Rd,sb,ob,Zr,nb,ea,Zp,As,zo,Ud,ta,rb,Hd,ab,eh,Me,sa,ib,Qd,lb,db,oa,cb,Yi,pb,hb,ub,na,fb,ra,mb,gb,_b,Kd,vb,bb,Pt,Vd,aa,kb,Tb,Jd,ia,wb,yb,Gd,la,$b,Db,Xd,da,Fb,Bb,rt,ca,Mb,Os,Eb,Yd,xb,zb,Zd,jb,Cb,Pb,jo,qb,ec,Ab,Ob,pa,th,Ns,Co,tc,ha,Nb,sc,Ib,sh,Ee,ua,Lb,fa,Sb,oc,Wb,Rb,Ub,ma,Hb,Zi,Qb,Kb,Vb,ga,Jb,_a,Gb,Xb,Yb,nc,Zb,ek,qt,rc,va,tk,sk,ac,ba,ok,nk,ic,ka,rk,ak,lc,Ta,ik,lk,at,wa,dk,Is,ck,dc,pk,hk,cc,uk,fk,mk,Po,gk,pc,_k,vk,ya,oh,Ls,qo,hc,$a,bk,uc,kk,nh,xe,Da,Tk,fc,wk,yk,Fa,$k,el,Dk,Fk,Bk,Ba,Mk,Ma,Ek,xk,zk,mc,jk,Ck,At,gc,Ea,Pk,qk,_c,xa,Ak,Ok,vc,za,Nk,Ik,bc,ja,Lk,Sk,it,Ca,Wk,Ss,Rk,kc,Uk,Hk,Tc,Qk,Kk,Vk,Ao,Jk,wc,Gk,Xk,Pa,rh,Ws,Oo,yc,qa,Yk,$c,Zk,ah,ze,Aa,eT,Dc,tT,sT,Oa,oT,tl,nT,rT,aT,Na,iT,Ia,lT,dT,cT,Fc,pT,hT,Ot,Bc,La,uT,fT,Mc,Sa,mT,gT,Ec,Wa,_T,vT,xc,Ra,bT,kT,lt,Ua,TT,Rs,wT,zc,yT,$T,jc,DT,FT,BT,No,MT,Cc,ET,xT,Ha,ih,Us,Io,Pc,Qa,zT,qc,jT,lh,je,Ka,CT,Ac,PT,qT,Va,AT,sl,OT,NT,IT,Ja,LT,Ga,ST,WT,RT,Oc,UT,HT,Nt,Nc,Xa,QT,KT,Ic,Ya,VT,JT,Lc,Za,GT,XT,Sc,ei,YT,ZT,dt,ti,ew,Hs,tw,Wc,sw,ow,Rc,nw,rw,aw,Lo,iw,Uc,lw,dw,si,dh,Qs,So,Hc,oi,cw,Qc,pw,ch,Ce,ni,hw,Ks,uw,Kc,fw,mw,Vc,gw,_w,vw,ri,bw,ol,kw,Tw,ww,ai,yw,ii,$w,Dw,Fw,Jc,Bw,Mw,It,Gc,li,Ew,xw,Xc,di,zw,jw,Yc,ci,Cw,Pw,Zc,pi,qw,Aw,ct,hi,Ow,Vs,Nw,ep,Iw,Lw,tp,Sw,Ww,Rw,Wo,Uw,sp,Hw,Qw,ui,ph;return _=new be({}),X=new be({}),tn=new be({}),sn=new Q({props:{name:"class transformers.DistilBertConfig",anchor:"transformers.DistilBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"max_position_embeddings",val:" = 512"},{name:"sinusoidal_pos_embds",val:" = False"},{name:"n_layers",val:" = 6"},{name:"n_heads",val:" = 12"},{name:"dim",val:" = 768"},{name:"hidden_dim",val:" = 3072"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"qa_dropout",val:" = 0.1"},{name:"seq_classif_dropout",val:" = 0.2"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/configuration_distilbert.py#L37",parametersDescription:[{anchor:"transformers.DistilBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DistilBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertModel">DistilBertModel</a> or <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.TFDistilBertModel">TFDistilBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.DistilBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DistilBertConfig.sinusoidal_pos_embds",description:`<strong>sinusoidal_pos_embds</strong> (<code>boolean</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use sinusoidal positional embeddings.`,name:"sinusoidal_pos_embds"},{anchor:"transformers.DistilBertConfig.n_layers",description:`<strong>n_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layers"},{anchor:"transformers.DistilBertConfig.n_heads",description:`<strong>n_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_heads"},{anchor:"transformers.DistilBertConfig.dim",description:`<strong>dim</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"dim"},{anchor:"transformers.DistilBertConfig.hidden_dim",description:`<strong>hidden_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
The size of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"hidden_dim"},{anchor:"transformers.DistilBertConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.DistilBertConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.DistilBertConfig.activation",description:`<strong>activation</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation"},{anchor:"transformers.DistilBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DistilBertConfig.qa_dropout",description:`<strong>qa_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilities used in the question answering model <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering">DistilBertForQuestionAnswering</a>.`,name:"qa_dropout"},{anchor:"transformers.DistilBertConfig.seq_classif_dropout",description:`<strong>seq_classif_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.2) &#x2014;
The dropout probabilities used in the sequence classification and the multiple choice model
<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification">DistilBertForSequenceClassification</a>.`,name:"seq_classif_dropout"}]}}),nn=new re({props:{code:`from transformers import DistilBertModel, DistilBertConfig

# Initializing a DistilBERT configuration
configuration = DistilBertConfig()

# Initializing a model from the configuration
model = DistilBertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertModel, DistilBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DistilBERT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DistilBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),rn=new be({}),an=new Q({props:{name:"class transformers.DistilBertTokenizer",anchor:"transformers.DistilBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/tokenization_distilbert.py#L56"}}),dn=new be({}),cn=new Q({props:{name:"class transformers.DistilBertTokenizerFast",anchor:"transformers.DistilBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/tokenization_distilbert_fast.py#L65"}}),un=new be({}),fn=new Q({props:{name:"class transformers.DistilBertModel",anchor:"transformers.DistilBertModel",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L457",parametersDescription:[{anchor:"transformers.DistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new Q({props:{name:"forward",anchor:"transformers.DistilBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L529",parametersDescription:[{anchor:"transformers.DistilBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new ge({props:{$$slots:{default:[MF]},$$scope:{ctx:j}}}),bn=new re({props:{code:`from transformers import DistilBertTokenizer, DistilBertModel
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),kn=new be({}),Tn=new Q({props:{name:"class transformers.DistilBertForMaskedLM",anchor:"transformers.DistilBertForMaskedLM",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L585",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fn=new Q({props:{name:"forward",anchor:"transformers.DistilBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L627",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`,returnType:`
<p><a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new ge({props:{$$slots:{default:[EF]},$$scope:{ctx:j}}}),Bn=new re({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMaskedLM
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),Mn=new re({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),En=new be({}),xn=new Q({props:{name:"class transformers.DistilBertForSequenceClassification",anchor:"transformers.DistilBertForSequenceClassification",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L691",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Pn=new Q({props:{name:"forward",anchor:"transformers.DistilBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L725",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`,returnType:`
<p><a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new ge({props:{$$slots:{default:[xF]},$$scope:{ctx:j}}}),qn=new re({props:{code:`import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),An=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),On=new re({props:{code:`import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Nn=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),In=new be({}),Ln=new Q({props:{name:"class transformers.DistilBertForMultipleChoice",anchor:"transformers.DistilBertForMultipleChoice",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L1021",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Un=new Q({props:{name:"forward",anchor:"transformers.DistilBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L1053",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),io=new ge({props:{$$slots:{default:[zF]},$$scope:{ctx:j}}}),Hn=new re({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMultipleChoice
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-cased")
model = DistilBertForMultipleChoice.from_pretrained("distilbert-base-cased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([[prompt, choice0], [prompt, choice1]], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;distilbert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([[prompt, choice0], [prompt, choice1]], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Qn=new be({}),Kn=new Q({props:{name:"class transformers.DistilBertForTokenClassification",anchor:"transformers.DistilBertForTokenClassification",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L926",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xn=new Q({props:{name:"forward",anchor:"transformers.DistilBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L958",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new ge({props:{$$slots:{default:[jF]},$$scope:{ctx:j}}}),Yn=new re({props:{code:`from transformers import DistilBertTokenizer, DistilBertForTokenClassification
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="pt"
)

with torch.no_grad():
    logits = model(**inputs).logits

predicted_token_class_ids = logits.argmax(-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t.item()] for t in predicted_token_class_ids[0]]
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = logits.argmax(-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t.item()] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
`}}),Zn=new re({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),er=new be({}),tr=new Q({props:{name:"class transformers.DistilBertForQuestionAnswering",anchor:"transformers.DistilBertForQuestionAnswering",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L809",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),rr=new Q({props:{name:"forward",anchor:"transformers.DistilBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L841",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ho=new ge({props:{$$slots:{default:[CF]},$$scope:{ctx:j}}}),ar=new re({props:{code:`from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),ir=new re({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),lr=new be({}),dr=new Q({props:{name:"class transformers.TFDistilBertModel",anchor:"transformers.TFDistilBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L523",parametersDescription:[{anchor:"transformers.TFDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fo=new ge({props:{$$slots:{default:[PF]},$$scope:{ctx:j}}}),ur=new Q({props:{name:"call",anchor:"transformers.TFDistilBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L528",parametersDescription:[{anchor:"transformers.TFDistilBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mo=new ge({props:{$$slots:{default:[qF]},$$scope:{ctx:j}}}),fr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertModel
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),mr=new be({}),gr=new Q({props:{name:"class transformers.TFDistilBertForMaskedLM",anchor:"transformers.TFDistilBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L611",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_o=new ge({props:{$$slots:{default:[AF]},$$scope:{ctx:j}}}),Tr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L631",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`,returnType:`
<p><a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vo=new ge({props:{$$slots:{default:[OF]},$$scope:{ctx:j}}}),wr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMaskedLM
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]

predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),yr=new re({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),$r=new be({}),Dr=new Q({props:{name:"class transformers.TFDistilBertForSequenceClassification",anchor:"transformers.TFDistilBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L702",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ko=new ge({props:{$$slots:{default:[NF]},$$scope:{ctx:j}}}),Er=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L719",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),To=new ge({props:{$$slots:{default:[IF]},$$scope:{ctx:j}}}),xr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForSequenceClassification
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),zr=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),jr=new be({}),Cr=new Q({props:{name:"class transformers.TFDistilBertForMultipleChoice",anchor:"transformers.TFDistilBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L867",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),yo=new ge({props:{$$slots:{default:[LF]},$$scope:{ctx:j}}}),Or=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L893",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(batch_size, )</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$o=new ge({props:{$$slots:{default:[SF]},$$scope:{ctx:j}}}),Nr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMultipleChoice
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForMultipleChoice.from_pretrained("distilbert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ir=new be({}),Lr=new Q({props:{name:"class transformers.TFDistilBertForTokenClassification",anchor:"transformers.TFDistilBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L790",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fo=new ge({props:{$$slots:{default:[WF]},$$scope:{ctx:j}}}),Ur=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L801",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of unmasked labels, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bo=new ge({props:{$$slots:{default:[RF]},$$scope:{ctx:j}}}),Hr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForTokenClassification
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
`}}),Qr=new re({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),Kr=new be({}),Vr=new Q({props:{name:"class transformers.TFDistilBertForQuestionAnswering",anchor:"transformers.TFDistilBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L993",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Eo=new ge({props:{$$slots:{default:[UF]},$$scope:{ctx:j}}}),Yr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1004",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>start_positions</code> and <code>end_positions</code> are provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xo=new ge({props:{$$slots:{default:[HF]},$$scope:{ctx:j}}}),Zr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForQuestionAnswering
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),ea=new re({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),ta=new be({}),sa=new Q({props:{name:"class transformers.FlaxDistilBertModel",anchor:"transformers.FlaxDistilBertModel",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L523",parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ca=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}]}}),jo=new ge({props:{$$slots:{default:[QF]},$$scope:{ctx:j}}}),pa=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertModel

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ha=new be({}),ua=new Q({props:{name:"class transformers.FlaxDistilBertForMaskedLM",anchor:"transformers.FlaxDistilBertForMaskedLM",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L596",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),wa=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new ge({props:{$$slots:{default:[KF]},$$scope:{ctx:j}}}),ya=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMaskedLM

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$a=new be({}),Da=new Q({props:{name:"class transformers.FlaxDistilBertForSequenceClassification",anchor:"transformers.FlaxDistilBertForSequenceClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L665",parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ca=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ao=new ge({props:{$$slots:{default:[VF]},$$scope:{ctx:j}}}),Pa=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),qa=new be({}),Aa=new Q({props:{name:"class transformers.FlaxDistilBertForMultipleChoice",anchor:"transformers.FlaxDistilBertForMultipleChoice",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L745",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ua=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new ge({props:{$$slots:{default:[JF]},$$scope:{ctx:j}}}),Ha=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMultipleChoice

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMultipleChoice.from_pretrained("distilbert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Qa=new be({}),Ka=new Q({props:{name:"class transformers.FlaxDistilBertForTokenClassification",anchor:"transformers.FlaxDistilBertForTokenClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L811",parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ti=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lo=new ge({props:{$$slots:{default:[GF]},$$scope:{ctx:j}}}),si=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForTokenClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),oi=new be({}),ni=new Q({props:{name:"class transformers.FlaxDistilBertForQuestionAnswering",anchor:"transformers.FlaxDistilBertForQuestionAnswering",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L881",parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hi=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wo=new ge({props:{$$slots:{default:[XF]},$$scope:{ctx:j}}}),ui=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){p=o("meta"),F=l(),g=o("h1"),v=o("a"),D=o("span"),b(_.$$.fragment),f=l(),B=o("span"),ce=a("DistilBERT"),K=l(),E=o("h2"),G=o("a"),L=o("span"),b(X.$$.fragment),pe=l(),S=o("span"),he=a("Overview"),ae=l(),N=o("p"),q=a("The DistilBERT model was proposed in the blog post "),Y=o("a"),V=a(`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),x=a(", and the paper "),z=o("a"),ue=a(`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),W=a(`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),se=o("em"),fe=a("bert-base-uncased"),R=a(`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),ie=l(),ee=o("p"),A=a("The abstract from the paper is the following:"),le=l(),I=o("p"),oe=o("em"),me=a(`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),P=l(),te=o("p"),U=a("Tips:"),de=l(),h=o("ul"),M=o("li"),J=a("DistilBERT doesn\u2019t have "),_e=o("code"),Te=a("token_type_ids"),O=a(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ve=o("code"),we=a("tokenizer.sep_token"),ye=a(" (or "),C=o("code"),H=a("[SEP]"),$e=a(")."),De=l(),Z=o("li"),Fe=a("DistilBERT doesn\u2019t have options to select the input positions ("),ne=o("code"),Be=a("position_ids"),Tu=a(` input). This could be added if
necessary though, just let us know if you need this option.`),wp=l(),bt=o("p"),wu=a("This model was contributed by "),Yo=o("a"),yu=a("victorsanh"),$u=a(`. This model jax version was
contributed by `),Zo=o("a"),Du=a("kamalkraj"),Fu=a(". The original code can be found "),en=o("a"),Bu=a("here"),Mu=a("."),yp=l(),as=o("h2"),Js=o("a"),Fl=o("span"),b(tn.$$.fragment),Eu=l(),Bl=o("span"),xu=a("DistilBertConfig"),$p=l(),Ve=o("div"),b(sn.$$.fragment),zu=l(),Ct=o("p"),ju=a("This is the configuration class to store the configuration of a "),vi=o("a"),Cu=a("DistilBertModel"),Pu=a(" or a "),bi=o("a"),qu=a("TFDistilBertModel"),Au=a(`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),on=o("a"),Ou=a("distilbert-base-uncased"),Nu=a(" architecture."),Iu=l(),is=o("p"),Lu=a("Configuration objects inherit from "),ki=o("a"),Su=a("PretrainedConfig"),Wu=a(` and can be used to control the model outputs. Read the
documentation from `),Ti=o("a"),Ru=a("PretrainedConfig"),Uu=a(" for more information."),Hu=l(),Ml=o("p"),Qu=a("Examples:"),Ku=l(),b(nn.$$.fragment),Dp=l(),ls=o("h2"),Gs=o("a"),El=o("span"),b(rn.$$.fragment),Vu=l(),xl=o("span"),Ju=a("DistilBertTokenizer"),Fp=l(),_t=o("div"),b(an.$$.fragment),Gu=l(),zl=o("p"),Xu=a("Construct a DistilBERT tokenizer."),Yu=l(),Xs=o("p"),wi=o("a"),Zu=a("DistilBertTokenizer"),ef=a(" is identical to "),yi=o("a"),tf=a("BertTokenizer"),sf=a(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),of=l(),ln=o("p"),nf=a("Refer to superclass "),$i=o("a"),rf=a("BertTokenizer"),af=a(" for usage examples and documentation concerning parameters."),Bp=l(),ds=o("h2"),Ys=o("a"),jl=o("span"),b(dn.$$.fragment),lf=l(),Cl=o("span"),df=a("DistilBertTokenizerFast"),Mp=l(),vt=o("div"),b(cn.$$.fragment),cf=l(),pn=o("p"),pf=a("Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Pl=o("em"),hf=a("tokenizers"),uf=a(" library)."),ff=l(),Zs=o("p"),Di=o("a"),mf=a("DistilBertTokenizerFast"),gf=a(" is identical to "),Fi=o("a"),_f=a("BertTokenizerFast"),vf=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),bf=l(),hn=o("p"),kf=a("Refer to superclass "),Bi=o("a"),Tf=a("BertTokenizerFast"),wf=a(" for usage examples and documentation concerning parameters."),Ep=l(),cs=o("h2"),eo=o("a"),ql=o("span"),b(un.$$.fragment),yf=l(),Al=o("span"),$f=a("DistilBertModel"),xp=l(),Je=o("div"),b(fn.$$.fragment),Df=l(),Ol=o("p"),Ff=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),Bf=l(),mn=o("p"),Mf=a("This model inherits from "),Mi=o("a"),Ef=a("PreTrainedModel"),xf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zf=l(),gn=o("p"),jf=a("This model is also a PyTorch "),_n=o("a"),Cf=a("torch.nn.Module"),Pf=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qf=l(),tt=o("div"),b(vn.$$.fragment),Af=l(),ps=o("p"),Of=a("The "),Ei=o("a"),Nf=a("DistilBertModel"),If=a(" forward method, overrides the "),Nl=o("code"),Lf=a("__call__"),Sf=a(" special method."),Wf=l(),b(to.$$.fragment),Rf=l(),Il=o("p"),Uf=a("Example:"),Hf=l(),b(bn.$$.fragment),zp=l(),hs=o("h2"),so=o("a"),Ll=o("span"),b(kn.$$.fragment),Qf=l(),Sl=o("span"),Kf=a("DistilBertForMaskedLM"),jp=l(),Ge=o("div"),b(Tn.$$.fragment),Vf=l(),wn=o("p"),Jf=a("DistilBert Model with a "),Wl=o("code"),Gf=a("masked language modeling"),Xf=a(" head on top."),Yf=l(),yn=o("p"),Zf=a("This model inherits from "),xi=o("a"),em=a("PreTrainedModel"),tm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sm=l(),$n=o("p"),om=a("This model is also a PyTorch "),Dn=o("a"),nm=a("torch.nn.Module"),rm=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),am=l(),Se=o("div"),b(Fn.$$.fragment),im=l(),us=o("p"),lm=a("The "),zi=o("a"),dm=a("DistilBertForMaskedLM"),cm=a(" forward method, overrides the "),Rl=o("code"),pm=a("__call__"),hm=a(" special method."),um=l(),b(oo.$$.fragment),fm=l(),Ul=o("p"),mm=a("Example:"),gm=l(),b(Bn.$$.fragment),_m=l(),b(Mn.$$.fragment),Cp=l(),fs=o("h2"),no=o("a"),Hl=o("span"),b(En.$$.fragment),vm=l(),Ql=o("span"),bm=a("DistilBertForSequenceClassification"),Pp=l(),Xe=o("div"),b(xn.$$.fragment),km=l(),Kl=o("p"),Tm=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wm=l(),zn=o("p"),ym=a("This model inherits from "),ji=o("a"),$m=a("PreTrainedModel"),Dm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fm=l(),jn=o("p"),Bm=a("This model is also a PyTorch "),Cn=o("a"),Mm=a("torch.nn.Module"),Em=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xm=l(),ke=o("div"),b(Pn.$$.fragment),zm=l(),ms=o("p"),jm=a("The "),Ci=o("a"),Cm=a("DistilBertForSequenceClassification"),Pm=a(" forward method, overrides the "),Vl=o("code"),qm=a("__call__"),Am=a(" special method."),Om=l(),b(ro.$$.fragment),Nm=l(),Jl=o("p"),Im=a("Example of single-label classification:"),Lm=l(),b(qn.$$.fragment),Sm=l(),b(An.$$.fragment),Wm=l(),Gl=o("p"),Rm=a("Example of multi-label classification:"),Um=l(),b(On.$$.fragment),Hm=l(),b(Nn.$$.fragment),qp=l(),gs=o("h2"),ao=o("a"),Xl=o("span"),b(In.$$.fragment),Qm=l(),Yl=o("span"),Km=a("DistilBertForMultipleChoice"),Ap=l(),Ye=o("div"),b(Ln.$$.fragment),Vm=l(),Zl=o("p"),Jm=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Gm=l(),Sn=o("p"),Xm=a("This model inherits from "),Pi=o("a"),Ym=a("PreTrainedModel"),Zm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eg=l(),Wn=o("p"),tg=a("This model is also a PyTorch "),Rn=o("a"),sg=a("torch.nn.Module"),og=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ng=l(),st=o("div"),b(Un.$$.fragment),rg=l(),_s=o("p"),ag=a("The "),qi=o("a"),ig=a("DistilBertForMultipleChoice"),lg=a(" forward method, overrides the "),ed=o("code"),dg=a("__call__"),cg=a(" special method."),pg=l(),b(io.$$.fragment),hg=l(),td=o("p"),ug=a("Examples:"),fg=l(),b(Hn.$$.fragment),Op=l(),vs=o("h2"),lo=o("a"),sd=o("span"),b(Qn.$$.fragment),mg=l(),od=o("span"),gg=a("DistilBertForTokenClassification"),Np=l(),Ze=o("div"),b(Kn.$$.fragment),_g=l(),nd=o("p"),vg=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),bg=l(),Vn=o("p"),kg=a("This model inherits from "),Ai=o("a"),Tg=a("PreTrainedModel"),wg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yg=l(),Jn=o("p"),$g=a("This model is also a PyTorch "),Gn=o("a"),Dg=a("torch.nn.Module"),Fg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bg=l(),We=o("div"),b(Xn.$$.fragment),Mg=l(),bs=o("p"),Eg=a("The "),Oi=o("a"),xg=a("DistilBertForTokenClassification"),zg=a(" forward method, overrides the "),rd=o("code"),jg=a("__call__"),Cg=a(" special method."),Pg=l(),b(co.$$.fragment),qg=l(),ad=o("p"),Ag=a("Example:"),Og=l(),b(Yn.$$.fragment),Ng=l(),b(Zn.$$.fragment),Ip=l(),ks=o("h2"),po=o("a"),id=o("span"),b(er.$$.fragment),Ig=l(),ld=o("span"),Lg=a("DistilBertForQuestionAnswering"),Lp=l(),et=o("div"),b(tr.$$.fragment),Sg=l(),Ts=o("p"),Wg=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),dd=o("code"),Rg=a("span start logits"),Ug=a(" and "),cd=o("code"),Hg=a("span end logits"),Qg=a(")."),Kg=l(),sr=o("p"),Vg=a("This model inherits from "),Ni=o("a"),Jg=a("PreTrainedModel"),Gg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xg=l(),or=o("p"),Yg=a("This model is also a PyTorch "),nr=o("a"),Zg=a("torch.nn.Module"),e_=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),t_=l(),Re=o("div"),b(rr.$$.fragment),s_=l(),ws=o("p"),o_=a("The "),Ii=o("a"),n_=a("DistilBertForQuestionAnswering"),r_=a(" forward method, overrides the "),pd=o("code"),a_=a("__call__"),i_=a(" special method."),l_=l(),b(ho.$$.fragment),d_=l(),hd=o("p"),c_=a("Example:"),p_=l(),b(ar.$$.fragment),h_=l(),b(ir.$$.fragment),Sp=l(),ys=o("h2"),uo=o("a"),ud=o("span"),b(lr.$$.fragment),u_=l(),fd=o("span"),f_=a("TFDistilBertModel"),Wp=l(),qe=o("div"),b(dr.$$.fragment),m_=l(),md=o("p"),g_=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),__=l(),cr=o("p"),v_=a("This model inherits from "),Li=o("a"),b_=a("TFPreTrainedModel"),k_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),T_=l(),pr=o("p"),w_=a("This model is also a "),hr=o("a"),y_=a("tf.keras.Model"),$_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),D_=l(),b(fo.$$.fragment),F_=l(),ot=o("div"),b(ur.$$.fragment),B_=l(),$s=o("p"),M_=a("The "),Si=o("a"),E_=a("TFDistilBertModel"),x_=a(" forward method, overrides the "),gd=o("code"),z_=a("__call__"),j_=a(" special method."),C_=l(),b(mo.$$.fragment),P_=l(),_d=o("p"),q_=a("Example:"),A_=l(),b(fr.$$.fragment),Rp=l(),Ds=o("h2"),go=o("a"),vd=o("span"),b(mr.$$.fragment),O_=l(),bd=o("span"),N_=a("TFDistilBertForMaskedLM"),Up=l(),Ae=o("div"),b(gr.$$.fragment),I_=l(),_r=o("p"),L_=a("DistilBert Model with a "),kd=o("code"),S_=a("masked language modeling"),W_=a(" head on top."),R_=l(),vr=o("p"),U_=a("This model inherits from "),Wi=o("a"),H_=a("TFPreTrainedModel"),Q_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),K_=l(),br=o("p"),V_=a("This model is also a "),kr=o("a"),J_=a("tf.keras.Model"),G_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),X_=l(),b(_o.$$.fragment),Y_=l(),Ue=o("div"),b(Tr.$$.fragment),Z_=l(),Fs=o("p"),e1=a("The "),Ri=o("a"),t1=a("TFDistilBertForMaskedLM"),s1=a(" forward method, overrides the "),Td=o("code"),o1=a("__call__"),n1=a(" special method."),r1=l(),b(vo.$$.fragment),a1=l(),wd=o("p"),i1=a("Example:"),l1=l(),b(wr.$$.fragment),d1=l(),b(yr.$$.fragment),Hp=l(),Bs=o("h2"),bo=o("a"),yd=o("span"),b($r.$$.fragment),c1=l(),$d=o("span"),p1=a("TFDistilBertForSequenceClassification"),Qp=l(),Oe=o("div"),b(Dr.$$.fragment),h1=l(),Dd=o("p"),u1=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),f1=l(),Fr=o("p"),m1=a("This model inherits from "),Ui=o("a"),g1=a("TFPreTrainedModel"),_1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),v1=l(),Br=o("p"),b1=a("This model is also a "),Mr=o("a"),k1=a("tf.keras.Model"),T1=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),w1=l(),b(ko.$$.fragment),y1=l(),He=o("div"),b(Er.$$.fragment),$1=l(),Ms=o("p"),D1=a("The "),Hi=o("a"),F1=a("TFDistilBertForSequenceClassification"),B1=a(" forward method, overrides the "),Fd=o("code"),M1=a("__call__"),E1=a(" special method."),x1=l(),b(To.$$.fragment),z1=l(),Bd=o("p"),j1=a("Example:"),C1=l(),b(xr.$$.fragment),P1=l(),b(zr.$$.fragment),Kp=l(),Es=o("h2"),wo=o("a"),Md=o("span"),b(jr.$$.fragment),q1=l(),Ed=o("span"),A1=a("TFDistilBertForMultipleChoice"),Vp=l(),Ne=o("div"),b(Cr.$$.fragment),O1=l(),xd=o("p"),N1=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),I1=l(),Pr=o("p"),L1=a("This model inherits from "),Qi=o("a"),S1=a("TFPreTrainedModel"),W1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),R1=l(),qr=o("p"),U1=a("This model is also a "),Ar=o("a"),H1=a("tf.keras.Model"),Q1=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),K1=l(),b(yo.$$.fragment),V1=l(),nt=o("div"),b(Or.$$.fragment),J1=l(),xs=o("p"),G1=a("The "),Ki=o("a"),X1=a("TFDistilBertForMultipleChoice"),Y1=a(" forward method, overrides the "),zd=o("code"),Z1=a("__call__"),ev=a(" special method."),tv=l(),b($o.$$.fragment),sv=l(),jd=o("p"),ov=a("Example:"),nv=l(),b(Nr.$$.fragment),Jp=l(),zs=o("h2"),Do=o("a"),Cd=o("span"),b(Ir.$$.fragment),rv=l(),Pd=o("span"),av=a("TFDistilBertForTokenClassification"),Gp=l(),Ie=o("div"),b(Lr.$$.fragment),iv=l(),qd=o("p"),lv=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),dv=l(),Sr=o("p"),cv=a("This model inherits from "),Vi=o("a"),pv=a("TFPreTrainedModel"),hv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uv=l(),Wr=o("p"),fv=a("This model is also a "),Rr=o("a"),mv=a("tf.keras.Model"),gv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_v=l(),b(Fo.$$.fragment),vv=l(),Qe=o("div"),b(Ur.$$.fragment),bv=l(),js=o("p"),kv=a("The "),Ji=o("a"),Tv=a("TFDistilBertForTokenClassification"),wv=a(" forward method, overrides the "),Ad=o("code"),yv=a("__call__"),$v=a(" special method."),Dv=l(),b(Bo.$$.fragment),Fv=l(),Od=o("p"),Bv=a("Example:"),Mv=l(),b(Hr.$$.fragment),Ev=l(),b(Qr.$$.fragment),Xp=l(),Cs=o("h2"),Mo=o("a"),Nd=o("span"),b(Kr.$$.fragment),xv=l(),Id=o("span"),zv=a("TFDistilBertForQuestionAnswering"),Yp=l(),Le=o("div"),b(Vr.$$.fragment),jv=l(),Ps=o("p"),Cv=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Ld=o("code"),Pv=a("span start logits"),qv=a(" and "),Sd=o("code"),Av=a("span end logits"),Ov=a(")."),Nv=l(),Jr=o("p"),Iv=a("This model inherits from "),Gi=o("a"),Lv=a("TFPreTrainedModel"),Sv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wv=l(),Gr=o("p"),Rv=a("This model is also a "),Xr=o("a"),Uv=a("tf.keras.Model"),Hv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qv=l(),b(Eo.$$.fragment),Kv=l(),Ke=o("div"),b(Yr.$$.fragment),Vv=l(),qs=o("p"),Jv=a("The "),Xi=o("a"),Gv=a("TFDistilBertForQuestionAnswering"),Xv=a(" forward method, overrides the "),Wd=o("code"),Yv=a("__call__"),Zv=a(" special method."),eb=l(),b(xo.$$.fragment),tb=l(),Rd=o("p"),sb=a("Example:"),ob=l(),b(Zr.$$.fragment),nb=l(),b(ea.$$.fragment),Zp=l(),As=o("h2"),zo=o("a"),Ud=o("span"),b(ta.$$.fragment),rb=l(),Hd=o("span"),ab=a("FlaxDistilBertModel"),eh=l(),Me=o("div"),b(sa.$$.fragment),ib=l(),Qd=o("p"),lb=a("The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),db=l(),oa=o("p"),cb=a("This model inherits from "),Yi=o("a"),pb=a("FlaxPreTrainedModel"),hb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ub=l(),na=o("p"),fb=a("This model is also a Flax Linen "),ra=o("a"),mb=a("flax.linen.Module"),gb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_b=l(),Kd=o("p"),vb=a("Finally, this model supports inherent JAX features such as:"),bb=l(),Pt=o("ul"),Vd=o("li"),aa=o("a"),kb=a("Just-In-Time (JIT) compilation"),Tb=l(),Jd=o("li"),ia=o("a"),wb=a("Automatic Differentiation"),yb=l(),Gd=o("li"),la=o("a"),$b=a("Vectorization"),Db=l(),Xd=o("li"),da=o("a"),Fb=a("Parallelization"),Bb=l(),rt=o("div"),b(ca.$$.fragment),Mb=l(),Os=o("p"),Eb=a("The "),Yd=o("code"),xb=a("FlaxDistilBertPreTrainedModel"),zb=a("forward method, overrides the "),Zd=o("code"),jb=a("__call__"),Cb=a(" special method."),Pb=l(),b(jo.$$.fragment),qb=l(),ec=o("p"),Ab=a("Example:"),Ob=l(),b(pa.$$.fragment),th=l(),Ns=o("h2"),Co=o("a"),tc=o("span"),b(ha.$$.fragment),Nb=l(),sc=o("span"),Ib=a("FlaxDistilBertForMaskedLM"),sh=l(),Ee=o("div"),b(ua.$$.fragment),Lb=l(),fa=o("p"),Sb=a("DistilBert Model with a "),oc=o("code"),Wb=a("language modeling"),Rb=a(" head on top."),Ub=l(),ma=o("p"),Hb=a("This model inherits from "),Zi=o("a"),Qb=a("FlaxPreTrainedModel"),Kb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Vb=l(),ga=o("p"),Jb=a("This model is also a Flax Linen "),_a=o("a"),Gb=a("flax.linen.Module"),Xb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Yb=l(),nc=o("p"),Zb=a("Finally, this model supports inherent JAX features such as:"),ek=l(),qt=o("ul"),rc=o("li"),va=o("a"),tk=a("Just-In-Time (JIT) compilation"),sk=l(),ac=o("li"),ba=o("a"),ok=a("Automatic Differentiation"),nk=l(),ic=o("li"),ka=o("a"),rk=a("Vectorization"),ak=l(),lc=o("li"),Ta=o("a"),ik=a("Parallelization"),lk=l(),at=o("div"),b(wa.$$.fragment),dk=l(),Is=o("p"),ck=a("The "),dc=o("code"),pk=a("FlaxDistilBertPreTrainedModel"),hk=a("forward method, overrides the "),cc=o("code"),uk=a("__call__"),fk=a(" special method."),mk=l(),b(Po.$$.fragment),gk=l(),pc=o("p"),_k=a("Example:"),vk=l(),b(ya.$$.fragment),oh=l(),Ls=o("h2"),qo=o("a"),hc=o("span"),b($a.$$.fragment),bk=l(),uc=o("span"),kk=a("FlaxDistilBertForSequenceClassification"),nh=l(),xe=o("div"),b(Da.$$.fragment),Tk=l(),fc=o("p"),wk=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),yk=l(),Fa=o("p"),$k=a("This model inherits from "),el=o("a"),Dk=a("FlaxPreTrainedModel"),Fk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Bk=l(),Ba=o("p"),Mk=a("This model is also a Flax Linen "),Ma=o("a"),Ek=a("flax.linen.Module"),xk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zk=l(),mc=o("p"),jk=a("Finally, this model supports inherent JAX features such as:"),Ck=l(),At=o("ul"),gc=o("li"),Ea=o("a"),Pk=a("Just-In-Time (JIT) compilation"),qk=l(),_c=o("li"),xa=o("a"),Ak=a("Automatic Differentiation"),Ok=l(),vc=o("li"),za=o("a"),Nk=a("Vectorization"),Ik=l(),bc=o("li"),ja=o("a"),Lk=a("Parallelization"),Sk=l(),it=o("div"),b(Ca.$$.fragment),Wk=l(),Ss=o("p"),Rk=a("The "),kc=o("code"),Uk=a("FlaxDistilBertPreTrainedModel"),Hk=a("forward method, overrides the "),Tc=o("code"),Qk=a("__call__"),Kk=a(" special method."),Vk=l(),b(Ao.$$.fragment),Jk=l(),wc=o("p"),Gk=a("Example:"),Xk=l(),b(Pa.$$.fragment),rh=l(),Ws=o("h2"),Oo=o("a"),yc=o("span"),b(qa.$$.fragment),Yk=l(),$c=o("span"),Zk=a("FlaxDistilBertForMultipleChoice"),ah=l(),ze=o("div"),b(Aa.$$.fragment),eT=l(),Dc=o("p"),tT=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),sT=l(),Oa=o("p"),oT=a("This model inherits from "),tl=o("a"),nT=a("FlaxPreTrainedModel"),rT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),aT=l(),Na=o("p"),iT=a("This model is also a Flax Linen "),Ia=o("a"),lT=a("flax.linen.Module"),dT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cT=l(),Fc=o("p"),pT=a("Finally, this model supports inherent JAX features such as:"),hT=l(),Ot=o("ul"),Bc=o("li"),La=o("a"),uT=a("Just-In-Time (JIT) compilation"),fT=l(),Mc=o("li"),Sa=o("a"),mT=a("Automatic Differentiation"),gT=l(),Ec=o("li"),Wa=o("a"),_T=a("Vectorization"),vT=l(),xc=o("li"),Ra=o("a"),bT=a("Parallelization"),kT=l(),lt=o("div"),b(Ua.$$.fragment),TT=l(),Rs=o("p"),wT=a("The "),zc=o("code"),yT=a("FlaxDistilBertPreTrainedModel"),$T=a("forward method, overrides the "),jc=o("code"),DT=a("__call__"),FT=a(" special method."),BT=l(),b(No.$$.fragment),MT=l(),Cc=o("p"),ET=a("Example:"),xT=l(),b(Ha.$$.fragment),ih=l(),Us=o("h2"),Io=o("a"),Pc=o("span"),b(Qa.$$.fragment),zT=l(),qc=o("span"),jT=a("FlaxDistilBertForTokenClassification"),lh=l(),je=o("div"),b(Ka.$$.fragment),CT=l(),Ac=o("p"),PT=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),qT=l(),Va=o("p"),AT=a("This model inherits from "),sl=o("a"),OT=a("FlaxPreTrainedModel"),NT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),IT=l(),Ja=o("p"),LT=a("This model is also a Flax Linen "),Ga=o("a"),ST=a("flax.linen.Module"),WT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),RT=l(),Oc=o("p"),UT=a("Finally, this model supports inherent JAX features such as:"),HT=l(),Nt=o("ul"),Nc=o("li"),Xa=o("a"),QT=a("Just-In-Time (JIT) compilation"),KT=l(),Ic=o("li"),Ya=o("a"),VT=a("Automatic Differentiation"),JT=l(),Lc=o("li"),Za=o("a"),GT=a("Vectorization"),XT=l(),Sc=o("li"),ei=o("a"),YT=a("Parallelization"),ZT=l(),dt=o("div"),b(ti.$$.fragment),ew=l(),Hs=o("p"),tw=a("The "),Wc=o("code"),sw=a("FlaxDistilBertPreTrainedModel"),ow=a("forward method, overrides the "),Rc=o("code"),nw=a("__call__"),rw=a(" special method."),aw=l(),b(Lo.$$.fragment),iw=l(),Uc=o("p"),lw=a("Example:"),dw=l(),b(si.$$.fragment),dh=l(),Qs=o("h2"),So=o("a"),Hc=o("span"),b(oi.$$.fragment),cw=l(),Qc=o("span"),pw=a("FlaxDistilBertForQuestionAnswering"),ch=l(),Ce=o("div"),b(ni.$$.fragment),hw=l(),Ks=o("p"),uw=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Kc=o("code"),fw=a("span start logits"),mw=a(" and "),Vc=o("code"),gw=a("span end logits"),_w=a(")."),vw=l(),ri=o("p"),bw=a("This model inherits from "),ol=o("a"),kw=a("FlaxPreTrainedModel"),Tw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ww=l(),ai=o("p"),yw=a("This model is also a Flax Linen "),ii=o("a"),$w=a("flax.linen.Module"),Dw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fw=l(),Jc=o("p"),Bw=a("Finally, this model supports inherent JAX features such as:"),Mw=l(),It=o("ul"),Gc=o("li"),li=o("a"),Ew=a("Just-In-Time (JIT) compilation"),xw=l(),Xc=o("li"),di=o("a"),zw=a("Automatic Differentiation"),jw=l(),Yc=o("li"),ci=o("a"),Cw=a("Vectorization"),Pw=l(),Zc=o("li"),pi=o("a"),qw=a("Parallelization"),Aw=l(),ct=o("div"),b(hi.$$.fragment),Ow=l(),Vs=o("p"),Nw=a("The "),ep=o("code"),Iw=a("FlaxDistilBertPreTrainedModel"),Lw=a("forward method, overrides the "),tp=o("code"),Sw=a("__call__"),Ww=a(" special method."),Rw=l(),b(Wo.$$.fragment),Uw=l(),sp=o("p"),Hw=a("Example:"),Qw=l(),b(ui.$$.fragment),this.h()},l(s){const m=FF('[data-svelte="svelte-1phssyn"]',document.head);p=n(m,"META",{name:!0,content:!0}),m.forEach(t),F=d(s),g=n(s,"H1",{class:!0});var fi=r(g);v=n(fi,"A",{id:!0,class:!0,href:!0});var op=r(v);D=n(op,"SPAN",{});var np=r(D);k(_.$$.fragment,np),np.forEach(t),op.forEach(t),f=d(fi),B=n(fi,"SPAN",{});var rp=r(B);ce=i(rp,"DistilBERT"),rp.forEach(t),fi.forEach(t),K=d(s),E=n(s,"H2",{class:!0});var mi=r(E);G=n(mi,"A",{id:!0,class:!0,href:!0});var ap=r(G);L=n(ap,"SPAN",{});var ip=r(L);k(X.$$.fragment,ip),ip.forEach(t),ap.forEach(t),pe=d(mi),S=n(mi,"SPAN",{});var lp=r(S);he=i(lp,"Overview"),lp.forEach(t),mi.forEach(t),ae=d(s),N=n(s,"P",{});var Lt=r(N);q=i(Lt,"The DistilBERT model was proposed in the blog post "),Y=n(Lt,"A",{href:!0,rel:!0});var dp=r(Y);V=i(dp,`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),dp.forEach(t),x=i(Lt,", and the paper "),z=n(Lt,"A",{href:!0,rel:!0});var cp=r(z);ue=i(cp,`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),cp.forEach(t),W=i(Lt,`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),se=n(Lt,"EM",{});var pp=r(se);fe=i(pp,"bert-base-uncased"),pp.forEach(t),R=i(Lt,`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),Lt.forEach(t),ie=d(s),ee=n(s,"P",{});var hp=r(ee);A=i(hp,"The abstract from the paper is the following:"),hp.forEach(t),le=d(s),I=n(s,"P",{});var up=r(I);oe=n(up,"EM",{});var fp=r(oe);me=i(fp,`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),fp.forEach(t),up.forEach(t),P=d(s),te=n(s,"P",{});var mp=r(te);U=i(mp,"Tips:"),mp.forEach(t),de=d(s),h=n(s,"UL",{});var gi=r(h);M=n(gi,"LI",{});var St=r(M);J=i(St,"DistilBERT doesn\u2019t have "),_e=n(St,"CODE",{});var gp=r(_e);Te=i(gp,"token_type_ids"),gp.forEach(t),O=i(St,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ve=n(St,"CODE",{});var _p=r(ve);we=i(_p,"tokenizer.sep_token"),_p.forEach(t),ye=i(St," (or "),C=n(St,"CODE",{});var vp=r(C);H=i(vp,"[SEP]"),vp.forEach(t),$e=i(St,")."),St.forEach(t),De=d(gi),Z=n(gi,"LI",{});var _i=r(Z);Fe=i(_i,"DistilBERT doesn\u2019t have options to select the input positions ("),ne=n(_i,"CODE",{});var bp=r(ne);Be=i(bp,"position_ids"),bp.forEach(t),Tu=i(_i,` input). This could be added if
necessary though, just let us know if you need this option.`),_i.forEach(t),gi.forEach(t),wp=d(s),bt=n(s,"P",{});var Wt=r(bt);wu=i(Wt,"This model was contributed by "),Yo=n(Wt,"A",{href:!0,rel:!0});var Kw=r(Yo);yu=i(Kw,"victorsanh"),Kw.forEach(t),$u=i(Wt,`. This model jax version was
contributed by `),Zo=n(Wt,"A",{href:!0,rel:!0});var Vw=r(Zo);Du=i(Vw,"kamalkraj"),Vw.forEach(t),Fu=i(Wt,". The original code can be found "),en=n(Wt,"A",{href:!0,rel:!0});var Jw=r(en);Bu=i(Jw,"here"),Jw.forEach(t),Mu=i(Wt,"."),Wt.forEach(t),yp=d(s),as=n(s,"H2",{class:!0});var hh=r(as);Js=n(hh,"A",{id:!0,class:!0,href:!0});var Gw=r(Js);Fl=n(Gw,"SPAN",{});var Xw=r(Fl);k(tn.$$.fragment,Xw),Xw.forEach(t),Gw.forEach(t),Eu=d(hh),Bl=n(hh,"SPAN",{});var Yw=r(Bl);xu=i(Yw,"DistilBertConfig"),Yw.forEach(t),hh.forEach(t),$p=d(s),Ve=n(s,"DIV",{class:!0});var Rt=r(Ve);k(sn.$$.fragment,Rt),zu=d(Rt),Ct=n(Rt,"P",{});var Ro=r(Ct);ju=i(Ro,"This is the configuration class to store the configuration of a "),vi=n(Ro,"A",{href:!0});var Zw=r(vi);Cu=i(Zw,"DistilBertModel"),Zw.forEach(t),Pu=i(Ro," or a "),bi=n(Ro,"A",{href:!0});var ey=r(bi);qu=i(ey,"TFDistilBertModel"),ey.forEach(t),Au=i(Ro,`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),on=n(Ro,"A",{href:!0,rel:!0});var ty=r(on);Ou=i(ty,"distilbert-base-uncased"),ty.forEach(t),Nu=i(Ro," architecture."),Ro.forEach(t),Iu=d(Rt),is=n(Rt,"P",{});var nl=r(is);Lu=i(nl,"Configuration objects inherit from "),ki=n(nl,"A",{href:!0});var sy=r(ki);Su=i(sy,"PretrainedConfig"),sy.forEach(t),Wu=i(nl,` and can be used to control the model outputs. Read the
documentation from `),Ti=n(nl,"A",{href:!0});var oy=r(Ti);Ru=i(oy,"PretrainedConfig"),oy.forEach(t),Uu=i(nl," for more information."),nl.forEach(t),Hu=d(Rt),Ml=n(Rt,"P",{});var ny=r(Ml);Qu=i(ny,"Examples:"),ny.forEach(t),Ku=d(Rt),k(nn.$$.fragment,Rt),Rt.forEach(t),Dp=d(s),ls=n(s,"H2",{class:!0});var uh=r(ls);Gs=n(uh,"A",{id:!0,class:!0,href:!0});var ry=r(Gs);El=n(ry,"SPAN",{});var ay=r(El);k(rn.$$.fragment,ay),ay.forEach(t),ry.forEach(t),Vu=d(uh),xl=n(uh,"SPAN",{});var iy=r(xl);Ju=i(iy,"DistilBertTokenizer"),iy.forEach(t),uh.forEach(t),Fp=d(s),_t=n(s,"DIV",{class:!0});var Uo=r(_t);k(an.$$.fragment,Uo),Gu=d(Uo),zl=n(Uo,"P",{});var ly=r(zl);Xu=i(ly,"Construct a DistilBERT tokenizer."),ly.forEach(t),Yu=d(Uo),Xs=n(Uo,"P",{});var kp=r(Xs);wi=n(kp,"A",{href:!0});var dy=r(wi);Zu=i(dy,"DistilBertTokenizer"),dy.forEach(t),ef=i(kp," is identical to "),yi=n(kp,"A",{href:!0});var cy=r(yi);tf=i(cy,"BertTokenizer"),cy.forEach(t),sf=i(kp,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),kp.forEach(t),of=d(Uo),ln=n(Uo,"P",{});var fh=r(ln);nf=i(fh,"Refer to superclass "),$i=n(fh,"A",{href:!0});var py=r($i);rf=i(py,"BertTokenizer"),py.forEach(t),af=i(fh," for usage examples and documentation concerning parameters."),fh.forEach(t),Uo.forEach(t),Bp=d(s),ds=n(s,"H2",{class:!0});var mh=r(ds);Ys=n(mh,"A",{id:!0,class:!0,href:!0});var hy=r(Ys);jl=n(hy,"SPAN",{});var uy=r(jl);k(dn.$$.fragment,uy),uy.forEach(t),hy.forEach(t),lf=d(mh),Cl=n(mh,"SPAN",{});var fy=r(Cl);df=i(fy,"DistilBertTokenizerFast"),fy.forEach(t),mh.forEach(t),Mp=d(s),vt=n(s,"DIV",{class:!0});var Ho=r(vt);k(cn.$$.fragment,Ho),cf=d(Ho),pn=n(Ho,"P",{});var gh=r(pn);pf=i(gh,"Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Pl=n(gh,"EM",{});var my=r(Pl);hf=i(my,"tokenizers"),my.forEach(t),uf=i(gh," library)."),gh.forEach(t),ff=d(Ho),Zs=n(Ho,"P",{});var Tp=r(Zs);Di=n(Tp,"A",{href:!0});var gy=r(Di);mf=i(gy,"DistilBertTokenizerFast"),gy.forEach(t),gf=i(Tp," is identical to "),Fi=n(Tp,"A",{href:!0});var _y=r(Fi);_f=i(_y,"BertTokenizerFast"),_y.forEach(t),vf=i(Tp,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Tp.forEach(t),bf=d(Ho),hn=n(Ho,"P",{});var _h=r(hn);kf=i(_h,"Refer to superclass "),Bi=n(_h,"A",{href:!0});var vy=r(Bi);Tf=i(vy,"BertTokenizerFast"),vy.forEach(t),wf=i(_h," for usage examples and documentation concerning parameters."),_h.forEach(t),Ho.forEach(t),Ep=d(s),cs=n(s,"H2",{class:!0});var vh=r(cs);eo=n(vh,"A",{id:!0,class:!0,href:!0});var by=r(eo);ql=n(by,"SPAN",{});var ky=r(ql);k(un.$$.fragment,ky),ky.forEach(t),by.forEach(t),yf=d(vh),Al=n(vh,"SPAN",{});var Ty=r(Al);$f=i(Ty,"DistilBertModel"),Ty.forEach(t),vh.forEach(t),xp=d(s),Je=n(s,"DIV",{class:!0});var Ut=r(Je);k(fn.$$.fragment,Ut),Df=d(Ut),Ol=n(Ut,"P",{});var wy=r(Ol);Ff=i(wy,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),wy.forEach(t),Bf=d(Ut),mn=n(Ut,"P",{});var bh=r(mn);Mf=i(bh,"This model inherits from "),Mi=n(bh,"A",{href:!0});var yy=r(Mi);Ef=i(yy,"PreTrainedModel"),yy.forEach(t),xf=i(bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bh.forEach(t),zf=d(Ut),gn=n(Ut,"P",{});var kh=r(gn);jf=i(kh,"This model is also a PyTorch "),_n=n(kh,"A",{href:!0,rel:!0});var $y=r(_n);Cf=i($y,"torch.nn.Module"),$y.forEach(t),Pf=i(kh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kh.forEach(t),qf=d(Ut),tt=n(Ut,"DIV",{class:!0});var Ht=r(tt);k(vn.$$.fragment,Ht),Af=d(Ht),ps=n(Ht,"P",{});var rl=r(ps);Of=i(rl,"The "),Ei=n(rl,"A",{href:!0});var Dy=r(Ei);Nf=i(Dy,"DistilBertModel"),Dy.forEach(t),If=i(rl," forward method, overrides the "),Nl=n(rl,"CODE",{});var Fy=r(Nl);Lf=i(Fy,"__call__"),Fy.forEach(t),Sf=i(rl," special method."),rl.forEach(t),Wf=d(Ht),k(to.$$.fragment,Ht),Rf=d(Ht),Il=n(Ht,"P",{});var By=r(Il);Uf=i(By,"Example:"),By.forEach(t),Hf=d(Ht),k(bn.$$.fragment,Ht),Ht.forEach(t),Ut.forEach(t),zp=d(s),hs=n(s,"H2",{class:!0});var Th=r(hs);so=n(Th,"A",{id:!0,class:!0,href:!0});var My=r(so);Ll=n(My,"SPAN",{});var Ey=r(Ll);k(kn.$$.fragment,Ey),Ey.forEach(t),My.forEach(t),Qf=d(Th),Sl=n(Th,"SPAN",{});var xy=r(Sl);Kf=i(xy,"DistilBertForMaskedLM"),xy.forEach(t),Th.forEach(t),jp=d(s),Ge=n(s,"DIV",{class:!0});var Qt=r(Ge);k(Tn.$$.fragment,Qt),Vf=d(Qt),wn=n(Qt,"P",{});var wh=r(wn);Jf=i(wh,"DistilBert Model with a "),Wl=n(wh,"CODE",{});var zy=r(Wl);Gf=i(zy,"masked language modeling"),zy.forEach(t),Xf=i(wh," head on top."),wh.forEach(t),Yf=d(Qt),yn=n(Qt,"P",{});var yh=r(yn);Zf=i(yh,"This model inherits from "),xi=n(yh,"A",{href:!0});var jy=r(xi);em=i(jy,"PreTrainedModel"),jy.forEach(t),tm=i(yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh.forEach(t),sm=d(Qt),$n=n(Qt,"P",{});var $h=r($n);om=i($h,"This model is also a PyTorch "),Dn=n($h,"A",{href:!0,rel:!0});var Cy=r(Dn);nm=i(Cy,"torch.nn.Module"),Cy.forEach(t),rm=i($h,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$h.forEach(t),am=d(Qt),Se=n(Qt,"DIV",{class:!0});var kt=r(Se);k(Fn.$$.fragment,kt),im=d(kt),us=n(kt,"P",{});var al=r(us);lm=i(al,"The "),zi=n(al,"A",{href:!0});var Py=r(zi);dm=i(Py,"DistilBertForMaskedLM"),Py.forEach(t),cm=i(al," forward method, overrides the "),Rl=n(al,"CODE",{});var qy=r(Rl);pm=i(qy,"__call__"),qy.forEach(t),hm=i(al," special method."),al.forEach(t),um=d(kt),k(oo.$$.fragment,kt),fm=d(kt),Ul=n(kt,"P",{});var Ay=r(Ul);mm=i(Ay,"Example:"),Ay.forEach(t),gm=d(kt),k(Bn.$$.fragment,kt),_m=d(kt),k(Mn.$$.fragment,kt),kt.forEach(t),Qt.forEach(t),Cp=d(s),fs=n(s,"H2",{class:!0});var Dh=r(fs);no=n(Dh,"A",{id:!0,class:!0,href:!0});var Oy=r(no);Hl=n(Oy,"SPAN",{});var Ny=r(Hl);k(En.$$.fragment,Ny),Ny.forEach(t),Oy.forEach(t),vm=d(Dh),Ql=n(Dh,"SPAN",{});var Iy=r(Ql);bm=i(Iy,"DistilBertForSequenceClassification"),Iy.forEach(t),Dh.forEach(t),Pp=d(s),Xe=n(s,"DIV",{class:!0});var Kt=r(Xe);k(xn.$$.fragment,Kt),km=d(Kt),Kl=n(Kt,"P",{});var Ly=r(Kl);Tm=i(Ly,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ly.forEach(t),wm=d(Kt),zn=n(Kt,"P",{});var Fh=r(zn);ym=i(Fh,"This model inherits from "),ji=n(Fh,"A",{href:!0});var Sy=r(ji);$m=i(Sy,"PreTrainedModel"),Sy.forEach(t),Dm=i(Fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fh.forEach(t),Fm=d(Kt),jn=n(Kt,"P",{});var Bh=r(jn);Bm=i(Bh,"This model is also a PyTorch "),Cn=n(Bh,"A",{href:!0,rel:!0});var Wy=r(Cn);Mm=i(Wy,"torch.nn.Module"),Wy.forEach(t),Em=i(Bh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bh.forEach(t),xm=d(Kt),ke=n(Kt,"DIV",{class:!0});var Pe=r(ke);k(Pn.$$.fragment,Pe),zm=d(Pe),ms=n(Pe,"P",{});var il=r(ms);jm=i(il,"The "),Ci=n(il,"A",{href:!0});var Ry=r(Ci);Cm=i(Ry,"DistilBertForSequenceClassification"),Ry.forEach(t),Pm=i(il," forward method, overrides the "),Vl=n(il,"CODE",{});var Uy=r(Vl);qm=i(Uy,"__call__"),Uy.forEach(t),Am=i(il," special method."),il.forEach(t),Om=d(Pe),k(ro.$$.fragment,Pe),Nm=d(Pe),Jl=n(Pe,"P",{});var Hy=r(Jl);Im=i(Hy,"Example of single-label classification:"),Hy.forEach(t),Lm=d(Pe),k(qn.$$.fragment,Pe),Sm=d(Pe),k(An.$$.fragment,Pe),Wm=d(Pe),Gl=n(Pe,"P",{});var Qy=r(Gl);Rm=i(Qy,"Example of multi-label classification:"),Qy.forEach(t),Um=d(Pe),k(On.$$.fragment,Pe),Hm=d(Pe),k(Nn.$$.fragment,Pe),Pe.forEach(t),Kt.forEach(t),qp=d(s),gs=n(s,"H2",{class:!0});var Mh=r(gs);ao=n(Mh,"A",{id:!0,class:!0,href:!0});var Ky=r(ao);Xl=n(Ky,"SPAN",{});var Vy=r(Xl);k(In.$$.fragment,Vy),Vy.forEach(t),Ky.forEach(t),Qm=d(Mh),Yl=n(Mh,"SPAN",{});var Jy=r(Yl);Km=i(Jy,"DistilBertForMultipleChoice"),Jy.forEach(t),Mh.forEach(t),Ap=d(s),Ye=n(s,"DIV",{class:!0});var Vt=r(Ye);k(Ln.$$.fragment,Vt),Vm=d(Vt),Zl=n(Vt,"P",{});var Gy=r(Zl);Jm=i(Gy,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Gy.forEach(t),Gm=d(Vt),Sn=n(Vt,"P",{});var Eh=r(Sn);Xm=i(Eh,"This model inherits from "),Pi=n(Eh,"A",{href:!0});var Xy=r(Pi);Ym=i(Xy,"PreTrainedModel"),Xy.forEach(t),Zm=i(Eh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eh.forEach(t),eg=d(Vt),Wn=n(Vt,"P",{});var xh=r(Wn);tg=i(xh,"This model is also a PyTorch "),Rn=n(xh,"A",{href:!0,rel:!0});var Yy=r(Rn);sg=i(Yy,"torch.nn.Module"),Yy.forEach(t),og=i(xh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xh.forEach(t),ng=d(Vt),st=n(Vt,"DIV",{class:!0});var Jt=r(st);k(Un.$$.fragment,Jt),rg=d(Jt),_s=n(Jt,"P",{});var ll=r(_s);ag=i(ll,"The "),qi=n(ll,"A",{href:!0});var Zy=r(qi);ig=i(Zy,"DistilBertForMultipleChoice"),Zy.forEach(t),lg=i(ll," forward method, overrides the "),ed=n(ll,"CODE",{});var e2=r(ed);dg=i(e2,"__call__"),e2.forEach(t),cg=i(ll," special method."),ll.forEach(t),pg=d(Jt),k(io.$$.fragment,Jt),hg=d(Jt),td=n(Jt,"P",{});var t2=r(td);ug=i(t2,"Examples:"),t2.forEach(t),fg=d(Jt),k(Hn.$$.fragment,Jt),Jt.forEach(t),Vt.forEach(t),Op=d(s),vs=n(s,"H2",{class:!0});var zh=r(vs);lo=n(zh,"A",{id:!0,class:!0,href:!0});var s2=r(lo);sd=n(s2,"SPAN",{});var o2=r(sd);k(Qn.$$.fragment,o2),o2.forEach(t),s2.forEach(t),mg=d(zh),od=n(zh,"SPAN",{});var n2=r(od);gg=i(n2,"DistilBertForTokenClassification"),n2.forEach(t),zh.forEach(t),Np=d(s),Ze=n(s,"DIV",{class:!0});var Gt=r(Ze);k(Kn.$$.fragment,Gt),_g=d(Gt),nd=n(Gt,"P",{});var r2=r(nd);vg=i(r2,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),r2.forEach(t),bg=d(Gt),Vn=n(Gt,"P",{});var jh=r(Vn);kg=i(jh,"This model inherits from "),Ai=n(jh,"A",{href:!0});var a2=r(Ai);Tg=i(a2,"PreTrainedModel"),a2.forEach(t),wg=i(jh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jh.forEach(t),yg=d(Gt),Jn=n(Gt,"P",{});var Ch=r(Jn);$g=i(Ch,"This model is also a PyTorch "),Gn=n(Ch,"A",{href:!0,rel:!0});var i2=r(Gn);Dg=i(i2,"torch.nn.Module"),i2.forEach(t),Fg=i(Ch,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ch.forEach(t),Bg=d(Gt),We=n(Gt,"DIV",{class:!0});var Tt=r(We);k(Xn.$$.fragment,Tt),Mg=d(Tt),bs=n(Tt,"P",{});var dl=r(bs);Eg=i(dl,"The "),Oi=n(dl,"A",{href:!0});var l2=r(Oi);xg=i(l2,"DistilBertForTokenClassification"),l2.forEach(t),zg=i(dl," forward method, overrides the "),rd=n(dl,"CODE",{});var d2=r(rd);jg=i(d2,"__call__"),d2.forEach(t),Cg=i(dl," special method."),dl.forEach(t),Pg=d(Tt),k(co.$$.fragment,Tt),qg=d(Tt),ad=n(Tt,"P",{});var c2=r(ad);Ag=i(c2,"Example:"),c2.forEach(t),Og=d(Tt),k(Yn.$$.fragment,Tt),Ng=d(Tt),k(Zn.$$.fragment,Tt),Tt.forEach(t),Gt.forEach(t),Ip=d(s),ks=n(s,"H2",{class:!0});var Ph=r(ks);po=n(Ph,"A",{id:!0,class:!0,href:!0});var p2=r(po);id=n(p2,"SPAN",{});var h2=r(id);k(er.$$.fragment,h2),h2.forEach(t),p2.forEach(t),Ig=d(Ph),ld=n(Ph,"SPAN",{});var u2=r(ld);Lg=i(u2,"DistilBertForQuestionAnswering"),u2.forEach(t),Ph.forEach(t),Lp=d(s),et=n(s,"DIV",{class:!0});var Xt=r(et);k(tr.$$.fragment,Xt),Sg=d(Xt),Ts=n(Xt,"P",{});var cl=r(Ts);Wg=i(cl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),dd=n(cl,"CODE",{});var f2=r(dd);Rg=i(f2,"span start logits"),f2.forEach(t),Ug=i(cl," and "),cd=n(cl,"CODE",{});var m2=r(cd);Hg=i(m2,"span end logits"),m2.forEach(t),Qg=i(cl,")."),cl.forEach(t),Kg=d(Xt),sr=n(Xt,"P",{});var qh=r(sr);Vg=i(qh,"This model inherits from "),Ni=n(qh,"A",{href:!0});var g2=r(Ni);Jg=i(g2,"PreTrainedModel"),g2.forEach(t),Gg=i(qh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qh.forEach(t),Xg=d(Xt),or=n(Xt,"P",{});var Ah=r(or);Yg=i(Ah,"This model is also a PyTorch "),nr=n(Ah,"A",{href:!0,rel:!0});var _2=r(nr);Zg=i(_2,"torch.nn.Module"),_2.forEach(t),e_=i(Ah,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ah.forEach(t),t_=d(Xt),Re=n(Xt,"DIV",{class:!0});var wt=r(Re);k(rr.$$.fragment,wt),s_=d(wt),ws=n(wt,"P",{});var pl=r(ws);o_=i(pl,"The "),Ii=n(pl,"A",{href:!0});var v2=r(Ii);n_=i(v2,"DistilBertForQuestionAnswering"),v2.forEach(t),r_=i(pl," forward method, overrides the "),pd=n(pl,"CODE",{});var b2=r(pd);a_=i(b2,"__call__"),b2.forEach(t),i_=i(pl," special method."),pl.forEach(t),l_=d(wt),k(ho.$$.fragment,wt),d_=d(wt),hd=n(wt,"P",{});var k2=r(hd);c_=i(k2,"Example:"),k2.forEach(t),p_=d(wt),k(ar.$$.fragment,wt),h_=d(wt),k(ir.$$.fragment,wt),wt.forEach(t),Xt.forEach(t),Sp=d(s),ys=n(s,"H2",{class:!0});var Oh=r(ys);uo=n(Oh,"A",{id:!0,class:!0,href:!0});var T2=r(uo);ud=n(T2,"SPAN",{});var w2=r(ud);k(lr.$$.fragment,w2),w2.forEach(t),T2.forEach(t),u_=d(Oh),fd=n(Oh,"SPAN",{});var y2=r(fd);f_=i(y2,"TFDistilBertModel"),y2.forEach(t),Oh.forEach(t),Wp=d(s),qe=n(s,"DIV",{class:!0});var yt=r(qe);k(dr.$$.fragment,yt),m_=d(yt),md=n(yt,"P",{});var $2=r(md);g_=i($2,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),$2.forEach(t),__=d(yt),cr=n(yt,"P",{});var Nh=r(cr);v_=i(Nh,"This model inherits from "),Li=n(Nh,"A",{href:!0});var D2=r(Li);b_=i(D2,"TFPreTrainedModel"),D2.forEach(t),k_=i(Nh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nh.forEach(t),T_=d(yt),pr=n(yt,"P",{});var Ih=r(pr);w_=i(Ih,"This model is also a "),hr=n(Ih,"A",{href:!0,rel:!0});var F2=r(hr);y_=i(F2,"tf.keras.Model"),F2.forEach(t),$_=i(Ih,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ih.forEach(t),D_=d(yt),k(fo.$$.fragment,yt),F_=d(yt),ot=n(yt,"DIV",{class:!0});var Yt=r(ot);k(ur.$$.fragment,Yt),B_=d(Yt),$s=n(Yt,"P",{});var hl=r($s);M_=i(hl,"The "),Si=n(hl,"A",{href:!0});var B2=r(Si);E_=i(B2,"TFDistilBertModel"),B2.forEach(t),x_=i(hl," forward method, overrides the "),gd=n(hl,"CODE",{});var M2=r(gd);z_=i(M2,"__call__"),M2.forEach(t),j_=i(hl," special method."),hl.forEach(t),C_=d(Yt),k(mo.$$.fragment,Yt),P_=d(Yt),_d=n(Yt,"P",{});var E2=r(_d);q_=i(E2,"Example:"),E2.forEach(t),A_=d(Yt),k(fr.$$.fragment,Yt),Yt.forEach(t),yt.forEach(t),Rp=d(s),Ds=n(s,"H2",{class:!0});var Lh=r(Ds);go=n(Lh,"A",{id:!0,class:!0,href:!0});var x2=r(go);vd=n(x2,"SPAN",{});var z2=r(vd);k(mr.$$.fragment,z2),z2.forEach(t),x2.forEach(t),O_=d(Lh),bd=n(Lh,"SPAN",{});var j2=r(bd);N_=i(j2,"TFDistilBertForMaskedLM"),j2.forEach(t),Lh.forEach(t),Up=d(s),Ae=n(s,"DIV",{class:!0});var $t=r(Ae);k(gr.$$.fragment,$t),I_=d($t),_r=n($t,"P",{});var Sh=r(_r);L_=i(Sh,"DistilBert Model with a "),kd=n(Sh,"CODE",{});var C2=r(kd);S_=i(C2,"masked language modeling"),C2.forEach(t),W_=i(Sh," head on top."),Sh.forEach(t),R_=d($t),vr=n($t,"P",{});var Wh=r(vr);U_=i(Wh,"This model inherits from "),Wi=n(Wh,"A",{href:!0});var P2=r(Wi);H_=i(P2,"TFPreTrainedModel"),P2.forEach(t),Q_=i(Wh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wh.forEach(t),K_=d($t),br=n($t,"P",{});var Rh=r(br);V_=i(Rh,"This model is also a "),kr=n(Rh,"A",{href:!0,rel:!0});var q2=r(kr);J_=i(q2,"tf.keras.Model"),q2.forEach(t),G_=i(Rh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rh.forEach(t),X_=d($t),k(_o.$$.fragment,$t),Y_=d($t),Ue=n($t,"DIV",{class:!0});var Dt=r(Ue);k(Tr.$$.fragment,Dt),Z_=d(Dt),Fs=n(Dt,"P",{});var ul=r(Fs);e1=i(ul,"The "),Ri=n(ul,"A",{href:!0});var A2=r(Ri);t1=i(A2,"TFDistilBertForMaskedLM"),A2.forEach(t),s1=i(ul," forward method, overrides the "),Td=n(ul,"CODE",{});var O2=r(Td);o1=i(O2,"__call__"),O2.forEach(t),n1=i(ul," special method."),ul.forEach(t),r1=d(Dt),k(vo.$$.fragment,Dt),a1=d(Dt),wd=n(Dt,"P",{});var N2=r(wd);i1=i(N2,"Example:"),N2.forEach(t),l1=d(Dt),k(wr.$$.fragment,Dt),d1=d(Dt),k(yr.$$.fragment,Dt),Dt.forEach(t),$t.forEach(t),Hp=d(s),Bs=n(s,"H2",{class:!0});var Uh=r(Bs);bo=n(Uh,"A",{id:!0,class:!0,href:!0});var I2=r(bo);yd=n(I2,"SPAN",{});var L2=r(yd);k($r.$$.fragment,L2),L2.forEach(t),I2.forEach(t),c1=d(Uh),$d=n(Uh,"SPAN",{});var S2=r($d);p1=i(S2,"TFDistilBertForSequenceClassification"),S2.forEach(t),Uh.forEach(t),Qp=d(s),Oe=n(s,"DIV",{class:!0});var Ft=r(Oe);k(Dr.$$.fragment,Ft),h1=d(Ft),Dd=n(Ft,"P",{});var W2=r(Dd);u1=i(W2,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),W2.forEach(t),f1=d(Ft),Fr=n(Ft,"P",{});var Hh=r(Fr);m1=i(Hh,"This model inherits from "),Ui=n(Hh,"A",{href:!0});var R2=r(Ui);g1=i(R2,"TFPreTrainedModel"),R2.forEach(t),_1=i(Hh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hh.forEach(t),v1=d(Ft),Br=n(Ft,"P",{});var Qh=r(Br);b1=i(Qh,"This model is also a "),Mr=n(Qh,"A",{href:!0,rel:!0});var U2=r(Mr);k1=i(U2,"tf.keras.Model"),U2.forEach(t),T1=i(Qh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qh.forEach(t),w1=d(Ft),k(ko.$$.fragment,Ft),y1=d(Ft),He=n(Ft,"DIV",{class:!0});var Bt=r(He);k(Er.$$.fragment,Bt),$1=d(Bt),Ms=n(Bt,"P",{});var fl=r(Ms);D1=i(fl,"The "),Hi=n(fl,"A",{href:!0});var H2=r(Hi);F1=i(H2,"TFDistilBertForSequenceClassification"),H2.forEach(t),B1=i(fl," forward method, overrides the "),Fd=n(fl,"CODE",{});var Q2=r(Fd);M1=i(Q2,"__call__"),Q2.forEach(t),E1=i(fl," special method."),fl.forEach(t),x1=d(Bt),k(To.$$.fragment,Bt),z1=d(Bt),Bd=n(Bt,"P",{});var K2=r(Bd);j1=i(K2,"Example:"),K2.forEach(t),C1=d(Bt),k(xr.$$.fragment,Bt),P1=d(Bt),k(zr.$$.fragment,Bt),Bt.forEach(t),Ft.forEach(t),Kp=d(s),Es=n(s,"H2",{class:!0});var Kh=r(Es);wo=n(Kh,"A",{id:!0,class:!0,href:!0});var V2=r(wo);Md=n(V2,"SPAN",{});var J2=r(Md);k(jr.$$.fragment,J2),J2.forEach(t),V2.forEach(t),q1=d(Kh),Ed=n(Kh,"SPAN",{});var G2=r(Ed);A1=i(G2,"TFDistilBertForMultipleChoice"),G2.forEach(t),Kh.forEach(t),Vp=d(s),Ne=n(s,"DIV",{class:!0});var Mt=r(Ne);k(Cr.$$.fragment,Mt),O1=d(Mt),xd=n(Mt,"P",{});var X2=r(xd);N1=i(X2,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),X2.forEach(t),I1=d(Mt),Pr=n(Mt,"P",{});var Vh=r(Pr);L1=i(Vh,"This model inherits from "),Qi=n(Vh,"A",{href:!0});var Y2=r(Qi);S1=i(Y2,"TFPreTrainedModel"),Y2.forEach(t),W1=i(Vh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vh.forEach(t),R1=d(Mt),qr=n(Mt,"P",{});var Jh=r(qr);U1=i(Jh,"This model is also a "),Ar=n(Jh,"A",{href:!0,rel:!0});var Z2=r(Ar);H1=i(Z2,"tf.keras.Model"),Z2.forEach(t),Q1=i(Jh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jh.forEach(t),K1=d(Mt),k(yo.$$.fragment,Mt),V1=d(Mt),nt=n(Mt,"DIV",{class:!0});var Zt=r(nt);k(Or.$$.fragment,Zt),J1=d(Zt),xs=n(Zt,"P",{});var ml=r(xs);G1=i(ml,"The "),Ki=n(ml,"A",{href:!0});var e$=r(Ki);X1=i(e$,"TFDistilBertForMultipleChoice"),e$.forEach(t),Y1=i(ml," forward method, overrides the "),zd=n(ml,"CODE",{});var t$=r(zd);Z1=i(t$,"__call__"),t$.forEach(t),ev=i(ml," special method."),ml.forEach(t),tv=d(Zt),k($o.$$.fragment,Zt),sv=d(Zt),jd=n(Zt,"P",{});var s$=r(jd);ov=i(s$,"Example:"),s$.forEach(t),nv=d(Zt),k(Nr.$$.fragment,Zt),Zt.forEach(t),Mt.forEach(t),Jp=d(s),zs=n(s,"H2",{class:!0});var Gh=r(zs);Do=n(Gh,"A",{id:!0,class:!0,href:!0});var o$=r(Do);Cd=n(o$,"SPAN",{});var n$=r(Cd);k(Ir.$$.fragment,n$),n$.forEach(t),o$.forEach(t),rv=d(Gh),Pd=n(Gh,"SPAN",{});var r$=r(Pd);av=i(r$,"TFDistilBertForTokenClassification"),r$.forEach(t),Gh.forEach(t),Gp=d(s),Ie=n(s,"DIV",{class:!0});var Et=r(Ie);k(Lr.$$.fragment,Et),iv=d(Et),qd=n(Et,"P",{});var a$=r(qd);lv=i(a$,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),a$.forEach(t),dv=d(Et),Sr=n(Et,"P",{});var Xh=r(Sr);cv=i(Xh,"This model inherits from "),Vi=n(Xh,"A",{href:!0});var i$=r(Vi);pv=i(i$,"TFPreTrainedModel"),i$.forEach(t),hv=i(Xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xh.forEach(t),uv=d(Et),Wr=n(Et,"P",{});var Yh=r(Wr);fv=i(Yh,"This model is also a "),Rr=n(Yh,"A",{href:!0,rel:!0});var l$=r(Rr);mv=i(l$,"tf.keras.Model"),l$.forEach(t),gv=i(Yh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yh.forEach(t),_v=d(Et),k(Fo.$$.fragment,Et),vv=d(Et),Qe=n(Et,"DIV",{class:!0});var xt=r(Qe);k(Ur.$$.fragment,xt),bv=d(xt),js=n(xt,"P",{});var gl=r(js);kv=i(gl,"The "),Ji=n(gl,"A",{href:!0});var d$=r(Ji);Tv=i(d$,"TFDistilBertForTokenClassification"),d$.forEach(t),wv=i(gl," forward method, overrides the "),Ad=n(gl,"CODE",{});var c$=r(Ad);yv=i(c$,"__call__"),c$.forEach(t),$v=i(gl," special method."),gl.forEach(t),Dv=d(xt),k(Bo.$$.fragment,xt),Fv=d(xt),Od=n(xt,"P",{});var p$=r(Od);Bv=i(p$,"Example:"),p$.forEach(t),Mv=d(xt),k(Hr.$$.fragment,xt),Ev=d(xt),k(Qr.$$.fragment,xt),xt.forEach(t),Et.forEach(t),Xp=d(s),Cs=n(s,"H2",{class:!0});var Zh=r(Cs);Mo=n(Zh,"A",{id:!0,class:!0,href:!0});var h$=r(Mo);Nd=n(h$,"SPAN",{});var u$=r(Nd);k(Kr.$$.fragment,u$),u$.forEach(t),h$.forEach(t),xv=d(Zh),Id=n(Zh,"SPAN",{});var f$=r(Id);zv=i(f$,"TFDistilBertForQuestionAnswering"),f$.forEach(t),Zh.forEach(t),Yp=d(s),Le=n(s,"DIV",{class:!0});var zt=r(Le);k(Vr.$$.fragment,zt),jv=d(zt),Ps=n(zt,"P",{});var _l=r(Ps);Cv=i(_l,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Ld=n(_l,"CODE",{});var m$=r(Ld);Pv=i(m$,"span start logits"),m$.forEach(t),qv=i(_l," and "),Sd=n(_l,"CODE",{});var g$=r(Sd);Av=i(g$,"span end logits"),g$.forEach(t),Ov=i(_l,")."),_l.forEach(t),Nv=d(zt),Jr=n(zt,"P",{});var eu=r(Jr);Iv=i(eu,"This model inherits from "),Gi=n(eu,"A",{href:!0});var _$=r(Gi);Lv=i(_$,"TFPreTrainedModel"),_$.forEach(t),Sv=i(eu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eu.forEach(t),Wv=d(zt),Gr=n(zt,"P",{});var tu=r(Gr);Rv=i(tu,"This model is also a "),Xr=n(tu,"A",{href:!0,rel:!0});var v$=r(Xr);Uv=i(v$,"tf.keras.Model"),v$.forEach(t),Hv=i(tu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tu.forEach(t),Qv=d(zt),k(Eo.$$.fragment,zt),Kv=d(zt),Ke=n(zt,"DIV",{class:!0});var jt=r(Ke);k(Yr.$$.fragment,jt),Vv=d(jt),qs=n(jt,"P",{});var vl=r(qs);Jv=i(vl,"The "),Xi=n(vl,"A",{href:!0});var b$=r(Xi);Gv=i(b$,"TFDistilBertForQuestionAnswering"),b$.forEach(t),Xv=i(vl," forward method, overrides the "),Wd=n(vl,"CODE",{});var k$=r(Wd);Yv=i(k$,"__call__"),k$.forEach(t),Zv=i(vl," special method."),vl.forEach(t),eb=d(jt),k(xo.$$.fragment,jt),tb=d(jt),Rd=n(jt,"P",{});var T$=r(Rd);sb=i(T$,"Example:"),T$.forEach(t),ob=d(jt),k(Zr.$$.fragment,jt),nb=d(jt),k(ea.$$.fragment,jt),jt.forEach(t),zt.forEach(t),Zp=d(s),As=n(s,"H2",{class:!0});var su=r(As);zo=n(su,"A",{id:!0,class:!0,href:!0});var w$=r(zo);Ud=n(w$,"SPAN",{});var y$=r(Ud);k(ta.$$.fragment,y$),y$.forEach(t),w$.forEach(t),rb=d(su),Hd=n(su,"SPAN",{});var $$=r(Hd);ab=i($$,"FlaxDistilBertModel"),$$.forEach(t),su.forEach(t),eh=d(s),Me=n(s,"DIV",{class:!0});var pt=r(Me);k(sa.$$.fragment,pt),ib=d(pt),Qd=n(pt,"P",{});var D$=r(Qd);lb=i(D$,"The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),D$.forEach(t),db=d(pt),oa=n(pt,"P",{});var ou=r(oa);cb=i(ou,"This model inherits from "),Yi=n(ou,"A",{href:!0});var F$=r(Yi);pb=i(F$,"FlaxPreTrainedModel"),F$.forEach(t),hb=i(ou,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ou.forEach(t),ub=d(pt),na=n(pt,"P",{});var nu=r(na);fb=i(nu,"This model is also a Flax Linen "),ra=n(nu,"A",{href:!0,rel:!0});var B$=r(ra);mb=i(B$,"flax.linen.Module"),B$.forEach(t),gb=i(nu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),nu.forEach(t),_b=d(pt),Kd=n(pt,"P",{});var M$=r(Kd);vb=i(M$,"Finally, this model supports inherent JAX features such as:"),M$.forEach(t),bb=d(pt),Pt=n(pt,"UL",{});var Qo=r(Pt);Vd=n(Qo,"LI",{});var E$=r(Vd);aa=n(E$,"A",{href:!0,rel:!0});var x$=r(aa);kb=i(x$,"Just-In-Time (JIT) compilation"),x$.forEach(t),E$.forEach(t),Tb=d(Qo),Jd=n(Qo,"LI",{});var z$=r(Jd);ia=n(z$,"A",{href:!0,rel:!0});var j$=r(ia);wb=i(j$,"Automatic Differentiation"),j$.forEach(t),z$.forEach(t),yb=d(Qo),Gd=n(Qo,"LI",{});var C$=r(Gd);la=n(C$,"A",{href:!0,rel:!0});var P$=r(la);$b=i(P$,"Vectorization"),P$.forEach(t),C$.forEach(t),Db=d(Qo),Xd=n(Qo,"LI",{});var q$=r(Xd);da=n(q$,"A",{href:!0,rel:!0});var A$=r(da);Fb=i(A$,"Parallelization"),A$.forEach(t),q$.forEach(t),Qo.forEach(t),Bb=d(pt),rt=n(pt,"DIV",{class:!0});var es=r(rt);k(ca.$$.fragment,es),Mb=d(es),Os=n(es,"P",{});var bl=r(Os);Eb=i(bl,"The "),Yd=n(bl,"CODE",{});var O$=r(Yd);xb=i(O$,"FlaxDistilBertPreTrainedModel"),O$.forEach(t),zb=i(bl,"forward method, overrides the "),Zd=n(bl,"CODE",{});var N$=r(Zd);jb=i(N$,"__call__"),N$.forEach(t),Cb=i(bl," special method."),bl.forEach(t),Pb=d(es),k(jo.$$.fragment,es),qb=d(es),ec=n(es,"P",{});var I$=r(ec);Ab=i(I$,"Example:"),I$.forEach(t),Ob=d(es),k(pa.$$.fragment,es),es.forEach(t),pt.forEach(t),th=d(s),Ns=n(s,"H2",{class:!0});var ru=r(Ns);Co=n(ru,"A",{id:!0,class:!0,href:!0});var L$=r(Co);tc=n(L$,"SPAN",{});var S$=r(tc);k(ha.$$.fragment,S$),S$.forEach(t),L$.forEach(t),Nb=d(ru),sc=n(ru,"SPAN",{});var W$=r(sc);Ib=i(W$,"FlaxDistilBertForMaskedLM"),W$.forEach(t),ru.forEach(t),sh=d(s),Ee=n(s,"DIV",{class:!0});var ht=r(Ee);k(ua.$$.fragment,ht),Lb=d(ht),fa=n(ht,"P",{});var au=r(fa);Sb=i(au,"DistilBert Model with a "),oc=n(au,"CODE",{});var R$=r(oc);Wb=i(R$,"language modeling"),R$.forEach(t),Rb=i(au," head on top."),au.forEach(t),Ub=d(ht),ma=n(ht,"P",{});var iu=r(ma);Hb=i(iu,"This model inherits from "),Zi=n(iu,"A",{href:!0});var U$=r(Zi);Qb=i(U$,"FlaxPreTrainedModel"),U$.forEach(t),Kb=i(iu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),iu.forEach(t),Vb=d(ht),ga=n(ht,"P",{});var lu=r(ga);Jb=i(lu,"This model is also a Flax Linen "),_a=n(lu,"A",{href:!0,rel:!0});var H$=r(_a);Gb=i(H$,"flax.linen.Module"),H$.forEach(t),Xb=i(lu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lu.forEach(t),Yb=d(ht),nc=n(ht,"P",{});var Q$=r(nc);Zb=i(Q$,"Finally, this model supports inherent JAX features such as:"),Q$.forEach(t),ek=d(ht),qt=n(ht,"UL",{});var Ko=r(qt);rc=n(Ko,"LI",{});var K$=r(rc);va=n(K$,"A",{href:!0,rel:!0});var V$=r(va);tk=i(V$,"Just-In-Time (JIT) compilation"),V$.forEach(t),K$.forEach(t),sk=d(Ko),ac=n(Ko,"LI",{});var J$=r(ac);ba=n(J$,"A",{href:!0,rel:!0});var G$=r(ba);ok=i(G$,"Automatic Differentiation"),G$.forEach(t),J$.forEach(t),nk=d(Ko),ic=n(Ko,"LI",{});var X$=r(ic);ka=n(X$,"A",{href:!0,rel:!0});var Y$=r(ka);rk=i(Y$,"Vectorization"),Y$.forEach(t),X$.forEach(t),ak=d(Ko),lc=n(Ko,"LI",{});var Z$=r(lc);Ta=n(Z$,"A",{href:!0,rel:!0});var eD=r(Ta);ik=i(eD,"Parallelization"),eD.forEach(t),Z$.forEach(t),Ko.forEach(t),lk=d(ht),at=n(ht,"DIV",{class:!0});var ts=r(at);k(wa.$$.fragment,ts),dk=d(ts),Is=n(ts,"P",{});var kl=r(Is);ck=i(kl,"The "),dc=n(kl,"CODE",{});var tD=r(dc);pk=i(tD,"FlaxDistilBertPreTrainedModel"),tD.forEach(t),hk=i(kl,"forward method, overrides the "),cc=n(kl,"CODE",{});var sD=r(cc);uk=i(sD,"__call__"),sD.forEach(t),fk=i(kl," special method."),kl.forEach(t),mk=d(ts),k(Po.$$.fragment,ts),gk=d(ts),pc=n(ts,"P",{});var oD=r(pc);_k=i(oD,"Example:"),oD.forEach(t),vk=d(ts),k(ya.$$.fragment,ts),ts.forEach(t),ht.forEach(t),oh=d(s),Ls=n(s,"H2",{class:!0});var du=r(Ls);qo=n(du,"A",{id:!0,class:!0,href:!0});var nD=r(qo);hc=n(nD,"SPAN",{});var rD=r(hc);k($a.$$.fragment,rD),rD.forEach(t),nD.forEach(t),bk=d(du),uc=n(du,"SPAN",{});var aD=r(uc);kk=i(aD,"FlaxDistilBertForSequenceClassification"),aD.forEach(t),du.forEach(t),nh=d(s),xe=n(s,"DIV",{class:!0});var ut=r(xe);k(Da.$$.fragment,ut),Tk=d(ut),fc=n(ut,"P",{});var iD=r(fc);wk=i(iD,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),iD.forEach(t),yk=d(ut),Fa=n(ut,"P",{});var cu=r(Fa);$k=i(cu,"This model inherits from "),el=n(cu,"A",{href:!0});var lD=r(el);Dk=i(lD,"FlaxPreTrainedModel"),lD.forEach(t),Fk=i(cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cu.forEach(t),Bk=d(ut),Ba=n(ut,"P",{});var pu=r(Ba);Mk=i(pu,"This model is also a Flax Linen "),Ma=n(pu,"A",{href:!0,rel:!0});var dD=r(Ma);Ek=i(dD,"flax.linen.Module"),dD.forEach(t),xk=i(pu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pu.forEach(t),zk=d(ut),mc=n(ut,"P",{});var cD=r(mc);jk=i(cD,"Finally, this model supports inherent JAX features such as:"),cD.forEach(t),Ck=d(ut),At=n(ut,"UL",{});var Vo=r(At);gc=n(Vo,"LI",{});var pD=r(gc);Ea=n(pD,"A",{href:!0,rel:!0});var hD=r(Ea);Pk=i(hD,"Just-In-Time (JIT) compilation"),hD.forEach(t),pD.forEach(t),qk=d(Vo),_c=n(Vo,"LI",{});var uD=r(_c);xa=n(uD,"A",{href:!0,rel:!0});var fD=r(xa);Ak=i(fD,"Automatic Differentiation"),fD.forEach(t),uD.forEach(t),Ok=d(Vo),vc=n(Vo,"LI",{});var mD=r(vc);za=n(mD,"A",{href:!0,rel:!0});var gD=r(za);Nk=i(gD,"Vectorization"),gD.forEach(t),mD.forEach(t),Ik=d(Vo),bc=n(Vo,"LI",{});var _D=r(bc);ja=n(_D,"A",{href:!0,rel:!0});var vD=r(ja);Lk=i(vD,"Parallelization"),vD.forEach(t),_D.forEach(t),Vo.forEach(t),Sk=d(ut),it=n(ut,"DIV",{class:!0});var ss=r(it);k(Ca.$$.fragment,ss),Wk=d(ss),Ss=n(ss,"P",{});var Tl=r(Ss);Rk=i(Tl,"The "),kc=n(Tl,"CODE",{});var bD=r(kc);Uk=i(bD,"FlaxDistilBertPreTrainedModel"),bD.forEach(t),Hk=i(Tl,"forward method, overrides the "),Tc=n(Tl,"CODE",{});var kD=r(Tc);Qk=i(kD,"__call__"),kD.forEach(t),Kk=i(Tl," special method."),Tl.forEach(t),Vk=d(ss),k(Ao.$$.fragment,ss),Jk=d(ss),wc=n(ss,"P",{});var TD=r(wc);Gk=i(TD,"Example:"),TD.forEach(t),Xk=d(ss),k(Pa.$$.fragment,ss),ss.forEach(t),ut.forEach(t),rh=d(s),Ws=n(s,"H2",{class:!0});var hu=r(Ws);Oo=n(hu,"A",{id:!0,class:!0,href:!0});var wD=r(Oo);yc=n(wD,"SPAN",{});var yD=r(yc);k(qa.$$.fragment,yD),yD.forEach(t),wD.forEach(t),Yk=d(hu),$c=n(hu,"SPAN",{});var $D=r($c);Zk=i($D,"FlaxDistilBertForMultipleChoice"),$D.forEach(t),hu.forEach(t),ah=d(s),ze=n(s,"DIV",{class:!0});var ft=r(ze);k(Aa.$$.fragment,ft),eT=d(ft),Dc=n(ft,"P",{});var DD=r(Dc);tT=i(DD,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),DD.forEach(t),sT=d(ft),Oa=n(ft,"P",{});var uu=r(Oa);oT=i(uu,"This model inherits from "),tl=n(uu,"A",{href:!0});var FD=r(tl);nT=i(FD,"FlaxPreTrainedModel"),FD.forEach(t),rT=i(uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),uu.forEach(t),aT=d(ft),Na=n(ft,"P",{});var fu=r(Na);iT=i(fu,"This model is also a Flax Linen "),Ia=n(fu,"A",{href:!0,rel:!0});var BD=r(Ia);lT=i(BD,"flax.linen.Module"),BD.forEach(t),dT=i(fu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fu.forEach(t),cT=d(ft),Fc=n(ft,"P",{});var MD=r(Fc);pT=i(MD,"Finally, this model supports inherent JAX features such as:"),MD.forEach(t),hT=d(ft),Ot=n(ft,"UL",{});var Jo=r(Ot);Bc=n(Jo,"LI",{});var ED=r(Bc);La=n(ED,"A",{href:!0,rel:!0});var xD=r(La);uT=i(xD,"Just-In-Time (JIT) compilation"),xD.forEach(t),ED.forEach(t),fT=d(Jo),Mc=n(Jo,"LI",{});var zD=r(Mc);Sa=n(zD,"A",{href:!0,rel:!0});var jD=r(Sa);mT=i(jD,"Automatic Differentiation"),jD.forEach(t),zD.forEach(t),gT=d(Jo),Ec=n(Jo,"LI",{});var CD=r(Ec);Wa=n(CD,"A",{href:!0,rel:!0});var PD=r(Wa);_T=i(PD,"Vectorization"),PD.forEach(t),CD.forEach(t),vT=d(Jo),xc=n(Jo,"LI",{});var qD=r(xc);Ra=n(qD,"A",{href:!0,rel:!0});var AD=r(Ra);bT=i(AD,"Parallelization"),AD.forEach(t),qD.forEach(t),Jo.forEach(t),kT=d(ft),lt=n(ft,"DIV",{class:!0});var os=r(lt);k(Ua.$$.fragment,os),TT=d(os),Rs=n(os,"P",{});var wl=r(Rs);wT=i(wl,"The "),zc=n(wl,"CODE",{});var OD=r(zc);yT=i(OD,"FlaxDistilBertPreTrainedModel"),OD.forEach(t),$T=i(wl,"forward method, overrides the "),jc=n(wl,"CODE",{});var ND=r(jc);DT=i(ND,"__call__"),ND.forEach(t),FT=i(wl," special method."),wl.forEach(t),BT=d(os),k(No.$$.fragment,os),MT=d(os),Cc=n(os,"P",{});var ID=r(Cc);ET=i(ID,"Example:"),ID.forEach(t),xT=d(os),k(Ha.$$.fragment,os),os.forEach(t),ft.forEach(t),ih=d(s),Us=n(s,"H2",{class:!0});var mu=r(Us);Io=n(mu,"A",{id:!0,class:!0,href:!0});var LD=r(Io);Pc=n(LD,"SPAN",{});var SD=r(Pc);k(Qa.$$.fragment,SD),SD.forEach(t),LD.forEach(t),zT=d(mu),qc=n(mu,"SPAN",{});var WD=r(qc);jT=i(WD,"FlaxDistilBertForTokenClassification"),WD.forEach(t),mu.forEach(t),lh=d(s),je=n(s,"DIV",{class:!0});var mt=r(je);k(Ka.$$.fragment,mt),CT=d(mt),Ac=n(mt,"P",{});var RD=r(Ac);PT=i(RD,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),RD.forEach(t),qT=d(mt),Va=n(mt,"P",{});var gu=r(Va);AT=i(gu,"This model inherits from "),sl=n(gu,"A",{href:!0});var UD=r(sl);OT=i(UD,"FlaxPreTrainedModel"),UD.forEach(t),NT=i(gu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gu.forEach(t),IT=d(mt),Ja=n(mt,"P",{});var _u=r(Ja);LT=i(_u,"This model is also a Flax Linen "),Ga=n(_u,"A",{href:!0,rel:!0});var HD=r(Ga);ST=i(HD,"flax.linen.Module"),HD.forEach(t),WT=i(_u,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_u.forEach(t),RT=d(mt),Oc=n(mt,"P",{});var QD=r(Oc);UT=i(QD,"Finally, this model supports inherent JAX features such as:"),QD.forEach(t),HT=d(mt),Nt=n(mt,"UL",{});var Go=r(Nt);Nc=n(Go,"LI",{});var KD=r(Nc);Xa=n(KD,"A",{href:!0,rel:!0});var VD=r(Xa);QT=i(VD,"Just-In-Time (JIT) compilation"),VD.forEach(t),KD.forEach(t),KT=d(Go),Ic=n(Go,"LI",{});var JD=r(Ic);Ya=n(JD,"A",{href:!0,rel:!0});var GD=r(Ya);VT=i(GD,"Automatic Differentiation"),GD.forEach(t),JD.forEach(t),JT=d(Go),Lc=n(Go,"LI",{});var XD=r(Lc);Za=n(XD,"A",{href:!0,rel:!0});var YD=r(Za);GT=i(YD,"Vectorization"),YD.forEach(t),XD.forEach(t),XT=d(Go),Sc=n(Go,"LI",{});var ZD=r(Sc);ei=n(ZD,"A",{href:!0,rel:!0});var eF=r(ei);YT=i(eF,"Parallelization"),eF.forEach(t),ZD.forEach(t),Go.forEach(t),ZT=d(mt),dt=n(mt,"DIV",{class:!0});var ns=r(dt);k(ti.$$.fragment,ns),ew=d(ns),Hs=n(ns,"P",{});var yl=r(Hs);tw=i(yl,"The "),Wc=n(yl,"CODE",{});var tF=r(Wc);sw=i(tF,"FlaxDistilBertPreTrainedModel"),tF.forEach(t),ow=i(yl,"forward method, overrides the "),Rc=n(yl,"CODE",{});var sF=r(Rc);nw=i(sF,"__call__"),sF.forEach(t),rw=i(yl," special method."),yl.forEach(t),aw=d(ns),k(Lo.$$.fragment,ns),iw=d(ns),Uc=n(ns,"P",{});var oF=r(Uc);lw=i(oF,"Example:"),oF.forEach(t),dw=d(ns),k(si.$$.fragment,ns),ns.forEach(t),mt.forEach(t),dh=d(s),Qs=n(s,"H2",{class:!0});var vu=r(Qs);So=n(vu,"A",{id:!0,class:!0,href:!0});var nF=r(So);Hc=n(nF,"SPAN",{});var rF=r(Hc);k(oi.$$.fragment,rF),rF.forEach(t),nF.forEach(t),cw=d(vu),Qc=n(vu,"SPAN",{});var aF=r(Qc);pw=i(aF,"FlaxDistilBertForQuestionAnswering"),aF.forEach(t),vu.forEach(t),ch=d(s),Ce=n(s,"DIV",{class:!0});var gt=r(Ce);k(ni.$$.fragment,gt),hw=d(gt),Ks=n(gt,"P",{});var $l=r(Ks);uw=i($l,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Kc=n($l,"CODE",{});var iF=r(Kc);fw=i(iF,"span start logits"),iF.forEach(t),mw=i($l," and "),Vc=n($l,"CODE",{});var lF=r(Vc);gw=i(lF,"span end logits"),lF.forEach(t),_w=i($l,")."),$l.forEach(t),vw=d(gt),ri=n(gt,"P",{});var bu=r(ri);bw=i(bu,"This model inherits from "),ol=n(bu,"A",{href:!0});var dF=r(ol);kw=i(dF,"FlaxPreTrainedModel"),dF.forEach(t),Tw=i(bu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bu.forEach(t),ww=d(gt),ai=n(gt,"P",{});var ku=r(ai);yw=i(ku,"This model is also a Flax Linen "),ii=n(ku,"A",{href:!0,rel:!0});var cF=r(ii);$w=i(cF,"flax.linen.Module"),cF.forEach(t),Dw=i(ku,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ku.forEach(t),Fw=d(gt),Jc=n(gt,"P",{});var pF=r(Jc);Bw=i(pF,"Finally, this model supports inherent JAX features such as:"),pF.forEach(t),Mw=d(gt),It=n(gt,"UL",{});var Xo=r(It);Gc=n(Xo,"LI",{});var hF=r(Gc);li=n(hF,"A",{href:!0,rel:!0});var uF=r(li);Ew=i(uF,"Just-In-Time (JIT) compilation"),uF.forEach(t),hF.forEach(t),xw=d(Xo),Xc=n(Xo,"LI",{});var fF=r(Xc);di=n(fF,"A",{href:!0,rel:!0});var mF=r(di);zw=i(mF,"Automatic Differentiation"),mF.forEach(t),fF.forEach(t),jw=d(Xo),Yc=n(Xo,"LI",{});var gF=r(Yc);ci=n(gF,"A",{href:!0,rel:!0});var _F=r(ci);Cw=i(_F,"Vectorization"),_F.forEach(t),gF.forEach(t),Pw=d(Xo),Zc=n(Xo,"LI",{});var vF=r(Zc);pi=n(vF,"A",{href:!0,rel:!0});var bF=r(pi);qw=i(bF,"Parallelization"),bF.forEach(t),vF.forEach(t),Xo.forEach(t),Aw=d(gt),ct=n(gt,"DIV",{class:!0});var rs=r(ct);k(hi.$$.fragment,rs),Ow=d(rs),Vs=n(rs,"P",{});var Dl=r(Vs);Nw=i(Dl,"The "),ep=n(Dl,"CODE",{});var kF=r(ep);Iw=i(kF,"FlaxDistilBertPreTrainedModel"),kF.forEach(t),Lw=i(Dl,"forward method, overrides the "),tp=n(Dl,"CODE",{});var TF=r(tp);Sw=i(TF,"__call__"),TF.forEach(t),Ww=i(Dl," special method."),Dl.forEach(t),Rw=d(rs),k(Wo.$$.fragment,rs),Uw=d(rs),sp=n(rs,"P",{});var wF=r(sp);Hw=i(wF,"Example:"),wF.forEach(t),Qw=d(rs),k(ui.$$.fragment,rs),rs.forEach(t),gt.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(ZF)),c(v,"id","distilbert"),c(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(v,"href","#distilbert"),c(g,"class","relative group"),c(G,"id","overview"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#overview"),c(E,"class","relative group"),c(Y,"href","https://medium.com/huggingface/distilbert-8cf3380435b5"),c(Y,"rel","nofollow"),c(z,"href","https://arxiv.org/abs/1910.01108"),c(z,"rel","nofollow"),c(Yo,"href","https://huggingface.co/victorsanh"),c(Yo,"rel","nofollow"),c(Zo,"href","https://huggingface.co/kamalkraj"),c(Zo,"rel","nofollow"),c(en,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/distillation"),c(en,"rel","nofollow"),c(Js,"id","transformers.DistilBertConfig"),c(Js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Js,"href","#transformers.DistilBertConfig"),c(as,"class","relative group"),c(vi,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertModel"),c(bi,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(on,"href","https://huggingface.co/distilbert-base-uncased"),c(on,"rel","nofollow"),c(ki,"href","/docs/transformers/pr_16162/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ti,"href","/docs/transformers/pr_16162/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ve,"class","docstring"),c(Gs,"id","transformers.DistilBertTokenizer"),c(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gs,"href","#transformers.DistilBertTokenizer"),c(ls,"class","relative group"),c(wi,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer"),c(yi,"href","/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizer"),c($i,"href","/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizer"),c(_t,"class","docstring"),c(Ys,"id","transformers.DistilBertTokenizerFast"),c(Ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ys,"href","#transformers.DistilBertTokenizerFast"),c(ds,"class","relative group"),c(Di,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizerFast"),c(Fi,"href","/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizerFast"),c(Bi,"href","/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizerFast"),c(vt,"class","docstring"),c(eo,"id","transformers.DistilBertModel"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.DistilBertModel"),c(cs,"class","relative group"),c(Mi,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel"),c(_n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(_n,"rel","nofollow"),c(Ei,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertModel"),c(tt,"class","docstring"),c(Je,"class","docstring"),c(so,"id","transformers.DistilBertForMaskedLM"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.DistilBertForMaskedLM"),c(hs,"class","relative group"),c(xi,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel"),c(Dn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Dn,"rel","nofollow"),c(zi,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertForMaskedLM"),c(Se,"class","docstring"),c(Ge,"class","docstring"),c(no,"id","transformers.DistilBertForSequenceClassification"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.DistilBertForSequenceClassification"),c(fs,"class","relative group"),c(ji,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel"),c(Cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Cn,"rel","nofollow"),c(Ci,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification"),c(ke,"class","docstring"),c(Xe,"class","docstring"),c(ao,"id","transformers.DistilBertForMultipleChoice"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.DistilBertForMultipleChoice"),c(gs,"class","relative group"),c(Pi,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel"),c(Rn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Rn,"rel","nofollow"),c(qi,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertForMultipleChoice"),c(st,"class","docstring"),c(Ye,"class","docstring"),c(lo,"id","transformers.DistilBertForTokenClassification"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.DistilBertForTokenClassification"),c(vs,"class","relative group"),c(Ai,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel"),c(Gn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Gn,"rel","nofollow"),c(Oi,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertForTokenClassification"),c(We,"class","docstring"),c(Ze,"class","docstring"),c(po,"id","transformers.DistilBertForQuestionAnswering"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.DistilBertForQuestionAnswering"),c(ks,"class","relative group"),c(Ni,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel"),c(nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(nr,"rel","nofollow"),c(Ii,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering"),c(Re,"class","docstring"),c(et,"class","docstring"),c(uo,"id","transformers.TFDistilBertModel"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.TFDistilBertModel"),c(ys,"class","relative group"),c(Li,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.TFPreTrainedModel"),c(hr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(hr,"rel","nofollow"),c(Si,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(ot,"class","docstring"),c(qe,"class","docstring"),c(go,"id","transformers.TFDistilBertForMaskedLM"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.TFDistilBertForMaskedLM"),c(Ds,"class","relative group"),c(Wi,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.TFPreTrainedModel"),c(kr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(kr,"rel","nofollow"),c(Ri,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.TFDistilBertForMaskedLM"),c(Ue,"class","docstring"),c(Ae,"class","docstring"),c(bo,"id","transformers.TFDistilBertForSequenceClassification"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.TFDistilBertForSequenceClassification"),c(Bs,"class","relative group"),c(Ui,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.TFPreTrainedModel"),c(Mr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Mr,"rel","nofollow"),c(Hi,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.TFDistilBertForSequenceClassification"),c(He,"class","docstring"),c(Oe,"class","docstring"),c(wo,"id","transformers.TFDistilBertForMultipleChoice"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.TFDistilBertForMultipleChoice"),c(Es,"class","relative group"),c(Qi,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ar,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ar,"rel","nofollow"),c(Ki,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.TFDistilBertForMultipleChoice"),c(nt,"class","docstring"),c(Ne,"class","docstring"),c(Do,"id","transformers.TFDistilBertForTokenClassification"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.TFDistilBertForTokenClassification"),c(zs,"class","relative group"),c(Vi,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.TFPreTrainedModel"),c(Rr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Rr,"rel","nofollow"),c(Ji,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.TFDistilBertForTokenClassification"),c(Qe,"class","docstring"),c(Ie,"class","docstring"),c(Mo,"id","transformers.TFDistilBertForQuestionAnswering"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.TFDistilBertForQuestionAnswering"),c(Cs,"class","relative group"),c(Gi,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.TFPreTrainedModel"),c(Xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Xr,"rel","nofollow"),c(Xi,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.TFDistilBertForQuestionAnswering"),c(Ke,"class","docstring"),c(Le,"class","docstring"),c(zo,"id","transformers.FlaxDistilBertModel"),c(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zo,"href","#transformers.FlaxDistilBertModel"),c(As,"class","relative group"),c(Yi,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ra,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ra,"rel","nofollow"),c(aa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(aa,"rel","nofollow"),c(ia,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ia,"rel","nofollow"),c(la,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(la,"rel","nofollow"),c(da,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(da,"rel","nofollow"),c(rt,"class","docstring"),c(Me,"class","docstring"),c(Co,"id","transformers.FlaxDistilBertForMaskedLM"),c(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Co,"href","#transformers.FlaxDistilBertForMaskedLM"),c(Ns,"class","relative group"),c(Zi,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(_a,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(_a,"rel","nofollow"),c(va,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(va,"rel","nofollow"),c(ba,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ba,"rel","nofollow"),c(ka,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ka,"rel","nofollow"),c(Ta,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ta,"rel","nofollow"),c(at,"class","docstring"),c(Ee,"class","docstring"),c(qo,"id","transformers.FlaxDistilBertForSequenceClassification"),c(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qo,"href","#transformers.FlaxDistilBertForSequenceClassification"),c(Ls,"class","relative group"),c(el,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ma,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ma,"rel","nofollow"),c(Ea,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ea,"rel","nofollow"),c(xa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(xa,"rel","nofollow"),c(za,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(za,"rel","nofollow"),c(ja,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ja,"rel","nofollow"),c(it,"class","docstring"),c(xe,"class","docstring"),c(Oo,"id","transformers.FlaxDistilBertForMultipleChoice"),c(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oo,"href","#transformers.FlaxDistilBertForMultipleChoice"),c(Ws,"class","relative group"),c(tl,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ia,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ia,"rel","nofollow"),c(La,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(La,"rel","nofollow"),c(Sa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Sa,"rel","nofollow"),c(Wa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Wa,"rel","nofollow"),c(Ra,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ra,"rel","nofollow"),c(lt,"class","docstring"),c(ze,"class","docstring"),c(Io,"id","transformers.FlaxDistilBertForTokenClassification"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.FlaxDistilBertForTokenClassification"),c(Us,"class","relative group"),c(sl,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ga,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ga,"rel","nofollow"),c(Xa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Xa,"rel","nofollow"),c(Ya,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ya,"rel","nofollow"),c(Za,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Za,"rel","nofollow"),c(ei,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ei,"rel","nofollow"),c(dt,"class","docstring"),c(je,"class","docstring"),c(So,"id","transformers.FlaxDistilBertForQuestionAnswering"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#transformers.FlaxDistilBertForQuestionAnswering"),c(Qs,"class","relative group"),c(ol,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ii,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ii,"rel","nofollow"),c(li,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(li,"rel","nofollow"),c(di,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(di,"rel","nofollow"),c(ci,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ci,"rel","nofollow"),c(pi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(pi,"rel","nofollow"),c(ct,"class","docstring"),c(Ce,"class","docstring")},m(s,m){e(document.head,p),u(s,F,m),u(s,g,m),e(g,v),e(v,D),T(_,D,null),e(g,f),e(g,B),e(B,ce),u(s,K,m),u(s,E,m),e(E,G),e(G,L),T(X,L,null),e(E,pe),e(E,S),e(S,he),u(s,ae,m),u(s,N,m),e(N,q),e(N,Y),e(Y,V),e(N,x),e(N,z),e(z,ue),e(N,W),e(N,se),e(se,fe),e(N,R),u(s,ie,m),u(s,ee,m),e(ee,A),u(s,le,m),u(s,I,m),e(I,oe),e(oe,me),u(s,P,m),u(s,te,m),e(te,U),u(s,de,m),u(s,h,m),e(h,M),e(M,J),e(M,_e),e(_e,Te),e(M,O),e(M,ve),e(ve,we),e(M,ye),e(M,C),e(C,H),e(M,$e),e(h,De),e(h,Z),e(Z,Fe),e(Z,ne),e(ne,Be),e(Z,Tu),u(s,wp,m),u(s,bt,m),e(bt,wu),e(bt,Yo),e(Yo,yu),e(bt,$u),e(bt,Zo),e(Zo,Du),e(bt,Fu),e(bt,en),e(en,Bu),e(bt,Mu),u(s,yp,m),u(s,as,m),e(as,Js),e(Js,Fl),T(tn,Fl,null),e(as,Eu),e(as,Bl),e(Bl,xu),u(s,$p,m),u(s,Ve,m),T(sn,Ve,null),e(Ve,zu),e(Ve,Ct),e(Ct,ju),e(Ct,vi),e(vi,Cu),e(Ct,Pu),e(Ct,bi),e(bi,qu),e(Ct,Au),e(Ct,on),e(on,Ou),e(Ct,Nu),e(Ve,Iu),e(Ve,is),e(is,Lu),e(is,ki),e(ki,Su),e(is,Wu),e(is,Ti),e(Ti,Ru),e(is,Uu),e(Ve,Hu),e(Ve,Ml),e(Ml,Qu),e(Ve,Ku),T(nn,Ve,null),u(s,Dp,m),u(s,ls,m),e(ls,Gs),e(Gs,El),T(rn,El,null),e(ls,Vu),e(ls,xl),e(xl,Ju),u(s,Fp,m),u(s,_t,m),T(an,_t,null),e(_t,Gu),e(_t,zl),e(zl,Xu),e(_t,Yu),e(_t,Xs),e(Xs,wi),e(wi,Zu),e(Xs,ef),e(Xs,yi),e(yi,tf),e(Xs,sf),e(_t,of),e(_t,ln),e(ln,nf),e(ln,$i),e($i,rf),e(ln,af),u(s,Bp,m),u(s,ds,m),e(ds,Ys),e(Ys,jl),T(dn,jl,null),e(ds,lf),e(ds,Cl),e(Cl,df),u(s,Mp,m),u(s,vt,m),T(cn,vt,null),e(vt,cf),e(vt,pn),e(pn,pf),e(pn,Pl),e(Pl,hf),e(pn,uf),e(vt,ff),e(vt,Zs),e(Zs,Di),e(Di,mf),e(Zs,gf),e(Zs,Fi),e(Fi,_f),e(Zs,vf),e(vt,bf),e(vt,hn),e(hn,kf),e(hn,Bi),e(Bi,Tf),e(hn,wf),u(s,Ep,m),u(s,cs,m),e(cs,eo),e(eo,ql),T(un,ql,null),e(cs,yf),e(cs,Al),e(Al,$f),u(s,xp,m),u(s,Je,m),T(fn,Je,null),e(Je,Df),e(Je,Ol),e(Ol,Ff),e(Je,Bf),e(Je,mn),e(mn,Mf),e(mn,Mi),e(Mi,Ef),e(mn,xf),e(Je,zf),e(Je,gn),e(gn,jf),e(gn,_n),e(_n,Cf),e(gn,Pf),e(Je,qf),e(Je,tt),T(vn,tt,null),e(tt,Af),e(tt,ps),e(ps,Of),e(ps,Ei),e(Ei,Nf),e(ps,If),e(ps,Nl),e(Nl,Lf),e(ps,Sf),e(tt,Wf),T(to,tt,null),e(tt,Rf),e(tt,Il),e(Il,Uf),e(tt,Hf),T(bn,tt,null),u(s,zp,m),u(s,hs,m),e(hs,so),e(so,Ll),T(kn,Ll,null),e(hs,Qf),e(hs,Sl),e(Sl,Kf),u(s,jp,m),u(s,Ge,m),T(Tn,Ge,null),e(Ge,Vf),e(Ge,wn),e(wn,Jf),e(wn,Wl),e(Wl,Gf),e(wn,Xf),e(Ge,Yf),e(Ge,yn),e(yn,Zf),e(yn,xi),e(xi,em),e(yn,tm),e(Ge,sm),e(Ge,$n),e($n,om),e($n,Dn),e(Dn,nm),e($n,rm),e(Ge,am),e(Ge,Se),T(Fn,Se,null),e(Se,im),e(Se,us),e(us,lm),e(us,zi),e(zi,dm),e(us,cm),e(us,Rl),e(Rl,pm),e(us,hm),e(Se,um),T(oo,Se,null),e(Se,fm),e(Se,Ul),e(Ul,mm),e(Se,gm),T(Bn,Se,null),e(Se,_m),T(Mn,Se,null),u(s,Cp,m),u(s,fs,m),e(fs,no),e(no,Hl),T(En,Hl,null),e(fs,vm),e(fs,Ql),e(Ql,bm),u(s,Pp,m),u(s,Xe,m),T(xn,Xe,null),e(Xe,km),e(Xe,Kl),e(Kl,Tm),e(Xe,wm),e(Xe,zn),e(zn,ym),e(zn,ji),e(ji,$m),e(zn,Dm),e(Xe,Fm),e(Xe,jn),e(jn,Bm),e(jn,Cn),e(Cn,Mm),e(jn,Em),e(Xe,xm),e(Xe,ke),T(Pn,ke,null),e(ke,zm),e(ke,ms),e(ms,jm),e(ms,Ci),e(Ci,Cm),e(ms,Pm),e(ms,Vl),e(Vl,qm),e(ms,Am),e(ke,Om),T(ro,ke,null),e(ke,Nm),e(ke,Jl),e(Jl,Im),e(ke,Lm),T(qn,ke,null),e(ke,Sm),T(An,ke,null),e(ke,Wm),e(ke,Gl),e(Gl,Rm),e(ke,Um),T(On,ke,null),e(ke,Hm),T(Nn,ke,null),u(s,qp,m),u(s,gs,m),e(gs,ao),e(ao,Xl),T(In,Xl,null),e(gs,Qm),e(gs,Yl),e(Yl,Km),u(s,Ap,m),u(s,Ye,m),T(Ln,Ye,null),e(Ye,Vm),e(Ye,Zl),e(Zl,Jm),e(Ye,Gm),e(Ye,Sn),e(Sn,Xm),e(Sn,Pi),e(Pi,Ym),e(Sn,Zm),e(Ye,eg),e(Ye,Wn),e(Wn,tg),e(Wn,Rn),e(Rn,sg),e(Wn,og),e(Ye,ng),e(Ye,st),T(Un,st,null),e(st,rg),e(st,_s),e(_s,ag),e(_s,qi),e(qi,ig),e(_s,lg),e(_s,ed),e(ed,dg),e(_s,cg),e(st,pg),T(io,st,null),e(st,hg),e(st,td),e(td,ug),e(st,fg),T(Hn,st,null),u(s,Op,m),u(s,vs,m),e(vs,lo),e(lo,sd),T(Qn,sd,null),e(vs,mg),e(vs,od),e(od,gg),u(s,Np,m),u(s,Ze,m),T(Kn,Ze,null),e(Ze,_g),e(Ze,nd),e(nd,vg),e(Ze,bg),e(Ze,Vn),e(Vn,kg),e(Vn,Ai),e(Ai,Tg),e(Vn,wg),e(Ze,yg),e(Ze,Jn),e(Jn,$g),e(Jn,Gn),e(Gn,Dg),e(Jn,Fg),e(Ze,Bg),e(Ze,We),T(Xn,We,null),e(We,Mg),e(We,bs),e(bs,Eg),e(bs,Oi),e(Oi,xg),e(bs,zg),e(bs,rd),e(rd,jg),e(bs,Cg),e(We,Pg),T(co,We,null),e(We,qg),e(We,ad),e(ad,Ag),e(We,Og),T(Yn,We,null),e(We,Ng),T(Zn,We,null),u(s,Ip,m),u(s,ks,m),e(ks,po),e(po,id),T(er,id,null),e(ks,Ig),e(ks,ld),e(ld,Lg),u(s,Lp,m),u(s,et,m),T(tr,et,null),e(et,Sg),e(et,Ts),e(Ts,Wg),e(Ts,dd),e(dd,Rg),e(Ts,Ug),e(Ts,cd),e(cd,Hg),e(Ts,Qg),e(et,Kg),e(et,sr),e(sr,Vg),e(sr,Ni),e(Ni,Jg),e(sr,Gg),e(et,Xg),e(et,or),e(or,Yg),e(or,nr),e(nr,Zg),e(or,e_),e(et,t_),e(et,Re),T(rr,Re,null),e(Re,s_),e(Re,ws),e(ws,o_),e(ws,Ii),e(Ii,n_),e(ws,r_),e(ws,pd),e(pd,a_),e(ws,i_),e(Re,l_),T(ho,Re,null),e(Re,d_),e(Re,hd),e(hd,c_),e(Re,p_),T(ar,Re,null),e(Re,h_),T(ir,Re,null),u(s,Sp,m),u(s,ys,m),e(ys,uo),e(uo,ud),T(lr,ud,null),e(ys,u_),e(ys,fd),e(fd,f_),u(s,Wp,m),u(s,qe,m),T(dr,qe,null),e(qe,m_),e(qe,md),e(md,g_),e(qe,__),e(qe,cr),e(cr,v_),e(cr,Li),e(Li,b_),e(cr,k_),e(qe,T_),e(qe,pr),e(pr,w_),e(pr,hr),e(hr,y_),e(pr,$_),e(qe,D_),T(fo,qe,null),e(qe,F_),e(qe,ot),T(ur,ot,null),e(ot,B_),e(ot,$s),e($s,M_),e($s,Si),e(Si,E_),e($s,x_),e($s,gd),e(gd,z_),e($s,j_),e(ot,C_),T(mo,ot,null),e(ot,P_),e(ot,_d),e(_d,q_),e(ot,A_),T(fr,ot,null),u(s,Rp,m),u(s,Ds,m),e(Ds,go),e(go,vd),T(mr,vd,null),e(Ds,O_),e(Ds,bd),e(bd,N_),u(s,Up,m),u(s,Ae,m),T(gr,Ae,null),e(Ae,I_),e(Ae,_r),e(_r,L_),e(_r,kd),e(kd,S_),e(_r,W_),e(Ae,R_),e(Ae,vr),e(vr,U_),e(vr,Wi),e(Wi,H_),e(vr,Q_),e(Ae,K_),e(Ae,br),e(br,V_),e(br,kr),e(kr,J_),e(br,G_),e(Ae,X_),T(_o,Ae,null),e(Ae,Y_),e(Ae,Ue),T(Tr,Ue,null),e(Ue,Z_),e(Ue,Fs),e(Fs,e1),e(Fs,Ri),e(Ri,t1),e(Fs,s1),e(Fs,Td),e(Td,o1),e(Fs,n1),e(Ue,r1),T(vo,Ue,null),e(Ue,a1),e(Ue,wd),e(wd,i1),e(Ue,l1),T(wr,Ue,null),e(Ue,d1),T(yr,Ue,null),u(s,Hp,m),u(s,Bs,m),e(Bs,bo),e(bo,yd),T($r,yd,null),e(Bs,c1),e(Bs,$d),e($d,p1),u(s,Qp,m),u(s,Oe,m),T(Dr,Oe,null),e(Oe,h1),e(Oe,Dd),e(Dd,u1),e(Oe,f1),e(Oe,Fr),e(Fr,m1),e(Fr,Ui),e(Ui,g1),e(Fr,_1),e(Oe,v1),e(Oe,Br),e(Br,b1),e(Br,Mr),e(Mr,k1),e(Br,T1),e(Oe,w1),T(ko,Oe,null),e(Oe,y1),e(Oe,He),T(Er,He,null),e(He,$1),e(He,Ms),e(Ms,D1),e(Ms,Hi),e(Hi,F1),e(Ms,B1),e(Ms,Fd),e(Fd,M1),e(Ms,E1),e(He,x1),T(To,He,null),e(He,z1),e(He,Bd),e(Bd,j1),e(He,C1),T(xr,He,null),e(He,P1),T(zr,He,null),u(s,Kp,m),u(s,Es,m),e(Es,wo),e(wo,Md),T(jr,Md,null),e(Es,q1),e(Es,Ed),e(Ed,A1),u(s,Vp,m),u(s,Ne,m),T(Cr,Ne,null),e(Ne,O1),e(Ne,xd),e(xd,N1),e(Ne,I1),e(Ne,Pr),e(Pr,L1),e(Pr,Qi),e(Qi,S1),e(Pr,W1),e(Ne,R1),e(Ne,qr),e(qr,U1),e(qr,Ar),e(Ar,H1),e(qr,Q1),e(Ne,K1),T(yo,Ne,null),e(Ne,V1),e(Ne,nt),T(Or,nt,null),e(nt,J1),e(nt,xs),e(xs,G1),e(xs,Ki),e(Ki,X1),e(xs,Y1),e(xs,zd),e(zd,Z1),e(xs,ev),e(nt,tv),T($o,nt,null),e(nt,sv),e(nt,jd),e(jd,ov),e(nt,nv),T(Nr,nt,null),u(s,Jp,m),u(s,zs,m),e(zs,Do),e(Do,Cd),T(Ir,Cd,null),e(zs,rv),e(zs,Pd),e(Pd,av),u(s,Gp,m),u(s,Ie,m),T(Lr,Ie,null),e(Ie,iv),e(Ie,qd),e(qd,lv),e(Ie,dv),e(Ie,Sr),e(Sr,cv),e(Sr,Vi),e(Vi,pv),e(Sr,hv),e(Ie,uv),e(Ie,Wr),e(Wr,fv),e(Wr,Rr),e(Rr,mv),e(Wr,gv),e(Ie,_v),T(Fo,Ie,null),e(Ie,vv),e(Ie,Qe),T(Ur,Qe,null),e(Qe,bv),e(Qe,js),e(js,kv),e(js,Ji),e(Ji,Tv),e(js,wv),e(js,Ad),e(Ad,yv),e(js,$v),e(Qe,Dv),T(Bo,Qe,null),e(Qe,Fv),e(Qe,Od),e(Od,Bv),e(Qe,Mv),T(Hr,Qe,null),e(Qe,Ev),T(Qr,Qe,null),u(s,Xp,m),u(s,Cs,m),e(Cs,Mo),e(Mo,Nd),T(Kr,Nd,null),e(Cs,xv),e(Cs,Id),e(Id,zv),u(s,Yp,m),u(s,Le,m),T(Vr,Le,null),e(Le,jv),e(Le,Ps),e(Ps,Cv),e(Ps,Ld),e(Ld,Pv),e(Ps,qv),e(Ps,Sd),e(Sd,Av),e(Ps,Ov),e(Le,Nv),e(Le,Jr),e(Jr,Iv),e(Jr,Gi),e(Gi,Lv),e(Jr,Sv),e(Le,Wv),e(Le,Gr),e(Gr,Rv),e(Gr,Xr),e(Xr,Uv),e(Gr,Hv),e(Le,Qv),T(Eo,Le,null),e(Le,Kv),e(Le,Ke),T(Yr,Ke,null),e(Ke,Vv),e(Ke,qs),e(qs,Jv),e(qs,Xi),e(Xi,Gv),e(qs,Xv),e(qs,Wd),e(Wd,Yv),e(qs,Zv),e(Ke,eb),T(xo,Ke,null),e(Ke,tb),e(Ke,Rd),e(Rd,sb),e(Ke,ob),T(Zr,Ke,null),e(Ke,nb),T(ea,Ke,null),u(s,Zp,m),u(s,As,m),e(As,zo),e(zo,Ud),T(ta,Ud,null),e(As,rb),e(As,Hd),e(Hd,ab),u(s,eh,m),u(s,Me,m),T(sa,Me,null),e(Me,ib),e(Me,Qd),e(Qd,lb),e(Me,db),e(Me,oa),e(oa,cb),e(oa,Yi),e(Yi,pb),e(oa,hb),e(Me,ub),e(Me,na),e(na,fb),e(na,ra),e(ra,mb),e(na,gb),e(Me,_b),e(Me,Kd),e(Kd,vb),e(Me,bb),e(Me,Pt),e(Pt,Vd),e(Vd,aa),e(aa,kb),e(Pt,Tb),e(Pt,Jd),e(Jd,ia),e(ia,wb),e(Pt,yb),e(Pt,Gd),e(Gd,la),e(la,$b),e(Pt,Db),e(Pt,Xd),e(Xd,da),e(da,Fb),e(Me,Bb),e(Me,rt),T(ca,rt,null),e(rt,Mb),e(rt,Os),e(Os,Eb),e(Os,Yd),e(Yd,xb),e(Os,zb),e(Os,Zd),e(Zd,jb),e(Os,Cb),e(rt,Pb),T(jo,rt,null),e(rt,qb),e(rt,ec),e(ec,Ab),e(rt,Ob),T(pa,rt,null),u(s,th,m),u(s,Ns,m),e(Ns,Co),e(Co,tc),T(ha,tc,null),e(Ns,Nb),e(Ns,sc),e(sc,Ib),u(s,sh,m),u(s,Ee,m),T(ua,Ee,null),e(Ee,Lb),e(Ee,fa),e(fa,Sb),e(fa,oc),e(oc,Wb),e(fa,Rb),e(Ee,Ub),e(Ee,ma),e(ma,Hb),e(ma,Zi),e(Zi,Qb),e(ma,Kb),e(Ee,Vb),e(Ee,ga),e(ga,Jb),e(ga,_a),e(_a,Gb),e(ga,Xb),e(Ee,Yb),e(Ee,nc),e(nc,Zb),e(Ee,ek),e(Ee,qt),e(qt,rc),e(rc,va),e(va,tk),e(qt,sk),e(qt,ac),e(ac,ba),e(ba,ok),e(qt,nk),e(qt,ic),e(ic,ka),e(ka,rk),e(qt,ak),e(qt,lc),e(lc,Ta),e(Ta,ik),e(Ee,lk),e(Ee,at),T(wa,at,null),e(at,dk),e(at,Is),e(Is,ck),e(Is,dc),e(dc,pk),e(Is,hk),e(Is,cc),e(cc,uk),e(Is,fk),e(at,mk),T(Po,at,null),e(at,gk),e(at,pc),e(pc,_k),e(at,vk),T(ya,at,null),u(s,oh,m),u(s,Ls,m),e(Ls,qo),e(qo,hc),T($a,hc,null),e(Ls,bk),e(Ls,uc),e(uc,kk),u(s,nh,m),u(s,xe,m),T(Da,xe,null),e(xe,Tk),e(xe,fc),e(fc,wk),e(xe,yk),e(xe,Fa),e(Fa,$k),e(Fa,el),e(el,Dk),e(Fa,Fk),e(xe,Bk),e(xe,Ba),e(Ba,Mk),e(Ba,Ma),e(Ma,Ek),e(Ba,xk),e(xe,zk),e(xe,mc),e(mc,jk),e(xe,Ck),e(xe,At),e(At,gc),e(gc,Ea),e(Ea,Pk),e(At,qk),e(At,_c),e(_c,xa),e(xa,Ak),e(At,Ok),e(At,vc),e(vc,za),e(za,Nk),e(At,Ik),e(At,bc),e(bc,ja),e(ja,Lk),e(xe,Sk),e(xe,it),T(Ca,it,null),e(it,Wk),e(it,Ss),e(Ss,Rk),e(Ss,kc),e(kc,Uk),e(Ss,Hk),e(Ss,Tc),e(Tc,Qk),e(Ss,Kk),e(it,Vk),T(Ao,it,null),e(it,Jk),e(it,wc),e(wc,Gk),e(it,Xk),T(Pa,it,null),u(s,rh,m),u(s,Ws,m),e(Ws,Oo),e(Oo,yc),T(qa,yc,null),e(Ws,Yk),e(Ws,$c),e($c,Zk),u(s,ah,m),u(s,ze,m),T(Aa,ze,null),e(ze,eT),e(ze,Dc),e(Dc,tT),e(ze,sT),e(ze,Oa),e(Oa,oT),e(Oa,tl),e(tl,nT),e(Oa,rT),e(ze,aT),e(ze,Na),e(Na,iT),e(Na,Ia),e(Ia,lT),e(Na,dT),e(ze,cT),e(ze,Fc),e(Fc,pT),e(ze,hT),e(ze,Ot),e(Ot,Bc),e(Bc,La),e(La,uT),e(Ot,fT),e(Ot,Mc),e(Mc,Sa),e(Sa,mT),e(Ot,gT),e(Ot,Ec),e(Ec,Wa),e(Wa,_T),e(Ot,vT),e(Ot,xc),e(xc,Ra),e(Ra,bT),e(ze,kT),e(ze,lt),T(Ua,lt,null),e(lt,TT),e(lt,Rs),e(Rs,wT),e(Rs,zc),e(zc,yT),e(Rs,$T),e(Rs,jc),e(jc,DT),e(Rs,FT),e(lt,BT),T(No,lt,null),e(lt,MT),e(lt,Cc),e(Cc,ET),e(lt,xT),T(Ha,lt,null),u(s,ih,m),u(s,Us,m),e(Us,Io),e(Io,Pc),T(Qa,Pc,null),e(Us,zT),e(Us,qc),e(qc,jT),u(s,lh,m),u(s,je,m),T(Ka,je,null),e(je,CT),e(je,Ac),e(Ac,PT),e(je,qT),e(je,Va),e(Va,AT),e(Va,sl),e(sl,OT),e(Va,NT),e(je,IT),e(je,Ja),e(Ja,LT),e(Ja,Ga),e(Ga,ST),e(Ja,WT),e(je,RT),e(je,Oc),e(Oc,UT),e(je,HT),e(je,Nt),e(Nt,Nc),e(Nc,Xa),e(Xa,QT),e(Nt,KT),e(Nt,Ic),e(Ic,Ya),e(Ya,VT),e(Nt,JT),e(Nt,Lc),e(Lc,Za),e(Za,GT),e(Nt,XT),e(Nt,Sc),e(Sc,ei),e(ei,YT),e(je,ZT),e(je,dt),T(ti,dt,null),e(dt,ew),e(dt,Hs),e(Hs,tw),e(Hs,Wc),e(Wc,sw),e(Hs,ow),e(Hs,Rc),e(Rc,nw),e(Hs,rw),e(dt,aw),T(Lo,dt,null),e(dt,iw),e(dt,Uc),e(Uc,lw),e(dt,dw),T(si,dt,null),u(s,dh,m),u(s,Qs,m),e(Qs,So),e(So,Hc),T(oi,Hc,null),e(Qs,cw),e(Qs,Qc),e(Qc,pw),u(s,ch,m),u(s,Ce,m),T(ni,Ce,null),e(Ce,hw),e(Ce,Ks),e(Ks,uw),e(Ks,Kc),e(Kc,fw),e(Ks,mw),e(Ks,Vc),e(Vc,gw),e(Ks,_w),e(Ce,vw),e(Ce,ri),e(ri,bw),e(ri,ol),e(ol,kw),e(ri,Tw),e(Ce,ww),e(Ce,ai),e(ai,yw),e(ai,ii),e(ii,$w),e(ai,Dw),e(Ce,Fw),e(Ce,Jc),e(Jc,Bw),e(Ce,Mw),e(Ce,It),e(It,Gc),e(Gc,li),e(li,Ew),e(It,xw),e(It,Xc),e(Xc,di),e(di,zw),e(It,jw),e(It,Yc),e(Yc,ci),e(ci,Cw),e(It,Pw),e(It,Zc),e(Zc,pi),e(pi,qw),e(Ce,Aw),e(Ce,ct),T(hi,ct,null),e(ct,Ow),e(ct,Vs),e(Vs,Nw),e(Vs,ep),e(ep,Iw),e(Vs,Lw),e(Vs,tp),e(tp,Sw),e(Vs,Ww),e(ct,Rw),T(Wo,ct,null),e(ct,Uw),e(ct,sp),e(sp,Hw),e(ct,Qw),T(ui,ct,null),ph=!0},p(s,[m]){const fi={};m&2&&(fi.$$scope={dirty:m,ctx:s}),to.$set(fi);const op={};m&2&&(op.$$scope={dirty:m,ctx:s}),oo.$set(op);const np={};m&2&&(np.$$scope={dirty:m,ctx:s}),ro.$set(np);const rp={};m&2&&(rp.$$scope={dirty:m,ctx:s}),io.$set(rp);const mi={};m&2&&(mi.$$scope={dirty:m,ctx:s}),co.$set(mi);const ap={};m&2&&(ap.$$scope={dirty:m,ctx:s}),ho.$set(ap);const ip={};m&2&&(ip.$$scope={dirty:m,ctx:s}),fo.$set(ip);const lp={};m&2&&(lp.$$scope={dirty:m,ctx:s}),mo.$set(lp);const Lt={};m&2&&(Lt.$$scope={dirty:m,ctx:s}),_o.$set(Lt);const dp={};m&2&&(dp.$$scope={dirty:m,ctx:s}),vo.$set(dp);const cp={};m&2&&(cp.$$scope={dirty:m,ctx:s}),ko.$set(cp);const pp={};m&2&&(pp.$$scope={dirty:m,ctx:s}),To.$set(pp);const hp={};m&2&&(hp.$$scope={dirty:m,ctx:s}),yo.$set(hp);const up={};m&2&&(up.$$scope={dirty:m,ctx:s}),$o.$set(up);const fp={};m&2&&(fp.$$scope={dirty:m,ctx:s}),Fo.$set(fp);const mp={};m&2&&(mp.$$scope={dirty:m,ctx:s}),Bo.$set(mp);const gi={};m&2&&(gi.$$scope={dirty:m,ctx:s}),Eo.$set(gi);const St={};m&2&&(St.$$scope={dirty:m,ctx:s}),xo.$set(St);const gp={};m&2&&(gp.$$scope={dirty:m,ctx:s}),jo.$set(gp);const _p={};m&2&&(_p.$$scope={dirty:m,ctx:s}),Po.$set(_p);const vp={};m&2&&(vp.$$scope={dirty:m,ctx:s}),Ao.$set(vp);const _i={};m&2&&(_i.$$scope={dirty:m,ctx:s}),No.$set(_i);const bp={};m&2&&(bp.$$scope={dirty:m,ctx:s}),Lo.$set(bp);const Wt={};m&2&&(Wt.$$scope={dirty:m,ctx:s}),Wo.$set(Wt)},i(s){ph||(w(_.$$.fragment,s),w(X.$$.fragment,s),w(tn.$$.fragment,s),w(sn.$$.fragment,s),w(nn.$$.fragment,s),w(rn.$$.fragment,s),w(an.$$.fragment,s),w(dn.$$.fragment,s),w(cn.$$.fragment,s),w(un.$$.fragment,s),w(fn.$$.fragment,s),w(vn.$$.fragment,s),w(to.$$.fragment,s),w(bn.$$.fragment,s),w(kn.$$.fragment,s),w(Tn.$$.fragment,s),w(Fn.$$.fragment,s),w(oo.$$.fragment,s),w(Bn.$$.fragment,s),w(Mn.$$.fragment,s),w(En.$$.fragment,s),w(xn.$$.fragment,s),w(Pn.$$.fragment,s),w(ro.$$.fragment,s),w(qn.$$.fragment,s),w(An.$$.fragment,s),w(On.$$.fragment,s),w(Nn.$$.fragment,s),w(In.$$.fragment,s),w(Ln.$$.fragment,s),w(Un.$$.fragment,s),w(io.$$.fragment,s),w(Hn.$$.fragment,s),w(Qn.$$.fragment,s),w(Kn.$$.fragment,s),w(Xn.$$.fragment,s),w(co.$$.fragment,s),w(Yn.$$.fragment,s),w(Zn.$$.fragment,s),w(er.$$.fragment,s),w(tr.$$.fragment,s),w(rr.$$.fragment,s),w(ho.$$.fragment,s),w(ar.$$.fragment,s),w(ir.$$.fragment,s),w(lr.$$.fragment,s),w(dr.$$.fragment,s),w(fo.$$.fragment,s),w(ur.$$.fragment,s),w(mo.$$.fragment,s),w(fr.$$.fragment,s),w(mr.$$.fragment,s),w(gr.$$.fragment,s),w(_o.$$.fragment,s),w(Tr.$$.fragment,s),w(vo.$$.fragment,s),w(wr.$$.fragment,s),w(yr.$$.fragment,s),w($r.$$.fragment,s),w(Dr.$$.fragment,s),w(ko.$$.fragment,s),w(Er.$$.fragment,s),w(To.$$.fragment,s),w(xr.$$.fragment,s),w(zr.$$.fragment,s),w(jr.$$.fragment,s),w(Cr.$$.fragment,s),w(yo.$$.fragment,s),w(Or.$$.fragment,s),w($o.$$.fragment,s),w(Nr.$$.fragment,s),w(Ir.$$.fragment,s),w(Lr.$$.fragment,s),w(Fo.$$.fragment,s),w(Ur.$$.fragment,s),w(Bo.$$.fragment,s),w(Hr.$$.fragment,s),w(Qr.$$.fragment,s),w(Kr.$$.fragment,s),w(Vr.$$.fragment,s),w(Eo.$$.fragment,s),w(Yr.$$.fragment,s),w(xo.$$.fragment,s),w(Zr.$$.fragment,s),w(ea.$$.fragment,s),w(ta.$$.fragment,s),w(sa.$$.fragment,s),w(ca.$$.fragment,s),w(jo.$$.fragment,s),w(pa.$$.fragment,s),w(ha.$$.fragment,s),w(ua.$$.fragment,s),w(wa.$$.fragment,s),w(Po.$$.fragment,s),w(ya.$$.fragment,s),w($a.$$.fragment,s),w(Da.$$.fragment,s),w(Ca.$$.fragment,s),w(Ao.$$.fragment,s),w(Pa.$$.fragment,s),w(qa.$$.fragment,s),w(Aa.$$.fragment,s),w(Ua.$$.fragment,s),w(No.$$.fragment,s),w(Ha.$$.fragment,s),w(Qa.$$.fragment,s),w(Ka.$$.fragment,s),w(ti.$$.fragment,s),w(Lo.$$.fragment,s),w(si.$$.fragment,s),w(oi.$$.fragment,s),w(ni.$$.fragment,s),w(hi.$$.fragment,s),w(Wo.$$.fragment,s),w(ui.$$.fragment,s),ph=!0)},o(s){y(_.$$.fragment,s),y(X.$$.fragment,s),y(tn.$$.fragment,s),y(sn.$$.fragment,s),y(nn.$$.fragment,s),y(rn.$$.fragment,s),y(an.$$.fragment,s),y(dn.$$.fragment,s),y(cn.$$.fragment,s),y(un.$$.fragment,s),y(fn.$$.fragment,s),y(vn.$$.fragment,s),y(to.$$.fragment,s),y(bn.$$.fragment,s),y(kn.$$.fragment,s),y(Tn.$$.fragment,s),y(Fn.$$.fragment,s),y(oo.$$.fragment,s),y(Bn.$$.fragment,s),y(Mn.$$.fragment,s),y(En.$$.fragment,s),y(xn.$$.fragment,s),y(Pn.$$.fragment,s),y(ro.$$.fragment,s),y(qn.$$.fragment,s),y(An.$$.fragment,s),y(On.$$.fragment,s),y(Nn.$$.fragment,s),y(In.$$.fragment,s),y(Ln.$$.fragment,s),y(Un.$$.fragment,s),y(io.$$.fragment,s),y(Hn.$$.fragment,s),y(Qn.$$.fragment,s),y(Kn.$$.fragment,s),y(Xn.$$.fragment,s),y(co.$$.fragment,s),y(Yn.$$.fragment,s),y(Zn.$$.fragment,s),y(er.$$.fragment,s),y(tr.$$.fragment,s),y(rr.$$.fragment,s),y(ho.$$.fragment,s),y(ar.$$.fragment,s),y(ir.$$.fragment,s),y(lr.$$.fragment,s),y(dr.$$.fragment,s),y(fo.$$.fragment,s),y(ur.$$.fragment,s),y(mo.$$.fragment,s),y(fr.$$.fragment,s),y(mr.$$.fragment,s),y(gr.$$.fragment,s),y(_o.$$.fragment,s),y(Tr.$$.fragment,s),y(vo.$$.fragment,s),y(wr.$$.fragment,s),y(yr.$$.fragment,s),y($r.$$.fragment,s),y(Dr.$$.fragment,s),y(ko.$$.fragment,s),y(Er.$$.fragment,s),y(To.$$.fragment,s),y(xr.$$.fragment,s),y(zr.$$.fragment,s),y(jr.$$.fragment,s),y(Cr.$$.fragment,s),y(yo.$$.fragment,s),y(Or.$$.fragment,s),y($o.$$.fragment,s),y(Nr.$$.fragment,s),y(Ir.$$.fragment,s),y(Lr.$$.fragment,s),y(Fo.$$.fragment,s),y(Ur.$$.fragment,s),y(Bo.$$.fragment,s),y(Hr.$$.fragment,s),y(Qr.$$.fragment,s),y(Kr.$$.fragment,s),y(Vr.$$.fragment,s),y(Eo.$$.fragment,s),y(Yr.$$.fragment,s),y(xo.$$.fragment,s),y(Zr.$$.fragment,s),y(ea.$$.fragment,s),y(ta.$$.fragment,s),y(sa.$$.fragment,s),y(ca.$$.fragment,s),y(jo.$$.fragment,s),y(pa.$$.fragment,s),y(ha.$$.fragment,s),y(ua.$$.fragment,s),y(wa.$$.fragment,s),y(Po.$$.fragment,s),y(ya.$$.fragment,s),y($a.$$.fragment,s),y(Da.$$.fragment,s),y(Ca.$$.fragment,s),y(Ao.$$.fragment,s),y(Pa.$$.fragment,s),y(qa.$$.fragment,s),y(Aa.$$.fragment,s),y(Ua.$$.fragment,s),y(No.$$.fragment,s),y(Ha.$$.fragment,s),y(Qa.$$.fragment,s),y(Ka.$$.fragment,s),y(ti.$$.fragment,s),y(Lo.$$.fragment,s),y(si.$$.fragment,s),y(oi.$$.fragment,s),y(ni.$$.fragment,s),y(hi.$$.fragment,s),y(Wo.$$.fragment,s),y(ui.$$.fragment,s),ph=!1},d(s){t(p),s&&t(F),s&&t(g),$(_),s&&t(K),s&&t(E),$(X),s&&t(ae),s&&t(N),s&&t(ie),s&&t(ee),s&&t(le),s&&t(I),s&&t(P),s&&t(te),s&&t(de),s&&t(h),s&&t(wp),s&&t(bt),s&&t(yp),s&&t(as),$(tn),s&&t($p),s&&t(Ve),$(sn),$(nn),s&&t(Dp),s&&t(ls),$(rn),s&&t(Fp),s&&t(_t),$(an),s&&t(Bp),s&&t(ds),$(dn),s&&t(Mp),s&&t(vt),$(cn),s&&t(Ep),s&&t(cs),$(un),s&&t(xp),s&&t(Je),$(fn),$(vn),$(to),$(bn),s&&t(zp),s&&t(hs),$(kn),s&&t(jp),s&&t(Ge),$(Tn),$(Fn),$(oo),$(Bn),$(Mn),s&&t(Cp),s&&t(fs),$(En),s&&t(Pp),s&&t(Xe),$(xn),$(Pn),$(ro),$(qn),$(An),$(On),$(Nn),s&&t(qp),s&&t(gs),$(In),s&&t(Ap),s&&t(Ye),$(Ln),$(Un),$(io),$(Hn),s&&t(Op),s&&t(vs),$(Qn),s&&t(Np),s&&t(Ze),$(Kn),$(Xn),$(co),$(Yn),$(Zn),s&&t(Ip),s&&t(ks),$(er),s&&t(Lp),s&&t(et),$(tr),$(rr),$(ho),$(ar),$(ir),s&&t(Sp),s&&t(ys),$(lr),s&&t(Wp),s&&t(qe),$(dr),$(fo),$(ur),$(mo),$(fr),s&&t(Rp),s&&t(Ds),$(mr),s&&t(Up),s&&t(Ae),$(gr),$(_o),$(Tr),$(vo),$(wr),$(yr),s&&t(Hp),s&&t(Bs),$($r),s&&t(Qp),s&&t(Oe),$(Dr),$(ko),$(Er),$(To),$(xr),$(zr),s&&t(Kp),s&&t(Es),$(jr),s&&t(Vp),s&&t(Ne),$(Cr),$(yo),$(Or),$($o),$(Nr),s&&t(Jp),s&&t(zs),$(Ir),s&&t(Gp),s&&t(Ie),$(Lr),$(Fo),$(Ur),$(Bo),$(Hr),$(Qr),s&&t(Xp),s&&t(Cs),$(Kr),s&&t(Yp),s&&t(Le),$(Vr),$(Eo),$(Yr),$(xo),$(Zr),$(ea),s&&t(Zp),s&&t(As),$(ta),s&&t(eh),s&&t(Me),$(sa),$(ca),$(jo),$(pa),s&&t(th),s&&t(Ns),$(ha),s&&t(sh),s&&t(Ee),$(ua),$(wa),$(Po),$(ya),s&&t(oh),s&&t(Ls),$($a),s&&t(nh),s&&t(xe),$(Da),$(Ca),$(Ao),$(Pa),s&&t(rh),s&&t(Ws),$(qa),s&&t(ah),s&&t(ze),$(Aa),$(Ua),$(No),$(Ha),s&&t(ih),s&&t(Us),$(Qa),s&&t(lh),s&&t(je),$(Ka),$(ti),$(Lo),$(si),s&&t(dh),s&&t(Qs),$(oi),s&&t(ch),s&&t(Ce),$(ni),$(hi),$(Wo),$(ui)}}}const ZF={local:"distilbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.DistilBertConfig",title:"DistilBertConfig"},{local:"transformers.DistilBertTokenizer",title:"DistilBertTokenizer"},{local:"transformers.DistilBertTokenizerFast",title:"DistilBertTokenizerFast"},{local:"transformers.DistilBertModel",title:"DistilBertModel"},{local:"transformers.DistilBertForMaskedLM",title:"DistilBertForMaskedLM"},{local:"transformers.DistilBertForSequenceClassification",title:"DistilBertForSequenceClassification"},{local:"transformers.DistilBertForMultipleChoice",title:"DistilBertForMultipleChoice"},{local:"transformers.DistilBertForTokenClassification",title:"DistilBertForTokenClassification"},{local:"transformers.DistilBertForQuestionAnswering",title:"DistilBertForQuestionAnswering"},{local:"transformers.TFDistilBertModel",title:"TFDistilBertModel"},{local:"transformers.TFDistilBertForMaskedLM",title:"TFDistilBertForMaskedLM"},{local:"transformers.TFDistilBertForSequenceClassification",title:"TFDistilBertForSequenceClassification"},{local:"transformers.TFDistilBertForMultipleChoice",title:"TFDistilBertForMultipleChoice"},{local:"transformers.TFDistilBertForTokenClassification",title:"TFDistilBertForTokenClassification"},{local:"transformers.TFDistilBertForQuestionAnswering",title:"TFDistilBertForQuestionAnswering"},{local:"transformers.FlaxDistilBertModel",title:"FlaxDistilBertModel"},{local:"transformers.FlaxDistilBertForMaskedLM",title:"FlaxDistilBertForMaskedLM"},{local:"transformers.FlaxDistilBertForSequenceClassification",title:"FlaxDistilBertForSequenceClassification"},{local:"transformers.FlaxDistilBertForMultipleChoice",title:"FlaxDistilBertForMultipleChoice"},{local:"transformers.FlaxDistilBertForTokenClassification",title:"FlaxDistilBertForTokenClassification"},{local:"transformers.FlaxDistilBertForQuestionAnswering",title:"FlaxDistilBertForQuestionAnswering"}],title:"DistilBERT"};function eB(j){return BF(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class aB extends yF{constructor(p){super();$F(this,p,eB,YF,DF,{})}}export{aB as default,ZF as metadata};
