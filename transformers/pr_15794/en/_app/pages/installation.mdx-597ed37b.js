import{S as Ai,i as Fi,s as Oi,e as n,k as h,w as m,t as r,M as Si,c as s,d as t,m as p,a as i,x as c,h as a,b as d,F as o,g as f,y as u,L as xi,q as v,o as w,B as y}from"../chunks/vendor-22ad994f.js";import{I as Y}from"../chunks/IconCopyLink-2eb9a001.js";import{C as b}from"../chunks/CodeBlock-03069293.js";import"../chunks/CopyButton-f539c482.js";function Di(lr){let k,Be,g,P,$t,me,rr,gt,ar,$o,Ge,nr,go,C,sr,ce,ir,fr,ue,hr,pr,To,Ve,dr,Po,N,z,Tt,ve,mr,Pt,cr,ko,T,ur,we,vr,wr,ye,yr,_r,_e,Er,br,Co,Xe,$r,Ao,Ee,Fo,Je,gr,Oo,be,So,Ke,Tr,xo,$e,Do,Qe,Pr,Io,ge,No,Ze,kr,Ro,Te,Ho,et,Cr,Mo,Pe,Lo,tt,Ar,jo,R,B,kt,ke,Fr,Ct,Or,Wo,G,Sr,At,xr,Dr,qo,Ce,Uo,V,Ir,Ft,Nr,Rr,Yo,A,Hr,Ot,Mr,Lr,Ae,jr,Wr,zo,ot,qr,Bo,Fe,Go,lt,Ur,Vo,H,X,St,Oe,Yr,xt,zr,Xo,J,Br,Dt,Gr,Vr,Jo,Se,Ko,rt,Xr,Qo,xe,Zo,K,Jr,It,Kr,Qr,el,F,Zr,Nt,ea,ta,Rt,oa,la,tl,O,ra,Ht,aa,na,Mt,sa,ia,ol,De,ll,Q,fa,Lt,ha,pa,rl,M,Z,jt,Ie,da,Wt,ma,al,ee,ca,qt,ua,va,nl,at,wa,sl,Ne,il,nt,ya,fl,L,te,Ut,Re,_a,Yt,Ea,hl,_,ba,zt,$a,ga,Bt,Ta,Pa,Gt,ka,Ca,Vt,Aa,Fa,pl,S,st,Oa,Xt,Sa,xa,oe,Da,Jt,Ia,Na,Kt,Ra,Ha,it,Ma,Qt,La,dl,le,ja,Zt,Wa,qa,ml,$,eo,Ua,Ya,to,za,Ba,oo,Ga,Va,lo,Xa,Ja,cl,j,re,ro,He,Ka,ao,Qa,ul,ft,Za,vl,ae,en,no,tn,on,wl,ne,ln,so,rn,an,yl,ht,nn,_l,pt,sn,El,Me,bl,dt,fn,$l,Le,gl,mt,hn,Tl,W,se,io,je,pn,fo,dn,Pl,ct,mn,kl,x,cn,ho,un,vn,po,wn,yn,Cl,ie,We,_n,mo,En,bn,$n,qe,gn,co,Tn,Pn,Al,fe,kn,Ue,Cn,An,Fl,q,he,uo,Ye,Fn,vo,On,Ol,pe,Sn,ze,xn,Dn,Sl,E,In,wo,Nn,Rn,yo,Hn,Mn,_o,Ln,jn,Eo,Wn,qn,xl,ut,Un,Dl;return me=new Y({}),ve=new Y({}),Ee=new b({props:{code:"pip install transformers,",highlighted:"pip install transformers"}}),be=new b({props:{code:"pip install transformers[torch],",highlighted:"pip install transformers[torch]"}}),$e=new b({props:{code:"pip install transformers[tf-cpu],",highlighted:"pip install transformers[tf-cpu]"}}),ge=new b({props:{code:"pip install transformers[flax],",highlighted:"pip install transformers[flax]"}}),Te=new b({props:{code:`python -c "from transformers import pipeline; print(pipeline('sentiment-analysis')('we love you'))",`,highlighted:'python -c <span class="hljs-string">&quot;from transformers import pipeline; print(pipeline(&#x27;sentiment-analysis&#x27;)(&#x27;we love you&#x27;))&quot;</span>'}}),Pe=new b({props:{code:"[{'label': 'POSITIVE', 'score': 0.9998704791069031}],",highlighted:'[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;POSITIVE&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: 0.9998704791069031}]'}}),ke=new Y({}),Ce=new b({props:{code:"pip install git+https://github.com/huggingface/transformers,",highlighted:"pip install git+https://github.com/huggingface/transformers"}}),Fe=new b({props:{code:`python -c "from transformers import pipeline; print(pipeline('sentiment-analysis')('I hate you'))",`,highlighted:'python -c <span class="hljs-string">&quot;from transformers import pipeline; print(pipeline(&#x27;sentiment-analysis&#x27;)(&#x27;I hate you&#x27;))&quot;</span>'}}),Oe=new Y({}),Se=new b({props:{code:`git clone https://github.com/huggingface/transformers.git
cd transformers
pip install -e .,`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/huggingface/transformers.git
<span class="hljs-built_in">cd</span> transformers
pip install -e .`}}),xe=new b({props:{code:"~/anaconda3/envs/main/lib/python3.7/site-packages/,",highlighted:'~<span class="hljs-regexp">/anaconda3/</span>envs<span class="hljs-regexp">/main/</span>lib<span class="hljs-regexp">/python3.7/</span>site-packages/'}}),De=new b({props:{code:`cd ~/transformers/
git pull,`,highlighted:`cd ~<span class="hljs-regexp">/transformers/</span>
git pull`}}),Ie=new Y({}),Ne=new b({props:{code:"conda install -c huggingface transformers,",highlighted:'conda <span class="hljs-keyword">install</span> -c huggingface transformers'}}),Re=new Y({}),He=new Y({}),Me=new b({props:{code:"python examples/pytorch/translation/run_translation.py --model_name_or_path t5-small --dataset_name wmt16 --dataset_config ro-en ...,",highlighted:'python examples/pytorch/translation/run_translation.py <span class="hljs-params">--model_name_or_path</span> t5-small <span class="hljs-params">--dataset_name</span> wmt16 <span class="hljs-params">--dataset_config</span> ro-en <span class="hljs-string">...</span>'}}),Le=new b({props:{code:`HF_DATASETS_OFFLINE=1 TRANSFORMERS_OFFLINE=1 \\
python examples/pytorch/translation/run_translation.py --model_name_or_path t5-small --dataset_name wmt16 --dataset_config ro-en ...,`,highlighted:`HF_DATASETS_OFFLINE=1 TRANSFORMERS_OFFLINE=1 \\
python examples/pytorch/translation/run_translation.py <span class="hljs-params">--model_name_or_path</span> t5-small <span class="hljs-params">--dataset_name</span> wmt16 <span class="hljs-params">--dataset_config</span> ro-en <span class="hljs-string">...</span>`}}),je=new Y({}),Ye=new Y({}),{c(){k=n("meta"),Be=h(),g=n("h1"),P=n("a"),$t=n("span"),m(me.$$.fragment),rr=h(),gt=n("span"),ar=r("Installation"),$o=h(),Ge=n("p"),nr=r("\u{1F917} Transformers is tested on Python 3.6+, and PyTorch 1.1.0+ or TensorFlow 2.0+."),go=h(),C=n("p"),sr=r("You should install \u{1F917} Transformers in a "),ce=n("a"),ir=r("virtual environment"),fr=r(`. If you\u2019re
unfamiliar with Python virtual environments, check out the `),ue=n("a"),hr=r("user guide"),pr=r(`. Create a virtual environment with the version of Python you\u2019re going
to use and activate it.`),To=h(),Ve=n("p"),dr=r(`Now, if you want to use \u{1F917} Transformers, you can install it with pip. If you\u2019d like to play with the examples, you
must install it from source.`),Po=h(),N=n("h2"),z=n("a"),Tt=n("span"),m(ve.$$.fragment),mr=h(),Pt=n("span"),cr=r("Installation with pip"),ko=h(),T=n("p"),ur=r(`First you need to install one of, or both, TensorFlow 2.0 and PyTorch.
Please refer to `),we=n("a"),vr=r("TensorFlow installation page"),wr=r(`,
`),ye=n("a"),yr=r("PyTorch installation page"),_r=r(` and/or
`),_e=n("a"),Er=r("Flax installation page"),br=r(`
regarding the specific install command for your platform.`),Co=h(),Xe=n("p"),$r=r("When TensorFlow 2.0 and/or PyTorch has been installed, \u{1F917} Transformers can be installed using pip as follows:"),Ao=h(),m(Ee.$$.fragment),Fo=h(),Je=n("p"),gr=r("Alternatively, for CPU-support only, you can install \u{1F917} Transformers and PyTorch in one line with:"),Oo=h(),m(be.$$.fragment),So=h(),Ke=n("p"),Tr=r("or \u{1F917} Transformers and TensorFlow 2.0 in one line with:"),xo=h(),m($e.$$.fragment),Do=h(),Qe=n("p"),Pr=r("or \u{1F917} Transformers and Flax in one line with:"),Io=h(),m(ge.$$.fragment),No=h(),Ze=n("p"),kr=r("To check \u{1F917} Transformers is properly installed, run the following command:"),Ro=h(),m(Te.$$.fragment),Ho=h(),et=n("p"),Cr=r("It should download a pretrained model then print something like"),Mo=h(),m(Pe.$$.fragment),Lo=h(),tt=n("p"),Ar=r("(Note that TensorFlow will print additional stuff before that last statement.)"),jo=h(),R=n("h2"),B=n("a"),kt=n("span"),m(ke.$$.fragment),Fr=h(),Ct=n("span"),Or=r("Installing from source"),Wo=h(),G=n("p"),Sr=r("Here is how to quickly install "),At=n("code"),xr=r("transformers"),Dr=r(" from source:"),qo=h(),m(Ce.$$.fragment),Uo=h(),V=n("p"),Ir=r("Note that this will install not the latest released version, but the bleeding edge "),Ft=n("code"),Nr=r("master"),Rr=r(" version, which you may want to use in case a bug has been fixed since the last official release and a new release hasn\u2019t been yet rolled out."),Yo=h(),A=n("p"),Hr=r("While we strive to keep "),Ot=n("code"),Mr=r("master"),Lr=r(" operational at all times, if you notice some issues, they usually get fixed within a few hours or a day and you\u2019re more than welcome to help us detect any problems by opening an "),Ae=n("a"),jr=r("Issue"),Wr=r(" and this way, things will get fixed even sooner."),zo=h(),ot=n("p"),qr=r("Again, you can run:"),Bo=h(),m(Fe.$$.fragment),Go=h(),lt=n("p"),Ur=r("to check \u{1F917} Transformers is properly installed."),Vo=h(),H=n("h2"),X=n("a"),St=n("span"),m(Oe.$$.fragment),Yr=h(),xt=n("span"),zr=r("Editable install"),Xo=h(),J=n("p"),Br=r("If you want to constantly use the bleeding edge "),Dt=n("code"),Gr=r("master"),Vr=r(" version of the source code, or if you want to contribute to the library and need to test the changes in the code you\u2019re making, you will need an editable install. This is done by cloning the repository and installing with the following commands:"),Jo=h(),m(Se.$$.fragment),Ko=h(),rt=n("p"),Xr=r("This command performs a magical link between the folder you cloned the repository to and your python library paths, and it\u2019ll look inside this folder in addition to the normal library-wide paths. So if normally your python packages get installed into:"),Qo=h(),m(xe.$$.fragment),Zo=h(),K=n("p"),Jr=r("now this editable install will reside where you clone the folder to, e.g. "),It=n("code"),Kr=r("~/transformers/"),Qr=r(" and python will search it too."),el=h(),F=n("p"),Zr=r("Do note that you have to keep that "),Nt=n("code"),ea=r("transformers"),ta=r(" folder around and not delete it to continue using the  "),Rt=n("code"),oa=r("transformers"),la=r(" library."),tl=h(),O=n("p"),ra=r("Now, let\u2019s get to the real benefit of this installation approach. Say, you saw some new feature has been just committed into "),Ht=n("code"),aa=r("master"),na=r(". If you have already performed all the steps above, to update your transformers to include all the latest commits, all you need to do is to "),Mt=n("code"),sa=r("cd"),ia=r(" into that cloned repository folder and update the clone to the latest version:"),ol=h(),m(De.$$.fragment),ll=h(),Q=n("p"),fa=r("There is nothing else to do. Your python environment will find the bleeding edge version of "),Lt=n("code"),ha=r("transformers"),pa=r(" on the next run."),rl=h(),M=n("h2"),Z=n("a"),jt=n("span"),m(Ie.$$.fragment),da=h(),Wt=n("span"),ma=r("With conda"),al=h(),ee=n("p"),ca=r("Since Transformers version v4.0.0, we now have a conda channel: "),qt=n("code"),ua=r("huggingface"),va=r("."),nl=h(),at=n("p"),wa=r("\u{1F917} Transformers can be installed using conda as follows:"),sl=h(),m(Ne.$$.fragment),il=h(),nt=n("p"),ya=r("Follow the installation pages of TensorFlow, PyTorch or Flax to see how to install them with conda."),fl=h(),L=n("h2"),te=n("a"),Ut=n("span"),m(Re.$$.fragment),_a=h(),Yt=n("span"),Ea=r("Caching models"),hl=h(),_=n("p"),ba=r(`This library provides pretrained models that will be downloaded and cached locally. Unless you specify a location with
`),zt=n("code"),$a=r("cache_dir=..."),ga=r(" when you use methods like "),Bt=n("code"),Ta=r("from_pretrained"),Pa=r(`, these models will automatically be downloaded in the
folder given by the shell environment variable `),Gt=n("code"),ka=r("TRANSFORMERS_CACHE"),Ca=r(`. The default value for it will be the Hugging
Face cache home followed by `),Vt=n("code"),Aa=r("/transformers/"),Fa=r(". This is (by order of priority):"),pl=h(),S=n("ul"),st=n("li"),Oa=r("shell environment variable "),Xt=n("code"),Sa=r("HF_HOME"),xa=h(),oe=n("li"),Da=r("shell environment variable "),Jt=n("code"),Ia=r("XDG_CACHE_HOME"),Na=r(" + "),Kt=n("code"),Ra=r("/huggingface/"),Ha=h(),it=n("li"),Ma=r("default: "),Qt=n("code"),La=r("~/.cache/huggingface/"),dl=h(),le=n("p"),ja=r(`So if you don\u2019t have any specific environment variable set, the cache directory will be at
`),Zt=n("code"),Wa=r("~/.cache/huggingface/transformers/"),qa=r("."),ml=h(),$=n("p"),eo=n("strong"),Ua=r("Note:"),Ya=r(` If you have set a shell environment variable for one of the predecessors of this library
(`),to=n("code"),za=r("PYTORCH_TRANSFORMERS_CACHE"),Ba=r(" or "),oo=n("code"),Ga=r("PYTORCH_PRETRAINED_BERT_CACHE"),Va=r(`), those will be used if there is no shell
environment variable for `),lo=n("code"),Xa=r("TRANSFORMERS_CACHE"),Ja=r("."),cl=h(),j=n("h3"),re=n("a"),ro=n("span"),m(He.$$.fragment),Ka=h(),ao=n("span"),Qa=r("Offline mode"),ul=h(),ft=n("p"),Za=r("It\u2019s possible to run \u{1F917} Transformers in a firewalled or a no-network environment."),vl=h(),ae=n("p"),en=r("Setting environment variable "),no=n("code"),tn=r("TRANSFORMERS_OFFLINE=1"),on=r(" will tell \u{1F917} Transformers to use local files only and will not try to look things up."),wl=h(),ne=n("p"),ln=r("Most likely you may want to couple this with "),so=n("code"),rn=r("HF_DATASETS_OFFLINE=1"),an=r(" that performs the same for \u{1F917} Datasets if you\u2019re using the latter."),yl=h(),ht=n("p"),nn=r("Here is an example of how this can be used on a filesystem that is shared between a normally networked and a firewalled to the external world instances."),_l=h(),pt=n("p"),sn=r("On the instance with the normal network run your program which will download and cache models (and optionally datasets if you use \u{1F917} Datasets). For example:"),El=h(),m(Me.$$.fragment),bl=h(),dt=n("p"),fn=r("and then with the same filesystem you can now run the same program on a firewalled instance:"),$l=h(),m(Le.$$.fragment),gl=h(),mt=n("p"),hn=r("and it should succeed without any hanging waiting to timeout."),Tl=h(),W=n("h4"),se=n("a"),io=n("span"),m(je.$$.fragment),pn=h(),fo=n("span"),dn=r("Fetching models and tokenizers to use offline"),Pl=h(),ct=n("p"),mn=r(`When running a script the first time like mentioned above, the downloaded files will be cached for future reuse.
However, it is also possible to download files and point to their local path instead.`),kl=h(),x=n("p"),cn=r(`Downloading files can be done through the Web Interface by clicking on the \u201CDownload\u201D button, but it can also be handled
programmatically using the `),ho=n("code"),un=r("huggingface_hub"),vn=r(" library that is a dependency to "),po=n("code"),wn=r("transformers"),yn=r(":"),Cl=h(),ie=n("ul"),We=n("li"),_n=r("Using "),mo=n("code"),En=r("snapshot_download"),bn=r(" to download an entire repository"),$n=h(),qe=n("li"),gn=r("Using "),co=n("code"),Tn=r("hf_hub_download"),Pn=r(" to download a specific file"),Al=h(),fe=n("p"),kn=r(`See the reference for these methods in the huggingface_hub
`),Ue=n("a"),Cn=r("documentation"),An=r("."),Fl=h(),q=n("h2"),he=n("a"),uo=n("span"),m(Ye.$$.fragment),Fn=h(),vo=n("span"),On=r("Do you want to run a Transformer model on a mobile device?"),Ol=h(),pe=n("p"),Sn=r("You should check out our "),ze=n("a"),xn=r("swift-coreml-transformers"),Dn=r(" repo."),Sl=h(),E=n("p"),In=r("It contains a set of tools to convert PyTorch or TensorFlow 2.0 trained Transformer models (currently contains "),wo=n("code"),Nn=r("GPT-2"),Rn=r(`,
`),yo=n("code"),Hn=r("DistilGPT-2"),Mn=r(", "),_o=n("code"),Ln=r("BERT"),jn=r(", and "),Eo=n("code"),Wn=r("DistilBERT"),qn=r(") to CoreML models that run on iOS devices."),xl=h(),ut=n("p"),Un=r(`At some point in the future, you\u2019ll be able to seamlessly move from pretraining or fine-tuning models in PyTorch or
TensorFlow 2.0 to productizing them in CoreML, or prototype a model or an app in CoreML then research its
hyperparameters or architecture from PyTorch or TensorFlow 2.0. Super exciting!`),this.h()},l(e){const l=Si('[data-svelte="svelte-1phssyn"]',document.head);k=s(l,"META",{name:!0,content:!0}),l.forEach(t),Be=p(e),g=s(e,"H1",{class:!0});var Il=i(g);P=s(Il,"A",{id:!0,class:!0,href:!0});var Bn=i(P);$t=s(Bn,"SPAN",{});var Gn=i($t);c(me.$$.fragment,Gn),Gn.forEach(t),Bn.forEach(t),rr=p(Il),gt=s(Il,"SPAN",{});var Vn=i(gt);ar=a(Vn,"Installation"),Vn.forEach(t),Il.forEach(t),$o=p(e),Ge=s(e,"P",{});var Xn=i(Ge);nr=a(Xn,"\u{1F917} Transformers is tested on Python 3.6+, and PyTorch 1.1.0+ or TensorFlow 2.0+."),Xn.forEach(t),go=p(e),C=s(e,"P",{});var vt=i(C);sr=a(vt,"You should install \u{1F917} Transformers in a "),ce=s(vt,"A",{href:!0,rel:!0});var Jn=i(ce);ir=a(Jn,"virtual environment"),Jn.forEach(t),fr=a(vt,`. If you\u2019re
unfamiliar with Python virtual environments, check out the `),ue=s(vt,"A",{href:!0,rel:!0});var Kn=i(ue);hr=a(Kn,"user guide"),Kn.forEach(t),pr=a(vt,`. Create a virtual environment with the version of Python you\u2019re going
to use and activate it.`),vt.forEach(t),To=p(e),Ve=s(e,"P",{});var Qn=i(Ve);dr=a(Qn,`Now, if you want to use \u{1F917} Transformers, you can install it with pip. If you\u2019d like to play with the examples, you
must install it from source.`),Qn.forEach(t),Po=p(e),N=s(e,"H2",{class:!0});var Nl=i(N);z=s(Nl,"A",{id:!0,class:!0,href:!0});var Zn=i(z);Tt=s(Zn,"SPAN",{});var es=i(Tt);c(ve.$$.fragment,es),es.forEach(t),Zn.forEach(t),mr=p(Nl),Pt=s(Nl,"SPAN",{});var ts=i(Pt);cr=a(ts,"Installation with pip"),ts.forEach(t),Nl.forEach(t),ko=p(e),T=s(e,"P",{});var de=i(T);ur=a(de,`First you need to install one of, or both, TensorFlow 2.0 and PyTorch.
Please refer to `),we=s(de,"A",{href:!0,rel:!0});var os=i(we);vr=a(os,"TensorFlow installation page"),os.forEach(t),wr=a(de,`,
`),ye=s(de,"A",{href:!0,rel:!0});var ls=i(ye);yr=a(ls,"PyTorch installation page"),ls.forEach(t),_r=a(de,` and/or
`),_e=s(de,"A",{href:!0,rel:!0});var rs=i(_e);Er=a(rs,"Flax installation page"),rs.forEach(t),br=a(de,`
regarding the specific install command for your platform.`),de.forEach(t),Co=p(e),Xe=s(e,"P",{});var as=i(Xe);$r=a(as,"When TensorFlow 2.0 and/or PyTorch has been installed, \u{1F917} Transformers can be installed using pip as follows:"),as.forEach(t),Ao=p(e),c(Ee.$$.fragment,e),Fo=p(e),Je=s(e,"P",{});var ns=i(Je);gr=a(ns,"Alternatively, for CPU-support only, you can install \u{1F917} Transformers and PyTorch in one line with:"),ns.forEach(t),Oo=p(e),c(be.$$.fragment,e),So=p(e),Ke=s(e,"P",{});var ss=i(Ke);Tr=a(ss,"or \u{1F917} Transformers and TensorFlow 2.0 in one line with:"),ss.forEach(t),xo=p(e),c($e.$$.fragment,e),Do=p(e),Qe=s(e,"P",{});var is=i(Qe);Pr=a(is,"or \u{1F917} Transformers and Flax in one line with:"),is.forEach(t),Io=p(e),c(ge.$$.fragment,e),No=p(e),Ze=s(e,"P",{});var fs=i(Ze);kr=a(fs,"To check \u{1F917} Transformers is properly installed, run the following command:"),fs.forEach(t),Ro=p(e),c(Te.$$.fragment,e),Ho=p(e),et=s(e,"P",{});var hs=i(et);Cr=a(hs,"It should download a pretrained model then print something like"),hs.forEach(t),Mo=p(e),c(Pe.$$.fragment,e),Lo=p(e),tt=s(e,"P",{});var ps=i(tt);Ar=a(ps,"(Note that TensorFlow will print additional stuff before that last statement.)"),ps.forEach(t),jo=p(e),R=s(e,"H2",{class:!0});var Rl=i(R);B=s(Rl,"A",{id:!0,class:!0,href:!0});var ds=i(B);kt=s(ds,"SPAN",{});var ms=i(kt);c(ke.$$.fragment,ms),ms.forEach(t),ds.forEach(t),Fr=p(Rl),Ct=s(Rl,"SPAN",{});var cs=i(Ct);Or=a(cs,"Installing from source"),cs.forEach(t),Rl.forEach(t),Wo=p(e),G=s(e,"P",{});var Hl=i(G);Sr=a(Hl,"Here is how to quickly install "),At=s(Hl,"CODE",{});var us=i(At);xr=a(us,"transformers"),us.forEach(t),Dr=a(Hl," from source:"),Hl.forEach(t),qo=p(e),c(Ce.$$.fragment,e),Uo=p(e),V=s(e,"P",{});var Ml=i(V);Ir=a(Ml,"Note that this will install not the latest released version, but the bleeding edge "),Ft=s(Ml,"CODE",{});var vs=i(Ft);Nr=a(vs,"master"),vs.forEach(t),Rr=a(Ml," version, which you may want to use in case a bug has been fixed since the last official release and a new release hasn\u2019t been yet rolled out."),Ml.forEach(t),Yo=p(e),A=s(e,"P",{});var wt=i(A);Hr=a(wt,"While we strive to keep "),Ot=s(wt,"CODE",{});var ws=i(Ot);Mr=a(ws,"master"),ws.forEach(t),Lr=a(wt," operational at all times, if you notice some issues, they usually get fixed within a few hours or a day and you\u2019re more than welcome to help us detect any problems by opening an "),Ae=s(wt,"A",{href:!0,rel:!0});var ys=i(Ae);jr=a(ys,"Issue"),ys.forEach(t),Wr=a(wt," and this way, things will get fixed even sooner."),wt.forEach(t),zo=p(e),ot=s(e,"P",{});var _s=i(ot);qr=a(_s,"Again, you can run:"),_s.forEach(t),Bo=p(e),c(Fe.$$.fragment,e),Go=p(e),lt=s(e,"P",{});var Es=i(lt);Ur=a(Es,"to check \u{1F917} Transformers is properly installed."),Es.forEach(t),Vo=p(e),H=s(e,"H2",{class:!0});var Ll=i(H);X=s(Ll,"A",{id:!0,class:!0,href:!0});var bs=i(X);St=s(bs,"SPAN",{});var $s=i(St);c(Oe.$$.fragment,$s),$s.forEach(t),bs.forEach(t),Yr=p(Ll),xt=s(Ll,"SPAN",{});var gs=i(xt);zr=a(gs,"Editable install"),gs.forEach(t),Ll.forEach(t),Xo=p(e),J=s(e,"P",{});var jl=i(J);Br=a(jl,"If you want to constantly use the bleeding edge "),Dt=s(jl,"CODE",{});var Ts=i(Dt);Gr=a(Ts,"master"),Ts.forEach(t),Vr=a(jl," version of the source code, or if you want to contribute to the library and need to test the changes in the code you\u2019re making, you will need an editable install. This is done by cloning the repository and installing with the following commands:"),jl.forEach(t),Jo=p(e),c(Se.$$.fragment,e),Ko=p(e),rt=s(e,"P",{});var Ps=i(rt);Xr=a(Ps,"This command performs a magical link between the folder you cloned the repository to and your python library paths, and it\u2019ll look inside this folder in addition to the normal library-wide paths. So if normally your python packages get installed into:"),Ps.forEach(t),Qo=p(e),c(xe.$$.fragment,e),Zo=p(e),K=s(e,"P",{});var Wl=i(K);Jr=a(Wl,"now this editable install will reside where you clone the folder to, e.g. "),It=s(Wl,"CODE",{});var ks=i(It);Kr=a(ks,"~/transformers/"),ks.forEach(t),Qr=a(Wl," and python will search it too."),Wl.forEach(t),el=p(e),F=s(e,"P",{});var yt=i(F);Zr=a(yt,"Do note that you have to keep that "),Nt=s(yt,"CODE",{});var Cs=i(Nt);ea=a(Cs,"transformers"),Cs.forEach(t),ta=a(yt," folder around and not delete it to continue using the  "),Rt=s(yt,"CODE",{});var As=i(Rt);oa=a(As,"transformers"),As.forEach(t),la=a(yt," library."),yt.forEach(t),tl=p(e),O=s(e,"P",{});var _t=i(O);ra=a(_t,"Now, let\u2019s get to the real benefit of this installation approach. Say, you saw some new feature has been just committed into "),Ht=s(_t,"CODE",{});var Fs=i(Ht);aa=a(Fs,"master"),Fs.forEach(t),na=a(_t,". If you have already performed all the steps above, to update your transformers to include all the latest commits, all you need to do is to "),Mt=s(_t,"CODE",{});var Os=i(Mt);sa=a(Os,"cd"),Os.forEach(t),ia=a(_t," into that cloned repository folder and update the clone to the latest version:"),_t.forEach(t),ol=p(e),c(De.$$.fragment,e),ll=p(e),Q=s(e,"P",{});var ql=i(Q);fa=a(ql,"There is nothing else to do. Your python environment will find the bleeding edge version of "),Lt=s(ql,"CODE",{});var Ss=i(Lt);ha=a(Ss,"transformers"),Ss.forEach(t),pa=a(ql," on the next run."),ql.forEach(t),rl=p(e),M=s(e,"H2",{class:!0});var Ul=i(M);Z=s(Ul,"A",{id:!0,class:!0,href:!0});var xs=i(Z);jt=s(xs,"SPAN",{});var Ds=i(jt);c(Ie.$$.fragment,Ds),Ds.forEach(t),xs.forEach(t),da=p(Ul),Wt=s(Ul,"SPAN",{});var Is=i(Wt);ma=a(Is,"With conda"),Is.forEach(t),Ul.forEach(t),al=p(e),ee=s(e,"P",{});var Yl=i(ee);ca=a(Yl,"Since Transformers version v4.0.0, we now have a conda channel: "),qt=s(Yl,"CODE",{});var Ns=i(qt);ua=a(Ns,"huggingface"),Ns.forEach(t),va=a(Yl,"."),Yl.forEach(t),nl=p(e),at=s(e,"P",{});var Rs=i(at);wa=a(Rs,"\u{1F917} Transformers can be installed using conda as follows:"),Rs.forEach(t),sl=p(e),c(Ne.$$.fragment,e),il=p(e),nt=s(e,"P",{});var Hs=i(nt);ya=a(Hs,"Follow the installation pages of TensorFlow, PyTorch or Flax to see how to install them with conda."),Hs.forEach(t),fl=p(e),L=s(e,"H2",{class:!0});var zl=i(L);te=s(zl,"A",{id:!0,class:!0,href:!0});var Ms=i(te);Ut=s(Ms,"SPAN",{});var Ls=i(Ut);c(Re.$$.fragment,Ls),Ls.forEach(t),Ms.forEach(t),_a=p(zl),Yt=s(zl,"SPAN",{});var js=i(Yt);Ea=a(js,"Caching models"),js.forEach(t),zl.forEach(t),hl=p(e),_=s(e,"P",{});var D=i(_);ba=a(D,`This library provides pretrained models that will be downloaded and cached locally. Unless you specify a location with
`),zt=s(D,"CODE",{});var Ws=i(zt);$a=a(Ws,"cache_dir=..."),Ws.forEach(t),ga=a(D," when you use methods like "),Bt=s(D,"CODE",{});var qs=i(Bt);Ta=a(qs,"from_pretrained"),qs.forEach(t),Pa=a(D,`, these models will automatically be downloaded in the
folder given by the shell environment variable `),Gt=s(D,"CODE",{});var Us=i(Gt);ka=a(Us,"TRANSFORMERS_CACHE"),Us.forEach(t),Ca=a(D,`. The default value for it will be the Hugging
Face cache home followed by `),Vt=s(D,"CODE",{});var Ys=i(Vt);Aa=a(Ys,"/transformers/"),Ys.forEach(t),Fa=a(D,". This is (by order of priority):"),D.forEach(t),pl=p(e),S=s(e,"UL",{});var Et=i(S);st=s(Et,"LI",{});var Yn=i(st);Oa=a(Yn,"shell environment variable "),Xt=s(Yn,"CODE",{});var zs=i(Xt);Sa=a(zs,"HF_HOME"),zs.forEach(t),Yn.forEach(t),xa=p(Et),oe=s(Et,"LI",{});var bo=i(oe);Da=a(bo,"shell environment variable "),Jt=s(bo,"CODE",{});var Bs=i(Jt);Ia=a(Bs,"XDG_CACHE_HOME"),Bs.forEach(t),Na=a(bo," + "),Kt=s(bo,"CODE",{});var Gs=i(Kt);Ra=a(Gs,"/huggingface/"),Gs.forEach(t),bo.forEach(t),Ha=p(Et),it=s(Et,"LI",{});var zn=i(it);Ma=a(zn,"default: "),Qt=s(zn,"CODE",{});var Vs=i(Qt);La=a(Vs,"~/.cache/huggingface/"),Vs.forEach(t),zn.forEach(t),Et.forEach(t),dl=p(e),le=s(e,"P",{});var Bl=i(le);ja=a(Bl,`So if you don\u2019t have any specific environment variable set, the cache directory will be at
`),Zt=s(Bl,"CODE",{});var Xs=i(Zt);Wa=a(Xs,"~/.cache/huggingface/transformers/"),Xs.forEach(t),qa=a(Bl,"."),Bl.forEach(t),ml=p(e),$=s(e,"P",{});var U=i($);eo=s(U,"STRONG",{});var Js=i(eo);Ua=a(Js,"Note:"),Js.forEach(t),Ya=a(U,` If you have set a shell environment variable for one of the predecessors of this library
(`),to=s(U,"CODE",{});var Ks=i(to);za=a(Ks,"PYTORCH_TRANSFORMERS_CACHE"),Ks.forEach(t),Ba=a(U," or "),oo=s(U,"CODE",{});var Qs=i(oo);Ga=a(Qs,"PYTORCH_PRETRAINED_BERT_CACHE"),Qs.forEach(t),Va=a(U,`), those will be used if there is no shell
environment variable for `),lo=s(U,"CODE",{});var Zs=i(lo);Xa=a(Zs,"TRANSFORMERS_CACHE"),Zs.forEach(t),Ja=a(U,"."),U.forEach(t),cl=p(e),j=s(e,"H3",{class:!0});var Gl=i(j);re=s(Gl,"A",{id:!0,class:!0,href:!0});var ei=i(re);ro=s(ei,"SPAN",{});var ti=i(ro);c(He.$$.fragment,ti),ti.forEach(t),ei.forEach(t),Ka=p(Gl),ao=s(Gl,"SPAN",{});var oi=i(ao);Qa=a(oi,"Offline mode"),oi.forEach(t),Gl.forEach(t),ul=p(e),ft=s(e,"P",{});var li=i(ft);Za=a(li,"It\u2019s possible to run \u{1F917} Transformers in a firewalled or a no-network environment."),li.forEach(t),vl=p(e),ae=s(e,"P",{});var Vl=i(ae);en=a(Vl,"Setting environment variable "),no=s(Vl,"CODE",{});var ri=i(no);tn=a(ri,"TRANSFORMERS_OFFLINE=1"),ri.forEach(t),on=a(Vl," will tell \u{1F917} Transformers to use local files only and will not try to look things up."),Vl.forEach(t),wl=p(e),ne=s(e,"P",{});var Xl=i(ne);ln=a(Xl,"Most likely you may want to couple this with "),so=s(Xl,"CODE",{});var ai=i(so);rn=a(ai,"HF_DATASETS_OFFLINE=1"),ai.forEach(t),an=a(Xl," that performs the same for \u{1F917} Datasets if you\u2019re using the latter."),Xl.forEach(t),yl=p(e),ht=s(e,"P",{});var ni=i(ht);nn=a(ni,"Here is an example of how this can be used on a filesystem that is shared between a normally networked and a firewalled to the external world instances."),ni.forEach(t),_l=p(e),pt=s(e,"P",{});var si=i(pt);sn=a(si,"On the instance with the normal network run your program which will download and cache models (and optionally datasets if you use \u{1F917} Datasets). For example:"),si.forEach(t),El=p(e),c(Me.$$.fragment,e),bl=p(e),dt=s(e,"P",{});var ii=i(dt);fn=a(ii,"and then with the same filesystem you can now run the same program on a firewalled instance:"),ii.forEach(t),$l=p(e),c(Le.$$.fragment,e),gl=p(e),mt=s(e,"P",{});var fi=i(mt);hn=a(fi,"and it should succeed without any hanging waiting to timeout."),fi.forEach(t),Tl=p(e),W=s(e,"H4",{class:!0});var Jl=i(W);se=s(Jl,"A",{id:!0,class:!0,href:!0});var hi=i(se);io=s(hi,"SPAN",{});var pi=i(io);c(je.$$.fragment,pi),pi.forEach(t),hi.forEach(t),pn=p(Jl),fo=s(Jl,"SPAN",{});var di=i(fo);dn=a(di,"Fetching models and tokenizers to use offline"),di.forEach(t),Jl.forEach(t),Pl=p(e),ct=s(e,"P",{});var mi=i(ct);mn=a(mi,`When running a script the first time like mentioned above, the downloaded files will be cached for future reuse.
However, it is also possible to download files and point to their local path instead.`),mi.forEach(t),kl=p(e),x=s(e,"P",{});var bt=i(x);cn=a(bt,`Downloading files can be done through the Web Interface by clicking on the \u201CDownload\u201D button, but it can also be handled
programmatically using the `),ho=s(bt,"CODE",{});var ci=i(ho);un=a(ci,"huggingface_hub"),ci.forEach(t),vn=a(bt," library that is a dependency to "),po=s(bt,"CODE",{});var ui=i(po);wn=a(ui,"transformers"),ui.forEach(t),yn=a(bt,":"),bt.forEach(t),Cl=p(e),ie=s(e,"UL",{});var Kl=i(ie);We=s(Kl,"LI",{});var Ql=i(We);_n=a(Ql,"Using "),mo=s(Ql,"CODE",{});var vi=i(mo);En=a(vi,"snapshot_download"),vi.forEach(t),bn=a(Ql," to download an entire repository"),Ql.forEach(t),$n=p(Kl),qe=s(Kl,"LI",{});var Zl=i(qe);gn=a(Zl,"Using "),co=s(Zl,"CODE",{});var wi=i(co);Tn=a(wi,"hf_hub_download"),wi.forEach(t),Pn=a(Zl," to download a specific file"),Zl.forEach(t),Kl.forEach(t),Al=p(e),fe=s(e,"P",{});var er=i(fe);kn=a(er,`See the reference for these methods in the huggingface_hub
`),Ue=s(er,"A",{href:!0,rel:!0});var yi=i(Ue);Cn=a(yi,"documentation"),yi.forEach(t),An=a(er,"."),er.forEach(t),Fl=p(e),q=s(e,"H2",{class:!0});var tr=i(q);he=s(tr,"A",{id:!0,class:!0,href:!0});var _i=i(he);uo=s(_i,"SPAN",{});var Ei=i(uo);c(Ye.$$.fragment,Ei),Ei.forEach(t),_i.forEach(t),Fn=p(tr),vo=s(tr,"SPAN",{});var bi=i(vo);On=a(bi,"Do you want to run a Transformer model on a mobile device?"),bi.forEach(t),tr.forEach(t),Ol=p(e),pe=s(e,"P",{});var or=i(pe);Sn=a(or,"You should check out our "),ze=s(or,"A",{href:!0,rel:!0});var $i=i(ze);xn=a($i,"swift-coreml-transformers"),$i.forEach(t),Dn=a(or," repo."),or.forEach(t),Sl=p(e),E=s(e,"P",{});var I=i(E);In=a(I,"It contains a set of tools to convert PyTorch or TensorFlow 2.0 trained Transformer models (currently contains "),wo=s(I,"CODE",{});var gi=i(wo);Nn=a(gi,"GPT-2"),gi.forEach(t),Rn=a(I,`,
`),yo=s(I,"CODE",{});var Ti=i(yo);Hn=a(Ti,"DistilGPT-2"),Ti.forEach(t),Mn=a(I,", "),_o=s(I,"CODE",{});var Pi=i(_o);Ln=a(Pi,"BERT"),Pi.forEach(t),jn=a(I,", and "),Eo=s(I,"CODE",{});var ki=i(Eo);Wn=a(ki,"DistilBERT"),ki.forEach(t),qn=a(I,") to CoreML models that run on iOS devices."),I.forEach(t),xl=p(e),ut=s(e,"P",{});var Ci=i(ut);Un=a(Ci,`At some point in the future, you\u2019ll be able to seamlessly move from pretraining or fine-tuning models in PyTorch or
TensorFlow 2.0 to productizing them in CoreML, or prototype a model or an app in CoreML then research its
hyperparameters or architecture from PyTorch or TensorFlow 2.0. Super exciting!`),Ci.forEach(t),this.h()},h(){d(k,"name","hf:doc:metadata"),d(k,"content",JSON.stringify(Ii)),d(P,"id","installation"),d(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(P,"href","#installation"),d(g,"class","relative group"),d(ce,"href","https://docs.python.org/3/library/venv.html"),d(ce,"rel","nofollow"),d(ue,"href","https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/"),d(ue,"rel","nofollow"),d(z,"id","installation-with-pip"),d(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(z,"href","#installation-with-pip"),d(N,"class","relative group"),d(we,"href","https://www.tensorflow.org/install/pip#tensorflow-2.0-rc-is-available"),d(we,"rel","nofollow"),d(ye,"href","https://pytorch.org/get-started/locally/#start-locally"),d(ye,"rel","nofollow"),d(_e,"href","https://github.com/google/flax#quick-install"),d(_e,"rel","nofollow"),d(B,"id","installing-from-source"),d(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(B,"href","#installing-from-source"),d(R,"class","relative group"),d(Ae,"href","https://github.com/huggingface/transformers/issues"),d(Ae,"rel","nofollow"),d(X,"id","editable-install"),d(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(X,"href","#editable-install"),d(H,"class","relative group"),d(Z,"id","with-conda"),d(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Z,"href","#with-conda"),d(M,"class","relative group"),d(te,"id","caching-models"),d(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(te,"href","#caching-models"),d(L,"class","relative group"),d(re,"id","offline-mode"),d(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(re,"href","#offline-mode"),d(j,"class","relative group"),d(se,"id","fetching-models-and-tokenizers-to-use-offline"),d(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(se,"href","#fetching-models-and-tokenizers-to-use-offline"),d(W,"class","relative group"),d(Ue,"href","https://github.com/huggingface/huggingface_hub/tree/main/src/huggingface_hub"),d(Ue,"rel","nofollow"),d(he,"id","do-you-want-to-run-a-transformer-model-on-a-mobile-device"),d(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(he,"href","#do-you-want-to-run-a-transformer-model-on-a-mobile-device"),d(q,"class","relative group"),d(ze,"href","https://github.com/huggingface/swift-coreml-transformers"),d(ze,"rel","nofollow")},m(e,l){o(document.head,k),f(e,Be,l),f(e,g,l),o(g,P),o(P,$t),u(me,$t,null),o(g,rr),o(g,gt),o(gt,ar),f(e,$o,l),f(e,Ge,l),o(Ge,nr),f(e,go,l),f(e,C,l),o(C,sr),o(C,ce),o(ce,ir),o(C,fr),o(C,ue),o(ue,hr),o(C,pr),f(e,To,l),f(e,Ve,l),o(Ve,dr),f(e,Po,l),f(e,N,l),o(N,z),o(z,Tt),u(ve,Tt,null),o(N,mr),o(N,Pt),o(Pt,cr),f(e,ko,l),f(e,T,l),o(T,ur),o(T,we),o(we,vr),o(T,wr),o(T,ye),o(ye,yr),o(T,_r),o(T,_e),o(_e,Er),o(T,br),f(e,Co,l),f(e,Xe,l),o(Xe,$r),f(e,Ao,l),u(Ee,e,l),f(e,Fo,l),f(e,Je,l),o(Je,gr),f(e,Oo,l),u(be,e,l),f(e,So,l),f(e,Ke,l),o(Ke,Tr),f(e,xo,l),u($e,e,l),f(e,Do,l),f(e,Qe,l),o(Qe,Pr),f(e,Io,l),u(ge,e,l),f(e,No,l),f(e,Ze,l),o(Ze,kr),f(e,Ro,l),u(Te,e,l),f(e,Ho,l),f(e,et,l),o(et,Cr),f(e,Mo,l),u(Pe,e,l),f(e,Lo,l),f(e,tt,l),o(tt,Ar),f(e,jo,l),f(e,R,l),o(R,B),o(B,kt),u(ke,kt,null),o(R,Fr),o(R,Ct),o(Ct,Or),f(e,Wo,l),f(e,G,l),o(G,Sr),o(G,At),o(At,xr),o(G,Dr),f(e,qo,l),u(Ce,e,l),f(e,Uo,l),f(e,V,l),o(V,Ir),o(V,Ft),o(Ft,Nr),o(V,Rr),f(e,Yo,l),f(e,A,l),o(A,Hr),o(A,Ot),o(Ot,Mr),o(A,Lr),o(A,Ae),o(Ae,jr),o(A,Wr),f(e,zo,l),f(e,ot,l),o(ot,qr),f(e,Bo,l),u(Fe,e,l),f(e,Go,l),f(e,lt,l),o(lt,Ur),f(e,Vo,l),f(e,H,l),o(H,X),o(X,St),u(Oe,St,null),o(H,Yr),o(H,xt),o(xt,zr),f(e,Xo,l),f(e,J,l),o(J,Br),o(J,Dt),o(Dt,Gr),o(J,Vr),f(e,Jo,l),u(Se,e,l),f(e,Ko,l),f(e,rt,l),o(rt,Xr),f(e,Qo,l),u(xe,e,l),f(e,Zo,l),f(e,K,l),o(K,Jr),o(K,It),o(It,Kr),o(K,Qr),f(e,el,l),f(e,F,l),o(F,Zr),o(F,Nt),o(Nt,ea),o(F,ta),o(F,Rt),o(Rt,oa),o(F,la),f(e,tl,l),f(e,O,l),o(O,ra),o(O,Ht),o(Ht,aa),o(O,na),o(O,Mt),o(Mt,sa),o(O,ia),f(e,ol,l),u(De,e,l),f(e,ll,l),f(e,Q,l),o(Q,fa),o(Q,Lt),o(Lt,ha),o(Q,pa),f(e,rl,l),f(e,M,l),o(M,Z),o(Z,jt),u(Ie,jt,null),o(M,da),o(M,Wt),o(Wt,ma),f(e,al,l),f(e,ee,l),o(ee,ca),o(ee,qt),o(qt,ua),o(ee,va),f(e,nl,l),f(e,at,l),o(at,wa),f(e,sl,l),u(Ne,e,l),f(e,il,l),f(e,nt,l),o(nt,ya),f(e,fl,l),f(e,L,l),o(L,te),o(te,Ut),u(Re,Ut,null),o(L,_a),o(L,Yt),o(Yt,Ea),f(e,hl,l),f(e,_,l),o(_,ba),o(_,zt),o(zt,$a),o(_,ga),o(_,Bt),o(Bt,Ta),o(_,Pa),o(_,Gt),o(Gt,ka),o(_,Ca),o(_,Vt),o(Vt,Aa),o(_,Fa),f(e,pl,l),f(e,S,l),o(S,st),o(st,Oa),o(st,Xt),o(Xt,Sa),o(S,xa),o(S,oe),o(oe,Da),o(oe,Jt),o(Jt,Ia),o(oe,Na),o(oe,Kt),o(Kt,Ra),o(S,Ha),o(S,it),o(it,Ma),o(it,Qt),o(Qt,La),f(e,dl,l),f(e,le,l),o(le,ja),o(le,Zt),o(Zt,Wa),o(le,qa),f(e,ml,l),f(e,$,l),o($,eo),o(eo,Ua),o($,Ya),o($,to),o(to,za),o($,Ba),o($,oo),o(oo,Ga),o($,Va),o($,lo),o(lo,Xa),o($,Ja),f(e,cl,l),f(e,j,l),o(j,re),o(re,ro),u(He,ro,null),o(j,Ka),o(j,ao),o(ao,Qa),f(e,ul,l),f(e,ft,l),o(ft,Za),f(e,vl,l),f(e,ae,l),o(ae,en),o(ae,no),o(no,tn),o(ae,on),f(e,wl,l),f(e,ne,l),o(ne,ln),o(ne,so),o(so,rn),o(ne,an),f(e,yl,l),f(e,ht,l),o(ht,nn),f(e,_l,l),f(e,pt,l),o(pt,sn),f(e,El,l),u(Me,e,l),f(e,bl,l),f(e,dt,l),o(dt,fn),f(e,$l,l),u(Le,e,l),f(e,gl,l),f(e,mt,l),o(mt,hn),f(e,Tl,l),f(e,W,l),o(W,se),o(se,io),u(je,io,null),o(W,pn),o(W,fo),o(fo,dn),f(e,Pl,l),f(e,ct,l),o(ct,mn),f(e,kl,l),f(e,x,l),o(x,cn),o(x,ho),o(ho,un),o(x,vn),o(x,po),o(po,wn),o(x,yn),f(e,Cl,l),f(e,ie,l),o(ie,We),o(We,_n),o(We,mo),o(mo,En),o(We,bn),o(ie,$n),o(ie,qe),o(qe,gn),o(qe,co),o(co,Tn),o(qe,Pn),f(e,Al,l),f(e,fe,l),o(fe,kn),o(fe,Ue),o(Ue,Cn),o(fe,An),f(e,Fl,l),f(e,q,l),o(q,he),o(he,uo),u(Ye,uo,null),o(q,Fn),o(q,vo),o(vo,On),f(e,Ol,l),f(e,pe,l),o(pe,Sn),o(pe,ze),o(ze,xn),o(pe,Dn),f(e,Sl,l),f(e,E,l),o(E,In),o(E,wo),o(wo,Nn),o(E,Rn),o(E,yo),o(yo,Hn),o(E,Mn),o(E,_o),o(_o,Ln),o(E,jn),o(E,Eo),o(Eo,Wn),o(E,qn),f(e,xl,l),f(e,ut,l),o(ut,Un),Dl=!0},p:xi,i(e){Dl||(v(me.$$.fragment,e),v(ve.$$.fragment,e),v(Ee.$$.fragment,e),v(be.$$.fragment,e),v($e.$$.fragment,e),v(ge.$$.fragment,e),v(Te.$$.fragment,e),v(Pe.$$.fragment,e),v(ke.$$.fragment,e),v(Ce.$$.fragment,e),v(Fe.$$.fragment,e),v(Oe.$$.fragment,e),v(Se.$$.fragment,e),v(xe.$$.fragment,e),v(De.$$.fragment,e),v(Ie.$$.fragment,e),v(Ne.$$.fragment,e),v(Re.$$.fragment,e),v(He.$$.fragment,e),v(Me.$$.fragment,e),v(Le.$$.fragment,e),v(je.$$.fragment,e),v(Ye.$$.fragment,e),Dl=!0)},o(e){w(me.$$.fragment,e),w(ve.$$.fragment,e),w(Ee.$$.fragment,e),w(be.$$.fragment,e),w($e.$$.fragment,e),w(ge.$$.fragment,e),w(Te.$$.fragment,e),w(Pe.$$.fragment,e),w(ke.$$.fragment,e),w(Ce.$$.fragment,e),w(Fe.$$.fragment,e),w(Oe.$$.fragment,e),w(Se.$$.fragment,e),w(xe.$$.fragment,e),w(De.$$.fragment,e),w(Ie.$$.fragment,e),w(Ne.$$.fragment,e),w(Re.$$.fragment,e),w(He.$$.fragment,e),w(Me.$$.fragment,e),w(Le.$$.fragment,e),w(je.$$.fragment,e),w(Ye.$$.fragment,e),Dl=!1},d(e){t(k),e&&t(Be),e&&t(g),y(me),e&&t($o),e&&t(Ge),e&&t(go),e&&t(C),e&&t(To),e&&t(Ve),e&&t(Po),e&&t(N),y(ve),e&&t(ko),e&&t(T),e&&t(Co),e&&t(Xe),e&&t(Ao),y(Ee,e),e&&t(Fo),e&&t(Je),e&&t(Oo),y(be,e),e&&t(So),e&&t(Ke),e&&t(xo),y($e,e),e&&t(Do),e&&t(Qe),e&&t(Io),y(ge,e),e&&t(No),e&&t(Ze),e&&t(Ro),y(Te,e),e&&t(Ho),e&&t(et),e&&t(Mo),y(Pe,e),e&&t(Lo),e&&t(tt),e&&t(jo),e&&t(R),y(ke),e&&t(Wo),e&&t(G),e&&t(qo),y(Ce,e),e&&t(Uo),e&&t(V),e&&t(Yo),e&&t(A),e&&t(zo),e&&t(ot),e&&t(Bo),y(Fe,e),e&&t(Go),e&&t(lt),e&&t(Vo),e&&t(H),y(Oe),e&&t(Xo),e&&t(J),e&&t(Jo),y(Se,e),e&&t(Ko),e&&t(rt),e&&t(Qo),y(xe,e),e&&t(Zo),e&&t(K),e&&t(el),e&&t(F),e&&t(tl),e&&t(O),e&&t(ol),y(De,e),e&&t(ll),e&&t(Q),e&&t(rl),e&&t(M),y(Ie),e&&t(al),e&&t(ee),e&&t(nl),e&&t(at),e&&t(sl),y(Ne,e),e&&t(il),e&&t(nt),e&&t(fl),e&&t(L),y(Re),e&&t(hl),e&&t(_),e&&t(pl),e&&t(S),e&&t(dl),e&&t(le),e&&t(ml),e&&t($),e&&t(cl),e&&t(j),y(He),e&&t(ul),e&&t(ft),e&&t(vl),e&&t(ae),e&&t(wl),e&&t(ne),e&&t(yl),e&&t(ht),e&&t(_l),e&&t(pt),e&&t(El),y(Me,e),e&&t(bl),e&&t(dt),e&&t($l),y(Le,e),e&&t(gl),e&&t(mt),e&&t(Tl),e&&t(W),y(je),e&&t(Pl),e&&t(ct),e&&t(kl),e&&t(x),e&&t(Cl),e&&t(ie),e&&t(Al),e&&t(fe),e&&t(Fl),e&&t(q),y(Ye),e&&t(Ol),e&&t(pe),e&&t(Sl),e&&t(E),e&&t(xl),e&&t(ut)}}}const Ii={local:"installation",sections:[{local:"installation-with-pip",title:"Installation with pip"},{local:"installing-from-source",title:"Installing from source"},{local:"editable-install",title:"Editable install"},{local:"with-conda",title:"With conda"},{local:"caching-models",sections:[{local:"offline-mode",sections:[{local:"fetching-models-and-tokenizers-to-use-offline",title:"Fetching models and tokenizers to use offline"}],title:"Offline mode"}],title:"Caching models"},{local:"do-you-want-to-run-a-transformer-model-on-a-mobile-device",title:"Do you want to run a Transformer model on a mobile device?"}],title:"Installation"};function Ni(lr,k,Be){let{fw:g}=k;return lr.$$set=P=>{"fw"in P&&Be(0,g=P.fw)},[g]}class ji extends Ai{constructor(k){super();Fi(this,k,Ni,Di,Oi,{fw:0})}}export{ji as default,Ii as metadata};
