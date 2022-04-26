import{S as Wn,i as Jn,s as Gn,e as n,k as d,w,t,M as Yn,c as s,d as o,m as p,a as r,x as m,h as l,b as f,N as zn,F as a,g as h,y as v,L as Kn,q as b,o as y,B as $,v as Qn}from"../chunks/vendor-d3924577.js";import{I as Aa}from"../chunks/IconCopyLink-f94c3d80.js";import{C as H}from"../chunks/CodeBlock-ff545b14.js";function Vn(Pl){let U,Pa,Oa,Da,L,M,Ye,Q,$o,ze,Eo,Ca,N,B,Ke,V,xo,Qe,ko,Sa,W,jo,Ve,qo,Ao,Ha,A,Xe,Po,Oo,Ze,Do,Co,ea,So,Ua,R,J,aa,X,Ho,oa,Uo,La,P,Lo,_e,No,Ro,ta,To,Io,Na,ge,we,Ol,Ra,Z,Ta,me,Fo,Ia,ve,Mo,Fa,ee,Ma,ae,be,Bo,Wo,Ba,oe,Wa,O,Jo,la,Go,Yo,na,zo,Ko,Ja,te,Ga,T,G,sa,le,Qo,ra,Vo,Ya,j,ye,Xo,Zo,$e,et,at,Ee,ot,tt,za,D,lt,xe,nt,st,ke,rt,it,Ka,ne,Qa,_,je,ht,ft,qe,dt,pt,Ae,ct,ut,Pe,_t,gt,Oe,wt,mt,De,vt,bt,Va,se,Xa,I,Y,ia,re,yt,ha,$t,Za,F,Ce,Et,xt,Se,kt,jt,eo,He,qt,ao,ie,oo,q,Ue,At,Pt,fa,Ot,Dt,Le,Ct,St,to,he,lo,C,Ht,Ne,Ut,Lt,Re,Nt,Rt,no,c,Tt,Te,It,Ft,da,Mt,Bt,pa,Wt,Jt,ca,Gt,Yt,ua,zt,Kt,_a,Qt,Vt,ga,Xt,Zt,fe,wa,el,al,so,z,ol,ma,tl,ll,ro,de,io,g,nl,va,sl,rl,ba,il,hl,ya,fl,dl,$a,pl,cl,Ea,ul,_l,ho,pe,fo,K,gl,Ie,wl,ml,po,E,vl,xa,bl,yl,ka,$l,El,ja,xl,kl,Fe,jl,ql,co;return Q=new Aa({}),V=new Aa({}),X=new Aa({}),Z=new H({props:{code:`from huggingface_hub import hf_hub_url
hf_hub_url(repo_id="lysandre/arxiv-nlp", filename="config.json")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_url
<span class="hljs-meta">&gt;&gt;&gt; </span>hf_hub_url(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, filename=<span class="hljs-string">&quot;config.json&quot;</span>)
<span class="hljs-string">&#x27;https://huggingface.co/lysandre/arxiv-nlp/resolve/main/config.json&#x27;</span>`}}),ee=new H({props:{code:'hf_hub_url(repo_id="lysandre/arxiv-nlp", filename="config.json", revision="877b84a8f93f2d619faa2a6e514a32beef88ab0a")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>hf_hub_url(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, filename=<span class="hljs-string">&quot;config.json&quot;</span>, revision=<span class="hljs-string">&quot;877b84a8f93f2d619faa2a6e514a32beef88ab0a&quot;</span>)
<span class="hljs-string">&#x27;https://huggingface.co/lysandre/arxiv-nlp/resolve/877b84a8f93f2d619faa2a6e514a32beef88ab0a/config.json&#x27;</span>`}}),oe=new H({props:{code:'hf_hub_url(repo_id="lysandre/arxiv-nlp", filename="config.json", revision="main")',highlighted:'hf_hub_url(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, filename=<span class="hljs-string">&quot;config.json&quot;</span>, revision=<span class="hljs-string">&quot;main&quot;</span>)'}}),te=new H({props:{code:'hf_hub_url(repo_id="lysandre/arxiv-nlp", filename="config.json", revision="v1.0")',highlighted:'hf_hub_url(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, filename=<span class="hljs-string">&quot;config.json&quot;</span>, revision=<span class="hljs-string">&quot;v1.0&quot;</span>)'}}),le=new Aa({}),ne=new H({props:{code:`from huggingface_hub import hf_hub_url, cached_download
config_file_url = hf_hub_url("lysandre/arxiv-nlp", filename="config.json")
cached_download(config_file_url)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_url, cached_download
<span class="hljs-meta">&gt;&gt;&gt; </span>config_file_url = hf_hub_url(<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, filename=<span class="hljs-string">&quot;config.json&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>cached_download(config_file_url)
<span class="hljs-string">&#x27;/home/lysandre/.cache/huggingface/hub/bc0e8cc2f8271b322304e8bb84b3b7580701d53a335ab2d75da19c249e2eeebb.066dae6fdb1e2b8cce60c35cc0f78ed1451d9b341c78de19f3ad469d10a8cbb1&#x27;</span>`}}),se=new H({props:{code:`from huggingface_hub import hf_hub_download
hf_hub_download(repo_id="lysandre/arxiv-nlp", filename="config.json")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download
<span class="hljs-meta">&gt;&gt;&gt; </span>hf_hub_download(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, filename=<span class="hljs-string">&quot;config.json&quot;</span>)`}}),re=new Aa({}),ie=new H({props:{code:`from huggingface_hub import snapshot_download
snapshot_download(repo_id="lysandre/arxiv-nlp")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> snapshot_download
<span class="hljs-meta">&gt;&gt;&gt; </span>snapshot_download(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>)
<span class="hljs-string">&#x27;/home/lysandre/.cache/huggingface/hub/lysandre__arxiv-nlp.894a9adde21d9a3e3843e6d5aeaaf01875c7fade&#x27;</span>`}}),he=new H({props:{code:`from huggingface_hub import snapshot_download
snapshot_download(repo_id="lysandre/arxiv-nlp", revision="main")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> snapshot_download
<span class="hljs-meta">&gt;&gt;&gt; </span>snapshot_download(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, revision=<span class="hljs-string">&quot;main&quot;</span>)`}}),de=new H({props:{code:`from huggingface_hub import snapshot_download
snapshot_download(repo_id="lysandre/arxiv-nlp", allow_regex="*.json")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> snapshot_download
<span class="hljs-meta">&gt;&gt;&gt; </span>snapshot_download(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, allow_regex=<span class="hljs-string">&quot;*.json&quot;</span>)`}}),pe=new H({props:{code:`from huggingface_hub import snapshot_download
snapshot_download(repo_id="lysandre/arxiv-nlp", ignore_regex=["*.msgpack", "*.h5"])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> snapshot_download
<span class="hljs-meta">&gt;&gt;&gt; </span>snapshot_download(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, ignore_regex=[<span class="hljs-string">&quot;*.msgpack&quot;</span>, <span class="hljs-string">&quot;*.h5&quot;</span>])`}}),{c(){U=n("meta"),Pa=d(),Oa=n("hr"),Da=d(),L=n("h2"),M=n("a"),Ye=n("span"),w(Q.$$.fragment),$o=d(),ze=n("span"),Eo=t("title: How to download files from the Hub"),Ca=d(),N=n("h1"),B=n("a"),Ke=n("span"),w(V.$$.fragment),xo=d(),Qe=n("span"),ko=t("How to integrate downstream utilities in your library"),Sa=d(),W=n("p"),jo=t("Utilities that allow your library to download files from the Hub are referred to as "),Ve=n("em"),qo=t("downstream"),Ao=t(" utilities. This guide introduces additional downstream utilities you can integrate with your library, or use separately on their own. You will learn how to:"),Ha=d(),A=n("ul"),Xe=n("li"),Po=t("Retrieve a URL to download."),Oo=d(),Ze=n("li"),Do=t("Download a file and cache it on your disk."),Co=d(),ea=n("li"),So=t("Download all the files in a repository."),Ua=d(),R=n("h2"),J=n("a"),aa=n("span"),w(X.$$.fragment),Ho=d(),oa=n("span"),Uo=t("hf_hub_url"),La=d(),P=n("p"),Lo=t("Use "),_e=n("a"),No=t("hf_hub_url()"),Ro=t(" to retrieve the URL of a specific file to download by providing a "),ta=n("code"),To=t("filename"),Io=t("."),Na=d(),ge=n("p"),we=n("img"),Ra=d(),w(Z.$$.fragment),Ta=d(),me=n("p"),Fo=t("Specify a particular file version by providing the file revision. The file revision can be a branch, a tag, or a commit hash."),Ia=d(),ve=n("p"),Mo=t("When using the commit hash, it must be the full-length hash instead of a 7-character commit hash:"),Fa=d(),w(ee.$$.fragment),Ma=d(),ae=n("p"),be=n("a"),Bo=t("hf_hub_url()"),Wo=t(" can also use the branch name to specify a file revision:"),Ba=d(),w(oe.$$.fragment),Wa=d(),O=n("p"),Jo=t("Specify a file revision with a tag identifier. For example, if you want "),la=n("code"),Go=t("v1.0"),Yo=t(" of the "),na=n("code"),zo=t("config.json"),Ko=t(" file:"),Ja=d(),w(te.$$.fragment),Ga=d(),T=n("h2"),G=n("a"),sa=n("span"),w(le.$$.fragment),Qo=d(),ra=n("span"),Vo=t("cached_download"),Ya=d(),j=n("p"),ye=n("a"),Xo=t("cached_download()"),Zo=t(" is useful for downloading and caching a file on your local disk. Once stored in your cache, you don\u2019t have to redownload the file the next time you use it. "),$e=n("a"),et=t("cached_download()"),at=t(" is a hands-free solution for staying up to date with new file versions. When a downloaded file is updated in the remote repository, "),Ee=n("a"),ot=t("cached_download()"),tt=t(" will automatically download and store it for you."),za=d(),D=n("p"),lt=t("Begin by retrieving your file URL with "),xe=n("a"),nt=t("hf_hub_url()"),st=t(", and then pass the specified URL to "),ke=n("a"),rt=t("cached_download()"),it=t(" to download the file:"),Ka=d(),w(ne.$$.fragment),Qa=d(),_=n("p"),je=n("a"),ht=t("hf_hub_url()"),ft=t(" and "),qe=n("a"),dt=t("cached_download()"),pt=t(" work hand in hand to download a file. This is precisely how "),Ae=n("a"),ct=t("hf_hub_download()"),ut=t(" from the tutorial works! "),Pe=n("a"),_t=t("hf_hub_download()"),gt=t(" is simply a wrapper that calls both "),Oe=n("a"),wt=t("hf_hub_url()"),mt=t(" and "),De=n("a"),vt=t("cached_download()"),bt=t("."),Va=d(),w(se.$$.fragment),Xa=d(),I=n("h2"),Y=n("a"),ia=n("span"),w(re.$$.fragment),yt=d(),ha=n("span"),$t=t("snapshot_download"),Za=d(),F=n("p"),Ce=n("a"),Et=t("snapshot_download()"),xt=t(" downloads an entire repository at a given revision. Like "),Se=n("a"),kt=t("cached_download()"),jt=t(", all downloaded files are cached on your local disk. However, even if only a single file is updated, the entire repository will be redownloaded."),eo=d(),He=n("p"),qt=t("Download a whole repository as shown in the following:"),ao=d(),w(ie.$$.fragment),oo=d(),q=n("p"),Ue=n("a"),At=t("snapshot_download()"),Pt=t(" downloads the latest revision by default. If you want a specific repository revision, use the "),fa=n("code"),Ot=t("revision"),Dt=t(" parameter as shown with "),Le=n("a"),Ct=t("hf_hub_url()"),St=t("."),to=d(),w(he.$$.fragment),lo=d(),C=n("p"),Ht=t("In general, it is usually better to manually download files with "),Ne=n("a"),Ut=t("hf_hub_download()"),Lt=t(" (if you already know the file name) to avoid re-downloading an entire repository. "),Re=n("a"),Nt=t("snapshot_download()"),Rt=t(" is helpful when your library\u2019s downloading utility is a helper, and unaware of which files need to be downloaded."),no=d(),c=n("p"),Tt=t("However, you don\u2019t want to always download the contents of an entire repository with "),Te=n("a"),It=t("snapshot_download()"),Ft=t(". Even if you don\u2019t know the file name and only know the file type, you can download specific files with "),da=n("code"),Mt=t("allow_regex"),Bt=t(" and "),pa=n("code"),Wt=t("ignore_regex"),Jt=t(`.
Use the `),ca=n("code"),Gt=t("allow_regex"),Yt=t(" and "),ua=n("code"),zt=t("ignore_regex"),Kt=t(` arguments to specify
which files to download.
`),_a=n("code"),Qt=t("allow_regex"),Vt=t(" and "),ga=n("code"),Xt=t("ignore_regex"),Zt=t(` accept either a single regex or a list of regexes.
The regex matching is based on `),fe=n("a"),wa=n("code"),el=t("fnmatch"),al=t(" which means it provides support for Unix shell-style wildcards."),so=d(),z=n("p"),ol=t("For example, you can use "),ma=n("code"),tl=t("allow_regex"),ll=t(" to only download JSON configuration files:"),ro=d(),w(de.$$.fragment),io=d(),g=n("p"),nl=t("On the other hand, "),va=n("code"),sl=t("ignore_regex"),rl=t(" can be used to exclude certain files from being downloaded. The following example ignores the "),ba=n("code"),il=t(".msgpack"),hl=t(" and "),ya=n("code"),fl=t(".h5"),dl=t(` file extensions:
or `),$a=n("code"),pl=t(".h5"),cl=t(" extensions, you could make use of "),Ea=n("code"),ul=t("ignore_regex"),_l=t(":"),ho=d(),w(pe.$$.fragment),fo=d(),K=n("p"),gl=t(`Passing a regex can be especially useful when repositories contain files that
are never expected to be downloaded by `),Ie=n("a"),wl=t("snapshot_download()"),ml=t("."),po=d(),E=n("p"),vl=t("Note that passing "),xa=n("code"),bl=t("allow_regex"),yl=t(" or "),ka=n("code"),$l=t("ignore_regex"),El=t(" does "),ja=n("strong"),xl=t("not"),kl=t(` prevent
`),Fe=n("a"),jl=t("snapshot_download()"),ql=t(` from re-downloading the entire model repository if an ignored
file is changed.`),this.h()},l(e){const i=Yn('[data-svelte="svelte-1phssyn"]',document.head);U=s(i,"META",{name:!0,content:!0}),i.forEach(o),Pa=p(e),Oa=s(e,"HR",{}),Da=p(e),L=s(e,"H2",{class:!0});var uo=r(L);M=s(uo,"A",{id:!0,class:!0,href:!0});var Dl=r(M);Ye=s(Dl,"SPAN",{});var Cl=r(Ye);m(Q.$$.fragment,Cl),Cl.forEach(o),Dl.forEach(o),$o=p(uo),ze=s(uo,"SPAN",{});var Sl=r(ze);Eo=l(Sl,"title: How to download files from the Hub"),Sl.forEach(o),uo.forEach(o),Ca=p(e),N=s(e,"H1",{class:!0});var _o=r(N);B=s(_o,"A",{id:!0,class:!0,href:!0});var Hl=r(B);Ke=s(Hl,"SPAN",{});var Ul=r(Ke);m(V.$$.fragment,Ul),Ul.forEach(o),Hl.forEach(o),xo=p(_o),Qe=s(_o,"SPAN",{});var Ll=r(Qe);ko=l(Ll,"How to integrate downstream utilities in your library"),Ll.forEach(o),_o.forEach(o),Sa=p(e),W=s(e,"P",{});var go=r(W);jo=l(go,"Utilities that allow your library to download files from the Hub are referred to as "),Ve=s(go,"EM",{});var Nl=r(Ve);qo=l(Nl,"downstream"),Nl.forEach(o),Ao=l(go," utilities. This guide introduces additional downstream utilities you can integrate with your library, or use separately on their own. You will learn how to:"),go.forEach(o),Ha=p(e),A=s(e,"UL",{});var Me=r(A);Xe=s(Me,"LI",{});var Rl=r(Xe);Po=l(Rl,"Retrieve a URL to download."),Rl.forEach(o),Oo=p(Me),Ze=s(Me,"LI",{});var Tl=r(Ze);Do=l(Tl,"Download a file and cache it on your disk."),Tl.forEach(o),Co=p(Me),ea=s(Me,"LI",{});var Il=r(ea);So=l(Il,"Download all the files in a repository."),Il.forEach(o),Me.forEach(o),Ua=p(e),R=s(e,"H2",{class:!0});var wo=r(R);J=s(wo,"A",{id:!0,class:!0,href:!0});var Fl=r(J);aa=s(Fl,"SPAN",{});var Ml=r(aa);m(X.$$.fragment,Ml),Ml.forEach(o),Fl.forEach(o),Ho=p(wo),oa=s(wo,"SPAN",{});var Bl=r(oa);Uo=l(Bl,"hf_hub_url"),Bl.forEach(o),wo.forEach(o),La=p(e),P=s(e,"P",{});var Be=r(P);Lo=l(Be,"Use "),_e=s(Be,"A",{href:!0});var Wl=r(_e);No=l(Wl,"hf_hub_url()"),Wl.forEach(o),Ro=l(Be," to retrieve the URL of a specific file to download by providing a "),ta=s(Be,"CODE",{});var Jl=r(ta);To=l(Jl,"filename"),Jl.forEach(o),Io=l(Be,"."),Be.forEach(o),Na=p(e),ge=s(e,"P",{});var Gl=r(ge);we=s(Gl,"IMG",{src:!0,alt:!0}),Gl.forEach(o),Ra=p(e),m(Z.$$.fragment,e),Ta=p(e),me=s(e,"P",{});var Yl=r(me);Fo=l(Yl,"Specify a particular file version by providing the file revision. The file revision can be a branch, a tag, or a commit hash."),Yl.forEach(o),Ia=p(e),ve=s(e,"P",{});var zl=r(ve);Mo=l(zl,"When using the commit hash, it must be the full-length hash instead of a 7-character commit hash:"),zl.forEach(o),Fa=p(e),m(ee.$$.fragment,e),Ma=p(e),ae=s(e,"P",{});var Al=r(ae);be=s(Al,"A",{href:!0});var Kl=r(be);Bo=l(Kl,"hf_hub_url()"),Kl.forEach(o),Wo=l(Al," can also use the branch name to specify a file revision:"),Al.forEach(o),Ba=p(e),m(oe.$$.fragment,e),Wa=p(e),O=s(e,"P",{});var We=r(O);Jo=l(We,"Specify a file revision with a tag identifier. For example, if you want "),la=s(We,"CODE",{});var Ql=r(la);Go=l(Ql,"v1.0"),Ql.forEach(o),Yo=l(We," of the "),na=s(We,"CODE",{});var Vl=r(na);zo=l(Vl,"config.json"),Vl.forEach(o),Ko=l(We," file:"),We.forEach(o),Ja=p(e),m(te.$$.fragment,e),Ga=p(e),T=s(e,"H2",{class:!0});var mo=r(T);G=s(mo,"A",{id:!0,class:!0,href:!0});var Xl=r(G);sa=s(Xl,"SPAN",{});var Zl=r(sa);m(le.$$.fragment,Zl),Zl.forEach(o),Xl.forEach(o),Qo=p(mo),ra=s(mo,"SPAN",{});var en=r(ra);Vo=l(en,"cached_download"),en.forEach(o),mo.forEach(o),Ya=p(e),j=s(e,"P",{});var ce=r(j);ye=s(ce,"A",{href:!0});var an=r(ye);Xo=l(an,"cached_download()"),an.forEach(o),Zo=l(ce," is useful for downloading and caching a file on your local disk. Once stored in your cache, you don\u2019t have to redownload the file the next time you use it. "),$e=s(ce,"A",{href:!0});var on=r($e);et=l(on,"cached_download()"),on.forEach(o),at=l(ce," is a hands-free solution for staying up to date with new file versions. When a downloaded file is updated in the remote repository, "),Ee=s(ce,"A",{href:!0});var tn=r(Ee);ot=l(tn,"cached_download()"),tn.forEach(o),tt=l(ce," will automatically download and store it for you."),ce.forEach(o),za=p(e),D=s(e,"P",{});var Je=r(D);lt=l(Je,"Begin by retrieving your file URL with "),xe=s(Je,"A",{href:!0});var ln=r(xe);nt=l(ln,"hf_hub_url()"),ln.forEach(o),st=l(Je,", and then pass the specified URL to "),ke=s(Je,"A",{href:!0});var nn=r(ke);rt=l(nn,"cached_download()"),nn.forEach(o),it=l(Je," to download the file:"),Je.forEach(o),Ka=p(e),m(ne.$$.fragment,e),Qa=p(e),_=s(e,"P",{});var x=r(_);je=s(x,"A",{href:!0});var sn=r(je);ht=l(sn,"hf_hub_url()"),sn.forEach(o),ft=l(x," and "),qe=s(x,"A",{href:!0});var rn=r(qe);dt=l(rn,"cached_download()"),rn.forEach(o),pt=l(x," work hand in hand to download a file. This is precisely how "),Ae=s(x,"A",{href:!0});var hn=r(Ae);ct=l(hn,"hf_hub_download()"),hn.forEach(o),ut=l(x," from the tutorial works! "),Pe=s(x,"A",{href:!0});var fn=r(Pe);_t=l(fn,"hf_hub_download()"),fn.forEach(o),gt=l(x," is simply a wrapper that calls both "),Oe=s(x,"A",{href:!0});var dn=r(Oe);wt=l(dn,"hf_hub_url()"),dn.forEach(o),mt=l(x," and "),De=s(x,"A",{href:!0});var pn=r(De);vt=l(pn,"cached_download()"),pn.forEach(o),bt=l(x,"."),x.forEach(o),Va=p(e),m(se.$$.fragment,e),Xa=p(e),I=s(e,"H2",{class:!0});var vo=r(I);Y=s(vo,"A",{id:!0,class:!0,href:!0});var cn=r(Y);ia=s(cn,"SPAN",{});var un=r(ia);m(re.$$.fragment,un),un.forEach(o),cn.forEach(o),yt=p(vo),ha=s(vo,"SPAN",{});var _n=r(ha);$t=l(_n,"snapshot_download"),_n.forEach(o),vo.forEach(o),Za=p(e),F=s(e,"P",{});var qa=r(F);Ce=s(qa,"A",{href:!0});var gn=r(Ce);Et=l(gn,"snapshot_download()"),gn.forEach(o),xt=l(qa," downloads an entire repository at a given revision. Like "),Se=s(qa,"A",{href:!0});var wn=r(Se);kt=l(wn,"cached_download()"),wn.forEach(o),jt=l(qa,", all downloaded files are cached on your local disk. However, even if only a single file is updated, the entire repository will be redownloaded."),qa.forEach(o),eo=p(e),He=s(e,"P",{});var mn=r(He);qt=l(mn,"Download a whole repository as shown in the following:"),mn.forEach(o),ao=p(e),m(ie.$$.fragment,e),oo=p(e),q=s(e,"P",{});var ue=r(q);Ue=s(ue,"A",{href:!0});var vn=r(Ue);At=l(vn,"snapshot_download()"),vn.forEach(o),Pt=l(ue," downloads the latest revision by default. If you want a specific repository revision, use the "),fa=s(ue,"CODE",{});var bn=r(fa);Ot=l(bn,"revision"),bn.forEach(o),Dt=l(ue," parameter as shown with "),Le=s(ue,"A",{href:!0});var yn=r(Le);Ct=l(yn,"hf_hub_url()"),yn.forEach(o),St=l(ue,"."),ue.forEach(o),to=p(e),m(he.$$.fragment,e),lo=p(e),C=s(e,"P",{});var Ge=r(C);Ht=l(Ge,"In general, it is usually better to manually download files with "),Ne=s(Ge,"A",{href:!0});var $n=r(Ne);Ut=l($n,"hf_hub_download()"),$n.forEach(o),Lt=l(Ge," (if you already know the file name) to avoid re-downloading an entire repository. "),Re=s(Ge,"A",{href:!0});var En=r(Re);Nt=l(En,"snapshot_download()"),En.forEach(o),Rt=l(Ge," is helpful when your library\u2019s downloading utility is a helper, and unaware of which files need to be downloaded."),Ge.forEach(o),no=p(e),c=s(e,"P",{});var u=r(c);Tt=l(u,"However, you don\u2019t want to always download the contents of an entire repository with "),Te=s(u,"A",{href:!0});var xn=r(Te);It=l(xn,"snapshot_download()"),xn.forEach(o),Ft=l(u,". Even if you don\u2019t know the file name and only know the file type, you can download specific files with "),da=s(u,"CODE",{});var kn=r(da);Mt=l(kn,"allow_regex"),kn.forEach(o),Bt=l(u," and "),pa=s(u,"CODE",{});var jn=r(pa);Wt=l(jn,"ignore_regex"),jn.forEach(o),Jt=l(u,`.
Use the `),ca=s(u,"CODE",{});var qn=r(ca);Gt=l(qn,"allow_regex"),qn.forEach(o),Yt=l(u," and "),ua=s(u,"CODE",{});var An=r(ua);zt=l(An,"ignore_regex"),An.forEach(o),Kt=l(u,` arguments to specify
which files to download.
`),_a=s(u,"CODE",{});var Pn=r(_a);Qt=l(Pn,"allow_regex"),Pn.forEach(o),Vt=l(u," and "),ga=s(u,"CODE",{});var On=r(ga);Xt=l(On,"ignore_regex"),On.forEach(o),Zt=l(u,` accept either a single regex or a list of regexes.
The regex matching is based on `),fe=s(u,"A",{href:!0,rel:!0});var Dn=r(fe);wa=s(Dn,"CODE",{});var Cn=r(wa);el=l(Cn,"fnmatch"),Cn.forEach(o),Dn.forEach(o),al=l(u," which means it provides support for Unix shell-style wildcards."),u.forEach(o),so=p(e),z=s(e,"P",{});var bo=r(z);ol=l(bo,"For example, you can use "),ma=s(bo,"CODE",{});var Sn=r(ma);tl=l(Sn,"allow_regex"),Sn.forEach(o),ll=l(bo," to only download JSON configuration files:"),bo.forEach(o),ro=p(e),m(de.$$.fragment,e),io=p(e),g=s(e,"P",{});var k=r(g);nl=l(k,"On the other hand, "),va=s(k,"CODE",{});var Hn=r(va);sl=l(Hn,"ignore_regex"),Hn.forEach(o),rl=l(k," can be used to exclude certain files from being downloaded. The following example ignores the "),ba=s(k,"CODE",{});var Un=r(ba);il=l(Un,".msgpack"),Un.forEach(o),hl=l(k," and "),ya=s(k,"CODE",{});var Ln=r(ya);fl=l(Ln,".h5"),Ln.forEach(o),dl=l(k,` file extensions:
or `),$a=s(k,"CODE",{});var Nn=r($a);pl=l(Nn,".h5"),Nn.forEach(o),cl=l(k," extensions, you could make use of "),Ea=s(k,"CODE",{});var Rn=r(Ea);ul=l(Rn,"ignore_regex"),Rn.forEach(o),_l=l(k,":"),k.forEach(o),ho=p(e),m(pe.$$.fragment,e),fo=p(e),K=s(e,"P",{});var yo=r(K);gl=l(yo,`Passing a regex can be especially useful when repositories contain files that
are never expected to be downloaded by `),Ie=s(yo,"A",{href:!0});var Tn=r(Ie);wl=l(Tn,"snapshot_download()"),Tn.forEach(o),ml=l(yo,"."),yo.forEach(o),po=p(e),E=s(e,"P",{});var S=r(E);vl=l(S,"Note that passing "),xa=s(S,"CODE",{});var In=r(xa);bl=l(In,"allow_regex"),In.forEach(o),yl=l(S," or "),ka=s(S,"CODE",{});var Fn=r(ka);$l=l(Fn,"ignore_regex"),Fn.forEach(o),El=l(S," does "),ja=s(S,"STRONG",{});var Mn=r(ja);xl=l(Mn,"not"),Mn.forEach(o),kl=l(S,` prevent
`),Fe=s(S,"A",{href:!0});var Bn=r(Fe);jl=l(Bn,"snapshot_download()"),Bn.forEach(o),ql=l(S,` from re-downloading the entire model repository if an ignored
file is changed.`),S.forEach(o),this.h()},h(){f(U,"name","hf:doc:metadata"),f(U,"content",JSON.stringify(Xn)),f(M,"id","title:-how-to-download-files-from-the-hub"),f(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(M,"href","#title:-how-to-download-files-from-the-hub"),f(L,"class","relative group"),f(B,"id","how-to-integrate-downstream-utilities-in-your-library"),f(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(B,"href","#how-to-integrate-downstream-utilities-in-your-library"),f(N,"class","relative group"),f(J,"id","hfhuburl"),f(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(J,"href","#hfhuburl"),f(R,"class","relative group"),f(_e,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.hf_hub_url"),zn(we.src,Ol="/docs/assets/hub/repo.png")||f(we,"src",Ol),f(we,"alt","/docs/assets/hub/repo.png"),f(be,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.hf_hub_url"),f(G,"id","cacheddownload"),f(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(G,"href","#cacheddownload"),f(T,"class","relative group"),f(ye,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.cached_download"),f($e,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.cached_download"),f(Ee,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.cached_download"),f(xe,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.hf_hub_url"),f(ke,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.cached_download"),f(je,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.hf_hub_url"),f(qe,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.cached_download"),f(Ae,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.hf_hub_download"),f(Pe,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.hf_hub_download"),f(Oe,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.hf_hub_url"),f(De,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.cached_download"),f(Y,"id","snapshotdownload"),f(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Y,"href","#snapshotdownload"),f(I,"class","relative group"),f(Ce,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.snapshot_download"),f(Se,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.cached_download"),f(Ue,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.snapshot_download"),f(Le,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.hf_hub_url"),f(Ne,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.hf_hub_download"),f(Re,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.snapshot_download"),f(Te,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.snapshot_download"),f(fe,"href","https://docs.python.org/3/library/fnmatch.html"),f(fe,"rel","nofollow"),f(Ie,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.snapshot_download"),f(Fe,"href","/docs/huggingface_hub/pr_855/en/package_reference/file_download#huggingface_hub.snapshot_download")},m(e,i){a(document.head,U),h(e,Pa,i),h(e,Oa,i),h(e,Da,i),h(e,L,i),a(L,M),a(M,Ye),v(Q,Ye,null),a(L,$o),a(L,ze),a(ze,Eo),h(e,Ca,i),h(e,N,i),a(N,B),a(B,Ke),v(V,Ke,null),a(N,xo),a(N,Qe),a(Qe,ko),h(e,Sa,i),h(e,W,i),a(W,jo),a(W,Ve),a(Ve,qo),a(W,Ao),h(e,Ha,i),h(e,A,i),a(A,Xe),a(Xe,Po),a(A,Oo),a(A,Ze),a(Ze,Do),a(A,Co),a(A,ea),a(ea,So),h(e,Ua,i),h(e,R,i),a(R,J),a(J,aa),v(X,aa,null),a(R,Ho),a(R,oa),a(oa,Uo),h(e,La,i),h(e,P,i),a(P,Lo),a(P,_e),a(_e,No),a(P,Ro),a(P,ta),a(ta,To),a(P,Io),h(e,Na,i),h(e,ge,i),a(ge,we),h(e,Ra,i),v(Z,e,i),h(e,Ta,i),h(e,me,i),a(me,Fo),h(e,Ia,i),h(e,ve,i),a(ve,Mo),h(e,Fa,i),v(ee,e,i),h(e,Ma,i),h(e,ae,i),a(ae,be),a(be,Bo),a(ae,Wo),h(e,Ba,i),v(oe,e,i),h(e,Wa,i),h(e,O,i),a(O,Jo),a(O,la),a(la,Go),a(O,Yo),a(O,na),a(na,zo),a(O,Ko),h(e,Ja,i),v(te,e,i),h(e,Ga,i),h(e,T,i),a(T,G),a(G,sa),v(le,sa,null),a(T,Qo),a(T,ra),a(ra,Vo),h(e,Ya,i),h(e,j,i),a(j,ye),a(ye,Xo),a(j,Zo),a(j,$e),a($e,et),a(j,at),a(j,Ee),a(Ee,ot),a(j,tt),h(e,za,i),h(e,D,i),a(D,lt),a(D,xe),a(xe,nt),a(D,st),a(D,ke),a(ke,rt),a(D,it),h(e,Ka,i),v(ne,e,i),h(e,Qa,i),h(e,_,i),a(_,je),a(je,ht),a(_,ft),a(_,qe),a(qe,dt),a(_,pt),a(_,Ae),a(Ae,ct),a(_,ut),a(_,Pe),a(Pe,_t),a(_,gt),a(_,Oe),a(Oe,wt),a(_,mt),a(_,De),a(De,vt),a(_,bt),h(e,Va,i),v(se,e,i),h(e,Xa,i),h(e,I,i),a(I,Y),a(Y,ia),v(re,ia,null),a(I,yt),a(I,ha),a(ha,$t),h(e,Za,i),h(e,F,i),a(F,Ce),a(Ce,Et),a(F,xt),a(F,Se),a(Se,kt),a(F,jt),h(e,eo,i),h(e,He,i),a(He,qt),h(e,ao,i),v(ie,e,i),h(e,oo,i),h(e,q,i),a(q,Ue),a(Ue,At),a(q,Pt),a(q,fa),a(fa,Ot),a(q,Dt),a(q,Le),a(Le,Ct),a(q,St),h(e,to,i),v(he,e,i),h(e,lo,i),h(e,C,i),a(C,Ht),a(C,Ne),a(Ne,Ut),a(C,Lt),a(C,Re),a(Re,Nt),a(C,Rt),h(e,no,i),h(e,c,i),a(c,Tt),a(c,Te),a(Te,It),a(c,Ft),a(c,da),a(da,Mt),a(c,Bt),a(c,pa),a(pa,Wt),a(c,Jt),a(c,ca),a(ca,Gt),a(c,Yt),a(c,ua),a(ua,zt),a(c,Kt),a(c,_a),a(_a,Qt),a(c,Vt),a(c,ga),a(ga,Xt),a(c,Zt),a(c,fe),a(fe,wa),a(wa,el),a(c,al),h(e,so,i),h(e,z,i),a(z,ol),a(z,ma),a(ma,tl),a(z,ll),h(e,ro,i),v(de,e,i),h(e,io,i),h(e,g,i),a(g,nl),a(g,va),a(va,sl),a(g,rl),a(g,ba),a(ba,il),a(g,hl),a(g,ya),a(ya,fl),a(g,dl),a(g,$a),a($a,pl),a(g,cl),a(g,Ea),a(Ea,ul),a(g,_l),h(e,ho,i),v(pe,e,i),h(e,fo,i),h(e,K,i),a(K,gl),a(K,Ie),a(Ie,wl),a(K,ml),h(e,po,i),h(e,E,i),a(E,vl),a(E,xa),a(xa,bl),a(E,yl),a(E,ka),a(ka,$l),a(E,El),a(E,ja),a(ja,xl),a(E,kl),a(E,Fe),a(Fe,jl),a(E,ql),co=!0},p:Kn,i(e){co||(b(Q.$$.fragment,e),b(V.$$.fragment,e),b(X.$$.fragment,e),b(Z.$$.fragment,e),b(ee.$$.fragment,e),b(oe.$$.fragment,e),b(te.$$.fragment,e),b(le.$$.fragment,e),b(ne.$$.fragment,e),b(se.$$.fragment,e),b(re.$$.fragment,e),b(ie.$$.fragment,e),b(he.$$.fragment,e),b(de.$$.fragment,e),b(pe.$$.fragment,e),co=!0)},o(e){y(Q.$$.fragment,e),y(V.$$.fragment,e),y(X.$$.fragment,e),y(Z.$$.fragment,e),y(ee.$$.fragment,e),y(oe.$$.fragment,e),y(te.$$.fragment,e),y(le.$$.fragment,e),y(ne.$$.fragment,e),y(se.$$.fragment,e),y(re.$$.fragment,e),y(ie.$$.fragment,e),y(he.$$.fragment,e),y(de.$$.fragment,e),y(pe.$$.fragment,e),co=!1},d(e){o(U),e&&o(Pa),e&&o(Oa),e&&o(Da),e&&o(L),$(Q),e&&o(Ca),e&&o(N),$(V),e&&o(Sa),e&&o(W),e&&o(Ha),e&&o(A),e&&o(Ua),e&&o(R),$(X),e&&o(La),e&&o(P),e&&o(Na),e&&o(ge),e&&o(Ra),$(Z,e),e&&o(Ta),e&&o(me),e&&o(Ia),e&&o(ve),e&&o(Fa),$(ee,e),e&&o(Ma),e&&o(ae),e&&o(Ba),$(oe,e),e&&o(Wa),e&&o(O),e&&o(Ja),$(te,e),e&&o(Ga),e&&o(T),$(le),e&&o(Ya),e&&o(j),e&&o(za),e&&o(D),e&&o(Ka),$(ne,e),e&&o(Qa),e&&o(_),e&&o(Va),$(se,e),e&&o(Xa),e&&o(I),$(re),e&&o(Za),e&&o(F),e&&o(eo),e&&o(He),e&&o(ao),$(ie,e),e&&o(oo),e&&o(q),e&&o(to),$(he,e),e&&o(lo),e&&o(C),e&&o(no),e&&o(c),e&&o(so),e&&o(z),e&&o(ro),$(de,e),e&&o(io),e&&o(g),e&&o(ho),$(pe,e),e&&o(fo),e&&o(K),e&&o(po),e&&o(E)}}}const Xn={local:"how-to-integrate-downstream-utilities-in-your-library",sections:[{local:"hfhuburl",title:"hf_hub_url"},{local:"cacheddownload",title:"cached_download"},{local:"snapshotdownload",title:"snapshot_download"}],title:"How to integrate downstream utilities in your library"};function Zn(Pl){return Qn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ts extends Wn{constructor(U){super();Jn(this,U,Zn,Vn,Gn,{})}}export{ts as default,Xn as metadata};
