import{S as Go,i as Qo,s as Yo,e as o,k as c,w as g,t as a,M as Zo,c as s,d as n,m as d,a as r,x as k,h as i,b as l,F as e,g as p,y as _,L as es,q as v,o as b,B as z,v as ts}from"../../chunks/vendor-6b77c823.js";import{D as X}from"../../chunks/Docstring-90e3aa51.js";import{I as tt}from"../../chunks/IconCopyLink-7a11ce68.js";function ns(io){let $,nt,A,D,De,J,Lt,Fe,Rt,ot,x,F,Ie,K,Pt,Se,Dt,st,I,Ft,j,It,St,rt,_e,Ct,at,ve,Ce,Nt,it,q,Ot,G,Ut,Mt,Q,Vt,Wt,lt,L,S,Ne,Y,Ht,Oe,Xt,ct,be,Z,Jt,ee,Kt,jt,dt,R,C,Ue,te,Gt,Me,Qt,ht,m,ne,Yt,T,Zt,ze,en,tn,Te,nn,on,oe,sn,rn,an,se,ln,we,cn,dn,hn,B,re,pn,Ve,mn,fn,ae,qe,un,We,gn,kn,Be,_n,He,vn,bn,N,ie,zn,Xe,Tn,wn,O,le,qn,Je,Bn,yn,U,ce,En,de,$n,Ke,An,xn,pt,P,M,je,he,Ln,Ge,Rn,mt,f,pe,Pn,w,Dn,ye,Fn,In,Ee,Sn,Cn,me,Nn,On,Un,fe,Mn,$e,Vn,Wn,Hn,y,ue,Xn,Qe,Jn,Kn,ge,Ae,jn,Ye,Gn,Qn,xe,Yn,Ze,Zn,eo,V,ke,to,et,no,ft;return J=new tt({}),K=new tt({}),Y=new tt({}),te=new tt({}),ne=new X({props:{name:"class transformers.BarthezTokenizer",anchor:"transformers.BarthezTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BarthezTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/barthez/tokenization_barthez.py#L49"}}),re=new X({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BarthezTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BarthezTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/barthez/tokenization_barthez.py#L163",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ie=new X({props:{name:"convert_tokens_to_string",anchor:"transformers.BarthezTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/barthez/tokenization_barthez.py#L279"}}),le=new X({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BarthezTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BarthezTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/barthez/tokenization_barthez.py#L216",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ce=new X({props:{name:"get_special_tokens_mask",anchor:"transformers.BarthezTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BarthezTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BarthezTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/barthez/tokenization_barthez.py#L189",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),he=new tt({}),pe=new X({props:{name:"class transformers.BarthezTokenizerFast",anchor:"transformers.BarthezTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BarthezTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/barthez/tokenization_barthez_fast.py#L58"}}),ue=new X({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BarthezTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BarthezTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/barthez/tokenization_barthez_fast.py#L147",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ke=new X({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BarthezTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BarthezTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/barthez/tokenization_barthez_fast.py#L173",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){$=o("meta"),nt=c(),A=o("h1"),D=o("a"),De=o("span"),g(J.$$.fragment),Lt=c(),Fe=o("span"),Rt=a("BARThez"),ot=c(),x=o("h2"),F=o("a"),Ie=o("span"),g(K.$$.fragment),Pt=c(),Se=o("span"),Dt=a("Overview"),st=c(),I=o("p"),Ft=a("The BARThez model was proposed in "),j=o("a"),It=a("BARThez: a Skilled Pretrained French Sequence-to-Sequence Model"),St=a(` by Moussa Kamal Eddine, Antoine J.-P. Tixier, Michalis Vazirgiannis on 23 Oct,
2020.`),rt=c(),_e=o("p"),Ct=a("The abstract of the paper:"),at=c(),ve=o("p"),Ce=o("em"),Nt=a(`Inductive transfer learning, enabled by self-supervised learning, have taken the entire Natural Language Processing
(NLP) field by storm, with models such as BERT and BART setting new state of the art on countless natural language
understanding tasks. While there are some notable exceptions, most of the available models and research have been
conducted for the English language. In this work, we introduce BARThez, the first BART model for the French language
(to the best of our knowledge). BARThez was pretrained on a very large monolingual French corpus from past research
that we adapted to suit BART\u2019s perturbation schemes. Unlike already existing BERT-based French language models such as
CamemBERT and FlauBERT, BARThez is particularly well-suited for generative tasks, since not only its encoder but also
its decoder is pretrained. In addition to discriminative tasks from the FLUE benchmark, we evaluate BARThez on a novel
summarization dataset, OrangeSum, that we release with this paper. We also continue the pretraining of an already
pretrained multilingual BART on BARThez\u2019s corpus, and we show that the resulting model, which we call mBARTHez,
provides a significant boost over vanilla BARThez, and is on par with or outperforms CamemBERT and FlauBERT.`),it=c(),q=o("p"),Ot=a("This model was contributed by "),G=o("a"),Ut=a("moussakam"),Mt=a(". The Authors\u2019 code can be found "),Q=o("a"),Vt=a("here"),Wt=a("."),lt=c(),L=o("h3"),S=o("a"),Ne=o("span"),g(Y.$$.fragment),Ht=c(),Oe=o("span"),Xt=a("Examples"),ct=c(),be=o("ul"),Z=o("li"),Jt=a(`BARThez can be fine-tuned on sequence-to-sequence tasks in a similar way as BART, check:
`),ee=o("a"),Kt=a("examples/pytorch/summarization/"),jt=a("."),dt=c(),R=o("h2"),C=o("a"),Ue=o("span"),g(te.$$.fragment),Gt=c(),Me=o("span"),Qt=a("BarthezTokenizer"),ht=c(),m=o("div"),g(ne.$$.fragment),Yt=c(),T=o("p"),Zt=a("Adapted from "),ze=o("a"),en=a("CamembertTokenizer"),tn=a(" and "),Te=o("a"),nn=a("BartTokenizer"),on=a(`. Construct a BARThez tokenizer. Based on
`),oe=o("a"),sn=a("SentencePiece"),rn=a("."),an=c(),se=o("p"),ln=a("This tokenizer inherits from "),we=o("a"),cn=a("PreTrainedTokenizer"),dn=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),hn=c(),B=o("div"),g(re.$$.fragment),pn=c(),Ve=o("p"),mn=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`),fn=c(),ae=o("ul"),qe=o("li"),un=a("single sequence: "),We=o("code"),gn=a("<s> X </s>"),kn=c(),Be=o("li"),_n=a("pair of sequences: "),He=o("code"),vn=a("<s> A </s></s> B </s>"),bn=c(),N=o("div"),g(ie.$$.fragment),zn=c(),Xe=o("p"),Tn=a("Converts a sequence of tokens (strings for sub-words) in a single string."),wn=c(),O=o("div"),g(le.$$.fragment),qn=c(),Je=o("p"),Bn=a("Create a mask from the two sequences passed to be used in a sequence-pair classification task."),yn=c(),U=o("div"),g(ce.$$.fragment),En=c(),de=o("p"),$n=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ke=o("code"),An=a("prepare_for_model"),xn=a(" method."),pt=c(),P=o("h2"),M=o("a"),je=o("span"),g(he.$$.fragment),Ln=c(),Ge=o("span"),Rn=a("BarthezTokenizerFast"),mt=c(),f=o("div"),g(pe.$$.fragment),Pn=c(),w=o("p"),Dn=a("Adapted from "),ye=o("a"),Fn=a("CamembertTokenizer"),In=a(" and "),Ee=o("a"),Sn=a("BartTokenizer"),Cn=a(`. Construct a \u201Cfast\u201D BARThez tokenizer. Based on
`),me=o("a"),Nn=a("SentencePiece"),On=a("."),Un=c(),fe=o("p"),Mn=a("This tokenizer inherits from "),$e=o("a"),Vn=a("PreTrainedTokenizerFast"),Wn=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Hn=c(),y=o("div"),g(ue.$$.fragment),Xn=c(),Qe=o("p"),Jn=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`),Kn=c(),ge=o("ul"),Ae=o("li"),jn=a("single sequence: "),Ye=o("code"),Gn=a("<s> X </s>"),Qn=c(),xe=o("li"),Yn=a("pair of sequences: "),Ze=o("code"),Zn=a("<s> A </s></s> B </s>"),eo=c(),V=o("div"),g(ke.$$.fragment),to=c(),et=o("p"),no=a("Create a mask from the two sequences passed to be used in a sequence-pair classification task."),this.h()},l(t){const h=Zo('[data-svelte="svelte-1phssyn"]',document.head);$=s(h,"META",{name:!0,content:!0}),h.forEach(n),nt=d(t),A=s(t,"H1",{class:!0});var ut=r(A);D=s(ut,"A",{id:!0,class:!0,href:!0});var lo=r(D);De=s(lo,"SPAN",{});var co=r(De);k(J.$$.fragment,co),co.forEach(n),lo.forEach(n),Lt=d(ut),Fe=s(ut,"SPAN",{});var ho=r(Fe);Rt=i(ho,"BARThez"),ho.forEach(n),ut.forEach(n),ot=d(t),x=s(t,"H2",{class:!0});var gt=r(x);F=s(gt,"A",{id:!0,class:!0,href:!0});var po=r(F);Ie=s(po,"SPAN",{});var mo=r(Ie);k(K.$$.fragment,mo),mo.forEach(n),po.forEach(n),Pt=d(gt),Se=s(gt,"SPAN",{});var fo=r(Se);Dt=i(fo,"Overview"),fo.forEach(n),gt.forEach(n),st=d(t),I=s(t,"P",{});var kt=r(I);Ft=i(kt,"The BARThez model was proposed in "),j=s(kt,"A",{href:!0,rel:!0});var uo=r(j);It=i(uo,"BARThez: a Skilled Pretrained French Sequence-to-Sequence Model"),uo.forEach(n),St=i(kt,` by Moussa Kamal Eddine, Antoine J.-P. Tixier, Michalis Vazirgiannis on 23 Oct,
2020.`),kt.forEach(n),rt=d(t),_e=s(t,"P",{});var go=r(_e);Ct=i(go,"The abstract of the paper:"),go.forEach(n),at=d(t),ve=s(t,"P",{});var ko=r(ve);Ce=s(ko,"EM",{});var _o=r(Ce);Nt=i(_o,`Inductive transfer learning, enabled by self-supervised learning, have taken the entire Natural Language Processing
(NLP) field by storm, with models such as BERT and BART setting new state of the art on countless natural language
understanding tasks. While there are some notable exceptions, most of the available models and research have been
conducted for the English language. In this work, we introduce BARThez, the first BART model for the French language
(to the best of our knowledge). BARThez was pretrained on a very large monolingual French corpus from past research
that we adapted to suit BART\u2019s perturbation schemes. Unlike already existing BERT-based French language models such as
CamemBERT and FlauBERT, BARThez is particularly well-suited for generative tasks, since not only its encoder but also
its decoder is pretrained. In addition to discriminative tasks from the FLUE benchmark, we evaluate BARThez on a novel
summarization dataset, OrangeSum, that we release with this paper. We also continue the pretraining of an already
pretrained multilingual BART on BARThez\u2019s corpus, and we show that the resulting model, which we call mBARTHez,
provides a significant boost over vanilla BARThez, and is on par with or outperforms CamemBERT and FlauBERT.`),_o.forEach(n),ko.forEach(n),it=d(t),q=s(t,"P",{});var Le=r(q);Ot=i(Le,"This model was contributed by "),G=s(Le,"A",{href:!0,rel:!0});var vo=r(G);Ut=i(vo,"moussakam"),vo.forEach(n),Mt=i(Le,". The Authors\u2019 code can be found "),Q=s(Le,"A",{href:!0,rel:!0});var bo=r(Q);Vt=i(bo,"here"),bo.forEach(n),Wt=i(Le,"."),Le.forEach(n),lt=d(t),L=s(t,"H3",{class:!0});var _t=r(L);S=s(_t,"A",{id:!0,class:!0,href:!0});var zo=r(S);Ne=s(zo,"SPAN",{});var To=r(Ne);k(Y.$$.fragment,To),To.forEach(n),zo.forEach(n),Ht=d(_t),Oe=s(_t,"SPAN",{});var wo=r(Oe);Xt=i(wo,"Examples"),wo.forEach(n),_t.forEach(n),ct=d(t),be=s(t,"UL",{});var qo=r(be);Z=s(qo,"LI",{});var vt=r(Z);Jt=i(vt,`BARThez can be fine-tuned on sequence-to-sequence tasks in a similar way as BART, check:
`),ee=s(vt,"A",{href:!0,rel:!0});var Bo=r(ee);Kt=i(Bo,"examples/pytorch/summarization/"),Bo.forEach(n),jt=i(vt,"."),vt.forEach(n),qo.forEach(n),dt=d(t),R=s(t,"H2",{class:!0});var bt=r(R);C=s(bt,"A",{id:!0,class:!0,href:!0});var yo=r(C);Ue=s(yo,"SPAN",{});var Eo=r(Ue);k(te.$$.fragment,Eo),Eo.forEach(n),yo.forEach(n),Gt=d(bt),Me=s(bt,"SPAN",{});var $o=r(Me);Qt=i($o,"BarthezTokenizer"),$o.forEach(n),bt.forEach(n),ht=d(t),m=s(t,"DIV",{class:!0});var u=r(m);k(ne.$$.fragment,u),Yt=d(u),T=s(u,"P",{});var W=r(T);Zt=i(W,"Adapted from "),ze=s(W,"A",{href:!0});var Ao=r(ze);en=i(Ao,"CamembertTokenizer"),Ao.forEach(n),tn=i(W," and "),Te=s(W,"A",{href:!0});var xo=r(Te);nn=i(xo,"BartTokenizer"),xo.forEach(n),on=i(W,`. Construct a BARThez tokenizer. Based on
`),oe=s(W,"A",{href:!0,rel:!0});var Lo=r(oe);sn=i(Lo,"SentencePiece"),Lo.forEach(n),rn=i(W,"."),W.forEach(n),an=d(u),se=s(u,"P",{});var zt=r(se);ln=i(zt,"This tokenizer inherits from "),we=s(zt,"A",{href:!0});var Ro=r(we);cn=i(Ro,"PreTrainedTokenizer"),Ro.forEach(n),dn=i(zt,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),zt.forEach(n),hn=d(u),B=s(u,"DIV",{class:!0});var Re=r(B);k(re.$$.fragment,Re),pn=d(Re),Ve=s(Re,"P",{});var Po=r(Ve);mn=i(Po,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`),Po.forEach(n),fn=d(Re),ae=s(Re,"UL",{});var Tt=r(ae);qe=s(Tt,"LI",{});var oo=r(qe);un=i(oo,"single sequence: "),We=s(oo,"CODE",{});var Do=r(We);gn=i(Do,"<s> X </s>"),Do.forEach(n),oo.forEach(n),kn=d(Tt),Be=s(Tt,"LI",{});var so=r(Be);_n=i(so,"pair of sequences: "),He=s(so,"CODE",{});var Fo=r(He);vn=i(Fo,"<s> A </s></s> B </s>"),Fo.forEach(n),so.forEach(n),Tt.forEach(n),Re.forEach(n),bn=d(u),N=s(u,"DIV",{class:!0});var wt=r(N);k(ie.$$.fragment,wt),zn=d(wt),Xe=s(wt,"P",{});var Io=r(Xe);Tn=i(Io,"Converts a sequence of tokens (strings for sub-words) in a single string."),Io.forEach(n),wt.forEach(n),wn=d(u),O=s(u,"DIV",{class:!0});var qt=r(O);k(le.$$.fragment,qt),qn=d(qt),Je=s(qt,"P",{});var So=r(Je);Bn=i(So,"Create a mask from the two sequences passed to be used in a sequence-pair classification task."),So.forEach(n),qt.forEach(n),yn=d(u),U=s(u,"DIV",{class:!0});var Bt=r(U);k(ce.$$.fragment,Bt),En=d(Bt),de=s(Bt,"P",{});var yt=r(de);$n=i(yt,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ke=s(yt,"CODE",{});var Co=r(Ke);An=i(Co,"prepare_for_model"),Co.forEach(n),xn=i(yt," method."),yt.forEach(n),Bt.forEach(n),u.forEach(n),pt=d(t),P=s(t,"H2",{class:!0});var Et=r(P);M=s(Et,"A",{id:!0,class:!0,href:!0});var No=r(M);je=s(No,"SPAN",{});var Oo=r(je);k(he.$$.fragment,Oo),Oo.forEach(n),No.forEach(n),Ln=d(Et),Ge=s(Et,"SPAN",{});var Uo=r(Ge);Rn=i(Uo,"BarthezTokenizerFast"),Uo.forEach(n),Et.forEach(n),mt=d(t),f=s(t,"DIV",{class:!0});var E=r(f);k(pe.$$.fragment,E),Pn=d(E),w=s(E,"P",{});var H=r(w);Dn=i(H,"Adapted from "),ye=s(H,"A",{href:!0});var Mo=r(ye);Fn=i(Mo,"CamembertTokenizer"),Mo.forEach(n),In=i(H," and "),Ee=s(H,"A",{href:!0});var Vo=r(Ee);Sn=i(Vo,"BartTokenizer"),Vo.forEach(n),Cn=i(H,`. Construct a \u201Cfast\u201D BARThez tokenizer. Based on
`),me=s(H,"A",{href:!0,rel:!0});var Wo=r(me);Nn=i(Wo,"SentencePiece"),Wo.forEach(n),On=i(H,"."),H.forEach(n),Un=d(E),fe=s(E,"P",{});var $t=r(fe);Mn=i($t,"This tokenizer inherits from "),$e=s($t,"A",{href:!0});var Ho=r($e);Vn=i(Ho,"PreTrainedTokenizerFast"),Ho.forEach(n),Wn=i($t,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),$t.forEach(n),Hn=d(E),y=s(E,"DIV",{class:!0});var Pe=r(y);k(ue.$$.fragment,Pe),Xn=d(Pe),Qe=s(Pe,"P",{});var Xo=r(Qe);Jn=i(Xo,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`),Xo.forEach(n),Kn=d(Pe),ge=s(Pe,"UL",{});var At=r(ge);Ae=s(At,"LI",{});var ro=r(Ae);jn=i(ro,"single sequence: "),Ye=s(ro,"CODE",{});var Jo=r(Ye);Gn=i(Jo,"<s> X </s>"),Jo.forEach(n),ro.forEach(n),Qn=d(At),xe=s(At,"LI",{});var ao=r(xe);Yn=i(ao,"pair of sequences: "),Ze=s(ao,"CODE",{});var Ko=r(Ze);Zn=i(Ko,"<s> A </s></s> B </s>"),Ko.forEach(n),ao.forEach(n),At.forEach(n),Pe.forEach(n),eo=d(E),V=s(E,"DIV",{class:!0});var xt=r(V);k(ke.$$.fragment,xt),to=d(xt),et=s(xt,"P",{});var jo=r(et);no=i(jo,"Create a mask from the two sequences passed to be used in a sequence-pair classification task."),jo.forEach(n),xt.forEach(n),E.forEach(n),this.h()},h(){l($,"name","hf:doc:metadata"),l($,"content",JSON.stringify(os)),l(D,"id","barthez"),l(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(D,"href","#barthez"),l(A,"class","relative group"),l(F,"id","overview"),l(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(F,"href","#overview"),l(x,"class","relative group"),l(j,"href","https://arxiv.org/abs/2010.12321"),l(j,"rel","nofollow"),l(G,"href","https://huggingface.co/moussakam"),l(G,"rel","nofollow"),l(Q,"href","https://github.com/moussaKam/BARThez"),l(Q,"rel","nofollow"),l(S,"id","examples"),l(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(S,"href","#examples"),l(L,"class","relative group"),l(ee,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization/README.md"),l(ee,"rel","nofollow"),l(C,"id","transformers.BarthezTokenizer"),l(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(C,"href","#transformers.BarthezTokenizer"),l(R,"class","relative group"),l(ze,"href","/docs/transformers/pr_16782/en/model_doc/camembert#transformers.CamembertTokenizer"),l(Te,"href","/docs/transformers/pr_16782/en/model_doc/bart#transformers.BartTokenizer"),l(oe,"href","https://github.com/google/sentencepiece"),l(oe,"rel","nofollow"),l(we,"href","/docs/transformers/pr_16782/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(B,"class","docstring"),l(N,"class","docstring"),l(O,"class","docstring"),l(U,"class","docstring"),l(m,"class","docstring"),l(M,"id","transformers.BarthezTokenizerFast"),l(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(M,"href","#transformers.BarthezTokenizerFast"),l(P,"class","relative group"),l(ye,"href","/docs/transformers/pr_16782/en/model_doc/camembert#transformers.CamembertTokenizer"),l(Ee,"href","/docs/transformers/pr_16782/en/model_doc/bart#transformers.BartTokenizer"),l(me,"href","https://github.com/google/sentencepiece"),l(me,"rel","nofollow"),l($e,"href","/docs/transformers/pr_16782/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(y,"class","docstring"),l(V,"class","docstring"),l(f,"class","docstring")},m(t,h){e(document.head,$),p(t,nt,h),p(t,A,h),e(A,D),e(D,De),_(J,De,null),e(A,Lt),e(A,Fe),e(Fe,Rt),p(t,ot,h),p(t,x,h),e(x,F),e(F,Ie),_(K,Ie,null),e(x,Pt),e(x,Se),e(Se,Dt),p(t,st,h),p(t,I,h),e(I,Ft),e(I,j),e(j,It),e(I,St),p(t,rt,h),p(t,_e,h),e(_e,Ct),p(t,at,h),p(t,ve,h),e(ve,Ce),e(Ce,Nt),p(t,it,h),p(t,q,h),e(q,Ot),e(q,G),e(G,Ut),e(q,Mt),e(q,Q),e(Q,Vt),e(q,Wt),p(t,lt,h),p(t,L,h),e(L,S),e(S,Ne),_(Y,Ne,null),e(L,Ht),e(L,Oe),e(Oe,Xt),p(t,ct,h),p(t,be,h),e(be,Z),e(Z,Jt),e(Z,ee),e(ee,Kt),e(Z,jt),p(t,dt,h),p(t,R,h),e(R,C),e(C,Ue),_(te,Ue,null),e(R,Gt),e(R,Me),e(Me,Qt),p(t,ht,h),p(t,m,h),_(ne,m,null),e(m,Yt),e(m,T),e(T,Zt),e(T,ze),e(ze,en),e(T,tn),e(T,Te),e(Te,nn),e(T,on),e(T,oe),e(oe,sn),e(T,rn),e(m,an),e(m,se),e(se,ln),e(se,we),e(we,cn),e(se,dn),e(m,hn),e(m,B),_(re,B,null),e(B,pn),e(B,Ve),e(Ve,mn),e(B,fn),e(B,ae),e(ae,qe),e(qe,un),e(qe,We),e(We,gn),e(ae,kn),e(ae,Be),e(Be,_n),e(Be,He),e(He,vn),e(m,bn),e(m,N),_(ie,N,null),e(N,zn),e(N,Xe),e(Xe,Tn),e(m,wn),e(m,O),_(le,O,null),e(O,qn),e(O,Je),e(Je,Bn),e(m,yn),e(m,U),_(ce,U,null),e(U,En),e(U,de),e(de,$n),e(de,Ke),e(Ke,An),e(de,xn),p(t,pt,h),p(t,P,h),e(P,M),e(M,je),_(he,je,null),e(P,Ln),e(P,Ge),e(Ge,Rn),p(t,mt,h),p(t,f,h),_(pe,f,null),e(f,Pn),e(f,w),e(w,Dn),e(w,ye),e(ye,Fn),e(w,In),e(w,Ee),e(Ee,Sn),e(w,Cn),e(w,me),e(me,Nn),e(w,On),e(f,Un),e(f,fe),e(fe,Mn),e(fe,$e),e($e,Vn),e(fe,Wn),e(f,Hn),e(f,y),_(ue,y,null),e(y,Xn),e(y,Qe),e(Qe,Jn),e(y,Kn),e(y,ge),e(ge,Ae),e(Ae,jn),e(Ae,Ye),e(Ye,Gn),e(ge,Qn),e(ge,xe),e(xe,Yn),e(xe,Ze),e(Ze,Zn),e(f,eo),e(f,V),_(ke,V,null),e(V,to),e(V,et),e(et,no),ft=!0},p:es,i(t){ft||(v(J.$$.fragment,t),v(K.$$.fragment,t),v(Y.$$.fragment,t),v(te.$$.fragment,t),v(ne.$$.fragment,t),v(re.$$.fragment,t),v(ie.$$.fragment,t),v(le.$$.fragment,t),v(ce.$$.fragment,t),v(he.$$.fragment,t),v(pe.$$.fragment,t),v(ue.$$.fragment,t),v(ke.$$.fragment,t),ft=!0)},o(t){b(J.$$.fragment,t),b(K.$$.fragment,t),b(Y.$$.fragment,t),b(te.$$.fragment,t),b(ne.$$.fragment,t),b(re.$$.fragment,t),b(ie.$$.fragment,t),b(le.$$.fragment,t),b(ce.$$.fragment,t),b(he.$$.fragment,t),b(pe.$$.fragment,t),b(ue.$$.fragment,t),b(ke.$$.fragment,t),ft=!1},d(t){n($),t&&n(nt),t&&n(A),z(J),t&&n(ot),t&&n(x),z(K),t&&n(st),t&&n(I),t&&n(rt),t&&n(_e),t&&n(at),t&&n(ve),t&&n(it),t&&n(q),t&&n(lt),t&&n(L),z(Y),t&&n(ct),t&&n(be),t&&n(dt),t&&n(R),z(te),t&&n(ht),t&&n(m),z(ne),z(re),z(ie),z(le),z(ce),t&&n(pt),t&&n(P),z(he),t&&n(mt),t&&n(f),z(pe),z(ue),z(ke)}}}const os={local:"barthez",sections:[{local:"overview",sections:[{local:"examples",title:"Examples"}],title:"Overview"},{local:"transformers.BarthezTokenizer",title:"BarthezTokenizer"},{local:"transformers.BarthezTokenizerFast",title:"BarthezTokenizerFast"}],title:"BARThez"};function ss(io){return ts(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ls extends Go{constructor($){super();Qo(this,$,ss,ns,Yo,{})}}export{ls as default,os as metadata};
