import{S as ks,i as ws,s as $s,e as t,k as m,w as c,t as i,M as xs,c as s,d as l,m as h,a as n,x as v,h as r,b as u,F as a,g,y as b,L as Ms,q as E,o as _,B as k}from"../chunks/vendor-22ad994f.js";import{I as Le}from"../chunks/IconCopyLink-2eb9a001.js";import{C as tl}from"../chunks/CodeBlock-03069293.js";import{D as ys}from"../chunks/DocNotebookDropdown-48171ded.js";import"../chunks/CopyButton-f539c482.js";function Ls(Yl){let $,ee,f,w,Te,O,Jl,Xe,Kl,sl,S,nl,le,Ql,ol,M,C,Ce,H,Vl,je,Zl,il,ae,ea,rl,y,j,Pe,W,la,ze,aa,gl,te,ta,ml,d,se,qe,sa,na,oa,ne,Ne,ia,ra,ga,oe,Re,ma,ha,ua,ie,Ae,da,pa,fa,re,Ie,ca,va,ba,ge,De,Ea,_a,ka,me,Be,wa,$a,hl,x,xa,Oe,Ma,ya,Se,La,Ta,ul,P,Xa,He,Ca,ja,dl,F,pl,z,Pa,We,za,qa,fl,G,cl,he,Na,vl,U,bl,ue,Ra,El,Y,_l,de,Aa,kl,J,wl,q,Ia,K,Da,Ba,$l,L,N,Fe,Q,Oa,Ge,Sa,xl,pe,Ha,Ml,R,fe,Ue,Wa,Fa,Ga,ce,Ye,Ua,Ya,yl,ve,Ja,Ll,T,A,Je,V,Ka,Ke,Qa,Tl,be,Va,Xl,I,Ee,Qe,Za,et,lt,_e,Ve,at,tt,Cl,ke,st,jl,X,D,Ze,Z,nt,el,ot,Pl,we,it,zl,$e,rt,ql,B,xe,ll,gt,mt,ht,Me,al,ut,dt,Nl;return O=new Le({}),S=new ys({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Mixed",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/multilingual.ipynb"},{label:"PyTorch",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/pytorch/multilingual.ipynb"},{label:"TensorFlow",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/transformers_doc/tensorflow/multilingual.ipynb"},{label:"Mixed",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/transformers_doc/multilingual.ipynb"},{label:"PyTorch",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/transformers_doc/pytorch/multilingual.ipynb"},{label:"TensorFlow",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/transformers_doc/tensorflow/multilingual.ipynb"}]}}),H=new Le({}),W=new Le({}),F=new tl({props:{code:`import torch
from transformers import XLMTokenizer, XLMWithLMHeadModel

tokenizer = XLMTokenizer.from_pretrained("xlm-clm-enfr-1024")
model = XLMWithLMHeadModel.from_pretrained("xlm-clm-enfr-1024"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMWithLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-clm-enfr-1024&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMWithLMHeadModel.from_pretrained(<span class="hljs-string">&quot;xlm-clm-enfr-1024&quot;</span>)`}}),G=new tl({props:{code:"print(tokenizer.lang2id),",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.lang2id)
{<span class="hljs-string">&#x27;en&#x27;</span>: <span class="hljs-number">0</span>, <span class="hljs-string">&#x27;fr&#x27;</span>: <span class="hljs-number">1</span>}`}}),U=new tl({props:{code:'input_ids = torch.tensor([tokenizer.encode("Wikipedia was used to")])  # batch size of 1,',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([tokenizer.encode(<span class="hljs-string">&quot;Wikipedia was used to&quot;</span>)])  <span class="hljs-comment"># batch size of 1</span>'}}),Y=new tl({props:{code:`language_id = tokenizer.lang2id["en"]  # 0
langs = torch.tensor([language_id] * input_ids.shape[1])  # torch.tensor([0, 0, 0, ..., 0])

# We reshape it to be of size (batch_size, sequence_length)
langs = langs.view(1, -1)  # is now of shape [1, sequence_length] (we have a batch size of 1),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>language_id = tokenizer.lang2id[<span class="hljs-string">&quot;en&quot;</span>]  <span class="hljs-comment"># 0</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>langs = torch.tensor([language_id] * input_ids.shape[<span class="hljs-number">1</span>])  <span class="hljs-comment"># torch.tensor([0, 0, 0, ..., 0])</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># We reshape it to be of size (batch_size, sequence_length)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>langs = langs.view(<span class="hljs-number">1</span>, -<span class="hljs-number">1</span>)  <span class="hljs-comment"># is now of shape [1, sequence_length] (we have a batch size of 1)</span>`}}),J=new tl({props:{code:"outputs = model(input_ids, langs=langs),",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, langs=langs)'}}),Q=new Le({}),V=new Le({}),Z=new Le({}),{c(){$=t("meta"),ee=m(),f=t("h1"),w=t("a"),Te=t("span"),c(O.$$.fragment),Jl=m(),Xe=t("span"),Kl=i("Multi-lingual models"),sl=m(),c(S.$$.fragment),nl=m(),le=t("p"),Ql=i(`Most of the models available in this library are mono-lingual models (English, Chinese and German). A few multi-lingual
models are available and have a different mechanisms than mono-lingual models. This page details the usage of these
models.`),ol=m(),M=t("h2"),C=t("a"),Ce=t("span"),c(H.$$.fragment),Vl=m(),je=t("span"),Zl=i("XLM"),il=m(),ae=t("p"),ea=i(`XLM has a total of 10 different checkpoints, only one of which is mono-lingual. The 9 remaining model checkpoints can
be split in two categories: the checkpoints that make use of language embeddings, and those that don\u2019t`),rl=m(),y=t("h3"),j=t("a"),Pe=t("span"),c(W.$$.fragment),la=m(),ze=t("span"),aa=i("XLM & Language Embeddings"),gl=m(),te=t("p"),ta=i("This section concerns the following checkpoints:"),ml=m(),d=t("ul"),se=t("li"),qe=t("code"),sa=i("xlm-mlm-ende-1024"),na=i(" (Masked language modeling, English-German)"),oa=m(),ne=t("li"),Ne=t("code"),ia=i("xlm-mlm-enfr-1024"),ra=i(" (Masked language modeling, English-French)"),ga=m(),oe=t("li"),Re=t("code"),ma=i("xlm-mlm-enro-1024"),ha=i(" (Masked language modeling, English-Romanian)"),ua=m(),ie=t("li"),Ae=t("code"),da=i("xlm-mlm-xnli15-1024"),pa=i(" (Masked language modeling, XNLI languages)"),fa=m(),re=t("li"),Ie=t("code"),ca=i("xlm-mlm-tlm-xnli15-1024"),va=i(" (Masked language modeling + Translation, XNLI languages)"),ba=m(),ge=t("li"),De=t("code"),Ea=i("xlm-clm-enfr-1024"),_a=i(" (Causal language modeling, English-French)"),ka=m(),me=t("li"),Be=t("code"),wa=i("xlm-clm-ende-1024"),$a=i(" (Causal language modeling, English-German)"),hl=m(),x=t("p"),xa=i(`These checkpoints require language embeddings that will specify the language used at inference time. These language
embeddings are represented as a tensor that is of the same shape as the input ids passed to the model. The values in
these tensors depend on the language used and are identifiable using the `),Oe=t("code"),Ma=i("lang2id"),ya=i(" and "),Se=t("code"),La=i("id2lang"),Ta=i(` attributes from
the tokenizer.`),ul=m(),P=t("p"),Xa=i("Here is an example using the "),He=t("code"),Ca=i("xlm-clm-enfr-1024"),ja=i(" checkpoint (Causal language modeling, English-French):"),dl=m(),c(F.$$.fragment),pl=m(),z=t("p"),Pa=i(`The different languages this model/tokenizer handles, as well as the ids of these languages are visible using the
`),We=t("code"),za=i("lang2id"),qa=i(" attribute:"),fl=m(),c(G.$$.fragment),cl=m(),he=t("p"),Na=i("These ids should be used when passing a language parameter during a model pass. Let\u2019s define our inputs:"),vl=m(),c(U.$$.fragment),bl=m(),ue=t("p"),Ra=i(`We should now define the language embedding by using the previously defined language id. We want to create a tensor
filled with the appropriate language ids, of the same size as input_ids. For english, the id is 0:`),El=m(),c(Y.$$.fragment),_l=m(),de=t("p"),Aa=i("You can then feed it all as input to your model:"),kl=m(),c(J.$$.fragment),wl=m(),q=t("p"),Ia=i("The example "),K=t("a"),Da=i("run_generation.py"),Ba=i(` can generate text
using the CLM checkpoints from XLM, using the language embeddings.`),$l=m(),L=t("h3"),N=t("a"),Fe=t("span"),c(Q.$$.fragment),Oa=m(),Ge=t("span"),Sa=i("XLM without Language Embeddings"),xl=m(),pe=t("p"),Ha=i("This section concerns the following checkpoints:"),Ml=m(),R=t("ul"),fe=t("li"),Ue=t("code"),Wa=i("xlm-mlm-17-1280"),Fa=i(" (Masked language modeling, 17 languages)"),Ga=m(),ce=t("li"),Ye=t("code"),Ua=i("xlm-mlm-100-1280"),Ya=i(" (Masked language modeling, 100 languages)"),yl=m(),ve=t("p"),Ja=i(`These checkpoints do not require language embeddings at inference time. These models are used to have generic sentence
representations, differently from previously-mentioned XLM checkpoints.`),Ll=m(),T=t("h2"),A=t("a"),Je=t("span"),c(V.$$.fragment),Ka=m(),Ke=t("span"),Qa=i("BERT"),Tl=m(),be=t("p"),Va=i("BERT has two checkpoints that can be used for multi-lingual tasks:"),Xl=m(),I=t("ul"),Ee=t("li"),Qe=t("code"),Za=i("bert-base-multilingual-uncased"),et=i(" (Masked language modeling + Next sentence prediction, 102 languages)"),lt=m(),_e=t("li"),Ve=t("code"),at=i("bert-base-multilingual-cased"),tt=i(" (Masked language modeling + Next sentence prediction, 104 languages)"),Cl=m(),ke=t("p"),st=i(`These checkpoints do not require language embeddings at inference time. They should identify the language used in the
context and infer accordingly.`),jl=m(),X=t("h2"),D=t("a"),Ze=t("span"),c(Z.$$.fragment),nt=m(),el=t("span"),ot=i("XLM-RoBERTa"),Pl=m(),we=t("p"),it=i(`XLM-RoBERTa was trained on 2.5TB of newly created clean CommonCrawl data in 100 languages. It provides strong gains
over previously released multi-lingual models like mBERT or XLM on downstream tasks like classification, sequence
labeling and question answering.`),zl=m(),$e=t("p"),rt=i("Two XLM-RoBERTa checkpoints can be used for multi-lingual tasks:"),ql=m(),B=t("ul"),xe=t("li"),ll=t("code"),gt=i("xlm-roberta-base"),mt=i(" (Masked language modeling, 100 languages)"),ht=m(),Me=t("li"),al=t("code"),ut=i("xlm-roberta-large"),dt=i(" (Masked language modeling, 100 languages)"),this.h()},l(e){const o=xs('[data-svelte="svelte-1phssyn"]',document.head);$=s(o,"META",{name:!0,content:!0}),o.forEach(l),ee=h(e),f=s(e,"H1",{class:!0});var Rl=n(f);w=s(Rl,"A",{id:!0,class:!0,href:!0});var Lt=n(w);Te=s(Lt,"SPAN",{});var Tt=n(Te);v(O.$$.fragment,Tt),Tt.forEach(l),Lt.forEach(l),Jl=h(Rl),Xe=s(Rl,"SPAN",{});var Xt=n(Xe);Kl=r(Xt,"Multi-lingual models"),Xt.forEach(l),Rl.forEach(l),sl=h(e),v(S.$$.fragment,e),nl=h(e),le=s(e,"P",{});var Ct=n(le);Ql=r(Ct,`Most of the models available in this library are mono-lingual models (English, Chinese and German). A few multi-lingual
models are available and have a different mechanisms than mono-lingual models. This page details the usage of these
models.`),Ct.forEach(l),ol=h(e),M=s(e,"H2",{class:!0});var Al=n(M);C=s(Al,"A",{id:!0,class:!0,href:!0});var jt=n(C);Ce=s(jt,"SPAN",{});var Pt=n(Ce);v(H.$$.fragment,Pt),Pt.forEach(l),jt.forEach(l),Vl=h(Al),je=s(Al,"SPAN",{});var zt=n(je);Zl=r(zt,"XLM"),zt.forEach(l),Al.forEach(l),il=h(e),ae=s(e,"P",{});var qt=n(ae);ea=r(qt,`XLM has a total of 10 different checkpoints, only one of which is mono-lingual. The 9 remaining model checkpoints can
be split in two categories: the checkpoints that make use of language embeddings, and those that don\u2019t`),qt.forEach(l),rl=h(e),y=s(e,"H3",{class:!0});var Il=n(y);j=s(Il,"A",{id:!0,class:!0,href:!0});var Nt=n(j);Pe=s(Nt,"SPAN",{});var Rt=n(Pe);v(W.$$.fragment,Rt),Rt.forEach(l),Nt.forEach(l),la=h(Il),ze=s(Il,"SPAN",{});var At=n(ze);aa=r(At,"XLM & Language Embeddings"),At.forEach(l),Il.forEach(l),gl=h(e),te=s(e,"P",{});var It=n(te);ta=r(It,"This section concerns the following checkpoints:"),It.forEach(l),ml=h(e),d=s(e,"UL",{});var p=n(d);se=s(p,"LI",{});var pt=n(se);qe=s(pt,"CODE",{});var Dt=n(qe);sa=r(Dt,"xlm-mlm-ende-1024"),Dt.forEach(l),na=r(pt," (Masked language modeling, English-German)"),pt.forEach(l),oa=h(p),ne=s(p,"LI",{});var ft=n(ne);Ne=s(ft,"CODE",{});var Bt=n(Ne);ia=r(Bt,"xlm-mlm-enfr-1024"),Bt.forEach(l),ra=r(ft," (Masked language modeling, English-French)"),ft.forEach(l),ga=h(p),oe=s(p,"LI",{});var ct=n(oe);Re=s(ct,"CODE",{});var Ot=n(Re);ma=r(Ot,"xlm-mlm-enro-1024"),Ot.forEach(l),ha=r(ct," (Masked language modeling, English-Romanian)"),ct.forEach(l),ua=h(p),ie=s(p,"LI",{});var vt=n(ie);Ae=s(vt,"CODE",{});var St=n(Ae);da=r(St,"xlm-mlm-xnli15-1024"),St.forEach(l),pa=r(vt," (Masked language modeling, XNLI languages)"),vt.forEach(l),fa=h(p),re=s(p,"LI",{});var bt=n(re);Ie=s(bt,"CODE",{});var Ht=n(Ie);ca=r(Ht,"xlm-mlm-tlm-xnli15-1024"),Ht.forEach(l),va=r(bt," (Masked language modeling + Translation, XNLI languages)"),bt.forEach(l),ba=h(p),ge=s(p,"LI",{});var Et=n(ge);De=s(Et,"CODE",{});var Wt=n(De);Ea=r(Wt,"xlm-clm-enfr-1024"),Wt.forEach(l),_a=r(Et," (Causal language modeling, English-French)"),Et.forEach(l),ka=h(p),me=s(p,"LI",{});var _t=n(me);Be=s(_t,"CODE",{});var Ft=n(Be);wa=r(Ft,"xlm-clm-ende-1024"),Ft.forEach(l),$a=r(_t," (Causal language modeling, English-German)"),_t.forEach(l),p.forEach(l),hl=h(e),x=s(e,"P",{});var ye=n(x);xa=r(ye,`These checkpoints require language embeddings that will specify the language used at inference time. These language
embeddings are represented as a tensor that is of the same shape as the input ids passed to the model. The values in
these tensors depend on the language used and are identifiable using the `),Oe=s(ye,"CODE",{});var Gt=n(Oe);Ma=r(Gt,"lang2id"),Gt.forEach(l),ya=r(ye," and "),Se=s(ye,"CODE",{});var Ut=n(Se);La=r(Ut,"id2lang"),Ut.forEach(l),Ta=r(ye,` attributes from
the tokenizer.`),ye.forEach(l),ul=h(e),P=s(e,"P",{});var Dl=n(P);Xa=r(Dl,"Here is an example using the "),He=s(Dl,"CODE",{});var Yt=n(He);Ca=r(Yt,"xlm-clm-enfr-1024"),Yt.forEach(l),ja=r(Dl," checkpoint (Causal language modeling, English-French):"),Dl.forEach(l),dl=h(e),v(F.$$.fragment,e),pl=h(e),z=s(e,"P",{});var Bl=n(z);Pa=r(Bl,`The different languages this model/tokenizer handles, as well as the ids of these languages are visible using the
`),We=s(Bl,"CODE",{});var Jt=n(We);za=r(Jt,"lang2id"),Jt.forEach(l),qa=r(Bl," attribute:"),Bl.forEach(l),fl=h(e),v(G.$$.fragment,e),cl=h(e),he=s(e,"P",{});var Kt=n(he);Na=r(Kt,"These ids should be used when passing a language parameter during a model pass. Let\u2019s define our inputs:"),Kt.forEach(l),vl=h(e),v(U.$$.fragment,e),bl=h(e),ue=s(e,"P",{});var Qt=n(ue);Ra=r(Qt,`We should now define the language embedding by using the previously defined language id. We want to create a tensor
filled with the appropriate language ids, of the same size as input_ids. For english, the id is 0:`),Qt.forEach(l),El=h(e),v(Y.$$.fragment,e),_l=h(e),de=s(e,"P",{});var Vt=n(de);Aa=r(Vt,"You can then feed it all as input to your model:"),Vt.forEach(l),kl=h(e),v(J.$$.fragment,e),wl=h(e),q=s(e,"P",{});var Ol=n(q);Ia=r(Ol,"The example "),K=s(Ol,"A",{href:!0,rel:!0});var Zt=n(K);Da=r(Zt,"run_generation.py"),Zt.forEach(l),Ba=r(Ol,` can generate text
using the CLM checkpoints from XLM, using the language embeddings.`),Ol.forEach(l),$l=h(e),L=s(e,"H3",{class:!0});var Sl=n(L);N=s(Sl,"A",{id:!0,class:!0,href:!0});var es=n(N);Fe=s(es,"SPAN",{});var ls=n(Fe);v(Q.$$.fragment,ls),ls.forEach(l),es.forEach(l),Oa=h(Sl),Ge=s(Sl,"SPAN",{});var as=n(Ge);Sa=r(as,"XLM without Language Embeddings"),as.forEach(l),Sl.forEach(l),xl=h(e),pe=s(e,"P",{});var ts=n(pe);Ha=r(ts,"This section concerns the following checkpoints:"),ts.forEach(l),Ml=h(e),R=s(e,"UL",{});var Hl=n(R);fe=s(Hl,"LI",{});var kt=n(fe);Ue=s(kt,"CODE",{});var ss=n(Ue);Wa=r(ss,"xlm-mlm-17-1280"),ss.forEach(l),Fa=r(kt," (Masked language modeling, 17 languages)"),kt.forEach(l),Ga=h(Hl),ce=s(Hl,"LI",{});var wt=n(ce);Ye=s(wt,"CODE",{});var ns=n(Ye);Ua=r(ns,"xlm-mlm-100-1280"),ns.forEach(l),Ya=r(wt," (Masked language modeling, 100 languages)"),wt.forEach(l),Hl.forEach(l),yl=h(e),ve=s(e,"P",{});var os=n(ve);Ja=r(os,`These checkpoints do not require language embeddings at inference time. These models are used to have generic sentence
representations, differently from previously-mentioned XLM checkpoints.`),os.forEach(l),Ll=h(e),T=s(e,"H2",{class:!0});var Wl=n(T);A=s(Wl,"A",{id:!0,class:!0,href:!0});var is=n(A);Je=s(is,"SPAN",{});var rs=n(Je);v(V.$$.fragment,rs),rs.forEach(l),is.forEach(l),Ka=h(Wl),Ke=s(Wl,"SPAN",{});var gs=n(Ke);Qa=r(gs,"BERT"),gs.forEach(l),Wl.forEach(l),Tl=h(e),be=s(e,"P",{});var ms=n(be);Va=r(ms,"BERT has two checkpoints that can be used for multi-lingual tasks:"),ms.forEach(l),Xl=h(e),I=s(e,"UL",{});var Fl=n(I);Ee=s(Fl,"LI",{});var $t=n(Ee);Qe=s($t,"CODE",{});var hs=n(Qe);Za=r(hs,"bert-base-multilingual-uncased"),hs.forEach(l),et=r($t," (Masked language modeling + Next sentence prediction, 102 languages)"),$t.forEach(l),lt=h(Fl),_e=s(Fl,"LI",{});var xt=n(_e);Ve=s(xt,"CODE",{});var us=n(Ve);at=r(us,"bert-base-multilingual-cased"),us.forEach(l),tt=r(xt," (Masked language modeling + Next sentence prediction, 104 languages)"),xt.forEach(l),Fl.forEach(l),Cl=h(e),ke=s(e,"P",{});var ds=n(ke);st=r(ds,`These checkpoints do not require language embeddings at inference time. They should identify the language used in the
context and infer accordingly.`),ds.forEach(l),jl=h(e),X=s(e,"H2",{class:!0});var Gl=n(X);D=s(Gl,"A",{id:!0,class:!0,href:!0});var ps=n(D);Ze=s(ps,"SPAN",{});var fs=n(Ze);v(Z.$$.fragment,fs),fs.forEach(l),ps.forEach(l),nt=h(Gl),el=s(Gl,"SPAN",{});var cs=n(el);ot=r(cs,"XLM-RoBERTa"),cs.forEach(l),Gl.forEach(l),Pl=h(e),we=s(e,"P",{});var vs=n(we);it=r(vs,`XLM-RoBERTa was trained on 2.5TB of newly created clean CommonCrawl data in 100 languages. It provides strong gains
over previously released multi-lingual models like mBERT or XLM on downstream tasks like classification, sequence
labeling and question answering.`),vs.forEach(l),zl=h(e),$e=s(e,"P",{});var bs=n($e);rt=r(bs,"Two XLM-RoBERTa checkpoints can be used for multi-lingual tasks:"),bs.forEach(l),ql=h(e),B=s(e,"UL",{});var Ul=n(B);xe=s(Ul,"LI",{});var Mt=n(xe);ll=s(Mt,"CODE",{});var Es=n(ll);gt=r(Es,"xlm-roberta-base"),Es.forEach(l),mt=r(Mt," (Masked language modeling, 100 languages)"),Mt.forEach(l),ht=h(Ul),Me=s(Ul,"LI",{});var yt=n(Me);al=s(yt,"CODE",{});var _s=n(al);ut=r(_s,"xlm-roberta-large"),_s.forEach(l),dt=r(yt," (Masked language modeling, 100 languages)"),yt.forEach(l),Ul.forEach(l),this.h()},h(){u($,"name","hf:doc:metadata"),u($,"content",JSON.stringify(Ts)),u(w,"id","multilingual-models"),u(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(w,"href","#multilingual-models"),u(f,"class","relative group"),u(C,"id","xlm"),u(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(C,"href","#xlm"),u(M,"class","relative group"),u(j,"id","xlm-language-embeddings"),u(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(j,"href","#xlm-language-embeddings"),u(y,"class","relative group"),u(K,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/text-generation/run_generation.py"),u(K,"rel","nofollow"),u(N,"id","xlm-without-language-embeddings"),u(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(N,"href","#xlm-without-language-embeddings"),u(L,"class","relative group"),u(A,"id","bert"),u(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(A,"href","#bert"),u(T,"class","relative group"),u(D,"id","xlmroberta"),u(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(D,"href","#xlmroberta"),u(X,"class","relative group")},m(e,o){a(document.head,$),g(e,ee,o),g(e,f,o),a(f,w),a(w,Te),b(O,Te,null),a(f,Jl),a(f,Xe),a(Xe,Kl),g(e,sl,o),b(S,e,o),g(e,nl,o),g(e,le,o),a(le,Ql),g(e,ol,o),g(e,M,o),a(M,C),a(C,Ce),b(H,Ce,null),a(M,Vl),a(M,je),a(je,Zl),g(e,il,o),g(e,ae,o),a(ae,ea),g(e,rl,o),g(e,y,o),a(y,j),a(j,Pe),b(W,Pe,null),a(y,la),a(y,ze),a(ze,aa),g(e,gl,o),g(e,te,o),a(te,ta),g(e,ml,o),g(e,d,o),a(d,se),a(se,qe),a(qe,sa),a(se,na),a(d,oa),a(d,ne),a(ne,Ne),a(Ne,ia),a(ne,ra),a(d,ga),a(d,oe),a(oe,Re),a(Re,ma),a(oe,ha),a(d,ua),a(d,ie),a(ie,Ae),a(Ae,da),a(ie,pa),a(d,fa),a(d,re),a(re,Ie),a(Ie,ca),a(re,va),a(d,ba),a(d,ge),a(ge,De),a(De,Ea),a(ge,_a),a(d,ka),a(d,me),a(me,Be),a(Be,wa),a(me,$a),g(e,hl,o),g(e,x,o),a(x,xa),a(x,Oe),a(Oe,Ma),a(x,ya),a(x,Se),a(Se,La),a(x,Ta),g(e,ul,o),g(e,P,o),a(P,Xa),a(P,He),a(He,Ca),a(P,ja),g(e,dl,o),b(F,e,o),g(e,pl,o),g(e,z,o),a(z,Pa),a(z,We),a(We,za),a(z,qa),g(e,fl,o),b(G,e,o),g(e,cl,o),g(e,he,o),a(he,Na),g(e,vl,o),b(U,e,o),g(e,bl,o),g(e,ue,o),a(ue,Ra),g(e,El,o),b(Y,e,o),g(e,_l,o),g(e,de,o),a(de,Aa),g(e,kl,o),b(J,e,o),g(e,wl,o),g(e,q,o),a(q,Ia),a(q,K),a(K,Da),a(q,Ba),g(e,$l,o),g(e,L,o),a(L,N),a(N,Fe),b(Q,Fe,null),a(L,Oa),a(L,Ge),a(Ge,Sa),g(e,xl,o),g(e,pe,o),a(pe,Ha),g(e,Ml,o),g(e,R,o),a(R,fe),a(fe,Ue),a(Ue,Wa),a(fe,Fa),a(R,Ga),a(R,ce),a(ce,Ye),a(Ye,Ua),a(ce,Ya),g(e,yl,o),g(e,ve,o),a(ve,Ja),g(e,Ll,o),g(e,T,o),a(T,A),a(A,Je),b(V,Je,null),a(T,Ka),a(T,Ke),a(Ke,Qa),g(e,Tl,o),g(e,be,o),a(be,Va),g(e,Xl,o),g(e,I,o),a(I,Ee),a(Ee,Qe),a(Qe,Za),a(Ee,et),a(I,lt),a(I,_e),a(_e,Ve),a(Ve,at),a(_e,tt),g(e,Cl,o),g(e,ke,o),a(ke,st),g(e,jl,o),g(e,X,o),a(X,D),a(D,Ze),b(Z,Ze,null),a(X,nt),a(X,el),a(el,ot),g(e,Pl,o),g(e,we,o),a(we,it),g(e,zl,o),g(e,$e,o),a($e,rt),g(e,ql,o),g(e,B,o),a(B,xe),a(xe,ll),a(ll,gt),a(xe,mt),a(B,ht),a(B,Me),a(Me,al),a(al,ut),a(Me,dt),Nl=!0},p:Ms,i(e){Nl||(E(O.$$.fragment,e),E(S.$$.fragment,e),E(H.$$.fragment,e),E(W.$$.fragment,e),E(F.$$.fragment,e),E(G.$$.fragment,e),E(U.$$.fragment,e),E(Y.$$.fragment,e),E(J.$$.fragment,e),E(Q.$$.fragment,e),E(V.$$.fragment,e),E(Z.$$.fragment,e),Nl=!0)},o(e){_(O.$$.fragment,e),_(S.$$.fragment,e),_(H.$$.fragment,e),_(W.$$.fragment,e),_(F.$$.fragment,e),_(G.$$.fragment,e),_(U.$$.fragment,e),_(Y.$$.fragment,e),_(J.$$.fragment,e),_(Q.$$.fragment,e),_(V.$$.fragment,e),_(Z.$$.fragment,e),Nl=!1},d(e){l($),e&&l(ee),e&&l(f),k(O),e&&l(sl),k(S,e),e&&l(nl),e&&l(le),e&&l(ol),e&&l(M),k(H),e&&l(il),e&&l(ae),e&&l(rl),e&&l(y),k(W),e&&l(gl),e&&l(te),e&&l(ml),e&&l(d),e&&l(hl),e&&l(x),e&&l(ul),e&&l(P),e&&l(dl),k(F,e),e&&l(pl),e&&l(z),e&&l(fl),k(G,e),e&&l(cl),e&&l(he),e&&l(vl),k(U,e),e&&l(bl),e&&l(ue),e&&l(El),k(Y,e),e&&l(_l),e&&l(de),e&&l(kl),k(J,e),e&&l(wl),e&&l(q),e&&l($l),e&&l(L),k(Q),e&&l(xl),e&&l(pe),e&&l(Ml),e&&l(R),e&&l(yl),e&&l(ve),e&&l(Ll),e&&l(T),k(V),e&&l(Tl),e&&l(be),e&&l(Xl),e&&l(I),e&&l(Cl),e&&l(ke),e&&l(jl),e&&l(X),k(Z),e&&l(Pl),e&&l(we),e&&l(zl),e&&l($e),e&&l(ql),e&&l(B)}}}const Ts={local:"multilingual-models",sections:[{local:"xlm",sections:[{local:"xlm-language-embeddings",title:"XLM & Language Embeddings"},{local:"xlm-without-language-embeddings",title:"XLM without Language Embeddings"}],title:"XLM"},{local:"bert",title:"BERT"},{local:"xlmroberta",title:"XLM-RoBERTa"}],title:"Multi-lingual models"};function Xs(Yl,$,ee){let{fw:f}=$;return Yl.$$set=w=>{"fw"in w&&ee(0,f=w.fw)},[f]}class Ns extends ks{constructor($){super();ws(this,$,Xs,Ls,$s,{fw:0})}}export{Ns as default,Ts as metadata};
