import{S as Uo,i as Go,s as Ko,e as o,k as d,w,t as r,M as Ro,c as s,d as a,m as h,a as n,x as b,h as i,b as l,N as Zo,F as t,g as f,y as $,q as y,o as V,B as E}from"../../chunks/vendor-4833417e.js";import{T as Wo}from"../../chunks/Tip-fffd6df1.js";import{D as st}from"../../chunks/Docstring-4f315ed9.js";import{C as to}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as nt}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Bo(Y){let p,x,m,u,T;return{c(){p=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=s(g,"P",{});var _=n(p);x=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(_,"CODE",{});var M=n(m);u=i(M,"Module"),M.forEach(a),T=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(a)},m(g,_){f(g,p,_),t(p,x),t(p,m),t(m,u),t(p,T)},d(g){g&&a(p)}}}function Jo(Y){let p,x,m,u,T;return{c(){p=o("p"),x=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){p=s(g,"P",{});var _=n(p);x=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(_,"CODE",{});var M=n(m);u=i(M,"Module"),M.forEach(a),T=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(a)},m(g,_){f(g,p,_),t(p,x),t(p,m),t(m,u),t(p,T)},d(g){g&&a(p)}}}function Qo(Y){let p,x,m,u,T,g,_,M,Nt,rt,q,U,He,ee,Pt,We,It,it,G,qt,te,zt,Lt,lt,Ae,Dt,ct,Ce,St,dt,Te,ae,Ot,oe,Ht,Wt,ht,je,Ut,ft,Me,se,Gt,Ue,Kt,Rt,pt,K,Zt,ne,Bt,Jt,mt,re,ao,ut,F,Qt,ie,Xt,Yt,le,ea,ta,gt,z,R,Ge,ce,aa,Ke,oa,_t,v,de,sa,L,na,ke,ra,ia,he,la,ca,da,D,ha,Fe,fa,pa,Ne,ma,ua,ga,Re,_a,va,fe,vt,S,Z,Ze,pe,wa,Be,ba,wt,k,me,$a,ue,ya,ge,Va,Ea,xa,A,_e,Aa,O,Ca,Pe,Ta,ja,Je,Ma,ka,Fa,B,Na,Qe,Pa,Ia,ve,bt,H,J,Xe,we,qa,Ye,za,$t,j,be,La,et,Da,Sa,$e,Oa,ye,Ha,Wa,Ua,C,Ve,Ga,W,Ka,Ie,Ra,Za,tt,Ba,Ja,Qa,Q,Xa,at,Ya,eo,Ee,yt;return g=new nt({}),ee=new nt({}),ce=new nt({}),de=new st({props:{name:"class transformers.VanConfig",anchor:"transformers.VanConfig",parameters:[{name:"image_size",val:" = 224"},{name:"num_channels",val:" = 3"},{name:"patch_sizes",val:" = [7, 3, 3, 3]"},{name:"strides",val:" = [4, 2, 2, 2]"},{name:"hidden_sizes",val:" = [64, 128, 320, 512]"},{name:"depths",val:" = [3, 3, 12, 3]"},{name:"mlp_ratios",val:" = [8, 8, 4, 4]"},{name:"hidden_act",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-06"},{name:"layer_scale_init_value",val:" = 0.01"},{name:"drop_path_rate",val:" = 0.0"},{name:"dropout_rate",val:" = 0.0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16133/src/transformers/models/van/configuration_van.py#L28",parametersDescription:[{anchor:"transformers.VanConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
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
The dropout probability for dropout.`,name:"dropout_rate"}]}}),fe=new to({props:{code:`from transformers import VanModel, VanConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),pe=new nt({}),me=new st({props:{name:"class transformers.VanModel",anchor:"transformers.VanModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16133/src/transformers/models/van/modeling_van.py#L453",parametersDescription:[{anchor:"transformers.VanModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16133/en/model_doc/van#transformers.VanConfig">VanConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16133/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_e=new st({props:{name:"forward",anchor:"transformers.VanModel.forward",parameters:[{name:"pixel_values",val:""},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16133/src/transformers/models/van/modeling_van.py#L463",parametersDescription:[{anchor:"transformers.VanModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16133/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.VanModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all stages. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VanModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16133/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <code>transformers.models.van.modeling_van.VanModelOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16133/en/model_doc/van#transformers.VanConfig"
>VanConfig</a>) and inputs.</p>
<ul>
<li><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) \u2014 Last hidden states (final feature map) of the last stage of the model.</li>
<li><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.hidden_sizes[-1])</code>) \u2014 Global average pooling of the last feature map followed by a layernorm.</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of each stage) of shape <code>(batch_size, num_channels, height, width)</code>. Hidden-states (also called feature maps) of the model at the output of each stage.</li>
</ul>
`,returnType:`
<p><code>transformers.models.van.modeling_van.VanModelOutput</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),B=new Wo({props:{$$slots:{default:[Bo]},$$scope:{ctx:Y}}}),ve=new to({props:{code:`from transformers import AutoFeatureExtractor, VanModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("van-base")
model = VanModel.from_pretrained("van-base")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, VanModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;van-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VanModel.from_pretrained(<span class="hljs-string">&quot;van-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">512</span>, <span class="hljs-number">7</span>, <span class="hljs-number">7</span>]`}}),we=new nt({}),be=new st({props:{name:"class transformers.VanForImageClassification",anchor:"transformers.VanForImageClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16133/src/transformers/models/van/modeling_van.py#L504",parametersDescription:[{anchor:"transformers.VanForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16133/en/model_doc/van#transformers.VanConfig">VanConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16133/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ve=new st({props:{name:"forward",anchor:"transformers.VanForImageClassification.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"labels",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16133/src/transformers/models/van/modeling_van.py#L516",parametersDescription:[{anchor:"transformers.VanForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16133/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code>for details.`,name:"pixel_values"},{anchor:"transformers.VanForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all stages. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VanForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16133/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VanForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <code>transformers.models.van.modeling_van.VanClassifierOutput</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16133/en/model_doc/van#transformers.VanConfig"
>VanConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of each stage) of shape <code>(batch_size, num_channels, height, width)</code>. Hidden-states (also called feature maps) of the model at the output of each stage.</li>
</ul>
`,returnType:`
<p><code>transformers.models.van.modeling_van.VanClassifierOutput</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),Q=new Wo({props:{$$slots:{default:[Jo]},$$scope:{ctx:Y}}}),Ee=new to({props:{code:`from transformers import AutoFeatureExtractor, VanForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("van-base")
model = VanForImageClassification.from_pretrained("van-base")

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

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;van-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VanForImageClassification.from_pretrained(<span class="hljs-string">&quot;van-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`}}),{c(){p=o("meta"),x=d(),m=o("h1"),u=o("a"),T=o("span"),w(g.$$.fragment),_=d(),M=o("span"),Nt=r("VAN"),rt=d(),q=o("h2"),U=o("a"),He=o("span"),w(ee.$$.fragment),Pt=d(),We=o("span"),It=r("Overview"),it=d(),G=o("p"),qt=r("The VAN model was proposed in "),te=o("a"),zt=r("Visual Attention Network"),Lt=r(" by Meng-Hao Guo, Cheng-Ze Lu, Zheng-Ning Liu, Ming-Ming Cheng, Shi-Min Hu."),lt=d(),Ae=o("p"),Dt=r("This paper introduces a new attention layer based on convolution operations able to capture both local and distant relationships. This is done by combining normal and large kernel convolution layers. The latter uses a dilated convolution to capture distant correlations."),ct=d(),Ce=o("p"),St=r("The abstract from the paper is the following:"),dt=d(),Te=o("p"),ae=o("em"),Ot=r("While originally designed for natural language processing tasks, the self-attention mechanism has recently taken various computer vision areas by storm. However, the 2D nature of images brings three challenges for applying self-attention in computer vision. (1) Treating images as 1D sequences neglects their 2D structures. (2) The quadratic complexity is too expensive for high-resolution images. (3) It only captures spatial adaptability but ignores channel adaptability. In this paper, we propose a novel large kernel attention (LKA) module to enable self-adaptive and long-range correlations in self-attention while avoiding the above issues. We further introduce a novel neural network based on LKA, namely Visual Attention Network (VAN). While extremely simple, VAN outperforms the state-of-the-art vision transformers and convolutional neural networks with a large margin in extensive experiments, including image classification, object detection, semantic segmentation, instance segmentation, etc. Code is available at "),oe=o("a"),Ht=r("this https URL"),Wt=r("."),ht=d(),je=o("p"),Ut=r("Tips:"),ft=d(),Me=o("ul"),se=o("li"),Gt=r("VAN does not have an embedding layer, thus the "),Ue=o("code"),Kt=r("hidden_states"),Rt=r(" will have a length equal to the number of stages."),pt=d(),K=o("p"),Zt=r("The figure below illustrates the architecture of a Visual Aattention Layer. Taken from the "),ne=o("a"),Bt=r("original paper"),Jt=r("."),mt=d(),re=o("img"),ut=d(),F=o("p"),Qt=r("This model was contributed by "),ie=o("a"),Xt=r("Francesco"),Yt=r(". The original code can be found "),le=o("a"),ea=r("here"),ta=r("."),gt=d(),z=o("h2"),R=o("a"),Ge=o("span"),w(ce.$$.fragment),aa=d(),Ke=o("span"),oa=r("VanConfig"),_t=d(),v=o("div"),w(de.$$.fragment),sa=d(),L=o("p"),na=r("This is the configuration class to store the configuration of a "),ke=o("a"),ra=r("VanModel"),ia=r(`. It is used to instantiate a VAN model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the VAN `),he=o("a"),la=r("van-base"),ca=r(`
architecture.`),da=d(),D=o("p"),ha=r("Configuration objects inherit from "),Fe=o("a"),fa=r("PretrainedConfig"),pa=r(` and can be used to control the model outputs. Read the
documentation from `),Ne=o("a"),ma=r("PretrainedConfig"),ua=r(" for more information."),ga=d(),Re=o("p"),_a=r("Example:"),va=d(),w(fe.$$.fragment),vt=d(),S=o("h2"),Z=o("a"),Ze=o("span"),w(pe.$$.fragment),wa=d(),Be=o("span"),ba=r("VanModel"),wt=d(),k=o("div"),w(me.$$.fragment),$a=d(),ue=o("p"),ya=r(`The bare VAN model outputting raw features without any specific head on top. Note, VAN does not have an embedding layer.
This model is a PyTorch `),ge=o("a"),Va=r("torch.nn.Module"),Ea=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xa=d(),A=o("div"),w(_e.$$.fragment),Aa=d(),O=o("p"),Ca=r("The "),Pe=o("a"),Ta=r("VanModel"),ja=r(" forward method, overrides the "),Je=o("code"),Ma=r("__call__"),ka=r(" special method."),Fa=d(),w(B.$$.fragment),Na=d(),Qe=o("p"),Pa=r("Example:"),Ia=d(),w(ve.$$.fragment),bt=d(),H=o("h2"),J=o("a"),Xe=o("span"),w(we.$$.fragment),qa=d(),Ye=o("span"),za=r("VanForImageClassification"),$t=d(),j=o("div"),w(be.$$.fragment),La=d(),et=o("p"),Da=r(`VAN Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),Sa=d(),$e=o("p"),Oa=r("This model is a PyTorch "),ye=o("a"),Ha=r("torch.nn.Module"),Wa=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ua=d(),C=o("div"),w(Ve.$$.fragment),Ga=d(),W=o("p"),Ka=r("The "),Ie=o("a"),Ra=r("VanForImageClassification"),Za=r(" forward method, overrides the "),tt=o("code"),Ba=r("__call__"),Ja=r(" special method."),Qa=d(),w(Q.$$.fragment),Xa=d(),at=o("p"),Ya=r("Example:"),eo=d(),w(Ee.$$.fragment),this.h()},l(e){const c=Ro('[data-svelte="svelte-1phssyn"]',document.head);p=s(c,"META",{name:!0,content:!0}),c.forEach(a),x=h(e),m=s(e,"H1",{class:!0});var xe=n(m);u=s(xe,"A",{id:!0,class:!0,href:!0});var ot=n(u);T=s(ot,"SPAN",{});var oo=n(T);b(g.$$.fragment,oo),oo.forEach(a),ot.forEach(a),_=h(xe),M=s(xe,"SPAN",{});var so=n(M);Nt=i(so,"VAN"),so.forEach(a),xe.forEach(a),rt=h(e),q=s(e,"H2",{class:!0});var Vt=n(q);U=s(Vt,"A",{id:!0,class:!0,href:!0});var no=n(U);He=s(no,"SPAN",{});var ro=n(He);b(ee.$$.fragment,ro),ro.forEach(a),no.forEach(a),Pt=h(Vt),We=s(Vt,"SPAN",{});var io=n(We);It=i(io,"Overview"),io.forEach(a),Vt.forEach(a),it=h(e),G=s(e,"P",{});var Et=n(G);qt=i(Et,"The VAN model was proposed in "),te=s(Et,"A",{href:!0,rel:!0});var lo=n(te);zt=i(lo,"Visual Attention Network"),lo.forEach(a),Lt=i(Et," by Meng-Hao Guo, Cheng-Ze Lu, Zheng-Ning Liu, Ming-Ming Cheng, Shi-Min Hu."),Et.forEach(a),lt=h(e),Ae=s(e,"P",{});var co=n(Ae);Dt=i(co,"This paper introduces a new attention layer based on convolution operations able to capture both local and distant relationships. This is done by combining normal and large kernel convolution layers. The latter uses a dilated convolution to capture distant correlations."),co.forEach(a),ct=h(e),Ce=s(e,"P",{});var ho=n(Ce);St=i(ho,"The abstract from the paper is the following:"),ho.forEach(a),dt=h(e),Te=s(e,"P",{});var fo=n(Te);ae=s(fo,"EM",{});var xt=n(ae);Ot=i(xt,"While originally designed for natural language processing tasks, the self-attention mechanism has recently taken various computer vision areas by storm. However, the 2D nature of images brings three challenges for applying self-attention in computer vision. (1) Treating images as 1D sequences neglects their 2D structures. (2) The quadratic complexity is too expensive for high-resolution images. (3) It only captures spatial adaptability but ignores channel adaptability. In this paper, we propose a novel large kernel attention (LKA) module to enable self-adaptive and long-range correlations in self-attention while avoiding the above issues. We further introduce a novel neural network based on LKA, namely Visual Attention Network (VAN). While extremely simple, VAN outperforms the state-of-the-art vision transformers and convolutional neural networks with a large margin in extensive experiments, including image classification, object detection, semantic segmentation, instance segmentation, etc. Code is available at "),oe=s(xt,"A",{href:!0,rel:!0});var po=n(oe);Ht=i(po,"this https URL"),po.forEach(a),Wt=i(xt,"."),xt.forEach(a),fo.forEach(a),ht=h(e),je=s(e,"P",{});var mo=n(je);Ut=i(mo,"Tips:"),mo.forEach(a),ft=h(e),Me=s(e,"UL",{});var uo=n(Me);se=s(uo,"LI",{});var At=n(se);Gt=i(At,"VAN does not have an embedding layer, thus the "),Ue=s(At,"CODE",{});var go=n(Ue);Kt=i(go,"hidden_states"),go.forEach(a),Rt=i(At," will have a length equal to the number of stages."),At.forEach(a),uo.forEach(a),pt=h(e),K=s(e,"P",{});var Ct=n(K);Zt=i(Ct,"The figure below illustrates the architecture of a Visual Aattention Layer. Taken from the "),ne=s(Ct,"A",{href:!0,rel:!0});var _o=n(ne);Bt=i(_o,"original paper"),_o.forEach(a),Jt=i(Ct,"."),Ct.forEach(a),mt=h(e),re=s(e,"IMG",{width:!0,src:!0}),ut=h(e),F=s(e,"P",{});var qe=n(F);Qt=i(qe,"This model was contributed by "),ie=s(qe,"A",{href:!0,rel:!0});var vo=n(ie);Xt=i(vo,"Francesco"),vo.forEach(a),Yt=i(qe,". The original code can be found "),le=s(qe,"A",{href:!0,rel:!0});var wo=n(le);ea=i(wo,"here"),wo.forEach(a),ta=i(qe,"."),qe.forEach(a),gt=h(e),z=s(e,"H2",{class:!0});var Tt=n(z);R=s(Tt,"A",{id:!0,class:!0,href:!0});var bo=n(R);Ge=s(bo,"SPAN",{});var $o=n(Ge);b(ce.$$.fragment,$o),$o.forEach(a),bo.forEach(a),aa=h(Tt),Ke=s(Tt,"SPAN",{});var yo=n(Ke);oa=i(yo,"VanConfig"),yo.forEach(a),Tt.forEach(a),_t=h(e),v=s(e,"DIV",{class:!0});var N=n(v);b(de.$$.fragment,N),sa=h(N),L=s(N,"P",{});var ze=n(L);na=i(ze,"This is the configuration class to store the configuration of a "),ke=s(ze,"A",{href:!0});var Vo=n(ke);ra=i(Vo,"VanModel"),Vo.forEach(a),ia=i(ze,`. It is used to instantiate a VAN model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the VAN `),he=s(ze,"A",{href:!0,rel:!0});var Eo=n(he);la=i(Eo,"van-base"),Eo.forEach(a),ca=i(ze,`
architecture.`),ze.forEach(a),da=h(N),D=s(N,"P",{});var Le=n(D);ha=i(Le,"Configuration objects inherit from "),Fe=s(Le,"A",{href:!0});var xo=n(Fe);fa=i(xo,"PretrainedConfig"),xo.forEach(a),pa=i(Le,` and can be used to control the model outputs. Read the
documentation from `),Ne=s(Le,"A",{href:!0});var Ao=n(Ne);ma=i(Ao,"PretrainedConfig"),Ao.forEach(a),ua=i(Le," for more information."),Le.forEach(a),ga=h(N),Re=s(N,"P",{});var Co=n(Re);_a=i(Co,"Example:"),Co.forEach(a),va=h(N),b(fe.$$.fragment,N),N.forEach(a),vt=h(e),S=s(e,"H2",{class:!0});var jt=n(S);Z=s(jt,"A",{id:!0,class:!0,href:!0});var To=n(Z);Ze=s(To,"SPAN",{});var jo=n(Ze);b(pe.$$.fragment,jo),jo.forEach(a),To.forEach(a),wa=h(jt),Be=s(jt,"SPAN",{});var Mo=n(Be);ba=i(Mo,"VanModel"),Mo.forEach(a),jt.forEach(a),wt=h(e),k=s(e,"DIV",{class:!0});var De=n(k);b(me.$$.fragment,De),$a=h(De),ue=s(De,"P",{});var Mt=n(ue);ya=i(Mt,`The bare VAN model outputting raw features without any specific head on top. Note, VAN does not have an embedding layer.
This model is a PyTorch `),ge=s(Mt,"A",{href:!0,rel:!0});var ko=n(ge);Va=i(ko,"torch.nn.Module"),ko.forEach(a),Ea=i(Mt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Mt.forEach(a),xa=h(De),A=s(De,"DIV",{class:!0});var P=n(A);b(_e.$$.fragment,P),Aa=h(P),O=s(P,"P",{});var Se=n(O);Ca=i(Se,"The "),Pe=s(Se,"A",{href:!0});var Fo=n(Pe);Ta=i(Fo,"VanModel"),Fo.forEach(a),ja=i(Se," forward method, overrides the "),Je=s(Se,"CODE",{});var No=n(Je);Ma=i(No,"__call__"),No.forEach(a),ka=i(Se," special method."),Se.forEach(a),Fa=h(P),b(B.$$.fragment,P),Na=h(P),Qe=s(P,"P",{});var Po=n(Qe);Pa=i(Po,"Example:"),Po.forEach(a),Ia=h(P),b(ve.$$.fragment,P),P.forEach(a),De.forEach(a),bt=h(e),H=s(e,"H2",{class:!0});var kt=n(H);J=s(kt,"A",{id:!0,class:!0,href:!0});var Io=n(J);Xe=s(Io,"SPAN",{});var qo=n(Xe);b(we.$$.fragment,qo),qo.forEach(a),Io.forEach(a),qa=h(kt),Ye=s(kt,"SPAN",{});var zo=n(Ye);za=i(zo,"VanForImageClassification"),zo.forEach(a),kt.forEach(a),$t=h(e),j=s(e,"DIV",{class:!0});var X=n(j);b(be.$$.fragment,X),La=h(X),et=s(X,"P",{});var Lo=n(et);Da=i(Lo,`VAN Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),Lo.forEach(a),Sa=h(X),$e=s(X,"P",{});var Ft=n($e);Oa=i(Ft,"This model is a PyTorch "),ye=s(Ft,"A",{href:!0,rel:!0});var Do=n(ye);Ha=i(Do,"torch.nn.Module"),Do.forEach(a),Wa=i(Ft,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ft.forEach(a),Ua=h(X),C=s(X,"DIV",{class:!0});var I=n(C);b(Ve.$$.fragment,I),Ga=h(I),W=s(I,"P",{});var Oe=n(W);Ka=i(Oe,"The "),Ie=s(Oe,"A",{href:!0});var So=n(Ie);Ra=i(So,"VanForImageClassification"),So.forEach(a),Za=i(Oe," forward method, overrides the "),tt=s(Oe,"CODE",{});var Oo=n(tt);Ba=i(Oo,"__call__"),Oo.forEach(a),Ja=i(Oe," special method."),Oe.forEach(a),Qa=h(I),b(Q.$$.fragment,I),Xa=h(I),at=s(I,"P",{});var Ho=n(at);Ya=i(Ho,"Example:"),Ho.forEach(a),eo=h(I),b(Ee.$$.fragment,I),I.forEach(a),X.forEach(a),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(Xo)),l(u,"id","van"),l(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(u,"href","#van"),l(m,"class","relative group"),l(U,"id","overview"),l(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(U,"href","#overview"),l(q,"class","relative group"),l(te,"href","https://arxiv.org/abs/2202.09741"),l(te,"rel","nofollow"),l(oe,"href","https://github.com/Visual-Attention-Network/VAN-Classification"),l(oe,"rel","nofollow"),l(ne,"href","https://arxiv.org/abs/2202.09741"),l(ne,"rel","nofollow"),l(re,"width","600"),Zo(re.src,ao="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/van_architecture.png")||l(re,"src",ao),l(ie,"href","https://huggingface.co/Francesco"),l(ie,"rel","nofollow"),l(le,"href","https://github.com/Visual-Attention-Network/VAN-Classification"),l(le,"rel","nofollow"),l(R,"id","transformers.VanConfig"),l(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(R,"href","#transformers.VanConfig"),l(z,"class","relative group"),l(ke,"href","/docs/transformers/pr_16133/en/model_doc/van#transformers.VanModel"),l(he,"href","https://huggingface.co/van-base"),l(he,"rel","nofollow"),l(Fe,"href","/docs/transformers/pr_16133/en/main_classes/configuration#transformers.PretrainedConfig"),l(Ne,"href","/docs/transformers/pr_16133/en/main_classes/configuration#transformers.PretrainedConfig"),l(v,"class","docstring"),l(Z,"id","transformers.VanModel"),l(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Z,"href","#transformers.VanModel"),l(S,"class","relative group"),l(ge,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ge,"rel","nofollow"),l(Pe,"href","/docs/transformers/pr_16133/en/model_doc/van#transformers.VanModel"),l(A,"class","docstring"),l(k,"class","docstring"),l(J,"id","transformers.VanForImageClassification"),l(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(J,"href","#transformers.VanForImageClassification"),l(H,"class","relative group"),l(ye,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ye,"rel","nofollow"),l(Ie,"href","/docs/transformers/pr_16133/en/model_doc/van#transformers.VanForImageClassification"),l(C,"class","docstring"),l(j,"class","docstring")},m(e,c){t(document.head,p),f(e,x,c),f(e,m,c),t(m,u),t(u,T),$(g,T,null),t(m,_),t(m,M),t(M,Nt),f(e,rt,c),f(e,q,c),t(q,U),t(U,He),$(ee,He,null),t(q,Pt),t(q,We),t(We,It),f(e,it,c),f(e,G,c),t(G,qt),t(G,te),t(te,zt),t(G,Lt),f(e,lt,c),f(e,Ae,c),t(Ae,Dt),f(e,ct,c),f(e,Ce,c),t(Ce,St),f(e,dt,c),f(e,Te,c),t(Te,ae),t(ae,Ot),t(ae,oe),t(oe,Ht),t(ae,Wt),f(e,ht,c),f(e,je,c),t(je,Ut),f(e,ft,c),f(e,Me,c),t(Me,se),t(se,Gt),t(se,Ue),t(Ue,Kt),t(se,Rt),f(e,pt,c),f(e,K,c),t(K,Zt),t(K,ne),t(ne,Bt),t(K,Jt),f(e,mt,c),f(e,re,c),f(e,ut,c),f(e,F,c),t(F,Qt),t(F,ie),t(ie,Xt),t(F,Yt),t(F,le),t(le,ea),t(F,ta),f(e,gt,c),f(e,z,c),t(z,R),t(R,Ge),$(ce,Ge,null),t(z,aa),t(z,Ke),t(Ke,oa),f(e,_t,c),f(e,v,c),$(de,v,null),t(v,sa),t(v,L),t(L,na),t(L,ke),t(ke,ra),t(L,ia),t(L,he),t(he,la),t(L,ca),t(v,da),t(v,D),t(D,ha),t(D,Fe),t(Fe,fa),t(D,pa),t(D,Ne),t(Ne,ma),t(D,ua),t(v,ga),t(v,Re),t(Re,_a),t(v,va),$(fe,v,null),f(e,vt,c),f(e,S,c),t(S,Z),t(Z,Ze),$(pe,Ze,null),t(S,wa),t(S,Be),t(Be,ba),f(e,wt,c),f(e,k,c),$(me,k,null),t(k,$a),t(k,ue),t(ue,ya),t(ue,ge),t(ge,Va),t(ue,Ea),t(k,xa),t(k,A),$(_e,A,null),t(A,Aa),t(A,O),t(O,Ca),t(O,Pe),t(Pe,Ta),t(O,ja),t(O,Je),t(Je,Ma),t(O,ka),t(A,Fa),$(B,A,null),t(A,Na),t(A,Qe),t(Qe,Pa),t(A,Ia),$(ve,A,null),f(e,bt,c),f(e,H,c),t(H,J),t(J,Xe),$(we,Xe,null),t(H,qa),t(H,Ye),t(Ye,za),f(e,$t,c),f(e,j,c),$(be,j,null),t(j,La),t(j,et),t(et,Da),t(j,Sa),t(j,$e),t($e,Oa),t($e,ye),t(ye,Ha),t($e,Wa),t(j,Ua),t(j,C),$(Ve,C,null),t(C,Ga),t(C,W),t(W,Ka),t(W,Ie),t(Ie,Ra),t(W,Za),t(W,tt),t(tt,Ba),t(W,Ja),t(C,Qa),$(Q,C,null),t(C,Xa),t(C,at),t(at,Ya),t(C,eo),$(Ee,C,null),yt=!0},p(e,[c]){const xe={};c&2&&(xe.$$scope={dirty:c,ctx:e}),B.$set(xe);const ot={};c&2&&(ot.$$scope={dirty:c,ctx:e}),Q.$set(ot)},i(e){yt||(y(g.$$.fragment,e),y(ee.$$.fragment,e),y(ce.$$.fragment,e),y(de.$$.fragment,e),y(fe.$$.fragment,e),y(pe.$$.fragment,e),y(me.$$.fragment,e),y(_e.$$.fragment,e),y(B.$$.fragment,e),y(ve.$$.fragment,e),y(we.$$.fragment,e),y(be.$$.fragment,e),y(Ve.$$.fragment,e),y(Q.$$.fragment,e),y(Ee.$$.fragment,e),yt=!0)},o(e){V(g.$$.fragment,e),V(ee.$$.fragment,e),V(ce.$$.fragment,e),V(de.$$.fragment,e),V(fe.$$.fragment,e),V(pe.$$.fragment,e),V(me.$$.fragment,e),V(_e.$$.fragment,e),V(B.$$.fragment,e),V(ve.$$.fragment,e),V(we.$$.fragment,e),V(be.$$.fragment,e),V(Ve.$$.fragment,e),V(Q.$$.fragment,e),V(Ee.$$.fragment,e),yt=!1},d(e){a(p),e&&a(x),e&&a(m),E(g),e&&a(rt),e&&a(q),E(ee),e&&a(it),e&&a(G),e&&a(lt),e&&a(Ae),e&&a(ct),e&&a(Ce),e&&a(dt),e&&a(Te),e&&a(ht),e&&a(je),e&&a(ft),e&&a(Me),e&&a(pt),e&&a(K),e&&a(mt),e&&a(re),e&&a(ut),e&&a(F),e&&a(gt),e&&a(z),E(ce),e&&a(_t),e&&a(v),E(de),E(fe),e&&a(vt),e&&a(S),E(pe),e&&a(wt),e&&a(k),E(me),E(_e),E(B),E(ve),e&&a(bt),e&&a(H),E(we),e&&a($t),e&&a(j),E(be),E(Ve),E(Q),E(Ee)}}}const Xo={local:"van",sections:[{local:"overview",title:"Overview"},{local:"transformers.VanConfig",title:"VanConfig"},{local:"transformers.VanModel",title:"VanModel"},{local:"transformers.VanForImageClassification",title:"VanForImageClassification"}],title:"VAN"};function Yo(Y,p,x){let{fw:m}=p;return Y.$$set=u=>{"fw"in u&&x(0,m=u.fw)},[m]}class rs extends Uo{constructor(p){super();Go(this,p,Yo,Qo,Ko,{fw:0})}}export{rs as default,Xo as metadata};
