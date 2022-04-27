import{S as zr,i as qr,s as Br,e as s,k as a,w as u,t as i,M as xr,c as o,d as r,m as l,a as n,x as g,h as c,b as d,F as e,g as h,y as _,L as Lr,q as k,o as w,B as b,v as Ar}from"../../chunks/vendor-6b77c823.js";import{D as N}from"../../chunks/Docstring-1088f2fb.js";import{C as Rr}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Jt}from"../../chunks/IconCopyLink-7a11ce68.js";function Dr(Gt){let E,qe,$,q,de,C,Je,pe,Ge,Be,y,B,me,M,Ke,fe,et,xe,x,tt,F,rt,st,Le,re,ot,Ae,se,he,nt,Re,oe,at,De,O,Pe,v,it,S,lt,ct,V,dt,pt,je,z,L,ue,U,mt,ge,ft,Ie,p,W,ht,_e,ut,gt,H,_t,ne,kt,wt,bt,A,X,vt,ke,Tt,Et,T,Q,$t,we,yt,zt,Y,ae,qt,be,Bt,xt,ie,Lt,ve,At,Rt,R,Z,Dt,Te,Pt,jt,D,J,It,Ee,Nt,Ct,P,G,Mt,K,Ft,$e,Ot,St,Vt,j,ee,Ut,ye,Wt,Ht,I,te,Xt,ze,Qt,Ne;return C=new Jt({}),M=new Jt({}),O=new Rr({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># bertweet = TFAutoModel.from_pretrained(&quot;vinai/bertweet-base&quot;)</span>`}}),U=new Jt({}),W=new N({props:{name:"class transformers.BertweetTokenizer",anchor:"transformers.BertweetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"normalization",val:" = False"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertweetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/vr_16968/src/transformers/models/bertweet/tokenization_bertweet.py#L68"}}),X=new N({props:{name:"add_from_file",anchor:"transformers.BertweetTokenizer.add_from_file",parameters:[{name:"f",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_16968/src/transformers/models/bertweet/tokenization_bertweet.py#L414"}}),Q=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertweetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertweetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertweetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_16968/src/transformers/models/bertweet/tokenization_bertweet.py#L183",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Z=new N({props:{name:"convert_tokens_to_string",anchor:"transformers.BertweetTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_16968/src/transformers/models/bertweet/tokenization_bertweet.py#L384"}}),J=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertweetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertweetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertweetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_16968/src/transformers/models/bertweet/tokenization_bertweet.py#L237",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),G=new N({props:{name:"get_special_tokens_mask",anchor:"transformers.BertweetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BertweetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertweetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertweetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_16968/src/transformers/models/bertweet/tokenization_bertweet.py#L209",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ee=new N({props:{name:"normalizeToken",anchor:"transformers.BertweetTokenizer.normalizeToken",parameters:[{name:"token",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_16968/src/transformers/models/bertweet/tokenization_bertweet.py#L357"}}),te=new N({props:{name:"normalizeTweet",anchor:"transformers.BertweetTokenizer.normalizeTweet",parameters:[{name:"tweet",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_16968/src/transformers/models/bertweet/tokenization_bertweet.py#L323"}}),{c(){E=s("meta"),qe=a(),$=s("h1"),q=s("a"),de=s("span"),u(C.$$.fragment),Je=a(),pe=s("span"),Ge=i("BERTweet"),Be=a(),y=s("h2"),B=s("a"),me=s("span"),u(M.$$.fragment),Ke=a(),fe=s("span"),et=i("Overview"),xe=a(),x=s("p"),tt=i("The BERTweet model was proposed in "),F=s("a"),rt=i("BERTweet: A pre-trained language model for English Tweets"),st=i(" by Dat Quoc Nguyen, Thanh Vu, Anh Tuan Nguyen."),Le=a(),re=s("p"),ot=i("The abstract from the paper is the following:"),Ae=a(),se=s("p"),he=s("em"),nt=i(`We present BERTweet, the first public large-scale pre-trained language model for English Tweets. Our BERTweet, having
the same architecture as BERT-base (Devlin et al., 2019), is trained using the RoBERTa pre-training procedure (Liu et
al., 2019). Experiments show that BERTweet outperforms strong baselines RoBERTa-base and XLM-R-base (Conneau et al.,
2020), producing better performance results than the previous state-of-the-art models on three Tweet NLP tasks:
Part-of-speech tagging, Named-entity recognition and text classification.`),Re=a(),oe=s("p"),at=i("Example of use:"),De=a(),u(O.$$.fragment),Pe=a(),v=s("p"),it=i("This model was contributed by "),S=s("a"),lt=i("dqnguyen"),ct=i(". The original code can be found "),V=s("a"),dt=i("here"),pt=i("."),je=a(),z=s("h2"),L=s("a"),ue=s("span"),u(U.$$.fragment),mt=a(),ge=s("span"),ft=i("BertweetTokenizer"),Ie=a(),p=s("div"),u(W.$$.fragment),ht=a(),_e=s("p"),ut=i("Constructs a BERTweet tokenizer, using Byte-Pair-Encoding."),gt=a(),H=s("p"),_t=i("This tokenizer inherits from "),ne=s("a"),kt=i("PreTrainedTokenizer"),wt=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),bt=a(),A=s("div"),u(X.$$.fragment),vt=a(),ke=s("p"),Tt=i("Loads a pre-existing dictionary from a text file and adds its symbols to this instance."),Et=a(),T=s("div"),u(Q.$$.fragment),$t=a(),we=s("p"),yt=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERTweet sequence has the following format:`),zt=a(),Y=s("ul"),ae=s("li"),qt=i("single sequence: "),be=s("code"),Bt=i("<s> X </s>"),xt=a(),ie=s("li"),Lt=i("pair of sequences: "),ve=s("code"),At=i("<s> A </s></s> B </s>"),Rt=a(),R=s("div"),u(Z.$$.fragment),Dt=a(),Te=s("p"),Pt=i("Converts a sequence of tokens (string) in a single string."),jt=a(),D=s("div"),u(J.$$.fragment),It=a(),Ee=s("p"),Nt=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BERTweet does
not make use of token type ids, therefore a list of zeros is returned.`),Ct=a(),P=s("div"),u(G.$$.fragment),Mt=a(),K=s("p"),Ft=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),$e=s("code"),Ot=i("prepare_for_model"),St=i(" method."),Vt=a(),j=s("div"),u(ee.$$.fragment),Ut=a(),ye=s("p"),Wt=i("Normalize tokens in a Tweet"),Ht=a(),I=s("div"),u(te.$$.fragment),Xt=a(),ze=s("p"),Qt=i("Normalize a raw Tweet"),this.h()},l(t){const m=xr('[data-svelte="svelte-1phssyn"]',document.head);E=o(m,"META",{name:!0,content:!0}),m.forEach(r),qe=l(t),$=o(t,"H1",{class:!0});var Ce=n($);q=o(Ce,"A",{id:!0,class:!0,href:!0});var Kt=n(q);de=o(Kt,"SPAN",{});var er=n(de);g(C.$$.fragment,er),er.forEach(r),Kt.forEach(r),Je=l(Ce),pe=o(Ce,"SPAN",{});var tr=n(pe);Ge=c(tr,"BERTweet"),tr.forEach(r),Ce.forEach(r),Be=l(t),y=o(t,"H2",{class:!0});var Me=n(y);B=o(Me,"A",{id:!0,class:!0,href:!0});var rr=n(B);me=o(rr,"SPAN",{});var sr=n(me);g(M.$$.fragment,sr),sr.forEach(r),rr.forEach(r),Ke=l(Me),fe=o(Me,"SPAN",{});var or=n(fe);et=c(or,"Overview"),or.forEach(r),Me.forEach(r),xe=l(t),x=o(t,"P",{});var Fe=n(x);tt=c(Fe,"The BERTweet model was proposed in "),F=o(Fe,"A",{href:!0,rel:!0});var nr=n(F);rt=c(nr,"BERTweet: A pre-trained language model for English Tweets"),nr.forEach(r),st=c(Fe," by Dat Quoc Nguyen, Thanh Vu, Anh Tuan Nguyen."),Fe.forEach(r),Le=l(t),re=o(t,"P",{});var ar=n(re);ot=c(ar,"The abstract from the paper is the following:"),ar.forEach(r),Ae=l(t),se=o(t,"P",{});var ir=n(se);he=o(ir,"EM",{});var lr=n(he);nt=c(lr,`We present BERTweet, the first public large-scale pre-trained language model for English Tweets. Our BERTweet, having
the same architecture as BERT-base (Devlin et al., 2019), is trained using the RoBERTa pre-training procedure (Liu et
al., 2019). Experiments show that BERTweet outperforms strong baselines RoBERTa-base and XLM-R-base (Conneau et al.,
2020), producing better performance results than the previous state-of-the-art models on three Tweet NLP tasks:
Part-of-speech tagging, Named-entity recognition and text classification.`),lr.forEach(r),ir.forEach(r),Re=l(t),oe=o(t,"P",{});var cr=n(oe);at=c(cr,"Example of use:"),cr.forEach(r),De=l(t),g(O.$$.fragment,t),Pe=l(t),v=o(t,"P",{});var le=n(v);it=c(le,"This model was contributed by "),S=o(le,"A",{href:!0,rel:!0});var dr=n(S);lt=c(dr,"dqnguyen"),dr.forEach(r),ct=c(le,". The original code can be found "),V=o(le,"A",{href:!0,rel:!0});var pr=n(V);dt=c(pr,"here"),pr.forEach(r),pt=c(le,"."),le.forEach(r),je=l(t),z=o(t,"H2",{class:!0});var Oe=n(z);L=o(Oe,"A",{id:!0,class:!0,href:!0});var mr=n(L);ue=o(mr,"SPAN",{});var fr=n(ue);g(U.$$.fragment,fr),fr.forEach(r),mr.forEach(r),mt=l(Oe),ge=o(Oe,"SPAN",{});var hr=n(ge);ft=c(hr,"BertweetTokenizer"),hr.forEach(r),Oe.forEach(r),Ie=l(t),p=o(t,"DIV",{class:!0});var f=n(p);g(W.$$.fragment,f),ht=l(f),_e=o(f,"P",{});var ur=n(_e);ut=c(ur,"Constructs a BERTweet tokenizer, using Byte-Pair-Encoding."),ur.forEach(r),gt=l(f),H=o(f,"P",{});var Se=n(H);_t=c(Se,"This tokenizer inherits from "),ne=o(Se,"A",{href:!0});var gr=n(ne);kt=c(gr,"PreTrainedTokenizer"),gr.forEach(r),wt=c(Se,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Se.forEach(r),bt=l(f),A=o(f,"DIV",{class:!0});var Ve=n(A);g(X.$$.fragment,Ve),vt=l(Ve),ke=o(Ve,"P",{});var _r=n(ke);Tt=c(_r,"Loads a pre-existing dictionary from a text file and adds its symbols to this instance."),_r.forEach(r),Ve.forEach(r),Et=l(f),T=o(f,"DIV",{class:!0});var ce=n(T);g(Q.$$.fragment,ce),$t=l(ce),we=o(ce,"P",{});var kr=n(we);yt=c(kr,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERTweet sequence has the following format:`),kr.forEach(r),zt=l(ce),Y=o(ce,"UL",{});var Ue=n(Y);ae=o(Ue,"LI",{});var Yt=n(ae);qt=c(Yt,"single sequence: "),be=o(Yt,"CODE",{});var wr=n(be);Bt=c(wr,"<s> X </s>"),wr.forEach(r),Yt.forEach(r),xt=l(Ue),ie=o(Ue,"LI",{});var Zt=n(ie);Lt=c(Zt,"pair of sequences: "),ve=o(Zt,"CODE",{});var br=n(ve);At=c(br,"<s> A </s></s> B </s>"),br.forEach(r),Zt.forEach(r),Ue.forEach(r),ce.forEach(r),Rt=l(f),R=o(f,"DIV",{class:!0});var We=n(R);g(Z.$$.fragment,We),Dt=l(We),Te=o(We,"P",{});var vr=n(Te);Pt=c(vr,"Converts a sequence of tokens (string) in a single string."),vr.forEach(r),We.forEach(r),jt=l(f),D=o(f,"DIV",{class:!0});var He=n(D);g(J.$$.fragment,He),It=l(He),Ee=o(He,"P",{});var Tr=n(Ee);Nt=c(Tr,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BERTweet does
not make use of token type ids, therefore a list of zeros is returned.`),Tr.forEach(r),He.forEach(r),Ct=l(f),P=o(f,"DIV",{class:!0});var Xe=n(P);g(G.$$.fragment,Xe),Mt=l(Xe),K=o(Xe,"P",{});var Qe=n(K);Ft=c(Qe,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),$e=o(Qe,"CODE",{});var Er=n($e);Ot=c(Er,"prepare_for_model"),Er.forEach(r),St=c(Qe," method."),Qe.forEach(r),Xe.forEach(r),Vt=l(f),j=o(f,"DIV",{class:!0});var Ye=n(j);g(ee.$$.fragment,Ye),Ut=l(Ye),ye=o(Ye,"P",{});var $r=n(ye);Wt=c($r,"Normalize tokens in a Tweet"),$r.forEach(r),Ye.forEach(r),Ht=l(f),I=o(f,"DIV",{class:!0});var Ze=n(I);g(te.$$.fragment,Ze),Xt=l(Ze),ze=o(Ze,"P",{});var yr=n(ze);Qt=c(yr,"Normalize a raw Tweet"),yr.forEach(r),Ze.forEach(r),f.forEach(r),this.h()},h(){d(E,"name","hf:doc:metadata"),d(E,"content",JSON.stringify(Pr)),d(q,"id","bertweet"),d(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(q,"href","#bertweet"),d($,"class","relative group"),d(B,"id","overview"),d(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(B,"href","#overview"),d(y,"class","relative group"),d(F,"href","https://www.aclweb.org/anthology/2020.emnlp-demos.2.pdf"),d(F,"rel","nofollow"),d(S,"href","https://huggingface.co/dqnguyen"),d(S,"rel","nofollow"),d(V,"href","https://github.com/VinAIResearch/BERTweet"),d(V,"rel","nofollow"),d(L,"id","transformers.BertweetTokenizer"),d(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(L,"href","#transformers.BertweetTokenizer"),d(z,"class","relative group"),d(ne,"href","/docs/transformers/pr_16968/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(p,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,m){e(document.head,E),h(t,qe,m),h(t,$,m),e($,q),e(q,de),_(C,de,null),e($,Je),e($,pe),e(pe,Ge),h(t,Be,m),h(t,y,m),e(y,B),e(B,me),_(M,me,null),e(y,Ke),e(y,fe),e(fe,et),h(t,xe,m),h(t,x,m),e(x,tt),e(x,F),e(F,rt),e(x,st),h(t,Le,m),h(t,re,m),e(re,ot),h(t,Ae,m),h(t,se,m),e(se,he),e(he,nt),h(t,Re,m),h(t,oe,m),e(oe,at),h(t,De,m),_(O,t,m),h(t,Pe,m),h(t,v,m),e(v,it),e(v,S),e(S,lt),e(v,ct),e(v,V),e(V,dt),e(v,pt),h(t,je,m),h(t,z,m),e(z,L),e(L,ue),_(U,ue,null),e(z,mt),e(z,ge),e(ge,ft),h(t,Ie,m),h(t,p,m),_(W,p,null),e(p,ht),e(p,_e),e(_e,ut),e(p,gt),e(p,H),e(H,_t),e(H,ne),e(ne,kt),e(H,wt),e(p,bt),e(p,A),_(X,A,null),e(A,vt),e(A,ke),e(ke,Tt),e(p,Et),e(p,T),_(Q,T,null),e(T,$t),e(T,we),e(we,yt),e(T,zt),e(T,Y),e(Y,ae),e(ae,qt),e(ae,be),e(be,Bt),e(Y,xt),e(Y,ie),e(ie,Lt),e(ie,ve),e(ve,At),e(p,Rt),e(p,R),_(Z,R,null),e(R,Dt),e(R,Te),e(Te,Pt),e(p,jt),e(p,D),_(J,D,null),e(D,It),e(D,Ee),e(Ee,Nt),e(p,Ct),e(p,P),_(G,P,null),e(P,Mt),e(P,K),e(K,Ft),e(K,$e),e($e,Ot),e(K,St),e(p,Vt),e(p,j),_(ee,j,null),e(j,Ut),e(j,ye),e(ye,Wt),e(p,Ht),e(p,I),_(te,I,null),e(I,Xt),e(I,ze),e(ze,Qt),Ne=!0},p:Lr,i(t){Ne||(k(C.$$.fragment,t),k(M.$$.fragment,t),k(O.$$.fragment,t),k(U.$$.fragment,t),k(W.$$.fragment,t),k(X.$$.fragment,t),k(Q.$$.fragment,t),k(Z.$$.fragment,t),k(J.$$.fragment,t),k(G.$$.fragment,t),k(ee.$$.fragment,t),k(te.$$.fragment,t),Ne=!0)},o(t){w(C.$$.fragment,t),w(M.$$.fragment,t),w(O.$$.fragment,t),w(U.$$.fragment,t),w(W.$$.fragment,t),w(X.$$.fragment,t),w(Q.$$.fragment,t),w(Z.$$.fragment,t),w(J.$$.fragment,t),w(G.$$.fragment,t),w(ee.$$.fragment,t),w(te.$$.fragment,t),Ne=!1},d(t){r(E),t&&r(qe),t&&r($),b(C),t&&r(Be),t&&r(y),b(M),t&&r(xe),t&&r(x),t&&r(Le),t&&r(re),t&&r(Ae),t&&r(se),t&&r(Re),t&&r(oe),t&&r(De),b(O,t),t&&r(Pe),t&&r(v),t&&r(je),t&&r(z),b(U),t&&r(Ie),t&&r(p),b(W),b(X),b(Q),b(Z),b(J),b(G),b(ee),b(te)}}}const Pr={local:"bertweet",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertweetTokenizer",title:"BertweetTokenizer"}],title:"BERTweet"};function jr(Gt){return Ar(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Fr extends zr{constructor(E){super();qr(this,E,jr,Dr,Br,{})}}export{Fr as default,Pr as metadata};
