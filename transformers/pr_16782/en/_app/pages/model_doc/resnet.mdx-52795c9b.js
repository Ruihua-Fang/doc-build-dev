import{S as sa,i as oa,s as aa,e as o,k as d,w as b,t as n,M as ra,c as a,d as s,m as h,a as r,x as y,h as i,b as l,N as na,F as e,g as f,y as $,q as N,o as R,B as C,v as ia}from"../../chunks/vendor-6b77c823.js";import{T as ta}from"../../chunks/Tip-39098574.js";import{D as lt}from"../../chunks/Docstring-90e3aa51.js";import{C as co}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ct}from"../../chunks/IconCopyLink-7a11ce68.js";function la(Ce){let p,k,m,_,T;return{c(){p=o("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=o("code"),_=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){p=a(u,"P",{});var g=r(p);k=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(g,"CODE",{});var A=r(m);_=i(A,"Module"),A.forEach(s),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(s)},m(u,g){f(u,p,g),e(p,k),e(p,m),e(m,_),e(p,T)},d(u){u&&s(p)}}}function ca(Ce){let p,k,m,_,T;return{c(){p=o("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=o("code"),_=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){p=a(u,"P",{});var g=r(p);k=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(g,"CODE",{});var A=r(m);_=i(A,"Module"),A.forEach(s),T=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(s)},m(u,g){f(u,p,g),e(p,k),e(p,m),e(m,_),e(p,T)},d(u){u&&s(p)}}}function da(Ce){let p,k,m,_,T,u,g,A,Pt,dt,S,G,Ve,ee,qt,He,Ot,ht,v,St,te,Dt,zt,se,Lt,Wt,Ue,Vt,Ht,Ge,Ut,Gt,Be,Bt,Jt,ft,Ee,Kt,pt,xe,Xt,mt,Te,Je,Zt,ut,je,Qt,gt,ke,oe,Yt,Ie,es,ts,_t,B,ss,ae,os,as,vt,re,ho,wt,M,rs,ne,ns,is,ie,ls,cs,bt,D,J,Ke,le,ds,Xe,hs,yt,w,ce,fs,z,ps,Ae,ms,us,de,gs,_s,vs,L,ws,Fe,bs,ys,Me,$s,Ns,Rs,Ze,Cs,Es,he,$t,W,K,Qe,fe,xs,Ye,Ts,Nt,F,pe,js,me,ks,ue,Is,As,Fs,E,ge,Ms,V,Ps,Pe,qs,Os,et,Ss,Ds,zs,X,Ls,tt,Ws,Vs,_e,Rt,H,Z,st,ve,Hs,ot,Us,Ct,j,we,Gs,at,Bs,Js,be,Ks,ye,Xs,Zs,Qs,x,$e,Ys,U,eo,qe,to,so,rt,oo,ao,ro,Q,no,nt,io,lo,Ne,Et;return u=new ct({}),ee=new ct({}),le=new ct({}),ce=new lt({props:{name:"class transformers.ResNetConfig",anchor:"transformers.ResNetConfig",parameters:[{name:"num_channels",val:" = 3"},{name:"embedding_size",val:" = 64"},{name:"hidden_sizes",val:" = [256, 512, 1024, 2048]"},{name:"depths",val:" = [3, 4, 6, 3]"},{name:"layer_type",val:" = 'bottleneck'"},{name:"hidden_act",val:" = 'relu'"},{name:"downsample_in_first_stage",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ResNetConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.ResNetConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Dimensionality (hidden size) for the embedding layer.`,name:"embedding_size"},{anchor:"transformers.ResNetConfig.hidden_sizes",description:`<strong>hidden_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[256, 512, 1024, 2048]</code>) &#x2014;
Dimensionality (hidden size) at each stage.`,name:"hidden_sizes"},{anchor:"transformers.ResNetConfig.depths",description:`<strong>depths</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 4, 6, 3]</code>) &#x2014;
Depth (number of layers) for each stage.`,name:"depths"},{anchor:"transformers.ResNetConfig.layer_type",description:`<strong>layer_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;bottleneck&quot;</code>) &#x2014;
The layer to use, it can be either <code>&quot;basic&quot;</code> (used for smaller models, like resnet-18 or resnet-34) or
<code>&quot;bottleneck&quot;</code> (used for larger models like resnet-50 and above).`,name:"layer_type"},{anchor:"transformers.ResNetConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function in each block. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.ResNetConfig.downsample_in_first_stage",description:`<strong>downsample_in_first_stage</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, the first stage will downsample the inputs using a <code>stride</code> of 2.`,name:"downsample_in_first_stage"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/resnet/configuration_resnet.py#L28"}}),he=new co({props:{code:`from transformers import ResNetConfig, ResNetModel

# Initializing a ResNet resnet-50 style configuration
configuration = ResNetConfig()
# Initializing a model from the resnet-50 style configuration
model = ResNetModel(configuration)
# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ResNetConfig, ResNetModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ResNet resnet-50 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ResNetConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the resnet-50 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ResNetModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),fe=new ct({}),pe=new lt({props:{name:"class transformers.ResNetModel",anchor:"transformers.ResNetModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ResNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16782/en/model_doc/resnet#transformers.ResNetConfig">ResNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16782/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/resnet/modeling_resnet.py#L268"}}),ge=new lt({props:{name:"forward",anchor:"transformers.ResNetModel.forward",parameters:[{name:"pixel_values",val:": Tensor"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ResNetModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16782/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.ResNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ResNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16782/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/resnet/modeling_resnet.py#L278",returnDescription:`
<p>A <code>transformers.modeling_outputs.BaseModelOutputWithPoolingAndNoAttention</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16782/en/model_doc/resnet#transformers.ResNetConfig"
>ResNetConfig</a>) and inputs.</p>
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
<p><code>transformers.modeling_outputs.BaseModelOutputWithPoolingAndNoAttention</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),X=new ta({props:{$$slots:{default:[la]},$$scope:{ctx:Ce}}}),_e=new co({props:{code:`from transformers import AutoFeatureExtractor, ResNetModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/resnet-50")
model = ResNetModel.from_pretrained("microsoft/resnet-50")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, ResNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/resnet-50&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ResNetModel.from_pretrained(<span class="hljs-string">&quot;microsoft/resnet-50&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2048</span>, <span class="hljs-number">7</span>, <span class="hljs-number">7</span>]`}}),ve=new ct({}),we=new lt({props:{name:"class transformers.ResNetForImageClassification",anchor:"transformers.ResNetForImageClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ResNetForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16782/en/model_doc/resnet#transformers.ResNetConfig">ResNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16782/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/resnet/modeling_resnet.py#L322"}}),$e=new lt({props:{name:"forward",anchor:"transformers.ResNetForImageClassification.forward",parameters:[{name:"pixel_values",val:": Tensor = None"},{name:"labels",val:": Tensor = None"},{name:"output_hidden_states",val:": bool = None"},{name:"return_dict",val:": bool = None"}],parametersDescription:[{anchor:"transformers.ResNetForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/pr_16782/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. See
<code>AutoFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.ResNetForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ResNetForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16782/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ResNetForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16782/src/transformers/models/resnet/modeling_resnet.py#L335",returnDescription:`
<p>A <code>transformers.modeling_outputs.ImageClassifierOutputWithNoAttention</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16782/en/model_doc/resnet#transformers.ResNetConfig"
>ResNetConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each stage) of shape <code>(batch_size, num_channels, height, width)</code>. Hidden-states (also
called feature maps) of the model at the output of each stage.</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_outputs.ImageClassifierOutputWithNoAttention</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Q=new ta({props:{$$slots:{default:[ca]},$$scope:{ctx:Ce}}}),Ne=new co({props:{code:`from transformers import AutoFeatureExtractor, ResNetForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("microsoft/resnet-50")
model = ResNetForImageClassification.from_pretrained("microsoft/resnet-50")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, ResNetForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;microsoft/resnet-50&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ResNetForImageClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/resnet-50&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tiger cat`}}),{c(){p=o("meta"),k=d(),m=o("h1"),_=o("a"),T=o("span"),b(u.$$.fragment),g=d(),A=o("span"),Pt=n("ResNet"),dt=d(),S=o("h2"),G=o("a"),Ve=o("span"),b(ee.$$.fragment),qt=d(),He=o("span"),Ot=n("Overview"),ht=d(),v=o("p"),St=n("The ResNet model was proposed in "),te=o("a"),Dt=n("Deep Residual Learning for Image Recognition"),zt=n(" by Kaiming He, Xiangyu Zhang, Shaoqing Ren and Jian Sun. Our implementation follows the small changes made by "),se=o("a"),Lt=n("Nvidia"),Wt=n(", we apply the "),Ue=o("code"),Vt=n("stride=2"),Ht=n(" for downsampling in bottleneck\u2019s "),Ge=o("code"),Ut=n("3x3"),Gt=n(" conv and not in the first "),Be=o("code"),Bt=n("1x1"),Jt=n(". This is generally known as \u201CResNet v1.5\u201D."),ft=d(),Ee=o("p"),Kt=n("ResNet introduced residual connections, they allow to train networks with an unseen number of layers (up to 1000). ResNet won the 2015 ILSVRC & COCO competition, one important milestone in deep computer vision."),pt=d(),xe=o("p"),Xt=n("The abstract from the paper is the following:"),mt=d(),Te=o("p"),Je=o("em"),Zt=n(`Deeper neural networks are more difficult to train. We present a residual learning framework to ease the training of networks that are substantially deeper than those used previously. We explicitly reformulate the layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions. We provide comprehensive empirical evidence showing that these residual networks are easier to optimize, and can gain accuracy from considerably increased depth. On the ImageNet dataset we evaluate residual nets with a depth of up to 152 layers---8x deeper than VGG nets but still having lower complexity. An ensemble of these residual nets achieves 3.57% error on the ImageNet test set. This result won the 1st place on the ILSVRC 2015 classification task. We also present analysis on CIFAR-10 with 100 and 1000 layers.
The depth of representations is of central importance for many visual recognition tasks. Solely due to our extremely deep representations, we obtain a 28% relative improvement on the COCO object detection dataset. Deep residual nets are foundations of our submissions to ILSVRC & COCO 2015 competitions, where we also won the 1st places on the tasks of ImageNet detection, ImageNet localization, COCO detection, and COCO segmentation.`),ut=d(),je=o("p"),Qt=n("Tips:"),gt=d(),ke=o("ul"),oe=o("li"),Yt=n("One can use "),Ie=o("a"),es=n("AutoFeatureExtractor"),ts=n(" to prepare images for the model."),_t=d(),B=o("p"),ss=n("The figure below illustrates the architecture of ResNet. Taken from the "),ae=o("a"),os=n("original paper"),as=n("."),vt=d(),re=o("img"),wt=d(),M=o("p"),rs=n("This model was contributed by "),ne=o("a"),ns=n("Francesco"),is=n(". The original code can be found "),ie=o("a"),ls=n("here"),cs=n("."),bt=d(),D=o("h2"),J=o("a"),Ke=o("span"),b(le.$$.fragment),ds=d(),Xe=o("span"),hs=n("ResNetConfig"),yt=d(),w=o("div"),b(ce.$$.fragment),fs=d(),z=o("p"),ps=n("This is the configuration class to store the configuration of a "),Ae=o("a"),ms=n("ResNetModel"),us=n(`. It is used to instantiate an
ResNet model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the
`),de=o("a"),gs=n("resnet-50"),_s=n(" architecture."),vs=d(),L=o("p"),ws=n("Configuration objects inherit from "),Fe=o("a"),bs=n("PretrainedConfig"),ys=n(` and can be used to control the model outputs. Read the
documentation from `),Me=o("a"),$s=n("PretrainedConfig"),Ns=n(" for more information."),Rs=d(),Ze=o("p"),Cs=n("Example:"),Es=d(),b(he.$$.fragment),$t=d(),W=o("h2"),K=o("a"),Qe=o("span"),b(fe.$$.fragment),xs=d(),Ye=o("span"),Ts=n("ResNetModel"),Nt=d(),F=o("div"),b(pe.$$.fragment),js=d(),me=o("p"),ks=n(`The bare ResNet model outputting raw features without any specific head on top.
This model is a PyTorch `),ue=o("a"),Is=n("torch.nn.Module"),As=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fs=d(),E=o("div"),b(ge.$$.fragment),Ms=d(),V=o("p"),Ps=n("The "),Pe=o("a"),qs=n("ResNetModel"),Os=n(" forward method, overrides the "),et=o("code"),Ss=n("__call__"),Ds=n(" special method."),zs=d(),b(X.$$.fragment),Ls=d(),tt=o("p"),Ws=n("Example:"),Vs=d(),b(_e.$$.fragment),Rt=d(),H=o("h2"),Z=o("a"),st=o("span"),b(ve.$$.fragment),Hs=d(),ot=o("span"),Us=n("ResNetForImageClassification"),Ct=d(),j=o("div"),b(we.$$.fragment),Gs=d(),at=o("p"),Bs=n(`ResNet Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),Js=d(),be=o("p"),Ks=n("This model is a PyTorch "),ye=o("a"),Xs=n("torch.nn.Module"),Zs=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qs=d(),x=o("div"),b($e.$$.fragment),Ys=d(),U=o("p"),eo=n("The "),qe=o("a"),to=n("ResNetForImageClassification"),so=n(" forward method, overrides the "),rt=o("code"),oo=n("__call__"),ao=n(" special method."),ro=d(),b(Q.$$.fragment),no=d(),nt=o("p"),io=n("Example:"),lo=d(),b(Ne.$$.fragment),this.h()},l(t){const c=ra('[data-svelte="svelte-1phssyn"]',document.head);p=a(c,"META",{name:!0,content:!0}),c.forEach(s),k=h(t),m=a(t,"H1",{class:!0});var Re=r(m);_=a(Re,"A",{id:!0,class:!0,href:!0});var it=r(_);T=a(it,"SPAN",{});var fo=r(T);y(u.$$.fragment,fo),fo.forEach(s),it.forEach(s),g=h(Re),A=a(Re,"SPAN",{});var po=r(A);Pt=i(po,"ResNet"),po.forEach(s),Re.forEach(s),dt=h(t),S=a(t,"H2",{class:!0});var xt=r(S);G=a(xt,"A",{id:!0,class:!0,href:!0});var mo=r(G);Ve=a(mo,"SPAN",{});var uo=r(Ve);y(ee.$$.fragment,uo),uo.forEach(s),mo.forEach(s),qt=h(xt),He=a(xt,"SPAN",{});var go=r(He);Ot=i(go,"Overview"),go.forEach(s),xt.forEach(s),ht=h(t),v=a(t,"P",{});var I=r(v);St=i(I,"The ResNet model was proposed in "),te=a(I,"A",{href:!0,rel:!0});var _o=r(te);Dt=i(_o,"Deep Residual Learning for Image Recognition"),_o.forEach(s),zt=i(I," by Kaiming He, Xiangyu Zhang, Shaoqing Ren and Jian Sun. Our implementation follows the small changes made by "),se=a(I,"A",{href:!0,rel:!0});var vo=r(se);Lt=i(vo,"Nvidia"),vo.forEach(s),Wt=i(I,", we apply the "),Ue=a(I,"CODE",{});var wo=r(Ue);Vt=i(wo,"stride=2"),wo.forEach(s),Ht=i(I," for downsampling in bottleneck\u2019s "),Ge=a(I,"CODE",{});var bo=r(Ge);Ut=i(bo,"3x3"),bo.forEach(s),Gt=i(I," conv and not in the first "),Be=a(I,"CODE",{});var yo=r(Be);Bt=i(yo,"1x1"),yo.forEach(s),Jt=i(I,". This is generally known as \u201CResNet v1.5\u201D."),I.forEach(s),ft=h(t),Ee=a(t,"P",{});var $o=r(Ee);Kt=i($o,"ResNet introduced residual connections, they allow to train networks with an unseen number of layers (up to 1000). ResNet won the 2015 ILSVRC & COCO competition, one important milestone in deep computer vision."),$o.forEach(s),pt=h(t),xe=a(t,"P",{});var No=r(xe);Xt=i(No,"The abstract from the paper is the following:"),No.forEach(s),mt=h(t),Te=a(t,"P",{});var Ro=r(Te);Je=a(Ro,"EM",{});var Co=r(Je);Zt=i(Co,`Deeper neural networks are more difficult to train. We present a residual learning framework to ease the training of networks that are substantially deeper than those used previously. We explicitly reformulate the layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions. We provide comprehensive empirical evidence showing that these residual networks are easier to optimize, and can gain accuracy from considerably increased depth. On the ImageNet dataset we evaluate residual nets with a depth of up to 152 layers---8x deeper than VGG nets but still having lower complexity. An ensemble of these residual nets achieves 3.57% error on the ImageNet test set. This result won the 1st place on the ILSVRC 2015 classification task. We also present analysis on CIFAR-10 with 100 and 1000 layers.
The depth of representations is of central importance for many visual recognition tasks. Solely due to our extremely deep representations, we obtain a 28% relative improvement on the COCO object detection dataset. Deep residual nets are foundations of our submissions to ILSVRC & COCO 2015 competitions, where we also won the 1st places on the tasks of ImageNet detection, ImageNet localization, COCO detection, and COCO segmentation.`),Co.forEach(s),Ro.forEach(s),ut=h(t),je=a(t,"P",{});var Eo=r(je);Qt=i(Eo,"Tips:"),Eo.forEach(s),gt=h(t),ke=a(t,"UL",{});var xo=r(ke);oe=a(xo,"LI",{});var Tt=r(oe);Yt=i(Tt,"One can use "),Ie=a(Tt,"A",{href:!0});var To=r(Ie);es=i(To,"AutoFeatureExtractor"),To.forEach(s),ts=i(Tt," to prepare images for the model."),Tt.forEach(s),xo.forEach(s),_t=h(t),B=a(t,"P",{});var jt=r(B);ss=i(jt,"The figure below illustrates the architecture of ResNet. Taken from the "),ae=a(jt,"A",{href:!0,rel:!0});var jo=r(ae);os=i(jo,"original paper"),jo.forEach(s),as=i(jt,"."),jt.forEach(s),vt=h(t),re=a(t,"IMG",{width:!0,src:!0}),wt=h(t),M=a(t,"P",{});var Oe=r(M);rs=i(Oe,"This model was contributed by "),ne=a(Oe,"A",{href:!0,rel:!0});var ko=r(ne);ns=i(ko,"Francesco"),ko.forEach(s),is=i(Oe,". The original code can be found "),ie=a(Oe,"A",{href:!0,rel:!0});var Io=r(ie);ls=i(Io,"here"),Io.forEach(s),cs=i(Oe,"."),Oe.forEach(s),bt=h(t),D=a(t,"H2",{class:!0});var kt=r(D);J=a(kt,"A",{id:!0,class:!0,href:!0});var Ao=r(J);Ke=a(Ao,"SPAN",{});var Fo=r(Ke);y(le.$$.fragment,Fo),Fo.forEach(s),Ao.forEach(s),ds=h(kt),Xe=a(kt,"SPAN",{});var Mo=r(Xe);hs=i(Mo,"ResNetConfig"),Mo.forEach(s),kt.forEach(s),yt=h(t),w=a(t,"DIV",{class:!0});var P=r(w);y(ce.$$.fragment,P),fs=h(P),z=a(P,"P",{});var Se=r(z);ps=i(Se,"This is the configuration class to store the configuration of a "),Ae=a(Se,"A",{href:!0});var Po=r(Ae);ms=i(Po,"ResNetModel"),Po.forEach(s),us=i(Se,`. It is used to instantiate an
ResNet model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the
`),de=a(Se,"A",{href:!0,rel:!0});var qo=r(de);gs=i(qo,"resnet-50"),qo.forEach(s),_s=i(Se," architecture."),Se.forEach(s),vs=h(P),L=a(P,"P",{});var De=r(L);ws=i(De,"Configuration objects inherit from "),Fe=a(De,"A",{href:!0});var Oo=r(Fe);bs=i(Oo,"PretrainedConfig"),Oo.forEach(s),ys=i(De,` and can be used to control the model outputs. Read the
documentation from `),Me=a(De,"A",{href:!0});var So=r(Me);$s=i(So,"PretrainedConfig"),So.forEach(s),Ns=i(De," for more information."),De.forEach(s),Rs=h(P),Ze=a(P,"P",{});var Do=r(Ze);Cs=i(Do,"Example:"),Do.forEach(s),Es=h(P),y(he.$$.fragment,P),P.forEach(s),$t=h(t),W=a(t,"H2",{class:!0});var It=r(W);K=a(It,"A",{id:!0,class:!0,href:!0});var zo=r(K);Qe=a(zo,"SPAN",{});var Lo=r(Qe);y(fe.$$.fragment,Lo),Lo.forEach(s),zo.forEach(s),xs=h(It),Ye=a(It,"SPAN",{});var Wo=r(Ye);Ts=i(Wo,"ResNetModel"),Wo.forEach(s),It.forEach(s),Nt=h(t),F=a(t,"DIV",{class:!0});var ze=r(F);y(pe.$$.fragment,ze),js=h(ze),me=a(ze,"P",{});var At=r(me);ks=i(At,`The bare ResNet model outputting raw features without any specific head on top.
This model is a PyTorch `),ue=a(At,"A",{href:!0,rel:!0});var Vo=r(ue);Is=i(Vo,"torch.nn.Module"),Vo.forEach(s),As=i(At,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),At.forEach(s),Fs=h(ze),E=a(ze,"DIV",{class:!0});var q=r(E);y(ge.$$.fragment,q),Ms=h(q),V=a(q,"P",{});var Le=r(V);Ps=i(Le,"The "),Pe=a(Le,"A",{href:!0});var Ho=r(Pe);qs=i(Ho,"ResNetModel"),Ho.forEach(s),Os=i(Le," forward method, overrides the "),et=a(Le,"CODE",{});var Uo=r(et);Ss=i(Uo,"__call__"),Uo.forEach(s),Ds=i(Le," special method."),Le.forEach(s),zs=h(q),y(X.$$.fragment,q),Ls=h(q),tt=a(q,"P",{});var Go=r(tt);Ws=i(Go,"Example:"),Go.forEach(s),Vs=h(q),y(_e.$$.fragment,q),q.forEach(s),ze.forEach(s),Rt=h(t),H=a(t,"H2",{class:!0});var Ft=r(H);Z=a(Ft,"A",{id:!0,class:!0,href:!0});var Bo=r(Z);st=a(Bo,"SPAN",{});var Jo=r(st);y(ve.$$.fragment,Jo),Jo.forEach(s),Bo.forEach(s),Hs=h(Ft),ot=a(Ft,"SPAN",{});var Ko=r(ot);Us=i(Ko,"ResNetForImageClassification"),Ko.forEach(s),Ft.forEach(s),Ct=h(t),j=a(t,"DIV",{class:!0});var Y=r(j);y(we.$$.fragment,Y),Gs=h(Y),at=a(Y,"P",{});var Xo=r(at);Bs=i(Xo,`ResNet Model with an image classification head on top (a linear layer on top of the pooled features), e.g. for
ImageNet.`),Xo.forEach(s),Js=h(Y),be=a(Y,"P",{});var Mt=r(be);Ks=i(Mt,"This model is a PyTorch "),ye=a(Mt,"A",{href:!0,rel:!0});var Zo=r(ye);Xs=i(Zo,"torch.nn.Module"),Zo.forEach(s),Zs=i(Mt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Mt.forEach(s),Qs=h(Y),x=a(Y,"DIV",{class:!0});var O=r(x);y($e.$$.fragment,O),Ys=h(O),U=a(O,"P",{});var We=r(U);eo=i(We,"The "),qe=a(We,"A",{href:!0});var Qo=r(qe);to=i(Qo,"ResNetForImageClassification"),Qo.forEach(s),so=i(We," forward method, overrides the "),rt=a(We,"CODE",{});var Yo=r(rt);oo=i(Yo,"__call__"),Yo.forEach(s),ao=i(We," special method."),We.forEach(s),ro=h(O),y(Q.$$.fragment,O),no=h(O),nt=a(O,"P",{});var ea=r(nt);io=i(ea,"Example:"),ea.forEach(s),lo=h(O),y(Ne.$$.fragment,O),O.forEach(s),Y.forEach(s),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(ha)),l(_,"id","resnet"),l(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(_,"href","#resnet"),l(m,"class","relative group"),l(G,"id","overview"),l(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(G,"href","#overview"),l(S,"class","relative group"),l(te,"href","https://arxiv.org/abs/1512.03385"),l(te,"rel","nofollow"),l(se,"href","https://catalog.ngc.nvidia.com/orgs/nvidia/resources/resnet_50_v1_5_for_pytorch"),l(se,"rel","nofollow"),l(Ie,"href","/docs/transformers/pr_16782/en/model_doc/auto#transformers.AutoFeatureExtractor"),l(ae,"href","https://arxiv.org/abs/1512.03385"),l(ae,"rel","nofollow"),l(re,"width","600"),na(re.src,ho="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/resnet_architecture.png")||l(re,"src",ho),l(ne,"href","https://huggingface.co/Francesco"),l(ne,"rel","nofollow"),l(ie,"href","https://github.com/KaimingHe/deep-residual-networks"),l(ie,"rel","nofollow"),l(J,"id","transformers.ResNetConfig"),l(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(J,"href","#transformers.ResNetConfig"),l(D,"class","relative group"),l(Ae,"href","/docs/transformers/pr_16782/en/model_doc/resnet#transformers.ResNetModel"),l(de,"href","https://huggingface.co/microsoft/resnet-50"),l(de,"rel","nofollow"),l(Fe,"href","/docs/transformers/pr_16782/en/main_classes/configuration#transformers.PretrainedConfig"),l(Me,"href","/docs/transformers/pr_16782/en/main_classes/configuration#transformers.PretrainedConfig"),l(w,"class","docstring"),l(K,"id","transformers.ResNetModel"),l(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(K,"href","#transformers.ResNetModel"),l(W,"class","relative group"),l(ue,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ue,"rel","nofollow"),l(Pe,"href","/docs/transformers/pr_16782/en/model_doc/resnet#transformers.ResNetModel"),l(E,"class","docstring"),l(F,"class","docstring"),l(Z,"id","transformers.ResNetForImageClassification"),l(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Z,"href","#transformers.ResNetForImageClassification"),l(H,"class","relative group"),l(ye,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ye,"rel","nofollow"),l(qe,"href","/docs/transformers/pr_16782/en/model_doc/resnet#transformers.ResNetForImageClassification"),l(x,"class","docstring"),l(j,"class","docstring")},m(t,c){e(document.head,p),f(t,k,c),f(t,m,c),e(m,_),e(_,T),$(u,T,null),e(m,g),e(m,A),e(A,Pt),f(t,dt,c),f(t,S,c),e(S,G),e(G,Ve),$(ee,Ve,null),e(S,qt),e(S,He),e(He,Ot),f(t,ht,c),f(t,v,c),e(v,St),e(v,te),e(te,Dt),e(v,zt),e(v,se),e(se,Lt),e(v,Wt),e(v,Ue),e(Ue,Vt),e(v,Ht),e(v,Ge),e(Ge,Ut),e(v,Gt),e(v,Be),e(Be,Bt),e(v,Jt),f(t,ft,c),f(t,Ee,c),e(Ee,Kt),f(t,pt,c),f(t,xe,c),e(xe,Xt),f(t,mt,c),f(t,Te,c),e(Te,Je),e(Je,Zt),f(t,ut,c),f(t,je,c),e(je,Qt),f(t,gt,c),f(t,ke,c),e(ke,oe),e(oe,Yt),e(oe,Ie),e(Ie,es),e(oe,ts),f(t,_t,c),f(t,B,c),e(B,ss),e(B,ae),e(ae,os),e(B,as),f(t,vt,c),f(t,re,c),f(t,wt,c),f(t,M,c),e(M,rs),e(M,ne),e(ne,ns),e(M,is),e(M,ie),e(ie,ls),e(M,cs),f(t,bt,c),f(t,D,c),e(D,J),e(J,Ke),$(le,Ke,null),e(D,ds),e(D,Xe),e(Xe,hs),f(t,yt,c),f(t,w,c),$(ce,w,null),e(w,fs),e(w,z),e(z,ps),e(z,Ae),e(Ae,ms),e(z,us),e(z,de),e(de,gs),e(z,_s),e(w,vs),e(w,L),e(L,ws),e(L,Fe),e(Fe,bs),e(L,ys),e(L,Me),e(Me,$s),e(L,Ns),e(w,Rs),e(w,Ze),e(Ze,Cs),e(w,Es),$(he,w,null),f(t,$t,c),f(t,W,c),e(W,K),e(K,Qe),$(fe,Qe,null),e(W,xs),e(W,Ye),e(Ye,Ts),f(t,Nt,c),f(t,F,c),$(pe,F,null),e(F,js),e(F,me),e(me,ks),e(me,ue),e(ue,Is),e(me,As),e(F,Fs),e(F,E),$(ge,E,null),e(E,Ms),e(E,V),e(V,Ps),e(V,Pe),e(Pe,qs),e(V,Os),e(V,et),e(et,Ss),e(V,Ds),e(E,zs),$(X,E,null),e(E,Ls),e(E,tt),e(tt,Ws),e(E,Vs),$(_e,E,null),f(t,Rt,c),f(t,H,c),e(H,Z),e(Z,st),$(ve,st,null),e(H,Hs),e(H,ot),e(ot,Us),f(t,Ct,c),f(t,j,c),$(we,j,null),e(j,Gs),e(j,at),e(at,Bs),e(j,Js),e(j,be),e(be,Ks),e(be,ye),e(ye,Xs),e(be,Zs),e(j,Qs),e(j,x),$($e,x,null),e(x,Ys),e(x,U),e(U,eo),e(U,qe),e(qe,to),e(U,so),e(U,rt),e(rt,oo),e(U,ao),e(x,ro),$(Q,x,null),e(x,no),e(x,nt),e(nt,io),e(x,lo),$(Ne,x,null),Et=!0},p(t,[c]){const Re={};c&2&&(Re.$$scope={dirty:c,ctx:t}),X.$set(Re);const it={};c&2&&(it.$$scope={dirty:c,ctx:t}),Q.$set(it)},i(t){Et||(N(u.$$.fragment,t),N(ee.$$.fragment,t),N(le.$$.fragment,t),N(ce.$$.fragment,t),N(he.$$.fragment,t),N(fe.$$.fragment,t),N(pe.$$.fragment,t),N(ge.$$.fragment,t),N(X.$$.fragment,t),N(_e.$$.fragment,t),N(ve.$$.fragment,t),N(we.$$.fragment,t),N($e.$$.fragment,t),N(Q.$$.fragment,t),N(Ne.$$.fragment,t),Et=!0)},o(t){R(u.$$.fragment,t),R(ee.$$.fragment,t),R(le.$$.fragment,t),R(ce.$$.fragment,t),R(he.$$.fragment,t),R(fe.$$.fragment,t),R(pe.$$.fragment,t),R(ge.$$.fragment,t),R(X.$$.fragment,t),R(_e.$$.fragment,t),R(ve.$$.fragment,t),R(we.$$.fragment,t),R($e.$$.fragment,t),R(Q.$$.fragment,t),R(Ne.$$.fragment,t),Et=!1},d(t){s(p),t&&s(k),t&&s(m),C(u),t&&s(dt),t&&s(S),C(ee),t&&s(ht),t&&s(v),t&&s(ft),t&&s(Ee),t&&s(pt),t&&s(xe),t&&s(mt),t&&s(Te),t&&s(ut),t&&s(je),t&&s(gt),t&&s(ke),t&&s(_t),t&&s(B),t&&s(vt),t&&s(re),t&&s(wt),t&&s(M),t&&s(bt),t&&s(D),C(le),t&&s(yt),t&&s(w),C(ce),C(he),t&&s($t),t&&s(W),C(fe),t&&s(Nt),t&&s(F),C(pe),C(ge),C(X),C(_e),t&&s(Rt),t&&s(H),C(ve),t&&s(Ct),t&&s(j),C(we),C($e),C(Q),C(Ne)}}}const ha={local:"resnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.ResNetConfig",title:"ResNetConfig"},{local:"transformers.ResNetModel",title:"ResNetModel"},{local:"transformers.ResNetForImageClassification",title:"ResNetForImageClassification"}],title:"ResNet"};function fa(Ce){return ia(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class va extends sa{constructor(p){super();oa(this,p,fa,da,aa,{})}}export{va as default,ha as metadata};
