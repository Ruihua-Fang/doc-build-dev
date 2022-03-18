import{S as $s,i as ys,s as bs,e as s,k as m,w as c,t as n,M as Es,c as a,d as t,m as p,a as l,x as v,h as i,b as h,F as r,g as f,y as g,q as w,o as _,B as $}from"../chunks/vendor-6b77c823.js";import{T as ks}from"../chunks/Tip-39098574.js";import{Y as _s}from"../chunks/Youtube-5c6e11e6.js";import{I as Re}from"../chunks/IconCopyLink-7a11ce68.js";import{C as M}from"../chunks/CodeBlock-3a8b25a8.js";function Ts(Ye){let u,T,d,y,j;return{c(){u=s("p"),T=n("Refer to the Performance "),d=s("a"),y=n("guide"),j=n(" for more details about memory-saving techniques."),this.h()},l(b){u=a(b,"P",{});var A=l(u);T=i(A,"Refer to the Performance "),d=a(A,"A",{href:!0});var G=l(d);y=i(G,"guide"),G.forEach(t),j=i(A," for more details about memory-saving techniques."),A.forEach(t),this.h()},h(){h(d,"href","performance")},m(b,A){f(b,u,A),r(u,T),r(u,d),r(d,y),r(u,j)},d(b){b&&t(u)}}}function As(Ye){let u,T,d,y,j,b,A,G,lr,pt,ke,nr,ut,X,dt,Te,E,ir,Z,fr,hr,ee,mr,pr,te,ur,dr,ct,re,vt,P,Je,oe,cr,se,vr,gr,wr,Ke,ae,_r,Ae,$r,yr,gt,L,br,le,Er,kr,wt,C,B,We,ne,Tr,Qe,Ar,_t,je,jr,$t,ie,yt,N,Pr,Pe,Cr,Ur,bt,U,H,Xe,fe,Fr,Ze,Ir,Et,Ce,Sr,kt,he,Tt,Ue,xr,At,O,F,qr,Fe,et,Dr,Mr,Ie,Gr,Lr,Br,I,Nr,Se,tt,Hr,Or,xe,zr,Vr,jt,z,Pt,S,V,rt,me,Rr,ot,Yr,Ct,R,Jr,pe,Kr,Wr,Ut,qe,k,Qr,st,Xr,Zr,ue,at,eo,to,De,ro,oo,Ft,de,It,Me,x,so,lt,ao,lo,Ge,no,io,St,ce,xt,q,Y,nt,ve,fo,it,ho,qt,J,mo,ft,po,uo,Dt,ge,Mt,Le,co,Gt,we,Lt,D,K,ht,_e,vo,mt,go,Bt,Be,wo,Nt,$e,Ht,Ne,_o,Ot,ye,zt,He,$o,Vt,be,Rt;return b=new Re({}),X=new _s({props:{id:"S2EEG3JIt2A"}}),re=new _s({props:{id:"_PAli-V4wj0"}}),ne=new Re({}),ie=new M({props:{code:`ValueError: Connection error, and we cannot find the requested files in the cached path.
Please try again or make sure your Internet connection is on.`,highlighted:`ValueError: Connection error, <span class="hljs-built_in">and</span> we cannot <span class="hljs-keyword">find</span> the requested <span class="hljs-keyword">files</span> in the cached path.
Please <span class="hljs-keyword">try</span> again <span class="hljs-built_in">or</span> <span class="hljs-keyword">make</span> sure your Internet connection <span class="hljs-keyword">is</span> <span class="hljs-keyword">on</span>.`}}),fe=new Re({}),he=new M({props:{code:"CUDA out of memory. Tried to allocate 256.00 MiB (GPU 0; 11.17 GiB total capacity; 9.70 GiB already allocated; 179.81 MiB free; 9.85 GiB reserved in total by PyTorch)",highlighted:'<span class="hljs-attribute">CUDA</span> out of memory. Tried to allocate <span class="hljs-number">256</span>.<span class="hljs-number">00</span> MiB (GPU <span class="hljs-number">0</span>; <span class="hljs-number">11</span>.<span class="hljs-number">17</span> GiB total capacity; <span class="hljs-number">9</span>.<span class="hljs-number">70</span> GiB already allocated; <span class="hljs-number">179</span>.<span class="hljs-number">81</span> MiB free; <span class="hljs-number">9</span>.<span class="hljs-number">85</span> GiB reserved in total by PyTorch)'}}),z=new ks({props:{$$slots:{default:[Ts]},$$scope:{ctx:Ye}}}),me=new Re({}),de=new M({props:{code:`from transformers import TFPreTrainedModel
from tensorflow import keras

model.save_weights("some_folder/tf_model.h5")
model = TFPreTrainedModel.from_pretrained("some_folder")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFPreTrainedModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> tensorflow <span class="hljs-keyword">import</span> keras

<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_weights(<span class="hljs-string">&quot;some_folder/tf_model.h5&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFPreTrainedModel.from_pretrained(<span class="hljs-string">&quot;some_folder&quot;</span>)`}}),ce=new M({props:{code:`from transformers import TFPreTrainedModel

model.save_pretrained("path_to/model")
model = TFPreTrainedModel.from_pretrained("path_to/model")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFPreTrainedModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;path_to/model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFPreTrainedModel.from_pretrained(<span class="hljs-string">&quot;path_to/model&quot;</span>)`}}),ve=new Re({}),ge=new M({props:{code:"ImportError: cannot import name 'ImageGPTFeatureExtractor' from 'transformers' (unknown location)",highlighted:'ImportError: cannot <span class="hljs-keyword">import</span> <span class="hljs-type">name</span> <span class="hljs-string">&#x27;ImageGPTFeatureExtractor&#x27;</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;transformers&#x27;</span> (<span class="hljs-type">unknown</span> <span class="hljs-keyword">location</span>)'}}),we=new M({props:{code:"pip install transformers --upgrade",highlighted:"pip install transformers --upgrade"}}),_e=new Re({}),$e=new M({props:{code:"RuntimeError: CUDA error: device-side assert triggered",highlighted:'RuntimeError: CUDA <span class="hljs-literal">error</span>: device-<span class="hljs-literal">side</span> <span class="hljs-keyword">assert</span> triggered'}}),ye=new M({props:{code:`import os

os.environ["CUDA_VISIBLE_DEVICES"] = ""`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> os

<span class="hljs-meta">&gt;&gt;&gt; </span>os.environ[<span class="hljs-string">&quot;CUDA_VISIBLE_DEVICES&quot;</span>] = <span class="hljs-string">&quot;&quot;</span>`}}),be=new M({props:{code:`import os

os.environ["CUDA_LAUNCH_BLOCKING"] = "1"`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> os

<span class="hljs-meta">&gt;&gt;&gt; </span>os.environ[<span class="hljs-string">&quot;CUDA_LAUNCH_BLOCKING&quot;</span>] = <span class="hljs-string">&quot;1&quot;</span>`}}),{c(){u=s("meta"),T=m(),d=s("h1"),y=s("a"),j=s("span"),c(b.$$.fragment),A=m(),G=s("span"),lr=n("Troubleshoot"),pt=m(),ke=s("p"),nr=n("Sometimes errors occur, but we are here to help! This guide covers some of the most common issues we\u2019ve seen and how you can resolve them. However, this guide isn\u2019t meant to be a comprehensive collection of every \u{1F917} Transformers issue. For more help with troubleshooting your issue, try:"),ut=m(),c(X.$$.fragment),dt=m(),Te=s("ol"),E=s("li"),ir=n("Asking for help on the "),Z=s("a"),fr=n("forums"),hr=n(". There are specific categories you can post your question to, like "),ee=s("a"),mr=n("Beginners"),pr=n(" or "),te=s("a"),ur=n("\u{1F917} Transformers"),dr=n(". Make sure you write a good descriptive forum post with some reproducible code to maximize the likelihood that your problem is solved!"),ct=m(),c(re.$$.fragment),vt=m(),P=s("ol"),Je=s("li"),oe=s("p"),cr=n("Create an "),se=s("a"),vr=n("Issue"),gr=n(" on the \u{1F917} Transformers repository if it is a bug related to the library. Try to include as much information describing the bug as possible to help us better figure out what\u2019s wrong and how we can fix it."),wr=m(),Ke=s("li"),ae=s("p"),_r=n("Check the "),Ae=s("a"),$r=n("Migration"),yr=n(" guide if you use an older version of \u{1F917} Transformers since some important changes have been introduced between versions."),gt=m(),L=s("p"),br=n("For more details about troubleshooting and getting help, take a look at "),le=s("a"),Er=n("Chapter 8"),kr=n(" of the Hugging Face course."),wt=m(),C=s("h2"),B=s("a"),We=s("span"),c(ne.$$.fragment),Tr=m(),Qe=s("span"),Ar=n("Firewalled environments"),_t=m(),je=s("p"),jr=n("Some GPU instances on cloud and intranet setups are firewalled to external connections, resulting in a connection error. When your script attempts to download model weights or datasets, the download will hang and then timeout with the following message:"),$t=m(),c(ie.$$.fragment),yt=m(),N=s("p"),Pr=n("In this case, you should try to run \u{1F917} Transformers on "),Pe=s("a"),Cr=n("offline mode"),Ur=n(" to avoid the connection error."),bt=m(),U=s("h2"),H=s("a"),Xe=s("span"),c(fe.$$.fragment),Fr=m(),Ze=s("span"),Ir=n("CUDA out of memory"),Et=m(),Ce=s("p"),Sr=n("Training large models with millions of parameters can be challenging without the appropriate hardware. A common error you may encounter when the GPU runs out of memory is:"),kt=m(),c(he.$$.fragment),Tt=m(),Ue=s("p"),xr=n("Here are some potential solutions you can try to lessen memory use:"),At=m(),O=s("ul"),F=s("li"),qr=n("Reduce the "),Fe=s("a"),et=s("code"),Dr=n("per_device_train_batch_size"),Mr=n(" value in "),Ie=s("a"),Gr=n("TrainingArguments"),Lr=n("."),Br=m(),I=s("li"),Nr=n("Try using "),Se=s("a"),tt=s("code"),Hr=n("gradient_accumulation_steps"),Or=n(" in "),xe=s("a"),zr=n("TrainingArguments"),Vr=n(" to effectively increase overall batch size."),jt=m(),c(z.$$.fragment),Pt=m(),S=s("h2"),V=s("a"),rt=s("span"),c(me.$$.fragment),Rr=m(),ot=s("span"),Yr=n("Unable to load a saved TensorFlow model"),Ct=m(),R=s("p"),Jr=n("TensorFlow\u2019s "),pe=s("a"),Kr=n("model.save"),Wr=n(" method will save the entire model - architecture, weights, training configuration - in a single file. However, when you load the model file again, you may run into an error because \u{1F917} Transformers may not load all the TensorFlow-related objects in the model file. To avoid issues with saving and loading TensorFlow models, we recommend you:"),Ut=m(),qe=s("ul"),k=s("li"),Qr=n("Save the model weights as a "),st=s("code"),Xr=n("h5"),Zr=n(" file extension with "),ue=s("a"),at=s("code"),eo=n("model.save_weights"),to=n(" and then reload the model with "),De=s("a"),ro=n("from_pretrained()"),oo=n(":"),Ft=m(),c(de.$$.fragment),It=m(),Me=s("ul"),x=s("li"),so=n("Save the model with "),lt=s("code"),ao=n("save_pretrained"),lo=n(" and load it again with "),Ge=s("a"),no=n("from_pretrained()"),io=n(":"),St=m(),c(ce.$$.fragment),xt=m(),q=s("h2"),Y=s("a"),nt=s("span"),c(ve.$$.fragment),fo=m(),it=s("span"),ho=n("ImportError"),qt=m(),J=s("p"),mo=n("Another common error you may encounter, especially if it is a newly released model, is "),ft=s("code"),po=n("ImportError"),uo=n(":"),Dt=m(),c(ge.$$.fragment),Mt=m(),Le=s("p"),co=n("For these error types, check to make sure you have the latest version of \u{1F917} Transformers installed to access the most recent models:"),Gt=m(),c(we.$$.fragment),Lt=m(),D=s("h2"),K=s("a"),ht=s("span"),c(_e.$$.fragment),vo=m(),mt=s("span"),go=n("CUDA error: device-side assert triggered"),Bt=m(),Be=s("p"),wo=n("Sometimes you may run into a generic CUDA error about an error in the device code."),Nt=m(),c($e.$$.fragment),Ht=m(),Ne=s("p"),_o=n("You should try to run the code on a CPU first to get a more descriptive error message. Add the following environment variable to the beginning of your code to switch to a CPU:"),Ot=m(),c(ye.$$.fragment),zt=m(),He=s("p"),$o=n("Another option is to get a better traceback from the GPU. Add the following environment variable to the beginning of your code to get the traceback to point to the source of the error:"),Vt=m(),c(be.$$.fragment),this.h()},l(e){const o=Es('[data-svelte="svelte-1phssyn"]',document.head);u=a(o,"META",{name:!0,content:!0}),o.forEach(t),T=p(e),d=a(e,"H1",{class:!0});var Ee=l(d);y=a(Ee,"A",{id:!0,class:!0,href:!0});var yo=l(y);j=a(yo,"SPAN",{});var bo=l(j);v(b.$$.fragment,bo),bo.forEach(t),yo.forEach(t),A=p(Ee),G=a(Ee,"SPAN",{});var Eo=l(G);lr=i(Eo,"Troubleshoot"),Eo.forEach(t),Ee.forEach(t),pt=p(e),ke=a(e,"P",{});var ko=l(ke);nr=i(ko,"Sometimes errors occur, but we are here to help! This guide covers some of the most common issues we\u2019ve seen and how you can resolve them. However, this guide isn\u2019t meant to be a comprehensive collection of every \u{1F917} Transformers issue. For more help with troubleshooting your issue, try:"),ko.forEach(t),ut=p(e),v(X.$$.fragment,e),dt=p(e),Te=a(e,"OL",{});var To=l(Te);E=a(To,"LI",{});var W=l(E);ir=i(W,"Asking for help on the "),Z=a(W,"A",{href:!0,rel:!0});var Ao=l(Z);fr=i(Ao,"forums"),Ao.forEach(t),hr=i(W,". There are specific categories you can post your question to, like "),ee=a(W,"A",{href:!0,rel:!0});var jo=l(ee);mr=i(jo,"Beginners"),jo.forEach(t),pr=i(W," or "),te=a(W,"A",{href:!0,rel:!0});var Po=l(te);ur=i(Po,"\u{1F917} Transformers"),Po.forEach(t),dr=i(W,". Make sure you write a good descriptive forum post with some reproducible code to maximize the likelihood that your problem is solved!"),W.forEach(t),To.forEach(t),ct=p(e),v(re.$$.fragment,e),vt=p(e),P=a(e,"OL",{start:!0});var Yt=l(P);Je=a(Yt,"LI",{});var Co=l(Je);oe=a(Co,"P",{});var Jt=l(oe);cr=i(Jt,"Create an "),se=a(Jt,"A",{href:!0,rel:!0});var Uo=l(se);vr=i(Uo,"Issue"),Uo.forEach(t),gr=i(Jt," on the \u{1F917} Transformers repository if it is a bug related to the library. Try to include as much information describing the bug as possible to help us better figure out what\u2019s wrong and how we can fix it."),Jt.forEach(t),Co.forEach(t),wr=p(Yt),Ke=a(Yt,"LI",{});var Fo=l(Ke);ae=a(Fo,"P",{});var Kt=l(ae);_r=i(Kt,"Check the "),Ae=a(Kt,"A",{href:!0});var Io=l(Ae);$r=i(Io,"Migration"),Io.forEach(t),yr=i(Kt," guide if you use an older version of \u{1F917} Transformers since some important changes have been introduced between versions."),Kt.forEach(t),Fo.forEach(t),Yt.forEach(t),gt=p(e),L=a(e,"P",{});var Wt=l(L);br=i(Wt,"For more details about troubleshooting and getting help, take a look at "),le=a(Wt,"A",{href:!0,rel:!0});var So=l(le);Er=i(So,"Chapter 8"),So.forEach(t),kr=i(Wt," of the Hugging Face course."),Wt.forEach(t),wt=p(e),C=a(e,"H2",{class:!0});var Qt=l(C);B=a(Qt,"A",{id:!0,class:!0,href:!0});var xo=l(B);We=a(xo,"SPAN",{});var qo=l(We);v(ne.$$.fragment,qo),qo.forEach(t),xo.forEach(t),Tr=p(Qt),Qe=a(Qt,"SPAN",{});var Do=l(Qe);Ar=i(Do,"Firewalled environments"),Do.forEach(t),Qt.forEach(t),_t=p(e),je=a(e,"P",{});var Mo=l(je);jr=i(Mo,"Some GPU instances on cloud and intranet setups are firewalled to external connections, resulting in a connection error. When your script attempts to download model weights or datasets, the download will hang and then timeout with the following message:"),Mo.forEach(t),$t=p(e),v(ie.$$.fragment,e),yt=p(e),N=a(e,"P",{});var Xt=l(N);Pr=i(Xt,"In this case, you should try to run \u{1F917} Transformers on "),Pe=a(Xt,"A",{href:!0});var Go=l(Pe);Cr=i(Go,"offline mode"),Go.forEach(t),Ur=i(Xt," to avoid the connection error."),Xt.forEach(t),bt=p(e),U=a(e,"H2",{class:!0});var Zt=l(U);H=a(Zt,"A",{id:!0,class:!0,href:!0});var Lo=l(H);Xe=a(Lo,"SPAN",{});var Bo=l(Xe);v(fe.$$.fragment,Bo),Bo.forEach(t),Lo.forEach(t),Fr=p(Zt),Ze=a(Zt,"SPAN",{});var No=l(Ze);Ir=i(No,"CUDA out of memory"),No.forEach(t),Zt.forEach(t),Et=p(e),Ce=a(e,"P",{});var Ho=l(Ce);Sr=i(Ho,"Training large models with millions of parameters can be challenging without the appropriate hardware. A common error you may encounter when the GPU runs out of memory is:"),Ho.forEach(t),kt=p(e),v(he.$$.fragment,e),Tt=p(e),Ue=a(e,"P",{});var Oo=l(Ue);xr=i(Oo,"Here are some potential solutions you can try to lessen memory use:"),Oo.forEach(t),At=p(e),O=a(e,"UL",{});var er=l(O);F=a(er,"LI",{});var Oe=l(F);qr=i(Oe,"Reduce the "),Fe=a(Oe,"A",{href:!0});var zo=l(Fe);et=a(zo,"CODE",{});var Vo=l(et);Dr=i(Vo,"per_device_train_batch_size"),Vo.forEach(t),zo.forEach(t),Mr=i(Oe," value in "),Ie=a(Oe,"A",{href:!0});var Ro=l(Ie);Gr=i(Ro,"TrainingArguments"),Ro.forEach(t),Lr=i(Oe,"."),Oe.forEach(t),Br=p(er),I=a(er,"LI",{});var ze=l(I);Nr=i(ze,"Try using "),Se=a(ze,"A",{href:!0});var Yo=l(Se);tt=a(Yo,"CODE",{});var Jo=l(tt);Hr=i(Jo,"gradient_accumulation_steps"),Jo.forEach(t),Yo.forEach(t),Or=i(ze," in "),xe=a(ze,"A",{href:!0});var Ko=l(xe);zr=i(Ko,"TrainingArguments"),Ko.forEach(t),Vr=i(ze," to effectively increase overall batch size."),ze.forEach(t),er.forEach(t),jt=p(e),v(z.$$.fragment,e),Pt=p(e),S=a(e,"H2",{class:!0});var tr=l(S);V=a(tr,"A",{id:!0,class:!0,href:!0});var Wo=l(V);rt=a(Wo,"SPAN",{});var Qo=l(rt);v(me.$$.fragment,Qo),Qo.forEach(t),Wo.forEach(t),Rr=p(tr),ot=a(tr,"SPAN",{});var Xo=l(ot);Yr=i(Xo,"Unable to load a saved TensorFlow model"),Xo.forEach(t),tr.forEach(t),Ct=p(e),R=a(e,"P",{});var rr=l(R);Jr=i(rr,"TensorFlow\u2019s "),pe=a(rr,"A",{href:!0,rel:!0});var Zo=l(pe);Kr=i(Zo,"model.save"),Zo.forEach(t),Wr=i(rr," method will save the entire model - architecture, weights, training configuration - in a single file. However, when you load the model file again, you may run into an error because \u{1F917} Transformers may not load all the TensorFlow-related objects in the model file. To avoid issues with saving and loading TensorFlow models, we recommend you:"),rr.forEach(t),Ut=p(e),qe=a(e,"UL",{});var es=l(qe);k=a(es,"LI",{});var Q=l(k);Qr=i(Q,"Save the model weights as a "),st=a(Q,"CODE",{});var ts=l(st);Xr=i(ts,"h5"),ts.forEach(t),Zr=i(Q," file extension with "),ue=a(Q,"A",{href:!0,rel:!0});var rs=l(ue);at=a(rs,"CODE",{});var os=l(at);eo=i(os,"model.save_weights"),os.forEach(t),rs.forEach(t),to=i(Q," and then reload the model with "),De=a(Q,"A",{href:!0});var ss=l(De);ro=i(ss,"from_pretrained()"),ss.forEach(t),oo=i(Q,":"),Q.forEach(t),es.forEach(t),Ft=p(e),v(de.$$.fragment,e),It=p(e),Me=a(e,"UL",{});var as=l(Me);x=a(as,"LI",{});var Ve=l(x);so=i(Ve,"Save the model with "),lt=a(Ve,"CODE",{});var ls=l(lt);ao=i(ls,"save_pretrained"),ls.forEach(t),lo=i(Ve," and load it again with "),Ge=a(Ve,"A",{href:!0});var ns=l(Ge);no=i(ns,"from_pretrained()"),ns.forEach(t),io=i(Ve,":"),Ve.forEach(t),as.forEach(t),St=p(e),v(ce.$$.fragment,e),xt=p(e),q=a(e,"H2",{class:!0});var or=l(q);Y=a(or,"A",{id:!0,class:!0,href:!0});var is=l(Y);nt=a(is,"SPAN",{});var fs=l(nt);v(ve.$$.fragment,fs),fs.forEach(t),is.forEach(t),fo=p(or),it=a(or,"SPAN",{});var hs=l(it);ho=i(hs,"ImportError"),hs.forEach(t),or.forEach(t),qt=p(e),J=a(e,"P",{});var sr=l(J);mo=i(sr,"Another common error you may encounter, especially if it is a newly released model, is "),ft=a(sr,"CODE",{});var ms=l(ft);po=i(ms,"ImportError"),ms.forEach(t),uo=i(sr,":"),sr.forEach(t),Dt=p(e),v(ge.$$.fragment,e),Mt=p(e),Le=a(e,"P",{});var ps=l(Le);co=i(ps,"For these error types, check to make sure you have the latest version of \u{1F917} Transformers installed to access the most recent models:"),ps.forEach(t),Gt=p(e),v(we.$$.fragment,e),Lt=p(e),D=a(e,"H2",{class:!0});var ar=l(D);K=a(ar,"A",{id:!0,class:!0,href:!0});var us=l(K);ht=a(us,"SPAN",{});var ds=l(ht);v(_e.$$.fragment,ds),ds.forEach(t),us.forEach(t),vo=p(ar),mt=a(ar,"SPAN",{});var cs=l(mt);go=i(cs,"CUDA error: device-side assert triggered"),cs.forEach(t),ar.forEach(t),Bt=p(e),Be=a(e,"P",{});var vs=l(Be);wo=i(vs,"Sometimes you may run into a generic CUDA error about an error in the device code."),vs.forEach(t),Nt=p(e),v($e.$$.fragment,e),Ht=p(e),Ne=a(e,"P",{});var gs=l(Ne);_o=i(gs,"You should try to run the code on a CPU first to get a more descriptive error message. Add the following environment variable to the beginning of your code to switch to a CPU:"),gs.forEach(t),Ot=p(e),v(ye.$$.fragment,e),zt=p(e),He=a(e,"P",{});var ws=l(He);$o=i(ws,"Another option is to get a better traceback from the GPU. Add the following environment variable to the beginning of your code to get the traceback to point to the source of the error:"),ws.forEach(t),Vt=p(e),v(be.$$.fragment,e),this.h()},h(){h(u,"name","hf:doc:metadata"),h(u,"content",JSON.stringify(js)),h(y,"id","troubleshoot"),h(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(y,"href","#troubleshoot"),h(d,"class","relative group"),h(Z,"href","https://discuss.huggingface.co/"),h(Z,"rel","nofollow"),h(ee,"href","https://discuss.huggingface.co/c/beginners/5"),h(ee,"rel","nofollow"),h(te,"href","https://discuss.huggingface.co/c/transformers/9"),h(te,"rel","nofollow"),h(se,"href","https://github.com/huggingface/transformers/issues/new/choose"),h(se,"rel","nofollow"),h(Ae,"href","migration"),h(P,"start","2"),h(le,"href","https://huggingface.co/course/chapter8/1?fw=pt"),h(le,"rel","nofollow"),h(B,"id","firewalled-environments"),h(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(B,"href","#firewalled-environments"),h(C,"class","relative group"),h(Pe,"href","installation#offline-mode"),h(H,"id","cuda-out-of-memory"),h(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(H,"href","#cuda-out-of-memory"),h(U,"class","relative group"),h(Fe,"href","main_classes/trainer#transformers.TrainingArguments.per_device_train_batch_size"),h(Ie,"href","/docs/transformers/pr_16260/en/main_classes/trainer#transformers.TrainingArguments"),h(Se,"href","main_classes/trainer#transformers.TrainingArguments.gradient_accumulation_steps"),h(xe,"href","/docs/transformers/pr_16260/en/main_classes/trainer#transformers.TrainingArguments"),h(V,"id","unable-to-load-a-saved-tensorflow-model"),h(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(V,"href","#unable-to-load-a-saved-tensorflow-model"),h(S,"class","relative group"),h(pe,"href","https://www.tensorflow.org/tutorials/keras/save_and_load#save_the_entire_model"),h(pe,"rel","nofollow"),h(ue,"href","https://www.tensorflow.org/tutorials/keras/save_and_load#save_the_entire_model"),h(ue,"rel","nofollow"),h(De,"href","/docs/transformers/pr_16260/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained"),h(Ge,"href","/docs/transformers/pr_16260/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained"),h(Y,"id","importerror"),h(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Y,"href","#importerror"),h(q,"class","relative group"),h(K,"id","cuda-error-deviceside-assert-triggered"),h(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(K,"href","#cuda-error-deviceside-assert-triggered"),h(D,"class","relative group")},m(e,o){r(document.head,u),f(e,T,o),f(e,d,o),r(d,y),r(y,j),g(b,j,null),r(d,A),r(d,G),r(G,lr),f(e,pt,o),f(e,ke,o),r(ke,nr),f(e,ut,o),g(X,e,o),f(e,dt,o),f(e,Te,o),r(Te,E),r(E,ir),r(E,Z),r(Z,fr),r(E,hr),r(E,ee),r(ee,mr),r(E,pr),r(E,te),r(te,ur),r(E,dr),f(e,ct,o),g(re,e,o),f(e,vt,o),f(e,P,o),r(P,Je),r(Je,oe),r(oe,cr),r(oe,se),r(se,vr),r(oe,gr),r(P,wr),r(P,Ke),r(Ke,ae),r(ae,_r),r(ae,Ae),r(Ae,$r),r(ae,yr),f(e,gt,o),f(e,L,o),r(L,br),r(L,le),r(le,Er),r(L,kr),f(e,wt,o),f(e,C,o),r(C,B),r(B,We),g(ne,We,null),r(C,Tr),r(C,Qe),r(Qe,Ar),f(e,_t,o),f(e,je,o),r(je,jr),f(e,$t,o),g(ie,e,o),f(e,yt,o),f(e,N,o),r(N,Pr),r(N,Pe),r(Pe,Cr),r(N,Ur),f(e,bt,o),f(e,U,o),r(U,H),r(H,Xe),g(fe,Xe,null),r(U,Fr),r(U,Ze),r(Ze,Ir),f(e,Et,o),f(e,Ce,o),r(Ce,Sr),f(e,kt,o),g(he,e,o),f(e,Tt,o),f(e,Ue,o),r(Ue,xr),f(e,At,o),f(e,O,o),r(O,F),r(F,qr),r(F,Fe),r(Fe,et),r(et,Dr),r(F,Mr),r(F,Ie),r(Ie,Gr),r(F,Lr),r(O,Br),r(O,I),r(I,Nr),r(I,Se),r(Se,tt),r(tt,Hr),r(I,Or),r(I,xe),r(xe,zr),r(I,Vr),f(e,jt,o),g(z,e,o),f(e,Pt,o),f(e,S,o),r(S,V),r(V,rt),g(me,rt,null),r(S,Rr),r(S,ot),r(ot,Yr),f(e,Ct,o),f(e,R,o),r(R,Jr),r(R,pe),r(pe,Kr),r(R,Wr),f(e,Ut,o),f(e,qe,o),r(qe,k),r(k,Qr),r(k,st),r(st,Xr),r(k,Zr),r(k,ue),r(ue,at),r(at,eo),r(k,to),r(k,De),r(De,ro),r(k,oo),f(e,Ft,o),g(de,e,o),f(e,It,o),f(e,Me,o),r(Me,x),r(x,so),r(x,lt),r(lt,ao),r(x,lo),r(x,Ge),r(Ge,no),r(x,io),f(e,St,o),g(ce,e,o),f(e,xt,o),f(e,q,o),r(q,Y),r(Y,nt),g(ve,nt,null),r(q,fo),r(q,it),r(it,ho),f(e,qt,o),f(e,J,o),r(J,mo),r(J,ft),r(ft,po),r(J,uo),f(e,Dt,o),g(ge,e,o),f(e,Mt,o),f(e,Le,o),r(Le,co),f(e,Gt,o),g(we,e,o),f(e,Lt,o),f(e,D,o),r(D,K),r(K,ht),g(_e,ht,null),r(D,vo),r(D,mt),r(mt,go),f(e,Bt,o),f(e,Be,o),r(Be,wo),f(e,Nt,o),g($e,e,o),f(e,Ht,o),f(e,Ne,o),r(Ne,_o),f(e,Ot,o),g(ye,e,o),f(e,zt,o),f(e,He,o),r(He,$o),f(e,Vt,o),g(be,e,o),Rt=!0},p(e,[o]){const Ee={};o&2&&(Ee.$$scope={dirty:o,ctx:e}),z.$set(Ee)},i(e){Rt||(w(b.$$.fragment,e),w(X.$$.fragment,e),w(re.$$.fragment,e),w(ne.$$.fragment,e),w(ie.$$.fragment,e),w(fe.$$.fragment,e),w(he.$$.fragment,e),w(z.$$.fragment,e),w(me.$$.fragment,e),w(de.$$.fragment,e),w(ce.$$.fragment,e),w(ve.$$.fragment,e),w(ge.$$.fragment,e),w(we.$$.fragment,e),w(_e.$$.fragment,e),w($e.$$.fragment,e),w(ye.$$.fragment,e),w(be.$$.fragment,e),Rt=!0)},o(e){_(b.$$.fragment,e),_(X.$$.fragment,e),_(re.$$.fragment,e),_(ne.$$.fragment,e),_(ie.$$.fragment,e),_(fe.$$.fragment,e),_(he.$$.fragment,e),_(z.$$.fragment,e),_(me.$$.fragment,e),_(de.$$.fragment,e),_(ce.$$.fragment,e),_(ve.$$.fragment,e),_(ge.$$.fragment,e),_(we.$$.fragment,e),_(_e.$$.fragment,e),_($e.$$.fragment,e),_(ye.$$.fragment,e),_(be.$$.fragment,e),Rt=!1},d(e){t(u),e&&t(T),e&&t(d),$(b),e&&t(pt),e&&t(ke),e&&t(ut),$(X,e),e&&t(dt),e&&t(Te),e&&t(ct),$(re,e),e&&t(vt),e&&t(P),e&&t(gt),e&&t(L),e&&t(wt),e&&t(C),$(ne),e&&t(_t),e&&t(je),e&&t($t),$(ie,e),e&&t(yt),e&&t(N),e&&t(bt),e&&t(U),$(fe),e&&t(Et),e&&t(Ce),e&&t(kt),$(he,e),e&&t(Tt),e&&t(Ue),e&&t(At),e&&t(O),e&&t(jt),$(z,e),e&&t(Pt),e&&t(S),$(me),e&&t(Ct),e&&t(R),e&&t(Ut),e&&t(qe),e&&t(Ft),$(de,e),e&&t(It),e&&t(Me),e&&t(St),$(ce,e),e&&t(xt),e&&t(q),$(ve),e&&t(qt),e&&t(J),e&&t(Dt),$(ge,e),e&&t(Mt),e&&t(Le),e&&t(Gt),$(we,e),e&&t(Lt),e&&t(D),$(_e),e&&t(Bt),e&&t(Be),e&&t(Nt),$($e,e),e&&t(Ht),e&&t(Ne),e&&t(Ot),$(ye,e),e&&t(zt),e&&t(He),e&&t(Vt),$(be,e)}}}const js={local:"troubleshoot",sections:[{local:"firewalled-environments",title:"Firewalled environments"},{local:"cuda-out-of-memory",title:"CUDA out of memory"},{local:"unable-to-load-a-saved-tensorflow-model",title:"Unable to load a saved TensorFlow model"},{local:"importerror",title:"ImportError"},{local:"cuda-error-deviceside-assert-triggered",title:"CUDA error: device-side assert triggered"}],title:"Troubleshoot"};function Ps(Ye,u,T){let{fw:d}=u;return Ye.$$set=y=>{"fw"in y&&T(0,d=y.fw)},[d]}class xs extends $s{constructor(u){super();ys(this,u,Ps,As,bs,{fw:0})}}export{xs as default,js as metadata};
