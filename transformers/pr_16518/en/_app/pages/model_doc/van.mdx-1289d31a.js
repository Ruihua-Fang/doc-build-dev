import{S as Uo,i as Ro,s as Bo,e as o,k as d,w,t as r,M as Ko,c as n,d as a,m as h,a as s,x as b,h as i,b as l,N as Zo,F as t,g as p,y,q as $,o as V,B as A,v as Go}from"../../chunks/vendor-6b77c823.js";import{T as Ho}from"../../chunks/Tip-39098574.js";import{D as nt}from"../../chunks/Docstring-abef54e3.js";import{C as to}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as st}from"../../chunks/IconCopyLink-7a11ce68.js";function Jo(Ee){let f,j,m,_,C;return{c(){f=o("p"),j=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=o("code"),_=r("Module"),C=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){f=n(u,"P",{});var g=s(f);j=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n(g,"CODE",{});var k=s(m);_=i(k,"Module"),k.forEach(a),C=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(a)},m(u,g){p(u,f,g),t(f,j),t(f,m),t(m,_),t(f,C)},d(u){u&&a(f)}}}function Qo(Ee){let f,j,m,_,C;return{c(){f=o("p"),j=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=o("code"),_=r("Module"),C=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){f=n(u,"P",{});var g=s(f);j=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n(g,"CODE",{});var k=s(m);_=i(k,"Module"),k.forEach(a),C=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(a)},m(u,g){p(u,f,g),t(f,j),t(f,m),t(m,_),t(f,C)},d(u){u&&a(f)}}}function Xo(Ee){let f,j,m,_,C,u,g,k,Pt,rt,q,U,We,Y,Ft,He,It,it,R,qt,ee,zt,Lt,lt,xe,Dt,ct,Ce,St,dt,Te,te,Ot,ae,Wt,Ht,ht,je,Ut,pt,ke,oe,Rt,Ue,Bt,Kt,ft,B,Zt,ne,Gt,Jt,mt,se,ao,ut,M,Qt,re,Xt,Yt,ie,ea,ta,gt,z,K,Re,le,aa,Be,oa,_t,v,ce,na,L,sa,Ne,ra,ia,de,la,ca,da,D,ha,Me,pa,fa,Pe,ma,ua,ga,Ke,_a,va,he,vt,S,Z,Ze,pe,wa,Ge,ba,wt,N,fe,ya,me,$a,ue,Va,Aa,Ea,E,ge,xa,O,Ca,Fe,Ta,ja,Je,ka,Na,Ma,G,Pa,Qe,Fa,Ia,_e,bt,W,J,Xe,ve,qa,Ye,za,yt,T,we,La,et,Da,Sa,be,Oa,ye,Wa,Ha,Ua,x,$e,Ra,H,Ba,Ie,Ka,Za,tt,Ga,Ja,Qa,Q,Xa,at,Ya,eo,Ve,$t;return u=new st({}),Y=new st({}),le=new st({}),ce=new nt({props:{name:"class transformers.VanConfig",anchor:"transformers.VanConfig",parameters:[{name:"image_size",val:" = 224"},{name:"num_channels",val:" = 3"},{name:"patch_sizes",val:" = [7, 3, 3, 3]"},{name:"strides",val:" = [4, 2, 2, 2]"},{name:"hidden_sizes",val:" = [64, 128, 320, 512]"},{name:"depths",val:" = [3, 3, 12, 3]"},{name:"mlp_ratios",val:" = [8, 8, 4, 4]"},{name:"hidden_act",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-06"},{name:"layer_scale_init_value",val:" = 0.01"},{name:"drop_path_rate",val:" = 0.0"},{name:"dropout_rate",val:" = 0.0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16518/src/transformers/models/van/configuration_van.py#L28",parametersDescription:[{anchor:"transformers.VanConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.VanConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.VanConfig.patch_sizes",description:`<strong>patch_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[7, 3, 3, 3]</code>) &#x2014;
Patch size to use in each stage&#x2019;s embedding layer.`,name:"patch_sizes"},{anchor:"transformers.VanConfig.strides",description:`<strong>strides</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[4, 2, 2, 2]</code>) &#x2014;
Stride size to use in each stage&#x2019;s embedding layer to downsample the input.`,name:"strides"},{anchor:"transformers.VanConfig.hidden_sizes",description:`<strong>hidden_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[64, 128, 320, 512]</code>) &#x2014;
Dimensionality (hidden size) at each stage.`,name:"hidden_sizes"},{anchor:"transformers.VanConfig.depths",description:`<strong>depths</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 3, 12, 3]</code>) &#x2014;
Depth (number of layers) for each stage.`,name:"depths"},{anchor:"transformers.VanConfig.mlp_ratios",description:`<strong>mlp_ratios</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[8, 8, 4, 4]</code>) &#x2014;
The expansion ratio for mlp layer at each stage.`,name:"mlp_ratios"},{anchor:"transformers.VanConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in each layer. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>,
<code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.VanConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.VanConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.VanConfig.layer_scale_init_value",description:`<strong>layer_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-2) &#x2014;
The initial value for layer scaling.`,name:"layer_scale_init_value"},{anchor:"transformers.VanConfig.drop_path_rate",description:`<strong>drop_path_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for stochastic depth.`,name:"drop_path_rate"},{anchor:"transformers.VanConfig.dropout_rate",description:`<strong>dropout_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for dropout.`,name:"dropout_rate"}]}}),he=new to({props:{code:`from transformers import VanModel, VanConfig

# Initializing a VAN van-base style configuration
configuration = VanConfig()
# Initializing a model from the van-base style configuration
model = VanModel(configuration)
# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VanModel, VanConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a VAN van-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = VanConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the van-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VanModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),pe=new st({}),fe=new nt({props:{name:"class transformers.VanModel",anchor:"transformers.VanModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16518/src/transformers/models/van/modeling_van.py#L395",parametersDescription:[{anchor:"transformers.VanModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16518/en/model_doc/van#transformers.VanConfig">VanConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16518/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ge=new nt({props:{name:"forward",anchor:"transformers.VanModel.forward",parameters:[{name:"pixel_values",val:""},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16518/src/transformers/models/van/modeling_van.py#L405",parametersDescription:[{anchor:"transformers.VanModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16518/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.VanModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all stages. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VanModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16518/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.modeling_outputs.BaseModelOutputWithPoolingAndNoAttention</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16518/en/model_doc/van#transformers.VanConfig"
>VanConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state after a pooling operation on the spatial dimensions.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, num_channels, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_outputs.BaseModelOutputWithPoolingAndNoAttention</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),G=new Ho({props:{$$slots:{default:[Jo]},$$scope:{ctx:Ee}}}),_e=new to({props:{code:`from transformers import AutoFeatureExtractor, VanModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("Visual-Attention-Network/van-base")
model = VanModel.from_pretrained("Visual-Attention-Network/van-base")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, VanModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;Visual-Attention-Network/van-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VanModel.from_pretrained(<span class="hljs-string">&quot;Visual-Attention-Network/van-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">512</span>, <span class="hljs-number">7</span>, <span class="hljs-number">7</span>]`}}),ve=new st({}),we=new nt({props:{name:"class transformers.VanForImageClassification",anchor:"transformers.VanForImageClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16518/src/transformers/models/van/modeling_van.py#L446",parametersDescription:[{anchor:"transformers.VanForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16518/en/model_doc/van#transformers.VanConfig">VanConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16518/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$e=new nt({props:{name:"forward",anchor:"transformers.VanForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"labels",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16518/src/transformers/models/van/modeling_van.py#L458",parametersDescription:[{anchor:"transformers.VanForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16518/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.VanForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all stages. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VanForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16518/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VanForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <code>transformers.modeling_outputs.ImageClassifierOutputWithNoAttention</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16518/en/model_doc/van#transformers.VanConfig"
>VanConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each stage) of shape <code>(batch_size, num_channels, height, width)</code>. Hidden-states (also
called feature maps) of the model at the output of each stage.</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_outputs.ImageClassifierOutputWithNoAttention</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),Q=new Ho({props:{$$slots:{default:[Qo]},$$scope:{ctx:Ee}}}),Ve=new to({props:{code:`from transformers import AutoFeatureExtractor, VanForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("Visual-Attention-Network/van-base")
model = VanForImageClassification.from_pretrained("Visual-Attention-Network/van-base")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, VanForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;Visual-Attention-Network/van-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VanForImageClassification.from_pretrained(<span class="hljs-string">&quot;Visual-Attention-Network/van-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`}}),{c(){f=o("meta"),j=d(),m=o("h1"),_=o("a"),C=o("span"),w(u.$$.fragment),g=d(),k=o("span"),Pt=r("VAN"),rt=d(),q=o("h2"),U=o("a"),We=o("span"),w(Y.$$.fragment),Ft=d(),He=o("span"),It=r("Overview"),it=d(),R=o("p"),qt=r("The VAN model was proposed in "),ee=o("a"),zt=r("Visual Attention Network"),Lt=r(" by Meng-Hao Guo, Cheng-Ze Lu, Zheng-Ning Liu, Ming-Ming Cheng, Shi-Min Hu."),lt=d(),xe=o("p"),Dt=r("This paper introduces a new attention layer based on convolution operations able to capture both local and distant relationships. This is done by combining normal and large kernel convolution layers. The latter uses a dilated convolution to capture distant correlations."),ct=d(),Ce=o("p"),St=r("The abstract from the paper is the following:"),dt=d(),Te=o("p"),te=o("em"),Ot=r("While originally designed for natural language processing tasks, the self-attention mechanism has recently taken various computer vision areas by storm. However, the 2D nature of images brings three challenges for applying self-attention in computer vision. (1) Treating images as 1D sequences neglects their 2D structures. (2) The quadratic complexity is too expensive for high-resolution images. (3) It only captures spatial adaptability but ignores channel adaptability. In this paper, we propose a novel large kernel attention (LKA) module to enable self-adaptive and long-range correlations in self-attention while avoiding the above issues. We further introduce a novel neural network based on LKA, namely Visual Attention Network (VAN). While extremely simple, VAN outperforms the state-of-the-art vision transformers and convolutional neural networks with a large margin in extensive experiments, including image classification, object detection, semantic segmentation, instance segmentation, etc. Code is available at "),ae=o("a"),Wt=r("this https URL"),Ht=r("."),ht=d(),je=o("p"),Ut=r("Tips:"),pt=d(),ke=o("ul"),oe=o("li"),Rt=r("VAN does not have an embedding layer, thus the "),Ue=o("code"),Bt=r("hidden_states"),Kt=r(" will have a length equal to the number of stages."),ft=d(),B=o("p"),Zt=r("The figure below illustrates the architecture of a Visual Aattention Layer. Taken from the "),ne=o("a"),Gt=r("original paper"),Jt=r("."),mt=d(),se=o("img"),ut=d(),M=o("p"),Qt=r("This model was contributed by "),re=o("a"),Xt=r("Francesco"),Yt=r(". The original code can be found "),ie=o("a"),ea=r("here"),ta=r("."),gt=d(),z=o("h2"),K=o("a"),Re=o("span"),w(le.$$.fragment),aa=d(),Be=o("span"),oa=r("VanConfig"),_t=d(),v=o("div"),w(ce.$$.fragment),na=d(),L=o("p"),sa=r("This is the configuration class to store the configuration of a "),Ne=o("a"),ra=r("VanModel"),ia=r(`. It is used to instantiate a VAN model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the VAN `),de=o("a"),la=r("van-base"),ca=r(`
architecture.`),da=d(),D=o("p"),ha=r("Configuration objects inherit from "),Me=o("a"),pa=r("PretrainedConfig"),fa=r(` and can be used to control the model outputs. Read the
documentation from `),Pe=o("a"),ma=r("PretrainedConfig"),ua=r(" for more information."),ga=d(),Ke=o("p"),_a=r("Example:"),va=d(),w(he.$$.fragment),vt=d(),S=o("h2"),Z=o("a"),Ze=o("span"),w(pe.$$.fragment),wa=d(),Ge=o("span"),ba=r("VanModel"),wt=d(),N=o("div"),w(fe.$$.fragment),ya=d(),me=o("p"),$a=r(`The bare VAN model outputting raw features without any specific head on top. Note, VAN does not have an embedding layer.
This model is a PyTorch `),ue=o("a"),Va=r("torch.nn.Module"),Aa=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ea=d(),E=o("div"),w(ge.$$.fragment),xa=d(),O=o("p"),Ca=r("The "),Fe=o("a"),Ta=r("VanModel"),ja=r(" forward method, overrides the "),Je=o("code"),ka=r("__call__"),Na=r(" special method."),Ma=d(),w(G.$$.fragment),Pa=d(),Qe=o("p"),Fa=r("Example:"),Ia=d(),w(_e.$$.fragment),bt=d(),W=o("h2"),J=o("a"),Xe=o("span"),w(ve.$$.fragment),qa=d(),Ye=o("span"),za=r("VanForImageClassification"),yt=d(),T=o("div"),w(we.$$.fragment),La=d(),et=o("p"),Da=r(`VAN Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),Sa=d(),be=o("p"),Oa=r("This model is a PyTorch "),ye=o("a"),Wa=r("torch.nn.Module"),Ha=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ua=d(),x=o("div"),w($e.$$.fragment),Ra=d(),H=o("p"),Ba=r("The "),Ie=o("a"),Ka=r("VanForImageClassification"),Za=r(" forward method, overrides the "),tt=o("code"),Ga=r("__call__"),Ja=r(" special method."),Qa=d(),w(Q.$$.fragment),Xa=d(),at=o("p"),Ya=r("Example:"),eo=d(),w(Ve.$$.fragment),this.h()},l(e){const c=Ko('[data-svelte="svelte-1phssyn"]',document.head);f=n(c,"META",{name:!0,content:!0}),c.forEach(a),j=h(e),m=n(e,"H1",{class:!0});var Ae=s(m);_=n(Ae,"A",{id:!0,class:!0,href:!0});var ot=s(_);C=n(ot,"SPAN",{});var oo=s(C);b(u.$$.fragment,oo),oo.forEach(a),ot.forEach(a),g=h(Ae),k=n(Ae,"SPAN",{});var no=s(k);Pt=i(no,"VAN"),no.forEach(a),Ae.forEach(a),rt=h(e),q=n(e,"H2",{class:!0});var Vt=s(q);U=n(Vt,"A",{id:!0,class:!0,href:!0});var so=s(U);We=n(so,"SPAN",{});var ro=s(We);b(Y.$$.fragment,ro),ro.forEach(a),so.forEach(a),Ft=h(Vt),He=n(Vt,"SPAN",{});var io=s(He);It=i(io,"Overview"),io.forEach(a),Vt.forEach(a),it=h(e),R=n(e,"P",{});var At=s(R);qt=i(At,"The VAN model was proposed in "),ee=n(At,"A",{href:!0,rel:!0});var lo=s(ee);zt=i(lo,"Visual Attention Network"),lo.forEach(a),Lt=i(At," by Meng-Hao Guo, Cheng-Ze Lu, Zheng-Ning Liu, Ming-Ming Cheng, Shi-Min Hu."),At.forEach(a),lt=h(e),xe=n(e,"P",{});var co=s(xe);Dt=i(co,"This paper introduces a new attention layer based on convolution operations able to capture both local and distant relationships. This is done by combining normal and large kernel convolution layers. The latter uses a dilated convolution to capture distant correlations."),co.forEach(a),ct=h(e),Ce=n(e,"P",{});var ho=s(Ce);St=i(ho,"The abstract from the paper is the following:"),ho.forEach(a),dt=h(e),Te=n(e,"P",{});var po=s(Te);te=n(po,"EM",{});var Et=s(te);Ot=i(Et,"While originally designed for natural language processing tasks, the self-attention mechanism has recently taken various computer vision areas by storm. However, the 2D nature of images brings three challenges for applying self-attention in computer vision. (1) Treating images as 1D sequences neglects their 2D structures. (2) The quadratic complexity is too expensive for high-resolution images. (3) It only captures spatial adaptability but ignores channel adaptability. In this paper, we propose a novel large kernel attention (LKA) module to enable self-adaptive and long-range correlations in self-attention while avoiding the above issues. We further introduce a novel neural network based on LKA, namely Visual Attention Network (VAN). While extremely simple, VAN outperforms the state-of-the-art vision transformers and convolutional neural networks with a large margin in extensive experiments, including image classification, object detection, semantic segmentation, instance segmentation, etc. Code is available at "),ae=n(Et,"A",{href:!0,rel:!0});var fo=s(ae);Wt=i(fo,"this https URL"),fo.forEach(a),Ht=i(Et,"."),Et.forEach(a),po.forEach(a),ht=h(e),je=n(e,"P",{});var mo=s(je);Ut=i(mo,"Tips:"),mo.forEach(a),pt=h(e),ke=n(e,"UL",{});var uo=s(ke);oe=n(uo,"LI",{});var xt=s(oe);Rt=i(xt,"VAN does not have an embedding layer, thus the "),Ue=n(xt,"CODE",{});var go=s(Ue);Bt=i(go,"hidden_states"),go.forEach(a),Kt=i(xt," will have a length equal to the number of stages."),xt.forEach(a),uo.forEach(a),ft=h(e),B=n(e,"P",{});var Ct=s(B);Zt=i(Ct,"The figure below illustrates the architecture of a Visual Aattention Layer. Taken from the "),ne=n(Ct,"A",{href:!0,rel:!0});var _o=s(ne);Gt=i(_o,"original paper"),_o.forEach(a),Jt=i(Ct,"."),Ct.forEach(a),mt=h(e),se=n(e,"IMG",{width:!0,src:!0}),ut=h(e),M=n(e,"P",{});var qe=s(M);Qt=i(qe,"This model was contributed by "),re=n(qe,"A",{href:!0,rel:!0});var vo=s(re);Xt=i(vo,"Francesco"),vo.forEach(a),Yt=i(qe,". The original code can be found "),ie=n(qe,"A",{href:!0,rel:!0});var wo=s(ie);ea=i(wo,"here"),wo.forEach(a),ta=i(qe,"."),qe.forEach(a),gt=h(e),z=n(e,"H2",{class:!0});var Tt=s(z);K=n(Tt,"A",{id:!0,class:!0,href:!0});var bo=s(K);Re=n(bo,"SPAN",{});var yo=s(Re);b(le.$$.fragment,yo),yo.forEach(a),bo.forEach(a),aa=h(Tt),Be=n(Tt,"SPAN",{});var $o=s(Be);oa=i($o,"VanConfig"),$o.forEach(a),Tt.forEach(a),_t=h(e),v=n(e,"DIV",{class:!0});var P=s(v);b(ce.$$.fragment,P),na=h(P),L=n(P,"P",{});var ze=s(L);sa=i(ze,"This is the configuration class to store the configuration of a "),Ne=n(ze,"A",{href:!0});var Vo=s(Ne);ra=i(Vo,"VanModel"),Vo.forEach(a),ia=i(ze,`. It is used to instantiate a VAN model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the VAN `),de=n(ze,"A",{href:!0,rel:!0});var Ao=s(de);la=i(Ao,"van-base"),Ao.forEach(a),ca=i(ze,`
architecture.`),ze.forEach(a),da=h(P),D=n(P,"P",{});var Le=s(D);ha=i(Le,"Configuration objects inherit from "),Me=n(Le,"A",{href:!0});var Eo=s(Me);pa=i(Eo,"PretrainedConfig"),Eo.forEach(a),fa=i(Le,` and can be used to control the model outputs. Read the
documentation from `),Pe=n(Le,"A",{href:!0});var xo=s(Pe);ma=i(xo,"PretrainedConfig"),xo.forEach(a),ua=i(Le," for more information."),Le.forEach(a),ga=h(P),Ke=n(P,"P",{});var Co=s(Ke);_a=i(Co,"Example:"),Co.forEach(a),va=h(P),b(he.$$.fragment,P),P.forEach(a),vt=h(e),S=n(e,"H2",{class:!0});var jt=s(S);Z=n(jt,"A",{id:!0,class:!0,href:!0});var To=s(Z);Ze=n(To,"SPAN",{});var jo=s(Ze);b(pe.$$.fragment,jo),jo.forEach(a),To.forEach(a),wa=h(jt),Ge=n(jt,"SPAN",{});var ko=s(Ge);ba=i(ko,"VanModel"),ko.forEach(a),jt.forEach(a),wt=h(e),N=n(e,"DIV",{class:!0});var De=s(N);b(fe.$$.fragment,De),ya=h(De),me=n(De,"P",{});var kt=s(me);$a=i(kt,`The bare VAN model outputting raw features without any specific head on top. Note, VAN does not have an embedding layer.
This model is a PyTorch `),ue=n(kt,"A",{href:!0,rel:!0});var No=s(ue);Va=i(No,"torch.nn.Module"),No.forEach(a),Aa=i(kt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kt.forEach(a),Ea=h(De),E=n(De,"DIV",{class:!0});var F=s(E);b(ge.$$.fragment,F),xa=h(F),O=n(F,"P",{});var Se=s(O);Ca=i(Se,"The "),Fe=n(Se,"A",{href:!0});var Mo=s(Fe);Ta=i(Mo,"VanModel"),Mo.forEach(a),ja=i(Se," forward method, overrides the "),Je=n(Se,"CODE",{});var Po=s(Je);ka=i(Po,"__call__"),Po.forEach(a),Na=i(Se," special method."),Se.forEach(a),Ma=h(F),b(G.$$.fragment,F),Pa=h(F),Qe=n(F,"P",{});var Fo=s(Qe);Fa=i(Fo,"Example:"),Fo.forEach(a),Ia=h(F),b(_e.$$.fragment,F),F.forEach(a),De.forEach(a),bt=h(e),W=n(e,"H2",{class:!0});var Nt=s(W);J=n(Nt,"A",{id:!0,class:!0,href:!0});var Io=s(J);Xe=n(Io,"SPAN",{});var qo=s(Xe);b(ve.$$.fragment,qo),qo.forEach(a),Io.forEach(a),qa=h(Nt),Ye=n(Nt,"SPAN",{});var zo=s(Ye);za=i(zo,"VanForImageClassification"),zo.forEach(a),Nt.forEach(a),yt=h(e),T=n(e,"DIV",{class:!0});var X=s(T);b(we.$$.fragment,X),La=h(X),et=n(X,"P",{});var Lo=s(et);Da=i(Lo,`VAN Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),Lo.forEach(a),Sa=h(X),be=n(X,"P",{});var Mt=s(be);Oa=i(Mt,"This model is a PyTorch "),ye=n(Mt,"A",{href:!0,rel:!0});var Do=s(ye);Wa=i(Do,"torch.nn.Module"),Do.forEach(a),Ha=i(Mt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Mt.forEach(a),Ua=h(X),x=n(X,"DIV",{class:!0});var I=s(x);b($e.$$.fragment,I),Ra=h(I),H=n(I,"P",{});var Oe=s(H);Ba=i(Oe,"The "),Ie=n(Oe,"A",{href:!0});var So=s(Ie);Ka=i(So,"VanForImageClassification"),So.forEach(a),Za=i(Oe," forward method, overrides the "),tt=n(Oe,"CODE",{});var Oo=s(tt);Ga=i(Oo,"__call__"),Oo.forEach(a),Ja=i(Oe," special method."),Oe.forEach(a),Qa=h(I),b(Q.$$.fragment,I),Xa=h(I),at=n(I,"P",{});var Wo=s(at);Ya=i(Wo,"Example:"),Wo.forEach(a),eo=h(I),b(Ve.$$.fragment,I),I.forEach(a),X.forEach(a),this.h()},h(){l(f,"name","hf:doc:metadata"),l(f,"content",JSON.stringify(Yo)),l(_,"id","van"),l(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(_,"href","#van"),l(m,"class","relative group"),l(U,"id","overview"),l(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(U,"href","#overview"),l(q,"class","relative group"),l(ee,"href","https://arxiv.org/abs/2202.09741"),l(ee,"rel","nofollow"),l(ae,"href","https://github.com/Visual-Attention-Network/VAN-Classification"),l(ae,"rel","nofollow"),l(ne,"href","https://arxiv.org/abs/2202.09741"),l(ne,"rel","nofollow"),l(se,"width","600"),Zo(se.src,ao="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/van_architecture.png")||l(se,"src",ao),l(re,"href","https://huggingface.co/Francesco"),l(re,"rel","nofollow"),l(ie,"href","https://github.com/Visual-Attention-Network/VAN-Classification"),l(ie,"rel","nofollow"),l(K,"id","transformers.VanConfig"),l(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(K,"href","#transformers.VanConfig"),l(z,"class","relative group"),l(Ne,"href","/docs/transformers/pr_16518/en/model_doc/van#transformers.VanModel"),l(de,"href","https://huggingface.co/van-base"),l(de,"rel","nofollow"),l(Me,"href","/docs/transformers/pr_16518/en/main_classes/configuration#transformers.PretrainedConfig"),l(Pe,"href","/docs/transformers/pr_16518/en/main_classes/configuration#transformers.PretrainedConfig"),l(v,"class","docstring"),l(Z,"id","transformers.VanModel"),l(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Z,"href","#transformers.VanModel"),l(S,"class","relative group"),l(ue,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ue,"rel","nofollow"),l(Fe,"href","/docs/transformers/pr_16518/en/model_doc/van#transformers.VanModel"),l(E,"class","docstring"),l(N,"class","docstring"),l(J,"id","transformers.VanForImageClassification"),l(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(J,"href","#transformers.VanForImageClassification"),l(W,"class","relative group"),l(ye,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ye,"rel","nofollow"),l(Ie,"href","/docs/transformers/pr_16518/en/model_doc/van#transformers.VanForImageClassification"),l(x,"class","docstring"),l(T,"class","docstring")},m(e,c){t(document.head,f),p(e,j,c),p(e,m,c),t(m,_),t(_,C),y(u,C,null),t(m,g),t(m,k),t(k,Pt),p(e,rt,c),p(e,q,c),t(q,U),t(U,We),y(Y,We,null),t(q,Ft),t(q,He),t(He,It),p(e,it,c),p(e,R,c),t(R,qt),t(R,ee),t(ee,zt),t(R,Lt),p(e,lt,c),p(e,xe,c),t(xe,Dt),p(e,ct,c),p(e,Ce,c),t(Ce,St),p(e,dt,c),p(e,Te,c),t(Te,te),t(te,Ot),t(te,ae),t(ae,Wt),t(te,Ht),p(e,ht,c),p(e,je,c),t(je,Ut),p(e,pt,c),p(e,ke,c),t(ke,oe),t(oe,Rt),t(oe,Ue),t(Ue,Bt),t(oe,Kt),p(e,ft,c),p(e,B,c),t(B,Zt),t(B,ne),t(ne,Gt),t(B,Jt),p(e,mt,c),p(e,se,c),p(e,ut,c),p(e,M,c),t(M,Qt),t(M,re),t(re,Xt),t(M,Yt),t(M,ie),t(ie,ea),t(M,ta),p(e,gt,c),p(e,z,c),t(z,K),t(K,Re),y(le,Re,null),t(z,aa),t(z,Be),t(Be,oa),p(e,_t,c),p(e,v,c),y(ce,v,null),t(v,na),t(v,L),t(L,sa),t(L,Ne),t(Ne,ra),t(L,ia),t(L,de),t(de,la),t(L,ca),t(v,da),t(v,D),t(D,ha),t(D,Me),t(Me,pa),t(D,fa),t(D,Pe),t(Pe,ma),t(D,ua),t(v,ga),t(v,Ke),t(Ke,_a),t(v,va),y(he,v,null),p(e,vt,c),p(e,S,c),t(S,Z),t(Z,Ze),y(pe,Ze,null),t(S,wa),t(S,Ge),t(Ge,ba),p(e,wt,c),p(e,N,c),y(fe,N,null),t(N,ya),t(N,me),t(me,$a),t(me,ue),t(ue,Va),t(me,Aa),t(N,Ea),t(N,E),y(ge,E,null),t(E,xa),t(E,O),t(O,Ca),t(O,Fe),t(Fe,Ta),t(O,ja),t(O,Je),t(Je,ka),t(O,Na),t(E,Ma),y(G,E,null),t(E,Pa),t(E,Qe),t(Qe,Fa),t(E,Ia),y(_e,E,null),p(e,bt,c),p(e,W,c),t(W,J),t(J,Xe),y(ve,Xe,null),t(W,qa),t(W,Ye),t(Ye,za),p(e,yt,c),p(e,T,c),y(we,T,null),t(T,La),t(T,et),t(et,Da),t(T,Sa),t(T,be),t(be,Oa),t(be,ye),t(ye,Wa),t(be,Ha),t(T,Ua),t(T,x),y($e,x,null),t(x,Ra),t(x,H),t(H,Ba),t(H,Ie),t(Ie,Ka),t(H,Za),t(H,tt),t(tt,Ga),t(H,Ja),t(x,Qa),y(Q,x,null),t(x,Xa),t(x,at),t(at,Ya),t(x,eo),y(Ve,x,null),$t=!0},p(e,[c]){const Ae={};c&2&&(Ae.$$scope={dirty:c,ctx:e}),G.$set(Ae);const ot={};c&2&&(ot.$$scope={dirty:c,ctx:e}),Q.$set(ot)},i(e){$t||($(u.$$.fragment,e),$(Y.$$.fragment,e),$(le.$$.fragment,e),$(ce.$$.fragment,e),$(he.$$.fragment,e),$(pe.$$.fragment,e),$(fe.$$.fragment,e),$(ge.$$.fragment,e),$(G.$$.fragment,e),$(_e.$$.fragment,e),$(ve.$$.fragment,e),$(we.$$.fragment,e),$($e.$$.fragment,e),$(Q.$$.fragment,e),$(Ve.$$.fragment,e),$t=!0)},o(e){V(u.$$.fragment,e),V(Y.$$.fragment,e),V(le.$$.fragment,e),V(ce.$$.fragment,e),V(he.$$.fragment,e),V(pe.$$.fragment,e),V(fe.$$.fragment,e),V(ge.$$.fragment,e),V(G.$$.fragment,e),V(_e.$$.fragment,e),V(ve.$$.fragment,e),V(we.$$.fragment,e),V($e.$$.fragment,e),V(Q.$$.fragment,e),V(Ve.$$.fragment,e),$t=!1},d(e){a(f),e&&a(j),e&&a(m),A(u),e&&a(rt),e&&a(q),A(Y),e&&a(it),e&&a(R),e&&a(lt),e&&a(xe),e&&a(ct),e&&a(Ce),e&&a(dt),e&&a(Te),e&&a(ht),e&&a(je),e&&a(pt),e&&a(ke),e&&a(ft),e&&a(B),e&&a(mt),e&&a(se),e&&a(ut),e&&a(M),e&&a(gt),e&&a(z),A(le),e&&a(_t),e&&a(v),A(ce),A(he),e&&a(vt),e&&a(S),A(pe),e&&a(wt),e&&a(N),A(fe),A(ge),A(G),A(_e),e&&a(bt),e&&a(W),A(ve),e&&a(yt),e&&a(T),A(we),A($e),A(Q),A(Ve)}}}const Yo={local:"van",sections:[{local:"overview",title:"Overview"},{local:"transformers.VanConfig",title:"VanConfig"},{local:"transformers.VanModel",title:"VanModel"},{local:"transformers.VanForImageClassification",title:"VanForImageClassification"}],title:"VAN"};function en(Ee){return Go(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class rn extends Uo{constructor(f){super();Ro(this,f,en,Xo,Bo,{})}}export{rn as default,Yo as metadata};
