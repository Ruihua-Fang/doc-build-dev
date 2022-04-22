import{S as zl,i as Ml,s as Wl,e as s,k as f,w as d,t as n,M as Vl,c as o,d as e,m as h,a as r,x as c,h as p,b as u,N as Yt,F as a,g as i,y as m,L as Rl,q as v,o as g,B as y,v as Jl}from"../chunks/vendor-8138ceec.js";import{I as V}from"../chunks/IconCopyLink-2dd3a6ac.js";import{C as R}from"../chunks/CodeBlock-fc89709f.js";function Yl(mo){let E,Ce,b,S,Bt,J,Ja,Kt,Ya,Oe,Pt,Ba,qe,T,Ka,Y,Qa,Xa,Fe,k,I,Qt,B,Za,Xt,ts,Ge,Lt,es,Ue,H,K,as,Zt,ss,os,ls,te,rs,ze,Q,ee,vo,Me,D,C,ae,X,is,se,ns,We,At,x,ps,oe,us,fs,le,hs,ds,Ve,Z,re,go,Re,tt,ie,cs,Je,et,ne,yo,Ye,at,pe,ms,Be,st,ue,_o,Ke,j,O,fe,ot,vs,he,gs,Qe,Nt,ys,Xe,St,lt,_s,de,ws,$s,Ze,rt,ce,wo,ta,_,me,it,Es,nt,bs,ks,Ds,ve,pt,xs,ut,js,Ps,Ls,ge,ye,As,ea,ft,_e,$o,aa,q,Ns,ht,Ss,Ts,sa,P,F,we,dt,Is,$e,Hs,oa,Tt,Cs,la,ct,ra,L,G,Ee,mt,Os,be,qs,ia,w,Fs,It,Gs,Us,Ht,zs,Ms,na,Ct,ke,Ws,pa,vt,ua,gt,De,Vs,fa,yt,ha,U,Rs,xe,Js,Ys,da,_t,ca,A,z,je,wt,Bs,Pe,Ks,ma,Ot,Qs,va,qt,Le,Xs,ga,$t,ya,Et,Ae,Zs,_a,bt,wa,M,to,Ne,eo,ao,$a,Ft,Se,so,Ea,kt,ba,Dt,Te,oo,ka,xt,Da,N,W,Ie,jt,lo,He,ro,xa,Gt,io,ja,Ut,no,Pa,$,po,zt,uo,fo,Mt,ho,co,La;return J=new V({}),B=new V({}),X=new V({}),ot=new V({}),dt=new V({}),ct=new R({props:{code:`from datasets import load_dataset
dataset = load_dataset("stevhliu/demo")
dataset`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;stevhliu/demo&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset
DatasetDict({
 train: Dataset({
     features: [<span class="hljs-string">&#x27;id&#x27;</span>, <span class="hljs-string">&#x27;package_name&#x27;</span>, <span class="hljs-string">&#x27;review&#x27;</span>, <span class="hljs-string">&#x27;date&#x27;</span>, <span class="hljs-string">&#x27;star&#x27;</span>, <span class="hljs-string">&#x27;version_id&#x27;</span>],
     num_rows: <span class="hljs-number">5</span>
 })
 test: Dataset({
     features: [<span class="hljs-string">&#x27;id&#x27;</span>, <span class="hljs-string">&#x27;package_name&#x27;</span>, <span class="hljs-string">&#x27;review&#x27;</span>, <span class="hljs-string">&#x27;date&#x27;</span>, <span class="hljs-string">&#x27;star&#x27;</span>, <span class="hljs-string">&#x27;version_id&#x27;</span>],
     num_rows: <span class="hljs-number">5</span>
 })
})`}}),mt=new V({}),vt=new R({props:{code:"huggingface-cli login",highlighted:'huggingface-<span class="hljs-keyword">cli</span> login'}}),yt=new R({props:{code:`from datasets import load_dataset
dataset = load_dataset("stevhliu/demo")
# dataset = dataset.map(...)  # do all your processing here
dataset.push_to_hub("stevhliu/processed_demo")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;stevhliu/demo&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dataset = dataset.map(...)  # do all your processing here</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.push_to_hub(<span class="hljs-string">&quot;stevhliu/processed_demo&quot;</span>)`}}),_t=new R({props:{code:'dataset.push_to_hub("stevhliu/private_processed_demo", private=True)',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.push_to_hub(<span class="hljs-string">&quot;stevhliu/private_processed_demo&quot;</span>, private=<span class="hljs-literal">True</span>)'}}),wt=new V({}),$t=new R({props:{code:"huggingface-cli login",highlighted:'huggingface-<span class="hljs-keyword">cli</span> login'}}),bt=new R({props:{code:`from datasets import load_dataset
dataset = load_dataset("stevhliu/demo", use_auth_token=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;stevhliu/demo&quot;</span>, use_auth_token=<span class="hljs-literal">True</span>)`}}),kt=new R({props:{code:"huggingface-cli login",highlighted:'huggingface-<span class="hljs-keyword">cli</span> login'}}),xt=new R({props:{code:`from datasets import load_dataset
dataset = load_dataset("organization/dataset_name", use_auth_token=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;organization/dataset_name&quot;</span>, use_auth_token=<span class="hljs-literal">True</span>)`}}),jt=new V({}),{c(){E=s("meta"),Ce=f(),b=s("h1"),S=s("a"),Bt=s("span"),d(J.$$.fragment),Ja=f(),Kt=s("span"),Ya=n("Upload a dataset to the Hub"),Oe=f(),Pt=s("p"),Ba=n("In the last section of the tutorials, you will learn how to upload a dataset to the Hugging Face Hub. \u{1F917} Datasets aims to provide the largest collection of datasets that anyone can use to train their models. We welcome all dataset contributions from the NLP community, and we have made it very simple for you to add a dataset. Even if you don\u2019t have a lot of developer experience, you can still contribute!"),qe=f(),T=s("p"),Ka=n("Start by creating a Hugging Face Hub account at "),Y=s("a"),Qa=n("hf.co"),Xa=n(" if you don\u2019t have one yet."),Fe=f(),k=s("h2"),I=s("a"),Qt=s("span"),d(B.$$.fragment),Za=f(),Xt=s("span"),ts=n("Create a repository"),Ge=f(),Lt=s("p"),es=n("A repository hosts all your dataset files, including the revision history, making it possible to store more than one dataset version."),Ue=f(),H=s("ol"),K=s("li"),as=n("Click on your profile and select "),Zt=s("strong"),ss=n("New Dataset"),os=n(" to create a new dataset repository."),ls=f(),te=s("li"),rs=n("Give your dataset a name, and select whether this is a public or private dataset. A public dataset is visible to anyone, whereas a private dataset can only be viewed by you or members of your organization."),ze=f(),Q=s("div"),ee=s("img"),Me=f(),D=s("h2"),C=s("a"),ae=s("span"),d(X.$$.fragment),is=f(),se=s("span"),ns=n("Upload your files"),We=f(),At=s("ol"),x=s("li"),ps=n("Once you have created a repository, navigate to the "),oe=s("strong"),us=n("Files and versions"),fs=n(" tab to add a file. Select "),le=s("strong"),hs=n("Add file"),ds=n(" to upload your dataset files. We currently support the following data formats: CSV, JSON, JSON lines, text, and Parquet."),Ve=f(),Z=s("div"),re=s("img"),Re=f(),tt=s("ol"),ie=s("li"),cs=n("Drag and drop your dataset files here, and add a brief descriptive commit message."),Je=f(),et=s("div"),ne=s("img"),Ye=f(),at=s("ol"),pe=s("li"),ms=n("Once you have uploaded your dataset files, they are now stored in your dataset repository."),Be=f(),st=s("div"),ue=s("img"),Ke=f(),j=s("h2"),O=s("a"),fe=s("span"),d(ot.$$.fragment),vs=f(),he=s("span"),gs=n("Create a Dataset card"),Qe=f(),Nt=s("p"),ys=n("The last step is to create a Dataset card. The Dataset card is essential for helping users find your dataset and understand how to use it responsibly."),Xe=f(),St=s("ol"),lt=s("li"),_s=n("Click on the "),de=s("strong"),ws=n("Create Dataset Card"),$s=n(" to create a Dataset card."),Ze=f(),rt=s("div"),ce=s("img"),ta=f(),_=s("ol"),me=s("li"),it=s("p"),Es=n("Get a quick start with our Dataset card "),nt=s("a"),bs=n("template"),ks=n(" to help you fill out all the relevant fields."),Ds=f(),ve=s("li"),pt=s("p"),xs=n("The Dataset card uses structured tags to help users discover your dataset on the Hub. Use the "),ut=s("a"),js=n("online Datasets Tagging application"),Ps=n(" to help you generate the appropriate tags."),Ls=f(),ge=s("li"),ye=s("p"),As=n("Copy the generated tags and paste them at the top of your Dataset card, then commit your changes."),ea=f(),ft=s("div"),_e=s("img"),aa=f(),q=s("p"),Ns=n("For a detailed example of what a good Dataset card should look like, refer to the "),ht=s("a"),Ss=n("CNN DailyMail Dataset card"),Ts=n("."),sa=f(),P=s("h2"),F=s("a"),we=s("span"),d(dt.$$.fragment),Is=f(),$e=s("span"),Hs=n("Load dataset"),oa=f(),Tt=s("p"),Cs=n("Your dataset can now be loaded by anyone in a single line of code!"),la=f(),d(ct.$$.fragment),ra=f(),L=s("h2"),G=s("a"),Ee=s("span"),d(mt.$$.fragment),Os=f(),be=s("span"),qs=n("Upload from Python"),ia=f(),w=s("p"),Fs=n("To upload a "),It=s("a"),Gs=n("DatasetDict"),Us=n(" on the Hugging Face Hub in Python, you can login and use the "),Ht=s("a"),zs=n("DatasetDict.push_to_hub()"),Ms=n(" method:"),na=f(),Ct=s("ol"),ke=s("li"),Ws=n("Login from the command line:"),pa=f(),d(vt.$$.fragment),ua=f(),gt=s("ol"),De=s("li"),Vs=n("Upload the dataset:"),fa=f(),d(yt.$$.fragment),ha=f(),U=s("p"),Rs=n("With the "),xe=s("code"),Js=n("private"),Ys=n(" parameter you can choose whether your dataset is public or private:"),da=f(),d(_t.$$.fragment),ca=f(),A=s("h2"),z=s("a"),je=s("span"),d(wt.$$.fragment),Bs=f(),Pe=s("span"),Ks=n("Privacy"),ma=f(),Ot=s("p"),Qs=n("If your uploaded dataset is private, only you can access it:"),va=f(),qt=s("ol"),Le=s("li"),Xs=n("Login from the command line:"),ga=f(),d($t.$$.fragment),ya=f(),Et=s("ol"),Ae=s("li"),Zs=n("Load the dataset with your authentication token:"),_a=f(),d(bt.$$.fragment),wa=f(),M=s("p"),to=n("Similarly, share a private dataset within your organization by uploading a dataset as "),Ne=s("strong"),eo=n("Private"),ao=n(" to your organization. Then members of the organization can load the dataset like:"),$a=f(),Ft=s("ol"),Se=s("li"),so=n("Login from the command line:"),Ea=f(),d(kt.$$.fragment),ba=f(),Dt=s("ol"),Te=s("li"),oo=n("Load the dataset with your authentication token:"),ka=f(),d(xt.$$.fragment),Da=f(),N=s("h2"),W=s("a"),Ie=s("span"),d(jt.$$.fragment),lo=f(),He=s("span"),ro=n("What's next?"),xa=f(),Gt=s("p"),io=n("Congratulations, you have completed all of the \u{1F917} Datasets tutorials!"),ja=f(),Ut=s("p"),no=n("Throughout these tutorials, you learned the basic steps of using \u{1F917} Datasets. You loaded a dataset from the Hub and learned how to access the information stored inside the dataset. Next, you tokenized the dataset into sequences of integers and formatted it so you can use it with PyTorch or TensorFlow. Then you loaded a metric to evaluate your model\u2019s predictions. Finally, you uploaded a dataset to the Hub without writing a single line of code. This is all you need to get started with \u{1F917} Datasets!"),Pa=f(),$=s("p"),po=n("Now that you have a solid grasp of what \u{1F917} Datasets can do, you can begin formulating your own questions about how you can use it with your dataset. Please take a look at our "),zt=s("a"),uo=n("How-to guides"),fo=n(" for more practical help on solving common use-cases, or read our "),Mt=s("a"),ho=n("Conceptual guides"),co=n(" to deepen your understanding about \u{1F917} Datasets."),this.h()},l(t){const l=Vl('[data-svelte="svelte-1phssyn"]',document.head);E=o(l,"META",{name:!0,content:!0}),l.forEach(e),Ce=h(t),b=o(t,"H1",{class:!0});var Aa=r(b);S=o(Aa,"A",{id:!0,class:!0,href:!0});var Eo=r(S);Bt=o(Eo,"SPAN",{});var bo=r(Bt);c(J.$$.fragment,bo),bo.forEach(e),Eo.forEach(e),Ja=h(Aa),Kt=o(Aa,"SPAN",{});var ko=r(Kt);Ya=p(ko,"Upload a dataset to the Hub"),ko.forEach(e),Aa.forEach(e),Oe=h(t),Pt=o(t,"P",{});var Do=r(Pt);Ba=p(Do,"In the last section of the tutorials, you will learn how to upload a dataset to the Hugging Face Hub. \u{1F917} Datasets aims to provide the largest collection of datasets that anyone can use to train their models. We welcome all dataset contributions from the NLP community, and we have made it very simple for you to add a dataset. Even if you don\u2019t have a lot of developer experience, you can still contribute!"),Do.forEach(e),qe=h(t),T=o(t,"P",{});var Na=r(T);Ka=p(Na,"Start by creating a Hugging Face Hub account at "),Y=o(Na,"A",{href:!0,rel:!0});var xo=r(Y);Qa=p(xo,"hf.co"),xo.forEach(e),Xa=p(Na," if you don\u2019t have one yet."),Na.forEach(e),Fe=h(t),k=o(t,"H2",{class:!0});var Sa=r(k);I=o(Sa,"A",{id:!0,class:!0,href:!0});var jo=r(I);Qt=o(jo,"SPAN",{});var Po=r(Qt);c(B.$$.fragment,Po),Po.forEach(e),jo.forEach(e),Za=h(Sa),Xt=o(Sa,"SPAN",{});var Lo=r(Xt);ts=p(Lo,"Create a repository"),Lo.forEach(e),Sa.forEach(e),Ge=h(t),Lt=o(t,"P",{});var Ao=r(Lt);es=p(Ao,"A repository hosts all your dataset files, including the revision history, making it possible to store more than one dataset version."),Ao.forEach(e),Ue=h(t),H=o(t,"OL",{});var Ta=r(H);K=o(Ta,"LI",{});var Ia=r(K);as=p(Ia,"Click on your profile and select "),Zt=o(Ia,"STRONG",{});var No=r(Zt);ss=p(No,"New Dataset"),No.forEach(e),os=p(Ia," to create a new dataset repository."),Ia.forEach(e),ls=h(Ta),te=o(Ta,"LI",{});var So=r(te);rs=p(So,"Give your dataset a name, and select whether this is a public or private dataset. A public dataset is visible to anyone, whereas a private dataset can only be viewed by you or members of your organization."),So.forEach(e),Ta.forEach(e),ze=h(t),Q=o(t,"DIV",{class:!0});var To=r(Q);ee=o(To,"IMG",{src:!0}),To.forEach(e),Me=h(t),D=o(t,"H2",{class:!0});var Ha=r(D);C=o(Ha,"A",{id:!0,class:!0,href:!0});var Io=r(C);ae=o(Io,"SPAN",{});var Ho=r(ae);c(X.$$.fragment,Ho),Ho.forEach(e),Io.forEach(e),is=h(Ha),se=o(Ha,"SPAN",{});var Co=r(se);ns=p(Co,"Upload your files"),Co.forEach(e),Ha.forEach(e),We=h(t),At=o(t,"OL",{});var Oo=r(At);x=o(Oo,"LI",{});var Wt=r(x);ps=p(Wt,"Once you have created a repository, navigate to the "),oe=o(Wt,"STRONG",{});var qo=r(oe);us=p(qo,"Files and versions"),qo.forEach(e),fs=p(Wt," tab to add a file. Select "),le=o(Wt,"STRONG",{});var Fo=r(le);hs=p(Fo,"Add file"),Fo.forEach(e),ds=p(Wt," to upload your dataset files. We currently support the following data formats: CSV, JSON, JSON lines, text, and Parquet."),Wt.forEach(e),Oo.forEach(e),Ve=h(t),Z=o(t,"DIV",{class:!0});var Go=r(Z);re=o(Go,"IMG",{src:!0}),Go.forEach(e),Re=h(t),tt=o(t,"OL",{start:!0});var Uo=r(tt);ie=o(Uo,"LI",{});var zo=r(ie);cs=p(zo,"Drag and drop your dataset files here, and add a brief descriptive commit message."),zo.forEach(e),Uo.forEach(e),Je=h(t),et=o(t,"DIV",{class:!0});var Mo=r(et);ne=o(Mo,"IMG",{src:!0}),Mo.forEach(e),Ye=h(t),at=o(t,"OL",{start:!0});var Wo=r(at);pe=o(Wo,"LI",{});var Vo=r(pe);ms=p(Vo,"Once you have uploaded your dataset files, they are now stored in your dataset repository."),Vo.forEach(e),Wo.forEach(e),Be=h(t),st=o(t,"DIV",{class:!0});var Ro=r(st);ue=o(Ro,"IMG",{src:!0}),Ro.forEach(e),Ke=h(t),j=o(t,"H2",{class:!0});var Ca=r(j);O=o(Ca,"A",{id:!0,class:!0,href:!0});var Jo=r(O);fe=o(Jo,"SPAN",{});var Yo=r(fe);c(ot.$$.fragment,Yo),Yo.forEach(e),Jo.forEach(e),vs=h(Ca),he=o(Ca,"SPAN",{});var Bo=r(he);gs=p(Bo,"Create a Dataset card"),Bo.forEach(e),Ca.forEach(e),Qe=h(t),Nt=o(t,"P",{});var Ko=r(Nt);ys=p(Ko,"The last step is to create a Dataset card. The Dataset card is essential for helping users find your dataset and understand how to use it responsibly."),Ko.forEach(e),Xe=h(t),St=o(t,"OL",{});var Qo=r(St);lt=o(Qo,"LI",{});var Oa=r(lt);_s=p(Oa,"Click on the "),de=o(Oa,"STRONG",{});var Xo=r(de);ws=p(Xo,"Create Dataset Card"),Xo.forEach(e),$s=p(Oa," to create a Dataset card."),Oa.forEach(e),Qo.forEach(e),Ze=h(t),rt=o(t,"DIV",{class:!0});var Zo=r(rt);ce=o(Zo,"IMG",{src:!0}),Zo.forEach(e),ta=h(t),_=o(t,"OL",{start:!0});var Vt=r(_);me=o(Vt,"LI",{});var tl=r(me);it=o(tl,"P",{});var qa=r(it);Es=p(qa,"Get a quick start with our Dataset card "),nt=o(qa,"A",{href:!0,rel:!0});var el=r(nt);bs=p(el,"template"),el.forEach(e),ks=p(qa," to help you fill out all the relevant fields."),qa.forEach(e),tl.forEach(e),Ds=h(Vt),ve=o(Vt,"LI",{});var al=r(ve);pt=o(al,"P",{});var Fa=r(pt);xs=p(Fa,"The Dataset card uses structured tags to help users discover your dataset on the Hub. Use the "),ut=o(Fa,"A",{href:!0,rel:!0});var sl=r(ut);js=p(sl,"online Datasets Tagging application"),sl.forEach(e),Ps=p(Fa," to help you generate the appropriate tags."),Fa.forEach(e),al.forEach(e),Ls=h(Vt),ge=o(Vt,"LI",{});var ol=r(ge);ye=o(ol,"P",{});var ll=r(ye);As=p(ll,"Copy the generated tags and paste them at the top of your Dataset card, then commit your changes."),ll.forEach(e),ol.forEach(e),Vt.forEach(e),ea=h(t),ft=o(t,"DIV",{class:!0});var rl=r(ft);_e=o(rl,"IMG",{src:!0}),rl.forEach(e),aa=h(t),q=o(t,"P",{});var Ga=r(q);Ns=p(Ga,"For a detailed example of what a good Dataset card should look like, refer to the "),ht=o(Ga,"A",{href:!0,rel:!0});var il=r(ht);Ss=p(il,"CNN DailyMail Dataset card"),il.forEach(e),Ts=p(Ga,"."),Ga.forEach(e),sa=h(t),P=o(t,"H2",{class:!0});var Ua=r(P);F=o(Ua,"A",{id:!0,class:!0,href:!0});var nl=r(F);we=o(nl,"SPAN",{});var pl=r(we);c(dt.$$.fragment,pl),pl.forEach(e),nl.forEach(e),Is=h(Ua),$e=o(Ua,"SPAN",{});var ul=r($e);Hs=p(ul,"Load dataset"),ul.forEach(e),Ua.forEach(e),oa=h(t),Tt=o(t,"P",{});var fl=r(Tt);Cs=p(fl,"Your dataset can now be loaded by anyone in a single line of code!"),fl.forEach(e),la=h(t),c(ct.$$.fragment,t),ra=h(t),L=o(t,"H2",{class:!0});var za=r(L);G=o(za,"A",{id:!0,class:!0,href:!0});var hl=r(G);Ee=o(hl,"SPAN",{});var dl=r(Ee);c(mt.$$.fragment,dl),dl.forEach(e),hl.forEach(e),Os=h(za),be=o(za,"SPAN",{});var cl=r(be);qs=p(cl,"Upload from Python"),cl.forEach(e),za.forEach(e),ia=h(t),w=o(t,"P",{});var Rt=r(w);Fs=p(Rt,"To upload a "),It=o(Rt,"A",{href:!0});var ml=r(It);Gs=p(ml,"DatasetDict"),ml.forEach(e),Us=p(Rt," on the Hugging Face Hub in Python, you can login and use the "),Ht=o(Rt,"A",{href:!0});var vl=r(Ht);zs=p(vl,"DatasetDict.push_to_hub()"),vl.forEach(e),Ms=p(Rt," method:"),Rt.forEach(e),na=h(t),Ct=o(t,"OL",{});var gl=r(Ct);ke=o(gl,"LI",{});var yl=r(ke);Ws=p(yl,"Login from the command line:"),yl.forEach(e),gl.forEach(e),pa=h(t),c(vt.$$.fragment,t),ua=h(t),gt=o(t,"OL",{start:!0});var _l=r(gt);De=o(_l,"LI",{});var wl=r(De);Vs=p(wl,"Upload the dataset:"),wl.forEach(e),_l.forEach(e),fa=h(t),c(yt.$$.fragment,t),ha=h(t),U=o(t,"P",{});var Ma=r(U);Rs=p(Ma,"With the "),xe=o(Ma,"CODE",{});var $l=r(xe);Js=p($l,"private"),$l.forEach(e),Ys=p(Ma," parameter you can choose whether your dataset is public or private:"),Ma.forEach(e),da=h(t),c(_t.$$.fragment,t),ca=h(t),A=o(t,"H2",{class:!0});var Wa=r(A);z=o(Wa,"A",{id:!0,class:!0,href:!0});var El=r(z);je=o(El,"SPAN",{});var bl=r(je);c(wt.$$.fragment,bl),bl.forEach(e),El.forEach(e),Bs=h(Wa),Pe=o(Wa,"SPAN",{});var kl=r(Pe);Ks=p(kl,"Privacy"),kl.forEach(e),Wa.forEach(e),ma=h(t),Ot=o(t,"P",{});var Dl=r(Ot);Qs=p(Dl,"If your uploaded dataset is private, only you can access it:"),Dl.forEach(e),va=h(t),qt=o(t,"OL",{});var xl=r(qt);Le=o(xl,"LI",{});var jl=r(Le);Xs=p(jl,"Login from the command line:"),jl.forEach(e),xl.forEach(e),ga=h(t),c($t.$$.fragment,t),ya=h(t),Et=o(t,"OL",{start:!0});var Pl=r(Et);Ae=o(Pl,"LI",{});var Ll=r(Ae);Zs=p(Ll,"Load the dataset with your authentication token:"),Ll.forEach(e),Pl.forEach(e),_a=h(t),c(bt.$$.fragment,t),wa=h(t),M=o(t,"P",{});var Va=r(M);to=p(Va,"Similarly, share a private dataset within your organization by uploading a dataset as "),Ne=o(Va,"STRONG",{});var Al=r(Ne);eo=p(Al,"Private"),Al.forEach(e),ao=p(Va," to your organization. Then members of the organization can load the dataset like:"),Va.forEach(e),$a=h(t),Ft=o(t,"OL",{});var Nl=r(Ft);Se=o(Nl,"LI",{});var Sl=r(Se);so=p(Sl,"Login from the command line:"),Sl.forEach(e),Nl.forEach(e),Ea=h(t),c(kt.$$.fragment,t),ba=h(t),Dt=o(t,"OL",{start:!0});var Tl=r(Dt);Te=o(Tl,"LI",{});var Il=r(Te);oo=p(Il,"Load the dataset with your authentication token:"),Il.forEach(e),Tl.forEach(e),ka=h(t),c(xt.$$.fragment,t),Da=h(t),N=o(t,"H2",{class:!0});var Ra=r(N);W=o(Ra,"A",{id:!0,class:!0,href:!0});var Hl=r(W);Ie=o(Hl,"SPAN",{});var Cl=r(Ie);c(jt.$$.fragment,Cl),Cl.forEach(e),Hl.forEach(e),lo=h(Ra),He=o(Ra,"SPAN",{});var Ol=r(He);ro=p(Ol,"What's next?"),Ol.forEach(e),Ra.forEach(e),xa=h(t),Gt=o(t,"P",{});var ql=r(Gt);io=p(ql,"Congratulations, you have completed all of the \u{1F917} Datasets tutorials!"),ql.forEach(e),ja=h(t),Ut=o(t,"P",{});var Fl=r(Ut);no=p(Fl,"Throughout these tutorials, you learned the basic steps of using \u{1F917} Datasets. You loaded a dataset from the Hub and learned how to access the information stored inside the dataset. Next, you tokenized the dataset into sequences of integers and formatted it so you can use it with PyTorch or TensorFlow. Then you loaded a metric to evaluate your model\u2019s predictions. Finally, you uploaded a dataset to the Hub without writing a single line of code. This is all you need to get started with \u{1F917} Datasets!"),Fl.forEach(e),Pa=h(t),$=o(t,"P",{});var Jt=r($);po=p(Jt,"Now that you have a solid grasp of what \u{1F917} Datasets can do, you can begin formulating your own questions about how you can use it with your dataset. Please take a look at our "),zt=o(Jt,"A",{href:!0});var Gl=r(zt);uo=p(Gl,"How-to guides"),Gl.forEach(e),fo=p(Jt," for more practical help on solving common use-cases, or read our "),Mt=o(Jt,"A",{href:!0});var Ul=r(Mt);ho=p(Ul,"Conceptual guides"),Ul.forEach(e),co=p(Jt," to deepen your understanding about \u{1F917} Datasets."),Jt.forEach(e),this.h()},h(){u(E,"name","hf:doc:metadata"),u(E,"content",JSON.stringify(Bl)),u(S,"id","upload-a-dataset-to-the-hub"),u(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(S,"href","#upload-a-dataset-to-the-hub"),u(b,"class","relative group"),u(Y,"href","https://huggingface.co/join"),u(Y,"rel","nofollow"),u(I,"id","create-a-repository"),u(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(I,"href","#create-a-repository"),u(k,"class","relative group"),Yt(ee.src,vo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/create_repo.png")||u(ee,"src",vo),u(Q,"class","flex justify-center"),u(C,"id","upload-your-files"),u(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(C,"href","#upload-your-files"),u(D,"class","relative group"),Yt(re.src,go="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/upload_files.png")||u(re,"src",go),u(Z,"class","flex justify-center"),u(tt,"start","2"),Yt(ne.src,yo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/commit_files.png")||u(ne,"src",yo),u(et,"class","flex justify-center"),u(at,"start","3"),Yt(ue.src,_o="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/files_stored.png")||u(ue,"src",_o),u(st,"class","flex justify-center"),u(O,"id","create-a-dataset-card"),u(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(O,"href","#create-a-dataset-card"),u(j,"class","relative group"),Yt(ce.src,wo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/dataset_card.png")||u(ce,"src",wo),u(rt,"class","flex justify-center"),u(nt,"href","https://raw.githubusercontent.com/huggingface/datasets/master/templates/README.md"),u(nt,"rel","nofollow"),u(ut,"href","https://huggingface.co/spaces/huggingface/datasets-tagging"),u(ut,"rel","nofollow"),u(_,"start","2"),Yt(_e.src,$o="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/card_tags.png")||u(_e,"src",$o),u(ft,"class","flex justify-center"),u(ht,"href","https://huggingface.co/datasets/cnn_dailymail"),u(ht,"rel","nofollow"),u(F,"id","load-dataset"),u(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(F,"href","#load-dataset"),u(P,"class","relative group"),u(G,"id","upload-from-python"),u(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(G,"href","#upload-from-python"),u(L,"class","relative group"),u(It,"href","/docs/datasets/pr_4203/en/package_reference/main_classes#datasets.DatasetDict"),u(Ht,"href","/docs/datasets/pr_4203/en/package_reference/main_classes#datasets.DatasetDict.push_to_hub"),u(gt,"start","2"),u(z,"id","privacy"),u(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(z,"href","#privacy"),u(A,"class","relative group"),u(Et,"start","2"),u(Dt,"start","2"),u(W,"id","whats-next"),u(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(W,"href","#whats-next"),u(N,"class","relative group"),u(zt,"href","./how_to"),u(Mt,"href","./about_arrow")},m(t,l){a(document.head,E),i(t,Ce,l),i(t,b,l),a(b,S),a(S,Bt),m(J,Bt,null),a(b,Ja),a(b,Kt),a(Kt,Ya),i(t,Oe,l),i(t,Pt,l),a(Pt,Ba),i(t,qe,l),i(t,T,l),a(T,Ka),a(T,Y),a(Y,Qa),a(T,Xa),i(t,Fe,l),i(t,k,l),a(k,I),a(I,Qt),m(B,Qt,null),a(k,Za),a(k,Xt),a(Xt,ts),i(t,Ge,l),i(t,Lt,l),a(Lt,es),i(t,Ue,l),i(t,H,l),a(H,K),a(K,as),a(K,Zt),a(Zt,ss),a(K,os),a(H,ls),a(H,te),a(te,rs),i(t,ze,l),i(t,Q,l),a(Q,ee),i(t,Me,l),i(t,D,l),a(D,C),a(C,ae),m(X,ae,null),a(D,is),a(D,se),a(se,ns),i(t,We,l),i(t,At,l),a(At,x),a(x,ps),a(x,oe),a(oe,us),a(x,fs),a(x,le),a(le,hs),a(x,ds),i(t,Ve,l),i(t,Z,l),a(Z,re),i(t,Re,l),i(t,tt,l),a(tt,ie),a(ie,cs),i(t,Je,l),i(t,et,l),a(et,ne),i(t,Ye,l),i(t,at,l),a(at,pe),a(pe,ms),i(t,Be,l),i(t,st,l),a(st,ue),i(t,Ke,l),i(t,j,l),a(j,O),a(O,fe),m(ot,fe,null),a(j,vs),a(j,he),a(he,gs),i(t,Qe,l),i(t,Nt,l),a(Nt,ys),i(t,Xe,l),i(t,St,l),a(St,lt),a(lt,_s),a(lt,de),a(de,ws),a(lt,$s),i(t,Ze,l),i(t,rt,l),a(rt,ce),i(t,ta,l),i(t,_,l),a(_,me),a(me,it),a(it,Es),a(it,nt),a(nt,bs),a(it,ks),a(_,Ds),a(_,ve),a(ve,pt),a(pt,xs),a(pt,ut),a(ut,js),a(pt,Ps),a(_,Ls),a(_,ge),a(ge,ye),a(ye,As),i(t,ea,l),i(t,ft,l),a(ft,_e),i(t,aa,l),i(t,q,l),a(q,Ns),a(q,ht),a(ht,Ss),a(q,Ts),i(t,sa,l),i(t,P,l),a(P,F),a(F,we),m(dt,we,null),a(P,Is),a(P,$e),a($e,Hs),i(t,oa,l),i(t,Tt,l),a(Tt,Cs),i(t,la,l),m(ct,t,l),i(t,ra,l),i(t,L,l),a(L,G),a(G,Ee),m(mt,Ee,null),a(L,Os),a(L,be),a(be,qs),i(t,ia,l),i(t,w,l),a(w,Fs),a(w,It),a(It,Gs),a(w,Us),a(w,Ht),a(Ht,zs),a(w,Ms),i(t,na,l),i(t,Ct,l),a(Ct,ke),a(ke,Ws),i(t,pa,l),m(vt,t,l),i(t,ua,l),i(t,gt,l),a(gt,De),a(De,Vs),i(t,fa,l),m(yt,t,l),i(t,ha,l),i(t,U,l),a(U,Rs),a(U,xe),a(xe,Js),a(U,Ys),i(t,da,l),m(_t,t,l),i(t,ca,l),i(t,A,l),a(A,z),a(z,je),m(wt,je,null),a(A,Bs),a(A,Pe),a(Pe,Ks),i(t,ma,l),i(t,Ot,l),a(Ot,Qs),i(t,va,l),i(t,qt,l),a(qt,Le),a(Le,Xs),i(t,ga,l),m($t,t,l),i(t,ya,l),i(t,Et,l),a(Et,Ae),a(Ae,Zs),i(t,_a,l),m(bt,t,l),i(t,wa,l),i(t,M,l),a(M,to),a(M,Ne),a(Ne,eo),a(M,ao),i(t,$a,l),i(t,Ft,l),a(Ft,Se),a(Se,so),i(t,Ea,l),m(kt,t,l),i(t,ba,l),i(t,Dt,l),a(Dt,Te),a(Te,oo),i(t,ka,l),m(xt,t,l),i(t,Da,l),i(t,N,l),a(N,W),a(W,Ie),m(jt,Ie,null),a(N,lo),a(N,He),a(He,ro),i(t,xa,l),i(t,Gt,l),a(Gt,io),i(t,ja,l),i(t,Ut,l),a(Ut,no),i(t,Pa,l),i(t,$,l),a($,po),a($,zt),a(zt,uo),a($,fo),a($,Mt),a(Mt,ho),a($,co),La=!0},p:Rl,i(t){La||(v(J.$$.fragment,t),v(B.$$.fragment,t),v(X.$$.fragment,t),v(ot.$$.fragment,t),v(dt.$$.fragment,t),v(ct.$$.fragment,t),v(mt.$$.fragment,t),v(vt.$$.fragment,t),v(yt.$$.fragment,t),v(_t.$$.fragment,t),v(wt.$$.fragment,t),v($t.$$.fragment,t),v(bt.$$.fragment,t),v(kt.$$.fragment,t),v(xt.$$.fragment,t),v(jt.$$.fragment,t),La=!0)},o(t){g(J.$$.fragment,t),g(B.$$.fragment,t),g(X.$$.fragment,t),g(ot.$$.fragment,t),g(dt.$$.fragment,t),g(ct.$$.fragment,t),g(mt.$$.fragment,t),g(vt.$$.fragment,t),g(yt.$$.fragment,t),g(_t.$$.fragment,t),g(wt.$$.fragment,t),g($t.$$.fragment,t),g(bt.$$.fragment,t),g(kt.$$.fragment,t),g(xt.$$.fragment,t),g(jt.$$.fragment,t),La=!1},d(t){e(E),t&&e(Ce),t&&e(b),y(J),t&&e(Oe),t&&e(Pt),t&&e(qe),t&&e(T),t&&e(Fe),t&&e(k),y(B),t&&e(Ge),t&&e(Lt),t&&e(Ue),t&&e(H),t&&e(ze),t&&e(Q),t&&e(Me),t&&e(D),y(X),t&&e(We),t&&e(At),t&&e(Ve),t&&e(Z),t&&e(Re),t&&e(tt),t&&e(Je),t&&e(et),t&&e(Ye),t&&e(at),t&&e(Be),t&&e(st),t&&e(Ke),t&&e(j),y(ot),t&&e(Qe),t&&e(Nt),t&&e(Xe),t&&e(St),t&&e(Ze),t&&e(rt),t&&e(ta),t&&e(_),t&&e(ea),t&&e(ft),t&&e(aa),t&&e(q),t&&e(sa),t&&e(P),y(dt),t&&e(oa),t&&e(Tt),t&&e(la),y(ct,t),t&&e(ra),t&&e(L),y(mt),t&&e(ia),t&&e(w),t&&e(na),t&&e(Ct),t&&e(pa),y(vt,t),t&&e(ua),t&&e(gt),t&&e(fa),y(yt,t),t&&e(ha),t&&e(U),t&&e(da),y(_t,t),t&&e(ca),t&&e(A),y(wt),t&&e(ma),t&&e(Ot),t&&e(va),t&&e(qt),t&&e(ga),y($t,t),t&&e(ya),t&&e(Et),t&&e(_a),y(bt,t),t&&e(wa),t&&e(M),t&&e($a),t&&e(Ft),t&&e(Ea),y(kt,t),t&&e(ba),t&&e(Dt),t&&e(ka),y(xt,t),t&&e(Da),t&&e(N),y(jt),t&&e(xa),t&&e(Gt),t&&e(ja),t&&e(Ut),t&&e(Pa),t&&e($)}}}const Bl={local:"upload-a-dataset-to-the-hub",sections:[{local:"create-a-repository",title:"Create a repository"},{local:"upload-your-files",title:"Upload your files"},{local:"create-a-dataset-card",title:"Create a Dataset card"},{local:"load-dataset",title:"Load dataset"},{local:"upload-from-python",title:"Upload from Python"},{local:"privacy",title:"Privacy"},{local:"whats-next",title:"What's next?"}],title:"Upload a dataset to the Hub"};function Kl(mo){return Jl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tr extends zl{constructor(E){super();Ml(this,E,Kl,Yl,Wl,{})}}export{tr as default,Bl as metadata};
