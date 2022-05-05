import{S as pC,i as hC,s as mC,e as n,k as c,w as b,t as r,M as uC,c as s,d as t,m as p,a,x as y,h as i,b as f,F as e,g as k,y as E,q as w,o as $,B as F,v as fC,L as le}from"../../chunks/vendor-6b77c823.js";import{T as ye}from"../../chunks/Tip-39098574.js";import{D as I}from"../../chunks/Docstring-1088f2fb.js";import{C as de}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as we}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as ie}from"../../chunks/ExampleCodeBlock-5212b321.js";function gC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraModel, ElectraConfig

# Initializing a ELECTRA electra-base-uncased style configuration
configuration = ElectraConfig()

# Initializing a model from the electra-base-uncased style configuration
model = ElectraModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraModel, ElectraConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ELECTRA electra-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ElectraConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the electra-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=r("Examples:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Examples:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function _C(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function kC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, ElectraModel
import torch

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = ElectraModel.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraModel.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function vC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function TC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraForPreTraining, ElectraTokenizerFast
import torch

discriminator = ElectraForPreTraining.from_pretrained("google/electra-base-discriminator")
tokenizer = ElectraTokenizerFast.from_pretrained("google/electra-base-discriminator")

sentence = "The quick brown fox jumps over the lazy dog"
fake_sentence = "The quick brown fox fake over the lazy dog"

fake_tokens = tokenizer.tokenize(fake_sentence, add_special_tokens=True)
fake_inputs = tokenizer.encode(fake_sentence, return_tensors="pt")
discriminator_outputs = discriminator(fake_inputs)
predictions = torch.round((torch.sign(discriminator_outputs[0]) + 1) / 2)

fake_tokens

predictions.squeeze().tolist()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraForPreTraining, ElectraTokenizerFast
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>discriminator = ElectraForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/electra-base-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizerFast.from_pretrained(<span class="hljs-string">&quot;google/electra-base-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sentence = <span class="hljs-string">&quot;The quick brown fox jumps over the lazy dog&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>fake_sentence = <span class="hljs-string">&quot;The quick brown fox fake over the lazy dog&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>fake_tokens = tokenizer.tokenize(fake_sentence, add_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>fake_inputs = tokenizer.encode(fake_sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>discriminator_outputs = discriminator(fake_inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>predictions = torch.<span class="hljs-built_in">round</span>((torch.sign(discriminator_outputs[<span class="hljs-number">0</span>]) + <span class="hljs-number">1</span>) / <span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>fake_tokens
[<span class="hljs-string">&#x27;[CLS]&#x27;</span>, <span class="hljs-string">&#x27;the&#x27;</span>, <span class="hljs-string">&#x27;quick&#x27;</span>, <span class="hljs-string">&#x27;brown&#x27;</span>, <span class="hljs-string">&#x27;fox&#x27;</span>, <span class="hljs-string">&#x27;fake&#x27;</span>, <span class="hljs-string">&#x27;over&#x27;</span>, <span class="hljs-string">&#x27;the&#x27;</span>, <span class="hljs-string">&#x27;lazy&#x27;</span>, <span class="hljs-string">&#x27;dog&#x27;</span>, <span class="hljs-string">&#x27;[SEP]&#x27;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predictions.squeeze().tolist()
[<span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">1.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>]`}}),{c(){d=n("p"),g=r("Examples:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Examples:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function bC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function yC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, ElectraForCausalLM, ElectraConfig
import torch

tokenizer = ElectraTokenizer.from_pretrained("google/electra-base-generator")
config = ElectraConfig.from_pretrained("google/electra-base-generator")
config.is_decoder = True
model = ElectraForCausalLM.from_pretrained("google/electra-base-generator", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForCausalLM, ElectraConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-base-generator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = ElectraConfig.from_pretrained(<span class="hljs-string">&quot;google/electra-base-generator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/electra-base-generator&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function EC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function wC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, ElectraForMaskedLM
import torch

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-generator")
model = ElectraForMaskedLM.from_pretrained("google/electra-small-generator")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-generator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/electra-small-generator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function $C(x){let d,g;return d=new de({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.22</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:le,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function FC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function xC(x){let d,g,h,m,_;return m=new de({props:{code:`import torch
from transformers import ElectraTokenizer, ElectraForSequenceClassification

tokenizer = ElectraTokenizer.from_pretrained("bhadresh-savani/electra-base-emotion")
model = ElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of single-label classification:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example of single-label classification:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function MC(x){let d,g;return d=new de({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = ElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.06</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:le,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function zC(x){let d,g,h,m,_;return m=new de({props:{code:`import torch
from transformers import ElectraTokenizer, ElectraForSequenceClassification

tokenizer = ElectraTokenizer.from_pretrained("bhadresh-savani/electra-base-emotion")
model = ElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of multi-label classification:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example of multi-label classification:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function CC(x){let d,g;return d=new de({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = ElectraForSequenceClassification.from_pretrained(
    "bhadresh-savani/electra-base-emotion", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:le,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function jC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function qC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, ElectraForMultipleChoice
import torch

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = ElectraForMultipleChoice.from_pretrained("google/electra-small-discriminator")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function PC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function AC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, ElectraForTokenClassification
import torch

tokenizer = ElectraTokenizer.from_pretrained("bhadresh-savani/electra-base-discriminator-finetuned-conll03-english")
model = ElectraForTokenClassification.from_pretrained("bhadresh-savani/electra-base-discriminator-finetuned-conll03-english")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-discriminator-finetuned-conll03-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-discriminator-finetuned-conll03-english&quot;</span>)

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
[<span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;B-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function OC(x){let d,g;return d=new de({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.11</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:le,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function LC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function NC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, ElectraForQuestionAnswering
import torch

tokenizer = ElectraTokenizer.from_pretrained("bhadresh-savani/electra-base-squad2")
model = ElectraForQuestionAnswering.from_pretrained("bhadresh-savani/electra-base-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, ElectraForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ElectraForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function IC(x){let d,g;return d=new de({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([11])
target_end_index = torch.tensor([12])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">11</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">12</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">2.64</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:le,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function DC(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,D,oe,fe,S,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ce,H,ve,G,L,se,B,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),D=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ce=r(" or "),H=n("code"),ve=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var xe=a(D);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var be=a(S);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var Q=a(P);ae=i(Q,"a single Tensor with "),R=s(Q,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(Q," only and nothing else: "),W=s(Q,"CODE",{});var $e=a(W);_e=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),me=p(A),q=s(A,"LI",{});var V=a(q);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ce=i(V," or "),H=s(V,"CODE",{});var Me=a(H);ve=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(Z,"CODE",{});var Ee=a(B);Te=i(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){k(T,d,z),e(d,g),k(T,h,z),k(T,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),k(T,J,z),k(T,C,z),e(C,ee),e(C,D),e(D,oe),e(C,fe),e(C,S),e(S,ge),e(C,pe),k(T,K,z),k(T,O,z),e(O,ne),k(T,X,z),k(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ce),e(q,H),e(H,ve),e(j,G),e(j,L),e(L,se),e(L,B),e(B,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function SC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function WC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, TFElectraModel
import tensorflow as tf

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = TFElectraModel.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraModel.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function UC(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,D,oe,fe,S,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ce,H,ve,G,L,se,B,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),D=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ce=r(" or "),H=n("code"),ve=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var xe=a(D);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var be=a(S);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var Q=a(P);ae=i(Q,"a single Tensor with "),R=s(Q,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(Q," only and nothing else: "),W=s(Q,"CODE",{});var $e=a(W);_e=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),me=p(A),q=s(A,"LI",{});var V=a(q);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ce=i(V," or "),H=s(V,"CODE",{});var Me=a(H);ve=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(Z,"CODE",{});var Ee=a(B);Te=i(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){k(T,d,z),e(d,g),k(T,h,z),k(T,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),k(T,J,z),k(T,C,z),e(C,ee),e(C,D),e(D,oe),e(C,fe),e(C,S),e(S,ge),e(C,pe),k(T,K,z),k(T,O,z),e(O,ne),k(T,X,z),k(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ce),e(q,H),e(H,ve),e(j,G),e(j,L),e(L,se),e(L,B),e(B,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function RC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function HC(x){let d,g,h,m,_;return m=new de({props:{code:`import tensorflow as tf
from transformers import ElectraTokenizer, TFElectraForPreTraining

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = TFElectraForPreTraining.from_pretrained("google/electra-small-discriminator")
input_ids = tf.constant(tokenizer.encode("Hello, my dog is cute"))[None, :]  # Batch size 1
outputs = model(input_ids)
scores = outputs[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>))[<span class="hljs-literal">None</span>, :]  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>scores = outputs[<span class="hljs-number">0</span>]`}}),{c(){d=n("p"),g=r("Examples:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Examples:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function BC(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,D,oe,fe,S,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ce,H,ve,G,L,se,B,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),D=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ce=r(" or "),H=n("code"),ve=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var xe=a(D);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var be=a(S);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var Q=a(P);ae=i(Q,"a single Tensor with "),R=s(Q,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(Q," only and nothing else: "),W=s(Q,"CODE",{});var $e=a(W);_e=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),me=p(A),q=s(A,"LI",{});var V=a(q);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ce=i(V," or "),H=s(V,"CODE",{});var Me=a(H);ve=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(Z,"CODE",{});var Ee=a(B);Te=i(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){k(T,d,z),e(d,g),k(T,h,z),k(T,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),k(T,J,z),k(T,C,z),e(C,ee),e(C,D),e(D,oe),e(C,fe),e(C,S),e(S,ge),e(C,pe),k(T,K,z),k(T,O,z),e(O,ne),k(T,X,z),k(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ce),e(q,H),e(H,ve),e(j,G),e(j,L),e(L,se),e(L,B),e(B,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function QC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function VC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, TFElectraForMaskedLM
import tensorflow as tf

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-generator")
model = TFElectraForMaskedLM.from_pretrained("google/electra-small-generator")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-generator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/electra-small-generator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function KC(x){let d,g;return d=new de({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">1.22</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:le,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function JC(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,D,oe,fe,S,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ce,H,ve,G,L,se,B,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),D=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ce=r(" or "),H=n("code"),ve=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var xe=a(D);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var be=a(S);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var Q=a(P);ae=i(Q,"a single Tensor with "),R=s(Q,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(Q," only and nothing else: "),W=s(Q,"CODE",{});var $e=a(W);_e=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),me=p(A),q=s(A,"LI",{});var V=a(q);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ce=i(V," or "),H=s(V,"CODE",{});var Me=a(H);ve=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(Z,"CODE",{});var Ee=a(B);Te=i(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){k(T,d,z),e(d,g),k(T,h,z),k(T,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),k(T,J,z),k(T,C,z),e(C,ee),e(C,D),e(D,oe),e(C,fe),e(C,S),e(S,ge),e(C,pe),k(T,K,z),k(T,O,z),e(O,ne),k(T,X,z),k(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ce),e(q,H),e(H,ve),e(j,G),e(j,L),e(L,se),e(L,B),e(B,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function GC(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function XC(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, TFElectraForSequenceClassification
import tensorflow as tf

tokenizer = ElectraTokenizer.from_pretrained("bhadresh-savani/electra-base-emotion")
model = TFElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;joy&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function YC(x){let d,g;return d=new de({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFElectraForSequenceClassification.from_pretrained("bhadresh-savani/electra-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.06</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:le,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function ZC(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,D,oe,fe,S,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ce,H,ve,G,L,se,B,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),D=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ce=r(" or "),H=n("code"),ve=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var xe=a(D);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var be=a(S);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var Q=a(P);ae=i(Q,"a single Tensor with "),R=s(Q,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(Q," only and nothing else: "),W=s(Q,"CODE",{});var $e=a(W);_e=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),me=p(A),q=s(A,"LI",{});var V=a(q);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ce=i(V," or "),H=s(V,"CODE",{});var Me=a(H);ve=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(Z,"CODE",{});var Ee=a(B);Te=i(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){k(T,d,z),e(d,g),k(T,h,z),k(T,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),k(T,J,z),k(T,C,z),e(C,ee),e(C,D),e(D,oe),e(C,fe),e(C,S),e(S,ge),e(C,pe),k(T,K,z),k(T,O,z),e(O,ne),k(T,X,z),k(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ce),e(q,H),e(H,ve),e(j,G),e(j,L),e(L,se),e(L,B),e(B,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function ej(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function tj(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, TFElectraForMultipleChoice
import tensorflow as tf

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = TFElectraForMultipleChoice.from_pretrained("google/electra-small-discriminator")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function oj(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,D,oe,fe,S,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ce,H,ve,G,L,se,B,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),D=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ce=r(" or "),H=n("code"),ve=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var xe=a(D);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var be=a(S);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var Q=a(P);ae=i(Q,"a single Tensor with "),R=s(Q,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(Q," only and nothing else: "),W=s(Q,"CODE",{});var $e=a(W);_e=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),me=p(A),q=s(A,"LI",{});var V=a(q);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ce=i(V," or "),H=s(V,"CODE",{});var Me=a(H);ve=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(Z,"CODE",{});var Ee=a(B);Te=i(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){k(T,d,z),e(d,g),k(T,h,z),k(T,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),k(T,J,z),k(T,C,z),e(C,ee),e(C,D),e(D,oe),e(C,fe),e(C,S),e(S,ge),e(C,pe),k(T,K,z),k(T,O,z),e(O,ne),k(T,X,z),k(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ce),e(q,H),e(H,ve),e(j,G),e(j,L),e(L,se),e(L,B),e(B,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function nj(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function sj(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, TFElectraForTokenClassification
import tensorflow as tf

tokenizer = ElectraTokenizer.from_pretrained("bhadresh-savani/electra-base-discriminator-finetuned-conll03-english")
model = TFElectraForTokenClassification.from_pretrained("bhadresh-savani/electra-base-discriminator-finetuned-conll03-english")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-discriminator-finetuned-conll03-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-discriminator-finetuned-conll03-english&quot;</span>)

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
[<span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;B-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;B-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function aj(x){let d,g;return d=new de({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.11</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:le,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function rj(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,D,oe,fe,S,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ce,H,ve,G,L,se,B,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),M=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),C=n("p"),ee=r("This second option is useful when using "),D=n("code"),oe=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),pe=r("."),K=c(),O=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),j=n("ul"),P=n("li"),ae=r("a single Tensor with "),R=n("code"),he=r("input_ids"),re=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),me=c(),q=n("li"),ke=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),te=r("model([input_ids, attention_mask])"),ce=r(" or "),H=n("code"),ve=r("model([input_ids, attention_mask, token_type_ids])"),G=c(),L=n("li"),se=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=s(T,"P",{});var z=a(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),h=p(T),m=s(T,"UL",{});var Y=a(m);_=s(Y,"LI",{});var Fe=a(_);l=i(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(t),u=p(Y),M=s(Y,"LI",{});var ze=a(M);ue=i(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),Y.forEach(t),J=p(T),C=s(T,"P",{});var N=a(C);ee=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var xe=a(D);oe=i(xe,"tf.keras.Model.fit"),xe.forEach(t),fe=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var be=a(S);ge=i(be,"model(inputs)"),be.forEach(t),pe=i(N,"."),N.forEach(t),K=p(T),O=s(T,"P",{});var Ce=a(O);ne=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),X=p(T),j=s(T,"UL",{});var A=a(j);P=s(A,"LI",{});var Q=a(P);ae=i(Q,"a single Tensor with "),R=s(Q,"CODE",{});var je=a(R);he=i(je,"input_ids"),je.forEach(t),re=i(Q," only and nothing else: "),W=s(Q,"CODE",{});var $e=a(W);_e=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),me=p(A),q=s(A,"LI",{});var V=a(q);ke=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(V,"CODE",{});var qe=a(U);te=i(qe,"model([input_ids, attention_mask])"),qe.forEach(t),ce=i(V," or "),H=s(V,"CODE",{});var Me=a(H);ve=i(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(t),V.forEach(t),G=p(A),L=s(A,"LI",{});var Z=a(L);se=i(Z,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(Z,"CODE",{});var Ee=a(B);Te=i(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),Z.forEach(t),A.forEach(t)},m(T,z){k(T,d,z),e(d,g),k(T,h,z),k(T,m,z),e(m,_),e(_,l),e(m,u),e(m,M),e(M,ue),k(T,J,z),k(T,C,z),e(C,ee),e(C,D),e(D,oe),e(C,fe),e(C,S),e(S,ge),e(C,pe),k(T,K,z),k(T,O,z),e(O,ne),k(T,X,z),k(T,j,z),e(j,P),e(P,ae),e(P,R),e(R,he),e(P,re),e(P,W),e(W,_e),e(j,me),e(j,q),e(q,ke),e(q,U),e(U,te),e(q,ce),e(q,H),e(H,ve),e(j,G),e(j,L),e(L,se),e(L,B),e(B,Te)},d(T){T&&t(d),T&&t(h),T&&t(m),T&&t(J),T&&t(C),T&&t(K),T&&t(O),T&&t(X),T&&t(j)}}}function ij(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function lj(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, TFElectraForQuestionAnswering
import tensorflow as tf

tokenizer = ElectraTokenizer.from_pretrained("bhadresh-savani/electra-base-squad2")
model = TFElectraForQuestionAnswering.from_pretrained("bhadresh-savani/electra-base-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, TFElectraForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFElectraForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;bhadresh-savani/electra-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function dj(x){let d,g;return d=new de({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([11])
target_end_index = tf.constant([12])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">11</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">12</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">2.64</span>`}}),{c(){b(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){E(d,h,m),g=!0},p:le,i(h){g||(w(d.$$.fragment,h),g=!0)},o(h){$(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function cj(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function pj(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraModel

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraModel.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraModel.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function hj(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function mj(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForPreTraining

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForPreTraining.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function uj(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function fj(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForCausalLM

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForCausalLM.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function gj(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function _j(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMaskedLM

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForMaskedLM.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function kj(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function vj(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForSequenceClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForSequenceClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Tj(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function bj(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForMultipleChoice

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForMultipleChoice.from_pretrained("google/electra-small-discriminator")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function yj(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function Ej(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForTokenClassification

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForTokenClassification.from_pretrained("google/electra-small-discriminator")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function wj(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var M=a(h);m=i(M,"Module"),M.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){k(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function $j(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import ElectraTokenizer, FlaxElectraForQuestionAnswering

tokenizer = ElectraTokenizer.from_pretrained("google/electra-small-discriminator")
model = FlaxElectraForQuestionAnswering.from_pretrained("google/electra-small-discriminator")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ElectraTokenizer, FlaxElectraForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ElectraTokenizer.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxElectraForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/electra-small-discriminator&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),b(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){k(l,d,u),e(d,g),k(l,h,u),E(m,l,u),_=!0},p:le,i(l){_||(w(m.$$.fragment,l),_=!0)},o(l){$(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Fj(x){let d,g,h,m,_,l,u,M,ue,J,C,ee,D,oe,fe,S,ge,pe,K,O,ne,X,j,P,ae,R,he,re,W,_e,me,q,ke,U,te,ce,H,ve,G,L,se,B,Te,T,z,Y,Fe,ze,N,xe,be,Ce,A,Q,je,$e,V,qe,Me,Z,Ee,Dc,Pa,Vg,Sc,Kg,Fu,yt,Aa,Jg,Vt,Gg,_d,Xg,Yg,kd,Zg,e_,Oa,t_,o_,n_,To,s_,vd,a_,r_,Td,i_,l_,d_,wn,xu,bo,$n,Wc,La,c_,Uc,p_,Mu,Et,Na,h_,Rc,m_,u_,Fn,bd,f_,g_,yd,__,k_,v_,Ia,T_,Ed,b_,y_,zu,yo,xn,Hc,Da,E_,Bc,w_,Cu,wt,Sa,$_,Wa,F_,Qc,x_,M_,z_,Mn,wd,C_,j_,$d,q_,P_,A_,Ua,O_,Fd,L_,N_,ju,Eo,zn,Vc,Ra,I_,Kc,D_,qu,wo,Ha,S_,Ba,W_,xd,U_,R_,Pu,$o,Qa,H_,Va,B_,Md,Q_,V_,Au,Fo,Cn,Jc,Ka,K_,Gc,J_,Ou,et,Ja,G_,Xc,X_,Y_,Ga,Z_,zd,e1,t1,o1,Xa,n1,Ya,s1,a1,r1,$t,Za,i1,xo,l1,Cd,d1,c1,Yc,p1,h1,m1,jn,u1,qn,Lu,Mo,Pn,Zc,er,f1,ep,g1,Nu,Be,tr,_1,tp,k1,v1,op,T1,b1,or,y1,jd,E1,w1,$1,nr,F1,sr,x1,M1,z1,Ft,ar,C1,zo,j1,qd,q1,P1,np,A1,O1,L1,An,N1,On,Iu,Co,Ln,sp,rr,I1,ap,D1,Du,tt,ir,S1,lr,W1,rp,U1,R1,H1,dr,B1,Pd,Q1,V1,K1,cr,J1,pr,G1,X1,Y1,xt,hr,Z1,jo,ek,Ad,tk,ok,ip,nk,sk,ak,Nn,rk,In,Su,qo,Dn,lp,mr,ik,dp,lk,Wu,Qe,ur,dk,cp,ck,pk,pp,hk,mk,fr,uk,Od,fk,gk,_k,gr,kk,_r,vk,Tk,bk,at,kr,yk,Po,Ek,Ld,wk,$k,hp,Fk,xk,Mk,Sn,zk,Wn,Ck,Un,Uu,Ao,Rn,mp,vr,jk,up,qk,Ru,ot,Tr,Pk,fp,Ak,Ok,br,Lk,Nd,Nk,Ik,Dk,yr,Sk,Er,Wk,Uk,Rk,He,wr,Hk,Oo,Bk,Id,Qk,Vk,gp,Kk,Jk,Gk,Hn,Xk,Bn,Yk,Qn,Zk,Vn,ev,Kn,Hu,Lo,Jn,_p,$r,tv,kp,ov,Bu,nt,Fr,nv,vp,sv,av,xr,rv,Dd,iv,lv,dv,Mr,cv,zr,pv,hv,mv,Mt,Cr,uv,No,fv,Sd,gv,_v,Tp,kv,vv,Tv,Gn,bv,Xn,Qu,Io,Yn,bp,jr,yv,yp,Ev,Vu,Ve,qr,wv,Ep,$v,Fv,wp,xv,Mv,Pr,zv,Wd,Cv,jv,qv,Ar,Pv,Or,Av,Ov,Lv,rt,Lr,Nv,Do,Iv,Ud,Dv,Sv,$p,Wv,Uv,Rv,Zn,Hv,es,Bv,ts,Ku,So,os,Fp,Nr,Qv,xp,Vv,Ju,st,Ir,Kv,Wo,Jv,Mp,Gv,Xv,zp,Yv,Zv,eT,Dr,tT,Rd,oT,nT,sT,Sr,aT,Wr,rT,iT,lT,it,Ur,dT,Uo,cT,Hd,pT,hT,Cp,mT,uT,fT,ns,gT,ss,_T,as,Gu,Ro,rs,jp,Rr,kT,qp,vT,Xu,Ke,Hr,TT,Pp,bT,yT,Br,ET,Bd,wT,$T,FT,Qr,xT,Vr,MT,zT,CT,is,jT,zt,Kr,qT,Ho,PT,Qd,AT,OT,Ap,LT,NT,IT,ls,DT,ds,Yu,Bo,cs,Op,Jr,ST,Lp,WT,Zu,Oe,Gr,UT,Np,RT,HT,Ip,BT,QT,Xr,VT,Vd,KT,JT,GT,Yr,XT,Zr,YT,ZT,eb,ps,tb,Ct,ei,ob,Qo,nb,Kd,sb,ab,Dp,rb,ib,lb,hs,db,ms,ef,Vo,us,Sp,ti,cb,Wp,pb,tf,Le,oi,hb,Up,mb,ub,Rp,fb,gb,ni,_b,Jd,kb,vb,Tb,si,bb,ai,yb,Eb,wb,fs,$b,lt,ri,Fb,Ko,xb,Gd,Mb,zb,Hp,Cb,jb,qb,gs,Pb,_s,Ab,ks,of,Jo,vs,Bp,ii,Ob,Qp,Lb,nf,Je,li,Nb,Vp,Ib,Db,di,Sb,Xd,Wb,Ub,Rb,ci,Hb,pi,Bb,Qb,Vb,Ts,Kb,dt,hi,Jb,Go,Gb,Yd,Xb,Yb,Kp,Zb,ey,ty,bs,oy,ys,ny,Es,sf,Xo,ws,Jp,mi,sy,Gp,ay,af,Ge,ui,ry,Xp,iy,ly,fi,dy,Zd,cy,py,hy,gi,my,_i,uy,fy,gy,$s,_y,jt,ki,ky,Yo,vy,ec,Ty,by,Yp,yy,Ey,wy,Fs,$y,xs,rf,Zo,Ms,Zp,vi,Fy,eh,xy,lf,Ne,Ti,My,th,zy,Cy,oh,jy,qy,bi,Py,tc,Ay,Oy,Ly,yi,Ny,Ei,Iy,Dy,Sy,zs,Wy,ct,wi,Uy,en,Ry,oc,Hy,By,nh,Qy,Vy,Ky,Cs,Jy,js,Gy,qs,df,tn,Ps,sh,$i,Xy,ah,Yy,cf,Xe,Fi,Zy,on,eE,rh,tE,oE,ih,nE,sE,aE,xi,rE,nc,iE,lE,dE,Mi,cE,zi,pE,hE,mE,As,uE,pt,Ci,fE,nn,gE,sc,_E,kE,lh,vE,TE,bE,Os,yE,Ls,EE,Ns,pf,sn,Is,dh,ji,wE,ch,$E,hf,Ie,qi,FE,ph,xE,ME,Pi,zE,ac,CE,jE,qE,Ai,PE,Oi,AE,OE,LE,hh,NE,IE,Kt,mh,Li,DE,SE,uh,Ni,WE,UE,fh,Ii,RE,HE,gh,Di,BE,QE,qt,Si,VE,an,KE,_h,JE,GE,kh,XE,YE,ZE,Ds,ew,Ss,mf,rn,Ws,vh,Wi,tw,Th,ow,uf,Pe,Ui,nw,bh,sw,aw,yh,rw,iw,Ri,lw,rc,dw,cw,pw,Hi,hw,Bi,mw,uw,fw,Eh,gw,_w,Jt,wh,Qi,kw,vw,$h,Vi,Tw,bw,Fh,Ki,yw,Ew,xh,Ji,ww,$w,Pt,Gi,Fw,ln,xw,Mh,Mw,zw,zh,Cw,jw,qw,Us,Pw,Rs,ff,dn,Hs,Ch,Xi,Aw,jh,Ow,gf,De,Yi,Lw,qh,Nw,Iw,Zi,Dw,ic,Sw,Ww,Uw,el,Rw,tl,Hw,Bw,Qw,Ph,Vw,Kw,Gt,Ah,ol,Jw,Gw,Oh,nl,Xw,Yw,Lh,sl,Zw,e$,Nh,al,t$,o$,At,rl,n$,cn,s$,Ih,a$,r$,Dh,i$,l$,d$,Bs,c$,Qs,_f,pn,Vs,Sh,il,p$,Wh,h$,kf,Se,ll,m$,dl,u$,Uh,f$,g$,_$,cl,k$,lc,v$,T$,b$,pl,y$,hl,E$,w$,$$,Rh,F$,x$,Xt,Hh,ml,M$,z$,Bh,ul,C$,j$,Qh,fl,q$,P$,Vh,gl,A$,O$,Ot,_l,L$,hn,N$,Kh,I$,D$,Jh,S$,W$,U$,Ks,R$,Js,vf,mn,Gs,Gh,kl,H$,Xh,B$,Tf,We,vl,Q$,Yh,V$,K$,Tl,J$,dc,G$,X$,Y$,bl,Z$,yl,e2,t2,o2,Zh,n2,s2,Yt,em,El,a2,r2,tm,wl,i2,l2,om,$l,d2,c2,nm,Fl,p2,h2,Lt,xl,m2,un,u2,sm,f2,g2,am,_2,k2,v2,Xs,T2,Ys,bf,fn,Zs,rm,Ml,b2,im,y2,yf,Ue,zl,E2,lm,w2,$2,Cl,F2,cc,x2,M2,z2,jl,C2,ql,j2,q2,P2,dm,A2,O2,Zt,cm,Pl,L2,N2,pm,Al,I2,D2,hm,Ol,S2,W2,mm,Ll,U2,R2,Nt,Nl,H2,gn,B2,um,Q2,V2,fm,K2,J2,G2,ea,X2,ta,Ef,_n,oa,gm,Il,Y2,_m,Z2,wf,Ae,Dl,e0,km,t0,o0,vm,n0,s0,Sl,a0,pc,r0,i0,l0,Wl,d0,Ul,c0,p0,h0,Tm,m0,u0,eo,bm,Rl,f0,g0,ym,Hl,_0,k0,Em,Bl,v0,T0,wm,Ql,b0,y0,It,Vl,E0,kn,w0,$m,$0,F0,Fm,x0,M0,z0,na,C0,sa,$f,vn,aa,xm,Kl,j0,Mm,q0,Ff,Re,Jl,P0,Tn,A0,zm,O0,L0,Cm,N0,I0,D0,Gl,S0,hc,W0,U0,R0,Xl,H0,Yl,B0,Q0,V0,jm,K0,J0,to,qm,Zl,G0,X0,Pm,ed,Y0,Z0,Am,td,eF,tF,Om,od,oF,nF,Dt,nd,sF,bn,aF,Lm,rF,iF,Nm,lF,dF,cF,ra,pF,ia,xf;return l=new we({}),oe=new we({}),Pa=new we({}),Aa=new I({props:{name:"class transformers.ElectraConfig",anchor:"transformers.ElectraConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 256"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 4"},{name:"intermediate_size",val:" = 1024"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"summary_type",val:" = 'first'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = 'gelu'"},{name:"summary_last_dropout",val:" = 0.1"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ElectraConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ELECTRA model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraModel">ElectraModel</a> or <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.TFElectraModel">TFElectraModel</a>.`,name:"vocab_size"},{anchor:"transformers.ElectraConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"embedding_size"},{anchor:"transformers.ElectraConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ElectraConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ElectraConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ElectraConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ElectraConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ElectraConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ElectraConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ElectraConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.ElectraConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraModel">ElectraModel</a> or <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.TFElectraModel">TFElectraModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.ElectraConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ElectraConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ElectraConfig.summary_type",description:`<strong>summary_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;first&quot;</code>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.ElectraConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.ElectraConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Pass <code>&quot;gelu&quot;</code> for a gelu activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.ElectraConfig.summary_last_dropout",description:`<strong>summary_last_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_last_dropout"},{anchor:"transformers.ElectraConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.ElectraConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.ElectraConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/configuration_electra.py#L38"}}),wn=new ie({props:{anchor:"transformers.ElectraConfig.example",$$slots:{default:[gC]},$$scope:{ctx:x}}}),La=new we({}),Na=new I({props:{name:"class transformers.ElectraTokenizer",anchor:"transformers.ElectraTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/tokenization_electra.py#L52"}}),Da=new we({}),Sa=new I({props:{name:"class transformers.ElectraTokenizerFast",anchor:"transformers.ElectraTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/tokenization_electra_fast.py#L61"}}),Ra=new we({}),Ha=new I({props:{name:"class transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_electra.py#L697"}}),Qa=new I({props:{name:"class transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>tf.Tensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA objective.`,name:"loss"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_tf_electra.py#L805"}}),Ka=new we({}),Ja=new I({props:{name:"class transformers.ElectraModel",anchor:"transformers.ElectraModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_electra.py#L809"}}),Za=new I({props:{name:"forward",anchor:"transformers.ElectraModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_electra.py#L836",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jn=new ye({props:{$$slots:{default:[_C]},$$scope:{ctx:x}}}),qn=new ie({props:{anchor:"transformers.ElectraModel.forward.example",$$slots:{default:[kC]},$$scope:{ctx:x}}}),er=new we({}),tr=new I({props:{name:"class transformers.ElectraForPreTraining",anchor:"transformers.ElectraForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_electra.py#L1060"}}),ar=new I({props:{name:"forward",anchor:"transformers.ElectraForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForPreTraining.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForPreTraining.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the ELECTRA loss. Input should be a sequence of tokens (see <code>input_ids</code> docstring)
Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates the token is an original token,</li>
<li>1 indicates the token was replaced.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_electra.py#L1069",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"
>transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss of the ELECTRA objective.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the head (scores for each token before SoftMax).</p>
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
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"
>transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),An=new ye({props:{$$slots:{default:[vC]},$$scope:{ctx:x}}}),On=new ie({props:{anchor:"transformers.ElectraForPreTraining.forward.example",$$slots:{default:[TC]},$$scope:{ctx:x}}}),rr=new we({}),ir=new I({props:{name:"class transformers.ElectraForCausalLM",anchor:"transformers.ElectraForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_electra.py#L1535"}}),hr=new I({props:{name:"forward",anchor:"transformers.ElectraForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.ElectraForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.ElectraForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_electra.py#L1554",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Nn=new ye({props:{$$slots:{default:[bC]},$$scope:{ctx:x}}}),In=new ie({props:{anchor:"transformers.ElectraForCausalLM.forward.example",$$slots:{default:[yC]},$$scope:{ctx:x}}}),mr=new we({}),ur=new I({props:{name:"class transformers.ElectraForMaskedLM",anchor:"transformers.ElectraForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_electra.py#L1166"}}),kr=new I({props:{name:"forward",anchor:"transformers.ElectraForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForMaskedLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForMaskedLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_electra.py#L1183",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Sn=new ye({props:{$$slots:{default:[EC]},$$scope:{ctx:x}}}),Wn=new ie({props:{anchor:"transformers.ElectraForMaskedLM.forward.example",$$slots:{default:[wC]},$$scope:{ctx:x}}}),Un=new ie({props:{anchor:"transformers.ElectraForMaskedLM.forward.example-2",$$slots:{default:[$C]},$$scope:{ctx:x}}}),vr=new we({}),Tr=new I({props:{name:"class transformers.ElectraForSequenceClassification",anchor:"transformers.ElectraForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_electra.py#L961"}}),wr=new I({props:{name:"forward",anchor:"transformers.ElectraForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForSequenceClassification.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForSequenceClassification.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_electra.py#L972",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Hn=new ye({props:{$$slots:{default:[FC]},$$scope:{ctx:x}}}),Bn=new ie({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example",$$slots:{default:[xC]},$$scope:{ctx:x}}}),Qn=new ie({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-2",$$slots:{default:[MC]},$$scope:{ctx:x}}}),Vn=new ie({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-3",$$slots:{default:[zC]},$$scope:{ctx:x}}}),Kn=new ie({props:{anchor:"transformers.ElectraForSequenceClassification.forward.example-4",$$slots:{default:[CC]},$$scope:{ctx:x}}}),$r=new we({}),Fr=new I({props:{name:"class transformers.ElectraForMultipleChoice",anchor:"transformers.ElectraForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_electra.py#L1447"}}),Cr=new I({props:{name:"forward",anchor:"transformers.ElectraForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForMultipleChoice.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForMultipleChoice.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_electra.py#L1458",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Gn=new ye({props:{$$slots:{default:[jC]},$$scope:{ctx:x}}}),Xn=new ie({props:{anchor:"transformers.ElectraForMultipleChoice.forward.example",$$slots:{default:[qC]},$$scope:{ctx:x}}}),jr=new we({}),qr=new I({props:{name:"class transformers.ElectraForTokenClassification",anchor:"transformers.ElectraForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_electra.py#L1256"}}),Lr=new I({props:{name:"forward",anchor:"transformers.ElectraForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForTokenClassification.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForTokenClassification.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_electra.py#L1270",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Zn=new ye({props:{$$slots:{default:[PC]},$$scope:{ctx:x}}}),es=new ie({props:{anchor:"transformers.ElectraForTokenClassification.forward.example",$$slots:{default:[AC]},$$scope:{ctx:x}}}),ts=new ie({props:{anchor:"transformers.ElectraForTokenClassification.forward.example-2",$$slots:{default:[OC]},$$scope:{ctx:x}}}),Nr=new we({}),Ir=new I({props:{name:"class transformers.ElectraForQuestionAnswering",anchor:"transformers.ElectraForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_electra.py#L1338"}}),Ur=new I({props:{name:"forward",anchor:"transformers.ElectraForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ElectraForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ElectraForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ElectraForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.ElectraForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ElectraForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ElectraForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ElectraForQuestionAnswering.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.ElectraForQuestionAnswering.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.ElectraForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ElectraForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ElectraForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ElectraForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.ElectraForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_electra.py#L1352",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),ns=new ye({props:{$$slots:{default:[LC]},$$scope:{ctx:x}}}),ss=new ie({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example",$$slots:{default:[NC]},$$scope:{ctx:x}}}),as=new ie({props:{anchor:"transformers.ElectraForQuestionAnswering.forward.example-2",$$slots:{default:[IC]},$$scope:{ctx:x}}}),Rr=new we({}),Hr=new I({props:{name:"class transformers.TFElectraModel",anchor:"transformers.TFElectraModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_tf_electra.py#L925"}}),is=new ye({props:{$$slots:{default:[DC]},$$scope:{ctx:x}}}),Kr=new I({props:{name:"call",anchor:"transformers.TFElectraModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFElectraModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFElectraModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFElectraModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_tf_electra.py#L931",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
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
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ls=new ye({props:{$$slots:{default:[SC]},$$scope:{ctx:x}}}),ds=new ie({props:{anchor:"transformers.TFElectraModel.call.example",$$slots:{default:[WC]},$$scope:{ctx:x}}}),Jr=new we({}),Gr=new I({props:{name:"class transformers.TFElectraForPreTraining",anchor:"transformers.TFElectraForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_tf_electra.py#L1022"}}),ps=new ye({props:{$$slots:{default:[UC]},$$scope:{ctx:x}}}),ei=new I({props:{name:"call",anchor:"transformers.TFElectraForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraForPreTraining.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraForPreTraining.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraForPreTraining.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraForPreTraining.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraForPreTraining.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraForPreTraining.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraForPreTraining.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_tf_electra.py#L1029",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput"
>transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>tf.Tensor</code> of shape <code>(1,)</code>) \u2014 Total loss of the ELECTRA objective.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the head (scores for each token before SoftMax).</p>
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
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput"
>transformers.models.electra.modeling_tf_electra.TFElectraForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),hs=new ye({props:{$$slots:{default:[RC]},$$scope:{ctx:x}}}),ms=new ie({props:{anchor:"transformers.TFElectraForPreTraining.call.example",$$slots:{default:[HC]},$$scope:{ctx:x}}}),ti=new we({}),oi=new I({props:{name:"class transformers.TFElectraForMaskedLM",anchor:"transformers.TFElectraForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_tf_electra.py#L1137"}}),fs=new ye({props:{$$slots:{default:[BC]},$$scope:{ctx:x}}}),ri=new I({props:{name:"call",anchor:"transformers.TFElectraForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_tf_electra.py#L1159",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),gs=new ye({props:{$$slots:{default:[QC]},$$scope:{ctx:x}}}),_s=new ie({props:{anchor:"transformers.TFElectraForMaskedLM.call.example",$$slots:{default:[VC]},$$scope:{ctx:x}}}),ks=new ie({props:{anchor:"transformers.TFElectraForMaskedLM.call.example-2",$$slots:{default:[KC]},$$scope:{ctx:x}}}),ii=new we({}),li=new I({props:{name:"class transformers.TFElectraForSequenceClassification",anchor:"transformers.TFElectraForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_tf_electra.py#L1264"}}),Ts=new ye({props:{$$slots:{default:[JC]},$$scope:{ctx:x}}}),hi=new I({props:{name:"call",anchor:"transformers.TFElectraForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_tf_electra.py#L1271",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),bs=new ye({props:{$$slots:{default:[GC]},$$scope:{ctx:x}}}),ys=new ie({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example",$$slots:{default:[XC]},$$scope:{ctx:x}}}),Es=new ie({props:{anchor:"transformers.TFElectraForSequenceClassification.call.example-2",$$slots:{default:[YC]},$$scope:{ctx:x}}}),mi=new we({}),ui=new I({props:{name:"class transformers.TFElectraForMultipleChoice",anchor:"transformers.TFElectraForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_tf_electra.py#L1343"}}),$s=new ye({props:{$$slots:{default:[ZC]},$$scope:{ctx:x}}}),ki=new I({props:{name:"call",anchor:"transformers.TFElectraForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_tf_electra.py#L1365",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Fs=new ye({props:{$$slots:{default:[ej]},$$scope:{ctx:x}}}),xs=new ie({props:{anchor:"transformers.TFElectraForMultipleChoice.call.example",$$slots:{default:[tj]},$$scope:{ctx:x}}}),vi=new we({}),Ti=new I({props:{name:"class transformers.TFElectraForTokenClassification",anchor:"transformers.TFElectraForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_tf_electra.py#L1469"}}),zs=new ye({props:{$$slots:{default:[oj]},$$scope:{ctx:x}}}),wi=new I({props:{name:"call",anchor:"transformers.TFElectraForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_tf_electra.py#L1482",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Cs=new ye({props:{$$slots:{default:[nj]},$$scope:{ctx:x}}}),js=new ie({props:{anchor:"transformers.TFElectraForTokenClassification.call.example",$$slots:{default:[sj]},$$scope:{ctx:x}}}),qs=new ie({props:{anchor:"transformers.TFElectraForTokenClassification.call.example-2",$$slots:{default:[aj]},$$scope:{ctx:x}}}),$i=new we({}),Fi=new I({props:{name:"class transformers.TFElectraForQuestionAnswering",anchor:"transformers.TFElectraForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_tf_electra.py#L1554"}}),As=new ye({props:{$$slots:{default:[rj]},$$scope:{ctx:x}}}),Ci=new I({props:{name:"call",anchor:"transformers.TFElectraForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFElectraForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFElectraForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFElectraForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFElectraForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFElectraForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFElectraForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFElectraForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFElectraForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFElectraForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFElectraForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFElectraForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_tf_electra.py#L1564",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Os=new ye({props:{$$slots:{default:[ij]},$$scope:{ctx:x}}}),Ls=new ie({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example",$$slots:{default:[lj]},$$scope:{ctx:x}}}),Ns=new ie({props:{anchor:"transformers.TFElectraForQuestionAnswering.call.example-2",$$slots:{default:[dj]},$$scope:{ctx:x}}}),ji=new we({}),qi=new I({props:{name:"class transformers.FlaxElectraModel",anchor:"transformers.FlaxElectraModel",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_flax_electra.py#L894"}}),Si=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_flax_electra.py#L746",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Ds=new ye({props:{$$slots:{default:[cj]},$$scope:{ctx:x}}}),Ss=new ie({props:{anchor:"transformers.FlaxElectraModel.__call__.example",$$slots:{default:[pj]},$$scope:{ctx:x}}}),Wi=new we({}),Ui=new I({props:{name:"class transformers.FlaxElectraForPreTraining",anchor:"transformers.FlaxElectraForPreTraining",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_flax_electra.py#L1043"}}),Gi=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForPreTraining.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForPreTraining.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForPreTraining.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForPreTraining.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_flax_electra.py#L746",returnDescription:`
<p>A <code>transformers.models.electra.modeling_flax_electra.FlaxElectraForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
<p><code>transformers.models.electra.modeling_flax_electra.FlaxElectraForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Us=new ye({props:{$$slots:{default:[hj]},$$scope:{ctx:x}}}),Rs=new ie({props:{anchor:"transformers.FlaxElectraForPreTraining.__call__.example",$$slots:{default:[mj]},$$scope:{ctx:x}}}),Xi=new we({}),Yi=new I({props:{name:"class transformers.FlaxElectraForCausalLM",anchor:"transformers.FlaxElectraForCausalLM",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_flax_electra.py#L1526"}}),rl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForCausalLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForCausalLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_flax_electra.py#L746",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bs=new ye({props:{$$slots:{default:[uj]},$$scope:{ctx:x}}}),Qs=new ie({props:{anchor:"transformers.FlaxElectraForCausalLM.__call__.example",$$slots:{default:[fj]},$$scope:{ctx:x}}}),il=new we({}),ll=new I({props:{name:"class transformers.FlaxElectraForMaskedLM",anchor:"transformers.FlaxElectraForMaskedLM",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_flax_electra.py#L980"}}),_l=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_flax_electra.py#L746",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Ks=new ye({props:{$$slots:{default:[gj]},$$scope:{ctx:x}}}),Js=new ie({props:{anchor:"transformers.FlaxElectraForMaskedLM.__call__.example",$$slots:{default:[_j]},$$scope:{ctx:x}}}),kl=new we({}),vl=new I({props:{name:"class transformers.FlaxElectraForSequenceClassification",anchor:"transformers.FlaxElectraForSequenceClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_flax_electra.py#L1444"}}),xl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_flax_electra.py#L746",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),Xs=new ye({props:{$$slots:{default:[kj]},$$scope:{ctx:x}}}),Ys=new ie({props:{anchor:"transformers.FlaxElectraForSequenceClassification.__call__.example",$$slots:{default:[vj]},$$scope:{ctx:x}}}),Ml=new we({}),zl=new I({props:{name:"class transformers.FlaxElectraForMultipleChoice",anchor:"transformers.FlaxElectraForMultipleChoice",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_flax_electra.py#L1280"}}),Nl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_flax_electra.py#L746",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),ea=new ye({props:{$$slots:{default:[Tj]},$$scope:{ctx:x}}}),ta=new ie({props:{anchor:"transformers.FlaxElectraForMultipleChoice.__call__.example",$$slots:{default:[bj]},$$scope:{ctx:x}}}),Il=new we({}),Dl=new I({props:{name:"class transformers.FlaxElectraForTokenClassification",anchor:"transformers.FlaxElectraForTokenClassification",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_flax_electra.py#L1135"}}),Vl=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_flax_electra.py#L746",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),na=new ye({props:{$$slots:{default:[yj]},$$scope:{ctx:x}}}),sa=new ie({props:{anchor:"transformers.FlaxElectraForTokenClassification.__call__.example",$$slots:{default:[Ej]},$$scope:{ctx:x}}}),Kl=new we({}),Jl=new I({props:{name:"class transformers.FlaxElectraForQuestionAnswering",anchor:"transformers.FlaxElectraForQuestionAnswering",parameters:[{name:"config",val:": ElectraConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig">ElectraConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_flax_electra.py#L1353"}}),nd=new I({props:{name:"__call__",anchor:"transformers.FlaxElectraForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer">ElectraTokenizer</a>. See <a href="/docs/transformers/pr_17101/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17101/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17101/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17101/src/transformers/models/electra/modeling_flax_electra.py#L746",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17101/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraConfig"
>ElectraConfig</a>) and inputs.</p>
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
`}}),ra=new ye({props:{$$slots:{default:[wj]},$$scope:{ctx:x}}}),ia=new ie({props:{anchor:"transformers.FlaxElectraForQuestionAnswering.__call__.example",$$slots:{default:[$j]},$$scope:{ctx:x}}}),{c(){d=n("meta"),g=c(),h=n("h1"),m=n("a"),_=n("span"),b(l.$$.fragment),u=c(),M=n("span"),ue=r("ELECTRA"),J=c(),C=n("h2"),ee=n("a"),D=n("span"),b(oe.$$.fragment),fe=c(),S=n("span"),ge=r("Overview"),pe=c(),K=n("p"),O=r("The ELECTRA model was proposed in the paper "),ne=n("a"),X=r(`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
Generators`),j=r(`. ELECTRA is a new pretraining approach which trains two
transformer models: the generator and the discriminator. The generator\u2019s role is to replace tokens in a sequence, and
is therefore trained as a masked language model. The discriminator, which is the model we\u2019re interested in, tries to
identify which tokens were replaced by the generator in the sequence.`),P=c(),ae=n("p"),R=r("The abstract from the paper is the following:"),he=c(),re=n("p"),W=n("em"),_e=r(`Masked language modeling (MLM) pretraining methods such as BERT corrupt the input by replacing some tokens with [MASK]
and then train a model to reconstruct the original tokens. While they produce good results when transferred to
downstream NLP tasks, they generally require large amounts of compute to be effective. As an alternative, we propose a
more sample-efficient pretraining task called replaced token detection. Instead of masking the input, our approach
corrupts it by replacing some tokens with plausible alternatives sampled from a small generator network. Then, instead
of training a model that predicts the original identities of the corrupted tokens, we train a discriminative model that
predicts whether each token in the corrupted input was replaced by a generator sample or not. Thorough experiments
demonstrate this new pretraining task is more efficient than MLM because the task is defined over all input tokens
rather than just the small subset that was masked out. As a result, the contextual representations learned by our
approach substantially outperform the ones learned by BERT given the same model size, data, and compute. The gains are
particularly strong for small models; for example, we train a model on one GPU for 4 days that outperforms GPT (trained
using 30x more compute) on the GLUE natural language understanding benchmark. Our approach also works well at scale,
where it performs comparably to RoBERTa and XLNet while using less than 1/4 of their compute and outperforms them when
using the same amount of compute.`),me=c(),q=n("p"),ke=r("Tips:"),U=c(),te=n("ul"),ce=n("li"),H=r(`ELECTRA is the pretraining approach, therefore there is nearly no changes done to the underlying model: BERT. The
only change is the separation of the embedding size and the hidden size: the embedding size is generally smaller,
while the hidden size is larger. An additional projection layer (linear) is used to project the embeddings from their
embedding size to the hidden size. In the case where the embedding size is the same as the hidden size, no projection
layer is used.`),ve=c(),G=n("li"),L=r("The ELECTRA checkpoints saved using "),se=n("a"),B=r("Google Research\u2019s implementation"),Te=r(`
contain both the generator and discriminator. The conversion script requires the user to name which model to export
into the correct architecture. Once converted to the HuggingFace format, these checkpoints may be loaded into all
available ELECTRA models, however. This means that the discriminator may be loaded in the
`),T=n("a"),z=r("ElectraForMaskedLM"),Y=r(` model, and the generator may be loaded in the
`),Fe=n("a"),ze=r("ElectraForPreTraining"),N=r(` model (the classification head will be randomly initialized as it
doesn\u2019t exist in the generator).`),xe=c(),be=n("p"),Ce=r("This model was contributed by "),A=n("a"),Q=r("lysandre"),je=r(". The original code can be found "),$e=n("a"),V=r("here"),qe=r("."),Me=c(),Z=n("h2"),Ee=n("a"),Dc=n("span"),b(Pa.$$.fragment),Vg=c(),Sc=n("span"),Kg=r("ElectraConfig"),Fu=c(),yt=n("div"),b(Aa.$$.fragment),Jg=c(),Vt=n("p"),Gg=r("This is the configuration class to store the configuration of a "),_d=n("a"),Xg=r("ElectraModel"),Yg=r(" or a "),kd=n("a"),Zg=r("TFElectraModel"),e_=r(`. It is
used to instantiate a ELECTRA model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ELECTRA
`),Oa=n("a"),t_=r("google/electra-small-discriminator"),o_=r(" architecture."),n_=c(),To=n("p"),s_=r("Configuration objects inherit from "),vd=n("a"),a_=r("PretrainedConfig"),r_=r(` and can be used to control the model outputs. Read the
documentation from `),Td=n("a"),i_=r("PretrainedConfig"),l_=r(" for more information."),d_=c(),b(wn.$$.fragment),xu=c(),bo=n("h2"),$n=n("a"),Wc=n("span"),b(La.$$.fragment),c_=c(),Uc=n("span"),p_=r("ElectraTokenizer"),Mu=c(),Et=n("div"),b(Na.$$.fragment),h_=c(),Rc=n("p"),m_=r("Construct an ELECTRA tokenizer."),u_=c(),Fn=n("p"),bd=n("a"),f_=r("ElectraTokenizer"),g_=r(" is identical to "),yd=n("a"),__=r("BertTokenizer"),k_=r(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),v_=c(),Ia=n("p"),T_=r("Refer to superclass "),Ed=n("a"),b_=r("BertTokenizer"),y_=r(" for usage examples and documentation concerning parameters."),zu=c(),yo=n("h2"),xn=n("a"),Hc=n("span"),b(Da.$$.fragment),E_=c(),Bc=n("span"),w_=r("ElectraTokenizerFast"),Cu=c(),wt=n("div"),b(Sa.$$.fragment),$_=c(),Wa=n("p"),F_=r("Construct a \u201Cfast\u201D ELECTRA tokenizer (backed by HuggingFace\u2019s "),Qc=n("em"),x_=r("tokenizers"),M_=r(" library)."),z_=c(),Mn=n("p"),wd=n("a"),C_=r("ElectraTokenizerFast"),j_=r(" is identical to "),$d=n("a"),q_=r("BertTokenizerFast"),P_=r(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),A_=c(),Ua=n("p"),O_=r("Refer to superclass "),Fd=n("a"),L_=r("BertTokenizerFast"),N_=r(" for usage examples and documentation concerning parameters."),ju=c(),Eo=n("h2"),zn=n("a"),Vc=n("span"),b(Ra.$$.fragment),I_=c(),Kc=n("span"),D_=r("Electra specific outputs"),qu=c(),wo=n("div"),b(Ha.$$.fragment),S_=c(),Ba=n("p"),W_=r("Output type of "),xd=n("a"),U_=r("ElectraForPreTraining"),R_=r("."),Pu=c(),$o=n("div"),b(Qa.$$.fragment),H_=c(),Va=n("p"),B_=r("Output type of "),Md=n("a"),Q_=r("TFElectraForPreTraining"),V_=r("."),Au=c(),Fo=n("h2"),Cn=n("a"),Jc=n("span"),b(Ka.$$.fragment),K_=c(),Gc=n("span"),J_=r("ElectraModel"),Ou=c(),et=n("div"),b(Ja.$$.fragment),G_=c(),Xc=n("p"),X_=r("The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),Y_=c(),Ga=n("p"),Z_=r("This model inherits from "),zd=n("a"),e1=r("PreTrainedModel"),t1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),o1=c(),Xa=n("p"),n1=r("This model is also a PyTorch "),Ya=n("a"),s1=r("torch.nn.Module"),a1=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),r1=c(),$t=n("div"),b(Za.$$.fragment),i1=c(),xo=n("p"),l1=r("The "),Cd=n("a"),d1=r("ElectraModel"),c1=r(" forward method, overrides the "),Yc=n("code"),p1=r("__call__"),h1=r(" special method."),m1=c(),b(jn.$$.fragment),u1=c(),b(qn.$$.fragment),Lu=c(),Mo=n("h2"),Pn=n("a"),Zc=n("span"),b(er.$$.fragment),f1=c(),ep=n("span"),g1=r("ElectraForPreTraining"),Nu=c(),Be=n("div"),b(tr.$$.fragment),_1=c(),tp=n("p"),k1=r("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),v1=c(),op=n("p"),T1=r("It is recommended to load the discriminator checkpoint into that model."),b1=c(),or=n("p"),y1=r("This model inherits from "),jd=n("a"),E1=r("PreTrainedModel"),w1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$1=c(),nr=n("p"),F1=r("This model is also a PyTorch "),sr=n("a"),x1=r("torch.nn.Module"),M1=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),z1=c(),Ft=n("div"),b(ar.$$.fragment),C1=c(),zo=n("p"),j1=r("The "),qd=n("a"),q1=r("ElectraForPreTraining"),P1=r(" forward method, overrides the "),np=n("code"),A1=r("__call__"),O1=r(" special method."),L1=c(),b(An.$$.fragment),N1=c(),b(On.$$.fragment),Iu=c(),Co=n("h2"),Ln=n("a"),sp=n("span"),b(rr.$$.fragment),I1=c(),ap=n("span"),D1=r("ElectraForCausalLM"),Du=c(),tt=n("div"),b(ir.$$.fragment),S1=c(),lr=n("p"),W1=r("ELECTRA Model with a "),rp=n("code"),U1=r("language modeling"),R1=r(" head on top for CLM fine-tuning."),H1=c(),dr=n("p"),B1=r("This model inherits from "),Pd=n("a"),Q1=r("PreTrainedModel"),V1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),K1=c(),cr=n("p"),J1=r("This model is also a PyTorch "),pr=n("a"),G1=r("torch.nn.Module"),X1=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Y1=c(),xt=n("div"),b(hr.$$.fragment),Z1=c(),jo=n("p"),ek=r("The "),Ad=n("a"),tk=r("ElectraForCausalLM"),ok=r(" forward method, overrides the "),ip=n("code"),nk=r("__call__"),sk=r(" special method."),ak=c(),b(Nn.$$.fragment),rk=c(),b(In.$$.fragment),Su=c(),qo=n("h2"),Dn=n("a"),lp=n("span"),b(mr.$$.fragment),ik=c(),dp=n("span"),lk=r("ElectraForMaskedLM"),Wu=c(),Qe=n("div"),b(ur.$$.fragment),dk=c(),cp=n("p"),ck=r("Electra model with a language modeling head on top."),pk=c(),pp=n("p"),hk=r(`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),mk=c(),fr=n("p"),uk=r("This model inherits from "),Od=n("a"),fk=r("PreTrainedModel"),gk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_k=c(),gr=n("p"),kk=r("This model is also a PyTorch "),_r=n("a"),vk=r("torch.nn.Module"),Tk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bk=c(),at=n("div"),b(kr.$$.fragment),yk=c(),Po=n("p"),Ek=r("The "),Ld=n("a"),wk=r("ElectraForMaskedLM"),$k=r(" forward method, overrides the "),hp=n("code"),Fk=r("__call__"),xk=r(" special method."),Mk=c(),b(Sn.$$.fragment),zk=c(),b(Wn.$$.fragment),Ck=c(),b(Un.$$.fragment),Uu=c(),Ao=n("h2"),Rn=n("a"),mp=n("span"),b(vr.$$.fragment),jk=c(),up=n("span"),qk=r("ElectraForSequenceClassification"),Ru=c(),ot=n("div"),b(Tr.$$.fragment),Pk=c(),fp=n("p"),Ak=r(`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ok=c(),br=n("p"),Lk=r("This model inherits from "),Nd=n("a"),Nk=r("PreTrainedModel"),Ik=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dk=c(),yr=n("p"),Sk=r("This model is also a PyTorch "),Er=n("a"),Wk=r("torch.nn.Module"),Uk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rk=c(),He=n("div"),b(wr.$$.fragment),Hk=c(),Oo=n("p"),Bk=r("The "),Id=n("a"),Qk=r("ElectraForSequenceClassification"),Vk=r(" forward method, overrides the "),gp=n("code"),Kk=r("__call__"),Jk=r(" special method."),Gk=c(),b(Hn.$$.fragment),Xk=c(),b(Bn.$$.fragment),Yk=c(),b(Qn.$$.fragment),Zk=c(),b(Vn.$$.fragment),ev=c(),b(Kn.$$.fragment),Hu=c(),Lo=n("h2"),Jn=n("a"),_p=n("span"),b($r.$$.fragment),tv=c(),kp=n("span"),ov=r("ElectraForMultipleChoice"),Bu=c(),nt=n("div"),b(Fr.$$.fragment),nv=c(),vp=n("p"),sv=r(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),av=c(),xr=n("p"),rv=r("This model inherits from "),Dd=n("a"),iv=r("PreTrainedModel"),lv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dv=c(),Mr=n("p"),cv=r("This model is also a PyTorch "),zr=n("a"),pv=r("torch.nn.Module"),hv=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mv=c(),Mt=n("div"),b(Cr.$$.fragment),uv=c(),No=n("p"),fv=r("The "),Sd=n("a"),gv=r("ElectraForMultipleChoice"),_v=r(" forward method, overrides the "),Tp=n("code"),kv=r("__call__"),vv=r(" special method."),Tv=c(),b(Gn.$$.fragment),bv=c(),b(Xn.$$.fragment),Qu=c(),Io=n("h2"),Yn=n("a"),bp=n("span"),b(jr.$$.fragment),yv=c(),yp=n("span"),Ev=r("ElectraForTokenClassification"),Vu=c(),Ve=n("div"),b(qr.$$.fragment),wv=c(),Ep=n("p"),$v=r("Electra model with a token classification head on top."),Fv=c(),wp=n("p"),xv=r("Both the discriminator and generator may be loaded into this model."),Mv=c(),Pr=n("p"),zv=r("This model inherits from "),Wd=n("a"),Cv=r("PreTrainedModel"),jv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qv=c(),Ar=n("p"),Pv=r("This model is also a PyTorch "),Or=n("a"),Av=r("torch.nn.Module"),Ov=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lv=c(),rt=n("div"),b(Lr.$$.fragment),Nv=c(),Do=n("p"),Iv=r("The "),Ud=n("a"),Dv=r("ElectraForTokenClassification"),Sv=r(" forward method, overrides the "),$p=n("code"),Wv=r("__call__"),Uv=r(" special method."),Rv=c(),b(Zn.$$.fragment),Hv=c(),b(es.$$.fragment),Bv=c(),b(ts.$$.fragment),Ku=c(),So=n("h2"),os=n("a"),Fp=n("span"),b(Nr.$$.fragment),Qv=c(),xp=n("span"),Vv=r("ElectraForQuestionAnswering"),Ju=c(),st=n("div"),b(Ir.$$.fragment),Kv=c(),Wo=n("p"),Jv=r(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Mp=n("code"),Gv=r("span start logits"),Xv=r(" and "),zp=n("code"),Yv=r("span end logits"),Zv=r(")."),eT=c(),Dr=n("p"),tT=r("This model inherits from "),Rd=n("a"),oT=r("PreTrainedModel"),nT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sT=c(),Sr=n("p"),aT=r("This model is also a PyTorch "),Wr=n("a"),rT=r("torch.nn.Module"),iT=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lT=c(),it=n("div"),b(Ur.$$.fragment),dT=c(),Uo=n("p"),cT=r("The "),Hd=n("a"),pT=r("ElectraForQuestionAnswering"),hT=r(" forward method, overrides the "),Cp=n("code"),mT=r("__call__"),uT=r(" special method."),fT=c(),b(ns.$$.fragment),gT=c(),b(ss.$$.fragment),_T=c(),b(as.$$.fragment),Gu=c(),Ro=n("h2"),rs=n("a"),jp=n("span"),b(Rr.$$.fragment),kT=c(),qp=n("span"),vT=r("TFElectraModel"),Xu=c(),Ke=n("div"),b(Hr.$$.fragment),TT=c(),Pp=n("p"),bT=r("The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),yT=c(),Br=n("p"),ET=r("This model inherits from "),Bd=n("a"),wT=r("TFPreTrainedModel"),$T=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),FT=c(),Qr=n("p"),xT=r("This model is also a "),Vr=n("a"),MT=r("tf.keras.Model"),zT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),CT=c(),b(is.$$.fragment),jT=c(),zt=n("div"),b(Kr.$$.fragment),qT=c(),Ho=n("p"),PT=r("The "),Qd=n("a"),AT=r("TFElectraModel"),OT=r(" forward method, overrides the "),Ap=n("code"),LT=r("__call__"),NT=r(" special method."),IT=c(),b(ls.$$.fragment),DT=c(),b(ds.$$.fragment),Yu=c(),Bo=n("h2"),cs=n("a"),Op=n("span"),b(Jr.$$.fragment),ST=c(),Lp=n("span"),WT=r("TFElectraForPreTraining"),Zu=c(),Oe=n("div"),b(Gr.$$.fragment),UT=c(),Np=n("p"),RT=r("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),HT=c(),Ip=n("p"),BT=r(`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),QT=c(),Xr=n("p"),VT=r("This model inherits from "),Vd=n("a"),KT=r("TFPreTrainedModel"),JT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),GT=c(),Yr=n("p"),XT=r("This model is also a "),Zr=n("a"),YT=r("tf.keras.Model"),ZT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),eb=c(),b(ps.$$.fragment),tb=c(),Ct=n("div"),b(ei.$$.fragment),ob=c(),Qo=n("p"),nb=r("The "),Kd=n("a"),sb=r("TFElectraForPreTraining"),ab=r(" forward method, overrides the "),Dp=n("code"),rb=r("__call__"),ib=r(" special method."),lb=c(),b(hs.$$.fragment),db=c(),b(ms.$$.fragment),ef=c(),Vo=n("h2"),us=n("a"),Sp=n("span"),b(ti.$$.fragment),cb=c(),Wp=n("span"),pb=r("TFElectraForMaskedLM"),tf=c(),Le=n("div"),b(oi.$$.fragment),hb=c(),Up=n("p"),mb=r("Electra model with a language modeling head on top."),ub=c(),Rp=n("p"),fb=r(`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),gb=c(),ni=n("p"),_b=r("This model inherits from "),Jd=n("a"),kb=r("TFPreTrainedModel"),vb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tb=c(),si=n("p"),bb=r("This model is also a "),ai=n("a"),yb=r("tf.keras.Model"),Eb=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wb=c(),b(fs.$$.fragment),$b=c(),lt=n("div"),b(ri.$$.fragment),Fb=c(),Ko=n("p"),xb=r("The "),Gd=n("a"),Mb=r("TFElectraForMaskedLM"),zb=r(" forward method, overrides the "),Hp=n("code"),Cb=r("__call__"),jb=r(" special method."),qb=c(),b(gs.$$.fragment),Pb=c(),b(_s.$$.fragment),Ab=c(),b(ks.$$.fragment),of=c(),Jo=n("h2"),vs=n("a"),Bp=n("span"),b(ii.$$.fragment),Ob=c(),Qp=n("span"),Lb=r("TFElectraForSequenceClassification"),nf=c(),Je=n("div"),b(li.$$.fragment),Nb=c(),Vp=n("p"),Ib=r(`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Db=c(),di=n("p"),Sb=r("This model inherits from "),Xd=n("a"),Wb=r("TFPreTrainedModel"),Ub=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rb=c(),ci=n("p"),Hb=r("This model is also a "),pi=n("a"),Bb=r("tf.keras.Model"),Qb=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vb=c(),b(Ts.$$.fragment),Kb=c(),dt=n("div"),b(hi.$$.fragment),Jb=c(),Go=n("p"),Gb=r("The "),Yd=n("a"),Xb=r("TFElectraForSequenceClassification"),Yb=r(" forward method, overrides the "),Kp=n("code"),Zb=r("__call__"),ey=r(" special method."),ty=c(),b(bs.$$.fragment),oy=c(),b(ys.$$.fragment),ny=c(),b(Es.$$.fragment),sf=c(),Xo=n("h2"),ws=n("a"),Jp=n("span"),b(mi.$$.fragment),sy=c(),Gp=n("span"),ay=r("TFElectraForMultipleChoice"),af=c(),Ge=n("div"),b(ui.$$.fragment),ry=c(),Xp=n("p"),iy=r(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ly=c(),fi=n("p"),dy=r("This model inherits from "),Zd=n("a"),cy=r("TFPreTrainedModel"),py=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hy=c(),gi=n("p"),my=r("This model is also a "),_i=n("a"),uy=r("tf.keras.Model"),fy=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gy=c(),b($s.$$.fragment),_y=c(),jt=n("div"),b(ki.$$.fragment),ky=c(),Yo=n("p"),vy=r("The "),ec=n("a"),Ty=r("TFElectraForMultipleChoice"),by=r(" forward method, overrides the "),Yp=n("code"),yy=r("__call__"),Ey=r(" special method."),wy=c(),b(Fs.$$.fragment),$y=c(),b(xs.$$.fragment),rf=c(),Zo=n("h2"),Ms=n("a"),Zp=n("span"),b(vi.$$.fragment),Fy=c(),eh=n("span"),xy=r("TFElectraForTokenClassification"),lf=c(),Ne=n("div"),b(Ti.$$.fragment),My=c(),th=n("p"),zy=r("Electra model with a token classification head on top."),Cy=c(),oh=n("p"),jy=r("Both the discriminator and generator may be loaded into this model."),qy=c(),bi=n("p"),Py=r("This model inherits from "),tc=n("a"),Ay=r("TFPreTrainedModel"),Oy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ly=c(),yi=n("p"),Ny=r("This model is also a "),Ei=n("a"),Iy=r("tf.keras.Model"),Dy=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sy=c(),b(zs.$$.fragment),Wy=c(),ct=n("div"),b(wi.$$.fragment),Uy=c(),en=n("p"),Ry=r("The "),oc=n("a"),Hy=r("TFElectraForTokenClassification"),By=r(" forward method, overrides the "),nh=n("code"),Qy=r("__call__"),Vy=r(" special method."),Ky=c(),b(Cs.$$.fragment),Jy=c(),b(js.$$.fragment),Gy=c(),b(qs.$$.fragment),df=c(),tn=n("h2"),Ps=n("a"),sh=n("span"),b($i.$$.fragment),Xy=c(),ah=n("span"),Yy=r("TFElectraForQuestionAnswering"),cf=c(),Xe=n("div"),b(Fi.$$.fragment),Zy=c(),on=n("p"),eE=r(`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rh=n("code"),tE=r("span start logits"),oE=r(" and "),ih=n("code"),nE=r("span end logits"),sE=r(")."),aE=c(),xi=n("p"),rE=r("This model inherits from "),nc=n("a"),iE=r("TFPreTrainedModel"),lE=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dE=c(),Mi=n("p"),cE=r("This model is also a "),zi=n("a"),pE=r("tf.keras.Model"),hE=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mE=c(),b(As.$$.fragment),uE=c(),pt=n("div"),b(Ci.$$.fragment),fE=c(),nn=n("p"),gE=r("The "),sc=n("a"),_E=r("TFElectraForQuestionAnswering"),kE=r(" forward method, overrides the "),lh=n("code"),vE=r("__call__"),TE=r(" special method."),bE=c(),b(Os.$$.fragment),yE=c(),b(Ls.$$.fragment),EE=c(),b(Ns.$$.fragment),pf=c(),sn=n("h2"),Is=n("a"),dh=n("span"),b(ji.$$.fragment),wE=c(),ch=n("span"),$E=r("FlaxElectraModel"),hf=c(),Ie=n("div"),b(qi.$$.fragment),FE=c(),ph=n("p"),xE=r("The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),ME=c(),Pi=n("p"),zE=r("This model inherits from "),ac=n("a"),CE=r("FlaxPreTrainedModel"),jE=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),qE=c(),Ai=n("p"),PE=r(`This model is also a Flax Linen
`),Oi=n("a"),AE=r("flax.nn.Module"),OE=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),LE=c(),hh=n("p"),NE=r("Finally, this model supports inherent JAX features such as:"),IE=c(),Kt=n("ul"),mh=n("li"),Li=n("a"),DE=r("Just-In-Time (JIT) compilation"),SE=c(),uh=n("li"),Ni=n("a"),WE=r("Automatic Differentiation"),UE=c(),fh=n("li"),Ii=n("a"),RE=r("Vectorization"),HE=c(),gh=n("li"),Di=n("a"),BE=r("Parallelization"),QE=c(),qt=n("div"),b(Si.$$.fragment),VE=c(),an=n("p"),KE=r("The "),_h=n("code"),JE=r("FlaxElectraPreTrainedModel"),GE=r(" forward method, overrides the "),kh=n("code"),XE=r("__call__"),YE=r(" special method."),ZE=c(),b(Ds.$$.fragment),ew=c(),b(Ss.$$.fragment),mf=c(),rn=n("h2"),Ws=n("a"),vh=n("span"),b(Wi.$$.fragment),tw=c(),Th=n("span"),ow=r("FlaxElectraForPreTraining"),uf=c(),Pe=n("div"),b(Ui.$$.fragment),nw=c(),bh=n("p"),sw=r("Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),aw=c(),yh=n("p"),rw=r("It is recommended to load the discriminator checkpoint into that model."),iw=c(),Ri=n("p"),lw=r("This model inherits from "),rc=n("a"),dw=r("FlaxPreTrainedModel"),cw=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pw=c(),Hi=n("p"),hw=r(`This model is also a Flax Linen
`),Bi=n("a"),mw=r("flax.nn.Module"),uw=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fw=c(),Eh=n("p"),gw=r("Finally, this model supports inherent JAX features such as:"),_w=c(),Jt=n("ul"),wh=n("li"),Qi=n("a"),kw=r("Just-In-Time (JIT) compilation"),vw=c(),$h=n("li"),Vi=n("a"),Tw=r("Automatic Differentiation"),bw=c(),Fh=n("li"),Ki=n("a"),yw=r("Vectorization"),Ew=c(),xh=n("li"),Ji=n("a"),ww=r("Parallelization"),$w=c(),Pt=n("div"),b(Gi.$$.fragment),Fw=c(),ln=n("p"),xw=r("The "),Mh=n("code"),Mw=r("FlaxElectraPreTrainedModel"),zw=r(" forward method, overrides the "),zh=n("code"),Cw=r("__call__"),jw=r(" special method."),qw=c(),b(Us.$$.fragment),Pw=c(),b(Rs.$$.fragment),ff=c(),dn=n("h2"),Hs=n("a"),Ch=n("span"),b(Xi.$$.fragment),Aw=c(),jh=n("span"),Ow=r("FlaxElectraForCausalLM"),gf=c(),De=n("div"),b(Yi.$$.fragment),Lw=c(),qh=n("p"),Nw=r(`Electra Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),Iw=c(),Zi=n("p"),Dw=r("This model inherits from "),ic=n("a"),Sw=r("FlaxPreTrainedModel"),Ww=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uw=c(),el=n("p"),Rw=r(`This model is also a Flax Linen
`),tl=n("a"),Hw=r("flax.nn.Module"),Bw=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Qw=c(),Ph=n("p"),Vw=r("Finally, this model supports inherent JAX features such as:"),Kw=c(),Gt=n("ul"),Ah=n("li"),ol=n("a"),Jw=r("Just-In-Time (JIT) compilation"),Gw=c(),Oh=n("li"),nl=n("a"),Xw=r("Automatic Differentiation"),Yw=c(),Lh=n("li"),sl=n("a"),Zw=r("Vectorization"),e$=c(),Nh=n("li"),al=n("a"),t$=r("Parallelization"),o$=c(),At=n("div"),b(rl.$$.fragment),n$=c(),cn=n("p"),s$=r("The "),Ih=n("code"),a$=r("FlaxElectraPreTrainedModel"),r$=r(" forward method, overrides the "),Dh=n("code"),i$=r("__call__"),l$=r(" special method."),d$=c(),b(Bs.$$.fragment),c$=c(),b(Qs.$$.fragment),_f=c(),pn=n("h2"),Vs=n("a"),Sh=n("span"),b(il.$$.fragment),p$=c(),Wh=n("span"),h$=r("FlaxElectraForMaskedLM"),kf=c(),Se=n("div"),b(ll.$$.fragment),m$=c(),dl=n("p"),u$=r("Electra Model with a "),Uh=n("code"),f$=r("language modeling"),g$=r(" head on top."),_$=c(),cl=n("p"),k$=r("This model inherits from "),lc=n("a"),v$=r("FlaxPreTrainedModel"),T$=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),b$=c(),pl=n("p"),y$=r(`This model is also a Flax Linen
`),hl=n("a"),E$=r("flax.nn.Module"),w$=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),$$=c(),Rh=n("p"),F$=r("Finally, this model supports inherent JAX features such as:"),x$=c(),Xt=n("ul"),Hh=n("li"),ml=n("a"),M$=r("Just-In-Time (JIT) compilation"),z$=c(),Bh=n("li"),ul=n("a"),C$=r("Automatic Differentiation"),j$=c(),Qh=n("li"),fl=n("a"),q$=r("Vectorization"),P$=c(),Vh=n("li"),gl=n("a"),A$=r("Parallelization"),O$=c(),Ot=n("div"),b(_l.$$.fragment),L$=c(),hn=n("p"),N$=r("The "),Kh=n("code"),I$=r("FlaxElectraPreTrainedModel"),D$=r(" forward method, overrides the "),Jh=n("code"),S$=r("__call__"),W$=r(" special method."),U$=c(),b(Ks.$$.fragment),R$=c(),b(Js.$$.fragment),vf=c(),mn=n("h2"),Gs=n("a"),Gh=n("span"),b(kl.$$.fragment),H$=c(),Xh=n("span"),B$=r("FlaxElectraForSequenceClassification"),Tf=c(),We=n("div"),b(vl.$$.fragment),Q$=c(),Yh=n("p"),V$=r(`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),K$=c(),Tl=n("p"),J$=r("This model inherits from "),dc=n("a"),G$=r("FlaxPreTrainedModel"),X$=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Y$=c(),bl=n("p"),Z$=r(`This model is also a Flax Linen
`),yl=n("a"),e2=r("flax.nn.Module"),t2=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),o2=c(),Zh=n("p"),n2=r("Finally, this model supports inherent JAX features such as:"),s2=c(),Yt=n("ul"),em=n("li"),El=n("a"),a2=r("Just-In-Time (JIT) compilation"),r2=c(),tm=n("li"),wl=n("a"),i2=r("Automatic Differentiation"),l2=c(),om=n("li"),$l=n("a"),d2=r("Vectorization"),c2=c(),nm=n("li"),Fl=n("a"),p2=r("Parallelization"),h2=c(),Lt=n("div"),b(xl.$$.fragment),m2=c(),un=n("p"),u2=r("The "),sm=n("code"),f2=r("FlaxElectraPreTrainedModel"),g2=r(" forward method, overrides the "),am=n("code"),_2=r("__call__"),k2=r(" special method."),v2=c(),b(Xs.$$.fragment),T2=c(),b(Ys.$$.fragment),bf=c(),fn=n("h2"),Zs=n("a"),rm=n("span"),b(Ml.$$.fragment),b2=c(),im=n("span"),y2=r("FlaxElectraForMultipleChoice"),yf=c(),Ue=n("div"),b(zl.$$.fragment),E2=c(),lm=n("p"),w2=r(`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),$2=c(),Cl=n("p"),F2=r("This model inherits from "),cc=n("a"),x2=r("FlaxPreTrainedModel"),M2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),z2=c(),jl=n("p"),C2=r(`This model is also a Flax Linen
`),ql=n("a"),j2=r("flax.nn.Module"),q2=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),P2=c(),dm=n("p"),A2=r("Finally, this model supports inherent JAX features such as:"),O2=c(),Zt=n("ul"),cm=n("li"),Pl=n("a"),L2=r("Just-In-Time (JIT) compilation"),N2=c(),pm=n("li"),Al=n("a"),I2=r("Automatic Differentiation"),D2=c(),hm=n("li"),Ol=n("a"),S2=r("Vectorization"),W2=c(),mm=n("li"),Ll=n("a"),U2=r("Parallelization"),R2=c(),Nt=n("div"),b(Nl.$$.fragment),H2=c(),gn=n("p"),B2=r("The "),um=n("code"),Q2=r("FlaxElectraPreTrainedModel"),V2=r(" forward method, overrides the "),fm=n("code"),K2=r("__call__"),J2=r(" special method."),G2=c(),b(ea.$$.fragment),X2=c(),b(ta.$$.fragment),Ef=c(),_n=n("h2"),oa=n("a"),gm=n("span"),b(Il.$$.fragment),Y2=c(),_m=n("span"),Z2=r("FlaxElectraForTokenClassification"),wf=c(),Ae=n("div"),b(Dl.$$.fragment),e0=c(),km=n("p"),t0=r("Electra model with a token classification head on top."),o0=c(),vm=n("p"),n0=r("Both the discriminator and generator may be loaded into this model."),s0=c(),Sl=n("p"),a0=r("This model inherits from "),pc=n("a"),r0=r("FlaxPreTrainedModel"),i0=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),l0=c(),Wl=n("p"),d0=r(`This model is also a Flax Linen
`),Ul=n("a"),c0=r("flax.nn.Module"),p0=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),h0=c(),Tm=n("p"),m0=r("Finally, this model supports inherent JAX features such as:"),u0=c(),eo=n("ul"),bm=n("li"),Rl=n("a"),f0=r("Just-In-Time (JIT) compilation"),g0=c(),ym=n("li"),Hl=n("a"),_0=r("Automatic Differentiation"),k0=c(),Em=n("li"),Bl=n("a"),v0=r("Vectorization"),T0=c(),wm=n("li"),Ql=n("a"),b0=r("Parallelization"),y0=c(),It=n("div"),b(Vl.$$.fragment),E0=c(),kn=n("p"),w0=r("The "),$m=n("code"),$0=r("FlaxElectraPreTrainedModel"),F0=r(" forward method, overrides the "),Fm=n("code"),x0=r("__call__"),M0=r(" special method."),z0=c(),b(na.$$.fragment),C0=c(),b(sa.$$.fragment),$f=c(),vn=n("h2"),aa=n("a"),xm=n("span"),b(Kl.$$.fragment),j0=c(),Mm=n("span"),q0=r("FlaxElectraForQuestionAnswering"),Ff=c(),Re=n("div"),b(Jl.$$.fragment),P0=c(),Tn=n("p"),A0=r(`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),zm=n("code"),O0=r("span start logits"),L0=r(" and "),Cm=n("code"),N0=r("span end logits"),I0=r(")."),D0=c(),Gl=n("p"),S0=r("This model inherits from "),hc=n("a"),W0=r("FlaxPreTrainedModel"),U0=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),R0=c(),Xl=n("p"),H0=r(`This model is also a Flax Linen
`),Yl=n("a"),B0=r("flax.nn.Module"),Q0=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),V0=c(),jm=n("p"),K0=r("Finally, this model supports inherent JAX features such as:"),J0=c(),to=n("ul"),qm=n("li"),Zl=n("a"),G0=r("Just-In-Time (JIT) compilation"),X0=c(),Pm=n("li"),ed=n("a"),Y0=r("Automatic Differentiation"),Z0=c(),Am=n("li"),td=n("a"),eF=r("Vectorization"),tF=c(),Om=n("li"),od=n("a"),oF=r("Parallelization"),nF=c(),Dt=n("div"),b(nd.$$.fragment),sF=c(),bn=n("p"),aF=r("The "),Lm=n("code"),rF=r("FlaxElectraPreTrainedModel"),iF=r(" forward method, overrides the "),Nm=n("code"),lF=r("__call__"),dF=r(" special method."),cF=c(),b(ra.$$.fragment),pF=c(),b(ia.$$.fragment),this.h()},l(o){const v=uC('[data-svelte="svelte-1phssyn"]',document.head);d=s(v,"META",{name:!0,content:!0}),v.forEach(t),g=p(o),h=s(o,"H1",{class:!0});var sd=a(h);m=s(sd,"A",{id:!0,class:!0,href:!0});var Im=a(m);_=s(Im,"SPAN",{});var Dm=a(_);y(l.$$.fragment,Dm),Dm.forEach(t),Im.forEach(t),u=p(sd),M=s(sd,"SPAN",{});var Sm=a(M);ue=i(Sm,"ELECTRA"),Sm.forEach(t),sd.forEach(t),J=p(o),C=s(o,"H2",{class:!0});var ad=a(C);ee=s(ad,"A",{id:!0,class:!0,href:!0});var Wm=a(ee);D=s(Wm,"SPAN",{});var Um=a(D);y(oe.$$.fragment,Um),Um.forEach(t),Wm.forEach(t),fe=p(ad),S=s(ad,"SPAN",{});var Rm=a(S);ge=i(Rm,"Overview"),Rm.forEach(t),ad.forEach(t),pe=p(o),K=s(o,"P",{});var rd=a(K);O=i(rd,"The ELECTRA model was proposed in the paper "),ne=s(rd,"A",{href:!0,rel:!0});var Hm=a(ne);X=i(Hm,`ELECTRA: Pre-training Text Encoders as Discriminators Rather Than
Generators`),Hm.forEach(t),j=i(rd,`. ELECTRA is a new pretraining approach which trains two
transformer models: the generator and the discriminator. The generator\u2019s role is to replace tokens in a sequence, and
is therefore trained as a masked language model. The discriminator, which is the model we\u2019re interested in, tries to
identify which tokens were replaced by the generator in the sequence.`),rd.forEach(t),P=p(o),ae=s(o,"P",{});var Bm=a(ae);R=i(Bm,"The abstract from the paper is the following:"),Bm.forEach(t),he=p(o),re=s(o,"P",{});var Qm=a(re);W=s(Qm,"EM",{});var Vm=a(W);_e=i(Vm,`Masked language modeling (MLM) pretraining methods such as BERT corrupt the input by replacing some tokens with [MASK]
and then train a model to reconstruct the original tokens. While they produce good results when transferred to
downstream NLP tasks, they generally require large amounts of compute to be effective. As an alternative, we propose a
more sample-efficient pretraining task called replaced token detection. Instead of masking the input, our approach
corrupts it by replacing some tokens with plausible alternatives sampled from a small generator network. Then, instead
of training a model that predicts the original identities of the corrupted tokens, we train a discriminative model that
predicts whether each token in the corrupted input was replaced by a generator sample or not. Thorough experiments
demonstrate this new pretraining task is more efficient than MLM because the task is defined over all input tokens
rather than just the small subset that was masked out. As a result, the contextual representations learned by our
approach substantially outperform the ones learned by BERT given the same model size, data, and compute. The gains are
particularly strong for small models; for example, we train a model on one GPU for 4 days that outperforms GPT (trained
using 30x more compute) on the GLUE natural language understanding benchmark. Our approach also works well at scale,
where it performs comparably to RoBERTa and XLNet while using less than 1/4 of their compute and outperforms them when
using the same amount of compute.`),Vm.forEach(t),Qm.forEach(t),me=p(o),q=s(o,"P",{});var Km=a(q);ke=i(Km,"Tips:"),Km.forEach(t),U=p(o),te=s(o,"UL",{});var id=a(te);ce=s(id,"LI",{});var Jm=a(ce);H=i(Jm,`ELECTRA is the pretraining approach, therefore there is nearly no changes done to the underlying model: BERT. The
only change is the separation of the embedding size and the hidden size: the embedding size is generally smaller,
while the hidden size is larger. An additional projection layer (linear) is used to project the embeddings from their
embedding size to the hidden size. In the case where the embedding size is the same as the hidden size, no projection
layer is used.`),Jm.forEach(t),ve=p(id),G=s(id,"LI",{});var oo=a(G);L=i(oo,"The ELECTRA checkpoints saved using "),se=s(oo,"A",{href:!0,rel:!0});var Gm=a(se);B=i(Gm,"Google Research\u2019s implementation"),Gm.forEach(t),Te=i(oo,`
contain both the generator and discriminator. The conversion script requires the user to name which model to export
into the correct architecture. Once converted to the HuggingFace format, these checkpoints may be loaded into all
available ELECTRA models, however. This means that the discriminator may be loaded in the
`),T=s(oo,"A",{href:!0});var Xm=a(T);z=i(Xm,"ElectraForMaskedLM"),Xm.forEach(t),Y=i(oo,` model, and the generator may be loaded in the
`),Fe=s(oo,"A",{href:!0});var Ym=a(Fe);ze=i(Ym,"ElectraForPreTraining"),Ym.forEach(t),N=i(oo,` model (the classification head will be randomly initialized as it
doesn\u2019t exist in the generator).`),oo.forEach(t),id.forEach(t),xe=p(o),be=s(o,"P",{});var yn=a(be);Ce=i(yn,"This model was contributed by "),A=s(yn,"A",{href:!0,rel:!0});var Zm=a(A);Q=i(Zm,"lysandre"),Zm.forEach(t),je=i(yn,". The original code can be found "),$e=s(yn,"A",{href:!0,rel:!0});var eu=a($e);V=i(eu,"here"),eu.forEach(t),qe=i(yn,"."),yn.forEach(t),Me=p(o),Z=s(o,"H2",{class:!0});var ld=a(Z);Ee=s(ld,"A",{id:!0,class:!0,href:!0});var tu=a(Ee);Dc=s(tu,"SPAN",{});var ou=a(Dc);y(Pa.$$.fragment,ou),ou.forEach(t),tu.forEach(t),Vg=p(ld),Sc=s(ld,"SPAN",{});var nu=a(Sc);Kg=i(nu,"ElectraConfig"),nu.forEach(t),ld.forEach(t),Fu=p(o),yt=s(o,"DIV",{class:!0});var no=a(yt);y(Aa.$$.fragment,no),Jg=p(no),Vt=s(no,"P",{});var so=a(Vt);Gg=i(so,"This is the configuration class to store the configuration of a "),_d=s(so,"A",{href:!0});var su=a(_d);Xg=i(su,"ElectraModel"),su.forEach(t),Yg=i(so," or a "),kd=s(so,"A",{href:!0});var au=a(kd);Zg=i(au,"TFElectraModel"),au.forEach(t),e_=i(so,`. It is
used to instantiate a ELECTRA model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the ELECTRA
`),Oa=s(so,"A",{href:!0,rel:!0});var ru=a(Oa);t_=i(ru,"google/electra-small-discriminator"),ru.forEach(t),o_=i(so," architecture."),so.forEach(t),n_=p(no),To=s(no,"P",{});var En=a(To);s_=i(En,"Configuration objects inherit from "),vd=s(En,"A",{href:!0});var iu=a(vd);a_=i(iu,"PretrainedConfig"),iu.forEach(t),r_=i(En,` and can be used to control the model outputs. Read the
documentation from `),Td=s(En,"A",{href:!0});var lu=a(Td);i_=i(lu,"PretrainedConfig"),lu.forEach(t),l_=i(En," for more information."),En.forEach(t),d_=p(no),y(wn.$$.fragment,no),no.forEach(t),xu=p(o),bo=s(o,"H2",{class:!0});var dd=a(bo);$n=s(dd,"A",{id:!0,class:!0,href:!0});var du=a($n);Wc=s(du,"SPAN",{});var cu=a(Wc);y(La.$$.fragment,cu),cu.forEach(t),du.forEach(t),c_=p(dd),Uc=s(dd,"SPAN",{});var pu=a(Uc);p_=i(pu,"ElectraTokenizer"),pu.forEach(t),dd.forEach(t),Mu=p(o),Et=s(o,"DIV",{class:!0});var ao=a(Et);y(Na.$$.fragment,ao),h_=p(ao),Rc=s(ao,"P",{});var hu=a(Rc);m_=i(hu,"Construct an ELECTRA tokenizer."),hu.forEach(t),u_=p(ao),Fn=s(ao,"P",{});var la=a(Fn);bd=s(la,"A",{href:!0});var mu=a(bd);f_=i(mu,"ElectraTokenizer"),mu.forEach(t),g_=i(la," is identical to "),yd=s(la,"A",{href:!0});var uu=a(yd);__=i(uu,"BertTokenizer"),uu.forEach(t),k_=i(la,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),la.forEach(t),v_=p(ao),Ia=s(ao,"P",{});var cd=a(Ia);T_=i(cd,"Refer to superclass "),Ed=s(cd,"A",{href:!0});var fu=a(Ed);b_=i(fu,"BertTokenizer"),fu.forEach(t),y_=i(cd," for usage examples and documentation concerning parameters."),cd.forEach(t),ao.forEach(t),zu=p(o),yo=s(o,"H2",{class:!0});var pd=a(yo);xn=s(pd,"A",{id:!0,class:!0,href:!0});var gu=a(xn);Hc=s(gu,"SPAN",{});var _u=a(Hc);y(Da.$$.fragment,_u),_u.forEach(t),gu.forEach(t),E_=p(pd),Bc=s(pd,"SPAN",{});var ku=a(Bc);w_=i(ku,"ElectraTokenizerFast"),ku.forEach(t),pd.forEach(t),Cu=p(o),wt=s(o,"DIV",{class:!0});var ro=a(wt);y(Sa.$$.fragment,ro),$_=p(ro),Wa=s(ro,"P",{});var hd=a(Wa);F_=i(hd,"Construct a \u201Cfast\u201D ELECTRA tokenizer (backed by HuggingFace\u2019s "),Qc=s(hd,"EM",{});var vu=a(Qc);x_=i(vu,"tokenizers"),vu.forEach(t),M_=i(hd," library)."),hd.forEach(t),z_=p(ro),Mn=s(ro,"P",{});var da=a(Mn);wd=s(da,"A",{href:!0});var Tu=a(wd);C_=i(Tu,"ElectraTokenizerFast"),Tu.forEach(t),j_=i(da," is identical to "),$d=s(da,"A",{href:!0});var bu=a($d);q_=i(bu,"BertTokenizerFast"),bu.forEach(t),P_=i(da,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),da.forEach(t),A_=p(ro),Ua=s(ro,"P",{});var md=a(Ua);O_=i(md,"Refer to superclass "),Fd=s(md,"A",{href:!0});var yu=a(Fd);L_=i(yu,"BertTokenizerFast"),yu.forEach(t),N_=i(md," for usage examples and documentation concerning parameters."),md.forEach(t),ro.forEach(t),ju=p(o),Eo=s(o,"H2",{class:!0});var ud=a(Eo);zn=s(ud,"A",{id:!0,class:!0,href:!0});var Eu=a(zn);Vc=s(Eu,"SPAN",{});var wu=a(Vc);y(Ra.$$.fragment,wu),wu.forEach(t),Eu.forEach(t),I_=p(ud),Kc=s(ud,"SPAN",{});var $u=a(Kc);D_=i($u,"Electra specific outputs"),$u.forEach(t),ud.forEach(t),qu=p(o),wo=s(o,"DIV",{class:!0});var fd=a(wo);y(Ha.$$.fragment,fd),S_=p(fd),Ba=s(fd,"P",{});var gd=a(Ba);W_=i(gd,"Output type of "),xd=s(gd,"A",{href:!0});var hF=a(xd);U_=i(hF,"ElectraForPreTraining"),hF.forEach(t),R_=i(gd,"."),gd.forEach(t),fd.forEach(t),Pu=p(o),$o=s(o,"DIV",{class:!0});var Mf=a($o);y(Qa.$$.fragment,Mf),H_=p(Mf),Va=s(Mf,"P",{});var zf=a(Va);B_=i(zf,"Output type of "),Md=s(zf,"A",{href:!0});var mF=a(Md);Q_=i(mF,"TFElectraForPreTraining"),mF.forEach(t),V_=i(zf,"."),zf.forEach(t),Mf.forEach(t),Au=p(o),Fo=s(o,"H2",{class:!0});var Cf=a(Fo);Cn=s(Cf,"A",{id:!0,class:!0,href:!0});var uF=a(Cn);Jc=s(uF,"SPAN",{});var fF=a(Jc);y(Ka.$$.fragment,fF),fF.forEach(t),uF.forEach(t),K_=p(Cf),Gc=s(Cf,"SPAN",{});var gF=a(Gc);J_=i(gF,"ElectraModel"),gF.forEach(t),Cf.forEach(t),Ou=p(o),et=s(o,"DIV",{class:!0});var io=a(et);y(Ja.$$.fragment,io),G_=p(io),Xc=s(io,"P",{});var _F=a(Xc);X_=i(_F,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),_F.forEach(t),Y_=p(io),Ga=s(io,"P",{});var jf=a(Ga);Z_=i(jf,"This model inherits from "),zd=s(jf,"A",{href:!0});var kF=a(zd);e1=i(kF,"PreTrainedModel"),kF.forEach(t),t1=i(jf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jf.forEach(t),o1=p(io),Xa=s(io,"P",{});var qf=a(Xa);n1=i(qf,"This model is also a PyTorch "),Ya=s(qf,"A",{href:!0,rel:!0});var vF=a(Ya);s1=i(vF,"torch.nn.Module"),vF.forEach(t),a1=i(qf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qf.forEach(t),r1=p(io),$t=s(io,"DIV",{class:!0});var ca=a($t);y(Za.$$.fragment,ca),i1=p(ca),xo=s(ca,"P",{});var mc=a(xo);l1=i(mc,"The "),Cd=s(mc,"A",{href:!0});var TF=a(Cd);d1=i(TF,"ElectraModel"),TF.forEach(t),c1=i(mc," forward method, overrides the "),Yc=s(mc,"CODE",{});var bF=a(Yc);p1=i(bF,"__call__"),bF.forEach(t),h1=i(mc," special method."),mc.forEach(t),m1=p(ca),y(jn.$$.fragment,ca),u1=p(ca),y(qn.$$.fragment,ca),ca.forEach(t),io.forEach(t),Lu=p(o),Mo=s(o,"H2",{class:!0});var Pf=a(Mo);Pn=s(Pf,"A",{id:!0,class:!0,href:!0});var yF=a(Pn);Zc=s(yF,"SPAN",{});var EF=a(Zc);y(er.$$.fragment,EF),EF.forEach(t),yF.forEach(t),f1=p(Pf),ep=s(Pf,"SPAN",{});var wF=a(ep);g1=i(wF,"ElectraForPreTraining"),wF.forEach(t),Pf.forEach(t),Nu=p(o),Be=s(o,"DIV",{class:!0});var St=a(Be);y(tr.$$.fragment,St),_1=p(St),tp=s(St,"P",{});var $F=a(tp);k1=i($F,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),$F.forEach(t),v1=p(St),op=s(St,"P",{});var FF=a(op);T1=i(FF,"It is recommended to load the discriminator checkpoint into that model."),FF.forEach(t),b1=p(St),or=s(St,"P",{});var Af=a(or);y1=i(Af,"This model inherits from "),jd=s(Af,"A",{href:!0});var xF=a(jd);E1=i(xF,"PreTrainedModel"),xF.forEach(t),w1=i(Af,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Af.forEach(t),$1=p(St),nr=s(St,"P",{});var Of=a(nr);F1=i(Of,"This model is also a PyTorch "),sr=s(Of,"A",{href:!0,rel:!0});var MF=a(sr);x1=i(MF,"torch.nn.Module"),MF.forEach(t),M1=i(Of,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Of.forEach(t),z1=p(St),Ft=s(St,"DIV",{class:!0});var pa=a(Ft);y(ar.$$.fragment,pa),C1=p(pa),zo=s(pa,"P",{});var uc=a(zo);j1=i(uc,"The "),qd=s(uc,"A",{href:!0});var zF=a(qd);q1=i(zF,"ElectraForPreTraining"),zF.forEach(t),P1=i(uc," forward method, overrides the "),np=s(uc,"CODE",{});var CF=a(np);A1=i(CF,"__call__"),CF.forEach(t),O1=i(uc," special method."),uc.forEach(t),L1=p(pa),y(An.$$.fragment,pa),N1=p(pa),y(On.$$.fragment,pa),pa.forEach(t),St.forEach(t),Iu=p(o),Co=s(o,"H2",{class:!0});var Lf=a(Co);Ln=s(Lf,"A",{id:!0,class:!0,href:!0});var jF=a(Ln);sp=s(jF,"SPAN",{});var qF=a(sp);y(rr.$$.fragment,qF),qF.forEach(t),jF.forEach(t),I1=p(Lf),ap=s(Lf,"SPAN",{});var PF=a(ap);D1=i(PF,"ElectraForCausalLM"),PF.forEach(t),Lf.forEach(t),Du=p(o),tt=s(o,"DIV",{class:!0});var lo=a(tt);y(ir.$$.fragment,lo),S1=p(lo),lr=s(lo,"P",{});var Nf=a(lr);W1=i(Nf,"ELECTRA Model with a "),rp=s(Nf,"CODE",{});var AF=a(rp);U1=i(AF,"language modeling"),AF.forEach(t),R1=i(Nf," head on top for CLM fine-tuning."),Nf.forEach(t),H1=p(lo),dr=s(lo,"P",{});var If=a(dr);B1=i(If,"This model inherits from "),Pd=s(If,"A",{href:!0});var OF=a(Pd);Q1=i(OF,"PreTrainedModel"),OF.forEach(t),V1=i(If,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),If.forEach(t),K1=p(lo),cr=s(lo,"P",{});var Df=a(cr);J1=i(Df,"This model is also a PyTorch "),pr=s(Df,"A",{href:!0,rel:!0});var LF=a(pr);G1=i(LF,"torch.nn.Module"),LF.forEach(t),X1=i(Df,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Df.forEach(t),Y1=p(lo),xt=s(lo,"DIV",{class:!0});var ha=a(xt);y(hr.$$.fragment,ha),Z1=p(ha),jo=s(ha,"P",{});var fc=a(jo);ek=i(fc,"The "),Ad=s(fc,"A",{href:!0});var NF=a(Ad);tk=i(NF,"ElectraForCausalLM"),NF.forEach(t),ok=i(fc," forward method, overrides the "),ip=s(fc,"CODE",{});var IF=a(ip);nk=i(IF,"__call__"),IF.forEach(t),sk=i(fc," special method."),fc.forEach(t),ak=p(ha),y(Nn.$$.fragment,ha),rk=p(ha),y(In.$$.fragment,ha),ha.forEach(t),lo.forEach(t),Su=p(o),qo=s(o,"H2",{class:!0});var Sf=a(qo);Dn=s(Sf,"A",{id:!0,class:!0,href:!0});var DF=a(Dn);lp=s(DF,"SPAN",{});var SF=a(lp);y(mr.$$.fragment,SF),SF.forEach(t),DF.forEach(t),ik=p(Sf),dp=s(Sf,"SPAN",{});var WF=a(dp);lk=i(WF,"ElectraForMaskedLM"),WF.forEach(t),Sf.forEach(t),Wu=p(o),Qe=s(o,"DIV",{class:!0});var Wt=a(Qe);y(ur.$$.fragment,Wt),dk=p(Wt),cp=s(Wt,"P",{});var UF=a(cp);ck=i(UF,"Electra model with a language modeling head on top."),UF.forEach(t),pk=p(Wt),pp=s(Wt,"P",{});var RF=a(pp);hk=i(RF,`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),RF.forEach(t),mk=p(Wt),fr=s(Wt,"P",{});var Wf=a(fr);uk=i(Wf,"This model inherits from "),Od=s(Wf,"A",{href:!0});var HF=a(Od);fk=i(HF,"PreTrainedModel"),HF.forEach(t),gk=i(Wf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wf.forEach(t),_k=p(Wt),gr=s(Wt,"P",{});var Uf=a(gr);kk=i(Uf,"This model is also a PyTorch "),_r=s(Uf,"A",{href:!0,rel:!0});var BF=a(_r);vk=i(BF,"torch.nn.Module"),BF.forEach(t),Tk=i(Uf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uf.forEach(t),bk=p(Wt),at=s(Wt,"DIV",{class:!0});var co=a(at);y(kr.$$.fragment,co),yk=p(co),Po=s(co,"P",{});var gc=a(Po);Ek=i(gc,"The "),Ld=s(gc,"A",{href:!0});var QF=a(Ld);wk=i(QF,"ElectraForMaskedLM"),QF.forEach(t),$k=i(gc," forward method, overrides the "),hp=s(gc,"CODE",{});var VF=a(hp);Fk=i(VF,"__call__"),VF.forEach(t),xk=i(gc," special method."),gc.forEach(t),Mk=p(co),y(Sn.$$.fragment,co),zk=p(co),y(Wn.$$.fragment,co),Ck=p(co),y(Un.$$.fragment,co),co.forEach(t),Wt.forEach(t),Uu=p(o),Ao=s(o,"H2",{class:!0});var Rf=a(Ao);Rn=s(Rf,"A",{id:!0,class:!0,href:!0});var KF=a(Rn);mp=s(KF,"SPAN",{});var JF=a(mp);y(vr.$$.fragment,JF),JF.forEach(t),KF.forEach(t),jk=p(Rf),up=s(Rf,"SPAN",{});var GF=a(up);qk=i(GF,"ElectraForSequenceClassification"),GF.forEach(t),Rf.forEach(t),Ru=p(o),ot=s(o,"DIV",{class:!0});var po=a(ot);y(Tr.$$.fragment,po),Pk=p(po),fp=s(po,"P",{});var XF=a(fp);Ak=i(XF,`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),XF.forEach(t),Ok=p(po),br=s(po,"P",{});var Hf=a(br);Lk=i(Hf,"This model inherits from "),Nd=s(Hf,"A",{href:!0});var YF=a(Nd);Nk=i(YF,"PreTrainedModel"),YF.forEach(t),Ik=i(Hf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hf.forEach(t),Dk=p(po),yr=s(po,"P",{});var Bf=a(yr);Sk=i(Bf,"This model is also a PyTorch "),Er=s(Bf,"A",{href:!0,rel:!0});var ZF=a(Er);Wk=i(ZF,"torch.nn.Module"),ZF.forEach(t),Uk=i(Bf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bf.forEach(t),Rk=p(po),He=s(po,"DIV",{class:!0});var ht=a(He);y(wr.$$.fragment,ht),Hk=p(ht),Oo=s(ht,"P",{});var _c=a(Oo);Bk=i(_c,"The "),Id=s(_c,"A",{href:!0});var ex=a(Id);Qk=i(ex,"ElectraForSequenceClassification"),ex.forEach(t),Vk=i(_c," forward method, overrides the "),gp=s(_c,"CODE",{});var tx=a(gp);Kk=i(tx,"__call__"),tx.forEach(t),Jk=i(_c," special method."),_c.forEach(t),Gk=p(ht),y(Hn.$$.fragment,ht),Xk=p(ht),y(Bn.$$.fragment,ht),Yk=p(ht),y(Qn.$$.fragment,ht),Zk=p(ht),y(Vn.$$.fragment,ht),ev=p(ht),y(Kn.$$.fragment,ht),ht.forEach(t),po.forEach(t),Hu=p(o),Lo=s(o,"H2",{class:!0});var Qf=a(Lo);Jn=s(Qf,"A",{id:!0,class:!0,href:!0});var ox=a(Jn);_p=s(ox,"SPAN",{});var nx=a(_p);y($r.$$.fragment,nx),nx.forEach(t),ox.forEach(t),tv=p(Qf),kp=s(Qf,"SPAN",{});var sx=a(kp);ov=i(sx,"ElectraForMultipleChoice"),sx.forEach(t),Qf.forEach(t),Bu=p(o),nt=s(o,"DIV",{class:!0});var ho=a(nt);y(Fr.$$.fragment,ho),nv=p(ho),vp=s(ho,"P",{});var ax=a(vp);sv=i(ax,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ax.forEach(t),av=p(ho),xr=s(ho,"P",{});var Vf=a(xr);rv=i(Vf,"This model inherits from "),Dd=s(Vf,"A",{href:!0});var rx=a(Dd);iv=i(rx,"PreTrainedModel"),rx.forEach(t),lv=i(Vf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vf.forEach(t),dv=p(ho),Mr=s(ho,"P",{});var Kf=a(Mr);cv=i(Kf,"This model is also a PyTorch "),zr=s(Kf,"A",{href:!0,rel:!0});var ix=a(zr);pv=i(ix,"torch.nn.Module"),ix.forEach(t),hv=i(Kf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kf.forEach(t),mv=p(ho),Mt=s(ho,"DIV",{class:!0});var ma=a(Mt);y(Cr.$$.fragment,ma),uv=p(ma),No=s(ma,"P",{});var kc=a(No);fv=i(kc,"The "),Sd=s(kc,"A",{href:!0});var lx=a(Sd);gv=i(lx,"ElectraForMultipleChoice"),lx.forEach(t),_v=i(kc," forward method, overrides the "),Tp=s(kc,"CODE",{});var dx=a(Tp);kv=i(dx,"__call__"),dx.forEach(t),vv=i(kc," special method."),kc.forEach(t),Tv=p(ma),y(Gn.$$.fragment,ma),bv=p(ma),y(Xn.$$.fragment,ma),ma.forEach(t),ho.forEach(t),Qu=p(o),Io=s(o,"H2",{class:!0});var Jf=a(Io);Yn=s(Jf,"A",{id:!0,class:!0,href:!0});var cx=a(Yn);bp=s(cx,"SPAN",{});var px=a(bp);y(jr.$$.fragment,px),px.forEach(t),cx.forEach(t),yv=p(Jf),yp=s(Jf,"SPAN",{});var hx=a(yp);Ev=i(hx,"ElectraForTokenClassification"),hx.forEach(t),Jf.forEach(t),Vu=p(o),Ve=s(o,"DIV",{class:!0});var Ut=a(Ve);y(qr.$$.fragment,Ut),wv=p(Ut),Ep=s(Ut,"P",{});var mx=a(Ep);$v=i(mx,"Electra model with a token classification head on top."),mx.forEach(t),Fv=p(Ut),wp=s(Ut,"P",{});var ux=a(wp);xv=i(ux,"Both the discriminator and generator may be loaded into this model."),ux.forEach(t),Mv=p(Ut),Pr=s(Ut,"P",{});var Gf=a(Pr);zv=i(Gf,"This model inherits from "),Wd=s(Gf,"A",{href:!0});var fx=a(Wd);Cv=i(fx,"PreTrainedModel"),fx.forEach(t),jv=i(Gf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gf.forEach(t),qv=p(Ut),Ar=s(Ut,"P",{});var Xf=a(Ar);Pv=i(Xf,"This model is also a PyTorch "),Or=s(Xf,"A",{href:!0,rel:!0});var gx=a(Or);Av=i(gx,"torch.nn.Module"),gx.forEach(t),Ov=i(Xf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xf.forEach(t),Lv=p(Ut),rt=s(Ut,"DIV",{class:!0});var mo=a(rt);y(Lr.$$.fragment,mo),Nv=p(mo),Do=s(mo,"P",{});var vc=a(Do);Iv=i(vc,"The "),Ud=s(vc,"A",{href:!0});var _x=a(Ud);Dv=i(_x,"ElectraForTokenClassification"),_x.forEach(t),Sv=i(vc," forward method, overrides the "),$p=s(vc,"CODE",{});var kx=a($p);Wv=i(kx,"__call__"),kx.forEach(t),Uv=i(vc," special method."),vc.forEach(t),Rv=p(mo),y(Zn.$$.fragment,mo),Hv=p(mo),y(es.$$.fragment,mo),Bv=p(mo),y(ts.$$.fragment,mo),mo.forEach(t),Ut.forEach(t),Ku=p(o),So=s(o,"H2",{class:!0});var Yf=a(So);os=s(Yf,"A",{id:!0,class:!0,href:!0});var vx=a(os);Fp=s(vx,"SPAN",{});var Tx=a(Fp);y(Nr.$$.fragment,Tx),Tx.forEach(t),vx.forEach(t),Qv=p(Yf),xp=s(Yf,"SPAN",{});var bx=a(xp);Vv=i(bx,"ElectraForQuestionAnswering"),bx.forEach(t),Yf.forEach(t),Ju=p(o),st=s(o,"DIV",{class:!0});var uo=a(st);y(Ir.$$.fragment,uo),Kv=p(uo),Wo=s(uo,"P",{});var Tc=a(Wo);Jv=i(Tc,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Mp=s(Tc,"CODE",{});var yx=a(Mp);Gv=i(yx,"span start logits"),yx.forEach(t),Xv=i(Tc," and "),zp=s(Tc,"CODE",{});var Ex=a(zp);Yv=i(Ex,"span end logits"),Ex.forEach(t),Zv=i(Tc,")."),Tc.forEach(t),eT=p(uo),Dr=s(uo,"P",{});var Zf=a(Dr);tT=i(Zf,"This model inherits from "),Rd=s(Zf,"A",{href:!0});var wx=a(Rd);oT=i(wx,"PreTrainedModel"),wx.forEach(t),nT=i(Zf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zf.forEach(t),sT=p(uo),Sr=s(uo,"P",{});var eg=a(Sr);aT=i(eg,"This model is also a PyTorch "),Wr=s(eg,"A",{href:!0,rel:!0});var $x=a(Wr);rT=i($x,"torch.nn.Module"),$x.forEach(t),iT=i(eg,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eg.forEach(t),lT=p(uo),it=s(uo,"DIV",{class:!0});var fo=a(it);y(Ur.$$.fragment,fo),dT=p(fo),Uo=s(fo,"P",{});var bc=a(Uo);cT=i(bc,"The "),Hd=s(bc,"A",{href:!0});var Fx=a(Hd);pT=i(Fx,"ElectraForQuestionAnswering"),Fx.forEach(t),hT=i(bc," forward method, overrides the "),Cp=s(bc,"CODE",{});var xx=a(Cp);mT=i(xx,"__call__"),xx.forEach(t),uT=i(bc," special method."),bc.forEach(t),fT=p(fo),y(ns.$$.fragment,fo),gT=p(fo),y(ss.$$.fragment,fo),_T=p(fo),y(as.$$.fragment,fo),fo.forEach(t),uo.forEach(t),Gu=p(o),Ro=s(o,"H2",{class:!0});var tg=a(Ro);rs=s(tg,"A",{id:!0,class:!0,href:!0});var Mx=a(rs);jp=s(Mx,"SPAN",{});var zx=a(jp);y(Rr.$$.fragment,zx),zx.forEach(t),Mx.forEach(t),kT=p(tg),qp=s(tg,"SPAN",{});var Cx=a(qp);vT=i(Cx,"TFElectraModel"),Cx.forEach(t),tg.forEach(t),Xu=p(o),Ke=s(o,"DIV",{class:!0});var Rt=a(Ke);y(Hr.$$.fragment,Rt),TT=p(Rt),Pp=s(Rt,"P",{});var jx=a(Pp);bT=i(jx,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top. Identical to the BERT model except that it uses an additional linear layer between the embedding layer and the encoder if the hidden size and embedding size are different. Both the generator and discriminator checkpoints may be loaded into this model."),jx.forEach(t),yT=p(Rt),Br=s(Rt,"P",{});var og=a(Br);ET=i(og,"This model inherits from "),Bd=s(og,"A",{href:!0});var qx=a(Bd);wT=i(qx,"TFPreTrainedModel"),qx.forEach(t),$T=i(og,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),og.forEach(t),FT=p(Rt),Qr=s(Rt,"P",{});var ng=a(Qr);xT=i(ng,"This model is also a "),Vr=s(ng,"A",{href:!0,rel:!0});var Px=a(Vr);MT=i(Px,"tf.keras.Model"),Px.forEach(t),zT=i(ng,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ng.forEach(t),CT=p(Rt),y(is.$$.fragment,Rt),jT=p(Rt),zt=s(Rt,"DIV",{class:!0});var ua=a(zt);y(Kr.$$.fragment,ua),qT=p(ua),Ho=s(ua,"P",{});var yc=a(Ho);PT=i(yc,"The "),Qd=s(yc,"A",{href:!0});var Ax=a(Qd);AT=i(Ax,"TFElectraModel"),Ax.forEach(t),OT=i(yc," forward method, overrides the "),Ap=s(yc,"CODE",{});var Ox=a(Ap);LT=i(Ox,"__call__"),Ox.forEach(t),NT=i(yc," special method."),yc.forEach(t),IT=p(ua),y(ls.$$.fragment,ua),DT=p(ua),y(ds.$$.fragment,ua),ua.forEach(t),Rt.forEach(t),Yu=p(o),Bo=s(o,"H2",{class:!0});var sg=a(Bo);cs=s(sg,"A",{id:!0,class:!0,href:!0});var Lx=a(cs);Op=s(Lx,"SPAN",{});var Nx=a(Op);y(Jr.$$.fragment,Nx),Nx.forEach(t),Lx.forEach(t),ST=p(sg),Lp=s(sg,"SPAN",{});var Ix=a(Lp);WT=i(Ix,"TFElectraForPreTraining"),Ix.forEach(t),sg.forEach(t),Zu=p(o),Oe=s(o,"DIV",{class:!0});var mt=a(Oe);y(Gr.$$.fragment,mt),UT=p(mt),Np=s(mt,"P",{});var Dx=a(Np);RT=i(Dx,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),Dx.forEach(t),HT=p(mt),Ip=s(mt,"P",{});var Sx=a(Ip);BT=i(Sx,`Even though both the discriminator and generator may be loaded into this model, the discriminator is the only model
of the two to have the correct classification head to be used for this model.`),Sx.forEach(t),QT=p(mt),Xr=s(mt,"P",{});var ag=a(Xr);VT=i(ag,"This model inherits from "),Vd=s(ag,"A",{href:!0});var Wx=a(Vd);KT=i(Wx,"TFPreTrainedModel"),Wx.forEach(t),JT=i(ag,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ag.forEach(t),GT=p(mt),Yr=s(mt,"P",{});var rg=a(Yr);XT=i(rg,"This model is also a "),Zr=s(rg,"A",{href:!0,rel:!0});var Ux=a(Zr);YT=i(Ux,"tf.keras.Model"),Ux.forEach(t),ZT=i(rg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rg.forEach(t),eb=p(mt),y(ps.$$.fragment,mt),tb=p(mt),Ct=s(mt,"DIV",{class:!0});var fa=a(Ct);y(ei.$$.fragment,fa),ob=p(fa),Qo=s(fa,"P",{});var Ec=a(Qo);nb=i(Ec,"The "),Kd=s(Ec,"A",{href:!0});var Rx=a(Kd);sb=i(Rx,"TFElectraForPreTraining"),Rx.forEach(t),ab=i(Ec," forward method, overrides the "),Dp=s(Ec,"CODE",{});var Hx=a(Dp);rb=i(Hx,"__call__"),Hx.forEach(t),ib=i(Ec," special method."),Ec.forEach(t),lb=p(fa),y(hs.$$.fragment,fa),db=p(fa),y(ms.$$.fragment,fa),fa.forEach(t),mt.forEach(t),ef=p(o),Vo=s(o,"H2",{class:!0});var ig=a(Vo);us=s(ig,"A",{id:!0,class:!0,href:!0});var Bx=a(us);Sp=s(Bx,"SPAN",{});var Qx=a(Sp);y(ti.$$.fragment,Qx),Qx.forEach(t),Bx.forEach(t),cb=p(ig),Wp=s(ig,"SPAN",{});var Vx=a(Wp);pb=i(Vx,"TFElectraForMaskedLM"),Vx.forEach(t),ig.forEach(t),tf=p(o),Le=s(o,"DIV",{class:!0});var ut=a(Le);y(oi.$$.fragment,ut),hb=p(ut),Up=s(ut,"P",{});var Kx=a(Up);mb=i(Kx,"Electra model with a language modeling head on top."),Kx.forEach(t),ub=p(ut),Rp=s(ut,"P",{});var Jx=a(Rp);fb=i(Jx,`Even though both the discriminator and generator may be loaded into this model, the generator is the only model of
the two to have been trained for the masked language modeling task.`),Jx.forEach(t),gb=p(ut),ni=s(ut,"P",{});var lg=a(ni);_b=i(lg,"This model inherits from "),Jd=s(lg,"A",{href:!0});var Gx=a(Jd);kb=i(Gx,"TFPreTrainedModel"),Gx.forEach(t),vb=i(lg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lg.forEach(t),Tb=p(ut),si=s(ut,"P",{});var dg=a(si);bb=i(dg,"This model is also a "),ai=s(dg,"A",{href:!0,rel:!0});var Xx=a(ai);yb=i(Xx,"tf.keras.Model"),Xx.forEach(t),Eb=i(dg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dg.forEach(t),wb=p(ut),y(fs.$$.fragment,ut),$b=p(ut),lt=s(ut,"DIV",{class:!0});var go=a(lt);y(ri.$$.fragment,go),Fb=p(go),Ko=s(go,"P",{});var wc=a(Ko);xb=i(wc,"The "),Gd=s(wc,"A",{href:!0});var Yx=a(Gd);Mb=i(Yx,"TFElectraForMaskedLM"),Yx.forEach(t),zb=i(wc," forward method, overrides the "),Hp=s(wc,"CODE",{});var Zx=a(Hp);Cb=i(Zx,"__call__"),Zx.forEach(t),jb=i(wc," special method."),wc.forEach(t),qb=p(go),y(gs.$$.fragment,go),Pb=p(go),y(_s.$$.fragment,go),Ab=p(go),y(ks.$$.fragment,go),go.forEach(t),ut.forEach(t),of=p(o),Jo=s(o,"H2",{class:!0});var cg=a(Jo);vs=s(cg,"A",{id:!0,class:!0,href:!0});var eM=a(vs);Bp=s(eM,"SPAN",{});var tM=a(Bp);y(ii.$$.fragment,tM),tM.forEach(t),eM.forEach(t),Ob=p(cg),Qp=s(cg,"SPAN",{});var oM=a(Qp);Lb=i(oM,"TFElectraForSequenceClassification"),oM.forEach(t),cg.forEach(t),nf=p(o),Je=s(o,"DIV",{class:!0});var Ht=a(Je);y(li.$$.fragment,Ht),Nb=p(Ht),Vp=s(Ht,"P",{});var nM=a(Vp);Ib=i(nM,`ELECTRA Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),nM.forEach(t),Db=p(Ht),di=s(Ht,"P",{});var pg=a(di);Sb=i(pg,"This model inherits from "),Xd=s(pg,"A",{href:!0});var sM=a(Xd);Wb=i(sM,"TFPreTrainedModel"),sM.forEach(t),Ub=i(pg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pg.forEach(t),Rb=p(Ht),ci=s(Ht,"P",{});var hg=a(ci);Hb=i(hg,"This model is also a "),pi=s(hg,"A",{href:!0,rel:!0});var aM=a(pi);Bb=i(aM,"tf.keras.Model"),aM.forEach(t),Qb=i(hg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hg.forEach(t),Vb=p(Ht),y(Ts.$$.fragment,Ht),Kb=p(Ht),dt=s(Ht,"DIV",{class:!0});var _o=a(dt);y(hi.$$.fragment,_o),Jb=p(_o),Go=s(_o,"P",{});var $c=a(Go);Gb=i($c,"The "),Yd=s($c,"A",{href:!0});var rM=a(Yd);Xb=i(rM,"TFElectraForSequenceClassification"),rM.forEach(t),Yb=i($c," forward method, overrides the "),Kp=s($c,"CODE",{});var iM=a(Kp);Zb=i(iM,"__call__"),iM.forEach(t),ey=i($c," special method."),$c.forEach(t),ty=p(_o),y(bs.$$.fragment,_o),oy=p(_o),y(ys.$$.fragment,_o),ny=p(_o),y(Es.$$.fragment,_o),_o.forEach(t),Ht.forEach(t),sf=p(o),Xo=s(o,"H2",{class:!0});var mg=a(Xo);ws=s(mg,"A",{id:!0,class:!0,href:!0});var lM=a(ws);Jp=s(lM,"SPAN",{});var dM=a(Jp);y(mi.$$.fragment,dM),dM.forEach(t),lM.forEach(t),sy=p(mg),Gp=s(mg,"SPAN",{});var cM=a(Gp);ay=i(cM,"TFElectraForMultipleChoice"),cM.forEach(t),mg.forEach(t),af=p(o),Ge=s(o,"DIV",{class:!0});var Bt=a(Ge);y(ui.$$.fragment,Bt),ry=p(Bt),Xp=s(Bt,"P",{});var pM=a(Xp);iy=i(pM,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),pM.forEach(t),ly=p(Bt),fi=s(Bt,"P",{});var ug=a(fi);dy=i(ug,"This model inherits from "),Zd=s(ug,"A",{href:!0});var hM=a(Zd);cy=i(hM,"TFPreTrainedModel"),hM.forEach(t),py=i(ug,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ug.forEach(t),hy=p(Bt),gi=s(Bt,"P",{});var fg=a(gi);my=i(fg,"This model is also a "),_i=s(fg,"A",{href:!0,rel:!0});var mM=a(_i);uy=i(mM,"tf.keras.Model"),mM.forEach(t),fy=i(fg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fg.forEach(t),gy=p(Bt),y($s.$$.fragment,Bt),_y=p(Bt),jt=s(Bt,"DIV",{class:!0});var ga=a(jt);y(ki.$$.fragment,ga),ky=p(ga),Yo=s(ga,"P",{});var Fc=a(Yo);vy=i(Fc,"The "),ec=s(Fc,"A",{href:!0});var uM=a(ec);Ty=i(uM,"TFElectraForMultipleChoice"),uM.forEach(t),by=i(Fc," forward method, overrides the "),Yp=s(Fc,"CODE",{});var fM=a(Yp);yy=i(fM,"__call__"),fM.forEach(t),Ey=i(Fc," special method."),Fc.forEach(t),wy=p(ga),y(Fs.$$.fragment,ga),$y=p(ga),y(xs.$$.fragment,ga),ga.forEach(t),Bt.forEach(t),rf=p(o),Zo=s(o,"H2",{class:!0});var gg=a(Zo);Ms=s(gg,"A",{id:!0,class:!0,href:!0});var gM=a(Ms);Zp=s(gM,"SPAN",{});var _M=a(Zp);y(vi.$$.fragment,_M),_M.forEach(t),gM.forEach(t),Fy=p(gg),eh=s(gg,"SPAN",{});var kM=a(eh);xy=i(kM,"TFElectraForTokenClassification"),kM.forEach(t),gg.forEach(t),lf=p(o),Ne=s(o,"DIV",{class:!0});var ft=a(Ne);y(Ti.$$.fragment,ft),My=p(ft),th=s(ft,"P",{});var vM=a(th);zy=i(vM,"Electra model with a token classification head on top."),vM.forEach(t),Cy=p(ft),oh=s(ft,"P",{});var TM=a(oh);jy=i(TM,"Both the discriminator and generator may be loaded into this model."),TM.forEach(t),qy=p(ft),bi=s(ft,"P",{});var _g=a(bi);Py=i(_g,"This model inherits from "),tc=s(_g,"A",{href:!0});var bM=a(tc);Ay=i(bM,"TFPreTrainedModel"),bM.forEach(t),Oy=i(_g,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_g.forEach(t),Ly=p(ft),yi=s(ft,"P",{});var kg=a(yi);Ny=i(kg,"This model is also a "),Ei=s(kg,"A",{href:!0,rel:!0});var yM=a(Ei);Iy=i(yM,"tf.keras.Model"),yM.forEach(t),Dy=i(kg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kg.forEach(t),Sy=p(ft),y(zs.$$.fragment,ft),Wy=p(ft),ct=s(ft,"DIV",{class:!0});var ko=a(ct);y(wi.$$.fragment,ko),Uy=p(ko),en=s(ko,"P",{});var xc=a(en);Ry=i(xc,"The "),oc=s(xc,"A",{href:!0});var EM=a(oc);Hy=i(EM,"TFElectraForTokenClassification"),EM.forEach(t),By=i(xc," forward method, overrides the "),nh=s(xc,"CODE",{});var wM=a(nh);Qy=i(wM,"__call__"),wM.forEach(t),Vy=i(xc," special method."),xc.forEach(t),Ky=p(ko),y(Cs.$$.fragment,ko),Jy=p(ko),y(js.$$.fragment,ko),Gy=p(ko),y(qs.$$.fragment,ko),ko.forEach(t),ft.forEach(t),df=p(o),tn=s(o,"H2",{class:!0});var vg=a(tn);Ps=s(vg,"A",{id:!0,class:!0,href:!0});var $M=a(Ps);sh=s($M,"SPAN",{});var FM=a(sh);y($i.$$.fragment,FM),FM.forEach(t),$M.forEach(t),Xy=p(vg),ah=s(vg,"SPAN",{});var xM=a(ah);Yy=i(xM,"TFElectraForQuestionAnswering"),xM.forEach(t),vg.forEach(t),cf=p(o),Xe=s(o,"DIV",{class:!0});var Qt=a(Xe);y(Fi.$$.fragment,Qt),Zy=p(Qt),on=s(Qt,"P",{});var Mc=a(on);eE=i(Mc,`Electra Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rh=s(Mc,"CODE",{});var MM=a(rh);tE=i(MM,"span start logits"),MM.forEach(t),oE=i(Mc," and "),ih=s(Mc,"CODE",{});var zM=a(ih);nE=i(zM,"span end logits"),zM.forEach(t),sE=i(Mc,")."),Mc.forEach(t),aE=p(Qt),xi=s(Qt,"P",{});var Tg=a(xi);rE=i(Tg,"This model inherits from "),nc=s(Tg,"A",{href:!0});var CM=a(nc);iE=i(CM,"TFPreTrainedModel"),CM.forEach(t),lE=i(Tg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tg.forEach(t),dE=p(Qt),Mi=s(Qt,"P",{});var bg=a(Mi);cE=i(bg,"This model is also a "),zi=s(bg,"A",{href:!0,rel:!0});var jM=a(zi);pE=i(jM,"tf.keras.Model"),jM.forEach(t),hE=i(bg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bg.forEach(t),mE=p(Qt),y(As.$$.fragment,Qt),uE=p(Qt),pt=s(Qt,"DIV",{class:!0});var vo=a(pt);y(Ci.$$.fragment,vo),fE=p(vo),nn=s(vo,"P",{});var zc=a(nn);gE=i(zc,"The "),sc=s(zc,"A",{href:!0});var qM=a(sc);_E=i(qM,"TFElectraForQuestionAnswering"),qM.forEach(t),kE=i(zc," forward method, overrides the "),lh=s(zc,"CODE",{});var PM=a(lh);vE=i(PM,"__call__"),PM.forEach(t),TE=i(zc," special method."),zc.forEach(t),bE=p(vo),y(Os.$$.fragment,vo),yE=p(vo),y(Ls.$$.fragment,vo),EE=p(vo),y(Ns.$$.fragment,vo),vo.forEach(t),Qt.forEach(t),pf=p(o),sn=s(o,"H2",{class:!0});var yg=a(sn);Is=s(yg,"A",{id:!0,class:!0,href:!0});var AM=a(Is);dh=s(AM,"SPAN",{});var OM=a(dh);y(ji.$$.fragment,OM),OM.forEach(t),AM.forEach(t),wE=p(yg),ch=s(yg,"SPAN",{});var LM=a(ch);$E=i(LM,"FlaxElectraModel"),LM.forEach(t),yg.forEach(t),hf=p(o),Ie=s(o,"DIV",{class:!0});var gt=a(Ie);y(qi.$$.fragment,gt),FE=p(gt),ph=s(gt,"P",{});var NM=a(ph);xE=i(NM,"The bare Electra Model transformer outputting raw hidden-states without any specific head on top."),NM.forEach(t),ME=p(gt),Pi=s(gt,"P",{});var Eg=a(Pi);zE=i(Eg,"This model inherits from "),ac=s(Eg,"A",{href:!0});var IM=a(ac);CE=i(IM,"FlaxPreTrainedModel"),IM.forEach(t),jE=i(Eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Eg.forEach(t),qE=p(gt),Ai=s(gt,"P",{});var wg=a(Ai);PE=i(wg,`This model is also a Flax Linen
`),Oi=s(wg,"A",{href:!0,rel:!0});var DM=a(Oi);AE=i(DM,"flax.nn.Module"),DM.forEach(t),OE=i(wg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wg.forEach(t),LE=p(gt),hh=s(gt,"P",{});var SM=a(hh);NE=i(SM,"Finally, this model supports inherent JAX features such as:"),SM.forEach(t),IE=p(gt),Kt=s(gt,"UL",{});var _a=a(Kt);mh=s(_a,"LI",{});var WM=a(mh);Li=s(WM,"A",{href:!0,rel:!0});var UM=a(Li);DE=i(UM,"Just-In-Time (JIT) compilation"),UM.forEach(t),WM.forEach(t),SE=p(_a),uh=s(_a,"LI",{});var RM=a(uh);Ni=s(RM,"A",{href:!0,rel:!0});var HM=a(Ni);WE=i(HM,"Automatic Differentiation"),HM.forEach(t),RM.forEach(t),UE=p(_a),fh=s(_a,"LI",{});var BM=a(fh);Ii=s(BM,"A",{href:!0,rel:!0});var QM=a(Ii);RE=i(QM,"Vectorization"),QM.forEach(t),BM.forEach(t),HE=p(_a),gh=s(_a,"LI",{});var VM=a(gh);Di=s(VM,"A",{href:!0,rel:!0});var KM=a(Di);BE=i(KM,"Parallelization"),KM.forEach(t),VM.forEach(t),_a.forEach(t),QE=p(gt),qt=s(gt,"DIV",{class:!0});var ka=a(qt);y(Si.$$.fragment,ka),VE=p(ka),an=s(ka,"P",{});var Cc=a(an);KE=i(Cc,"The "),_h=s(Cc,"CODE",{});var JM=a(_h);JE=i(JM,"FlaxElectraPreTrainedModel"),JM.forEach(t),GE=i(Cc," forward method, overrides the "),kh=s(Cc,"CODE",{});var GM=a(kh);XE=i(GM,"__call__"),GM.forEach(t),YE=i(Cc," special method."),Cc.forEach(t),ZE=p(ka),y(Ds.$$.fragment,ka),ew=p(ka),y(Ss.$$.fragment,ka),ka.forEach(t),gt.forEach(t),mf=p(o),rn=s(o,"H2",{class:!0});var $g=a(rn);Ws=s($g,"A",{id:!0,class:!0,href:!0});var XM=a(Ws);vh=s(XM,"SPAN",{});var YM=a(vh);y(Wi.$$.fragment,YM),YM.forEach(t),XM.forEach(t),tw=p($g),Th=s($g,"SPAN",{});var ZM=a(Th);ow=i(ZM,"FlaxElectraForPreTraining"),ZM.forEach(t),$g.forEach(t),uf=p(o),Pe=s(o,"DIV",{class:!0});var Ye=a(Pe);y(Ui.$$.fragment,Ye),nw=p(Ye),bh=s(Ye,"P",{});var ez=a(bh);sw=i(ez,"Electra model with a binary classification head on top as used during pretraining for identifying generated tokens."),ez.forEach(t),aw=p(Ye),yh=s(Ye,"P",{});var tz=a(yh);rw=i(tz,"It is recommended to load the discriminator checkpoint into that model."),tz.forEach(t),iw=p(Ye),Ri=s(Ye,"P",{});var Fg=a(Ri);lw=i(Fg,"This model inherits from "),rc=s(Fg,"A",{href:!0});var oz=a(rc);dw=i(oz,"FlaxPreTrainedModel"),oz.forEach(t),cw=i(Fg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fg.forEach(t),pw=p(Ye),Hi=s(Ye,"P",{});var xg=a(Hi);hw=i(xg,`This model is also a Flax Linen
`),Bi=s(xg,"A",{href:!0,rel:!0});var nz=a(Bi);mw=i(nz,"flax.nn.Module"),nz.forEach(t),uw=i(xg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),xg.forEach(t),fw=p(Ye),Eh=s(Ye,"P",{});var sz=a(Eh);gw=i(sz,"Finally, this model supports inherent JAX features such as:"),sz.forEach(t),_w=p(Ye),Jt=s(Ye,"UL",{});var va=a(Jt);wh=s(va,"LI",{});var az=a(wh);Qi=s(az,"A",{href:!0,rel:!0});var rz=a(Qi);kw=i(rz,"Just-In-Time (JIT) compilation"),rz.forEach(t),az.forEach(t),vw=p(va),$h=s(va,"LI",{});var iz=a($h);Vi=s(iz,"A",{href:!0,rel:!0});var lz=a(Vi);Tw=i(lz,"Automatic Differentiation"),lz.forEach(t),iz.forEach(t),bw=p(va),Fh=s(va,"LI",{});var dz=a(Fh);Ki=s(dz,"A",{href:!0,rel:!0});var cz=a(Ki);yw=i(cz,"Vectorization"),cz.forEach(t),dz.forEach(t),Ew=p(va),xh=s(va,"LI",{});var pz=a(xh);Ji=s(pz,"A",{href:!0,rel:!0});var hz=a(Ji);ww=i(hz,"Parallelization"),hz.forEach(t),pz.forEach(t),va.forEach(t),$w=p(Ye),Pt=s(Ye,"DIV",{class:!0});var Ta=a(Pt);y(Gi.$$.fragment,Ta),Fw=p(Ta),ln=s(Ta,"P",{});var jc=a(ln);xw=i(jc,"The "),Mh=s(jc,"CODE",{});var mz=a(Mh);Mw=i(mz,"FlaxElectraPreTrainedModel"),mz.forEach(t),zw=i(jc," forward method, overrides the "),zh=s(jc,"CODE",{});var uz=a(zh);Cw=i(uz,"__call__"),uz.forEach(t),jw=i(jc," special method."),jc.forEach(t),qw=p(Ta),y(Us.$$.fragment,Ta),Pw=p(Ta),y(Rs.$$.fragment,Ta),Ta.forEach(t),Ye.forEach(t),ff=p(o),dn=s(o,"H2",{class:!0});var Mg=a(dn);Hs=s(Mg,"A",{id:!0,class:!0,href:!0});var fz=a(Hs);Ch=s(fz,"SPAN",{});var gz=a(Ch);y(Xi.$$.fragment,gz),gz.forEach(t),fz.forEach(t),Aw=p(Mg),jh=s(Mg,"SPAN",{});var _z=a(jh);Ow=i(_z,"FlaxElectraForCausalLM"),_z.forEach(t),Mg.forEach(t),gf=p(o),De=s(o,"DIV",{class:!0});var _t=a(De);y(Yi.$$.fragment,_t),Lw=p(_t),qh=s(_t,"P",{});var kz=a(qh);Nw=i(kz,`Electra Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),kz.forEach(t),Iw=p(_t),Zi=s(_t,"P",{});var zg=a(Zi);Dw=i(zg,"This model inherits from "),ic=s(zg,"A",{href:!0});var vz=a(ic);Sw=i(vz,"FlaxPreTrainedModel"),vz.forEach(t),Ww=i(zg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),zg.forEach(t),Uw=p(_t),el=s(_t,"P",{});var Cg=a(el);Rw=i(Cg,`This model is also a Flax Linen
`),tl=s(Cg,"A",{href:!0,rel:!0});var Tz=a(tl);Hw=i(Tz,"flax.nn.Module"),Tz.forEach(t),Bw=i(Cg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Cg.forEach(t),Qw=p(_t),Ph=s(_t,"P",{});var bz=a(Ph);Vw=i(bz,"Finally, this model supports inherent JAX features such as:"),bz.forEach(t),Kw=p(_t),Gt=s(_t,"UL",{});var ba=a(Gt);Ah=s(ba,"LI",{});var yz=a(Ah);ol=s(yz,"A",{href:!0,rel:!0});var Ez=a(ol);Jw=i(Ez,"Just-In-Time (JIT) compilation"),Ez.forEach(t),yz.forEach(t),Gw=p(ba),Oh=s(ba,"LI",{});var wz=a(Oh);nl=s(wz,"A",{href:!0,rel:!0});var $z=a(nl);Xw=i($z,"Automatic Differentiation"),$z.forEach(t),wz.forEach(t),Yw=p(ba),Lh=s(ba,"LI",{});var Fz=a(Lh);sl=s(Fz,"A",{href:!0,rel:!0});var xz=a(sl);Zw=i(xz,"Vectorization"),xz.forEach(t),Fz.forEach(t),e$=p(ba),Nh=s(ba,"LI",{});var Mz=a(Nh);al=s(Mz,"A",{href:!0,rel:!0});var zz=a(al);t$=i(zz,"Parallelization"),zz.forEach(t),Mz.forEach(t),ba.forEach(t),o$=p(_t),At=s(_t,"DIV",{class:!0});var ya=a(At);y(rl.$$.fragment,ya),n$=p(ya),cn=s(ya,"P",{});var qc=a(cn);s$=i(qc,"The "),Ih=s(qc,"CODE",{});var Cz=a(Ih);a$=i(Cz,"FlaxElectraPreTrainedModel"),Cz.forEach(t),r$=i(qc," forward method, overrides the "),Dh=s(qc,"CODE",{});var jz=a(Dh);i$=i(jz,"__call__"),jz.forEach(t),l$=i(qc," special method."),qc.forEach(t),d$=p(ya),y(Bs.$$.fragment,ya),c$=p(ya),y(Qs.$$.fragment,ya),ya.forEach(t),_t.forEach(t),_f=p(o),pn=s(o,"H2",{class:!0});var jg=a(pn);Vs=s(jg,"A",{id:!0,class:!0,href:!0});var qz=a(Vs);Sh=s(qz,"SPAN",{});var Pz=a(Sh);y(il.$$.fragment,Pz),Pz.forEach(t),qz.forEach(t),p$=p(jg),Wh=s(jg,"SPAN",{});var Az=a(Wh);h$=i(Az,"FlaxElectraForMaskedLM"),Az.forEach(t),jg.forEach(t),kf=p(o),Se=s(o,"DIV",{class:!0});var kt=a(Se);y(ll.$$.fragment,kt),m$=p(kt),dl=s(kt,"P",{});var qg=a(dl);u$=i(qg,"Electra Model with a "),Uh=s(qg,"CODE",{});var Oz=a(Uh);f$=i(Oz,"language modeling"),Oz.forEach(t),g$=i(qg," head on top."),qg.forEach(t),_$=p(kt),cl=s(kt,"P",{});var Pg=a(cl);k$=i(Pg,"This model inherits from "),lc=s(Pg,"A",{href:!0});var Lz=a(lc);v$=i(Lz,"FlaxPreTrainedModel"),Lz.forEach(t),T$=i(Pg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Pg.forEach(t),b$=p(kt),pl=s(kt,"P",{});var Ag=a(pl);y$=i(Ag,`This model is also a Flax Linen
`),hl=s(Ag,"A",{href:!0,rel:!0});var Nz=a(hl);E$=i(Nz,"flax.nn.Module"),Nz.forEach(t),w$=i(Ag,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ag.forEach(t),$$=p(kt),Rh=s(kt,"P",{});var Iz=a(Rh);F$=i(Iz,"Finally, this model supports inherent JAX features such as:"),Iz.forEach(t),x$=p(kt),Xt=s(kt,"UL",{});var Ea=a(Xt);Hh=s(Ea,"LI",{});var Dz=a(Hh);ml=s(Dz,"A",{href:!0,rel:!0});var Sz=a(ml);M$=i(Sz,"Just-In-Time (JIT) compilation"),Sz.forEach(t),Dz.forEach(t),z$=p(Ea),Bh=s(Ea,"LI",{});var Wz=a(Bh);ul=s(Wz,"A",{href:!0,rel:!0});var Uz=a(ul);C$=i(Uz,"Automatic Differentiation"),Uz.forEach(t),Wz.forEach(t),j$=p(Ea),Qh=s(Ea,"LI",{});var Rz=a(Qh);fl=s(Rz,"A",{href:!0,rel:!0});var Hz=a(fl);q$=i(Hz,"Vectorization"),Hz.forEach(t),Rz.forEach(t),P$=p(Ea),Vh=s(Ea,"LI",{});var Bz=a(Vh);gl=s(Bz,"A",{href:!0,rel:!0});var Qz=a(gl);A$=i(Qz,"Parallelization"),Qz.forEach(t),Bz.forEach(t),Ea.forEach(t),O$=p(kt),Ot=s(kt,"DIV",{class:!0});var wa=a(Ot);y(_l.$$.fragment,wa),L$=p(wa),hn=s(wa,"P",{});var Pc=a(hn);N$=i(Pc,"The "),Kh=s(Pc,"CODE",{});var Vz=a(Kh);I$=i(Vz,"FlaxElectraPreTrainedModel"),Vz.forEach(t),D$=i(Pc," forward method, overrides the "),Jh=s(Pc,"CODE",{});var Kz=a(Jh);S$=i(Kz,"__call__"),Kz.forEach(t),W$=i(Pc," special method."),Pc.forEach(t),U$=p(wa),y(Ks.$$.fragment,wa),R$=p(wa),y(Js.$$.fragment,wa),wa.forEach(t),kt.forEach(t),vf=p(o),mn=s(o,"H2",{class:!0});var Og=a(mn);Gs=s(Og,"A",{id:!0,class:!0,href:!0});var Jz=a(Gs);Gh=s(Jz,"SPAN",{});var Gz=a(Gh);y(kl.$$.fragment,Gz),Gz.forEach(t),Jz.forEach(t),H$=p(Og),Xh=s(Og,"SPAN",{});var Xz=a(Xh);B$=i(Xz,"FlaxElectraForSequenceClassification"),Xz.forEach(t),Og.forEach(t),Tf=p(o),We=s(o,"DIV",{class:!0});var vt=a(We);y(vl.$$.fragment,vt),Q$=p(vt),Yh=s(vt,"P",{});var Yz=a(Yh);V$=i(Yz,`Electra Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Yz.forEach(t),K$=p(vt),Tl=s(vt,"P",{});var Lg=a(Tl);J$=i(Lg,"This model inherits from "),dc=s(Lg,"A",{href:!0});var Zz=a(dc);G$=i(Zz,"FlaxPreTrainedModel"),Zz.forEach(t),X$=i(Lg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Lg.forEach(t),Y$=p(vt),bl=s(vt,"P",{});var Ng=a(bl);Z$=i(Ng,`This model is also a Flax Linen
`),yl=s(Ng,"A",{href:!0,rel:!0});var e4=a(yl);e2=i(e4,"flax.nn.Module"),e4.forEach(t),t2=i(Ng,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ng.forEach(t),o2=p(vt),Zh=s(vt,"P",{});var t4=a(Zh);n2=i(t4,"Finally, this model supports inherent JAX features such as:"),t4.forEach(t),s2=p(vt),Yt=s(vt,"UL",{});var $a=a(Yt);em=s($a,"LI",{});var o4=a(em);El=s(o4,"A",{href:!0,rel:!0});var n4=a(El);a2=i(n4,"Just-In-Time (JIT) compilation"),n4.forEach(t),o4.forEach(t),r2=p($a),tm=s($a,"LI",{});var s4=a(tm);wl=s(s4,"A",{href:!0,rel:!0});var a4=a(wl);i2=i(a4,"Automatic Differentiation"),a4.forEach(t),s4.forEach(t),l2=p($a),om=s($a,"LI",{});var r4=a(om);$l=s(r4,"A",{href:!0,rel:!0});var i4=a($l);d2=i(i4,"Vectorization"),i4.forEach(t),r4.forEach(t),c2=p($a),nm=s($a,"LI",{});var l4=a(nm);Fl=s(l4,"A",{href:!0,rel:!0});var d4=a(Fl);p2=i(d4,"Parallelization"),d4.forEach(t),l4.forEach(t),$a.forEach(t),h2=p(vt),Lt=s(vt,"DIV",{class:!0});var Fa=a(Lt);y(xl.$$.fragment,Fa),m2=p(Fa),un=s(Fa,"P",{});var Ac=a(un);u2=i(Ac,"The "),sm=s(Ac,"CODE",{});var c4=a(sm);f2=i(c4,"FlaxElectraPreTrainedModel"),c4.forEach(t),g2=i(Ac," forward method, overrides the "),am=s(Ac,"CODE",{});var p4=a(am);_2=i(p4,"__call__"),p4.forEach(t),k2=i(Ac," special method."),Ac.forEach(t),v2=p(Fa),y(Xs.$$.fragment,Fa),T2=p(Fa),y(Ys.$$.fragment,Fa),Fa.forEach(t),vt.forEach(t),bf=p(o),fn=s(o,"H2",{class:!0});var Ig=a(fn);Zs=s(Ig,"A",{id:!0,class:!0,href:!0});var h4=a(Zs);rm=s(h4,"SPAN",{});var m4=a(rm);y(Ml.$$.fragment,m4),m4.forEach(t),h4.forEach(t),b2=p(Ig),im=s(Ig,"SPAN",{});var u4=a(im);y2=i(u4,"FlaxElectraForMultipleChoice"),u4.forEach(t),Ig.forEach(t),yf=p(o),Ue=s(o,"DIV",{class:!0});var Tt=a(Ue);y(zl.$$.fragment,Tt),E2=p(Tt),lm=s(Tt,"P",{});var f4=a(lm);w2=i(f4,`ELECTRA Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),f4.forEach(t),$2=p(Tt),Cl=s(Tt,"P",{});var Dg=a(Cl);F2=i(Dg,"This model inherits from "),cc=s(Dg,"A",{href:!0});var g4=a(cc);x2=i(g4,"FlaxPreTrainedModel"),g4.forEach(t),M2=i(Dg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Dg.forEach(t),z2=p(Tt),jl=s(Tt,"P",{});var Sg=a(jl);C2=i(Sg,`This model is also a Flax Linen
`),ql=s(Sg,"A",{href:!0,rel:!0});var _4=a(ql);j2=i(_4,"flax.nn.Module"),_4.forEach(t),q2=i(Sg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Sg.forEach(t),P2=p(Tt),dm=s(Tt,"P",{});var k4=a(dm);A2=i(k4,"Finally, this model supports inherent JAX features such as:"),k4.forEach(t),O2=p(Tt),Zt=s(Tt,"UL",{});var xa=a(Zt);cm=s(xa,"LI",{});var v4=a(cm);Pl=s(v4,"A",{href:!0,rel:!0});var T4=a(Pl);L2=i(T4,"Just-In-Time (JIT) compilation"),T4.forEach(t),v4.forEach(t),N2=p(xa),pm=s(xa,"LI",{});var b4=a(pm);Al=s(b4,"A",{href:!0,rel:!0});var y4=a(Al);I2=i(y4,"Automatic Differentiation"),y4.forEach(t),b4.forEach(t),D2=p(xa),hm=s(xa,"LI",{});var E4=a(hm);Ol=s(E4,"A",{href:!0,rel:!0});var w4=a(Ol);S2=i(w4,"Vectorization"),w4.forEach(t),E4.forEach(t),W2=p(xa),mm=s(xa,"LI",{});var $4=a(mm);Ll=s($4,"A",{href:!0,rel:!0});var F4=a(Ll);U2=i(F4,"Parallelization"),F4.forEach(t),$4.forEach(t),xa.forEach(t),R2=p(Tt),Nt=s(Tt,"DIV",{class:!0});var Ma=a(Nt);y(Nl.$$.fragment,Ma),H2=p(Ma),gn=s(Ma,"P",{});var Oc=a(gn);B2=i(Oc,"The "),um=s(Oc,"CODE",{});var x4=a(um);Q2=i(x4,"FlaxElectraPreTrainedModel"),x4.forEach(t),V2=i(Oc," forward method, overrides the "),fm=s(Oc,"CODE",{});var M4=a(fm);K2=i(M4,"__call__"),M4.forEach(t),J2=i(Oc," special method."),Oc.forEach(t),G2=p(Ma),y(ea.$$.fragment,Ma),X2=p(Ma),y(ta.$$.fragment,Ma),Ma.forEach(t),Tt.forEach(t),Ef=p(o),_n=s(o,"H2",{class:!0});var Wg=a(_n);oa=s(Wg,"A",{id:!0,class:!0,href:!0});var z4=a(oa);gm=s(z4,"SPAN",{});var C4=a(gm);y(Il.$$.fragment,C4),C4.forEach(t),z4.forEach(t),Y2=p(Wg),_m=s(Wg,"SPAN",{});var j4=a(_m);Z2=i(j4,"FlaxElectraForTokenClassification"),j4.forEach(t),Wg.forEach(t),wf=p(o),Ae=s(o,"DIV",{class:!0});var Ze=a(Ae);y(Dl.$$.fragment,Ze),e0=p(Ze),km=s(Ze,"P",{});var q4=a(km);t0=i(q4,"Electra model with a token classification head on top."),q4.forEach(t),o0=p(Ze),vm=s(Ze,"P",{});var P4=a(vm);n0=i(P4,"Both the discriminator and generator may be loaded into this model."),P4.forEach(t),s0=p(Ze),Sl=s(Ze,"P",{});var Ug=a(Sl);a0=i(Ug,"This model inherits from "),pc=s(Ug,"A",{href:!0});var A4=a(pc);r0=i(A4,"FlaxPreTrainedModel"),A4.forEach(t),i0=i(Ug,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ug.forEach(t),l0=p(Ze),Wl=s(Ze,"P",{});var Rg=a(Wl);d0=i(Rg,`This model is also a Flax Linen
`),Ul=s(Rg,"A",{href:!0,rel:!0});var O4=a(Ul);c0=i(O4,"flax.nn.Module"),O4.forEach(t),p0=i(Rg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Rg.forEach(t),h0=p(Ze),Tm=s(Ze,"P",{});var L4=a(Tm);m0=i(L4,"Finally, this model supports inherent JAX features such as:"),L4.forEach(t),u0=p(Ze),eo=s(Ze,"UL",{});var za=a(eo);bm=s(za,"LI",{});var N4=a(bm);Rl=s(N4,"A",{href:!0,rel:!0});var I4=a(Rl);f0=i(I4,"Just-In-Time (JIT) compilation"),I4.forEach(t),N4.forEach(t),g0=p(za),ym=s(za,"LI",{});var D4=a(ym);Hl=s(D4,"A",{href:!0,rel:!0});var S4=a(Hl);_0=i(S4,"Automatic Differentiation"),S4.forEach(t),D4.forEach(t),k0=p(za),Em=s(za,"LI",{});var W4=a(Em);Bl=s(W4,"A",{href:!0,rel:!0});var U4=a(Bl);v0=i(U4,"Vectorization"),U4.forEach(t),W4.forEach(t),T0=p(za),wm=s(za,"LI",{});var R4=a(wm);Ql=s(R4,"A",{href:!0,rel:!0});var H4=a(Ql);b0=i(H4,"Parallelization"),H4.forEach(t),R4.forEach(t),za.forEach(t),y0=p(Ze),It=s(Ze,"DIV",{class:!0});var Ca=a(It);y(Vl.$$.fragment,Ca),E0=p(Ca),kn=s(Ca,"P",{});var Lc=a(kn);w0=i(Lc,"The "),$m=s(Lc,"CODE",{});var B4=a($m);$0=i(B4,"FlaxElectraPreTrainedModel"),B4.forEach(t),F0=i(Lc," forward method, overrides the "),Fm=s(Lc,"CODE",{});var Q4=a(Fm);x0=i(Q4,"__call__"),Q4.forEach(t),M0=i(Lc," special method."),Lc.forEach(t),z0=p(Ca),y(na.$$.fragment,Ca),C0=p(Ca),y(sa.$$.fragment,Ca),Ca.forEach(t),Ze.forEach(t),$f=p(o),vn=s(o,"H2",{class:!0});var Hg=a(vn);aa=s(Hg,"A",{id:!0,class:!0,href:!0});var V4=a(aa);xm=s(V4,"SPAN",{});var K4=a(xm);y(Kl.$$.fragment,K4),K4.forEach(t),V4.forEach(t),j0=p(Hg),Mm=s(Hg,"SPAN",{});var J4=a(Mm);q0=i(J4,"FlaxElectraForQuestionAnswering"),J4.forEach(t),Hg.forEach(t),Ff=p(o),Re=s(o,"DIV",{class:!0});var bt=a(Re);y(Jl.$$.fragment,bt),P0=p(bt),Tn=s(bt,"P",{});var Nc=a(Tn);A0=i(Nc,`ELECTRA Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),zm=s(Nc,"CODE",{});var G4=a(zm);O0=i(G4,"span start logits"),G4.forEach(t),L0=i(Nc," and "),Cm=s(Nc,"CODE",{});var X4=a(Cm);N0=i(X4,"span end logits"),X4.forEach(t),I0=i(Nc,")."),Nc.forEach(t),D0=p(bt),Gl=s(bt,"P",{});var Bg=a(Gl);S0=i(Bg,"This model inherits from "),hc=s(Bg,"A",{href:!0});var Y4=a(hc);W0=i(Y4,"FlaxPreTrainedModel"),Y4.forEach(t),U0=i(Bg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Bg.forEach(t),R0=p(bt),Xl=s(bt,"P",{});var Qg=a(Xl);H0=i(Qg,`This model is also a Flax Linen
`),Yl=s(Qg,"A",{href:!0,rel:!0});var Z4=a(Yl);B0=i(Z4,"flax.nn.Module"),Z4.forEach(t),Q0=i(Qg,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Qg.forEach(t),V0=p(bt),jm=s(bt,"P",{});var eC=a(jm);K0=i(eC,"Finally, this model supports inherent JAX features such as:"),eC.forEach(t),J0=p(bt),to=s(bt,"UL",{});var ja=a(to);qm=s(ja,"LI",{});var tC=a(qm);Zl=s(tC,"A",{href:!0,rel:!0});var oC=a(Zl);G0=i(oC,"Just-In-Time (JIT) compilation"),oC.forEach(t),tC.forEach(t),X0=p(ja),Pm=s(ja,"LI",{});var nC=a(Pm);ed=s(nC,"A",{href:!0,rel:!0});var sC=a(ed);Y0=i(sC,"Automatic Differentiation"),sC.forEach(t),nC.forEach(t),Z0=p(ja),Am=s(ja,"LI",{});var aC=a(Am);td=s(aC,"A",{href:!0,rel:!0});var rC=a(td);eF=i(rC,"Vectorization"),rC.forEach(t),aC.forEach(t),tF=p(ja),Om=s(ja,"LI",{});var iC=a(Om);od=s(iC,"A",{href:!0,rel:!0});var lC=a(od);oF=i(lC,"Parallelization"),lC.forEach(t),iC.forEach(t),ja.forEach(t),nF=p(bt),Dt=s(bt,"DIV",{class:!0});var qa=a(Dt);y(nd.$$.fragment,qa),sF=p(qa),bn=s(qa,"P",{});var Ic=a(bn);aF=i(Ic,"The "),Lm=s(Ic,"CODE",{});var dC=a(Lm);rF=i(dC,"FlaxElectraPreTrainedModel"),dC.forEach(t),iF=i(Ic," forward method, overrides the "),Nm=s(Ic,"CODE",{});var cC=a(Nm);lF=i(cC,"__call__"),cC.forEach(t),dF=i(Ic," special method."),Ic.forEach(t),cF=p(qa),y(ra.$$.fragment,qa),pF=p(qa),y(ia.$$.fragment,qa),qa.forEach(t),bt.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(xj)),f(m,"id","electra"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#electra"),f(h,"class","relative group"),f(ee,"id","overview"),f(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ee,"href","#overview"),f(C,"class","relative group"),f(ne,"href","https://openreview.net/pdf?id=r1xMH1BtvB"),f(ne,"rel","nofollow"),f(se,"href","https://github.com/google-research/electra"),f(se,"rel","nofollow"),f(T,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraForMaskedLM"),f(Fe,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraForPreTraining"),f(A,"href","https://huggingface.co/lysandre"),f(A,"rel","nofollow"),f($e,"href","https://github.com/google-research/electra"),f($e,"rel","nofollow"),f(Ee,"id","transformers.ElectraConfig"),f(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ee,"href","#transformers.ElectraConfig"),f(Z,"class","relative group"),f(_d,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraModel"),f(kd,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.TFElectraModel"),f(Oa,"href","https://huggingface.co/google/electra-small-discriminator"),f(Oa,"rel","nofollow"),f(vd,"href","/docs/transformers/pr_17101/en/main_classes/configuration#transformers.PretrainedConfig"),f(Td,"href","/docs/transformers/pr_17101/en/main_classes/configuration#transformers.PretrainedConfig"),f(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($n,"id","transformers.ElectraTokenizer"),f($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($n,"href","#transformers.ElectraTokenizer"),f(bo,"class","relative group"),f(bd,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizer"),f(yd,"href","/docs/transformers/pr_17101/en/model_doc/bert#transformers.BertTokenizer"),f(Ed,"href","/docs/transformers/pr_17101/en/model_doc/bert#transformers.BertTokenizer"),f(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xn,"id","transformers.ElectraTokenizerFast"),f(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xn,"href","#transformers.ElectraTokenizerFast"),f(yo,"class","relative group"),f(wd,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraTokenizerFast"),f($d,"href","/docs/transformers/pr_17101/en/model_doc/bert#transformers.BertTokenizerFast"),f(Fd,"href","/docs/transformers/pr_17101/en/model_doc/bert#transformers.BertTokenizerFast"),f(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(zn,"id","transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),f(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(zn,"href","#transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput"),f(Eo,"class","relative group"),f(xd,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraForPreTraining"),f(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Md,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.TFElectraForPreTraining"),f($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Cn,"id","transformers.ElectraModel"),f(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Cn,"href","#transformers.ElectraModel"),f(Fo,"class","relative group"),f(zd,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel"),f(Ya,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ya,"rel","nofollow"),f(Cd,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraModel"),f($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pn,"id","transformers.ElectraForPreTraining"),f(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Pn,"href","#transformers.ElectraForPreTraining"),f(Mo,"class","relative group"),f(jd,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel"),f(sr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(sr,"rel","nofollow"),f(qd,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraForPreTraining"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ln,"id","transformers.ElectraForCausalLM"),f(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ln,"href","#transformers.ElectraForCausalLM"),f(Co,"class","relative group"),f(Pd,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel"),f(pr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(pr,"rel","nofollow"),f(Ad,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraForCausalLM"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Dn,"id","transformers.ElectraForMaskedLM"),f(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Dn,"href","#transformers.ElectraForMaskedLM"),f(qo,"class","relative group"),f(Od,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel"),f(_r,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(_r,"rel","nofollow"),f(Ld,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraForMaskedLM"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Rn,"id","transformers.ElectraForSequenceClassification"),f(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Rn,"href","#transformers.ElectraForSequenceClassification"),f(Ao,"class","relative group"),f(Nd,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel"),f(Er,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Er,"rel","nofollow"),f(Id,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraForSequenceClassification"),f(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jn,"id","transformers.ElectraForMultipleChoice"),f(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jn,"href","#transformers.ElectraForMultipleChoice"),f(Lo,"class","relative group"),f(Dd,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel"),f(zr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(zr,"rel","nofollow"),f(Sd,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraForMultipleChoice"),f(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Yn,"id","transformers.ElectraForTokenClassification"),f(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Yn,"href","#transformers.ElectraForTokenClassification"),f(Io,"class","relative group"),f(Wd,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel"),f(Or,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Or,"rel","nofollow"),f(Ud,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraForTokenClassification"),f(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(os,"id","transformers.ElectraForQuestionAnswering"),f(os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(os,"href","#transformers.ElectraForQuestionAnswering"),f(So,"class","relative group"),f(Rd,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.PreTrainedModel"),f(Wr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Wr,"rel","nofollow"),f(Hd,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.ElectraForQuestionAnswering"),f(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rs,"id","transformers.TFElectraModel"),f(rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(rs,"href","#transformers.TFElectraModel"),f(Ro,"class","relative group"),f(Bd,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.TFPreTrainedModel"),f(Vr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Vr,"rel","nofollow"),f(Qd,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.TFElectraModel"),f(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(cs,"id","transformers.TFElectraForPreTraining"),f(cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(cs,"href","#transformers.TFElectraForPreTraining"),f(Bo,"class","relative group"),f(Vd,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.TFPreTrainedModel"),f(Zr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Zr,"rel","nofollow"),f(Kd,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.TFElectraForPreTraining"),f(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(us,"id","transformers.TFElectraForMaskedLM"),f(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(us,"href","#transformers.TFElectraForMaskedLM"),f(Vo,"class","relative group"),f(Jd,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.TFPreTrainedModel"),f(ai,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ai,"rel","nofollow"),f(Gd,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.TFElectraForMaskedLM"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(vs,"id","transformers.TFElectraForSequenceClassification"),f(vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(vs,"href","#transformers.TFElectraForSequenceClassification"),f(Jo,"class","relative group"),f(Xd,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.TFPreTrainedModel"),f(pi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(pi,"rel","nofollow"),f(Yd,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.TFElectraForSequenceClassification"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ws,"id","transformers.TFElectraForMultipleChoice"),f(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ws,"href","#transformers.TFElectraForMultipleChoice"),f(Xo,"class","relative group"),f(Zd,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.TFPreTrainedModel"),f(_i,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(_i,"rel","nofollow"),f(ec,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.TFElectraForMultipleChoice"),f(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ms,"id","transformers.TFElectraForTokenClassification"),f(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ms,"href","#transformers.TFElectraForTokenClassification"),f(Zo,"class","relative group"),f(tc,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ei,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ei,"rel","nofollow"),f(oc,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.TFElectraForTokenClassification"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ps,"id","transformers.TFElectraForQuestionAnswering"),f(Ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ps,"href","#transformers.TFElectraForQuestionAnswering"),f(tn,"class","relative group"),f(nc,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.TFPreTrainedModel"),f(zi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(zi,"rel","nofollow"),f(sc,"href","/docs/transformers/pr_17101/en/model_doc/electra#transformers.TFElectraForQuestionAnswering"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Is,"id","transformers.FlaxElectraModel"),f(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Is,"href","#transformers.FlaxElectraModel"),f(sn,"class","relative group"),f(ac,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Oi,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Oi,"rel","nofollow"),f(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Li,"rel","nofollow"),f(Ni,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ni,"rel","nofollow"),f(Ii,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ii,"rel","nofollow"),f(Di,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Di,"rel","nofollow"),f(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ws,"id","transformers.FlaxElectraForPreTraining"),f(Ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ws,"href","#transformers.FlaxElectraForPreTraining"),f(rn,"class","relative group"),f(rc,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Bi,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Bi,"rel","nofollow"),f(Qi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Qi,"rel","nofollow"),f(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Vi,"rel","nofollow"),f(Ki,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ki,"rel","nofollow"),f(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ji,"rel","nofollow"),f(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Hs,"id","transformers.FlaxElectraForCausalLM"),f(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Hs,"href","#transformers.FlaxElectraForCausalLM"),f(dn,"class","relative group"),f(ic,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(tl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(tl,"rel","nofollow"),f(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ol,"rel","nofollow"),f(nl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(nl,"rel","nofollow"),f(sl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(sl,"rel","nofollow"),f(al,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(al,"rel","nofollow"),f(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Vs,"id","transformers.FlaxElectraForMaskedLM"),f(Vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Vs,"href","#transformers.FlaxElectraForMaskedLM"),f(pn,"class","relative group"),f(lc,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(hl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(hl,"rel","nofollow"),f(ml,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ml,"rel","nofollow"),f(ul,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ul,"rel","nofollow"),f(fl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(fl,"rel","nofollow"),f(gl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(gl,"rel","nofollow"),f(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Gs,"id","transformers.FlaxElectraForSequenceClassification"),f(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Gs,"href","#transformers.FlaxElectraForSequenceClassification"),f(mn,"class","relative group"),f(dc,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(yl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(yl,"rel","nofollow"),f(El,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(El,"rel","nofollow"),f(wl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(wl,"rel","nofollow"),f($l,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f($l,"rel","nofollow"),f(Fl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Fl,"rel","nofollow"),f(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Zs,"id","transformers.FlaxElectraForMultipleChoice"),f(Zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Zs,"href","#transformers.FlaxElectraForMultipleChoice"),f(fn,"class","relative group"),f(cc,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(ql,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(ql,"rel","nofollow"),f(Pl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Pl,"rel","nofollow"),f(Al,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Al,"rel","nofollow"),f(Ol,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ol,"rel","nofollow"),f(Ll,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ll,"rel","nofollow"),f(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(oa,"id","transformers.FlaxElectraForTokenClassification"),f(oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(oa,"href","#transformers.FlaxElectraForTokenClassification"),f(_n,"class","relative group"),f(pc,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ul,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Ul,"rel","nofollow"),f(Rl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Rl,"rel","nofollow"),f(Hl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Hl,"rel","nofollow"),f(Bl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Bl,"rel","nofollow"),f(Ql,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ql,"rel","nofollow"),f(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(aa,"id","transformers.FlaxElectraForQuestionAnswering"),f(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(aa,"href","#transformers.FlaxElectraForQuestionAnswering"),f(vn,"class","relative group"),f(hc,"href","/docs/transformers/pr_17101/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Yl,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Yl,"rel","nofollow"),f(Zl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Zl,"rel","nofollow"),f(ed,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ed,"rel","nofollow"),f(td,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(td,"rel","nofollow"),f(od,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(od,"rel","nofollow"),f(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,v){e(document.head,d),k(o,g,v),k(o,h,v),e(h,m),e(m,_),E(l,_,null),e(h,u),e(h,M),e(M,ue),k(o,J,v),k(o,C,v),e(C,ee),e(ee,D),E(oe,D,null),e(C,fe),e(C,S),e(S,ge),k(o,pe,v),k(o,K,v),e(K,O),e(K,ne),e(ne,X),e(K,j),k(o,P,v),k(o,ae,v),e(ae,R),k(o,he,v),k(o,re,v),e(re,W),e(W,_e),k(o,me,v),k(o,q,v),e(q,ke),k(o,U,v),k(o,te,v),e(te,ce),e(ce,H),e(te,ve),e(te,G),e(G,L),e(G,se),e(se,B),e(G,Te),e(G,T),e(T,z),e(G,Y),e(G,Fe),e(Fe,ze),e(G,N),k(o,xe,v),k(o,be,v),e(be,Ce),e(be,A),e(A,Q),e(be,je),e(be,$e),e($e,V),e(be,qe),k(o,Me,v),k(o,Z,v),e(Z,Ee),e(Ee,Dc),E(Pa,Dc,null),e(Z,Vg),e(Z,Sc),e(Sc,Kg),k(o,Fu,v),k(o,yt,v),E(Aa,yt,null),e(yt,Jg),e(yt,Vt),e(Vt,Gg),e(Vt,_d),e(_d,Xg),e(Vt,Yg),e(Vt,kd),e(kd,Zg),e(Vt,e_),e(Vt,Oa),e(Oa,t_),e(Vt,o_),e(yt,n_),e(yt,To),e(To,s_),e(To,vd),e(vd,a_),e(To,r_),e(To,Td),e(Td,i_),e(To,l_),e(yt,d_),E(wn,yt,null),k(o,xu,v),k(o,bo,v),e(bo,$n),e($n,Wc),E(La,Wc,null),e(bo,c_),e(bo,Uc),e(Uc,p_),k(o,Mu,v),k(o,Et,v),E(Na,Et,null),e(Et,h_),e(Et,Rc),e(Rc,m_),e(Et,u_),e(Et,Fn),e(Fn,bd),e(bd,f_),e(Fn,g_),e(Fn,yd),e(yd,__),e(Fn,k_),e(Et,v_),e(Et,Ia),e(Ia,T_),e(Ia,Ed),e(Ed,b_),e(Ia,y_),k(o,zu,v),k(o,yo,v),e(yo,xn),e(xn,Hc),E(Da,Hc,null),e(yo,E_),e(yo,Bc),e(Bc,w_),k(o,Cu,v),k(o,wt,v),E(Sa,wt,null),e(wt,$_),e(wt,Wa),e(Wa,F_),e(Wa,Qc),e(Qc,x_),e(Wa,M_),e(wt,z_),e(wt,Mn),e(Mn,wd),e(wd,C_),e(Mn,j_),e(Mn,$d),e($d,q_),e(Mn,P_),e(wt,A_),e(wt,Ua),e(Ua,O_),e(Ua,Fd),e(Fd,L_),e(Ua,N_),k(o,ju,v),k(o,Eo,v),e(Eo,zn),e(zn,Vc),E(Ra,Vc,null),e(Eo,I_),e(Eo,Kc),e(Kc,D_),k(o,qu,v),k(o,wo,v),E(Ha,wo,null),e(wo,S_),e(wo,Ba),e(Ba,W_),e(Ba,xd),e(xd,U_),e(Ba,R_),k(o,Pu,v),k(o,$o,v),E(Qa,$o,null),e($o,H_),e($o,Va),e(Va,B_),e(Va,Md),e(Md,Q_),e(Va,V_),k(o,Au,v),k(o,Fo,v),e(Fo,Cn),e(Cn,Jc),E(Ka,Jc,null),e(Fo,K_),e(Fo,Gc),e(Gc,J_),k(o,Ou,v),k(o,et,v),E(Ja,et,null),e(et,G_),e(et,Xc),e(Xc,X_),e(et,Y_),e(et,Ga),e(Ga,Z_),e(Ga,zd),e(zd,e1),e(Ga,t1),e(et,o1),e(et,Xa),e(Xa,n1),e(Xa,Ya),e(Ya,s1),e(Xa,a1),e(et,r1),e(et,$t),E(Za,$t,null),e($t,i1),e($t,xo),e(xo,l1),e(xo,Cd),e(Cd,d1),e(xo,c1),e(xo,Yc),e(Yc,p1),e(xo,h1),e($t,m1),E(jn,$t,null),e($t,u1),E(qn,$t,null),k(o,Lu,v),k(o,Mo,v),e(Mo,Pn),e(Pn,Zc),E(er,Zc,null),e(Mo,f1),e(Mo,ep),e(ep,g1),k(o,Nu,v),k(o,Be,v),E(tr,Be,null),e(Be,_1),e(Be,tp),e(tp,k1),e(Be,v1),e(Be,op),e(op,T1),e(Be,b1),e(Be,or),e(or,y1),e(or,jd),e(jd,E1),e(or,w1),e(Be,$1),e(Be,nr),e(nr,F1),e(nr,sr),e(sr,x1),e(nr,M1),e(Be,z1),e(Be,Ft),E(ar,Ft,null),e(Ft,C1),e(Ft,zo),e(zo,j1),e(zo,qd),e(qd,q1),e(zo,P1),e(zo,np),e(np,A1),e(zo,O1),e(Ft,L1),E(An,Ft,null),e(Ft,N1),E(On,Ft,null),k(o,Iu,v),k(o,Co,v),e(Co,Ln),e(Ln,sp),E(rr,sp,null),e(Co,I1),e(Co,ap),e(ap,D1),k(o,Du,v),k(o,tt,v),E(ir,tt,null),e(tt,S1),e(tt,lr),e(lr,W1),e(lr,rp),e(rp,U1),e(lr,R1),e(tt,H1),e(tt,dr),e(dr,B1),e(dr,Pd),e(Pd,Q1),e(dr,V1),e(tt,K1),e(tt,cr),e(cr,J1),e(cr,pr),e(pr,G1),e(cr,X1),e(tt,Y1),e(tt,xt),E(hr,xt,null),e(xt,Z1),e(xt,jo),e(jo,ek),e(jo,Ad),e(Ad,tk),e(jo,ok),e(jo,ip),e(ip,nk),e(jo,sk),e(xt,ak),E(Nn,xt,null),e(xt,rk),E(In,xt,null),k(o,Su,v),k(o,qo,v),e(qo,Dn),e(Dn,lp),E(mr,lp,null),e(qo,ik),e(qo,dp),e(dp,lk),k(o,Wu,v),k(o,Qe,v),E(ur,Qe,null),e(Qe,dk),e(Qe,cp),e(cp,ck),e(Qe,pk),e(Qe,pp),e(pp,hk),e(Qe,mk),e(Qe,fr),e(fr,uk),e(fr,Od),e(Od,fk),e(fr,gk),e(Qe,_k),e(Qe,gr),e(gr,kk),e(gr,_r),e(_r,vk),e(gr,Tk),e(Qe,bk),e(Qe,at),E(kr,at,null),e(at,yk),e(at,Po),e(Po,Ek),e(Po,Ld),e(Ld,wk),e(Po,$k),e(Po,hp),e(hp,Fk),e(Po,xk),e(at,Mk),E(Sn,at,null),e(at,zk),E(Wn,at,null),e(at,Ck),E(Un,at,null),k(o,Uu,v),k(o,Ao,v),e(Ao,Rn),e(Rn,mp),E(vr,mp,null),e(Ao,jk),e(Ao,up),e(up,qk),k(o,Ru,v),k(o,ot,v),E(Tr,ot,null),e(ot,Pk),e(ot,fp),e(fp,Ak),e(ot,Ok),e(ot,br),e(br,Lk),e(br,Nd),e(Nd,Nk),e(br,Ik),e(ot,Dk),e(ot,yr),e(yr,Sk),e(yr,Er),e(Er,Wk),e(yr,Uk),e(ot,Rk),e(ot,He),E(wr,He,null),e(He,Hk),e(He,Oo),e(Oo,Bk),e(Oo,Id),e(Id,Qk),e(Oo,Vk),e(Oo,gp),e(gp,Kk),e(Oo,Jk),e(He,Gk),E(Hn,He,null),e(He,Xk),E(Bn,He,null),e(He,Yk),E(Qn,He,null),e(He,Zk),E(Vn,He,null),e(He,ev),E(Kn,He,null),k(o,Hu,v),k(o,Lo,v),e(Lo,Jn),e(Jn,_p),E($r,_p,null),e(Lo,tv),e(Lo,kp),e(kp,ov),k(o,Bu,v),k(o,nt,v),E(Fr,nt,null),e(nt,nv),e(nt,vp),e(vp,sv),e(nt,av),e(nt,xr),e(xr,rv),e(xr,Dd),e(Dd,iv),e(xr,lv),e(nt,dv),e(nt,Mr),e(Mr,cv),e(Mr,zr),e(zr,pv),e(Mr,hv),e(nt,mv),e(nt,Mt),E(Cr,Mt,null),e(Mt,uv),e(Mt,No),e(No,fv),e(No,Sd),e(Sd,gv),e(No,_v),e(No,Tp),e(Tp,kv),e(No,vv),e(Mt,Tv),E(Gn,Mt,null),e(Mt,bv),E(Xn,Mt,null),k(o,Qu,v),k(o,Io,v),e(Io,Yn),e(Yn,bp),E(jr,bp,null),e(Io,yv),e(Io,yp),e(yp,Ev),k(o,Vu,v),k(o,Ve,v),E(qr,Ve,null),e(Ve,wv),e(Ve,Ep),e(Ep,$v),e(Ve,Fv),e(Ve,wp),e(wp,xv),e(Ve,Mv),e(Ve,Pr),e(Pr,zv),e(Pr,Wd),e(Wd,Cv),e(Pr,jv),e(Ve,qv),e(Ve,Ar),e(Ar,Pv),e(Ar,Or),e(Or,Av),e(Ar,Ov),e(Ve,Lv),e(Ve,rt),E(Lr,rt,null),e(rt,Nv),e(rt,Do),e(Do,Iv),e(Do,Ud),e(Ud,Dv),e(Do,Sv),e(Do,$p),e($p,Wv),e(Do,Uv),e(rt,Rv),E(Zn,rt,null),e(rt,Hv),E(es,rt,null),e(rt,Bv),E(ts,rt,null),k(o,Ku,v),k(o,So,v),e(So,os),e(os,Fp),E(Nr,Fp,null),e(So,Qv),e(So,xp),e(xp,Vv),k(o,Ju,v),k(o,st,v),E(Ir,st,null),e(st,Kv),e(st,Wo),e(Wo,Jv),e(Wo,Mp),e(Mp,Gv),e(Wo,Xv),e(Wo,zp),e(zp,Yv),e(Wo,Zv),e(st,eT),e(st,Dr),e(Dr,tT),e(Dr,Rd),e(Rd,oT),e(Dr,nT),e(st,sT),e(st,Sr),e(Sr,aT),e(Sr,Wr),e(Wr,rT),e(Sr,iT),e(st,lT),e(st,it),E(Ur,it,null),e(it,dT),e(it,Uo),e(Uo,cT),e(Uo,Hd),e(Hd,pT),e(Uo,hT),e(Uo,Cp),e(Cp,mT),e(Uo,uT),e(it,fT),E(ns,it,null),e(it,gT),E(ss,it,null),e(it,_T),E(as,it,null),k(o,Gu,v),k(o,Ro,v),e(Ro,rs),e(rs,jp),E(Rr,jp,null),e(Ro,kT),e(Ro,qp),e(qp,vT),k(o,Xu,v),k(o,Ke,v),E(Hr,Ke,null),e(Ke,TT),e(Ke,Pp),e(Pp,bT),e(Ke,yT),e(Ke,Br),e(Br,ET),e(Br,Bd),e(Bd,wT),e(Br,$T),e(Ke,FT),e(Ke,Qr),e(Qr,xT),e(Qr,Vr),e(Vr,MT),e(Qr,zT),e(Ke,CT),E(is,Ke,null),e(Ke,jT),e(Ke,zt),E(Kr,zt,null),e(zt,qT),e(zt,Ho),e(Ho,PT),e(Ho,Qd),e(Qd,AT),e(Ho,OT),e(Ho,Ap),e(Ap,LT),e(Ho,NT),e(zt,IT),E(ls,zt,null),e(zt,DT),E(ds,zt,null),k(o,Yu,v),k(o,Bo,v),e(Bo,cs),e(cs,Op),E(Jr,Op,null),e(Bo,ST),e(Bo,Lp),e(Lp,WT),k(o,Zu,v),k(o,Oe,v),E(Gr,Oe,null),e(Oe,UT),e(Oe,Np),e(Np,RT),e(Oe,HT),e(Oe,Ip),e(Ip,BT),e(Oe,QT),e(Oe,Xr),e(Xr,VT),e(Xr,Vd),e(Vd,KT),e(Xr,JT),e(Oe,GT),e(Oe,Yr),e(Yr,XT),e(Yr,Zr),e(Zr,YT),e(Yr,ZT),e(Oe,eb),E(ps,Oe,null),e(Oe,tb),e(Oe,Ct),E(ei,Ct,null),e(Ct,ob),e(Ct,Qo),e(Qo,nb),e(Qo,Kd),e(Kd,sb),e(Qo,ab),e(Qo,Dp),e(Dp,rb),e(Qo,ib),e(Ct,lb),E(hs,Ct,null),e(Ct,db),E(ms,Ct,null),k(o,ef,v),k(o,Vo,v),e(Vo,us),e(us,Sp),E(ti,Sp,null),e(Vo,cb),e(Vo,Wp),e(Wp,pb),k(o,tf,v),k(o,Le,v),E(oi,Le,null),e(Le,hb),e(Le,Up),e(Up,mb),e(Le,ub),e(Le,Rp),e(Rp,fb),e(Le,gb),e(Le,ni),e(ni,_b),e(ni,Jd),e(Jd,kb),e(ni,vb),e(Le,Tb),e(Le,si),e(si,bb),e(si,ai),e(ai,yb),e(si,Eb),e(Le,wb),E(fs,Le,null),e(Le,$b),e(Le,lt),E(ri,lt,null),e(lt,Fb),e(lt,Ko),e(Ko,xb),e(Ko,Gd),e(Gd,Mb),e(Ko,zb),e(Ko,Hp),e(Hp,Cb),e(Ko,jb),e(lt,qb),E(gs,lt,null),e(lt,Pb),E(_s,lt,null),e(lt,Ab),E(ks,lt,null),k(o,of,v),k(o,Jo,v),e(Jo,vs),e(vs,Bp),E(ii,Bp,null),e(Jo,Ob),e(Jo,Qp),e(Qp,Lb),k(o,nf,v),k(o,Je,v),E(li,Je,null),e(Je,Nb),e(Je,Vp),e(Vp,Ib),e(Je,Db),e(Je,di),e(di,Sb),e(di,Xd),e(Xd,Wb),e(di,Ub),e(Je,Rb),e(Je,ci),e(ci,Hb),e(ci,pi),e(pi,Bb),e(ci,Qb),e(Je,Vb),E(Ts,Je,null),e(Je,Kb),e(Je,dt),E(hi,dt,null),e(dt,Jb),e(dt,Go),e(Go,Gb),e(Go,Yd),e(Yd,Xb),e(Go,Yb),e(Go,Kp),e(Kp,Zb),e(Go,ey),e(dt,ty),E(bs,dt,null),e(dt,oy),E(ys,dt,null),e(dt,ny),E(Es,dt,null),k(o,sf,v),k(o,Xo,v),e(Xo,ws),e(ws,Jp),E(mi,Jp,null),e(Xo,sy),e(Xo,Gp),e(Gp,ay),k(o,af,v),k(o,Ge,v),E(ui,Ge,null),e(Ge,ry),e(Ge,Xp),e(Xp,iy),e(Ge,ly),e(Ge,fi),e(fi,dy),e(fi,Zd),e(Zd,cy),e(fi,py),e(Ge,hy),e(Ge,gi),e(gi,my),e(gi,_i),e(_i,uy),e(gi,fy),e(Ge,gy),E($s,Ge,null),e(Ge,_y),e(Ge,jt),E(ki,jt,null),e(jt,ky),e(jt,Yo),e(Yo,vy),e(Yo,ec),e(ec,Ty),e(Yo,by),e(Yo,Yp),e(Yp,yy),e(Yo,Ey),e(jt,wy),E(Fs,jt,null),e(jt,$y),E(xs,jt,null),k(o,rf,v),k(o,Zo,v),e(Zo,Ms),e(Ms,Zp),E(vi,Zp,null),e(Zo,Fy),e(Zo,eh),e(eh,xy),k(o,lf,v),k(o,Ne,v),E(Ti,Ne,null),e(Ne,My),e(Ne,th),e(th,zy),e(Ne,Cy),e(Ne,oh),e(oh,jy),e(Ne,qy),e(Ne,bi),e(bi,Py),e(bi,tc),e(tc,Ay),e(bi,Oy),e(Ne,Ly),e(Ne,yi),e(yi,Ny),e(yi,Ei),e(Ei,Iy),e(yi,Dy),e(Ne,Sy),E(zs,Ne,null),e(Ne,Wy),e(Ne,ct),E(wi,ct,null),e(ct,Uy),e(ct,en),e(en,Ry),e(en,oc),e(oc,Hy),e(en,By),e(en,nh),e(nh,Qy),e(en,Vy),e(ct,Ky),E(Cs,ct,null),e(ct,Jy),E(js,ct,null),e(ct,Gy),E(qs,ct,null),k(o,df,v),k(o,tn,v),e(tn,Ps),e(Ps,sh),E($i,sh,null),e(tn,Xy),e(tn,ah),e(ah,Yy),k(o,cf,v),k(o,Xe,v),E(Fi,Xe,null),e(Xe,Zy),e(Xe,on),e(on,eE),e(on,rh),e(rh,tE),e(on,oE),e(on,ih),e(ih,nE),e(on,sE),e(Xe,aE),e(Xe,xi),e(xi,rE),e(xi,nc),e(nc,iE),e(xi,lE),e(Xe,dE),e(Xe,Mi),e(Mi,cE),e(Mi,zi),e(zi,pE),e(Mi,hE),e(Xe,mE),E(As,Xe,null),e(Xe,uE),e(Xe,pt),E(Ci,pt,null),e(pt,fE),e(pt,nn),e(nn,gE),e(nn,sc),e(sc,_E),e(nn,kE),e(nn,lh),e(lh,vE),e(nn,TE),e(pt,bE),E(Os,pt,null),e(pt,yE),E(Ls,pt,null),e(pt,EE),E(Ns,pt,null),k(o,pf,v),k(o,sn,v),e(sn,Is),e(Is,dh),E(ji,dh,null),e(sn,wE),e(sn,ch),e(ch,$E),k(o,hf,v),k(o,Ie,v),E(qi,Ie,null),e(Ie,FE),e(Ie,ph),e(ph,xE),e(Ie,ME),e(Ie,Pi),e(Pi,zE),e(Pi,ac),e(ac,CE),e(Pi,jE),e(Ie,qE),e(Ie,Ai),e(Ai,PE),e(Ai,Oi),e(Oi,AE),e(Ai,OE),e(Ie,LE),e(Ie,hh),e(hh,NE),e(Ie,IE),e(Ie,Kt),e(Kt,mh),e(mh,Li),e(Li,DE),e(Kt,SE),e(Kt,uh),e(uh,Ni),e(Ni,WE),e(Kt,UE),e(Kt,fh),e(fh,Ii),e(Ii,RE),e(Kt,HE),e(Kt,gh),e(gh,Di),e(Di,BE),e(Ie,QE),e(Ie,qt),E(Si,qt,null),e(qt,VE),e(qt,an),e(an,KE),e(an,_h),e(_h,JE),e(an,GE),e(an,kh),e(kh,XE),e(an,YE),e(qt,ZE),E(Ds,qt,null),e(qt,ew),E(Ss,qt,null),k(o,mf,v),k(o,rn,v),e(rn,Ws),e(Ws,vh),E(Wi,vh,null),e(rn,tw),e(rn,Th),e(Th,ow),k(o,uf,v),k(o,Pe,v),E(Ui,Pe,null),e(Pe,nw),e(Pe,bh),e(bh,sw),e(Pe,aw),e(Pe,yh),e(yh,rw),e(Pe,iw),e(Pe,Ri),e(Ri,lw),e(Ri,rc),e(rc,dw),e(Ri,cw),e(Pe,pw),e(Pe,Hi),e(Hi,hw),e(Hi,Bi),e(Bi,mw),e(Hi,uw),e(Pe,fw),e(Pe,Eh),e(Eh,gw),e(Pe,_w),e(Pe,Jt),e(Jt,wh),e(wh,Qi),e(Qi,kw),e(Jt,vw),e(Jt,$h),e($h,Vi),e(Vi,Tw),e(Jt,bw),e(Jt,Fh),e(Fh,Ki),e(Ki,yw),e(Jt,Ew),e(Jt,xh),e(xh,Ji),e(Ji,ww),e(Pe,$w),e(Pe,Pt),E(Gi,Pt,null),e(Pt,Fw),e(Pt,ln),e(ln,xw),e(ln,Mh),e(Mh,Mw),e(ln,zw),e(ln,zh),e(zh,Cw),e(ln,jw),e(Pt,qw),E(Us,Pt,null),e(Pt,Pw),E(Rs,Pt,null),k(o,ff,v),k(o,dn,v),e(dn,Hs),e(Hs,Ch),E(Xi,Ch,null),e(dn,Aw),e(dn,jh),e(jh,Ow),k(o,gf,v),k(o,De,v),E(Yi,De,null),e(De,Lw),e(De,qh),e(qh,Nw),e(De,Iw),e(De,Zi),e(Zi,Dw),e(Zi,ic),e(ic,Sw),e(Zi,Ww),e(De,Uw),e(De,el),e(el,Rw),e(el,tl),e(tl,Hw),e(el,Bw),e(De,Qw),e(De,Ph),e(Ph,Vw),e(De,Kw),e(De,Gt),e(Gt,Ah),e(Ah,ol),e(ol,Jw),e(Gt,Gw),e(Gt,Oh),e(Oh,nl),e(nl,Xw),e(Gt,Yw),e(Gt,Lh),e(Lh,sl),e(sl,Zw),e(Gt,e$),e(Gt,Nh),e(Nh,al),e(al,t$),e(De,o$),e(De,At),E(rl,At,null),e(At,n$),e(At,cn),e(cn,s$),e(cn,Ih),e(Ih,a$),e(cn,r$),e(cn,Dh),e(Dh,i$),e(cn,l$),e(At,d$),E(Bs,At,null),e(At,c$),E(Qs,At,null),k(o,_f,v),k(o,pn,v),e(pn,Vs),e(Vs,Sh),E(il,Sh,null),e(pn,p$),e(pn,Wh),e(Wh,h$),k(o,kf,v),k(o,Se,v),E(ll,Se,null),e(Se,m$),e(Se,dl),e(dl,u$),e(dl,Uh),e(Uh,f$),e(dl,g$),e(Se,_$),e(Se,cl),e(cl,k$),e(cl,lc),e(lc,v$),e(cl,T$),e(Se,b$),e(Se,pl),e(pl,y$),e(pl,hl),e(hl,E$),e(pl,w$),e(Se,$$),e(Se,Rh),e(Rh,F$),e(Se,x$),e(Se,Xt),e(Xt,Hh),e(Hh,ml),e(ml,M$),e(Xt,z$),e(Xt,Bh),e(Bh,ul),e(ul,C$),e(Xt,j$),e(Xt,Qh),e(Qh,fl),e(fl,q$),e(Xt,P$),e(Xt,Vh),e(Vh,gl),e(gl,A$),e(Se,O$),e(Se,Ot),E(_l,Ot,null),e(Ot,L$),e(Ot,hn),e(hn,N$),e(hn,Kh),e(Kh,I$),e(hn,D$),e(hn,Jh),e(Jh,S$),e(hn,W$),e(Ot,U$),E(Ks,Ot,null),e(Ot,R$),E(Js,Ot,null),k(o,vf,v),k(o,mn,v),e(mn,Gs),e(Gs,Gh),E(kl,Gh,null),e(mn,H$),e(mn,Xh),e(Xh,B$),k(o,Tf,v),k(o,We,v),E(vl,We,null),e(We,Q$),e(We,Yh),e(Yh,V$),e(We,K$),e(We,Tl),e(Tl,J$),e(Tl,dc),e(dc,G$),e(Tl,X$),e(We,Y$),e(We,bl),e(bl,Z$),e(bl,yl),e(yl,e2),e(bl,t2),e(We,o2),e(We,Zh),e(Zh,n2),e(We,s2),e(We,Yt),e(Yt,em),e(em,El),e(El,a2),e(Yt,r2),e(Yt,tm),e(tm,wl),e(wl,i2),e(Yt,l2),e(Yt,om),e(om,$l),e($l,d2),e(Yt,c2),e(Yt,nm),e(nm,Fl),e(Fl,p2),e(We,h2),e(We,Lt),E(xl,Lt,null),e(Lt,m2),e(Lt,un),e(un,u2),e(un,sm),e(sm,f2),e(un,g2),e(un,am),e(am,_2),e(un,k2),e(Lt,v2),E(Xs,Lt,null),e(Lt,T2),E(Ys,Lt,null),k(o,bf,v),k(o,fn,v),e(fn,Zs),e(Zs,rm),E(Ml,rm,null),e(fn,b2),e(fn,im),e(im,y2),k(o,yf,v),k(o,Ue,v),E(zl,Ue,null),e(Ue,E2),e(Ue,lm),e(lm,w2),e(Ue,$2),e(Ue,Cl),e(Cl,F2),e(Cl,cc),e(cc,x2),e(Cl,M2),e(Ue,z2),e(Ue,jl),e(jl,C2),e(jl,ql),e(ql,j2),e(jl,q2),e(Ue,P2),e(Ue,dm),e(dm,A2),e(Ue,O2),e(Ue,Zt),e(Zt,cm),e(cm,Pl),e(Pl,L2),e(Zt,N2),e(Zt,pm),e(pm,Al),e(Al,I2),e(Zt,D2),e(Zt,hm),e(hm,Ol),e(Ol,S2),e(Zt,W2),e(Zt,mm),e(mm,Ll),e(Ll,U2),e(Ue,R2),e(Ue,Nt),E(Nl,Nt,null),e(Nt,H2),e(Nt,gn),e(gn,B2),e(gn,um),e(um,Q2),e(gn,V2),e(gn,fm),e(fm,K2),e(gn,J2),e(Nt,G2),E(ea,Nt,null),e(Nt,X2),E(ta,Nt,null),k(o,Ef,v),k(o,_n,v),e(_n,oa),e(oa,gm),E(Il,gm,null),e(_n,Y2),e(_n,_m),e(_m,Z2),k(o,wf,v),k(o,Ae,v),E(Dl,Ae,null),e(Ae,e0),e(Ae,km),e(km,t0),e(Ae,o0),e(Ae,vm),e(vm,n0),e(Ae,s0),e(Ae,Sl),e(Sl,a0),e(Sl,pc),e(pc,r0),e(Sl,i0),e(Ae,l0),e(Ae,Wl),e(Wl,d0),e(Wl,Ul),e(Ul,c0),e(Wl,p0),e(Ae,h0),e(Ae,Tm),e(Tm,m0),e(Ae,u0),e(Ae,eo),e(eo,bm),e(bm,Rl),e(Rl,f0),e(eo,g0),e(eo,ym),e(ym,Hl),e(Hl,_0),e(eo,k0),e(eo,Em),e(Em,Bl),e(Bl,v0),e(eo,T0),e(eo,wm),e(wm,Ql),e(Ql,b0),e(Ae,y0),e(Ae,It),E(Vl,It,null),e(It,E0),e(It,kn),e(kn,w0),e(kn,$m),e($m,$0),e(kn,F0),e(kn,Fm),e(Fm,x0),e(kn,M0),e(It,z0),E(na,It,null),e(It,C0),E(sa,It,null),k(o,$f,v),k(o,vn,v),e(vn,aa),e(aa,xm),E(Kl,xm,null),e(vn,j0),e(vn,Mm),e(Mm,q0),k(o,Ff,v),k(o,Re,v),E(Jl,Re,null),e(Re,P0),e(Re,Tn),e(Tn,A0),e(Tn,zm),e(zm,O0),e(Tn,L0),e(Tn,Cm),e(Cm,N0),e(Tn,I0),e(Re,D0),e(Re,Gl),e(Gl,S0),e(Gl,hc),e(hc,W0),e(Gl,U0),e(Re,R0),e(Re,Xl),e(Xl,H0),e(Xl,Yl),e(Yl,B0),e(Xl,Q0),e(Re,V0),e(Re,jm),e(jm,K0),e(Re,J0),e(Re,to),e(to,qm),e(qm,Zl),e(Zl,G0),e(to,X0),e(to,Pm),e(Pm,ed),e(ed,Y0),e(to,Z0),e(to,Am),e(Am,td),e(td,eF),e(to,tF),e(to,Om),e(Om,od),e(od,oF),e(Re,nF),e(Re,Dt),E(nd,Dt,null),e(Dt,sF),e(Dt,bn),e(bn,aF),e(bn,Lm),e(Lm,rF),e(bn,iF),e(bn,Nm),e(Nm,lF),e(bn,dF),e(Dt,cF),E(ra,Dt,null),e(Dt,pF),E(ia,Dt,null),xf=!0},p(o,[v]){const sd={};v&2&&(sd.$$scope={dirty:v,ctx:o}),wn.$set(sd);const Im={};v&2&&(Im.$$scope={dirty:v,ctx:o}),jn.$set(Im);const Dm={};v&2&&(Dm.$$scope={dirty:v,ctx:o}),qn.$set(Dm);const Sm={};v&2&&(Sm.$$scope={dirty:v,ctx:o}),An.$set(Sm);const ad={};v&2&&(ad.$$scope={dirty:v,ctx:o}),On.$set(ad);const Wm={};v&2&&(Wm.$$scope={dirty:v,ctx:o}),Nn.$set(Wm);const Um={};v&2&&(Um.$$scope={dirty:v,ctx:o}),In.$set(Um);const Rm={};v&2&&(Rm.$$scope={dirty:v,ctx:o}),Sn.$set(Rm);const rd={};v&2&&(rd.$$scope={dirty:v,ctx:o}),Wn.$set(rd);const Hm={};v&2&&(Hm.$$scope={dirty:v,ctx:o}),Un.$set(Hm);const Bm={};v&2&&(Bm.$$scope={dirty:v,ctx:o}),Hn.$set(Bm);const Qm={};v&2&&(Qm.$$scope={dirty:v,ctx:o}),Bn.$set(Qm);const Vm={};v&2&&(Vm.$$scope={dirty:v,ctx:o}),Qn.$set(Vm);const Km={};v&2&&(Km.$$scope={dirty:v,ctx:o}),Vn.$set(Km);const id={};v&2&&(id.$$scope={dirty:v,ctx:o}),Kn.$set(id);const Jm={};v&2&&(Jm.$$scope={dirty:v,ctx:o}),Gn.$set(Jm);const oo={};v&2&&(oo.$$scope={dirty:v,ctx:o}),Xn.$set(oo);const Gm={};v&2&&(Gm.$$scope={dirty:v,ctx:o}),Zn.$set(Gm);const Xm={};v&2&&(Xm.$$scope={dirty:v,ctx:o}),es.$set(Xm);const Ym={};v&2&&(Ym.$$scope={dirty:v,ctx:o}),ts.$set(Ym);const yn={};v&2&&(yn.$$scope={dirty:v,ctx:o}),ns.$set(yn);const Zm={};v&2&&(Zm.$$scope={dirty:v,ctx:o}),ss.$set(Zm);const eu={};v&2&&(eu.$$scope={dirty:v,ctx:o}),as.$set(eu);const ld={};v&2&&(ld.$$scope={dirty:v,ctx:o}),is.$set(ld);const tu={};v&2&&(tu.$$scope={dirty:v,ctx:o}),ls.$set(tu);const ou={};v&2&&(ou.$$scope={dirty:v,ctx:o}),ds.$set(ou);const nu={};v&2&&(nu.$$scope={dirty:v,ctx:o}),ps.$set(nu);const no={};v&2&&(no.$$scope={dirty:v,ctx:o}),hs.$set(no);const so={};v&2&&(so.$$scope={dirty:v,ctx:o}),ms.$set(so);const su={};v&2&&(su.$$scope={dirty:v,ctx:o}),fs.$set(su);const au={};v&2&&(au.$$scope={dirty:v,ctx:o}),gs.$set(au);const ru={};v&2&&(ru.$$scope={dirty:v,ctx:o}),_s.$set(ru);const En={};v&2&&(En.$$scope={dirty:v,ctx:o}),ks.$set(En);const iu={};v&2&&(iu.$$scope={dirty:v,ctx:o}),Ts.$set(iu);const lu={};v&2&&(lu.$$scope={dirty:v,ctx:o}),bs.$set(lu);const dd={};v&2&&(dd.$$scope={dirty:v,ctx:o}),ys.$set(dd);const du={};v&2&&(du.$$scope={dirty:v,ctx:o}),Es.$set(du);const cu={};v&2&&(cu.$$scope={dirty:v,ctx:o}),$s.$set(cu);const pu={};v&2&&(pu.$$scope={dirty:v,ctx:o}),Fs.$set(pu);const ao={};v&2&&(ao.$$scope={dirty:v,ctx:o}),xs.$set(ao);const hu={};v&2&&(hu.$$scope={dirty:v,ctx:o}),zs.$set(hu);const la={};v&2&&(la.$$scope={dirty:v,ctx:o}),Cs.$set(la);const mu={};v&2&&(mu.$$scope={dirty:v,ctx:o}),js.$set(mu);const uu={};v&2&&(uu.$$scope={dirty:v,ctx:o}),qs.$set(uu);const cd={};v&2&&(cd.$$scope={dirty:v,ctx:o}),As.$set(cd);const fu={};v&2&&(fu.$$scope={dirty:v,ctx:o}),Os.$set(fu);const pd={};v&2&&(pd.$$scope={dirty:v,ctx:o}),Ls.$set(pd);const gu={};v&2&&(gu.$$scope={dirty:v,ctx:o}),Ns.$set(gu);const _u={};v&2&&(_u.$$scope={dirty:v,ctx:o}),Ds.$set(_u);const ku={};v&2&&(ku.$$scope={dirty:v,ctx:o}),Ss.$set(ku);const ro={};v&2&&(ro.$$scope={dirty:v,ctx:o}),Us.$set(ro);const hd={};v&2&&(hd.$$scope={dirty:v,ctx:o}),Rs.$set(hd);const vu={};v&2&&(vu.$$scope={dirty:v,ctx:o}),Bs.$set(vu);const da={};v&2&&(da.$$scope={dirty:v,ctx:o}),Qs.$set(da);const Tu={};v&2&&(Tu.$$scope={dirty:v,ctx:o}),Ks.$set(Tu);const bu={};v&2&&(bu.$$scope={dirty:v,ctx:o}),Js.$set(bu);const md={};v&2&&(md.$$scope={dirty:v,ctx:o}),Xs.$set(md);const yu={};v&2&&(yu.$$scope={dirty:v,ctx:o}),Ys.$set(yu);const ud={};v&2&&(ud.$$scope={dirty:v,ctx:o}),ea.$set(ud);const Eu={};v&2&&(Eu.$$scope={dirty:v,ctx:o}),ta.$set(Eu);const wu={};v&2&&(wu.$$scope={dirty:v,ctx:o}),na.$set(wu);const $u={};v&2&&($u.$$scope={dirty:v,ctx:o}),sa.$set($u);const fd={};v&2&&(fd.$$scope={dirty:v,ctx:o}),ra.$set(fd);const gd={};v&2&&(gd.$$scope={dirty:v,ctx:o}),ia.$set(gd)},i(o){xf||(w(l.$$.fragment,o),w(oe.$$.fragment,o),w(Pa.$$.fragment,o),w(Aa.$$.fragment,o),w(wn.$$.fragment,o),w(La.$$.fragment,o),w(Na.$$.fragment,o),w(Da.$$.fragment,o),w(Sa.$$.fragment,o),w(Ra.$$.fragment,o),w(Ha.$$.fragment,o),w(Qa.$$.fragment,o),w(Ka.$$.fragment,o),w(Ja.$$.fragment,o),w(Za.$$.fragment,o),w(jn.$$.fragment,o),w(qn.$$.fragment,o),w(er.$$.fragment,o),w(tr.$$.fragment,o),w(ar.$$.fragment,o),w(An.$$.fragment,o),w(On.$$.fragment,o),w(rr.$$.fragment,o),w(ir.$$.fragment,o),w(hr.$$.fragment,o),w(Nn.$$.fragment,o),w(In.$$.fragment,o),w(mr.$$.fragment,o),w(ur.$$.fragment,o),w(kr.$$.fragment,o),w(Sn.$$.fragment,o),w(Wn.$$.fragment,o),w(Un.$$.fragment,o),w(vr.$$.fragment,o),w(Tr.$$.fragment,o),w(wr.$$.fragment,o),w(Hn.$$.fragment,o),w(Bn.$$.fragment,o),w(Qn.$$.fragment,o),w(Vn.$$.fragment,o),w(Kn.$$.fragment,o),w($r.$$.fragment,o),w(Fr.$$.fragment,o),w(Cr.$$.fragment,o),w(Gn.$$.fragment,o),w(Xn.$$.fragment,o),w(jr.$$.fragment,o),w(qr.$$.fragment,o),w(Lr.$$.fragment,o),w(Zn.$$.fragment,o),w(es.$$.fragment,o),w(ts.$$.fragment,o),w(Nr.$$.fragment,o),w(Ir.$$.fragment,o),w(Ur.$$.fragment,o),w(ns.$$.fragment,o),w(ss.$$.fragment,o),w(as.$$.fragment,o),w(Rr.$$.fragment,o),w(Hr.$$.fragment,o),w(is.$$.fragment,o),w(Kr.$$.fragment,o),w(ls.$$.fragment,o),w(ds.$$.fragment,o),w(Jr.$$.fragment,o),w(Gr.$$.fragment,o),w(ps.$$.fragment,o),w(ei.$$.fragment,o),w(hs.$$.fragment,o),w(ms.$$.fragment,o),w(ti.$$.fragment,o),w(oi.$$.fragment,o),w(fs.$$.fragment,o),w(ri.$$.fragment,o),w(gs.$$.fragment,o),w(_s.$$.fragment,o),w(ks.$$.fragment,o),w(ii.$$.fragment,o),w(li.$$.fragment,o),w(Ts.$$.fragment,o),w(hi.$$.fragment,o),w(bs.$$.fragment,o),w(ys.$$.fragment,o),w(Es.$$.fragment,o),w(mi.$$.fragment,o),w(ui.$$.fragment,o),w($s.$$.fragment,o),w(ki.$$.fragment,o),w(Fs.$$.fragment,o),w(xs.$$.fragment,o),w(vi.$$.fragment,o),w(Ti.$$.fragment,o),w(zs.$$.fragment,o),w(wi.$$.fragment,o),w(Cs.$$.fragment,o),w(js.$$.fragment,o),w(qs.$$.fragment,o),w($i.$$.fragment,o),w(Fi.$$.fragment,o),w(As.$$.fragment,o),w(Ci.$$.fragment,o),w(Os.$$.fragment,o),w(Ls.$$.fragment,o),w(Ns.$$.fragment,o),w(ji.$$.fragment,o),w(qi.$$.fragment,o),w(Si.$$.fragment,o),w(Ds.$$.fragment,o),w(Ss.$$.fragment,o),w(Wi.$$.fragment,o),w(Ui.$$.fragment,o),w(Gi.$$.fragment,o),w(Us.$$.fragment,o),w(Rs.$$.fragment,o),w(Xi.$$.fragment,o),w(Yi.$$.fragment,o),w(rl.$$.fragment,o),w(Bs.$$.fragment,o),w(Qs.$$.fragment,o),w(il.$$.fragment,o),w(ll.$$.fragment,o),w(_l.$$.fragment,o),w(Ks.$$.fragment,o),w(Js.$$.fragment,o),w(kl.$$.fragment,o),w(vl.$$.fragment,o),w(xl.$$.fragment,o),w(Xs.$$.fragment,o),w(Ys.$$.fragment,o),w(Ml.$$.fragment,o),w(zl.$$.fragment,o),w(Nl.$$.fragment,o),w(ea.$$.fragment,o),w(ta.$$.fragment,o),w(Il.$$.fragment,o),w(Dl.$$.fragment,o),w(Vl.$$.fragment,o),w(na.$$.fragment,o),w(sa.$$.fragment,o),w(Kl.$$.fragment,o),w(Jl.$$.fragment,o),w(nd.$$.fragment,o),w(ra.$$.fragment,o),w(ia.$$.fragment,o),xf=!0)},o(o){$(l.$$.fragment,o),$(oe.$$.fragment,o),$(Pa.$$.fragment,o),$(Aa.$$.fragment,o),$(wn.$$.fragment,o),$(La.$$.fragment,o),$(Na.$$.fragment,o),$(Da.$$.fragment,o),$(Sa.$$.fragment,o),$(Ra.$$.fragment,o),$(Ha.$$.fragment,o),$(Qa.$$.fragment,o),$(Ka.$$.fragment,o),$(Ja.$$.fragment,o),$(Za.$$.fragment,o),$(jn.$$.fragment,o),$(qn.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(ar.$$.fragment,o),$(An.$$.fragment,o),$(On.$$.fragment,o),$(rr.$$.fragment,o),$(ir.$$.fragment,o),$(hr.$$.fragment,o),$(Nn.$$.fragment,o),$(In.$$.fragment,o),$(mr.$$.fragment,o),$(ur.$$.fragment,o),$(kr.$$.fragment,o),$(Sn.$$.fragment,o),$(Wn.$$.fragment,o),$(Un.$$.fragment,o),$(vr.$$.fragment,o),$(Tr.$$.fragment,o),$(wr.$$.fragment,o),$(Hn.$$.fragment,o),$(Bn.$$.fragment,o),$(Qn.$$.fragment,o),$(Vn.$$.fragment,o),$(Kn.$$.fragment,o),$($r.$$.fragment,o),$(Fr.$$.fragment,o),$(Cr.$$.fragment,o),$(Gn.$$.fragment,o),$(Xn.$$.fragment,o),$(jr.$$.fragment,o),$(qr.$$.fragment,o),$(Lr.$$.fragment,o),$(Zn.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(Nr.$$.fragment,o),$(Ir.$$.fragment,o),$(Ur.$$.fragment,o),$(ns.$$.fragment,o),$(ss.$$.fragment,o),$(as.$$.fragment,o),$(Rr.$$.fragment,o),$(Hr.$$.fragment,o),$(is.$$.fragment,o),$(Kr.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(Jr.$$.fragment,o),$(Gr.$$.fragment,o),$(ps.$$.fragment,o),$(ei.$$.fragment,o),$(hs.$$.fragment,o),$(ms.$$.fragment,o),$(ti.$$.fragment,o),$(oi.$$.fragment,o),$(fs.$$.fragment,o),$(ri.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(ks.$$.fragment,o),$(ii.$$.fragment,o),$(li.$$.fragment,o),$(Ts.$$.fragment,o),$(hi.$$.fragment,o),$(bs.$$.fragment,o),$(ys.$$.fragment,o),$(Es.$$.fragment,o),$(mi.$$.fragment,o),$(ui.$$.fragment,o),$($s.$$.fragment,o),$(ki.$$.fragment,o),$(Fs.$$.fragment,o),$(xs.$$.fragment,o),$(vi.$$.fragment,o),$(Ti.$$.fragment,o),$(zs.$$.fragment,o),$(wi.$$.fragment,o),$(Cs.$$.fragment,o),$(js.$$.fragment,o),$(qs.$$.fragment,o),$($i.$$.fragment,o),$(Fi.$$.fragment,o),$(As.$$.fragment,o),$(Ci.$$.fragment,o),$(Os.$$.fragment,o),$(Ls.$$.fragment,o),$(Ns.$$.fragment,o),$(ji.$$.fragment,o),$(qi.$$.fragment,o),$(Si.$$.fragment,o),$(Ds.$$.fragment,o),$(Ss.$$.fragment,o),$(Wi.$$.fragment,o),$(Ui.$$.fragment,o),$(Gi.$$.fragment,o),$(Us.$$.fragment,o),$(Rs.$$.fragment,o),$(Xi.$$.fragment,o),$(Yi.$$.fragment,o),$(rl.$$.fragment,o),$(Bs.$$.fragment,o),$(Qs.$$.fragment,o),$(il.$$.fragment,o),$(ll.$$.fragment,o),$(_l.$$.fragment,o),$(Ks.$$.fragment,o),$(Js.$$.fragment,o),$(kl.$$.fragment,o),$(vl.$$.fragment,o),$(xl.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),$(Ml.$$.fragment,o),$(zl.$$.fragment,o),$(Nl.$$.fragment,o),$(ea.$$.fragment,o),$(ta.$$.fragment,o),$(Il.$$.fragment,o),$(Dl.$$.fragment,o),$(Vl.$$.fragment,o),$(na.$$.fragment,o),$(sa.$$.fragment,o),$(Kl.$$.fragment,o),$(Jl.$$.fragment,o),$(nd.$$.fragment,o),$(ra.$$.fragment,o),$(ia.$$.fragment,o),xf=!1},d(o){t(d),o&&t(g),o&&t(h),F(l),o&&t(J),o&&t(C),F(oe),o&&t(pe),o&&t(K),o&&t(P),o&&t(ae),o&&t(he),o&&t(re),o&&t(me),o&&t(q),o&&t(U),o&&t(te),o&&t(xe),o&&t(be),o&&t(Me),o&&t(Z),F(Pa),o&&t(Fu),o&&t(yt),F(Aa),F(wn),o&&t(xu),o&&t(bo),F(La),o&&t(Mu),o&&t(Et),F(Na),o&&t(zu),o&&t(yo),F(Da),o&&t(Cu),o&&t(wt),F(Sa),o&&t(ju),o&&t(Eo),F(Ra),o&&t(qu),o&&t(wo),F(Ha),o&&t(Pu),o&&t($o),F(Qa),o&&t(Au),o&&t(Fo),F(Ka),o&&t(Ou),o&&t(et),F(Ja),F(Za),F(jn),F(qn),o&&t(Lu),o&&t(Mo),F(er),o&&t(Nu),o&&t(Be),F(tr),F(ar),F(An),F(On),o&&t(Iu),o&&t(Co),F(rr),o&&t(Du),o&&t(tt),F(ir),F(hr),F(Nn),F(In),o&&t(Su),o&&t(qo),F(mr),o&&t(Wu),o&&t(Qe),F(ur),F(kr),F(Sn),F(Wn),F(Un),o&&t(Uu),o&&t(Ao),F(vr),o&&t(Ru),o&&t(ot),F(Tr),F(wr),F(Hn),F(Bn),F(Qn),F(Vn),F(Kn),o&&t(Hu),o&&t(Lo),F($r),o&&t(Bu),o&&t(nt),F(Fr),F(Cr),F(Gn),F(Xn),o&&t(Qu),o&&t(Io),F(jr),o&&t(Vu),o&&t(Ve),F(qr),F(Lr),F(Zn),F(es),F(ts),o&&t(Ku),o&&t(So),F(Nr),o&&t(Ju),o&&t(st),F(Ir),F(Ur),F(ns),F(ss),F(as),o&&t(Gu),o&&t(Ro),F(Rr),o&&t(Xu),o&&t(Ke),F(Hr),F(is),F(Kr),F(ls),F(ds),o&&t(Yu),o&&t(Bo),F(Jr),o&&t(Zu),o&&t(Oe),F(Gr),F(ps),F(ei),F(hs),F(ms),o&&t(ef),o&&t(Vo),F(ti),o&&t(tf),o&&t(Le),F(oi),F(fs),F(ri),F(gs),F(_s),F(ks),o&&t(of),o&&t(Jo),F(ii),o&&t(nf),o&&t(Je),F(li),F(Ts),F(hi),F(bs),F(ys),F(Es),o&&t(sf),o&&t(Xo),F(mi),o&&t(af),o&&t(Ge),F(ui),F($s),F(ki),F(Fs),F(xs),o&&t(rf),o&&t(Zo),F(vi),o&&t(lf),o&&t(Ne),F(Ti),F(zs),F(wi),F(Cs),F(js),F(qs),o&&t(df),o&&t(tn),F($i),o&&t(cf),o&&t(Xe),F(Fi),F(As),F(Ci),F(Os),F(Ls),F(Ns),o&&t(pf),o&&t(sn),F(ji),o&&t(hf),o&&t(Ie),F(qi),F(Si),F(Ds),F(Ss),o&&t(mf),o&&t(rn),F(Wi),o&&t(uf),o&&t(Pe),F(Ui),F(Gi),F(Us),F(Rs),o&&t(ff),o&&t(dn),F(Xi),o&&t(gf),o&&t(De),F(Yi),F(rl),F(Bs),F(Qs),o&&t(_f),o&&t(pn),F(il),o&&t(kf),o&&t(Se),F(ll),F(_l),F(Ks),F(Js),o&&t(vf),o&&t(mn),F(kl),o&&t(Tf),o&&t(We),F(vl),F(xl),F(Xs),F(Ys),o&&t(bf),o&&t(fn),F(Ml),o&&t(yf),o&&t(Ue),F(zl),F(Nl),F(ea),F(ta),o&&t(Ef),o&&t(_n),F(Il),o&&t(wf),o&&t(Ae),F(Dl),F(Vl),F(na),F(sa),o&&t($f),o&&t(vn),F(Kl),o&&t(Ff),o&&t(Re),F(Jl),F(nd),F(ra),F(ia)}}}const xj={local:"electra",sections:[{local:"overview",title:"Overview"},{local:"transformers.ElectraConfig",title:"ElectraConfig"},{local:"transformers.ElectraTokenizer",title:"ElectraTokenizer"},{local:"transformers.ElectraTokenizerFast",title:"ElectraTokenizerFast"},{local:"transformers.models.electra.modeling_electra.ElectraForPreTrainingOutput",title:"Electra specific outputs"},{local:"transformers.ElectraModel",title:"ElectraModel"},{local:"transformers.ElectraForPreTraining",title:"ElectraForPreTraining"},{local:"transformers.ElectraForCausalLM",title:"ElectraForCausalLM"},{local:"transformers.ElectraForMaskedLM",title:"ElectraForMaskedLM"},{local:"transformers.ElectraForSequenceClassification",title:"ElectraForSequenceClassification"},{local:"transformers.ElectraForMultipleChoice",title:"ElectraForMultipleChoice"},{local:"transformers.ElectraForTokenClassification",title:"ElectraForTokenClassification"},{local:"transformers.ElectraForQuestionAnswering",title:"ElectraForQuestionAnswering"},{local:"transformers.TFElectraModel",title:"TFElectraModel"},{local:"transformers.TFElectraForPreTraining",title:"TFElectraForPreTraining"},{local:"transformers.TFElectraForMaskedLM",title:"TFElectraForMaskedLM"},{local:"transformers.TFElectraForSequenceClassification",title:"TFElectraForSequenceClassification"},{local:"transformers.TFElectraForMultipleChoice",title:"TFElectraForMultipleChoice"},{local:"transformers.TFElectraForTokenClassification",title:"TFElectraForTokenClassification"},{local:"transformers.TFElectraForQuestionAnswering",title:"TFElectraForQuestionAnswering"},{local:"transformers.FlaxElectraModel",title:"FlaxElectraModel"},{local:"transformers.FlaxElectraForPreTraining",title:"FlaxElectraForPreTraining"},{local:"transformers.FlaxElectraForCausalLM",title:"FlaxElectraForCausalLM"},{local:"transformers.FlaxElectraForMaskedLM",title:"FlaxElectraForMaskedLM"},{local:"transformers.FlaxElectraForSequenceClassification",title:"FlaxElectraForSequenceClassification"},{local:"transformers.FlaxElectraForMultipleChoice",title:"FlaxElectraForMultipleChoice"},{local:"transformers.FlaxElectraForTokenClassification",title:"FlaxElectraForTokenClassification"},{local:"transformers.FlaxElectraForQuestionAnswering",title:"FlaxElectraForQuestionAnswering"}],title:"ELECTRA"};function Mj(x){return fC(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Oj extends pC{constructor(d){super();hC(this,d,Mj,Fj,mC,{})}}export{Oj as default,xj as metadata};
