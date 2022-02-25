import{S as ur,i as gr,s as _r,e as a,k as i,w as T,t,M as vr,c as s,d as o,m as l,a as d,x as k,h as r,b as c,F as e,g as _,y as D,q as $,o as M,B as x}from"../../chunks/vendor-4833417e.js";import{T as br}from"../../chunks/Tip-fffd6df1.js";import{D as Ve}from"../../chunks/Docstring-44c5af16.js";import{C as kt}from"../../chunks/CodeBlock-90ffda97.js";import{I as Dt}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-04a16537.js";function wr(Be){let f,q,g,v,N;return{c(){f=a("p"),q=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),v=t("Module"),N=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(S){f=s(S,"P",{});var P=d(f);q=r(P,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(P,"CODE",{});var J=d(g);v=r(J,"Module"),J.forEach(o),N=r(P,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),P.forEach(o)},m(S,P){_(S,f,P),e(f,q),e(f,g),e(g,v),e(f,N)},d(S){S&&o(f)}}}function yr(Be){let f,q,g,v,N,S,P,J,Mo,po,b,xo,ye,qo,Po,Oe,jo,Co,Ee,zo,Ao,Se,Fo,Lo,ho,j,No,Re,Wo,Io,X,Vo,Bo,mo,C,Oo,Te,Ro,Ho,ke,Jo,Uo,fo,W,U,He,ee,Go,Je,Yo,uo,u,oe,Zo,G,De,Ko,Qo,$e,Xo,en,on,I,nn,Me,tn,rn,xe,an,sn,dn,Ue,cn,ln,ne,pn,Y,te,hn,re,mn,qe,fn,un,gn,Z,ae,_n,V,vn,Ge,bn,wn,Ye,yn,En,go,B,K,Ze,se,Sn,Ke,Tn,_o,p,de,kn,O,Dn,Qe,$n,Mn,Xe,xn,qn,Pn,ce,jn,ie,Cn,zn,An,le,Fn,pe,Ln,Nn,Wn,eo,In,Vn,he,Bn,Pe,On,Rn,Hn,me,Jn,fe,Un,Gn,Yn,z,je,Zn,Kn,oo,Qn,Xn,no,et,ot,nt,w,ue,tt,R,rt,Ce,at,st,to,dt,ct,it,Q,lt,ro,pt,ht,ge,mt,y,_e,ft,ao,ut,gt,H,_t,so,vt,bt,co,wt,yt,Et,io,St,Tt,ve,vo;return S=new Dt({}),ee=new Dt({}),oe=new Ve({props:{name:"class transformers.SpeechEncoderDecoderConfig",anchor:"transformers.SpeechEncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L27",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/pr_15750/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/pr_15750/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}]}}),ne=new kt({props:{code:`from transformers import BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

# Initializing a Wav2Vec2 & BERT style configuration
config_encoder = Wav2Vec2Config()
config_decoder = BertConfig()

config = SpeechEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

# Initializing a Wav2Vec2Bert model from a Wav2Vec2 & bert-base-uncased style configurations
model = SpeechEncoderDecoderModel(config=config)

# Accessing the model configuration
config_encoder = model.config.encoder
config_decoder = model.config.decoder
# set decoder config to causal lm
config_decoder.is_decoder = True
config_decoder.add_cross_attention = True

# Saving the model, including its configuration
model.save_pretrained("my-model")

# loading model and config from pretrained folder
encoder_decoder_config = SpeechEncoderDecoderConfig.from_pretrained("my-model")
model = SpeechEncoderDecoderModel.from_pretrained("my-model", config=encoder_decoder_config),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, Wav2Vec2Config, SpeechEncoderDecoderConfig, SpeechEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Wav2Vec2 &amp; BERT style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = Wav2Vec2Config()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = SpeechEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Wav2Vec2Bert model from a Wav2Vec2 &amp; bert-base-uncased style configurations</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel(config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = model.config.encoder
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = model.config.decoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set decoder config to causal lm</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.add_cross_attention = <span class="hljs-literal">True</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Saving the model, including its configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading model and config from pretrained folder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_decoder_config = SpeechEncoderDecoderConfig.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),te=new Ve({props:{name:"from_encoder_decoder_configs",anchor:"transformers.SpeechEncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L92",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_15750/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
>SpeechEncoderDecoderConfig</a></p>
`}}),ae=new Ve({props:{name:"to_dict",anchor:"transformers.SpeechEncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/speech_encoder_decoder/configuration_speech_encoder_decoder.py#L109",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),se=new Dt({}),de=new Ve({props:{name:"class transformers.SpeechEncoderDecoderModel",anchor:"transformers.SpeechEncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L174",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15750/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig">SpeechEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15750/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ue=new Ve({props:{name:"forward",anchor:"transformers.SpeechEncoderDecoderModel.forward",parameters:[{name:"inputs",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"input_values",val:" = None"},{name:"input_features",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L442",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.forward.inputs",description:`<strong>inputs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code> or <code>(batch_size, sequence_length, feature_dim)</code>, <em>optional</em>) &#x2014;
Float values of input raw speech waveform or speech features. Values can be obtained by loading a <em>.flac</em>
or <em>.wav</em> audio file into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile
library (<em>pip install soundfile</em>). To prepare the array into <em>inputs</em>, either the <a href="/docs/transformers/pr_15750/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> or
<a href="/docs/transformers/pr_15750/en/model_doc/speech_to_text#transformers.Speech2TextProcessor">Speech2TextProcessor</a> should be used for padding and conversion into a tensor of type
<em>torch.FloatTensor</em>.`,name:"inputs"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15750/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For training, <code>decoder_input_ids</code> are automatically created by the model by shifting the <code>labels</code> to the
right, replacing -100 by the <code>pad_token_id</code> and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor
of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the
decoder.`,name:"encoder_outputs"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_15750/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_15750/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>, <em>optional</em>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/pr_15750/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/pr_15750/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.SpeechEncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15750/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15750/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"
>SpeechEncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`}}),Q=new br({props:{$$slots:{default:[wr]},$$scope:{ctx:Be}}}),ge=new kt({props:{code:`from transformers import SpeechEncoderDecoderModel, Speech2Text2Processor
from datasets import load_dataset
import torch

processor = Speech2Text2Processor.from_pretrained("facebook/s2t-wav2vec2-large-en-de")
model = SpeechEncoderDecoderModel.from_pretrained("facebook/s2t-wav2vec2-large-en-de")

ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")

input_values = processor(ds[0]["audio"]["array"], return_tensors="pt").input_values
decoder_input_ids = torch.tensor([[model.config.decoder.decoder_start_token_id]])
outputs = model(input_values=input_values, decoder_input_ids=decoder_input_ids)

# inference (generation)
generated = model.generate(input_values)
translation = processor.batch_decode(generated),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechEncoderDecoderModel, Speech2Text2Processor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2Text2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = torch.tensor([[model.config.decoder.decoder_start_token_id]])
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_values=input_values, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference (generation)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>translation = processor.batch_decode(generated)`}}),_e=new Ve({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15750/src/transformers/models/speech_encoder_decoder/modeling_speech_encoder_decoder.py#L286",parametersDescription:[{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_15750/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/pr_15750/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.SpeechEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),ve=new kt({props:{code:`from transformers import SpeechEncoderDecoderModel

# initialize a wav2vec2bert from a pretrained Wav2Vec2 and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized
model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
    "facebook/wav2vec2-base-960h", "bert-base-uncased"
)
# saving model after fine-tuning
model.save_pretrained("./wav2vec2bert")
# load fine-tuned model
model = SpeechEncoderDecoderModel.from_pretrained("./wav2vec2bert"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SpeechEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a wav2vec2bert from a pretrained Wav2Vec2 and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./wav2vec2bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./wav2vec2bert&quot;</span>)`}}),{c(){f=a("meta"),q=i(),g=a("h1"),v=a("a"),N=a("span"),T(S.$$.fragment),P=i(),J=a("span"),Mo=t("Speech Encoder Decoder Models"),po=i(),b=a("p"),xo=t("The "),ye=a("a"),qo=t("SpeechEncoderDecoderModel"),Po=t(` can be used to initialize a speech-sequence-to-text-sequence model
with any pretrained speech autoencoding model as the encoder (`),Oe=a("em"),jo=t("e.g."),Co=i(),Ee=a("a"),zo=t("Wav2Vec2"),Ao=t(", "),Se=a("a"),Fo=t("Hubert"),Lo=t(") and any pretrained autoregressive model as the decoder."),ho=i(),j=a("p"),No=t(`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),Re=a("em"),Wo=t("e.g."),Io=t(" been shown in "),X=a("a"),Vo=t(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Bo=t(` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),mo=i(),C=a("p"),Oo=t("An example of how to use a "),Te=a("a"),Ro=t("SpeechEncoderDecoderModel"),Ho=t(` for inference can be seen in
`),ke=a("a"),Jo=t("Speech2Text2"),Uo=t("."),fo=i(),W=a("h2"),U=a("a"),He=a("span"),T(ee.$$.fragment),Go=i(),Je=a("span"),Yo=t("SpeechEncoderDecoderConfig"),uo=i(),u=a("div"),T(oe.$$.fragment),Zo=i(),G=a("p"),De=a("a"),Ko=t("SpeechEncoderDecoderConfig"),Qo=t(` is the configuration class to store the configuration of a
`),$e=a("a"),Xo=t("SpeechEncoderDecoderModel"),en=t(`. It is used to instantiate an Encoder Decoder model according to the specified
arguments, defining the encoder and decoder configs.`),on=i(),I=a("p"),nn=t("Configuration objects inherit from "),Me=a("a"),tn=t("PretrainedConfig"),rn=t(` and can be used to control the model outputs. Read the
documentation from `),xe=a("a"),an=t("PretrainedConfig"),sn=t(" for more information."),dn=i(),Ue=a("p"),cn=t("Examples:"),ln=i(),T(ne.$$.fragment),pn=i(),Y=a("div"),T(te.$$.fragment),hn=i(),re=a("p"),mn=t("Instantiate a "),qe=a("a"),fn=t("SpeechEncoderDecoderConfig"),un=t(` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),gn=i(),Z=a("div"),T(ae.$$.fragment),_n=i(),V=a("p"),vn=t("Serializes this instance to a Python dictionary. Override the default "),Ge=a("em"),bn=t("to_dict()"),wn=t(" from "),Ye=a("em"),yn=t("PretrainedConfig"),En=t("."),go=i(),B=a("h2"),K=a("a"),Ze=a("span"),T(se.$$.fragment),Sn=i(),Ke=a("span"),Tn=t("SpeechEncoderDecoderModel"),_o=i(),p=a("div"),T(de.$$.fragment),kn=i(),O=a("p"),Dn=t(`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),Qe=a("code"),$n=t("from_pretrained()"),Mn=t(`function and the decoder is loaded via
`),Xe=a("code"),xn=t("from_pretrained()"),qn=t(`function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),Pn=i(),ce=a("p"),jn=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),ie=a("a"),Cn=t(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),zn=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),An=i(),le=a("p"),Fn=t("Additionally, in "),pe=a("a"),Ln=t(`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),Nn=t(` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),Wn=i(),eo=a("p"),In=t(`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),Vn=i(),he=a("p"),Bn=t("This model inherits from "),Pe=a("a"),On=t("PreTrainedModel"),Rn=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hn=i(),me=a("p"),Jn=t("This model is also a PyTorch "),fe=a("a"),Un=t("torch.nn.Module"),Gn=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yn=i(),z=a("p"),je=a("a"),Zn=t("SpeechEncoderDecoderModel"),Kn=t(` is a generic model class that will be instantiated as a transformer architecture with
one of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),oo=a("em"),Qn=t("~transformers.AutoModel.from_pretrained"),Xn=t(` class method for the encoder and
:meth`),no=a("em"),et=t("~transformers.AutoModelForCausalLM.from_pretrained"),ot=t(" class method for the decoder."),nt=i(),w=a("div"),T(ue.$$.fragment),tt=i(),R=a("p"),rt=t("The "),Ce=a("a"),at=t("SpeechEncoderDecoderModel"),st=t(" forward method, overrides the "),to=a("code"),dt=t("__call__"),ct=t(" special method."),it=i(),T(Q.$$.fragment),lt=i(),ro=a("p"),pt=t("Examples:"),ht=i(),T(ge.$$.fragment),mt=i(),y=a("div"),T(_e.$$.fragment),ft=i(),ao=a("p"),ut=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),gt=i(),H=a("p"),_t=t("The model is set in evaluation mode by default using "),so=a("code"),vt=t("model.eval()"),bt=t(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),co=a("code"),wt=t("model.train()"),yt=t("."),Et=i(),io=a("p"),St=t("Example:"),Tt=i(),T(ve.$$.fragment),this.h()},l(n){const h=vr('[data-svelte="svelte-1phssyn"]',document.head);f=s(h,"META",{name:!0,content:!0}),h.forEach(o),q=l(n),g=s(n,"H1",{class:!0});var be=d(g);v=s(be,"A",{id:!0,class:!0,href:!0});var $t=d(v);N=s($t,"SPAN",{});var Mt=d(N);k(S.$$.fragment,Mt),Mt.forEach(o),$t.forEach(o),P=l(be),J=s(be,"SPAN",{});var xt=d(J);Mo=r(xt,"Speech Encoder Decoder Models"),xt.forEach(o),be.forEach(o),po=l(n),b=s(n,"P",{});var A=d(b);xo=r(A,"The "),ye=s(A,"A",{href:!0});var qt=d(ye);qo=r(qt,"SpeechEncoderDecoderModel"),qt.forEach(o),Po=r(A,` can be used to initialize a speech-sequence-to-text-sequence model
with any pretrained speech autoencoding model as the encoder (`),Oe=s(A,"EM",{});var Pt=d(Oe);jo=r(Pt,"e.g."),Pt.forEach(o),Co=l(A),Ee=s(A,"A",{href:!0});var jt=d(Ee);zo=r(jt,"Wav2Vec2"),jt.forEach(o),Ao=r(A,", "),Se=s(A,"A",{href:!0});var Ct=d(Se);Fo=r(Ct,"Hubert"),Ct.forEach(o),Lo=r(A,") and any pretrained autoregressive model as the decoder."),A.forEach(o),ho=l(n),j=s(n,"P",{});var ze=d(j);No=r(ze,`The effectiveness of initializing speech-sequence-to-text-sequence models with pretrained checkpoints for speech
recognition and speech translation has `),Re=s(ze,"EM",{});var zt=d(Re);Wo=r(zt,"e.g."),zt.forEach(o),Io=r(ze," been shown in "),X=s(ze,"A",{href:!0,rel:!0});var At=d(X);Vo=r(At,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),At.forEach(o),Bo=r(ze,` by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli,
Alexis Conneau.`),ze.forEach(o),mo=l(n),C=s(n,"P",{});var Ae=d(C);Oo=r(Ae,"An example of how to use a "),Te=s(Ae,"A",{href:!0});var Ft=d(Te);Ro=r(Ft,"SpeechEncoderDecoderModel"),Ft.forEach(o),Ho=r(Ae,` for inference can be seen in
`),ke=s(Ae,"A",{href:!0});var Lt=d(ke);Jo=r(Lt,"Speech2Text2"),Lt.forEach(o),Uo=r(Ae,"."),Ae.forEach(o),fo=l(n),W=s(n,"H2",{class:!0});var bo=d(W);U=s(bo,"A",{id:!0,class:!0,href:!0});var Nt=d(U);He=s(Nt,"SPAN",{});var Wt=d(He);k(ee.$$.fragment,Wt),Wt.forEach(o),Nt.forEach(o),Go=l(bo),Je=s(bo,"SPAN",{});var It=d(Je);Yo=r(It,"SpeechEncoderDecoderConfig"),It.forEach(o),bo.forEach(o),uo=l(n),u=s(n,"DIV",{class:!0});var E=d(u);k(oe.$$.fragment,E),Zo=l(E),G=s(E,"P",{});var lo=d(G);De=s(lo,"A",{href:!0});var Vt=d(De);Ko=r(Vt,"SpeechEncoderDecoderConfig"),Vt.forEach(o),Qo=r(lo,` is the configuration class to store the configuration of a
`),$e=s(lo,"A",{href:!0});var Bt=d($e);Xo=r(Bt,"SpeechEncoderDecoderModel"),Bt.forEach(o),en=r(lo,`. It is used to instantiate an Encoder Decoder model according to the specified
arguments, defining the encoder and decoder configs.`),lo.forEach(o),on=l(E),I=s(E,"P",{});var Fe=d(I);nn=r(Fe,"Configuration objects inherit from "),Me=s(Fe,"A",{href:!0});var Ot=d(Me);tn=r(Ot,"PretrainedConfig"),Ot.forEach(o),rn=r(Fe,` and can be used to control the model outputs. Read the
documentation from `),xe=s(Fe,"A",{href:!0});var Rt=d(xe);an=r(Rt,"PretrainedConfig"),Rt.forEach(o),sn=r(Fe," for more information."),Fe.forEach(o),dn=l(E),Ue=s(E,"P",{});var Ht=d(Ue);cn=r(Ht,"Examples:"),Ht.forEach(o),ln=l(E),k(ne.$$.fragment,E),pn=l(E),Y=s(E,"DIV",{class:!0});var wo=d(Y);k(te.$$.fragment,wo),hn=l(wo),re=s(wo,"P",{});var yo=d(re);mn=r(yo,"Instantiate a "),qe=s(yo,"A",{href:!0});var Jt=d(qe);fn=r(Jt,"SpeechEncoderDecoderConfig"),Jt.forEach(o),un=r(yo,` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),yo.forEach(o),wo.forEach(o),gn=l(E),Z=s(E,"DIV",{class:!0});var Eo=d(Z);k(ae.$$.fragment,Eo),_n=l(Eo),V=s(Eo,"P",{});var Le=d(V);vn=r(Le,"Serializes this instance to a Python dictionary. Override the default "),Ge=s(Le,"EM",{});var Ut=d(Ge);bn=r(Ut,"to_dict()"),Ut.forEach(o),wn=r(Le," from "),Ye=s(Le,"EM",{});var Gt=d(Ye);yn=r(Gt,"PretrainedConfig"),Gt.forEach(o),En=r(Le,"."),Le.forEach(o),Eo.forEach(o),E.forEach(o),go=l(n),B=s(n,"H2",{class:!0});var So=d(B);K=s(So,"A",{id:!0,class:!0,href:!0});var Yt=d(K);Ze=s(Yt,"SPAN",{});var Zt=d(Ze);k(se.$$.fragment,Zt),Zt.forEach(o),Yt.forEach(o),Sn=l(So),Ke=s(So,"SPAN",{});var Kt=d(Ke);Tn=r(Kt,"SpeechEncoderDecoderModel"),Kt.forEach(o),So.forEach(o),_o=l(n),p=s(n,"DIV",{class:!0});var m=d(p);k(de.$$.fragment,m),kn=l(m),O=s(m,"P",{});var Ne=d(O);Dn=r(Ne,`This class can be used to initialize a speech-sequence-to-text-sequence model with any pretrained speech
autoencoding model as the encoder and any pretrained text autoregressive model as the decoder. The encoder is
loaded via `),Qe=s(Ne,"CODE",{});var Qt=d(Qe);$n=r(Qt,"from_pretrained()"),Qt.forEach(o),Mn=r(Ne,`function and the decoder is loaded via
`),Xe=s(Ne,"CODE",{});var Xt=d(Xe);xn=r(Xt,"from_pretrained()"),Xt.forEach(o),qn=r(Ne,`function. Cross-attention layers are automatically added to the decoder
and should be fine-tuned on a downstream generative task, like summarization.`),Ne.forEach(o),Pn=l(m),ce=s(m,"P",{});var To=d(ce);jn=r(To,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),ie=s(To,"A",{href:!0,rel:!0});var er=d(ie);Cn=r(er,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),er.forEach(o),zn=r(To,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),To.forEach(o),An=l(m),le=s(m,"P",{});var ko=d(le);Fn=r(ko,"Additionally, in "),pe=s(ko,"A",{href:!0,rel:!0});var or=d(pe);Ln=r(or,`Large-Scale Self- and Semi-Supervised Learning for Speech
Translation`),or.forEach(o),Nn=r(ko,` it is shown how leveraging large pretrained speech models for speech
translation yields a significant performance improvement.`),ko.forEach(o),Wn=l(m),eo=s(m,"P",{});var nr=d(eo);In=r(nr,`After such an Speech-Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other
models (see the examples for more information).`),nr.forEach(o),Vn=l(m),he=s(m,"P",{});var Do=d(he);Bn=r(Do,"This model inherits from "),Pe=s(Do,"A",{href:!0});var tr=d(Pe);On=r(tr,"PreTrainedModel"),tr.forEach(o),Rn=r(Do,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Do.forEach(o),Hn=l(m),me=s(m,"P",{});var $o=d(me);Jn=r($o,"This model is also a PyTorch "),fe=s($o,"A",{href:!0,rel:!0});var rr=d(fe);Un=r(rr,"torch.nn.Module"),rr.forEach(o),Gn=r($o,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$o.forEach(o),Yn=l(m),z=s(m,"P",{});var we=d(z);je=s(we,"A",{href:!0});var ar=d(je);Zn=r(ar,"SpeechEncoderDecoderModel"),ar.forEach(o),Kn=r(we,` is a generic model class that will be instantiated as a transformer architecture with
one of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),oo=s(we,"EM",{});var sr=d(oo);Qn=r(sr,"~transformers.AutoModel.from_pretrained"),sr.forEach(o),Xn=r(we,` class method for the encoder and
:meth`),no=s(we,"EM",{});var dr=d(no);et=r(dr,"~transformers.AutoModelForCausalLM.from_pretrained"),dr.forEach(o),ot=r(we," class method for the decoder."),we.forEach(o),nt=l(m),w=s(m,"DIV",{class:!0});var F=d(w);k(ue.$$.fragment,F),tt=l(F),R=s(F,"P",{});var We=d(R);rt=r(We,"The "),Ce=s(We,"A",{href:!0});var cr=d(Ce);at=r(cr,"SpeechEncoderDecoderModel"),cr.forEach(o),st=r(We," forward method, overrides the "),to=s(We,"CODE",{});var ir=d(to);dt=r(ir,"__call__"),ir.forEach(o),ct=r(We," special method."),We.forEach(o),it=l(F),k(Q.$$.fragment,F),lt=l(F),ro=s(F,"P",{});var lr=d(ro);pt=r(lr,"Examples:"),lr.forEach(o),ht=l(F),k(ge.$$.fragment,F),F.forEach(o),mt=l(m),y=s(m,"DIV",{class:!0});var L=d(y);k(_e.$$.fragment,L),ft=l(L),ao=s(L,"P",{});var pr=d(ao);ut=r(pr,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),pr.forEach(o),gt=l(L),H=s(L,"P",{});var Ie=d(H);_t=r(Ie,"The model is set in evaluation mode by default using "),so=s(Ie,"CODE",{});var hr=d(so);vt=r(hr,"model.eval()"),hr.forEach(o),bt=r(Ie,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),co=s(Ie,"CODE",{});var mr=d(co);wt=r(mr,"model.train()"),mr.forEach(o),yt=r(Ie,"."),Ie.forEach(o),Et=l(L),io=s(L,"P",{});var fr=d(io);St=r(fr,"Example:"),fr.forEach(o),Tt=l(L),k(ve.$$.fragment,L),L.forEach(o),m.forEach(o),this.h()},h(){c(f,"name","hf:doc:metadata"),c(f,"content",JSON.stringify(Er)),c(v,"id","speech-encoder-decoder-models"),c(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(v,"href","#speech-encoder-decoder-models"),c(g,"class","relative group"),c(ye,"href","/docs/transformers/pr_15750/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(Ee,"href","wav2vec2"),c(Se,"href","hubert"),c(X,"href","https://arxiv.org/abs/2104.06678"),c(X,"rel","nofollow"),c(Te,"href","/docs/transformers/pr_15750/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(ke,"href","speech_to_text_2"),c(U,"id","transformers.SpeechEncoderDecoderConfig"),c(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(U,"href","#transformers.SpeechEncoderDecoderConfig"),c(W,"class","relative group"),c(De,"href","/docs/transformers/pr_15750/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"),c($e,"href","/docs/transformers/pr_15750/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(Me,"href","/docs/transformers/pr_15750/en/main_classes/configuration#transformers.PretrainedConfig"),c(xe,"href","/docs/transformers/pr_15750/en/main_classes/configuration#transformers.PretrainedConfig"),c(qe,"href","/docs/transformers/pr_15750/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderConfig"),c(Y,"class","docstring"),c(Z,"class","docstring"),c(u,"class","docstring"),c(K,"id","transformers.SpeechEncoderDecoderModel"),c(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(K,"href","#transformers.SpeechEncoderDecoderModel"),c(B,"class","relative group"),c(ie,"href","https://arxiv.org/abs/1907.12461"),c(ie,"rel","nofollow"),c(pe,"href","https://arxiv.org/abs/2104.06678"),c(pe,"rel","nofollow"),c(Pe,"href","/docs/transformers/pr_15750/en/main_classes/model#transformers.PreTrainedModel"),c(fe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fe,"rel","nofollow"),c(je,"href","/docs/transformers/pr_15750/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(Ce,"href","/docs/transformers/pr_15750/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c(w,"class","docstring"),c(y,"class","docstring"),c(p,"class","docstring")},m(n,h){e(document.head,f),_(n,q,h),_(n,g,h),e(g,v),e(v,N),D(S,N,null),e(g,P),e(g,J),e(J,Mo),_(n,po,h),_(n,b,h),e(b,xo),e(b,ye),e(ye,qo),e(b,Po),e(b,Oe),e(Oe,jo),e(b,Co),e(b,Ee),e(Ee,zo),e(b,Ao),e(b,Se),e(Se,Fo),e(b,Lo),_(n,ho,h),_(n,j,h),e(j,No),e(j,Re),e(Re,Wo),e(j,Io),e(j,X),e(X,Vo),e(j,Bo),_(n,mo,h),_(n,C,h),e(C,Oo),e(C,Te),e(Te,Ro),e(C,Ho),e(C,ke),e(ke,Jo),e(C,Uo),_(n,fo,h),_(n,W,h),e(W,U),e(U,He),D(ee,He,null),e(W,Go),e(W,Je),e(Je,Yo),_(n,uo,h),_(n,u,h),D(oe,u,null),e(u,Zo),e(u,G),e(G,De),e(De,Ko),e(G,Qo),e(G,$e),e($e,Xo),e(G,en),e(u,on),e(u,I),e(I,nn),e(I,Me),e(Me,tn),e(I,rn),e(I,xe),e(xe,an),e(I,sn),e(u,dn),e(u,Ue),e(Ue,cn),e(u,ln),D(ne,u,null),e(u,pn),e(u,Y),D(te,Y,null),e(Y,hn),e(Y,re),e(re,mn),e(re,qe),e(qe,fn),e(re,un),e(u,gn),e(u,Z),D(ae,Z,null),e(Z,_n),e(Z,V),e(V,vn),e(V,Ge),e(Ge,bn),e(V,wn),e(V,Ye),e(Ye,yn),e(V,En),_(n,go,h),_(n,B,h),e(B,K),e(K,Ze),D(se,Ze,null),e(B,Sn),e(B,Ke),e(Ke,Tn),_(n,_o,h),_(n,p,h),D(de,p,null),e(p,kn),e(p,O),e(O,Dn),e(O,Qe),e(Qe,$n),e(O,Mn),e(O,Xe),e(Xe,xn),e(O,qn),e(p,Pn),e(p,ce),e(ce,jn),e(ce,ie),e(ie,Cn),e(ce,zn),e(p,An),e(p,le),e(le,Fn),e(le,pe),e(pe,Ln),e(le,Nn),e(p,Wn),e(p,eo),e(eo,In),e(p,Vn),e(p,he),e(he,Bn),e(he,Pe),e(Pe,On),e(he,Rn),e(p,Hn),e(p,me),e(me,Jn),e(me,fe),e(fe,Un),e(me,Gn),e(p,Yn),e(p,z),e(z,je),e(je,Zn),e(z,Kn),e(z,oo),e(oo,Qn),e(z,Xn),e(z,no),e(no,et),e(z,ot),e(p,nt),e(p,w),D(ue,w,null),e(w,tt),e(w,R),e(R,rt),e(R,Ce),e(Ce,at),e(R,st),e(R,to),e(to,dt),e(R,ct),e(w,it),D(Q,w,null),e(w,lt),e(w,ro),e(ro,pt),e(w,ht),D(ge,w,null),e(p,mt),e(p,y),D(_e,y,null),e(y,ft),e(y,ao),e(ao,ut),e(y,gt),e(y,H),e(H,_t),e(H,so),e(so,vt),e(H,bt),e(H,co),e(co,wt),e(H,yt),e(y,Et),e(y,io),e(io,St),e(y,Tt),D(ve,y,null),vo=!0},p(n,[h]){const be={};h&2&&(be.$$scope={dirty:h,ctx:n}),Q.$set(be)},i(n){vo||($(S.$$.fragment,n),$(ee.$$.fragment,n),$(oe.$$.fragment,n),$(ne.$$.fragment,n),$(te.$$.fragment,n),$(ae.$$.fragment,n),$(se.$$.fragment,n),$(de.$$.fragment,n),$(ue.$$.fragment,n),$(Q.$$.fragment,n),$(ge.$$.fragment,n),$(_e.$$.fragment,n),$(ve.$$.fragment,n),vo=!0)},o(n){M(S.$$.fragment,n),M(ee.$$.fragment,n),M(oe.$$.fragment,n),M(ne.$$.fragment,n),M(te.$$.fragment,n),M(ae.$$.fragment,n),M(se.$$.fragment,n),M(de.$$.fragment,n),M(ue.$$.fragment,n),M(Q.$$.fragment,n),M(ge.$$.fragment,n),M(_e.$$.fragment,n),M(ve.$$.fragment,n),vo=!1},d(n){o(f),n&&o(q),n&&o(g),x(S),n&&o(po),n&&o(b),n&&o(ho),n&&o(j),n&&o(mo),n&&o(C),n&&o(fo),n&&o(W),x(ee),n&&o(uo),n&&o(u),x(oe),x(ne),x(te),x(ae),n&&o(go),n&&o(B),x(se),n&&o(_o),n&&o(p),x(de),x(ue),x(Q),x(ge),x(_e),x(ve)}}}const Er={local:"speech-encoder-decoder-models",sections:[{local:"transformers.SpeechEncoderDecoderConfig",title:"SpeechEncoderDecoderConfig"},{local:"transformers.SpeechEncoderDecoderModel",title:"SpeechEncoderDecoderModel"}],title:"Speech Encoder Decoder Models"};function Sr(Be,f,q){let{fw:g}=f;return Be.$$set=v=>{"fw"in v&&q(0,g=v.fw)},[g]}class qr extends ur{constructor(f){super();gr(this,f,Sr,yr,_r,{fw:0})}}export{qr as default,Er as metadata};
