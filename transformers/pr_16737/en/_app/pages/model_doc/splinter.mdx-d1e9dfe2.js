import{S as ui,i as mi,s as fi,e as o,k as d,w as m,t as a,M as gi,c as s,d as n,m as c,a as r,x as f,h as i,b as l,F as e,g as h,y as g,q as _,o as k,B as v,v as _i}from"../../chunks/vendor-6b77c823.js";import{T as hi}from"../../chunks/Tip-39098574.js";import{D as O}from"../../chunks/Docstring-af1d0ae0.js";import{C as so}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as lt}from"../../chunks/IconCopyLink-7a11ce68.js";function ki(dt){let u,C,w,S,E;return{c(){u=o("p"),C=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),w=o("code"),S=a("Module"),E=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){u=s(b,"P",{});var T=r(u);C=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),w=s(T,"CODE",{});var N=r(w);S=i(N,"Module"),N.forEach(n),E=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(n)},m(b,T){h(b,u,T),e(u,C),e(u,w),e(w,S),e(u,E)},d(b){b&&n(u)}}}function vi(dt){let u,C,w,S,E;return{c(){u=o("p"),C=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),w=o("code"),S=a("Module"),E=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){u=s(b,"P",{});var T=r(u);C=i(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),w=s(T,"CODE",{});var N=r(w);S=i(N,"Module"),N.forEach(n),E=i(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(n)},m(b,T){h(b,u,T),e(u,C),e(u,w),e(w,S),e(u,E)},d(b){b&&n(u)}}}function wi(dt){let u,C,w,S,E,b,T,N,ro,bn,J,se,Ot,we,ao,Nt,io,yn,re,lo,be,co,po,Tn,ct,ho,Sn,pt,uo,zn,ht,mo,qn,I,ye,fo,ut,go,_o,ko,j,vo,mt,wo,bo,ft,yo,To,jt,So,zo,qo,Te,$o,Qt,xo,Eo,Ao,A,Po,Wt,Fo,Mo,Ut,Co,Io,Bt,Lo,Do,Ht,Oo,No,$n,L,jo,Se,Qo,Wo,ze,Uo,Bo,qe,Ho,Vo,xn,K,ae,Vt,$e,Jo,Jt,Ko,En,q,xe,Ro,R,Go,gt,Xo,Yo,Ee,Zo,es,ts,G,ns,_t,os,ss,kt,rs,as,is,Kt,ls,ds,Ae,An,X,ie,Rt,Pe,cs,Gt,ps,Pn,y,Fe,hs,Xt,us,ms,Me,fs,vt,gs,_s,ks,Q,Ce,vs,Yt,ws,bs,Ie,wt,ys,Zt,Ts,Ss,bt,zs,en,qs,$s,le,Le,xs,De,Es,tn,As,Ps,Fs,W,Oe,Ms,yt,Cs,Tt,Is,Ls,nn,Ds,Os,St,Ne,Fn,Y,de,on,je,Ns,sn,js,Mn,P,Qe,Qs,We,Ws,rn,Us,Bs,Hs,Ue,Vs,zt,Js,Ks,Rs,U,Be,Gs,an,Xs,Ys,He,qt,Zs,ln,er,tr,$t,nr,dn,or,Cn,Z,ce,cn,Ve,sr,pn,rr,In,F,Je,ar,Ke,ir,Re,lr,dr,cr,Ge,pr,Xe,hr,ur,mr,$,Ye,fr,ee,gr,xt,_r,kr,hn,vr,wr,br,pe,yr,un,Tr,Sr,Ze,Ln,te,he,mn,et,zr,fn,qr,Dn,M,tt,$r,ne,xr,gn,Er,Ar,_n,Pr,Fr,Mr,nt,Cr,ot,Ir,Lr,Dr,z,st,Or,oe,Nr,Et,jr,Qr,kn,Wr,Ur,Br,ue,Hr,vn,Vr,Jr,rt,Kr,at,On;return b=new lt({}),we=new lt({}),$e=new lt({}),xe=new O({props:{name:"class transformers.SplinterConfig",anchor:"transformers.SplinterConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"question_token_id",val:" = 104"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/splinter/configuration_splinter.py#L32",parametersDescription:[{anchor:"transformers.SplinterConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the Splinter model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16737/en/model_doc/splinter#transformers.SplinterModel">SplinterModel</a>.`,name:"vocab_size"},{anchor:"transformers.SplinterConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.SplinterConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.SplinterConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.SplinterConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.SplinterConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.SplinterConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.SplinterConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.SplinterConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.SplinterConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_16737/en/model_doc/splinter#transformers.SplinterModel">SplinterModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.SplinterConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.SplinterConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.SplinterConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.SplinterConfig.question_token_id",description:`<strong>question_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 104) &#x2014;
The id of the <code>[QUESTION]</code> token.`,name:"question_token_id"}]}}),Ae=new so({props:{code:`from transformers import SplinterModel, SplinterConfig

# Initializing a Splinter tau/splinter-base style configuration
configuration = SplinterConfig()

# Initializing a model from the tau/splinter-base style configuration
model = SplinterModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SplinterModel, SplinterConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Splinter tau/splinter-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = SplinterConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the tau/splinter-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SplinterModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Pe=new lt({}),Fe=new O({props:{name:"class transformers.SplinterTokenizer",anchor:"transformers.SplinterTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"question_token",val:" = '[QUESTION]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/splinter/tokenization_splinter.py#L75",parametersDescription:[{anchor:"transformers.SplinterTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.SplinterTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.SplinterTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.SplinterTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.SplinterTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.SplinterTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.SplinterTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.SplinterTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.SplinterTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.SplinterTokenizer.question_token",description:`<strong>question_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[QUESTION]&quot;</code>) &#x2014;
The token used for constructing question representations.`,name:"question_token"},{anchor:"transformers.SplinterTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}]}}),Ce=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.SplinterTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/splinter/tokenization_splinter.py#L218",parametersDescription:[{anchor:"transformers.SplinterTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
The question token IDs if pad_on_right, else context tokens IDs`,name:"token_ids_0"},{anchor:"transformers.SplinterTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
The context token IDs if pad_on_right, else question token IDs`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Le=new O({props:{name:"get_special_tokens_mask",anchor:"transformers.SplinterTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/splinter/tokenization_splinter.py#L250",parametersDescription:[{anchor:"transformers.SplinterTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.SplinterTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.SplinterTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Oe=new O({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.SplinterTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/splinter/tokenization_splinter.py#L278",parametersDescription:[{anchor:"transformers.SplinterTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.SplinterTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ne=new O({props:{name:"save_vocabulary",anchor:"transformers.SplinterTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/splinter/tokenization_splinter.py#L307"}}),je=new lt({}),Qe=new O({props:{name:"class transformers.SplinterTokenizerFast",anchor:"transformers.SplinterTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"question_token",val:" = '[QUESTION]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/splinter/tokenization_splinter_fast.py#L55",parametersDescription:[{anchor:"transformers.SplinterTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.SplinterTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.SplinterTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.SplinterTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.SplinterTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.SplinterTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.SplinterTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.SplinterTokenizerFast.question_token",description:`<strong>question_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[QUESTION]&quot;</code>) &#x2014;
The token used for constructing question representations.`,name:"question_token"},{anchor:"transformers.SplinterTokenizerFast.clean_text",description:`<strong>clean_text</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean the text before tokenization by removing any control characters and replacing all
whitespaces by the classic one.`,name:"clean_text"},{anchor:"transformers.SplinterTokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).
wordpieces_prefix &#x2014; (<code>str</code>, <em>optional</em>, defaults to <code>&quot;##&quot;</code>):
The prefix for subwords.`,name:"tokenize_chinese_chars"}]}}),Be=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.SplinterTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/splinter/tokenization_splinter_fast.py#L153",parametersDescription:[{anchor:"transformers.SplinterTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
The question token IDs if pad_on_right, else context tokens IDs`,name:"token_ids_0"},{anchor:"transformers.SplinterTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
The context token IDs if pad_on_right, else question token IDs`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ve=new lt({}),Je=new O({props:{name:"class transformers.SplinterModel",anchor:"transformers.SplinterModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/splinter/modeling_splinter.py#L607",parametersDescription:[{anchor:"transformers.SplinterModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16737/en/model_doc/splinter#transformers.SplinterConfig">SplinterConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16737/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ye=new O({props:{name:"forward",anchor:"transformers.SplinterModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/splinter/modeling_splinter.py#L638",parametersDescription:[{anchor:"transformers.SplinterModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16737/en/model_doc/splinter#transformers.SplinterTokenizer">SplinterTokenizer</a>. See <a href="/docs/transformers/pr_16737/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16737/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.SplinterModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SplinterModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.SplinterModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.SplinterModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SplinterModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SplinterModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SplinterModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SplinterModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16737/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SplinterModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.SplinterModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.SplinterModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.SplinterModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16737/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16737/en/model_doc/splinter#transformers.SplinterConfig"
>SplinterConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16737/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pe=new hi({props:{$$slots:{default:[ki]},$$scope:{ctx:dt}}}),Ze=new so({props:{code:`from transformers import SplinterTokenizer, SplinterModel
import torch

tokenizer = SplinterTokenizer.from_pretrained("tau/splinter-base")
model = SplinterModel.from_pretrained("tau/splinter-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SplinterTokenizer, SplinterModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SplinterTokenizer.from_pretrained(<span class="hljs-string">&quot;tau/splinter-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SplinterModel.from_pretrained(<span class="hljs-string">&quot;tau/splinter-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),et=new lt({}),tt=new O({props:{name:"class transformers.SplinterForQuestionAnswering",anchor:"transformers.SplinterForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/splinter/modeling_splinter.py#L829",parametersDescription:[{anchor:"transformers.SplinterForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16737/en/model_doc/splinter#transformers.SplinterConfig">SplinterConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16737/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),st=new O({props:{name:"forward",anchor:"transformers.SplinterForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"question_positions",val:": typing.Optional[torch.LongTensor] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/splinter/modeling_splinter.py#L840",parametersDescription:[{anchor:"transformers.SplinterForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16737/en/model_doc/splinter#transformers.SplinterTokenizer">SplinterTokenizer</a>. See <a href="/docs/transformers/pr_16737/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16737/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.SplinterForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SplinterForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.SplinterForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.SplinterForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SplinterForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SplinterForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SplinterForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SplinterForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16737/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SplinterForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.SplinterForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"},{anchor:"transformers.SplinterForQuestionAnswering.forward.question_positions",description:`<strong>question_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_questions)</code>, <em>optional</em>) &#x2014;
The positions of all question tokens. If given, start_logits and end_logits will be of shape <code>(batch_size, num_questions, sequence_length)</code>. If None, the first question token in each sequence in the batch will be
the only one for which start_logits and end_logits are calculated and they will be of shape <code>(batch_size, sequence_length)</code>.`,name:"question_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16737/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16737/en/model_doc/splinter#transformers.SplinterConfig"
>SplinterConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16737/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ue=new hi({props:{$$slots:{default:[vi]},$$scope:{ctx:dt}}}),rt=new so({props:{code:`from transformers import SplinterTokenizer, SplinterForQuestionAnswering
import torch

tokenizer = SplinterTokenizer.from_pretrained("tau/splinter-base")
model = SplinterForQuestionAnswering.from_pretrained("tau/splinter-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SplinterTokenizer, SplinterForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SplinterTokenizer.from_pretrained(<span class="hljs-string">&quot;tau/splinter-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SplinterForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;tau/splinter-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),at=new so({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){u=o("meta"),C=d(),w=o("h1"),S=o("a"),E=o("span"),m(b.$$.fragment),T=d(),N=o("span"),ro=a("Splinter"),bn=d(),J=o("h2"),se=o("a"),Ot=o("span"),m(we.$$.fragment),ao=d(),Nt=o("span"),io=a("Overview"),yn=d(),re=o("p"),lo=a("The Splinter model was proposed in "),be=o("a"),co=a("Few-Shot Question Answering by Pretraining Span Selection"),po=a(` by Ori Ram, Yuval Kirstain, Jonathan Berant, Amir Globerson, Omer Levy. Splinter
is an encoder-only transformer (similar to BERT) pretrained using the recurring span selection task on a large corpus
comprising Wikipedia and the Toronto Book Corpus.`),Tn=d(),ct=o("p"),ho=a("The abstract from the paper is the following:"),Sn=d(),pt=o("p"),uo=a(`In several question answering benchmarks, pretrained models have reached human parity through fine-tuning on an order
of 100,000 annotated questions and answers. We explore the more realistic few-shot setting, where only a few hundred
training examples are available, and observe that standard models perform poorly, highlighting the discrepancy between
current pretraining objectives and question answering. We propose a new pretraining scheme tailored for question
answering: recurring span selection. Given a passage with multiple sets of recurring spans, we mask in each set all
recurring spans but one, and ask the model to select the correct span in the passage for each masked span. Masked spans
are replaced with a special token, viewed as a question representation, that is later used during fine-tuning to select
the answer span. The resulting model obtains surprisingly good results on multiple benchmarks (e.g., 72.7 F1 on SQuAD
with only 128 training examples), while maintaining competitive performance in the high-resource setting.`),zn=d(),ht=o("p"),mo=a("Tips:"),qn=d(),I=o("ul"),ye=o("li"),fo=a(`Splinter was trained to predict answers spans conditioned on a special [QUESTION] token. These tokens contextualize
to question representations which are used to predict the answers. This layer is called QASS, and is the default
behaviour in the `),ut=o("a"),go=a("SplinterForQuestionAnswering"),_o=a(" class. Therefore:"),ko=d(),j=o("li"),vo=a("Use "),mt=o("a"),wo=a("SplinterTokenizer"),bo=a(" (rather than "),ft=o("a"),yo=a("BertTokenizer"),To=a(`), as it already
contains this special token. Also, its default behavior is to use this token when two sequences are given (for
example, in the `),jt=o("em"),So=a("run_qa.py"),zo=a(" script)."),qo=d(),Te=o("li"),$o=a("If you plan on using Splinter outside "),Qt=o("em"),xo=a("run_qa.py"),Eo=a(`, please keep in mind the question token - it might be important for
the success of your model, especially in a few-shot setting.`),Ao=d(),A=o("li"),Po=a(`Please note there are two different checkpoints for each size of Splinter. Both are basically the same, except that
one also has the pretrained wights of the QASS layer (`),Wt=o("em"),Fo=a("tau/splinter-base-qass"),Mo=a(" and "),Ut=o("em"),Co=a("tau/splinter-large-qass"),Io=a(`) and one
doesn\u2019t (`),Bt=o("em"),Lo=a("tau/splinter-base"),Do=a(" and "),Ht=o("em"),Oo=a("tau/splinter-large"),No=a(`). This is done to support randomly initializing this layer at
fine-tuning, as it is shown to yield better results for some cases in the paper.`),$n=d(),L=o("p"),jo=a("This model was contributed by "),Se=o("a"),Qo=a("yuvalkirstain"),Wo=a(" and "),ze=o("a"),Uo=a("oriram"),Bo=a(". The original code can be found "),qe=o("a"),Ho=a("here"),Vo=a("."),xn=d(),K=o("h2"),ae=o("a"),Vt=o("span"),m($e.$$.fragment),Jo=d(),Jt=o("span"),Ko=a("SplinterConfig"),En=d(),q=o("div"),m(xe.$$.fragment),Ro=d(),R=o("p"),Go=a("This is the configuration class to store the configuration of a "),gt=o("a"),Xo=a("SplinterModel"),Yo=a(`. It is used to instantiate an
Splinter model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Splinter
`),Ee=o("a"),Zo=a("tau/splinter-base"),es=a(" architecture."),ts=d(),G=o("p"),ns=a("Configuration objects inherit from "),_t=o("a"),os=a("PretrainedConfig"),ss=a(` and can be used to control the model outputs. Read the
documentation from `),kt=o("a"),rs=a("PretrainedConfig"),as=a(" for more information."),is=d(),Kt=o("p"),ls=a("Example:"),ds=d(),m(Ae.$$.fragment),An=d(),X=o("h2"),ie=o("a"),Rt=o("span"),m(Pe.$$.fragment),cs=d(),Gt=o("span"),ps=a("SplinterTokenizer"),Pn=d(),y=o("div"),m(Fe.$$.fragment),hs=d(),Xt=o("p"),us=a("Construct a Splinter tokenizer. Based on WordPiece."),ms=d(),Me=o("p"),fs=a("This tokenizer inherits from "),vt=o("a"),gs=a("PreTrainedTokenizer"),_s=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ks=d(),Q=o("div"),m(Ce.$$.fragment),vs=d(),Yt=o("p"),ws=a(`Build model inputs from a pair of sequence for question answering tasks by concatenating and adding special
tokens. A Splinter sequence has the following format:`),bs=d(),Ie=o("ul"),wt=o("li"),ys=a("single sequence: "),Zt=o("code"),Ts=a("[CLS] X [SEP]"),Ss=d(),bt=o("li"),zs=a("pair of sequences for question answering: "),en=o("code"),qs=a("[CLS] question_tokens [QUESTION] . [SEP] context_tokens [SEP]"),$s=d(),le=o("div"),m(Le.$$.fragment),xs=d(),De=o("p"),Es=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),tn=o("code"),As=a("prepare_for_model"),Ps=a(" method."),Fs=d(),W=o("div"),m(Oe.$$.fragment),Ms=d(),yt=o("p"),Cs=a("Create the token type IDs corresponding to the sequences passed. "),Tt=o("a"),Is=a(`What are token type
IDs?`),Ls=d(),nn=o("p"),Ds=a("Should be overridden in a subclass if the model has a special way of building those."),Os=d(),St=o("div"),m(Ne.$$.fragment),Fn=d(),Y=o("h2"),de=o("a"),on=o("span"),m(je.$$.fragment),Ns=d(),sn=o("span"),js=a("SplinterTokenizerFast"),Mn=d(),P=o("div"),m(Qe.$$.fragment),Qs=d(),We=o("p"),Ws=a("Construct a \u201Cfast\u201D Splinter tokenizer (backed by HuggingFace\u2019s "),rn=o("em"),Us=a("tokenizers"),Bs=a(" library). Based on WordPiece."),Hs=d(),Ue=o("p"),Vs=a("This tokenizer inherits from "),zt=o("a"),Js=a("PreTrainedTokenizerFast"),Ks=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Rs=d(),U=o("div"),m(Be.$$.fragment),Gs=d(),an=o("p"),Xs=a(`Build model inputs from a pair of sequence for question answering tasks by concatenating and adding special
tokens. A Splinter sequence has the following format:`),Ys=d(),He=o("ul"),qt=o("li"),Zs=a("single sequence: "),ln=o("code"),er=a("[CLS] X [SEP]"),tr=d(),$t=o("li"),nr=a("pair of sequences for question answering: "),dn=o("code"),or=a("[CLS] question_tokens [QUESTION] . [SEP] context_tokens [SEP]"),Cn=d(),Z=o("h2"),ce=o("a"),cn=o("span"),m(Ve.$$.fragment),sr=d(),pn=o("span"),rr=a("SplinterModel"),In=d(),F=o("div"),m(Je.$$.fragment),ar=d(),Ke=o("p"),ir=a(`The bare Splinter Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Re=o("a"),lr=a("torch.nn.Module"),dr=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cr=d(),Ge=o("p"),pr=a("The model is an encoder (with only self-attention) following the architecture described in "),Xe=o("a"),hr=a(`Attention is all you
need`),ur=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones,
Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),mr=d(),$=o("div"),m(Ye.$$.fragment),fr=d(),ee=o("p"),gr=a("The "),xt=o("a"),_r=a("SplinterModel"),kr=a(" forward method, overrides the "),hn=o("code"),vr=a("__call__"),wr=a(" special method."),br=d(),m(pe.$$.fragment),yr=d(),un=o("p"),Tr=a("Example:"),Sr=d(),m(Ze.$$.fragment),Ln=d(),te=o("h2"),he=o("a"),mn=o("span"),m(et.$$.fragment),zr=d(),fn=o("span"),qr=a("SplinterForQuestionAnswering"),Dn=d(),M=o("div"),m(tt.$$.fragment),$r=d(),ne=o("p"),xr=a(`Splinter Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),gn=o("code"),Er=a("span start logits"),Ar=a(" and "),_n=o("code"),Pr=a("span end logits"),Fr=a(")."),Mr=d(),nt=o("p"),Cr=a("This model is a PyTorch "),ot=o("a"),Ir=a("torch.nn.Module"),Lr=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dr=d(),z=o("div"),m(st.$$.fragment),Or=d(),oe=o("p"),Nr=a("The "),Et=o("a"),jr=a("SplinterForQuestionAnswering"),Qr=a(" forward method, overrides the "),kn=o("code"),Wr=a("__call__"),Ur=a(" special method."),Br=d(),m(ue.$$.fragment),Hr=d(),vn=o("p"),Vr=a("Example:"),Jr=d(),m(rt.$$.fragment),Kr=d(),m(at.$$.fragment),this.h()},l(t){const p=gi('[data-svelte="svelte-1phssyn"]',document.head);u=s(p,"META",{name:!0,content:!0}),p.forEach(n),C=c(t),w=s(t,"H1",{class:!0});var it=r(w);S=s(it,"A",{id:!0,class:!0,href:!0});var wn=r(S);E=s(wn,"SPAN",{});var ea=r(E);f(b.$$.fragment,ea),ea.forEach(n),wn.forEach(n),T=c(it),N=s(it,"SPAN",{});var ta=r(N);ro=i(ta,"Splinter"),ta.forEach(n),it.forEach(n),bn=c(t),J=s(t,"H2",{class:!0});var Nn=r(J);se=s(Nn,"A",{id:!0,class:!0,href:!0});var na=r(se);Ot=s(na,"SPAN",{});var oa=r(Ot);f(we.$$.fragment,oa),oa.forEach(n),na.forEach(n),ao=c(Nn),Nt=s(Nn,"SPAN",{});var sa=r(Nt);io=i(sa,"Overview"),sa.forEach(n),Nn.forEach(n),yn=c(t),re=s(t,"P",{});var jn=r(re);lo=i(jn,"The Splinter model was proposed in "),be=s(jn,"A",{href:!0,rel:!0});var ra=r(be);co=i(ra,"Few-Shot Question Answering by Pretraining Span Selection"),ra.forEach(n),po=i(jn,` by Ori Ram, Yuval Kirstain, Jonathan Berant, Amir Globerson, Omer Levy. Splinter
is an encoder-only transformer (similar to BERT) pretrained using the recurring span selection task on a large corpus
comprising Wikipedia and the Toronto Book Corpus.`),jn.forEach(n),Tn=c(t),ct=s(t,"P",{});var aa=r(ct);ho=i(aa,"The abstract from the paper is the following:"),aa.forEach(n),Sn=c(t),pt=s(t,"P",{});var ia=r(pt);uo=i(ia,`In several question answering benchmarks, pretrained models have reached human parity through fine-tuning on an order
of 100,000 annotated questions and answers. We explore the more realistic few-shot setting, where only a few hundred
training examples are available, and observe that standard models perform poorly, highlighting the discrepancy between
current pretraining objectives and question answering. We propose a new pretraining scheme tailored for question
answering: recurring span selection. Given a passage with multiple sets of recurring spans, we mask in each set all
recurring spans but one, and ask the model to select the correct span in the passage for each masked span. Masked spans
are replaced with a special token, viewed as a question representation, that is later used during fine-tuning to select
the answer span. The resulting model obtains surprisingly good results on multiple benchmarks (e.g., 72.7 F1 on SQuAD
with only 128 training examples), while maintaining competitive performance in the high-resource setting.`),ia.forEach(n),zn=c(t),ht=s(t,"P",{});var la=r(ht);mo=i(la,"Tips:"),la.forEach(n),qn=c(t),I=s(t,"UL",{});var me=r(I);ye=s(me,"LI",{});var Qn=r(ye);fo=i(Qn,`Splinter was trained to predict answers spans conditioned on a special [QUESTION] token. These tokens contextualize
to question representations which are used to predict the answers. This layer is called QASS, and is the default
behaviour in the `),ut=s(Qn,"A",{href:!0});var da=r(ut);go=i(da,"SplinterForQuestionAnswering"),da.forEach(n),_o=i(Qn," class. Therefore:"),Qn.forEach(n),ko=c(me),j=s(me,"LI",{});var fe=r(j);vo=i(fe,"Use "),mt=s(fe,"A",{href:!0});var ca=r(mt);wo=i(ca,"SplinterTokenizer"),ca.forEach(n),bo=i(fe," (rather than "),ft=s(fe,"A",{href:!0});var pa=r(ft);yo=i(pa,"BertTokenizer"),pa.forEach(n),To=i(fe,`), as it already
contains this special token. Also, its default behavior is to use this token when two sequences are given (for
example, in the `),jt=s(fe,"EM",{});var ha=r(jt);So=i(ha,"run_qa.py"),ha.forEach(n),zo=i(fe," script)."),fe.forEach(n),qo=c(me),Te=s(me,"LI",{});var Wn=r(Te);$o=i(Wn,"If you plan on using Splinter outside "),Qt=s(Wn,"EM",{});var ua=r(Qt);xo=i(ua,"run_qa.py"),ua.forEach(n),Eo=i(Wn,`, please keep in mind the question token - it might be important for
the success of your model, especially in a few-shot setting.`),Wn.forEach(n),Ao=c(me),A=s(me,"LI",{});var B=r(A);Po=i(B,`Please note there are two different checkpoints for each size of Splinter. Both are basically the same, except that
one also has the pretrained wights of the QASS layer (`),Wt=s(B,"EM",{});var ma=r(Wt);Fo=i(ma,"tau/splinter-base-qass"),ma.forEach(n),Mo=i(B," and "),Ut=s(B,"EM",{});var fa=r(Ut);Co=i(fa,"tau/splinter-large-qass"),fa.forEach(n),Io=i(B,`) and one
doesn\u2019t (`),Bt=s(B,"EM",{});var ga=r(Bt);Lo=i(ga,"tau/splinter-base"),ga.forEach(n),Do=i(B," and "),Ht=s(B,"EM",{});var _a=r(Ht);Oo=i(_a,"tau/splinter-large"),_a.forEach(n),No=i(B,`). This is done to support randomly initializing this layer at
fine-tuning, as it is shown to yield better results for some cases in the paper.`),B.forEach(n),me.forEach(n),$n=c(t),L=s(t,"P",{});var ge=r(L);jo=i(ge,"This model was contributed by "),Se=s(ge,"A",{href:!0,rel:!0});var ka=r(Se);Qo=i(ka,"yuvalkirstain"),ka.forEach(n),Wo=i(ge," and "),ze=s(ge,"A",{href:!0,rel:!0});var va=r(ze);Uo=i(va,"oriram"),va.forEach(n),Bo=i(ge,". The original code can be found "),qe=s(ge,"A",{href:!0,rel:!0});var wa=r(qe);Ho=i(wa,"here"),wa.forEach(n),Vo=i(ge,"."),ge.forEach(n),xn=c(t),K=s(t,"H2",{class:!0});var Un=r(K);ae=s(Un,"A",{id:!0,class:!0,href:!0});var ba=r(ae);Vt=s(ba,"SPAN",{});var ya=r(Vt);f($e.$$.fragment,ya),ya.forEach(n),ba.forEach(n),Jo=c(Un),Jt=s(Un,"SPAN",{});var Ta=r(Jt);Ko=i(Ta,"SplinterConfig"),Ta.forEach(n),Un.forEach(n),En=c(t),q=s(t,"DIV",{class:!0});var H=r(q);f(xe.$$.fragment,H),Ro=c(H),R=s(H,"P",{});var At=r(R);Go=i(At,"This is the configuration class to store the configuration of a "),gt=s(At,"A",{href:!0});var Sa=r(gt);Xo=i(Sa,"SplinterModel"),Sa.forEach(n),Yo=i(At,`. It is used to instantiate an
Splinter model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Splinter
`),Ee=s(At,"A",{href:!0,rel:!0});var za=r(Ee);Zo=i(za,"tau/splinter-base"),za.forEach(n),es=i(At," architecture."),At.forEach(n),ts=c(H),G=s(H,"P",{});var Pt=r(G);ns=i(Pt,"Configuration objects inherit from "),_t=s(Pt,"A",{href:!0});var qa=r(_t);os=i(qa,"PretrainedConfig"),qa.forEach(n),ss=i(Pt,` and can be used to control the model outputs. Read the
documentation from `),kt=s(Pt,"A",{href:!0});var $a=r(kt);rs=i($a,"PretrainedConfig"),$a.forEach(n),as=i(Pt," for more information."),Pt.forEach(n),is=c(H),Kt=s(H,"P",{});var xa=r(Kt);ls=i(xa,"Example:"),xa.forEach(n),ds=c(H),f(Ae.$$.fragment,H),H.forEach(n),An=c(t),X=s(t,"H2",{class:!0});var Bn=r(X);ie=s(Bn,"A",{id:!0,class:!0,href:!0});var Ea=r(ie);Rt=s(Ea,"SPAN",{});var Aa=r(Rt);f(Pe.$$.fragment,Aa),Aa.forEach(n),Ea.forEach(n),cs=c(Bn),Gt=s(Bn,"SPAN",{});var Pa=r(Gt);ps=i(Pa,"SplinterTokenizer"),Pa.forEach(n),Bn.forEach(n),Pn=c(t),y=s(t,"DIV",{class:!0});var x=r(y);f(Fe.$$.fragment,x),hs=c(x),Xt=s(x,"P",{});var Fa=r(Xt);us=i(Fa,"Construct a Splinter tokenizer. Based on WordPiece."),Fa.forEach(n),ms=c(x),Me=s(x,"P",{});var Hn=r(Me);fs=i(Hn,"This tokenizer inherits from "),vt=s(Hn,"A",{href:!0});var Ma=r(vt);gs=i(Ma,"PreTrainedTokenizer"),Ma.forEach(n),_s=i(Hn,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Hn.forEach(n),ks=c(x),Q=s(x,"DIV",{class:!0});var Ft=r(Q);f(Ce.$$.fragment,Ft),vs=c(Ft),Yt=s(Ft,"P",{});var Ca=r(Yt);ws=i(Ca,`Build model inputs from a pair of sequence for question answering tasks by concatenating and adding special
tokens. A Splinter sequence has the following format:`),Ca.forEach(n),bs=c(Ft),Ie=s(Ft,"UL",{});var Vn=r(Ie);wt=s(Vn,"LI",{});var Rr=r(wt);ys=i(Rr,"single sequence: "),Zt=s(Rr,"CODE",{});var Ia=r(Zt);Ts=i(Ia,"[CLS] X [SEP]"),Ia.forEach(n),Rr.forEach(n),Ss=c(Vn),bt=s(Vn,"LI",{});var Gr=r(bt);zs=i(Gr,"pair of sequences for question answering: "),en=s(Gr,"CODE",{});var La=r(en);qs=i(La,"[CLS] question_tokens [QUESTION] . [SEP] context_tokens [SEP]"),La.forEach(n),Gr.forEach(n),Vn.forEach(n),Ft.forEach(n),$s=c(x),le=s(x,"DIV",{class:!0});var Jn=r(le);f(Le.$$.fragment,Jn),xs=c(Jn),De=s(Jn,"P",{});var Kn=r(De);Es=i(Kn,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),tn=s(Kn,"CODE",{});var Da=r(tn);As=i(Da,"prepare_for_model"),Da.forEach(n),Ps=i(Kn," method."),Kn.forEach(n),Jn.forEach(n),Fs=c(x),W=s(x,"DIV",{class:!0});var Mt=r(W);f(Oe.$$.fragment,Mt),Ms=c(Mt),yt=s(Mt,"P",{});var Xr=r(yt);Cs=i(Xr,"Create the token type IDs corresponding to the sequences passed. "),Tt=s(Xr,"A",{href:!0});var Oa=r(Tt);Is=i(Oa,`What are token type
IDs?`),Oa.forEach(n),Xr.forEach(n),Ls=c(Mt),nn=s(Mt,"P",{});var Na=r(nn);Ds=i(Na,"Should be overridden in a subclass if the model has a special way of building those."),Na.forEach(n),Mt.forEach(n),Os=c(x),St=s(x,"DIV",{class:!0});var ja=r(St);f(Ne.$$.fragment,ja),ja.forEach(n),x.forEach(n),Fn=c(t),Y=s(t,"H2",{class:!0});var Rn=r(Y);de=s(Rn,"A",{id:!0,class:!0,href:!0});var Qa=r(de);on=s(Qa,"SPAN",{});var Wa=r(on);f(je.$$.fragment,Wa),Wa.forEach(n),Qa.forEach(n),Ns=c(Rn),sn=s(Rn,"SPAN",{});var Ua=r(sn);js=i(Ua,"SplinterTokenizerFast"),Ua.forEach(n),Rn.forEach(n),Mn=c(t),P=s(t,"DIV",{class:!0});var _e=r(P);f(Qe.$$.fragment,_e),Qs=c(_e),We=s(_e,"P",{});var Gn=r(We);Ws=i(Gn,"Construct a \u201Cfast\u201D Splinter tokenizer (backed by HuggingFace\u2019s "),rn=s(Gn,"EM",{});var Ba=r(rn);Us=i(Ba,"tokenizers"),Ba.forEach(n),Bs=i(Gn," library). Based on WordPiece."),Gn.forEach(n),Hs=c(_e),Ue=s(_e,"P",{});var Xn=r(Ue);Vs=i(Xn,"This tokenizer inherits from "),zt=s(Xn,"A",{href:!0});var Ha=r(zt);Js=i(Ha,"PreTrainedTokenizerFast"),Ha.forEach(n),Ks=i(Xn,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Xn.forEach(n),Rs=c(_e),U=s(_e,"DIV",{class:!0});var Ct=r(U);f(Be.$$.fragment,Ct),Gs=c(Ct),an=s(Ct,"P",{});var Va=r(an);Xs=i(Va,`Build model inputs from a pair of sequence for question answering tasks by concatenating and adding special
tokens. A Splinter sequence has the following format:`),Va.forEach(n),Ys=c(Ct),He=s(Ct,"UL",{});var Yn=r(He);qt=s(Yn,"LI",{});var Yr=r(qt);Zs=i(Yr,"single sequence: "),ln=s(Yr,"CODE",{});var Ja=r(ln);er=i(Ja,"[CLS] X [SEP]"),Ja.forEach(n),Yr.forEach(n),tr=c(Yn),$t=s(Yn,"LI",{});var Zr=r($t);nr=i(Zr,"pair of sequences for question answering: "),dn=s(Zr,"CODE",{});var Ka=r(dn);or=i(Ka,"[CLS] question_tokens [QUESTION] . [SEP] context_tokens [SEP]"),Ka.forEach(n),Zr.forEach(n),Yn.forEach(n),Ct.forEach(n),_e.forEach(n),Cn=c(t),Z=s(t,"H2",{class:!0});var Zn=r(Z);ce=s(Zn,"A",{id:!0,class:!0,href:!0});var Ra=r(ce);cn=s(Ra,"SPAN",{});var Ga=r(cn);f(Ve.$$.fragment,Ga),Ga.forEach(n),Ra.forEach(n),sr=c(Zn),pn=s(Zn,"SPAN",{});var Xa=r(pn);rr=i(Xa,"SplinterModel"),Xa.forEach(n),Zn.forEach(n),In=c(t),F=s(t,"DIV",{class:!0});var ke=r(F);f(Je.$$.fragment,ke),ar=c(ke),Ke=s(ke,"P",{});var eo=r(Ke);ir=i(eo,`The bare Splinter Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Re=s(eo,"A",{href:!0,rel:!0});var Ya=r(Re);lr=i(Ya,"torch.nn.Module"),Ya.forEach(n),dr=i(eo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),eo.forEach(n),cr=c(ke),Ge=s(ke,"P",{});var to=r(Ge);pr=i(to,"The model is an encoder (with only self-attention) following the architecture described in "),Xe=s(to,"A",{href:!0,rel:!0});var Za=r(Xe);hr=i(Za,`Attention is all you
need`),Za.forEach(n),ur=i(to,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones,
Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),to.forEach(n),mr=c(ke),$=s(ke,"DIV",{class:!0});var V=r($);f(Ye.$$.fragment,V),fr=c(V),ee=s(V,"P",{});var It=r(ee);gr=i(It,"The "),xt=s(It,"A",{href:!0});var ei=r(xt);_r=i(ei,"SplinterModel"),ei.forEach(n),kr=i(It," forward method, overrides the "),hn=s(It,"CODE",{});var ti=r(hn);vr=i(ti,"__call__"),ti.forEach(n),wr=i(It," special method."),It.forEach(n),br=c(V),f(pe.$$.fragment,V),yr=c(V),un=s(V,"P",{});var ni=r(un);Tr=i(ni,"Example:"),ni.forEach(n),Sr=c(V),f(Ze.$$.fragment,V),V.forEach(n),ke.forEach(n),Ln=c(t),te=s(t,"H2",{class:!0});var no=r(te);he=s(no,"A",{id:!0,class:!0,href:!0});var oi=r(he);mn=s(oi,"SPAN",{});var si=r(mn);f(et.$$.fragment,si),si.forEach(n),oi.forEach(n),zr=c(no),fn=s(no,"SPAN",{});var ri=r(fn);qr=i(ri,"SplinterForQuestionAnswering"),ri.forEach(n),no.forEach(n),Dn=c(t),M=s(t,"DIV",{class:!0});var ve=r(M);f(tt.$$.fragment,ve),$r=c(ve),ne=s(ve,"P",{});var Lt=r(ne);xr=i(Lt,`Splinter Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),gn=s(Lt,"CODE",{});var ai=r(gn);Er=i(ai,"span start logits"),ai.forEach(n),Ar=i(Lt," and "),_n=s(Lt,"CODE",{});var ii=r(_n);Pr=i(ii,"span end logits"),ii.forEach(n),Fr=i(Lt,")."),Lt.forEach(n),Mr=c(ve),nt=s(ve,"P",{});var oo=r(nt);Cr=i(oo,"This model is a PyTorch "),ot=s(oo,"A",{href:!0,rel:!0});var li=r(ot);Ir=i(li,"torch.nn.Module"),li.forEach(n),Lr=i(oo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),oo.forEach(n),Dr=c(ve),z=s(ve,"DIV",{class:!0});var D=r(z);f(st.$$.fragment,D),Or=c(D),oe=s(D,"P",{});var Dt=r(oe);Nr=i(Dt,"The "),Et=s(Dt,"A",{href:!0});var di=r(Et);jr=i(di,"SplinterForQuestionAnswering"),di.forEach(n),Qr=i(Dt," forward method, overrides the "),kn=s(Dt,"CODE",{});var ci=r(kn);Wr=i(ci,"__call__"),ci.forEach(n),Ur=i(Dt," special method."),Dt.forEach(n),Br=c(D),f(ue.$$.fragment,D),Hr=c(D),vn=s(D,"P",{});var pi=r(vn);Vr=i(pi,"Example:"),pi.forEach(n),Jr=c(D),f(rt.$$.fragment,D),Kr=c(D),f(at.$$.fragment,D),D.forEach(n),ve.forEach(n),this.h()},h(){l(u,"name","hf:doc:metadata"),l(u,"content",JSON.stringify(bi)),l(S,"id","splinter"),l(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(S,"href","#splinter"),l(w,"class","relative group"),l(se,"id","overview"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#overview"),l(J,"class","relative group"),l(be,"href","https://arxiv.org/abs/2101.00438"),l(be,"rel","nofollow"),l(ut,"href","/docs/transformers/pr_16737/en/model_doc/splinter#transformers.SplinterForQuestionAnswering"),l(mt,"href","/docs/transformers/pr_16737/en/model_doc/splinter#transformers.SplinterTokenizer"),l(ft,"href","/docs/transformers/pr_16737/en/model_doc/bert#transformers.BertTokenizer"),l(Se,"href","https://huggingface.co/yuvalkirstain"),l(Se,"rel","nofollow"),l(ze,"href","https://huggingface.co/oriram"),l(ze,"rel","nofollow"),l(qe,"href","https://github.com/oriram/splinter"),l(qe,"rel","nofollow"),l(ae,"id","transformers.SplinterConfig"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.SplinterConfig"),l(K,"class","relative group"),l(gt,"href","/docs/transformers/pr_16737/en/model_doc/splinter#transformers.SplinterModel"),l(Ee,"href","https://huggingface.co/tau/splinter-base"),l(Ee,"rel","nofollow"),l(_t,"href","/docs/transformers/pr_16737/en/main_classes/configuration#transformers.PretrainedConfig"),l(kt,"href","/docs/transformers/pr_16737/en/main_classes/configuration#transformers.PretrainedConfig"),l(q,"class","docstring"),l(ie,"id","transformers.SplinterTokenizer"),l(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ie,"href","#transformers.SplinterTokenizer"),l(X,"class","relative group"),l(vt,"href","/docs/transformers/pr_16737/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(Q,"class","docstring"),l(le,"class","docstring"),l(Tt,"href","../glossary#token-type-ids"),l(W,"class","docstring"),l(St,"class","docstring"),l(y,"class","docstring"),l(de,"id","transformers.SplinterTokenizerFast"),l(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(de,"href","#transformers.SplinterTokenizerFast"),l(Y,"class","relative group"),l(zt,"href","/docs/transformers/pr_16737/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(U,"class","docstring"),l(P,"class","docstring"),l(ce,"id","transformers.SplinterModel"),l(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ce,"href","#transformers.SplinterModel"),l(Z,"class","relative group"),l(Re,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Re,"rel","nofollow"),l(Xe,"href","https://arxiv.org/abs/1706.03762"),l(Xe,"rel","nofollow"),l(xt,"href","/docs/transformers/pr_16737/en/model_doc/splinter#transformers.SplinterModel"),l($,"class","docstring"),l(F,"class","docstring"),l(he,"id","transformers.SplinterForQuestionAnswering"),l(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(he,"href","#transformers.SplinterForQuestionAnswering"),l(te,"class","relative group"),l(ot,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ot,"rel","nofollow"),l(Et,"href","/docs/transformers/pr_16737/en/model_doc/splinter#transformers.SplinterForQuestionAnswering"),l(z,"class","docstring"),l(M,"class","docstring")},m(t,p){e(document.head,u),h(t,C,p),h(t,w,p),e(w,S),e(S,E),g(b,E,null),e(w,T),e(w,N),e(N,ro),h(t,bn,p),h(t,J,p),e(J,se),e(se,Ot),g(we,Ot,null),e(J,ao),e(J,Nt),e(Nt,io),h(t,yn,p),h(t,re,p),e(re,lo),e(re,be),e(be,co),e(re,po),h(t,Tn,p),h(t,ct,p),e(ct,ho),h(t,Sn,p),h(t,pt,p),e(pt,uo),h(t,zn,p),h(t,ht,p),e(ht,mo),h(t,qn,p),h(t,I,p),e(I,ye),e(ye,fo),e(ye,ut),e(ut,go),e(ye,_o),e(I,ko),e(I,j),e(j,vo),e(j,mt),e(mt,wo),e(j,bo),e(j,ft),e(ft,yo),e(j,To),e(j,jt),e(jt,So),e(j,zo),e(I,qo),e(I,Te),e(Te,$o),e(Te,Qt),e(Qt,xo),e(Te,Eo),e(I,Ao),e(I,A),e(A,Po),e(A,Wt),e(Wt,Fo),e(A,Mo),e(A,Ut),e(Ut,Co),e(A,Io),e(A,Bt),e(Bt,Lo),e(A,Do),e(A,Ht),e(Ht,Oo),e(A,No),h(t,$n,p),h(t,L,p),e(L,jo),e(L,Se),e(Se,Qo),e(L,Wo),e(L,ze),e(ze,Uo),e(L,Bo),e(L,qe),e(qe,Ho),e(L,Vo),h(t,xn,p),h(t,K,p),e(K,ae),e(ae,Vt),g($e,Vt,null),e(K,Jo),e(K,Jt),e(Jt,Ko),h(t,En,p),h(t,q,p),g(xe,q,null),e(q,Ro),e(q,R),e(R,Go),e(R,gt),e(gt,Xo),e(R,Yo),e(R,Ee),e(Ee,Zo),e(R,es),e(q,ts),e(q,G),e(G,ns),e(G,_t),e(_t,os),e(G,ss),e(G,kt),e(kt,rs),e(G,as),e(q,is),e(q,Kt),e(Kt,ls),e(q,ds),g(Ae,q,null),h(t,An,p),h(t,X,p),e(X,ie),e(ie,Rt),g(Pe,Rt,null),e(X,cs),e(X,Gt),e(Gt,ps),h(t,Pn,p),h(t,y,p),g(Fe,y,null),e(y,hs),e(y,Xt),e(Xt,us),e(y,ms),e(y,Me),e(Me,fs),e(Me,vt),e(vt,gs),e(Me,_s),e(y,ks),e(y,Q),g(Ce,Q,null),e(Q,vs),e(Q,Yt),e(Yt,ws),e(Q,bs),e(Q,Ie),e(Ie,wt),e(wt,ys),e(wt,Zt),e(Zt,Ts),e(Ie,Ss),e(Ie,bt),e(bt,zs),e(bt,en),e(en,qs),e(y,$s),e(y,le),g(Le,le,null),e(le,xs),e(le,De),e(De,Es),e(De,tn),e(tn,As),e(De,Ps),e(y,Fs),e(y,W),g(Oe,W,null),e(W,Ms),e(W,yt),e(yt,Cs),e(yt,Tt),e(Tt,Is),e(W,Ls),e(W,nn),e(nn,Ds),e(y,Os),e(y,St),g(Ne,St,null),h(t,Fn,p),h(t,Y,p),e(Y,de),e(de,on),g(je,on,null),e(Y,Ns),e(Y,sn),e(sn,js),h(t,Mn,p),h(t,P,p),g(Qe,P,null),e(P,Qs),e(P,We),e(We,Ws),e(We,rn),e(rn,Us),e(We,Bs),e(P,Hs),e(P,Ue),e(Ue,Vs),e(Ue,zt),e(zt,Js),e(Ue,Ks),e(P,Rs),e(P,U),g(Be,U,null),e(U,Gs),e(U,an),e(an,Xs),e(U,Ys),e(U,He),e(He,qt),e(qt,Zs),e(qt,ln),e(ln,er),e(He,tr),e(He,$t),e($t,nr),e($t,dn),e(dn,or),h(t,Cn,p),h(t,Z,p),e(Z,ce),e(ce,cn),g(Ve,cn,null),e(Z,sr),e(Z,pn),e(pn,rr),h(t,In,p),h(t,F,p),g(Je,F,null),e(F,ar),e(F,Ke),e(Ke,ir),e(Ke,Re),e(Re,lr),e(Ke,dr),e(F,cr),e(F,Ge),e(Ge,pr),e(Ge,Xe),e(Xe,hr),e(Ge,ur),e(F,mr),e(F,$),g(Ye,$,null),e($,fr),e($,ee),e(ee,gr),e(ee,xt),e(xt,_r),e(ee,kr),e(ee,hn),e(hn,vr),e(ee,wr),e($,br),g(pe,$,null),e($,yr),e($,un),e(un,Tr),e($,Sr),g(Ze,$,null),h(t,Ln,p),h(t,te,p),e(te,he),e(he,mn),g(et,mn,null),e(te,zr),e(te,fn),e(fn,qr),h(t,Dn,p),h(t,M,p),g(tt,M,null),e(M,$r),e(M,ne),e(ne,xr),e(ne,gn),e(gn,Er),e(ne,Ar),e(ne,_n),e(_n,Pr),e(ne,Fr),e(M,Mr),e(M,nt),e(nt,Cr),e(nt,ot),e(ot,Ir),e(nt,Lr),e(M,Dr),e(M,z),g(st,z,null),e(z,Or),e(z,oe),e(oe,Nr),e(oe,Et),e(Et,jr),e(oe,Qr),e(oe,kn),e(kn,Wr),e(oe,Ur),e(z,Br),g(ue,z,null),e(z,Hr),e(z,vn),e(vn,Vr),e(z,Jr),g(rt,z,null),e(z,Kr),g(at,z,null),On=!0},p(t,[p]){const it={};p&2&&(it.$$scope={dirty:p,ctx:t}),pe.$set(it);const wn={};p&2&&(wn.$$scope={dirty:p,ctx:t}),ue.$set(wn)},i(t){On||(_(b.$$.fragment,t),_(we.$$.fragment,t),_($e.$$.fragment,t),_(xe.$$.fragment,t),_(Ae.$$.fragment,t),_(Pe.$$.fragment,t),_(Fe.$$.fragment,t),_(Ce.$$.fragment,t),_(Le.$$.fragment,t),_(Oe.$$.fragment,t),_(Ne.$$.fragment,t),_(je.$$.fragment,t),_(Qe.$$.fragment,t),_(Be.$$.fragment,t),_(Ve.$$.fragment,t),_(Je.$$.fragment,t),_(Ye.$$.fragment,t),_(pe.$$.fragment,t),_(Ze.$$.fragment,t),_(et.$$.fragment,t),_(tt.$$.fragment,t),_(st.$$.fragment,t),_(ue.$$.fragment,t),_(rt.$$.fragment,t),_(at.$$.fragment,t),On=!0)},o(t){k(b.$$.fragment,t),k(we.$$.fragment,t),k($e.$$.fragment,t),k(xe.$$.fragment,t),k(Ae.$$.fragment,t),k(Pe.$$.fragment,t),k(Fe.$$.fragment,t),k(Ce.$$.fragment,t),k(Le.$$.fragment,t),k(Oe.$$.fragment,t),k(Ne.$$.fragment,t),k(je.$$.fragment,t),k(Qe.$$.fragment,t),k(Be.$$.fragment,t),k(Ve.$$.fragment,t),k(Je.$$.fragment,t),k(Ye.$$.fragment,t),k(pe.$$.fragment,t),k(Ze.$$.fragment,t),k(et.$$.fragment,t),k(tt.$$.fragment,t),k(st.$$.fragment,t),k(ue.$$.fragment,t),k(rt.$$.fragment,t),k(at.$$.fragment,t),On=!1},d(t){n(u),t&&n(C),t&&n(w),v(b),t&&n(bn),t&&n(J),v(we),t&&n(yn),t&&n(re),t&&n(Tn),t&&n(ct),t&&n(Sn),t&&n(pt),t&&n(zn),t&&n(ht),t&&n(qn),t&&n(I),t&&n($n),t&&n(L),t&&n(xn),t&&n(K),v($e),t&&n(En),t&&n(q),v(xe),v(Ae),t&&n(An),t&&n(X),v(Pe),t&&n(Pn),t&&n(y),v(Fe),v(Ce),v(Le),v(Oe),v(Ne),t&&n(Fn),t&&n(Y),v(je),t&&n(Mn),t&&n(P),v(Qe),v(Be),t&&n(Cn),t&&n(Z),v(Ve),t&&n(In),t&&n(F),v(Je),v(Ye),v(pe),v(Ze),t&&n(Ln),t&&n(te),v(et),t&&n(Dn),t&&n(M),v(tt),v(st),v(ue),v(rt),v(at)}}}const bi={local:"splinter",sections:[{local:"overview",title:"Overview"},{local:"transformers.SplinterConfig",title:"SplinterConfig"},{local:"transformers.SplinterTokenizer",title:"SplinterTokenizer"},{local:"transformers.SplinterTokenizerFast",title:"SplinterTokenizerFast"},{local:"transformers.SplinterModel",title:"SplinterModel"},{local:"transformers.SplinterForQuestionAnswering",title:"SplinterForQuestionAnswering"}],title:"Splinter"};function yi(dt){return _i(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xi extends ui{constructor(u){super();mi(this,u,yi,wi,fi,{})}}export{xi as default,bi as metadata};
