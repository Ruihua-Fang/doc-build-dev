import{S as zs,i as qs,s as Bs,e as n,k as a,w as g,t as i,L as Ls,c as o,d as s,m as l,a as r,x as _,h as c,b as p,J as e,g as h,y as k,K as xs,q as w,o as v,B as b}from"../../chunks/vendor-9e2b328e.js";import{D as N}from"../../chunks/Docstring-50fd6873.js";import{C as As}from"../../chunks/CodeBlock-88e23343.js";import{I as Kt}from"../../chunks/IconCopyLink-fd0e58fd.js";import"../../chunks/CopyButton-4ae140ab.js";function Rs(Ze){let E,se,u,T,de,C,Ke,me,Ge,Be,z,B,fe,O,et,he,tt,Le,L,st,F,nt,ot,xe,ne,rt,Ae,oe,ue,at,Re,re,it,De,M,Pe,$,lt,S,ct,pt,V,dt,mt,je,q,x,ge,W,ft,_e,ht,Ie,d,U,ut,ke,gt,_t,H,kt,ae,wt,vt,bt,A,X,Tt,we,Et,$t,y,J,yt,ve,zt,qt,Q,ie,Bt,be,Lt,xt,le,At,Te,Rt,Dt,R,Y,Pt,Ee,jt,It,D,Z,Nt,$e,Ct,Ot,P,K,Ft,G,Mt,ye,St,Vt,Wt,j,ee,Ut,ze,Ht,Xt,I,te,Jt,qe,Qt,Ne;return C=new Kt({}),O=new Kt({}),M=new As({props:{code:`import torch
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
# bertweet = TFAutoModel.from_pretrained("vinai/bertweet-base"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># bertweet = TFAutoModel.from_pretrained(&quot;vinai/bertweet-base&quot;)</span>`}}),W=new Kt({}),U=new N({props:{name:"class transformers.BertweetTokenizer",anchor:"transformers.BertweetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"normalization",val:" = False"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15815/src/transformers/models/bertweet/tokenization_bertweet.py#L68",parametersDescription:[{anchor:"transformers.BertweetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),X=new N({props:{name:"add_from_file",anchor:"transformers.BertweetTokenizer.add_from_file",parameters:[{name:"f",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15815/src/transformers/models/bertweet/tokenization_bertweet.py#L414"}}),J=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertweetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15815/src/transformers/models/bertweet/tokenization_bertweet.py#L183",parametersDescription:[{anchor:"transformers.BertweetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertweetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Y=new N({props:{name:"convert_tokens_to_string",anchor:"transformers.BertweetTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15815/src/transformers/models/bertweet/tokenization_bertweet.py#L384"}}),Z=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertweetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15815/src/transformers/models/bertweet/tokenization_bertweet.py#L237",parametersDescription:[{anchor:"transformers.BertweetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertweetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),K=new N({props:{name:"get_special_tokens_mask",anchor:"transformers.BertweetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15815/src/transformers/models/bertweet/tokenization_bertweet.py#L209",parametersDescription:[{anchor:"transformers.BertweetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertweetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertweetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ee=new N({props:{name:"normalizeToken",anchor:"transformers.BertweetTokenizer.normalizeToken",parameters:[{name:"token",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15815/src/transformers/models/bertweet/tokenization_bertweet.py#L357"}}),te=new N({props:{name:"normalizeTweet",anchor:"transformers.BertweetTokenizer.normalizeTweet",parameters:[{name:"tweet",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15815/src/transformers/models/bertweet/tokenization_bertweet.py#L323"}}),{c(){E=n("meta"),se=a(),u=n("h1"),T=n("a"),de=n("span"),g(C.$$.fragment),Ke=a(),me=n("span"),Ge=i("BERTweet"),Be=a(),z=n("h2"),B=n("a"),fe=n("span"),g(O.$$.fragment),et=a(),he=n("span"),tt=i("Overview"),Le=a(),L=n("p"),st=i("The BERTweet model was proposed in "),F=n("a"),nt=i("BERTweet: A pre-trained language model for English Tweets"),ot=i(" by Dat Quoc Nguyen, Thanh Vu, Anh Tuan Nguyen."),xe=a(),ne=n("p"),rt=i("The abstract from the paper is the following:"),Ae=a(),oe=n("p"),ue=n("em"),at=i(`We present BERTweet, the first public large-scale pre-trained language model for English Tweets. Our BERTweet, having
the same architecture as BERT-base (Devlin et al., 2019), is trained using the RoBERTa pre-training procedure (Liu et
al., 2019). Experiments show that BERTweet outperforms strong baselines RoBERTa-base and XLM-R-base (Conneau et al.,
2020), producing better performance results than the previous state-of-the-art models on three Tweet NLP tasks:
Part-of-speech tagging, Named-entity recognition and text classification.`),Re=a(),re=n("p"),it=i("Example of use:"),De=a(),g(M.$$.fragment),Pe=a(),$=n("p"),lt=i("This model was contributed by "),S=n("a"),ct=i("dqnguyen"),pt=i(". The original code can be found "),V=n("a"),dt=i("here"),mt=i("."),je=a(),q=n("h2"),x=n("a"),ge=n("span"),g(W.$$.fragment),ft=a(),_e=n("span"),ht=i("BertweetTokenizer"),Ie=a(),d=n("div"),g(U.$$.fragment),ut=a(),ke=n("p"),gt=i("Constructs a BERTweet tokenizer, using Byte-Pair-Encoding."),_t=a(),H=n("p"),kt=i("This tokenizer inherits from "),ae=n("a"),wt=i("PreTrainedTokenizer"),vt=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),bt=a(),A=n("div"),g(X.$$.fragment),Tt=a(),we=n("p"),Et=i("Loads a pre-existing dictionary from a text file and adds its symbols to this instance."),$t=a(),y=n("div"),g(J.$$.fragment),yt=a(),ve=n("p"),zt=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERTweet sequence has the following format:`),qt=a(),Q=n("ul"),ie=n("li"),Bt=i("single sequence: "),be=n("code"),Lt=i("<s> X </s>"),xt=a(),le=n("li"),At=i("pair of sequences: "),Te=n("code"),Rt=i("<s> A </s></s> B </s>"),Dt=a(),R=n("div"),g(Y.$$.fragment),Pt=a(),Ee=n("p"),jt=i("Converts a sequence of tokens (string) in a single string."),It=a(),D=n("div"),g(Z.$$.fragment),Nt=a(),$e=n("p"),Ct=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BERTweet does
not make use of token type ids, therefore a list of zeros is returned.`),Ot=a(),P=n("div"),g(K.$$.fragment),Ft=a(),G=n("p"),Mt=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ye=n("code"),St=i("prepare_for_model"),Vt=i(" method."),Wt=a(),j=n("div"),g(ee.$$.fragment),Ut=a(),ze=n("p"),Ht=i("Normalize tokens in a Tweet"),Xt=a(),I=n("div"),g(te.$$.fragment),Jt=a(),qe=n("p"),Qt=i("Normalize a raw Tweet"),this.h()},l(t){const m=Ls('[data-svelte="svelte-1phssyn"]',document.head);E=o(m,"META",{name:!0,content:!0}),m.forEach(s),se=l(t),u=o(t,"H1",{class:!0});var Ce=r(u);T=o(Ce,"A",{id:!0,class:!0,href:!0});var Gt=r(T);de=o(Gt,"SPAN",{});var es=r(de);_(C.$$.fragment,es),es.forEach(s),Gt.forEach(s),Ke=l(Ce),me=o(Ce,"SPAN",{});var ts=r(me);Ge=c(ts,"BERTweet"),ts.forEach(s),Ce.forEach(s),Be=l(t),z=o(t,"H2",{class:!0});var Oe=r(z);B=o(Oe,"A",{id:!0,class:!0,href:!0});var ss=r(B);fe=o(ss,"SPAN",{});var ns=r(fe);_(O.$$.fragment,ns),ns.forEach(s),ss.forEach(s),et=l(Oe),he=o(Oe,"SPAN",{});var os=r(he);tt=c(os,"Overview"),os.forEach(s),Oe.forEach(s),Le=l(t),L=o(t,"P",{});var Fe=r(L);st=c(Fe,"The BERTweet model was proposed in "),F=o(Fe,"A",{href:!0,rel:!0});var rs=r(F);nt=c(rs,"BERTweet: A pre-trained language model for English Tweets"),rs.forEach(s),ot=c(Fe," by Dat Quoc Nguyen, Thanh Vu, Anh Tuan Nguyen."),Fe.forEach(s),xe=l(t),ne=o(t,"P",{});var as=r(ne);rt=c(as,"The abstract from the paper is the following:"),as.forEach(s),Ae=l(t),oe=o(t,"P",{});var is=r(oe);ue=o(is,"EM",{});var ls=r(ue);at=c(ls,`We present BERTweet, the first public large-scale pre-trained language model for English Tweets. Our BERTweet, having
the same architecture as BERT-base (Devlin et al., 2019), is trained using the RoBERTa pre-training procedure (Liu et
al., 2019). Experiments show that BERTweet outperforms strong baselines RoBERTa-base and XLM-R-base (Conneau et al.,
2020), producing better performance results than the previous state-of-the-art models on three Tweet NLP tasks:
Part-of-speech tagging, Named-entity recognition and text classification.`),ls.forEach(s),is.forEach(s),Re=l(t),re=o(t,"P",{});var cs=r(re);it=c(cs,"Example of use:"),cs.forEach(s),De=l(t),_(M.$$.fragment,t),Pe=l(t),$=o(t,"P",{});var ce=r($);lt=c(ce,"This model was contributed by "),S=o(ce,"A",{href:!0,rel:!0});var ps=r(S);ct=c(ps,"dqnguyen"),ps.forEach(s),pt=c(ce,". The original code can be found "),V=o(ce,"A",{href:!0,rel:!0});var ds=r(V);dt=c(ds,"here"),ds.forEach(s),mt=c(ce,"."),ce.forEach(s),je=l(t),q=o(t,"H2",{class:!0});var Me=r(q);x=o(Me,"A",{id:!0,class:!0,href:!0});var ms=r(x);ge=o(ms,"SPAN",{});var fs=r(ge);_(W.$$.fragment,fs),fs.forEach(s),ms.forEach(s),ft=l(Me),_e=o(Me,"SPAN",{});var hs=r(_e);ht=c(hs,"BertweetTokenizer"),hs.forEach(s),Me.forEach(s),Ie=l(t),d=o(t,"DIV",{class:!0});var f=r(d);_(U.$$.fragment,f),ut=l(f),ke=o(f,"P",{});var us=r(ke);gt=c(us,"Constructs a BERTweet tokenizer, using Byte-Pair-Encoding."),us.forEach(s),_t=l(f),H=o(f,"P",{});var Se=r(H);kt=c(Se,"This tokenizer inherits from "),ae=o(Se,"A",{href:!0});var gs=r(ae);wt=c(gs,"PreTrainedTokenizer"),gs.forEach(s),vt=c(Se,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Se.forEach(s),bt=l(f),A=o(f,"DIV",{class:!0});var Ve=r(A);_(X.$$.fragment,Ve),Tt=l(Ve),we=o(Ve,"P",{});var _s=r(we);Et=c(_s,"Loads a pre-existing dictionary from a text file and adds its symbols to this instance."),_s.forEach(s),Ve.forEach(s),$t=l(f),y=o(f,"DIV",{class:!0});var pe=r(y);_(J.$$.fragment,pe),yt=l(pe),ve=o(pe,"P",{});var ks=r(ve);zt=c(ks,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERTweet sequence has the following format:`),ks.forEach(s),qt=l(pe),Q=o(pe,"UL",{});var We=r(Q);ie=o(We,"LI",{});var Yt=r(ie);Bt=c(Yt,"single sequence: "),be=o(Yt,"CODE",{});var ws=r(be);Lt=c(ws,"<s> X </s>"),ws.forEach(s),Yt.forEach(s),xt=l(We),le=o(We,"LI",{});var Zt=r(le);At=c(Zt,"pair of sequences: "),Te=o(Zt,"CODE",{});var vs=r(Te);Rt=c(vs,"<s> A </s></s> B </s>"),vs.forEach(s),Zt.forEach(s),We.forEach(s),pe.forEach(s),Dt=l(f),R=o(f,"DIV",{class:!0});var Ue=r(R);_(Y.$$.fragment,Ue),Pt=l(Ue),Ee=o(Ue,"P",{});var bs=r(Ee);jt=c(bs,"Converts a sequence of tokens (string) in a single string."),bs.forEach(s),Ue.forEach(s),It=l(f),D=o(f,"DIV",{class:!0});var He=r(D);_(Z.$$.fragment,He),Nt=l(He),$e=o(He,"P",{});var Ts=r($e);Ct=c(Ts,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BERTweet does
not make use of token type ids, therefore a list of zeros is returned.`),Ts.forEach(s),He.forEach(s),Ot=l(f),P=o(f,"DIV",{class:!0});var Xe=r(P);_(K.$$.fragment,Xe),Ft=l(Xe),G=o(Xe,"P",{});var Je=r(G);Mt=c(Je,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ye=o(Je,"CODE",{});var Es=r(ye);St=c(Es,"prepare_for_model"),Es.forEach(s),Vt=c(Je," method."),Je.forEach(s),Xe.forEach(s),Wt=l(f),j=o(f,"DIV",{class:!0});var Qe=r(j);_(ee.$$.fragment,Qe),Ut=l(Qe),ze=o(Qe,"P",{});var $s=r(ze);Ht=c($s,"Normalize tokens in a Tweet"),$s.forEach(s),Qe.forEach(s),Xt=l(f),I=o(f,"DIV",{class:!0});var Ye=r(I);_(te.$$.fragment,Ye),Jt=l(Ye),qe=o(Ye,"P",{});var ys=r(qe);Qt=c(ys,"Normalize a raw Tweet"),ys.forEach(s),Ye.forEach(s),f.forEach(s),this.h()},h(){p(E,"name","hf:doc:metadata"),p(E,"content",JSON.stringify(Ds)),p(T,"id","bertweet"),p(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(T,"href","#bertweet"),p(u,"class","relative group"),p(B,"id","overview"),p(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(B,"href","#overview"),p(z,"class","relative group"),p(F,"href","https://www.aclweb.org/anthology/2020.emnlp-demos.2.pdf"),p(F,"rel","nofollow"),p(S,"href","https://huggingface.co/dqnguyen"),p(S,"rel","nofollow"),p(V,"href","https://github.com/VinAIResearch/BERTweet"),p(V,"rel","nofollow"),p(x,"id","transformers.BertweetTokenizer"),p(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(x,"href","#transformers.BertweetTokenizer"),p(q,"class","relative group"),p(ae,"href","/docs/transformers/pr_15815/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(A,"class","docstring"),p(y,"class","docstring"),p(R,"class","docstring"),p(D,"class","docstring"),p(P,"class","docstring"),p(j,"class","docstring"),p(I,"class","docstring"),p(d,"class","docstring")},m(t,m){e(document.head,E),h(t,se,m),h(t,u,m),e(u,T),e(T,de),k(C,de,null),e(u,Ke),e(u,me),e(me,Ge),h(t,Be,m),h(t,z,m),e(z,B),e(B,fe),k(O,fe,null),e(z,et),e(z,he),e(he,tt),h(t,Le,m),h(t,L,m),e(L,st),e(L,F),e(F,nt),e(L,ot),h(t,xe,m),h(t,ne,m),e(ne,rt),h(t,Ae,m),h(t,oe,m),e(oe,ue),e(ue,at),h(t,Re,m),h(t,re,m),e(re,it),h(t,De,m),k(M,t,m),h(t,Pe,m),h(t,$,m),e($,lt),e($,S),e(S,ct),e($,pt),e($,V),e(V,dt),e($,mt),h(t,je,m),h(t,q,m),e(q,x),e(x,ge),k(W,ge,null),e(q,ft),e(q,_e),e(_e,ht),h(t,Ie,m),h(t,d,m),k(U,d,null),e(d,ut),e(d,ke),e(ke,gt),e(d,_t),e(d,H),e(H,kt),e(H,ae),e(ae,wt),e(H,vt),e(d,bt),e(d,A),k(X,A,null),e(A,Tt),e(A,we),e(we,Et),e(d,$t),e(d,y),k(J,y,null),e(y,yt),e(y,ve),e(ve,zt),e(y,qt),e(y,Q),e(Q,ie),e(ie,Bt),e(ie,be),e(be,Lt),e(Q,xt),e(Q,le),e(le,At),e(le,Te),e(Te,Rt),e(d,Dt),e(d,R),k(Y,R,null),e(R,Pt),e(R,Ee),e(Ee,jt),e(d,It),e(d,D),k(Z,D,null),e(D,Nt),e(D,$e),e($e,Ct),e(d,Ot),e(d,P),k(K,P,null),e(P,Ft),e(P,G),e(G,Mt),e(G,ye),e(ye,St),e(G,Vt),e(d,Wt),e(d,j),k(ee,j,null),e(j,Ut),e(j,ze),e(ze,Ht),e(d,Xt),e(d,I),k(te,I,null),e(I,Jt),e(I,qe),e(qe,Qt),Ne=!0},p:xs,i(t){Ne||(w(C.$$.fragment,t),w(O.$$.fragment,t),w(M.$$.fragment,t),w(W.$$.fragment,t),w(U.$$.fragment,t),w(X.$$.fragment,t),w(J.$$.fragment,t),w(Y.$$.fragment,t),w(Z.$$.fragment,t),w(K.$$.fragment,t),w(ee.$$.fragment,t),w(te.$$.fragment,t),Ne=!0)},o(t){v(C.$$.fragment,t),v(O.$$.fragment,t),v(M.$$.fragment,t),v(W.$$.fragment,t),v(U.$$.fragment,t),v(X.$$.fragment,t),v(J.$$.fragment,t),v(Y.$$.fragment,t),v(Z.$$.fragment,t),v(K.$$.fragment,t),v(ee.$$.fragment,t),v(te.$$.fragment,t),Ne=!1},d(t){s(E),t&&s(se),t&&s(u),b(C),t&&s(Be),t&&s(z),b(O),t&&s(Le),t&&s(L),t&&s(xe),t&&s(ne),t&&s(Ae),t&&s(oe),t&&s(Re),t&&s(re),t&&s(De),b(M,t),t&&s(Pe),t&&s($),t&&s(je),t&&s(q),b(W),t&&s(Ie),t&&s(d),b(U),b(X),b(J),b(Y),b(Z),b(K),b(ee),b(te)}}}const Ds={local:"bertweet",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertweetTokenizer",title:"BertweetTokenizer"}],title:"BERTweet"};function Ps(Ze,E,se){let{fw:u}=E;return Ze.$$set=T=>{"fw"in T&&se(0,u=T.fw)},[u]}class Fs extends zs{constructor(E){super();qs(this,E,Ps,Rs,Bs,{fw:0})}}export{Fs as default,Ds as metadata};
