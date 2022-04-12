import{S as As,i as Os,s as qs,e as r,k as d,w as p,t as o,M as Ss,c as a,d as t,m as c,a as s,x as u,h as n,b as h,F as e,g as z,y as _,q as b,o as y,B as v,v as Fs}from"../../chunks/vendor-6b77c823.js";import{T as Ta}from"../../chunks/Tip-39098574.js";import{D as E}from"../../chunks/Docstring-af1d0ae0.js";import{C as js}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as zs}from"../../chunks/IconCopyLink-7a11ce68.js";function Is(H){let m,C,g,w,j;return{c(){m=r("p"),C=o(`A configuration file can be loaded and saved to disk. Loading the configuration file and using this file to
initialize a model does `),g=r("strong"),w=o("not"),j=o(" load the model weights. It only affects the model\u2019s configuration.")},l(k){m=a(k,"P",{});var P=s(m);C=n(P,`A configuration file can be loaded and saved to disk. Loading the configuration file and using this file to
initialize a model does `),g=a(P,"STRONG",{});var q=s(g);w=n(q,"not"),q.forEach(t),j=n(P," load the model weights. It only affects the model\u2019s configuration."),P.forEach(t)},m(k,P){z(k,m,P),e(m,C),e(m,g),e(g,w),e(m,j)},d(k){k&&t(m)}}}function Ls(H){let m,C,g,w,j;return{c(){m=r("p"),C=o("Passing "),g=r("code"),w=o("use_auth_token=True"),j=o(" is required when you want to use a private model.")},l(k){m=a(k,"P",{});var P=s(m);C=n(P,"Passing "),g=a(P,"CODE",{});var q=s(g);w=n(q,"use_auth_token=True"),q.forEach(t),j=n(P," is required when you want to use a private model."),P.forEach(t)},m(k,P){z(k,m,P),e(m,C),e(m,g),e(g,w),e(m,j)},d(k){k&&t(m)}}}function Ns(H){let m,C;return{c(){m=r("p"),C=o("This API is experimental and may have some slight breaking changes in the next releases.")},l(g){m=a(g,"P",{});var w=s(m);C=n(w,"This API is experimental and may have some slight breaking changes in the next releases."),w.forEach(t)},m(g,w){z(g,m,w),e(m,C)},d(g){g&&t(m)}}}function Ws(H){let m,C,g,w,j,k,P,q,jo,ao,G,zo,Ge,Ao,Oo,so,T,qo,it,So,Fo,dt,Io,Lo,ct,No,Wo,lt,Mo,Vo,io,R,X,ft,we,Bo,ht,Ro,co,l,$e,Uo,mt,Jo,Ho,K,Go,gt,Xo,Ko,S,W,pt,Qo,Yo,ut,Zo,en,Xe,tn,on,nn,x,_t,rn,an,bt,sn,dn,Ke,cn,ln,Qe,fn,hn,Ye,mn,gn,pn,Q,yt,un,_n,vt,bn,yn,vn,Y,wt,wn,$n,$t,kn,Pn,Cn,kt,En,Tn,F,Z,Pt,xn,Dn,Ct,jn,zn,An,ee,Et,On,qn,Tt,Sn,Fn,In,te,xt,Ln,Nn,Dt,Wn,Mn,Vn,oe,jt,Bn,Rn,zt,Un,Jn,Hn,A,ke,Gn,Pe,Xn,At,Kn,Qn,Yn,Ot,Zn,er,Ce,tr,ne,Ee,or,I,nr,qt,rr,ar,St,sr,ir,Ft,dr,cr,lr,re,Te,fr,xe,hr,Ze,mr,gr,pr,ae,De,ur,je,_r,et,br,yr,vr,D,ze,wr,Ae,$r,tt,kr,Pr,Cr,se,Er,It,Tr,xr,Oe,Dr,ie,qe,jr,L,zr,Lt,Ar,Or,ot,qr,Sr,Nt,Fr,Ir,Lr,M,Se,Nr,Fe,Wr,Wt,Mr,Vr,Br,de,Rr,ce,Ie,Ur,U,Jr,Mt,Hr,Gr,nt,Xr,Kr,Qr,le,Le,Yr,Vt,Zr,ea,fe,Ne,ta,Bt,oa,na,he,We,ra,Rt,aa,sa,me,Me,ia,Ut,da,ca,ge,Ve,la,Be,fa,Jt,ha,ma,ga,O,Re,pa,Ue,ua,Ht,_a,ba,ya,J,va,Gt,wa,$a,Xt,ka,Pa,Ca,Kt,Ea,lo;return k=new zs({}),we=new zs({}),$e=new E({props:{name:"class transformers.PretrainedConfig",anchor:"transformers.PretrainedConfig",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16728/src/transformers/configuration_utils.py#L54",parametersDescription:[{anchor:"transformers.PretrainedConfig.name_or_path",description:`<strong>name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&quot;</code>) &#x2014;
Store the string that was passed to <a href="/docs/transformers/pr_16728/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">PreTrainedModel.from_pretrained()</a> or
<a href="/docs/transformers/pr_16728/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">TFPreTrainedModel.from_pretrained()</a> as <code>pretrained_model_name_or_path</code> if the configuration was created
with such a method.`,name:"name_or_path"},{anchor:"transformers.PretrainedConfig.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should return all hidden-states.`,name:"output_hidden_states"},{anchor:"transformers.PretrainedConfig.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should returns all attentions.`,name:"output_attentions"},{anchor:"transformers.PretrainedConfig.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return a <a href="/docs/transformers/pr_16728/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PretrainedConfig.is_encoder_decoder",description:`<strong>is_encoder_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as an encoder/decoder or not.`,name:"is_encoder_decoder"},{anchor:"transformers.PretrainedConfig.is_decoder",description:`<strong>is_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as decoder or not (in which case it&#x2019;s used as an encoder).`,name:"is_decoder"},{anchor:"transformers.PretrainedConfig.cross_attention_hidden_size**",description:`<strong>cross_attention_hidden_size**</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
The hidden size of the cross-attention layer in case the model is used as a decoder in an encoder-decoder
setting and the cross-attention hidden dimension differs from <code>self.config.hidden_size</code>.`,name:"cross_attention_hidden_size**"},{anchor:"transformers.PretrainedConfig.add_cross_attention",description:`<strong>add_cross_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether cross-attention layers should be added to the model. Note, this option is only relevant for models
that can be used as decoder models within the <a href="/docs/transformers/pr_16728/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel">EncoderDecoderModel</a> class, which consists of all models
in <code>AUTO_MODELS_FOR_CAUSAL_LM</code>.`,name:"add_cross_attention"},{anchor:"transformers.PretrainedConfig.tie_encoder_decoder",description:`<strong>tie_encoder_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether all encoder weights should be tied to their equivalent decoder weights. This requires the encoder
and decoder model to have the exact same parameter names.`,name:"tie_encoder_decoder"},{anchor:"transformers.PretrainedConfig.prune_heads",description:`<strong>prune_heads</strong> (<code>Dict[int, List[int]]</code>, <em>optional</em>, defaults to <code>{}</code>) &#x2014;
Pruned heads of the model. The keys are the selected layer indices and the associated values, the list of
heads to prune in said layer.</p>
<p>For instance <code>{1: [0, 2], 2: [2, 3]}</code> will prune heads 0 and 2 on layer 1 and heads 2 and 3 on layer 2.`,name:"prune_heads"},{anchor:"transformers.PretrainedConfig.chunk_size_feed_forward",description:`<strong>chunk_size_feed_forward</strong> (<code>int</code>, <em>optional</em>, defaults to <code>0</code>) &#x2014;
The chunk size of all feed forward layers in the residual attention blocks. A chunk size of <code>0</code> means that
the feed forward layer is not chunked. A chunk size of n means that the feed forward layer processes <code>n</code> &lt;
sequence_length embeddings at a time. For more information on feed forward chunking, see <a href="../glossary.html#feed-forward-chunking">How does Feed
Forward Chunking work?</a>.`,name:"chunk_size_feed_forward"}],parameterGroups:[{title:"Parameters for sequence generation",parametersDescription:`
<ul>
<li><strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) \u2014
Maximum length that will be used by default in the <code>generate</code> method of the model.</li>
<li><strong>min_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) \u2014
Minimum length that will be used by default in the <code>generate</code> method of the model.</li>
<li><strong>do_sample</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) \u2014
Flag that will be used by default in the <code>generate</code> method of the model. Whether or not to use sampling ;
use greedy decoding otherwise.</li>
<li><strong>early_stopping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) \u2014
Flag that will be used by default in the <code>generate</code> method of the model. Whether to stop the beam search
when at least <code>num_beams</code> sentences are finished per batch or not.</li>
<li><strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to 1) \u2014
Number of beams for beam search that will be used by default in the <code>generate</code> method of the model. 1 means
no beam search.</li>
<li><strong>num_beam_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) \u2014
Number of groups to divide <code>num_beams</code> into in order to ensure diversity among different groups of beams
that will be used by default in the <code>generate</code> method of the model. 1 means no group beam search.</li>
<li><strong>diversity_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) \u2014
Value to control diversity for group beam search. that will be used by default in the <code>generate</code> method of
the model. 0 means no diversity penalty. The higher the penalty, the more diverse are the outputs.</li>
<li><strong>temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1) \u2014
The value used to module the next token probabilities that will be used by default in the <code>generate</code> method
of the model. Must be strictly positive.</li>
<li><strong>top_k</strong> (<code>int</code>, <em>optional</em>, defaults to 50) \u2014
Number of highest probability vocabulary tokens to keep for top-k-filtering that will be used by default in
the <code>generate</code> method of the model.</li>
<li><strong>top_p</strong> (<code>float</code>, <em>optional</em>, defaults to 1) \u2014
Value that will be used by default in the <code>generate</code> method of the model for <code>top_p</code>. If set to float < 1,
only the most probable tokens with probabilities that add up to <code>top_p</code> or higher are kept for generation.</li>
<li><strong>repetition_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1) \u2014
Parameter for repetition penalty that will be used by default in the <code>generate</code> method of the model. 1.0
means no penalty.</li>
<li><strong>length_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1) \u2014
Exponential penalty to the length that will be used by default in the <code>generate</code> method of the model.</li>
<li><strong>no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) \u2014 Value that will be used by default in the \u2014
<code>generate</code> method of the model for <code>no_repeat_ngram_size</code>. If set to int > 0, all ngrams of that size can
only occur once.</li>
<li><strong>encoder_no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) \u2014 Value that will be used by \u2014
default in the <code>generate</code> method of the model for <code>encoder_no_repeat_ngram_size</code>. If set to int > 0, all
ngrams of that size that occur in the <code>encoder_input_ids</code> cannot occur in the <code>decoder_input_ids</code>.</li>
<li><strong>bad_words_ids</strong> (<code>List[int]</code>, <em>optional</em>) \u2014
List of token ids that are not allowed to be generated that will be used by default in the <code>generate</code>
method of the model. In order to get the tokens of the words that should not appear in the generated text,
use <code>tokenizer.encode(bad_word, add_prefix_space=True)</code>.</li>
<li><strong>num_return_sequences</strong> (<code>int</code>, <em>optional</em>, defaults to 1) \u2014
Number of independently computed returned sequences for each element in the batch that will be used by
default in the <code>generate</code> method of the model.</li>
<li><strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) \u2014
Whether the model should return the logits when used for generation.</li>
<li><strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) \u2014
Whether the model should return a <a
  href="/docs/transformers/pr_16728/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> instead of a <code>torch.LongTensor</code>.</li>
<li><strong>forced_bos_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014
The id of the token to force as the first generated token after the <code>decoder_start_token_id</code>. Useful for
multilingual models like <a href="../model_doc/mbart">mBART</a> where the first generated token needs to be the target
language token.</li>
<li><strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014
The id of the token to force as the last generated token when <code>max_length</code> is reached.</li>
<li><strong>remove_invalid_values</strong> (<code>bool</code>, <em>optional</em>) \u2014
Whether to remove possible <em>nan</em> and <em>inf</em> outputs of the model to prevent the generation method to crash.
Note that using <code>remove_invalid_values</code> can slow down generation.</li>
</ul>
`},{title:"Parameters for fine-tuning tasks",parametersDescription:`
<ul>
<li><strong>architectures</strong> (<code>List[str]</code>, <em>optional</em>) \u2014
Model architectures that can be used with the model pretrained weights.</li>
<li><strong>finetuning_task</strong> (<code>str</code>, <em>optional</em>) \u2014
Name of the task used to fine-tune the model. This can be used when converting from an original (TensorFlow
or PyTorch) checkpoint.</li>
<li><strong>id2label</strong> (<code>Dict[int, str]</code>, <em>optional</em>) \u2014
A map from index (for instance prediction index, or target index) to label.</li>
<li><strong>label2id</strong> (<code>Dict[str, int]</code>, <em>optional</em>) \u2014 A map from label to index for the model.</li>
<li><strong>num_labels</strong> (<code>int</code>, <em>optional</em>) \u2014
Number of labels to use in the last layer added to the model, typically for a classification task.</li>
<li><strong>task_specific_params</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) \u2014
Additional keyword arguments to store for the current task.</li>
<li><strong>problem_type</strong> (<code>str</code>, <em>optional</em>) \u2014
Problem type for <code>XxxForSequenceClassification</code> models. Can be one of <code>"regression"</code>,
<code>"single_label_classification"</code> or <code>"multi_label_classification"</code>.</li>
</ul>
`},{title:"Parameters linked to the tokenizer",parametersDescription:`
<ul>
<li><strong>tokenizer_class</strong> (<code>str</code>, <em>optional</em>) \u2014
The name of the associated tokenizer class to use (if none is set, will use the tokenizer associated to the
model by default).</li>
<li><strong>prefix</strong> (<code>str</code>, <em>optional</em>) \u2014
A specific prompt that should be added at the beginning of each text before calling the model.</li>
<li><strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014 The id of the <em>beginning-of-stream</em> token.</li>
<li><strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014 The id of the <em>padding</em> token.</li>
<li><strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014 The id of the <em>end-of-stream</em> token.</li>
<li><strong>decoder_start_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014
If an encoder-decoder model starts decoding with a different token than <em>bos</em>, the id of that token.</li>
<li><strong>sep_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014 The id of the <em>separation</em> token.</li>
</ul>
`},{title:"PyTorch specific parameters",parametersDescription:`
<ul>
<li>
<p><strong>torchscript</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) \u2014
Whether or not the model should be used with Torchscript.</p>
</li>
<li>
<p><strong>tie_word_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) \u2014
Whether the model\u2019s input and output word embeddings should be tied. Note that this is only relevant if the
model has a output word embedding layer.</p>
</li>
<li>
<p><strong>torch_dtype</strong> (<code>str</code>, <em>optional</em>) \u2014
The <code>dtype</code> of the weights. This attribute can be used to initialize the model to a non-default <code>dtype</code>
(which is normally <code>float32</code>) and thus allow for optimal storage allocation. For example, if the saved
model is <code>float16</code>, ideally we want to load it back using the minimal amount of memory needed to load
<code>float16</code> weights. Since the config object is stored in plain text, this attribute contains just the
floating type string without the <code>torch.</code> prefix. For example, for <code>torch.float16</code> \`<code>torch_dtype</code> is the
<code>"float16"</code> string.</p>
<p>This attribute is currently not being used during model loading time, but this may change in the future
versions. But we can already start preparing for the future by saving the dtype with save_pretrained.</p>
</li>
</ul>
`},{title:"TensorFlow specific parameters",parametersDescription:`
<ul>
<li><strong>use_bfloat16</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) \u2014
Whether or not the model should use BFloat16 scalars (only used by some TensorFlow models).</li>
</ul>
`}]}}),K=new Ta({props:{$$slots:{default:[Is]},$$scope:{ctx:H}}}),ke=new E({props:{name:"push_to_hub",anchor:"transformers.PretrainedConfig.push_to_hub",parameters:[{name:"repo_path_or_name",val:": typing.Optional[str] = None"},{name:"repo_url",val:": typing.Optional[str] = None"},{name:"use_temp_dir",val:": bool = False"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"},{name:"**model_card_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16728/src/transformers/utils/hub.py#L846",parametersDescription:[{anchor:"transformers.PretrainedConfig.push_to_hub.repo_path_or_name",description:`<strong>repo_path_or_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Can either be a repository name for your config in the Hub or a path to a local folder (in which case
the repository will have the name of that local folder). If not specified, will default to the name
given by <code>repo_url</code> and a local directory with that name will be created.`,name:"repo_path_or_name"},{anchor:"transformers.PretrainedConfig.push_to_hub.repo_url",description:`<strong>repo_url</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Specify this in case you want to push to an existing repository in the hub. If unspecified, a new
repository will be created in your namespace (unless you specify an <code>organization</code>) with <code>repo_name</code>.`,name:"repo_url"},{anchor:"transformers.PretrainedConfig.push_to_hub.use_temp_dir",description:`<strong>use_temp_dir</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to clone the distant repo in a temporary directory or in <code>repo_path_or_name</code> inside the
current working directory. This will slow things down if you are making changes in an existing repo
since you will need to clone the repo before every push.`,name:"use_temp_dir"},{anchor:"transformers.PretrainedConfig.push_to_hub.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Message to commit while pushing. Will default to <code>&quot;add config&quot;</code>.`,name:"commit_message"},{anchor:"transformers.PretrainedConfig.push_to_hub.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Organization in which you want to push your config (you must be a member of this organization).`,name:"organization"},{anchor:"transformers.PretrainedConfig.push_to_hub.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not the repository created should be private (requires a paying subscription).`,name:"private"},{anchor:"transformers.PretrainedConfig.push_to_hub.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, will use the token generated
when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>). Will default to <code>True</code> if
<code>repo_url</code> is not specified.`,name:"use_auth_token"}],returnDescription:`
<p>The url of the commit of your config in the given repository.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ce=new js({props:{code:`from transformers import AutoConfig

config = AutoConfig.from_pretrained("bert-base-cased")

# Push the config to your namespace with the name "my-finetuned-bert" and have a local clone in the
# *my-finetuned-bert* folder.
config.push_to_hub("my-finetuned-bert")

# Push the config to your namespace with the name "my-finetuned-bert" with no local clone.
config.push_to_hub("my-finetuned-bert", use_temp_dir=True)

# Push the config to an organization with the name "my-finetuned-bert" and have a local clone in the
# *my-finetuned-bert* folder.
config.push_to_hub("my-finetuned-bert", organization="huggingface")

# Make a change to an existing repo that has been cloned locally in *my-finetuned-bert*.
config.push_to_hub("my-finetuned-bert", repo_url="https://huggingface.co/sgugger/my-finetuned-bert")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoConfig

config = AutoConfig.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-comment"># Push the config to your namespace with the name &quot;my-finetuned-bert&quot; and have a local clone in the</span>
<span class="hljs-comment"># *my-finetuned-bert* folder.</span>
config.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>)

<span class="hljs-comment"># Push the config to your namespace with the name &quot;my-finetuned-bert&quot; with no local clone.</span>
config.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>, use_temp_dir=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># Push the config to an organization with the name &quot;my-finetuned-bert&quot; and have a local clone in the</span>
<span class="hljs-comment"># *my-finetuned-bert* folder.</span>
config.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>, organization=<span class="hljs-string">&quot;huggingface&quot;</span>)

<span class="hljs-comment"># Make a change to an existing repo that has been cloned locally in *my-finetuned-bert*.</span>
config.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>, repo_url=<span class="hljs-string">&quot;https://huggingface.co/sgugger/my-finetuned-bert&quot;</span>)`}}),Ee=new E({props:{name:"dict_torch_dtype_to_str",anchor:"transformers.PretrainedConfig.dict_torch_dtype_to_str",parameters:[{name:"d",val:": typing.Dict[str, typing.Any]"}],source:"https://github.com/huggingface/transformers/blob/pr_16728/src/transformers/configuration_utils.py#L856"}}),Te=new E({props:{name:"from_dict",anchor:"transformers.PretrainedConfig.from_dict",parameters:[{name:"config_dict",val:": typing.Dict[str, typing.Any]"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16728/src/transformers/configuration_utils.py#L658",parametersDescription:[{anchor:"transformers.PretrainedConfig.from_dict.config_dict",description:`<strong>config_dict</strong> (<code>Dict[str, Any]</code>) &#x2014;
Dictionary that will be used to instantiate the configuration object. Such a dictionary can be
retrieved from a pretrained checkpoint by leveraging the <a href="/docs/transformers/pr_16728/en/main_classes/configuration#transformers.PretrainedConfig.get_config_dict">get_config_dict()</a> method.`,name:"config_dict"},{anchor:"transformers.PretrainedConfig.from_dict.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>) &#x2014;
Additional parameters from which to initialize the configuration object.`,name:"kwargs"}],returnDescription:`
<p>The configuration object instantiated from those parameters.</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16728/en/main_classes/configuration#transformers.PretrainedConfig"
>PretrainedConfig</a></p>
`}}),De=new E({props:{name:"from_json_file",anchor:"transformers.PretrainedConfig.from_json_file",parameters:[{name:"json_file",val:": typing.Union[str, os.PathLike]"}],source:"https://github.com/huggingface/transformers/blob/pr_16728/src/transformers/configuration_utils.py#L696",parametersDescription:[{anchor:"transformers.PretrainedConfig.from_json_file.json_file",description:`<strong>json_file</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Path to the JSON file containing the parameters.`,name:"json_file"}],returnDescription:`
<p>The configuration object instantiated from that JSON file.</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16728/en/main_classes/configuration#transformers.PretrainedConfig"
>PretrainedConfig</a></p>
`}}),ze=new E({props:{name:"from_pretrained",anchor:"transformers.PretrainedConfig.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16728/src/transformers/configuration_utils.py#L447",parametersDescription:[{anchor:"transformers.PretrainedConfig.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained model configuration hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a configuration file saved using the
<a href="/docs/transformers/pr_16728/en/main_classes/configuration#transformers.PretrainedConfig.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved configuration JSON <em>file</em>, e.g., <code>./my_model_directory/configuration.json</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"},{anchor:"transformers.PretrainedConfig.from_pretrained.cache_dir",description:`<strong>cache_dir</strong> (<code>str</code> or <code>os.PathLike</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded pretrained model configuration should be cached if the
standard cache should not be used.`,name:"cache_dir"},{anchor:"transformers.PretrainedConfig.from_pretrained.force_download",description:`<strong>force_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to force to (re-)download the configuration files and override the cached versions if
they exist.`,name:"force_download"},{anchor:"transformers.PretrainedConfig.from_pretrained.resume_download",description:`<strong>resume_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to delete incompletely received file. Attempts to resume the download if such a file
exists.`,name:"resume_download"},{anchor:"transformers.PretrainedConfig.from_pretrained.proxies",description:`<strong>proxies</strong> (<code>Dict[str, str]</code>, <em>optional</em>) &#x2014;
A dictionary of proxy servers to use by protocol or endpoint, e.g., <code>{&apos;http&apos;: &apos;foo.bar:3128&apos;, &apos;http://hostname&apos;: &apos;foo.bar:4012&apos;}.</code> The proxies are used on each request.`,name:"proxies"},{anchor:"transformers.PretrainedConfig.from_pretrained.use_auth_token",description:`<strong>use_auth_token</strong> (<code>str</code> or <em>bool</em>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, will use the token generated
when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>).`,name:"use_auth_token"},{anchor:"transformers.PretrainedConfig.from_pretrained.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;main&quot;</code>) &#x2014;
The specific model version to use. It can be a branch name, a tag name, or a commit id, since we use a
git-based system for storing models and other artifacts on huggingface.co, so <code>revision</code> can be any
identifier allowed by git.`,name:"revision"},{anchor:"transformers.PretrainedConfig.from_pretrained.return_unused_kwargs",description:`<strong>return_unused_kwargs</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>False</code>, then this function returns just the final configuration object.</p>
<p>If <code>True</code>, then this functions returns a <code>Tuple(config, unused_kwargs)</code> where <em>unused_kwargs</em> is a
dictionary consisting of the key/value pairs whose keys are not configuration attributes: i.e., the
part of <code>kwargs</code> which has not been used to update <code>config</code> and is otherwise ignored.`,name:"return_unused_kwargs"},{anchor:"transformers.PretrainedConfig.from_pretrained.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
The values in kwargs of any keys which are configuration attributes will be used to override the loaded
values. Behavior concerning key/value pairs whose keys are <em>not</em> configuration attributes is controlled
by the <code>return_unused_kwargs</code> keyword parameter.`,name:"kwargs"}],returnDescription:`
<p>The configuration object instantiated from this pretrained model.</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16728/en/main_classes/configuration#transformers.PretrainedConfig"
>PretrainedConfig</a></p>
`}}),se=new Ta({props:{$$slots:{default:[Ls]},$$scope:{ctx:H}}}),Oe=new js({props:{code:`# We can't instantiate directly the base class *PretrainedConfig* so let's show the examples on a
# derived class: BertConfig
config = BertConfig.from_pretrained(
    "bert-base-uncased"
)  # Download configuration from huggingface.co and cache.
config = BertConfig.from_pretrained(
    "./test/saved_model/"
)  # E.g. config (or model) was saved using *save_pretrained('./test/saved_model/')*
config = BertConfig.from_pretrained("./test/saved_model/my_configuration.json")
config = BertConfig.from_pretrained("bert-base-uncased", output_attentions=True, foo=False)
assert config.output_attentions == True
config, unused_kwargs = BertConfig.from_pretrained(
    "bert-base-uncased", output_attentions=True, foo=False, return_unused_kwargs=True
)
assert config.output_attentions == True
assert unused_kwargs == {"foo": False}`,highlighted:`<span class="hljs-comment"># We can&#x27;t instantiate directly the base class *PretrainedConfig* so let&#x27;s show the examples on a</span>
<span class="hljs-comment"># derived class: BertConfig</span>
config = BertConfig.from_pretrained(
    <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
)  <span class="hljs-comment"># Download configuration from huggingface.co and cache.</span>
config = BertConfig.from_pretrained(
    <span class="hljs-string">&quot;./test/saved_model/&quot;</span>
)  <span class="hljs-comment"># E.g. config (or model) was saved using *save_pretrained(&#x27;./test/saved_model/&#x27;)*</span>
config = BertConfig.from_pretrained(<span class="hljs-string">&quot;./test/saved_model/my_configuration.json&quot;</span>)
config = BertConfig.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, output_attentions=<span class="hljs-literal">True</span>, foo=<span class="hljs-literal">False</span>)
<span class="hljs-keyword">assert</span> config.output_attentions == <span class="hljs-literal">True</span>
config, unused_kwargs = BertConfig.from_pretrained(
    <span class="hljs-string">&quot;bert-base-uncased&quot;</span>, output_attentions=<span class="hljs-literal">True</span>, foo=<span class="hljs-literal">False</span>, return_unused_kwargs=<span class="hljs-literal">True</span>
)
<span class="hljs-keyword">assert</span> config.output_attentions == <span class="hljs-literal">True</span>
<span class="hljs-keyword">assert</span> unused_kwargs == {<span class="hljs-string">&quot;foo&quot;</span>: <span class="hljs-literal">False</span>}`}}),qe=new E({props:{name:"get_config_dict",anchor:"transformers.PretrainedConfig.get_config_dict",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16728/src/transformers/configuration_utils.py#L530",parametersDescription:[{anchor:"transformers.PretrainedConfig.get_config_dict.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
The identifier of the pre-trained checkpoint from which we want the dictionary of parameters.`,name:"pretrained_model_name_or_path"}],returnDescription:`
<p>The dictionary(ies) that will be used to instantiate the configuration object.</p>
`,returnType:`
<p><code>Tuple[Dict, Dict]</code></p>
`}}),Se=new E({props:{name:"register_for_auto_class",anchor:"transformers.PretrainedConfig.register_for_auto_class",parameters:[{name:"auto_class",val:" = 'AutoConfig'"}],source:"https://github.com/huggingface/transformers/blob/pr_16728/src/transformers/configuration_utils.py#L868",parametersDescription:[{anchor:"transformers.PretrainedConfig.register_for_auto_class.auto_class",description:`<strong>auto_class</strong> (<code>str</code> or <code>type</code>, <em>optional</em>, defaults to <code>&quot;AutoConfig&quot;</code>) &#x2014;
The auto class to register this new configuration with.`,name:"auto_class"}]}}),de=new Ta({props:{warning:!0,$$slots:{default:[Ns]},$$scope:{ctx:H}}}),Ie=new E({props:{name:"save_pretrained",anchor:"transformers.PretrainedConfig.save_pretrained",parameters:[{name:"save_directory",val:": typing.Union[str, os.PathLike]"},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16728/src/transformers/configuration_utils.py#L401",parametersDescription:[{anchor:"transformers.PretrainedConfig.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the configuration JSON file will be saved (will be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.PretrainedConfig.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/pr_16728/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}]}}),Le=new E({props:{name:"to_dict",anchor:"transformers.PretrainedConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16728/src/transformers/configuration_utils.py#L756",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance.</p>
`,returnType:`
<p><code>Dict[str, Any]</code></p>
`}}),Ne=new E({props:{name:"to_diff_dict",anchor:"transformers.PretrainedConfig.to_diff_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16728/src/transformers/configuration_utils.py#L724",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, Any]</code></p>
`}}),We=new E({props:{name:"to_json_file",anchor:"transformers.PretrainedConfig.to_json_file",parameters:[{name:"json_file_path",val:": typing.Union[str, os.PathLike]"},{name:"use_diff",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/pr_16728/src/transformers/configuration_utils.py#L794",parametersDescription:[{anchor:"transformers.PretrainedConfig.to_json_file.json_file_path",description:`<strong>json_file_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Path to the JSON file in which this configuration instance&#x2019;s parameters will be saved.`,name:"json_file_path"},{anchor:"transformers.PretrainedConfig.to_json_file.use_diff",description:`<strong>use_diff</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, only the difference between the config instance and the default <code>PretrainedConfig()</code>
is serialized to JSON file.`,name:"use_diff"}]}}),Me=new E({props:{name:"to_json_string",anchor:"transformers.PretrainedConfig.to_json_string",parameters:[{name:"use_diff",val:": bool = True"}],source:"https://github.com/huggingface/transformers/blob/pr_16728/src/transformers/configuration_utils.py#L776",parametersDescription:[{anchor:"transformers.PretrainedConfig.to_json_string.use_diff",description:`<strong>use_diff</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, only the difference between the config instance and the default <code>PretrainedConfig()</code>
is serialized to JSON string.`,name:"use_diff"}],returnDescription:`
<p>String containing all the attributes that make up this configuration instance in JSON format.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ve=new E({props:{name:"update",anchor:"transformers.PretrainedConfig.update",parameters:[{name:"config_dict",val:": typing.Dict[str, typing.Any]"}],source:"https://github.com/huggingface/transformers/blob/pr_16728/src/transformers/configuration_utils.py#L808",parametersDescription:[{anchor:"transformers.PretrainedConfig.update.config_dict",description:"<strong>config_dict</strong> (<code>Dict[str, Any]</code>) &#x2014; Dictionary of attributes that should be updated for this class.",name:"config_dict"}]}}),Re=new E({props:{name:"update_from_string",anchor:"transformers.PretrainedConfig.update_from_string",parameters:[{name:"update_str",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16728/src/transformers/configuration_utils.py#L818",parametersDescription:[{anchor:"transformers.PretrainedConfig.update_from_string.update_str",description:"<strong>update_str</strong> (<code>str</code>) &#x2014; String with attributes that should be updated for this class.",name:"update_str"}]}}),{c(){m=r("meta"),C=d(),g=r("h1"),w=r("a"),j=r("span"),p(k.$$.fragment),P=d(),q=r("span"),jo=o("Configuration"),ao=d(),G=r("p"),zo=o("The base class "),Ge=r("a"),Ao=o("PretrainedConfig"),Oo=o(` implements the common methods for loading/saving a configuration
either from a local file or directory, or from a pretrained model configuration provided by the library (downloaded
from HuggingFace\u2019s AWS S3 repository).`),so=d(),T=r("p"),qo=o(`Each derived config class implements model specific attributes. Common attributes present in all config classes are:
`),it=r("code"),So=o("hidden_size"),Fo=o(", "),dt=r("code"),Io=o("num_attention_heads"),Lo=o(", and "),ct=r("code"),No=o("num_hidden_layers"),Wo=o(`. Text models further implement:
`),lt=r("code"),Mo=o("vocab_size"),Vo=o("."),io=d(),R=r("h2"),X=r("a"),ft=r("span"),p(we.$$.fragment),Bo=d(),ht=r("span"),Ro=o("PretrainedConfig"),co=d(),l=r("div"),p($e.$$.fragment),Uo=d(),mt=r("p"),Jo=o(`Base class for all configuration classes. Handles a few parameters common to all models\u2019 configurations as well as
methods for loading/downloading/saving configurations.`),Ho=d(),p(K.$$.fragment),Go=d(),gt=r("p"),Xo=o("Class attributes (overridden by derived classes):"),Ko=d(),S=r("ul"),W=r("li"),pt=r("strong"),Qo=o("model_type"),Yo=o(" ("),ut=r("code"),Zo=o("str"),en=o(`) \u2014 An identifier for the model type, serialized into the JSON file, and used to recreate
the correct object in `),Xe=r("a"),tn=o("AutoConfig"),on=o("."),nn=d(),x=r("li"),_t=r("strong"),rn=o("is_composition"),an=o(" ("),bt=r("code"),sn=o("bool"),dn=o(`) \u2014 Whether the config class is composed of multiple sub-configs. In this case the
config has to be initialized from two or more configs of type `),Ke=r("a"),cn=o("PretrainedConfig"),ln=o(` like:
`),Qe=r("a"),fn=o("EncoderDecoderConfig"),hn=o(" or "),Ye=r("a"),mn=o("~RagConfig"),gn=o("."),pn=d(),Q=r("li"),yt=r("strong"),un=o("keys_to_ignore_at_inference"),_n=o(" ("),vt=r("code"),bn=o("List[str]"),yn=o(`) \u2014 A list of keys to ignore by default when looking at dictionary
outputs of the model during inference.`),vn=d(),Y=r("li"),wt=r("strong"),wn=o("attribute_map"),$n=o(" ("),$t=r("code"),kn=o("Dict[str, str]"),Pn=o(`) \u2014 A dict that maps model specific attribute names to the standardized
naming of attributes.`),Cn=d(),kt=r("p"),En=o("Common attributes (present in all subclasses):"),Tn=d(),F=r("ul"),Z=r("li"),Pt=r("strong"),xn=o("vocab_size"),Dn=o(" ("),Ct=r("code"),jn=o("int"),zn=o(`) \u2014 The number of tokens in the vocabulary, which is also the first dimension of the
embeddings matrix (this attribute may be missing for models that don\u2019t have a text modality like ViT).`),An=d(),ee=r("li"),Et=r("strong"),On=o("hidden_size"),qn=o(" ("),Tt=r("code"),Sn=o("int"),Fn=o(") \u2014 The hidden size of the model."),In=d(),te=r("li"),xt=r("strong"),Ln=o("num_attention_heads"),Nn=o(" ("),Dt=r("code"),Wn=o("int"),Mn=o(`) \u2014 The number of attention heads used in the multi-head attention layers of the
model.`),Vn=d(),oe=r("li"),jt=r("strong"),Bn=o("num_hidden_layers"),Rn=o(" ("),zt=r("code"),Un=o("int"),Jn=o(") \u2014 The number of blocks in the model."),Hn=d(),A=r("div"),p(ke.$$.fragment),Gn=d(),Pe=r("p"),Xn=o(`Upload the configuration file to the \u{1F917} Model Hub while synchronizing a local clone of the repo in
`),At=r("code"),Kn=o("repo_path_or_name"),Qn=o("."),Yn=d(),Ot=r("p"),Zn=o("Examples:"),er=d(),p(Ce.$$.fragment),tr=d(),ne=r("div"),p(Ee.$$.fragment),or=d(),I=r("p"),nr=o("Checks whether the passed dictionary and its nested dicts have a "),qt=r("em"),rr=o("torch_dtype"),ar=o(` key and if it\u2019s not None,
converts torch.dtype to a string of just the type. For example, `),St=r("code"),sr=o("torch.float32"),ir=o(" get converted into "),Ft=r("em"),dr=o("\u201Cfloat32\u201D"),cr=o(`
string, which can then be stored in the json format.`),lr=d(),re=r("div"),p(Te.$$.fragment),fr=d(),xe=r("p"),hr=o("Instantiates a "),Ze=r("a"),mr=o("PretrainedConfig"),gr=o(" from a Python dictionary of parameters."),pr=d(),ae=r("div"),p(De.$$.fragment),ur=d(),je=r("p"),_r=o("Instantiates a "),et=r("a"),br=o("PretrainedConfig"),yr=o(" from the path to a JSON file of parameters."),vr=d(),D=r("div"),p(ze.$$.fragment),wr=d(),Ae=r("p"),$r=o("Instantiate a "),tt=r("a"),kr=o("PretrainedConfig"),Pr=o(" (or a derived class) from a pretrained model configuration."),Cr=d(),p(se.$$.fragment),Er=d(),It=r("p"),Tr=o("Examples:"),xr=d(),p(Oe.$$.fragment),Dr=d(),ie=r("div"),p(qe.$$.fragment),jr=d(),L=r("p"),zr=o("From a "),Lt=r("code"),Ar=o("pretrained_model_name_or_path"),Or=o(`, resolve to a dictionary of parameters, to be used for instantiating a
`),ot=r("a"),qr=o("PretrainedConfig"),Sr=o(" using "),Nt=r("code"),Fr=o("from_dict"),Ir=o("."),Lr=d(),M=r("div"),p(Se.$$.fragment),Nr=d(),Fe=r("p"),Wr=o(`Register this class with a given auto class. This should only be used for custom configurations as the ones in
the library are already mapped with `),Wt=r("code"),Mr=o("AutoConfig"),Vr=o("."),Br=d(),p(de.$$.fragment),Rr=d(),ce=r("div"),p(Ie.$$.fragment),Ur=d(),U=r("p"),Jr=o("Save a configuration object to the directory "),Mt=r("code"),Hr=o("save_directory"),Gr=o(`, so that it can be re-loaded using the
`),nt=r("a"),Xr=o("from_pretrained()"),Kr=o(" class method."),Qr=d(),le=r("div"),p(Le.$$.fragment),Yr=d(),Vt=r("p"),Zr=o("Serializes this instance to a Python dictionary."),ea=d(),fe=r("div"),p(Ne.$$.fragment),ta=d(),Bt=r("p"),oa=o(`Removes all attributes from config which correspond to the default config attributes for better readability and
serializes to a Python dictionary.`),na=d(),he=r("div"),p(We.$$.fragment),ra=d(),Rt=r("p"),aa=o("Save this instance to a JSON file."),sa=d(),me=r("div"),p(Me.$$.fragment),ia=d(),Ut=r("p"),da=o("Serializes this instance to a JSON string."),ca=d(),ge=r("div"),p(Ve.$$.fragment),la=d(),Be=r("p"),fa=o("Updates attributes of this class with attributes from "),Jt=r("code"),ha=o("config_dict"),ma=o("."),ga=d(),O=r("div"),p(Re.$$.fragment),pa=d(),Ue=r("p"),ua=o("Updates attributes of this class with attributes from "),Ht=r("code"),_a=o("update_str"),ba=o("."),ya=d(),J=r("p"),va=o("The expected format is ints, floats and strings as is, and for booleans use "),Gt=r("code"),wa=o("true"),$a=o(" or "),Xt=r("code"),ka=o("false"),Pa=o(`. For example:
\u201Cn_embd=10,resid_pdrop=0.2,scale_attn_weights=false,summary_type=cls_index\u201D`),Ca=d(),Kt=r("p"),Ea=o("The keys to change have to already exist in the config object."),this.h()},l(i){const $=Ss('[data-svelte="svelte-1phssyn"]',document.head);m=a($,"META",{name:!0,content:!0}),$.forEach(t),C=c(i),g=a(i,"H1",{class:!0});var Je=s(g);w=a(Je,"A",{id:!0,class:!0,href:!0});var Qt=s(w);j=a(Qt,"SPAN",{});var Yt=s(j);u(k.$$.fragment,Yt),Yt.forEach(t),Qt.forEach(t),P=c(Je),q=a(Je,"SPAN",{});var xa=s(q);jo=n(xa,"Configuration"),xa.forEach(t),Je.forEach(t),ao=c(i),G=a(i,"P",{});var fo=s(G);zo=n(fo,"The base class "),Ge=a(fo,"A",{href:!0});var Da=s(Ge);Ao=n(Da,"PretrainedConfig"),Da.forEach(t),Oo=n(fo,` implements the common methods for loading/saving a configuration
either from a local file or directory, or from a pretrained model configuration provided by the library (downloaded
from HuggingFace\u2019s AWS S3 repository).`),fo.forEach(t),so=c(i),T=a(i,"P",{});var V=s(T);qo=n(V,`Each derived config class implements model specific attributes. Common attributes present in all config classes are:
`),it=a(V,"CODE",{});var ja=s(it);So=n(ja,"hidden_size"),ja.forEach(t),Fo=n(V,", "),dt=a(V,"CODE",{});var za=s(dt);Io=n(za,"num_attention_heads"),za.forEach(t),Lo=n(V,", and "),ct=a(V,"CODE",{});var Aa=s(ct);No=n(Aa,"num_hidden_layers"),Aa.forEach(t),Wo=n(V,`. Text models further implement:
`),lt=a(V,"CODE",{});var Oa=s(lt);Mo=n(Oa,"vocab_size"),Oa.forEach(t),Vo=n(V,"."),V.forEach(t),io=c(i),R=a(i,"H2",{class:!0});var ho=s(R);X=a(ho,"A",{id:!0,class:!0,href:!0});var qa=s(X);ft=a(qa,"SPAN",{});var Sa=s(ft);u(we.$$.fragment,Sa),Sa.forEach(t),qa.forEach(t),Bo=c(ho),ht=a(ho,"SPAN",{});var Fa=s(ht);Ro=n(Fa,"PretrainedConfig"),Fa.forEach(t),ho.forEach(t),co=c(i),l=a(i,"DIV",{class:!0});var f=s(l);u($e.$$.fragment,f),Uo=c(f),mt=a(f,"P",{});var Ia=s(mt);Jo=n(Ia,`Base class for all configuration classes. Handles a few parameters common to all models\u2019 configurations as well as
methods for loading/downloading/saving configurations.`),Ia.forEach(t),Ho=c(f),u(K.$$.fragment,f),Go=c(f),gt=a(f,"P",{});var La=s(gt);Xo=n(La,"Class attributes (overridden by derived classes):"),La.forEach(t),Ko=c(f),S=a(f,"UL",{});var pe=s(S);W=a(pe,"LI",{});var He=s(W);pt=a(He,"STRONG",{});var Na=s(pt);Qo=n(Na,"model_type"),Na.forEach(t),Yo=n(He," ("),ut=a(He,"CODE",{});var Wa=s(ut);Zo=n(Wa,"str"),Wa.forEach(t),en=n(He,`) \u2014 An identifier for the model type, serialized into the JSON file, and used to recreate
the correct object in `),Xe=a(He,"A",{href:!0});var Ma=s(Xe);tn=n(Ma,"AutoConfig"),Ma.forEach(t),on=n(He,"."),He.forEach(t),nn=c(pe),x=a(pe,"LI",{});var N=s(x);_t=a(N,"STRONG",{});var Va=s(_t);rn=n(Va,"is_composition"),Va.forEach(t),an=n(N," ("),bt=a(N,"CODE",{});var Ba=s(bt);sn=n(Ba,"bool"),Ba.forEach(t),dn=n(N,`) \u2014 Whether the config class is composed of multiple sub-configs. In this case the
config has to be initialized from two or more configs of type `),Ke=a(N,"A",{href:!0});var Ra=s(Ke);cn=n(Ra,"PretrainedConfig"),Ra.forEach(t),ln=n(N,` like:
`),Qe=a(N,"A",{href:!0});var Ua=s(Qe);fn=n(Ua,"EncoderDecoderConfig"),Ua.forEach(t),hn=n(N," or "),Ye=a(N,"A",{href:!0});var Ja=s(Ye);mn=n(Ja,"~RagConfig"),Ja.forEach(t),gn=n(N,"."),N.forEach(t),pn=c(pe),Q=a(pe,"LI",{});var Zt=s(Q);yt=a(Zt,"STRONG",{});var Ha=s(yt);un=n(Ha,"keys_to_ignore_at_inference"),Ha.forEach(t),_n=n(Zt," ("),vt=a(Zt,"CODE",{});var Ga=s(vt);bn=n(Ga,"List[str]"),Ga.forEach(t),yn=n(Zt,`) \u2014 A list of keys to ignore by default when looking at dictionary
outputs of the model during inference.`),Zt.forEach(t),vn=c(pe),Y=a(pe,"LI",{});var eo=s(Y);wt=a(eo,"STRONG",{});var Xa=s(wt);wn=n(Xa,"attribute_map"),Xa.forEach(t),$n=n(eo," ("),$t=a(eo,"CODE",{});var Ka=s($t);kn=n(Ka,"Dict[str, str]"),Ka.forEach(t),Pn=n(eo,`) \u2014 A dict that maps model specific attribute names to the standardized
naming of attributes.`),eo.forEach(t),pe.forEach(t),Cn=c(f),kt=a(f,"P",{});var Qa=s(kt);En=n(Qa,"Common attributes (present in all subclasses):"),Qa.forEach(t),Tn=c(f),F=a(f,"UL",{});var ue=s(F);Z=a(ue,"LI",{});var to=s(Z);Pt=a(to,"STRONG",{});var Ya=s(Pt);xn=n(Ya,"vocab_size"),Ya.forEach(t),Dn=n(to," ("),Ct=a(to,"CODE",{});var Za=s(Ct);jn=n(Za,"int"),Za.forEach(t),zn=n(to,`) \u2014 The number of tokens in the vocabulary, which is also the first dimension of the
embeddings matrix (this attribute may be missing for models that don\u2019t have a text modality like ViT).`),to.forEach(t),An=c(ue),ee=a(ue,"LI",{});var oo=s(ee);Et=a(oo,"STRONG",{});var es=s(Et);On=n(es,"hidden_size"),es.forEach(t),qn=n(oo," ("),Tt=a(oo,"CODE",{});var ts=s(Tt);Sn=n(ts,"int"),ts.forEach(t),Fn=n(oo,") \u2014 The hidden size of the model."),oo.forEach(t),In=c(ue),te=a(ue,"LI",{});var no=s(te);xt=a(no,"STRONG",{});var os=s(xt);Ln=n(os,"num_attention_heads"),os.forEach(t),Nn=n(no," ("),Dt=a(no,"CODE",{});var ns=s(Dt);Wn=n(ns,"int"),ns.forEach(t),Mn=n(no,`) \u2014 The number of attention heads used in the multi-head attention layers of the
model.`),no.forEach(t),Vn=c(ue),oe=a(ue,"LI",{});var ro=s(oe);jt=a(ro,"STRONG",{});var rs=s(jt);Bn=n(rs,"num_hidden_layers"),rs.forEach(t),Rn=n(ro," ("),zt=a(ro,"CODE",{});var as=s(zt);Un=n(as,"int"),as.forEach(t),Jn=n(ro,") \u2014 The number of blocks in the model."),ro.forEach(t),ue.forEach(t),Hn=c(f),A=a(f,"DIV",{class:!0});var _e=s(A);u(ke.$$.fragment,_e),Gn=c(_e),Pe=a(_e,"P",{});var mo=s(Pe);Xn=n(mo,`Upload the configuration file to the \u{1F917} Model Hub while synchronizing a local clone of the repo in
`),At=a(mo,"CODE",{});var ss=s(At);Kn=n(ss,"repo_path_or_name"),ss.forEach(t),Qn=n(mo,"."),mo.forEach(t),Yn=c(_e),Ot=a(_e,"P",{});var is=s(Ot);Zn=n(is,"Examples:"),is.forEach(t),er=c(_e),u(Ce.$$.fragment,_e),_e.forEach(t),tr=c(f),ne=a(f,"DIV",{class:!0});var go=s(ne);u(Ee.$$.fragment,go),or=c(go),I=a(go,"P",{});var be=s(I);nr=n(be,"Checks whether the passed dictionary and its nested dicts have a "),qt=a(be,"EM",{});var ds=s(qt);rr=n(ds,"torch_dtype"),ds.forEach(t),ar=n(be,` key and if it\u2019s not None,
converts torch.dtype to a string of just the type. For example, `),St=a(be,"CODE",{});var cs=s(St);sr=n(cs,"torch.float32"),cs.forEach(t),ir=n(be," get converted into "),Ft=a(be,"EM",{});var ls=s(Ft);dr=n(ls,"\u201Cfloat32\u201D"),ls.forEach(t),cr=n(be,`
string, which can then be stored in the json format.`),be.forEach(t),go.forEach(t),lr=c(f),re=a(f,"DIV",{class:!0});var po=s(re);u(Te.$$.fragment,po),fr=c(po),xe=a(po,"P",{});var uo=s(xe);hr=n(uo,"Instantiates a "),Ze=a(uo,"A",{href:!0});var fs=s(Ze);mr=n(fs,"PretrainedConfig"),fs.forEach(t),gr=n(uo," from a Python dictionary of parameters."),uo.forEach(t),po.forEach(t),pr=c(f),ae=a(f,"DIV",{class:!0});var _o=s(ae);u(De.$$.fragment,_o),ur=c(_o),je=a(_o,"P",{});var bo=s(je);_r=n(bo,"Instantiates a "),et=a(bo,"A",{href:!0});var hs=s(et);br=n(hs,"PretrainedConfig"),hs.forEach(t),yr=n(bo," from the path to a JSON file of parameters."),bo.forEach(t),_o.forEach(t),vr=c(f),D=a(f,"DIV",{class:!0});var B=s(D);u(ze.$$.fragment,B),wr=c(B),Ae=a(B,"P",{});var yo=s(Ae);$r=n(yo,"Instantiate a "),tt=a(yo,"A",{href:!0});var ms=s(tt);kr=n(ms,"PretrainedConfig"),ms.forEach(t),Pr=n(yo," (or a derived class) from a pretrained model configuration."),yo.forEach(t),Cr=c(B),u(se.$$.fragment,B),Er=c(B),It=a(B,"P",{});var gs=s(It);Tr=n(gs,"Examples:"),gs.forEach(t),xr=c(B),u(Oe.$$.fragment,B),B.forEach(t),Dr=c(f),ie=a(f,"DIV",{class:!0});var vo=s(ie);u(qe.$$.fragment,vo),jr=c(vo),L=a(vo,"P",{});var ye=s(L);zr=n(ye,"From a "),Lt=a(ye,"CODE",{});var ps=s(Lt);Ar=n(ps,"pretrained_model_name_or_path"),ps.forEach(t),Or=n(ye,`, resolve to a dictionary of parameters, to be used for instantiating a
`),ot=a(ye,"A",{href:!0});var us=s(ot);qr=n(us,"PretrainedConfig"),us.forEach(t),Sr=n(ye," using "),Nt=a(ye,"CODE",{});var _s=s(Nt);Fr=n(_s,"from_dict"),_s.forEach(t),Ir=n(ye,"."),ye.forEach(t),vo.forEach(t),Lr=c(f),M=a(f,"DIV",{class:!0});var rt=s(M);u(Se.$$.fragment,rt),Nr=c(rt),Fe=a(rt,"P",{});var wo=s(Fe);Wr=n(wo,`Register this class with a given auto class. This should only be used for custom configurations as the ones in
the library are already mapped with `),Wt=a(wo,"CODE",{});var bs=s(Wt);Mr=n(bs,"AutoConfig"),bs.forEach(t),Vr=n(wo,"."),wo.forEach(t),Br=c(rt),u(de.$$.fragment,rt),rt.forEach(t),Rr=c(f),ce=a(f,"DIV",{class:!0});var $o=s(ce);u(Ie.$$.fragment,$o),Ur=c($o),U=a($o,"P",{});var at=s(U);Jr=n(at,"Save a configuration object to the directory "),Mt=a(at,"CODE",{});var ys=s(Mt);Hr=n(ys,"save_directory"),ys.forEach(t),Gr=n(at,`, so that it can be re-loaded using the
`),nt=a(at,"A",{href:!0});var vs=s(nt);Xr=n(vs,"from_pretrained()"),vs.forEach(t),Kr=n(at," class method."),at.forEach(t),$o.forEach(t),Qr=c(f),le=a(f,"DIV",{class:!0});var ko=s(le);u(Le.$$.fragment,ko),Yr=c(ko),Vt=a(ko,"P",{});var ws=s(Vt);Zr=n(ws,"Serializes this instance to a Python dictionary."),ws.forEach(t),ko.forEach(t),ea=c(f),fe=a(f,"DIV",{class:!0});var Po=s(fe);u(Ne.$$.fragment,Po),ta=c(Po),Bt=a(Po,"P",{});var $s=s(Bt);oa=n($s,`Removes all attributes from config which correspond to the default config attributes for better readability and
serializes to a Python dictionary.`),$s.forEach(t),Po.forEach(t),na=c(f),he=a(f,"DIV",{class:!0});var Co=s(he);u(We.$$.fragment,Co),ra=c(Co),Rt=a(Co,"P",{});var ks=s(Rt);aa=n(ks,"Save this instance to a JSON file."),ks.forEach(t),Co.forEach(t),sa=c(f),me=a(f,"DIV",{class:!0});var Eo=s(me);u(Me.$$.fragment,Eo),ia=c(Eo),Ut=a(Eo,"P",{});var Ps=s(Ut);da=n(Ps,"Serializes this instance to a JSON string."),Ps.forEach(t),Eo.forEach(t),ca=c(f),ge=a(f,"DIV",{class:!0});var To=s(ge);u(Ve.$$.fragment,To),la=c(To),Be=a(To,"P",{});var xo=s(Be);fa=n(xo,"Updates attributes of this class with attributes from "),Jt=a(xo,"CODE",{});var Cs=s(Jt);ha=n(Cs,"config_dict"),Cs.forEach(t),ma=n(xo,"."),xo.forEach(t),To.forEach(t),ga=c(f),O=a(f,"DIV",{class:!0});var ve=s(O);u(Re.$$.fragment,ve),pa=c(ve),Ue=a(ve,"P",{});var Do=s(Ue);ua=n(Do,"Updates attributes of this class with attributes from "),Ht=a(Do,"CODE",{});var Es=s(Ht);_a=n(Es,"update_str"),Es.forEach(t),ba=n(Do,"."),Do.forEach(t),ya=c(ve),J=a(ve,"P",{});var st=s(J);va=n(st,"The expected format is ints, floats and strings as is, and for booleans use "),Gt=a(st,"CODE",{});var Ts=s(Gt);wa=n(Ts,"true"),Ts.forEach(t),$a=n(st," or "),Xt=a(st,"CODE",{});var xs=s(Xt);ka=n(xs,"false"),xs.forEach(t),Pa=n(st,`. For example:
\u201Cn_embd=10,resid_pdrop=0.2,scale_attn_weights=false,summary_type=cls_index\u201D`),st.forEach(t),Ca=c(ve),Kt=a(ve,"P",{});var Ds=s(Kt);Ea=n(Ds,"The keys to change have to already exist in the config object."),Ds.forEach(t),ve.forEach(t),f.forEach(t),this.h()},h(){h(m,"name","hf:doc:metadata"),h(m,"content",JSON.stringify(Ms)),h(w,"id","configuration"),h(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(w,"href","#configuration"),h(g,"class","relative group"),h(Ge,"href","/docs/transformers/pr_16728/en/main_classes/configuration#transformers.PretrainedConfig"),h(X,"id","transformers.PretrainedConfig"),h(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(X,"href","#transformers.PretrainedConfig"),h(R,"class","relative group"),h(Xe,"href","/docs/transformers/pr_16728/en/model_doc/auto#transformers.AutoConfig"),h(Ke,"href","/docs/transformers/pr_16728/en/main_classes/configuration#transformers.PretrainedConfig"),h(Qe,"href","/docs/transformers/pr_16728/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),h(Ye,"href","/docs/transformers/pr_16728/en/model_doc/rag#transformers.RagConfig"),h(A,"class","docstring"),h(ne,"class","docstring"),h(Ze,"href","/docs/transformers/pr_16728/en/main_classes/configuration#transformers.PretrainedConfig"),h(re,"class","docstring"),h(et,"href","/docs/transformers/pr_16728/en/main_classes/configuration#transformers.PretrainedConfig"),h(ae,"class","docstring"),h(tt,"href","/docs/transformers/pr_16728/en/main_classes/configuration#transformers.PretrainedConfig"),h(D,"class","docstring"),h(ot,"href","/docs/transformers/pr_16728/en/main_classes/configuration#transformers.PretrainedConfig"),h(ie,"class","docstring"),h(M,"class","docstring"),h(nt,"href","/docs/transformers/pr_16728/en/main_classes/configuration#transformers.PretrainedConfig.from_pretrained"),h(ce,"class","docstring"),h(le,"class","docstring"),h(fe,"class","docstring"),h(he,"class","docstring"),h(me,"class","docstring"),h(ge,"class","docstring"),h(O,"class","docstring"),h(l,"class","docstring")},m(i,$){e(document.head,m),z(i,C,$),z(i,g,$),e(g,w),e(w,j),_(k,j,null),e(g,P),e(g,q),e(q,jo),z(i,ao,$),z(i,G,$),e(G,zo),e(G,Ge),e(Ge,Ao),e(G,Oo),z(i,so,$),z(i,T,$),e(T,qo),e(T,it),e(it,So),e(T,Fo),e(T,dt),e(dt,Io),e(T,Lo),e(T,ct),e(ct,No),e(T,Wo),e(T,lt),e(lt,Mo),e(T,Vo),z(i,io,$),z(i,R,$),e(R,X),e(X,ft),_(we,ft,null),e(R,Bo),e(R,ht),e(ht,Ro),z(i,co,$),z(i,l,$),_($e,l,null),e(l,Uo),e(l,mt),e(mt,Jo),e(l,Ho),_(K,l,null),e(l,Go),e(l,gt),e(gt,Xo),e(l,Ko),e(l,S),e(S,W),e(W,pt),e(pt,Qo),e(W,Yo),e(W,ut),e(ut,Zo),e(W,en),e(W,Xe),e(Xe,tn),e(W,on),e(S,nn),e(S,x),e(x,_t),e(_t,rn),e(x,an),e(x,bt),e(bt,sn),e(x,dn),e(x,Ke),e(Ke,cn),e(x,ln),e(x,Qe),e(Qe,fn),e(x,hn),e(x,Ye),e(Ye,mn),e(x,gn),e(S,pn),e(S,Q),e(Q,yt),e(yt,un),e(Q,_n),e(Q,vt),e(vt,bn),e(Q,yn),e(S,vn),e(S,Y),e(Y,wt),e(wt,wn),e(Y,$n),e(Y,$t),e($t,kn),e(Y,Pn),e(l,Cn),e(l,kt),e(kt,En),e(l,Tn),e(l,F),e(F,Z),e(Z,Pt),e(Pt,xn),e(Z,Dn),e(Z,Ct),e(Ct,jn),e(Z,zn),e(F,An),e(F,ee),e(ee,Et),e(Et,On),e(ee,qn),e(ee,Tt),e(Tt,Sn),e(ee,Fn),e(F,In),e(F,te),e(te,xt),e(xt,Ln),e(te,Nn),e(te,Dt),e(Dt,Wn),e(te,Mn),e(F,Vn),e(F,oe),e(oe,jt),e(jt,Bn),e(oe,Rn),e(oe,zt),e(zt,Un),e(oe,Jn),e(l,Hn),e(l,A),_(ke,A,null),e(A,Gn),e(A,Pe),e(Pe,Xn),e(Pe,At),e(At,Kn),e(Pe,Qn),e(A,Yn),e(A,Ot),e(Ot,Zn),e(A,er),_(Ce,A,null),e(l,tr),e(l,ne),_(Ee,ne,null),e(ne,or),e(ne,I),e(I,nr),e(I,qt),e(qt,rr),e(I,ar),e(I,St),e(St,sr),e(I,ir),e(I,Ft),e(Ft,dr),e(I,cr),e(l,lr),e(l,re),_(Te,re,null),e(re,fr),e(re,xe),e(xe,hr),e(xe,Ze),e(Ze,mr),e(xe,gr),e(l,pr),e(l,ae),_(De,ae,null),e(ae,ur),e(ae,je),e(je,_r),e(je,et),e(et,br),e(je,yr),e(l,vr),e(l,D),_(ze,D,null),e(D,wr),e(D,Ae),e(Ae,$r),e(Ae,tt),e(tt,kr),e(Ae,Pr),e(D,Cr),_(se,D,null),e(D,Er),e(D,It),e(It,Tr),e(D,xr),_(Oe,D,null),e(l,Dr),e(l,ie),_(qe,ie,null),e(ie,jr),e(ie,L),e(L,zr),e(L,Lt),e(Lt,Ar),e(L,Or),e(L,ot),e(ot,qr),e(L,Sr),e(L,Nt),e(Nt,Fr),e(L,Ir),e(l,Lr),e(l,M),_(Se,M,null),e(M,Nr),e(M,Fe),e(Fe,Wr),e(Fe,Wt),e(Wt,Mr),e(Fe,Vr),e(M,Br),_(de,M,null),e(l,Rr),e(l,ce),_(Ie,ce,null),e(ce,Ur),e(ce,U),e(U,Jr),e(U,Mt),e(Mt,Hr),e(U,Gr),e(U,nt),e(nt,Xr),e(U,Kr),e(l,Qr),e(l,le),_(Le,le,null),e(le,Yr),e(le,Vt),e(Vt,Zr),e(l,ea),e(l,fe),_(Ne,fe,null),e(fe,ta),e(fe,Bt),e(Bt,oa),e(l,na),e(l,he),_(We,he,null),e(he,ra),e(he,Rt),e(Rt,aa),e(l,sa),e(l,me),_(Me,me,null),e(me,ia),e(me,Ut),e(Ut,da),e(l,ca),e(l,ge),_(Ve,ge,null),e(ge,la),e(ge,Be),e(Be,fa),e(Be,Jt),e(Jt,ha),e(Be,ma),e(l,ga),e(l,O),_(Re,O,null),e(O,pa),e(O,Ue),e(Ue,ua),e(Ue,Ht),e(Ht,_a),e(Ue,ba),e(O,ya),e(O,J),e(J,va),e(J,Gt),e(Gt,wa),e(J,$a),e(J,Xt),e(Xt,ka),e(J,Pa),e(O,Ca),e(O,Kt),e(Kt,Ea),lo=!0},p(i,[$]){const Je={};$&2&&(Je.$$scope={dirty:$,ctx:i}),K.$set(Je);const Qt={};$&2&&(Qt.$$scope={dirty:$,ctx:i}),se.$set(Qt);const Yt={};$&2&&(Yt.$$scope={dirty:$,ctx:i}),de.$set(Yt)},i(i){lo||(b(k.$$.fragment,i),b(we.$$.fragment,i),b($e.$$.fragment,i),b(K.$$.fragment,i),b(ke.$$.fragment,i),b(Ce.$$.fragment,i),b(Ee.$$.fragment,i),b(Te.$$.fragment,i),b(De.$$.fragment,i),b(ze.$$.fragment,i),b(se.$$.fragment,i),b(Oe.$$.fragment,i),b(qe.$$.fragment,i),b(Se.$$.fragment,i),b(de.$$.fragment,i),b(Ie.$$.fragment,i),b(Le.$$.fragment,i),b(Ne.$$.fragment,i),b(We.$$.fragment,i),b(Me.$$.fragment,i),b(Ve.$$.fragment,i),b(Re.$$.fragment,i),lo=!0)},o(i){y(k.$$.fragment,i),y(we.$$.fragment,i),y($e.$$.fragment,i),y(K.$$.fragment,i),y(ke.$$.fragment,i),y(Ce.$$.fragment,i),y(Ee.$$.fragment,i),y(Te.$$.fragment,i),y(De.$$.fragment,i),y(ze.$$.fragment,i),y(se.$$.fragment,i),y(Oe.$$.fragment,i),y(qe.$$.fragment,i),y(Se.$$.fragment,i),y(de.$$.fragment,i),y(Ie.$$.fragment,i),y(Le.$$.fragment,i),y(Ne.$$.fragment,i),y(We.$$.fragment,i),y(Me.$$.fragment,i),y(Ve.$$.fragment,i),y(Re.$$.fragment,i),lo=!1},d(i){t(m),i&&t(C),i&&t(g),v(k),i&&t(ao),i&&t(G),i&&t(so),i&&t(T),i&&t(io),i&&t(R),v(we),i&&t(co),i&&t(l),v($e),v(K),v(ke),v(Ce),v(Ee),v(Te),v(De),v(ze),v(se),v(Oe),v(qe),v(Se),v(de),v(Ie),v(Le),v(Ne),v(We),v(Me),v(Ve),v(Re)}}}const Ms={local:"configuration",sections:[{local:"transformers.PretrainedConfig",title:"PretrainedConfig"}],title:"Configuration"};function Vs(H){return Fs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gs extends As{constructor(m){super();Os(this,m,Vs,Ws,qs,{})}}export{Gs as default,Ms as metadata};
