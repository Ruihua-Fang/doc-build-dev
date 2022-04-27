import{S as Kt,i as Qt,s as Vt,e as l,k as f,w as _,t as n,M as Xt,c as s,d as a,m as d,a as r,x as g,h as t,b as p,N as Zt,F as o,g as h,y as w,L as el,q as m,o as v,B as b,v as ol}from"../chunks/vendor-d3924577.js";import{I as ta}from"../chunks/IconCopyLink-f94c3d80.js";import{C as O}from"../chunks/CodeBlock-ff545b14.js";function al(Yn){let C,_o,S,I,Ue,z,la,Ie,sa,go,R,ra,Re,ia,ha,wo,j,Fe,fa,da,Be,pa,ca,Me,ua,mo,H,F,We,K,_a,Je,ga,vo,k,wa,Ge,ma,va,de,ba,ya,bo,Q,yo,pe,ce,zn,$o,ue,$a,Eo,V,xo,_e,Ea,jo,X,ko,q,xa,Ye,ja,ka,ze,qa,Pa,qo,Z,Po,T,B,Ke,ee,Aa,Qe,Da,Ao,E,ge,Oa,Ca,we,Sa,Ha,me,Ta,La,Do,P,Na,ve,Ua,Ia,be,Ra,Fa,Oo,oe,Co,x,ye,Ba,Ma,$e,Wa,Ja,Ee,Ga,Ya,So,ae,Ho,L,M,Ve,ne,za,Xe,Ka,To,N,xe,Qa,Va,je,Xa,Za,Lo,ke,en,No,te,Uo,U,qe,on,an,Ze,nn,tn,Io,le,Ro,A,ln,Pe,sn,rn,Ae,hn,fn,Fo,c,dn,De,pn,cn,eo,un,_n,oo,gn,wn,ao,mn,vn,no,bn,yn,Bo,W,$n,se,to,En,xn,Mo,J,jn,lo,kn,qn,Wo,re,Jo,y,Pn,so,An,Dn,ro,On,Cn,io,Sn,Hn,Go,ie,Yo,G,Tn,Oe,Ln,Nn,zo,u,Un,ho,In,Rn,fo,Fn,Bn,po,Mn,Wn,Ce,Jn,Gn,Ko;return z=new ta({}),K=new ta({}),Q=new O({props:{code:`from huggingface_hub import hf_hub_url
hf_hub_url(repo_id="lysandre/arxiv-nlp", filename="config.json")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_url
<span class="hljs-meta">&gt;&gt;&gt; </span>hf_hub_url(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, filename=<span class="hljs-string">&quot;config.json&quot;</span>)
<span class="hljs-string">&#x27;https://huggingface.co/lysandre/arxiv-nlp/resolve/main/config.json&#x27;</span>`}}),V=new O({props:{code:`hf_hub_url(repo_id="lysandre/arxiv-nlp", 
           filename="config.json", 
           revision="877b84a8f93f2d619faa2a6e514a32beef88ab0a",
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>hf_hub_url(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, 
<span class="hljs-meta">... </span>           filename=<span class="hljs-string">&quot;config.json&quot;</span>, 
<span class="hljs-meta">... </span>           revision=<span class="hljs-string">&quot;877b84a8f93f2d619faa2a6e514a32beef88ab0a&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-string">&#x27;https://huggingface.co/lysandre/arxiv-nlp/resolve/877b84a8f93f2d619faa2a6e514a32beef88ab0a/config.json&#x27;</span>`}}),X=new O({props:{code:'hf_hub_url(repo_id="lysandre/arxiv-nlp", filename="config.json", revision="main")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>hf_hub_url(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, filename=<span class="hljs-string">&quot;config.json&quot;</span>, revision=<span class="hljs-string">&quot;main&quot;</span>)'}}),Z=new O({props:{code:'hf_hub_url(repo_id="lysandre/arxiv-nlp", filename="config.json", revision="v1.0")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>hf_hub_url(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, filename=<span class="hljs-string">&quot;config.json&quot;</span>, revision=<span class="hljs-string">&quot;v1.0&quot;</span>)'}}),ee=new ta({}),oe=new O({props:{code:`from huggingface_hub import hf_hub_url, cached_download
config_file_url = hf_hub_url("lysandre/arxiv-nlp", filename="config.json")
cached_download(config_file_url)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_url, cached_download
<span class="hljs-meta">&gt;&gt;&gt; </span>config_file_url = hf_hub_url(<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, filename=<span class="hljs-string">&quot;config.json&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>cached_download(config_file_url)
<span class="hljs-string">&#x27;/home/lysandre/.cache/huggingface/hub/bc0e8cc2f8271b322304e8bb84b3b7580701d53a335ab2d75da19c249e2eeebb.066dae6fdb1e2b8cce60c35cc0f78ed1451d9b341c78de19f3ad469d10a8cbb1&#x27;</span>`}}),ae=new O({props:{code:`from huggingface_hub import hf_hub_download
hf_hub_download(repo_id="lysandre/arxiv-nlp", filename="config.json")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download
<span class="hljs-meta">&gt;&gt;&gt; </span>hf_hub_download(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, filename=<span class="hljs-string">&quot;config.json&quot;</span>)`}}),ne=new ta({}),te=new O({props:{code:`from huggingface_hub import snapshot_download
snapshot_download(repo_id="lysandre/arxiv-nlp")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> snapshot_download
<span class="hljs-meta">&gt;&gt;&gt; </span>snapshot_download(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>)
<span class="hljs-string">&#x27;/home/lysandre/.cache/huggingface/hub/lysandre__arxiv-nlp.894a9adde21d9a3e3843e6d5aeaaf01875c7fade&#x27;</span>`}}),le=new O({props:{code:`from huggingface_hub import snapshot_download
snapshot_download(repo_id="lysandre/arxiv-nlp", revision="main")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> snapshot_download
<span class="hljs-meta">&gt;&gt;&gt; </span>snapshot_download(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, revision=<span class="hljs-string">&quot;main&quot;</span>)`}}),re=new O({props:{code:`from huggingface_hub import snapshot_download
snapshot_download(repo_id="lysandre/arxiv-nlp", allow_regex="*.json")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> snapshot_download
<span class="hljs-meta">&gt;&gt;&gt; </span>snapshot_download(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, allow_regex=<span class="hljs-string">&quot;*.json&quot;</span>)`}}),ie=new O({props:{code:`from huggingface_hub import snapshot_download
snapshot_download(repo_id="lysandre/arxiv-nlp", ignore_regex=["*.msgpack", "*.h5"])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> snapshot_download
<span class="hljs-meta">&gt;&gt;&gt; </span>snapshot_download(repo_id=<span class="hljs-string">&quot;lysandre/arxiv-nlp&quot;</span>, ignore_regex=[<span class="hljs-string">&quot;*.msgpack&quot;</span>, <span class="hljs-string">&quot;*.h5&quot;</span>])`}}),{c(){C=l("meta"),_o=f(),S=l("h1"),I=l("a"),Ue=l("span"),_(z.$$.fragment),la=f(),Ie=l("span"),sa=n("Download files from the Hub"),go=f(),R=l("p"),ra=n("The "),Re=l("code"),ia=n("huggingface_hub"),ha=n(` library provides functions to download files from the repositories
stored on the Hub. You can use these functions independently or integrate them into your
own library, making it more convenient for your users to interact with the Hub. This
guide will show you how to:`),wo=f(),j=l("ul"),Fe=l("li"),fa=n("Specify a file to download from the Hub."),da=f(),Be=l("li"),pa=n("Download and cache a file on your disk."),ca=f(),Me=l("li"),ua=n("Download all the files in a repository."),mo=f(),H=l("h2"),F=l("a"),We=l("span"),_(K.$$.fragment),_a=f(),Je=l("span"),ga=n("Choose a file to download"),vo=f(),k=l("p"),wa=n("Use the "),Ge=l("code"),ma=n("filename"),va=n(" parameter in the "),de=l("a"),ba=n("hf_hub_url()"),ya=n(` function to retrieve the URL of a
specific file to download:`),bo=f(),_(Q.$$.fragment),yo=f(),pe=l("p"),ce=l("img"),$o=f(),ue=l("p"),$a=n(`Specify a particular file version by providing the file revision, which can be the
branch name, a tag, or a commit hash. When using the commit hash, it must be the
full-length hash instead of a 7-character commit hash:`),Eo=f(),_(V.$$.fragment),xo=f(),_e=l("p"),Ea=n("To specify a file revision with the branch name:"),jo=f(),_(X.$$.fragment),ko=f(),q=l("p"),xa=n("To specify a file revision with a tag identifier. For example, if you want "),Ye=l("code"),ja=n("v1.0"),ka=n(` of the
`),ze=l("code"),qa=n("config.json"),Pa=n(" file:"),qo=f(),_(Z.$$.fragment),Po=f(),T=l("h2"),B=l("a"),Ke=l("span"),_(ee.$$.fragment),Aa=f(),Qe=l("span"),Da=n("Download and store a file"),Ao=f(),E=l("p"),ge=l("a"),Oa=n("cached_download()"),Ca=n(` is used to download and cache a file on your local disk. Once a file
is stored in your cache, you don\u2019t have to redownload it the next time you use it.
`),we=l("a"),Sa=n("cached_download()"),Ha=n(` is a hands-free solution for staying up to date with new file
versions. When a downloaded file is updated in the remote repository,
`),me=l("a"),Ta=n("cached_download()"),La=n(" will automatically download and store it."),Do=f(),P=l("p"),Na=n("Begin by retrieving the file URL with "),ve=l("a"),Ua=n("hf_hub_url()"),Ia=n(`, and then pass the specified URL to
`),be=l("a"),Ra=n("cached_download()"),Fa=n(" to download the file:"),Oo=f(),_(oe.$$.fragment),Co=f(),x=l("p"),ye=l("a"),Ba=n("hf_hub_url()"),Ma=n(" and "),$e=l("a"),Wa=n("cached_download()"),Ja=n(` work hand-in-hand to download a file. This is
such a standard workflow that `),Ee=l("a"),Ga=n("hf_hub_download()"),Ya=n(` is a wrapper that calls both of these
functions.`),So=f(),_(ae.$$.fragment),Ho=f(),L=l("h2"),M=l("a"),Ve=l("span"),_(ne.$$.fragment),za=f(),Xe=l("span"),Ka=n("Download an entire repository"),To=f(),N=l("p"),xe=l("a"),Qa=n("snapshot_download()"),Va=n(` downloads an entire repository at a given revision. Like
`),je=l("a"),Xa=n("cached_download()"),Za=n(`, all downloaded files are cached on your local disk. However, even
if only a single file is updated, the entire repository will be redownloaded.`),Lo=f(),ke=l("p"),en=n("Download a whole repository as shown in the following:"),No=f(),_(te.$$.fragment),Uo=f(),U=l("p"),qe=l("a"),on=n("snapshot_download()"),an=n(` downloads the latest revision by default. If you want a specific
repository revision, use the `),Ze=l("code"),nn=n("revision"),tn=n(" parameter:"),Io=f(),_(le.$$.fragment),Ro=f(),A=l("p"),ln=n("In general, it is usually better to download files with "),Pe=l("a"),sn=n("hf_hub_download()"),rn=n(` - if you
already know the file name - to avoid redownloading an entire repository.
`),Ae=l("a"),hn=n("snapshot_download()"),fn=n(" is helpful when you are unaware of which files to download."),Fo=f(),c=l("p"),dn=n(`However, you don\u2019t always want to download the contents of an entire repository with
`),De=l("a"),pn=n("snapshot_download()"),cn=n(`. Even if you don\u2019t know the file name, you can download specific
files if you know the file type with `),eo=l("code"),un=n("allow_regex"),_n=n(" and "),oo=l("code"),gn=n("ignore_regex"),wn=n(`. Use the
`),ao=l("code"),mn=n("allow_regex"),vn=n(" and "),no=l("code"),bn=n("ignore_regex"),yn=n(` arguments to specify which files to download. These
parameters accept either a single regex or a list of regexes.`),Bo=f(),W=l("p"),$n=n(`The regex matching is based on
`),se=l("a"),to=l("code"),En=n("fnmatch"),xn=n(`, which provides support for
Unix shell-style wildcards.`),Mo=f(),J=l("p"),jn=n("For example, you can use "),lo=l("code"),kn=n("allow_regex"),qn=n(" to only download JSON configuration files:"),Wo=f(),_(re.$$.fragment),Jo=f(),y=l("p"),Pn=n("On the other hand, "),so=l("code"),An=n("ignore_regex"),Dn=n(` can exclude certain files from being downloaded. The
following example ignores the `),ro=l("code"),On=n(".msgpack"),Cn=n(" and "),io=l("code"),Sn=n(".h5"),Hn=n(" file extensions:"),Go=f(),_(ie.$$.fragment),Yo=f(),G=l("p"),Tn=n(`Passing a regex can be especially useful when repositories contain files that are never
expected to be downloaded by `),Oe=l("a"),Ln=n("snapshot_download()"),Nn=n("."),zo=f(),u=l("p"),Un=n("Note that passing "),ho=l("code"),In=n("allow_regex"),Rn=n(" or "),fo=l("code"),Fn=n("ignore_regex"),Bn=n(" does "),po=l("strong"),Mn=n("not"),Wn=n(` prevent
`),Ce=l("a"),Jn=n("snapshot_download()"),Gn=n(` from redownloading the entire model repository if an ignored file
is changed.`),this.h()},l(e){const i=Xt('[data-svelte="svelte-1phssyn"]',document.head);C=s(i,"META",{name:!0,content:!0}),i.forEach(a),_o=d(e),S=s(e,"H1",{class:!0});var Qo=r(S);I=s(Qo,"A",{id:!0,class:!0,href:!0});var Kn=r(I);Ue=s(Kn,"SPAN",{});var Qn=r(Ue);g(z.$$.fragment,Qn),Qn.forEach(a),Kn.forEach(a),la=d(Qo),Ie=s(Qo,"SPAN",{});var Vn=r(Ie);sa=t(Vn,"Download files from the Hub"),Vn.forEach(a),Qo.forEach(a),go=d(e),R=s(e,"P",{});var Vo=r(R);ra=t(Vo,"The "),Re=s(Vo,"CODE",{});var Xn=r(Re);ia=t(Xn,"huggingface_hub"),Xn.forEach(a),ha=t(Vo,` library provides functions to download files from the repositories
stored on the Hub. You can use these functions independently or integrate them into your
own library, making it more convenient for your users to interact with the Hub. This
guide will show you how to:`),Vo.forEach(a),wo=d(e),j=s(e,"UL",{});var Se=r(j);Fe=s(Se,"LI",{});var Zn=r(Fe);fa=t(Zn,"Specify a file to download from the Hub."),Zn.forEach(a),da=d(Se),Be=s(Se,"LI",{});var et=r(Be);pa=t(et,"Download and cache a file on your disk."),et.forEach(a),ca=d(Se),Me=s(Se,"LI",{});var ot=r(Me);ua=t(ot,"Download all the files in a repository."),ot.forEach(a),Se.forEach(a),mo=d(e),H=s(e,"H2",{class:!0});var Xo=r(H);F=s(Xo,"A",{id:!0,class:!0,href:!0});var at=r(F);We=s(at,"SPAN",{});var nt=r(We);g(K.$$.fragment,nt),nt.forEach(a),at.forEach(a),_a=d(Xo),Je=s(Xo,"SPAN",{});var tt=r(Je);ga=t(tt,"Choose a file to download"),tt.forEach(a),Xo.forEach(a),vo=d(e),k=s(e,"P",{});var He=r(k);wa=t(He,"Use the "),Ge=s(He,"CODE",{});var lt=r(Ge);ma=t(lt,"filename"),lt.forEach(a),va=t(He," parameter in the "),de=s(He,"A",{href:!0});var st=r(de);ba=t(st,"hf_hub_url()"),st.forEach(a),ya=t(He,` function to retrieve the URL of a
specific file to download:`),He.forEach(a),bo=d(e),g(Q.$$.fragment,e),yo=d(e),pe=s(e,"P",{});var rt=r(pe);ce=s(rt,"IMG",{src:!0,alt:!0}),rt.forEach(a),$o=d(e),ue=s(e,"P",{});var it=r(ue);$a=t(it,`Specify a particular file version by providing the file revision, which can be the
branch name, a tag, or a commit hash. When using the commit hash, it must be the
full-length hash instead of a 7-character commit hash:`),it.forEach(a),Eo=d(e),g(V.$$.fragment,e),xo=d(e),_e=s(e,"P",{});var ht=r(_e);Ea=t(ht,"To specify a file revision with the branch name:"),ht.forEach(a),jo=d(e),g(X.$$.fragment,e),ko=d(e),q=s(e,"P",{});var Te=r(q);xa=t(Te,"To specify a file revision with a tag identifier. For example, if you want "),Ye=s(Te,"CODE",{});var ft=r(Ye);ja=t(ft,"v1.0"),ft.forEach(a),ka=t(Te,` of the
`),ze=s(Te,"CODE",{});var dt=r(ze);qa=t(dt,"config.json"),dt.forEach(a),Pa=t(Te," file:"),Te.forEach(a),qo=d(e),g(Z.$$.fragment,e),Po=d(e),T=s(e,"H2",{class:!0});var Zo=r(T);B=s(Zo,"A",{id:!0,class:!0,href:!0});var pt=r(B);Ke=s(pt,"SPAN",{});var ct=r(Ke);g(ee.$$.fragment,ct),ct.forEach(a),pt.forEach(a),Aa=d(Zo),Qe=s(Zo,"SPAN",{});var ut=r(Qe);Da=t(ut,"Download and store a file"),ut.forEach(a),Zo.forEach(a),Ao=d(e),E=s(e,"P",{});var he=r(E);ge=s(he,"A",{href:!0});var _t=r(ge);Oa=t(_t,"cached_download()"),_t.forEach(a),Ca=t(he,` is used to download and cache a file on your local disk. Once a file
is stored in your cache, you don\u2019t have to redownload it the next time you use it.
`),we=s(he,"A",{href:!0});var gt=r(we);Sa=t(gt,"cached_download()"),gt.forEach(a),Ha=t(he,` is a hands-free solution for staying up to date with new file
versions. When a downloaded file is updated in the remote repository,
`),me=s(he,"A",{href:!0});var wt=r(me);Ta=t(wt,"cached_download()"),wt.forEach(a),La=t(he," will automatically download and store it."),he.forEach(a),Do=d(e),P=s(e,"P",{});var Le=r(P);Na=t(Le,"Begin by retrieving the file URL with "),ve=s(Le,"A",{href:!0});var mt=r(ve);Ua=t(mt,"hf_hub_url()"),mt.forEach(a),Ia=t(Le,`, and then pass the specified URL to
`),be=s(Le,"A",{href:!0});var vt=r(be);Ra=t(vt,"cached_download()"),vt.forEach(a),Fa=t(Le," to download the file:"),Le.forEach(a),Oo=d(e),g(oe.$$.fragment,e),Co=d(e),x=s(e,"P",{});var fe=r(x);ye=s(fe,"A",{href:!0});var bt=r(ye);Ba=t(bt,"hf_hub_url()"),bt.forEach(a),Ma=t(fe," and "),$e=s(fe,"A",{href:!0});var yt=r($e);Wa=t(yt,"cached_download()"),yt.forEach(a),Ja=t(fe,` work hand-in-hand to download a file. This is
such a standard workflow that `),Ee=s(fe,"A",{href:!0});var $t=r(Ee);Ga=t($t,"hf_hub_download()"),$t.forEach(a),Ya=t(fe,` is a wrapper that calls both of these
functions.`),fe.forEach(a),So=d(e),g(ae.$$.fragment,e),Ho=d(e),L=s(e,"H2",{class:!0});var ea=r(L);M=s(ea,"A",{id:!0,class:!0,href:!0});var Et=r(M);Ve=s(Et,"SPAN",{});var xt=r(Ve);g(ne.$$.fragment,xt),xt.forEach(a),Et.forEach(a),za=d(ea),Xe=s(ea,"SPAN",{});var jt=r(Xe);Ka=t(jt,"Download an entire repository"),jt.forEach(a),ea.forEach(a),To=d(e),N=s(e,"P",{});var co=r(N);xe=s(co,"A",{href:!0});var kt=r(xe);Qa=t(kt,"snapshot_download()"),kt.forEach(a),Va=t(co,` downloads an entire repository at a given revision. Like
`),je=s(co,"A",{href:!0});var qt=r(je);Xa=t(qt,"cached_download()"),qt.forEach(a),Za=t(co,`, all downloaded files are cached on your local disk. However, even
if only a single file is updated, the entire repository will be redownloaded.`),co.forEach(a),Lo=d(e),ke=s(e,"P",{});var Pt=r(ke);en=t(Pt,"Download a whole repository as shown in the following:"),Pt.forEach(a),No=d(e),g(te.$$.fragment,e),Uo=d(e),U=s(e,"P",{});var uo=r(U);qe=s(uo,"A",{href:!0});var At=r(qe);on=t(At,"snapshot_download()"),At.forEach(a),an=t(uo,` downloads the latest revision by default. If you want a specific
repository revision, use the `),Ze=s(uo,"CODE",{});var Dt=r(Ze);nn=t(Dt,"revision"),Dt.forEach(a),tn=t(uo," parameter:"),uo.forEach(a),Io=d(e),g(le.$$.fragment,e),Ro=d(e),A=s(e,"P",{});var Ne=r(A);ln=t(Ne,"In general, it is usually better to download files with "),Pe=s(Ne,"A",{href:!0});var Ot=r(Pe);sn=t(Ot,"hf_hub_download()"),Ot.forEach(a),rn=t(Ne,` - if you
already know the file name - to avoid redownloading an entire repository.
`),Ae=s(Ne,"A",{href:!0});var Ct=r(Ae);hn=t(Ct,"snapshot_download()"),Ct.forEach(a),fn=t(Ne," is helpful when you are unaware of which files to download."),Ne.forEach(a),Fo=d(e),c=s(e,"P",{});var $=r(c);dn=t($,`However, you don\u2019t always want to download the contents of an entire repository with
`),De=s($,"A",{href:!0});var St=r(De);pn=t(St,"snapshot_download()"),St.forEach(a),cn=t($,`. Even if you don\u2019t know the file name, you can download specific
files if you know the file type with `),eo=s($,"CODE",{});var Ht=r(eo);un=t(Ht,"allow_regex"),Ht.forEach(a),_n=t($," and "),oo=s($,"CODE",{});var Tt=r(oo);gn=t(Tt,"ignore_regex"),Tt.forEach(a),wn=t($,`. Use the
`),ao=s($,"CODE",{});var Lt=r(ao);mn=t(Lt,"allow_regex"),Lt.forEach(a),vn=t($," and "),no=s($,"CODE",{});var Nt=r(no);bn=t(Nt,"ignore_regex"),Nt.forEach(a),yn=t($,` arguments to specify which files to download. These
parameters accept either a single regex or a list of regexes.`),$.forEach(a),Bo=d(e),W=s(e,"P",{});var oa=r(W);$n=t(oa,`The regex matching is based on
`),se=s(oa,"A",{href:!0,rel:!0});var Ut=r(se);to=s(Ut,"CODE",{});var It=r(to);En=t(It,"fnmatch"),It.forEach(a),Ut.forEach(a),xn=t(oa,`, which provides support for
Unix shell-style wildcards.`),oa.forEach(a),Mo=d(e),J=s(e,"P",{});var aa=r(J);jn=t(aa,"For example, you can use "),lo=s(aa,"CODE",{});var Rt=r(lo);kn=t(Rt,"allow_regex"),Rt.forEach(a),qn=t(aa," to only download JSON configuration files:"),aa.forEach(a),Wo=d(e),g(re.$$.fragment,e),Jo=d(e),y=s(e,"P",{});var Y=r(y);Pn=t(Y,"On the other hand, "),so=s(Y,"CODE",{});var Ft=r(so);An=t(Ft,"ignore_regex"),Ft.forEach(a),Dn=t(Y,` can exclude certain files from being downloaded. The
following example ignores the `),ro=s(Y,"CODE",{});var Bt=r(ro);On=t(Bt,".msgpack"),Bt.forEach(a),Cn=t(Y," and "),io=s(Y,"CODE",{});var Mt=r(io);Sn=t(Mt,".h5"),Mt.forEach(a),Hn=t(Y," file extensions:"),Y.forEach(a),Go=d(e),g(ie.$$.fragment,e),Yo=d(e),G=s(e,"P",{});var na=r(G);Tn=t(na,`Passing a regex can be especially useful when repositories contain files that are never
expected to be downloaded by `),Oe=s(na,"A",{href:!0});var Wt=r(Oe);Ln=t(Wt,"snapshot_download()"),Wt.forEach(a),Nn=t(na,"."),na.forEach(a),zo=d(e),u=s(e,"P",{});var D=r(u);Un=t(D,"Note that passing "),ho=s(D,"CODE",{});var Jt=r(ho);In=t(Jt,"allow_regex"),Jt.forEach(a),Rn=t(D," or "),fo=s(D,"CODE",{});var Gt=r(fo);Fn=t(Gt,"ignore_regex"),Gt.forEach(a),Bn=t(D," does "),po=s(D,"STRONG",{});var Yt=r(po);Mn=t(Yt,"not"),Yt.forEach(a),Wn=t(D,` prevent
`),Ce=s(D,"A",{href:!0});var zt=r(Ce);Jn=t(zt,"snapshot_download()"),zt.forEach(a),Gn=t(D,` from redownloading the entire model repository if an ignored file
is changed.`),D.forEach(a),this.h()},h(){p(C,"name","hf:doc:metadata"),p(C,"content",JSON.stringify(nl)),p(I,"id","download-files-from-the-hub"),p(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(I,"href","#download-files-from-the-hub"),p(S,"class","relative group"),p(F,"id","choose-a-file-to-download"),p(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(F,"href","#choose-a-file-to-download"),p(H,"class","relative group"),p(de,"href","/docs/huggingface_hub/pr_856/en/package_reference/file_download#huggingface_hub.hf_hub_url"),Zt(ce.src,zn="/docs/assets/hub/repo.png")||p(ce,"src",zn),p(ce,"alt","/docs/assets/hub/repo.png"),p(B,"id","download-and-store-a-file"),p(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(B,"href","#download-and-store-a-file"),p(T,"class","relative group"),p(ge,"href","/docs/huggingface_hub/pr_856/en/package_reference/file_download#huggingface_hub.cached_download"),p(we,"href","/docs/huggingface_hub/pr_856/en/package_reference/file_download#huggingface_hub.cached_download"),p(me,"href","/docs/huggingface_hub/pr_856/en/package_reference/file_download#huggingface_hub.cached_download"),p(ve,"href","/docs/huggingface_hub/pr_856/en/package_reference/file_download#huggingface_hub.hf_hub_url"),p(be,"href","/docs/huggingface_hub/pr_856/en/package_reference/file_download#huggingface_hub.cached_download"),p(ye,"href","/docs/huggingface_hub/pr_856/en/package_reference/file_download#huggingface_hub.hf_hub_url"),p($e,"href","/docs/huggingface_hub/pr_856/en/package_reference/file_download#huggingface_hub.cached_download"),p(Ee,"href","/docs/huggingface_hub/pr_856/en/package_reference/file_download#huggingface_hub.hf_hub_download"),p(M,"id","download-an-entire-repository"),p(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(M,"href","#download-an-entire-repository"),p(L,"class","relative group"),p(xe,"href","/docs/huggingface_hub/pr_856/en/package_reference/file_download#huggingface_hub.snapshot_download"),p(je,"href","/docs/huggingface_hub/pr_856/en/package_reference/file_download#huggingface_hub.cached_download"),p(qe,"href","/docs/huggingface_hub/pr_856/en/package_reference/file_download#huggingface_hub.snapshot_download"),p(Pe,"href","/docs/huggingface_hub/pr_856/en/package_reference/file_download#huggingface_hub.hf_hub_download"),p(Ae,"href","/docs/huggingface_hub/pr_856/en/package_reference/file_download#huggingface_hub.snapshot_download"),p(De,"href","/docs/huggingface_hub/pr_856/en/package_reference/file_download#huggingface_hub.snapshot_download"),p(se,"href","https://docs.python.org/3/library/fnmatch.html"),p(se,"rel","nofollow"),p(Oe,"href","/docs/huggingface_hub/pr_856/en/package_reference/file_download#huggingface_hub.snapshot_download"),p(Ce,"href","/docs/huggingface_hub/pr_856/en/package_reference/file_download#huggingface_hub.snapshot_download")},m(e,i){o(document.head,C),h(e,_o,i),h(e,S,i),o(S,I),o(I,Ue),w(z,Ue,null),o(S,la),o(S,Ie),o(Ie,sa),h(e,go,i),h(e,R,i),o(R,ra),o(R,Re),o(Re,ia),o(R,ha),h(e,wo,i),h(e,j,i),o(j,Fe),o(Fe,fa),o(j,da),o(j,Be),o(Be,pa),o(j,ca),o(j,Me),o(Me,ua),h(e,mo,i),h(e,H,i),o(H,F),o(F,We),w(K,We,null),o(H,_a),o(H,Je),o(Je,ga),h(e,vo,i),h(e,k,i),o(k,wa),o(k,Ge),o(Ge,ma),o(k,va),o(k,de),o(de,ba),o(k,ya),h(e,bo,i),w(Q,e,i),h(e,yo,i),h(e,pe,i),o(pe,ce),h(e,$o,i),h(e,ue,i),o(ue,$a),h(e,Eo,i),w(V,e,i),h(e,xo,i),h(e,_e,i),o(_e,Ea),h(e,jo,i),w(X,e,i),h(e,ko,i),h(e,q,i),o(q,xa),o(q,Ye),o(Ye,ja),o(q,ka),o(q,ze),o(ze,qa),o(q,Pa),h(e,qo,i),w(Z,e,i),h(e,Po,i),h(e,T,i),o(T,B),o(B,Ke),w(ee,Ke,null),o(T,Aa),o(T,Qe),o(Qe,Da),h(e,Ao,i),h(e,E,i),o(E,ge),o(ge,Oa),o(E,Ca),o(E,we),o(we,Sa),o(E,Ha),o(E,me),o(me,Ta),o(E,La),h(e,Do,i),h(e,P,i),o(P,Na),o(P,ve),o(ve,Ua),o(P,Ia),o(P,be),o(be,Ra),o(P,Fa),h(e,Oo,i),w(oe,e,i),h(e,Co,i),h(e,x,i),o(x,ye),o(ye,Ba),o(x,Ma),o(x,$e),o($e,Wa),o(x,Ja),o(x,Ee),o(Ee,Ga),o(x,Ya),h(e,So,i),w(ae,e,i),h(e,Ho,i),h(e,L,i),o(L,M),o(M,Ve),w(ne,Ve,null),o(L,za),o(L,Xe),o(Xe,Ka),h(e,To,i),h(e,N,i),o(N,xe),o(xe,Qa),o(N,Va),o(N,je),o(je,Xa),o(N,Za),h(e,Lo,i),h(e,ke,i),o(ke,en),h(e,No,i),w(te,e,i),h(e,Uo,i),h(e,U,i),o(U,qe),o(qe,on),o(U,an),o(U,Ze),o(Ze,nn),o(U,tn),h(e,Io,i),w(le,e,i),h(e,Ro,i),h(e,A,i),o(A,ln),o(A,Pe),o(Pe,sn),o(A,rn),o(A,Ae),o(Ae,hn),o(A,fn),h(e,Fo,i),h(e,c,i),o(c,dn),o(c,De),o(De,pn),o(c,cn),o(c,eo),o(eo,un),o(c,_n),o(c,oo),o(oo,gn),o(c,wn),o(c,ao),o(ao,mn),o(c,vn),o(c,no),o(no,bn),o(c,yn),h(e,Bo,i),h(e,W,i),o(W,$n),o(W,se),o(se,to),o(to,En),o(W,xn),h(e,Mo,i),h(e,J,i),o(J,jn),o(J,lo),o(lo,kn),o(J,qn),h(e,Wo,i),w(re,e,i),h(e,Jo,i),h(e,y,i),o(y,Pn),o(y,so),o(so,An),o(y,Dn),o(y,ro),o(ro,On),o(y,Cn),o(y,io),o(io,Sn),o(y,Hn),h(e,Go,i),w(ie,e,i),h(e,Yo,i),h(e,G,i),o(G,Tn),o(G,Oe),o(Oe,Ln),o(G,Nn),h(e,zo,i),h(e,u,i),o(u,Un),o(u,ho),o(ho,In),o(u,Rn),o(u,fo),o(fo,Fn),o(u,Bn),o(u,po),o(po,Mn),o(u,Wn),o(u,Ce),o(Ce,Jn),o(u,Gn),Ko=!0},p:el,i(e){Ko||(m(z.$$.fragment,e),m(K.$$.fragment,e),m(Q.$$.fragment,e),m(V.$$.fragment,e),m(X.$$.fragment,e),m(Z.$$.fragment,e),m(ee.$$.fragment,e),m(oe.$$.fragment,e),m(ae.$$.fragment,e),m(ne.$$.fragment,e),m(te.$$.fragment,e),m(le.$$.fragment,e),m(re.$$.fragment,e),m(ie.$$.fragment,e),Ko=!0)},o(e){v(z.$$.fragment,e),v(K.$$.fragment,e),v(Q.$$.fragment,e),v(V.$$.fragment,e),v(X.$$.fragment,e),v(Z.$$.fragment,e),v(ee.$$.fragment,e),v(oe.$$.fragment,e),v(ae.$$.fragment,e),v(ne.$$.fragment,e),v(te.$$.fragment,e),v(le.$$.fragment,e),v(re.$$.fragment,e),v(ie.$$.fragment,e),Ko=!1},d(e){a(C),e&&a(_o),e&&a(S),b(z),e&&a(go),e&&a(R),e&&a(wo),e&&a(j),e&&a(mo),e&&a(H),b(K),e&&a(vo),e&&a(k),e&&a(bo),b(Q,e),e&&a(yo),e&&a(pe),e&&a($o),e&&a(ue),e&&a(Eo),b(V,e),e&&a(xo),e&&a(_e),e&&a(jo),b(X,e),e&&a(ko),e&&a(q),e&&a(qo),b(Z,e),e&&a(Po),e&&a(T),b(ee),e&&a(Ao),e&&a(E),e&&a(Do),e&&a(P),e&&a(Oo),b(oe,e),e&&a(Co),e&&a(x),e&&a(So),b(ae,e),e&&a(Ho),e&&a(L),b(ne),e&&a(To),e&&a(N),e&&a(Lo),e&&a(ke),e&&a(No),b(te,e),e&&a(Uo),e&&a(U),e&&a(Io),b(le,e),e&&a(Ro),e&&a(A),e&&a(Fo),e&&a(c),e&&a(Bo),e&&a(W),e&&a(Mo),e&&a(J),e&&a(Wo),b(re,e),e&&a(Jo),e&&a(y),e&&a(Go),b(ie,e),e&&a(Yo),e&&a(G),e&&a(zo),e&&a(u)}}}const nl={local:"download-files-from-the-hub",sections:[{local:"choose-a-file-to-download",title:"Choose a file to download"},{local:"download-and-store-a-file",title:"Download and store a file"},{local:"download-an-entire-repository",title:"Download an entire repository"}],title:"Download files from the Hub"};function tl(Yn){return ol(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class il extends Kt{constructor(C){super();Qt(this,C,tl,al,Vt,{})}}export{il as default,nl as metadata};
