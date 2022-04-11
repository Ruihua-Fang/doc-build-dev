import{S as Ma,i as za,s as Ca,e as r,k as c,w,t as s,M as Aa,c as a,d as o,m as p,a as n,x as P,h as i,b as l,N as Da,F as t,g as m,y as b,q as y,o as L,B as $,v as qa}from"../../chunks/vendor-6b77c823.js";import{T as ao}from"../../chunks/Tip-39098574.js";import{D as Ae}from"../../chunks/Docstring-af1d0ae0.js";import{C as Rr}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as st}from"../../chunks/IconCopyLink-7a11ce68.js";function Sa(I){let h,v,f,u,N;return{c(){h=r("p"),v=s(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),f=r("a"),u=s("Github Issue"),N=s("."),this.h()},l(g){h=a(g,"P",{});var _=n(h);v=i(_,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),f=a(_,"A",{href:!0,rel:!0});var x=n(f);u=i(x,"Github Issue"),x.forEach(o),N=i(_,"."),_.forEach(o),this.h()},h(){l(f,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),l(f,"rel","nofollow")},m(g,_){m(g,h,_),t(h,v),t(h,f),t(f,u),t(h,N)},d(g){g&&o(h)}}}function Oa(I){let h,v;return{c(){h=r("p"),v=s(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(f){h=a(f,"P",{});var u=n(h);v=i(u,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),u.forEach(o)},m(f,u){m(f,h,u),t(h,v)},d(f){f&&o(h)}}}function Ba(I){let h,v,f,u,N;return{c(){h=r("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r("code"),u=s("Module"),N=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){h=a(g,"P",{});var _=n(h);v=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(_,"CODE",{});var x=n(f);u=i(x,"Module"),x.forEach(o),N=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(g,_){m(g,h,_),t(h,v),t(h,f),t(f,u),t(h,N)},d(g){g&&o(h)}}}function Ra(I){let h,v,f,u,N;return{c(){h=r("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r("code"),u=s("Module"),N=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){h=a(g,"P",{});var _=n(h);v=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(_,"CODE",{});var x=n(f);u=i(x,"Module"),x.forEach(o),N=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(g,_){m(g,h,_),t(h,v),t(h,f),t(f,u),t(h,N)},d(g){g&&o(h)}}}function Ua(I){let h,v,f,u,N,g,_,x,no,Gt,Y,Tt,S,X,it,de,so,lt,io,kt,M,lo,ce,co,po,De,ho,mo,Ft,qe,fo,jt,Se,dt,uo,It,Oe,go,Mt,Z,O,_o,Be,vo,wo,pe,Po,bo,yo,he,Lo,Re,$o,No,zt,Q,Ur,Ct,ee,Eo,me,xo,Go,At,z,To,fe,ko,Fo,ue,jo,Io,Dt,B,te,ct,ge,Mo,pt,zo,qt,E,_e,Co,R,Ao,Ue,Do,qo,ve,So,Oo,Bo,U,Ro,We,Uo,Wo,He,Ho,Vo,Jo,ht,Ko,Yo,we,St,W,oe,mt,Pe,Xo,ft,Zo,Ot,k,be,Qo,ut,er,tr,ye,or,Ve,rr,ar,nr,C,Le,sr,gt,ir,lr,re,Bt,H,ae,_t,$e,dr,vt,cr,Rt,F,Ne,pr,Ee,hr,xe,mr,fr,ur,G,Ge,gr,V,_r,Je,vr,wr,wt,Pr,br,yr,ne,Lr,Pt,$r,Nr,Te,Ut,J,se,bt,ke,Er,yt,xr,Wt,j,Fe,Gr,je,Tr,Ie,kr,Fr,jr,T,Me,Ir,K,Mr,Ke,zr,Cr,Lt,Ar,Dr,qr,ie,Sr,$t,Or,Br,ze,Ht;return g=new st({}),Y=new ao({props:{$$slots:{default:[Sa]},$$scope:{ctx:I}}}),de=new st({}),ge=new st({}),_e=new Ae({props:{name:"class transformers.GLPNConfig",anchor:"transformers.GLPNConfig",parameters:[{name:"num_channels",val:" = 3"},{name:"num_encoder_blocks",val:" = 4"},{name:"depths",val:" = [2, 2, 2, 2]"},{name:"sr_ratios",val:" = [8, 4, 2, 1]"},{name:"hidden_sizes",val:" = [32, 64, 160, 256]"},{name:"patch_sizes",val:" = [7, 3, 3, 3]"},{name:"strides",val:" = [4, 2, 2, 2]"},{name:"num_attention_heads",val:" = [1, 2, 5, 8]"},{name:"mlp_ratios",val:" = [4, 4, 4, 4]"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"drop_path_rate",val:" = 0.1"},{name:"layer_norm_eps",val:" = 1e-06"},{name:"is_encoder_decoder",val:" = False"},{name:"decoder_hidden_size",val:" = 64"},{name:"max_depth",val:" = 10"},{name:"head_in_index",val:" = -1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16709/src/transformers/models/glpn/configuration_glpn.py#L29",parametersDescription:[{anchor:"transformers.GLPNConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.GLPNConfig.num_encoder_blocks",description:`<strong>num_encoder_blocks</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of encoder blocks (i.e. stages in the Mix Transformer encoder).`,name:"num_encoder_blocks"},{anchor:"transformers.GLPNConfig.depths",description:`<strong>depths</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[2, 2, 2, 2]</code>) &#x2014;
The number of layers in each encoder block.`,name:"depths"},{anchor:"transformers.GLPNConfig.sr_ratios",description:`<strong>sr_ratios</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[8, 4, 2, 1]</code>) &#x2014;
Sequence reduction ratios in each encoder block.`,name:"sr_ratios"},{anchor:"transformers.GLPNConfig.hidden_sizes",description:`<strong>hidden_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[32, 64, 160, 256]</code>) &#x2014;
Dimension of each of the encoder blocks.`,name:"hidden_sizes"},{anchor:"transformers.GLPNConfig.patch_sizes",description:`<strong>patch_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[7, 3, 3, 3]</code>) &#x2014;
Patch size before each encoder block.`,name:"patch_sizes"},{anchor:"transformers.GLPNConfig.strides",description:`<strong>strides</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[4, 2, 2, 2]</code>) &#x2014;
Stride before each encoder block.`,name:"strides"},{anchor:"transformers.GLPNConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[1, 2, 4, 8]</code>) &#x2014;
Number of attention heads for each attention layer in each block of the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.GLPNConfig.mlp_ratios",description:`<strong>mlp_ratios</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[4, 4, 4, 4]</code>) &#x2014;
Ratio of the size of the hidden layer compared to the size of the input layer of the Mix FFNs in the
encoder blocks.`,name:"mlp_ratios"},{anchor:"transformers.GLPNConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.GLPNConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.GLPNConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.GLPNConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GLPNConfig.drop_path_rate",description:`<strong>drop_path_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for stochastic depth, used in the blocks of the Transformer encoder.`,name:"drop_path_rate"},{anchor:"transformers.GLPNConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-6) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.GLPNConfig.decoder_hidden_size",description:`<strong>decoder_hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The dimension of the decoder.`,name:"decoder_hidden_size"},{anchor:"transformers.GLPNConfig.max_depth",description:`<strong>max_depth</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
The maximum depth of the decoder.`,name:"max_depth"},{anchor:"transformers.GLPNConfig.head_in_index",description:`<strong>head_in_index</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The index of the features to use in the head.`,name:"head_in_index"}]}}),we=new Rr({props:{code:`from transformers import GLPNModel, GLPNConfig

# Initializing a GLPN kaist/gdpdepth-kitti style configuration
configuration = GLPNConfig()

# Initializing a model from the kaist/gdpdepth-kitti style configuration
model = GLPNModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GLPNModel, GLPNConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GLPN kaist/gdpdepth-kitti style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GLPNConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the kaist/gdpdepth-kitti style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GLPNModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Pe=new st({}),be=new Ae({props:{name:"class transformers.GLPNFeatureExtractor",anchor:"transformers.GLPNFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size_divisor",val:" = 32"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_rescale",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16709/src/transformers/models/glpn/feature_extraction_glpn.py#L30",parametersDescription:[{anchor:"transformers.GLPNFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input based on certain <code>size_divisor</code>.`,name:"do_resize"},{anchor:"transformers.GLPNFeatureExtractor.size_divisor",description:`<strong>size_divisor</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 32) &#x2014;
Make sure the input is divisible by this value. Only has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"size_divisor"},{anchor:"transformers.GLPNFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.GLPNFeatureExtractor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to apply the scaling factor (to make pixel values floats between 0. and 1.).`,name:"do_rescale"}]}}),Le=new Ae({props:{name:"__call__",anchor:"transformers.GLPNFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16709/src/transformers/models/glpn/feature_extraction_glpn.py#L70",parametersDescription:[{anchor:"transformers.GLPNFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.GLPNFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_16709/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16709/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16709/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),re=new ao({props:{warning:!0,$$slots:{default:[Oa]},$$scope:{ctx:I}}}),$e=new st({}),Ne=new Ae({props:{name:"class transformers.GLPNModel",anchor:"transformers.GLPNModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16709/src/transformers/models/glpn/modeling_glpn.py#L478",parametersDescription:[{anchor:"transformers.GLPNModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16709/en/model_doc/glpn#transformers.GLPNConfig">GLPNConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16709/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ge=new Ae({props:{name:"forward",anchor:"transformers.GLPNModel.forward",parameters:[{name:"pixel_values",val:": FloatTensor"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16709/src/transformers/models/glpn/modeling_glpn.py#L498",parametersDescription:[{anchor:"transformers.GLPNModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_16709/en/model_doc/glpn#transformers.GLPNFeatureExtractor">GLPNFeatureExtractor</a>. See <a href="/docs/transformers/pr_16709/en/model_doc/glpn#transformers.GLPNFeatureExtractor.__call__">GLPNFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.GLPNModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GLPNModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GLPNModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16709/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16709/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16709/en/model_doc/glpn#transformers.GLPNConfig"
>GLPNConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_16709/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ne=new ao({props:{$$slots:{default:[Ba]},$$scope:{ctx:I}}}),Te=new Rr({props:{code:`from transformers import GLPNFeatureExtractor, GLPNModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = GLPNFeatureExtractor.from_pretrained("vinvino02/glpn-kitti")
model = GLPNModel.from_pretrained("vinvino02/glpn-kitti")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GLPNFeatureExtractor, GLPNModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = GLPNFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;vinvino02/glpn-kitti&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GLPNModel.from_pretrained(<span class="hljs-string">&quot;vinvino02/glpn-kitti&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">512</span>, <span class="hljs-number">15</span>, <span class="hljs-number">20</span>]`}}),ke=new st({}),Fe=new Ae({props:{name:"class transformers.GLPNForDepthEstimation",anchor:"transformers.GLPNForDepthEstimation",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16709/src/transformers/models/glpn/modeling_glpn.py#L680",parametersDescription:[{anchor:"transformers.GLPNForDepthEstimation.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16709/en/model_doc/glpn#transformers.GLPNConfig">GLPNConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16709/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Me=new Ae({props:{name:"forward",anchor:"transformers.GLPNForDepthEstimation.forward",parameters:[{name:"pixel_values",val:""},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16709/src/transformers/models/glpn/modeling_glpn.py#L691",parametersDescription:[{anchor:"transformers.GLPNForDepthEstimation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/pr_16709/en/model_doc/glpn#transformers.GLPNFeatureExtractor">GLPNFeatureExtractor</a>. See <a href="/docs/transformers/pr_16709/en/model_doc/glpn#transformers.GLPNFeatureExtractor.__call__">GLPNFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.GLPNForDepthEstimation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GLPNForDepthEstimation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GLPNForDepthEstimation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16709/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GLPNForDepthEstimation.forward.labels",description:`<strong>labels</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth depth estimation maps for computing the loss.`,name:"labels"}],returnDescription:`
<p>A <code>transformers.modeling_outputs.DepthEstimatorOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16709/en/model_doc/glpn#transformers.GLPNConfig"
>GLPNConfig</a>) and inputs.</p>
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
`}}),ie=new ao({props:{$$slots:{default:[Ra]},$$scope:{ctx:I}}}),ze=new Rr({props:{code:`from transformers import GLPNFeatureExtractor, GLPNForDepthEstimation
import torch
import numpy as np
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = GLPNFeatureExtractor.from_pretrained("vinvino02/glpn-kitti")
model = GLPNForDepthEstimation.from_pretrained("vinvino02/glpn-kitti")

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
depth = Image.fromarray(formatted)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GLPNFeatureExtractor, GLPNForDepthEstimation
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = GLPNFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;vinvino02/glpn-kitti&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GLPNForDepthEstimation.from_pretrained(<span class="hljs-string">&quot;vinvino02/glpn-kitti&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>depth = Image.fromarray(formatted)`}}),{c(){h=r("meta"),v=c(),f=r("h1"),u=r("a"),N=r("span"),w(g.$$.fragment),_=c(),x=r("span"),no=s("GLPN"),Gt=c(),w(Y.$$.fragment),Tt=c(),S=r("h2"),X=r("a"),it=r("span"),w(de.$$.fragment),so=c(),lt=r("span"),io=s("Overview"),kt=c(),M=r("p"),lo=s("The GLPN model was proposed in "),ce=r("a"),co=s("Global-Local Path Networks for Monocular Depth Estimation with Vertical CutDepth"),po=s(`  by Doyeon Kim, Woonghyun Ga, Pyungwhan Ahn, Donggyu Joo, Sehwan Chun, Junmo Kim.
GLPN combines `),De=r("a"),ho=s("SegFormer"),mo=s(`\u2019s hierarchical mix-Transformer with a lightweight decoder for monocular depth estimation. The proposed decoder shows better performance than the previously proposed decoders, with considerably
less computational complexity.`),Ft=c(),qe=r("p"),fo=s("The abstract from the paper is the following:"),jt=c(),Se=r("p"),dt=r("em"),uo=s("Depth estimation from a single image is an important task that can be applied to various fields in computer vision, and has grown rapidly with the development of convolutional neural networks. In this paper, we propose a novel structure and training strategy for monocular depth estimation to further improve the prediction accuracy of the network. We deploy a hierarchical transformer encoder to capture and convey the global context, and design a lightweight yet powerful decoder to generate an estimated depth map while considering local connectivity. By constructing connected paths between multi-scale local features and the global decoding stream with our proposed selective feature fusion module, the network can integrate both representations and recover fine details. In addition, the proposed decoder shows better performance than the previously proposed decoders, with considerably less computational complexity. Furthermore, we improve the depth-specific augmentation method by utilizing an important observation in depth estimation to enhance the model. Our network achieves state-of-the-art performance over the challenging depth dataset NYU Depth V2. Extensive experiments have been conducted to validate and show the effectiveness of the proposed approach. Finally, our model shows better generalisation ability and robustness than other comparative models."),It=c(),Oe=r("p"),go=s("Tips:"),Mt=c(),Z=r("ul"),O=r("li"),_o=s("A notebook illustrating inference with "),Be=r("a"),vo=s("GLPNForDepthEstimation"),wo=s(" can be found "),pe=r("a"),Po=s("here"),bo=s("."),yo=c(),he=r("li"),Lo=s("One can use "),Re=r("a"),$o=s("GLPNFeatureExtractor"),No=s(" to prepare images for the model."),zt=c(),Q=r("img"),Ct=c(),ee=r("small"),Eo=s("Summary of the approach. Taken from the "),me=r("a"),xo=s("original paper"),Go=s("."),At=c(),z=r("p"),To=s("This model was contributed by "),fe=r("a"),ko=s("nielsr"),Fo=s(". The original code can be found "),ue=r("a"),jo=s("here"),Io=s("."),Dt=c(),B=r("h2"),te=r("a"),ct=r("span"),w(ge.$$.fragment),Mo=c(),pt=r("span"),zo=s("GLPNConfig"),qt=c(),E=r("div"),w(_e.$$.fragment),Co=c(),R=r("p"),Ao=s("This is the configuration class to store the configuration of a "),Ue=r("a"),Do=s("GLPNModel"),qo=s(`. It is used to instantiate an GLPN
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the GLPN
`),ve=r("a"),So=s("kaist/gdpdepth-kitti"),Oo=s(" architecture."),Bo=c(),U=r("p"),Ro=s("Configuration objects inherit from "),We=r("a"),Uo=s("PretrainedConfig"),Wo=s(` and can be used to control the model outputs. Read the
documentation from `),He=r("a"),Ho=s("PretrainedConfig"),Vo=s(" for more information."),Jo=c(),ht=r("p"),Ko=s("Example:"),Yo=c(),w(we.$$.fragment),St=c(),W=r("h2"),oe=r("a"),mt=r("span"),w(Pe.$$.fragment),Xo=c(),ft=r("span"),Zo=s("GLPNFeatureExtractor"),Ot=c(),k=r("div"),w(be.$$.fragment),Qo=c(),ut=r("p"),er=s("Constructs a GLPN feature extractor."),tr=c(),ye=r("p"),or=s("This feature extractor inherits from "),Ve=r("a"),rr=s("FeatureExtractionMixin"),ar=s(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),nr=c(),C=r("div"),w(Le.$$.fragment),sr=c(),gt=r("p"),ir=s("Main method to prepare for the model one or several image(s)."),lr=c(),w(re.$$.fragment),Bt=c(),H=r("h2"),ae=r("a"),_t=r("span"),w($e.$$.fragment),dr=c(),vt=r("span"),cr=s("GLPNModel"),Rt=c(),F=r("div"),w(Ne.$$.fragment),pr=c(),Ee=r("p"),hr=s(`The bare GLPN encoder (Mix-Transformer) outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),xe=r("a"),mr=s("torch.nn.Module"),fr=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ur=c(),G=r("div"),w(Ge.$$.fragment),gr=c(),V=r("p"),_r=s("The "),Je=r("a"),vr=s("GLPNModel"),wr=s(" forward method, overrides the "),wt=r("code"),Pr=s("__call__"),br=s(" special method."),yr=c(),w(ne.$$.fragment),Lr=c(),Pt=r("p"),$r=s("Example:"),Nr=c(),w(Te.$$.fragment),Ut=c(),J=r("h2"),se=r("a"),bt=r("span"),w(ke.$$.fragment),Er=c(),yt=r("span"),xr=s("GLPNForDepthEstimation"),Wt=c(),j=r("div"),w(Fe.$$.fragment),Gr=c(),je=r("p"),Tr=s(`GLPN Model transformer with a lightweight depth estimation head on top e.g. for KITTI, NYUv2.
This model is a PyTorch `),Ie=r("a"),kr=s("torch.nn.Module"),Fr=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jr=c(),T=r("div"),w(Me.$$.fragment),Ir=c(),K=r("p"),Mr=s("The "),Ke=r("a"),zr=s("GLPNForDepthEstimation"),Cr=s(" forward method, overrides the "),Lt=r("code"),Ar=s("__call__"),Dr=s(" special method."),qr=c(),w(ie.$$.fragment),Sr=c(),$t=r("p"),Or=s("Examples:"),Br=c(),w(ze.$$.fragment),this.h()},l(e){const d=Aa('[data-svelte="svelte-1phssyn"]',document.head);h=a(d,"META",{name:!0,content:!0}),d.forEach(o),v=p(e),f=a(e,"H1",{class:!0});var Ce=n(f);u=a(Ce,"A",{id:!0,class:!0,href:!0});var Nt=n(u);N=a(Nt,"SPAN",{});var Et=n(N);P(g.$$.fragment,Et),Et.forEach(o),Nt.forEach(o),_=p(Ce),x=a(Ce,"SPAN",{});var xt=n(x);no=i(xt,"GLPN"),xt.forEach(o),Ce.forEach(o),Gt=p(e),P(Y.$$.fragment,e),Tt=p(e),S=a(e,"H2",{class:!0});var Vt=n(S);X=a(Vt,"A",{id:!0,class:!0,href:!0});var Wr=n(X);it=a(Wr,"SPAN",{});var Hr=n(it);P(de.$$.fragment,Hr),Hr.forEach(o),Wr.forEach(o),so=p(Vt),lt=a(Vt,"SPAN",{});var Vr=n(lt);io=i(Vr,"Overview"),Vr.forEach(o),Vt.forEach(o),kt=p(e),M=a(e,"P",{});var Ye=n(M);lo=i(Ye,"The GLPN model was proposed in "),ce=a(Ye,"A",{href:!0,rel:!0});var Jr=n(ce);co=i(Jr,"Global-Local Path Networks for Monocular Depth Estimation with Vertical CutDepth"),Jr.forEach(o),po=i(Ye,`  by Doyeon Kim, Woonghyun Ga, Pyungwhan Ahn, Donggyu Joo, Sehwan Chun, Junmo Kim.
GLPN combines `),De=a(Ye,"A",{href:!0});var Kr=n(De);ho=i(Kr,"SegFormer"),Kr.forEach(o),mo=i(Ye,`\u2019s hierarchical mix-Transformer with a lightweight decoder for monocular depth estimation. The proposed decoder shows better performance than the previously proposed decoders, with considerably
less computational complexity.`),Ye.forEach(o),Ft=p(e),qe=a(e,"P",{});var Yr=n(qe);fo=i(Yr,"The abstract from the paper is the following:"),Yr.forEach(o),jt=p(e),Se=a(e,"P",{});var Xr=n(Se);dt=a(Xr,"EM",{});var Zr=n(dt);uo=i(Zr,"Depth estimation from a single image is an important task that can be applied to various fields in computer vision, and has grown rapidly with the development of convolutional neural networks. In this paper, we propose a novel structure and training strategy for monocular depth estimation to further improve the prediction accuracy of the network. We deploy a hierarchical transformer encoder to capture and convey the global context, and design a lightweight yet powerful decoder to generate an estimated depth map while considering local connectivity. By constructing connected paths between multi-scale local features and the global decoding stream with our proposed selective feature fusion module, the network can integrate both representations and recover fine details. In addition, the proposed decoder shows better performance than the previously proposed decoders, with considerably less computational complexity. Furthermore, we improve the depth-specific augmentation method by utilizing an important observation in depth estimation to enhance the model. Our network achieves state-of-the-art performance over the challenging depth dataset NYU Depth V2. Extensive experiments have been conducted to validate and show the effectiveness of the proposed approach. Finally, our model shows better generalisation ability and robustness than other comparative models."),Zr.forEach(o),Xr.forEach(o),It=p(e),Oe=a(e,"P",{});var Qr=n(Oe);go=i(Qr,"Tips:"),Qr.forEach(o),Mt=p(e),Z=a(e,"UL",{});var Jt=n(Z);O=a(Jt,"LI",{});var Xe=n(O);_o=i(Xe,"A notebook illustrating inference with "),Be=a(Xe,"A",{href:!0});var ea=n(Be);vo=i(ea,"GLPNForDepthEstimation"),ea.forEach(o),wo=i(Xe," can be found "),pe=a(Xe,"A",{href:!0,rel:!0});var ta=n(pe);Po=i(ta,"here"),ta.forEach(o),bo=i(Xe,"."),Xe.forEach(o),yo=p(Jt),he=a(Jt,"LI",{});var Kt=n(he);Lo=i(Kt,"One can use "),Re=a(Kt,"A",{href:!0});var oa=n(Re);$o=i(oa,"GLPNFeatureExtractor"),oa.forEach(o),No=i(Kt," to prepare images for the model."),Kt.forEach(o),Jt.forEach(o),zt=p(e),Q=a(e,"IMG",{src:!0,alt:!0,width:!0}),Ct=p(e),ee=a(e,"SMALL",{});var Yt=n(ee);Eo=i(Yt,"Summary of the approach. Taken from the "),me=a(Yt,"A",{href:!0,target:!0});var ra=n(me);xo=i(ra,"original paper"),ra.forEach(o),Go=i(Yt,"."),Yt.forEach(o),At=p(e),z=a(e,"P",{});var Ze=n(z);To=i(Ze,"This model was contributed by "),fe=a(Ze,"A",{href:!0,rel:!0});var aa=n(fe);ko=i(aa,"nielsr"),aa.forEach(o),Fo=i(Ze,". The original code can be found "),ue=a(Ze,"A",{href:!0,rel:!0});var na=n(ue);jo=i(na,"here"),na.forEach(o),Io=i(Ze,"."),Ze.forEach(o),Dt=p(e),B=a(e,"H2",{class:!0});var Xt=n(B);te=a(Xt,"A",{id:!0,class:!0,href:!0});var sa=n(te);ct=a(sa,"SPAN",{});var ia=n(ct);P(ge.$$.fragment,ia),ia.forEach(o),sa.forEach(o),Mo=p(Xt),pt=a(Xt,"SPAN",{});var la=n(pt);zo=i(la,"GLPNConfig"),la.forEach(o),Xt.forEach(o),qt=p(e),E=a(e,"DIV",{class:!0});var A=n(E);P(_e.$$.fragment,A),Co=p(A),R=a(A,"P",{});var Qe=n(R);Ao=i(Qe,"This is the configuration class to store the configuration of a "),Ue=a(Qe,"A",{href:!0});var da=n(Ue);Do=i(da,"GLPNModel"),da.forEach(o),qo=i(Qe,`. It is used to instantiate an GLPN
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the GLPN
`),ve=a(Qe,"A",{href:!0,rel:!0});var ca=n(ve);So=i(ca,"kaist/gdpdepth-kitti"),ca.forEach(o),Oo=i(Qe," architecture."),Qe.forEach(o),Bo=p(A),U=a(A,"P",{});var et=n(U);Ro=i(et,"Configuration objects inherit from "),We=a(et,"A",{href:!0});var pa=n(We);Uo=i(pa,"PretrainedConfig"),pa.forEach(o),Wo=i(et,` and can be used to control the model outputs. Read the
documentation from `),He=a(et,"A",{href:!0});var ha=n(He);Ho=i(ha,"PretrainedConfig"),ha.forEach(o),Vo=i(et," for more information."),et.forEach(o),Jo=p(A),ht=a(A,"P",{});var ma=n(ht);Ko=i(ma,"Example:"),ma.forEach(o),Yo=p(A),P(we.$$.fragment,A),A.forEach(o),St=p(e),W=a(e,"H2",{class:!0});var Zt=n(W);oe=a(Zt,"A",{id:!0,class:!0,href:!0});var fa=n(oe);mt=a(fa,"SPAN",{});var ua=n(mt);P(Pe.$$.fragment,ua),ua.forEach(o),fa.forEach(o),Xo=p(Zt),ft=a(Zt,"SPAN",{});var ga=n(ft);Zo=i(ga,"GLPNFeatureExtractor"),ga.forEach(o),Zt.forEach(o),Ot=p(e),k=a(e,"DIV",{class:!0});var le=n(k);P(be.$$.fragment,le),Qo=p(le),ut=a(le,"P",{});var _a=n(ut);er=i(_a,"Constructs a GLPN feature extractor."),_a.forEach(o),tr=p(le),ye=a(le,"P",{});var Qt=n(ye);or=i(Qt,"This feature extractor inherits from "),Ve=a(Qt,"A",{href:!0});var va=n(Ve);rr=i(va,"FeatureExtractionMixin"),va.forEach(o),ar=i(Qt,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Qt.forEach(o),nr=p(le),C=a(le,"DIV",{class:!0});var tt=n(C);P(Le.$$.fragment,tt),sr=p(tt),gt=a(tt,"P",{});var wa=n(gt);ir=i(wa,"Main method to prepare for the model one or several image(s)."),wa.forEach(o),lr=p(tt),P(re.$$.fragment,tt),tt.forEach(o),le.forEach(o),Bt=p(e),H=a(e,"H2",{class:!0});var eo=n(H);ae=a(eo,"A",{id:!0,class:!0,href:!0});var Pa=n(ae);_t=a(Pa,"SPAN",{});var ba=n(_t);P($e.$$.fragment,ba),ba.forEach(o),Pa.forEach(o),dr=p(eo),vt=a(eo,"SPAN",{});var ya=n(vt);cr=i(ya,"GLPNModel"),ya.forEach(o),eo.forEach(o),Rt=p(e),F=a(e,"DIV",{class:!0});var ot=n(F);P(Ne.$$.fragment,ot),pr=p(ot),Ee=a(ot,"P",{});var to=n(Ee);hr=i(to,`The bare GLPN encoder (Mix-Transformer) outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),xe=a(to,"A",{href:!0,rel:!0});var La=n(xe);mr=i(La,"torch.nn.Module"),La.forEach(o),fr=i(to,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),to.forEach(o),ur=p(ot),G=a(ot,"DIV",{class:!0});var D=n(G);P(Ge.$$.fragment,D),gr=p(D),V=a(D,"P",{});var rt=n(V);_r=i(rt,"The "),Je=a(rt,"A",{href:!0});var $a=n(Je);vr=i($a,"GLPNModel"),$a.forEach(o),wr=i(rt," forward method, overrides the "),wt=a(rt,"CODE",{});var Na=n(wt);Pr=i(Na,"__call__"),Na.forEach(o),br=i(rt," special method."),rt.forEach(o),yr=p(D),P(ne.$$.fragment,D),Lr=p(D),Pt=a(D,"P",{});var Ea=n(Pt);$r=i(Ea,"Example:"),Ea.forEach(o),Nr=p(D),P(Te.$$.fragment,D),D.forEach(o),ot.forEach(o),Ut=p(e),J=a(e,"H2",{class:!0});var oo=n(J);se=a(oo,"A",{id:!0,class:!0,href:!0});var xa=n(se);bt=a(xa,"SPAN",{});var Ga=n(bt);P(ke.$$.fragment,Ga),Ga.forEach(o),xa.forEach(o),Er=p(oo),yt=a(oo,"SPAN",{});var Ta=n(yt);xr=i(Ta,"GLPNForDepthEstimation"),Ta.forEach(o),oo.forEach(o),Wt=p(e),j=a(e,"DIV",{class:!0});var at=n(j);P(Fe.$$.fragment,at),Gr=p(at),je=a(at,"P",{});var ro=n(je);Tr=i(ro,`GLPN Model transformer with a lightweight depth estimation head on top e.g. for KITTI, NYUv2.
This model is a PyTorch `),Ie=a(ro,"A",{href:!0,rel:!0});var ka=n(Ie);kr=i(ka,"torch.nn.Module"),ka.forEach(o),Fr=i(ro,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ro.forEach(o),jr=p(at),T=a(at,"DIV",{class:!0});var q=n(T);P(Me.$$.fragment,q),Ir=p(q),K=a(q,"P",{});var nt=n(K);Mr=i(nt,"The "),Ke=a(nt,"A",{href:!0});var Fa=n(Ke);zr=i(Fa,"GLPNForDepthEstimation"),Fa.forEach(o),Cr=i(nt," forward method, overrides the "),Lt=a(nt,"CODE",{});var ja=n(Lt);Ar=i(ja,"__call__"),ja.forEach(o),Dr=i(nt," special method."),nt.forEach(o),qr=p(q),P(ie.$$.fragment,q),Sr=p(q),$t=a(q,"P",{});var Ia=n($t);Or=i(Ia,"Examples:"),Ia.forEach(o),Br=p(q),P(ze.$$.fragment,q),q.forEach(o),at.forEach(o),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(Wa)),l(u,"id","glpn"),l(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(u,"href","#glpn"),l(f,"class","relative group"),l(X,"id","overview"),l(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(X,"href","#overview"),l(S,"class","relative group"),l(ce,"href","https://arxiv.org/abs/2201.07436"),l(ce,"rel","nofollow"),l(De,"href","segformer"),l(Be,"href","/docs/transformers/pr_16709/en/model_doc/glpn#transformers.GLPNForDepthEstimation"),l(pe,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/GLPN/GLPN_inference_(depth_estimation).ipynb"),l(pe,"rel","nofollow"),l(Re,"href","/docs/transformers/pr_16709/en/model_doc/glpn#transformers.GLPNFeatureExtractor"),Da(Q.src,Ur="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/glpn_architecture.jpg")||l(Q,"src",Ur),l(Q,"alt","drawing"),l(Q,"width","600"),l(me,"href","https://arxiv.org/abs/2201.07436"),l(me,"target","_blank"),l(fe,"href","https://huggingface.co/nielsr"),l(fe,"rel","nofollow"),l(ue,"href","https://github.com/vinvino02/GLPDepth"),l(ue,"rel","nofollow"),l(te,"id","transformers.GLPNConfig"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#transformers.GLPNConfig"),l(B,"class","relative group"),l(Ue,"href","/docs/transformers/pr_16709/en/model_doc/glpn#transformers.GLPNModel"),l(ve,"href","https://huggingface.co/kaist/gdpdepth-kitti"),l(ve,"rel","nofollow"),l(We,"href","/docs/transformers/pr_16709/en/main_classes/configuration#transformers.PretrainedConfig"),l(He,"href","/docs/transformers/pr_16709/en/main_classes/configuration#transformers.PretrainedConfig"),l(E,"class","docstring"),l(oe,"id","transformers.GLPNFeatureExtractor"),l(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(oe,"href","#transformers.GLPNFeatureExtractor"),l(W,"class","relative group"),l(Ve,"href","/docs/transformers/pr_16709/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),l(C,"class","docstring"),l(k,"class","docstring"),l(ae,"id","transformers.GLPNModel"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.GLPNModel"),l(H,"class","relative group"),l(xe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(xe,"rel","nofollow"),l(Je,"href","/docs/transformers/pr_16709/en/model_doc/glpn#transformers.GLPNModel"),l(G,"class","docstring"),l(F,"class","docstring"),l(se,"id","transformers.GLPNForDepthEstimation"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.GLPNForDepthEstimation"),l(J,"class","relative group"),l(Ie,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ie,"rel","nofollow"),l(Ke,"href","/docs/transformers/pr_16709/en/model_doc/glpn#transformers.GLPNForDepthEstimation"),l(T,"class","docstring"),l(j,"class","docstring")},m(e,d){t(document.head,h),m(e,v,d),m(e,f,d),t(f,u),t(u,N),b(g,N,null),t(f,_),t(f,x),t(x,no),m(e,Gt,d),b(Y,e,d),m(e,Tt,d),m(e,S,d),t(S,X),t(X,it),b(de,it,null),t(S,so),t(S,lt),t(lt,io),m(e,kt,d),m(e,M,d),t(M,lo),t(M,ce),t(ce,co),t(M,po),t(M,De),t(De,ho),t(M,mo),m(e,Ft,d),m(e,qe,d),t(qe,fo),m(e,jt,d),m(e,Se,d),t(Se,dt),t(dt,uo),m(e,It,d),m(e,Oe,d),t(Oe,go),m(e,Mt,d),m(e,Z,d),t(Z,O),t(O,_o),t(O,Be),t(Be,vo),t(O,wo),t(O,pe),t(pe,Po),t(O,bo),t(Z,yo),t(Z,he),t(he,Lo),t(he,Re),t(Re,$o),t(he,No),m(e,zt,d),m(e,Q,d),m(e,Ct,d),m(e,ee,d),t(ee,Eo),t(ee,me),t(me,xo),t(ee,Go),m(e,At,d),m(e,z,d),t(z,To),t(z,fe),t(fe,ko),t(z,Fo),t(z,ue),t(ue,jo),t(z,Io),m(e,Dt,d),m(e,B,d),t(B,te),t(te,ct),b(ge,ct,null),t(B,Mo),t(B,pt),t(pt,zo),m(e,qt,d),m(e,E,d),b(_e,E,null),t(E,Co),t(E,R),t(R,Ao),t(R,Ue),t(Ue,Do),t(R,qo),t(R,ve),t(ve,So),t(R,Oo),t(E,Bo),t(E,U),t(U,Ro),t(U,We),t(We,Uo),t(U,Wo),t(U,He),t(He,Ho),t(U,Vo),t(E,Jo),t(E,ht),t(ht,Ko),t(E,Yo),b(we,E,null),m(e,St,d),m(e,W,d),t(W,oe),t(oe,mt),b(Pe,mt,null),t(W,Xo),t(W,ft),t(ft,Zo),m(e,Ot,d),m(e,k,d),b(be,k,null),t(k,Qo),t(k,ut),t(ut,er),t(k,tr),t(k,ye),t(ye,or),t(ye,Ve),t(Ve,rr),t(ye,ar),t(k,nr),t(k,C),b(Le,C,null),t(C,sr),t(C,gt),t(gt,ir),t(C,lr),b(re,C,null),m(e,Bt,d),m(e,H,d),t(H,ae),t(ae,_t),b($e,_t,null),t(H,dr),t(H,vt),t(vt,cr),m(e,Rt,d),m(e,F,d),b(Ne,F,null),t(F,pr),t(F,Ee),t(Ee,hr),t(Ee,xe),t(xe,mr),t(Ee,fr),t(F,ur),t(F,G),b(Ge,G,null),t(G,gr),t(G,V),t(V,_r),t(V,Je),t(Je,vr),t(V,wr),t(V,wt),t(wt,Pr),t(V,br),t(G,yr),b(ne,G,null),t(G,Lr),t(G,Pt),t(Pt,$r),t(G,Nr),b(Te,G,null),m(e,Ut,d),m(e,J,d),t(J,se),t(se,bt),b(ke,bt,null),t(J,Er),t(J,yt),t(yt,xr),m(e,Wt,d),m(e,j,d),b(Fe,j,null),t(j,Gr),t(j,je),t(je,Tr),t(je,Ie),t(Ie,kr),t(je,Fr),t(j,jr),t(j,T),b(Me,T,null),t(T,Ir),t(T,K),t(K,Mr),t(K,Ke),t(Ke,zr),t(K,Cr),t(K,Lt),t(Lt,Ar),t(K,Dr),t(T,qr),b(ie,T,null),t(T,Sr),t(T,$t),t($t,Or),t(T,Br),b(ze,T,null),Ht=!0},p(e,[d]){const Ce={};d&2&&(Ce.$$scope={dirty:d,ctx:e}),Y.$set(Ce);const Nt={};d&2&&(Nt.$$scope={dirty:d,ctx:e}),re.$set(Nt);const Et={};d&2&&(Et.$$scope={dirty:d,ctx:e}),ne.$set(Et);const xt={};d&2&&(xt.$$scope={dirty:d,ctx:e}),ie.$set(xt)},i(e){Ht||(y(g.$$.fragment,e),y(Y.$$.fragment,e),y(de.$$.fragment,e),y(ge.$$.fragment,e),y(_e.$$.fragment,e),y(we.$$.fragment,e),y(Pe.$$.fragment,e),y(be.$$.fragment,e),y(Le.$$.fragment,e),y(re.$$.fragment,e),y($e.$$.fragment,e),y(Ne.$$.fragment,e),y(Ge.$$.fragment,e),y(ne.$$.fragment,e),y(Te.$$.fragment,e),y(ke.$$.fragment,e),y(Fe.$$.fragment,e),y(Me.$$.fragment,e),y(ie.$$.fragment,e),y(ze.$$.fragment,e),Ht=!0)},o(e){L(g.$$.fragment,e),L(Y.$$.fragment,e),L(de.$$.fragment,e),L(ge.$$.fragment,e),L(_e.$$.fragment,e),L(we.$$.fragment,e),L(Pe.$$.fragment,e),L(be.$$.fragment,e),L(Le.$$.fragment,e),L(re.$$.fragment,e),L($e.$$.fragment,e),L(Ne.$$.fragment,e),L(Ge.$$.fragment,e),L(ne.$$.fragment,e),L(Te.$$.fragment,e),L(ke.$$.fragment,e),L(Fe.$$.fragment,e),L(Me.$$.fragment,e),L(ie.$$.fragment,e),L(ze.$$.fragment,e),Ht=!1},d(e){o(h),e&&o(v),e&&o(f),$(g),e&&o(Gt),$(Y,e),e&&o(Tt),e&&o(S),$(de),e&&o(kt),e&&o(M),e&&o(Ft),e&&o(qe),e&&o(jt),e&&o(Se),e&&o(It),e&&o(Oe),e&&o(Mt),e&&o(Z),e&&o(zt),e&&o(Q),e&&o(Ct),e&&o(ee),e&&o(At),e&&o(z),e&&o(Dt),e&&o(B),$(ge),e&&o(qt),e&&o(E),$(_e),$(we),e&&o(St),e&&o(W),$(Pe),e&&o(Ot),e&&o(k),$(be),$(Le),$(re),e&&o(Bt),e&&o(H),$($e),e&&o(Rt),e&&o(F),$(Ne),$(Ge),$(ne),$(Te),e&&o(Ut),e&&o(J),$(ke),e&&o(Wt),e&&o(j),$(Fe),$(Me),$(ie),$(ze)}}}const Wa={local:"glpn",sections:[{local:"overview",title:"Overview"},{local:"transformers.GLPNConfig",title:"GLPNConfig"},{local:"transformers.GLPNFeatureExtractor",title:"GLPNFeatureExtractor"},{local:"transformers.GLPNModel",title:"GLPNModel"},{local:"transformers.GLPNForDepthEstimation",title:"GLPNForDepthEstimation"}],title:"GLPN"};function Ha(I){return qa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Za extends Ma{constructor(h){super();za(this,h,Ha,Ua,Ca,{})}}export{Za as default,Wa as metadata};
