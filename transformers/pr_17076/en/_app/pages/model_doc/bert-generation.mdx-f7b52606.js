import{S as sa,i as aa,s as ia,e as s,k as h,w as k,t as n,M as da,c as a,d as o,m as p,a as i,x as w,h as r,b as l,F as e,g as f,y,q as T,o as $,B as E,v as la,L as Zr}from"../../chunks/vendor-6b77c823.js";import{T as ra}from"../../chunks/Tip-39098574.js";import{D as Je}from"../../chunks/Docstring-1088f2fb.js";import{C as Qt}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as yt}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Yr}from"../../chunks/ExampleCodeBlock-5212b321.js";function ca(j){let u,v,_,m,b;return m=new Qt({props:{code:`from transformers import BertGenerationConfig, BertGenerationEncoder

# Initializing a BertGeneration config
configuration = BertGenerationConfig()

# Initializing a model from the config
model = BertGenerationEncoder(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertGenerationConfig, BertGenerationEncoder

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BertGeneration config</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BertGenerationConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the config</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertGenerationEncoder(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){u=s("p"),v=n("Examples:"),_=h(),k(m.$$.fragment)},l(d){u=a(d,"P",{});var g=i(u);v=r(g,"Examples:"),g.forEach(o),_=p(d),w(m.$$.fragment,d)},m(d,g){f(d,u,g),e(u,v),f(d,_,g),y(m,d,g),b=!0},p:Zr,i(d){b||(T(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&o(u),d&&o(_),E(m,d)}}}function ha(j){let u,v,_,m,b;return{c(){u=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),m=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=a(d,"P",{});var g=i(u);v=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(g,"CODE",{});var A=i(_);m=r(A,"Module"),A.forEach(o),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(d,g){f(d,u,g),e(u,v),e(u,_),e(_,m),e(u,b)},d(d){d&&o(u)}}}function pa(j){let u,v,_,m,b;return m=new Qt({props:{code:`from transformers import BertGenerationTokenizer, BertGenerationEncoder
import torch

tokenizer = BertGenerationTokenizer.from_pretrained("google/bert_for_seq_generation_L-24_bbc_encoder")
model = BertGenerationEncoder.from_pretrained("google/bert_for_seq_generation_L-24_bbc_encoder")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertGenerationTokenizer, BertGenerationEncoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertGenerationTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertGenerationEncoder.from_pretrained(<span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){u=s("p"),v=n("Example:"),_=h(),k(m.$$.fragment)},l(d){u=a(d,"P",{});var g=i(u);v=r(g,"Example:"),g.forEach(o),_=p(d),w(m.$$.fragment,d)},m(d,g){f(d,u,g),e(u,v),f(d,_,g),y(m,d,g),b=!0},p:Zr,i(d){b||(T(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&o(u),d&&o(_),E(m,d)}}}function ua(j){let u,v,_,m,b;return{c(){u=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=s("code"),m=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){u=a(d,"P",{});var g=i(u);v=r(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(g,"CODE",{});var A=i(_);m=r(A,"Module"),A.forEach(o),b=r(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(d,g){f(d,u,g),e(u,v),e(u,_),e(_,m),e(u,b)},d(d){d&&o(u)}}}function fa(j){let u,v,_,m,b;return m=new Qt({props:{code:`from transformers import BertGenerationTokenizer, BertGenerationDecoder, BertGenerationConfig
import torch

tokenizer = BertGenerationTokenizer.from_pretrained("google/bert_for_seq_generation_L-24_bbc_encoder")
config = BertGenerationConfig.from_pretrained("google/bert_for_seq_generation_L-24_bbc_encoder")
config.is_decoder = True
model = BertGenerationDecoder.from_pretrained(
    "google/bert_for_seq_generation_L-24_bbc_encoder", config=config
)

inputs = tokenizer("Hello, my dog is cute", return_token_type_ids=False, return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertGenerationTokenizer, BertGenerationDecoder, BertGenerationConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertGenerationTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = BertGenerationConfig.from_pretrained(<span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertGenerationDecoder.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/bert_for_seq_generation_L-24_bbc_encoder&quot;</span>, config=config
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_token_type_ids=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){u=s("p"),v=n("Example:"),_=h(),k(m.$$.fragment)},l(d){u=a(d,"P",{});var g=i(u);v=r(g,"Example:"),g.forEach(o),_=p(d),w(m.$$.fragment,d)},m(d,g){f(d,u,g),e(u,v),f(d,_,g),y(m,d,g),b=!0},p:Zr,i(d){b||(T(m.$$.fragment,d),b=!0)},o(d){$(m.$$.fragment,d),b=!1},d(d){d&&o(u),d&&o(_),E(m,d)}}}function ma(j){let u,v,_,m,b,d,g,A,Do,Xt,I,X,Tt,pe,So,$t,Ao,Yt,M,Mo,Ke,Lo,No,ue,Fo,Io,Zt,Qe,Oo,eo,Xe,Et,Ro,to,Ye,Wo,oo,Ze,fe,Uo,et,Ho,Vo,no,me,ro,tt,ge,Jo,ot,Ko,Qo,so,_e,ao,nt,Xo,io,Y,L,rt,Yo,Zo,st,en,tn,Bt,on,nn,rn,zt,sn,lo,N,an,be,dn,ln,ve,cn,hn,co,O,Z,Gt,ke,pn,qt,un,ho,P,we,fn,R,mn,xt,gn,_n,ye,bn,vn,kn,W,wn,at,yn,Tn,it,$n,En,Bn,ee,po,U,te,Pt,Te,zn,Ct,Gn,uo,C,$e,qn,Ee,xn,Be,Pn,Cn,jn,ze,Dn,dt,Sn,An,Mn,lt,Ge,fo,H,oe,jt,qe,Ln,Dt,Nn,mo,B,xe,Fn,St,In,On,Pe,Rn,ct,Wn,Un,Hn,Ce,Vn,je,Jn,Kn,Qn,De,Xn,Se,Yn,Zn,er,V,tr,ht,or,nr,Ae,rr,sr,ar,z,ir,At,dr,lr,Mt,cr,hr,Lt,pr,ur,Nt,fr,mr,Ft,gr,_r,It,br,vr,kr,D,Me,wr,J,yr,pt,Tr,$r,Ot,Er,Br,zr,ne,Gr,re,go,K,se,Rt,Le,qr,Wt,xr,_o,q,Ne,Pr,Fe,Cr,Ut,jr,Dr,Sr,Ie,Ar,ut,Mr,Lr,Nr,Oe,Fr,Re,Ir,Or,Rr,S,We,Wr,Q,Ur,ft,Hr,Vr,Ht,Jr,Kr,Qr,ae,Xr,ie,bo;return d=new yt({}),pe=new yt({}),me=new Qt({props:{code:`# leverage checkpoints for Bert2Bert model...
# use BERT's cls token as BOS token and sep token as EOS token
encoder = BertGenerationEncoder.from_pretrained("bert-large-uncased", bos_token_id=101, eos_token_id=102)
# add cross attention layers and use BERT's cls token as BOS token and sep token as EOS token
decoder = BertGenerationDecoder.from_pretrained(
    "bert-large-uncased", add_cross_attention=True, is_decoder=True, bos_token_id=101, eos_token_id=102
)
bert2bert = EncoderDecoderModel(encoder=encoder, decoder=decoder)

# create tokenizer...
tokenizer = BertTokenizer.from_pretrained("bert-large-uncased")

input_ids = tokenizer(
    "This is a long article to summarize", add_special_tokens=False, return_tensors="pt"
).input_ids
labels = tokenizer("This is a short summary", return_tensors="pt").input_ids

# train...
loss = bert2bert(input_ids=input_ids, decoder_input_ids=labels, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># leverage checkpoints for Bert2Bert model...</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use BERT&#x27;s cls token as BOS token and sep token as EOS token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder = BertGenerationEncoder.from_pretrained(<span class="hljs-string">&quot;bert-large-uncased&quot;</span>, bos_token_id=<span class="hljs-number">101</span>, eos_token_id=<span class="hljs-number">102</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add cross attention layers and use BERT&#x27;s cls token as BOS token and sep token as EOS token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder = BertGenerationDecoder.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;bert-large-uncased&quot;</span>, add_cross_attention=<span class="hljs-literal">True</span>, is_decoder=<span class="hljs-literal">True</span>, bos_token_id=<span class="hljs-number">101</span>, eos_token_id=<span class="hljs-number">102</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>bert2bert = EncoderDecoderModel(encoder=encoder, decoder=decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create tokenizer...</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-large-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;This is a long article to summarize&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;This is a short summary&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># train...</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = bert2bert(input_ids=input_ids, decoder_input_ids=labels, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),_e=new Qt({props:{code:`# instantiate sentence fusion model
sentence_fuser = EncoderDecoderModel.from_pretrained("google/roberta2roberta_L-24_discofuse")
tokenizer = AutoTokenizer.from_pretrained("google/roberta2roberta_L-24_discofuse")

input_ids = tokenizer(
    "This is the first sentence. This is the second sentence.", add_special_tokens=False, return_tensors="pt"
).input_ids

outputs = sentence_fuser.generate(input_ids)

print(tokenizer.decode(outputs[0]))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate sentence fusion model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sentence_fuser = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;google/roberta2roberta_L-24_discofuse&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/roberta2roberta_L-24_discofuse&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;This is the first sentence. This is the second sentence.&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = sentence_fuser.generate(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>]))`}}),ke=new yt({}),we=new Je({props:{name:"class transformers.BertGenerationConfig",anchor:"transformers.BertGenerationConfig",parameters:[{name:"vocab_size",val:" = 50358"},{name:"hidden_size",val:" = 1024"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 16"},{name:"intermediate_size",val:" = 4096"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 1"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50358) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <code>BertGeneration</code>.`,name:"vocab_size"},{anchor:"transformers.BertGenerationConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.BertGenerationConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.BertGenerationConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.BertGenerationConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often called feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.BertGenerationConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.BertGenerationConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.BertGenerationConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.BertGenerationConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BertGenerationConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertGenerationConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertGenerationConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertGenerationConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17076/src/transformers/models/bert_generation/configuration_bert_generation.py#L20"}}),ee=new Yr({props:{anchor:"transformers.BertGenerationConfig.example",$$slots:{default:[ca]},$$scope:{ctx:j}}}),Te=new yt({}),$e=new Je({props:{name:"class transformers.BertGenerationTokenizer",anchor:"transformers.BertGenerationTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '<::::>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BertGenerationTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.BertGenerationTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The begin of sequence token.`,name:"bos_token"},{anchor:"transformers.BertGenerationTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BertGenerationTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BertGenerationTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17076/src/transformers/models/bert_generation/tokenization_bert_generation.py#L41"}}),Ge=new Je({props:{name:"save_vocabulary",anchor:"transformers.BertGenerationTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17076/src/transformers/models/bert_generation/tokenization_bert_generation.py#L155"}}),qe=new yt({}),xe=new Je({props:{name:"class transformers.BertGenerationEncoder",anchor:"transformers.BertGenerationEncoder",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationEncoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17076/en/model_doc/bert-generation#transformers.BertGenerationConfig">BertGenerationConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17076/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17076/src/transformers/models/bert_generation/modeling_bert_generation.py#L253"}}),Me=new Je({props:{name:"forward",anchor:"transformers.BertGenerationEncoder.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BertGenerationEncoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17076/en/model_doc/bert-generation#transformers.BertGenerationTokenizer">BertGenerationTokenizer</a>. See <a href="/docs/transformers/pr_17076/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17076/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertGenerationEncoder.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertGenerationEncoder.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertGenerationEncoder.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertGenerationEncoder.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertGenerationEncoder.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertGenerationEncoder.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertGenerationEncoder.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17076/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertGenerationEncoder.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BertGenerationEncoder.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.`,name:"encoder_attention_mask"},{anchor:"transformers.BertGenerationEncoder.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BertGenerationEncoder.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17076/src/transformers/models/bert_generation/modeling_bert_generation.py#L294",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17076/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17076/en/model_doc/bert-generation#transformers.BertGenerationConfig"
>BertGenerationConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17076/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ne=new ra({props:{$$slots:{default:[ha]},$$scope:{ctx:j}}}),re=new Yr({props:{anchor:"transformers.BertGenerationEncoder.forward.example",$$slots:{default:[pa]},$$scope:{ctx:j}}}),Le=new yt({}),Ne=new Je({props:{name:"class transformers.BertGenerationDecoder",anchor:"transformers.BertGenerationDecoder",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertGenerationDecoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17076/en/model_doc/bert-generation#transformers.BertGenerationConfig">BertGenerationConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17076/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17076/src/transformers/models/bert_generation/modeling_bert_generation.py#L440"}}),We=new Je({props:{name:"forward",anchor:"transformers.BertGenerationDecoder.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BertGenerationDecoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17076/en/model_doc/bert-generation#transformers.BertGenerationTokenizer">BertGenerationTokenizer</a>. See <a href="/docs/transformers/pr_17076/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17076/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertGenerationDecoder.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertGenerationDecoder.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertGenerationDecoder.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertGenerationDecoder.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertGenerationDecoder.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertGenerationDecoder.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertGenerationDecoder.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17076/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertGenerationDecoder.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BertGenerationDecoder.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.BertGenerationDecoder.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.BertGenerationDecoder.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BertGenerationDecoder.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17076/src/transformers/models/bert_generation/modeling_bert_generation.py#L459",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17076/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17076/en/model_doc/bert-generation#transformers.BertGenerationConfig"
>BertGenerationConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17076/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ae=new ra({props:{$$slots:{default:[ua]},$$scope:{ctx:j}}}),ie=new Yr({props:{anchor:"transformers.BertGenerationDecoder.forward.example",$$slots:{default:[fa]},$$scope:{ctx:j}}}),{c(){u=s("meta"),v=h(),_=s("h1"),m=s("a"),b=s("span"),k(d.$$.fragment),g=h(),A=s("span"),Do=n("BertGeneration"),Xt=h(),I=s("h2"),X=s("a"),Tt=s("span"),k(pe.$$.fragment),So=h(),$t=s("span"),Ao=n("Overview"),Yt=h(),M=s("p"),Mo=n(`The BertGeneration model is a BERT model that can be leveraged for sequence-to-sequence tasks using
`),Ke=s("a"),Lo=n("EncoderDecoderModel"),No=n(" as proposed in "),ue=s("a"),Fo=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Io=n(" by Sascha Rothe, Shashi Narayan, Aliaksei Severyn."),Zt=h(),Qe=s("p"),Oo=n("The abstract from the paper is the following:"),eo=h(),Xe=s("p"),Et=s("em"),Ro=n(`Unsupervised pretraining of large neural models has recently revolutionized Natural Language Processing. By
warm-starting from the publicly released checkpoints, NLP practitioners have pushed the state-of-the-art on multiple
benchmarks while saving significant amounts of compute time. So far the focus has been mainly on the Natural Language
Understanding tasks. In this paper, we demonstrate the efficacy of pre-trained checkpoints for Sequence Generation. We
developed a Transformer-based sequence-to-sequence model that is compatible with publicly available pre-trained BERT,
GPT-2 and RoBERTa checkpoints and conducted an extensive empirical study on the utility of initializing our model, both
encoder and decoder, with these checkpoints. Our models result in new state-of-the-art results on Machine Translation,
Text Summarization, Sentence Splitting, and Sentence Fusion.`),to=h(),Ye=s("p"),Wo=n("Usage:"),oo=h(),Ze=s("ul"),fe=s("li"),Uo=n("The model can be used in combination with the "),et=s("a"),Ho=n("EncoderDecoderModel"),Vo=n(` to leverage two pretrained
BERT checkpoints for subsequent fine-tuning.`),no=h(),k(me.$$.fragment),ro=h(),tt=s("ul"),ge=s("li"),Jo=n("Pretrained "),ot=s("a"),Ko=n("EncoderDecoderModel"),Qo=n(" are also directly available in the model hub, e.g.,"),so=h(),k(_e.$$.fragment),ao=h(),nt=s("p"),Xo=n("Tips:"),io=h(),Y=s("ul"),L=s("li"),rt=s("a"),Yo=n("BertGenerationEncoder"),Zo=n(" and "),st=s("a"),en=n("BertGenerationDecoder"),tn=n(` should be used in
combination with `),Bt=s("code"),on=n("EncoderDecoder"),nn=n("."),rn=h(),zt=s("li"),sn=n(`For summarization, sentence splitting, sentence fusion and translation, no special tokens are required for the input.
Therefore, no EOS token should be added to the end of the input.`),lo=h(),N=s("p"),an=n("This model was contributed by "),be=s("a"),dn=n("patrickvonplaten"),ln=n(`. The original code can be
found `),ve=s("a"),cn=n("here"),hn=n("."),co=h(),O=s("h2"),Z=s("a"),Gt=s("span"),k(ke.$$.fragment),pn=h(),qt=s("span"),un=n("BertGenerationConfig"),ho=h(),P=s("div"),k(we.$$.fragment),fn=h(),R=s("p"),mn=n("This is the configuration class to store the configuration of a "),xt=s("code"),gn=n("BertGenerationPreTrainedModel"),_n=n(`. It is used to
instantiate a BertGeneration model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the BertGeneration
`),ye=s("a"),bn=n("google/bert_for_seq_generation_L-24_bbc_encoder"),vn=n(`
architecture.`),kn=h(),W=s("p"),wn=n("Configuration objects inherit from "),at=s("a"),yn=n("PretrainedConfig"),Tn=n(` and can be used to control the model outputs. Read the
documentation from `),it=s("a"),$n=n("PretrainedConfig"),En=n(" for more information."),Bn=h(),k(ee.$$.fragment),po=h(),U=s("h2"),te=s("a"),Pt=s("span"),k(Te.$$.fragment),zn=h(),Ct=s("span"),Gn=n("BertGenerationTokenizer"),uo=h(),C=s("div"),k($e.$$.fragment),qn=h(),Ee=s("p"),xn=n("Construct a BertGeneration tokenizer. Based on "),Be=s("a"),Pn=n("SentencePiece"),Cn=n("."),jn=h(),ze=s("p"),Dn=n("This tokenizer inherits from "),dt=s("a"),Sn=n("PreTrainedTokenizer"),An=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Mn=h(),lt=s("div"),k(Ge.$$.fragment),fo=h(),H=s("h2"),oe=s("a"),jt=s("span"),k(qe.$$.fragment),Ln=h(),Dt=s("span"),Nn=n("BertGenerationEncoder"),mo=h(),B=s("div"),k(xe.$$.fragment),Fn=h(),St=s("p"),In=n("The bare BertGeneration model transformer outputting raw hidden-states without any specific head on top."),On=h(),Pe=s("p"),Rn=n("This model inherits from "),ct=s("a"),Wn=n("PreTrainedModel"),Un=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hn=h(),Ce=s("p"),Vn=n("This model is also a PyTorch "),je=s("a"),Jn=n("torch.nn.Module"),Kn=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qn=h(),De=s("p"),Xn=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Se=s("a"),Yn=n(`Attention is
all you need`),Zn=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),er=h(),V=s("p"),tr=n("This model should be used when leveraging Bert or Roberta checkpoints for the "),ht=s("a"),or=n("EncoderDecoderModel"),nr=n(` class as
described in `),Ae=s("a"),rr=n("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),sr=n(`
by Sascha Rothe, Shashi Narayan, and Aliaksei Severyn.`),ar=h(),z=s("p"),ir=n("To behave as an decoder the model needs to be initialized with the "),At=s("code"),dr=n("is_decoder"),lr=n(` argument of the configuration set
to `),Mt=s("code"),cr=n("True"),hr=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),Lt=s("code"),pr=n("is_decoder"),ur=n(` argument and
`),Nt=s("code"),fr=n("add_cross_attention"),mr=n(" set to "),Ft=s("code"),gr=n("True"),_r=n("; an "),It=s("code"),br=n("encoder_hidden_states"),vr=n(" is then expected as an input to the forward pass."),kr=h(),D=s("div"),k(Me.$$.fragment),wr=h(),J=s("p"),yr=n("The "),pt=s("a"),Tr=n("BertGenerationEncoder"),$r=n(" forward method, overrides the "),Ot=s("code"),Er=n("__call__"),Br=n(" special method."),zr=h(),k(ne.$$.fragment),Gr=h(),k(re.$$.fragment),go=h(),K=s("h2"),se=s("a"),Rt=s("span"),k(Le.$$.fragment),qr=h(),Wt=s("span"),xr=n("BertGenerationDecoder"),_o=h(),q=s("div"),k(Ne.$$.fragment),Pr=h(),Fe=s("p"),Cr=n("BertGeneration Model with a "),Ut=s("code"),jr=n("language modeling"),Dr=n(" head on top for CLM fine-tuning."),Sr=h(),Ie=s("p"),Ar=n("This model inherits from "),ut=s("a"),Mr=n("PreTrainedModel"),Lr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nr=h(),Oe=s("p"),Fr=n("This model is also a PyTorch "),Re=s("a"),Ir=n("torch.nn.Module"),Or=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rr=h(),S=s("div"),k(We.$$.fragment),Wr=h(),Q=s("p"),Ur=n("The "),ft=s("a"),Hr=n("BertGenerationDecoder"),Vr=n(" forward method, overrides the "),Ht=s("code"),Jr=n("__call__"),Kr=n(" special method."),Qr=h(),k(ae.$$.fragment),Xr=h(),k(ie.$$.fragment),this.h()},l(t){const c=da('[data-svelte="svelte-1phssyn"]',document.head);u=a(c,"META",{name:!0,content:!0}),c.forEach(o),v=p(t),_=a(t,"H1",{class:!0});var Ue=i(_);m=a(Ue,"A",{id:!0,class:!0,href:!0});var Vt=i(m);b=a(Vt,"SPAN",{});var Jt=i(b);w(d.$$.fragment,Jt),Jt.forEach(o),Vt.forEach(o),g=p(Ue),A=a(Ue,"SPAN",{});var Kt=i(A);Do=r(Kt,"BertGeneration"),Kt.forEach(o),Ue.forEach(o),Xt=p(t),I=a(t,"H2",{class:!0});var He=i(I);X=a(He,"A",{id:!0,class:!0,href:!0});var es=i(X);Tt=a(es,"SPAN",{});var ts=i(Tt);w(pe.$$.fragment,ts),ts.forEach(o),es.forEach(o),So=p(He),$t=a(He,"SPAN",{});var os=i($t);Ao=r(os,"Overview"),os.forEach(o),He.forEach(o),Yt=p(t),M=a(t,"P",{});var mt=i(M);Mo=r(mt,`The BertGeneration model is a BERT model that can be leveraged for sequence-to-sequence tasks using
`),Ke=a(mt,"A",{href:!0});var ns=i(Ke);Lo=r(ns,"EncoderDecoderModel"),ns.forEach(o),No=r(mt," as proposed in "),ue=a(mt,"A",{href:!0,rel:!0});var rs=i(ue);Fo=r(rs,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),rs.forEach(o),Io=r(mt," by Sascha Rothe, Shashi Narayan, Aliaksei Severyn."),mt.forEach(o),Zt=p(t),Qe=a(t,"P",{});var ss=i(Qe);Oo=r(ss,"The abstract from the paper is the following:"),ss.forEach(o),eo=p(t),Xe=a(t,"P",{});var as=i(Xe);Et=a(as,"EM",{});var is=i(Et);Ro=r(is,`Unsupervised pretraining of large neural models has recently revolutionized Natural Language Processing. By
warm-starting from the publicly released checkpoints, NLP practitioners have pushed the state-of-the-art on multiple
benchmarks while saving significant amounts of compute time. So far the focus has been mainly on the Natural Language
Understanding tasks. In this paper, we demonstrate the efficacy of pre-trained checkpoints for Sequence Generation. We
developed a Transformer-based sequence-to-sequence model that is compatible with publicly available pre-trained BERT,
GPT-2 and RoBERTa checkpoints and conducted an extensive empirical study on the utility of initializing our model, both
encoder and decoder, with these checkpoints. Our models result in new state-of-the-art results on Machine Translation,
Text Summarization, Sentence Splitting, and Sentence Fusion.`),is.forEach(o),as.forEach(o),to=p(t),Ye=a(t,"P",{});var ds=i(Ye);Wo=r(ds,"Usage:"),ds.forEach(o),oo=p(t),Ze=a(t,"UL",{});var ls=i(Ze);fe=a(ls,"LI",{});var vo=i(fe);Uo=r(vo,"The model can be used in combination with the "),et=a(vo,"A",{href:!0});var cs=i(et);Ho=r(cs,"EncoderDecoderModel"),cs.forEach(o),Vo=r(vo,` to leverage two pretrained
BERT checkpoints for subsequent fine-tuning.`),vo.forEach(o),ls.forEach(o),no=p(t),w(me.$$.fragment,t),ro=p(t),tt=a(t,"UL",{});var hs=i(tt);ge=a(hs,"LI",{});var ko=i(ge);Jo=r(ko,"Pretrained "),ot=a(ko,"A",{href:!0});var ps=i(ot);Ko=r(ps,"EncoderDecoderModel"),ps.forEach(o),Qo=r(ko," are also directly available in the model hub, e.g.,"),ko.forEach(o),hs.forEach(o),so=p(t),w(_e.$$.fragment,t),ao=p(t),nt=a(t,"P",{});var us=i(nt);Xo=r(us,"Tips:"),us.forEach(o),io=p(t),Y=a(t,"UL",{});var wo=i(Y);L=a(wo,"LI",{});var Ve=i(L);rt=a(Ve,"A",{href:!0});var fs=i(rt);Yo=r(fs,"BertGenerationEncoder"),fs.forEach(o),Zo=r(Ve," and "),st=a(Ve,"A",{href:!0});var ms=i(st);en=r(ms,"BertGenerationDecoder"),ms.forEach(o),tn=r(Ve,` should be used in
combination with `),Bt=a(Ve,"CODE",{});var gs=i(Bt);on=r(gs,"EncoderDecoder"),gs.forEach(o),nn=r(Ve,"."),Ve.forEach(o),rn=p(wo),zt=a(wo,"LI",{});var _s=i(zt);sn=r(_s,`For summarization, sentence splitting, sentence fusion and translation, no special tokens are required for the input.
Therefore, no EOS token should be added to the end of the input.`),_s.forEach(o),wo.forEach(o),lo=p(t),N=a(t,"P",{});var gt=i(N);an=r(gt,"This model was contributed by "),be=a(gt,"A",{href:!0,rel:!0});var bs=i(be);dn=r(bs,"patrickvonplaten"),bs.forEach(o),ln=r(gt,`. The original code can be
found `),ve=a(gt,"A",{href:!0,rel:!0});var vs=i(ve);cn=r(vs,"here"),vs.forEach(o),hn=r(gt,"."),gt.forEach(o),co=p(t),O=a(t,"H2",{class:!0});var yo=i(O);Z=a(yo,"A",{id:!0,class:!0,href:!0});var ks=i(Z);Gt=a(ks,"SPAN",{});var ws=i(Gt);w(ke.$$.fragment,ws),ws.forEach(o),ks.forEach(o),pn=p(yo),qt=a(yo,"SPAN",{});var ys=i(qt);un=r(ys,"BertGenerationConfig"),ys.forEach(o),yo.forEach(o),ho=p(t),P=a(t,"DIV",{class:!0});var de=i(P);w(we.$$.fragment,de),fn=p(de),R=a(de,"P",{});var _t=i(R);mn=r(_t,"This is the configuration class to store the configuration of a "),xt=a(_t,"CODE",{});var Ts=i(xt);gn=r(Ts,"BertGenerationPreTrainedModel"),Ts.forEach(o),_n=r(_t,`. It is used to
instantiate a BertGeneration model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the BertGeneration
`),ye=a(_t,"A",{href:!0,rel:!0});var $s=i(ye);bn=r($s,"google/bert_for_seq_generation_L-24_bbc_encoder"),$s.forEach(o),vn=r(_t,`
architecture.`),_t.forEach(o),kn=p(de),W=a(de,"P",{});var bt=i(W);wn=r(bt,"Configuration objects inherit from "),at=a(bt,"A",{href:!0});var Es=i(at);yn=r(Es,"PretrainedConfig"),Es.forEach(o),Tn=r(bt,` and can be used to control the model outputs. Read the
documentation from `),it=a(bt,"A",{href:!0});var Bs=i(it);$n=r(Bs,"PretrainedConfig"),Bs.forEach(o),En=r(bt," for more information."),bt.forEach(o),Bn=p(de),w(ee.$$.fragment,de),de.forEach(o),po=p(t),U=a(t,"H2",{class:!0});var To=i(U);te=a(To,"A",{id:!0,class:!0,href:!0});var zs=i(te);Pt=a(zs,"SPAN",{});var Gs=i(Pt);w(Te.$$.fragment,Gs),Gs.forEach(o),zs.forEach(o),zn=p(To),Ct=a(To,"SPAN",{});var qs=i(Ct);Gn=r(qs,"BertGenerationTokenizer"),qs.forEach(o),To.forEach(o),uo=p(t),C=a(t,"DIV",{class:!0});var le=i(C);w($e.$$.fragment,le),qn=p(le),Ee=a(le,"P",{});var $o=i(Ee);xn=r($o,"Construct a BertGeneration tokenizer. Based on "),Be=a($o,"A",{href:!0,rel:!0});var xs=i(Be);Pn=r(xs,"SentencePiece"),xs.forEach(o),Cn=r($o,"."),$o.forEach(o),jn=p(le),ze=a(le,"P",{});var Eo=i(ze);Dn=r(Eo,"This tokenizer inherits from "),dt=a(Eo,"A",{href:!0});var Ps=i(dt);Sn=r(Ps,"PreTrainedTokenizer"),Ps.forEach(o),An=r(Eo,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Eo.forEach(o),Mn=p(le),lt=a(le,"DIV",{class:!0});var Cs=i(lt);w(Ge.$$.fragment,Cs),Cs.forEach(o),le.forEach(o),fo=p(t),H=a(t,"H2",{class:!0});var Bo=i(H);oe=a(Bo,"A",{id:!0,class:!0,href:!0});var js=i(oe);jt=a(js,"SPAN",{});var Ds=i(jt);w(qe.$$.fragment,Ds),Ds.forEach(o),js.forEach(o),Ln=p(Bo),Dt=a(Bo,"SPAN",{});var Ss=i(Dt);Nn=r(Ss,"BertGenerationEncoder"),Ss.forEach(o),Bo.forEach(o),mo=p(t),B=a(t,"DIV",{class:!0});var G=i(B);w(xe.$$.fragment,G),Fn=p(G),St=a(G,"P",{});var As=i(St);In=r(As,"The bare BertGeneration model transformer outputting raw hidden-states without any specific head on top."),As.forEach(o),On=p(G),Pe=a(G,"P",{});var zo=i(Pe);Rn=r(zo,"This model inherits from "),ct=a(zo,"A",{href:!0});var Ms=i(ct);Wn=r(Ms,"PreTrainedModel"),Ms.forEach(o),Un=r(zo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zo.forEach(o),Hn=p(G),Ce=a(G,"P",{});var Go=i(Ce);Vn=r(Go,"This model is also a PyTorch "),je=a(Go,"A",{href:!0,rel:!0});var Ls=i(je);Jn=r(Ls,"torch.nn.Module"),Ls.forEach(o),Kn=r(Go,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Go.forEach(o),Qn=p(G),De=a(G,"P",{});var qo=i(De);Xn=r(qo,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Se=a(qo,"A",{href:!0,rel:!0});var Ns=i(Se);Yn=r(Ns,`Attention is
all you need`),Ns.forEach(o),Zn=r(qo,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),qo.forEach(o),er=p(G),V=a(G,"P",{});var vt=i(V);tr=r(vt,"This model should be used when leveraging Bert or Roberta checkpoints for the "),ht=a(vt,"A",{href:!0});var Fs=i(ht);or=r(Fs,"EncoderDecoderModel"),Fs.forEach(o),nr=r(vt,` class as
described in `),Ae=a(vt,"A",{href:!0,rel:!0});var Is=i(Ae);rr=r(Is,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Is.forEach(o),sr=r(vt,`
by Sascha Rothe, Shashi Narayan, and Aliaksei Severyn.`),vt.forEach(o),ar=p(G),z=a(G,"P",{});var x=i(z);ir=r(x,"To behave as an decoder the model needs to be initialized with the "),At=a(x,"CODE",{});var Os=i(At);dr=r(Os,"is_decoder"),Os.forEach(o),lr=r(x,` argument of the configuration set
to `),Mt=a(x,"CODE",{});var Rs=i(Mt);cr=r(Rs,"True"),Rs.forEach(o),hr=r(x,". To be used in a Seq2Seq model, the model needs to initialized with both "),Lt=a(x,"CODE",{});var Ws=i(Lt);pr=r(Ws,"is_decoder"),Ws.forEach(o),ur=r(x,` argument and
`),Nt=a(x,"CODE",{});var Us=i(Nt);fr=r(Us,"add_cross_attention"),Us.forEach(o),mr=r(x," set to "),Ft=a(x,"CODE",{});var Hs=i(Ft);gr=r(Hs,"True"),Hs.forEach(o),_r=r(x,"; an "),It=a(x,"CODE",{});var Vs=i(It);br=r(Vs,"encoder_hidden_states"),Vs.forEach(o),vr=r(x," is then expected as an input to the forward pass."),x.forEach(o),kr=p(G),D=a(G,"DIV",{class:!0});var ce=i(D);w(Me.$$.fragment,ce),wr=p(ce),J=a(ce,"P",{});var kt=i(J);yr=r(kt,"The "),pt=a(kt,"A",{href:!0});var Js=i(pt);Tr=r(Js,"BertGenerationEncoder"),Js.forEach(o),$r=r(kt," forward method, overrides the "),Ot=a(kt,"CODE",{});var Ks=i(Ot);Er=r(Ks,"__call__"),Ks.forEach(o),Br=r(kt," special method."),kt.forEach(o),zr=p(ce),w(ne.$$.fragment,ce),Gr=p(ce),w(re.$$.fragment,ce),ce.forEach(o),G.forEach(o),go=p(t),K=a(t,"H2",{class:!0});var xo=i(K);se=a(xo,"A",{id:!0,class:!0,href:!0});var Qs=i(se);Rt=a(Qs,"SPAN",{});var Xs=i(Rt);w(Le.$$.fragment,Xs),Xs.forEach(o),Qs.forEach(o),qr=p(xo),Wt=a(xo,"SPAN",{});var Ys=i(Wt);xr=r(Ys,"BertGenerationDecoder"),Ys.forEach(o),xo.forEach(o),_o=p(t),q=a(t,"DIV",{class:!0});var F=i(q);w(Ne.$$.fragment,F),Pr=p(F),Fe=a(F,"P",{});var Po=i(Fe);Cr=r(Po,"BertGeneration Model with a "),Ut=a(Po,"CODE",{});var Zs=i(Ut);jr=r(Zs,"language modeling"),Zs.forEach(o),Dr=r(Po," head on top for CLM fine-tuning."),Po.forEach(o),Sr=p(F),Ie=a(F,"P",{});var Co=i(Ie);Ar=r(Co,"This model inherits from "),ut=a(Co,"A",{href:!0});var ea=i(ut);Mr=r(ea,"PreTrainedModel"),ea.forEach(o),Lr=r(Co,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Co.forEach(o),Nr=p(F),Oe=a(F,"P",{});var jo=i(Oe);Fr=r(jo,"This model is also a PyTorch "),Re=a(jo,"A",{href:!0,rel:!0});var ta=i(Re);Ir=r(ta,"torch.nn.Module"),ta.forEach(o),Or=r(jo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jo.forEach(o),Rr=p(F),S=a(F,"DIV",{class:!0});var he=i(S);w(We.$$.fragment,he),Wr=p(he),Q=a(he,"P",{});var wt=i(Q);Ur=r(wt,"The "),ft=a(wt,"A",{href:!0});var oa=i(ft);Hr=r(oa,"BertGenerationDecoder"),oa.forEach(o),Vr=r(wt," forward method, overrides the "),Ht=a(wt,"CODE",{});var na=i(Ht);Jr=r(na,"__call__"),na.forEach(o),Kr=r(wt," special method."),wt.forEach(o),Qr=p(he),w(ae.$$.fragment,he),Xr=p(he),w(ie.$$.fragment,he),he.forEach(o),F.forEach(o),this.h()},h(){l(u,"name","hf:doc:metadata"),l(u,"content",JSON.stringify(ga)),l(m,"id","bertgeneration"),l(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(m,"href","#bertgeneration"),l(_,"class","relative group"),l(X,"id","overview"),l(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(X,"href","#overview"),l(I,"class","relative group"),l(Ke,"href","/docs/transformers/pr_17076/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(ue,"href","https://arxiv.org/abs/1907.12461"),l(ue,"rel","nofollow"),l(et,"href","/docs/transformers/pr_17076/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(ot,"href","/docs/transformers/pr_17076/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(rt,"href","/docs/transformers/pr_17076/en/model_doc/bert-generation#transformers.BertGenerationEncoder"),l(st,"href","/docs/transformers/pr_17076/en/model_doc/bert-generation#transformers.BertGenerationDecoder"),l(be,"href","https://huggingface.co/patrickvonplaten"),l(be,"rel","nofollow"),l(ve,"href","https://tfhub.dev/s?module-type=text-generation&subtype=module,placeholder"),l(ve,"rel","nofollow"),l(Z,"id","transformers.BertGenerationConfig"),l(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Z,"href","#transformers.BertGenerationConfig"),l(O,"class","relative group"),l(ye,"href","https://huggingface.co/google/bert_for_seq_generation_L-24_bbc_encoder"),l(ye,"rel","nofollow"),l(at,"href","/docs/transformers/pr_17076/en/main_classes/configuration#transformers.PretrainedConfig"),l(it,"href","/docs/transformers/pr_17076/en/main_classes/configuration#transformers.PretrainedConfig"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"id","transformers.BertGenerationTokenizer"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#transformers.BertGenerationTokenizer"),l(U,"class","relative group"),l(Be,"href","https://github.com/google/sentencepiece"),l(Be,"rel","nofollow"),l(dt,"href","/docs/transformers/pr_17076/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(oe,"id","transformers.BertGenerationEncoder"),l(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(oe,"href","#transformers.BertGenerationEncoder"),l(H,"class","relative group"),l(ct,"href","/docs/transformers/pr_17076/en/main_classes/model#transformers.PreTrainedModel"),l(je,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(je,"rel","nofollow"),l(Se,"href","https://arxiv.org/abs/1706.03762"),l(Se,"rel","nofollow"),l(ht,"href","/docs/transformers/pr_17076/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(Ae,"href","https://arxiv.org/abs/1907.12461"),l(Ae,"rel","nofollow"),l(pt,"href","/docs/transformers/pr_17076/en/model_doc/bert-generation#transformers.BertGenerationEncoder"),l(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(se,"id","transformers.BertGenerationDecoder"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.BertGenerationDecoder"),l(K,"class","relative group"),l(ut,"href","/docs/transformers/pr_17076/en/main_classes/model#transformers.PreTrainedModel"),l(Re,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Re,"rel","nofollow"),l(ft,"href","/docs/transformers/pr_17076/en/model_doc/bert-generation#transformers.BertGenerationDecoder"),l(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,c){e(document.head,u),f(t,v,c),f(t,_,c),e(_,m),e(m,b),y(d,b,null),e(_,g),e(_,A),e(A,Do),f(t,Xt,c),f(t,I,c),e(I,X),e(X,Tt),y(pe,Tt,null),e(I,So),e(I,$t),e($t,Ao),f(t,Yt,c),f(t,M,c),e(M,Mo),e(M,Ke),e(Ke,Lo),e(M,No),e(M,ue),e(ue,Fo),e(M,Io),f(t,Zt,c),f(t,Qe,c),e(Qe,Oo),f(t,eo,c),f(t,Xe,c),e(Xe,Et),e(Et,Ro),f(t,to,c),f(t,Ye,c),e(Ye,Wo),f(t,oo,c),f(t,Ze,c),e(Ze,fe),e(fe,Uo),e(fe,et),e(et,Ho),e(fe,Vo),f(t,no,c),y(me,t,c),f(t,ro,c),f(t,tt,c),e(tt,ge),e(ge,Jo),e(ge,ot),e(ot,Ko),e(ge,Qo),f(t,so,c),y(_e,t,c),f(t,ao,c),f(t,nt,c),e(nt,Xo),f(t,io,c),f(t,Y,c),e(Y,L),e(L,rt),e(rt,Yo),e(L,Zo),e(L,st),e(st,en),e(L,tn),e(L,Bt),e(Bt,on),e(L,nn),e(Y,rn),e(Y,zt),e(zt,sn),f(t,lo,c),f(t,N,c),e(N,an),e(N,be),e(be,dn),e(N,ln),e(N,ve),e(ve,cn),e(N,hn),f(t,co,c),f(t,O,c),e(O,Z),e(Z,Gt),y(ke,Gt,null),e(O,pn),e(O,qt),e(qt,un),f(t,ho,c),f(t,P,c),y(we,P,null),e(P,fn),e(P,R),e(R,mn),e(R,xt),e(xt,gn),e(R,_n),e(R,ye),e(ye,bn),e(R,vn),e(P,kn),e(P,W),e(W,wn),e(W,at),e(at,yn),e(W,Tn),e(W,it),e(it,$n),e(W,En),e(P,Bn),y(ee,P,null),f(t,po,c),f(t,U,c),e(U,te),e(te,Pt),y(Te,Pt,null),e(U,zn),e(U,Ct),e(Ct,Gn),f(t,uo,c),f(t,C,c),y($e,C,null),e(C,qn),e(C,Ee),e(Ee,xn),e(Ee,Be),e(Be,Pn),e(Ee,Cn),e(C,jn),e(C,ze),e(ze,Dn),e(ze,dt),e(dt,Sn),e(ze,An),e(C,Mn),e(C,lt),y(Ge,lt,null),f(t,fo,c),f(t,H,c),e(H,oe),e(oe,jt),y(qe,jt,null),e(H,Ln),e(H,Dt),e(Dt,Nn),f(t,mo,c),f(t,B,c),y(xe,B,null),e(B,Fn),e(B,St),e(St,In),e(B,On),e(B,Pe),e(Pe,Rn),e(Pe,ct),e(ct,Wn),e(Pe,Un),e(B,Hn),e(B,Ce),e(Ce,Vn),e(Ce,je),e(je,Jn),e(Ce,Kn),e(B,Qn),e(B,De),e(De,Xn),e(De,Se),e(Se,Yn),e(De,Zn),e(B,er),e(B,V),e(V,tr),e(V,ht),e(ht,or),e(V,nr),e(V,Ae),e(Ae,rr),e(V,sr),e(B,ar),e(B,z),e(z,ir),e(z,At),e(At,dr),e(z,lr),e(z,Mt),e(Mt,cr),e(z,hr),e(z,Lt),e(Lt,pr),e(z,ur),e(z,Nt),e(Nt,fr),e(z,mr),e(z,Ft),e(Ft,gr),e(z,_r),e(z,It),e(It,br),e(z,vr),e(B,kr),e(B,D),y(Me,D,null),e(D,wr),e(D,J),e(J,yr),e(J,pt),e(pt,Tr),e(J,$r),e(J,Ot),e(Ot,Er),e(J,Br),e(D,zr),y(ne,D,null),e(D,Gr),y(re,D,null),f(t,go,c),f(t,K,c),e(K,se),e(se,Rt),y(Le,Rt,null),e(K,qr),e(K,Wt),e(Wt,xr),f(t,_o,c),f(t,q,c),y(Ne,q,null),e(q,Pr),e(q,Fe),e(Fe,Cr),e(Fe,Ut),e(Ut,jr),e(Fe,Dr),e(q,Sr),e(q,Ie),e(Ie,Ar),e(Ie,ut),e(ut,Mr),e(Ie,Lr),e(q,Nr),e(q,Oe),e(Oe,Fr),e(Oe,Re),e(Re,Ir),e(Oe,Or),e(q,Rr),e(q,S),y(We,S,null),e(S,Wr),e(S,Q),e(Q,Ur),e(Q,ft),e(ft,Hr),e(Q,Vr),e(Q,Ht),e(Ht,Jr),e(Q,Kr),e(S,Qr),y(ae,S,null),e(S,Xr),y(ie,S,null),bo=!0},p(t,[c]){const Ue={};c&2&&(Ue.$$scope={dirty:c,ctx:t}),ee.$set(Ue);const Vt={};c&2&&(Vt.$$scope={dirty:c,ctx:t}),ne.$set(Vt);const Jt={};c&2&&(Jt.$$scope={dirty:c,ctx:t}),re.$set(Jt);const Kt={};c&2&&(Kt.$$scope={dirty:c,ctx:t}),ae.$set(Kt);const He={};c&2&&(He.$$scope={dirty:c,ctx:t}),ie.$set(He)},i(t){bo||(T(d.$$.fragment,t),T(pe.$$.fragment,t),T(me.$$.fragment,t),T(_e.$$.fragment,t),T(ke.$$.fragment,t),T(we.$$.fragment,t),T(ee.$$.fragment,t),T(Te.$$.fragment,t),T($e.$$.fragment,t),T(Ge.$$.fragment,t),T(qe.$$.fragment,t),T(xe.$$.fragment,t),T(Me.$$.fragment,t),T(ne.$$.fragment,t),T(re.$$.fragment,t),T(Le.$$.fragment,t),T(Ne.$$.fragment,t),T(We.$$.fragment,t),T(ae.$$.fragment,t),T(ie.$$.fragment,t),bo=!0)},o(t){$(d.$$.fragment,t),$(pe.$$.fragment,t),$(me.$$.fragment,t),$(_e.$$.fragment,t),$(ke.$$.fragment,t),$(we.$$.fragment,t),$(ee.$$.fragment,t),$(Te.$$.fragment,t),$($e.$$.fragment,t),$(Ge.$$.fragment,t),$(qe.$$.fragment,t),$(xe.$$.fragment,t),$(Me.$$.fragment,t),$(ne.$$.fragment,t),$(re.$$.fragment,t),$(Le.$$.fragment,t),$(Ne.$$.fragment,t),$(We.$$.fragment,t),$(ae.$$.fragment,t),$(ie.$$.fragment,t),bo=!1},d(t){o(u),t&&o(v),t&&o(_),E(d),t&&o(Xt),t&&o(I),E(pe),t&&o(Yt),t&&o(M),t&&o(Zt),t&&o(Qe),t&&o(eo),t&&o(Xe),t&&o(to),t&&o(Ye),t&&o(oo),t&&o(Ze),t&&o(no),E(me,t),t&&o(ro),t&&o(tt),t&&o(so),E(_e,t),t&&o(ao),t&&o(nt),t&&o(io),t&&o(Y),t&&o(lo),t&&o(N),t&&o(co),t&&o(O),E(ke),t&&o(ho),t&&o(P),E(we),E(ee),t&&o(po),t&&o(U),E(Te),t&&o(uo),t&&o(C),E($e),E(Ge),t&&o(fo),t&&o(H),E(qe),t&&o(mo),t&&o(B),E(xe),E(Me),E(ne),E(re),t&&o(go),t&&o(K),E(Le),t&&o(_o),t&&o(q),E(Ne),E(We),E(ae),E(ie)}}}const ga={local:"bertgeneration",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertGenerationConfig",title:"BertGenerationConfig"},{local:"transformers.BertGenerationTokenizer",title:"BertGenerationTokenizer"},{local:"transformers.BertGenerationEncoder",title:"BertGenerationEncoder"},{local:"transformers.BertGenerationDecoder",title:"BertGenerationDecoder"}],title:"BertGeneration"};function _a(j){return la(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class $a extends sa{constructor(u){super();aa(this,u,_a,ma,ia,{})}}export{$a as default,ga as metadata};
