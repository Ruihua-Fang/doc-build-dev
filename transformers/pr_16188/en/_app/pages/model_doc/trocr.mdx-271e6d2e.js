import{S as _i,i as vi,s as Ti,e as s,k as d,w as v,t as o,M as bi,c as n,d as r,m as c,a as i,x as T,h as a,b as l,N as Ci,F as e,g as p,y as b,q as C,o as w,B as k,v as wi}from"../../chunks/vendor-6b77c823.js";import{T as gi}from"../../chunks/Tip-39098574.js";import{D as J}from"../../chunks/Docstring-abef54e3.js";import{C as Zs}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as zt}from"../../chunks/IconCopyLink-7a11ce68.js";function ki(at){let m,q,u,$,F,y,A,L;return{c(){m=s("p"),q=o(`This class method is simply calling the feature extractor
`),u=s("a"),$=o("from_pretrained()"),F=o(` and the tokenizer
`),y=s("code"),A=o("from_pretrained"),L=o(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(x){m=n(x,"P",{});var _=i(m);q=a(_,`This class method is simply calling the feature extractor
`),u=n(_,"A",{href:!0});var P=i(u);$=a(P,"from_pretrained()"),P.forEach(r),F=a(_,` and the tokenizer
`),y=n(_,"CODE",{});var z=i(y);A=a(z,"from_pretrained"),z.forEach(r),L=a(_,` methods. Please refer to the docstrings of the
methods above for more information.`),_.forEach(r),this.h()},h(){l(u,"href","/docs/transformers/pr_16188/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(x,_){p(x,m,_),e(m,q),e(m,u),e(u,$),e(m,F),e(m,y),e(y,A),e(m,L)},d(x){x&&r(m)}}}function Oi(at){let m,q,u,$,F,y,A,L;return{c(){m=s("p"),q=o("This class method is simply calling "),u=s("a"),$=o("save_pretrained()"),F=o(` and
`),y=s("code"),A=o("save_pretrained"),L=o(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(x){m=n(x,"P",{});var _=i(m);q=a(_,"This class method is simply calling "),u=n(_,"A",{href:!0});var P=i(u);$=a(P,"save_pretrained()"),P.forEach(r),F=a(_,` and
`),y=n(_,"CODE",{});var z=i(y);A=a(z,"save_pretrained"),z.forEach(r),L=a(_,`. Please refer to the docstrings of the methods
above for more information.`),_.forEach(r),this.h()},h(){l(u,"href","/docs/transformers/pr_16188/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(x,_){p(x,m,_),e(m,q),e(m,u),e(u,$),e(m,F),e(m,y),e(y,A),e(m,L)},d(x){x&&r(m)}}}function yi(at){let m,q,u,$,F,y,A,L,x,_,P,z,Ft,Ce,ro,Lt,oo,gr,S,ao,we,so,no,ke,io,lo,_r,st,co,vr,nt,Dt,ho,Tr,oe,Js,br,ae,po,it,mo,fo,Cr,se,uo,qt,go,_o,wr,W,vo,Oe,To,bo,ye,Co,wo,kr,lt,ko,Or,H,Re,Oo,Ee,yo,Ro,Eo,I,$o,$e,xo,Po,xe,Mo,jo,Pe,zo,Fo,Lo,Me,Do,dt,qo,Ao,yr,Y,ne,At,je,Io,It,Vo,Rr,B,No,Vt,So,Wo,ct,Ho,Bo,Er,f,Uo,Nt,Xo,Go,St,Zo,Jo,Wt,Yo,Ko,Ht,Qo,ea,ht,ta,ra,Bt,oa,aa,Ut,sa,na,Xt,ia,la,Gt,da,ca,$r,pt,Zt,ha,xr,ze,Pr,ie,pa,Fe,ma,fa,Mr,K,le,Jt,Le,ua,Yt,ga,jr,M,De,_a,Q,va,mt,Ta,ba,qe,Ca,wa,ka,ee,Oa,ft,ya,Ra,ut,Ea,$a,xa,Kt,Pa,Ma,Ae,zr,te,de,Qt,Ie,ja,er,za,Fr,g,Ve,Fa,tr,La,Da,R,gt,qa,Aa,rr,Ia,Va,or,Na,Sa,ar,Wa,Ha,sr,Ba,Ua,Ne,nr,Xa,Ga,Za,_t,Ja,Ya,Ka,ce,Se,Qa,V,es,ir,ts,rs,vt,os,as,lr,ss,ns,is,U,We,ls,dr,ds,cs,he,hs,X,He,ps,Be,ms,Tt,fs,us,gs,pe,_s,me,Ue,vs,Xe,Ts,bt,bs,Cs,ws,fe,Ge,ks,Ze,Os,Ct,ys,Rs,Es,ue,Je,$s,cr,xs,Lr,re,ge,hr,Ye,Ps,pr,Ms,Dr,D,Ke,js,N,zs,wt,Fs,Ls,mr,Ds,qs,kt,As,Is,Vs,Qe,Ns,et,Ss,Ws,Hs,G,tt,Bs,fr,Us,Xs,rt,qr;return y=new zt({}),Ce=new zt({}),je=new zt({}),ze=new Zs({props:{code:`from transformers import TrOCRProcessor, VisionEncoderDecoderModel
import requests 
from PIL import Image

processor = TrOCRProcessor.from_pretrained("microsoft/trocr-base-handwritten") 
model = VisionEncoderDecoderModel.from_pretrained("microsoft/trocr-base-handwritten")

# load image from the IAM dataset 
url = "https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg" 
image = Image.open(requests.get(url, stream=True).raw).convert("RGB")

pixel_values = processor(image, return_tensors="pt").pixel_values 
generated_ids = model.generate(pixel_values)

generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0] `,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrOCRProcessor, VisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests 
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = TrOCRProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>) 
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load image from the IAM dataset </span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg&quot;</span> 
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values 
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(pixel_values)

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>] `}}),Le=new zt({}),De=new J({props:{name:"class transformers.TrOCRConfig",anchor:"transformers.TrOCRConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"d_model",val:" = 1024"},{name:"decoder_layers",val:" = 12"},{name:"decoder_attention_heads",val:" = 16"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"activation_function",val:" = 'gelu'"},{name:"max_position_embeddings",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = False"},{name:"scale_embedding",val:" = False"},{name:"use_learned_position_embeddings",val:" = True"},{name:"layernorm_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16188/src/transformers/models/trocr/configuration_trocr.py#L29",parametersDescription:[{anchor:"transformers.TrOCRConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the TrOCR model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16188/en/model_doc/trocr#transformers.TrOCRForCausalLM">TrOCRForCausalLM</a>.`,name:"vocab_size"},{anchor:"transformers.TrOCRConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.TrOCRConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.TrOCRConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.TrOCRConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.TrOCRConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the pooler. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>,
<code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.TrOCRConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.TrOCRConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, and pooler.`,name:"dropout"},{anchor:"transformers.TrOCRConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.TrOCRConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.TrOCRConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.TrOCRConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.TrOCRConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.TrOCRConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to scale the word embeddings by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.TrOCRConfig.use_learned_position_embeddings",description:`<strong>use_learned_position_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use learned position embeddings. If not, sinusoidal position embeddings will be used.`,name:"use_learned_position_embeddings"},{anchor:"transformers.TrOCRConfig.layernorm_embedding",description:`<strong>layernorm_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a layernorm after the word + position embeddings.`,name:"layernorm_embedding"}]}}),Ae=new Zs({props:{code:`from transformers import TrOCRForCausalLM, TrOCRConfig

# Initializing a TrOCR-base style configuration
configuration = TrOCRConfig()

# Initializing a model from the TrOCR-base style configuration
model = TrOCRForCausalLM(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrOCRForCausalLM, TrOCRConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a TrOCR-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = TrOCRConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the TrOCR-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TrOCRForCausalLM(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Ie=new zt({}),Ve=new J({props:{name:"class transformers.TrOCRProcessor",anchor:"transformers.TrOCRProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16188/src/transformers/models/trocr/processing_trocr.py#L23",parametersDescription:[{anchor:"transformers.TrOCRProcessor.feature_extractor",description:`<strong>feature_extractor</strong> ([<code>ViTFeatureExtractor</code>/<code>DeiTFeatureExtractor</code>]) &#x2014;
An instance of [<code>ViTFeatureExtractor</code>/<code>DeiTFeatureExtractor</code>]. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.TrOCRProcessor.tokenizer",description:`<strong>tokenizer</strong> ([<code>RobertaTokenizer</code>/<code>XLMRobertaTokenizer</code>]) &#x2014;
An instance of [<code>RobertaTokenizer</code>/<code>XLMRobertaTokenizer</code>]. The tokenizer is a required input.`,name:"tokenizer"}]}}),Se=new J({props:{name:"__call__",anchor:"transformers.TrOCRProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16188/src/transformers/models/trocr/processing_trocr.py#L44"}}),We=new J({props:{name:"from_pretrained",anchor:"transformers.TrOCRProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16188/src/transformers/processing_utils.py#L156",parametersDescription:[{anchor:"transformers.TrOCRProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/pr_16188/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/pr_16188/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}]}}),he=new gi({props:{$$slots:{default:[ki]},$$scope:{ctx:at}}}),He=new J({props:{name:"save_pretrained",anchor:"transformers.TrOCRProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16188/src/transformers/processing_utils.py#L94",parametersDescription:[{anchor:"transformers.TrOCRProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.TrOCRProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/pr_16188/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}]}}),pe=new gi({props:{$$slots:{default:[Oi]},$$scope:{ctx:at}}}),Ue=new J({props:{name:"batch_decode",anchor:"transformers.TrOCRProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16188/src/transformers/models/trocr/processing_trocr.py#L53"}}),Ge=new J({props:{name:"decode",anchor:"transformers.TrOCRProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16188/src/transformers/models/trocr/processing_trocr.py#L60"}}),Je=new J({props:{name:"as_target_processor",anchor:"transformers.TrOCRProcessor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16188/src/transformers/models/trocr/processing_trocr.py#L67"}}),Ye=new zt({}),Ke=new J({props:{name:"class transformers.TrOCRForCausalLM",anchor:"transformers.TrOCRForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16188/src/transformers/models/trocr/modeling_trocr.py#L775",parametersDescription:[{anchor:"transformers.TrOCRForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16188/en/model_doc/trocr#transformers.TrOCRConfig">TrOCRConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16188/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),tt=new J({props:{name:"forward",anchor:"transformers.TrOCRForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16188/src/transformers/models/trocr/modeling_trocr.py#L806",parametersDescription:[{anchor:"transformers.TrOCRForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <code>TrOCRTokenizer</code>. See <a href="/docs/transformers/pr_16188/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16188/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TrOCRForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TrOCRForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TrOCRForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.TrOCRForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TrOCRForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TrOCRForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TrOCRForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.TrOCRForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.TrOCRForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TrOCRForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.TrOCRForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16188/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16188/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16188/en/model_doc/trocr#transformers.TrOCRConfig"
>TrOCRConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16188/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rt=new Zs({props:{code:`from transformers import (
    TrOCRConfig,
    TrOCRProcessor,
    TrOCRForCausalLM,
    ViTConfig,
    ViTModel,
    VisionEncoderDecoderModel,
)
import requests
from PIL import Image

# TrOCR is a decoder model and should be used within a VisionEncoderDecoderModel
# init vision2text model with random weights
encoder = ViTModel(ViTConfig())
decoder = TrOCRForCausalLM(TrOCRConfig())
model = VisionEncoderDecoderModel(encoder=encoder, decoder=decoder)

# If you want to start from the pretrained model, load the checkpoint with \`VisionEncoderDecoderModel\`
processor = TrOCRProcessor.from_pretrained("microsoft/trocr-base-handwritten")
model = VisionEncoderDecoderModel.from_pretrained("microsoft/trocr-base-handwritten")

# load image from the IAM dataset
url = "https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg"
image = Image.open(requests.get(url, stream=True).raw).convert("RGB")
pixel_values = processor(image, return_tensors="pt").pixel_values
text = "industry, ' Mr. Brown commented icily. ' Let us have a"

# training
model.config.decoder_start_token_id = processor.tokenizer.cls_token_id
model.config.pad_token_id = processor.tokenizer.pad_token_id
model.config.vocab_size = model.config.decoder.vocab_size

labels = processor.tokenizer(text, return_tensors="pt").input_ids
outputs = model(pixel_values, labels=labels)
loss = outputs.loss
round(loss.item(), 2)

# inference
generated_ids = model.generate(pixel_values)
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]
generated_text`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    TrOCRConfig,
<span class="hljs-meta">... </span>    TrOCRProcessor,
<span class="hljs-meta">... </span>    TrOCRForCausalLM,
<span class="hljs-meta">... </span>    ViTConfig,
<span class="hljs-meta">... </span>    ViTModel,
<span class="hljs-meta">... </span>    VisionEncoderDecoderModel,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># TrOCR is a decoder model and should be used within a VisionEncoderDecoderModel</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># init vision2text model with random weights</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder = ViTModel(ViTConfig())
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder = TrOCRForCausalLM(TrOCRConfig())
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel(encoder=encoder, decoder=decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># If you want to start from the pretrained model, load the checkpoint with \`VisionEncoderDecoderModel\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = TrOCRProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load image from the IAM dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;industry, &#x27; Mr. Brown commented icily. &#x27; Let us have a&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = processor.tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = processor.tokenizer.pad_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.vocab_size = model.config.decoder.vocab_size

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = processor.tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">5.30</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(pixel_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text
<span class="hljs-string">&#x27;industry, &quot; Mr. Brown commented icily. &quot; Let us have a&#x27;</span>`}}),{c(){m=s("meta"),q=d(),u=s("h1"),$=s("a"),F=s("span"),v(y.$$.fragment),A=d(),L=s("span"),x=o("TrOCR"),_=d(),P=s("h2"),z=s("a"),Ft=s("span"),v(Ce.$$.fragment),ro=d(),Lt=s("span"),oo=o("Overview"),gr=d(),S=s("p"),ao=o("The TrOCR model was proposed in "),we=s("a"),so=o(`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),no=o(` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei. TrOCR consists of an image Transformer encoder and an autoregressive text Transformer decoder to
perform `),ke=s("a"),io=o("optical character recognition (OCR)"),lo=o("."),_r=d(),st=s("p"),co=o("The abstract from the paper is the following:"),vr=d(),nt=s("p"),Dt=s("em"),ho=o(`Text recognition is a long-standing research problem for document digitalization. Existing approaches for text recognition
are usually built based on CNN for image understanding and RNN for char-level text generation. In addition, another language
model is usually needed to improve the overall accuracy as a post-processing step. In this paper, we propose an end-to-end
text recognition approach with pre-trained image Transformer and text Transformer models, namely TrOCR, which leverages the
Transformer architecture for both image understanding and wordpiece-level text generation. The TrOCR model is simple but
effective, and can be pre-trained with large-scale synthetic data and fine-tuned with human-labeled datasets. Experiments
show that the TrOCR model outperforms the current state-of-the-art models on both printed and handwritten text recognition
tasks.`),Tr=d(),oe=s("img"),br=d(),ae=s("small"),po=o("TrOCR architecture. Taken from the "),it=s("a"),mo=o("original paper"),fo=o("."),Cr=d(),se=s("p"),uo=o("Please refer to the "),qt=s("code"),go=o("VisionEncoderDecoder"),_o=o(" class on how to use this model."),wr=d(),W=s("p"),vo=o("This model was contributed by "),Oe=s("a"),To=o("nielsr"),bo=o(`. The original code can be found
`),ye=s("a"),Co=o("here"),wo=o("."),kr=d(),lt=s("p"),ko=o("Tips:"),Or=d(),H=s("ul"),Re=s("li"),Oo=o("The quickest way to get started with TrOCR is by checking the "),Ee=s("a"),yo=o(`tutorial
notebooks`),Ro=o(`, which show how to use the model
at inference time as well as fine-tuning on custom data.`),Eo=d(),I=s("li"),$o=o(`TrOCR is pre-trained in 2 stages before being fine-tuned on downstream datasets. It achieves state-of-the-art results
on both printed (e.g. the `),$e=s("a"),xo=o("SROIE dataset"),Po=o(" and handwritten (e.g. the "),xe=s("a"),Mo=o(`IAM
Handwriting dataset`),jo=o(` text recognition tasks. For more
information, see the `),Pe=s("a"),zo=o("official models"),Fo=o("."),Lo=d(),Me=s("li"),Do=o("TrOCR is always used within the "),dt=s("a"),qo=o("VisionEncoderDecoder"),Ao=o(" framework."),yr=d(),Y=s("h2"),ne=s("a"),At=s("span"),v(je.$$.fragment),Io=d(),It=s("span"),Vo=o("Inference"),Rr=d(),B=s("p"),No=o("TrOCR\u2019s "),Vt=s("code"),So=o("VisionEncoderDecoder"),Wo=o(` model accepts images as input and makes use of
`),ct=s("a"),Ho=o("generate()"),Bo=o(" to autoregressively generate text given the input image."),Er=d(),f=s("p"),Uo=o("The ["),Nt=s("code"),Xo=o("ViTFeatureExtractor"),Go=o("/"),St=s("code"),Zo=o("DeiTFeatureExtractor"),Jo=o(`] class is responsible for preprocessing the input image and
[`),Wt=s("code"),Yo=o("RobertaTokenizer"),Ko=o("/"),Ht=s("code"),Qo=o("XLMRobertaTokenizer"),ea=o(`] decodes the generated target tokens to the target string. The
`),ht=s("a"),ta=o("TrOCRProcessor"),ra=o(" wraps ["),Bt=s("code"),oa=o("ViTFeatureExtractor"),aa=o("/"),Ut=s("code"),sa=o("DeiTFeatureExtractor"),na=o("] and ["),Xt=s("code"),ia=o("RobertaTokenizer"),la=o("/"),Gt=s("code"),da=o("XLMRobertaTokenizer"),ca=o(`]
into a single instance to both extract the input features and decode the predicted token ids.`),$r=d(),pt=s("ul"),Zt=s("li"),ha=o("Step-by-step Optical Character Recognition (OCR)"),xr=d(),v(ze.$$.fragment),Pr=d(),ie=s("p"),pa=o("See the "),Fe=s("a"),ma=o("model hub"),fa=o(" to look for TrOCR checkpoints."),Mr=d(),K=s("h2"),le=s("a"),Jt=s("span"),v(Le.$$.fragment),ua=d(),Yt=s("span"),ga=o("TrOCRConfig"),jr=d(),M=s("div"),v(De.$$.fragment),_a=d(),Q=s("p"),va=o("This is the configuration class to store the configuration of a "),mt=s("a"),Ta=o("TrOCRForCausalLM"),ba=o(`. It is used to instantiate an
TrOCR model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the TrOCR
`),qe=s("a"),Ca=o("microsoft/trocr-base"),wa=o(" architecture."),ka=d(),ee=s("p"),Oa=o("Configuration objects inherit from "),ft=s("a"),ya=o("PretrainedConfig"),Ra=o(` and can be used to control the model outputs. Read the
documentation from `),ut=s("a"),Ea=o("PretrainedConfig"),$a=o(" for more information."),xa=d(),Kt=s("p"),Pa=o("Example:"),Ma=d(),v(Ae.$$.fragment),zr=d(),te=s("h2"),de=s("a"),Qt=s("span"),v(Ie.$$.fragment),ja=d(),er=s("span"),za=o("TrOCRProcessor"),Fr=d(),g=s("div"),v(Ve.$$.fragment),Fa=d(),tr=s("p"),La=o("Constructs a TrOCR processor which wraps a vision feature extractor and a TrOCR tokenizer into a single processor."),Da=d(),R=s("p"),gt=s("a"),qa=o("TrOCRProcessor"),Aa=o(" offers all the functionalities of ["),rr=s("code"),Ia=o("ViTFeatureExtractor"),Va=o("/"),or=s("code"),Na=o("DeiTFeatureExtractor"),Sa=o(`] and
[`),ar=s("code"),Wa=o("RobertaTokenizer"),Ha=o("/"),sr=s("code"),Ba=o("XLMRobertaTokenizer"),Ua=o("]. See the "),Ne=s("a"),nr=s("strong"),Xa=o("call"),Ga=o("()"),Za=o(" and "),_t=s("a"),Ja=o("decode()"),Ya=o(` for
more information.`),Ka=d(),ce=s("div"),v(Se.$$.fragment),Qa=d(),V=s("p"),es=o(`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),ir=s("code"),ts=o("__call__()"),rs=o(` and returns its output. If used in the context
`),vt=s("a"),os=o("as_target_processor()"),as=o(` this method forwards all its arguments to TrOCRTokenizer\u2019s
`),lr=s("code"),ss=o("__call__"),ns=o(". Please refer to the doctsring of the above two methods for more information."),is=d(),U=s("div"),v(We.$$.fragment),ls=d(),dr=s("p"),ds=o("Instantiate a processor associated with a pretrained model."),cs=d(),v(he.$$.fragment),hs=d(),X=s("div"),v(He.$$.fragment),ps=d(),Be=s("p"),ms=o(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Tt=s("a"),fs=o("from_pretrained()"),us=o(" method."),gs=d(),v(pe.$$.fragment),_s=d(),me=s("div"),v(Ue.$$.fragment),vs=d(),Xe=s("p"),Ts=o("This method forwards all its arguments to TrOCRTokenizer\u2019s "),bt=s("a"),bs=o("batch_decode()"),Cs=o(`. Please refer
to the docstring of this method for more information.`),ws=d(),fe=s("div"),v(Ge.$$.fragment),ks=d(),Ze=s("p"),Os=o("This method forwards all its arguments to TrOCRTokenizer\u2019s "),Ct=s("a"),ys=o("decode()"),Rs=o(`. Please refer to the
docstring of this method for more information.`),Es=d(),ue=s("div"),v(Je.$$.fragment),$s=d(),cr=s("p"),xs=o("Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning TrOCR."),Lr=d(),re=s("h2"),ge=s("a"),hr=s("span"),v(Ye.$$.fragment),Ps=d(),pr=s("span"),Ms=o("TrOCRForCausalLM"),Dr=d(),D=s("div"),v(Ke.$$.fragment),js=d(),N=s("p"),zs=o("The TrOCR Decoder with a language modeling head. Can be used as the decoder part of "),wt=s("a"),Fs=o("EncoderDecoderModel"),Ls=o(" and "),mr=s("code"),Ds=o("VisionEncoderDecoder"),qs=o(`.
This model inherits from `),kt=s("a"),As=o("PreTrainedModel"),Is=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vs=d(),Qe=s("p"),Ns=o("This model is also a PyTorch "),et=s("a"),Ss=o("torch.nn.Module"),Ws=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hs=d(),G=s("div"),v(tt.$$.fragment),Bs=d(),fr=s("p"),Us=o("Example:"),Xs=d(),v(rt.$$.fragment),this.h()},l(t){const h=bi('[data-svelte="svelte-1phssyn"]',document.head);m=n(h,"META",{name:!0,content:!0}),h.forEach(r),q=c(t),u=n(t,"H1",{class:!0});var ot=i(u);$=n(ot,"A",{id:!0,class:!0,href:!0});var ur=i($);F=n(ur,"SPAN",{});var Ys=i(F);T(y.$$.fragment,Ys),Ys.forEach(r),ur.forEach(r),A=c(ot),L=n(ot,"SPAN",{});var Ks=i(L);x=a(Ks,"TrOCR"),Ks.forEach(r),ot.forEach(r),_=c(t),P=n(t,"H2",{class:!0});var Ar=i(P);z=n(Ar,"A",{id:!0,class:!0,href:!0});var Qs=i(z);Ft=n(Qs,"SPAN",{});var en=i(Ft);T(Ce.$$.fragment,en),en.forEach(r),Qs.forEach(r),ro=c(Ar),Lt=n(Ar,"SPAN",{});var tn=i(Lt);oo=a(tn,"Overview"),tn.forEach(r),Ar.forEach(r),gr=c(t),S=n(t,"P",{});var Ot=i(S);ao=a(Ot,"The TrOCR model was proposed in "),we=n(Ot,"A",{href:!0,rel:!0});var rn=i(we);so=a(rn,`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),rn.forEach(r),no=a(Ot,` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei. TrOCR consists of an image Transformer encoder and an autoregressive text Transformer decoder to
perform `),ke=n(Ot,"A",{href:!0,rel:!0});var on=i(ke);io=a(on,"optical character recognition (OCR)"),on.forEach(r),lo=a(Ot,"."),Ot.forEach(r),_r=c(t),st=n(t,"P",{});var an=i(st);co=a(an,"The abstract from the paper is the following:"),an.forEach(r),vr=c(t),nt=n(t,"P",{});var sn=i(nt);Dt=n(sn,"EM",{});var nn=i(Dt);ho=a(nn,`Text recognition is a long-standing research problem for document digitalization. Existing approaches for text recognition
are usually built based on CNN for image understanding and RNN for char-level text generation. In addition, another language
model is usually needed to improve the overall accuracy as a post-processing step. In this paper, we propose an end-to-end
text recognition approach with pre-trained image Transformer and text Transformer models, namely TrOCR, which leverages the
Transformer architecture for both image understanding and wordpiece-level text generation. The TrOCR model is simple but
effective, and can be pre-trained with large-scale synthetic data and fine-tuned with human-labeled datasets. Experiments
show that the TrOCR model outperforms the current state-of-the-art models on both printed and handwritten text recognition
tasks.`),nn.forEach(r),sn.forEach(r),Tr=c(t),oe=n(t,"IMG",{src:!0,alt:!0,width:!0}),br=c(t),ae=n(t,"SMALL",{});var Ir=i(ae);po=a(Ir,"TrOCR architecture. Taken from the "),it=n(Ir,"A",{href:!0});var ln=i(it);mo=a(ln,"original paper"),ln.forEach(r),fo=a(Ir,"."),Ir.forEach(r),Cr=c(t),se=n(t,"P",{});var Vr=i(se);uo=a(Vr,"Please refer to the "),qt=n(Vr,"CODE",{});var dn=i(qt);go=a(dn,"VisionEncoderDecoder"),dn.forEach(r),_o=a(Vr," class on how to use this model."),Vr.forEach(r),wr=c(t),W=n(t,"P",{});var yt=i(W);vo=a(yt,"This model was contributed by "),Oe=n(yt,"A",{href:!0,rel:!0});var cn=i(Oe);To=a(cn,"nielsr"),cn.forEach(r),bo=a(yt,`. The original code can be found
`),ye=n(yt,"A",{href:!0,rel:!0});var hn=i(ye);Co=a(hn,"here"),hn.forEach(r),wo=a(yt,"."),yt.forEach(r),kr=c(t),lt=n(t,"P",{});var pn=i(lt);ko=a(pn,"Tips:"),pn.forEach(r),Or=c(t),H=n(t,"UL",{});var Rt=i(H);Re=n(Rt,"LI",{});var Nr=i(Re);Oo=a(Nr,"The quickest way to get started with TrOCR is by checking the "),Ee=n(Nr,"A",{href:!0,rel:!0});var mn=i(Ee);yo=a(mn,`tutorial
notebooks`),mn.forEach(r),Ro=a(Nr,`, which show how to use the model
at inference time as well as fine-tuning on custom data.`),Nr.forEach(r),Eo=c(Rt),I=n(Rt,"LI",{});var _e=i(I);$o=a(_e,`TrOCR is pre-trained in 2 stages before being fine-tuned on downstream datasets. It achieves state-of-the-art results
on both printed (e.g. the `),$e=n(_e,"A",{href:!0,rel:!0});var fn=i($e);xo=a(fn,"SROIE dataset"),fn.forEach(r),Po=a(_e," and handwritten (e.g. the "),xe=n(_e,"A",{href:!0,rel:!0});var un=i(xe);Mo=a(un,`IAM
Handwriting dataset`),un.forEach(r),jo=a(_e,` text recognition tasks. For more
information, see the `),Pe=n(_e,"A",{href:!0,rel:!0});var gn=i(Pe);zo=a(gn,"official models"),gn.forEach(r),Fo=a(_e,"."),_e.forEach(r),Lo=c(Rt),Me=n(Rt,"LI",{});var Sr=i(Me);Do=a(Sr,"TrOCR is always used within the "),dt=n(Sr,"A",{href:!0});var _n=i(dt);qo=a(_n,"VisionEncoderDecoder"),_n.forEach(r),Ao=a(Sr," framework."),Sr.forEach(r),Rt.forEach(r),yr=c(t),Y=n(t,"H2",{class:!0});var Wr=i(Y);ne=n(Wr,"A",{id:!0,class:!0,href:!0});var vn=i(ne);At=n(vn,"SPAN",{});var Tn=i(At);T(je.$$.fragment,Tn),Tn.forEach(r),vn.forEach(r),Io=c(Wr),It=n(Wr,"SPAN",{});var bn=i(It);Vo=a(bn,"Inference"),bn.forEach(r),Wr.forEach(r),Rr=c(t),B=n(t,"P",{});var Et=i(B);No=a(Et,"TrOCR\u2019s "),Vt=n(Et,"CODE",{});var Cn=i(Vt);So=a(Cn,"VisionEncoderDecoder"),Cn.forEach(r),Wo=a(Et,` model accepts images as input and makes use of
`),ct=n(Et,"A",{href:!0});var wn=i(ct);Ho=a(wn,"generate()"),wn.forEach(r),Bo=a(Et," to autoregressively generate text given the input image."),Et.forEach(r),Er=c(t),f=n(t,"P",{});var O=i(f);Uo=a(O,"The ["),Nt=n(O,"CODE",{});var kn=i(Nt);Xo=a(kn,"ViTFeatureExtractor"),kn.forEach(r),Go=a(O,"/"),St=n(O,"CODE",{});var On=i(St);Zo=a(On,"DeiTFeatureExtractor"),On.forEach(r),Jo=a(O,`] class is responsible for preprocessing the input image and
[`),Wt=n(O,"CODE",{});var yn=i(Wt);Yo=a(yn,"RobertaTokenizer"),yn.forEach(r),Ko=a(O,"/"),Ht=n(O,"CODE",{});var Rn=i(Ht);Qo=a(Rn,"XLMRobertaTokenizer"),Rn.forEach(r),ea=a(O,`] decodes the generated target tokens to the target string. The
`),ht=n(O,"A",{href:!0});var En=i(ht);ta=a(En,"TrOCRProcessor"),En.forEach(r),ra=a(O," wraps ["),Bt=n(O,"CODE",{});var $n=i(Bt);oa=a($n,"ViTFeatureExtractor"),$n.forEach(r),aa=a(O,"/"),Ut=n(O,"CODE",{});var xn=i(Ut);sa=a(xn,"DeiTFeatureExtractor"),xn.forEach(r),na=a(O,"] and ["),Xt=n(O,"CODE",{});var Pn=i(Xt);ia=a(Pn,"RobertaTokenizer"),Pn.forEach(r),la=a(O,"/"),Gt=n(O,"CODE",{});var Mn=i(Gt);da=a(Mn,"XLMRobertaTokenizer"),Mn.forEach(r),ca=a(O,`]
into a single instance to both extract the input features and decode the predicted token ids.`),O.forEach(r),$r=c(t),pt=n(t,"UL",{});var jn=i(pt);Zt=n(jn,"LI",{});var zn=i(Zt);ha=a(zn,"Step-by-step Optical Character Recognition (OCR)"),zn.forEach(r),jn.forEach(r),xr=c(t),T(ze.$$.fragment,t),Pr=c(t),ie=n(t,"P",{});var Hr=i(ie);pa=a(Hr,"See the "),Fe=n(Hr,"A",{href:!0,rel:!0});var Fn=i(Fe);ma=a(Fn,"model hub"),Fn.forEach(r),fa=a(Hr," to look for TrOCR checkpoints."),Hr.forEach(r),Mr=c(t),K=n(t,"H2",{class:!0});var Br=i(K);le=n(Br,"A",{id:!0,class:!0,href:!0});var Ln=i(le);Jt=n(Ln,"SPAN",{});var Dn=i(Jt);T(Le.$$.fragment,Dn),Dn.forEach(r),Ln.forEach(r),ua=c(Br),Yt=n(Br,"SPAN",{});var qn=i(Yt);ga=a(qn,"TrOCRConfig"),qn.forEach(r),Br.forEach(r),jr=c(t),M=n(t,"DIV",{class:!0});var Z=i(M);T(De.$$.fragment,Z),_a=c(Z),Q=n(Z,"P",{});var $t=i(Q);va=a($t,"This is the configuration class to store the configuration of a "),mt=n($t,"A",{href:!0});var An=i(mt);Ta=a(An,"TrOCRForCausalLM"),An.forEach(r),ba=a($t,`. It is used to instantiate an
TrOCR model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the TrOCR
`),qe=n($t,"A",{href:!0,rel:!0});var In=i(qe);Ca=a(In,"microsoft/trocr-base"),In.forEach(r),wa=a($t," architecture."),$t.forEach(r),ka=c(Z),ee=n(Z,"P",{});var xt=i(ee);Oa=a(xt,"Configuration objects inherit from "),ft=n(xt,"A",{href:!0});var Vn=i(ft);ya=a(Vn,"PretrainedConfig"),Vn.forEach(r),Ra=a(xt,` and can be used to control the model outputs. Read the
documentation from `),ut=n(xt,"A",{href:!0});var Nn=i(ut);Ea=a(Nn,"PretrainedConfig"),Nn.forEach(r),$a=a(xt," for more information."),xt.forEach(r),xa=c(Z),Kt=n(Z,"P",{});var Sn=i(Kt);Pa=a(Sn,"Example:"),Sn.forEach(r),Ma=c(Z),T(Ae.$$.fragment,Z),Z.forEach(r),zr=c(t),te=n(t,"H2",{class:!0});var Ur=i(te);de=n(Ur,"A",{id:!0,class:!0,href:!0});var Wn=i(de);Qt=n(Wn,"SPAN",{});var Hn=i(Qt);T(Ie.$$.fragment,Hn),Hn.forEach(r),Wn.forEach(r),ja=c(Ur),er=n(Ur,"SPAN",{});var Bn=i(er);za=a(Bn,"TrOCRProcessor"),Bn.forEach(r),Ur.forEach(r),Fr=c(t),g=n(t,"DIV",{class:!0});var E=i(g);T(Ve.$$.fragment,E),Fa=c(E),tr=n(E,"P",{});var Un=i(tr);La=a(Un,"Constructs a TrOCR processor which wraps a vision feature extractor and a TrOCR tokenizer into a single processor."),Un.forEach(r),Da=c(E),R=n(E,"P",{});var j=i(R);gt=n(j,"A",{href:!0});var Xn=i(gt);qa=a(Xn,"TrOCRProcessor"),Xn.forEach(r),Aa=a(j," offers all the functionalities of ["),rr=n(j,"CODE",{});var Gn=i(rr);Ia=a(Gn,"ViTFeatureExtractor"),Gn.forEach(r),Va=a(j,"/"),or=n(j,"CODE",{});var Zn=i(or);Na=a(Zn,"DeiTFeatureExtractor"),Zn.forEach(r),Sa=a(j,`] and
[`),ar=n(j,"CODE",{});var Jn=i(ar);Wa=a(Jn,"RobertaTokenizer"),Jn.forEach(r),Ha=a(j,"/"),sr=n(j,"CODE",{});var Yn=i(sr);Ba=a(Yn,"XLMRobertaTokenizer"),Yn.forEach(r),Ua=a(j,"]. See the "),Ne=n(j,"A",{href:!0});var Gs=i(Ne);nr=n(Gs,"STRONG",{});var Kn=i(nr);Xa=a(Kn,"call"),Kn.forEach(r),Ga=a(Gs,"()"),Gs.forEach(r),Za=a(j," and "),_t=n(j,"A",{href:!0});var Qn=i(_t);Ja=a(Qn,"decode()"),Qn.forEach(r),Ya=a(j,` for
more information.`),j.forEach(r),Ka=c(E),ce=n(E,"DIV",{class:!0});var Xr=i(ce);T(Se.$$.fragment,Xr),Qa=c(Xr),V=n(Xr,"P",{});var ve=i(V);es=a(ve,`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),ir=n(ve,"CODE",{});var ei=i(ir);ts=a(ei,"__call__()"),ei.forEach(r),rs=a(ve,` and returns its output. If used in the context
`),vt=n(ve,"A",{href:!0});var ti=i(vt);os=a(ti,"as_target_processor()"),ti.forEach(r),as=a(ve,` this method forwards all its arguments to TrOCRTokenizer\u2019s
`),lr=n(ve,"CODE",{});var ri=i(lr);ss=a(ri,"__call__"),ri.forEach(r),ns=a(ve,". Please refer to the doctsring of the above two methods for more information."),ve.forEach(r),Xr.forEach(r),is=c(E),U=n(E,"DIV",{class:!0});var Pt=i(U);T(We.$$.fragment,Pt),ls=c(Pt),dr=n(Pt,"P",{});var oi=i(dr);ds=a(oi,"Instantiate a processor associated with a pretrained model."),oi.forEach(r),cs=c(Pt),T(he.$$.fragment,Pt),Pt.forEach(r),hs=c(E),X=n(E,"DIV",{class:!0});var Mt=i(X);T(He.$$.fragment,Mt),ps=c(Mt),Be=n(Mt,"P",{});var Gr=i(Be);ms=a(Gr,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Tt=n(Gr,"A",{href:!0});var ai=i(Tt);fs=a(ai,"from_pretrained()"),ai.forEach(r),us=a(Gr," method."),Gr.forEach(r),gs=c(Mt),T(pe.$$.fragment,Mt),Mt.forEach(r),_s=c(E),me=n(E,"DIV",{class:!0});var Zr=i(me);T(Ue.$$.fragment,Zr),vs=c(Zr),Xe=n(Zr,"P",{});var Jr=i(Xe);Ts=a(Jr,"This method forwards all its arguments to TrOCRTokenizer\u2019s "),bt=n(Jr,"A",{href:!0});var si=i(bt);bs=a(si,"batch_decode()"),si.forEach(r),Cs=a(Jr,`. Please refer
to the docstring of this method for more information.`),Jr.forEach(r),Zr.forEach(r),ws=c(E),fe=n(E,"DIV",{class:!0});var Yr=i(fe);T(Ge.$$.fragment,Yr),ks=c(Yr),Ze=n(Yr,"P",{});var Kr=i(Ze);Os=a(Kr,"This method forwards all its arguments to TrOCRTokenizer\u2019s "),Ct=n(Kr,"A",{href:!0});var ni=i(Ct);ys=a(ni,"decode()"),ni.forEach(r),Rs=a(Kr,`. Please refer to the
docstring of this method for more information.`),Kr.forEach(r),Yr.forEach(r),Es=c(E),ue=n(E,"DIV",{class:!0});var Qr=i(ue);T(Je.$$.fragment,Qr),$s=c(Qr),cr=n(Qr,"P",{});var ii=i(cr);xs=a(ii,"Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning TrOCR."),ii.forEach(r),Qr.forEach(r),E.forEach(r),Lr=c(t),re=n(t,"H2",{class:!0});var eo=i(re);ge=n(eo,"A",{id:!0,class:!0,href:!0});var li=i(ge);hr=n(li,"SPAN",{});var di=i(hr);T(Ye.$$.fragment,di),di.forEach(r),li.forEach(r),Ps=c(eo),pr=n(eo,"SPAN",{});var ci=i(pr);Ms=a(ci,"TrOCRForCausalLM"),ci.forEach(r),eo.forEach(r),Dr=c(t),D=n(t,"DIV",{class:!0});var Te=i(D);T(Ke.$$.fragment,Te),js=c(Te),N=n(Te,"P",{});var be=i(N);zs=a(be,"The TrOCR Decoder with a language modeling head. Can be used as the decoder part of "),wt=n(be,"A",{href:!0});var hi=i(wt);Fs=a(hi,"EncoderDecoderModel"),hi.forEach(r),Ls=a(be," and "),mr=n(be,"CODE",{});var pi=i(mr);Ds=a(pi,"VisionEncoderDecoder"),pi.forEach(r),qs=a(be,`.
This model inherits from `),kt=n(be,"A",{href:!0});var mi=i(kt);As=a(mi,"PreTrainedModel"),mi.forEach(r),Is=a(be,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),be.forEach(r),Vs=c(Te),Qe=n(Te,"P",{});var to=i(Qe);Ns=a(to,"This model is also a PyTorch "),et=n(to,"A",{href:!0,rel:!0});var fi=i(et);Ss=a(fi,"torch.nn.Module"),fi.forEach(r),Ws=a(to,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),to.forEach(r),Hs=c(Te),G=n(Te,"DIV",{class:!0});var jt=i(G);T(tt.$$.fragment,jt),Bs=c(jt),fr=n(jt,"P",{});var ui=i(fr);Us=a(ui,"Example:"),ui.forEach(r),Xs=c(jt),T(rt.$$.fragment,jt),jt.forEach(r),Te.forEach(r),this.h()},h(){l(m,"name","hf:doc:metadata"),l(m,"content",JSON.stringify(Ri)),l($,"id","trocr"),l($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l($,"href","#trocr"),l(u,"class","relative group"),l(z,"id","overview"),l(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(z,"href","#overview"),l(P,"class","relative group"),l(we,"href","https://arxiv.org/abs/2109.10282"),l(we,"rel","nofollow"),l(ke,"href","https://en.wikipedia.org/wiki/Optical_character_recognition"),l(ke,"rel","nofollow"),Ci(oe.src,Js="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/trocr_architecture.jpg")||l(oe,"src",Js),l(oe,"alt","drawing"),l(oe,"width","600"),l(it,"href","https://arxiv.org/abs/2109.10282"),l(Oe,"href","https://huggingface.co/nielsr"),l(Oe,"rel","nofollow"),l(ye,"href","https://github.com/microsoft/unilm/tree/6f60612e7cc86a2a1ae85c47231507a587ab4e01/trocr"),l(ye,"rel","nofollow"),l(Ee,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/TrOCR"),l(Ee,"rel","nofollow"),l($e,"href","https://paperswithcode.com/dataset/sroie"),l($e,"rel","nofollow"),l(xe,"href","https://fki.tic.heia-fr.ch/databases/iam-handwriting-database%3E"),l(xe,"rel","nofollow"),l(Pe,"href","https://huggingface.co/models?other=trocr%3E"),l(Pe,"rel","nofollow"),l(dt,"href","vision-encoder-decoder"),l(ne,"id","inference"),l(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ne,"href","#inference"),l(Y,"class","relative group"),l(ct,"href","/docs/transformers/pr_16188/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),l(ht,"href","/docs/transformers/pr_16188/en/model_doc/trocr#transformers.TrOCRProcessor"),l(Fe,"href","https://huggingface.co/models?filter=trocr"),l(Fe,"rel","nofollow"),l(le,"id","transformers.TrOCRConfig"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.TrOCRConfig"),l(K,"class","relative group"),l(mt,"href","/docs/transformers/pr_16188/en/model_doc/trocr#transformers.TrOCRForCausalLM"),l(qe,"href","https://huggingface.co/microsoft/trocr-base"),l(qe,"rel","nofollow"),l(ft,"href","/docs/transformers/pr_16188/en/main_classes/configuration#transformers.PretrainedConfig"),l(ut,"href","/docs/transformers/pr_16188/en/main_classes/configuration#transformers.PretrainedConfig"),l(M,"class","docstring"),l(de,"id","transformers.TrOCRProcessor"),l(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(de,"href","#transformers.TrOCRProcessor"),l(te,"class","relative group"),l(gt,"href","/docs/transformers/pr_16188/en/model_doc/trocr#transformers.TrOCRProcessor"),l(Ne,"href","/docs/transformers/pr_16188/en/model_doc/trocr#transformers.TrOCRProcessor.__call__"),l(_t,"href","/docs/transformers/pr_16188/en/model_doc/trocr#transformers.TrOCRProcessor.decode"),l(vt,"href","/docs/transformers/pr_16188/en/model_doc/trocr#transformers.TrOCRProcessor.as_target_processor"),l(ce,"class","docstring"),l(U,"class","docstring"),l(Tt,"href","/docs/transformers/pr_16188/en/main_classes/processors#transformers.ProcessorMixin.from_pretrained"),l(X,"class","docstring"),l(bt,"href","/docs/transformers/pr_16188/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.batch_decode"),l(me,"class","docstring"),l(Ct,"href","/docs/transformers/pr_16188/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.decode"),l(fe,"class","docstring"),l(ue,"class","docstring"),l(g,"class","docstring"),l(ge,"id","transformers.TrOCRForCausalLM"),l(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ge,"href","#transformers.TrOCRForCausalLM"),l(re,"class","relative group"),l(wt,"href","/docs/transformers/pr_16188/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(kt,"href","/docs/transformers/pr_16188/en/main_classes/model#transformers.PreTrainedModel"),l(et,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(et,"rel","nofollow"),l(G,"class","docstring"),l(D,"class","docstring")},m(t,h){e(document.head,m),p(t,q,h),p(t,u,h),e(u,$),e($,F),b(y,F,null),e(u,A),e(u,L),e(L,x),p(t,_,h),p(t,P,h),e(P,z),e(z,Ft),b(Ce,Ft,null),e(P,ro),e(P,Lt),e(Lt,oo),p(t,gr,h),p(t,S,h),e(S,ao),e(S,we),e(we,so),e(S,no),e(S,ke),e(ke,io),e(S,lo),p(t,_r,h),p(t,st,h),e(st,co),p(t,vr,h),p(t,nt,h),e(nt,Dt),e(Dt,ho),p(t,Tr,h),p(t,oe,h),p(t,br,h),p(t,ae,h),e(ae,po),e(ae,it),e(it,mo),e(ae,fo),p(t,Cr,h),p(t,se,h),e(se,uo),e(se,qt),e(qt,go),e(se,_o),p(t,wr,h),p(t,W,h),e(W,vo),e(W,Oe),e(Oe,To),e(W,bo),e(W,ye),e(ye,Co),e(W,wo),p(t,kr,h),p(t,lt,h),e(lt,ko),p(t,Or,h),p(t,H,h),e(H,Re),e(Re,Oo),e(Re,Ee),e(Ee,yo),e(Re,Ro),e(H,Eo),e(H,I),e(I,$o),e(I,$e),e($e,xo),e(I,Po),e(I,xe),e(xe,Mo),e(I,jo),e(I,Pe),e(Pe,zo),e(I,Fo),e(H,Lo),e(H,Me),e(Me,Do),e(Me,dt),e(dt,qo),e(Me,Ao),p(t,yr,h),p(t,Y,h),e(Y,ne),e(ne,At),b(je,At,null),e(Y,Io),e(Y,It),e(It,Vo),p(t,Rr,h),p(t,B,h),e(B,No),e(B,Vt),e(Vt,So),e(B,Wo),e(B,ct),e(ct,Ho),e(B,Bo),p(t,Er,h),p(t,f,h),e(f,Uo),e(f,Nt),e(Nt,Xo),e(f,Go),e(f,St),e(St,Zo),e(f,Jo),e(f,Wt),e(Wt,Yo),e(f,Ko),e(f,Ht),e(Ht,Qo),e(f,ea),e(f,ht),e(ht,ta),e(f,ra),e(f,Bt),e(Bt,oa),e(f,aa),e(f,Ut),e(Ut,sa),e(f,na),e(f,Xt),e(Xt,ia),e(f,la),e(f,Gt),e(Gt,da),e(f,ca),p(t,$r,h),p(t,pt,h),e(pt,Zt),e(Zt,ha),p(t,xr,h),b(ze,t,h),p(t,Pr,h),p(t,ie,h),e(ie,pa),e(ie,Fe),e(Fe,ma),e(ie,fa),p(t,Mr,h),p(t,K,h),e(K,le),e(le,Jt),b(Le,Jt,null),e(K,ua),e(K,Yt),e(Yt,ga),p(t,jr,h),p(t,M,h),b(De,M,null),e(M,_a),e(M,Q),e(Q,va),e(Q,mt),e(mt,Ta),e(Q,ba),e(Q,qe),e(qe,Ca),e(Q,wa),e(M,ka),e(M,ee),e(ee,Oa),e(ee,ft),e(ft,ya),e(ee,Ra),e(ee,ut),e(ut,Ea),e(ee,$a),e(M,xa),e(M,Kt),e(Kt,Pa),e(M,Ma),b(Ae,M,null),p(t,zr,h),p(t,te,h),e(te,de),e(de,Qt),b(Ie,Qt,null),e(te,ja),e(te,er),e(er,za),p(t,Fr,h),p(t,g,h),b(Ve,g,null),e(g,Fa),e(g,tr),e(tr,La),e(g,Da),e(g,R),e(R,gt),e(gt,qa),e(R,Aa),e(R,rr),e(rr,Ia),e(R,Va),e(R,or),e(or,Na),e(R,Sa),e(R,ar),e(ar,Wa),e(R,Ha),e(R,sr),e(sr,Ba),e(R,Ua),e(R,Ne),e(Ne,nr),e(nr,Xa),e(Ne,Ga),e(R,Za),e(R,_t),e(_t,Ja),e(R,Ya),e(g,Ka),e(g,ce),b(Se,ce,null),e(ce,Qa),e(ce,V),e(V,es),e(V,ir),e(ir,ts),e(V,rs),e(V,vt),e(vt,os),e(V,as),e(V,lr),e(lr,ss),e(V,ns),e(g,is),e(g,U),b(We,U,null),e(U,ls),e(U,dr),e(dr,ds),e(U,cs),b(he,U,null),e(g,hs),e(g,X),b(He,X,null),e(X,ps),e(X,Be),e(Be,ms),e(Be,Tt),e(Tt,fs),e(Be,us),e(X,gs),b(pe,X,null),e(g,_s),e(g,me),b(Ue,me,null),e(me,vs),e(me,Xe),e(Xe,Ts),e(Xe,bt),e(bt,bs),e(Xe,Cs),e(g,ws),e(g,fe),b(Ge,fe,null),e(fe,ks),e(fe,Ze),e(Ze,Os),e(Ze,Ct),e(Ct,ys),e(Ze,Rs),e(g,Es),e(g,ue),b(Je,ue,null),e(ue,$s),e(ue,cr),e(cr,xs),p(t,Lr,h),p(t,re,h),e(re,ge),e(ge,hr),b(Ye,hr,null),e(re,Ps),e(re,pr),e(pr,Ms),p(t,Dr,h),p(t,D,h),b(Ke,D,null),e(D,js),e(D,N),e(N,zs),e(N,wt),e(wt,Fs),e(N,Ls),e(N,mr),e(mr,Ds),e(N,qs),e(N,kt),e(kt,As),e(N,Is),e(D,Vs),e(D,Qe),e(Qe,Ns),e(Qe,et),e(et,Ss),e(Qe,Ws),e(D,Hs),e(D,G),b(tt,G,null),e(G,Bs),e(G,fr),e(fr,Us),e(G,Xs),b(rt,G,null),qr=!0},p(t,[h]){const ot={};h&2&&(ot.$$scope={dirty:h,ctx:t}),he.$set(ot);const ur={};h&2&&(ur.$$scope={dirty:h,ctx:t}),pe.$set(ur)},i(t){qr||(C(y.$$.fragment,t),C(Ce.$$.fragment,t),C(je.$$.fragment,t),C(ze.$$.fragment,t),C(Le.$$.fragment,t),C(De.$$.fragment,t),C(Ae.$$.fragment,t),C(Ie.$$.fragment,t),C(Ve.$$.fragment,t),C(Se.$$.fragment,t),C(We.$$.fragment,t),C(he.$$.fragment,t),C(He.$$.fragment,t),C(pe.$$.fragment,t),C(Ue.$$.fragment,t),C(Ge.$$.fragment,t),C(Je.$$.fragment,t),C(Ye.$$.fragment,t),C(Ke.$$.fragment,t),C(tt.$$.fragment,t),C(rt.$$.fragment,t),qr=!0)},o(t){w(y.$$.fragment,t),w(Ce.$$.fragment,t),w(je.$$.fragment,t),w(ze.$$.fragment,t),w(Le.$$.fragment,t),w(De.$$.fragment,t),w(Ae.$$.fragment,t),w(Ie.$$.fragment,t),w(Ve.$$.fragment,t),w(Se.$$.fragment,t),w(We.$$.fragment,t),w(he.$$.fragment,t),w(He.$$.fragment,t),w(pe.$$.fragment,t),w(Ue.$$.fragment,t),w(Ge.$$.fragment,t),w(Je.$$.fragment,t),w(Ye.$$.fragment,t),w(Ke.$$.fragment,t),w(tt.$$.fragment,t),w(rt.$$.fragment,t),qr=!1},d(t){r(m),t&&r(q),t&&r(u),k(y),t&&r(_),t&&r(P),k(Ce),t&&r(gr),t&&r(S),t&&r(_r),t&&r(st),t&&r(vr),t&&r(nt),t&&r(Tr),t&&r(oe),t&&r(br),t&&r(ae),t&&r(Cr),t&&r(se),t&&r(wr),t&&r(W),t&&r(kr),t&&r(lt),t&&r(Or),t&&r(H),t&&r(yr),t&&r(Y),k(je),t&&r(Rr),t&&r(B),t&&r(Er),t&&r(f),t&&r($r),t&&r(pt),t&&r(xr),k(ze,t),t&&r(Pr),t&&r(ie),t&&r(Mr),t&&r(K),k(Le),t&&r(jr),t&&r(M),k(De),k(Ae),t&&r(zr),t&&r(te),k(Ie),t&&r(Fr),t&&r(g),k(Ve),k(Se),k(We),k(he),k(He),k(pe),k(Ue),k(Ge),k(Je),t&&r(Lr),t&&r(re),k(Ye),t&&r(Dr),t&&r(D),k(Ke),k(tt),k(rt)}}}const Ri={local:"trocr",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.TrOCRConfig",title:"TrOCRConfig"},{local:"transformers.TrOCRProcessor",title:"TrOCRProcessor"},{local:"transformers.TrOCRForCausalLM",title:"TrOCRForCausalLM"}],title:"TrOCR"};function Ei(at){return wi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class zi extends _i{constructor(m){super();vi(this,m,Ei,yi,Ti,{})}}export{zi as default,Ri as metadata};
