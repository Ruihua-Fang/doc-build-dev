import{S as X3,i as Y3,s as Z3,e as r,k as c,w as T,t as n,M as e5,c as a,d as t,m as p,a as i,x as v,h as s,b as u,F as e,g as b,y as w,q as $,o as x,B as F,v as t5,L as re}from"../../chunks/vendor-6b77c823.js";import{T as $e}from"../../chunks/Tip-39098574.js";import{D as C}from"../../chunks/Docstring-1088f2fb.js";import{C as ae}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Fe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as se}from"../../chunks/ExampleCodeBlock-5212b321.js";function o5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertModel, BertConfig

# Initializing a BERT bert-base-uncased style configuration
configuration = BertConfig()

# Initializing a model from the bert-base-uncased style configuration
model = BertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertModel, BertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BERT bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),_=n("Examples:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function n5(B){let d,_,h,m,g;return m=new ae({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"pair mask has the following format:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function s5(B){let d,_,h,m,g;return m=new ae({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"pair mask has the following format:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function r5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function a5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertModel
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function i5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function l5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertForPreTraining
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForPreTraining.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForPreTraining.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function d5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function c5(B){let d,_,h,m,g;return m=new ae({props:{code:`import torch
from transformers import BertTokenizer, BertLMHeadModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertLMHeadModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertLMHeadModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function p5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function h5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertForMaskedLM
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function m5(B){let d,_;return d=new ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function f5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function u5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertForNextSentencePrediction
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForNextSentencePrediction.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="pt")

outputs = model(**encoding, labels=torch.LongTensor([1]))
logits = outputs.logits
assert logits[0, 0] < logits[0, 1]  # next sentence was random`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForNextSentencePrediction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=torch.LongTensor([<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function g5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function _5(B){let d,_,h,m,g;return m=new ae({props:{code:`import torch
from transformers import BertTokenizer, BertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("textattack/bert-base-uncased-yelp-polarity")
model = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of single-label classification:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of single-label classification:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function b5(B){let d,_;return d=new ae({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function k5(B){let d,_,h,m,g;return m=new ae({props:{code:`import torch
from transformers import BertTokenizer, BertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("textattack/bert-base-uncased-yelp-polarity")
model = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of multi-label classification:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of multi-label classification:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function y5(B){let d,_;return d=new ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BertForSequenceClassification.from_pretrained(
    "textattack/bert-base-uncased-yelp-polarity", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function T5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function v5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertForMultipleChoice
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForMultipleChoice.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function w5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function $5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertForTokenClassification
import torch

tokenizer = BertTokenizer.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")
model = BertForTokenClassification.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;dbmdz/bert-large-cased-finetuned-conll03-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;dbmdz/bert-large-cased-finetuned-conll03-english&quot;</span>)

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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function x5(B){let d,_;return d=new ae({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function F5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function B5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertForQuestionAnswering
import torch

tokenizer = BertTokenizer.from_pretrained("deepset/bert-base-cased-squad2")
model = BertForQuestionAnswering.from_pretrained("deepset/bert-base-cased-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;deepset/bert-base-cased-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;deepset/bert-base-cased-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function M5(B){let d,_;return d=new ae({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">7.41</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function E5(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);Te=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function z5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function P5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertModel
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function q5(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);Te=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function j5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function C5(B){let d,_,h,m,g;return m=new ae({props:{code:`import tensorflow as tf
from transformers import BertTokenizer, TFBertForPreTraining

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertForPreTraining.from_pretrained("bert-base-uncased")
input_ids = tokenizer("Hello, my dog is cute", add_special_tokens=True, return_tensors="tf")
# Batch size 1

outputs = model(input_ids)
prediction_logits, seq_relationship_logits = outputs[:2]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits, seq_relationship_logits = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=r("p"),_=n("Examples:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function N5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertLMHeadModel
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertLMHeadModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertLMHeadModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function O5(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);Te=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function A5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function I5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertForMaskedLM
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function L5(B){let d,_;return d=new ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function D5(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);Te=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function S5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function U5(B){let d,_,h,m,g;return m=new ae({props:{code:`import tensorflow as tf
from transformers import BertTokenizer, TFBertForNextSentencePrediction

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertForNextSentencePrediction.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="tf")

logits = model(encoding["input_ids"], token_type_ids=encoding["token_type_ids"])[0]
assert logits[0][0] < logits[0][1]  # the next sentence was random`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForNextSentencePrediction

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(encoding[<span class="hljs-string">&quot;input_ids&quot;</span>], token_type_ids=encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>])[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]  <span class="hljs-comment"># the next sentence was random</span>`}}),{c(){d=r("p"),_=n("Examples:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function W5(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);Te=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function H5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function R5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertForSequenceClassification
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity")
model = TFBertForSequenceClassification.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function V5(B){let d,_;return d=new ae({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFBertForSequenceClassification.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function Q5(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);Te=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function K5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function J5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertForMultipleChoice
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertForMultipleChoice.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function G5(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);Te=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function X5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function Y5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertForTokenClassification
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")
model = TFBertForTokenClassification.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;dbmdz/bert-large-cased-finetuned-conll03-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;dbmdz/bert-large-cased-finetuned-conll03-english&quot;</span>)

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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Z5(B){let d,_;return d=new ae({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function eN(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);Te=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function tN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function oN(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertForQuestionAnswering
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("ydshieh/bert-base-cased-squad2")
model = TFBertForQuestionAnswering.from_pretrained("ydshieh/bert-base-cased-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-cased-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-cased-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function nN(B){let d,_;return d=new ae({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([14])
target_end_index = tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">7.41</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function sN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function rN(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function aN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function iN(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForPreTraining

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForPreTraining.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function lN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function dN(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForMaskedLM

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function cN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function pN(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForNextSentencePrediction

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForNextSentencePrediction.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="jax")

outputs = model(**encoding)
logits = outputs.logits
assert logits[0, 0] < logits[0, 1]  # next sentence was random`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForNextSentencePrediction

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function hN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function mN(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForSequenceClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function fN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function uN(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForMultipleChoice

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForMultipleChoice.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function gN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function _N(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForTokenClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForTokenClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function bN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function kN(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForQuestionAnswering

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForQuestionAnswering.from_pretrained("bert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function yN(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe,y,E,K,ze,Be,A,Pe,Me,qe,I,W,we,xe,U,Ee,je,he,Ce,b_,qt,$a,mk,io,fk,Rc,uk,gk,Vc,_k,bk,xa,kk,yk,Tk,Lo,vk,Qc,wk,$k,Kc,xk,Fk,Bk,ns,k_,Do,ss,Eh,Fa,Mk,zh,Ek,y_,Ne,Ba,zk,Ph,Pk,qk,Ma,jk,Jc,Ck,Nk,Ok,To,Ea,Ak,qh,Ik,Lk,za,Gc,Dk,jh,Sk,Uk,Xc,Wk,Ch,Hk,Rk,rs,Pa,Vk,qa,Qk,Nh,Kk,Jk,Gk,Ct,ja,Xk,Oh,Yk,Zk,as,ey,So,ty,Ah,oy,ny,Ih,sy,ry,ay,Yc,Ca,T_,Uo,is,Lh,Na,iy,Dh,ly,v_,st,Oa,dy,Aa,cy,Sh,py,hy,my,Ia,fy,Zc,uy,gy,_y,vo,La,by,Uh,ky,yy,Da,ep,Ty,Wh,vy,wy,tp,$y,Hh,xy,Fy,Nt,Sa,By,Rh,My,Ey,ls,zy,Wo,Py,Vh,qy,jy,Qh,Cy,Ny,w_,Ho,ds,Kh,Ua,Oy,Jh,Ay,$_,Ro,Wa,Iy,Ha,Ly,op,Dy,Sy,x_,Vo,Ra,Uy,Va,Wy,np,Hy,Ry,F_,lo,Qa,Vy,Ka,Qy,sp,Ky,Jy,Gy,cs,Ja,Xy,Gh,Yy,B_,Qo,ps,Xh,Ga,Zy,Yh,eT,M_,Oe,Xa,tT,Zh,oT,nT,Ya,sT,rp,rT,aT,iT,Za,lT,ei,dT,cT,pT,ti,hT,oi,mT,fT,uT,Qe,gT,em,_T,bT,tm,kT,yT,om,TT,vT,nm,wT,$T,sm,xT,FT,rm,BT,MT,ET,Ot,ni,zT,Ko,PT,ap,qT,jT,am,CT,NT,OT,hs,AT,ms,E_,Jo,fs,im,si,IT,lm,LT,z_,rt,ri,DT,Go,ST,dm,UT,WT,cm,HT,RT,VT,ai,QT,ip,KT,JT,GT,ii,XT,li,YT,ZT,ev,At,di,tv,Xo,ov,lp,nv,sv,pm,rv,av,iv,us,lv,gs,P_,Yo,_s,hm,ci,dv,mm,cv,q_,at,pi,pv,hi,hv,fm,mv,fv,uv,mi,gv,dp,_v,bv,kv,fi,yv,ui,Tv,vv,wv,It,gi,$v,Zo,xv,cp,Fv,Bv,um,Mv,Ev,zv,bs,Pv,ks,j_,en,ys,gm,_i,qv,_m,jv,C_,it,bi,Cv,ki,Nv,bm,Ov,Av,Iv,yi,Lv,pp,Dv,Sv,Uv,Ti,Wv,vi,Hv,Rv,Vv,mt,wi,Qv,tn,Kv,hp,Jv,Gv,km,Xv,Yv,Zv,Ts,ew,vs,tw,ws,N_,on,$s,ym,$i,ow,Tm,nw,O_,lt,xi,sw,Fi,rw,vm,aw,iw,lw,Bi,dw,mp,cw,pw,hw,Mi,mw,Ei,fw,uw,gw,Lt,zi,_w,nn,bw,fp,kw,yw,wm,Tw,vw,ww,xs,$w,Fs,A_,sn,Bs,$m,Pi,xw,xm,Fw,I_,dt,qi,Bw,Fm,Mw,Ew,ji,zw,up,Pw,qw,jw,Ci,Cw,Ni,Nw,Ow,Aw,Ve,Oi,Iw,rn,Lw,gp,Dw,Sw,Bm,Uw,Ww,Hw,Ms,Rw,Es,Vw,zs,Qw,Ps,Kw,qs,L_,an,js,Mm,Ai,Jw,Em,Gw,D_,ct,Ii,Xw,zm,Yw,Zw,Li,e2,_p,t2,o2,n2,Di,s2,Si,r2,a2,i2,Dt,Ui,l2,ln,d2,bp,c2,p2,Pm,h2,m2,f2,Cs,u2,Ns,S_,dn,Os,qm,Wi,g2,jm,_2,U_,pt,Hi,b2,Cm,k2,y2,Ri,T2,kp,v2,w2,$2,Vi,x2,Qi,F2,B2,M2,ft,Ki,E2,cn,z2,yp,P2,q2,Nm,j2,C2,N2,As,O2,Is,A2,Ls,W_,pn,Ds,Om,Ji,I2,Am,L2,H_,ht,Gi,D2,hn,S2,Im,U2,W2,Lm,H2,R2,V2,Xi,Q2,Tp,K2,J2,G2,Yi,X2,Zi,Y2,Z2,e$,ut,el,t$,mn,o$,vp,n$,s$,Dm,r$,a$,i$,Ss,l$,Us,d$,Ws,R_,fn,Hs,Sm,tl,c$,Um,p$,V_,Ke,ol,h$,Wm,m$,f$,nl,u$,wp,g$,_$,b$,sl,k$,rl,y$,T$,v$,Rs,w$,St,al,$$,un,x$,$p,F$,B$,Hm,M$,E$,z$,Vs,P$,Qs,Q_,gn,Ks,Rm,il,q$,Vm,j$,K_,Je,ll,C$,_n,N$,Qm,O$,A$,Km,I$,L$,D$,dl,S$,xp,U$,W$,H$,cl,R$,pl,V$,Q$,K$,Js,J$,Ut,hl,G$,bn,X$,Fp,Y$,Z$,Jm,ex,tx,ox,Gs,nx,Xs,J_,kn,Ys,Gm,ml,sx,Xm,rx,G_,yn,fl,ax,gt,ul,ix,Ae,lx,Ym,dx,cx,Zm,px,hx,ef,mx,fx,tf,ux,gx,of,_x,bx,nf,kx,yx,sf,Tx,vx,wx,gl,_l,$x,rf,xx,Fx,Bx,bl,Mx,af,Ex,zx,Px,G,qx,lf,jx,Cx,df,Nx,Ox,cf,Ax,Ix,pf,Lx,Dx,hf,Sx,Ux,mf,Wx,Hx,ff,Rx,Vx,uf,Qx,Kx,gf,Jx,Gx,_f,Xx,Yx,bf,Zx,eF,kf,tF,oF,yf,nF,sF,Tf,rF,aF,vf,iF,lF,wf,dF,cF,$f,pF,hF,xf,mF,fF,Ff,uF,gF,Bf,_F,bF,kF,Zs,X_,Tn,er,Mf,kl,yF,Ef,TF,Y_,Ge,yl,vF,Tl,wF,zf,$F,xF,FF,vl,BF,Bp,MF,EF,zF,wl,PF,$l,qF,jF,CF,tr,NF,_t,xl,OF,vn,AF,Mp,IF,LF,Pf,DF,SF,UF,or,WF,nr,HF,sr,Z_,wn,rr,qf,Fl,RF,jf,VF,eb,Xe,Bl,QF,Ml,KF,Cf,JF,GF,XF,El,YF,Ep,ZF,e0,t0,zl,o0,Pl,n0,s0,r0,ar,a0,Wt,ql,i0,$n,l0,zp,d0,c0,Nf,p0,h0,m0,ir,f0,lr,tb,xn,dr,Of,jl,u0,Af,g0,ob,Ye,Cl,_0,If,b0,k0,Nl,y0,Pp,T0,v0,w0,Ol,$0,Al,x0,F0,B0,cr,M0,bt,Il,E0,Fn,z0,qp,P0,q0,Lf,j0,C0,N0,pr,O0,hr,A0,mr,nb,Bn,fr,Df,Ll,I0,Sf,L0,sb,Ze,Dl,D0,Uf,S0,U0,Sl,W0,jp,H0,R0,V0,Ul,Q0,Wl,K0,J0,G0,ur,X0,Ht,Hl,Y0,Mn,Z0,Cp,eB,tB,Wf,oB,nB,sB,gr,rB,_r,rb,En,br,Hf,Rl,aB,Rf,iB,ab,et,Vl,lB,Vf,dB,cB,Ql,pB,Np,hB,mB,fB,Kl,uB,Jl,gB,_B,bB,kr,kB,kt,Gl,yB,zn,TB,Op,vB,wB,Qf,$B,xB,FB,yr,BB,Tr,MB,vr,ib,Pn,wr,Kf,Xl,EB,Jf,zB,lb,tt,Yl,PB,qn,qB,Gf,jB,CB,Xf,NB,OB,AB,Zl,IB,Ap,LB,DB,SB,ed,UB,td,WB,HB,RB,$r,VB,yt,od,QB,jn,KB,Ip,JB,GB,Yf,XB,YB,ZB,xr,eM,Fr,tM,Br,db,Cn,Mr,Zf,nd,oM,eu,nM,cb,Ie,sd,sM,tu,rM,aM,rd,iM,Lp,lM,dM,cM,ad,pM,id,hM,mM,fM,ou,uM,gM,co,nu,ld,_M,bM,su,dd,kM,yM,ru,cd,TM,vM,au,pd,wM,$M,Rt,hd,xM,Nn,FM,iu,BM,MM,lu,EM,zM,PM,Er,qM,zr,pb,On,Pr,du,md,jM,cu,CM,hb,Le,fd,NM,An,OM,pu,AM,IM,hu,LM,DM,SM,ud,UM,Dp,WM,HM,RM,gd,VM,_d,QM,KM,JM,mu,GM,XM,po,fu,bd,YM,ZM,uu,kd,eE,tE,gu,yd,oE,nE,_u,Td,sE,rE,Vt,vd,aE,In,iE,bu,lE,dE,ku,cE,pE,hE,qr,mE,jr,mb,Ln,Cr,yu,wd,fE,Tu,uE,fb,De,$d,gE,xd,_E,vu,bE,kE,yE,Fd,TE,Sp,vE,wE,$E,Bd,xE,Md,FE,BE,ME,wu,EE,zE,ho,$u,Ed,PE,qE,xu,zd,jE,CE,Fu,Pd,NE,OE,Bu,qd,AE,IE,Qt,jd,LE,Dn,DE,Mu,SE,UE,Eu,WE,HE,RE,Nr,VE,Or,ub,Sn,Ar,zu,Cd,QE,Pu,KE,gb,Se,Nd,JE,Od,GE,qu,XE,YE,ZE,Ad,e6,Up,t6,o6,n6,Id,s6,Ld,r6,a6,i6,ju,l6,d6,mo,Cu,Dd,c6,p6,Nu,Sd,h6,m6,Ou,Ud,f6,u6,Au,Wd,g6,_6,Kt,Hd,b6,Un,k6,Iu,y6,T6,Lu,v6,w6,$6,Ir,x6,Lr,_b,Wn,Dr,Du,Rd,F6,Su,B6,bb,Ue,Vd,M6,Uu,E6,z6,Qd,P6,Wp,q6,j6,C6,Kd,N6,Jd,O6,A6,I6,Wu,L6,D6,fo,Hu,Gd,S6,U6,Ru,Xd,W6,H6,Vu,Yd,R6,V6,Qu,Zd,Q6,K6,Jt,ec,J6,Hn,G6,Ku,X6,Y6,Ju,Z6,ez,tz,Sr,oz,Ur,kb,Rn,Wr,Gu,tc,nz,Xu,sz,yb,We,oc,rz,Yu,az,iz,nc,lz,Hp,dz,cz,pz,sc,hz,rc,mz,fz,uz,Zu,gz,_z,uo,eg,ac,bz,kz,tg,ic,yz,Tz,og,lc,vz,wz,ng,dc,$z,xz,Gt,cc,Fz,Vn,Bz,sg,Mz,Ez,rg,zz,Pz,qz,Hr,jz,Rr,Tb,Qn,Vr,ag,pc,Cz,ig,Nz,vb,He,hc,Oz,lg,Az,Iz,mc,Lz,Rp,Dz,Sz,Uz,fc,Wz,uc,Hz,Rz,Vz,dg,Qz,Kz,go,cg,gc,Jz,Gz,pg,_c,Xz,Yz,hg,bc,Zz,e4,mg,kc,t4,o4,Xt,yc,n4,Kn,s4,fg,r4,a4,ug,i4,l4,d4,Qr,c4,Kr,wb,Jn,Jr,gg,Tc,p4,_g,h4,$b,Re,vc,m4,Gn,f4,bg,u4,g4,kg,_4,b4,k4,wc,y4,Vp,T4,v4,w4,$c,$4,xc,x4,F4,B4,yg,M4,E4,_o,Tg,Fc,z4,P4,vg,Bc,q4,j4,wg,Mc,C4,N4,$g,Ec,O4,A4,Yt,zc,I4,Xn,L4,xg,D4,S4,Fg,U4,W4,H4,Gr,R4,Xr,xb;return l=new Fe({}),oe=new Fe({}),Ee=new Fe({}),$a=new C({props:{name:"class transformers.BertConfig",anchor:"transformers.BertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.BertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.BertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.BertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.BertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.BertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.BertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.BertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.BertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/configuration_bert.py#L54"}}),ns=new se({props:{anchor:"transformers.BertConfig.example",$$slots:{default:[o5]},$$scope:{ctx:B}}}),Fa=new Fe({}),Ba=new C({props:{name:"class transformers.BertTokenizer",anchor:"transformers.BertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BertTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.BertTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.BertTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.BertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BertTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.BertTokenizer.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/tokenization_bert.py#L117"}}),Ea=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/tokenization_bert.py#L248",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Pa=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/tokenization_bert.py#L273",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ja=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/tokenization_bert.py#L301",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),as=new se({props:{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[n5]},$$scope:{ctx:B}}}),Ca=new C({props:{name:"save_vocabulary",anchor:"transformers.BertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/tokenization_bert.py#L330"}}),Na=new Fe({}),Oa=new C({props:{name:"class transformers.BertTokenizerFast",anchor:"transformers.BertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BertTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.BertTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BertTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BertTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BertTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BertTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BertTokenizerFast.clean_text",description:`<strong>clean_text</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean the text before tokenization by removing any control characters and replacing all
whitespaces by the classic one.`,name:"clean_text"},{anchor:"transformers.BertTokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.BertTokenizerFast.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"},{anchor:"transformers.BertTokenizerFast.wordpieces_prefix",description:`<strong>wordpieces_prefix</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;##&quot;</code>) &#x2014;
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/tokenization_bert_fast.py#L117"}}),La=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/tokenization_bert_fast.py#L205",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Sa=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/tokenization_bert_fast.py#L229",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ls=new se({props:{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[s5]},$$scope:{ctx:B}}}),Ua=new Fe({}),Wa=new C({props:{name:"class transformers.models.bert.modeling_bert.BertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.`,name:"loss"},{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_bert.py#L761"}}),Ra=new C({props:{name:"class transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attentions",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_tf_bert.py#L931"}}),Qa=new C({props:{name:"class transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",parameters:[{name:"prediction_logits",val:": ndarray = None"},{name:"seq_relationship_logits",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_flax_bert.py#L58"}}),Ja=new C({props:{name:"replace",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/flax/struct.py#L120"}}),Ga=new Fe({}),Xa=new C({props:{name:"class transformers.BertModel",anchor:"transformers.BertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_bert.py#L864"}}),ni=new C({props:{name:"forward",anchor:"transformers.BertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BertModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.BertModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BertModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_bert.py#L903",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hs=new $e({props:{$$slots:{default:[r5]},$$scope:{ctx:B}}}),ms=new se({props:{anchor:"transformers.BertModel.forward.example",$$slots:{default:[a5]},$$scope:{ctx:B}}}),si=new Fe({}),ri=new C({props:{name:"class transformers.BertForPreTraining",anchor:"transformers.BertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_bert.py#L1047"}}),di=new C({props:{name:"forward",anchor:"transformers.BertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
<p>labels (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>
next_sentence_label (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>):
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence
pair (see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.
kwargs (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>):
Used to hide legacy arguments that have been deprecated.</li>
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_bert.py#L1063",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.</p>
</li>
<li>
<p><strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
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
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),us=new $e({props:{$$slots:{default:[i5]},$$scope:{ctx:B}}}),gs=new se({props:{anchor:"transformers.BertForPreTraining.forward.example",$$slots:{default:[l5]},$$scope:{ctx:B}}}),ci=new Fe({}),pi=new C({props:{name:"class transformers.BertLMHeadModel",anchor:"transformers.BertLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_bert.py#L1151"}}),gi=new C({props:{name:"forward",anchor:"transformers.BertLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertLMHeadModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BertLMHeadModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.BertLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.BertLMHeadModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BertLMHeadModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_bert.py#L1174",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bs=new $e({props:{$$slots:{default:[d5]},$$scope:{ctx:B}}}),ks=new se({props:{anchor:"transformers.BertLMHeadModel.forward.example",$$slots:{default:[c5]},$$scope:{ctx:B}}}),_i=new Fe({}),bi=new C({props:{name:"class transformers.BertForMaskedLM",anchor:"transformers.BertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_bert.py#L1286"}}),wi=new C({props:{name:"forward",anchor:"transformers.BertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_bert.py#L1312",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ts=new $e({props:{$$slots:{default:[p5]},$$scope:{ctx:B}}}),vs=new se({props:{anchor:"transformers.BertForMaskedLM.forward.example",$$slots:{default:[h5]},$$scope:{ctx:B}}}),ws=new se({props:{anchor:"transformers.BertForMaskedLM.forward.example-2",$$slots:{default:[m5]},$$scope:{ctx:B}}}),$i=new Fe({}),xi=new C({props:{name:"class transformers.BertForNextSentencePrediction",anchor:"transformers.BertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_bert.py#L1399"}}),zi=new C({props:{name:"forward",anchor:"transformers.BertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForNextSentencePrediction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForNextSentencePrediction.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForNextSentencePrediction.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForNextSentencePrediction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForNextSentencePrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForNextSentencePrediction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForNextSentencePrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForNextSentencePrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_bert.py#L1409",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>next_sentence_label</code> is provided) \u2014 Next sequence prediction (classification) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xs=new $e({props:{$$slots:{default:[f5]},$$scope:{ctx:B}}}),Fs=new se({props:{anchor:"transformers.BertForNextSentencePrediction.forward.example",$$slots:{default:[u5]},$$scope:{ctx:B}}}),Pi=new Fe({}),qi=new C({props:{name:"class transformers.BertForSequenceClassification",anchor:"transformers.BertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_bert.py#L1503"}}),Oi=new C({props:{name:"forward",anchor:"transformers.BertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_bert.py#L1519",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ms=new $e({props:{$$slots:{default:[g5]},$$scope:{ctx:B}}}),Es=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example",$$slots:{default:[_5]},$$scope:{ctx:B}}}),zs=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example-2",$$slots:{default:[b5]},$$scope:{ctx:B}}}),Ps=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example-3",$$slots:{default:[k5]},$$scope:{ctx:B}}}),qs=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example-4",$$slots:{default:[y5]},$$scope:{ctx:B}}}),Ai=new Fe({}),Ii=new C({props:{name:"class transformers.BertForMultipleChoice",anchor:"transformers.BertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_bert.py#L1607"}}),Ui=new C({props:{name:"forward",anchor:"transformers.BertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_bert.py#L1621",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cs=new $e({props:{$$slots:{default:[T5]},$$scope:{ctx:B}}}),Ns=new se({props:{anchor:"transformers.BertForMultipleChoice.forward.example",$$slots:{default:[v5]},$$scope:{ctx:B}}}),Wi=new Fe({}),Hi=new C({props:{name:"class transformers.BertForTokenClassification",anchor:"transformers.BertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_bert.py#L1702"}}),Ki=new C({props:{name:"forward",anchor:"transformers.BertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_bert.py#L1720",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),As=new $e({props:{$$slots:{default:[w5]},$$scope:{ctx:B}}}),Is=new se({props:{anchor:"transformers.BertForTokenClassification.forward.example",$$slots:{default:[$5]},$$scope:{ctx:B}}}),Ls=new se({props:{anchor:"transformers.BertForTokenClassification.forward.example-2",$$slots:{default:[x5]},$$scope:{ctx:B}}}),Ji=new Fe({}),Gi=new C({props:{name:"class transformers.BertForQuestionAnswering",anchor:"transformers.BertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_bert.py#L1789"}}),el=new C({props:{name:"forward",anchor:"transformers.BertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_bert.py#L1803",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ss=new $e({props:{$$slots:{default:[F5]},$$scope:{ctx:B}}}),Us=new se({props:{anchor:"transformers.BertForQuestionAnswering.forward.example",$$slots:{default:[B5]},$$scope:{ctx:B}}}),Ws=new se({props:{anchor:"transformers.BertForQuestionAnswering.forward.example-2",$$slots:{default:[M5]},$$scope:{ctx:B}}}),tl=new Fe({}),ol=new C({props:{name:"class transformers.TFBertModel",anchor:"transformers.TFBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_tf_bert.py#L1058"}}),Rs=new $e({props:{$$slots:{default:[E5]},$$scope:{ctx:B}}}),al=new C({props:{name:"call",anchor:"transformers.TFBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFBertModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFBertModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBertModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_tf_bert.py#L1064",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vs=new $e({props:{$$slots:{default:[z5]},$$scope:{ctx:B}}}),Qs=new se({props:{anchor:"transformers.TFBertModel.call.example",$$slots:{default:[P5]},$$scope:{ctx:B}}}),il=new Fe({}),ll=new C({props:{name:"class transformers.TFBertForPreTraining",anchor:"transformers.TFBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_tf_bert.py#L1155"}}),Js=new $e({props:{$$slots:{default:[q5]},$$scope:{ctx:B}}}),hl=new C({props:{name:"call",anchor:"transformers.TFBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForPreTraining.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForPreTraining.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForPreTraining.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForPreTraining.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForPreTraining.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForPreTraining.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForPreTraining.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForPreTraining.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForPreTraining.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.TFBertForPreTraining.call.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"},{anchor:"transformers.TFBertForPreTraining.call.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_tf_bert.py#L1177",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
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
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gs=new $e({props:{$$slots:{default:[j5]},$$scope:{ctx:B}}}),Xs=new se({props:{anchor:"transformers.TFBertForPreTraining.call.example",$$slots:{default:[C5]},$$scope:{ctx:B}}}),ml=new Fe({}),fl=new C({props:{name:"class transformers.TFBertLMHeadModel",anchor:"transformers.TFBertLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_tf_bert.py#L1364"}}),ul=new C({props:{name:"call",anchor:"transformers.TFBertLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_tf_bert.py#L1401",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zs=new se({props:{anchor:"transformers.TFBertLMHeadModel.call.example",$$slots:{default:[N5]},$$scope:{ctx:B}}}),kl=new Fe({}),yl=new C({props:{name:"class transformers.TFBertForMaskedLM",anchor:"transformers.TFBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_tf_bert.py#L1272"}}),tr=new $e({props:{$$slots:{default:[O5]},$$scope:{ctx:B}}}),xl=new C({props:{name:"call",anchor:"transformers.TFBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_tf_bert.py#L1300",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),or=new $e({props:{$$slots:{default:[A5]},$$scope:{ctx:B}}}),nr=new se({props:{anchor:"transformers.TFBertForMaskedLM.call.example",$$slots:{default:[I5]},$$scope:{ctx:B}}}),sr=new se({props:{anchor:"transformers.TFBertForMaskedLM.call.example-2",$$slots:{default:[L5]},$$scope:{ctx:B}}}),Fl=new Fe({}),Bl=new C({props:{name:"class transformers.TFBertForNextSentencePrediction",anchor:"transformers.TFBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_tf_bert.py#L1514"}}),ar=new $e({props:{$$slots:{default:[D5]},$$scope:{ctx:B}}}),ql=new C({props:{name:"call",anchor:"transformers.TFBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForNextSentencePrediction.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForNextSentencePrediction.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForNextSentencePrediction.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForNextSentencePrediction.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForNextSentencePrediction.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForNextSentencePrediction.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForNextSentencePrediction.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForNextSentencePrediction.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_tf_bert.py#L1524",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>next_sentence_label</code> is provided) \u2014 Next sentence prediction loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ir=new $e({props:{$$slots:{default:[S5]},$$scope:{ctx:B}}}),lr=new se({props:{anchor:"transformers.TFBertForNextSentencePrediction.call.example",$$slots:{default:[U5]},$$scope:{ctx:B}}}),jl=new Fe({}),Cl=new C({props:{name:"class transformers.TFBertForSequenceClassification",anchor:"transformers.TFBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_tf_bert.py#L1605"}}),cr=new $e({props:{$$slots:{default:[W5]},$$scope:{ctx:B}}}),Il=new C({props:{name:"call",anchor:"transformers.TFBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_tf_bert.py#L1626",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pr=new $e({props:{$$slots:{default:[H5]},$$scope:{ctx:B}}}),hr=new se({props:{anchor:"transformers.TFBertForSequenceClassification.call.example",$$slots:{default:[R5]},$$scope:{ctx:B}}}),mr=new se({props:{anchor:"transformers.TFBertForSequenceClassification.call.example-2",$$slots:{default:[V5]},$$scope:{ctx:B}}}),Ll=new Fe({}),Dl=new C({props:{name:"class transformers.TFBertForMultipleChoice",anchor:"transformers.TFBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_tf_bert.py#L1698"}}),ur=new $e({props:{$$slots:{default:[Q5]},$$scope:{ctx:B}}}),Hl=new C({props:{name:"call",anchor:"transformers.TFBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_tf_bert.py#L1722",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gr=new $e({props:{$$slots:{default:[K5]},$$scope:{ctx:B}}}),_r=new se({props:{anchor:"transformers.TFBertForMultipleChoice.call.example",$$slots:{default:[J5]},$$scope:{ctx:B}}}),Rl=new Fe({}),Vl=new C({props:{name:"class transformers.TFBertForTokenClassification",anchor:"transformers.TFBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_tf_bert.py#L1828"}}),kr=new $e({props:{$$slots:{default:[G5]},$$scope:{ctx:B}}}),Gl=new C({props:{name:"call",anchor:"transformers.TFBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_tf_bert.py#L1855",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),yr=new $e({props:{$$slots:{default:[X5]},$$scope:{ctx:B}}}),Tr=new se({props:{anchor:"transformers.TFBertForTokenClassification.call.example",$$slots:{default:[Y5]},$$scope:{ctx:B}}}),vr=new se({props:{anchor:"transformers.TFBertForTokenClassification.call.example-2",$$slots:{default:[Z5]},$$scope:{ctx:B}}}),Xl=new Fe({}),Yl=new C({props:{name:"class transformers.TFBertForQuestionAnswering",anchor:"transformers.TFBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_tf_bert.py#L1925"}}),$r=new $e({props:{$$slots:{default:[eN]},$$scope:{ctx:B}}}),od=new C({props:{name:"call",anchor:"transformers.TFBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_tf_bert.py#L1947",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xr=new $e({props:{$$slots:{default:[tN]},$$scope:{ctx:B}}}),Fr=new se({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example",$$slots:{default:[oN]},$$scope:{ctx:B}}}),Br=new se({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example-2",$$slots:{default:[nN]},$$scope:{ctx:B}}}),nd=new Fe({}),sd=new C({props:{name:"class transformers.FlaxBertModel",anchor:"transformers.FlaxBertModel",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_flax_bert.py#L773"}}),hd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Er=new $e({props:{$$slots:{default:[sN]},$$scope:{ctx:B}}}),zr=new se({props:{anchor:"transformers.FlaxBertModel.__call__.example",$$slots:{default:[rN]},$$scope:{ctx:B}}}),md=new Fe({}),fd=new C({props:{name:"class transformers.FlaxBertForPreTraining",anchor:"transformers.FlaxBertForPreTraining",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_flax_bert.py#L846"}}),vd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForPreTraining.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForPreTraining.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForPreTraining.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForPreTraining.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
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
<p><a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qr=new $e({props:{$$slots:{default:[aN]},$$scope:{ctx:B}}}),jr=new se({props:{anchor:"transformers.FlaxBertForPreTraining.__call__.example",$$slots:{default:[iN]},$$scope:{ctx:B}}}),wd=new Fe({}),$d=new C({props:{name:"class transformers.FlaxBertForMaskedLM",anchor:"transformers.FlaxBertForMaskedLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_flax_bert.py#L931"}}),jd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nr=new $e({props:{$$slots:{default:[lN]},$$scope:{ctx:B}}}),Or=new se({props:{anchor:"transformers.FlaxBertForMaskedLM.__call__.example",$$slots:{default:[dN]},$$scope:{ctx:B}}}),Cd=new Fe({}),Nd=new C({props:{name:"class transformers.FlaxBertForNextSentencePrediction",anchor:"transformers.FlaxBertForNextSentencePrediction",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_flax_bert.py#L992"}}),Hd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForNextSentencePrediction.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
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
<p><a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ir=new $e({props:{$$slots:{default:[cN]},$$scope:{ctx:B}}}),Lr=new se({props:{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.example",$$slots:{default:[pN]},$$scope:{ctx:B}}}),Rd=new Fe({}),Vd=new C({props:{name:"class transformers.FlaxBertForSequenceClassification",anchor:"transformers.FlaxBertForSequenceClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_flax_bert.py#L1090"}}),ec=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sr=new $e({props:{$$slots:{default:[hN]},$$scope:{ctx:B}}}),Ur=new se({props:{anchor:"transformers.FlaxBertForSequenceClassification.__call__.example",$$slots:{default:[mN]},$$scope:{ctx:B}}}),tc=new Fe({}),oc=new C({props:{name:"class transformers.FlaxBertForMultipleChoice",anchor:"transformers.FlaxBertForMultipleChoice",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_flax_bert.py#L1166"}}),cc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Hr=new $e({props:{$$slots:{default:[fN]},$$scope:{ctx:B}}}),Rr=new se({props:{anchor:"transformers.FlaxBertForMultipleChoice.__call__.example",$$slots:{default:[uN]},$$scope:{ctx:B}}}),pc=new Fe({}),hc=new C({props:{name:"class transformers.FlaxBertForTokenClassification",anchor:"transformers.FlaxBertForTokenClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_flax_bert.py#L1238"}}),yc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qr=new $e({props:{$$slots:{default:[gN]},$$scope:{ctx:B}}}),Kr=new se({props:{anchor:"transformers.FlaxBertForTokenClassification.__call__.example",$$slots:{default:[_N]},$$scope:{ctx:B}}}),Tc=new Fe({}),vc=new C({props:{name:"class transformers.FlaxBertForQuestionAnswering",anchor:"transformers.FlaxBertForQuestionAnswering",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_flax_bert.py#L1305"}}),zc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16812/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gr=new $e({props:{$$slots:{default:[bN]},$$scope:{ctx:B}}}),Xr=new se({props:{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.example",$$slots:{default:[kN]},$$scope:{ctx:B}}}),{c(){d=r("meta"),_=c(),h=r("h1"),m=r("a"),g=r("span"),T(l.$$.fragment),f=c(),M=r("span"),be=n("BERT"),X=c(),z=r("h2"),ee=r("a"),L=r("span"),T(oe.$$.fragment),ke=c(),D=r("span"),ye=n("Overview"),me=c(),J=r("p"),O=n("The BERT model was proposed in "),ne=r("a"),Y=n("BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),P=n(` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),j=c(),ie=r("p"),H=n("The abstract from the paper is the following:"),fe=c(),le=r("p"),S=r("em"),Te=n(`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),ue=c(),q=r("p"),ce=r("em"),R=n(`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),ge=c(),de=r("p"),V=n("Tips:"),_e=c(),te=r("ul"),N=r("li"),ve=n(`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Q=c(),pe=r("li"),y=n(`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),E=c(),K=r("p"),ze=n("This model was contributed by "),Be=r("a"),A=n("thomwolf"),Pe=n(". The original code can be found "),Me=r("a"),qe=n("here"),I=n("."),W=c(),we=r("h2"),xe=r("a"),U=r("span"),T(Ee.$$.fragment),je=c(),he=r("span"),Ce=n("BertConfig"),b_=c(),qt=r("div"),T($a.$$.fragment),mk=c(),io=r("p"),fk=n("This is the configuration class to store the configuration of a "),Rc=r("a"),uk=n("BertModel"),gk=n(" or a "),Vc=r("a"),_k=n("TFBertModel"),bk=n(`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),xa=r("a"),kk=n("bert-base-uncased"),yk=n(" architecture."),Tk=c(),Lo=r("p"),vk=n("Configuration objects inherit from "),Qc=r("a"),wk=n("PretrainedConfig"),$k=n(` and can be used to control the model outputs. Read the
documentation from `),Kc=r("a"),xk=n("PretrainedConfig"),Fk=n(" for more information."),Bk=c(),T(ns.$$.fragment),k_=c(),Do=r("h2"),ss=r("a"),Eh=r("span"),T(Fa.$$.fragment),Mk=c(),zh=r("span"),Ek=n("BertTokenizer"),y_=c(),Ne=r("div"),T(Ba.$$.fragment),zk=c(),Ph=r("p"),Pk=n("Construct a BERT tokenizer. Based on WordPiece."),qk=c(),Ma=r("p"),jk=n("This tokenizer inherits from "),Jc=r("a"),Ck=n("PreTrainedTokenizer"),Nk=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ok=c(),To=r("div"),T(Ea.$$.fragment),Ak=c(),qh=r("p"),Ik=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Lk=c(),za=r("ul"),Gc=r("li"),Dk=n("single sequence: "),jh=r("code"),Sk=n("[CLS] X [SEP]"),Uk=c(),Xc=r("li"),Wk=n("pair of sequences: "),Ch=r("code"),Hk=n("[CLS] A [SEP] B [SEP]"),Rk=c(),rs=r("div"),T(Pa.$$.fragment),Vk=c(),qa=r("p"),Qk=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Nh=r("code"),Kk=n("prepare_for_model"),Jk=n(" method."),Gk=c(),Ct=r("div"),T(ja.$$.fragment),Xk=c(),Oh=r("p"),Yk=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Zk=c(),T(as.$$.fragment),ey=c(),So=r("p"),ty=n("If "),Ah=r("code"),oy=n("token_ids_1"),ny=n(" is "),Ih=r("code"),sy=n("None"),ry=n(", this method only returns the first portion of the mask (0s)."),ay=c(),Yc=r("div"),T(Ca.$$.fragment),T_=c(),Uo=r("h2"),is=r("a"),Lh=r("span"),T(Na.$$.fragment),iy=c(),Dh=r("span"),ly=n("BertTokenizerFast"),v_=c(),st=r("div"),T(Oa.$$.fragment),dy=c(),Aa=r("p"),cy=n("Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Sh=r("em"),py=n("tokenizers"),hy=n(" library). Based on WordPiece."),my=c(),Ia=r("p"),fy=n("This tokenizer inherits from "),Zc=r("a"),uy=n("PreTrainedTokenizerFast"),gy=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),_y=c(),vo=r("div"),T(La.$$.fragment),by=c(),Uh=r("p"),ky=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),yy=c(),Da=r("ul"),ep=r("li"),Ty=n("single sequence: "),Wh=r("code"),vy=n("[CLS] X [SEP]"),wy=c(),tp=r("li"),$y=n("pair of sequences: "),Hh=r("code"),xy=n("[CLS] A [SEP] B [SEP]"),Fy=c(),Nt=r("div"),T(Sa.$$.fragment),By=c(),Rh=r("p"),My=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Ey=c(),T(ls.$$.fragment),zy=c(),Wo=r("p"),Py=n("If "),Vh=r("code"),qy=n("token_ids_1"),jy=n(" is "),Qh=r("code"),Cy=n("None"),Ny=n(", this method only returns the first portion of the mask (0s)."),w_=c(),Ho=r("h2"),ds=r("a"),Kh=r("span"),T(Ua.$$.fragment),Oy=c(),Jh=r("span"),Ay=n("Bert specific outputs"),$_=c(),Ro=r("div"),T(Wa.$$.fragment),Iy=c(),Ha=r("p"),Ly=n("Output type of "),op=r("a"),Dy=n("BertForPreTraining"),Sy=n("."),x_=c(),Vo=r("div"),T(Ra.$$.fragment),Uy=c(),Va=r("p"),Wy=n("Output type of "),np=r("a"),Hy=n("TFBertForPreTraining"),Ry=n("."),F_=c(),lo=r("div"),T(Qa.$$.fragment),Vy=c(),Ka=r("p"),Qy=n("Output type of "),sp=r("a"),Ky=n("BertForPreTraining"),Jy=n("."),Gy=c(),cs=r("div"),T(Ja.$$.fragment),Xy=c(),Gh=r("p"),Yy=n("\u201CReturns a new object replacing the specified fields with new values."),B_=c(),Qo=r("h2"),ps=r("a"),Xh=r("span"),T(Ga.$$.fragment),Zy=c(),Yh=r("span"),eT=n("BertModel"),M_=c(),Oe=r("div"),T(Xa.$$.fragment),tT=c(),Zh=r("p"),oT=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),nT=c(),Ya=r("p"),sT=n("This model inherits from "),rp=r("a"),rT=n("PreTrainedModel"),aT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iT=c(),Za=r("p"),lT=n("This model is also a PyTorch "),ei=r("a"),dT=n("torch.nn.Module"),cT=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pT=c(),ti=r("p"),hT=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),oi=r("a"),mT=n(`Attention is
all you need`),fT=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),uT=c(),Qe=r("p"),gT=n("To behave as an decoder the model needs to be initialized with the "),em=r("code"),_T=n("is_decoder"),bT=n(` argument of the configuration set
to `),tm=r("code"),kT=n("True"),yT=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),om=r("code"),TT=n("is_decoder"),vT=n(` argument and
`),nm=r("code"),wT=n("add_cross_attention"),$T=n(" set to "),sm=r("code"),xT=n("True"),FT=n("; an "),rm=r("code"),BT=n("encoder_hidden_states"),MT=n(" is then expected as an input to the forward pass."),ET=c(),Ot=r("div"),T(ni.$$.fragment),zT=c(),Ko=r("p"),PT=n("The "),ap=r("a"),qT=n("BertModel"),jT=n(" forward method, overrides the "),am=r("code"),CT=n("__call__"),NT=n(" special method."),OT=c(),T(hs.$$.fragment),AT=c(),T(ms.$$.fragment),E_=c(),Jo=r("h2"),fs=r("a"),im=r("span"),T(si.$$.fragment),IT=c(),lm=r("span"),LT=n("BertForPreTraining"),z_=c(),rt=r("div"),T(ri.$$.fragment),DT=c(),Go=r("p"),ST=n("Bert Model with two heads on top as done during the pretraining: a "),dm=r("code"),UT=n("masked language modeling"),WT=n(" head and a "),cm=r("code"),HT=n("next sentence prediction (classification)"),RT=n(" head."),VT=c(),ai=r("p"),QT=n("This model inherits from "),ip=r("a"),KT=n("PreTrainedModel"),JT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),GT=c(),ii=r("p"),XT=n("This model is also a PyTorch "),li=r("a"),YT=n("torch.nn.Module"),ZT=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ev=c(),At=r("div"),T(di.$$.fragment),tv=c(),Xo=r("p"),ov=n("The "),lp=r("a"),nv=n("BertForPreTraining"),sv=n(" forward method, overrides the "),pm=r("code"),rv=n("__call__"),av=n(" special method."),iv=c(),T(us.$$.fragment),lv=c(),T(gs.$$.fragment),P_=c(),Yo=r("h2"),_s=r("a"),hm=r("span"),T(ci.$$.fragment),dv=c(),mm=r("span"),cv=n("BertLMHeadModel"),q_=c(),at=r("div"),T(pi.$$.fragment),pv=c(),hi=r("p"),hv=n("Bert Model with a "),fm=r("code"),mv=n("language modeling"),fv=n(" head on top for CLM fine-tuning."),uv=c(),mi=r("p"),gv=n("This model inherits from "),dp=r("a"),_v=n("PreTrainedModel"),bv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kv=c(),fi=r("p"),yv=n("This model is also a PyTorch "),ui=r("a"),Tv=n("torch.nn.Module"),vv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wv=c(),It=r("div"),T(gi.$$.fragment),$v=c(),Zo=r("p"),xv=n("The "),cp=r("a"),Fv=n("BertLMHeadModel"),Bv=n(" forward method, overrides the "),um=r("code"),Mv=n("__call__"),Ev=n(" special method."),zv=c(),T(bs.$$.fragment),Pv=c(),T(ks.$$.fragment),j_=c(),en=r("h2"),ys=r("a"),gm=r("span"),T(_i.$$.fragment),qv=c(),_m=r("span"),jv=n("BertForMaskedLM"),C_=c(),it=r("div"),T(bi.$$.fragment),Cv=c(),ki=r("p"),Nv=n("Bert Model with a "),bm=r("code"),Ov=n("language modeling"),Av=n(" head on top."),Iv=c(),yi=r("p"),Lv=n("This model inherits from "),pp=r("a"),Dv=n("PreTrainedModel"),Sv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uv=c(),Ti=r("p"),Wv=n("This model is also a PyTorch "),vi=r("a"),Hv=n("torch.nn.Module"),Rv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vv=c(),mt=r("div"),T(wi.$$.fragment),Qv=c(),tn=r("p"),Kv=n("The "),hp=r("a"),Jv=n("BertForMaskedLM"),Gv=n(" forward method, overrides the "),km=r("code"),Xv=n("__call__"),Yv=n(" special method."),Zv=c(),T(Ts.$$.fragment),ew=c(),T(vs.$$.fragment),tw=c(),T(ws.$$.fragment),N_=c(),on=r("h2"),$s=r("a"),ym=r("span"),T($i.$$.fragment),ow=c(),Tm=r("span"),nw=n("BertForNextSentencePrediction"),O_=c(),lt=r("div"),T(xi.$$.fragment),sw=c(),Fi=r("p"),rw=n("Bert Model with a "),vm=r("code"),aw=n("next sentence prediction (classification)"),iw=n(" head on top."),lw=c(),Bi=r("p"),dw=n("This model inherits from "),mp=r("a"),cw=n("PreTrainedModel"),pw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hw=c(),Mi=r("p"),mw=n("This model is also a PyTorch "),Ei=r("a"),fw=n("torch.nn.Module"),uw=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gw=c(),Lt=r("div"),T(zi.$$.fragment),_w=c(),nn=r("p"),bw=n("The "),fp=r("a"),kw=n("BertForNextSentencePrediction"),yw=n(" forward method, overrides the "),wm=r("code"),Tw=n("__call__"),vw=n(" special method."),ww=c(),T(xs.$$.fragment),$w=c(),T(Fs.$$.fragment),A_=c(),sn=r("h2"),Bs=r("a"),$m=r("span"),T(Pi.$$.fragment),xw=c(),xm=r("span"),Fw=n("BertForSequenceClassification"),I_=c(),dt=r("div"),T(qi.$$.fragment),Bw=c(),Fm=r("p"),Mw=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Ew=c(),ji=r("p"),zw=n("This model inherits from "),up=r("a"),Pw=n("PreTrainedModel"),qw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jw=c(),Ci=r("p"),Cw=n("This model is also a PyTorch "),Ni=r("a"),Nw=n("torch.nn.Module"),Ow=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Aw=c(),Ve=r("div"),T(Oi.$$.fragment),Iw=c(),rn=r("p"),Lw=n("The "),gp=r("a"),Dw=n("BertForSequenceClassification"),Sw=n(" forward method, overrides the "),Bm=r("code"),Uw=n("__call__"),Ww=n(" special method."),Hw=c(),T(Ms.$$.fragment),Rw=c(),T(Es.$$.fragment),Vw=c(),T(zs.$$.fragment),Qw=c(),T(Ps.$$.fragment),Kw=c(),T(qs.$$.fragment),L_=c(),an=r("h2"),js=r("a"),Mm=r("span"),T(Ai.$$.fragment),Jw=c(),Em=r("span"),Gw=n("BertForMultipleChoice"),D_=c(),ct=r("div"),T(Ii.$$.fragment),Xw=c(),zm=r("p"),Yw=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Zw=c(),Li=r("p"),e2=n("This model inherits from "),_p=r("a"),t2=n("PreTrainedModel"),o2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),n2=c(),Di=r("p"),s2=n("This model is also a PyTorch "),Si=r("a"),r2=n("torch.nn.Module"),a2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),i2=c(),Dt=r("div"),T(Ui.$$.fragment),l2=c(),ln=r("p"),d2=n("The "),bp=r("a"),c2=n("BertForMultipleChoice"),p2=n(" forward method, overrides the "),Pm=r("code"),h2=n("__call__"),m2=n(" special method."),f2=c(),T(Cs.$$.fragment),u2=c(),T(Ns.$$.fragment),S_=c(),dn=r("h2"),Os=r("a"),qm=r("span"),T(Wi.$$.fragment),g2=c(),jm=r("span"),_2=n("BertForTokenClassification"),U_=c(),pt=r("div"),T(Hi.$$.fragment),b2=c(),Cm=r("p"),k2=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),y2=c(),Ri=r("p"),T2=n("This model inherits from "),kp=r("a"),v2=n("PreTrainedModel"),w2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$2=c(),Vi=r("p"),x2=n("This model is also a PyTorch "),Qi=r("a"),F2=n("torch.nn.Module"),B2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),M2=c(),ft=r("div"),T(Ki.$$.fragment),E2=c(),cn=r("p"),z2=n("The "),yp=r("a"),P2=n("BertForTokenClassification"),q2=n(" forward method, overrides the "),Nm=r("code"),j2=n("__call__"),C2=n(" special method."),N2=c(),T(As.$$.fragment),O2=c(),T(Is.$$.fragment),A2=c(),T(Ls.$$.fragment),W_=c(),pn=r("h2"),Ds=r("a"),Om=r("span"),T(Ji.$$.fragment),I2=c(),Am=r("span"),L2=n("BertForQuestionAnswering"),H_=c(),ht=r("div"),T(Gi.$$.fragment),D2=c(),hn=r("p"),S2=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Im=r("code"),U2=n("span start logits"),W2=n(" and "),Lm=r("code"),H2=n("span end logits"),R2=n(")."),V2=c(),Xi=r("p"),Q2=n("This model inherits from "),Tp=r("a"),K2=n("PreTrainedModel"),J2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),G2=c(),Yi=r("p"),X2=n("This model is also a PyTorch "),Zi=r("a"),Y2=n("torch.nn.Module"),Z2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),e$=c(),ut=r("div"),T(el.$$.fragment),t$=c(),mn=r("p"),o$=n("The "),vp=r("a"),n$=n("BertForQuestionAnswering"),s$=n(" forward method, overrides the "),Dm=r("code"),r$=n("__call__"),a$=n(" special method."),i$=c(),T(Ss.$$.fragment),l$=c(),T(Us.$$.fragment),d$=c(),T(Ws.$$.fragment),R_=c(),fn=r("h2"),Hs=r("a"),Sm=r("span"),T(tl.$$.fragment),c$=c(),Um=r("span"),p$=n("TFBertModel"),V_=c(),Ke=r("div"),T(ol.$$.fragment),h$=c(),Wm=r("p"),m$=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),f$=c(),nl=r("p"),u$=n("This model inherits from "),wp=r("a"),g$=n("TFPreTrainedModel"),_$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),b$=c(),sl=r("p"),k$=n("This model is also a "),rl=r("a"),y$=n("tf.keras.Model"),T$=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),v$=c(),T(Rs.$$.fragment),w$=c(),St=r("div"),T(al.$$.fragment),$$=c(),un=r("p"),x$=n("The "),$p=r("a"),F$=n("TFBertModel"),B$=n(" forward method, overrides the "),Hm=r("code"),M$=n("__call__"),E$=n(" special method."),z$=c(),T(Vs.$$.fragment),P$=c(),T(Qs.$$.fragment),Q_=c(),gn=r("h2"),Ks=r("a"),Rm=r("span"),T(il.$$.fragment),q$=c(),Vm=r("span"),j$=n("TFBertForPreTraining"),K_=c(),Je=r("div"),T(ll.$$.fragment),C$=c(),_n=r("p"),N$=n(`Bert Model with two heads on top as done during the pretraining:
a `),Qm=r("code"),O$=n("masked language modeling"),A$=n(" head and a "),Km=r("code"),I$=n("next sentence prediction (classification)"),L$=n(" head."),D$=c(),dl=r("p"),S$=n("This model inherits from "),xp=r("a"),U$=n("TFPreTrainedModel"),W$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),H$=c(),cl=r("p"),R$=n("This model is also a "),pl=r("a"),V$=n("tf.keras.Model"),Q$=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),K$=c(),T(Js.$$.fragment),J$=c(),Ut=r("div"),T(hl.$$.fragment),G$=c(),bn=r("p"),X$=n("The "),Fp=r("a"),Y$=n("TFBertForPreTraining"),Z$=n(" forward method, overrides the "),Jm=r("code"),ex=n("__call__"),tx=n(" special method."),ox=c(),T(Gs.$$.fragment),nx=c(),T(Xs.$$.fragment),J_=c(),kn=r("h2"),Ys=r("a"),Gm=r("span"),T(ml.$$.fragment),sx=c(),Xm=r("span"),rx=n("TFBertModelLMHeadModel"),G_=c(),yn=r("div"),T(fl.$$.fragment),ax=c(),gt=r("div"),T(ul.$$.fragment),ix=c(),Ae=r("p"),lx=n("encoder_hidden_states  ("),Ym=r("code"),dx=n("tf.Tensor"),cx=n(" of shape "),Zm=r("code"),px=n("(batch_size, sequence_length, hidden_size)"),hx=n(", "),ef=r("em"),mx=n("optional"),fx=n(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),tf=r("code"),ux=n("tf.Tensor"),gx=n(" of shape "),of=r("code"),_x=n("(batch_size, sequence_length)"),bx=n(", "),nf=r("em"),kx=n("optional"),yx=n(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),sf=r("code"),Tx=n("[0, 1]"),vx=n(":"),wx=c(),gl=r("ul"),_l=r("li"),$x=n("1 for tokens that are "),rf=r("strong"),xx=n("not masked"),Fx=n(","),Bx=c(),bl=r("li"),Mx=n("0 for tokens that are "),af=r("strong"),Ex=n("masked"),zx=n("."),Px=c(),G=r("p"),qx=n("past_key_values ("),lf=r("code"),jx=n("Tuple[Tuple[tf.Tensor]]"),Cx=n(" of length "),df=r("code"),Nx=n("config.n_layers"),Ox=n(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),cf=r("code"),Ax=n("past_key_values"),Ix=n(" are used, the user can optionally input only the last "),pf=r("code"),Lx=n("decoder_input_ids"),Dx=n(` (those that
don\u2019t have their past key value states given to this model) of shape `),hf=r("code"),Sx=n("(batch_size, 1)"),Ux=n(` instead of all
`),mf=r("code"),Wx=n("decoder_input_ids"),Hx=n(" of shape "),ff=r("code"),Rx=n("(batch_size, sequence_length)"),Vx=n(`.
use_cache (`),uf=r("code"),Qx=n("bool"),Kx=n(", "),gf=r("em"),Jx=n("optional"),Gx=n(", defaults to "),_f=r("code"),Xx=n("True"),Yx=n(`):
If set to `),bf=r("code"),Zx=n("True"),eF=n(", "),kf=r("code"),tF=n("past_key_values"),oF=n(` key value states are returned and can be used to speed up decoding (see
`),yf=r("code"),nF=n("past_key_values"),sF=n("). Set to "),Tf=r("code"),rF=n("False"),aF=n(" during training, "),vf=r("code"),iF=n("True"),lF=n(` during generation
labels (`),wf=r("code"),dF=n("tf.Tensor"),cF=n(" or "),$f=r("code"),pF=n("np.ndarray"),hF=n(" of shape "),xf=r("code"),mF=n("(batch_size, sequence_length)"),fF=n(", "),Ff=r("em"),uF=n("optional"),gF=n(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Bf=r("code"),_F=n("[0, ..., config.vocab_size - 1]"),bF=n("."),kF=c(),T(Zs.$$.fragment),X_=c(),Tn=r("h2"),er=r("a"),Mf=r("span"),T(kl.$$.fragment),yF=c(),Ef=r("span"),TF=n("TFBertForMaskedLM"),Y_=c(),Ge=r("div"),T(yl.$$.fragment),vF=c(),Tl=r("p"),wF=n("Bert Model with a "),zf=r("code"),$F=n("language modeling"),xF=n(" head on top."),FF=c(),vl=r("p"),BF=n("This model inherits from "),Bp=r("a"),MF=n("TFPreTrainedModel"),EF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zF=c(),wl=r("p"),PF=n("This model is also a "),$l=r("a"),qF=n("tf.keras.Model"),jF=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),CF=c(),T(tr.$$.fragment),NF=c(),_t=r("div"),T(xl.$$.fragment),OF=c(),vn=r("p"),AF=n("The "),Mp=r("a"),IF=n("TFBertForMaskedLM"),LF=n(" forward method, overrides the "),Pf=r("code"),DF=n("__call__"),SF=n(" special method."),UF=c(),T(or.$$.fragment),WF=c(),T(nr.$$.fragment),HF=c(),T(sr.$$.fragment),Z_=c(),wn=r("h2"),rr=r("a"),qf=r("span"),T(Fl.$$.fragment),RF=c(),jf=r("span"),VF=n("TFBertForNextSentencePrediction"),eb=c(),Xe=r("div"),T(Bl.$$.fragment),QF=c(),Ml=r("p"),KF=n("Bert Model with a "),Cf=r("code"),JF=n("next sentence prediction (classification)"),GF=n(" head on top."),XF=c(),El=r("p"),YF=n("This model inherits from "),Ep=r("a"),ZF=n("TFPreTrainedModel"),e0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),t0=c(),zl=r("p"),o0=n("This model is also a "),Pl=r("a"),n0=n("tf.keras.Model"),s0=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),r0=c(),T(ar.$$.fragment),a0=c(),Wt=r("div"),T(ql.$$.fragment),i0=c(),$n=r("p"),l0=n("The "),zp=r("a"),d0=n("TFBertForNextSentencePrediction"),c0=n(" forward method, overrides the "),Nf=r("code"),p0=n("__call__"),h0=n(" special method."),m0=c(),T(ir.$$.fragment),f0=c(),T(lr.$$.fragment),tb=c(),xn=r("h2"),dr=r("a"),Of=r("span"),T(jl.$$.fragment),u0=c(),Af=r("span"),g0=n("TFBertForSequenceClassification"),ob=c(),Ye=r("div"),T(Cl.$$.fragment),_0=c(),If=r("p"),b0=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),k0=c(),Nl=r("p"),y0=n("This model inherits from "),Pp=r("a"),T0=n("TFPreTrainedModel"),v0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),w0=c(),Ol=r("p"),$0=n("This model is also a "),Al=r("a"),x0=n("tf.keras.Model"),F0=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),B0=c(),T(cr.$$.fragment),M0=c(),bt=r("div"),T(Il.$$.fragment),E0=c(),Fn=r("p"),z0=n("The "),qp=r("a"),P0=n("TFBertForSequenceClassification"),q0=n(" forward method, overrides the "),Lf=r("code"),j0=n("__call__"),C0=n(" special method."),N0=c(),T(pr.$$.fragment),O0=c(),T(hr.$$.fragment),A0=c(),T(mr.$$.fragment),nb=c(),Bn=r("h2"),fr=r("a"),Df=r("span"),T(Ll.$$.fragment),I0=c(),Sf=r("span"),L0=n("TFBertForMultipleChoice"),sb=c(),Ze=r("div"),T(Dl.$$.fragment),D0=c(),Uf=r("p"),S0=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),U0=c(),Sl=r("p"),W0=n("This model inherits from "),jp=r("a"),H0=n("TFPreTrainedModel"),R0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),V0=c(),Ul=r("p"),Q0=n("This model is also a "),Wl=r("a"),K0=n("tf.keras.Model"),J0=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),G0=c(),T(ur.$$.fragment),X0=c(),Ht=r("div"),T(Hl.$$.fragment),Y0=c(),Mn=r("p"),Z0=n("The "),Cp=r("a"),eB=n("TFBertForMultipleChoice"),tB=n(" forward method, overrides the "),Wf=r("code"),oB=n("__call__"),nB=n(" special method."),sB=c(),T(gr.$$.fragment),rB=c(),T(_r.$$.fragment),rb=c(),En=r("h2"),br=r("a"),Hf=r("span"),T(Rl.$$.fragment),aB=c(),Rf=r("span"),iB=n("TFBertForTokenClassification"),ab=c(),et=r("div"),T(Vl.$$.fragment),lB=c(),Vf=r("p"),dB=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),cB=c(),Ql=r("p"),pB=n("This model inherits from "),Np=r("a"),hB=n("TFPreTrainedModel"),mB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fB=c(),Kl=r("p"),uB=n("This model is also a "),Jl=r("a"),gB=n("tf.keras.Model"),_B=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bB=c(),T(kr.$$.fragment),kB=c(),kt=r("div"),T(Gl.$$.fragment),yB=c(),zn=r("p"),TB=n("The "),Op=r("a"),vB=n("TFBertForTokenClassification"),wB=n(" forward method, overrides the "),Qf=r("code"),$B=n("__call__"),xB=n(" special method."),FB=c(),T(yr.$$.fragment),BB=c(),T(Tr.$$.fragment),MB=c(),T(vr.$$.fragment),ib=c(),Pn=r("h2"),wr=r("a"),Kf=r("span"),T(Xl.$$.fragment),EB=c(),Jf=r("span"),zB=n("TFBertForQuestionAnswering"),lb=c(),tt=r("div"),T(Yl.$$.fragment),PB=c(),qn=r("p"),qB=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Gf=r("code"),jB=n("span start logits"),CB=n(" and "),Xf=r("code"),NB=n("span end logits"),OB=n(")."),AB=c(),Zl=r("p"),IB=n("This model inherits from "),Ap=r("a"),LB=n("TFPreTrainedModel"),DB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),SB=c(),ed=r("p"),UB=n("This model is also a "),td=r("a"),WB=n("tf.keras.Model"),HB=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),RB=c(),T($r.$$.fragment),VB=c(),yt=r("div"),T(od.$$.fragment),QB=c(),jn=r("p"),KB=n("The "),Ip=r("a"),JB=n("TFBertForQuestionAnswering"),GB=n(" forward method, overrides the "),Yf=r("code"),XB=n("__call__"),YB=n(" special method."),ZB=c(),T(xr.$$.fragment),eM=c(),T(Fr.$$.fragment),tM=c(),T(Br.$$.fragment),db=c(),Cn=r("h2"),Mr=r("a"),Zf=r("span"),T(nd.$$.fragment),oM=c(),eu=r("span"),nM=n("FlaxBertModel"),cb=c(),Ie=r("div"),T(sd.$$.fragment),sM=c(),tu=r("p"),rM=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),aM=c(),rd=r("p"),iM=n("This model inherits from "),Lp=r("a"),lM=n("FlaxPreTrainedModel"),dM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cM=c(),ad=r("p"),pM=n("This model is also a Flax Linen "),id=r("a"),hM=n("flax.linen.Module"),mM=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fM=c(),ou=r("p"),uM=n("Finally, this model supports inherent JAX features such as:"),gM=c(),co=r("ul"),nu=r("li"),ld=r("a"),_M=n("Just-In-Time (JIT) compilation"),bM=c(),su=r("li"),dd=r("a"),kM=n("Automatic Differentiation"),yM=c(),ru=r("li"),cd=r("a"),TM=n("Vectorization"),vM=c(),au=r("li"),pd=r("a"),wM=n("Parallelization"),$M=c(),Rt=r("div"),T(hd.$$.fragment),xM=c(),Nn=r("p"),FM=n("The "),iu=r("code"),BM=n("FlaxBertPreTrainedModel"),MM=n(" forward method, overrides the "),lu=r("code"),EM=n("__call__"),zM=n(" special method."),PM=c(),T(Er.$$.fragment),qM=c(),T(zr.$$.fragment),pb=c(),On=r("h2"),Pr=r("a"),du=r("span"),T(md.$$.fragment),jM=c(),cu=r("span"),CM=n("FlaxBertForPreTraining"),hb=c(),Le=r("div"),T(fd.$$.fragment),NM=c(),An=r("p"),OM=n("Bert Model with two heads on top as done during the pretraining: a "),pu=r("code"),AM=n("masked language modeling"),IM=n(" head and a "),hu=r("code"),LM=n("next sentence prediction (classification)"),DM=n(" head."),SM=c(),ud=r("p"),UM=n("This model inherits from "),Dp=r("a"),WM=n("FlaxPreTrainedModel"),HM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),RM=c(),gd=r("p"),VM=n("This model is also a Flax Linen "),_d=r("a"),QM=n("flax.linen.Module"),KM=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),JM=c(),mu=r("p"),GM=n("Finally, this model supports inherent JAX features such as:"),XM=c(),po=r("ul"),fu=r("li"),bd=r("a"),YM=n("Just-In-Time (JIT) compilation"),ZM=c(),uu=r("li"),kd=r("a"),eE=n("Automatic Differentiation"),tE=c(),gu=r("li"),yd=r("a"),oE=n("Vectorization"),nE=c(),_u=r("li"),Td=r("a"),sE=n("Parallelization"),rE=c(),Vt=r("div"),T(vd.$$.fragment),aE=c(),In=r("p"),iE=n("The "),bu=r("code"),lE=n("FlaxBertPreTrainedModel"),dE=n(" forward method, overrides the "),ku=r("code"),cE=n("__call__"),pE=n(" special method."),hE=c(),T(qr.$$.fragment),mE=c(),T(jr.$$.fragment),mb=c(),Ln=r("h2"),Cr=r("a"),yu=r("span"),T(wd.$$.fragment),fE=c(),Tu=r("span"),uE=n("FlaxBertForMaskedLM"),fb=c(),De=r("div"),T($d.$$.fragment),gE=c(),xd=r("p"),_E=n("Bert Model with a "),vu=r("code"),bE=n("language modeling"),kE=n(" head on top."),yE=c(),Fd=r("p"),TE=n("This model inherits from "),Sp=r("a"),vE=n("FlaxPreTrainedModel"),wE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),$E=c(),Bd=r("p"),xE=n("This model is also a Flax Linen "),Md=r("a"),FE=n("flax.linen.Module"),BE=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ME=c(),wu=r("p"),EE=n("Finally, this model supports inherent JAX features such as:"),zE=c(),ho=r("ul"),$u=r("li"),Ed=r("a"),PE=n("Just-In-Time (JIT) compilation"),qE=c(),xu=r("li"),zd=r("a"),jE=n("Automatic Differentiation"),CE=c(),Fu=r("li"),Pd=r("a"),NE=n("Vectorization"),OE=c(),Bu=r("li"),qd=r("a"),AE=n("Parallelization"),IE=c(),Qt=r("div"),T(jd.$$.fragment),LE=c(),Dn=r("p"),DE=n("The "),Mu=r("code"),SE=n("FlaxBertPreTrainedModel"),UE=n(" forward method, overrides the "),Eu=r("code"),WE=n("__call__"),HE=n(" special method."),RE=c(),T(Nr.$$.fragment),VE=c(),T(Or.$$.fragment),ub=c(),Sn=r("h2"),Ar=r("a"),zu=r("span"),T(Cd.$$.fragment),QE=c(),Pu=r("span"),KE=n("FlaxBertForNextSentencePrediction"),gb=c(),Se=r("div"),T(Nd.$$.fragment),JE=c(),Od=r("p"),GE=n("Bert Model with a "),qu=r("code"),XE=n("next sentence prediction (classification)"),YE=n(" head on top."),ZE=c(),Ad=r("p"),e6=n("This model inherits from "),Up=r("a"),t6=n("FlaxPreTrainedModel"),o6=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),n6=c(),Id=r("p"),s6=n("This model is also a Flax Linen "),Ld=r("a"),r6=n("flax.linen.Module"),a6=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),i6=c(),ju=r("p"),l6=n("Finally, this model supports inherent JAX features such as:"),d6=c(),mo=r("ul"),Cu=r("li"),Dd=r("a"),c6=n("Just-In-Time (JIT) compilation"),p6=c(),Nu=r("li"),Sd=r("a"),h6=n("Automatic Differentiation"),m6=c(),Ou=r("li"),Ud=r("a"),f6=n("Vectorization"),u6=c(),Au=r("li"),Wd=r("a"),g6=n("Parallelization"),_6=c(),Kt=r("div"),T(Hd.$$.fragment),b6=c(),Un=r("p"),k6=n("The "),Iu=r("code"),y6=n("FlaxBertPreTrainedModel"),T6=n(" forward method, overrides the "),Lu=r("code"),v6=n("__call__"),w6=n(" special method."),$6=c(),T(Ir.$$.fragment),x6=c(),T(Lr.$$.fragment),_b=c(),Wn=r("h2"),Dr=r("a"),Du=r("span"),T(Rd.$$.fragment),F6=c(),Su=r("span"),B6=n("FlaxBertForSequenceClassification"),bb=c(),Ue=r("div"),T(Vd.$$.fragment),M6=c(),Uu=r("p"),E6=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),z6=c(),Qd=r("p"),P6=n("This model inherits from "),Wp=r("a"),q6=n("FlaxPreTrainedModel"),j6=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),C6=c(),Kd=r("p"),N6=n("This model is also a Flax Linen "),Jd=r("a"),O6=n("flax.linen.Module"),A6=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),I6=c(),Wu=r("p"),L6=n("Finally, this model supports inherent JAX features such as:"),D6=c(),fo=r("ul"),Hu=r("li"),Gd=r("a"),S6=n("Just-In-Time (JIT) compilation"),U6=c(),Ru=r("li"),Xd=r("a"),W6=n("Automatic Differentiation"),H6=c(),Vu=r("li"),Yd=r("a"),R6=n("Vectorization"),V6=c(),Qu=r("li"),Zd=r("a"),Q6=n("Parallelization"),K6=c(),Jt=r("div"),T(ec.$$.fragment),J6=c(),Hn=r("p"),G6=n("The "),Ku=r("code"),X6=n("FlaxBertPreTrainedModel"),Y6=n(" forward method, overrides the "),Ju=r("code"),Z6=n("__call__"),ez=n(" special method."),tz=c(),T(Sr.$$.fragment),oz=c(),T(Ur.$$.fragment),kb=c(),Rn=r("h2"),Wr=r("a"),Gu=r("span"),T(tc.$$.fragment),nz=c(),Xu=r("span"),sz=n("FlaxBertForMultipleChoice"),yb=c(),We=r("div"),T(oc.$$.fragment),rz=c(),Yu=r("p"),az=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),iz=c(),nc=r("p"),lz=n("This model inherits from "),Hp=r("a"),dz=n("FlaxPreTrainedModel"),cz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pz=c(),sc=r("p"),hz=n("This model is also a Flax Linen "),rc=r("a"),mz=n("flax.linen.Module"),fz=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),uz=c(),Zu=r("p"),gz=n("Finally, this model supports inherent JAX features such as:"),_z=c(),uo=r("ul"),eg=r("li"),ac=r("a"),bz=n("Just-In-Time (JIT) compilation"),kz=c(),tg=r("li"),ic=r("a"),yz=n("Automatic Differentiation"),Tz=c(),og=r("li"),lc=r("a"),vz=n("Vectorization"),wz=c(),ng=r("li"),dc=r("a"),$z=n("Parallelization"),xz=c(),Gt=r("div"),T(cc.$$.fragment),Fz=c(),Vn=r("p"),Bz=n("The "),sg=r("code"),Mz=n("FlaxBertPreTrainedModel"),Ez=n(" forward method, overrides the "),rg=r("code"),zz=n("__call__"),Pz=n(" special method."),qz=c(),T(Hr.$$.fragment),jz=c(),T(Rr.$$.fragment),Tb=c(),Qn=r("h2"),Vr=r("a"),ag=r("span"),T(pc.$$.fragment),Cz=c(),ig=r("span"),Nz=n("FlaxBertForTokenClassification"),vb=c(),He=r("div"),T(hc.$$.fragment),Oz=c(),lg=r("p"),Az=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Iz=c(),mc=r("p"),Lz=n("This model inherits from "),Rp=r("a"),Dz=n("FlaxPreTrainedModel"),Sz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uz=c(),fc=r("p"),Wz=n("This model is also a Flax Linen "),uc=r("a"),Hz=n("flax.linen.Module"),Rz=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Vz=c(),dg=r("p"),Qz=n("Finally, this model supports inherent JAX features such as:"),Kz=c(),go=r("ul"),cg=r("li"),gc=r("a"),Jz=n("Just-In-Time (JIT) compilation"),Gz=c(),pg=r("li"),_c=r("a"),Xz=n("Automatic Differentiation"),Yz=c(),hg=r("li"),bc=r("a"),Zz=n("Vectorization"),e4=c(),mg=r("li"),kc=r("a"),t4=n("Parallelization"),o4=c(),Xt=r("div"),T(yc.$$.fragment),n4=c(),Kn=r("p"),s4=n("The "),fg=r("code"),r4=n("FlaxBertPreTrainedModel"),a4=n(" forward method, overrides the "),ug=r("code"),i4=n("__call__"),l4=n(" special method."),d4=c(),T(Qr.$$.fragment),c4=c(),T(Kr.$$.fragment),wb=c(),Jn=r("h2"),Jr=r("a"),gg=r("span"),T(Tc.$$.fragment),p4=c(),_g=r("span"),h4=n("FlaxBertForQuestionAnswering"),$b=c(),Re=r("div"),T(vc.$$.fragment),m4=c(),Gn=r("p"),f4=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),bg=r("code"),u4=n("span start logits"),g4=n(" and "),kg=r("code"),_4=n("span end logits"),b4=n(")."),k4=c(),wc=r("p"),y4=n("This model inherits from "),Vp=r("a"),T4=n("FlaxPreTrainedModel"),v4=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),w4=c(),$c=r("p"),$4=n("This model is also a Flax Linen "),xc=r("a"),x4=n("flax.linen.Module"),F4=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),B4=c(),yg=r("p"),M4=n("Finally, this model supports inherent JAX features such as:"),E4=c(),_o=r("ul"),Tg=r("li"),Fc=r("a"),z4=n("Just-In-Time (JIT) compilation"),P4=c(),vg=r("li"),Bc=r("a"),q4=n("Automatic Differentiation"),j4=c(),wg=r("li"),Mc=r("a"),C4=n("Vectorization"),N4=c(),$g=r("li"),Ec=r("a"),O4=n("Parallelization"),A4=c(),Yt=r("div"),T(zc.$$.fragment),I4=c(),Xn=r("p"),L4=n("The "),xg=r("code"),D4=n("FlaxBertPreTrainedModel"),S4=n(" forward method, overrides the "),Fg=r("code"),U4=n("__call__"),W4=n(" special method."),H4=c(),T(Gr.$$.fragment),R4=c(),T(Xr.$$.fragment),this.h()},l(o){const k=e5('[data-svelte="svelte-1phssyn"]',document.head);d=a(k,"META",{name:!0,content:!0}),k.forEach(t),_=p(o),h=a(o,"H1",{class:!0});var Pc=i(h);m=a(Pc,"A",{id:!0,class:!0,href:!0});var Bg=i(m);g=a(Bg,"SPAN",{});var Mg=i(g);v(l.$$.fragment,Mg),Mg.forEach(t),Bg.forEach(t),f=p(Pc),M=a(Pc,"SPAN",{});var Eg=i(M);be=s(Eg,"BERT"),Eg.forEach(t),Pc.forEach(t),X=p(o),z=a(o,"H2",{class:!0});var qc=i(z);ee=a(qc,"A",{id:!0,class:!0,href:!0});var zg=i(ee);L=a(zg,"SPAN",{});var Pg=i(L);v(oe.$$.fragment,Pg),Pg.forEach(t),zg.forEach(t),ke=p(qc),D=a(qc,"SPAN",{});var qg=i(D);ye=s(qg,"Overview"),qg.forEach(t),qc.forEach(t),me=p(o),J=a(o,"P",{});var jc=i(J);O=s(jc,"The BERT model was proposed in "),ne=a(jc,"A",{href:!0,rel:!0});var jg=i(ne);Y=s(jg,"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),jg.forEach(t),P=s(jc,` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),jc.forEach(t),j=p(o),ie=a(o,"P",{});var Cg=i(ie);H=s(Cg,"The abstract from the paper is the following:"),Cg.forEach(t),fe=p(o),le=a(o,"P",{});var Ng=i(le);S=a(Ng,"EM",{});var Og=i(S);Te=s(Og,`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),Og.forEach(t),Ng.forEach(t),ue=p(o),q=a(o,"P",{});var Ag=i(q);ce=a(Ag,"EM",{});var Ig=i(ce);R=s(Ig,`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),Ig.forEach(t),Ag.forEach(t),ge=p(o),de=a(o,"P",{});var Lg=i(de);V=s(Lg,"Tips:"),Lg.forEach(t),_e=p(o),te=a(o,"UL",{});var Cc=i(te);N=a(Cc,"LI",{});var Dg=i(N);ve=s(Dg,`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Dg.forEach(t),Q=p(Cc),pe=a(Cc,"LI",{});var Sg=i(pe);y=s(Sg,`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),Sg.forEach(t),Cc.forEach(t),E=p(o),K=a(o,"P",{});var Yn=i(K);ze=s(Yn,"This model was contributed by "),Be=a(Yn,"A",{href:!0,rel:!0});var Ug=i(Be);A=s(Ug,"thomwolf"),Ug.forEach(t),Pe=s(Yn,". The original code can be found "),Me=a(Yn,"A",{href:!0,rel:!0});var Wg=i(Me);qe=s(Wg,"here"),Wg.forEach(t),I=s(Yn,"."),Yn.forEach(t),W=p(o),we=a(o,"H2",{class:!0});var Nc=i(we);xe=a(Nc,"A",{id:!0,class:!0,href:!0});var Hg=i(xe);U=a(Hg,"SPAN",{});var Rg=i(U);v(Ee.$$.fragment,Rg),Rg.forEach(t),Hg.forEach(t),je=p(Nc),he=a(Nc,"SPAN",{});var Vg=i(he);Ce=s(Vg,"BertConfig"),Vg.forEach(t),Nc.forEach(t),b_=p(o),qt=a(o,"DIV",{class:!0});var bo=i(qt);v($a.$$.fragment,bo),mk=p(bo),io=a(bo,"P",{});var ko=i(io);fk=s(ko,"This is the configuration class to store the configuration of a "),Rc=a(ko,"A",{href:!0});var Qg=i(Rc);uk=s(Qg,"BertModel"),Qg.forEach(t),gk=s(ko," or a "),Vc=a(ko,"A",{href:!0});var Kg=i(Vc);_k=s(Kg,"TFBertModel"),Kg.forEach(t),bk=s(ko,`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),xa=a(ko,"A",{href:!0,rel:!0});var Jg=i(xa);kk=s(Jg,"bert-base-uncased"),Jg.forEach(t),yk=s(ko," architecture."),ko.forEach(t),Tk=p(bo),Lo=a(bo,"P",{});var Zn=i(Lo);vk=s(Zn,"Configuration objects inherit from "),Qc=a(Zn,"A",{href:!0});var Gg=i(Qc);wk=s(Gg,"PretrainedConfig"),Gg.forEach(t),$k=s(Zn,` and can be used to control the model outputs. Read the
documentation from `),Kc=a(Zn,"A",{href:!0});var Xg=i(Kc);xk=s(Xg,"PretrainedConfig"),Xg.forEach(t),Fk=s(Zn," for more information."),Zn.forEach(t),Bk=p(bo),v(ns.$$.fragment,bo),bo.forEach(t),k_=p(o),Do=a(o,"H2",{class:!0});var Oc=i(Do);ss=a(Oc,"A",{id:!0,class:!0,href:!0});var Yg=i(ss);Eh=a(Yg,"SPAN",{});var Zg=i(Eh);v(Fa.$$.fragment,Zg),Zg.forEach(t),Yg.forEach(t),Mk=p(Oc),zh=a(Oc,"SPAN",{});var e_=i(zh);Ek=s(e_,"BertTokenizer"),e_.forEach(t),Oc.forEach(t),y_=p(o),Ne=a(o,"DIV",{class:!0});var ot=i(Ne);v(Ba.$$.fragment,ot),zk=p(ot),Ph=a(ot,"P",{});var t_=i(Ph);Pk=s(t_,"Construct a BERT tokenizer. Based on WordPiece."),t_.forEach(t),qk=p(ot),Ma=a(ot,"P",{});var Ac=i(Ma);jk=s(Ac,"This tokenizer inherits from "),Jc=a(Ac,"A",{href:!0});var o_=i(Jc);Ck=s(o_,"PreTrainedTokenizer"),o_.forEach(t),Nk=s(Ac,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ac.forEach(t),Ok=p(ot),To=a(ot,"DIV",{class:!0});var es=i(To);v(Ea.$$.fragment,es),Ak=p(es),qh=a(es,"P",{});var n_=i(qh);Ik=s(n_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),n_.forEach(t),Lk=p(es),za=a(es,"UL",{});var Ic=i(za);Gc=a(Ic,"LI",{});var Qp=i(Gc);Dk=s(Qp,"single sequence: "),jh=a(Qp,"CODE",{});var s_=i(jh);Sk=s(s_,"[CLS] X [SEP]"),s_.forEach(t),Qp.forEach(t),Uk=p(Ic),Xc=a(Ic,"LI",{});var Kp=i(Xc);Wk=s(Kp,"pair of sequences: "),Ch=a(Kp,"CODE",{});var r_=i(Ch);Hk=s(r_,"[CLS] A [SEP] B [SEP]"),r_.forEach(t),Kp.forEach(t),Ic.forEach(t),es.forEach(t),Rk=p(ot),rs=a(ot,"DIV",{class:!0});var Lc=i(rs);v(Pa.$$.fragment,Lc),Vk=p(Lc),qa=a(Lc,"P",{});var Dc=i(qa);Qk=s(Dc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Nh=a(Dc,"CODE",{});var a_=i(Nh);Kk=s(a_,"prepare_for_model"),a_.forEach(t),Jk=s(Dc," method."),Dc.forEach(t),Lc.forEach(t),Gk=p(ot),Ct=a(ot,"DIV",{class:!0});var yo=i(Ct);v(ja.$$.fragment,yo),Xk=p(yo),Oh=a(yo,"P",{});var i_=i(Oh);Yk=s(i_,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),i_.forEach(t),Zk=p(yo),v(as.$$.fragment,yo),ey=p(yo),So=a(yo,"P",{});var ts=i(So);ty=s(ts,"If "),Ah=a(ts,"CODE",{});var l_=i(Ah);oy=s(l_,"token_ids_1"),l_.forEach(t),ny=s(ts," is "),Ih=a(ts,"CODE",{});var d_=i(Ih);sy=s(d_,"None"),d_.forEach(t),ry=s(ts,", this method only returns the first portion of the mask (0s)."),ts.forEach(t),yo.forEach(t),ay=p(ot),Yc=a(ot,"DIV",{class:!0});var c_=i(Yc);v(Ca.$$.fragment,c_),c_.forEach(t),ot.forEach(t),T_=p(o),Uo=a(o,"H2",{class:!0});var Sc=i(Uo);is=a(Sc,"A",{id:!0,class:!0,href:!0});var p_=i(is);Lh=a(p_,"SPAN",{});var h_=i(Lh);v(Na.$$.fragment,h_),h_.forEach(t),p_.forEach(t),iy=p(Sc),Dh=a(Sc,"SPAN",{});var m_=i(Dh);ly=s(m_,"BertTokenizerFast"),m_.forEach(t),Sc.forEach(t),v_=p(o),st=a(o,"DIV",{class:!0});var jt=i(st);v(Oa.$$.fragment,jt),dy=p(jt),Aa=a(jt,"P",{});var Uc=i(Aa);cy=s(Uc,"Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Sh=a(Uc,"EM",{});var f_=i(Sh);py=s(f_,"tokenizers"),f_.forEach(t),hy=s(Uc," library). Based on WordPiece."),Uc.forEach(t),my=p(jt),Ia=a(jt,"P",{});var Wc=i(Ia);fy=s(Wc,"This tokenizer inherits from "),Zc=a(Wc,"A",{href:!0});var u_=i(Zc);uy=s(u_,"PreTrainedTokenizerFast"),u_.forEach(t),gy=s(Wc,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Wc.forEach(t),_y=p(jt),vo=a(jt,"DIV",{class:!0});var os=i(vo);v(La.$$.fragment,os),by=p(os),Uh=a(os,"P",{});var g_=i(Uh);ky=s(g_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),g_.forEach(t),yy=p(os),Da=a(os,"UL",{});var Hc=i(Da);ep=a(Hc,"LI",{});var Jp=i(ep);Ty=s(Jp,"single sequence: "),Wh=a(Jp,"CODE",{});var __=i(Wh);vy=s(__,"[CLS] X [SEP]"),__.forEach(t),Jp.forEach(t),wy=p(Hc),tp=a(Hc,"LI",{});var V4=i(tp);$y=s(V4,"pair of sequences: "),Hh=a(V4,"CODE",{});var Q4=i(Hh);xy=s(Q4,"[CLS] A [SEP] B [SEP]"),Q4.forEach(t),V4.forEach(t),Hc.forEach(t),os.forEach(t),Fy=p(jt),Nt=a(jt,"DIV",{class:!0});var Yr=i(Nt);v(Sa.$$.fragment,Yr),By=p(Yr),Rh=a(Yr,"P",{});var K4=i(Rh);My=s(K4,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),K4.forEach(t),Ey=p(Yr),v(ls.$$.fragment,Yr),zy=p(Yr),Wo=a(Yr,"P",{});var Gp=i(Wo);Py=s(Gp,"If "),Vh=a(Gp,"CODE",{});var J4=i(Vh);qy=s(J4,"token_ids_1"),J4.forEach(t),jy=s(Gp," is "),Qh=a(Gp,"CODE",{});var G4=i(Qh);Cy=s(G4,"None"),G4.forEach(t),Ny=s(Gp,", this method only returns the first portion of the mask (0s)."),Gp.forEach(t),Yr.forEach(t),jt.forEach(t),w_=p(o),Ho=a(o,"H2",{class:!0});var Fb=i(Ho);ds=a(Fb,"A",{id:!0,class:!0,href:!0});var X4=i(ds);Kh=a(X4,"SPAN",{});var Y4=i(Kh);v(Ua.$$.fragment,Y4),Y4.forEach(t),X4.forEach(t),Oy=p(Fb),Jh=a(Fb,"SPAN",{});var Z4=i(Jh);Ay=s(Z4,"Bert specific outputs"),Z4.forEach(t),Fb.forEach(t),$_=p(o),Ro=a(o,"DIV",{class:!0});var Bb=i(Ro);v(Wa.$$.fragment,Bb),Iy=p(Bb),Ha=a(Bb,"P",{});var Mb=i(Ha);Ly=s(Mb,"Output type of "),op=a(Mb,"A",{href:!0});var eP=i(op);Dy=s(eP,"BertForPreTraining"),eP.forEach(t),Sy=s(Mb,"."),Mb.forEach(t),Bb.forEach(t),x_=p(o),Vo=a(o,"DIV",{class:!0});var Eb=i(Vo);v(Ra.$$.fragment,Eb),Uy=p(Eb),Va=a(Eb,"P",{});var zb=i(Va);Wy=s(zb,"Output type of "),np=a(zb,"A",{href:!0});var tP=i(np);Hy=s(tP,"TFBertForPreTraining"),tP.forEach(t),Ry=s(zb,"."),zb.forEach(t),Eb.forEach(t),F_=p(o),lo=a(o,"DIV",{class:!0});var Xp=i(lo);v(Qa.$$.fragment,Xp),Vy=p(Xp),Ka=a(Xp,"P",{});var Pb=i(Ka);Qy=s(Pb,"Output type of "),sp=a(Pb,"A",{href:!0});var oP=i(sp);Ky=s(oP,"BertForPreTraining"),oP.forEach(t),Jy=s(Pb,"."),Pb.forEach(t),Gy=p(Xp),cs=a(Xp,"DIV",{class:!0});var qb=i(cs);v(Ja.$$.fragment,qb),Xy=p(qb),Gh=a(qb,"P",{});var nP=i(Gh);Yy=s(nP,"\u201CReturns a new object replacing the specified fields with new values."),nP.forEach(t),qb.forEach(t),Xp.forEach(t),B_=p(o),Qo=a(o,"H2",{class:!0});var jb=i(Qo);ps=a(jb,"A",{id:!0,class:!0,href:!0});var sP=i(ps);Xh=a(sP,"SPAN",{});var rP=i(Xh);v(Ga.$$.fragment,rP),rP.forEach(t),sP.forEach(t),Zy=p(jb),Yh=a(jb,"SPAN",{});var aP=i(Yh);eT=s(aP,"BertModel"),aP.forEach(t),jb.forEach(t),M_=p(o),Oe=a(o,"DIV",{class:!0});var Tt=i(Oe);v(Xa.$$.fragment,Tt),tT=p(Tt),Zh=a(Tt,"P",{});var iP=i(Zh);oT=s(iP,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),iP.forEach(t),nT=p(Tt),Ya=a(Tt,"P",{});var Cb=i(Ya);sT=s(Cb,"This model inherits from "),rp=a(Cb,"A",{href:!0});var lP=i(rp);rT=s(lP,"PreTrainedModel"),lP.forEach(t),aT=s(Cb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cb.forEach(t),iT=p(Tt),Za=a(Tt,"P",{});var Nb=i(Za);lT=s(Nb,"This model is also a PyTorch "),ei=a(Nb,"A",{href:!0,rel:!0});var dP=i(ei);dT=s(dP,"torch.nn.Module"),dP.forEach(t),cT=s(Nb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nb.forEach(t),pT=p(Tt),ti=a(Tt,"P",{});var Ob=i(ti);hT=s(Ob,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),oi=a(Ob,"A",{href:!0,rel:!0});var cP=i(oi);mT=s(cP,`Attention is
all you need`),cP.forEach(t),fT=s(Ob,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ob.forEach(t),uT=p(Tt),Qe=a(Tt,"P",{});var vt=i(Qe);gT=s(vt,"To behave as an decoder the model needs to be initialized with the "),em=a(vt,"CODE",{});var pP=i(em);_T=s(pP,"is_decoder"),pP.forEach(t),bT=s(vt,` argument of the configuration set
to `),tm=a(vt,"CODE",{});var hP=i(tm);kT=s(hP,"True"),hP.forEach(t),yT=s(vt,". To be used in a Seq2Seq model, the model needs to initialized with both "),om=a(vt,"CODE",{});var mP=i(om);TT=s(mP,"is_decoder"),mP.forEach(t),vT=s(vt,` argument and
`),nm=a(vt,"CODE",{});var fP=i(nm);wT=s(fP,"add_cross_attention"),fP.forEach(t),$T=s(vt," set to "),sm=a(vt,"CODE",{});var uP=i(sm);xT=s(uP,"True"),uP.forEach(t),FT=s(vt,"; an "),rm=a(vt,"CODE",{});var gP=i(rm);BT=s(gP,"encoder_hidden_states"),gP.forEach(t),MT=s(vt," is then expected as an input to the forward pass."),vt.forEach(t),ET=p(Tt),Ot=a(Tt,"DIV",{class:!0});var Zr=i(Ot);v(ni.$$.fragment,Zr),zT=p(Zr),Ko=a(Zr,"P",{});var Yp=i(Ko);PT=s(Yp,"The "),ap=a(Yp,"A",{href:!0});var _P=i(ap);qT=s(_P,"BertModel"),_P.forEach(t),jT=s(Yp," forward method, overrides the "),am=a(Yp,"CODE",{});var bP=i(am);CT=s(bP,"__call__"),bP.forEach(t),NT=s(Yp," special method."),Yp.forEach(t),OT=p(Zr),v(hs.$$.fragment,Zr),AT=p(Zr),v(ms.$$.fragment,Zr),Zr.forEach(t),Tt.forEach(t),E_=p(o),Jo=a(o,"H2",{class:!0});var Ab=i(Jo);fs=a(Ab,"A",{id:!0,class:!0,href:!0});var kP=i(fs);im=a(kP,"SPAN",{});var yP=i(im);v(si.$$.fragment,yP),yP.forEach(t),kP.forEach(t),IT=p(Ab),lm=a(Ab,"SPAN",{});var TP=i(lm);LT=s(TP,"BertForPreTraining"),TP.forEach(t),Ab.forEach(t),z_=p(o),rt=a(o,"DIV",{class:!0});var wo=i(rt);v(ri.$$.fragment,wo),DT=p(wo),Go=a(wo,"P",{});var Zp=i(Go);ST=s(Zp,"Bert Model with two heads on top as done during the pretraining: a "),dm=a(Zp,"CODE",{});var vP=i(dm);UT=s(vP,"masked language modeling"),vP.forEach(t),WT=s(Zp," head and a "),cm=a(Zp,"CODE",{});var wP=i(cm);HT=s(wP,"next sentence prediction (classification)"),wP.forEach(t),RT=s(Zp," head."),Zp.forEach(t),VT=p(wo),ai=a(wo,"P",{});var Ib=i(ai);QT=s(Ib,"This model inherits from "),ip=a(Ib,"A",{href:!0});var $P=i(ip);KT=s($P,"PreTrainedModel"),$P.forEach(t),JT=s(Ib,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ib.forEach(t),GT=p(wo),ii=a(wo,"P",{});var Lb=i(ii);XT=s(Lb,"This model is also a PyTorch "),li=a(Lb,"A",{href:!0,rel:!0});var xP=i(li);YT=s(xP,"torch.nn.Module"),xP.forEach(t),ZT=s(Lb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lb.forEach(t),ev=p(wo),At=a(wo,"DIV",{class:!0});var ea=i(At);v(di.$$.fragment,ea),tv=p(ea),Xo=a(ea,"P",{});var eh=i(Xo);ov=s(eh,"The "),lp=a(eh,"A",{href:!0});var FP=i(lp);nv=s(FP,"BertForPreTraining"),FP.forEach(t),sv=s(eh," forward method, overrides the "),pm=a(eh,"CODE",{});var BP=i(pm);rv=s(BP,"__call__"),BP.forEach(t),av=s(eh," special method."),eh.forEach(t),iv=p(ea),v(us.$$.fragment,ea),lv=p(ea),v(gs.$$.fragment,ea),ea.forEach(t),wo.forEach(t),P_=p(o),Yo=a(o,"H2",{class:!0});var Db=i(Yo);_s=a(Db,"A",{id:!0,class:!0,href:!0});var MP=i(_s);hm=a(MP,"SPAN",{});var EP=i(hm);v(ci.$$.fragment,EP),EP.forEach(t),MP.forEach(t),dv=p(Db),mm=a(Db,"SPAN",{});var zP=i(mm);cv=s(zP,"BertLMHeadModel"),zP.forEach(t),Db.forEach(t),q_=p(o),at=a(o,"DIV",{class:!0});var $o=i(at);v(pi.$$.fragment,$o),pv=p($o),hi=a($o,"P",{});var Sb=i(hi);hv=s(Sb,"Bert Model with a "),fm=a(Sb,"CODE",{});var PP=i(fm);mv=s(PP,"language modeling"),PP.forEach(t),fv=s(Sb," head on top for CLM fine-tuning."),Sb.forEach(t),uv=p($o),mi=a($o,"P",{});var Ub=i(mi);gv=s(Ub,"This model inherits from "),dp=a(Ub,"A",{href:!0});var qP=i(dp);_v=s(qP,"PreTrainedModel"),qP.forEach(t),bv=s(Ub,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ub.forEach(t),kv=p($o),fi=a($o,"P",{});var Wb=i(fi);yv=s(Wb,"This model is also a PyTorch "),ui=a(Wb,"A",{href:!0,rel:!0});var jP=i(ui);Tv=s(jP,"torch.nn.Module"),jP.forEach(t),vv=s(Wb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wb.forEach(t),wv=p($o),It=a($o,"DIV",{class:!0});var ta=i(It);v(gi.$$.fragment,ta),$v=p(ta),Zo=a(ta,"P",{});var th=i(Zo);xv=s(th,"The "),cp=a(th,"A",{href:!0});var CP=i(cp);Fv=s(CP,"BertLMHeadModel"),CP.forEach(t),Bv=s(th," forward method, overrides the "),um=a(th,"CODE",{});var NP=i(um);Mv=s(NP,"__call__"),NP.forEach(t),Ev=s(th," special method."),th.forEach(t),zv=p(ta),v(bs.$$.fragment,ta),Pv=p(ta),v(ks.$$.fragment,ta),ta.forEach(t),$o.forEach(t),j_=p(o),en=a(o,"H2",{class:!0});var Hb=i(en);ys=a(Hb,"A",{id:!0,class:!0,href:!0});var OP=i(ys);gm=a(OP,"SPAN",{});var AP=i(gm);v(_i.$$.fragment,AP),AP.forEach(t),OP.forEach(t),qv=p(Hb),_m=a(Hb,"SPAN",{});var IP=i(_m);jv=s(IP,"BertForMaskedLM"),IP.forEach(t),Hb.forEach(t),C_=p(o),it=a(o,"DIV",{class:!0});var xo=i(it);v(bi.$$.fragment,xo),Cv=p(xo),ki=a(xo,"P",{});var Rb=i(ki);Nv=s(Rb,"Bert Model with a "),bm=a(Rb,"CODE",{});var LP=i(bm);Ov=s(LP,"language modeling"),LP.forEach(t),Av=s(Rb," head on top."),Rb.forEach(t),Iv=p(xo),yi=a(xo,"P",{});var Vb=i(yi);Lv=s(Vb,"This model inherits from "),pp=a(Vb,"A",{href:!0});var DP=i(pp);Dv=s(DP,"PreTrainedModel"),DP.forEach(t),Sv=s(Vb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vb.forEach(t),Uv=p(xo),Ti=a(xo,"P",{});var Qb=i(Ti);Wv=s(Qb,"This model is also a PyTorch "),vi=a(Qb,"A",{href:!0,rel:!0});var SP=i(vi);Hv=s(SP,"torch.nn.Module"),SP.forEach(t),Rv=s(Qb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qb.forEach(t),Vv=p(xo),mt=a(xo,"DIV",{class:!0});var Fo=i(mt);v(wi.$$.fragment,Fo),Qv=p(Fo),tn=a(Fo,"P",{});var oh=i(tn);Kv=s(oh,"The "),hp=a(oh,"A",{href:!0});var UP=i(hp);Jv=s(UP,"BertForMaskedLM"),UP.forEach(t),Gv=s(oh," forward method, overrides the "),km=a(oh,"CODE",{});var WP=i(km);Xv=s(WP,"__call__"),WP.forEach(t),Yv=s(oh," special method."),oh.forEach(t),Zv=p(Fo),v(Ts.$$.fragment,Fo),ew=p(Fo),v(vs.$$.fragment,Fo),tw=p(Fo),v(ws.$$.fragment,Fo),Fo.forEach(t),xo.forEach(t),N_=p(o),on=a(o,"H2",{class:!0});var Kb=i(on);$s=a(Kb,"A",{id:!0,class:!0,href:!0});var HP=i($s);ym=a(HP,"SPAN",{});var RP=i(ym);v($i.$$.fragment,RP),RP.forEach(t),HP.forEach(t),ow=p(Kb),Tm=a(Kb,"SPAN",{});var VP=i(Tm);nw=s(VP,"BertForNextSentencePrediction"),VP.forEach(t),Kb.forEach(t),O_=p(o),lt=a(o,"DIV",{class:!0});var Bo=i(lt);v(xi.$$.fragment,Bo),sw=p(Bo),Fi=a(Bo,"P",{});var Jb=i(Fi);rw=s(Jb,"Bert Model with a "),vm=a(Jb,"CODE",{});var QP=i(vm);aw=s(QP,"next sentence prediction (classification)"),QP.forEach(t),iw=s(Jb," head on top."),Jb.forEach(t),lw=p(Bo),Bi=a(Bo,"P",{});var Gb=i(Bi);dw=s(Gb,"This model inherits from "),mp=a(Gb,"A",{href:!0});var KP=i(mp);cw=s(KP,"PreTrainedModel"),KP.forEach(t),pw=s(Gb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gb.forEach(t),hw=p(Bo),Mi=a(Bo,"P",{});var Xb=i(Mi);mw=s(Xb,"This model is also a PyTorch "),Ei=a(Xb,"A",{href:!0,rel:!0});var JP=i(Ei);fw=s(JP,"torch.nn.Module"),JP.forEach(t),uw=s(Xb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xb.forEach(t),gw=p(Bo),Lt=a(Bo,"DIV",{class:!0});var oa=i(Lt);v(zi.$$.fragment,oa),_w=p(oa),nn=a(oa,"P",{});var nh=i(nn);bw=s(nh,"The "),fp=a(nh,"A",{href:!0});var GP=i(fp);kw=s(GP,"BertForNextSentencePrediction"),GP.forEach(t),yw=s(nh," forward method, overrides the "),wm=a(nh,"CODE",{});var XP=i(wm);Tw=s(XP,"__call__"),XP.forEach(t),vw=s(nh," special method."),nh.forEach(t),ww=p(oa),v(xs.$$.fragment,oa),$w=p(oa),v(Fs.$$.fragment,oa),oa.forEach(t),Bo.forEach(t),A_=p(o),sn=a(o,"H2",{class:!0});var Yb=i(sn);Bs=a(Yb,"A",{id:!0,class:!0,href:!0});var YP=i(Bs);$m=a(YP,"SPAN",{});var ZP=i($m);v(Pi.$$.fragment,ZP),ZP.forEach(t),YP.forEach(t),xw=p(Yb),xm=a(Yb,"SPAN",{});var eq=i(xm);Fw=s(eq,"BertForSequenceClassification"),eq.forEach(t),Yb.forEach(t),I_=p(o),dt=a(o,"DIV",{class:!0});var Mo=i(dt);v(qi.$$.fragment,Mo),Bw=p(Mo),Fm=a(Mo,"P",{});var tq=i(Fm);Mw=s(tq,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),tq.forEach(t),Ew=p(Mo),ji=a(Mo,"P",{});var Zb=i(ji);zw=s(Zb,"This model inherits from "),up=a(Zb,"A",{href:!0});var oq=i(up);Pw=s(oq,"PreTrainedModel"),oq.forEach(t),qw=s(Zb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zb.forEach(t),jw=p(Mo),Ci=a(Mo,"P",{});var e1=i(Ci);Cw=s(e1,"This model is also a PyTorch "),Ni=a(e1,"A",{href:!0,rel:!0});var nq=i(Ni);Nw=s(nq,"torch.nn.Module"),nq.forEach(t),Ow=s(e1,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),e1.forEach(t),Aw=p(Mo),Ve=a(Mo,"DIV",{class:!0});var wt=i(Ve);v(Oi.$$.fragment,wt),Iw=p(wt),rn=a(wt,"P",{});var sh=i(rn);Lw=s(sh,"The "),gp=a(sh,"A",{href:!0});var sq=i(gp);Dw=s(sq,"BertForSequenceClassification"),sq.forEach(t),Sw=s(sh," forward method, overrides the "),Bm=a(sh,"CODE",{});var rq=i(Bm);Uw=s(rq,"__call__"),rq.forEach(t),Ww=s(sh," special method."),sh.forEach(t),Hw=p(wt),v(Ms.$$.fragment,wt),Rw=p(wt),v(Es.$$.fragment,wt),Vw=p(wt),v(zs.$$.fragment,wt),Qw=p(wt),v(Ps.$$.fragment,wt),Kw=p(wt),v(qs.$$.fragment,wt),wt.forEach(t),Mo.forEach(t),L_=p(o),an=a(o,"H2",{class:!0});var t1=i(an);js=a(t1,"A",{id:!0,class:!0,href:!0});var aq=i(js);Mm=a(aq,"SPAN",{});var iq=i(Mm);v(Ai.$$.fragment,iq),iq.forEach(t),aq.forEach(t),Jw=p(t1),Em=a(t1,"SPAN",{});var lq=i(Em);Gw=s(lq,"BertForMultipleChoice"),lq.forEach(t),t1.forEach(t),D_=p(o),ct=a(o,"DIV",{class:!0});var Eo=i(ct);v(Ii.$$.fragment,Eo),Xw=p(Eo),zm=a(Eo,"P",{});var dq=i(zm);Yw=s(dq,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),dq.forEach(t),Zw=p(Eo),Li=a(Eo,"P",{});var o1=i(Li);e2=s(o1,"This model inherits from "),_p=a(o1,"A",{href:!0});var cq=i(_p);t2=s(cq,"PreTrainedModel"),cq.forEach(t),o2=s(o1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),o1.forEach(t),n2=p(Eo),Di=a(Eo,"P",{});var n1=i(Di);s2=s(n1,"This model is also a PyTorch "),Si=a(n1,"A",{href:!0,rel:!0});var pq=i(Si);r2=s(pq,"torch.nn.Module"),pq.forEach(t),a2=s(n1,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),n1.forEach(t),i2=p(Eo),Dt=a(Eo,"DIV",{class:!0});var na=i(Dt);v(Ui.$$.fragment,na),l2=p(na),ln=a(na,"P",{});var rh=i(ln);d2=s(rh,"The "),bp=a(rh,"A",{href:!0});var hq=i(bp);c2=s(hq,"BertForMultipleChoice"),hq.forEach(t),p2=s(rh," forward method, overrides the "),Pm=a(rh,"CODE",{});var mq=i(Pm);h2=s(mq,"__call__"),mq.forEach(t),m2=s(rh," special method."),rh.forEach(t),f2=p(na),v(Cs.$$.fragment,na),u2=p(na),v(Ns.$$.fragment,na),na.forEach(t),Eo.forEach(t),S_=p(o),dn=a(o,"H2",{class:!0});var s1=i(dn);Os=a(s1,"A",{id:!0,class:!0,href:!0});var fq=i(Os);qm=a(fq,"SPAN",{});var uq=i(qm);v(Wi.$$.fragment,uq),uq.forEach(t),fq.forEach(t),g2=p(s1),jm=a(s1,"SPAN",{});var gq=i(jm);_2=s(gq,"BertForTokenClassification"),gq.forEach(t),s1.forEach(t),U_=p(o),pt=a(o,"DIV",{class:!0});var zo=i(pt);v(Hi.$$.fragment,zo),b2=p(zo),Cm=a(zo,"P",{});var _q=i(Cm);k2=s(_q,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),_q.forEach(t),y2=p(zo),Ri=a(zo,"P",{});var r1=i(Ri);T2=s(r1,"This model inherits from "),kp=a(r1,"A",{href:!0});var bq=i(kp);v2=s(bq,"PreTrainedModel"),bq.forEach(t),w2=s(r1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),r1.forEach(t),$2=p(zo),Vi=a(zo,"P",{});var a1=i(Vi);x2=s(a1,"This model is also a PyTorch "),Qi=a(a1,"A",{href:!0,rel:!0});var kq=i(Qi);F2=s(kq,"torch.nn.Module"),kq.forEach(t),B2=s(a1,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),a1.forEach(t),M2=p(zo),ft=a(zo,"DIV",{class:!0});var Po=i(ft);v(Ki.$$.fragment,Po),E2=p(Po),cn=a(Po,"P",{});var ah=i(cn);z2=s(ah,"The "),yp=a(ah,"A",{href:!0});var yq=i(yp);P2=s(yq,"BertForTokenClassification"),yq.forEach(t),q2=s(ah," forward method, overrides the "),Nm=a(ah,"CODE",{});var Tq=i(Nm);j2=s(Tq,"__call__"),Tq.forEach(t),C2=s(ah," special method."),ah.forEach(t),N2=p(Po),v(As.$$.fragment,Po),O2=p(Po),v(Is.$$.fragment,Po),A2=p(Po),v(Ls.$$.fragment,Po),Po.forEach(t),zo.forEach(t),W_=p(o),pn=a(o,"H2",{class:!0});var i1=i(pn);Ds=a(i1,"A",{id:!0,class:!0,href:!0});var vq=i(Ds);Om=a(vq,"SPAN",{});var wq=i(Om);v(Ji.$$.fragment,wq),wq.forEach(t),vq.forEach(t),I2=p(i1),Am=a(i1,"SPAN",{});var $q=i(Am);L2=s($q,"BertForQuestionAnswering"),$q.forEach(t),i1.forEach(t),H_=p(o),ht=a(o,"DIV",{class:!0});var qo=i(ht);v(Gi.$$.fragment,qo),D2=p(qo),hn=a(qo,"P",{});var ih=i(hn);S2=s(ih,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Im=a(ih,"CODE",{});var xq=i(Im);U2=s(xq,"span start logits"),xq.forEach(t),W2=s(ih," and "),Lm=a(ih,"CODE",{});var Fq=i(Lm);H2=s(Fq,"span end logits"),Fq.forEach(t),R2=s(ih,")."),ih.forEach(t),V2=p(qo),Xi=a(qo,"P",{});var l1=i(Xi);Q2=s(l1,"This model inherits from "),Tp=a(l1,"A",{href:!0});var Bq=i(Tp);K2=s(Bq,"PreTrainedModel"),Bq.forEach(t),J2=s(l1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),l1.forEach(t),G2=p(qo),Yi=a(qo,"P",{});var d1=i(Yi);X2=s(d1,"This model is also a PyTorch "),Zi=a(d1,"A",{href:!0,rel:!0});var Mq=i(Zi);Y2=s(Mq,"torch.nn.Module"),Mq.forEach(t),Z2=s(d1,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),d1.forEach(t),e$=p(qo),ut=a(qo,"DIV",{class:!0});var jo=i(ut);v(el.$$.fragment,jo),t$=p(jo),mn=a(jo,"P",{});var lh=i(mn);o$=s(lh,"The "),vp=a(lh,"A",{href:!0});var Eq=i(vp);n$=s(Eq,"BertForQuestionAnswering"),Eq.forEach(t),s$=s(lh," forward method, overrides the "),Dm=a(lh,"CODE",{});var zq=i(Dm);r$=s(zq,"__call__"),zq.forEach(t),a$=s(lh," special method."),lh.forEach(t),i$=p(jo),v(Ss.$$.fragment,jo),l$=p(jo),v(Us.$$.fragment,jo),d$=p(jo),v(Ws.$$.fragment,jo),jo.forEach(t),qo.forEach(t),R_=p(o),fn=a(o,"H2",{class:!0});var c1=i(fn);Hs=a(c1,"A",{id:!0,class:!0,href:!0});var Pq=i(Hs);Sm=a(Pq,"SPAN",{});var qq=i(Sm);v(tl.$$.fragment,qq),qq.forEach(t),Pq.forEach(t),c$=p(c1),Um=a(c1,"SPAN",{});var jq=i(Um);p$=s(jq,"TFBertModel"),jq.forEach(t),c1.forEach(t),V_=p(o),Ke=a(o,"DIV",{class:!0});var Zt=i(Ke);v(ol.$$.fragment,Zt),h$=p(Zt),Wm=a(Zt,"P",{});var Cq=i(Wm);m$=s(Cq,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Cq.forEach(t),f$=p(Zt),nl=a(Zt,"P",{});var p1=i(nl);u$=s(p1,"This model inherits from "),wp=a(p1,"A",{href:!0});var Nq=i(wp);g$=s(Nq,"TFPreTrainedModel"),Nq.forEach(t),_$=s(p1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),p1.forEach(t),b$=p(Zt),sl=a(Zt,"P",{});var h1=i(sl);k$=s(h1,"This model is also a "),rl=a(h1,"A",{href:!0,rel:!0});var Oq=i(rl);y$=s(Oq,"tf.keras.Model"),Oq.forEach(t),T$=s(h1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),h1.forEach(t),v$=p(Zt),v(Rs.$$.fragment,Zt),w$=p(Zt),St=a(Zt,"DIV",{class:!0});var sa=i(St);v(al.$$.fragment,sa),$$=p(sa),un=a(sa,"P",{});var dh=i(un);x$=s(dh,"The "),$p=a(dh,"A",{href:!0});var Aq=i($p);F$=s(Aq,"TFBertModel"),Aq.forEach(t),B$=s(dh," forward method, overrides the "),Hm=a(dh,"CODE",{});var Iq=i(Hm);M$=s(Iq,"__call__"),Iq.forEach(t),E$=s(dh," special method."),dh.forEach(t),z$=p(sa),v(Vs.$$.fragment,sa),P$=p(sa),v(Qs.$$.fragment,sa),sa.forEach(t),Zt.forEach(t),Q_=p(o),gn=a(o,"H2",{class:!0});var m1=i(gn);Ks=a(m1,"A",{id:!0,class:!0,href:!0});var Lq=i(Ks);Rm=a(Lq,"SPAN",{});var Dq=i(Rm);v(il.$$.fragment,Dq),Dq.forEach(t),Lq.forEach(t),q$=p(m1),Vm=a(m1,"SPAN",{});var Sq=i(Vm);j$=s(Sq,"TFBertForPreTraining"),Sq.forEach(t),m1.forEach(t),K_=p(o),Je=a(o,"DIV",{class:!0});var eo=i(Je);v(ll.$$.fragment,eo),C$=p(eo),_n=a(eo,"P",{});var ch=i(_n);N$=s(ch,`Bert Model with two heads on top as done during the pretraining:
a `),Qm=a(ch,"CODE",{});var Uq=i(Qm);O$=s(Uq,"masked language modeling"),Uq.forEach(t),A$=s(ch," head and a "),Km=a(ch,"CODE",{});var Wq=i(Km);I$=s(Wq,"next sentence prediction (classification)"),Wq.forEach(t),L$=s(ch," head."),ch.forEach(t),D$=p(eo),dl=a(eo,"P",{});var f1=i(dl);S$=s(f1,"This model inherits from "),xp=a(f1,"A",{href:!0});var Hq=i(xp);U$=s(Hq,"TFPreTrainedModel"),Hq.forEach(t),W$=s(f1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),f1.forEach(t),H$=p(eo),cl=a(eo,"P",{});var u1=i(cl);R$=s(u1,"This model is also a "),pl=a(u1,"A",{href:!0,rel:!0});var Rq=i(pl);V$=s(Rq,"tf.keras.Model"),Rq.forEach(t),Q$=s(u1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),u1.forEach(t),K$=p(eo),v(Js.$$.fragment,eo),J$=p(eo),Ut=a(eo,"DIV",{class:!0});var ra=i(Ut);v(hl.$$.fragment,ra),G$=p(ra),bn=a(ra,"P",{});var ph=i(bn);X$=s(ph,"The "),Fp=a(ph,"A",{href:!0});var Vq=i(Fp);Y$=s(Vq,"TFBertForPreTraining"),Vq.forEach(t),Z$=s(ph," forward method, overrides the "),Jm=a(ph,"CODE",{});var Qq=i(Jm);ex=s(Qq,"__call__"),Qq.forEach(t),tx=s(ph," special method."),ph.forEach(t),ox=p(ra),v(Gs.$$.fragment,ra),nx=p(ra),v(Xs.$$.fragment,ra),ra.forEach(t),eo.forEach(t),J_=p(o),kn=a(o,"H2",{class:!0});var g1=i(kn);Ys=a(g1,"A",{id:!0,class:!0,href:!0});var Kq=i(Ys);Gm=a(Kq,"SPAN",{});var Jq=i(Gm);v(ml.$$.fragment,Jq),Jq.forEach(t),Kq.forEach(t),sx=p(g1),Xm=a(g1,"SPAN",{});var Gq=i(Xm);rx=s(Gq,"TFBertModelLMHeadModel"),Gq.forEach(t),g1.forEach(t),G_=p(o),yn=a(o,"DIV",{class:!0});var _1=i(yn);v(fl.$$.fragment,_1),ax=p(_1),gt=a(_1,"DIV",{class:!0});var Co=i(gt);v(ul.$$.fragment,Co),ix=p(Co),Ae=a(Co,"P",{});var nt=i(Ae);lx=s(nt,"encoder_hidden_states  ("),Ym=a(nt,"CODE",{});var Xq=i(Ym);dx=s(Xq,"tf.Tensor"),Xq.forEach(t),cx=s(nt," of shape "),Zm=a(nt,"CODE",{});var Yq=i(Zm);px=s(Yq,"(batch_size, sequence_length, hidden_size)"),Yq.forEach(t),hx=s(nt,", "),ef=a(nt,"EM",{});var Zq=i(ef);mx=s(Zq,"optional"),Zq.forEach(t),fx=s(nt,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),tf=a(nt,"CODE",{});var e8=i(tf);ux=s(e8,"tf.Tensor"),e8.forEach(t),gx=s(nt," of shape "),of=a(nt,"CODE",{});var t8=i(of);_x=s(t8,"(batch_size, sequence_length)"),t8.forEach(t),bx=s(nt,", "),nf=a(nt,"EM",{});var o8=i(nf);kx=s(o8,"optional"),o8.forEach(t),yx=s(nt,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),sf=a(nt,"CODE",{});var n8=i(sf);Tx=s(n8,"[0, 1]"),n8.forEach(t),vx=s(nt,":"),nt.forEach(t),wx=p(Co),gl=a(Co,"UL",{});var b1=i(gl);_l=a(b1,"LI",{});var k1=i(_l);$x=s(k1,"1 for tokens that are "),rf=a(k1,"STRONG",{});var s8=i(rf);xx=s(s8,"not masked"),s8.forEach(t),Fx=s(k1,","),k1.forEach(t),Bx=p(b1),bl=a(b1,"LI",{});var y1=i(bl);Mx=s(y1,"0 for tokens that are "),af=a(y1,"STRONG",{});var r8=i(af);Ex=s(r8,"masked"),r8.forEach(t),zx=s(y1,"."),y1.forEach(t),b1.forEach(t),Px=p(Co),G=a(Co,"P",{});var Z=i(G);qx=s(Z,"past_key_values ("),lf=a(Z,"CODE",{});var a8=i(lf);jx=s(a8,"Tuple[Tuple[tf.Tensor]]"),a8.forEach(t),Cx=s(Z," of length "),df=a(Z,"CODE",{});var i8=i(df);Nx=s(i8,"config.n_layers"),i8.forEach(t),Ox=s(Z,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),cf=a(Z,"CODE",{});var l8=i(cf);Ax=s(l8,"past_key_values"),l8.forEach(t),Ix=s(Z," are used, the user can optionally input only the last "),pf=a(Z,"CODE",{});var d8=i(pf);Lx=s(d8,"decoder_input_ids"),d8.forEach(t),Dx=s(Z,` (those that
don\u2019t have their past key value states given to this model) of shape `),hf=a(Z,"CODE",{});var c8=i(hf);Sx=s(c8,"(batch_size, 1)"),c8.forEach(t),Ux=s(Z,` instead of all
`),mf=a(Z,"CODE",{});var p8=i(mf);Wx=s(p8,"decoder_input_ids"),p8.forEach(t),Hx=s(Z," of shape "),ff=a(Z,"CODE",{});var h8=i(ff);Rx=s(h8,"(batch_size, sequence_length)"),h8.forEach(t),Vx=s(Z,`.
use_cache (`),uf=a(Z,"CODE",{});var m8=i(uf);Qx=s(m8,"bool"),m8.forEach(t),Kx=s(Z,", "),gf=a(Z,"EM",{});var f8=i(gf);Jx=s(f8,"optional"),f8.forEach(t),Gx=s(Z,", defaults to "),_f=a(Z,"CODE",{});var u8=i(_f);Xx=s(u8,"True"),u8.forEach(t),Yx=s(Z,`):
If set to `),bf=a(Z,"CODE",{});var g8=i(bf);Zx=s(g8,"True"),g8.forEach(t),eF=s(Z,", "),kf=a(Z,"CODE",{});var _8=i(kf);tF=s(_8,"past_key_values"),_8.forEach(t),oF=s(Z,` key value states are returned and can be used to speed up decoding (see
`),yf=a(Z,"CODE",{});var b8=i(yf);nF=s(b8,"past_key_values"),b8.forEach(t),sF=s(Z,"). Set to "),Tf=a(Z,"CODE",{});var k8=i(Tf);rF=s(k8,"False"),k8.forEach(t),aF=s(Z," during training, "),vf=a(Z,"CODE",{});var y8=i(vf);iF=s(y8,"True"),y8.forEach(t),lF=s(Z,` during generation
labels (`),wf=a(Z,"CODE",{});var T8=i(wf);dF=s(T8,"tf.Tensor"),T8.forEach(t),cF=s(Z," or "),$f=a(Z,"CODE",{});var v8=i($f);pF=s(v8,"np.ndarray"),v8.forEach(t),hF=s(Z," of shape "),xf=a(Z,"CODE",{});var w8=i(xf);mF=s(w8,"(batch_size, sequence_length)"),w8.forEach(t),fF=s(Z,", "),Ff=a(Z,"EM",{});var $8=i(Ff);uF=s($8,"optional"),$8.forEach(t),gF=s(Z,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Bf=a(Z,"CODE",{});var x8=i(Bf);_F=s(x8,"[0, ..., config.vocab_size - 1]"),x8.forEach(t),bF=s(Z,"."),Z.forEach(t),kF=p(Co),v(Zs.$$.fragment,Co),Co.forEach(t),_1.forEach(t),X_=p(o),Tn=a(o,"H2",{class:!0});var T1=i(Tn);er=a(T1,"A",{id:!0,class:!0,href:!0});var F8=i(er);Mf=a(F8,"SPAN",{});var B8=i(Mf);v(kl.$$.fragment,B8),B8.forEach(t),F8.forEach(t),yF=p(T1),Ef=a(T1,"SPAN",{});var M8=i(Ef);TF=s(M8,"TFBertForMaskedLM"),M8.forEach(t),T1.forEach(t),Y_=p(o),Ge=a(o,"DIV",{class:!0});var to=i(Ge);v(yl.$$.fragment,to),vF=p(to),Tl=a(to,"P",{});var v1=i(Tl);wF=s(v1,"Bert Model with a "),zf=a(v1,"CODE",{});var E8=i(zf);$F=s(E8,"language modeling"),E8.forEach(t),xF=s(v1," head on top."),v1.forEach(t),FF=p(to),vl=a(to,"P",{});var w1=i(vl);BF=s(w1,"This model inherits from "),Bp=a(w1,"A",{href:!0});var z8=i(Bp);MF=s(z8,"TFPreTrainedModel"),z8.forEach(t),EF=s(w1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),w1.forEach(t),zF=p(to),wl=a(to,"P",{});var $1=i(wl);PF=s($1,"This model is also a "),$l=a($1,"A",{href:!0,rel:!0});var P8=i($l);qF=s(P8,"tf.keras.Model"),P8.forEach(t),jF=s($1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$1.forEach(t),CF=p(to),v(tr.$$.fragment,to),NF=p(to),_t=a(to,"DIV",{class:!0});var No=i(_t);v(xl.$$.fragment,No),OF=p(No),vn=a(No,"P",{});var hh=i(vn);AF=s(hh,"The "),Mp=a(hh,"A",{href:!0});var q8=i(Mp);IF=s(q8,"TFBertForMaskedLM"),q8.forEach(t),LF=s(hh," forward method, overrides the "),Pf=a(hh,"CODE",{});var j8=i(Pf);DF=s(j8,"__call__"),j8.forEach(t),SF=s(hh," special method."),hh.forEach(t),UF=p(No),v(or.$$.fragment,No),WF=p(No),v(nr.$$.fragment,No),HF=p(No),v(sr.$$.fragment,No),No.forEach(t),to.forEach(t),Z_=p(o),wn=a(o,"H2",{class:!0});var x1=i(wn);rr=a(x1,"A",{id:!0,class:!0,href:!0});var C8=i(rr);qf=a(C8,"SPAN",{});var N8=i(qf);v(Fl.$$.fragment,N8),N8.forEach(t),C8.forEach(t),RF=p(x1),jf=a(x1,"SPAN",{});var O8=i(jf);VF=s(O8,"TFBertForNextSentencePrediction"),O8.forEach(t),x1.forEach(t),eb=p(o),Xe=a(o,"DIV",{class:!0});var oo=i(Xe);v(Bl.$$.fragment,oo),QF=p(oo),Ml=a(oo,"P",{});var F1=i(Ml);KF=s(F1,"Bert Model with a "),Cf=a(F1,"CODE",{});var A8=i(Cf);JF=s(A8,"next sentence prediction (classification)"),A8.forEach(t),GF=s(F1," head on top."),F1.forEach(t),XF=p(oo),El=a(oo,"P",{});var B1=i(El);YF=s(B1,"This model inherits from "),Ep=a(B1,"A",{href:!0});var I8=i(Ep);ZF=s(I8,"TFPreTrainedModel"),I8.forEach(t),e0=s(B1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),B1.forEach(t),t0=p(oo),zl=a(oo,"P",{});var M1=i(zl);o0=s(M1,"This model is also a "),Pl=a(M1,"A",{href:!0,rel:!0});var L8=i(Pl);n0=s(L8,"tf.keras.Model"),L8.forEach(t),s0=s(M1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),M1.forEach(t),r0=p(oo),v(ar.$$.fragment,oo),a0=p(oo),Wt=a(oo,"DIV",{class:!0});var aa=i(Wt);v(ql.$$.fragment,aa),i0=p(aa),$n=a(aa,"P",{});var mh=i($n);l0=s(mh,"The "),zp=a(mh,"A",{href:!0});var D8=i(zp);d0=s(D8,"TFBertForNextSentencePrediction"),D8.forEach(t),c0=s(mh," forward method, overrides the "),Nf=a(mh,"CODE",{});var S8=i(Nf);p0=s(S8,"__call__"),S8.forEach(t),h0=s(mh," special method."),mh.forEach(t),m0=p(aa),v(ir.$$.fragment,aa),f0=p(aa),v(lr.$$.fragment,aa),aa.forEach(t),oo.forEach(t),tb=p(o),xn=a(o,"H2",{class:!0});var E1=i(xn);dr=a(E1,"A",{id:!0,class:!0,href:!0});var U8=i(dr);Of=a(U8,"SPAN",{});var W8=i(Of);v(jl.$$.fragment,W8),W8.forEach(t),U8.forEach(t),u0=p(E1),Af=a(E1,"SPAN",{});var H8=i(Af);g0=s(H8,"TFBertForSequenceClassification"),H8.forEach(t),E1.forEach(t),ob=p(o),Ye=a(o,"DIV",{class:!0});var no=i(Ye);v(Cl.$$.fragment,no),_0=p(no),If=a(no,"P",{});var R8=i(If);b0=s(R8,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),R8.forEach(t),k0=p(no),Nl=a(no,"P",{});var z1=i(Nl);y0=s(z1,"This model inherits from "),Pp=a(z1,"A",{href:!0});var V8=i(Pp);T0=s(V8,"TFPreTrainedModel"),V8.forEach(t),v0=s(z1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),z1.forEach(t),w0=p(no),Ol=a(no,"P",{});var P1=i(Ol);$0=s(P1,"This model is also a "),Al=a(P1,"A",{href:!0,rel:!0});var Q8=i(Al);x0=s(Q8,"tf.keras.Model"),Q8.forEach(t),F0=s(P1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),P1.forEach(t),B0=p(no),v(cr.$$.fragment,no),M0=p(no),bt=a(no,"DIV",{class:!0});var Oo=i(bt);v(Il.$$.fragment,Oo),E0=p(Oo),Fn=a(Oo,"P",{});var fh=i(Fn);z0=s(fh,"The "),qp=a(fh,"A",{href:!0});var K8=i(qp);P0=s(K8,"TFBertForSequenceClassification"),K8.forEach(t),q0=s(fh," forward method, overrides the "),Lf=a(fh,"CODE",{});var J8=i(Lf);j0=s(J8,"__call__"),J8.forEach(t),C0=s(fh," special method."),fh.forEach(t),N0=p(Oo),v(pr.$$.fragment,Oo),O0=p(Oo),v(hr.$$.fragment,Oo),A0=p(Oo),v(mr.$$.fragment,Oo),Oo.forEach(t),no.forEach(t),nb=p(o),Bn=a(o,"H2",{class:!0});var q1=i(Bn);fr=a(q1,"A",{id:!0,class:!0,href:!0});var G8=i(fr);Df=a(G8,"SPAN",{});var X8=i(Df);v(Ll.$$.fragment,X8),X8.forEach(t),G8.forEach(t),I0=p(q1),Sf=a(q1,"SPAN",{});var Y8=i(Sf);L0=s(Y8,"TFBertForMultipleChoice"),Y8.forEach(t),q1.forEach(t),sb=p(o),Ze=a(o,"DIV",{class:!0});var so=i(Ze);v(Dl.$$.fragment,so),D0=p(so),Uf=a(so,"P",{});var Z8=i(Uf);S0=s(Z8,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Z8.forEach(t),U0=p(so),Sl=a(so,"P",{});var j1=i(Sl);W0=s(j1,"This model inherits from "),jp=a(j1,"A",{href:!0});var ej=i(jp);H0=s(ej,"TFPreTrainedModel"),ej.forEach(t),R0=s(j1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),j1.forEach(t),V0=p(so),Ul=a(so,"P",{});var C1=i(Ul);Q0=s(C1,"This model is also a "),Wl=a(C1,"A",{href:!0,rel:!0});var tj=i(Wl);K0=s(tj,"tf.keras.Model"),tj.forEach(t),J0=s(C1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),C1.forEach(t),G0=p(so),v(ur.$$.fragment,so),X0=p(so),Ht=a(so,"DIV",{class:!0});var ia=i(Ht);v(Hl.$$.fragment,ia),Y0=p(ia),Mn=a(ia,"P",{});var uh=i(Mn);Z0=s(uh,"The "),Cp=a(uh,"A",{href:!0});var oj=i(Cp);eB=s(oj,"TFBertForMultipleChoice"),oj.forEach(t),tB=s(uh," forward method, overrides the "),Wf=a(uh,"CODE",{});var nj=i(Wf);oB=s(nj,"__call__"),nj.forEach(t),nB=s(uh," special method."),uh.forEach(t),sB=p(ia),v(gr.$$.fragment,ia),rB=p(ia),v(_r.$$.fragment,ia),ia.forEach(t),so.forEach(t),rb=p(o),En=a(o,"H2",{class:!0});var N1=i(En);br=a(N1,"A",{id:!0,class:!0,href:!0});var sj=i(br);Hf=a(sj,"SPAN",{});var rj=i(Hf);v(Rl.$$.fragment,rj),rj.forEach(t),sj.forEach(t),aB=p(N1),Rf=a(N1,"SPAN",{});var aj=i(Rf);iB=s(aj,"TFBertForTokenClassification"),aj.forEach(t),N1.forEach(t),ab=p(o),et=a(o,"DIV",{class:!0});var ro=i(et);v(Vl.$$.fragment,ro),lB=p(ro),Vf=a(ro,"P",{});var ij=i(Vf);dB=s(ij,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ij.forEach(t),cB=p(ro),Ql=a(ro,"P",{});var O1=i(Ql);pB=s(O1,"This model inherits from "),Np=a(O1,"A",{href:!0});var lj=i(Np);hB=s(lj,"TFPreTrainedModel"),lj.forEach(t),mB=s(O1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),O1.forEach(t),fB=p(ro),Kl=a(ro,"P",{});var A1=i(Kl);uB=s(A1,"This model is also a "),Jl=a(A1,"A",{href:!0,rel:!0});var dj=i(Jl);gB=s(dj,"tf.keras.Model"),dj.forEach(t),_B=s(A1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),A1.forEach(t),bB=p(ro),v(kr.$$.fragment,ro),kB=p(ro),kt=a(ro,"DIV",{class:!0});var Ao=i(kt);v(Gl.$$.fragment,Ao),yB=p(Ao),zn=a(Ao,"P",{});var gh=i(zn);TB=s(gh,"The "),Op=a(gh,"A",{href:!0});var cj=i(Op);vB=s(cj,"TFBertForTokenClassification"),cj.forEach(t),wB=s(gh," forward method, overrides the "),Qf=a(gh,"CODE",{});var pj=i(Qf);$B=s(pj,"__call__"),pj.forEach(t),xB=s(gh," special method."),gh.forEach(t),FB=p(Ao),v(yr.$$.fragment,Ao),BB=p(Ao),v(Tr.$$.fragment,Ao),MB=p(Ao),v(vr.$$.fragment,Ao),Ao.forEach(t),ro.forEach(t),ib=p(o),Pn=a(o,"H2",{class:!0});var I1=i(Pn);wr=a(I1,"A",{id:!0,class:!0,href:!0});var hj=i(wr);Kf=a(hj,"SPAN",{});var mj=i(Kf);v(Xl.$$.fragment,mj),mj.forEach(t),hj.forEach(t),EB=p(I1),Jf=a(I1,"SPAN",{});var fj=i(Jf);zB=s(fj,"TFBertForQuestionAnswering"),fj.forEach(t),I1.forEach(t),lb=p(o),tt=a(o,"DIV",{class:!0});var ao=i(tt);v(Yl.$$.fragment,ao),PB=p(ao),qn=a(ao,"P",{});var _h=i(qn);qB=s(_h,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Gf=a(_h,"CODE",{});var uj=i(Gf);jB=s(uj,"span start logits"),uj.forEach(t),CB=s(_h," and "),Xf=a(_h,"CODE",{});var gj=i(Xf);NB=s(gj,"span end logits"),gj.forEach(t),OB=s(_h,")."),_h.forEach(t),AB=p(ao),Zl=a(ao,"P",{});var L1=i(Zl);IB=s(L1,"This model inherits from "),Ap=a(L1,"A",{href:!0});var _j=i(Ap);LB=s(_j,"TFPreTrainedModel"),_j.forEach(t),DB=s(L1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),L1.forEach(t),SB=p(ao),ed=a(ao,"P",{});var D1=i(ed);UB=s(D1,"This model is also a "),td=a(D1,"A",{href:!0,rel:!0});var bj=i(td);WB=s(bj,"tf.keras.Model"),bj.forEach(t),HB=s(D1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),D1.forEach(t),RB=p(ao),v($r.$$.fragment,ao),VB=p(ao),yt=a(ao,"DIV",{class:!0});var Io=i(yt);v(od.$$.fragment,Io),QB=p(Io),jn=a(Io,"P",{});var bh=i(jn);KB=s(bh,"The "),Ip=a(bh,"A",{href:!0});var kj=i(Ip);JB=s(kj,"TFBertForQuestionAnswering"),kj.forEach(t),GB=s(bh," forward method, overrides the "),Yf=a(bh,"CODE",{});var yj=i(Yf);XB=s(yj,"__call__"),yj.forEach(t),YB=s(bh," special method."),bh.forEach(t),ZB=p(Io),v(xr.$$.fragment,Io),eM=p(Io),v(Fr.$$.fragment,Io),tM=p(Io),v(Br.$$.fragment,Io),Io.forEach(t),ao.forEach(t),db=p(o),Cn=a(o,"H2",{class:!0});var S1=i(Cn);Mr=a(S1,"A",{id:!0,class:!0,href:!0});var Tj=i(Mr);Zf=a(Tj,"SPAN",{});var vj=i(Zf);v(nd.$$.fragment,vj),vj.forEach(t),Tj.forEach(t),oM=p(S1),eu=a(S1,"SPAN",{});var wj=i(eu);nM=s(wj,"FlaxBertModel"),wj.forEach(t),S1.forEach(t),cb=p(o),Ie=a(o,"DIV",{class:!0});var $t=i(Ie);v(sd.$$.fragment,$t),sM=p($t),tu=a($t,"P",{});var $j=i(tu);rM=s($j,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),$j.forEach(t),aM=p($t),rd=a($t,"P",{});var U1=i(rd);iM=s(U1,"This model inherits from "),Lp=a(U1,"A",{href:!0});var xj=i(Lp);lM=s(xj,"FlaxPreTrainedModel"),xj.forEach(t),dM=s(U1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),U1.forEach(t),cM=p($t),ad=a($t,"P",{});var W1=i(ad);pM=s(W1,"This model is also a Flax Linen "),id=a(W1,"A",{href:!0,rel:!0});var Fj=i(id);hM=s(Fj,"flax.linen.Module"),Fj.forEach(t),mM=s(W1,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),W1.forEach(t),fM=p($t),ou=a($t,"P",{});var Bj=i(ou);uM=s(Bj,"Finally, this model supports inherent JAX features such as:"),Bj.forEach(t),gM=p($t),co=a($t,"UL",{});var la=i(co);nu=a(la,"LI",{});var Mj=i(nu);ld=a(Mj,"A",{href:!0,rel:!0});var Ej=i(ld);_M=s(Ej,"Just-In-Time (JIT) compilation"),Ej.forEach(t),Mj.forEach(t),bM=p(la),su=a(la,"LI",{});var zj=i(su);dd=a(zj,"A",{href:!0,rel:!0});var Pj=i(dd);kM=s(Pj,"Automatic Differentiation"),Pj.forEach(t),zj.forEach(t),yM=p(la),ru=a(la,"LI",{});var qj=i(ru);cd=a(qj,"A",{href:!0,rel:!0});var jj=i(cd);TM=s(jj,"Vectorization"),jj.forEach(t),qj.forEach(t),vM=p(la),au=a(la,"LI",{});var Cj=i(au);pd=a(Cj,"A",{href:!0,rel:!0});var Nj=i(pd);wM=s(Nj,"Parallelization"),Nj.forEach(t),Cj.forEach(t),la.forEach(t),$M=p($t),Rt=a($t,"DIV",{class:!0});var da=i(Rt);v(hd.$$.fragment,da),xM=p(da),Nn=a(da,"P",{});var kh=i(Nn);FM=s(kh,"The "),iu=a(kh,"CODE",{});var Oj=i(iu);BM=s(Oj,"FlaxBertPreTrainedModel"),Oj.forEach(t),MM=s(kh," forward method, overrides the "),lu=a(kh,"CODE",{});var Aj=i(lu);EM=s(Aj,"__call__"),Aj.forEach(t),zM=s(kh," special method."),kh.forEach(t),PM=p(da),v(Er.$$.fragment,da),qM=p(da),v(zr.$$.fragment,da),da.forEach(t),$t.forEach(t),pb=p(o),On=a(o,"H2",{class:!0});var H1=i(On);Pr=a(H1,"A",{id:!0,class:!0,href:!0});var Ij=i(Pr);du=a(Ij,"SPAN",{});var Lj=i(du);v(md.$$.fragment,Lj),Lj.forEach(t),Ij.forEach(t),jM=p(H1),cu=a(H1,"SPAN",{});var Dj=i(cu);CM=s(Dj,"FlaxBertForPreTraining"),Dj.forEach(t),H1.forEach(t),hb=p(o),Le=a(o,"DIV",{class:!0});var xt=i(Le);v(fd.$$.fragment,xt),NM=p(xt),An=a(xt,"P",{});var yh=i(An);OM=s(yh,"Bert Model with two heads on top as done during the pretraining: a "),pu=a(yh,"CODE",{});var Sj=i(pu);AM=s(Sj,"masked language modeling"),Sj.forEach(t),IM=s(yh," head and a "),hu=a(yh,"CODE",{});var Uj=i(hu);LM=s(Uj,"next sentence prediction (classification)"),Uj.forEach(t),DM=s(yh," head."),yh.forEach(t),SM=p(xt),ud=a(xt,"P",{});var R1=i(ud);UM=s(R1,"This model inherits from "),Dp=a(R1,"A",{href:!0});var Wj=i(Dp);WM=s(Wj,"FlaxPreTrainedModel"),Wj.forEach(t),HM=s(R1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),R1.forEach(t),RM=p(xt),gd=a(xt,"P",{});var V1=i(gd);VM=s(V1,"This model is also a Flax Linen "),_d=a(V1,"A",{href:!0,rel:!0});var Hj=i(_d);QM=s(Hj,"flax.linen.Module"),Hj.forEach(t),KM=s(V1,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),V1.forEach(t),JM=p(xt),mu=a(xt,"P",{});var Rj=i(mu);GM=s(Rj,"Finally, this model supports inherent JAX features such as:"),Rj.forEach(t),XM=p(xt),po=a(xt,"UL",{});var ca=i(po);fu=a(ca,"LI",{});var Vj=i(fu);bd=a(Vj,"A",{href:!0,rel:!0});var Qj=i(bd);YM=s(Qj,"Just-In-Time (JIT) compilation"),Qj.forEach(t),Vj.forEach(t),ZM=p(ca),uu=a(ca,"LI",{});var Kj=i(uu);kd=a(Kj,"A",{href:!0,rel:!0});var Jj=i(kd);eE=s(Jj,"Automatic Differentiation"),Jj.forEach(t),Kj.forEach(t),tE=p(ca),gu=a(ca,"LI",{});var Gj=i(gu);yd=a(Gj,"A",{href:!0,rel:!0});var Xj=i(yd);oE=s(Xj,"Vectorization"),Xj.forEach(t),Gj.forEach(t),nE=p(ca),_u=a(ca,"LI",{});var Yj=i(_u);Td=a(Yj,"A",{href:!0,rel:!0});var Zj=i(Td);sE=s(Zj,"Parallelization"),Zj.forEach(t),Yj.forEach(t),ca.forEach(t),rE=p(xt),Vt=a(xt,"DIV",{class:!0});var pa=i(Vt);v(vd.$$.fragment,pa),aE=p(pa),In=a(pa,"P",{});var Th=i(In);iE=s(Th,"The "),bu=a(Th,"CODE",{});var eC=i(bu);lE=s(eC,"FlaxBertPreTrainedModel"),eC.forEach(t),dE=s(Th," forward method, overrides the "),ku=a(Th,"CODE",{});var tC=i(ku);cE=s(tC,"__call__"),tC.forEach(t),pE=s(Th," special method."),Th.forEach(t),hE=p(pa),v(qr.$$.fragment,pa),mE=p(pa),v(jr.$$.fragment,pa),pa.forEach(t),xt.forEach(t),mb=p(o),Ln=a(o,"H2",{class:!0});var Q1=i(Ln);Cr=a(Q1,"A",{id:!0,class:!0,href:!0});var oC=i(Cr);yu=a(oC,"SPAN",{});var nC=i(yu);v(wd.$$.fragment,nC),nC.forEach(t),oC.forEach(t),fE=p(Q1),Tu=a(Q1,"SPAN",{});var sC=i(Tu);uE=s(sC,"FlaxBertForMaskedLM"),sC.forEach(t),Q1.forEach(t),fb=p(o),De=a(o,"DIV",{class:!0});var Ft=i(De);v($d.$$.fragment,Ft),gE=p(Ft),xd=a(Ft,"P",{});var K1=i(xd);_E=s(K1,"Bert Model with a "),vu=a(K1,"CODE",{});var rC=i(vu);bE=s(rC,"language modeling"),rC.forEach(t),kE=s(K1," head on top."),K1.forEach(t),yE=p(Ft),Fd=a(Ft,"P",{});var J1=i(Fd);TE=s(J1,"This model inherits from "),Sp=a(J1,"A",{href:!0});var aC=i(Sp);vE=s(aC,"FlaxPreTrainedModel"),aC.forEach(t),wE=s(J1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),J1.forEach(t),$E=p(Ft),Bd=a(Ft,"P",{});var G1=i(Bd);xE=s(G1,"This model is also a Flax Linen "),Md=a(G1,"A",{href:!0,rel:!0});var iC=i(Md);FE=s(iC,"flax.linen.Module"),iC.forEach(t),BE=s(G1,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),G1.forEach(t),ME=p(Ft),wu=a(Ft,"P",{});var lC=i(wu);EE=s(lC,"Finally, this model supports inherent JAX features such as:"),lC.forEach(t),zE=p(Ft),ho=a(Ft,"UL",{});var ha=i(ho);$u=a(ha,"LI",{});var dC=i($u);Ed=a(dC,"A",{href:!0,rel:!0});var cC=i(Ed);PE=s(cC,"Just-In-Time (JIT) compilation"),cC.forEach(t),dC.forEach(t),qE=p(ha),xu=a(ha,"LI",{});var pC=i(xu);zd=a(pC,"A",{href:!0,rel:!0});var hC=i(zd);jE=s(hC,"Automatic Differentiation"),hC.forEach(t),pC.forEach(t),CE=p(ha),Fu=a(ha,"LI",{});var mC=i(Fu);Pd=a(mC,"A",{href:!0,rel:!0});var fC=i(Pd);NE=s(fC,"Vectorization"),fC.forEach(t),mC.forEach(t),OE=p(ha),Bu=a(ha,"LI",{});var uC=i(Bu);qd=a(uC,"A",{href:!0,rel:!0});var gC=i(qd);AE=s(gC,"Parallelization"),gC.forEach(t),uC.forEach(t),ha.forEach(t),IE=p(Ft),Qt=a(Ft,"DIV",{class:!0});var ma=i(Qt);v(jd.$$.fragment,ma),LE=p(ma),Dn=a(ma,"P",{});var vh=i(Dn);DE=s(vh,"The "),Mu=a(vh,"CODE",{});var _C=i(Mu);SE=s(_C,"FlaxBertPreTrainedModel"),_C.forEach(t),UE=s(vh," forward method, overrides the "),Eu=a(vh,"CODE",{});var bC=i(Eu);WE=s(bC,"__call__"),bC.forEach(t),HE=s(vh," special method."),vh.forEach(t),RE=p(ma),v(Nr.$$.fragment,ma),VE=p(ma),v(Or.$$.fragment,ma),ma.forEach(t),Ft.forEach(t),ub=p(o),Sn=a(o,"H2",{class:!0});var X1=i(Sn);Ar=a(X1,"A",{id:!0,class:!0,href:!0});var kC=i(Ar);zu=a(kC,"SPAN",{});var yC=i(zu);v(Cd.$$.fragment,yC),yC.forEach(t),kC.forEach(t),QE=p(X1),Pu=a(X1,"SPAN",{});var TC=i(Pu);KE=s(TC,"FlaxBertForNextSentencePrediction"),TC.forEach(t),X1.forEach(t),gb=p(o),Se=a(o,"DIV",{class:!0});var Bt=i(Se);v(Nd.$$.fragment,Bt),JE=p(Bt),Od=a(Bt,"P",{});var Y1=i(Od);GE=s(Y1,"Bert Model with a "),qu=a(Y1,"CODE",{});var vC=i(qu);XE=s(vC,"next sentence prediction (classification)"),vC.forEach(t),YE=s(Y1," head on top."),Y1.forEach(t),ZE=p(Bt),Ad=a(Bt,"P",{});var Z1=i(Ad);e6=s(Z1,"This model inherits from "),Up=a(Z1,"A",{href:!0});var wC=i(Up);t6=s(wC,"FlaxPreTrainedModel"),wC.forEach(t),o6=s(Z1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Z1.forEach(t),n6=p(Bt),Id=a(Bt,"P",{});var ek=i(Id);s6=s(ek,"This model is also a Flax Linen "),Ld=a(ek,"A",{href:!0,rel:!0});var $C=i(Ld);r6=s($C,"flax.linen.Module"),$C.forEach(t),a6=s(ek,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ek.forEach(t),i6=p(Bt),ju=a(Bt,"P",{});var xC=i(ju);l6=s(xC,"Finally, this model supports inherent JAX features such as:"),xC.forEach(t),d6=p(Bt),mo=a(Bt,"UL",{});var fa=i(mo);Cu=a(fa,"LI",{});var FC=i(Cu);Dd=a(FC,"A",{href:!0,rel:!0});var BC=i(Dd);c6=s(BC,"Just-In-Time (JIT) compilation"),BC.forEach(t),FC.forEach(t),p6=p(fa),Nu=a(fa,"LI",{});var MC=i(Nu);Sd=a(MC,"A",{href:!0,rel:!0});var EC=i(Sd);h6=s(EC,"Automatic Differentiation"),EC.forEach(t),MC.forEach(t),m6=p(fa),Ou=a(fa,"LI",{});var zC=i(Ou);Ud=a(zC,"A",{href:!0,rel:!0});var PC=i(Ud);f6=s(PC,"Vectorization"),PC.forEach(t),zC.forEach(t),u6=p(fa),Au=a(fa,"LI",{});var qC=i(Au);Wd=a(qC,"A",{href:!0,rel:!0});var jC=i(Wd);g6=s(jC,"Parallelization"),jC.forEach(t),qC.forEach(t),fa.forEach(t),_6=p(Bt),Kt=a(Bt,"DIV",{class:!0});var ua=i(Kt);v(Hd.$$.fragment,ua),b6=p(ua),Un=a(ua,"P",{});var wh=i(Un);k6=s(wh,"The "),Iu=a(wh,"CODE",{});var CC=i(Iu);y6=s(CC,"FlaxBertPreTrainedModel"),CC.forEach(t),T6=s(wh," forward method, overrides the "),Lu=a(wh,"CODE",{});var NC=i(Lu);v6=s(NC,"__call__"),NC.forEach(t),w6=s(wh," special method."),wh.forEach(t),$6=p(ua),v(Ir.$$.fragment,ua),x6=p(ua),v(Lr.$$.fragment,ua),ua.forEach(t),Bt.forEach(t),_b=p(o),Wn=a(o,"H2",{class:!0});var tk=i(Wn);Dr=a(tk,"A",{id:!0,class:!0,href:!0});var OC=i(Dr);Du=a(OC,"SPAN",{});var AC=i(Du);v(Rd.$$.fragment,AC),AC.forEach(t),OC.forEach(t),F6=p(tk),Su=a(tk,"SPAN",{});var IC=i(Su);B6=s(IC,"FlaxBertForSequenceClassification"),IC.forEach(t),tk.forEach(t),bb=p(o),Ue=a(o,"DIV",{class:!0});var Mt=i(Ue);v(Vd.$$.fragment,Mt),M6=p(Mt),Uu=a(Mt,"P",{});var LC=i(Uu);E6=s(LC,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),LC.forEach(t),z6=p(Mt),Qd=a(Mt,"P",{});var ok=i(Qd);P6=s(ok,"This model inherits from "),Wp=a(ok,"A",{href:!0});var DC=i(Wp);q6=s(DC,"FlaxPreTrainedModel"),DC.forEach(t),j6=s(ok,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ok.forEach(t),C6=p(Mt),Kd=a(Mt,"P",{});var nk=i(Kd);N6=s(nk,"This model is also a Flax Linen "),Jd=a(nk,"A",{href:!0,rel:!0});var SC=i(Jd);O6=s(SC,"flax.linen.Module"),SC.forEach(t),A6=s(nk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),nk.forEach(t),I6=p(Mt),Wu=a(Mt,"P",{});var UC=i(Wu);L6=s(UC,"Finally, this model supports inherent JAX features such as:"),UC.forEach(t),D6=p(Mt),fo=a(Mt,"UL",{});var ga=i(fo);Hu=a(ga,"LI",{});var WC=i(Hu);Gd=a(WC,"A",{href:!0,rel:!0});var HC=i(Gd);S6=s(HC,"Just-In-Time (JIT) compilation"),HC.forEach(t),WC.forEach(t),U6=p(ga),Ru=a(ga,"LI",{});var RC=i(Ru);Xd=a(RC,"A",{href:!0,rel:!0});var VC=i(Xd);W6=s(VC,"Automatic Differentiation"),VC.forEach(t),RC.forEach(t),H6=p(ga),Vu=a(ga,"LI",{});var QC=i(Vu);Yd=a(QC,"A",{href:!0,rel:!0});var KC=i(Yd);R6=s(KC,"Vectorization"),KC.forEach(t),QC.forEach(t),V6=p(ga),Qu=a(ga,"LI",{});var JC=i(Qu);Zd=a(JC,"A",{href:!0,rel:!0});var GC=i(Zd);Q6=s(GC,"Parallelization"),GC.forEach(t),JC.forEach(t),ga.forEach(t),K6=p(Mt),Jt=a(Mt,"DIV",{class:!0});var _a=i(Jt);v(ec.$$.fragment,_a),J6=p(_a),Hn=a(_a,"P",{});var $h=i(Hn);G6=s($h,"The "),Ku=a($h,"CODE",{});var XC=i(Ku);X6=s(XC,"FlaxBertPreTrainedModel"),XC.forEach(t),Y6=s($h," forward method, overrides the "),Ju=a($h,"CODE",{});var YC=i(Ju);Z6=s(YC,"__call__"),YC.forEach(t),ez=s($h," special method."),$h.forEach(t),tz=p(_a),v(Sr.$$.fragment,_a),oz=p(_a),v(Ur.$$.fragment,_a),_a.forEach(t),Mt.forEach(t),kb=p(o),Rn=a(o,"H2",{class:!0});var sk=i(Rn);Wr=a(sk,"A",{id:!0,class:!0,href:!0});var ZC=i(Wr);Gu=a(ZC,"SPAN",{});var e3=i(Gu);v(tc.$$.fragment,e3),e3.forEach(t),ZC.forEach(t),nz=p(sk),Xu=a(sk,"SPAN",{});var t3=i(Xu);sz=s(t3,"FlaxBertForMultipleChoice"),t3.forEach(t),sk.forEach(t),yb=p(o),We=a(o,"DIV",{class:!0});var Et=i(We);v(oc.$$.fragment,Et),rz=p(Et),Yu=a(Et,"P",{});var o3=i(Yu);az=s(o3,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),o3.forEach(t),iz=p(Et),nc=a(Et,"P",{});var rk=i(nc);lz=s(rk,"This model inherits from "),Hp=a(rk,"A",{href:!0});var n3=i(Hp);dz=s(n3,"FlaxPreTrainedModel"),n3.forEach(t),cz=s(rk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rk.forEach(t),pz=p(Et),sc=a(Et,"P",{});var ak=i(sc);hz=s(ak,"This model is also a Flax Linen "),rc=a(ak,"A",{href:!0,rel:!0});var s3=i(rc);mz=s(s3,"flax.linen.Module"),s3.forEach(t),fz=s(ak,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ak.forEach(t),uz=p(Et),Zu=a(Et,"P",{});var r3=i(Zu);gz=s(r3,"Finally, this model supports inherent JAX features such as:"),r3.forEach(t),_z=p(Et),uo=a(Et,"UL",{});var ba=i(uo);eg=a(ba,"LI",{});var a3=i(eg);ac=a(a3,"A",{href:!0,rel:!0});var i3=i(ac);bz=s(i3,"Just-In-Time (JIT) compilation"),i3.forEach(t),a3.forEach(t),kz=p(ba),tg=a(ba,"LI",{});var l3=i(tg);ic=a(l3,"A",{href:!0,rel:!0});var d3=i(ic);yz=s(d3,"Automatic Differentiation"),d3.forEach(t),l3.forEach(t),Tz=p(ba),og=a(ba,"LI",{});var c3=i(og);lc=a(c3,"A",{href:!0,rel:!0});var p3=i(lc);vz=s(p3,"Vectorization"),p3.forEach(t),c3.forEach(t),wz=p(ba),ng=a(ba,"LI",{});var h3=i(ng);dc=a(h3,"A",{href:!0,rel:!0});var m3=i(dc);$z=s(m3,"Parallelization"),m3.forEach(t),h3.forEach(t),ba.forEach(t),xz=p(Et),Gt=a(Et,"DIV",{class:!0});var ka=i(Gt);v(cc.$$.fragment,ka),Fz=p(ka),Vn=a(ka,"P",{});var xh=i(Vn);Bz=s(xh,"The "),sg=a(xh,"CODE",{});var f3=i(sg);Mz=s(f3,"FlaxBertPreTrainedModel"),f3.forEach(t),Ez=s(xh," forward method, overrides the "),rg=a(xh,"CODE",{});var u3=i(rg);zz=s(u3,"__call__"),u3.forEach(t),Pz=s(xh," special method."),xh.forEach(t),qz=p(ka),v(Hr.$$.fragment,ka),jz=p(ka),v(Rr.$$.fragment,ka),ka.forEach(t),Et.forEach(t),Tb=p(o),Qn=a(o,"H2",{class:!0});var ik=i(Qn);Vr=a(ik,"A",{id:!0,class:!0,href:!0});var g3=i(Vr);ag=a(g3,"SPAN",{});var _3=i(ag);v(pc.$$.fragment,_3),_3.forEach(t),g3.forEach(t),Cz=p(ik),ig=a(ik,"SPAN",{});var b3=i(ig);Nz=s(b3,"FlaxBertForTokenClassification"),b3.forEach(t),ik.forEach(t),vb=p(o),He=a(o,"DIV",{class:!0});var zt=i(He);v(hc.$$.fragment,zt),Oz=p(zt),lg=a(zt,"P",{});var k3=i(lg);Az=s(k3,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),k3.forEach(t),Iz=p(zt),mc=a(zt,"P",{});var lk=i(mc);Lz=s(lk,"This model inherits from "),Rp=a(lk,"A",{href:!0});var y3=i(Rp);Dz=s(y3,"FlaxPreTrainedModel"),y3.forEach(t),Sz=s(lk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),lk.forEach(t),Uz=p(zt),fc=a(zt,"P",{});var dk=i(fc);Wz=s(dk,"This model is also a Flax Linen "),uc=a(dk,"A",{href:!0,rel:!0});var T3=i(uc);Hz=s(T3,"flax.linen.Module"),T3.forEach(t),Rz=s(dk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),dk.forEach(t),Vz=p(zt),dg=a(zt,"P",{});var v3=i(dg);Qz=s(v3,"Finally, this model supports inherent JAX features such as:"),v3.forEach(t),Kz=p(zt),go=a(zt,"UL",{});var ya=i(go);cg=a(ya,"LI",{});var w3=i(cg);gc=a(w3,"A",{href:!0,rel:!0});var $3=i(gc);Jz=s($3,"Just-In-Time (JIT) compilation"),$3.forEach(t),w3.forEach(t),Gz=p(ya),pg=a(ya,"LI",{});var x3=i(pg);_c=a(x3,"A",{href:!0,rel:!0});var F3=i(_c);Xz=s(F3,"Automatic Differentiation"),F3.forEach(t),x3.forEach(t),Yz=p(ya),hg=a(ya,"LI",{});var B3=i(hg);bc=a(B3,"A",{href:!0,rel:!0});var M3=i(bc);Zz=s(M3,"Vectorization"),M3.forEach(t),B3.forEach(t),e4=p(ya),mg=a(ya,"LI",{});var E3=i(mg);kc=a(E3,"A",{href:!0,rel:!0});var z3=i(kc);t4=s(z3,"Parallelization"),z3.forEach(t),E3.forEach(t),ya.forEach(t),o4=p(zt),Xt=a(zt,"DIV",{class:!0});var Ta=i(Xt);v(yc.$$.fragment,Ta),n4=p(Ta),Kn=a(Ta,"P",{});var Fh=i(Kn);s4=s(Fh,"The "),fg=a(Fh,"CODE",{});var P3=i(fg);r4=s(P3,"FlaxBertPreTrainedModel"),P3.forEach(t),a4=s(Fh," forward method, overrides the "),ug=a(Fh,"CODE",{});var q3=i(ug);i4=s(q3,"__call__"),q3.forEach(t),l4=s(Fh," special method."),Fh.forEach(t),d4=p(Ta),v(Qr.$$.fragment,Ta),c4=p(Ta),v(Kr.$$.fragment,Ta),Ta.forEach(t),zt.forEach(t),wb=p(o),Jn=a(o,"H2",{class:!0});var ck=i(Jn);Jr=a(ck,"A",{id:!0,class:!0,href:!0});var j3=i(Jr);gg=a(j3,"SPAN",{});var C3=i(gg);v(Tc.$$.fragment,C3),C3.forEach(t),j3.forEach(t),p4=p(ck),_g=a(ck,"SPAN",{});var N3=i(_g);h4=s(N3,"FlaxBertForQuestionAnswering"),N3.forEach(t),ck.forEach(t),$b=p(o),Re=a(o,"DIV",{class:!0});var Pt=i(Re);v(vc.$$.fragment,Pt),m4=p(Pt),Gn=a(Pt,"P",{});var Bh=i(Gn);f4=s(Bh,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),bg=a(Bh,"CODE",{});var O3=i(bg);u4=s(O3,"span start logits"),O3.forEach(t),g4=s(Bh," and "),kg=a(Bh,"CODE",{});var A3=i(kg);_4=s(A3,"span end logits"),A3.forEach(t),b4=s(Bh,")."),Bh.forEach(t),k4=p(Pt),wc=a(Pt,"P",{});var pk=i(wc);y4=s(pk,"This model inherits from "),Vp=a(pk,"A",{href:!0});var I3=i(Vp);T4=s(I3,"FlaxPreTrainedModel"),I3.forEach(t),v4=s(pk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pk.forEach(t),w4=p(Pt),$c=a(Pt,"P",{});var hk=i($c);$4=s(hk,"This model is also a Flax Linen "),xc=a(hk,"A",{href:!0,rel:!0});var L3=i(xc);x4=s(L3,"flax.linen.Module"),L3.forEach(t),F4=s(hk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hk.forEach(t),B4=p(Pt),yg=a(Pt,"P",{});var D3=i(yg);M4=s(D3,"Finally, this model supports inherent JAX features such as:"),D3.forEach(t),E4=p(Pt),_o=a(Pt,"UL",{});var va=i(_o);Tg=a(va,"LI",{});var S3=i(Tg);Fc=a(S3,"A",{href:!0,rel:!0});var U3=i(Fc);z4=s(U3,"Just-In-Time (JIT) compilation"),U3.forEach(t),S3.forEach(t),P4=p(va),vg=a(va,"LI",{});var W3=i(vg);Bc=a(W3,"A",{href:!0,rel:!0});var H3=i(Bc);q4=s(H3,"Automatic Differentiation"),H3.forEach(t),W3.forEach(t),j4=p(va),wg=a(va,"LI",{});var R3=i(wg);Mc=a(R3,"A",{href:!0,rel:!0});var V3=i(Mc);C4=s(V3,"Vectorization"),V3.forEach(t),R3.forEach(t),N4=p(va),$g=a(va,"LI",{});var Q3=i($g);Ec=a(Q3,"A",{href:!0,rel:!0});var K3=i(Ec);O4=s(K3,"Parallelization"),K3.forEach(t),Q3.forEach(t),va.forEach(t),A4=p(Pt),Yt=a(Pt,"DIV",{class:!0});var wa=i(Yt);v(zc.$$.fragment,wa),I4=p(wa),Xn=a(wa,"P",{});var Mh=i(Xn);L4=s(Mh,"The "),xg=a(Mh,"CODE",{});var J3=i(xg);D4=s(J3,"FlaxBertPreTrainedModel"),J3.forEach(t),S4=s(Mh," forward method, overrides the "),Fg=a(Mh,"CODE",{});var G3=i(Fg);U4=s(G3,"__call__"),G3.forEach(t),W4=s(Mh," special method."),Mh.forEach(t),H4=p(wa),v(Gr.$$.fragment,wa),R4=p(wa),v(Xr.$$.fragment,wa),wa.forEach(t),Pt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(TN)),u(m,"id","bert"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#bert"),u(h,"class","relative group"),u(ee,"id","overview"),u(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ee,"href","#overview"),u(z,"class","relative group"),u(ne,"href","https://arxiv.org/abs/1810.04805"),u(ne,"rel","nofollow"),u(Be,"href","https://huggingface.co/thomwolf"),u(Be,"rel","nofollow"),u(Me,"href","https://github.com/google-research/bert"),u(Me,"rel","nofollow"),u(xe,"id","transformers.BertConfig"),u(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xe,"href","#transformers.BertConfig"),u(we,"class","relative group"),u(Rc,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertModel"),u(Vc,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.TFBertModel"),u(xa,"href","https://huggingface.co/bert-base-uncased"),u(xa,"rel","nofollow"),u(Qc,"href","/docs/transformers/pr_16812/en/main_classes/configuration#transformers.PretrainedConfig"),u(Kc,"href","/docs/transformers/pr_16812/en/main_classes/configuration#transformers.PretrainedConfig"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ss,"id","transformers.BertTokenizer"),u(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ss,"href","#transformers.BertTokenizer"),u(Do,"class","relative group"),u(Jc,"href","/docs/transformers/pr_16812/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yc,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(is,"id","transformers.BertTokenizerFast"),u(is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(is,"href","#transformers.BertTokenizerFast"),u(Uo,"class","relative group"),u(Zc,"href","/docs/transformers/pr_16812/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ds,"id","transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ds,"href","#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(Ho,"class","relative group"),u(op,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertForPreTraining"),u(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(np,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sp,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertForPreTraining"),u(cs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ps,"id","transformers.BertModel"),u(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ps,"href","#transformers.BertModel"),u(Qo,"class","relative group"),u(rp,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel"),u(ei,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ei,"rel","nofollow"),u(oi,"href","https://arxiv.org/abs/1706.03762"),u(oi,"rel","nofollow"),u(ap,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertModel"),u(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fs,"id","transformers.BertForPreTraining"),u(fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fs,"href","#transformers.BertForPreTraining"),u(Jo,"class","relative group"),u(ip,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel"),u(li,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(li,"rel","nofollow"),u(lp,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertForPreTraining"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_s,"id","transformers.BertLMHeadModel"),u(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_s,"href","#transformers.BertLMHeadModel"),u(Yo,"class","relative group"),u(dp,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel"),u(ui,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ui,"rel","nofollow"),u(cp,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertLMHeadModel"),u(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ys,"id","transformers.BertForMaskedLM"),u(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ys,"href","#transformers.BertForMaskedLM"),u(en,"class","relative group"),u(pp,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel"),u(vi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(vi,"rel","nofollow"),u(hp,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertForMaskedLM"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($s,"id","transformers.BertForNextSentencePrediction"),u($s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($s,"href","#transformers.BertForNextSentencePrediction"),u(on,"class","relative group"),u(mp,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel"),u(Ei,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ei,"rel","nofollow"),u(fp,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertForNextSentencePrediction"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bs,"id","transformers.BertForSequenceClassification"),u(Bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bs,"href","#transformers.BertForSequenceClassification"),u(sn,"class","relative group"),u(up,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel"),u(Ni,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ni,"rel","nofollow"),u(gp,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertForSequenceClassification"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(js,"id","transformers.BertForMultipleChoice"),u(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(js,"href","#transformers.BertForMultipleChoice"),u(an,"class","relative group"),u(_p,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel"),u(Si,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Si,"rel","nofollow"),u(bp,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertForMultipleChoice"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Os,"id","transformers.BertForTokenClassification"),u(Os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Os,"href","#transformers.BertForTokenClassification"),u(dn,"class","relative group"),u(kp,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel"),u(Qi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Qi,"rel","nofollow"),u(yp,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertForTokenClassification"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ds,"id","transformers.BertForQuestionAnswering"),u(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ds,"href","#transformers.BertForQuestionAnswering"),u(pn,"class","relative group"),u(Tp,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel"),u(Zi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Zi,"rel","nofollow"),u(vp,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.BertForQuestionAnswering"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.TFBertModel"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.TFBertModel"),u(fn,"class","relative group"),u(wp,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.TFPreTrainedModel"),u(rl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(rl,"rel","nofollow"),u($p,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.TFBertModel"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ks,"id","transformers.TFBertForPreTraining"),u(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ks,"href","#transformers.TFBertForPreTraining"),u(gn,"class","relative group"),u(xp,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.TFPreTrainedModel"),u(pl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(pl,"rel","nofollow"),u(Fp,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ys,"id","transformers.TFBertLMHeadModel"),u(Ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ys,"href","#transformers.TFBertLMHeadModel"),u(kn,"class","relative group"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.TFBertForMaskedLM"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.TFBertForMaskedLM"),u(Tn,"class","relative group"),u(Bp,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.TFPreTrainedModel"),u($l,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u($l,"rel","nofollow"),u(Mp,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.TFBertForMaskedLM"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rr,"id","transformers.TFBertForNextSentencePrediction"),u(rr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(rr,"href","#transformers.TFBertForNextSentencePrediction"),u(wn,"class","relative group"),u(Ep,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.TFPreTrainedModel"),u(Pl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Pl,"rel","nofollow"),u(zp,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.TFBertForNextSentencePrediction"),u(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dr,"id","transformers.TFBertForSequenceClassification"),u(dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(dr,"href","#transformers.TFBertForSequenceClassification"),u(xn,"class","relative group"),u(Pp,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.TFPreTrainedModel"),u(Al,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Al,"rel","nofollow"),u(qp,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.TFBertForSequenceClassification"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fr,"id","transformers.TFBertForMultipleChoice"),u(fr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fr,"href","#transformers.TFBertForMultipleChoice"),u(Bn,"class","relative group"),u(jp,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.TFPreTrainedModel"),u(Wl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Wl,"rel","nofollow"),u(Cp,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.TFBertForMultipleChoice"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(br,"id","transformers.TFBertForTokenClassification"),u(br,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(br,"href","#transformers.TFBertForTokenClassification"),u(En,"class","relative group"),u(Np,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.TFPreTrainedModel"),u(Jl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Jl,"rel","nofollow"),u(Op,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.TFBertForTokenClassification"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wr,"id","transformers.TFBertForQuestionAnswering"),u(wr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wr,"href","#transformers.TFBertForQuestionAnswering"),u(Pn,"class","relative group"),u(Ap,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.TFPreTrainedModel"),u(td,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(td,"rel","nofollow"),u(Ip,"href","/docs/transformers/pr_16812/en/model_doc/bert#transformers.TFBertForQuestionAnswering"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mr,"id","transformers.FlaxBertModel"),u(Mr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Mr,"href","#transformers.FlaxBertModel"),u(Cn,"class","relative group"),u(Lp,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(id,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(id,"rel","nofollow"),u(ld,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ld,"rel","nofollow"),u(dd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(dd,"rel","nofollow"),u(cd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(cd,"rel","nofollow"),u(pd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(pd,"rel","nofollow"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pr,"id","transformers.FlaxBertForPreTraining"),u(Pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pr,"href","#transformers.FlaxBertForPreTraining"),u(On,"class","relative group"),u(Dp,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(_d,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(_d,"rel","nofollow"),u(bd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(bd,"rel","nofollow"),u(kd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(kd,"rel","nofollow"),u(yd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(yd,"rel","nofollow"),u(Td,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Td,"rel","nofollow"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cr,"id","transformers.FlaxBertForMaskedLM"),u(Cr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cr,"href","#transformers.FlaxBertForMaskedLM"),u(Ln,"class","relative group"),u(Sp,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Md,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Md,"rel","nofollow"),u(Ed,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ed,"rel","nofollow"),u(zd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(zd,"rel","nofollow"),u(Pd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Pd,"rel","nofollow"),u(qd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(qd,"rel","nofollow"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ar,"id","transformers.FlaxBertForNextSentencePrediction"),u(Ar,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ar,"href","#transformers.FlaxBertForNextSentencePrediction"),u(Sn,"class","relative group"),u(Up,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ld,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ld,"rel","nofollow"),u(Dd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Dd,"rel","nofollow"),u(Sd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Sd,"rel","nofollow"),u(Ud,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ud,"rel","nofollow"),u(Wd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Wd,"rel","nofollow"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dr,"id","transformers.FlaxBertForSequenceClassification"),u(Dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dr,"href","#transformers.FlaxBertForSequenceClassification"),u(Wn,"class","relative group"),u(Wp,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Jd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Jd,"rel","nofollow"),u(Gd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Gd,"rel","nofollow"),u(Xd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Xd,"rel","nofollow"),u(Yd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Yd,"rel","nofollow"),u(Zd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Zd,"rel","nofollow"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wr,"id","transformers.FlaxBertForMultipleChoice"),u(Wr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wr,"href","#transformers.FlaxBertForMultipleChoice"),u(Rn,"class","relative group"),u(Hp,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(rc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(rc,"rel","nofollow"),u(ac,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ac,"rel","nofollow"),u(ic,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ic,"rel","nofollow"),u(lc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(lc,"rel","nofollow"),u(dc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(dc,"rel","nofollow"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vr,"id","transformers.FlaxBertForTokenClassification"),u(Vr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vr,"href","#transformers.FlaxBertForTokenClassification"),u(Qn,"class","relative group"),u(Rp,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(uc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(uc,"rel","nofollow"),u(gc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(gc,"rel","nofollow"),u(_c,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(_c,"rel","nofollow"),u(bc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(bc,"rel","nofollow"),u(kc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(kc,"rel","nofollow"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jr,"id","transformers.FlaxBertForQuestionAnswering"),u(Jr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Jr,"href","#transformers.FlaxBertForQuestionAnswering"),u(Jn,"class","relative group"),u(Vp,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(xc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(xc,"rel","nofollow"),u(Fc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Fc,"rel","nofollow"),u(Bc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Bc,"rel","nofollow"),u(Mc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Mc,"rel","nofollow"),u(Ec,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ec,"rel","nofollow"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),b(o,_,k),b(o,h,k),e(h,m),e(m,g),w(l,g,null),e(h,f),e(h,M),e(M,be),b(o,X,k),b(o,z,k),e(z,ee),e(ee,L),w(oe,L,null),e(z,ke),e(z,D),e(D,ye),b(o,me,k),b(o,J,k),e(J,O),e(J,ne),e(ne,Y),e(J,P),b(o,j,k),b(o,ie,k),e(ie,H),b(o,fe,k),b(o,le,k),e(le,S),e(S,Te),b(o,ue,k),b(o,q,k),e(q,ce),e(ce,R),b(o,ge,k),b(o,de,k),e(de,V),b(o,_e,k),b(o,te,k),e(te,N),e(N,ve),e(te,Q),e(te,pe),e(pe,y),b(o,E,k),b(o,K,k),e(K,ze),e(K,Be),e(Be,A),e(K,Pe),e(K,Me),e(Me,qe),e(K,I),b(o,W,k),b(o,we,k),e(we,xe),e(xe,U),w(Ee,U,null),e(we,je),e(we,he),e(he,Ce),b(o,b_,k),b(o,qt,k),w($a,qt,null),e(qt,mk),e(qt,io),e(io,fk),e(io,Rc),e(Rc,uk),e(io,gk),e(io,Vc),e(Vc,_k),e(io,bk),e(io,xa),e(xa,kk),e(io,yk),e(qt,Tk),e(qt,Lo),e(Lo,vk),e(Lo,Qc),e(Qc,wk),e(Lo,$k),e(Lo,Kc),e(Kc,xk),e(Lo,Fk),e(qt,Bk),w(ns,qt,null),b(o,k_,k),b(o,Do,k),e(Do,ss),e(ss,Eh),w(Fa,Eh,null),e(Do,Mk),e(Do,zh),e(zh,Ek),b(o,y_,k),b(o,Ne,k),w(Ba,Ne,null),e(Ne,zk),e(Ne,Ph),e(Ph,Pk),e(Ne,qk),e(Ne,Ma),e(Ma,jk),e(Ma,Jc),e(Jc,Ck),e(Ma,Nk),e(Ne,Ok),e(Ne,To),w(Ea,To,null),e(To,Ak),e(To,qh),e(qh,Ik),e(To,Lk),e(To,za),e(za,Gc),e(Gc,Dk),e(Gc,jh),e(jh,Sk),e(za,Uk),e(za,Xc),e(Xc,Wk),e(Xc,Ch),e(Ch,Hk),e(Ne,Rk),e(Ne,rs),w(Pa,rs,null),e(rs,Vk),e(rs,qa),e(qa,Qk),e(qa,Nh),e(Nh,Kk),e(qa,Jk),e(Ne,Gk),e(Ne,Ct),w(ja,Ct,null),e(Ct,Xk),e(Ct,Oh),e(Oh,Yk),e(Ct,Zk),w(as,Ct,null),e(Ct,ey),e(Ct,So),e(So,ty),e(So,Ah),e(Ah,oy),e(So,ny),e(So,Ih),e(Ih,sy),e(So,ry),e(Ne,ay),e(Ne,Yc),w(Ca,Yc,null),b(o,T_,k),b(o,Uo,k),e(Uo,is),e(is,Lh),w(Na,Lh,null),e(Uo,iy),e(Uo,Dh),e(Dh,ly),b(o,v_,k),b(o,st,k),w(Oa,st,null),e(st,dy),e(st,Aa),e(Aa,cy),e(Aa,Sh),e(Sh,py),e(Aa,hy),e(st,my),e(st,Ia),e(Ia,fy),e(Ia,Zc),e(Zc,uy),e(Ia,gy),e(st,_y),e(st,vo),w(La,vo,null),e(vo,by),e(vo,Uh),e(Uh,ky),e(vo,yy),e(vo,Da),e(Da,ep),e(ep,Ty),e(ep,Wh),e(Wh,vy),e(Da,wy),e(Da,tp),e(tp,$y),e(tp,Hh),e(Hh,xy),e(st,Fy),e(st,Nt),w(Sa,Nt,null),e(Nt,By),e(Nt,Rh),e(Rh,My),e(Nt,Ey),w(ls,Nt,null),e(Nt,zy),e(Nt,Wo),e(Wo,Py),e(Wo,Vh),e(Vh,qy),e(Wo,jy),e(Wo,Qh),e(Qh,Cy),e(Wo,Ny),b(o,w_,k),b(o,Ho,k),e(Ho,ds),e(ds,Kh),w(Ua,Kh,null),e(Ho,Oy),e(Ho,Jh),e(Jh,Ay),b(o,$_,k),b(o,Ro,k),w(Wa,Ro,null),e(Ro,Iy),e(Ro,Ha),e(Ha,Ly),e(Ha,op),e(op,Dy),e(Ha,Sy),b(o,x_,k),b(o,Vo,k),w(Ra,Vo,null),e(Vo,Uy),e(Vo,Va),e(Va,Wy),e(Va,np),e(np,Hy),e(Va,Ry),b(o,F_,k),b(o,lo,k),w(Qa,lo,null),e(lo,Vy),e(lo,Ka),e(Ka,Qy),e(Ka,sp),e(sp,Ky),e(Ka,Jy),e(lo,Gy),e(lo,cs),w(Ja,cs,null),e(cs,Xy),e(cs,Gh),e(Gh,Yy),b(o,B_,k),b(o,Qo,k),e(Qo,ps),e(ps,Xh),w(Ga,Xh,null),e(Qo,Zy),e(Qo,Yh),e(Yh,eT),b(o,M_,k),b(o,Oe,k),w(Xa,Oe,null),e(Oe,tT),e(Oe,Zh),e(Zh,oT),e(Oe,nT),e(Oe,Ya),e(Ya,sT),e(Ya,rp),e(rp,rT),e(Ya,aT),e(Oe,iT),e(Oe,Za),e(Za,lT),e(Za,ei),e(ei,dT),e(Za,cT),e(Oe,pT),e(Oe,ti),e(ti,hT),e(ti,oi),e(oi,mT),e(ti,fT),e(Oe,uT),e(Oe,Qe),e(Qe,gT),e(Qe,em),e(em,_T),e(Qe,bT),e(Qe,tm),e(tm,kT),e(Qe,yT),e(Qe,om),e(om,TT),e(Qe,vT),e(Qe,nm),e(nm,wT),e(Qe,$T),e(Qe,sm),e(sm,xT),e(Qe,FT),e(Qe,rm),e(rm,BT),e(Qe,MT),e(Oe,ET),e(Oe,Ot),w(ni,Ot,null),e(Ot,zT),e(Ot,Ko),e(Ko,PT),e(Ko,ap),e(ap,qT),e(Ko,jT),e(Ko,am),e(am,CT),e(Ko,NT),e(Ot,OT),w(hs,Ot,null),e(Ot,AT),w(ms,Ot,null),b(o,E_,k),b(o,Jo,k),e(Jo,fs),e(fs,im),w(si,im,null),e(Jo,IT),e(Jo,lm),e(lm,LT),b(o,z_,k),b(o,rt,k),w(ri,rt,null),e(rt,DT),e(rt,Go),e(Go,ST),e(Go,dm),e(dm,UT),e(Go,WT),e(Go,cm),e(cm,HT),e(Go,RT),e(rt,VT),e(rt,ai),e(ai,QT),e(ai,ip),e(ip,KT),e(ai,JT),e(rt,GT),e(rt,ii),e(ii,XT),e(ii,li),e(li,YT),e(ii,ZT),e(rt,ev),e(rt,At),w(di,At,null),e(At,tv),e(At,Xo),e(Xo,ov),e(Xo,lp),e(lp,nv),e(Xo,sv),e(Xo,pm),e(pm,rv),e(Xo,av),e(At,iv),w(us,At,null),e(At,lv),w(gs,At,null),b(o,P_,k),b(o,Yo,k),e(Yo,_s),e(_s,hm),w(ci,hm,null),e(Yo,dv),e(Yo,mm),e(mm,cv),b(o,q_,k),b(o,at,k),w(pi,at,null),e(at,pv),e(at,hi),e(hi,hv),e(hi,fm),e(fm,mv),e(hi,fv),e(at,uv),e(at,mi),e(mi,gv),e(mi,dp),e(dp,_v),e(mi,bv),e(at,kv),e(at,fi),e(fi,yv),e(fi,ui),e(ui,Tv),e(fi,vv),e(at,wv),e(at,It),w(gi,It,null),e(It,$v),e(It,Zo),e(Zo,xv),e(Zo,cp),e(cp,Fv),e(Zo,Bv),e(Zo,um),e(um,Mv),e(Zo,Ev),e(It,zv),w(bs,It,null),e(It,Pv),w(ks,It,null),b(o,j_,k),b(o,en,k),e(en,ys),e(ys,gm),w(_i,gm,null),e(en,qv),e(en,_m),e(_m,jv),b(o,C_,k),b(o,it,k),w(bi,it,null),e(it,Cv),e(it,ki),e(ki,Nv),e(ki,bm),e(bm,Ov),e(ki,Av),e(it,Iv),e(it,yi),e(yi,Lv),e(yi,pp),e(pp,Dv),e(yi,Sv),e(it,Uv),e(it,Ti),e(Ti,Wv),e(Ti,vi),e(vi,Hv),e(Ti,Rv),e(it,Vv),e(it,mt),w(wi,mt,null),e(mt,Qv),e(mt,tn),e(tn,Kv),e(tn,hp),e(hp,Jv),e(tn,Gv),e(tn,km),e(km,Xv),e(tn,Yv),e(mt,Zv),w(Ts,mt,null),e(mt,ew),w(vs,mt,null),e(mt,tw),w(ws,mt,null),b(o,N_,k),b(o,on,k),e(on,$s),e($s,ym),w($i,ym,null),e(on,ow),e(on,Tm),e(Tm,nw),b(o,O_,k),b(o,lt,k),w(xi,lt,null),e(lt,sw),e(lt,Fi),e(Fi,rw),e(Fi,vm),e(vm,aw),e(Fi,iw),e(lt,lw),e(lt,Bi),e(Bi,dw),e(Bi,mp),e(mp,cw),e(Bi,pw),e(lt,hw),e(lt,Mi),e(Mi,mw),e(Mi,Ei),e(Ei,fw),e(Mi,uw),e(lt,gw),e(lt,Lt),w(zi,Lt,null),e(Lt,_w),e(Lt,nn),e(nn,bw),e(nn,fp),e(fp,kw),e(nn,yw),e(nn,wm),e(wm,Tw),e(nn,vw),e(Lt,ww),w(xs,Lt,null),e(Lt,$w),w(Fs,Lt,null),b(o,A_,k),b(o,sn,k),e(sn,Bs),e(Bs,$m),w(Pi,$m,null),e(sn,xw),e(sn,xm),e(xm,Fw),b(o,I_,k),b(o,dt,k),w(qi,dt,null),e(dt,Bw),e(dt,Fm),e(Fm,Mw),e(dt,Ew),e(dt,ji),e(ji,zw),e(ji,up),e(up,Pw),e(ji,qw),e(dt,jw),e(dt,Ci),e(Ci,Cw),e(Ci,Ni),e(Ni,Nw),e(Ci,Ow),e(dt,Aw),e(dt,Ve),w(Oi,Ve,null),e(Ve,Iw),e(Ve,rn),e(rn,Lw),e(rn,gp),e(gp,Dw),e(rn,Sw),e(rn,Bm),e(Bm,Uw),e(rn,Ww),e(Ve,Hw),w(Ms,Ve,null),e(Ve,Rw),w(Es,Ve,null),e(Ve,Vw),w(zs,Ve,null),e(Ve,Qw),w(Ps,Ve,null),e(Ve,Kw),w(qs,Ve,null),b(o,L_,k),b(o,an,k),e(an,js),e(js,Mm),w(Ai,Mm,null),e(an,Jw),e(an,Em),e(Em,Gw),b(o,D_,k),b(o,ct,k),w(Ii,ct,null),e(ct,Xw),e(ct,zm),e(zm,Yw),e(ct,Zw),e(ct,Li),e(Li,e2),e(Li,_p),e(_p,t2),e(Li,o2),e(ct,n2),e(ct,Di),e(Di,s2),e(Di,Si),e(Si,r2),e(Di,a2),e(ct,i2),e(ct,Dt),w(Ui,Dt,null),e(Dt,l2),e(Dt,ln),e(ln,d2),e(ln,bp),e(bp,c2),e(ln,p2),e(ln,Pm),e(Pm,h2),e(ln,m2),e(Dt,f2),w(Cs,Dt,null),e(Dt,u2),w(Ns,Dt,null),b(o,S_,k),b(o,dn,k),e(dn,Os),e(Os,qm),w(Wi,qm,null),e(dn,g2),e(dn,jm),e(jm,_2),b(o,U_,k),b(o,pt,k),w(Hi,pt,null),e(pt,b2),e(pt,Cm),e(Cm,k2),e(pt,y2),e(pt,Ri),e(Ri,T2),e(Ri,kp),e(kp,v2),e(Ri,w2),e(pt,$2),e(pt,Vi),e(Vi,x2),e(Vi,Qi),e(Qi,F2),e(Vi,B2),e(pt,M2),e(pt,ft),w(Ki,ft,null),e(ft,E2),e(ft,cn),e(cn,z2),e(cn,yp),e(yp,P2),e(cn,q2),e(cn,Nm),e(Nm,j2),e(cn,C2),e(ft,N2),w(As,ft,null),e(ft,O2),w(Is,ft,null),e(ft,A2),w(Ls,ft,null),b(o,W_,k),b(o,pn,k),e(pn,Ds),e(Ds,Om),w(Ji,Om,null),e(pn,I2),e(pn,Am),e(Am,L2),b(o,H_,k),b(o,ht,k),w(Gi,ht,null),e(ht,D2),e(ht,hn),e(hn,S2),e(hn,Im),e(Im,U2),e(hn,W2),e(hn,Lm),e(Lm,H2),e(hn,R2),e(ht,V2),e(ht,Xi),e(Xi,Q2),e(Xi,Tp),e(Tp,K2),e(Xi,J2),e(ht,G2),e(ht,Yi),e(Yi,X2),e(Yi,Zi),e(Zi,Y2),e(Yi,Z2),e(ht,e$),e(ht,ut),w(el,ut,null),e(ut,t$),e(ut,mn),e(mn,o$),e(mn,vp),e(vp,n$),e(mn,s$),e(mn,Dm),e(Dm,r$),e(mn,a$),e(ut,i$),w(Ss,ut,null),e(ut,l$),w(Us,ut,null),e(ut,d$),w(Ws,ut,null),b(o,R_,k),b(o,fn,k),e(fn,Hs),e(Hs,Sm),w(tl,Sm,null),e(fn,c$),e(fn,Um),e(Um,p$),b(o,V_,k),b(o,Ke,k),w(ol,Ke,null),e(Ke,h$),e(Ke,Wm),e(Wm,m$),e(Ke,f$),e(Ke,nl),e(nl,u$),e(nl,wp),e(wp,g$),e(nl,_$),e(Ke,b$),e(Ke,sl),e(sl,k$),e(sl,rl),e(rl,y$),e(sl,T$),e(Ke,v$),w(Rs,Ke,null),e(Ke,w$),e(Ke,St),w(al,St,null),e(St,$$),e(St,un),e(un,x$),e(un,$p),e($p,F$),e(un,B$),e(un,Hm),e(Hm,M$),e(un,E$),e(St,z$),w(Vs,St,null),e(St,P$),w(Qs,St,null),b(o,Q_,k),b(o,gn,k),e(gn,Ks),e(Ks,Rm),w(il,Rm,null),e(gn,q$),e(gn,Vm),e(Vm,j$),b(o,K_,k),b(o,Je,k),w(ll,Je,null),e(Je,C$),e(Je,_n),e(_n,N$),e(_n,Qm),e(Qm,O$),e(_n,A$),e(_n,Km),e(Km,I$),e(_n,L$),e(Je,D$),e(Je,dl),e(dl,S$),e(dl,xp),e(xp,U$),e(dl,W$),e(Je,H$),e(Je,cl),e(cl,R$),e(cl,pl),e(pl,V$),e(cl,Q$),e(Je,K$),w(Js,Je,null),e(Je,J$),e(Je,Ut),w(hl,Ut,null),e(Ut,G$),e(Ut,bn),e(bn,X$),e(bn,Fp),e(Fp,Y$),e(bn,Z$),e(bn,Jm),e(Jm,ex),e(bn,tx),e(Ut,ox),w(Gs,Ut,null),e(Ut,nx),w(Xs,Ut,null),b(o,J_,k),b(o,kn,k),e(kn,Ys),e(Ys,Gm),w(ml,Gm,null),e(kn,sx),e(kn,Xm),e(Xm,rx),b(o,G_,k),b(o,yn,k),w(fl,yn,null),e(yn,ax),e(yn,gt),w(ul,gt,null),e(gt,ix),e(gt,Ae),e(Ae,lx),e(Ae,Ym),e(Ym,dx),e(Ae,cx),e(Ae,Zm),e(Zm,px),e(Ae,hx),e(Ae,ef),e(ef,mx),e(Ae,fx),e(Ae,tf),e(tf,ux),e(Ae,gx),e(Ae,of),e(of,_x),e(Ae,bx),e(Ae,nf),e(nf,kx),e(Ae,yx),e(Ae,sf),e(sf,Tx),e(Ae,vx),e(gt,wx),e(gt,gl),e(gl,_l),e(_l,$x),e(_l,rf),e(rf,xx),e(_l,Fx),e(gl,Bx),e(gl,bl),e(bl,Mx),e(bl,af),e(af,Ex),e(bl,zx),e(gt,Px),e(gt,G),e(G,qx),e(G,lf),e(lf,jx),e(G,Cx),e(G,df),e(df,Nx),e(G,Ox),e(G,cf),e(cf,Ax),e(G,Ix),e(G,pf),e(pf,Lx),e(G,Dx),e(G,hf),e(hf,Sx),e(G,Ux),e(G,mf),e(mf,Wx),e(G,Hx),e(G,ff),e(ff,Rx),e(G,Vx),e(G,uf),e(uf,Qx),e(G,Kx),e(G,gf),e(gf,Jx),e(G,Gx),e(G,_f),e(_f,Xx),e(G,Yx),e(G,bf),e(bf,Zx),e(G,eF),e(G,kf),e(kf,tF),e(G,oF),e(G,yf),e(yf,nF),e(G,sF),e(G,Tf),e(Tf,rF),e(G,aF),e(G,vf),e(vf,iF),e(G,lF),e(G,wf),e(wf,dF),e(G,cF),e(G,$f),e($f,pF),e(G,hF),e(G,xf),e(xf,mF),e(G,fF),e(G,Ff),e(Ff,uF),e(G,gF),e(G,Bf),e(Bf,_F),e(G,bF),e(gt,kF),w(Zs,gt,null),b(o,X_,k),b(o,Tn,k),e(Tn,er),e(er,Mf),w(kl,Mf,null),e(Tn,yF),e(Tn,Ef),e(Ef,TF),b(o,Y_,k),b(o,Ge,k),w(yl,Ge,null),e(Ge,vF),e(Ge,Tl),e(Tl,wF),e(Tl,zf),e(zf,$F),e(Tl,xF),e(Ge,FF),e(Ge,vl),e(vl,BF),e(vl,Bp),e(Bp,MF),e(vl,EF),e(Ge,zF),e(Ge,wl),e(wl,PF),e(wl,$l),e($l,qF),e(wl,jF),e(Ge,CF),w(tr,Ge,null),e(Ge,NF),e(Ge,_t),w(xl,_t,null),e(_t,OF),e(_t,vn),e(vn,AF),e(vn,Mp),e(Mp,IF),e(vn,LF),e(vn,Pf),e(Pf,DF),e(vn,SF),e(_t,UF),w(or,_t,null),e(_t,WF),w(nr,_t,null),e(_t,HF),w(sr,_t,null),b(o,Z_,k),b(o,wn,k),e(wn,rr),e(rr,qf),w(Fl,qf,null),e(wn,RF),e(wn,jf),e(jf,VF),b(o,eb,k),b(o,Xe,k),w(Bl,Xe,null),e(Xe,QF),e(Xe,Ml),e(Ml,KF),e(Ml,Cf),e(Cf,JF),e(Ml,GF),e(Xe,XF),e(Xe,El),e(El,YF),e(El,Ep),e(Ep,ZF),e(El,e0),e(Xe,t0),e(Xe,zl),e(zl,o0),e(zl,Pl),e(Pl,n0),e(zl,s0),e(Xe,r0),w(ar,Xe,null),e(Xe,a0),e(Xe,Wt),w(ql,Wt,null),e(Wt,i0),e(Wt,$n),e($n,l0),e($n,zp),e(zp,d0),e($n,c0),e($n,Nf),e(Nf,p0),e($n,h0),e(Wt,m0),w(ir,Wt,null),e(Wt,f0),w(lr,Wt,null),b(o,tb,k),b(o,xn,k),e(xn,dr),e(dr,Of),w(jl,Of,null),e(xn,u0),e(xn,Af),e(Af,g0),b(o,ob,k),b(o,Ye,k),w(Cl,Ye,null),e(Ye,_0),e(Ye,If),e(If,b0),e(Ye,k0),e(Ye,Nl),e(Nl,y0),e(Nl,Pp),e(Pp,T0),e(Nl,v0),e(Ye,w0),e(Ye,Ol),e(Ol,$0),e(Ol,Al),e(Al,x0),e(Ol,F0),e(Ye,B0),w(cr,Ye,null),e(Ye,M0),e(Ye,bt),w(Il,bt,null),e(bt,E0),e(bt,Fn),e(Fn,z0),e(Fn,qp),e(qp,P0),e(Fn,q0),e(Fn,Lf),e(Lf,j0),e(Fn,C0),e(bt,N0),w(pr,bt,null),e(bt,O0),w(hr,bt,null),e(bt,A0),w(mr,bt,null),b(o,nb,k),b(o,Bn,k),e(Bn,fr),e(fr,Df),w(Ll,Df,null),e(Bn,I0),e(Bn,Sf),e(Sf,L0),b(o,sb,k),b(o,Ze,k),w(Dl,Ze,null),e(Ze,D0),e(Ze,Uf),e(Uf,S0),e(Ze,U0),e(Ze,Sl),e(Sl,W0),e(Sl,jp),e(jp,H0),e(Sl,R0),e(Ze,V0),e(Ze,Ul),e(Ul,Q0),e(Ul,Wl),e(Wl,K0),e(Ul,J0),e(Ze,G0),w(ur,Ze,null),e(Ze,X0),e(Ze,Ht),w(Hl,Ht,null),e(Ht,Y0),e(Ht,Mn),e(Mn,Z0),e(Mn,Cp),e(Cp,eB),e(Mn,tB),e(Mn,Wf),e(Wf,oB),e(Mn,nB),e(Ht,sB),w(gr,Ht,null),e(Ht,rB),w(_r,Ht,null),b(o,rb,k),b(o,En,k),e(En,br),e(br,Hf),w(Rl,Hf,null),e(En,aB),e(En,Rf),e(Rf,iB),b(o,ab,k),b(o,et,k),w(Vl,et,null),e(et,lB),e(et,Vf),e(Vf,dB),e(et,cB),e(et,Ql),e(Ql,pB),e(Ql,Np),e(Np,hB),e(Ql,mB),e(et,fB),e(et,Kl),e(Kl,uB),e(Kl,Jl),e(Jl,gB),e(Kl,_B),e(et,bB),w(kr,et,null),e(et,kB),e(et,kt),w(Gl,kt,null),e(kt,yB),e(kt,zn),e(zn,TB),e(zn,Op),e(Op,vB),e(zn,wB),e(zn,Qf),e(Qf,$B),e(zn,xB),e(kt,FB),w(yr,kt,null),e(kt,BB),w(Tr,kt,null),e(kt,MB),w(vr,kt,null),b(o,ib,k),b(o,Pn,k),e(Pn,wr),e(wr,Kf),w(Xl,Kf,null),e(Pn,EB),e(Pn,Jf),e(Jf,zB),b(o,lb,k),b(o,tt,k),w(Yl,tt,null),e(tt,PB),e(tt,qn),e(qn,qB),e(qn,Gf),e(Gf,jB),e(qn,CB),e(qn,Xf),e(Xf,NB),e(qn,OB),e(tt,AB),e(tt,Zl),e(Zl,IB),e(Zl,Ap),e(Ap,LB),e(Zl,DB),e(tt,SB),e(tt,ed),e(ed,UB),e(ed,td),e(td,WB),e(ed,HB),e(tt,RB),w($r,tt,null),e(tt,VB),e(tt,yt),w(od,yt,null),e(yt,QB),e(yt,jn),e(jn,KB),e(jn,Ip),e(Ip,JB),e(jn,GB),e(jn,Yf),e(Yf,XB),e(jn,YB),e(yt,ZB),w(xr,yt,null),e(yt,eM),w(Fr,yt,null),e(yt,tM),w(Br,yt,null),b(o,db,k),b(o,Cn,k),e(Cn,Mr),e(Mr,Zf),w(nd,Zf,null),e(Cn,oM),e(Cn,eu),e(eu,nM),b(o,cb,k),b(o,Ie,k),w(sd,Ie,null),e(Ie,sM),e(Ie,tu),e(tu,rM),e(Ie,aM),e(Ie,rd),e(rd,iM),e(rd,Lp),e(Lp,lM),e(rd,dM),e(Ie,cM),e(Ie,ad),e(ad,pM),e(ad,id),e(id,hM),e(ad,mM),e(Ie,fM),e(Ie,ou),e(ou,uM),e(Ie,gM),e(Ie,co),e(co,nu),e(nu,ld),e(ld,_M),e(co,bM),e(co,su),e(su,dd),e(dd,kM),e(co,yM),e(co,ru),e(ru,cd),e(cd,TM),e(co,vM),e(co,au),e(au,pd),e(pd,wM),e(Ie,$M),e(Ie,Rt),w(hd,Rt,null),e(Rt,xM),e(Rt,Nn),e(Nn,FM),e(Nn,iu),e(iu,BM),e(Nn,MM),e(Nn,lu),e(lu,EM),e(Nn,zM),e(Rt,PM),w(Er,Rt,null),e(Rt,qM),w(zr,Rt,null),b(o,pb,k),b(o,On,k),e(On,Pr),e(Pr,du),w(md,du,null),e(On,jM),e(On,cu),e(cu,CM),b(o,hb,k),b(o,Le,k),w(fd,Le,null),e(Le,NM),e(Le,An),e(An,OM),e(An,pu),e(pu,AM),e(An,IM),e(An,hu),e(hu,LM),e(An,DM),e(Le,SM),e(Le,ud),e(ud,UM),e(ud,Dp),e(Dp,WM),e(ud,HM),e(Le,RM),e(Le,gd),e(gd,VM),e(gd,_d),e(_d,QM),e(gd,KM),e(Le,JM),e(Le,mu),e(mu,GM),e(Le,XM),e(Le,po),e(po,fu),e(fu,bd),e(bd,YM),e(po,ZM),e(po,uu),e(uu,kd),e(kd,eE),e(po,tE),e(po,gu),e(gu,yd),e(yd,oE),e(po,nE),e(po,_u),e(_u,Td),e(Td,sE),e(Le,rE),e(Le,Vt),w(vd,Vt,null),e(Vt,aE),e(Vt,In),e(In,iE),e(In,bu),e(bu,lE),e(In,dE),e(In,ku),e(ku,cE),e(In,pE),e(Vt,hE),w(qr,Vt,null),e(Vt,mE),w(jr,Vt,null),b(o,mb,k),b(o,Ln,k),e(Ln,Cr),e(Cr,yu),w(wd,yu,null),e(Ln,fE),e(Ln,Tu),e(Tu,uE),b(o,fb,k),b(o,De,k),w($d,De,null),e(De,gE),e(De,xd),e(xd,_E),e(xd,vu),e(vu,bE),e(xd,kE),e(De,yE),e(De,Fd),e(Fd,TE),e(Fd,Sp),e(Sp,vE),e(Fd,wE),e(De,$E),e(De,Bd),e(Bd,xE),e(Bd,Md),e(Md,FE),e(Bd,BE),e(De,ME),e(De,wu),e(wu,EE),e(De,zE),e(De,ho),e(ho,$u),e($u,Ed),e(Ed,PE),e(ho,qE),e(ho,xu),e(xu,zd),e(zd,jE),e(ho,CE),e(ho,Fu),e(Fu,Pd),e(Pd,NE),e(ho,OE),e(ho,Bu),e(Bu,qd),e(qd,AE),e(De,IE),e(De,Qt),w(jd,Qt,null),e(Qt,LE),e(Qt,Dn),e(Dn,DE),e(Dn,Mu),e(Mu,SE),e(Dn,UE),e(Dn,Eu),e(Eu,WE),e(Dn,HE),e(Qt,RE),w(Nr,Qt,null),e(Qt,VE),w(Or,Qt,null),b(o,ub,k),b(o,Sn,k),e(Sn,Ar),e(Ar,zu),w(Cd,zu,null),e(Sn,QE),e(Sn,Pu),e(Pu,KE),b(o,gb,k),b(o,Se,k),w(Nd,Se,null),e(Se,JE),e(Se,Od),e(Od,GE),e(Od,qu),e(qu,XE),e(Od,YE),e(Se,ZE),e(Se,Ad),e(Ad,e6),e(Ad,Up),e(Up,t6),e(Ad,o6),e(Se,n6),e(Se,Id),e(Id,s6),e(Id,Ld),e(Ld,r6),e(Id,a6),e(Se,i6),e(Se,ju),e(ju,l6),e(Se,d6),e(Se,mo),e(mo,Cu),e(Cu,Dd),e(Dd,c6),e(mo,p6),e(mo,Nu),e(Nu,Sd),e(Sd,h6),e(mo,m6),e(mo,Ou),e(Ou,Ud),e(Ud,f6),e(mo,u6),e(mo,Au),e(Au,Wd),e(Wd,g6),e(Se,_6),e(Se,Kt),w(Hd,Kt,null),e(Kt,b6),e(Kt,Un),e(Un,k6),e(Un,Iu),e(Iu,y6),e(Un,T6),e(Un,Lu),e(Lu,v6),e(Un,w6),e(Kt,$6),w(Ir,Kt,null),e(Kt,x6),w(Lr,Kt,null),b(o,_b,k),b(o,Wn,k),e(Wn,Dr),e(Dr,Du),w(Rd,Du,null),e(Wn,F6),e(Wn,Su),e(Su,B6),b(o,bb,k),b(o,Ue,k),w(Vd,Ue,null),e(Ue,M6),e(Ue,Uu),e(Uu,E6),e(Ue,z6),e(Ue,Qd),e(Qd,P6),e(Qd,Wp),e(Wp,q6),e(Qd,j6),e(Ue,C6),e(Ue,Kd),e(Kd,N6),e(Kd,Jd),e(Jd,O6),e(Kd,A6),e(Ue,I6),e(Ue,Wu),e(Wu,L6),e(Ue,D6),e(Ue,fo),e(fo,Hu),e(Hu,Gd),e(Gd,S6),e(fo,U6),e(fo,Ru),e(Ru,Xd),e(Xd,W6),e(fo,H6),e(fo,Vu),e(Vu,Yd),e(Yd,R6),e(fo,V6),e(fo,Qu),e(Qu,Zd),e(Zd,Q6),e(Ue,K6),e(Ue,Jt),w(ec,Jt,null),e(Jt,J6),e(Jt,Hn),e(Hn,G6),e(Hn,Ku),e(Ku,X6),e(Hn,Y6),e(Hn,Ju),e(Ju,Z6),e(Hn,ez),e(Jt,tz),w(Sr,Jt,null),e(Jt,oz),w(Ur,Jt,null),b(o,kb,k),b(o,Rn,k),e(Rn,Wr),e(Wr,Gu),w(tc,Gu,null),e(Rn,nz),e(Rn,Xu),e(Xu,sz),b(o,yb,k),b(o,We,k),w(oc,We,null),e(We,rz),e(We,Yu),e(Yu,az),e(We,iz),e(We,nc),e(nc,lz),e(nc,Hp),e(Hp,dz),e(nc,cz),e(We,pz),e(We,sc),e(sc,hz),e(sc,rc),e(rc,mz),e(sc,fz),e(We,uz),e(We,Zu),e(Zu,gz),e(We,_z),e(We,uo),e(uo,eg),e(eg,ac),e(ac,bz),e(uo,kz),e(uo,tg),e(tg,ic),e(ic,yz),e(uo,Tz),e(uo,og),e(og,lc),e(lc,vz),e(uo,wz),e(uo,ng),e(ng,dc),e(dc,$z),e(We,xz),e(We,Gt),w(cc,Gt,null),e(Gt,Fz),e(Gt,Vn),e(Vn,Bz),e(Vn,sg),e(sg,Mz),e(Vn,Ez),e(Vn,rg),e(rg,zz),e(Vn,Pz),e(Gt,qz),w(Hr,Gt,null),e(Gt,jz),w(Rr,Gt,null),b(o,Tb,k),b(o,Qn,k),e(Qn,Vr),e(Vr,ag),w(pc,ag,null),e(Qn,Cz),e(Qn,ig),e(ig,Nz),b(o,vb,k),b(o,He,k),w(hc,He,null),e(He,Oz),e(He,lg),e(lg,Az),e(He,Iz),e(He,mc),e(mc,Lz),e(mc,Rp),e(Rp,Dz),e(mc,Sz),e(He,Uz),e(He,fc),e(fc,Wz),e(fc,uc),e(uc,Hz),e(fc,Rz),e(He,Vz),e(He,dg),e(dg,Qz),e(He,Kz),e(He,go),e(go,cg),e(cg,gc),e(gc,Jz),e(go,Gz),e(go,pg),e(pg,_c),e(_c,Xz),e(go,Yz),e(go,hg),e(hg,bc),e(bc,Zz),e(go,e4),e(go,mg),e(mg,kc),e(kc,t4),e(He,o4),e(He,Xt),w(yc,Xt,null),e(Xt,n4),e(Xt,Kn),e(Kn,s4),e(Kn,fg),e(fg,r4),e(Kn,a4),e(Kn,ug),e(ug,i4),e(Kn,l4),e(Xt,d4),w(Qr,Xt,null),e(Xt,c4),w(Kr,Xt,null),b(o,wb,k),b(o,Jn,k),e(Jn,Jr),e(Jr,gg),w(Tc,gg,null),e(Jn,p4),e(Jn,_g),e(_g,h4),b(o,$b,k),b(o,Re,k),w(vc,Re,null),e(Re,m4),e(Re,Gn),e(Gn,f4),e(Gn,bg),e(bg,u4),e(Gn,g4),e(Gn,kg),e(kg,_4),e(Gn,b4),e(Re,k4),e(Re,wc),e(wc,y4),e(wc,Vp),e(Vp,T4),e(wc,v4),e(Re,w4),e(Re,$c),e($c,$4),e($c,xc),e(xc,x4),e($c,F4),e(Re,B4),e(Re,yg),e(yg,M4),e(Re,E4),e(Re,_o),e(_o,Tg),e(Tg,Fc),e(Fc,z4),e(_o,P4),e(_o,vg),e(vg,Bc),e(Bc,q4),e(_o,j4),e(_o,wg),e(wg,Mc),e(Mc,C4),e(_o,N4),e(_o,$g),e($g,Ec),e(Ec,O4),e(Re,A4),e(Re,Yt),w(zc,Yt,null),e(Yt,I4),e(Yt,Xn),e(Xn,L4),e(Xn,xg),e(xg,D4),e(Xn,S4),e(Xn,Fg),e(Fg,U4),e(Xn,W4),e(Yt,H4),w(Gr,Yt,null),e(Yt,R4),w(Xr,Yt,null),xb=!0},p(o,[k]){const Pc={};k&2&&(Pc.$$scope={dirty:k,ctx:o}),ns.$set(Pc);const Bg={};k&2&&(Bg.$$scope={dirty:k,ctx:o}),as.$set(Bg);const Mg={};k&2&&(Mg.$$scope={dirty:k,ctx:o}),ls.$set(Mg);const Eg={};k&2&&(Eg.$$scope={dirty:k,ctx:o}),hs.$set(Eg);const qc={};k&2&&(qc.$$scope={dirty:k,ctx:o}),ms.$set(qc);const zg={};k&2&&(zg.$$scope={dirty:k,ctx:o}),us.$set(zg);const Pg={};k&2&&(Pg.$$scope={dirty:k,ctx:o}),gs.$set(Pg);const qg={};k&2&&(qg.$$scope={dirty:k,ctx:o}),bs.$set(qg);const jc={};k&2&&(jc.$$scope={dirty:k,ctx:o}),ks.$set(jc);const jg={};k&2&&(jg.$$scope={dirty:k,ctx:o}),Ts.$set(jg);const Cg={};k&2&&(Cg.$$scope={dirty:k,ctx:o}),vs.$set(Cg);const Ng={};k&2&&(Ng.$$scope={dirty:k,ctx:o}),ws.$set(Ng);const Og={};k&2&&(Og.$$scope={dirty:k,ctx:o}),xs.$set(Og);const Ag={};k&2&&(Ag.$$scope={dirty:k,ctx:o}),Fs.$set(Ag);const Ig={};k&2&&(Ig.$$scope={dirty:k,ctx:o}),Ms.$set(Ig);const Lg={};k&2&&(Lg.$$scope={dirty:k,ctx:o}),Es.$set(Lg);const Cc={};k&2&&(Cc.$$scope={dirty:k,ctx:o}),zs.$set(Cc);const Dg={};k&2&&(Dg.$$scope={dirty:k,ctx:o}),Ps.$set(Dg);const Sg={};k&2&&(Sg.$$scope={dirty:k,ctx:o}),qs.$set(Sg);const Yn={};k&2&&(Yn.$$scope={dirty:k,ctx:o}),Cs.$set(Yn);const Ug={};k&2&&(Ug.$$scope={dirty:k,ctx:o}),Ns.$set(Ug);const Wg={};k&2&&(Wg.$$scope={dirty:k,ctx:o}),As.$set(Wg);const Nc={};k&2&&(Nc.$$scope={dirty:k,ctx:o}),Is.$set(Nc);const Hg={};k&2&&(Hg.$$scope={dirty:k,ctx:o}),Ls.$set(Hg);const Rg={};k&2&&(Rg.$$scope={dirty:k,ctx:o}),Ss.$set(Rg);const Vg={};k&2&&(Vg.$$scope={dirty:k,ctx:o}),Us.$set(Vg);const bo={};k&2&&(bo.$$scope={dirty:k,ctx:o}),Ws.$set(bo);const ko={};k&2&&(ko.$$scope={dirty:k,ctx:o}),Rs.$set(ko);const Qg={};k&2&&(Qg.$$scope={dirty:k,ctx:o}),Vs.$set(Qg);const Kg={};k&2&&(Kg.$$scope={dirty:k,ctx:o}),Qs.$set(Kg);const Jg={};k&2&&(Jg.$$scope={dirty:k,ctx:o}),Js.$set(Jg);const Zn={};k&2&&(Zn.$$scope={dirty:k,ctx:o}),Gs.$set(Zn);const Gg={};k&2&&(Gg.$$scope={dirty:k,ctx:o}),Xs.$set(Gg);const Xg={};k&2&&(Xg.$$scope={dirty:k,ctx:o}),Zs.$set(Xg);const Oc={};k&2&&(Oc.$$scope={dirty:k,ctx:o}),tr.$set(Oc);const Yg={};k&2&&(Yg.$$scope={dirty:k,ctx:o}),or.$set(Yg);const Zg={};k&2&&(Zg.$$scope={dirty:k,ctx:o}),nr.$set(Zg);const e_={};k&2&&(e_.$$scope={dirty:k,ctx:o}),sr.$set(e_);const ot={};k&2&&(ot.$$scope={dirty:k,ctx:o}),ar.$set(ot);const t_={};k&2&&(t_.$$scope={dirty:k,ctx:o}),ir.$set(t_);const Ac={};k&2&&(Ac.$$scope={dirty:k,ctx:o}),lr.$set(Ac);const o_={};k&2&&(o_.$$scope={dirty:k,ctx:o}),cr.$set(o_);const es={};k&2&&(es.$$scope={dirty:k,ctx:o}),pr.$set(es);const n_={};k&2&&(n_.$$scope={dirty:k,ctx:o}),hr.$set(n_);const Ic={};k&2&&(Ic.$$scope={dirty:k,ctx:o}),mr.$set(Ic);const Qp={};k&2&&(Qp.$$scope={dirty:k,ctx:o}),ur.$set(Qp);const s_={};k&2&&(s_.$$scope={dirty:k,ctx:o}),gr.$set(s_);const Kp={};k&2&&(Kp.$$scope={dirty:k,ctx:o}),_r.$set(Kp);const r_={};k&2&&(r_.$$scope={dirty:k,ctx:o}),kr.$set(r_);const Lc={};k&2&&(Lc.$$scope={dirty:k,ctx:o}),yr.$set(Lc);const Dc={};k&2&&(Dc.$$scope={dirty:k,ctx:o}),Tr.$set(Dc);const a_={};k&2&&(a_.$$scope={dirty:k,ctx:o}),vr.$set(a_);const yo={};k&2&&(yo.$$scope={dirty:k,ctx:o}),$r.$set(yo);const i_={};k&2&&(i_.$$scope={dirty:k,ctx:o}),xr.$set(i_);const ts={};k&2&&(ts.$$scope={dirty:k,ctx:o}),Fr.$set(ts);const l_={};k&2&&(l_.$$scope={dirty:k,ctx:o}),Br.$set(l_);const d_={};k&2&&(d_.$$scope={dirty:k,ctx:o}),Er.$set(d_);const c_={};k&2&&(c_.$$scope={dirty:k,ctx:o}),zr.$set(c_);const Sc={};k&2&&(Sc.$$scope={dirty:k,ctx:o}),qr.$set(Sc);const p_={};k&2&&(p_.$$scope={dirty:k,ctx:o}),jr.$set(p_);const h_={};k&2&&(h_.$$scope={dirty:k,ctx:o}),Nr.$set(h_);const m_={};k&2&&(m_.$$scope={dirty:k,ctx:o}),Or.$set(m_);const jt={};k&2&&(jt.$$scope={dirty:k,ctx:o}),Ir.$set(jt);const Uc={};k&2&&(Uc.$$scope={dirty:k,ctx:o}),Lr.$set(Uc);const f_={};k&2&&(f_.$$scope={dirty:k,ctx:o}),Sr.$set(f_);const Wc={};k&2&&(Wc.$$scope={dirty:k,ctx:o}),Ur.$set(Wc);const u_={};k&2&&(u_.$$scope={dirty:k,ctx:o}),Hr.$set(u_);const os={};k&2&&(os.$$scope={dirty:k,ctx:o}),Rr.$set(os);const g_={};k&2&&(g_.$$scope={dirty:k,ctx:o}),Qr.$set(g_);const Hc={};k&2&&(Hc.$$scope={dirty:k,ctx:o}),Kr.$set(Hc);const Jp={};k&2&&(Jp.$$scope={dirty:k,ctx:o}),Gr.$set(Jp);const __={};k&2&&(__.$$scope={dirty:k,ctx:o}),Xr.$set(__)},i(o){xb||($(l.$$.fragment,o),$(oe.$$.fragment,o),$(Ee.$$.fragment,o),$($a.$$.fragment,o),$(ns.$$.fragment,o),$(Fa.$$.fragment,o),$(Ba.$$.fragment,o),$(Ea.$$.fragment,o),$(Pa.$$.fragment,o),$(ja.$$.fragment,o),$(as.$$.fragment,o),$(Ca.$$.fragment,o),$(Na.$$.fragment,o),$(Oa.$$.fragment,o),$(La.$$.fragment,o),$(Sa.$$.fragment,o),$(ls.$$.fragment,o),$(Ua.$$.fragment,o),$(Wa.$$.fragment,o),$(Ra.$$.fragment,o),$(Qa.$$.fragment,o),$(Ja.$$.fragment,o),$(Ga.$$.fragment,o),$(Xa.$$.fragment,o),$(ni.$$.fragment,o),$(hs.$$.fragment,o),$(ms.$$.fragment,o),$(si.$$.fragment,o),$(ri.$$.fragment,o),$(di.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(ci.$$.fragment,o),$(pi.$$.fragment,o),$(gi.$$.fragment,o),$(bs.$$.fragment,o),$(ks.$$.fragment,o),$(_i.$$.fragment,o),$(bi.$$.fragment,o),$(wi.$$.fragment,o),$(Ts.$$.fragment,o),$(vs.$$.fragment,o),$(ws.$$.fragment,o),$($i.$$.fragment,o),$(xi.$$.fragment,o),$(zi.$$.fragment,o),$(xs.$$.fragment,o),$(Fs.$$.fragment,o),$(Pi.$$.fragment,o),$(qi.$$.fragment,o),$(Oi.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(zs.$$.fragment,o),$(Ps.$$.fragment,o),$(qs.$$.fragment,o),$(Ai.$$.fragment,o),$(Ii.$$.fragment,o),$(Ui.$$.fragment,o),$(Cs.$$.fragment,o),$(Ns.$$.fragment,o),$(Wi.$$.fragment,o),$(Hi.$$.fragment,o),$(Ki.$$.fragment,o),$(As.$$.fragment,o),$(Is.$$.fragment,o),$(Ls.$$.fragment,o),$(Ji.$$.fragment,o),$(Gi.$$.fragment,o),$(el.$$.fragment,o),$(Ss.$$.fragment,o),$(Us.$$.fragment,o),$(Ws.$$.fragment,o),$(tl.$$.fragment,o),$(ol.$$.fragment,o),$(Rs.$$.fragment,o),$(al.$$.fragment,o),$(Vs.$$.fragment,o),$(Qs.$$.fragment,o),$(il.$$.fragment,o),$(ll.$$.fragment,o),$(Js.$$.fragment,o),$(hl.$$.fragment,o),$(Gs.$$.fragment,o),$(Xs.$$.fragment,o),$(ml.$$.fragment,o),$(fl.$$.fragment,o),$(ul.$$.fragment,o),$(Zs.$$.fragment,o),$(kl.$$.fragment,o),$(yl.$$.fragment,o),$(tr.$$.fragment,o),$(xl.$$.fragment,o),$(or.$$.fragment,o),$(nr.$$.fragment,o),$(sr.$$.fragment,o),$(Fl.$$.fragment,o),$(Bl.$$.fragment,o),$(ar.$$.fragment,o),$(ql.$$.fragment,o),$(ir.$$.fragment,o),$(lr.$$.fragment,o),$(jl.$$.fragment,o),$(Cl.$$.fragment,o),$(cr.$$.fragment,o),$(Il.$$.fragment,o),$(pr.$$.fragment,o),$(hr.$$.fragment,o),$(mr.$$.fragment,o),$(Ll.$$.fragment,o),$(Dl.$$.fragment,o),$(ur.$$.fragment,o),$(Hl.$$.fragment,o),$(gr.$$.fragment,o),$(_r.$$.fragment,o),$(Rl.$$.fragment,o),$(Vl.$$.fragment,o),$(kr.$$.fragment,o),$(Gl.$$.fragment,o),$(yr.$$.fragment,o),$(Tr.$$.fragment,o),$(vr.$$.fragment,o),$(Xl.$$.fragment,o),$(Yl.$$.fragment,o),$($r.$$.fragment,o),$(od.$$.fragment,o),$(xr.$$.fragment,o),$(Fr.$$.fragment,o),$(Br.$$.fragment,o),$(nd.$$.fragment,o),$(sd.$$.fragment,o),$(hd.$$.fragment,o),$(Er.$$.fragment,o),$(zr.$$.fragment,o),$(md.$$.fragment,o),$(fd.$$.fragment,o),$(vd.$$.fragment,o),$(qr.$$.fragment,o),$(jr.$$.fragment,o),$(wd.$$.fragment,o),$($d.$$.fragment,o),$(jd.$$.fragment,o),$(Nr.$$.fragment,o),$(Or.$$.fragment,o),$(Cd.$$.fragment,o),$(Nd.$$.fragment,o),$(Hd.$$.fragment,o),$(Ir.$$.fragment,o),$(Lr.$$.fragment,o),$(Rd.$$.fragment,o),$(Vd.$$.fragment,o),$(ec.$$.fragment,o),$(Sr.$$.fragment,o),$(Ur.$$.fragment,o),$(tc.$$.fragment,o),$(oc.$$.fragment,o),$(cc.$$.fragment,o),$(Hr.$$.fragment,o),$(Rr.$$.fragment,o),$(pc.$$.fragment,o),$(hc.$$.fragment,o),$(yc.$$.fragment,o),$(Qr.$$.fragment,o),$(Kr.$$.fragment,o),$(Tc.$$.fragment,o),$(vc.$$.fragment,o),$(zc.$$.fragment,o),$(Gr.$$.fragment,o),$(Xr.$$.fragment,o),xb=!0)},o(o){x(l.$$.fragment,o),x(oe.$$.fragment,o),x(Ee.$$.fragment,o),x($a.$$.fragment,o),x(ns.$$.fragment,o),x(Fa.$$.fragment,o),x(Ba.$$.fragment,o),x(Ea.$$.fragment,o),x(Pa.$$.fragment,o),x(ja.$$.fragment,o),x(as.$$.fragment,o),x(Ca.$$.fragment,o),x(Na.$$.fragment,o),x(Oa.$$.fragment,o),x(La.$$.fragment,o),x(Sa.$$.fragment,o),x(ls.$$.fragment,o),x(Ua.$$.fragment,o),x(Wa.$$.fragment,o),x(Ra.$$.fragment,o),x(Qa.$$.fragment,o),x(Ja.$$.fragment,o),x(Ga.$$.fragment,o),x(Xa.$$.fragment,o),x(ni.$$.fragment,o),x(hs.$$.fragment,o),x(ms.$$.fragment,o),x(si.$$.fragment,o),x(ri.$$.fragment,o),x(di.$$.fragment,o),x(us.$$.fragment,o),x(gs.$$.fragment,o),x(ci.$$.fragment,o),x(pi.$$.fragment,o),x(gi.$$.fragment,o),x(bs.$$.fragment,o),x(ks.$$.fragment,o),x(_i.$$.fragment,o),x(bi.$$.fragment,o),x(wi.$$.fragment,o),x(Ts.$$.fragment,o),x(vs.$$.fragment,o),x(ws.$$.fragment,o),x($i.$$.fragment,o),x(xi.$$.fragment,o),x(zi.$$.fragment,o),x(xs.$$.fragment,o),x(Fs.$$.fragment,o),x(Pi.$$.fragment,o),x(qi.$$.fragment,o),x(Oi.$$.fragment,o),x(Ms.$$.fragment,o),x(Es.$$.fragment,o),x(zs.$$.fragment,o),x(Ps.$$.fragment,o),x(qs.$$.fragment,o),x(Ai.$$.fragment,o),x(Ii.$$.fragment,o),x(Ui.$$.fragment,o),x(Cs.$$.fragment,o),x(Ns.$$.fragment,o),x(Wi.$$.fragment,o),x(Hi.$$.fragment,o),x(Ki.$$.fragment,o),x(As.$$.fragment,o),x(Is.$$.fragment,o),x(Ls.$$.fragment,o),x(Ji.$$.fragment,o),x(Gi.$$.fragment,o),x(el.$$.fragment,o),x(Ss.$$.fragment,o),x(Us.$$.fragment,o),x(Ws.$$.fragment,o),x(tl.$$.fragment,o),x(ol.$$.fragment,o),x(Rs.$$.fragment,o),x(al.$$.fragment,o),x(Vs.$$.fragment,o),x(Qs.$$.fragment,o),x(il.$$.fragment,o),x(ll.$$.fragment,o),x(Js.$$.fragment,o),x(hl.$$.fragment,o),x(Gs.$$.fragment,o),x(Xs.$$.fragment,o),x(ml.$$.fragment,o),x(fl.$$.fragment,o),x(ul.$$.fragment,o),x(Zs.$$.fragment,o),x(kl.$$.fragment,o),x(yl.$$.fragment,o),x(tr.$$.fragment,o),x(xl.$$.fragment,o),x(or.$$.fragment,o),x(nr.$$.fragment,o),x(sr.$$.fragment,o),x(Fl.$$.fragment,o),x(Bl.$$.fragment,o),x(ar.$$.fragment,o),x(ql.$$.fragment,o),x(ir.$$.fragment,o),x(lr.$$.fragment,o),x(jl.$$.fragment,o),x(Cl.$$.fragment,o),x(cr.$$.fragment,o),x(Il.$$.fragment,o),x(pr.$$.fragment,o),x(hr.$$.fragment,o),x(mr.$$.fragment,o),x(Ll.$$.fragment,o),x(Dl.$$.fragment,o),x(ur.$$.fragment,o),x(Hl.$$.fragment,o),x(gr.$$.fragment,o),x(_r.$$.fragment,o),x(Rl.$$.fragment,o),x(Vl.$$.fragment,o),x(kr.$$.fragment,o),x(Gl.$$.fragment,o),x(yr.$$.fragment,o),x(Tr.$$.fragment,o),x(vr.$$.fragment,o),x(Xl.$$.fragment,o),x(Yl.$$.fragment,o),x($r.$$.fragment,o),x(od.$$.fragment,o),x(xr.$$.fragment,o),x(Fr.$$.fragment,o),x(Br.$$.fragment,o),x(nd.$$.fragment,o),x(sd.$$.fragment,o),x(hd.$$.fragment,o),x(Er.$$.fragment,o),x(zr.$$.fragment,o),x(md.$$.fragment,o),x(fd.$$.fragment,o),x(vd.$$.fragment,o),x(qr.$$.fragment,o),x(jr.$$.fragment,o),x(wd.$$.fragment,o),x($d.$$.fragment,o),x(jd.$$.fragment,o),x(Nr.$$.fragment,o),x(Or.$$.fragment,o),x(Cd.$$.fragment,o),x(Nd.$$.fragment,o),x(Hd.$$.fragment,o),x(Ir.$$.fragment,o),x(Lr.$$.fragment,o),x(Rd.$$.fragment,o),x(Vd.$$.fragment,o),x(ec.$$.fragment,o),x(Sr.$$.fragment,o),x(Ur.$$.fragment,o),x(tc.$$.fragment,o),x(oc.$$.fragment,o),x(cc.$$.fragment,o),x(Hr.$$.fragment,o),x(Rr.$$.fragment,o),x(pc.$$.fragment,o),x(hc.$$.fragment,o),x(yc.$$.fragment,o),x(Qr.$$.fragment,o),x(Kr.$$.fragment,o),x(Tc.$$.fragment,o),x(vc.$$.fragment,o),x(zc.$$.fragment,o),x(Gr.$$.fragment,o),x(Xr.$$.fragment,o),xb=!1},d(o){t(d),o&&t(_),o&&t(h),F(l),o&&t(X),o&&t(z),F(oe),o&&t(me),o&&t(J),o&&t(j),o&&t(ie),o&&t(fe),o&&t(le),o&&t(ue),o&&t(q),o&&t(ge),o&&t(de),o&&t(_e),o&&t(te),o&&t(E),o&&t(K),o&&t(W),o&&t(we),F(Ee),o&&t(b_),o&&t(qt),F($a),F(ns),o&&t(k_),o&&t(Do),F(Fa),o&&t(y_),o&&t(Ne),F(Ba),F(Ea),F(Pa),F(ja),F(as),F(Ca),o&&t(T_),o&&t(Uo),F(Na),o&&t(v_),o&&t(st),F(Oa),F(La),F(Sa),F(ls),o&&t(w_),o&&t(Ho),F(Ua),o&&t($_),o&&t(Ro),F(Wa),o&&t(x_),o&&t(Vo),F(Ra),o&&t(F_),o&&t(lo),F(Qa),F(Ja),o&&t(B_),o&&t(Qo),F(Ga),o&&t(M_),o&&t(Oe),F(Xa),F(ni),F(hs),F(ms),o&&t(E_),o&&t(Jo),F(si),o&&t(z_),o&&t(rt),F(ri),F(di),F(us),F(gs),o&&t(P_),o&&t(Yo),F(ci),o&&t(q_),o&&t(at),F(pi),F(gi),F(bs),F(ks),o&&t(j_),o&&t(en),F(_i),o&&t(C_),o&&t(it),F(bi),F(wi),F(Ts),F(vs),F(ws),o&&t(N_),o&&t(on),F($i),o&&t(O_),o&&t(lt),F(xi),F(zi),F(xs),F(Fs),o&&t(A_),o&&t(sn),F(Pi),o&&t(I_),o&&t(dt),F(qi),F(Oi),F(Ms),F(Es),F(zs),F(Ps),F(qs),o&&t(L_),o&&t(an),F(Ai),o&&t(D_),o&&t(ct),F(Ii),F(Ui),F(Cs),F(Ns),o&&t(S_),o&&t(dn),F(Wi),o&&t(U_),o&&t(pt),F(Hi),F(Ki),F(As),F(Is),F(Ls),o&&t(W_),o&&t(pn),F(Ji),o&&t(H_),o&&t(ht),F(Gi),F(el),F(Ss),F(Us),F(Ws),o&&t(R_),o&&t(fn),F(tl),o&&t(V_),o&&t(Ke),F(ol),F(Rs),F(al),F(Vs),F(Qs),o&&t(Q_),o&&t(gn),F(il),o&&t(K_),o&&t(Je),F(ll),F(Js),F(hl),F(Gs),F(Xs),o&&t(J_),o&&t(kn),F(ml),o&&t(G_),o&&t(yn),F(fl),F(ul),F(Zs),o&&t(X_),o&&t(Tn),F(kl),o&&t(Y_),o&&t(Ge),F(yl),F(tr),F(xl),F(or),F(nr),F(sr),o&&t(Z_),o&&t(wn),F(Fl),o&&t(eb),o&&t(Xe),F(Bl),F(ar),F(ql),F(ir),F(lr),o&&t(tb),o&&t(xn),F(jl),o&&t(ob),o&&t(Ye),F(Cl),F(cr),F(Il),F(pr),F(hr),F(mr),o&&t(nb),o&&t(Bn),F(Ll),o&&t(sb),o&&t(Ze),F(Dl),F(ur),F(Hl),F(gr),F(_r),o&&t(rb),o&&t(En),F(Rl),o&&t(ab),o&&t(et),F(Vl),F(kr),F(Gl),F(yr),F(Tr),F(vr),o&&t(ib),o&&t(Pn),F(Xl),o&&t(lb),o&&t(tt),F(Yl),F($r),F(od),F(xr),F(Fr),F(Br),o&&t(db),o&&t(Cn),F(nd),o&&t(cb),o&&t(Ie),F(sd),F(hd),F(Er),F(zr),o&&t(pb),o&&t(On),F(md),o&&t(hb),o&&t(Le),F(fd),F(vd),F(qr),F(jr),o&&t(mb),o&&t(Ln),F(wd),o&&t(fb),o&&t(De),F($d),F(jd),F(Nr),F(Or),o&&t(ub),o&&t(Sn),F(Cd),o&&t(gb),o&&t(Se),F(Nd),F(Hd),F(Ir),F(Lr),o&&t(_b),o&&t(Wn),F(Rd),o&&t(bb),o&&t(Ue),F(Vd),F(ec),F(Sr),F(Ur),o&&t(kb),o&&t(Rn),F(tc),o&&t(yb),o&&t(We),F(oc),F(cc),F(Hr),F(Rr),o&&t(Tb),o&&t(Qn),F(pc),o&&t(vb),o&&t(He),F(hc),F(yc),F(Qr),F(Kr),o&&t(wb),o&&t(Jn),F(Tc),o&&t($b),o&&t(Re),F(vc),F(zc),F(Gr),F(Xr)}}}const TN={local:"bert",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertConfig",title:"BertConfig"},{local:"transformers.BertTokenizer",title:"BertTokenizer"},{local:"transformers.BertTokenizerFast",title:"BertTokenizerFast"},{local:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",title:"Bert specific outputs"},{local:"transformers.BertModel",title:"BertModel"},{local:"transformers.BertForPreTraining",title:"BertForPreTraining"},{local:"transformers.BertLMHeadModel",title:"BertLMHeadModel"},{local:"transformers.BertForMaskedLM",title:"BertForMaskedLM"},{local:"transformers.BertForNextSentencePrediction",title:"BertForNextSentencePrediction"},{local:"transformers.BertForSequenceClassification",title:"BertForSequenceClassification"},{local:"transformers.BertForMultipleChoice",title:"BertForMultipleChoice"},{local:"transformers.BertForTokenClassification",title:"BertForTokenClassification"},{local:"transformers.BertForQuestionAnswering",title:"BertForQuestionAnswering"},{local:"transformers.TFBertModel",title:"TFBertModel"},{local:"transformers.TFBertForPreTraining",title:"TFBertForPreTraining"},{local:"transformers.TFBertLMHeadModel",title:"TFBertModelLMHeadModel"},{local:"transformers.TFBertForMaskedLM",title:"TFBertForMaskedLM"},{local:"transformers.TFBertForNextSentencePrediction",title:"TFBertForNextSentencePrediction"},{local:"transformers.TFBertForSequenceClassification",title:"TFBertForSequenceClassification"},{local:"transformers.TFBertForMultipleChoice",title:"TFBertForMultipleChoice"},{local:"transformers.TFBertForTokenClassification",title:"TFBertForTokenClassification"},{local:"transformers.TFBertForQuestionAnswering",title:"TFBertForQuestionAnswering"},{local:"transformers.FlaxBertModel",title:"FlaxBertModel"},{local:"transformers.FlaxBertForPreTraining",title:"FlaxBertForPreTraining"},{local:"transformers.FlaxBertForMaskedLM",title:"FlaxBertForMaskedLM"},{local:"transformers.FlaxBertForNextSentencePrediction",title:"FlaxBertForNextSentencePrediction"},{local:"transformers.FlaxBertForSequenceClassification",title:"FlaxBertForSequenceClassification"},{local:"transformers.FlaxBertForMultipleChoice",title:"FlaxBertForMultipleChoice"},{local:"transformers.FlaxBertForTokenClassification",title:"FlaxBertForTokenClassification"},{local:"transformers.FlaxBertForQuestionAnswering",title:"FlaxBertForQuestionAnswering"}],title:"BERT"};function vN(B){return t5(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class EN extends X3{constructor(d){super();Y3(this,d,vN,yN,Z3,{})}}export{EN as default,TN as metadata};
