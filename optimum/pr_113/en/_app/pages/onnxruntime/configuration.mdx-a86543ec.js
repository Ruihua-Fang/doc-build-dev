import{S as nt,i as ot,s as et,e,k as _,w as L,t as F,M as at,c as a,d as n,m as v,a as r,x as I,h as M,b as i,F as o,g as x,y as H,L as it,q as Q,o as B,B as G,v as rt}from"../../chunks/vendor-19e06bd2.js";import{D as st}from"../../chunks/Docstring-395e5a9c.js";import{I as tt}from"../../chunks/IconCopyLink-3c713d38.js";function mt(J){let s,N,m,p,$,g,S,O,k,R,c,f,C,h,A,w,P,z,l,d,X,y,D,T;return g=new tt({}),h=new tt({}),d=new st({props:{name:"class optimum.onnxruntime.ORTConfig",anchor:"optimum.onnxruntime.ORTConfig",parameters:[{name:"opset",val:": typing.Optional[int] = None"},{name:"use_external_data_format",val:": bool = False"},{name:"optimization_config",val:": typing.Optional[optimum.onnxruntime.configuration.OptimizationConfig] = None"},{name:"quantization_config",val:": typing.Optional[optimum.onnxruntime.configuration.QuantizationConfig] = None"}],source:"https://github.com/huggingface/optimum/blob/pr_113/src/optimum/onnxruntime/configuration.py#L537",parametersDescription:[{anchor:"optimum.onnxruntime.ORTConfig.opset",description:`<strong>opset</strong> (<code>int</code>, <code>optional</code>) &#x2014;
ONNX opset version to export the model with.`,name:"opset"},{anchor:"optimum.onnxruntime.ORTConfig.use_external_data_format",description:`<strong>use_external_data_format</strong> (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>) &#x2014;
Allow exporting model &gt;= than 2Gb.`,name:"use_external_data_format"},{anchor:"optimum.onnxruntime.ORTConfig.optimization_config",description:`<strong>optimization_config</strong> (<code>OptimizationConfig</code>, <code>optional</code>, defaults to None) &#x2014;
Specify a configuration to optimize ONNX Runtime model`,name:"optimization_config"},{anchor:"optimum.onnxruntime.ORTConfig.quantization_config",description:`<strong>quantization_config</strong> (<code>QuantizationConfig</code>, <code>optional</code>, defaults to None) &#x2014;
Specify a configuration to quantize ONNX Runtime model`,name:"quantization_config"}]}}),{c(){s=e("meta"),N=_(),m=e("h1"),p=e("a"),$=e("span"),L(g.$$.fragment),S=_(),O=e("span"),k=F("Configuration"),R=_(),c=e("h2"),f=e("a"),C=e("span"),L(h.$$.fragment),A=_(),w=e("span"),P=F("ORTConfig"),z=_(),l=e("div"),L(d.$$.fragment),X=_(),y=e("p"),D=F("ORTConfig is the configuration class handling all the ONNX Runtime optimization and quantization parameters."),this.h()},l(t){const u=at('[data-svelte="svelte-1phssyn"]',document.head);s=a(u,"META",{name:!0,content:!0}),u.forEach(n),N=v(t),m=a(t,"H1",{class:!0});var E=r(m);p=a(E,"A",{id:!0,class:!0,href:!0});var U=r(p);$=a(U,"SPAN",{});var V=r($);I(g.$$.fragment,V),V.forEach(n),U.forEach(n),S=v(E),O=a(E,"SPAN",{});var j=r(O);k=M(j,"Configuration"),j.forEach(n),E.forEach(n),R=v(t),c=a(t,"H2",{class:!0});var b=r(c);f=a(b,"A",{id:!0,class:!0,href:!0});var K=r(f);C=a(K,"SPAN",{});var W=r(C);I(h.$$.fragment,W),W.forEach(n),K.forEach(n),A=v(b),w=a(b,"SPAN",{});var Y=r(w);P=M(Y,"ORTConfig"),Y.forEach(n),b.forEach(n),z=v(t),l=a(t,"DIV",{class:!0});var q=r(l);I(d.$$.fragment,q),X=v(q),y=a(q,"P",{});var Z=r(y);D=M(Z,"ORTConfig is the configuration class handling all the ONNX Runtime optimization and quantization parameters."),Z.forEach(n),q.forEach(n),this.h()},h(){i(s,"name","hf:doc:metadata"),i(s,"content",JSON.stringify(ct)),i(p,"id","configuration"),i(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(p,"href","#configuration"),i(m,"class","relative group"),i(f,"id","optimum.onnxruntime.ORTConfig"),i(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(f,"href","#optimum.onnxruntime.ORTConfig"),i(c,"class","relative group"),i(l,"class","docstring")},m(t,u){o(document.head,s),x(t,N,u),x(t,m,u),o(m,p),o(p,$),H(g,$,null),o(m,S),o(m,O),o(O,k),x(t,R,u),x(t,c,u),o(c,f),o(f,C),H(h,C,null),o(c,A),o(c,w),o(w,P),x(t,z,u),x(t,l,u),H(d,l,null),o(l,X),o(l,y),o(y,D),T=!0},p:it,i(t){T||(Q(g.$$.fragment,t),Q(h.$$.fragment,t),Q(d.$$.fragment,t),T=!0)},o(t){B(g.$$.fragment,t),B(h.$$.fragment,t),B(d.$$.fragment,t),T=!1},d(t){n(s),t&&n(N),t&&n(m),G(g),t&&n(R),t&&n(c),G(h),t&&n(z),t&&n(l),G(d)}}}const ct={local:"configuration",sections:[{local:"optimum.onnxruntime.ORTConfig",title:"ORTConfig"}],title:"Configuration"};function lt(J){return rt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class gt extends nt{constructor(s){super();ot(this,s,lt,mt,et,{})}}export{gt as default,ct as metadata};
