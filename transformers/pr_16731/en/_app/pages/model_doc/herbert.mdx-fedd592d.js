import{S as ss,i as as,s as ns,e as s,k as l,w as k,t as o,M as os,c as a,d as r,m as c,a as n,x as _,h as i,b as p,F as e,g as m,y as g,L as is,q as v,o as b,B as w,v as ls}from"../../chunks/vendor-6b77c823.js";import{D as Ie}from"../../chunks/Docstring-af1d0ae0.js";import{C as rs}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ct}from"../../chunks/IconCopyLink-7a11ce68.js";function cs(vr){let $,Me,H,B,he,I,pt,fe,dt,De,P,j,ue,M,mt,ke,ht,Ne,R,ft,D,ut,kt,Ce,se,_t,Se,ae,_e,gt,Ue,ne,vt,Oe,N,Je,T,bt,C,wt,Tt,S,zt,Et,Ve,L,A,ge,U,yt,ve,$t,Xe,u,O,Ht,be,Pt,Lt,we,qt,Bt,J,Te,ze,jt,Rt,Ee,ye,At,Ft,V,xt,oe,It,Mt,Ke,q,F,$e,X,Dt,He,Nt,We,h,K,Ct,W,St,Pe,Ut,Ot,Jt,Le,Vt,Xt,qe,Be,Kt,Wt,G,Gt,ie,Qt,Yt,Zt,z,Q,er,je,tr,rr,Y,le,sr,Re,ar,nr,ce,or,Ae,ir,lr,E,Z,cr,Fe,pr,dr,ee,mr,x,te,hr,re,fr,xe,ur,kr,Ge;return I=new ct({}),M=new ct({}),N=new rs({props:{code:`from transformers import HerbertTokenizer, RobertaModel

tokenizer = HerbertTokenizer.from_pretrained("allegro/herbert-klej-cased-tokenizer-v1")
model = RobertaModel.from_pretrained("allegro/herbert-klej-cased-v1")

encoded_input = tokenizer.encode("Kto ma lepsz\u0105 sztuk\u0119, ma lepszy rz\u0105d \u2013 to jasne.", return_tensors="pt")
outputs = model(encoded_input)

# HerBERT can also be loaded using AutoTokenizer and AutoModel:
import torch
from transformers import AutoModel, AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("allegro/herbert-klej-cased-tokenizer-v1")
model = AutoModel.from_pretrained("allegro/herbert-klej-cased-v1")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> HerbertTokenizer, RobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = HerbertTokenizer.from_pretrained(<span class="hljs-string">&quot;allegro/herbert-klej-cased-tokenizer-v1&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaModel.from_pretrained(<span class="hljs-string">&quot;allegro/herbert-klej-cased-v1&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_input = tokenizer.encode(<span class="hljs-string">&quot;Kto ma lepsz\u0105 sztuk\u0119, ma lepszy rz\u0105d \u2013 to jasne.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(encoded_input)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># HerBERT can also be loaded using AutoTokenizer and AutoModel:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;allegro/herbert-klej-cased-tokenizer-v1&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModel.from_pretrained(<span class="hljs-string">&quot;allegro/herbert-klej-cased-v1&quot;</span>)`}}),U=new ct({}),O=new Ie({props:{name:"class transformers.HerbertTokenizer",anchor:"transformers.HerbertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"tokenizer_file",val:" = None"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sep_token",val:" = '</s>'"},{name:"do_lowercase_and_remove_accent",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16731/src/transformers/models/herbert/tokenization_herbert.py#L41"}}),X=new ct({}),K=new Ie({props:{name:"class transformers.HerbertTokenizerFast",anchor:"transformers.HerbertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sep_token",val:" = '</s>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16731/src/transformers/models/herbert/tokenization_herbert_fast.py#L40",parametersDescription:[{anchor:"transformers.HerbertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.HerbertTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"}]}}),Q=new Ie({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.HerbertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16731/src/transformers/models/herbert/tokenization_herbert_fast.py#L90",parametersDescription:[{anchor:"transformers.HerbertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.HerbertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Z=new Ie({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.HerbertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16731/src/transformers/models/herbert/tokenization_herbert_fast.py#L144",parametersDescription:[{anchor:"transformers.HerbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.HerbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ee=new rs({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),te=new Ie({props:{name:"get_special_tokens_mask",anchor:"transformers.HerbertTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16731/src/transformers/models/herbert/tokenization_herbert_fast.py#L117",parametersDescription:[{anchor:"transformers.HerbertTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.HerbertTokenizerFast.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.HerbertTokenizerFast.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){$=s("meta"),Me=l(),H=s("h1"),B=s("a"),he=s("span"),k(I.$$.fragment),pt=l(),fe=s("span"),dt=o("HerBERT"),De=l(),P=s("h2"),j=s("a"),ue=s("span"),k(M.$$.fragment),mt=l(),ke=s("span"),ht=o("Overview"),Ne=l(),R=s("p"),ft=o("The HerBERT model was proposed in "),D=s("a"),ut=o("KLEJ: Comprehensive Benchmark for Polish Language Understanding"),kt=o(` by Piotr Rybak, Robert Mroczkowski, Janusz Tracz, and
Ireneusz Gawlik. It is a BERT-based Language Model trained on Polish Corpora using only MLM objective with dynamic
masking of whole words.`),Ce=l(),se=s("p"),_t=o("The abstract from the paper is the following:"),Se=l(),ae=s("p"),_e=s("em"),gt=o(`In recent years, a series of Transformer-based models unlocked major improvements in general natural language
understanding (NLU) tasks. Such a fast pace of research would not be possible without general NLU benchmarks, which
allow for a fair comparison of the proposed methods. However, such benchmarks are available only for a handful of
languages. To alleviate this issue, we introduce a comprehensive multi-task benchmark for the Polish language
understanding, accompanied by an online leaderboard. It consists of a diverse set of tasks, adopted from existing
datasets for named entity recognition, question-answering, textual entailment, and others. We also introduce a new
sentiment analysis task for the e-commerce domain, named Allegro Reviews (AR). To ensure a common evaluation scheme and
promote models that generalize to different NLU tasks, the benchmark includes datasets from varying domains and
applications. Additionally, we release HerBERT, a Transformer-based model trained specifically for the Polish language,
which has the best average performance and obtains the best results for three out of nine tasks. Finally, we provide an
extensive evaluation, including several standard baselines and recently proposed, multilingual Transformer-based
models.`),Ue=l(),ne=s("p"),vt=o("Examples of use:"),Oe=l(),k(N.$$.fragment),Je=l(),T=s("p"),bt=o("This model was contributed by "),C=s("a"),wt=o("rmroczkowski"),Tt=o(`. The original code can be found
`),S=s("a"),zt=o("here"),Et=o("."),Ve=l(),L=s("h2"),A=s("a"),ge=s("span"),k(U.$$.fragment),yt=l(),ve=s("span"),$t=o("HerbertTokenizer"),Xe=l(),u=s("div"),k(O.$$.fragment),Ht=l(),be=s("p"),Pt=o("Construct a BPE tokenizer for HerBERT."),Lt=l(),we=s("p"),qt=o("Peculiarities:"),Bt=l(),J=s("ul"),Te=s("li"),ze=s("p"),jt=o(`uses BERT\u2019s pre-tokenizer: BaseTokenizer splits tokens on spaces, and also on punctuation. Each occurrence of a
punctuation character will be treated separately.`),Rt=l(),Ee=s("li"),ye=s("p"),At=o("Such pretokenized input is BPE subtokenized"),Ft=l(),V=s("p"),xt=o("This tokenizer inherits from "),oe=s("a"),It=o("XLMTokenizer"),Mt=o(` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),Ke=l(),q=s("h2"),F=s("a"),$e=s("span"),k(X.$$.fragment),Dt=l(),He=s("span"),Nt=o("HerbertTokenizerFast"),We=l(),h=s("div"),k(K.$$.fragment),Ct=l(),W=s("p"),St=o("Construct a \u201CFast\u201D BPE tokenizer for HerBERT (backed by HuggingFace\u2019s "),Pe=s("em"),Ut=o("tokenizers"),Ot=o(" library)."),Jt=l(),Le=s("p"),Vt=o("Peculiarities:"),Xt=l(),qe=s("ul"),Be=s("li"),Kt=o(`uses BERT\u2019s pre-tokenizer: BertPreTokenizer splits tokens on spaces, and also on punctuation. Each occurrence of
a punctuation character will be treated separately.`),Wt=l(),G=s("p"),Gt=o("This tokenizer inherits from "),ie=s("a"),Qt=o("PreTrainedTokenizer"),Yt=o(` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),Zt=l(),z=s("div"),k(Q.$$.fragment),er=l(),je=s("p"),tr=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An HerBERT, like BERT sequence has the following format:`),rr=l(),Y=s("ul"),le=s("li"),sr=o("single sequence: "),Re=s("code"),ar=o("<s> X </s>"),nr=l(),ce=s("li"),or=o("pair of sequences: "),Ae=s("code"),ir=o("<s> A </s> B </s>"),lr=l(),E=s("div"),k(Z.$$.fragment),cr=l(),Fe=s("p"),pr=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. HerBERT, like
BERT sequence pair mask has the following format:`),dr=l(),k(ee.$$.fragment),mr=l(),x=s("div"),k(te.$$.fragment),hr=l(),re=s("p"),fr=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xe=s("code"),ur=o("prepare_for_model"),kr=o(" method."),this.h()},l(t){const d=os('[data-svelte="svelte-1phssyn"]',document.head);$=a(d,"META",{name:!0,content:!0}),d.forEach(r),Me=c(t),H=a(t,"H1",{class:!0});var Qe=n(H);B=a(Qe,"A",{id:!0,class:!0,href:!0});var br=n(B);he=a(br,"SPAN",{});var wr=n(he);_(I.$$.fragment,wr),wr.forEach(r),br.forEach(r),pt=c(Qe),fe=a(Qe,"SPAN",{});var Tr=n(fe);dt=i(Tr,"HerBERT"),Tr.forEach(r),Qe.forEach(r),De=c(t),P=a(t,"H2",{class:!0});var Ye=n(P);j=a(Ye,"A",{id:!0,class:!0,href:!0});var zr=n(j);ue=a(zr,"SPAN",{});var Er=n(ue);_(M.$$.fragment,Er),Er.forEach(r),zr.forEach(r),mt=c(Ye),ke=a(Ye,"SPAN",{});var yr=n(ke);ht=i(yr,"Overview"),yr.forEach(r),Ye.forEach(r),Ne=c(t),R=a(t,"P",{});var Ze=n(R);ft=i(Ze,"The HerBERT model was proposed in "),D=a(Ze,"A",{href:!0,rel:!0});var $r=n(D);ut=i($r,"KLEJ: Comprehensive Benchmark for Polish Language Understanding"),$r.forEach(r),kt=i(Ze,` by Piotr Rybak, Robert Mroczkowski, Janusz Tracz, and
Ireneusz Gawlik. It is a BERT-based Language Model trained on Polish Corpora using only MLM objective with dynamic
masking of whole words.`),Ze.forEach(r),Ce=c(t),se=a(t,"P",{});var Hr=n(se);_t=i(Hr,"The abstract from the paper is the following:"),Hr.forEach(r),Se=c(t),ae=a(t,"P",{});var Pr=n(ae);_e=a(Pr,"EM",{});var Lr=n(_e);gt=i(Lr,`In recent years, a series of Transformer-based models unlocked major improvements in general natural language
understanding (NLU) tasks. Such a fast pace of research would not be possible without general NLU benchmarks, which
allow for a fair comparison of the proposed methods. However, such benchmarks are available only for a handful of
languages. To alleviate this issue, we introduce a comprehensive multi-task benchmark for the Polish language
understanding, accompanied by an online leaderboard. It consists of a diverse set of tasks, adopted from existing
datasets for named entity recognition, question-answering, textual entailment, and others. We also introduce a new
sentiment analysis task for the e-commerce domain, named Allegro Reviews (AR). To ensure a common evaluation scheme and
promote models that generalize to different NLU tasks, the benchmark includes datasets from varying domains and
applications. Additionally, we release HerBERT, a Transformer-based model trained specifically for the Polish language,
which has the best average performance and obtains the best results for three out of nine tasks. Finally, we provide an
extensive evaluation, including several standard baselines and recently proposed, multilingual Transformer-based
models.`),Lr.forEach(r),Pr.forEach(r),Ue=c(t),ne=a(t,"P",{});var qr=n(ne);vt=i(qr,"Examples of use:"),qr.forEach(r),Oe=c(t),_(N.$$.fragment,t),Je=c(t),T=a(t,"P",{});var pe=n(T);bt=i(pe,"This model was contributed by "),C=a(pe,"A",{href:!0,rel:!0});var Br=n(C);wt=i(Br,"rmroczkowski"),Br.forEach(r),Tt=i(pe,`. The original code can be found
`),S=a(pe,"A",{href:!0,rel:!0});var jr=n(S);zt=i(jr,"here"),jr.forEach(r),Et=i(pe,"."),pe.forEach(r),Ve=c(t),L=a(t,"H2",{class:!0});var et=n(L);A=a(et,"A",{id:!0,class:!0,href:!0});var Rr=n(A);ge=a(Rr,"SPAN",{});var Ar=n(ge);_(U.$$.fragment,Ar),Ar.forEach(r),Rr.forEach(r),yt=c(et),ve=a(et,"SPAN",{});var Fr=n(ve);$t=i(Fr,"HerbertTokenizer"),Fr.forEach(r),et.forEach(r),Xe=c(t),u=a(t,"DIV",{class:!0});var y=n(u);_(O.$$.fragment,y),Ht=c(y),be=a(y,"P",{});var xr=n(be);Pt=i(xr,"Construct a BPE tokenizer for HerBERT."),xr.forEach(r),Lt=c(y),we=a(y,"P",{});var Ir=n(we);qt=i(Ir,"Peculiarities:"),Ir.forEach(r),Bt=c(y),J=a(y,"UL",{});var tt=n(J);Te=a(tt,"LI",{});var Mr=n(Te);ze=a(Mr,"P",{});var Dr=n(ze);jt=i(Dr,`uses BERT\u2019s pre-tokenizer: BaseTokenizer splits tokens on spaces, and also on punctuation. Each occurrence of a
punctuation character will be treated separately.`),Dr.forEach(r),Mr.forEach(r),Rt=c(tt),Ee=a(tt,"LI",{});var Nr=n(Ee);ye=a(Nr,"P",{});var Cr=n(ye);At=i(Cr,"Such pretokenized input is BPE subtokenized"),Cr.forEach(r),Nr.forEach(r),tt.forEach(r),Ft=c(y),V=a(y,"P",{});var rt=n(V);xt=i(rt,"This tokenizer inherits from "),oe=a(rt,"A",{href:!0});var Sr=n(oe);It=i(Sr,"XLMTokenizer"),Sr.forEach(r),Mt=i(rt,` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),rt.forEach(r),y.forEach(r),Ke=c(t),q=a(t,"H2",{class:!0});var st=n(q);F=a(st,"A",{id:!0,class:!0,href:!0});var Ur=n(F);$e=a(Ur,"SPAN",{});var Or=n($e);_(X.$$.fragment,Or),Or.forEach(r),Ur.forEach(r),Dt=c(st),He=a(st,"SPAN",{});var Jr=n(He);Nt=i(Jr,"HerbertTokenizerFast"),Jr.forEach(r),st.forEach(r),We=c(t),h=a(t,"DIV",{class:!0});var f=n(h);_(K.$$.fragment,f),Ct=c(f),W=a(f,"P",{});var at=n(W);St=i(at,"Construct a \u201CFast\u201D BPE tokenizer for HerBERT (backed by HuggingFace\u2019s "),Pe=a(at,"EM",{});var Vr=n(Pe);Ut=i(Vr,"tokenizers"),Vr.forEach(r),Ot=i(at," library)."),at.forEach(r),Jt=c(f),Le=a(f,"P",{});var Xr=n(Le);Vt=i(Xr,"Peculiarities:"),Xr.forEach(r),Xt=c(f),qe=a(f,"UL",{});var Kr=n(qe);Be=a(Kr,"LI",{});var Wr=n(Be);Kt=i(Wr,`uses BERT\u2019s pre-tokenizer: BertPreTokenizer splits tokens on spaces, and also on punctuation. Each occurrence of
a punctuation character will be treated separately.`),Wr.forEach(r),Kr.forEach(r),Wt=c(f),G=a(f,"P",{});var nt=n(G);Gt=i(nt,"This tokenizer inherits from "),ie=a(nt,"A",{href:!0});var Gr=n(ie);Qt=i(Gr,"PreTrainedTokenizer"),Gr.forEach(r),Yt=i(nt,` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),nt.forEach(r),Zt=c(f),z=a(f,"DIV",{class:!0});var de=n(z);_(Q.$$.fragment,de),er=c(de),je=a(de,"P",{});var Qr=n(je);tr=i(Qr,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An HerBERT, like BERT sequence has the following format:`),Qr.forEach(r),rr=c(de),Y=a(de,"UL",{});var ot=n(Y);le=a(ot,"LI",{});var _r=n(le);sr=i(_r,"single sequence: "),Re=a(_r,"CODE",{});var Yr=n(Re);ar=i(Yr,"<s> X </s>"),Yr.forEach(r),_r.forEach(r),nr=c(ot),ce=a(ot,"LI",{});var gr=n(ce);or=i(gr,"pair of sequences: "),Ae=a(gr,"CODE",{});var Zr=n(Ae);ir=i(Zr,"<s> A </s> B </s>"),Zr.forEach(r),gr.forEach(r),ot.forEach(r),de.forEach(r),lr=c(f),E=a(f,"DIV",{class:!0});var me=n(E);_(Z.$$.fragment,me),cr=c(me),Fe=a(me,"P",{});var es=n(Fe);pr=i(es,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. HerBERT, like
BERT sequence pair mask has the following format:`),es.forEach(r),dr=c(me),_(ee.$$.fragment,me),me.forEach(r),mr=c(f),x=a(f,"DIV",{class:!0});var it=n(x);_(te.$$.fragment,it),hr=c(it),re=a(it,"P",{});var lt=n(re);fr=i(lt,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xe=a(lt,"CODE",{});var ts=n(xe);ur=i(ts,"prepare_for_model"),ts.forEach(r),kr=i(lt," method."),lt.forEach(r),it.forEach(r),f.forEach(r),this.h()},h(){p($,"name","hf:doc:metadata"),p($,"content",JSON.stringify(ps)),p(B,"id","herbert"),p(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(B,"href","#herbert"),p(H,"class","relative group"),p(j,"id","overview"),p(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(j,"href","#overview"),p(P,"class","relative group"),p(D,"href","https://www.aclweb.org/anthology/2020.acl-main.111.pdf"),p(D,"rel","nofollow"),p(C,"href","https://huggingface.co/rmroczkowski"),p(C,"rel","nofollow"),p(S,"href","https://github.com/allegro/HerBERT"),p(S,"rel","nofollow"),p(A,"id","transformers.HerbertTokenizer"),p(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(A,"href","#transformers.HerbertTokenizer"),p(L,"class","relative group"),p(oe,"href","/docs/transformers/pr_16731/en/model_doc/xlm#transformers.XLMTokenizer"),p(u,"class","docstring"),p(F,"id","transformers.HerbertTokenizerFast"),p(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(F,"href","#transformers.HerbertTokenizerFast"),p(q,"class","relative group"),p(ie,"href","/docs/transformers/pr_16731/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(z,"class","docstring"),p(E,"class","docstring"),p(x,"class","docstring"),p(h,"class","docstring")},m(t,d){e(document.head,$),m(t,Me,d),m(t,H,d),e(H,B),e(B,he),g(I,he,null),e(H,pt),e(H,fe),e(fe,dt),m(t,De,d),m(t,P,d),e(P,j),e(j,ue),g(M,ue,null),e(P,mt),e(P,ke),e(ke,ht),m(t,Ne,d),m(t,R,d),e(R,ft),e(R,D),e(D,ut),e(R,kt),m(t,Ce,d),m(t,se,d),e(se,_t),m(t,Se,d),m(t,ae,d),e(ae,_e),e(_e,gt),m(t,Ue,d),m(t,ne,d),e(ne,vt),m(t,Oe,d),g(N,t,d),m(t,Je,d),m(t,T,d),e(T,bt),e(T,C),e(C,wt),e(T,Tt),e(T,S),e(S,zt),e(T,Et),m(t,Ve,d),m(t,L,d),e(L,A),e(A,ge),g(U,ge,null),e(L,yt),e(L,ve),e(ve,$t),m(t,Xe,d),m(t,u,d),g(O,u,null),e(u,Ht),e(u,be),e(be,Pt),e(u,Lt),e(u,we),e(we,qt),e(u,Bt),e(u,J),e(J,Te),e(Te,ze),e(ze,jt),e(J,Rt),e(J,Ee),e(Ee,ye),e(ye,At),e(u,Ft),e(u,V),e(V,xt),e(V,oe),e(oe,It),e(V,Mt),m(t,Ke,d),m(t,q,d),e(q,F),e(F,$e),g(X,$e,null),e(q,Dt),e(q,He),e(He,Nt),m(t,We,d),m(t,h,d),g(K,h,null),e(h,Ct),e(h,W),e(W,St),e(W,Pe),e(Pe,Ut),e(W,Ot),e(h,Jt),e(h,Le),e(Le,Vt),e(h,Xt),e(h,qe),e(qe,Be),e(Be,Kt),e(h,Wt),e(h,G),e(G,Gt),e(G,ie),e(ie,Qt),e(G,Yt),e(h,Zt),e(h,z),g(Q,z,null),e(z,er),e(z,je),e(je,tr),e(z,rr),e(z,Y),e(Y,le),e(le,sr),e(le,Re),e(Re,ar),e(Y,nr),e(Y,ce),e(ce,or),e(ce,Ae),e(Ae,ir),e(h,lr),e(h,E),g(Z,E,null),e(E,cr),e(E,Fe),e(Fe,pr),e(E,dr),g(ee,E,null),e(h,mr),e(h,x),g(te,x,null),e(x,hr),e(x,re),e(re,fr),e(re,xe),e(xe,ur),e(re,kr),Ge=!0},p:is,i(t){Ge||(v(I.$$.fragment,t),v(M.$$.fragment,t),v(N.$$.fragment,t),v(U.$$.fragment,t),v(O.$$.fragment,t),v(X.$$.fragment,t),v(K.$$.fragment,t),v(Q.$$.fragment,t),v(Z.$$.fragment,t),v(ee.$$.fragment,t),v(te.$$.fragment,t),Ge=!0)},o(t){b(I.$$.fragment,t),b(M.$$.fragment,t),b(N.$$.fragment,t),b(U.$$.fragment,t),b(O.$$.fragment,t),b(X.$$.fragment,t),b(K.$$.fragment,t),b(Q.$$.fragment,t),b(Z.$$.fragment,t),b(ee.$$.fragment,t),b(te.$$.fragment,t),Ge=!1},d(t){r($),t&&r(Me),t&&r(H),w(I),t&&r(De),t&&r(P),w(M),t&&r(Ne),t&&r(R),t&&r(Ce),t&&r(se),t&&r(Se),t&&r(ae),t&&r(Ue),t&&r(ne),t&&r(Oe),w(N,t),t&&r(Je),t&&r(T),t&&r(Ve),t&&r(L),w(U),t&&r(Xe),t&&r(u),w(O),t&&r(Ke),t&&r(q),w(X),t&&r(We),t&&r(h),w(K),w(Q),w(Z),w(ee),w(te)}}}const ps={local:"herbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.HerbertTokenizer",title:"HerbertTokenizer"},{local:"transformers.HerbertTokenizerFast",title:"HerbertTokenizerFast"}],title:"HerBERT"};function ds(vr){return ls(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ks extends ss{constructor($){super();as(this,$,ds,cs,ns,{})}}export{ks as default,ps as metadata};
