import{S as Ss,i as Hs,s as Ls,e as a,k as m,w as E,t as n,M as Ws,c as r,d as o,m as u,a as i,x as $,h as s,b as d,F as t,g as p,y as O,q as z,o as j,B as b,v as Us}from"../chunks/vendor-19e06bd2.js";import{T as Bs}from"../chunks/Tip-f0fa2d82.js";import{I as xe}from"../chunks/IconCopyLink-3c713d38.js";import{C as ye}from"../chunks/CodeBlock-9dd1fdfb.js";function Rs(vt){let c,U,k,A,N,x,Z,Q;return{c(){c=a("p"),U=n("You can also use the "),k=a("code"),A=n("transformers.pipeline"),N=n(" and provide your "),x=a("code"),Z=n("OptimumModel"),Q=n(".")},l(M){c=r(M,"P",{});var y=i(c);U=s(y,"You can also use the "),k=r(y,"CODE",{});var w=i(k);A=s(w,"transformers.pipeline"),w.forEach(o),N=s(y," and provide your "),x=r(y,"CODE",{});var ve=i(x);Z=s(ve,"OptimumModel"),ve.forEach(o),Q=s(y,"."),y.forEach(o)},m(M,y){p(M,c,y),t(c,U),t(c,k),t(k,A),t(c,N),t(c,x),t(x,Z),t(c,Q)},d(M){M&&o(c)}}}function Ys(vt){let c,U,k,A,N,x,Z,Q,M,y,w,ve,Ee,Jt,Kt,ee,Vt,Xt,$e,Zt,eo,kt,B,wt,ke,to,qt,we,Oe,oo,xt,q,ze,je,no,so,be,Ae,ao,ro,Te,Pe,io,lo,Fe,Ce,po,mo,De,Ne,uo,yt,I,R,Qe,te,co,Me,fo,Et,T,ho,Ie,go,_o,Se,vo,ko,He,wo,qo,$t,qe,oe,xo,Le,yo,Eo,Ot,ne,zt,se,ae,$o,We,Oo,zo,jt,re,bt,S,Y,Ue,ie,jo,Be,bo,At,h,Ao,Re,To,Po,le,Fo,Co,Ye,Do,No,Ge,Qo,Mo,Je,Io,So,Tt,pe,Pt,H,G,Ke,me,Ho,Ve,Lo,Ft,g,Wo,Xe,Uo,Bo,ue,Ro,Yo,Ze,Go,Jo,et,Ko,Vo,tt,Xo,Zo,Ct,de,Dt,L,J,ot,ce,en,nt,tn,Nt,f,on,st,nn,sn,at,an,rn,rt,ln,pn,it,mn,un,lt,dn,cn,pt,fn,hn,mt,gn,_n,Qt,fe,Mt,W,K,ut,he,vn,dt,kn,It,_,wn,ct,qn,xn,ft,yn,En,ht,$n,On,gt,zn,jn,_t,bn,An,St,ge,Ht;return x=new xe({}),B=new Bs({props:{$$slots:{default:[Rs]},$$scope:{ctx:vt}}}),te=new xe({}),ne=new ye({props:{code:`from optimum import optimum_pipeline

classifier = optimum_pipeline(task="text-classification", accelerator="onnx")
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum <span class="hljs-keyword">import</span> optimum_pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>classifier = optimum_pipeline(task=<span class="hljs-string">&quot;text-classification&quot;</span>, accelerator=<span class="hljs-string">&quot;onnx&quot;</span>)
`}}),re=new ye({props:{code:'classifier("I like you. I love you.")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>classifier(<span class="hljs-string">&quot;I like you. I love you.&quot;</span>)'}}),ie=new xe({}),pe=new ye({props:{code:`from transformers import AutoTokenizer
from optimum.onnxruntime import OnnxForQuestionAnswering
from optimum import optimum_pipeline

tokenizer = AutoTokenizer.from_pretrained("deepset/roberta-base-squad2")
model = OnnxForQuestionAnswering.from_transformers("deepset/roberta-base-squad2")

onnx_qa = optimum_pipeline("question-answering", model=onnx_model, tokenizer=tokenizer)
question = "Whats my name?"
context = "My Name is Philipp and I live in Nuremberg."

pred = onnx_qa(question=question, context=context)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> OnnxForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum <span class="hljs-keyword">import</span> optimum_pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OnnxForQuestionAnswering.from_transformers(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_qa = optimum_pipeline(<span class="hljs-string">&quot;question-answering&quot;</span>, model=onnx_model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;Whats my name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>context = <span class="hljs-string">&quot;My Name is Philipp and I live in Nuremberg.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),me=new xe({}),de=new ye({props:{code:`from transformers import AutoTokenizer
from optimum.onnxruntime import OnnxForQuestionAnswering
from optimum import optimum_pipeline

tokenizer = AutoTokenizer.from_pretrained("optimum/roberta-base-squad2")
model = OnnxForQuestionAnswering.from_transformers("deepset/roberta-base-squad2")

onnx_qa = optimum_pipeline("question-answering", model=onnx_model, tokenizer=tokenizer)
question = "Whats my name?"
context = "My Name is Philipp and I live in Nuremberg."

pred = onnx_qa(question=question, context=context)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> OnnxForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum <span class="hljs-keyword">import</span> optimum_pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;optimum/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OnnxForQuestionAnswering.from_transformers(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_qa = optimum_pipeline(<span class="hljs-string">&quot;question-answering&quot;</span>, model=onnx_model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;Whats my name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>context = <span class="hljs-string">&quot;My Name is Philipp and I live in Nuremberg.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),ce=new xe({}),fe=new ye({props:{code:`from transformers import AutoTokenizer
from optimum.onnxruntime import OnnxForQuestionAnswering
from optimum import optimum_pipeline

tokenizer = AutoTokenizer.from_pretrained("deepset/roberta-base-squad2")
model = OnnxForQuestionAnswering.from_transformers("deepset/roberta-base-squad2")

onnx_qa = optimum_pipeline("question-answering", model=onnx_model, tokenizer=tokenizer, do_optimization=True, do_quantization=True)
question = "Whats my name?"
context = "My Name is Philipp and I live in Nuremberg."

pred = onnx_qa(question=question, context=context)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> OnnxForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum <span class="hljs-keyword">import</span> optimum_pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OnnxForQuestionAnswering.from_transformers(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_qa = optimum_pipeline(<span class="hljs-string">&quot;question-answering&quot;</span>, model=onnx_model, tokenizer=tokenizer, do_optimization=<span class="hljs-literal">True</span>, do_quantization=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;Whats my name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>context = <span class="hljs-string">&quot;My Name is Philipp and I live in Nuremberg.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),he=new xe({}),ge=new ye({props:{code:`from transformers import AutoTokenizer, pipeline
-from transformers import AutoModelForQuestionAnswering
+ from optimum.onnxruntime import OnnxForQuestionAnswering

-model = AutoModelForQuestionAnswering.from_pretrained("philschmid/distilbert-onnx")
+model = OnnxForQuestionAnswering.from_pretrained("philschmid/distilbert-onnx")
tokenizer = AutoTokenizer.from_pretrained("philschmid/distilbert-onnx")

onnx_qa = pipeline("question-answering",model=model,tokenizer=tokenizer)

question = "Whats my name?"
context = "My Name is Philipp and I live in Nuremberg."
pred = onnx_qa(question, context)`,highlighted:`from transformers import AutoTokenizer, pipeline
<span class="hljs-deletion">-from transformers import AutoModelForQuestionAnswering</span>
<span class="hljs-addition">+ from optimum.onnxruntime import OnnxForQuestionAnswering</span>

<span class="hljs-deletion">-model = AutoModelForQuestionAnswering.from_pretrained(&quot;philschmid/distilbert-onnx&quot;)</span>
<span class="hljs-addition">+model = OnnxForQuestionAnswering.from_pretrained(&quot;philschmid/distilbert-onnx&quot;)</span>
tokenizer = AutoTokenizer.from_pretrained(&quot;philschmid/distilbert-onnx&quot;)

onnx_qa = pipeline(&quot;question-answering&quot;,model=model,tokenizer=tokenizer)

question = &quot;Whats my name?&quot;
context = &quot;My Name is Philipp and I live in Nuremberg.&quot;
pred = onnx_qa(question, context)`}}),{c(){c=a("meta"),U=m(),k=a("h1"),A=a("a"),N=a("span"),E(x.$$.fragment),Z=m(),Q=a("span"),M=n("Optimum Pipelines for inference"),y=m(),w=a("p"),ve=n("The "),Ee=a("code"),Jt=n("optimum_pipeline"),Kt=n(" makes it simple to use models from the "),ee=a("a"),Vt=n("Model Hub"),Xt=n(` for accelerated inference on a variety of tasks such as text classification.
Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the `),$e=a("code"),Zt=n("optimum_pipeline"),eo=n("! This tutorial will teach you to:"),kt=m(),E(B.$$.fragment),wt=m(),ke=a("p"),to=n("Currenlty supported tasks are:"),qt=m(),we=a("p"),Oe=a("strong"),oo=n("Onnxruntime"),xt=m(),q=a("ul"),ze=a("li"),je=a("code"),no=n("feature-extraction"),so=m(),be=a("li"),Ae=a("code"),ao=n("text-classification"),ro=m(),Te=a("li"),Pe=a("code"),io=n("token-classification"),lo=m(),Fe=a("li"),Ce=a("code"),po=n("question-answering"),mo=m(),De=a("li"),Ne=a("code"),uo=n("zero-shot-classification"),yt=m(),I=a("h2"),R=a("a"),Qe=a("span"),E(te.$$.fragment),co=m(),Me=a("span"),fo=n("Optimum Pipeline usage"),Et=m(),T=a("p"),ho=n("While each task has an associated "),Ie=a("code"),go=n("optimum_pipeline"),_o=n(", it is simpler to use the general "),Se=a("code"),vo=n("pipeline"),ko=n(` abstraction which contains all the specific task pipelines.
The `),He=a("code"),wo=n("optimum_pipeline"),qo=n(" automatically loads a default model and tokenizer capable of inference for your task."),$t=m(),qe=a("ol"),oe=a("li"),xo=n("Start by creating a "),Le=a("code"),yo=n("optimum_pipeline"),Eo=n(" and specify an inference task:"),Ot=m(),E(ne.$$.fragment),zt=m(),se=a("ol"),ae=a("li"),$o=n("Pass your input text to the "),We=a("code"),Oo=n("optimum_pipeline"),zo=n(":"),jt=m(),E(re.$$.fragment),bt=m(),S=a("h3"),Y=a("a"),Ue=a("span"),E(ie.$$.fragment),jo=m(),Be=a("span"),bo=n("Use a vanilla transformers model and convert"),At=m(),h=a("p"),Ao=n("The "),Re=a("code"),To=n("optimum_pipeline"),Po=n(" accepts supported model from the "),le=a("a"),Fo=n("Model Hub"),Co=n(`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),Ye=a("code"),Do=n(".from_transformers"),No=n(" method for corresponding "),Ge=a("code"),Qo=n("OnnxFor*"),Mo=n("\nand [`AutoTokenizer\u2019] class. For example, load the "),Je=a("code"),Io=n("OnnxForQuestionAnswering"),So=n(" class for a question answering modeling task:"),Tt=m(),E(pe.$$.fragment),Pt=m(),H=a("h3"),G=a("a"),Ke=a("span"),E(me.$$.fragment),Ho=m(),Ve=a("span"),Lo=n("Use optimum model"),Ft=m(),g=a("p"),Wo=n("The "),Xe=a("code"),Uo=n("optimum_pipeline"),Bo=n(" is tightly integrated with "),ue=a("a"),Ro=n("Model Hub"),Yo=n(` and can load optimized models directly, e.g. Onnxruntime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),Ze=a("code"),Go=n(".from_pretrained"),Jo=n(" method for corresponding "),et=a("code"),Ko=n("OnnxFor*"),Vo=n("\nand [`AutoTokenizer\u2019] class. For example, load the "),tt=a("code"),Xo=n("OnnxForQuestionAnswering"),Zo=n(" class for a question answering modeling task:"),Ct=m(),E(de.$$.fragment),Dt=m(),L=a("h3"),J=a("a"),ot=a("span"),E(ce.$$.fragment),en=m(),nt=a("span"),tn=n("Optimizing and Quantizing in Pipelines"),Nt=m(),f=a("p"),on=n("The "),st=a("code"),nn=n("optimum_pipeline"),sn=n(` can not only run inference it also provides arguments to quantize and optimize your model on the fly.
Once you\u2019ve picked an appropriate model, load it with the `),at=a("code"),an=n(".from_transformers"),rn=n(" or "),rt=a("code"),ln=n(".from_pretrained"),pn=n(" method for corresponding "),it=a("code"),mn=n("OnnxFor*"),un=n("\nand [`AutoTokenizer\u2019] class. For example, load the "),lt=a("code"),dn=n("OnnxForQuestionAnswering"),cn=n(` class for a question answering modeling task and provide
the `),pt=a("code"),fn=n("do_optimization=True"),hn=n(" and/or "),mt=a("code"),gn=n("do_quantization=True"),_n=n(" arguments:"),Qt=m(),E(fe.$$.fragment),Mt=m(),W=a("h2"),K=a("a"),ut=a("span"),E(he.$$.fragment),vn=m(),dt=a("span"),kn=n("Transformers pipeline usage"),It=m(),_=a("p"),wn=n("The "),ct=a("code"),qn=n("optimum_pipeline"),xn=n(" is just a light wrapper around the "),ft=a("code"),yn=n("transformers.pipeline"),En=n(` to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),ht=a("code"),$n=n("transformers.pipeline"),On=n(" and just replace your "),gt=a("code"),zn=n("AutoFor*"),jn=n(` with the optimum
`),_t=a("code"),bn=n("OnnxFor*"),An=n(" class."),St=m(),E(ge.$$.fragment),this.h()},l(e){const l=Ws('[data-svelte="svelte-1phssyn"]',document.head);c=r(l,"META",{name:!0,content:!0}),l.forEach(o),U=u(e),k=r(e,"H1",{class:!0});var _e=i(k);A=r(_e,"A",{id:!0,class:!0,href:!0});var Tn=i(A);N=r(Tn,"SPAN",{});var Pn=i(N);$(x.$$.fragment,Pn),Pn.forEach(o),Tn.forEach(o),Z=u(_e),Q=r(_e,"SPAN",{});var Fn=i(Q);M=s(Fn,"Optimum Pipelines for inference"),Fn.forEach(o),_e.forEach(o),y=u(e),w=r(e,"P",{});var V=i(w);ve=s(V,"The "),Ee=r(V,"CODE",{});var Cn=i(Ee);Jt=s(Cn,"optimum_pipeline"),Cn.forEach(o),Kt=s(V," makes it simple to use models from the "),ee=r(V,"A",{href:!0,rel:!0});var Dn=i(ee);Vt=s(Dn,"Model Hub"),Dn.forEach(o),Xt=s(V,` for accelerated inference on a variety of tasks such as text classification.
Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the `),$e=r(V,"CODE",{});var Nn=i($e);Zt=s(Nn,"optimum_pipeline"),Nn.forEach(o),eo=s(V,"! This tutorial will teach you to:"),V.forEach(o),kt=u(e),$(B.$$.fragment,e),wt=u(e),ke=r(e,"P",{});var Qn=i(ke);to=s(Qn,"Currenlty supported tasks are:"),Qn.forEach(o),qt=u(e),we=r(e,"P",{});var Mn=i(we);Oe=r(Mn,"STRONG",{});var In=i(Oe);oo=s(In,"Onnxruntime"),In.forEach(o),Mn.forEach(o),xt=u(e),q=r(e,"UL",{});var D=i(q);ze=r(D,"LI",{});var Sn=i(ze);je=r(Sn,"CODE",{});var Hn=i(je);no=s(Hn,"feature-extraction"),Hn.forEach(o),Sn.forEach(o),so=u(D),be=r(D,"LI",{});var Ln=i(be);Ae=r(Ln,"CODE",{});var Wn=i(Ae);ao=s(Wn,"text-classification"),Wn.forEach(o),Ln.forEach(o),ro=u(D),Te=r(D,"LI",{});var Un=i(Te);Pe=r(Un,"CODE",{});var Bn=i(Pe);io=s(Bn,"token-classification"),Bn.forEach(o),Un.forEach(o),lo=u(D),Fe=r(D,"LI",{});var Rn=i(Fe);Ce=r(Rn,"CODE",{});var Yn=i(Ce);po=s(Yn,"question-answering"),Yn.forEach(o),Rn.forEach(o),mo=u(D),De=r(D,"LI",{});var Gn=i(De);Ne=r(Gn,"CODE",{});var Jn=i(Ne);uo=s(Jn,"zero-shot-classification"),Jn.forEach(o),Gn.forEach(o),D.forEach(o),yt=u(e),I=r(e,"H2",{class:!0});var Lt=i(I);R=r(Lt,"A",{id:!0,class:!0,href:!0});var Kn=i(R);Qe=r(Kn,"SPAN",{});var Vn=i(Qe);$(te.$$.fragment,Vn),Vn.forEach(o),Kn.forEach(o),co=u(Lt),Me=r(Lt,"SPAN",{});var Xn=i(Me);fo=s(Xn,"Optimum Pipeline usage"),Xn.forEach(o),Lt.forEach(o),Et=u(e),T=r(e,"P",{});var X=i(T);ho=s(X,"While each task has an associated "),Ie=r(X,"CODE",{});var Zn=i(Ie);go=s(Zn,"optimum_pipeline"),Zn.forEach(o),_o=s(X,", it is simpler to use the general "),Se=r(X,"CODE",{});var es=i(Se);vo=s(es,"pipeline"),es.forEach(o),ko=s(X,` abstraction which contains all the specific task pipelines.
The `),He=r(X,"CODE",{});var ts=i(He);wo=s(ts,"optimum_pipeline"),ts.forEach(o),qo=s(X," automatically loads a default model and tokenizer capable of inference for your task."),X.forEach(o),$t=u(e),qe=r(e,"OL",{});var os=i(qe);oe=r(os,"LI",{});var Wt=i(oe);xo=s(Wt,"Start by creating a "),Le=r(Wt,"CODE",{});var ns=i(Le);yo=s(ns,"optimum_pipeline"),ns.forEach(o),Eo=s(Wt," and specify an inference task:"),Wt.forEach(o),os.forEach(o),Ot=u(e),$(ne.$$.fragment,e),zt=u(e),se=r(e,"OL",{start:!0});var ss=i(se);ae=r(ss,"LI",{});var Ut=i(ae);$o=s(Ut,"Pass your input text to the "),We=r(Ut,"CODE",{});var as=i(We);Oo=s(as,"optimum_pipeline"),as.forEach(o),zo=s(Ut,":"),Ut.forEach(o),ss.forEach(o),jt=u(e),$(re.$$.fragment,e),bt=u(e),S=r(e,"H3",{class:!0});var Bt=i(S);Y=r(Bt,"A",{id:!0,class:!0,href:!0});var rs=i(Y);Ue=r(rs,"SPAN",{});var is=i(Ue);$(ie.$$.fragment,is),is.forEach(o),rs.forEach(o),jo=u(Bt),Be=r(Bt,"SPAN",{});var ls=i(Be);bo=s(ls,"Use a vanilla transformers model and convert"),ls.forEach(o),Bt.forEach(o),At=u(e),h=r(e,"P",{});var P=i(h);Ao=s(P,"The "),Re=r(P,"CODE",{});var ps=i(Re);To=s(ps,"optimum_pipeline"),ps.forEach(o),Po=s(P," accepts supported model from the "),le=r(P,"A",{href:!0,rel:!0});var ms=i(le);Fo=s(ms,"Model Hub"),ms.forEach(o),Co=s(P,`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),Ye=r(P,"CODE",{});var us=i(Ye);Do=s(us,".from_transformers"),us.forEach(o),No=s(P," method for corresponding "),Ge=r(P,"CODE",{});var ds=i(Ge);Qo=s(ds,"OnnxFor*"),ds.forEach(o),Mo=s(P,"\nand [`AutoTokenizer\u2019] class. For example, load the "),Je=r(P,"CODE",{});var cs=i(Je);Io=s(cs,"OnnxForQuestionAnswering"),cs.forEach(o),So=s(P," class for a question answering modeling task:"),P.forEach(o),Tt=u(e),$(pe.$$.fragment,e),Pt=u(e),H=r(e,"H3",{class:!0});var Rt=i(H);G=r(Rt,"A",{id:!0,class:!0,href:!0});var fs=i(G);Ke=r(fs,"SPAN",{});var hs=i(Ke);$(me.$$.fragment,hs),hs.forEach(o),fs.forEach(o),Ho=u(Rt),Ve=r(Rt,"SPAN",{});var gs=i(Ve);Lo=s(gs,"Use optimum model"),gs.forEach(o),Rt.forEach(o),Ft=u(e),g=r(e,"P",{});var F=i(g);Wo=s(F,"The "),Xe=r(F,"CODE",{});var _s=i(Xe);Uo=s(_s,"optimum_pipeline"),_s.forEach(o),Bo=s(F," is tightly integrated with "),ue=r(F,"A",{href:!0,rel:!0});var vs=i(ue);Ro=s(vs,"Model Hub"),vs.forEach(o),Yo=s(F,` and can load optimized models directly, e.g. Onnxruntime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),Ze=r(F,"CODE",{});var ks=i(Ze);Go=s(ks,".from_pretrained"),ks.forEach(o),Jo=s(F," method for corresponding "),et=r(F,"CODE",{});var ws=i(et);Ko=s(ws,"OnnxFor*"),ws.forEach(o),Vo=s(F,"\nand [`AutoTokenizer\u2019] class. For example, load the "),tt=r(F,"CODE",{});var qs=i(tt);Xo=s(qs,"OnnxForQuestionAnswering"),qs.forEach(o),Zo=s(F," class for a question answering modeling task:"),F.forEach(o),Ct=u(e),$(de.$$.fragment,e),Dt=u(e),L=r(e,"H3",{class:!0});var Yt=i(L);J=r(Yt,"A",{id:!0,class:!0,href:!0});var xs=i(J);ot=r(xs,"SPAN",{});var ys=i(ot);$(ce.$$.fragment,ys),ys.forEach(o),xs.forEach(o),en=u(Yt),nt=r(Yt,"SPAN",{});var Es=i(nt);tn=s(Es,"Optimizing and Quantizing in Pipelines"),Es.forEach(o),Yt.forEach(o),Nt=u(e),f=r(e,"P",{});var v=i(f);on=s(v,"The "),st=r(v,"CODE",{});var $s=i(st);nn=s($s,"optimum_pipeline"),$s.forEach(o),sn=s(v,` can not only run inference it also provides arguments to quantize and optimize your model on the fly.
Once you\u2019ve picked an appropriate model, load it with the `),at=r(v,"CODE",{});var Os=i(at);an=s(Os,".from_transformers"),Os.forEach(o),rn=s(v," or "),rt=r(v,"CODE",{});var zs=i(rt);ln=s(zs,".from_pretrained"),zs.forEach(o),pn=s(v," method for corresponding "),it=r(v,"CODE",{});var js=i(it);mn=s(js,"OnnxFor*"),js.forEach(o),un=s(v,"\nand [`AutoTokenizer\u2019] class. For example, load the "),lt=r(v,"CODE",{});var bs=i(lt);dn=s(bs,"OnnxForQuestionAnswering"),bs.forEach(o),cn=s(v,` class for a question answering modeling task and provide
the `),pt=r(v,"CODE",{});var As=i(pt);fn=s(As,"do_optimization=True"),As.forEach(o),hn=s(v," and/or "),mt=r(v,"CODE",{});var Ts=i(mt);gn=s(Ts,"do_quantization=True"),Ts.forEach(o),_n=s(v," arguments:"),v.forEach(o),Qt=u(e),$(fe.$$.fragment,e),Mt=u(e),W=r(e,"H2",{class:!0});var Gt=i(W);K=r(Gt,"A",{id:!0,class:!0,href:!0});var Ps=i(K);ut=r(Ps,"SPAN",{});var Fs=i(ut);$(he.$$.fragment,Fs),Fs.forEach(o),Ps.forEach(o),vn=u(Gt),dt=r(Gt,"SPAN",{});var Cs=i(dt);kn=s(Cs,"Transformers pipeline usage"),Cs.forEach(o),Gt.forEach(o),It=u(e),_=r(e,"P",{});var C=i(_);wn=s(C,"The "),ct=r(C,"CODE",{});var Ds=i(ct);qn=s(Ds,"optimum_pipeline"),Ds.forEach(o),xn=s(C," is just a light wrapper around the "),ft=r(C,"CODE",{});var Ns=i(ft);yn=s(Ns,"transformers.pipeline"),Ns.forEach(o),En=s(C,` to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),ht=r(C,"CODE",{});var Qs=i(ht);$n=s(Qs,"transformers.pipeline"),Qs.forEach(o),On=s(C," and just replace your "),gt=r(C,"CODE",{});var Ms=i(gt);zn=s(Ms,"AutoFor*"),Ms.forEach(o),jn=s(C,` with the optimum
`),_t=r(C,"CODE",{});var Is=i(_t);bn=s(Is,"OnnxFor*"),Is.forEach(o),An=s(C," class."),C.forEach(o),St=u(e),$(ge.$$.fragment,e),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(Gs)),d(A,"id","optimum-pipelines-for-inference"),d(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(A,"href","#optimum-pipelines-for-inference"),d(k,"class","relative group"),d(ee,"href","https://huggingface.co/models"),d(ee,"rel","nofollow"),d(R,"id","optimum-pipeline-usage"),d(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(R,"href","#optimum-pipeline-usage"),d(I,"class","relative group"),d(se,"start","2"),d(Y,"id","use-a-vanilla-transformers-model-and-convert"),d(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Y,"href","#use-a-vanilla-transformers-model-and-convert"),d(S,"class","relative group"),d(le,"href","https://huggingface.co/models"),d(le,"rel","nofollow"),d(G,"id","use-optimum-model"),d(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(G,"href","#use-optimum-model"),d(H,"class","relative group"),d(ue,"href","https://huggingface.co/models"),d(ue,"rel","nofollow"),d(J,"id","optimizing-and-quantizing-in-pipelines"),d(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(J,"href","#optimizing-and-quantizing-in-pipelines"),d(L,"class","relative group"),d(K,"id","transformers-pipeline-usage"),d(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(K,"href","#transformers-pipeline-usage"),d(W,"class","relative group")},m(e,l){t(document.head,c),p(e,U,l),p(e,k,l),t(k,A),t(A,N),O(x,N,null),t(k,Z),t(k,Q),t(Q,M),p(e,y,l),p(e,w,l),t(w,ve),t(w,Ee),t(Ee,Jt),t(w,Kt),t(w,ee),t(ee,Vt),t(w,Xt),t(w,$e),t($e,Zt),t(w,eo),p(e,kt,l),O(B,e,l),p(e,wt,l),p(e,ke,l),t(ke,to),p(e,qt,l),p(e,we,l),t(we,Oe),t(Oe,oo),p(e,xt,l),p(e,q,l),t(q,ze),t(ze,je),t(je,no),t(q,so),t(q,be),t(be,Ae),t(Ae,ao),t(q,ro),t(q,Te),t(Te,Pe),t(Pe,io),t(q,lo),t(q,Fe),t(Fe,Ce),t(Ce,po),t(q,mo),t(q,De),t(De,Ne),t(Ne,uo),p(e,yt,l),p(e,I,l),t(I,R),t(R,Qe),O(te,Qe,null),t(I,co),t(I,Me),t(Me,fo),p(e,Et,l),p(e,T,l),t(T,ho),t(T,Ie),t(Ie,go),t(T,_o),t(T,Se),t(Se,vo),t(T,ko),t(T,He),t(He,wo),t(T,qo),p(e,$t,l),p(e,qe,l),t(qe,oe),t(oe,xo),t(oe,Le),t(Le,yo),t(oe,Eo),p(e,Ot,l),O(ne,e,l),p(e,zt,l),p(e,se,l),t(se,ae),t(ae,$o),t(ae,We),t(We,Oo),t(ae,zo),p(e,jt,l),O(re,e,l),p(e,bt,l),p(e,S,l),t(S,Y),t(Y,Ue),O(ie,Ue,null),t(S,jo),t(S,Be),t(Be,bo),p(e,At,l),p(e,h,l),t(h,Ao),t(h,Re),t(Re,To),t(h,Po),t(h,le),t(le,Fo),t(h,Co),t(h,Ye),t(Ye,Do),t(h,No),t(h,Ge),t(Ge,Qo),t(h,Mo),t(h,Je),t(Je,Io),t(h,So),p(e,Tt,l),O(pe,e,l),p(e,Pt,l),p(e,H,l),t(H,G),t(G,Ke),O(me,Ke,null),t(H,Ho),t(H,Ve),t(Ve,Lo),p(e,Ft,l),p(e,g,l),t(g,Wo),t(g,Xe),t(Xe,Uo),t(g,Bo),t(g,ue),t(ue,Ro),t(g,Yo),t(g,Ze),t(Ze,Go),t(g,Jo),t(g,et),t(et,Ko),t(g,Vo),t(g,tt),t(tt,Xo),t(g,Zo),p(e,Ct,l),O(de,e,l),p(e,Dt,l),p(e,L,l),t(L,J),t(J,ot),O(ce,ot,null),t(L,en),t(L,nt),t(nt,tn),p(e,Nt,l),p(e,f,l),t(f,on),t(f,st),t(st,nn),t(f,sn),t(f,at),t(at,an),t(f,rn),t(f,rt),t(rt,ln),t(f,pn),t(f,it),t(it,mn),t(f,un),t(f,lt),t(lt,dn),t(f,cn),t(f,pt),t(pt,fn),t(f,hn),t(f,mt),t(mt,gn),t(f,_n),p(e,Qt,l),O(fe,e,l),p(e,Mt,l),p(e,W,l),t(W,K),t(K,ut),O(he,ut,null),t(W,vn),t(W,dt),t(dt,kn),p(e,It,l),p(e,_,l),t(_,wn),t(_,ct),t(ct,qn),t(_,xn),t(_,ft),t(ft,yn),t(_,En),t(_,ht),t(ht,$n),t(_,On),t(_,gt),t(gt,zn),t(_,jn),t(_,_t),t(_t,bn),t(_,An),p(e,St,l),O(ge,e,l),Ht=!0},p(e,[l]){const _e={};l&2&&(_e.$$scope={dirty:l,ctx:e}),B.$set(_e)},i(e){Ht||(z(x.$$.fragment,e),z(B.$$.fragment,e),z(te.$$.fragment,e),z(ne.$$.fragment,e),z(re.$$.fragment,e),z(ie.$$.fragment,e),z(pe.$$.fragment,e),z(me.$$.fragment,e),z(de.$$.fragment,e),z(ce.$$.fragment,e),z(fe.$$.fragment,e),z(he.$$.fragment,e),z(ge.$$.fragment,e),Ht=!0)},o(e){j(x.$$.fragment,e),j(B.$$.fragment,e),j(te.$$.fragment,e),j(ne.$$.fragment,e),j(re.$$.fragment,e),j(ie.$$.fragment,e),j(pe.$$.fragment,e),j(me.$$.fragment,e),j(de.$$.fragment,e),j(ce.$$.fragment,e),j(fe.$$.fragment,e),j(he.$$.fragment,e),j(ge.$$.fragment,e),Ht=!1},d(e){o(c),e&&o(U),e&&o(k),b(x),e&&o(y),e&&o(w),e&&o(kt),b(B,e),e&&o(wt),e&&o(ke),e&&o(qt),e&&o(we),e&&o(xt),e&&o(q),e&&o(yt),e&&o(I),b(te),e&&o(Et),e&&o(T),e&&o($t),e&&o(qe),e&&o(Ot),b(ne,e),e&&o(zt),e&&o(se),e&&o(jt),b(re,e),e&&o(bt),e&&o(S),b(ie),e&&o(At),e&&o(h),e&&o(Tt),b(pe,e),e&&o(Pt),e&&o(H),b(me),e&&o(Ft),e&&o(g),e&&o(Ct),b(de,e),e&&o(Dt),e&&o(L),b(ce),e&&o(Nt),e&&o(f),e&&o(Qt),b(fe,e),e&&o(Mt),e&&o(W),b(he),e&&o(It),e&&o(_),e&&o(St),b(ge,e)}}}const Gs={local:"optimum-pipelines-for-inference",sections:[{local:"optimum-pipeline-usage",sections:[{local:"use-a-vanilla-transformers-model-and-convert",title:"Use a vanilla transformers model and convert"},{local:"use-optimum-model",title:"Use optimum model"},{local:"optimizing-and-quantizing-in-pipelines",title:"Optimizing and Quantizing in Pipelines"}],title:"Optimum Pipeline usage"},{local:"transformers-pipeline-usage",title:"Transformers pipeline usage"}],title:"Optimum Pipelines for inference"};function Js(vt){return Us(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ea extends Ss{constructor(c){super();Hs(this,c,Js,Ys,Ls,{})}}export{ea as default,Gs as metadata};
