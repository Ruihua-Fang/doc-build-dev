import{S as Dx,i as Nx,s as Sx,e as n,k as m,w as b,t as a,M as Ox,c as r,d as o,m as h,a as s,x as y,h as i,b as u,F as e,g as k,y as w,q as T,o as $,B as x,v as Wx,L as le}from"../../chunks/vendor-6b77c823.js";import{T as Re}from"../../chunks/Tip-39098574.js";import{D as N}from"../../chunks/Docstring-1088f2fb.js";import{C as de}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ze}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as ie}from"../../chunks/ExampleCodeBlock-5212b321.js";function Ux(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerModel, RoFormerConfig

# Initializing a RoFormer junnyu/roformer_chinese_base style configuration
configuration = RoFormerConfig()

# Initializing a model from the junnyu/roformer_chinese_base style configuration
model = RoFormerModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerModel, RoFormerConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a RoFormer junnyu/roformer_chinese_base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = RoFormerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the junnyu/roformer_chinese_base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Qx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
tokenizer.tokenize("\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002&quot;</span>)
<span class="hljs-comment"># [&#x27;\u4ECA&#x27;, &#x27;\u5929&#x27;, &#x27;\u5929&#x27;, &#x27;\u6C14&#x27;, &#x27;\u975E\u5E38&#x27;, &#x27;\u597D&#x27;, &#x27;\u3002&#x27;]</span>`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Hx(R){let d,g,c,p,_;return p=new de({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),g=a("sequence pair mask has the following format:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"sequence pair mask has the following format:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Vx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizerFast

tokenizer = RoFormerTokenizerFast.from_pretrained("junnyu/roformer_chinese_base")
tokenizer.tokenize("\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizerFast.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002&quot;</span>)
<span class="hljs-comment"># [&#x27;\u4ECA&#x27;, &#x27;\u5929&#x27;, &#x27;\u5929&#x27;, &#x27;\u6C14&#x27;, &#x27;\u975E\u5E38&#x27;, &#x27;\u597D&#x27;, &#x27;\u3002&#x27;]</span>`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Bx(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function Kx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerModel
import torch

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerModel.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerModel.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Jx(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function Gx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForCausalLM, RoFormerConfig
import torch

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
config = RoFormerConfig.from_pretrained("junnyu/roformer_chinese_base")
config.is_decoder = True
model = RoFormerForCausalLM.from_pretrained("junnyu/roformer_chinese_base", config=config)

inputs = tokenizer("\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForCausalLM, RoFormerConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = RoFormerConfig.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForCausalLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Xx(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function Yx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForMaskedLM
import torch

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerForMaskedLM.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Zx(R){let d,g;return d=new de({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:le,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function eR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function oR(R){let d,g,c,p,_;return p=new de({props:{code:`import torch
from transformers import RoFormerTokenizer, RoFormerForSequenceClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),g=a("Example of single-label classification:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example of single-label classification:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function tR(R){let d,g;return d=new de({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:le,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function nR(R){let d,g,c,p,_;return p=new de({props:{code:`import torch
from transformers import RoFormerTokenizer, RoFormerForSequenceClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),g=a("Example of multi-label classification:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example of multi-label classification:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function rR(R){let d,g;return d=new de({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RoFormerForSequenceClassification.from_pretrained(
    "junnyu/roformer_chinese_base", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){b(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:le,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function sR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function aR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForMultipleChoice
import torch

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerForMultipleChoice.from_pretrained("junnyu/roformer_chinese_base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function iR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function lR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForTokenClassification
import torch

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerForTokenClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="pt"
)

with torch.no_grad():
    logits = model(**inputs).logits

predicted_token_class_ids = logits.argmax(-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t.item()] for t in predicted_token_class_ids[0]]
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = logits.argmax(-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t.item()] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function dR(R){let d,g;return d=new de({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:le,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function cR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function pR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForQuestionAnswering
import torch

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerForQuestionAnswering.from_pretrained("junnyu/roformer_chinese_base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function mR(R){let d,g;return d=new de({props:{code:`# target is "nice puppet"
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
`}}),{c(){b(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:le,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function hR(R){let d,g,c,p,_,l,f,M,ue,J,z,Z,S,ee,ge,O,_e,pe,K,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,I,te,V,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=m(),z=n("p"),Z=a("This second option is useful when using "),S=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),_e=a("model(inputs)"),pe=a("."),K=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),I=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(v),p=r(v,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var ye=s(M);ue=i(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(o),Y.forEach(o),J=h(v),z=r(v,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),S=r(P,"CODE",{});var xe=s(S);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(P,"CODE",{});var Te=s(O);_e=i(Te,"model(inputs)"),Te.forEach(o),pe=i(P,"."),P.forEach(o),K=h(v),L=r(v,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(v),j=r(v,"UL",{});var A=s(j);q=r(A,"LI",{});var B=s(q);ne=i(B,"a single Tensor with "),Q=r(B,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(B," only and nothing else: "),W=r(B,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),B.forEach(o),he=h(A),C=r(A,"LI",{});var D=s(C);Fe=i(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(D,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(D," or "),H=r(D,"CODE",{});var we=s(H);fe=i(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(o),D.forEach(o),X=h(A),I=r(A,"LI",{});var be=s(I);te=i(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(be,"CODE",{});var $e=s(V);ve=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),be.forEach(o),A.forEach(o)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(v,J,E),k(v,z,E),e(z,Z),e(z,S),e(S,ee),e(z,ge),e(z,O),e(O,_e),e(z,pe),k(v,K,E),k(v,L,E),e(L,oe),k(v,G,E),k(v,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,I),e(I,te),e(I,V),e(V,ve)},d(v){v&&o(d),v&&o(c),v&&o(p),v&&o(J),v&&o(z),v&&o(K),v&&o(L),v&&o(G),v&&o(j)}}}function fR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function uR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerModel
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerModel.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerModel.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function gR(R){let d,g,c,p,_,l,f,M,ue,J,z,Z,S,ee,ge,O,_e,pe,K,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,I,te,V,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=m(),z=n("p"),Z=a("This second option is useful when using "),S=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),_e=a("model(inputs)"),pe=a("."),K=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),I=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(v),p=r(v,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var ye=s(M);ue=i(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(o),Y.forEach(o),J=h(v),z=r(v,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),S=r(P,"CODE",{});var xe=s(S);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(P,"CODE",{});var Te=s(O);_e=i(Te,"model(inputs)"),Te.forEach(o),pe=i(P,"."),P.forEach(o),K=h(v),L=r(v,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(v),j=r(v,"UL",{});var A=s(j);q=r(A,"LI",{});var B=s(q);ne=i(B,"a single Tensor with "),Q=r(B,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(B," only and nothing else: "),W=r(B,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),B.forEach(o),he=h(A),C=r(A,"LI",{});var D=s(C);Fe=i(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(D,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(D," or "),H=r(D,"CODE",{});var we=s(H);fe=i(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(o),D.forEach(o),X=h(A),I=r(A,"LI",{});var be=s(I);te=i(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(be,"CODE",{});var $e=s(V);ve=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),be.forEach(o),A.forEach(o)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(v,J,E),k(v,z,E),e(z,Z),e(z,S),e(S,ee),e(z,ge),e(z,O),e(O,_e),e(z,pe),k(v,K,E),k(v,L,E),e(L,oe),k(v,G,E),k(v,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,I),e(I,te),e(I,V),e(V,ve)},d(v){v&&o(d),v&&o(c),v&&o(p),v&&o(J),v&&o(z),v&&o(K),v&&o(L),v&&o(G),v&&o(j)}}}function _R(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function kR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForMaskedLM
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerForMaskedLM.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function FR(R){let d,g;return d=new de({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:le,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function vR(R){let d,g,c,p,_,l,f,M,ue,J,z,Z,S,ee,ge,O,_e,pe,K,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,I,te,V,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=m(),z=n("p"),Z=a("This second option is useful when using "),S=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),_e=a("model(inputs)"),pe=a("."),K=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),I=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(v),p=r(v,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var ye=s(M);ue=i(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(o),Y.forEach(o),J=h(v),z=r(v,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),S=r(P,"CODE",{});var xe=s(S);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(P,"CODE",{});var Te=s(O);_e=i(Te,"model(inputs)"),Te.forEach(o),pe=i(P,"."),P.forEach(o),K=h(v),L=r(v,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(v),j=r(v,"UL",{});var A=s(j);q=r(A,"LI",{});var B=s(q);ne=i(B,"a single Tensor with "),Q=r(B,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(B," only and nothing else: "),W=r(B,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),B.forEach(o),he=h(A),C=r(A,"LI",{});var D=s(C);Fe=i(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(D,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(D," or "),H=r(D,"CODE",{});var we=s(H);fe=i(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(o),D.forEach(o),X=h(A),I=r(A,"LI",{});var be=s(I);te=i(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(be,"CODE",{});var $e=s(V);ve=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),be.forEach(o),A.forEach(o)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(v,J,E),k(v,z,E),e(z,Z),e(z,S),e(S,ee),e(z,ge),e(z,O),e(O,_e),e(z,pe),k(v,K,E),k(v,L,E),e(L,oe),k(v,G,E),k(v,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,I),e(I,te),e(I,V),e(V,ve)},d(v){v&&o(d),v&&o(c),v&&o(p),v&&o(J),v&&o(z),v&&o(K),v&&o(L),v&&o(G),v&&o(j)}}}function bR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForCausalLM
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerForCausalLM.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForCausalLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function yR(R){let d,g,c,p,_,l,f,M,ue,J,z,Z,S,ee,ge,O,_e,pe,K,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,I,te,V,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=m(),z=n("p"),Z=a("This second option is useful when using "),S=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),_e=a("model(inputs)"),pe=a("."),K=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),I=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(v),p=r(v,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var ye=s(M);ue=i(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(o),Y.forEach(o),J=h(v),z=r(v,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),S=r(P,"CODE",{});var xe=s(S);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(P,"CODE",{});var Te=s(O);_e=i(Te,"model(inputs)"),Te.forEach(o),pe=i(P,"."),P.forEach(o),K=h(v),L=r(v,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(v),j=r(v,"UL",{});var A=s(j);q=r(A,"LI",{});var B=s(q);ne=i(B,"a single Tensor with "),Q=r(B,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(B," only and nothing else: "),W=r(B,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),B.forEach(o),he=h(A),C=r(A,"LI",{});var D=s(C);Fe=i(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(D,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(D," or "),H=r(D,"CODE",{});var we=s(H);fe=i(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(o),D.forEach(o),X=h(A),I=r(A,"LI",{});var be=s(I);te=i(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(be,"CODE",{});var $e=s(V);ve=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),be.forEach(o),A.forEach(o)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(v,J,E),k(v,z,E),e(z,Z),e(z,S),e(S,ee),e(z,ge),e(z,O),e(O,_e),e(z,pe),k(v,K,E),k(v,L,E),e(L,oe),k(v,G,E),k(v,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,I),e(I,te),e(I,V),e(V,ve)},d(v){v&&o(d),v&&o(c),v&&o(p),v&&o(J),v&&o(z),v&&o(K),v&&o(L),v&&o(G),v&&o(j)}}}function wR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function TR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForSequenceClassification
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function $R(R){let d,g;return d=new de({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFRoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:le,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function xR(R){let d,g,c,p,_,l,f,M,ue,J,z,Z,S,ee,ge,O,_e,pe,K,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,I,te,V,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=m(),z=n("p"),Z=a("This second option is useful when using "),S=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),_e=a("model(inputs)"),pe=a("."),K=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),I=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(v),p=r(v,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var ye=s(M);ue=i(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(o),Y.forEach(o),J=h(v),z=r(v,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),S=r(P,"CODE",{});var xe=s(S);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(P,"CODE",{});var Te=s(O);_e=i(Te,"model(inputs)"),Te.forEach(o),pe=i(P,"."),P.forEach(o),K=h(v),L=r(v,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(v),j=r(v,"UL",{});var A=s(j);q=r(A,"LI",{});var B=s(q);ne=i(B,"a single Tensor with "),Q=r(B,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(B," only and nothing else: "),W=r(B,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),B.forEach(o),he=h(A),C=r(A,"LI",{});var D=s(C);Fe=i(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(D,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(D," or "),H=r(D,"CODE",{});var we=s(H);fe=i(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(o),D.forEach(o),X=h(A),I=r(A,"LI",{});var be=s(I);te=i(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(be,"CODE",{});var $e=s(V);ve=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),be.forEach(o),A.forEach(o)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(v,J,E),k(v,z,E),e(z,Z),e(z,S),e(S,ee),e(z,ge),e(z,O),e(O,_e),e(z,pe),k(v,K,E),k(v,L,E),e(L,oe),k(v,G,E),k(v,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,I),e(I,te),e(I,V),e(V,ve)},d(v){v&&o(d),v&&o(c),v&&o(p),v&&o(J),v&&o(z),v&&o(K),v&&o(L),v&&o(G),v&&o(j)}}}function RR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function MR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForMultipleChoice
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerForMultipleChoice.from_pretrained("junnyu/roformer_chinese_base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function ER(R){let d,g,c,p,_,l,f,M,ue,J,z,Z,S,ee,ge,O,_e,pe,K,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,I,te,V,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=m(),z=n("p"),Z=a("This second option is useful when using "),S=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),_e=a("model(inputs)"),pe=a("."),K=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),I=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(v),p=r(v,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var ye=s(M);ue=i(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(o),Y.forEach(o),J=h(v),z=r(v,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),S=r(P,"CODE",{});var xe=s(S);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(P,"CODE",{});var Te=s(O);_e=i(Te,"model(inputs)"),Te.forEach(o),pe=i(P,"."),P.forEach(o),K=h(v),L=r(v,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(v),j=r(v,"UL",{});var A=s(j);q=r(A,"LI",{});var B=s(q);ne=i(B,"a single Tensor with "),Q=r(B,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(B," only and nothing else: "),W=r(B,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),B.forEach(o),he=h(A),C=r(A,"LI",{});var D=s(C);Fe=i(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(D,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(D," or "),H=r(D,"CODE",{});var we=s(H);fe=i(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(o),D.forEach(o),X=h(A),I=r(A,"LI",{});var be=s(I);te=i(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(be,"CODE",{});var $e=s(V);ve=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),be.forEach(o),A.forEach(o)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(v,J,E),k(v,z,E),e(z,Z),e(z,S),e(S,ee),e(z,ge),e(z,O),e(O,_e),e(z,pe),k(v,K,E),k(v,L,E),e(L,oe),k(v,G,E),k(v,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,I),e(I,te),e(I,V),e(V,ve)},d(v){v&&o(d),v&&o(c),v&&o(p),v&&o(J),v&&o(z),v&&o(K),v&&o(L),v&&o(G),v&&o(j)}}}function zR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function jR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForTokenClassification
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerForTokenClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function CR(R){let d,g;return d=new de({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:le,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function qR(R){let d,g,c,p,_,l,f,M,ue,J,z,Z,S,ee,ge,O,_e,pe,K,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,I,te,V,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=m(),z=n("p"),Z=a("This second option is useful when using "),S=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),_e=a("model(inputs)"),pe=a("."),K=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),I=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(v),p=r(v,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var ye=s(M);ue=i(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(o),Y.forEach(o),J=h(v),z=r(v,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),S=r(P,"CODE",{});var xe=s(S);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(P,"CODE",{});var Te=s(O);_e=i(Te,"model(inputs)"),Te.forEach(o),pe=i(P,"."),P.forEach(o),K=h(v),L=r(v,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(v),j=r(v,"UL",{});var A=s(j);q=r(A,"LI",{});var B=s(q);ne=i(B,"a single Tensor with "),Q=r(B,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(B," only and nothing else: "),W=r(B,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),B.forEach(o),he=h(A),C=r(A,"LI",{});var D=s(C);Fe=i(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(D,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(D," or "),H=r(D,"CODE",{});var we=s(H);fe=i(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(o),D.forEach(o),X=h(A),I=r(A,"LI",{});var be=s(I);te=i(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(be,"CODE",{});var $e=s(V);ve=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),be.forEach(o),A.forEach(o)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(v,J,E),k(v,z,E),e(z,Z),e(z,S),e(S,ee),e(z,ge),e(z,O),e(O,_e),e(z,pe),k(v,K,E),k(v,L,E),e(L,oe),k(v,G,E),k(v,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,I),e(I,te),e(I,V),e(V,ve)},d(v){v&&o(d),v&&o(c),v&&o(p),v&&o(J),v&&o(z),v&&o(K),v&&o(L),v&&o(G),v&&o(j)}}}function PR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function AR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForQuestionAnswering
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerForQuestionAnswering.from_pretrained("junnyu/roformer_chinese_base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function LR(R){let d,g;return d=new de({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([14])
target_end_index = tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:le,i(c){g||(T(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function IR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function DR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerModel

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerModel.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerModel.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function NR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function SR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForMaskedLM

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForMaskedLM.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function OR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function WR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForSequenceClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function UR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function QR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForMultipleChoice

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForMultipleChoice.from_pretrained("junnyu/roformer_chinese_base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function HR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function VR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForTokenClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForTokenClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function BR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function KR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForQuestionAnswering

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForQuestionAnswering.from_pretrained("junnyu/roformer_chinese_base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(p,l,f),_=!0},p:le,i(l){_||(T(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function JR(R){let d,g,c,p,_,l,f,M,ue,J,z,Z,S,ee,ge,O,_e,pe,K,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,I,te,V,ve,v,E,Y,Me,ye,P,xe,Te,je,A,B,Ee,ae,D,Ce,we,be,$e,Sf,Of,rs,Wf,Uf,Qf,it,Hf,pl,Vf,Bf,ml,Kf,Jf,Gf,an,Qm,lt,ln,Td,ss,Xf,$d,Yf,Hm,qe,as,Zf,is,eu,ls,ou,tu,nu,ds,ru,hl,su,au,iu,dn,lu,Go,cs,du,xd,cu,pu,ps,fl,mu,Rd,hu,fu,ul,uu,Md,gu,_u,cn,ms,ku,hs,Fu,Ed,vu,bu,yu,vo,fs,wu,zd,Tu,$u,pn,xu,dt,Ru,jd,Mu,Eu,Cd,zu,ju,Cu,gl,us,Vm,ct,mn,qd,gs,qu,Pd,Pu,Bm,We,_s,Au,ks,Lu,Ad,Iu,Du,Nu,hn,_l,Su,Ou,kl,Wu,Uu,Qu,Fs,Hu,Fl,Vu,Bu,Ku,fn,Ju,Xo,vs,Gu,Ld,Xu,Yu,bs,vl,Zu,Id,eg,og,bl,tg,Dd,ng,Km,pt,un,Nd,ys,rg,Sd,sg,Jm,Xe,ws,ag,Ts,ig,$s,lg,dg,cg,xs,pg,Rs,mg,hg,fg,Ue,ug,Od,gg,_g,Wd,kg,Fg,Ud,vg,bg,Qd,yg,wg,Hd,Tg,$g,Vd,xg,Rg,Mg,bo,Ms,Eg,mt,zg,yl,jg,Cg,Bd,qg,Pg,Ag,gn,Lg,_n,Gm,ht,kn,Kd,Es,Ig,Jd,Dg,Xm,So,zs,Ng,ft,Sg,Gd,Og,Wg,js,Ug,Qg,Hg,yo,Cs,Vg,ut,Bg,wl,Kg,Jg,Xd,Gg,Xg,Yg,Fn,Zg,vn,Ym,gt,bn,Yd,qs,e_,Zd,o_,Zm,Oo,Ps,t_,_t,n_,ec,r_,s_,As,a_,i_,l_,eo,Ls,d_,kt,c_,Tl,p_,m_,oc,h_,f_,u_,yn,g_,wn,__,Tn,eh,Ft,$n,tc,Is,k_,nc,F_,oh,go,Ds,v_,rc,b_,y_,Ns,w_,Ss,T_,$_,x_,Oe,Os,R_,vt,M_,$l,E_,z_,sc,j_,C_,q_,xn,P_,Rn,A_,Mn,L_,En,I_,zn,th,bt,jn,ac,Ws,D_,ic,N_,nh,_o,Us,S_,lc,O_,W_,Qs,U_,Hs,Q_,H_,V_,wo,Vs,B_,yt,K_,xl,J_,G_,dc,X_,Y_,Z_,Cn,e1,qn,rh,wt,Pn,cc,Bs,o1,pc,t1,sh,ko,Ks,n1,mc,r1,s1,Js,a1,Gs,i1,l1,d1,oo,Xs,c1,Tt,p1,Rl,m1,h1,hc,f1,u1,g1,An,_1,Ln,k1,In,ah,$t,Dn,fc,Ys,F1,uc,v1,ih,Fo,Zs,b1,xt,y1,gc,w1,T1,_c,$1,x1,R1,ea,M1,oa,E1,z1,j1,to,ta,C1,Rt,q1,Ml,P1,A1,kc,L1,I1,D1,Nn,N1,Sn,S1,On,lh,Mt,Wn,Fc,na,O1,vc,W1,dh,Qe,ra,U1,bc,Q1,H1,sa,V1,El,B1,K1,J1,aa,G1,ia,X1,Y1,Z1,Un,ek,To,la,ok,Et,tk,zl,nk,rk,yc,sk,ak,ik,Qn,lk,Hn,ch,zt,Vn,wc,da,dk,Tc,ck,ph,He,ca,pk,pa,mk,$c,hk,fk,uk,ma,gk,jl,_k,kk,Fk,ha,vk,fa,bk,yk,wk,Bn,Tk,no,ua,$k,jt,xk,Cl,Rk,Mk,xc,Ek,zk,jk,Kn,Ck,Jn,qk,Gn,mh,Ct,Xn,Rc,ga,Pk,Mc,Ak,hh,Ve,_a,Lk,ka,Ik,Ec,Dk,Nk,Sk,Fa,Ok,ql,Wk,Uk,Qk,va,Hk,ba,Vk,Bk,Kk,Yn,Jk,Yo,ya,Gk,Ye,Xk,zc,Yk,Zk,jc,eF,oF,Cc,tF,nF,qc,rF,sF,Pc,aF,iF,lF,Zn,fh,qt,er,Ac,wa,dF,Lc,cF,uh,Be,Ta,pF,Ic,mF,hF,$a,fF,Pl,uF,gF,_F,xa,kF,Ra,FF,vF,bF,or,yF,ro,Ma,wF,Pt,TF,Al,$F,xF,Dc,RF,MF,EF,tr,zF,nr,jF,rr,gh,At,sr,Nc,Ea,CF,Sc,qF,_h,Ke,za,PF,Oc,AF,LF,ja,IF,Ll,DF,NF,SF,Ca,OF,qa,WF,UF,QF,ar,HF,$o,Pa,VF,Lt,BF,Il,KF,JF,Wc,GF,XF,YF,ir,ZF,lr,kh,It,dr,Uc,Aa,ev,Qc,ov,Fh,Je,La,tv,Hc,nv,rv,Ia,sv,Dl,av,iv,lv,Da,dv,Na,cv,pv,mv,cr,hv,so,Sa,fv,Dt,uv,Nl,gv,_v,Vc,kv,Fv,vv,pr,bv,mr,yv,hr,vh,Nt,fr,Bc,Oa,wv,Kc,Tv,bh,Ge,Wa,$v,St,xv,Jc,Rv,Mv,Gc,Ev,zv,jv,Ua,Cv,Sl,qv,Pv,Av,Qa,Lv,Ha,Iv,Dv,Nv,ur,Sv,ao,Va,Ov,Ot,Wv,Ol,Uv,Qv,Xc,Hv,Vv,Bv,gr,Kv,_r,Jv,kr,yh,Wt,Fr,Yc,Ba,Gv,Zc,Xv,wh,Pe,Ka,Yv,ep,Zv,eb,Ja,ob,Wl,tb,nb,rb,Ga,sb,Xa,ab,ib,lb,op,db,cb,Wo,tp,Ya,pb,mb,np,Za,hb,fb,rp,ei,ub,gb,sp,oi,_b,kb,xo,ti,Fb,Ut,vb,ap,bb,yb,ip,wb,Tb,$b,vr,xb,br,Th,Qt,yr,lp,ni,Rb,dp,Mb,$h,Ae,ri,Eb,si,zb,cp,jb,Cb,qb,ai,Pb,Ul,Ab,Lb,Ib,ii,Db,li,Nb,Sb,Ob,pp,Wb,Ub,Uo,mp,di,Qb,Hb,hp,ci,Vb,Bb,fp,pi,Kb,Jb,up,mi,Gb,Xb,Ro,hi,Yb,Ht,Zb,gp,ey,oy,_p,ty,ny,ry,wr,sy,Tr,xh,Vt,$r,kp,fi,ay,Fp,iy,Rh,Le,ui,ly,vp,dy,cy,gi,py,Ql,my,hy,fy,_i,uy,ki,gy,_y,ky,bp,Fy,vy,Qo,yp,Fi,by,yy,wp,vi,wy,Ty,Tp,bi,$y,xy,$p,yi,Ry,My,Mo,wi,Ey,Bt,zy,xp,jy,Cy,Rp,qy,Py,Ay,xr,Ly,Rr,Mh,Kt,Mr,Mp,Ti,Iy,Ep,Dy,Eh,Ie,$i,Ny,zp,Sy,Oy,xi,Wy,Hl,Uy,Qy,Hy,Ri,Vy,Mi,By,Ky,Jy,jp,Gy,Xy,Ho,Cp,Ei,Yy,Zy,qp,zi,ew,ow,Pp,ji,tw,nw,Ap,Ci,rw,sw,Eo,qi,aw,Jt,iw,Lp,lw,dw,Ip,cw,pw,mw,Er,hw,zr,zh,Gt,jr,Dp,Pi,fw,Np,uw,jh,De,Ai,gw,Sp,_w,kw,Li,Fw,Vl,vw,bw,yw,Ii,ww,Di,Tw,$w,xw,Op,Rw,Mw,Vo,Wp,Ni,Ew,zw,Up,Si,jw,Cw,Qp,Oi,qw,Pw,Hp,Wi,Aw,Lw,zo,Ui,Iw,Xt,Dw,Vp,Nw,Sw,Bp,Ow,Ww,Uw,Cr,Qw,qr,Ch,Yt,Pr,Kp,Qi,Hw,Jp,Vw,qh,Ne,Hi,Bw,Zt,Kw,Gp,Jw,Gw,Xp,Xw,Yw,Zw,Vi,eT,Bl,oT,tT,nT,Bi,rT,Ki,sT,aT,iT,Yp,lT,dT,Bo,Zp,Ji,cT,pT,em,Gi,mT,hT,om,Xi,fT,uT,tm,Yi,gT,_T,jo,Zi,kT,en,FT,nm,vT,bT,rm,yT,wT,TT,Ar,$T,Lr,Ph;return l=new ze({}),ee=new ze({}),Te=new ze({}),D=new N({props:{name:"class transformers.RoFormerConfig",anchor:"transformers.RoFormerConfig",parameters:[{name:"vocab_size",val:" = 50000"},{name:"embedding_size",val:" = None"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1536"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"rotary_value",val:" = False"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoFormerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50000) &#x2014;
Vocabulary size of the RoFormer model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerModel">RoFormerModel</a> or <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.TFRoFormerModel">TFRoFormerModel</a>.`,name:"vocab_size"},{anchor:"transformers.RoFormerConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
Dimensionality of the encoder layers and the pooler layer. Defaults to the <code>hidden_size</code> if not provided.`,name:"embedding_size"},{anchor:"transformers.RoFormerConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.RoFormerConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.RoFormerConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.RoFormerConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.RoFormerConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.RoFormerConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.RoFormerConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.RoFormerConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 1536).`,name:"max_position_embeddings"},{anchor:"transformers.RoFormerConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerModel">RoFormerModel</a> or <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.TFRoFormerModel">TFRoFormerModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RoFormerConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RoFormerConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RoFormerConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.RoFormerConfig.rotary_value",description:`<strong>rotary_value</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not apply rotary position embeddings on value layer.`,name:"rotary_value"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/configuration_roformer.py#L38"}}),an=new ie({props:{anchor:"transformers.RoFormerConfig.example",$$slots:{default:[Ux]},$$scope:{ctx:R}}}),ss=new ze({}),as=new N({props:{name:"class transformers.RoFormerTokenizer",anchor:"transformers.RoFormerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.RoFormerTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.RoFormerTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.RoFormerTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.RoFormerTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.RoFormerTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.RoFormerTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.RoFormerTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.RoFormerTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.RoFormerTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/tokenization_roformer.py#L61"}}),dn=new ie({props:{anchor:"transformers.RoFormerTokenizer.example",$$slots:{default:[Qx]},$$scope:{ctx:R}}}),cs=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/tokenization_roformer.py#L227",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ms=new N({props:{name:"get_special_tokens_mask",anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/tokenization_roformer.py#L252",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fs=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/tokenization_roformer.py#L280",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),pn=new ie({props:{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Hx]},$$scope:{ctx:R}}}),us=new N({props:{name:"save_vocabulary",anchor:"transformers.RoFormerTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/tokenization_roformer.py#L309"}}),gs=new ze({}),_s=new N({props:{name:"class transformers.RoFormerTokenizerFast",anchor:"transformers.RoFormerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/tokenization_roformer_fast.py#L63"}}),fn=new ie({props:{anchor:"transformers.RoFormerTokenizerFast.example",$$slots:{default:[Vx]},$$scope:{ctx:R}}}),vs=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/tokenization_roformer_fast.py#L139",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ys=new ze({}),ws=new N({props:{name:"class transformers.RoFormerModel",anchor:"transformers.RoFormerModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_roformer.py#L789"}}),Ms=new N({props:{name:"forward",anchor:"transformers.RoFormerModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RoFormerModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RoFormerModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RoFormerModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_roformer.py#L829",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gn=new Re({props:{$$slots:{default:[Bx]},$$scope:{ctx:R}}}),_n=new ie({props:{anchor:"transformers.RoFormerModel.forward.example",$$slots:{default:[Kx]},$$scope:{ctx:R}}}),Es=new ze({}),zs=new N({props:{name:"class transformers.RoFormerForCausalLM",anchor:"transformers.RoFormerForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_roformer.py#L1057"}}),Cs=new N({props:{name:"forward",anchor:"transformers.RoFormerForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RoFormerForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RoFormerForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RoFormerForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.RoFormerForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_roformer.py#L1079",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fn=new Re({props:{$$slots:{default:[Jx]},$$scope:{ctx:R}}}),vn=new ie({props:{anchor:"transformers.RoFormerForCausalLM.forward.example",$$slots:{default:[Gx]},$$scope:{ctx:R}}}),qs=new ze({}),Ps=new N({props:{name:"class transformers.RoFormerForMaskedLM",anchor:"transformers.RoFormerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_roformer.py#L956"}}),Ls=new N({props:{name:"forward",anchor:"transformers.RoFormerForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_roformer.py#L978",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yn=new Re({props:{$$slots:{default:[Xx]},$$scope:{ctx:R}}}),wn=new ie({props:{anchor:"transformers.RoFormerForMaskedLM.forward.example",$$slots:{default:[Yx]},$$scope:{ctx:R}}}),Tn=new ie({props:{anchor:"transformers.RoFormerForMaskedLM.forward.example-2",$$slots:{default:[Zx]},$$scope:{ctx:R}}}),Is=new ze({}),Ds=new N({props:{name:"class transformers.RoFormerForSequenceClassification",anchor:"transformers.RoFormerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_roformer.py#L1230"}}),Os=new N({props:{name:"forward",anchor:"transformers.RoFormerForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_roformer.py#L1240",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xn=new Re({props:{$$slots:{default:[eR]},$$scope:{ctx:R}}}),Rn=new ie({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example",$$slots:{default:[oR]},$$scope:{ctx:R}}}),Mn=new ie({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-2",$$slots:{default:[tR]},$$scope:{ctx:R}}}),En=new ie({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-3",$$slots:{default:[nR]},$$scope:{ctx:R}}}),zn=new ie({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-4",$$slots:{default:[rR]},$$scope:{ctx:R}}}),Ws=new ze({}),Us=new N({props:{name:"class transformers.RoFormerForMultipleChoice",anchor:"transformers.RoFormerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_roformer.py#L1322"}}),Vs=new N({props:{name:"forward",anchor:"transformers.RoFormerForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_roformer.py#L1333",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cn=new Re({props:{$$slots:{default:[sR]},$$scope:{ctx:R}}}),qn=new ie({props:{anchor:"transformers.RoFormerForMultipleChoice.forward.example",$$slots:{default:[aR]},$$scope:{ctx:R}}}),Bs=new ze({}),Ks=new N({props:{name:"class transformers.RoFormerForTokenClassification",anchor:"transformers.RoFormerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_roformer.py#L1414"}}),Xs=new N({props:{name:"forward",anchor:"transformers.RoFormerForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_roformer.py#L1426",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),An=new Re({props:{$$slots:{default:[iR]},$$scope:{ctx:R}}}),Ln=new ie({props:{anchor:"transformers.RoFormerForTokenClassification.forward.example",$$slots:{default:[lR]},$$scope:{ctx:R}}}),In=new ie({props:{anchor:"transformers.RoFormerForTokenClassification.forward.example-2",$$slots:{default:[dR]},$$scope:{ctx:R}}}),Ys=new ze({}),Zs=new N({props:{name:"class transformers.RoFormerForQuestionAnswering",anchor:"transformers.RoFormerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_roformer.py#L1491"}}),ta=new N({props:{name:"forward",anchor:"transformers.RoFormerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_roformer.py#L1504",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nn=new Re({props:{$$slots:{default:[cR]},$$scope:{ctx:R}}}),Sn=new ie({props:{anchor:"transformers.RoFormerForQuestionAnswering.forward.example",$$slots:{default:[pR]},$$scope:{ctx:R}}}),On=new ie({props:{anchor:"transformers.RoFormerForQuestionAnswering.forward.example-2",$$slots:{default:[mR]},$$scope:{ctx:R}}}),na=new ze({}),ra=new N({props:{name:"class transformers.TFRoFormerModel",anchor:"transformers.TFRoFormerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_tf_roformer.py#L794"}}),Un=new Re({props:{$$slots:{default:[hR]},$$scope:{ctx:R}}}),la=new N({props:{name:"call",anchor:"transformers.TFRoFormerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_tf_roformer.py#L800",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qn=new Re({props:{$$slots:{default:[fR]},$$scope:{ctx:R}}}),Hn=new ie({props:{anchor:"transformers.TFRoFormerModel.call.example",$$slots:{default:[uR]},$$scope:{ctx:R}}}),da=new ze({}),ca=new N({props:{name:"class transformers.TFRoFormerForMaskedLM",anchor:"transformers.TFRoFormerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_tf_roformer.py#L842"}}),Bn=new Re({props:{$$slots:{default:[gR]},$$scope:{ctx:R}}}),ua=new N({props:{name:"call",anchor:"transformers.TFRoFormerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_tf_roformer.py#L858",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Kn=new Re({props:{$$slots:{default:[_R]},$$scope:{ctx:R}}}),Jn=new ie({props:{anchor:"transformers.TFRoFormerForMaskedLM.call.example",$$slots:{default:[kR]},$$scope:{ctx:R}}}),Gn=new ie({props:{anchor:"transformers.TFRoFormerForMaskedLM.call.example-2",$$slots:{default:[FR]},$$scope:{ctx:R}}}),ga=new ze({}),_a=new N({props:{name:"class transformers.TFRoFormerForCausalLM",anchor:"transformers.TFRoFormerForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_tf_roformer.py#L921"}}),Yn=new Re({props:{$$slots:{default:[vR]},$$scope:{ctx:R}}}),ya=new N({props:{name:"call",anchor:"transformers.TFRoFormerForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_tf_roformer.py#L934",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zn=new ie({props:{anchor:"transformers.TFRoFormerForCausalLM.call.example",$$slots:{default:[bR]},$$scope:{ctx:R}}}),wa=new ze({}),Ta=new N({props:{name:"class transformers.TFRoFormerForSequenceClassification",anchor:"transformers.TFRoFormerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_tf_roformer.py#L1034"}}),or=new Re({props:{$$slots:{default:[yR]},$$scope:{ctx:R}}}),Ma=new N({props:{name:"call",anchor:"transformers.TFRoFormerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_tf_roformer.py#L1043",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),tr=new Re({props:{$$slots:{default:[wR]},$$scope:{ctx:R}}}),nr=new ie({props:{anchor:"transformers.TFRoFormerForSequenceClassification.call.example",$$slots:{default:[TR]},$$scope:{ctx:R}}}),rr=new ie({props:{anchor:"transformers.TFRoFormerForSequenceClassification.call.example-2",$$slots:{default:[$R]},$$scope:{ctx:R}}}),Ea=new ze({}),za=new N({props:{name:"class transformers.TFRoFormerForMultipleChoice",anchor:"transformers.TFRoFormerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_tf_roformer.py#L1110"}}),ar=new Re({props:{$$slots:{default:[xR]},$$scope:{ctx:R}}}),Pa=new N({props:{name:"call",anchor:"transformers.TFRoFormerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_tf_roformer.py#L1131",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(batch_size, )</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ir=new Re({props:{$$slots:{default:[RR]},$$scope:{ctx:R}}}),lr=new ie({props:{anchor:"transformers.TFRoFormerForMultipleChoice.call.example",$$slots:{default:[MR]},$$scope:{ctx:R}}}),Aa=new ze({}),La=new N({props:{name:"class transformers.TFRoFormerForTokenClassification",anchor:"transformers.TFRoFormerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_tf_roformer.py#L1234"}}),cr=new Re({props:{$$slots:{default:[ER]},$$scope:{ctx:R}}}),Sa=new N({props:{name:"call",anchor:"transformers.TFRoFormerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_tf_roformer.py#L1246",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of unmasked labels, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pr=new Re({props:{$$slots:{default:[zR]},$$scope:{ctx:R}}}),mr=new ie({props:{anchor:"transformers.TFRoFormerForTokenClassification.call.example",$$slots:{default:[jR]},$$scope:{ctx:R}}}),hr=new ie({props:{anchor:"transformers.TFRoFormerForTokenClassification.call.example-2",$$slots:{default:[CR]},$$scope:{ctx:R}}}),Oa=new ze({}),Wa=new N({props:{name:"class transformers.TFRoFormerForQuestionAnswering",anchor:"transformers.TFRoFormerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_tf_roformer.py#L1312"}}),ur=new Re({props:{$$slots:{default:[qR]},$$scope:{ctx:R}}}),Va=new N({props:{name:"call",anchor:"transformers.TFRoFormerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_tf_roformer.py#L1323",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>start_positions</code> and <code>end_positions</code> are provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gr=new Re({props:{$$slots:{default:[PR]},$$scope:{ctx:R}}}),_r=new ie({props:{anchor:"transformers.TFRoFormerForQuestionAnswering.call.example",$$slots:{default:[AR]},$$scope:{ctx:R}}}),kr=new ie({props:{anchor:"transformers.TFRoFormerForQuestionAnswering.call.example-2",$$slots:{default:[LR]},$$scope:{ctx:R}}}),Ba=new ze({}),Ka=new N({props:{name:"class transformers.FlaxRoFormerModel",anchor:"transformers.FlaxRoFormerModel",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_flax_roformer.py#L749"}}),ti=new N({props:{name:"__call__",anchor:"transformers.FlaxRoFormerModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vr=new Re({props:{$$slots:{default:[IR]},$$scope:{ctx:R}}}),br=new ie({props:{anchor:"transformers.FlaxRoFormerModel.__call__.example",$$slots:{default:[DR]},$$scope:{ctx:R}}}),ni=new ze({}),ri=new N({props:{name:"class transformers.FlaxRoFormerForMaskedLM",anchor:"transformers.FlaxRoFormerForMaskedLM",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_flax_roformer.py#L809"}}),hi=new N({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wr=new Re({props:{$$slots:{default:[NR]},$$scope:{ctx:R}}}),Tr=new ie({props:{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.example",$$slots:{default:[SR]},$$scope:{ctx:R}}}),fi=new ze({}),ui=new N({props:{name:"class transformers.FlaxRoFormerForSequenceClassification",anchor:"transformers.FlaxRoFormerForSequenceClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_flax_roformer.py#L874"}}),wi=new N({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xr=new Re({props:{$$slots:{default:[OR]},$$scope:{ctx:R}}}),Rr=new ie({props:{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.example",$$slots:{default:[WR]},$$scope:{ctx:R}}}),Ti=new ze({}),$i=new N({props:{name:"class transformers.FlaxRoFormerForMultipleChoice",anchor:"transformers.FlaxRoFormerForMultipleChoice",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_flax_roformer.py#L950"}}),qi=new N({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Er=new Re({props:{$$slots:{default:[UR]},$$scope:{ctx:R}}}),zr=new ie({props:{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.example",$$slots:{default:[QR]},$$scope:{ctx:R}}}),Pi=new ze({}),Ai=new N({props:{name:"class transformers.FlaxRoFormerForTokenClassification",anchor:"transformers.FlaxRoFormerForTokenClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_flax_roformer.py#L1019"}}),Ui=new N({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cr=new Re({props:{$$slots:{default:[HR]},$$scope:{ctx:R}}}),qr=new ie({props:{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.example",$$slots:{default:[VR]},$$scope:{ctx:R}}}),Qi=new ze({}),Hi=new N({props:{name:"class transformers.FlaxRoFormerForQuestionAnswering",anchor:"transformers.FlaxRoFormerForQuestionAnswering",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_flax_roformer.py#L1088"}}),Zi=new N({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ar=new Re({props:{$$slots:{default:[BR]},$$scope:{ctx:R}}}),Lr=new ie({props:{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.example",$$slots:{default:[KR]},$$scope:{ctx:R}}}),{c(){d=n("meta"),g=m(),c=n("h1"),p=n("a"),_=n("span"),b(l.$$.fragment),f=m(),M=n("span"),ue=a("RoFormer"),J=m(),z=n("h2"),Z=n("a"),S=n("span"),b(ee.$$.fragment),ge=m(),O=n("span"),_e=a("Overview"),pe=m(),K=n("p"),L=a("The RoFormer model was proposed in "),oe=n("a"),G=a("RoFormer: Enhanced Transformer with Rotary Position Embedding"),j=a(" by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu."),q=m(),ne=n("p"),Q=a("The abstract from the paper is the following:"),me=m(),re=n("p"),W=n("em"),ke=a(`Position encoding in transformer architecture provides supervision for dependency modeling between elements at
different positions in the sequence. We investigate various methods to encode positional information in
transformer-based language models and propose a novel implementation named Rotary Position Embedding(RoPE). The
proposed RoPE encodes absolute positional information with rotation matrix and naturally incorporates explicit relative
position dependency in self-attention formulation. Notably, RoPE comes with valuable properties such as flexibility of
being expand to any sequence lengths, decaying inter-token dependency with increasing relative distances, and
capability of equipping the linear self-attention with relative position encoding. As a result, the enhanced
transformer with rotary position embedding, or RoFormer, achieves superior performance in tasks with long texts. We
release the theoretical analysis along with some preliminary experiment results on Chinese data. The undergoing
experiment for English benchmark will soon be updated.`),he=m(),C=n("p"),Fe=a("Tips:"),U=m(),se=n("ul"),ce=n("li"),H=a(`RoFormer is a BERT-like autoencoding model with rotary position embeddings. Rotary position embeddings have shown
improved performance on classification tasks with long texts.`),fe=m(),X=n("p"),I=a("This model was contributed by "),te=n("a"),V=a("junnyu"),ve=a(". The original code can be found "),v=n("a"),E=a("here"),Y=a("."),Me=m(),ye=n("h2"),P=n("a"),xe=n("span"),b(Te.$$.fragment),je=m(),A=n("span"),B=a("RoFormerConfig"),Ee=m(),ae=n("div"),b(D.$$.fragment),Ce=m(),we=n("p"),be=a("This is the configuration class to store the configuration of a "),$e=n("a"),Sf=a("RoFormerModel"),Of=a(`. It is used to instantiate an
RoFormer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoFormer
`),rs=n("a"),Wf=a("junnyu/roformer_chinese_base"),Uf=a(" architecture."),Qf=m(),it=n("p"),Hf=a("Configuration objects inherit from "),pl=n("a"),Vf=a("PretrainedConfig"),Bf=a(` and can be used to control the model outputs. Read the
documentation from `),ml=n("a"),Kf=a("PretrainedConfig"),Jf=a(" for more information."),Gf=m(),b(an.$$.fragment),Qm=m(),lt=n("h2"),ln=n("a"),Td=n("span"),b(ss.$$.fragment),Xf=m(),$d=n("span"),Yf=a("RoFormerTokenizer"),Hm=m(),qe=n("div"),b(as.$$.fragment),Zf=m(),is=n("p"),eu=a("Construct a RoFormer tokenizer. Based on "),ls=n("a"),ou=a("Rust Jieba"),tu=a("."),nu=m(),ds=n("p"),ru=a("This tokenizer inherits from "),hl=n("a"),su=a("PreTrainedTokenizer"),au=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),iu=m(),b(dn.$$.fragment),lu=m(),Go=n("div"),b(cs.$$.fragment),du=m(),xd=n("p"),cu=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),pu=m(),ps=n("ul"),fl=n("li"),mu=a("single sequence: "),Rd=n("code"),hu=a("[CLS] X [SEP]"),fu=m(),ul=n("li"),uu=a("pair of sequences: "),Md=n("code"),gu=a("[CLS] A [SEP] B [SEP]"),_u=m(),cn=n("div"),b(ms.$$.fragment),ku=m(),hs=n("p"),Fu=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ed=n("code"),vu=a("prepare_for_model"),bu=a(" method."),yu=m(),vo=n("div"),b(fs.$$.fragment),wu=m(),zd=n("p"),Tu=a("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RoFormer"),$u=m(),b(pn.$$.fragment),xu=m(),dt=n("p"),Ru=a("If "),jd=n("code"),Mu=a("token_ids_1"),Eu=a(" is "),Cd=n("code"),zu=a("None"),ju=a(", this method only returns the first portion of the mask (0s)."),Cu=m(),gl=n("div"),b(us.$$.fragment),Vm=m(),ct=n("h2"),mn=n("a"),qd=n("span"),b(gs.$$.fragment),qu=m(),Pd=n("span"),Pu=a("RoFormerTokenizerFast"),Bm=m(),We=n("div"),b(_s.$$.fragment),Au=m(),ks=n("p"),Lu=a("Construct a \u201Cfast\u201D RoFormer tokenizer (backed by HuggingFace\u2019s "),Ad=n("em"),Iu=a("tokenizers"),Du=a(" library)."),Nu=m(),hn=n("p"),_l=n("a"),Su=a("RoFormerTokenizerFast"),Ou=a(" is almost identical to "),kl=n("a"),Wu=a("BertTokenizerFast"),Uu=a(` and runs end-to-end tokenization:
punctuation splitting and wordpiece. There are some difference between them when tokenizing Chinese.`),Qu=m(),Fs=n("p"),Hu=a("This tokenizer inherits from "),Fl=n("a"),Vu=a("PreTrainedTokenizerFast"),Bu=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ku=m(),b(fn.$$.fragment),Ju=m(),Xo=n("div"),b(vs.$$.fragment),Gu=m(),Ld=n("p"),Xu=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),Yu=m(),bs=n("ul"),vl=n("li"),Zu=a("single sequence: "),Id=n("code"),eg=a("[CLS] X [SEP]"),og=m(),bl=n("li"),tg=a("pair of sequences: "),Dd=n("code"),ng=a("[CLS] A [SEP] B [SEP]"),Km=m(),pt=n("h2"),un=n("a"),Nd=n("span"),b(ys.$$.fragment),rg=m(),Sd=n("span"),sg=a("RoFormerModel"),Jm=m(),Xe=n("div"),b(ws.$$.fragment),ag=m(),Ts=n("p"),ig=a(`The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),$s=n("a"),lg=a("torch.nn.Module"),dg=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cg=m(),xs=n("p"),pg=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Rs=n("a"),mg=a(`Attention is
all you need`),hg=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),fg=m(),Ue=n("p"),ug=a("To behave as an decoder the model needs to be initialized with the "),Od=n("code"),gg=a("is_decoder"),_g=a(` argument of the configuration set
to `),Wd=n("code"),kg=a("True"),Fg=a(". To be used in a Seq2Seq model, the model needs to initialized with both "),Ud=n("code"),vg=a("is_decoder"),bg=a(` argument and
`),Qd=n("code"),yg=a("add_cross_attention"),wg=a(" set to "),Hd=n("code"),Tg=a("True"),$g=a("; an "),Vd=n("code"),xg=a("encoder_hidden_states"),Rg=a(" is then expected as an input to the forward pass."),Mg=m(),bo=n("div"),b(Ms.$$.fragment),Eg=m(),mt=n("p"),zg=a("The "),yl=n("a"),jg=a("RoFormerModel"),Cg=a(" forward method, overrides the "),Bd=n("code"),qg=a("__call__"),Pg=a(" special method."),Ag=m(),b(gn.$$.fragment),Lg=m(),b(_n.$$.fragment),Gm=m(),ht=n("h2"),kn=n("a"),Kd=n("span"),b(Es.$$.fragment),Ig=m(),Jd=n("span"),Dg=a("RoFormerForCausalLM"),Xm=m(),So=n("div"),b(zs.$$.fragment),Ng=m(),ft=n("p"),Sg=a("RoFormer Model with a "),Gd=n("code"),Og=a("language modeling"),Wg=a(` head on top for CLM fine-tuning.
This model is a PyTorch `),js=n("a"),Ug=a("torch.nn.Module"),Qg=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hg=m(),yo=n("div"),b(Cs.$$.fragment),Vg=m(),ut=n("p"),Bg=a("The "),wl=n("a"),Kg=a("RoFormerForCausalLM"),Jg=a(" forward method, overrides the "),Xd=n("code"),Gg=a("__call__"),Xg=a(" special method."),Yg=m(),b(Fn.$$.fragment),Zg=m(),b(vn.$$.fragment),Ym=m(),gt=n("h2"),bn=n("a"),Yd=n("span"),b(qs.$$.fragment),e_=m(),Zd=n("span"),o_=a("RoFormerForMaskedLM"),Zm=m(),Oo=n("div"),b(Ps.$$.fragment),t_=m(),_t=n("p"),n_=a("RoFormer Model with a "),ec=n("code"),r_=a("language modeling"),s_=a(` head on top.
This model is a PyTorch `),As=n("a"),a_=a("torch.nn.Module"),i_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),l_=m(),eo=n("div"),b(Ls.$$.fragment),d_=m(),kt=n("p"),c_=a("The "),Tl=n("a"),p_=a("RoFormerForMaskedLM"),m_=a(" forward method, overrides the "),oc=n("code"),h_=a("__call__"),f_=a(" special method."),u_=m(),b(yn.$$.fragment),g_=m(),b(wn.$$.fragment),__=m(),b(Tn.$$.fragment),eh=m(),Ft=n("h2"),$n=n("a"),tc=n("span"),b(Is.$$.fragment),k_=m(),nc=n("span"),F_=a("RoFormerForSequenceClassification"),oh=m(),go=n("div"),b(Ds.$$.fragment),v_=m(),rc=n("p"),b_=a(`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),y_=m(),Ns=n("p"),w_=a("This model is a PyTorch "),Ss=n("a"),T_=a("torch.nn.Module"),$_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),x_=m(),Oe=n("div"),b(Os.$$.fragment),R_=m(),vt=n("p"),M_=a("The "),$l=n("a"),E_=a("RoFormerForSequenceClassification"),z_=a(" forward method, overrides the "),sc=n("code"),j_=a("__call__"),C_=a(" special method."),q_=m(),b(xn.$$.fragment),P_=m(),b(Rn.$$.fragment),A_=m(),b(Mn.$$.fragment),L_=m(),b(En.$$.fragment),I_=m(),b(zn.$$.fragment),th=m(),bt=n("h2"),jn=n("a"),ac=n("span"),b(Ws.$$.fragment),D_=m(),ic=n("span"),N_=a("RoFormerForMultipleChoice"),nh=m(),_o=n("div"),b(Us.$$.fragment),S_=m(),lc=n("p"),O_=a(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),W_=m(),Qs=n("p"),U_=a("This model is a PyTorch "),Hs=n("a"),Q_=a("torch.nn.Module"),H_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),V_=m(),wo=n("div"),b(Vs.$$.fragment),B_=m(),yt=n("p"),K_=a("The "),xl=n("a"),J_=a("RoFormerForMultipleChoice"),G_=a(" forward method, overrides the "),dc=n("code"),X_=a("__call__"),Y_=a(" special method."),Z_=m(),b(Cn.$$.fragment),e1=m(),b(qn.$$.fragment),rh=m(),wt=n("h2"),Pn=n("a"),cc=n("span"),b(Bs.$$.fragment),o1=m(),pc=n("span"),t1=a("RoFormerForTokenClassification"),sh=m(),ko=n("div"),b(Ks.$$.fragment),n1=m(),mc=n("p"),r1=a(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),s1=m(),Js=n("p"),a1=a("This model is a PyTorch "),Gs=n("a"),i1=a("torch.nn.Module"),l1=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),d1=m(),oo=n("div"),b(Xs.$$.fragment),c1=m(),Tt=n("p"),p1=a("The "),Rl=n("a"),m1=a("RoFormerForTokenClassification"),h1=a(" forward method, overrides the "),hc=n("code"),f1=a("__call__"),u1=a(" special method."),g1=m(),b(An.$$.fragment),_1=m(),b(Ln.$$.fragment),k1=m(),b(In.$$.fragment),ah=m(),$t=n("h2"),Dn=n("a"),fc=n("span"),b(Ys.$$.fragment),F1=m(),uc=n("span"),v1=a("RoFormerForQuestionAnswering"),ih=m(),Fo=n("div"),b(Zs.$$.fragment),b1=m(),xt=n("p"),y1=a(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),gc=n("code"),w1=a("span start logits"),T1=a(" and "),_c=n("code"),$1=a("span end logits"),x1=a(")."),R1=m(),ea=n("p"),M1=a("This model is a PyTorch "),oa=n("a"),E1=a("torch.nn.Module"),z1=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),j1=m(),to=n("div"),b(ta.$$.fragment),C1=m(),Rt=n("p"),q1=a("The "),Ml=n("a"),P1=a("RoFormerForQuestionAnswering"),A1=a(" forward method, overrides the "),kc=n("code"),L1=a("__call__"),I1=a(" special method."),D1=m(),b(Nn.$$.fragment),N1=m(),b(Sn.$$.fragment),S1=m(),b(On.$$.fragment),lh=m(),Mt=n("h2"),Wn=n("a"),Fc=n("span"),b(na.$$.fragment),O1=m(),vc=n("span"),W1=a("TFRoFormerModel"),dh=m(),Qe=n("div"),b(ra.$$.fragment),U1=m(),bc=n("p"),Q1=a("The bare RoFormer Model transformer outputing raw hidden-states without any specific head on top."),H1=m(),sa=n("p"),V1=a("This model inherits from "),El=n("a"),B1=a("TFPreTrainedModel"),K1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),J1=m(),aa=n("p"),G1=a("This model is also a "),ia=n("a"),X1=a("tf.keras.Model"),Y1=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Z1=m(),b(Un.$$.fragment),ek=m(),To=n("div"),b(la.$$.fragment),ok=m(),Et=n("p"),tk=a("The "),zl=n("a"),nk=a("TFRoFormerModel"),rk=a(" forward method, overrides the "),yc=n("code"),sk=a("__call__"),ak=a(" special method."),ik=m(),b(Qn.$$.fragment),lk=m(),b(Hn.$$.fragment),ch=m(),zt=n("h2"),Vn=n("a"),wc=n("span"),b(da.$$.fragment),dk=m(),Tc=n("span"),ck=a("TFRoFormerForMaskedLM"),ph=m(),He=n("div"),b(ca.$$.fragment),pk=m(),pa=n("p"),mk=a("RoFormer Model with a "),$c=n("code"),hk=a("language modeling"),fk=a(" head on top."),uk=m(),ma=n("p"),gk=a("This model inherits from "),jl=n("a"),_k=a("TFPreTrainedModel"),kk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fk=m(),ha=n("p"),vk=a("This model is also a "),fa=n("a"),bk=a("tf.keras.Model"),yk=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wk=m(),b(Bn.$$.fragment),Tk=m(),no=n("div"),b(ua.$$.fragment),$k=m(),jt=n("p"),xk=a("The "),Cl=n("a"),Rk=a("TFRoFormerForMaskedLM"),Mk=a(" forward method, overrides the "),xc=n("code"),Ek=a("__call__"),zk=a(" special method."),jk=m(),b(Kn.$$.fragment),Ck=m(),b(Jn.$$.fragment),qk=m(),b(Gn.$$.fragment),mh=m(),Ct=n("h2"),Xn=n("a"),Rc=n("span"),b(ga.$$.fragment),Pk=m(),Mc=n("span"),Ak=a("TFRoFormerForCausalLM"),hh=m(),Ve=n("div"),b(_a.$$.fragment),Lk=m(),ka=n("p"),Ik=a("RoFormer Model with a "),Ec=n("code"),Dk=a("language modeling"),Nk=a(" head on top for CLM fine-tuning."),Sk=m(),Fa=n("p"),Ok=a("This model inherits from "),ql=n("a"),Wk=a("TFPreTrainedModel"),Uk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qk=m(),va=n("p"),Hk=a("This model is also a "),ba=n("a"),Vk=a("tf.keras.Model"),Bk=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kk=m(),b(Yn.$$.fragment),Jk=m(),Yo=n("div"),b(ya.$$.fragment),Gk=m(),Ye=n("p"),Xk=a("labels ("),zc=n("code"),Yk=a("tf.Tensor"),Zk=a(" or "),jc=n("code"),eF=a("np.ndarray"),oF=a(" of shape "),Cc=n("code"),tF=a("(batch_size, sequence_length)"),nF=a(", "),qc=n("em"),rF=a("optional"),sF=a(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Pc=n("code"),aF=a("[0, ..., config.vocab_size - 1]"),iF=a("."),lF=m(),b(Zn.$$.fragment),fh=m(),qt=n("h2"),er=n("a"),Ac=n("span"),b(wa.$$.fragment),dF=m(),Lc=n("span"),cF=a("TFRoFormerForSequenceClassification"),uh=m(),Be=n("div"),b(Ta.$$.fragment),pF=m(),Ic=n("p"),mF=a("RoFormer Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),hF=m(),$a=n("p"),fF=a("This model inherits from "),Pl=n("a"),uF=a("TFPreTrainedModel"),gF=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_F=m(),xa=n("p"),kF=a("This model is also a "),Ra=n("a"),FF=a("tf.keras.Model"),vF=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bF=m(),b(or.$$.fragment),yF=m(),ro=n("div"),b(Ma.$$.fragment),wF=m(),Pt=n("p"),TF=a("The "),Al=n("a"),$F=a("TFRoFormerForSequenceClassification"),xF=a(" forward method, overrides the "),Dc=n("code"),RF=a("__call__"),MF=a(" special method."),EF=m(),b(tr.$$.fragment),zF=m(),b(nr.$$.fragment),jF=m(),b(rr.$$.fragment),gh=m(),At=n("h2"),sr=n("a"),Nc=n("span"),b(Ea.$$.fragment),CF=m(),Sc=n("span"),qF=a("TFRoFormerForMultipleChoice"),_h=m(),Ke=n("div"),b(za.$$.fragment),PF=m(),Oc=n("p"),AF=a(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),LF=m(),ja=n("p"),IF=a("This model inherits from "),Ll=n("a"),DF=a("TFPreTrainedModel"),NF=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),SF=m(),Ca=n("p"),OF=a("This model is also a "),qa=n("a"),WF=a("tf.keras.Model"),UF=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),QF=m(),b(ar.$$.fragment),HF=m(),$o=n("div"),b(Pa.$$.fragment),VF=m(),Lt=n("p"),BF=a("The "),Il=n("a"),KF=a("TFRoFormerForMultipleChoice"),JF=a(" forward method, overrides the "),Wc=n("code"),GF=a("__call__"),XF=a(" special method."),YF=m(),b(ir.$$.fragment),ZF=m(),b(lr.$$.fragment),kh=m(),It=n("h2"),dr=n("a"),Uc=n("span"),b(Aa.$$.fragment),ev=m(),Qc=n("span"),ov=a("TFRoFormerForTokenClassification"),Fh=m(),Je=n("div"),b(La.$$.fragment),tv=m(),Hc=n("p"),nv=a(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),rv=m(),Ia=n("p"),sv=a("This model inherits from "),Dl=n("a"),av=a("TFPreTrainedModel"),iv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lv=m(),Da=n("p"),dv=a("This model is also a "),Na=n("a"),cv=a("tf.keras.Model"),pv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mv=m(),b(cr.$$.fragment),hv=m(),so=n("div"),b(Sa.$$.fragment),fv=m(),Dt=n("p"),uv=a("The "),Nl=n("a"),gv=a("TFRoFormerForTokenClassification"),_v=a(" forward method, overrides the "),Vc=n("code"),kv=a("__call__"),Fv=a(" special method."),vv=m(),b(pr.$$.fragment),bv=m(),b(mr.$$.fragment),yv=m(),b(hr.$$.fragment),vh=m(),Nt=n("h2"),fr=n("a"),Bc=n("span"),b(Oa.$$.fragment),wv=m(),Kc=n("span"),Tv=a("TFRoFormerForQuestionAnswering"),bh=m(),Ge=n("div"),b(Wa.$$.fragment),$v=m(),St=n("p"),xv=a(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Jc=n("code"),Rv=a("span start logits"),Mv=a(" and "),Gc=n("code"),Ev=a("span end logits"),zv=a(")."),jv=m(),Ua=n("p"),Cv=a("This model inherits from "),Sl=n("a"),qv=a("TFPreTrainedModel"),Pv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Av=m(),Qa=n("p"),Lv=a("This model is also a "),Ha=n("a"),Iv=a("tf.keras.Model"),Dv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nv=m(),b(ur.$$.fragment),Sv=m(),ao=n("div"),b(Va.$$.fragment),Ov=m(),Ot=n("p"),Wv=a("The "),Ol=n("a"),Uv=a("TFRoFormerForQuestionAnswering"),Qv=a(" forward method, overrides the "),Xc=n("code"),Hv=a("__call__"),Vv=a(" special method."),Bv=m(),b(gr.$$.fragment),Kv=m(),b(_r.$$.fragment),Jv=m(),b(kr.$$.fragment),yh=m(),Wt=n("h2"),Fr=n("a"),Yc=n("span"),b(Ba.$$.fragment),Gv=m(),Zc=n("span"),Xv=a("FlaxRoFormerModel"),wh=m(),Pe=n("div"),b(Ka.$$.fragment),Yv=m(),ep=n("p"),Zv=a("The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top."),eb=m(),Ja=n("p"),ob=a("This model inherits from "),Wl=n("a"),tb=a("FlaxPreTrainedModel"),nb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rb=m(),Ga=n("p"),sb=a("This model is also a Flax Linen "),Xa=n("a"),ab=a("flax.linen.Module"),ib=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lb=m(),op=n("p"),db=a("Finally, this model supports inherent JAX features such as:"),cb=m(),Wo=n("ul"),tp=n("li"),Ya=n("a"),pb=a("Just-In-Time (JIT) compilation"),mb=m(),np=n("li"),Za=n("a"),hb=a("Automatic Differentiation"),fb=m(),rp=n("li"),ei=n("a"),ub=a("Vectorization"),gb=m(),sp=n("li"),oi=n("a"),_b=a("Parallelization"),kb=m(),xo=n("div"),b(ti.$$.fragment),Fb=m(),Ut=n("p"),vb=a("The "),ap=n("code"),bb=a("FlaxRoFormerPreTrainedModel"),yb=a(" forward method, overrides the "),ip=n("code"),wb=a("__call__"),Tb=a(" special method."),$b=m(),b(vr.$$.fragment),xb=m(),b(br.$$.fragment),Th=m(),Qt=n("h2"),yr=n("a"),lp=n("span"),b(ni.$$.fragment),Rb=m(),dp=n("span"),Mb=a("FlaxRoFormerForMaskedLM"),$h=m(),Ae=n("div"),b(ri.$$.fragment),Eb=m(),si=n("p"),zb=a("RoFormer Model with a "),cp=n("code"),jb=a("language modeling"),Cb=a(" head on top."),qb=m(),ai=n("p"),Pb=a("This model inherits from "),Ul=n("a"),Ab=a("FlaxPreTrainedModel"),Lb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ib=m(),ii=n("p"),Db=a("This model is also a Flax Linen "),li=n("a"),Nb=a("flax.linen.Module"),Sb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ob=m(),pp=n("p"),Wb=a("Finally, this model supports inherent JAX features such as:"),Ub=m(),Uo=n("ul"),mp=n("li"),di=n("a"),Qb=a("Just-In-Time (JIT) compilation"),Hb=m(),hp=n("li"),ci=n("a"),Vb=a("Automatic Differentiation"),Bb=m(),fp=n("li"),pi=n("a"),Kb=a("Vectorization"),Jb=m(),up=n("li"),mi=n("a"),Gb=a("Parallelization"),Xb=m(),Ro=n("div"),b(hi.$$.fragment),Yb=m(),Ht=n("p"),Zb=a("The "),gp=n("code"),ey=a("FlaxRoFormerPreTrainedModel"),oy=a(" forward method, overrides the "),_p=n("code"),ty=a("__call__"),ny=a(" special method."),ry=m(),b(wr.$$.fragment),sy=m(),b(Tr.$$.fragment),xh=m(),Vt=n("h2"),$r=n("a"),kp=n("span"),b(fi.$$.fragment),ay=m(),Fp=n("span"),iy=a("FlaxRoFormerForSequenceClassification"),Rh=m(),Le=n("div"),b(ui.$$.fragment),ly=m(),vp=n("p"),dy=a(`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),cy=m(),gi=n("p"),py=a("This model inherits from "),Ql=n("a"),my=a("FlaxPreTrainedModel"),hy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fy=m(),_i=n("p"),uy=a("This model is also a Flax Linen "),ki=n("a"),gy=a("flax.linen.Module"),_y=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ky=m(),bp=n("p"),Fy=a("Finally, this model supports inherent JAX features such as:"),vy=m(),Qo=n("ul"),yp=n("li"),Fi=n("a"),by=a("Just-In-Time (JIT) compilation"),yy=m(),wp=n("li"),vi=n("a"),wy=a("Automatic Differentiation"),Ty=m(),Tp=n("li"),bi=n("a"),$y=a("Vectorization"),xy=m(),$p=n("li"),yi=n("a"),Ry=a("Parallelization"),My=m(),Mo=n("div"),b(wi.$$.fragment),Ey=m(),Bt=n("p"),zy=a("The "),xp=n("code"),jy=a("FlaxRoFormerPreTrainedModel"),Cy=a(" forward method, overrides the "),Rp=n("code"),qy=a("__call__"),Py=a(" special method."),Ay=m(),b(xr.$$.fragment),Ly=m(),b(Rr.$$.fragment),Mh=m(),Kt=n("h2"),Mr=n("a"),Mp=n("span"),b(Ti.$$.fragment),Iy=m(),Ep=n("span"),Dy=a("FlaxRoFormerForMultipleChoice"),Eh=m(),Ie=n("div"),b($i.$$.fragment),Ny=m(),zp=n("p"),Sy=a(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Oy=m(),xi=n("p"),Wy=a("This model inherits from "),Hl=n("a"),Uy=a("FlaxPreTrainedModel"),Qy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Hy=m(),Ri=n("p"),Vy=a("This model is also a Flax Linen "),Mi=n("a"),By=a("flax.linen.Module"),Ky=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Jy=m(),jp=n("p"),Gy=a("Finally, this model supports inherent JAX features such as:"),Xy=m(),Ho=n("ul"),Cp=n("li"),Ei=n("a"),Yy=a("Just-In-Time (JIT) compilation"),Zy=m(),qp=n("li"),zi=n("a"),ew=a("Automatic Differentiation"),ow=m(),Pp=n("li"),ji=n("a"),tw=a("Vectorization"),nw=m(),Ap=n("li"),Ci=n("a"),rw=a("Parallelization"),sw=m(),Eo=n("div"),b(qi.$$.fragment),aw=m(),Jt=n("p"),iw=a("The "),Lp=n("code"),lw=a("FlaxRoFormerPreTrainedModel"),dw=a(" forward method, overrides the "),Ip=n("code"),cw=a("__call__"),pw=a(" special method."),mw=m(),b(Er.$$.fragment),hw=m(),b(zr.$$.fragment),zh=m(),Gt=n("h2"),jr=n("a"),Dp=n("span"),b(Pi.$$.fragment),fw=m(),Np=n("span"),uw=a("FlaxRoFormerForTokenClassification"),jh=m(),De=n("div"),b(Ai.$$.fragment),gw=m(),Sp=n("p"),_w=a(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),kw=m(),Li=n("p"),Fw=a("This model inherits from "),Vl=n("a"),vw=a("FlaxPreTrainedModel"),bw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),yw=m(),Ii=n("p"),ww=a("This model is also a Flax Linen "),Di=n("a"),Tw=a("flax.linen.Module"),$w=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),xw=m(),Op=n("p"),Rw=a("Finally, this model supports inherent JAX features such as:"),Mw=m(),Vo=n("ul"),Wp=n("li"),Ni=n("a"),Ew=a("Just-In-Time (JIT) compilation"),zw=m(),Up=n("li"),Si=n("a"),jw=a("Automatic Differentiation"),Cw=m(),Qp=n("li"),Oi=n("a"),qw=a("Vectorization"),Pw=m(),Hp=n("li"),Wi=n("a"),Aw=a("Parallelization"),Lw=m(),zo=n("div"),b(Ui.$$.fragment),Iw=m(),Xt=n("p"),Dw=a("The "),Vp=n("code"),Nw=a("FlaxRoFormerPreTrainedModel"),Sw=a(" forward method, overrides the "),Bp=n("code"),Ow=a("__call__"),Ww=a(" special method."),Uw=m(),b(Cr.$$.fragment),Qw=m(),b(qr.$$.fragment),Ch=m(),Yt=n("h2"),Pr=n("a"),Kp=n("span"),b(Qi.$$.fragment),Hw=m(),Jp=n("span"),Vw=a("FlaxRoFormerForQuestionAnswering"),qh=m(),Ne=n("div"),b(Hi.$$.fragment),Bw=m(),Zt=n("p"),Kw=a(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gp=n("code"),Jw=a("span start logits"),Gw=a(" and "),Xp=n("code"),Xw=a("span end logits"),Yw=a(")."),Zw=m(),Vi=n("p"),eT=a("This model inherits from "),Bl=n("a"),oT=a("FlaxPreTrainedModel"),tT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nT=m(),Bi=n("p"),rT=a("This model is also a Flax Linen "),Ki=n("a"),sT=a("flax.linen.Module"),aT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),iT=m(),Yp=n("p"),lT=a("Finally, this model supports inherent JAX features such as:"),dT=m(),Bo=n("ul"),Zp=n("li"),Ji=n("a"),cT=a("Just-In-Time (JIT) compilation"),pT=m(),em=n("li"),Gi=n("a"),mT=a("Automatic Differentiation"),hT=m(),om=n("li"),Xi=n("a"),fT=a("Vectorization"),uT=m(),tm=n("li"),Yi=n("a"),gT=a("Parallelization"),_T=m(),jo=n("div"),b(Zi.$$.fragment),kT=m(),en=n("p"),FT=a("The "),nm=n("code"),vT=a("FlaxRoFormerPreTrainedModel"),bT=a(" forward method, overrides the "),rm=n("code"),yT=a("__call__"),wT=a(" special method."),TT=m(),b(Ar.$$.fragment),$T=m(),b(Lr.$$.fragment),this.h()},l(t){const F=Ox('[data-svelte="svelte-1phssyn"]',document.head);d=r(F,"META",{name:!0,content:!0}),F.forEach(o),g=h(t),c=r(t,"H1",{class:!0});var el=s(c);p=r(el,"A",{id:!0,class:!0,href:!0});var sm=s(p);_=r(sm,"SPAN",{});var am=s(_);y(l.$$.fragment,am),am.forEach(o),sm.forEach(o),f=h(el),M=r(el,"SPAN",{});var im=s(M);ue=i(im,"RoFormer"),im.forEach(o),el.forEach(o),J=h(t),z=r(t,"H2",{class:!0});var ol=s(z);Z=r(ol,"A",{id:!0,class:!0,href:!0});var lm=s(Z);S=r(lm,"SPAN",{});var dm=s(S);y(ee.$$.fragment,dm),dm.forEach(o),lm.forEach(o),ge=h(ol),O=r(ol,"SPAN",{});var cm=s(O);_e=i(cm,"Overview"),cm.forEach(o),ol.forEach(o),pe=h(t),K=r(t,"P",{});var tl=s(K);L=i(tl,"The RoFormer model was proposed in "),oe=r(tl,"A",{href:!0,rel:!0});var pm=s(oe);G=i(pm,"RoFormer: Enhanced Transformer with Rotary Position Embedding"),pm.forEach(o),j=i(tl," by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu."),tl.forEach(o),q=h(t),ne=r(t,"P",{});var mm=s(ne);Q=i(mm,"The abstract from the paper is the following:"),mm.forEach(o),me=h(t),re=r(t,"P",{});var hm=s(re);W=r(hm,"EM",{});var fm=s(W);ke=i(fm,`Position encoding in transformer architecture provides supervision for dependency modeling between elements at
different positions in the sequence. We investigate various methods to encode positional information in
transformer-based language models and propose a novel implementation named Rotary Position Embedding(RoPE). The
proposed RoPE encodes absolute positional information with rotation matrix and naturally incorporates explicit relative
position dependency in self-attention formulation. Notably, RoPE comes with valuable properties such as flexibility of
being expand to any sequence lengths, decaying inter-token dependency with increasing relative distances, and
capability of equipping the linear self-attention with relative position encoding. As a result, the enhanced
transformer with rotary position embedding, or RoFormer, achieves superior performance in tasks with long texts. We
release the theoretical analysis along with some preliminary experiment results on Chinese data. The undergoing
experiment for English benchmark will soon be updated.`),fm.forEach(o),hm.forEach(o),he=h(t),C=r(t,"P",{});var um=s(C);Fe=i(um,"Tips:"),um.forEach(o),U=h(t),se=r(t,"UL",{});var gm=s(se);ce=r(gm,"LI",{});var _m=s(ce);H=i(_m,`RoFormer is a BERT-like autoencoding model with rotary position embeddings. Rotary position embeddings have shown
improved performance on classification tasks with long texts.`),_m.forEach(o),gm.forEach(o),fe=h(t),X=r(t,"P",{});var on=s(X);I=i(on,"This model was contributed by "),te=r(on,"A",{href:!0,rel:!0});var km=s(te);V=i(km,"junnyu"),km.forEach(o),ve=i(on,". The original code can be found "),v=r(on,"A",{href:!0,rel:!0});var Fm=s(v);E=i(Fm,"here"),Fm.forEach(o),Y=i(on,"."),on.forEach(o),Me=h(t),ye=r(t,"H2",{class:!0});var nl=s(ye);P=r(nl,"A",{id:!0,class:!0,href:!0});var vm=s(P);xe=r(vm,"SPAN",{});var bm=s(xe);y(Te.$$.fragment,bm),bm.forEach(o),vm.forEach(o),je=h(nl),A=r(nl,"SPAN",{});var ym=s(A);B=i(ym,"RoFormerConfig"),ym.forEach(o),nl.forEach(o),Ee=h(t),ae=r(t,"DIV",{class:!0});var Ko=s(ae);y(D.$$.fragment,Ko),Ce=h(Ko),we=r(Ko,"P",{});var tn=s(we);be=i(tn,"This is the configuration class to store the configuration of a "),$e=r(tn,"A",{href:!0});var wm=s($e);Sf=i(wm,"RoFormerModel"),wm.forEach(o),Of=i(tn,`. It is used to instantiate an
RoFormer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoFormer
`),rs=r(tn,"A",{href:!0,rel:!0});var Tm=s(rs);Wf=i(Tm,"junnyu/roformer_chinese_base"),Tm.forEach(o),Uf=i(tn," architecture."),tn.forEach(o),Qf=h(Ko),it=r(Ko,"P",{});var nn=s(it);Hf=i(nn,"Configuration objects inherit from "),pl=r(nn,"A",{href:!0});var $m=s(pl);Vf=i($m,"PretrainedConfig"),$m.forEach(o),Bf=i(nn,` and can be used to control the model outputs. Read the
documentation from `),ml=r(nn,"A",{href:!0});var xm=s(ml);Kf=i(xm,"PretrainedConfig"),xm.forEach(o),Jf=i(nn," for more information."),nn.forEach(o),Gf=h(Ko),y(an.$$.fragment,Ko),Ko.forEach(o),Qm=h(t),lt=r(t,"H2",{class:!0});var rl=s(lt);ln=r(rl,"A",{id:!0,class:!0,href:!0});var Rm=s(ln);Td=r(Rm,"SPAN",{});var Mm=s(Td);y(ss.$$.fragment,Mm),Mm.forEach(o),Rm.forEach(o),Xf=h(rl),$d=r(rl,"SPAN",{});var Em=s($d);Yf=i(Em,"RoFormerTokenizer"),Em.forEach(o),rl.forEach(o),Hm=h(t),qe=r(t,"DIV",{class:!0});var Se=s(qe);y(as.$$.fragment,Se),Zf=h(Se),is=r(Se,"P",{});var sl=s(is);eu=i(sl,"Construct a RoFormer tokenizer. Based on "),ls=r(sl,"A",{href:!0,rel:!0});var zm=s(ls);ou=i(zm,"Rust Jieba"),zm.forEach(o),tu=i(sl,"."),sl.forEach(o),nu=h(Se),ds=r(Se,"P",{});var al=s(ds);ru=i(al,"This tokenizer inherits from "),hl=r(al,"A",{href:!0});var jm=s(hl);su=i(jm,"PreTrainedTokenizer"),jm.forEach(o),au=i(al,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),al.forEach(o),iu=h(Se),y(dn.$$.fragment,Se),lu=h(Se),Go=r(Se,"DIV",{class:!0});var rn=s(Go);y(cs.$$.fragment,rn),du=h(rn),xd=r(rn,"P",{});var Cm=s(xd);cu=i(Cm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),Cm.forEach(o),pu=h(rn),ps=r(rn,"UL",{});var il=s(ps);fl=r(il,"LI",{});var Kl=s(fl);mu=i(Kl,"single sequence: "),Rd=r(Kl,"CODE",{});var qm=s(Rd);hu=i(qm,"[CLS] X [SEP]"),qm.forEach(o),Kl.forEach(o),fu=h(il),ul=r(il,"LI",{});var Jl=s(ul);uu=i(Jl,"pair of sequences: "),Md=r(Jl,"CODE",{});var Pm=s(Md);gu=i(Pm,"[CLS] A [SEP] B [SEP]"),Pm.forEach(o),Jl.forEach(o),il.forEach(o),rn.forEach(o),_u=h(Se),cn=r(Se,"DIV",{class:!0});var ll=s(cn);y(ms.$$.fragment,ll),ku=h(ll),hs=r(ll,"P",{});var dl=s(hs);Fu=i(dl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ed=r(dl,"CODE",{});var Am=s(Ed);vu=i(Am,"prepare_for_model"),Am.forEach(o),bu=i(dl," method."),dl.forEach(o),ll.forEach(o),yu=h(Se),vo=r(Se,"DIV",{class:!0});var Jo=s(vo);y(fs.$$.fragment,Jo),wu=h(Jo),zd=r(Jo,"P",{});var Lm=s(zd);Tu=i(Lm,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RoFormer"),Lm.forEach(o),$u=h(Jo),y(pn.$$.fragment,Jo),xu=h(Jo),dt=r(Jo,"P",{});var sn=s(dt);Ru=i(sn,"If "),jd=r(sn,"CODE",{});var Im=s(jd);Mu=i(Im,"token_ids_1"),Im.forEach(o),Eu=i(sn," is "),Cd=r(sn,"CODE",{});var Dm=s(Cd);zu=i(Dm,"None"),Dm.forEach(o),ju=i(sn,", this method only returns the first portion of the mask (0s)."),sn.forEach(o),Jo.forEach(o),Cu=h(Se),gl=r(Se,"DIV",{class:!0});var Nm=s(gl);y(us.$$.fragment,Nm),Nm.forEach(o),Se.forEach(o),Vm=h(t),ct=r(t,"H2",{class:!0});var cl=s(ct);mn=r(cl,"A",{id:!0,class:!0,href:!0});var Sm=s(mn);qd=r(Sm,"SPAN",{});var Om=s(qd);y(gs.$$.fragment,Om),Om.forEach(o),Sm.forEach(o),qu=h(cl),Pd=r(cl,"SPAN",{});var Wm=s(Pd);Pu=i(Wm,"RoFormerTokenizerFast"),Wm.forEach(o),cl.forEach(o),Bm=h(t),We=r(t,"DIV",{class:!0});var Ze=s(We);y(_s.$$.fragment,Ze),Au=h(Ze),ks=r(Ze,"P",{});var Ah=s(ks);Lu=i(Ah,"Construct a \u201Cfast\u201D RoFormer tokenizer (backed by HuggingFace\u2019s "),Ad=r(Ah,"EM",{});var MT=s(Ad);Iu=i(MT,"tokenizers"),MT.forEach(o),Du=i(Ah," library)."),Ah.forEach(o),Nu=h(Ze),hn=r(Ze,"P",{});var Um=s(hn);_l=r(Um,"A",{href:!0});var ET=s(_l);Su=i(ET,"RoFormerTokenizerFast"),ET.forEach(o),Ou=i(Um," is almost identical to "),kl=r(Um,"A",{href:!0});var zT=s(kl);Wu=i(zT,"BertTokenizerFast"),zT.forEach(o),Uu=i(Um,` and runs end-to-end tokenization:
punctuation splitting and wordpiece. There are some difference between them when tokenizing Chinese.`),Um.forEach(o),Qu=h(Ze),Fs=r(Ze,"P",{});var Lh=s(Fs);Hu=i(Lh,"This tokenizer inherits from "),Fl=r(Lh,"A",{href:!0});var jT=s(Fl);Vu=i(jT,"PreTrainedTokenizerFast"),jT.forEach(o),Bu=i(Lh,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Lh.forEach(o),Ku=h(Ze),y(fn.$$.fragment,Ze),Ju=h(Ze),Xo=r(Ze,"DIV",{class:!0});var Gl=s(Xo);y(vs.$$.fragment,Gl),Gu=h(Gl),Ld=r(Gl,"P",{});var CT=s(Ld);Xu=i(CT,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),CT.forEach(o),Yu=h(Gl),bs=r(Gl,"UL",{});var Ih=s(bs);vl=r(Ih,"LI",{});var xT=s(vl);Zu=i(xT,"single sequence: "),Id=r(xT,"CODE",{});var qT=s(Id);eg=i(qT,"[CLS] X [SEP]"),qT.forEach(o),xT.forEach(o),og=h(Ih),bl=r(Ih,"LI",{});var RT=s(bl);tg=i(RT,"pair of sequences: "),Dd=r(RT,"CODE",{});var PT=s(Dd);ng=i(PT,"[CLS] A [SEP] B [SEP]"),PT.forEach(o),RT.forEach(o),Ih.forEach(o),Gl.forEach(o),Ze.forEach(o),Km=h(t),pt=r(t,"H2",{class:!0});var Dh=s(pt);un=r(Dh,"A",{id:!0,class:!0,href:!0});var AT=s(un);Nd=r(AT,"SPAN",{});var LT=s(Nd);y(ys.$$.fragment,LT),LT.forEach(o),AT.forEach(o),rg=h(Dh),Sd=r(Dh,"SPAN",{});var IT=s(Sd);sg=i(IT,"RoFormerModel"),IT.forEach(o),Dh.forEach(o),Jm=h(t),Xe=r(t,"DIV",{class:!0});var Zo=s(Xe);y(ws.$$.fragment,Zo),ag=h(Zo),Ts=r(Zo,"P",{});var Nh=s(Ts);ig=i(Nh,`The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),$s=r(Nh,"A",{href:!0,rel:!0});var DT=s($s);lg=i(DT,"torch.nn.Module"),DT.forEach(o),dg=i(Nh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Nh.forEach(o),cg=h(Zo),xs=r(Zo,"P",{});var Sh=s(xs);pg=i(Sh,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Rs=r(Sh,"A",{href:!0,rel:!0});var NT=s(Rs);mg=i(NT,`Attention is
all you need`),NT.forEach(o),hg=i(Sh,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Sh.forEach(o),fg=h(Zo),Ue=r(Zo,"P",{});var io=s(Ue);ug=i(io,"To behave as an decoder the model needs to be initialized with the "),Od=r(io,"CODE",{});var ST=s(Od);gg=i(ST,"is_decoder"),ST.forEach(o),_g=i(io,` argument of the configuration set
to `),Wd=r(io,"CODE",{});var OT=s(Wd);kg=i(OT,"True"),OT.forEach(o),Fg=i(io,". To be used in a Seq2Seq model, the model needs to initialized with both "),Ud=r(io,"CODE",{});var WT=s(Ud);vg=i(WT,"is_decoder"),WT.forEach(o),bg=i(io,` argument and
`),Qd=r(io,"CODE",{});var UT=s(Qd);yg=i(UT,"add_cross_attention"),UT.forEach(o),wg=i(io," set to "),Hd=r(io,"CODE",{});var QT=s(Hd);Tg=i(QT,"True"),QT.forEach(o),$g=i(io,"; an "),Vd=r(io,"CODE",{});var HT=s(Vd);xg=i(HT,"encoder_hidden_states"),HT.forEach(o),Rg=i(io," is then expected as an input to the forward pass."),io.forEach(o),Mg=h(Zo),bo=r(Zo,"DIV",{class:!0});var Ir=s(bo);y(Ms.$$.fragment,Ir),Eg=h(Ir),mt=r(Ir,"P",{});var Xl=s(mt);zg=i(Xl,"The "),yl=r(Xl,"A",{href:!0});var VT=s(yl);jg=i(VT,"RoFormerModel"),VT.forEach(o),Cg=i(Xl," forward method, overrides the "),Bd=r(Xl,"CODE",{});var BT=s(Bd);qg=i(BT,"__call__"),BT.forEach(o),Pg=i(Xl," special method."),Xl.forEach(o),Ag=h(Ir),y(gn.$$.fragment,Ir),Lg=h(Ir),y(_n.$$.fragment,Ir),Ir.forEach(o),Zo.forEach(o),Gm=h(t),ht=r(t,"H2",{class:!0});var Oh=s(ht);kn=r(Oh,"A",{id:!0,class:!0,href:!0});var KT=s(kn);Kd=r(KT,"SPAN",{});var JT=s(Kd);y(Es.$$.fragment,JT),JT.forEach(o),KT.forEach(o),Ig=h(Oh),Jd=r(Oh,"SPAN",{});var GT=s(Jd);Dg=i(GT,"RoFormerForCausalLM"),GT.forEach(o),Oh.forEach(o),Xm=h(t),So=r(t,"DIV",{class:!0});var Yl=s(So);y(zs.$$.fragment,Yl),Ng=h(Yl),ft=r(Yl,"P",{});var Zl=s(ft);Sg=i(Zl,"RoFormer Model with a "),Gd=r(Zl,"CODE",{});var XT=s(Gd);Og=i(XT,"language modeling"),XT.forEach(o),Wg=i(Zl,` head on top for CLM fine-tuning.
This model is a PyTorch `),js=r(Zl,"A",{href:!0,rel:!0});var YT=s(js);Ug=i(YT,"torch.nn.Module"),YT.forEach(o),Qg=i(Zl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zl.forEach(o),Hg=h(Yl),yo=r(Yl,"DIV",{class:!0});var Dr=s(yo);y(Cs.$$.fragment,Dr),Vg=h(Dr),ut=r(Dr,"P",{});var ed=s(ut);Bg=i(ed,"The "),wl=r(ed,"A",{href:!0});var ZT=s(wl);Kg=i(ZT,"RoFormerForCausalLM"),ZT.forEach(o),Jg=i(ed," forward method, overrides the "),Xd=r(ed,"CODE",{});var e$=s(Xd);Gg=i(e$,"__call__"),e$.forEach(o),Xg=i(ed," special method."),ed.forEach(o),Yg=h(Dr),y(Fn.$$.fragment,Dr),Zg=h(Dr),y(vn.$$.fragment,Dr),Dr.forEach(o),Yl.forEach(o),Ym=h(t),gt=r(t,"H2",{class:!0});var Wh=s(gt);bn=r(Wh,"A",{id:!0,class:!0,href:!0});var o$=s(bn);Yd=r(o$,"SPAN",{});var t$=s(Yd);y(qs.$$.fragment,t$),t$.forEach(o),o$.forEach(o),e_=h(Wh),Zd=r(Wh,"SPAN",{});var n$=s(Zd);o_=i(n$,"RoFormerForMaskedLM"),n$.forEach(o),Wh.forEach(o),Zm=h(t),Oo=r(t,"DIV",{class:!0});var od=s(Oo);y(Ps.$$.fragment,od),t_=h(od),_t=r(od,"P",{});var td=s(_t);n_=i(td,"RoFormer Model with a "),ec=r(td,"CODE",{});var r$=s(ec);r_=i(r$,"language modeling"),r$.forEach(o),s_=i(td,` head on top.
This model is a PyTorch `),As=r(td,"A",{href:!0,rel:!0});var s$=s(As);a_=i(s$,"torch.nn.Module"),s$.forEach(o),i_=i(td,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),td.forEach(o),l_=h(od),eo=r(od,"DIV",{class:!0});var et=s(eo);y(Ls.$$.fragment,et),d_=h(et),kt=r(et,"P",{});var nd=s(kt);c_=i(nd,"The "),Tl=r(nd,"A",{href:!0});var a$=s(Tl);p_=i(a$,"RoFormerForMaskedLM"),a$.forEach(o),m_=i(nd," forward method, overrides the "),oc=r(nd,"CODE",{});var i$=s(oc);h_=i(i$,"__call__"),i$.forEach(o),f_=i(nd," special method."),nd.forEach(o),u_=h(et),y(yn.$$.fragment,et),g_=h(et),y(wn.$$.fragment,et),__=h(et),y(Tn.$$.fragment,et),et.forEach(o),od.forEach(o),eh=h(t),Ft=r(t,"H2",{class:!0});var Uh=s(Ft);$n=r(Uh,"A",{id:!0,class:!0,href:!0});var l$=s($n);tc=r(l$,"SPAN",{});var d$=s(tc);y(Is.$$.fragment,d$),d$.forEach(o),l$.forEach(o),k_=h(Uh),nc=r(Uh,"SPAN",{});var c$=s(nc);F_=i(c$,"RoFormerForSequenceClassification"),c$.forEach(o),Uh.forEach(o),oh=h(t),go=r(t,"DIV",{class:!0});var Nr=s(go);y(Ds.$$.fragment,Nr),v_=h(Nr),rc=r(Nr,"P",{});var p$=s(rc);b_=i(p$,`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),p$.forEach(o),y_=h(Nr),Ns=r(Nr,"P",{});var Qh=s(Ns);w_=i(Qh,"This model is a PyTorch "),Ss=r(Qh,"A",{href:!0,rel:!0});var m$=s(Ss);T_=i(m$,"torch.nn.Module"),m$.forEach(o),$_=i(Qh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qh.forEach(o),x_=h(Nr),Oe=r(Nr,"DIV",{class:!0});var lo=s(Oe);y(Os.$$.fragment,lo),R_=h(lo),vt=r(lo,"P",{});var rd=s(vt);M_=i(rd,"The "),$l=r(rd,"A",{href:!0});var h$=s($l);E_=i(h$,"RoFormerForSequenceClassification"),h$.forEach(o),z_=i(rd," forward method, overrides the "),sc=r(rd,"CODE",{});var f$=s(sc);j_=i(f$,"__call__"),f$.forEach(o),C_=i(rd," special method."),rd.forEach(o),q_=h(lo),y(xn.$$.fragment,lo),P_=h(lo),y(Rn.$$.fragment,lo),A_=h(lo),y(Mn.$$.fragment,lo),L_=h(lo),y(En.$$.fragment,lo),I_=h(lo),y(zn.$$.fragment,lo),lo.forEach(o),Nr.forEach(o),th=h(t),bt=r(t,"H2",{class:!0});var Hh=s(bt);jn=r(Hh,"A",{id:!0,class:!0,href:!0});var u$=s(jn);ac=r(u$,"SPAN",{});var g$=s(ac);y(Ws.$$.fragment,g$),g$.forEach(o),u$.forEach(o),D_=h(Hh),ic=r(Hh,"SPAN",{});var _$=s(ic);N_=i(_$,"RoFormerForMultipleChoice"),_$.forEach(o),Hh.forEach(o),nh=h(t),_o=r(t,"DIV",{class:!0});var Sr=s(_o);y(Us.$$.fragment,Sr),S_=h(Sr),lc=r(Sr,"P",{});var k$=s(lc);O_=i(k$,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),k$.forEach(o),W_=h(Sr),Qs=r(Sr,"P",{});var Vh=s(Qs);U_=i(Vh,"This model is a PyTorch "),Hs=r(Vh,"A",{href:!0,rel:!0});var F$=s(Hs);Q_=i(F$,"torch.nn.Module"),F$.forEach(o),H_=i(Vh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vh.forEach(o),V_=h(Sr),wo=r(Sr,"DIV",{class:!0});var Or=s(wo);y(Vs.$$.fragment,Or),B_=h(Or),yt=r(Or,"P",{});var sd=s(yt);K_=i(sd,"The "),xl=r(sd,"A",{href:!0});var v$=s(xl);J_=i(v$,"RoFormerForMultipleChoice"),v$.forEach(o),G_=i(sd," forward method, overrides the "),dc=r(sd,"CODE",{});var b$=s(dc);X_=i(b$,"__call__"),b$.forEach(o),Y_=i(sd," special method."),sd.forEach(o),Z_=h(Or),y(Cn.$$.fragment,Or),e1=h(Or),y(qn.$$.fragment,Or),Or.forEach(o),Sr.forEach(o),rh=h(t),wt=r(t,"H2",{class:!0});var Bh=s(wt);Pn=r(Bh,"A",{id:!0,class:!0,href:!0});var y$=s(Pn);cc=r(y$,"SPAN",{});var w$=s(cc);y(Bs.$$.fragment,w$),w$.forEach(o),y$.forEach(o),o1=h(Bh),pc=r(Bh,"SPAN",{});var T$=s(pc);t1=i(T$,"RoFormerForTokenClassification"),T$.forEach(o),Bh.forEach(o),sh=h(t),ko=r(t,"DIV",{class:!0});var Wr=s(ko);y(Ks.$$.fragment,Wr),n1=h(Wr),mc=r(Wr,"P",{});var $$=s(mc);r1=i($$,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),$$.forEach(o),s1=h(Wr),Js=r(Wr,"P",{});var Kh=s(Js);a1=i(Kh,"This model is a PyTorch "),Gs=r(Kh,"A",{href:!0,rel:!0});var x$=s(Gs);i1=i(x$,"torch.nn.Module"),x$.forEach(o),l1=i(Kh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Kh.forEach(o),d1=h(Wr),oo=r(Wr,"DIV",{class:!0});var ot=s(oo);y(Xs.$$.fragment,ot),c1=h(ot),Tt=r(ot,"P",{});var ad=s(Tt);p1=i(ad,"The "),Rl=r(ad,"A",{href:!0});var R$=s(Rl);m1=i(R$,"RoFormerForTokenClassification"),R$.forEach(o),h1=i(ad," forward method, overrides the "),hc=r(ad,"CODE",{});var M$=s(hc);f1=i(M$,"__call__"),M$.forEach(o),u1=i(ad," special method."),ad.forEach(o),g1=h(ot),y(An.$$.fragment,ot),_1=h(ot),y(Ln.$$.fragment,ot),k1=h(ot),y(In.$$.fragment,ot),ot.forEach(o),Wr.forEach(o),ah=h(t),$t=r(t,"H2",{class:!0});var Jh=s($t);Dn=r(Jh,"A",{id:!0,class:!0,href:!0});var E$=s(Dn);fc=r(E$,"SPAN",{});var z$=s(fc);y(Ys.$$.fragment,z$),z$.forEach(o),E$.forEach(o),F1=h(Jh),uc=r(Jh,"SPAN",{});var j$=s(uc);v1=i(j$,"RoFormerForQuestionAnswering"),j$.forEach(o),Jh.forEach(o),ih=h(t),Fo=r(t,"DIV",{class:!0});var Ur=s(Fo);y(Zs.$$.fragment,Ur),b1=h(Ur),xt=r(Ur,"P",{});var id=s(xt);y1=i(id,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),gc=r(id,"CODE",{});var C$=s(gc);w1=i(C$,"span start logits"),C$.forEach(o),T1=i(id," and "),_c=r(id,"CODE",{});var q$=s(_c);$1=i(q$,"span end logits"),q$.forEach(o),x1=i(id,")."),id.forEach(o),R1=h(Ur),ea=r(Ur,"P",{});var Gh=s(ea);M1=i(Gh,"This model is a PyTorch "),oa=r(Gh,"A",{href:!0,rel:!0});var P$=s(oa);E1=i(P$,"torch.nn.Module"),P$.forEach(o),z1=i(Gh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gh.forEach(o),j1=h(Ur),to=r(Ur,"DIV",{class:!0});var tt=s(to);y(ta.$$.fragment,tt),C1=h(tt),Rt=r(tt,"P",{});var ld=s(Rt);q1=i(ld,"The "),Ml=r(ld,"A",{href:!0});var A$=s(Ml);P1=i(A$,"RoFormerForQuestionAnswering"),A$.forEach(o),A1=i(ld," forward method, overrides the "),kc=r(ld,"CODE",{});var L$=s(kc);L1=i(L$,"__call__"),L$.forEach(o),I1=i(ld," special method."),ld.forEach(o),D1=h(tt),y(Nn.$$.fragment,tt),N1=h(tt),y(Sn.$$.fragment,tt),S1=h(tt),y(On.$$.fragment,tt),tt.forEach(o),Ur.forEach(o),lh=h(t),Mt=r(t,"H2",{class:!0});var Xh=s(Mt);Wn=r(Xh,"A",{id:!0,class:!0,href:!0});var I$=s(Wn);Fc=r(I$,"SPAN",{});var D$=s(Fc);y(na.$$.fragment,D$),D$.forEach(o),I$.forEach(o),O1=h(Xh),vc=r(Xh,"SPAN",{});var N$=s(vc);W1=i(N$,"TFRoFormerModel"),N$.forEach(o),Xh.forEach(o),dh=h(t),Qe=r(t,"DIV",{class:!0});var Co=s(Qe);y(ra.$$.fragment,Co),U1=h(Co),bc=r(Co,"P",{});var S$=s(bc);Q1=i(S$,"The bare RoFormer Model transformer outputing raw hidden-states without any specific head on top."),S$.forEach(o),H1=h(Co),sa=r(Co,"P",{});var Yh=s(sa);V1=i(Yh,"This model inherits from "),El=r(Yh,"A",{href:!0});var O$=s(El);B1=i(O$,"TFPreTrainedModel"),O$.forEach(o),K1=i(Yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yh.forEach(o),J1=h(Co),aa=r(Co,"P",{});var Zh=s(aa);G1=i(Zh,"This model is also a "),ia=r(Zh,"A",{href:!0,rel:!0});var W$=s(ia);X1=i(W$,"tf.keras.Model"),W$.forEach(o),Y1=i(Zh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zh.forEach(o),Z1=h(Co),y(Un.$$.fragment,Co),ek=h(Co),To=r(Co,"DIV",{class:!0});var Qr=s(To);y(la.$$.fragment,Qr),ok=h(Qr),Et=r(Qr,"P",{});var dd=s(Et);tk=i(dd,"The "),zl=r(dd,"A",{href:!0});var U$=s(zl);nk=i(U$,"TFRoFormerModel"),U$.forEach(o),rk=i(dd," forward method, overrides the "),yc=r(dd,"CODE",{});var Q$=s(yc);sk=i(Q$,"__call__"),Q$.forEach(o),ak=i(dd," special method."),dd.forEach(o),ik=h(Qr),y(Qn.$$.fragment,Qr),lk=h(Qr),y(Hn.$$.fragment,Qr),Qr.forEach(o),Co.forEach(o),ch=h(t),zt=r(t,"H2",{class:!0});var ef=s(zt);Vn=r(ef,"A",{id:!0,class:!0,href:!0});var H$=s(Vn);wc=r(H$,"SPAN",{});var V$=s(wc);y(da.$$.fragment,V$),V$.forEach(o),H$.forEach(o),dk=h(ef),Tc=r(ef,"SPAN",{});var B$=s(Tc);ck=i(B$,"TFRoFormerForMaskedLM"),B$.forEach(o),ef.forEach(o),ph=h(t),He=r(t,"DIV",{class:!0});var qo=s(He);y(ca.$$.fragment,qo),pk=h(qo),pa=r(qo,"P",{});var of=s(pa);mk=i(of,"RoFormer Model with a "),$c=r(of,"CODE",{});var K$=s($c);hk=i(K$,"language modeling"),K$.forEach(o),fk=i(of," head on top."),of.forEach(o),uk=h(qo),ma=r(qo,"P",{});var tf=s(ma);gk=i(tf,"This model inherits from "),jl=r(tf,"A",{href:!0});var J$=s(jl);_k=i(J$,"TFPreTrainedModel"),J$.forEach(o),kk=i(tf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tf.forEach(o),Fk=h(qo),ha=r(qo,"P",{});var nf=s(ha);vk=i(nf,"This model is also a "),fa=r(nf,"A",{href:!0,rel:!0});var G$=s(fa);bk=i(G$,"tf.keras.Model"),G$.forEach(o),yk=i(nf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nf.forEach(o),wk=h(qo),y(Bn.$$.fragment,qo),Tk=h(qo),no=r(qo,"DIV",{class:!0});var nt=s(no);y(ua.$$.fragment,nt),$k=h(nt),jt=r(nt,"P",{});var cd=s(jt);xk=i(cd,"The "),Cl=r(cd,"A",{href:!0});var X$=s(Cl);Rk=i(X$,"TFRoFormerForMaskedLM"),X$.forEach(o),Mk=i(cd," forward method, overrides the "),xc=r(cd,"CODE",{});var Y$=s(xc);Ek=i(Y$,"__call__"),Y$.forEach(o),zk=i(cd," special method."),cd.forEach(o),jk=h(nt),y(Kn.$$.fragment,nt),Ck=h(nt),y(Jn.$$.fragment,nt),qk=h(nt),y(Gn.$$.fragment,nt),nt.forEach(o),qo.forEach(o),mh=h(t),Ct=r(t,"H2",{class:!0});var rf=s(Ct);Xn=r(rf,"A",{id:!0,class:!0,href:!0});var Z$=s(Xn);Rc=r(Z$,"SPAN",{});var e0=s(Rc);y(ga.$$.fragment,e0),e0.forEach(o),Z$.forEach(o),Pk=h(rf),Mc=r(rf,"SPAN",{});var o0=s(Mc);Ak=i(o0,"TFRoFormerForCausalLM"),o0.forEach(o),rf.forEach(o),hh=h(t),Ve=r(t,"DIV",{class:!0});var Po=s(Ve);y(_a.$$.fragment,Po),Lk=h(Po),ka=r(Po,"P",{});var sf=s(ka);Ik=i(sf,"RoFormer Model with a "),Ec=r(sf,"CODE",{});var t0=s(Ec);Dk=i(t0,"language modeling"),t0.forEach(o),Nk=i(sf," head on top for CLM fine-tuning."),sf.forEach(o),Sk=h(Po),Fa=r(Po,"P",{});var af=s(Fa);Ok=i(af,"This model inherits from "),ql=r(af,"A",{href:!0});var n0=s(ql);Wk=i(n0,"TFPreTrainedModel"),n0.forEach(o),Uk=i(af,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),af.forEach(o),Qk=h(Po),va=r(Po,"P",{});var lf=s(va);Hk=i(lf,"This model is also a "),ba=r(lf,"A",{href:!0,rel:!0});var r0=s(ba);Vk=i(r0,"tf.keras.Model"),r0.forEach(o),Bk=i(lf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lf.forEach(o),Kk=h(Po),y(Yn.$$.fragment,Po),Jk=h(Po),Yo=r(Po,"DIV",{class:!0});var pd=s(Yo);y(ya.$$.fragment,pd),Gk=h(pd),Ye=r(pd,"P",{});var Ao=s(Ye);Xk=i(Ao,"labels ("),zc=r(Ao,"CODE",{});var s0=s(zc);Yk=i(s0,"tf.Tensor"),s0.forEach(o),Zk=i(Ao," or "),jc=r(Ao,"CODE",{});var a0=s(jc);eF=i(a0,"np.ndarray"),a0.forEach(o),oF=i(Ao," of shape "),Cc=r(Ao,"CODE",{});var i0=s(Cc);tF=i(i0,"(batch_size, sequence_length)"),i0.forEach(o),nF=i(Ao,", "),qc=r(Ao,"EM",{});var l0=s(qc);rF=i(l0,"optional"),l0.forEach(o),sF=i(Ao,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Pc=r(Ao,"CODE",{});var d0=s(Pc);aF=i(d0,"[0, ..., config.vocab_size - 1]"),d0.forEach(o),iF=i(Ao,"."),Ao.forEach(o),lF=h(pd),y(Zn.$$.fragment,pd),pd.forEach(o),Po.forEach(o),fh=h(t),qt=r(t,"H2",{class:!0});var df=s(qt);er=r(df,"A",{id:!0,class:!0,href:!0});var c0=s(er);Ac=r(c0,"SPAN",{});var p0=s(Ac);y(wa.$$.fragment,p0),p0.forEach(o),c0.forEach(o),dF=h(df),Lc=r(df,"SPAN",{});var m0=s(Lc);cF=i(m0,"TFRoFormerForSequenceClassification"),m0.forEach(o),df.forEach(o),uh=h(t),Be=r(t,"DIV",{class:!0});var Lo=s(Be);y(Ta.$$.fragment,Lo),pF=h(Lo),Ic=r(Lo,"P",{});var h0=s(Ic);mF=i(h0,"RoFormer Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),h0.forEach(o),hF=h(Lo),$a=r(Lo,"P",{});var cf=s($a);fF=i(cf,"This model inherits from "),Pl=r(cf,"A",{href:!0});var f0=s(Pl);uF=i(f0,"TFPreTrainedModel"),f0.forEach(o),gF=i(cf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cf.forEach(o),_F=h(Lo),xa=r(Lo,"P",{});var pf=s(xa);kF=i(pf,"This model is also a "),Ra=r(pf,"A",{href:!0,rel:!0});var u0=s(Ra);FF=i(u0,"tf.keras.Model"),u0.forEach(o),vF=i(pf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pf.forEach(o),bF=h(Lo),y(or.$$.fragment,Lo),yF=h(Lo),ro=r(Lo,"DIV",{class:!0});var rt=s(ro);y(Ma.$$.fragment,rt),wF=h(rt),Pt=r(rt,"P",{});var md=s(Pt);TF=i(md,"The "),Al=r(md,"A",{href:!0});var g0=s(Al);$F=i(g0,"TFRoFormerForSequenceClassification"),g0.forEach(o),xF=i(md," forward method, overrides the "),Dc=r(md,"CODE",{});var _0=s(Dc);RF=i(_0,"__call__"),_0.forEach(o),MF=i(md," special method."),md.forEach(o),EF=h(rt),y(tr.$$.fragment,rt),zF=h(rt),y(nr.$$.fragment,rt),jF=h(rt),y(rr.$$.fragment,rt),rt.forEach(o),Lo.forEach(o),gh=h(t),At=r(t,"H2",{class:!0});var mf=s(At);sr=r(mf,"A",{id:!0,class:!0,href:!0});var k0=s(sr);Nc=r(k0,"SPAN",{});var F0=s(Nc);y(Ea.$$.fragment,F0),F0.forEach(o),k0.forEach(o),CF=h(mf),Sc=r(mf,"SPAN",{});var v0=s(Sc);qF=i(v0,"TFRoFormerForMultipleChoice"),v0.forEach(o),mf.forEach(o),_h=h(t),Ke=r(t,"DIV",{class:!0});var Io=s(Ke);y(za.$$.fragment,Io),PF=h(Io),Oc=r(Io,"P",{});var b0=s(Oc);AF=i(b0,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),b0.forEach(o),LF=h(Io),ja=r(Io,"P",{});var hf=s(ja);IF=i(hf,"This model inherits from "),Ll=r(hf,"A",{href:!0});var y0=s(Ll);DF=i(y0,"TFPreTrainedModel"),y0.forEach(o),NF=i(hf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hf.forEach(o),SF=h(Io),Ca=r(Io,"P",{});var ff=s(Ca);OF=i(ff,"This model is also a "),qa=r(ff,"A",{href:!0,rel:!0});var w0=s(qa);WF=i(w0,"tf.keras.Model"),w0.forEach(o),UF=i(ff,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ff.forEach(o),QF=h(Io),y(ar.$$.fragment,Io),HF=h(Io),$o=r(Io,"DIV",{class:!0});var Hr=s($o);y(Pa.$$.fragment,Hr),VF=h(Hr),Lt=r(Hr,"P",{});var hd=s(Lt);BF=i(hd,"The "),Il=r(hd,"A",{href:!0});var T0=s(Il);KF=i(T0,"TFRoFormerForMultipleChoice"),T0.forEach(o),JF=i(hd," forward method, overrides the "),Wc=r(hd,"CODE",{});var $0=s(Wc);GF=i($0,"__call__"),$0.forEach(o),XF=i(hd," special method."),hd.forEach(o),YF=h(Hr),y(ir.$$.fragment,Hr),ZF=h(Hr),y(lr.$$.fragment,Hr),Hr.forEach(o),Io.forEach(o),kh=h(t),It=r(t,"H2",{class:!0});var uf=s(It);dr=r(uf,"A",{id:!0,class:!0,href:!0});var x0=s(dr);Uc=r(x0,"SPAN",{});var R0=s(Uc);y(Aa.$$.fragment,R0),R0.forEach(o),x0.forEach(o),ev=h(uf),Qc=r(uf,"SPAN",{});var M0=s(Qc);ov=i(M0,"TFRoFormerForTokenClassification"),M0.forEach(o),uf.forEach(o),Fh=h(t),Je=r(t,"DIV",{class:!0});var Do=s(Je);y(La.$$.fragment,Do),tv=h(Do),Hc=r(Do,"P",{});var E0=s(Hc);nv=i(E0,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),E0.forEach(o),rv=h(Do),Ia=r(Do,"P",{});var gf=s(Ia);sv=i(gf,"This model inherits from "),Dl=r(gf,"A",{href:!0});var z0=s(Dl);av=i(z0,"TFPreTrainedModel"),z0.forEach(o),iv=i(gf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gf.forEach(o),lv=h(Do),Da=r(Do,"P",{});var _f=s(Da);dv=i(_f,"This model is also a "),Na=r(_f,"A",{href:!0,rel:!0});var j0=s(Na);cv=i(j0,"tf.keras.Model"),j0.forEach(o),pv=i(_f,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_f.forEach(o),mv=h(Do),y(cr.$$.fragment,Do),hv=h(Do),so=r(Do,"DIV",{class:!0});var st=s(so);y(Sa.$$.fragment,st),fv=h(st),Dt=r(st,"P",{});var fd=s(Dt);uv=i(fd,"The "),Nl=r(fd,"A",{href:!0});var C0=s(Nl);gv=i(C0,"TFRoFormerForTokenClassification"),C0.forEach(o),_v=i(fd," forward method, overrides the "),Vc=r(fd,"CODE",{});var q0=s(Vc);kv=i(q0,"__call__"),q0.forEach(o),Fv=i(fd," special method."),fd.forEach(o),vv=h(st),y(pr.$$.fragment,st),bv=h(st),y(mr.$$.fragment,st),yv=h(st),y(hr.$$.fragment,st),st.forEach(o),Do.forEach(o),vh=h(t),Nt=r(t,"H2",{class:!0});var kf=s(Nt);fr=r(kf,"A",{id:!0,class:!0,href:!0});var P0=s(fr);Bc=r(P0,"SPAN",{});var A0=s(Bc);y(Oa.$$.fragment,A0),A0.forEach(o),P0.forEach(o),wv=h(kf),Kc=r(kf,"SPAN",{});var L0=s(Kc);Tv=i(L0,"TFRoFormerForQuestionAnswering"),L0.forEach(o),kf.forEach(o),bh=h(t),Ge=r(t,"DIV",{class:!0});var No=s(Ge);y(Wa.$$.fragment,No),$v=h(No),St=r(No,"P",{});var ud=s(St);xv=i(ud,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Jc=r(ud,"CODE",{});var I0=s(Jc);Rv=i(I0,"span start logits"),I0.forEach(o),Mv=i(ud," and "),Gc=r(ud,"CODE",{});var D0=s(Gc);Ev=i(D0,"span end logits"),D0.forEach(o),zv=i(ud,")."),ud.forEach(o),jv=h(No),Ua=r(No,"P",{});var Ff=s(Ua);Cv=i(Ff,"This model inherits from "),Sl=r(Ff,"A",{href:!0});var N0=s(Sl);qv=i(N0,"TFPreTrainedModel"),N0.forEach(o),Pv=i(Ff,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ff.forEach(o),Av=h(No),Qa=r(No,"P",{});var vf=s(Qa);Lv=i(vf,"This model is also a "),Ha=r(vf,"A",{href:!0,rel:!0});var S0=s(Ha);Iv=i(S0,"tf.keras.Model"),S0.forEach(o),Dv=i(vf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vf.forEach(o),Nv=h(No),y(ur.$$.fragment,No),Sv=h(No),ao=r(No,"DIV",{class:!0});var at=s(ao);y(Va.$$.fragment,at),Ov=h(at),Ot=r(at,"P",{});var gd=s(Ot);Wv=i(gd,"The "),Ol=r(gd,"A",{href:!0});var O0=s(Ol);Uv=i(O0,"TFRoFormerForQuestionAnswering"),O0.forEach(o),Qv=i(gd," forward method, overrides the "),Xc=r(gd,"CODE",{});var W0=s(Xc);Hv=i(W0,"__call__"),W0.forEach(o),Vv=i(gd," special method."),gd.forEach(o),Bv=h(at),y(gr.$$.fragment,at),Kv=h(at),y(_r.$$.fragment,at),Jv=h(at),y(kr.$$.fragment,at),at.forEach(o),No.forEach(o),yh=h(t),Wt=r(t,"H2",{class:!0});var bf=s(Wt);Fr=r(bf,"A",{id:!0,class:!0,href:!0});var U0=s(Fr);Yc=r(U0,"SPAN",{});var Q0=s(Yc);y(Ba.$$.fragment,Q0),Q0.forEach(o),U0.forEach(o),Gv=h(bf),Zc=r(bf,"SPAN",{});var H0=s(Zc);Xv=i(H0,"FlaxRoFormerModel"),H0.forEach(o),bf.forEach(o),wh=h(t),Pe=r(t,"DIV",{class:!0});var co=s(Pe);y(Ka.$$.fragment,co),Yv=h(co),ep=r(co,"P",{});var V0=s(ep);Zv=i(V0,"The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top."),V0.forEach(o),eb=h(co),Ja=r(co,"P",{});var yf=s(Ja);ob=i(yf,"This model inherits from "),Wl=r(yf,"A",{href:!0});var B0=s(Wl);tb=i(B0,"FlaxPreTrainedModel"),B0.forEach(o),nb=i(yf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),yf.forEach(o),rb=h(co),Ga=r(co,"P",{});var wf=s(Ga);sb=i(wf,"This model is also a Flax Linen "),Xa=r(wf,"A",{href:!0,rel:!0});var K0=s(Xa);ab=i(K0,"flax.linen.Module"),K0.forEach(o),ib=i(wf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),wf.forEach(o),lb=h(co),op=r(co,"P",{});var J0=s(op);db=i(J0,"Finally, this model supports inherent JAX features such as:"),J0.forEach(o),cb=h(co),Wo=r(co,"UL",{});var Vr=s(Wo);tp=r(Vr,"LI",{});var G0=s(tp);Ya=r(G0,"A",{href:!0,rel:!0});var X0=s(Ya);pb=i(X0,"Just-In-Time (JIT) compilation"),X0.forEach(o),G0.forEach(o),mb=h(Vr),np=r(Vr,"LI",{});var Y0=s(np);Za=r(Y0,"A",{href:!0,rel:!0});var Z0=s(Za);hb=i(Z0,"Automatic Differentiation"),Z0.forEach(o),Y0.forEach(o),fb=h(Vr),rp=r(Vr,"LI",{});var e2=s(rp);ei=r(e2,"A",{href:!0,rel:!0});var o2=s(ei);ub=i(o2,"Vectorization"),o2.forEach(o),e2.forEach(o),gb=h(Vr),sp=r(Vr,"LI",{});var t2=s(sp);oi=r(t2,"A",{href:!0,rel:!0});var n2=s(oi);_b=i(n2,"Parallelization"),n2.forEach(o),t2.forEach(o),Vr.forEach(o),kb=h(co),xo=r(co,"DIV",{class:!0});var Br=s(xo);y(ti.$$.fragment,Br),Fb=h(Br),Ut=r(Br,"P",{});var _d=s(Ut);vb=i(_d,"The "),ap=r(_d,"CODE",{});var r2=s(ap);bb=i(r2,"FlaxRoFormerPreTrainedModel"),r2.forEach(o),yb=i(_d," forward method, overrides the "),ip=r(_d,"CODE",{});var s2=s(ip);wb=i(s2,"__call__"),s2.forEach(o),Tb=i(_d," special method."),_d.forEach(o),$b=h(Br),y(vr.$$.fragment,Br),xb=h(Br),y(br.$$.fragment,Br),Br.forEach(o),co.forEach(o),Th=h(t),Qt=r(t,"H2",{class:!0});var Tf=s(Qt);yr=r(Tf,"A",{id:!0,class:!0,href:!0});var a2=s(yr);lp=r(a2,"SPAN",{});var i2=s(lp);y(ni.$$.fragment,i2),i2.forEach(o),a2.forEach(o),Rb=h(Tf),dp=r(Tf,"SPAN",{});var l2=s(dp);Mb=i(l2,"FlaxRoFormerForMaskedLM"),l2.forEach(o),Tf.forEach(o),$h=h(t),Ae=r(t,"DIV",{class:!0});var po=s(Ae);y(ri.$$.fragment,po),Eb=h(po),si=r(po,"P",{});var $f=s(si);zb=i($f,"RoFormer Model with a "),cp=r($f,"CODE",{});var d2=s(cp);jb=i(d2,"language modeling"),d2.forEach(o),Cb=i($f," head on top."),$f.forEach(o),qb=h(po),ai=r(po,"P",{});var xf=s(ai);Pb=i(xf,"This model inherits from "),Ul=r(xf,"A",{href:!0});var c2=s(Ul);Ab=i(c2,"FlaxPreTrainedModel"),c2.forEach(o),Lb=i(xf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xf.forEach(o),Ib=h(po),ii=r(po,"P",{});var Rf=s(ii);Db=i(Rf,"This model is also a Flax Linen "),li=r(Rf,"A",{href:!0,rel:!0});var p2=s(li);Nb=i(p2,"flax.linen.Module"),p2.forEach(o),Sb=i(Rf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Rf.forEach(o),Ob=h(po),pp=r(po,"P",{});var m2=s(pp);Wb=i(m2,"Finally, this model supports inherent JAX features such as:"),m2.forEach(o),Ub=h(po),Uo=r(po,"UL",{});var Kr=s(Uo);mp=r(Kr,"LI",{});var h2=s(mp);di=r(h2,"A",{href:!0,rel:!0});var f2=s(di);Qb=i(f2,"Just-In-Time (JIT) compilation"),f2.forEach(o),h2.forEach(o),Hb=h(Kr),hp=r(Kr,"LI",{});var u2=s(hp);ci=r(u2,"A",{href:!0,rel:!0});var g2=s(ci);Vb=i(g2,"Automatic Differentiation"),g2.forEach(o),u2.forEach(o),Bb=h(Kr),fp=r(Kr,"LI",{});var _2=s(fp);pi=r(_2,"A",{href:!0,rel:!0});var k2=s(pi);Kb=i(k2,"Vectorization"),k2.forEach(o),_2.forEach(o),Jb=h(Kr),up=r(Kr,"LI",{});var F2=s(up);mi=r(F2,"A",{href:!0,rel:!0});var v2=s(mi);Gb=i(v2,"Parallelization"),v2.forEach(o),F2.forEach(o),Kr.forEach(o),Xb=h(po),Ro=r(po,"DIV",{class:!0});var Jr=s(Ro);y(hi.$$.fragment,Jr),Yb=h(Jr),Ht=r(Jr,"P",{});var kd=s(Ht);Zb=i(kd,"The "),gp=r(kd,"CODE",{});var b2=s(gp);ey=i(b2,"FlaxRoFormerPreTrainedModel"),b2.forEach(o),oy=i(kd," forward method, overrides the "),_p=r(kd,"CODE",{});var y2=s(_p);ty=i(y2,"__call__"),y2.forEach(o),ny=i(kd," special method."),kd.forEach(o),ry=h(Jr),y(wr.$$.fragment,Jr),sy=h(Jr),y(Tr.$$.fragment,Jr),Jr.forEach(o),po.forEach(o),xh=h(t),Vt=r(t,"H2",{class:!0});var Mf=s(Vt);$r=r(Mf,"A",{id:!0,class:!0,href:!0});var w2=s($r);kp=r(w2,"SPAN",{});var T2=s(kp);y(fi.$$.fragment,T2),T2.forEach(o),w2.forEach(o),ay=h(Mf),Fp=r(Mf,"SPAN",{});var $2=s(Fp);iy=i($2,"FlaxRoFormerForSequenceClassification"),$2.forEach(o),Mf.forEach(o),Rh=h(t),Le=r(t,"DIV",{class:!0});var mo=s(Le);y(ui.$$.fragment,mo),ly=h(mo),vp=r(mo,"P",{});var x2=s(vp);dy=i(x2,`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),x2.forEach(o),cy=h(mo),gi=r(mo,"P",{});var Ef=s(gi);py=i(Ef,"This model inherits from "),Ql=r(Ef,"A",{href:!0});var R2=s(Ql);my=i(R2,"FlaxPreTrainedModel"),R2.forEach(o),hy=i(Ef,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ef.forEach(o),fy=h(mo),_i=r(mo,"P",{});var zf=s(_i);uy=i(zf,"This model is also a Flax Linen "),ki=r(zf,"A",{href:!0,rel:!0});var M2=s(ki);gy=i(M2,"flax.linen.Module"),M2.forEach(o),_y=i(zf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zf.forEach(o),ky=h(mo),bp=r(mo,"P",{});var E2=s(bp);Fy=i(E2,"Finally, this model supports inherent JAX features such as:"),E2.forEach(o),vy=h(mo),Qo=r(mo,"UL",{});var Gr=s(Qo);yp=r(Gr,"LI",{});var z2=s(yp);Fi=r(z2,"A",{href:!0,rel:!0});var j2=s(Fi);by=i(j2,"Just-In-Time (JIT) compilation"),j2.forEach(o),z2.forEach(o),yy=h(Gr),wp=r(Gr,"LI",{});var C2=s(wp);vi=r(C2,"A",{href:!0,rel:!0});var q2=s(vi);wy=i(q2,"Automatic Differentiation"),q2.forEach(o),C2.forEach(o),Ty=h(Gr),Tp=r(Gr,"LI",{});var P2=s(Tp);bi=r(P2,"A",{href:!0,rel:!0});var A2=s(bi);$y=i(A2,"Vectorization"),A2.forEach(o),P2.forEach(o),xy=h(Gr),$p=r(Gr,"LI",{});var L2=s($p);yi=r(L2,"A",{href:!0,rel:!0});var I2=s(yi);Ry=i(I2,"Parallelization"),I2.forEach(o),L2.forEach(o),Gr.forEach(o),My=h(mo),Mo=r(mo,"DIV",{class:!0});var Xr=s(Mo);y(wi.$$.fragment,Xr),Ey=h(Xr),Bt=r(Xr,"P",{});var Fd=s(Bt);zy=i(Fd,"The "),xp=r(Fd,"CODE",{});var D2=s(xp);jy=i(D2,"FlaxRoFormerPreTrainedModel"),D2.forEach(o),Cy=i(Fd," forward method, overrides the "),Rp=r(Fd,"CODE",{});var N2=s(Rp);qy=i(N2,"__call__"),N2.forEach(o),Py=i(Fd," special method."),Fd.forEach(o),Ay=h(Xr),y(xr.$$.fragment,Xr),Ly=h(Xr),y(Rr.$$.fragment,Xr),Xr.forEach(o),mo.forEach(o),Mh=h(t),Kt=r(t,"H2",{class:!0});var jf=s(Kt);Mr=r(jf,"A",{id:!0,class:!0,href:!0});var S2=s(Mr);Mp=r(S2,"SPAN",{});var O2=s(Mp);y(Ti.$$.fragment,O2),O2.forEach(o),S2.forEach(o),Iy=h(jf),Ep=r(jf,"SPAN",{});var W2=s(Ep);Dy=i(W2,"FlaxRoFormerForMultipleChoice"),W2.forEach(o),jf.forEach(o),Eh=h(t),Ie=r(t,"DIV",{class:!0});var ho=s(Ie);y($i.$$.fragment,ho),Ny=h(ho),zp=r(ho,"P",{});var U2=s(zp);Sy=i(U2,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),U2.forEach(o),Oy=h(ho),xi=r(ho,"P",{});var Cf=s(xi);Wy=i(Cf,"This model inherits from "),Hl=r(Cf,"A",{href:!0});var Q2=s(Hl);Uy=i(Q2,"FlaxPreTrainedModel"),Q2.forEach(o),Qy=i(Cf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Cf.forEach(o),Hy=h(ho),Ri=r(ho,"P",{});var qf=s(Ri);Vy=i(qf,"This model is also a Flax Linen "),Mi=r(qf,"A",{href:!0,rel:!0});var H2=s(Mi);By=i(H2,"flax.linen.Module"),H2.forEach(o),Ky=i(qf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qf.forEach(o),Jy=h(ho),jp=r(ho,"P",{});var V2=s(jp);Gy=i(V2,"Finally, this model supports inherent JAX features such as:"),V2.forEach(o),Xy=h(ho),Ho=r(ho,"UL",{});var Yr=s(Ho);Cp=r(Yr,"LI",{});var B2=s(Cp);Ei=r(B2,"A",{href:!0,rel:!0});var K2=s(Ei);Yy=i(K2,"Just-In-Time (JIT) compilation"),K2.forEach(o),B2.forEach(o),Zy=h(Yr),qp=r(Yr,"LI",{});var J2=s(qp);zi=r(J2,"A",{href:!0,rel:!0});var G2=s(zi);ew=i(G2,"Automatic Differentiation"),G2.forEach(o),J2.forEach(o),ow=h(Yr),Pp=r(Yr,"LI",{});var X2=s(Pp);ji=r(X2,"A",{href:!0,rel:!0});var Y2=s(ji);tw=i(Y2,"Vectorization"),Y2.forEach(o),X2.forEach(o),nw=h(Yr),Ap=r(Yr,"LI",{});var Z2=s(Ap);Ci=r(Z2,"A",{href:!0,rel:!0});var ex=s(Ci);rw=i(ex,"Parallelization"),ex.forEach(o),Z2.forEach(o),Yr.forEach(o),sw=h(ho),Eo=r(ho,"DIV",{class:!0});var Zr=s(Eo);y(qi.$$.fragment,Zr),aw=h(Zr),Jt=r(Zr,"P",{});var vd=s(Jt);iw=i(vd,"The "),Lp=r(vd,"CODE",{});var ox=s(Lp);lw=i(ox,"FlaxRoFormerPreTrainedModel"),ox.forEach(o),dw=i(vd," forward method, overrides the "),Ip=r(vd,"CODE",{});var tx=s(Ip);cw=i(tx,"__call__"),tx.forEach(o),pw=i(vd," special method."),vd.forEach(o),mw=h(Zr),y(Er.$$.fragment,Zr),hw=h(Zr),y(zr.$$.fragment,Zr),Zr.forEach(o),ho.forEach(o),zh=h(t),Gt=r(t,"H2",{class:!0});var Pf=s(Gt);jr=r(Pf,"A",{id:!0,class:!0,href:!0});var nx=s(jr);Dp=r(nx,"SPAN",{});var rx=s(Dp);y(Pi.$$.fragment,rx),rx.forEach(o),nx.forEach(o),fw=h(Pf),Np=r(Pf,"SPAN",{});var sx=s(Np);uw=i(sx,"FlaxRoFormerForTokenClassification"),sx.forEach(o),Pf.forEach(o),jh=h(t),De=r(t,"DIV",{class:!0});var fo=s(De);y(Ai.$$.fragment,fo),gw=h(fo),Sp=r(fo,"P",{});var ax=s(Sp);_w=i(ax,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ax.forEach(o),kw=h(fo),Li=r(fo,"P",{});var Af=s(Li);Fw=i(Af,"This model inherits from "),Vl=r(Af,"A",{href:!0});var ix=s(Vl);vw=i(ix,"FlaxPreTrainedModel"),ix.forEach(o),bw=i(Af,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Af.forEach(o),yw=h(fo),Ii=r(fo,"P",{});var Lf=s(Ii);ww=i(Lf,"This model is also a Flax Linen "),Di=r(Lf,"A",{href:!0,rel:!0});var lx=s(Di);Tw=i(lx,"flax.linen.Module"),lx.forEach(o),$w=i(Lf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Lf.forEach(o),xw=h(fo),Op=r(fo,"P",{});var dx=s(Op);Rw=i(dx,"Finally, this model supports inherent JAX features such as:"),dx.forEach(o),Mw=h(fo),Vo=r(fo,"UL",{});var es=s(Vo);Wp=r(es,"LI",{});var cx=s(Wp);Ni=r(cx,"A",{href:!0,rel:!0});var px=s(Ni);Ew=i(px,"Just-In-Time (JIT) compilation"),px.forEach(o),cx.forEach(o),zw=h(es),Up=r(es,"LI",{});var mx=s(Up);Si=r(mx,"A",{href:!0,rel:!0});var hx=s(Si);jw=i(hx,"Automatic Differentiation"),hx.forEach(o),mx.forEach(o),Cw=h(es),Qp=r(es,"LI",{});var fx=s(Qp);Oi=r(fx,"A",{href:!0,rel:!0});var ux=s(Oi);qw=i(ux,"Vectorization"),ux.forEach(o),fx.forEach(o),Pw=h(es),Hp=r(es,"LI",{});var gx=s(Hp);Wi=r(gx,"A",{href:!0,rel:!0});var _x=s(Wi);Aw=i(_x,"Parallelization"),_x.forEach(o),gx.forEach(o),es.forEach(o),Lw=h(fo),zo=r(fo,"DIV",{class:!0});var os=s(zo);y(Ui.$$.fragment,os),Iw=h(os),Xt=r(os,"P",{});var bd=s(Xt);Dw=i(bd,"The "),Vp=r(bd,"CODE",{});var kx=s(Vp);Nw=i(kx,"FlaxRoFormerPreTrainedModel"),kx.forEach(o),Sw=i(bd," forward method, overrides the "),Bp=r(bd,"CODE",{});var Fx=s(Bp);Ow=i(Fx,"__call__"),Fx.forEach(o),Ww=i(bd," special method."),bd.forEach(o),Uw=h(os),y(Cr.$$.fragment,os),Qw=h(os),y(qr.$$.fragment,os),os.forEach(o),fo.forEach(o),Ch=h(t),Yt=r(t,"H2",{class:!0});var If=s(Yt);Pr=r(If,"A",{id:!0,class:!0,href:!0});var vx=s(Pr);Kp=r(vx,"SPAN",{});var bx=s(Kp);y(Qi.$$.fragment,bx),bx.forEach(o),vx.forEach(o),Hw=h(If),Jp=r(If,"SPAN",{});var yx=s(Jp);Vw=i(yx,"FlaxRoFormerForQuestionAnswering"),yx.forEach(o),If.forEach(o),qh=h(t),Ne=r(t,"DIV",{class:!0});var uo=s(Ne);y(Hi.$$.fragment,uo),Bw=h(uo),Zt=r(uo,"P",{});var yd=s(Zt);Kw=i(yd,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gp=r(yd,"CODE",{});var wx=s(Gp);Jw=i(wx,"span start logits"),wx.forEach(o),Gw=i(yd," and "),Xp=r(yd,"CODE",{});var Tx=s(Xp);Xw=i(Tx,"span end logits"),Tx.forEach(o),Yw=i(yd,")."),yd.forEach(o),Zw=h(uo),Vi=r(uo,"P",{});var Df=s(Vi);eT=i(Df,"This model inherits from "),Bl=r(Df,"A",{href:!0});var $x=s(Bl);oT=i($x,"FlaxPreTrainedModel"),$x.forEach(o),tT=i(Df,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Df.forEach(o),nT=h(uo),Bi=r(uo,"P",{});var Nf=s(Bi);rT=i(Nf,"This model is also a Flax Linen "),Ki=r(Nf,"A",{href:!0,rel:!0});var xx=s(Ki);sT=i(xx,"flax.linen.Module"),xx.forEach(o),aT=i(Nf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Nf.forEach(o),iT=h(uo),Yp=r(uo,"P",{});var Rx=s(Yp);lT=i(Rx,"Finally, this model supports inherent JAX features such as:"),Rx.forEach(o),dT=h(uo),Bo=r(uo,"UL",{});var ts=s(Bo);Zp=r(ts,"LI",{});var Mx=s(Zp);Ji=r(Mx,"A",{href:!0,rel:!0});var Ex=s(Ji);cT=i(Ex,"Just-In-Time (JIT) compilation"),Ex.forEach(o),Mx.forEach(o),pT=h(ts),em=r(ts,"LI",{});var zx=s(em);Gi=r(zx,"A",{href:!0,rel:!0});var jx=s(Gi);mT=i(jx,"Automatic Differentiation"),jx.forEach(o),zx.forEach(o),hT=h(ts),om=r(ts,"LI",{});var Cx=s(om);Xi=r(Cx,"A",{href:!0,rel:!0});var qx=s(Xi);fT=i(qx,"Vectorization"),qx.forEach(o),Cx.forEach(o),uT=h(ts),tm=r(ts,"LI",{});var Px=s(tm);Yi=r(Px,"A",{href:!0,rel:!0});var Ax=s(Yi);gT=i(Ax,"Parallelization"),Ax.forEach(o),Px.forEach(o),ts.forEach(o),_T=h(uo),jo=r(uo,"DIV",{class:!0});var ns=s(jo);y(Zi.$$.fragment,ns),kT=h(ns),en=r(ns,"P",{});var wd=s(en);FT=i(wd,"The "),nm=r(wd,"CODE",{});var Lx=s(nm);vT=i(Lx,"FlaxRoFormerPreTrainedModel"),Lx.forEach(o),bT=i(wd," forward method, overrides the "),rm=r(wd,"CODE",{});var Ix=s(rm);yT=i(Ix,"__call__"),Ix.forEach(o),wT=i(wd," special method."),wd.forEach(o),TT=h(ns),y(Ar.$$.fragment,ns),$T=h(ns),y(Lr.$$.fragment,ns),ns.forEach(o),uo.forEach(o),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(GR)),u(p,"id","roformer"),u(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(p,"href","#roformer"),u(c,"class","relative group"),u(Z,"id","overview"),u(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Z,"href","#overview"),u(z,"class","relative group"),u(oe,"href","https://arxiv.org/pdf/2104.09864v1.pdf"),u(oe,"rel","nofollow"),u(te,"href","https://huggingface.co/junnyu"),u(te,"rel","nofollow"),u(v,"href","https://github.com/ZhuiyiTechnology/roformer"),u(v,"rel","nofollow"),u(P,"id","transformers.RoFormerConfig"),u(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(P,"href","#transformers.RoFormerConfig"),u(ye,"class","relative group"),u($e,"href","/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerModel"),u(rs,"href","https://huggingface.co/junnyu/roformer_chinese_base"),u(rs,"rel","nofollow"),u(pl,"href","/docs/transformers/pr_17101/en/main_classes/configuration#transformers.PretrainedConfig"),u(ml,"href","/docs/transformers/pr_17101/en/main_classes/configuration#transformers.PretrainedConfig"),u(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ln,"id","transformers.RoFormerTokenizer"),u(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ln,"href","#transformers.RoFormerTokenizer"),u(lt,"class","relative group"),u(ls,"href","https://pypi.org/project/rjieba/"),u(ls,"rel","nofollow"),u(hl,"href","/docs/transformers/pr_17101/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(cn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gl,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mn,"id","transformers.RoFormerTokenizerFast"),u(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mn,"href","#transformers.RoFormerTokenizerFast"),u(ct,"class","relative group"),u(_l,"href","/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerTokenizerFast"),u(kl,"href","/docs/transformers/pr_17101/en/model_doc/bert#transformers.BertTokenizerFast"),u(Fl,"href","/docs/transformers/pr_17101/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(Xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(un,"id","transformers.RoFormerModel"),u(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(un,"href","#transformers.RoFormerModel"),u(pt,"class","relative group"),u($s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u($s,"rel","nofollow"),u(Rs,"href","https://arxiv.org/abs/1706.03762"),u(Rs,"rel","nofollow"),u(yl,"href","/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerModel"),u(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kn,"id","transformers.RoFormerForCausalLM"),u(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(kn,"href","#transformers.RoFormerForCausalLM"),u(ht,"class","relative group"),u(js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(js,"rel","nofollow"),u(wl,"href","/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerForCausalLM"),u(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bn,"id","transformers.RoFormerForMaskedLM"),u(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bn,"href","#transformers.RoFormerForMaskedLM"),u(gt,"class","relative group"),u(As,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(As,"rel","nofollow"),u(Tl,"href","/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerForMaskedLM"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($n,"id","transformers.RoFormerForSequenceClassification"),u($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($n,"href","#transformers.RoFormerForSequenceClassification"),u(Ft,"class","relative group"),u(Ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ss,"rel","nofollow"),u($l,"href","/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerForSequenceClassification"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jn,"id","transformers.RoFormerForMultipleChoice"),u(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jn,"href","#transformers.RoFormerForMultipleChoice"),u(bt,"class","relative group"),u(Hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Hs,"rel","nofollow"),u(xl,"href","/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerForMultipleChoice"),u(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pn,"id","transformers.RoFormerForTokenClassification"),u(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pn,"href","#transformers.RoFormerForTokenClassification"),u(wt,"class","relative group"),u(Gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Gs,"rel","nofollow"),u(Rl,"href","/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerForTokenClassification"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dn,"id","transformers.RoFormerForQuestionAnswering"),u(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dn,"href","#transformers.RoFormerForQuestionAnswering"),u($t,"class","relative group"),u(oa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(oa,"rel","nofollow"),u(Ml,"href","/docs/transformers/pr_17101/en/model_doc/roformer#transformers.RoFormerForQuestionAnswering"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wn,"id","transformers.TFRoFormerModel"),u(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wn,"href","#transformers.TFRoFormerModel"),u(Mt,"class","relative group"),u(El,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.TFPreTrainedModel"),u(ia,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ia,"rel","nofollow"),u(zl,"href","/docs/transformers/pr_17101/en/model_doc/roformer#transformers.TFRoFormerModel"),u(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vn,"id","transformers.TFRoFormerForMaskedLM"),u(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vn,"href","#transformers.TFRoFormerForMaskedLM"),u(zt,"class","relative group"),u(jl,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.TFPreTrainedModel"),u(fa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(fa,"rel","nofollow"),u(Cl,"href","/docs/transformers/pr_17101/en/model_doc/roformer#transformers.TFRoFormerForMaskedLM"),u(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xn,"id","transformers.TFRoFormerForCausalLM"),u(Xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xn,"href","#transformers.TFRoFormerForCausalLM"),u(Ct,"class","relative group"),u(ql,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.TFPreTrainedModel"),u(ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ba,"rel","nofollow"),u(Yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.TFRoFormerForSequenceClassification"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.TFRoFormerForSequenceClassification"),u(qt,"class","relative group"),u(Pl,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ra,"rel","nofollow"),u(Al,"href","/docs/transformers/pr_17101/en/model_doc/roformer#transformers.TFRoFormerForSequenceClassification"),u(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sr,"id","transformers.TFRoFormerForMultipleChoice"),u(sr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(sr,"href","#transformers.TFRoFormerForMultipleChoice"),u(At,"class","relative group"),u(Ll,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.TFPreTrainedModel"),u(qa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(qa,"rel","nofollow"),u(Il,"href","/docs/transformers/pr_17101/en/model_doc/roformer#transformers.TFRoFormerForMultipleChoice"),u($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dr,"id","transformers.TFRoFormerForTokenClassification"),u(dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(dr,"href","#transformers.TFRoFormerForTokenClassification"),u(It,"class","relative group"),u(Dl,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.TFPreTrainedModel"),u(Na,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Na,"rel","nofollow"),u(Nl,"href","/docs/transformers/pr_17101/en/model_doc/roformer#transformers.TFRoFormerForTokenClassification"),u(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fr,"id","transformers.TFRoFormerForQuestionAnswering"),u(fr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fr,"href","#transformers.TFRoFormerForQuestionAnswering"),u(Nt,"class","relative group"),u(Sl,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ha,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ha,"rel","nofollow"),u(Ol,"href","/docs/transformers/pr_17101/en/model_doc/roformer#transformers.TFRoFormerForQuestionAnswering"),u(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fr,"id","transformers.FlaxRoFormerModel"),u(Fr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fr,"href","#transformers.FlaxRoFormerModel"),u(Wt,"class","relative group"),u(Wl,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Xa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Xa,"rel","nofollow"),u(Ya,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ya,"rel","nofollow"),u(Za,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Za,"rel","nofollow"),u(ei,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ei,"rel","nofollow"),u(oi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(oi,"rel","nofollow"),u(xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yr,"id","transformers.FlaxRoFormerForMaskedLM"),u(yr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(yr,"href","#transformers.FlaxRoFormerForMaskedLM"),u(Qt,"class","relative group"),u(Ul,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(li,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(li,"rel","nofollow"),u(di,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(di,"rel","nofollow"),u(ci,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ci,"rel","nofollow"),u(pi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(pi,"rel","nofollow"),u(mi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(mi,"rel","nofollow"),u(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($r,"id","transformers.FlaxRoFormerForSequenceClassification"),u($r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($r,"href","#transformers.FlaxRoFormerForSequenceClassification"),u(Vt,"class","relative group"),u(Ql,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ki,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(ki,"rel","nofollow"),u(Fi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Fi,"rel","nofollow"),u(vi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(vi,"rel","nofollow"),u(bi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(bi,"rel","nofollow"),u(yi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(yi,"rel","nofollow"),u(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mr,"id","transformers.FlaxRoFormerForMultipleChoice"),u(Mr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Mr,"href","#transformers.FlaxRoFormerForMultipleChoice"),u(Kt,"class","relative group"),u(Hl,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Mi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Mi,"rel","nofollow"),u(Ei,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ei,"rel","nofollow"),u(zi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(zi,"rel","nofollow"),u(ji,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ji,"rel","nofollow"),u(Ci,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ci,"rel","nofollow"),u(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jr,"id","transformers.FlaxRoFormerForTokenClassification"),u(jr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jr,"href","#transformers.FlaxRoFormerForTokenClassification"),u(Gt,"class","relative group"),u(Vl,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Di,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Di,"rel","nofollow"),u(Ni,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ni,"rel","nofollow"),u(Si,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Si,"rel","nofollow"),u(Oi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Oi,"rel","nofollow"),u(Wi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Wi,"rel","nofollow"),u(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pr,"id","transformers.FlaxRoFormerForQuestionAnswering"),u(Pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pr,"href","#transformers.FlaxRoFormerForQuestionAnswering"),u(Yt,"class","relative group"),u(Bl,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ki,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ki,"rel","nofollow"),u(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ji,"rel","nofollow"),u(Gi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Gi,"rel","nofollow"),u(Xi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Xi,"rel","nofollow"),u(Yi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Yi,"rel","nofollow"),u(jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,F){e(document.head,d),k(t,g,F),k(t,c,F),e(c,p),e(p,_),w(l,_,null),e(c,f),e(c,M),e(M,ue),k(t,J,F),k(t,z,F),e(z,Z),e(Z,S),w(ee,S,null),e(z,ge),e(z,O),e(O,_e),k(t,pe,F),k(t,K,F),e(K,L),e(K,oe),e(oe,G),e(K,j),k(t,q,F),k(t,ne,F),e(ne,Q),k(t,me,F),k(t,re,F),e(re,W),e(W,ke),k(t,he,F),k(t,C,F),e(C,Fe),k(t,U,F),k(t,se,F),e(se,ce),e(ce,H),k(t,fe,F),k(t,X,F),e(X,I),e(X,te),e(te,V),e(X,ve),e(X,v),e(v,E),e(X,Y),k(t,Me,F),k(t,ye,F),e(ye,P),e(P,xe),w(Te,xe,null),e(ye,je),e(ye,A),e(A,B),k(t,Ee,F),k(t,ae,F),w(D,ae,null),e(ae,Ce),e(ae,we),e(we,be),e(we,$e),e($e,Sf),e(we,Of),e(we,rs),e(rs,Wf),e(we,Uf),e(ae,Qf),e(ae,it),e(it,Hf),e(it,pl),e(pl,Vf),e(it,Bf),e(it,ml),e(ml,Kf),e(it,Jf),e(ae,Gf),w(an,ae,null),k(t,Qm,F),k(t,lt,F),e(lt,ln),e(ln,Td),w(ss,Td,null),e(lt,Xf),e(lt,$d),e($d,Yf),k(t,Hm,F),k(t,qe,F),w(as,qe,null),e(qe,Zf),e(qe,is),e(is,eu),e(is,ls),e(ls,ou),e(is,tu),e(qe,nu),e(qe,ds),e(ds,ru),e(ds,hl),e(hl,su),e(ds,au),e(qe,iu),w(dn,qe,null),e(qe,lu),e(qe,Go),w(cs,Go,null),e(Go,du),e(Go,xd),e(xd,cu),e(Go,pu),e(Go,ps),e(ps,fl),e(fl,mu),e(fl,Rd),e(Rd,hu),e(ps,fu),e(ps,ul),e(ul,uu),e(ul,Md),e(Md,gu),e(qe,_u),e(qe,cn),w(ms,cn,null),e(cn,ku),e(cn,hs),e(hs,Fu),e(hs,Ed),e(Ed,vu),e(hs,bu),e(qe,yu),e(qe,vo),w(fs,vo,null),e(vo,wu),e(vo,zd),e(zd,Tu),e(vo,$u),w(pn,vo,null),e(vo,xu),e(vo,dt),e(dt,Ru),e(dt,jd),e(jd,Mu),e(dt,Eu),e(dt,Cd),e(Cd,zu),e(dt,ju),e(qe,Cu),e(qe,gl),w(us,gl,null),k(t,Vm,F),k(t,ct,F),e(ct,mn),e(mn,qd),w(gs,qd,null),e(ct,qu),e(ct,Pd),e(Pd,Pu),k(t,Bm,F),k(t,We,F),w(_s,We,null),e(We,Au),e(We,ks),e(ks,Lu),e(ks,Ad),e(Ad,Iu),e(ks,Du),e(We,Nu),e(We,hn),e(hn,_l),e(_l,Su),e(hn,Ou),e(hn,kl),e(kl,Wu),e(hn,Uu),e(We,Qu),e(We,Fs),e(Fs,Hu),e(Fs,Fl),e(Fl,Vu),e(Fs,Bu),e(We,Ku),w(fn,We,null),e(We,Ju),e(We,Xo),w(vs,Xo,null),e(Xo,Gu),e(Xo,Ld),e(Ld,Xu),e(Xo,Yu),e(Xo,bs),e(bs,vl),e(vl,Zu),e(vl,Id),e(Id,eg),e(bs,og),e(bs,bl),e(bl,tg),e(bl,Dd),e(Dd,ng),k(t,Km,F),k(t,pt,F),e(pt,un),e(un,Nd),w(ys,Nd,null),e(pt,rg),e(pt,Sd),e(Sd,sg),k(t,Jm,F),k(t,Xe,F),w(ws,Xe,null),e(Xe,ag),e(Xe,Ts),e(Ts,ig),e(Ts,$s),e($s,lg),e(Ts,dg),e(Xe,cg),e(Xe,xs),e(xs,pg),e(xs,Rs),e(Rs,mg),e(xs,hg),e(Xe,fg),e(Xe,Ue),e(Ue,ug),e(Ue,Od),e(Od,gg),e(Ue,_g),e(Ue,Wd),e(Wd,kg),e(Ue,Fg),e(Ue,Ud),e(Ud,vg),e(Ue,bg),e(Ue,Qd),e(Qd,yg),e(Ue,wg),e(Ue,Hd),e(Hd,Tg),e(Ue,$g),e(Ue,Vd),e(Vd,xg),e(Ue,Rg),e(Xe,Mg),e(Xe,bo),w(Ms,bo,null),e(bo,Eg),e(bo,mt),e(mt,zg),e(mt,yl),e(yl,jg),e(mt,Cg),e(mt,Bd),e(Bd,qg),e(mt,Pg),e(bo,Ag),w(gn,bo,null),e(bo,Lg),w(_n,bo,null),k(t,Gm,F),k(t,ht,F),e(ht,kn),e(kn,Kd),w(Es,Kd,null),e(ht,Ig),e(ht,Jd),e(Jd,Dg),k(t,Xm,F),k(t,So,F),w(zs,So,null),e(So,Ng),e(So,ft),e(ft,Sg),e(ft,Gd),e(Gd,Og),e(ft,Wg),e(ft,js),e(js,Ug),e(ft,Qg),e(So,Hg),e(So,yo),w(Cs,yo,null),e(yo,Vg),e(yo,ut),e(ut,Bg),e(ut,wl),e(wl,Kg),e(ut,Jg),e(ut,Xd),e(Xd,Gg),e(ut,Xg),e(yo,Yg),w(Fn,yo,null),e(yo,Zg),w(vn,yo,null),k(t,Ym,F),k(t,gt,F),e(gt,bn),e(bn,Yd),w(qs,Yd,null),e(gt,e_),e(gt,Zd),e(Zd,o_),k(t,Zm,F),k(t,Oo,F),w(Ps,Oo,null),e(Oo,t_),e(Oo,_t),e(_t,n_),e(_t,ec),e(ec,r_),e(_t,s_),e(_t,As),e(As,a_),e(_t,i_),e(Oo,l_),e(Oo,eo),w(Ls,eo,null),e(eo,d_),e(eo,kt),e(kt,c_),e(kt,Tl),e(Tl,p_),e(kt,m_),e(kt,oc),e(oc,h_),e(kt,f_),e(eo,u_),w(yn,eo,null),e(eo,g_),w(wn,eo,null),e(eo,__),w(Tn,eo,null),k(t,eh,F),k(t,Ft,F),e(Ft,$n),e($n,tc),w(Is,tc,null),e(Ft,k_),e(Ft,nc),e(nc,F_),k(t,oh,F),k(t,go,F),w(Ds,go,null),e(go,v_),e(go,rc),e(rc,b_),e(go,y_),e(go,Ns),e(Ns,w_),e(Ns,Ss),e(Ss,T_),e(Ns,$_),e(go,x_),e(go,Oe),w(Os,Oe,null),e(Oe,R_),e(Oe,vt),e(vt,M_),e(vt,$l),e($l,E_),e(vt,z_),e(vt,sc),e(sc,j_),e(vt,C_),e(Oe,q_),w(xn,Oe,null),e(Oe,P_),w(Rn,Oe,null),e(Oe,A_),w(Mn,Oe,null),e(Oe,L_),w(En,Oe,null),e(Oe,I_),w(zn,Oe,null),k(t,th,F),k(t,bt,F),e(bt,jn),e(jn,ac),w(Ws,ac,null),e(bt,D_),e(bt,ic),e(ic,N_),k(t,nh,F),k(t,_o,F),w(Us,_o,null),e(_o,S_),e(_o,lc),e(lc,O_),e(_o,W_),e(_o,Qs),e(Qs,U_),e(Qs,Hs),e(Hs,Q_),e(Qs,H_),e(_o,V_),e(_o,wo),w(Vs,wo,null),e(wo,B_),e(wo,yt),e(yt,K_),e(yt,xl),e(xl,J_),e(yt,G_),e(yt,dc),e(dc,X_),e(yt,Y_),e(wo,Z_),w(Cn,wo,null),e(wo,e1),w(qn,wo,null),k(t,rh,F),k(t,wt,F),e(wt,Pn),e(Pn,cc),w(Bs,cc,null),e(wt,o1),e(wt,pc),e(pc,t1),k(t,sh,F),k(t,ko,F),w(Ks,ko,null),e(ko,n1),e(ko,mc),e(mc,r1),e(ko,s1),e(ko,Js),e(Js,a1),e(Js,Gs),e(Gs,i1),e(Js,l1),e(ko,d1),e(ko,oo),w(Xs,oo,null),e(oo,c1),e(oo,Tt),e(Tt,p1),e(Tt,Rl),e(Rl,m1),e(Tt,h1),e(Tt,hc),e(hc,f1),e(Tt,u1),e(oo,g1),w(An,oo,null),e(oo,_1),w(Ln,oo,null),e(oo,k1),w(In,oo,null),k(t,ah,F),k(t,$t,F),e($t,Dn),e(Dn,fc),w(Ys,fc,null),e($t,F1),e($t,uc),e(uc,v1),k(t,ih,F),k(t,Fo,F),w(Zs,Fo,null),e(Fo,b1),e(Fo,xt),e(xt,y1),e(xt,gc),e(gc,w1),e(xt,T1),e(xt,_c),e(_c,$1),e(xt,x1),e(Fo,R1),e(Fo,ea),e(ea,M1),e(ea,oa),e(oa,E1),e(ea,z1),e(Fo,j1),e(Fo,to),w(ta,to,null),e(to,C1),e(to,Rt),e(Rt,q1),e(Rt,Ml),e(Ml,P1),e(Rt,A1),e(Rt,kc),e(kc,L1),e(Rt,I1),e(to,D1),w(Nn,to,null),e(to,N1),w(Sn,to,null),e(to,S1),w(On,to,null),k(t,lh,F),k(t,Mt,F),e(Mt,Wn),e(Wn,Fc),w(na,Fc,null),e(Mt,O1),e(Mt,vc),e(vc,W1),k(t,dh,F),k(t,Qe,F),w(ra,Qe,null),e(Qe,U1),e(Qe,bc),e(bc,Q1),e(Qe,H1),e(Qe,sa),e(sa,V1),e(sa,El),e(El,B1),e(sa,K1),e(Qe,J1),e(Qe,aa),e(aa,G1),e(aa,ia),e(ia,X1),e(aa,Y1),e(Qe,Z1),w(Un,Qe,null),e(Qe,ek),e(Qe,To),w(la,To,null),e(To,ok),e(To,Et),e(Et,tk),e(Et,zl),e(zl,nk),e(Et,rk),e(Et,yc),e(yc,sk),e(Et,ak),e(To,ik),w(Qn,To,null),e(To,lk),w(Hn,To,null),k(t,ch,F),k(t,zt,F),e(zt,Vn),e(Vn,wc),w(da,wc,null),e(zt,dk),e(zt,Tc),e(Tc,ck),k(t,ph,F),k(t,He,F),w(ca,He,null),e(He,pk),e(He,pa),e(pa,mk),e(pa,$c),e($c,hk),e(pa,fk),e(He,uk),e(He,ma),e(ma,gk),e(ma,jl),e(jl,_k),e(ma,kk),e(He,Fk),e(He,ha),e(ha,vk),e(ha,fa),e(fa,bk),e(ha,yk),e(He,wk),w(Bn,He,null),e(He,Tk),e(He,no),w(ua,no,null),e(no,$k),e(no,jt),e(jt,xk),e(jt,Cl),e(Cl,Rk),e(jt,Mk),e(jt,xc),e(xc,Ek),e(jt,zk),e(no,jk),w(Kn,no,null),e(no,Ck),w(Jn,no,null),e(no,qk),w(Gn,no,null),k(t,mh,F),k(t,Ct,F),e(Ct,Xn),e(Xn,Rc),w(ga,Rc,null),e(Ct,Pk),e(Ct,Mc),e(Mc,Ak),k(t,hh,F),k(t,Ve,F),w(_a,Ve,null),e(Ve,Lk),e(Ve,ka),e(ka,Ik),e(ka,Ec),e(Ec,Dk),e(ka,Nk),e(Ve,Sk),e(Ve,Fa),e(Fa,Ok),e(Fa,ql),e(ql,Wk),e(Fa,Uk),e(Ve,Qk),e(Ve,va),e(va,Hk),e(va,ba),e(ba,Vk),e(va,Bk),e(Ve,Kk),w(Yn,Ve,null),e(Ve,Jk),e(Ve,Yo),w(ya,Yo,null),e(Yo,Gk),e(Yo,Ye),e(Ye,Xk),e(Ye,zc),e(zc,Yk),e(Ye,Zk),e(Ye,jc),e(jc,eF),e(Ye,oF),e(Ye,Cc),e(Cc,tF),e(Ye,nF),e(Ye,qc),e(qc,rF),e(Ye,sF),e(Ye,Pc),e(Pc,aF),e(Ye,iF),e(Yo,lF),w(Zn,Yo,null),k(t,fh,F),k(t,qt,F),e(qt,er),e(er,Ac),w(wa,Ac,null),e(qt,dF),e(qt,Lc),e(Lc,cF),k(t,uh,F),k(t,Be,F),w(Ta,Be,null),e(Be,pF),e(Be,Ic),e(Ic,mF),e(Be,hF),e(Be,$a),e($a,fF),e($a,Pl),e(Pl,uF),e($a,gF),e(Be,_F),e(Be,xa),e(xa,kF),e(xa,Ra),e(Ra,FF),e(xa,vF),e(Be,bF),w(or,Be,null),e(Be,yF),e(Be,ro),w(Ma,ro,null),e(ro,wF),e(ro,Pt),e(Pt,TF),e(Pt,Al),e(Al,$F),e(Pt,xF),e(Pt,Dc),e(Dc,RF),e(Pt,MF),e(ro,EF),w(tr,ro,null),e(ro,zF),w(nr,ro,null),e(ro,jF),w(rr,ro,null),k(t,gh,F),k(t,At,F),e(At,sr),e(sr,Nc),w(Ea,Nc,null),e(At,CF),e(At,Sc),e(Sc,qF),k(t,_h,F),k(t,Ke,F),w(za,Ke,null),e(Ke,PF),e(Ke,Oc),e(Oc,AF),e(Ke,LF),e(Ke,ja),e(ja,IF),e(ja,Ll),e(Ll,DF),e(ja,NF),e(Ke,SF),e(Ke,Ca),e(Ca,OF),e(Ca,qa),e(qa,WF),e(Ca,UF),e(Ke,QF),w(ar,Ke,null),e(Ke,HF),e(Ke,$o),w(Pa,$o,null),e($o,VF),e($o,Lt),e(Lt,BF),e(Lt,Il),e(Il,KF),e(Lt,JF),e(Lt,Wc),e(Wc,GF),e(Lt,XF),e($o,YF),w(ir,$o,null),e($o,ZF),w(lr,$o,null),k(t,kh,F),k(t,It,F),e(It,dr),e(dr,Uc),w(Aa,Uc,null),e(It,ev),e(It,Qc),e(Qc,ov),k(t,Fh,F),k(t,Je,F),w(La,Je,null),e(Je,tv),e(Je,Hc),e(Hc,nv),e(Je,rv),e(Je,Ia),e(Ia,sv),e(Ia,Dl),e(Dl,av),e(Ia,iv),e(Je,lv),e(Je,Da),e(Da,dv),e(Da,Na),e(Na,cv),e(Da,pv),e(Je,mv),w(cr,Je,null),e(Je,hv),e(Je,so),w(Sa,so,null),e(so,fv),e(so,Dt),e(Dt,uv),e(Dt,Nl),e(Nl,gv),e(Dt,_v),e(Dt,Vc),e(Vc,kv),e(Dt,Fv),e(so,vv),w(pr,so,null),e(so,bv),w(mr,so,null),e(so,yv),w(hr,so,null),k(t,vh,F),k(t,Nt,F),e(Nt,fr),e(fr,Bc),w(Oa,Bc,null),e(Nt,wv),e(Nt,Kc),e(Kc,Tv),k(t,bh,F),k(t,Ge,F),w(Wa,Ge,null),e(Ge,$v),e(Ge,St),e(St,xv),e(St,Jc),e(Jc,Rv),e(St,Mv),e(St,Gc),e(Gc,Ev),e(St,zv),e(Ge,jv),e(Ge,Ua),e(Ua,Cv),e(Ua,Sl),e(Sl,qv),e(Ua,Pv),e(Ge,Av),e(Ge,Qa),e(Qa,Lv),e(Qa,Ha),e(Ha,Iv),e(Qa,Dv),e(Ge,Nv),w(ur,Ge,null),e(Ge,Sv),e(Ge,ao),w(Va,ao,null),e(ao,Ov),e(ao,Ot),e(Ot,Wv),e(Ot,Ol),e(Ol,Uv),e(Ot,Qv),e(Ot,Xc),e(Xc,Hv),e(Ot,Vv),e(ao,Bv),w(gr,ao,null),e(ao,Kv),w(_r,ao,null),e(ao,Jv),w(kr,ao,null),k(t,yh,F),k(t,Wt,F),e(Wt,Fr),e(Fr,Yc),w(Ba,Yc,null),e(Wt,Gv),e(Wt,Zc),e(Zc,Xv),k(t,wh,F),k(t,Pe,F),w(Ka,Pe,null),e(Pe,Yv),e(Pe,ep),e(ep,Zv),e(Pe,eb),e(Pe,Ja),e(Ja,ob),e(Ja,Wl),e(Wl,tb),e(Ja,nb),e(Pe,rb),e(Pe,Ga),e(Ga,sb),e(Ga,Xa),e(Xa,ab),e(Ga,ib),e(Pe,lb),e(Pe,op),e(op,db),e(Pe,cb),e(Pe,Wo),e(Wo,tp),e(tp,Ya),e(Ya,pb),e(Wo,mb),e(Wo,np),e(np,Za),e(Za,hb),e(Wo,fb),e(Wo,rp),e(rp,ei),e(ei,ub),e(Wo,gb),e(Wo,sp),e(sp,oi),e(oi,_b),e(Pe,kb),e(Pe,xo),w(ti,xo,null),e(xo,Fb),e(xo,Ut),e(Ut,vb),e(Ut,ap),e(ap,bb),e(Ut,yb),e(Ut,ip),e(ip,wb),e(Ut,Tb),e(xo,$b),w(vr,xo,null),e(xo,xb),w(br,xo,null),k(t,Th,F),k(t,Qt,F),e(Qt,yr),e(yr,lp),w(ni,lp,null),e(Qt,Rb),e(Qt,dp),e(dp,Mb),k(t,$h,F),k(t,Ae,F),w(ri,Ae,null),e(Ae,Eb),e(Ae,si),e(si,zb),e(si,cp),e(cp,jb),e(si,Cb),e(Ae,qb),e(Ae,ai),e(ai,Pb),e(ai,Ul),e(Ul,Ab),e(ai,Lb),e(Ae,Ib),e(Ae,ii),e(ii,Db),e(ii,li),e(li,Nb),e(ii,Sb),e(Ae,Ob),e(Ae,pp),e(pp,Wb),e(Ae,Ub),e(Ae,Uo),e(Uo,mp),e(mp,di),e(di,Qb),e(Uo,Hb),e(Uo,hp),e(hp,ci),e(ci,Vb),e(Uo,Bb),e(Uo,fp),e(fp,pi),e(pi,Kb),e(Uo,Jb),e(Uo,up),e(up,mi),e(mi,Gb),e(Ae,Xb),e(Ae,Ro),w(hi,Ro,null),e(Ro,Yb),e(Ro,Ht),e(Ht,Zb),e(Ht,gp),e(gp,ey),e(Ht,oy),e(Ht,_p),e(_p,ty),e(Ht,ny),e(Ro,ry),w(wr,Ro,null),e(Ro,sy),w(Tr,Ro,null),k(t,xh,F),k(t,Vt,F),e(Vt,$r),e($r,kp),w(fi,kp,null),e(Vt,ay),e(Vt,Fp),e(Fp,iy),k(t,Rh,F),k(t,Le,F),w(ui,Le,null),e(Le,ly),e(Le,vp),e(vp,dy),e(Le,cy),e(Le,gi),e(gi,py),e(gi,Ql),e(Ql,my),e(gi,hy),e(Le,fy),e(Le,_i),e(_i,uy),e(_i,ki),e(ki,gy),e(_i,_y),e(Le,ky),e(Le,bp),e(bp,Fy),e(Le,vy),e(Le,Qo),e(Qo,yp),e(yp,Fi),e(Fi,by),e(Qo,yy),e(Qo,wp),e(wp,vi),e(vi,wy),e(Qo,Ty),e(Qo,Tp),e(Tp,bi),e(bi,$y),e(Qo,xy),e(Qo,$p),e($p,yi),e(yi,Ry),e(Le,My),e(Le,Mo),w(wi,Mo,null),e(Mo,Ey),e(Mo,Bt),e(Bt,zy),e(Bt,xp),e(xp,jy),e(Bt,Cy),e(Bt,Rp),e(Rp,qy),e(Bt,Py),e(Mo,Ay),w(xr,Mo,null),e(Mo,Ly),w(Rr,Mo,null),k(t,Mh,F),k(t,Kt,F),e(Kt,Mr),e(Mr,Mp),w(Ti,Mp,null),e(Kt,Iy),e(Kt,Ep),e(Ep,Dy),k(t,Eh,F),k(t,Ie,F),w($i,Ie,null),e(Ie,Ny),e(Ie,zp),e(zp,Sy),e(Ie,Oy),e(Ie,xi),e(xi,Wy),e(xi,Hl),e(Hl,Uy),e(xi,Qy),e(Ie,Hy),e(Ie,Ri),e(Ri,Vy),e(Ri,Mi),e(Mi,By),e(Ri,Ky),e(Ie,Jy),e(Ie,jp),e(jp,Gy),e(Ie,Xy),e(Ie,Ho),e(Ho,Cp),e(Cp,Ei),e(Ei,Yy),e(Ho,Zy),e(Ho,qp),e(qp,zi),e(zi,ew),e(Ho,ow),e(Ho,Pp),e(Pp,ji),e(ji,tw),e(Ho,nw),e(Ho,Ap),e(Ap,Ci),e(Ci,rw),e(Ie,sw),e(Ie,Eo),w(qi,Eo,null),e(Eo,aw),e(Eo,Jt),e(Jt,iw),e(Jt,Lp),e(Lp,lw),e(Jt,dw),e(Jt,Ip),e(Ip,cw),e(Jt,pw),e(Eo,mw),w(Er,Eo,null),e(Eo,hw),w(zr,Eo,null),k(t,zh,F),k(t,Gt,F),e(Gt,jr),e(jr,Dp),w(Pi,Dp,null),e(Gt,fw),e(Gt,Np),e(Np,uw),k(t,jh,F),k(t,De,F),w(Ai,De,null),e(De,gw),e(De,Sp),e(Sp,_w),e(De,kw),e(De,Li),e(Li,Fw),e(Li,Vl),e(Vl,vw),e(Li,bw),e(De,yw),e(De,Ii),e(Ii,ww),e(Ii,Di),e(Di,Tw),e(Ii,$w),e(De,xw),e(De,Op),e(Op,Rw),e(De,Mw),e(De,Vo),e(Vo,Wp),e(Wp,Ni),e(Ni,Ew),e(Vo,zw),e(Vo,Up),e(Up,Si),e(Si,jw),e(Vo,Cw),e(Vo,Qp),e(Qp,Oi),e(Oi,qw),e(Vo,Pw),e(Vo,Hp),e(Hp,Wi),e(Wi,Aw),e(De,Lw),e(De,zo),w(Ui,zo,null),e(zo,Iw),e(zo,Xt),e(Xt,Dw),e(Xt,Vp),e(Vp,Nw),e(Xt,Sw),e(Xt,Bp),e(Bp,Ow),e(Xt,Ww),e(zo,Uw),w(Cr,zo,null),e(zo,Qw),w(qr,zo,null),k(t,Ch,F),k(t,Yt,F),e(Yt,Pr),e(Pr,Kp),w(Qi,Kp,null),e(Yt,Hw),e(Yt,Jp),e(Jp,Vw),k(t,qh,F),k(t,Ne,F),w(Hi,Ne,null),e(Ne,Bw),e(Ne,Zt),e(Zt,Kw),e(Zt,Gp),e(Gp,Jw),e(Zt,Gw),e(Zt,Xp),e(Xp,Xw),e(Zt,Yw),e(Ne,Zw),e(Ne,Vi),e(Vi,eT),e(Vi,Bl),e(Bl,oT),e(Vi,tT),e(Ne,nT),e(Ne,Bi),e(Bi,rT),e(Bi,Ki),e(Ki,sT),e(Bi,aT),e(Ne,iT),e(Ne,Yp),e(Yp,lT),e(Ne,dT),e(Ne,Bo),e(Bo,Zp),e(Zp,Ji),e(Ji,cT),e(Bo,pT),e(Bo,em),e(em,Gi),e(Gi,mT),e(Bo,hT),e(Bo,om),e(om,Xi),e(Xi,fT),e(Bo,uT),e(Bo,tm),e(tm,Yi),e(Yi,gT),e(Ne,_T),e(Ne,jo),w(Zi,jo,null),e(jo,kT),e(jo,en),e(en,FT),e(en,nm),e(nm,vT),e(en,bT),e(en,rm),e(rm,yT),e(en,wT),e(jo,TT),w(Ar,jo,null),e(jo,$T),w(Lr,jo,null),Ph=!0},p(t,[F]){const el={};F&2&&(el.$$scope={dirty:F,ctx:t}),an.$set(el);const sm={};F&2&&(sm.$$scope={dirty:F,ctx:t}),dn.$set(sm);const am={};F&2&&(am.$$scope={dirty:F,ctx:t}),pn.$set(am);const im={};F&2&&(im.$$scope={dirty:F,ctx:t}),fn.$set(im);const ol={};F&2&&(ol.$$scope={dirty:F,ctx:t}),gn.$set(ol);const lm={};F&2&&(lm.$$scope={dirty:F,ctx:t}),_n.$set(lm);const dm={};F&2&&(dm.$$scope={dirty:F,ctx:t}),Fn.$set(dm);const cm={};F&2&&(cm.$$scope={dirty:F,ctx:t}),vn.$set(cm);const tl={};F&2&&(tl.$$scope={dirty:F,ctx:t}),yn.$set(tl);const pm={};F&2&&(pm.$$scope={dirty:F,ctx:t}),wn.$set(pm);const mm={};F&2&&(mm.$$scope={dirty:F,ctx:t}),Tn.$set(mm);const hm={};F&2&&(hm.$$scope={dirty:F,ctx:t}),xn.$set(hm);const fm={};F&2&&(fm.$$scope={dirty:F,ctx:t}),Rn.$set(fm);const um={};F&2&&(um.$$scope={dirty:F,ctx:t}),Mn.$set(um);const gm={};F&2&&(gm.$$scope={dirty:F,ctx:t}),En.$set(gm);const _m={};F&2&&(_m.$$scope={dirty:F,ctx:t}),zn.$set(_m);const on={};F&2&&(on.$$scope={dirty:F,ctx:t}),Cn.$set(on);const km={};F&2&&(km.$$scope={dirty:F,ctx:t}),qn.$set(km);const Fm={};F&2&&(Fm.$$scope={dirty:F,ctx:t}),An.$set(Fm);const nl={};F&2&&(nl.$$scope={dirty:F,ctx:t}),Ln.$set(nl);const vm={};F&2&&(vm.$$scope={dirty:F,ctx:t}),In.$set(vm);const bm={};F&2&&(bm.$$scope={dirty:F,ctx:t}),Nn.$set(bm);const ym={};F&2&&(ym.$$scope={dirty:F,ctx:t}),Sn.$set(ym);const Ko={};F&2&&(Ko.$$scope={dirty:F,ctx:t}),On.$set(Ko);const tn={};F&2&&(tn.$$scope={dirty:F,ctx:t}),Un.$set(tn);const wm={};F&2&&(wm.$$scope={dirty:F,ctx:t}),Qn.$set(wm);const Tm={};F&2&&(Tm.$$scope={dirty:F,ctx:t}),Hn.$set(Tm);const nn={};F&2&&(nn.$$scope={dirty:F,ctx:t}),Bn.$set(nn);const $m={};F&2&&($m.$$scope={dirty:F,ctx:t}),Kn.$set($m);const xm={};F&2&&(xm.$$scope={dirty:F,ctx:t}),Jn.$set(xm);const rl={};F&2&&(rl.$$scope={dirty:F,ctx:t}),Gn.$set(rl);const Rm={};F&2&&(Rm.$$scope={dirty:F,ctx:t}),Yn.$set(Rm);const Mm={};F&2&&(Mm.$$scope={dirty:F,ctx:t}),Zn.$set(Mm);const Em={};F&2&&(Em.$$scope={dirty:F,ctx:t}),or.$set(Em);const Se={};F&2&&(Se.$$scope={dirty:F,ctx:t}),tr.$set(Se);const sl={};F&2&&(sl.$$scope={dirty:F,ctx:t}),nr.$set(sl);const zm={};F&2&&(zm.$$scope={dirty:F,ctx:t}),rr.$set(zm);const al={};F&2&&(al.$$scope={dirty:F,ctx:t}),ar.$set(al);const jm={};F&2&&(jm.$$scope={dirty:F,ctx:t}),ir.$set(jm);const rn={};F&2&&(rn.$$scope={dirty:F,ctx:t}),lr.$set(rn);const Cm={};F&2&&(Cm.$$scope={dirty:F,ctx:t}),cr.$set(Cm);const il={};F&2&&(il.$$scope={dirty:F,ctx:t}),pr.$set(il);const Kl={};F&2&&(Kl.$$scope={dirty:F,ctx:t}),mr.$set(Kl);const qm={};F&2&&(qm.$$scope={dirty:F,ctx:t}),hr.$set(qm);const Jl={};F&2&&(Jl.$$scope={dirty:F,ctx:t}),ur.$set(Jl);const Pm={};F&2&&(Pm.$$scope={dirty:F,ctx:t}),gr.$set(Pm);const ll={};F&2&&(ll.$$scope={dirty:F,ctx:t}),_r.$set(ll);const dl={};F&2&&(dl.$$scope={dirty:F,ctx:t}),kr.$set(dl);const Am={};F&2&&(Am.$$scope={dirty:F,ctx:t}),vr.$set(Am);const Jo={};F&2&&(Jo.$$scope={dirty:F,ctx:t}),br.$set(Jo);const Lm={};F&2&&(Lm.$$scope={dirty:F,ctx:t}),wr.$set(Lm);const sn={};F&2&&(sn.$$scope={dirty:F,ctx:t}),Tr.$set(sn);const Im={};F&2&&(Im.$$scope={dirty:F,ctx:t}),xr.$set(Im);const Dm={};F&2&&(Dm.$$scope={dirty:F,ctx:t}),Rr.$set(Dm);const Nm={};F&2&&(Nm.$$scope={dirty:F,ctx:t}),Er.$set(Nm);const cl={};F&2&&(cl.$$scope={dirty:F,ctx:t}),zr.$set(cl);const Sm={};F&2&&(Sm.$$scope={dirty:F,ctx:t}),Cr.$set(Sm);const Om={};F&2&&(Om.$$scope={dirty:F,ctx:t}),qr.$set(Om);const Wm={};F&2&&(Wm.$$scope={dirty:F,ctx:t}),Ar.$set(Wm);const Ze={};F&2&&(Ze.$$scope={dirty:F,ctx:t}),Lr.$set(Ze)},i(t){Ph||(T(l.$$.fragment,t),T(ee.$$.fragment,t),T(Te.$$.fragment,t),T(D.$$.fragment,t),T(an.$$.fragment,t),T(ss.$$.fragment,t),T(as.$$.fragment,t),T(dn.$$.fragment,t),T(cs.$$.fragment,t),T(ms.$$.fragment,t),T(fs.$$.fragment,t),T(pn.$$.fragment,t),T(us.$$.fragment,t),T(gs.$$.fragment,t),T(_s.$$.fragment,t),T(fn.$$.fragment,t),T(vs.$$.fragment,t),T(ys.$$.fragment,t),T(ws.$$.fragment,t),T(Ms.$$.fragment,t),T(gn.$$.fragment,t),T(_n.$$.fragment,t),T(Es.$$.fragment,t),T(zs.$$.fragment,t),T(Cs.$$.fragment,t),T(Fn.$$.fragment,t),T(vn.$$.fragment,t),T(qs.$$.fragment,t),T(Ps.$$.fragment,t),T(Ls.$$.fragment,t),T(yn.$$.fragment,t),T(wn.$$.fragment,t),T(Tn.$$.fragment,t),T(Is.$$.fragment,t),T(Ds.$$.fragment,t),T(Os.$$.fragment,t),T(xn.$$.fragment,t),T(Rn.$$.fragment,t),T(Mn.$$.fragment,t),T(En.$$.fragment,t),T(zn.$$.fragment,t),T(Ws.$$.fragment,t),T(Us.$$.fragment,t),T(Vs.$$.fragment,t),T(Cn.$$.fragment,t),T(qn.$$.fragment,t),T(Bs.$$.fragment,t),T(Ks.$$.fragment,t),T(Xs.$$.fragment,t),T(An.$$.fragment,t),T(Ln.$$.fragment,t),T(In.$$.fragment,t),T(Ys.$$.fragment,t),T(Zs.$$.fragment,t),T(ta.$$.fragment,t),T(Nn.$$.fragment,t),T(Sn.$$.fragment,t),T(On.$$.fragment,t),T(na.$$.fragment,t),T(ra.$$.fragment,t),T(Un.$$.fragment,t),T(la.$$.fragment,t),T(Qn.$$.fragment,t),T(Hn.$$.fragment,t),T(da.$$.fragment,t),T(ca.$$.fragment,t),T(Bn.$$.fragment,t),T(ua.$$.fragment,t),T(Kn.$$.fragment,t),T(Jn.$$.fragment,t),T(Gn.$$.fragment,t),T(ga.$$.fragment,t),T(_a.$$.fragment,t),T(Yn.$$.fragment,t),T(ya.$$.fragment,t),T(Zn.$$.fragment,t),T(wa.$$.fragment,t),T(Ta.$$.fragment,t),T(or.$$.fragment,t),T(Ma.$$.fragment,t),T(tr.$$.fragment,t),T(nr.$$.fragment,t),T(rr.$$.fragment,t),T(Ea.$$.fragment,t),T(za.$$.fragment,t),T(ar.$$.fragment,t),T(Pa.$$.fragment,t),T(ir.$$.fragment,t),T(lr.$$.fragment,t),T(Aa.$$.fragment,t),T(La.$$.fragment,t),T(cr.$$.fragment,t),T(Sa.$$.fragment,t),T(pr.$$.fragment,t),T(mr.$$.fragment,t),T(hr.$$.fragment,t),T(Oa.$$.fragment,t),T(Wa.$$.fragment,t),T(ur.$$.fragment,t),T(Va.$$.fragment,t),T(gr.$$.fragment,t),T(_r.$$.fragment,t),T(kr.$$.fragment,t),T(Ba.$$.fragment,t),T(Ka.$$.fragment,t),T(ti.$$.fragment,t),T(vr.$$.fragment,t),T(br.$$.fragment,t),T(ni.$$.fragment,t),T(ri.$$.fragment,t),T(hi.$$.fragment,t),T(wr.$$.fragment,t),T(Tr.$$.fragment,t),T(fi.$$.fragment,t),T(ui.$$.fragment,t),T(wi.$$.fragment,t),T(xr.$$.fragment,t),T(Rr.$$.fragment,t),T(Ti.$$.fragment,t),T($i.$$.fragment,t),T(qi.$$.fragment,t),T(Er.$$.fragment,t),T(zr.$$.fragment,t),T(Pi.$$.fragment,t),T(Ai.$$.fragment,t),T(Ui.$$.fragment,t),T(Cr.$$.fragment,t),T(qr.$$.fragment,t),T(Qi.$$.fragment,t),T(Hi.$$.fragment,t),T(Zi.$$.fragment,t),T(Ar.$$.fragment,t),T(Lr.$$.fragment,t),Ph=!0)},o(t){$(l.$$.fragment,t),$(ee.$$.fragment,t),$(Te.$$.fragment,t),$(D.$$.fragment,t),$(an.$$.fragment,t),$(ss.$$.fragment,t),$(as.$$.fragment,t),$(dn.$$.fragment,t),$(cs.$$.fragment,t),$(ms.$$.fragment,t),$(fs.$$.fragment,t),$(pn.$$.fragment,t),$(us.$$.fragment,t),$(gs.$$.fragment,t),$(_s.$$.fragment,t),$(fn.$$.fragment,t),$(vs.$$.fragment,t),$(ys.$$.fragment,t),$(ws.$$.fragment,t),$(Ms.$$.fragment,t),$(gn.$$.fragment,t),$(_n.$$.fragment,t),$(Es.$$.fragment,t),$(zs.$$.fragment,t),$(Cs.$$.fragment,t),$(Fn.$$.fragment,t),$(vn.$$.fragment,t),$(qs.$$.fragment,t),$(Ps.$$.fragment,t),$(Ls.$$.fragment,t),$(yn.$$.fragment,t),$(wn.$$.fragment,t),$(Tn.$$.fragment,t),$(Is.$$.fragment,t),$(Ds.$$.fragment,t),$(Os.$$.fragment,t),$(xn.$$.fragment,t),$(Rn.$$.fragment,t),$(Mn.$$.fragment,t),$(En.$$.fragment,t),$(zn.$$.fragment,t),$(Ws.$$.fragment,t),$(Us.$$.fragment,t),$(Vs.$$.fragment,t),$(Cn.$$.fragment,t),$(qn.$$.fragment,t),$(Bs.$$.fragment,t),$(Ks.$$.fragment,t),$(Xs.$$.fragment,t),$(An.$$.fragment,t),$(Ln.$$.fragment,t),$(In.$$.fragment,t),$(Ys.$$.fragment,t),$(Zs.$$.fragment,t),$(ta.$$.fragment,t),$(Nn.$$.fragment,t),$(Sn.$$.fragment,t),$(On.$$.fragment,t),$(na.$$.fragment,t),$(ra.$$.fragment,t),$(Un.$$.fragment,t),$(la.$$.fragment,t),$(Qn.$$.fragment,t),$(Hn.$$.fragment,t),$(da.$$.fragment,t),$(ca.$$.fragment,t),$(Bn.$$.fragment,t),$(ua.$$.fragment,t),$(Kn.$$.fragment,t),$(Jn.$$.fragment,t),$(Gn.$$.fragment,t),$(ga.$$.fragment,t),$(_a.$$.fragment,t),$(Yn.$$.fragment,t),$(ya.$$.fragment,t),$(Zn.$$.fragment,t),$(wa.$$.fragment,t),$(Ta.$$.fragment,t),$(or.$$.fragment,t),$(Ma.$$.fragment,t),$(tr.$$.fragment,t),$(nr.$$.fragment,t),$(rr.$$.fragment,t),$(Ea.$$.fragment,t),$(za.$$.fragment,t),$(ar.$$.fragment,t),$(Pa.$$.fragment,t),$(ir.$$.fragment,t),$(lr.$$.fragment,t),$(Aa.$$.fragment,t),$(La.$$.fragment,t),$(cr.$$.fragment,t),$(Sa.$$.fragment,t),$(pr.$$.fragment,t),$(mr.$$.fragment,t),$(hr.$$.fragment,t),$(Oa.$$.fragment,t),$(Wa.$$.fragment,t),$(ur.$$.fragment,t),$(Va.$$.fragment,t),$(gr.$$.fragment,t),$(_r.$$.fragment,t),$(kr.$$.fragment,t),$(Ba.$$.fragment,t),$(Ka.$$.fragment,t),$(ti.$$.fragment,t),$(vr.$$.fragment,t),$(br.$$.fragment,t),$(ni.$$.fragment,t),$(ri.$$.fragment,t),$(hi.$$.fragment,t),$(wr.$$.fragment,t),$(Tr.$$.fragment,t),$(fi.$$.fragment,t),$(ui.$$.fragment,t),$(wi.$$.fragment,t),$(xr.$$.fragment,t),$(Rr.$$.fragment,t),$(Ti.$$.fragment,t),$($i.$$.fragment,t),$(qi.$$.fragment,t),$(Er.$$.fragment,t),$(zr.$$.fragment,t),$(Pi.$$.fragment,t),$(Ai.$$.fragment,t),$(Ui.$$.fragment,t),$(Cr.$$.fragment,t),$(qr.$$.fragment,t),$(Qi.$$.fragment,t),$(Hi.$$.fragment,t),$(Zi.$$.fragment,t),$(Ar.$$.fragment,t),$(Lr.$$.fragment,t),Ph=!1},d(t){o(d),t&&o(g),t&&o(c),x(l),t&&o(J),t&&o(z),x(ee),t&&o(pe),t&&o(K),t&&o(q),t&&o(ne),t&&o(me),t&&o(re),t&&o(he),t&&o(C),t&&o(U),t&&o(se),t&&o(fe),t&&o(X),t&&o(Me),t&&o(ye),x(Te),t&&o(Ee),t&&o(ae),x(D),x(an),t&&o(Qm),t&&o(lt),x(ss),t&&o(Hm),t&&o(qe),x(as),x(dn),x(cs),x(ms),x(fs),x(pn),x(us),t&&o(Vm),t&&o(ct),x(gs),t&&o(Bm),t&&o(We),x(_s),x(fn),x(vs),t&&o(Km),t&&o(pt),x(ys),t&&o(Jm),t&&o(Xe),x(ws),x(Ms),x(gn),x(_n),t&&o(Gm),t&&o(ht),x(Es),t&&o(Xm),t&&o(So),x(zs),x(Cs),x(Fn),x(vn),t&&o(Ym),t&&o(gt),x(qs),t&&o(Zm),t&&o(Oo),x(Ps),x(Ls),x(yn),x(wn),x(Tn),t&&o(eh),t&&o(Ft),x(Is),t&&o(oh),t&&o(go),x(Ds),x(Os),x(xn),x(Rn),x(Mn),x(En),x(zn),t&&o(th),t&&o(bt),x(Ws),t&&o(nh),t&&o(_o),x(Us),x(Vs),x(Cn),x(qn),t&&o(rh),t&&o(wt),x(Bs),t&&o(sh),t&&o(ko),x(Ks),x(Xs),x(An),x(Ln),x(In),t&&o(ah),t&&o($t),x(Ys),t&&o(ih),t&&o(Fo),x(Zs),x(ta),x(Nn),x(Sn),x(On),t&&o(lh),t&&o(Mt),x(na),t&&o(dh),t&&o(Qe),x(ra),x(Un),x(la),x(Qn),x(Hn),t&&o(ch),t&&o(zt),x(da),t&&o(ph),t&&o(He),x(ca),x(Bn),x(ua),x(Kn),x(Jn),x(Gn),t&&o(mh),t&&o(Ct),x(ga),t&&o(hh),t&&o(Ve),x(_a),x(Yn),x(ya),x(Zn),t&&o(fh),t&&o(qt),x(wa),t&&o(uh),t&&o(Be),x(Ta),x(or),x(Ma),x(tr),x(nr),x(rr),t&&o(gh),t&&o(At),x(Ea),t&&o(_h),t&&o(Ke),x(za),x(ar),x(Pa),x(ir),x(lr),t&&o(kh),t&&o(It),x(Aa),t&&o(Fh),t&&o(Je),x(La),x(cr),x(Sa),x(pr),x(mr),x(hr),t&&o(vh),t&&o(Nt),x(Oa),t&&o(bh),t&&o(Ge),x(Wa),x(ur),x(Va),x(gr),x(_r),x(kr),t&&o(yh),t&&o(Wt),x(Ba),t&&o(wh),t&&o(Pe),x(Ka),x(ti),x(vr),x(br),t&&o(Th),t&&o(Qt),x(ni),t&&o($h),t&&o(Ae),x(ri),x(hi),x(wr),x(Tr),t&&o(xh),t&&o(Vt),x(fi),t&&o(Rh),t&&o(Le),x(ui),x(wi),x(xr),x(Rr),t&&o(Mh),t&&o(Kt),x(Ti),t&&o(Eh),t&&o(Ie),x($i),x(qi),x(Er),x(zr),t&&o(zh),t&&o(Gt),x(Pi),t&&o(jh),t&&o(De),x(Ai),x(Ui),x(Cr),x(qr),t&&o(Ch),t&&o(Yt),x(Qi),t&&o(qh),t&&o(Ne),x(Hi),x(Zi),x(Ar),x(Lr)}}}const GR={local:"roformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.RoFormerConfig",title:"RoFormerConfig"},{local:"transformers.RoFormerTokenizer",title:"RoFormerTokenizer"},{local:"transformers.RoFormerTokenizerFast",title:"RoFormerTokenizerFast"},{local:"transformers.RoFormerModel",title:"RoFormerModel"},{local:"transformers.RoFormerForCausalLM",title:"RoFormerForCausalLM"},{local:"transformers.RoFormerForMaskedLM",title:"RoFormerForMaskedLM"},{local:"transformers.RoFormerForSequenceClassification",title:"RoFormerForSequenceClassification"},{local:"transformers.RoFormerForMultipleChoice",title:"RoFormerForMultipleChoice"},{local:"transformers.RoFormerForTokenClassification",title:"RoFormerForTokenClassification"},{local:"transformers.RoFormerForQuestionAnswering",title:"RoFormerForQuestionAnswering"},{local:"transformers.TFRoFormerModel",title:"TFRoFormerModel"},{local:"transformers.TFRoFormerForMaskedLM",title:"TFRoFormerForMaskedLM"},{local:"transformers.TFRoFormerForCausalLM",title:"TFRoFormerForCausalLM"},{local:"transformers.TFRoFormerForSequenceClassification",title:"TFRoFormerForSequenceClassification"},{local:"transformers.TFRoFormerForMultipleChoice",title:"TFRoFormerForMultipleChoice"},{local:"transformers.TFRoFormerForTokenClassification",title:"TFRoFormerForTokenClassification"},{local:"transformers.TFRoFormerForQuestionAnswering",title:"TFRoFormerForQuestionAnswering"},{local:"transformers.FlaxRoFormerModel",title:"FlaxRoFormerModel"},{local:"transformers.FlaxRoFormerForMaskedLM",title:"FlaxRoFormerForMaskedLM"},{local:"transformers.FlaxRoFormerForSequenceClassification",title:"FlaxRoFormerForSequenceClassification"},{local:"transformers.FlaxRoFormerForMultipleChoice",title:"FlaxRoFormerForMultipleChoice"},{local:"transformers.FlaxRoFormerForTokenClassification",title:"FlaxRoFormerForTokenClassification"},{local:"transformers.FlaxRoFormerForQuestionAnswering",title:"FlaxRoFormerForQuestionAnswering"}],title:"RoFormer"};function XR(R){return Wx(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class rM extends Dx{constructor(d){super();Nx(this,d,XR,JR,Sx,{})}}export{rM as default,GR as metadata};
