import{S as Tn,i as Dn,s as Cn,e as o,k as p,w as m,t as i,M as An,c as r,d as s,m as d,a as n,x as u,h as l,b as a,F as t,g as c,y as f,L as Sn,q as g,o as _,B as k}from"../../chunks/vendor-4833417e.js";import{D as y}from"../../chunks/Docstring-4f315ed9.js";import{C as Ft}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as B}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function In(zs){let X,Ve,M,q,lt,le,Ts,pt,Ds,Gt,x,dt,Cs,As,pe,Ss,Is,Bt,z,R,ht,de,Fs,ct,Gs,Rt,O,Bs,he,Rs,Os,Ot,We,Hs,Ht,Ue,Vs,Vt,Ye,mt,Ws,Wt,H,Us,ce,Ys,Js,Ut,T,V,ut,me,Qs,ft,Zs,Yt,D,ue,Ks,fe,eo,Je,to,so,Jt,C,W,gt,ge,oo,_t,ro,Qt,v,_e,no,E,ao,Qe,io,lo,Ze,po,ho,ke,co,mo,uo,ve,fo,Ke,go,_o,ko,j,Pe,vo,kt,Po,wo,we,et,bo,vt,No,Lo,tt,$o,Pt,Mo,qo,U,be,Eo,wt,yo,Xo,Y,Ne,jo,bt,xo,zo,J,Le,To,$e,Do,Nt,Co,Ao,Zt,A,Q,Lt,Me,So,$t,Io,Kt,w,qe,Fo,Ee,Go,st,Bo,Ro,Oo,Mt,Ho,Vo,ye,es,S,Z,qt,Xe,Wo,Et,Uo,ts,b,je,Yo,xe,Jo,ot,Qo,Zo,Ko,yt,er,tr,ze,ss,I,K,Xt,Te,sr,jt,or,os,N,De,rr,Ce,nr,rt,ar,ir,lr,xt,pr,dr,Ae,rs,F,ee,zt,Se,hr,Tt,cr,ns,L,Ie,mr,Fe,ur,nt,fr,gr,_r,Dt,kr,vr,Ge,as,G,te,Ct,Be,Pr,At,wr,is,$,Re,br,Oe,Nr,at,Lr,$r,Mr,St,qr,Er,He,ls;return le=new B({}),de=new B({}),me=new B({}),ue=new y({props:{name:"class transformers.XLMProphetNetConfig",anchor:"transformers.XLMProphetNetConfig",parameters:[{name:"activation_dropout",val:" = 0.1"},{name:"activation_function",val:" = 'gelu'"},{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 1024"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"num_encoder_layers",val:" = 12"},{name:"num_encoder_attention_heads",val:" = 16"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"num_decoder_layers",val:" = 12"},{name:"num_decoder_attention_heads",val:" = 16"},{name:"attention_dropout",val:" = 0.1"},{name:"dropout",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"init_std",val:" = 0.02"},{name:"is_encoder_decoder",val:" = True"},{name:"add_cross_attention",val:" = True"},{name:"decoder_start_token_id",val:" = 0"},{name:"ngram",val:" = 2"},{name:"num_buckets",val:" = 32"},{name:"relative_max_distance",val:" = 128"},{name:"disable_ngram_loss",val:" = False"},{name:"eps",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_6/src/transformers/models/xlm_prophetnet/configuration_xlm_prophetnet.py#L29"}}),ge=new B({}),_e=new y({props:{name:"class transformers.XLMProphetNetTokenizer",anchor:"transformers.XLMProphetNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '[SEP]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_6/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L57",parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XLMProphetNetTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLMProphetNetTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XLMProphetNetTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLMProphetNetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLMProphetNetTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLMProphetNetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLMProphetNetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLMProphetNetTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.XLMProphetNetTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.XLMProphetNetTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}]}}),Pe=new y({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMProphetNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_6/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L314",parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.XLMProphetNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),be=new y({props:{name:"convert_tokens_to_string",anchor:"transformers.XLMProphetNetTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_6/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L292"}}),Ne=new y({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMProphetNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_6/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L241",parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMProphetNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Le=new y({props:{name:"get_special_tokens_mask",anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_6/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L213",parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Me=new B({}),qe=new y({props:{name:"class transformers.XLMProphetNetModel",anchor:"transformers.XLMProphetNetModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_6/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L86"}}),ye=new Ft({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetModel

tokenizer = XLMProphetNetTokenizer.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
model = XLMProphetNetModel.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state  # main stream hidden states
last_hidden_states_ngram = outputs.last_hidden_state_ngram  # predict hidden states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetModel.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state  <span class="hljs-comment"># main stream hidden states</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states_ngram = outputs.last_hidden_state_ngram  <span class="hljs-comment"># predict hidden states</span>`}}),Xe=new B({}),je=new y({props:{name:"class transformers.XLMProphetNetEncoder",anchor:"transformers.XLMProphetNetEncoder",parameters:[{name:"config",val:": ProphetNetConfig"},{name:"word_embeddings",val:": Embedding = None"}],source:"https://github.com/huggingface/transformers/blob/pr_6/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L38"}}),ze=new Ft({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetEncoder
import torch

tokenizer = XLMProphetNetTokenizer.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
model = XLMProphetNetEncoder.from_pretrained("patrickvonplaten/xprophetnet-large-uncased-standalone")
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetEncoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetEncoder.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Te=new B({}),De=new y({props:{name:"class transformers.XLMProphetNetDecoder",anchor:"transformers.XLMProphetNetDecoder",parameters:[{name:"config",val:": ProphetNetConfig"},{name:"word_embeddings",val:": Embedding = None"}],source:"https://github.com/huggingface/transformers/blob/pr_6/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L61"}}),Ae=new Ft({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetDecoder
import torch

tokenizer = XLMProphetNetTokenizer.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
model = XLMProphetNetDecoder.from_pretrained(
    "patrickvonplaten/xprophetnet-large-uncased-standalone", add_cross_attention=False
)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetDecoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetDecoder.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Se=new B({}),Ie=new y({props:{name:"class transformers.XLMProphetNetForConditionalGeneration",anchor:"transformers.XLMProphetNetForConditionalGeneration",parameters:[{name:"config",val:": ProphetNetConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_6/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L112"}}),Ge=new Ft({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetForConditionalGeneration

tokenizer = XLMProphetNetTokenizer.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
model = XLMProphetNetForConditionalGeneration.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

logits_next_token = outputs.logits  # logits to predict next token as usual
logits_ngram_next_tokens = outputs.logits_ngram  # logits to predict 2nd, 3rd, ... next tokens`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits_next_token = outputs.logits  <span class="hljs-comment"># logits to predict next token as usual</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_ngram_next_tokens = outputs.logits_ngram  <span class="hljs-comment"># logits to predict 2nd, 3rd, ... next tokens</span>`}}),Be=new B({}),Re=new y({props:{name:"class transformers.XLMProphetNetForCausalLM",anchor:"transformers.XLMProphetNetForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_6/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L138"}}),He=new Ft({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetForCausalLM
import torch

tokenizer = XLMProphetNetTokenizer.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
model = XLMProphetNetForCausalLM.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits

# Model can also be used with EncoderDecoder framework
from transformers import EncoderDecoderModel, XLMProphetNetTokenizer, XLMRobertaTokenizer
import torch

tokenizer_enc = XLMRobertaTokenizer.from_pretrained("xlm-roberta-large")
tokenizer_dec = XLMProphetNetTokenizer.from_pretrained("microsoft/xprophetnet-large-wiki100-cased")
model = EncoderDecoderModel.from_encoder_decoder_pretrained(
    "xlm-roberta-large", "microsoft/xprophetnet-large-wiki100-cased"
)

ARTICLE = (
    "the us state department said wednesday it had received no "
    "formal word from bolivia that it was expelling the us ambassador there "
    "but said the charges made against him are \`\` baseless ."
)
input_ids = tokenizer_enc(ARTICLE, return_tensors="pt").input_ids
labels = tokenizer_dec("us rejects charges against its ambassador in bolivia", return_tensors="pt").input_ids
outputs = model(input_ids=input_ids, decoder_input_ids=labels[:, :-1], labels=labels[:, 1:])

loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetForCausalLM.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Model can also be used with EncoderDecoder framework</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, XLMProphetNetTokenizer, XLMRobertaTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_enc = XLMRobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_dec = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;xlm-roberta-large&quot;</span>, <span class="hljs-string">&quot;microsoft/xprophetnet-large-wiki100-cased&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;the us state department said wednesday it had received no &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;formal word from bolivia that it was expelling the us ambassador there &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;but said the charges made against him are \`\` baseless .&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer_enc(ARTICLE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer_dec(<span class="hljs-string">&quot;us rejects charges against its ambassador in bolivia&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=labels[:, :-<span class="hljs-number">1</span>], labels=labels[:, <span class="hljs-number">1</span>:])

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){X=o("meta"),Ve=p(),M=o("h1"),q=o("a"),lt=o("span"),m(le.$$.fragment),Ts=p(),pt=o("span"),Ds=i("XLM-ProphetNet"),Gt=p(),x=o("p"),dt=o("strong"),Cs=i("DISCLAIMER:"),As=i(" If you see something strange, file a "),pe=o("a"),Ss=i("Github Issue"),Is=i(` and assign
@patrickvonplaten`),Bt=p(),z=o("h2"),R=o("a"),ht=o("span"),m(de.$$.fragment),Fs=p(),ct=o("span"),Gs=i("Overview"),Rt=p(),O=o("p"),Bs=i("The XLM-ProphetNet model was proposed in "),he=o("a"),Rs=i("ProphetNet: Predicting Future N-gram for Sequence-to-Sequence Pre-training,"),Os=i(` by Yu Yan, Weizhen Qi, Yeyun Gong, Dayiheng Liu, Nan Duan, Jiusheng Chen, Ruofei
Zhang, Ming Zhou on 13 Jan, 2020.`),Ot=p(),We=o("p"),Hs=i(`XLM-ProphetNet is an encoder-decoder model and can predict n-future tokens for \u201Cngram\u201D language modeling instead of
just the next token. Its architecture is identical to ProhpetNet, but the model was trained on the multi-lingual
\u201Cwiki100\u201D Wikipedia dump.`),Ht=p(),Ue=o("p"),Vs=i("The abstract from the paper is the following:"),Vt=p(),Ye=o("p"),mt=o("em"),Ws=i(`In this paper, we present a new sequence-to-sequence pretraining model called ProphetNet, which introduces a novel
self-supervised objective named future n-gram prediction and the proposed n-stream self-attention mechanism. Instead of
the optimization of one-step ahead prediction in traditional sequence-to-sequence model, the ProphetNet is optimized by
n-step ahead prediction which predicts the next n tokens simultaneously based on previous context tokens at each time
step. The future n-gram prediction explicitly encourages the model to plan for the future tokens and prevent
overfitting on strong local correlations. We pre-train ProphetNet using a base scale dataset (16GB) and a large scale
dataset (160GB) respectively. Then we conduct experiments on CNN/DailyMail, Gigaword, and SQuAD 1.1 benchmarks for
abstractive summarization and question generation tasks. Experimental results show that ProphetNet achieves new
state-of-the-art results on all these datasets compared to the models using the same scale pretraining corpus.`),Wt=p(),H=o("p"),Us=i("The Authors\u2019 code can be found "),ce=o("a"),Ys=i("here"),Js=i("."),Ut=p(),T=o("h2"),V=o("a"),ut=o("span"),m(me.$$.fragment),Qs=p(),ft=o("span"),Zs=i("XLMProphetNetConfig"),Yt=p(),D=o("div"),m(ue.$$.fragment),Ks=p(),fe=o("p"),eo=i("This class overrides "),Je=o("a"),to=i("ProphetNetConfig"),so=i(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Jt=p(),C=o("h2"),W=o("a"),gt=o("span"),m(ge.$$.fragment),oo=p(),_t=o("span"),ro=i("XLMProphetNetTokenizer"),Qt=p(),v=o("div"),m(_e.$$.fragment),no=p(),E=o("p"),ao=i("Adapted from "),Qe=o("a"),io=i("RobertaTokenizer"),lo=i(" and "),Ze=o("a"),po=i("XLNetTokenizer"),ho=i(`. Based on
`),ke=o("a"),co=i("SentencePiece"),mo=i("."),uo=p(),ve=o("p"),fo=i("This tokenizer inherits from "),Ke=o("a"),go=i("PreTrainedTokenizer"),_o=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ko=p(),j=o("div"),m(Pe.$$.fragment),vo=p(),kt=o("p"),Po=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A XLMProphetNet sequence has the following format:`),wo=p(),we=o("ul"),et=o("li"),bo=i("single sequence: "),vt=o("code"),No=i("X [SEP]"),Lo=p(),tt=o("li"),$o=i("pair of sequences: "),Pt=o("code"),Mo=i("A [SEP] B [SEP]"),qo=p(),U=o("div"),m(be.$$.fragment),Eo=p(),wt=o("p"),yo=i("Converts a sequence of tokens (strings for sub-words) in a single string."),Xo=p(),Y=o("div"),m(Ne.$$.fragment),jo=p(),bt=o("p"),xo=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLMProphetNet
does not make use of token type ids, therefore a list of zeros is returned.`),zo=p(),J=o("div"),m(Le.$$.fragment),To=p(),$e=o("p"),Do=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Nt=o("code"),Co=i("prepare_for_model"),Ao=i(" method."),Zt=p(),A=o("h2"),Q=o("a"),Lt=o("span"),m(Me.$$.fragment),So=p(),$t=o("span"),Io=i("XLMProphetNetModel"),Kt=p(),w=o("div"),m(qe.$$.fragment),Fo=p(),Ee=o("p"),Go=i("This class overrides "),st=o("a"),Bo=i("ProphetNetModel"),Ro=i(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Oo=p(),Mt=o("p"),Ho=i("Example:"),Vo=p(),m(ye.$$.fragment),es=p(),S=o("h2"),Z=o("a"),qt=o("span"),m(Xe.$$.fragment),Wo=p(),Et=o("span"),Uo=i("XLMProphetNetEncoder"),ts=p(),b=o("div"),m(je.$$.fragment),Yo=p(),xe=o("p"),Jo=i("This class overrides "),ot=o("a"),Qo=i("ProphetNetEncoder"),Zo=i(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Ko=p(),yt=o("p"),er=i("Example:"),tr=p(),m(ze.$$.fragment),ss=p(),I=o("h2"),K=o("a"),Xt=o("span"),m(Te.$$.fragment),sr=p(),jt=o("span"),or=i("XLMProphetNetDecoder"),os=p(),N=o("div"),m(De.$$.fragment),rr=p(),Ce=o("p"),nr=i("This class overrides "),rt=o("a"),ar=i("ProphetNetDecoder"),ir=i(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),lr=p(),xt=o("p"),pr=i("Example:"),dr=p(),m(Ae.$$.fragment),rs=p(),F=o("h2"),ee=o("a"),zt=o("span"),m(Se.$$.fragment),hr=p(),Tt=o("span"),cr=i("XLMProphetNetForConditionalGeneration"),ns=p(),L=o("div"),m(Ie.$$.fragment),mr=p(),Fe=o("p"),ur=i("This class overrides "),nt=o("a"),fr=i("ProphetNetForConditionalGeneration"),gr=i(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),_r=p(),Dt=o("p"),kr=i("Example:"),vr=p(),m(Ge.$$.fragment),as=p(),G=o("h2"),te=o("a"),Ct=o("span"),m(Be.$$.fragment),Pr=p(),At=o("span"),wr=i("XLMProphetNetForCausalLM"),is=p(),$=o("div"),m(Re.$$.fragment),br=p(),Oe=o("p"),Nr=i("This class overrides "),at=o("a"),Lr=i("ProphetNetForCausalLM"),$r=i(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Mr=p(),St=o("p"),qr=i("Example:"),Er=p(),m(He.$$.fragment),this.h()},l(e){const h=An('[data-svelte="svelte-1phssyn"]',document.head);X=r(h,"META",{name:!0,content:!0}),h.forEach(s),Ve=d(e),M=r(e,"H1",{class:!0});var ps=n(M);q=r(ps,"A",{id:!0,class:!0,href:!0});var jr=n(q);lt=r(jr,"SPAN",{});var xr=n(lt);u(le.$$.fragment,xr),xr.forEach(s),jr.forEach(s),Ts=d(ps),pt=r(ps,"SPAN",{});var zr=n(pt);Ds=l(zr,"XLM-ProphetNet"),zr.forEach(s),ps.forEach(s),Gt=d(e),x=r(e,"P",{});var It=n(x);dt=r(It,"STRONG",{});var Tr=n(dt);Cs=l(Tr,"DISCLAIMER:"),Tr.forEach(s),As=l(It," If you see something strange, file a "),pe=r(It,"A",{href:!0,rel:!0});var Dr=n(pe);Ss=l(Dr,"Github Issue"),Dr.forEach(s),Is=l(It,` and assign
@patrickvonplaten`),It.forEach(s),Bt=d(e),z=r(e,"H2",{class:!0});var ds=n(z);R=r(ds,"A",{id:!0,class:!0,href:!0});var Cr=n(R);ht=r(Cr,"SPAN",{});var Ar=n(ht);u(de.$$.fragment,Ar),Ar.forEach(s),Cr.forEach(s),Fs=d(ds),ct=r(ds,"SPAN",{});var Sr=n(ct);Gs=l(Sr,"Overview"),Sr.forEach(s),ds.forEach(s),Rt=d(e),O=r(e,"P",{});var hs=n(O);Bs=l(hs,"The XLM-ProphetNet model was proposed in "),he=r(hs,"A",{href:!0,rel:!0});var Ir=n(he);Rs=l(Ir,"ProphetNet: Predicting Future N-gram for Sequence-to-Sequence Pre-training,"),Ir.forEach(s),Os=l(hs,` by Yu Yan, Weizhen Qi, Yeyun Gong, Dayiheng Liu, Nan Duan, Jiusheng Chen, Ruofei
Zhang, Ming Zhou on 13 Jan, 2020.`),hs.forEach(s),Ot=d(e),We=r(e,"P",{});var Fr=n(We);Hs=l(Fr,`XLM-ProphetNet is an encoder-decoder model and can predict n-future tokens for \u201Cngram\u201D language modeling instead of
just the next token. Its architecture is identical to ProhpetNet, but the model was trained on the multi-lingual
\u201Cwiki100\u201D Wikipedia dump.`),Fr.forEach(s),Ht=d(e),Ue=r(e,"P",{});var Gr=n(Ue);Vs=l(Gr,"The abstract from the paper is the following:"),Gr.forEach(s),Vt=d(e),Ye=r(e,"P",{});var Br=n(Ye);mt=r(Br,"EM",{});var Rr=n(mt);Ws=l(Rr,`In this paper, we present a new sequence-to-sequence pretraining model called ProphetNet, which introduces a novel
self-supervised objective named future n-gram prediction and the proposed n-stream self-attention mechanism. Instead of
the optimization of one-step ahead prediction in traditional sequence-to-sequence model, the ProphetNet is optimized by
n-step ahead prediction which predicts the next n tokens simultaneously based on previous context tokens at each time
step. The future n-gram prediction explicitly encourages the model to plan for the future tokens and prevent
overfitting on strong local correlations. We pre-train ProphetNet using a base scale dataset (16GB) and a large scale
dataset (160GB) respectively. Then we conduct experiments on CNN/DailyMail, Gigaword, and SQuAD 1.1 benchmarks for
abstractive summarization and question generation tasks. Experimental results show that ProphetNet achieves new
state-of-the-art results on all these datasets compared to the models using the same scale pretraining corpus.`),Rr.forEach(s),Br.forEach(s),Wt=d(e),H=r(e,"P",{});var cs=n(H);Us=l(cs,"The Authors\u2019 code can be found "),ce=r(cs,"A",{href:!0,rel:!0});var Or=n(ce);Ys=l(Or,"here"),Or.forEach(s),Js=l(cs,"."),cs.forEach(s),Ut=d(e),T=r(e,"H2",{class:!0});var ms=n(T);V=r(ms,"A",{id:!0,class:!0,href:!0});var Hr=n(V);ut=r(Hr,"SPAN",{});var Vr=n(ut);u(me.$$.fragment,Vr),Vr.forEach(s),Hr.forEach(s),Qs=d(ms),ft=r(ms,"SPAN",{});var Wr=n(ft);Zs=l(Wr,"XLMProphetNetConfig"),Wr.forEach(s),ms.forEach(s),Yt=d(e),D=r(e,"DIV",{class:!0});var us=n(D);u(ue.$$.fragment,us),Ks=d(us),fe=r(us,"P",{});var fs=n(fe);eo=l(fs,"This class overrides "),Je=r(fs,"A",{href:!0});var Ur=n(Je);to=l(Ur,"ProphetNetConfig"),Ur.forEach(s),so=l(fs,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),fs.forEach(s),us.forEach(s),Jt=d(e),C=r(e,"H2",{class:!0});var gs=n(C);W=r(gs,"A",{id:!0,class:!0,href:!0});var Yr=n(W);gt=r(Yr,"SPAN",{});var Jr=n(gt);u(ge.$$.fragment,Jr),Jr.forEach(s),Yr.forEach(s),oo=d(gs),_t=r(gs,"SPAN",{});var Qr=n(_t);ro=l(Qr,"XLMProphetNetTokenizer"),Qr.forEach(s),gs.forEach(s),Qt=d(e),v=r(e,"DIV",{class:!0});var P=n(v);u(_e.$$.fragment,P),no=d(P),E=r(P,"P",{});var se=n(E);ao=l(se,"Adapted from "),Qe=r(se,"A",{href:!0});var Zr=n(Qe);io=l(Zr,"RobertaTokenizer"),Zr.forEach(s),lo=l(se," and "),Ze=r(se,"A",{href:!0});var Kr=n(Ze);po=l(Kr,"XLNetTokenizer"),Kr.forEach(s),ho=l(se,`. Based on
`),ke=r(se,"A",{href:!0,rel:!0});var en=n(ke);co=l(en,"SentencePiece"),en.forEach(s),mo=l(se,"."),se.forEach(s),uo=d(P),ve=r(P,"P",{});var _s=n(ve);fo=l(_s,"This tokenizer inherits from "),Ke=r(_s,"A",{href:!0});var tn=n(Ke);go=l(tn,"PreTrainedTokenizer"),tn.forEach(s),_o=l(_s,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),_s.forEach(s),ko=d(P),j=r(P,"DIV",{class:!0});var it=n(j);u(Pe.$$.fragment,it),vo=d(it),kt=r(it,"P",{});var sn=n(kt);Po=l(sn,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A XLMProphetNet sequence has the following format:`),sn.forEach(s),wo=d(it),we=r(it,"UL",{});var ks=n(we);et=r(ks,"LI",{});var yr=n(et);bo=l(yr,"single sequence: "),vt=r(yr,"CODE",{});var on=n(vt);No=l(on,"X [SEP]"),on.forEach(s),yr.forEach(s),Lo=d(ks),tt=r(ks,"LI",{});var Xr=n(tt);$o=l(Xr,"pair of sequences: "),Pt=r(Xr,"CODE",{});var rn=n(Pt);Mo=l(rn,"A [SEP] B [SEP]"),rn.forEach(s),Xr.forEach(s),ks.forEach(s),it.forEach(s),qo=d(P),U=r(P,"DIV",{class:!0});var vs=n(U);u(be.$$.fragment,vs),Eo=d(vs),wt=r(vs,"P",{});var nn=n(wt);yo=l(nn,"Converts a sequence of tokens (strings for sub-words) in a single string."),nn.forEach(s),vs.forEach(s),Xo=d(P),Y=r(P,"DIV",{class:!0});var Ps=n(Y);u(Ne.$$.fragment,Ps),jo=d(Ps),bt=r(Ps,"P",{});var an=n(bt);xo=l(an,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLMProphetNet
does not make use of token type ids, therefore a list of zeros is returned.`),an.forEach(s),Ps.forEach(s),zo=d(P),J=r(P,"DIV",{class:!0});var ws=n(J);u(Le.$$.fragment,ws),To=d(ws),$e=r(ws,"P",{});var bs=n($e);Do=l(bs,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Nt=r(bs,"CODE",{});var ln=n(Nt);Co=l(ln,"prepare_for_model"),ln.forEach(s),Ao=l(bs," method."),bs.forEach(s),ws.forEach(s),P.forEach(s),Zt=d(e),A=r(e,"H2",{class:!0});var Ns=n(A);Q=r(Ns,"A",{id:!0,class:!0,href:!0});var pn=n(Q);Lt=r(pn,"SPAN",{});var dn=n(Lt);u(Me.$$.fragment,dn),dn.forEach(s),pn.forEach(s),So=d(Ns),$t=r(Ns,"SPAN",{});var hn=n($t);Io=l(hn,"XLMProphetNetModel"),hn.forEach(s),Ns.forEach(s),Kt=d(e),w=r(e,"DIV",{class:!0});var oe=n(w);u(qe.$$.fragment,oe),Fo=d(oe),Ee=r(oe,"P",{});var Ls=n(Ee);Go=l(Ls,"This class overrides "),st=r(Ls,"A",{href:!0});var cn=n(st);Bo=l(cn,"ProphetNetModel"),cn.forEach(s),Ro=l(Ls,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Ls.forEach(s),Oo=d(oe),Mt=r(oe,"P",{});var mn=n(Mt);Ho=l(mn,"Example:"),mn.forEach(s),Vo=d(oe),u(ye.$$.fragment,oe),oe.forEach(s),es=d(e),S=r(e,"H2",{class:!0});var $s=n(S);Z=r($s,"A",{id:!0,class:!0,href:!0});var un=n(Z);qt=r(un,"SPAN",{});var fn=n(qt);u(Xe.$$.fragment,fn),fn.forEach(s),un.forEach(s),Wo=d($s),Et=r($s,"SPAN",{});var gn=n(Et);Uo=l(gn,"XLMProphetNetEncoder"),gn.forEach(s),$s.forEach(s),ts=d(e),b=r(e,"DIV",{class:!0});var re=n(b);u(je.$$.fragment,re),Yo=d(re),xe=r(re,"P",{});var Ms=n(xe);Jo=l(Ms,"This class overrides "),ot=r(Ms,"A",{href:!0});var _n=n(ot);Qo=l(_n,"ProphetNetEncoder"),_n.forEach(s),Zo=l(Ms,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Ms.forEach(s),Ko=d(re),yt=r(re,"P",{});var kn=n(yt);er=l(kn,"Example:"),kn.forEach(s),tr=d(re),u(ze.$$.fragment,re),re.forEach(s),ss=d(e),I=r(e,"H2",{class:!0});var qs=n(I);K=r(qs,"A",{id:!0,class:!0,href:!0});var vn=n(K);Xt=r(vn,"SPAN",{});var Pn=n(Xt);u(Te.$$.fragment,Pn),Pn.forEach(s),vn.forEach(s),sr=d(qs),jt=r(qs,"SPAN",{});var wn=n(jt);or=l(wn,"XLMProphetNetDecoder"),wn.forEach(s),qs.forEach(s),os=d(e),N=r(e,"DIV",{class:!0});var ne=n(N);u(De.$$.fragment,ne),rr=d(ne),Ce=r(ne,"P",{});var Es=n(Ce);nr=l(Es,"This class overrides "),rt=r(Es,"A",{href:!0});var bn=n(rt);ar=l(bn,"ProphetNetDecoder"),bn.forEach(s),ir=l(Es,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Es.forEach(s),lr=d(ne),xt=r(ne,"P",{});var Nn=n(xt);pr=l(Nn,"Example:"),Nn.forEach(s),dr=d(ne),u(Ae.$$.fragment,ne),ne.forEach(s),rs=d(e),F=r(e,"H2",{class:!0});var ys=n(F);ee=r(ys,"A",{id:!0,class:!0,href:!0});var Ln=n(ee);zt=r(Ln,"SPAN",{});var $n=n(zt);u(Se.$$.fragment,$n),$n.forEach(s),Ln.forEach(s),hr=d(ys),Tt=r(ys,"SPAN",{});var Mn=n(Tt);cr=l(Mn,"XLMProphetNetForConditionalGeneration"),Mn.forEach(s),ys.forEach(s),ns=d(e),L=r(e,"DIV",{class:!0});var ae=n(L);u(Ie.$$.fragment,ae),mr=d(ae),Fe=r(ae,"P",{});var Xs=n(Fe);ur=l(Xs,"This class overrides "),nt=r(Xs,"A",{href:!0});var qn=n(nt);fr=l(qn,"ProphetNetForConditionalGeneration"),qn.forEach(s),gr=l(Xs,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Xs.forEach(s),_r=d(ae),Dt=r(ae,"P",{});var En=n(Dt);kr=l(En,"Example:"),En.forEach(s),vr=d(ae),u(Ge.$$.fragment,ae),ae.forEach(s),as=d(e),G=r(e,"H2",{class:!0});var js=n(G);te=r(js,"A",{id:!0,class:!0,href:!0});var yn=n(te);Ct=r(yn,"SPAN",{});var Xn=n(Ct);u(Be.$$.fragment,Xn),Xn.forEach(s),yn.forEach(s),Pr=d(js),At=r(js,"SPAN",{});var jn=n(At);wr=l(jn,"XLMProphetNetForCausalLM"),jn.forEach(s),js.forEach(s),is=d(e),$=r(e,"DIV",{class:!0});var ie=n($);u(Re.$$.fragment,ie),br=d(ie),Oe=r(ie,"P",{});var xs=n(Oe);Nr=l(xs,"This class overrides "),at=r(xs,"A",{href:!0});var xn=n(at);Lr=l(xn,"ProphetNetForCausalLM"),xn.forEach(s),$r=l(xs,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),xs.forEach(s),Mr=d(ie),St=r(ie,"P",{});var zn=n(St);qr=l(zn,"Example:"),zn.forEach(s),Er=d(ie),u(He.$$.fragment,ie),ie.forEach(s),this.h()},h(){a(X,"name","hf:doc:metadata"),a(X,"content",JSON.stringify(Fn)),a(q,"id","xlmprophetnet"),a(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(q,"href","#xlmprophetnet"),a(M,"class","relative group"),a(pe,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),a(pe,"rel","nofollow"),a(R,"id","overview"),a(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(R,"href","#overview"),a(z,"class","relative group"),a(he,"href","https://arxiv.org/abs/2001.04063"),a(he,"rel","nofollow"),a(ce,"href","https://github.com/microsoft/ProphetNet"),a(ce,"rel","nofollow"),a(V,"id","transformers.XLMProphetNetConfig"),a(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(V,"href","#transformers.XLMProphetNetConfig"),a(T,"class","relative group"),a(Je,"href","/docs/transformers/pr_6/en/model_doc/prophetnet#transformers.ProphetNetConfig"),a(D,"class","docstring"),a(W,"id","transformers.XLMProphetNetTokenizer"),a(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(W,"href","#transformers.XLMProphetNetTokenizer"),a(C,"class","relative group"),a(Qe,"href","/docs/transformers/pr_6/en/model_doc/roberta#transformers.RobertaTokenizer"),a(Ze,"href","/docs/transformers/pr_6/en/model_doc/xlnet#transformers.XLNetTokenizer"),a(ke,"href","https://github.com/google/sentencepiece"),a(ke,"rel","nofollow"),a(Ke,"href","/docs/transformers/pr_6/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),a(j,"class","docstring"),a(U,"class","docstring"),a(Y,"class","docstring"),a(J,"class","docstring"),a(v,"class","docstring"),a(Q,"id","transformers.XLMProphetNetModel"),a(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(Q,"href","#transformers.XLMProphetNetModel"),a(A,"class","relative group"),a(st,"href","/docs/transformers/pr_6/en/model_doc/prophetnet#transformers.ProphetNetModel"),a(w,"class","docstring"),a(Z,"id","transformers.XLMProphetNetEncoder"),a(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(Z,"href","#transformers.XLMProphetNetEncoder"),a(S,"class","relative group"),a(ot,"href","/docs/transformers/pr_6/en/model_doc/prophetnet#transformers.ProphetNetEncoder"),a(b,"class","docstring"),a(K,"id","transformers.XLMProphetNetDecoder"),a(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(K,"href","#transformers.XLMProphetNetDecoder"),a(I,"class","relative group"),a(rt,"href","/docs/transformers/pr_6/en/model_doc/prophetnet#transformers.ProphetNetDecoder"),a(N,"class","docstring"),a(ee,"id","transformers.XLMProphetNetForConditionalGeneration"),a(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(ee,"href","#transformers.XLMProphetNetForConditionalGeneration"),a(F,"class","relative group"),a(nt,"href","/docs/transformers/pr_6/en/model_doc/prophetnet#transformers.ProphetNetForConditionalGeneration"),a(L,"class","docstring"),a(te,"id","transformers.XLMProphetNetForCausalLM"),a(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),a(te,"href","#transformers.XLMProphetNetForCausalLM"),a(G,"class","relative group"),a(at,"href","/docs/transformers/pr_6/en/model_doc/prophetnet#transformers.ProphetNetForCausalLM"),a($,"class","docstring")},m(e,h){t(document.head,X),c(e,Ve,h),c(e,M,h),t(M,q),t(q,lt),f(le,lt,null),t(M,Ts),t(M,pt),t(pt,Ds),c(e,Gt,h),c(e,x,h),t(x,dt),t(dt,Cs),t(x,As),t(x,pe),t(pe,Ss),t(x,Is),c(e,Bt,h),c(e,z,h),t(z,R),t(R,ht),f(de,ht,null),t(z,Fs),t(z,ct),t(ct,Gs),c(e,Rt,h),c(e,O,h),t(O,Bs),t(O,he),t(he,Rs),t(O,Os),c(e,Ot,h),c(e,We,h),t(We,Hs),c(e,Ht,h),c(e,Ue,h),t(Ue,Vs),c(e,Vt,h),c(e,Ye,h),t(Ye,mt),t(mt,Ws),c(e,Wt,h),c(e,H,h),t(H,Us),t(H,ce),t(ce,Ys),t(H,Js),c(e,Ut,h),c(e,T,h),t(T,V),t(V,ut),f(me,ut,null),t(T,Qs),t(T,ft),t(ft,Zs),c(e,Yt,h),c(e,D,h),f(ue,D,null),t(D,Ks),t(D,fe),t(fe,eo),t(fe,Je),t(Je,to),t(fe,so),c(e,Jt,h),c(e,C,h),t(C,W),t(W,gt),f(ge,gt,null),t(C,oo),t(C,_t),t(_t,ro),c(e,Qt,h),c(e,v,h),f(_e,v,null),t(v,no),t(v,E),t(E,ao),t(E,Qe),t(Qe,io),t(E,lo),t(E,Ze),t(Ze,po),t(E,ho),t(E,ke),t(ke,co),t(E,mo),t(v,uo),t(v,ve),t(ve,fo),t(ve,Ke),t(Ke,go),t(ve,_o),t(v,ko),t(v,j),f(Pe,j,null),t(j,vo),t(j,kt),t(kt,Po),t(j,wo),t(j,we),t(we,et),t(et,bo),t(et,vt),t(vt,No),t(we,Lo),t(we,tt),t(tt,$o),t(tt,Pt),t(Pt,Mo),t(v,qo),t(v,U),f(be,U,null),t(U,Eo),t(U,wt),t(wt,yo),t(v,Xo),t(v,Y),f(Ne,Y,null),t(Y,jo),t(Y,bt),t(bt,xo),t(v,zo),t(v,J),f(Le,J,null),t(J,To),t(J,$e),t($e,Do),t($e,Nt),t(Nt,Co),t($e,Ao),c(e,Zt,h),c(e,A,h),t(A,Q),t(Q,Lt),f(Me,Lt,null),t(A,So),t(A,$t),t($t,Io),c(e,Kt,h),c(e,w,h),f(qe,w,null),t(w,Fo),t(w,Ee),t(Ee,Go),t(Ee,st),t(st,Bo),t(Ee,Ro),t(w,Oo),t(w,Mt),t(Mt,Ho),t(w,Vo),f(ye,w,null),c(e,es,h),c(e,S,h),t(S,Z),t(Z,qt),f(Xe,qt,null),t(S,Wo),t(S,Et),t(Et,Uo),c(e,ts,h),c(e,b,h),f(je,b,null),t(b,Yo),t(b,xe),t(xe,Jo),t(xe,ot),t(ot,Qo),t(xe,Zo),t(b,Ko),t(b,yt),t(yt,er),t(b,tr),f(ze,b,null),c(e,ss,h),c(e,I,h),t(I,K),t(K,Xt),f(Te,Xt,null),t(I,sr),t(I,jt),t(jt,or),c(e,os,h),c(e,N,h),f(De,N,null),t(N,rr),t(N,Ce),t(Ce,nr),t(Ce,rt),t(rt,ar),t(Ce,ir),t(N,lr),t(N,xt),t(xt,pr),t(N,dr),f(Ae,N,null),c(e,rs,h),c(e,F,h),t(F,ee),t(ee,zt),f(Se,zt,null),t(F,hr),t(F,Tt),t(Tt,cr),c(e,ns,h),c(e,L,h),f(Ie,L,null),t(L,mr),t(L,Fe),t(Fe,ur),t(Fe,nt),t(nt,fr),t(Fe,gr),t(L,_r),t(L,Dt),t(Dt,kr),t(L,vr),f(Ge,L,null),c(e,as,h),c(e,G,h),t(G,te),t(te,Ct),f(Be,Ct,null),t(G,Pr),t(G,At),t(At,wr),c(e,is,h),c(e,$,h),f(Re,$,null),t($,br),t($,Oe),t(Oe,Nr),t(Oe,at),t(at,Lr),t(Oe,$r),t($,Mr),t($,St),t(St,qr),t($,Er),f(He,$,null),ls=!0},p:Sn,i(e){ls||(g(le.$$.fragment,e),g(de.$$.fragment,e),g(me.$$.fragment,e),g(ue.$$.fragment,e),g(ge.$$.fragment,e),g(_e.$$.fragment,e),g(Pe.$$.fragment,e),g(be.$$.fragment,e),g(Ne.$$.fragment,e),g(Le.$$.fragment,e),g(Me.$$.fragment,e),g(qe.$$.fragment,e),g(ye.$$.fragment,e),g(Xe.$$.fragment,e),g(je.$$.fragment,e),g(ze.$$.fragment,e),g(Te.$$.fragment,e),g(De.$$.fragment,e),g(Ae.$$.fragment,e),g(Se.$$.fragment,e),g(Ie.$$.fragment,e),g(Ge.$$.fragment,e),g(Be.$$.fragment,e),g(Re.$$.fragment,e),g(He.$$.fragment,e),ls=!0)},o(e){_(le.$$.fragment,e),_(de.$$.fragment,e),_(me.$$.fragment,e),_(ue.$$.fragment,e),_(ge.$$.fragment,e),_(_e.$$.fragment,e),_(Pe.$$.fragment,e),_(be.$$.fragment,e),_(Ne.$$.fragment,e),_(Le.$$.fragment,e),_(Me.$$.fragment,e),_(qe.$$.fragment,e),_(ye.$$.fragment,e),_(Xe.$$.fragment,e),_(je.$$.fragment,e),_(ze.$$.fragment,e),_(Te.$$.fragment,e),_(De.$$.fragment,e),_(Ae.$$.fragment,e),_(Se.$$.fragment,e),_(Ie.$$.fragment,e),_(Ge.$$.fragment,e),_(Be.$$.fragment,e),_(Re.$$.fragment,e),_(He.$$.fragment,e),ls=!1},d(e){s(X),e&&s(Ve),e&&s(M),k(le),e&&s(Gt),e&&s(x),e&&s(Bt),e&&s(z),k(de),e&&s(Rt),e&&s(O),e&&s(Ot),e&&s(We),e&&s(Ht),e&&s(Ue),e&&s(Vt),e&&s(Ye),e&&s(Wt),e&&s(H),e&&s(Ut),e&&s(T),k(me),e&&s(Yt),e&&s(D),k(ue),e&&s(Jt),e&&s(C),k(ge),e&&s(Qt),e&&s(v),k(_e),k(Pe),k(be),k(Ne),k(Le),e&&s(Zt),e&&s(A),k(Me),e&&s(Kt),e&&s(w),k(qe),k(ye),e&&s(es),e&&s(S),k(Xe),e&&s(ts),e&&s(b),k(je),k(ze),e&&s(ss),e&&s(I),k(Te),e&&s(os),e&&s(N),k(De),k(Ae),e&&s(rs),e&&s(F),k(Se),e&&s(ns),e&&s(L),k(Ie),k(Ge),e&&s(as),e&&s(G),k(Be),e&&s(is),e&&s($),k(Re),k(He)}}}const Fn={local:"xlmprophetnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.XLMProphetNetConfig",title:"XLMProphetNetConfig"},{local:"transformers.XLMProphetNetTokenizer",title:"XLMProphetNetTokenizer"},{local:"transformers.XLMProphetNetModel",title:"XLMProphetNetModel"},{local:"transformers.XLMProphetNetEncoder",title:"XLMProphetNetEncoder"},{local:"transformers.XLMProphetNetDecoder",title:"XLMProphetNetDecoder"},{local:"transformers.XLMProphetNetForConditionalGeneration",title:"XLMProphetNetForConditionalGeneration"},{local:"transformers.XLMProphetNetForCausalLM",title:"XLMProphetNetForCausalLM"}],title:"XLM-ProphetNet"};function Gn(zs,X,Ve){let{fw:M}=X;return zs.$$set=q=>{"fw"in q&&Ve(0,M=q.fw)},[M]}class Wn extends Tn{constructor(X){super();Dn(this,X,Gn,In,Cn,{fw:0})}}export{Wn as default,Fn as metadata};
