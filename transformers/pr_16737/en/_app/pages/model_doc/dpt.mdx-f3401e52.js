import{S as dn,i as cn,s as hn,e as a,k as d,w as v,t as s,M as pn,c as r,d as o,m as c,a as n,x as T,h as i,b as l,N as mn,F as e,g as m,y as w,q as P,o as b,B as y,v as fn}from"../../chunks/vendor-6b77c823.js";import{T as _o}from"../../chunks/Tip-39098574.js";import{D as ee}from"../../chunks/Docstring-af1d0ae0.js";import{C as vo}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ge}from"../../chunks/IconCopyLink-7a11ce68.js";function un(S){let p,D;return{c(){p=a("p"),D=s(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(f){p=r(f,"P",{});var u=n(p);D=i(u,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),u.forEach(o)},m(f,u){m(f,p,u),e(p,D)},d(f){f&&o(p)}}}function gn(S){let p,D,f,u,$;return{c(){p=a("p"),D=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),u=s("Module"),$=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=r(g,"P",{});var _=n(p);D=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=n(f);u=i(E,"Module"),E.forEach(o),$=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(g,_){m(g,p,_),e(p,D),e(p,f),e(f,u),e(p,$)},d(g){g&&o(p)}}}function _n(S){let p,D,f,u,$;return{c(){p=a("p"),D=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),u=s("Module"),$=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=r(g,"P",{});var _=n(p);D=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=n(f);u=i(E,"Module"),E.forEach(o),$=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(g,_){m(g,p,_),e(p,D),e(p,f),e(f,u),e(p,$)},d(g){g&&o(p)}}}function vn(S){let p,D,f,u,$;return{c(){p=a("p"),D=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),u=s("Module"),$=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=r(g,"P",{});var _=n(p);D=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var E=n(f);u=i(E,"Module"),E.forEach(o),$=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(g,_){m(g,p,_),e(p,D),e(p,f),e(f,u),e(p,$)},d(g){g&&o(p)}}}function Tn(S){let p,D,f,u,$,g,_,E,To,Ot,R,te,ft,ge,wo,ut,Po,Wt,q,bo,_e,yo,Do,Ye,$o,xo,Rt,Je,Eo,Bt,Xe,gt,ko,Ut,oe,mr,Ht,ae,Fo,ve,jo,zo,Kt,A,Io,Te,Co,Mo,we,So,qo,Gt,B,re,_t,Pe,Ao,vt,Lo,Yt,x,be,No,U,Vo,Ze,Oo,Wo,ye,Ro,Bo,Uo,H,Ho,Qe,Ko,Go,et,Yo,Jo,Xo,Tt,Zo,Qo,De,Jt,K,ne,wt,$e,ea,Pt,ta,Xt,z,xe,oa,bt,aa,ra,Ee,na,tt,sa,ia,la,L,ke,da,yt,ca,ha,se,Zt,G,ie,Dt,Fe,pa,$t,ma,Qt,M,je,fa,ze,ua,Ie,ga,_a,va,k,Ce,Ta,Y,wa,ot,Pa,ba,xt,ya,Da,$a,le,xa,Et,Ea,ka,Me,eo,J,de,kt,Se,Fa,Ft,ja,to,I,qe,za,jt,Ia,Ca,Ae,Ma,Le,Sa,qa,Aa,F,Ne,La,X,Na,at,Va,Oa,zt,Wa,Ra,Ba,ce,Ua,It,Ha,Ka,Ve,oo,Z,he,Ct,Oe,Ga,Mt,Ya,ao,C,We,Ja,St,Xa,Za,Re,Qa,Be,er,tr,or,j,Ue,ar,Q,rr,rt,nr,sr,qt,ir,lr,dr,pe,cr,At,hr,pr,He,ro;return g=new Ge({}),ge=new Ge({}),Pe=new Ge({}),be=new ee({props:{name:"class transformers.DPTConfig",anchor:"transformers.DPTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"image_size",val:" = 384"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"backbone_out_indices",val:" = [2, 5, 8, 11]"},{name:"readout_type",val:" = 'project'"},{name:"reassemble_factors",val:" = [4, 2, 1, 0.5]"},{name:"neck_hidden_sizes",val:" = [96, 192, 384, 768]"},{name:"fusion_hidden_size",val:" = 256"},{name:"head_in_index",val:" = -1"},{name:"use_batch_norm_in_fusion_residual",val:" = False"},{name:"use_auxiliary_head",val:" = True"},{name:"auxiliary_loss_weight",val:" = 0.4"},{name:"semantic_loss_ignore_index",val:" = 255"},{name:"semantic_classifier_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/dpt/configuration_dpt.py#L29",parametersDescription:[{anchor:"transformers.DPTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DPTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DPTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DPTConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DPTConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.DPTConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DPTConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DPTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DPTConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DPTConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 384) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.DPTConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.DPTConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.DPTConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.DPTConfig.backbone_out_indices",description:`<strong>backbone_out_indices</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[2, 5, 8, 11]</code>) &#x2014;
Indices of the intermediate hidden states to use from backbone.`,name:"backbone_out_indices"},{anchor:"transformers.DPTConfig.readout_type",description:`<strong>readout_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;project&quot;</code>) &#x2014;
The readout type to use when processing the readout token (CLS token) of the intermediate hidden states of
the ViT backbone. Can be one of [<code>&quot;ignore&quot;</code>, <code>&quot;add&quot;</code>, <code>&quot;project&quot;</code>].</p>
<ul>
<li>&#x201C;ignore&#x201D; simply ignores the CLS token.</li>
<li>&#x201C;add&#x201D; passes the information from the CLS token to all other tokens by adding the representations.</li>
<li>&#x201C;project&#x201D; passes information to the other tokens by concatenating the readout to all other tokens before
projecting the
representation to the original feature dimension D using a linear layer followed by a GELU non-linearity.</li>
</ul>`,name:"readout_type"},{anchor:"transformers.DPTConfig.reassemble_factors",description:`<strong>reassemble_factors</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[4, 2, 1, 0.5]</code>) &#x2014;
The up/downsampling factors of the reassemble layers.`,name:"reassemble_factors"},{anchor:"transformers.DPTConfig.neck_hidden_sizes",description:`<strong>neck_hidden_sizes</strong> (<code>List[str]</code>, <em>optional</em>, defaults to [96, 192, 384, 768]) &#x2014;
The hidden sizes to project to for the feature maps of the backbone.`,name:"neck_hidden_sizes"},{anchor:"transformers.DPTConfig.fusion_hidden_size",description:`<strong>fusion_hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The number of channels before fusion.`,name:"fusion_hidden_size"},{anchor:"transformers.DPTConfig.head_in_index",description:`<strong>head_in_index</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The index of the features to use in the heads.`,name:"head_in_index"},{anchor:"transformers.DPTConfig.use_batch_norm_in_fusion_residual",description:`<strong>use_batch_norm_in_fusion_residual</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use batch normalization in the pre-activate residual units of the fusion blocks.`,name:"use_batch_norm_in_fusion_residual"},{anchor:"transformers.DPTConfig.use_auxiliary_head",description:`<strong>use_auxiliary_head</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use an auxiliary head during training.`,name:"use_auxiliary_head"},{anchor:"transformers.DPTConfig.auxiliary_loss_weight",description:`<strong>auxiliary_loss_weight</strong> (<code>float</code>, <em>optional</em>, defaults to 0.4) &#x2014;
Weight of the cross-entropy loss of the auxiliary head.`,name:"auxiliary_loss_weight"},{anchor:"transformers.DPTConfig.semantic_loss_ignore_index",description:`<strong>semantic_loss_ignore_index</strong> (<code>int</code>, <em>optional</em>, defaults to 255) &#x2014;
The index that is ignored by the loss function of the semantic segmentation model.`,name:"semantic_loss_ignore_index"},{anchor:"transformers.DPTConfig.semantic_classifier_dropout",description:`<strong>semantic_classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the semantic classification head.`,name:"semantic_classifier_dropout"}]}}),De=new vo({props:{code:`from transformers import DPTModel, DPTConfig

# Initializing a DPT dpt-large style configuration
configuration = DPTConfig()

# Initializing a model from the dpt-large style configuration
model = DPTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DPTModel, DPTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DPT dpt-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DPTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the dpt-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DPTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),$e=new Ge({}),xe=new ee({props:{name:"class transformers.DPTFeatureExtractor",anchor:"transformers.DPTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 384"},{name:"keep_aspect_ratio",val:" = False"},{name:"ensure_multiple_of",val:" = 1"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/dpt/feature_extraction_dpt.py#L37",parametersDescription:[{anchor:"transformers.DPTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.DPTFeatureExtractor.size",description:`<strong>size</strong> (&#x2018;int&#x2019; or <code>Tuple(int)</code>, <em>optional</em>, defaults to 384) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.DPTFeatureExtractor.ensure_multiple_of",description:`<strong>ensure_multiple_of</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Ensure that the input is resized to a multiple of this value. Only has an effect if <code>do_resize</code> is set to
<code>True</code>.`,name:"ensure_multiple_of"},{anchor:"transformers.DPTFeatureExtractor.keep_aspect_ratio",description:`<strong>keep_aspect_ratio</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to keep the aspect ratio of the input. Only has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"keep_aspect_ratio"},{anchor:"transformers.DPTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.DPTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.DPTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.DPTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}]}}),ke=new ee({props:{name:"__call__",anchor:"transformers.DPTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/dpt/feature_extraction_dpt.py#L133",parametersDescription:[{anchor:"transformers.DPTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.DPTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_16737/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16737/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16737/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),se=new _o({props:{warning:!0,$$slots:{default:[un]},$$scope:{ctx:S}}}),Fe=new Ge({}),je=new ee({props:{name:"class transformers.DPTModel",anchor:"transformers.DPTModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/dpt/modeling_dpt.py#L682",parametersDescription:[{anchor:"transformers.DPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16737/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16737/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ce=new ee({props:{name:"forward",anchor:"transformers.DPTModel.forward",parameters:[{name:"pixel_values",val:""},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/dpt/modeling_dpt.py#L708",parametersDescription:[{anchor:"transformers.DPTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16737/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_16737/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16737/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16737/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16737/en/model_doc/dpt#transformers.DPTConfig"
>DPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
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
  href="/docs/transformers/pr_16737/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new _o({props:{$$slots:{default:[gn]},$$scope:{ctx:S}}}),Me=new vo({props:{code:`from transformers import DPTFeatureExtractor, DPTModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = DPTFeatureExtractor.from_pretrained("Intel/dpt-large")
model = DPTModel.from_pretrained("Intel/dpt-large")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DPTFeatureExtractor, DPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DPTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DPTModel.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">577</span>, <span class="hljs-number">1024</span>]`}}),Se=new Ge({}),qe=new ee({props:{name:"class transformers.DPTForDepthEstimation",anchor:"transformers.DPTForDepthEstimation",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/dpt/modeling_dpt.py#L862",parametersDescription:[{anchor:"transformers.DPTForDepthEstimation.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16737/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16737/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ne=new ee({props:{name:"forward",anchor:"transformers.DPTForDepthEstimation.forward",parameters:[{name:"pixel_values",val:""},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/dpt/modeling_dpt.py#L877",parametersDescription:[{anchor:"transformers.DPTForDepthEstimation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16737/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_16737/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTForDepthEstimation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DPTForDepthEstimation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DPTForDepthEstimation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DPTForDepthEstimation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16737/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DPTForDepthEstimation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth depth estimation maps for computing the loss.`,name:"labels"}],returnDescription:`
<p>A <code>transformers.modeling_outputs.DepthEstimatorOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16737/en/model_doc/dpt#transformers.DPTConfig"
>DPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>predicted_depth</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, height, width)</code>) \u2014 Predicted depth for each pixel.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, num_channels, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_outputs.DepthEstimatorOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ce=new _o({props:{$$slots:{default:[_n]},$$scope:{ctx:S}}}),Ve=new vo({props:{code:`from transformers import DPTFeatureExtractor, DPTForDepthEstimation
import torch
import numpy as np
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = DPTFeatureExtractor.from_pretrained("Intel/dpt-large")
model = DPTForDepthEstimation.from_pretrained("Intel/dpt-large")

# prepare image for the model
inputs = feature_extractor(images=image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)
    predicted_depth = outputs.predicted_depth

# interpolate to original size
prediction = torch.nn.functional.interpolate(
    predicted_depth.unsqueeze(1),
    size=image.size[::-1],
    mode="bicubic",
    align_corners=False,
)

# visualize the prediction
output = prediction.squeeze().cpu().numpy()
formatted = (output * 255 / np.max(output)).astype("uint8")
depth = Image.fromarray(formatted)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DPTFeatureExtractor, DPTForDepthEstimation
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DPTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DPTForDepthEstimation.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare image for the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)
<span class="hljs-meta">... </span>    predicted_depth = outputs.predicted_depth

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># interpolate to original size</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction = torch.nn.functional.interpolate(
<span class="hljs-meta">... </span>    predicted_depth.unsqueeze(<span class="hljs-number">1</span>),
<span class="hljs-meta">... </span>    size=image.size[::-<span class="hljs-number">1</span>],
<span class="hljs-meta">... </span>    mode=<span class="hljs-string">&quot;bicubic&quot;</span>,
<span class="hljs-meta">... </span>    align_corners=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># visualize the prediction</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>output = prediction.squeeze().cpu().numpy()
<span class="hljs-meta">&gt;&gt;&gt; </span>formatted = (output * <span class="hljs-number">255</span> / np.<span class="hljs-built_in">max</span>(output)).astype(<span class="hljs-string">&quot;uint8&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>depth = Image.fromarray(formatted)`}}),Oe=new Ge({}),We=new ee({props:{name:"class transformers.DPTForSemanticSegmentation",anchor:"transformers.DPTForSemanticSegmentation",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/dpt/modeling_dpt.py#L1022",parametersDescription:[{anchor:"transformers.DPTForSemanticSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16737/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16737/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ue=new ee({props:{name:"forward",anchor:"transformers.DPTForSemanticSegmentation.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16737/src/transformers/models/dpt/modeling_dpt.py#L1038",parametersDescription:[{anchor:"transformers.DPTForSemanticSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16737/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_16737/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTForSemanticSegmentation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DPTForSemanticSegmentation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DPTForSemanticSegmentation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DPTForSemanticSegmentation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16737/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DPTForSemanticSegmentation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth semantic segmentation maps for computing the loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code>, a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <code>transformers.modeling_outputs.SemanticSegmenterOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16737/en/model_doc/dpt#transformers.DPTConfig"
>DPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels, logits_height, logits_width)</code>) \u2014 Classification scores for each pixel.</p>
<Tip warning={true}>
<p>The logits returned do not necessarily have the same size as the <code>pixel_values</code> passed as inputs. This is
to avoid doing two interpolations and lose some quality when a user needs to resize the logits to the
original image size as post-processing. You should always check your logits shape and resize as needed.</p>
</Tip>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, patch_size, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_outputs.SemanticSegmenterOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pe=new _o({props:{$$slots:{default:[vn]},$$scope:{ctx:S}}}),He=new vo({props:{code:`from transformers import DPTFeatureExtractor, DPTForSemanticSegmentation
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = DPTFeatureExtractor.from_pretrained("Intel/dpt-large-ade")
model = DPTForSemanticSegmentation.from_pretrained("Intel/dpt-large-ade")

inputs = feature_extractor(images=image, return_tensors="pt")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DPTFeatureExtractor, DPTForSemanticSegmentation
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DPTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-large-ade&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DPTForSemanticSegmentation.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-large-ade&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=a("meta"),D=d(),f=a("h1"),u=a("a"),$=a("span"),v(g.$$.fragment),_=d(),E=a("span"),To=s("DPT"),Ot=d(),R=a("h2"),te=a("a"),ft=a("span"),v(ge.$$.fragment),wo=d(),ut=a("span"),Po=s("Overview"),Wt=d(),q=a("p"),bo=s("The DPT model was proposed in "),_e=a("a"),yo=s("Vision Transformers for Dense Prediction"),Do=s(` by Ren\xE9 Ranftl, Alexey Bochkovskiy, Vladlen Koltun.
DPT is a model that leverages the `),Ye=a("a"),$o=s("Vision Transformer (ViT)"),xo=s(" as backbone for dense prediction tasks like semantic segmentation and depth estimation."),Rt=d(),Je=a("p"),Eo=s("The abstract from the paper is the following:"),Bt=d(),Xe=a("p"),gt=a("em"),ko=s("We introduce dense vision transformers, an architecture that leverages vision transformers in place of convolutional networks as a backbone for dense prediction tasks. We assemble tokens from various stages of the vision transformer into image-like representations at various resolutions and progressively combine them into full-resolution predictions using a convolutional decoder. The transformer backbone processes representations at a constant and relatively high resolution and has a global receptive field at every stage. These properties allow the dense vision transformer to provide finer-grained and more globally coherent predictions when compared to fully-convolutional networks. Our experiments show that this architecture yields substantial improvements on dense prediction tasks, especially when a large amount of training data is available. For monocular depth estimation, we observe an improvement of up to 28% in relative performance when compared to a state-of-the-art fully-convolutional network. When applied to semantic segmentation, dense vision transformers set a new state of the art on ADE20K with 49.02% mIoU. We further show that the architecture can be fine-tuned on smaller datasets such as NYUv2, KITTI, and Pascal Context where it also sets the new state of the art."),Ut=d(),oe=a("img"),Ht=d(),ae=a("small"),Fo=s("DPT architecture. Taken from the "),ve=a("a"),jo=s("original paper"),zo=s("."),Kt=d(),A=a("p"),Io=s("This model was contributed by "),Te=a("a"),Co=s("nielsr"),Mo=s(". The original code can be found "),we=a("a"),So=s("here"),qo=s("."),Gt=d(),B=a("h2"),re=a("a"),_t=a("span"),v(Pe.$$.fragment),Ao=d(),vt=a("span"),Lo=s("DPTConfig"),Yt=d(),x=a("div"),v(be.$$.fragment),No=d(),U=a("p"),Vo=s("This is the configuration class to store the configuration of a "),Ze=a("a"),Oo=s("DPTModel"),Wo=s(`. It is used to instantiate an DPT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DPT
`),ye=a("a"),Ro=s("Intel/dpt-large"),Bo=s(" architecture."),Uo=d(),H=a("p"),Ho=s("Configuration objects inherit from "),Qe=a("a"),Ko=s("PretrainedConfig"),Go=s(` and can be used to control the model outputs. Read the
documentation from `),et=a("a"),Yo=s("PretrainedConfig"),Jo=s(" for more information."),Xo=d(),Tt=a("p"),Zo=s("Example:"),Qo=d(),v(De.$$.fragment),Jt=d(),K=a("h2"),ne=a("a"),wt=a("span"),v($e.$$.fragment),ea=d(),Pt=a("span"),ta=s("DPTFeatureExtractor"),Xt=d(),z=a("div"),v(xe.$$.fragment),oa=d(),bt=a("p"),aa=s("Constructs a DPT feature extractor."),ra=d(),Ee=a("p"),na=s("This feature extractor inherits from "),tt=a("a"),sa=s("FeatureExtractionMixin"),ia=s(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),la=d(),L=a("div"),v(ke.$$.fragment),da=d(),yt=a("p"),ca=s("Main method to prepare for the model one or several image(s)."),ha=d(),v(se.$$.fragment),Zt=d(),G=a("h2"),ie=a("a"),Dt=a("span"),v(Fe.$$.fragment),pa=d(),$t=a("span"),ma=s("DPTModel"),Qt=d(),M=a("div"),v(je.$$.fragment),fa=d(),ze=a("p"),ua=s(`The bare DPT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ie=a("a"),ga=s("torch.nn.Module"),_a=s(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),va=d(),k=a("div"),v(Ce.$$.fragment),Ta=d(),Y=a("p"),wa=s("The "),ot=a("a"),Pa=s("DPTModel"),ba=s(" forward method, overrides the "),xt=a("code"),ya=s("__call__"),Da=s(" special method."),$a=d(),v(le.$$.fragment),xa=d(),Et=a("p"),Ea=s("Example:"),ka=d(),v(Me.$$.fragment),eo=d(),J=a("h2"),de=a("a"),kt=a("span"),v(Se.$$.fragment),Fa=d(),Ft=a("span"),ja=s("DPTForDepthEstimation"),to=d(),I=a("div"),v(qe.$$.fragment),za=d(),jt=a("p"),Ia=s("DPT Model with a depth estimation head on top (consisting of 3 convolutional layers) e.g. for KITTI, NYUv2."),Ca=d(),Ae=a("p"),Ma=s("This model is a PyTorch "),Le=a("a"),Sa=s("torch.nn.Module"),qa=s(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Aa=d(),F=a("div"),v(Ne.$$.fragment),La=d(),X=a("p"),Na=s("The "),at=a("a"),Va=s("DPTForDepthEstimation"),Oa=s(" forward method, overrides the "),zt=a("code"),Wa=s("__call__"),Ra=s(" special method."),Ba=d(),v(ce.$$.fragment),Ua=d(),It=a("p"),Ha=s("Examples:"),Ka=d(),v(Ve.$$.fragment),oo=d(),Z=a("h2"),he=a("a"),Ct=a("span"),v(Oe.$$.fragment),Ga=d(),Mt=a("span"),Ya=s("DPTForSemanticSegmentation"),ao=d(),C=a("div"),v(We.$$.fragment),Ja=d(),St=a("p"),Xa=s("DPT Model with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),Za=d(),Re=a("p"),Qa=s("This model is a PyTorch "),Be=a("a"),er=s("torch.nn.Module"),tr=s(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),or=d(),j=a("div"),v(Ue.$$.fragment),ar=d(),Q=a("p"),rr=s("The "),rt=a("a"),nr=s("DPTForSemanticSegmentation"),sr=s(" forward method, overrides the "),qt=a("code"),ir=s("__call__"),lr=s(" special method."),dr=d(),v(pe.$$.fragment),cr=d(),At=a("p"),hr=s("Examples:"),pr=d(),v(He.$$.fragment),this.h()},l(t){const h=pn('[data-svelte="svelte-1phssyn"]',document.head);p=r(h,"META",{name:!0,content:!0}),h.forEach(o),D=c(t),f=r(t,"H1",{class:!0});var Ke=n(f);u=r(Ke,"A",{id:!0,class:!0,href:!0});var Lt=n(u);$=r(Lt,"SPAN",{});var Nt=n($);T(g.$$.fragment,Nt),Nt.forEach(o),Lt.forEach(o),_=c(Ke),E=r(Ke,"SPAN",{});var Vt=n(E);To=i(Vt,"DPT"),Vt.forEach(o),Ke.forEach(o),Ot=c(t),R=r(t,"H2",{class:!0});var no=n(R);te=r(no,"A",{id:!0,class:!0,href:!0});var fr=n(te);ft=r(fr,"SPAN",{});var ur=n(ft);T(ge.$$.fragment,ur),ur.forEach(o),fr.forEach(o),wo=c(no),ut=r(no,"SPAN",{});var gr=n(ut);Po=i(gr,"Overview"),gr.forEach(o),no.forEach(o),Wt=c(t),q=r(t,"P",{});var nt=n(q);bo=i(nt,"The DPT model was proposed in "),_e=r(nt,"A",{href:!0,rel:!0});var _r=n(_e);yo=i(_r,"Vision Transformers for Dense Prediction"),_r.forEach(o),Do=i(nt,` by Ren\xE9 Ranftl, Alexey Bochkovskiy, Vladlen Koltun.
DPT is a model that leverages the `),Ye=r(nt,"A",{href:!0});var vr=n(Ye);$o=i(vr,"Vision Transformer (ViT)"),vr.forEach(o),xo=i(nt," as backbone for dense prediction tasks like semantic segmentation and depth estimation."),nt.forEach(o),Rt=c(t),Je=r(t,"P",{});var Tr=n(Je);Eo=i(Tr,"The abstract from the paper is the following:"),Tr.forEach(o),Bt=c(t),Xe=r(t,"P",{});var wr=n(Xe);gt=r(wr,"EM",{});var Pr=n(gt);ko=i(Pr,"We introduce dense vision transformers, an architecture that leverages vision transformers in place of convolutional networks as a backbone for dense prediction tasks. We assemble tokens from various stages of the vision transformer into image-like representations at various resolutions and progressively combine them into full-resolution predictions using a convolutional decoder. The transformer backbone processes representations at a constant and relatively high resolution and has a global receptive field at every stage. These properties allow the dense vision transformer to provide finer-grained and more globally coherent predictions when compared to fully-convolutional networks. Our experiments show that this architecture yields substantial improvements on dense prediction tasks, especially when a large amount of training data is available. For monocular depth estimation, we observe an improvement of up to 28% in relative performance when compared to a state-of-the-art fully-convolutional network. When applied to semantic segmentation, dense vision transformers set a new state of the art on ADE20K with 49.02% mIoU. We further show that the architecture can be fine-tuned on smaller datasets such as NYUv2, KITTI, and Pascal Context where it also sets the new state of the art."),Pr.forEach(o),wr.forEach(o),Ut=c(t),oe=r(t,"IMG",{src:!0,alt:!0,width:!0}),Ht=c(t),ae=r(t,"SMALL",{});var so=n(ae);Fo=i(so,"DPT architecture. Taken from the "),ve=r(so,"A",{href:!0,target:!0});var br=n(ve);jo=i(br,"original paper"),br.forEach(o),zo=i(so,"."),so.forEach(o),Kt=c(t),A=r(t,"P",{});var st=n(A);Io=i(st,"This model was contributed by "),Te=r(st,"A",{href:!0,rel:!0});var yr=n(Te);Co=i(yr,"nielsr"),yr.forEach(o),Mo=i(st,". The original code can be found "),we=r(st,"A",{href:!0,rel:!0});var Dr=n(we);So=i(Dr,"here"),Dr.forEach(o),qo=i(st,"."),st.forEach(o),Gt=c(t),B=r(t,"H2",{class:!0});var io=n(B);re=r(io,"A",{id:!0,class:!0,href:!0});var $r=n(re);_t=r($r,"SPAN",{});var xr=n(_t);T(Pe.$$.fragment,xr),xr.forEach(o),$r.forEach(o),Ao=c(io),vt=r(io,"SPAN",{});var Er=n(vt);Lo=i(Er,"DPTConfig"),Er.forEach(o),io.forEach(o),Yt=c(t),x=r(t,"DIV",{class:!0});var N=n(x);T(be.$$.fragment,N),No=c(N),U=r(N,"P",{});var it=n(U);Vo=i(it,"This is the configuration class to store the configuration of a "),Ze=r(it,"A",{href:!0});var kr=n(Ze);Oo=i(kr,"DPTModel"),kr.forEach(o),Wo=i(it,`. It is used to instantiate an DPT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DPT
`),ye=r(it,"A",{href:!0,rel:!0});var Fr=n(ye);Ro=i(Fr,"Intel/dpt-large"),Fr.forEach(o),Bo=i(it," architecture."),it.forEach(o),Uo=c(N),H=r(N,"P",{});var lt=n(H);Ho=i(lt,"Configuration objects inherit from "),Qe=r(lt,"A",{href:!0});var jr=n(Qe);Ko=i(jr,"PretrainedConfig"),jr.forEach(o),Go=i(lt,` and can be used to control the model outputs. Read the
documentation from `),et=r(lt,"A",{href:!0});var zr=n(et);Yo=i(zr,"PretrainedConfig"),zr.forEach(o),Jo=i(lt," for more information."),lt.forEach(o),Xo=c(N),Tt=r(N,"P",{});var Ir=n(Tt);Zo=i(Ir,"Example:"),Ir.forEach(o),Qo=c(N),T(De.$$.fragment,N),N.forEach(o),Jt=c(t),K=r(t,"H2",{class:!0});var lo=n(K);ne=r(lo,"A",{id:!0,class:!0,href:!0});var Cr=n(ne);wt=r(Cr,"SPAN",{});var Mr=n(wt);T($e.$$.fragment,Mr),Mr.forEach(o),Cr.forEach(o),ea=c(lo),Pt=r(lo,"SPAN",{});var Sr=n(Pt);ta=i(Sr,"DPTFeatureExtractor"),Sr.forEach(o),lo.forEach(o),Xt=c(t),z=r(t,"DIV",{class:!0});var me=n(z);T(xe.$$.fragment,me),oa=c(me),bt=r(me,"P",{});var qr=n(bt);aa=i(qr,"Constructs a DPT feature extractor."),qr.forEach(o),ra=c(me),Ee=r(me,"P",{});var co=n(Ee);na=i(co,"This feature extractor inherits from "),tt=r(co,"A",{href:!0});var Ar=n(tt);sa=i(Ar,"FeatureExtractionMixin"),Ar.forEach(o),ia=i(co,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),co.forEach(o),la=c(me),L=r(me,"DIV",{class:!0});var dt=n(L);T(ke.$$.fragment,dt),da=c(dt),yt=r(dt,"P",{});var Lr=n(yt);ca=i(Lr,"Main method to prepare for the model one or several image(s)."),Lr.forEach(o),ha=c(dt),T(se.$$.fragment,dt),dt.forEach(o),me.forEach(o),Zt=c(t),G=r(t,"H2",{class:!0});var ho=n(G);ie=r(ho,"A",{id:!0,class:!0,href:!0});var Nr=n(ie);Dt=r(Nr,"SPAN",{});var Vr=n(Dt);T(Fe.$$.fragment,Vr),Vr.forEach(o),Nr.forEach(o),pa=c(ho),$t=r(ho,"SPAN",{});var Or=n($t);ma=i(Or,"DPTModel"),Or.forEach(o),ho.forEach(o),Qt=c(t),M=r(t,"DIV",{class:!0});var ct=n(M);T(je.$$.fragment,ct),fa=c(ct),ze=r(ct,"P",{});var po=n(ze);ua=i(po,`The bare DPT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ie=r(po,"A",{href:!0,rel:!0});var Wr=n(Ie);ga=i(Wr,"torch.nn.Module"),Wr.forEach(o),_a=i(po,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),po.forEach(o),va=c(ct),k=r(ct,"DIV",{class:!0});var V=n(k);T(Ce.$$.fragment,V),Ta=c(V),Y=r(V,"P",{});var ht=n(Y);wa=i(ht,"The "),ot=r(ht,"A",{href:!0});var Rr=n(ot);Pa=i(Rr,"DPTModel"),Rr.forEach(o),ba=i(ht," forward method, overrides the "),xt=r(ht,"CODE",{});var Br=n(xt);ya=i(Br,"__call__"),Br.forEach(o),Da=i(ht," special method."),ht.forEach(o),$a=c(V),T(le.$$.fragment,V),xa=c(V),Et=r(V,"P",{});var Ur=n(Et);Ea=i(Ur,"Example:"),Ur.forEach(o),ka=c(V),T(Me.$$.fragment,V),V.forEach(o),ct.forEach(o),eo=c(t),J=r(t,"H2",{class:!0});var mo=n(J);de=r(mo,"A",{id:!0,class:!0,href:!0});var Hr=n(de);kt=r(Hr,"SPAN",{});var Kr=n(kt);T(Se.$$.fragment,Kr),Kr.forEach(o),Hr.forEach(o),Fa=c(mo),Ft=r(mo,"SPAN",{});var Gr=n(Ft);ja=i(Gr,"DPTForDepthEstimation"),Gr.forEach(o),mo.forEach(o),to=c(t),I=r(t,"DIV",{class:!0});var fe=n(I);T(qe.$$.fragment,fe),za=c(fe),jt=r(fe,"P",{});var Yr=n(jt);Ia=i(Yr,"DPT Model with a depth estimation head on top (consisting of 3 convolutional layers) e.g. for KITTI, NYUv2."),Yr.forEach(o),Ca=c(fe),Ae=r(fe,"P",{});var fo=n(Ae);Ma=i(fo,"This model is a PyTorch "),Le=r(fo,"A",{href:!0,rel:!0});var Jr=n(Le);Sa=i(Jr,"torch.nn.Module"),Jr.forEach(o),qa=i(fo,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fo.forEach(o),Aa=c(fe),F=r(fe,"DIV",{class:!0});var O=n(F);T(Ne.$$.fragment,O),La=c(O),X=r(O,"P",{});var pt=n(X);Na=i(pt,"The "),at=r(pt,"A",{href:!0});var Xr=n(at);Va=i(Xr,"DPTForDepthEstimation"),Xr.forEach(o),Oa=i(pt," forward method, overrides the "),zt=r(pt,"CODE",{});var Zr=n(zt);Wa=i(Zr,"__call__"),Zr.forEach(o),Ra=i(pt," special method."),pt.forEach(o),Ba=c(O),T(ce.$$.fragment,O),Ua=c(O),It=r(O,"P",{});var Qr=n(It);Ha=i(Qr,"Examples:"),Qr.forEach(o),Ka=c(O),T(Ve.$$.fragment,O),O.forEach(o),fe.forEach(o),oo=c(t),Z=r(t,"H2",{class:!0});var uo=n(Z);he=r(uo,"A",{id:!0,class:!0,href:!0});var en=n(he);Ct=r(en,"SPAN",{});var tn=n(Ct);T(Oe.$$.fragment,tn),tn.forEach(o),en.forEach(o),Ga=c(uo),Mt=r(uo,"SPAN",{});var on=n(Mt);Ya=i(on,"DPTForSemanticSegmentation"),on.forEach(o),uo.forEach(o),ao=c(t),C=r(t,"DIV",{class:!0});var ue=n(C);T(We.$$.fragment,ue),Ja=c(ue),St=r(ue,"P",{});var an=n(St);Xa=i(an,"DPT Model with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),an.forEach(o),Za=c(ue),Re=r(ue,"P",{});var go=n(Re);Qa=i(go,"This model is a PyTorch "),Be=r(go,"A",{href:!0,rel:!0});var rn=n(Be);er=i(rn,"torch.nn.Module"),rn.forEach(o),tr=i(go,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),go.forEach(o),or=c(ue),j=r(ue,"DIV",{class:!0});var W=n(j);T(Ue.$$.fragment,W),ar=c(W),Q=r(W,"P",{});var mt=n(Q);rr=i(mt,"The "),rt=r(mt,"A",{href:!0});var nn=n(rt);nr=i(nn,"DPTForSemanticSegmentation"),nn.forEach(o),sr=i(mt," forward method, overrides the "),qt=r(mt,"CODE",{});var sn=n(qt);ir=i(sn,"__call__"),sn.forEach(o),lr=i(mt," special method."),mt.forEach(o),dr=c(W),T(pe.$$.fragment,W),cr=c(W),At=r(W,"P",{});var ln=n(At);hr=i(ln,"Examples:"),ln.forEach(o),pr=c(W),T(He.$$.fragment,W),W.forEach(o),ue.forEach(o),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(wn)),l(u,"id","dpt"),l(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(u,"href","#dpt"),l(f,"class","relative group"),l(te,"id","overview"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#overview"),l(R,"class","relative group"),l(_e,"href","https://arxiv.org/abs/2103.13413"),l(_e,"rel","nofollow"),l(Ye,"href","vit"),mn(oe.src,mr="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/dpt_architecture.jpg")||l(oe,"src",mr),l(oe,"alt","drawing"),l(oe,"width","600"),l(ve,"href","https://arxiv.org/abs/2103.13413"),l(ve,"target","_blank"),l(Te,"href","https://huggingface.co/nielsr"),l(Te,"rel","nofollow"),l(we,"href","https://github.com/isl-org/DPT"),l(we,"rel","nofollow"),l(re,"id","transformers.DPTConfig"),l(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(re,"href","#transformers.DPTConfig"),l(B,"class","relative group"),l(Ze,"href","/docs/transformers/pr_16737/en/model_doc/dpt#transformers.DPTModel"),l(ye,"href","https://huggingface.co/Intel/dpt-large"),l(ye,"rel","nofollow"),l(Qe,"href","/docs/transformers/pr_16737/en/main_classes/configuration#transformers.PretrainedConfig"),l(et,"href","/docs/transformers/pr_16737/en/main_classes/configuration#transformers.PretrainedConfig"),l(x,"class","docstring"),l(ne,"id","transformers.DPTFeatureExtractor"),l(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ne,"href","#transformers.DPTFeatureExtractor"),l(K,"class","relative group"),l(tt,"href","/docs/transformers/pr_16737/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),l(L,"class","docstring"),l(z,"class","docstring"),l(ie,"id","transformers.DPTModel"),l(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ie,"href","#transformers.DPTModel"),l(G,"class","relative group"),l(Ie,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ie,"rel","nofollow"),l(ot,"href","/docs/transformers/pr_16737/en/model_doc/dpt#transformers.DPTModel"),l(k,"class","docstring"),l(M,"class","docstring"),l(de,"id","transformers.DPTForDepthEstimation"),l(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(de,"href","#transformers.DPTForDepthEstimation"),l(J,"class","relative group"),l(Le,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Le,"rel","nofollow"),l(at,"href","/docs/transformers/pr_16737/en/model_doc/dpt#transformers.DPTForDepthEstimation"),l(F,"class","docstring"),l(I,"class","docstring"),l(he,"id","transformers.DPTForSemanticSegmentation"),l(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(he,"href","#transformers.DPTForSemanticSegmentation"),l(Z,"class","relative group"),l(Be,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Be,"rel","nofollow"),l(rt,"href","/docs/transformers/pr_16737/en/model_doc/dpt#transformers.DPTForSemanticSegmentation"),l(j,"class","docstring"),l(C,"class","docstring")},m(t,h){e(document.head,p),m(t,D,h),m(t,f,h),e(f,u),e(u,$),w(g,$,null),e(f,_),e(f,E),e(E,To),m(t,Ot,h),m(t,R,h),e(R,te),e(te,ft),w(ge,ft,null),e(R,wo),e(R,ut),e(ut,Po),m(t,Wt,h),m(t,q,h),e(q,bo),e(q,_e),e(_e,yo),e(q,Do),e(q,Ye),e(Ye,$o),e(q,xo),m(t,Rt,h),m(t,Je,h),e(Je,Eo),m(t,Bt,h),m(t,Xe,h),e(Xe,gt),e(gt,ko),m(t,Ut,h),m(t,oe,h),m(t,Ht,h),m(t,ae,h),e(ae,Fo),e(ae,ve),e(ve,jo),e(ae,zo),m(t,Kt,h),m(t,A,h),e(A,Io),e(A,Te),e(Te,Co),e(A,Mo),e(A,we),e(we,So),e(A,qo),m(t,Gt,h),m(t,B,h),e(B,re),e(re,_t),w(Pe,_t,null),e(B,Ao),e(B,vt),e(vt,Lo),m(t,Yt,h),m(t,x,h),w(be,x,null),e(x,No),e(x,U),e(U,Vo),e(U,Ze),e(Ze,Oo),e(U,Wo),e(U,ye),e(ye,Ro),e(U,Bo),e(x,Uo),e(x,H),e(H,Ho),e(H,Qe),e(Qe,Ko),e(H,Go),e(H,et),e(et,Yo),e(H,Jo),e(x,Xo),e(x,Tt),e(Tt,Zo),e(x,Qo),w(De,x,null),m(t,Jt,h),m(t,K,h),e(K,ne),e(ne,wt),w($e,wt,null),e(K,ea),e(K,Pt),e(Pt,ta),m(t,Xt,h),m(t,z,h),w(xe,z,null),e(z,oa),e(z,bt),e(bt,aa),e(z,ra),e(z,Ee),e(Ee,na),e(Ee,tt),e(tt,sa),e(Ee,ia),e(z,la),e(z,L),w(ke,L,null),e(L,da),e(L,yt),e(yt,ca),e(L,ha),w(se,L,null),m(t,Zt,h),m(t,G,h),e(G,ie),e(ie,Dt),w(Fe,Dt,null),e(G,pa),e(G,$t),e($t,ma),m(t,Qt,h),m(t,M,h),w(je,M,null),e(M,fa),e(M,ze),e(ze,ua),e(ze,Ie),e(Ie,ga),e(ze,_a),e(M,va),e(M,k),w(Ce,k,null),e(k,Ta),e(k,Y),e(Y,wa),e(Y,ot),e(ot,Pa),e(Y,ba),e(Y,xt),e(xt,ya),e(Y,Da),e(k,$a),w(le,k,null),e(k,xa),e(k,Et),e(Et,Ea),e(k,ka),w(Me,k,null),m(t,eo,h),m(t,J,h),e(J,de),e(de,kt),w(Se,kt,null),e(J,Fa),e(J,Ft),e(Ft,ja),m(t,to,h),m(t,I,h),w(qe,I,null),e(I,za),e(I,jt),e(jt,Ia),e(I,Ca),e(I,Ae),e(Ae,Ma),e(Ae,Le),e(Le,Sa),e(Ae,qa),e(I,Aa),e(I,F),w(Ne,F,null),e(F,La),e(F,X),e(X,Na),e(X,at),e(at,Va),e(X,Oa),e(X,zt),e(zt,Wa),e(X,Ra),e(F,Ba),w(ce,F,null),e(F,Ua),e(F,It),e(It,Ha),e(F,Ka),w(Ve,F,null),m(t,oo,h),m(t,Z,h),e(Z,he),e(he,Ct),w(Oe,Ct,null),e(Z,Ga),e(Z,Mt),e(Mt,Ya),m(t,ao,h),m(t,C,h),w(We,C,null),e(C,Ja),e(C,St),e(St,Xa),e(C,Za),e(C,Re),e(Re,Qa),e(Re,Be),e(Be,er),e(Re,tr),e(C,or),e(C,j),w(Ue,j,null),e(j,ar),e(j,Q),e(Q,rr),e(Q,rt),e(rt,nr),e(Q,sr),e(Q,qt),e(qt,ir),e(Q,lr),e(j,dr),w(pe,j,null),e(j,cr),e(j,At),e(At,hr),e(j,pr),w(He,j,null),ro=!0},p(t,[h]){const Ke={};h&2&&(Ke.$$scope={dirty:h,ctx:t}),se.$set(Ke);const Lt={};h&2&&(Lt.$$scope={dirty:h,ctx:t}),le.$set(Lt);const Nt={};h&2&&(Nt.$$scope={dirty:h,ctx:t}),ce.$set(Nt);const Vt={};h&2&&(Vt.$$scope={dirty:h,ctx:t}),pe.$set(Vt)},i(t){ro||(P(g.$$.fragment,t),P(ge.$$.fragment,t),P(Pe.$$.fragment,t),P(be.$$.fragment,t),P(De.$$.fragment,t),P($e.$$.fragment,t),P(xe.$$.fragment,t),P(ke.$$.fragment,t),P(se.$$.fragment,t),P(Fe.$$.fragment,t),P(je.$$.fragment,t),P(Ce.$$.fragment,t),P(le.$$.fragment,t),P(Me.$$.fragment,t),P(Se.$$.fragment,t),P(qe.$$.fragment,t),P(Ne.$$.fragment,t),P(ce.$$.fragment,t),P(Ve.$$.fragment,t),P(Oe.$$.fragment,t),P(We.$$.fragment,t),P(Ue.$$.fragment,t),P(pe.$$.fragment,t),P(He.$$.fragment,t),ro=!0)},o(t){b(g.$$.fragment,t),b(ge.$$.fragment,t),b(Pe.$$.fragment,t),b(be.$$.fragment,t),b(De.$$.fragment,t),b($e.$$.fragment,t),b(xe.$$.fragment,t),b(ke.$$.fragment,t),b(se.$$.fragment,t),b(Fe.$$.fragment,t),b(je.$$.fragment,t),b(Ce.$$.fragment,t),b(le.$$.fragment,t),b(Me.$$.fragment,t),b(Se.$$.fragment,t),b(qe.$$.fragment,t),b(Ne.$$.fragment,t),b(ce.$$.fragment,t),b(Ve.$$.fragment,t),b(Oe.$$.fragment,t),b(We.$$.fragment,t),b(Ue.$$.fragment,t),b(pe.$$.fragment,t),b(He.$$.fragment,t),ro=!1},d(t){o(p),t&&o(D),t&&o(f),y(g),t&&o(Ot),t&&o(R),y(ge),t&&o(Wt),t&&o(q),t&&o(Rt),t&&o(Je),t&&o(Bt),t&&o(Xe),t&&o(Ut),t&&o(oe),t&&o(Ht),t&&o(ae),t&&o(Kt),t&&o(A),t&&o(Gt),t&&o(B),y(Pe),t&&o(Yt),t&&o(x),y(be),y(De),t&&o(Jt),t&&o(K),y($e),t&&o(Xt),t&&o(z),y(xe),y(ke),y(se),t&&o(Zt),t&&o(G),y(Fe),t&&o(Qt),t&&o(M),y(je),y(Ce),y(le),y(Me),t&&o(eo),t&&o(J),y(Se),t&&o(to),t&&o(I),y(qe),y(Ne),y(ce),y(Ve),t&&o(oo),t&&o(Z),y(Oe),t&&o(ao),t&&o(C),y(We),y(Ue),y(pe),y(He)}}}const wn={local:"dpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.DPTConfig",title:"DPTConfig"},{local:"transformers.DPTFeatureExtractor",title:"DPTFeatureExtractor"},{local:"transformers.DPTModel",title:"DPTModel"},{local:"transformers.DPTForDepthEstimation",title:"DPTForDepthEstimation"},{local:"transformers.DPTForSemanticSegmentation",title:"DPTForSemanticSegmentation"}],title:"DPT"};function Pn(S){return fn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class En extends dn{constructor(p){super();cn(this,p,Pn,Tn,hn,{})}}export{En as default,wn as metadata};
