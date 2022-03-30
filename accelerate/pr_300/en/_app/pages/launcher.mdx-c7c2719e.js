import{S as ue,i as he,s as pe,e as s,k as A,w as Q,t as h,M as fe,c as i,d as t,m as L,a as u,x as X,h as p,b as l,F as n,g,y as Z,q as ee,o as te,B as ne,v as me}from"../chunks/vendor-19e06bd2.js";import{T as de}from"../chunks/Tip-f0fa2d82.js";import{D as ge}from"../chunks/Docstring-395e5a9c.js";import{I as _e}from"../chunks/IconCopyLink-3c713d38.js";function be(q){let o,v,r,f,_;return{c(){o=s("p"),v=h("Your "),r=s("code"),f=h("Accelerator"),_=h(` object should only be defined inside the training function. This is because the
initialization should be done inside the launcher only.`)},l(c){o=i(c,"P",{});var m=u(o);v=p(m,"Your "),r=i(m,"CODE",{});var w=u(r);f=p(w,"Accelerator"),w.forEach(t),_=p(m,` object should only be defined inside the training function. This is because the
initialization should be done inside the launcher only.`),m.forEach(t)},m(c,m){g(c,o,m),n(o,v),n(o,r),n(r,f),n(o,_)},d(c){c&&t(o)}}}function ve(q){let o,v,r,f,_,c,m,w,j,G,d,z,y,F,O,x,Y,B,N,$,H,P,J,R,S,k,D,b,E,V,C,W,I;return c=new _e({}),k=new de({props:{warning:!0,$$slots:{default:[be]},$$scope:{ctx:q}}}),E=new ge({props:{name:"accelerate.notebook_launcher",anchor:"accelerate.notebook_launcher",parameters:[{name:"function",val:""},{name:"args",val:" = ()"},{name:"num_processes",val:" = None"},{name:"use_fp16",val:" = False"},{name:"mixed_precision",val:" = 'no'"},{name:"use_port",val:" = '29500'"}],source:"https://github.com/huggingface/accelerate/blob/pr_300/src/accelerate/launchers.py#L28",parametersDescription:[{anchor:"accelerate.notebook_launcher.function",description:`<strong>function</strong> (<code>Callable</code>) &#x2014;
The training function to execute. If it accepts arguments, the first argument should be the index of the
process run.`,name:"function"},{anchor:"accelerate.notebook_launcher.args",description:`<strong>args</strong> (<code>Tuple</code>) &#x2014;
Tuple of arguments to pass to the function (it will receive <code>*args</code>).`,name:"args"},{anchor:"accelerate.notebook_launcher.num_processes",description:`<strong>num_processes</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The number of processes to use for training. Will default to 8 in Colab/Kaggle if a TPU is available, to
the number of GPUs available otherwise.`,name:"num_processes"},{anchor:"accelerate.notebook_launcher.mixed_precision",description:`<strong>mixed_precision</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;no&quot;</code>) &#x2014;
If <code>fp16</code> or <code>bf16</code>, will use mixed precision training on multi-GPU.`,name:"mixed_precision"},{anchor:"accelerate.notebook_launcher.use_port",description:`<strong>use_port</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;29500&quot;</code>) &#x2014;
The port to use to communicate between processes when launching a multi-GPU training.`,name:"use_port"}]}}),{c(){o=s("meta"),v=A(),r=s("h1"),f=s("a"),_=s("span"),Q(c.$$.fragment),m=A(),w=s("span"),j=h("Notebook Launcher"),G=A(),d=s("p"),z=h("Launch your training function inside a notebook. Currently supports launching a training with TPUs on "),y=s("a"),F=h(`Google
Colab`),O=h(" and "),x=s("a"),Y=h("Kaggle kernels"),B=h(`, as well as training on
several GPUs (if the machine on which you are running your notebook has them).`),N=A(),$=s("p"),H=h("An example can be found in "),P=s("a"),J=h("this notebook"),R=h("."),S=A(),Q(k.$$.fragment),D=A(),b=s("div"),Q(E.$$.fragment),V=A(),C=s("p"),W=h(`Launches a training function, using several processes if it\u2019s possible in the current environment (TPU with
multiple cores for instance).`),this.h()},l(e){const a=fe('[data-svelte="svelte-1phssyn"]',document.head);o=i(a,"META",{name:!0,content:!0}),a.forEach(t),v=L(e),r=i(e,"H1",{class:!0});var T=u(r);f=i(T,"A",{id:!0,class:!0,href:!0});var oe=u(f);_=i(oe,"SPAN",{});var ae=u(_);X(c.$$.fragment,ae),ae.forEach(t),oe.forEach(t),m=L(T),w=i(T,"SPAN",{});var re=u(w);j=p(re,"Notebook Launcher"),re.forEach(t),T.forEach(t),G=L(e),d=i(e,"P",{});var U=u(d);z=p(U,"Launch your training function inside a notebook. Currently supports launching a training with TPUs on "),y=i(U,"A",{href:!0,rel:!0});var se=u(y);F=p(se,`Google
Colab`),se.forEach(t),O=p(U," and "),x=i(U,"A",{href:!0,rel:!0});var ie=u(x);Y=p(ie,"Kaggle kernels"),ie.forEach(t),B=p(U,`, as well as training on
several GPUs (if the machine on which you are running your notebook has them).`),U.forEach(t),N=L(e),$=i(e,"P",{});var K=u($);H=p(K,"An example can be found in "),P=i(K,"A",{href:!0,rel:!0});var ce=u(P);J=p(ce,"this notebook"),ce.forEach(t),R=p(K,"."),K.forEach(t),S=L(e),X(k.$$.fragment,e),D=L(e),b=i(e,"DIV",{class:!0});var M=u(b);X(E.$$.fragment,M),V=L(M),C=i(M,"P",{});var le=u(C);W=p(le,`Launches a training function, using several processes if it\u2019s possible in the current environment (TPU with
multiple cores for instance).`),le.forEach(t),M.forEach(t),this.h()},h(){l(o,"name","hf:doc:metadata"),l(o,"content",JSON.stringify(we)),l(f,"id","accelerate.notebook_launcher"),l(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(f,"href","#accelerate.notebook_launcher"),l(r,"class","relative group"),l(y,"href","https://colab.research.google.com/"),l(y,"rel","nofollow"),l(x,"href","https://www.kaggle.com/code"),l(x,"rel","nofollow"),l(P,"href","https://github.com/huggingface/notebooks/blob/master/examples/accelerate/simple_nlp_example.ipynb"),l(P,"rel","nofollow"),l(b,"class","docstring")},m(e,a){n(document.head,o),g(e,v,a),g(e,r,a),n(r,f),n(f,_),Z(c,_,null),n(r,m),n(r,w),n(w,j),g(e,G,a),g(e,d,a),n(d,z),n(d,y),n(y,F),n(d,O),n(d,x),n(x,Y),n(d,B),g(e,N,a),g(e,$,a),n($,H),n($,P),n(P,J),n($,R),g(e,S,a),Z(k,e,a),g(e,D,a),g(e,b,a),Z(E,b,null),n(b,V),n(b,C),n(C,W),I=!0},p(e,[a]){const T={};a&2&&(T.$$scope={dirty:a,ctx:e}),k.$set(T)},i(e){I||(ee(c.$$.fragment,e),ee(k.$$.fragment,e),ee(E.$$.fragment,e),I=!0)},o(e){te(c.$$.fragment,e),te(k.$$.fragment,e),te(E.$$.fragment,e),I=!1},d(e){t(o),e&&t(v),e&&t(r),ne(c),e&&t(G),e&&t(d),e&&t(N),e&&t($),e&&t(S),ne(k,e),e&&t(D),e&&t(b),ne(E)}}}const we={local:"accelerate.notebook_launcher",title:"Notebook Launcher"};function $e(q){return me(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ee extends ue{constructor(o){super();he(this,o,$e,ve,pe,{})}}export{Ee as default,we as metadata};
