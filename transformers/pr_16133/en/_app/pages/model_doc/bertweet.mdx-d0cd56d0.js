import{S as zs,i as qs,s as Bs,e as n,k as a,w as g,t as i,M as Ls,c as o,d as s,m as l,a as r,x as _,h as c,b as p,F as e,g as h,y as k,L as xs,q as w,o as v,B as b}from"../../chunks/vendor-4833417e.js";import{D as N}from"../../chunks/Docstring-4f315ed9.js";import{C as As}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as Gt}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Rs(Je){let E,se,u,T,de,C,Ge,me,Ke,Be,z,B,fe,F,et,he,tt,Le,L,st,M,nt,ot,xe,ne,rt,Ae,oe,ue,at,Re,re,it,De,O,Pe,$,lt,S,ct,pt,V,dt,mt,je,q,x,ge,W,ft,_e,ht,Ie,d,U,ut,ke,gt,_t,H,kt,ae,wt,vt,bt,A,X,Tt,we,Et,$t,y,Q,yt,ve,zt,qt,Y,ie,Bt,be,Lt,xt,le,At,Te,Rt,Dt,R,Z,Pt,Ee,jt,It,D,J,Nt,$e,Ct,Ft,P,G,Mt,K,Ot,ye,St,Vt,Wt,j,ee,Ut,ze,Ht,Xt,I,te,Qt,qe,Yt,Ne;return C=new Gt({}),F=new Gt({}),O=new As({props:{code:`import torch
from transformers import AutoModel, AutoTokenizer

bertweet = AutoModel.from_pretrained("vinai/bertweet-base")

# For transformers v4.x+:
tokenizer = AutoTokenizer.from_pretrained("vinai/bertweet-base", use_fast=False)

# For transformers v3.x:
# tokenizer = AutoTokenizer.from_pretrained("vinai/bertweet-base")

# INPUT TWEET IS ALREADY NORMALIZED!
line = "SC has first two presumptive cases of coronavirus , DHEC confirms HTTPURL via @USER :cry:"

input_ids = torch.tensor([tokenizer.encode(line)])

with torch.no_grad():
    features = bertweet(input_ids)  # Models outputs are now tuples

# With TensorFlow 2.0+:
# from transformers import TFAutoModel
# bertweet = TFAutoModel.from_pretrained("vinai/bertweet-base")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>bertweet = AutoModel.from_pretrained(<span class="hljs-string">&quot;vinai/bertweet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For transformers v4.x+:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;vinai/bertweet-base&quot;</span>, use_fast=<span class="hljs-literal">False</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For transformers v3.x:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># tokenizer = AutoTokenizer.from_pretrained(&quot;vinai/bertweet-base&quot;)</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># INPUT TWEET IS ALREADY NORMALIZED!</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>line = <span class="hljs-string">&quot;SC has first two presumptive cases of coronavirus , DHEC confirms HTTPURL via @USER :cry:&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([tokenizer.encode(line)])

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    features = bertweet(input_ids)  <span class="hljs-comment"># Models outputs are now tuples</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># With TensorFlow 2.0+:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># from transformers import TFAutoModel</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># bertweet = TFAutoModel.from_pretrained(&quot;vinai/bertweet-base&quot;)</span>`}}),W=new Gt({}),U=new N({props:{name:"class transformers.BertweetTokenizer",anchor:"transformers.BertweetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"normalization",val:" = False"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16133/src/transformers/models/bertweet/tokenization_bertweet.py#L68",parametersDescription:[{anchor:"transformers.BertweetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BertweetTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BertweetTokenizer.normalization",description:`<strong>normalization</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to apply a normalization preprocess.`,name:"normalization"},{anchor:"transformers.BertweetTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BertweetTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BertweetTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BertweetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BertweetTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BertweetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BertweetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),X=new N({props:{name:"add_from_file",anchor:"transformers.BertweetTokenizer.add_from_file",parameters:[{name:"f",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16133/src/transformers/models/bertweet/tokenization_bertweet.py#L414"}}),Q=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertweetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16133/src/transformers/models/bertweet/tokenization_bertweet.py#L183",parametersDescription:[{anchor:"transformers.BertweetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertweetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Z=new N({props:{name:"convert_tokens_to_string",anchor:"transformers.BertweetTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16133/src/transformers/models/bertweet/tokenization_bertweet.py#L384"}}),J=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertweetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16133/src/transformers/models/bertweet/tokenization_bertweet.py#L237",parametersDescription:[{anchor:"transformers.BertweetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertweetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),G=new N({props:{name:"get_special_tokens_mask",anchor:"transformers.BertweetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16133/src/transformers/models/bertweet/tokenization_bertweet.py#L209",parametersDescription:[{anchor:"transformers.BertweetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertweetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertweetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ee=new N({props:{name:"normalizeToken",anchor:"transformers.BertweetTokenizer.normalizeToken",parameters:[{name:"token",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16133/src/transformers/models/bertweet/tokenization_bertweet.py#L357"}}),te=new N({props:{name:"normalizeTweet",anchor:"transformers.BertweetTokenizer.normalizeTweet",parameters:[{name:"tweet",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16133/src/transformers/models/bertweet/tokenization_bertweet.py#L323"}}),{c(){E=n("meta"),se=a(),u=n("h1"),T=n("a"),de=n("span"),g(C.$$.fragment),Ge=a(),me=n("span"),Ke=i("BERTweet"),Be=a(),z=n("h2"),B=n("a"),fe=n("span"),g(F.$$.fragment),et=a(),he=n("span"),tt=i("Overview"),Le=a(),L=n("p"),st=i("The BERTweet model was proposed in "),M=n("a"),nt=i("BERTweet: A pre-trained language model for English Tweets"),ot=i(" by Dat Quoc Nguyen, Thanh Vu, Anh Tuan Nguyen."),xe=a(),ne=n("p"),rt=i("The abstract from the paper is the following:"),Ae=a(),oe=n("p"),ue=n("em"),at=i(`We present BERTweet, the first public large-scale pre-trained language model for English Tweets. Our BERTweet, having
the same architecture as BERT-base (Devlin et al., 2019), is trained using the RoBERTa pre-training procedure (Liu et
al., 2019). Experiments show that BERTweet outperforms strong baselines RoBERTa-base and XLM-R-base (Conneau et al.,
2020), producing better performance results than the previous state-of-the-art models on three Tweet NLP tasks:
Part-of-speech tagging, Named-entity recognition and text classification.`),Re=a(),re=n("p"),it=i("Example of use:"),De=a(),g(O.$$.fragment),Pe=a(),$=n("p"),lt=i("This model was contributed by "),S=n("a"),ct=i("dqnguyen"),pt=i(". The original code can be found "),V=n("a"),dt=i("here"),mt=i("."),je=a(),q=n("h2"),x=n("a"),ge=n("span"),g(W.$$.fragment),ft=a(),_e=n("span"),ht=i("BertweetTokenizer"),Ie=a(),d=n("div"),g(U.$$.fragment),ut=a(),ke=n("p"),gt=i("Constructs a BERTweet tokenizer, using Byte-Pair-Encoding."),_t=a(),H=n("p"),kt=i("This tokenizer inherits from "),ae=n("a"),wt=i("PreTrainedTokenizer"),vt=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),bt=a(),A=n("div"),g(X.$$.fragment),Tt=a(),we=n("p"),Et=i("Loads a pre-existing dictionary from a text file and adds its symbols to this instance."),$t=a(),y=n("div"),g(Q.$$.fragment),yt=a(),ve=n("p"),zt=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERTweet sequence has the following format:`),qt=a(),Y=n("ul"),ie=n("li"),Bt=i("single sequence: "),be=n("code"),Lt=i("<s> X </s>"),xt=a(),le=n("li"),At=i("pair of sequences: "),Te=n("code"),Rt=i("<s> A </s></s> B </s>"),Dt=a(),R=n("div"),g(Z.$$.fragment),Pt=a(),Ee=n("p"),jt=i("Converts a sequence of tokens (string) in a single string."),It=a(),D=n("div"),g(J.$$.fragment),Nt=a(),$e=n("p"),Ct=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BERTweet does
not make use of token type ids, therefore a list of zeros is returned.`),Ft=a(),P=n("div"),g(G.$$.fragment),Mt=a(),K=n("p"),Ot=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ye=n("code"),St=i("prepare_for_model"),Vt=i(" method."),Wt=a(),j=n("div"),g(ee.$$.fragment),Ut=a(),ze=n("p"),Ht=i("Normalize tokens in a Tweet"),Xt=a(),I=n("div"),g(te.$$.fragment),Qt=a(),qe=n("p"),Yt=i("Normalize a raw Tweet"),this.h()},l(t){const m=Ls('[data-svelte="svelte-1phssyn"]',document.head);E=o(m,"META",{name:!0,content:!0}),m.forEach(s),se=l(t),u=o(t,"H1",{class:!0});var Ce=r(u);T=o(Ce,"A",{id:!0,class:!0,href:!0});var Kt=r(T);de=o(Kt,"SPAN",{});var es=r(de);_(C.$$.fragment,es),es.forEach(s),Kt.forEach(s),Ge=l(Ce),me=o(Ce,"SPAN",{});var ts=r(me);Ke=c(ts,"BERTweet"),ts.forEach(s),Ce.forEach(s),Be=l(t),z=o(t,"H2",{class:!0});var Fe=r(z);B=o(Fe,"A",{id:!0,class:!0,href:!0});var ss=r(B);fe=o(ss,"SPAN",{});var ns=r(fe);_(F.$$.fragment,ns),ns.forEach(s),ss.forEach(s),et=l(Fe),he=o(Fe,"SPAN",{});var os=r(he);tt=c(os,"Overview"),os.forEach(s),Fe.forEach(s),Le=l(t),L=o(t,"P",{});var Me=r(L);st=c(Me,"The BERTweet model was proposed in "),M=o(Me,"A",{href:!0,rel:!0});var rs=r(M);nt=c(rs,"BERTweet: A pre-trained language model for English Tweets"),rs.forEach(s),ot=c(Me," by Dat Quoc Nguyen, Thanh Vu, Anh Tuan Nguyen."),Me.forEach(s),xe=l(t),ne=o(t,"P",{});var as=r(ne);rt=c(as,"The abstract from the paper is the following:"),as.forEach(s),Ae=l(t),oe=o(t,"P",{});var is=r(oe);ue=o(is,"EM",{});var ls=r(ue);at=c(ls,`We present BERTweet, the first public large-scale pre-trained language model for English Tweets. Our BERTweet, having
the same architecture as BERT-base (Devlin et al., 2019), is trained using the RoBERTa pre-training procedure (Liu et
al., 2019). Experiments show that BERTweet outperforms strong baselines RoBERTa-base and XLM-R-base (Conneau et al.,
2020), producing better performance results than the previous state-of-the-art models on three Tweet NLP tasks:
Part-of-speech tagging, Named-entity recognition and text classification.`),ls.forEach(s),is.forEach(s),Re=l(t),re=o(t,"P",{});var cs=r(re);it=c(cs,"Example of use:"),cs.forEach(s),De=l(t),_(O.$$.fragment,t),Pe=l(t),$=o(t,"P",{});var ce=r($);lt=c(ce,"This model was contributed by "),S=o(ce,"A",{href:!0,rel:!0});var ps=r(S);ct=c(ps,"dqnguyen"),ps.forEach(s),pt=c(ce,". The original code can be found "),V=o(ce,"A",{href:!0,rel:!0});var ds=r(V);dt=c(ds,"here"),ds.forEach(s),mt=c(ce,"."),ce.forEach(s),je=l(t),q=o(t,"H2",{class:!0});var Oe=r(q);x=o(Oe,"A",{id:!0,class:!0,href:!0});var ms=r(x);ge=o(ms,"SPAN",{});var fs=r(ge);_(W.$$.fragment,fs),fs.forEach(s),ms.forEach(s),ft=l(Oe),_e=o(Oe,"SPAN",{});var hs=r(_e);ht=c(hs,"BertweetTokenizer"),hs.forEach(s),Oe.forEach(s),Ie=l(t),d=o(t,"DIV",{class:!0});var f=r(d);_(U.$$.fragment,f),ut=l(f),ke=o(f,"P",{});var us=r(ke);gt=c(us,"Constructs a BERTweet tokenizer, using Byte-Pair-Encoding."),us.forEach(s),_t=l(f),H=o(f,"P",{});var Se=r(H);kt=c(Se,"This tokenizer inherits from "),ae=o(Se,"A",{href:!0});var gs=r(ae);wt=c(gs,"PreTrainedTokenizer"),gs.forEach(s),vt=c(Se,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Se.forEach(s),bt=l(f),A=o(f,"DIV",{class:!0});var Ve=r(A);_(X.$$.fragment,Ve),Tt=l(Ve),we=o(Ve,"P",{});var _s=r(we);Et=c(_s,"Loads a pre-existing dictionary from a text file and adds its symbols to this instance."),_s.forEach(s),Ve.forEach(s),$t=l(f),y=o(f,"DIV",{class:!0});var pe=r(y);_(Q.$$.fragment,pe),yt=l(pe),ve=o(pe,"P",{});var ks=r(ve);zt=c(ks,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERTweet sequence has the following format:`),ks.forEach(s),qt=l(pe),Y=o(pe,"UL",{});var We=r(Y);ie=o(We,"LI",{});var Zt=r(ie);Bt=c(Zt,"single sequence: "),be=o(Zt,"CODE",{});var ws=r(be);Lt=c(ws,"<s> X </s>"),ws.forEach(s),Zt.forEach(s),xt=l(We),le=o(We,"LI",{});var Jt=r(le);At=c(Jt,"pair of sequences: "),Te=o(Jt,"CODE",{});var vs=r(Te);Rt=c(vs,"<s> A </s></s> B </s>"),vs.forEach(s),Jt.forEach(s),We.forEach(s),pe.forEach(s),Dt=l(f),R=o(f,"DIV",{class:!0});var Ue=r(R);_(Z.$$.fragment,Ue),Pt=l(Ue),Ee=o(Ue,"P",{});var bs=r(Ee);jt=c(bs,"Converts a sequence of tokens (string) in a single string."),bs.forEach(s),Ue.forEach(s),It=l(f),D=o(f,"DIV",{class:!0});var He=r(D);_(J.$$.fragment,He),Nt=l(He),$e=o(He,"P",{});var Ts=r($e);Ct=c(Ts,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BERTweet does
not make use of token type ids, therefore a list of zeros is returned.`),Ts.forEach(s),He.forEach(s),Ft=l(f),P=o(f,"DIV",{class:!0});var Xe=r(P);_(G.$$.fragment,Xe),Mt=l(Xe),K=o(Xe,"P",{});var Qe=r(K);Ot=c(Qe,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ye=o(Qe,"CODE",{});var Es=r(ye);St=c(Es,"prepare_for_model"),Es.forEach(s),Vt=c(Qe," method."),Qe.forEach(s),Xe.forEach(s),Wt=l(f),j=o(f,"DIV",{class:!0});var Ye=r(j);_(ee.$$.fragment,Ye),Ut=l(Ye),ze=o(Ye,"P",{});var $s=r(ze);Ht=c($s,"Normalize tokens in a Tweet"),$s.forEach(s),Ye.forEach(s),Xt=l(f),I=o(f,"DIV",{class:!0});var Ze=r(I);_(te.$$.fragment,Ze),Qt=l(Ze),qe=o(Ze,"P",{});var ys=r(qe);Yt=c(ys,"Normalize a raw Tweet"),ys.forEach(s),Ze.forEach(s),f.forEach(s),this.h()},h(){p(E,"name","hf:doc:metadata"),p(E,"content",JSON.stringify(Ds)),p(T,"id","bertweet"),p(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(T,"href","#bertweet"),p(u,"class","relative group"),p(B,"id","overview"),p(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(B,"href","#overview"),p(z,"class","relative group"),p(M,"href","https://www.aclweb.org/anthology/2020.emnlp-demos.2.pdf"),p(M,"rel","nofollow"),p(S,"href","https://huggingface.co/dqnguyen"),p(S,"rel","nofollow"),p(V,"href","https://github.com/VinAIResearch/BERTweet"),p(V,"rel","nofollow"),p(x,"id","transformers.BertweetTokenizer"),p(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(x,"href","#transformers.BertweetTokenizer"),p(q,"class","relative group"),p(ae,"href","/docs/transformers/pr_16133/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(A,"class","docstring"),p(y,"class","docstring"),p(R,"class","docstring"),p(D,"class","docstring"),p(P,"class","docstring"),p(j,"class","docstring"),p(I,"class","docstring"),p(d,"class","docstring")},m(t,m){e(document.head,E),h(t,se,m),h(t,u,m),e(u,T),e(T,de),k(C,de,null),e(u,Ge),e(u,me),e(me,Ke),h(t,Be,m),h(t,z,m),e(z,B),e(B,fe),k(F,fe,null),e(z,et),e(z,he),e(he,tt),h(t,Le,m),h(t,L,m),e(L,st),e(L,M),e(M,nt),e(L,ot),h(t,xe,m),h(t,ne,m),e(ne,rt),h(t,Ae,m),h(t,oe,m),e(oe,ue),e(ue,at),h(t,Re,m),h(t,re,m),e(re,it),h(t,De,m),k(O,t,m),h(t,Pe,m),h(t,$,m),e($,lt),e($,S),e(S,ct),e($,pt),e($,V),e(V,dt),e($,mt),h(t,je,m),h(t,q,m),e(q,x),e(x,ge),k(W,ge,null),e(q,ft),e(q,_e),e(_e,ht),h(t,Ie,m),h(t,d,m),k(U,d,null),e(d,ut),e(d,ke),e(ke,gt),e(d,_t),e(d,H),e(H,kt),e(H,ae),e(ae,wt),e(H,vt),e(d,bt),e(d,A),k(X,A,null),e(A,Tt),e(A,we),e(we,Et),e(d,$t),e(d,y),k(Q,y,null),e(y,yt),e(y,ve),e(ve,zt),e(y,qt),e(y,Y),e(Y,ie),e(ie,Bt),e(ie,be),e(be,Lt),e(Y,xt),e(Y,le),e(le,At),e(le,Te),e(Te,Rt),e(d,Dt),e(d,R),k(Z,R,null),e(R,Pt),e(R,Ee),e(Ee,jt),e(d,It),e(d,D),k(J,D,null),e(D,Nt),e(D,$e),e($e,Ct),e(d,Ft),e(d,P),k(G,P,null),e(P,Mt),e(P,K),e(K,Ot),e(K,ye),e(ye,St),e(K,Vt),e(d,Wt),e(d,j),k(ee,j,null),e(j,Ut),e(j,ze),e(ze,Ht),e(d,Xt),e(d,I),k(te,I,null),e(I,Qt),e(I,qe),e(qe,Yt),Ne=!0},p:xs,i(t){Ne||(w(C.$$.fragment,t),w(F.$$.fragment,t),w(O.$$.fragment,t),w(W.$$.fragment,t),w(U.$$.fragment,t),w(X.$$.fragment,t),w(Q.$$.fragment,t),w(Z.$$.fragment,t),w(J.$$.fragment,t),w(G.$$.fragment,t),w(ee.$$.fragment,t),w(te.$$.fragment,t),Ne=!0)},o(t){v(C.$$.fragment,t),v(F.$$.fragment,t),v(O.$$.fragment,t),v(W.$$.fragment,t),v(U.$$.fragment,t),v(X.$$.fragment,t),v(Q.$$.fragment,t),v(Z.$$.fragment,t),v(J.$$.fragment,t),v(G.$$.fragment,t),v(ee.$$.fragment,t),v(te.$$.fragment,t),Ne=!1},d(t){s(E),t&&s(se),t&&s(u),b(C),t&&s(Be),t&&s(z),b(F),t&&s(Le),t&&s(L),t&&s(xe),t&&s(ne),t&&s(Ae),t&&s(oe),t&&s(Re),t&&s(re),t&&s(De),b(O,t),t&&s(Pe),t&&s($),t&&s(je),t&&s(q),b(W),t&&s(Ie),t&&s(d),b(U),b(X),b(Q),b(Z),b(J),b(G),b(ee),b(te)}}}const Ds={local:"bertweet",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertweetTokenizer",title:"BertweetTokenizer"}],title:"BERTweet"};function Ps(Je,E,se){let{fw:u}=E;return Je.$$set=T=>{"fw"in T&&se(0,u=T.fw)},[u]}class Ms extends zs{constructor(E){super();qs(this,E,Ps,Rs,Bs,{fw:0})}}export{Ms as default,Ds as metadata};
