import{S as Go,i as Qo,s as Yo,e as o,k as c,w as g,t as a,M as Zo,c as s,d as n,m as d,a as r,x as k,h as i,b as l,F as e,g as p,y as _,L as es,q as v,o as b,B as z}from"../../chunks/vendor-4833417e.js";import{D as X}from"../../chunks/Docstring-7b52c3d4.js";import{I as nt}from"../../chunks/IconCopyLink-4b81c553.js";function ts(Lt){let y,_e,T,w,Fe,J,Rt,Ie,Pt,ot,L,F,Se,K,Dt,Ce,Ft,st,I,It,j,St,Ct,rt,ve,Nt,at,be,Ne,Ot,it,E,Ut,G,Mt,Vt,Q,Wt,Ht,lt,R,S,Oe,Y,Xt,Ue,Jt,ct,ze,Z,Kt,ee,jt,Gt,dt,P,C,Me,te,Qt,Ve,Yt,ht,m,ne,Zt,q,en,Te,tn,nn,we,on,sn,oe,rn,an,ln,se,cn,qe,dn,hn,pn,$,re,mn,We,fn,un,ae,Be,gn,He,kn,_n,ye,vn,Xe,bn,zn,N,ie,Tn,Je,wn,qn,O,le,Bn,Ke,yn,En,U,ce,$n,de,An,je,xn,Ln,pt,D,M,Ge,he,Rn,Qe,Pn,mt,f,pe,Dn,B,Fn,Ee,In,Sn,$e,Cn,Nn,me,On,Un,Mn,fe,Vn,Ae,Wn,Hn,Xn,A,ue,Jn,Ye,Kn,jn,ge,xe,Gn,Ze,Qn,Yn,Le,Zn,et,eo,to,V,ke,no,tt,oo,ft;return J=new nt({}),K=new nt({}),Y=new nt({}),te=new nt({}),ne=new X({props:{name:"class transformers.BarthezTokenizer",anchor:"transformers.BarthezTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15907/src/transformers/models/barthez/tokenization_barthez.py#L49",parametersDescription:[{anchor:"transformers.BarthezTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BarthezTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BarthezTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BarthezTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BarthezTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BarthezTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BarthezTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BarthezTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BarthezTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.BarthezTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.BarthezTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}]}}),re=new X({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BarthezTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15907/src/transformers/models/barthez/tokenization_barthez.py#L163",parametersDescription:[{anchor:"transformers.BarthezTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ie=new X({props:{name:"convert_tokens_to_string",anchor:"transformers.BarthezTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15907/src/transformers/models/barthez/tokenization_barthez.py#L279"}}),le=new X({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BarthezTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15907/src/transformers/models/barthez/tokenization_barthez.py#L216",parametersDescription:[{anchor:"transformers.BarthezTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ce=new X({props:{name:"get_special_tokens_mask",anchor:"transformers.BarthezTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15907/src/transformers/models/barthez/tokenization_barthez.py#L189",parametersDescription:[{anchor:"transformers.BarthezTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BarthezTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),he=new nt({}),pe=new X({props:{name:"class transformers.BarthezTokenizerFast",anchor:"transformers.BarthezTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15907/src/transformers/models/barthez/tokenization_barthez_fast.py#L59",parametersDescription:[{anchor:"transformers.BarthezTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BarthezTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BarthezTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BarthezTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BarthezTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BarthezTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BarthezTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BarthezTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BarthezTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}]}}),ue=new X({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BarthezTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15907/src/transformers/models/barthez/tokenization_barthez_fast.py#L148",parametersDescription:[{anchor:"transformers.BarthezTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ke=new X({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BarthezTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15907/src/transformers/models/barthez/tokenization_barthez_fast.py#L174",parametersDescription:[{anchor:"transformers.BarthezTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){y=o("meta"),_e=c(),T=o("h1"),w=o("a"),Fe=o("span"),g(J.$$.fragment),Rt=c(),Ie=o("span"),Pt=a("BARThez"),ot=c(),L=o("h2"),F=o("a"),Se=o("span"),g(K.$$.fragment),Dt=c(),Ce=o("span"),Ft=a("Overview"),st=c(),I=o("p"),It=a("The BARThez model was proposed in "),j=o("a"),St=a("BARThez: a Skilled Pretrained French Sequence-to-Sequence Model"),Ct=a(` by Moussa Kamal Eddine, Antoine J.-P. Tixier, Michalis Vazirgiannis on 23 Oct,
2020.`),rt=c(),ve=o("p"),Nt=a("The abstract of the paper:"),at=c(),be=o("p"),Ne=o("em"),Ot=a(`Inductive transfer learning, enabled by self-supervised learning, have taken the entire Natural Language Processing
(NLP) field by storm, with models such as BERT and BART setting new state of the art on countless natural language
understanding tasks. While there are some notable exceptions, most of the available models and research have been
conducted for the English language. In this work, we introduce BARThez, the first BART model for the French language
(to the best of our knowledge). BARThez was pretrained on a very large monolingual French corpus from past research
that we adapted to suit BART\u2019s perturbation schemes. Unlike already existing BERT-based French language models such as
CamemBERT and FlauBERT, BARThez is particularly well-suited for generative tasks, since not only its encoder but also
its decoder is pretrained. In addition to discriminative tasks from the FLUE benchmark, we evaluate BARThez on a novel
summarization dataset, OrangeSum, that we release with this paper. We also continue the pretraining of an already
pretrained multilingual BART on BARThez\u2019s corpus, and we show that the resulting model, which we call mBARTHez,
provides a significant boost over vanilla BARThez, and is on par with or outperforms CamemBERT and FlauBERT.`),it=c(),E=o("p"),Ut=a("This model was contributed by "),G=o("a"),Mt=a("moussakam"),Vt=a(". The Authors\u2019 code can be found "),Q=o("a"),Wt=a("here"),Ht=a("."),lt=c(),R=o("h3"),S=o("a"),Oe=o("span"),g(Y.$$.fragment),Xt=c(),Ue=o("span"),Jt=a("Examples"),ct=c(),ze=o("ul"),Z=o("li"),Kt=a(`BARThez can be fine-tuned on sequence-to-sequence tasks in a similar way as BART, check:
`),ee=o("a"),jt=a("examples/pytorch/summarization/"),Gt=a("."),dt=c(),P=o("h2"),C=o("a"),Me=o("span"),g(te.$$.fragment),Qt=c(),Ve=o("span"),Yt=a("BarthezTokenizer"),ht=c(),m=o("div"),g(ne.$$.fragment),Zt=c(),q=o("p"),en=a("Adapted from "),Te=o("a"),tn=a("CamembertTokenizer"),nn=a(" and "),we=o("a"),on=a("BartTokenizer"),sn=a(`. Construct a BARThez tokenizer. Based on
`),oe=o("a"),rn=a("SentencePiece"),an=a("."),ln=c(),se=o("p"),cn=a("This tokenizer inherits from "),qe=o("a"),dn=a("PreTrainedTokenizer"),hn=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),pn=c(),$=o("div"),g(re.$$.fragment),mn=c(),We=o("p"),fn=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`),un=c(),ae=o("ul"),Be=o("li"),gn=a("single sequence: "),He=o("code"),kn=a("<s> X </s>"),_n=c(),ye=o("li"),vn=a("pair of sequences: "),Xe=o("code"),bn=a("<s> A </s></s> B </s>"),zn=c(),N=o("div"),g(ie.$$.fragment),Tn=c(),Je=o("p"),wn=a("Converts a sequence of tokens (strings for sub-words) in a single string."),qn=c(),O=o("div"),g(le.$$.fragment),Bn=c(),Ke=o("p"),yn=a("Create a mask from the two sequences passed to be used in a sequence-pair classification task."),En=c(),U=o("div"),g(ce.$$.fragment),$n=c(),de=o("p"),An=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),je=o("code"),xn=a("prepare_for_model"),Ln=a(" method."),pt=c(),D=o("h2"),M=o("a"),Ge=o("span"),g(he.$$.fragment),Rn=c(),Qe=o("span"),Pn=a("BarthezTokenizerFast"),mt=c(),f=o("div"),g(pe.$$.fragment),Dn=c(),B=o("p"),Fn=a("Adapted from "),Ee=o("a"),In=a("CamembertTokenizer"),Sn=a(" and "),$e=o("a"),Cn=a("BartTokenizer"),Nn=a(`. Construct a \u201Cfast\u201D BARThez tokenizer. Based on
`),me=o("a"),On=a("SentencePiece"),Un=a("."),Mn=c(),fe=o("p"),Vn=a("This tokenizer inherits from "),Ae=o("a"),Wn=a("PreTrainedTokenizerFast"),Hn=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Xn=c(),A=o("div"),g(ue.$$.fragment),Jn=c(),Ye=o("p"),Kn=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`),jn=c(),ge=o("ul"),xe=o("li"),Gn=a("single sequence: "),Ze=o("code"),Qn=a("<s> X </s>"),Yn=c(),Le=o("li"),Zn=a("pair of sequences: "),et=o("code"),eo=a("<s> A </s></s> B </s>"),to=c(),V=o("div"),g(ke.$$.fragment),no=c(),tt=o("p"),oo=a("Create a mask from the two sequences passed to be used in a sequence-pair classification task."),this.h()},l(t){const h=Zo('[data-svelte="svelte-1phssyn"]',document.head);y=s(h,"META",{name:!0,content:!0}),h.forEach(n),_e=d(t),T=s(t,"H1",{class:!0});var ut=r(T);w=s(ut,"A",{id:!0,class:!0,href:!0});var lo=r(w);Fe=s(lo,"SPAN",{});var co=r(Fe);k(J.$$.fragment,co),co.forEach(n),lo.forEach(n),Rt=d(ut),Ie=s(ut,"SPAN",{});var ho=r(Ie);Pt=i(ho,"BARThez"),ho.forEach(n),ut.forEach(n),ot=d(t),L=s(t,"H2",{class:!0});var gt=r(L);F=s(gt,"A",{id:!0,class:!0,href:!0});var po=r(F);Se=s(po,"SPAN",{});var mo=r(Se);k(K.$$.fragment,mo),mo.forEach(n),po.forEach(n),Dt=d(gt),Ce=s(gt,"SPAN",{});var fo=r(Ce);Ft=i(fo,"Overview"),fo.forEach(n),gt.forEach(n),st=d(t),I=s(t,"P",{});var kt=r(I);It=i(kt,"The BARThez model was proposed in "),j=s(kt,"A",{href:!0,rel:!0});var uo=r(j);St=i(uo,"BARThez: a Skilled Pretrained French Sequence-to-Sequence Model"),uo.forEach(n),Ct=i(kt,` by Moussa Kamal Eddine, Antoine J.-P. Tixier, Michalis Vazirgiannis on 23 Oct,
2020.`),kt.forEach(n),rt=d(t),ve=s(t,"P",{});var go=r(ve);Nt=i(go,"The abstract of the paper:"),go.forEach(n),at=d(t),be=s(t,"P",{});var ko=r(be);Ne=s(ko,"EM",{});var _o=r(Ne);Ot=i(_o,`Inductive transfer learning, enabled by self-supervised learning, have taken the entire Natural Language Processing
(NLP) field by storm, with models such as BERT and BART setting new state of the art on countless natural language
understanding tasks. While there are some notable exceptions, most of the available models and research have been
conducted for the English language. In this work, we introduce BARThez, the first BART model for the French language
(to the best of our knowledge). BARThez was pretrained on a very large monolingual French corpus from past research
that we adapted to suit BART\u2019s perturbation schemes. Unlike already existing BERT-based French language models such as
CamemBERT and FlauBERT, BARThez is particularly well-suited for generative tasks, since not only its encoder but also
its decoder is pretrained. In addition to discriminative tasks from the FLUE benchmark, we evaluate BARThez on a novel
summarization dataset, OrangeSum, that we release with this paper. We also continue the pretraining of an already
pretrained multilingual BART on BARThez\u2019s corpus, and we show that the resulting model, which we call mBARTHez,
provides a significant boost over vanilla BARThez, and is on par with or outperforms CamemBERT and FlauBERT.`),_o.forEach(n),ko.forEach(n),it=d(t),E=s(t,"P",{});var Re=r(E);Ut=i(Re,"This model was contributed by "),G=s(Re,"A",{href:!0,rel:!0});var vo=r(G);Mt=i(vo,"moussakam"),vo.forEach(n),Vt=i(Re,". The Authors\u2019 code can be found "),Q=s(Re,"A",{href:!0,rel:!0});var bo=r(Q);Wt=i(bo,"here"),bo.forEach(n),Ht=i(Re,"."),Re.forEach(n),lt=d(t),R=s(t,"H3",{class:!0});var _t=r(R);S=s(_t,"A",{id:!0,class:!0,href:!0});var zo=r(S);Oe=s(zo,"SPAN",{});var To=r(Oe);k(Y.$$.fragment,To),To.forEach(n),zo.forEach(n),Xt=d(_t),Ue=s(_t,"SPAN",{});var wo=r(Ue);Jt=i(wo,"Examples"),wo.forEach(n),_t.forEach(n),ct=d(t),ze=s(t,"UL",{});var qo=r(ze);Z=s(qo,"LI",{});var vt=r(Z);Kt=i(vt,`BARThez can be fine-tuned on sequence-to-sequence tasks in a similar way as BART, check:
`),ee=s(vt,"A",{href:!0,rel:!0});var Bo=r(ee);jt=i(Bo,"examples/pytorch/summarization/"),Bo.forEach(n),Gt=i(vt,"."),vt.forEach(n),qo.forEach(n),dt=d(t),P=s(t,"H2",{class:!0});var bt=r(P);C=s(bt,"A",{id:!0,class:!0,href:!0});var yo=r(C);Me=s(yo,"SPAN",{});var Eo=r(Me);k(te.$$.fragment,Eo),Eo.forEach(n),yo.forEach(n),Qt=d(bt),Ve=s(bt,"SPAN",{});var $o=r(Ve);Yt=i($o,"BarthezTokenizer"),$o.forEach(n),bt.forEach(n),ht=d(t),m=s(t,"DIV",{class:!0});var u=r(m);k(ne.$$.fragment,u),Zt=d(u),q=s(u,"P",{});var W=r(q);en=i(W,"Adapted from "),Te=s(W,"A",{href:!0});var Ao=r(Te);tn=i(Ao,"CamembertTokenizer"),Ao.forEach(n),nn=i(W," and "),we=s(W,"A",{href:!0});var xo=r(we);on=i(xo,"BartTokenizer"),xo.forEach(n),sn=i(W,`. Construct a BARThez tokenizer. Based on
`),oe=s(W,"A",{href:!0,rel:!0});var Lo=r(oe);rn=i(Lo,"SentencePiece"),Lo.forEach(n),an=i(W,"."),W.forEach(n),ln=d(u),se=s(u,"P",{});var zt=r(se);cn=i(zt,"This tokenizer inherits from "),qe=s(zt,"A",{href:!0});var Ro=r(qe);dn=i(Ro,"PreTrainedTokenizer"),Ro.forEach(n),hn=i(zt,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),zt.forEach(n),pn=d(u),$=s(u,"DIV",{class:!0});var Pe=r($);k(re.$$.fragment,Pe),mn=d(Pe),We=s(Pe,"P",{});var Po=r(We);fn=i(Po,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`),Po.forEach(n),un=d(Pe),ae=s(Pe,"UL",{});var Tt=r(ae);Be=s(Tt,"LI",{});var so=r(Be);gn=i(so,"single sequence: "),He=s(so,"CODE",{});var Do=r(He);kn=i(Do,"<s> X </s>"),Do.forEach(n),so.forEach(n),_n=d(Tt),ye=s(Tt,"LI",{});var ro=r(ye);vn=i(ro,"pair of sequences: "),Xe=s(ro,"CODE",{});var Fo=r(Xe);bn=i(Fo,"<s> A </s></s> B </s>"),Fo.forEach(n),ro.forEach(n),Tt.forEach(n),Pe.forEach(n),zn=d(u),N=s(u,"DIV",{class:!0});var wt=r(N);k(ie.$$.fragment,wt),Tn=d(wt),Je=s(wt,"P",{});var Io=r(Je);wn=i(Io,"Converts a sequence of tokens (strings for sub-words) in a single string."),Io.forEach(n),wt.forEach(n),qn=d(u),O=s(u,"DIV",{class:!0});var qt=r(O);k(le.$$.fragment,qt),Bn=d(qt),Ke=s(qt,"P",{});var So=r(Ke);yn=i(So,"Create a mask from the two sequences passed to be used in a sequence-pair classification task."),So.forEach(n),qt.forEach(n),En=d(u),U=s(u,"DIV",{class:!0});var Bt=r(U);k(ce.$$.fragment,Bt),$n=d(Bt),de=s(Bt,"P",{});var yt=r(de);An=i(yt,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),je=s(yt,"CODE",{});var Co=r(je);xn=i(Co,"prepare_for_model"),Co.forEach(n),Ln=i(yt," method."),yt.forEach(n),Bt.forEach(n),u.forEach(n),pt=d(t),D=s(t,"H2",{class:!0});var Et=r(D);M=s(Et,"A",{id:!0,class:!0,href:!0});var No=r(M);Ge=s(No,"SPAN",{});var Oo=r(Ge);k(he.$$.fragment,Oo),Oo.forEach(n),No.forEach(n),Rn=d(Et),Qe=s(Et,"SPAN",{});var Uo=r(Qe);Pn=i(Uo,"BarthezTokenizerFast"),Uo.forEach(n),Et.forEach(n),mt=d(t),f=s(t,"DIV",{class:!0});var x=r(f);k(pe.$$.fragment,x),Dn=d(x),B=s(x,"P",{});var H=r(B);Fn=i(H,"Adapted from "),Ee=s(H,"A",{href:!0});var Mo=r(Ee);In=i(Mo,"CamembertTokenizer"),Mo.forEach(n),Sn=i(H," and "),$e=s(H,"A",{href:!0});var Vo=r($e);Cn=i(Vo,"BartTokenizer"),Vo.forEach(n),Nn=i(H,`. Construct a \u201Cfast\u201D BARThez tokenizer. Based on
`),me=s(H,"A",{href:!0,rel:!0});var Wo=r(me);On=i(Wo,"SentencePiece"),Wo.forEach(n),Un=i(H,"."),H.forEach(n),Mn=d(x),fe=s(x,"P",{});var $t=r(fe);Vn=i($t,"This tokenizer inherits from "),Ae=s($t,"A",{href:!0});var Ho=r(Ae);Wn=i(Ho,"PreTrainedTokenizerFast"),Ho.forEach(n),Hn=i($t,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),$t.forEach(n),Xn=d(x),A=s(x,"DIV",{class:!0});var De=r(A);k(ue.$$.fragment,De),Jn=d(De),Ye=s(De,"P",{});var Xo=r(Ye);Kn=i(Xo,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`),Xo.forEach(n),jn=d(De),ge=s(De,"UL",{});var At=r(ge);xe=s(At,"LI",{});var ao=r(xe);Gn=i(ao,"single sequence: "),Ze=s(ao,"CODE",{});var Jo=r(Ze);Qn=i(Jo,"<s> X </s>"),Jo.forEach(n),ao.forEach(n),Yn=d(At),Le=s(At,"LI",{});var io=r(Le);Zn=i(io,"pair of sequences: "),et=s(io,"CODE",{});var Ko=r(et);eo=i(Ko,"<s> A </s></s> B </s>"),Ko.forEach(n),io.forEach(n),At.forEach(n),De.forEach(n),to=d(x),V=s(x,"DIV",{class:!0});var xt=r(V);k(ke.$$.fragment,xt),no=d(xt),tt=s(xt,"P",{});var jo=r(tt);oo=i(jo,"Create a mask from the two sequences passed to be used in a sequence-pair classification task."),jo.forEach(n),xt.forEach(n),x.forEach(n),this.h()},h(){l(y,"name","hf:doc:metadata"),l(y,"content",JSON.stringify(ns)),l(w,"id","barthez"),l(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(w,"href","#barthez"),l(T,"class","relative group"),l(F,"id","overview"),l(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(F,"href","#overview"),l(L,"class","relative group"),l(j,"href","https://arxiv.org/abs/2010.12321"),l(j,"rel","nofollow"),l(G,"href","https://huggingface.co/moussakam"),l(G,"rel","nofollow"),l(Q,"href","https://github.com/moussaKam/BARThez"),l(Q,"rel","nofollow"),l(S,"id","examples"),l(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(S,"href","#examples"),l(R,"class","relative group"),l(ee,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization/README.md"),l(ee,"rel","nofollow"),l(C,"id","transformers.BarthezTokenizer"),l(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(C,"href","#transformers.BarthezTokenizer"),l(P,"class","relative group"),l(Te,"href","/docs/transformers/pr_15907/en/model_doc/camembert#transformers.CamembertTokenizer"),l(we,"href","/docs/transformers/pr_15907/en/model_doc/bart#transformers.BartTokenizer"),l(oe,"href","https://github.com/google/sentencepiece"),l(oe,"rel","nofollow"),l(qe,"href","/docs/transformers/pr_15907/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l($,"class","docstring"),l(N,"class","docstring"),l(O,"class","docstring"),l(U,"class","docstring"),l(m,"class","docstring"),l(M,"id","transformers.BarthezTokenizerFast"),l(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(M,"href","#transformers.BarthezTokenizerFast"),l(D,"class","relative group"),l(Ee,"href","/docs/transformers/pr_15907/en/model_doc/camembert#transformers.CamembertTokenizer"),l($e,"href","/docs/transformers/pr_15907/en/model_doc/bart#transformers.BartTokenizer"),l(me,"href","https://github.com/google/sentencepiece"),l(me,"rel","nofollow"),l(Ae,"href","/docs/transformers/pr_15907/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(A,"class","docstring"),l(V,"class","docstring"),l(f,"class","docstring")},m(t,h){e(document.head,y),p(t,_e,h),p(t,T,h),e(T,w),e(w,Fe),_(J,Fe,null),e(T,Rt),e(T,Ie),e(Ie,Pt),p(t,ot,h),p(t,L,h),e(L,F),e(F,Se),_(K,Se,null),e(L,Dt),e(L,Ce),e(Ce,Ft),p(t,st,h),p(t,I,h),e(I,It),e(I,j),e(j,St),e(I,Ct),p(t,rt,h),p(t,ve,h),e(ve,Nt),p(t,at,h),p(t,be,h),e(be,Ne),e(Ne,Ot),p(t,it,h),p(t,E,h),e(E,Ut),e(E,G),e(G,Mt),e(E,Vt),e(E,Q),e(Q,Wt),e(E,Ht),p(t,lt,h),p(t,R,h),e(R,S),e(S,Oe),_(Y,Oe,null),e(R,Xt),e(R,Ue),e(Ue,Jt),p(t,ct,h),p(t,ze,h),e(ze,Z),e(Z,Kt),e(Z,ee),e(ee,jt),e(Z,Gt),p(t,dt,h),p(t,P,h),e(P,C),e(C,Me),_(te,Me,null),e(P,Qt),e(P,Ve),e(Ve,Yt),p(t,ht,h),p(t,m,h),_(ne,m,null),e(m,Zt),e(m,q),e(q,en),e(q,Te),e(Te,tn),e(q,nn),e(q,we),e(we,on),e(q,sn),e(q,oe),e(oe,rn),e(q,an),e(m,ln),e(m,se),e(se,cn),e(se,qe),e(qe,dn),e(se,hn),e(m,pn),e(m,$),_(re,$,null),e($,mn),e($,We),e(We,fn),e($,un),e($,ae),e(ae,Be),e(Be,gn),e(Be,He),e(He,kn),e(ae,_n),e(ae,ye),e(ye,vn),e(ye,Xe),e(Xe,bn),e(m,zn),e(m,N),_(ie,N,null),e(N,Tn),e(N,Je),e(Je,wn),e(m,qn),e(m,O),_(le,O,null),e(O,Bn),e(O,Ke),e(Ke,yn),e(m,En),e(m,U),_(ce,U,null),e(U,$n),e(U,de),e(de,An),e(de,je),e(je,xn),e(de,Ln),p(t,pt,h),p(t,D,h),e(D,M),e(M,Ge),_(he,Ge,null),e(D,Rn),e(D,Qe),e(Qe,Pn),p(t,mt,h),p(t,f,h),_(pe,f,null),e(f,Dn),e(f,B),e(B,Fn),e(B,Ee),e(Ee,In),e(B,Sn),e(B,$e),e($e,Cn),e(B,Nn),e(B,me),e(me,On),e(B,Un),e(f,Mn),e(f,fe),e(fe,Vn),e(fe,Ae),e(Ae,Wn),e(fe,Hn),e(f,Xn),e(f,A),_(ue,A,null),e(A,Jn),e(A,Ye),e(Ye,Kn),e(A,jn),e(A,ge),e(ge,xe),e(xe,Gn),e(xe,Ze),e(Ze,Qn),e(ge,Yn),e(ge,Le),e(Le,Zn),e(Le,et),e(et,eo),e(f,to),e(f,V),_(ke,V,null),e(V,no),e(V,tt),e(tt,oo),ft=!0},p:es,i(t){ft||(v(J.$$.fragment,t),v(K.$$.fragment,t),v(Y.$$.fragment,t),v(te.$$.fragment,t),v(ne.$$.fragment,t),v(re.$$.fragment,t),v(ie.$$.fragment,t),v(le.$$.fragment,t),v(ce.$$.fragment,t),v(he.$$.fragment,t),v(pe.$$.fragment,t),v(ue.$$.fragment,t),v(ke.$$.fragment,t),ft=!0)},o(t){b(J.$$.fragment,t),b(K.$$.fragment,t),b(Y.$$.fragment,t),b(te.$$.fragment,t),b(ne.$$.fragment,t),b(re.$$.fragment,t),b(ie.$$.fragment,t),b(le.$$.fragment,t),b(ce.$$.fragment,t),b(he.$$.fragment,t),b(pe.$$.fragment,t),b(ue.$$.fragment,t),b(ke.$$.fragment,t),ft=!1},d(t){n(y),t&&n(_e),t&&n(T),z(J),t&&n(ot),t&&n(L),z(K),t&&n(st),t&&n(I),t&&n(rt),t&&n(ve),t&&n(at),t&&n(be),t&&n(it),t&&n(E),t&&n(lt),t&&n(R),z(Y),t&&n(ct),t&&n(ze),t&&n(dt),t&&n(P),z(te),t&&n(ht),t&&n(m),z(ne),z(re),z(ie),z(le),z(ce),t&&n(pt),t&&n(D),z(he),t&&n(mt),t&&n(f),z(pe),z(ue),z(ke)}}}const ns={local:"barthez",sections:[{local:"overview",sections:[{local:"examples",title:"Examples"}],title:"Overview"},{local:"transformers.BarthezTokenizer",title:"BarthezTokenizer"},{local:"transformers.BarthezTokenizerFast",title:"BarthezTokenizerFast"}],title:"BARThez"};function os(Lt,y,_e){let{fw:T}=y;return Lt.$$set=w=>{"fw"in w&&_e(0,T=w.fw)},[T]}class is extends Go{constructor(y){super();Qo(this,y,os,ts,Yo,{fw:0})}}export{is as default,ns as metadata};
