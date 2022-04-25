import{S as yF,i as $F,s as FF,e as o,k as l,w as v,t as a,M as DF,c as n,d as t,m as d,a as r,x as k,h as i,b as c,F as e,g as u,y as T,q as w,o as y,B as $,v as BF}from"../../chunks/vendor-6b77c823.js";import{T as ge}from"../../chunks/Tip-39098574.js";import{D as H}from"../../chunks/Docstring-1088f2fb.js";import{C as re}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ve}from"../../chunks/IconCopyLink-7a11ce68.js";function MF(j){let p,D,g,b,F;return{c(){p=o("p"),D=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),b=a("Module"),F=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var m=r(p);D=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(m,"CODE",{});var B=r(g);b=i(B,"Module"),B.forEach(t),F=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,D),e(p,g),e(g,b),e(p,F)},d(_){_&&t(p)}}}function EF(j){let p,D,g,b,F;return{c(){p=o("p"),D=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),b=a("Module"),F=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var m=r(p);D=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(m,"CODE",{});var B=r(g);b=i(B,"Module"),B.forEach(t),F=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,D),e(p,g),e(g,b),e(p,F)},d(_){_&&t(p)}}}function xF(j){let p,D,g,b,F;return{c(){p=o("p"),D=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),b=a("Module"),F=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var m=r(p);D=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(m,"CODE",{});var B=r(g);b=i(B,"Module"),B.forEach(t),F=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,D),e(p,g),e(g,b),e(p,F)},d(_){_&&t(p)}}}function zF(j){let p,D,g,b,F;return{c(){p=o("p"),D=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),b=a("Module"),F=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var m=r(p);D=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(m,"CODE",{});var B=r(g);b=i(B,"Module"),B.forEach(t),F=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,D),e(p,g),e(g,b),e(p,F)},d(_){_&&t(p)}}}function jF(j){let p,D,g,b,F;return{c(){p=o("p"),D=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),b=a("Module"),F=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var m=r(p);D=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(m,"CODE",{});var B=r(g);b=i(B,"Module"),B.forEach(t),F=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,D),e(p,g),e(g,b),e(p,F)},d(_){_&&t(p)}}}function CF(j){let p,D,g,b,F;return{c(){p=o("p"),D=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),b=a("Module"),F=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var m=r(p);D=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(m,"CODE",{});var B=r(g);b=i(B,"Module"),B.forEach(t),F=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,D),e(p,g),e(g,b),e(p,F)},d(_){_&&t(p)}}}function qF(j){let p,D,g,b,F,_,m,B,ce,V,E,G,S,X,pe,I,he,ae,N,P,Y,K,x,z,ue,W,se,me,R,ie,ee,A,le,L,oe,fe,q,te,U,de;return{c(){p=o("p"),D=a("TF 2.0 models accepts two formats as inputs:"),g=l(),b=o("ul"),F=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),me=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),fe=l(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);D=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),b=n(h,"UL",{});var J=r(b);F=n(J,"LI",{});var _e=r(F);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),m=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var be=r(S);X=i(be,"tf.keras.Model.fit"),be.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),P=n(h,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var Q=r(z);ue=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),me=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var Fe=r(R);ie=i(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var De=r(L);oe=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,D),u(h,g,M),u(h,b,M),e(b,F),e(F,_),e(b,m),e(b,B),e(B,ce),u(h,V,M),u(h,E,M),e(E,G),e(E,S),e(S,X),e(E,pe),e(E,I),e(I,he),e(E,ae),u(h,N,M),u(h,P,M),e(P,Y),u(h,K,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,me),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,L),e(L,oe),e(x,fe),e(x,q),e(q,te),e(q,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(b),h&&t(V),h&&t(E),h&&t(N),h&&t(P),h&&t(K),h&&t(x)}}}function PF(j){let p,D,g,b,F;return{c(){p=o("p"),D=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),b=a("Module"),F=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var m=r(p);D=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(m,"CODE",{});var B=r(g);b=i(B,"Module"),B.forEach(t),F=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,D),e(p,g),e(g,b),e(p,F)},d(_){_&&t(p)}}}function AF(j){let p,D,g,b,F,_,m,B,ce,V,E,G,S,X,pe,I,he,ae,N,P,Y,K,x,z,ue,W,se,me,R,ie,ee,A,le,L,oe,fe,q,te,U,de;return{c(){p=o("p"),D=a("TF 2.0 models accepts two formats as inputs:"),g=l(),b=o("ul"),F=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),me=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),fe=l(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);D=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),b=n(h,"UL",{});var J=r(b);F=n(J,"LI",{});var _e=r(F);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),m=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var be=r(S);X=i(be,"tf.keras.Model.fit"),be.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),P=n(h,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var Q=r(z);ue=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),me=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var Fe=r(R);ie=i(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var De=r(L);oe=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,D),u(h,g,M),u(h,b,M),e(b,F),e(F,_),e(b,m),e(b,B),e(B,ce),u(h,V,M),u(h,E,M),e(E,G),e(E,S),e(S,X),e(E,pe),e(E,I),e(I,he),e(E,ae),u(h,N,M),u(h,P,M),e(P,Y),u(h,K,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,me),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,L),e(L,oe),e(x,fe),e(x,q),e(q,te),e(q,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(b),h&&t(V),h&&t(E),h&&t(N),h&&t(P),h&&t(K),h&&t(x)}}}function OF(j){let p,D,g,b,F;return{c(){p=o("p"),D=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),b=a("Module"),F=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var m=r(p);D=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(m,"CODE",{});var B=r(g);b=i(B,"Module"),B.forEach(t),F=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,D),e(p,g),e(g,b),e(p,F)},d(_){_&&t(p)}}}function NF(j){let p,D,g,b,F,_,m,B,ce,V,E,G,S,X,pe,I,he,ae,N,P,Y,K,x,z,ue,W,se,me,R,ie,ee,A,le,L,oe,fe,q,te,U,de;return{c(){p=o("p"),D=a("TF 2.0 models accepts two formats as inputs:"),g=l(),b=o("ul"),F=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),me=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),fe=l(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);D=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),b=n(h,"UL",{});var J=r(b);F=n(J,"LI",{});var _e=r(F);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),m=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var be=r(S);X=i(be,"tf.keras.Model.fit"),be.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),P=n(h,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var Q=r(z);ue=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),me=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var Fe=r(R);ie=i(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var De=r(L);oe=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,D),u(h,g,M),u(h,b,M),e(b,F),e(F,_),e(b,m),e(b,B),e(B,ce),u(h,V,M),u(h,E,M),e(E,G),e(E,S),e(S,X),e(E,pe),e(E,I),e(I,he),e(E,ae),u(h,N,M),u(h,P,M),e(P,Y),u(h,K,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,me),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,L),e(L,oe),e(x,fe),e(x,q),e(q,te),e(q,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(b),h&&t(V),h&&t(E),h&&t(N),h&&t(P),h&&t(K),h&&t(x)}}}function LF(j){let p,D,g,b,F;return{c(){p=o("p"),D=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),b=a("Module"),F=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var m=r(p);D=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(m,"CODE",{});var B=r(g);b=i(B,"Module"),B.forEach(t),F=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,D),e(p,g),e(g,b),e(p,F)},d(_){_&&t(p)}}}function SF(j){let p,D,g,b,F,_,m,B,ce,V,E,G,S,X,pe,I,he,ae,N,P,Y,K,x,z,ue,W,se,me,R,ie,ee,A,le,L,oe,fe,q,te,U,de;return{c(){p=o("p"),D=a("TF 2.0 models accepts two formats as inputs:"),g=l(),b=o("ul"),F=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),me=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),fe=l(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);D=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),b=n(h,"UL",{});var J=r(b);F=n(J,"LI",{});var _e=r(F);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),m=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var be=r(S);X=i(be,"tf.keras.Model.fit"),be.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),P=n(h,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var Q=r(z);ue=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),me=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var Fe=r(R);ie=i(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var De=r(L);oe=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,D),u(h,g,M),u(h,b,M),e(b,F),e(F,_),e(b,m),e(b,B),e(B,ce),u(h,V,M),u(h,E,M),e(E,G),e(E,S),e(S,X),e(E,pe),e(E,I),e(I,he),e(E,ae),u(h,N,M),u(h,P,M),e(P,Y),u(h,K,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,me),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,L),e(L,oe),e(x,fe),e(x,q),e(q,te),e(q,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(b),h&&t(V),h&&t(E),h&&t(N),h&&t(P),h&&t(K),h&&t(x)}}}function IF(j){let p,D,g,b,F;return{c(){p=o("p"),D=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),b=a("Module"),F=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var m=r(p);D=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(m,"CODE",{});var B=r(g);b=i(B,"Module"),B.forEach(t),F=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,D),e(p,g),e(g,b),e(p,F)},d(_){_&&t(p)}}}function WF(j){let p,D,g,b,F,_,m,B,ce,V,E,G,S,X,pe,I,he,ae,N,P,Y,K,x,z,ue,W,se,me,R,ie,ee,A,le,L,oe,fe,q,te,U,de;return{c(){p=o("p"),D=a("TF 2.0 models accepts two formats as inputs:"),g=l(),b=o("ul"),F=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),me=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),fe=l(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);D=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),b=n(h,"UL",{});var J=r(b);F=n(J,"LI",{});var _e=r(F);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),m=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var be=r(S);X=i(be,"tf.keras.Model.fit"),be.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),P=n(h,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var Q=r(z);ue=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),me=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var Fe=r(R);ie=i(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var De=r(L);oe=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,D),u(h,g,M),u(h,b,M),e(b,F),e(F,_),e(b,m),e(b,B),e(B,ce),u(h,V,M),u(h,E,M),e(E,G),e(E,S),e(S,X),e(E,pe),e(E,I),e(I,he),e(E,ae),u(h,N,M),u(h,P,M),e(P,Y),u(h,K,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,me),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,L),e(L,oe),e(x,fe),e(x,q),e(q,te),e(q,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(b),h&&t(V),h&&t(E),h&&t(N),h&&t(P),h&&t(K),h&&t(x)}}}function RF(j){let p,D,g,b,F;return{c(){p=o("p"),D=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),b=a("Module"),F=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var m=r(p);D=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(m,"CODE",{});var B=r(g);b=i(B,"Module"),B.forEach(t),F=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,D),e(p,g),e(g,b),e(p,F)},d(_){_&&t(p)}}}function UF(j){let p,D,g,b,F,_,m,B,ce,V,E,G,S,X,pe,I,he,ae,N,P,Y,K,x,z,ue,W,se,me,R,ie,ee,A,le,L,oe,fe,q,te,U,de;return{c(){p=o("p"),D=a("TF 2.0 models accepts two formats as inputs:"),g=l(),b=o("ul"),F=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),me=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),fe=l(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);D=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),b=n(h,"UL",{});var J=r(b);F=n(J,"LI",{});var _e=r(F);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),m=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var be=r(S);X=i(be,"tf.keras.Model.fit"),be.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),P=n(h,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var Q=r(z);ue=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),me=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var Fe=r(R);ie=i(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var De=r(L);oe=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,D),u(h,g,M),u(h,b,M),e(b,F),e(F,_),e(b,m),e(b,B),e(B,ce),u(h,V,M),u(h,E,M),e(E,G),e(E,S),e(S,X),e(E,pe),e(E,I),e(I,he),e(E,ae),u(h,N,M),u(h,P,M),e(P,Y),u(h,K,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,me),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,L),e(L,oe),e(x,fe),e(x,q),e(q,te),e(q,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(b),h&&t(V),h&&t(E),h&&t(N),h&&t(P),h&&t(K),h&&t(x)}}}function QF(j){let p,D,g,b,F;return{c(){p=o("p"),D=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),b=a("Module"),F=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var m=r(p);D=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(m,"CODE",{});var B=r(g);b=i(B,"Module"),B.forEach(t),F=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,D),e(p,g),e(g,b),e(p,F)},d(_){_&&t(p)}}}function HF(j){let p,D,g,b,F;return{c(){p=o("p"),D=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),b=a("Module"),F=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var m=r(p);D=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(m,"CODE",{});var B=r(g);b=i(B,"Module"),B.forEach(t),F=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,D),e(p,g),e(g,b),e(p,F)},d(_){_&&t(p)}}}function VF(j){let p,D,g,b,F;return{c(){p=o("p"),D=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),b=a("Module"),F=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var m=r(p);D=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(m,"CODE",{});var B=r(g);b=i(B,"Module"),B.forEach(t),F=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,D),e(p,g),e(g,b),e(p,F)},d(_){_&&t(p)}}}function KF(j){let p,D,g,b,F;return{c(){p=o("p"),D=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),b=a("Module"),F=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var m=r(p);D=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(m,"CODE",{});var B=r(g);b=i(B,"Module"),B.forEach(t),F=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,D),e(p,g),e(g,b),e(p,F)},d(_){_&&t(p)}}}function JF(j){let p,D,g,b,F;return{c(){p=o("p"),D=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),b=a("Module"),F=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var m=r(p);D=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(m,"CODE",{});var B=r(g);b=i(B,"Module"),B.forEach(t),F=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,D),e(p,g),e(g,b),e(p,F)},d(_){_&&t(p)}}}function GF(j){let p,D,g,b,F;return{c(){p=o("p"),D=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),b=a("Module"),F=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var m=r(p);D=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(m,"CODE",{});var B=r(g);b=i(B,"Module"),B.forEach(t),F=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,D),e(p,g),e(g,b),e(p,F)},d(_){_&&t(p)}}}function XF(j){let p,D,g,b,F;return{c(){p=o("p"),D=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),b=a("Module"),F=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var m=r(p);D=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(m,"CODE",{});var B=r(g);b=i(B,"Module"),B.forEach(t),F=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(_,m){u(_,p,m),e(p,D),e(p,g),e(g,b),e(p,F)},d(_){_&&t(p)}}}function YF(j){let p,D,g,b,F,_,m,B,ce,V,E,G,S,X,pe,I,he,ae,N,P,Y,K,x,z,ue,W,se,me,R,ie,ee,A,le,L,oe,fe,q,te,U,de,h,M,J,_e,Te,O,be,we,ye,C,Q,$e,Fe,Z,De,ne,Be,Tu,wp,vt,wu,Yo,yu,$u,Zo,Fu,Du,en,Bu,Mu,yp,as,Js,Dl,tn,Eu,Bl,xu,$p,Ke,sn,zu,Ct,ju,bi,Cu,qu,vi,Pu,Au,on,Ou,Nu,Lu,is,Su,ki,Iu,Wu,Ti,Ru,Uu,Qu,Ml,Hu,Vu,nn,Fp,ls,Gs,El,rn,Ku,xl,Ju,Dp,_t,an,Gu,zl,Xu,Yu,Xs,wi,Zu,em,yi,tm,sm,om,ln,nm,$i,rm,am,Bp,ds,Ys,jl,dn,im,Cl,lm,Mp,bt,cn,dm,pn,cm,ql,pm,hm,um,Zs,Fi,mm,fm,Di,gm,_m,bm,hn,vm,Bi,km,Tm,Ep,cs,eo,Pl,un,wm,Al,ym,xp,Je,mn,$m,Ol,Fm,Dm,fn,Bm,Mi,Mm,Em,xm,gn,zm,_n,jm,Cm,qm,tt,bn,Pm,ps,Am,Ei,Om,Nm,Nl,Lm,Sm,Im,to,Wm,Ll,Rm,Um,vn,zp,hs,so,Sl,kn,Qm,Il,Hm,jp,Ge,Tn,Vm,wn,Km,Wl,Jm,Gm,Xm,yn,Ym,xi,Zm,ef,tf,$n,sf,Fn,of,nf,rf,Ie,Dn,af,us,lf,zi,df,cf,Rl,pf,hf,uf,oo,mf,Ul,ff,gf,Bn,_f,Mn,Cp,ms,no,Ql,En,bf,Hl,vf,qp,Xe,xn,kf,Vl,Tf,wf,zn,yf,ji,$f,Ff,Df,jn,Bf,Cn,Mf,Ef,xf,ke,qn,zf,fs,jf,Ci,Cf,qf,Kl,Pf,Af,Of,ro,Nf,Jl,Lf,Sf,Pn,If,An,Wf,Gl,Rf,Uf,On,Qf,Nn,Pp,gs,ao,Xl,Ln,Hf,Yl,Vf,Ap,Ye,Sn,Kf,Zl,Jf,Gf,In,Xf,qi,Yf,Zf,eg,Wn,tg,Rn,sg,og,ng,st,Un,rg,_s,ag,Pi,ig,lg,ed,dg,cg,pg,io,hg,td,ug,mg,Qn,Op,bs,lo,sd,Hn,fg,od,gg,Np,Ze,Vn,_g,nd,bg,vg,Kn,kg,Ai,Tg,wg,yg,Jn,$g,Gn,Fg,Dg,Bg,We,Xn,Mg,vs,Eg,Oi,xg,zg,rd,jg,Cg,qg,co,Pg,ad,Ag,Og,Yn,Ng,Zn,Lp,ks,po,id,er,Lg,ld,Sg,Sp,et,tr,Ig,Ts,Wg,dd,Rg,Ug,cd,Qg,Hg,Vg,sr,Kg,Ni,Jg,Gg,Xg,or,Yg,nr,Zg,e_,t_,Re,rr,s_,ws,o_,Li,n_,r_,pd,a_,i_,l_,ho,d_,hd,c_,p_,ar,h_,ir,Ip,ys,uo,ud,lr,u_,md,m_,Wp,Pe,dr,f_,fd,g_,__,cr,b_,Si,v_,k_,T_,pr,w_,hr,y_,$_,F_,mo,D_,ot,ur,B_,$s,M_,Ii,E_,x_,gd,z_,j_,C_,fo,q_,_d,P_,A_,mr,Rp,Fs,go,bd,fr,O_,vd,N_,Up,Ae,gr,L_,_r,S_,kd,I_,W_,R_,br,U_,Wi,Q_,H_,V_,vr,K_,kr,J_,G_,X_,_o,Y_,Ue,Tr,Z_,Ds,eb,Ri,tb,sb,Td,ob,nb,rb,bo,ab,wd,ib,lb,wr,db,yr,Qp,Bs,vo,yd,$r,cb,$d,pb,Hp,Oe,Fr,hb,Fd,ub,mb,Dr,fb,Ui,gb,_b,bb,Br,vb,Mr,kb,Tb,wb,ko,yb,Qe,Er,$b,Ms,Fb,Qi,Db,Bb,Dd,Mb,Eb,xb,To,zb,Bd,jb,Cb,xr,qb,zr,Vp,Es,wo,Md,jr,Pb,Ed,Ab,Kp,Ne,Cr,Ob,xd,Nb,Lb,qr,Sb,Hi,Ib,Wb,Rb,Pr,Ub,Ar,Qb,Hb,Vb,yo,Kb,nt,Or,Jb,xs,Gb,Vi,Xb,Yb,zd,Zb,ev,tv,$o,sv,jd,ov,nv,Nr,Jp,zs,Fo,Cd,Lr,rv,qd,av,Gp,Le,Sr,iv,Pd,lv,dv,Ir,cv,Ki,pv,hv,uv,Wr,mv,Rr,fv,gv,_v,Do,bv,He,Ur,vv,js,kv,Ji,Tv,wv,Ad,yv,$v,Fv,Bo,Dv,Od,Bv,Mv,Qr,Ev,Hr,Xp,Cs,Mo,Nd,Vr,xv,Ld,zv,Yp,Se,Kr,jv,qs,Cv,Sd,qv,Pv,Id,Av,Ov,Nv,Jr,Lv,Gi,Sv,Iv,Wv,Gr,Rv,Xr,Uv,Qv,Hv,Eo,Vv,Ve,Yr,Kv,Ps,Jv,Xi,Gv,Xv,Wd,Yv,Zv,ek,xo,tk,Rd,sk,ok,Zr,nk,ea,Zp,As,zo,Ud,ta,rk,Qd,ak,eh,Me,sa,ik,Hd,lk,dk,oa,ck,Yi,pk,hk,uk,na,mk,ra,fk,gk,_k,Vd,bk,vk,qt,Kd,aa,kk,Tk,Jd,ia,wk,yk,Gd,la,$k,Fk,Xd,da,Dk,Bk,rt,ca,Mk,Os,Ek,Yd,xk,zk,Zd,jk,Ck,qk,jo,Pk,ec,Ak,Ok,pa,th,Ns,Co,tc,ha,Nk,sc,Lk,sh,Ee,ua,Sk,ma,Ik,oc,Wk,Rk,Uk,fa,Qk,Zi,Hk,Vk,Kk,ga,Jk,_a,Gk,Xk,Yk,nc,Zk,eT,Pt,rc,ba,tT,sT,ac,va,oT,nT,ic,ka,rT,aT,lc,Ta,iT,lT,at,wa,dT,Ls,cT,dc,pT,hT,cc,uT,mT,fT,qo,gT,pc,_T,bT,ya,oh,Ss,Po,hc,$a,vT,uc,kT,nh,xe,Fa,TT,mc,wT,yT,Da,$T,el,FT,DT,BT,Ba,MT,Ma,ET,xT,zT,fc,jT,CT,At,gc,Ea,qT,PT,_c,xa,AT,OT,bc,za,NT,LT,vc,ja,ST,IT,it,Ca,WT,Is,RT,kc,UT,QT,Tc,HT,VT,KT,Ao,JT,wc,GT,XT,qa,rh,Ws,Oo,yc,Pa,YT,$c,ZT,ah,ze,Aa,ew,Fc,tw,sw,Oa,ow,tl,nw,rw,aw,Na,iw,La,lw,dw,cw,Dc,pw,hw,Ot,Bc,Sa,uw,mw,Mc,Ia,fw,gw,Ec,Wa,_w,bw,xc,Ra,vw,kw,lt,Ua,Tw,Rs,ww,zc,yw,$w,jc,Fw,Dw,Bw,No,Mw,Cc,Ew,xw,Qa,ih,Us,Lo,qc,Ha,zw,Pc,jw,lh,je,Va,Cw,Ac,qw,Pw,Ka,Aw,sl,Ow,Nw,Lw,Ja,Sw,Ga,Iw,Ww,Rw,Oc,Uw,Qw,Nt,Nc,Xa,Hw,Vw,Lc,Ya,Kw,Jw,Sc,Za,Gw,Xw,Ic,ei,Yw,Zw,dt,ti,e1,Qs,t1,Wc,s1,o1,Rc,n1,r1,a1,So,i1,Uc,l1,d1,si,dh,Hs,Io,Qc,oi,c1,Hc,p1,ch,Ce,ni,h1,Vs,u1,Vc,m1,f1,Kc,g1,_1,b1,ri,v1,ol,k1,T1,w1,ai,y1,ii,$1,F1,D1,Jc,B1,M1,Lt,Gc,li,E1,x1,Xc,di,z1,j1,Yc,ci,C1,q1,Zc,pi,P1,A1,ct,hi,O1,Ks,N1,ep,L1,S1,tp,I1,W1,R1,Wo,U1,sp,Q1,H1,ui,ph;return _=new ve({}),X=new ve({}),tn=new ve({}),sn=new H({props:{name:"class transformers.DistilBertConfig",anchor:"transformers.DistilBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"max_position_embeddings",val:" = 512"},{name:"sinusoidal_pos_embds",val:" = False"},{name:"n_layers",val:" = 6"},{name:"n_heads",val:" = 12"},{name:"dim",val:" = 768"},{name:"hidden_dim",val:" = 3072"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"qa_dropout",val:" = 0.1"},{name:"seq_classif_dropout",val:" = 0.2"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DistilBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DistilBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertModel">DistilBertModel</a> or <a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.TFDistilBertModel">TFDistilBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.DistilBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
The dropout probabilities used in the question answering model <a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering">DistilBertForQuestionAnswering</a>.`,name:"qa_dropout"},{anchor:"transformers.DistilBertConfig.seq_classif_dropout",description:`<strong>seq_classif_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.2) &#x2014;
The dropout probabilities used in the sequence classification and the multiple choice model
<a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification">DistilBertForSequenceClassification</a>.`,name:"seq_classif_dropout"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/configuration_distilbert.py#L37"}}),nn=new re({props:{code:`from transformers import DistilBertModel, DistilBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),rn=new ve({}),an=new H({props:{name:"class transformers.DistilBertTokenizer",anchor:"transformers.DistilBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/tokenization_distilbert.py#L56"}}),dn=new ve({}),cn=new H({props:{name:"class transformers.DistilBertTokenizerFast",anchor:"transformers.DistilBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/tokenization_distilbert_fast.py#L65"}}),un=new ve({}),mn=new H({props:{name:"class transformers.DistilBertModel",anchor:"transformers.DistilBertModel",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_distilbert.py#L453"}}),bn=new H({props:{name:"forward",anchor:"transformers.DistilBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16920/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16920/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16920/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_distilbert.py#L525",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new ge({props:{$$slots:{default:[MF]},$$scope:{ctx:j}}}),vn=new re({props:{code:`from transformers import DistilBertTokenizer, DistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),kn=new ve({}),Tn=new H({props:{name:"class transformers.DistilBertForMaskedLM",anchor:"transformers.DistilBertForMaskedLM",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_distilbert.py#L581"}}),Dn=new H({props:{name:"forward",anchor:"transformers.DistilBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16920/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16920/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16920/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_distilbert.py#L623",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
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
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
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
`}}),En=new ve({}),xn=new H({props:{name:"class transformers.DistilBertForSequenceClassification",anchor:"transformers.DistilBertForSequenceClassification",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_distilbert.py#L687"}}),qn=new H({props:{name:"forward",anchor:"transformers.DistilBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16920/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16920/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16920/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_distilbert.py#L721",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new ge({props:{$$slots:{default:[xF]},$$scope:{ctx:j}}}),Pn=new re({props:{code:`import torch
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
model = DistilBertForSequenceClassification.from_pretrained(
    "distilbert-base-uncased", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),Ln=new ve({}),Sn=new H({props:{name:"class transformers.DistilBertForMultipleChoice",anchor:"transformers.DistilBertForMultipleChoice",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_distilbert.py#L1017"}}),Un=new H({props:{name:"forward",anchor:"transformers.DistilBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16920/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16920/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16920/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_distilbert.py#L1049",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),io=new ge({props:{$$slots:{default:[zF]},$$scope:{ctx:j}}}),Qn=new re({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Hn=new ve({}),Vn=new H({props:{name:"class transformers.DistilBertForTokenClassification",anchor:"transformers.DistilBertForTokenClassification",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_distilbert.py#L922"}}),Xn=new H({props:{name:"forward",anchor:"transformers.DistilBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16920/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16920/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16920/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_distilbert.py#L954",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
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
`}}),er=new ve({}),tr=new H({props:{name:"class transformers.DistilBertForQuestionAnswering",anchor:"transformers.DistilBertForQuestionAnswering",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_distilbert.py#L805"}}),rr=new H({props:{name:"forward",anchor:"transformers.DistilBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16920/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16920/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16920/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_distilbert.py#L837",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
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
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),lr=new ve({}),dr=new H({props:{name:"class transformers.TFDistilBertModel",anchor:"transformers.TFDistilBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_tf_distilbert.py#L522"}}),mo=new ge({props:{$$slots:{default:[qF]},$$scope:{ctx:j}}}),ur=new H({props:{name:"call",anchor:"transformers.TFDistilBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16920/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16920/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16920/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_tf_distilbert.py#L527",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),fo=new ge({props:{$$slots:{default:[PF]},$$scope:{ctx:j}}}),mr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),fr=new ve({}),gr=new H({props:{name:"class transformers.TFDistilBertForMaskedLM",anchor:"transformers.TFDistilBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_tf_distilbert.py#L609"}}),_o=new ge({props:{$$slots:{default:[AF]},$$scope:{ctx:j}}}),Tr=new H({props:{name:"call",anchor:"transformers.TFDistilBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16920/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16920/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16920/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_tf_distilbert.py#L629",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),bo=new ge({props:{$$slots:{default:[OF]},$$scope:{ctx:j}}}),wr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMaskedLM
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
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
`}}),$r=new ve({}),Fr=new H({props:{name:"class transformers.TFDistilBertForSequenceClassification",anchor:"transformers.TFDistilBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_tf_distilbert.py#L699"}}),ko=new ge({props:{$$slots:{default:[NF]},$$scope:{ctx:j}}}),Er=new H({props:{name:"call",anchor:"transformers.TFDistilBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16920/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16920/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16920/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_tf_distilbert.py#L716",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),To=new ge({props:{$$slots:{default:[LF]},$$scope:{ctx:j}}}),xr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForSequenceClassification
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
`}}),jr=new ve({}),Cr=new H({props:{name:"class transformers.TFDistilBertForMultipleChoice",anchor:"transformers.TFDistilBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_tf_distilbert.py#L862"}}),yo=new ge({props:{$$slots:{default:[SF]},$$scope:{ctx:j}}}),Or=new H({props:{name:"call",anchor:"transformers.TFDistilBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16920/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16920/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16920/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_tf_distilbert.py#L888",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$o=new ge({props:{$$slots:{default:[IF]},$$scope:{ctx:j}}}),Nr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Lr=new ve({}),Sr=new H({props:{name:"class transformers.TFDistilBertForTokenClassification",anchor:"transformers.TFDistilBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_tf_distilbert.py#L786"}}),Do=new ge({props:{$$slots:{default:[WF]},$$scope:{ctx:j}}}),Ur=new H({props:{name:"call",anchor:"transformers.TFDistilBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16920/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16920/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16920/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_tf_distilbert.py#L797",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bo=new ge({props:{$$slots:{default:[RF]},$$scope:{ctx:j}}}),Qr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForTokenClassification
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
`}}),Hr=new re({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),Vr=new ve({}),Kr=new H({props:{name:"class transformers.TFDistilBertForQuestionAnswering",anchor:"transformers.TFDistilBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_tf_distilbert.py#L987"}}),Eo=new ge({props:{$$slots:{default:[UF]},$$scope:{ctx:j}}}),Yr=new H({props:{name:"call",anchor:"transformers.TFDistilBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16920/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16920/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16920/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_tf_distilbert.py#L998",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xo=new ge({props:{$$slots:{default:[QF]},$$scope:{ctx:j}}}),Zr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForQuestionAnswering
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
target_start_index = tf.constant([14])
target_end_index = tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),ta=new ve({}),sa=new H({props:{name:"class transformers.FlaxDistilBertModel",anchor:"transformers.FlaxDistilBertModel",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_flax_distilbert.py#L535"}}),ca=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16920/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16920/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16920/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16920/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458"}}),jo=new ge({props:{$$slots:{default:[HF]},$$scope:{ctx:j}}}),pa=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertModel

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ha=new ve({}),ua=new H({props:{name:"class transformers.FlaxDistilBertForMaskedLM",anchor:"transformers.FlaxDistilBertForMaskedLM",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_flax_distilbert.py#L608"}}),wa=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16920/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16920/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16920/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16920/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qo=new ge({props:{$$slots:{default:[VF]},$$scope:{ctx:j}}}),ya=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMaskedLM

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$a=new ve({}),Fa=new H({props:{name:"class transformers.FlaxDistilBertForSequenceClassification",anchor:"transformers.FlaxDistilBertForSequenceClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_flax_distilbert.py#L677"}}),Ca=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16920/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16920/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16920/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16920/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ao=new ge({props:{$$slots:{default:[KF]},$$scope:{ctx:j}}}),qa=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Pa=new ve({}),Aa=new H({props:{name:"class transformers.FlaxDistilBertForMultipleChoice",anchor:"transformers.FlaxDistilBertForMultipleChoice",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_flax_distilbert.py#L757"}}),Ua=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16920/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16920/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16920/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16920/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new ge({props:{$$slots:{default:[JF]},$$scope:{ctx:j}}}),Qa=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ha=new ve({}),Va=new H({props:{name:"class transformers.FlaxDistilBertForTokenClassification",anchor:"transformers.FlaxDistilBertForTokenClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_flax_distilbert.py#L823"}}),ti=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16920/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16920/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16920/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16920/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new ge({props:{$$slots:{default:[GF]},$$scope:{ctx:j}}}),si=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForTokenClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),oi=new ve({}),ni=new H({props:{name:"class transformers.FlaxDistilBertForQuestionAnswering",anchor:"transformers.FlaxDistilBertForQuestionAnswering",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_flax_distilbert.py#L893"}}),hi=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16920/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16920/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16920/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16920/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16920/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16920/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){p=o("meta"),D=l(),g=o("h1"),b=o("a"),F=o("span"),v(_.$$.fragment),m=l(),B=o("span"),ce=a("DistilBERT"),V=l(),E=o("h2"),G=o("a"),S=o("span"),v(X.$$.fragment),pe=l(),I=o("span"),he=a("Overview"),ae=l(),N=o("p"),P=a("The DistilBERT model was proposed in the blog post "),Y=o("a"),K=a(`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),x=a(", and the paper "),z=o("a"),ue=a(`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),W=a(`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),se=o("em"),me=a("bert-base-uncased"),R=a(`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),ie=l(),ee=o("p"),A=a("The abstract from the paper is the following:"),le=l(),L=o("p"),oe=o("em"),fe=a(`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),q=l(),te=o("p"),U=a("Tips:"),de=l(),h=o("ul"),M=o("li"),J=a("DistilBERT doesn\u2019t have "),_e=o("code"),Te=a("token_type_ids"),O=a(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),be=o("code"),we=a("tokenizer.sep_token"),ye=a(" (or "),C=o("code"),Q=a("[SEP]"),$e=a(")."),Fe=l(),Z=o("li"),De=a("DistilBERT doesn\u2019t have options to select the input positions ("),ne=o("code"),Be=a("position_ids"),Tu=a(` input). This could be added if
necessary though, just let us know if you need this option.`),wp=l(),vt=o("p"),wu=a("This model was contributed by "),Yo=o("a"),yu=a("victorsanh"),$u=a(`. This model jax version was
contributed by `),Zo=o("a"),Fu=a("kamalkraj"),Du=a(". The original code can be found "),en=o("a"),Bu=a("here"),Mu=a("."),yp=l(),as=o("h2"),Js=o("a"),Dl=o("span"),v(tn.$$.fragment),Eu=l(),Bl=o("span"),xu=a("DistilBertConfig"),$p=l(),Ke=o("div"),v(sn.$$.fragment),zu=l(),Ct=o("p"),ju=a("This is the configuration class to store the configuration of a "),bi=o("a"),Cu=a("DistilBertModel"),qu=a(" or a "),vi=o("a"),Pu=a("TFDistilBertModel"),Au=a(`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),on=o("a"),Ou=a("distilbert-base-uncased"),Nu=a(" architecture."),Lu=l(),is=o("p"),Su=a("Configuration objects inherit from "),ki=o("a"),Iu=a("PretrainedConfig"),Wu=a(` and can be used to control the model outputs. Read the
documentation from `),Ti=o("a"),Ru=a("PretrainedConfig"),Uu=a(" for more information."),Qu=l(),Ml=o("p"),Hu=a("Examples:"),Vu=l(),v(nn.$$.fragment),Fp=l(),ls=o("h2"),Gs=o("a"),El=o("span"),v(rn.$$.fragment),Ku=l(),xl=o("span"),Ju=a("DistilBertTokenizer"),Dp=l(),_t=o("div"),v(an.$$.fragment),Gu=l(),zl=o("p"),Xu=a("Construct a DistilBERT tokenizer."),Yu=l(),Xs=o("p"),wi=o("a"),Zu=a("DistilBertTokenizer"),em=a(" is identical to "),yi=o("a"),tm=a("BertTokenizer"),sm=a(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),om=l(),ln=o("p"),nm=a("Refer to superclass "),$i=o("a"),rm=a("BertTokenizer"),am=a(" for usage examples and documentation concerning parameters."),Bp=l(),ds=o("h2"),Ys=o("a"),jl=o("span"),v(dn.$$.fragment),im=l(),Cl=o("span"),lm=a("DistilBertTokenizerFast"),Mp=l(),bt=o("div"),v(cn.$$.fragment),dm=l(),pn=o("p"),cm=a("Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),ql=o("em"),pm=a("tokenizers"),hm=a(" library)."),um=l(),Zs=o("p"),Fi=o("a"),mm=a("DistilBertTokenizerFast"),fm=a(" is identical to "),Di=o("a"),gm=a("BertTokenizerFast"),_m=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),bm=l(),hn=o("p"),vm=a("Refer to superclass "),Bi=o("a"),km=a("BertTokenizerFast"),Tm=a(" for usage examples and documentation concerning parameters."),Ep=l(),cs=o("h2"),eo=o("a"),Pl=o("span"),v(un.$$.fragment),wm=l(),Al=o("span"),ym=a("DistilBertModel"),xp=l(),Je=o("div"),v(mn.$$.fragment),$m=l(),Ol=o("p"),Fm=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),Dm=l(),fn=o("p"),Bm=a("This model inherits from "),Mi=o("a"),Mm=a("PreTrainedModel"),Em=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xm=l(),gn=o("p"),zm=a("This model is also a PyTorch "),_n=o("a"),jm=a("torch.nn.Module"),Cm=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qm=l(),tt=o("div"),v(bn.$$.fragment),Pm=l(),ps=o("p"),Am=a("The "),Ei=o("a"),Om=a("DistilBertModel"),Nm=a(" forward method, overrides the "),Nl=o("code"),Lm=a("__call__"),Sm=a(" special method."),Im=l(),v(to.$$.fragment),Wm=l(),Ll=o("p"),Rm=a("Example:"),Um=l(),v(vn.$$.fragment),zp=l(),hs=o("h2"),so=o("a"),Sl=o("span"),v(kn.$$.fragment),Qm=l(),Il=o("span"),Hm=a("DistilBertForMaskedLM"),jp=l(),Ge=o("div"),v(Tn.$$.fragment),Vm=l(),wn=o("p"),Km=a("DistilBert Model with a "),Wl=o("code"),Jm=a("masked language modeling"),Gm=a(" head on top."),Xm=l(),yn=o("p"),Ym=a("This model inherits from "),xi=o("a"),Zm=a("PreTrainedModel"),ef=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tf=l(),$n=o("p"),sf=a("This model is also a PyTorch "),Fn=o("a"),of=a("torch.nn.Module"),nf=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rf=l(),Ie=o("div"),v(Dn.$$.fragment),af=l(),us=o("p"),lf=a("The "),zi=o("a"),df=a("DistilBertForMaskedLM"),cf=a(" forward method, overrides the "),Rl=o("code"),pf=a("__call__"),hf=a(" special method."),uf=l(),v(oo.$$.fragment),mf=l(),Ul=o("p"),ff=a("Example:"),gf=l(),v(Bn.$$.fragment),_f=l(),v(Mn.$$.fragment),Cp=l(),ms=o("h2"),no=o("a"),Ql=o("span"),v(En.$$.fragment),bf=l(),Hl=o("span"),vf=a("DistilBertForSequenceClassification"),qp=l(),Xe=o("div"),v(xn.$$.fragment),kf=l(),Vl=o("p"),Tf=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wf=l(),zn=o("p"),yf=a("This model inherits from "),ji=o("a"),$f=a("PreTrainedModel"),Ff=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Df=l(),jn=o("p"),Bf=a("This model is also a PyTorch "),Cn=o("a"),Mf=a("torch.nn.Module"),Ef=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xf=l(),ke=o("div"),v(qn.$$.fragment),zf=l(),fs=o("p"),jf=a("The "),Ci=o("a"),Cf=a("DistilBertForSequenceClassification"),qf=a(" forward method, overrides the "),Kl=o("code"),Pf=a("__call__"),Af=a(" special method."),Of=l(),v(ro.$$.fragment),Nf=l(),Jl=o("p"),Lf=a("Example of single-label classification:"),Sf=l(),v(Pn.$$.fragment),If=l(),v(An.$$.fragment),Wf=l(),Gl=o("p"),Rf=a("Example of multi-label classification:"),Uf=l(),v(On.$$.fragment),Qf=l(),v(Nn.$$.fragment),Pp=l(),gs=o("h2"),ao=o("a"),Xl=o("span"),v(Ln.$$.fragment),Hf=l(),Yl=o("span"),Vf=a("DistilBertForMultipleChoice"),Ap=l(),Ye=o("div"),v(Sn.$$.fragment),Kf=l(),Zl=o("p"),Jf=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Gf=l(),In=o("p"),Xf=a("This model inherits from "),qi=o("a"),Yf=a("PreTrainedModel"),Zf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eg=l(),Wn=o("p"),tg=a("This model is also a PyTorch "),Rn=o("a"),sg=a("torch.nn.Module"),og=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ng=l(),st=o("div"),v(Un.$$.fragment),rg=l(),_s=o("p"),ag=a("The "),Pi=o("a"),ig=a("DistilBertForMultipleChoice"),lg=a(" forward method, overrides the "),ed=o("code"),dg=a("__call__"),cg=a(" special method."),pg=l(),v(io.$$.fragment),hg=l(),td=o("p"),ug=a("Examples:"),mg=l(),v(Qn.$$.fragment),Op=l(),bs=o("h2"),lo=o("a"),sd=o("span"),v(Hn.$$.fragment),fg=l(),od=o("span"),gg=a("DistilBertForTokenClassification"),Np=l(),Ze=o("div"),v(Vn.$$.fragment),_g=l(),nd=o("p"),bg=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),vg=l(),Kn=o("p"),kg=a("This model inherits from "),Ai=o("a"),Tg=a("PreTrainedModel"),wg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yg=l(),Jn=o("p"),$g=a("This model is also a PyTorch "),Gn=o("a"),Fg=a("torch.nn.Module"),Dg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bg=l(),We=o("div"),v(Xn.$$.fragment),Mg=l(),vs=o("p"),Eg=a("The "),Oi=o("a"),xg=a("DistilBertForTokenClassification"),zg=a(" forward method, overrides the "),rd=o("code"),jg=a("__call__"),Cg=a(" special method."),qg=l(),v(co.$$.fragment),Pg=l(),ad=o("p"),Ag=a("Example:"),Og=l(),v(Yn.$$.fragment),Ng=l(),v(Zn.$$.fragment),Lp=l(),ks=o("h2"),po=o("a"),id=o("span"),v(er.$$.fragment),Lg=l(),ld=o("span"),Sg=a("DistilBertForQuestionAnswering"),Sp=l(),et=o("div"),v(tr.$$.fragment),Ig=l(),Ts=o("p"),Wg=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),dd=o("code"),Rg=a("span start logits"),Ug=a(" and "),cd=o("code"),Qg=a("span end logits"),Hg=a(")."),Vg=l(),sr=o("p"),Kg=a("This model inherits from "),Ni=o("a"),Jg=a("PreTrainedModel"),Gg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xg=l(),or=o("p"),Yg=a("This model is also a PyTorch "),nr=o("a"),Zg=a("torch.nn.Module"),e_=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),t_=l(),Re=o("div"),v(rr.$$.fragment),s_=l(),ws=o("p"),o_=a("The "),Li=o("a"),n_=a("DistilBertForQuestionAnswering"),r_=a(" forward method, overrides the "),pd=o("code"),a_=a("__call__"),i_=a(" special method."),l_=l(),v(ho.$$.fragment),d_=l(),hd=o("p"),c_=a("Example:"),p_=l(),v(ar.$$.fragment),h_=l(),v(ir.$$.fragment),Ip=l(),ys=o("h2"),uo=o("a"),ud=o("span"),v(lr.$$.fragment),u_=l(),md=o("span"),m_=a("TFDistilBertModel"),Wp=l(),Pe=o("div"),v(dr.$$.fragment),f_=l(),fd=o("p"),g_=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),__=l(),cr=o("p"),b_=a("This model inherits from "),Si=o("a"),v_=a("TFPreTrainedModel"),k_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),T_=l(),pr=o("p"),w_=a("This model is also a "),hr=o("a"),y_=a("tf.keras.Model"),$_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),F_=l(),v(mo.$$.fragment),D_=l(),ot=o("div"),v(ur.$$.fragment),B_=l(),$s=o("p"),M_=a("The "),Ii=o("a"),E_=a("TFDistilBertModel"),x_=a(" forward method, overrides the "),gd=o("code"),z_=a("__call__"),j_=a(" special method."),C_=l(),v(fo.$$.fragment),q_=l(),_d=o("p"),P_=a("Example:"),A_=l(),v(mr.$$.fragment),Rp=l(),Fs=o("h2"),go=o("a"),bd=o("span"),v(fr.$$.fragment),O_=l(),vd=o("span"),N_=a("TFDistilBertForMaskedLM"),Up=l(),Ae=o("div"),v(gr.$$.fragment),L_=l(),_r=o("p"),S_=a("DistilBert Model with a "),kd=o("code"),I_=a("masked language modeling"),W_=a(" head on top."),R_=l(),br=o("p"),U_=a("This model inherits from "),Wi=o("a"),Q_=a("TFPreTrainedModel"),H_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),V_=l(),vr=o("p"),K_=a("This model is also a "),kr=o("a"),J_=a("tf.keras.Model"),G_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),X_=l(),v(_o.$$.fragment),Y_=l(),Ue=o("div"),v(Tr.$$.fragment),Z_=l(),Ds=o("p"),eb=a("The "),Ri=o("a"),tb=a("TFDistilBertForMaskedLM"),sb=a(" forward method, overrides the "),Td=o("code"),ob=a("__call__"),nb=a(" special method."),rb=l(),v(bo.$$.fragment),ab=l(),wd=o("p"),ib=a("Example:"),lb=l(),v(wr.$$.fragment),db=l(),v(yr.$$.fragment),Qp=l(),Bs=o("h2"),vo=o("a"),yd=o("span"),v($r.$$.fragment),cb=l(),$d=o("span"),pb=a("TFDistilBertForSequenceClassification"),Hp=l(),Oe=o("div"),v(Fr.$$.fragment),hb=l(),Fd=o("p"),ub=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),mb=l(),Dr=o("p"),fb=a("This model inherits from "),Ui=o("a"),gb=a("TFPreTrainedModel"),_b=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bb=l(),Br=o("p"),vb=a("This model is also a "),Mr=o("a"),kb=a("tf.keras.Model"),Tb=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wb=l(),v(ko.$$.fragment),yb=l(),Qe=o("div"),v(Er.$$.fragment),$b=l(),Ms=o("p"),Fb=a("The "),Qi=o("a"),Db=a("TFDistilBertForSequenceClassification"),Bb=a(" forward method, overrides the "),Dd=o("code"),Mb=a("__call__"),Eb=a(" special method."),xb=l(),v(To.$$.fragment),zb=l(),Bd=o("p"),jb=a("Example:"),Cb=l(),v(xr.$$.fragment),qb=l(),v(zr.$$.fragment),Vp=l(),Es=o("h2"),wo=o("a"),Md=o("span"),v(jr.$$.fragment),Pb=l(),Ed=o("span"),Ab=a("TFDistilBertForMultipleChoice"),Kp=l(),Ne=o("div"),v(Cr.$$.fragment),Ob=l(),xd=o("p"),Nb=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Lb=l(),qr=o("p"),Sb=a("This model inherits from "),Hi=o("a"),Ib=a("TFPreTrainedModel"),Wb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rb=l(),Pr=o("p"),Ub=a("This model is also a "),Ar=o("a"),Qb=a("tf.keras.Model"),Hb=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vb=l(),v(yo.$$.fragment),Kb=l(),nt=o("div"),v(Or.$$.fragment),Jb=l(),xs=o("p"),Gb=a("The "),Vi=o("a"),Xb=a("TFDistilBertForMultipleChoice"),Yb=a(" forward method, overrides the "),zd=o("code"),Zb=a("__call__"),ev=a(" special method."),tv=l(),v($o.$$.fragment),sv=l(),jd=o("p"),ov=a("Example:"),nv=l(),v(Nr.$$.fragment),Jp=l(),zs=o("h2"),Fo=o("a"),Cd=o("span"),v(Lr.$$.fragment),rv=l(),qd=o("span"),av=a("TFDistilBertForTokenClassification"),Gp=l(),Le=o("div"),v(Sr.$$.fragment),iv=l(),Pd=o("p"),lv=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),dv=l(),Ir=o("p"),cv=a("This model inherits from "),Ki=o("a"),pv=a("TFPreTrainedModel"),hv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uv=l(),Wr=o("p"),mv=a("This model is also a "),Rr=o("a"),fv=a("tf.keras.Model"),gv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_v=l(),v(Do.$$.fragment),bv=l(),He=o("div"),v(Ur.$$.fragment),vv=l(),js=o("p"),kv=a("The "),Ji=o("a"),Tv=a("TFDistilBertForTokenClassification"),wv=a(" forward method, overrides the "),Ad=o("code"),yv=a("__call__"),$v=a(" special method."),Fv=l(),v(Bo.$$.fragment),Dv=l(),Od=o("p"),Bv=a("Example:"),Mv=l(),v(Qr.$$.fragment),Ev=l(),v(Hr.$$.fragment),Xp=l(),Cs=o("h2"),Mo=o("a"),Nd=o("span"),v(Vr.$$.fragment),xv=l(),Ld=o("span"),zv=a("TFDistilBertForQuestionAnswering"),Yp=l(),Se=o("div"),v(Kr.$$.fragment),jv=l(),qs=o("p"),Cv=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Sd=o("code"),qv=a("span start logits"),Pv=a(" and "),Id=o("code"),Av=a("span end logits"),Ov=a(")."),Nv=l(),Jr=o("p"),Lv=a("This model inherits from "),Gi=o("a"),Sv=a("TFPreTrainedModel"),Iv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wv=l(),Gr=o("p"),Rv=a("This model is also a "),Xr=o("a"),Uv=a("tf.keras.Model"),Qv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hv=l(),v(Eo.$$.fragment),Vv=l(),Ve=o("div"),v(Yr.$$.fragment),Kv=l(),Ps=o("p"),Jv=a("The "),Xi=o("a"),Gv=a("TFDistilBertForQuestionAnswering"),Xv=a(" forward method, overrides the "),Wd=o("code"),Yv=a("__call__"),Zv=a(" special method."),ek=l(),v(xo.$$.fragment),tk=l(),Rd=o("p"),sk=a("Example:"),ok=l(),v(Zr.$$.fragment),nk=l(),v(ea.$$.fragment),Zp=l(),As=o("h2"),zo=o("a"),Ud=o("span"),v(ta.$$.fragment),rk=l(),Qd=o("span"),ak=a("FlaxDistilBertModel"),eh=l(),Me=o("div"),v(sa.$$.fragment),ik=l(),Hd=o("p"),lk=a("The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),dk=l(),oa=o("p"),ck=a("This model inherits from "),Yi=o("a"),pk=a("FlaxPreTrainedModel"),hk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),uk=l(),na=o("p"),mk=a("This model is also a Flax Linen "),ra=o("a"),fk=a("flax.linen.Module"),gk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_k=l(),Vd=o("p"),bk=a("Finally, this model supports inherent JAX features such as:"),vk=l(),qt=o("ul"),Kd=o("li"),aa=o("a"),kk=a("Just-In-Time (JIT) compilation"),Tk=l(),Jd=o("li"),ia=o("a"),wk=a("Automatic Differentiation"),yk=l(),Gd=o("li"),la=o("a"),$k=a("Vectorization"),Fk=l(),Xd=o("li"),da=o("a"),Dk=a("Parallelization"),Bk=l(),rt=o("div"),v(ca.$$.fragment),Mk=l(),Os=o("p"),Ek=a("The "),Yd=o("code"),xk=a("FlaxDistilBertPreTrainedModel"),zk=a(" forward method, overrides the "),Zd=o("code"),jk=a("__call__"),Ck=a(" special method."),qk=l(),v(jo.$$.fragment),Pk=l(),ec=o("p"),Ak=a("Example:"),Ok=l(),v(pa.$$.fragment),th=l(),Ns=o("h2"),Co=o("a"),tc=o("span"),v(ha.$$.fragment),Nk=l(),sc=o("span"),Lk=a("FlaxDistilBertForMaskedLM"),sh=l(),Ee=o("div"),v(ua.$$.fragment),Sk=l(),ma=o("p"),Ik=a("DistilBert Model with a "),oc=o("code"),Wk=a("language modeling"),Rk=a(" head on top."),Uk=l(),fa=o("p"),Qk=a("This model inherits from "),Zi=o("a"),Hk=a("FlaxPreTrainedModel"),Vk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Kk=l(),ga=o("p"),Jk=a("This model is also a Flax Linen "),_a=o("a"),Gk=a("flax.linen.Module"),Xk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Yk=l(),nc=o("p"),Zk=a("Finally, this model supports inherent JAX features such as:"),eT=l(),Pt=o("ul"),rc=o("li"),ba=o("a"),tT=a("Just-In-Time (JIT) compilation"),sT=l(),ac=o("li"),va=o("a"),oT=a("Automatic Differentiation"),nT=l(),ic=o("li"),ka=o("a"),rT=a("Vectorization"),aT=l(),lc=o("li"),Ta=o("a"),iT=a("Parallelization"),lT=l(),at=o("div"),v(wa.$$.fragment),dT=l(),Ls=o("p"),cT=a("The "),dc=o("code"),pT=a("FlaxDistilBertPreTrainedModel"),hT=a(" forward method, overrides the "),cc=o("code"),uT=a("__call__"),mT=a(" special method."),fT=l(),v(qo.$$.fragment),gT=l(),pc=o("p"),_T=a("Example:"),bT=l(),v(ya.$$.fragment),oh=l(),Ss=o("h2"),Po=o("a"),hc=o("span"),v($a.$$.fragment),vT=l(),uc=o("span"),kT=a("FlaxDistilBertForSequenceClassification"),nh=l(),xe=o("div"),v(Fa.$$.fragment),TT=l(),mc=o("p"),wT=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),yT=l(),Da=o("p"),$T=a("This model inherits from "),el=o("a"),FT=a("FlaxPreTrainedModel"),DT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),BT=l(),Ba=o("p"),MT=a("This model is also a Flax Linen "),Ma=o("a"),ET=a("flax.linen.Module"),xT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zT=l(),fc=o("p"),jT=a("Finally, this model supports inherent JAX features such as:"),CT=l(),At=o("ul"),gc=o("li"),Ea=o("a"),qT=a("Just-In-Time (JIT) compilation"),PT=l(),_c=o("li"),xa=o("a"),AT=a("Automatic Differentiation"),OT=l(),bc=o("li"),za=o("a"),NT=a("Vectorization"),LT=l(),vc=o("li"),ja=o("a"),ST=a("Parallelization"),IT=l(),it=o("div"),v(Ca.$$.fragment),WT=l(),Is=o("p"),RT=a("The "),kc=o("code"),UT=a("FlaxDistilBertPreTrainedModel"),QT=a(" forward method, overrides the "),Tc=o("code"),HT=a("__call__"),VT=a(" special method."),KT=l(),v(Ao.$$.fragment),JT=l(),wc=o("p"),GT=a("Example:"),XT=l(),v(qa.$$.fragment),rh=l(),Ws=o("h2"),Oo=o("a"),yc=o("span"),v(Pa.$$.fragment),YT=l(),$c=o("span"),ZT=a("FlaxDistilBertForMultipleChoice"),ah=l(),ze=o("div"),v(Aa.$$.fragment),ew=l(),Fc=o("p"),tw=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),sw=l(),Oa=o("p"),ow=a("This model inherits from "),tl=o("a"),nw=a("FlaxPreTrainedModel"),rw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),aw=l(),Na=o("p"),iw=a("This model is also a Flax Linen "),La=o("a"),lw=a("flax.linen.Module"),dw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cw=l(),Dc=o("p"),pw=a("Finally, this model supports inherent JAX features such as:"),hw=l(),Ot=o("ul"),Bc=o("li"),Sa=o("a"),uw=a("Just-In-Time (JIT) compilation"),mw=l(),Mc=o("li"),Ia=o("a"),fw=a("Automatic Differentiation"),gw=l(),Ec=o("li"),Wa=o("a"),_w=a("Vectorization"),bw=l(),xc=o("li"),Ra=o("a"),vw=a("Parallelization"),kw=l(),lt=o("div"),v(Ua.$$.fragment),Tw=l(),Rs=o("p"),ww=a("The "),zc=o("code"),yw=a("FlaxDistilBertPreTrainedModel"),$w=a(" forward method, overrides the "),jc=o("code"),Fw=a("__call__"),Dw=a(" special method."),Bw=l(),v(No.$$.fragment),Mw=l(),Cc=o("p"),Ew=a("Example:"),xw=l(),v(Qa.$$.fragment),ih=l(),Us=o("h2"),Lo=o("a"),qc=o("span"),v(Ha.$$.fragment),zw=l(),Pc=o("span"),jw=a("FlaxDistilBertForTokenClassification"),lh=l(),je=o("div"),v(Va.$$.fragment),Cw=l(),Ac=o("p"),qw=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Pw=l(),Ka=o("p"),Aw=a("This model inherits from "),sl=o("a"),Ow=a("FlaxPreTrainedModel"),Nw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Lw=l(),Ja=o("p"),Sw=a("This model is also a Flax Linen "),Ga=o("a"),Iw=a("flax.linen.Module"),Ww=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Rw=l(),Oc=o("p"),Uw=a("Finally, this model supports inherent JAX features such as:"),Qw=l(),Nt=o("ul"),Nc=o("li"),Xa=o("a"),Hw=a("Just-In-Time (JIT) compilation"),Vw=l(),Lc=o("li"),Ya=o("a"),Kw=a("Automatic Differentiation"),Jw=l(),Sc=o("li"),Za=o("a"),Gw=a("Vectorization"),Xw=l(),Ic=o("li"),ei=o("a"),Yw=a("Parallelization"),Zw=l(),dt=o("div"),v(ti.$$.fragment),e1=l(),Qs=o("p"),t1=a("The "),Wc=o("code"),s1=a("FlaxDistilBertPreTrainedModel"),o1=a(" forward method, overrides the "),Rc=o("code"),n1=a("__call__"),r1=a(" special method."),a1=l(),v(So.$$.fragment),i1=l(),Uc=o("p"),l1=a("Example:"),d1=l(),v(si.$$.fragment),dh=l(),Hs=o("h2"),Io=o("a"),Qc=o("span"),v(oi.$$.fragment),c1=l(),Hc=o("span"),p1=a("FlaxDistilBertForQuestionAnswering"),ch=l(),Ce=o("div"),v(ni.$$.fragment),h1=l(),Vs=o("p"),u1=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Vc=o("code"),m1=a("span start logits"),f1=a(" and "),Kc=o("code"),g1=a("span end logits"),_1=a(")."),b1=l(),ri=o("p"),v1=a("This model inherits from "),ol=o("a"),k1=a("FlaxPreTrainedModel"),T1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),w1=l(),ai=o("p"),y1=a("This model is also a Flax Linen "),ii=o("a"),$1=a("flax.linen.Module"),F1=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),D1=l(),Jc=o("p"),B1=a("Finally, this model supports inherent JAX features such as:"),M1=l(),Lt=o("ul"),Gc=o("li"),li=o("a"),E1=a("Just-In-Time (JIT) compilation"),x1=l(),Xc=o("li"),di=o("a"),z1=a("Automatic Differentiation"),j1=l(),Yc=o("li"),ci=o("a"),C1=a("Vectorization"),q1=l(),Zc=o("li"),pi=o("a"),P1=a("Parallelization"),A1=l(),ct=o("div"),v(hi.$$.fragment),O1=l(),Ks=o("p"),N1=a("The "),ep=o("code"),L1=a("FlaxDistilBertPreTrainedModel"),S1=a(" forward method, overrides the "),tp=o("code"),I1=a("__call__"),W1=a(" special method."),R1=l(),v(Wo.$$.fragment),U1=l(),sp=o("p"),Q1=a("Example:"),H1=l(),v(ui.$$.fragment),this.h()},l(s){const f=DF('[data-svelte="svelte-1phssyn"]',document.head);p=n(f,"META",{name:!0,content:!0}),f.forEach(t),D=d(s),g=n(s,"H1",{class:!0});var mi=r(g);b=n(mi,"A",{id:!0,class:!0,href:!0});var op=r(b);F=n(op,"SPAN",{});var np=r(F);k(_.$$.fragment,np),np.forEach(t),op.forEach(t),m=d(mi),B=n(mi,"SPAN",{});var rp=r(B);ce=i(rp,"DistilBERT"),rp.forEach(t),mi.forEach(t),V=d(s),E=n(s,"H2",{class:!0});var fi=r(E);G=n(fi,"A",{id:!0,class:!0,href:!0});var ap=r(G);S=n(ap,"SPAN",{});var ip=r(S);k(X.$$.fragment,ip),ip.forEach(t),ap.forEach(t),pe=d(fi),I=n(fi,"SPAN",{});var lp=r(I);he=i(lp,"Overview"),lp.forEach(t),fi.forEach(t),ae=d(s),N=n(s,"P",{});var St=r(N);P=i(St,"The DistilBERT model was proposed in the blog post "),Y=n(St,"A",{href:!0,rel:!0});var dp=r(Y);K=i(dp,`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),dp.forEach(t),x=i(St,", and the paper "),z=n(St,"A",{href:!0,rel:!0});var cp=r(z);ue=i(cp,`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),cp.forEach(t),W=i(St,`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),se=n(St,"EM",{});var pp=r(se);me=i(pp,"bert-base-uncased"),pp.forEach(t),R=i(St,`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),St.forEach(t),ie=d(s),ee=n(s,"P",{});var hp=r(ee);A=i(hp,"The abstract from the paper is the following:"),hp.forEach(t),le=d(s),L=n(s,"P",{});var up=r(L);oe=n(up,"EM",{});var mp=r(oe);fe=i(mp,`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),mp.forEach(t),up.forEach(t),q=d(s),te=n(s,"P",{});var fp=r(te);U=i(fp,"Tips:"),fp.forEach(t),de=d(s),h=n(s,"UL",{});var gi=r(h);M=n(gi,"LI",{});var It=r(M);J=i(It,"DistilBERT doesn\u2019t have "),_e=n(It,"CODE",{});var gp=r(_e);Te=i(gp,"token_type_ids"),gp.forEach(t),O=i(It,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),be=n(It,"CODE",{});var _p=r(be);we=i(_p,"tokenizer.sep_token"),_p.forEach(t),ye=i(It," (or "),C=n(It,"CODE",{});var bp=r(C);Q=i(bp,"[SEP]"),bp.forEach(t),$e=i(It,")."),It.forEach(t),Fe=d(gi),Z=n(gi,"LI",{});var _i=r(Z);De=i(_i,"DistilBERT doesn\u2019t have options to select the input positions ("),ne=n(_i,"CODE",{});var vp=r(ne);Be=i(vp,"position_ids"),vp.forEach(t),Tu=i(_i,` input). This could be added if
necessary though, just let us know if you need this option.`),_i.forEach(t),gi.forEach(t),wp=d(s),vt=n(s,"P",{});var Wt=r(vt);wu=i(Wt,"This model was contributed by "),Yo=n(Wt,"A",{href:!0,rel:!0});var V1=r(Yo);yu=i(V1,"victorsanh"),V1.forEach(t),$u=i(Wt,`. This model jax version was
contributed by `),Zo=n(Wt,"A",{href:!0,rel:!0});var K1=r(Zo);Fu=i(K1,"kamalkraj"),K1.forEach(t),Du=i(Wt,". The original code can be found "),en=n(Wt,"A",{href:!0,rel:!0});var J1=r(en);Bu=i(J1,"here"),J1.forEach(t),Mu=i(Wt,"."),Wt.forEach(t),yp=d(s),as=n(s,"H2",{class:!0});var hh=r(as);Js=n(hh,"A",{id:!0,class:!0,href:!0});var G1=r(Js);Dl=n(G1,"SPAN",{});var X1=r(Dl);k(tn.$$.fragment,X1),X1.forEach(t),G1.forEach(t),Eu=d(hh),Bl=n(hh,"SPAN",{});var Y1=r(Bl);xu=i(Y1,"DistilBertConfig"),Y1.forEach(t),hh.forEach(t),$p=d(s),Ke=n(s,"DIV",{class:!0});var Rt=r(Ke);k(sn.$$.fragment,Rt),zu=d(Rt),Ct=n(Rt,"P",{});var Ro=r(Ct);ju=i(Ro,"This is the configuration class to store the configuration of a "),bi=n(Ro,"A",{href:!0});var Z1=r(bi);Cu=i(Z1,"DistilBertModel"),Z1.forEach(t),qu=i(Ro," or a "),vi=n(Ro,"A",{href:!0});var e2=r(vi);Pu=i(e2,"TFDistilBertModel"),e2.forEach(t),Au=i(Ro,`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),on=n(Ro,"A",{href:!0,rel:!0});var t2=r(on);Ou=i(t2,"distilbert-base-uncased"),t2.forEach(t),Nu=i(Ro," architecture."),Ro.forEach(t),Lu=d(Rt),is=n(Rt,"P",{});var nl=r(is);Su=i(nl,"Configuration objects inherit from "),ki=n(nl,"A",{href:!0});var s2=r(ki);Iu=i(s2,"PretrainedConfig"),s2.forEach(t),Wu=i(nl,` and can be used to control the model outputs. Read the
documentation from `),Ti=n(nl,"A",{href:!0});var o2=r(Ti);Ru=i(o2,"PretrainedConfig"),o2.forEach(t),Uu=i(nl," for more information."),nl.forEach(t),Qu=d(Rt),Ml=n(Rt,"P",{});var n2=r(Ml);Hu=i(n2,"Examples:"),n2.forEach(t),Vu=d(Rt),k(nn.$$.fragment,Rt),Rt.forEach(t),Fp=d(s),ls=n(s,"H2",{class:!0});var uh=r(ls);Gs=n(uh,"A",{id:!0,class:!0,href:!0});var r2=r(Gs);El=n(r2,"SPAN",{});var a2=r(El);k(rn.$$.fragment,a2),a2.forEach(t),r2.forEach(t),Ku=d(uh),xl=n(uh,"SPAN",{});var i2=r(xl);Ju=i(i2,"DistilBertTokenizer"),i2.forEach(t),uh.forEach(t),Dp=d(s),_t=n(s,"DIV",{class:!0});var Uo=r(_t);k(an.$$.fragment,Uo),Gu=d(Uo),zl=n(Uo,"P",{});var l2=r(zl);Xu=i(l2,"Construct a DistilBERT tokenizer."),l2.forEach(t),Yu=d(Uo),Xs=n(Uo,"P",{});var kp=r(Xs);wi=n(kp,"A",{href:!0});var d2=r(wi);Zu=i(d2,"DistilBertTokenizer"),d2.forEach(t),em=i(kp," is identical to "),yi=n(kp,"A",{href:!0});var c2=r(yi);tm=i(c2,"BertTokenizer"),c2.forEach(t),sm=i(kp,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),kp.forEach(t),om=d(Uo),ln=n(Uo,"P",{});var mh=r(ln);nm=i(mh,"Refer to superclass "),$i=n(mh,"A",{href:!0});var p2=r($i);rm=i(p2,"BertTokenizer"),p2.forEach(t),am=i(mh," for usage examples and documentation concerning parameters."),mh.forEach(t),Uo.forEach(t),Bp=d(s),ds=n(s,"H2",{class:!0});var fh=r(ds);Ys=n(fh,"A",{id:!0,class:!0,href:!0});var h2=r(Ys);jl=n(h2,"SPAN",{});var u2=r(jl);k(dn.$$.fragment,u2),u2.forEach(t),h2.forEach(t),im=d(fh),Cl=n(fh,"SPAN",{});var m2=r(Cl);lm=i(m2,"DistilBertTokenizerFast"),m2.forEach(t),fh.forEach(t),Mp=d(s),bt=n(s,"DIV",{class:!0});var Qo=r(bt);k(cn.$$.fragment,Qo),dm=d(Qo),pn=n(Qo,"P",{});var gh=r(pn);cm=i(gh,"Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),ql=n(gh,"EM",{});var f2=r(ql);pm=i(f2,"tokenizers"),f2.forEach(t),hm=i(gh," library)."),gh.forEach(t),um=d(Qo),Zs=n(Qo,"P",{});var Tp=r(Zs);Fi=n(Tp,"A",{href:!0});var g2=r(Fi);mm=i(g2,"DistilBertTokenizerFast"),g2.forEach(t),fm=i(Tp," is identical to "),Di=n(Tp,"A",{href:!0});var _2=r(Di);gm=i(_2,"BertTokenizerFast"),_2.forEach(t),_m=i(Tp,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Tp.forEach(t),bm=d(Qo),hn=n(Qo,"P",{});var _h=r(hn);vm=i(_h,"Refer to superclass "),Bi=n(_h,"A",{href:!0});var b2=r(Bi);km=i(b2,"BertTokenizerFast"),b2.forEach(t),Tm=i(_h," for usage examples and documentation concerning parameters."),_h.forEach(t),Qo.forEach(t),Ep=d(s),cs=n(s,"H2",{class:!0});var bh=r(cs);eo=n(bh,"A",{id:!0,class:!0,href:!0});var v2=r(eo);Pl=n(v2,"SPAN",{});var k2=r(Pl);k(un.$$.fragment,k2),k2.forEach(t),v2.forEach(t),wm=d(bh),Al=n(bh,"SPAN",{});var T2=r(Al);ym=i(T2,"DistilBertModel"),T2.forEach(t),bh.forEach(t),xp=d(s),Je=n(s,"DIV",{class:!0});var Ut=r(Je);k(mn.$$.fragment,Ut),$m=d(Ut),Ol=n(Ut,"P",{});var w2=r(Ol);Fm=i(w2,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),w2.forEach(t),Dm=d(Ut),fn=n(Ut,"P",{});var vh=r(fn);Bm=i(vh,"This model inherits from "),Mi=n(vh,"A",{href:!0});var y2=r(Mi);Mm=i(y2,"PreTrainedModel"),y2.forEach(t),Em=i(vh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vh.forEach(t),xm=d(Ut),gn=n(Ut,"P",{});var kh=r(gn);zm=i(kh,"This model is also a PyTorch "),_n=n(kh,"A",{href:!0,rel:!0});var $2=r(_n);jm=i($2,"torch.nn.Module"),$2.forEach(t),Cm=i(kh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kh.forEach(t),qm=d(Ut),tt=n(Ut,"DIV",{class:!0});var Qt=r(tt);k(bn.$$.fragment,Qt),Pm=d(Qt),ps=n(Qt,"P",{});var rl=r(ps);Am=i(rl,"The "),Ei=n(rl,"A",{href:!0});var F2=r(Ei);Om=i(F2,"DistilBertModel"),F2.forEach(t),Nm=i(rl," forward method, overrides the "),Nl=n(rl,"CODE",{});var D2=r(Nl);Lm=i(D2,"__call__"),D2.forEach(t),Sm=i(rl," special method."),rl.forEach(t),Im=d(Qt),k(to.$$.fragment,Qt),Wm=d(Qt),Ll=n(Qt,"P",{});var B2=r(Ll);Rm=i(B2,"Example:"),B2.forEach(t),Um=d(Qt),k(vn.$$.fragment,Qt),Qt.forEach(t),Ut.forEach(t),zp=d(s),hs=n(s,"H2",{class:!0});var Th=r(hs);so=n(Th,"A",{id:!0,class:!0,href:!0});var M2=r(so);Sl=n(M2,"SPAN",{});var E2=r(Sl);k(kn.$$.fragment,E2),E2.forEach(t),M2.forEach(t),Qm=d(Th),Il=n(Th,"SPAN",{});var x2=r(Il);Hm=i(x2,"DistilBertForMaskedLM"),x2.forEach(t),Th.forEach(t),jp=d(s),Ge=n(s,"DIV",{class:!0});var Ht=r(Ge);k(Tn.$$.fragment,Ht),Vm=d(Ht),wn=n(Ht,"P",{});var wh=r(wn);Km=i(wh,"DistilBert Model with a "),Wl=n(wh,"CODE",{});var z2=r(Wl);Jm=i(z2,"masked language modeling"),z2.forEach(t),Gm=i(wh," head on top."),wh.forEach(t),Xm=d(Ht),yn=n(Ht,"P",{});var yh=r(yn);Ym=i(yh,"This model inherits from "),xi=n(yh,"A",{href:!0});var j2=r(xi);Zm=i(j2,"PreTrainedModel"),j2.forEach(t),ef=i(yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh.forEach(t),tf=d(Ht),$n=n(Ht,"P",{});var $h=r($n);sf=i($h,"This model is also a PyTorch "),Fn=n($h,"A",{href:!0,rel:!0});var C2=r(Fn);of=i(C2,"torch.nn.Module"),C2.forEach(t),nf=i($h,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$h.forEach(t),rf=d(Ht),Ie=n(Ht,"DIV",{class:!0});var kt=r(Ie);k(Dn.$$.fragment,kt),af=d(kt),us=n(kt,"P",{});var al=r(us);lf=i(al,"The "),zi=n(al,"A",{href:!0});var q2=r(zi);df=i(q2,"DistilBertForMaskedLM"),q2.forEach(t),cf=i(al," forward method, overrides the "),Rl=n(al,"CODE",{});var P2=r(Rl);pf=i(P2,"__call__"),P2.forEach(t),hf=i(al," special method."),al.forEach(t),uf=d(kt),k(oo.$$.fragment,kt),mf=d(kt),Ul=n(kt,"P",{});var A2=r(Ul);ff=i(A2,"Example:"),A2.forEach(t),gf=d(kt),k(Bn.$$.fragment,kt),_f=d(kt),k(Mn.$$.fragment,kt),kt.forEach(t),Ht.forEach(t),Cp=d(s),ms=n(s,"H2",{class:!0});var Fh=r(ms);no=n(Fh,"A",{id:!0,class:!0,href:!0});var O2=r(no);Ql=n(O2,"SPAN",{});var N2=r(Ql);k(En.$$.fragment,N2),N2.forEach(t),O2.forEach(t),bf=d(Fh),Hl=n(Fh,"SPAN",{});var L2=r(Hl);vf=i(L2,"DistilBertForSequenceClassification"),L2.forEach(t),Fh.forEach(t),qp=d(s),Xe=n(s,"DIV",{class:!0});var Vt=r(Xe);k(xn.$$.fragment,Vt),kf=d(Vt),Vl=n(Vt,"P",{});var S2=r(Vl);Tf=i(S2,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),S2.forEach(t),wf=d(Vt),zn=n(Vt,"P",{});var Dh=r(zn);yf=i(Dh,"This model inherits from "),ji=n(Dh,"A",{href:!0});var I2=r(ji);$f=i(I2,"PreTrainedModel"),I2.forEach(t),Ff=i(Dh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dh.forEach(t),Df=d(Vt),jn=n(Vt,"P",{});var Bh=r(jn);Bf=i(Bh,"This model is also a PyTorch "),Cn=n(Bh,"A",{href:!0,rel:!0});var W2=r(Cn);Mf=i(W2,"torch.nn.Module"),W2.forEach(t),Ef=i(Bh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bh.forEach(t),xf=d(Vt),ke=n(Vt,"DIV",{class:!0});var qe=r(ke);k(qn.$$.fragment,qe),zf=d(qe),fs=n(qe,"P",{});var il=r(fs);jf=i(il,"The "),Ci=n(il,"A",{href:!0});var R2=r(Ci);Cf=i(R2,"DistilBertForSequenceClassification"),R2.forEach(t),qf=i(il," forward method, overrides the "),Kl=n(il,"CODE",{});var U2=r(Kl);Pf=i(U2,"__call__"),U2.forEach(t),Af=i(il," special method."),il.forEach(t),Of=d(qe),k(ro.$$.fragment,qe),Nf=d(qe),Jl=n(qe,"P",{});var Q2=r(Jl);Lf=i(Q2,"Example of single-label classification:"),Q2.forEach(t),Sf=d(qe),k(Pn.$$.fragment,qe),If=d(qe),k(An.$$.fragment,qe),Wf=d(qe),Gl=n(qe,"P",{});var H2=r(Gl);Rf=i(H2,"Example of multi-label classification:"),H2.forEach(t),Uf=d(qe),k(On.$$.fragment,qe),Qf=d(qe),k(Nn.$$.fragment,qe),qe.forEach(t),Vt.forEach(t),Pp=d(s),gs=n(s,"H2",{class:!0});var Mh=r(gs);ao=n(Mh,"A",{id:!0,class:!0,href:!0});var V2=r(ao);Xl=n(V2,"SPAN",{});var K2=r(Xl);k(Ln.$$.fragment,K2),K2.forEach(t),V2.forEach(t),Hf=d(Mh),Yl=n(Mh,"SPAN",{});var J2=r(Yl);Vf=i(J2,"DistilBertForMultipleChoice"),J2.forEach(t),Mh.forEach(t),Ap=d(s),Ye=n(s,"DIV",{class:!0});var Kt=r(Ye);k(Sn.$$.fragment,Kt),Kf=d(Kt),Zl=n(Kt,"P",{});var G2=r(Zl);Jf=i(G2,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),G2.forEach(t),Gf=d(Kt),In=n(Kt,"P",{});var Eh=r(In);Xf=i(Eh,"This model inherits from "),qi=n(Eh,"A",{href:!0});var X2=r(qi);Yf=i(X2,"PreTrainedModel"),X2.forEach(t),Zf=i(Eh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eh.forEach(t),eg=d(Kt),Wn=n(Kt,"P",{});var xh=r(Wn);tg=i(xh,"This model is also a PyTorch "),Rn=n(xh,"A",{href:!0,rel:!0});var Y2=r(Rn);sg=i(Y2,"torch.nn.Module"),Y2.forEach(t),og=i(xh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xh.forEach(t),ng=d(Kt),st=n(Kt,"DIV",{class:!0});var Jt=r(st);k(Un.$$.fragment,Jt),rg=d(Jt),_s=n(Jt,"P",{});var ll=r(_s);ag=i(ll,"The "),Pi=n(ll,"A",{href:!0});var Z2=r(Pi);ig=i(Z2,"DistilBertForMultipleChoice"),Z2.forEach(t),lg=i(ll," forward method, overrides the "),ed=n(ll,"CODE",{});var ey=r(ed);dg=i(ey,"__call__"),ey.forEach(t),cg=i(ll," special method."),ll.forEach(t),pg=d(Jt),k(io.$$.fragment,Jt),hg=d(Jt),td=n(Jt,"P",{});var ty=r(td);ug=i(ty,"Examples:"),ty.forEach(t),mg=d(Jt),k(Qn.$$.fragment,Jt),Jt.forEach(t),Kt.forEach(t),Op=d(s),bs=n(s,"H2",{class:!0});var zh=r(bs);lo=n(zh,"A",{id:!0,class:!0,href:!0});var sy=r(lo);sd=n(sy,"SPAN",{});var oy=r(sd);k(Hn.$$.fragment,oy),oy.forEach(t),sy.forEach(t),fg=d(zh),od=n(zh,"SPAN",{});var ny=r(od);gg=i(ny,"DistilBertForTokenClassification"),ny.forEach(t),zh.forEach(t),Np=d(s),Ze=n(s,"DIV",{class:!0});var Gt=r(Ze);k(Vn.$$.fragment,Gt),_g=d(Gt),nd=n(Gt,"P",{});var ry=r(nd);bg=i(ry,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),ry.forEach(t),vg=d(Gt),Kn=n(Gt,"P",{});var jh=r(Kn);kg=i(jh,"This model inherits from "),Ai=n(jh,"A",{href:!0});var ay=r(Ai);Tg=i(ay,"PreTrainedModel"),ay.forEach(t),wg=i(jh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jh.forEach(t),yg=d(Gt),Jn=n(Gt,"P",{});var Ch=r(Jn);$g=i(Ch,"This model is also a PyTorch "),Gn=n(Ch,"A",{href:!0,rel:!0});var iy=r(Gn);Fg=i(iy,"torch.nn.Module"),iy.forEach(t),Dg=i(Ch,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ch.forEach(t),Bg=d(Gt),We=n(Gt,"DIV",{class:!0});var Tt=r(We);k(Xn.$$.fragment,Tt),Mg=d(Tt),vs=n(Tt,"P",{});var dl=r(vs);Eg=i(dl,"The "),Oi=n(dl,"A",{href:!0});var ly=r(Oi);xg=i(ly,"DistilBertForTokenClassification"),ly.forEach(t),zg=i(dl," forward method, overrides the "),rd=n(dl,"CODE",{});var dy=r(rd);jg=i(dy,"__call__"),dy.forEach(t),Cg=i(dl," special method."),dl.forEach(t),qg=d(Tt),k(co.$$.fragment,Tt),Pg=d(Tt),ad=n(Tt,"P",{});var cy=r(ad);Ag=i(cy,"Example:"),cy.forEach(t),Og=d(Tt),k(Yn.$$.fragment,Tt),Ng=d(Tt),k(Zn.$$.fragment,Tt),Tt.forEach(t),Gt.forEach(t),Lp=d(s),ks=n(s,"H2",{class:!0});var qh=r(ks);po=n(qh,"A",{id:!0,class:!0,href:!0});var py=r(po);id=n(py,"SPAN",{});var hy=r(id);k(er.$$.fragment,hy),hy.forEach(t),py.forEach(t),Lg=d(qh),ld=n(qh,"SPAN",{});var uy=r(ld);Sg=i(uy,"DistilBertForQuestionAnswering"),uy.forEach(t),qh.forEach(t),Sp=d(s),et=n(s,"DIV",{class:!0});var Xt=r(et);k(tr.$$.fragment,Xt),Ig=d(Xt),Ts=n(Xt,"P",{});var cl=r(Ts);Wg=i(cl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),dd=n(cl,"CODE",{});var my=r(dd);Rg=i(my,"span start logits"),my.forEach(t),Ug=i(cl," and "),cd=n(cl,"CODE",{});var fy=r(cd);Qg=i(fy,"span end logits"),fy.forEach(t),Hg=i(cl,")."),cl.forEach(t),Vg=d(Xt),sr=n(Xt,"P",{});var Ph=r(sr);Kg=i(Ph,"This model inherits from "),Ni=n(Ph,"A",{href:!0});var gy=r(Ni);Jg=i(gy,"PreTrainedModel"),gy.forEach(t),Gg=i(Ph,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ph.forEach(t),Xg=d(Xt),or=n(Xt,"P",{});var Ah=r(or);Yg=i(Ah,"This model is also a PyTorch "),nr=n(Ah,"A",{href:!0,rel:!0});var _y=r(nr);Zg=i(_y,"torch.nn.Module"),_y.forEach(t),e_=i(Ah,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ah.forEach(t),t_=d(Xt),Re=n(Xt,"DIV",{class:!0});var wt=r(Re);k(rr.$$.fragment,wt),s_=d(wt),ws=n(wt,"P",{});var pl=r(ws);o_=i(pl,"The "),Li=n(pl,"A",{href:!0});var by=r(Li);n_=i(by,"DistilBertForQuestionAnswering"),by.forEach(t),r_=i(pl," forward method, overrides the "),pd=n(pl,"CODE",{});var vy=r(pd);a_=i(vy,"__call__"),vy.forEach(t),i_=i(pl," special method."),pl.forEach(t),l_=d(wt),k(ho.$$.fragment,wt),d_=d(wt),hd=n(wt,"P",{});var ky=r(hd);c_=i(ky,"Example:"),ky.forEach(t),p_=d(wt),k(ar.$$.fragment,wt),h_=d(wt),k(ir.$$.fragment,wt),wt.forEach(t),Xt.forEach(t),Ip=d(s),ys=n(s,"H2",{class:!0});var Oh=r(ys);uo=n(Oh,"A",{id:!0,class:!0,href:!0});var Ty=r(uo);ud=n(Ty,"SPAN",{});var wy=r(ud);k(lr.$$.fragment,wy),wy.forEach(t),Ty.forEach(t),u_=d(Oh),md=n(Oh,"SPAN",{});var yy=r(md);m_=i(yy,"TFDistilBertModel"),yy.forEach(t),Oh.forEach(t),Wp=d(s),Pe=n(s,"DIV",{class:!0});var yt=r(Pe);k(dr.$$.fragment,yt),f_=d(yt),fd=n(yt,"P",{});var $y=r(fd);g_=i($y,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),$y.forEach(t),__=d(yt),cr=n(yt,"P",{});var Nh=r(cr);b_=i(Nh,"This model inherits from "),Si=n(Nh,"A",{href:!0});var Fy=r(Si);v_=i(Fy,"TFPreTrainedModel"),Fy.forEach(t),k_=i(Nh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nh.forEach(t),T_=d(yt),pr=n(yt,"P",{});var Lh=r(pr);w_=i(Lh,"This model is also a "),hr=n(Lh,"A",{href:!0,rel:!0});var Dy=r(hr);y_=i(Dy,"tf.keras.Model"),Dy.forEach(t),$_=i(Lh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lh.forEach(t),F_=d(yt),k(mo.$$.fragment,yt),D_=d(yt),ot=n(yt,"DIV",{class:!0});var Yt=r(ot);k(ur.$$.fragment,Yt),B_=d(Yt),$s=n(Yt,"P",{});var hl=r($s);M_=i(hl,"The "),Ii=n(hl,"A",{href:!0});var By=r(Ii);E_=i(By,"TFDistilBertModel"),By.forEach(t),x_=i(hl," forward method, overrides the "),gd=n(hl,"CODE",{});var My=r(gd);z_=i(My,"__call__"),My.forEach(t),j_=i(hl," special method."),hl.forEach(t),C_=d(Yt),k(fo.$$.fragment,Yt),q_=d(Yt),_d=n(Yt,"P",{});var Ey=r(_d);P_=i(Ey,"Example:"),Ey.forEach(t),A_=d(Yt),k(mr.$$.fragment,Yt),Yt.forEach(t),yt.forEach(t),Rp=d(s),Fs=n(s,"H2",{class:!0});var Sh=r(Fs);go=n(Sh,"A",{id:!0,class:!0,href:!0});var xy=r(go);bd=n(xy,"SPAN",{});var zy=r(bd);k(fr.$$.fragment,zy),zy.forEach(t),xy.forEach(t),O_=d(Sh),vd=n(Sh,"SPAN",{});var jy=r(vd);N_=i(jy,"TFDistilBertForMaskedLM"),jy.forEach(t),Sh.forEach(t),Up=d(s),Ae=n(s,"DIV",{class:!0});var $t=r(Ae);k(gr.$$.fragment,$t),L_=d($t),_r=n($t,"P",{});var Ih=r(_r);S_=i(Ih,"DistilBert Model with a "),kd=n(Ih,"CODE",{});var Cy=r(kd);I_=i(Cy,"masked language modeling"),Cy.forEach(t),W_=i(Ih," head on top."),Ih.forEach(t),R_=d($t),br=n($t,"P",{});var Wh=r(br);U_=i(Wh,"This model inherits from "),Wi=n(Wh,"A",{href:!0});var qy=r(Wi);Q_=i(qy,"TFPreTrainedModel"),qy.forEach(t),H_=i(Wh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wh.forEach(t),V_=d($t),vr=n($t,"P",{});var Rh=r(vr);K_=i(Rh,"This model is also a "),kr=n(Rh,"A",{href:!0,rel:!0});var Py=r(kr);J_=i(Py,"tf.keras.Model"),Py.forEach(t),G_=i(Rh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rh.forEach(t),X_=d($t),k(_o.$$.fragment,$t),Y_=d($t),Ue=n($t,"DIV",{class:!0});var Ft=r(Ue);k(Tr.$$.fragment,Ft),Z_=d(Ft),Ds=n(Ft,"P",{});var ul=r(Ds);eb=i(ul,"The "),Ri=n(ul,"A",{href:!0});var Ay=r(Ri);tb=i(Ay,"TFDistilBertForMaskedLM"),Ay.forEach(t),sb=i(ul," forward method, overrides the "),Td=n(ul,"CODE",{});var Oy=r(Td);ob=i(Oy,"__call__"),Oy.forEach(t),nb=i(ul," special method."),ul.forEach(t),rb=d(Ft),k(bo.$$.fragment,Ft),ab=d(Ft),wd=n(Ft,"P",{});var Ny=r(wd);ib=i(Ny,"Example:"),Ny.forEach(t),lb=d(Ft),k(wr.$$.fragment,Ft),db=d(Ft),k(yr.$$.fragment,Ft),Ft.forEach(t),$t.forEach(t),Qp=d(s),Bs=n(s,"H2",{class:!0});var Uh=r(Bs);vo=n(Uh,"A",{id:!0,class:!0,href:!0});var Ly=r(vo);yd=n(Ly,"SPAN",{});var Sy=r(yd);k($r.$$.fragment,Sy),Sy.forEach(t),Ly.forEach(t),cb=d(Uh),$d=n(Uh,"SPAN",{});var Iy=r($d);pb=i(Iy,"TFDistilBertForSequenceClassification"),Iy.forEach(t),Uh.forEach(t),Hp=d(s),Oe=n(s,"DIV",{class:!0});var Dt=r(Oe);k(Fr.$$.fragment,Dt),hb=d(Dt),Fd=n(Dt,"P",{});var Wy=r(Fd);ub=i(Wy,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Wy.forEach(t),mb=d(Dt),Dr=n(Dt,"P",{});var Qh=r(Dr);fb=i(Qh,"This model inherits from "),Ui=n(Qh,"A",{href:!0});var Ry=r(Ui);gb=i(Ry,"TFPreTrainedModel"),Ry.forEach(t),_b=i(Qh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qh.forEach(t),bb=d(Dt),Br=n(Dt,"P",{});var Hh=r(Br);vb=i(Hh,"This model is also a "),Mr=n(Hh,"A",{href:!0,rel:!0});var Uy=r(Mr);kb=i(Uy,"tf.keras.Model"),Uy.forEach(t),Tb=i(Hh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hh.forEach(t),wb=d(Dt),k(ko.$$.fragment,Dt),yb=d(Dt),Qe=n(Dt,"DIV",{class:!0});var Bt=r(Qe);k(Er.$$.fragment,Bt),$b=d(Bt),Ms=n(Bt,"P",{});var ml=r(Ms);Fb=i(ml,"The "),Qi=n(ml,"A",{href:!0});var Qy=r(Qi);Db=i(Qy,"TFDistilBertForSequenceClassification"),Qy.forEach(t),Bb=i(ml," forward method, overrides the "),Dd=n(ml,"CODE",{});var Hy=r(Dd);Mb=i(Hy,"__call__"),Hy.forEach(t),Eb=i(ml," special method."),ml.forEach(t),xb=d(Bt),k(To.$$.fragment,Bt),zb=d(Bt),Bd=n(Bt,"P",{});var Vy=r(Bd);jb=i(Vy,"Example:"),Vy.forEach(t),Cb=d(Bt),k(xr.$$.fragment,Bt),qb=d(Bt),k(zr.$$.fragment,Bt),Bt.forEach(t),Dt.forEach(t),Vp=d(s),Es=n(s,"H2",{class:!0});var Vh=r(Es);wo=n(Vh,"A",{id:!0,class:!0,href:!0});var Ky=r(wo);Md=n(Ky,"SPAN",{});var Jy=r(Md);k(jr.$$.fragment,Jy),Jy.forEach(t),Ky.forEach(t),Pb=d(Vh),Ed=n(Vh,"SPAN",{});var Gy=r(Ed);Ab=i(Gy,"TFDistilBertForMultipleChoice"),Gy.forEach(t),Vh.forEach(t),Kp=d(s),Ne=n(s,"DIV",{class:!0});var Mt=r(Ne);k(Cr.$$.fragment,Mt),Ob=d(Mt),xd=n(Mt,"P",{});var Xy=r(xd);Nb=i(Xy,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Xy.forEach(t),Lb=d(Mt),qr=n(Mt,"P",{});var Kh=r(qr);Sb=i(Kh,"This model inherits from "),Hi=n(Kh,"A",{href:!0});var Yy=r(Hi);Ib=i(Yy,"TFPreTrainedModel"),Yy.forEach(t),Wb=i(Kh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kh.forEach(t),Rb=d(Mt),Pr=n(Mt,"P",{});var Jh=r(Pr);Ub=i(Jh,"This model is also a "),Ar=n(Jh,"A",{href:!0,rel:!0});var Zy=r(Ar);Qb=i(Zy,"tf.keras.Model"),Zy.forEach(t),Hb=i(Jh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jh.forEach(t),Vb=d(Mt),k(yo.$$.fragment,Mt),Kb=d(Mt),nt=n(Mt,"DIV",{class:!0});var Zt=r(nt);k(Or.$$.fragment,Zt),Jb=d(Zt),xs=n(Zt,"P",{});var fl=r(xs);Gb=i(fl,"The "),Vi=n(fl,"A",{href:!0});var e0=r(Vi);Xb=i(e0,"TFDistilBertForMultipleChoice"),e0.forEach(t),Yb=i(fl," forward method, overrides the "),zd=n(fl,"CODE",{});var t0=r(zd);Zb=i(t0,"__call__"),t0.forEach(t),ev=i(fl," special method."),fl.forEach(t),tv=d(Zt),k($o.$$.fragment,Zt),sv=d(Zt),jd=n(Zt,"P",{});var s0=r(jd);ov=i(s0,"Example:"),s0.forEach(t),nv=d(Zt),k(Nr.$$.fragment,Zt),Zt.forEach(t),Mt.forEach(t),Jp=d(s),zs=n(s,"H2",{class:!0});var Gh=r(zs);Fo=n(Gh,"A",{id:!0,class:!0,href:!0});var o0=r(Fo);Cd=n(o0,"SPAN",{});var n0=r(Cd);k(Lr.$$.fragment,n0),n0.forEach(t),o0.forEach(t),rv=d(Gh),qd=n(Gh,"SPAN",{});var r0=r(qd);av=i(r0,"TFDistilBertForTokenClassification"),r0.forEach(t),Gh.forEach(t),Gp=d(s),Le=n(s,"DIV",{class:!0});var Et=r(Le);k(Sr.$$.fragment,Et),iv=d(Et),Pd=n(Et,"P",{});var a0=r(Pd);lv=i(a0,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),a0.forEach(t),dv=d(Et),Ir=n(Et,"P",{});var Xh=r(Ir);cv=i(Xh,"This model inherits from "),Ki=n(Xh,"A",{href:!0});var i0=r(Ki);pv=i(i0,"TFPreTrainedModel"),i0.forEach(t),hv=i(Xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xh.forEach(t),uv=d(Et),Wr=n(Et,"P",{});var Yh=r(Wr);mv=i(Yh,"This model is also a "),Rr=n(Yh,"A",{href:!0,rel:!0});var l0=r(Rr);fv=i(l0,"tf.keras.Model"),l0.forEach(t),gv=i(Yh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yh.forEach(t),_v=d(Et),k(Do.$$.fragment,Et),bv=d(Et),He=n(Et,"DIV",{class:!0});var xt=r(He);k(Ur.$$.fragment,xt),vv=d(xt),js=n(xt,"P",{});var gl=r(js);kv=i(gl,"The "),Ji=n(gl,"A",{href:!0});var d0=r(Ji);Tv=i(d0,"TFDistilBertForTokenClassification"),d0.forEach(t),wv=i(gl," forward method, overrides the "),Ad=n(gl,"CODE",{});var c0=r(Ad);yv=i(c0,"__call__"),c0.forEach(t),$v=i(gl," special method."),gl.forEach(t),Fv=d(xt),k(Bo.$$.fragment,xt),Dv=d(xt),Od=n(xt,"P",{});var p0=r(Od);Bv=i(p0,"Example:"),p0.forEach(t),Mv=d(xt),k(Qr.$$.fragment,xt),Ev=d(xt),k(Hr.$$.fragment,xt),xt.forEach(t),Et.forEach(t),Xp=d(s),Cs=n(s,"H2",{class:!0});var Zh=r(Cs);Mo=n(Zh,"A",{id:!0,class:!0,href:!0});var h0=r(Mo);Nd=n(h0,"SPAN",{});var u0=r(Nd);k(Vr.$$.fragment,u0),u0.forEach(t),h0.forEach(t),xv=d(Zh),Ld=n(Zh,"SPAN",{});var m0=r(Ld);zv=i(m0,"TFDistilBertForQuestionAnswering"),m0.forEach(t),Zh.forEach(t),Yp=d(s),Se=n(s,"DIV",{class:!0});var zt=r(Se);k(Kr.$$.fragment,zt),jv=d(zt),qs=n(zt,"P",{});var _l=r(qs);Cv=i(_l,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Sd=n(_l,"CODE",{});var f0=r(Sd);qv=i(f0,"span start logits"),f0.forEach(t),Pv=i(_l," and "),Id=n(_l,"CODE",{});var g0=r(Id);Av=i(g0,"span end logits"),g0.forEach(t),Ov=i(_l,")."),_l.forEach(t),Nv=d(zt),Jr=n(zt,"P",{});var eu=r(Jr);Lv=i(eu,"This model inherits from "),Gi=n(eu,"A",{href:!0});var _0=r(Gi);Sv=i(_0,"TFPreTrainedModel"),_0.forEach(t),Iv=i(eu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eu.forEach(t),Wv=d(zt),Gr=n(zt,"P",{});var tu=r(Gr);Rv=i(tu,"This model is also a "),Xr=n(tu,"A",{href:!0,rel:!0});var b0=r(Xr);Uv=i(b0,"tf.keras.Model"),b0.forEach(t),Qv=i(tu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tu.forEach(t),Hv=d(zt),k(Eo.$$.fragment,zt),Vv=d(zt),Ve=n(zt,"DIV",{class:!0});var jt=r(Ve);k(Yr.$$.fragment,jt),Kv=d(jt),Ps=n(jt,"P",{});var bl=r(Ps);Jv=i(bl,"The "),Xi=n(bl,"A",{href:!0});var v0=r(Xi);Gv=i(v0,"TFDistilBertForQuestionAnswering"),v0.forEach(t),Xv=i(bl," forward method, overrides the "),Wd=n(bl,"CODE",{});var k0=r(Wd);Yv=i(k0,"__call__"),k0.forEach(t),Zv=i(bl," special method."),bl.forEach(t),ek=d(jt),k(xo.$$.fragment,jt),tk=d(jt),Rd=n(jt,"P",{});var T0=r(Rd);sk=i(T0,"Example:"),T0.forEach(t),ok=d(jt),k(Zr.$$.fragment,jt),nk=d(jt),k(ea.$$.fragment,jt),jt.forEach(t),zt.forEach(t),Zp=d(s),As=n(s,"H2",{class:!0});var su=r(As);zo=n(su,"A",{id:!0,class:!0,href:!0});var w0=r(zo);Ud=n(w0,"SPAN",{});var y0=r(Ud);k(ta.$$.fragment,y0),y0.forEach(t),w0.forEach(t),rk=d(su),Qd=n(su,"SPAN",{});var $0=r(Qd);ak=i($0,"FlaxDistilBertModel"),$0.forEach(t),su.forEach(t),eh=d(s),Me=n(s,"DIV",{class:!0});var pt=r(Me);k(sa.$$.fragment,pt),ik=d(pt),Hd=n(pt,"P",{});var F0=r(Hd);lk=i(F0,"The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),F0.forEach(t),dk=d(pt),oa=n(pt,"P",{});var ou=r(oa);ck=i(ou,"This model inherits from "),Yi=n(ou,"A",{href:!0});var D0=r(Yi);pk=i(D0,"FlaxPreTrainedModel"),D0.forEach(t),hk=i(ou,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ou.forEach(t),uk=d(pt),na=n(pt,"P",{});var nu=r(na);mk=i(nu,"This model is also a Flax Linen "),ra=n(nu,"A",{href:!0,rel:!0});var B0=r(ra);fk=i(B0,"flax.linen.Module"),B0.forEach(t),gk=i(nu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),nu.forEach(t),_k=d(pt),Vd=n(pt,"P",{});var M0=r(Vd);bk=i(M0,"Finally, this model supports inherent JAX features such as:"),M0.forEach(t),vk=d(pt),qt=n(pt,"UL",{});var Ho=r(qt);Kd=n(Ho,"LI",{});var E0=r(Kd);aa=n(E0,"A",{href:!0,rel:!0});var x0=r(aa);kk=i(x0,"Just-In-Time (JIT) compilation"),x0.forEach(t),E0.forEach(t),Tk=d(Ho),Jd=n(Ho,"LI",{});var z0=r(Jd);ia=n(z0,"A",{href:!0,rel:!0});var j0=r(ia);wk=i(j0,"Automatic Differentiation"),j0.forEach(t),z0.forEach(t),yk=d(Ho),Gd=n(Ho,"LI",{});var C0=r(Gd);la=n(C0,"A",{href:!0,rel:!0});var q0=r(la);$k=i(q0,"Vectorization"),q0.forEach(t),C0.forEach(t),Fk=d(Ho),Xd=n(Ho,"LI",{});var P0=r(Xd);da=n(P0,"A",{href:!0,rel:!0});var A0=r(da);Dk=i(A0,"Parallelization"),A0.forEach(t),P0.forEach(t),Ho.forEach(t),Bk=d(pt),rt=n(pt,"DIV",{class:!0});var es=r(rt);k(ca.$$.fragment,es),Mk=d(es),Os=n(es,"P",{});var vl=r(Os);Ek=i(vl,"The "),Yd=n(vl,"CODE",{});var O0=r(Yd);xk=i(O0,"FlaxDistilBertPreTrainedModel"),O0.forEach(t),zk=i(vl," forward method, overrides the "),Zd=n(vl,"CODE",{});var N0=r(Zd);jk=i(N0,"__call__"),N0.forEach(t),Ck=i(vl," special method."),vl.forEach(t),qk=d(es),k(jo.$$.fragment,es),Pk=d(es),ec=n(es,"P",{});var L0=r(ec);Ak=i(L0,"Example:"),L0.forEach(t),Ok=d(es),k(pa.$$.fragment,es),es.forEach(t),pt.forEach(t),th=d(s),Ns=n(s,"H2",{class:!0});var ru=r(Ns);Co=n(ru,"A",{id:!0,class:!0,href:!0});var S0=r(Co);tc=n(S0,"SPAN",{});var I0=r(tc);k(ha.$$.fragment,I0),I0.forEach(t),S0.forEach(t),Nk=d(ru),sc=n(ru,"SPAN",{});var W0=r(sc);Lk=i(W0,"FlaxDistilBertForMaskedLM"),W0.forEach(t),ru.forEach(t),sh=d(s),Ee=n(s,"DIV",{class:!0});var ht=r(Ee);k(ua.$$.fragment,ht),Sk=d(ht),ma=n(ht,"P",{});var au=r(ma);Ik=i(au,"DistilBert Model with a "),oc=n(au,"CODE",{});var R0=r(oc);Wk=i(R0,"language modeling"),R0.forEach(t),Rk=i(au," head on top."),au.forEach(t),Uk=d(ht),fa=n(ht,"P",{});var iu=r(fa);Qk=i(iu,"This model inherits from "),Zi=n(iu,"A",{href:!0});var U0=r(Zi);Hk=i(U0,"FlaxPreTrainedModel"),U0.forEach(t),Vk=i(iu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),iu.forEach(t),Kk=d(ht),ga=n(ht,"P",{});var lu=r(ga);Jk=i(lu,"This model is also a Flax Linen "),_a=n(lu,"A",{href:!0,rel:!0});var Q0=r(_a);Gk=i(Q0,"flax.linen.Module"),Q0.forEach(t),Xk=i(lu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lu.forEach(t),Yk=d(ht),nc=n(ht,"P",{});var H0=r(nc);Zk=i(H0,"Finally, this model supports inherent JAX features such as:"),H0.forEach(t),eT=d(ht),Pt=n(ht,"UL",{});var Vo=r(Pt);rc=n(Vo,"LI",{});var V0=r(rc);ba=n(V0,"A",{href:!0,rel:!0});var K0=r(ba);tT=i(K0,"Just-In-Time (JIT) compilation"),K0.forEach(t),V0.forEach(t),sT=d(Vo),ac=n(Vo,"LI",{});var J0=r(ac);va=n(J0,"A",{href:!0,rel:!0});var G0=r(va);oT=i(G0,"Automatic Differentiation"),G0.forEach(t),J0.forEach(t),nT=d(Vo),ic=n(Vo,"LI",{});var X0=r(ic);ka=n(X0,"A",{href:!0,rel:!0});var Y0=r(ka);rT=i(Y0,"Vectorization"),Y0.forEach(t),X0.forEach(t),aT=d(Vo),lc=n(Vo,"LI",{});var Z0=r(lc);Ta=n(Z0,"A",{href:!0,rel:!0});var e$=r(Ta);iT=i(e$,"Parallelization"),e$.forEach(t),Z0.forEach(t),Vo.forEach(t),lT=d(ht),at=n(ht,"DIV",{class:!0});var ts=r(at);k(wa.$$.fragment,ts),dT=d(ts),Ls=n(ts,"P",{});var kl=r(Ls);cT=i(kl,"The "),dc=n(kl,"CODE",{});var t$=r(dc);pT=i(t$,"FlaxDistilBertPreTrainedModel"),t$.forEach(t),hT=i(kl," forward method, overrides the "),cc=n(kl,"CODE",{});var s$=r(cc);uT=i(s$,"__call__"),s$.forEach(t),mT=i(kl," special method."),kl.forEach(t),fT=d(ts),k(qo.$$.fragment,ts),gT=d(ts),pc=n(ts,"P",{});var o$=r(pc);_T=i(o$,"Example:"),o$.forEach(t),bT=d(ts),k(ya.$$.fragment,ts),ts.forEach(t),ht.forEach(t),oh=d(s),Ss=n(s,"H2",{class:!0});var du=r(Ss);Po=n(du,"A",{id:!0,class:!0,href:!0});var n$=r(Po);hc=n(n$,"SPAN",{});var r$=r(hc);k($a.$$.fragment,r$),r$.forEach(t),n$.forEach(t),vT=d(du),uc=n(du,"SPAN",{});var a$=r(uc);kT=i(a$,"FlaxDistilBertForSequenceClassification"),a$.forEach(t),du.forEach(t),nh=d(s),xe=n(s,"DIV",{class:!0});var ut=r(xe);k(Fa.$$.fragment,ut),TT=d(ut),mc=n(ut,"P",{});var i$=r(mc);wT=i(i$,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),i$.forEach(t),yT=d(ut),Da=n(ut,"P",{});var cu=r(Da);$T=i(cu,"This model inherits from "),el=n(cu,"A",{href:!0});var l$=r(el);FT=i(l$,"FlaxPreTrainedModel"),l$.forEach(t),DT=i(cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cu.forEach(t),BT=d(ut),Ba=n(ut,"P",{});var pu=r(Ba);MT=i(pu,"This model is also a Flax Linen "),Ma=n(pu,"A",{href:!0,rel:!0});var d$=r(Ma);ET=i(d$,"flax.linen.Module"),d$.forEach(t),xT=i(pu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pu.forEach(t),zT=d(ut),fc=n(ut,"P",{});var c$=r(fc);jT=i(c$,"Finally, this model supports inherent JAX features such as:"),c$.forEach(t),CT=d(ut),At=n(ut,"UL",{});var Ko=r(At);gc=n(Ko,"LI",{});var p$=r(gc);Ea=n(p$,"A",{href:!0,rel:!0});var h$=r(Ea);qT=i(h$,"Just-In-Time (JIT) compilation"),h$.forEach(t),p$.forEach(t),PT=d(Ko),_c=n(Ko,"LI",{});var u$=r(_c);xa=n(u$,"A",{href:!0,rel:!0});var m$=r(xa);AT=i(m$,"Automatic Differentiation"),m$.forEach(t),u$.forEach(t),OT=d(Ko),bc=n(Ko,"LI",{});var f$=r(bc);za=n(f$,"A",{href:!0,rel:!0});var g$=r(za);NT=i(g$,"Vectorization"),g$.forEach(t),f$.forEach(t),LT=d(Ko),vc=n(Ko,"LI",{});var _$=r(vc);ja=n(_$,"A",{href:!0,rel:!0});var b$=r(ja);ST=i(b$,"Parallelization"),b$.forEach(t),_$.forEach(t),Ko.forEach(t),IT=d(ut),it=n(ut,"DIV",{class:!0});var ss=r(it);k(Ca.$$.fragment,ss),WT=d(ss),Is=n(ss,"P",{});var Tl=r(Is);RT=i(Tl,"The "),kc=n(Tl,"CODE",{});var v$=r(kc);UT=i(v$,"FlaxDistilBertPreTrainedModel"),v$.forEach(t),QT=i(Tl," forward method, overrides the "),Tc=n(Tl,"CODE",{});var k$=r(Tc);HT=i(k$,"__call__"),k$.forEach(t),VT=i(Tl," special method."),Tl.forEach(t),KT=d(ss),k(Ao.$$.fragment,ss),JT=d(ss),wc=n(ss,"P",{});var T$=r(wc);GT=i(T$,"Example:"),T$.forEach(t),XT=d(ss),k(qa.$$.fragment,ss),ss.forEach(t),ut.forEach(t),rh=d(s),Ws=n(s,"H2",{class:!0});var hu=r(Ws);Oo=n(hu,"A",{id:!0,class:!0,href:!0});var w$=r(Oo);yc=n(w$,"SPAN",{});var y$=r(yc);k(Pa.$$.fragment,y$),y$.forEach(t),w$.forEach(t),YT=d(hu),$c=n(hu,"SPAN",{});var $$=r($c);ZT=i($$,"FlaxDistilBertForMultipleChoice"),$$.forEach(t),hu.forEach(t),ah=d(s),ze=n(s,"DIV",{class:!0});var mt=r(ze);k(Aa.$$.fragment,mt),ew=d(mt),Fc=n(mt,"P",{});var F$=r(Fc);tw=i(F$,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),F$.forEach(t),sw=d(mt),Oa=n(mt,"P",{});var uu=r(Oa);ow=i(uu,"This model inherits from "),tl=n(uu,"A",{href:!0});var D$=r(tl);nw=i(D$,"FlaxPreTrainedModel"),D$.forEach(t),rw=i(uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),uu.forEach(t),aw=d(mt),Na=n(mt,"P",{});var mu=r(Na);iw=i(mu,"This model is also a Flax Linen "),La=n(mu,"A",{href:!0,rel:!0});var B$=r(La);lw=i(B$,"flax.linen.Module"),B$.forEach(t),dw=i(mu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mu.forEach(t),cw=d(mt),Dc=n(mt,"P",{});var M$=r(Dc);pw=i(M$,"Finally, this model supports inherent JAX features such as:"),M$.forEach(t),hw=d(mt),Ot=n(mt,"UL",{});var Jo=r(Ot);Bc=n(Jo,"LI",{});var E$=r(Bc);Sa=n(E$,"A",{href:!0,rel:!0});var x$=r(Sa);uw=i(x$,"Just-In-Time (JIT) compilation"),x$.forEach(t),E$.forEach(t),mw=d(Jo),Mc=n(Jo,"LI",{});var z$=r(Mc);Ia=n(z$,"A",{href:!0,rel:!0});var j$=r(Ia);fw=i(j$,"Automatic Differentiation"),j$.forEach(t),z$.forEach(t),gw=d(Jo),Ec=n(Jo,"LI",{});var C$=r(Ec);Wa=n(C$,"A",{href:!0,rel:!0});var q$=r(Wa);_w=i(q$,"Vectorization"),q$.forEach(t),C$.forEach(t),bw=d(Jo),xc=n(Jo,"LI",{});var P$=r(xc);Ra=n(P$,"A",{href:!0,rel:!0});var A$=r(Ra);vw=i(A$,"Parallelization"),A$.forEach(t),P$.forEach(t),Jo.forEach(t),kw=d(mt),lt=n(mt,"DIV",{class:!0});var os=r(lt);k(Ua.$$.fragment,os),Tw=d(os),Rs=n(os,"P",{});var wl=r(Rs);ww=i(wl,"The "),zc=n(wl,"CODE",{});var O$=r(zc);yw=i(O$,"FlaxDistilBertPreTrainedModel"),O$.forEach(t),$w=i(wl," forward method, overrides the "),jc=n(wl,"CODE",{});var N$=r(jc);Fw=i(N$,"__call__"),N$.forEach(t),Dw=i(wl," special method."),wl.forEach(t),Bw=d(os),k(No.$$.fragment,os),Mw=d(os),Cc=n(os,"P",{});var L$=r(Cc);Ew=i(L$,"Example:"),L$.forEach(t),xw=d(os),k(Qa.$$.fragment,os),os.forEach(t),mt.forEach(t),ih=d(s),Us=n(s,"H2",{class:!0});var fu=r(Us);Lo=n(fu,"A",{id:!0,class:!0,href:!0});var S$=r(Lo);qc=n(S$,"SPAN",{});var I$=r(qc);k(Ha.$$.fragment,I$),I$.forEach(t),S$.forEach(t),zw=d(fu),Pc=n(fu,"SPAN",{});var W$=r(Pc);jw=i(W$,"FlaxDistilBertForTokenClassification"),W$.forEach(t),fu.forEach(t),lh=d(s),je=n(s,"DIV",{class:!0});var ft=r(je);k(Va.$$.fragment,ft),Cw=d(ft),Ac=n(ft,"P",{});var R$=r(Ac);qw=i(R$,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),R$.forEach(t),Pw=d(ft),Ka=n(ft,"P",{});var gu=r(Ka);Aw=i(gu,"This model inherits from "),sl=n(gu,"A",{href:!0});var U$=r(sl);Ow=i(U$,"FlaxPreTrainedModel"),U$.forEach(t),Nw=i(gu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gu.forEach(t),Lw=d(ft),Ja=n(ft,"P",{});var _u=r(Ja);Sw=i(_u,"This model is also a Flax Linen "),Ga=n(_u,"A",{href:!0,rel:!0});var Q$=r(Ga);Iw=i(Q$,"flax.linen.Module"),Q$.forEach(t),Ww=i(_u,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_u.forEach(t),Rw=d(ft),Oc=n(ft,"P",{});var H$=r(Oc);Uw=i(H$,"Finally, this model supports inherent JAX features such as:"),H$.forEach(t),Qw=d(ft),Nt=n(ft,"UL",{});var Go=r(Nt);Nc=n(Go,"LI",{});var V$=r(Nc);Xa=n(V$,"A",{href:!0,rel:!0});var K$=r(Xa);Hw=i(K$,"Just-In-Time (JIT) compilation"),K$.forEach(t),V$.forEach(t),Vw=d(Go),Lc=n(Go,"LI",{});var J$=r(Lc);Ya=n(J$,"A",{href:!0,rel:!0});var G$=r(Ya);Kw=i(G$,"Automatic Differentiation"),G$.forEach(t),J$.forEach(t),Jw=d(Go),Sc=n(Go,"LI",{});var X$=r(Sc);Za=n(X$,"A",{href:!0,rel:!0});var Y$=r(Za);Gw=i(Y$,"Vectorization"),Y$.forEach(t),X$.forEach(t),Xw=d(Go),Ic=n(Go,"LI",{});var Z$=r(Ic);ei=n(Z$,"A",{href:!0,rel:!0});var eF=r(ei);Yw=i(eF,"Parallelization"),eF.forEach(t),Z$.forEach(t),Go.forEach(t),Zw=d(ft),dt=n(ft,"DIV",{class:!0});var ns=r(dt);k(ti.$$.fragment,ns),e1=d(ns),Qs=n(ns,"P",{});var yl=r(Qs);t1=i(yl,"The "),Wc=n(yl,"CODE",{});var tF=r(Wc);s1=i(tF,"FlaxDistilBertPreTrainedModel"),tF.forEach(t),o1=i(yl," forward method, overrides the "),Rc=n(yl,"CODE",{});var sF=r(Rc);n1=i(sF,"__call__"),sF.forEach(t),r1=i(yl," special method."),yl.forEach(t),a1=d(ns),k(So.$$.fragment,ns),i1=d(ns),Uc=n(ns,"P",{});var oF=r(Uc);l1=i(oF,"Example:"),oF.forEach(t),d1=d(ns),k(si.$$.fragment,ns),ns.forEach(t),ft.forEach(t),dh=d(s),Hs=n(s,"H2",{class:!0});var bu=r(Hs);Io=n(bu,"A",{id:!0,class:!0,href:!0});var nF=r(Io);Qc=n(nF,"SPAN",{});var rF=r(Qc);k(oi.$$.fragment,rF),rF.forEach(t),nF.forEach(t),c1=d(bu),Hc=n(bu,"SPAN",{});var aF=r(Hc);p1=i(aF,"FlaxDistilBertForQuestionAnswering"),aF.forEach(t),bu.forEach(t),ch=d(s),Ce=n(s,"DIV",{class:!0});var gt=r(Ce);k(ni.$$.fragment,gt),h1=d(gt),Vs=n(gt,"P",{});var $l=r(Vs);u1=i($l,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Vc=n($l,"CODE",{});var iF=r(Vc);m1=i(iF,"span start logits"),iF.forEach(t),f1=i($l," and "),Kc=n($l,"CODE",{});var lF=r(Kc);g1=i(lF,"span end logits"),lF.forEach(t),_1=i($l,")."),$l.forEach(t),b1=d(gt),ri=n(gt,"P",{});var vu=r(ri);v1=i(vu,"This model inherits from "),ol=n(vu,"A",{href:!0});var dF=r(ol);k1=i(dF,"FlaxPreTrainedModel"),dF.forEach(t),T1=i(vu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vu.forEach(t),w1=d(gt),ai=n(gt,"P",{});var ku=r(ai);y1=i(ku,"This model is also a Flax Linen "),ii=n(ku,"A",{href:!0,rel:!0});var cF=r(ii);$1=i(cF,"flax.linen.Module"),cF.forEach(t),F1=i(ku,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ku.forEach(t),D1=d(gt),Jc=n(gt,"P",{});var pF=r(Jc);B1=i(pF,"Finally, this model supports inherent JAX features such as:"),pF.forEach(t),M1=d(gt),Lt=n(gt,"UL",{});var Xo=r(Lt);Gc=n(Xo,"LI",{});var hF=r(Gc);li=n(hF,"A",{href:!0,rel:!0});var uF=r(li);E1=i(uF,"Just-In-Time (JIT) compilation"),uF.forEach(t),hF.forEach(t),x1=d(Xo),Xc=n(Xo,"LI",{});var mF=r(Xc);di=n(mF,"A",{href:!0,rel:!0});var fF=r(di);z1=i(fF,"Automatic Differentiation"),fF.forEach(t),mF.forEach(t),j1=d(Xo),Yc=n(Xo,"LI",{});var gF=r(Yc);ci=n(gF,"A",{href:!0,rel:!0});var _F=r(ci);C1=i(_F,"Vectorization"),_F.forEach(t),gF.forEach(t),q1=d(Xo),Zc=n(Xo,"LI",{});var bF=r(Zc);pi=n(bF,"A",{href:!0,rel:!0});var vF=r(pi);P1=i(vF,"Parallelization"),vF.forEach(t),bF.forEach(t),Xo.forEach(t),A1=d(gt),ct=n(gt,"DIV",{class:!0});var rs=r(ct);k(hi.$$.fragment,rs),O1=d(rs),Ks=n(rs,"P",{});var Fl=r(Ks);N1=i(Fl,"The "),ep=n(Fl,"CODE",{});var kF=r(ep);L1=i(kF,"FlaxDistilBertPreTrainedModel"),kF.forEach(t),S1=i(Fl," forward method, overrides the "),tp=n(Fl,"CODE",{});var TF=r(tp);I1=i(TF,"__call__"),TF.forEach(t),W1=i(Fl," special method."),Fl.forEach(t),R1=d(rs),k(Wo.$$.fragment,rs),U1=d(rs),sp=n(rs,"P",{});var wF=r(sp);Q1=i(wF,"Example:"),wF.forEach(t),H1=d(rs),k(ui.$$.fragment,rs),rs.forEach(t),gt.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(ZF)),c(b,"id","distilbert"),c(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(b,"href","#distilbert"),c(g,"class","relative group"),c(G,"id","overview"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#overview"),c(E,"class","relative group"),c(Y,"href","https://medium.com/huggingface/distilbert-8cf3380435b5"),c(Y,"rel","nofollow"),c(z,"href","https://arxiv.org/abs/1910.01108"),c(z,"rel","nofollow"),c(Yo,"href","https://huggingface.co/victorsanh"),c(Yo,"rel","nofollow"),c(Zo,"href","https://huggingface.co/kamalkraj"),c(Zo,"rel","nofollow"),c(en,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/distillation"),c(en,"rel","nofollow"),c(Js,"id","transformers.DistilBertConfig"),c(Js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Js,"href","#transformers.DistilBertConfig"),c(as,"class","relative group"),c(bi,"href","/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertModel"),c(vi,"href","/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(on,"href","https://huggingface.co/distilbert-base-uncased"),c(on,"rel","nofollow"),c(ki,"href","/docs/transformers/pr_16920/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ti,"href","/docs/transformers/pr_16920/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Gs,"id","transformers.DistilBertTokenizer"),c(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gs,"href","#transformers.DistilBertTokenizer"),c(ls,"class","relative group"),c(wi,"href","/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertTokenizer"),c(yi,"href","/docs/transformers/pr_16920/en/model_doc/bert#transformers.BertTokenizer"),c($i,"href","/docs/transformers/pr_16920/en/model_doc/bert#transformers.BertTokenizer"),c(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ys,"id","transformers.DistilBertTokenizerFast"),c(Ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ys,"href","#transformers.DistilBertTokenizerFast"),c(ds,"class","relative group"),c(Fi,"href","/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertTokenizerFast"),c(Di,"href","/docs/transformers/pr_16920/en/model_doc/bert#transformers.BertTokenizerFast"),c(Bi,"href","/docs/transformers/pr_16920/en/model_doc/bert#transformers.BertTokenizerFast"),c(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(eo,"id","transformers.DistilBertModel"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.DistilBertModel"),c(cs,"class","relative group"),c(Mi,"href","/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel"),c(_n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(_n,"rel","nofollow"),c(Ei,"href","/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertModel"),c(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(so,"id","transformers.DistilBertForMaskedLM"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.DistilBertForMaskedLM"),c(hs,"class","relative group"),c(xi,"href","/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel"),c(Fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Fn,"rel","nofollow"),c(zi,"href","/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertForMaskedLM"),c(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(no,"id","transformers.DistilBertForSequenceClassification"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.DistilBertForSequenceClassification"),c(ms,"class","relative group"),c(ji,"href","/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel"),c(Cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Cn,"rel","nofollow"),c(Ci,"href","/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification"),c(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ao,"id","transformers.DistilBertForMultipleChoice"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.DistilBertForMultipleChoice"),c(gs,"class","relative group"),c(qi,"href","/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel"),c(Rn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Rn,"rel","nofollow"),c(Pi,"href","/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertForMultipleChoice"),c(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(lo,"id","transformers.DistilBertForTokenClassification"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.DistilBertForTokenClassification"),c(bs,"class","relative group"),c(Ai,"href","/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel"),c(Gn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Gn,"rel","nofollow"),c(Oi,"href","/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertForTokenClassification"),c(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(po,"id","transformers.DistilBertForQuestionAnswering"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.DistilBertForQuestionAnswering"),c(ks,"class","relative group"),c(Ni,"href","/docs/transformers/pr_16920/en/main_classes/model#transformers.PreTrainedModel"),c(nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(nr,"rel","nofollow"),c(Li,"href","/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering"),c(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(uo,"id","transformers.TFDistilBertModel"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.TFDistilBertModel"),c(ys,"class","relative group"),c(Si,"href","/docs/transformers/pr_16920/en/main_classes/model#transformers.TFPreTrainedModel"),c(hr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(hr,"rel","nofollow"),c(Ii,"href","/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(go,"id","transformers.TFDistilBertForMaskedLM"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.TFDistilBertForMaskedLM"),c(Fs,"class","relative group"),c(Wi,"href","/docs/transformers/pr_16920/en/main_classes/model#transformers.TFPreTrainedModel"),c(kr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(kr,"rel","nofollow"),c(Ri,"href","/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.TFDistilBertForMaskedLM"),c(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(vo,"id","transformers.TFDistilBertForSequenceClassification"),c(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vo,"href","#transformers.TFDistilBertForSequenceClassification"),c(Bs,"class","relative group"),c(Ui,"href","/docs/transformers/pr_16920/en/main_classes/model#transformers.TFPreTrainedModel"),c(Mr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Mr,"rel","nofollow"),c(Qi,"href","/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.TFDistilBertForSequenceClassification"),c(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wo,"id","transformers.TFDistilBertForMultipleChoice"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.TFDistilBertForMultipleChoice"),c(Es,"class","relative group"),c(Hi,"href","/docs/transformers/pr_16920/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ar,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ar,"rel","nofollow"),c(Vi,"href","/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.TFDistilBertForMultipleChoice"),c(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Fo,"id","transformers.TFDistilBertForTokenClassification"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.TFDistilBertForTokenClassification"),c(zs,"class","relative group"),c(Ki,"href","/docs/transformers/pr_16920/en/main_classes/model#transformers.TFPreTrainedModel"),c(Rr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Rr,"rel","nofollow"),c(Ji,"href","/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.TFDistilBertForTokenClassification"),c(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Mo,"id","transformers.TFDistilBertForQuestionAnswering"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.TFDistilBertForQuestionAnswering"),c(Cs,"class","relative group"),c(Gi,"href","/docs/transformers/pr_16920/en/main_classes/model#transformers.TFPreTrainedModel"),c(Xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Xr,"rel","nofollow"),c(Xi,"href","/docs/transformers/pr_16920/en/model_doc/distilbert#transformers.TFDistilBertForQuestionAnswering"),c(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(zo,"id","transformers.FlaxDistilBertModel"),c(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zo,"href","#transformers.FlaxDistilBertModel"),c(As,"class","relative group"),c(Yi,"href","/docs/transformers/pr_16920/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ra,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ra,"rel","nofollow"),c(aa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(aa,"rel","nofollow"),c(ia,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ia,"rel","nofollow"),c(la,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(la,"rel","nofollow"),c(da,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(da,"rel","nofollow"),c(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Co,"id","transformers.FlaxDistilBertForMaskedLM"),c(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Co,"href","#transformers.FlaxDistilBertForMaskedLM"),c(Ns,"class","relative group"),c(Zi,"href","/docs/transformers/pr_16920/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(_a,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(_a,"rel","nofollow"),c(ba,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ba,"rel","nofollow"),c(va,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(va,"rel","nofollow"),c(ka,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ka,"rel","nofollow"),c(Ta,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ta,"rel","nofollow"),c(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Po,"id","transformers.FlaxDistilBertForSequenceClassification"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.FlaxDistilBertForSequenceClassification"),c(Ss,"class","relative group"),c(el,"href","/docs/transformers/pr_16920/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ma,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ma,"rel","nofollow"),c(Ea,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ea,"rel","nofollow"),c(xa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(xa,"rel","nofollow"),c(za,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(za,"rel","nofollow"),c(ja,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ja,"rel","nofollow"),c(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Oo,"id","transformers.FlaxDistilBertForMultipleChoice"),c(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oo,"href","#transformers.FlaxDistilBertForMultipleChoice"),c(Ws,"class","relative group"),c(tl,"href","/docs/transformers/pr_16920/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(La,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(La,"rel","nofollow"),c(Sa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Sa,"rel","nofollow"),c(Ia,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ia,"rel","nofollow"),c(Wa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Wa,"rel","nofollow"),c(Ra,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ra,"rel","nofollow"),c(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Lo,"id","transformers.FlaxDistilBertForTokenClassification"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.FlaxDistilBertForTokenClassification"),c(Us,"class","relative group"),c(sl,"href","/docs/transformers/pr_16920/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ga,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ga,"rel","nofollow"),c(Xa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Xa,"rel","nofollow"),c(Ya,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ya,"rel","nofollow"),c(Za,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Za,"rel","nofollow"),c(ei,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ei,"rel","nofollow"),c(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Io,"id","transformers.FlaxDistilBertForQuestionAnswering"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.FlaxDistilBertForQuestionAnswering"),c(Hs,"class","relative group"),c(ol,"href","/docs/transformers/pr_16920/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ii,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ii,"rel","nofollow"),c(li,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(li,"rel","nofollow"),c(di,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(di,"rel","nofollow"),c(ci,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ci,"rel","nofollow"),c(pi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(pi,"rel","nofollow"),c(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,f){e(document.head,p),u(s,D,f),u(s,g,f),e(g,b),e(b,F),T(_,F,null),e(g,m),e(g,B),e(B,ce),u(s,V,f),u(s,E,f),e(E,G),e(G,S),T(X,S,null),e(E,pe),e(E,I),e(I,he),u(s,ae,f),u(s,N,f),e(N,P),e(N,Y),e(Y,K),e(N,x),e(N,z),e(z,ue),e(N,W),e(N,se),e(se,me),e(N,R),u(s,ie,f),u(s,ee,f),e(ee,A),u(s,le,f),u(s,L,f),e(L,oe),e(oe,fe),u(s,q,f),u(s,te,f),e(te,U),u(s,de,f),u(s,h,f),e(h,M),e(M,J),e(M,_e),e(_e,Te),e(M,O),e(M,be),e(be,we),e(M,ye),e(M,C),e(C,Q),e(M,$e),e(h,Fe),e(h,Z),e(Z,De),e(Z,ne),e(ne,Be),e(Z,Tu),u(s,wp,f),u(s,vt,f),e(vt,wu),e(vt,Yo),e(Yo,yu),e(vt,$u),e(vt,Zo),e(Zo,Fu),e(vt,Du),e(vt,en),e(en,Bu),e(vt,Mu),u(s,yp,f),u(s,as,f),e(as,Js),e(Js,Dl),T(tn,Dl,null),e(as,Eu),e(as,Bl),e(Bl,xu),u(s,$p,f),u(s,Ke,f),T(sn,Ke,null),e(Ke,zu),e(Ke,Ct),e(Ct,ju),e(Ct,bi),e(bi,Cu),e(Ct,qu),e(Ct,vi),e(vi,Pu),e(Ct,Au),e(Ct,on),e(on,Ou),e(Ct,Nu),e(Ke,Lu),e(Ke,is),e(is,Su),e(is,ki),e(ki,Iu),e(is,Wu),e(is,Ti),e(Ti,Ru),e(is,Uu),e(Ke,Qu),e(Ke,Ml),e(Ml,Hu),e(Ke,Vu),T(nn,Ke,null),u(s,Fp,f),u(s,ls,f),e(ls,Gs),e(Gs,El),T(rn,El,null),e(ls,Ku),e(ls,xl),e(xl,Ju),u(s,Dp,f),u(s,_t,f),T(an,_t,null),e(_t,Gu),e(_t,zl),e(zl,Xu),e(_t,Yu),e(_t,Xs),e(Xs,wi),e(wi,Zu),e(Xs,em),e(Xs,yi),e(yi,tm),e(Xs,sm),e(_t,om),e(_t,ln),e(ln,nm),e(ln,$i),e($i,rm),e(ln,am),u(s,Bp,f),u(s,ds,f),e(ds,Ys),e(Ys,jl),T(dn,jl,null),e(ds,im),e(ds,Cl),e(Cl,lm),u(s,Mp,f),u(s,bt,f),T(cn,bt,null),e(bt,dm),e(bt,pn),e(pn,cm),e(pn,ql),e(ql,pm),e(pn,hm),e(bt,um),e(bt,Zs),e(Zs,Fi),e(Fi,mm),e(Zs,fm),e(Zs,Di),e(Di,gm),e(Zs,_m),e(bt,bm),e(bt,hn),e(hn,vm),e(hn,Bi),e(Bi,km),e(hn,Tm),u(s,Ep,f),u(s,cs,f),e(cs,eo),e(eo,Pl),T(un,Pl,null),e(cs,wm),e(cs,Al),e(Al,ym),u(s,xp,f),u(s,Je,f),T(mn,Je,null),e(Je,$m),e(Je,Ol),e(Ol,Fm),e(Je,Dm),e(Je,fn),e(fn,Bm),e(fn,Mi),e(Mi,Mm),e(fn,Em),e(Je,xm),e(Je,gn),e(gn,zm),e(gn,_n),e(_n,jm),e(gn,Cm),e(Je,qm),e(Je,tt),T(bn,tt,null),e(tt,Pm),e(tt,ps),e(ps,Am),e(ps,Ei),e(Ei,Om),e(ps,Nm),e(ps,Nl),e(Nl,Lm),e(ps,Sm),e(tt,Im),T(to,tt,null),e(tt,Wm),e(tt,Ll),e(Ll,Rm),e(tt,Um),T(vn,tt,null),u(s,zp,f),u(s,hs,f),e(hs,so),e(so,Sl),T(kn,Sl,null),e(hs,Qm),e(hs,Il),e(Il,Hm),u(s,jp,f),u(s,Ge,f),T(Tn,Ge,null),e(Ge,Vm),e(Ge,wn),e(wn,Km),e(wn,Wl),e(Wl,Jm),e(wn,Gm),e(Ge,Xm),e(Ge,yn),e(yn,Ym),e(yn,xi),e(xi,Zm),e(yn,ef),e(Ge,tf),e(Ge,$n),e($n,sf),e($n,Fn),e(Fn,of),e($n,nf),e(Ge,rf),e(Ge,Ie),T(Dn,Ie,null),e(Ie,af),e(Ie,us),e(us,lf),e(us,zi),e(zi,df),e(us,cf),e(us,Rl),e(Rl,pf),e(us,hf),e(Ie,uf),T(oo,Ie,null),e(Ie,mf),e(Ie,Ul),e(Ul,ff),e(Ie,gf),T(Bn,Ie,null),e(Ie,_f),T(Mn,Ie,null),u(s,Cp,f),u(s,ms,f),e(ms,no),e(no,Ql),T(En,Ql,null),e(ms,bf),e(ms,Hl),e(Hl,vf),u(s,qp,f),u(s,Xe,f),T(xn,Xe,null),e(Xe,kf),e(Xe,Vl),e(Vl,Tf),e(Xe,wf),e(Xe,zn),e(zn,yf),e(zn,ji),e(ji,$f),e(zn,Ff),e(Xe,Df),e(Xe,jn),e(jn,Bf),e(jn,Cn),e(Cn,Mf),e(jn,Ef),e(Xe,xf),e(Xe,ke),T(qn,ke,null),e(ke,zf),e(ke,fs),e(fs,jf),e(fs,Ci),e(Ci,Cf),e(fs,qf),e(fs,Kl),e(Kl,Pf),e(fs,Af),e(ke,Of),T(ro,ke,null),e(ke,Nf),e(ke,Jl),e(Jl,Lf),e(ke,Sf),T(Pn,ke,null),e(ke,If),T(An,ke,null),e(ke,Wf),e(ke,Gl),e(Gl,Rf),e(ke,Uf),T(On,ke,null),e(ke,Qf),T(Nn,ke,null),u(s,Pp,f),u(s,gs,f),e(gs,ao),e(ao,Xl),T(Ln,Xl,null),e(gs,Hf),e(gs,Yl),e(Yl,Vf),u(s,Ap,f),u(s,Ye,f),T(Sn,Ye,null),e(Ye,Kf),e(Ye,Zl),e(Zl,Jf),e(Ye,Gf),e(Ye,In),e(In,Xf),e(In,qi),e(qi,Yf),e(In,Zf),e(Ye,eg),e(Ye,Wn),e(Wn,tg),e(Wn,Rn),e(Rn,sg),e(Wn,og),e(Ye,ng),e(Ye,st),T(Un,st,null),e(st,rg),e(st,_s),e(_s,ag),e(_s,Pi),e(Pi,ig),e(_s,lg),e(_s,ed),e(ed,dg),e(_s,cg),e(st,pg),T(io,st,null),e(st,hg),e(st,td),e(td,ug),e(st,mg),T(Qn,st,null),u(s,Op,f),u(s,bs,f),e(bs,lo),e(lo,sd),T(Hn,sd,null),e(bs,fg),e(bs,od),e(od,gg),u(s,Np,f),u(s,Ze,f),T(Vn,Ze,null),e(Ze,_g),e(Ze,nd),e(nd,bg),e(Ze,vg),e(Ze,Kn),e(Kn,kg),e(Kn,Ai),e(Ai,Tg),e(Kn,wg),e(Ze,yg),e(Ze,Jn),e(Jn,$g),e(Jn,Gn),e(Gn,Fg),e(Jn,Dg),e(Ze,Bg),e(Ze,We),T(Xn,We,null),e(We,Mg),e(We,vs),e(vs,Eg),e(vs,Oi),e(Oi,xg),e(vs,zg),e(vs,rd),e(rd,jg),e(vs,Cg),e(We,qg),T(co,We,null),e(We,Pg),e(We,ad),e(ad,Ag),e(We,Og),T(Yn,We,null),e(We,Ng),T(Zn,We,null),u(s,Lp,f),u(s,ks,f),e(ks,po),e(po,id),T(er,id,null),e(ks,Lg),e(ks,ld),e(ld,Sg),u(s,Sp,f),u(s,et,f),T(tr,et,null),e(et,Ig),e(et,Ts),e(Ts,Wg),e(Ts,dd),e(dd,Rg),e(Ts,Ug),e(Ts,cd),e(cd,Qg),e(Ts,Hg),e(et,Vg),e(et,sr),e(sr,Kg),e(sr,Ni),e(Ni,Jg),e(sr,Gg),e(et,Xg),e(et,or),e(or,Yg),e(or,nr),e(nr,Zg),e(or,e_),e(et,t_),e(et,Re),T(rr,Re,null),e(Re,s_),e(Re,ws),e(ws,o_),e(ws,Li),e(Li,n_),e(ws,r_),e(ws,pd),e(pd,a_),e(ws,i_),e(Re,l_),T(ho,Re,null),e(Re,d_),e(Re,hd),e(hd,c_),e(Re,p_),T(ar,Re,null),e(Re,h_),T(ir,Re,null),u(s,Ip,f),u(s,ys,f),e(ys,uo),e(uo,ud),T(lr,ud,null),e(ys,u_),e(ys,md),e(md,m_),u(s,Wp,f),u(s,Pe,f),T(dr,Pe,null),e(Pe,f_),e(Pe,fd),e(fd,g_),e(Pe,__),e(Pe,cr),e(cr,b_),e(cr,Si),e(Si,v_),e(cr,k_),e(Pe,T_),e(Pe,pr),e(pr,w_),e(pr,hr),e(hr,y_),e(pr,$_),e(Pe,F_),T(mo,Pe,null),e(Pe,D_),e(Pe,ot),T(ur,ot,null),e(ot,B_),e(ot,$s),e($s,M_),e($s,Ii),e(Ii,E_),e($s,x_),e($s,gd),e(gd,z_),e($s,j_),e(ot,C_),T(fo,ot,null),e(ot,q_),e(ot,_d),e(_d,P_),e(ot,A_),T(mr,ot,null),u(s,Rp,f),u(s,Fs,f),e(Fs,go),e(go,bd),T(fr,bd,null),e(Fs,O_),e(Fs,vd),e(vd,N_),u(s,Up,f),u(s,Ae,f),T(gr,Ae,null),e(Ae,L_),e(Ae,_r),e(_r,S_),e(_r,kd),e(kd,I_),e(_r,W_),e(Ae,R_),e(Ae,br),e(br,U_),e(br,Wi),e(Wi,Q_),e(br,H_),e(Ae,V_),e(Ae,vr),e(vr,K_),e(vr,kr),e(kr,J_),e(vr,G_),e(Ae,X_),T(_o,Ae,null),e(Ae,Y_),e(Ae,Ue),T(Tr,Ue,null),e(Ue,Z_),e(Ue,Ds),e(Ds,eb),e(Ds,Ri),e(Ri,tb),e(Ds,sb),e(Ds,Td),e(Td,ob),e(Ds,nb),e(Ue,rb),T(bo,Ue,null),e(Ue,ab),e(Ue,wd),e(wd,ib),e(Ue,lb),T(wr,Ue,null),e(Ue,db),T(yr,Ue,null),u(s,Qp,f),u(s,Bs,f),e(Bs,vo),e(vo,yd),T($r,yd,null),e(Bs,cb),e(Bs,$d),e($d,pb),u(s,Hp,f),u(s,Oe,f),T(Fr,Oe,null),e(Oe,hb),e(Oe,Fd),e(Fd,ub),e(Oe,mb),e(Oe,Dr),e(Dr,fb),e(Dr,Ui),e(Ui,gb),e(Dr,_b),e(Oe,bb),e(Oe,Br),e(Br,vb),e(Br,Mr),e(Mr,kb),e(Br,Tb),e(Oe,wb),T(ko,Oe,null),e(Oe,yb),e(Oe,Qe),T(Er,Qe,null),e(Qe,$b),e(Qe,Ms),e(Ms,Fb),e(Ms,Qi),e(Qi,Db),e(Ms,Bb),e(Ms,Dd),e(Dd,Mb),e(Ms,Eb),e(Qe,xb),T(To,Qe,null),e(Qe,zb),e(Qe,Bd),e(Bd,jb),e(Qe,Cb),T(xr,Qe,null),e(Qe,qb),T(zr,Qe,null),u(s,Vp,f),u(s,Es,f),e(Es,wo),e(wo,Md),T(jr,Md,null),e(Es,Pb),e(Es,Ed),e(Ed,Ab),u(s,Kp,f),u(s,Ne,f),T(Cr,Ne,null),e(Ne,Ob),e(Ne,xd),e(xd,Nb),e(Ne,Lb),e(Ne,qr),e(qr,Sb),e(qr,Hi),e(Hi,Ib),e(qr,Wb),e(Ne,Rb),e(Ne,Pr),e(Pr,Ub),e(Pr,Ar),e(Ar,Qb),e(Pr,Hb),e(Ne,Vb),T(yo,Ne,null),e(Ne,Kb),e(Ne,nt),T(Or,nt,null),e(nt,Jb),e(nt,xs),e(xs,Gb),e(xs,Vi),e(Vi,Xb),e(xs,Yb),e(xs,zd),e(zd,Zb),e(xs,ev),e(nt,tv),T($o,nt,null),e(nt,sv),e(nt,jd),e(jd,ov),e(nt,nv),T(Nr,nt,null),u(s,Jp,f),u(s,zs,f),e(zs,Fo),e(Fo,Cd),T(Lr,Cd,null),e(zs,rv),e(zs,qd),e(qd,av),u(s,Gp,f),u(s,Le,f),T(Sr,Le,null),e(Le,iv),e(Le,Pd),e(Pd,lv),e(Le,dv),e(Le,Ir),e(Ir,cv),e(Ir,Ki),e(Ki,pv),e(Ir,hv),e(Le,uv),e(Le,Wr),e(Wr,mv),e(Wr,Rr),e(Rr,fv),e(Wr,gv),e(Le,_v),T(Do,Le,null),e(Le,bv),e(Le,He),T(Ur,He,null),e(He,vv),e(He,js),e(js,kv),e(js,Ji),e(Ji,Tv),e(js,wv),e(js,Ad),e(Ad,yv),e(js,$v),e(He,Fv),T(Bo,He,null),e(He,Dv),e(He,Od),e(Od,Bv),e(He,Mv),T(Qr,He,null),e(He,Ev),T(Hr,He,null),u(s,Xp,f),u(s,Cs,f),e(Cs,Mo),e(Mo,Nd),T(Vr,Nd,null),e(Cs,xv),e(Cs,Ld),e(Ld,zv),u(s,Yp,f),u(s,Se,f),T(Kr,Se,null),e(Se,jv),e(Se,qs),e(qs,Cv),e(qs,Sd),e(Sd,qv),e(qs,Pv),e(qs,Id),e(Id,Av),e(qs,Ov),e(Se,Nv),e(Se,Jr),e(Jr,Lv),e(Jr,Gi),e(Gi,Sv),e(Jr,Iv),e(Se,Wv),e(Se,Gr),e(Gr,Rv),e(Gr,Xr),e(Xr,Uv),e(Gr,Qv),e(Se,Hv),T(Eo,Se,null),e(Se,Vv),e(Se,Ve),T(Yr,Ve,null),e(Ve,Kv),e(Ve,Ps),e(Ps,Jv),e(Ps,Xi),e(Xi,Gv),e(Ps,Xv),e(Ps,Wd),e(Wd,Yv),e(Ps,Zv),e(Ve,ek),T(xo,Ve,null),e(Ve,tk),e(Ve,Rd),e(Rd,sk),e(Ve,ok),T(Zr,Ve,null),e(Ve,nk),T(ea,Ve,null),u(s,Zp,f),u(s,As,f),e(As,zo),e(zo,Ud),T(ta,Ud,null),e(As,rk),e(As,Qd),e(Qd,ak),u(s,eh,f),u(s,Me,f),T(sa,Me,null),e(Me,ik),e(Me,Hd),e(Hd,lk),e(Me,dk),e(Me,oa),e(oa,ck),e(oa,Yi),e(Yi,pk),e(oa,hk),e(Me,uk),e(Me,na),e(na,mk),e(na,ra),e(ra,fk),e(na,gk),e(Me,_k),e(Me,Vd),e(Vd,bk),e(Me,vk),e(Me,qt),e(qt,Kd),e(Kd,aa),e(aa,kk),e(qt,Tk),e(qt,Jd),e(Jd,ia),e(ia,wk),e(qt,yk),e(qt,Gd),e(Gd,la),e(la,$k),e(qt,Fk),e(qt,Xd),e(Xd,da),e(da,Dk),e(Me,Bk),e(Me,rt),T(ca,rt,null),e(rt,Mk),e(rt,Os),e(Os,Ek),e(Os,Yd),e(Yd,xk),e(Os,zk),e(Os,Zd),e(Zd,jk),e(Os,Ck),e(rt,qk),T(jo,rt,null),e(rt,Pk),e(rt,ec),e(ec,Ak),e(rt,Ok),T(pa,rt,null),u(s,th,f),u(s,Ns,f),e(Ns,Co),e(Co,tc),T(ha,tc,null),e(Ns,Nk),e(Ns,sc),e(sc,Lk),u(s,sh,f),u(s,Ee,f),T(ua,Ee,null),e(Ee,Sk),e(Ee,ma),e(ma,Ik),e(ma,oc),e(oc,Wk),e(ma,Rk),e(Ee,Uk),e(Ee,fa),e(fa,Qk),e(fa,Zi),e(Zi,Hk),e(fa,Vk),e(Ee,Kk),e(Ee,ga),e(ga,Jk),e(ga,_a),e(_a,Gk),e(ga,Xk),e(Ee,Yk),e(Ee,nc),e(nc,Zk),e(Ee,eT),e(Ee,Pt),e(Pt,rc),e(rc,ba),e(ba,tT),e(Pt,sT),e(Pt,ac),e(ac,va),e(va,oT),e(Pt,nT),e(Pt,ic),e(ic,ka),e(ka,rT),e(Pt,aT),e(Pt,lc),e(lc,Ta),e(Ta,iT),e(Ee,lT),e(Ee,at),T(wa,at,null),e(at,dT),e(at,Ls),e(Ls,cT),e(Ls,dc),e(dc,pT),e(Ls,hT),e(Ls,cc),e(cc,uT),e(Ls,mT),e(at,fT),T(qo,at,null),e(at,gT),e(at,pc),e(pc,_T),e(at,bT),T(ya,at,null),u(s,oh,f),u(s,Ss,f),e(Ss,Po),e(Po,hc),T($a,hc,null),e(Ss,vT),e(Ss,uc),e(uc,kT),u(s,nh,f),u(s,xe,f),T(Fa,xe,null),e(xe,TT),e(xe,mc),e(mc,wT),e(xe,yT),e(xe,Da),e(Da,$T),e(Da,el),e(el,FT),e(Da,DT),e(xe,BT),e(xe,Ba),e(Ba,MT),e(Ba,Ma),e(Ma,ET),e(Ba,xT),e(xe,zT),e(xe,fc),e(fc,jT),e(xe,CT),e(xe,At),e(At,gc),e(gc,Ea),e(Ea,qT),e(At,PT),e(At,_c),e(_c,xa),e(xa,AT),e(At,OT),e(At,bc),e(bc,za),e(za,NT),e(At,LT),e(At,vc),e(vc,ja),e(ja,ST),e(xe,IT),e(xe,it),T(Ca,it,null),e(it,WT),e(it,Is),e(Is,RT),e(Is,kc),e(kc,UT),e(Is,QT),e(Is,Tc),e(Tc,HT),e(Is,VT),e(it,KT),T(Ao,it,null),e(it,JT),e(it,wc),e(wc,GT),e(it,XT),T(qa,it,null),u(s,rh,f),u(s,Ws,f),e(Ws,Oo),e(Oo,yc),T(Pa,yc,null),e(Ws,YT),e(Ws,$c),e($c,ZT),u(s,ah,f),u(s,ze,f),T(Aa,ze,null),e(ze,ew),e(ze,Fc),e(Fc,tw),e(ze,sw),e(ze,Oa),e(Oa,ow),e(Oa,tl),e(tl,nw),e(Oa,rw),e(ze,aw),e(ze,Na),e(Na,iw),e(Na,La),e(La,lw),e(Na,dw),e(ze,cw),e(ze,Dc),e(Dc,pw),e(ze,hw),e(ze,Ot),e(Ot,Bc),e(Bc,Sa),e(Sa,uw),e(Ot,mw),e(Ot,Mc),e(Mc,Ia),e(Ia,fw),e(Ot,gw),e(Ot,Ec),e(Ec,Wa),e(Wa,_w),e(Ot,bw),e(Ot,xc),e(xc,Ra),e(Ra,vw),e(ze,kw),e(ze,lt),T(Ua,lt,null),e(lt,Tw),e(lt,Rs),e(Rs,ww),e(Rs,zc),e(zc,yw),e(Rs,$w),e(Rs,jc),e(jc,Fw),e(Rs,Dw),e(lt,Bw),T(No,lt,null),e(lt,Mw),e(lt,Cc),e(Cc,Ew),e(lt,xw),T(Qa,lt,null),u(s,ih,f),u(s,Us,f),e(Us,Lo),e(Lo,qc),T(Ha,qc,null),e(Us,zw),e(Us,Pc),e(Pc,jw),u(s,lh,f),u(s,je,f),T(Va,je,null),e(je,Cw),e(je,Ac),e(Ac,qw),e(je,Pw),e(je,Ka),e(Ka,Aw),e(Ka,sl),e(sl,Ow),e(Ka,Nw),e(je,Lw),e(je,Ja),e(Ja,Sw),e(Ja,Ga),e(Ga,Iw),e(Ja,Ww),e(je,Rw),e(je,Oc),e(Oc,Uw),e(je,Qw),e(je,Nt),e(Nt,Nc),e(Nc,Xa),e(Xa,Hw),e(Nt,Vw),e(Nt,Lc),e(Lc,Ya),e(Ya,Kw),e(Nt,Jw),e(Nt,Sc),e(Sc,Za),e(Za,Gw),e(Nt,Xw),e(Nt,Ic),e(Ic,ei),e(ei,Yw),e(je,Zw),e(je,dt),T(ti,dt,null),e(dt,e1),e(dt,Qs),e(Qs,t1),e(Qs,Wc),e(Wc,s1),e(Qs,o1),e(Qs,Rc),e(Rc,n1),e(Qs,r1),e(dt,a1),T(So,dt,null),e(dt,i1),e(dt,Uc),e(Uc,l1),e(dt,d1),T(si,dt,null),u(s,dh,f),u(s,Hs,f),e(Hs,Io),e(Io,Qc),T(oi,Qc,null),e(Hs,c1),e(Hs,Hc),e(Hc,p1),u(s,ch,f),u(s,Ce,f),T(ni,Ce,null),e(Ce,h1),e(Ce,Vs),e(Vs,u1),e(Vs,Vc),e(Vc,m1),e(Vs,f1),e(Vs,Kc),e(Kc,g1),e(Vs,_1),e(Ce,b1),e(Ce,ri),e(ri,v1),e(ri,ol),e(ol,k1),e(ri,T1),e(Ce,w1),e(Ce,ai),e(ai,y1),e(ai,ii),e(ii,$1),e(ai,F1),e(Ce,D1),e(Ce,Jc),e(Jc,B1),e(Ce,M1),e(Ce,Lt),e(Lt,Gc),e(Gc,li),e(li,E1),e(Lt,x1),e(Lt,Xc),e(Xc,di),e(di,z1),e(Lt,j1),e(Lt,Yc),e(Yc,ci),e(ci,C1),e(Lt,q1),e(Lt,Zc),e(Zc,pi),e(pi,P1),e(Ce,A1),e(Ce,ct),T(hi,ct,null),e(ct,O1),e(ct,Ks),e(Ks,N1),e(Ks,ep),e(ep,L1),e(Ks,S1),e(Ks,tp),e(tp,I1),e(Ks,W1),e(ct,R1),T(Wo,ct,null),e(ct,U1),e(ct,sp),e(sp,Q1),e(ct,H1),T(ui,ct,null),ph=!0},p(s,[f]){const mi={};f&2&&(mi.$$scope={dirty:f,ctx:s}),to.$set(mi);const op={};f&2&&(op.$$scope={dirty:f,ctx:s}),oo.$set(op);const np={};f&2&&(np.$$scope={dirty:f,ctx:s}),ro.$set(np);const rp={};f&2&&(rp.$$scope={dirty:f,ctx:s}),io.$set(rp);const fi={};f&2&&(fi.$$scope={dirty:f,ctx:s}),co.$set(fi);const ap={};f&2&&(ap.$$scope={dirty:f,ctx:s}),ho.$set(ap);const ip={};f&2&&(ip.$$scope={dirty:f,ctx:s}),mo.$set(ip);const lp={};f&2&&(lp.$$scope={dirty:f,ctx:s}),fo.$set(lp);const St={};f&2&&(St.$$scope={dirty:f,ctx:s}),_o.$set(St);const dp={};f&2&&(dp.$$scope={dirty:f,ctx:s}),bo.$set(dp);const cp={};f&2&&(cp.$$scope={dirty:f,ctx:s}),ko.$set(cp);const pp={};f&2&&(pp.$$scope={dirty:f,ctx:s}),To.$set(pp);const hp={};f&2&&(hp.$$scope={dirty:f,ctx:s}),yo.$set(hp);const up={};f&2&&(up.$$scope={dirty:f,ctx:s}),$o.$set(up);const mp={};f&2&&(mp.$$scope={dirty:f,ctx:s}),Do.$set(mp);const fp={};f&2&&(fp.$$scope={dirty:f,ctx:s}),Bo.$set(fp);const gi={};f&2&&(gi.$$scope={dirty:f,ctx:s}),Eo.$set(gi);const It={};f&2&&(It.$$scope={dirty:f,ctx:s}),xo.$set(It);const gp={};f&2&&(gp.$$scope={dirty:f,ctx:s}),jo.$set(gp);const _p={};f&2&&(_p.$$scope={dirty:f,ctx:s}),qo.$set(_p);const bp={};f&2&&(bp.$$scope={dirty:f,ctx:s}),Ao.$set(bp);const _i={};f&2&&(_i.$$scope={dirty:f,ctx:s}),No.$set(_i);const vp={};f&2&&(vp.$$scope={dirty:f,ctx:s}),So.$set(vp);const Wt={};f&2&&(Wt.$$scope={dirty:f,ctx:s}),Wo.$set(Wt)},i(s){ph||(w(_.$$.fragment,s),w(X.$$.fragment,s),w(tn.$$.fragment,s),w(sn.$$.fragment,s),w(nn.$$.fragment,s),w(rn.$$.fragment,s),w(an.$$.fragment,s),w(dn.$$.fragment,s),w(cn.$$.fragment,s),w(un.$$.fragment,s),w(mn.$$.fragment,s),w(bn.$$.fragment,s),w(to.$$.fragment,s),w(vn.$$.fragment,s),w(kn.$$.fragment,s),w(Tn.$$.fragment,s),w(Dn.$$.fragment,s),w(oo.$$.fragment,s),w(Bn.$$.fragment,s),w(Mn.$$.fragment,s),w(En.$$.fragment,s),w(xn.$$.fragment,s),w(qn.$$.fragment,s),w(ro.$$.fragment,s),w(Pn.$$.fragment,s),w(An.$$.fragment,s),w(On.$$.fragment,s),w(Nn.$$.fragment,s),w(Ln.$$.fragment,s),w(Sn.$$.fragment,s),w(Un.$$.fragment,s),w(io.$$.fragment,s),w(Qn.$$.fragment,s),w(Hn.$$.fragment,s),w(Vn.$$.fragment,s),w(Xn.$$.fragment,s),w(co.$$.fragment,s),w(Yn.$$.fragment,s),w(Zn.$$.fragment,s),w(er.$$.fragment,s),w(tr.$$.fragment,s),w(rr.$$.fragment,s),w(ho.$$.fragment,s),w(ar.$$.fragment,s),w(ir.$$.fragment,s),w(lr.$$.fragment,s),w(dr.$$.fragment,s),w(mo.$$.fragment,s),w(ur.$$.fragment,s),w(fo.$$.fragment,s),w(mr.$$.fragment,s),w(fr.$$.fragment,s),w(gr.$$.fragment,s),w(_o.$$.fragment,s),w(Tr.$$.fragment,s),w(bo.$$.fragment,s),w(wr.$$.fragment,s),w(yr.$$.fragment,s),w($r.$$.fragment,s),w(Fr.$$.fragment,s),w(ko.$$.fragment,s),w(Er.$$.fragment,s),w(To.$$.fragment,s),w(xr.$$.fragment,s),w(zr.$$.fragment,s),w(jr.$$.fragment,s),w(Cr.$$.fragment,s),w(yo.$$.fragment,s),w(Or.$$.fragment,s),w($o.$$.fragment,s),w(Nr.$$.fragment,s),w(Lr.$$.fragment,s),w(Sr.$$.fragment,s),w(Do.$$.fragment,s),w(Ur.$$.fragment,s),w(Bo.$$.fragment,s),w(Qr.$$.fragment,s),w(Hr.$$.fragment,s),w(Vr.$$.fragment,s),w(Kr.$$.fragment,s),w(Eo.$$.fragment,s),w(Yr.$$.fragment,s),w(xo.$$.fragment,s),w(Zr.$$.fragment,s),w(ea.$$.fragment,s),w(ta.$$.fragment,s),w(sa.$$.fragment,s),w(ca.$$.fragment,s),w(jo.$$.fragment,s),w(pa.$$.fragment,s),w(ha.$$.fragment,s),w(ua.$$.fragment,s),w(wa.$$.fragment,s),w(qo.$$.fragment,s),w(ya.$$.fragment,s),w($a.$$.fragment,s),w(Fa.$$.fragment,s),w(Ca.$$.fragment,s),w(Ao.$$.fragment,s),w(qa.$$.fragment,s),w(Pa.$$.fragment,s),w(Aa.$$.fragment,s),w(Ua.$$.fragment,s),w(No.$$.fragment,s),w(Qa.$$.fragment,s),w(Ha.$$.fragment,s),w(Va.$$.fragment,s),w(ti.$$.fragment,s),w(So.$$.fragment,s),w(si.$$.fragment,s),w(oi.$$.fragment,s),w(ni.$$.fragment,s),w(hi.$$.fragment,s),w(Wo.$$.fragment,s),w(ui.$$.fragment,s),ph=!0)},o(s){y(_.$$.fragment,s),y(X.$$.fragment,s),y(tn.$$.fragment,s),y(sn.$$.fragment,s),y(nn.$$.fragment,s),y(rn.$$.fragment,s),y(an.$$.fragment,s),y(dn.$$.fragment,s),y(cn.$$.fragment,s),y(un.$$.fragment,s),y(mn.$$.fragment,s),y(bn.$$.fragment,s),y(to.$$.fragment,s),y(vn.$$.fragment,s),y(kn.$$.fragment,s),y(Tn.$$.fragment,s),y(Dn.$$.fragment,s),y(oo.$$.fragment,s),y(Bn.$$.fragment,s),y(Mn.$$.fragment,s),y(En.$$.fragment,s),y(xn.$$.fragment,s),y(qn.$$.fragment,s),y(ro.$$.fragment,s),y(Pn.$$.fragment,s),y(An.$$.fragment,s),y(On.$$.fragment,s),y(Nn.$$.fragment,s),y(Ln.$$.fragment,s),y(Sn.$$.fragment,s),y(Un.$$.fragment,s),y(io.$$.fragment,s),y(Qn.$$.fragment,s),y(Hn.$$.fragment,s),y(Vn.$$.fragment,s),y(Xn.$$.fragment,s),y(co.$$.fragment,s),y(Yn.$$.fragment,s),y(Zn.$$.fragment,s),y(er.$$.fragment,s),y(tr.$$.fragment,s),y(rr.$$.fragment,s),y(ho.$$.fragment,s),y(ar.$$.fragment,s),y(ir.$$.fragment,s),y(lr.$$.fragment,s),y(dr.$$.fragment,s),y(mo.$$.fragment,s),y(ur.$$.fragment,s),y(fo.$$.fragment,s),y(mr.$$.fragment,s),y(fr.$$.fragment,s),y(gr.$$.fragment,s),y(_o.$$.fragment,s),y(Tr.$$.fragment,s),y(bo.$$.fragment,s),y(wr.$$.fragment,s),y(yr.$$.fragment,s),y($r.$$.fragment,s),y(Fr.$$.fragment,s),y(ko.$$.fragment,s),y(Er.$$.fragment,s),y(To.$$.fragment,s),y(xr.$$.fragment,s),y(zr.$$.fragment,s),y(jr.$$.fragment,s),y(Cr.$$.fragment,s),y(yo.$$.fragment,s),y(Or.$$.fragment,s),y($o.$$.fragment,s),y(Nr.$$.fragment,s),y(Lr.$$.fragment,s),y(Sr.$$.fragment,s),y(Do.$$.fragment,s),y(Ur.$$.fragment,s),y(Bo.$$.fragment,s),y(Qr.$$.fragment,s),y(Hr.$$.fragment,s),y(Vr.$$.fragment,s),y(Kr.$$.fragment,s),y(Eo.$$.fragment,s),y(Yr.$$.fragment,s),y(xo.$$.fragment,s),y(Zr.$$.fragment,s),y(ea.$$.fragment,s),y(ta.$$.fragment,s),y(sa.$$.fragment,s),y(ca.$$.fragment,s),y(jo.$$.fragment,s),y(pa.$$.fragment,s),y(ha.$$.fragment,s),y(ua.$$.fragment,s),y(wa.$$.fragment,s),y(qo.$$.fragment,s),y(ya.$$.fragment,s),y($a.$$.fragment,s),y(Fa.$$.fragment,s),y(Ca.$$.fragment,s),y(Ao.$$.fragment,s),y(qa.$$.fragment,s),y(Pa.$$.fragment,s),y(Aa.$$.fragment,s),y(Ua.$$.fragment,s),y(No.$$.fragment,s),y(Qa.$$.fragment,s),y(Ha.$$.fragment,s),y(Va.$$.fragment,s),y(ti.$$.fragment,s),y(So.$$.fragment,s),y(si.$$.fragment,s),y(oi.$$.fragment,s),y(ni.$$.fragment,s),y(hi.$$.fragment,s),y(Wo.$$.fragment,s),y(ui.$$.fragment,s),ph=!1},d(s){t(p),s&&t(D),s&&t(g),$(_),s&&t(V),s&&t(E),$(X),s&&t(ae),s&&t(N),s&&t(ie),s&&t(ee),s&&t(le),s&&t(L),s&&t(q),s&&t(te),s&&t(de),s&&t(h),s&&t(wp),s&&t(vt),s&&t(yp),s&&t(as),$(tn),s&&t($p),s&&t(Ke),$(sn),$(nn),s&&t(Fp),s&&t(ls),$(rn),s&&t(Dp),s&&t(_t),$(an),s&&t(Bp),s&&t(ds),$(dn),s&&t(Mp),s&&t(bt),$(cn),s&&t(Ep),s&&t(cs),$(un),s&&t(xp),s&&t(Je),$(mn),$(bn),$(to),$(vn),s&&t(zp),s&&t(hs),$(kn),s&&t(jp),s&&t(Ge),$(Tn),$(Dn),$(oo),$(Bn),$(Mn),s&&t(Cp),s&&t(ms),$(En),s&&t(qp),s&&t(Xe),$(xn),$(qn),$(ro),$(Pn),$(An),$(On),$(Nn),s&&t(Pp),s&&t(gs),$(Ln),s&&t(Ap),s&&t(Ye),$(Sn),$(Un),$(io),$(Qn),s&&t(Op),s&&t(bs),$(Hn),s&&t(Np),s&&t(Ze),$(Vn),$(Xn),$(co),$(Yn),$(Zn),s&&t(Lp),s&&t(ks),$(er),s&&t(Sp),s&&t(et),$(tr),$(rr),$(ho),$(ar),$(ir),s&&t(Ip),s&&t(ys),$(lr),s&&t(Wp),s&&t(Pe),$(dr),$(mo),$(ur),$(fo),$(mr),s&&t(Rp),s&&t(Fs),$(fr),s&&t(Up),s&&t(Ae),$(gr),$(_o),$(Tr),$(bo),$(wr),$(yr),s&&t(Qp),s&&t(Bs),$($r),s&&t(Hp),s&&t(Oe),$(Fr),$(ko),$(Er),$(To),$(xr),$(zr),s&&t(Vp),s&&t(Es),$(jr),s&&t(Kp),s&&t(Ne),$(Cr),$(yo),$(Or),$($o),$(Nr),s&&t(Jp),s&&t(zs),$(Lr),s&&t(Gp),s&&t(Le),$(Sr),$(Do),$(Ur),$(Bo),$(Qr),$(Hr),s&&t(Xp),s&&t(Cs),$(Vr),s&&t(Yp),s&&t(Se),$(Kr),$(Eo),$(Yr),$(xo),$(Zr),$(ea),s&&t(Zp),s&&t(As),$(ta),s&&t(eh),s&&t(Me),$(sa),$(ca),$(jo),$(pa),s&&t(th),s&&t(Ns),$(ha),s&&t(sh),s&&t(Ee),$(ua),$(wa),$(qo),$(ya),s&&t(oh),s&&t(Ss),$($a),s&&t(nh),s&&t(xe),$(Fa),$(Ca),$(Ao),$(qa),s&&t(rh),s&&t(Ws),$(Pa),s&&t(ah),s&&t(ze),$(Aa),$(Ua),$(No),$(Qa),s&&t(ih),s&&t(Us),$(Ha),s&&t(lh),s&&t(je),$(Va),$(ti),$(So),$(si),s&&t(dh),s&&t(Hs),$(oi),s&&t(ch),s&&t(Ce),$(ni),$(hi),$(Wo),$(ui)}}}const ZF={local:"distilbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.DistilBertConfig",title:"DistilBertConfig"},{local:"transformers.DistilBertTokenizer",title:"DistilBertTokenizer"},{local:"transformers.DistilBertTokenizerFast",title:"DistilBertTokenizerFast"},{local:"transformers.DistilBertModel",title:"DistilBertModel"},{local:"transformers.DistilBertForMaskedLM",title:"DistilBertForMaskedLM"},{local:"transformers.DistilBertForSequenceClassification",title:"DistilBertForSequenceClassification"},{local:"transformers.DistilBertForMultipleChoice",title:"DistilBertForMultipleChoice"},{local:"transformers.DistilBertForTokenClassification",title:"DistilBertForTokenClassification"},{local:"transformers.DistilBertForQuestionAnswering",title:"DistilBertForQuestionAnswering"},{local:"transformers.TFDistilBertModel",title:"TFDistilBertModel"},{local:"transformers.TFDistilBertForMaskedLM",title:"TFDistilBertForMaskedLM"},{local:"transformers.TFDistilBertForSequenceClassification",title:"TFDistilBertForSequenceClassification"},{local:"transformers.TFDistilBertForMultipleChoice",title:"TFDistilBertForMultipleChoice"},{local:"transformers.TFDistilBertForTokenClassification",title:"TFDistilBertForTokenClassification"},{local:"transformers.TFDistilBertForQuestionAnswering",title:"TFDistilBertForQuestionAnswering"},{local:"transformers.FlaxDistilBertModel",title:"FlaxDistilBertModel"},{local:"transformers.FlaxDistilBertForMaskedLM",title:"FlaxDistilBertForMaskedLM"},{local:"transformers.FlaxDistilBertForSequenceClassification",title:"FlaxDistilBertForSequenceClassification"},{local:"transformers.FlaxDistilBertForMultipleChoice",title:"FlaxDistilBertForMultipleChoice"},{local:"transformers.FlaxDistilBertForTokenClassification",title:"FlaxDistilBertForTokenClassification"},{local:"transformers.FlaxDistilBertForQuestionAnswering",title:"FlaxDistilBertForQuestionAnswering"}],title:"DistilBERT"};function eD(j){return BF(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class aD extends yF{constructor(p){super();$F(this,p,eD,YF,FF,{})}}export{aD as default,ZF as metadata};
