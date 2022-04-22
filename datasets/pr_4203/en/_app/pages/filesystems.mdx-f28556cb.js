import{S as hl,i as gl,s as _l,e as a,k as d,w as _,t as n,M as ul,c as l,d as e,m as c,a as o,x as u,h as i,b as f,F as t,g as p,y as v,q as y,o as S,B as $,v as vl}from"../chunks/vendor-8138ceec.js";import{T as yl}from"../chunks/Tip-12722dfc.js";import{I as ct}from"../chunks/IconCopyLink-2dd3a6ac.js";import{C as O}from"../chunks/CodeBlock-fc89709f.js";function Sl(ft){let m,G,h,b,A,w,U,F;return{c(){m=a("p"),G=n("Remember to include your "),h=a("code"),b=n("aws_access_key_id"),A=n(" and "),w=a("code"),U=n("aws_secret_access_key"),F=n(" whenever you are interacting with a private S3 bucket.")},l(T){m=l(T,"P",{});var k=o(m);G=i(k,"Remember to include your "),h=l(k,"CODE",{});var E=o(h);b=i(E,"aws_access_key_id"),E.forEach(e),A=i(k," and "),w=l(k,"CODE",{});var js=o(w);U=i(js,"aws_secret_access_key"),js.forEach(e),F=i(k," whenever you are interacting with a private S3 bucket."),k.forEach(e)},m(T,k){p(T,m,k),t(m,G),t(m,h),t(h,b),t(m,A),t(m,w),t(w,U),t(m,F)},d(T){T&&e(m)}}}function $l(ft){let m,G,h,b,A,w,U,F,T,k,E,js,Es,oe,re,mt,N,Ls,K,Ps,ne,ie,Os,pe,de,g,Q,Gs,ce,fe,Ns,V,me,he,X,Rs,ge,_e,Is,Z,ue,ve,ss,zs,ye,Se,Hs,ts,$e,we,es,Ws,ke,be,Bs,as,je,Ee,ls,Ms,xe,Ae,qs,os,Fe,Te,rs,Ys,De,Ce,Js,ns,Le,ht,R,Pe,Us,Oe,Ge,gt,D,I,Ks,is,Ne,Qs,Re,_t,xs,Vs,Ie,ut,ps,vt,ds,cs,ze,Xs,He,We,yt,fs,St,x,Be,Zs,Me,qe,st,Ye,Je,$t,ms,wt,C,z,tt,hs,Ue,et,Ke,kt,As,Qe,bt,Fs,at,Ve,jt,gs,Et,_s,lt,Xe,xt,us,At,L,H,ot,vs,Ze,rt,sa,Ft,W,ta,Ts,ea,aa,Tt,ys,Dt,B,Ct,M,la,nt,oa,ra,Lt,Ss,Pt,P,q,it,$s,na,pt,ia,Ot,Y,pa,Ds,da,ca,Gt,ws,Nt,J,fa,dt,ma,ha,Rt,ks,It;return w=new ct({}),is=new ct({}),ps=new O({props:{code:"pip install datasets[s3]",highlighted:'&gt;&gt;&gt; pip <span class="hljs-keyword">install </span>datasets[<span class="hljs-built_in">s3</span>]'}}),fs=new O({props:{code:`import datasets
s3 = datasets.filesystems.S3FileSystem(anon=True)  
s3.ls('public-datasets/imdb/train')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> datasets
<span class="hljs-meta">&gt;&gt;&gt; </span>s3 = datasets.filesystems.S3FileSystem(anon=<span class="hljs-literal">True</span>)  
<span class="hljs-meta">&gt;&gt;&gt; </span>s3.ls(<span class="hljs-string">&#x27;public-datasets/imdb/train&#x27;</span>)
[<span class="hljs-string">&#x27;dataset_info.json.json&#x27;</span>,<span class="hljs-string">&#x27;dataset.arrow&#x27;</span>,<span class="hljs-string">&#x27;state.json&#x27;</span>]`}}),ms=new O({props:{code:`import datasets
s3 = datasets.filesystems.S3FileSystem(key=aws_access_key_id, secret=aws_secret_access_key)  
s3.ls('my-private-datasets/imdb/train')  `,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> datasets
<span class="hljs-meta">&gt;&gt;&gt; </span>s3 = datasets.filesystems.S3FileSystem(key=aws_access_key_id, secret=aws_secret_access_key)  
<span class="hljs-meta">&gt;&gt;&gt; </span>s3.ls(<span class="hljs-string">&#x27;my-private-datasets/imdb/train&#x27;</span>)  
[<span class="hljs-string">&#x27;dataset_info.json.json&#x27;</span>,<span class="hljs-string">&#x27;dataset.arrow&#x27;</span>,<span class="hljs-string">&#x27;state.json&#x27;</span>]`}}),hs=new ct({}),gs=new O({props:{code:`conda install -c conda-forge gcsfs
pip install gcsfs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">conda install -c conda-forge gcsfs</span>
# or install with pip
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">pip install gcsfs</span>`}}),us=new O({props:{code:`import gcsfs
gcs = gcsfs.GCSFileSystem(project='my-google-project') 

# saves encoded_dataset to your s3 bucket
encoded_dataset.save_to_disk('gcs://my-private-datasets/imdb/train', fs=gcs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> gcsfs
<span class="hljs-meta">&gt;&gt;&gt; </span>gcs = gcsfs.GCSFileSystem(project=<span class="hljs-string">&#x27;my-google-project&#x27;</span>) 

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saves encoded_dataset to your s3 bucket</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_dataset.save_to_disk(<span class="hljs-string">&#x27;gcs://my-private-datasets/imdb/train&#x27;</span>, fs=gcs)`}}),vs=new ct({}),ys=new O({props:{code:`from datasets.filesystems import S3FileSystem

# create S3FileSystem instance
s3 = S3FileSystem(anon=True)  

# saves encoded_dataset to your s3 bucket
encoded_dataset.save_to_disk('s3://my-private-datasets/imdb/train', fs=s3)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets.filesystems <span class="hljs-keyword">import</span> S3FileSystem

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create S3FileSystem instance</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>s3 = S3FileSystem(anon=<span class="hljs-literal">True</span>)  

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saves encoded_dataset to your s3 bucket</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_dataset.save_to_disk(<span class="hljs-string">&#x27;s3://my-private-datasets/imdb/train&#x27;</span>, fs=s3)`}}),B=new yl({props:{$$slots:{default:[Sl]},$$scope:{ctx:ft}}}),Ss=new O({props:{code:`import botocore
from datasets.filesystems import S3FileSystem

# creates a botocore session with the provided AWS profile
s3_session = botocore.session.Session(profile='my_profile_name')

# create S3FileSystem instance with s3_session
s3 = S3FileSystem(session=s3_session)  

# saves encoded_dataset to your s3 bucket
encoded_dataset.save_to_disk('s3://my-private-datasets/imdb/train',fs=s3)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> botocore
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets.filesystems <span class="hljs-keyword">import</span> S3FileSystem

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># creates a botocore session with the provided AWS profile</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>s3_session = botocore.session.Session(profile=<span class="hljs-string">&#x27;my_profile_name&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create S3FileSystem instance with s3_session</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>s3 = S3FileSystem(session=s3_session)  

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saves encoded_dataset to your s3 bucket</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_dataset.save_to_disk(<span class="hljs-string">&#x27;s3://my-private-datasets/imdb/train&#x27;</span>,fs=s3)`}}),$s=new ct({}),ws=new O({props:{code:`from datasets import load_from_disk
from datasets.filesystems import S3FileSystem

# create S3FileSystem without credentials
s3 = S3FileSystem(anon=True)  

# load encoded_dataset to from s3 bucket
dataset = load_from_disk('s3://a-public-datasets/imdb/train',fs=s3)  

print(len(dataset))
# 25000`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_from_disk
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets.filesystems <span class="hljs-keyword">import</span> S3FileSystem

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create S3FileSystem without credentials</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>s3 = S3FileSystem(anon=<span class="hljs-literal">True</span>)  

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load encoded_dataset to from s3 bucket</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_from_disk(<span class="hljs-string">&#x27;s3://a-public-datasets/imdb/train&#x27;</span>,fs=s3)  

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-built_in">len</span>(dataset))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 25000</span>`}}),ks=new O({props:{code:`import botocore
from datasets.filesystems import S3FileSystem

# create S3FileSystem instance with aws_access_key_id and aws_secret_access_key
s3_session = botocore.session.Session(profile='my_profile_name')

# create S3FileSystem instance with s3_session
s3 = S3FileSystem(session=s3_session)

# load encoded_dataset to from s3 bucket
dataset = load_from_disk('s3://my-private-datasets/imdb/train',fs=s3)  

print(len(dataset))
# 25000`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> botocore
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets.filesystems <span class="hljs-keyword">import</span> S3FileSystem

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create S3FileSystem instance with aws_access_key_id and aws_secret_access_key</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>s3_session = botocore.session.Session(profile=<span class="hljs-string">&#x27;my_profile_name&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create S3FileSystem instance with s3_session</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>s3 = S3FileSystem(session=s3_session)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load encoded_dataset to from s3 bucket</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_from_disk(<span class="hljs-string">&#x27;s3://my-private-datasets/imdb/train&#x27;</span>,fs=s3)  

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-built_in">len</span>(dataset))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 25000</span>`}}),{c(){m=a("meta"),G=d(),h=a("h1"),b=a("a"),A=a("span"),_(w.$$.fragment),U=d(),F=a("span"),T=n("Cloud storage"),k=d(),E=a("p"),js=n("\u{1F917} Datasets supports access to cloud storage providers through a S3 filesystem implementation: "),Es=a("a"),oe=n("filesystems.S3FileSystem"),re=n(". You can save and load datasets from your Amazon S3 bucket in a Pythonic way. Take a look at the following table for other supported cloud storage providers:"),mt=d(),N=a("table"),Ls=a("thead"),K=a("tr"),Ps=a("th"),ne=n("Storage provider"),ie=d(),Os=a("th"),pe=n("Filesystem implementation"),de=d(),g=a("tbody"),Q=a("tr"),Gs=a("td"),ce=n("Amazon S3"),fe=d(),Ns=a("td"),V=a("a"),me=n("s3fs"),he=d(),X=a("tr"),Rs=a("td"),ge=n("Google Cloud Storage"),_e=d(),Is=a("td"),Z=a("a"),ue=n("gcsfs"),ve=d(),ss=a("tr"),zs=a("td"),ye=n("Azure DataLake"),Se=d(),Hs=a("td"),ts=a("a"),$e=n("adl"),we=d(),es=a("tr"),Ws=a("td"),ke=n("Azure Blob"),be=d(),Bs=a("td"),as=a("a"),je=n("abfs"),Ee=d(),ls=a("tr"),Ms=a("td"),xe=n("Dropbox"),Ae=d(),qs=a("td"),os=a("a"),Fe=n("dropboxdrivefs"),Te=d(),rs=a("tr"),Ys=a("td"),De=n("Google Drive"),Ce=d(),Js=a("td"),ns=a("a"),Le=n("gdrivefs"),ht=d(),R=a("p"),Pe=n("This guide will show you how to save and load datasets with "),Us=a("strong"),Oe=n("s3fs"),Ge=n(" to a S3 bucket, but other filesystem implementations can be used similarly."),gt=d(),D=a("h2"),I=a("a"),Ks=a("span"),_(is.$$.fragment),Ne=d(),Qs=a("span"),Re=n("Listing datasets"),_t=d(),xs=a("ol"),Vs=a("li"),Ie=n("Install the S3 dependency with \u{1F917} Datasets:"),ut=d(),_(ps.$$.fragment),vt=d(),ds=a("ol"),cs=a("li"),ze=n("List files from a public S3 bucket with "),Xs=a("code"),He=n("s3.ls"),We=n(":"),yt=d(),_(fs.$$.fragment),St=d(),x=a("p"),Be=n("Access a private S3 bucket by entering your "),Zs=a("code"),Me=n("aws_access_key_id"),qe=n(" and "),st=a("code"),Ye=n("aws_secret_access_key"),Je=n(":"),$t=d(),_(ms.$$.fragment),wt=d(),C=a("h3"),z=a("a"),tt=a("span"),_(hs.$$.fragment),Ue=d(),et=a("span"),Ke=n("Google Cloud Storage"),kt=d(),As=a("p"),Qe=n("Other filesystem implementations, like Google Cloud Storage, are used similarly:"),bt=d(),Fs=a("ol"),at=a("li"),Ve=n("Install the Google Cloud Storage implementation:"),jt=d(),_(gs.$$.fragment),Et=d(),_s=a("ol"),lt=a("li"),Xe=n("Load your dataset:"),xt=d(),_(us.$$.fragment),At=d(),L=a("h2"),H=a("a"),ot=a("span"),_(vs.$$.fragment),Ze=d(),rt=a("span"),sa=n("Saving datasets"),Ft=d(),W=a("p"),ta=n("After you have processed your dataset, you can save it to S3 with "),Ts=a("a"),ea=n("Dataset.save_to_disk()"),aa=n(":"),Tt=d(),_(ys.$$.fragment),Dt=d(),_(B.$$.fragment),Ct=d(),M=a("p"),la=n("Save your dataset with "),nt=a("code"),oa=n("botocore.session.Session"),ra=n(" and a custom AWS profile:"),Lt=d(),_(Ss.$$.fragment),Pt=d(),P=a("h2"),q=a("a"),it=a("span"),_($s.$$.fragment),na=d(),pt=a("span"),ia=n("Loading datasets"),Ot=d(),Y=a("p"),pa=n("When you are ready to use your dataset again, reload it with "),Ds=a("a"),da=n("Dataset.load_from_disk()"),ca=n(":"),Gt=d(),_(ws.$$.fragment),Nt=d(),J=a("p"),fa=n("Load with "),dt=a("code"),ma=n("botocore.session.Session"),ha=n(" and custom AWS profile:"),Rt=d(),_(ks.$$.fragment),this.h()},l(s){const r=ul('[data-svelte="svelte-1phssyn"]',document.head);m=l(r,"META",{name:!0,content:!0}),r.forEach(e),G=c(s),h=l(s,"H1",{class:!0});var bs=o(h);b=l(bs,"A",{id:!0,class:!0,href:!0});var ga=o(b);A=l(ga,"SPAN",{});var _a=o(A);u(w.$$.fragment,_a),_a.forEach(e),ga.forEach(e),U=c(bs),F=l(bs,"SPAN",{});var ua=o(F);T=i(ua,"Cloud storage"),ua.forEach(e),bs.forEach(e),k=c(s),E=l(s,"P",{});var zt=o(E);js=i(zt,"\u{1F917} Datasets supports access to cloud storage providers through a S3 filesystem implementation: "),Es=l(zt,"A",{href:!0});var va=o(Es);oe=i(va,"filesystems.S3FileSystem"),va.forEach(e),re=i(zt,". You can save and load datasets from your Amazon S3 bucket in a Pythonic way. Take a look at the following table for other supported cloud storage providers:"),zt.forEach(e),mt=c(s),N=l(s,"TABLE",{});var Ht=o(N);Ls=l(Ht,"THEAD",{});var ya=o(Ls);K=l(ya,"TR",{});var Wt=o(K);Ps=l(Wt,"TH",{});var Sa=o(Ps);ne=i(Sa,"Storage provider"),Sa.forEach(e),ie=c(Wt),Os=l(Wt,"TH",{});var $a=o(Os);pe=i($a,"Filesystem implementation"),$a.forEach(e),Wt.forEach(e),ya.forEach(e),de=c(Ht),g=l(Ht,"TBODY",{});var j=o(g);Q=l(j,"TR",{});var Bt=o(Q);Gs=l(Bt,"TD",{});var wa=o(Gs);ce=i(wa,"Amazon S3"),wa.forEach(e),fe=c(Bt),Ns=l(Bt,"TD",{});var ka=o(Ns);V=l(ka,"A",{href:!0,rel:!0});var ba=o(V);me=i(ba,"s3fs"),ba.forEach(e),ka.forEach(e),Bt.forEach(e),he=c(j),X=l(j,"TR",{});var Mt=o(X);Rs=l(Mt,"TD",{});var ja=o(Rs);ge=i(ja,"Google Cloud Storage"),ja.forEach(e),_e=c(Mt),Is=l(Mt,"TD",{});var Ea=o(Is);Z=l(Ea,"A",{href:!0,rel:!0});var xa=o(Z);ue=i(xa,"gcsfs"),xa.forEach(e),Ea.forEach(e),Mt.forEach(e),ve=c(j),ss=l(j,"TR",{});var qt=o(ss);zs=l(qt,"TD",{});var Aa=o(zs);ye=i(Aa,"Azure DataLake"),Aa.forEach(e),Se=c(qt),Hs=l(qt,"TD",{});var Fa=o(Hs);ts=l(Fa,"A",{href:!0,rel:!0});var Ta=o(ts);$e=i(Ta,"adl"),Ta.forEach(e),Fa.forEach(e),qt.forEach(e),we=c(j),es=l(j,"TR",{});var Yt=o(es);Ws=l(Yt,"TD",{});var Da=o(Ws);ke=i(Da,"Azure Blob"),Da.forEach(e),be=c(Yt),Bs=l(Yt,"TD",{});var Ca=o(Bs);as=l(Ca,"A",{href:!0,rel:!0});var La=o(as);je=i(La,"abfs"),La.forEach(e),Ca.forEach(e),Yt.forEach(e),Ee=c(j),ls=l(j,"TR",{});var Jt=o(ls);Ms=l(Jt,"TD",{});var Pa=o(Ms);xe=i(Pa,"Dropbox"),Pa.forEach(e),Ae=c(Jt),qs=l(Jt,"TD",{});var Oa=o(qs);os=l(Oa,"A",{href:!0,rel:!0});var Ga=o(os);Fe=i(Ga,"dropboxdrivefs"),Ga.forEach(e),Oa.forEach(e),Jt.forEach(e),Te=c(j),rs=l(j,"TR",{});var Ut=o(rs);Ys=l(Ut,"TD",{});var Na=o(Ys);De=i(Na,"Google Drive"),Na.forEach(e),Ce=c(Ut),Js=l(Ut,"TD",{});var Ra=o(Js);ns=l(Ra,"A",{href:!0,rel:!0});var Ia=o(ns);Le=i(Ia,"gdrivefs"),Ia.forEach(e),Ra.forEach(e),Ut.forEach(e),j.forEach(e),Ht.forEach(e),ht=c(s),R=l(s,"P",{});var Kt=o(R);Pe=i(Kt,"This guide will show you how to save and load datasets with "),Us=l(Kt,"STRONG",{});var za=o(Us);Oe=i(za,"s3fs"),za.forEach(e),Ge=i(Kt," to a S3 bucket, but other filesystem implementations can be used similarly."),Kt.forEach(e),gt=c(s),D=l(s,"H2",{class:!0});var Qt=o(D);I=l(Qt,"A",{id:!0,class:!0,href:!0});var Ha=o(I);Ks=l(Ha,"SPAN",{});var Wa=o(Ks);u(is.$$.fragment,Wa),Wa.forEach(e),Ha.forEach(e),Ne=c(Qt),Qs=l(Qt,"SPAN",{});var Ba=o(Qs);Re=i(Ba,"Listing datasets"),Ba.forEach(e),Qt.forEach(e),_t=c(s),xs=l(s,"OL",{});var Ma=o(xs);Vs=l(Ma,"LI",{});var qa=o(Vs);Ie=i(qa,"Install the S3 dependency with \u{1F917} Datasets:"),qa.forEach(e),Ma.forEach(e),ut=c(s),u(ps.$$.fragment,s),vt=c(s),ds=l(s,"OL",{start:!0});var Ya=o(ds);cs=l(Ya,"LI",{});var Vt=o(cs);ze=i(Vt,"List files from a public S3 bucket with "),Xs=l(Vt,"CODE",{});var Ja=o(Xs);He=i(Ja,"s3.ls"),Ja.forEach(e),We=i(Vt,":"),Vt.forEach(e),Ya.forEach(e),yt=c(s),u(fs.$$.fragment,s),St=c(s),x=l(s,"P",{});var Cs=o(x);Be=i(Cs,"Access a private S3 bucket by entering your "),Zs=l(Cs,"CODE",{});var Ua=o(Zs);Me=i(Ua,"aws_access_key_id"),Ua.forEach(e),qe=i(Cs," and "),st=l(Cs,"CODE",{});var Ka=o(st);Ye=i(Ka,"aws_secret_access_key"),Ka.forEach(e),Je=i(Cs,":"),Cs.forEach(e),$t=c(s),u(ms.$$.fragment,s),wt=c(s),C=l(s,"H3",{class:!0});var Xt=o(C);z=l(Xt,"A",{id:!0,class:!0,href:!0});var Qa=o(z);tt=l(Qa,"SPAN",{});var Va=o(tt);u(hs.$$.fragment,Va),Va.forEach(e),Qa.forEach(e),Ue=c(Xt),et=l(Xt,"SPAN",{});var Xa=o(et);Ke=i(Xa,"Google Cloud Storage"),Xa.forEach(e),Xt.forEach(e),kt=c(s),As=l(s,"P",{});var Za=o(As);Qe=i(Za,"Other filesystem implementations, like Google Cloud Storage, are used similarly:"),Za.forEach(e),bt=c(s),Fs=l(s,"OL",{});var sl=o(Fs);at=l(sl,"LI",{});var tl=o(at);Ve=i(tl,"Install the Google Cloud Storage implementation:"),tl.forEach(e),sl.forEach(e),jt=c(s),u(gs.$$.fragment,s),Et=c(s),_s=l(s,"OL",{start:!0});var el=o(_s);lt=l(el,"LI",{});var al=o(lt);Xe=i(al,"Load your dataset:"),al.forEach(e),el.forEach(e),xt=c(s),u(us.$$.fragment,s),At=c(s),L=l(s,"H2",{class:!0});var Zt=o(L);H=l(Zt,"A",{id:!0,class:!0,href:!0});var ll=o(H);ot=l(ll,"SPAN",{});var ol=o(ot);u(vs.$$.fragment,ol),ol.forEach(e),ll.forEach(e),Ze=c(Zt),rt=l(Zt,"SPAN",{});var rl=o(rt);sa=i(rl,"Saving datasets"),rl.forEach(e),Zt.forEach(e),Ft=c(s),W=l(s,"P",{});var se=o(W);ta=i(se,"After you have processed your dataset, you can save it to S3 with "),Ts=l(se,"A",{href:!0});var nl=o(Ts);ea=i(nl,"Dataset.save_to_disk()"),nl.forEach(e),aa=i(se,":"),se.forEach(e),Tt=c(s),u(ys.$$.fragment,s),Dt=c(s),u(B.$$.fragment,s),Ct=c(s),M=l(s,"P",{});var te=o(M);la=i(te,"Save your dataset with "),nt=l(te,"CODE",{});var il=o(nt);oa=i(il,"botocore.session.Session"),il.forEach(e),ra=i(te," and a custom AWS profile:"),te.forEach(e),Lt=c(s),u(Ss.$$.fragment,s),Pt=c(s),P=l(s,"H2",{class:!0});var ee=o(P);q=l(ee,"A",{id:!0,class:!0,href:!0});var pl=o(q);it=l(pl,"SPAN",{});var dl=o(it);u($s.$$.fragment,dl),dl.forEach(e),pl.forEach(e),na=c(ee),pt=l(ee,"SPAN",{});var cl=o(pt);ia=i(cl,"Loading datasets"),cl.forEach(e),ee.forEach(e),Ot=c(s),Y=l(s,"P",{});var ae=o(Y);pa=i(ae,"When you are ready to use your dataset again, reload it with "),Ds=l(ae,"A",{href:!0});var fl=o(Ds);da=i(fl,"Dataset.load_from_disk()"),fl.forEach(e),ca=i(ae,":"),ae.forEach(e),Gt=c(s),u(ws.$$.fragment,s),Nt=c(s),J=l(s,"P",{});var le=o(J);fa=i(le,"Load with "),dt=l(le,"CODE",{});var ml=o(dt);ma=i(ml,"botocore.session.Session"),ml.forEach(e),ha=i(le," and custom AWS profile:"),le.forEach(e),Rt=c(s),u(ks.$$.fragment,s),this.h()},h(){f(m,"name","hf:doc:metadata"),f(m,"content",JSON.stringify(wl)),f(b,"id","cloud-storage"),f(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(b,"href","#cloud-storage"),f(h,"class","relative group"),f(Es,"href","/docs/datasets/pr_4203/en/package_reference/main_classes#datasets.filesystems.S3FileSystem"),f(V,"href","https://s3fs.readthedocs.io/en/latest/"),f(V,"rel","nofollow"),f(Z,"href","https://gcsfs.readthedocs.io/en/latest/"),f(Z,"rel","nofollow"),f(ts,"href","https://github.com/dask/adlfs"),f(ts,"rel","nofollow"),f(as,"href","https://github.com/dask/adlfs"),f(as,"rel","nofollow"),f(os,"href","https://github.com/MarineChap/dropboxdrivefs"),f(os,"rel","nofollow"),f(ns,"href","https://github.com/intake/gdrivefs"),f(ns,"rel","nofollow"),f(I,"id","listing-datasets"),f(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(I,"href","#listing-datasets"),f(D,"class","relative group"),f(ds,"start","2"),f(z,"id","google-cloud-storage"),f(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(z,"href","#google-cloud-storage"),f(C,"class","relative group"),f(_s,"start","2"),f(H,"id","saving-datasets"),f(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(H,"href","#saving-datasets"),f(L,"class","relative group"),f(Ts,"href","/docs/datasets/pr_4203/en/package_reference/main_classes#datasets.Dataset.save_to_disk"),f(q,"id","loading-datasets"),f(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(q,"href","#loading-datasets"),f(P,"class","relative group"),f(Ds,"href","/docs/datasets/pr_4203/en/package_reference/main_classes#datasets.Dataset.load_from_disk")},m(s,r){t(document.head,m),p(s,G,r),p(s,h,r),t(h,b),t(b,A),v(w,A,null),t(h,U),t(h,F),t(F,T),p(s,k,r),p(s,E,r),t(E,js),t(E,Es),t(Es,oe),t(E,re),p(s,mt,r),p(s,N,r),t(N,Ls),t(Ls,K),t(K,Ps),t(Ps,ne),t(K,ie),t(K,Os),t(Os,pe),t(N,de),t(N,g),t(g,Q),t(Q,Gs),t(Gs,ce),t(Q,fe),t(Q,Ns),t(Ns,V),t(V,me),t(g,he),t(g,X),t(X,Rs),t(Rs,ge),t(X,_e),t(X,Is),t(Is,Z),t(Z,ue),t(g,ve),t(g,ss),t(ss,zs),t(zs,ye),t(ss,Se),t(ss,Hs),t(Hs,ts),t(ts,$e),t(g,we),t(g,es),t(es,Ws),t(Ws,ke),t(es,be),t(es,Bs),t(Bs,as),t(as,je),t(g,Ee),t(g,ls),t(ls,Ms),t(Ms,xe),t(ls,Ae),t(ls,qs),t(qs,os),t(os,Fe),t(g,Te),t(g,rs),t(rs,Ys),t(Ys,De),t(rs,Ce),t(rs,Js),t(Js,ns),t(ns,Le),p(s,ht,r),p(s,R,r),t(R,Pe),t(R,Us),t(Us,Oe),t(R,Ge),p(s,gt,r),p(s,D,r),t(D,I),t(I,Ks),v(is,Ks,null),t(D,Ne),t(D,Qs),t(Qs,Re),p(s,_t,r),p(s,xs,r),t(xs,Vs),t(Vs,Ie),p(s,ut,r),v(ps,s,r),p(s,vt,r),p(s,ds,r),t(ds,cs),t(cs,ze),t(cs,Xs),t(Xs,He),t(cs,We),p(s,yt,r),v(fs,s,r),p(s,St,r),p(s,x,r),t(x,Be),t(x,Zs),t(Zs,Me),t(x,qe),t(x,st),t(st,Ye),t(x,Je),p(s,$t,r),v(ms,s,r),p(s,wt,r),p(s,C,r),t(C,z),t(z,tt),v(hs,tt,null),t(C,Ue),t(C,et),t(et,Ke),p(s,kt,r),p(s,As,r),t(As,Qe),p(s,bt,r),p(s,Fs,r),t(Fs,at),t(at,Ve),p(s,jt,r),v(gs,s,r),p(s,Et,r),p(s,_s,r),t(_s,lt),t(lt,Xe),p(s,xt,r),v(us,s,r),p(s,At,r),p(s,L,r),t(L,H),t(H,ot),v(vs,ot,null),t(L,Ze),t(L,rt),t(rt,sa),p(s,Ft,r),p(s,W,r),t(W,ta),t(W,Ts),t(Ts,ea),t(W,aa),p(s,Tt,r),v(ys,s,r),p(s,Dt,r),v(B,s,r),p(s,Ct,r),p(s,M,r),t(M,la),t(M,nt),t(nt,oa),t(M,ra),p(s,Lt,r),v(Ss,s,r),p(s,Pt,r),p(s,P,r),t(P,q),t(q,it),v($s,it,null),t(P,na),t(P,pt),t(pt,ia),p(s,Ot,r),p(s,Y,r),t(Y,pa),t(Y,Ds),t(Ds,da),t(Y,ca),p(s,Gt,r),v(ws,s,r),p(s,Nt,r),p(s,J,r),t(J,fa),t(J,dt),t(dt,ma),t(J,ha),p(s,Rt,r),v(ks,s,r),It=!0},p(s,[r]){const bs={};r&2&&(bs.$$scope={dirty:r,ctx:s}),B.$set(bs)},i(s){It||(y(w.$$.fragment,s),y(is.$$.fragment,s),y(ps.$$.fragment,s),y(fs.$$.fragment,s),y(ms.$$.fragment,s),y(hs.$$.fragment,s),y(gs.$$.fragment,s),y(us.$$.fragment,s),y(vs.$$.fragment,s),y(ys.$$.fragment,s),y(B.$$.fragment,s),y(Ss.$$.fragment,s),y($s.$$.fragment,s),y(ws.$$.fragment,s),y(ks.$$.fragment,s),It=!0)},o(s){S(w.$$.fragment,s),S(is.$$.fragment,s),S(ps.$$.fragment,s),S(fs.$$.fragment,s),S(ms.$$.fragment,s),S(hs.$$.fragment,s),S(gs.$$.fragment,s),S(us.$$.fragment,s),S(vs.$$.fragment,s),S(ys.$$.fragment,s),S(B.$$.fragment,s),S(Ss.$$.fragment,s),S($s.$$.fragment,s),S(ws.$$.fragment,s),S(ks.$$.fragment,s),It=!1},d(s){e(m),s&&e(G),s&&e(h),$(w),s&&e(k),s&&e(E),s&&e(mt),s&&e(N),s&&e(ht),s&&e(R),s&&e(gt),s&&e(D),$(is),s&&e(_t),s&&e(xs),s&&e(ut),$(ps,s),s&&e(vt),s&&e(ds),s&&e(yt),$(fs,s),s&&e(St),s&&e(x),s&&e($t),$(ms,s),s&&e(wt),s&&e(C),$(hs),s&&e(kt),s&&e(As),s&&e(bt),s&&e(Fs),s&&e(jt),$(gs,s),s&&e(Et),s&&e(_s),s&&e(xt),$(us,s),s&&e(At),s&&e(L),$(vs),s&&e(Ft),s&&e(W),s&&e(Tt),$(ys,s),s&&e(Dt),$(B,s),s&&e(Ct),s&&e(M),s&&e(Lt),$(Ss,s),s&&e(Pt),s&&e(P),$($s),s&&e(Ot),s&&e(Y),s&&e(Gt),$(ws,s),s&&e(Nt),s&&e(J),s&&e(Rt),$(ks,s)}}}const wl={local:"cloud-storage",sections:[{local:"listing-datasets",sections:[{local:"google-cloud-storage",title:"Google Cloud Storage"}],title:"Listing datasets"},{local:"saving-datasets",title:"Saving datasets"},{local:"loading-datasets",title:"Loading datasets"}],title:"Cloud storage"};function kl(ft){return vl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Al extends hl{constructor(m){super();gl(this,m,kl,$l,_l,{})}}export{Al as default,wl as metadata};
