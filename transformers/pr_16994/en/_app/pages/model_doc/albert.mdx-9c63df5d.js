import{S as n9,i as s9,s as r9,e as n,k as c,w as T,t as a,M as a9,c as s,d as t,m as p,a as r,x as y,h as i,b as u,F as e,g as b,y as w,q as $,o as A,B as F,v as i9,L as re}from"../../chunks/vendor-6b77c823.js";import{T as we}from"../../chunks/Tip-39098574.js";import{D as L}from"../../chunks/Docstring-1088f2fb.js";import{C as ae}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as $e}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as se}from"../../chunks/ExampleCodeBlock-5212b321.js";function l9(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertConfig, AlbertModel

# Initializing an ALBERT-xxlarge style configuration
albert_xxlarge_configuration = AlbertConfig()

# Initializing an ALBERT-base style configuration
albert_base_configuration = AlbertConfig(
    hidden_size=768,
    num_attention_heads=12,
    intermediate_size=3072,
)

# Initializing a model from the ALBERT-base style configuration
model = AlbertModel(albert_xxlarge_configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertConfig, AlbertModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing an ALBERT-xxlarge style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>albert_xxlarge_configuration = AlbertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing an ALBERT-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>albert_base_configuration = AlbertConfig(
<span class="hljs-meta">... </span>    hidden_size=<span class="hljs-number">768</span>,
<span class="hljs-meta">... </span>    num_attention_heads=<span class="hljs-number">12</span>,
<span class="hljs-meta">... </span>    intermediate_size=<span class="hljs-number">3072</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the ALBERT-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertModel(albert_xxlarge_configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=a("Examples:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Examples:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function d9(x){let d,g,h,m,_;return m=new ae({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),g=a("sequence pair mask has the following format:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"sequence pair mask has the following format:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function c9(x){let d,g,h,m,_;return m=new ae({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),g=a("sequence pair mask has the following format:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"sequence pair mask has the following format:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function p9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function h9(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertModel
import torch

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertModel.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertModel.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function m9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function f9(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertForPreTraining
import torch

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertForPreTraining.from_pretrained("albert-base-v2")

input_ids = torch.tensor(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True)).unsqueeze(0)
# Batch size 1
outputs = model(input_ids)

prediction_logits = outputs.prediction_logits
sop_logits = outputs.sop_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForPreTraining.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>)).unsqueeze(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function u9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function g9(x){let d,g,h,m,_;return m=new ae({props:{code:`import torch
from transformers import AlbertTokenizer, AlbertForMaskedLM

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertForMaskedLM.from_pretrained("albert-base-v2")

# add mask_token
inputs = tokenizer("The capital of [MASK] is Paris.", return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]
predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add mask_token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of [MASK] is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;france&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function _9(x){let d,g;return d=new ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function b9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function k9(x){let d,g,h,m,_;return m=new ae({props:{code:`import torch
from transformers import AlbertTokenizer, AlbertForSequenceClassification

tokenizer = AlbertTokenizer.from_pretrained("textattack/albert-base-v2-imdb")
model = AlbertForSequenceClassification.from_pretrained("textattack/albert-base-v2-imdb")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=n("p"),g=a("Example of single-label classification:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example of single-label classification:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function v9(x){let d,g;return d=new ae({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = AlbertForSequenceClassification.from_pretrained("textattack/albert-base-v2-imdb", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.12</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function T9(x){let d,g,h,m,_;return m=new ae({props:{code:`import torch
from transformers import AlbertTokenizer, AlbertForSequenceClassification

tokenizer = AlbertTokenizer.from_pretrained("textattack/albert-base-v2-imdb")
model = AlbertForSequenceClassification.from_pretrained("textattack/albert-base-v2-imdb", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=n("p"),g=a("Example of multi-label classification:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example of multi-label classification:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function y9(x){let d,g;return d=new ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = AlbertForSequenceClassification.from_pretrained(
    "textattack/albert-base-v2-imdb", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function w9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function $9(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertForMultipleChoice
import torch

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertForMultipleChoice.from_pretrained("albert-base-v2")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function A9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function F9(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertForTokenClassification
import torch

tokenizer = AlbertTokenizer.from_pretrained("vumichien/tiny-albert")
model = AlbertForTokenClassification.from_pretrained("vumichien/tiny-albert")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/tiny-albert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/tiny-albert&quot;</span>)

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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function x9(x){let d,g;return d=new ae({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.66</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function E9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function M9(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, AlbertForQuestionAnswering
import torch

tokenizer = AlbertTokenizer.from_pretrained("twmkn9/albert-base-v2-squad2")
model = AlbertForQuestionAnswering.from_pretrained("twmkn9/albert-base-v2-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;twmkn9/albert-base-v2-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;twmkn9/albert-base-v2-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function z9(x){let d,g;return d=new ae({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([12])
target_end_index = torch.tensor([13])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">12</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">13</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">7.36</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function q9(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,U,ee,ue,B,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ke,ce,j,ve,Q,oe,ie,V,pe,ne,N,he,S,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=c(),j=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),N=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(v),m=s(v,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(v),z=s(v,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=s(C,"CODE",{});var ye=r(B);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(v),I=s(v,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(v),q=s(v,"UL",{});var D=r(q);P=s(D,"LI",{});var O=r(P);Z=i(O,"a single Tensor with "),R=s(O,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(O," only and nothing else: "),H=s(O,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),O.forEach(t),ce=p(D),j=s(D,"LI",{});var W=r(j);ve=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),W.forEach(t),ne=p(D),N=s(D,"LI",{});var me=r(N);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s(me,"CODE",{});var Te=r(S);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),D.forEach(t)},m(v,M){b(v,d,M),e(d,g),b(v,h,M),b(v,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(v,G,M),b(v,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,B),e(B,ge),e(z,de),b(v,K,M),b(v,I,M),e(I,te),b(v,X,M),b(v,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ke),e(q,ce),e(q,j),e(j,ve),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,N),e(N,he),e(N,S),e(S,le)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(G),v&&t(z),v&&t(K),v&&t(I),v&&t(X),v&&t(q)}}}function j9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function P9(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertModel
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = TFAlbertModel.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertModel.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function C9(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,U,ee,ue,B,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ke,ce,j,ve,Q,oe,ie,V,pe,ne,N,he,S,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=c(),j=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),N=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(v),m=s(v,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(v),z=s(v,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=s(C,"CODE",{});var ye=r(B);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(v),I=s(v,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(v),q=s(v,"UL",{});var D=r(q);P=s(D,"LI",{});var O=r(P);Z=i(O,"a single Tensor with "),R=s(O,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(O," only and nothing else: "),H=s(O,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),O.forEach(t),ce=p(D),j=s(D,"LI",{});var W=r(j);ve=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),W.forEach(t),ne=p(D),N=s(D,"LI",{});var me=r(N);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s(me,"CODE",{});var Te=r(S);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),D.forEach(t)},m(v,M){b(v,d,M),e(d,g),b(v,h,M),b(v,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(v,G,M),b(v,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,B),e(B,ge),e(z,de),b(v,K,M),b(v,I,M),e(I,te),b(v,X,M),b(v,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ke),e(q,ce),e(q,j),e(j,ve),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,N),e(N,he),e(N,S),e(S,le)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(G),v&&t(z),v&&t(K),v&&t(I),v&&t(X),v&&t(q)}}}function L9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function I9(x){let d,g,h,m,_;return m=new ae({props:{code:`import tensorflow as tf
from transformers import AlbertTokenizer, TFAlbertForPreTraining

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = TFAlbertForPreTraining.from_pretrained("albert-base-v2")

input_ids = tf.constant(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True))[None, :]
# Batch size 1
outputs = model(input_ids)

prediction_logits = outputs.prediction_logits
sop_logits = outputs.sop_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForPreTraining.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>))[<span class="hljs-literal">None</span>, :]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function N9(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,U,ee,ue,B,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ke,ce,j,ve,Q,oe,ie,V,pe,ne,N,he,S,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=c(),j=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),N=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(v),m=s(v,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(v),z=s(v,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=s(C,"CODE",{});var ye=r(B);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(v),I=s(v,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(v),q=s(v,"UL",{});var D=r(q);P=s(D,"LI",{});var O=r(P);Z=i(O,"a single Tensor with "),R=s(O,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(O," only and nothing else: "),H=s(O,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),O.forEach(t),ce=p(D),j=s(D,"LI",{});var W=r(j);ve=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),W.forEach(t),ne=p(D),N=s(D,"LI",{});var me=r(N);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s(me,"CODE",{});var Te=r(S);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),D.forEach(t)},m(v,M){b(v,d,M),e(d,g),b(v,h,M),b(v,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(v,G,M),b(v,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,B),e(B,ge),e(z,de),b(v,K,M),b(v,I,M),e(I,te),b(v,X,M),b(v,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ke),e(q,ce),e(q,j),e(j,ve),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,N),e(N,he),e(N,S),e(S,le)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(G),v&&t(z),v&&t(K),v&&t(I),v&&t(X),v&&t(q)}}}function D9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function S9(x){let d,g,h,m,_;return m=new ae({props:{code:`import tensorflow as tf
from transformers import AlbertTokenizer, TFAlbertForMaskedLM

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = TFAlbertForMaskedLM.from_pretrained("albert-base-v2")

# add mask_token
inputs = tokenizer(f"The capital of [MASK] is Paris.", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]
predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add mask_token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">f&quot;The capital of [MASK] is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;france&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function O9(x){let d,g;return d=new ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function W9(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,U,ee,ue,B,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ke,ce,j,ve,Q,oe,ie,V,pe,ne,N,he,S,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=c(),j=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),N=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(v),m=s(v,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(v),z=s(v,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=s(C,"CODE",{});var ye=r(B);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(v),I=s(v,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(v),q=s(v,"UL",{});var D=r(q);P=s(D,"LI",{});var O=r(P);Z=i(O,"a single Tensor with "),R=s(O,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(O," only and nothing else: "),H=s(O,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),O.forEach(t),ce=p(D),j=s(D,"LI",{});var W=r(j);ve=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),W.forEach(t),ne=p(D),N=s(D,"LI",{});var me=r(N);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s(me,"CODE",{});var Te=r(S);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),D.forEach(t)},m(v,M){b(v,d,M),e(d,g),b(v,h,M),b(v,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(v,G,M),b(v,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,B),e(B,ge),e(z,de),b(v,K,M),b(v,I,M),e(I,te),b(v,X,M),b(v,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ke),e(q,ce),e(q,j),e(j,ve),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,N),e(N,he),e(N,S),e(S,le)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(G),v&&t(z),v&&t(K),v&&t(I),v&&t(X),v&&t(q)}}}function U9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function B9(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertForSequenceClassification
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("vumichien/albert-base-v2-imdb")
model = TFAlbertForSequenceClassification.from_pretrained("vumichien/albert-base-v2-imdb")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function R9(x){let d,g;return d=new ae({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFAlbertForSequenceClassification.from_pretrained("vumichien/albert-base-v2-imdb", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.12</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function H9(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,U,ee,ue,B,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ke,ce,j,ve,Q,oe,ie,V,pe,ne,N,he,S,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=c(),j=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),N=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(v),m=s(v,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(v),z=s(v,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=s(C,"CODE",{});var ye=r(B);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(v),I=s(v,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(v),q=s(v,"UL",{});var D=r(q);P=s(D,"LI",{});var O=r(P);Z=i(O,"a single Tensor with "),R=s(O,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(O," only and nothing else: "),H=s(O,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),O.forEach(t),ce=p(D),j=s(D,"LI",{});var W=r(j);ve=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),W.forEach(t),ne=p(D),N=s(D,"LI",{});var me=r(N);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s(me,"CODE",{});var Te=r(S);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),D.forEach(t)},m(v,M){b(v,d,M),e(d,g),b(v,h,M),b(v,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(v,G,M),b(v,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,B),e(B,ge),e(z,de),b(v,K,M),b(v,I,M),e(I,te),b(v,X,M),b(v,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ke),e(q,ce),e(q,j),e(j,ve),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,N),e(N,he),e(N,S),e(S,le)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(G),v&&t(z),v&&t(K),v&&t(I),v&&t(X),v&&t(q)}}}function Q9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function V9(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertForMultipleChoice
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = TFAlbertForMultipleChoice.from_pretrained("albert-base-v2")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function K9(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,U,ee,ue,B,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ke,ce,j,ve,Q,oe,ie,V,pe,ne,N,he,S,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=c(),j=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),N=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(v),m=s(v,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(v),z=s(v,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=s(C,"CODE",{});var ye=r(B);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(v),I=s(v,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(v),q=s(v,"UL",{});var D=r(q);P=s(D,"LI",{});var O=r(P);Z=i(O,"a single Tensor with "),R=s(O,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(O," only and nothing else: "),H=s(O,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),O.forEach(t),ce=p(D),j=s(D,"LI",{});var W=r(j);ve=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),W.forEach(t),ne=p(D),N=s(D,"LI",{});var me=r(N);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s(me,"CODE",{});var Te=r(S);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),D.forEach(t)},m(v,M){b(v,d,M),e(d,g),b(v,h,M),b(v,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(v,G,M),b(v,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,B),e(B,ge),e(z,de),b(v,K,M),b(v,I,M),e(I,te),b(v,X,M),b(v,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ke),e(q,ce),e(q,j),e(j,ve),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,N),e(N,he),e(N,S),e(S,le)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(G),v&&t(z),v&&t(K),v&&t(I),v&&t(X),v&&t(q)}}}function J9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function G9(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertForTokenClassification
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("vumichien/tiny-albert")
model = TFAlbertForTokenClassification.from_pretrained("vumichien/tiny-albert")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/tiny-albert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/tiny-albert&quot;</span>)

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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function X9(x){let d,g;return d=new ae({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.66</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Y9(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,U,ee,ue,B,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ke,ce,j,ve,Q,oe,ie,V,pe,ne,N,he,S,le;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=n("li"),fe=a("having all inputs as a list, tuple or dict in the first positional arguments."),G=c(),z=n("p"),Y=a("This second option is useful when using "),U=n("code"),ee=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=n("code"),ge=a("model(inputs)"),de=a("."),K=c(),I=n("p"),te=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=n("ul"),P=n("li"),Z=a("a single Tensor with "),R=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),H=n("code"),ke=a("model(inputs_ids)"),ce=c(),j=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=a("model([input_ids, attention_mask])"),ie=a(" or "),V=n("code"),pe=a("model([input_ids, attention_mask, token_type_ids])"),ne=c(),N=n("li"),he=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=n("code"),le=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=p(v),m=s(v,"UL",{});var J=r(m);_=s(J,"LI",{});var Fe=r(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),f=p(J),E=s(J,"LI",{});var Ae=r(E);fe=i(Ae,"having all inputs as a list, tuple or dict in the first positional arguments."),Ae.forEach(t),J.forEach(t),G=p(v),z=s(v,"P",{});var C=r(z);Y=i(C,"This second option is useful when using "),U=s(C,"CODE",{});var xe=r(U);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=s(C,"CODE",{});var ye=r(B);ge=i(ye,"model(inputs)"),ye.forEach(t),de=i(C,"."),C.forEach(t),K=p(v),I=s(v,"P",{});var Ee=r(I);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),X=p(v),q=s(v,"UL",{});var D=r(q);P=s(D,"LI",{});var O=r(P);Z=i(O,"a single Tensor with "),R=s(O,"CODE",{});var Me=r(R);_e=i(Me,"input_ids"),Me.forEach(t),be=i(O," only and nothing else: "),H=s(O,"CODE",{});var ze=r(H);ke=i(ze,"model(inputs_ids)"),ze.forEach(t),O.forEach(t),ce=p(D),j=s(D,"LI",{});var W=r(j);ve=i(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(W,"CODE",{});var qe=r(Q);oe=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ie=i(W," or "),V=s(W,"CODE",{});var je=r(V);pe=i(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),W.forEach(t),ne=p(D),N=s(D,"LI",{});var me=r(N);he=i(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s(me,"CODE",{});var Te=r(S);le=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),me.forEach(t),D.forEach(t)},m(v,M){b(v,d,M),e(d,g),b(v,h,M),b(v,m,M),e(m,_),e(_,l),e(m,f),e(m,E),e(E,fe),b(v,G,M),b(v,z,M),e(z,Y),e(z,U),e(U,ee),e(z,ue),e(z,B),e(B,ge),e(z,de),b(v,K,M),b(v,I,M),e(I,te),b(v,X,M),b(v,q,M),e(q,P),e(P,Z),e(P,R),e(R,_e),e(P,be),e(P,H),e(H,ke),e(q,ce),e(q,j),e(j,ve),e(j,Q),e(Q,oe),e(j,ie),e(j,V),e(V,pe),e(q,ne),e(q,N),e(N,he),e(N,S),e(S,le)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(G),v&&t(z),v&&t(K),v&&t(I),v&&t(X),v&&t(q)}}}function Z9(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function eM(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, TFAlbertForQuestionAnswering
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("vumichien/albert-base-v2-squad2")
model = TFAlbertForQuestionAnswering.from_pretrained("vumichien/albert-base-v2-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function tM(x){let d,g;return d=new ae({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([12])
target_end_index = tf.constant([13])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">12</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">13</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">7.36</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){A(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function oM(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function nM(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertModel

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertModel.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertModel.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function sM(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function rM(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForPreTraining

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForPreTraining.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.sop_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForPreTraining.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.sop_logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function aM(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function iM(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForMaskedLM

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForMaskedLM.from_pretrained("albert-base-v2")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function lM(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function dM(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForSequenceClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForSequenceClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function cM(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function pM(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForMultipleChoice

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForMultipleChoice.from_pretrained("albert-base-v2")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function hM(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function mM(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForTokenClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForTokenClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function fM(x){let d,g,h,m,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var E=r(h);m=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function uM(x){let d,g,h,m,_;return m=new ae({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForQuestionAnswering

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForQuestionAnswering.from_pretrained("albert-base-v2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=a("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:re,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){A(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function gM(x){let d,g,h,m,_,l,f,E,fe,G,z,Y,U,ee,ue,B,ge,de,K,I,te,X,q,P,Z,R,_e,be,H,ke,ce,j,ve,Q,oe,ie,V,pe,ne,N,he,S,le,v,M,J,Fe,Ae,C,xe,ye,Ee,D,O,Me,ze,W,qe,je,me,Te,wn,Mc,Fr,Tg,zc,yg,rf,bt,xr,wg,Ut,$g,rd,Ag,Fg,ad,xg,Eg,Er,Mg,zg,qg,bo,jg,id,Pg,Cg,ld,Lg,Ig,Ng,$n,af,ko,An,qc,Mr,Dg,jc,Sg,lf,Pe,zr,Og,qr,Wg,jr,Ug,Bg,Rg,Pr,Hg,dd,Qg,Vg,Kg,to,Cr,Jg,Pc,Gg,Xg,Lr,cd,Yg,Cc,Zg,e_,pd,t_,Lc,o_,n_,Fn,Ir,s_,Nr,r_,Ic,a_,i_,l_,vt,Dr,d_,Nc,c_,p_,xn,h_,vo,m_,Dc,f_,u_,Sc,g_,__,b_,hd,Sr,df,To,En,Oc,Or,k_,Wc,v_,cf,kt,Wr,T_,Bt,y_,Uc,w_,$_,Ur,A_,F_,md,x_,E_,M_,oo,Br,z_,Bc,q_,j_,Rr,fd,P_,Rc,C_,L_,ud,I_,Hc,N_,D_,Tt,Hr,S_,Qc,O_,W_,Mn,U_,Vc,B_,pf,yo,zn,Kc,Qr,R_,Jc,H_,hf,wo,Vr,Q_,Kr,V_,gd,K_,J_,mf,$o,Jr,G_,Gr,X_,_d,Y_,Z_,ff,Ao,qn,Gc,Xr,eb,Xc,tb,uf,Ge,Yr,ob,Yc,nb,sb,Zr,rb,bd,ab,ib,lb,ea,db,ta,cb,pb,hb,yt,oa,mb,Fo,fb,kd,ub,gb,Zc,_b,bb,kb,jn,vb,Pn,gf,xo,Cn,ep,na,Tb,tp,yb,_f,Xe,sa,wb,Eo,$b,op,Ab,Fb,np,xb,Eb,Mb,ra,zb,vd,qb,jb,Pb,aa,Cb,ia,Lb,Ib,Nb,wt,la,Db,Mo,Sb,Td,Ob,Wb,sp,Ub,Bb,Rb,Ln,Hb,In,bf,zo,Nn,rp,da,Qb,ap,Vb,kf,Ye,ca,Kb,pa,Jb,ip,Gb,Xb,Yb,ha,Zb,yd,ek,tk,ok,ma,nk,fa,sk,rk,ak,nt,ua,ik,qo,lk,wd,dk,ck,lp,pk,hk,mk,Dn,fk,Sn,uk,On,vf,jo,Wn,dp,ga,gk,cp,_k,Tf,Ze,_a,bk,pp,kk,vk,ba,Tk,$d,yk,wk,$k,ka,Ak,va,Fk,xk,Ek,We,Ta,Mk,Po,zk,Ad,qk,jk,hp,Pk,Ck,Lk,Un,Ik,Bn,Nk,Rn,Dk,Hn,Sk,Qn,yf,Co,Vn,mp,ya,Ok,fp,Wk,wf,et,wa,Uk,up,Bk,Rk,$a,Hk,Fd,Qk,Vk,Kk,Aa,Jk,Fa,Gk,Xk,Yk,$t,xa,Zk,Lo,ev,xd,tv,ov,gp,nv,sv,rv,Kn,av,Jn,$f,Io,Gn,_p,Ea,iv,bp,lv,Af,tt,Ma,dv,kp,cv,pv,za,hv,Ed,mv,fv,uv,qa,gv,ja,_v,bv,kv,st,Pa,vv,No,Tv,Md,yv,wv,vp,$v,Av,Fv,Xn,xv,Yn,Ev,Zn,Ff,Do,es,Tp,Ca,Mv,yp,zv,xf,ot,La,qv,So,jv,wp,Pv,Cv,$p,Lv,Iv,Nv,Ia,Dv,zd,Sv,Ov,Wv,Na,Uv,Da,Bv,Rv,Hv,rt,Sa,Qv,Oo,Vv,qd,Kv,Jv,Ap,Gv,Xv,Yv,ts,Zv,os,eT,ns,Ef,Wo,ss,Fp,Oa,tT,xp,oT,Mf,Ue,Wa,nT,Ep,sT,rT,Ua,aT,jd,iT,lT,dT,Ba,cT,Ra,pT,hT,mT,rs,fT,At,Ha,uT,Uo,gT,Pd,_T,bT,Mp,kT,vT,TT,as,yT,is,zf,Bo,ls,zp,Qa,wT,qp,$T,qf,Be,Va,AT,Ro,FT,jp,xT,ET,Pp,MT,zT,qT,Ka,jT,Cd,PT,CT,LT,Ja,IT,Ga,NT,DT,ST,ds,OT,Ft,Xa,WT,Ho,UT,Ld,BT,RT,Cp,HT,QT,VT,cs,KT,ps,jf,Qo,hs,Lp,Ya,JT,Ip,GT,Pf,Re,Za,XT,ei,YT,Np,ZT,e1,t1,ti,o1,Id,n1,s1,r1,oi,a1,ni,i1,l1,d1,ms,c1,at,si,p1,Vo,h1,Nd,m1,f1,Dp,u1,g1,_1,fs,b1,us,k1,gs,Cf,Ko,_s,Sp,ri,v1,Op,T1,Lf,He,ai,y1,Wp,w1,$1,ii,A1,Dd,F1,x1,E1,li,M1,di,z1,q1,j1,bs,P1,it,ci,C1,Jo,L1,Sd,I1,N1,Up,D1,S1,O1,ks,W1,vs,U1,Ts,If,Go,ys,Bp,pi,B1,Rp,R1,Nf,Qe,hi,H1,Hp,Q1,V1,mi,K1,Od,J1,G1,X1,fi,Y1,ui,Z1,ey,ty,ws,oy,xt,gi,ny,Xo,sy,Wd,ry,ay,Qp,iy,ly,dy,$s,cy,As,Df,Yo,Fs,Vp,_i,py,Kp,hy,Sf,Ve,bi,my,Jp,fy,uy,ki,gy,Ud,_y,by,ky,vi,vy,Ti,Ty,yy,wy,xs,$y,lt,yi,Ay,Zo,Fy,Bd,xy,Ey,Gp,My,zy,qy,Es,jy,Ms,Py,zs,Of,en,qs,Xp,wi,Cy,Yp,Ly,Wf,Ke,$i,Iy,tn,Ny,Zp,Dy,Sy,eh,Oy,Wy,Uy,Ai,By,Rd,Ry,Hy,Qy,Fi,Vy,xi,Ky,Jy,Gy,js,Xy,dt,Ei,Yy,on,Zy,Hd,ew,tw,th,ow,nw,sw,Ps,rw,Cs,aw,Ls,Uf,nn,Is,oh,Mi,iw,nh,lw,Bf,Ce,zi,dw,sh,cw,pw,qi,hw,Qd,mw,fw,uw,ji,gw,Pi,_w,bw,kw,rh,vw,Tw,Rt,ah,Ci,yw,ww,ih,Li,$w,Aw,lh,Ii,Fw,xw,dh,Ni,Ew,Mw,Et,Di,zw,sn,qw,ch,jw,Pw,ph,Cw,Lw,Iw,Ns,Nw,Ds,Rf,rn,Ss,hh,Si,Dw,mh,Sw,Hf,Le,Oi,Ow,an,Ww,fh,Uw,Bw,uh,Rw,Hw,Qw,Wi,Vw,Vd,Kw,Jw,Gw,Ui,Xw,Bi,Yw,Zw,e$,gh,t$,o$,Ht,_h,Ri,n$,s$,bh,Hi,r$,a$,kh,Qi,i$,l$,vh,Vi,d$,c$,Mt,Ki,p$,ln,h$,Th,m$,f$,yh,u$,g$,_$,Os,b$,Ws,Qf,dn,Us,wh,Ji,k$,$h,v$,Vf,Ie,Gi,T$,Xi,y$,Ah,w$,$$,A$,Yi,F$,Kd,x$,E$,M$,Zi,z$,el,q$,j$,P$,Fh,C$,L$,Qt,xh,tl,I$,N$,Eh,ol,D$,S$,Mh,nl,O$,W$,zh,sl,U$,B$,zt,rl,R$,cn,H$,qh,Q$,V$,jh,K$,J$,G$,Bs,X$,Rs,Kf,pn,Hs,Ph,al,Y$,Ch,Z$,Jf,Ne,il,e2,Lh,t2,o2,ll,n2,Jd,s2,r2,a2,dl,i2,cl,l2,d2,c2,Ih,p2,h2,Vt,Nh,pl,m2,f2,Dh,hl,u2,g2,Sh,ml,_2,b2,Oh,fl,k2,v2,qt,ul,T2,hn,y2,Wh,w2,$2,Uh,A2,F2,x2,Qs,E2,Vs,Gf,mn,Ks,Bh,gl,M2,Rh,z2,Xf,De,_l,q2,Hh,j2,P2,bl,C2,Gd,L2,I2,N2,kl,D2,vl,S2,O2,W2,Qh,U2,B2,Kt,Vh,Tl,R2,H2,Kh,yl,Q2,V2,Jh,wl,K2,J2,Gh,$l,G2,X2,jt,Al,Y2,fn,Z2,Xh,eA,tA,Yh,oA,nA,sA,Js,rA,Gs,Yf,un,Xs,Zh,Fl,aA,em,iA,Zf,Se,xl,lA,tm,dA,cA,El,pA,Xd,hA,mA,fA,Ml,uA,zl,gA,_A,bA,om,kA,vA,Jt,nm,ql,TA,yA,sm,jl,wA,$A,rm,Pl,AA,FA,am,Cl,xA,EA,Pt,Ll,MA,gn,zA,im,qA,jA,lm,PA,CA,LA,Ys,IA,Zs,eu,_n,er,dm,Il,NA,cm,DA,tu,Oe,Nl,SA,bn,OA,pm,WA,UA,hm,BA,RA,HA,Dl,QA,Yd,VA,KA,JA,Sl,GA,Ol,XA,YA,ZA,mm,e0,t0,Gt,fm,Wl,o0,n0,um,Ul,s0,r0,gm,Bl,a0,i0,_m,Rl,l0,d0,Ct,Hl,c0,kn,p0,bm,h0,m0,km,f0,u0,g0,tr,_0,or,ou;return l=new $e({}),ee=new $e({}),Fr=new $e({}),xr=new L({props:{name:"class transformers.AlbertConfig",anchor:"transformers.AlbertConfig",parameters:[{name:"vocab_size",val:" = 30000"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 4096"},{name:"num_hidden_layers",val:" = 12"},{name:"num_hidden_groups",val:" = 1"},{name:"num_attention_heads",val:" = 64"},{name:"intermediate_size",val:" = 16384"},{name:"inner_group_num",val:" = 1"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0"},{name:"attention_probs_dropout_prob",val:" = 0"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"classifier_dropout_prob",val:" = 0.1"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 3"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30000) &#x2014;
Vocabulary size of the ALBERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>.`,name:"vocab_size"},{anchor:"transformers.AlbertConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimensionality of vocabulary embeddings.`,name:"embedding_size"},{anchor:"transformers.AlbertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.AlbertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.AlbertConfig.num_hidden_groups",description:`<strong>num_hidden_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of groups for the hidden layers, parameters in the same group are shared.`,name:"num_hidden_groups"},{anchor:"transformers.AlbertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.AlbertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.AlbertConfig.inner_group_num",description:`<strong>inner_group_num</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of inner repetition of attention and ffn.`,name:"inner_group_num"},{anchor:"transformers.AlbertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.AlbertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.AlbertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.AlbertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
(e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.AlbertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.AlbertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.AlbertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.AlbertConfig.classifier_dropout_prob",description:`<strong>classifier_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for attached classifiers.`,name:"classifier_dropout_prob"},{anchor:"transformers.AlbertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/configuration_albert.py#L36"}}),$n=new se({props:{anchor:"transformers.AlbertConfig.example",$$slots:{default:[l9]},$$scope:{ctx:x}}}),Mr=new $e({}),zr=new L({props:{name:"class transformers.AlbertTokenizer",anchor:"transformers.AlbertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.AlbertTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.AlbertTokenizer.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.AlbertTokenizer.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.AlbertTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.AlbertTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.AlbertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.AlbertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.AlbertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.AlbertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.AlbertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.AlbertTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.AlbertTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/tokenization_albert.py#L59"}}),Cr=new L({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/tokenization_albert.py#L255",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ir=new L({props:{name:"get_special_tokens_mask",anchor:"transformers.AlbertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/tokenization_albert.py#L280",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Dr=new L({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/tokenization_albert.py#L308",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xn=new se({props:{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[d9]},$$scope:{ctx:x}}}),Sr=new L({props:{name:"save_vocabulary",anchor:"transformers.AlbertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/tokenization_albert.py#L338"}}),Or=new $e({}),Wr=new L({props:{name:"class transformers.AlbertTokenizerFast",anchor:"transformers.AlbertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.AlbertTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.AlbertTokenizerFast.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.AlbertTokenizerFast.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.AlbertTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.AlbertTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token. .. note:: When building a sequence using special tokens, this is not the token
that is used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.AlbertTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.AlbertTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.AlbertTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.AlbertTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.AlbertTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/tokenization_albert_fast.py#L72"}}),Br=new L({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/tokenization_albert_fast.py#L170",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Hr=new L({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/tokenization_albert_fast.py#L195",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Mn=new se({props:{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[c9]},$$scope:{ctx:x}}}),Qr=new $e({}),Vr=new L({props:{name:"class transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"sop_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.`,name:"loss"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.sop_logits",description:`<strong>sop_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"sop_logits"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_albert.py#L514"}}),Jr=new L({props:{name:"class transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",parameters:[{name:"loss",val:": Tensor = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"sop_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.sop_logits",description:`<strong>sop_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"sop_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_tf_albert.py#L634"}}),Xr=new $e({}),Yr=new L({props:{name:"class transformers.AlbertModel",anchor:"transformers.AlbertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.AlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_albert.py#L617"}}),oa=new L({props:{name:"forward",anchor:"transformers.AlbertModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.AlbertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_albert.py#L661",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jn=new we({props:{$$slots:{default:[p9]},$$scope:{ctx:x}}}),Pn=new se({props:{anchor:"transformers.AlbertModel.forward.example",$$slots:{default:[h9]},$$scope:{ctx:x}}}),na=new $e({}),sa=new L({props:{name:"class transformers.AlbertForPreTraining",anchor:"transformers.AlbertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_albert.py#L747"}}),la=new L({props:{name:"forward",anchor:"transformers.AlbertForPreTraining.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"sentence_order_label",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.AlbertForPreTraining.forward.sentence_order_label",description:`<strong>sentence_order_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>. <code>0</code> indicates original order (sequence A, then
sequence B), <code>1</code> indicates switched order (sequence B, then sequence A).`,name:"sentence_order_label"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_albert.py#L767",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"
>transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.</p>
</li>
<li>
<p><strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>sop_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"
>transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ln=new we({props:{$$slots:{default:[m9]},$$scope:{ctx:x}}}),In=new se({props:{anchor:"transformers.AlbertForPreTraining.forward.example",$$slots:{default:[f9]},$$scope:{ctx:x}}}),da=new $e({}),ca=new L({props:{name:"class transformers.AlbertForMaskedLM",anchor:"transformers.AlbertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_albert.py#L893"}}),ua=new L({props:{name:"forward",anchor:"transformers.AlbertForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_albert.py#L915",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Dn=new we({props:{$$slots:{default:[u9]},$$scope:{ctx:x}}}),Sn=new se({props:{anchor:"transformers.AlbertForMaskedLM.forward.example",$$slots:{default:[g9]},$$scope:{ctx:x}}}),On=new se({props:{anchor:"transformers.AlbertForMaskedLM.forward.example-2",$$slots:{default:[_9]},$$scope:{ctx:x}}}),ga=new $e({}),_a=new L({props:{name:"class transformers.AlbertForSequenceClassification",anchor:"transformers.AlbertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_albert.py#L1008"}}),Ta=new L({props:{name:"forward",anchor:"transformers.AlbertForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_albert.py#L1021",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Un=new we({props:{$$slots:{default:[b9]},$$scope:{ctx:x}}}),Bn=new se({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example",$$slots:{default:[k9]},$$scope:{ctx:x}}}),Rn=new se({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-2",$$slots:{default:[v9]},$$scope:{ctx:x}}}),Hn=new se({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-3",$$slots:{default:[T9]},$$scope:{ctx:x}}}),Qn=new se({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-4",$$slots:{default:[y9]},$$scope:{ctx:x}}}),ya=new $e({}),wa=new L({props:{name:"class transformers.AlbertForMultipleChoice",anchor:"transformers.AlbertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_albert.py#L1307"}}),xa=new L({props:{name:"forward",anchor:"transformers.AlbertForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <em>num_choices</em> is the size of the second dimension of the input tensors. (see
<em>input_ids</em> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_albert.py#L1318",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kn=new we({props:{$$slots:{default:[w9]},$$scope:{ctx:x}}}),Jn=new se({props:{anchor:"transformers.AlbertForMultipleChoice.forward.example",$$slots:{default:[$9]},$$scope:{ctx:x}}}),Ea=new $e({}),Ma=new L({props:{name:"class transformers.AlbertForTokenClassification",anchor:"transformers.AlbertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_albert.py#L1110"}}),Pa=new L({props:{name:"forward",anchor:"transformers.AlbertForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_albert.py#L1130",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xn=new we({props:{$$slots:{default:[A9]},$$scope:{ctx:x}}}),Yn=new se({props:{anchor:"transformers.AlbertForTokenClassification.forward.example",$$slots:{default:[F9]},$$scope:{ctx:x}}}),Zn=new se({props:{anchor:"transformers.AlbertForTokenClassification.forward.example-2",$$slots:{default:[x9]},$$scope:{ctx:x}}}),Ca=new $e({}),La=new L({props:{name:"class transformers.AlbertForQuestionAnswering",anchor:"transformers.AlbertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_albert.py#L1200"}}),Sa=new L({props:{name:"forward",anchor:"transformers.AlbertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.AlbertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_albert.py#L1214",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ts=new we({props:{$$slots:{default:[E9]},$$scope:{ctx:x}}}),os=new se({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example",$$slots:{default:[M9]},$$scope:{ctx:x}}}),ns=new se({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example-2",$$slots:{default:[z9]},$$scope:{ctx:x}}}),Oa=new $e({}),Wa=new L({props:{name:"class transformers.TFAlbertModel",anchor:"transformers.TFAlbertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_tf_albert.py#L761"}}),rs=new we({props:{$$slots:{default:[q9]},$$scope:{ctx:x}}}),Ha=new L({props:{name:"call",anchor:"transformers.TFAlbertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_tf_albert.py#L767",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),as=new we({props:{$$slots:{default:[j9]},$$scope:{ctx:x}}}),is=new se({props:{anchor:"transformers.TFAlbertModel.call.example",$$slots:{default:[P9]},$$scope:{ctx:x}}}),Qa=new $e({}),Va=new L({props:{name:"class transformers.TFAlbertForPreTraining",anchor:"transformers.TFAlbertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_tf_albert.py#L822"}}),ds=new we({props:{$$slots:{default:[C9]},$$scope:{ctx:x}}}),Xa=new L({props:{name:"call",anchor:"transformers.TFAlbertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"sentence_order_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForPreTraining.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForPreTraining.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForPreTraining.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForPreTraining.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForPreTraining.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForPreTraining.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForPreTraining.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForPreTraining.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_tf_albert.py#L838",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput"
>transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>sop_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput"
>transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),cs=new we({props:{$$slots:{default:[L9]},$$scope:{ctx:x}}}),ps=new se({props:{anchor:"transformers.TFAlbertForPreTraining.call.example",$$slots:{default:[I9]},$$scope:{ctx:x}}}),Ya=new $e({}),Za=new L({props:{name:"class transformers.TFAlbertForMaskedLM",anchor:"transformers.TFAlbertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_tf_albert.py#L941"}}),ms=new we({props:{$$slots:{default:[N9]},$$scope:{ctx:x}}}),si=new L({props:{name:"call",anchor:"transformers.TFAlbertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_tf_albert.py#L954",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),fs=new we({props:{$$slots:{default:[D9]},$$scope:{ctx:x}}}),us=new se({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example",$$slots:{default:[S9]},$$scope:{ctx:x}}}),gs=new se({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example-2",$$slots:{default:[O9]},$$scope:{ctx:x}}}),ri=new $e({}),ai=new L({props:{name:"class transformers.TFAlbertForSequenceClassification",anchor:"transformers.TFAlbertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_tf_albert.py#L1050"}}),bs=new we({props:{$$slots:{default:[W9]},$$scope:{ctx:x}}}),ci=new L({props:{name:"call",anchor:"transformers.TFAlbertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_tf_albert.py#L1066",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ks=new we({props:{$$slots:{default:[U9]},$$scope:{ctx:x}}}),vs=new se({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example",$$slots:{default:[B9]},$$scope:{ctx:x}}}),Ts=new se({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example-2",$$slots:{default:[R9]},$$scope:{ctx:x}}}),pi=new $e({}),hi=new L({props:{name:"class transformers.TFAlbertForMultipleChoice",anchor:"transformers.TFAlbertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_tf_albert.py#L1339"}}),ws=new we({props:{$$slots:{default:[H9]},$$scope:{ctx:x}}}),gi=new L({props:{name:"call",anchor:"transformers.TFAlbertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_tf_albert.py#L1363",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$s=new we({props:{$$slots:{default:[Q9]},$$scope:{ctx:x}}}),As=new se({props:{anchor:"transformers.TFAlbertForMultipleChoice.call.example",$$slots:{default:[V9]},$$scope:{ctx:x}}}),_i=new $e({}),bi=new L({props:{name:"class transformers.TFAlbertForTokenClassification",anchor:"transformers.TFAlbertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_tf_albert.py#L1140"}}),xs=new we({props:{$$slots:{default:[K9]},$$scope:{ctx:x}}}),yi=new L({props:{name:"call",anchor:"transformers.TFAlbertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_tf_albert.py#L1161",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Es=new we({props:{$$slots:{default:[J9]},$$scope:{ctx:x}}}),Ms=new se({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example",$$slots:{default:[G9]},$$scope:{ctx:x}}}),zs=new se({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example-2",$$slots:{default:[X9]},$$scope:{ctx:x}}}),wi=new $e({}),$i=new L({props:{name:"class transformers.TFAlbertForQuestionAnswering",anchor:"transformers.TFAlbertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_tf_albert.py#L1234"}}),js=new we({props:{$$slots:{default:[Y9]},$$scope:{ctx:x}}}),Ei=new L({props:{name:"call",anchor:"transformers.TFAlbertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_tf_albert.py#L1248",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ps=new we({props:{$$slots:{default:[Z9]},$$scope:{ctx:x}}}),Cs=new se({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example",$$slots:{default:[eM]},$$scope:{ctx:x}}}),Ls=new se({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example-2",$$slots:{default:[tM]},$$scope:{ctx:x}}}),Mi=new $e({}),zi=new L({props:{name:"class transformers.FlaxAlbertModel",anchor:"transformers.FlaxAlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_flax_albert.py#L679"}}),Di=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
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
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ns=new we({props:{$$slots:{default:[oM]},$$scope:{ctx:x}}}),Ds=new se({props:{anchor:"transformers.FlaxAlbertModel.__call__.example",$$slots:{default:[nM]},$$scope:{ctx:x}}}),Si=new $e({}),Oi=new L({props:{name:"class transformers.FlaxAlbertForPreTraining",anchor:"transformers.FlaxAlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_flax_albert.py#L750"}}),Ki=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <code>transformers.models.albert.modeling_flax_albert.FlaxAlbertForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>sop_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
<p><code>transformers.models.albert.modeling_flax_albert.FlaxAlbertForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Os=new we({props:{$$slots:{default:[sM]},$$scope:{ctx:x}}}),Ws=new se({props:{anchor:"transformers.FlaxAlbertForPreTraining.__call__.example",$$slots:{default:[rM]},$$scope:{ctx:x}}}),Ji=new $e({}),Gi=new L({props:{name:"class transformers.FlaxAlbertForMaskedLM",anchor:"transformers.FlaxAlbertForMaskedLM",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_flax_albert.py#L833"}}),rl=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bs=new we({props:{$$slots:{default:[aM]},$$scope:{ctx:x}}}),Rs=new se({props:{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.example",$$slots:{default:[iM]},$$scope:{ctx:x}}}),al=new $e({}),il=new L({props:{name:"class transformers.FlaxAlbertForSequenceClassification",anchor:"transformers.FlaxAlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_flax_albert.py#L903"}}),ul=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qs=new we({props:{$$slots:{default:[lM]},$$scope:{ctx:x}}}),Vs=new se({props:{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.example",$$slots:{default:[dM]},$$scope:{ctx:x}}}),gl=new $e({}),_l=new L({props:{name:"class transformers.FlaxAlbertForMultipleChoice",anchor:"transformers.FlaxAlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_flax_albert.py#L977"}}),Al=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Js=new we({props:{$$slots:{default:[cM]},$$scope:{ctx:x}}}),Gs=new se({props:{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.example",$$slots:{default:[pM]},$$scope:{ctx:x}}}),Fl=new $e({}),xl=new L({props:{name:"class transformers.FlaxAlbertForTokenClassification",anchor:"transformers.FlaxAlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_flax_albert.py#L1051"}}),Ll=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ys=new we({props:{$$slots:{default:[hM]},$$scope:{ctx:x}}}),Zs=new se({props:{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.example",$$slots:{default:[mM]},$$scope:{ctx:x}}}),Il=new $e({}),Nl=new L({props:{name:"class transformers.FlaxAlbertForQuestionAnswering",anchor:"transformers.FlaxAlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_flax_albert.py#L1120"}}),Hl=new L({props:{name:"__call__",anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_16994/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16994/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16994/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16994/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16994/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tr=new we({props:{$$slots:{default:[fM]},$$scope:{ctx:x}}}),or=new se({props:{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.example",$$slots:{default:[uM]},$$scope:{ctx:x}}}),{c(){d=n("meta"),g=c(),h=n("h1"),m=n("a"),_=n("span"),T(l.$$.fragment),f=c(),E=n("span"),fe=a("ALBERT"),G=c(),z=n("h2"),Y=n("a"),U=n("span"),T(ee.$$.fragment),ue=c(),B=n("span"),ge=a("Overview"),de=c(),K=n("p"),I=a("The ALBERT model was proposed in "),te=n("a"),X=a("ALBERT: A Lite BERT for Self-supervised Learning of Language Representations"),q=a(` by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma,
Radu Soricut. It presents two parameter-reduction techniques to lower memory consumption and increase the training
speed of BERT:`),P=c(),Z=n("ul"),R=n("li"),_e=a("Splitting the embedding matrix into two smaller matrices."),be=c(),H=n("li"),ke=a("Using repeating layers split among groups."),ce=c(),j=n("p"),ve=a("The abstract from the paper is the following:"),Q=c(),oe=n("p"),ie=n("em"),V=a(`Increasing model size when pretraining natural language representations often results in improved performance on
downstream tasks. However, at some point further model increases become harder due to GPU/TPU memory limitations,
longer training times, and unexpected model degradation. To address these problems, we present two parameter-reduction
techniques to lower memory consumption and increase the training speed of BERT. Comprehensive empirical evidence shows
that our proposed methods lead to models that scale much better compared to the original BERT. We also use a
self-supervised loss that focuses on modeling inter-sentence coherence, and show it consistently helps downstream tasks
with multi-sentence inputs. As a result, our best model establishes new state-of-the-art results on the GLUE, RACE, and
SQuAD benchmarks while having fewer parameters compared to BERT-large.`),pe=c(),ne=n("p"),N=a("Tips:"),he=c(),S=n("ul"),le=n("li"),v=a(`ALBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),M=c(),J=n("li"),Fe=a(`ALBERT uses repeating layers which results in a small memory footprint, however the computational cost remains
similar to a BERT-like architecture with the same number of hidden layers as it has to iterate through the same
number of (repeating) layers.`),Ae=c(),C=n("p"),xe=a("This model was contributed by "),ye=n("a"),Ee=a("lysandre"),D=a(`. This model jax version was contributed by
`),O=n("a"),Me=a("kamalkraj"),ze=a(". The original code can be found "),W=n("a"),qe=a("here"),je=a("."),me=c(),Te=n("h2"),wn=n("a"),Mc=n("span"),T(Fr.$$.fragment),Tg=c(),zc=n("span"),yg=a("AlbertConfig"),rf=c(),bt=n("div"),T(xr.$$.fragment),wg=c(),Ut=n("p"),$g=a("This is the configuration class to store the configuration of a "),rd=n("a"),Ag=a("AlbertModel"),Fg=a(" or a "),ad=n("a"),xg=a("TFAlbertModel"),Eg=a(`. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
`),Er=n("a"),Mg=a("albert-xxlarge-v2"),zg=a(" architecture."),qg=c(),bo=n("p"),jg=a("Configuration objects inherit from "),id=n("a"),Pg=a("PretrainedConfig"),Cg=a(` and can be used to control the model outputs. Read the
documentation from `),ld=n("a"),Lg=a("PretrainedConfig"),Ig=a(" for more information."),Ng=c(),T($n.$$.fragment),af=c(),ko=n("h2"),An=n("a"),qc=n("span"),T(Mr.$$.fragment),Dg=c(),jc=n("span"),Sg=a("AlbertTokenizer"),lf=c(),Pe=n("div"),T(zr.$$.fragment),Og=c(),qr=n("p"),Wg=a("Construct an ALBERT tokenizer. Based on "),jr=n("a"),Ug=a("SentencePiece"),Bg=a("."),Rg=c(),Pr=n("p"),Hg=a("This tokenizer inherits from "),dd=n("a"),Qg=a("PreTrainedTokenizer"),Vg=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Kg=c(),to=n("div"),T(Cr.$$.fragment),Jg=c(),Pc=n("p"),Gg=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),Xg=c(),Lr=n("ul"),cd=n("li"),Yg=a("single sequence: "),Cc=n("code"),Zg=a("[CLS] X [SEP]"),e_=c(),pd=n("li"),t_=a("pair of sequences: "),Lc=n("code"),o_=a("[CLS] A [SEP] B [SEP]"),n_=c(),Fn=n("div"),T(Ir.$$.fragment),s_=c(),Nr=n("p"),r_=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ic=n("code"),a_=a("prepare_for_model"),i_=a(" method."),l_=c(),vt=n("div"),T(Dr.$$.fragment),d_=c(),Nc=n("p"),c_=a("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),p_=c(),T(xn.$$.fragment),h_=c(),vo=n("p"),m_=a("If "),Dc=n("code"),f_=a("token_ids_1"),u_=a(" is "),Sc=n("code"),g_=a("None"),__=a(", this method only returns the first portion of the mask (0s)."),b_=c(),hd=n("div"),T(Sr.$$.fragment),df=c(),To=n("h2"),En=n("a"),Oc=n("span"),T(Or.$$.fragment),k_=c(),Wc=n("span"),v_=a("AlbertTokenizerFast"),cf=c(),kt=n("div"),T(Wr.$$.fragment),T_=c(),Bt=n("p"),y_=a("Construct a \u201Cfast\u201D ALBERT tokenizer (backed by HuggingFace\u2019s "),Uc=n("em"),w_=a("tokenizers"),$_=a(` library). Based on
`),Ur=n("a"),A_=a("Unigram"),F_=a(`. This
tokenizer inherits from `),md=n("a"),x_=a("PreTrainedTokenizerFast"),E_=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),M_=c(),oo=n("div"),T(Br.$$.fragment),z_=c(),Bc=n("p"),q_=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),j_=c(),Rr=n("ul"),fd=n("li"),P_=a("single sequence: "),Rc=n("code"),C_=a("[CLS] X [SEP]"),L_=c(),ud=n("li"),I_=a("pair of sequences: "),Hc=n("code"),N_=a("[CLS] A [SEP] B [SEP]"),D_=c(),Tt=n("div"),T(Hr.$$.fragment),S_=c(),Qc=n("p"),O_=a("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),W_=c(),T(Mn.$$.fragment),U_=c(),Vc=n("p"),B_=a("if token_ids_1 is None, only returns the first portion of the mask (0s)."),pf=c(),yo=n("h2"),zn=n("a"),Kc=n("span"),T(Qr.$$.fragment),R_=c(),Jc=n("span"),H_=a("Albert specific outputs"),hf=c(),wo=n("div"),T(Vr.$$.fragment),Q_=c(),Kr=n("p"),V_=a("Output type of "),gd=n("a"),K_=a("AlbertForPreTraining"),J_=a("."),mf=c(),$o=n("div"),T(Jr.$$.fragment),G_=c(),Gr=n("p"),X_=a("Output type of "),_d=n("a"),Y_=a("TFAlbertForPreTraining"),Z_=a("."),ff=c(),Ao=n("h2"),qn=n("a"),Gc=n("span"),T(Xr.$$.fragment),eb=c(),Xc=n("span"),tb=a("AlbertModel"),uf=c(),Ge=n("div"),T(Yr.$$.fragment),ob=c(),Yc=n("p"),nb=a("The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top."),sb=c(),Zr=n("p"),rb=a("This model inherits from "),bd=n("a"),ab=a("PreTrainedModel"),ib=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lb=c(),ea=n("p"),db=a("This model is also a PyTorch "),ta=n("a"),cb=a("torch.nn.Module"),pb=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hb=c(),yt=n("div"),T(oa.$$.fragment),mb=c(),Fo=n("p"),fb=a("The "),kd=n("a"),ub=a("AlbertModel"),gb=a(" forward method, overrides the "),Zc=n("code"),_b=a("__call__"),bb=a(" special method."),kb=c(),T(jn.$$.fragment),vb=c(),T(Pn.$$.fragment),gf=c(),xo=n("h2"),Cn=n("a"),ep=n("span"),T(na.$$.fragment),Tb=c(),tp=n("span"),yb=a("AlbertForPreTraining"),_f=c(),Xe=n("div"),T(sa.$$.fragment),wb=c(),Eo=n("p"),$b=a("Albert Model with two heads on top as done during the pretraining: a "),op=n("code"),Ab=a("masked language modeling"),Fb=a(` head and a
`),np=n("code"),xb=a("sentence order prediction (classification)"),Eb=a(" head."),Mb=c(),ra=n("p"),zb=a("This model inherits from "),vd=n("a"),qb=a("PreTrainedModel"),jb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pb=c(),aa=n("p"),Cb=a("This model is also a PyTorch "),ia=n("a"),Lb=a("torch.nn.Module"),Ib=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nb=c(),wt=n("div"),T(la.$$.fragment),Db=c(),Mo=n("p"),Sb=a("The "),Td=n("a"),Ob=a("AlbertForPreTraining"),Wb=a(" forward method, overrides the "),sp=n("code"),Ub=a("__call__"),Bb=a(" special method."),Rb=c(),T(Ln.$$.fragment),Hb=c(),T(In.$$.fragment),bf=c(),zo=n("h2"),Nn=n("a"),rp=n("span"),T(da.$$.fragment),Qb=c(),ap=n("span"),Vb=a("AlbertForMaskedLM"),kf=c(),Ye=n("div"),T(ca.$$.fragment),Kb=c(),pa=n("p"),Jb=a("Albert Model with a "),ip=n("code"),Gb=a("language modeling"),Xb=a(" head on top."),Yb=c(),ha=n("p"),Zb=a("This model inherits from "),yd=n("a"),ek=a("PreTrainedModel"),tk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ok=c(),ma=n("p"),nk=a("This model is also a PyTorch "),fa=n("a"),sk=a("torch.nn.Module"),rk=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ak=c(),nt=n("div"),T(ua.$$.fragment),ik=c(),qo=n("p"),lk=a("The "),wd=n("a"),dk=a("AlbertForMaskedLM"),ck=a(" forward method, overrides the "),lp=n("code"),pk=a("__call__"),hk=a(" special method."),mk=c(),T(Dn.$$.fragment),fk=c(),T(Sn.$$.fragment),uk=c(),T(On.$$.fragment),vf=c(),jo=n("h2"),Wn=n("a"),dp=n("span"),T(ga.$$.fragment),gk=c(),cp=n("span"),_k=a("AlbertForSequenceClassification"),Tf=c(),Ze=n("div"),T(_a.$$.fragment),bk=c(),pp=n("p"),kk=a(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),vk=c(),ba=n("p"),Tk=a("This model inherits from "),$d=n("a"),yk=a("PreTrainedModel"),wk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$k=c(),ka=n("p"),Ak=a("This model is also a PyTorch "),va=n("a"),Fk=a("torch.nn.Module"),xk=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ek=c(),We=n("div"),T(Ta.$$.fragment),Mk=c(),Po=n("p"),zk=a("The "),Ad=n("a"),qk=a("AlbertForSequenceClassification"),jk=a(" forward method, overrides the "),hp=n("code"),Pk=a("__call__"),Ck=a(" special method."),Lk=c(),T(Un.$$.fragment),Ik=c(),T(Bn.$$.fragment),Nk=c(),T(Rn.$$.fragment),Dk=c(),T(Hn.$$.fragment),Sk=c(),T(Qn.$$.fragment),yf=c(),Co=n("h2"),Vn=n("a"),mp=n("span"),T(ya.$$.fragment),Ok=c(),fp=n("span"),Wk=a("AlbertForMultipleChoice"),wf=c(),et=n("div"),T(wa.$$.fragment),Uk=c(),up=n("p"),Bk=a(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Rk=c(),$a=n("p"),Hk=a("This model inherits from "),Fd=n("a"),Qk=a("PreTrainedModel"),Vk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kk=c(),Aa=n("p"),Jk=a("This model is also a PyTorch "),Fa=n("a"),Gk=a("torch.nn.Module"),Xk=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yk=c(),$t=n("div"),T(xa.$$.fragment),Zk=c(),Lo=n("p"),ev=a("The "),xd=n("a"),tv=a("AlbertForMultipleChoice"),ov=a(" forward method, overrides the "),gp=n("code"),nv=a("__call__"),sv=a(" special method."),rv=c(),T(Kn.$$.fragment),av=c(),T(Jn.$$.fragment),$f=c(),Io=n("h2"),Gn=n("a"),_p=n("span"),T(Ea.$$.fragment),iv=c(),bp=n("span"),lv=a("AlbertForTokenClassification"),Af=c(),tt=n("div"),T(Ma.$$.fragment),dv=c(),kp=n("p"),cv=a(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pv=c(),za=n("p"),hv=a("This model inherits from "),Ed=n("a"),mv=a("PreTrainedModel"),fv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uv=c(),qa=n("p"),gv=a("This model is also a PyTorch "),ja=n("a"),_v=a("torch.nn.Module"),bv=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kv=c(),st=n("div"),T(Pa.$$.fragment),vv=c(),No=n("p"),Tv=a("The "),Md=n("a"),yv=a("AlbertForTokenClassification"),wv=a(" forward method, overrides the "),vp=n("code"),$v=a("__call__"),Av=a(" special method."),Fv=c(),T(Xn.$$.fragment),xv=c(),T(Yn.$$.fragment),Ev=c(),T(Zn.$$.fragment),Ff=c(),Do=n("h2"),es=n("a"),Tp=n("span"),T(Ca.$$.fragment),Mv=c(),yp=n("span"),zv=a("AlbertForQuestionAnswering"),xf=c(),ot=n("div"),T(La.$$.fragment),qv=c(),So=n("p"),jv=a(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),wp=n("code"),Pv=a("span start logits"),Cv=a(" and "),$p=n("code"),Lv=a("span end logits"),Iv=a(")."),Nv=c(),Ia=n("p"),Dv=a("This model inherits from "),zd=n("a"),Sv=a("PreTrainedModel"),Ov=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wv=c(),Na=n("p"),Uv=a("This model is also a PyTorch "),Da=n("a"),Bv=a("torch.nn.Module"),Rv=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hv=c(),rt=n("div"),T(Sa.$$.fragment),Qv=c(),Oo=n("p"),Vv=a("The "),qd=n("a"),Kv=a("AlbertForQuestionAnswering"),Jv=a(" forward method, overrides the "),Ap=n("code"),Gv=a("__call__"),Xv=a(" special method."),Yv=c(),T(ts.$$.fragment),Zv=c(),T(os.$$.fragment),eT=c(),T(ns.$$.fragment),Ef=c(),Wo=n("h2"),ss=n("a"),Fp=n("span"),T(Oa.$$.fragment),tT=c(),xp=n("span"),oT=a("TFAlbertModel"),Mf=c(),Ue=n("div"),T(Wa.$$.fragment),nT=c(),Ep=n("p"),sT=a("The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),rT=c(),Ua=n("p"),aT=a("This model inherits from "),jd=n("a"),iT=a("TFPreTrainedModel"),lT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dT=c(),Ba=n("p"),cT=a("This model is also a "),Ra=n("a"),pT=a("tf.keras.Model"),hT=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mT=c(),T(rs.$$.fragment),fT=c(),At=n("div"),T(Ha.$$.fragment),uT=c(),Uo=n("p"),gT=a("The "),Pd=n("a"),_T=a("TFAlbertModel"),bT=a(" forward method, overrides the "),Mp=n("code"),kT=a("__call__"),vT=a(" special method."),TT=c(),T(as.$$.fragment),yT=c(),T(is.$$.fragment),zf=c(),Bo=n("h2"),ls=n("a"),zp=n("span"),T(Qa.$$.fragment),wT=c(),qp=n("span"),$T=a("TFAlbertForPreTraining"),qf=c(),Be=n("div"),T(Va.$$.fragment),AT=c(),Ro=n("p"),FT=a("Albert Model with two heads on top for pretraining: a "),jp=n("code"),xT=a("masked language modeling"),ET=a(" head and a "),Pp=n("code"),MT=a("sentence order prediction"),zT=a(" (classification) head."),qT=c(),Ka=n("p"),jT=a("This model inherits from "),Cd=n("a"),PT=a("TFPreTrainedModel"),CT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),LT=c(),Ja=n("p"),IT=a("This model is also a "),Ga=n("a"),NT=a("tf.keras.Model"),DT=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ST=c(),T(ds.$$.fragment),OT=c(),Ft=n("div"),T(Xa.$$.fragment),WT=c(),Ho=n("p"),UT=a("The "),Ld=n("a"),BT=a("TFAlbertForPreTraining"),RT=a(" forward method, overrides the "),Cp=n("code"),HT=a("__call__"),QT=a(" special method."),VT=c(),T(cs.$$.fragment),KT=c(),T(ps.$$.fragment),jf=c(),Qo=n("h2"),hs=n("a"),Lp=n("span"),T(Ya.$$.fragment),JT=c(),Ip=n("span"),GT=a("TFAlbertForMaskedLM"),Pf=c(),Re=n("div"),T(Za.$$.fragment),XT=c(),ei=n("p"),YT=a("Albert Model with a "),Np=n("code"),ZT=a("language modeling"),e1=a(" head on top."),t1=c(),ti=n("p"),o1=a("This model inherits from "),Id=n("a"),n1=a("TFPreTrainedModel"),s1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),r1=c(),oi=n("p"),a1=a("This model is also a "),ni=n("a"),i1=a("tf.keras.Model"),l1=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),d1=c(),T(ms.$$.fragment),c1=c(),at=n("div"),T(si.$$.fragment),p1=c(),Vo=n("p"),h1=a("The "),Nd=n("a"),m1=a("TFAlbertForMaskedLM"),f1=a(" forward method, overrides the "),Dp=n("code"),u1=a("__call__"),g1=a(" special method."),_1=c(),T(fs.$$.fragment),b1=c(),T(us.$$.fragment),k1=c(),T(gs.$$.fragment),Cf=c(),Ko=n("h2"),_s=n("a"),Sp=n("span"),T(ri.$$.fragment),v1=c(),Op=n("span"),T1=a("TFAlbertForSequenceClassification"),Lf=c(),He=n("div"),T(ai.$$.fragment),y1=c(),Wp=n("p"),w1=a(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),$1=c(),ii=n("p"),A1=a("This model inherits from "),Dd=n("a"),F1=a("TFPreTrainedModel"),x1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),E1=c(),li=n("p"),M1=a("This model is also a "),di=n("a"),z1=a("tf.keras.Model"),q1=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),j1=c(),T(bs.$$.fragment),P1=c(),it=n("div"),T(ci.$$.fragment),C1=c(),Jo=n("p"),L1=a("The "),Sd=n("a"),I1=a("TFAlbertForSequenceClassification"),N1=a(" forward method, overrides the "),Up=n("code"),D1=a("__call__"),S1=a(" special method."),O1=c(),T(ks.$$.fragment),W1=c(),T(vs.$$.fragment),U1=c(),T(Ts.$$.fragment),If=c(),Go=n("h2"),ys=n("a"),Bp=n("span"),T(pi.$$.fragment),B1=c(),Rp=n("span"),R1=a("TFAlbertForMultipleChoice"),Nf=c(),Qe=n("div"),T(hi.$$.fragment),H1=c(),Hp=n("p"),Q1=a(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),V1=c(),mi=n("p"),K1=a("This model inherits from "),Od=n("a"),J1=a("TFPreTrainedModel"),G1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),X1=c(),fi=n("p"),Y1=a("This model is also a "),ui=n("a"),Z1=a("tf.keras.Model"),ey=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ty=c(),T(ws.$$.fragment),oy=c(),xt=n("div"),T(gi.$$.fragment),ny=c(),Xo=n("p"),sy=a("The "),Wd=n("a"),ry=a("TFAlbertForMultipleChoice"),ay=a(" forward method, overrides the "),Qp=n("code"),iy=a("__call__"),ly=a(" special method."),dy=c(),T($s.$$.fragment),cy=c(),T(As.$$.fragment),Df=c(),Yo=n("h2"),Fs=n("a"),Vp=n("span"),T(_i.$$.fragment),py=c(),Kp=n("span"),hy=a("TFAlbertForTokenClassification"),Sf=c(),Ve=n("div"),T(bi.$$.fragment),my=c(),Jp=n("p"),fy=a(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),uy=c(),ki=n("p"),gy=a("This model inherits from "),Ud=n("a"),_y=a("TFPreTrainedModel"),by=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ky=c(),vi=n("p"),vy=a("This model is also a "),Ti=n("a"),Ty=a("tf.keras.Model"),yy=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wy=c(),T(xs.$$.fragment),$y=c(),lt=n("div"),T(yi.$$.fragment),Ay=c(),Zo=n("p"),Fy=a("The "),Bd=n("a"),xy=a("TFAlbertForTokenClassification"),Ey=a(" forward method, overrides the "),Gp=n("code"),My=a("__call__"),zy=a(" special method."),qy=c(),T(Es.$$.fragment),jy=c(),T(Ms.$$.fragment),Py=c(),T(zs.$$.fragment),Of=c(),en=n("h2"),qs=n("a"),Xp=n("span"),T(wi.$$.fragment),Cy=c(),Yp=n("span"),Ly=a("TFAlbertForQuestionAnswering"),Wf=c(),Ke=n("div"),T($i.$$.fragment),Iy=c(),tn=n("p"),Ny=a(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Zp=n("code"),Dy=a("span start logits"),Sy=a(" and "),eh=n("code"),Oy=a("span end logits"),Wy=a(")."),Uy=c(),Ai=n("p"),By=a("This model inherits from "),Rd=n("a"),Ry=a("TFPreTrainedModel"),Hy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qy=c(),Fi=n("p"),Vy=a("This model is also a "),xi=n("a"),Ky=a("tf.keras.Model"),Jy=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gy=c(),T(js.$$.fragment),Xy=c(),dt=n("div"),T(Ei.$$.fragment),Yy=c(),on=n("p"),Zy=a("The "),Hd=n("a"),ew=a("TFAlbertForQuestionAnswering"),tw=a(" forward method, overrides the "),th=n("code"),ow=a("__call__"),nw=a(" special method."),sw=c(),T(Ps.$$.fragment),rw=c(),T(Cs.$$.fragment),aw=c(),T(Ls.$$.fragment),Uf=c(),nn=n("h2"),Is=n("a"),oh=n("span"),T(Mi.$$.fragment),iw=c(),nh=n("span"),lw=a("FlaxAlbertModel"),Bf=c(),Ce=n("div"),T(zi.$$.fragment),dw=c(),sh=n("p"),cw=a("The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),pw=c(),qi=n("p"),hw=a("This model inherits from "),Qd=n("a"),mw=a("FlaxPreTrainedModel"),fw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),uw=c(),ji=n("p"),gw=a("This model is also a Flax Linen "),Pi=n("a"),_w=a("flax.linen.Module"),bw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),kw=c(),rh=n("p"),vw=a("Finally, this model supports inherent JAX features such as:"),Tw=c(),Rt=n("ul"),ah=n("li"),Ci=n("a"),yw=a("Just-In-Time (JIT) compilation"),ww=c(),ih=n("li"),Li=n("a"),$w=a("Automatic Differentiation"),Aw=c(),lh=n("li"),Ii=n("a"),Fw=a("Vectorization"),xw=c(),dh=n("li"),Ni=n("a"),Ew=a("Parallelization"),Mw=c(),Et=n("div"),T(Di.$$.fragment),zw=c(),sn=n("p"),qw=a("The "),ch=n("code"),jw=a("FlaxAlbertPreTrainedModel"),Pw=a(" forward method, overrides the "),ph=n("code"),Cw=a("__call__"),Lw=a(" special method."),Iw=c(),T(Ns.$$.fragment),Nw=c(),T(Ds.$$.fragment),Rf=c(),rn=n("h2"),Ss=n("a"),hh=n("span"),T(Si.$$.fragment),Dw=c(),mh=n("span"),Sw=a("FlaxAlbertForPreTraining"),Hf=c(),Le=n("div"),T(Oi.$$.fragment),Ow=c(),an=n("p"),Ww=a("Albert Model with two heads on top as done during the pretraining: a "),fh=n("code"),Uw=a("masked language modeling"),Bw=a(` head and a
`),uh=n("code"),Rw=a("sentence order prediction (classification)"),Hw=a(" head."),Qw=c(),Wi=n("p"),Vw=a("This model inherits from "),Vd=n("a"),Kw=a("FlaxPreTrainedModel"),Jw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gw=c(),Ui=n("p"),Xw=a("This model is also a Flax Linen "),Bi=n("a"),Yw=a("flax.linen.Module"),Zw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),e$=c(),gh=n("p"),t$=a("Finally, this model supports inherent JAX features such as:"),o$=c(),Ht=n("ul"),_h=n("li"),Ri=n("a"),n$=a("Just-In-Time (JIT) compilation"),s$=c(),bh=n("li"),Hi=n("a"),r$=a("Automatic Differentiation"),a$=c(),kh=n("li"),Qi=n("a"),i$=a("Vectorization"),l$=c(),vh=n("li"),Vi=n("a"),d$=a("Parallelization"),c$=c(),Mt=n("div"),T(Ki.$$.fragment),p$=c(),ln=n("p"),h$=a("The "),Th=n("code"),m$=a("FlaxAlbertPreTrainedModel"),f$=a(" forward method, overrides the "),yh=n("code"),u$=a("__call__"),g$=a(" special method."),_$=c(),T(Os.$$.fragment),b$=c(),T(Ws.$$.fragment),Qf=c(),dn=n("h2"),Us=n("a"),wh=n("span"),T(Ji.$$.fragment),k$=c(),$h=n("span"),v$=a("FlaxAlbertForMaskedLM"),Vf=c(),Ie=n("div"),T(Gi.$$.fragment),T$=c(),Xi=n("p"),y$=a("Albert Model with a "),Ah=n("code"),w$=a("language modeling"),$$=a(" head on top."),A$=c(),Yi=n("p"),F$=a("This model inherits from "),Kd=n("a"),x$=a("FlaxPreTrainedModel"),E$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),M$=c(),Zi=n("p"),z$=a("This model is also a Flax Linen "),el=n("a"),q$=a("flax.linen.Module"),j$=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),P$=c(),Fh=n("p"),C$=a("Finally, this model supports inherent JAX features such as:"),L$=c(),Qt=n("ul"),xh=n("li"),tl=n("a"),I$=a("Just-In-Time (JIT) compilation"),N$=c(),Eh=n("li"),ol=n("a"),D$=a("Automatic Differentiation"),S$=c(),Mh=n("li"),nl=n("a"),O$=a("Vectorization"),W$=c(),zh=n("li"),sl=n("a"),U$=a("Parallelization"),B$=c(),zt=n("div"),T(rl.$$.fragment),R$=c(),cn=n("p"),H$=a("The "),qh=n("code"),Q$=a("FlaxAlbertPreTrainedModel"),V$=a(" forward method, overrides the "),jh=n("code"),K$=a("__call__"),J$=a(" special method."),G$=c(),T(Bs.$$.fragment),X$=c(),T(Rs.$$.fragment),Kf=c(),pn=n("h2"),Hs=n("a"),Ph=n("span"),T(al.$$.fragment),Y$=c(),Ch=n("span"),Z$=a("FlaxAlbertForSequenceClassification"),Jf=c(),Ne=n("div"),T(il.$$.fragment),e2=c(),Lh=n("p"),t2=a(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),o2=c(),ll=n("p"),n2=a("This model inherits from "),Jd=n("a"),s2=a("FlaxPreTrainedModel"),r2=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),a2=c(),dl=n("p"),i2=a("This model is also a Flax Linen "),cl=n("a"),l2=a("flax.linen.Module"),d2=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),c2=c(),Ih=n("p"),p2=a("Finally, this model supports inherent JAX features such as:"),h2=c(),Vt=n("ul"),Nh=n("li"),pl=n("a"),m2=a("Just-In-Time (JIT) compilation"),f2=c(),Dh=n("li"),hl=n("a"),u2=a("Automatic Differentiation"),g2=c(),Sh=n("li"),ml=n("a"),_2=a("Vectorization"),b2=c(),Oh=n("li"),fl=n("a"),k2=a("Parallelization"),v2=c(),qt=n("div"),T(ul.$$.fragment),T2=c(),hn=n("p"),y2=a("The "),Wh=n("code"),w2=a("FlaxAlbertPreTrainedModel"),$2=a(" forward method, overrides the "),Uh=n("code"),A2=a("__call__"),F2=a(" special method."),x2=c(),T(Qs.$$.fragment),E2=c(),T(Vs.$$.fragment),Gf=c(),mn=n("h2"),Ks=n("a"),Bh=n("span"),T(gl.$$.fragment),M2=c(),Rh=n("span"),z2=a("FlaxAlbertForMultipleChoice"),Xf=c(),De=n("div"),T(_l.$$.fragment),q2=c(),Hh=n("p"),j2=a(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),P2=c(),bl=n("p"),C2=a("This model inherits from "),Gd=n("a"),L2=a("FlaxPreTrainedModel"),I2=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),N2=c(),kl=n("p"),D2=a("This model is also a Flax Linen "),vl=n("a"),S2=a("flax.linen.Module"),O2=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),W2=c(),Qh=n("p"),U2=a("Finally, this model supports inherent JAX features such as:"),B2=c(),Kt=n("ul"),Vh=n("li"),Tl=n("a"),R2=a("Just-In-Time (JIT) compilation"),H2=c(),Kh=n("li"),yl=n("a"),Q2=a("Automatic Differentiation"),V2=c(),Jh=n("li"),wl=n("a"),K2=a("Vectorization"),J2=c(),Gh=n("li"),$l=n("a"),G2=a("Parallelization"),X2=c(),jt=n("div"),T(Al.$$.fragment),Y2=c(),fn=n("p"),Z2=a("The "),Xh=n("code"),eA=a("FlaxAlbertPreTrainedModel"),tA=a(" forward method, overrides the "),Yh=n("code"),oA=a("__call__"),nA=a(" special method."),sA=c(),T(Js.$$.fragment),rA=c(),T(Gs.$$.fragment),Yf=c(),un=n("h2"),Xs=n("a"),Zh=n("span"),T(Fl.$$.fragment),aA=c(),em=n("span"),iA=a("FlaxAlbertForTokenClassification"),Zf=c(),Se=n("div"),T(xl.$$.fragment),lA=c(),tm=n("p"),dA=a(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),cA=c(),El=n("p"),pA=a("This model inherits from "),Xd=n("a"),hA=a("FlaxPreTrainedModel"),mA=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fA=c(),Ml=n("p"),uA=a("This model is also a Flax Linen "),zl=n("a"),gA=a("flax.linen.Module"),_A=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bA=c(),om=n("p"),kA=a("Finally, this model supports inherent JAX features such as:"),vA=c(),Jt=n("ul"),nm=n("li"),ql=n("a"),TA=a("Just-In-Time (JIT) compilation"),yA=c(),sm=n("li"),jl=n("a"),wA=a("Automatic Differentiation"),$A=c(),rm=n("li"),Pl=n("a"),AA=a("Vectorization"),FA=c(),am=n("li"),Cl=n("a"),xA=a("Parallelization"),EA=c(),Pt=n("div"),T(Ll.$$.fragment),MA=c(),gn=n("p"),zA=a("The "),im=n("code"),qA=a("FlaxAlbertPreTrainedModel"),jA=a(" forward method, overrides the "),lm=n("code"),PA=a("__call__"),CA=a(" special method."),LA=c(),T(Ys.$$.fragment),IA=c(),T(Zs.$$.fragment),eu=c(),_n=n("h2"),er=n("a"),dm=n("span"),T(Il.$$.fragment),NA=c(),cm=n("span"),DA=a("FlaxAlbertForQuestionAnswering"),tu=c(),Oe=n("div"),T(Nl.$$.fragment),SA=c(),bn=n("p"),OA=a(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),pm=n("code"),WA=a("span start logits"),UA=a(" and "),hm=n("code"),BA=a("span end logits"),RA=a(")."),HA=c(),Dl=n("p"),QA=a("This model inherits from "),Yd=n("a"),VA=a("FlaxPreTrainedModel"),KA=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),JA=c(),Sl=n("p"),GA=a("This model is also a Flax Linen "),Ol=n("a"),XA=a("flax.linen.Module"),YA=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ZA=c(),mm=n("p"),e0=a("Finally, this model supports inherent JAX features such as:"),t0=c(),Gt=n("ul"),fm=n("li"),Wl=n("a"),o0=a("Just-In-Time (JIT) compilation"),n0=c(),um=n("li"),Ul=n("a"),s0=a("Automatic Differentiation"),r0=c(),gm=n("li"),Bl=n("a"),a0=a("Vectorization"),i0=c(),_m=n("li"),Rl=n("a"),l0=a("Parallelization"),d0=c(),Ct=n("div"),T(Hl.$$.fragment),c0=c(),kn=n("p"),p0=a("The "),bm=n("code"),h0=a("FlaxAlbertPreTrainedModel"),m0=a(" forward method, overrides the "),km=n("code"),f0=a("__call__"),u0=a(" special method."),g0=c(),T(tr.$$.fragment),_0=c(),T(or.$$.fragment),this.h()},l(o){const k=a9('[data-svelte="svelte-1phssyn"]',document.head);d=s(k,"META",{name:!0,content:!0}),k.forEach(t),g=p(o),h=s(o,"H1",{class:!0});var Ql=r(h);m=s(Ql,"A",{id:!0,class:!0,href:!0});var vm=r(m);_=s(vm,"SPAN",{});var Tm=r(_);y(l.$$.fragment,Tm),Tm.forEach(t),vm.forEach(t),f=p(Ql),E=s(Ql,"SPAN",{});var ym=r(E);fe=i(ym,"ALBERT"),ym.forEach(t),Ql.forEach(t),G=p(o),z=s(o,"H2",{class:!0});var Vl=r(z);Y=s(Vl,"A",{id:!0,class:!0,href:!0});var wm=r(Y);U=s(wm,"SPAN",{});var $m=r(U);y(ee.$$.fragment,$m),$m.forEach(t),wm.forEach(t),ue=p(Vl),B=s(Vl,"SPAN",{});var Am=r(B);ge=i(Am,"Overview"),Am.forEach(t),Vl.forEach(t),de=p(o),K=s(o,"P",{});var Kl=r(K);I=i(Kl,"The ALBERT model was proposed in "),te=s(Kl,"A",{href:!0,rel:!0});var Fm=r(te);X=i(Fm,"ALBERT: A Lite BERT for Self-supervised Learning of Language Representations"),Fm.forEach(t),q=i(Kl,` by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma,
Radu Soricut. It presents two parameter-reduction techniques to lower memory consumption and increase the training
speed of BERT:`),Kl.forEach(t),P=p(o),Z=s(o,"UL",{});var Jl=r(Z);R=s(Jl,"LI",{});var xm=r(R);_e=i(xm,"Splitting the embedding matrix into two smaller matrices."),xm.forEach(t),be=p(Jl),H=s(Jl,"LI",{});var Em=r(H);ke=i(Em,"Using repeating layers split among groups."),Em.forEach(t),Jl.forEach(t),ce=p(o),j=s(o,"P",{});var Mm=r(j);ve=i(Mm,"The abstract from the paper is the following:"),Mm.forEach(t),Q=p(o),oe=s(o,"P",{});var zm=r(oe);ie=s(zm,"EM",{});var qm=r(ie);V=i(qm,`Increasing model size when pretraining natural language representations often results in improved performance on
downstream tasks. However, at some point further model increases become harder due to GPU/TPU memory limitations,
longer training times, and unexpected model degradation. To address these problems, we present two parameter-reduction
techniques to lower memory consumption and increase the training speed of BERT. Comprehensive empirical evidence shows
that our proposed methods lead to models that scale much better compared to the original BERT. We also use a
self-supervised loss that focuses on modeling inter-sentence coherence, and show it consistently helps downstream tasks
with multi-sentence inputs. As a result, our best model establishes new state-of-the-art results on the GLUE, RACE, and
SQuAD benchmarks while having fewer parameters compared to BERT-large.`),qm.forEach(t),zm.forEach(t),pe=p(o),ne=s(o,"P",{});var jm=r(ne);N=i(jm,"Tips:"),jm.forEach(t),he=p(o),S=s(o,"UL",{});var Gl=r(S);le=s(Gl,"LI",{});var Pm=r(le);v=i(Pm,`ALBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),Pm.forEach(t),M=p(Gl),J=s(Gl,"LI",{});var Cm=r(J);Fe=i(Cm,`ALBERT uses repeating layers which results in a small memory footprint, however the computational cost remains
similar to a BERT-like architecture with the same number of hidden layers as it has to iterate through the same
number of (repeating) layers.`),Cm.forEach(t),Gl.forEach(t),Ae=p(o),C=s(o,"P",{});var Xt=r(C);xe=i(Xt,"This model was contributed by "),ye=s(Xt,"A",{href:!0,rel:!0});var Lm=r(ye);Ee=i(Lm,"lysandre"),Lm.forEach(t),D=i(Xt,`. This model jax version was contributed by
`),O=s(Xt,"A",{href:!0,rel:!0});var Im=r(O);Me=i(Im,"kamalkraj"),Im.forEach(t),ze=i(Xt,". The original code can be found "),W=s(Xt,"A",{href:!0,rel:!0});var Nm=r(W);qe=i(Nm,"here"),Nm.forEach(t),je=i(Xt,"."),Xt.forEach(t),me=p(o),Te=s(o,"H2",{class:!0});var Xl=r(Te);wn=s(Xl,"A",{id:!0,class:!0,href:!0});var Dm=r(wn);Mc=s(Dm,"SPAN",{});var Sm=r(Mc);y(Fr.$$.fragment,Sm),Sm.forEach(t),Dm.forEach(t),Tg=p(Xl),zc=s(Xl,"SPAN",{});var Om=r(zc);yg=i(Om,"AlbertConfig"),Om.forEach(t),Xl.forEach(t),rf=p(o),bt=s(o,"DIV",{class:!0});var Yt=r(bt);y(xr.$$.fragment,Yt),wg=p(Yt),Ut=s(Yt,"P",{});var Zt=r(Ut);$g=i(Zt,"This is the configuration class to store the configuration of a "),rd=s(Zt,"A",{href:!0});var Wm=r(rd);Ag=i(Wm,"AlbertModel"),Wm.forEach(t),Fg=i(Zt," or a "),ad=s(Zt,"A",{href:!0});var Um=r(ad);xg=i(Um,"TFAlbertModel"),Um.forEach(t),Eg=i(Zt,`. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
`),Er=s(Zt,"A",{href:!0,rel:!0});var Bm=r(Er);Mg=i(Bm,"albert-xxlarge-v2"),Bm.forEach(t),zg=i(Zt," architecture."),Zt.forEach(t),qg=p(Yt),bo=s(Yt,"P",{});var vn=r(bo);jg=i(vn,"Configuration objects inherit from "),id=s(vn,"A",{href:!0});var Rm=r(id);Pg=i(Rm,"PretrainedConfig"),Rm.forEach(t),Cg=i(vn,` and can be used to control the model outputs. Read the
documentation from `),ld=s(vn,"A",{href:!0});var Hm=r(ld);Lg=i(Hm,"PretrainedConfig"),Hm.forEach(t),Ig=i(vn," for more information."),vn.forEach(t),Ng=p(Yt),y($n.$$.fragment,Yt),Yt.forEach(t),af=p(o),ko=s(o,"H2",{class:!0});var Yl=r(ko);An=s(Yl,"A",{id:!0,class:!0,href:!0});var Qm=r(An);qc=s(Qm,"SPAN",{});var Vm=r(qc);y(Mr.$$.fragment,Vm),Vm.forEach(t),Qm.forEach(t),Dg=p(Yl),jc=s(Yl,"SPAN",{});var Km=r(jc);Sg=i(Km,"AlbertTokenizer"),Km.forEach(t),Yl.forEach(t),lf=p(o),Pe=s(o,"DIV",{class:!0});var Je=r(Pe);y(zr.$$.fragment,Je),Og=p(Je),qr=s(Je,"P",{});var Zl=r(qr);Wg=i(Zl,"Construct an ALBERT tokenizer. Based on "),jr=s(Zl,"A",{href:!0,rel:!0});var Jm=r(jr);Ug=i(Jm,"SentencePiece"),Jm.forEach(t),Bg=i(Zl,"."),Zl.forEach(t),Rg=p(Je),Pr=s(Je,"P",{});var ed=r(Pr);Hg=i(ed,"This tokenizer inherits from "),dd=s(ed,"A",{href:!0});var Gm=r(dd);Qg=i(Gm,"PreTrainedTokenizer"),Gm.forEach(t),Vg=i(ed,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ed.forEach(t),Kg=p(Je),to=s(Je,"DIV",{class:!0});var Tn=r(to);y(Cr.$$.fragment,Tn),Jg=p(Tn),Pc=s(Tn,"P",{});var Xm=r(Pc);Gg=i(Xm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),Xm.forEach(t),Xg=p(Tn),Lr=s(Tn,"UL",{});var td=r(Lr);cd=s(td,"LI",{});var Zd=r(cd);Yg=i(Zd,"single sequence: "),Cc=s(Zd,"CODE",{});var Ym=r(Cc);Zg=i(Ym,"[CLS] X [SEP]"),Ym.forEach(t),Zd.forEach(t),e_=p(td),pd=s(td,"LI",{});var ec=r(pd);t_=i(ec,"pair of sequences: "),Lc=s(ec,"CODE",{});var Zm=r(Lc);o_=i(Zm,"[CLS] A [SEP] B [SEP]"),Zm.forEach(t),ec.forEach(t),td.forEach(t),Tn.forEach(t),n_=p(Je),Fn=s(Je,"DIV",{class:!0});var od=r(Fn);y(Ir.$$.fragment,od),s_=p(od),Nr=s(od,"P",{});var nd=r(Nr);r_=i(nd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ic=s(nd,"CODE",{});var ef=r(Ic);a_=i(ef,"prepare_for_model"),ef.forEach(t),i_=i(nd," method."),nd.forEach(t),od.forEach(t),l_=p(Je),vt=s(Je,"DIV",{class:!0});var eo=r(vt);y(Dr.$$.fragment,eo),d_=p(eo),Nc=s(eo,"P",{});var tf=r(Nc);c_=i(tf,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),tf.forEach(t),p_=p(eo),y(xn.$$.fragment,eo),h_=p(eo),vo=s(eo,"P",{});var yn=r(vo);m_=i(yn,"If "),Dc=s(yn,"CODE",{});var of=r(Dc);f_=i(of,"token_ids_1"),of.forEach(t),u_=i(yn," is "),Sc=s(yn,"CODE",{});var nf=r(Sc);g_=i(nf,"None"),nf.forEach(t),__=i(yn,", this method only returns the first portion of the mask (0s)."),yn.forEach(t),eo.forEach(t),b_=p(Je),hd=s(Je,"DIV",{class:!0});var sf=r(hd);y(Sr.$$.fragment,sf),sf.forEach(t),Je.forEach(t),df=p(o),To=s(o,"H2",{class:!0});var sd=r(To);En=s(sd,"A",{id:!0,class:!0,href:!0});var v0=r(En);Oc=s(v0,"SPAN",{});var T0=r(Oc);y(Or.$$.fragment,T0),T0.forEach(t),v0.forEach(t),k_=p(sd),Wc=s(sd,"SPAN",{});var y0=r(Wc);v_=i(y0,"AlbertTokenizerFast"),y0.forEach(t),sd.forEach(t),cf=p(o),kt=s(o,"DIV",{class:!0});var nr=r(kt);y(Wr.$$.fragment,nr),T_=p(nr),Bt=s(nr,"P",{});var sr=r(Bt);y_=i(sr,"Construct a \u201Cfast\u201D ALBERT tokenizer (backed by HuggingFace\u2019s "),Uc=s(sr,"EM",{});var w0=r(Uc);w_=i(w0,"tokenizers"),w0.forEach(t),$_=i(sr,` library). Based on
`),Ur=s(sr,"A",{href:!0,rel:!0});var $0=r(Ur);A_=i($0,"Unigram"),$0.forEach(t),F_=i(sr,`. This
tokenizer inherits from `),md=s(sr,"A",{href:!0});var A0=r(md);x_=i(A0,"PreTrainedTokenizerFast"),A0.forEach(t),E_=i(sr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),sr.forEach(t),M_=p(nr),oo=s(nr,"DIV",{class:!0});var tc=r(oo);y(Br.$$.fragment,tc),z_=p(tc),Bc=s(tc,"P",{});var F0=r(Bc);q_=i(F0,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),F0.forEach(t),j_=p(tc),Rr=s(tc,"UL",{});var nu=r(Rr);fd=s(nu,"LI",{});var b0=r(fd);P_=i(b0,"single sequence: "),Rc=s(b0,"CODE",{});var x0=r(Rc);C_=i(x0,"[CLS] X [SEP]"),x0.forEach(t),b0.forEach(t),L_=p(nu),ud=s(nu,"LI",{});var k0=r(ud);I_=i(k0,"pair of sequences: "),Hc=s(k0,"CODE",{});var E0=r(Hc);N_=i(E0,"[CLS] A [SEP] B [SEP]"),E0.forEach(t),k0.forEach(t),nu.forEach(t),tc.forEach(t),D_=p(nr),Tt=s(nr,"DIV",{class:!0});var rr=r(Tt);y(Hr.$$.fragment,rr),S_=p(rr),Qc=s(rr,"P",{});var M0=r(Qc);O_=i(M0,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),M0.forEach(t),W_=p(rr),y(Mn.$$.fragment,rr),U_=p(rr),Vc=s(rr,"P",{});var z0=r(Vc);B_=i(z0,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),z0.forEach(t),rr.forEach(t),nr.forEach(t),pf=p(o),yo=s(o,"H2",{class:!0});var su=r(yo);zn=s(su,"A",{id:!0,class:!0,href:!0});var q0=r(zn);Kc=s(q0,"SPAN",{});var j0=r(Kc);y(Qr.$$.fragment,j0),j0.forEach(t),q0.forEach(t),R_=p(su),Jc=s(su,"SPAN",{});var P0=r(Jc);H_=i(P0,"Albert specific outputs"),P0.forEach(t),su.forEach(t),hf=p(o),wo=s(o,"DIV",{class:!0});var ru=r(wo);y(Vr.$$.fragment,ru),Q_=p(ru),Kr=s(ru,"P",{});var au=r(Kr);V_=i(au,"Output type of "),gd=s(au,"A",{href:!0});var C0=r(gd);K_=i(C0,"AlbertForPreTraining"),C0.forEach(t),J_=i(au,"."),au.forEach(t),ru.forEach(t),mf=p(o),$o=s(o,"DIV",{class:!0});var iu=r($o);y(Jr.$$.fragment,iu),G_=p(iu),Gr=s(iu,"P",{});var lu=r(Gr);X_=i(lu,"Output type of "),_d=s(lu,"A",{href:!0});var L0=r(_d);Y_=i(L0,"TFAlbertForPreTraining"),L0.forEach(t),Z_=i(lu,"."),lu.forEach(t),iu.forEach(t),ff=p(o),Ao=s(o,"H2",{class:!0});var du=r(Ao);qn=s(du,"A",{id:!0,class:!0,href:!0});var I0=r(qn);Gc=s(I0,"SPAN",{});var N0=r(Gc);y(Xr.$$.fragment,N0),N0.forEach(t),I0.forEach(t),eb=p(du),Xc=s(du,"SPAN",{});var D0=r(Xc);tb=i(D0,"AlbertModel"),D0.forEach(t),du.forEach(t),uf=p(o),Ge=s(o,"DIV",{class:!0});var no=r(Ge);y(Yr.$$.fragment,no),ob=p(no),Yc=s(no,"P",{});var S0=r(Yc);nb=i(S0,"The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top."),S0.forEach(t),sb=p(no),Zr=s(no,"P",{});var cu=r(Zr);rb=i(cu,"This model inherits from "),bd=s(cu,"A",{href:!0});var O0=r(bd);ab=i(O0,"PreTrainedModel"),O0.forEach(t),ib=i(cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cu.forEach(t),lb=p(no),ea=s(no,"P",{});var pu=r(ea);db=i(pu,"This model is also a PyTorch "),ta=s(pu,"A",{href:!0,rel:!0});var W0=r(ta);cb=i(W0,"torch.nn.Module"),W0.forEach(t),pb=i(pu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pu.forEach(t),hb=p(no),yt=s(no,"DIV",{class:!0});var ar=r(yt);y(oa.$$.fragment,ar),mb=p(ar),Fo=s(ar,"P",{});var oc=r(Fo);fb=i(oc,"The "),kd=s(oc,"A",{href:!0});var U0=r(kd);ub=i(U0,"AlbertModel"),U0.forEach(t),gb=i(oc," forward method, overrides the "),Zc=s(oc,"CODE",{});var B0=r(Zc);_b=i(B0,"__call__"),B0.forEach(t),bb=i(oc," special method."),oc.forEach(t),kb=p(ar),y(jn.$$.fragment,ar),vb=p(ar),y(Pn.$$.fragment,ar),ar.forEach(t),no.forEach(t),gf=p(o),xo=s(o,"H2",{class:!0});var hu=r(xo);Cn=s(hu,"A",{id:!0,class:!0,href:!0});var R0=r(Cn);ep=s(R0,"SPAN",{});var H0=r(ep);y(na.$$.fragment,H0),H0.forEach(t),R0.forEach(t),Tb=p(hu),tp=s(hu,"SPAN",{});var Q0=r(tp);yb=i(Q0,"AlbertForPreTraining"),Q0.forEach(t),hu.forEach(t),_f=p(o),Xe=s(o,"DIV",{class:!0});var so=r(Xe);y(sa.$$.fragment,so),wb=p(so),Eo=s(so,"P",{});var nc=r(Eo);$b=i(nc,"Albert Model with two heads on top as done during the pretraining: a "),op=s(nc,"CODE",{});var V0=r(op);Ab=i(V0,"masked language modeling"),V0.forEach(t),Fb=i(nc,` head and a
`),np=s(nc,"CODE",{});var K0=r(np);xb=i(K0,"sentence order prediction (classification)"),K0.forEach(t),Eb=i(nc," head."),nc.forEach(t),Mb=p(so),ra=s(so,"P",{});var mu=r(ra);zb=i(mu,"This model inherits from "),vd=s(mu,"A",{href:!0});var J0=r(vd);qb=i(J0,"PreTrainedModel"),J0.forEach(t),jb=i(mu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mu.forEach(t),Pb=p(so),aa=s(so,"P",{});var fu=r(aa);Cb=i(fu,"This model is also a PyTorch "),ia=s(fu,"A",{href:!0,rel:!0});var G0=r(ia);Lb=i(G0,"torch.nn.Module"),G0.forEach(t),Ib=i(fu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fu.forEach(t),Nb=p(so),wt=s(so,"DIV",{class:!0});var ir=r(wt);y(la.$$.fragment,ir),Db=p(ir),Mo=s(ir,"P",{});var sc=r(Mo);Sb=i(sc,"The "),Td=s(sc,"A",{href:!0});var X0=r(Td);Ob=i(X0,"AlbertForPreTraining"),X0.forEach(t),Wb=i(sc," forward method, overrides the "),sp=s(sc,"CODE",{});var Y0=r(sp);Ub=i(Y0,"__call__"),Y0.forEach(t),Bb=i(sc," special method."),sc.forEach(t),Rb=p(ir),y(Ln.$$.fragment,ir),Hb=p(ir),y(In.$$.fragment,ir),ir.forEach(t),so.forEach(t),bf=p(o),zo=s(o,"H2",{class:!0});var uu=r(zo);Nn=s(uu,"A",{id:!0,class:!0,href:!0});var Z0=r(Nn);rp=s(Z0,"SPAN",{});var eF=r(rp);y(da.$$.fragment,eF),eF.forEach(t),Z0.forEach(t),Qb=p(uu),ap=s(uu,"SPAN",{});var tF=r(ap);Vb=i(tF,"AlbertForMaskedLM"),tF.forEach(t),uu.forEach(t),kf=p(o),Ye=s(o,"DIV",{class:!0});var ro=r(Ye);y(ca.$$.fragment,ro),Kb=p(ro),pa=s(ro,"P",{});var gu=r(pa);Jb=i(gu,"Albert Model with a "),ip=s(gu,"CODE",{});var oF=r(ip);Gb=i(oF,"language modeling"),oF.forEach(t),Xb=i(gu," head on top."),gu.forEach(t),Yb=p(ro),ha=s(ro,"P",{});var _u=r(ha);Zb=i(_u,"This model inherits from "),yd=s(_u,"A",{href:!0});var nF=r(yd);ek=i(nF,"PreTrainedModel"),nF.forEach(t),tk=i(_u,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_u.forEach(t),ok=p(ro),ma=s(ro,"P",{});var bu=r(ma);nk=i(bu,"This model is also a PyTorch "),fa=s(bu,"A",{href:!0,rel:!0});var sF=r(fa);sk=i(sF,"torch.nn.Module"),sF.forEach(t),rk=i(bu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bu.forEach(t),ak=p(ro),nt=s(ro,"DIV",{class:!0});var ao=r(nt);y(ua.$$.fragment,ao),ik=p(ao),qo=s(ao,"P",{});var rc=r(qo);lk=i(rc,"The "),wd=s(rc,"A",{href:!0});var rF=r(wd);dk=i(rF,"AlbertForMaskedLM"),rF.forEach(t),ck=i(rc," forward method, overrides the "),lp=s(rc,"CODE",{});var aF=r(lp);pk=i(aF,"__call__"),aF.forEach(t),hk=i(rc," special method."),rc.forEach(t),mk=p(ao),y(Dn.$$.fragment,ao),fk=p(ao),y(Sn.$$.fragment,ao),uk=p(ao),y(On.$$.fragment,ao),ao.forEach(t),ro.forEach(t),vf=p(o),jo=s(o,"H2",{class:!0});var ku=r(jo);Wn=s(ku,"A",{id:!0,class:!0,href:!0});var iF=r(Wn);dp=s(iF,"SPAN",{});var lF=r(dp);y(ga.$$.fragment,lF),lF.forEach(t),iF.forEach(t),gk=p(ku),cp=s(ku,"SPAN",{});var dF=r(cp);_k=i(dF,"AlbertForSequenceClassification"),dF.forEach(t),ku.forEach(t),Tf=p(o),Ze=s(o,"DIV",{class:!0});var io=r(Ze);y(_a.$$.fragment,io),bk=p(io),pp=s(io,"P",{});var cF=r(pp);kk=i(cF,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),cF.forEach(t),vk=p(io),ba=s(io,"P",{});var vu=r(ba);Tk=i(vu,"This model inherits from "),$d=s(vu,"A",{href:!0});var pF=r($d);yk=i(pF,"PreTrainedModel"),pF.forEach(t),wk=i(vu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vu.forEach(t),$k=p(io),ka=s(io,"P",{});var Tu=r(ka);Ak=i(Tu,"This model is also a PyTorch "),va=s(Tu,"A",{href:!0,rel:!0});var hF=r(va);Fk=i(hF,"torch.nn.Module"),hF.forEach(t),xk=i(Tu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tu.forEach(t),Ek=p(io),We=s(io,"DIV",{class:!0});var ct=r(We);y(Ta.$$.fragment,ct),Mk=p(ct),Po=s(ct,"P",{});var ac=r(Po);zk=i(ac,"The "),Ad=s(ac,"A",{href:!0});var mF=r(Ad);qk=i(mF,"AlbertForSequenceClassification"),mF.forEach(t),jk=i(ac," forward method, overrides the "),hp=s(ac,"CODE",{});var fF=r(hp);Pk=i(fF,"__call__"),fF.forEach(t),Ck=i(ac," special method."),ac.forEach(t),Lk=p(ct),y(Un.$$.fragment,ct),Ik=p(ct),y(Bn.$$.fragment,ct),Nk=p(ct),y(Rn.$$.fragment,ct),Dk=p(ct),y(Hn.$$.fragment,ct),Sk=p(ct),y(Qn.$$.fragment,ct),ct.forEach(t),io.forEach(t),yf=p(o),Co=s(o,"H2",{class:!0});var yu=r(Co);Vn=s(yu,"A",{id:!0,class:!0,href:!0});var uF=r(Vn);mp=s(uF,"SPAN",{});var gF=r(mp);y(ya.$$.fragment,gF),gF.forEach(t),uF.forEach(t),Ok=p(yu),fp=s(yu,"SPAN",{});var _F=r(fp);Wk=i(_F,"AlbertForMultipleChoice"),_F.forEach(t),yu.forEach(t),wf=p(o),et=s(o,"DIV",{class:!0});var lo=r(et);y(wa.$$.fragment,lo),Uk=p(lo),up=s(lo,"P",{});var bF=r(up);Bk=i(bF,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),bF.forEach(t),Rk=p(lo),$a=s(lo,"P",{});var wu=r($a);Hk=i(wu,"This model inherits from "),Fd=s(wu,"A",{href:!0});var kF=r(Fd);Qk=i(kF,"PreTrainedModel"),kF.forEach(t),Vk=i(wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wu.forEach(t),Kk=p(lo),Aa=s(lo,"P",{});var $u=r(Aa);Jk=i($u,"This model is also a PyTorch "),Fa=s($u,"A",{href:!0,rel:!0});var vF=r(Fa);Gk=i(vF,"torch.nn.Module"),vF.forEach(t),Xk=i($u,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$u.forEach(t),Yk=p(lo),$t=s(lo,"DIV",{class:!0});var lr=r($t);y(xa.$$.fragment,lr),Zk=p(lr),Lo=s(lr,"P",{});var ic=r(Lo);ev=i(ic,"The "),xd=s(ic,"A",{href:!0});var TF=r(xd);tv=i(TF,"AlbertForMultipleChoice"),TF.forEach(t),ov=i(ic," forward method, overrides the "),gp=s(ic,"CODE",{});var yF=r(gp);nv=i(yF,"__call__"),yF.forEach(t),sv=i(ic," special method."),ic.forEach(t),rv=p(lr),y(Kn.$$.fragment,lr),av=p(lr),y(Jn.$$.fragment,lr),lr.forEach(t),lo.forEach(t),$f=p(o),Io=s(o,"H2",{class:!0});var Au=r(Io);Gn=s(Au,"A",{id:!0,class:!0,href:!0});var wF=r(Gn);_p=s(wF,"SPAN",{});var $F=r(_p);y(Ea.$$.fragment,$F),$F.forEach(t),wF.forEach(t),iv=p(Au),bp=s(Au,"SPAN",{});var AF=r(bp);lv=i(AF,"AlbertForTokenClassification"),AF.forEach(t),Au.forEach(t),Af=p(o),tt=s(o,"DIV",{class:!0});var co=r(tt);y(Ma.$$.fragment,co),dv=p(co),kp=s(co,"P",{});var FF=r(kp);cv=i(FF,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),FF.forEach(t),pv=p(co),za=s(co,"P",{});var Fu=r(za);hv=i(Fu,"This model inherits from "),Ed=s(Fu,"A",{href:!0});var xF=r(Ed);mv=i(xF,"PreTrainedModel"),xF.forEach(t),fv=i(Fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu.forEach(t),uv=p(co),qa=s(co,"P",{});var xu=r(qa);gv=i(xu,"This model is also a PyTorch "),ja=s(xu,"A",{href:!0,rel:!0});var EF=r(ja);_v=i(EF,"torch.nn.Module"),EF.forEach(t),bv=i(xu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xu.forEach(t),kv=p(co),st=s(co,"DIV",{class:!0});var po=r(st);y(Pa.$$.fragment,po),vv=p(po),No=s(po,"P",{});var lc=r(No);Tv=i(lc,"The "),Md=s(lc,"A",{href:!0});var MF=r(Md);yv=i(MF,"AlbertForTokenClassification"),MF.forEach(t),wv=i(lc," forward method, overrides the "),vp=s(lc,"CODE",{});var zF=r(vp);$v=i(zF,"__call__"),zF.forEach(t),Av=i(lc," special method."),lc.forEach(t),Fv=p(po),y(Xn.$$.fragment,po),xv=p(po),y(Yn.$$.fragment,po),Ev=p(po),y(Zn.$$.fragment,po),po.forEach(t),co.forEach(t),Ff=p(o),Do=s(o,"H2",{class:!0});var Eu=r(Do);es=s(Eu,"A",{id:!0,class:!0,href:!0});var qF=r(es);Tp=s(qF,"SPAN",{});var jF=r(Tp);y(Ca.$$.fragment,jF),jF.forEach(t),qF.forEach(t),Mv=p(Eu),yp=s(Eu,"SPAN",{});var PF=r(yp);zv=i(PF,"AlbertForQuestionAnswering"),PF.forEach(t),Eu.forEach(t),xf=p(o),ot=s(o,"DIV",{class:!0});var ho=r(ot);y(La.$$.fragment,ho),qv=p(ho),So=s(ho,"P",{});var dc=r(So);jv=i(dc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),wp=s(dc,"CODE",{});var CF=r(wp);Pv=i(CF,"span start logits"),CF.forEach(t),Cv=i(dc," and "),$p=s(dc,"CODE",{});var LF=r($p);Lv=i(LF,"span end logits"),LF.forEach(t),Iv=i(dc,")."),dc.forEach(t),Nv=p(ho),Ia=s(ho,"P",{});var Mu=r(Ia);Dv=i(Mu,"This model inherits from "),zd=s(Mu,"A",{href:!0});var IF=r(zd);Sv=i(IF,"PreTrainedModel"),IF.forEach(t),Ov=i(Mu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mu.forEach(t),Wv=p(ho),Na=s(ho,"P",{});var zu=r(Na);Uv=i(zu,"This model is also a PyTorch "),Da=s(zu,"A",{href:!0,rel:!0});var NF=r(Da);Bv=i(NF,"torch.nn.Module"),NF.forEach(t),Rv=i(zu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zu.forEach(t),Hv=p(ho),rt=s(ho,"DIV",{class:!0});var mo=r(rt);y(Sa.$$.fragment,mo),Qv=p(mo),Oo=s(mo,"P",{});var cc=r(Oo);Vv=i(cc,"The "),qd=s(cc,"A",{href:!0});var DF=r(qd);Kv=i(DF,"AlbertForQuestionAnswering"),DF.forEach(t),Jv=i(cc," forward method, overrides the "),Ap=s(cc,"CODE",{});var SF=r(Ap);Gv=i(SF,"__call__"),SF.forEach(t),Xv=i(cc," special method."),cc.forEach(t),Yv=p(mo),y(ts.$$.fragment,mo),Zv=p(mo),y(os.$$.fragment,mo),eT=p(mo),y(ns.$$.fragment,mo),mo.forEach(t),ho.forEach(t),Ef=p(o),Wo=s(o,"H2",{class:!0});var qu=r(Wo);ss=s(qu,"A",{id:!0,class:!0,href:!0});var OF=r(ss);Fp=s(OF,"SPAN",{});var WF=r(Fp);y(Oa.$$.fragment,WF),WF.forEach(t),OF.forEach(t),tT=p(qu),xp=s(qu,"SPAN",{});var UF=r(xp);oT=i(UF,"TFAlbertModel"),UF.forEach(t),qu.forEach(t),Mf=p(o),Ue=s(o,"DIV",{class:!0});var Lt=r(Ue);y(Wa.$$.fragment,Lt),nT=p(Lt),Ep=s(Lt,"P",{});var BF=r(Ep);sT=i(BF,"The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),BF.forEach(t),rT=p(Lt),Ua=s(Lt,"P",{});var ju=r(Ua);aT=i(ju,"This model inherits from "),jd=s(ju,"A",{href:!0});var RF=r(jd);iT=i(RF,"TFPreTrainedModel"),RF.forEach(t),lT=i(ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ju.forEach(t),dT=p(Lt),Ba=s(Lt,"P",{});var Pu=r(Ba);cT=i(Pu,"This model is also a "),Ra=s(Pu,"A",{href:!0,rel:!0});var HF=r(Ra);pT=i(HF,"tf.keras.Model"),HF.forEach(t),hT=i(Pu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pu.forEach(t),mT=p(Lt),y(rs.$$.fragment,Lt),fT=p(Lt),At=s(Lt,"DIV",{class:!0});var dr=r(At);y(Ha.$$.fragment,dr),uT=p(dr),Uo=s(dr,"P",{});var pc=r(Uo);gT=i(pc,"The "),Pd=s(pc,"A",{href:!0});var QF=r(Pd);_T=i(QF,"TFAlbertModel"),QF.forEach(t),bT=i(pc," forward method, overrides the "),Mp=s(pc,"CODE",{});var VF=r(Mp);kT=i(VF,"__call__"),VF.forEach(t),vT=i(pc," special method."),pc.forEach(t),TT=p(dr),y(as.$$.fragment,dr),yT=p(dr),y(is.$$.fragment,dr),dr.forEach(t),Lt.forEach(t),zf=p(o),Bo=s(o,"H2",{class:!0});var Cu=r(Bo);ls=s(Cu,"A",{id:!0,class:!0,href:!0});var KF=r(ls);zp=s(KF,"SPAN",{});var JF=r(zp);y(Qa.$$.fragment,JF),JF.forEach(t),KF.forEach(t),wT=p(Cu),qp=s(Cu,"SPAN",{});var GF=r(qp);$T=i(GF,"TFAlbertForPreTraining"),GF.forEach(t),Cu.forEach(t),qf=p(o),Be=s(o,"DIV",{class:!0});var It=r(Be);y(Va.$$.fragment,It),AT=p(It),Ro=s(It,"P",{});var hc=r(Ro);FT=i(hc,"Albert Model with two heads on top for pretraining: a "),jp=s(hc,"CODE",{});var XF=r(jp);xT=i(XF,"masked language modeling"),XF.forEach(t),ET=i(hc," head and a "),Pp=s(hc,"CODE",{});var YF=r(Pp);MT=i(YF,"sentence order prediction"),YF.forEach(t),zT=i(hc," (classification) head."),hc.forEach(t),qT=p(It),Ka=s(It,"P",{});var Lu=r(Ka);jT=i(Lu,"This model inherits from "),Cd=s(Lu,"A",{href:!0});var ZF=r(Cd);PT=i(ZF,"TFPreTrainedModel"),ZF.forEach(t),CT=i(Lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lu.forEach(t),LT=p(It),Ja=s(It,"P",{});var Iu=r(Ja);IT=i(Iu,"This model is also a "),Ga=s(Iu,"A",{href:!0,rel:!0});var ex=r(Ga);NT=i(ex,"tf.keras.Model"),ex.forEach(t),DT=i(Iu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Iu.forEach(t),ST=p(It),y(ds.$$.fragment,It),OT=p(It),Ft=s(It,"DIV",{class:!0});var cr=r(Ft);y(Xa.$$.fragment,cr),WT=p(cr),Ho=s(cr,"P",{});var mc=r(Ho);UT=i(mc,"The "),Ld=s(mc,"A",{href:!0});var tx=r(Ld);BT=i(tx,"TFAlbertForPreTraining"),tx.forEach(t),RT=i(mc," forward method, overrides the "),Cp=s(mc,"CODE",{});var ox=r(Cp);HT=i(ox,"__call__"),ox.forEach(t),QT=i(mc," special method."),mc.forEach(t),VT=p(cr),y(cs.$$.fragment,cr),KT=p(cr),y(ps.$$.fragment,cr),cr.forEach(t),It.forEach(t),jf=p(o),Qo=s(o,"H2",{class:!0});var Nu=r(Qo);hs=s(Nu,"A",{id:!0,class:!0,href:!0});var nx=r(hs);Lp=s(nx,"SPAN",{});var sx=r(Lp);y(Ya.$$.fragment,sx),sx.forEach(t),nx.forEach(t),JT=p(Nu),Ip=s(Nu,"SPAN",{});var rx=r(Ip);GT=i(rx,"TFAlbertForMaskedLM"),rx.forEach(t),Nu.forEach(t),Pf=p(o),Re=s(o,"DIV",{class:!0});var Nt=r(Re);y(Za.$$.fragment,Nt),XT=p(Nt),ei=s(Nt,"P",{});var Du=r(ei);YT=i(Du,"Albert Model with a "),Np=s(Du,"CODE",{});var ax=r(Np);ZT=i(ax,"language modeling"),ax.forEach(t),e1=i(Du," head on top."),Du.forEach(t),t1=p(Nt),ti=s(Nt,"P",{});var Su=r(ti);o1=i(Su,"This model inherits from "),Id=s(Su,"A",{href:!0});var ix=r(Id);n1=i(ix,"TFPreTrainedModel"),ix.forEach(t),s1=i(Su,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Su.forEach(t),r1=p(Nt),oi=s(Nt,"P",{});var Ou=r(oi);a1=i(Ou,"This model is also a "),ni=s(Ou,"A",{href:!0,rel:!0});var lx=r(ni);i1=i(lx,"tf.keras.Model"),lx.forEach(t),l1=i(Ou,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ou.forEach(t),d1=p(Nt),y(ms.$$.fragment,Nt),c1=p(Nt),at=s(Nt,"DIV",{class:!0});var fo=r(at);y(si.$$.fragment,fo),p1=p(fo),Vo=s(fo,"P",{});var fc=r(Vo);h1=i(fc,"The "),Nd=s(fc,"A",{href:!0});var dx=r(Nd);m1=i(dx,"TFAlbertForMaskedLM"),dx.forEach(t),f1=i(fc," forward method, overrides the "),Dp=s(fc,"CODE",{});var cx=r(Dp);u1=i(cx,"__call__"),cx.forEach(t),g1=i(fc," special method."),fc.forEach(t),_1=p(fo),y(fs.$$.fragment,fo),b1=p(fo),y(us.$$.fragment,fo),k1=p(fo),y(gs.$$.fragment,fo),fo.forEach(t),Nt.forEach(t),Cf=p(o),Ko=s(o,"H2",{class:!0});var Wu=r(Ko);_s=s(Wu,"A",{id:!0,class:!0,href:!0});var px=r(_s);Sp=s(px,"SPAN",{});var hx=r(Sp);y(ri.$$.fragment,hx),hx.forEach(t),px.forEach(t),v1=p(Wu),Op=s(Wu,"SPAN",{});var mx=r(Op);T1=i(mx,"TFAlbertForSequenceClassification"),mx.forEach(t),Wu.forEach(t),Lf=p(o),He=s(o,"DIV",{class:!0});var Dt=r(He);y(ai.$$.fragment,Dt),y1=p(Dt),Wp=s(Dt,"P",{});var fx=r(Wp);w1=i(fx,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),fx.forEach(t),$1=p(Dt),ii=s(Dt,"P",{});var Uu=r(ii);A1=i(Uu,"This model inherits from "),Dd=s(Uu,"A",{href:!0});var ux=r(Dd);F1=i(ux,"TFPreTrainedModel"),ux.forEach(t),x1=i(Uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uu.forEach(t),E1=p(Dt),li=s(Dt,"P",{});var Bu=r(li);M1=i(Bu,"This model is also a "),di=s(Bu,"A",{href:!0,rel:!0});var gx=r(di);z1=i(gx,"tf.keras.Model"),gx.forEach(t),q1=i(Bu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bu.forEach(t),j1=p(Dt),y(bs.$$.fragment,Dt),P1=p(Dt),it=s(Dt,"DIV",{class:!0});var uo=r(it);y(ci.$$.fragment,uo),C1=p(uo),Jo=s(uo,"P",{});var uc=r(Jo);L1=i(uc,"The "),Sd=s(uc,"A",{href:!0});var _x=r(Sd);I1=i(_x,"TFAlbertForSequenceClassification"),_x.forEach(t),N1=i(uc," forward method, overrides the "),Up=s(uc,"CODE",{});var bx=r(Up);D1=i(bx,"__call__"),bx.forEach(t),S1=i(uc," special method."),uc.forEach(t),O1=p(uo),y(ks.$$.fragment,uo),W1=p(uo),y(vs.$$.fragment,uo),U1=p(uo),y(Ts.$$.fragment,uo),uo.forEach(t),Dt.forEach(t),If=p(o),Go=s(o,"H2",{class:!0});var Ru=r(Go);ys=s(Ru,"A",{id:!0,class:!0,href:!0});var kx=r(ys);Bp=s(kx,"SPAN",{});var vx=r(Bp);y(pi.$$.fragment,vx),vx.forEach(t),kx.forEach(t),B1=p(Ru),Rp=s(Ru,"SPAN",{});var Tx=r(Rp);R1=i(Tx,"TFAlbertForMultipleChoice"),Tx.forEach(t),Ru.forEach(t),Nf=p(o),Qe=s(o,"DIV",{class:!0});var St=r(Qe);y(hi.$$.fragment,St),H1=p(St),Hp=s(St,"P",{});var yx=r(Hp);Q1=i(yx,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),yx.forEach(t),V1=p(St),mi=s(St,"P",{});var Hu=r(mi);K1=i(Hu,"This model inherits from "),Od=s(Hu,"A",{href:!0});var wx=r(Od);J1=i(wx,"TFPreTrainedModel"),wx.forEach(t),G1=i(Hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hu.forEach(t),X1=p(St),fi=s(St,"P",{});var Qu=r(fi);Y1=i(Qu,"This model is also a "),ui=s(Qu,"A",{href:!0,rel:!0});var $x=r(ui);Z1=i($x,"tf.keras.Model"),$x.forEach(t),ey=i(Qu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qu.forEach(t),ty=p(St),y(ws.$$.fragment,St),oy=p(St),xt=s(St,"DIV",{class:!0});var pr=r(xt);y(gi.$$.fragment,pr),ny=p(pr),Xo=s(pr,"P",{});var gc=r(Xo);sy=i(gc,"The "),Wd=s(gc,"A",{href:!0});var Ax=r(Wd);ry=i(Ax,"TFAlbertForMultipleChoice"),Ax.forEach(t),ay=i(gc," forward method, overrides the "),Qp=s(gc,"CODE",{});var Fx=r(Qp);iy=i(Fx,"__call__"),Fx.forEach(t),ly=i(gc," special method."),gc.forEach(t),dy=p(pr),y($s.$$.fragment,pr),cy=p(pr),y(As.$$.fragment,pr),pr.forEach(t),St.forEach(t),Df=p(o),Yo=s(o,"H2",{class:!0});var Vu=r(Yo);Fs=s(Vu,"A",{id:!0,class:!0,href:!0});var xx=r(Fs);Vp=s(xx,"SPAN",{});var Ex=r(Vp);y(_i.$$.fragment,Ex),Ex.forEach(t),xx.forEach(t),py=p(Vu),Kp=s(Vu,"SPAN",{});var Mx=r(Kp);hy=i(Mx,"TFAlbertForTokenClassification"),Mx.forEach(t),Vu.forEach(t),Sf=p(o),Ve=s(o,"DIV",{class:!0});var Ot=r(Ve);y(bi.$$.fragment,Ot),my=p(Ot),Jp=s(Ot,"P",{});var zx=r(Jp);fy=i(zx,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),zx.forEach(t),uy=p(Ot),ki=s(Ot,"P",{});var Ku=r(ki);gy=i(Ku,"This model inherits from "),Ud=s(Ku,"A",{href:!0});var qx=r(Ud);_y=i(qx,"TFPreTrainedModel"),qx.forEach(t),by=i(Ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ku.forEach(t),ky=p(Ot),vi=s(Ot,"P",{});var Ju=r(vi);vy=i(Ju,"This model is also a "),Ti=s(Ju,"A",{href:!0,rel:!0});var jx=r(Ti);Ty=i(jx,"tf.keras.Model"),jx.forEach(t),yy=i(Ju,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ju.forEach(t),wy=p(Ot),y(xs.$$.fragment,Ot),$y=p(Ot),lt=s(Ot,"DIV",{class:!0});var go=r(lt);y(yi.$$.fragment,go),Ay=p(go),Zo=s(go,"P",{});var _c=r(Zo);Fy=i(_c,"The "),Bd=s(_c,"A",{href:!0});var Px=r(Bd);xy=i(Px,"TFAlbertForTokenClassification"),Px.forEach(t),Ey=i(_c," forward method, overrides the "),Gp=s(_c,"CODE",{});var Cx=r(Gp);My=i(Cx,"__call__"),Cx.forEach(t),zy=i(_c," special method."),_c.forEach(t),qy=p(go),y(Es.$$.fragment,go),jy=p(go),y(Ms.$$.fragment,go),Py=p(go),y(zs.$$.fragment,go),go.forEach(t),Ot.forEach(t),Of=p(o),en=s(o,"H2",{class:!0});var Gu=r(en);qs=s(Gu,"A",{id:!0,class:!0,href:!0});var Lx=r(qs);Xp=s(Lx,"SPAN",{});var Ix=r(Xp);y(wi.$$.fragment,Ix),Ix.forEach(t),Lx.forEach(t),Cy=p(Gu),Yp=s(Gu,"SPAN",{});var Nx=r(Yp);Ly=i(Nx,"TFAlbertForQuestionAnswering"),Nx.forEach(t),Gu.forEach(t),Wf=p(o),Ke=s(o,"DIV",{class:!0});var Wt=r(Ke);y($i.$$.fragment,Wt),Iy=p(Wt),tn=s(Wt,"P",{});var bc=r(tn);Ny=i(bc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Zp=s(bc,"CODE",{});var Dx=r(Zp);Dy=i(Dx,"span start logits"),Dx.forEach(t),Sy=i(bc," and "),eh=s(bc,"CODE",{});var Sx=r(eh);Oy=i(Sx,"span end logits"),Sx.forEach(t),Wy=i(bc,")."),bc.forEach(t),Uy=p(Wt),Ai=s(Wt,"P",{});var Xu=r(Ai);By=i(Xu,"This model inherits from "),Rd=s(Xu,"A",{href:!0});var Ox=r(Rd);Ry=i(Ox,"TFPreTrainedModel"),Ox.forEach(t),Hy=i(Xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xu.forEach(t),Qy=p(Wt),Fi=s(Wt,"P",{});var Yu=r(Fi);Vy=i(Yu,"This model is also a "),xi=s(Yu,"A",{href:!0,rel:!0});var Wx=r(xi);Ky=i(Wx,"tf.keras.Model"),Wx.forEach(t),Jy=i(Yu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yu.forEach(t),Gy=p(Wt),y(js.$$.fragment,Wt),Xy=p(Wt),dt=s(Wt,"DIV",{class:!0});var _o=r(dt);y(Ei.$$.fragment,_o),Yy=p(_o),on=s(_o,"P",{});var kc=r(on);Zy=i(kc,"The "),Hd=s(kc,"A",{href:!0});var Ux=r(Hd);ew=i(Ux,"TFAlbertForQuestionAnswering"),Ux.forEach(t),tw=i(kc," forward method, overrides the "),th=s(kc,"CODE",{});var Bx=r(th);ow=i(Bx,"__call__"),Bx.forEach(t),nw=i(kc," special method."),kc.forEach(t),sw=p(_o),y(Ps.$$.fragment,_o),rw=p(_o),y(Cs.$$.fragment,_o),aw=p(_o),y(Ls.$$.fragment,_o),_o.forEach(t),Wt.forEach(t),Uf=p(o),nn=s(o,"H2",{class:!0});var Zu=r(nn);Is=s(Zu,"A",{id:!0,class:!0,href:!0});var Rx=r(Is);oh=s(Rx,"SPAN",{});var Hx=r(oh);y(Mi.$$.fragment,Hx),Hx.forEach(t),Rx.forEach(t),iw=p(Zu),nh=s(Zu,"SPAN",{});var Qx=r(nh);lw=i(Qx,"FlaxAlbertModel"),Qx.forEach(t),Zu.forEach(t),Bf=p(o),Ce=s(o,"DIV",{class:!0});var pt=r(Ce);y(zi.$$.fragment,pt),dw=p(pt),sh=s(pt,"P",{});var Vx=r(sh);cw=i(Vx,"The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),Vx.forEach(t),pw=p(pt),qi=s(pt,"P",{});var eg=r(qi);hw=i(eg,"This model inherits from "),Qd=s(eg,"A",{href:!0});var Kx=r(Qd);mw=i(Kx,"FlaxPreTrainedModel"),Kx.forEach(t),fw=i(eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),eg.forEach(t),uw=p(pt),ji=s(pt,"P",{});var tg=r(ji);gw=i(tg,"This model is also a Flax Linen "),Pi=s(tg,"A",{href:!0,rel:!0});var Jx=r(Pi);_w=i(Jx,"flax.linen.Module"),Jx.forEach(t),bw=i(tg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tg.forEach(t),kw=p(pt),rh=s(pt,"P",{});var Gx=r(rh);vw=i(Gx,"Finally, this model supports inherent JAX features such as:"),Gx.forEach(t),Tw=p(pt),Rt=s(pt,"UL",{});var hr=r(Rt);ah=s(hr,"LI",{});var Xx=r(ah);Ci=s(Xx,"A",{href:!0,rel:!0});var Yx=r(Ci);yw=i(Yx,"Just-In-Time (JIT) compilation"),Yx.forEach(t),Xx.forEach(t),ww=p(hr),ih=s(hr,"LI",{});var Zx=r(ih);Li=s(Zx,"A",{href:!0,rel:!0});var e4=r(Li);$w=i(e4,"Automatic Differentiation"),e4.forEach(t),Zx.forEach(t),Aw=p(hr),lh=s(hr,"LI",{});var t4=r(lh);Ii=s(t4,"A",{href:!0,rel:!0});var o4=r(Ii);Fw=i(o4,"Vectorization"),o4.forEach(t),t4.forEach(t),xw=p(hr),dh=s(hr,"LI",{});var n4=r(dh);Ni=s(n4,"A",{href:!0,rel:!0});var s4=r(Ni);Ew=i(s4,"Parallelization"),s4.forEach(t),n4.forEach(t),hr.forEach(t),Mw=p(pt),Et=s(pt,"DIV",{class:!0});var mr=r(Et);y(Di.$$.fragment,mr),zw=p(mr),sn=s(mr,"P",{});var vc=r(sn);qw=i(vc,"The "),ch=s(vc,"CODE",{});var r4=r(ch);jw=i(r4,"FlaxAlbertPreTrainedModel"),r4.forEach(t),Pw=i(vc," forward method, overrides the "),ph=s(vc,"CODE",{});var a4=r(ph);Cw=i(a4,"__call__"),a4.forEach(t),Lw=i(vc," special method."),vc.forEach(t),Iw=p(mr),y(Ns.$$.fragment,mr),Nw=p(mr),y(Ds.$$.fragment,mr),mr.forEach(t),pt.forEach(t),Rf=p(o),rn=s(o,"H2",{class:!0});var og=r(rn);Ss=s(og,"A",{id:!0,class:!0,href:!0});var i4=r(Ss);hh=s(i4,"SPAN",{});var l4=r(hh);y(Si.$$.fragment,l4),l4.forEach(t),i4.forEach(t),Dw=p(og),mh=s(og,"SPAN",{});var d4=r(mh);Sw=i(d4,"FlaxAlbertForPreTraining"),d4.forEach(t),og.forEach(t),Hf=p(o),Le=s(o,"DIV",{class:!0});var ht=r(Le);y(Oi.$$.fragment,ht),Ow=p(ht),an=s(ht,"P",{});var Tc=r(an);Ww=i(Tc,"Albert Model with two heads on top as done during the pretraining: a "),fh=s(Tc,"CODE",{});var c4=r(fh);Uw=i(c4,"masked language modeling"),c4.forEach(t),Bw=i(Tc,` head and a
`),uh=s(Tc,"CODE",{});var p4=r(uh);Rw=i(p4,"sentence order prediction (classification)"),p4.forEach(t),Hw=i(Tc," head."),Tc.forEach(t),Qw=p(ht),Wi=s(ht,"P",{});var ng=r(Wi);Vw=i(ng,"This model inherits from "),Vd=s(ng,"A",{href:!0});var h4=r(Vd);Kw=i(h4,"FlaxPreTrainedModel"),h4.forEach(t),Jw=i(ng,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ng.forEach(t),Gw=p(ht),Ui=s(ht,"P",{});var sg=r(Ui);Xw=i(sg,"This model is also a Flax Linen "),Bi=s(sg,"A",{href:!0,rel:!0});var m4=r(Bi);Yw=i(m4,"flax.linen.Module"),m4.forEach(t),Zw=i(sg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sg.forEach(t),e$=p(ht),gh=s(ht,"P",{});var f4=r(gh);t$=i(f4,"Finally, this model supports inherent JAX features such as:"),f4.forEach(t),o$=p(ht),Ht=s(ht,"UL",{});var fr=r(Ht);_h=s(fr,"LI",{});var u4=r(_h);Ri=s(u4,"A",{href:!0,rel:!0});var g4=r(Ri);n$=i(g4,"Just-In-Time (JIT) compilation"),g4.forEach(t),u4.forEach(t),s$=p(fr),bh=s(fr,"LI",{});var _4=r(bh);Hi=s(_4,"A",{href:!0,rel:!0});var b4=r(Hi);r$=i(b4,"Automatic Differentiation"),b4.forEach(t),_4.forEach(t),a$=p(fr),kh=s(fr,"LI",{});var k4=r(kh);Qi=s(k4,"A",{href:!0,rel:!0});var v4=r(Qi);i$=i(v4,"Vectorization"),v4.forEach(t),k4.forEach(t),l$=p(fr),vh=s(fr,"LI",{});var T4=r(vh);Vi=s(T4,"A",{href:!0,rel:!0});var y4=r(Vi);d$=i(y4,"Parallelization"),y4.forEach(t),T4.forEach(t),fr.forEach(t),c$=p(ht),Mt=s(ht,"DIV",{class:!0});var ur=r(Mt);y(Ki.$$.fragment,ur),p$=p(ur),ln=s(ur,"P",{});var yc=r(ln);h$=i(yc,"The "),Th=s(yc,"CODE",{});var w4=r(Th);m$=i(w4,"FlaxAlbertPreTrainedModel"),w4.forEach(t),f$=i(yc," forward method, overrides the "),yh=s(yc,"CODE",{});var $4=r(yh);u$=i($4,"__call__"),$4.forEach(t),g$=i(yc," special method."),yc.forEach(t),_$=p(ur),y(Os.$$.fragment,ur),b$=p(ur),y(Ws.$$.fragment,ur),ur.forEach(t),ht.forEach(t),Qf=p(o),dn=s(o,"H2",{class:!0});var rg=r(dn);Us=s(rg,"A",{id:!0,class:!0,href:!0});var A4=r(Us);wh=s(A4,"SPAN",{});var F4=r(wh);y(Ji.$$.fragment,F4),F4.forEach(t),A4.forEach(t),k$=p(rg),$h=s(rg,"SPAN",{});var x4=r($h);v$=i(x4,"FlaxAlbertForMaskedLM"),x4.forEach(t),rg.forEach(t),Vf=p(o),Ie=s(o,"DIV",{class:!0});var mt=r(Ie);y(Gi.$$.fragment,mt),T$=p(mt),Xi=s(mt,"P",{});var ag=r(Xi);y$=i(ag,"Albert Model with a "),Ah=s(ag,"CODE",{});var E4=r(Ah);w$=i(E4,"language modeling"),E4.forEach(t),$$=i(ag," head on top."),ag.forEach(t),A$=p(mt),Yi=s(mt,"P",{});var ig=r(Yi);F$=i(ig,"This model inherits from "),Kd=s(ig,"A",{href:!0});var M4=r(Kd);x$=i(M4,"FlaxPreTrainedModel"),M4.forEach(t),E$=i(ig,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ig.forEach(t),M$=p(mt),Zi=s(mt,"P",{});var lg=r(Zi);z$=i(lg,"This model is also a Flax Linen "),el=s(lg,"A",{href:!0,rel:!0});var z4=r(el);q$=i(z4,"flax.linen.Module"),z4.forEach(t),j$=i(lg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lg.forEach(t),P$=p(mt),Fh=s(mt,"P",{});var q4=r(Fh);C$=i(q4,"Finally, this model supports inherent JAX features such as:"),q4.forEach(t),L$=p(mt),Qt=s(mt,"UL",{});var gr=r(Qt);xh=s(gr,"LI",{});var j4=r(xh);tl=s(j4,"A",{href:!0,rel:!0});var P4=r(tl);I$=i(P4,"Just-In-Time (JIT) compilation"),P4.forEach(t),j4.forEach(t),N$=p(gr),Eh=s(gr,"LI",{});var C4=r(Eh);ol=s(C4,"A",{href:!0,rel:!0});var L4=r(ol);D$=i(L4,"Automatic Differentiation"),L4.forEach(t),C4.forEach(t),S$=p(gr),Mh=s(gr,"LI",{});var I4=r(Mh);nl=s(I4,"A",{href:!0,rel:!0});var N4=r(nl);O$=i(N4,"Vectorization"),N4.forEach(t),I4.forEach(t),W$=p(gr),zh=s(gr,"LI",{});var D4=r(zh);sl=s(D4,"A",{href:!0,rel:!0});var S4=r(sl);U$=i(S4,"Parallelization"),S4.forEach(t),D4.forEach(t),gr.forEach(t),B$=p(mt),zt=s(mt,"DIV",{class:!0});var _r=r(zt);y(rl.$$.fragment,_r),R$=p(_r),cn=s(_r,"P",{});var wc=r(cn);H$=i(wc,"The "),qh=s(wc,"CODE",{});var O4=r(qh);Q$=i(O4,"FlaxAlbertPreTrainedModel"),O4.forEach(t),V$=i(wc," forward method, overrides the "),jh=s(wc,"CODE",{});var W4=r(jh);K$=i(W4,"__call__"),W4.forEach(t),J$=i(wc," special method."),wc.forEach(t),G$=p(_r),y(Bs.$$.fragment,_r),X$=p(_r),y(Rs.$$.fragment,_r),_r.forEach(t),mt.forEach(t),Kf=p(o),pn=s(o,"H2",{class:!0});var dg=r(pn);Hs=s(dg,"A",{id:!0,class:!0,href:!0});var U4=r(Hs);Ph=s(U4,"SPAN",{});var B4=r(Ph);y(al.$$.fragment,B4),B4.forEach(t),U4.forEach(t),Y$=p(dg),Ch=s(dg,"SPAN",{});var R4=r(Ch);Z$=i(R4,"FlaxAlbertForSequenceClassification"),R4.forEach(t),dg.forEach(t),Jf=p(o),Ne=s(o,"DIV",{class:!0});var ft=r(Ne);y(il.$$.fragment,ft),e2=p(ft),Lh=s(ft,"P",{});var H4=r(Lh);t2=i(H4,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),H4.forEach(t),o2=p(ft),ll=s(ft,"P",{});var cg=r(ll);n2=i(cg,"This model inherits from "),Jd=s(cg,"A",{href:!0});var Q4=r(Jd);s2=i(Q4,"FlaxPreTrainedModel"),Q4.forEach(t),r2=i(cg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cg.forEach(t),a2=p(ft),dl=s(ft,"P",{});var pg=r(dl);i2=i(pg,"This model is also a Flax Linen "),cl=s(pg,"A",{href:!0,rel:!0});var V4=r(cl);l2=i(V4,"flax.linen.Module"),V4.forEach(t),d2=i(pg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pg.forEach(t),c2=p(ft),Ih=s(ft,"P",{});var K4=r(Ih);p2=i(K4,"Finally, this model supports inherent JAX features such as:"),K4.forEach(t),h2=p(ft),Vt=s(ft,"UL",{});var br=r(Vt);Nh=s(br,"LI",{});var J4=r(Nh);pl=s(J4,"A",{href:!0,rel:!0});var G4=r(pl);m2=i(G4,"Just-In-Time (JIT) compilation"),G4.forEach(t),J4.forEach(t),f2=p(br),Dh=s(br,"LI",{});var X4=r(Dh);hl=s(X4,"A",{href:!0,rel:!0});var Y4=r(hl);u2=i(Y4,"Automatic Differentiation"),Y4.forEach(t),X4.forEach(t),g2=p(br),Sh=s(br,"LI",{});var Z4=r(Sh);ml=s(Z4,"A",{href:!0,rel:!0});var eE=r(ml);_2=i(eE,"Vectorization"),eE.forEach(t),Z4.forEach(t),b2=p(br),Oh=s(br,"LI",{});var tE=r(Oh);fl=s(tE,"A",{href:!0,rel:!0});var oE=r(fl);k2=i(oE,"Parallelization"),oE.forEach(t),tE.forEach(t),br.forEach(t),v2=p(ft),qt=s(ft,"DIV",{class:!0});var kr=r(qt);y(ul.$$.fragment,kr),T2=p(kr),hn=s(kr,"P",{});var $c=r(hn);y2=i($c,"The "),Wh=s($c,"CODE",{});var nE=r(Wh);w2=i(nE,"FlaxAlbertPreTrainedModel"),nE.forEach(t),$2=i($c," forward method, overrides the "),Uh=s($c,"CODE",{});var sE=r(Uh);A2=i(sE,"__call__"),sE.forEach(t),F2=i($c," special method."),$c.forEach(t),x2=p(kr),y(Qs.$$.fragment,kr),E2=p(kr),y(Vs.$$.fragment,kr),kr.forEach(t),ft.forEach(t),Gf=p(o),mn=s(o,"H2",{class:!0});var hg=r(mn);Ks=s(hg,"A",{id:!0,class:!0,href:!0});var rE=r(Ks);Bh=s(rE,"SPAN",{});var aE=r(Bh);y(gl.$$.fragment,aE),aE.forEach(t),rE.forEach(t),M2=p(hg),Rh=s(hg,"SPAN",{});var iE=r(Rh);z2=i(iE,"FlaxAlbertForMultipleChoice"),iE.forEach(t),hg.forEach(t),Xf=p(o),De=s(o,"DIV",{class:!0});var ut=r(De);y(_l.$$.fragment,ut),q2=p(ut),Hh=s(ut,"P",{});var lE=r(Hh);j2=i(lE,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),lE.forEach(t),P2=p(ut),bl=s(ut,"P",{});var mg=r(bl);C2=i(mg,"This model inherits from "),Gd=s(mg,"A",{href:!0});var dE=r(Gd);L2=i(dE,"FlaxPreTrainedModel"),dE.forEach(t),I2=i(mg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),mg.forEach(t),N2=p(ut),kl=s(ut,"P",{});var fg=r(kl);D2=i(fg,"This model is also a Flax Linen "),vl=s(fg,"A",{href:!0,rel:!0});var cE=r(vl);S2=i(cE,"flax.linen.Module"),cE.forEach(t),O2=i(fg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fg.forEach(t),W2=p(ut),Qh=s(ut,"P",{});var pE=r(Qh);U2=i(pE,"Finally, this model supports inherent JAX features such as:"),pE.forEach(t),B2=p(ut),Kt=s(ut,"UL",{});var vr=r(Kt);Vh=s(vr,"LI",{});var hE=r(Vh);Tl=s(hE,"A",{href:!0,rel:!0});var mE=r(Tl);R2=i(mE,"Just-In-Time (JIT) compilation"),mE.forEach(t),hE.forEach(t),H2=p(vr),Kh=s(vr,"LI",{});var fE=r(Kh);yl=s(fE,"A",{href:!0,rel:!0});var uE=r(yl);Q2=i(uE,"Automatic Differentiation"),uE.forEach(t),fE.forEach(t),V2=p(vr),Jh=s(vr,"LI",{});var gE=r(Jh);wl=s(gE,"A",{href:!0,rel:!0});var _E=r(wl);K2=i(_E,"Vectorization"),_E.forEach(t),gE.forEach(t),J2=p(vr),Gh=s(vr,"LI",{});var bE=r(Gh);$l=s(bE,"A",{href:!0,rel:!0});var kE=r($l);G2=i(kE,"Parallelization"),kE.forEach(t),bE.forEach(t),vr.forEach(t),X2=p(ut),jt=s(ut,"DIV",{class:!0});var Tr=r(jt);y(Al.$$.fragment,Tr),Y2=p(Tr),fn=s(Tr,"P",{});var Ac=r(fn);Z2=i(Ac,"The "),Xh=s(Ac,"CODE",{});var vE=r(Xh);eA=i(vE,"FlaxAlbertPreTrainedModel"),vE.forEach(t),tA=i(Ac," forward method, overrides the "),Yh=s(Ac,"CODE",{});var TE=r(Yh);oA=i(TE,"__call__"),TE.forEach(t),nA=i(Ac," special method."),Ac.forEach(t),sA=p(Tr),y(Js.$$.fragment,Tr),rA=p(Tr),y(Gs.$$.fragment,Tr),Tr.forEach(t),ut.forEach(t),Yf=p(o),un=s(o,"H2",{class:!0});var ug=r(un);Xs=s(ug,"A",{id:!0,class:!0,href:!0});var yE=r(Xs);Zh=s(yE,"SPAN",{});var wE=r(Zh);y(Fl.$$.fragment,wE),wE.forEach(t),yE.forEach(t),aA=p(ug),em=s(ug,"SPAN",{});var $E=r(em);iA=i($E,"FlaxAlbertForTokenClassification"),$E.forEach(t),ug.forEach(t),Zf=p(o),Se=s(o,"DIV",{class:!0});var gt=r(Se);y(xl.$$.fragment,gt),lA=p(gt),tm=s(gt,"P",{});var AE=r(tm);dA=i(AE,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),AE.forEach(t),cA=p(gt),El=s(gt,"P",{});var gg=r(El);pA=i(gg,"This model inherits from "),Xd=s(gg,"A",{href:!0});var FE=r(Xd);hA=i(FE,"FlaxPreTrainedModel"),FE.forEach(t),mA=i(gg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gg.forEach(t),fA=p(gt),Ml=s(gt,"P",{});var _g=r(Ml);uA=i(_g,"This model is also a Flax Linen "),zl=s(_g,"A",{href:!0,rel:!0});var xE=r(zl);gA=i(xE,"flax.linen.Module"),xE.forEach(t),_A=i(_g,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_g.forEach(t),bA=p(gt),om=s(gt,"P",{});var EE=r(om);kA=i(EE,"Finally, this model supports inherent JAX features such as:"),EE.forEach(t),vA=p(gt),Jt=s(gt,"UL",{});var yr=r(Jt);nm=s(yr,"LI",{});var ME=r(nm);ql=s(ME,"A",{href:!0,rel:!0});var zE=r(ql);TA=i(zE,"Just-In-Time (JIT) compilation"),zE.forEach(t),ME.forEach(t),yA=p(yr),sm=s(yr,"LI",{});var qE=r(sm);jl=s(qE,"A",{href:!0,rel:!0});var jE=r(jl);wA=i(jE,"Automatic Differentiation"),jE.forEach(t),qE.forEach(t),$A=p(yr),rm=s(yr,"LI",{});var PE=r(rm);Pl=s(PE,"A",{href:!0,rel:!0});var CE=r(Pl);AA=i(CE,"Vectorization"),CE.forEach(t),PE.forEach(t),FA=p(yr),am=s(yr,"LI",{});var LE=r(am);Cl=s(LE,"A",{href:!0,rel:!0});var IE=r(Cl);xA=i(IE,"Parallelization"),IE.forEach(t),LE.forEach(t),yr.forEach(t),EA=p(gt),Pt=s(gt,"DIV",{class:!0});var wr=r(Pt);y(Ll.$$.fragment,wr),MA=p(wr),gn=s(wr,"P",{});var Fc=r(gn);zA=i(Fc,"The "),im=s(Fc,"CODE",{});var NE=r(im);qA=i(NE,"FlaxAlbertPreTrainedModel"),NE.forEach(t),jA=i(Fc," forward method, overrides the "),lm=s(Fc,"CODE",{});var DE=r(lm);PA=i(DE,"__call__"),DE.forEach(t),CA=i(Fc," special method."),Fc.forEach(t),LA=p(wr),y(Ys.$$.fragment,wr),IA=p(wr),y(Zs.$$.fragment,wr),wr.forEach(t),gt.forEach(t),eu=p(o),_n=s(o,"H2",{class:!0});var bg=r(_n);er=s(bg,"A",{id:!0,class:!0,href:!0});var SE=r(er);dm=s(SE,"SPAN",{});var OE=r(dm);y(Il.$$.fragment,OE),OE.forEach(t),SE.forEach(t),NA=p(bg),cm=s(bg,"SPAN",{});var WE=r(cm);DA=i(WE,"FlaxAlbertForQuestionAnswering"),WE.forEach(t),bg.forEach(t),tu=p(o),Oe=s(o,"DIV",{class:!0});var _t=r(Oe);y(Nl.$$.fragment,_t),SA=p(_t),bn=s(_t,"P",{});var xc=r(bn);OA=i(xc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),pm=s(xc,"CODE",{});var UE=r(pm);WA=i(UE,"span start logits"),UE.forEach(t),UA=i(xc," and "),hm=s(xc,"CODE",{});var BE=r(hm);BA=i(BE,"span end logits"),BE.forEach(t),RA=i(xc,")."),xc.forEach(t),HA=p(_t),Dl=s(_t,"P",{});var kg=r(Dl);QA=i(kg,"This model inherits from "),Yd=s(kg,"A",{href:!0});var RE=r(Yd);VA=i(RE,"FlaxPreTrainedModel"),RE.forEach(t),KA=i(kg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),kg.forEach(t),JA=p(_t),Sl=s(_t,"P",{});var vg=r(Sl);GA=i(vg,"This model is also a Flax Linen "),Ol=s(vg,"A",{href:!0,rel:!0});var HE=r(Ol);XA=i(HE,"flax.linen.Module"),HE.forEach(t),YA=i(vg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),vg.forEach(t),ZA=p(_t),mm=s(_t,"P",{});var QE=r(mm);e0=i(QE,"Finally, this model supports inherent JAX features such as:"),QE.forEach(t),t0=p(_t),Gt=s(_t,"UL",{});var $r=r(Gt);fm=s($r,"LI",{});var VE=r(fm);Wl=s(VE,"A",{href:!0,rel:!0});var KE=r(Wl);o0=i(KE,"Just-In-Time (JIT) compilation"),KE.forEach(t),VE.forEach(t),n0=p($r),um=s($r,"LI",{});var JE=r(um);Ul=s(JE,"A",{href:!0,rel:!0});var GE=r(Ul);s0=i(GE,"Automatic Differentiation"),GE.forEach(t),JE.forEach(t),r0=p($r),gm=s($r,"LI",{});var XE=r(gm);Bl=s(XE,"A",{href:!0,rel:!0});var YE=r(Bl);a0=i(YE,"Vectorization"),YE.forEach(t),XE.forEach(t),i0=p($r),_m=s($r,"LI",{});var ZE=r(_m);Rl=s(ZE,"A",{href:!0,rel:!0});var e9=r(Rl);l0=i(e9,"Parallelization"),e9.forEach(t),ZE.forEach(t),$r.forEach(t),d0=p(_t),Ct=s(_t,"DIV",{class:!0});var Ar=r(Ct);y(Hl.$$.fragment,Ar),c0=p(Ar),kn=s(Ar,"P",{});var Ec=r(kn);p0=i(Ec,"The "),bm=s(Ec,"CODE",{});var t9=r(bm);h0=i(t9,"FlaxAlbertPreTrainedModel"),t9.forEach(t),m0=i(Ec," forward method, overrides the "),km=s(Ec,"CODE",{});var o9=r(km);f0=i(o9,"__call__"),o9.forEach(t),u0=i(Ec," special method."),Ec.forEach(t),g0=p(Ar),y(tr.$$.fragment,Ar),_0=p(Ar),y(or.$$.fragment,Ar),Ar.forEach(t),_t.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(_M)),u(m,"id","albert"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#albert"),u(h,"class","relative group"),u(Y,"id","overview"),u(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Y,"href","#overview"),u(z,"class","relative group"),u(te,"href","https://arxiv.org/abs/1909.11942"),u(te,"rel","nofollow"),u(ye,"href","https://huggingface.co/lysandre"),u(ye,"rel","nofollow"),u(O,"href","https://huggingface.co/kamalkraj"),u(O,"rel","nofollow"),u(W,"href","https://github.com/google-research/ALBERT"),u(W,"rel","nofollow"),u(wn,"id","transformers.AlbertConfig"),u(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wn,"href","#transformers.AlbertConfig"),u(Te,"class","relative group"),u(rd,"href","/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertModel"),u(ad,"href","/docs/transformers/pr_16994/en/model_doc/albert#transformers.TFAlbertModel"),u(Er,"href","https://huggingface.co/albert-xxlarge-v2"),u(Er,"rel","nofollow"),u(id,"href","/docs/transformers/pr_16994/en/main_classes/configuration#transformers.PretrainedConfig"),u(ld,"href","/docs/transformers/pr_16994/en/main_classes/configuration#transformers.PretrainedConfig"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(An,"id","transformers.AlbertTokenizer"),u(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(An,"href","#transformers.AlbertTokenizer"),u(ko,"class","relative group"),u(jr,"href","https://github.com/google/sentencepiece"),u(jr,"rel","nofollow"),u(dd,"href","/docs/transformers/pr_16994/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(hd,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(En,"id","transformers.AlbertTokenizerFast"),u(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(En,"href","#transformers.AlbertTokenizerFast"),u(To,"class","relative group"),u(Ur,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),u(Ur,"rel","nofollow"),u(md,"href","/docs/transformers/pr_16994/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zn,"id","transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"),u(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zn,"href","#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"),u(yo,"class","relative group"),u(gd,"href","/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertForPreTraining"),u(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_d,"href","/docs/transformers/pr_16994/en/model_doc/albert#transformers.TFAlbertForPreTraining"),u($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qn,"id","transformers.AlbertModel"),u(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qn,"href","#transformers.AlbertModel"),u(Ao,"class","relative group"),u(bd,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel"),u(ta,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ta,"rel","nofollow"),u(kd,"href","/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertModel"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cn,"id","transformers.AlbertForPreTraining"),u(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cn,"href","#transformers.AlbertForPreTraining"),u(xo,"class","relative group"),u(vd,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel"),u(ia,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ia,"rel","nofollow"),u(Td,"href","/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertForPreTraining"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nn,"id","transformers.AlbertForMaskedLM"),u(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Nn,"href","#transformers.AlbertForMaskedLM"),u(zo,"class","relative group"),u(yd,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel"),u(fa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(fa,"rel","nofollow"),u(wd,"href","/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertForMaskedLM"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wn,"id","transformers.AlbertForSequenceClassification"),u(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wn,"href","#transformers.AlbertForSequenceClassification"),u(jo,"class","relative group"),u($d,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel"),u(va,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(va,"rel","nofollow"),u(Ad,"href","/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertForSequenceClassification"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vn,"id","transformers.AlbertForMultipleChoice"),u(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vn,"href","#transformers.AlbertForMultipleChoice"),u(Co,"class","relative group"),u(Fd,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel"),u(Fa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Fa,"rel","nofollow"),u(xd,"href","/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertForMultipleChoice"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"id","transformers.AlbertForTokenClassification"),u(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gn,"href","#transformers.AlbertForTokenClassification"),u(Io,"class","relative group"),u(Ed,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel"),u(ja,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ja,"rel","nofollow"),u(Md,"href","/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertForTokenClassification"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(es,"id","transformers.AlbertForQuestionAnswering"),u(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(es,"href","#transformers.AlbertForQuestionAnswering"),u(Do,"class","relative group"),u(zd,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.PreTrainedModel"),u(Da,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Da,"rel","nofollow"),u(qd,"href","/docs/transformers/pr_16994/en/model_doc/albert#transformers.AlbertForQuestionAnswering"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ss,"id","transformers.TFAlbertModel"),u(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ss,"href","#transformers.TFAlbertModel"),u(Wo,"class","relative group"),u(jd,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ra,"rel","nofollow"),u(Pd,"href","/docs/transformers/pr_16994/en/model_doc/albert#transformers.TFAlbertModel"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ls,"id","transformers.TFAlbertForPreTraining"),u(ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ls,"href","#transformers.TFAlbertForPreTraining"),u(Bo,"class","relative group"),u(Cd,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ga,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ga,"rel","nofollow"),u(Ld,"href","/docs/transformers/pr_16994/en/model_doc/albert#transformers.TFAlbertForPreTraining"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(hs,"id","transformers.TFAlbertForMaskedLM"),u(hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(hs,"href","#transformers.TFAlbertForMaskedLM"),u(Qo,"class","relative group"),u(Id,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.TFPreTrainedModel"),u(ni,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ni,"rel","nofollow"),u(Nd,"href","/docs/transformers/pr_16994/en/model_doc/albert#transformers.TFAlbertForMaskedLM"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_s,"id","transformers.TFAlbertForSequenceClassification"),u(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_s,"href","#transformers.TFAlbertForSequenceClassification"),u(Ko,"class","relative group"),u(Dd,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.TFPreTrainedModel"),u(di,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(di,"rel","nofollow"),u(Sd,"href","/docs/transformers/pr_16994/en/model_doc/albert#transformers.TFAlbertForSequenceClassification"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ys,"id","transformers.TFAlbertForMultipleChoice"),u(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ys,"href","#transformers.TFAlbertForMultipleChoice"),u(Go,"class","relative group"),u(Od,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.TFPreTrainedModel"),u(ui,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ui,"rel","nofollow"),u(Wd,"href","/docs/transformers/pr_16994/en/model_doc/albert#transformers.TFAlbertForMultipleChoice"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fs,"id","transformers.TFAlbertForTokenClassification"),u(Fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fs,"href","#transformers.TFAlbertForTokenClassification"),u(Yo,"class","relative group"),u(Ud,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ti,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ti,"rel","nofollow"),u(Bd,"href","/docs/transformers/pr_16994/en/model_doc/albert#transformers.TFAlbertForTokenClassification"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qs,"id","transformers.TFAlbertForQuestionAnswering"),u(qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qs,"href","#transformers.TFAlbertForQuestionAnswering"),u(en,"class","relative group"),u(Rd,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.TFPreTrainedModel"),u(xi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(xi,"rel","nofollow"),u(Hd,"href","/docs/transformers/pr_16994/en/model_doc/albert#transformers.TFAlbertForQuestionAnswering"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Is,"id","transformers.FlaxAlbertModel"),u(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Is,"href","#transformers.FlaxAlbertModel"),u(nn,"class","relative group"),u(Qd,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Pi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Pi,"rel","nofollow"),u(Ci,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ci,"rel","nofollow"),u(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Li,"rel","nofollow"),u(Ii,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ii,"rel","nofollow"),u(Ni,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ni,"rel","nofollow"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ss,"id","transformers.FlaxAlbertForPreTraining"),u(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ss,"href","#transformers.FlaxAlbertForPreTraining"),u(rn,"class","relative group"),u(Vd,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Bi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Bi,"rel","nofollow"),u(Ri,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ri,"rel","nofollow"),u(Hi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Hi,"rel","nofollow"),u(Qi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Qi,"rel","nofollow"),u(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Vi,"rel","nofollow"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Us,"id","transformers.FlaxAlbertForMaskedLM"),u(Us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Us,"href","#transformers.FlaxAlbertForMaskedLM"),u(dn,"class","relative group"),u(Kd,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(el,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(el,"rel","nofollow"),u(tl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(tl,"rel","nofollow"),u(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ol,"rel","nofollow"),u(nl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(nl,"rel","nofollow"),u(sl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(sl,"rel","nofollow"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.FlaxAlbertForSequenceClassification"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.FlaxAlbertForSequenceClassification"),u(pn,"class","relative group"),u(Jd,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(cl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(cl,"rel","nofollow"),u(pl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(pl,"rel","nofollow"),u(hl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(hl,"rel","nofollow"),u(ml,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ml,"rel","nofollow"),u(fl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(fl,"rel","nofollow"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ks,"id","transformers.FlaxAlbertForMultipleChoice"),u(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ks,"href","#transformers.FlaxAlbertForMultipleChoice"),u(mn,"class","relative group"),u(Gd,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(vl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(vl,"rel","nofollow"),u(Tl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Tl,"rel","nofollow"),u(yl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(yl,"rel","nofollow"),u(wl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(wl,"rel","nofollow"),u($l,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u($l,"rel","nofollow"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xs,"id","transformers.FlaxAlbertForTokenClassification"),u(Xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xs,"href","#transformers.FlaxAlbertForTokenClassification"),u(un,"class","relative group"),u(Xd,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(zl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(zl,"rel","nofollow"),u(ql,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ql,"rel","nofollow"),u(jl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(jl,"rel","nofollow"),u(Pl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Pl,"rel","nofollow"),u(Cl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Cl,"rel","nofollow"),u(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.FlaxAlbertForQuestionAnswering"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.FlaxAlbertForQuestionAnswering"),u(_n,"class","relative group"),u(Yd,"href","/docs/transformers/pr_16994/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ol,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ol,"rel","nofollow"),u(Wl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Wl,"rel","nofollow"),u(Ul,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ul,"rel","nofollow"),u(Bl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Bl,"rel","nofollow"),u(Rl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Rl,"rel","nofollow"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),b(o,g,k),b(o,h,k),e(h,m),e(m,_),w(l,_,null),e(h,f),e(h,E),e(E,fe),b(o,G,k),b(o,z,k),e(z,Y),e(Y,U),w(ee,U,null),e(z,ue),e(z,B),e(B,ge),b(o,de,k),b(o,K,k),e(K,I),e(K,te),e(te,X),e(K,q),b(o,P,k),b(o,Z,k),e(Z,R),e(R,_e),e(Z,be),e(Z,H),e(H,ke),b(o,ce,k),b(o,j,k),e(j,ve),b(o,Q,k),b(o,oe,k),e(oe,ie),e(ie,V),b(o,pe,k),b(o,ne,k),e(ne,N),b(o,he,k),b(o,S,k),e(S,le),e(le,v),e(S,M),e(S,J),e(J,Fe),b(o,Ae,k),b(o,C,k),e(C,xe),e(C,ye),e(ye,Ee),e(C,D),e(C,O),e(O,Me),e(C,ze),e(C,W),e(W,qe),e(C,je),b(o,me,k),b(o,Te,k),e(Te,wn),e(wn,Mc),w(Fr,Mc,null),e(Te,Tg),e(Te,zc),e(zc,yg),b(o,rf,k),b(o,bt,k),w(xr,bt,null),e(bt,wg),e(bt,Ut),e(Ut,$g),e(Ut,rd),e(rd,Ag),e(Ut,Fg),e(Ut,ad),e(ad,xg),e(Ut,Eg),e(Ut,Er),e(Er,Mg),e(Ut,zg),e(bt,qg),e(bt,bo),e(bo,jg),e(bo,id),e(id,Pg),e(bo,Cg),e(bo,ld),e(ld,Lg),e(bo,Ig),e(bt,Ng),w($n,bt,null),b(o,af,k),b(o,ko,k),e(ko,An),e(An,qc),w(Mr,qc,null),e(ko,Dg),e(ko,jc),e(jc,Sg),b(o,lf,k),b(o,Pe,k),w(zr,Pe,null),e(Pe,Og),e(Pe,qr),e(qr,Wg),e(qr,jr),e(jr,Ug),e(qr,Bg),e(Pe,Rg),e(Pe,Pr),e(Pr,Hg),e(Pr,dd),e(dd,Qg),e(Pr,Vg),e(Pe,Kg),e(Pe,to),w(Cr,to,null),e(to,Jg),e(to,Pc),e(Pc,Gg),e(to,Xg),e(to,Lr),e(Lr,cd),e(cd,Yg),e(cd,Cc),e(Cc,Zg),e(Lr,e_),e(Lr,pd),e(pd,t_),e(pd,Lc),e(Lc,o_),e(Pe,n_),e(Pe,Fn),w(Ir,Fn,null),e(Fn,s_),e(Fn,Nr),e(Nr,r_),e(Nr,Ic),e(Ic,a_),e(Nr,i_),e(Pe,l_),e(Pe,vt),w(Dr,vt,null),e(vt,d_),e(vt,Nc),e(Nc,c_),e(vt,p_),w(xn,vt,null),e(vt,h_),e(vt,vo),e(vo,m_),e(vo,Dc),e(Dc,f_),e(vo,u_),e(vo,Sc),e(Sc,g_),e(vo,__),e(Pe,b_),e(Pe,hd),w(Sr,hd,null),b(o,df,k),b(o,To,k),e(To,En),e(En,Oc),w(Or,Oc,null),e(To,k_),e(To,Wc),e(Wc,v_),b(o,cf,k),b(o,kt,k),w(Wr,kt,null),e(kt,T_),e(kt,Bt),e(Bt,y_),e(Bt,Uc),e(Uc,w_),e(Bt,$_),e(Bt,Ur),e(Ur,A_),e(Bt,F_),e(Bt,md),e(md,x_),e(Bt,E_),e(kt,M_),e(kt,oo),w(Br,oo,null),e(oo,z_),e(oo,Bc),e(Bc,q_),e(oo,j_),e(oo,Rr),e(Rr,fd),e(fd,P_),e(fd,Rc),e(Rc,C_),e(Rr,L_),e(Rr,ud),e(ud,I_),e(ud,Hc),e(Hc,N_),e(kt,D_),e(kt,Tt),w(Hr,Tt,null),e(Tt,S_),e(Tt,Qc),e(Qc,O_),e(Tt,W_),w(Mn,Tt,null),e(Tt,U_),e(Tt,Vc),e(Vc,B_),b(o,pf,k),b(o,yo,k),e(yo,zn),e(zn,Kc),w(Qr,Kc,null),e(yo,R_),e(yo,Jc),e(Jc,H_),b(o,hf,k),b(o,wo,k),w(Vr,wo,null),e(wo,Q_),e(wo,Kr),e(Kr,V_),e(Kr,gd),e(gd,K_),e(Kr,J_),b(o,mf,k),b(o,$o,k),w(Jr,$o,null),e($o,G_),e($o,Gr),e(Gr,X_),e(Gr,_d),e(_d,Y_),e(Gr,Z_),b(o,ff,k),b(o,Ao,k),e(Ao,qn),e(qn,Gc),w(Xr,Gc,null),e(Ao,eb),e(Ao,Xc),e(Xc,tb),b(o,uf,k),b(o,Ge,k),w(Yr,Ge,null),e(Ge,ob),e(Ge,Yc),e(Yc,nb),e(Ge,sb),e(Ge,Zr),e(Zr,rb),e(Zr,bd),e(bd,ab),e(Zr,ib),e(Ge,lb),e(Ge,ea),e(ea,db),e(ea,ta),e(ta,cb),e(ea,pb),e(Ge,hb),e(Ge,yt),w(oa,yt,null),e(yt,mb),e(yt,Fo),e(Fo,fb),e(Fo,kd),e(kd,ub),e(Fo,gb),e(Fo,Zc),e(Zc,_b),e(Fo,bb),e(yt,kb),w(jn,yt,null),e(yt,vb),w(Pn,yt,null),b(o,gf,k),b(o,xo,k),e(xo,Cn),e(Cn,ep),w(na,ep,null),e(xo,Tb),e(xo,tp),e(tp,yb),b(o,_f,k),b(o,Xe,k),w(sa,Xe,null),e(Xe,wb),e(Xe,Eo),e(Eo,$b),e(Eo,op),e(op,Ab),e(Eo,Fb),e(Eo,np),e(np,xb),e(Eo,Eb),e(Xe,Mb),e(Xe,ra),e(ra,zb),e(ra,vd),e(vd,qb),e(ra,jb),e(Xe,Pb),e(Xe,aa),e(aa,Cb),e(aa,ia),e(ia,Lb),e(aa,Ib),e(Xe,Nb),e(Xe,wt),w(la,wt,null),e(wt,Db),e(wt,Mo),e(Mo,Sb),e(Mo,Td),e(Td,Ob),e(Mo,Wb),e(Mo,sp),e(sp,Ub),e(Mo,Bb),e(wt,Rb),w(Ln,wt,null),e(wt,Hb),w(In,wt,null),b(o,bf,k),b(o,zo,k),e(zo,Nn),e(Nn,rp),w(da,rp,null),e(zo,Qb),e(zo,ap),e(ap,Vb),b(o,kf,k),b(o,Ye,k),w(ca,Ye,null),e(Ye,Kb),e(Ye,pa),e(pa,Jb),e(pa,ip),e(ip,Gb),e(pa,Xb),e(Ye,Yb),e(Ye,ha),e(ha,Zb),e(ha,yd),e(yd,ek),e(ha,tk),e(Ye,ok),e(Ye,ma),e(ma,nk),e(ma,fa),e(fa,sk),e(ma,rk),e(Ye,ak),e(Ye,nt),w(ua,nt,null),e(nt,ik),e(nt,qo),e(qo,lk),e(qo,wd),e(wd,dk),e(qo,ck),e(qo,lp),e(lp,pk),e(qo,hk),e(nt,mk),w(Dn,nt,null),e(nt,fk),w(Sn,nt,null),e(nt,uk),w(On,nt,null),b(o,vf,k),b(o,jo,k),e(jo,Wn),e(Wn,dp),w(ga,dp,null),e(jo,gk),e(jo,cp),e(cp,_k),b(o,Tf,k),b(o,Ze,k),w(_a,Ze,null),e(Ze,bk),e(Ze,pp),e(pp,kk),e(Ze,vk),e(Ze,ba),e(ba,Tk),e(ba,$d),e($d,yk),e(ba,wk),e(Ze,$k),e(Ze,ka),e(ka,Ak),e(ka,va),e(va,Fk),e(ka,xk),e(Ze,Ek),e(Ze,We),w(Ta,We,null),e(We,Mk),e(We,Po),e(Po,zk),e(Po,Ad),e(Ad,qk),e(Po,jk),e(Po,hp),e(hp,Pk),e(Po,Ck),e(We,Lk),w(Un,We,null),e(We,Ik),w(Bn,We,null),e(We,Nk),w(Rn,We,null),e(We,Dk),w(Hn,We,null),e(We,Sk),w(Qn,We,null),b(o,yf,k),b(o,Co,k),e(Co,Vn),e(Vn,mp),w(ya,mp,null),e(Co,Ok),e(Co,fp),e(fp,Wk),b(o,wf,k),b(o,et,k),w(wa,et,null),e(et,Uk),e(et,up),e(up,Bk),e(et,Rk),e(et,$a),e($a,Hk),e($a,Fd),e(Fd,Qk),e($a,Vk),e(et,Kk),e(et,Aa),e(Aa,Jk),e(Aa,Fa),e(Fa,Gk),e(Aa,Xk),e(et,Yk),e(et,$t),w(xa,$t,null),e($t,Zk),e($t,Lo),e(Lo,ev),e(Lo,xd),e(xd,tv),e(Lo,ov),e(Lo,gp),e(gp,nv),e(Lo,sv),e($t,rv),w(Kn,$t,null),e($t,av),w(Jn,$t,null),b(o,$f,k),b(o,Io,k),e(Io,Gn),e(Gn,_p),w(Ea,_p,null),e(Io,iv),e(Io,bp),e(bp,lv),b(o,Af,k),b(o,tt,k),w(Ma,tt,null),e(tt,dv),e(tt,kp),e(kp,cv),e(tt,pv),e(tt,za),e(za,hv),e(za,Ed),e(Ed,mv),e(za,fv),e(tt,uv),e(tt,qa),e(qa,gv),e(qa,ja),e(ja,_v),e(qa,bv),e(tt,kv),e(tt,st),w(Pa,st,null),e(st,vv),e(st,No),e(No,Tv),e(No,Md),e(Md,yv),e(No,wv),e(No,vp),e(vp,$v),e(No,Av),e(st,Fv),w(Xn,st,null),e(st,xv),w(Yn,st,null),e(st,Ev),w(Zn,st,null),b(o,Ff,k),b(o,Do,k),e(Do,es),e(es,Tp),w(Ca,Tp,null),e(Do,Mv),e(Do,yp),e(yp,zv),b(o,xf,k),b(o,ot,k),w(La,ot,null),e(ot,qv),e(ot,So),e(So,jv),e(So,wp),e(wp,Pv),e(So,Cv),e(So,$p),e($p,Lv),e(So,Iv),e(ot,Nv),e(ot,Ia),e(Ia,Dv),e(Ia,zd),e(zd,Sv),e(Ia,Ov),e(ot,Wv),e(ot,Na),e(Na,Uv),e(Na,Da),e(Da,Bv),e(Na,Rv),e(ot,Hv),e(ot,rt),w(Sa,rt,null),e(rt,Qv),e(rt,Oo),e(Oo,Vv),e(Oo,qd),e(qd,Kv),e(Oo,Jv),e(Oo,Ap),e(Ap,Gv),e(Oo,Xv),e(rt,Yv),w(ts,rt,null),e(rt,Zv),w(os,rt,null),e(rt,eT),w(ns,rt,null),b(o,Ef,k),b(o,Wo,k),e(Wo,ss),e(ss,Fp),w(Oa,Fp,null),e(Wo,tT),e(Wo,xp),e(xp,oT),b(o,Mf,k),b(o,Ue,k),w(Wa,Ue,null),e(Ue,nT),e(Ue,Ep),e(Ep,sT),e(Ue,rT),e(Ue,Ua),e(Ua,aT),e(Ua,jd),e(jd,iT),e(Ua,lT),e(Ue,dT),e(Ue,Ba),e(Ba,cT),e(Ba,Ra),e(Ra,pT),e(Ba,hT),e(Ue,mT),w(rs,Ue,null),e(Ue,fT),e(Ue,At),w(Ha,At,null),e(At,uT),e(At,Uo),e(Uo,gT),e(Uo,Pd),e(Pd,_T),e(Uo,bT),e(Uo,Mp),e(Mp,kT),e(Uo,vT),e(At,TT),w(as,At,null),e(At,yT),w(is,At,null),b(o,zf,k),b(o,Bo,k),e(Bo,ls),e(ls,zp),w(Qa,zp,null),e(Bo,wT),e(Bo,qp),e(qp,$T),b(o,qf,k),b(o,Be,k),w(Va,Be,null),e(Be,AT),e(Be,Ro),e(Ro,FT),e(Ro,jp),e(jp,xT),e(Ro,ET),e(Ro,Pp),e(Pp,MT),e(Ro,zT),e(Be,qT),e(Be,Ka),e(Ka,jT),e(Ka,Cd),e(Cd,PT),e(Ka,CT),e(Be,LT),e(Be,Ja),e(Ja,IT),e(Ja,Ga),e(Ga,NT),e(Ja,DT),e(Be,ST),w(ds,Be,null),e(Be,OT),e(Be,Ft),w(Xa,Ft,null),e(Ft,WT),e(Ft,Ho),e(Ho,UT),e(Ho,Ld),e(Ld,BT),e(Ho,RT),e(Ho,Cp),e(Cp,HT),e(Ho,QT),e(Ft,VT),w(cs,Ft,null),e(Ft,KT),w(ps,Ft,null),b(o,jf,k),b(o,Qo,k),e(Qo,hs),e(hs,Lp),w(Ya,Lp,null),e(Qo,JT),e(Qo,Ip),e(Ip,GT),b(o,Pf,k),b(o,Re,k),w(Za,Re,null),e(Re,XT),e(Re,ei),e(ei,YT),e(ei,Np),e(Np,ZT),e(ei,e1),e(Re,t1),e(Re,ti),e(ti,o1),e(ti,Id),e(Id,n1),e(ti,s1),e(Re,r1),e(Re,oi),e(oi,a1),e(oi,ni),e(ni,i1),e(oi,l1),e(Re,d1),w(ms,Re,null),e(Re,c1),e(Re,at),w(si,at,null),e(at,p1),e(at,Vo),e(Vo,h1),e(Vo,Nd),e(Nd,m1),e(Vo,f1),e(Vo,Dp),e(Dp,u1),e(Vo,g1),e(at,_1),w(fs,at,null),e(at,b1),w(us,at,null),e(at,k1),w(gs,at,null),b(o,Cf,k),b(o,Ko,k),e(Ko,_s),e(_s,Sp),w(ri,Sp,null),e(Ko,v1),e(Ko,Op),e(Op,T1),b(o,Lf,k),b(o,He,k),w(ai,He,null),e(He,y1),e(He,Wp),e(Wp,w1),e(He,$1),e(He,ii),e(ii,A1),e(ii,Dd),e(Dd,F1),e(ii,x1),e(He,E1),e(He,li),e(li,M1),e(li,di),e(di,z1),e(li,q1),e(He,j1),w(bs,He,null),e(He,P1),e(He,it),w(ci,it,null),e(it,C1),e(it,Jo),e(Jo,L1),e(Jo,Sd),e(Sd,I1),e(Jo,N1),e(Jo,Up),e(Up,D1),e(Jo,S1),e(it,O1),w(ks,it,null),e(it,W1),w(vs,it,null),e(it,U1),w(Ts,it,null),b(o,If,k),b(o,Go,k),e(Go,ys),e(ys,Bp),w(pi,Bp,null),e(Go,B1),e(Go,Rp),e(Rp,R1),b(o,Nf,k),b(o,Qe,k),w(hi,Qe,null),e(Qe,H1),e(Qe,Hp),e(Hp,Q1),e(Qe,V1),e(Qe,mi),e(mi,K1),e(mi,Od),e(Od,J1),e(mi,G1),e(Qe,X1),e(Qe,fi),e(fi,Y1),e(fi,ui),e(ui,Z1),e(fi,ey),e(Qe,ty),w(ws,Qe,null),e(Qe,oy),e(Qe,xt),w(gi,xt,null),e(xt,ny),e(xt,Xo),e(Xo,sy),e(Xo,Wd),e(Wd,ry),e(Xo,ay),e(Xo,Qp),e(Qp,iy),e(Xo,ly),e(xt,dy),w($s,xt,null),e(xt,cy),w(As,xt,null),b(o,Df,k),b(o,Yo,k),e(Yo,Fs),e(Fs,Vp),w(_i,Vp,null),e(Yo,py),e(Yo,Kp),e(Kp,hy),b(o,Sf,k),b(o,Ve,k),w(bi,Ve,null),e(Ve,my),e(Ve,Jp),e(Jp,fy),e(Ve,uy),e(Ve,ki),e(ki,gy),e(ki,Ud),e(Ud,_y),e(ki,by),e(Ve,ky),e(Ve,vi),e(vi,vy),e(vi,Ti),e(Ti,Ty),e(vi,yy),e(Ve,wy),w(xs,Ve,null),e(Ve,$y),e(Ve,lt),w(yi,lt,null),e(lt,Ay),e(lt,Zo),e(Zo,Fy),e(Zo,Bd),e(Bd,xy),e(Zo,Ey),e(Zo,Gp),e(Gp,My),e(Zo,zy),e(lt,qy),w(Es,lt,null),e(lt,jy),w(Ms,lt,null),e(lt,Py),w(zs,lt,null),b(o,Of,k),b(o,en,k),e(en,qs),e(qs,Xp),w(wi,Xp,null),e(en,Cy),e(en,Yp),e(Yp,Ly),b(o,Wf,k),b(o,Ke,k),w($i,Ke,null),e(Ke,Iy),e(Ke,tn),e(tn,Ny),e(tn,Zp),e(Zp,Dy),e(tn,Sy),e(tn,eh),e(eh,Oy),e(tn,Wy),e(Ke,Uy),e(Ke,Ai),e(Ai,By),e(Ai,Rd),e(Rd,Ry),e(Ai,Hy),e(Ke,Qy),e(Ke,Fi),e(Fi,Vy),e(Fi,xi),e(xi,Ky),e(Fi,Jy),e(Ke,Gy),w(js,Ke,null),e(Ke,Xy),e(Ke,dt),w(Ei,dt,null),e(dt,Yy),e(dt,on),e(on,Zy),e(on,Hd),e(Hd,ew),e(on,tw),e(on,th),e(th,ow),e(on,nw),e(dt,sw),w(Ps,dt,null),e(dt,rw),w(Cs,dt,null),e(dt,aw),w(Ls,dt,null),b(o,Uf,k),b(o,nn,k),e(nn,Is),e(Is,oh),w(Mi,oh,null),e(nn,iw),e(nn,nh),e(nh,lw),b(o,Bf,k),b(o,Ce,k),w(zi,Ce,null),e(Ce,dw),e(Ce,sh),e(sh,cw),e(Ce,pw),e(Ce,qi),e(qi,hw),e(qi,Qd),e(Qd,mw),e(qi,fw),e(Ce,uw),e(Ce,ji),e(ji,gw),e(ji,Pi),e(Pi,_w),e(ji,bw),e(Ce,kw),e(Ce,rh),e(rh,vw),e(Ce,Tw),e(Ce,Rt),e(Rt,ah),e(ah,Ci),e(Ci,yw),e(Rt,ww),e(Rt,ih),e(ih,Li),e(Li,$w),e(Rt,Aw),e(Rt,lh),e(lh,Ii),e(Ii,Fw),e(Rt,xw),e(Rt,dh),e(dh,Ni),e(Ni,Ew),e(Ce,Mw),e(Ce,Et),w(Di,Et,null),e(Et,zw),e(Et,sn),e(sn,qw),e(sn,ch),e(ch,jw),e(sn,Pw),e(sn,ph),e(ph,Cw),e(sn,Lw),e(Et,Iw),w(Ns,Et,null),e(Et,Nw),w(Ds,Et,null),b(o,Rf,k),b(o,rn,k),e(rn,Ss),e(Ss,hh),w(Si,hh,null),e(rn,Dw),e(rn,mh),e(mh,Sw),b(o,Hf,k),b(o,Le,k),w(Oi,Le,null),e(Le,Ow),e(Le,an),e(an,Ww),e(an,fh),e(fh,Uw),e(an,Bw),e(an,uh),e(uh,Rw),e(an,Hw),e(Le,Qw),e(Le,Wi),e(Wi,Vw),e(Wi,Vd),e(Vd,Kw),e(Wi,Jw),e(Le,Gw),e(Le,Ui),e(Ui,Xw),e(Ui,Bi),e(Bi,Yw),e(Ui,Zw),e(Le,e$),e(Le,gh),e(gh,t$),e(Le,o$),e(Le,Ht),e(Ht,_h),e(_h,Ri),e(Ri,n$),e(Ht,s$),e(Ht,bh),e(bh,Hi),e(Hi,r$),e(Ht,a$),e(Ht,kh),e(kh,Qi),e(Qi,i$),e(Ht,l$),e(Ht,vh),e(vh,Vi),e(Vi,d$),e(Le,c$),e(Le,Mt),w(Ki,Mt,null),e(Mt,p$),e(Mt,ln),e(ln,h$),e(ln,Th),e(Th,m$),e(ln,f$),e(ln,yh),e(yh,u$),e(ln,g$),e(Mt,_$),w(Os,Mt,null),e(Mt,b$),w(Ws,Mt,null),b(o,Qf,k),b(o,dn,k),e(dn,Us),e(Us,wh),w(Ji,wh,null),e(dn,k$),e(dn,$h),e($h,v$),b(o,Vf,k),b(o,Ie,k),w(Gi,Ie,null),e(Ie,T$),e(Ie,Xi),e(Xi,y$),e(Xi,Ah),e(Ah,w$),e(Xi,$$),e(Ie,A$),e(Ie,Yi),e(Yi,F$),e(Yi,Kd),e(Kd,x$),e(Yi,E$),e(Ie,M$),e(Ie,Zi),e(Zi,z$),e(Zi,el),e(el,q$),e(Zi,j$),e(Ie,P$),e(Ie,Fh),e(Fh,C$),e(Ie,L$),e(Ie,Qt),e(Qt,xh),e(xh,tl),e(tl,I$),e(Qt,N$),e(Qt,Eh),e(Eh,ol),e(ol,D$),e(Qt,S$),e(Qt,Mh),e(Mh,nl),e(nl,O$),e(Qt,W$),e(Qt,zh),e(zh,sl),e(sl,U$),e(Ie,B$),e(Ie,zt),w(rl,zt,null),e(zt,R$),e(zt,cn),e(cn,H$),e(cn,qh),e(qh,Q$),e(cn,V$),e(cn,jh),e(jh,K$),e(cn,J$),e(zt,G$),w(Bs,zt,null),e(zt,X$),w(Rs,zt,null),b(o,Kf,k),b(o,pn,k),e(pn,Hs),e(Hs,Ph),w(al,Ph,null),e(pn,Y$),e(pn,Ch),e(Ch,Z$),b(o,Jf,k),b(o,Ne,k),w(il,Ne,null),e(Ne,e2),e(Ne,Lh),e(Lh,t2),e(Ne,o2),e(Ne,ll),e(ll,n2),e(ll,Jd),e(Jd,s2),e(ll,r2),e(Ne,a2),e(Ne,dl),e(dl,i2),e(dl,cl),e(cl,l2),e(dl,d2),e(Ne,c2),e(Ne,Ih),e(Ih,p2),e(Ne,h2),e(Ne,Vt),e(Vt,Nh),e(Nh,pl),e(pl,m2),e(Vt,f2),e(Vt,Dh),e(Dh,hl),e(hl,u2),e(Vt,g2),e(Vt,Sh),e(Sh,ml),e(ml,_2),e(Vt,b2),e(Vt,Oh),e(Oh,fl),e(fl,k2),e(Ne,v2),e(Ne,qt),w(ul,qt,null),e(qt,T2),e(qt,hn),e(hn,y2),e(hn,Wh),e(Wh,w2),e(hn,$2),e(hn,Uh),e(Uh,A2),e(hn,F2),e(qt,x2),w(Qs,qt,null),e(qt,E2),w(Vs,qt,null),b(o,Gf,k),b(o,mn,k),e(mn,Ks),e(Ks,Bh),w(gl,Bh,null),e(mn,M2),e(mn,Rh),e(Rh,z2),b(o,Xf,k),b(o,De,k),w(_l,De,null),e(De,q2),e(De,Hh),e(Hh,j2),e(De,P2),e(De,bl),e(bl,C2),e(bl,Gd),e(Gd,L2),e(bl,I2),e(De,N2),e(De,kl),e(kl,D2),e(kl,vl),e(vl,S2),e(kl,O2),e(De,W2),e(De,Qh),e(Qh,U2),e(De,B2),e(De,Kt),e(Kt,Vh),e(Vh,Tl),e(Tl,R2),e(Kt,H2),e(Kt,Kh),e(Kh,yl),e(yl,Q2),e(Kt,V2),e(Kt,Jh),e(Jh,wl),e(wl,K2),e(Kt,J2),e(Kt,Gh),e(Gh,$l),e($l,G2),e(De,X2),e(De,jt),w(Al,jt,null),e(jt,Y2),e(jt,fn),e(fn,Z2),e(fn,Xh),e(Xh,eA),e(fn,tA),e(fn,Yh),e(Yh,oA),e(fn,nA),e(jt,sA),w(Js,jt,null),e(jt,rA),w(Gs,jt,null),b(o,Yf,k),b(o,un,k),e(un,Xs),e(Xs,Zh),w(Fl,Zh,null),e(un,aA),e(un,em),e(em,iA),b(o,Zf,k),b(o,Se,k),w(xl,Se,null),e(Se,lA),e(Se,tm),e(tm,dA),e(Se,cA),e(Se,El),e(El,pA),e(El,Xd),e(Xd,hA),e(El,mA),e(Se,fA),e(Se,Ml),e(Ml,uA),e(Ml,zl),e(zl,gA),e(Ml,_A),e(Se,bA),e(Se,om),e(om,kA),e(Se,vA),e(Se,Jt),e(Jt,nm),e(nm,ql),e(ql,TA),e(Jt,yA),e(Jt,sm),e(sm,jl),e(jl,wA),e(Jt,$A),e(Jt,rm),e(rm,Pl),e(Pl,AA),e(Jt,FA),e(Jt,am),e(am,Cl),e(Cl,xA),e(Se,EA),e(Se,Pt),w(Ll,Pt,null),e(Pt,MA),e(Pt,gn),e(gn,zA),e(gn,im),e(im,qA),e(gn,jA),e(gn,lm),e(lm,PA),e(gn,CA),e(Pt,LA),w(Ys,Pt,null),e(Pt,IA),w(Zs,Pt,null),b(o,eu,k),b(o,_n,k),e(_n,er),e(er,dm),w(Il,dm,null),e(_n,NA),e(_n,cm),e(cm,DA),b(o,tu,k),b(o,Oe,k),w(Nl,Oe,null),e(Oe,SA),e(Oe,bn),e(bn,OA),e(bn,pm),e(pm,WA),e(bn,UA),e(bn,hm),e(hm,BA),e(bn,RA),e(Oe,HA),e(Oe,Dl),e(Dl,QA),e(Dl,Yd),e(Yd,VA),e(Dl,KA),e(Oe,JA),e(Oe,Sl),e(Sl,GA),e(Sl,Ol),e(Ol,XA),e(Sl,YA),e(Oe,ZA),e(Oe,mm),e(mm,e0),e(Oe,t0),e(Oe,Gt),e(Gt,fm),e(fm,Wl),e(Wl,o0),e(Gt,n0),e(Gt,um),e(um,Ul),e(Ul,s0),e(Gt,r0),e(Gt,gm),e(gm,Bl),e(Bl,a0),e(Gt,i0),e(Gt,_m),e(_m,Rl),e(Rl,l0),e(Oe,d0),e(Oe,Ct),w(Hl,Ct,null),e(Ct,c0),e(Ct,kn),e(kn,p0),e(kn,bm),e(bm,h0),e(kn,m0),e(kn,km),e(km,f0),e(kn,u0),e(Ct,g0),w(tr,Ct,null),e(Ct,_0),w(or,Ct,null),ou=!0},p(o,[k]){const Ql={};k&2&&(Ql.$$scope={dirty:k,ctx:o}),$n.$set(Ql);const vm={};k&2&&(vm.$$scope={dirty:k,ctx:o}),xn.$set(vm);const Tm={};k&2&&(Tm.$$scope={dirty:k,ctx:o}),Mn.$set(Tm);const ym={};k&2&&(ym.$$scope={dirty:k,ctx:o}),jn.$set(ym);const Vl={};k&2&&(Vl.$$scope={dirty:k,ctx:o}),Pn.$set(Vl);const wm={};k&2&&(wm.$$scope={dirty:k,ctx:o}),Ln.$set(wm);const $m={};k&2&&($m.$$scope={dirty:k,ctx:o}),In.$set($m);const Am={};k&2&&(Am.$$scope={dirty:k,ctx:o}),Dn.$set(Am);const Kl={};k&2&&(Kl.$$scope={dirty:k,ctx:o}),Sn.$set(Kl);const Fm={};k&2&&(Fm.$$scope={dirty:k,ctx:o}),On.$set(Fm);const Jl={};k&2&&(Jl.$$scope={dirty:k,ctx:o}),Un.$set(Jl);const xm={};k&2&&(xm.$$scope={dirty:k,ctx:o}),Bn.$set(xm);const Em={};k&2&&(Em.$$scope={dirty:k,ctx:o}),Rn.$set(Em);const Mm={};k&2&&(Mm.$$scope={dirty:k,ctx:o}),Hn.$set(Mm);const zm={};k&2&&(zm.$$scope={dirty:k,ctx:o}),Qn.$set(zm);const qm={};k&2&&(qm.$$scope={dirty:k,ctx:o}),Kn.$set(qm);const jm={};k&2&&(jm.$$scope={dirty:k,ctx:o}),Jn.$set(jm);const Gl={};k&2&&(Gl.$$scope={dirty:k,ctx:o}),Xn.$set(Gl);const Pm={};k&2&&(Pm.$$scope={dirty:k,ctx:o}),Yn.$set(Pm);const Cm={};k&2&&(Cm.$$scope={dirty:k,ctx:o}),Zn.$set(Cm);const Xt={};k&2&&(Xt.$$scope={dirty:k,ctx:o}),ts.$set(Xt);const Lm={};k&2&&(Lm.$$scope={dirty:k,ctx:o}),os.$set(Lm);const Im={};k&2&&(Im.$$scope={dirty:k,ctx:o}),ns.$set(Im);const Nm={};k&2&&(Nm.$$scope={dirty:k,ctx:o}),rs.$set(Nm);const Xl={};k&2&&(Xl.$$scope={dirty:k,ctx:o}),as.$set(Xl);const Dm={};k&2&&(Dm.$$scope={dirty:k,ctx:o}),is.$set(Dm);const Sm={};k&2&&(Sm.$$scope={dirty:k,ctx:o}),ds.$set(Sm);const Om={};k&2&&(Om.$$scope={dirty:k,ctx:o}),cs.$set(Om);const Yt={};k&2&&(Yt.$$scope={dirty:k,ctx:o}),ps.$set(Yt);const Zt={};k&2&&(Zt.$$scope={dirty:k,ctx:o}),ms.$set(Zt);const Wm={};k&2&&(Wm.$$scope={dirty:k,ctx:o}),fs.$set(Wm);const Um={};k&2&&(Um.$$scope={dirty:k,ctx:o}),us.$set(Um);const Bm={};k&2&&(Bm.$$scope={dirty:k,ctx:o}),gs.$set(Bm);const vn={};k&2&&(vn.$$scope={dirty:k,ctx:o}),bs.$set(vn);const Rm={};k&2&&(Rm.$$scope={dirty:k,ctx:o}),ks.$set(Rm);const Hm={};k&2&&(Hm.$$scope={dirty:k,ctx:o}),vs.$set(Hm);const Yl={};k&2&&(Yl.$$scope={dirty:k,ctx:o}),Ts.$set(Yl);const Qm={};k&2&&(Qm.$$scope={dirty:k,ctx:o}),ws.$set(Qm);const Vm={};k&2&&(Vm.$$scope={dirty:k,ctx:o}),$s.$set(Vm);const Km={};k&2&&(Km.$$scope={dirty:k,ctx:o}),As.$set(Km);const Je={};k&2&&(Je.$$scope={dirty:k,ctx:o}),xs.$set(Je);const Zl={};k&2&&(Zl.$$scope={dirty:k,ctx:o}),Es.$set(Zl);const Jm={};k&2&&(Jm.$$scope={dirty:k,ctx:o}),Ms.$set(Jm);const ed={};k&2&&(ed.$$scope={dirty:k,ctx:o}),zs.$set(ed);const Gm={};k&2&&(Gm.$$scope={dirty:k,ctx:o}),js.$set(Gm);const Tn={};k&2&&(Tn.$$scope={dirty:k,ctx:o}),Ps.$set(Tn);const Xm={};k&2&&(Xm.$$scope={dirty:k,ctx:o}),Cs.$set(Xm);const td={};k&2&&(td.$$scope={dirty:k,ctx:o}),Ls.$set(td);const Zd={};k&2&&(Zd.$$scope={dirty:k,ctx:o}),Ns.$set(Zd);const Ym={};k&2&&(Ym.$$scope={dirty:k,ctx:o}),Ds.$set(Ym);const ec={};k&2&&(ec.$$scope={dirty:k,ctx:o}),Os.$set(ec);const Zm={};k&2&&(Zm.$$scope={dirty:k,ctx:o}),Ws.$set(Zm);const od={};k&2&&(od.$$scope={dirty:k,ctx:o}),Bs.$set(od);const nd={};k&2&&(nd.$$scope={dirty:k,ctx:o}),Rs.$set(nd);const ef={};k&2&&(ef.$$scope={dirty:k,ctx:o}),Qs.$set(ef);const eo={};k&2&&(eo.$$scope={dirty:k,ctx:o}),Vs.$set(eo);const tf={};k&2&&(tf.$$scope={dirty:k,ctx:o}),Js.$set(tf);const yn={};k&2&&(yn.$$scope={dirty:k,ctx:o}),Gs.$set(yn);const of={};k&2&&(of.$$scope={dirty:k,ctx:o}),Ys.$set(of);const nf={};k&2&&(nf.$$scope={dirty:k,ctx:o}),Zs.$set(nf);const sf={};k&2&&(sf.$$scope={dirty:k,ctx:o}),tr.$set(sf);const sd={};k&2&&(sd.$$scope={dirty:k,ctx:o}),or.$set(sd)},i(o){ou||($(l.$$.fragment,o),$(ee.$$.fragment,o),$(Fr.$$.fragment,o),$(xr.$$.fragment,o),$($n.$$.fragment,o),$(Mr.$$.fragment,o),$(zr.$$.fragment,o),$(Cr.$$.fragment,o),$(Ir.$$.fragment,o),$(Dr.$$.fragment,o),$(xn.$$.fragment,o),$(Sr.$$.fragment,o),$(Or.$$.fragment,o),$(Wr.$$.fragment,o),$(Br.$$.fragment,o),$(Hr.$$.fragment,o),$(Mn.$$.fragment,o),$(Qr.$$.fragment,o),$(Vr.$$.fragment,o),$(Jr.$$.fragment,o),$(Xr.$$.fragment,o),$(Yr.$$.fragment,o),$(oa.$$.fragment,o),$(jn.$$.fragment,o),$(Pn.$$.fragment,o),$(na.$$.fragment,o),$(sa.$$.fragment,o),$(la.$$.fragment,o),$(Ln.$$.fragment,o),$(In.$$.fragment,o),$(da.$$.fragment,o),$(ca.$$.fragment,o),$(ua.$$.fragment,o),$(Dn.$$.fragment,o),$(Sn.$$.fragment,o),$(On.$$.fragment,o),$(ga.$$.fragment,o),$(_a.$$.fragment,o),$(Ta.$$.fragment,o),$(Un.$$.fragment,o),$(Bn.$$.fragment,o),$(Rn.$$.fragment,o),$(Hn.$$.fragment,o),$(Qn.$$.fragment,o),$(ya.$$.fragment,o),$(wa.$$.fragment,o),$(xa.$$.fragment,o),$(Kn.$$.fragment,o),$(Jn.$$.fragment,o),$(Ea.$$.fragment,o),$(Ma.$$.fragment,o),$(Pa.$$.fragment,o),$(Xn.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(Ca.$$.fragment,o),$(La.$$.fragment,o),$(Sa.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(Oa.$$.fragment,o),$(Wa.$$.fragment,o),$(rs.$$.fragment,o),$(Ha.$$.fragment,o),$(as.$$.fragment,o),$(is.$$.fragment,o),$(Qa.$$.fragment,o),$(Va.$$.fragment,o),$(ds.$$.fragment,o),$(Xa.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(Ya.$$.fragment,o),$(Za.$$.fragment,o),$(ms.$$.fragment,o),$(si.$$.fragment,o),$(fs.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(ri.$$.fragment,o),$(ai.$$.fragment,o),$(bs.$$.fragment,o),$(ci.$$.fragment,o),$(ks.$$.fragment,o),$(vs.$$.fragment,o),$(Ts.$$.fragment,o),$(pi.$$.fragment,o),$(hi.$$.fragment,o),$(ws.$$.fragment,o),$(gi.$$.fragment,o),$($s.$$.fragment,o),$(As.$$.fragment,o),$(_i.$$.fragment,o),$(bi.$$.fragment,o),$(xs.$$.fragment,o),$(yi.$$.fragment,o),$(Es.$$.fragment,o),$(Ms.$$.fragment,o),$(zs.$$.fragment,o),$(wi.$$.fragment,o),$($i.$$.fragment,o),$(js.$$.fragment,o),$(Ei.$$.fragment,o),$(Ps.$$.fragment,o),$(Cs.$$.fragment,o),$(Ls.$$.fragment,o),$(Mi.$$.fragment,o),$(zi.$$.fragment,o),$(Di.$$.fragment,o),$(Ns.$$.fragment,o),$(Ds.$$.fragment,o),$(Si.$$.fragment,o),$(Oi.$$.fragment,o),$(Ki.$$.fragment,o),$(Os.$$.fragment,o),$(Ws.$$.fragment,o),$(Ji.$$.fragment,o),$(Gi.$$.fragment,o),$(rl.$$.fragment,o),$(Bs.$$.fragment,o),$(Rs.$$.fragment,o),$(al.$$.fragment,o),$(il.$$.fragment,o),$(ul.$$.fragment,o),$(Qs.$$.fragment,o),$(Vs.$$.fragment,o),$(gl.$$.fragment,o),$(_l.$$.fragment,o),$(Al.$$.fragment,o),$(Js.$$.fragment,o),$(Gs.$$.fragment,o),$(Fl.$$.fragment,o),$(xl.$$.fragment,o),$(Ll.$$.fragment,o),$(Ys.$$.fragment,o),$(Zs.$$.fragment,o),$(Il.$$.fragment,o),$(Nl.$$.fragment,o),$(Hl.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),ou=!0)},o(o){A(l.$$.fragment,o),A(ee.$$.fragment,o),A(Fr.$$.fragment,o),A(xr.$$.fragment,o),A($n.$$.fragment,o),A(Mr.$$.fragment,o),A(zr.$$.fragment,o),A(Cr.$$.fragment,o),A(Ir.$$.fragment,o),A(Dr.$$.fragment,o),A(xn.$$.fragment,o),A(Sr.$$.fragment,o),A(Or.$$.fragment,o),A(Wr.$$.fragment,o),A(Br.$$.fragment,o),A(Hr.$$.fragment,o),A(Mn.$$.fragment,o),A(Qr.$$.fragment,o),A(Vr.$$.fragment,o),A(Jr.$$.fragment,o),A(Xr.$$.fragment,o),A(Yr.$$.fragment,o),A(oa.$$.fragment,o),A(jn.$$.fragment,o),A(Pn.$$.fragment,o),A(na.$$.fragment,o),A(sa.$$.fragment,o),A(la.$$.fragment,o),A(Ln.$$.fragment,o),A(In.$$.fragment,o),A(da.$$.fragment,o),A(ca.$$.fragment,o),A(ua.$$.fragment,o),A(Dn.$$.fragment,o),A(Sn.$$.fragment,o),A(On.$$.fragment,o),A(ga.$$.fragment,o),A(_a.$$.fragment,o),A(Ta.$$.fragment,o),A(Un.$$.fragment,o),A(Bn.$$.fragment,o),A(Rn.$$.fragment,o),A(Hn.$$.fragment,o),A(Qn.$$.fragment,o),A(ya.$$.fragment,o),A(wa.$$.fragment,o),A(xa.$$.fragment,o),A(Kn.$$.fragment,o),A(Jn.$$.fragment,o),A(Ea.$$.fragment,o),A(Ma.$$.fragment,o),A(Pa.$$.fragment,o),A(Xn.$$.fragment,o),A(Yn.$$.fragment,o),A(Zn.$$.fragment,o),A(Ca.$$.fragment,o),A(La.$$.fragment,o),A(Sa.$$.fragment,o),A(ts.$$.fragment,o),A(os.$$.fragment,o),A(ns.$$.fragment,o),A(Oa.$$.fragment,o),A(Wa.$$.fragment,o),A(rs.$$.fragment,o),A(Ha.$$.fragment,o),A(as.$$.fragment,o),A(is.$$.fragment,o),A(Qa.$$.fragment,o),A(Va.$$.fragment,o),A(ds.$$.fragment,o),A(Xa.$$.fragment,o),A(cs.$$.fragment,o),A(ps.$$.fragment,o),A(Ya.$$.fragment,o),A(Za.$$.fragment,o),A(ms.$$.fragment,o),A(si.$$.fragment,o),A(fs.$$.fragment,o),A(us.$$.fragment,o),A(gs.$$.fragment,o),A(ri.$$.fragment,o),A(ai.$$.fragment,o),A(bs.$$.fragment,o),A(ci.$$.fragment,o),A(ks.$$.fragment,o),A(vs.$$.fragment,o),A(Ts.$$.fragment,o),A(pi.$$.fragment,o),A(hi.$$.fragment,o),A(ws.$$.fragment,o),A(gi.$$.fragment,o),A($s.$$.fragment,o),A(As.$$.fragment,o),A(_i.$$.fragment,o),A(bi.$$.fragment,o),A(xs.$$.fragment,o),A(yi.$$.fragment,o),A(Es.$$.fragment,o),A(Ms.$$.fragment,o),A(zs.$$.fragment,o),A(wi.$$.fragment,o),A($i.$$.fragment,o),A(js.$$.fragment,o),A(Ei.$$.fragment,o),A(Ps.$$.fragment,o),A(Cs.$$.fragment,o),A(Ls.$$.fragment,o),A(Mi.$$.fragment,o),A(zi.$$.fragment,o),A(Di.$$.fragment,o),A(Ns.$$.fragment,o),A(Ds.$$.fragment,o),A(Si.$$.fragment,o),A(Oi.$$.fragment,o),A(Ki.$$.fragment,o),A(Os.$$.fragment,o),A(Ws.$$.fragment,o),A(Ji.$$.fragment,o),A(Gi.$$.fragment,o),A(rl.$$.fragment,o),A(Bs.$$.fragment,o),A(Rs.$$.fragment,o),A(al.$$.fragment,o),A(il.$$.fragment,o),A(ul.$$.fragment,o),A(Qs.$$.fragment,o),A(Vs.$$.fragment,o),A(gl.$$.fragment,o),A(_l.$$.fragment,o),A(Al.$$.fragment,o),A(Js.$$.fragment,o),A(Gs.$$.fragment,o),A(Fl.$$.fragment,o),A(xl.$$.fragment,o),A(Ll.$$.fragment,o),A(Ys.$$.fragment,o),A(Zs.$$.fragment,o),A(Il.$$.fragment,o),A(Nl.$$.fragment,o),A(Hl.$$.fragment,o),A(tr.$$.fragment,o),A(or.$$.fragment,o),ou=!1},d(o){t(d),o&&t(g),o&&t(h),F(l),o&&t(G),o&&t(z),F(ee),o&&t(de),o&&t(K),o&&t(P),o&&t(Z),o&&t(ce),o&&t(j),o&&t(Q),o&&t(oe),o&&t(pe),o&&t(ne),o&&t(he),o&&t(S),o&&t(Ae),o&&t(C),o&&t(me),o&&t(Te),F(Fr),o&&t(rf),o&&t(bt),F(xr),F($n),o&&t(af),o&&t(ko),F(Mr),o&&t(lf),o&&t(Pe),F(zr),F(Cr),F(Ir),F(Dr),F(xn),F(Sr),o&&t(df),o&&t(To),F(Or),o&&t(cf),o&&t(kt),F(Wr),F(Br),F(Hr),F(Mn),o&&t(pf),o&&t(yo),F(Qr),o&&t(hf),o&&t(wo),F(Vr),o&&t(mf),o&&t($o),F(Jr),o&&t(ff),o&&t(Ao),F(Xr),o&&t(uf),o&&t(Ge),F(Yr),F(oa),F(jn),F(Pn),o&&t(gf),o&&t(xo),F(na),o&&t(_f),o&&t(Xe),F(sa),F(la),F(Ln),F(In),o&&t(bf),o&&t(zo),F(da),o&&t(kf),o&&t(Ye),F(ca),F(ua),F(Dn),F(Sn),F(On),o&&t(vf),o&&t(jo),F(ga),o&&t(Tf),o&&t(Ze),F(_a),F(Ta),F(Un),F(Bn),F(Rn),F(Hn),F(Qn),o&&t(yf),o&&t(Co),F(ya),o&&t(wf),o&&t(et),F(wa),F(xa),F(Kn),F(Jn),o&&t($f),o&&t(Io),F(Ea),o&&t(Af),o&&t(tt),F(Ma),F(Pa),F(Xn),F(Yn),F(Zn),o&&t(Ff),o&&t(Do),F(Ca),o&&t(xf),o&&t(ot),F(La),F(Sa),F(ts),F(os),F(ns),o&&t(Ef),o&&t(Wo),F(Oa),o&&t(Mf),o&&t(Ue),F(Wa),F(rs),F(Ha),F(as),F(is),o&&t(zf),o&&t(Bo),F(Qa),o&&t(qf),o&&t(Be),F(Va),F(ds),F(Xa),F(cs),F(ps),o&&t(jf),o&&t(Qo),F(Ya),o&&t(Pf),o&&t(Re),F(Za),F(ms),F(si),F(fs),F(us),F(gs),o&&t(Cf),o&&t(Ko),F(ri),o&&t(Lf),o&&t(He),F(ai),F(bs),F(ci),F(ks),F(vs),F(Ts),o&&t(If),o&&t(Go),F(pi),o&&t(Nf),o&&t(Qe),F(hi),F(ws),F(gi),F($s),F(As),o&&t(Df),o&&t(Yo),F(_i),o&&t(Sf),o&&t(Ve),F(bi),F(xs),F(yi),F(Es),F(Ms),F(zs),o&&t(Of),o&&t(en),F(wi),o&&t(Wf),o&&t(Ke),F($i),F(js),F(Ei),F(Ps),F(Cs),F(Ls),o&&t(Uf),o&&t(nn),F(Mi),o&&t(Bf),o&&t(Ce),F(zi),F(Di),F(Ns),F(Ds),o&&t(Rf),o&&t(rn),F(Si),o&&t(Hf),o&&t(Le),F(Oi),F(Ki),F(Os),F(Ws),o&&t(Qf),o&&t(dn),F(Ji),o&&t(Vf),o&&t(Ie),F(Gi),F(rl),F(Bs),F(Rs),o&&t(Kf),o&&t(pn),F(al),o&&t(Jf),o&&t(Ne),F(il),F(ul),F(Qs),F(Vs),o&&t(Gf),o&&t(mn),F(gl),o&&t(Xf),o&&t(De),F(_l),F(Al),F(Js),F(Gs),o&&t(Yf),o&&t(un),F(Fl),o&&t(Zf),o&&t(Se),F(xl),F(Ll),F(Ys),F(Zs),o&&t(eu),o&&t(_n),F(Il),o&&t(tu),o&&t(Oe),F(Nl),F(Hl),F(tr),F(or)}}}const _M={local:"albert",sections:[{local:"overview",title:"Overview"},{local:"transformers.AlbertConfig",title:"AlbertConfig"},{local:"transformers.AlbertTokenizer",title:"AlbertTokenizer"},{local:"transformers.AlbertTokenizerFast",title:"AlbertTokenizerFast"},{local:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",title:"Albert specific outputs"},{local:"transformers.AlbertModel",title:"AlbertModel"},{local:"transformers.AlbertForPreTraining",title:"AlbertForPreTraining"},{local:"transformers.AlbertForMaskedLM",title:"AlbertForMaskedLM"},{local:"transformers.AlbertForSequenceClassification",title:"AlbertForSequenceClassification"},{local:"transformers.AlbertForMultipleChoice",title:"AlbertForMultipleChoice"},{local:"transformers.AlbertForTokenClassification",title:"AlbertForTokenClassification"},{local:"transformers.AlbertForQuestionAnswering",title:"AlbertForQuestionAnswering"},{local:"transformers.TFAlbertModel",title:"TFAlbertModel"},{local:"transformers.TFAlbertForPreTraining",title:"TFAlbertForPreTraining"},{local:"transformers.TFAlbertForMaskedLM",title:"TFAlbertForMaskedLM"},{local:"transformers.TFAlbertForSequenceClassification",title:"TFAlbertForSequenceClassification"},{local:"transformers.TFAlbertForMultipleChoice",title:"TFAlbertForMultipleChoice"},{local:"transformers.TFAlbertForTokenClassification",title:"TFAlbertForTokenClassification"},{local:"transformers.TFAlbertForQuestionAnswering",title:"TFAlbertForQuestionAnswering"},{local:"transformers.FlaxAlbertModel",title:"FlaxAlbertModel"},{local:"transformers.FlaxAlbertForPreTraining",title:"FlaxAlbertForPreTraining"},{local:"transformers.FlaxAlbertForMaskedLM",title:"FlaxAlbertForMaskedLM"},{local:"transformers.FlaxAlbertForSequenceClassification",title:"FlaxAlbertForSequenceClassification"},{local:"transformers.FlaxAlbertForMultipleChoice",title:"FlaxAlbertForMultipleChoice"},{local:"transformers.FlaxAlbertForTokenClassification",title:"FlaxAlbertForTokenClassification"},{local:"transformers.FlaxAlbertForQuestionAnswering",title:"FlaxAlbertForQuestionAnswering"}],title:"ALBERT"};function bM(x){return i9(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class AM extends n9{constructor(d){super();s9(this,d,bM,gM,r9,{})}}export{AM as default,_M as metadata};
