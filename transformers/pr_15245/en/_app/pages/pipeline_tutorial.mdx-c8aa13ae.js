import{S as $n,i as xn,s as yn,e as r,k as h,w as d,t as a,M as wn,c as l,d as t,m as c,a as i,x as g,h as n,b as f,N as jn,F as s,g as p,y as v,q as _,o as k,B as $}from"../chunks/vendor-4833417e.js";import{T as En}from"../chunks/Tip-fffd6df1.js";import{I as os}from"../chunks/IconCopyLink-4b81c553.js";import{C as F}from"../chunks/CodeBlock-6a3d1b46.js";import"../chunks/CopyButton-dacfbfaf.js";function bn(Be){let m,P,u,x,z;return{c(){m=r("p"),P=a("Take a look at the "),u=r("a"),x=a("pipeline()"),z=a(" documentation for a complete list of supported taska."),this.h()},l(j){m=l(j,"P",{});var T=i(m);P=n(T,"Take a look at the "),u=l(T,"A",{href:!0});var H=i(u);x=n(H,"pipeline()"),H.forEach(t),z=n(T," documentation for a complete list of supported taska."),T.forEach(t),this.h()},h(){f(u,"href","/docs/transformers/pr_15245/en/main_classes/pipelines#transformers.pipeline")},m(j,T){p(j,m,T),s(m,P),s(m,u),s(u,x),s(m,z)},d(j){j&&t(m)}}}function An(Be){let m,P,u,x,z,j,T,H,Zs,is,E,et,we,st,tt,Z,at,nt,je,rt,lt,ps,q,ee,ot,Ee,it,pt,ft,Ge,ht,ct,se,mt,be,ut,dt,fs,I,hs,C,O,Qe,te,gt,Xe,vt,cs,b,_t,Ae,kt,$t,Pe,xt,yt,Te,wt,jt,ms,qe,ae,Et,Me,bt,At,us,ne,ds,re,le,Pt,Se,Tt,qt,gs,oe,vs,Fe,Mt,_s,ie,ks,y,St,ze,Ft,zt,Ye,Ct,Lt,Ce,Dt,Nt,Ze,Ht,It,$s,pe,xs,L,R,es,fe,Ot,ss,Rt,ys,w,Ut,Le,Wt,Jt,he,Kt,Vt,ts,Bt,Gt,De,Qt,Xt,ws,ce,js,U,Yt,Ne,Zt,ea,Es,me,bs,W,sa,He,ta,aa,As,ue,Ps,D,J,as,de,na,ns,ra,Ts,K,la,Ie,oa,ia,qs,A,pa,ge,fa,ha,ve,ca,ma,Oe,ua,da,Ms,_e,Ss,V,ga,Re,va,_a,Fs,ke,zs,N,B,rs,$e,ka,ls,$a,Cs,G,xa,Ue,ya,wa,Ls,We,ja,Ds,Je,Ke,Ea,Ns,xe,Hs;return j=new os({}),I=new En({props:{$$slots:{default:[bn]},$$scope:{ctx:Be}}}),te=new os({}),ne=new F({props:{code:`from transformers import pipeline

generator = pipeline(task="text-generation")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>generator = pipeline(task=<span class="hljs-string">&quot;text-generation&quot;</span>)`}}),oe=new F({props:{code:'generator("Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(<span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>)
[{<span class="hljs-string">&#x27;generated_text&#x27;</span>: <span class="hljs-string">&#x27;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Seven for the Iron-priests at the door to the east, and thirteen for the Lord Kings at the end of the mountain&#x27;</span>}]`}}),ie=new F({props:{code:`generator(
    [
        "Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone",
        "Nine for Mortal Men, doomed to die, One for the Dark Lord on his dark throne",
    ]
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>,
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;Nine for Mortal Men, doomed to die, One for the Dark Lord on his dark throne&quot;</span>,
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)`}}),pe=new F({props:{code:`generator(
    "Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone",
    num_return_sequences=2,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>,
<span class="hljs-meta">... </span>    num_return_sequences=<span class="hljs-number">2</span>,
<span class="hljs-meta">... </span>)`}}),fe=new os({}),ce=new F({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("distilgpt2")
model = AutoModelForCausalLM.from_pretrained("distilgpt2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)`}}),me=new F({props:{code:`from transformers import pipeline

generator = pipeline(task="text-generation", model=model, tokenizer=tokenizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>generator = pipeline(task=<span class="hljs-string">&quot;text-generation&quot;</span>, model=model, tokenizer=tokenizer)`}}),ue=new F({props:{code:'generator("Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(<span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>)
[{<span class="hljs-string">&#x27;generated_text&#x27;</span>: <span class="hljs-string">&#x27;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Seven for the Dragon-lords (for them to rule in a world ruled by their rulers, and all who live within the realm&#x27;</span>}]`}}),de=new os({}),_e=new F({props:{code:`from transformers import pipeline

audio_classifier = pipeline(
    task="audio-classification", model="ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>audio_classifier = pipeline(
<span class="hljs-meta">... </span>    task=<span class="hljs-string">&quot;audio-classification&quot;</span>, model=<span class="hljs-string">&quot;ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition&quot;</span>
<span class="hljs-meta">... </span>)`}}),ke=new F({props:{code:'audio_classifier("jfk_moon_speech.wav")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>audio_classifier(<span class="hljs-string">&quot;jfk_moon_speech.wav&quot;</span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;calm&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.13856211304664612</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;disgust&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.13148026168346405</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;happy&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.12635163962841034</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;angry&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.12439591437578201</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;fearful&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.12404385954141617</span>}]`}}),$e=new os({}),xe=new F({props:{code:`from transformers import pipeline

vision_classifier = pipeline(task="image-classification")
vision_classifier(
    images="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/pipeline-cat-chonk.jpeg"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>vision_classifier = pipeline(task=<span class="hljs-string">&quot;image-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>vision_classifier(
<span class="hljs-meta">... </span>    images=<span class="hljs-string">&quot;https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/pipeline-cat-chonk.jpeg&quot;</span>
<span class="hljs-meta">... </span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;lynx, catamount&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.4403027892112732</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;cougar, puma, catamount, mountain lion, painter, panther, Felis concolor&#x27;</span>,
  <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.03433405980467796</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;snow leopard, ounce, Panthera uncia&#x27;</span>,
  <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.032148055732250214</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;Egyptian cat&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.02353910356760025</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;tiger cat&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.023034192621707916</span>}]`}}),{c(){m=r("meta"),P=h(),u=r("h1"),x=r("a"),z=r("span"),d(j.$$.fragment),T=h(),H=r("span"),Zs=a("Pipelines for inference"),is=h(),E=r("p"),et=a("The "),we=r("a"),st=a("pipeline()"),tt=a(" makes it simple to use any model from the "),Z=r("a"),at=a("Model Hub"),nt=a(" for inference on a variety of tasks such as text generation, image segmentation and audio classification. Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the "),je=r("a"),rt=a("pipeline()"),lt=a("! This tutorial will teach you to:"),ps=h(),q=r("ul"),ee=r("li"),ot=a("Use a "),Ee=r("a"),it=a("pipeline()"),pt=a(" for inference."),ft=h(),Ge=r("li"),ht=a("Use a specific tokenizer or model."),ct=h(),se=r("li"),mt=a("Use a "),be=r("a"),ut=a("pipeline()"),dt=a(" for audio and vision tasks."),fs=h(),d(I.$$.fragment),hs=h(),C=r("h2"),O=r("a"),Qe=r("span"),d(te.$$.fragment),gt=h(),Xe=r("span"),vt=a("Pipeline usage"),cs=h(),b=r("p"),_t=a("While each task has an associated "),Ae=r("a"),kt=a("pipeline()"),$t=a(", it is simpler to use the general "),Pe=r("a"),xt=a("pipeline()"),yt=a(" abstraction which contains all the specific task pipelines. The "),Te=r("a"),wt=a("pipeline()"),jt=a(" automatically loads a default model and tokenizer capable of inference for your task."),ms=h(),qe=r("ol"),ae=r("li"),Et=a("Start by creating a "),Me=r("a"),bt=a("pipeline()"),At=a(" and specify an inference task:"),us=h(),d(ne.$$.fragment),ds=h(),re=r("ol"),le=r("li"),Pt=a("Pass your input text to the "),Se=r("a"),Tt=a("pipeline()"),qt=a(":"),gs=h(),d(oe.$$.fragment),vs=h(),Fe=r("p"),Mt=a("If you have more than one input, pass your input as a list:"),_s=h(),d(ie.$$.fragment),ks=h(),y=r("p"),St=a("Any additional parameters for your task can also be included in the "),ze=r("a"),Ft=a("pipeline()"),zt=a(". The "),Ye=r("code"),Ct=a("text-generation"),Lt=a(" task has a "),Ce=r("a"),Dt=a("generate()"),Nt=a(" method with several parameters for controlling the output. For example, if you want to generate more than one output, set the "),Ze=r("code"),Ht=a("num_return_sequences"),It=a(" parameter:"),$s=h(),d(pe.$$.fragment),xs=h(),L=r("h3"),R=r("a"),es=r("span"),d(fe.$$.fragment),Ot=h(),ss=r("span"),Rt=a("Choose a model and tokenizer"),ys=h(),w=r("p"),Ut=a("The "),Le=r("a"),Wt=a("pipeline()"),Jt=a(" accepts any model from the "),he=r("a"),Kt=a("Model Hub"),Vt=a(". There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task. Once you\u2019ve picked an appropriate model, load it with the corresponding "),ts=r("code"),Bt=a("AutoModelFor"),Gt=a(" and [`AutoTokenizer\u2019] class. For example, load the "),De=r("a"),Qt=a("AutoModelForCausalLM"),Xt=a(" class for a causal language modeling task:"),ws=h(),d(ce.$$.fragment),js=h(),U=r("p"),Yt=a("Create a "),Ne=r("a"),Zt=a("pipeline()"),ea=a(" for your task, and specify the model and tokenizer you\u2019ve loaded:"),Es=h(),d(me.$$.fragment),bs=h(),W=r("p"),sa=a("Pass your input text to the "),He=r("a"),ta=a("pipeline()"),aa=a(" to generate some text:"),As=h(),d(ue.$$.fragment),Ps=h(),D=r("h2"),J=r("a"),as=r("span"),d(de.$$.fragment),na=h(),ns=r("span"),ra=a("Audio pipeline"),Ts=h(),K=r("p"),la=a("The flexibility of the "),Ie=r("a"),oa=a("pipeline()"),ia=a(" means it can also be extended to audio tasks."),qs=h(),A=r("p"),pa=a("For example, let\u2019s classify the emotion from a short clip of John F. Kennedy\u2019s famous "),ge=r("a"),fa=a("\u201CWe choose to go to the Moon\u201D"),ha=a(" speech. Find an "),ve=r("a"),ca=a("audio classification"),ma=a(" model on the Model Hub for emotion recognition and load it in the "),Oe=r("a"),ua=a("pipeline()"),da=a(":"),Ms=h(),d(_e.$$.fragment),Ss=h(),V=r("p"),ga=a("Pass the audio file to the "),Re=r("a"),va=a("pipeline()"),_a=a(":"),Fs=h(),d(ke.$$.fragment),zs=h(),N=r("h2"),B=r("a"),rs=r("span"),d($e.$$.fragment),ka=h(),ls=r("span"),$a=a("Vision pipeline"),Cs=h(),G=r("p"),xa=a("Finally, using a "),Ue=r("a"),ya=a("pipeline()"),wa=a(" for vision tasks is practically identical."),Ls=h(),We=r("p"),ja=a("Specify your vision task and pass your image to the classifier. The imaage can be a link or a local path to the image. For example, what species of cat is shown below?"),Ds=h(),Je=r("p"),Ke=r("img"),Ns=h(),d(xe.$$.fragment),this.h()},l(e){const o=wn('[data-svelte="svelte-1phssyn"]',document.head);m=l(o,"META",{name:!0,content:!0}),o.forEach(t),P=c(e),u=l(e,"H1",{class:!0});var ye=i(u);x=l(ye,"A",{id:!0,class:!0,href:!0});var ba=i(x);z=l(ba,"SPAN",{});var Aa=i(z);g(j.$$.fragment,Aa),Aa.forEach(t),ba.forEach(t),T=c(ye),H=l(ye,"SPAN",{});var Pa=i(H);Zs=n(Pa,"Pipelines for inference"),Pa.forEach(t),ye.forEach(t),is=c(e),E=l(e,"P",{});var Q=i(E);et=n(Q,"The "),we=l(Q,"A",{href:!0});var Ta=i(we);st=n(Ta,"pipeline()"),Ta.forEach(t),tt=n(Q," makes it simple to use any model from the "),Z=l(Q,"A",{href:!0,rel:!0});var qa=i(Z);at=n(qa,"Model Hub"),qa.forEach(t),nt=n(Q," for inference on a variety of tasks such as text generation, image segmentation and audio classification. Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the "),je=l(Q,"A",{href:!0});var Ma=i(je);rt=n(Ma,"pipeline()"),Ma.forEach(t),lt=n(Q,"! This tutorial will teach you to:"),Q.forEach(t),ps=c(e),q=l(e,"UL",{});var Ve=i(q);ee=l(Ve,"LI",{});var Is=i(ee);ot=n(Is,"Use a "),Ee=l(Is,"A",{href:!0});var Sa=i(Ee);it=n(Sa,"pipeline()"),Sa.forEach(t),pt=n(Is," for inference."),Is.forEach(t),ft=c(Ve),Ge=l(Ve,"LI",{});var Fa=i(Ge);ht=n(Fa,"Use a specific tokenizer or model."),Fa.forEach(t),ct=c(Ve),se=l(Ve,"LI",{});var Os=i(se);mt=n(Os,"Use a "),be=l(Os,"A",{href:!0});var za=i(be);ut=n(za,"pipeline()"),za.forEach(t),dt=n(Os," for audio and vision tasks."),Os.forEach(t),Ve.forEach(t),fs=c(e),g(I.$$.fragment,e),hs=c(e),C=l(e,"H2",{class:!0});var Rs=i(C);O=l(Rs,"A",{id:!0,class:!0,href:!0});var Ca=i(O);Qe=l(Ca,"SPAN",{});var La=i(Qe);g(te.$$.fragment,La),La.forEach(t),Ca.forEach(t),gt=c(Rs),Xe=l(Rs,"SPAN",{});var Da=i(Xe);vt=n(Da,"Pipeline usage"),Da.forEach(t),Rs.forEach(t),cs=c(e),b=l(e,"P",{});var X=i(b);_t=n(X,"While each task has an associated "),Ae=l(X,"A",{href:!0});var Na=i(Ae);kt=n(Na,"pipeline()"),Na.forEach(t),$t=n(X,", it is simpler to use the general "),Pe=l(X,"A",{href:!0});var Ha=i(Pe);xt=n(Ha,"pipeline()"),Ha.forEach(t),yt=n(X," abstraction which contains all the specific task pipelines. The "),Te=l(X,"A",{href:!0});var Ia=i(Te);wt=n(Ia,"pipeline()"),Ia.forEach(t),jt=n(X," automatically loads a default model and tokenizer capable of inference for your task."),X.forEach(t),ms=c(e),qe=l(e,"OL",{});var Oa=i(qe);ae=l(Oa,"LI",{});var Us=i(ae);Et=n(Us,"Start by creating a "),Me=l(Us,"A",{href:!0});var Ra=i(Me);bt=n(Ra,"pipeline()"),Ra.forEach(t),At=n(Us," and specify an inference task:"),Us.forEach(t),Oa.forEach(t),us=c(e),g(ne.$$.fragment,e),ds=c(e),re=l(e,"OL",{start:!0});var Ua=i(re);le=l(Ua,"LI",{});var Ws=i(le);Pt=n(Ws,"Pass your input text to the "),Se=l(Ws,"A",{href:!0});var Wa=i(Se);Tt=n(Wa,"pipeline()"),Wa.forEach(t),qt=n(Ws,":"),Ws.forEach(t),Ua.forEach(t),gs=c(e),g(oe.$$.fragment,e),vs=c(e),Fe=l(e,"P",{});var Ja=i(Fe);Mt=n(Ja,"If you have more than one input, pass your input as a list:"),Ja.forEach(t),_s=c(e),g(ie.$$.fragment,e),ks=c(e),y=l(e,"P",{});var M=i(y);St=n(M,"Any additional parameters for your task can also be included in the "),ze=l(M,"A",{href:!0});var Ka=i(ze);Ft=n(Ka,"pipeline()"),Ka.forEach(t),zt=n(M,". The "),Ye=l(M,"CODE",{});var Va=i(Ye);Ct=n(Va,"text-generation"),Va.forEach(t),Lt=n(M," task has a "),Ce=l(M,"A",{href:!0});var Ba=i(Ce);Dt=n(Ba,"generate()"),Ba.forEach(t),Nt=n(M," method with several parameters for controlling the output. For example, if you want to generate more than one output, set the "),Ze=l(M,"CODE",{});var Ga=i(Ze);Ht=n(Ga,"num_return_sequences"),Ga.forEach(t),It=n(M," parameter:"),M.forEach(t),$s=c(e),g(pe.$$.fragment,e),xs=c(e),L=l(e,"H3",{class:!0});var Js=i(L);R=l(Js,"A",{id:!0,class:!0,href:!0});var Qa=i(R);es=l(Qa,"SPAN",{});var Xa=i(es);g(fe.$$.fragment,Xa),Xa.forEach(t),Qa.forEach(t),Ot=c(Js),ss=l(Js,"SPAN",{});var Ya=i(ss);Rt=n(Ya,"Choose a model and tokenizer"),Ya.forEach(t),Js.forEach(t),ys=c(e),w=l(e,"P",{});var S=i(w);Ut=n(S,"The "),Le=l(S,"A",{href:!0});var Za=i(Le);Wt=n(Za,"pipeline()"),Za.forEach(t),Jt=n(S," accepts any model from the "),he=l(S,"A",{href:!0,rel:!0});var en=i(he);Kt=n(en,"Model Hub"),en.forEach(t),Vt=n(S,". There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task. Once you\u2019ve picked an appropriate model, load it with the corresponding "),ts=l(S,"CODE",{});var sn=i(ts);Bt=n(sn,"AutoModelFor"),sn.forEach(t),Gt=n(S," and [`AutoTokenizer\u2019] class. For example, load the "),De=l(S,"A",{href:!0});var tn=i(De);Qt=n(tn,"AutoModelForCausalLM"),tn.forEach(t),Xt=n(S," class for a causal language modeling task:"),S.forEach(t),ws=c(e),g(ce.$$.fragment,e),js=c(e),U=l(e,"P",{});var Ks=i(U);Yt=n(Ks,"Create a "),Ne=l(Ks,"A",{href:!0});var an=i(Ne);Zt=n(an,"pipeline()"),an.forEach(t),ea=n(Ks," for your task, and specify the model and tokenizer you\u2019ve loaded:"),Ks.forEach(t),Es=c(e),g(me.$$.fragment,e),bs=c(e),W=l(e,"P",{});var Vs=i(W);sa=n(Vs,"Pass your input text to the "),He=l(Vs,"A",{href:!0});var nn=i(He);ta=n(nn,"pipeline()"),nn.forEach(t),aa=n(Vs," to generate some text:"),Vs.forEach(t),As=c(e),g(ue.$$.fragment,e),Ps=c(e),D=l(e,"H2",{class:!0});var Bs=i(D);J=l(Bs,"A",{id:!0,class:!0,href:!0});var rn=i(J);as=l(rn,"SPAN",{});var ln=i(as);g(de.$$.fragment,ln),ln.forEach(t),rn.forEach(t),na=c(Bs),ns=l(Bs,"SPAN",{});var on=i(ns);ra=n(on,"Audio pipeline"),on.forEach(t),Bs.forEach(t),Ts=c(e),K=l(e,"P",{});var Gs=i(K);la=n(Gs,"The flexibility of the "),Ie=l(Gs,"A",{href:!0});var pn=i(Ie);oa=n(pn,"pipeline()"),pn.forEach(t),ia=n(Gs," means it can also be extended to audio tasks."),Gs.forEach(t),qs=c(e),A=l(e,"P",{});var Y=i(A);pa=n(Y,"For example, let\u2019s classify the emotion from a short clip of John F. Kennedy\u2019s famous "),ge=l(Y,"A",{href:!0,rel:!0});var fn=i(ge);fa=n(fn,"\u201CWe choose to go to the Moon\u201D"),fn.forEach(t),ha=n(Y," speech. Find an "),ve=l(Y,"A",{href:!0,rel:!0});var hn=i(ve);ca=n(hn,"audio classification"),hn.forEach(t),ma=n(Y," model on the Model Hub for emotion recognition and load it in the "),Oe=l(Y,"A",{href:!0});var cn=i(Oe);ua=n(cn,"pipeline()"),cn.forEach(t),da=n(Y,":"),Y.forEach(t),Ms=c(e),g(_e.$$.fragment,e),Ss=c(e),V=l(e,"P",{});var Qs=i(V);ga=n(Qs,"Pass the audio file to the "),Re=l(Qs,"A",{href:!0});var mn=i(Re);va=n(mn,"pipeline()"),mn.forEach(t),_a=n(Qs,":"),Qs.forEach(t),Fs=c(e),g(ke.$$.fragment,e),zs=c(e),N=l(e,"H2",{class:!0});var Xs=i(N);B=l(Xs,"A",{id:!0,class:!0,href:!0});var un=i(B);rs=l(un,"SPAN",{});var dn=i(rs);g($e.$$.fragment,dn),dn.forEach(t),un.forEach(t),ka=c(Xs),ls=l(Xs,"SPAN",{});var gn=i(ls);$a=n(gn,"Vision pipeline"),gn.forEach(t),Xs.forEach(t),Cs=c(e),G=l(e,"P",{});var Ys=i(G);xa=n(Ys,"Finally, using a "),Ue=l(Ys,"A",{href:!0});var vn=i(Ue);ya=n(vn,"pipeline()"),vn.forEach(t),wa=n(Ys," for vision tasks is practically identical."),Ys.forEach(t),Ls=c(e),We=l(e,"P",{});var _n=i(We);ja=n(_n,"Specify your vision task and pass your image to the classifier. The imaage can be a link or a local path to the image. For example, what species of cat is shown below?"),_n.forEach(t),Ds=c(e),Je=l(e,"P",{});var kn=i(Je);Ke=l(kn,"IMG",{src:!0,alt:!0}),kn.forEach(t),Ns=c(e),g(xe.$$.fragment,e),this.h()},h(){f(m,"name","hf:doc:metadata"),f(m,"content",JSON.stringify(Pn)),f(x,"id","pipelines-for-inference"),f(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(x,"href","#pipelines-for-inference"),f(u,"class","relative group"),f(we,"href","/docs/transformers/pr_15245/en/main_classes/pipelines#transformers.pipeline"),f(Z,"href","https://huggingface.co/models"),f(Z,"rel","nofollow"),f(je,"href","/docs/transformers/pr_15245/en/main_classes/pipelines#transformers.pipeline"),f(Ee,"href","/docs/transformers/pr_15245/en/main_classes/pipelines#transformers.pipeline"),f(be,"href","/docs/transformers/pr_15245/en/main_classes/pipelines#transformers.pipeline"),f(O,"id","pipeline-usage"),f(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(O,"href","#pipeline-usage"),f(C,"class","relative group"),f(Ae,"href","/docs/transformers/pr_15245/en/main_classes/pipelines#transformers.pipeline"),f(Pe,"href","/docs/transformers/pr_15245/en/main_classes/pipelines#transformers.pipeline"),f(Te,"href","/docs/transformers/pr_15245/en/main_classes/pipelines#transformers.pipeline"),f(Me,"href","/docs/transformers/pr_15245/en/main_classes/pipelines#transformers.pipeline"),f(Se,"href","/docs/transformers/pr_15245/en/main_classes/pipelines#transformers.pipeline"),f(re,"start","2"),f(ze,"href","/docs/transformers/pr_15245/en/main_classes/pipelines#transformers.pipeline"),f(Ce,"href","/docs/transformers/pr_15245/en/main_classes/model#transformers.generation_utils.GenerationMixin.generate"),f(R,"id","choose-a-model-and-tokenizer"),f(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(R,"href","#choose-a-model-and-tokenizer"),f(L,"class","relative group"),f(Le,"href","/docs/transformers/pr_15245/en/main_classes/pipelines#transformers.pipeline"),f(he,"href","https://huggingface.co/models"),f(he,"rel","nofollow"),f(De,"href","/docs/transformers/pr_15245/en/model_doc/auto#transformers.AutoModelForCausalLM"),f(Ne,"href","/docs/transformers/pr_15245/en/main_classes/pipelines#transformers.pipeline"),f(He,"href","/docs/transformers/pr_15245/en/main_classes/pipelines#transformers.pipeline"),f(J,"id","audio-pipeline"),f(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(J,"href","#audio-pipeline"),f(D,"class","relative group"),f(Ie,"href","/docs/transformers/pr_15245/en/main_classes/pipelines#transformers.pipeline"),f(ge,"href","https://en.wikipedia.org/wiki/We_choose_to_go_to_the_Moon"),f(ge,"rel","nofollow"),f(ve,"href","https://huggingface.co/models?pipeline_tag=audio-classification"),f(ve,"rel","nofollow"),f(Oe,"href","/docs/transformers/pr_15245/en/main_classes/pipelines#transformers.pipeline"),f(Re,"href","/docs/transformers/pr_15245/en/main_classes/pipelines#transformers.pipeline"),f(B,"id","vision-pipeline"),f(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(B,"href","#vision-pipeline"),f(N,"class","relative group"),f(Ue,"href","/docs/transformers/pr_15245/en/main_classes/pipelines#transformers.pipeline"),jn(Ke.src,Ea="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/pipeline-cat-chonk.jpeg")||f(Ke,"src",Ea),f(Ke,"alt","pipeline-cat-chonk")},m(e,o){s(document.head,m),p(e,P,o),p(e,u,o),s(u,x),s(x,z),v(j,z,null),s(u,T),s(u,H),s(H,Zs),p(e,is,o),p(e,E,o),s(E,et),s(E,we),s(we,st),s(E,tt),s(E,Z),s(Z,at),s(E,nt),s(E,je),s(je,rt),s(E,lt),p(e,ps,o),p(e,q,o),s(q,ee),s(ee,ot),s(ee,Ee),s(Ee,it),s(ee,pt),s(q,ft),s(q,Ge),s(Ge,ht),s(q,ct),s(q,se),s(se,mt),s(se,be),s(be,ut),s(se,dt),p(e,fs,o),v(I,e,o),p(e,hs,o),p(e,C,o),s(C,O),s(O,Qe),v(te,Qe,null),s(C,gt),s(C,Xe),s(Xe,vt),p(e,cs,o),p(e,b,o),s(b,_t),s(b,Ae),s(Ae,kt),s(b,$t),s(b,Pe),s(Pe,xt),s(b,yt),s(b,Te),s(Te,wt),s(b,jt),p(e,ms,o),p(e,qe,o),s(qe,ae),s(ae,Et),s(ae,Me),s(Me,bt),s(ae,At),p(e,us,o),v(ne,e,o),p(e,ds,o),p(e,re,o),s(re,le),s(le,Pt),s(le,Se),s(Se,Tt),s(le,qt),p(e,gs,o),v(oe,e,o),p(e,vs,o),p(e,Fe,o),s(Fe,Mt),p(e,_s,o),v(ie,e,o),p(e,ks,o),p(e,y,o),s(y,St),s(y,ze),s(ze,Ft),s(y,zt),s(y,Ye),s(Ye,Ct),s(y,Lt),s(y,Ce),s(Ce,Dt),s(y,Nt),s(y,Ze),s(Ze,Ht),s(y,It),p(e,$s,o),v(pe,e,o),p(e,xs,o),p(e,L,o),s(L,R),s(R,es),v(fe,es,null),s(L,Ot),s(L,ss),s(ss,Rt),p(e,ys,o),p(e,w,o),s(w,Ut),s(w,Le),s(Le,Wt),s(w,Jt),s(w,he),s(he,Kt),s(w,Vt),s(w,ts),s(ts,Bt),s(w,Gt),s(w,De),s(De,Qt),s(w,Xt),p(e,ws,o),v(ce,e,o),p(e,js,o),p(e,U,o),s(U,Yt),s(U,Ne),s(Ne,Zt),s(U,ea),p(e,Es,o),v(me,e,o),p(e,bs,o),p(e,W,o),s(W,sa),s(W,He),s(He,ta),s(W,aa),p(e,As,o),v(ue,e,o),p(e,Ps,o),p(e,D,o),s(D,J),s(J,as),v(de,as,null),s(D,na),s(D,ns),s(ns,ra),p(e,Ts,o),p(e,K,o),s(K,la),s(K,Ie),s(Ie,oa),s(K,ia),p(e,qs,o),p(e,A,o),s(A,pa),s(A,ge),s(ge,fa),s(A,ha),s(A,ve),s(ve,ca),s(A,ma),s(A,Oe),s(Oe,ua),s(A,da),p(e,Ms,o),v(_e,e,o),p(e,Ss,o),p(e,V,o),s(V,ga),s(V,Re),s(Re,va),s(V,_a),p(e,Fs,o),v(ke,e,o),p(e,zs,o),p(e,N,o),s(N,B),s(B,rs),v($e,rs,null),s(N,ka),s(N,ls),s(ls,$a),p(e,Cs,o),p(e,G,o),s(G,xa),s(G,Ue),s(Ue,ya),s(G,wa),p(e,Ls,o),p(e,We,o),s(We,ja),p(e,Ds,o),p(e,Je,o),s(Je,Ke),p(e,Ns,o),v(xe,e,o),Hs=!0},p(e,[o]){const ye={};o&2&&(ye.$$scope={dirty:o,ctx:e}),I.$set(ye)},i(e){Hs||(_(j.$$.fragment,e),_(I.$$.fragment,e),_(te.$$.fragment,e),_(ne.$$.fragment,e),_(oe.$$.fragment,e),_(ie.$$.fragment,e),_(pe.$$.fragment,e),_(fe.$$.fragment,e),_(ce.$$.fragment,e),_(me.$$.fragment,e),_(ue.$$.fragment,e),_(de.$$.fragment,e),_(_e.$$.fragment,e),_(ke.$$.fragment,e),_($e.$$.fragment,e),_(xe.$$.fragment,e),Hs=!0)},o(e){k(j.$$.fragment,e),k(I.$$.fragment,e),k(te.$$.fragment,e),k(ne.$$.fragment,e),k(oe.$$.fragment,e),k(ie.$$.fragment,e),k(pe.$$.fragment,e),k(fe.$$.fragment,e),k(ce.$$.fragment,e),k(me.$$.fragment,e),k(ue.$$.fragment,e),k(de.$$.fragment,e),k(_e.$$.fragment,e),k(ke.$$.fragment,e),k($e.$$.fragment,e),k(xe.$$.fragment,e),Hs=!1},d(e){t(m),e&&t(P),e&&t(u),$(j),e&&t(is),e&&t(E),e&&t(ps),e&&t(q),e&&t(fs),$(I,e),e&&t(hs),e&&t(C),$(te),e&&t(cs),e&&t(b),e&&t(ms),e&&t(qe),e&&t(us),$(ne,e),e&&t(ds),e&&t(re),e&&t(gs),$(oe,e),e&&t(vs),e&&t(Fe),e&&t(_s),$(ie,e),e&&t(ks),e&&t(y),e&&t($s),$(pe,e),e&&t(xs),e&&t(L),$(fe),e&&t(ys),e&&t(w),e&&t(ws),$(ce,e),e&&t(js),e&&t(U),e&&t(Es),$(me,e),e&&t(bs),e&&t(W),e&&t(As),$(ue,e),e&&t(Ps),e&&t(D),$(de),e&&t(Ts),e&&t(K),e&&t(qs),e&&t(A),e&&t(Ms),$(_e,e),e&&t(Ss),e&&t(V),e&&t(Fs),$(ke,e),e&&t(zs),e&&t(N),$($e),e&&t(Cs),e&&t(G),e&&t(Ls),e&&t(We),e&&t(Ds),e&&t(Je),e&&t(Ns),$(xe,e)}}}const Pn={local:"pipelines-for-inference",sections:[{local:"pipeline-usage",sections:[{local:"choose-a-model-and-tokenizer",title:"Choose a model and tokenizer"}],title:"Pipeline usage"},{local:"audio-pipeline",title:"Audio pipeline"},{local:"vision-pipeline",title:"Vision pipeline"}],title:"Pipelines for inference"};function Tn(Be,m,P){let{fw:u}=m;return Be.$$set=x=>{"fw"in x&&P(0,u=x.fw)},[u]}class Cn extends $n{constructor(m){super();xn(this,m,Tn,An,yn,{fw:0})}}export{Cn as default,Pn as metadata};
