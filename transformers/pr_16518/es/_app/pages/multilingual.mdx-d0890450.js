import{S as Zi,i as er,s as ar,e as l,k as m,w as p,t as n,M as tr,c as o,d as t,m as c,a as s,x as f,h as i,b as u,F as a,g as d,y as g,L as lr,q as h,o as _,B as b,v as or}from"../chunks/vendor-c570b7f7.js";import{I as ie,C as z}from"../chunks/CodeBlock-8a2530c2.js";import{D as sr}from"../chunks/DocNotebookDropdown-e51be72e.js";function nr(zn){let q,pt,C,I,ma,re,Ll,ca,ql,ft,de,gt,j,Cl,ua,Pl,Dl,me,Tl,Xl,ht,P,B,pa,ce,Al,fa,Ol,_t,qe,Sl,bt,D,R,ga,ue,Il,ha,Bl,vt,Ce,Rl,Et,v,Pe,_a,Nl,Fl,Hl,De,ba,Gl,Wl,Ul,Te,va,Jl,Kl,Ql,Xe,Ea,Vl,Yl,Zl,Ae,ka,eo,ao,to,Oe,$a,lo,oo,so,Se,Ma,no,io,kt,$,ro,ya,mo,co,wa,uo,po,za,fo,go,$t,N,ho,ja,_o,bo,Mt,pe,yt,F,vo,xa,Eo,ko,wt,fe,zt,Ie,$o,jt,ge,xt,M,Mo,La,yo,wo,qa,zo,jo,Ca,xo,Lo,Lt,he,qt,H,qo,Pa,Co,Po,Ct,_e,Pt,x,Do,be,To,Xo,Da,Ao,Oo,Dt,T,G,Ta,ve,So,Xa,Io,Tt,Be,Bo,Xt,W,Re,Aa,Ro,No,Fo,Ne,Oa,Ho,Go,At,Fe,Wo,Ot,X,U,Sa,Ee,Uo,Ia,Jo,St,He,Ko,It,J,Ge,Ba,Qo,Vo,Yo,We,Ra,Zo,es,Bt,Ue,as,Rt,A,K,Na,ke,ts,Fa,ls,Nt,Je,os,Ft,Q,Ke,Ha,ss,ns,is,Qe,Ga,rs,ds,Ht,Ve,ms,Gt,O,V,Wa,$e,cs,Ua,us,Wt,Ye,ps,Ut,Y,Ze,Ja,fs,gs,hs,ea,Ka,_s,bs,Jt,Z,vs,Qa,Es,ks,Kt,Me,Qt,aa,$s,Vt,ye,Yt,y,Ms,Va,ys,ws,Ya,zs,js,Za,xs,Ls,Zt,we,el,S,ee,et,ze,qs,at,Cs,al,ta,Ps,tl,E,la,tt,Ds,Ts,Xs,oa,lt,As,Os,Ss,sa,ot,Is,Bs,Rs,na,st,Ns,Fs,Hs,nt,it,Gs,ll,ae,Ws,rt,Us,Js,ol,je,sl,ia,Ks,nl,xe,il,w,Qs,dt,Vs,Ys,mt,Zs,en,ct,an,tn,rl,Le,dl,te,ln,ut,on,sn,ml;return re=new ie({}),de=new sr({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Mixed",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/transformers_doc/multilingual.ipynb"},{label:"PyTorch",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/transformers_doc/pytorch/multilingual.ipynb"},{label:"TensorFlow",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/transformers_doc/tensorflow/multilingual.ipynb"},{label:"Mixed",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/transformers_doc/multilingual.ipynb"},{label:"PyTorch",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/transformers_doc/pytorch/multilingual.ipynb"},{label:"TensorFlow",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/transformers_doc/tensorflow/multilingual.ipynb"}]}}),ce=new ie({}),ue=new ie({}),pe=new z({props:{code:`import torch
from transformers import XLMTokenizer, XLMWithLMHeadModel

tokenizer = XLMTokenizer.from_pretrained("xlm-clm-enfr-1024")
model = XLMWithLMHeadModel.from_pretrained("xlm-clm-enfr-1024")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMWithLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-clm-enfr-1024&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMWithLMHeadModel.from_pretrained(<span class="hljs-string">&quot;xlm-clm-enfr-1024&quot;</span>)`}}),fe=new z({props:{code:"print(tokenizer.lang2id)",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.lang2id)
{<span class="hljs-string">&#x27;en&#x27;</span>: <span class="hljs-number">0</span>, <span class="hljs-string">&#x27;fr&#x27;</span>: <span class="hljs-number">1</span>}`}}),ge=new z({props:{code:'input_ids = torch.tensor([tokenizer.encode("Wikipedia was used to")])  # batch size of 1',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([tokenizer.encode(<span class="hljs-string">&quot;Wikipedia was used to&quot;</span>)])  <span class="hljs-comment"># batch size of 1</span>'}}),he=new z({props:{code:`language_id = tokenizer.lang2id["en"]  # 0
langs = torch.tensor([language_id] * input_ids.shape[1])  # torch.tensor([0, 0, 0, ..., 0])

# We reshape it to be of size (batch_size, sequence_length)
langs = langs.view(1, -1)  # is now of shape [1, sequence_length] (we have a batch size of 1)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>language_id = tokenizer.lang2id[<span class="hljs-string">&quot;en&quot;</span>]  <span class="hljs-comment"># 0</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>langs = torch.tensor([language_id] * input_ids.shape[<span class="hljs-number">1</span>])  <span class="hljs-comment"># torch.tensor([0, 0, 0, ..., 0])</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># We reshape it to be of size (batch_size, sequence_length)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>langs = langs.view(<span class="hljs-number">1</span>, -<span class="hljs-number">1</span>)  <span class="hljs-comment"># is now of shape [1, sequence_length] (we have a batch size of 1)</span>`}}),_e=new z({props:{code:"outputs = model(input_ids, langs=langs)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, langs=langs)'}}),ve=new ie({}),Ee=new ie({}),ke=new ie({}),$e=new ie({}),Me=new z({props:{code:`from transformers import M2M100ForConditionalGeneration, M2M100Tokenizer

en_text = "Do not meddle in the affairs of wizards, for they are subtle and quick to anger."
chinese_text = "\u4E0D\u8981\u63D2\u624B\u5DEB\u5E2B\u7684\u4E8B\u52D9, \u56E0\u70BA\u4ED6\u5011\u662F\u5FAE\u5999\u7684, \u5F88\u5FEB\u5C31\u6703\u767C\u6012."

tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M", src_lang="zh")
model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> M2M100ForConditionalGeneration, M2M100Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>en_text = <span class="hljs-string">&quot;Do not meddle in the affairs of wizards, for they are subtle and quick to anger.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>chinese_text = <span class="hljs-string">&quot;\u4E0D\u8981\u63D2\u624B\u5DEB\u5E2B\u7684\u4E8B\u52D9, \u56E0\u70BA\u4ED6\u5011\u662F\u5FAE\u5999\u7684, \u5F88\u5FEB\u5C31\u6703\u767C\u6012.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = M2M100Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>, src_lang=<span class="hljs-string">&quot;zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = M2M100ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/m2m100_418M&quot;</span>)`}}),ye=new z({props:{code:'encoded_zh = tokenizer(chinese_text, return_tensors="pt")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_zh = tokenizer(chinese_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)'}}),we=new z({props:{code:`generated_tokens = model.generate(**encoded_zh, forced_bos_token_id=tokenizer.get_lang_id("en"))
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generated_tokens = model.generate(**encoded_zh, forced_bos_token_id=tokenizer.get_lang_id(<span class="hljs-string">&quot;en&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&#x27;Do not interfere with the matters of the witches, because they are delicate and will soon be angry.&#x27;</span>`}}),ze=new ie({}),je=new z({props:{code:`from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

en_text = "Do not meddle in the affairs of wizards, for they are subtle and quick to anger."
fi_text = "\xC4l\xE4 sekaannu velhojen asioihin, sill\xE4 ne ovat hienovaraisia ja nopeasti vihaisia."

tokenizer = AutoTokenizer.from_pretrained("facebook/mbart-large-50-many-to-many-mmt", src_lang="fi_FI")
model = AutoModelForSeq2SeqLM.from_pretrained("facebook/mbart-large-50-many-to-many-mmt")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSeq2SeqLM

<span class="hljs-meta">&gt;&gt;&gt; </span>en_text = <span class="hljs-string">&quot;Do not meddle in the affairs of wizards, for they are subtle and quick to anger.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>fi_text = <span class="hljs-string">&quot;\xC4l\xE4 sekaannu velhojen asioihin, sill\xE4 ne ovat hienovaraisia ja nopeasti vihaisia.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50-many-to-many-mmt&quot;</span>, src_lang=<span class="hljs-string">&quot;fi_FI&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50-many-to-many-mmt&quot;</span>)`}}),xe=new z({props:{code:'encoded_en = tokenizer(en_text, return_tensors="pt")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_en = tokenizer(en_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)'}}),Le=new z({props:{code:`generated_tokens = model.generate(**encoded_en, forced_bos_token_id=tokenizer.lang_code_to_id("en_XX"))
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generated_tokens = model.generate(**encoded_en, forced_bos_token_id=tokenizer.lang_code_to_id(<span class="hljs-string">&quot;en_XX&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&quot;Don&#x27;t interfere with the wizard&#x27;s affairs, because they are subtle, will soon get angry.&quot;</span>`}}),{c(){q=l("meta"),pt=m(),C=l("h1"),I=l("a"),ma=l("span"),p(re.$$.fragment),Ll=m(),ca=l("span"),ql=n("Modelos multiling\xFCes para inferencia"),ft=m(),p(de.$$.fragment),gt=m(),j=l("p"),Cl=n("Existen varios modelos multiling\xFCes en \u{1F917} Transformers y su uso para inferencia difiere de los modelos monoling\xFCes. Sin embargo, no "),ua=l("em"),Pl=n("todos"),Dl=n(" los usos de los modelos multiling\xFCes son diferentes. Algunos modelos, como "),me=l("a"),Tl=n("bert-base-multilingual-uncased"),Xl=n(", pueden utilizarse igual que un modelo monoling\xFCe. Esta gu\xEDa te ense\xF1ar\xE1 c\xF3mo utilizar modelos multiling\xFCes cuyo uso difiere en la inferencia."),ht=m(),P=l("h2"),B=l("a"),pa=l("span"),p(ce.$$.fragment),Al=m(),fa=l("span"),Ol=n("XLM"),_t=m(),qe=l("p"),Sl=n("XLM tiene diez checkpoints diferentes de los cuales solo uno es monoling\xFCe. Los nueve checkpoints restantes del modelo pueden dividirse en dos categor\xEDas: los checkpoints que utilizan language embeddings y los que no."),bt=m(),D=l("h3"),R=l("a"),ga=l("span"),p(ue.$$.fragment),Il=m(),ha=l("span"),Bl=n("XLM con language embeddings"),vt=m(),Ce=l("p"),Rl=n("Los siguientes modelos XLM usan language embeddings para especificar el lenguaje utilizado en la inferencia:"),Et=m(),v=l("ul"),Pe=l("li"),_a=l("code"),Nl=n("xlm-mlm-ende-1024"),Fl=n(" (Masked language modeling, English-German)"),Hl=m(),De=l("li"),ba=l("code"),Gl=n("xlm-mlm-enfr-1024"),Wl=n(" (Masked language modeling, English-French)"),Ul=m(),Te=l("li"),va=l("code"),Jl=n("xlm-mlm-enro-1024"),Kl=n(" (Masked language modeling, English-Romanian)"),Ql=m(),Xe=l("li"),Ea=l("code"),Vl=n("xlm-mlm-xnli15-1024"),Yl=n(" (Masked language modeling, XNLI languages)"),Zl=m(),Ae=l("li"),ka=l("code"),eo=n("xlm-mlm-tlm-xnli15-1024"),ao=n(" (Masked language modeling + translation, XNLI languages)"),to=m(),Oe=l("li"),$a=l("code"),lo=n("xlm-clm-enfr-1024"),oo=n(" (Causal language modeling, English-French)"),so=m(),Se=l("li"),Ma=l("code"),no=n("xlm-clm-ende-1024"),io=n(" (Causal language modeling, English-German)"),kt=m(),$=l("p"),ro=n("Los language embeddings son representados como un tensor de la mismas dimensiones que los "),ya=l("code"),mo=n("input_ids"),co=n(" pasados al modelo. Los valores de estos tensores dependen del idioma utilizado y se identifican mediante los atributos "),wa=l("code"),uo=n("lang2id"),po=n(" y "),za=l("code"),fo=n("id2lang"),go=n(" del tokenizador."),$t=m(),N=l("p"),ho=n("En este ejemplo, carga el checkpoint "),ja=l("code"),_o=n("xlm-clm-enfr-1024"),bo=n(" (Causal language modeling, English-French):"),Mt=m(),p(pe.$$.fragment),yt=m(),F=l("p"),vo=n("El atributo "),xa=l("code"),Eo=n("lang2id"),ko=n(" del tokenizador muestra los idiomas de este modelo y sus ids:"),wt=m(),p(fe.$$.fragment),zt=m(),Ie=l("p"),$o=n("A continuaci\xF3n, crea un input de ejemplo:"),jt=m(),p(ge.$$.fragment),xt=m(),M=l("p"),Mo=n("Establece el id del idioma, por ejemplo "),La=l("code"),yo=n('"en"'),wo=n(", y util\xEDzalo para definir el language embedding. El language embedding es un tensor lleno de "),qa=l("code"),zo=n("0"),jo=n(" ya que es el id del idioma para ingl\xE9s. Este tensor debe ser del mismo tama\xF1o que "),Ca=l("code"),xo=n("input_ids"),Lo=n("."),Lt=m(),p(he.$$.fragment),qt=m(),H=l("p"),qo=n("Ahora puedes pasar los "),Pa=l("code"),Co=n("input_ids"),Po=n(" y el language embedding al modelo:"),Ct=m(),p(_e.$$.fragment),Pt=m(),x=l("p"),Do=n("El script "),be=l("a"),To=n("run_generation.py"),Xo=n(" puede generar texto con language embeddings utilizando los checkpoints "),Da=l("code"),Ao=n("xlm-clm"),Oo=n("."),Dt=m(),T=l("h3"),G=l("a"),Ta=l("span"),p(ve.$$.fragment),So=m(),Xa=l("span"),Io=n("XLM sin language embeddings"),Tt=m(),Be=l("p"),Bo=n("Los siguientes modelos XLM no requieren language embeddings durante la inferencia:"),Xt=m(),W=l("ul"),Re=l("li"),Aa=l("code"),Ro=n("xlm-mlm-17-1280"),No=n(" (modelado de lenguaje enmascarado, 17 idiomas)"),Fo=m(),Ne=l("li"),Oa=l("code"),Ho=n("xlm-mlm-100-1280"),Go=n(" (modelado de lenguaje enmascarado, 100 idiomas)"),At=m(),Fe=l("p"),Wo=n("Estos modelos se utilizan para representaciones gen\xE9ricas de frases a diferencia de los anteriores checkpoints XLM."),Ot=m(),X=l("h2"),U=l("a"),Sa=l("span"),p(Ee.$$.fragment),Uo=m(),Ia=l("span"),Jo=n("BERT"),St=m(),He=l("p"),Ko=n("Los siguientes modelos de BERT pueden utilizarse para tareas multiling\xFCes:"),It=m(),J=l("ul"),Ge=l("li"),Ba=l("code"),Qo=n("bert-base-multilingual-uncased"),Vo=n(" (modelado de lenguaje enmascarado + predicci\xF3n de la siguiente oraci\xF3n, 102 idiomas)"),Yo=m(),We=l("li"),Ra=l("code"),Zo=n("bert-base-multilingual-cased"),es=n(" (modelado de lenguaje enmascarado + predicci\xF3n de la siguiente oraci\xF3n, 104 idiomas)"),Bt=m(),Ue=l("p"),as=n(`Estos modelos no requieren language embeddings durante la inferencia. Deben identificar la lengua a partir del
contexto e inferir en consecuencia.`),Rt=m(),A=l("h2"),K=l("a"),Na=l("span"),p(ke.$$.fragment),ts=m(),Fa=l("span"),ls=n("XLM-RoBERTa"),Nt=m(),Je=l("p"),os=n("Los siguientes modelos de XLM-RoBERTa pueden utilizarse para tareas multiling\xFCes:"),Ft=m(),Q=l("ul"),Ke=l("li"),Ha=l("code"),ss=n("xlm-roberta-base"),ns=n(" (modelado de lenguaje enmascarado, 100 idiomas)"),is=m(),Qe=l("li"),Ga=l("code"),rs=n("xlm-roberta-large"),ds=n(" (Modelado de lenguaje enmascarado, 100 idiomas)"),Ht=m(),Ve=l("p"),ms=n("XLM-RoBERTa se entren\xF3 con 2,5 TB de datos CommonCrawl reci\xE9n creados y depurados en 100 idiomas. Proporciona fuertes ventajas sobre los modelos multiling\xFCes publicados anteriormente como mBERT o XLM en tareas posteriores como la clasificaci\xF3n, el etiquetado de secuencias y la respuesta a preguntas."),Gt=m(),O=l("h2"),V=l("a"),Wa=l("span"),p($e.$$.fragment),cs=m(),Ua=l("span"),us=n("M2M100"),Wt=m(),Ye=l("p"),ps=n("Los siguientes modelos de M2M100 pueden utilizarse para traducci\xF3n multiling\xFCe:"),Ut=m(),Y=l("ul"),Ze=l("li"),Ja=l("code"),fs=n("facebook/m2m100_418M"),gs=n(" (traducci\xF3n)"),hs=m(),ea=l("li"),Ka=l("code"),_s=n("facebook/m2m100_1.2B"),bs=n(" (traducci\xF3n)"),Jt=m(),Z=l("p"),vs=n("En este ejemplo, carga el checkpoint "),Qa=l("code"),Es=n("facebook/m2m100_418M"),ks=n(" para traducir del chino al ingl\xE9s. Puedes establecer el idioma de origen en el tokenizador:"),Kt=m(),p(Me.$$.fragment),Qt=m(),aa=l("p"),$s=n("Tokeniza el texto:"),Vt=m(),p(ye.$$.fragment),Yt=m(),y=l("p"),Ms=n("M2M100 fuerza el id del idioma de destino como el primer token generado para traducir al idioma de destino.. Establece el "),Va=l("code"),ys=n("forced_bos_token_id"),ws=n(" a "),Ya=l("code"),zs=n("en"),js=n(" en el m\xE9todo "),Za=l("code"),xs=n("generate"),Ls=n(" para traducir al ingl\xE9s:"),Zt=m(),p(we.$$.fragment),el=m(),S=l("h2"),ee=l("a"),et=l("span"),p(ze.$$.fragment),qs=m(),at=l("span"),Cs=n("MBart"),al=m(),ta=l("p"),Ps=n("Los siguientes modelos de MBart pueden utilizarse para traducci\xF3n multiling\xFCe:"),tl=m(),E=l("ul"),la=l("li"),tt=l("code"),Ds=n("facebook/mbart-large-50-one-to-many-mmt"),Ts=n(" (traducci\xF3n autom\xE1tica multiling\xFCe de uno a muchos, 50 idiomas)"),Xs=m(),oa=l("li"),lt=l("code"),As=n("facebook/mbart-large-50-many-to-many-mmt"),Os=n(" (traducci\xF3n autom\xE1tica multiling\xFCe de muchos a muchos, 50 idiomas)"),Ss=m(),sa=l("li"),ot=l("code"),Is=n("facebook/mbart-large-50-many-to-one-mmt"),Bs=n(" (traducci\xF3n autom\xE1tica multiling\xFCe muchos a uno, 50 idiomas)"),Rs=m(),na=l("li"),st=l("code"),Ns=n("facebook/mbart-large-50"),Fs=n(" (traducci\xF3n multiling\xFCe, 50 idiomas)"),Hs=m(),nt=l("li"),it=l("code"),Gs=n("facebook/mbart-large-cc25"),ll=m(),ae=l("p"),Ws=n("En este ejemplo, carga el checkpoint "),rt=l("code"),Us=n("facebook/mbart-large-50-many-to-many-mmt"),Js=n(" para traducir del finland\xE9s al ingl\xE9s. Puedes establecer el idioma de origen en el tokenizador:"),ol=m(),p(je.$$.fragment),sl=m(),ia=l("p"),Ks=n("Tokeniza el texto:"),nl=m(),p(xe.$$.fragment),il=m(),w=l("p"),Qs=n("MBart fuerza el id del idioma de destino como el primer token generado para traducirlo. Establece el "),dt=l("code"),Vs=n("forced_bos_token_id"),Ys=n(" a "),mt=l("code"),Zs=n("en"),en=n(" en el m\xE9todo "),ct=l("code"),an=n("generate"),tn=n(" para traducir al ingl\xE9s:"),rl=m(),p(Le.$$.fragment),dl=m(),te=l("p"),ln=n("Si est\xE1s usando el checkpoint "),ut=l("code"),on=n("facebook/mbart-large-50-many-to-one-mmt"),sn=n(" no necesitas forzar el id del idioma de destino como el primer token generado, de lo contrario el uso es el mismo."),this.h()},l(e){const r=tr('[data-svelte="svelte-1phssyn"]',document.head);q=o(r,"META",{name:!0,content:!0}),r.forEach(t),pt=c(e),C=o(e,"H1",{class:!0});var cl=s(C);I=o(cl,"A",{id:!0,class:!0,href:!0});var jn=s(I);ma=o(jn,"SPAN",{});var xn=s(ma);f(re.$$.fragment,xn),xn.forEach(t),jn.forEach(t),Ll=c(cl),ca=o(cl,"SPAN",{});var Ln=s(ca);ql=i(Ln,"Modelos multiling\xFCes para inferencia"),Ln.forEach(t),cl.forEach(t),ft=c(e),f(de.$$.fragment,e),gt=c(e),j=o(e,"P",{});var ra=s(j);Cl=i(ra,"Existen varios modelos multiling\xFCes en \u{1F917} Transformers y su uso para inferencia difiere de los modelos monoling\xFCes. Sin embargo, no "),ua=o(ra,"EM",{});var qn=s(ua);Pl=i(qn,"todos"),qn.forEach(t),Dl=i(ra," los usos de los modelos multiling\xFCes son diferentes. Algunos modelos, como "),me=o(ra,"A",{href:!0,rel:!0});var Cn=s(me);Tl=i(Cn,"bert-base-multilingual-uncased"),Cn.forEach(t),Xl=i(ra,", pueden utilizarse igual que un modelo monoling\xFCe. Esta gu\xEDa te ense\xF1ar\xE1 c\xF3mo utilizar modelos multiling\xFCes cuyo uso difiere en la inferencia."),ra.forEach(t),ht=c(e),P=o(e,"H2",{class:!0});var ul=s(P);B=o(ul,"A",{id:!0,class:!0,href:!0});var Pn=s(B);pa=o(Pn,"SPAN",{});var Dn=s(pa);f(ce.$$.fragment,Dn),Dn.forEach(t),Pn.forEach(t),Al=c(ul),fa=o(ul,"SPAN",{});var Tn=s(fa);Ol=i(Tn,"XLM"),Tn.forEach(t),ul.forEach(t),_t=c(e),qe=o(e,"P",{});var Xn=s(qe);Sl=i(Xn,"XLM tiene diez checkpoints diferentes de los cuales solo uno es monoling\xFCe. Los nueve checkpoints restantes del modelo pueden dividirse en dos categor\xEDas: los checkpoints que utilizan language embeddings y los que no."),Xn.forEach(t),bt=c(e),D=o(e,"H3",{class:!0});var pl=s(D);R=o(pl,"A",{id:!0,class:!0,href:!0});var An=s(R);ga=o(An,"SPAN",{});var On=s(ga);f(ue.$$.fragment,On),On.forEach(t),An.forEach(t),Il=c(pl),ha=o(pl,"SPAN",{});var Sn=s(ha);Bl=i(Sn,"XLM con language embeddings"),Sn.forEach(t),pl.forEach(t),vt=c(e),Ce=o(e,"P",{});var In=s(Ce);Rl=i(In,"Los siguientes modelos XLM usan language embeddings para especificar el lenguaje utilizado en la inferencia:"),In.forEach(t),Et=c(e),v=o(e,"UL",{});var k=s(v);Pe=o(k,"LI",{});var nn=s(Pe);_a=o(nn,"CODE",{});var Bn=s(_a);Nl=i(Bn,"xlm-mlm-ende-1024"),Bn.forEach(t),Fl=i(nn," (Masked language modeling, English-German)"),nn.forEach(t),Hl=c(k),De=o(k,"LI",{});var rn=s(De);ba=o(rn,"CODE",{});var Rn=s(ba);Gl=i(Rn,"xlm-mlm-enfr-1024"),Rn.forEach(t),Wl=i(rn," (Masked language modeling, English-French)"),rn.forEach(t),Ul=c(k),Te=o(k,"LI",{});var dn=s(Te);va=o(dn,"CODE",{});var Nn=s(va);Jl=i(Nn,"xlm-mlm-enro-1024"),Nn.forEach(t),Kl=i(dn," (Masked language modeling, English-Romanian)"),dn.forEach(t),Ql=c(k),Xe=o(k,"LI",{});var mn=s(Xe);Ea=o(mn,"CODE",{});var Fn=s(Ea);Vl=i(Fn,"xlm-mlm-xnli15-1024"),Fn.forEach(t),Yl=i(mn," (Masked language modeling, XNLI languages)"),mn.forEach(t),Zl=c(k),Ae=o(k,"LI",{});var cn=s(Ae);ka=o(cn,"CODE",{});var Hn=s(ka);eo=i(Hn,"xlm-mlm-tlm-xnli15-1024"),Hn.forEach(t),ao=i(cn," (Masked language modeling + translation, XNLI languages)"),cn.forEach(t),to=c(k),Oe=o(k,"LI",{});var un=s(Oe);$a=o(un,"CODE",{});var Gn=s($a);lo=i(Gn,"xlm-clm-enfr-1024"),Gn.forEach(t),oo=i(un," (Causal language modeling, English-French)"),un.forEach(t),so=c(k),Se=o(k,"LI",{});var pn=s(Se);Ma=o(pn,"CODE",{});var Wn=s(Ma);no=i(Wn,"xlm-clm-ende-1024"),Wn.forEach(t),io=i(pn," (Causal language modeling, English-German)"),pn.forEach(t),k.forEach(t),kt=c(e),$=o(e,"P",{});var le=s($);ro=i(le,"Los language embeddings son representados como un tensor de la mismas dimensiones que los "),ya=o(le,"CODE",{});var Un=s(ya);mo=i(Un,"input_ids"),Un.forEach(t),co=i(le," pasados al modelo. Los valores de estos tensores dependen del idioma utilizado y se identifican mediante los atributos "),wa=o(le,"CODE",{});var Jn=s(wa);uo=i(Jn,"lang2id"),Jn.forEach(t),po=i(le," y "),za=o(le,"CODE",{});var Kn=s(za);fo=i(Kn,"id2lang"),Kn.forEach(t),go=i(le," del tokenizador."),le.forEach(t),$t=c(e),N=o(e,"P",{});var fl=s(N);ho=i(fl,"En este ejemplo, carga el checkpoint "),ja=o(fl,"CODE",{});var Qn=s(ja);_o=i(Qn,"xlm-clm-enfr-1024"),Qn.forEach(t),bo=i(fl," (Causal language modeling, English-French):"),fl.forEach(t),Mt=c(e),f(pe.$$.fragment,e),yt=c(e),F=o(e,"P",{});var gl=s(F);vo=i(gl,"El atributo "),xa=o(gl,"CODE",{});var Vn=s(xa);Eo=i(Vn,"lang2id"),Vn.forEach(t),ko=i(gl," del tokenizador muestra los idiomas de este modelo y sus ids:"),gl.forEach(t),wt=c(e),f(fe.$$.fragment,e),zt=c(e),Ie=o(e,"P",{});var Yn=s(Ie);$o=i(Yn,"A continuaci\xF3n, crea un input de ejemplo:"),Yn.forEach(t),jt=c(e),f(ge.$$.fragment,e),xt=c(e),M=o(e,"P",{});var oe=s(M);Mo=i(oe,"Establece el id del idioma, por ejemplo "),La=o(oe,"CODE",{});var Zn=s(La);yo=i(Zn,'"en"'),Zn.forEach(t),wo=i(oe,", y util\xEDzalo para definir el language embedding. El language embedding es un tensor lleno de "),qa=o(oe,"CODE",{});var ei=s(qa);zo=i(ei,"0"),ei.forEach(t),jo=i(oe," ya que es el id del idioma para ingl\xE9s. Este tensor debe ser del mismo tama\xF1o que "),Ca=o(oe,"CODE",{});var ai=s(Ca);xo=i(ai,"input_ids"),ai.forEach(t),Lo=i(oe,"."),oe.forEach(t),Lt=c(e),f(he.$$.fragment,e),qt=c(e),H=o(e,"P",{});var hl=s(H);qo=i(hl,"Ahora puedes pasar los "),Pa=o(hl,"CODE",{});var ti=s(Pa);Co=i(ti,"input_ids"),ti.forEach(t),Po=i(hl," y el language embedding al modelo:"),hl.forEach(t),Ct=c(e),f(_e.$$.fragment,e),Pt=c(e),x=o(e,"P",{});var da=s(x);Do=i(da,"El script "),be=o(da,"A",{href:!0,rel:!0});var li=s(be);To=i(li,"run_generation.py"),li.forEach(t),Xo=i(da," puede generar texto con language embeddings utilizando los checkpoints "),Da=o(da,"CODE",{});var oi=s(Da);Ao=i(oi,"xlm-clm"),oi.forEach(t),Oo=i(da,"."),da.forEach(t),Dt=c(e),T=o(e,"H3",{class:!0});var _l=s(T);G=o(_l,"A",{id:!0,class:!0,href:!0});var si=s(G);Ta=o(si,"SPAN",{});var ni=s(Ta);f(ve.$$.fragment,ni),ni.forEach(t),si.forEach(t),So=c(_l),Xa=o(_l,"SPAN",{});var ii=s(Xa);Io=i(ii,"XLM sin language embeddings"),ii.forEach(t),_l.forEach(t),Tt=c(e),Be=o(e,"P",{});var ri=s(Be);Bo=i(ri,"Los siguientes modelos XLM no requieren language embeddings durante la inferencia:"),ri.forEach(t),Xt=c(e),W=o(e,"UL",{});var bl=s(W);Re=o(bl,"LI",{});var fn=s(Re);Aa=o(fn,"CODE",{});var di=s(Aa);Ro=i(di,"xlm-mlm-17-1280"),di.forEach(t),No=i(fn," (modelado de lenguaje enmascarado, 17 idiomas)"),fn.forEach(t),Fo=c(bl),Ne=o(bl,"LI",{});var gn=s(Ne);Oa=o(gn,"CODE",{});var mi=s(Oa);Ho=i(mi,"xlm-mlm-100-1280"),mi.forEach(t),Go=i(gn," (modelado de lenguaje enmascarado, 100 idiomas)"),gn.forEach(t),bl.forEach(t),At=c(e),Fe=o(e,"P",{});var ci=s(Fe);Wo=i(ci,"Estos modelos se utilizan para representaciones gen\xE9ricas de frases a diferencia de los anteriores checkpoints XLM."),ci.forEach(t),Ot=c(e),X=o(e,"H2",{class:!0});var vl=s(X);U=o(vl,"A",{id:!0,class:!0,href:!0});var ui=s(U);Sa=o(ui,"SPAN",{});var pi=s(Sa);f(Ee.$$.fragment,pi),pi.forEach(t),ui.forEach(t),Uo=c(vl),Ia=o(vl,"SPAN",{});var fi=s(Ia);Jo=i(fi,"BERT"),fi.forEach(t),vl.forEach(t),St=c(e),He=o(e,"P",{});var gi=s(He);Ko=i(gi,"Los siguientes modelos de BERT pueden utilizarse para tareas multiling\xFCes:"),gi.forEach(t),It=c(e),J=o(e,"UL",{});var El=s(J);Ge=o(El,"LI",{});var hn=s(Ge);Ba=o(hn,"CODE",{});var hi=s(Ba);Qo=i(hi,"bert-base-multilingual-uncased"),hi.forEach(t),Vo=i(hn," (modelado de lenguaje enmascarado + predicci\xF3n de la siguiente oraci\xF3n, 102 idiomas)"),hn.forEach(t),Yo=c(El),We=o(El,"LI",{});var _n=s(We);Ra=o(_n,"CODE",{});var _i=s(Ra);Zo=i(_i,"bert-base-multilingual-cased"),_i.forEach(t),es=i(_n," (modelado de lenguaje enmascarado + predicci\xF3n de la siguiente oraci\xF3n, 104 idiomas)"),_n.forEach(t),El.forEach(t),Bt=c(e),Ue=o(e,"P",{});var bi=s(Ue);as=i(bi,`Estos modelos no requieren language embeddings durante la inferencia. Deben identificar la lengua a partir del
contexto e inferir en consecuencia.`),bi.forEach(t),Rt=c(e),A=o(e,"H2",{class:!0});var kl=s(A);K=o(kl,"A",{id:!0,class:!0,href:!0});var vi=s(K);Na=o(vi,"SPAN",{});var Ei=s(Na);f(ke.$$.fragment,Ei),Ei.forEach(t),vi.forEach(t),ts=c(kl),Fa=o(kl,"SPAN",{});var ki=s(Fa);ls=i(ki,"XLM-RoBERTa"),ki.forEach(t),kl.forEach(t),Nt=c(e),Je=o(e,"P",{});var $i=s(Je);os=i($i,"Los siguientes modelos de XLM-RoBERTa pueden utilizarse para tareas multiling\xFCes:"),$i.forEach(t),Ft=c(e),Q=o(e,"UL",{});var $l=s(Q);Ke=o($l,"LI",{});var bn=s(Ke);Ha=o(bn,"CODE",{});var Mi=s(Ha);ss=i(Mi,"xlm-roberta-base"),Mi.forEach(t),ns=i(bn," (modelado de lenguaje enmascarado, 100 idiomas)"),bn.forEach(t),is=c($l),Qe=o($l,"LI",{});var vn=s(Qe);Ga=o(vn,"CODE",{});var yi=s(Ga);rs=i(yi,"xlm-roberta-large"),yi.forEach(t),ds=i(vn," (Modelado de lenguaje enmascarado, 100 idiomas)"),vn.forEach(t),$l.forEach(t),Ht=c(e),Ve=o(e,"P",{});var wi=s(Ve);ms=i(wi,"XLM-RoBERTa se entren\xF3 con 2,5 TB de datos CommonCrawl reci\xE9n creados y depurados en 100 idiomas. Proporciona fuertes ventajas sobre los modelos multiling\xFCes publicados anteriormente como mBERT o XLM en tareas posteriores como la clasificaci\xF3n, el etiquetado de secuencias y la respuesta a preguntas."),wi.forEach(t),Gt=c(e),O=o(e,"H2",{class:!0});var Ml=s(O);V=o(Ml,"A",{id:!0,class:!0,href:!0});var zi=s(V);Wa=o(zi,"SPAN",{});var ji=s(Wa);f($e.$$.fragment,ji),ji.forEach(t),zi.forEach(t),cs=c(Ml),Ua=o(Ml,"SPAN",{});var xi=s(Ua);us=i(xi,"M2M100"),xi.forEach(t),Ml.forEach(t),Wt=c(e),Ye=o(e,"P",{});var Li=s(Ye);ps=i(Li,"Los siguientes modelos de M2M100 pueden utilizarse para traducci\xF3n multiling\xFCe:"),Li.forEach(t),Ut=c(e),Y=o(e,"UL",{});var yl=s(Y);Ze=o(yl,"LI",{});var En=s(Ze);Ja=o(En,"CODE",{});var qi=s(Ja);fs=i(qi,"facebook/m2m100_418M"),qi.forEach(t),gs=i(En," (traducci\xF3n)"),En.forEach(t),hs=c(yl),ea=o(yl,"LI",{});var kn=s(ea);Ka=o(kn,"CODE",{});var Ci=s(Ka);_s=i(Ci,"facebook/m2m100_1.2B"),Ci.forEach(t),bs=i(kn," (traducci\xF3n)"),kn.forEach(t),yl.forEach(t),Jt=c(e),Z=o(e,"P",{});var wl=s(Z);vs=i(wl,"En este ejemplo, carga el checkpoint "),Qa=o(wl,"CODE",{});var Pi=s(Qa);Es=i(Pi,"facebook/m2m100_418M"),Pi.forEach(t),ks=i(wl," para traducir del chino al ingl\xE9s. Puedes establecer el idioma de origen en el tokenizador:"),wl.forEach(t),Kt=c(e),f(Me.$$.fragment,e),Qt=c(e),aa=o(e,"P",{});var Di=s(aa);$s=i(Di,"Tokeniza el texto:"),Di.forEach(t),Vt=c(e),f(ye.$$.fragment,e),Yt=c(e),y=o(e,"P",{});var se=s(y);Ms=i(se,"M2M100 fuerza el id del idioma de destino como el primer token generado para traducir al idioma de destino.. Establece el "),Va=o(se,"CODE",{});var Ti=s(Va);ys=i(Ti,"forced_bos_token_id"),Ti.forEach(t),ws=i(se," a "),Ya=o(se,"CODE",{});var Xi=s(Ya);zs=i(Xi,"en"),Xi.forEach(t),js=i(se," en el m\xE9todo "),Za=o(se,"CODE",{});var Ai=s(Za);xs=i(Ai,"generate"),Ai.forEach(t),Ls=i(se," para traducir al ingl\xE9s:"),se.forEach(t),Zt=c(e),f(we.$$.fragment,e),el=c(e),S=o(e,"H2",{class:!0});var zl=s(S);ee=o(zl,"A",{id:!0,class:!0,href:!0});var Oi=s(ee);et=o(Oi,"SPAN",{});var Si=s(et);f(ze.$$.fragment,Si),Si.forEach(t),Oi.forEach(t),qs=c(zl),at=o(zl,"SPAN",{});var Ii=s(at);Cs=i(Ii,"MBart"),Ii.forEach(t),zl.forEach(t),al=c(e),ta=o(e,"P",{});var Bi=s(ta);Ps=i(Bi,"Los siguientes modelos de MBart pueden utilizarse para traducci\xF3n multiling\xFCe:"),Bi.forEach(t),tl=c(e),E=o(e,"UL",{});var L=s(E);la=o(L,"LI",{});var $n=s(la);tt=o($n,"CODE",{});var Ri=s(tt);Ds=i(Ri,"facebook/mbart-large-50-one-to-many-mmt"),Ri.forEach(t),Ts=i($n," (traducci\xF3n autom\xE1tica multiling\xFCe de uno a muchos, 50 idiomas)"),$n.forEach(t),Xs=c(L),oa=o(L,"LI",{});var Mn=s(oa);lt=o(Mn,"CODE",{});var Ni=s(lt);As=i(Ni,"facebook/mbart-large-50-many-to-many-mmt"),Ni.forEach(t),Os=i(Mn," (traducci\xF3n autom\xE1tica multiling\xFCe de muchos a muchos, 50 idiomas)"),Mn.forEach(t),Ss=c(L),sa=o(L,"LI",{});var yn=s(sa);ot=o(yn,"CODE",{});var Fi=s(ot);Is=i(Fi,"facebook/mbart-large-50-many-to-one-mmt"),Fi.forEach(t),Bs=i(yn," (traducci\xF3n autom\xE1tica multiling\xFCe muchos a uno, 50 idiomas)"),yn.forEach(t),Rs=c(L),na=o(L,"LI",{});var wn=s(na);st=o(wn,"CODE",{});var Hi=s(st);Ns=i(Hi,"facebook/mbart-large-50"),Hi.forEach(t),Fs=i(wn," (traducci\xF3n multiling\xFCe, 50 idiomas)"),wn.forEach(t),Hs=c(L),nt=o(L,"LI",{});var Gi=s(nt);it=o(Gi,"CODE",{});var Wi=s(it);Gs=i(Wi,"facebook/mbart-large-cc25"),Wi.forEach(t),Gi.forEach(t),L.forEach(t),ll=c(e),ae=o(e,"P",{});var jl=s(ae);Ws=i(jl,"En este ejemplo, carga el checkpoint "),rt=o(jl,"CODE",{});var Ui=s(rt);Us=i(Ui,"facebook/mbart-large-50-many-to-many-mmt"),Ui.forEach(t),Js=i(jl," para traducir del finland\xE9s al ingl\xE9s. Puedes establecer el idioma de origen en el tokenizador:"),jl.forEach(t),ol=c(e),f(je.$$.fragment,e),sl=c(e),ia=o(e,"P",{});var Ji=s(ia);Ks=i(Ji,"Tokeniza el texto:"),Ji.forEach(t),nl=c(e),f(xe.$$.fragment,e),il=c(e),w=o(e,"P",{});var ne=s(w);Qs=i(ne,"MBart fuerza el id del idioma de destino como el primer token generado para traducirlo. Establece el "),dt=o(ne,"CODE",{});var Ki=s(dt);Vs=i(Ki,"forced_bos_token_id"),Ki.forEach(t),Ys=i(ne," a "),mt=o(ne,"CODE",{});var Qi=s(mt);Zs=i(Qi,"en"),Qi.forEach(t),en=i(ne," en el m\xE9todo "),ct=o(ne,"CODE",{});var Vi=s(ct);an=i(Vi,"generate"),Vi.forEach(t),tn=i(ne," para traducir al ingl\xE9s:"),ne.forEach(t),rl=c(e),f(Le.$$.fragment,e),dl=c(e),te=o(e,"P",{});var xl=s(te);ln=i(xl,"Si est\xE1s usando el checkpoint "),ut=o(xl,"CODE",{});var Yi=s(ut);on=i(Yi,"facebook/mbart-large-50-many-to-one-mmt"),Yi.forEach(t),sn=i(xl," no necesitas forzar el id del idioma de destino como el primer token generado, de lo contrario el uso es el mismo."),xl.forEach(t),this.h()},h(){u(q,"name","hf:doc:metadata"),u(q,"content",JSON.stringify(ir)),u(I,"id","modelos-multilinges-para-inferencia"),u(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(I,"href","#modelos-multilinges-para-inferencia"),u(C,"class","relative group"),u(me,"href","https://huggingface.co/bert-base-multilingual-uncased"),u(me,"rel","nofollow"),u(B,"id","xlm"),u(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(B,"href","#xlm"),u(P,"class","relative group"),u(R,"id","xlm-con-language-embeddings"),u(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(R,"href","#xlm-con-language-embeddings"),u(D,"class","relative group"),u(be,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/text-generation/run_generation.py"),u(be,"rel","nofollow"),u(G,"id","xlm-sin-language-embeddings"),u(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(G,"href","#xlm-sin-language-embeddings"),u(T,"class","relative group"),u(U,"id","bert"),u(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(U,"href","#bert"),u(X,"class","relative group"),u(K,"id","xlmroberta"),u(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(K,"href","#xlmroberta"),u(A,"class","relative group"),u(V,"id","m2m100"),u(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(V,"href","#m2m100"),u(O,"class","relative group"),u(ee,"id","mbart"),u(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ee,"href","#mbart"),u(S,"class","relative group")},m(e,r){a(document.head,q),d(e,pt,r),d(e,C,r),a(C,I),a(I,ma),g(re,ma,null),a(C,Ll),a(C,ca),a(ca,ql),d(e,ft,r),g(de,e,r),d(e,gt,r),d(e,j,r),a(j,Cl),a(j,ua),a(ua,Pl),a(j,Dl),a(j,me),a(me,Tl),a(j,Xl),d(e,ht,r),d(e,P,r),a(P,B),a(B,pa),g(ce,pa,null),a(P,Al),a(P,fa),a(fa,Ol),d(e,_t,r),d(e,qe,r),a(qe,Sl),d(e,bt,r),d(e,D,r),a(D,R),a(R,ga),g(ue,ga,null),a(D,Il),a(D,ha),a(ha,Bl),d(e,vt,r),d(e,Ce,r),a(Ce,Rl),d(e,Et,r),d(e,v,r),a(v,Pe),a(Pe,_a),a(_a,Nl),a(Pe,Fl),a(v,Hl),a(v,De),a(De,ba),a(ba,Gl),a(De,Wl),a(v,Ul),a(v,Te),a(Te,va),a(va,Jl),a(Te,Kl),a(v,Ql),a(v,Xe),a(Xe,Ea),a(Ea,Vl),a(Xe,Yl),a(v,Zl),a(v,Ae),a(Ae,ka),a(ka,eo),a(Ae,ao),a(v,to),a(v,Oe),a(Oe,$a),a($a,lo),a(Oe,oo),a(v,so),a(v,Se),a(Se,Ma),a(Ma,no),a(Se,io),d(e,kt,r),d(e,$,r),a($,ro),a($,ya),a(ya,mo),a($,co),a($,wa),a(wa,uo),a($,po),a($,za),a(za,fo),a($,go),d(e,$t,r),d(e,N,r),a(N,ho),a(N,ja),a(ja,_o),a(N,bo),d(e,Mt,r),g(pe,e,r),d(e,yt,r),d(e,F,r),a(F,vo),a(F,xa),a(xa,Eo),a(F,ko),d(e,wt,r),g(fe,e,r),d(e,zt,r),d(e,Ie,r),a(Ie,$o),d(e,jt,r),g(ge,e,r),d(e,xt,r),d(e,M,r),a(M,Mo),a(M,La),a(La,yo),a(M,wo),a(M,qa),a(qa,zo),a(M,jo),a(M,Ca),a(Ca,xo),a(M,Lo),d(e,Lt,r),g(he,e,r),d(e,qt,r),d(e,H,r),a(H,qo),a(H,Pa),a(Pa,Co),a(H,Po),d(e,Ct,r),g(_e,e,r),d(e,Pt,r),d(e,x,r),a(x,Do),a(x,be),a(be,To),a(x,Xo),a(x,Da),a(Da,Ao),a(x,Oo),d(e,Dt,r),d(e,T,r),a(T,G),a(G,Ta),g(ve,Ta,null),a(T,So),a(T,Xa),a(Xa,Io),d(e,Tt,r),d(e,Be,r),a(Be,Bo),d(e,Xt,r),d(e,W,r),a(W,Re),a(Re,Aa),a(Aa,Ro),a(Re,No),a(W,Fo),a(W,Ne),a(Ne,Oa),a(Oa,Ho),a(Ne,Go),d(e,At,r),d(e,Fe,r),a(Fe,Wo),d(e,Ot,r),d(e,X,r),a(X,U),a(U,Sa),g(Ee,Sa,null),a(X,Uo),a(X,Ia),a(Ia,Jo),d(e,St,r),d(e,He,r),a(He,Ko),d(e,It,r),d(e,J,r),a(J,Ge),a(Ge,Ba),a(Ba,Qo),a(Ge,Vo),a(J,Yo),a(J,We),a(We,Ra),a(Ra,Zo),a(We,es),d(e,Bt,r),d(e,Ue,r),a(Ue,as),d(e,Rt,r),d(e,A,r),a(A,K),a(K,Na),g(ke,Na,null),a(A,ts),a(A,Fa),a(Fa,ls),d(e,Nt,r),d(e,Je,r),a(Je,os),d(e,Ft,r),d(e,Q,r),a(Q,Ke),a(Ke,Ha),a(Ha,ss),a(Ke,ns),a(Q,is),a(Q,Qe),a(Qe,Ga),a(Ga,rs),a(Qe,ds),d(e,Ht,r),d(e,Ve,r),a(Ve,ms),d(e,Gt,r),d(e,O,r),a(O,V),a(V,Wa),g($e,Wa,null),a(O,cs),a(O,Ua),a(Ua,us),d(e,Wt,r),d(e,Ye,r),a(Ye,ps),d(e,Ut,r),d(e,Y,r),a(Y,Ze),a(Ze,Ja),a(Ja,fs),a(Ze,gs),a(Y,hs),a(Y,ea),a(ea,Ka),a(Ka,_s),a(ea,bs),d(e,Jt,r),d(e,Z,r),a(Z,vs),a(Z,Qa),a(Qa,Es),a(Z,ks),d(e,Kt,r),g(Me,e,r),d(e,Qt,r),d(e,aa,r),a(aa,$s),d(e,Vt,r),g(ye,e,r),d(e,Yt,r),d(e,y,r),a(y,Ms),a(y,Va),a(Va,ys),a(y,ws),a(y,Ya),a(Ya,zs),a(y,js),a(y,Za),a(Za,xs),a(y,Ls),d(e,Zt,r),g(we,e,r),d(e,el,r),d(e,S,r),a(S,ee),a(ee,et),g(ze,et,null),a(S,qs),a(S,at),a(at,Cs),d(e,al,r),d(e,ta,r),a(ta,Ps),d(e,tl,r),d(e,E,r),a(E,la),a(la,tt),a(tt,Ds),a(la,Ts),a(E,Xs),a(E,oa),a(oa,lt),a(lt,As),a(oa,Os),a(E,Ss),a(E,sa),a(sa,ot),a(ot,Is),a(sa,Bs),a(E,Rs),a(E,na),a(na,st),a(st,Ns),a(na,Fs),a(E,Hs),a(E,nt),a(nt,it),a(it,Gs),d(e,ll,r),d(e,ae,r),a(ae,Ws),a(ae,rt),a(rt,Us),a(ae,Js),d(e,ol,r),g(je,e,r),d(e,sl,r),d(e,ia,r),a(ia,Ks),d(e,nl,r),g(xe,e,r),d(e,il,r),d(e,w,r),a(w,Qs),a(w,dt),a(dt,Vs),a(w,Ys),a(w,mt),a(mt,Zs),a(w,en),a(w,ct),a(ct,an),a(w,tn),d(e,rl,r),g(Le,e,r),d(e,dl,r),d(e,te,r),a(te,ln),a(te,ut),a(ut,on),a(te,sn),ml=!0},p:lr,i(e){ml||(h(re.$$.fragment,e),h(de.$$.fragment,e),h(ce.$$.fragment,e),h(ue.$$.fragment,e),h(pe.$$.fragment,e),h(fe.$$.fragment,e),h(ge.$$.fragment,e),h(he.$$.fragment,e),h(_e.$$.fragment,e),h(ve.$$.fragment,e),h(Ee.$$.fragment,e),h(ke.$$.fragment,e),h($e.$$.fragment,e),h(Me.$$.fragment,e),h(ye.$$.fragment,e),h(we.$$.fragment,e),h(ze.$$.fragment,e),h(je.$$.fragment,e),h(xe.$$.fragment,e),h(Le.$$.fragment,e),ml=!0)},o(e){_(re.$$.fragment,e),_(de.$$.fragment,e),_(ce.$$.fragment,e),_(ue.$$.fragment,e),_(pe.$$.fragment,e),_(fe.$$.fragment,e),_(ge.$$.fragment,e),_(he.$$.fragment,e),_(_e.$$.fragment,e),_(ve.$$.fragment,e),_(Ee.$$.fragment,e),_(ke.$$.fragment,e),_($e.$$.fragment,e),_(Me.$$.fragment,e),_(ye.$$.fragment,e),_(we.$$.fragment,e),_(ze.$$.fragment,e),_(je.$$.fragment,e),_(xe.$$.fragment,e),_(Le.$$.fragment,e),ml=!1},d(e){t(q),e&&t(pt),e&&t(C),b(re),e&&t(ft),b(de,e),e&&t(gt),e&&t(j),e&&t(ht),e&&t(P),b(ce),e&&t(_t),e&&t(qe),e&&t(bt),e&&t(D),b(ue),e&&t(vt),e&&t(Ce),e&&t(Et),e&&t(v),e&&t(kt),e&&t($),e&&t($t),e&&t(N),e&&t(Mt),b(pe,e),e&&t(yt),e&&t(F),e&&t(wt),b(fe,e),e&&t(zt),e&&t(Ie),e&&t(jt),b(ge,e),e&&t(xt),e&&t(M),e&&t(Lt),b(he,e),e&&t(qt),e&&t(H),e&&t(Ct),b(_e,e),e&&t(Pt),e&&t(x),e&&t(Dt),e&&t(T),b(ve),e&&t(Tt),e&&t(Be),e&&t(Xt),e&&t(W),e&&t(At),e&&t(Fe),e&&t(Ot),e&&t(X),b(Ee),e&&t(St),e&&t(He),e&&t(It),e&&t(J),e&&t(Bt),e&&t(Ue),e&&t(Rt),e&&t(A),b(ke),e&&t(Nt),e&&t(Je),e&&t(Ft),e&&t(Q),e&&t(Ht),e&&t(Ve),e&&t(Gt),e&&t(O),b($e),e&&t(Wt),e&&t(Ye),e&&t(Ut),e&&t(Y),e&&t(Jt),e&&t(Z),e&&t(Kt),b(Me,e),e&&t(Qt),e&&t(aa),e&&t(Vt),b(ye,e),e&&t(Yt),e&&t(y),e&&t(Zt),b(we,e),e&&t(el),e&&t(S),b(ze),e&&t(al),e&&t(ta),e&&t(tl),e&&t(E),e&&t(ll),e&&t(ae),e&&t(ol),b(je,e),e&&t(sl),e&&t(ia),e&&t(nl),b(xe,e),e&&t(il),e&&t(w),e&&t(rl),b(Le,e),e&&t(dl),e&&t(te)}}}const ir={local:"modelos-multilinges-para-inferencia",sections:[{local:"xlm",sections:[{local:"xlm-con-language-embeddings",title:"XLM con language embeddings"},{local:"xlm-sin-language-embeddings",title:"XLM sin language embeddings"}],title:"XLM"},{local:"bert",title:"BERT"},{local:"xlmroberta",title:"XLM-RoBERTa"},{local:"m2m100",title:"M2M100"},{local:"mbart",title:"MBart"}],title:"Modelos multiling\xFCes para inferencia"};function rr(zn){return or(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ur extends Zi{constructor(q){super();er(this,q,rr,nr,ar,{})}}export{ur as default,ir as metadata};
