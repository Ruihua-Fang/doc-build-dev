import{S as ss,i as as,s as ns,e as s,k as l,w as g,t as o,M as os,c as a,d as r,m as c,a as n,x as v,h as i,b as p,F as e,g as m,y as b,L as is,q as w,o as T,B as z}from"../../chunks/vendor-6b77c823.js";import{D as De}from"../../chunks/Docstring-abef54e3.js";import{C as rs}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ct}from"../../chunks/IconCopyLink-7a11ce68.js";function ls(pt){let E,se,k,_,fe,I,dt,ue,mt,Me,P,j,ke,D,ht,_e,ft,Ne,R,ut,M,kt,_t,Ce,ae,gt,Se,ne,ge,vt,Ue,oe,bt,Oe,N,Je,y,wt,C,Tt,zt,S,Et,yt,Ve,q,A,ve,U,$t,be,Ht,Xe,u,O,Lt,we,Pt,qt,Te,Bt,jt,J,ze,Ee,Rt,At,ye,$e,Ft,xt,V,It,ie,Dt,Mt,Ke,B,F,He,X,Nt,Le,Ct,We,h,K,St,W,Ut,Pe,Ot,Jt,Vt,qe,Xt,Kt,Be,je,Wt,Gt,G,Qt,le,Yt,Zt,er,$,Q,tr,Re,rr,sr,Y,ce,ar,Ae,nr,or,pe,ir,Fe,lr,cr,H,Z,pr,xe,dr,mr,ee,hr,x,te,fr,re,ur,Ie,kr,_r,Ge;return I=new ct({}),D=new ct({}),N=new rs({props:{code:`from transformers import HerbertTokenizer, RobertaModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModel.from_pretrained(<span class="hljs-string">&quot;allegro/herbert-klej-cased-v1&quot;</span>)`}}),U=new ct({}),O=new De({props:{name:"class transformers.HerbertTokenizer",anchor:"transformers.HerbertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"tokenizer_file",val:" = None"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sep_token",val:" = '</s>'"},{name:"do_lowercase_and_remove_accent",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16305/src/transformers/models/herbert/tokenization_herbert.py#L41"}}),X=new ct({}),K=new De({props:{name:"class transformers.HerbertTokenizerFast",anchor:"transformers.HerbertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sep_token",val:" = '</s>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16305/src/transformers/models/herbert/tokenization_herbert_fast.py#L40",parametersDescription:[{anchor:"transformers.HerbertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.HerbertTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"}]}}),Q=new De({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.HerbertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16305/src/transformers/models/herbert/tokenization_herbert_fast.py#L90",parametersDescription:[{anchor:"transformers.HerbertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.HerbertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Z=new De({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.HerbertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16305/src/transformers/models/herbert/tokenization_herbert_fast.py#L144",parametersDescription:[{anchor:"transformers.HerbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.HerbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ee=new rs({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),te=new De({props:{name:"get_special_tokens_mask",anchor:"transformers.HerbertTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16305/src/transformers/models/herbert/tokenization_herbert_fast.py#L117",parametersDescription:[{anchor:"transformers.HerbertTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.HerbertTokenizerFast.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.HerbertTokenizerFast.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){E=s("meta"),se=l(),k=s("h1"),_=s("a"),fe=s("span"),g(I.$$.fragment),dt=l(),ue=s("span"),mt=o("HerBERT"),Me=l(),P=s("h2"),j=s("a"),ke=s("span"),g(D.$$.fragment),ht=l(),_e=s("span"),ft=o("Overview"),Ne=l(),R=s("p"),ut=o("The HerBERT model was proposed in "),M=s("a"),kt=o("KLEJ: Comprehensive Benchmark for Polish Language Understanding"),_t=o(` by Piotr Rybak, Robert Mroczkowski, Janusz Tracz, and
Ireneusz Gawlik. It is a BERT-based Language Model trained on Polish Corpora using only MLM objective with dynamic
masking of whole words.`),Ce=l(),ae=s("p"),gt=o("The abstract from the paper is the following:"),Se=l(),ne=s("p"),ge=s("em"),vt=o(`In recent years, a series of Transformer-based models unlocked major improvements in general natural language
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
models.`),Ue=l(),oe=s("p"),bt=o("Examples of use:"),Oe=l(),g(N.$$.fragment),Je=l(),y=s("p"),wt=o("This model was contributed by "),C=s("a"),Tt=o("rmroczkowski"),zt=o(`. The original code can be found
`),S=s("a"),Et=o("here"),yt=o("."),Ve=l(),q=s("h2"),A=s("a"),ve=s("span"),g(U.$$.fragment),$t=l(),be=s("span"),Ht=o("HerbertTokenizer"),Xe=l(),u=s("div"),g(O.$$.fragment),Lt=l(),we=s("p"),Pt=o("Construct a BPE tokenizer for HerBERT."),qt=l(),Te=s("p"),Bt=o("Peculiarities:"),jt=l(),J=s("ul"),ze=s("li"),Ee=s("p"),Rt=o(`uses BERT\u2019s pre-tokenizer: BaseTokenizer splits tokens on spaces, and also on punctuation. Each occurrence of a
punctuation character will be treated separately.`),At=l(),ye=s("li"),$e=s("p"),Ft=o("Such pretokenized input is BPE subtokenized"),xt=l(),V=s("p"),It=o("This tokenizer inherits from "),ie=s("a"),Dt=o("XLMTokenizer"),Mt=o(` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),Ke=l(),B=s("h2"),F=s("a"),He=s("span"),g(X.$$.fragment),Nt=l(),Le=s("span"),Ct=o("HerbertTokenizerFast"),We=l(),h=s("div"),g(K.$$.fragment),St=l(),W=s("p"),Ut=o("Construct a \u201CFast\u201D BPE tokenizer for HerBERT (backed by HuggingFace\u2019s "),Pe=s("em"),Ot=o("tokenizers"),Jt=o(" library)."),Vt=l(),qe=s("p"),Xt=o("Peculiarities:"),Kt=l(),Be=s("ul"),je=s("li"),Wt=o(`uses BERT\u2019s pre-tokenizer: BertPreTokenizer splits tokens on spaces, and also on punctuation. Each occurrence of
a punctuation character will be treated separately.`),Gt=l(),G=s("p"),Qt=o("This tokenizer inherits from "),le=s("a"),Yt=o("PreTrainedTokenizer"),Zt=o(` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),er=l(),$=s("div"),g(Q.$$.fragment),tr=l(),Re=s("p"),rr=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An HerBERT, like BERT sequence has the following format:`),sr=l(),Y=s("ul"),ce=s("li"),ar=o("single sequence: "),Ae=s("code"),nr=o("<s> X </s>"),or=l(),pe=s("li"),ir=o("pair of sequences: "),Fe=s("code"),lr=o("<s> A </s> B </s>"),cr=l(),H=s("div"),g(Z.$$.fragment),pr=l(),xe=s("p"),dr=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. HerBERT, like
BERT sequence pair mask has the following format:`),mr=l(),g(ee.$$.fragment),hr=l(),x=s("div"),g(te.$$.fragment),fr=l(),re=s("p"),ur=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ie=s("code"),kr=o("prepare_for_model"),_r=o(" method."),this.h()},l(t){const d=os('[data-svelte="svelte-1phssyn"]',document.head);E=a(d,"META",{name:!0,content:!0}),d.forEach(r),se=c(t),k=a(t,"H1",{class:!0});var Qe=n(k);_=a(Qe,"A",{id:!0,class:!0,href:!0});var br=n(_);fe=a(br,"SPAN",{});var wr=n(fe);v(I.$$.fragment,wr),wr.forEach(r),br.forEach(r),dt=c(Qe),ue=a(Qe,"SPAN",{});var Tr=n(ue);mt=i(Tr,"HerBERT"),Tr.forEach(r),Qe.forEach(r),Me=c(t),P=a(t,"H2",{class:!0});var Ye=n(P);j=a(Ye,"A",{id:!0,class:!0,href:!0});var zr=n(j);ke=a(zr,"SPAN",{});var Er=n(ke);v(D.$$.fragment,Er),Er.forEach(r),zr.forEach(r),ht=c(Ye),_e=a(Ye,"SPAN",{});var yr=n(_e);ft=i(yr,"Overview"),yr.forEach(r),Ye.forEach(r),Ne=c(t),R=a(t,"P",{});var Ze=n(R);ut=i(Ze,"The HerBERT model was proposed in "),M=a(Ze,"A",{href:!0,rel:!0});var $r=n(M);kt=i($r,"KLEJ: Comprehensive Benchmark for Polish Language Understanding"),$r.forEach(r),_t=i(Ze,` by Piotr Rybak, Robert Mroczkowski, Janusz Tracz, and
Ireneusz Gawlik. It is a BERT-based Language Model trained on Polish Corpora using only MLM objective with dynamic
masking of whole words.`),Ze.forEach(r),Ce=c(t),ae=a(t,"P",{});var Hr=n(ae);gt=i(Hr,"The abstract from the paper is the following:"),Hr.forEach(r),Se=c(t),ne=a(t,"P",{});var Lr=n(ne);ge=a(Lr,"EM",{});var Pr=n(ge);vt=i(Pr,`In recent years, a series of Transformer-based models unlocked major improvements in general natural language
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
models.`),Pr.forEach(r),Lr.forEach(r),Ue=c(t),oe=a(t,"P",{});var qr=n(oe);bt=i(qr,"Examples of use:"),qr.forEach(r),Oe=c(t),v(N.$$.fragment,t),Je=c(t),y=a(t,"P",{});var de=n(y);wt=i(de,"This model was contributed by "),C=a(de,"A",{href:!0,rel:!0});var Br=n(C);Tt=i(Br,"rmroczkowski"),Br.forEach(r),zt=i(de,`. The original code can be found
`),S=a(de,"A",{href:!0,rel:!0});var jr=n(S);Et=i(jr,"here"),jr.forEach(r),yt=i(de,"."),de.forEach(r),Ve=c(t),q=a(t,"H2",{class:!0});var et=n(q);A=a(et,"A",{id:!0,class:!0,href:!0});var Rr=n(A);ve=a(Rr,"SPAN",{});var Ar=n(ve);v(U.$$.fragment,Ar),Ar.forEach(r),Rr.forEach(r),$t=c(et),be=a(et,"SPAN",{});var Fr=n(be);Ht=i(Fr,"HerbertTokenizer"),Fr.forEach(r),et.forEach(r),Xe=c(t),u=a(t,"DIV",{class:!0});var L=n(u);v(O.$$.fragment,L),Lt=c(L),we=a(L,"P",{});var xr=n(we);Pt=i(xr,"Construct a BPE tokenizer for HerBERT."),xr.forEach(r),qt=c(L),Te=a(L,"P",{});var Ir=n(Te);Bt=i(Ir,"Peculiarities:"),Ir.forEach(r),jt=c(L),J=a(L,"UL",{});var tt=n(J);ze=a(tt,"LI",{});var Dr=n(ze);Ee=a(Dr,"P",{});var Mr=n(Ee);Rt=i(Mr,`uses BERT\u2019s pre-tokenizer: BaseTokenizer splits tokens on spaces, and also on punctuation. Each occurrence of a
punctuation character will be treated separately.`),Mr.forEach(r),Dr.forEach(r),At=c(tt),ye=a(tt,"LI",{});var Nr=n(ye);$e=a(Nr,"P",{});var Cr=n($e);Ft=i(Cr,"Such pretokenized input is BPE subtokenized"),Cr.forEach(r),Nr.forEach(r),tt.forEach(r),xt=c(L),V=a(L,"P",{});var rt=n(V);It=i(rt,"This tokenizer inherits from "),ie=a(rt,"A",{href:!0});var Sr=n(ie);Dt=i(Sr,"XLMTokenizer"),Sr.forEach(r),Mt=i(rt,` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),rt.forEach(r),L.forEach(r),Ke=c(t),B=a(t,"H2",{class:!0});var st=n(B);F=a(st,"A",{id:!0,class:!0,href:!0});var Ur=n(F);He=a(Ur,"SPAN",{});var Or=n(He);v(X.$$.fragment,Or),Or.forEach(r),Ur.forEach(r),Nt=c(st),Le=a(st,"SPAN",{});var Jr=n(Le);Ct=i(Jr,"HerbertTokenizerFast"),Jr.forEach(r),st.forEach(r),We=c(t),h=a(t,"DIV",{class:!0});var f=n(h);v(K.$$.fragment,f),St=c(f),W=a(f,"P",{});var at=n(W);Ut=i(at,"Construct a \u201CFast\u201D BPE tokenizer for HerBERT (backed by HuggingFace\u2019s "),Pe=a(at,"EM",{});var Vr=n(Pe);Ot=i(Vr,"tokenizers"),Vr.forEach(r),Jt=i(at," library)."),at.forEach(r),Vt=c(f),qe=a(f,"P",{});var Xr=n(qe);Xt=i(Xr,"Peculiarities:"),Xr.forEach(r),Kt=c(f),Be=a(f,"UL",{});var Kr=n(Be);je=a(Kr,"LI",{});var Wr=n(je);Wt=i(Wr,`uses BERT\u2019s pre-tokenizer: BertPreTokenizer splits tokens on spaces, and also on punctuation. Each occurrence of
a punctuation character will be treated separately.`),Wr.forEach(r),Kr.forEach(r),Gt=c(f),G=a(f,"P",{});var nt=n(G);Qt=i(nt,"This tokenizer inherits from "),le=a(nt,"A",{href:!0});var Gr=n(le);Yt=i(Gr,"PreTrainedTokenizer"),Gr.forEach(r),Zt=i(nt,` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),nt.forEach(r),er=c(f),$=a(f,"DIV",{class:!0});var me=n($);v(Q.$$.fragment,me),tr=c(me),Re=a(me,"P",{});var Qr=n(Re);rr=i(Qr,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An HerBERT, like BERT sequence has the following format:`),Qr.forEach(r),sr=c(me),Y=a(me,"UL",{});var ot=n(Y);ce=a(ot,"LI",{});var gr=n(ce);ar=i(gr,"single sequence: "),Ae=a(gr,"CODE",{});var Yr=n(Ae);nr=i(Yr,"<s> X </s>"),Yr.forEach(r),gr.forEach(r),or=c(ot),pe=a(ot,"LI",{});var vr=n(pe);ir=i(vr,"pair of sequences: "),Fe=a(vr,"CODE",{});var Zr=n(Fe);lr=i(Zr,"<s> A </s> B </s>"),Zr.forEach(r),vr.forEach(r),ot.forEach(r),me.forEach(r),cr=c(f),H=a(f,"DIV",{class:!0});var he=n(H);v(Z.$$.fragment,he),pr=c(he),xe=a(he,"P",{});var es=n(xe);dr=i(es,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. HerBERT, like
BERT sequence pair mask has the following format:`),es.forEach(r),mr=c(he),v(ee.$$.fragment,he),he.forEach(r),hr=c(f),x=a(f,"DIV",{class:!0});var it=n(x);v(te.$$.fragment,it),fr=c(it),re=a(it,"P",{});var lt=n(re);ur=i(lt,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ie=a(lt,"CODE",{});var ts=n(Ie);kr=i(ts,"prepare_for_model"),ts.forEach(r),_r=i(lt," method."),lt.forEach(r),it.forEach(r),f.forEach(r),this.h()},h(){p(E,"name","hf:doc:metadata"),p(E,"content",JSON.stringify(cs)),p(_,"id","herbert"),p(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(_,"href","#herbert"),p(k,"class","relative group"),p(j,"id","overview"),p(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(j,"href","#overview"),p(P,"class","relative group"),p(M,"href","https://www.aclweb.org/anthology/2020.acl-main.111.pdf"),p(M,"rel","nofollow"),p(C,"href","https://huggingface.co/rmroczkowski"),p(C,"rel","nofollow"),p(S,"href","https://github.com/allegro/HerBERT"),p(S,"rel","nofollow"),p(A,"id","transformers.HerbertTokenizer"),p(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(A,"href","#transformers.HerbertTokenizer"),p(q,"class","relative group"),p(ie,"href","/docs/transformers/pr_16305/en/model_doc/xlm#transformers.XLMTokenizer"),p(u,"class","docstring"),p(F,"id","transformers.HerbertTokenizerFast"),p(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(F,"href","#transformers.HerbertTokenizerFast"),p(B,"class","relative group"),p(le,"href","/docs/transformers/pr_16305/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p($,"class","docstring"),p(H,"class","docstring"),p(x,"class","docstring"),p(h,"class","docstring")},m(t,d){e(document.head,E),m(t,se,d),m(t,k,d),e(k,_),e(_,fe),b(I,fe,null),e(k,dt),e(k,ue),e(ue,mt),m(t,Me,d),m(t,P,d),e(P,j),e(j,ke),b(D,ke,null),e(P,ht),e(P,_e),e(_e,ft),m(t,Ne,d),m(t,R,d),e(R,ut),e(R,M),e(M,kt),e(R,_t),m(t,Ce,d),m(t,ae,d),e(ae,gt),m(t,Se,d),m(t,ne,d),e(ne,ge),e(ge,vt),m(t,Ue,d),m(t,oe,d),e(oe,bt),m(t,Oe,d),b(N,t,d),m(t,Je,d),m(t,y,d),e(y,wt),e(y,C),e(C,Tt),e(y,zt),e(y,S),e(S,Et),e(y,yt),m(t,Ve,d),m(t,q,d),e(q,A),e(A,ve),b(U,ve,null),e(q,$t),e(q,be),e(be,Ht),m(t,Xe,d),m(t,u,d),b(O,u,null),e(u,Lt),e(u,we),e(we,Pt),e(u,qt),e(u,Te),e(Te,Bt),e(u,jt),e(u,J),e(J,ze),e(ze,Ee),e(Ee,Rt),e(J,At),e(J,ye),e(ye,$e),e($e,Ft),e(u,xt),e(u,V),e(V,It),e(V,ie),e(ie,Dt),e(V,Mt),m(t,Ke,d),m(t,B,d),e(B,F),e(F,He),b(X,He,null),e(B,Nt),e(B,Le),e(Le,Ct),m(t,We,d),m(t,h,d),b(K,h,null),e(h,St),e(h,W),e(W,Ut),e(W,Pe),e(Pe,Ot),e(W,Jt),e(h,Vt),e(h,qe),e(qe,Xt),e(h,Kt),e(h,Be),e(Be,je),e(je,Wt),e(h,Gt),e(h,G),e(G,Qt),e(G,le),e(le,Yt),e(G,Zt),e(h,er),e(h,$),b(Q,$,null),e($,tr),e($,Re),e(Re,rr),e($,sr),e($,Y),e(Y,ce),e(ce,ar),e(ce,Ae),e(Ae,nr),e(Y,or),e(Y,pe),e(pe,ir),e(pe,Fe),e(Fe,lr),e(h,cr),e(h,H),b(Z,H,null),e(H,pr),e(H,xe),e(xe,dr),e(H,mr),b(ee,H,null),e(h,hr),e(h,x),b(te,x,null),e(x,fr),e(x,re),e(re,ur),e(re,Ie),e(Ie,kr),e(re,_r),Ge=!0},p:is,i(t){Ge||(w(I.$$.fragment,t),w(D.$$.fragment,t),w(N.$$.fragment,t),w(U.$$.fragment,t),w(O.$$.fragment,t),w(X.$$.fragment,t),w(K.$$.fragment,t),w(Q.$$.fragment,t),w(Z.$$.fragment,t),w(ee.$$.fragment,t),w(te.$$.fragment,t),Ge=!0)},o(t){T(I.$$.fragment,t),T(D.$$.fragment,t),T(N.$$.fragment,t),T(U.$$.fragment,t),T(O.$$.fragment,t),T(X.$$.fragment,t),T(K.$$.fragment,t),T(Q.$$.fragment,t),T(Z.$$.fragment,t),T(ee.$$.fragment,t),T(te.$$.fragment,t),Ge=!1},d(t){r(E),t&&r(se),t&&r(k),z(I),t&&r(Me),t&&r(P),z(D),t&&r(Ne),t&&r(R),t&&r(Ce),t&&r(ae),t&&r(Se),t&&r(ne),t&&r(Ue),t&&r(oe),t&&r(Oe),z(N,t),t&&r(Je),t&&r(y),t&&r(Ve),t&&r(q),z(U),t&&r(Xe),t&&r(u),z(O),t&&r(Ke),t&&r(B),z(X),t&&r(We),t&&r(h),z(K),z(Q),z(Z),z(ee),z(te)}}}const cs={local:"herbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.HerbertTokenizer",title:"HerbertTokenizer"},{local:"transformers.HerbertTokenizerFast",title:"HerbertTokenizerFast"}],title:"HerBERT"};function ps(pt,E,se){let{fw:k}=E;return pt.$$set=_=>{"fw"in _&&se(0,k=_.fw)},[k]}class us extends ss{constructor(E){super();as(this,E,ps,ls,ns,{fw:0})}}export{us as default,cs as metadata};
