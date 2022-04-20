import{S as dn,i as cn,s as pn,e as r,k as d,w as v,t as s,M as hn,c as a,d as o,m as c,a as n,x as T,h as i,b as l,N as mn,F as e,g as m,y as b,q as w,o as P,B as y,v as un}from"../../chunks/vendor-6b77c823.js";import{T as _o}from"../../chunks/Tip-39098574.js";import{D as ee}from"../../chunks/Docstring-1088f2fb.js";import{C as vo}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ge}from"../../chunks/IconCopyLink-7a11ce68.js";function fn(S){let h,D;return{c(){h=r("p"),D=s(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(u){h=a(u,"P",{});var f=n(h);D=i(f,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),f.forEach(o)},m(u,f){m(u,h,f),e(h,D)},d(u){u&&o(h)}}}function gn(S){let h,D,u,f,$;return{c(){h=r("p"),D=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),f=s("Module"),$=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){h=a(g,"P",{});var _=n(h);D=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var E=n(u);f=i(E,"Module"),E.forEach(o),$=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(g,_){m(g,h,_),e(h,D),e(h,u),e(u,f),e(h,$)},d(g){g&&o(h)}}}function _n(S){let h,D,u,f,$;return{c(){h=r("p"),D=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),f=s("Module"),$=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){h=a(g,"P",{});var _=n(h);D=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var E=n(u);f=i(E,"Module"),E.forEach(o),$=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(g,_){m(g,h,_),e(h,D),e(h,u),e(u,f),e(h,$)},d(g){g&&o(h)}}}function vn(S){let h,D,u,f,$;return{c(){h=r("p"),D=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),f=s("Module"),$=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){h=a(g,"P",{});var _=n(h);D=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var E=n(u);f=i(E,"Module"),E.forEach(o),$=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(g,_){m(g,h,_),e(h,D),e(h,u),e(u,f),e(h,$)},d(g){g&&o(h)}}}function Tn(S){let h,D,u,f,$,g,_,E,To,Ot,R,te,ut,ge,bo,ft,wo,Wt,q,Po,_e,yo,Do,Ye,$o,xo,Rt,Je,Eo,Bt,Xe,gt,ko,Ut,oe,ma,Ht,re,Fo,ve,jo,zo,Kt,A,Io,Te,Co,Mo,be,So,qo,Gt,B,ae,_t,we,Ao,vt,Lo,Yt,x,Pe,No,U,Vo,Ze,Oo,Wo,ye,Ro,Bo,Uo,H,Ho,Qe,Ko,Go,et,Yo,Jo,Xo,Tt,Zo,Qo,De,Jt,K,ne,bt,$e,er,wt,tr,Xt,z,xe,or,Pt,rr,ar,Ee,nr,tt,sr,ir,lr,L,ke,dr,yt,cr,pr,se,Zt,G,ie,Dt,Fe,hr,$t,mr,Qt,M,je,ur,ze,fr,Ie,gr,_r,vr,k,Ce,Tr,Y,br,ot,wr,Pr,xt,yr,Dr,$r,le,xr,Et,Er,kr,Me,eo,J,de,kt,Se,Fr,Ft,jr,to,I,qe,zr,jt,Ir,Cr,Ae,Mr,Le,Sr,qr,Ar,F,Ne,Lr,X,Nr,rt,Vr,Or,zt,Wr,Rr,Br,ce,Ur,It,Hr,Kr,Ve,oo,Z,pe,Ct,Oe,Gr,Mt,Yr,ro,C,We,Jr,St,Xr,Zr,Re,Qr,Be,ea,ta,oa,j,Ue,ra,Q,aa,at,na,sa,qt,ia,la,da,he,ca,At,pa,ha,He,ao;return g=new Ge({}),ge=new Ge({}),we=new Ge({}),Pe=new ee({props:{name:"class transformers.DPTConfig",anchor:"transformers.DPTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"image_size",val:" = 384"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"backbone_out_indices",val:" = [2, 5, 8, 11]"},{name:"readout_type",val:" = 'project'"},{name:"reassemble_factors",val:" = [4, 2, 1, 0.5]"},{name:"neck_hidden_sizes",val:" = [96, 192, 384, 768]"},{name:"fusion_hidden_size",val:" = 256"},{name:"head_in_index",val:" = -1"},{name:"use_batch_norm_in_fusion_residual",val:" = False"},{name:"use_auxiliary_head",val:" = True"},{name:"auxiliary_loss_weight",val:" = 0.4"},{name:"semantic_loss_ignore_index",val:" = 255"},{name:"semantic_classifier_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DPTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The dropout ratio for the semantic classification head.`,name:"semantic_classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/dpt/configuration_dpt.py#L29"}}),De=new vo({props:{code:`from transformers import DPTModel, DPTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),$e=new Ge({}),xe=new ee({props:{name:"class transformers.DPTFeatureExtractor",anchor:"transformers.DPTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 384"},{name:"keep_aspect_ratio",val:" = False"},{name:"ensure_multiple_of",val:" = 1"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DPTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/dpt/feature_extraction_dpt.py#L37"}}),ke=new ee({props:{name:"__call__",anchor:"transformers.DPTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DPTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.DPTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_16782/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/dpt/feature_extraction_dpt.py#L133",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16782/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16782/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),se=new _o({props:{warning:!0,$$slots:{default:[fn]},$$scope:{ctx:S}}}),Fe=new Ge({}),je=new ee({props:{name:"class transformers.DPTModel",anchor:"transformers.DPTModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.DPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16782/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/dpt/modeling_dpt.py#L682"}}),Ce=new ee({props:{name:"forward",anchor:"transformers.DPTModel.forward",parameters:[{name:"pixel_values",val:""},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DPTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16782/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/dpt/modeling_dpt.py#L708",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16782/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16782/en/model_doc/dpt#transformers.DPTConfig"
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
  href="/docs/transformers/pr_16782/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
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
[<span class="hljs-number">1</span>, <span class="hljs-number">577</span>, <span class="hljs-number">1024</span>]`}}),Se=new Ge({}),qe=new ee({props:{name:"class transformers.DPTForDepthEstimation",anchor:"transformers.DPTForDepthEstimation",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DPTForDepthEstimation.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16782/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/dpt/modeling_dpt.py#L863"}}),Ne=new ee({props:{name:"forward",anchor:"transformers.DPTForDepthEstimation.forward",parameters:[{name:"pixel_values",val:""},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DPTForDepthEstimation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTForDepthEstimation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DPTForDepthEstimation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DPTForDepthEstimation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DPTForDepthEstimation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16782/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DPTForDepthEstimation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth depth estimation maps for computing the loss.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/dpt/modeling_dpt.py#L878",returnDescription:`
<p>A <code>transformers.modeling_outputs.DepthEstimatorOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16782/en/model_doc/dpt#transformers.DPTConfig"
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
<span class="hljs-meta">&gt;&gt;&gt; </span>depth = Image.fromarray(formatted)`}}),Oe=new Ge({}),We=new ee({props:{name:"class transformers.DPTForSemanticSegmentation",anchor:"transformers.DPTForSemanticSegmentation",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DPTForSemanticSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16782/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/dpt/modeling_dpt.py#L1023"}}),Ue=new ee({props:{name:"forward",anchor:"transformers.DPTForSemanticSegmentation.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DPTForSemanticSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/pr_16782/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTForSemanticSegmentation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DPTForSemanticSegmentation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DPTForSemanticSegmentation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DPTForSemanticSegmentation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16782/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DPTForSemanticSegmentation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth semantic segmentation maps for computing the loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code>, a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/dpt/modeling_dpt.py#L1039",returnDescription:`
<p>A <code>transformers.modeling_outputs.SemanticSegmenterOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16782/en/model_doc/dpt#transformers.DPTConfig"
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
`}}),he=new _o({props:{$$slots:{default:[vn]},$$scope:{ctx:S}}}),He=new vo({props:{code:`from transformers import DPTFeatureExtractor, DPTForSemanticSegmentation
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=r("meta"),D=d(),u=r("h1"),f=r("a"),$=r("span"),v(g.$$.fragment),_=d(),E=r("span"),To=s("DPT"),Ot=d(),R=r("h2"),te=r("a"),ut=r("span"),v(ge.$$.fragment),bo=d(),ft=r("span"),wo=s("Overview"),Wt=d(),q=r("p"),Po=s("The DPT model was proposed in "),_e=r("a"),yo=s("Vision Transformers for Dense Prediction"),Do=s(` by Ren\xE9 Ranftl, Alexey Bochkovskiy, Vladlen Koltun.
DPT is a model that leverages the `),Ye=r("a"),$o=s("Vision Transformer (ViT)"),xo=s(" as backbone for dense prediction tasks like semantic segmentation and depth estimation."),Rt=d(),Je=r("p"),Eo=s("The abstract from the paper is the following:"),Bt=d(),Xe=r("p"),gt=r("em"),ko=s("We introduce dense vision transformers, an architecture that leverages vision transformers in place of convolutional networks as a backbone for dense prediction tasks. We assemble tokens from various stages of the vision transformer into image-like representations at various resolutions and progressively combine them into full-resolution predictions using a convolutional decoder. The transformer backbone processes representations at a constant and relatively high resolution and has a global receptive field at every stage. These properties allow the dense vision transformer to provide finer-grained and more globally coherent predictions when compared to fully-convolutional networks. Our experiments show that this architecture yields substantial improvements on dense prediction tasks, especially when a large amount of training data is available. For monocular depth estimation, we observe an improvement of up to 28% in relative performance when compared to a state-of-the-art fully-convolutional network. When applied to semantic segmentation, dense vision transformers set a new state of the art on ADE20K with 49.02% mIoU. We further show that the architecture can be fine-tuned on smaller datasets such as NYUv2, KITTI, and Pascal Context where it also sets the new state of the art."),Ut=d(),oe=r("img"),Ht=d(),re=r("small"),Fo=s("DPT architecture. Taken from the "),ve=r("a"),jo=s("original paper"),zo=s("."),Kt=d(),A=r("p"),Io=s("This model was contributed by "),Te=r("a"),Co=s("nielsr"),Mo=s(". The original code can be found "),be=r("a"),So=s("here"),qo=s("."),Gt=d(),B=r("h2"),ae=r("a"),_t=r("span"),v(we.$$.fragment),Ao=d(),vt=r("span"),Lo=s("DPTConfig"),Yt=d(),x=r("div"),v(Pe.$$.fragment),No=d(),U=r("p"),Vo=s("This is the configuration class to store the configuration of a "),Ze=r("a"),Oo=s("DPTModel"),Wo=s(`. It is used to instantiate an DPT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DPT
`),ye=r("a"),Ro=s("Intel/dpt-large"),Bo=s(" architecture."),Uo=d(),H=r("p"),Ho=s("Configuration objects inherit from "),Qe=r("a"),Ko=s("PretrainedConfig"),Go=s(` and can be used to control the model outputs. Read the
documentation from `),et=r("a"),Yo=s("PretrainedConfig"),Jo=s(" for more information."),Xo=d(),Tt=r("p"),Zo=s("Example:"),Qo=d(),v(De.$$.fragment),Jt=d(),K=r("h2"),ne=r("a"),bt=r("span"),v($e.$$.fragment),er=d(),wt=r("span"),tr=s("DPTFeatureExtractor"),Xt=d(),z=r("div"),v(xe.$$.fragment),or=d(),Pt=r("p"),rr=s("Constructs a DPT feature extractor."),ar=d(),Ee=r("p"),nr=s("This feature extractor inherits from "),tt=r("a"),sr=s("FeatureExtractionMixin"),ir=s(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),lr=d(),L=r("div"),v(ke.$$.fragment),dr=d(),yt=r("p"),cr=s("Main method to prepare for the model one or several image(s)."),pr=d(),v(se.$$.fragment),Zt=d(),G=r("h2"),ie=r("a"),Dt=r("span"),v(Fe.$$.fragment),hr=d(),$t=r("span"),mr=s("DPTModel"),Qt=d(),M=r("div"),v(je.$$.fragment),ur=d(),ze=r("p"),fr=s(`The bare DPT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ie=r("a"),gr=s("torch.nn.Module"),_r=s(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),vr=d(),k=r("div"),v(Ce.$$.fragment),Tr=d(),Y=r("p"),br=s("The "),ot=r("a"),wr=s("DPTModel"),Pr=s(" forward method, overrides the "),xt=r("code"),yr=s("__call__"),Dr=s(" special method."),$r=d(),v(le.$$.fragment),xr=d(),Et=r("p"),Er=s("Example:"),kr=d(),v(Me.$$.fragment),eo=d(),J=r("h2"),de=r("a"),kt=r("span"),v(Se.$$.fragment),Fr=d(),Ft=r("span"),jr=s("DPTForDepthEstimation"),to=d(),I=r("div"),v(qe.$$.fragment),zr=d(),jt=r("p"),Ir=s("DPT Model with a depth estimation head on top (consisting of 3 convolutional layers) e.g. for KITTI, NYUv2."),Cr=d(),Ae=r("p"),Mr=s("This model is a PyTorch "),Le=r("a"),Sr=s("torch.nn.Module"),qr=s(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ar=d(),F=r("div"),v(Ne.$$.fragment),Lr=d(),X=r("p"),Nr=s("The "),rt=r("a"),Vr=s("DPTForDepthEstimation"),Or=s(" forward method, overrides the "),zt=r("code"),Wr=s("__call__"),Rr=s(" special method."),Br=d(),v(ce.$$.fragment),Ur=d(),It=r("p"),Hr=s("Examples:"),Kr=d(),v(Ve.$$.fragment),oo=d(),Z=r("h2"),pe=r("a"),Ct=r("span"),v(Oe.$$.fragment),Gr=d(),Mt=r("span"),Yr=s("DPTForSemanticSegmentation"),ro=d(),C=r("div"),v(We.$$.fragment),Jr=d(),St=r("p"),Xr=s("DPT Model with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),Zr=d(),Re=r("p"),Qr=s("This model is a PyTorch "),Be=r("a"),ea=s("torch.nn.Module"),ta=s(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),oa=d(),j=r("div"),v(Ue.$$.fragment),ra=d(),Q=r("p"),aa=s("The "),at=r("a"),na=s("DPTForSemanticSegmentation"),sa=s(" forward method, overrides the "),qt=r("code"),ia=s("__call__"),la=s(" special method."),da=d(),v(he.$$.fragment),ca=d(),At=r("p"),pa=s("Examples:"),ha=d(),v(He.$$.fragment),this.h()},l(t){const p=hn('[data-svelte="svelte-1phssyn"]',document.head);h=a(p,"META",{name:!0,content:!0}),p.forEach(o),D=c(t),u=a(t,"H1",{class:!0});var Ke=n(u);f=a(Ke,"A",{id:!0,class:!0,href:!0});var Lt=n(f);$=a(Lt,"SPAN",{});var Nt=n($);T(g.$$.fragment,Nt),Nt.forEach(o),Lt.forEach(o),_=c(Ke),E=a(Ke,"SPAN",{});var Vt=n(E);To=i(Vt,"DPT"),Vt.forEach(o),Ke.forEach(o),Ot=c(t),R=a(t,"H2",{class:!0});var no=n(R);te=a(no,"A",{id:!0,class:!0,href:!0});var ua=n(te);ut=a(ua,"SPAN",{});var fa=n(ut);T(ge.$$.fragment,fa),fa.forEach(o),ua.forEach(o),bo=c(no),ft=a(no,"SPAN",{});var ga=n(ft);wo=i(ga,"Overview"),ga.forEach(o),no.forEach(o),Wt=c(t),q=a(t,"P",{});var nt=n(q);Po=i(nt,"The DPT model was proposed in "),_e=a(nt,"A",{href:!0,rel:!0});var _a=n(_e);yo=i(_a,"Vision Transformers for Dense Prediction"),_a.forEach(o),Do=i(nt,` by Ren\xE9 Ranftl, Alexey Bochkovskiy, Vladlen Koltun.
DPT is a model that leverages the `),Ye=a(nt,"A",{href:!0});var va=n(Ye);$o=i(va,"Vision Transformer (ViT)"),va.forEach(o),xo=i(nt," as backbone for dense prediction tasks like semantic segmentation and depth estimation."),nt.forEach(o),Rt=c(t),Je=a(t,"P",{});var Ta=n(Je);Eo=i(Ta,"The abstract from the paper is the following:"),Ta.forEach(o),Bt=c(t),Xe=a(t,"P",{});var ba=n(Xe);gt=a(ba,"EM",{});var wa=n(gt);ko=i(wa,"We introduce dense vision transformers, an architecture that leverages vision transformers in place of convolutional networks as a backbone for dense prediction tasks. We assemble tokens from various stages of the vision transformer into image-like representations at various resolutions and progressively combine them into full-resolution predictions using a convolutional decoder. The transformer backbone processes representations at a constant and relatively high resolution and has a global receptive field at every stage. These properties allow the dense vision transformer to provide finer-grained and more globally coherent predictions when compared to fully-convolutional networks. Our experiments show that this architecture yields substantial improvements on dense prediction tasks, especially when a large amount of training data is available. For monocular depth estimation, we observe an improvement of up to 28% in relative performance when compared to a state-of-the-art fully-convolutional network. When applied to semantic segmentation, dense vision transformers set a new state of the art on ADE20K with 49.02% mIoU. We further show that the architecture can be fine-tuned on smaller datasets such as NYUv2, KITTI, and Pascal Context where it also sets the new state of the art."),wa.forEach(o),ba.forEach(o),Ut=c(t),oe=a(t,"IMG",{src:!0,alt:!0,width:!0}),Ht=c(t),re=a(t,"SMALL",{});var so=n(re);Fo=i(so,"DPT architecture. Taken from the "),ve=a(so,"A",{href:!0,target:!0});var Pa=n(ve);jo=i(Pa,"original paper"),Pa.forEach(o),zo=i(so,"."),so.forEach(o),Kt=c(t),A=a(t,"P",{});var st=n(A);Io=i(st,"This model was contributed by "),Te=a(st,"A",{href:!0,rel:!0});var ya=n(Te);Co=i(ya,"nielsr"),ya.forEach(o),Mo=i(st,". The original code can be found "),be=a(st,"A",{href:!0,rel:!0});var Da=n(be);So=i(Da,"here"),Da.forEach(o),qo=i(st,"."),st.forEach(o),Gt=c(t),B=a(t,"H2",{class:!0});var io=n(B);ae=a(io,"A",{id:!0,class:!0,href:!0});var $a=n(ae);_t=a($a,"SPAN",{});var xa=n(_t);T(we.$$.fragment,xa),xa.forEach(o),$a.forEach(o),Ao=c(io),vt=a(io,"SPAN",{});var Ea=n(vt);Lo=i(Ea,"DPTConfig"),Ea.forEach(o),io.forEach(o),Yt=c(t),x=a(t,"DIV",{class:!0});var N=n(x);T(Pe.$$.fragment,N),No=c(N),U=a(N,"P",{});var it=n(U);Vo=i(it,"This is the configuration class to store the configuration of a "),Ze=a(it,"A",{href:!0});var ka=n(Ze);Oo=i(ka,"DPTModel"),ka.forEach(o),Wo=i(it,`. It is used to instantiate an DPT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DPT
`),ye=a(it,"A",{href:!0,rel:!0});var Fa=n(ye);Ro=i(Fa,"Intel/dpt-large"),Fa.forEach(o),Bo=i(it," architecture."),it.forEach(o),Uo=c(N),H=a(N,"P",{});var lt=n(H);Ho=i(lt,"Configuration objects inherit from "),Qe=a(lt,"A",{href:!0});var ja=n(Qe);Ko=i(ja,"PretrainedConfig"),ja.forEach(o),Go=i(lt,` and can be used to control the model outputs. Read the
documentation from `),et=a(lt,"A",{href:!0});var za=n(et);Yo=i(za,"PretrainedConfig"),za.forEach(o),Jo=i(lt," for more information."),lt.forEach(o),Xo=c(N),Tt=a(N,"P",{});var Ia=n(Tt);Zo=i(Ia,"Example:"),Ia.forEach(o),Qo=c(N),T(De.$$.fragment,N),N.forEach(o),Jt=c(t),K=a(t,"H2",{class:!0});var lo=n(K);ne=a(lo,"A",{id:!0,class:!0,href:!0});var Ca=n(ne);bt=a(Ca,"SPAN",{});var Ma=n(bt);T($e.$$.fragment,Ma),Ma.forEach(o),Ca.forEach(o),er=c(lo),wt=a(lo,"SPAN",{});var Sa=n(wt);tr=i(Sa,"DPTFeatureExtractor"),Sa.forEach(o),lo.forEach(o),Xt=c(t),z=a(t,"DIV",{class:!0});var me=n(z);T(xe.$$.fragment,me),or=c(me),Pt=a(me,"P",{});var qa=n(Pt);rr=i(qa,"Constructs a DPT feature extractor."),qa.forEach(o),ar=c(me),Ee=a(me,"P",{});var co=n(Ee);nr=i(co,"This feature extractor inherits from "),tt=a(co,"A",{href:!0});var Aa=n(tt);sr=i(Aa,"FeatureExtractionMixin"),Aa.forEach(o),ir=i(co,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),co.forEach(o),lr=c(me),L=a(me,"DIV",{class:!0});var dt=n(L);T(ke.$$.fragment,dt),dr=c(dt),yt=a(dt,"P",{});var La=n(yt);cr=i(La,"Main method to prepare for the model one or several image(s)."),La.forEach(o),pr=c(dt),T(se.$$.fragment,dt),dt.forEach(o),me.forEach(o),Zt=c(t),G=a(t,"H2",{class:!0});var po=n(G);ie=a(po,"A",{id:!0,class:!0,href:!0});var Na=n(ie);Dt=a(Na,"SPAN",{});var Va=n(Dt);T(Fe.$$.fragment,Va),Va.forEach(o),Na.forEach(o),hr=c(po),$t=a(po,"SPAN",{});var Oa=n($t);mr=i(Oa,"DPTModel"),Oa.forEach(o),po.forEach(o),Qt=c(t),M=a(t,"DIV",{class:!0});var ct=n(M);T(je.$$.fragment,ct),ur=c(ct),ze=a(ct,"P",{});var ho=n(ze);fr=i(ho,`The bare DPT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ie=a(ho,"A",{href:!0,rel:!0});var Wa=n(Ie);gr=i(Wa,"torch.nn.Module"),Wa.forEach(o),_r=i(ho,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ho.forEach(o),vr=c(ct),k=a(ct,"DIV",{class:!0});var V=n(k);T(Ce.$$.fragment,V),Tr=c(V),Y=a(V,"P",{});var pt=n(Y);br=i(pt,"The "),ot=a(pt,"A",{href:!0});var Ra=n(ot);wr=i(Ra,"DPTModel"),Ra.forEach(o),Pr=i(pt," forward method, overrides the "),xt=a(pt,"CODE",{});var Ba=n(xt);yr=i(Ba,"__call__"),Ba.forEach(o),Dr=i(pt," special method."),pt.forEach(o),$r=c(V),T(le.$$.fragment,V),xr=c(V),Et=a(V,"P",{});var Ua=n(Et);Er=i(Ua,"Example:"),Ua.forEach(o),kr=c(V),T(Me.$$.fragment,V),V.forEach(o),ct.forEach(o),eo=c(t),J=a(t,"H2",{class:!0});var mo=n(J);de=a(mo,"A",{id:!0,class:!0,href:!0});var Ha=n(de);kt=a(Ha,"SPAN",{});var Ka=n(kt);T(Se.$$.fragment,Ka),Ka.forEach(o),Ha.forEach(o),Fr=c(mo),Ft=a(mo,"SPAN",{});var Ga=n(Ft);jr=i(Ga,"DPTForDepthEstimation"),Ga.forEach(o),mo.forEach(o),to=c(t),I=a(t,"DIV",{class:!0});var ue=n(I);T(qe.$$.fragment,ue),zr=c(ue),jt=a(ue,"P",{});var Ya=n(jt);Ir=i(Ya,"DPT Model with a depth estimation head on top (consisting of 3 convolutional layers) e.g. for KITTI, NYUv2."),Ya.forEach(o),Cr=c(ue),Ae=a(ue,"P",{});var uo=n(Ae);Mr=i(uo,"This model is a PyTorch "),Le=a(uo,"A",{href:!0,rel:!0});var Ja=n(Le);Sr=i(Ja,"torch.nn.Module"),Ja.forEach(o),qr=i(uo,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),uo.forEach(o),Ar=c(ue),F=a(ue,"DIV",{class:!0});var O=n(F);T(Ne.$$.fragment,O),Lr=c(O),X=a(O,"P",{});var ht=n(X);Nr=i(ht,"The "),rt=a(ht,"A",{href:!0});var Xa=n(rt);Vr=i(Xa,"DPTForDepthEstimation"),Xa.forEach(o),Or=i(ht," forward method, overrides the "),zt=a(ht,"CODE",{});var Za=n(zt);Wr=i(Za,"__call__"),Za.forEach(o),Rr=i(ht," special method."),ht.forEach(o),Br=c(O),T(ce.$$.fragment,O),Ur=c(O),It=a(O,"P",{});var Qa=n(It);Hr=i(Qa,"Examples:"),Qa.forEach(o),Kr=c(O),T(Ve.$$.fragment,O),O.forEach(o),ue.forEach(o),oo=c(t),Z=a(t,"H2",{class:!0});var fo=n(Z);pe=a(fo,"A",{id:!0,class:!0,href:!0});var en=n(pe);Ct=a(en,"SPAN",{});var tn=n(Ct);T(Oe.$$.fragment,tn),tn.forEach(o),en.forEach(o),Gr=c(fo),Mt=a(fo,"SPAN",{});var on=n(Mt);Yr=i(on,"DPTForSemanticSegmentation"),on.forEach(o),fo.forEach(o),ro=c(t),C=a(t,"DIV",{class:!0});var fe=n(C);T(We.$$.fragment,fe),Jr=c(fe),St=a(fe,"P",{});var rn=n(St);Xr=i(rn,"DPT Model with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),rn.forEach(o),Zr=c(fe),Re=a(fe,"P",{});var go=n(Re);Qr=i(go,"This model is a PyTorch "),Be=a(go,"A",{href:!0,rel:!0});var an=n(Be);ea=i(an,"torch.nn.Module"),an.forEach(o),ta=i(go,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),go.forEach(o),oa=c(fe),j=a(fe,"DIV",{class:!0});var W=n(j);T(Ue.$$.fragment,W),ra=c(W),Q=a(W,"P",{});var mt=n(Q);aa=i(mt,"The "),at=a(mt,"A",{href:!0});var nn=n(at);na=i(nn,"DPTForSemanticSegmentation"),nn.forEach(o),sa=i(mt," forward method, overrides the "),qt=a(mt,"CODE",{});var sn=n(qt);ia=i(sn,"__call__"),sn.forEach(o),la=i(mt," special method."),mt.forEach(o),da=c(W),T(he.$$.fragment,W),ca=c(W),At=a(W,"P",{});var ln=n(At);pa=i(ln,"Examples:"),ln.forEach(o),ha=c(W),T(He.$$.fragment,W),W.forEach(o),fe.forEach(o),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(bn)),l(f,"id","dpt"),l(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(f,"href","#dpt"),l(u,"class","relative group"),l(te,"id","overview"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#overview"),l(R,"class","relative group"),l(_e,"href","https://arxiv.org/abs/2103.13413"),l(_e,"rel","nofollow"),l(Ye,"href","vit"),mn(oe.src,ma="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/dpt_architecture.jpg")||l(oe,"src",ma),l(oe,"alt","drawing"),l(oe,"width","600"),l(ve,"href","https://arxiv.org/abs/2103.13413"),l(ve,"target","_blank"),l(Te,"href","https://huggingface.co/nielsr"),l(Te,"rel","nofollow"),l(be,"href","https://github.com/isl-org/DPT"),l(be,"rel","nofollow"),l(ae,"id","transformers.DPTConfig"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.DPTConfig"),l(B,"class","relative group"),l(Ze,"href","/docs/transformers/pr_16782/en/model_doc/dpt#transformers.DPTModel"),l(ye,"href","https://huggingface.co/Intel/dpt-large"),l(ye,"rel","nofollow"),l(Qe,"href","/docs/transformers/pr_16782/en/main_classes/configuration#transformers.PretrainedConfig"),l(et,"href","/docs/transformers/pr_16782/en/main_classes/configuration#transformers.PretrainedConfig"),l(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ne,"id","transformers.DPTFeatureExtractor"),l(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ne,"href","#transformers.DPTFeatureExtractor"),l(K,"class","relative group"),l(tt,"href","/docs/transformers/pr_16782/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),l(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ie,"id","transformers.DPTModel"),l(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ie,"href","#transformers.DPTModel"),l(G,"class","relative group"),l(Ie,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ie,"rel","nofollow"),l(ot,"href","/docs/transformers/pr_16782/en/model_doc/dpt#transformers.DPTModel"),l(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(de,"id","transformers.DPTForDepthEstimation"),l(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(de,"href","#transformers.DPTForDepthEstimation"),l(J,"class","relative group"),l(Le,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Le,"rel","nofollow"),l(rt,"href","/docs/transformers/pr_16782/en/model_doc/dpt#transformers.DPTForDepthEstimation"),l(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(pe,"id","transformers.DPTForSemanticSegmentation"),l(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(pe,"href","#transformers.DPTForSemanticSegmentation"),l(Z,"class","relative group"),l(Be,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Be,"rel","nofollow"),l(at,"href","/docs/transformers/pr_16782/en/model_doc/dpt#transformers.DPTForSemanticSegmentation"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,p){e(document.head,h),m(t,D,p),m(t,u,p),e(u,f),e(f,$),b(g,$,null),e(u,_),e(u,E),e(E,To),m(t,Ot,p),m(t,R,p),e(R,te),e(te,ut),b(ge,ut,null),e(R,bo),e(R,ft),e(ft,wo),m(t,Wt,p),m(t,q,p),e(q,Po),e(q,_e),e(_e,yo),e(q,Do),e(q,Ye),e(Ye,$o),e(q,xo),m(t,Rt,p),m(t,Je,p),e(Je,Eo),m(t,Bt,p),m(t,Xe,p),e(Xe,gt),e(gt,ko),m(t,Ut,p),m(t,oe,p),m(t,Ht,p),m(t,re,p),e(re,Fo),e(re,ve),e(ve,jo),e(re,zo),m(t,Kt,p),m(t,A,p),e(A,Io),e(A,Te),e(Te,Co),e(A,Mo),e(A,be),e(be,So),e(A,qo),m(t,Gt,p),m(t,B,p),e(B,ae),e(ae,_t),b(we,_t,null),e(B,Ao),e(B,vt),e(vt,Lo),m(t,Yt,p),m(t,x,p),b(Pe,x,null),e(x,No),e(x,U),e(U,Vo),e(U,Ze),e(Ze,Oo),e(U,Wo),e(U,ye),e(ye,Ro),e(U,Bo),e(x,Uo),e(x,H),e(H,Ho),e(H,Qe),e(Qe,Ko),e(H,Go),e(H,et),e(et,Yo),e(H,Jo),e(x,Xo),e(x,Tt),e(Tt,Zo),e(x,Qo),b(De,x,null),m(t,Jt,p),m(t,K,p),e(K,ne),e(ne,bt),b($e,bt,null),e(K,er),e(K,wt),e(wt,tr),m(t,Xt,p),m(t,z,p),b(xe,z,null),e(z,or),e(z,Pt),e(Pt,rr),e(z,ar),e(z,Ee),e(Ee,nr),e(Ee,tt),e(tt,sr),e(Ee,ir),e(z,lr),e(z,L),b(ke,L,null),e(L,dr),e(L,yt),e(yt,cr),e(L,pr),b(se,L,null),m(t,Zt,p),m(t,G,p),e(G,ie),e(ie,Dt),b(Fe,Dt,null),e(G,hr),e(G,$t),e($t,mr),m(t,Qt,p),m(t,M,p),b(je,M,null),e(M,ur),e(M,ze),e(ze,fr),e(ze,Ie),e(Ie,gr),e(ze,_r),e(M,vr),e(M,k),b(Ce,k,null),e(k,Tr),e(k,Y),e(Y,br),e(Y,ot),e(ot,wr),e(Y,Pr),e(Y,xt),e(xt,yr),e(Y,Dr),e(k,$r),b(le,k,null),e(k,xr),e(k,Et),e(Et,Er),e(k,kr),b(Me,k,null),m(t,eo,p),m(t,J,p),e(J,de),e(de,kt),b(Se,kt,null),e(J,Fr),e(J,Ft),e(Ft,jr),m(t,to,p),m(t,I,p),b(qe,I,null),e(I,zr),e(I,jt),e(jt,Ir),e(I,Cr),e(I,Ae),e(Ae,Mr),e(Ae,Le),e(Le,Sr),e(Ae,qr),e(I,Ar),e(I,F),b(Ne,F,null),e(F,Lr),e(F,X),e(X,Nr),e(X,rt),e(rt,Vr),e(X,Or),e(X,zt),e(zt,Wr),e(X,Rr),e(F,Br),b(ce,F,null),e(F,Ur),e(F,It),e(It,Hr),e(F,Kr),b(Ve,F,null),m(t,oo,p),m(t,Z,p),e(Z,pe),e(pe,Ct),b(Oe,Ct,null),e(Z,Gr),e(Z,Mt),e(Mt,Yr),m(t,ro,p),m(t,C,p),b(We,C,null),e(C,Jr),e(C,St),e(St,Xr),e(C,Zr),e(C,Re),e(Re,Qr),e(Re,Be),e(Be,ea),e(Re,ta),e(C,oa),e(C,j),b(Ue,j,null),e(j,ra),e(j,Q),e(Q,aa),e(Q,at),e(at,na),e(Q,sa),e(Q,qt),e(qt,ia),e(Q,la),e(j,da),b(he,j,null),e(j,ca),e(j,At),e(At,pa),e(j,ha),b(He,j,null),ao=!0},p(t,[p]){const Ke={};p&2&&(Ke.$$scope={dirty:p,ctx:t}),se.$set(Ke);const Lt={};p&2&&(Lt.$$scope={dirty:p,ctx:t}),le.$set(Lt);const Nt={};p&2&&(Nt.$$scope={dirty:p,ctx:t}),ce.$set(Nt);const Vt={};p&2&&(Vt.$$scope={dirty:p,ctx:t}),he.$set(Vt)},i(t){ao||(w(g.$$.fragment,t),w(ge.$$.fragment,t),w(we.$$.fragment,t),w(Pe.$$.fragment,t),w(De.$$.fragment,t),w($e.$$.fragment,t),w(xe.$$.fragment,t),w(ke.$$.fragment,t),w(se.$$.fragment,t),w(Fe.$$.fragment,t),w(je.$$.fragment,t),w(Ce.$$.fragment,t),w(le.$$.fragment,t),w(Me.$$.fragment,t),w(Se.$$.fragment,t),w(qe.$$.fragment,t),w(Ne.$$.fragment,t),w(ce.$$.fragment,t),w(Ve.$$.fragment,t),w(Oe.$$.fragment,t),w(We.$$.fragment,t),w(Ue.$$.fragment,t),w(he.$$.fragment,t),w(He.$$.fragment,t),ao=!0)},o(t){P(g.$$.fragment,t),P(ge.$$.fragment,t),P(we.$$.fragment,t),P(Pe.$$.fragment,t),P(De.$$.fragment,t),P($e.$$.fragment,t),P(xe.$$.fragment,t),P(ke.$$.fragment,t),P(se.$$.fragment,t),P(Fe.$$.fragment,t),P(je.$$.fragment,t),P(Ce.$$.fragment,t),P(le.$$.fragment,t),P(Me.$$.fragment,t),P(Se.$$.fragment,t),P(qe.$$.fragment,t),P(Ne.$$.fragment,t),P(ce.$$.fragment,t),P(Ve.$$.fragment,t),P(Oe.$$.fragment,t),P(We.$$.fragment,t),P(Ue.$$.fragment,t),P(he.$$.fragment,t),P(He.$$.fragment,t),ao=!1},d(t){o(h),t&&o(D),t&&o(u),y(g),t&&o(Ot),t&&o(R),y(ge),t&&o(Wt),t&&o(q),t&&o(Rt),t&&o(Je),t&&o(Bt),t&&o(Xe),t&&o(Ut),t&&o(oe),t&&o(Ht),t&&o(re),t&&o(Kt),t&&o(A),t&&o(Gt),t&&o(B),y(we),t&&o(Yt),t&&o(x),y(Pe),y(De),t&&o(Jt),t&&o(K),y($e),t&&o(Xt),t&&o(z),y(xe),y(ke),y(se),t&&o(Zt),t&&o(G),y(Fe),t&&o(Qt),t&&o(M),y(je),y(Ce),y(le),y(Me),t&&o(eo),t&&o(J),y(Se),t&&o(to),t&&o(I),y(qe),y(Ne),y(ce),y(Ve),t&&o(oo),t&&o(Z),y(Oe),t&&o(ro),t&&o(C),y(We),y(Ue),y(he),y(He)}}}const bn={local:"dpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.DPTConfig",title:"DPTConfig"},{local:"transformers.DPTFeatureExtractor",title:"DPTFeatureExtractor"},{local:"transformers.DPTModel",title:"DPTModel"},{local:"transformers.DPTForDepthEstimation",title:"DPTForDepthEstimation"},{local:"transformers.DPTForSemanticSegmentation",title:"DPTForSemanticSegmentation"}],title:"DPT"};function wn(S){return un(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class En extends dn{constructor(h){super();cn(this,h,wn,Tn,pn,{})}}export{En as default,bn as metadata};
