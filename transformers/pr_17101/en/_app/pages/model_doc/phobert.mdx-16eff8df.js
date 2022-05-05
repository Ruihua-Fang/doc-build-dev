import{S as po,i as ho,s as mo,e as n,k as l,w as _,t as a,M as fo,c as s,d as o,m as d,a as r,x as k,h as i,b as c,F as t,g as m,y as b,L as uo,q as v,o as T,B as w,v as go}from"../../chunks/vendor-6b77c823.js";import{D as re}from"../../chunks/Docstring-1088f2fb.js";import{C as _o}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as It}from"../../chunks/IconCopyLink-7a11ce68.js";function ko(Mt){let y,Te,P,q,ae,j,Fe,ie,We,we,E,z,le,N,Ue,de,Xe,ye,x,He,I,Ge,Qe,Pe,J,Ye,Ee,K,ce,Je,$e,Z,Ke,qe,M,ze,u,Ze,C,et,tt,O,ot,nt,xe,$,L,pe,S,st,he,rt,Le,h,V,at,me,it,lt,F,dt,ee,ct,pt,ht,A,W,mt,fe,ft,ut,g,U,gt,ue,_t,kt,X,te,bt,ge,vt,Tt,oe,wt,_e,yt,Pt,D,H,Et,ke,$t,qt,B,G,zt,be,xt,Lt,R,Q,At,Y,Dt,ve,Bt,Rt,Ae;return j=new It({}),N=new It({}),M=new _o({props:{code:`import torch
from transformers import AutoModel, AutoTokenizer

phobert = AutoModel.from_pretrained("vinai/phobert-base")
tokenizer = AutoTokenizer.from_pretrained("vinai/phobert-base")

# INPUT TEXT MUST BE ALREADY WORD-SEGMENTED!
line = "T\xF4i l\xE0 sinh_vi\xEAn tr\u01B0\u1EDDng \u0111\u1EA1i_h\u1ECDc C\xF4ng_ngh\u1EC7 ."

input_ids = torch.tensor([tokenizer.encode(line)])

with torch.no_grad():
    features = phobert(input_ids)  # Models outputs are now tuples

# With TensorFlow 2.0+:
# from transformers import TFAutoModel
# phobert = TFAutoModel.from_pretrained("vinai/phobert-base")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>phobert = AutoModel.from_pretrained(<span class="hljs-string">&quot;vinai/phobert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;vinai/phobert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># INPUT TEXT MUST BE ALREADY WORD-SEGMENTED!</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>line = <span class="hljs-string">&quot;T\xF4i l\xE0 sinh_vi\xEAn tr\u01B0\u1EDDng \u0111\u1EA1i_h\u1ECDc C\xF4ng_ngh\u1EC7 .&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([tokenizer.encode(line)])

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    features = phobert(input_ids)  <span class="hljs-comment"># Models outputs are now tuples</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># With TensorFlow 2.0+:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># from transformers import TFAutoModel</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># phobert = TFAutoModel.from_pretrained(&quot;vinai/phobert-base&quot;)</span>`}}),S=new It({}),V=new re({props:{name:"class transformers.PhobertTokenizer",anchor:"transformers.PhobertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PhobertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.PhobertTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.PhobertTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>st</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.PhobertTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.PhobertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.PhobertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.PhobertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.PhobertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.PhobertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/phobert/tokenization_phobert.py#L68"}}),W=new re({props:{name:"add_from_file",anchor:"transformers.PhobertTokenizer.add_from_file",parameters:[{name:"f",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/phobert/tokenization_phobert.py#L341"}}),U=new re({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PhobertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.PhobertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.PhobertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/phobert/tokenization_phobert.py#L164",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),H=new re({props:{name:"convert_tokens_to_string",anchor:"transformers.PhobertTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/phobert/tokenization_phobert.py#L311"}}),G=new re({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.PhobertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.PhobertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.PhobertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/phobert/tokenization_phobert.py#L218",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Q=new re({props:{name:"get_special_tokens_mask",anchor:"transformers.PhobertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.PhobertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.PhobertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.PhobertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/phobert/tokenization_phobert.py#L190",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){y=n("meta"),Te=l(),P=n("h1"),q=n("a"),ae=n("span"),_(j.$$.fragment),Fe=l(),ie=n("span"),We=a("PhoBERT"),we=l(),E=n("h2"),z=n("a"),le=n("span"),_(N.$$.fragment),Ue=l(),de=n("span"),Xe=a("Overview"),ye=l(),x=n("p"),He=a("The PhoBERT model was proposed in "),I=n("a"),Ge=a("PhoBERT: Pre-trained language models for Vietnamese"),Qe=a(" by Dat Quoc Nguyen, Anh Tuan Nguyen."),Pe=l(),J=n("p"),Ye=a("The abstract from the paper is the following:"),Ee=l(),K=n("p"),ce=n("em"),Je=a(`We present PhoBERT with two versions, PhoBERT-base and PhoBERT-large, the first public large-scale monolingual
language models pre-trained for Vietnamese. Experimental results show that PhoBERT consistently outperforms the recent
best pre-trained multilingual model XLM-R (Conneau et al., 2020) and improves the state-of-the-art in multiple
Vietnamese-specific NLP tasks including Part-of-speech tagging, Dependency parsing, Named-entity recognition and
Natural language inference.`),$e=l(),Z=n("p"),Ke=a("Example of use:"),qe=l(),_(M.$$.fragment),ze=l(),u=n("p"),Ze=a("This model was contributed by "),C=n("a"),et=a("dqnguyen"),tt=a(". The original code can be found "),O=n("a"),ot=a("here"),nt=a("."),xe=l(),$=n("h2"),L=n("a"),pe=n("span"),_(S.$$.fragment),st=l(),he=n("span"),rt=a("PhobertTokenizer"),Le=l(),h=n("div"),_(V.$$.fragment),at=l(),me=n("p"),it=a("Construct a PhoBERT tokenizer. Based on Byte-Pair-Encoding."),lt=l(),F=n("p"),dt=a("This tokenizer inherits from "),ee=n("a"),ct=a("PreTrainedTokenizer"),pt=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ht=l(),A=n("div"),_(W.$$.fragment),mt=l(),fe=n("p"),ft=a("Loads a pre-existing dictionary from a text file and adds its symbols to this instance."),ut=l(),g=n("div"),_(U.$$.fragment),gt=l(),ue=n("p"),_t=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A PhoBERT sequence has the following format:`),kt=l(),X=n("ul"),te=n("li"),bt=a("single sequence: "),ge=n("code"),vt=a("<s> X </s>"),Tt=l(),oe=n("li"),wt=a("pair of sequences: "),_e=n("code"),yt=a("<s> A </s></s> B </s>"),Pt=l(),D=n("div"),_(H.$$.fragment),Et=l(),ke=n("p"),$t=a("Converts a sequence of tokens (string) in a single string."),qt=l(),B=n("div"),_(G.$$.fragment),zt=l(),be=n("p"),xt=a(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. PhoBERT does not
make use of token type ids, therefore a list of zeros is returned.`),Lt=l(),R=n("div"),_(Q.$$.fragment),At=l(),Y=n("p"),Dt=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ve=n("code"),Bt=a("prepare_for_model"),Rt=a(" method."),this.h()},l(e){const p=fo('[data-svelte="svelte-1phssyn"]',document.head);y=s(p,"META",{name:!0,content:!0}),p.forEach(o),Te=d(e),P=s(e,"H1",{class:!0});var De=r(P);q=s(De,"A",{id:!0,class:!0,href:!0});var Ct=r(q);ae=s(Ct,"SPAN",{});var Ot=r(ae);k(j.$$.fragment,Ot),Ot.forEach(o),Ct.forEach(o),Fe=d(De),ie=s(De,"SPAN",{});var St=r(ie);We=i(St,"PhoBERT"),St.forEach(o),De.forEach(o),we=d(e),E=s(e,"H2",{class:!0});var Be=r(E);z=s(Be,"A",{id:!0,class:!0,href:!0});var Vt=r(z);le=s(Vt,"SPAN",{});var Ft=r(le);k(N.$$.fragment,Ft),Ft.forEach(o),Vt.forEach(o),Ue=d(Be),de=s(Be,"SPAN",{});var Wt=r(de);Xe=i(Wt,"Overview"),Wt.forEach(o),Be.forEach(o),ye=d(e),x=s(e,"P",{});var Re=r(x);He=i(Re,"The PhoBERT model was proposed in "),I=s(Re,"A",{href:!0,rel:!0});var Ut=r(I);Ge=i(Ut,"PhoBERT: Pre-trained language models for Vietnamese"),Ut.forEach(o),Qe=i(Re," by Dat Quoc Nguyen, Anh Tuan Nguyen."),Re.forEach(o),Pe=d(e),J=s(e,"P",{});var Xt=r(J);Ye=i(Xt,"The abstract from the paper is the following:"),Xt.forEach(o),Ee=d(e),K=s(e,"P",{});var Ht=r(K);ce=s(Ht,"EM",{});var Gt=r(ce);Je=i(Gt,`We present PhoBERT with two versions, PhoBERT-base and PhoBERT-large, the first public large-scale monolingual
language models pre-trained for Vietnamese. Experimental results show that PhoBERT consistently outperforms the recent
best pre-trained multilingual model XLM-R (Conneau et al., 2020) and improves the state-of-the-art in multiple
Vietnamese-specific NLP tasks including Part-of-speech tagging, Dependency parsing, Named-entity recognition and
Natural language inference.`),Gt.forEach(o),Ht.forEach(o),$e=d(e),Z=s(e,"P",{});var Qt=r(Z);Ke=i(Qt,"Example of use:"),Qt.forEach(o),qe=d(e),k(M.$$.fragment,e),ze=d(e),u=s(e,"P",{});var ne=r(u);Ze=i(ne,"This model was contributed by "),C=s(ne,"A",{href:!0,rel:!0});var Yt=r(C);et=i(Yt,"dqnguyen"),Yt.forEach(o),tt=i(ne,". The original code can be found "),O=s(ne,"A",{href:!0,rel:!0});var Jt=r(O);ot=i(Jt,"here"),Jt.forEach(o),nt=i(ne,"."),ne.forEach(o),xe=d(e),$=s(e,"H2",{class:!0});var je=r($);L=s(je,"A",{id:!0,class:!0,href:!0});var Kt=r(L);pe=s(Kt,"SPAN",{});var Zt=r(pe);k(S.$$.fragment,Zt),Zt.forEach(o),Kt.forEach(o),st=d(je),he=s(je,"SPAN",{});var eo=r(he);rt=i(eo,"PhobertTokenizer"),eo.forEach(o),je.forEach(o),Le=d(e),h=s(e,"DIV",{class:!0});var f=r(h);k(V.$$.fragment,f),at=d(f),me=s(f,"P",{});var to=r(me);it=i(to,"Construct a PhoBERT tokenizer. Based on Byte-Pair-Encoding."),to.forEach(o),lt=d(f),F=s(f,"P",{});var Ne=r(F);dt=i(Ne,"This tokenizer inherits from "),ee=s(Ne,"A",{href:!0});var oo=r(ee);ct=i(oo,"PreTrainedTokenizer"),oo.forEach(o),pt=i(Ne,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ne.forEach(o),ht=d(f),A=s(f,"DIV",{class:!0});var Ie=r(A);k(W.$$.fragment,Ie),mt=d(Ie),fe=s(Ie,"P",{});var no=r(fe);ft=i(no,"Loads a pre-existing dictionary from a text file and adds its symbols to this instance."),no.forEach(o),Ie.forEach(o),ut=d(f),g=s(f,"DIV",{class:!0});var se=r(g);k(U.$$.fragment,se),gt=d(se),ue=s(se,"P",{});var so=r(ue);_t=i(so,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A PhoBERT sequence has the following format:`),so.forEach(o),kt=d(se),X=s(se,"UL",{});var Me=r(X);te=s(Me,"LI",{});var jt=r(te);bt=i(jt,"single sequence: "),ge=s(jt,"CODE",{});var ro=r(ge);vt=i(ro,"<s> X </s>"),ro.forEach(o),jt.forEach(o),Tt=d(Me),oe=s(Me,"LI",{});var Nt=r(oe);wt=i(Nt,"pair of sequences: "),_e=s(Nt,"CODE",{});var ao=r(_e);yt=i(ao,"<s> A </s></s> B </s>"),ao.forEach(o),Nt.forEach(o),Me.forEach(o),se.forEach(o),Pt=d(f),D=s(f,"DIV",{class:!0});var Ce=r(D);k(H.$$.fragment,Ce),Et=d(Ce),ke=s(Ce,"P",{});var io=r(ke);$t=i(io,"Converts a sequence of tokens (string) in a single string."),io.forEach(o),Ce.forEach(o),qt=d(f),B=s(f,"DIV",{class:!0});var Oe=r(B);k(G.$$.fragment,Oe),zt=d(Oe),be=s(Oe,"P",{});var lo=r(be);xt=i(lo,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. PhoBERT does not
make use of token type ids, therefore a list of zeros is returned.`),lo.forEach(o),Oe.forEach(o),Lt=d(f),R=s(f,"DIV",{class:!0});var Se=r(R);k(Q.$$.fragment,Se),At=d(Se),Y=s(Se,"P",{});var Ve=r(Y);Dt=i(Ve,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ve=s(Ve,"CODE",{});var co=r(ve);Bt=i(co,"prepare_for_model"),co.forEach(o),Rt=i(Ve," method."),Ve.forEach(o),Se.forEach(o),f.forEach(o),this.h()},h(){c(y,"name","hf:doc:metadata"),c(y,"content",JSON.stringify(bo)),c(q,"id","phobert"),c(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(q,"href","#phobert"),c(P,"class","relative group"),c(z,"id","overview"),c(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(z,"href","#overview"),c(E,"class","relative group"),c(I,"href","https://www.aclweb.org/anthology/2020.findings-emnlp.92.pdf"),c(I,"rel","nofollow"),c(C,"href","https://huggingface.co/dqnguyen"),c(C,"rel","nofollow"),c(O,"href","https://github.com/VinAIResearch/PhoBERT"),c(O,"rel","nofollow"),c(L,"id","transformers.PhobertTokenizer"),c(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(L,"href","#transformers.PhobertTokenizer"),c($,"class","relative group"),c(ee,"href","/docs/transformers/pr_17101/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(g,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,p){t(document.head,y),m(e,Te,p),m(e,P,p),t(P,q),t(q,ae),b(j,ae,null),t(P,Fe),t(P,ie),t(ie,We),m(e,we,p),m(e,E,p),t(E,z),t(z,le),b(N,le,null),t(E,Ue),t(E,de),t(de,Xe),m(e,ye,p),m(e,x,p),t(x,He),t(x,I),t(I,Ge),t(x,Qe),m(e,Pe,p),m(e,J,p),t(J,Ye),m(e,Ee,p),m(e,K,p),t(K,ce),t(ce,Je),m(e,$e,p),m(e,Z,p),t(Z,Ke),m(e,qe,p),b(M,e,p),m(e,ze,p),m(e,u,p),t(u,Ze),t(u,C),t(C,et),t(u,tt),t(u,O),t(O,ot),t(u,nt),m(e,xe,p),m(e,$,p),t($,L),t(L,pe),b(S,pe,null),t($,st),t($,he),t(he,rt),m(e,Le,p),m(e,h,p),b(V,h,null),t(h,at),t(h,me),t(me,it),t(h,lt),t(h,F),t(F,dt),t(F,ee),t(ee,ct),t(F,pt),t(h,ht),t(h,A),b(W,A,null),t(A,mt),t(A,fe),t(fe,ft),t(h,ut),t(h,g),b(U,g,null),t(g,gt),t(g,ue),t(ue,_t),t(g,kt),t(g,X),t(X,te),t(te,bt),t(te,ge),t(ge,vt),t(X,Tt),t(X,oe),t(oe,wt),t(oe,_e),t(_e,yt),t(h,Pt),t(h,D),b(H,D,null),t(D,Et),t(D,ke),t(ke,$t),t(h,qt),t(h,B),b(G,B,null),t(B,zt),t(B,be),t(be,xt),t(h,Lt),t(h,R),b(Q,R,null),t(R,At),t(R,Y),t(Y,Dt),t(Y,ve),t(ve,Bt),t(Y,Rt),Ae=!0},p:uo,i(e){Ae||(v(j.$$.fragment,e),v(N.$$.fragment,e),v(M.$$.fragment,e),v(S.$$.fragment,e),v(V.$$.fragment,e),v(W.$$.fragment,e),v(U.$$.fragment,e),v(H.$$.fragment,e),v(G.$$.fragment,e),v(Q.$$.fragment,e),Ae=!0)},o(e){T(j.$$.fragment,e),T(N.$$.fragment,e),T(M.$$.fragment,e),T(S.$$.fragment,e),T(V.$$.fragment,e),T(W.$$.fragment,e),T(U.$$.fragment,e),T(H.$$.fragment,e),T(G.$$.fragment,e),T(Q.$$.fragment,e),Ae=!1},d(e){o(y),e&&o(Te),e&&o(P),w(j),e&&o(we),e&&o(E),w(N),e&&o(ye),e&&o(x),e&&o(Pe),e&&o(J),e&&o(Ee),e&&o(K),e&&o($e),e&&o(Z),e&&o(qe),w(M,e),e&&o(ze),e&&o(u),e&&o(xe),e&&o($),w(S),e&&o(Le),e&&o(h),w(V),w(W),w(U),w(H),w(G),w(Q)}}}const bo={local:"phobert",sections:[{local:"overview",title:"Overview"},{local:"transformers.PhobertTokenizer",title:"PhobertTokenizer"}],title:"PhoBERT"};function vo(Mt){return go(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Eo extends po{constructor(y){super();ho(this,y,vo,ko,mo,{})}}export{Eo as default,bo as metadata};
